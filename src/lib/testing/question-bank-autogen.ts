import type { SupabaseClient } from "@supabase/supabase-js";
import { z } from "zod";
import { serverEnv } from "@/lib/config/env";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { hashTestingAnswer } from "@/lib/testing/security";

const MAX_ON_DEMAND_GENERATION = 48;
const supplyGenerationInFlight = new Map<string, Promise<EnsureQuestionBankSupplyResult>>();

const generatedQuestionSchema = z.object({
  domain: z.string().min(2).max(120),
  questionText: z.string().min(12).max(320),
  options: z.array(z.string().min(1).max(220)).min(4).max(6),
  correctIndex: z.number().int().min(0).max(5),
  explanation: z.string().min(8).max(320),
  difficulty: z.number().min(0.05).max(0.95).optional(),
});

const generatedQuestionEnvelopeSchema = z.object({
  questions: z.array(generatedQuestionSchema).min(1).max(MAX_ON_DEMAND_GENERATION),
});

type BlueprintDomain = {
  name: string;
  weight: number;
};

type GeneratedQuestion = {
  domain: string;
  questionText: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: number;
};

type QuestionBankInsertRow = {
  exam_id: string;
  domain: string;
  difficulty: number;
  question_text: string;
  question_text_pl: string | null;
  options: string[];
  options_pl: null;
  correct_answer_hash: string;
  explanation: string;
  explanation_pl: null;
  source_blueprint: string;
  provenance: string;
  tags: string[];
  version: number;
  is_active: boolean;
  source_type: "internal_authoring";
  source_name: string;
  source_url: string;
  license_type: "internal-generated";
  commercial_use_allowed: true;
  derivation_method: string;
  review_status: "approved";
  reviewed_at: string;
  exam_code: string;
  objective_code: string;
};

export type EnsureQuestionBankSupplyParams = {
  supabase: SupabaseClient;
  exam: {
    id: string;
    examCode: string;
    name: string;
    version: number;
    blueprint: unknown;
  };
  neededCount: number;
  allowOpenAi?: boolean;
};

export type EnsureQuestionBankSupplyResult = {
  inserted: number;
  generationMode: "openai" | "rule_based" | "none";
};

function normalizeWhitespace(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function cleanupJsonString(value: string) {
  const trimmed = value.trim();
  return trimmed.replace(/^```(?:json)?/i, "").replace(/```$/i, "").trim();
}

function toTag(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 64);
}

function buildObjectiveCode(domainName: string, sequence: number) {
  return `${toTag(domainName).slice(0, 40)}-${String(sequence).padStart(4, "0")}`;
}

function parseBlueprintDomains(blueprint: unknown): BlueprintDomain[] {
  if (!blueprint || typeof blueprint !== "object" || Array.isArray(blueprint)) {
    return [{ name: "General Core Concepts", weight: 100 }];
  }

  const maybeDomains =
    "domains" in blueprint && Array.isArray((blueprint as { domains?: unknown }).domains)
      ? (blueprint as { domains: unknown[] }).domains
      : [];

  if (maybeDomains.length === 0) {
    return [{ name: "General Core Concepts", weight: 100 }];
  }

  const parsed = maybeDomains
    .map((entry) => {
      if (!entry || typeof entry !== "object" || Array.isArray(entry)) return null;
      const item = entry as { name?: unknown; weight?: unknown };
      const name =
        typeof item.name === "string" && item.name.trim().length > 0
          ? normalizeWhitespace(item.name)
          : null;
      if (!name) return null;
      const weightRaw = Number(item.weight ?? 0);
      const weight = Number.isFinite(weightRaw) && weightRaw > 0 ? weightRaw : 1;
      return { name, weight };
    })
    .filter((entry): entry is BlueprintDomain => Boolean(entry));

  return parsed.length > 0 ? parsed : [{ name: "General Core Concepts", weight: 100 }];
}

function allocateDomainCounts(totalQuestions: number, domains: BlueprintDomain[]) {
  if (totalQuestions <= 0) return [] as Array<{ name: string; count: number }>;

  const totalWeight = domains.reduce((sum, entry) => sum + Number(entry.weight || 0), 0) || 1;
  const provisional = domains.map((entry) => {
    const exact = (Number(entry.weight || 0) / totalWeight) * totalQuestions;
    const floor = Math.floor(exact);
    return {
      name: entry.name,
      count: floor,
      fraction: exact - floor,
    };
  });

  const allocated = provisional.reduce((sum, entry) => sum + entry.count, 0);
  let remaining = totalQuestions - allocated;

  provisional.sort((left, right) => right.fraction - left.fraction);
  for (let i = 0; i < provisional.length && remaining > 0; i += 1) {
    provisional[i].count += 1;
    remaining -= 1;
  }

  while (remaining > 0) {
    const index = remaining % provisional.length;
    provisional[index].count += 1;
    remaining -= 1;
  }

  return provisional.map((entry) => ({ name: entry.name, count: entry.count }));
}

function normalizeOptions(value: string[]) {
  const unique: string[] = [];
  const seen = new Set<string>();

  for (const option of value) {
    const normalized = normalizeWhitespace(option);
    if (!normalized) continue;
    const key = normalized.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    unique.push(normalized);
    if (unique.length >= 6) break;
  }

  return unique;
}

function normalizeGeneratedQuestion(question: GeneratedQuestion) {
  const options = normalizeOptions(question.options);
  if (options.length < 4) return null;

  const safeIndex = Math.max(0, Math.min(options.length - 1, Math.floor(question.correctIndex)));
  const normalized: GeneratedQuestion = {
    domain: normalizeWhitespace(question.domain) || "General Core Concepts",
    questionText: normalizeWhitespace(question.questionText),
    options: options.slice(0, 4),
    correctIndex: Math.min(3, safeIndex),
    explanation: normalizeWhitespace(question.explanation),
    difficulty: Math.max(0.05, Math.min(0.95, Number(question.difficulty || 0.5))),
  };

  if (normalized.questionText.length < 12 || normalized.explanation.length < 8) {
    return null;
  }

  return normalized;
}

function questionFingerprint(question: GeneratedQuestion) {
  return [
    normalizeWhitespace(question.domain).toLowerCase(),
    normalizeWhitespace(question.questionText).toLowerCase(),
    question.options.map((entry) => normalizeWhitespace(entry).toLowerCase()).join("|"),
  ].join("::");
}

function questionTextFingerprint(questionText: string) {
  return normalizeWhitespace(questionText).toLowerCase();
}

function dedupeQuestions(questions: GeneratedQuestion[]) {
  const seen = new Set<string>();
  const unique: GeneratedQuestion[] = [];
  for (const question of questions) {
    const key = questionFingerprint(question);
    if (seen.has(key)) continue;
    seen.add(key);
    unique.push(question);
  }
  return unique;
}

function uniqueNormalizedTexts(texts: string[]) {
  const seen = new Set<string>();
  const unique: string[] = [];
  for (const text of texts) {
    const normalized = normalizeWhitespace(text);
    if (!normalized) continue;
    const key = normalized.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    unique.push(normalized);
  }
  return unique;
}

async function fetchExistingQuestionTextFingerprints(params: {
  supabase: SupabaseClient;
  examId: string;
  texts: string[];
}) {
  const uniqueTexts = uniqueNormalizedTexts(params.texts);
  if (uniqueTexts.length === 0) {
    return new Set<string>();
  }

  const fingerprints = new Set<string>();
  for (let index = 0; index < uniqueTexts.length; index += 80) {
    const chunk = uniqueTexts.slice(index, index + 80);
    const { data, error } = await params.supabase
      .from("testing_question_bank")
      .select("question_text")
      .eq("exam_id", params.examId)
      .eq("is_active", true)
      .in("question_text", chunk);

    if (error) {
      console.warn(
        "[testing-autogen] Existing-text dedupe query failed; continuing without DB dedupe.",
        toSafeErrorRecord(error),
      );
      return new Set<string>();
    }

    for (const row of data ?? []) {
      const text = (row as { question_text?: unknown }).question_text;
      if (typeof text === "string" && text.trim().length > 0) {
        fingerprints.add(questionTextFingerprint(text));
      }
    }
  }

  return fingerprints;
}

async function filterQuestionsAlreadyInBank(params: {
  supabase: SupabaseClient;
  examId: string;
  questions: GeneratedQuestion[];
  limit: number;
}) {
  const dbFingerprints = await fetchExistingQuestionTextFingerprints({
    supabase: params.supabase,
    examId: params.examId,
    texts: params.questions.map((entry) => entry.questionText),
  });

  const selected: GeneratedQuestion[] = [];
  const localFingerprints = new Set<string>();
  for (const question of params.questions) {
    const key = questionTextFingerprint(question.questionText);
    if (dbFingerprints.has(key) || localFingerprints.has(key)) continue;
    localFingerprints.add(key);
    selected.push(question);
    if (selected.length >= params.limit) break;
  }

  return selected;
}

function buildRuleBasedQuestion(params: {
  examName: string;
  domainName: string;
  sequence: number;
  seedOffset: number;
}): GeneratedQuestion {
  const variant = params.sequence + params.seedOffset;
  const stems = [
    `In ${params.examName}, which choice best applies ${params.domainName} principles in scenario ${variant + 1}?`,
    `A learner misses a ${params.domainName} item in ${params.examName}. What is the strongest immediate correction in scenario ${variant + 1}?`,
    `For ${params.examName}, which approach is most defensible for ${params.domainName} in scenario ${variant + 1}?`,
    `In a timed ${params.examName} drill, which action best demonstrates ${params.domainName} mastery in scenario ${variant + 1}?`,
  ];

  const correctChoices = [
    `Define constraints first, then validate each step against ${params.domainName} requirements.`,
    `Use a short checklist tied to ${params.domainName} before selecting a final answer.`,
    `Compare alternatives with evidence and choose the option that best fits ${params.domainName}.`,
    `Verify assumptions and run one final cross-check against ${params.domainName} objectives.`,
  ];

  const distractors = [
    "Pick the first plausible option and skip verification to save time.",
    "Ignore constraints and prioritize whichever answer sounds most confident.",
    "Treat all options as equivalent and guess quickly under pressure.",
    "Delay analysis until after submission and avoid structured review.",
    "Use keyword matching only and ignore the scenario context.",
    "Focus on speed alone and remove all quality checks.",
  ];

  const correctText = correctChoices[variant % correctChoices.length];
  const wrongA = distractors[(variant + 1) % distractors.length];
  const wrongB = distractors[(variant + 3) % distractors.length];
  const wrongC = distractors[(variant + 5) % distractors.length];

  const options = [wrongA, wrongB, wrongC];
  const correctIndex = variant % 4;
  options.splice(correctIndex, 0, correctText);

  return {
    domain: params.domainName,
    questionText: stems[variant % stems.length],
    options,
    correctIndex,
    explanation: `This option is strongest because it preserves evidence-based reasoning within ${params.domainName}.`,
    difficulty: Math.min(0.9, 0.38 + ((variant % 7) * 0.07)),
  };
}

function generateRuleBasedQuestions(params: {
  examName: string;
  blueprint: unknown;
  questionCount: number;
  seed: number;
}) {
  const domains = parseBlueprintDomains(params.blueprint);
  const allocated = allocateDomainCounts(params.questionCount, domains);

  const generated: GeneratedQuestion[] = [];
  let sequence = Math.max(0, Math.floor(params.seed));
  for (const domain of allocated) {
    for (let i = 0; i < domain.count; i += 1) {
      generated.push(
        buildRuleBasedQuestion({
          examName: params.examName,
          domainName: domain.name,
          sequence,
          seedOffset: Math.max(1, Math.floor(params.seed % 997)),
        }),
      );
      sequence += 1;
    }
  }

  return generated.map(normalizeGeneratedQuestion).filter((entry): entry is GeneratedQuestion => Boolean(entry));
}

async function generateOpenAiQuestions(params: {
  examName: string;
  examCode: string;
  blueprint: unknown;
  questionCount: number;
}) {
  if (!serverEnv.OPENAI_API_KEY || params.questionCount <= 0) {
    return [] as GeneratedQuestion[];
  }

  const domains = parseBlueprintDomains(params.blueprint);
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
        temperature: 0.45,
        max_tokens: 1800,
        response_format: { type: "json_object" },
        messages: [
          {
            role: "system",
            content:
              "You generate exam-quality multiple-choice questions. Return valid JSON only. No markdown.",
          },
          {
            role: "user",
            content: JSON.stringify({
              task: "Generate new MCQs to replenish an exam question bank.",
              constraints: {
                language: "English",
                questionCount: params.questionCount,
                optionsPerQuestion: 4,
                avoidCopyrightedText: true,
                style: "original paraphrased exam-like prompts",
              },
              exam: {
                examCode: params.examCode,
                examName: params.examName,
                blueprintDomains: domains,
              },
              requiredJsonShape: {
                questions: [
                  {
                    domain: "string",
                    questionText: "string",
                    options: ["string", "string", "string", "string"],
                    correctIndex: 0,
                    explanation: "string",
                    difficulty: 0.5,
                  },
                ],
              },
            }),
          },
        ],
      }),
      signal: controller.signal,
    });

    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(
        payload?.error?.message ||
          payload?.message ||
          `OpenAI question generation failed (${response.status})`,
      );
    }

    const rawContent = payload?.choices?.[0]?.message?.content;
    if (typeof rawContent !== "string" || rawContent.trim().length === 0) {
      throw new Error("OpenAI question generation returned empty content.");
    }

    const parsedJson = JSON.parse(cleanupJsonString(rawContent));
    const parsed = generatedQuestionEnvelopeSchema.parse(parsedJson);

    return parsed.questions
      .map((entry) =>
        normalizeGeneratedQuestion({
          domain: entry.domain,
          questionText: entry.questionText,
          options: entry.options,
          correctIndex: entry.correctIndex,
          explanation: entry.explanation,
          difficulty: entry.difficulty ?? 0.5,
        }),
      )
      .filter((entry): entry is GeneratedQuestion => Boolean(entry))
      .slice(0, params.questionCount);
  } finally {
    clearTimeout(timer);
  }
}

function toQuestionBankRows(params: {
  exam: EnsureQuestionBankSupplyParams["exam"];
  questions: GeneratedQuestion[];
  generationMode: "openai" | "rule_based";
}) {
  const reviewedAt = new Date().toISOString();
  const sourceUrl = `internal://testing-blueprint/${params.exam.examCode}/v${params.exam.version}`;
  const provenance =
    params.generationMode === "openai"
      ? "ai_on_demand_generated"
      : "rule_based_on_demand_generated";
  const derivationMethod =
    params.generationMode === "openai"
      ? "ai_generated_from_blueprint"
      : "original_from_blueprint";

  return params.questions.map((question, index) => {
    const answer = question.options[question.correctIndex] ?? question.options[0];
    return {
      exam_id: params.exam.id,
      domain: question.domain,
      difficulty: question.difficulty,
      question_text: question.questionText,
      question_text_pl: null,
      options: question.options,
      options_pl: null,
      correct_answer_hash: hashTestingAnswer(answer),
      explanation: question.explanation,
      explanation_pl: null,
      source_blueprint: sourceUrl,
      provenance,
      tags: [
        toTag(params.exam.examCode),
        toTag(question.domain),
        "on-demand",
        params.generationMode === "openai" ? "ai-generated" : "rule-based",
        "license-safe",
      ].filter((entry) => entry.length > 0),
      version: params.exam.version,
      is_active: true,
      source_type: "internal_authoring",
      source_name: `${params.exam.name} blueprint`,
      source_url: sourceUrl,
      license_type: "internal-generated",
      commercial_use_allowed: true,
      derivation_method: derivationMethod,
      review_status: "approved",
      reviewed_at: reviewedAt,
      exam_code: params.exam.examCode,
      objective_code: buildObjectiveCode(question.domain, index + 1),
    } as QuestionBankInsertRow;
  });
}

function isMissingColumnError(error: unknown) {
  if (!error || typeof error !== "object") return false;
  const maybe = error as { code?: unknown; message?: unknown };
  const code = String(maybe.code ?? "");
  const message = String(maybe.message ?? "").toLowerCase();
  return (
    code === "42703" ||
    message.includes("could not find the") ||
    (message.includes("column") && message.includes("does not exist")) ||
    (message.includes("schema cache") && message.includes("column"))
  );
}

function stripGovernanceColumns(row: QuestionBankInsertRow) {
  const copy = { ...row } as Record<string, unknown>;
  delete copy.source_type;
  delete copy.source_name;
  delete copy.source_url;
  delete copy.license_type;
  delete copy.commercial_use_allowed;
  delete copy.derivation_method;
  delete copy.review_status;
  delete copy.reviewed_at;
  delete copy.exam_code;
  delete copy.objective_code;
  return copy;
}

async function insertRows(supabase: SupabaseClient, rows: QuestionBankInsertRow[]) {
  if (rows.length === 0) return 0;
  const { error } = await supabase.from("testing_question_bank").insert(rows);
  if (!error) return rows.length;

  if (isMissingColumnError(error)) {
    const fallbackRows = rows.map(stripGovernanceColumns);
    const { error: fallbackError } = await supabase
      .from("testing_question_bank")
      .insert(fallbackRows);
    if (!fallbackError) return fallbackRows.length;
    throw fallbackError;
  }

  throw error;
}

async function ensureQuestionBankSupplyInternal(
  params: EnsureQuestionBankSupplyParams,
): Promise<EnsureQuestionBankSupplyResult> {
  const desiredCount = Math.max(0, Math.min(MAX_ON_DEMAND_GENERATION, Math.floor(params.neededCount)));
  if (desiredCount <= 0) {
    return { inserted: 0, generationMode: "none" };
  }

  const allowOpenAi = params.allowOpenAi !== false && Boolean(serverEnv.OPENAI_API_KEY);
  let aiQuestions: GeneratedQuestion[] = [];

  if (allowOpenAi) {
    try {
      aiQuestions = await generateOpenAiQuestions({
        examName: params.exam.name,
        examCode: params.exam.examCode,
        blueprint: params.exam.blueprint,
        questionCount: desiredCount,
      });
    } catch (error) {
      console.warn("[testing-autogen] OpenAI generation failed, falling back to rule-based.", toSafeErrorRecord(error));
    }
  }

  const normalizedAi = aiQuestions.slice(0, desiredCount);
  const generationSeed = Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 2048);
  const ruleBased: GeneratedQuestion[] = [];
  let remaining = Math.max(0, desiredCount - normalizedAi.length);
  let attempts = 0;
  while (remaining > 0 && attempts < 3) {
    const generatedChunk = generateRuleBasedQuestions({
      examName: params.exam.name,
      blueprint: params.exam.blueprint,
      questionCount: remaining,
      seed: generationSeed + (attempts * 997),
    });
    ruleBased.push(...generatedChunk);
    const dedupedPreview = dedupeQuestions([...normalizedAi, ...ruleBased]).slice(0, desiredCount);
    remaining = Math.max(0, desiredCount - dedupedPreview.length);
    attempts += 1;
  }

  let candidatePool = dedupeQuestions([...normalizedAi, ...ruleBased]);
  let combined = await filterQuestionsAlreadyInBank({
    supabase: params.supabase,
    examId: params.exam.id,
    questions: candidatePool,
    limit: desiredCount,
  });

  let refillAttempt = 0;
  while (combined.length < desiredCount && refillAttempt < 3) {
    const refillQuestions = generateRuleBasedQuestions({
      examName: params.exam.name,
      blueprint: params.exam.blueprint,
      questionCount: Math.max(desiredCount, desiredCount - combined.length + 12),
      seed: generationSeed + 5000 + (refillAttempt * 1931),
    });
    candidatePool = dedupeQuestions([...candidatePool, ...refillQuestions]);
    combined = await filterQuestionsAlreadyInBank({
      supabase: params.supabase,
      examId: params.exam.id,
      questions: candidatePool,
      limit: desiredCount,
    });
    refillAttempt += 1;
  }

  if (combined.length === 0) {
    return { inserted: 0, generationMode: "none" };
  }

  const generationMode: "openai" | "rule_based" =
    normalizedAi.length > 0 ? "openai" : "rule_based";

  const rows = toQuestionBankRows({
    exam: params.exam,
    questions: combined,
    generationMode,
  });

  const inserted = await insertRows(params.supabase, rows);
  return {
    inserted,
    generationMode,
  };
}

export async function ensureQuestionBankSupply(
  params: EnsureQuestionBankSupplyParams,
): Promise<EnsureQuestionBankSupplyResult> {
  const lockKey = params.exam.id;
  const inFlight = supplyGenerationInFlight.get(lockKey);
  if (inFlight) {
    return inFlight;
  }

  const task = ensureQuestionBankSupplyInternal(params);
  supplyGenerationInFlight.set(lockKey, task);
  void task.finally(() => {
    if (supplyGenerationInFlight.get(lockKey) === task) {
      supplyGenerationInFlight.delete(lockKey);
    }
  });
  return task;
}
