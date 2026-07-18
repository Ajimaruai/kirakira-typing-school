import type { GameResult } from "./types";

export const QUESTIONS_PER_STAGE = 12;
export const CLEAR_CORRECT = 8;

export function calculateStars(correct: number): number {
  if (correct >= 12) return 3;
  if (correct >= 10) return 2;
  if (correct >= CLEAR_CORRECT) return 1;
  return 0;
}

export function createGameResult(correct: number, answered: number, mistakes: number): GameResult {
  return {
    correct,
    answered,
    mistakes,
    stars: calculateStars(correct),
    cleared: correct >= CLEAR_CORRECT,
  };
}
