import { buildMasterySkillGraph } from "@/lib/mastery/skill-graph";
import { getAllLearningModules, getLearningModuleById } from "@/lib/modules";

export type AssignmentBuilderExam = {
  id: string;
  name: string;
  timingMinutes: number | null;
  blueprint: unknown;
};

export type AssignmentBuilderSuggestion = {
  targetType: "exam" | "module";
  examId: string | null;
  moduleId: string | null;
  label: string;
  reason: string;
  estimatedMinutes: number;
  confidence: number;
};

const DEFAULT_MODULE_MINUTES = 24;
const MAX_SUGGESTIONS = 6;
const STOP_WORDS = new Set([
  "and",
  "the",
  "for",
  "with",
  "from",
  "into",
  "that",
  "this",
  "your",
  "their",
  "are",
  "was",
  "were",
  "have",
  "has",
  "using",
  "into",
  "over",
  "under",
  "core",
  "domain",
  "skill",
]);

type CachedIndexes = {
  moduleSearchRows: Array<{
    moduleId: string;
    moduleTitle: string;
    searchBlob: string;
    estimatedMinutes: number;
  }>;
  skillRows: Array<{
    moduleId: string;
    moduleTitle: string;
    skillId: string;
    skillLabel: string;
    searchBlob: string;
    estimatedMinutes: number;
  }>;
};

let cachedIndexes: CachedIndexes | null = null;

function normalize(value: string) {
  return value.trim().toLowerCase();
}

function tokenize(value: string) {
  return normalize(value)
    .split(/[^a-z0-9]+/g)
    .filter((token) => token.length >= 2 && !STOP_WORDS.has(token));
}

function toFiniteNumber(value: unknown) {
  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : null;
}

function clampMinutes(value: number | null | undefined) {
  if (!Number.isFinite(value)) return DEFAULT_MODULE_MINUTES;
  return Math.max(5, Math.min(240, Math.round(Number(value))));
}

function overlapScore(leftTokens: string[], rightTokens: string[]) {
  if (leftTokens.length === 0 || rightTokens.length === 0) return 0;
  let score = 0;
  for (const token of leftTokens) {
    if (rightTokens.some((entry) => entry.includes(token) || token.includes(entry))) {
      score += 1;
    }
  }
  return score;
}

function extractDomainNamesFromBlueprint(blueprint: unknown) {
  if (!blueprint || typeof blueprint !== "object" || Array.isArray(blueprint)) return [] as string[];
  const domains = (blueprint as { domains?: unknown }).domains;
  if (!Array.isArray(domains)) return [] as string[];
  return domains
    .map((entry) => {
      if (!entry || typeof entry !== "object" || Array.isArray(entry)) return null;
      const name = (entry as { name?: unknown }).name;
      return typeof name === "string" ? name.trim() : null;
    })
    .filter((value): value is string => Boolean(value));
}

function estimateModuleMinutes(moduleId: string) {
  const learningModule = getLearningModuleById(moduleId);
  if (!learningModule) return DEFAULT_MODULE_MINUTES;

  let totalDuration = 0;
  let knownDurationCount = 0;
  for (const lesson of learningModule.lessons) {
    const lessonDuration = toFiniteNumber(lesson.duration);
    if (lessonDuration == null) continue;
    totalDuration += lessonDuration;
    knownDurationCount += 1;
  }

  if (knownDurationCount > 0 && totalDuration > 0) {
    return clampMinutes(totalDuration);
  }

  return clampMinutes(learningModule.lessons.length * 8);
}

function buildIndexes() {
  if (cachedIndexes) return cachedIndexes;

  const modules = getAllLearningModules();
  const moduleSearchRows = modules.map((module) => {
    const lessonTitles = module.lessons.map((lesson) => lesson.title).join(" ");
    const lessonSkills = module.lessons
      .flatMap((lesson) => lesson.questions ?? [])
      .map((question) => (typeof question.skillId === "string" ? question.skillId : ""))
      .filter((value) => value.length > 0)
      .join(" ");
    const objectives = (module.learningObjectives ?? []).join(" ");
    const tags = (module.tags ?? []).join(" ");
    const searchBlob = normalize(
      `${module.subject} ${module.title} ${module.description} ${lessonTitles} ${lessonSkills} ${objectives} ${tags}`,
    );

    return {
      moduleId: module.id,
      moduleTitle: module.title,
      searchBlob,
      estimatedMinutes: estimateModuleMinutes(module.id),
    };
  });

  const graph = buildMasterySkillGraph(modules);
  const skillRows = graph.nodes.map((node) => ({
    moduleId: node.moduleId,
    moduleTitle: node.moduleTitle,
    skillId: node.id,
    skillLabel: node.label,
    searchBlob: normalize(`${node.id} ${node.label} ${node.subject} ${node.moduleTitle}`),
    estimatedMinutes: estimateModuleMinutes(node.moduleId),
  }));

  cachedIndexes = {
    moduleSearchRows,
    skillRows,
  };
  return cachedIndexes;
}

export function estimateAssignmentMinutes(params: {
  examId: string | null;
  moduleId: string | null;
  examTimingMinutesById: Map<string, number>;
}) {
  if (params.examId && params.examTimingMinutesById.has(params.examId)) {
    return clampMinutes(params.examTimingMinutesById.get(params.examId));
  }
  if (params.moduleId) {
    return estimateModuleMinutes(params.moduleId);
  }
  return DEFAULT_MODULE_MINUTES;
}

export function buildDomainAssignmentSuggestions(params: {
  domain: string;
  exams: AssignmentBuilderExam[];
  maxSuggestions?: number;
}): AssignmentBuilderSuggestion[] {
  const indexes = buildIndexes();
  const domain = params.domain.trim();
  const domainNormalized = normalize(domain);
  const domainTokens = tokenize(domain);
  const maxSuggestions = Math.max(1, Math.min(MAX_SUGGESTIONS, params.maxSuggestions ?? 3));

  const examSuggestions: AssignmentBuilderSuggestion[] = [];
  for (const exam of params.exams) {
    const domainNames = extractDomainNamesFromBlueprint(exam.blueprint);
    const examText = normalize(`${exam.name} ${domainNames.join(" ")}`);
    const examTokens = tokenize(examText);
    const includesDomain = examText.includes(domainNormalized);
    const tokenMatch = overlapScore(domainTokens, examTokens);
    if (!includesDomain && tokenMatch === 0) continue;

    examSuggestions.push({
      targetType: "exam",
      examId: exam.id,
      moduleId: null,
      label: exam.name,
      reason: includesDomain
        ? `Exam blueprint aligns to "${domain}".`
        : `Exam domains overlap with "${domain}".`,
      estimatedMinutes: clampMinutes(exam.timingMinutes),
      confidence: includesDomain ? 10 + tokenMatch : 7 + tokenMatch,
    });
  }

  const moduleSuggestions: AssignmentBuilderSuggestion[] = [];
  for (const entry of indexes.moduleSearchRows) {
    const includesDomain = entry.searchBlob.includes(domainNormalized);
    const tokenMatch = overlapScore(domainTokens, tokenize(entry.searchBlob));
    if (!includesDomain && tokenMatch === 0) continue;

    moduleSuggestions.push({
      targetType: "module",
      examId: null,
      moduleId: entry.moduleId,
      label: entry.moduleTitle,
      reason: includesDomain
        ? `Module content aligns to "${domain}".`
        : `Module keywords overlap with "${domain}".`,
      estimatedMinutes: entry.estimatedMinutes,
      confidence: includesDomain ? 8 + tokenMatch : 5 + tokenMatch,
    });
  }

  return [...examSuggestions, ...moduleSuggestions]
    .sort((left, right) => right.confidence - left.confidence)
    .slice(0, maxSuggestions);
}

export function buildSkillAssignmentSuggestions(params: {
  skillQuery: string;
  maxSuggestions?: number;
}): AssignmentBuilderSuggestion[] {
  const indexes = buildIndexes();
  const skillQuery = params.skillQuery.trim();
  const normalizedQuery = normalize(skillQuery);
  const queryTokens = tokenize(skillQuery);
  const maxSuggestions = Math.max(1, Math.min(MAX_SUGGESTIONS, params.maxSuggestions ?? 3));

  const byModule = new Map<
    string,
    {
      moduleTitle: string;
      estimatedMinutes: number;
      confidence: number;
      reason: string;
    }
  >();

  for (const row of indexes.skillRows) {
    const includesQuery = row.searchBlob.includes(normalizedQuery);
    const tokenMatch = overlapScore(queryTokens, tokenize(row.searchBlob));
    if (!includesQuery && tokenMatch === 0) continue;

    const confidence = includesQuery ? 10 + tokenMatch : 6 + tokenMatch;
    const current = byModule.get(row.moduleId);
    if (!current || confidence > current.confidence) {
      byModule.set(row.moduleId, {
        moduleTitle: row.moduleTitle,
        estimatedMinutes: row.estimatedMinutes,
        confidence,
        reason: includesQuery
          ? `Targets skill "${row.skillLabel}".`
          : `Related to skill query "${skillQuery}".`,
      });
    }
  }

  return [...byModule.entries()]
    .map(([moduleId, value]) => ({
      targetType: "module" as const,
      examId: null,
      moduleId,
      label: value.moduleTitle,
      reason: value.reason,
      estimatedMinutes: value.estimatedMinutes,
      confidence: value.confidence,
    }))
    .sort((left, right) => right.confidence - left.confidence)
    .slice(0, maxSuggestions);
}
