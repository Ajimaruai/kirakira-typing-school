const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const isExternalAsset = (src: string) => /^(?:https?:|data:|blob:)/.test(src);

/**
 * public配下の素材URLへ、GitHub Pages用のbasePathを安全に付けます。
 * 呼び出し側は常に `/assets/...` 形式で指定できます。
 */
export function getAssetPath(src: string) {
  if (!src || isExternalAsset(src)) return src;

  const normalizedSrc = src.startsWith("/") ? src : `/${src}`;
  if (!publicBasePath) return normalizedSrc;
  if (normalizedSrc === publicBasePath || normalizedSrc.startsWith(`${publicBasePath}/`)) return normalizedSrc;

  return `${publicBasePath}${normalizedSrc}`;
}
