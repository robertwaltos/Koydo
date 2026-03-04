/**
 * Adaptive Recommendation Engine (E-01)
 *
 * Produces personalised "next-3" lesson/module recommendations for
 * a learner based on:
 *   • Active learning-path context (path-module mapping)
 *   • Mastery state (weak skills, decayed confidence)
 *   • Progress (completed lessons, spaced-review schedule)
 *   • Prerequisite satisfaction (skill graph edges)
 *   • Difficulty progression within each path (101 → 601)
 *
 * Usage:
 *   const recs = buildAdaptiveRecommendations({ ... });
 *   // recs.recommendations — top-3 (or N) items
 */

import type { LearningModule, Lesson } from "@/lib/modules/types";
import { getModulesForPath } from "@/lib/mastery/path-module-mapping";
import {
  buildMasterySkillGraph,
  type SkillGraphNode,
  type MasterySkillGraph,
} from "@/lib/mastery/skill-graph";

/* ─── Types ───────────────────────────────────────────────────── */

export type MasteryRow = {
  skill_id: string;
  mastery_level: number;
};

export type ProgressRow = {
  lesson_id: string;
  next_review_at: string | null;
};

export type RecommendationItem = {
  /** Unique ID for this recommendation slot */
  rank: number;
  /** The lesson to recommend */
  lessonId: string;
  lessonTitle: string;
  /** Parent module */
  moduleId: string;
  moduleTitle: string;
  moduleSubject: string;
  /** Which learning path this recommendation belongs to (if any) */
  pathId: string | null;
  /** Overall priority score (higher = more urgent) */
  score: number;
  /** Why this lesson was chosen */
  reasons: string[];
  /** Recommendation type */
  kind: "review" | "continue" | "new" | "remediate";
};

export type AdaptiveRecommendationsResult = {
  recommendations: RecommendationItem[];
  /** Skills the learner is weak on (mastery < 0.6) */
  weakSkillIds: string[];
  /** Count of lessons due for spaced review */
  dueLessonCount: number;
  /** The skill graph snapshot used for this computation */
  skillGraph: MasterySkillGraph;
};

export type AdaptiveRecommendationsInput = {
  /** Full module catalog (non-draft) */
  allModules: LearningModule[];
  /** Learner's active learning-path IDs (from their profile/selection) */
  activePathIds: string[];
  /** Learner's mastery rows from user_skill_mastery */
  masteryRows: MasteryRow[];
  /** Learner's progress rows from user_learning_progress */
  progressRows: ProgressRow[];
  /** Maximum number of recommendations to return (default 3) */
  maxRecommendations?: number;
};

/* ─── Constants ───────────────────────────────────────────────── */

const DEFAULT_MAX = 3;

/** Skills below this threshold are "weak" */
const WEAK_SKILL_THRESHOLD = 0.6;

/** Minimum prerequisite mastery to unblock a lesson */
const MIN_PREREQUISITE_MASTERY = 0.6;

/** Score weights */
const W = {
  DUE_REVIEW:        12,  // spaced-review is highest priority
  WEAK_SKILL_MATCH:   5,  // per weak skill targeted
  PATH_BONUS:         4,  // lesson is in an active path
  CONTINUE_MODULE:    3,  // continuing a partially-completed module
  NEW_LESSON:         2,  // fresh unstarted lesson baseline
  DIFFICULTY_LADDER:  1,  // bonus for appropriate difficulty band
  PREREQUISITE_BLOCK: -100, // blocked by missing prereqs
} as const;

/* ─── Helpers ─────────────────────────────────────────────────── */

function isDue(nextReviewAt: string | null | undefined): boolean {
  if (!nextReviewAt) return false;
  const ts = new Date(nextReviewAt).getTime();
  return Number.isFinite(ts) && ts <= Date.now();
}

/** Extract a numeric difficulty tier from module ID (101 → 1, 601 → 6). */
function difficultyTier(moduleId: string): number {
  const match = moduleId.match(/(\d)01$/);
  return match ? Number(match[1]) : 3; // default to mid-tier
}

/**
 * Check whether all prerequisite skills for this node are met.
 */
function prerequisitesMet(
  node: SkillGraphNode,
  masteryMap: Map<string, number>,
): boolean {
  if (node.prerequisiteSkillIds.length === 0) return true;
  return node.prerequisiteSkillIds.every(
    (preId) => (masteryMap.get(preId) ?? 0) >= MIN_PREREQUISITE_MASTERY,
  );
}

/* ─── Core Engine ─────────────────────────────────────────────── */

export function buildAdaptiveRecommendations(
  input: AdaptiveRecommendationsInput,
): AdaptiveRecommendationsResult {
  const {
    allModules,
    activePathIds,
    masteryRows,
    progressRows,
    maxRecommendations = DEFAULT_MAX,
  } = input;

  // ── Pre-compute lookups ─────────────────────────────────────
  const completedLessonIds = new Set(progressRows.map((r) => r.lesson_id));
  const dueLessonIds = new Set(
    progressRows.filter((r) => isDue(r.next_review_at)).map((r) => r.lesson_id),
  );
  const masteryMap = new Map(masteryRows.map((r) => [r.skill_id, Number(r.mastery_level)]));
  const weakSkillIds = masteryRows
    .filter((r) => Number(r.mastery_level) < WEAK_SKILL_THRESHOLD)
    .map((r) => r.skill_id);
  const weakSkillSet = new Set(weakSkillIds);

  // Build skill graph once
  const skillGraph = buildMasterySkillGraph(allModules);
  const nodesBySkillId = new Map(skillGraph.nodes.map((n) => [n.id, n]));

  // Build set of module IDs in active paths
  const pathModuleIds = new Set<string>();
  const moduleToPath = new Map<string, string>();
  for (const pathId of activePathIds) {
    const pathModules = getModulesForPath(pathId, allModules);
    for (const m of pathModules) {
      pathModuleIds.add(m.id);
      if (!moduleToPath.has(m.id)) {
        moduleToPath.set(m.id, pathId);
      }
    }
  }

  // Track which modules are partially completed
  const moduleProgress = new Map<string, { completed: number; total: number }>();
  for (const mod of allModules) {
    const completed = mod.lessons.filter((l) => completedLessonIds.has(l.id)).length;
    moduleProgress.set(mod.id, { completed, total: mod.lessons.length });
  }

  // ── Score every eligible lesson ─────────────────────────────
  type ScoredCandidate = {
    lesson: Lesson;
    module: LearningModule;
    score: number;
    reasons: string[];
    kind: RecommendationItem["kind"];
  };

  const candidates: ScoredCandidate[] = [];

  for (const mod of allModules) {
    const inActivePath = pathModuleIds.has(mod.id);
    const modProgress = moduleProgress.get(mod.id);
    const isPartiallyStarted =
      modProgress !== undefined && modProgress.completed > 0 && modProgress.completed < modProgress.total;
    const tier = difficultyTier(mod.id);

    for (const lesson of mod.lessons) {
      const isCompleted = completedLessonIds.has(lesson.id);
      const isDueReview = dueLessonIds.has(lesson.id);

      // Skip completed lessons unless they're due for review
      if (isCompleted && !isDueReview) continue;

      let score = 0;
      const reasons: string[] = [];
      let kind: RecommendationItem["kind"] = "new";

      // ── Due for spaced review ───────────────────────────────
      if (isDueReview) {
        score += W.DUE_REVIEW;
        reasons.push("due for spaced review");
        kind = "review";
      }

      // ── New lesson baseline ─────────────────────────────────
      if (!isCompleted) {
        score += W.NEW_LESSON;
        reasons.push("unstarted lesson");
      }

      // ── Weak skill targeting ────────────────────────────────
      const lessonSkillIds = (lesson.questions ?? [])
        .map((q) => q.skillId)
        .filter((s): s is string => typeof s === "string" && s.length > 0);
      const weakMatches = lessonSkillIds.filter((s) => weakSkillSet.has(s)).length;
      if (weakMatches > 0) {
        score += weakMatches * W.WEAK_SKILL_MATCH;
        reasons.push(`targets ${weakMatches} weak skill${weakMatches > 1 ? "s" : ""}`);
        if (kind === "new") kind = "remediate";
      }

      // ── Active path bonus ───────────────────────────────────
      if (inActivePath) {
        score += W.PATH_BONUS;
        reasons.push("in active learning path");
      }

      // ── Continue partially-started module ───────────────────
      if (isPartiallyStarted && !isCompleted) {
        score += W.CONTINUE_MODULE;
        reasons.push("continue in-progress module");
        if (kind === "new") kind = "continue";
      }

      // ── Difficulty ladder (prefer lower tiers first) ────────
      if (!isCompleted && tier <= 2) {
        score += W.DIFFICULTY_LADDER;
        reasons.push("introductory difficulty");
      }

      // ── Prerequisite check ──────────────────────────────────
      for (const skillId of lessonSkillIds) {
        const node = nodesBySkillId.get(skillId);
        if (node && !prerequisitesMet(node, masteryMap)) {
          score += W.PREREQUISITE_BLOCK;
          reasons.push("blocked by prerequisite");
          break;
        }
      }

      if (score > 0) {
        candidates.push({ lesson, module: mod, score, reasons, kind });
      }
    }
  }

  // ── Sort and deduplicate by module ──────────────────────────
  candidates.sort((a, b) => b.score - a.score);

  // Pick top N, but avoid recommending multiple lessons from
  // the same module unless there aren't enough unique modules.
  const picked: ScoredCandidate[] = [];
  const seenModuleIds = new Set<string>();

  // First pass: one per module
  for (const c of candidates) {
    if (picked.length >= maxRecommendations) break;
    if (seenModuleIds.has(c.module.id)) continue;
    seenModuleIds.add(c.module.id);
    picked.push(c);
  }

  // Fill remaining slots if needed (allow duplicates from same module)
  if (picked.length < maxRecommendations) {
    for (const c of candidates) {
      if (picked.length >= maxRecommendations) break;
      if (picked.some((p) => p.lesson.id === c.lesson.id)) continue;
      picked.push(c);
    }
  }

  // ── Build result ────────────────────────────────────────────
  const recommendations: RecommendationItem[] = picked.map((c, i) => ({
    rank: i + 1,
    lessonId: c.lesson.id,
    lessonTitle: c.lesson.title,
    moduleId: c.module.id,
    moduleTitle: c.module.title,
    moduleSubject: c.module.subject,
    pathId: moduleToPath.get(c.module.id) ?? null,
    score: c.score,
    reasons: c.reasons,
    kind: c.kind,
  }));

  return {
    recommendations,
    weakSkillIds,
    dueLessonCount: dueLessonIds.size,
    skillGraph,
  };
}
