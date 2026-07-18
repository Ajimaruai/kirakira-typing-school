import { findAvatarItem } from "@/data/items";
import { getCurrentLevel } from "@/features/progress/progression";
import type { PlayerSaveData } from "@/features/progress/types";
import type { AvatarItem } from "./types";

export type PurchaseStatus = "purchased" | "alreadyOwned" | "notEnoughCoins" | "notForSale" | "locked" | "notFound";
export type PurchaseResult = { status: PurchaseStatus; player: PlayerSaveData; item?: AvatarItem };

export function isItemUnlocked(item: AvatarItem, player: PlayerSaveData) {
  const condition = item.unlockCondition;
  if (condition.type === "always") return true;
  if (condition.type === "stageCleared") return player.progress.clearedStageIds.includes(condition.stageId);
  return getCurrentLevel(player.progress).number >= condition.levelNumber;
}

export function purchaseAvatarItem(player: PlayerSaveData, itemId: string): PurchaseResult {
  const item = findAvatarItem(itemId);
  if (!item) return { status: "notFound", player };
  if (player.inventory.ownedItemIds.includes(itemId)) return { status: "alreadyOwned", player, item };
  if (item.rewardType === "stageReward") return { status: "notForSale", player, item };
  if (!isItemUnlocked(item, player)) return { status: "locked", player, item };
  if (player.progress.coins < item.price) return { status: "notEnoughCoins", player, item };

  return {
    status: "purchased",
    item,
    player: {
      ...player,
      progress: { ...player.progress, coins: player.progress.coins - item.price },
      inventory: { ownedItemIds: [...player.inventory.ownedItemIds, item.itemId] },
    },
  };
}
