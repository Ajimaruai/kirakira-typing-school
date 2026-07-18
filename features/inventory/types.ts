import type { AvatarCategory } from "@/features/avatar/types";

export type ItemRarity = "starter" | "common" | "uncommon" | "rare" | "superRare" | "legendary";
export type ItemRewardType = "stageReward" | "shop" | "both";
export type ItemUnlockCondition =
  | { type: "always" }
  | { type: "stageCleared"; stageId: string }
  | { type: "levelUnlocked"; levelNumber: number };

export type AvatarItem = {
  itemId: string;
  category: AvatarCategory;
  name: string;
  icon: string;
  rarity: ItemRarity;
  price: number;
  ownedByDefault: boolean;
  unlockCondition: ItemUnlockCondition;
  rewardType: ItemRewardType;
  visualType: "css" | "emoji";
  visualConfig: {
    styleKey: string;
    symbol?: string;
    accent?: string;
  };
  description: string;
};

export type Inventory = { ownedItemIds: string[] };
