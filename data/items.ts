import type { AvatarItem } from "@/features/inventory/types";

export const avatarItems: AvatarItem[] = [
  { itemId: "hair-bob", category: "hair", name: "ましゅまろボブ", icon: "☁️", rarity: "starter", price: 0, ownedByDefault: true, unlockCondition: { type: "always" }, rewardType: "shop", visualType: "css", visualConfig: { styleKey: "bob", accent: "#6d4553" }, description: "まるくてやわらかな定番ボブ" },
  { itemId: "hair-twin", category: "hair", name: "ふわふわツイン", icon: "🎀", rarity: "starter", price: 0, ownedByDefault: true, unlockCondition: { type: "always" }, rewardType: "shop", visualType: "css", visualConfig: { styleKey: "twin", accent: "#5d3e50" }, description: "リボンみたいに揺れるツインヘア" },
  { itemId: "hair-side", category: "hair", name: "くるりんサイドテール", icon: "🍭", rarity: "common", price: 70, ownedByDefault: false, unlockCondition: { type: "always" }, rewardType: "shop", visualType: "css", visualConfig: { styleKey: "side", accent: "#87506d" }, description: "横でくるんとはずむ元気ヘア" },
  { itemId: "hair-kitten", category: "hair", name: "こねこショート", icon: "🐱", rarity: "common", price: 90, ownedByDefault: false, unlockCondition: { type: "always" }, rewardType: "shop", visualType: "css", visualConfig: { styleKey: "kitten", accent: "#76506b" }, description: "こねこの耳みたいなショート" },
  { itemId: "hair-bunny", category: "hair", name: "うさみみヘア", icon: "🐰", rarity: "uncommon", price: 160, ownedByDefault: false, unlockCondition: { type: "always" }, rewardType: "shop", visualType: "css", visualConfig: { styleKey: "bunny", accent: "#b66d91" }, description: "ぴょこんとした耳風アレンジ" },
  { itemId: "hair-sheep", category: "hair", name: "ひつじもこヘア", icon: "🐑", rarity: "uncommon", price: 220, ownedByDefault: false, unlockCondition: { type: "always" }, rewardType: "shop", visualType: "css", visualConfig: { styleKey: "sheep", accent: "#d9b4ca" }, description: "もこもこ雲みたいなひつじヘア" },
  { itemId: "hair-stardust", category: "hair", name: "星くずロング", icon: "🌠", rarity: "rare", price: 500, ownedByDefault: false, unlockCondition: { type: "always" }, rewardType: "shop", visualType: "css", visualConfig: { styleKey: "stardust", accent: "#65519a" }, description: "夜空色に星がきらめくロング" },
  { itemId: "hair-royal", category: "hair", name: "ロイヤルツイン", icon: "👑", rarity: "superRare", price: 1200, ownedByDefault: false, unlockCondition: { type: "levelUnlocked", levelNumber: 3 }, rewardType: "shop", visualType: "css", visualConfig: { styleKey: "royal", accent: "#8c65b7" }, description: "学園のお姫さまみたいな特別ヘア" },

  { itemId: "outfit-uniform", category: "outfit", name: "リボン制服", icon: "🎓", rarity: "starter", price: 0, ownedByDefault: true, unlockCondition: { type: "always" }, rewardType: "shop", visualType: "css", visualConfig: { styleKey: "uniform" }, description: "大きなリボンの学園制服" },
  { itemId: "outfit-cardigan", category: "outfit", name: "いちごカーデ", icon: "🍓", rarity: "starter", price: 0, ownedByDefault: true, unlockCondition: { type: "always" }, rewardType: "shop", visualType: "css", visualConfig: { styleKey: "cardigan" }, description: "いちごミルク色のふんわりカーデ" },
  { itemId: "outfit-hoodie", category: "outfit", name: "もこもこ学園パーカー", icon: "🧸", rarity: "common", price: 90, ownedByDefault: false, unlockCondition: { type: "always" }, rewardType: "shop", visualType: "css", visualConfig: { styleKey: "hoodie" }, description: "放課後にぴったりのもこもこ服" },
  { itemId: "outfit-sailor", category: "outfit", name: "星のセーラー", icon: "⭐", rarity: "uncommon", price: 150, ownedByDefault: false, unlockCondition: { type: "always" }, rewardType: "shop", visualType: "css", visualConfig: { styleKey: "sailor" }, description: "きらめく星えりのセーラー服" },
  { itemId: "outfit-sunny", category: "outfit", name: "雲のワンピ", icon: "☁️", rarity: "uncommon", price: 180, ownedByDefault: false, unlockCondition: { type: "stageCleared", stageId: "2-3" }, rewardType: "stageReward", visualType: "css", visualConfig: { styleKey: "cloud" }, description: "ステージ2-3でもらえる空色ワンピ" },
  { itemId: "outfit-bear", category: "outfit", name: "くまさんポンチョ", icon: "🐻", rarity: "rare", price: 380, ownedByDefault: false, unlockCondition: { type: "always" }, rewardType: "shop", visualType: "css", visualConfig: { styleKey: "bear" }, description: "丸いお耳つきのぬいぐるみポンチョ" },
  { itemId: "outfit-bunny", category: "outfit", name: "うさぎケープ", icon: "🐇", rarity: "rare", price: 520, ownedByDefault: false, unlockCondition: { type: "always" }, rewardType: "shop", visualType: "css", visualConfig: { styleKey: "bunny" }, description: "ふわふわしっぽのうさぎケープ" },
  { itemId: "outfit-dream", category: "outfit", name: "夢色ドレス", icon: "🦄", rarity: "superRare", price: 1000, ownedByDefault: false, unlockCondition: { type: "levelUnlocked", levelNumber: 3 }, rewardType: "shop", visualType: "css", visualConfig: { styleKey: "dream" }, description: "パステルの夢が重なるドレス" },
  { itemId: "outfit-night", category: "outfit", name: "夜空マント", icon: "🌙", rarity: "superRare", price: 1450, ownedByDefault: false, unlockCondition: { type: "levelUnlocked", levelNumber: 4 }, rewardType: "shop", visualType: "css", visualConfig: { styleKey: "night" }, description: "月と星をまとった夜空のマント" },
  { itemId: "outfit-legend", category: "outfit", name: "レジェンド学園ローブ", icon: "🏰", rarity: "legendary", price: 3500, ownedByDefault: false, unlockCondition: { type: "levelUnlocked", levelNumber: 4 }, rewardType: "shop", visualType: "css", visualConfig: { styleKey: "legend" }, description: "学園の物語に伝わる伝説のローブ" },

  { itemId: "shoes-brown", category: "shoes", name: "ふわふわルームシューズ", icon: "🧸", rarity: "starter", price: 0, ownedByDefault: true, unlockCondition: { type: "always" }, rewardType: "shop", visualType: "css", visualConfig: { styleKey: "brown" }, description: "やわらかくて歩きやすい靴" },
  { itemId: "shoes-pink", category: "shoes", name: "いちごシューズ", icon: "🍓", rarity: "starter", price: 0, ownedByDefault: true, unlockCondition: { type: "always" }, rewardType: "shop", visualType: "css", visualConfig: { styleKey: "pink" }, description: "いちご色の通学シューズ" },
  { itemId: "shoes-star", category: "shoes", name: "星スニーカー", icon: "⭐", rarity: "common", price: 80, ownedByDefault: false, unlockCondition: { type: "always" }, rewardType: "shop", visualType: "css", visualConfig: { styleKey: "star" }, description: "歩くたび星がきらめくスニーカー" },
  { itemId: "shoes-bunny", category: "shoes", name: "うさぎブーツ", icon: "🐰", rarity: "uncommon", price: 170, ownedByDefault: false, unlockCondition: { type: "always" }, rewardType: "shop", visualType: "css", visualConfig: { styleKey: "bunny" }, description: "白くてもこもこのうさぎブーツ" },
  { itemId: "shoes-cloud", category: "shoes", name: "雲のくつ", icon: "☁️", rarity: "rare", price: 420, ownedByDefault: false, unlockCondition: { type: "always" }, rewardType: "both", visualType: "css", visualConfig: { styleKey: "cloud" }, description: "雲の上を歩くようなふわふわ靴" },
  { itemId: "shoes-princess", category: "shoes", name: "プリンセスシューズ", icon: "💎", rarity: "superRare", price: 950, ownedByDefault: false, unlockCondition: { type: "levelUnlocked", levelNumber: 3 }, rewardType: "shop", visualType: "css", visualConfig: { styleKey: "princess" }, description: "宝石みたいに光る特別な靴" },

  { itemId: "accessory-none", category: "accessory", name: "アクセなし", icon: "✨", rarity: "starter", price: 0, ownedByDefault: true, unlockCondition: { type: "always" }, rewardType: "shop", visualType: "emoji", visualConfig: { styleKey: "none" }, description: "アクセサリーを外します" },
  { itemId: "accessory-ribbon", category: "accessory", name: "大きなリボン", icon: "🎀", rarity: "common", price: 60, ownedByDefault: false, unlockCondition: { type: "always" }, rewardType: "shop", visualType: "emoji", visualConfig: { styleKey: "ribbon", symbol: "🎀" }, description: "ましゅまろ色の大きなリボン" },
  { itemId: "accessory-star", category: "accessory", name: "星のヘアピン", icon: "⭐", rarity: "common", price: 70, ownedByDefault: false, unlockCondition: { type: "stageCleared", stageId: "1-1" }, rewardType: "both", visualType: "emoji", visualConfig: { styleKey: "star", symbol: "★" }, description: "ステージ1-1でも手に入る一番星" },
  { itemId: "accessory-clover", category: "accessory", name: "四つ葉のピン", icon: "🍀", rarity: "uncommon", price: 140, ownedByDefault: false, unlockCondition: { type: "stageCleared", stageId: "1-3" }, rewardType: "stageReward", visualType: "emoji", visualConfig: { styleKey: "clover", symbol: "♣" }, description: "ステージ1-3でもらえる幸運のピン" },
  { itemId: "accessory-cat", category: "accessory", name: "もこねこ耳", icon: "🐱", rarity: "uncommon", price: 180, ownedByDefault: false, unlockCondition: { type: "always" }, rewardType: "shop", visualType: "emoji", visualConfig: { styleKey: "cat", symbol: "🐱" }, description: "もこもこのこねこ耳" },
  { itemId: "accessory-bunny", category: "accessory", name: "うさぎ耳カチューシャ", icon: "🐰", rarity: "rare", price: 360, ownedByDefault: false, unlockCondition: { type: "always" }, rewardType: "shop", visualType: "emoji", visualConfig: { styleKey: "bunny", symbol: "🐰" }, description: "ぴょこんと元気なうさぎ耳" },
  { itemId: "accessory-bear", category: "accessory", name: "くまみみフード", icon: "🐻", rarity: "rare", price: 450, ownedByDefault: false, unlockCondition: { type: "always" }, rewardType: "shop", visualType: "emoji", visualConfig: { styleKey: "bear", symbol: "🐻" }, description: "ぬいぐるみみたいなくま耳" },
  { itemId: "accessory-heart", category: "accessory", name: "ハートポシェット", icon: "💗", rarity: "common", price: 90, ownedByDefault: false, unlockCondition: { type: "always" }, rewardType: "shop", visualType: "emoji", visualConfig: { styleKey: "heart", symbol: "💗" }, description: "おやつも入る小さなポシェット" },
  { itemId: "accessory-wand", category: "accessory", name: "星のステッキ", icon: "🪄", rarity: "superRare", price: 900, ownedByDefault: false, unlockCondition: { type: "levelUnlocked", levelNumber: 3 }, rewardType: "shop", visualType: "emoji", visualConfig: { styleKey: "wand", symbol: "🪄" }, description: "がんばる気持ちを照らすステッキ" },
  { itemId: "accessory-scarf", category: "accessory", name: "雲のマフラー", icon: "☁️", rarity: "uncommon", price: 200, ownedByDefault: false, unlockCondition: { type: "always" }, rewardType: "shop", visualType: "emoji", visualConfig: { styleKey: "scarf", symbol: "☁️" }, description: "首もとを包む雲のマフラー" },
  { itemId: "accessory-strawberry", category: "accessory", name: "いちごバッグ", icon: "🍓", rarity: "rare", price: 520, ownedByDefault: false, unlockCondition: { type: "always" }, rewardType: "shop", visualType: "emoji", visualConfig: { styleKey: "strawberry", symbol: "🍓" }, description: "ころんと丸いいちごバッグ" },
  { itemId: "accessory-moon", category: "accessory", name: "月のイヤリング", icon: "🌙", rarity: "superRare", price: 1300, ownedByDefault: false, unlockCondition: { type: "levelUnlocked", levelNumber: 4 }, rewardType: "shop", visualType: "emoji", visualConfig: { styleKey: "moon", symbol: "🌙" }, description: "夜になると淡く光る月飾り" },
  { itemId: "accessory-crown", category: "accessory", name: "レジェンド王冠", icon: "👑", rarity: "legendary", price: 3000, ownedByDefault: false, unlockCondition: { type: "levelUnlocked", levelNumber: 4 }, rewardType: "shop", visualType: "emoji", visualConfig: { styleKey: "crown", symbol: "👑" }, description: "いつか手に入れたい学園の宝物" },
];

export const defaultOwnedItemIds = avatarItems.filter((item) => item.ownedByDefault).map((item) => item.itemId);
export const findAvatarItem = (itemId: string) => avatarItems.find((item) => item.itemId === itemId);

export const rarityLabels = {
  starter: "スターター",
  common: "コモン",
  uncommon: "アンコモン",
  rare: "レア",
  superRare: "スーパーレア",
  legendary: "レジェンド",
} as const;

export const categoryLabels = {
  hair: "かみがた",
  outfit: "ふく",
  shoes: "くつ",
  accessory: "アクセ",
} as const;
