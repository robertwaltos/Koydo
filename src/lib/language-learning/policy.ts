export const LANGUAGE_POLICY_VERSION = "2026-02-27-tranche2a";

export const PRONUNCIATION_SCORING_WEIGHTS = Object.freeze({
  accuracy: 0.45,
  fluency: 0.35,
  prosody: 0.2,
});

export const PRONUNCIATION_MIN_CONFIDENCE_FOR_GRADED_ATTEMPT = 0.7;

export type PronunciationGradingMode = "graded" | "practice_only";

export const GAMIFICATION_LIMITS = Object.freeze({
  maxBadgesPerModule: 3,
  maxGlobalLevels: 20,
  maxDailyQuests: 2,
  maxWeeklyQuests: 1,
  maxRewardPopupsPerSession: 3,
  calibrationAttemptsWithoutPenalty: 3,
});

export const LANGUAGE_AI_BUDGET_LIMITS = Object.freeze({
  totalAiUsdPerActiveLearnerMonth: 0.05,
  llmUsdPerActiveLearnerMonth: 0.008,
  llmHardCapUsdPerMonth: 300,
  llmTemplateFallbackBudgetUsageThreshold: 0.8,
});

export const LANGUAGE_GAMIFICATION_WAVES = Object.freeze([
  {
    wave: 1,
    subjects: ["language_learning", "language_arts"],
  },
  {
    wave: 2,
    subjects: ["science", "social_studies"],
  },
  {
    wave: 3,
    subjects: ["math_verbal_reasoning"],
  },
]);

export function resolvePronunciationGradingMode(
  asrConfidence?: number,
): PronunciationGradingMode {
  if (typeof asrConfidence !== "number") {
    return "graded";
  }
  return asrConfidence < PRONUNCIATION_MIN_CONFIDENCE_FOR_GRADED_ATTEMPT
    ? "practice_only"
    : "graded";
}

export function getLanguageLearningPolicySnapshot() {
  return {
    version: LANGUAGE_POLICY_VERSION,
    pronunciation: {
      scoringWeights: PRONUNCIATION_SCORING_WEIGHTS,
      minConfidenceForGrade: PRONUNCIATION_MIN_CONFIDENCE_FOR_GRADED_ATTEMPT,
    },
    gamification: GAMIFICATION_LIMITS,
    aiBudget: LANGUAGE_AI_BUDGET_LIMITS,
    rolloutWaves: LANGUAGE_GAMIFICATION_WAVES,
  };
}
