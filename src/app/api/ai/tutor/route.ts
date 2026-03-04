import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { serverEnv } from "@/lib/config/env";
import { getLessonById } from "@/lib/modules";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";

const MAX_HISTORY_FETCH = 80;
const DEFAULT_HISTORY_FETCH = 24;
const RECENT_MEMORY_LIMIT = 8;
const LOW_CONFIDENCE_THRESHOLD = 0.55;
const MIN_GROUNDED_SCORE = 0.08;

const AMBIGUOUS_QUESTION_PATTERN = /\b(this|that|it|they|them|these|those|here|there)\b/i;
const GROUNDING_STOP_WORDS = new Set([
  "a",
  "about",
  "an",
  "and",
  "are",
  "as",
  "at",
  "be",
  "by",
  "for",
  "from",
  "how",
  "i",
  "in",
  "is",
  "it",
  "of",
  "on",
  "or",
  "that",
  "the",
  "this",
  "to",
  "we",
  "what",
  "which",
  "why",
  "with",
  "you",
  "your",
]);

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

type LessonLookup = NonNullable<ReturnType<typeof getLessonById>>;

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

function truncateText(value: string, maxLength: number) {
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength - 1)}...`;
}

function tokenizeForGrounding(value: string) {
  const matches = value.toLowerCase().match(/[a-z0-9]{3,}/g) ?? [];
  return matches.filter((token) => !GROUNDING_STOP_WORDS.has(token));
}

function buildTutorCitation(lessonLookup: LessonLookup | null) {
  if (!lessonLookup) return null;
  return `${lessonLookup.learningModule.title} -> ${lessonLookup.lesson.title}`;
}

function extractTutorSnippet(lessonLookup: LessonLookup | null) {
  if (!lessonLookup) return null;
  const chunkContent =
    lessonLookup.lesson.chunks?.find((chunk) => typeof chunk.content === "string" && chunk.content.trim().length > 0)
      ?.content ?? "";
  const objective = lessonLookup.lesson.objectives?.find((entry) => typeof entry === "string" && entry.trim().length > 0) ?? "";
  const learningAid =
    lessonLookup.lesson.learningAids?.find(
      (aid) => typeof aid.content === "string" && aid.content.trim().length > 0,
    )?.content ?? "";

  const rawSnippet = [chunkContent, objective, learningAid].find((value) => value.trim().length > 0) ?? "";
  if (!rawSnippet) return null;
  return truncateText(normalizeMessage(rawSnippet), 220);
}

function buildGroundingTokenSet(input: {
  lessonLookup: LessonLookup | null;
  focusSkills: string[];
  summary?: string;
  snippet?: string | null;
}) {
  const sources: string[] = [];
  if (input.lessonLookup) {
    sources.push(input.lessonLookup.lesson.title);
    sources.push(input.lessonLookup.learningModule.title);
    sources.push(input.lessonLookup.learningModule.subject);
  }
  if (input.summary) sources.push(input.summary);
  if (input.snippet) sources.push(input.snippet);
  if (input.focusSkills.length > 0) {
    sources.push(input.focusSkills.join(" "));
  }

  const tokens = new Set<string>();
  for (const source of sources) {
    for (const token of tokenizeForGrounding(source)) {
      tokens.add(token);
    }
  }
  return tokens;
}

function calculateGroundingScore(answer: string, groundingTokens: Set<string>) {
  if (groundingTokens.size === 0) {
    return 1;
  }
  const answerTokens = new Set(tokenizeForGrounding(answer));
  if (answerTokens.size === 0) {
    return 0;
  }

  let overlap = 0;
  for (const token of answerTokens) {
    if (groundingTokens.has(token)) {
      overlap += 1;
    }
  }

  return overlap / Math.max(8, Math.min(groundingTokens.size, 18));
}

function shouldAskClarifyingQuestion(input: {
  question: string;
  lessonLookup: LessonLookup | null;
  groundingScore: number;
}) {
  const questionTokenCount = tokenizeForGrounding(input.question).length;
  if (!input.lessonLookup) return true;
  if (questionTokenCount <= 5) return true;
  if (AMBIGUOUS_QUESTION_PATTERN.test(input.question)) return true;
  return input.groundingScore < LOW_CONFIDENCE_THRESHOLD;
}

function buildClarifyingQuestion(lessonLookup: LessonLookup | null) {
  if (!lessonLookup) {
    return "Which lesson, example, or exact problem are you referring to so I can ground the answer?";
  }
  return `Which exact step in "${lessonLookup.lesson.title}" should we unpack first?`;
}

function estimateTutorConfidence(input: {
  lessonLookup: LessonLookup | null;
  hasSummary: boolean;
  focusSkillCount: number;
  source: "openai" | "rule_based";
  groundingScore: number;
}) {
  let confidence = input.lessonLookup ? 0.66 : 0.36;
  confidence += Math.min(0.1, input.focusSkillCount * 0.02);
  if (input.hasSummary) confidence += 0.06;
  if (input.source === "openai") confidence += 0.05;
  confidence += Math.min(0.2, Math.max(0, input.groundingScore) * 0.2);
  return Number(Math.max(0.2, Math.min(0.95, confidence)).toFixed(3));
}

function withGroundingBlock(input: {
  answer: string;
  citation: string | null;
  snippet: string | null;
  clarifyingQuestion: string | null;
}) {
  const lines = [input.answer.trim()];
  if (input.clarifyingQuestion) {
    lines.push(`Clarifying question: ${input.clarifyingQuestion}`);
  }
  if (input.citation) {
    lines.push(`Source: ${input.citation}`);
    if (input.snippet) {
      lines.push(`Snippet: "${input.snippet}"`);
    }
  } else {
    lines.push(
      "Uncertainty: I do not have a confirmed lesson source for this question yet. Share the lesson title or a short excerpt.",
    );
  }

  return lines.join("\n\n");
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
      console.error("Unexpected API error.", toSafeErrorRecord(error));
      return NextResponse.json({ error: "Internal server error." }, { status: 500 });
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
      console.error("Unexpected API error.", toSafeErrorRecord(error));
      return NextResponse.json({ error: "Internal server error." }, { status: 500 });
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
    // AI tutor is the most expensive endpoint — tight rate limit
    const rateLimit = await enforceIpRateLimit(request, "api:ai:tutor:post", {
      max: 10,
      windowMs: 60_000,
    });
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
      );
    }

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
      console.error("Unexpected API error.", toSafeErrorRecord(followupError));
      return NextResponse.json({ error: "Internal server error." }, { status: 500 });
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
        console.error("Unexpected API error.", toSafeErrorRecord(recentConversationError));
        return NextResponse.json({ error: "Internal server error." }, { status: 500 });
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
    const citation = buildTutorCitation(lessonLookup);
    const snippet = extractTutorSnippet(lessonLookup);
    const groundingTokens = buildGroundingTokenSet({
      lessonLookup,
      focusSkills,
      summary,
      snippet,
    });

    let answer = baselineAnswer;
    let source: "openai" | "rule_based" = "rule_based";
    let warning: string | null = null;
    let contradictionBlocked = false;

    if (serverEnv.OPENAI_MEDIA_API_KEY ?? serverEnv.OPENAI_API_KEY) {
      const openAiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${serverEnv.OPENAI_MEDIA_API_KEY ?? serverEnv.OPENAI_API_KEY}`,
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
                "You are a concise, child-friendly teaching assistant. Stay aligned to provided lesson context. If context is missing, explicitly say you are uncertain and ask a clarifying question. Keep answers under 180 words.",
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
                curriculumEvidence: {
                  citation,
                  snippet,
                },
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

    const groundingScore = calculateGroundingScore(answer, groundingTokens);
    if (lessonLookup && source === "openai" && groundingScore < MIN_GROUNDED_SCORE) {
      contradictionBlocked = true;
      answer = baselineAnswer;
      source = "rule_based";
      warning = warning
        ? `${warning} Tutor answer was replaced to stay aligned with lesson context.`
        : "Tutor answer was replaced to stay aligned with lesson context.";
    }

    const confidence = estimateTutorConfidence({
      lessonLookup,
      hasSummary: Boolean(summary),
      focusSkillCount: focusSkills.length,
      source,
      groundingScore,
    });
    const clarifyingQuestion = shouldAskClarifyingQuestion({
      question,
      lessonLookup,
      groundingScore,
    }) || confidence < LOW_CONFIDENCE_THRESHOLD
      ? buildClarifyingQuestion(lessonLookup)
      : null;

    answer = withGroundingBlock({
      answer,
      citation,
      snippet,
      clarifyingQuestion,
    });

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
            confidence,
            grounding_score: Number(groundingScore.toFixed(3)),
            contradiction_blocked: contradictionBlocked,
            citation: citation ?? null,
            clarifying_question_asked: Boolean(clarifyingQuestion),
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
      grounding: {
        citation,
        snippet,
        confidence,
        groundingScore: Number(groundingScore.toFixed(3)),
        contradictionBlocked,
        clarifyingQuestionAsked: Boolean(clarifyingQuestion),
      },
    });
  } catch (error) {
    console.error("Unexpected AI tutor error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

