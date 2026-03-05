/**
 * Hint Engine — 3-tier scaffolding system for quizzes/exercises.
 *
 * Tier 1: Nudge — vague directional hint ("Think about what happens when...")
 * Tier 2: Partial — reveals part of the approach ("The formula involves...")
 * Tier 3: Full — complete explanation with answer
 */

export type HintTier = 1 | 2 | 3;

export type HintSet = {
  questionId: string;
  hints: Array<{
    tier: HintTier;
    text: string;
  }>;
};

export type HintState = {
  questionId: string;
  revealedTier: HintTier | 0;
};

/**
 * Get the next hint tier to reveal.
 * Returns null if all hints exhausted.
 */
export function getNextHintTier(current: HintTier | 0): HintTier | null {
  if (current >= 3) return null;
  return (current + 1) as HintTier;
}

/**
 * Get hints up to the revealed tier.
 */
export function getRevealedHints(hintSet: HintSet, revealedTier: HintTier | 0) {
  return hintSet.hints.filter((h) => h.tier <= revealedTier);
}

/**
 * XP penalty for using hints.
 * Tier 1: no penalty. Tier 2: -10% XP. Tier 3: -25% XP.
 */
export function getHintXPMultiplier(maxTierUsed: HintTier | 0): number {
  switch (maxTierUsed) {
    case 0:
    case 1:
      return 1.0;
    case 2:
      return 0.9;
    case 3:
      return 0.75;
    default:
      return 1.0;
  }
}
