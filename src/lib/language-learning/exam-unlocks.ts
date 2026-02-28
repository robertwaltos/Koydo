import type { SupabaseClient } from "@supabase/supabase-js";
import { LANGUAGE_PRICING_SPEC, type LanguageGeoTier } from "./pricing-spec";
import { getLanguageRuntimeConfig } from "./runtime-config";

export type LanguageExamUnlockLevel =
  | "beginner"
  | "intermediate"
  | "advanced";

export type LanguageExamUnlockPriceQuote = {
  level: LanguageExamUnlockLevel;
  geoTier: LanguageGeoTier;
  currency: string;
  priceCents: number;
  priceUsd: number;
  additionalAttempts: number;
  source: "pricing_ladders" | "fallback";
};

export type LanguageExamUnlockEntitlement = {
  level: LanguageExamUnlockLevel;
  hasActiveUnlock: boolean;
  totalPurchasesActive: number;
  totalAdditionalAttemptsGranted: number;
  unlockAttemptsUsed: number;
  unlockAttemptsRemaining: number;
  activeUntil: string | null;
};

export type RecordLanguageExamUnlockPurchaseInput = {
  userId: string;
  studentProfileId?: string;
  level: LanguageExamUnlockLevel;
  stripePaymentIntentId: string;
  pricePaidCents?: number;
  currency?: string;
  provider?: string;
  geoTierOverride?: LanguageGeoTier;
  metadata?: Record<string, unknown>;
};

export type RecordLanguageExamUnlockPurchaseResult = {
  success: boolean;
  idempotent: boolean;
  purchaseId: string;
  level: LanguageExamUnlockLevel;
  geoTier: LanguageGeoTier;
  additionalAttemptsGranted: number;
  stripePaymentIntentId: string;
};

export type ReverseLanguageExamUnlockRefundResult = {
  success: boolean;
  idempotent: boolean;
  skipped: boolean;
  reason:
    | "not_found"
    | "already_processed"
    | "partial_refund_ignored"
    | "reversed";
  purchaseId: string | null;
  stripePaymentIntentId: string;
};

export type LanguageUnlockLedgerEventType =
  | "unlock_purchase"
  | "refund"
  | "reversal"
  | "expiry"
  | "reconciliation_fix";

export type LanguageUnlockReconciliationResult = {
  runAt: string;
  monthKey: string;
  rowsScanned: number;
  driftDetected: number;
  autoFixed: number;
  queuedForReview: number;
};

type UnlockPricingRow = {
  geo_tier: string;
  beginner_price_cents: number;
  intermediate_price_cents: number;
  advanced_price_cents: number;
  currency: string;
};

type UsageUnlockRow = {
  user_id: string;
  student_profile_id: string | null;
  learner_id: string;
  learner_kind: "user" | "student_profile";
  month_key: string;
  plan_tier: string;
  scored_attempts: number;
  practice_attempts: number;
  audio_minutes: number;
  ai_cost_usd: number;
  attempt_cap: number | null;
  unlock_attempts_granted: number | null;
  unlock_attempts_used: number | null;
  utterance_p50_seconds: number | null;
  utterance_p90_seconds: number | null;
  geo_tier: string | null;
  updated_at?: string | null;
  last_scored_at: string | null;
  last_activity_at: string | null;
  last_reconciled_at?: string | null;
};

type UnlockPurchaseRow = {
  id: string;
  user_id: string;
  student_profile_id: string | null;
  learner_kind: "user" | "student_profile";
  learner_id: string;
  level: LanguageExamUnlockLevel;
  additional_attempts_granted: number;
  expires_at: string;
  purchased_at: string;
  price_paid_cents: number;
  currency: string;
  geo_tier: string;
  stripe_payment_intent_id: string;
  metadata: Record<string, unknown> | null;
};

const EXAM_UNLOCK_ADDITIONAL_ATTEMPTS: Record<LanguageExamUnlockLevel, number> = {
  beginner: 100,
  intermediate: 150,
  advanced: 200,
};

const FALLBACK_PRICING_CENTS: Record<
  LanguageGeoTier,
  Record<LanguageExamUnlockLevel, number>
> = {
  tier_1: { beginner: 999, intermediate: 1999, advanced: 2999 },
  tier_2: { beginner: 799, intermediate: 1599, advanced: 2399 },
  tier_3: { beginner: 499, intermediate: 999, advanced: 1499 },
  tier_4: { beginner: 299, intermediate: 599, advanced: 899 },
  tier_5: { beginner: 199, intermediate: 399, advanced: 599 },
};

const DEFAULT_USAGE_SELECT =
  "user_id, student_profile_id, learner_id, learner_kind, month_key, plan_tier, scored_attempts, practice_attempts, audio_minutes, ai_cost_usd, attempt_cap, unlock_attempts_granted, unlock_attempts_used, utterance_p50_seconds, utterance_p90_seconds, geo_tier, updated_at, last_scored_at, last_activity_at, last_reconciled_at";

function isMissingTableError(message: string) {
  const lower = message.toLowerCase();
  return (
    lower.includes("could not find the table") ||
    (lower.includes("relation") && lower.includes("does not exist"))
  );
}

function isMissingColumnError(message: string) {
  const lower = message.toLowerCase();
  return lower.includes("column") && lower.includes("does not exist");
}

function isDuplicateKeyError(code?: string | null) {
  return code === "23505";
}

function monthKeyFromDate(date: Date) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

function monthWindowFromKey(monthKey: string) {
  const [yearRaw, monthRaw] = monthKey.split("-");
  const year = Number(yearRaw);
  const month = Number(monthRaw);
  if (!Number.isFinite(year) || !Number.isFinite(month) || month < 1 || month > 12) {
    return null;
  }
  const start = new Date(Date.UTC(year, month - 1, 1, 0, 0, 0, 0));
  const end = new Date(Date.UTC(year, month, 1, 0, 0, 0, 0));
  return {
    startIso: start.toISOString(),
    endIso: end.toISOString(),
  };
}

function isGeoTier(value: unknown): value is LanguageGeoTier {
  return (
    value === "tier_1" ||
    value === "tier_2" ||
    value === "tier_3" ||
    value === "tier_4" ||
    value === "tier_5"
  );
}

function normalizeGeoTier(value: unknown, fallback: LanguageGeoTier): LanguageGeoTier {
  return isGeoTier(value) ? value : fallback;
}

function toFiniteNumber(input: unknown) {
  if (typeof input === "number" && Number.isFinite(input)) return input;
  if (typeof input === "string") {
    const parsed = Number(input);
    if (Number.isFinite(parsed)) return parsed;
  }
  return 0;
}

async function insertLanguageUnlockLedgerEvent(
  supabase: SupabaseClient,
  input: {
    eventId: string;
    eventType: LanguageUnlockLedgerEventType;
    learnerId: string;
    level?: LanguageExamUnlockLevel | null;
    attemptsDelta: number;
    amountCents?: number | null;
    geoTier?: LanguageGeoTier | null;
    provider: string;
    providerTxId?: string | null;
    entityId?: string | null;
    metadata?: Record<string, unknown> | null;
  },
) {
  const nowIso = new Date().toISOString();
  const payload = {
    event_id: input.eventId,
    event_type: input.eventType,
    entity_type: "exam_unlock",
    entity_id: input.entityId ?? null,
    learner_id: input.learnerId,
    level: input.level ?? null,
    amount_cents:
      input.amountCents === null || input.amountCents === undefined
        ? null
        : Math.trunc(input.amountCents),
    attempts_delta: Math.trunc(input.attemptsDelta),
    geo_tier: input.geoTier ?? null,
    provider: input.provider,
    provider_tx_id: input.providerTxId ?? null,
    occurred_at: nowIso,
    processed_at: nowIso,
    metadata: input.metadata ?? {},
    updated_at: nowIso,
  };

  const { error } = await supabase
    .from("transaction_ledger")
    .insert(payload);

  if (!error) return;
  if (isDuplicateKeyError(error.code)) return;
  if (isMissingTableError(error.message)) return;
  throw error;
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

function getFallbackPriceCents(level: LanguageExamUnlockLevel, geoTier: LanguageGeoTier) {
  return FALLBACK_PRICING_CENTS[geoTier][level];
}

async function getPricingLadderRow(
  supabase: SupabaseClient,
  geoTier: LanguageGeoTier,
): Promise<UnlockPricingRow | null> {
  const { data, error } = await supabase
    .from("pricing_ladders")
    .select(
      "geo_tier, beginner_price_cents, intermediate_price_cents, advanced_price_cents, currency",
    )
    .eq("geo_tier", geoTier)
    .maybeSingle();

  if (!error) {
    return (data as UnlockPricingRow | null) ?? null;
  }
  if (isMissingTableError(error.message)) {
    return null;
  }
  throw error;
}

async function getUsageUnlockRow(
  supabase: SupabaseClient,
  learnerId: string,
  monthKey: string,
): Promise<UsageUnlockRow | null> {
  const { data, error } = await supabase
    .from("language_usage_tracking")
    .select(DEFAULT_USAGE_SELECT)
    .eq("learner_id", learnerId)
    .eq("month_key", monthKey)
    .maybeSingle();

  if (!error) {
    return (data as UsageUnlockRow | null) ?? null;
  }
  if (isMissingTableError(error.message) || isMissingColumnError(error.message)) {
    return null;
  }
  throw error;
}

function getPriceCentsFromLadder(
  row: UnlockPricingRow,
  level: LanguageExamUnlockLevel,
) {
  if (level === "beginner") return row.beginner_price_cents;
  if (level === "intermediate") return row.intermediate_price_cents;
  return row.advanced_price_cents;
}

export function isMissingLanguageUnlockTableError(error: unknown) {
  if (!error || typeof error !== "object") return false;
  const message =
    "message" in error ? String((error as { message?: unknown }).message ?? "") : "";
  const lowered = message.toLowerCase();
  return (
    isMissingTableError(message) ||
    lowered.includes("pricing_ladders") ||
    lowered.includes("exam_unlock_purchases") ||
    lowered.includes("transaction_ledger") ||
    lowered.includes("reconciliation_queue") ||
    lowered.includes("unlock_attempts_granted") ||
    lowered.includes("unlock_attempts_used")
  );
}

export async function getLanguageExamUnlockPrice(
  supabase: SupabaseClient,
  input: {
    userId: string;
    studentProfileId?: string;
    level: LanguageExamUnlockLevel;
    geoTierOverride?: LanguageGeoTier;
  },
): Promise<LanguageExamUnlockPriceQuote> {
  const runtimeConfig = await getLanguageRuntimeConfig();
  const learner = resolveLearnerKey(input);
  const monthKey = monthKeyFromDate(new Date());
  const usageRow = await getUsageUnlockRow(supabase, learner.learnerId, monthKey);
  const geoTier = normalizeGeoTier(
    input.geoTierOverride ?? usageRow?.geo_tier ?? runtimeConfig.geoTierDefault,
    runtimeConfig.geoTierDefault,
  );

  const ladder = await getPricingLadderRow(supabase, geoTier);
  const source = ladder ? "pricing_ladders" : "fallback";
  const priceCents = ladder
    ? getPriceCentsFromLadder(ladder, input.level)
    : getFallbackPriceCents(input.level, geoTier);
  const currency = ladder?.currency ?? "USD";

  return {
    level: input.level,
    geoTier,
    currency,
    priceCents,
    priceUsd: Number((priceCents / 100).toFixed(2)),
    additionalAttempts: EXAM_UNLOCK_ADDITIONAL_ATTEMPTS[input.level],
    source,
  };
}

export async function checkLanguageExamUnlockEntitlement(
  supabase: SupabaseClient,
  input: {
    userId: string;
    studentProfileId?: string;
    level: LanguageExamUnlockLevel;
  },
): Promise<LanguageExamUnlockEntitlement> {
  const learner = resolveLearnerKey(input);
  const nowIso = new Date().toISOString();
  const monthKey = monthKeyFromDate(new Date());

  const { data: purchases, error: purchaseError } = await supabase
    .from("exam_unlock_purchases")
    .select(
      "id, learner_id, level, additional_attempts_granted, expires_at, purchased_at, price_paid_cents, currency, geo_tier, stripe_payment_intent_id",
    )
    .eq("learner_id", learner.learnerId)
    .eq("level", input.level)
    .gt("expires_at", nowIso)
    .order("purchased_at", { ascending: false });

  if (purchaseError) {
    if (isMissingTableError(purchaseError.message)) {
      return {
        level: input.level,
        hasActiveUnlock: false,
        totalPurchasesActive: 0,
        totalAdditionalAttemptsGranted: 0,
        unlockAttemptsUsed: 0,
        unlockAttemptsRemaining: 0,
        activeUntil: null,
      };
    }
    throw purchaseError;
  }

  const activePurchases = (purchases ?? []) as UnlockPurchaseRow[];
  const totalAdditionalAttemptsGranted = activePurchases.reduce(
    (sum, row) => sum + Math.max(0, toFiniteNumber(row.additional_attempts_granted)),
    0,
  );
  const usageRow = await getUsageUnlockRow(supabase, learner.learnerId, monthKey);
  const usageUnlockGranted = Math.max(
    totalAdditionalAttemptsGranted,
    Math.max(0, toFiniteNumber(usageRow?.unlock_attempts_granted)),
  );
  const unlockAttemptsUsed = Math.max(
    0,
    toFiniteNumber(usageRow?.unlock_attempts_used),
  );
  const unlockAttemptsRemaining = Math.max(0, usageUnlockGranted - unlockAttemptsUsed);

  return {
    level: input.level,
    hasActiveUnlock: activePurchases.length > 0 && unlockAttemptsRemaining > 0,
    totalPurchasesActive: activePurchases.length,
    totalAdditionalAttemptsGranted: usageUnlockGranted,
    unlockAttemptsUsed,
    unlockAttemptsRemaining,
    activeUntil: activePurchases.length > 0 ? activePurchases[0].expires_at : null,
  };
}

export async function recordLanguageExamUnlockPurchase(
  supabase: SupabaseClient,
  input: RecordLanguageExamUnlockPurchaseInput,
): Promise<RecordLanguageExamUnlockPurchaseResult> {
  const learner = resolveLearnerKey(input);
  const runtimeConfig = await getLanguageRuntimeConfig();
  const monthKey = monthKeyFromDate(new Date());
  const quote = await getLanguageExamUnlockPrice(supabase, {
    userId: input.userId,
    studentProfileId: input.studentProfileId,
    level: input.level,
    geoTierOverride: input.geoTierOverride,
  });
  const additionalAttemptsGranted =
    EXAM_UNLOCK_ADDITIONAL_ATTEMPTS[input.level];
  const expiresAtIso = new Date(
    Date.now() + 90 * 24 * 60 * 60 * 1000,
  ).toISOString();

  const { data: existing, error: existingError } = await supabase
    .from("exam_unlock_purchases")
    .select("id, level, geo_tier, additional_attempts_granted, stripe_payment_intent_id")
    .eq("stripe_payment_intent_id", input.stripePaymentIntentId)
    .maybeSingle();

  if (existingError) {
    if (isMissingTableError(existingError.message)) {
      throw existingError;
    }
    throw existingError;
  }

  if (existing) {
    const existingRow = existing as {
      id: string;
      geo_tier: string;
      additional_attempts_granted: number;
      stripe_payment_intent_id: string;
    };
    return {
      success: true,
      idempotent: true,
      purchaseId: existingRow.id,
      level: input.level,
      geoTier: normalizeGeoTier(existingRow.geo_tier, quote.geoTier),
      additionalAttemptsGranted: Math.max(
        0,
        toFiniteNumber(existingRow.additional_attempts_granted),
      ),
      stripePaymentIntentId: existingRow.stripe_payment_intent_id,
    };
  }

  const pricePaidCents = Math.max(
    1,
    Math.trunc(
      toFiniteNumber(input.pricePaidCents ?? quote.priceCents),
    ),
  );
  const currency = String(input.currency ?? quote.currency ?? "USD")
    .trim()
    .toUpperCase()
    .slice(0, 3);
  const nowIso = new Date().toISOString();

  const { data: insertedPurchase, error: insertError } = await supabase
    .from("exam_unlock_purchases")
    .insert({
      user_id: input.userId,
      student_profile_id: input.studentProfileId ?? null,
      learner_id: learner.learnerId,
      learner_kind: learner.learnerKind,
      level: input.level,
      geo_tier: quote.geoTier,
      price_paid_cents: pricePaidCents,
      currency,
      provider: input.provider ?? "stripe",
      stripe_payment_intent_id: input.stripePaymentIntentId,
      additional_attempts_granted: additionalAttemptsGranted,
      expires_at: expiresAtIso,
      metadata: {
        ...(input.metadata ?? {}),
        source: "language_exam_unlock_purchase_api",
      },
      purchased_at: nowIso,
      updated_at: nowIso,
    })
    .select("id, stripe_payment_intent_id")
    .single();

  if (insertError) {
    if (isDuplicateKeyError(insertError.code)) {
      const { data: duplicate } = await supabase
        .from("exam_unlock_purchases")
        .select("id, stripe_payment_intent_id")
        .eq("stripe_payment_intent_id", input.stripePaymentIntentId)
        .maybeSingle();

      if (duplicate) {
        return {
          success: true,
          idempotent: true,
          purchaseId: String((duplicate as { id: string }).id),
          level: input.level,
          geoTier: quote.geoTier,
          additionalAttemptsGranted,
          stripePaymentIntentId: input.stripePaymentIntentId,
        };
      }
    }
    throw insertError;
  }

  const usageRow = await getUsageUnlockRow(supabase, learner.learnerId, monthKey);
  const unlockAttemptsGranted =
    Math.max(0, toFiniteNumber(usageRow?.unlock_attempts_granted)) +
    additionalAttemptsGranted;
  const unlockAttemptsUsed = Math.max(
    0,
    toFiniteNumber(usageRow?.unlock_attempts_used),
  );
  const attemptCap = Math.max(
    0,
    toFiniteNumber(usageRow?.attempt_cap) || runtimeConfig.attemptCap,
  );

  const upsertUsage = await supabase
    .from("language_usage_tracking")
    .upsert(
      {
        user_id: input.userId,
        student_profile_id: input.studentProfileId ?? null,
        learner_id: learner.learnerId,
        learner_kind: learner.learnerKind,
        month_key: monthKey,
        plan_tier: usageRow?.plan_tier ?? "core_practice",
        scored_attempts: Math.max(0, toFiniteNumber(usageRow?.scored_attempts)),
        practice_attempts: Math.max(0, toFiniteNumber(usageRow?.practice_attempts)),
        audio_minutes: Number(
          Math.max(0, toFiniteNumber(usageRow?.audio_minutes)).toFixed(3),
        ),
        ai_cost_usd: Number(
          Math.max(0, toFiniteNumber(usageRow?.ai_cost_usd)).toFixed(4),
        ),
        attempt_cap: attemptCap,
        unlock_attempts_granted: unlockAttemptsGranted,
        unlock_attempts_used: unlockAttemptsUsed,
        utterance_p50_seconds:
          Math.max(0, toFiniteNumber(usageRow?.utterance_p50_seconds)) ||
          LANGUAGE_PRICING_SPEC.launch.defaultUtteranceSeconds,
        utterance_p90_seconds:
          Math.max(0, toFiniteNumber(usageRow?.utterance_p90_seconds)) ||
          Math.max(LANGUAGE_PRICING_SPEC.launch.defaultUtteranceSeconds + 2, 12),
        geo_tier: quote.geoTier,
        last_scored_at: usageRow?.last_scored_at ?? null,
        last_activity_at: nowIso,
        updated_at: nowIso,
      },
      { onConflict: "learner_id,month_key" },
    )
    .select("learner_id")
    .maybeSingle();

  if (upsertUsage.error) {
    throw upsertUsage.error;
  }

  const purchaseId = String((insertedPurchase as { id: string }).id);
  await insertLanguageUnlockLedgerEvent(supabase, {
    eventId: `unlock_purchase_${input.stripePaymentIntentId}`,
    eventType: "unlock_purchase",
    learnerId: learner.learnerId,
    level: input.level,
    attemptsDelta: additionalAttemptsGranted,
    amountCents: pricePaidCents,
    geoTier: quote.geoTier,
    provider: input.provider ?? "stripe",
    providerTxId: input.stripePaymentIntentId,
    entityId: purchaseId,
    metadata: {
      flow: "record_language_exam_unlock_purchase",
      monthKey,
    },
  });

  return {
    success: true,
    idempotent: false,
    purchaseId,
    level: input.level,
    geoTier: quote.geoTier,
    additionalAttemptsGranted,
    stripePaymentIntentId: String(
      (insertedPurchase as { stripe_payment_intent_id: string })
        .stripe_payment_intent_id,
    ),
  };
}

export async function reverseLanguageExamUnlockForRefund(
  supabase: SupabaseClient,
  input: {
    stripePaymentIntentId: string;
    refundEventId: string;
    refundedAmountCents?: number;
    isFullRefund: boolean;
  },
): Promise<ReverseLanguageExamUnlockRefundResult> {
  const { data: purchaseRow, error: purchaseError } = await supabase
    .from("exam_unlock_purchases")
    .select(
      "id, user_id, student_profile_id, learner_kind, learner_id, level, additional_attempts_granted, expires_at, purchased_at, price_paid_cents, currency, geo_tier, stripe_payment_intent_id, metadata",
    )
    .eq("stripe_payment_intent_id", input.stripePaymentIntentId)
    .maybeSingle();

  if (purchaseError) {
    throw purchaseError;
  }
  if (!purchaseRow) {
    return {
      success: true,
      idempotent: false,
      skipped: true,
      reason: "not_found",
      purchaseId: null,
      stripePaymentIntentId: input.stripePaymentIntentId,
    };
  }

  const purchase = purchaseRow as UnlockPurchaseRow;
  const metadata =
    purchase.metadata && typeof purchase.metadata === "object"
      ? { ...purchase.metadata }
      : {};
  const refundEventIds = Array.isArray(metadata.refundEventIds)
    ? metadata.refundEventIds.filter((value) => typeof value === "string")
    : [];
  if (refundEventIds.includes(input.refundEventId)) {
    return {
      success: true,
      idempotent: true,
      skipped: true,
      reason: "already_processed",
      purchaseId: purchase.id,
      stripePaymentIntentId: input.stripePaymentIntentId,
    };
  }

  if (!input.isFullRefund) {
    const partialMeta = {
      ...metadata,
      refundEventIds: [...refundEventIds, input.refundEventId],
      partiallyRefunded: true,
      partiallyRefundedAt: new Date().toISOString(),
      refundedAmountCents: Math.max(0, toFiniteNumber(input.refundedAmountCents)),
    };
    const { error: partialUpdateError } = await supabase
      .from("exam_unlock_purchases")
      .update({ metadata: partialMeta, updated_at: new Date().toISOString() })
      .eq("id", purchase.id);
    if (partialUpdateError) {
      throw partialUpdateError;
    }

    await insertLanguageUnlockLedgerEvent(supabase, {
      eventId: `refund_${input.refundEventId}`,
      eventType: "refund",
      learnerId: purchase.learner_id,
      level: purchase.level,
      attemptsDelta: 0,
      amountCents: Math.max(0, toFiniteNumber(input.refundedAmountCents)),
      geoTier: normalizeGeoTier(purchase.geo_tier, "tier_1"),
      provider: "stripe",
      providerTxId: input.stripePaymentIntentId,
      entityId: purchase.id,
      metadata: {
        partial: true,
      },
    });

    return {
      success: true,
      idempotent: false,
      skipped: true,
      reason: "partial_refund_ignored",
      purchaseId: purchase.id,
      stripePaymentIntentId: input.stripePaymentIntentId,
    };
  }

  const nowIso = new Date().toISOString();
  const refundedMeta = {
    ...metadata,
    refundEventIds: [...refundEventIds, input.refundEventId],
    refundedAt: nowIso,
    refundedAmountCents: Math.max(
      0,
      toFiniteNumber(input.refundedAmountCents || purchase.price_paid_cents),
    ),
  };
  const { error: purchaseUpdateError } = await supabase
    .from("exam_unlock_purchases")
    .update({
      expires_at: nowIso,
      metadata: refundedMeta,
      updated_at: nowIso,
    })
    .eq("id", purchase.id);
  if (purchaseUpdateError) {
    throw purchaseUpdateError;
  }

  const monthKey = monthKeyFromDate(new Date());
  const usageRow = await getUsageUnlockRow(supabase, purchase.learner_id, monthKey);
  if (usageRow) {
    const unlockAttemptsGranted = Math.max(
      0,
      toFiniteNumber(usageRow.unlock_attempts_granted) -
        Math.max(0, toFiniteNumber(purchase.additional_attempts_granted)),
    );
    const unlockAttemptsUsed = Math.min(
      unlockAttemptsGranted,
      Math.max(0, toFiniteNumber(usageRow.unlock_attempts_used)),
    );

    const { error: usageUpdateError } = await supabase
      .from("language_usage_tracking")
      .update({
        unlock_attempts_granted: unlockAttemptsGranted,
        unlock_attempts_used: unlockAttemptsUsed,
        updated_at: nowIso,
      })
      .eq("learner_id", purchase.learner_id)
      .eq("month_key", monthKey);

    if (usageUpdateError && !isMissingColumnError(usageUpdateError.message)) {
      throw usageUpdateError;
    }
  }

  await insertLanguageUnlockLedgerEvent(supabase, {
    eventId: `refund_${input.refundEventId}`,
    eventType: "refund",
    learnerId: purchase.learner_id,
    level: purchase.level,
    attemptsDelta: 0,
    amountCents: Math.max(
      0,
      toFiniteNumber(input.refundedAmountCents || purchase.price_paid_cents),
    ),
    geoTier: normalizeGeoTier(purchase.geo_tier, "tier_1"),
    provider: "stripe",
    providerTxId: input.stripePaymentIntentId,
    entityId: purchase.id,
    metadata: {
      partial: false,
      fullRefund: true,
    },
  });

  await insertLanguageUnlockLedgerEvent(supabase, {
    eventId: `reversal_${input.refundEventId}`,
    eventType: "reversal",
    learnerId: purchase.learner_id,
    level: purchase.level,
    attemptsDelta: -Math.max(0, toFiniteNumber(purchase.additional_attempts_granted)),
    amountCents: null,
    geoTier: normalizeGeoTier(purchase.geo_tier, "tier_1"),
    provider: "stripe",
    providerTxId: input.stripePaymentIntentId,
    entityId: purchase.id,
    metadata: {
      sourceEventId: input.refundEventId,
    },
  });

  return {
    success: true,
    idempotent: false,
    skipped: false,
    reason: "reversed",
    purchaseId: purchase.id,
    stripePaymentIntentId: input.stripePaymentIntentId,
  };
}

export async function runLanguageUnlockReconciliation(
  supabase: SupabaseClient,
  input?: { monthKey?: string; maxAutoFixAbsDrift?: number },
): Promise<LanguageUnlockReconciliationResult> {
  const now = new Date();
  const nowIso = now.toISOString();
  const monthKey = input?.monthKey ?? monthKeyFromDate(now);
  const monthWindow = monthWindowFromKey(monthKey);
  if (!monthWindow) {
    throw new Error(`Invalid monthKey for reconciliation: ${monthKey}`);
  }

  const maxAutoFixAbsDrift = Math.max(
    1,
    Math.trunc(toFiniteNumber(input?.maxAutoFixAbsDrift) || 500),
  );
  const runtimeConfig = await getLanguageRuntimeConfig();

  const { data: purchaseRows, error: purchaseError } = await supabase
    .from("exam_unlock_purchases")
    .select(
      "id, user_id, student_profile_id, learner_kind, learner_id, level, additional_attempts_granted, expires_at, purchased_at, price_paid_cents, currency, geo_tier, stripe_payment_intent_id, metadata",
    )
    .gte("purchased_at", monthWindow.startIso)
    .lt("purchased_at", monthWindow.endIso);

  if (purchaseError) {
    throw purchaseError;
  }

  const expectedByLearner = new Map<
    string,
    {
      expectedGranted: number;
      latestPurchase: UnlockPurchaseRow | null;
    }
  >();
  for (const row of (purchaseRows ?? []) as UnlockPurchaseRow[]) {
    const refundedAt =
      row.metadata && typeof row.metadata === "object"
        ? (row.metadata.refundedAt as unknown)
        : null;
    if (typeof refundedAt === "string" && refundedAt.length > 0) {
      continue;
    }

    const current = expectedByLearner.get(row.learner_id) ?? {
      expectedGranted: 0,
      latestPurchase: null,
    };
    current.expectedGranted += Math.max(
      0,
      toFiniteNumber(row.additional_attempts_granted),
    );
    if (
      !current.latestPurchase ||
      new Date(row.purchased_at).getTime() >
        new Date(current.latestPurchase.purchased_at).getTime()
    ) {
      current.latestPurchase = row;
    }
    expectedByLearner.set(row.learner_id, current);
  }

  const { data: usageRows, error: usageError } = await supabase
    .from("language_usage_tracking")
    .select(DEFAULT_USAGE_SELECT)
    .eq("month_key", monthKey);
  if (usageError && !isMissingColumnError(usageError.message)) {
    throw usageError;
  }

  const usageByLearner = new Map<string, UsageUnlockRow>();
  for (const row of (usageRows ?? []) as UsageUnlockRow[]) {
    usageByLearner.set(row.learner_id, row);
  }

  const learnerIds = new Set<string>([
    ...usageByLearner.keys(),
    ...expectedByLearner.keys(),
  ]);

  let driftDetected = 0;
  let autoFixed = 0;
  let queuedForReview = 0;

  for (const learnerId of learnerIds) {
    const usageRow = usageByLearner.get(learnerId) ?? null;
    const expected = expectedByLearner.get(learnerId) ?? {
      expectedGranted: 0,
      latestPurchase: null,
    };

    const actualGranted = Math.max(
      0,
      toFiniteNumber(usageRow?.unlock_attempts_granted),
    );
    const actualUsed = Math.max(0, toFiniteNumber(usageRow?.unlock_attempts_used));
    const expectedGranted = Math.max(0, expected.expectedGranted);
    const expectedUsed = Math.min(expectedGranted, actualUsed);
    const grantedDelta = expectedGranted - actualGranted;
    const usedDelta = expectedUsed - actualUsed;

    if (grantedDelta === 0 && usedDelta === 0) {
      continue;
    }

    driftDetected += 1;
    const shouldAutoFix = Math.abs(grantedDelta) <= maxAutoFixAbsDrift;
    if (!shouldAutoFix) {
      queuedForReview += 1;
      await supabase.from("reconciliation_queue").insert({
        drift_type: "unlock_attempts_drift",
        entity_type: "exam_unlock",
        entity_id: expected.latestPurchase?.id ?? null,
        learner_id: learnerId,
        expected_value: expectedGranted,
        actual_value: actualGranted,
        status: "open",
        metadata: {
          monthKey,
          maxAutoFixAbsDrift,
        },
      });
      continue;
    }

    if (usageRow) {
      const { error: usageUpdateError } = await supabase
        .from("language_usage_tracking")
        .update({
          unlock_attempts_granted: expectedGranted,
          unlock_attempts_used: expectedUsed,
          last_reconciled_at: nowIso,
          updated_at: nowIso,
        })
        .eq("learner_id", learnerId)
        .eq("month_key", monthKey);
      if (usageUpdateError && !isMissingColumnError(usageUpdateError.message)) {
        queuedForReview += 1;
        await supabase.from("reconciliation_queue").insert({
          drift_type: "unlock_attempts_drift_update_failed",
          entity_type: "exam_unlock",
          entity_id: expected.latestPurchase?.id ?? null,
          learner_id: learnerId,
          expected_value: expectedGranted,
          actual_value: actualGranted,
          status: "open",
          metadata: {
            monthKey,
            error: usageUpdateError.message,
          },
        });
        continue;
      }
    } else {
      const latestPurchase = expected.latestPurchase;
      if (!latestPurchase) {
        continue;
      }

      const { error: usageInsertError } = await supabase
        .from("language_usage_tracking")
        .upsert(
          {
            user_id: latestPurchase.user_id,
            student_profile_id: latestPurchase.student_profile_id,
            learner_id: learnerId,
            learner_kind: latestPurchase.learner_kind,
            month_key: monthKey,
            plan_tier: "core_practice",
            scored_attempts: 0,
            practice_attempts: 0,
            audio_minutes: 0,
            ai_cost_usd: 0,
            attempt_cap: runtimeConfig.attemptCap,
            unlock_attempts_granted: expectedGranted,
            unlock_attempts_used: 0,
            utterance_p50_seconds: LANGUAGE_PRICING_SPEC.launch.defaultUtteranceSeconds,
            utterance_p90_seconds: Math.max(
              LANGUAGE_PRICING_SPEC.launch.defaultUtteranceSeconds + 2,
              12,
            ),
            geo_tier: latestPurchase.geo_tier,
            last_scored_at: null,
            last_activity_at: nowIso,
            last_reconciled_at: nowIso,
            updated_at: nowIso,
          },
          { onConflict: "learner_id,month_key" },
        );
      if (usageInsertError) {
        queuedForReview += 1;
        await supabase.from("reconciliation_queue").insert({
          drift_type: "unlock_attempts_drift_insert_failed",
          entity_type: "exam_unlock",
          entity_id: latestPurchase.id,
          learner_id: learnerId,
          expected_value: expectedGranted,
          actual_value: actualGranted,
          status: "open",
          metadata: {
            monthKey,
            error: usageInsertError.message,
          },
        });
        continue;
      }
    }

    autoFixed += 1;
    await insertLanguageUnlockLedgerEvent(supabase, {
      eventId: `reconcile_${monthKey}_${learnerId}_${Date.now()}`,
      eventType: "reconciliation_fix",
      learnerId,
      level: expected.latestPurchase?.level ?? null,
      attemptsDelta: grantedDelta,
      amountCents: null,
      geoTier: normalizeGeoTier(
        expected.latestPurchase?.geo_tier,
        runtimeConfig.geoTierDefault,
      ),
      provider: "reconciliation_job",
      providerTxId: null,
      entityId: expected.latestPurchase?.id ?? null,
      metadata: {
        monthKey,
        expectedGranted,
        actualGranted,
        expectedUsed,
        actualUsed,
      },
    });
  }

  return {
    runAt: nowIso,
    monthKey,
    rowsScanned: learnerIds.size,
    driftDetected,
    autoFixed,
    queuedForReview,
  };
}
