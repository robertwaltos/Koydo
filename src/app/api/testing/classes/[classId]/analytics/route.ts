import { NextResponse } from "next/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isMissingTestingTableError } from "@/lib/testing/api-utils";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { resolveVerifiedTeacherClassAccess } from "@/lib/compliance/teacher-access";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { estimateAssignmentMinutes } from "@/lib/testing/assignment-builder";

type AttemptRow = {
  user_id: string;
  exam_id: string;
  score: number | null;
  domain_breakdown: unknown;
  completed_at: string | null;
};

type LearnerSummary = {
  learnerUserId: string;
  attempts: number;
  latestScore: number | null;
  averageScore: number | null;
  latestCompletedAt: string | null;
};

type DomainAggregate = {
  averageScore: number;
  attempts: number;
  weakCount: number;
};

type ClassAssignmentRow = {
  id: string;
  exam_id: string | null;
  module_id: string | null;
  assigned_at: string;
  due_at: string | null;
};

type ActiveExamRow = {
  id: string;
  timing_minutes: number | null;
};

type AssignmentOutcome = {
  id: string;
  examId: string | null;
  moduleId: string | null;
  assignedAt: string;
  dueAt: string | null;
  estimatedMinutes: number;
  trackedBy: "exam_attempts" | "not_linked";
  assignedLearnerCount: number;
  submittedLearnerCount: number;
  submissionCount: number;
  completionRate: number;
  averageScore: number | null;
  isOverdue: boolean;
};

function parseDomainBreakdown(
  value: unknown,
): Record<string, { score: number }> {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  const output: Record<string, { score: number }> = {};
  for (const [domain, rawEntry] of Object.entries(value as Record<string, unknown>)) {
    if (!rawEntry || typeof rawEntry !== "object" || Array.isArray(rawEntry)) continue;
    const entry = rawEntry as Record<string, unknown>;
    const score = Number(entry.score ?? 0);
    if (!Number.isFinite(score)) continue;
    output[domain] = { score };
  }
  return output;
}

function round(value: number) {
  return Math.round(value * 100) / 100;
}

function summarizeAssignmentOutcomes(params: {
  assignments: ClassAssignmentRow[];
  attempts: AttemptRow[];
  learnerCount: number;
  examTimingMinutesById: Map<string, number>;
}) {
  const now = Date.now();

  return params.assignments.map((assignment) => {
    const estimatedMinutes = estimateAssignmentMinutes({
      examId: assignment.exam_id,
      moduleId: assignment.module_id,
      examTimingMinutesById: params.examTimingMinutesById,
    });

    if (!assignment.exam_id) {
      return {
        id: assignment.id,
        examId: assignment.exam_id,
        moduleId: assignment.module_id,
        assignedAt: assignment.assigned_at,
        dueAt: assignment.due_at,
        estimatedMinutes,
        trackedBy: "not_linked" as const,
        assignedLearnerCount: params.learnerCount,
        submittedLearnerCount: 0,
        submissionCount: 0,
        completionRate: 0,
        averageScore: null,
        isOverdue: Boolean(assignment.due_at && Date.parse(assignment.due_at) < now),
      } satisfies AssignmentOutcome;
    }

    const assignedAtMs = Date.parse(assignment.assigned_at);
    const dueAtMs = assignment.due_at ? Date.parse(assignment.due_at) : null;

    const relevantAttempts = params.attempts.filter((attempt) => {
      if (attempt.exam_id !== assignment.exam_id) return false;
      if (!attempt.completed_at) return false;
      const completedAtMs = Date.parse(attempt.completed_at);
      if (!Number.isFinite(completedAtMs)) return false;
      if (Number.isFinite(assignedAtMs) && completedAtMs < assignedAtMs) return false;
      if (dueAtMs && Number.isFinite(dueAtMs) && completedAtMs > dueAtMs) return false;
      return true;
    });

    const submittedLearners = new Set(relevantAttempts.map((attempt) => attempt.user_id));
    const scoreValues = relevantAttempts
      .map((attempt) => Number(attempt.score))
      .filter((score) => Number.isFinite(score));

    const averageScore =
      scoreValues.length > 0
        ? round(scoreValues.reduce((sum, score) => sum + score, 0) / scoreValues.length)
        : null;
    const submittedLearnerCount = submittedLearners.size;
    const completionRate =
      params.learnerCount > 0 ? round((submittedLearnerCount / params.learnerCount) * 100) : 0;

    return {
      id: assignment.id,
      examId: assignment.exam_id,
      moduleId: assignment.module_id,
      assignedAt: assignment.assigned_at,
      dueAt: assignment.due_at,
      estimatedMinutes,
      trackedBy: "exam_attempts" as const,
      assignedLearnerCount: params.learnerCount,
      submittedLearnerCount,
      submissionCount: relevantAttempts.length,
      completionRate,
      averageScore,
      isOverdue: Boolean(
        assignment.due_at
          && Date.parse(assignment.due_at) < now
          && submittedLearnerCount < params.learnerCount,
      ),
    } satisfies AssignmentOutcome;
  });
}

export async function GET(
  request: Request,
  context: { params: Promise<{ classId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:testing:classes:analytics:get", {
    max: 45,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many class analytics requests. Please retry shortly." },
      {
        status: 429,
        headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
      },
    );
  }

  const { classId } = await context.params;
  const examId = new URL(request.url).searchParams.get("examId");

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const teacherAccess = await resolveVerifiedTeacherClassAccess({
    userId: user.id,
    classId,
    purpose: "testing_class_analytics",
  });
  if (!teacherAccess.ok) {
    if (teacherAccess.status === 403 || teacherAccess.status === 404 || teacherAccess.status === 503) {
      return NextResponse.json({ error: teacherAccess.error }, { status: teacherAccess.status });
    }
    return NextResponse.json({ error: "Internal server error." }, { status: teacherAccess.status });
  }

  const admin = createSupabaseAdminClient();
  const [enrollmentResult, assignmentResult, examResult] = await Promise.all([
    admin
      .from("class_enrollments")
      .select("learner_user_id, parent_consent")
      .eq("class_id", classId),
    admin
      .from("class_assignments")
      .select("id, exam_id, module_id, assigned_at, due_at")
      .eq("class_id", classId)
      .order("assigned_at", { ascending: false }),
    admin
      .from("testing_exams")
      .select("id, timing_minutes")
      .eq("is_active", true)
      .eq("language", "en"),
  ]);

  const { data: enrollments, error: enrollmentError } = enrollmentResult;

  if (enrollmentError) {
    if (isMissingTestingTableError(enrollmentError)) {
      return NextResponse.json(
        { error: "Testing/classroom tables are not ready. Run Supabase migrations first." },
        { status: 503 },
      );
    }
    console.error("Unexpected API error.", toSafeErrorRecord(enrollmentError));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  if (assignmentResult.error) {
    if (isMissingTestingTableError(assignmentResult.error)) {
      return NextResponse.json(
        { error: "Testing/classroom tables are not ready. Run Supabase migrations first." },
        { status: 503 },
      );
    }
    console.error("Unexpected API error.", toSafeErrorRecord(assignmentResult.error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  if (examResult.error) {
    if (isMissingTestingTableError(examResult.error)) {
      return NextResponse.json(
        { error: "Testing/classroom tables are not ready. Run Supabase migrations first." },
        { status: 503 },
      );
    }
    console.error("Unexpected API error.", toSafeErrorRecord(examResult.error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  const assignments = ((assignmentResult.data ?? []) as ClassAssignmentRow[])
    .filter((entry) => !examId || entry.exam_id === examId);

  const examTimingMinutesById = new Map<string, number>();
  for (const exam of (examResult.data ?? []) as ActiveExamRow[]) {
    const numeric = Number(exam.timing_minutes ?? 0);
    if (Number.isFinite(numeric) && numeric > 0) {
      examTimingMinutesById.set(exam.id, numeric);
    }
  }

  const learnerUserIds = (enrollments ?? [])
    .filter((entry) => Boolean(entry.parent_consent))
    .map((entry) => entry.learner_user_id)
    .filter((value): value is string => typeof value === "string" && value.length > 0);

  if (learnerUserIds.length === 0) {
    return NextResponse.json({
      classId: teacherAccess.classId,
      className: teacherAccess.className,
      examId: examId ?? null,
      learnerCount: 0,
      attemptCount: 0,
      aggregateScore: null,
      learnerProgress: [] as LearnerSummary[],
      domainHeatmap: {} as Record<string, DomainAggregate>,
      weakDomains: [] as string[],
      assignmentOutcomes: summarizeAssignmentOutcomes({
        assignments,
        attempts: [],
        learnerCount: 0,
        examTimingMinutesById,
      }),
    });
  }

  let attemptsQuery = admin
    .from("testing_exam_attempts")
    .select("user_id, exam_id, score, domain_breakdown, completed_at")
    .in("user_id", learnerUserIds)
    .eq("status", "completed");

  if (examId) {
    attemptsQuery = attemptsQuery.eq("exam_id", examId);
  }

  const { data: attemptsData, error: attemptsError } = await attemptsQuery;
  if (attemptsError) {
    console.error("Unexpected API error.", toSafeErrorRecord(attemptsError));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  const attempts = (attemptsData ?? []) as AttemptRow[];
  const learnerMap = new Map<string, {
    attempts: number;
    scoreTotal: number;
    scoreCount: number;
    latestScore: number | null;
    latestCompletedAt: string | null;
  }>();

  const domainMap = new Map<string, {
    scoreTotal: number;
    attempts: number;
    weakCount: number;
  }>();

  let aggregateScoreTotal = 0;
  let aggregateScoreCount = 0;

  for (const attempt of attempts) {
    const numericScore = attempt.score != null ? Number(attempt.score) : NaN;
    if (Number.isFinite(numericScore)) {
      aggregateScoreTotal += numericScore;
      aggregateScoreCount += 1;
    }

    const learner = learnerMap.get(attempt.user_id) ?? {
      attempts: 0,
      scoreTotal: 0,
      scoreCount: 0,
      latestScore: null,
      latestCompletedAt: null,
    };

    learner.attempts += 1;
    if (Number.isFinite(numericScore)) {
      learner.scoreTotal += numericScore;
      learner.scoreCount += 1;
    }

    if (attempt.completed_at) {
      const currentLatest = learner.latestCompletedAt ? Date.parse(learner.latestCompletedAt) : 0;
      const candidate = Date.parse(attempt.completed_at);
      if (Number.isFinite(candidate) && candidate >= currentLatest) {
        learner.latestCompletedAt = attempt.completed_at;
        learner.latestScore = Number.isFinite(numericScore) ? numericScore : learner.latestScore;
      }
    }

    learnerMap.set(attempt.user_id, learner);

    const breakdown = parseDomainBreakdown(attempt.domain_breakdown);
    for (const [domain, entry] of Object.entries(breakdown)) {
      const domainAgg = domainMap.get(domain) ?? {
        scoreTotal: 0,
        attempts: 0,
        weakCount: 0,
      };
      domainAgg.scoreTotal += entry.score;
      domainAgg.attempts += 1;
      if (entry.score < 70) domainAgg.weakCount += 1;
      domainMap.set(domain, domainAgg);
    }
  }

  const learnerProgress: LearnerSummary[] = Array.from(learnerMap.entries()).map(
    ([learnerUserId, entry]) => ({
      learnerUserId,
      attempts: entry.attempts,
      latestScore: entry.latestScore != null ? round(entry.latestScore) : null,
      averageScore: entry.scoreCount > 0 ? round(entry.scoreTotal / entry.scoreCount) : null,
      latestCompletedAt: entry.latestCompletedAt,
    }),
  ).sort((left, right) => {
    const rightTime = right.latestCompletedAt ? Date.parse(right.latestCompletedAt) : 0;
    const leftTime = left.latestCompletedAt ? Date.parse(left.latestCompletedAt) : 0;
    return rightTime - leftTime;
  });

  const domainHeatmap: Record<string, DomainAggregate> = {};
  for (const [domain, entry] of domainMap.entries()) {
    domainHeatmap[domain] = {
      averageScore: entry.attempts > 0 ? round(entry.scoreTotal / entry.attempts) : 0,
      attempts: entry.attempts,
      weakCount: entry.weakCount,
    };
  }

  const weakDomains = Object.entries(domainHeatmap)
    .filter(([, entry]) => entry.averageScore < 70)
    .sort((left, right) => left[1].averageScore - right[1].averageScore || right[1].weakCount - left[1].weakCount)
    .slice(0, 5)
    .map(([domain]) => domain);

  const assignmentOutcomes = summarizeAssignmentOutcomes({
    assignments,
    attempts,
    learnerCount: learnerUserIds.length,
    examTimingMinutesById,
  });

  return NextResponse.json({
    classId: teacherAccess.classId,
    className: teacherAccess.className,
    examId: examId ?? null,
    learnerCount: learnerUserIds.length,
    attemptCount: attempts.length,
    aggregateScore: aggregateScoreCount > 0 ? round(aggregateScoreTotal / aggregateScoreCount) : null,
    learnerProgress,
    domainHeatmap,
    weakDomains,
    assignmentOutcomes,
  });
}
