import { NextResponse } from "next/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isMissingTestingTableError } from "@/lib/testing/api-utils";
import type { TestingAttemptResultResponse } from "@/lib/testing/types";

type AttemptRow = {
  id: string;
  user_id: string;
  exam_id: string;
  attempt_type: "sample" | "full";
  status: "in_progress" | "completed" | "abandoned";
  score: number | null;
  domain_breakdown: unknown;
  weakness_diagnosis: unknown;
  completed_at: string | null;
};

type ExamRow = {
  id: string;
  exam_code: string;
  passing_score: number | null;
};

function normalizeObjectRecord(
  input: unknown,
): Record<string, { correct: number; total: number; score: number }> {
  if (!input || typeof input !== "object" || Array.isArray(input)) return {};
  const entries = Object.entries(input as Record<string, unknown>);
  const normalized: Record<string, { correct: number; total: number; score: number }> = {};
  for (const [domain, value] of entries) {
    if (!value || typeof value !== "object" || Array.isArray(value)) continue;
    const v = value as Record<string, unknown>;
    normalized[domain] = {
      correct: Number(v.correct ?? 0),
      total: Number(v.total ?? 0),
      score: Number(v.score ?? 0),
    };
  }
  return normalized;
}

function normalizeDiagnosis(
  input: unknown,
): { weakDomains: string[]; remediationModules: string[] } {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return { weakDomains: [], remediationModules: [] };
  }
  const value = input as Record<string, unknown>;
  return {
    weakDomains: Array.isArray(value.weakDomains)
      ? value.weakDomains.filter((entry): entry is string => typeof entry === "string")
      : [],
    remediationModules: Array.isArray(value.remediationModules)
      ? value.remediationModules.filter((entry): entry is string => typeof entry === "string")
      : [],
  };
}

function toResultPayload(
  attempt: AttemptRow,
  exam: ExamRow,
  passThreshold: number,
): TestingAttemptResultResponse {
  const score = Number(attempt.score ?? 0);
  return {
    attemptId: attempt.id,
    examId: attempt.exam_id,
    examCode: exam.exam_code,
    score,
    pass: score >= passThreshold,
    attemptType: attempt.attempt_type,
    domainBreakdown: normalizeObjectRecord(attempt.domain_breakdown),
    diagnosis: normalizeDiagnosis(attempt.weakness_diagnosis),
    completedAt: attempt.completed_at,
  };
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ attemptId: string }> },
) {
  const { attemptId } = await context.params;
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const admin = createSupabaseAdminClient();
  const { data: attemptData, error: attemptError } = await admin
    .from("testing_exam_attempts")
    .select("id, user_id, exam_id, attempt_type, status, score, domain_breakdown, weakness_diagnosis, completed_at")
    .eq("id", attemptId)
    .maybeSingle();

  if (attemptError || !attemptData) {
    if (isMissingTestingTableError(attemptError)) {
      return NextResponse.json(
        { error: "Testing database tables are not ready. Run Supabase migrations first." },
        { status: 503 },
      );
    }
    return NextResponse.json({ error: "Attempt not found." }, { status: 404 });
  }

  const attempt = attemptData as AttemptRow;
  if (attempt.user_id !== user.id) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  if (attempt.status !== "completed") {
    return NextResponse.json(
      {
        error: "Attempt is not completed yet.",
        status: attempt.status,
      },
      { status: 409 },
    );
  }

  const { data: examData, error: examError } = await admin
    .from("testing_exams")
    .select("id, exam_code, passing_score")
    .eq("id", attempt.exam_id)
    .maybeSingle();

  if (examError || !examData) {
    return NextResponse.json({ error: "Exam not found for attempt." }, { status: 404 });
  }

  const exam = examData as ExamRow;
  const passThreshold = Number(exam.passing_score ?? 70);
  return NextResponse.json(toResultPayload(attempt, exam, passThreshold));
}

