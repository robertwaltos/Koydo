import type { LanguagePlanId } from "@/lib/language-learning/pricing";

/**
 * Canonical RevenueCat entitlement for paid language access.
 * Must match the RevenueCat dashboard entitlement identifier.
 */
export const RC_ENTITLEMENT_KOYDO_PRO = "koydo_pro";

/**
 * Backward-compatible entitlement aliases observed in older app/dashboard configs.
 * Keep these during migration to avoid false negatives while updating RevenueCat data.
 */
export const RC_LEGACY_PRO_ENTITLEMENT_IDS = [
  "premium_access",
  "language_learning_premium",
  "premium",
] as const;

export type RevenueCatSubscriptionPlanId =
  | Extract<
      LanguagePlanId,
      | "language_plus_conservative"
      | "language_family_conservative"
      | "language_plus_growth"
      | "language_family_growth"
      | "language_school_annual"
    >
  | "household_all_access_monthly"
  | "household_all_access_annual";

export const REVENUECAT_SUBSCRIPTION_PLAN_IDS: readonly RevenueCatSubscriptionPlanId[] = [
  "language_plus_conservative",
  "language_family_conservative",
  "language_plus_growth",
  "language_family_growth",
  "language_school_annual",
  "household_all_access_monthly",
  "household_all_access_annual",
] as const;

const revenueCatSubscriptionPlanIdSet = new Set<string>(REVENUECAT_SUBSCRIPTION_PLAN_IDS);

export function isRevenueCatSubscriptionPlanId(value: string): value is RevenueCatSubscriptionPlanId {
  return revenueCatSubscriptionPlanIdSet.has(value);
}

/**
 * Resolve the stored subscription plan ID from a RevenueCat product identifier.
 * For matrix-backed products, preserve the exact ID.
 * For legacy/unknown products, use a cadence fallback to avoid null plan fields.
 */
export function resolveRevenueCatPlanIdFromProductId(productId: string | null | undefined): string {
  if (!productId) {
    return "monthly";
  }

  if (isRevenueCatSubscriptionPlanId(productId)) {
    return productId;
  }

  return resolveCadenceFromProductId(productId);
}

export function resolveCadenceFromProductId(
  productId: string | null | undefined,
): "monthly" | "annual" {
  const normalized = (productId ?? "").toLowerCase();
  if (normalized.includes("annual") || normalized.includes("yearly")) {
    return "annual";
  }
  return "monthly";
}

