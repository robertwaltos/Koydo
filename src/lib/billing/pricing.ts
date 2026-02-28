import { serverEnv } from "@/lib/config/env";
import type { LanguagePlanId } from "@/lib/language-learning/pricing";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

export async function getActiveStripePriceId() {
  const fallback = serverEnv.STRIPE_PRICE_ID ?? null;

  if (!serverEnv.NEXT_PUBLIC_SUPABASE_URL || !serverEnv.SUPABASE_SERVICE_ROLE_KEY) {
    return fallback;
  }

  try {
    const supabase = createSupabaseAdminClient();
    const { data, error } = await supabase
      .from("app_settings")
      .select("value")
      .eq("key", "stripe_price_id")
      .maybeSingle();

    if (error || !data?.value) {
      return fallback;
    }

    const configured =
      typeof data.value === "object" &&
      data.value !== null &&
      "id" in data.value &&
      typeof data.value.id === "string"
        ? data.value.id
        : null;

    return configured ?? fallback;
  } catch {
    return fallback;
  }
}

function parseLanguagePriceMap(value: unknown): Partial<Record<LanguagePlanId, string>> {
  if (!value || typeof value !== "object") return {};

  const row = value as Record<string, unknown>;
  const mapped: Partial<Record<LanguagePlanId, string>> = {};
  const knownPlanIds: LanguagePlanId[] = [
    "language_plus_conservative",
    "language_family_conservative",
    "language_plus_growth",
    "language_family_growth",
    "language_school_annual",
  ];

  for (const planId of knownPlanIds) {
    const candidate = row[planId];
    if (typeof candidate === "string" && candidate.trim().length > 0) {
      mapped[planId] = candidate.trim();
    }
  }

  return mapped;
}

export async function getStripePriceIdForLanguagePlan(planId: LanguagePlanId) {
  if (planId === "core_practice") {
    return null;
  }

  const fallback = serverEnv.STRIPE_PRICE_ID ?? null;
  if (!serverEnv.NEXT_PUBLIC_SUPABASE_URL || !serverEnv.SUPABASE_SERVICE_ROLE_KEY) {
    return fallback;
  }

  try {
    const supabase = createSupabaseAdminClient();
    const { data, error } = await supabase
      .from("app_settings")
      .select("value")
      .eq("key", "stripe_language_price_ids")
      .maybeSingle();

    if (error || !data?.value) {
      return fallback;
    }

    const mapped = parseLanguagePriceMap(data.value);
    return mapped[planId] ?? fallback;
  } catch {
    return fallback;
  }
}
