/**
 * StoryForge — Comprehension quiz generator.
 *
 * Generates reading comprehension questions at scene boundaries
 * and feeds results into the mastery pipeline via learning_events.
 */

import type { CinematicScene } from "./types";

// ── Types ───────────────────────────────────────────────────────────

export interface ComprehensionQuestion {
  id: string;
  sceneId: string;
  storyId: string;
  type: "recall" | "inference" | "vocabulary" | "sequence";
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: 1 | 2 | 3;
}

export interface QuizBreakpoint {
  afterSceneIndex: number;
  questions: ComprehensionQuestion[];
}

export interface ComprehensionResult {
  questionId: string;
  storyId: string;
  sceneId: string;
  selectedIndex: number;
  correct: boolean;
  answeredAt: string;
}

// ── Quiz generation ─────────────────────────────────────────────────

// Simple deterministic hash for seeded selection
function simpleHash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

/**
 * Generate a recall question from scene text.
 */
function generateRecallQuestion(scene: CinematicScene, qIndex: number): ComprehensionQuestion | null {
  const sentences = scene.narrativeText
    .split(/[.!?]+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 20 && s.length < 200);

  if (sentences.length < 2) return null;

  const targetIdx = simpleHash(scene.id + "recall" + qIndex) % sentences.length;
  const target = sentences[targetIdx];

  // Extract a key detail from the sentence
  const words = target.split(/\s+/);
  if (words.length < 5) return null;

  // Pick a word to blank out (skip first/last, prefer longer words)
  const candidates = words
    .map((w, i) => ({ word: w, index: i }))
    .filter((w) => w.index > 0 && w.index < words.length - 1 && w.word.length > 3);

  if (candidates.length === 0) return null;

  const picked = candidates[simpleHash(scene.id + qIndex.toString()) % candidates.length];
  const blanked = words.map((w, i) => (i === picked.index ? "____" : w)).join(" ");

  return {
    id: `${scene.id}-q${qIndex}`,
    sceneId: scene.id,
    storyId: scene.storyId,
    type: "recall",
    question: `Fill in the blank: "${blanked}"`,
    options: generateDistractors(picked.word, scene.narrativeText),
    correctIndex: 0, // correct answer is always shuffled to position 0 initially
    explanation: `The original text reads: "${target}"`,
    difficulty: 1,
  };
}

/**
 * Generate an inference question from scene mood/characters.
 */
function generateInferenceQuestion(scene: CinematicScene, qIndex: number): ComprehensionQuestion | null {
  if (scene.characters.length === 0 && scene.dialogue.length === 0) return null;

  const moodDescriptions: Record<string, string> = {
    joyful: "happy and cheerful",
    mysterious: "mysterious and curious",
    tense: "scary or dangerous",
    melancholic: "sad and thoughtful",
    adventurous: "exciting and adventurous",
    peaceful: "calm and quiet",
    whimsical: "magical and playful",
    dramatic: "intense and powerful",
  };

  const correctMood = moodDescriptions[scene.mood] ?? "interesting";
  const otherMoods = Object.values(moodDescriptions).filter((m) => m !== correctMood);
  const hash = simpleHash(scene.id + "inf" + qIndex);

  // Shuffle distractors
  const distractors = otherMoods.sort(() => (hash % 3) - 1).slice(0, 3);

  const options = [correctMood, ...distractors];
  // Deterministic shuffle
  const shuffled = shuffleWithSeed(options, hash);
  const correctIdx = shuffled.indexOf(correctMood);

  return {
    id: `${scene.id}-q${qIndex}`,
    sceneId: scene.id,
    storyId: scene.storyId,
    type: "inference",
    question: `What is the overall mood or feeling of this scene?`,
    options: shuffled,
    correctIndex: correctIdx,
    explanation: `This scene has a ${correctMood} feeling based on the language and events described.`,
    difficulty: 2,
  };
}

/**
 * Generate a sequence question based on scene events.
 */
function generateSequenceQuestion(
  scenes: CinematicScene[],
  currentIndex: number,
  qIndex: number,
): ComprehensionQuestion | null {
  if (currentIndex < 2) return null;

  const recentScenes = scenes.slice(Math.max(0, currentIndex - 3), currentIndex + 1);
  if (recentScenes.length < 3) return null;

  const eventSnippets = recentScenes.map((s) => {
    const firstSentence = s.narrativeText.split(/[.!?]/)[0]?.trim() ?? s.title;
    return firstSentence.slice(0, 80);
  });

  const hash = simpleHash(recentScenes[0].id + "seq" + qIndex);
  const correctOrder = eventSnippets.join(" → ");

  // Shuffle for wrong answers
  const wrong1 = [...eventSnippets].reverse().join(" → ");
  const wrong2 = [...eventSnippets].sort(() => (hash % 3) - 1).join(" → ");
  const wrong3 = [eventSnippets[eventSnippets.length - 1], ...eventSnippets.slice(0, -1)].join(" → ");

  const options = shuffleWithSeed(
    [correctOrder, wrong1, wrong2, wrong3].filter((v, i, a) => a.indexOf(v) === i),
    hash,
  );

  return {
    id: `${recentScenes[0].id}-seq-q${qIndex}`,
    sceneId: recentScenes[recentScenes.length - 1].id,
    storyId: recentScenes[0].storyId,
    type: "sequence",
    question: "What is the correct order of events in the recent scenes?",
    options,
    correctIndex: options.indexOf(correctOrder),
    explanation: `The events happened in this order: ${correctOrder}`,
    difficulty: 3,
  };
}

// ── Helpers ─────────────────────────────────────────────────────────

function generateDistractors(correctWord: string, context: string): string[] {
  // Extract similar-length words from context as distractors
  const words = context
    .split(/\s+/)
    .map((w) => w.replace(/[^a-zA-Z]/g, "").toLowerCase())
    .filter((w) => w.length >= 3 && w !== correctWord.toLowerCase());

  const unique = [...new Set(words)];
  const distractors = unique
    .filter((w) => Math.abs(w.length - correctWord.length) <= 3)
    .slice(0, 3);

  // Pad if insufficient
  while (distractors.length < 3) {
    distractors.push(`(option ${distractors.length + 1})`);
  }

  // Put correct answer first, then shuffle
  const options = [correctWord.replace(/[^a-zA-Z]/g, ""), ...distractors];
  const hash = simpleHash(correctWord);
  return shuffleWithSeed(options, hash);
}

function shuffleWithSeed<T>(arr: T[], seed: number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = ((seed * (i + 1) * 2654435761) >>> 0) % (i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// ── Public API ──────────────────────────────────────────────────────

/**
 * Determine quiz breakpoints across a scene list.
 * Places quizzes every N scenes (default: every 5 scenes).
 */
export function generateQuizBreakpoints(
  scenes: CinematicScene[],
  interval = 5,
): QuizBreakpoint[] {
  const breakpoints: QuizBreakpoint[] = [];

  for (let i = interval - 1; i < scenes.length; i += interval) {
    const scene = scenes[i];
    const questions: ComprehensionQuestion[] = [];

    // Generate 2-3 questions per breakpoint
    const recall = generateRecallQuestion(scene, 0);
    if (recall) questions.push(recall);

    const inference = generateInferenceQuestion(scene, 1);
    if (inference) questions.push(inference);

    if (i >= 2) {
      const sequence = generateSequenceQuestion(scenes, i, 2);
      if (sequence) questions.push(sequence);
    }

    if (questions.length > 0) {
      breakpoints.push({
        afterSceneIndex: i,
        questions,
      });
    }
  }

  // Always add a final quiz at the very end if not already covered
  const lastIdx = scenes.length - 1;
  if (lastIdx >= 0 && !breakpoints.some((b) => b.afterSceneIndex === lastIdx)) {
    const scene = scenes[lastIdx];
    const questions: ComprehensionQuestion[] = [];

    const recall = generateRecallQuestion(scene, 10);
    if (recall) questions.push(recall);

    const inference = generateInferenceQuestion(scene, 11);
    if (inference) questions.push(inference);

    if (questions.length > 0) {
      breakpoints.push({ afterSceneIndex: lastIdx, questions });
    }
  }

  return breakpoints;
}

/**
 * Convert a comprehension quiz result into a learning_event payload
 * suitable for insertion into the mastery pipeline.
 */
export function toLearningEvent(result: ComprehensionResult, userId: string) {
  return {
    user_id: userId,
    event_type: "quiz_answered" as const,
    module_id: `storyforge-${result.storyId}`,
    lesson_id: result.sceneId,
    question_id: result.questionId,
    selected_option_id: `option-${result.selectedIndex}`,
    correct: result.correct,
    metadata: {
      source: "storyforge_comprehension",
      story_id: result.storyId,
      scene_id: result.sceneId,
      answered_at: result.answeredAt,
    },
  };
}
