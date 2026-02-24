import type { SupabaseClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { LearningEventPayload } from "@/lib/analytics/learning-events";
import { serverEnv } from "@/lib/config/env";
import { getAllLearningModules, getLearningModuleById, getLessonById } from "@/lib/modules";
import type { Flashcard, LearningModule, Lesson, LessonChunk, Question } from "@/lib/modules/types";

const CACHE_WINDOW_MS = 1000 * 60 * 60 * 6;

const followupPackSchema = z.object({
  summary: z.string().min(12).max(640),
  encouragement: z.string().min(8).max(260),
  focusSkills: z.array(z.string().min(2).max(80)).min(1).max(8),
  studyPlan: z
    .array(
      z.object({
        dayLabel: z.string().min(2).max(40),
        goal: z.string().min(8).max(200),
        tasks: z.array(z.string().min(5).max(220)).min(1).max(5),
      }),
    )
    .min(2)
    .max(5),
  flashcards: z
    .array(
      z.object({
        front: z.string().min(3).max(220),
        back: z.string().min(3).max(260),
        hint: z.string().max(220).optional(),
      }),
    )
    .min(3)
    .max(12),
  practicePrompts: z
    .array(
      z.object({
        question: z.string().min(5).max(260),
        answer: z.string().min(3).max(260),
        hint: z.string().max(220).optional(),
      }),
    )
    .min(2)
    .max(8),
  nextLessonIds: z.array(z.string().min(1)).max(4),
});

export type AiFollowupPack = z.infer<typeof followupPackSchema>;

export type AiFollowupRecord = {
  id: string;
  lesson_id: string;
  module_id: string | null;
  status: "generating" | "completed" | "failed";
  generation_mode: "rule_based" | "openai";
  model: string | null;
  pack: AiFollowupPack;
  context: Record<string, unknown>;
  error: string | null;
  updated_at: string;
  created_at: string;
};

export type GenerateAndStoreFollowupParams = {
  supabase: SupabaseClient;
  userId: string;
  lessonId: string;
  moduleId?: string | null;
  completionPayload?: LearningEventPayload | null;
  force?: boolean;
  allowOpenAi?: boolean;
};

export type GenerateAndStoreFollowupResult =
  | { status: "cached" | "generated"; record: AiFollowupRecord }
  | { status: "failed"; error: string };

type FollowupContext = {
  unresolvedLessonErrors: number;
  unresolvedErrorTypes: string[];
  weakSkills: string[];
  dueLessons: number;
  score: number | null;
  totalQuestions: number | null;
  masteryPercentage: number | null;
  timeSpentSeconds: number | null;
};

type MasteryRow = {
  skill_id: string;
  mastery_level: number;
};

type ProgressRow = {
  lesson_id: string;
  next_review_at: string | null;
};

type ErrorRow = {
  error_type: string;
};

type LessonLookup = {
  lesson: Lesson;
  learningModule: LearningModule;
};

type RowPayload = {
  user_id: string;
  lesson_id: string;
  module_id: string | null;
  status: "generating" | "completed" | "failed";
  generation_mode: "rule_based" | "openai";
  model: string | null;
  pack: AiFollowupPack | Record<string, never>;
  context: Record<string, unknown>;
  error: string | null;
};

type MediaJobRow = {
  id: string;
};

function normalizeWhitespace(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function truncate(value: string, maxLength: number) {
  if (value.length <= maxLength) return value;
  return `${value.slice(0, Math.max(0, maxLength - 3)).trimEnd()}...`;
}

function toSentence(value: string) {
  const normalized = normalizeWhitespace(value);
  if (!normalized) return "";
  return normalized.endsWith(".") ? normalized : `${normalized}.`;
}

function safeNumericPayloadValue(payload: LearningEventPayload | null | undefined, key: string) {
  if (!payload) return null;
  const value = payload[key];
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }
  return null;
}

function formatSkillLabel(skillId: string) {
  return skillId
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeSkill(skillId: string) {
  return skillId.trim().toLowerCase();
}

function normalizeSkillList(skillIds: string[]) {
  const seen = new Set<string>();
  const normalized: string[] = [];
  for (const skillId of skillIds) {
    const id = normalizeSkill(skillId);
    if (!id || seen.has(id)) continue;
    seen.add(id);
    normalized.push(id);
  }
  return normalized;
}

function collectLessonSkillIds(lesson: Lesson) {
  const questionSkills = (lesson.questions ?? [])
    .map((question) => question.skillId)
    .filter((skillId): skillId is string => typeof skillId === "string" && skillId.trim().length > 0);
  return normalizeSkillList(questionSkills);
}

function getNextLessonIds(learningModule: LearningModule, lessonId: string) {
  const index = learningModule.lessons.findIndex((lesson) => lesson.id === lessonId);
  if (index < 0) return [] as string[];
  return learningModule.lessons.slice(index + 1, index + 5).map((lesson) => lesson.id);
}

function dueCountFromProgressRows(progressRows: ProgressRow[]) {
  const now = Date.now();
  let count = 0;
  for (const row of progressRows) {
    if (!row.next_review_at) continue;
    const reviewTimestamp = new Date(row.next_review_at).getTime();
    if (Number.isFinite(reviewTimestamp) && reviewTimestamp <= now) {
      count += 1;
    }
  }
  return count;
}

function extractQuestionPrompts(questions: Question[]) {
  return questions
    .slice(0, 6)
    .map((question) => ({
      question: truncate(toSentence(question.text), 240),
      answer:
        truncate(
          toSentence(
            question.options.find((option) => option.id === question.correctOptionId)?.text ??
              question.explanation ??
              "Review the lesson notes.",
          ),
          240,
        ) || "Review the lesson notes.",
      hint:
        typeof question.hint === "string" && question.hint.trim().length > 0
          ? truncate(toSentence(question.hint), 200)
          : undefined,
    }))
    .filter((entry) => entry.question.length > 0);
}

function synthesizeFlashcardsFromChunks(chunks: LessonChunk[]) {
  return chunks
    .slice(0, 8)
    .map((chunk) => ({
      front: truncate(chunk.title, 180),
      back: truncate(toSentence(chunk.content), 220),
      hint: chunk.kind ? `Focus area: ${chunk.kind}` : undefined,
    }))
    .filter((card) => card.front.length > 0 && card.back.length > 0);
}

function synthesizeFlashcardsFromObjectives(objectives: string[]) {
  return objectives
    .slice(0, 8)
    .map((objective, index) => ({
      front: `Objective ${index + 1}`,
      back: truncate(toSentence(objective), 220),
      hint: "Explain this objective in your own words.",
    }));
}

function buildFlashcards(lesson: Lesson) {
  const directCards =
    lesson.flashcards
      ?.slice(0, 10)
      .map((card: Flashcard) => ({
        front: truncate(card.front, 180),
        back: truncate(card.back, 220),
        hint: typeof card.hint === "string" && card.hint.trim().length > 0 ? truncate(card.hint, 200) : undefined,
      }))
      .filter((card) => card.front.length > 0 && card.back.length > 0) ?? [];

  if (directCards.length >= 3) {
    return directCards.slice(0, 10);
  }

  const chunkCards = synthesizeFlashcardsFromChunks(lesson.chunks ?? []);
  const objectiveCards = synthesizeFlashcardsFromObjectives(lesson.objectives ?? []);
  const merged = [...directCards, ...chunkCards, ...objectiveCards];

  if (merged.length >= 3) {
    return merged.slice(0, 10);
  }

  return [
    {
      front: `What is the main idea of ${lesson.title}?`,
      back: "Summarize the lesson in 2 to 3 short sentences.",
      hint: "Use one key term and one example.",
    },
    {
      front: "Which skill did you practice most?",
      back: "Pick one skill and explain how you used it in this lesson.",
      hint: "Say it out loud before writing it down.",
    },
    {
      front: "How can you apply this tomorrow?",
      back: "Write one real-world situation where this lesson helps.",
      hint: "Think school, home, or a game.",
    },
  ];
}

function buildStudyPlan(input: {
  lesson: Lesson;
  focusSkills: string[];
  dueLessons: number;
  unresolvedLessonErrors: number;
}) {
  const focusText = input.focusSkills.slice(0, 2).map((skill) => formatSkillLabel(skill)).join(" + ");
  const reviewTask =
    input.dueLessons > 0
      ? `Clear ${Math.min(input.dueLessons, 3)} due review${input.dueLessons > 1 ? "s" : ""} in your spaced repetition queue.`
      : "Review one recent lesson to keep memory strong.";
  const remediationTask =
    input.unresolvedLessonErrors > 0
      ? `Rework ${Math.min(input.unresolvedLessonErrors, 3)} missed question${input.unresolvedLessonErrors > 1 ? "s" : ""} and write why the correct answer works.`
      : "Complete one challenge question and explain your reasoning.";

  return [
    {
      dayLabel: "Day 1",
      goal: `Rebuild core understanding for ${focusText || input.lesson.title}.`,
      tasks: [
        `Review 2 lesson chunks from "${input.lesson.title}".`,
        "Flip through the AI flashcards until you can answer each one without hints.",
        remediationTask,
      ],
    },
    {
      dayLabel: "Day 2",
      goal: "Practice retrieval and accurate execution.",
      tasks: [
        "Answer the mini-practice prompts without looking at notes first.",
        "Check each answer and write one correction for any mistake.",
        reviewTask,
      ],
    },
    {
      dayLabel: "Day 3",
      goal: "Lock in mastery and transition to the next lesson.",
      tasks: [
        "Teach one concept from this lesson aloud in 60 seconds.",
        "Run one timed self-check round (5-10 minutes).",
        "Start the suggested next lesson and complete at least the first chunk.",
      ],
    },
  ];
}

function buildRuleBasedPack(input: {
  learningModule: LearningModule;
  lesson: Lesson;
  context: FollowupContext;
}): AiFollowupPack {
  const { learningModule, lesson, context } = input;
  const lessonSkills = collectLessonSkillIds(lesson);
  const focusSkills = normalizeSkillList([...context.weakSkills, ...lessonSkills]).slice(0, 6);
  const nextLessonIds = getNextLessonIds(learningModule, lesson.id);
  const masteryLabel =
    typeof context.masteryPercentage === "number" && Number.isFinite(context.masteryPercentage)
      ? `${Math.max(0, Math.min(100, Math.round(context.masteryPercentage)))}%`
      : null;
  const scoreLabel =
    typeof context.score === "number" &&
    typeof context.totalQuestions === "number" &&
    context.totalQuestions > 0
      ? `${context.score}/${context.totalQuestions}`
      : null;
  const summaryParts = [
    `You completed "${lesson.title}" in ${learningModule.subject}.`,
    scoreLabel ? `Quiz result: ${scoreLabel}.` : null,
    masteryLabel ? `Estimated mastery: ${masteryLabel}.` : null,
    context.unresolvedLessonErrors > 0
      ? `We still need to repair ${context.unresolvedLessonErrors} recent error${context.unresolvedLessonErrors > 1 ? "s" : ""} from this topic.`
      : "No unresolved errors are currently blocking this topic.",
  ].filter((part): part is string => Boolean(part));
  const summary = summaryParts.join(" ");
  const baseFlashcards = buildFlashcards(lesson);
  const basePrompts = extractQuestionPrompts(lesson.questions ?? []);
  const practicePrompts =
    basePrompts.length >= 2
      ? basePrompts
      : [
          {
            question: `Explain the key idea from "${lesson.title}" in your own words.`,
            answer: "A complete answer should include one definition and one concrete example.",
            hint: "Use one sentence for the concept and one for the example.",
          },
          {
            question: "What mistake are you most likely to make in this topic, and how will you prevent it?",
            answer: "Name the mistake and write a single rule you will apply before submitting.",
            hint: "Think of your most recent incorrect response.",
          },
        ];
  const encouragement =
    context.unresolvedLessonErrors > 0
      ? "You are close. A short focused review now will convert mistakes into long-term wins."
      : "Strong momentum. Keep your streak by doing the Day 1 plan while this lesson is still fresh.";

  return {
    summary: truncate(summary, 620),
    encouragement: truncate(encouragement, 240),
    focusSkills:
      focusSkills.length > 0
        ? focusSkills.map((skill) => truncate(formatSkillLabel(skill), 80))
        : [truncate(lesson.title, 80)],
    studyPlan: buildStudyPlan({
      lesson,
      focusSkills,
      dueLessons: context.dueLessons,
      unresolvedLessonErrors: context.unresolvedLessonErrors,
    }),
    flashcards: baseFlashcards.slice(0, 10),
    practicePrompts: practicePrompts.slice(0, 6),
    nextLessonIds,
  };
}

function cleanupJsonString(value: string) {
  const trimmed = value.trim();
  if (!trimmed.startsWith("```")) {
    return trimmed;
  }
  return trimmed
    .replace(/^```(?:json)?/i, "")
    .replace(/```$/i, "")
    .trim();
}

async function generateOpenAiPack(input: {
  lesson: Lesson;
  learningModule: LearningModule;
  context: FollowupContext;
  baselinePack: AiFollowupPack;
}): Promise<AiFollowupPack> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 9000);

  try {
    const lightweightLessonPayload = {
      id: input.lesson.id,
      title: input.lesson.title,
      subject: input.learningModule.subject,
      lessonType: input.lesson.type,
      durationMinutes: input.lesson.duration,
      objectives: (input.lesson.objectives ?? []).slice(0, 6),
      chunks: (input.lesson.chunks ?? []).slice(0, 6).map((chunk) => ({
        title: chunk.title,
        content: truncate(chunk.content, 260),
      })),
      questionPrompts: (input.lesson.questions ?? []).slice(0, 5).map((question) => ({
        text: truncate(question.text, 200),
        skillId: question.skillId,
      })),
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${serverEnv.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: serverEnv.OPENAI_FOLLOWUP_MODEL,
        temperature: 0.4,
        max_tokens: 900,
        response_format: { type: "json_object" },
        messages: [
          {
            role: "system",
            content:
              "You are an educational AI teaching assistant. Return only valid JSON for a study follow-up pack. Keep language clear, encouraging, and age-appropriate. Do not output markdown.",
          },
          {
            role: "user",
            content: JSON.stringify({
              task: "Refine this follow-up pack for a student after lesson completion.",
              requiredShape: {
                summary: "string",
                encouragement: "string",
                focusSkills: ["string"],
                studyPlan: [{ dayLabel: "string", goal: "string", tasks: ["string"] }],
                flashcards: [{ front: "string", back: "string", hint: "optional string" }],
                practicePrompts: [{ question: "string", answer: "string", hint: "optional string" }],
                nextLessonIds: ["string"],
              },
              lesson: lightweightLessonPayload,
              context: input.context,
              baselinePack: input.baselinePack,
            }),
          },
        ],
      }),
      signal: controller.signal,
    });

    const responsePayload = await response.json().catch(() => ({}));
    if (!response.ok) {
      const message =
        responsePayload?.error?.message ||
        responsePayload?.message ||
        `OpenAI follow-up generation failed with status ${response.status}`;
      throw new Error(message);
    }

    const content = responsePayload?.choices?.[0]?.message?.content;
    const rawJson = typeof content === "string" ? content : "";
    if (!rawJson) {
      throw new Error("OpenAI follow-up generation returned empty content.");
    }

    const parsed = JSON.parse(cleanupJsonString(rawJson));
    return followupPackSchema.parse(parsed);
  } finally {
    clearTimeout(timer);
  }
}

async function buildContext(params: {
  supabase: SupabaseClient;
  userId: string;
  lessonId: string;
  completionPayload?: LearningEventPayload | null;
}) {
  const { supabase, userId, lessonId, completionPayload } = params;
  const [masteryResult, progressResult, errorResult] = await Promise.all([
    supabase
      .from("user_skill_mastery")
      .select("skill_id, mastery_level")
      .eq("user_id", userId)
      .order("mastery_level", { ascending: true })
      .limit(8),
    supabase
      .from("user_learning_progress")
      .select("lesson_id, next_review_at")
      .eq("user_id", userId),
    supabase
      .from("user_exam_error_logs")
      .select("error_type")
      .eq("user_id", userId)
      .eq("lesson_id", lessonId)
      .eq("resolved", false)
      .order("created_at", { ascending: false })
      .limit(50),
  ]);

  const weakSkillRows = (masteryResult.data ?? []) as MasteryRow[];
  const progressRows = (progressResult.data ?? []) as ProgressRow[];
  const errorRows = (errorResult.data ?? []) as ErrorRow[];

  const unresolvedErrorTypes = Array.from(
    new Set(errorRows.map((row) => row.error_type).filter((type) => typeof type === "string" && type.length > 0)),
  );

  const context: FollowupContext = {
    unresolvedLessonErrors: errorRows.length,
    unresolvedErrorTypes,
    weakSkills: weakSkillRows
      .filter((row) => Number(row.mastery_level ?? 0) < 0.75)
      .map((row) => row.skill_id)
      .slice(0, 6),
    dueLessons: dueCountFromProgressRows(progressRows),
    score: safeNumericPayloadValue(completionPayload, "score"),
    totalQuestions: safeNumericPayloadValue(completionPayload, "totalQuestions"),
    masteryPercentage: safeNumericPayloadValue(completionPayload, "masteryPercentage"),
    timeSpentSeconds: safeNumericPayloadValue(completionPayload, "timeSpentSeconds"),
  };

  return context;
}

function normalizeLookup(params: {
  lessonId: string;
  moduleId?: string | null;
}): LessonLookup | null {
  const lessonLookup = getLessonById(params.lessonId);
  if (!lessonLookup) return null;

  if (params.moduleId) {
    const moduleById = getLearningModuleById(params.moduleId);
    if (moduleById) {
      return { lesson: lessonLookup.lesson, learningModule: moduleById };
    }
  }

  return lessonLookup;
}

function normalizePack(params: {
  pack: AiFollowupPack;
  learningModule: LearningModule;
  lessonId: string;
  fallbackPack: AiFollowupPack;
}) {
  const validLessonIds = new Set(params.learningModule.lessons.map((lesson) => lesson.id));
  const filteredNextLessons = params.pack.nextLessonIds.filter((lessonId) => validLessonIds.has(lessonId));
  const nextLessonIds =
    filteredNextLessons.length > 0 ? filteredNextLessons : params.fallbackPack.nextLessonIds;

  const normalized = {
    ...params.pack,
    summary: truncate(normalizeWhitespace(params.pack.summary), 640),
    encouragement: truncate(normalizeWhitespace(params.pack.encouragement), 260),
    focusSkills: params.pack.focusSkills.map((entry) => truncate(normalizeWhitespace(entry), 80)).slice(0, 8),
    studyPlan: params.pack.studyPlan.map((day) => ({
      dayLabel: truncate(normalizeWhitespace(day.dayLabel), 40),
      goal: truncate(normalizeWhitespace(day.goal), 200),
      tasks: day.tasks.map((task) => truncate(normalizeWhitespace(task), 220)).slice(0, 5),
    })),
    flashcards: params.pack.flashcards.map((card) => ({
      front: truncate(normalizeWhitespace(card.front), 220),
      back: truncate(normalizeWhitespace(card.back), 260),
      hint: typeof card.hint === "string" && card.hint.trim().length > 0 ? truncate(normalizeWhitespace(card.hint), 220) : undefined,
    })),
    practicePrompts: params.pack.practicePrompts.map((prompt) => ({
      question: truncate(normalizeWhitespace(prompt.question), 260),
      answer: truncate(normalizeWhitespace(prompt.answer), 260),
      hint: typeof prompt.hint === "string" && prompt.hint.trim().length > 0 ? truncate(normalizeWhitespace(prompt.hint), 220) : undefined,
    })),
    nextLessonIds,
  };

  return followupPackSchema.parse(normalized);
}

async function upsertRecord(params: {
  supabase: SupabaseClient;
  row: RowPayload;
}) {
  const { data, error } = await params.supabase
    .from("ai_followup_materials")
    .upsert(params.row, { onConflict: "user_id,lesson_id" })
    .select("id, lesson_id, module_id, status, generation_mode, model, pack, context, error, updated_at, created_at")
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  if (!data) {
    throw new Error("Unable to load stored follow-up material row.");
  }

  return data as AiFollowupRecord;
}

function buildCoachImagePrompt(params: {
  lesson: Lesson;
  learningModule: LearningModule;
  pack: AiFollowupPack;
}) {
  const focusSkills = params.pack.focusSkills.slice(0, 3).join(", ");
  const summary = params.pack.summary;
  const styleLine =
    "Style: child-friendly educational illustration, clean modern soft-neomorphic UI cues, high readability, minimal clutter.";

  return truncate(
    [
      `Create a study recap image for lesson "${params.lesson.title}" in subject ${params.learningModule.subject}.`,
      focusSkills ? `Highlight these focus skills visually: ${focusSkills}.` : "",
      summary ? `Context summary: ${summary}` : "",
      styleLine,
    ]
      .filter(Boolean)
      .join(" "),
    1800,
  );
}

async function queueCoachMediaJob(params: {
  supabase: SupabaseClient;
  userId: string;
  lesson: Lesson;
  learningModule: LearningModule;
  pack: AiFollowupPack;
}) {
  const { supabase, userId, lesson, learningModule, pack } = params;

  const { data: existing, error: existingError } = await supabase
    .from("media_generation_jobs")
    .select("id")
    .eq("created_by", userId)
    .eq("lesson_id", lesson.id)
    .eq("asset_type", "image")
    .in("status", ["queued", "running", "completed"])
    .contains("metadata", { requested_via: "ai_followup_coach" })
    .limit(1);

  if (existingError) {
    return;
  }
  if ((existing as MediaJobRow[] | null)?.length) {
    return;
  }

  const prompt = buildCoachImagePrompt({
    lesson,
    learningModule,
    pack,
  });

  await supabase.from("media_generation_jobs").insert({
    created_by: userId,
    module_id: learningModule.id,
    lesson_id: lesson.id,
    asset_type: "image",
    provider: "seedance",
    prompt,
    status: "queued",
    metadata: {
      requested_via: "ai_followup_coach",
      lesson_title: lesson.title,
      source: "ai_followup_materials",
      focus_skills: pack.focusSkills.slice(0, 4),
    },
  });
}

export async function generateAndStoreFollowupMaterial(
  params: GenerateAndStoreFollowupParams,
): Promise<GenerateAndStoreFollowupResult> {
  const lessonLookup = normalizeLookup({
    lessonId: params.lessonId,
    moduleId: params.moduleId,
  });
  if (!lessonLookup) {
    return { status: "failed", error: `Unknown lesson id: ${params.lessonId}` };
  }

  const { lesson, learningModule } = lessonLookup;

  const { data: existing, error: existingError } = await params.supabase
    .from("ai_followup_materials")
    .select("id, lesson_id, module_id, status, generation_mode, model, pack, context, error, updated_at, created_at")
    .eq("user_id", params.userId)
    .eq("lesson_id", lesson.id)
    .maybeSingle();

  if (existingError) {
    return { status: "failed", error: existingError.message };
  }

  if (existing && !params.force) {
    const updatedTimestamp = new Date(existing.updated_at).getTime();
    if (Number.isFinite(updatedTimestamp) && Date.now() - updatedTimestamp < CACHE_WINDOW_MS) {
      const parsedExistingPack = followupPackSchema.safeParse(existing.pack);
      if (parsedExistingPack.success) {
        return {
          status: "cached",
          record: {
            ...(existing as AiFollowupRecord),
            pack: parsedExistingPack.data,
          },
        };
      }
    }
  }

  const context = await buildContext({
    supabase: params.supabase,
    userId: params.userId,
    lessonId: lesson.id,
    completionPayload: params.completionPayload,
  });

  const fallbackPack = buildRuleBasedPack({
    lesson,
    learningModule,
    context,
  });

  const generatingRecord = await upsertRecord({
    supabase: params.supabase,
    row: {
      user_id: params.userId,
      lesson_id: lesson.id,
      module_id: learningModule.id,
      status: "generating",
      generation_mode: "rule_based",
      model: null,
      pack: {},
      context,
      error: null,
    },
  });

  let finalPack = fallbackPack;
  let generationMode: "rule_based" | "openai" = "rule_based";
  let model: string | null = null;
  let generationError: string | null = null;

  const allowOpenAi = Boolean(params.allowOpenAi ?? true);
  if (allowOpenAi && serverEnv.OPENAI_API_KEY) {
    try {
      const openAiPack = await generateOpenAiPack({
        lesson,
        learningModule,
        context,
        baselinePack: fallbackPack,
      });

      finalPack = normalizePack({
        pack: openAiPack,
        fallbackPack,
        learningModule,
        lessonId: lesson.id,
      });
      generationMode = "openai";
      model = serverEnv.OPENAI_FOLLOWUP_MODEL;
    } catch (error) {
      generationError = error instanceof Error ? error.message : "OpenAI follow-up generation failed.";
      finalPack = fallbackPack;
    }
  }

  try {
    const storedRecord = await upsertRecord({
      supabase: params.supabase,
      row: {
        user_id: params.userId,
        lesson_id: lesson.id,
        module_id: learningModule.id,
        status: "completed",
        generation_mode: generationMode,
        model,
        pack: finalPack,
        context,
        error: generationError,
      },
    });

    await queueCoachMediaJob({
      supabase: params.supabase,
      userId: params.userId,
      lesson,
      learningModule,
      pack: finalPack,
    }).catch(() => {
      // Optional enhancement; do not fail follow-up material generation.
    });

    return { status: "generated", record: storedRecord };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to save generated follow-up material.";
    await upsertRecord({
      supabase: params.supabase,
      row: {
        user_id: params.userId,
        lesson_id: lesson.id,
        module_id: learningModule.id,
        status: "failed",
        generation_mode: "rule_based",
        model: null,
        pack: generatingRecord.pack,
        context,
        error: message,
      },
    }).catch(() => {
      // Non-blocking fallback; preserve original error result.
    });

    return { status: "failed", error: message };
  }
}

export function getFollowupLessonLink(lessonId: string) {
  const lessonLookup = getLessonById(lessonId);
  if (lessonLookup) {
    return {
      lessonTitle: lessonLookup.lesson.title,
      moduleTitle: lessonLookup.learningModule.title,
    };
  }

  const modules = getAllLearningModules();
  for (const learningModule of modules) {
    const match = learningModule.lessons.find((lesson) => lesson.id === lessonId);
    if (match) {
      return {
        lessonTitle: match.title,
        moduleTitle: learningModule.title,
      };
    }
  }

  return {
    lessonTitle: lessonId,
    moduleTitle: "",
  };
}
