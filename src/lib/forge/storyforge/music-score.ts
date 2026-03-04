/**
 * StoryForge Cinema — Ambient Music Score Service
 *
 * Generates mood-tagged ambient music for cinematic scenes. Maps scene moods
 * to musical parameters (tempo, key, instrumentation) and generates or selects
 * background music for each scene in a StoryForge film.
 *
 * Current status: Foundation layer with mood taxonomy, scoring parameters,
 * and a royalty-free loop library matcher. The Music AI generation provider
 * is registered as planned — when available, this service will generate
 * custom ambient scores per scene.
 *
 * Cache: storyforge/{bookSlug}/music/{sceneIndex}.mp3 in Supabase Storage
 */

import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import type { SceneMood, Scene, ChapterScenes } from "./scene-decomp";

// ── Types ──────────────────────────────────────────────────────────────────

/** Re-export SceneMood for downstream consumers */
export type SceneMoodTag = SceneMood;

/** Musical key for ambient score */
export type MusicalKey =
  | "C" | "Cm" | "D" | "Dm" | "E" | "Em"
  | "F" | "Fm" | "G" | "Gm" | "A" | "Am"
  | "Bb" | "Bbm" | "Eb" | "Ebm";

/** Instrumentation category */
export type InstrumentCategory =
  | "strings"
  | "piano"
  | "woodwinds"
  | "brass"
  | "percussion"
  | "synth-pad"
  | "music-box"
  | "harp"
  | "guitar"
  | "celesta"
  | "choir";

/** Scoring parameters derived from a scene mood */
export interface ScoreParameters {
  /** BPM range */
  tempoRange: { min: number; max: number };
  /** Suggested musical key */
  suggestedKey: MusicalKey;
  /** Suggested instruments (priority order) */
  instruments: InstrumentCategory[];
  /** Dynamic level (0.0 quiet → 1.0 loud) */
  dynamicLevel: number;
  /** Complexity (0.0 minimal → 1.0 dense) */
  complexity: number;
  /** Whether the score should have a legato/sustained feel */
  legato: boolean;
  /** Reverb amount (0.0 dry → 1.0 cathedral) */
  reverbAmount: number;
}

/** A resolved ambient score for a scene */
export interface AmbientScore {
  /** Scene index within the chapter */
  sceneIndex: number;
  /** Duration in seconds */
  durationSec: number;
  /** The mood tags that drove the score */
  moods: SceneMoodTag[];
  /** Resolved scoring parameters */
  parameters: ScoreParameters;
  /** Audio URL (from cache or generation) */
  audioUrl: string | null;
  /** Source of the audio */
  source: "generated" | "loop-library" | "cached" | "none";
  /** Provider used for generation */
  provider: string;
}

/** Request to generate ambient scores for a chapter's scenes */
export interface GenerateScoreRequest {
  bookSlug: string;
  chapterNumber: number;
  scenes: Scene[];
  /** Skip cache and regenerate */
  skipCache?: boolean;
}

/** Score generation result for a full chapter */
export interface ChapterScoreResult {
  bookSlug: string;
  chapterNumber: number;
  scores: AmbientScore[];
  totalDurationSec: number;
}

// ── Constants ──────────────────────────────────────────────────────────────

const CACHE_BUCKET = "tts-audio";
const CACHE_PREFIX = "storyforge";

// ── Mood → Score Parameter Mapping ─────────────────────────────────────────

/**
 * Mood taxonomy → musical parameters.
 * Each mood maps to specific tempo, key, instrumentation, and dynamics
 * that create the appropriate emotional atmosphere.
 */
const MOOD_SCORE_MAP: Record<SceneMoodTag, ScoreParameters> = {
  whimsical: {
    tempoRange: { min: 100, max: 130 },
    suggestedKey: "F",
    instruments: ["celesta", "woodwinds", "harp", "strings"],
    dynamicLevel: 0.4,
    complexity: 0.5,
    legato: false,
    reverbAmount: 0.4,
  },
  adventurous: {
    tempoRange: { min: 120, max: 150 },
    suggestedKey: "D",
    instruments: ["brass", "strings", "percussion", "woodwinds"],
    dynamicLevel: 0.7,
    complexity: 0.7,
    legato: false,
    reverbAmount: 0.3,
  },
  peaceful: {
    tempoRange: { min: 60, max: 85 },
    suggestedKey: "G",
    instruments: ["piano", "strings", "harp", "woodwinds"],
    dynamicLevel: 0.3,
    complexity: 0.3,
    legato: true,
    reverbAmount: 0.6,
  },
  mysterious: {
    tempoRange: { min: 70, max: 100 },
    suggestedKey: "Dm",
    instruments: ["strings", "synth-pad", "celesta", "woodwinds"],
    dynamicLevel: 0.4,
    complexity: 0.5,
    legato: true,
    reverbAmount: 0.7,
  },
  tense: {
    tempoRange: { min: 90, max: 130 },
    suggestedKey: "Em",
    instruments: ["strings", "percussion", "synth-pad", "brass"],
    dynamicLevel: 0.6,
    complexity: 0.6,
    legato: false,
    reverbAmount: 0.3,
  },
  joyful: {
    tempoRange: { min: 110, max: 140 },
    suggestedKey: "C",
    instruments: ["piano", "strings", "woodwinds", "guitar"],
    dynamicLevel: 0.6,
    complexity: 0.5,
    legato: false,
    reverbAmount: 0.3,
  },
  melancholy: {
    tempoRange: { min: 55, max: 80 },
    suggestedKey: "Am",
    instruments: ["piano", "strings", "choir", "woodwinds"],
    dynamicLevel: 0.3,
    complexity: 0.4,
    legato: true,
    reverbAmount: 0.7,
  },
  dramatic: {
    tempoRange: { min: 80, max: 120 },
    suggestedKey: "Cm",
    instruments: ["strings", "brass", "percussion", "choir"],
    dynamicLevel: 0.8,
    complexity: 0.8,
    legato: false,
    reverbAmount: 0.5,
  },
  playful: {
    tempoRange: { min: 115, max: 145 },
    suggestedKey: "Bb",
    instruments: ["woodwinds", "music-box", "piano", "percussion"],
    dynamicLevel: 0.5,
    complexity: 0.5,
    legato: false,
    reverbAmount: 0.3,
  },
  triumphant: {
    tempoRange: { min: 100, max: 130 },
    suggestedKey: "D",
    instruments: ["brass", "strings", "percussion", "choir"],
    dynamicLevel: 0.9,
    complexity: 0.8,
    legato: false,
    reverbAmount: 0.4,
  },
  dark: {
    tempoRange: { min: 50, max: 80 },
    suggestedKey: "Ebm",
    instruments: ["synth-pad", "strings", "percussion", "choir"],
    dynamicLevel: 0.5,
    complexity: 0.6,
    legato: true,
    reverbAmount: 0.8,
  },
  romantic: {
    tempoRange: { min: 65, max: 95 },
    suggestedKey: "Eb",
    instruments: ["strings", "piano", "harp", "woodwinds"],
    dynamicLevel: 0.4,
    complexity: 0.5,
    legato: true,
    reverbAmount: 0.6,
  },
  contemplative: {
    tempoRange: { min: 55, max: 80 },
    suggestedKey: "Fm",
    instruments: ["piano", "strings", "synth-pad", "guitar"],
    dynamicLevel: 0.3,
    complexity: 0.3,
    legato: true,
    reverbAmount: 0.7,
  },
  comedic: {
    tempoRange: { min: 120, max: 155 },
    suggestedKey: "G",
    instruments: ["woodwinds", "piano", "percussion", "music-box"],
    dynamicLevel: 0.5,
    complexity: 0.6,
    legato: false,
    reverbAmount: 0.2,
  },
};

// ── Score Resolution ───────────────────────────────────────────────────────

/**
 * Resolve scoring parameters for a scene by blending its mood tags.
 * If multiple moods are present, the primary mood (first) dominates
 * and secondary moods influence dynamics and complexity.
 */
export function resolveScoreParameters(moods: SceneMoodTag[]): ScoreParameters {
  if (moods.length === 0) return MOOD_SCORE_MAP.peaceful;

  const primary = MOOD_SCORE_MAP[moods[0]] ?? MOOD_SCORE_MAP.peaceful;

  if (moods.length === 1) return primary;

  // Blend secondary moods for dynamics and complexity
  let dynamicSum = primary.dynamicLevel;
  let complexitySum = primary.complexity;

  for (let i = 1; i < moods.length; i++) {
    const secondary = MOOD_SCORE_MAP[moods[i]];
    if (secondary) {
      dynamicSum += secondary.dynamicLevel * 0.3; // 30% weight for secondary
      complexitySum += secondary.complexity * 0.3;
    }
  }

  return {
    ...primary,
    dynamicLevel: Math.min(1, dynamicSum / (1 + (moods.length - 1) * 0.3)),
    complexity: Math.min(1, complexitySum / (1 + (moods.length - 1) * 0.3)),
  };
}

// ── Cache Helpers ──────────────────────────────────────────────────────────

function scoreCacheKey(bookSlug: string, chapterNumber: number, sceneIndex: number): string {
  const ch = String(chapterNumber).padStart(3, "0");
  return `${CACHE_PREFIX}/${bookSlug}/music/ch${ch}-scene${sceneIndex}.mp3`;
}

async function getCachedScore(
  bookSlug: string,
  chapterNumber: number,
  sceneIndex: number,
): Promise<string | null> {
  try {
    const admin = createSupabaseAdminClient();
    const key = scoreCacheKey(bookSlug, chapterNumber, sceneIndex);

    // Check if file exists
    const parts = key.split("/");
    const folder = parts.slice(0, -1).join("/");
    const fileName = parts.at(-1) ?? "";

    const { data: files } = await admin.storage
      .from(CACHE_BUCKET)
      .list(folder, { limit: 1, search: fileName });

    if (!files || files.length === 0) return null;

    const { data } = admin.storage.from(CACHE_BUCKET).getPublicUrl(key);
    return data?.publicUrl ?? null;
  } catch {
    return null;
  }
}

// ── Main API ───────────────────────────────────────────────────────────────

/**
 * Generate ambient score assignments for all scenes in a chapter.
 *
 * Current implementation resolves score parameters from mood tags and checks
 * cache for pre-generated audio. When the Music AI provider becomes available,
 * this will generate custom scores via API.
 *
 * For now, returns score metadata with audioUrl=null for uncached scenes,
 * signaling to the player to use silence or a generic ambient loop.
 */
export async function generateAmbientScore(
  request: GenerateScoreRequest,
): Promise<ChapterScoreResult> {
  const scores: AmbientScore[] = [];

  for (const scene of request.scenes) {
    // Check cache first
    if (!request.skipCache) {
      const cachedUrl = await getCachedScore(
        request.bookSlug,
        request.chapterNumber,
        scene.index,
      );

      if (cachedUrl) {
        scores.push({
          sceneIndex: scene.index,
          durationSec: scene.estimatedDurationSec,
          moods: scene.moods as SceneMoodTag[],
          parameters: resolveScoreParameters(scene.moods as SceneMoodTag[]),
          audioUrl: cachedUrl,
          source: "cached",
          provider: "cache",
        });
        continue;
      }
    }

    // Resolve parameters (ready for when Music AI goes live)
    const parameters = resolveScoreParameters(scene.moods as SceneMoodTag[]);

    // Music AI generation will be added here when the provider is available.
    // For now, return metadata without audio — the player falls back to
    // the built-in ambient loop library or silence.
    scores.push({
      sceneIndex: scene.index,
      durationSec: scene.estimatedDurationSec,
      moods: scene.moods as SceneMoodTag[],
      parameters,
      audioUrl: null,
      source: "none",
      provider: "pending",
    });
  }

  return {
    bookSlug: request.bookSlug,
    chapterNumber: request.chapterNumber,
    scores,
    totalDurationSec: scores.reduce((sum, s) => sum + s.durationSec, 0),
  };
}

// ── Utilities ──────────────────────────────────────────────────────────────

/**
 * Get the dominant mood for a chapter by counting mood occurrences
 * across all scenes. Useful for selecting a chapter-level ambient loop.
 */
export function getDominantChapterMood(chapter: ChapterScenes): SceneMoodTag {
  const counts = new Map<SceneMoodTag, number>();

  for (const scene of chapter.scenes) {
    for (const mood of scene.moods) {
      const tag = mood as SceneMoodTag;
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  let topMood: SceneMoodTag = "peaceful";
  let topCount = 0;

  for (const [mood, count] of counts) {
    if (count > topCount) {
      topMood = mood;
      topCount = count;
    }
  }

  return topMood;
}

/**
 * Generate a text description of the musical direction for a scene.
 * Can be used as a prompt for Music AI or human composers.
 */
export function describeMusicalDirection(
  scene: Scene,
  parameters: ScoreParameters,
): string {
  const moods = scene.moods.join(", ");
  const tempo = `${parameters.tempoRange.min}-${parameters.tempoRange.max} BPM`;
  const key = parameters.suggestedKey;
  const instruments = parameters.instruments.slice(0, 3).join(", ");
  const dynamic = parameters.dynamicLevel < 0.3 ? "soft"
    : parameters.dynamicLevel < 0.6 ? "moderate"
      : parameters.dynamicLevel < 0.8 ? "strong"
        : "powerful";
  const character = parameters.legato ? "flowing and sustained" : "rhythmic and articulated";

  return [
    `Ambient background music for "${scene.title}".`,
    `Mood: ${moods}. Tempo: ${tempo}. Key: ${key}.`,
    `Primary instruments: ${instruments}. Dynamic: ${dynamic}.`,
    `Character: ${character}. Duration: ${scene.estimatedDurationSec} seconds.`,
    `Reverb: ${Math.round(parameters.reverbAmount * 100)}%.`,
    `This music plays under narration — keep it unobtrusive and atmospheric.`,
  ].join(" ");
}

/**
 * Estimate storage size for ambient scores.
 * Assumes 128kbps MP3 encoding.
 */
export function estimateStorageMB(totalDurationSec: number): number {
  const bytesPerSecond = 128_000 / 8; // 128kbps
  return Number(((totalDurationSec * bytesPerSecond) / (1024 * 1024)).toFixed(2));
}
