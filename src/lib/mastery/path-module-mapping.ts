/**
 * Path-to-Module Mapping
 *
 * Maps each of the 26 learning-path IDs to the module catalog
 * by subject matching (case-insensitive). This is the missing link
 * between the UI learning-path system and the module-lesson graph.
 *
 * Subjects are intentionally broad so every module belongs to >= 1 path.
 */

import type { LearningModule } from "@/lib/modules/types";

/* ─── Subject Mapping Table ───────────────────────────────────── */

const PATH_SUBJECT_MATCHERS: Record<string, string[]> = {
  // ── Foundational progression ───────────────────────────────
  "numbers":  ["math", "basic math", "financial literacy", "accounting"],
  "story":    ["reading", "language arts", "english", "literature", "media studies", "music"],
  "tree":     ["biology", "general science", "agriculture", "farming", "gardening", "food", "human development"],
  "world":    ["social studies", "geography", "history", "world history", "economics", "anthropology", "philosophy", "humanities", "interdisciplinary"],
  "ocean":    ["earth science", "meteorology", "general science"],
  "space":    ["astronomy", "astrophysics", "general relativity", "aerospace"],

  // ── Standard curriculum ────────────────────────────────────
  "math-core":     ["math", "advanced math", "basic math", "mathematics", "financial literacy", "accounting", "exam prep"],
  "language-core": ["language arts", "reading", "english", "literature", "foreign languages", "media studies", "music", "arts"],
  "science-core":  ["science", "general science", "biology", "chemistry", "physics", "earth science", "psychology", "robotics"],
  "social-core":   ["social studies", "geography", "history", "world history", "economics", "policy studies", "philosophy", "ethics", "humanities", "interdisciplinary", "human development"],

  // ── Additional / career tracks ─────────────────────────────
  "coding":                    ["coding", "computer science", "data science", "data engineering", "cybersecurity", "operating systems", "linux", "macos", "windows", "networking", "technology", "ux design"],
  "ai-workflows":              ["ai", "ai workflows", "ai and ml", "ai & machine learning", "ai ethics", "ai safety", "robotics"],
  "gardening":                 ["gardening", "agriculture", "farming"],
  "food-science":              ["food science", "food/agriculture", "household management"],
  "project-management":        ["project management", "business", "entrepreneurship", "digital marketing", "self-development"],
  "electrician-electricity":   ["electricity", "power systems", "renewable energy", "trades"],
  "microelectronics":          ["microelectronics"],
  "micro-circuits":            ["circuit design", "micro circuits"],
  "cpu-gpu-memory-design":     ["computer architecture"],
  "electrical-engineering":    ["electricity", "power systems", "engineering", "renewable energy"],
  "civil-engineering":         ["civil engineering"],
  "plumbing":                  ["plumbing", "trades"],
  "hvac":                      ["hvac"],
  "meteorology":               ["meteorology"],
  "nursing":                   ["nursing", "health science"],
  "medicine":                  ["medicine", "biology", "biotechnology", "neuroscience", "health science"],
  "law-studies":               ["law", "policy studies"],
};

/* ─── Helpers ─────────────────────────────────────────────────── */

function normalise(s: string) {
  return s.trim().toLowerCase();
}

function subjectMatchesAny(subject: string, matchers: string[]): boolean {
  const subjectLower = normalise(subject);
  return matchers.some((m) => subjectLower.includes(normalise(m)));
}

/* ─── Public API ──────────────────────────────────────────────── */

/**
 * Return modules whose `subject` matches the given path ID.
 */
export function getModulesForPath(
  pathId: string,
  allModules: LearningModule[],
): LearningModule[] {
  const matchers = PATH_SUBJECT_MATCHERS[pathId];
  if (!matchers || matchers.length === 0) return [];
  return allModules.filter((m) => subjectMatchesAny(m.subject, matchers));
}

/**
 * Return a Map from path-ID → list of module IDs.
 */
export function buildPathModuleIndex(
  allModules: LearningModule[],
): Map<string, string[]> {
  const index = new Map<string, string[]>();
  for (const pathId of Object.keys(PATH_SUBJECT_MATCHERS)) {
    const modules = getModulesForPath(pathId, allModules);
    index.set(pathId, modules.map((m) => m.id));
  }
  return index;
}

/**
 * Inverse lookup: for a given module, return all path IDs it belongs to.
 */
export function getPathsForModule(moduleSubject: string): string[] {
  const result: string[] = [];
  for (const [pathId, matchers] of Object.entries(PATH_SUBJECT_MATCHERS)) {
    if (subjectMatchesAny(moduleSubject, matchers)) {
      result.push(pathId);
    }
  }
  return result;
}

/**
 * Get all supported path IDs.
 */
export function getAllMappedPathIds(): string[] {
  return Object.keys(PATH_SUBJECT_MATCHERS);
}

/**
 * Check how many modules are covered by at least one path.
 */
export function computePathCoverage(allModules: LearningModule[]) {
  let coveredCount = 0;
  const uncoveredSubjects = new Set<string>();

  for (const m of allModules) {
    const paths = getPathsForModule(m.subject);
    if (paths.length > 0) {
      coveredCount++;
    } else {
      uncoveredSubjects.add(m.subject);
    }
  }

  return {
    totalModules: allModules.length,
    coveredModules: coveredCount,
    coveragePercent: allModules.length > 0
      ? Math.round((coveredCount / allModules.length) * 1000) / 10
      : 0,
    uncoveredSubjects: [...uncoveredSubjects].sort(),
  };
}
