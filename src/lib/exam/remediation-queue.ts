import type { LearningModule } from "@/lib/modules/types";

export type RemediationProgressRow = {
  lesson_id: string;
  next_review_at: string | null;
};

export type RemediationMasteryRow = {
  skill_id: string;
  mastery_level: number | null;
};

export type RemediationErrorRow = {
  lesson_id: string;
  skill_id: string | null;
  error_type: string | null;
  created_at: string | null;
};

export type RemediationPriority = "critical" | "high" | "medium" | "low";

export type RemediationQueueItem = {
  lessonId: string;
  lessonTitle: string;
  moduleId: string;
  moduleTitle: string;
  lessonType: string;
  isTimedQuiz: boolean;
  urgencyScore: number;
  priority: RemediationPriority;
  openErrorCount: number;
  dueForReview: boolean;
  weakSkillMatches: number;
  recurringSkillMatches: number;
  topSkills: Array<{ skillId: string; count: number }>;
  dominantErrorTypes: Array<{ errorType: string; count: number }>;
  lastErrorAt: string | null;
  reason: string;
  suggestedFocus: string;
};

export type RemediationQueueSummary = {
  unresolvedCount: number;
  dueLessonCount: number;
  queueLength: number;
  topSkills: Array<{ skillId: string; count: number }>;
  topErrorTypes: Array<{ errorType: string; count: number }>;
  priorityCounts: Record<RemediationPriority, number>;
};

export type RemediationQueueResult = {
  queue: RemediationQueueItem[];
  summary: RemediationQueueSummary;
};

type BuildAdaptiveRemediationQueueInput = {
  learningModules: LearningModule[];
  progressRows: RemediationProgressRow[];
  unresolvedErrors: RemediationErrorRow[];
  masteryRows?: RemediationMasteryRow[];
  maxItems?: number;
  nowMs?: number;
};

type LessonContext = {
  lessonId: string;
  lessonTitle: string;
  moduleId: string;
  moduleTitle: string;
  lessonType: string;
  isTimedQuiz: boolean;
  lessonSkillIds: Set<string>;
};

type LessonAggregate = {
  openErrorCount: number;
  recencyScore: number;
  lastErrorAtMs: number | null;
  skillCounts: Map<string, number>;
  errorTypeCounts: Map<string, number>;
};

function toTimestamp(value: string | null | undefined) {
  if (!value) return null;
  const timestamp = new Date(value).getTime();
  return Number.isFinite(timestamp) ? timestamp : null;
}

export function isReviewDue(nextReviewAt: string | null | undefined, nowMs = Date.now()) {
  const timestamp = toTimestamp(nextReviewAt);
  return timestamp !== null && timestamp <= nowMs;
}

function recencyWeight(createdAt: string | null | undefined, nowMs: number) {
  const timestamp = toTimestamp(createdAt);
  if (timestamp === null) return 0.6;
  const ageMs = Math.max(0, nowMs - timestamp);
  const ageDays = ageMs / (1000 * 60 * 60 * 24);
  if (ageDays <= 1) return 1.8;
  if (ageDays <= 3) return 1.5;
  if (ageDays <= 7) return 1.2;
  if (ageDays <= 14) return 1.0;
  if (ageDays <= 30) return 0.8;
  return 0.6;
}

function toTopSkillCounts(skillCounts: Map<string, number>, limit: number) {
  return Array.from(skillCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([skillId, count]) => ({ skillId, count }));
}

function toTopErrorTypeCounts(errorTypeCounts: Map<string, number>, limit: number) {
  return Array.from(errorTypeCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([errorType, count]) => ({ errorType, count }));
}

function roundScore(score: number) {
  return Math.round(score * 10) / 10;
}

function toPriority(score: number): RemediationPriority {
  if (score >= 24) return "critical";
  if (score >= 14) return "high";
  if (score >= 7) return "medium";
  return "low";
}

function buildSuggestedFocus(input: {
  dominantErrorTypes: Array<{ errorType: string; count: number }>;
  weakSkillMatches: number;
  dueForReview: boolean;
  isTimedQuiz: boolean;
  openErrorCount: number;
}) {
  const primaryErrorType = input.dominantErrorTypes[0]?.errorType ?? null;
  if (primaryErrorType === "timed_out") {
    return "Run a timed drill: answer in passes and flag hard questions first.";
  }
  if (primaryErrorType === "careless_mistake") {
    return "Slow down and use a two-step check before each submission.";
  }
  if (primaryErrorType === "strategy_gap") {
    return "Review strategy notes, then attempt mixed practice with explanation mode.";
  }
  if (primaryErrorType === "concept_gap") {
    return "Revisit concept lesson first, then retake targeted quiz questions.";
  }
  if (input.weakSkillMatches > 0) {
    return "Focus weak skills first and complete one reinforcement activity before retrying.";
  }
  if (input.dueForReview) {
    return "Complete a spaced-review pass to prevent forgetting.";
  }
  if (input.isTimedQuiz && input.openErrorCount > 0) {
    return "Practice one short timed set and track pacing per question.";
  }
  return "Do one focused retry set and resolve related error-log items.";
}

function initializeLessonLookup(learningModules: LearningModule[]) {
  const lessonLookup = new Map<string, LessonContext>();

  for (const learningModule of learningModules) {
    for (const lesson of learningModule.lessons) {
      const lessonSkillIds = new Set(
        (lesson.questions ?? [])
          .map((question) => question.skillId)
          .filter((skillId): skillId is string => typeof skillId === "string" && skillId.length > 0),
      );

      lessonLookup.set(lesson.id, {
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        moduleId: learningModule.id,
        moduleTitle: learningModule.title,
        lessonType: lesson.type,
        isTimedQuiz:
          lesson.type === "quiz" &&
          typeof lesson.quizBlueprint?.timeLimitMinutes === "number" &&
          lesson.quizBlueprint.timeLimitMinutes > 0,
        lessonSkillIds,
      });
    }
  }

  return lessonLookup;
}

function initializeAggregate(): LessonAggregate {
  return {
    openErrorCount: 0,
    recencyScore: 0,
    lastErrorAtMs: null,
    skillCounts: new Map<string, number>(),
    errorTypeCounts: new Map<string, number>(),
  };
}

export function buildAdaptiveRemediationQueue({
  learningModules,
  progressRows,
  unresolvedErrors,
  masteryRows = [],
  maxItems = 20,
  nowMs = Date.now(),
}: BuildAdaptiveRemediationQueueInput): RemediationQueueResult {
  const lessonLookup = initializeLessonLookup(learningModules);
  const dueLessonIds = new Set(
    progressRows.filter((row) => isReviewDue(row.next_review_at, nowMs)).map((row) => row.lesson_id),
  );
  const weakSkillSet = new Set(
    masteryRows
      .filter((row) => Number(row.mastery_level ?? 0) > 0 && Number(row.mastery_level ?? 0) < 0.7)
      .map((row) => row.skill_id),
  );

  const lessonAggregates = new Map<string, LessonAggregate>();
  const globalSkillCounts = new Map<string, number>();
  const globalErrorTypeCounts = new Map<string, number>();

  for (const errorRow of unresolvedErrors) {
    if (!errorRow.lesson_id) {
      continue;
    }

    const aggregate = lessonAggregates.get(errorRow.lesson_id) ?? initializeAggregate();
    aggregate.openErrorCount += 1;
    aggregate.recencyScore += recencyWeight(errorRow.created_at, nowMs);

    const createdAtMs = toTimestamp(errorRow.created_at);
    if (createdAtMs !== null && (aggregate.lastErrorAtMs === null || createdAtMs > aggregate.lastErrorAtMs)) {
      aggregate.lastErrorAtMs = createdAtMs;
    }

    if (errorRow.skill_id) {
      aggregate.skillCounts.set(errorRow.skill_id, (aggregate.skillCounts.get(errorRow.skill_id) ?? 0) + 1);
      globalSkillCounts.set(errorRow.skill_id, (globalSkillCounts.get(errorRow.skill_id) ?? 0) + 1);
    }

    const normalizedErrorType = errorRow.error_type ?? "incorrect_answer";
    aggregate.errorTypeCounts.set(normalizedErrorType, (aggregate.errorTypeCounts.get(normalizedErrorType) ?? 0) + 1);
    globalErrorTypeCounts.set(
      normalizedErrorType,
      (globalErrorTypeCounts.get(normalizedErrorType) ?? 0) + 1,
    );

    lessonAggregates.set(errorRow.lesson_id, aggregate);
  }

  const candidateLessonIds = new Set<string>([...lessonAggregates.keys(), ...dueLessonIds]);
  const queueItems: RemediationQueueItem[] = [];

  for (const lessonId of candidateLessonIds) {
    const context = lessonLookup.get(lessonId);
    if (!context) {
      continue;
    }

    const aggregate = lessonAggregates.get(lessonId);
    const dueForReview = dueLessonIds.has(lessonId);
    const openErrorCount = aggregate?.openErrorCount ?? 0;
    const weakSkillMatches = Array.from(context.lessonSkillIds).filter((skillId) => weakSkillSet.has(skillId)).length;
    const recurringSkillMatches = Array.from(aggregate?.skillCounts.values() ?? []).filter((count) => count > 1).length;
    const topSkills = toTopSkillCounts(aggregate?.skillCounts ?? new Map<string, number>(), 3);
    const dominantErrorTypes = toTopErrorTypeCounts(aggregate?.errorTypeCounts ?? new Map<string, number>(), 3);

    let urgencyScore = 0;
    urgencyScore += (aggregate?.recencyScore ?? 0) * 4;
    urgencyScore += openErrorCount * 2.5;
    if (dueForReview) urgencyScore += 5;
    if (weakSkillMatches > 0) urgencyScore += weakSkillMatches * 1.75;
    if (recurringSkillMatches > 0) urgencyScore += recurringSkillMatches * 1.5;
    if (context.lessonType === "quiz") urgencyScore += 1;
    if (context.isTimedQuiz && openErrorCount > 0) urgencyScore += 2;
    if (dominantErrorTypes[0]?.errorType === "timed_out") urgencyScore += 1.5;

    // Keep due spaced-review lessons in the queue even if they currently have no open errors.
    if (openErrorCount === 0 && dueForReview) {
      urgencyScore = Math.max(urgencyScore, 6);
    }

    urgencyScore = roundScore(urgencyScore);
    const priority = toPriority(urgencyScore);

    const reasonParts: string[] = [];
    if (openErrorCount > 0) {
      reasonParts.push(`${openErrorCount} open error${openErrorCount > 1 ? "s" : ""}`);
    }
    if (dueForReview) {
      reasonParts.push("due for spaced review");
    }
    if (weakSkillMatches > 0) {
      reasonParts.push(`${weakSkillMatches} weak skill match${weakSkillMatches > 1 ? "es" : ""}`);
    }
    if (context.isTimedQuiz && openErrorCount > 0) {
      reasonParts.push("timed drill recommended");
    }
    if (reasonParts.length === 0) {
      reasonParts.push("general reinforcement");
    }

    queueItems.push({
      lessonId: context.lessonId,
      lessonTitle: context.lessonTitle,
      moduleId: context.moduleId,
      moduleTitle: context.moduleTitle,
      lessonType: context.lessonType,
      isTimedQuiz: context.isTimedQuiz,
      urgencyScore,
      priority,
      openErrorCount,
      dueForReview,
      weakSkillMatches,
      recurringSkillMatches,
      topSkills,
      dominantErrorTypes,
      lastErrorAt: aggregate?.lastErrorAtMs ? new Date(aggregate.lastErrorAtMs).toISOString() : null,
      reason: reasonParts.join("; "),
      suggestedFocus: buildSuggestedFocus({
        dominantErrorTypes,
        weakSkillMatches,
        dueForReview,
        isTimedQuiz: context.isTimedQuiz,
        openErrorCount,
      }),
    });
  }

  queueItems.sort((a, b) => {
    return (
      b.urgencyScore - a.urgencyScore ||
      b.openErrorCount - a.openErrorCount ||
      Number(b.dueForReview) - Number(a.dueForReview) ||
      a.lessonTitle.localeCompare(b.lessonTitle)
    );
  });

  const clampedMaxItems = Math.max(1, Math.min(100, maxItems));
  const queue = queueItems.slice(0, clampedMaxItems);
  const priorityCounts = queue.reduce<Record<RemediationPriority, number>>(
    (accumulator, item) => {
      accumulator[item.priority] += 1;
      return accumulator;
    },
    { critical: 0, high: 0, medium: 0, low: 0 },
  );

  return {
    queue,
    summary: {
      unresolvedCount: unresolvedErrors.length,
      dueLessonCount: dueLessonIds.size,
      queueLength: queue.length,
      topSkills: toTopSkillCounts(globalSkillCounts, 5),
      topErrorTypes: toTopErrorTypeCounts(globalErrorTypeCounts, 5),
      priorityCounts,
    },
  };
}
