export const PARTNER_TAX_FORM_TYPES = [
  "w9",
  "w8_ben",
  "w8_ben_e",
  "w8_eci",
  "w8_imy",
  "none",
  "other",
] as const;

export type PartnerTaxFormType = (typeof PARTNER_TAX_FORM_TYPES)[number];

export type PartnerTaxProfileRow = {
  partner_id: string;
  tax_form_type: PartnerTaxFormType;
  us_taxpayer: boolean;
  backup_withholding_required: boolean;
  withholding_rate: number;
  form_expiration_date: string | null;
  status: "pending" | "valid" | "expired" | "rejected";
};

export type PartnerPayoutAccountRow = {
  id: string;
  partner_id: string;
  verification_status: "pending" | "verified" | "failed" | "rejected";
  is_primary: boolean;
  currency?: string | null;
  country_code?: string | null;
};

export type PartnerComplianceSnapshot = {
  partnerId: string;
  countryCode?: string;
  onboardingStatus: string;
  complianceStatus: string;
  payoutStatus: string;
  kycStatus: string;
  taxProfileStatus: "pending" | "valid" | "expired" | "rejected" | "missing";
  taxFormType: PartnerTaxFormType | "missing";
  withholdingRate: number;
  payoutAccountVerified: boolean;
  jurisdictionAllowsEngagement?: boolean;
  jurisdictionAllowsPayouts?: boolean;
  requiresManualReview?: boolean;
  withholdingDeterminationStatus?: "pending" | "approved" | "rejected" | "expired" | "missing";
};

export type PartnerPayoutEligibility = {
  eligible: boolean;
  reasons: string[];
};

export function normalizePartnerCode(value: string): string {
  return value.trim().toUpperCase();
}

export function isPartnerTaxProfileCurrentlyValid(
  profile: PartnerTaxProfileRow | null,
  nowIso = new Date().toISOString(),
): boolean {
  if (!profile) return false;
  if (profile.status !== "valid") return false;
  if (profile.tax_form_type === "none") return false;
  if (profile.form_expiration_date) {
    const nowDate = nowIso.slice(0, 10);
    if (profile.form_expiration_date < nowDate) {
      return false;
    }
  }
  return true;
}

export function derivePartnerTaxStatus(
  profile: PartnerTaxProfileRow | null,
  nowIso = new Date().toISOString(),
): PartnerComplianceSnapshot["taxProfileStatus"] {
  if (!profile) return "missing";
  if (profile.status === "rejected") return "rejected";
  if (profile.status === "expired") return "expired";
  if (!isPartnerTaxProfileCurrentlyValid(profile, nowIso)) return "pending";
  return "valid";
}

export function pickPrimaryVerifiedPayoutAccount(
  accounts: PartnerPayoutAccountRow[],
): PartnerPayoutAccountRow | null {
  if (accounts.length === 0) return null;
  const verifiedPrimary = accounts.find(
    (entry) => entry.is_primary && entry.verification_status === "verified",
  );
  if (verifiedPrimary) return verifiedPrimary;
  const verified = accounts.find((entry) => entry.verification_status === "verified");
  if (verified) return verified;
  const primary = accounts.find((entry) => entry.is_primary);
  return primary ?? accounts[0] ?? null;
}

export function evaluatePartnerPayoutEligibility(snapshot: PartnerComplianceSnapshot): PartnerPayoutEligibility {
  const reasons: string[] = [];
  if (snapshot.jurisdictionAllowsEngagement === false) {
    reasons.push("Jurisdiction policy does not allow business engagement.");
  }
  if (snapshot.jurisdictionAllowsPayouts === false) {
    reasons.push("Jurisdiction policy does not allow payouts.");
  }
  if (snapshot.taxProfileStatus !== "valid") {
    reasons.push("Tax profile is not valid.");
  }
  if (!snapshot.payoutAccountVerified) {
    reasons.push("No verified payout account is configured.");
  }
  if (snapshot.payoutStatus !== "eligible") {
    reasons.push("Partner payout status is not eligible.");
  }
  if (snapshot.complianceStatus !== "approved") {
    reasons.push("Partner compliance status is not approved.");
  }
  if (snapshot.kycStatus !== "verified") {
    reasons.push("KYC status is not verified.");
  }
  if (snapshot.requiresManualReview) {
    if (snapshot.withholdingDeterminationStatus !== "approved") {
      reasons.push("Manual review is required before payouts.");
    }
  }
  return { eligible: reasons.length === 0, reasons };
}

export function computeCommissionAmounts(input: {
  grossRevenueCents: number;
  commissionRate: number;
  bonusCents?: number;
  withholdingRate?: number;
}) {
  const grossRevenueCents = Math.max(0, Math.trunc(input.grossRevenueCents));
  const commissionRate = Math.max(0, Math.min(1, Number(input.commissionRate) || 0));
  const bonusCents = Math.max(0, Math.trunc(input.bonusCents ?? 0));
  const withholdingRate = Math.max(0, Math.min(1, Number(input.withholdingRate ?? 0)));

  const commissionAmountCents = Math.max(0, Math.round(grossRevenueCents * commissionRate));
  const grossPayoutCents = commissionAmountCents + bonusCents;
  const withholdingTaxCents = Math.max(0, Math.round(grossPayoutCents * withholdingRate));
  const netAmountCents = Math.max(0, grossPayoutCents - withholdingTaxCents);

  return {
    commissionAmountCents,
    bonusAmountCents: bonusCents,
    withholdingTaxCents,
    netAmountCents,
  };
}
