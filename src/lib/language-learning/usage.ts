import type { SupabaseClient } from "@supabase/supabase-js";
import { isBillableSubscription } from "@/lib/billing/subscription";
import { LANGUAGE_AI_BUDGET_LIMITS } from "./policy";
import { getLanguageRuntimeConfig } from "./runtime-config";
import {
  getLanguagePlanById,
  getLanguagePlanIdForProfile,
  getScoredAttemptLimitForPlan,
  type LanguagePlanId,
} from "./pricing";
import { LANGUAGE_PRICING_SPEC, type LanguagePricingProfileId } from "./pricing-spec";

type SubscriptionRow = {
  status: string | null;
  stripe_price_id: string | null;
  metadata?: Record<string, unknown> | null;
};

type UsageTrackingRow = {
  user_id: string;
  student_profile_id: string | null;
  learner_id: string;
  learner_kind: "user" | "student_profile";
  month_key: string;
  plan_tier: LanguagePlanId;
  scored_attempts: number;
  practice_attempts: number;
  audio_minutes: number;
  ai_cost_usd: number;
  attempt_cap?: number | null;
  unlock_attempts_granted?: number | null;
  unlock_attempts_used?: number | null;
  utterance_p50_seconds?: number | null;
  utterance_p90_seconds?: number | null;
  geo_tier?: string | null;
  last_scored_at: string | null;
  last_activity_at: string | null;
};

export type LanguageUsageEntitlement = {
  monthKey: string;
  planTier: LanguagePlanId;
  planName: string;
  scoredAttemptsLimit: number;
  attemptCap: number;
  unlockAttemptsGranted: number;
  unlockAttemptsUsed: number;
  unlockAttemptsRemaining: number;
  scoredAttemptsUsed: number;
  scoredAttemptsRemaining: number;
  practiceAttemptsUsed: number;
  aiCostUsdThisMonth: number;
  geoTier: string;
  utteranceP50Seconds: number;
  utteranceP90Seconds: number;
  mode: "graded" | "practice_only";
  reason:
    | "eligible"
    | "plan_no_scored_access"
    | "quota_exceeded"
    | "budget_guardrail";
};

export type LanguageUsageRecordResult = {
  row: UsageTrackingRow | null;
};

type ResolveEntitlementInput = {
  userId: string;
  studentProfileId?: string;
};

type RecordUsageInput = {
  userId: string;
  studentProfileId?: string;
  gradingMode: "graded" | "practice_only";
  monthKey: string;
  planTier: LanguagePlanId;
  audioDurationMs?: number;
  estimatedAiCostUsd?: number;
};

type UsageSchemaMode = "legacy" | "extended";

const EXTENDED_USAGE_SELECT =
  "user_id, student_profile_id, learner_id, learner_kind, month_key, plan_tier, scored_attempts, practice_attempts, audio_minutes, ai_cost_usd, attempt_cap, unlock_attempts_granted, unlock_attempts_used, utterance_p50_seconds, utterance_p90_seconds, geo_tier, last_scored_at, last_activity_at";

const LEGACY_USAGE_SELECT =
  "user_id, student_profile_id, learner_id, learner_kind, month_key, plan_tier, scored_attempts, practice_attempts, audio_minutes, ai_cost_usd, last_scored_at, last_activity_at";

function monthKeyFromDate(date: Date) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

function toFiniteNumber(input: unknown) {
  if (typeof input === "number" && Number.isFinite(input)) return input;
  if (typeof input === "string") {
    const parsed = Number(input);
    if (Number.isFinite(parsed)) return parsed;
  }
  return 0;
}

function parseLanguagePlanId(value: unknown): LanguagePlanId {
  if (typeof value === "string") {
    const maybePlan = getLanguagePlanById(value as LanguagePlanId);
    if (maybePlan) return maybePlan.id;
  }
  return "core_practice";
}

function isMissingColumnError(message: string) {
  const lower = message.toLowerCase();
  return lower.includes("column") && lower.includes("does not exist");
}

function clampAttemptCap(value: number) {
  if (value <= 0) return 0;
  if (value <= 250) return 250;
  if (value <= 300) return 300;
  return 350;
}

function normalizeUtteranceSeconds(value: number, fallback: number) {
  const normalized = toFiniteNumber(value);
  if (normalized <= 0) return fallback;
  return Number(normalized.toFixed(2));
}

function inferPlanTierFromSubscription(
  subscription: SubscriptionRow | null,
  pricingProfile: LanguagePricingProfileId,
): LanguagePlanId {
  if (!isBillableSubscription(subscription?.status)) {
    return "core_practice";
  }

  const metadataPlanId =
    subscription?.metadata && typeof subscription.metadata.languagePlanId === "string"
      ? parseLanguagePlanId(subscription.metadata.languagePlanId)
      : null;
  if (metadataPlanId && metadataPlanId !== "core_practice") {
    return metadataPlanId;
  }

  const priceId = String(subscription?.stripe_price_id ?? "").toLowerCase();
  if (
    priceId.includes("school") ||
    priceId.includes("district") ||
    priceId.includes("seat")
  ) {
    return "language_school_annual";
  }

  if (priceId.includes("family")) {
    return getLanguagePlanIdForProfile(pricingProfile, "family");
  }

  return getLanguagePlanIdForProfile(pricingProfile, "plus");
}

function getUsageModeFromEntitlement(input: {
  scoredAttemptsLimit: number;
  scoredAttemptsUsed: number;
  aiCostUsdThisMonth: number;
}): Pick<LanguageUsageEntitlement, "mode" | "reason"> {
  if (input.scoredAttemptsLimit <= 0) {
    return { mode: "practice_only", reason: "plan_no_scored_access" };
  }
  if (
    input.aiCostUsdThisMonth >=
    LANGUAGE_AI_BUDGET_LIMITS.totalAiUsdPerActiveLearnerMonth
  ) {
    return { mode: "practice_only", reason: "budget_guardrail" };
  }
  if (input.scoredAttemptsUsed >= input.scoredAttemptsLimit) {
    return { mode: "practice_only", reason: "quota_exceeded" };
  }
  return { mode: "graded", reason: "eligible" };
}

function resolveLearnerKey(input: { userId: string; studentProfileId?: string }) {
  if (input.studentProfileId) {
    return {
      learnerId: input.studentProfileId,
      learnerKind: "student_profile" as const,
    };
  }
  return {
    learnerId: input.userId,
    learnerKind: "user" as const,
  };
}

async function fetchUsageTrackingRow(
  supabase: SupabaseClient,
  learnerId: string,
  monthKey: string,
): Promise<{ row: UsageTrackingRow | null; schemaMode: UsageSchemaMode }> {
  const extended = await supabase
    .from("language_usage_tracking")
    .select(EXTENDED_USAGE_SELECT)
    .eq("learner_id", learnerId)
    .eq("month_key", monthKey)
    .maybeSingle();

  if (!extended.error) {
    return {
      row: (extended.data as UsageTrackingRow | null) ?? null,
      schemaMode: "extended",
    };
  }

  if (!isMissingColumnError(extended.error.message)) {
    throw extended.error;
  }

  const legacy = await supabase
    .from("language_usage_tracking")
    .select(LEGACY_USAGE_SELECT)
    .eq("learner_id", learnerId)
    .eq("month_key", monthKey)
    .maybeSingle();

  if (legacy.error) {
    throw legacy.error;
  }

  return {
    row: (legacy.data as UsageTrackingRow | null) ?? null,
    schemaMode: "legacy",
  };
}

async function upsertUsageTrackingRow(
  supabase: SupabaseClient,
  payload: Record<string, unknown>,
  schemaMode: UsageSchemaMode,
) {
  const legacyPayload = {
    user_id: payload.user_id,
    student_profile_id: payload.student_profile_id,
    learner_id: payload.learner_id,
    learner_kind: payload.learner_kind,
    month_key: payload.month_key,
    plan_tier: payload.plan_tier,
    scored_attempts: payload.scored_attempts,
    practice_attempts: payload.practice_attempts,
    audio_minutes: payload.audio_minutes,
    ai_cost_usd: payload.ai_cost_usd,
    last_scored_at: payload.last_scored_at,
    last_activity_at: payload.last_activity_at,
    updated_at: payload.updated_at,
  };

  const selectedColumns =
    schemaMode === "extended" ? EXTENDED_USAGE_SELECT : LEGACY_USAGE_SELECT;
  const initialPayload = schemaMode === "extended" ? payload : legacyPayload;

  const firstAttempt = await supabase
    .from("language_usage_tracking")
    .upsert(initialPayload, { onConflict: "learner_id,month_key" })
    .select(selectedColumns)
    .maybeSingle();

  if (!firstAttempt.error) {
    return (firstAttempt.data as UsageTrackingRow | null) ?? null;
  }

  if (
    schemaMode === "extended" &&
    isMissingColumnError(firstAttempt.error.message)
  ) {
    const fallback = await supabase
      .from("language_usage_tracking")
      .upsert(legacyPayload, { onConflict: "learner_id,month_key" })
      .select(LEGACY_USAGE_SELECT)
      .maybeSingle();

    if (fallback.error) {
      throw fallback.error;
    }

    return (fallback.data as UsageTrackingRow | null) ?? null;
  }

  throw firstAttempt.error;
}

export async function resolveLanguageUsageEntitlement(
  supabase: SupabaseClient,
  input: ResolveEntitlementInput,
): Promise<LanguageUsageEntitlement> {
  const monthKey = monthKeyFromDate(new Date());
  const learner = resolveLearnerKey(input);
  const runtimeConfig = await getLanguageRuntimeConfig();

  const { data: subscription } = await supabase
    .from("subscriptions")
    .select("status, stripe_price_id, metadata")
    .eq("user_id", input.userId)
    .order("updated_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  const inferredPlanTier = inferPlanTierFromSubscription(
    (subscription as SubscriptionRow | null) ?? null,
    runtimeConfig.pricingProfile,
  );

  const { row: usageRow } = await fetchUsageTrackingRow(
    supabase,
    learner.learnerId,
    monthKey,
  );

  const planTier = parseLanguagePlanId(usageRow?.plan_tier ?? inferredPlanTier);
  const plan = getLanguagePlanById(planTier) ?? getLanguagePlanById("core_practice");
  const planScoredAttemptLimit = getScoredAttemptLimitForPlan(planTier);
  const rowAttemptCap = Math.max(0, toFiniteNumber(usageRow?.attempt_cap));
  const attemptCap =
    planScoredAttemptLimit <= 0
      ? 0
      : clampAttemptCap(
          rowAttemptCap > 0 ? rowAttemptCap : runtimeConfig.attemptCap,
        );
  const unlockAttemptsGranted = Math.max(
    0,
    toFiniteNumber(usageRow?.unlock_attempts_granted),
  );
  const unlockAttemptsUsed = Math.max(
    0,
    toFiniteNumber(usageRow?.unlock_attempts_used),
  );
  const unlockAttemptsRemaining = Math.max(
    0,
    unlockAttemptsGranted - unlockAttemptsUsed,
  );
  const scoredAttemptsLimit =
    Math.max(0, planScoredAttemptLimit <= 0 ? 0 : attemptCap) + unlockAttemptsRemaining;
  const scoredAttemptsUsed = Math.max(0, toFiniteNumber(usageRow?.scored_attempts));
  const practiceAttemptsUsed = Math.max(0, toFiniteNumber(usageRow?.practice_attempts));
  const aiCostUsdThisMonth = Math.max(0, toFiniteNumber(usageRow?.ai_cost_usd));
  const utteranceP50Seconds = normalizeUtteranceSeconds(
    toFiniteNumber(usageRow?.utterance_p50_seconds),
    LANGUAGE_PRICING_SPEC.launch.defaultUtteranceSeconds,
  );
  const utteranceP90Seconds = normalizeUtteranceSeconds(
    Math.max(
      toFiniteNumber(usageRow?.utterance_p90_seconds),
      utteranceP50Seconds,
    ),
    Math.max(LANGUAGE_PRICING_SPEC.launch.defaultUtteranceSeconds + 2, utteranceP50Seconds),
  );
  const geoTier = String(usageRow?.geo_tier ?? runtimeConfig.geoTierDefault);

  const modeInfo = getUsageModeFromEntitlement({
    scoredAttemptsLimit,
    scoredAttemptsUsed,
    aiCostUsdThisMonth,
  });

  return {
    monthKey,
    planTier,
    planName: plan?.name ?? "Core Practice",
    scoredAttemptsLimit,
    attemptCap,
    unlockAttemptsGranted,
    unlockAttemptsUsed,
    unlockAttemptsRemaining,
    scoredAttemptsUsed,
    scoredAttemptsRemaining: Math.max(0, scoredAttemptsLimit - scoredAttemptsUsed),
    practiceAttemptsUsed,
    aiCostUsdThisMonth,
    geoTier,
    utteranceP50Seconds,
    utteranceP90Seconds,
    mode: modeInfo.mode,
    reason: modeInfo.reason,
  };
}

export async function recordLanguageUsageAttempt(
  supabase: SupabaseClient,
  input: RecordUsageInput,
): Promise<LanguageUsageRecordResult> {
  const learner = resolveLearnerKey(input);
  const runtimeConfig = await getLanguageRuntimeConfig();
  const { row: existingRow, schemaMode } = await fetchUsageTrackingRow(
    supabase,
    learner.learnerId,
    input.monthKey,
  );

  const scoredAttempts = Math.max(
    0,
    toFiniteNumber(existingRow?.scored_attempts) + (input.gradingMode === "graded" ? 1 : 0),
  );
  const practiceAttempts = Math.max(
    0,
    toFiniteNumber(existingRow?.practice_attempts) + (input.gradingMode === "practice_only" ? 1 : 0),
  );
  const audioMinutes = Math.max(
    0,
    toFiniteNumber(existingRow?.audio_minutes) + Math.max(0, toFiniteNumber(input.audioDurationMs) / 60_000),
  );
  const aiCostUsd = Math.max(
    0,
    toFiniteNumber(existingRow?.ai_cost_usd) + Math.max(0, toFiniteNumber(input.estimatedAiCostUsd)),
  );
  const planScoredAttemptLimit = getScoredAttemptLimitForPlan(input.planTier);
  const existingAttemptCap = Math.max(0, toFiniteNumber(existingRow?.attempt_cap));
  const existingUnlockAttemptsGranted = Math.max(
    0,
    toFiniteNumber(existingRow?.unlock_attempts_granted),
  );
  const existingUnlockAttemptsUsed = Math.max(
    0,
    toFiniteNumber(existingRow?.unlock_attempts_used),
  );
  const attemptCap =
    planScoredAttemptLimit <= 0
      ? 0
      : clampAttemptCap(
          existingAttemptCap > 0 ? existingAttemptCap : runtimeConfig.attemptCap,
        );
  const includedAttemptsBeforeUnlock = Math.max(0, attemptCap);
  const unlockUseIncrement =
    input.gradingMode === "graded" &&
    scoredAttempts > includedAttemptsBeforeUnlock
      ? 1
      : 0;
  const unlockAttemptsUsed = Math.min(
    existingUnlockAttemptsGranted,
    existingUnlockAttemptsUsed + unlockUseIncrement,
  );

  const defaultUtteranceSeconds = LANGUAGE_PRICING_SPEC.launch.defaultUtteranceSeconds;
  const existingP50 = normalizeUtteranceSeconds(
    toFiniteNumber(existingRow?.utterance_p50_seconds),
    defaultUtteranceSeconds,
  );
  const existingP90 = normalizeUtteranceSeconds(
    Math.max(toFiniteNumber(existingRow?.utterance_p90_seconds), existingP50),
    Math.max(defaultUtteranceSeconds + 2, existingP50),
  );

  const nowIso = new Date().toISOString();
  const payload = {
    user_id: input.userId,
    student_profile_id: input.studentProfileId ?? null,
    learner_id: learner.learnerId,
    learner_kind: learner.learnerKind,
    month_key: input.monthKey,
    plan_tier: input.planTier,
    scored_attempts: scoredAttempts,
    practice_attempts: practiceAttempts,
    audio_minutes: Number(audioMinutes.toFixed(3)),
    ai_cost_usd: Number(aiCostUsd.toFixed(4)),
    attempt_cap: attemptCap,
    unlock_attempts_granted: existingUnlockAttemptsGranted,
    unlock_attempts_used: unlockAttemptsUsed,
    utterance_p50_seconds: existingP50,
    utterance_p90_seconds: existingP90,
    geo_tier: existingRow?.geo_tier ?? runtimeConfig.geoTierDefault,
    last_scored_at: input.gradingMode === "graded" ? nowIso : existingRow?.last_scored_at ?? null,
    last_activity_at: nowIso,
    updated_at: nowIso,
  };

  const upsertedRow = await upsertUsageTrackingRow(supabase, payload, schemaMode);

  return {
    row: upsertedRow,
  };
}
