import type { AvatarImageLayer } from "@/features/inventory/types";

/**
 * 商品ではない、全コーデ共通の素体レイヤーです。
 * body / faceは正式素材です。必須の髪・服・靴レイヤーが揃うまではCSS表示になります。
 */
export const avatarBaseLayers: AvatarImageLayer[] = [
  { slot: "body", src: "/assets/avatar/base/body.webp" },
  { slot: "face", src: "/assets/avatar/base/face.webp" },
];
