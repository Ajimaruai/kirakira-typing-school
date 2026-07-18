import { stageRewards } from "@/data/rewards";
import type { GameResult, Stage } from "@/features/game/types";

export type EarnedReward = {
  coins: number;
  itemId?: string;
  firstClear: boolean;
  threeStarBonus: boolean;
};

export function calculateEarnedReward(stage: Stage, result: GameResult, previousStars: number, ownedItemIds: string[]): EarnedReward {
  if (!result.cleared) return { coins: 0, firstClear: false, threeStarBonus: false };
  const reward = stageRewards[stage.rewardId];
  const firstClear = previousStars === 0;
  const threeStarBonus = result.stars === 3;
  return {
    coins: reward.baseCoins + (firstClear ? reward.firstClearBonus : 0) + (threeStarBonus ? reward.threeStarBonus : 0),
    itemId: firstClear && reward.itemId && !ownedItemIds.includes(reward.itemId) ? reward.itemId : undefined,
    firstClear,
    threeStarBonus,
  };
}
