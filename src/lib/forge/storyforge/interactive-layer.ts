/**
 * StoryForge Cinema — Interactive Layer Service
 *
 * Generates educational interactive overlays for cinematic scenes:
 *   - Vocabulary hotspots: tap-to-define words with age-appropriate definitions
 *   - Comprehension quizzes: multiple-choice questions at story checkpoints
 *   - Branching paths: narrative choices for Tier B+ content
 *
 * Uses LLM (Ollama local → OpenAI fallback) to generate contextual,
 * age-appropriate educational content aligned with the scene narrative.
 *
 * Cache: storyforge/{bookSlug}/interactive/{chapterNumber}-{sceneIndex}.json
 */

import { OllamaManager } from "@/lib/forge/ollama-manager";
import { serverEnv } from "@/lib/config/env";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import type { Scene, ContentTier } from "./scene-decomp";
import type { AgeGroup } from "@/lib/audiobooks/types";

// ── Types ──────────────────────────────────────────────────────────────────

/** A tappable vocabulary word with definition and context */
export interface VocabularyHotspot {
  /** The word as it appears in the narration text */
  word: string;
  /** Age-appropriate definition */
  definition: string;
  /** The word used in a simple sentence */
  exampleSentence: string;
  /** Part of speech */
  partOfSpeech: "noun" | "verb" | "adjective" | "adverb" | "other";
  /** Difficulty level (1=easy, 5=advanced) */
  difficulty: number;
  /** Character offset in narrationText where the word appears */
  charOffset: number;
}

/** A multiple-choice comprehension question */
export interface ComprehensionQuestion {
  /** The question text */
  question: string;
  /** 4 answer choices */
  choices: string[];
  /** Index of the correct answer (0-3) */
  correctIndex: number;
  /** Brief explanation shown after answering */
  explanation: string;
  /** Bloom's taxonomy level */
  bloomLevel: "remember" | "understand" | "apply" | "analyze";
}

/** A narrative branching choice for interactive storytelling */
export interface BranchingChoice {
  /** The choice prompt shown to the learner */
  prompt: string;
  /** 2-3 choices */
  options: Array<{
    /** Choice label */
    label: string;
    /** Brief description of what happens */
    consequence: string;
    /** Whether this follows the original story */
    isCanonical: boolean;
  }>;
  /** Which scene index to jump to for the canonical path */
  canonicalNextScene: number;
}

/** Complete interactive overlay for a single scene */
export interface InteractiveOverlay {
  /** Scene index this overlay belongs to */
  sceneIndex: number;
  /** Tappable vocabulary hotspots */
  vocabularyHotspots: VocabularyHotspot[];
  /** Comprehension questions (shown at checkpoint scenes) */
  comprehensionQuestions: ComprehensionQuestion[];
  /** Branching choices (Tier B+ only) */
  branchingChoices: BranchingChoice[];
  /** Estimated engagement time added by interactive elements (seconds) */
  interactionTimeSec: number;
}

/** Request to generate interactive overlays */
export interface GenerateInteractiveRequest {
  bookSlug: string;
  chapterNumber: number;
  scenes: Scene[];
  ageGroup: AgeGroup;
  contentTier: ContentTier;
  /** Skip cache and regenerate */
  skipCache?: boolean;
  /** Force a specific provider */
  forceProvider?: "ollama" | "openai";
}

/** Result of interactive layer generation */
export interface InteractiveLayerResult {
  bookSlug: string;
  chapterNumber: number;
  overlays: InteractiveOverlay[];
  totalVocabularyWords: number;
  totalComprehensionQuestions: number;
  totalBranchingPoints: number;
  provider: "ollama" | "openai" | "fallback";
  model: string;
}

// ── Constants ──────────────────────────────────────────────────────────────

const CACHE_BUCKET = "tts-audio";
const CACHE_PREFIX = "storyforge";
const OPENAI_MODEL = "gpt-4o-mini";

/** Vocabulary words per scene by age group */
const VOCAB_COUNT: Record<AgeGroup, { min: number; max: number }> = {
  children: { min: 2, max: 4 },
  teen: { min: 3, max: 6 },
  adult: { min: 3, max: 5 },
  "all-ages": { min: 2, max: 5 },
};

/** Comprehension questions per checkpoint by age group */
const QUIZ_COUNT: Record<AgeGroup, number> = {
  children: 2,
  teen: 3,
  adult: 3,
  "all-ages": 2,
};

// ── Cache Helpers ──────────────────────────────────────────────────────────

function overlayCacheKey(bookSlug: string, chapterNumber: number, sceneIndex: number): string {
  const ch = String(chapterNumber).padStart(3, "0");
  return `${CACHE_PREFIX}/${bookSlug}/interactive/ch${ch}-scene${sceneIndex}.json`;
}

function chapterOverlayCacheKey(bookSlug: string, chapterNumber: number): string {
  const ch = String(chapterNumber).padStart(3, "0");
  return `${CACHE_PREFIX}/${bookSlug}/interactive/ch${ch}-all.json`;
}

async function getCachedOverlays(
  bookSlug: string,
  chapterNumber: number,
): Promise<InteractiveOverlay[] | null> {
  try {
    const admin = createSupabaseAdminClient();
    const key = chapterOverlayCacheKey(bookSlug, chapterNumber);
    const { data, error } = await admin.storage.from(CACHE_BUCKET).download(key);
    if (error || !data) return null;
    const text = await data.text();
    return JSON.parse(text) as InteractiveOverlay[];
  } catch {
    return null;
  }
}

async function setCachedOverlays(
  bookSlug: string,
  chapterNumber: number,
  overlays: InteractiveOverlay[],
): Promise<boolean> {
  try {
    const admin = createSupabaseAdminClient();
    const key = chapterOverlayCacheKey(bookSlug, chapterNumber);
    const json = JSON.stringify(overlays, null, 2);

    const { error } = await admin.storage.from(CACHE_BUCKET).upload(
      key,
      new Blob([json], { type: "application/json" }),
      {
        contentType: "application/json",
        cacheControl: "public, max-age=86400",
        upsert: true,
      },
    );

    // Also store per-scene files for individual scene loading
    for (const overlay of overlays) {
      const sceneKey = overlayCacheKey(bookSlug, chapterNumber, overlay.sceneIndex);
      await admin.storage.from(CACHE_BUCKET).upload(
        sceneKey,
        new Blob([JSON.stringify(overlay, null, 2)], { type: "application/json" }),
        {
          contentType: "application/json",
          cacheControl: "public, max-age=86400",
          upsert: true,
        },
      );
    }

    return !error;
  } catch {
    return false;
  }
}

// ── Prompt Construction ────────────────────────────────────────────────────

function buildInteractiveSystemPrompt(ageGroup: AgeGroup, contentTier: ContentTier): string {
  const ageDesc =
    ageGroup === "children" ? "children ages 4-8"
      : ageGroup === "teen" ? "teenagers ages 12-17"
        : ageGroup === "adult" ? "adult learners"
          : "learners of all ages";

  const vocabRange = VOCAB_COUNT[ageGroup];
  const quizCount = QUIZ_COUNT[ageGroup];
  const hasBranching = contentTier === "B" || contentTier === "C" || contentTier === "D";

  return `You are an educational content designer for an interactive reading platform for ${ageDesc}.

For each scene, generate:

1. VOCABULARY HOTSPOTS (${vocabRange.min}-${vocabRange.max} per scene):
   - Select words that are educational but not so obscure they frustrate the reader
   - Definitions must be age-appropriate and concise (1 sentence)
   - Example sentences should be simple and relatable
   - Include the character offset where the word first appears in the narration text
   - Difficulty: 1 (basic) to 5 (advanced)

2. COMPREHENSION QUESTIONS (${quizCount} per checkpoint scene, 0 for non-checkpoint scenes):
   - Questions should test understanding of the scene's events and themes
   - Mix Bloom's taxonomy levels: remember, understand, apply, analyze
   - All 4 choices must be plausible — avoid obviously wrong options
   - Explanations should teach, not just confirm the answer

${hasBranching ? `3. BRANCHING CHOICES (1 per checkpoint scene):
   - Offer 2-3 narrative choices at key story moments
   - One choice should be the canonical (original story) path
   - Others can explore "what if" scenarios
   - Each option needs a brief consequence description` : "3. BRANCHING CHOICES: Not applicable for this content tier. Return empty array."}

CRITICAL RULES:
- All content must be child-safe and educationally appropriate
- Questions should encourage critical thinking, not just recall
- Vocabulary difficulty must match the age group
- Character offsets must be accurate within the narration text

Respond with valid JSON only. No markdown, no explanation.`;
}

function buildScenePrompt(scene: Scene, isCheckpoint: boolean, ageGroup: AgeGroup): string {
  const vocabRange = VOCAB_COUNT[ageGroup];

  return `Generate interactive overlay for Scene ${scene.index} ("${scene.title}").

${isCheckpoint ? "This scene IS a comprehension checkpoint — include quiz questions." : "This scene is NOT a checkpoint — skip quiz questions (empty array)."}

Narration text:
---
${scene.narrationText}
---

Existing vocabulary suggestions from decomposition: ${scene.vocabularyWords.join(", ")}

Return JSON:
{
  "vocabularyHotspots": [
    {
      "word": "curious",
      "definition": "Wanting to know or learn about something.",
      "exampleSentence": "The cat was curious about the new toy.",
      "partOfSpeech": "adjective",
      "difficulty": 2,
      "charOffset": 42
    }
  ],
  "comprehensionQuestions": [
    {
      "question": "Why did the character do X?",
      "choices": ["Because A", "Because B", "Because C", "Because D"],
      "correctIndex": 1,
      "explanation": "The character did X because B, as shown when...",
      "bloomLevel": "understand"
    }
  ],
  "branchingChoices": []
}

Generate ${vocabRange.min}-${vocabRange.max} vocabulary hotspots. Word offsets must match the narration text above.`;
}

// ── Provider: Ollama (Local LLM) ───────────────────────────────────────────

async function generateWithOllama(
  scene: Scene,
  isCheckpoint: boolean,
  ageGroup: AgeGroup,
  contentTier: ContentTier,
): Promise<{ overlay: InteractiveOverlay; model: string } | null> {
  const ollama = new OllamaManager();

  if (!(await ollama.isHealthy())) return null;

  const systemPrompt = buildInteractiveSystemPrompt(ageGroup, contentTier);
  const scenePrompt = buildScenePrompt(scene, isCheckpoint, ageGroup);

  const result = await ollama.generate(scenePrompt, {
    task: "general",
    system: systemPrompt,
    temperature: 0.4,
    maxTokens: 3072,
  });

  if (!result?.text) return null;

  try {
    const parsed = extractJson(result.text);
    if (!parsed) return null;

    return {
      overlay: normalizeOverlay(parsed, scene),
      model: result.model,
    };
  } catch {
    return null;
  }
}

// ── Provider: OpenAI ───────────────────────────────────────────────────────

async function generateWithOpenAI(
  scene: Scene,
  isCheckpoint: boolean,
  ageGroup: AgeGroup,
  contentTier: ContentTier,
): Promise<{ overlay: InteractiveOverlay; model: string } | null> {
  const apiKey = serverEnv.OPENAI_MEDIA_API_KEY ?? serverEnv.OPENAI_API_KEY;
  if (!apiKey) return null;

  const systemPrompt = buildInteractiveSystemPrompt(ageGroup, contentTier);
  const scenePrompt = buildScenePrompt(scene, isCheckpoint, ageGroup);

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: scenePrompt },
      ],
      temperature: 0.3,
      max_tokens: 3072,
      response_format: { type: "json_object" },
    }),
  });

  if (!response.ok) return null;

  const data = await response.json();
  const content = data.choices?.[0]?.message?.content;
  if (!content) return null;

  try {
    const parsed = JSON.parse(content);
    return {
      overlay: normalizeOverlay(parsed, scene),
      model: OPENAI_MODEL,
    };
  } catch {
    return null;
  }
}

// ── JSON Extraction & Normalization ────────────────────────────────────────

function extractJson(text: string): Record<string, unknown> | null {
  try {
    return JSON.parse(text);
  } catch { /* continue */ }

  const fenceMatch = text.match(/```(?:json)?\s*\n?([\s\S]*?)\n?```/);
  if (fenceMatch?.[1]) {
    try {
      return JSON.parse(fenceMatch[1]);
    } catch { /* continue */ }
  }

  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start !== -1 && end > start) {
    try {
      return JSON.parse(text.slice(start, end + 1));
    } catch { /* give up */ }
  }

  return null;
}

const VALID_POS = new Set(["noun", "verb", "adjective", "adverb", "other"]);
const VALID_BLOOM = new Set(["remember", "understand", "apply", "analyze"]);

function normalizeOverlay(raw: Record<string, unknown>, scene: Scene): InteractiveOverlay {
  const hotspots: VocabularyHotspot[] = [];
  const questions: ComprehensionQuestion[] = [];
  const branches: BranchingChoice[] = [];

  // Vocabulary hotspots
  if (Array.isArray(raw.vocabularyHotspots)) {
    for (const h of raw.vocabularyHotspots as Record<string, unknown>[]) {
      const word = String(h.word ?? "").trim();
      if (!word) continue;

      // Validate/fix charOffset
      let charOffset = typeof h.charOffset === "number" ? h.charOffset : -1;
      if (charOffset < 0) {
        const idx = scene.narrationText.toLowerCase().indexOf(word.toLowerCase());
        charOffset = idx >= 0 ? idx : 0;
      }

      hotspots.push({
        word,
        definition: String(h.definition ?? ""),
        exampleSentence: String(h.exampleSentence ?? ""),
        partOfSpeech: VALID_POS.has(String(h.partOfSpeech))
          ? (h.partOfSpeech as VocabularyHotspot["partOfSpeech"])
          : "other",
        difficulty: typeof h.difficulty === "number"
          ? Math.max(1, Math.min(5, Math.round(h.difficulty)))
          : 2,
        charOffset,
      });
    }
  }

  // Comprehension questions
  if (Array.isArray(raw.comprehensionQuestions)) {
    for (const q of raw.comprehensionQuestions as Record<string, unknown>[]) {
      const question = String(q.question ?? "").trim();
      if (!question) continue;

      const choices = Array.isArray(q.choices)
        ? (q.choices as unknown[]).map(String).slice(0, 4)
        : [];

      if (choices.length < 2) continue;
      // Pad to 4 choices if needed
      while (choices.length < 4) choices.push(`Option ${choices.length + 1}`);

      const correctIndex = typeof q.correctIndex === "number"
        ? Math.max(0, Math.min(3, q.correctIndex))
        : 0;

      questions.push({
        question,
        choices,
        correctIndex,
        explanation: String(q.explanation ?? ""),
        bloomLevel: VALID_BLOOM.has(String(q.bloomLevel))
          ? (q.bloomLevel as ComprehensionQuestion["bloomLevel"])
          : "understand",
      });
    }
  }

  // Branching choices
  if (Array.isArray(raw.branchingChoices)) {
    for (const b of raw.branchingChoices as Record<string, unknown>[]) {
      const prompt = String(b.prompt ?? "").trim();
      if (!prompt) continue;

      const options = Array.isArray(b.options)
        ? (b.options as Record<string, unknown>[]).map((o) => ({
          label: String(o.label ?? ""),
          consequence: String(o.consequence ?? ""),
          isCanonical: Boolean(o.isCanonical ?? false),
        }))
        : [];

      if (options.length < 2) continue;

      branches.push({
        prompt,
        options,
        canonicalNextScene: typeof b.canonicalNextScene === "number"
          ? b.canonicalNextScene
          : scene.index + 1,
      });
    }
  }

  // Estimate interaction time: ~5s per vocab word, ~20s per question, ~10s per branch
  const interactionTimeSec =
    hotspots.length * 5 + questions.length * 20 + branches.length * 10;

  return {
    sceneIndex: scene.index,
    vocabularyHotspots: hotspots,
    comprehensionQuestions: questions,
    branchingChoices: branches,
    interactionTimeSec,
  };
}

// ── Fallback Generator ─────────────────────────────────────────────────────

/**
 * Create minimal interactive overlay from scene vocabulary words
 * when LLM providers are unavailable.
 */
function createFallbackOverlay(scene: Scene): InteractiveOverlay {
  const hotspots: VocabularyHotspot[] = scene.vocabularyWords.map((word) => {
    const idx = scene.narrationText.toLowerCase().indexOf(word.toLowerCase());
    return {
      word,
      definition: "",
      exampleSentence: "",
      partOfSpeech: "other" as const,
      difficulty: 2,
      charOffset: idx >= 0 ? idx : 0,
    };
  });

  return {
    sceneIndex: scene.index,
    vocabularyHotspots: hotspots,
    comprehensionQuestions: [],
    branchingChoices: [],
    interactionTimeSec: hotspots.length * 5,
  };
}

// ── Main API ───────────────────────────────────────────────────────────────

/**
 * Generate interactive overlays for all scenes in a chapter.
 *
 * Provider fallback: Ollama local → OpenAI GPT-4o-mini → raw vocabulary fallback
 *
 * Cached per-chapter and per-scene in Supabase Storage at:
 *   storyforge/{bookSlug}/interactive/ch{NNN}-all.json
 *   storyforge/{bookSlug}/interactive/ch{NNN}-scene{N}.json
 */
export async function generateInteractiveLayer(
  request: GenerateInteractiveRequest,
): Promise<InteractiveLayerResult> {
  // 1. Check cache
  if (!request.skipCache) {
    const cached = await getCachedOverlays(request.bookSlug, request.chapterNumber);
    if (cached) {
      return {
        bookSlug: request.bookSlug,
        chapterNumber: request.chapterNumber,
        overlays: cached,
        totalVocabularyWords: cached.reduce((s, o) => s + o.vocabularyHotspots.length, 0),
        totalComprehensionQuestions: cached.reduce((s, o) => s + o.comprehensionQuestions.length, 0),
        totalBranchingPoints: cached.reduce((s, o) => s + o.branchingChoices.length, 0),
        provider: "ollama",
        model: "cached",
      };
    }
  }

  // 2. Generate overlay for each scene
  const overlays: InteractiveOverlay[] = [];
  let usedProvider: "ollama" | "openai" | "fallback" = "fallback";
  let usedModel = "fallback";

  for (const scene of request.scenes) {
    const isCheckpoint = scene.comprehensionCheckpoint;
    let result: { overlay: InteractiveOverlay; model: string } | null = null;

    // Try Ollama first
    if (request.forceProvider !== "openai") {
      result = await generateWithOllama(scene, isCheckpoint, request.ageGroup, request.contentTier);
      if (result) usedProvider = "ollama";
    }

    // Fall back to OpenAI
    if (!result && request.forceProvider !== "ollama") {
      result = await generateWithOpenAI(scene, isCheckpoint, request.ageGroup, request.contentTier);
      if (result) usedProvider = "openai";
    }

    if (result) {
      usedModel = result.model;
      overlays.push(result.overlay);
    } else {
      overlays.push(createFallbackOverlay(scene));
    }
  }

  // 3. Cache results
  await setCachedOverlays(request.bookSlug, request.chapterNumber, overlays);

  return {
    bookSlug: request.bookSlug,
    chapterNumber: request.chapterNumber,
    overlays,
    totalVocabularyWords: overlays.reduce((s, o) => s + o.vocabularyHotspots.length, 0),
    totalComprehensionQuestions: overlays.reduce((s, o) => s + o.comprehensionQuestions.length, 0),
    totalBranchingPoints: overlays.reduce((s, o) => s + o.branchingChoices.length, 0),
    provider: usedProvider,
    model: usedModel,
  };
}
