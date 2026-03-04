/* -------------------------------------------------------------------------- */
/*  Koydo Game Engine — Star / Score Utilities                               */
/* -------------------------------------------------------------------------- */

import type { Difficulty, Stars, GameRoundResult } from "./types";

const STAR_THRESHOLDS = { three: 0.9, two: 0.7, one: 0.4 } as const;

export function calculateStars(score: number, maxScore: number): Stars {
  if (maxScore <= 0) return 0;
  const ratio = score / maxScore;
  if (ratio >= STAR_THRESHOLDS.three) return 3;
  if (ratio >= STAR_THRESHOLDS.two) return 2;
  if (ratio >= STAR_THRESHOLDS.one) return 1;
  return 0;
}

const DIFFICULTY_MULT: Record<Difficulty, number> = {
  easy: 1,
  medium: 1.3,
  hard: 1.6,
};

const STAR_BASE_PTS: Record<Stars, number> = { 0: 5, 1: 15, 2: 30, 3: 50 };

export function calculatePoints(stars: Stars, difficulty: Difficulty): number {
  return Math.round(STAR_BASE_PTS[stars] * DIFFICULTY_MULT[difficulty]);
}

export function buildResult(
  score: number,
  maxScore: number,
  timeMs: number,
  level: number,
  difficulty: Difficulty,
): GameRoundResult {
  const stars = calculateStars(score, maxScore);
  return { score, maxScore, stars, timeMs, level, difficulty };
}

/** Shuffle an array (Fisher-Yates). */
export function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

/** Pick n random items from an array. */
export function pickRandom<T>(arr: readonly T[], n: number): T[] {
  return shuffle(arr).slice(0, Math.min(n, arr.length));
}

/** Generate a seeded random number (deterministic daily challenge). */
export function seededRandom(seed: string): () => number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(31, h) + seed.charCodeAt(i) | 0;
  }
  return () => {
    h = Math.imul(h ^ (h >>> 16), 0x45d9f3b);
    h = Math.imul(h ^ (h >>> 13), 0x45d9f3b);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967296;
  };
}

/** Clamp a value between min and max. */
export function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v));
}

/** Generate a grid of given dimensions filled with a factory. */
export function makeGrid<T>(
  rows: number,
  cols: number,
  factory: (r: number, c: number) => T,
): T[][] {
  return Array.from({ length: rows }, (_, r) =>
    Array.from({ length: cols }, (__, c) => factory(r, c)),
  );
}

/** Lerp between two values. */
export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * clamp(t, 0, 1);
}
