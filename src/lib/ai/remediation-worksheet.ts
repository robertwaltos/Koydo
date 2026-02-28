import type { SupabaseClient } from "@supabase/supabase-js";
import { z } from "zod";
import { serverEnv } from "@/lib/config/env";
import { getLessonById } from "@/lib/modules";
import type { Lesson, Question } from "@/lib/modules/types";

const worksheetSchema = z.object({
  title: z.string().min(6).max(140),
  objective: z.string().min(12).max(340),
  readinessCheck: z.array(z.string().min(5).max(220)).min(2).max(6),
  guidedPractice: z
    .array(
      z.object({
        prompt: z.string().min(6).max(340),
        expected: z.string().min(3).max(320),
        hint: z.string().max(220).optional(),
      }),
    )
    .min(3)
    .max(8),
  correctionDrill: z
    .array(
      z.object({
        mistake: z.string().min(6).max(260),
        fix: z.string().min(6).max(260),
      }),
    )
    .min(1)
    .max(6),
  exitTicket: z.array(z.string().min(6).max(220)).min(2).max(6),
  reflection: z.string().min(6).max(220),
  estimatedMinutes: z.number().int().min(10).max(45),
});

type FollowupPack = {
  summary?: string;
  focusSkills?: string[];
};

type FollowupRow = {
  lesson_id: string;
  module_id: string | null;
  pack: FollowupPack | null;
  updated_at: string;
};

type TutorRow = {
  role: "user" | "assistant";
  source: "user" | "openai" | "rule_based" | "system";
  message: string;
  created_at: string;
};

type ExamErrorRow = {
  error_type: string;
  question_text: string | null;
  notes: string | null;
};

type WorksheetContext = {
  sourceLessonId: string;
  moduleId: string | null;
  followupSummary: string | null;
  focusSkills: string[];
  tutorSignals: string[];
  unresolvedErrors: Array<{
    errorType: string;
    questionText: string;
    notes: string;
  }>;
};

type RowPayload = {
  user_id: string;
  lesson_id: string;
  module_id: string | null;
  status: "generating" | "completed" | "failed";
  generation_mode: "rule_based" | "openai";
  model: string | null;
  worksheet: AiRemediationWorksheet | Record<string, never>;
  context: Record<string, unknown>;
  error: string | null;
};

export type AiRemediationWorksheet = z.infer<typeof worksheetSchema>;

export type AiRemediationWorksheetRecord = {
  id: string;
  lesson_id: string;
  module_id: string | null;
  status: "generating" | "completed" | "failed";
  generation_mode: "rule_based" | "openai";
  model: string | null;
  worksheet: AiRemediationWorksheet;
  context: Record<string, unknown>;
  error: string | null;
  viewed_at: string | null;
  downloaded_at: string | null;
  completed_at: string | null;
  updated_at: string;
  created_at: string;
};

export type GenerateAndStoreRemediationWorksheetParams = {
  supabase: SupabaseClient;
  userId: string;
  lessonId?: string | null;
  moduleId?: string | null;
  force?: boolean;
  allowOpenAi?: boolean;
};

export type GenerateAndStoreRemediationWorksheetResult =
  | { status: "cached" | "generated"; record: AiRemediationWorksheetRecord }
  | { status: "failed"; error: string };

function normalizeWhitespace(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function toSentence(value: string) {
  const normalized = normalizeWhitespace(value);
  if (!normalized) return "";
  return normalized.endsWith(".") ? normalized : `${normalized}.`;
}

function truncate(value: string, maxLength: number) {
  if (value.length <= maxLength) return value;
  return `${value.slice(0, Math.max(0, maxLength - 3)).trimEnd()}...`;
}

function cleanupJsonString(value: string) {
  const trimmed = value.trim();
  if (!trimmed.startsWith("```")) {
    return trimmed;
  }
  return trimmed.replace(/^```(?:json)?/i, "").replace(/```$/i, "").trim();
}

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

function getQuestionAnswer(question: Question) {
  const correct = question.options.find((entry) => entry.id === question.correctOptionId);
  return correct?.text || question.explanation || "Use your notes to justify your answer.";
}

function normalizeSkillLabel(skill: string) {
  return skill
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function collectLessonFallbackSkills(lesson: Lesson) {
  return Array.from(
    new Set(
      (lesson.questions ?? [])
        .map((question) => normalizeSkillLabel(question.skillId ?? ""))
        .filter((skill) => skill.length > 0),
    ),
  ).slice(0, 6);
}

function fallbackGuidedPrompts(lesson: Lesson) {
  const chunkPrompts = (lesson.chunks ?? [])
    .slice(0, 4)
    .map((chunk) => ({
      prompt: `Explain: ${chunk.title}`,
      expected: truncate(toSentence(chunk.content), 220),
      hint: "Use one definition and one example.",
    }));

  if (chunkPrompts.length >= 3) {
    return chunkPrompts;
  }

  const objectivePrompts = (lesson.objectives ?? []).slice(0, 4).map((objective) => ({
    prompt: `Describe this objective in your own words: ${objective}`,
    expected: "Write one clear sentence and one concrete example.",
    hint: "Avoid copying the objective text directly.",
  }));

  return [...chunkPrompts, ...objectivePrompts].slice(0, 4);
}

function buildRuleBasedWorksheet(input: {
  lesson: Lesson;
  context: WorksheetContext;
}): AiRemediationWorksheet {
  const { lesson, context } = input;
  const lessonSkills = collectLessonFallbackSkills(lesson);
  const focusSkills = (context.focusSkills.length > 0 ? context.focusSkills : lessonSkills).slice(0, 4);
  const normalizedFocusSkills =
    focusSkills.length > 0 ? focusSkills.map((entry) => truncate(normalizeSkillLabel(entry), 80)) : [lesson.title];

  const readinessCheck = [
    `I can explain the main idea of "${lesson.title}" in one minute.`,
    ...normalizedFocusSkills.slice(0, 2).map((skill) => `I can solve one question focused on ${skill}.`),
  ].slice(0, 4);

  const questionPractice = (lesson.questions ?? []).slice(0, 5).map((question) => ({
    prompt: truncate(question.text, 280),
    expected: truncate(toSentence(getQuestionAnswer(question)), 240),
    hint:
      typeof question.hint === "string" && question.hint.trim().length > 0
        ? truncate(toSentence(question.hint), 200)
        : "Show each step before choosing an answer.",
  }));
  const guidedPractice = (questionPractice.length >= 3 ? questionPractice : fallbackGuidedPrompts(lesson)).slice(0, 6);

  const correctionDrillFromErrors = context.unresolvedErrors.slice(0, 4).map((entry) => ({
    mistake:
      entry.questionText.length > 0
        ? `Error pattern (${entry.errorType}): ${truncate(entry.questionText, 170)}`
        : `Error pattern: ${entry.errorType}`,
    fix:
      entry.notes.length > 0
        ? truncate(toSentence(entry.notes), 220)
        : "Write a one-line correction rule and apply it to a fresh problem.",
  }));
  const correctionDrillFallback = normalizedFocusSkills.slice(0, 3).map((skill) => ({
    mistake: `I rush when working on ${skill}.`,
    fix: `Slow down and run a 3-step check: concept, calculation, and final reason for ${skill}.`,
  }));
  const correctionDrill =
    correctionDrillFromErrors.length > 0 ? correctionDrillFromErrors : correctionDrillFallback;

  const tutorSignal = context.tutorSignals[0]
    ? truncate(context.tutorSignals[0], 180)
    : "Use one self-check question after each answer.";

  const exitTicket = [
    `What is one key idea from ${lesson.title} you can teach to someone else?`,
    `Solve one new prompt on ${normalizedFocusSkills[0]} without notes, then check your reasoning.`,
    `Write one correction rule you will use next time.`,
  ].slice(0, 3);

  const estimatedMinutes = Math.min(40, Math.max(15, 12 + guidedPractice.length * 3 + correctionDrill.length * 2));
  const objectiveAnchor =
    typeof context.followupSummary === "string" && context.followupSummary.length > 0
      ? context.followupSummary
      : `Reinforce core understanding in ${lesson.title} and close repeated mistakes.`;

  return worksheetSchema.parse({
    title: `Remediation Worksheet: ${lesson.title}`,
    objective: truncate(toSentence(objectiveAnchor), 320),
    readinessCheck,
    guidedPractice,
    correctionDrill,
    exitTicket,
    reflection: truncate(`Reflection prompt: ${tutorSignal}`, 210),
    estimatedMinutes,
  });
}

async function resolveSourceLesson(params: {
  supabase: SupabaseClient;
  userId: string;
  requestedLessonId?: string | null;
  requestedModuleId?: string | null;
}) {
  const { supabase, userId, requestedLessonId, requestedModuleId } = params;
  const requested = requestedLessonId?.trim() ?? "";

  const followupQuery = supabase
    .from("ai_followup_materials")
    .select("lesson_id, module_id, pack, updated_at")
    .eq("user_id", userId)
    .eq("status", "completed")
    .order("updated_at", { ascending: false })
    .limit(1);

  const { data: followupData, error: followupError } = requested
    ? await followupQuery.eq("lesson_id", requested)
    : await followupQuery;

  if (followupError && !isMissingTableError({ message: followupError.message, table: "ai_followup_materials" })) {
    throw new Error(followupError.message);
  }

  const followupRow = (followupData?.[0] ?? null) as FollowupRow | null;
  const selectedLessonId = requested || followupRow?.lesson_id || "";

  if (!selectedLessonId) {
    return {
      lessonId: "",
      moduleId: null as string | null,
      followupRow,
    };
  }

  return {
    lessonId: selectedLessonId,
    moduleId: requestedModuleId?.trim() || followupRow?.module_id || null,
    followupRow,
  };
}

async function loadWorksheetContext(params: {
  supabase: SupabaseClient;
  userId: string;
  lessonId: string;
  moduleId: string | null;
  followupRow: FollowupRow | null;
}) {
  const { supabase, userId, lessonId, moduleId, followupRow } = params;

  const followupSummary =
    typeof followupRow?.pack?.summary === "string" && followupRow.pack.summary.trim().length > 0
      ? followupRow.pack.summary.trim()
      : null;

  const followupSkills = Array.isArray(followupRow?.pack?.focusSkills)
    ? followupRow.pack.focusSkills.filter((skill): skill is string => typeof skill === "string" && skill.trim().length > 0)
    : [];

  const [tutorResult, errorResult] = await Promise.all([
    supabase
      .from("ai_tutor_conversations")
      .select("role, source, message, created_at")
      .eq("user_id", userId)
      .eq("lesson_id", lessonId)
      .order("created_at", { ascending: false })
      .limit(8),
    supabase
      .from("user_exam_error_logs")
      .select("error_type, question_text, notes")
      .eq("user_id", userId)
      .eq("lesson_id", lessonId)
      .eq("resolved", false)
      .order("created_at", { ascending: false })
      .limit(8),
  ]);

  if (tutorResult.error && !isMissingTableError({ message: tutorResult.error.message, table: "ai_tutor_conversations" })) {
    throw new Error(tutorResult.error.message);
  }
  if (errorResult.error) {
    throw new Error(errorResult.error.message);
  }

  const tutorRows = (tutorResult.data ?? []) as TutorRow[];
  const tutorSignals = tutorRows
    .filter((entry) => entry.role === "assistant")
    .map((entry) => truncate(toSentence(entry.message), 200))
    .filter((entry) => entry.length > 0)
    .slice(0, 4);

  const unresolvedErrors = ((errorResult.data ?? []) as ExamErrorRow[]).map((entry) => ({
    errorType: entry.error_type,
    questionText: entry.question_text ? normalizeWhitespace(entry.question_text) : "",
    notes: entry.notes ? normalizeWhitespace(entry.notes) : "",
  }));

  return {
    sourceLessonId: lessonId,
    moduleId,
    followupSummary,
    focusSkills: followupSkills.slice(0, 6),
    tutorSignals,
    unresolvedErrors,
  } satisfies WorksheetContext;
}

function normalizeWorksheet(worksheet: AiRemediationWorksheet) {
  return worksheetSchema.parse({
    title: truncate(normalizeWhitespace(worksheet.title), 140),
    objective: truncate(normalizeWhitespace(worksheet.objective), 340),
    readinessCheck: worksheet.readinessCheck.map((entry) => truncate(normalizeWhitespace(entry), 220)).slice(0, 6),
    guidedPractice: worksheet.guidedPractice.map((entry) => ({
      prompt: truncate(normalizeWhitespace(entry.prompt), 340),
      expected: truncate(normalizeWhitespace(entry.expected), 320),
      hint:
        typeof entry.hint === "string" && entry.hint.trim().length > 0
          ? truncate(normalizeWhitespace(entry.hint), 220)
          : undefined,
    })),
    correctionDrill: worksheet.correctionDrill.map((entry) => ({
      mistake: truncate(normalizeWhitespace(entry.mistake), 260),
      fix: truncate(normalizeWhitespace(entry.fix), 260),
    })),
    exitTicket: worksheet.exitTicket.map((entry) => truncate(normalizeWhitespace(entry), 220)).slice(0, 6),
    reflection: truncate(normalizeWhitespace(worksheet.reflection), 220),
    estimatedMinutes: worksheet.estimatedMinutes,
  });
}

async function generateOpenAiWorksheet(input: {
  lesson: Lesson;
  moduleTitle: string;
  baselineWorksheet: AiRemediationWorksheet;
  context: WorksheetContext;
}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 9000);

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${serverEnv.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: serverEnv.OPENAI_FOLLOWUP_MODEL,
        temperature: 0.4,
        max_tokens: 1100,
        response_format: { type: "json_object" },
        messages: [
          {
            role: "system",
            content:
              "You are a concise K-12 teaching assistant. Return only JSON. Keep language encouraging, actionable, and age-appropriate.",
          },
          {
            role: "user",
            content: JSON.stringify({
              task: "Refine this remediation worksheet for one student based on lesson context and learning signals.",
              requiredShape: {
                title: "string",
                objective: "string",
                readinessCheck: ["string"],
                guidedPractice: [{ prompt: "string", expected: "string", hint: "optional string" }],
                correctionDrill: [{ mistake: "string", fix: "string" }],
                exitTicket: ["string"],
                reflection: "string",
                estimatedMinutes: "number",
              },
              lesson: {
                lessonId: input.lesson.id,
                lessonTitle: input.lesson.title,
                lessonType: input.lesson.type,
                durationMinutes: input.lesson.duration,
                moduleTitle: input.moduleTitle,
                objectives: (input.lesson.objectives ?? []).slice(0, 6),
                questionPrompts: (input.lesson.questions ?? []).slice(0, 6).map((entry) => ({
                  text: truncate(entry.text, 220),
                  skillId: entry.skillId,
                })),
              },
              context: input.context,
              baselineWorksheet: input.baselineWorksheet,
            }),
          },
        ],
      }),
      signal: controller.signal,
    });

    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      const message =
        payload?.error?.message ||
        payload?.message ||
        `OpenAI worksheet generation failed with status ${response.status}`;
      throw new Error(message);
    }

    const content = payload?.choices?.[0]?.message?.content;
    const rawJson = typeof content === "string" ? content : "";
    if (!rawJson) {
      throw new Error("OpenAI worksheet generation returned empty content.");
    }

    const parsed = JSON.parse(cleanupJsonString(rawJson));
    return normalizeWorksheet(worksheetSchema.parse(parsed));
  } finally {
    clearTimeout(timer);
  }
}

async function upsertRecord(params: {
  supabase: SupabaseClient;
  row: RowPayload;
}) {
  const { data, error } = await params.supabase
    .from("ai_remediation_worksheets")
    .upsert(params.row, { onConflict: "user_id,lesson_id" })
    .select("id, lesson_id, module_id, status, generation_mode, model, worksheet, context, error, viewed_at, downloaded_at, completed_at, updated_at, created_at")
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }
  if (!data) {
    throw new Error("Unable to load stored remediation worksheet row.");
  }
  return data as AiRemediationWorksheetRecord;
}

export function renderWorksheetAsText(params: {
  lessonTitle: string;
  moduleTitle: string | null;
  worksheet: AiRemediationWorksheet;
}) {
  const lines: string[] = [];
  lines.push(params.worksheet.title);
  lines.push(params.moduleTitle ? `${params.lessonTitle} • ${params.moduleTitle}` : params.lessonTitle);
  lines.push(`Estimated time: ${params.worksheet.estimatedMinutes} minutes`);
  lines.push("");
  lines.push("Objective");
  lines.push(params.worksheet.objective);
  lines.push("");
  lines.push("Readiness Check");
  for (const item of params.worksheet.readinessCheck) {
    lines.push(`- ${item}`);
  }
  lines.push("");
  lines.push("Guided Practice");
  params.worksheet.guidedPractice.forEach((item, index) => {
    lines.push(`${index + 1}. Prompt: ${item.prompt}`);
    lines.push(`   Expected: ${item.expected}`);
    if (item.hint) {
      lines.push(`   Hint: ${item.hint}`);
    }
  });
  lines.push("");
  lines.push("Correction Drill");
  params.worksheet.correctionDrill.forEach((item, index) => {
    lines.push(`${index + 1}. Mistake: ${item.mistake}`);
    lines.push(`   Fix: ${item.fix}`);
  });
  lines.push("");
  lines.push("Exit Ticket");
  params.worksheet.exitTicket.forEach((item, index) => {
    lines.push(`${index + 1}. ${item}`);
  });
  lines.push("");
  lines.push(`Reflection: ${params.worksheet.reflection}`);
  lines.push("");
  return lines.join("\n");
}

export async function generateAndStoreRemediationWorksheet(
  params: GenerateAndStoreRemediationWorksheetParams,
): Promise<GenerateAndStoreRemediationWorksheetResult> {
  const requestedLessonId = params.lessonId?.trim() ?? "";
  const requestedModuleId = params.moduleId?.trim() ?? "";

  try {
    const resolved = await resolveSourceLesson({
      supabase: params.supabase,
      userId: params.userId,
      requestedLessonId,
      requestedModuleId,
    });

    if (!resolved.lessonId) {
      return {
        status: "failed",
        error: "No recent completed lesson context found. Complete a lesson first.",
      };
    }

    const lessonLookup = getLessonById(resolved.lessonId);
    if (!lessonLookup) {
      return {
        status: "failed",
        error: "Unable to locate lesson metadata for remediation worksheet.",
      };
    }

    const allowOpenAi = params.allowOpenAi !== false && Boolean(serverEnv.OPENAI_API_KEY);
    const force = Boolean(params.force);

    if (!force) {
      const { data: cachedRow, error: cachedError } = await params.supabase
        .from("ai_remediation_worksheets")
        .select("id, lesson_id, module_id, status, generation_mode, model, worksheet, context, error, viewed_at, downloaded_at, completed_at, updated_at, created_at")
        .eq("user_id", params.userId)
        .eq("lesson_id", resolved.lessonId)
        .eq("status", "completed")
        .order("updated_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (cachedError && !isMissingTableError({ message: cachedError.message, table: "ai_remediation_worksheets" })) {
        return { status: "failed", error: cachedError.message };
      }

      if (cachedRow) {
        return {
          status: "cached",
          record: cachedRow as AiRemediationWorksheetRecord,
        };
      }
    }

    const context = await loadWorksheetContext({
      supabase: params.supabase,
      userId: params.userId,
      lessonId: resolved.lessonId,
      moduleId: resolved.moduleId,
      followupRow: resolved.followupRow,
    });

    const baselineWorksheet = buildRuleBasedWorksheet({
      lesson: lessonLookup.lesson,
      context,
    });

    let worksheet = baselineWorksheet;
    let generationMode: "rule_based" | "openai" = "rule_based";
    let generationError: string | null = null;

    if (allowOpenAi) {
      try {
        worksheet = await generateOpenAiWorksheet({
          lesson: lessonLookup.lesson,
          moduleTitle: lessonLookup.learningModule.title,
          baselineWorksheet,
          context,
        });
        generationMode = "openai";
      } catch (error) {
        generationError =
          error instanceof Error ? error.message : "OpenAI remediation worksheet generation failed.";
      }
    }

    const stored = await upsertRecord({
      supabase: params.supabase,
      row: {
        user_id: params.userId,
        lesson_id: resolved.lessonId,
        module_id: resolved.moduleId ?? lessonLookup.learningModule.id,
        status: "completed",
        generation_mode: generationMode,
        model: generationMode === "openai" ? serverEnv.OPENAI_FOLLOWUP_MODEL : null,
        worksheet,
        context: {
          ...context,
          generationError,
          generatedAt: new Date().toISOString(),
        },
        error: generationError,
      },
    });

    return {
      status: "generated",
      record: stored,
    };
  } catch (error) {
    return {
      status: "failed",
      error: error instanceof Error ? error.message : "Unable to generate remediation worksheet.",
    };
  }
}
