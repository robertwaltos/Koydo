/**
 * Grounded AI Tutor — Citation, Confidence & Contradiction system
 *
 * Extracts lesson content (chunks, flashcards, Q&A, objectives) as
 * "source material" and injects it into the system prompt so the AI
 * tutor only answers from verified curriculum content. Includes:
 *
 * 1. Grounding context builder — assembles source snippets from the lesson
 * 2. Grounded system prompt — instructs the model to cite sources & express uncertainty
 * 3. Citation extractor — parses [SRC:id] markers from AI responses
 * 4. Confidence estimator — checks if the question relates to available sources
 * 5. Contradiction checker — validates AI answer facts vs curriculum sources
 */

import type { Lesson, LearningModule } from "@/lib/modules/types";

// ── Types ──────────────────────────────────────────────────────────

/** A single source snippet used for grounding */
export type GroundingSource = {
  id: string;
  kind: "chunk" | "flashcard" | "question" | "objective" | "aid" | "description";
  title: string;
  content: string;
};

/** Citation extracted from AI response */
export type Citation = {
  sourceId: string;
  kind: GroundingSource["kind"];
  title: string;
  /** The original snippet content for display */
  snippet: string;
};

/** Confidence assessment result */
export type ConfidenceAssessment = {
  /** 0-1 score: how well the question maps to available sources */
  score: number;
  /** Whether the tutor should express uncertainty */
  isLow: boolean;
  /** Explanation for logging */
  reason: string;
  /** Source IDs that matched the question */
  matchedSourceIds: string[];
};

/** Contradiction check result */
export type ContradictionResult = {
  hasContradiction: boolean;
  /** Specific contradictions found */
  contradictions: Array<{
    sourceId: string;
    sourceContent: string;
    conflictingClaim: string;
  }>;
};

/** Full grounding context passed to the prompt builder */
export type GroundingContext = {
  sources: GroundingSource[];
  lessonTitle: string;
  moduleTitle: string;
  subject: string;
  objectives: string[];
};

// ── Constants ──────────────────────────────────────────────────────

const MAX_SOURCES = 20;
const MAX_SNIPPET_LENGTH = 400;
const CONFIDENCE_THRESHOLD = 0.25;
/** Minimum keyword overlap ratio to consider a match */
const KEYWORD_MATCH_THRESHOLD = 0.15;

// ── Helpers ────────────────────────────────────────────────────────

function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + "...";
}

function extractKeywords(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2)
    .filter((w) => !STOP_WORDS.has(w));
}

const STOP_WORDS = new Set([
  "the", "and", "for", "are", "but", "not", "you", "all", "can", "had",
  "her", "was", "one", "our", "out", "has", "his", "how", "its", "let",
  "may", "who", "did", "get", "got", "him", "she", "too", "use", "way",
  "why", "about", "been", "each", "from", "have", "into", "just", "like",
  "make", "many", "more", "most", "much", "must", "only", "over", "said",
  "some", "such", "than", "that", "them", "then", "they", "this", "very",
  "what", "when", "will", "with", "also", "back", "could", "does", "else",
  "even", "here", "know", "need", "take", "want", "well", "which", "would",
  "your", "being", "between", "come", "every", "first", "other", "their",
  "these", "thing", "think", "those", "through", "where", "should",
  "really", "because", "could", "there", "something", "help", "please",
  "explain", "tell", "understand", "don", "doesn", "isn",
]);

function computeKeywordOverlap(questionKeywords: string[], sourceKeywords: string[]): number {
  if (questionKeywords.length === 0 || sourceKeywords.length === 0) return 0;
  const sourceSet = new Set(sourceKeywords);
  const matches = questionKeywords.filter((k) => sourceSet.has(k));
  return matches.length / questionKeywords.length;
}

// ── 1. Grounding Context Builder ───────────────────────────────────

/**
 * Extracts all available lesson content as GroundingSources.
 * Priority: chunks > flashcards > questions > objectives > aids > module description
 */
export function buildGroundingContext(
  lesson: Lesson,
  learningModule: LearningModule,
): GroundingContext {
  const sources: GroundingSource[] = [];

  // Lesson chunks (highest priority — main lesson content)
  if (lesson.chunks) {
    for (const chunk of lesson.chunks) {
      if (chunk.content?.trim()) {
        sources.push({
          id: `chunk:${chunk.id}`,
          kind: "chunk",
          title: chunk.title || chunk.kind || "Lesson content",
          content: truncate(chunk.content.trim(), MAX_SNIPPET_LENGTH),
        });
      }
    }
  }

  // Flashcards
  if (lesson.flashcards) {
    for (const card of lesson.flashcards) {
      sources.push({
        id: `fc:${card.id}`,
        kind: "flashcard",
        title: truncate(card.front, 80),
        content: truncate(`Q: ${card.front}\nA: ${card.back}${card.hint ? `\nHint: ${card.hint}` : ""}`, MAX_SNIPPET_LENGTH),
      });
    }
  }

  // Quiz questions with explanations
  if (lesson.questions) {
    for (const q of lesson.questions) {
      const correctOption = q.options.find((o) => o.id === q.correctOptionId);
      const explanation = q.explanation || q.hint || "";
      sources.push({
        id: `q:${q.id}`,
        kind: "question",
        title: truncate(q.text, 80),
        content: truncate(
          `Question: ${q.text}\nCorrect answer: ${correctOption?.text ?? "N/A"}${explanation ? `\nExplanation: ${explanation}` : ""}`,
          MAX_SNIPPET_LENGTH,
        ),
      });
    }
  }

  // Learning objectives
  const objectives = [
    ...(lesson.objectives ?? []),
    ...(learningModule.learningObjectives ?? []),
  ].filter(Boolean);
  if (objectives.length > 0) {
    sources.push({
      id: "obj:lesson",
      kind: "objective",
      title: "Learning Objectives",
      content: truncate(objectives.join("\n"), MAX_SNIPPET_LENGTH),
    });
  }

  // Learning aids
  if (lesson.learningAids) {
    for (const aid of lesson.learningAids) {
      if (aid.content?.trim()) {
        sources.push({
          id: `aid:${aid.id}`,
          kind: "aid",
          title: aid.title || aid.type,
          content: truncate(aid.content.trim(), MAX_SNIPPET_LENGTH),
        });
      }
    }
  }

  // Module description as fallback context
  if (learningModule.description?.trim()) {
    sources.push({
      id: "mod:desc",
      kind: "description",
      title: learningModule.title,
      content: truncate(learningModule.description.trim(), MAX_SNIPPET_LENGTH),
    });
  }

  return {
    sources: sources.slice(0, MAX_SOURCES),
    lessonTitle: lesson.title,
    moduleTitle: learningModule.title,
    subject: learningModule.subject,
    objectives,
  };
}

// ── 2. Grounded System Prompt ──────────────────────────────────────

/**
 * Builds an enhanced system prompt that instructs the AI to stay grounded
 * in the provided source material and cite specific sources.
 */
export function buildGroundedSystemPrompt(context: GroundingContext): string {
  const sourcesBlock = context.sources
    .map((s) => `[${s.id}] (${s.kind}) ${s.title}:\n${s.content}`)
    .join("\n\n");

  return `You are a concise, child-friendly teaching assistant for "${context.lessonTitle}" in ${context.subject} (${context.moduleTitle}).

GROUNDING RULES — YOU MUST FOLLOW THESE:
1. ONLY answer using information from the SOURCE MATERIAL below. If the answer is not in the sources, say "I don't have information about that in this lesson. Let me help you with what we are learning today instead."
2. After each factual claim, add a citation like [SRC:chunk:intro-1] using the source ID.
3. Keep answers under 180 words, practical, and step-by-step.
4. If you are unsure or the question is only partially covered, say so honestly: "Based on what we have in this lesson..." and only cite what you can verify.
5. Never invent facts, dates, formulas, or definitions not present in the sources.
6. For practice questions, use the questions and explanations from the sources when available.
7. If asked about something completely outside this lesson, gently redirect: "That's a great question! It's not covered in this lesson, but here's what we are learning about..."

SOURCE MATERIAL:
${sourcesBlock || "(No source material available for this lesson)"}

OBJECTIVES: ${context.objectives.length > 0 ? context.objectives.join("; ") : "General understanding of the lesson content."}`;
}

// ── 3. Citation Extractor ──────────────────────────────────────────

/**
 * Parses [SRC:id] markers from AI-generated text and returns structured citations.
 * Also returns the cleaned text with citation markers replaced by superscript numbers.
 */
export function extractCitations(
  responseText: string,
  sources: GroundingSource[],
): { cleanedText: string; citations: Citation[] } {
  const sourceMap = new Map(sources.map((s) => [s.id, s]));
  const citationRegex = /\[SRC:([^\]]+)\]/g;
  const citations: Citation[] = [];
  const seenIds = new Set<string>();

  let match: RegExpExecArray | null;
  while ((match = citationRegex.exec(responseText)) !== null) {
    const sourceId = match[1].trim();
    if (seenIds.has(sourceId)) continue;
    seenIds.add(sourceId);

    const source = sourceMap.get(sourceId);
    if (source) {
      citations.push({
        sourceId: source.id,
        kind: source.kind,
        title: source.title,
        snippet: source.content,
      });
    }
  }

  // Replace [SRC:...] markers with superscript numbers
  let citationIndex = 0;
  const idToIndex = new Map<string, number>();
  const cleanedText = responseText.replace(citationRegex, (_match, id: string) => {
    const trimmedId = id.trim();
    if (!idToIndex.has(trimmedId)) {
      citationIndex++;
      idToIndex.set(trimmedId, citationIndex);
    }
    return `[${idToIndex.get(trimmedId)}]`;
  });

  return { cleanedText, citations };
}

// ── 4. Confidence Estimator ────────────────────────────────────────

/**
 * Estimates how well the student's question maps to available source material.
 * Returns a confidence score and flags whether the tutor should express uncertainty.
 */
export function estimateConfidence(
  question: string,
  sources: GroundingSource[],
): ConfidenceAssessment {
  if (sources.length === 0) {
    return {
      score: 0,
      isLow: true,
      reason: "No source material available for grounding.",
      matchedSourceIds: [],
    };
  }

  const questionKeywords = extractKeywords(question);
  if (questionKeywords.length === 0) {
    return {
      score: 0.3,
      isLow: true,
      reason: "Question too short or generic to match sources.",
      matchedSourceIds: [],
    };
  }

  const matchedSourceIds: string[] = [];
  let bestOverlap = 0;

  for (const source of sources) {
    const sourceKeywords = extractKeywords(`${source.title} ${source.content}`);
    const overlap = computeKeywordOverlap(questionKeywords, sourceKeywords);
    if (overlap >= KEYWORD_MATCH_THRESHOLD) {
      matchedSourceIds.push(source.id);
    }
    if (overlap > bestOverlap) {
      bestOverlap = overlap;
    }
  }

  // Score based on how many sources match and best overlap
  const coverageRatio = matchedSourceIds.length / Math.min(sources.length, 5);
  const score = Math.min(1, bestOverlap * 0.6 + coverageRatio * 0.4);
  const isLow = score < CONFIDENCE_THRESHOLD;

  return {
    score: Math.round(score * 100) / 100,
    isLow,
    reason: isLow
      ? `Low keyword overlap (${Math.round(bestOverlap * 100)}%) with source material.`
      : `Good overlap (${Math.round(bestOverlap * 100)}%) with ${matchedSourceIds.length} source(s).`,
    matchedSourceIds,
  };
}

// ── 5. Contradiction Checker ───────────────────────────────────────

/**
 * Lightweight fact-level check: extracts factual claims from the AI answer
 * and checks if any directly contradict the source material.
 *
 * This is a heuristic approach (not perfect) that catches obvious conflicts
 * like wrong numbers, negated facts, or swapped correct answers.
 */
export function checkContradictions(
  aiAnswer: string,
  sources: GroundingSource[],
): ContradictionResult {
  const contradictions: ContradictionResult["contradictions"] = [];

  // Extract "correct answer" facts from question sources
  const correctAnswerSources = sources.filter((s) => s.kind === "question");
  for (const source of correctAnswerSources) {
    const correctMatch = source.content.match(/Correct answer:\s*(.+?)(?:\n|$)/i);
    if (!correctMatch) continue;

    const correctAnswer = correctMatch[1].trim().toLowerCase();
    const questionMatch = source.content.match(/Question:\s*(.+?)(?:\n|$)/i);
    const questionText = questionMatch?.[1]?.trim().toLowerCase() ?? "";

    // Check if the AI answer discusses this question but gives wrong answer
    const answerLower = aiAnswer.toLowerCase();
    if (questionText && answerLower.includes(questionText.slice(0, 30))) {
      // The AI is discussing this question — check if it gives the wrong answer
      const wrongOptions = source.content
        .split("\n")
        .filter((line) => /^(?:option|choice)/i.test(line.trim()))
        .map((line) => line.replace(/^(?:option|choice)\s*\w*:?\s*/i, "").trim().toLowerCase())
        .filter((opt) => opt !== correctAnswer);

      for (const wrongOpt of wrongOptions) {
        if (wrongOpt.length > 3 && answerLower.includes(wrongOpt) && !answerLower.includes(correctAnswer)) {
          contradictions.push({
            sourceId: source.id,
            sourceContent: `Correct: ${correctAnswer}`,
            conflictingClaim: `AI mentioned "${wrongOpt}" without the correct answer`,
          });
        }
      }
    }
  }

  // Check for negation conflicts in flashcard facts
  const flashcardSources = sources.filter((s) => s.kind === "flashcard");
  for (const source of flashcardSources) {
    const answerMatch = source.content.match(/A:\s*(.+?)(?:\n|$)/i);
    if (!answerMatch) continue;

    const factAnswer = answerMatch[1].trim().toLowerCase();
    const answerLower = aiAnswer.toLowerCase();

    // Check if AI negates a fact that the flashcard affirms
    const factKeywords = extractKeywords(factAnswer).slice(0, 5);
    if (factKeywords.length >= 2) {
      const keywordsInAnswer = factKeywords.filter((k) => answerLower.includes(k));
      const hasNegation = /\b(?:not|never|isn't|aren't|doesn't|don't|won't|cannot|can't|incorrect|wrong|false)\b/i.test(
        aiAnswer,
      );

      // If AI uses most fact keywords but with negation, flag it
      if (keywordsInAnswer.length >= factKeywords.length * 0.6 && hasNegation) {
        // Check if the original fact also has negation (double-negative = ok)
        const sourceHasNegation = /\b(?:not|never|isn't|aren't|doesn't|don't|won't|cannot|can't)\b/i.test(factAnswer);
        if (!sourceHasNegation) {
          contradictions.push({
            sourceId: source.id,
            sourceContent: truncate(factAnswer, 120),
            conflictingClaim: "AI appears to negate a curriculum fact.",
          });
        }
      }
    }
  }

  return {
    hasContradiction: contradictions.length > 0,
    contradictions,
  };
}

// ── 6. Full Grounding Pipeline ─────────────────────────────────────

export type GroundingPipelineInput = {
  lesson: Lesson;
  learningModule: LearningModule;
  question: string;
};

export type GroundingPipelineResult = {
  context: GroundingContext;
  systemPrompt: string;
  confidence: ConfidenceAssessment;
  /** True when confidence is too low — tutor should add uncertainty caveat */
  shouldExpressUncertainty: boolean;
};

/**
 * Runs the full pre-request grounding pipeline:
 * 1. Build grounding context from lesson
 * 2. Generate grounded system prompt
 * 3. Estimate confidence
 */
export function runGroundingPipeline(input: GroundingPipelineInput): GroundingPipelineResult {
  const context = buildGroundingContext(input.lesson, input.learningModule);
  const systemPrompt = buildGroundedSystemPrompt(context);
  const confidence = estimateConfidence(input.question, context.sources);

  return {
    context,
    systemPrompt,
    confidence,
    shouldExpressUncertainty: confidence.isLow,
  };
}

export type PostResponseCheck = {
  citations: Citation[];
  cleanedAnswer: string;
  contradiction: ContradictionResult;
  /** If true, the answer was modified to remove contradictions */
  wasFiltered: boolean;
  /** Final answer text after any filtering */
  finalAnswer: string;
};

/**
 * Runs post-response checks on the AI answer:
 * 1. Extract citations
 * 2. Check for contradictions
 * 3. Filter if contradictions found
 */
export function runPostResponseChecks(
  aiAnswer: string,
  sources: GroundingSource[],
): PostResponseCheck {
  const { cleanedText, citations } = extractCitations(aiAnswer, sources);
  const contradiction = checkContradictions(cleanedText, sources);

  let finalAnswer = cleanedText;
  let wasFiltered = false;

  if (contradiction.hasContradiction) {
    // Append a disclaimer rather than blocking the entire response
    finalAnswer =
      cleanedText +
      "\n\n⚠️ Note: Part of this answer may not fully match the lesson material. " +
      "Please check your lesson notes for the most accurate information.";
    wasFiltered = true;
  }

  return {
    citations,
    cleanedAnswer: cleanedText,
    contradiction,
    wasFiltered,
    finalAnswer,
  };
}
