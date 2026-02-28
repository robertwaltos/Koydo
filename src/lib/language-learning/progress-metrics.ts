export type PronunciationAttemptSummaryRow = {
  grading_mode: string | null;
  overall_score: number | string | null;
  created_at: string | null;
};

export type GamificationStateSummaryRow = {
  points: number | null;
  level: number | null;
  badges: unknown;
  quests_completed: unknown;
  last_activity_at: string | null;
};

export type LanguageProgressSummary = {
  totalAttempts: number;
  gradedAttempts: number;
  practiceOnlyAttempts: number;
  averageScore: number | null;
  recentScoreTrendDelta: number | null;
  latestAttemptAt: string | null;
  points: number;
  level: number;
  badgesCount: number;
  questsCompletedCount: number;
  lastActivityAt: string | null;
};

function toArrayCount(value: unknown): number {
  return Array.isArray(value) ? value.length : 0;
}

function toScoreValue(value: number | string | null): number | null {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string") {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) return parsed;
  }
  return null;
}

function average(values: number[]): number | null {
  if (values.length === 0) return null;
  const total = values.reduce((sum, value) => sum + value, 0);
  return Number((total / values.length).toFixed(1));
}

export function summarizeLanguageProgress(
  attempts: PronunciationAttemptSummaryRow[],
  state: GamificationStateSummaryRow | null,
): LanguageProgressSummary {
  const sortedAttempts = [...attempts].sort((a, b) => {
    const left = a.created_at ? new Date(a.created_at).getTime() : 0;
    const right = b.created_at ? new Date(b.created_at).getTime() : 0;
    return right - left;
  });

  const gradedAttempts = sortedAttempts.filter((row) => row.grading_mode === "graded");
  const practiceOnlyAttempts = sortedAttempts.filter(
    (row) => row.grading_mode === "practice_only",
  );

  const gradedScores = gradedAttempts
    .map((row) => toScoreValue(row.overall_score))
    .filter((value): value is number => value !== null);
  const averageScore = average(gradedScores);

  const recentScores = gradedScores.slice(0, 5);
  const priorScores = gradedScores.slice(5, 10);
  const recentAverage = average(recentScores);
  const priorAverage = average(priorScores);
  const recentScoreTrendDelta =
    recentAverage !== null && priorAverage !== null
      ? Number((recentAverage - priorAverage).toFixed(1))
      : null;

  return {
    totalAttempts: sortedAttempts.length,
    gradedAttempts: gradedAttempts.length,
    practiceOnlyAttempts: practiceOnlyAttempts.length,
    averageScore,
    recentScoreTrendDelta,
    latestAttemptAt: sortedAttempts[0]?.created_at ?? null,
    points: Math.max(0, state?.points ?? 0),
    level: Math.max(1, state?.level ?? 1),
    badgesCount: toArrayCount(state?.badges),
    questsCompletedCount: toArrayCount(state?.quests_completed),
    lastActivityAt: state?.last_activity_at ?? null,
  };
}
