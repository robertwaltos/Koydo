export const CREATOR_SUBMISSION_STATUSES = [
  "draft",
  "in_review",
  "approved",
  "published",
  "rejected",
] as const;

export type CreatorSubmissionStatus = (typeof CREATOR_SUBMISSION_STATUSES)[number];

export const CREATOR_CONTENT_TYPES = [
  "lesson_pack",
  "assessment_pack",
  "activity_pack",
  "audiobook_pack",
  "video_pack",
] as const;

export type CreatorContentType = (typeof CREATOR_CONTENT_TYPES)[number];

export const RIGHTS_BASIS_OPTIONS = [
  "owned",
  "licensed",
  "public_domain",
  "fair_use_pending",
] as const;

export type RightsBasis = (typeof RIGHTS_BASIS_OPTIONS)[number];

export type RubricBreakdown = {
  instructionalQuality: number;
  factualAccuracy: number;
  originality: number;
  safetyCompliance: number;
};

export type ProvenanceMetadata = {
  sourceType: "original" | "adapted" | "licensed" | "public_domain";
  sourceUri: string | null;
  sourceLicense: string;
  sourceAttribution: string | null;
};

export type RightsMetadata = {
  rightsOwner: string;
  rightsBasis: RightsBasis;
  rightsVerified: boolean;
  evidenceRef: string | null;
};

export const MINIMUM_PUBLISH_RUBRIC_SCORE = 80;

const REVIEW_TRANSITIONS: Record<CreatorSubmissionStatus, readonly CreatorSubmissionStatus[]> = {
  draft: ["in_review", "rejected"],
  in_review: ["approved", "rejected", "draft"],
  approved: ["published", "rejected", "draft"],
  published: [],
  rejected: ["draft", "in_review"],
};

const BLOCKED_TERMS = ["hate", "kill", "suicide", "self-harm", "nsfw", "dox", "bully"];
const URL_PATTERN = /(?:https?:\/\/|www\.)/i;
const EMAIL_PATTERN = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
const PHONE_PATTERN = /\+?\d[\d\s().-]{7,}\d/;

export function normalizeCreatorText(value: string, maxLength: number): string {
  return value
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

export function moderateCreatorText(
  value: string,
  options: { maxLength: number; allowEmpty?: boolean },
): { ok: boolean; sanitized: string; reason?: string } {
  const sanitized = normalizeCreatorText(value, options.maxLength);

  if (!options.allowEmpty && sanitized.length === 0) {
    return { ok: false, sanitized, reason: "Text cannot be empty." };
  }

  if (value.trim().length > options.maxLength) {
    return { ok: false, sanitized, reason: `Text exceeds ${options.maxLength} characters.` };
  }

  const lowered = sanitized.toLowerCase();
  if (BLOCKED_TERMS.some((term) => lowered.includes(term))) {
    return { ok: false, sanitized, reason: "Text includes blocked terms." };
  }

  if (URL_PATTERN.test(sanitized) || EMAIL_PATTERN.test(sanitized) || PHONE_PATTERN.test(sanitized)) {
    return {
      ok: false,
      sanitized,
      reason: "Text cannot include links or personal contact information.",
    };
  }

  return { ok: true, sanitized };
}

export function buildRubricScoreFromBreakdown(breakdown: RubricBreakdown): number {
  const metrics = [
    breakdown.instructionalQuality,
    breakdown.factualAccuracy,
    breakdown.originality,
    breakdown.safetyCompliance,
  ];

  for (const metric of metrics) {
    if (!Number.isFinite(metric) || metric < 0 || metric > 5) {
      throw new Error("Rubric metrics must be numbers between 0 and 5.");
    }
  }

  const average = metrics.reduce((sum, value) => sum + value, 0) / metrics.length;
  return Math.round(average * 20 * 100) / 100;
}

export function isValidSubmissionTransition(
  currentStatus: CreatorSubmissionStatus,
  nextStatus: CreatorSubmissionStatus,
): boolean {
  if (currentStatus === nextStatus) return true;
  return REVIEW_TRANSITIONS[currentStatus].includes(nextStatus);
}

export function normalizeProvenanceMetadata(
  input: ProvenanceMetadata,
): ProvenanceMetadata {
  return {
    sourceType: input.sourceType,
    sourceUri: input.sourceUri ? normalizeCreatorText(input.sourceUri, 500) : null,
    sourceLicense: normalizeCreatorText(input.sourceLicense, 120),
    sourceAttribution: input.sourceAttribution
      ? normalizeCreatorText(input.sourceAttribution, 180)
      : null,
  };
}

export function normalizeRightsMetadata(input: RightsMetadata): RightsMetadata {
  return {
    rightsOwner: normalizeCreatorText(input.rightsOwner, 160),
    rightsBasis: input.rightsBasis,
    rightsVerified: Boolean(input.rightsVerified),
    evidenceRef: input.evidenceRef ? normalizeCreatorText(input.evidenceRef, 280) : null,
  };
}

export function canPublishSubmission(input: {
  status: CreatorSubmissionStatus;
  rubricScore: number | null;
  rights: RightsMetadata;
}): { ok: boolean; reason?: string } {
  if (input.status !== "approved") {
    return { ok: false, reason: "Submission must be approved before publishing." };
  }

  if (!Number.isFinite(input.rubricScore ?? NaN) || (input.rubricScore ?? 0) < MINIMUM_PUBLISH_RUBRIC_SCORE) {
    return {
      ok: false,
      reason: `Rubric score must be at least ${MINIMUM_PUBLISH_RUBRIC_SCORE} to publish.`,
    };
  }

  if (!input.rights.rightsVerified) {
    return { ok: false, reason: "Rights verification is required before publishing." };
  }

  if (input.rights.rightsBasis === "fair_use_pending") {
    return {
      ok: false,
      reason: "rightsBasis=fair_use_pending cannot be published.",
    };
  }

  if (!input.rights.rightsOwner) {
    return {
      ok: false,
      reason: "rightsOwner is required before publishing.",
    };
  }

  return { ok: true };
}