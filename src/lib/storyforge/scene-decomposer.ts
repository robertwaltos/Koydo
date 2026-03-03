/**
 * StoryForge — Scene decomposition engine.
 *
 * Takes a raw chapter (from Gutenberg service) and splits it into
 * cinematic scenes with mood, characters, dialogue, and hotspot candidates.
 */

import type {
  CinematicScene,
  SceneMood,
  SceneCharacter,
  DialogueLine,
  InteractiveHotspot,
  Tier1SceneData,
} from "./types";

// ── Constants ───────────────────────────────────────────────────────

const TARGET_SCENE_WORDS = 300; // aim for ~300 words per scene
const MIN_SCENE_WORDS = 80;

const MOOD_KEYWORDS: Record<SceneMood, string[]> = {
  joyful: ["laugh", "happy", "smile", "joy", "delight", "merry", "glad", "cheer", "bright", "wonderful"],
  mysterious: ["dark", "shadow", "secret", "strange", "curious", "wonder", "peculiar", "unknown", "mystery", "hidden"],
  tense: ["afraid", "danger", "fear", "tremble", "scream", "horror", "terrible", "dread", "panic", "threat"],
  melancholic: ["sad", "tear", "cry", "lonely", "sorrow", "grief", "miss", "lost", "weep", "alone"],
  adventurous: ["journey", "explore", "discover", "quest", "brave", "adventure", "travel", "dare", "bold", "march"],
  peaceful: ["calm", "quiet", "gentle", "soft", "sleep", "rest", "still", "peace", "serene", "warm"],
  whimsical: ["magic", "fairy", "wish", "dream", "enchant", "fantast", "imagine", "trick", "play", "nonsense"],
  dramatic: ["fight", "battle", "struggle", "clash", "confront", "storm", "rage", "fury", "power", "declare"],
};

// ── Mood inference ──────────────────────────────────────────────────

function inferMood(text: string): SceneMood {
  const lower = text.toLowerCase();
  const scores: [SceneMood, number][] = (Object.entries(MOOD_KEYWORDS) as [SceneMood, string[]][]).map(
    ([mood, keywords]) => {
      const score = keywords.reduce((acc, kw) => {
        const regex = new RegExp(kw, "gi");
        return acc + (lower.match(regex)?.length ?? 0);
      }, 0);
      return [mood, score];
    },
  );

  scores.sort((a, b) => b[1] - a[1]);
  return scores[0][1] > 0 ? scores[0][0] : "peaceful";
}

// ── Character extraction ────────────────────────────────────────────

// Simple heuristic: look for capitalized words that appear multiple times
// and aren't common English words or sentence starters.
const COMMON_WORDS = new Set([
  "the", "and", "but", "for", "not", "you", "all", "can", "her", "was",
  "one", "our", "out", "are", "has", "his", "how", "its", "may", "new",
  "now", "old", "see", "way", "who", "did", "get", "let", "say", "she",
  "too", "use", "him", "man", "had", "been", "have", "will", "with", "this",
  "that", "they", "from", "what", "were", "when", "your", "said", "each",
  "which", "their", "do", "if", "we", "my", "no", "up", "so", "it",
  "he", "i", "a", "in", "to", "is", "of", "at", "on", "by", "an",
  "or", "as", "be", "then", "than", "them", "there", "these", "some",
  "would", "could", "should", "just", "very", "much", "little", "well",
  "into", "only", "upon", "after", "before", "about", "down", "over",
  "such", "here", "come", "never", "once", "again", "still", "back",
]);

function extractCharacters(text: string, storyTitle: string): SceneCharacter[] {
  // Find quoted dialogue attributions: "..." said X, X said "..."
  const attributionPattern = /(?:said|cried|whispered|exclaimed|replied|asked|shouted|called|answered|murmured)\s+([A-Z][a-z]+)/g;
  const reversePattern = /([A-Z][a-z]+)\s+(?:said|cried|whispered|exclaimed|replied|asked|shouted|called|answered|murmured)/g;

  const nameSet = new Set<string>();
  for (const match of text.matchAll(attributionPattern)) {
    const name = match[1];
    if (!COMMON_WORDS.has(name.toLowerCase()) && name.length > 1) {
      nameSet.add(name);
    }
  }
  for (const match of text.matchAll(reversePattern)) {
    const name = match[1];
    if (!COMMON_WORDS.has(name.toLowerCase()) && name.length > 1) {
      nameSet.add(name);
    }
  }

  // Also find capitalized words that appear 3+ times (likely character names)
  const capWords = text.match(/\b[A-Z][a-z]{2,}\b/g) ?? [];
  const capCounts = new Map<string, number>();
  for (const w of capWords) {
    if (!COMMON_WORDS.has(w.toLowerCase())) {
      capCounts.set(w, (capCounts.get(w) ?? 0) + 1);
    }
  }
  for (const [name, count] of capCounts) {
    if (count >= 3) nameSet.add(name);
  }

  // Remove the story title words from character names
  const titleWords = storyTitle.split(/\s+/).map((w) => w.toLowerCase());
  const characters: SceneCharacter[] = [];
  let isFirst = true;

  for (const name of nameSet) {
    if (titleWords.includes(name.toLowerCase())) continue;
    characters.push({
      name,
      role: isFirst ? "protagonist" : "supporting",
    });
    isFirst = false;
  }

  return characters.slice(0, 8);
}

// ── Dialogue extraction ─────────────────────────────────────────────

function extractDialogue(text: string): DialogueLine[] {
  const lines: DialogueLine[] = [];
  // Match quoted speech: "text" or 'text' with optional attribution
  const pattern = /["\u201c]([^"\u201d]{5,200})["\u201d]\s*(?:,?\s*(?:said|cried|whispered|exclaimed|replied|asked|shouted|called|answered|murmured)\s+([A-Z][a-z]+))?/g;

  for (const match of text.matchAll(pattern)) {
    lines.push({
      character: match[2] ?? "Narrator",
      text: match[1].trim(),
      emotion: "neutral",
    });
  }

  return lines.slice(0, 10);
}

// ── Setting extraction ──────────────────────────────────────────────

const SETTING_PATTERNS = [
  /(?:in|at|near|inside|outside|upon)\s+(?:the\s+)?([A-Z][a-z]+(?:\s+[A-Z]?[a-z]+){0,3})/,
  /(?:forest|garden|room|house|castle|cave|river|sea|mountain|village|city|town|palace|tower|field|meadow|wood|kitchen|hall|street|path|road|bridge|island|shore)/i,
];

function inferSetting(text: string): string {
  for (const pattern of SETTING_PATTERNS) {
    const match = text.match(pattern);
    if (match) return match[1] ?? match[0];
  }
  // Fallback: use first sentence fragment
  const firstSentence = text.match(/^[^.!?]{10,80}[.!?]/);
  return firstSentence ? firstSentence[0].slice(0, 60) : "An unspecified location";
}

// ── Hotspot generation ──────────────────────────────────────────────

function generateHotspots(text: string, sceneIndex: number): InteractiveHotspot[] {
  const hotspots: InteractiveHotspot[] = [];

  // 1. Vocabulary hotspot: find uncommon words (7+ letters)
  const longWords = text.match(/\b[a-z]{7,}\b/gi) ?? [];
  const uniqueLong = [...new Set(longWords.map((w) => w.toLowerCase()))];
  if (uniqueLong.length > 0) {
    const word = uniqueLong[sceneIndex % uniqueLong.length];
    hotspots.push({
      id: `vocab-${sceneIndex}-0`,
      x: 20,
      y: 30,
      label: word,
      type: "vocabulary",
      content: {
        kind: "vocabulary",
        word,
        definition: `Definition of "${word}" — to be filled by AI enrichment`,
        example: `The word "${word}" appeared in this passage.`,
      },
    });
  }

  // 2. Explore hotspot for scene setting
  const setting = inferSetting(text);
  hotspots.push({
    id: `explore-${sceneIndex}-0`,
    x: 75,
    y: 50,
    label: "About this place",
    type: "explore",
    content: {
      kind: "explore",
      title: setting,
      text: `Learn more about ${setting} and its significance in the story.`,
    },
  });

  return hotspots;
}

// ── Keyframe prompt generation ──────────────────────────────────────

function generateKeyframePrompt(
  scene: { mood: SceneMood; setting: string; characters: SceneCharacter[]; title: string },
): string {
  const charNames = scene.characters.map((c) => c.name).join(", ");
  const charDesc = charNames ? `featuring ${charNames}` : "";
  return `A ${scene.mood} children's book illustration of ${scene.setting} ${charDesc}. Scene: "${scene.title}". Warm lighting, detailed storybook style, safe for all ages. No text or watermarks.`;
}

// ── Main decomposition ──────────────────────────────────────────────

export interface DecomposeOptions {
  storyId: string;
  storyTitle: string;
  chapterIndex: number;
  chapterText: string;
  targetWordsPerScene?: number;
}

export function decomposeChapterIntoScenes(opts: DecomposeOptions): CinematicScene[] {
  const {
    storyId,
    storyTitle,
    chapterIndex,
    chapterText,
    targetWordsPerScene = TARGET_SCENE_WORDS,
  } = opts;

  // Split by paragraph breaks, then group into scenes
  const paragraphs = chapterText
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);

  const scenes: CinematicScene[] = [];
  let currentText = "";
  let currentWords = 0;
  let sceneIndex = 0;

  const flush = () => {
    if (currentWords < MIN_SCENE_WORDS && scenes.length > 0) {
      // Merge short tail into previous scene
      const prev = scenes[scenes.length - 1];
      prev.narrativeText += "\n\n" + currentText;
      prev.durationSeconds += Math.ceil((currentWords / 150) * 60);
      return;
    }
    if (currentText.trim().length === 0) return;

    const mood = inferMood(currentText);
    const characters = extractCharacters(currentText, storyTitle);
    const dialogue = extractDialogue(currentText);
    const setting = inferSetting(currentText);
    const hotspots = generateHotspots(currentText, sceneIndex);
    const durationSeconds = Math.ceil((currentWords / 150) * 60); // ~150 WPM narration pace

    const titleSnippet = currentText.slice(0, 60).replace(/[^a-zA-Z0-9\s]/g, "").trim();

    const scene: CinematicScene = {
      id: `${storyId}-ch${chapterIndex}-sc${sceneIndex}`,
      storyId,
      chapterIndex,
      sceneIndex,
      title: titleSnippet.length > 5 ? titleSnippet : `Scene ${sceneIndex + 1}`,
      narrativeText: currentText,
      mood,
      setting,
      characters,
      dialogue,
      durationSeconds,
      keyframePrompt: generateKeyframePrompt({ mood, setting, characters, title: titleSnippet }),
      hotspots,
      tier1Fallback: {
        captionText: currentText.slice(0, 200) + (currentText.length > 200 ? "..." : ""),
      },
    };

    scenes.push(scene);
    sceneIndex++;
  };

  for (const para of paragraphs) {
    const paraWords = para.split(/\s+/).filter(Boolean).length;

    // If adding this paragraph would overshoot by a lot, flush first
    if (currentWords > 0 && currentWords + paraWords > targetWordsPerScene * 1.3) {
      flush();
      currentText = "";
      currentWords = 0;
    }

    currentText += (currentText ? "\n\n" : "") + para;
    currentWords += paraWords;

    // If we've reached the target, flush
    if (currentWords >= targetWordsPerScene) {
      flush();
      currentText = "";
      currentWords = 0;
    }
  }

  // Flush remaining
  if (currentText.trim().length > 0) {
    flush();
  }

  return scenes;
}

/**
 * Decompose an entire book (multiple chapters) into a flat scene list.
 */
export function decomposeBookIntoScenes(
  storyId: string,
  storyTitle: string,
  chapters: { index: number; text: string }[],
): CinematicScene[] {
  const allScenes: CinematicScene[] = [];

  for (const chapter of chapters) {
    const scenes = decomposeChapterIntoScenes({
      storyId,
      storyTitle,
      chapterIndex: chapter.index,
      chapterText: chapter.text,
    });
    allScenes.push(...scenes);
  }

  // Re-index scene IDs globally
  for (let i = 0; i < allScenes.length; i++) {
    allScenes[i].id = `${storyId}-scene-${i}`;
    allScenes[i].sceneIndex = i;
  }

  return allScenes;
}
