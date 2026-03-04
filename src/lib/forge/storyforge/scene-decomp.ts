/**
 * StoryForge Cinema — Scene Decomposition Service
 *
 * Converts public-domain literary text into structured cinematic scene manifests
 * using LLM analysis. Each scene contains visual direction, narration cues,
 * character lists, mood tags, and estimated duration — ready for downstream
 * keyframe generation (Imagen 4), video assembly (Veo 3.1), TTS narration,
 * and interactive overlay injection.
 *
 * Provider chain:
 *   1. Ollama local LLM (free, GPU-scheduled)
 *   2. OpenAI GPT-4o (cloud fallback, paid tier only)
 *
 * Cache: storyforge/{bookSlug}/scenes.json in Supabase Storage
 */

import { OllamaManager } from "@/lib/forge/ollama-manager";
import { serverEnv } from "@/lib/config/env";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import type { ChapterText, AgeGroup } from "@/lib/audiobooks/types";

// ── Types ──────────────────────────────────────────────────────────────────

/** Content tier determines production scope and runtime behavior */
export type ContentTier =
  | "A" // Children's picture books (2–8 min, 8K)
  | "B" // Chapter books (15–30 min, 8K, branching paths)
  | "C" // Classic novels (30–60 min, 4K–8K, chapter nav)
  | "D"; // Epic works (60–120 min serialized, multi-episode)

/** Camera direction hint for keyframe generation */
export type CameraAngle =
  | "wide-establishing"
  | "medium"
  | "close-up"
  | "overhead"
  | "low-angle"
  | "panning"
  | "tracking"
  | "dutch-angle";

/** Lighting mood for visual consistency */
export type LightingMood =
  | "bright-daylight"
  | "golden-hour"
  | "overcast"
  | "twilight"
  | "moonlit"
  | "candlelit"
  | "dramatic-shadow"
  | "ethereal-glow"
  | "stormy";

/** Scene mood tag — shared with music-score.ts for ambient scoring */
export type SceneMood =
  | "whimsical"
  | "adventurous"
  | "peaceful"
  | "mysterious"
  | "tense"
  | "joyful"
  | "melancholy"
  | "dramatic"
  | "playful"
  | "triumphant"
  | "dark"
  | "romantic"
  | "contemplative"
  | "comedic";

/** A character appearing in a scene */
export interface SceneCharacter {
  name: string;
  description: string;
  /** Whether this character has dialogue in the scene */
  hasDiologue: boolean;
  /** Visual cue for consistent character rendering */
  visualCue: string;
}

/** A single decomposed scene from the source text */
export interface Scene {
  /** 0-indexed scene number within the chapter */
  index: number;
  /** Short descriptive title (e.g., "Alice Follows the Rabbit") */
  title: string;
  /** Cinematic scene description for keyframe prompt generation */
  visualDescription: string;
  /** Camera direction hints for image/video generation */
  cameraAngle: CameraAngle;
  /** Lighting mood for visual consistency */
  lighting: LightingMood;
  /** Scene mood tags for music scoring */
  moods: SceneMood[];
  /** Characters present in this scene */
  characters: SceneCharacter[];
  /** The narration text (subset of original text to be spoken) */
  narrationText: string;
  /** Estimated duration in seconds when narrated */
  estimatedDurationSec: number;
  /** Key vocabulary words for interactive hotspots */
  vocabularyWords: string[];
  /** Whether this scene is a good point for a comprehension check */
  comprehensionCheckpoint: boolean;
  /** The original source text range this scene covers */
  sourceTextRange: {
    /** Paragraph indices from the chapter text */
    startParagraph: number;
    endParagraph: number;
  };
}

/** Chapter-level scene breakdown */
export interface ChapterScenes {
  bookSlug: string;
  chapterNumber: number;
  chapterTitle: string;
  scenes: Scene[];
  totalEstimatedDurationSec: number;
}

/** Full book scene manifest — the primary output of decomposition */
export interface SceneManifest {
  bookSlug: string;
  title: string;
  author: string;
  contentTier: ContentTier;
  ageGroup: AgeGroup;
  chapters: ChapterScenes[];
  totalSceneCount: number;
  totalEstimatedDurationSec: number;
  /** LLM provider used for decomposition */
  provider: "ollama" | "openai";
  /** Model identifier */
  model: string;
  /** When the manifest was generated */
  generatedAt: string;
}

/** Request to decompose a book (or single chapter) into scenes */
export interface DecomposeRequest {
  bookSlug: string;
  title: string;
  author: string;
  ageGroup: AgeGroup;
  contentTier: ContentTier;
  /** Chapter texts to decompose. Provide all chapters for full manifest. */
  chapters: ChapterText[];
  /** Skip Supabase cache and regenerate */
  skipCache?: boolean;
  /** Force a specific provider */
  forceProvider?: "ollama" | "openai";
}

/** Cost estimate for decomposition */
export interface DecompCostEstimate {
  chapters: number;
  totalParagraphs: number;
  estimatedTokens: number;
  estimatedCostUSD: number;
  provider: "ollama" | "openai";
}

// ── Constants ──────────────────────────────────────────────────────────────

const CACHE_BUCKET = "tts-audio"; // shared bucket; path-namespaced
const CACHE_PREFIX = "storyforge";
const OPENAI_DECOMP_MODEL = "gpt-4o-mini";
const WORDS_PER_MINUTE = 150;
const CHARS_PER_TOKEN_ESTIMATE = 4;

/** Target scenes per chapter by content tier */
const SCENES_PER_CHAPTER: Record<ContentTier, { min: number; max: number }> = {
  A: { min: 3, max: 8 },
  B: { min: 5, max: 12 },
  C: { min: 4, max: 10 },
  D: { min: 6, max: 15 },
};

// ── Cache Helpers ──────────────────────────────────────────────────────────

function manifestCacheKey(bookSlug: string): string {
  return `${CACHE_PREFIX}/${bookSlug}/scenes.json`;
}

async function getCachedManifest(bookSlug: string): Promise<SceneManifest | null> {
  try {
    const admin = createSupabaseAdminClient();
    const key = manifestCacheKey(bookSlug);

    const { data, error } = await admin.storage.from(CACHE_BUCKET).download(key);
    if (error || !data) return null;

    const text = await data.text();
    return JSON.parse(text) as SceneManifest;
  } catch {
    return null;
  }
}

async function setCachedManifest(manifest: SceneManifest): Promise<boolean> {
  try {
    const admin = createSupabaseAdminClient();
    const key = manifestCacheKey(manifest.bookSlug);
    const json = JSON.stringify(manifest, null, 2);

    const { error } = await admin.storage.from(CACHE_BUCKET).upload(
      key,
      new Blob([json], { type: "application/json" }),
      {
        contentType: "application/json",
        cacheControl: "public, max-age=86400",
        upsert: true,
      },
    );

    return !error;
  } catch {
    return false;
  }
}

// ── Prompt Construction ────────────────────────────────────────────────────

function buildSystemPrompt(ageGroup: AgeGroup, contentTier: ContentTier): string {
  const ageDesc =
    ageGroup === "children" ? "young children (ages 4-8)"
      : ageGroup === "teen" ? "teenagers (ages 12-17)"
        : ageGroup === "adult" ? "adults"
          : "all ages";

  const tierDesc =
    contentTier === "A" ? "short picture-book film (2-8 minutes total)"
      : contentTier === "B" ? "chapter-book film with branching paths (15-30 minutes)"
        : contentTier === "C" ? "classic novel adaptation (30-60 minutes)"
          : "epic serialized adaptation (60-120 minutes, multi-episode)";

  const sceneRange = SCENES_PER_CHAPTER[contentTier];

  return `You are a cinematic scene decomposition expert for an educational film studio.
Your task is to break literary text into cinematic scenes optimized for ${ageDesc}.
This is a ${tierDesc}.

For each chapter, produce ${sceneRange.min}-${sceneRange.max} scenes.

Each scene MUST include:
- A short, vivid title (5-8 words)
- A detailed visual description for AI image/video generation (30-60 words)
- Camera angle (one of: wide-establishing, medium, close-up, overhead, low-angle, panning, tracking, dutch-angle)
- Lighting mood (one of: bright-daylight, golden-hour, overcast, twilight, moonlit, candlelit, dramatic-shadow, ethereal-glow, stormy)
- 1-3 mood tags (from: whimsical, adventurous, peaceful, mysterious, tense, joyful, melancholy, dramatic, playful, triumphant, dark, romantic, contemplative, comedic)
- Characters present (name + brief visual cue for consistent rendering)
- The narration text (the actual words to be spoken aloud by the TTS narrator)
- 2-5 vocabulary words suitable for educational hotspots
- Whether this is a good comprehension checkpoint (true/false)
- The paragraph range from the source text

CRITICAL RULES:
- Visual descriptions must be child-safe — no violence, gore, or inappropriate content
- Narration text should use the ORIGINAL source text, lightly trimmed for pacing
- Keep vocabulary words appropriate for the age group
- Ensure visual continuity: characters should look consistent across scenes
- Mark comprehension checkpoints at natural story beats (every 3-5 scenes)

Respond with valid JSON only. No markdown, no explanation.`;
}

function buildChapterPrompt(chapter: ChapterText, contentTier: ContentTier): string {
  const text = chapter.paragraphs.join("\n\n");
  const sceneRange = SCENES_PER_CHAPTER[contentTier];

  return `Decompose Chapter ${chapter.chapterNumber} ("${chapter.chapterTitle}") into ${sceneRange.min}-${sceneRange.max} cinematic scenes.

Source text (${chapter.paragraphs.length} paragraphs):
---
${text}
---

Return a JSON object with this exact structure:
{
  "chapterTitle": "${chapter.chapterTitle}",
  "scenes": [
    {
      "index": 0,
      "title": "Scene Title Here",
      "visualDescription": "Detailed visual description for image generation...",
      "cameraAngle": "wide-establishing",
      "lighting": "bright-daylight",
      "moods": ["whimsical", "adventurous"],
      "characters": [
        {
          "name": "Character Name",
          "description": "Brief character description",
          "hasDiologue": true,
          "visualCue": "Young girl in blue dress with blonde hair"
        }
      ],
      "narrationText": "The actual text to be narrated...",
      "estimatedDurationSec": 30,
      "vocabularyWords": ["curious", "peculiar", "wonder"],
      "comprehensionCheckpoint": false,
      "sourceTextRange": { "startParagraph": 0, "endParagraph": 3 }
    }
  ]
}`;
}

// ── Provider: Ollama (Local LLM) ───────────────────────────────────────────

async function decomposeWithOllama(
  chapter: ChapterText,
  ageGroup: AgeGroup,
  contentTier: ContentTier,
): Promise<{ scenes: Scene[]; model: string } | null> {
  const ollama = new OllamaManager();

  if (!(await ollama.isHealthy())) {
    console.warn("[scene-decomp] Ollama not available, skipping local provider");
    return null;
  }

  const systemPrompt = buildSystemPrompt(ageGroup, contentTier);
  const chapterPrompt = buildChapterPrompt(chapter, contentTier);

  // Use long-context model if chapter is large
  const totalChars = chapter.paragraphs.join("").length;
  const task = totalChars > 20_000 ? "summarize" : "general";

  const result = await ollama.generate(chapterPrompt, {
    task,
    system: systemPrompt,
    temperature: 0.4, // Low temp for structured output
    maxTokens: 4096,
  });

  if (!result?.text) return null;

  try {
    const parsed = extractJsonFromResponse(result.text);
    if (!parsed?.scenes || !Array.isArray(parsed.scenes)) return null;

    return {
      scenes: parsed.scenes.map((s: Record<string, unknown>, i: number) =>
        normalizeScene(s, i, chapter),
      ),
      model: result.model,
    };
  } catch (err) {
    console.warn("[scene-decomp] Failed to parse Ollama response:", err);
    return null;
  }
}

// ── Provider: OpenAI GPT-4o ────────────────────────────────────────────────

async function decomposeWithOpenAI(
  chapter: ChapterText,
  ageGroup: AgeGroup,
  contentTier: ContentTier,
): Promise<{ scenes: Scene[]; model: string } | null> {
  const apiKey = serverEnv.OPENAI_MEDIA_API_KEY ?? serverEnv.OPENAI_API_KEY;
  if (!apiKey) {
    console.warn("[scene-decomp] OPENAI_MEDIA_API_KEY / OPENAI_API_KEY not configured");
    return null;
  }

  const systemPrompt = buildSystemPrompt(ageGroup, contentTier);
  const chapterPrompt = buildChapterPrompt(chapter, contentTier);

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: OPENAI_DECOMP_MODEL,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: chapterPrompt },
      ],
      temperature: 0.3,
      max_tokens: 4096,
      response_format: { type: "json_object" },
    }),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    console.warn(`[scene-decomp] OpenAI error ${response.status}: ${body}`);
    return null;
  }

  const data = await response.json();
  const content = data.choices?.[0]?.message?.content;
  if (!content) return null;

  try {
    const parsed = JSON.parse(content);
    if (!parsed?.scenes || !Array.isArray(parsed.scenes)) return null;

    return {
      scenes: parsed.scenes.map((s: Record<string, unknown>, i: number) =>
        normalizeScene(s, i, chapter),
      ),
      model: OPENAI_DECOMP_MODEL,
    };
  } catch (err) {
    console.warn("[scene-decomp] Failed to parse OpenAI response:", err);
    return null;
  }
}

// ── JSON Extraction & Normalization ────────────────────────────────────────

/** Extract JSON from LLM response that may contain markdown fences or extra text */
function extractJsonFromResponse(text: string): Record<string, unknown> | null {
  // Try direct parse first
  try {
    return JSON.parse(text);
  } catch { /* continue */ }

  // Extract from markdown code fences
  const fenceMatch = text.match(/```(?:json)?\s*\n?([\s\S]*?)\n?```/);
  if (fenceMatch?.[1]) {
    try {
      return JSON.parse(fenceMatch[1]);
    } catch { /* continue */ }
  }

  // Find first { ... } block
  const braceStart = text.indexOf("{");
  const braceEnd = text.lastIndexOf("}");
  if (braceStart !== -1 && braceEnd > braceStart) {
    try {
      return JSON.parse(text.slice(braceStart, braceEnd + 1));
    } catch { /* give up */ }
  }

  return null;
}

/** Valid camera angles for validation */
const VALID_CAMERA_ANGLES = new Set<CameraAngle>([
  "wide-establishing", "medium", "close-up", "overhead",
  "low-angle", "panning", "tracking", "dutch-angle",
]);

/** Valid lighting moods for validation */
const VALID_LIGHTING = new Set<LightingMood>([
  "bright-daylight", "golden-hour", "overcast", "twilight",
  "moonlit", "candlelit", "dramatic-shadow", "ethereal-glow", "stormy",
]);

/** Valid scene moods for validation */
const VALID_MOODS = new Set<SceneMood>([
  "whimsical", "adventurous", "peaceful", "mysterious", "tense",
  "joyful", "melancholy", "dramatic", "playful", "triumphant",
  "dark", "romantic", "contemplative", "comedic",
]);

/** Normalize a raw LLM scene object into a validated Scene */
function normalizeScene(
  raw: Record<string, unknown>,
  fallbackIndex: number,
  chapter: ChapterText,
): Scene {
  const narrationText = String(raw.narrationText ?? "");
  const wordCount = narrationText.split(/\s+/).filter(Boolean).length;

  return {
    index: typeof raw.index === "number" ? raw.index : fallbackIndex,
    title: String(raw.title ?? `Scene ${fallbackIndex + 1}`),
    visualDescription: String(raw.visualDescription ?? ""),
    cameraAngle: VALID_CAMERA_ANGLES.has(raw.cameraAngle as CameraAngle)
      ? (raw.cameraAngle as CameraAngle)
      : "medium",
    lighting: VALID_LIGHTING.has(raw.lighting as LightingMood)
      ? (raw.lighting as LightingMood)
      : "bright-daylight",
    moods: Array.isArray(raw.moods)
      ? (raw.moods as string[]).filter((m): m is SceneMood => VALID_MOODS.has(m as SceneMood))
      : ["peaceful"],
    characters: Array.isArray(raw.characters)
      ? (raw.characters as Record<string, unknown>[]).map((c) => ({
        name: String(c.name ?? "Unknown"),
        description: String(c.description ?? ""),
        hasDiologue: Boolean(c.hasDiologue ?? c.hasDialogue ?? false),
        visualCue: String(c.visualCue ?? ""),
      }))
      : [],
    narrationText,
    estimatedDurationSec:
      typeof raw.estimatedDurationSec === "number"
        ? raw.estimatedDurationSec
        : Math.round((wordCount / WORDS_PER_MINUTE) * 60),
    vocabularyWords: Array.isArray(raw.vocabularyWords)
      ? (raw.vocabularyWords as unknown[]).map(String).slice(0, 5)
      : [],
    comprehensionCheckpoint: Boolean(raw.comprehensionCheckpoint ?? false),
    sourceTextRange: {
      startParagraph:
        typeof (raw.sourceTextRange as Record<string, unknown>)?.startParagraph === "number"
          ? (raw.sourceTextRange as Record<string, number>).startParagraph
          : 0,
      endParagraph:
        typeof (raw.sourceTextRange as Record<string, unknown>)?.endParagraph === "number"
          ? (raw.sourceTextRange as Record<string, number>).endParagraph
          : Math.min(fallbackIndex + 3, chapter.paragraphs.length - 1),
    },
  };
}

// ── Main API ───────────────────────────────────────────────────────────────

/**
 * Decompose a book (or subset of chapters) into a cinematic scene manifest.
 *
 * Provider fallback: Ollama local → OpenAI GPT-4o
 *
 * Results are cached in Supabase Storage at:
 *   storyforge/{bookSlug}/scenes.json
 */
export async function decomposeBookToScenes(
  request: DecomposeRequest,
): Promise<SceneManifest> {
  // 1. Check cache
  if (!request.skipCache) {
    const cached = await getCachedManifest(request.bookSlug);
    if (cached) return cached;
  }

  // 2. Decompose each chapter
  const chapterResults: ChapterScenes[] = [];
  let usedProvider: "ollama" | "openai" = "ollama";
  let usedModel = "";

  for (const chapter of request.chapters) {
    let result: { scenes: Scene[]; model: string } | null = null;

    // Try provider chain
    if (request.forceProvider !== "openai") {
      result = await decomposeWithOllama(chapter, request.ageGroup, request.contentTier);
      if (result) usedProvider = "ollama";
    }

    if (!result && request.forceProvider !== "ollama") {
      result = await decomposeWithOpenAI(chapter, request.ageGroup, request.contentTier);
      if (result) usedProvider = "openai";
    }

    if (!result) {
      console.error(`[scene-decomp] All providers failed for chapter ${chapter.chapterNumber}`);
      // Create minimal fallback scenes from paragraphs
      result = {
        scenes: createFallbackScenes(chapter, request.contentTier),
        model: "fallback",
      };
    }

    usedModel = result.model;

    chapterResults.push({
      bookSlug: request.bookSlug,
      chapterNumber: chapter.chapterNumber,
      chapterTitle: chapter.chapterTitle,
      scenes: result.scenes,
      totalEstimatedDurationSec: result.scenes.reduce(
        (sum, s) => sum + s.estimatedDurationSec,
        0,
      ),
    });
  }

  // 3. Build manifest
  const manifest: SceneManifest = {
    bookSlug: request.bookSlug,
    title: request.title,
    author: request.author,
    contentTier: request.contentTier,
    ageGroup: request.ageGroup,
    chapters: chapterResults,
    totalSceneCount: chapterResults.reduce((sum, ch) => sum + ch.scenes.length, 0),
    totalEstimatedDurationSec: chapterResults.reduce(
      (sum, ch) => sum + ch.totalEstimatedDurationSec,
      0,
    ),
    provider: usedProvider,
    model: usedModel,
    generatedAt: new Date().toISOString(),
  };

  // 4. Cache result
  const cached = await setCachedManifest(manifest);
  if (!cached) {
    console.warn("[scene-decomp] Failed to cache manifest, continuing without cache");
  }

  return manifest;
}

// ── Fallback Scene Generator ───────────────────────────────────────────────

/** Create minimal scenes from paragraph groupings when LLM providers fail */
function createFallbackScenes(chapter: ChapterText, contentTier: ContentTier): Scene[] {
  const range = SCENES_PER_CHAPTER[contentTier];
  const targetScenes = Math.min(range.max, Math.max(range.min, Math.ceil(chapter.paragraphs.length / 3)));
  const parasPerScene = Math.ceil(chapter.paragraphs.length / targetScenes);
  const scenes: Scene[] = [];

  for (let i = 0; i < targetScenes && i * parasPerScene < chapter.paragraphs.length; i++) {
    const start = i * parasPerScene;
    const end = Math.min(start + parasPerScene, chapter.paragraphs.length);
    const narration = chapter.paragraphs.slice(start, end).join(" ");
    const wordCount = narration.split(/\s+/).filter(Boolean).length;

    scenes.push({
      index: i,
      title: `${chapter.chapterTitle} — Part ${i + 1}`,
      visualDescription: `Scene from ${chapter.chapterTitle}, depicting the narrative events.`,
      cameraAngle: "medium",
      lighting: "bright-daylight",
      moods: ["peaceful"],
      characters: [],
      narrationText: narration,
      estimatedDurationSec: Math.round((wordCount / WORDS_PER_MINUTE) * 60),
      vocabularyWords: [],
      comprehensionCheckpoint: i === targetScenes - 1,
      sourceTextRange: { startParagraph: start, endParagraph: end - 1 },
    });
  }

  return scenes;
}

// ── Cost Estimation ────────────────────────────────────────────────────────

/**
 * Estimate the cost of decomposing a book.
 * Ollama is free (local). OpenAI GPT-4o-mini is ~$0.15 per 1M input tokens.
 */
export function estimateDecompCost(
  chapters: ChapterText[],
  provider: "ollama" | "openai" = "ollama",
): DecompCostEstimate {
  const totalParagraphs = chapters.reduce((sum, ch) => sum + ch.paragraphs.length, 0);
  const totalChars = chapters.reduce(
    (sum, ch) => sum + ch.paragraphs.join("").length,
    0,
  );
  const estimatedTokens = Math.ceil(totalChars / CHARS_PER_TOKEN_ESTIMATE);

  // GPT-4o-mini: $0.15 per 1M input tokens + $0.60 per 1M output tokens
  const inputCost = provider === "openai" ? (estimatedTokens / 1_000_000) * 0.15 : 0;
  const outputTokensEstimate = chapters.length * 2000; // ~2K tokens per chapter response
  const outputCost = provider === "openai" ? (outputTokensEstimate / 1_000_000) * 0.60 : 0;

  return {
    chapters: chapters.length,
    totalParagraphs,
    estimatedTokens,
    estimatedCostUSD: Number((inputCost + outputCost).toFixed(4)),
    provider,
  };
}
