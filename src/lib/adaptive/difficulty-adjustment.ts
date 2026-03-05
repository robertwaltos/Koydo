/**
 * Adaptive Difficulty — Real-time difficulty adjustment based on recent scores.
 *
 * Analyzes the last N scores to determine if difficulty should increase,
 * decrease, or stay the same. Uses a sliding window approach.
 */

export type DifficultyLevel = "easy" | "medium" | "hard";

const WINDOW_SIZE = 5;
const INCREASE_THRESHOLD = 0.85; // Increase difficulty if avg > 85%
const DECREASE_THRESHOLD = 0.45; // Decrease difficulty if avg < 45%

/**
 * Calculate recommended difficulty adjustment based on recent scores.
 *
 * @param recentScores Array of scores as percentages (0-100)
 * @param currentDifficulty Current difficulty level
 * @returns Recommended new difficulty level
 */
export function getDifficultyAdjustment(
  recentScores: number[],
  currentDifficulty: DifficultyLevel,
): { newDifficulty: DifficultyLevel; reason: string } {
  if (recentScores.length < 3) {
    return { newDifficulty: currentDifficulty, reason: "Insufficient data (need 3+ scores)" };
  }

  const window = recentScores.slice(-WINDOW_SIZE);
  const avg = window.reduce((sum, s) => sum + s, 0) / window.length / 100;

  if (avg >= INCREASE_THRESHOLD) {
    if (currentDifficulty === "easy") {
      return { newDifficulty: "medium", reason: `High performance (${Math.round(avg * 100)}% avg) — increasing to medium` };
    }
    if (currentDifficulty === "medium") {
      return { newDifficulty: "hard", reason: `High performance (${Math.round(avg * 100)}% avg) — increasing to hard` };
    }
    return { newDifficulty: "hard", reason: `Already at highest difficulty (${Math.round(avg * 100)}% avg)` };
  }

  if (avg <= DECREASE_THRESHOLD) {
    if (currentDifficulty === "hard") {
      return { newDifficulty: "medium", reason: `Struggling (${Math.round(avg * 100)}% avg) — decreasing to medium` };
    }
    if (currentDifficulty === "medium") {
      return { newDifficulty: "easy", reason: `Struggling (${Math.round(avg * 100)}% avg) — decreasing to easy` };
    }
    return { newDifficulty: "easy", reason: `Already at lowest difficulty (${Math.round(avg * 100)}% avg)` };
  }

  return { newDifficulty: currentDifficulty, reason: `Performance in range (${Math.round(avg * 100)}% avg) — maintaining ${currentDifficulty}` };
}

/**
 * Difficulty multiplier for XP rewards.
 */
export function getDifficultyXPMultiplier(difficulty: DifficultyLevel): number {
  switch (difficulty) {
    case "easy": return 0.8;
    case "medium": return 1.0;
    case "hard": return 1.3;
  }
}
