"use client";

import { useEffect, useMemo, useState } from "react";
import { StatusBar } from "./StatusBar";
import { HomeScreen } from "./screens/HomeScreen";
import { StageSelectScreen } from "./screens/StageSelectScreen";
import { TypingScreen } from "./screens/TypingScreen";
import { ClearScreen } from "./screens/ClearScreen";
import { DressUpScreen } from "./screens/DressUpScreen";
import { findStage, levels } from "@/data/levels";
import type { AvatarCategory } from "@/features/avatar/types";
import type { GameResult, Level, Stage } from "@/features/game/types";
import { initialPlayerData, LocalStoragePlayerStorage } from "@/features/progress/playerStorage";
import { getCurrentLevel, getNewlyUnlockedLevel, getNextUnlockedStage, getRecommendedStage } from "@/features/progress/progression";
import { calculateEarnedReward, type EarnedReward } from "@/features/progress/stageRewards";
import type { PlayerSaveData } from "@/features/progress/types";
import { avatarItems } from "@/data/items";
import { isItemUnlocked, purchaseAvatarItem, type PurchaseStatus } from "@/features/inventory/shop";

type Screen = "home" | "stages" | "typing" | "clear" | "dressup";
type DressCategory = "hair" | "outfit" | "shoes" | "accessory";

const emptyReward: EarnedReward = { coins: 0, firstClear: false, threeStarBonus: false };

export function KirakiraTypingApp() {
  const storage = useMemo(() => new LocalStoragePlayerStorage(), []);
  const [player, setPlayer] = useState<PlayerSaveData>(initialPlayerData);
  const [screen, setScreen] = useState<Screen>("home");
  const [selectedStageId, setSelectedStageId] = useState("1-1");
  const [result, setResult] = useState<GameResult>({ correct: 0, answered: 0, mistakes: 0, stars: 0, cleared: false });
  const [earnedReward, setEarnedReward] = useState<EarnedReward>(emptyReward);
  const [unlockedLevel, setUnlockedLevel] = useState<Level>();
  const [category, setCategory] = useState<DressCategory>("hair");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const savedPlayer = storage.load();
    const loadTask = window.setTimeout(() => {
      setPlayer(savedPlayer);
      setSelectedStageId(getRecommendedStage(savedPlayer.progress).id);
      setReady(true);
    }, 0);
    return () => window.clearTimeout(loadTask);
  }, [storage]);
  useEffect(() => { if (ready) storage.save(player); }, [player, ready, storage]);

  const selectedStage = findStage(selectedStageId) ?? levels[0].stages[0];
  const recommendedStage = getRecommendedStage(player.progress);
  const currentLevel = getCurrentLevel(player.progress);

  const startStage = (stage: Stage) => {
    setSelectedStageId(stage.id);
    setUnlockedLevel(undefined);
    setScreen("typing");
  };

  const finishGame = (gameResult: GameResult) => {
    const stage = findStage(selectedStageId) ?? levels[0].stages[0];
    const previousStars = player.progress.stageStars[stage.id] ?? 0;
    const reward = calculateEarnedReward(stage, gameResult, previousStars, player.inventory.ownedItemIds);
    const bestStars = Math.max(previousStars, gameResult.stars);
    const wasCleared = player.progress.clearedStageIds.includes(stage.id);
    const nextClearedIds = gameResult.cleared && !wasCleared ? [...player.progress.clearedStageIds, stage.id] : player.progress.clearedStageIds;
    const nextProgress = {
      ...player.progress,
      coins: player.progress.coins + reward.coins,
      completedPlays: player.progress.completedPlays + 1,
      bestCorrect: Math.max(player.progress.bestCorrect, gameResult.correct),
      clearedStageIds: nextClearedIds,
      stageStars: bestStars > 0 ? { ...player.progress.stageStars, [stage.id]: bestStars } : player.progress.stageStars,
    };
    const nextPlayer: PlayerSaveData = {
      ...player,
      progress: nextProgress,
      inventory: reward.itemId ? { ownedItemIds: [...player.inventory.ownedItemIds, reward.itemId] } : player.inventory,
    };

    setResult(gameResult);
    setEarnedReward(reward);
    setUnlockedLevel(getNewlyUnlockedLevel(player.progress, nextProgress));
    setPlayer(nextPlayer);
    setScreen("clear");
  };

  const selectItem = (itemCategory: AvatarCategory, id: string) => setPlayer((current) => current.inventory.ownedItemIds.includes(id)
    ? { ...current, avatar: { ...current.avatar, [itemCategory]: id } }
    : current);
  const purchaseItem = (itemId: string): PurchaseStatus => {
    const purchase = purchaseAvatarItem(player, itemId);
    if (purchase.status === "purchased") setPlayer(purchase.player);
    return purchase.status;
  };
  const goHome = () => setScreen("home");
  const nextStage = getNextUnlockedStage(selectedStage.id, player.progress);

  return (
    <div className="app-shell">
      <div className="ambient-stars" aria-hidden="true">✦　　✧　　　　✦　　✧</div>
      {screen !== "typing" && screen !== "clear" && <StatusBar coins={player.progress.coins} levelLabel={`Lv.${currentLevel.number} ${currentLevel.name}`} />}
      {screen === "home" && <HomeScreen avatar={player.avatar} onPlay={() => setScreen("stages")} onDressUp={() => setScreen("dressup")} />}
      {screen === "stages" && <StageSelectScreen progress={player.progress} recommendedStageId={recommendedStage.id} onSelect={startStage} onHome={goHome} />}
      {screen === "typing" && <TypingScreen key={`${selectedStage.id}-${player.progress.completedPlays}`} stage={selectedStage} avatar={player.avatar} onFinish={finishGame} onExit={() => setScreen("stages")} />}
      {screen === "clear" && <ClearScreen result={result} stage={selectedStage} reward={earnedReward} unlockedLevel={unlockedLevel} avatar={player.avatar} hasNextStage={Boolean(nextStage)} onNext={() => nextStage && startStage(nextStage)} onRetry={() => startStage(selectedStage)} onStages={() => setScreen("stages")} onHome={goHome} />}
      {screen === "dressup" && <DressUpScreen avatar={player.avatar} coins={player.progress.coins} ownedItemIds={player.inventory.ownedItemIds} unlockedItemIds={avatarItems.filter((item) => isItemUnlocked(item, player)).map((item) => item.itemId)} activeCategory={category} onCategory={setCategory} onSelect={selectItem} onPurchase={purchaseItem} onHome={goHome} />}
      <footer><span>キラキラタイピング学園</span><small>ゆっくり・たのしく・じぶんのペースで</small></footer>
    </div>
  );
}
