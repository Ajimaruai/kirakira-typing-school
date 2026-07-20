import type { AvatarImageLayer } from "@/features/inventory/types";

/**
 * 商品ではない、全コーデ共通の素体レイヤーです。
 * 現在は透明な仮SVGなので、必須の髪レイヤーが揃うまではCSS表示になります。
 */
export const avatarBaseLayers: AvatarImageLayer[] = [
  { slot: "body", src: "/assets/avatar/base/body.svg" },
  { slot: "face", src: "/assets/avatar/base/face.svg" },
];
