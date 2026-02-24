import { isReviewDue } from "@/lib/exam/remediation-queue";

export type AutoResolveErrorRow = {
  id: string;
  lesson_id: string;
  skill_id: string | null;
  error_type: string;
  created_at: string;
  resolved?: boolean;
};

export type AutoResolveMasteryRow = {
  skill_id: string;
  mastery_level: number | null;
  attempts: number | null;
  correct_attempts: number | null;
};

export type AutoResolveProgressRow = {
  lesson_id: string;
  next_review_at: string | null;
};

export type AutoResolveCandidate = {
  id: string;
  lessonId: string;
  skillId: string | null;
  errorType: string;
  reason: string;
};

function toTimestamp(value: string | null | undefined) {
  if (!value) return null;
  const timestamp = new Date(value).getTime();
  return Number.isFinite(timestamp) ? timestamp : null;
}

function evaluateAutoResolveCandidate(input: {
  row: AutoResolveErrorRow;
  masteryBySkill: Map<string, AutoResolveMasteryRow>;
  progressByLesson: Map<string, AutoResolveProgressRow>;
  nowMs: number;
}): AutoResolveCandidate | null {
  const { row, masteryBySkill, progressByLesson, nowMs } = input;
  if (row.resolved) return null;

  const createdAtMs = toTimestamp(row.created_at);
  const ageHours =
    createdAtMs === null ? 0 : Math.max(0, (nowMs - createdAtMs) / (1000 * 60 * 60));

  if (row.skill_id) {
    const masteryRow = masteryBySkill.get(row.skill_id);
    if (!masteryRow) return null;

    const masteryLevel = Number(masteryRow.mastery_level ?? 0);
    const attempts = Number(masteryRow.attempts ?? 0);
    const correctAttempts = Number(masteryRow.correct_attempts ?? 0);
    const accuracy = attempts > 0 ? correctAttempts / attempts : 0;

    if (ageHours >= 24 && masteryLevel >= 0.82 && attempts >= 6 && accuracy >= 0.7) {
      return {
        id: row.id,
        lessonId: row.lesson_id,
        skillId: row.skill_id,
        errorType: row.error_type,
        reason: `mastery ${Math.round(masteryLevel * 100)}% with ${attempts} attempts`,
      };
    }
    return null;
  }

  if (row.error_type === "timed_out" && ageHours >= 48) {
    const progressRow = progressByLesson.get(row.lesson_id);
    if (progressRow && !isReviewDue(progressRow.next_review_at, nowMs)) {
      return {
        id: row.id,
        lessonId: row.lesson_id,
        skillId: null,
        errorType: row.error_type,
        reason: "timed-out item older than 48h and lesson is not currently due",
      };
    }
  }

  return null;
}

export function buildAutoResolveCandidates(input: {
  errors: AutoResolveErrorRow[];
  masteryRows: AutoResolveMasteryRow[];
  progressRows: AutoResolveProgressRow[];
  limit?: number;
  nowMs?: number;
}) {
  const { errors, masteryRows, progressRows, limit = 100, nowMs = Date.now() } = input;
  const clampedLimit = Math.max(1, Math.min(500, limit));

  const masteryBySkill = new Map(
    masteryRows.map((row) => [row.skill_id, row] as const),
  );
  const progressByLesson = new Map(
    progressRows.map((row) => [row.lesson_id, row] as const),
  );

  const candidates: AutoResolveCandidate[] = [];
  for (const row of errors) {
    const candidate = evaluateAutoResolveCandidate({
      row,
      masteryBySkill,
      progressByLesson,
      nowMs,
    });
    if (candidate) {
      candidates.push(candidate);
    }
    if (candidates.length >= clampedLimit) {
      break;
    }
  }

  return candidates;
}
