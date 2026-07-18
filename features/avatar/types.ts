export type AvatarCategory = "hair" | "outfit" | "shoes" | "accessory" | "pet" | "background";

export type AvatarSelection = Partial<Record<AvatarCategory, string>>;
