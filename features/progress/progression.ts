import { allStages, findLevelForStage, levels } from "@/data/levels";
import type { Level, Stage, UnlockCondition } from "@/features/game/types";
import type { Progress } from "./types";

export function isStageCleared(stageId: string, progress: Progress) {
  return progress.clearedStageIds.includes(stageId);
}

export function isLevelCleared(levelId: string, progress: Progress) {
  const level = levels.find((entry) => entry.id === levelId);
  return Boolean(level && level.stages.every((stage) => isStageCleared(stage.id, progress)));
}

function meetsCondition(condition: UnlockCondition, progress: Progress) {
  if (condition.type === "always" || condition.type === "levelUnlocked") return true;
  if (condition.type === "stageCleared") return isStageCleared(condition.stageId, progress);
  return isLevelCleared(condition.levelId, progress);
}

export function isLevelUnlocked(level: Level, progress: Progress) {
  return meetsCondition(level.unlockCondition, progress);
}

export function isStageUnlocked(stage: Stage, progress: Progress) {
  const level = findLevelForStage(stage.id);
  return Boolean(level && isLevelUnlocked(level, progress) && meetsCondition(stage.unlockCondition, progress));
}

export function getRecommendedStage(progress: Progress) {
  return allStages.find((stage) => isStageUnlocked(stage, progress) && !isStageCleared(stage.id, progress))
    ?? [...allStages].reverse().find((stage) => isStageUnlocked(stage, progress))
    ?? allStages[0];
}

export function getCurrentLevel(progress: Progress) {
  const recommended = getRecommendedStage(progress);
  return findLevelForStage(recommended.id) ?? levels[0];
}

export function getNewlyUnlockedLevel(before: Progress, after: Progress) {
  return levels.find((level) => !isLevelUnlocked(level, before) && isLevelUnlocked(level, after));
}

export function getNextUnlockedStage(stageId: string, progress: Progress) {
  const index = allStages.findIndex((stage) => stage.id === stageId);
  const next = allStages[index + 1];
  return next && isStageUnlocked(next, progress) ? next : undefined;
}
