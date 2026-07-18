export type QuestionType = "singleKey" | "romajiSyllable" | "romajiWord" | "phrase";

export type TypingQuestion = {
  id: string;
  text: string;
  hint: string;
};

export type UnlockCondition =
  | { type: "always" }
  | { type: "levelUnlocked" }
  | { type: "stageCleared"; stageId: string }
  | { type: "levelCleared"; levelId: string };

export type StageReward = {
  baseCoins: number;
  firstClearBonus: number;
  threeStarBonus: number;
  itemId?: string;
};

export type Stage = {
  id: string;
  code: string;
  name: string;
  description: string;
  questionType: QuestionType;
  durationSeconds: number;
  clearCorrect: number;
  questions: TypingQuestion[];
  rewardId: string;
  unlockCondition: UnlockCondition;
};

export type Level = {
  id: string;
  number: number;
  name: string;
  theme: string;
  color: "pink" | "sky" | "mint" | "yellow";
  unlockCondition: UnlockCondition;
  stages: Stage[];
};

export type GameResult = {
  correct: number;
  answered: number;
  mistakes: number;
  stars: number;
  cleared: boolean;
};
