export const SOCIAL_COHORT_VISIBILITIES = ["private", "invite_only", "public"] as const;
export type SocialCohortVisibility = (typeof SOCIAL_COHORT_VISIBILITIES)[number];

export const SOCIAL_CHALLENGE_STATUSES = ["draft", "active", "completed", "archived"] as const;
export type SocialChallengeStatus = (typeof SOCIAL_CHALLENGE_STATUSES)[number];

export const SOCIAL_CHALLENGE_EVENT_SOURCES = ["daily_challenge", "lesson_quiz", "assignment"] as const;
export type SocialChallengeEventSource = (typeof SOCIAL_CHALLENGE_EVENT_SOURCES)[number];

export const SOCIAL_CHALLENGE_EVENT_TYPES = ["challenge_attempt", "challenge_progress", "challenge_mastery"] as const;
export type SocialChallengeEventType = (typeof SOCIAL_CHALLENGE_EVENT_TYPES)[number];

const SOURCE_POINT_MULTIPLIERS: Record<SocialChallengeEventSource, number> = {
  daily_challenge: 1.15,
  lesson_quiz: 1,
  assignment: 1.25,
};

const BLOCKED_TERMS = [
  "hate",
  "kill",
  "suicide",
  "self-harm",
  "bully",
  "dox",
  "doxx",
  "sex",
  "nsfw",
];

const EXTERNAL_LINK_PATTERN = /(?:https?:\/\/|www\.)/i;
const EMAIL_PATTERN = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
const PHONE_PATTERN = /\+?\d[\d\s().-]{7,}\d/;

const EVENT_ID_PATTERN = /^[a-z0-9:_-]{6,120}$/;

const LIFECYCLE_TRANSITIONS: Record<SocialChallengeStatus, readonly SocialChallengeStatus[]> = {
  draft: ["active", "archived"],
  active: ["completed", "archived"],
  completed: ["archived"],
  archived: [],
};

export type ModerationDecision = {
  ok: boolean;
  sanitized: string;
  reason?: string;
  code?: "empty" | "too_long" | "unsafe_term" | "contact_info" | "external_link";
};

export type ValidateChallengeEventPayloadInput = {
  source: SocialChallengeEventSource;
  sourceEventId: string;
  scorePercentage: number;
  totalQuestions: number;
  completedAt?: string | null;
};

export type ValidatedChallengeEvent = {
  source: SocialChallengeEventSource;
  sourceEventId: string;
  fingerprint: string;
  scorePercentage: number;
  totalQuestions: number;
  pointsAwarded: number;
  completedAt: string;
  eventType: SocialChallengeEventType;
};

export type ChallengeEventValidationResult =
  | { ok: true; event: ValidatedChallengeEvent }
  | { ok: false; reason: string };

export type SocialChallengeLeaderboardRow = {
  userId: string;
  totalPoints: number;
  validatedEventCount: number;
  updatedAt: string;
};

export type RankedSocialChallengeLeaderboardRow = SocialChallengeLeaderboardRow & {
  rank: number;
};

export function normalizeUserFacingText(value: string, maxLength: number): string {
  if (!value) return "";
  return value
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function includesBlockedTerm(loweredInput: string): boolean {
  return BLOCKED_TERMS.some((term) => loweredInput.includes(term));
}

export function moderateUserGeneratedText(
  value: string,
  options: { maxLength: number; allowEmpty?: boolean },
): ModerationDecision {
  const normalized = normalizeUserFacingText(value, options.maxLength);

  if (!options.allowEmpty && normalized.length === 0) {
    return {
      ok: false,
      sanitized: normalized,
      reason: "Text cannot be empty.",
      code: "empty",
    };
  }

  if (value.trim().length > options.maxLength) {
    return {
      ok: false,
      sanitized: normalized,
      reason: `Text exceeds ${options.maxLength} characters.`,
      code: "too_long",
    };
  }

  const lowered = normalized.toLowerCase();
  if (includesBlockedTerm(lowered)) {
    return {
      ok: false,
      sanitized: normalized,
      reason: "Text includes blocked terms.",
      code: "unsafe_term",
    };
  }

  if (EXTERNAL_LINK_PATTERN.test(normalized)) {
    return {
      ok: false,
      sanitized: normalized,
      reason: "External links are not allowed in social cohort content.",
      code: "external_link",
    };
  }

  if (EMAIL_PATTERN.test(normalized) || PHONE_PATTERN.test(normalized)) {
    return {
      ok: false,
      sanitized: normalized,
      reason: "Contact details are not allowed in social cohort content.",
      code: "contact_info",
    };
  }

  return {
    ok: true,
    sanitized: normalized,
  };
}

export function isValidChallengeLifecycleTransition(
  currentStatus: SocialChallengeStatus,
  nextStatus: SocialChallengeStatus,
): boolean {
  if (currentStatus === nextStatus) return true;
  return LIFECYCLE_TRANSITIONS[currentStatus].includes(nextStatus);
}

function normalizeSourceEventId(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .slice(0, 120);
}

function toEventType(scorePercentage: number): SocialChallengeEventType {
  if (scorePercentage >= 0.95) return "challenge_mastery";
  if (scorePercentage >= 0.8) return "challenge_progress";
  return "challenge_attempt";
}

function computeChallengeEventPoints(input: {
  source: SocialChallengeEventSource;
  scorePercentage: number;
  totalQuestions: number;
}): number {
  const baseScore = Math.round(input.scorePercentage * 100);
  const sourceMultiplier = SOURCE_POINT_MULTIPLIERS[input.source];
  const questionBonus = Math.min(30, Math.max(0, input.totalQuestions));
  const computed = Math.round(baseScore * sourceMultiplier + questionBonus);
  return Math.max(10, Math.min(300, computed));
}

export function validateChallengeEventPayload(
  input: ValidateChallengeEventPayloadInput,
): ChallengeEventValidationResult {
  const sourceEventId = normalizeSourceEventId(input.sourceEventId);
  if (!EVENT_ID_PATTERN.test(sourceEventId)) {
    return {
      ok: false,
      reason: "sourceEventId must be 6-120 chars and use [a-z0-9:_-].",
    };
  }

  if (!Number.isFinite(input.scorePercentage) || input.scorePercentage < 0 || input.scorePercentage > 1) {
    return {
      ok: false,
      reason: "scorePercentage must be between 0 and 1.",
    };
  }

  if (!Number.isInteger(input.totalQuestions) || input.totalQuestions < 1 || input.totalQuestions > 500) {
    return {
      ok: false,
      reason: "totalQuestions must be an integer between 1 and 500.",
    };
  }

  // Enforce basic quality threshold before leaderboard credit.
  if (input.scorePercentage < 0.5) {
    return {
      ok: false,
      reason: "Minimum score threshold not met for leaderboard credit.",
    };
  }

  const completedAt =
    typeof input.completedAt === "string" && Number.isFinite(Date.parse(input.completedAt))
      ? new Date(input.completedAt).toISOString()
      : new Date().toISOString();

  const pointsAwarded = computeChallengeEventPoints({
    source: input.source,
    scorePercentage: input.scorePercentage,
    totalQuestions: input.totalQuestions,
  });

  return {
    ok: true,
    event: {
      source: input.source,
      sourceEventId,
      fingerprint: `${input.source}:${sourceEventId}`,
      scorePercentage: Math.max(0, Math.min(1, input.scorePercentage)),
      totalQuestions: input.totalQuestions,
      pointsAwarded,
      completedAt,
      eventType: toEventType(input.scorePercentage),
    },
  };
}

function isMetadataSafeString(value: string): boolean {
  if (value.length > 180) return false;
  if (EXTERNAL_LINK_PATTERN.test(value)) return false;
  if (EMAIL_PATTERN.test(value) || PHONE_PATTERN.test(value)) return false;
  if (includesBlockedTerm(value.toLowerCase())) return false;
  return true;
}

export function sanitizeChallengeEventMetadata(input: unknown): Record<string, string | number | boolean> {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return {};
  }

  const output: Record<string, string | number | boolean> = {};
  const entries = Object.entries(input as Record<string, unknown>).slice(0, 16);

  for (const [rawKey, rawValue] of entries) {
    const key = normalizeUserFacingText(rawKey, 40).replace(/[^a-zA-Z0-9_.-]/g, "");
    if (!key) continue;

    if (typeof rawValue === "string") {
      const normalized = normalizeUserFacingText(rawValue, 180);
      if (!isMetadataSafeString(normalized)) continue;
      output[key] = normalized;
      continue;
    }

    if (typeof rawValue === "number") {
      if (!Number.isFinite(rawValue)) continue;
      output[key] = Math.round(rawValue * 1000) / 1000;
      continue;
    }

    if (typeof rawValue === "boolean") {
      output[key] = rawValue;
    }
  }

  return output;
}

export function applyValidatedEventToLeaderboard(
  current: SocialChallengeLeaderboardRow | null,
  event: ValidatedChallengeEvent,
  userId: string,
): SocialChallengeLeaderboardRow {
  const currentPoints = current?.totalPoints ?? 0;
  const currentValidatedCount = current?.validatedEventCount ?? 0;

  return {
    userId,
    totalPoints: Math.max(0, currentPoints + event.pointsAwarded),
    validatedEventCount: currentValidatedCount + 1,
    updatedAt: event.completedAt,
  };
}

export function rankChallengeLeaderboard(
  rows: readonly SocialChallengeLeaderboardRow[],
): RankedSocialChallengeLeaderboardRow[] {
  const sorted = [...rows].sort((left, right) => {
    if (right.totalPoints !== left.totalPoints) {
      return right.totalPoints - left.totalPoints;
    }

    if (right.validatedEventCount !== left.validatedEventCount) {
      return right.validatedEventCount - left.validatedEventCount;
    }

    const leftUpdatedAt = Date.parse(left.updatedAt);
    const rightUpdatedAt = Date.parse(right.updatedAt);
    if (leftUpdatedAt !== rightUpdatedAt) {
      return leftUpdatedAt - rightUpdatedAt;
    }

    return left.userId.localeCompare(right.userId);
  });

  return sorted.map((row, index) => ({
    ...row,
    rank: index + 1,
  }));
}

export function buildChallengeAccountabilityNudge(input: {
  rank: number;
  participantCount: number;
  pointsAwarded: number;
}): string {
  if (input.rank <= 1) {
    return "You are leading your cohort. Keep your streak alive.";
  }

  if (input.rank <= 3) {
    return "You are in the top 3. One more strong session can move you to #1.";
  }

  const safeParticipantCount = Math.max(1, input.participantCount);
  const percentile = Math.round(((safeParticipantCount - input.rank + 1) / safeParticipantCount) * 100);
  if (percentile >= 50) {
    return "You are in the top half. Keep momentum with your next challenge run.";
  }

  if (input.pointsAwarded >= 80) {
    return "Strong effort. A second validated event today will boost your rank quickly.";
  }

  return "Small daily progress compounds. Complete another validated challenge to climb the board.";
}