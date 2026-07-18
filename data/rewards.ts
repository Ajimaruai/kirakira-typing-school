import type { StageReward } from "@/features/game/types";

export const stageRewards: Record<string, StageReward> = {
  "lv1-standard": { baseCoins: 20, firstClearBonus: 15, threeStarBonus: 5 },
  "lv1-star-pin": { baseCoins: 20, firstClearBonus: 15, threeStarBonus: 5, itemId: "accessory-star" },
  "lv1-clover-pin": { baseCoins: 20, firstClearBonus: 15, threeStarBonus: 5, itemId: "accessory-clover" },
  "lv2-standard": { baseCoins: 25, firstClearBonus: 20, threeStarBonus: 8 },
  "lv2-cloud-dress": { baseCoins: 25, firstClearBonus: 20, threeStarBonus: 8, itemId: "outfit-sunny" },
  "lv3-standard": { baseCoins: 35, firstClearBonus: 25, threeStarBonus: 10 },
  "lv4-standard": { baseCoins: 45, firstClearBonus: 35, threeStarBonus: 15 },
  "lv5-standard": { baseCoins: 60, firstClearBonus: 40, threeStarBonus: 20 },
};
