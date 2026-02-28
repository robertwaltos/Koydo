import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { SupportedTestingLanguage, TestingQuestionPayload } from "@/lib/testing/types";
import { isMissingTestingTableError } from "@/lib/testing/api-utils";

const startAttemptSchema = z.object({
  language: z.enum(["en", "pl"]).optional(),
  mode: z.enum(["auto", "sample", "full"]).optional(),
});

function shuffle<T>(items: T[]) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j]!, copy[i]!];
  }
  return copy;
}

function normalizeOptions(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((entry): entry is string => typeof entry === "string")
    .map((entry) => entry.trim())
    .filter((entry) => entry.length > 0);
}

function isMissingColumnError(error: unknown) {
  if (!error || typeof error !== "object") return false;
  const code = "code" in error ? String((error as { code?: unknown }).code ?? "") : "";
  const message = "message" in error ? String((error as { message?: unknown }).message ?? "") : "";
  return code === "42703" || message.toLowerCase().includes("could not find the");
}

export async function POST(
  request: Request,
  context: { params: Promise<{ examId: string }> },
) {
  const { examId } = await context.params;
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const parsed = startAttemptSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const language: SupportedTestingLanguage = parsed.data.language ?? "en";
  const requestedMode = parsed.data.mode ?? "auto";
  const admin = createSupabaseAdminClient();

  const { data: exam, error: examError } = await admin
    .from("testing_exams")
    .select("id, exam_code, question_count, timing_minutes, is_active")
    .eq("id", examId)
    .eq("is_active", true)
    .maybeSingle();

  if (examError || !exam) {
    if (isMissingTestingTableError(examError)) {
      return NextResponse.json(
        { error: "Testing database tables are not ready. Run Supabase migrations first." },
        { status: 503 },
      );
    }
    return NextResponse.json({ error: "Exam not found." }, { status: 404 });
  }

  const { data: entitlementRows } = await admin
    .from("user_exam_entitlements")
    .select("id, entitlement_type")
    .eq("user_id", user.id)
    .eq("exam_id", exam.id)
    .limit(1);

  const entitlement = entitlementRows?.[0] ?? null;
  if (!entitlement) {
    await admin.from("user_exam_entitlements").upsert(
      {
        user_id: user.id,
        exam_id: exam.id,
        entitlement_type: "sample",
      },
      { onConflict: "user_id,exam_id" },
    );
  }

  const hasFullEntitlement = entitlement?.entitlement_type === "full";
  const attemptType =
    requestedMode === "sample"
      ? "sample"
      : hasFullEntitlement
        ? "full"
        : "sample";
  const now = new Date();
  const windowStart = new Date(now.getTime() - 24 * 60 * 60 * 1000).toISOString();
  const maxAttempts = attemptType === "full" ? 3 : 1;

  const { count: attemptsInWindow } = await admin
    .from("testing_exam_attempts")
    .select("id", { count: "exact", head: true })
    .eq("user_id", user.id)
    .eq("exam_id", exam.id)
    .eq("attempt_type", attemptType)
    .gte("started_at", windowStart);

  if ((attemptsInWindow ?? 0) >= maxAttempts) {
    return NextResponse.json(
      { error: `Daily attempt limit reached for ${attemptType} mode.` },
      { status: 429 },
    );
  }

  const withGovernance = await admin
    .from("testing_question_bank")
    .select(
      "id, domain, question_text, question_text_pl, options, options_pl, review_status, commercial_use_allowed",
    )
    .eq("exam_id", exam.id)
    .eq("is_active", true)
    .eq("review_status", "approved")
    .eq("commercial_use_allowed", true)
    .limit(2000);

  const legacyFallback = async () =>
    admin
      .from("testing_question_bank")
      .select("id, domain, question_text, question_text_pl, options, options_pl")
      .eq("exam_id", exam.id)
      .eq("is_active", true)
      .limit(2000);

  const { data: bankRows, error: bankError } = withGovernance.error && isMissingColumnError(withGovernance.error)
    ? await legacyFallback()
    : withGovernance;

  if (bankError) {
    return NextResponse.json({ error: bankError.message }, { status: 500 });
  }

  const targetCount = attemptType === "sample" ? 10 : Math.max(10, exam.question_count || 60);
  const available = shuffle(bankRows ?? []);
  const selected = available.slice(0, Math.min(targetCount, available.length));

  if (selected.length === 0) {
    return NextResponse.json(
      { error: "No questions available for this exam yet." },
      { status: 409 },
    );
  }

  const questionIds = selected.map((entry) => entry.id);
  const timingMinutes =
    attemptType === "sample"
      ? Math.min(20, Math.max(8, Math.ceil((selected.length * 1.6))))
      : exam.timing_minutes;

  const { data: attempt, error: attemptError } = await admin
    .from("testing_exam_attempts")
    .insert({
      user_id: user.id,
      exam_id: exam.id,
      attempt_type: attemptType,
      status: "in_progress",
      question_ids: questionIds,
      started_at: now.toISOString(),
    })
    .select("id")
    .single();

  if (attemptError || !attempt) {
    return NextResponse.json({ error: "Failed to start attempt." }, { status: 500 });
  }

  const questions: TestingQuestionPayload[] = selected.map((entry) => {
    const localizedText = language === "pl" && entry.question_text_pl
      ? entry.question_text_pl
      : entry.question_text;
    const localizedOptions = language === "pl" && entry.options_pl
      ? normalizeOptions(entry.options_pl)
      : normalizeOptions(entry.options);
    return {
      id: entry.id,
      domain: entry.domain,
      text: localizedText,
      options: localizedOptions,
    };
  });

  return NextResponse.json({
    attemptId: attempt.id,
    attemptType,
    timingMinutes,
    questions,
  });
}
