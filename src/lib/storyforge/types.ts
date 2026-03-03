/**
 * StoryForge Cinema — Core type definitions.
 *
 * Covers the full pipeline: book → scenes → keyframes → narration → interactive film.
 */

// ── Story Metadata ──────────────────────────────────────────────────

export interface StoryMetadata {
  id: string;
  title: string;
  author: string;
  publicDomainSource: "gutenberg" | "wikisource" | "custom";
  sourceUrl: string;
  yearPublished: number | null;
  language: string;
  genre: string[];
  targetAge: { min: number; max: number };
  estimatedReadingMinutes: number;
  chapterCount: number;
  rightsStatus: "public_domain" | "cc0" | "verified" | "unverified";
  coverImageUrl?: string;
}

export const STORYFORGE_PRIORITY_QUEUE: StoryMetadata[] = [
  {
    id: "velveteen-rabbit",
    title: "The Velveteen Rabbit",
    author: "Margery Williams",
    publicDomainSource: "gutenberg",
    sourceUrl: "https://www.gutenberg.org/ebooks/11757",
    yearPublished: 1922,
    language: "en",
    genre: ["children", "fantasy"],
    targetAge: { min: 5, max: 10 },
    estimatedReadingMinutes: 25,
    chapterCount: 1,
    rightsStatus: "public_domain",
  },
  {
    id: "peter-pan",
    title: "Peter Pan",
    author: "J. M. Barrie",
    publicDomainSource: "gutenberg",
    sourceUrl: "https://www.gutenberg.org/ebooks/16",
    yearPublished: 1911,
    language: "en",
    genre: ["children", "fantasy", "adventure"],
    targetAge: { min: 7, max: 14 },
    estimatedReadingMinutes: 180,
    chapterCount: 17,
    rightsStatus: "public_domain",
  },
  {
    id: "alice-wonderland",
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    publicDomainSource: "gutenberg",
    sourceUrl: "https://www.gutenberg.org/ebooks/11",
    yearPublished: 1865,
    language: "en",
    genre: ["children", "fantasy", "literary"],
    targetAge: { min: 8, max: 14 },
    estimatedReadingMinutes: 120,
    chapterCount: 12,
    rightsStatus: "public_domain",
  },
  {
    id: "wizard-of-oz",
    title: "The Wonderful Wizard of Oz",
    author: "L. Frank Baum",
    publicDomainSource: "gutenberg",
    sourceUrl: "https://www.gutenberg.org/ebooks/55",
    yearPublished: 1900,
    language: "en",
    genre: ["children", "fantasy", "adventure"],
    targetAge: { min: 7, max: 14 },
    estimatedReadingMinutes: 150,
    chapterCount: 24,
    rightsStatus: "public_domain",
  },
  {
    id: "aesops-fables",
    title: "Aesop's Fables",
    author: "Aesop",
    publicDomainSource: "gutenberg",
    sourceUrl: "https://www.gutenberg.org/ebooks/11339",
    yearPublished: -600,
    language: "en",
    genre: ["children", "fable", "moral"],
    targetAge: { min: 5, max: 12 },
    estimatedReadingMinutes: 90,
    chapterCount: 50,
    rightsStatus: "public_domain",
  },
];

// ── Cinematic Scene ─────────────────────────────────────────────────

export type SceneMood =
  | "joyful"
  | "mysterious"
  | "tense"
  | "melancholic"
  | "adventurous"
  | "peaceful"
  | "whimsical"
  | "dramatic";

export interface CinematicScene {
  id: string;
  storyId: string;
  chapterIndex: number;
  sceneIndex: number;
  title: string;
  narrativeText: string;          // The source text for this scene
  mood: SceneMood;
  setting: string;                // Brief setting description
  characters: SceneCharacter[];
  dialogue: DialogueLine[];
  durationSeconds: number;
  keyframePrompt: string;         // Prompt for image/video generation
  narrationAudioUrl?: string;     // TTS audio URL
  keyframeImageUrl?: string;      // Generated keyframe URL
  videoClipUrl?: string;          // Animated clip URL
  ambientMusicUrl?: string;       // Background music URL
  hotspots: InteractiveHotspot[];
  tier1Fallback: Tier1SceneData;  // Audio + static image fallback
}

export interface SceneCharacter {
  name: string;
  role: "protagonist" | "antagonist" | "supporting" | "narrator";
  voiceProfile?: string;  // TTS voice ID
}

export interface DialogueLine {
  character: string;
  text: string;
  emotion: string;
}

// ── Interactive Layer ───────────────────────────────────────────────

export interface InteractiveHotspot {
  id: string;
  x: number;       // 0-100% position
  y: number;
  label: string;
  type: "vocabulary" | "quiz" | "explore" | "character_info";
  content: HotspotContent;
}

export type HotspotContent =
  | { kind: "vocabulary"; word: string; definition: string; example: string }
  | { kind: "quiz"; question: string; options: string[]; correctIndex: number; explanation: string }
  | { kind: "explore"; title: string; text: string; imageUrl?: string }
  | { kind: "character_info"; name: string; description: string; traits: string[] };

// ── Tier 1 Fallback ─────────────────────────────────────────────────

export interface Tier1SceneData {
  staticImageUrl?: string;
  audioNarrationUrl?: string;
  captionText: string;
}

// ── Full Film ───────────────────────────────────────────────────────

export type FilmStatus =
  | "queued"
  | "extracting"
  | "decomposing"
  | "generating_keyframes"
  | "generating_audio"
  | "compositing"
  | "review"
  | "published"
  | "failed";

export interface StoryFilm {
  id: string;
  metadata: StoryMetadata;
  scenes: CinematicScene[];
  totalDurationSeconds: number;
  status: FilmStatus;
  generatedAt: string;
  publishedAt?: string;
  quizIntegration: {
    totalQuestions: number;
    sceneBreakpoints: number[];  // scene indices with quizzes
  };
}

// ── Pipeline ────────────────────────────────────────────────────────

export type PipelineStage =
  | "text_extraction"
  | "scene_decomposition"
  | "keyframe_generation"
  | "clip_animation"
  | "tts_narration"
  | "music_scoring"
  | "interactive_injection"
  | "spatial_adaptation";

export interface PipelineProgress {
  filmId: string;
  stage: PipelineStage;
  stageIndex: number;
  totalStages: number;
  progress: number;  // 0-100
  message: string;
  startedAt: string;
  estimatedCompletionAt?: string;
}
