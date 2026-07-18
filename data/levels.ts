import type { Level, QuestionType, TypingQuestion } from "@/features/game/types";

function questions(stageId: string, type: QuestionType, values: string[], hint: string): TypingQuestion[] {
  return Array.from({ length: 12 }, (_, index) => ({
    id: `${stageId}-q${index + 1}`,
    text: values[index % values.length],
    hint: type === "singleKey" ? `${hint}　「${values[index % values.length].toUpperCase()}」を さがそう` : `${hint}　ひと文字ずつ ゆっくりでOK！`,
  }));
}

export const levels: Level[] = [
  {
    id: "level-1", number: 1, name: "はじめてのキーさがし", theme: "ホームポジションの近くを見つけよう", color: "pink", unlockCondition: { type: "always" },
    stages: [
      { id: "1-1", code: "1-1", name: "A・S・K", description: "3つのキーを見つけよう", questionType: "singleKey", durationSeconds: 60, clearCorrect: 8, questions: questions("1-1", "singleKey", ["a", "s", "k"], "光るキーを見て"), rewardId: "lv1-star-pin", unlockCondition: { type: "levelUnlocked" } },
      { id: "1-2", code: "1-2", name: "D・F・J・L", description: "人さし指の近くを練習", questionType: "singleKey", durationSeconds: 60, clearCorrect: 8, questions: questions("1-2", "singleKey", ["d", "f", "j", "l"], "手をホームポジションに置いて"), rewardId: "lv1-standard", unlockCondition: { type: "stageCleared", stageId: "1-1" } },
      { id: "1-3", code: "1-3", name: "7キー ミックス", description: "A〜Lをまぜてチャレンジ", questionType: "singleKey", durationSeconds: 60, clearCorrect: 8, questions: questions("1-3", "singleKey", ["a", "s", "d", "f", "j", "k", "l"], "あわてなくて大丈夫"), rewardId: "lv1-clover-pin", unlockCondition: { type: "stageCleared", stageId: "1-2" } },
    ],
  },
  {
    id: "level-2", number: 2, name: "母音のキー", theme: "ことばのもとになる5文字", color: "sky", unlockCondition: { type: "levelCleared", levelId: "level-1" },
    stages: [
      { id: "2-1", code: "2-1", name: "A・I・U・E・O", description: "母音を順番に見つけよう", questionType: "singleKey", durationSeconds: 60, clearCorrect: 8, questions: questions("2-1", "singleKey", ["a", "i", "u", "e", "o"], "母音のキーを"), rewardId: "lv2-standard", unlockCondition: { type: "levelUnlocked" } },
      { id: "2-2", code: "2-2", name: "母音ミックス", description: "順番をまぜて練習", questionType: "singleKey", durationSeconds: 60, clearCorrect: 8, questions: questions("2-2", "singleKey", ["o", "a", "e", "i", "u", "a", "o"], "画面とキーボードを見くらべて"), rewardId: "lv2-standard", unlockCondition: { type: "stageCleared", stageId: "2-1" } },
      { id: "2-3", code: "2-3", name: "母音ミニテスト", description: "5つのキーの仕上げ", questionType: "singleKey", durationSeconds: 60, clearCorrect: 8, questions: questions("2-3", "singleKey", ["i", "e", "a", "o", "u", "e", "i", "a"], "じぶんのペースで"), rewardId: "lv2-cloud-dress", unlockCondition: { type: "stageCleared", stageId: "2-2" } },
    ],
  },
  {
    id: "level-3", number: 3, name: "ローマ字の入口", theme: "2文字をつなげて打ってみよう", color: "mint", unlockCondition: { type: "levelCleared", levelId: "level-2" },
    stages: [
      { id: "3-1", code: "3-1", name: "KA行", description: "KA・KI・KU・KE・KO", questionType: "romajiSyllable", durationSeconds: 60, clearCorrect: 8, questions: questions("3-1", "romajiSyllable", ["ka", "ki", "ku", "ke", "ko"], "Kのあとに母音を入力"), rewardId: "lv3-standard", unlockCondition: { type: "levelUnlocked" } },
      { id: "3-2", code: "3-2", name: "SA行", description: "SA・SI・SU・SE・SO", questionType: "romajiSyllable", durationSeconds: 60, clearCorrect: 8, questions: questions("3-2", "romajiSyllable", ["sa", "si", "su", "se", "so"], "Sのあとに母音を入力"), rewardId: "lv3-standard", unlockCondition: { type: "stageCleared", stageId: "3-1" } },
      { id: "3-3", code: "3-3", name: "KA行・SA行ミックス", description: "2つの行をまぜて練習", questionType: "romajiSyllable", durationSeconds: 60, clearCorrect: 8, questions: questions("3-3", "romajiSyllable", ["ka", "sa", "ki", "su", "ko", "se", "ku", "si"], "さいしょの文字に注目"), rewardId: "lv3-standard", unlockCondition: { type: "stageCleared", stageId: "3-2" } },
    ],
  },
  {
    id: "level-4", number: 4, name: "短いことば", theme: "知っていることばを打ってみよう", color: "yellow", unlockCondition: { type: "levelCleared", levelId: "level-3" },
    stages: [
      { id: "4-1", code: "4-1", name: "neko", description: "ねこをローマ字で入力", questionType: "romajiWord", durationSeconds: 60, clearCorrect: 8, questions: questions("4-1", "romajiWord", ["neko"], "N・E・K・Oの順に"), rewardId: "lv4-standard", unlockCondition: { type: "levelUnlocked" } },
      { id: "4-2", code: "4-2", name: "inu", description: "いぬをローマ字で入力", questionType: "romajiWord", durationSeconds: 60, clearCorrect: 8, questions: questions("4-2", "romajiWord", ["inu"], "I・N・Uの順に"), rewardId: "lv4-standard", unlockCondition: { type: "stageCleared", stageId: "4-1" } },
      { id: "4-3", code: "4-3", name: "ことばミックス", description: "sora・hana・hoshi など", questionType: "romajiWord", durationSeconds: 60, clearCorrect: 8, questions: questions("4-3", "romajiWord", ["sora", "hana", "hoshi", "neko", "inu"], "ことばをよく見て"), rewardId: "lv4-standard", unlockCondition: { type: "stageCleared", stageId: "4-2" } },
    ],
  },
];

export const allStages = levels.flatMap((level) => level.stages);

export function findStage(stageId: string) {
  return allStages.find((stage) => stage.id === stageId);
}

export function findLevelForStage(stageId: string) {
  return levels.find((level) => level.stages.some((stage) => stage.id === stageId));
}
