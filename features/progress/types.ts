import type { AvatarSelection } from "@/features/avatar/types";
import type { Inventory } from "@/features/inventory/types";

export type StageProgress = {
  clearedStageIds: string[];
  stageStars: Record<string, number>;
};

export type Progress = StageProgress & {
  coins: number;
  completedPlays: number;
  bestCorrect: number;
};

export type PlayerSaveData = {
  version: 3;
  progress: Progress;
  inventory: Inventory;
  avatar: AvatarSelection;
};
