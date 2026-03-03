/**
 * Knowledge Graph — Concept-level index + cross-subject search.
 *
 * Builds a concept index from the module catalog that maps shared concepts
 * across subjects. Enables prerequisite traversal and mastery-weighted search.
 *
 * Works alongside the existing skill graph (skill-graph.ts) by providing:
 *  1. A concept taxonomy keyed by normalized concept terms
 *  2. An inverted index: concept → modules, lessons, questions
 *  3. Cross-subject edges between modules sharing concepts
 *  4. Search API with prerequisite-aware ranking
 */

import type { LearningModule, Lesson, Question } from "@/lib/modules/types";
import {
  buildMasterySkillGraph,
  type MasterySkillGraph,
  type SkillGraphNode,
} from "@/lib/mastery/skill-graph";

// ── Types ───────────────────────────────────────────────────────────

export interface ConceptNode {
  id: string;                 // normalized concept key
  label: string;              // human-readable label
  subjects: string[];         // subjects this concept appears in
  moduleIds: string[];        // modules containing this concept
  lessonIds: string[];        // lessons mentioning this concept
  questionCount: number;      // questions referencing this concept
  relatedConcepts: string[];  // sibling / related concept IDs
  skills: string[];           // skill graph node IDs linked to this concept
}

export interface ConceptEdge {
  fromConceptId: string;
  toConceptId: string;
  relationship: "prerequisite" | "related" | "cross_subject";
  weight: number; // 0-1, strength of connection
}

export interface KnowledgeGraph {
  generatedAt: string;
  concepts: Map<string, ConceptNode>;
  edges: ConceptEdge[];
  conceptCount: number;
  crossSubjectEdgeCount: number;
}

export interface KnowledgeSearchResult {
  conceptId: string;
  label: string;
  score: number;
  subjects: string[];
  modules: KnowledgeSearchModule[];
  relatedConcepts: string[];
  prerequisiteConcepts: string[];
}

export interface KnowledgeSearchModule {
  moduleId: string;
  moduleTitle: string;
  subject: string;
  lessonCount: number;
  questionCount: number;
  relevanceScore: number;
}

// ── Concept Extraction ─────────────────────────────────────────────

/**
 * Normalize a term into a concept key.
 */
function normalizeConcept(term: string): string {
  return term
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim()
    .slice(0, 60);
}

/**
 * Extract concept terms from a module's content.
 * Sources: title, tags, learning objectives, skill IDs, lesson titles,
 * chunk content keywords, question text, flashcard terms.
 */
function extractConceptTerms(mod: LearningModule): string[] {
  const terms = new Set<string>();

  // Module-level signals
  const titleWords = mod.title.split(/[\s:,\-–—]+/).filter((w) => w.length > 2);
  for (const w of titleWords) {
    if (!STOP_WORDS.has(w.toLowerCase())) terms.add(w.toLowerCase());
  }

  if (mod.tags) {
    for (const tag of mod.tags) {
      if (tag.length > 2 && !STOP_WORDS.has(tag.toLowerCase())) {
        terms.add(tag.toLowerCase());
      }
    }
  }

  if (mod.learningObjectives) {
    for (const obj of mod.learningObjectives) {
      extractKeywords(obj).forEach((k) => terms.add(k));
    }
  }

  // Lesson-level signals
  for (const lesson of mod.lessons ?? []) {
    // Lesson title
    const lessonWords = lesson.title.split(/[\s:,\-–—]+/).filter((w) => w.length > 2);
    for (const w of lessonWords) {
      if (!STOP_WORDS.has(w.toLowerCase())) terms.add(w.toLowerCase());
    }

    // Objectives
    for (const obj of lesson.objectives ?? []) {
      extractKeywords(obj).forEach((k) => terms.add(k));
    }

    // Questions with skillId
    for (const q of lesson.questions ?? []) {
      if (q.skillId && q.skillId !== "recall") {
        // Decompose skillId like "biology-101-skill-photosynthesis" → "photosynthesis"
        const parts = q.skillId.split("-").filter((p) => p.length > 2 && !STOP_WORDS.has(p));
        for (const p of parts) {
          if (!/^\d+$/.test(p)) terms.add(p); // skip pure numbers
        }
      }
    }

    // Chunk content (first 100 chars for keyword extraction)
    for (const chunk of lesson.chunks ?? []) {
      if (chunk.content) {
        extractKeywords(chunk.content.slice(0, 200)).forEach((k) => terms.add(k));
      }
    }

    // Flashcard fronts
    for (const fc of lesson.flashcards ?? []) {
      extractKeywords(fc.front).forEach((k) => terms.add(k));
    }
  }

  return [...terms].filter((t) => t.length > 2);
}

/**
 * Extract keywords from text (simple NLP-free approach).
 */
function extractKeywords(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 3 && !STOP_WORDS.has(w))
    .slice(0, 15);
}

const STOP_WORDS = new Set([
  "the", "and", "for", "are", "but", "not", "you", "all", "can", "her",
  "was", "one", "our", "out", "has", "had", "this", "that", "with", "have",
  "from", "they", "been", "said", "each", "which", "their", "will", "way",
  "about", "many", "then", "them", "would", "make", "like", "into", "just",
  "over", "such", "take", "than", "some", "could", "what", "there", "these",
  "other", "when", "more", "very", "also", "after", "know", "because",
  "through", "back", "only", "year", "much", "most", "long", "come", "still",
  "should", "well", "between", "using", "use", "used", "learn", "lesson",
  "module", "activity", "students", "student", "understand", "understanding",
  "introduction", "chapter", "section", "topic", "part", "unit", "skill",
  "skills", "core", "curriculum", "interactive", "quiz", "test", "review",
  "practice", "explore", "basics", "advanced", "fundamental", "fundamentals",
  "overview", "guide", "how", "does", "work", "works", "what", "concepts",
  "concept", "define", "explain", "describe", "identify",
]);

// ── Graph Construction ─────────────────────────────────────────────

/**
 * Build the knowledge graph from all learning modules.
 * This is a full-catalog operation; results should be cached.
 */
export function buildKnowledgeGraph(modules: LearningModule[]): KnowledgeGraph {
  const concepts = new Map<string, ConceptNode>();
  const edges: ConceptEdge[] = [];

  // Phase 1: Extract concepts from each module
  const moduleConceptMap = new Map<string, string[]>(); // moduleId → conceptIds

  for (const mod of modules) {
    const terms = extractConceptTerms(mod);
    const conceptIds: string[] = [];

    for (const term of terms) {
      const conceptId = normalizeConcept(term);
      if (!conceptId) continue;
      conceptIds.push(conceptId);

      let node = concepts.get(conceptId);
      if (!node) {
        node = {
          id: conceptId,
          label: term,
          subjects: [],
          moduleIds: [],
          lessonIds: [],
          questionCount: 0,
          relatedConcepts: [],
          skills: [],
        };
        concepts.set(conceptId, node);
      }

      if (!node.subjects.includes(mod.subject)) {
        node.subjects.push(mod.subject);
      }
      if (!node.moduleIds.includes(mod.id)) {
        node.moduleIds.push(mod.id);
      }

      // Count questions mentioning this concept
      for (const lesson of mod.lessons ?? []) {
        if (!node.lessonIds.includes(lesson.id)) {
          node.lessonIds.push(lesson.id);
        }
        for (const q of lesson.questions ?? []) {
          if (q.skillId?.toLowerCase().includes(term) || q.text?.toLowerCase().includes(term)) {
            node.questionCount++;
          }
        }
      }
    }

    moduleConceptMap.set(mod.id, [...new Set(conceptIds)]);
  }

  // Phase 2: Build cross-subject edges
  const conceptArr = [...concepts.values()];
  for (const concept of conceptArr) {
    if (concept.subjects.length > 1) {
      // This concept spans multiple subjects — create cross-subject edges
      // between pairs of modules
      for (let i = 0; i < concept.moduleIds.length; i++) {
        for (let j = i + 1; j < concept.moduleIds.length; j++) {
          const modA = modules.find((m) => m.id === concept.moduleIds[i]);
          const modB = modules.find((m) => m.id === concept.moduleIds[j]);
          if (modA && modB && modA.subject !== modB.subject) {
            // Check if this edge already exists
            const existing = edges.find(
              (e) =>
                e.fromConceptId === concept.id &&
                e.toConceptId === concept.id &&
                e.relationship === "cross_subject",
            );
            if (!existing) {
              edges.push({
                fromConceptId: concept.id,
                toConceptId: concept.id,
                relationship: "cross_subject",
                weight: Math.min(concept.moduleIds.length / 10, 1),
              });
            }
          }
        }
      }
    }
  }

  // Phase 3: Build related-concept edges (co-occurrence in same module)
  for (const [, conceptIds] of moduleConceptMap) {
    for (let i = 0; i < conceptIds.length && i < 20; i++) {
      for (let j = i + 1; j < conceptIds.length && j < 20; j++) {
        const a = concepts.get(conceptIds[i]);
        const b = concepts.get(conceptIds[j]);
        if (a && b) {
          if (!a.relatedConcepts.includes(b.id)) {
            a.relatedConcepts.push(b.id);
          }
          if (!b.relatedConcepts.includes(a.id)) {
            b.relatedConcepts.push(a.id);
          }
        }
      }
    }
  }

  // Trim related concepts to top 10 by frequency
  for (const concept of concepts.values()) {
    concept.relatedConcepts = concept.relatedConcepts.slice(0, 10);
  }

  return {
    generatedAt: new Date().toISOString(),
    concepts,
    edges,
    conceptCount: concepts.size,
    crossSubjectEdgeCount: edges.filter((e) => e.relationship === "cross_subject").length,
  };
}

// ── Search ──────────────────────────────────────────────────────────

export interface KnowledgeSearchInput {
  query: string;
  subject?: string;            // filter to subject
  includePrerequisites?: boolean; // traverse prerequisite edges
  masteryScores?: Map<string, number>; // skillId → mastery 0-1 for ranking
  limit?: number;
}

/**
 * Search the knowledge graph for concepts matching a query.
 * Returns ranked results with cross-subject modules and prerequisite chains.
 */
export function searchKnowledgeGraph(
  graph: KnowledgeGraph,
  skillGraph: MasterySkillGraph,
  input: KnowledgeSearchInput,
): KnowledgeSearchResult[] {
  const queryTerms = input.query
    .toLowerCase()
    .split(/\s+/)
    .filter((t) => t.length > 2 && !STOP_WORDS.has(t))
    .map(normalizeConcept);

  if (queryTerms.length === 0) return [];

  const scored: { concept: ConceptNode; score: number }[] = [];

  for (const concept of graph.concepts.values()) {
    let score = 0;

    // Exact match boost
    for (const term of queryTerms) {
      if (concept.id === term) {
        score += 10;
      } else if (concept.id.includes(term) || term.includes(concept.id)) {
        score += 5;
      } else if (concept.label.includes(term)) {
        score += 3;
      }
    }

    if (score === 0) continue;

    // Subject filter
    if (input.subject && !concept.subjects.includes(input.subject)) {
      score *= 0.3; // penalize but don't exclude — cross-subject discovery
    }

    // Cross-subject bonus (more subjects = higher value for graph search)
    if (concept.subjects.length > 1) {
      score += concept.subjects.length * 0.5;
    }

    // Content depth bonus
    score += Math.min(concept.moduleIds.length * 0.3, 3);
    score += Math.min(concept.questionCount * 0.1, 2);

    // Mastery relevance: boost concepts where user has low mastery
    if (input.masteryScores) {
      let avgMastery = 0;
      let masteryCount = 0;
      for (const skillId of concept.skills) {
        const mastery = input.masteryScores.get(skillId);
        if (mastery !== undefined) {
          avgMastery += mastery;
          masteryCount++;
        }
      }
      if (masteryCount > 0) {
        avgMastery /= masteryCount;
        // Lower mastery = higher relevance (more to learn)
        score += (1 - avgMastery) * 3;
      }
    }

    scored.push({ concept, score });
  }

  // Sort by score descending
  scored.sort((a, b) => b.score - a.score);

  const limit = input.limit ?? 10;
  const topResults = scored.slice(0, limit);

  // Build results with module details and prerequisite chains
  return topResults.map(({ concept, score }) => {
    // Find prerequisite concepts via skill graph edges
    const prerequisiteConcepts: string[] = [];
    if (input.includePrerequisites) {
      for (const skillId of concept.skills) {
        const skillNode = skillGraph.nodes.find((n: SkillGraphNode) => n.id === skillId);
        if (skillNode) {
          for (const prereqId of skillNode.prerequisiteSkillIds) {
            // Find concepts linked to this prerequisite skill
            for (const [cid, cnode] of graph.concepts) {
              if (cnode.skills.includes(prereqId) && !prerequisiteConcepts.includes(cid)) {
                prerequisiteConcepts.push(cid);
              }
            }
          }
        }
      }
    }

    // Build module summaries
    const modules: KnowledgeSearchModule[] = concept.moduleIds
      .slice(0, 10)
      .map((modId) => {
        const lessonCount = concept.lessonIds.filter((lid) =>
          lid.startsWith(modId),
        ).length || 1;

        return {
          moduleId: modId,
          moduleTitle: modId.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
          subject: concept.subjects[0] ?? "General",
          lessonCount,
          questionCount: Math.ceil(concept.questionCount / Math.max(concept.moduleIds.length, 1)),
          relevanceScore: score,
        };
      });

    return {
      conceptId: concept.id,
      label: concept.label,
      score,
      subjects: concept.subjects,
      modules,
      relatedConcepts: concept.relatedConcepts.slice(0, 5),
      prerequisiteConcepts: prerequisiteConcepts.slice(0, 5),
    };
  });
}

// ── Graph Cache ─────────────────────────────────────────────────────

let cachedGraph: KnowledgeGraph | null = null;
let cachedSkillGraph: MasterySkillGraph | null = null;
let cacheTimestamp = 0;
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes

/**
 * Get or build the knowledge graph (cached).
 */
export function getOrBuildKnowledgeGraph(
  modules: LearningModule[],
): { knowledgeGraph: KnowledgeGraph; skillGraph: MasterySkillGraph } {
  const now = Date.now();
  if (cachedGraph && cachedSkillGraph && now - cacheTimestamp < CACHE_TTL_MS) {
    return { knowledgeGraph: cachedGraph, skillGraph: cachedSkillGraph };
  }

  cachedSkillGraph = buildMasterySkillGraph(modules);
  cachedGraph = buildKnowledgeGraph(modules);

  // Link skill graph nodes to concept nodes
  for (const skillNode of cachedSkillGraph.nodes) {
    const conceptKey = normalizeConcept(skillNode.label);
    const concept = cachedGraph.concepts.get(conceptKey);
    if (concept && !concept.skills.includes(skillNode.id)) {
      concept.skills.push(skillNode.id);
    }
  }

  cacheTimestamp = now;
  return { knowledgeGraph: cachedGraph, skillGraph: cachedSkillGraph };
}
