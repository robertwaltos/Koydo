import type { PartnerTaxProfileRow } from "@/lib/partners/program";

export type PartnerJurisdictionRuleRow = {
  id: string;
  country_code: string;
  jurisdiction_name: string;
  allow_engagement: boolean;
  allow_payouts: boolean;
  requires_manual_review: boolean;
  requires_w8: boolean;
  default_withholding_rate: number;
  sanctions_program: string | null;
  sanctions_basis: string | null;
};

const UKRAINE_COVERED_REGION_PATTERNS = [
  "crimea",
  "sevastopol",
  "donetsk",
  "luhansk",
];

export type PartnerWithholdingDeterminationRow = {
  partner_id: string;
  country_code: string;
  us_source_income: boolean;
  treaty_claimed: boolean;
  determination_status: "pending" | "approved" | "rejected" | "expired";
  approved_withholding_rate: number | null;
  effective_start: string | null;
  effective_end: string | null;
};

export type WithholdingResolution = {
  rate: number;
  source: "determination" | "tax_profile" | "jurisdiction_default" | "fallback";
  requiresManualReview: boolean;
  reasons: string[];
};

function clampRate(value: number | null | undefined, fallback = 0) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return fallback;
  return Math.max(0, Math.min(1, numeric));
}

function isDeterminationInWindow(determination: PartnerWithholdingDeterminationRow, nowDate: string) {
  if (determination.effective_start && nowDate < determination.effective_start) return false;
  if (determination.effective_end && nowDate > determination.effective_end) return false;
  return true;
}

export function resolvePartnerWithholdingRate(input: {
  nowIso?: string;
  countryCode: string;
  taxProfile: PartnerTaxProfileRow | null;
  jurisdictionRule: PartnerJurisdictionRuleRow | null;
  determination: PartnerWithholdingDeterminationRow | null;
}) {
  const nowDate = (input.nowIso ?? new Date().toISOString()).slice(0, 10);
  const reasons: string[] = [];
  const countryCode = input.countryCode.toUpperCase();
  const isForeign = countryCode !== "US";

  if (input.determination && input.determination.determination_status === "approved") {
    if (isDeterminationInWindow(input.determination, nowDate)) {
      return {
        rate: clampRate(input.determination.approved_withholding_rate, 0),
        source: "determination" as const,
        requiresManualReview: false,
        reasons,
      };
    }
    reasons.push("Approved withholding determination is outside its effective period.");
  }

  if (input.taxProfile && input.taxProfile.status === "valid") {
    return {
      rate: clampRate(input.taxProfile.withholding_rate, 0),
      source: "tax_profile" as const,
      requiresManualReview: false,
      reasons,
    };
  }

  if (input.jurisdictionRule) {
    if (input.jurisdictionRule.requires_manual_review) {
      reasons.push("Jurisdiction rule requires manual review before payouts.");
    }
    return {
      rate: clampRate(input.jurisdictionRule.default_withholding_rate, isForeign ? 0.3 : 0),
      source: "jurisdiction_default" as const,
      requiresManualReview: input.jurisdictionRule.requires_manual_review,
      reasons,
    };
  }

  if (isForeign) {
    reasons.push("No jurisdiction rule found for foreign partner country; fallback withholding applied.");
    return {
      rate: 0.3,
      source: "fallback" as const,
      requiresManualReview: true,
      reasons,
    };
  }

  return {
    rate: 0,
    source: "fallback" as const,
    requiresManualReview: false,
    reasons,
  };
}

export function requiresForeignTaxDocumentation(params: {
  countryCode: string;
  jurisdictionRule: PartnerJurisdictionRuleRow | null;
}) {
  const countryCode = params.countryCode.toUpperCase();
  if (countryCode === "US") return false;
  if (!params.jurisdictionRule) return true;
  return params.jurisdictionRule.requires_w8;
}

export function isCoveredRegionRestricted(params: {
  countryCode: string;
  stateRegion?: string | null;
}) {
  const countryCode = params.countryCode.toUpperCase();
  if (countryCode !== "UA") return false;
  const normalized = String(params.stateRegion ?? "").trim().toLowerCase();
  if (!normalized) return false;
  return UKRAINE_COVERED_REGION_PATTERNS.some((pattern) => normalized.includes(pattern));
}
