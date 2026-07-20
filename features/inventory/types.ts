import type { AvatarCategory } from "@/features/avatar/types";

export type ItemRarity = "starter" | "common" | "uncommon" | "rare" | "superRare" | "legendary";
export type ItemRewardType = "stageReward" | "shop" | "both";
export type AvatarVisualType = "css" | "emoji" | "layeredImage";
export type AvatarLayerSlot =
  | "hairBack"
  | "body"
  | "shoes"
  | "outfit"
  | "face"
  | "hairFront"
  | "accessory"
  | "pet"
  | "effect";

export type AvatarImageLayer = {
  slot: AvatarLayerSlot;
  src: string;
};

export type AvatarVisualConfig = {
  // CSS/emoji表示と、画像がないときのフォールバックで使用します。
  styleKey: string;
  symbol?: string;
  accent?: string;
  // layeredImageでは、用意できた素材から段階的に追加できます。
  thumbnailSrc?: string;
  layers?: AvatarImageLayer[];
};

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
  visualType: AvatarVisualType;
  visualConfig: AvatarVisualConfig;
  description: string;
};

export type Inventory = { ownedItemIds: string[] };
