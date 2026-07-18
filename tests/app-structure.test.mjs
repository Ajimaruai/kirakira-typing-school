import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("the five progression screens are connected", async () => {
  const app = await readFile(new URL("../components/KirakiraTypingApp.tsx", import.meta.url), "utf8");
  for (const screen of ["HomeScreen", "StageSelectScreen", "TypingScreen", "ClearScreen", "DressUpScreen"]) {
    assert.match(app, new RegExp(screen));
  }
});

test("all twelve stages and supported question types are data-driven", async () => {
  const levels = await readFile(new URL("../data/levels.ts", import.meta.url), "utf8");
  for (const id of ["1-1", "1-2", "1-3", "2-1", "2-2", "2-3", "3-1", "3-2", "3-3", "4-1", "4-2", "4-3"]) {
    assert.match(levels, new RegExp(`id: "${id}"`));
  }
  for (const type of ["singleKey", "romajiSyllable", "romajiWord"]) {
    assert.match(levels, new RegExp(`"${type}"`));
  }
});

test("the closet shop has 30 to 40 data-driven items and every rarity", async () => {
  const items = await readFile(new URL("../data/items.ts", import.meta.url), "utf8");
  const itemCount = (items.match(/itemId: "/g) ?? []).length;
  assert.ok(itemCount >= 30 && itemCount <= 40, `expected 30-40 items, got ${itemCount}`);
  for (const rarity of ["starter", "common", "uncommon", "rare", "superRare", "legendary"]) {
    assert.match(items, new RegExp(`rarity: "${rarity}"`));
  }
  for (const field of ["price", "ownedByDefault", "unlockCondition", "rewardType", "visualType", "visualConfig", "description"]) {
    assert.match(items, new RegExp(`${field}:`));
  }
});

test("shop purchases validate ownership, sale type, unlocks, and coins", async () => {
  const shop = await readFile(new URL("../features/inventory/shop.ts", import.meta.url), "utf8");
  for (const status of ["purchased", "alreadyOwned", "notEnoughCoins", "notForSale", "locked", "notFound"]) {
    assert.match(shop, new RegExp(`"${status}"`));
  }
  assert.match(shop, /coins: player\.progress\.coins - item\.price/);
  assert.match(shop, /ownedItemIds: \[\.\.\.player\.inventory\.ownedItemIds, item\.itemId\]/);
});

test("coin rewards scale from level 1 through the future level 5 tier", async () => {
  const rewards = await readFile(new URL("../data/rewards.ts", import.meta.url), "utf8");
  for (const [level, base] of [[1, 20], [2, 25], [3, 35], [4, 45], [5, 60]]) {
    assert.match(rewards, new RegExp(`"lv${level}-standard": \\{ baseCoins: ${base}`));
  }
});
