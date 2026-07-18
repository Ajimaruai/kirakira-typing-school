import { a as require_react, o as __toESM, t as require_jsx_runtime } from "../index.js";
//#region components/StatusBar.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function StatusBar({ coins, levelLabel }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "status-bar",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "brand-mark",
			"aria-label": "キラキラタイピング学園",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✦" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "キラキラ" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "タイピング学園" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "status-bar__stats",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "pill pill--level",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "★" }), levelLabel]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "pill pill--coin",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "●" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
						"data-testid": "coin-count",
						children: coins
					}),
					" コイン"
				]
			})]
		})]
	});
}
//#endregion
//#region data/items.ts
var avatarItems = [
	{
		itemId: "hair-bob",
		category: "hair",
		name: "ましゅまろボブ",
		icon: "☁️",
		rarity: "starter",
		price: 0,
		ownedByDefault: true,
		unlockCondition: { type: "always" },
		rewardType: "shop",
		visualType: "css",
		visualConfig: {
			styleKey: "bob",
			accent: "#6d4553"
		},
		description: "まるくてやわらかな定番ボブ"
	},
	{
		itemId: "hair-twin",
		category: "hair",
		name: "ふわふわツイン",
		icon: "🎀",
		rarity: "starter",
		price: 0,
		ownedByDefault: true,
		unlockCondition: { type: "always" },
		rewardType: "shop",
		visualType: "css",
		visualConfig: {
			styleKey: "twin",
			accent: "#5d3e50"
		},
		description: "リボンみたいに揺れるツインヘア"
	},
	{
		itemId: "hair-side",
		category: "hair",
		name: "くるりんサイドテール",
		icon: "🍭",
		rarity: "common",
		price: 70,
		ownedByDefault: false,
		unlockCondition: { type: "always" },
		rewardType: "shop",
		visualType: "css",
		visualConfig: {
			styleKey: "side",
			accent: "#87506d"
		},
		description: "横でくるんとはずむ元気ヘア"
	},
	{
		itemId: "hair-kitten",
		category: "hair",
		name: "こねこショート",
		icon: "🐱",
		rarity: "common",
		price: 90,
		ownedByDefault: false,
		unlockCondition: { type: "always" },
		rewardType: "shop",
		visualType: "css",
		visualConfig: {
			styleKey: "kitten",
			accent: "#76506b"
		},
		description: "こねこの耳みたいなショート"
	},
	{
		itemId: "hair-bunny",
		category: "hair",
		name: "うさみみヘア",
		icon: "🐰",
		rarity: "uncommon",
		price: 160,
		ownedByDefault: false,
		unlockCondition: { type: "always" },
		rewardType: "shop",
		visualType: "css",
		visualConfig: {
			styleKey: "bunny",
			accent: "#b66d91"
		},
		description: "ぴょこんとした耳風アレンジ"
	},
	{
		itemId: "hair-sheep",
		category: "hair",
		name: "ひつじもこヘア",
		icon: "🐑",
		rarity: "uncommon",
		price: 220,
		ownedByDefault: false,
		unlockCondition: { type: "always" },
		rewardType: "shop",
		visualType: "css",
		visualConfig: {
			styleKey: "sheep",
			accent: "#d9b4ca"
		},
		description: "もこもこ雲みたいなひつじヘア"
	},
	{
		itemId: "hair-stardust",
		category: "hair",
		name: "星くずロング",
		icon: "🌠",
		rarity: "rare",
		price: 500,
		ownedByDefault: false,
		unlockCondition: { type: "always" },
		rewardType: "shop",
		visualType: "css",
		visualConfig: {
			styleKey: "stardust",
			accent: "#65519a"
		},
		description: "夜空色に星がきらめくロング"
	},
	{
		itemId: "hair-royal",
		category: "hair",
		name: "ロイヤルツイン",
		icon: "👑",
		rarity: "superRare",
		price: 1200,
		ownedByDefault: false,
		unlockCondition: {
			type: "levelUnlocked",
			levelNumber: 3
		},
		rewardType: "shop",
		visualType: "css",
		visualConfig: {
			styleKey: "royal",
			accent: "#8c65b7"
		},
		description: "学園のお姫さまみたいな特別ヘア"
	},
	{
		itemId: "outfit-uniform",
		category: "outfit",
		name: "リボン制服",
		icon: "🎓",
		rarity: "starter",
		price: 0,
		ownedByDefault: true,
		unlockCondition: { type: "always" },
		rewardType: "shop",
		visualType: "css",
		visualConfig: { styleKey: "uniform" },
		description: "大きなリボンの学園制服"
	},
	{
		itemId: "outfit-cardigan",
		category: "outfit",
		name: "いちごカーデ",
		icon: "🍓",
		rarity: "starter",
		price: 0,
		ownedByDefault: true,
		unlockCondition: { type: "always" },
		rewardType: "shop",
		visualType: "css",
		visualConfig: { styleKey: "cardigan" },
		description: "いちごミルク色のふんわりカーデ"
	},
	{
		itemId: "outfit-hoodie",
		category: "outfit",
		name: "もこもこ学園パーカー",
		icon: "🧸",
		rarity: "common",
		price: 90,
		ownedByDefault: false,
		unlockCondition: { type: "always" },
		rewardType: "shop",
		visualType: "css",
		visualConfig: { styleKey: "hoodie" },
		description: "放課後にぴったりのもこもこ服"
	},
	{
		itemId: "outfit-sailor",
		category: "outfit",
		name: "星のセーラー",
		icon: "⭐",
		rarity: "uncommon",
		price: 150,
		ownedByDefault: false,
		unlockCondition: { type: "always" },
		rewardType: "shop",
		visualType: "css",
		visualConfig: { styleKey: "sailor" },
		description: "きらめく星えりのセーラー服"
	},
	{
		itemId: "outfit-sunny",
		category: "outfit",
		name: "雲のワンピ",
		icon: "☁️",
		rarity: "uncommon",
		price: 180,
		ownedByDefault: false,
		unlockCondition: {
			type: "stageCleared",
			stageId: "2-3"
		},
		rewardType: "stageReward",
		visualType: "css",
		visualConfig: { styleKey: "cloud" },
		description: "ステージ2-3でもらえる空色ワンピ"
	},
	{
		itemId: "outfit-bear",
		category: "outfit",
		name: "くまさんポンチョ",
		icon: "🐻",
		rarity: "rare",
		price: 380,
		ownedByDefault: false,
		unlockCondition: { type: "always" },
		rewardType: "shop",
		visualType: "css",
		visualConfig: { styleKey: "bear" },
		description: "丸いお耳つきのぬいぐるみポンチョ"
	},
	{
		itemId: "outfit-bunny",
		category: "outfit",
		name: "うさぎケープ",
		icon: "🐇",
		rarity: "rare",
		price: 520,
		ownedByDefault: false,
		unlockCondition: { type: "always" },
		rewardType: "shop",
		visualType: "css",
		visualConfig: { styleKey: "bunny" },
		description: "ふわふわしっぽのうさぎケープ"
	},
	{
		itemId: "outfit-dream",
		category: "outfit",
		name: "夢色ドレス",
		icon: "🦄",
		rarity: "superRare",
		price: 1e3,
		ownedByDefault: false,
		unlockCondition: {
			type: "levelUnlocked",
			levelNumber: 3
		},
		rewardType: "shop",
		visualType: "css",
		visualConfig: { styleKey: "dream" },
		description: "パステルの夢が重なるドレス"
	},
	{
		itemId: "outfit-night",
		category: "outfit",
		name: "夜空マント",
		icon: "🌙",
		rarity: "superRare",
		price: 1450,
		ownedByDefault: false,
		unlockCondition: {
			type: "levelUnlocked",
			levelNumber: 4
		},
		rewardType: "shop",
		visualType: "css",
		visualConfig: { styleKey: "night" },
		description: "月と星をまとった夜空のマント"
	},
	{
		itemId: "outfit-legend",
		category: "outfit",
		name: "レジェンド学園ローブ",
		icon: "🏰",
		rarity: "legendary",
		price: 3500,
		ownedByDefault: false,
		unlockCondition: {
			type: "levelUnlocked",
			levelNumber: 4
		},
		rewardType: "shop",
		visualType: "css",
		visualConfig: { styleKey: "legend" },
		description: "学園の物語に伝わる伝説のローブ"
	},
	{
		itemId: "shoes-brown",
		category: "shoes",
		name: "ふわふわルームシューズ",
		icon: "🧸",
		rarity: "starter",
		price: 0,
		ownedByDefault: true,
		unlockCondition: { type: "always" },
		rewardType: "shop",
		visualType: "css",
		visualConfig: { styleKey: "brown" },
		description: "やわらかくて歩きやすい靴"
	},
	{
		itemId: "shoes-pink",
		category: "shoes",
		name: "いちごシューズ",
		icon: "🍓",
		rarity: "starter",
		price: 0,
		ownedByDefault: true,
		unlockCondition: { type: "always" },
		rewardType: "shop",
		visualType: "css",
		visualConfig: { styleKey: "pink" },
		description: "いちご色の通学シューズ"
	},
	{
		itemId: "shoes-star",
		category: "shoes",
		name: "星スニーカー",
		icon: "⭐",
		rarity: "common",
		price: 80,
		ownedByDefault: false,
		unlockCondition: { type: "always" },
		rewardType: "shop",
		visualType: "css",
		visualConfig: { styleKey: "star" },
		description: "歩くたび星がきらめくスニーカー"
	},
	{
		itemId: "shoes-bunny",
		category: "shoes",
		name: "うさぎブーツ",
		icon: "🐰",
		rarity: "uncommon",
		price: 170,
		ownedByDefault: false,
		unlockCondition: { type: "always" },
		rewardType: "shop",
		visualType: "css",
		visualConfig: { styleKey: "bunny" },
		description: "白くてもこもこのうさぎブーツ"
	},
	{
		itemId: "shoes-cloud",
		category: "shoes",
		name: "雲のくつ",
		icon: "☁️",
		rarity: "rare",
		price: 420,
		ownedByDefault: false,
		unlockCondition: { type: "always" },
		rewardType: "both",
		visualType: "css",
		visualConfig: { styleKey: "cloud" },
		description: "雲の上を歩くようなふわふわ靴"
	},
	{
		itemId: "shoes-princess",
		category: "shoes",
		name: "プリンセスシューズ",
		icon: "💎",
		rarity: "superRare",
		price: 950,
		ownedByDefault: false,
		unlockCondition: {
			type: "levelUnlocked",
			levelNumber: 3
		},
		rewardType: "shop",
		visualType: "css",
		visualConfig: { styleKey: "princess" },
		description: "宝石みたいに光る特別な靴"
	},
	{
		itemId: "accessory-none",
		category: "accessory",
		name: "アクセなし",
		icon: "✨",
		rarity: "starter",
		price: 0,
		ownedByDefault: true,
		unlockCondition: { type: "always" },
		rewardType: "shop",
		visualType: "emoji",
		visualConfig: { styleKey: "none" },
		description: "アクセサリーを外します"
	},
	{
		itemId: "accessory-ribbon",
		category: "accessory",
		name: "大きなリボン",
		icon: "🎀",
		rarity: "common",
		price: 60,
		ownedByDefault: false,
		unlockCondition: { type: "always" },
		rewardType: "shop",
		visualType: "emoji",
		visualConfig: {
			styleKey: "ribbon",
			symbol: "🎀"
		},
		description: "ましゅまろ色の大きなリボン"
	},
	{
		itemId: "accessory-star",
		category: "accessory",
		name: "星のヘアピン",
		icon: "⭐",
		rarity: "common",
		price: 70,
		ownedByDefault: false,
		unlockCondition: {
			type: "stageCleared",
			stageId: "1-1"
		},
		rewardType: "both",
		visualType: "emoji",
		visualConfig: {
			styleKey: "star",
			symbol: "★"
		},
		description: "ステージ1-1でも手に入る一番星"
	},
	{
		itemId: "accessory-clover",
		category: "accessory",
		name: "四つ葉のピン",
		icon: "🍀",
		rarity: "uncommon",
		price: 140,
		ownedByDefault: false,
		unlockCondition: {
			type: "stageCleared",
			stageId: "1-3"
		},
		rewardType: "stageReward",
		visualType: "emoji",
		visualConfig: {
			styleKey: "clover",
			symbol: "♣"
		},
		description: "ステージ1-3でもらえる幸運のピン"
	},
	{
		itemId: "accessory-cat",
		category: "accessory",
		name: "もこねこ耳",
		icon: "🐱",
		rarity: "uncommon",
		price: 180,
		ownedByDefault: false,
		unlockCondition: { type: "always" },
		rewardType: "shop",
		visualType: "emoji",
		visualConfig: {
			styleKey: "cat",
			symbol: "🐱"
		},
		description: "もこもこのこねこ耳"
	},
	{
		itemId: "accessory-bunny",
		category: "accessory",
		name: "うさぎ耳カチューシャ",
		icon: "🐰",
		rarity: "rare",
		price: 360,
		ownedByDefault: false,
		unlockCondition: { type: "always" },
		rewardType: "shop",
		visualType: "emoji",
		visualConfig: {
			styleKey: "bunny",
			symbol: "🐰"
		},
		description: "ぴょこんと元気なうさぎ耳"
	},
	{
		itemId: "accessory-bear",
		category: "accessory",
		name: "くまみみフード",
		icon: "🐻",
		rarity: "rare",
		price: 450,
		ownedByDefault: false,
		unlockCondition: { type: "always" },
		rewardType: "shop",
		visualType: "emoji",
		visualConfig: {
			styleKey: "bear",
			symbol: "🐻"
		},
		description: "ぬいぐるみみたいなくま耳"
	},
	{
		itemId: "accessory-heart",
		category: "accessory",
		name: "ハートポシェット",
		icon: "💗",
		rarity: "common",
		price: 90,
		ownedByDefault: false,
		unlockCondition: { type: "always" },
		rewardType: "shop",
		visualType: "emoji",
		visualConfig: {
			styleKey: "heart",
			symbol: "💗"
		},
		description: "おやつも入る小さなポシェット"
	},
	{
		itemId: "accessory-wand",
		category: "accessory",
		name: "星のステッキ",
		icon: "🪄",
		rarity: "superRare",
		price: 900,
		ownedByDefault: false,
		unlockCondition: {
			type: "levelUnlocked",
			levelNumber: 3
		},
		rewardType: "shop",
		visualType: "emoji",
		visualConfig: {
			styleKey: "wand",
			symbol: "🪄"
		},
		description: "がんばる気持ちを照らすステッキ"
	},
	{
		itemId: "accessory-scarf",
		category: "accessory",
		name: "雲のマフラー",
		icon: "☁️",
		rarity: "uncommon",
		price: 200,
		ownedByDefault: false,
		unlockCondition: { type: "always" },
		rewardType: "shop",
		visualType: "emoji",
		visualConfig: {
			styleKey: "scarf",
			symbol: "☁️"
		},
		description: "首もとを包む雲のマフラー"
	},
	{
		itemId: "accessory-strawberry",
		category: "accessory",
		name: "いちごバッグ",
		icon: "🍓",
		rarity: "rare",
		price: 520,
		ownedByDefault: false,
		unlockCondition: { type: "always" },
		rewardType: "shop",
		visualType: "emoji",
		visualConfig: {
			styleKey: "strawberry",
			symbol: "🍓"
		},
		description: "ころんと丸いいちごバッグ"
	},
	{
		itemId: "accessory-moon",
		category: "accessory",
		name: "月のイヤリング",
		icon: "🌙",
		rarity: "superRare",
		price: 1300,
		ownedByDefault: false,
		unlockCondition: {
			type: "levelUnlocked",
			levelNumber: 4
		},
		rewardType: "shop",
		visualType: "emoji",
		visualConfig: {
			styleKey: "moon",
			symbol: "🌙"
		},
		description: "夜になると淡く光る月飾り"
	},
	{
		itemId: "accessory-crown",
		category: "accessory",
		name: "レジェンド王冠",
		icon: "👑",
		rarity: "legendary",
		price: 3e3,
		ownedByDefault: false,
		unlockCondition: {
			type: "levelUnlocked",
			levelNumber: 4
		},
		rewardType: "shop",
		visualType: "emoji",
		visualConfig: {
			styleKey: "crown",
			symbol: "👑"
		},
		description: "いつか手に入れたい学園の宝物"
	}
];
var defaultOwnedItemIds = avatarItems.filter((item) => item.ownedByDefault).map((item) => item.itemId);
var findAvatarItem = (itemId) => avatarItems.find((item) => item.itemId === itemId);
var rarityLabels = {
	starter: "スターター",
	common: "コモン",
	uncommon: "アンコモン",
	rare: "レア",
	superRare: "スーパーレア",
	legendary: "レジェンド"
};
var categoryLabels = {
	hair: "かみがた",
	outfit: "ふく",
	shoes: "くつ",
	accessory: "アクセ"
};
//#endregion
//#region components/Avatar.tsx
var itemFor = (id) => id ? findAvatarItem(id) : void 0;
function Avatar({ selection, size = "large", celebration = false }) {
	const hairItem = itemFor(selection.hair);
	const outfitItem = itemFor(selection.outfit);
	const shoesItem = itemFor(selection.shoes);
	const accessoryItem = itemFor(selection.accessory);
	const hair = hairItem?.visualConfig.styleKey ?? "bob";
	const outfit = outfitItem?.visualConfig.styleKey ?? "uniform";
	const shoes = shoesItem?.visualConfig.styleKey ?? "brown";
	const accessory = accessoryItem?.visualConfig.styleKey ?? "none";
	const hairStyle = { "--hair-color": hairItem?.visualConfig.accent };
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `avatar-preview avatar-preview--${size} ${celebration ? "avatar-preview--celebrate" : ""}`,
		"aria-label": "着せ替えした主人公アバター",
		"data-avatar-size": size,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "avatar",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "avatar__spark avatar__spark--one",
					children: "✦"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "avatar__spark avatar__spark--two",
					children: "✧"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `avatar__hair avatar__hair--${hair}`,
					style: hairStyle,
					children: [
						["twin", "royal"].includes(hair) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "avatar__tail avatar__tail--left" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "avatar__tail avatar__tail--right" })] }),
						hair === "side" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "avatar__tail avatar__tail--right" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "avatar__face",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "avatar__eye avatar__eye--left" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "avatar__eye avatar__eye--right" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "avatar__blush avatar__blush--left" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "avatar__blush avatar__blush--right" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "avatar__mouth" }),
								accessory !== "none" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `avatar__accessory avatar__accessory--${accessory}`,
									children: accessoryItem?.visualConfig.symbol ?? accessoryItem?.icon
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "avatar__neck" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `avatar__body avatar__body--${outfit}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "avatar__collar",
						children: "◆"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "avatar__arm avatar__arm--left" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "avatar__arm avatar__arm--right" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: `avatar__leg avatar__leg--left avatar__shoe--${shoes}` }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: `avatar__leg avatar__leg--right avatar__shoe--${shoes}` })
			]
		})
	});
}
//#endregion
//#region components/screens/HomeScreen.tsx
function HomeScreen({ avatar, onPlay, onDressUp }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "home-screen screen-enter",
		"data-testid": "home-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "welcome-copy",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "きょうも いっしょに がんばろう！"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "キラキラ" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"タイピング学園"
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"キーを おして、",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"すてきな アイテムを あつめよう"
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "home-actions",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "primary-button",
						onClick: onPlay,
						"data-testid": "play-button",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "▶" }), " あそぶ"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "secondary-button",
						onClick: onDressUp,
						"data-testid": "dressup-button",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "♚" }), " きせかえ"]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "school-scene",
			"aria-label": "パステルカラーの学園の中庭",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "school-building",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "キラキラ学園" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
						className: "clock",
						children: "●"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cloud cloud--one" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cloud cloud--two" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tree tree--left" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "tree tree--right" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "avatar-platform",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
						selection: avatar,
						size: "large"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "speech-bubble",
					children: [
						"きょうの れんしゅう、",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "いっしょに やってみよう♪" })
					]
				})
			]
		})]
	});
}
//#endregion
//#region data/levels.ts
function questions(stageId, type, values, hint) {
	return Array.from({ length: 12 }, (_, index) => ({
		id: `${stageId}-q${index + 1}`,
		text: values[index % values.length],
		hint: type === "singleKey" ? `${hint}　「${values[index % values.length].toUpperCase()}」を さがそう` : `${hint}　ひと文字ずつ ゆっくりでOK！`
	}));
}
var levels = [
	{
		id: "level-1",
		number: 1,
		name: "はじめてのキーさがし",
		theme: "ホームポジションの近くを見つけよう",
		color: "pink",
		unlockCondition: { type: "always" },
		stages: [
			{
				id: "1-1",
				code: "1-1",
				name: "A・S・K",
				description: "3つのキーを見つけよう",
				questionType: "singleKey",
				durationSeconds: 60,
				clearCorrect: 8,
				questions: questions("1-1", "singleKey", [
					"a",
					"s",
					"k"
				], "光るキーを見て"),
				rewardId: "lv1-star-pin",
				unlockCondition: { type: "levelUnlocked" }
			},
			{
				id: "1-2",
				code: "1-2",
				name: "D・F・J・L",
				description: "人さし指の近くを練習",
				questionType: "singleKey",
				durationSeconds: 60,
				clearCorrect: 8,
				questions: questions("1-2", "singleKey", [
					"d",
					"f",
					"j",
					"l"
				], "手をホームポジションに置いて"),
				rewardId: "lv1-standard",
				unlockCondition: {
					type: "stageCleared",
					stageId: "1-1"
				}
			},
			{
				id: "1-3",
				code: "1-3",
				name: "7キー ミックス",
				description: "A〜Lをまぜてチャレンジ",
				questionType: "singleKey",
				durationSeconds: 60,
				clearCorrect: 8,
				questions: questions("1-3", "singleKey", [
					"a",
					"s",
					"d",
					"f",
					"j",
					"k",
					"l"
				], "あわてなくて大丈夫"),
				rewardId: "lv1-clover-pin",
				unlockCondition: {
					type: "stageCleared",
					stageId: "1-2"
				}
			}
		]
	},
	{
		id: "level-2",
		number: 2,
		name: "母音のキー",
		theme: "ことばのもとになる5文字",
		color: "sky",
		unlockCondition: {
			type: "levelCleared",
			levelId: "level-1"
		},
		stages: [
			{
				id: "2-1",
				code: "2-1",
				name: "A・I・U・E・O",
				description: "母音を順番に見つけよう",
				questionType: "singleKey",
				durationSeconds: 60,
				clearCorrect: 8,
				questions: questions("2-1", "singleKey", [
					"a",
					"i",
					"u",
					"e",
					"o"
				], "母音のキーを"),
				rewardId: "lv2-standard",
				unlockCondition: { type: "levelUnlocked" }
			},
			{
				id: "2-2",
				code: "2-2",
				name: "母音ミックス",
				description: "順番をまぜて練習",
				questionType: "singleKey",
				durationSeconds: 60,
				clearCorrect: 8,
				questions: questions("2-2", "singleKey", [
					"o",
					"a",
					"e",
					"i",
					"u",
					"a",
					"o"
				], "画面とキーボードを見くらべて"),
				rewardId: "lv2-standard",
				unlockCondition: {
					type: "stageCleared",
					stageId: "2-1"
				}
			},
			{
				id: "2-3",
				code: "2-3",
				name: "母音ミニテスト",
				description: "5つのキーの仕上げ",
				questionType: "singleKey",
				durationSeconds: 60,
				clearCorrect: 8,
				questions: questions("2-3", "singleKey", [
					"i",
					"e",
					"a",
					"o",
					"u",
					"e",
					"i",
					"a"
				], "じぶんのペースで"),
				rewardId: "lv2-cloud-dress",
				unlockCondition: {
					type: "stageCleared",
					stageId: "2-2"
				}
			}
		]
	},
	{
		id: "level-3",
		number: 3,
		name: "ローマ字の入口",
		theme: "2文字をつなげて打ってみよう",
		color: "mint",
		unlockCondition: {
			type: "levelCleared",
			levelId: "level-2"
		},
		stages: [
			{
				id: "3-1",
				code: "3-1",
				name: "KA行",
				description: "KA・KI・KU・KE・KO",
				questionType: "romajiSyllable",
				durationSeconds: 60,
				clearCorrect: 8,
				questions: questions("3-1", "romajiSyllable", [
					"ka",
					"ki",
					"ku",
					"ke",
					"ko"
				], "Kのあとに母音を入力"),
				rewardId: "lv3-standard",
				unlockCondition: { type: "levelUnlocked" }
			},
			{
				id: "3-2",
				code: "3-2",
				name: "SA行",
				description: "SA・SI・SU・SE・SO",
				questionType: "romajiSyllable",
				durationSeconds: 60,
				clearCorrect: 8,
				questions: questions("3-2", "romajiSyllable", [
					"sa",
					"si",
					"su",
					"se",
					"so"
				], "Sのあとに母音を入力"),
				rewardId: "lv3-standard",
				unlockCondition: {
					type: "stageCleared",
					stageId: "3-1"
				}
			},
			{
				id: "3-3",
				code: "3-3",
				name: "KA行・SA行ミックス",
				description: "2つの行をまぜて練習",
				questionType: "romajiSyllable",
				durationSeconds: 60,
				clearCorrect: 8,
				questions: questions("3-3", "romajiSyllable", [
					"ka",
					"sa",
					"ki",
					"su",
					"ko",
					"se",
					"ku",
					"si"
				], "さいしょの文字に注目"),
				rewardId: "lv3-standard",
				unlockCondition: {
					type: "stageCleared",
					stageId: "3-2"
				}
			}
		]
	},
	{
		id: "level-4",
		number: 4,
		name: "短いことば",
		theme: "知っていることばを打ってみよう",
		color: "yellow",
		unlockCondition: {
			type: "levelCleared",
			levelId: "level-3"
		},
		stages: [
			{
				id: "4-1",
				code: "4-1",
				name: "neko",
				description: "ねこをローマ字で入力",
				questionType: "romajiWord",
				durationSeconds: 60,
				clearCorrect: 8,
				questions: questions("4-1", "romajiWord", ["neko"], "N・E・K・Oの順に"),
				rewardId: "lv4-standard",
				unlockCondition: { type: "levelUnlocked" }
			},
			{
				id: "4-2",
				code: "4-2",
				name: "inu",
				description: "いぬをローマ字で入力",
				questionType: "romajiWord",
				durationSeconds: 60,
				clearCorrect: 8,
				questions: questions("4-2", "romajiWord", ["inu"], "I・N・Uの順に"),
				rewardId: "lv4-standard",
				unlockCondition: {
					type: "stageCleared",
					stageId: "4-1"
				}
			},
			{
				id: "4-3",
				code: "4-3",
				name: "ことばミックス",
				description: "sora・hana・hoshi など",
				questionType: "romajiWord",
				durationSeconds: 60,
				clearCorrect: 8,
				questions: questions("4-3", "romajiWord", [
					"sora",
					"hana",
					"hoshi",
					"neko",
					"inu"
				], "ことばをよく見て"),
				rewardId: "lv4-standard",
				unlockCondition: {
					type: "stageCleared",
					stageId: "4-2"
				}
			}
		]
	}
];
var allStages = levels.flatMap((level) => level.stages);
function findStage(stageId) {
	return allStages.find((stage) => stage.id === stageId);
}
function findLevelForStage(stageId) {
	return levels.find((level) => level.stages.some((stage) => stage.id === stageId));
}
//#endregion
//#region features/progress/progression.ts
function isStageCleared(stageId, progress) {
	return progress.clearedStageIds.includes(stageId);
}
function isLevelCleared(levelId, progress) {
	const level = levels.find((entry) => entry.id === levelId);
	return Boolean(level && level.stages.every((stage) => isStageCleared(stage.id, progress)));
}
function meetsCondition(condition, progress) {
	if (condition.type === "always" || condition.type === "levelUnlocked") return true;
	if (condition.type === "stageCleared") return isStageCleared(condition.stageId, progress);
	return isLevelCleared(condition.levelId, progress);
}
function isLevelUnlocked(level, progress) {
	return meetsCondition(level.unlockCondition, progress);
}
function isStageUnlocked(stage, progress) {
	const level = findLevelForStage(stage.id);
	return Boolean(level && isLevelUnlocked(level, progress) && meetsCondition(stage.unlockCondition, progress));
}
function getRecommendedStage(progress) {
	return allStages.find((stage) => isStageUnlocked(stage, progress) && !isStageCleared(stage.id, progress)) ?? [...allStages].reverse().find((stage) => isStageUnlocked(stage, progress)) ?? allStages[0];
}
function getCurrentLevel(progress) {
	return findLevelForStage(getRecommendedStage(progress).id) ?? levels[0];
}
function getNewlyUnlockedLevel(before, after) {
	return levels.find((level) => !isLevelUnlocked(level, before) && isLevelUnlocked(level, after));
}
function getNextUnlockedStage(stageId, progress) {
	const next = allStages[allStages.findIndex((stage) => stage.id === stageId) + 1];
	return next && isStageUnlocked(next, progress) ? next : void 0;
}
//#endregion
//#region components/screens/StageSelectScreen.tsx
function StageSelectScreen({ progress, recommendedStageId, onSelect, onHome }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "stage-select-screen screen-enter",
		"data-testid": "stage-select-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "stage-select-header",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "icon-button",
					onClick: onHome,
					"aria-label": "ホームへもどる",
					children: "←"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "CAMPUS MAP"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "ステージを えらぼう" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "clear-rule",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "合格ライン" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "12問中 8問" })]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "level-list",
			children: levels.map((level) => {
				const levelUnlocked = isLevelUnlocked(level, progress);
				const clearedCount = level.stages.filter((stage) => isStageCleared(stage.id, progress)).length;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: `level-panel level-panel--${level.color} ${levelUnlocked ? "" : "level-panel--locked"}`,
					"data-testid": `level-${level.number}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "level-panel__intro",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "level-number",
								children: ["Lv.", level.number]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: level.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: level.theme })] }),
							levelUnlocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "level-count",
								children: [
									clearedCount,
									" / ",
									level.stages.length,
									" クリア"
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "level-lock",
								children: "🔒 まえのレベルをクリア"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "stage-road",
						children: level.stages.map((stage, stageIndex) => {
							const unlocked = isStageUnlocked(stage, progress);
							const cleared = isStageCleared(stage.id, progress);
							const stars = progress.stageStars[stage.id] ?? 0;
							const recommended = stage.id === recommendedStageId;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "stage-step",
								children: [stageIndex > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "road-line",
									"aria-hidden": "true",
									children: "···"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: `stage-card ${cleared ? "stage-card--cleared" : ""} ${recommended ? "stage-card--recommended" : ""}`,
									disabled: !unlocked,
									onClick: () => onSelect(stage),
									"data-testid": `stage-${stage.id}`,
									"aria-label": `${stage.code} ${stage.name}${unlocked ? "" : "（未解放）"}`,
									children: [
										recommended && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
											className: "recommend-badge",
											children: "おすすめ！"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "stage-code",
											children: unlocked ? stage.code : "🔒"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: unlocked ? stage.name : "？？？" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: unlocked ? stage.description : "クリアすると ひらくよ" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "stage-stars",
											"aria-label": `${stars}つ星`,
											children: [
												1,
												2,
												3
											].map((star) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
												className: star <= stars ? "earned" : "",
												children: "★"
											}, star))
										}),
										cleared && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "クリア！" })
									]
								})]
							}, stage.id);
						})
					})]
				}, level.id);
			})
		})]
	});
}
function calculateStars(correct) {
	if (correct >= 12) return 3;
	if (correct >= 10) return 2;
	if (correct >= 8) return 1;
	return 0;
}
function createGameResult(correct, answered, mistakes) {
	return {
		correct,
		answered,
		mistakes,
		stars: calculateStars(correct),
		cleared: correct >= 8
	};
}
//#endregion
//#region components/screens/TypingScreen.tsx
var keyboardRows = [
	"qwertyuiop",
	"asdfghjkl",
	"zxcvbnm"
];
function TypingScreen({ stage, avatar, onFinish, onExit }) {
	const [questionIndex, setQuestionIndex] = (0, import_react.useState)(0);
	const [characterIndex, setCharacterIndex] = (0, import_react.useState)(0);
	const [correct, setCorrect] = (0, import_react.useState)(0);
	const [mistakes, setMistakes] = (0, import_react.useState)(0);
	const [seconds, setSeconds] = (0, import_react.useState)(stage.durationSeconds);
	const [feedback, setFeedback] = (0, import_react.useState)("ready");
	const [questionHadMistake, setQuestionHadMistake] = (0, import_react.useState)(false);
	const [lastQuestionPerfect, setLastQuestionPerfect] = (0, import_react.useState)(true);
	const finished = (0, import_react.useRef)(false);
	const current = stage.questions[Math.min(questionIndex, stage.questions.length - 1)];
	const activeKey = current.text[characterIndex]?.toLowerCase() ?? "";
	(0, import_react.useEffect)(() => {
		const timer = window.setInterval(() => setSeconds((value) => Math.max(0, value - 1)), 1e3);
		return () => window.clearInterval(timer);
	}, []);
	(0, import_react.useEffect)(() => {
		if (seconds === 0 && !finished.current) {
			finished.current = true;
			onFinish(createGameResult(correct, questionIndex, mistakes));
		}
	}, [
		seconds,
		correct,
		questionIndex,
		mistakes,
		onFinish
	]);
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			if (finished.current || event.repeat || event.metaKey || event.ctrlKey || event.altKey) return;
			const key = event.key.toLowerCase();
			if (key.length !== 1) return;
			if (key !== activeKey) {
				setMistakes((value) => value + 1);
				setQuestionHadMistake(true);
				setFeedback("mistake");
				window.setTimeout(() => setFeedback("ready"), 600);
				return;
			}
			if (!(characterIndex === current.text.length - 1)) {
				setCharacterIndex((value) => value + 1);
				setFeedback("letter");
				window.setTimeout(() => setFeedback("ready"), 160);
				return;
			}
			const nextCorrect = correct + (questionHadMistake ? 0 : 1);
			const nextAnswered = questionIndex + 1;
			setLastQuestionPerfect(!questionHadMistake);
			setCorrect(nextCorrect);
			setFeedback("correct");
			if (nextAnswered >= 12) {
				finished.current = true;
				window.setTimeout(() => onFinish(createGameResult(nextCorrect, nextAnswered, mistakes)), 500);
				return;
			}
			setQuestionIndex(nextAnswered);
			setCharacterIndex(0);
			setQuestionHadMistake(false);
			window.setTimeout(() => setFeedback("ready"), 320);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		activeKey,
		characterIndex,
		correct,
		current.text.length,
		mistakes,
		onFinish,
		questionHadMistake,
		questionIndex
	]);
	const feedbackText = feedback === "correct" ? lastQuestionPerfect ? "キラッ！ 1もん せいかい！" : "できた！ さいごまで打てたね♪" : feedback === "mistake" ? "おしい！ 光るキーを もういちど♪" : current.hint;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: `typing-screen screen-enter feedback--${feedback}`,
		"data-testid": "typing-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "game-topbar",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "icon-button",
						onClick: onExit,
						"aria-label": "ステージ選択へもどる",
						children: "←"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "eyebrow",
						children: ["STAGE ", stage.code]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: stage.name })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "timer",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "のこり" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: seconds }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "秒" })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "progress-track",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: { width: `${Math.min(100, questionIndex / 12 * 100)}%` } })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "game-content",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "coach-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
						selection: avatar,
						size: "small",
						celebration: feedback === "correct"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: feedbackText })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "prompt-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"もんだい ",
							Math.min(questionIndex + 1, 12),
							" / 12　つぎに打つのは…"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: `typing-target typing-target--${stage.questionType}`,
							"data-testid": "typing-target",
							children: [...current.text].map((character, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
								className: index < characterIndex ? "typed" : index === characterIndex ? "current" : "upcoming",
								children: character.toUpperCase()
							}, `${current.id}-${index}`))
						}),
						feedback === "correct" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "success-burst",
							"aria-hidden": "true",
							children: "✦　★　✧"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "score-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"せいかい ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									"data-testid": "correct-count",
									children: correct
								}),
								" / 12"
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["ミス ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: mistakes })] })]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "keyboard",
				"aria-label": "仮想キーボード",
				children: [keyboardRows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "keyboard__row",
					children: [...row].map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
						className: key === activeKey ? "key--active" : "",
						"data-key": key,
						children: key.toUpperCase()
					}, key))
				}, row)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hand-dot" }),
					" 光っている「",
					activeKey.toUpperCase(),
					"」を おしてね"
				] })]
			})
		]
	});
}
//#endregion
//#region components/screens/ClearScreen.tsx
function ClearScreen({ result, stage, reward, unlockedLevel, avatar, hasNextStage, onNext, onRetry, onStages, onHome }) {
	const item = avatarItems.find((entry) => entry.itemId === reward.itemId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: `clear-screen screen-enter ${result.cleared ? "" : "clear-screen--retry"}`,
		"data-testid": "clear-screen",
		children: [
			result.cleared && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "confetti",
				"aria-hidden": "true",
				children: "✦　●　★　◆　✧　●　★"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "eyebrow",
				children: [
					"STAGE ",
					stage.code,
					" ",
					result.cleared ? "CLEAR!" : "RESULT"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: result.cleared ? "やったね！" : "あと すこし！" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "clear-message",
				children: result.cleared ? "つぎのステージへ すすもう！" : `あと ${Math.max(0, stage.clearCorrect - result.correct)}もんで クリアだよ。もういちど やってみよう♪`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "star-rating",
				"aria-label": `${result.stars}つ星`,
				children: [
					1,
					2,
					3
				].map((star) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: star <= result.stars ? "star--earned" : "",
					children: "★"
				}, star))
			}),
			unlockedLevel && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "level-up-banner",
				"data-testid": "level-up-banner",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✦ LEVEL UP! ✦" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
						"Lv.",
						unlockedLevel.number,
						" 解放！"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: unlockedLevel.name })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "clear-main",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
					selection: avatar,
					size: "medium",
					celebration: result.cleared
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "reward-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: result.cleared ? "ごほうび" : "今回のきろく" }),
						result.cleared ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "coin-reward",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "●" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: ["+", reward.coins] }),
									" コイン"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bonus-list",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ステージクリア" }),
									reward.firstClear && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "初回クリアボーナス" }),
									reward.threeStarBonus && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "星3ボーナス" })
								]
							}),
							item ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "new-item",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "NEW!" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: item.icon }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [item.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "を ゲットしたよ！" })] })
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "new-item new-item--plain",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "💮" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [reward.firstClear ? "はじめてクリア！" : "がんばりスタンプ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "よく がんばったね！" })] })]
							})
						] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "retry-tip",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [result.correct, " / 12"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "8もん正解で クリア！" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "result-note",
							children: [
								result.correct,
								"もん せいかい　・　キーのミス ",
								result.mistakes,
								"かい"
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "clear-actions",
				children: [
					result.cleared && hasNextStage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "primary-button",
						onClick: onNext,
						"data-testid": "next-stage-button",
						children: "つぎのステージ →"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: result.cleared && hasNextStage ? "secondary-button" : "primary-button",
						onClick: onRetry,
						children: "↻ もういちど"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "secondary-button",
						onClick: onStages,
						children: "☷ ステージ"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "text-button",
						onClick: onHome,
						children: "⌂ ホーム"
					})
				]
			})
		]
	});
}
//#endregion
//#region components/screens/DressUpScreen.tsx
var categories = [
	"hair",
	"outfit",
	"shoes",
	"accessory"
];
var purchaseMessages = {
	purchased: "おかいもの できたよ！ クローゼットに なかま入り♪",
	alreadyOwned: "もう もっているアイテムだよ",
	notEnoughCoins: "コインがたりないよ。タイピングで ためてみよう♪",
	notForSale: "このアイテムは ステージのごほうびだよ",
	locked: "もうすこし ステージを進めると ひらくよ",
	notFound: "アイテムを みつけられなかったよ"
};
function DressUpScreen({ avatar, coins, ownedItemIds, unlockedItemIds, activeCategory, onCategory, onSelect, onPurchase, onHome }) {
	const items = avatarItems.filter((item) => item.category === activeCategory);
	const [shopMessage, setShopMessage] = (0, import_react.useState)("ほしいアイテムを えらんでね");
	const buy = (itemId) => setShopMessage(purchaseMessages[onPurchase(itemId)]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "dressup-screen screen-enter",
		"data-testid": "dressup-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dressup-header",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "icon-button",
						onClick: onHome,
						"aria-label": "ホームへもどる",
						children: "←"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "CLOSET & SHOP"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "きせかえショップ" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "shop-coin",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "●" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								"data-testid": "shop-coin-count",
								children: coins
							}),
							" コイン"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dressup-layout",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mirror-area",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mirror",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
								selection: avatar,
								size: "large"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "わたしだけの コーデを つくろう♪" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "shop-message",
							role: "status",
							"data-testid": "shop-message",
							children: shopMessage
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "closet",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "category-tabs",
						role: "tablist",
						"aria-label": "着せ替えカテゴリ",
						children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							role: "tab",
							"aria-selected": activeCategory === category,
							onClick: () => onCategory(category),
							children: [category === "hair" ? "✂" : category === "outfit" ? "♚" : category === "shoes" ? "♟" : "★", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: categoryLabels[category] })]
						}, category))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "item-grid",
						children: items.map((item) => {
							const owned = ownedItemIds.includes(item.itemId);
							const unlocked = unlockedItemIds.includes(item.itemId);
							const selected = avatar[item.category] === item.itemId;
							const forSale = item.rewardType !== "stageReward";
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: `item-card item-card--${item.rarity} ${selected ? "item-card--selected" : ""} ${owned ? "item-card--owned" : ""}`,
								"data-testid": `item-${item.itemId}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `rarity-badge rarity-badge--${item.rarity}`,
										children: rarityLabels[item.rarity]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "item-icon",
										"aria-hidden": "true",
										children: item.icon
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: item.name }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: item.description }),
									!owned && forSale && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "price-badge",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "●" }), item.price]
									}),
									owned ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "item-action item-action--owned",
										onClick: () => onSelect(item.category, item.itemId),
										disabled: selected,
										"data-testid": `select-${item.itemId}`,
										children: selected ? "えらんでるよ" : "えらぶ"
									}) : !forSale ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "reward-only",
										children: "🎁 ステージのごほうび"
									}) : !unlocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "reward-only",
										children: "🔒 もうすこしで解放"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "item-action item-action--buy",
										onClick: () => buy(item.itemId),
										disabled: coins < item.price,
										"data-testid": `buy-${item.itemId}`,
										children: "かう"
									}), coins < item.price && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "コインがたりないよ" })] })
								]
							}, item.itemId);
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "primary-button done-button",
				onClick: onHome,
				children: "できあがり！"
			})
		]
	});
}
//#endregion
//#region features/progress/playerStorage.ts
var STORAGE_KEY = "kirakira-typing-school-save-v1";
var initialPlayerData = {
	version: 3,
	progress: {
		coins: 120,
		completedPlays: 0,
		bestCorrect: 0,
		clearedStageIds: [],
		stageStars: {}
	},
	inventory: { ownedItemIds: defaultOwnedItemIds },
	avatar: {
		hair: "hair-bob",
		outfit: "outfit-uniform",
		shoes: "shoes-brown",
		accessory: "accessory-none"
	}
};
function migratePlayerData(saved) {
	const legacyBest = saved.progress?.bestCorrect ?? 0;
	const migratedStars = legacyBest >= 12 ? 3 : legacyBest >= 10 ? 2 : legacyBest >= 8 ? 1 : 0;
	const savedStars = saved.progress?.stageStars ?? {};
	const stageStars = Object.keys(savedStars).length > 0 ? savedStars : migratedStars > 0 ? { "1-1": migratedStars } : {};
	const clearedStageIds = saved.progress?.clearedStageIds?.length ? saved.progress.clearedStageIds : migratedStars > 0 ? ["1-1"] : [];
	return {
		version: 3,
		progress: {
			...initialPlayerData.progress,
			...saved.progress,
			stageStars,
			clearedStageIds
		},
		inventory: { ownedItemIds: [...new Set([...saved.inventory?.ownedItemIds ?? [], ...defaultOwnedItemIds])] },
		avatar: saved.avatar ?? initialPlayerData.avatar
	};
}
var LocalStoragePlayerStorage = class {
	load() {
		if (typeof window === "undefined") return initialPlayerData;
		const raw = window.localStorage.getItem(STORAGE_KEY);
		if (!raw) return initialPlayerData;
		try {
			return migratePlayerData(JSON.parse(raw));
		} catch {
			return initialPlayerData;
		}
	}
	save(data) {
		if (typeof window !== "undefined") window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
	}
};
//#endregion
//#region data/rewards.ts
var stageRewards = {
	"lv1-standard": {
		baseCoins: 20,
		firstClearBonus: 15,
		threeStarBonus: 5
	},
	"lv1-star-pin": {
		baseCoins: 20,
		firstClearBonus: 15,
		threeStarBonus: 5,
		itemId: "accessory-star"
	},
	"lv1-clover-pin": {
		baseCoins: 20,
		firstClearBonus: 15,
		threeStarBonus: 5,
		itemId: "accessory-clover"
	},
	"lv2-standard": {
		baseCoins: 25,
		firstClearBonus: 20,
		threeStarBonus: 8
	},
	"lv2-cloud-dress": {
		baseCoins: 25,
		firstClearBonus: 20,
		threeStarBonus: 8,
		itemId: "outfit-sunny"
	},
	"lv3-standard": {
		baseCoins: 35,
		firstClearBonus: 25,
		threeStarBonus: 10
	},
	"lv4-standard": {
		baseCoins: 45,
		firstClearBonus: 35,
		threeStarBonus: 15
	},
	"lv5-standard": {
		baseCoins: 60,
		firstClearBonus: 40,
		threeStarBonus: 20
	}
};
//#endregion
//#region features/progress/stageRewards.ts
function calculateEarnedReward(stage, result, previousStars, ownedItemIds) {
	if (!result.cleared) return {
		coins: 0,
		firstClear: false,
		threeStarBonus: false
	};
	const reward = stageRewards[stage.rewardId];
	const firstClear = previousStars === 0;
	const threeStarBonus = result.stars === 3;
	return {
		coins: reward.baseCoins + (firstClear ? reward.firstClearBonus : 0) + (threeStarBonus ? reward.threeStarBonus : 0),
		itemId: firstClear && reward.itemId && !ownedItemIds.includes(reward.itemId) ? reward.itemId : void 0,
		firstClear,
		threeStarBonus
	};
}
//#endregion
//#region features/inventory/shop.ts
function isItemUnlocked(item, player) {
	const condition = item.unlockCondition;
	if (condition.type === "always") return true;
	if (condition.type === "stageCleared") return player.progress.clearedStageIds.includes(condition.stageId);
	return getCurrentLevel(player.progress).number >= condition.levelNumber;
}
function purchaseAvatarItem(player, itemId) {
	const item = findAvatarItem(itemId);
	if (!item) return {
		status: "notFound",
		player
	};
	if (player.inventory.ownedItemIds.includes(itemId)) return {
		status: "alreadyOwned",
		player,
		item
	};
	if (item.rewardType === "stageReward") return {
		status: "notForSale",
		player,
		item
	};
	if (!isItemUnlocked(item, player)) return {
		status: "locked",
		player,
		item
	};
	if (player.progress.coins < item.price) return {
		status: "notEnoughCoins",
		player,
		item
	};
	return {
		status: "purchased",
		item,
		player: {
			...player,
			progress: {
				...player.progress,
				coins: player.progress.coins - item.price
			},
			inventory: { ownedItemIds: [...player.inventory.ownedItemIds, item.itemId] }
		}
	};
}
//#endregion
//#region components/KirakiraTypingApp.tsx
var emptyReward = {
	coins: 0,
	firstClear: false,
	threeStarBonus: false
};
function KirakiraTypingApp() {
	const storage = (0, import_react.useMemo)(() => new LocalStoragePlayerStorage(), []);
	const [player, setPlayer] = (0, import_react.useState)(initialPlayerData);
	const [screen, setScreen] = (0, import_react.useState)("home");
	const [selectedStageId, setSelectedStageId] = (0, import_react.useState)("1-1");
	const [result, setResult] = (0, import_react.useState)({
		correct: 0,
		answered: 0,
		mistakes: 0,
		stars: 0,
		cleared: false
	});
	const [earnedReward, setEarnedReward] = (0, import_react.useState)(emptyReward);
	const [unlockedLevel, setUnlockedLevel] = (0, import_react.useState)();
	const [category, setCategory] = (0, import_react.useState)("hair");
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const savedPlayer = storage.load();
		const loadTask = window.setTimeout(() => {
			setPlayer(savedPlayer);
			setSelectedStageId(getRecommendedStage(savedPlayer.progress).id);
			setReady(true);
		}, 0);
		return () => window.clearTimeout(loadTask);
	}, [storage]);
	(0, import_react.useEffect)(() => {
		if (ready) storage.save(player);
	}, [
		player,
		ready,
		storage
	]);
	const selectedStage = findStage(selectedStageId) ?? levels[0].stages[0];
	const recommendedStage = getRecommendedStage(player.progress);
	const currentLevel = getCurrentLevel(player.progress);
	const startStage = (stage) => {
		setSelectedStageId(stage.id);
		setUnlockedLevel(void 0);
		setScreen("typing");
	};
	const finishGame = (gameResult) => {
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
			stageStars: bestStars > 0 ? {
				...player.progress.stageStars,
				[stage.id]: bestStars
			} : player.progress.stageStars
		};
		const nextPlayer = {
			...player,
			progress: nextProgress,
			inventory: reward.itemId ? { ownedItemIds: [...player.inventory.ownedItemIds, reward.itemId] } : player.inventory
		};
		setResult(gameResult);
		setEarnedReward(reward);
		setUnlockedLevel(getNewlyUnlockedLevel(player.progress, nextProgress));
		setPlayer(nextPlayer);
		setScreen("clear");
	};
	const selectItem = (itemCategory, id) => setPlayer((current) => current.inventory.ownedItemIds.includes(id) ? {
		...current,
		avatar: {
			...current.avatar,
			[itemCategory]: id
		}
	} : current);
	const purchaseItem = (itemId) => {
		const purchase = purchaseAvatarItem(player, itemId);
		if (purchase.status === "purchased") setPlayer(purchase.player);
		return purchase.status;
	};
	const goHome = () => setScreen("home");
	const nextStage = getNextUnlockedStage(selectedStage.id, player.progress);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "app-shell",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ambient-stars",
				"aria-hidden": "true",
				children: "✦　　✧　　　　✦　　✧"
			}),
			screen !== "typing" && screen !== "clear" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBar, {
				coins: player.progress.coins,
				levelLabel: `Lv.${currentLevel.number} ${currentLevel.name}`
			}),
			screen === "home" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeScreen, {
				avatar: player.avatar,
				onPlay: () => setScreen("stages"),
				onDressUp: () => setScreen("dressup")
			}),
			screen === "stages" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StageSelectScreen, {
				progress: player.progress,
				recommendedStageId: recommendedStage.id,
				onSelect: startStage,
				onHome: goHome
			}),
			screen === "typing" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypingScreen, {
				stage: selectedStage,
				avatar: player.avatar,
				onFinish: finishGame,
				onExit: () => setScreen("stages")
			}, `${selectedStage.id}-${player.progress.completedPlays}`),
			screen === "clear" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClearScreen, {
				result,
				stage: selectedStage,
				reward: earnedReward,
				unlockedLevel,
				avatar: player.avatar,
				hasNextStage: Boolean(nextStage),
				onNext: () => nextStage && startStage(nextStage),
				onRetry: () => startStage(selectedStage),
				onStages: () => setScreen("stages"),
				onHome: goHome
			}),
			screen === "dressup" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DressUpScreen, {
				avatar: player.avatar,
				coins: player.progress.coins,
				ownedItemIds: player.inventory.ownedItemIds,
				unlockedItemIds: avatarItems.filter((item) => isItemUnlocked(item, player)).map((item) => item.itemId),
				activeCategory: category,
				onCategory: setCategory,
				onSelect: selectItem,
				onPurchase: purchaseItem,
				onHome: goHome
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "キラキラタイピング学園" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "ゆっくり・たのしく・じぶんのペースで" })] })
		]
	});
}
//#endregion
export { KirakiraTypingApp };
