export type LanguagePricingProfileId = "conservative" | "growth";
export type LanguagePricingPhase = "1" | "2" | "3";
export type LanguageGeoTier =
  | "tier_1"
  | "tier_2"
  | "tier_3"
  | "tier_4"
  | "tier_5";
export type LanguageSkuCategory =
  | "core_plan"
  | "subscription"
  | "exam_unlock"
  | "bundle"
  | "household_pass";
export type LanguageSkuBillingCadence = "monthly" | "annual" | "one_time";
export type LanguageSkuStatus = "active" | "planned" | "disabled";
export type LanguageStakeLevel = "core" | "beginner" | "intermediate" | "advanced";
export type LanguageSkuId =
  | "core_practice"
  | "language_plus_conservative"
  | "language_family_conservative"
  | "language_plus_growth"
  | "language_family_growth"
  | "language_school_annual"
  | "exam_unlock_beginner"
  | "exam_unlock_intermediate"
  | "exam_unlock_advanced"
  | "exam_bundle_five_pack"
  | "household_all_access_monthly"
  | "household_all_access_annual";

export type LanguageSkuDefinition = {
  id: LanguageSkuId;
  displayName: string;
  category: LanguageSkuCategory;
  billingCadence: LanguageSkuBillingCadence;
  priceCentsUsd: number;
  status: LanguageSkuStatus;
  availableFromPhase: LanguagePricingPhase;
  stake: LanguageStakeLevel;
  maxLearnersIncluded: number | null;
  scoredAttemptCapPerLearnerMonthly: number | null;
  notes: string;
};

export type LanguageExperimentVariant = {
  id: string;
  label: string;
  config: {
    baseSkuId: Extract<
      LanguageSkuId,
      "language_plus_conservative" | "language_plus_growth"
    >;
    attemptCap: 250 | 300 | 350;
    utteranceSecondsAssumption: 8 | 10 | 12;
    freeSamplerAttempts: 5 | 10;
    paywallMessageMode: "benefit_first" | "price_anchor";
  };
};

export type LanguagePricingSpec = {
  version: string;
  launch: {
    defaultPhase: LanguagePricingPhase;
    defaultProfile: LanguagePricingProfileId;
    defaultAttemptCap: 250 | 300 | 350;
    defaultUtteranceSeconds: 8 | 10 | 12;
    defaultFreeSamplerAttempts: 5 | 10;
    annualDiscountPercent: number;
    familyAverageLearners: number;
  };
  geoPriceBands: Array<{
    geoTier: LanguageGeoTier;
    label: string;
    multiplier: number;
    notes: string;
  }>;
  guardrails: {
    maxRefundRatePercent: number;
    maxNpsDropPoints: number;
    maxRegionalPriceVarianceMultiplier: number;
  };
  skus: LanguageSkuDefinition[];
  experiments: {
    activeByDefault: string;
    variants: LanguageExperimentVariant[];
  };
};

export const LANGUAGE_PRICING_SPEC: LanguagePricingSpec = {
  version: "2026-02-27-pricing-spec-v1",
  launch: {
    defaultPhase: "1",
    defaultProfile: "conservative",
    defaultAttemptCap: 300,
    defaultUtteranceSeconds: 10,
    defaultFreeSamplerAttempts: 10,
    annualDiscountPercent: 20,
    familyAverageLearners: 2.8,
  },
  geoPriceBands: [
    {
      geoTier: "tier_1",
      label: "US, Canada (Anchor)",
      multiplier: 1.0,
      notes: "Benchmark pricing tier.",
    },
    {
      geoTier: "tier_2",
      label: "Western Europe, UK, AU/NZ",
      multiplier: 0.9,
      notes: "Slight discount for currency and local competition.",
    },
    {
      geoTier: "tier_3",
      label: "LATAM + selected MENA",
      multiplier: 0.6,
      notes: "PPP-adjusted growth tier.",
    },
    {
      geoTier: "tier_4",
      label: "India + Southeast Asia",
      multiplier: 0.4,
      notes: "High-volume, price-sensitive tier.",
    },
    {
      geoTier: "tier_5",
      label: "Sub-Saharan Africa + lower-income MENA",
      multiplier: 0.3,
      notes: "Accessibility-led pricing with strong local payment support.",
    },
  ],
  guardrails: {
    maxRefundRatePercent: 8,
    maxNpsDropPoints: 10,
    maxRegionalPriceVarianceMultiplier: 3,
  },
  skus: [
    {
      id: "core_practice",
      displayName: "Core Practice",
      category: "core_plan",
      billingCadence: "monthly",
      priceCentsUsd: 0,
      status: "active",
      availableFromPhase: "1",
      stake: "core",
      maxLearnersIncluded: 1,
      scoredAttemptCapPerLearnerMonthly: 0,
      notes: "Unlimited practice-only mode with no official scored grading.",
    },
    {
      id: "language_plus_conservative",
      displayName: "Language Plus (Conservative)",
      category: "subscription",
      billingCadence: "monthly",
      priceCentsUsd: 599,
      status: "active",
      availableFromPhase: "1",
      stake: "intermediate",
      maxLearnersIncluded: 1,
      scoredAttemptCapPerLearnerMonthly: 300,
      notes: "Launch default: up to 300 scored attempts/month then practice-only mode.",
    },
    {
      id: "language_family_conservative",
      displayName: "Language Family (Conservative)",
      category: "subscription",
      billingCadence: "monthly",
      priceCentsUsd: 1499,
      status: "active",
      availableFromPhase: "1",
      stake: "intermediate",
      maxLearnersIncluded: 4,
      scoredAttemptCapPerLearnerMonthly: 300,
      notes: "Family plan for up to 4 learners with per-learner scoring caps.",
    },
    {
      id: "language_plus_growth",
      displayName: "Language Plus (Growth)",
      category: "subscription",
      billingCadence: "monthly",
      priceCentsUsd: 799,
      status: "planned",
      availableFromPhase: "1",
      stake: "advanced",
      maxLearnersIncluded: 1,
      scoredAttemptCapPerLearnerMonthly: 300,
      notes: "Growth variant for controlled A/B testing post-launch.",
    },
    {
      id: "language_family_growth",
      displayName: "Language Family (Growth)",
      category: "subscription",
      billingCadence: "monthly",
      priceCentsUsd: 1999,
      status: "planned",
      availableFromPhase: "1",
      stake: "advanced",
      maxLearnersIncluded: 4,
      scoredAttemptCapPerLearnerMonthly: 300,
      notes: "Family growth variant for revenue-optimized experiments.",
    },
    {
      id: "language_school_annual",
      displayName: "Language School Annual",
      category: "subscription",
      billingCadence: "annual",
      priceCentsUsd: 5988,
      status: "planned",
      availableFromPhase: "1",
      stake: "intermediate",
      maxLearnersIncluded: null,
      scoredAttemptCapPerLearnerMonthly: 300,
      notes: "Reference seat pricing at $4.99/seat/month billed annually.",
    },
    {
      id: "exam_unlock_beginner",
      displayName: "Exam Unlock (Beginner)",
      category: "exam_unlock",
      billingCadence: "one_time",
      priceCentsUsd: 999,
      status: "planned",
      availableFromPhase: "2",
      stake: "beginner",
      maxLearnersIncluded: 1,
      scoredAttemptCapPerLearnerMonthly: null,
      notes: "One-time unlock for low-stakes pathways.",
    },
    {
      id: "exam_unlock_intermediate",
      displayName: "Exam Unlock (Intermediate)",
      category: "exam_unlock",
      billingCadence: "one_time",
      priceCentsUsd: 1999,
      status: "planned",
      availableFromPhase: "2",
      stake: "intermediate",
      maxLearnersIncluded: 1,
      scoredAttemptCapPerLearnerMonthly: null,
      notes: "One-time unlock for medium-stakes pathways.",
    },
    {
      id: "exam_unlock_advanced",
      displayName: "Exam Unlock (Advanced)",
      category: "exam_unlock",
      billingCadence: "one_time",
      priceCentsUsd: 2999,
      status: "planned",
      availableFromPhase: "2",
      stake: "advanced",
      maxLearnersIncluded: 1,
      scoredAttemptCapPerLearnerMonthly: null,
      notes: "One-time unlock for high-stakes pathways.",
    },
    {
      id: "exam_bundle_five_pack",
      displayName: "Exam Bundle (Five-Pack)",
      category: "bundle",
      billingCadence: "one_time",
      priceCentsUsd: 5999,
      status: "planned",
      availableFromPhase: "2",
      stake: "intermediate",
      maxLearnersIncluded: 1,
      scoredAttemptCapPerLearnerMonthly: null,
      notes: "Discounted bundle for multi-exam tracks.",
    },
    {
      id: "household_all_access_monthly",
      displayName: "Household All-Access",
      category: "household_pass",
      billingCadence: "monthly",
      priceCentsUsd: 2999,
      status: "planned",
      availableFromPhase: "3",
      stake: "advanced",
      maxLearnersIncluded: 6,
      scoredAttemptCapPerLearnerMonthly: 350,
      notes: "Household pass for cross-generational usage.",
    },
    {
      id: "household_all_access_annual",
      displayName: "Household All-Access (Annual)",
      category: "household_pass",
      billingCadence: "annual",
      priceCentsUsd: 14900,
      status: "planned",
      availableFromPhase: "3",
      stake: "advanced",
      maxLearnersIncluded: 6,
      scoredAttemptCapPerLearnerMonthly: 350,
      notes: "Annual household pass with retention-first economics.",
    },
  ],
  experiments: {
    activeByDefault: "variant_control",
    variants: [
      {
        id: "variant_low_barrier",
        label: "Low Barrier",
        config: {
          baseSkuId: "language_plus_conservative",
          attemptCap: 300,
          utteranceSecondsAssumption: 10,
          freeSamplerAttempts: 10,
          paywallMessageMode: "benefit_first",
        },
      },
      {
        id: "variant_control",
        label: "Control",
        config: {
          baseSkuId: "language_plus_conservative",
          attemptCap: 300,
          utteranceSecondsAssumption: 10,
          freeSamplerAttempts: 10,
          paywallMessageMode: "benefit_first",
        },
      },
      {
        id: "variant_premium_module",
        label: "Premium Module",
        config: {
          baseSkuId: "language_plus_growth",
          attemptCap: 300,
          utteranceSecondsAssumption: 10,
          freeSamplerAttempts: 10,
          paywallMessageMode: "price_anchor",
        },
      },
      {
        id: "variant_retention_focus",
        label: "Retention Focus",
        config: {
          baseSkuId: "language_plus_conservative",
          attemptCap: 350,
          utteranceSecondsAssumption: 10,
          freeSamplerAttempts: 10,
          paywallMessageMode: "benefit_first",
        },
      },
    ],
  },
};

const LANGUAGE_SKU_MAP = new Map<LanguageSkuId, LanguageSkuDefinition>(
  LANGUAGE_PRICING_SPEC.skus.map((sku) => [sku.id, sku]),
);

const LANGUAGE_GEO_TIER_MAP = new Map(
  LANGUAGE_PRICING_SPEC.geoPriceBands.map((band) => [band.geoTier, band]),
);

const LANGUAGE_EXPERIMENT_MAP = new Map(
  LANGUAGE_PRICING_SPEC.experiments.variants.map((variant) => [variant.id, variant]),
);

export function getLanguagePricingSpecSnapshot() {
  return LANGUAGE_PRICING_SPEC;
}

export function getLanguageSkuById(skuId: LanguageSkuId) {
  return LANGUAGE_SKU_MAP.get(skuId) ?? null;
}

export function listLanguageSkusByPhase(phase: LanguagePricingPhase) {
  return LANGUAGE_PRICING_SPEC.skus.filter(
    (sku) => sku.availableFromPhase <= phase && sku.status !== "disabled",
  );
}

export function getLanguageGeoPriceBand(geoTier: LanguageGeoTier) {
  return LANGUAGE_GEO_TIER_MAP.get(geoTier) ?? null;
}

export function resolveLanguageRegionalPriceCents(
  baseCentsUsd: number,
  geoTier: LanguageGeoTier,
) {
  const band = getLanguageGeoPriceBand(geoTier);
  if (!band) return baseCentsUsd;
  return Math.max(0, Math.round(baseCentsUsd * band.multiplier));
}

export function getLanguageExperimentVariant(variantId: string) {
  return LANGUAGE_EXPERIMENT_MAP.get(variantId) ?? null;
}
