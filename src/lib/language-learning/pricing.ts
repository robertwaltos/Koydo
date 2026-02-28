import {
  LANGUAGE_PRICING_SPEC,
  type LanguagePricingProfileId,
  type LanguageSkuId,
  getLanguageSkuById,
} from "./pricing-spec";

export type { LanguagePricingProfileId } from "./pricing-spec";

export type LanguagePlanId =
  | "core_practice"
  | "language_plus_conservative"
  | "language_family_conservative"
  | "language_plus_growth"
  | "language_family_growth"
  | "language_school_annual";

export type LanguagePlan = {
  id: LanguagePlanId;
  name: string;
  priceUsdMonthly: number;
  billingCadence: "monthly" | "annual";
  billingTermMonths: number;
  learnerScope: "per_learner" | "family_bundle";
  maxLearnersIncluded: number | null;
  scoredAttemptsPerLearnerMonthly: number | null;
  translationEnabled: boolean;
  pronunciationGradingEnabled: boolean;
  parentReportingEnabled: boolean;
  notes: string;
};

export type LanguagePricingSnapshot = {
  version: string;
  assumptions: {
    aiCostTargetPerLearnerMonthlyUsd: number;
    llmCostCapPerLearnerMonthlyUsd: number;
  };
  launch: {
    phase: "1" | "2" | "3";
    defaultAttemptCap: 250 | 300 | 350;
    defaultUtteranceSeconds: 8 | 10 | 12;
    defaultFreeSamplerAttempts: 5 | 10;
  };
  plans: LanguagePlan[];
  recommendedLaunchPlanId: LanguagePlanId;
};

type SubscriptionSkuId = Extract<
  LanguageSkuId,
  | "core_practice"
  | "language_plus_conservative"
  | "language_family_conservative"
  | "language_plus_growth"
  | "language_family_growth"
  | "language_school_annual"
>;

const LANGUAGE_PLAN_SKU_IDS: SubscriptionSkuId[] = [
  "core_practice",
  "language_plus_conservative",
  "language_family_conservative",
  "language_plus_growth",
  "language_family_growth",
  "language_school_annual",
];

export const LANGUAGE_PRICING_VERSION = LANGUAGE_PRICING_SPEC.version;
export const LANGUAGE_DEFAULT_PRICING_PROFILE: LanguagePricingProfileId =
  LANGUAGE_PRICING_SPEC.launch.defaultProfile;

function centsToMonthlyUsd(cents: number, cadence: "monthly" | "annual") {
  if (cadence === "annual") {
    return Number((cents / 100 / 12).toFixed(2));
  }
  return Number((cents / 100).toFixed(2));
}

function toLanguagePlan(planId: LanguagePlanId): LanguagePlan {
  const sku = getLanguageSkuById(planId);
  if (!sku) {
    throw new Error(`Missing language pricing SKU mapping for ${planId}.`);
  }
  if (sku.billingCadence !== "monthly" && sku.billingCadence !== "annual") {
    throw new Error(
      `Invalid subscription cadence for ${planId}: ${sku.billingCadence}.`,
    );
  }

  const billingCadence = sku.billingCadence;

  return {
    id: planId,
    name: sku.displayName,
    priceUsdMonthly: centsToMonthlyUsd(sku.priceCentsUsd, billingCadence),
    billingCadence,
    billingTermMonths: billingCadence === "annual" ? 12 : 1,
    learnerScope: sku.maxLearnersIncluded === 1 ? "per_learner" : "family_bundle",
    maxLearnersIncluded: sku.maxLearnersIncluded,
    scoredAttemptsPerLearnerMonthly: sku.scoredAttemptCapPerLearnerMonthly,
    translationEnabled: planId !== "core_practice",
    pronunciationGradingEnabled: planId !== "core_practice",
    parentReportingEnabled: true,
    notes: sku.notes,
  };
}

export const LANGUAGE_PRICING_PLANS: LanguagePlan[] = LANGUAGE_PLAN_SKU_IDS.map((planId) =>
  toLanguagePlan(planId),
);

const LANGUAGE_PLAN_MAP = new Map<LanguagePlanId, LanguagePlan>(
  LANGUAGE_PRICING_PLANS.map((plan) => [plan.id, plan]),
);

export function getLanguagePlanById(planId: LanguagePlanId) {
  return LANGUAGE_PLAN_MAP.get(planId) ?? null;
}

export function getScoredAttemptLimitForPlan(planId: LanguagePlanId) {
  const plan = getLanguagePlanById(planId);
  return plan?.scoredAttemptsPerLearnerMonthly ?? 0;
}

export function getLanguagePlanIdForProfile(
  profile: LanguagePricingProfileId,
  scope: "plus" | "family",
): LanguagePlanId {
  if (scope === "family") {
    return profile === "growth"
      ? "language_family_growth"
      : "language_family_conservative";
  }
  return profile === "growth"
    ? "language_plus_growth"
    : "language_plus_conservative";
}

export function getLanguagePricingSnapshot(): LanguagePricingSnapshot {
  return {
    version: LANGUAGE_PRICING_VERSION,
    assumptions: {
      aiCostTargetPerLearnerMonthlyUsd: 0.05,
      llmCostCapPerLearnerMonthlyUsd: 0.008,
    },
    launch: {
      phase: LANGUAGE_PRICING_SPEC.launch.defaultPhase,
      defaultAttemptCap: LANGUAGE_PRICING_SPEC.launch.defaultAttemptCap,
      defaultUtteranceSeconds: LANGUAGE_PRICING_SPEC.launch.defaultUtteranceSeconds,
      defaultFreeSamplerAttempts: LANGUAGE_PRICING_SPEC.launch.defaultFreeSamplerAttempts,
    },
    plans: LANGUAGE_PRICING_PLANS,
    recommendedLaunchPlanId: getLanguagePlanIdForProfile(
      LANGUAGE_DEFAULT_PRICING_PROFILE,
      "plus",
    ),
  };
}
