import type { GameDifficulty, GameResult, GameStars } from "./types";
import {
  hapticCelebration,
  hapticError,
  hapticSuccess,
} from "@/lib/platform/haptics";

const STAR_THRESHOLDS = Object.freeze({
  three: 0.9,
  two: 0.7,
  one: 0.45,
});

const STAR_BASE_POINTS: Record<GameStars, number> = {
  0: 6,
  1: 14,
  2: 26,
  3: 40,
};

const DIFFICULTY_MULTIPLIER: Record<GameDifficulty, number> = {
  easy: 1,
  medium: 1.25,
  hard: 1.55,
};

const DIFFICULTY_NORMALIZATION_BONUS: Record<GameDifficulty, number> = {
  easy: 0,
  medium: 0.05,
  hard: 0.1,
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function calculateStars(score: number, maxScore: number): GameStars {
  if (maxScore <= 0) return 3;
  const ratio = clamp(score / maxScore, 0, 1);
  if (ratio >= STAR_THRESHOLDS.three) return 3;
  if (ratio >= STAR_THRESHOLDS.two) return 2;
  if (ratio >= STAR_THRESHOLDS.one) return 1;
  return 0;
}

export function calculatePoints(stars: GameStars, difficulty: GameDifficulty): number {
  const basePoints = STAR_BASE_POINTS[stars];
  const multiplier = DIFFICULTY_MULTIPLIER[difficulty];
  return Math.max(0, Math.round(basePoints * multiplier));
}

export function normalizeGameScore(result: GameResult): number {
  const scoreRatio =
    result.maxScore > 0 ? clamp(result.score / result.maxScore, 0, 1) : 0;
  const starsRatio = clamp(result.stars / 3, 0, 1);
  const blended = scoreRatio * 0.8 + starsRatio * 0.2;
  const normalized = blended + DIFFICULTY_NORMALIZATION_BONUS[result.difficulty];
  return Number(clamp(normalized, 0, 1).toFixed(4));
}

export async function reportGameResult(result: GameResult): Promise<{
  stars: GameStars;
  points: number;
  normalized: number;
}> {
  const stars = calculateStars(result.score, result.maxScore);
  const points = calculatePoints(stars, result.difficulty);
  const normalized = normalizeGameScore(result);

  if (stars === 0) {
    await hapticError();
  } else if (stars < 3) {
    await hapticSuccess();
  } else {
    await hapticCelebration();
  }

  return {
    stars,
    points,
    normalized,
  };
}
