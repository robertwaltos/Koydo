/**
 * AI Daily Limits — Companion + Tutor
 *
 * Free users:    5 companion + 3 tutor  per day
 * Premium users: 50 companion + 25 tutor per day
 * Beta testers:  premium limits
 *
 * All values runtime-configurable via app_settings.
 */

import { resolveLimit } from "@/lib/settings/resolve-limit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { checkPremiumAccessServer } from "@/lib/billing/entitlement-check";
import { hasActiveGrant } from "@/lib/access/access-grants";

function getStartOfUtcDayIso() {
  const now = new Date();
  return new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0, 0),
  ).toISOString();
}

export type AiUsageResult = {
  allowed: boolean;
  used: number;
  limit: number;
  remaining: number;
  tier: "free" | "premium" | "beta";
};

/**
 * Check AI companion daily limit for a user.
 */
export async function checkCompanionDailyLimit(
  userId: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  supabase?: any,
): Promise<AiUsageResult> {
  const { tier, limit } = await resolveAiLimit(userId, "companion", supabase);

  if (limit <= 0) {
    return { allowed: true, used: 0, limit: 0, remaining: Infinity, tier };
  }

  const admin = createSupabaseAdminClient();
  const { count, error } = await admin
    .from("ai_tutor_conversations")
    .select("id", { count: "exact", head: true })
    .eq("user_id", userId)
    .eq("role", "user")
    .eq("metadata->>channel", "companion")
    .gte("created_at", getStartOfUtcDayIso());

  if (error) {
    console.error("[ai-limits] Failed to check companion usage:", error.message);
    return { allowed: true, used: 0, limit, remaining: limit, tier };
  }

  const used = Number(count ?? 0);
  return {
    allowed: used < limit,
    used,
    limit,
    remaining: Math.max(0, limit - used),
    tier,
  };
}

/**
 * Check AI tutor daily limit for a user.
 */
export async function checkTutorDailyLimit(
  userId: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  supabase?: any,
): Promise<AiUsageResult> {
  const { tier, limit } = await resolveAiLimit(userId, "tutor", supabase);

  if (limit <= 0) {
    return { allowed: true, used: 0, limit: 0, remaining: Infinity, tier };
  }

  const admin = createSupabaseAdminClient();
  const { count, error } = await admin
    .from("ai_tutor_conversations")
    .select("id", { count: "exact", head: true })
    .eq("user_id", userId)
    .eq("role", "user")
    .is("metadata->>channel", null) // tutor messages don't have channel=companion
    .gte("created_at", getStartOfUtcDayIso());

  // fallback: if the metadata filter doesn't work, just count all non-companion
  if (error) {
    // Try simpler query without metadata filter
    const { count: simpleCount, error: simpleError } = await admin
      .from("ai_tutor_conversations")
      .select("id", { count: "exact", head: true })
      .eq("user_id", userId)
      .eq("role", "user")
      .gte("created_at", getStartOfUtcDayIso());

    if (simpleError) {
      console.error("[ai-limits] Failed to check tutor usage:", simpleError.message);
      return { allowed: true, used: 0, limit, remaining: limit, tier };
    }

    const used = Number(simpleCount ?? 0);
    return {
      allowed: used < limit,
      used,
      limit,
      remaining: Math.max(0, limit - used),
      tier,
    };
  }

  const used = Number(count ?? 0);
  return {
    allowed: used < limit,
    used,
    limit,
    remaining: Math.max(0, limit - used),
    tier,
  };
}

async function resolveAiLimit(
  userId: string,
  channel: "companion" | "tutor",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  supabase?: any,
): Promise<{ tier: "free" | "premium" | "beta"; limit: number }> {
  const admin = createSupabaseAdminClient();
  const entitlement = supabase
    ? await checkPremiumAccessServer(supabase, userId)
    : await checkPremiumAccessServer(admin, userId);

  const isBeta = await hasActiveGrant(userId, "beta_tester");

  const isPremiumOrBeta = entitlement.active || isBeta;
  const tier: "free" | "premium" | "beta" = isBeta
    ? "beta"
    : entitlement.active
      ? "premium"
      : "free";

  const settingKey = isPremiumOrBeta
    ? `ai_${channel}_daily_limit_premium`
    : `ai_${channel}_daily_limit_free`;

  const limit = await resolveLimit(settingKey, userId);
  return { tier, limit };
}
