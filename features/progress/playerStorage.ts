import type { PlayerSaveData } from "./types";
import { defaultOwnedItemIds } from "@/data/items";

const STORAGE_KEY = "kirakira-typing-school-save-v1";

export const initialPlayerData: PlayerSaveData = {
  version: 3,
  progress: { coins: 120, completedPlays: 0, bestCorrect: 0, clearedStageIds: [], stageStars: {} },
  inventory: {
    ownedItemIds: defaultOwnedItemIds,
  },
  avatar: { hair: "hair-bob", outfit: "outfit-uniform", shoes: "shoes-brown", accessory: "accessory-none" },
};

type LegacySaveData = Partial<PlayerSaveData> & {
  version?: number;
  progress?: Partial<PlayerSaveData["progress"]>;
};

function migratePlayerData(saved: LegacySaveData): PlayerSaveData {
  const legacyBest = saved.progress?.bestCorrect ?? 0;
  const migratedStars = legacyBest >= 12 ? 3 : legacyBest >= 10 ? 2 : legacyBest >= 8 ? 1 : 0;
  const savedStars = saved.progress?.stageStars ?? {};
  const stageStars = Object.keys(savedStars).length > 0 ? savedStars : migratedStars > 0 ? { "1-1": migratedStars } : {};
  const clearedStageIds = saved.progress?.clearedStageIds?.length
    ? saved.progress.clearedStageIds
    : migratedStars > 0 ? ["1-1"] : [];

  return {
    version: 3,
    progress: {
      ...initialPlayerData.progress,
      ...saved.progress,
      stageStars,
      clearedStageIds,
    },
    inventory: {
      ownedItemIds: [...new Set([...(saved.inventory?.ownedItemIds ?? []), ...defaultOwnedItemIds])],
    },
    avatar: saved.avatar ?? initialPlayerData.avatar,
  };
}

export interface PlayerStorage {
  load(): PlayerSaveData;
  save(data: PlayerSaveData): void;
}

export class LocalStoragePlayerStorage implements PlayerStorage {
  load(): PlayerSaveData {
    if (typeof window === "undefined") return initialPlayerData;
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialPlayerData;
    try {
      return migratePlayerData(JSON.parse(raw) as LegacySaveData);
    } catch {
      return initialPlayerData;
    }
  }

  save(data: PlayerSaveData) {
    if (typeof window !== "undefined") window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }
}
