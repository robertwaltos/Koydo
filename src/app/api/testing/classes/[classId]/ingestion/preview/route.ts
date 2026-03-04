import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { resolveVerifiedTeacherClassAccess } from "@/lib/compliance/teacher-access";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { isMissingTestingTableError } from "@/lib/testing/api-utils";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const requestSchema = z.object({
  mode: z.enum(["preview", "save_stub"]).optional().default("preview"),
  title: z.string().trim().min(3).max(160),
  sourceType: z.enum(["text", "notes", "slides", "pdf", "worksheet"]).optional().default("notes"),
  rawText: z.string().min(30).max(12_000),
  language: z.enum(["en", "es", "mixed"]).optional().default("en"),
  tags: z.array(z.string().trim().min(2).max(24)).max(8).optional().default([]),
  generateQuestions: z.boolean().optional().default(true),
  questionCount: z.coerce.number().int().min(3).max(12).optional().default(5),
  difficultyBand: z.enum(["baseline", "mixed", "challenge"]).optional().default("mixed"),
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

const STOP_WORDS = new Set([
  "the",
  "and",
  "for",
  "with",
  "that",
  "this",
  "from",
  "into",
  "about",
  "your",
  "their",
  "will",
  "would",
  "could",
  "have",
  "has",
  "had",
  "were",
  "was",
  "you",
  "our",
  "but",
  "are",
  "not",
  "can",
  "use",
  "using",
  "through",
  "each",
  "than",
  "then",
  "them",
  "they",
  "these",
  "those",
  "also",
  "while",
  "where",
]);

function toSessionSettings(value: unknown) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return {} as Record<string, unknown>;
  }
  return value as Record<string, unknown>;
}

function splitParagraphs(text: string) {
  return text
    .split(/\r?\n\s*\r?\n/g)
    .map((entry) => entry.replace(/\s+/g, " ").trim())
    .filter((entry) => entry.length > 0);
}

function splitSentences(text: string) {
  return text
    .replace(/\r?\n/g, " ")
    .split(/(?<=[.!?])\s+/)
    .map((entry) => entry.trim())
    .filter((entry) => entry.length > 0);
}

function extractKeywords(text: string, maxKeywords = 12) {
  const counts = new Map<string, number>();
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .map((word) => word.trim())
    .filter((word) => word.length >= 4 && !STOP_WORDS.has(word));

  for (const word of words) {
    counts.set(word, (counts.get(word) ?? 0) + 1);
  }

  return [...counts.entries()]
    .sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0]))
    .slice(0, maxKeywords)
    .map(([word]) => word);
}

function clampWordExcerpt(value: string, maxWords: number) {
  const words = value.split(/\s+/).filter(Boolean);
  if (words.length <= maxWords) return value;
  return `${words.slice(0, maxWords).join(" ")}...`;
}

function extractLearningObjectives(sentences: string[]) {
  const objectiveSignals = /(?:understand|identify|explain|analyze|apply|compare|evaluate|design|model)\b/i;
  const candidates = sentences.filter((sentence) => objectiveSignals.test(sentence));
  const base = candidates.length > 0 ? candidates : sentences;
  return base
    .slice(0, 4)
    .map((sentence, index) => ({
      id: `objective-${index + 1}`,
      text: clampWordExcerpt(sentence, 22),
    }));
}

function buildQuizDraft(params: {
  topic: string;
  difficultyBand: "baseline" | "mixed" | "challenge";
  questionCount: number;
  keywords: string[];
  objectives: Array<{ id: string; text: string }>;
}) {
  const strategyByBand: Record<"baseline" | "mixed" | "challenge", string> = {
    baseline: "Use direct recall aligned to one key concept.",
    mixed: "Mix recall and applied reasoning with one supporting example.",
    challenge: "Require multi-step reasoning and justification.",
  };
  const questions = [];
  for (let index = 0; index < params.questionCount; index += 1) {
    const objective = params.objectives[index % Math.max(params.objectives.length, 1)];
    const keyword = params.keywords[index % Math.max(params.keywords.length, 1)] ?? params.topic;
    questions.push({
      id: `ingestion-q-${index + 1}`,
      promptType: index % 3 === 2 ? "short_answer" : "mcq_single",
      prompt:
        index % 3 === 2
          ? `Explain how "${keyword}" supports the objective: ${objective?.text ?? params.topic}.`
          : `Which statement best matches "${keyword}" in ${params.topic}?`,
      answerStrategy: strategyByBand[params.difficultyBand],
      sourceObjectiveId: objective?.id ?? null,
    });
  }
  return questions;
}

export async function POST(
  request: Request,
  context: { params: Promise<{ classId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:testing:classes:ingestion:preview:post", {
    max: 25,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many ingestion preview requests. Please retry shortly." },
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
    purpose: "testing_class_ingestion_preview",
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

  const nowIso = new Date().toISOString();
  const normalizedText = parsed.data.rawText.replace(/\r?\n/g, "\n").trim();
  const paragraphs = splitParagraphs(normalizedText);
  const sentences = splitSentences(normalizedText);
  const keywords = extractKeywords(normalizedText, 12);

  const segments = (paragraphs.length > 0 ? paragraphs : sentences)
    .slice(0, 8)
    .map((entry, index) => ({
      id: `segment-${index + 1}`,
      heading: `Segment ${index + 1}`,
      excerpt: clampWordExcerpt(entry, 42),
      sourceType: parsed.data.sourceType,
    }));

  const objectives = extractLearningObjectives(sentences);
  const estimatedReadMinutes = Math.max(
    1,
    Math.ceil(normalizedText.split(/\s+/).filter(Boolean).length / 180),
  );
  const averageSentenceLength =
    sentences.length > 0
      ? Math.round(normalizedText.split(/\s+/).filter(Boolean).length / sentences.length)
      : 0;

  const qualityBand =
    normalizedText.length >= 900 && segments.length >= 4
      ? "high"
      : normalizedText.length >= 350 && segments.length >= 2
        ? "medium"
        : "low";

  const quizDraft = parsed.data.generateQuestions
    ? buildQuizDraft({
      topic: parsed.data.title,
      difficultyBand: parsed.data.difficultyBand,
      questionCount: parsed.data.questionCount,
      keywords,
      objectives,
    })
    : [];

  const parseSummary = {
    characterCount: normalizedText.length,
    sentenceCount: sentences.length,
    segmentCount: segments.length,
    keywordCount: keywords.length,
    estimatedReadMinutes,
    averageSentenceLength,
    qualityBand,
  };

  if (parsed.data.mode === "save_stub") {
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

    const current = (sessionRow ?? null) as SessionRow | null;
    const currentSettings = toSessionSettings(current?.session_settings);
    const nextSettings = {
      ...currentSettings,
      ingestionPreviewStub: {
        id: `ingestion_${Date.now().toString(36)}`,
        title: parsed.data.title,
        sourceType: parsed.data.sourceType,
        language: parsed.data.language,
        tags: parsed.data.tags,
        summary: parseSummary,
        segments,
        objectives,
        keywords,
        quizDraft,
        generatedAt: nowIso,
      },
      ingestionPreviewLastSavedAt: nowIso,
    };

    if (current) {
      const { error: updateError } = await admin
        .from("classroom_sessions")
        .update({
          session_settings: nextSettings,
          updated_by: user.id,
        })
        .eq("class_id", classId)
        .eq("teacher_user_id", user.id);

      if (updateError) {
        if (isMissingTestingTableError(updateError)) {
          return NextResponse.json(
            { error: "Testing/classroom tables are not ready. Run Supabase migrations first." },
            { status: 503 },
          );
        }
        console.error("Unexpected API error.", toSafeErrorRecord(updateError));
        return NextResponse.json({ error: "Internal server error." }, { status: 500 });
      }
    } else {
      const { error: insertSessionError } = await admin.from("classroom_sessions").insert({
        class_id: classId,
        teacher_user_id: user.id,
        delivery_mode: "student_paced",
        session_status: "draft",
        active_assignment_id: null,
        lesson_focus: null,
        announcement: null,
        session_settings: nextSettings,
        started_at: null,
        ended_at: null,
        updated_by: user.id,
      });

      if (insertSessionError) {
        if (isMissingTestingTableError(insertSessionError)) {
          return NextResponse.json(
            { error: "Testing/classroom tables are not ready. Run Supabase migrations first." },
            { status: 503 },
          );
        }
        console.error("Unexpected API error.", toSafeErrorRecord(insertSessionError));
        return NextResponse.json({ error: "Internal server error." }, { status: 500 });
      }
    }
  }

  return NextResponse.json({
    stub: true,
    mode: parsed.data.mode,
    classId,
    className: teacherAccess.className,
    title: parsed.data.title,
    sourceType: parsed.data.sourceType,
    language: parsed.data.language,
    tags: parsed.data.tags,
    parse: parseSummary,
    segments,
    objectives,
    keywords,
    quizDraft,
    saved: parsed.data.mode === "save_stub",
    message:
      parsed.data.mode === "save_stub"
        ? "Ingestion parse preview saved to classroom session stub."
        : "Ingestion parse preview generated.",
    nextActions:
      parsed.data.mode === "save_stub"
        ? [
          "Review extracted objectives and quiz draft.",
          "Adjust source text and rerun preview if needed.",
          "Promote mapped ingestion workflow in S3 review UX.",
        ]
        : [
          "Review extracted segments and objectives.",
          "Tune source text or tags to improve parse quality.",
          "Use save_stub when teacher is ready to retain this preview.",
        ],
  });
}
