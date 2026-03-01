import type { LanguagePlanId } from "@/lib/language-learning/pricing";

type RevenueCatPackageLike = {
  identifier: string;
  packageType?: string | null;
  product: {
    identifier: string;
    subscriptionPeriod?: string | null;
    priceString?: string | null;
  };
};

type RevenueCatOfferingsLike = {
  current: {
    availablePackages: RevenueCatPackageLike[];
  } | null;
};

function normalizeValue(value: string | null | undefined) {
  return (value ?? "").trim().toLowerCase();
}

function tokenize(value: string) {
  return normalizeValue(value)
    .split(/[^a-z0-9]+/g)
    .filter(Boolean);
}

function planCadence(planId: string): "monthly" | "annual" {
  const normalizedPlanId = normalizeValue(planId);
  return normalizedPlanId.includes("annual") || normalizedPlanId.includes("yearly")
    ? "annual"
    : "monthly";
}

function planFamilyMode(planId: string): "family" | "plus" {
  const normalizedPlanId = normalizeValue(planId);
  return normalizedPlanId.includes("family") || normalizedPlanId.includes("household")
    ? "family"
    : "plus";
}

function isAnnualPackage(pkg: RevenueCatPackageLike) {
  const packageType = normalizeValue(pkg.packageType);
  if (packageType === "annual") return true;
  const period = normalizeValue(pkg.product.subscriptionPeriod);
  return period === "p1y";
}

function scoreTokenOverlap(planTokens: string[], valueTokens: string[]) {
  const tokenSet = new Set(valueTokens);
  return planTokens.reduce((score, token) => score + (tokenSet.has(token) ? 1 : 0), 0);
}

const REQUIRED_PLAN_TOKENS = new Set([
  "growth",
  "conservative",
  "plus",
  "family",
  "household",
  "school",
]);

function deriveRequiredPlanTokens(planTokens: string[]) {
  return planTokens.filter((token) => REQUIRED_PLAN_TOKENS.has(token));
}

/**
 * Resolve a package for a matrix plan ID with strict matching first and safe heuristics second.
 * Heuristics only run if exact id mapping is unavailable.
 */
export function findPackageForRevenueCatPlanId(
  offerings: RevenueCatOfferingsLike,
  planId: string,
): RevenueCatPackageLike | null {
  const normalizedPlanId = normalizeValue(planId);
  if (!normalizedPlanId) return null;

  const packages = offerings.current?.availablePackages ?? [];
  if (packages.length === 0) return null;

  const exact = packages.find((pkg) => {
    const packageId = normalizeValue(pkg.identifier);
    const productId = normalizeValue(pkg.product.identifier);
    return packageId === normalizedPlanId || productId === normalizedPlanId;
  });
  if (exact) return exact;

  const cadence = planCadence(planId);
  const familyMode = planFamilyMode(planId);
  const planTokens = tokenize(planId);
  const requiredPlanTokens = deriveRequiredPlanTokens(planTokens);

  const scored = packages
    .map((pkg) => {
      const packageId = normalizeValue(pkg.identifier);
      const productId = normalizeValue(pkg.product.identifier);
      const packageTokens = tokenize(packageId);
      const productTokens = tokenize(productId);
      const candidateTokenSet = new Set([...packageTokens, ...productTokens]);

      // Require distinctive plan tokens to be present before allowing heuristic fallback.
      // This prevents silent "near match" purchases when a package is missing in RevenueCat.
      if (
        requiredPlanTokens.length > 0
        && requiredPlanTokens.some((token) => !candidateTokenSet.has(token))
      ) {
        return {
          pkg,
          score: Number.NEGATIVE_INFINITY,
        };
      }

      const annual = isAnnualPackage(pkg);
      const candidateCadence = annual ? "annual" : "monthly";
      if (candidateCadence !== cadence) {
        return {
          pkg,
          score: Number.NEGATIVE_INFINITY,
        };
      }
      const cadenceScore = 10;

      const familyHints = ["family", "household"];
      const hasFamilyHint =
        familyHints.some((hint) => packageId.includes(hint))
        || familyHints.some((hint) => productId.includes(hint));
      const familyScore =
        familyMode === "family"
          ? hasFamilyHint
            ? 8
            : -4
          : hasFamilyHint
            ? -3
            : 3;

      const overlapScore =
        scoreTokenOverlap(planTokens, packageTokens)
        + scoreTokenOverlap(planTokens, productTokens);

      return {
        pkg,
        score: cadenceScore + familyScore + overlapScore,
      };
    })
    .filter((candidate) => Number.isFinite(candidate.score))
    .sort((left, right) => right.score - left.score);

  // Reject very weak matches to avoid mis-purchases.
  if (scored[0] && scored[0].score >= 6) {
    return scored[0].pkg;
  }

  return null;
}

export function findPackageForLanguagePlanId(
  offerings: RevenueCatOfferingsLike,
  planId: LanguagePlanId,
): RevenueCatPackageLike | null {
  return findPackageForRevenueCatPlanId(offerings, planId);
}

export function findTypedPackageForLanguagePlanId<TPackage extends RevenueCatPackageLike>(
  offerings: { current: { availablePackages: TPackage[] } | null },
  planId: LanguagePlanId,
): TPackage | null {
  const resolved = findPackageForRevenueCatPlanId(
    offerings as RevenueCatOfferingsLike,
    planId,
  );
  return (resolved as TPackage | null) ?? null;
}

export function formatRevenueCatPackageCadenceLabel(pkg: RevenueCatPackageLike) {
  if (isAnnualPackage(pkg)) {
    return `${pkg.product.priceString ?? ""}/year`;
  }
  return `${pkg.product.priceString ?? ""}/month`;
}
