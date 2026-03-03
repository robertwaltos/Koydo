/**
 * Quality rubric scoring engine for content submissions.
 *
 * Dimensions:
 *  1. Accuracy       — factual correctness
 *  2. Clarity        — language clarity, organization
 *  3. Engagement     — interactivity, multimedia, appeal
 *  4. Age-Appropriate — age/grade suitability
 *  5. Standards      — alignment with educational standards
 *
 * Each dimension scored 0–100; overall = average of all 5.
 * Minimum threshold (default 70) required to publish.
 */

export interface RubricScores {
  accuracy: number;
  clarity: number;
  engagement: number;
  ageAppropriateness: number;
  standardsAlignment: number;
}

export interface RubricResult {
  scores: RubricScores;
  overall: number;
  passed: boolean;
  minimumScore: number;
  feedback: string[];
}

export const RUBRIC_DIMENSIONS = [
  { key: "accuracy" as const, label: "Accuracy", description: "Factual correctness of content" },
  { key: "clarity" as const, label: "Clarity", description: "Language clarity and organization" },
  { key: "engagement" as const, label: "Engagement", description: "Interactive elements and appeal" },
  {
    key: "ageAppropriateness" as const,
    label: "Age Appropriateness",
    description: "Content suitability for target age group",
  },
  {
    key: "standardsAlignment" as const,
    label: "Standards Alignment",
    description: "Alignment with educational frameworks",
  },
] as const;

const DEFAULT_MINIMUM_SCORE = 70;

/**
 * Score a rubric and determine if the submission passes.
 */
export function evaluateRubric(
  scores: RubricScores,
  minimumScore = DEFAULT_MINIMUM_SCORE,
): RubricResult {
  const clamped: RubricScores = {
    accuracy: clamp(scores.accuracy, 0, 100),
    clarity: clamp(scores.clarity, 0, 100),
    engagement: clamp(scores.engagement, 0, 100),
    ageAppropriateness: clamp(scores.ageAppropriateness, 0, 100),
    standardsAlignment: clamp(scores.standardsAlignment, 0, 100),
  };

  const overall =
    (clamped.accuracy +
      clamped.clarity +
      clamped.engagement +
      clamped.ageAppropriateness +
      clamped.standardsAlignment) /
    5;

  const feedback: string[] = [];
  if (clamped.accuracy < 60) feedback.push("Accuracy needs improvement — verify facts.");
  if (clamped.clarity < 60) feedback.push("Clarity is low — improve language and structure.");
  if (clamped.engagement < 50) feedback.push("Consider adding interactive elements for engagement.");
  if (clamped.ageAppropriateness < 60) feedback.push("Content may not be suitable for the target age group.");
  if (clamped.standardsAlignment < 50) feedback.push("Strengthen alignment with educational standards.");
  if (overall < minimumScore) {
    feedback.push(
      `Overall score ${overall.toFixed(1)} is below the minimum ${minimumScore}. Revision required.`,
    );
  }

  return {
    scores: clamped,
    overall: Math.round(overall * 100) / 100,
    passed: overall >= minimumScore,
    minimumScore,
    feedback,
  };
}

/**
 * Auto-score content based on structural analysis.
 * This provides preliminary scores that reviewers can adjust.
 */
export function autoScoreContent(content: ContentForScoring): RubricScores {
  let accuracy = 50;
  let clarity = 50;
  let engagement = 40;
  let ageAppropriateness = 50;
  let standardsAlignment = 30;

  // Lessons present
  if (content.lessonCount > 0) {
    clarity += 10;
    accuracy += 5;
  }

  // Questions present (quiz quality)
  if (content.questionCount > 0) {
    engagement += 15;
    accuracy += 10;
    if (content.questionCount >= 5) engagement += 5;
    if (content.questionCount >= 10) accuracy += 5;
  }

  // Flashcards (study aids)
  if (content.flashcardCount > 0) {
    engagement += 10;
    clarity += 5;
  }

  // Objectives defined
  if (content.objectiveCount > 0) {
    standardsAlignment += 15;
    clarity += 10;
    if (content.objectiveCount >= 3) standardsAlignment += 10;
  }

  // Chunks (content depth)
  if (content.chunkCount > 3) {
    clarity += 10;
    accuracy += 5;
  }
  if (content.chunkCount > 8) {
    clarity += 5;
  }

  // Grade band specified
  if (content.hasGradeBand) {
    ageAppropriateness += 15;
  }

  // Standards mappings
  if (content.standardsCount > 0) {
    standardsAlignment += 20;
    if (content.standardsCount >= 3) standardsAlignment += 10;
  }

  // Interactive activities
  if (content.interactiveCount > 0) {
    engagement += 15;
  }

  return {
    accuracy: clamp(accuracy, 0, 100),
    clarity: clamp(clarity, 0, 100),
    engagement: clamp(engagement, 0, 100),
    ageAppropriateness: clamp(ageAppropriateness, 0, 100),
    standardsAlignment: clamp(standardsAlignment, 0, 100),
  };
}

export interface ContentForScoring {
  lessonCount: number;
  questionCount: number;
  flashcardCount: number;
  objectiveCount: number;
  chunkCount: number;
  interactiveCount: number;
  standardsCount: number;
  hasGradeBand: boolean;
}

/**
 * Extract scoring signals from a LearningModule-shaped JSON.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function extractContentMetrics(content: Record<string, any>): ContentForScoring {
  const lessons = Array.isArray(content.lessons) ? content.lessons : [];
  let questionCount = 0;
  let flashcardCount = 0;
  let objectiveCount = 0;
  let chunkCount = 0;
  let interactiveCount = 0;

  for (const lesson of lessons) {
    questionCount += Array.isArray(lesson.questions) ? lesson.questions.length : 0;
    flashcardCount += Array.isArray(lesson.flashcards) ? lesson.flashcards.length : 0;
    objectiveCount += Array.isArray(lesson.objectives) ? lesson.objectives.length : 0;
    chunkCount += Array.isArray(lesson.chunks) ? lesson.chunks.length : 0;
    interactiveCount += Array.isArray(lesson.interactiveActivities)
      ? lesson.interactiveActivities.length
      : 0;
  }

  const standardsMappings = Array.isArray(content.standardsMappings)
    ? content.standardsMappings
    : [];

  return {
    lessonCount: lessons.length,
    questionCount,
    flashcardCount,
    objectiveCount,
    chunkCount,
    interactiveCount,
    standardsCount: standardsMappings.length,
    hasGradeBand: !!content.gradeBand,
  };
}

function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v));
}
