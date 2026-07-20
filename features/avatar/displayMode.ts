import type { AvatarImageLayer, AvatarLayerSlot } from "@/features/inventory/types";

export type AvatarRenderMode = "auto";
export type AvatarDisplayMode = "cssFallback" | "layeredAvatar";
export type AvatarLayerLoadStatus = "loading" | "loaded" | "error";

export const requiredAvatarLayerSlots = [
  "body",
  "face",
  "hairBack",
  "hairFront",
  "outfit",
  "shoes",
] as const satisfies readonly AvatarLayerSlot[];

const requiredSlotSet = new Set<AvatarLayerSlot>(requiredAvatarLayerSlots);

export const avatarLayerKey = (layer: AvatarImageLayer) => `${layer.slot}:${layer.src}`;

/**
 * 必須スロットがすべて設定され、対象画像がすべて読込済みの場合だけ画像表示にします。
 * それ以外は部分的に画像を混ぜず、CSS版へ戻します。
 */
export function resolveAutoAvatarDisplayMode(
  layers: AvatarImageLayer[],
  loadStatuses: Readonly<Record<string, AvatarLayerLoadStatus>>,
): AvatarDisplayMode {
  const hasEveryRequiredSlot = requiredAvatarLayerSlots.every((slot) =>
    layers.some((layer) => layer.slot === slot),
  );
  if (!hasEveryRequiredSlot) return "cssFallback";

  const requiredLayers = layers.filter((layer) => requiredSlotSet.has(layer.slot));
  return requiredLayers.every((layer) => loadStatuses[avatarLayerKey(layer)] === "loaded")
    ? "layeredAvatar"
    : "cssFallback";
}
