/**
 * useAgeTier — React hook that enforces age-tier safety restrictions.
 *
 * Reads the current user's birth_date from profile context and returns
 * the applicable AgeTierConfig with feature flags.
 *
 * COPPA compliance: This hook is the runtime enforcement layer for
 * age-tier restrictions defined in src/lib/safety/age-tier.ts.
 */

"use client";

import { useMemo } from "react";
import { getAgeTierConfig, type AgeTierConfig, type AgeTier } from "@/lib/safety/age-tier";

/** Compute age from a birth_date string (YYYY-MM-DD or YYYY-01-01). */
function computeAge(birthDate: string): number {
  const birth = new Date(birthDate);
  const now = new Date();
  let age = now.getFullYear() - birth.getFullYear();
  const monthDiff = now.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birth.getDate())) {
    age--;
  }
  return Math.max(0, age);
}

export type AgeTierResult = {
  /** Resolved tier name */
  tier: AgeTier;
  /** Numeric age */
  age: number;
  /** Full config with feature flags */
  config: AgeTierConfig;
  /** True if user is under 13 (COPPA child) */
  isCoppaChild: boolean;
  /** Convenience: is external link navigation allowed? */
  allowExternalLinks: boolean;
  /** Convenience: is freeform chat/UGC allowed? */
  allowFreeformChat: boolean;
  /** Convenience: is billing/purchase UI allowed? */
  allowPurchases: boolean;
  /** Content filter strictness (0=none, 1=soft, 2=strict) */
  contentFilter: 0 | 1 | 2;
};

/**
 * Returns the age-tier configuration for the current user.
 *
 * @param birthDate — the user's birth_date from user_profiles (YYYY-MM-DD).
 *   If null/undefined, returns the most restrictive tier ("little").
 */
export function useAgeTier(birthDate: string | null | undefined): AgeTierResult {
  return useMemo(() => {
    if (!birthDate) {
      // No birth date = assume youngest child = most restrictive
      const config = getAgeTierConfig(3);
      return {
        tier: config.tier,
        age: 0,
        config,
        isCoppaChild: true,
        allowExternalLinks: false,
        allowFreeformChat: false,
        allowPurchases: false,
        contentFilter: 2 as const,
      };
    }

    const age = computeAge(birthDate);
    const config = getAgeTierConfig(age);

    return {
      tier: config.tier,
      age,
      config,
      isCoppaChild: age < 13,
      allowExternalLinks: config.allowExternalLinks,
      allowFreeformChat: config.allowFreeformChat,
      allowPurchases: config.allowPurchases,
      contentFilter: config.contentFilter,
    };
  }, [birthDate]);
}

/**
 * Server-side equivalent — call from API routes or server components.
 */
export function getAgeTierFromBirthDate(birthDate: string | null | undefined): AgeTierResult {
  if (!birthDate) {
    const config = getAgeTierConfig(3);
    return {
      tier: config.tier,
      age: 0,
      config,
      isCoppaChild: true,
      allowExternalLinks: false,
      allowFreeformChat: false,
      allowPurchases: false,
      contentFilter: 2 as const,
    };
  }

  const age = computeAge(birthDate);
  const config = getAgeTierConfig(age);

  return {
    tier: config.tier,
    age,
    config,
    isCoppaChild: age < 13,
    allowExternalLinks: config.allowExternalLinks,
    allowFreeformChat: config.allowFreeformChat,
    allowPurchases: config.allowPurchases,
    contentFilter: config.contentFilter,
  };
}
