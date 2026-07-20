import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
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

test("avatar visuals support CSS, emoji, and layered images without changing item ids", async () => {
  const types = await readFile(new URL("../features/inventory/types.ts", import.meta.url), "utf8");
  const items = await readFile(new URL("../data/items.ts", import.meta.url), "utf8");

  for (const visualType of ["css", "emoji", "layeredImage"]) assert.match(types, new RegExp(`"${visualType}"`));
  for (const slot of ["hairBack", "body", "shoes", "outfit", "face", "hairFront", "accessory", "pet", "effect"]) {
    assert.match(types, new RegExp(`"${slot}"`));
  }
  for (const itemId of ["hair-bob", "outfit-uniform", "shoes-brown", "accessory-none"]) {
    assert.match(items, new RegExp(`itemId: "${itemId}"[^\n]+visualType: "layeredImage"`));
  }
});

test("starter layered-image placeholders and avatar asset folders exist", async () => {
  for (const path of [
    "../public/assets/avatar/base/body.svg",
    "../public/assets/avatar/base/face.svg",
    "../public/assets/avatar/hair/hair-bob.svg",
    "../public/assets/avatar/outfits/outfit-uniform.svg",
    "../public/assets/avatar/shoes/shoes-brown.svg",
    "../public/assets/avatar/accessories/accessory-none.svg",
    "../public/assets/avatar/pets/.gitkeep",
    "../public/assets/avatar/backgrounds/.gitkeep",
    "../public/assets/avatar/thumbnails/hair-bob.svg",
  ]) await access(new URL(path, import.meta.url));
});

test("avatar auto mode requires every core image and successful loads", async () => {
  const { avatarLayerKey, requiredAvatarLayerSlots, resolveAutoAvatarDisplayMode } = await import(
    new URL("../features/avatar/displayMode.ts", import.meta.url)
  );
  const layers = requiredAvatarLayerSlots.map((slot) => ({ slot, src: `/assets/${slot}.webp` }));
  const loaded = Object.fromEntries(layers.map((layer) => [avatarLayerKey(layer), "loaded"]));

  assert.equal(resolveAutoAvatarDisplayMode(layers, loaded), "layeredAvatar");
  assert.equal(resolveAutoAvatarDisplayMode(layers.slice(1), loaded), "cssFallback");
  assert.equal(resolveAutoAvatarDisplayMode(layers, { ...loaded, [avatarLayerKey(layers[0])]: "error" }), "cssFallback");
  assert.equal(resolveAutoAvatarDisplayMode(layers, {}), "cssFallback");
});

test("avatar base body and face stay outside shop item data", async () => {
  const base = await readFile(new URL("../data/avatarBase.ts", import.meta.url), "utf8");
  const items = await readFile(new URL("../data/items.ts", import.meta.url), "utf8");
  const avatar = await readFile(new URL("../components/Avatar.tsx", import.meta.url), "utf8");

  assert.match(base, /slot: "body"/);
  assert.match(base, /slot: "face"/);
  assert.doesNotMatch(items, /itemId: "(?:body|face)"/);
  assert.match(avatar, /renderMode = "auto"/);
  assert.match(avatar, /data-avatar-display-mode=\{displayMode\}/);
});

test("avatar asset paths receive the GitHub Pages base path", async () => {
  const nextConfig = await readFile(new URL("../next.config.ts", import.meta.url), "utf8");
  const assetHelper = await readFile(new URL("../features/avatar/assets.ts", import.meta.url), "utf8");

  assert.match(nextConfig, /NEXT_PUBLIC_BASE_PATH: pagesBasePath/);
  assert.match(assetHelper, /process\.env\.NEXT_PUBLIC_BASE_PATH/);
  assert.match(assetHelper, /return `\$\{publicBasePath\}\$\{normalizedSrc\}`/);
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
