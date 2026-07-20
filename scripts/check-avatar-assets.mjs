import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";

const REFERENCE = {
  path: "design/reference/main-character-master-v1.png",
  width: 704,
  height: 1208,
  requireAlpha: true,
  label: "主人公基準マスター",
};

const SOURCE_LAYER_ASSETS = [
  ["design/reference/layers/face-v1.png", 704, 1208],
  ["design/reference/layers/body-v1.png", 704, 1208],
].map(([path, width, height]) => ({ path, width, height, requireAlpha: true, label: "レイヤー候補原本" }));

const LAYER_ASSETS = [
  ["public/assets/avatar/base/body.webp", 704, 1208, true],
  ["public/assets/avatar/base/face.webp", 704, 1208, true],
  ["public/assets/avatar/hair/hair-bob-back.webp", 704, 1208, false],
  ["public/assets/avatar/hair/hair-bob-front.webp", 704, 1208, false],
  ["public/assets/avatar/outfits/outfit-uniform.webp", 704, 1208, false],
  ["public/assets/avatar/shoes/shoes-brown.webp", 704, 1208, false],
  ["public/assets/avatar/accessories/accessory-ribbon.webp", 704, 1208, false],
  ["public/assets/avatar/thumbnails/hair-bob.webp", 512, 512, false],
  ["public/assets/avatar/thumbnails/outfit-uniform.webp", 512, 512, false],
  ["public/assets/avatar/thumbnails/shoes-brown.webp", 512, 512, false],
  ["public/assets/avatar/thumbnails/accessory-ribbon.webp", 512, 512, false],
].map(([path, width, height, requiredNow]) => ({
  path,
  width,
  height,
  requiredNow,
  requireAlpha: true,
  label: "アバター素材",
}));

function inspectPng(buffer) {
  const signature = "89504e470d0a1a0a";
  if (buffer.subarray(0, 8).toString("hex") !== signature || buffer.length < 26) return undefined;

  const colorType = buffer[25];
  let hasTransparencyChunk = false;
  let offset = 8;
  while (offset + 12 <= buffer.length) {
    const chunkLength = buffer.readUInt32BE(offset);
    const chunkType = buffer.subarray(offset + 4, offset + 8).toString("ascii");
    if (chunkType === "tRNS") hasTransparencyChunk = true;
    offset += 12 + chunkLength;
  }

  return {
    format: "PNG",
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
    hasAlpha: colorType === 4 || colorType === 6 || hasTransparencyChunk,
  };
}

function inspectWebp(buffer) {
  if (buffer.length < 30 || buffer.toString("ascii", 0, 4) !== "RIFF" || buffer.toString("ascii", 8, 12) !== "WEBP") return undefined;

  let width;
  let height;
  let hasAlpha = false;
  let offset = 12;

  while (offset + 8 <= buffer.length) {
    const chunkType = buffer.toString("ascii", offset, offset + 4);
    const chunkLength = buffer.readUInt32LE(offset + 4);
    const dataOffset = offset + 8;

    if (chunkType === "ALPH") hasAlpha = true;
    if (chunkType === "VP8X" && chunkLength >= 10) {
      hasAlpha ||= Boolean(buffer[dataOffset] & 0x10);
      width = 1 + buffer.readUIntLE(dataOffset + 4, 3);
      height = 1 + buffer.readUIntLE(dataOffset + 7, 3);
    } else if (chunkType === "VP8L" && chunkLength >= 5 && buffer[dataOffset] === 0x2f) {
      const bits = buffer.readUInt32LE(dataOffset + 1);
      width = 1 + (bits & 0x3fff);
      height = 1 + ((bits >>> 14) & 0x3fff);
      hasAlpha ||= Boolean(bits & 0x10000000);
    } else if (chunkType === "VP8 " && chunkLength >= 10) {
      width = buffer.readUInt16LE(dataOffset + 6) & 0x3fff;
      height = buffer.readUInt16LE(dataOffset + 8) & 0x3fff;
    }

    offset = dataOffset + chunkLength + (chunkLength % 2);
  }

  return width && height ? { format: "WebP", width, height, hasAlpha } : undefined;
}

async function inspectAsset(asset) {
  const absolutePath = resolve(asset.path);
  try {
    await stat(absolutePath);
  } catch {
    return { asset, status: "missing" };
  }

  const buffer = await readFile(absolutePath);
  const image = inspectPng(buffer) ?? inspectWebp(buffer);
  if (!image) return { asset, status: "unsupported" };

  const correctSize = image.width === asset.width && image.height === asset.height;
  const correctAlpha = !asset.requireAlpha || image.hasAlpha;
  return { asset, image, status: correctSize && correctAlpha ? "ok" : "invalid" };
}

const checkAll = process.argv.includes("--all");
const checkSources = process.argv.includes("--sources");
const assets = checkAll
  ? [REFERENCE, ...LAYER_ASSETS]
  : checkSources
    ? [REFERENCE, ...SOURCE_LAYER_ASSETS]
    : [REFERENCE];
const results = await Promise.all(assets.map(inspectAsset));

console.log(
  checkAll
    ? "アバター素材一式を検査します。"
    : checkSources
      ? "主人公マスターとレイヤー候補原本を検査します。"
      : `${REFERENCE.label}画像を検査します。`,
);
for (const result of results) {
  const { asset } = result;
  if (result.status === "missing") {
    const required = asset.requiredNow !== false;
    console.log(`${required ? "✗" : "○"} ${asset.path}: ${required ? "ファイルがありません" : "未制作（現在は正常）"}`);
    continue;
  }
  if (result.status === "unsupported") {
    console.log(`✗ ${asset.path}: PNGまたはWebPとして解析できません`);
    continue;
  }

  const { image } = result;
  const sizeText = `${image.width}×${image.height}px（期待値 ${asset.width}×${asset.height}px）`;
  const alphaText = image.hasAlpha ? "透明情報あり" : "透明情報なし";
  const marker = result.status === "ok" ? "✓" : "✗";
  console.log(`${marker} ${asset.path}: ${image.format}, ${sizeText}, ${alphaText}`);
}

const failed = results.filter(
  (result) => result.status !== "ok" && !(result.status === "missing" && result.asset.requiredNow === false),
);
if (failed.length > 0) {
  console.error(`\n${failed.length}件を確認してください。`);
  process.exitCode = 1;
} else {
  console.log("\nすべての画像仕様を確認できました。");
}
