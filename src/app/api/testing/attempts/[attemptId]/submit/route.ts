import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isMissingTestingTableError } from "@/lib/testing/api-utils";
import { hashTestingAnswer } from "@/lib/testing/security";
import { buildDiagnosis, type DomainScoreSnapshot } from "@/lib/testing/scoring";
import type { TestingAttemptResultResponse } from "@/lib/testing/types";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const submitSchema = z.object({
  answers: z
    .array(
      z.object({
        questionId: z.string().uuid(),
        selected: z.string().min(1).max(1000),
      }),
    )
    .max(5000),
});

type AttemptRow = {
  id: string;
  user_id: string;
  exam_id: string;
  attempt_type: "sample" | "full";
  status: "in_progress" | "completed" | "abandoned";
  question_ids: string[];
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

type QuestionRow = {
  id: string;
  domain: string;
  correct_answer_hash: string;
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

export async function POST(
  request: Request,
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

  const body = await request.json().catch(() => ({}));
  const parsed = submitSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();
  const { data: attemptData, error: attemptError } = await admin
    .from("testing_exam_attempts")
    .select("id, user_id, exam_id, attempt_type, status, question_ids, score, domain_breakdown, weakness_diagnosis, completed_at")
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

  if (attempt.status === "completed") {
    return NextResponse.json(toResultPayload(attempt, exam, passThreshold));
  }

  if (attempt.status !== "in_progress") {
    return NextResponse.json(
      { error: `Attempt is not submit-ready (status: ${attempt.status}).` },
      { status: 409 },
    );
  }

  const questionIds = Array.isArray(attempt.question_ids)
    ? attempt.question_ids.filter((value): value is string => typeof value === "string")
    : [];

  if (questionIds.length === 0) {
    return NextResponse.json({ error: "Attempt has no question set." }, { status: 409 });
  }

  const { data: questionRows, error: questionError } = await admin
    .from("testing_question_bank")
    .select("id, domain, correct_answer_hash")
    .in("id", questionIds);

  if (questionError) {
    console.error("Unexpected API error.", toSafeErrorRecord(questionError));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  const questions = (questionRows ?? []) as QuestionRow[];
  if (questions.length === 0) {
    return NextResponse.json({ error: "Questions for this attempt were not found." }, { status: 409 });
  }

  const answerMap = new Map<string, string>();
  for (const answer of parsed.data.answers) {
    answerMap.set(answer.questionId, answer.selected);
  }

  const domainStats = new Map<string, { correct: number; total: number }>();
  const answerRows: Array<{
    attempt_id: string;
    question_id: string;
    selected_answer: string;
    is_correct: boolean;
  }> = [];

  let correctCount = 0;
  for (const question of questions) {
    const stat = domainStats.get(question.domain) ?? { correct: 0, total: 0 };
    stat.total += 1;

    const selected = answerMap.get(question.id);
    if (selected) {
      const selectedHash = hashTestingAnswer(selected);
      const isCorrect = selectedHash === question.correct_answer_hash;
      if (isCorrect) {
        correctCount += 1;
        stat.correct += 1;
      }
      answerRows.push({
        attempt_id: attempt.id,
        question_id: question.id,
        selected_answer: selected,
        is_correct: isCorrect,
      });
    }

    domainStats.set(question.domain, stat);
  }

  if (answerRows.length > 0) {
    const { error: answersWriteError } = await admin
      .from("testing_attempt_answers")
      .upsert(answerRows, { onConflict: "attempt_id,question_id" });
    if (answersWriteError) {
      console.error("Unexpected API error.", toSafeErrorRecord(answersWriteError));
      return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }
  }

  const totalQuestions = Math.max(1, questionIds.length);
  const score = Math.round(((correctCount / totalQuestions) * 100) * 100) / 100;

  const domainBreakdown: Record<string, DomainScoreSnapshot> = {};
  for (const [domain, stat] of domainStats.entries()) {
    const domainScore = stat.total > 0
      ? Math.round(((stat.correct / stat.total) * 100) * 100) / 100
      : 0;
    domainBreakdown[domain] = {
      correct: stat.correct,
      total: stat.total,
      score: domainScore,
    };
  }

  const diagnosis = buildDiagnosis(domainBreakdown);
  const completedAt = new Date().toISOString();

  const { data: updatedAttemptData, error: updateError } = await admin
    .from("testing_exam_attempts")
    .update({
      status: "completed",
      score,
      domain_breakdown: domainBreakdown,
      weakness_diagnosis: diagnosis,
      completed_at: completedAt,
    })
    .eq("id", attempt.id)
    .select("id, user_id, exam_id, attempt_type, status, question_ids, score, domain_breakdown, weakness_diagnosis, completed_at")
    .single();

  if (updateError || !updatedAttemptData) {
    return NextResponse.json({ error: "Failed to finalize attempt." }, { status: 500 });
  }

  const updatedAttempt = updatedAttemptData as AttemptRow;
  return NextResponse.json(toResultPayload(updatedAttempt, exam, passThreshold));
}

