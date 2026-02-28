import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { serverEnv } from "@/lib/config/env";
import { getLessonById } from "@/lib/modules";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const MAX_HISTORY_FETCH = 80;
const DEFAULT_HISTORY_FETCH = 24;
const RECENT_MEMORY_LIMIT = 8;

const tutorRequestSchema = z.object({
  question: z.string().min(3).max(600),
  lessonId: z.string().min(1).optional(),
});

type FollowupPack = {
  summary?: string;
  focusSkills?: string[];
  studyPlan?: Array<{
    dayLabel?: string;
    goal?: string;
    tasks?: string[];
  }>;
};

type TutorConversationRole = "user" | "assistant";
type TutorConversationSource = "user" | "openai" | "rule_based" | "system";

type TutorConversationRow = {
  id: string;
  role: TutorConversationRole;
  source: TutorConversationSource;
  message: string;
  lesson_id: string | null;
  module_id: string | null;
  created_at: string;
};

type TutorUsage = {
  dailyLimit: number;
  usedToday: number;
  remainingToday: number;
  usageTracked: boolean;
  limitReached: boolean;
};

function isMissingTableError(params: { message: string | undefined; table: string }) {
  const { message, table } = params;
  if (!message) return false;
  const normalized = message.toLowerCase();
  return (
    normalized.includes(table.toLowerCase()) &&
    (normalized.includes("does not exist") ||
      normalized.includes("could not find the table") ||
      normalized.includes("relation"))
  );
}

function isMissingFollowupTableError(message: string | undefined) {
  return isMissingTableError({
    message,
    table: "ai_followup_materials",
  });
}

function isMissingTutorTableError(message: string | undefined) {
  return isMissingTableError({
    message,
    table: "ai_tutor_conversations",
  });
}

function toSkillLabel(skill: string) {
  return skill
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeMessage(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function buildRecentTranscript(rows: TutorConversationRow[]) {
  return rows
    .slice()
    .reverse()
    .slice(-RECENT_MEMORY_LIMIT)
    .map((entry) => `${entry.role === "user" ? "Student" : "Tutor"}: ${normalizeMessage(entry.message)}`)
    .join("\n");
}

function buildRuleBasedAnswer(input: {
  question: string;
  lessonTitle?: string;
  moduleTitle?: string;
  summary?: string;
  focusSkills: string[];
  recentTranscript?: string;
}) {
  const focusLine =
    input.focusSkills.length > 0
      ? `Focus skills: ${input.focusSkills.slice(0, 4).map(toSkillLabel).join(", ")}.`
      : "Focus on one concept at a time and verify each step before moving on.";

  const lessonLine =
    input.lessonTitle && input.moduleTitle
      ? `We are working inside "${input.lessonTitle}" (${input.moduleTitle}).`
      : input.lessonTitle
        ? `We are working inside "${input.lessonTitle}".`
        : "We are continuing your latest lesson plan.";

  const summaryLine = input.summary
    ? `Coach summary: ${input.summary}`
    : "Coach summary: use retrieval practice, short timed checks, and one written correction per mistake.";

  const memoryLine = input.recentTranscript
    ? "I also looked at your recent tutor chat so this answer continues that context."
    : "This answer is based on your latest lesson context.";

  return [
    `${lessonLine} ${focusLine}`,
    summaryLine,
    memoryLine,
    "Next steps:",
    "1) Answer one prompt from memory without looking at notes.",
    "2) Check your answer and write one correction rule.",
    "3) Teach the concept aloud in 60 seconds.",
    `Your question: "${input.question}"`,
    "Direct guidance: break the question into smaller parts, solve one part at a time, then recombine.",
  ].join("\n");
}

function toResponseMessage(row: TutorConversationRow) {
  return {
    id: row.id,
    role: row.role,
    source: row.source,
    message: row.message,
    lessonId: row.lesson_id,
    moduleId: row.module_id,
    createdAt: row.created_at,
  };
}

function clampHistoryLimit(value: string | null) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return DEFAULT_HISTORY_FETCH;
  return Math.min(MAX_HISTORY_FETCH, Math.max(1, Math.round(parsed)));
}

function getTutorDailyLimit() {
  return Math.max(0, Number(serverEnv.AI_TUTOR_DAILY_LIMIT ?? 0));
}

function buildUntrackedTutorUsage(dailyLimit: number): TutorUsage {
  return {
    dailyLimit,
    usedToday: 0,
    remainingToday: dailyLimit > 0 ? dailyLimit : 0,
    usageTracked: false,
    limitReached: false,
  };
}

function getStartOfUtcDayIso() {
  const now = new Date();
  const start = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0, 0),
  );
  return start.toISOString();
}

async function getTutorUsage(params: {
  supabase: Awaited<ReturnType<typeof createSupabaseServerClient>>;
  userId: string;
}): Promise<TutorUsage> {
  const dailyLimit = getTutorDailyLimit();
  if (dailyLimit <= 0) {
    return buildUntrackedTutorUsage(dailyLimit);
  }

  const { count, error } = await params.supabase
    .from("ai_tutor_conversations")
    .select("id", { count: "exact", head: true })
    .eq("user_id", params.userId)
    .eq("role", "user")
    .gte("created_at", getStartOfUtcDayIso());

  if (error) {
    if (isMissingTutorTableError(error.message)) {
      return buildUntrackedTutorUsage(dailyLimit);
    }
    throw new Error(error.message);
  }

  const usedToday = Math.max(0, Number(count ?? 0));
  const remainingToday = Math.max(0, dailyLimit - usedToday);

  return {
    dailyLimit,
    usedToday,
    remainingToday,
    usageTracked: true,
    limitReached: usedToday >= dailyLimit,
  };
}

export async function GET(request: Request) {
  try {
    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const usage = await getTutorUsage({ supabase, userId: user.id });

    const url = new URL(request.url);
    const lessonId = url.searchParams.get("lessonId")?.trim() ?? "";
    const limit = clampHistoryLimit(url.searchParams.get("limit"));

    let query = supabase
      .from("ai_tutor_conversations")
      .select("id, role, source, message, lesson_id, module_id, created_at")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(limit);

    if (lessonId) {
      query = query.eq("lesson_id", lessonId);
    }

    const { data, error } = await query;

    if (error) {
      if (isMissingTutorTableError(error.message)) {
        return NextResponse.json({
          messages: [],
          memoryAvailable: false,
          message: "Tutor conversation memory is not available yet. Apply latest Supabase schema.",
          usage,
        });
      }
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const ordered = (data ?? []).slice().reverse() as TutorConversationRow[];
    return NextResponse.json({
      messages: ordered.map(toResponseMessage),
      memoryAvailable: true,
      usage,
    });
  } catch (error) {
    console.error("Unexpected AI tutor history error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const usageBefore = await getTutorUsage({ supabase, userId: user.id });

    const url = new URL(request.url);
    const lessonId = url.searchParams.get("lessonId")?.trim() ?? "";

    let query = supabase
      .from("ai_tutor_conversations")
      .delete({ count: "exact" })
      .eq("user_id", user.id);

    if (lessonId) {
      query = query.eq("lesson_id", lessonId);
    }

    const { error, count } = await query;

    if (error) {
      if (isMissingTutorTableError(error.message)) {
        return NextResponse.json({
          deleted: 0,
          memoryAvailable: false,
          message: "Tutor conversation memory is not available yet. Apply latest Supabase schema.",
          usage: usageBefore,
        });
      }
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const usageAfter = await getTutorUsage({ supabase, userId: user.id });

    return NextResponse.json({
      deleted: Number(count ?? 0),
      memoryAvailable: true,
      usage: usageAfter,
    });
  } catch (error) {
    console.error("Unexpected AI tutor delete error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json().catch(() => ({}));
    const validation = tutorRequestSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid request body", details: validation.error.issues },
        { status: 400 },
      );
    }

    const question = normalizeMessage(validation.data.question);
    const requestedLessonId = validation.data.lessonId?.trim() ?? "";
    const usage = await getTutorUsage({ supabase, userId: user.id });

    if (usage.usageTracked && usage.limitReached) {
      return NextResponse.json(
        {
          error: "Daily AI tutor limit reached. Please continue tomorrow.",
          usage,
        },
        { status: 429 },
      );
    }

    let followupRow:
      | {
          lesson_id: string;
          module_id: string | null;
          pack: FollowupPack | null;
          updated_at: string;
        }
      | null = null;

    const followupQuery = supabase
      .from("ai_followup_materials")
      .select("lesson_id, module_id, pack, updated_at")
      .eq("user_id", user.id)
      .eq("status", "completed")
      .order("updated_at", { ascending: false })
      .limit(1);

    const { data: followupData, error: followupError } = requestedLessonId
      ? await followupQuery.eq("lesson_id", requestedLessonId)
      : await followupQuery;

    if (followupError && !isMissingFollowupTableError(followupError.message)) {
      return NextResponse.json({ error: followupError.message }, { status: 500 });
    }

    followupRow = followupData?.[0] ?? null;

    const activeLessonId = requestedLessonId || followupRow?.lesson_id || "";
    const lessonLookup = activeLessonId ? getLessonById(activeLessonId) : null;

    let memoryAvailable = true;
    let recentConversationRows: TutorConversationRow[] = [];

    let recentConversationQuery = supabase
      .from("ai_tutor_conversations")
      .select("id, role, source, message, lesson_id, module_id, created_at")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(RECENT_MEMORY_LIMIT);

    if (activeLessonId) {
      recentConversationQuery = recentConversationQuery.eq("lesson_id", activeLessonId);
    }

    const { data: recentConversationData, error: recentConversationError } = await recentConversationQuery;

    if (recentConversationError) {
      if (isMissingTutorTableError(recentConversationError.message)) {
        memoryAvailable = false;
      } else {
        return NextResponse.json({ error: recentConversationError.message }, { status: 500 });
      }
    } else {
      recentConversationRows = (recentConversationData ?? []) as TutorConversationRow[];
    }

    const focusSkillsRaw = Array.isArray(followupRow?.pack?.focusSkills)
      ? followupRow.pack.focusSkills
      : [];
    const focusSkills = focusSkillsRaw
      .filter((entry): entry is string => typeof entry === "string" && entry.trim().length > 0)
      .slice(0, 6);
    const summary =
      typeof followupRow?.pack?.summary === "string" && followupRow.pack.summary.trim().length > 0
        ? followupRow.pack.summary.trim()
        : undefined;
    const recentTranscript = recentConversationRows.length > 0
      ? buildRecentTranscript(recentConversationRows)
      : "";

    const baselineAnswer = buildRuleBasedAnswer({
      question,
      lessonTitle: lessonLookup?.lesson.title,
      moduleTitle: lessonLookup?.learningModule.title,
      summary,
      focusSkills,
      recentTranscript: recentTranscript || undefined,
    });

    let answer = baselineAnswer;
    let source: "openai" | "rule_based" = "rule_based";
    let warning: string | null = null;

    if (serverEnv.OPENAI_API_KEY) {
      const openAiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${serverEnv.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: serverEnv.OPENAI_FOLLOWUP_MODEL,
          temperature: 0.4,
          max_tokens: 420,
          messages: [
            {
              role: "system",
              content:
                "You are a concise, child-friendly teaching assistant. Give practical, step-by-step help and keep answers under 180 words.",
            },
            {
              role: "user",
              content: JSON.stringify({
                question,
                lesson: lessonLookup
                  ? {
                      lessonId: lessonLookup.lesson.id,
                      lessonTitle: lessonLookup.lesson.title,
                      moduleTitle: lessonLookup.learningModule.title,
                      subject: lessonLookup.learningModule.subject,
                    }
                  : null,
                focusSkills,
                summary,
                recentConversation: recentConversationRows
                  .slice()
                  .reverse()
                  .map((entry) => ({
                    role: entry.role,
                    source: entry.source,
                    message: normalizeMessage(entry.message),
                    createdAt: entry.created_at,
                  })),
                baselineAnswer,
                format: {
                  required: "plain text",
                  include: ["brief answer", "3 concrete steps", "one self-check question"],
                },
              }),
            },
          ],
        }),
      });

      const openAiPayload = await openAiResponse.json().catch(() => ({}));
      if (!openAiResponse.ok) {
        warning =
          openAiPayload?.error?.message ||
          openAiPayload?.message ||
          `Tutor model request failed with status ${openAiResponse.status}`;
      } else {
        const modelAnswer = openAiPayload?.choices?.[0]?.message?.content;
        const normalizedAnswer =
          typeof modelAnswer === "string" && modelAnswer.trim().length > 0
            ? modelAnswer.trim()
            : baselineAnswer;
        answer = normalizedAnswer;
        source = "openai";
      }
    }

    const lessonIdForMemory = lessonLookup?.lesson.id ?? (activeLessonId || null);
    const moduleIdForMemory = lessonLookup?.learningModule.id ?? (followupRow?.module_id ?? null);
    let memorySaved = false;

    if (memoryAvailable) {
      const { error: saveError } = await supabase.from("ai_tutor_conversations").insert([
        {
          user_id: user.id,
          lesson_id: lessonIdForMemory,
          module_id: moduleIdForMemory,
          role: "user",
          source: "user",
          message: question,
          metadata: {
            requested_via: "api/ai/tutor",
          },
        },
        {
          user_id: user.id,
          lesson_id: lessonIdForMemory,
          module_id: moduleIdForMemory,
          role: "assistant",
          source,
          message: answer,
          metadata: {
            requested_via: "api/ai/tutor",
            warning: warning ?? null,
          },
        },
      ]);

      if (saveError) {
        if (isMissingTutorTableError(saveError.message)) {
          memoryAvailable = false;
        } else {
          console.error("Unable to persist AI tutor conversation.", toSafeErrorRecord(saveError));
        }
      } else {
        memorySaved = true;
      }
    }

    let responseUsage = usage;
    if (usage.usageTracked) {
      const incrementedUsed = usage.usedToday + 1;
      responseUsage = {
        ...usage,
        usedToday: incrementedUsed,
        remainingToday: Math.max(0, usage.dailyLimit - incrementedUsed),
        limitReached: incrementedUsed >= usage.dailyLimit,
      };
    }

    return NextResponse.json({
      answer,
      source,
      model: source === "openai" ? serverEnv.OPENAI_FOLLOWUP_MODEL : null,
      warning,
      memoryAvailable,
      memorySaved,
      usage: responseUsage,
      context: {
        lessonId: lessonLookup?.lesson.id ?? null,
        lessonTitle: lessonLookup?.lesson.title ?? null,
        moduleTitle: lessonLookup?.learningModule.title ?? null,
        focusSkills,
      },
    });
  } catch (error) {
    console.error("Unexpected AI tutor error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
