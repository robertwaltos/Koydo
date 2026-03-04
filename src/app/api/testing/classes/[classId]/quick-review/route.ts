import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { resolveVerifiedTeacherClassAccess } from "@/lib/compliance/teacher-access";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { isMissingTestingTableError } from "@/lib/testing/api-utils";

const requestSchema = z.object({
  mode: z.enum(["preview", "launch"]).optional().default("preview"),
  topic: z.string().trim().min(2).max(120),
  questionCount: z.coerce.number().int().min(3).max(12).optional().default(5),
  durationMinutes: z.coerce.number().int().min(3).max(20).optional().default(8),
  difficultyBand: z.enum(["baseline", "mixed", "challenge"]).optional().default("mixed"),
  learningGoal: z.string().trim().max(180).nullable().optional(),
});

type QuickReviewPrompt = {
  id: string;
  promptType: "mcq_single" | "short_answer";
  prompt: string;
  answerStrategy: string;
};

type SessionRow = {
  session_settings: Record<string, unknown> | null;
  session_status: string;
  delivery_mode: string;
  started_at: string | null;
  ended_at: string | null;
};

function buildQuickReviewPrompts(params: {
  topic: string;
  questionCount: number;
  difficultyBand: "baseline" | "mixed" | "challenge";
}) {
  const { topic, questionCount, difficultyBand } = params;

  const strategyByBand: Record<typeof difficultyBand, string> = {
    baseline: "Use direct recall and one-step reasoning.",
    mixed: "Blend recall with one applied reasoning step.",
    challenge: "Require multi-step explanation with evidence.",
  };

  const prompts: QuickReviewPrompt[] = [];
  for (let index = 0; index < questionCount; index += 1) {
    const ordinal = index + 1;
    const promptType = index % 3 === 2 ? "short_answer" : "mcq_single";
    prompts.push({
      id: `qr-${ordinal}`,
      promptType,
      prompt:
        promptType === "short_answer"
          ? `Explain ${topic} using one concrete classroom example (${ordinal}/${questionCount}).`
          : `Which option best demonstrates ${topic} in a class scenario (${ordinal}/${questionCount})?`,
      answerStrategy: strategyByBand[difficultyBand],
    });
  }

  return prompts;
}

function buildNextActions(mode: "preview" | "launch") {
  if (mode === "launch") {
    return [
      "Share join code and run the front-of-class countdown.",
      "Project first question and collect fast responses.",
      "Capture weak-topic notes for remediation loop follow-up.",
    ];
  }
  return [
    "Review prompts with co-teacher before launch.",
    "Adjust question count and difficulty band.",
    "When ready, send mode=launch to record a launch stub.",
  ];
}

export async function POST(
  request: Request,
  context: { params: Promise<{ classId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:testing:classes:quick-review:post", {
    max: 30,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many quick-review requests. Please retry shortly." },
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
    purpose: "testing_class_quick_review",
  });
  if (!teacherAccess.ok) {
    if (teacherAccess.status === 403 || teacherAccess.status === 404 || teacherAccess.status === 503) {
      return NextResponse.json({ error: teacherAccess.error }, { status: teacherAccess.status });
    }
    return NextResponse.json({ error: "Internal server error." }, { status: teacherAccess.status });
  }

  const parsed = requestSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const prompts = buildQuickReviewPrompts({
    topic: parsed.data.topic,
    questionCount: parsed.data.questionCount,
    difficultyBand: parsed.data.difficultyBand,
  });

  if (parsed.data.mode === "launch") {
    const admin = createSupabaseAdminClient();
    const nowIso = new Date().toISOString();
    const { data: existingSession, error: existingSessionError } = await admin
      .from("classroom_sessions")
      .select("session_settings, session_status, delivery_mode, started_at, ended_at")
      .eq("class_id", classId)
      .maybeSingle();

    if (existingSessionError) {
      if (isMissingTestingTableError(existingSessionError)) {
        return NextResponse.json(
          { error: "Testing/classroom tables are not ready. Run Supabase migrations first." },
          { status: 503 },
        );
      }
      console.error("Unexpected API error.", toSafeErrorRecord(existingSessionError));
      return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }

    const priorSession = (existingSession ?? null) as SessionRow | null;
    const priorSettings =
      priorSession?.session_settings && typeof priorSession.session_settings === "object"
        ? priorSession.session_settings
        : {};

    const quickReviewState = {
      mode: parsed.data.mode,
      topic: parsed.data.topic,
      questionCount: parsed.data.questionCount,
      durationMinutes: parsed.data.durationMinutes,
      difficultyBand: parsed.data.difficultyBand,
      learningGoal: parsed.data.learningGoal ?? null,
      prompts,
      launchedAt: nowIso,
    };

    const upsertPayload = {
      class_id: classId,
      teacher_user_id: user.id,
      delivery_mode: "front_of_class",
      session_status:
        priorSession?.session_status && priorSession.session_status !== "ended"
          ? priorSession.session_status
          : "scheduled",
      started_at: priorSession?.started_at ?? null,
      ended_at: priorSession?.ended_at ?? null,
      session_settings: {
        ...priorSettings,
        quickReviewStub: quickReviewState,
      },
      updated_by: user.id,
    };

    const { error: saveError } = await admin
      .from("classroom_sessions")
      .upsert(upsertPayload, { onConflict: "class_id" });

    if (saveError) {
      if (isMissingTestingTableError(saveError)) {
        return NextResponse.json(
          { error: "Testing/classroom tables are not ready. Run Supabase migrations first." },
          { status: 503 },
        );
      }
      console.error("Unexpected API error.", toSafeErrorRecord(saveError));
      return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }
  }

  return NextResponse.json({
    stub: true,
    mode: parsed.data.mode,
    classId,
    className: teacherAccess.className,
    topic: parsed.data.topic,
    questionCount: parsed.data.questionCount,
    durationMinutes: parsed.data.durationMinutes,
    difficultyBand: parsed.data.difficultyBand,
    learningGoal: parsed.data.learningGoal ?? null,
    prompts,
    launchState: parsed.data.mode === "launch" ? "queued_stub" : "preview_only",
    nextActions: buildNextActions(parsed.data.mode),
    message:
      "Quick review is in S1 stub mode. Prompt generation is scaffolded; learner runtime delivery ships in S2.",
  });
}

