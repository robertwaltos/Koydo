import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isMissingTestingTableError } from "@/lib/testing/api-utils";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { resolveVerifiedTeacherClassAccess } from "@/lib/compliance/teacher-access";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import {
  buildDomainAssignmentSuggestions,
  buildSkillAssignmentSuggestions,
  estimateAssignmentMinutes,
  type AssignmentBuilderExam,
  type AssignmentBuilderSuggestion,
} from "@/lib/testing/assignment-builder";

const assignmentRequestSchema = z.object({
  mode: z.enum(["manual", "domain", "skill", "weak_domains"]).optional(),
  examId: z.string().uuid().nullable().optional(),
  moduleId: z.string().trim().min(2).max(200).nullable().optional(),
  dueAt: z.string().datetime().nullable().optional(),
  domain: z.string().trim().min(2).max(140).nullable().optional(),
  skillQuery: z.string().trim().min(2).max(160).nullable().optional(),
  maxAssignments: z.coerce.number().int().min(1).max(6).optional(),
  weakDomainCount: z.coerce.number().int().min(1).max(4).optional(),
  previewOnly: z.boolean().optional(),
});

type AssignmentRow = {
  id: string;
  class_id: string;
  exam_id: string | null;
  module_id: string | null;
  assigned_by: string;
  assigned_at: string;
  due_at: string | null;
  created_at: string;
  updated_at: string;
};

type ExamRow = {
  id: string;
  name: string;
  timing_minutes: number | null;
  blueprint: unknown;
};

type AttemptDomainRow = {
  domain_breakdown: unknown;
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

function toWeakDomains(attempts: AttemptDomainRow[], weakDomainCount: number) {
  const domainStats = new Map<string, { scoreTotal: number; attempts: number }>();
  for (const attempt of attempts) {
    const breakdown = parseDomainBreakdown(attempt.domain_breakdown);
    for (const [domain, entry] of Object.entries(breakdown)) {
      const current = domainStats.get(domain) ?? { scoreTotal: 0, attempts: 0 };
      current.scoreTotal += entry.score;
      current.attempts += 1;
      domainStats.set(domain, current);
    }
  }

  return [...domainStats.entries()]
    .map(([domain, entry]) => ({
      domain,
      averageScore: entry.attempts > 0 ? entry.scoreTotal / entry.attempts : 0,
      attempts: entry.attempts,
    }))
    .filter((entry) => entry.attempts > 0 && entry.averageScore < 70)
    .sort((left, right) => left.averageScore - right.averageScore || right.attempts - left.attempts)
    .slice(0, weakDomainCount)
    .map((entry) => entry.domain);
}

function toSuggestionKey(suggestion: { examId: string | null; moduleId: string | null }) {
  return `${suggestion.examId ?? ""}::${suggestion.moduleId ?? ""}`;
}

function mapAssignmentPayload(params: {
  assignment: AssignmentRow;
  examTimingMinutesById: Map<string, number>;
  suggestionByKey?: Map<string, AssignmentBuilderSuggestion>;
}) {
  const key = toSuggestionKey({
    examId: params.assignment.exam_id,
    moduleId: params.assignment.module_id,
  });
  const suggestion = params.suggestionByKey?.get(key);

  return {
    id: params.assignment.id,
    classId: params.assignment.class_id,
    examId: params.assignment.exam_id,
    moduleId: params.assignment.module_id,
    assignedBy: params.assignment.assigned_by,
    assignedAt: params.assignment.assigned_at,
    dueAt: params.assignment.due_at,
    createdAt: params.assignment.created_at,
    updatedAt: params.assignment.updated_at,
    estimatedMinutes: estimateAssignmentMinutes({
      examId: params.assignment.exam_id,
      moduleId: params.assignment.module_id,
      examTimingMinutesById: params.examTimingMinutesById,
    }),
    previewReason: suggestion?.reason ?? null,
  };
}

async function loadActiveExams(admin: ReturnType<typeof createSupabaseAdminClient>) {
  const { data, error } = await admin
    .from("testing_exams")
    .select("id, name, timing_minutes, blueprint")
    .eq("is_active", true)
    .eq("language", "en");

  if (error) {
    if (isMissingTestingTableError(error)) {
      return {
        exams: [] as AssignmentBuilderExam[],
        examTimingMinutesById: new Map<string, number>(),
        missingTables: true,
      };
    }
    throw error;
  }

  const exams = (data ?? []) as ExamRow[];
  const examTimingMinutesById = new Map<string, number>();
  const normalizedExams: AssignmentBuilderExam[] = exams.map((exam) => {
    const timing = Number(exam.timing_minutes ?? 0);
    if (Number.isFinite(timing) && timing > 0) {
      examTimingMinutesById.set(exam.id, timing);
    }
    return {
      id: exam.id,
      name: exam.name,
      timingMinutes: Number.isFinite(timing) && timing > 0 ? timing : null,
      blueprint: exam.blueprint,
    };
  });

  return {
    exams: normalizedExams,
    examTimingMinutesById,
    missingTables: false,
  };
}

export async function GET(
  request: Request,
  context: { params: Promise<{ classId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:testing:classes:assignments:get", {
    max: 60,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many class assignment requests. Please retry shortly." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
    );
  }

  const { classId } = await context.params;
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
    purpose: "testing_class_assignments",
  });
  if (!teacherAccess.ok) {
    if (teacherAccess.status === 403 || teacherAccess.status === 404 || teacherAccess.status === 503) {
      return NextResponse.json({ error: teacherAccess.error }, { status: teacherAccess.status });
    }
    return NextResponse.json({ error: "Internal server error." }, { status: teacherAccess.status });
  }

  const admin = createSupabaseAdminClient();
  const [assignmentResult, examResult] = await Promise.all([
    admin
      .from("class_assignments")
      .select("id, class_id, exam_id, module_id, assigned_by, assigned_at, due_at, created_at, updated_at")
      .eq("class_id", classId)
      .order("assigned_at", { ascending: false }),
    loadActiveExams(admin),
  ]);

  const { data, error } = assignmentResult;

  if (error) {
    if (isMissingTestingTableError(error)) {
      return NextResponse.json(
        { error: "Testing/classroom tables are not ready. Run Supabase migrations first." },
        { status: 503 },
      );
    }
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  if (examResult.missingTables) {
    return NextResponse.json(
      { error: "Testing/classroom tables are not ready. Run Supabase migrations first." },
      { status: 503 },
    );
  }

  return NextResponse.json({
    assignments: (data ?? []).map((entry) =>
      mapAssignmentPayload({
        assignment: entry as AssignmentRow,
        examTimingMinutesById: examResult.examTimingMinutesById,
      })),
  });
}

export async function POST(
  request: Request,
  context: { params: Promise<{ classId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:testing:classes:assignments:post", {
    max: 35,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many class assignment updates. Please retry shortly." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
    );
  }

  const { classId } = await context.params;
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
    purpose: "testing_class_assignments",
  });
  if (!teacherAccess.ok) {
    if (teacherAccess.status === 403 || teacherAccess.status === 404 || teacherAccess.status === 503) {
      return NextResponse.json({ error: teacherAccess.error }, { status: teacherAccess.status });
    }
    return NextResponse.json({ error: "Internal server error." }, { status: teacherAccess.status });
  }

  const body = await request.json().catch(() => ({}));
  const parsed = assignmentRequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const mode =
    parsed.data.mode
    ?? (parsed.data.skillQuery ? "skill" : parsed.data.domain ? "domain" : "manual");
  const dueAt = parsed.data.dueAt ?? null;
  const maxAssignments = parsed.data.maxAssignments ?? 3;
  const previewOnly = parsed.data.previewOnly ?? false;

  const admin = createSupabaseAdminClient();
  let generatedSuggestions: AssignmentBuilderSuggestion[] = [];
  let weakDomains: string[] = [];

  let examContext: Awaited<ReturnType<typeof loadActiveExams>>;
  try {
    examContext = await loadActiveExams(admin);
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  if (examContext.missingTables) {
    return NextResponse.json(
      { error: "Testing/classroom tables are not ready. Run Supabase migrations first." },
      { status: 503 },
    );
  }

  if (mode === "manual") {
    if (!parsed.data.examId && !parsed.data.moduleId) {
      return NextResponse.json(
        { error: "Either examId or moduleId is required for manual assignment mode." },
        { status: 400 },
      );
    }
    generatedSuggestions = [{
      targetType: parsed.data.examId ? "exam" : "module",
      examId: parsed.data.examId ?? null,
      moduleId: parsed.data.moduleId ?? null,
      label: parsed.data.examId ? `Exam ${parsed.data.examId}` : `Module ${parsed.data.moduleId}`,
      reason: "Manual assignment.",
      estimatedMinutes: estimateAssignmentMinutes({
        examId: parsed.data.examId ?? null,
        moduleId: parsed.data.moduleId ?? null,
        examTimingMinutesById: examContext.examTimingMinutesById,
      }),
      confidence: 1,
    }];
  } else if (mode === "domain") {
    if (!parsed.data.domain) {
      return NextResponse.json(
        { error: "Domain is required for domain assignment generation mode." },
        { status: 400 },
      );
    }
    generatedSuggestions = buildDomainAssignmentSuggestions({
      domain: parsed.data.domain,
      exams: examContext.exams,
      maxSuggestions: maxAssignments,
    });
  } else if (mode === "skill") {
    if (!parsed.data.skillQuery) {
      return NextResponse.json(
        { error: "skillQuery is required for skill assignment generation mode." },
        { status: 400 },
      );
    }
    generatedSuggestions = buildSkillAssignmentSuggestions({
      skillQuery: parsed.data.skillQuery,
      maxSuggestions: maxAssignments,
    });
  } else {
    const weakDomainCount = parsed.data.weakDomainCount ?? 2;
    const { data: enrollmentData, error: enrollmentError } = await admin
      .from("class_enrollments")
      .select("learner_user_id, parent_consent")
      .eq("class_id", classId);

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

    const learnerUserIds = (enrollmentData ?? [])
      .filter((entry) => Boolean(entry.parent_consent))
      .map((entry) => entry.learner_user_id)
      .filter((value): value is string => typeof value === "string" && value.length > 0);

    if (learnerUserIds.length > 0) {
      const { data: attemptsData, error: attemptsError } = await admin
        .from("testing_exam_attempts")
        .select("domain_breakdown")
        .in("user_id", learnerUserIds)
        .eq("status", "completed");

      if (attemptsError) {
        console.error("Unexpected API error.", toSafeErrorRecord(attemptsError));
        return NextResponse.json({ error: "Internal server error." }, { status: 500 });
      }

      weakDomains = toWeakDomains((attemptsData ?? []) as AttemptDomainRow[], weakDomainCount);
    }

    const candidates: AssignmentBuilderSuggestion[] = [];
    for (const weakDomain of weakDomains) {
      const perDomain = buildDomainAssignmentSuggestions({
        domain: weakDomain,
        exams: examContext.exams,
        maxSuggestions: maxAssignments,
      });
      for (const suggestion of perDomain) {
        candidates.push(suggestion);
      }
    }

    const deduped = new Map<string, AssignmentBuilderSuggestion>();
    for (const suggestion of candidates) {
      const key = toSuggestionKey(suggestion);
      const current = deduped.get(key);
      if (!current || suggestion.confidence > current.confidence) {
        deduped.set(key, suggestion);
      }
    }

    generatedSuggestions = [...deduped.values()]
      .sort((left, right) => right.confidence - left.confidence)
      .slice(0, maxAssignments);
  }

  if (generatedSuggestions.length === 0) {
    return NextResponse.json({
      mode,
      weakDomains,
      suggestions: [],
      assignments: [],
      message: "No assignment candidates were found for this builder input.",
    });
  }

  const suggestions = generatedSuggestions.map((entry) => ({
    targetType: entry.targetType,
    examId: entry.examId,
    moduleId: entry.moduleId,
    label: entry.label,
    reason: entry.reason,
    estimatedMinutes: entry.estimatedMinutes,
  }));

  if (previewOnly) {
    return NextResponse.json({
      mode,
      weakDomains,
      suggestions,
      assignments: [],
      previewOnly: true,
    });
  }

  const insertRows = generatedSuggestions.map((entry) => ({
    class_id: classId,
    exam_id: entry.examId,
    module_id: entry.moduleId,
    assigned_by: user.id,
    due_at: dueAt,
  }));

  const { data, error } = await admin
    .from("class_assignments")
    .insert(insertRows)
    .select("id, class_id, exam_id, module_id, assigned_by, assigned_at, due_at, created_at, updated_at");

  if (error) {
    if (isMissingTestingTableError(error)) {
      return NextResponse.json(
        { error: "Testing/classroom tables are not ready. Run Supabase migrations first." },
        { status: 503 },
      );
    }
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  const suggestionByKey = new Map(
    generatedSuggestions.map((entry) => [toSuggestionKey(entry), entry]),
  );

  const assignments = ((data ?? []) as AssignmentRow[]).map((entry) =>
    mapAssignmentPayload({
      assignment: entry,
      examTimingMinutesById: examContext.examTimingMinutesById,
      suggestionByKey,
    }));
  const assignment = assignments[0] ?? null;

  return NextResponse.json({
    mode,
    weakDomains,
    previewOnly: false,
    suggestions,
    assignments,
    assignment,
  });
}
