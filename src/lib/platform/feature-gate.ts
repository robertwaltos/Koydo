/**
 * Feature Gate Engine — Evaluates whether a feature is available to a user.
 *
 * Resolution order (fail-closed at each step):
 *   kill_switch → env_override → admin_db_toggle → app_variant → age_tier
 *   → paywall_tier → parent_override → ALLOWED
 *
 * Reuses:
 *   - rollout-governance.ts caching pattern (60s in-memory)
 *   - tier-gate.ts subscription check (canUseCloudAI)
 *   - age-tier.ts tier ordering
 */

import type { AgeTier } from "@/lib/safety/age-tier";
import { AGE_TIER_ORDER } from "@/lib/safety/age-tier";
import {
  type AppFeatureId,
  type AppVariant,
  type FeatureDefinition,
  type FeatureTier,
  FEATURE_CATALOG,
  getCurrentAppVariant,
} from "./feature-registry";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

// ── Types ───────────────────────────────────────────────────────────────────

export type FeatureDenyReason =
  | "unknown_feature"
  | "kill_switch"
  | "env_disabled"
  | "admin_disabled"
  | "app_variant_excluded"
  | "age_tier_below_minimum"
  | "age_tier_above_maximum"
  | "requires_subscription"
  | "requires_parent_opt_in"
  | "parent_disabled";

export type FeatureResult = {
  allowed: boolean;
  featureId: string;
  reason: FeatureDenyReason | "allowed";
  tier?: FeatureTier;
};

export type FeatureCheckContext = {
  featureId: AppFeatureId;
  userId?: string | null;
  ageTier?: AgeTier | null;
  isPaidUser?: boolean;
  /** Parent override for this feature (true = force-on, false = force-off) */
  parentOverride?: boolean | null;
  /** Override the app variant (defaults to env var) */
  appVariant?: AppVariant;
};

// ── DB Cache for feature_registry table ─────────────────────────────────────

type DbFeatureRow = {
  id: string;
  enabled: boolean;
  tier: string;
  min_age_tier: string;
  max_age_tier: string;
  app_variants: string[];
};

type DbCache = {
  rows: Map<string, DbFeatureRow>;
  expiresAtMs: number;
};

let dbCache: DbCache | null = null;
const DB_CACHE_TTL_MS = 60_000;

export function clearFeatureRegistryCache() {
  dbCache = null;
}

async function getDbFeatureRows(): Promise<Map<string, DbFeatureRow>> {
  const now = Date.now();
  if (dbCache && dbCache.expiresAtMs > now) {
    return dbCache.rows;
  }

  const map = new Map<string, DbFeatureRow>();

  try {
    const admin = createSupabaseAdminClient();
    const { data, error } = await admin
      .from("feature_registry")
      .select("id, enabled, tier, min_age_tier, max_age_tier, app_variants");

    if (error) {
      console.error("[feature-gate] Failed to load feature_registry:", error.message);
    } else if (data) {
      for (const row of data) {
        map.set(row.id, row as DbFeatureRow);
      }
    }
  } catch (err) {
    console.error("[feature-gate] Unexpected error loading feature_registry:", err);
  }

  dbCache = { rows: map, expiresAtMs: now + DB_CACHE_TTL_MS };
  return map;
}

// ── Parent Override Cache ───────────────────────────────────────────────────

type ParentOverrideCache = {
  overrides: Map<string, boolean>;
  expiresAtMs: number;
};

const parentOverrideCacheMap = new Map<string, ParentOverrideCache>();

export function clearParentOverrideCache(childProfileId?: string) {
  if (childProfileId) {
    parentOverrideCacheMap.delete(childProfileId);
  } else {
    parentOverrideCacheMap.clear();
  }
}

export async function getParentOverrides(
  childProfileId: string,
): Promise<Map<string, boolean>> {
  const now = Date.now();
  const cached = parentOverrideCacheMap.get(childProfileId);
  if (cached && cached.expiresAtMs > now) {
    return cached.overrides;
  }

  const overrides = new Map<string, boolean>();

  try {
    const admin = createSupabaseAdminClient();
    const { data, error } = await admin
      .from("parent_feature_overrides")
      .select("feature_id, enabled")
      .eq("child_profile_id", childProfileId);

    if (error) {
      console.error("[feature-gate] Failed to load parent overrides:", error.message);
    } else if (data) {
      for (const row of data) {
        overrides.set(row.feature_id, row.enabled);
      }
    }
  } catch (err) {
    console.error("[feature-gate] Unexpected error loading parent overrides:", err);
  }

  parentOverrideCacheMap.set(childProfileId, {
    overrides,
    expiresAtMs: now + DB_CACHE_TTL_MS,
  });
  return overrides;
}

// ── Age Tier Helpers ────────────────────────────────────────────────────────

function ageTierIndex(tier: AgeTier): number {
  const idx = AGE_TIER_ORDER.indexOf(tier);
  return idx === -1 ? 0 : idx;
}

function isAgeTierInRange(
  userTier: AgeTier,
  minTier: AgeTier,
  maxTier: AgeTier,
): boolean {
  const userIdx = ageTierIndex(userTier);
  const minIdx = ageTierIndex(minTier);
  const maxIdx = ageTierIndex(maxTier);
  return userIdx >= minIdx && userIdx <= maxIdx;
}

// ── Kill Switch + Env Override ──────────────────────────────────────────────

function isGlobalKillSwitchActive(): boolean {
  const v = process.env.KOYDO_KILL_SWITCH_GLOBAL;
  return v === "true" || v === "1";
}

function getEnvOverride(featureId: AppFeatureId): boolean | null {
  const envKey = `KOYDO_FEATURE_${featureId.toUpperCase()}`;
  const v = process.env[envKey];
  if (v === "true" || v === "1") return true;
  if (v === "false" || v === "0") return false;
  return null;
}

// ── Core Evaluation ─────────────────────────────────────────────────────────

/**
 * Evaluate whether a feature is available given the full context.
 *
 * Resolution order:
 * 1. Unknown feature → deny
 * 2. Global kill switch → deny
 * 3. Env override → honor if set
 * 4. Admin DB toggle → deny if disabled
 * 5. App variant check → deny if excluded
 * 6. Age tier check → deny if out of range
 * 7. Paywall tier check → deny if premium required and user is free
 * 8. Parent opt-in check → deny if requires opt-in and no parent approval
 * 9. Parent override (force-off) → deny
 * 10. Allowed
 */
export async function evaluateFeature(
  ctx: FeatureCheckContext,
): Promise<FeatureResult> {
  const { featureId } = ctx;

  // 1. Unknown feature
  const staticDef = FEATURE_CATALOG[featureId];
  if (!staticDef) {
    return { allowed: false, featureId, reason: "unknown_feature" };
  }

  // 2. Global kill switch
  if (isGlobalKillSwitchActive()) {
    return { allowed: false, featureId, reason: "kill_switch", tier: staticDef.tier };
  }

  // 3. Env override
  const envOverride = getEnvOverride(featureId);
  if (envOverride === false) {
    return { allowed: false, featureId, reason: "env_disabled", tier: staticDef.tier };
  }

  // Merge DB row with static defaults
  const dbRows = await getDbFeatureRows();
  const dbRow = dbRows.get(featureId);

  const enabled = dbRow?.enabled ?? staticDef.enabled;
  const tier = (dbRow?.tier ?? staticDef.tier) as FeatureTier;
  const minAgeTier = (dbRow?.min_age_tier ?? staticDef.minAgeTier) as AgeTier;
  const maxAgeTier = (dbRow?.max_age_tier ?? staticDef.maxAgeTier) as AgeTier;
  const appVariants = (dbRow?.app_variants ?? staticDef.appVariants) as AppVariant[];

  // If env says force-on, skip the admin toggle check
  if (envOverride !== true) {
    // 4. Admin DB toggle
    if (!enabled) {
      return { allowed: false, featureId, reason: "admin_disabled", tier };
    }
  }

  // 5. App variant
  const currentVariant = ctx.appVariant ?? getCurrentAppVariant();
  if (!appVariants.includes(currentVariant) && !appVariants.includes("full")) {
    // "full" variant includes everything — but the variant list already
    // includes "full" for non-excluded features via variantsFor()
    if (currentVariant !== "full") {
      return { allowed: false, featureId, reason: "app_variant_excluded", tier };
    }
  }

  // 6. Age tier
  if (ctx.ageTier) {
    if (ageTierIndex(ctx.ageTier) < ageTierIndex(minAgeTier)) {
      return { allowed: false, featureId, reason: "age_tier_below_minimum", tier };
    }
    if (ageTierIndex(ctx.ageTier) > ageTierIndex(maxAgeTier)) {
      return { allowed: false, featureId, reason: "age_tier_above_maximum", tier };
    }
  }

  // 7. Paywall tier
  if (tier === "premium" && !ctx.isPaidUser) {
    return { allowed: false, featureId, reason: "requires_subscription", tier };
  }

  // 8. Parent opt-in
  if (tier === "parent_opt_in") {
    if (ctx.parentOverride === true) {
      // Parent explicitly enabled — allowed
    } else if (ctx.parentOverride === false) {
      return { allowed: false, featureId, reason: "parent_disabled", tier };
    } else {
      // No parent override → not opted in → denied
      return { allowed: false, featureId, reason: "requires_parent_opt_in", tier };
    }
  }

  // 9. Parent force-off (for non-parent_opt_in features, parent can still disable)
  if (tier !== "parent_opt_in" && ctx.parentOverride === false) {
    return { allowed: false, featureId, reason: "parent_disabled", tier };
  }

  // 10. Allowed
  return { allowed: true, featureId, reason: "allowed", tier };
}

// ── Batch Evaluation ────────────────────────────────────────────────────────

export type BatchFeatureContext = Omit<FeatureCheckContext, "featureId">;

/**
 * Evaluate multiple features in a single call (shares DB cache).
 */
export async function evaluateFeatures(
  featureIds: AppFeatureId[],
  ctx: BatchFeatureContext,
): Promise<Record<string, FeatureResult>> {
  const results: Record<string, FeatureResult> = {};
  for (const featureId of featureIds) {
    results[featureId] = await evaluateFeature({ ...ctx, featureId });
  }
  return results;
}

/**
 * Evaluate ALL features for a user context (used by FeatureProvider on mount).
 */
export async function evaluateAllFeatures(
  ctx: BatchFeatureContext,
): Promise<Record<string, FeatureResult>> {
  const { APP_FEATURE_IDS } = await import("./feature-registry");
  return evaluateFeatures([...APP_FEATURE_IDS], ctx);
}
