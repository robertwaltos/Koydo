/**
 * StoryForge Cinema — Type Models
 * 
 * Data structures for the public-domain book-to-interactive-film pipeline.
 */

export type ContentTier = "A" | "B" | "C" | "D";

export interface StoryMetadata {
  id: string;
  title: string;
  author: string;
  year: number;
  publicDomain: boolean;
  gutenbergId?: number;
  openLibraryKey?: string;
  contentTier: ContentTier;
  estimatedDuration: string;
  coverImageUrl?: string;
}

export interface CinematicScene {
  sceneIndex: number;
  title: string;
  setting: string;
  characters: string[];
  dialogue: string[];
  narration: string;
  cameraDirection: string;
  mood: "calm" | "tense" | "joyful" | "melancholy" | "adventurous" | "mysterious";
  durationSeconds: number;
  keyframeUrl?: string;
  audioNarrationUrl?: string;
  musicScoreUrl?: string;
  interactiveHotspots: InteractiveHotspot[];
}

export interface InteractiveHotspot {
  id: string;
  type: "vocabulary" | "quiz" | "branch" | "explore" | "context";
  label: string;
  positionPercent: { x: number; y: number };
  content: HotspotContent;
}

export type HotspotContent =
  | { kind: "vocabulary"; word: string; definition: string; pronunciation?: string }
  | { kind: "quiz"; question: string; options: string[]; correctIndex: number }
  | { kind: "branch"; prompt: string; choices: { label: string; targetSceneIndex: number }[] }
  | { kind: "explore"; description: string; detailImageUrl?: string }
  | { kind: "context"; historicalNote: string; era: string };

export interface StoryFilm {
  metadata: StoryMetadata;
  scenes: CinematicScene[];
  totalDurationSeconds: number;
  resolution: "4K" | "8K";
  spatialAdaptation: boolean;
}

export const STORYFORGE_PRIORITY_QUEUE: StoryMetadata[] = [
  {
    id: "velveteen-rabbit",
    title: "The Velveteen Rabbit",
    author: "Margery Williams",
    year: 1922,
    publicDomain: true,
    gutenbergId: 11757,
    contentTier: "A",
    estimatedDuration: "6 min",
  },
  {
    id: "peter-pan",
    title: "Peter Pan; or, the Boy Who Wouldn't Grow Up",
    author: "J.M. Barrie",
    year: 1911,
    publicDomain: true,
    gutenbergId: 16,
    contentTier: "B",
    estimatedDuration: "25 min",
  },
  {
    id: "alice-in-wonderland",
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    year: 1865,
    publicDomain: true,
    gutenbergId: 11,
    contentTier: "B",
    estimatedDuration: "20 min",
  },
  {
    id: "wizard-of-oz",
    title: "The Wonderful Wizard of Oz",
    author: "L. Frank Baum",
    year: 1900,
    publicDomain: true,
    gutenbergId: 55,
    contentTier: "B",
    estimatedDuration: "30 min",
  },
  {
    id: "aesops-fables",
    title: "Aesop's Fables",
    author: "Aesop",
    year: -600,
    publicDomain: true,
    gutenbergId: 11339,
    contentTier: "A",
    estimatedDuration: "2 min each",
  },
];
