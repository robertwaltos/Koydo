/**
 * Age-tier safety system for Koydo
 * Maps user ages to content tiers that control what features/content are accessible.
 */

export type AgeTier =
  | "little"    // 3–5  (Pre-K)
  | "explorer"  // 6–10 (K-5)
  | "teen"      // 11–16
  | "senior"    // 17+  (high school / adult learner)
  | "adult";    // 18+  (unrestricted educator / parent)

export interface AgeTierConfig {
  tier: AgeTier;
  label: string;
  minAge: number;
  maxAge: number;
  /** Maximum reading level (Lexile range, approximate) */
  maxLexile: number;
  /** Allow external links inside lesson content */
  allowExternalLinks: boolean;
  /** Allow user-generated chat content (companion chat, forums) */
  allowFreeformChat: boolean;
  /** Allow purchases / billing UI */
  allowPurchases: boolean;
  /** Content filter strictness: 0 = none, 1 = soft, 2 = strict */
  contentFilter: 0 | 1 | 2;
}

export const AGE_TIER_CONFIGS: Record<AgeTier, AgeTierConfig> = {
  little: {
    tier: "little",
    label: "Little Learner (3–5)",
    minAge: 3,
    maxAge: 5,
    maxLexile: 400,
    allowExternalLinks: false,
    allowFreeformChat: false,
    allowPurchases: false,
    contentFilter: 2,
  },
  explorer: {
    tier: "explorer",
    label: "Explorer (6–10)",
    minAge: 6,
    maxAge: 10,
    maxLexile: 800,
    allowExternalLinks: false,
    allowFreeformChat: false,
    allowPurchases: false,
    contentFilter: 2,
  },
  teen: {
    tier: "teen",
    label: "Teen (11–16)",
    minAge: 11,
    maxAge: 16,
    maxLexile: 1200,
    allowExternalLinks: true,
    allowFreeformChat: true,
    allowPurchases: false,
    contentFilter: 1,
  },
  senior: {
    tier: "senior",
    label: "Senior Student (17+)",
    minAge: 17,
    maxAge: 17,
    maxLexile: 1600,
    allowExternalLinks: true,
    allowFreeformChat: true,
    allowPurchases: true,
    contentFilter: 1,
  },
  adult: {
    tier: "adult",
    label: "Adult / Educator (18+)",
    minAge: 18,
    maxAge: 999,
    maxLexile: 9999,
    allowExternalLinks: true,
    allowFreeformChat: true,
    allowPurchases: true,
    contentFilter: 0,
  },
};

/**
 * Derive the age tier from a numeric age.
 * Falls back to "little" for ages below 3 (safety first).
 */
export function getTierFromAge(age: number): AgeTier {
  if (age >= 18) return "adult";
  if (age >= 17) return "senior";
  if (age >= 11) return "teen";
  if (age >= 6) return "explorer";
  return "little";
}

/**
 * Convenience: return the full config for a numeric age.
 */
export function getAgeTierConfig(age: number): AgeTierConfig {
  return AGE_TIER_CONFIGS[getTierFromAge(age)];
}
