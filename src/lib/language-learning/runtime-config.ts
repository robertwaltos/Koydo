import { z } from "zod";
import { serverEnv } from "@/lib/config/env";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import {
  LANGUAGE_PRICING_SPEC,
  type LanguageGeoTier,
  type LanguagePricingPhase,
  type LanguagePricingProfileId,
} from "./pricing-spec";

export const LANGUAGE_RUNTIME_CONFIG_APP_SETTINGS_KEY = "language_pricing_runtime";

export type LanguageRuntimeConfig = {
  source: "default" | "app_settings";
  phase: LanguagePricingPhase;
  pricingProfile: LanguagePricingProfileId;
  attemptCap: 250 | 300 | 350;
  freeSamplerAttempts: 5 | 10;
  geoTierDefault: LanguageGeoTier;
  activeExperimentVariantId: string | null;
};

type RuntimeCache = {
  value: LanguageRuntimeConfig;
  expiresAtMs: number;
};

const runtimeConfigPartialSchema = z
  .object({
    phase: z.enum(["1", "2", "3"]).optional(),
    pricingProfile: z.enum(["conservative", "growth"]).optional(),
    attemptCap: z.union([z.literal(250), z.literal(300), z.literal(350)]).optional(),
    freeSamplerAttempts: z.union([z.literal(5), z.literal(10)]).optional(),
    geoTierDefault: z
      .enum(["tier_1", "tier_2", "tier_3", "tier_4", "tier_5"])
      .optional(),
    activeExperimentVariantId: z.string().min(1).nullable().optional(),
  })
  .partial();

let runtimeConfigCache: RuntimeCache | null = null;

function hasAdminDbAccess() {
  return Boolean(
    serverEnv.NEXT_PUBLIC_SUPABASE_URL && serverEnv.SUPABASE_SERVICE_ROLE_KEY,
  );
}

function getDefaultRuntimeConfig(): LanguageRuntimeConfig {
  return {
    source: "default",
    phase: LANGUAGE_PRICING_SPEC.launch.defaultPhase,
    pricingProfile: serverEnv.LANGUAGE_PRICING_PROFILE,
    attemptCap: LANGUAGE_PRICING_SPEC.launch.defaultAttemptCap,
    freeSamplerAttempts: LANGUAGE_PRICING_SPEC.launch.defaultFreeSamplerAttempts,
    geoTierDefault: "tier_1",
    activeExperimentVariantId: LANGUAGE_PRICING_SPEC.experiments.activeByDefault,
  };
}

export async function getLanguageRuntimeConfig(options?: {
  forceRefresh?: boolean;
  cacheTtlMs?: number;
}): Promise<LanguageRuntimeConfig> {
  const forceRefresh = Boolean(options?.forceRefresh);
  const cacheTtlMs = Math.max(1_000, options?.cacheTtlMs ?? 60_000);
  const now = Date.now();

  if (!forceRefresh && runtimeConfigCache && runtimeConfigCache.expiresAtMs > now) {
    return runtimeConfigCache.value;
  }

  const defaults = getDefaultRuntimeConfig();
  if (!hasAdminDbAccess()) {
    runtimeConfigCache = { value: defaults, expiresAtMs: now + cacheTtlMs };
    return defaults;
  }

  try {
    const adminDb = createSupabaseAdminClient();
    const { data, error } = await adminDb
      .from("app_settings")
      .select("value")
      .eq("key", LANGUAGE_RUNTIME_CONFIG_APP_SETTINGS_KEY)
      .maybeSingle();

    if (error || !data?.value || typeof data.value !== "object") {
      runtimeConfigCache = { value: defaults, expiresAtMs: now + cacheTtlMs };
      return defaults;
    }

    const parsed = runtimeConfigPartialSchema.safeParse(data.value);
    if (!parsed.success) {
      runtimeConfigCache = { value: defaults, expiresAtMs: now + cacheTtlMs };
      return defaults;
    }

    const merged: LanguageRuntimeConfig = {
      source: "app_settings",
      phase: parsed.data.phase ?? defaults.phase,
      pricingProfile: parsed.data.pricingProfile ?? defaults.pricingProfile,
      attemptCap: parsed.data.attemptCap ?? defaults.attemptCap,
      freeSamplerAttempts:
        parsed.data.freeSamplerAttempts ?? defaults.freeSamplerAttempts,
      geoTierDefault: parsed.data.geoTierDefault ?? defaults.geoTierDefault,
      activeExperimentVariantId:
        parsed.data.activeExperimentVariantId ?? defaults.activeExperimentVariantId,
    };

    runtimeConfigCache = { value: merged, expiresAtMs: now + cacheTtlMs };
    return merged;
  } catch {
    runtimeConfigCache = { value: defaults, expiresAtMs: now + cacheTtlMs };
    return defaults;
  }
}

export function clearLanguageRuntimeConfigCache() {
  runtimeConfigCache = null;
}
