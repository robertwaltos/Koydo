import crypto from "node:crypto";
import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { resolveVerifiedTeacherClassAccess } from "@/lib/compliance/teacher-access";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { isMissingTestingTableError } from "@/lib/testing/api-utils";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const runActionSchema = z.object({
  action: z.enum([
    "hydrate_from_stub",
    "start",
    "pause",
    "resume",
    "next",
    "previous",
    "jump",
    "record_outcome",
    "end",
    "reset",
  ]),
  targetIndex: z.coerce.number().int().min(1).max(12).optional(),
  outcome: z.enum(["correct", "incorrect", "skip"]).optional(),
});

type SessionRow = {
  class_id: string;
  teacher_user_id: string;
  delivery_mode: string;
  session_status: string;
  active_assignment_id: string | null;
  lesson_focus: string | null;
  announcement: string | null;
  session_settings: Record<string, unknown> | null;
  started_at: string | null;
  ended_at: string | null;
};

type QuickReviewPrompt = {
  id: string;
  promptType: "mcq_single" | "short_answer";
  prompt: string;
  answerStrategy: string;
};

type QuickReviewStub = {
  mode: "preview" | "launch";
  topic: string;
  questionCount: number;
  durationMinutes: number;
  difficultyBand: "baseline" | "mixed" | "challenge";
  learningGoal: string | null;
  prompts: QuickReviewPrompt[];
  launchedAt: string | null;
};

type PromptOutcome = {
  promptId: string;
  correctCount: number;
  incorrectCount: number;
  skippedCount: number;
};

type QuickReviewRunState = {
  status: "idle" | "live" | "paused" | "ended";
  runId: string | null;
  currentPromptIndex: number;
  promptCount: number;
  startedAt: string | null;
  endedAt: string | null;
  lastActionAt: string | null;
  promptOutcomes: PromptOutcome[];
};

function toSessionSettings(value: unknown) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return {} as Record<string, unknown>;
  }
  return value as Record<string, unknown>;
}

function parseQuickReviewStub(value: unknown): QuickReviewStub | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return null;
  }

  const record = value as Record<string, unknown>;
  const rawPrompts = Array.isArray(record.prompts) ? record.prompts : [];
  const prompts = rawPrompts
    .filter((entry) => entry && typeof entry === "object" && !Array.isArray(entry))
    .map((entry, index) => {
      const prompt = entry as Record<string, unknown>;
      return {
        id: typeof prompt.id === "string" && prompt.id.length > 0 ? prompt.id : `prompt-${index + 1}`,
        promptType: prompt.promptType === "short_answer" ? "short_answer" : "mcq_single",
        prompt: typeof prompt.prompt === "string" ? prompt.prompt : "Prompt unavailable.",
        answerStrategy:
          typeof prompt.answerStrategy === "string"
            ? prompt.answerStrategy
            : "Use direct recall and one-step reasoning.",
      } satisfies QuickReviewPrompt;
    });

  if (prompts.length === 0) return null;

  return {
    mode: record.mode === "launch" ? "launch" : "preview",
    topic: typeof record.topic === "string" ? record.topic : "Quick Review",
    questionCount: Number(record.questionCount ?? prompts.length) || prompts.length,
    durationMinutes: Number(record.durationMinutes ?? 8) || 8,
    difficultyBand:
      record.difficultyBand === "baseline" || record.difficultyBand === "challenge"
        ? record.difficultyBand
        : "mixed",
    learningGoal: typeof record.learningGoal === "string" ? record.learningGoal : null,
    prompts,
    launchedAt: typeof record.launchedAt === "string" ? record.launchedAt : null,
  };
}

function buildDefaultPromptOutcomes(prompts: QuickReviewPrompt[]) {
  return prompts.map((prompt) => ({
    promptId: prompt.id,
    correctCount: 0,
    incorrectCount: 0,
    skippedCount: 0,
  }));
}

function parseRunState(value: unknown, prompts: QuickReviewPrompt[]): QuickReviewRunState {
  const defaultOutcomes = buildDefaultPromptOutcomes(prompts);
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return {
      status: "idle",
      runId: null,
      currentPromptIndex: 0,
      promptCount: prompts.length,
      startedAt: null,
      endedAt: null,
      lastActionAt: null,
      promptOutcomes: defaultOutcomes,
    };
  }

  const record = value as Record<string, unknown>;
  const rawOutcomes = Array.isArray(record.promptOutcomes) ? record.promptOutcomes : [];
  const outcomeMap = new Map<string, PromptOutcome>();
  for (const entry of rawOutcomes) {
    if (!entry || typeof entry !== "object" || Array.isArray(entry)) continue;
    const row = entry as Record<string, unknown>;
    const promptId = typeof row.promptId === "string" ? row.promptId : "";
    if (!promptId) continue;
    outcomeMap.set(promptId, {
      promptId,
      correctCount: Math.max(0, Number(row.correctCount ?? 0) || 0),
      incorrectCount: Math.max(0, Number(row.incorrectCount ?? 0) || 0),
      skippedCount: Math.max(0, Number(row.skippedCount ?? 0) || 0),
    });
  }

  const promptOutcomes = prompts.map((prompt) => {
    const existing = outcomeMap.get(prompt.id);
    if (existing) return existing;
    return {
      promptId: prompt.id,
      correctCount: 0,
      incorrectCount: 0,
      skippedCount: 0,
    };
  });

  const rawStatus = String(record.status ?? "idle");
  const status: QuickReviewRunState["status"] =
    rawStatus === "live" || rawStatus === "paused" || rawStatus === "ended"
      ? rawStatus
      : "idle";
  const promptCount = prompts.length;
  const indexValue = Number(record.currentPromptIndex ?? 0);
  const currentPromptIndex = Number.isFinite(indexValue)
    ? Math.max(0, Math.min(promptCount - 1, Math.floor(indexValue)))
    : 0;

  return {
    status,
    runId: typeof record.runId === "string" ? record.runId : null,
    currentPromptIndex,
    promptCount,
    startedAt: typeof record.startedAt === "string" ? record.startedAt : null,
    endedAt: typeof record.endedAt === "string" ? record.endedAt : null,
    lastActionAt: typeof record.lastActionAt === "string" ? record.lastActionAt : null,
    promptOutcomes,
  };
}

function mapResponse(params: {
  classId: string;
  className: string | null;
  stub: QuickReviewStub;
  run: QuickReviewRunState;
  message: string;
}) {
  return {
    classId: params.classId,
    className: params.className,
    stub: {
      mode: params.stub.mode,
      topic: params.stub.topic,
      questionCount: params.stub.questionCount,
      durationMinutes: params.stub.durationMinutes,
      difficultyBand: params.stub.difficultyBand,
      learningGoal: params.stub.learningGoal,
      launchedAt: params.stub.launchedAt,
    },
    prompts: params.stub.prompts,
    run: params.run,
    message: params.message,
  };
}

export async function GET(
  request: Request,
  context: { params: Promise<{ classId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:testing:classes:quick-review:run:get", {
    max: 60,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many quick-review run requests. Please retry shortly." },
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

  const admin = createSupabaseAdminClient();
  const { data: sessionRow, error: sessionError } = await admin
    .from("classroom_sessions")
    .select("class_id, teacher_user_id, delivery_mode, session_status, active_assignment_id, lesson_focus, announcement, session_settings, started_at, ended_at")
    .eq("class_id", classId)
    .maybeSingle();

  if (sessionError) {
    if (isMissingTestingTableError(sessionError)) {
      return NextResponse.json(
        { error: "Testing/classroom tables are not ready. Run Supabase migrations first." },
        { status: 503 },
      );
    }
    console.error("Unexpected API error.", toSafeErrorRecord(sessionError));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  if (!sessionRow) {
    return NextResponse.json(
      { error: "Quick-review launch is required before run controls are available." },
      { status: 404 },
    );
  }

  const current = sessionRow as SessionRow;
  const settings = toSessionSettings(current.session_settings);
  const stub = parseQuickReviewStub(settings.quickReviewStub);
  if (!stub) {
    return NextResponse.json(
      { error: "Quick-review launch is required before run controls are available." },
      { status: 404 },
    );
  }

  const run = parseRunState(settings.quickReviewRun, stub.prompts);
  return NextResponse.json(
    mapResponse({
      classId,
      className: teacherAccess.className,
      stub,
      run,
      message: "Quick-review run state loaded.",
    }),
  );
}

export async function PATCH(
  request: Request,
  context: { params: Promise<{ classId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:testing:classes:quick-review:run:patch", {
    max: 40,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many quick-review run updates. Please retry shortly." },
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

  const parsed = runActionSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();
  const { data: sessionRow, error: sessionError } = await admin
    .from("classroom_sessions")
    .select("class_id, teacher_user_id, delivery_mode, session_status, active_assignment_id, lesson_focus, announcement, session_settings, started_at, ended_at")
    .eq("class_id", classId)
    .maybeSingle();

  if (sessionError) {
    if (isMissingTestingTableError(sessionError)) {
      return NextResponse.json(
        { error: "Testing/classroom tables are not ready. Run Supabase migrations first." },
        { status: 503 },
      );
    }
    console.error("Unexpected API error.", toSafeErrorRecord(sessionError));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  if (!sessionRow) {
    return NextResponse.json(
      { error: "Quick-review launch is required before run controls are available." },
      { status: 404 },
    );
  }

  const current = sessionRow as SessionRow;
  const settings = toSessionSettings(current.session_settings);
  const stub = parseQuickReviewStub(settings.quickReviewStub);
  if (!stub) {
    return NextResponse.json(
      { error: "Quick-review launch is required before run controls are available." },
      { status: 404 },
    );
  }

  const nowIso = new Date().toISOString();
  const action = parsed.data.action;
  let run = parseRunState(settings.quickReviewRun, stub.prompts);

  if (action === "hydrate_from_stub") {
    run = {
      status: "idle",
      runId: null,
      currentPromptIndex: 0,
      promptCount: stub.prompts.length,
      startedAt: null,
      endedAt: null,
      lastActionAt: nowIso,
      promptOutcomes: buildDefaultPromptOutcomes(stub.prompts),
    };
  } else if (action === "start") {
    run = {
      ...run,
      status: "live",
      runId: run.runId ?? `qrr_${Date.now().toString(36)}_${crypto.randomBytes(3).toString("hex")}`,
      currentPromptIndex: 0,
      promptCount: stub.prompts.length,
      startedAt: nowIso,
      endedAt: null,
      lastActionAt: nowIso,
    };
  } else if (action === "pause") {
    run = {
      ...run,
      status: run.status === "live" ? "paused" : run.status,
      lastActionAt: nowIso,
    };
  } else if (action === "resume") {
    run = {
      ...run,
      status: run.status === "paused" ? "live" : run.status,
      lastActionAt: nowIso,
    };
  } else if (action === "next") {
    run = {
      ...run,
      currentPromptIndex: Math.min(stub.prompts.length - 1, run.currentPromptIndex + 1),
      lastActionAt: nowIso,
    };
  } else if (action === "previous") {
    run = {
      ...run,
      currentPromptIndex: Math.max(0, run.currentPromptIndex - 1),
      lastActionAt: nowIso,
    };
  } else if (action === "jump") {
    if (!parsed.data.targetIndex) {
      return NextResponse.json(
        { error: "targetIndex is required for jump action." },
        { status: 400 },
      );
    }
    run = {
      ...run,
      currentPromptIndex: Math.max(0, Math.min(stub.prompts.length - 1, parsed.data.targetIndex - 1)),
      lastActionAt: nowIso,
    };
  } else if (action === "record_outcome") {
    if (!parsed.data.outcome) {
      return NextResponse.json(
        { error: "outcome is required for record_outcome action." },
        { status: 400 },
      );
    }
    const activePrompt = stub.prompts[run.currentPromptIndex];
    if (activePrompt) {
      const nextOutcomes = run.promptOutcomes.map((entry) => {
        if (entry.promptId !== activePrompt.id) {
          return entry;
        }
        return {
          ...entry,
          correctCount: parsed.data.outcome === "correct" ? entry.correctCount + 1 : entry.correctCount,
          incorrectCount: parsed.data.outcome === "incorrect" ? entry.incorrectCount + 1 : entry.incorrectCount,
          skippedCount: parsed.data.outcome === "skip" ? entry.skippedCount + 1 : entry.skippedCount,
        };
      });
      run = {
        ...run,
        promptOutcomes: nextOutcomes,
        lastActionAt: nowIso,
      };
    }
  } else if (action === "end") {
    run = {
      ...run,
      status: "ended",
      endedAt: nowIso,
      lastActionAt: nowIso,
    };
  } else if (action === "reset") {
    run = {
      status: "idle",
      runId: null,
      currentPromptIndex: 0,
      promptCount: stub.prompts.length,
      startedAt: null,
      endedAt: null,
      lastActionAt: nowIso,
      promptOutcomes: buildDefaultPromptOutcomes(stub.prompts),
    };
  }

  const nextSettings = {
    ...settings,
    quickReviewRun: run,
    quickReviewRunUpdatedAt: nowIso,
  };

  const { error: saveError } = await admin
    .from("classroom_sessions")
    .update({
      session_settings: nextSettings,
      updated_by: user.id,
    })
    .eq("class_id", classId)
    .eq("teacher_user_id", user.id);

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

  const actionMessageMap: Record<typeof action, string> = {
    hydrate_from_stub: "Quick-review run hydrated from launch stub.",
    start: "Quick-review run started.",
    pause: "Quick-review run paused.",
    resume: "Quick-review run resumed.",
    next: "Moved to next prompt.",
    previous: "Moved to previous prompt.",
    jump: "Jumped to selected prompt.",
    record_outcome: "Prompt outcome captured.",
    end: "Quick-review run ended.",
    reset: "Quick-review run reset.",
  };

  return NextResponse.json(
    mapResponse({
      classId,
      className: teacherAccess.className,
      stub,
      run,
      message: actionMessageMap[action],
    }),
  );
}
