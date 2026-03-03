/**
 * Quiz Generator — Builds quizzes from the curriculum question pool.
 *
 * Supports:
 * - Selection by module ID, skill ID, or subject
 * - Difficulty distribution (easy/medium/hard mapped to tier bands)
 * - Question count limits
 * - Randomized ordering with deterministic seed option
 * - Estimated completion time calculation
 * - Deduplication
 */

import { getAllLearningModules, getLearningModuleById } from "@/lib/modules";
import type { Question, LearningModule, QuizBlueprint } from "@/lib/modules/types";

// ── Types ──────────────────────────────────────────────────────────

export type QuizGeneratorInput = {
  /** Filter by specific module IDs */
  moduleIds?: string[];
  /** Filter by skill IDs (questions with matching skillId) */
  skillIds?: string[];
  /** Filter by subject (case-insensitive substring match) */
  subject?: string;
  /** Target number of questions (default: 10) */
  questionCount?: number;
  /** Difficulty distribution override */
  difficulty?: {
    easy?: number;
    medium?: number;
    hard?: number;
  };
  /** Blueprint override for advanced options */
  blueprint?: Partial<QuizBlueprint>;
  /** Seed for deterministic randomization (for reproducibility) */
  seed?: number;
};

export type GeneratedQuizQuestion = {
  questionId: string;
  text: string;
  skillId: string | null;
  options: Array<{ id: string; text: string }>;
  correctOptionId: string;
  hint: string | null;
  explanation: string | null;
  sourceModuleId: string;
  sourceModuleTitle: string;
  sourceLessonId: string;
  /** Estimated difficulty tier: 1=easy, 2=medium, 3=hard */
  difficultyTier: 1 | 2 | 3;
};

export type GeneratedQuiz = {
  questions: GeneratedQuizQuestion[];
  /** Total question count */
  totalQuestions: number;
  /** Estimated minutes to complete (1.5 min per question) */
  estimatedMinutes: number;
  /** Skills covered in this quiz */
  skillsCovered: string[];
  /** Modules sourced from */
  modulesUsed: string[];
  /** Blueprint used for generation */
  blueprint: QuizBlueprint;
};

// ── Constants ──────────────────────────────────────────────────────

const DEFAULT_QUESTION_COUNT = 10;
const MAX_QUESTION_COUNT = 50;
const MINUTES_PER_QUESTION = 1.5;

/** Module tier bands → difficulty mapping */
const TIER_DIFFICULTY: Record<string, 1 | 2 | 3> = {};
// 101 = easy, 201-301 = medium, 401+ = hard
function inferDifficulty(moduleId: string): 1 | 2 | 3 {
  const tierMatch = moduleId.match(/(\d{3})/);
  if (!tierMatch) return 2;
  const tier = parseInt(tierMatch[1], 10);
  if (tier <= 101) return 1;
  if (tier <= 301) return 2;
  return 3;
}

// ── Helpers ────────────────────────────────────────────────────────

/** Seeded PRNG (mulberry32) for deterministic shuffling */
function seededRng(seed: number): () => number {
  let a = seed | 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(arr: T[], rng: () => number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// ── Core Generator ─────────────────────────────────────────────────

/**
 * Collects all candidate questions from the module catalog matching the input filters.
 */
function collectCandidateQuestions(input: QuizGeneratorInput): Array<{
  question: Question;
  moduleId: string;
  moduleTitle: string;
  lessonId: string;
  difficulty: 1 | 2 | 3;
}> {
  const candidates: Array<{
    question: Question;
    moduleId: string;
    moduleTitle: string;
    lessonId: string;
    difficulty: 1 | 2 | 3;
  }> = [];

  let modules: LearningModule[];

  if (input.moduleIds && input.moduleIds.length > 0) {
    modules = input.moduleIds
      .map((id) => getLearningModuleById(id))
      .filter((m): m is LearningModule => m !== null);
  } else {
    modules = getAllLearningModules();
  }

  // Apply subject filter
  if (input.subject) {
    const subjectLower = input.subject.toLowerCase();
    modules = modules.filter(
      (m) =>
        m.subject.toLowerCase().includes(subjectLower) ||
        m.title.toLowerCase().includes(subjectLower),
    );
  }

  const skillIdSet = input.skillIds ? new Set(input.skillIds) : null;

  for (const mod of modules) {
    const difficulty = inferDifficulty(mod.id);
    for (const lesson of mod.lessons) {
      if (!lesson.questions) continue;
      for (const q of lesson.questions) {
        // Skill filter
        if (skillIdSet && q.skillId && !skillIdSet.has(q.skillId)) continue;
        if (skillIdSet && !q.skillId) continue;

        candidates.push({
          question: q,
          moduleId: mod.id,
          moduleTitle: mod.title,
          lessonId: lesson.id,
          difficulty,
        });
      }
    }
  }

  return candidates;
}

/**
 * Generate a quiz from the curriculum question pool.
 */
export function generateQuiz(input: QuizGeneratorInput): GeneratedQuiz {
  const targetCount = Math.min(
    input.questionCount ?? DEFAULT_QUESTION_COUNT,
    MAX_QUESTION_COUNT,
  );

  const rng = seededRng(input.seed ?? Date.now());
  const allCandidates = collectCandidateQuestions(input);

  // Apply difficulty distribution
  const diffDist = input.difficulty ?? { easy: 30, medium: 50, hard: 20 };
  const totalParts = (diffDist.easy ?? 30) + (diffDist.medium ?? 50) + (diffDist.hard ?? 20);
  const easyTarget = Math.round(((diffDist.easy ?? 30) / totalParts) * targetCount);
  const hardTarget = Math.round(((diffDist.hard ?? 20) / totalParts) * targetCount);
  const mediumTarget = targetCount - easyTarget - hardTarget;

  const easyPool = shuffle(allCandidates.filter((c) => c.difficulty === 1), rng);
  const mediumPool = shuffle(allCandidates.filter((c) => c.difficulty === 2), rng);
  const hardPool = shuffle(allCandidates.filter((c) => c.difficulty === 3), rng);

  const selected: typeof allCandidates = [];
  const usedIds = new Set<string>();

  function pickFrom(pool: typeof allCandidates, count: number) {
    for (const candidate of pool) {
      if (selected.length >= targetCount) break;
      if (count <= 0) break;
      if (usedIds.has(candidate.question.id)) continue;
      usedIds.add(candidate.question.id);
      selected.push(candidate);
      count--;
    }
  }

  pickFrom(easyPool, easyTarget);
  pickFrom(mediumPool, mediumTarget);
  pickFrom(hardPool, hardTarget);

  // Fill remaining slots from any pool
  if (selected.length < targetCount) {
    const remaining = shuffle(
      allCandidates.filter((c) => !usedIds.has(c.question.id)),
      rng,
    );
    pickFrom(remaining, targetCount - selected.length);
  }

  // Final shuffle for presentation order
  const finalQuestions = shuffle(selected, rng);

  const skillsCovered = [
    ...new Set(finalQuestions.map((q) => q.question.skillId).filter(Boolean)),
  ] as string[];
  const modulesUsed = [...new Set(finalQuestions.map((q) => q.moduleId))];

  const blueprint: QuizBlueprint = {
    totalQuestions: finalQuestions.length,
    timeLimitMinutes: Math.ceil(finalQuestions.length * MINUTES_PER_QUESTION),
    difficultyDistribution: {
      easy: diffDist.easy ?? 30,
      medium: diffDist.medium ?? 50,
      hard: diffDist.hard ?? 20,
    },
    masteryThreshold: input.blueprint?.masteryThreshold ?? 0.7,
    ...input.blueprint,
  };

  return {
    questions: finalQuestions.map((q) => ({
      questionId: q.question.id,
      text: q.question.text,
      skillId: q.question.skillId ?? null,
      options: q.question.options.map((o) => ({ id: o.id, text: o.text })),
      correctOptionId: q.question.correctOptionId,
      hint: q.question.hint ?? null,
      explanation: q.question.explanation ?? null,
      sourceModuleId: q.moduleId,
      sourceModuleTitle: q.moduleTitle,
      sourceLessonId: q.lessonId,
      difficultyTier: q.difficulty,
    })),
    totalQuestions: finalQuestions.length,
    estimatedMinutes: Math.ceil(finalQuestions.length * MINUTES_PER_QUESTION),
    skillsCovered,
    modulesUsed,
    blueprint,
  };
}

/**
 * Score a set of student answers against the generated quiz.
 */
export function scoreQuizSubmission(
  quiz: GeneratedQuiz,
  answers: Record<string, string>,
): {
  score: number;
  total: number;
  percentage: number;
  passed: boolean;
  perQuestion: Array<{
    questionId: string;
    correct: boolean;
    selectedOptionId: string | null;
    correctOptionId: string;
  }>;
  skillBreakdown: Record<string, { correct: number; total: number }>;
} {
  let correct = 0;
  const perQuestion: Array<{
    questionId: string;
    correct: boolean;
    selectedOptionId: string | null;
    correctOptionId: string;
  }> = [];

  const skillBreakdown: Record<string, { correct: number; total: number }> = {};

  for (const q of quiz.questions) {
    const selected = answers[q.questionId] ?? null;
    const isCorrect = selected === q.correctOptionId;
    if (isCorrect) correct++;

    perQuestion.push({
      questionId: q.questionId,
      correct: isCorrect,
      selectedOptionId: selected,
      correctOptionId: q.correctOptionId,
    });

    if (q.skillId) {
      if (!skillBreakdown[q.skillId]) {
        skillBreakdown[q.skillId] = { correct: 0, total: 0 };
      }
      skillBreakdown[q.skillId].total++;
      if (isCorrect) skillBreakdown[q.skillId].correct++;
    }
  }

  const total = quiz.questions.length;
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
  const threshold = quiz.blueprint.masteryThreshold ?? 0.7;

  return {
    score: correct,
    total,
    percentage,
    passed: percentage >= threshold * 100,
    perQuestion,
    skillBreakdown,
  };
}
