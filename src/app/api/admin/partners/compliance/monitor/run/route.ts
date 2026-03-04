import { NextResponse } from "next/server";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/admin/audit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import {
  isCoveredRegionRestricted,
  requiresForeignTaxDocumentation,
  type PartnerJurisdictionRuleRow,
  type PartnerWithholdingDeterminationRow,
} from "@/lib/partners/compliance";
import { derivePartnerTaxStatus, type PartnerTaxProfileRow } from "@/lib/partners/program";

type PartnerRow = {
  id: string;
  legal_name: string;
  country_code: string;
  state_region: string | null;
  onboarding_status: string;
  compliance_status: string;
  payout_status: string;
  kyc_status: string;
};

type PayoutAccountRow = {
  partner_id: string;
  verification_status: string;
  is_primary: boolean;
};

type AlertCandidate = {
  partner_id: string;
  alert_type:
    | "sanctions_jurisdiction"
    | "tax_form_expired"
    | "tax_form_missing"
    | "withholding_determination_missing"
    | "payout_account_unverified"
    | "kyc_not_verified"
    | "compliance_not_approved"
    | "manual_review_required";
  severity: "info" | "warning" | "critical";
  title: string;
  message: string;
  metadata: Record<string, unknown>;
};

export async function POST() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const admin = createSupabaseAdminClient();
  const [partnersResult, taxResult, payoutResult, rulesResult, determinationsResult] = await Promise.all([
    admin
      .from("partners")
      .select("id, legal_name, country_code, state_region, onboarding_status, compliance_status, payout_status, kyc_status")
      .order("updated_at", { ascending: false })
      .limit(20000),
    admin
      .from("partner_tax_profiles")
      .select("partner_id, tax_form_type, us_taxpayer, backup_withholding_required, withholding_rate, form_expiration_date, status"),
    admin
      .from("partner_payout_accounts")
      .select("partner_id, verification_status, is_primary"),
    admin
      .from("partner_jurisdiction_rules")
      .select(
        "id, country_code, jurisdiction_name, allow_engagement, allow_payouts, requires_manual_review, requires_w8, default_withholding_rate, sanctions_program, sanctions_basis",
      ),
    admin
      .from("partner_withholding_determinations")
      .select(
        "partner_id, country_code, us_source_income, treaty_claimed, determination_status, approved_withholding_rate, effective_start, effective_end",
      ),
  ]);

  const error =
    partnersResult.error ??
    taxResult.error ??
    payoutResult.error ??
    rulesResult.error ??
    determinationsResult.error;
  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to run partner compliance monitor." }, { status: 500 });
  }

  const partners = (partnersResult.data ?? []) as PartnerRow[];
  const taxByPartnerId = new Map<string, PartnerTaxProfileRow>();
  for (const row of (taxResult.data ?? []) as PartnerTaxProfileRow[]) {
    taxByPartnerId.set(row.partner_id, row);
  }
  const payoutByPartnerId = new Map<string, PayoutAccountRow[]>();
  for (const row of (payoutResult.data ?? []) as PayoutAccountRow[]) {
    const list = payoutByPartnerId.get(row.partner_id) ?? [];
    list.push(row);
    payoutByPartnerId.set(row.partner_id, list);
  }
  const ruleByCountry = new Map<string, PartnerJurisdictionRuleRow>();
  for (const row of (rulesResult.data ?? []) as PartnerJurisdictionRuleRow[]) {
    ruleByCountry.set(row.country_code.toUpperCase(), row);
  }
  const determinationByPartner = new Map<string, PartnerWithholdingDeterminationRow>();
  for (const row of (determinationsResult.data ?? []) as PartnerWithholdingDeterminationRow[]) {
    determinationByPartner.set(row.partner_id, row);
  }

  const nowIso = new Date().toISOString();
  const nowDate = nowIso.slice(0, 10);
  const warningDate = new Date();
  warningDate.setUTCDate(warningDate.getUTCDate() + 30);
  const warningDateText = warningDate.toISOString().slice(0, 10);

  const alertCandidates: AlertCandidate[] = [];
  const screeningInserts: Array<Record<string, unknown>> = [];
  for (const partner of partners) {
    const countryCode = (partner.country_code || "US").toUpperCase();
    const rule = ruleByCountry.get(countryCode) ?? null;
    const taxProfile = taxByPartnerId.get(partner.id) ?? null;
    const taxStatus = derivePartnerTaxStatus(taxProfile, nowIso);
    const determination = determinationByPartner.get(partner.id) ?? null;
    const payoutAccounts = payoutByPartnerId.get(partner.id) ?? [];
    const hasVerifiedPayout = payoutAccounts.some((entry) => entry.verification_status === "verified");
    const requiresW8 = requiresForeignTaxDocumentation({ countryCode, jurisdictionRule: rule });
    const coveredRegionBlocked = isCoveredRegionRestricted({
      countryCode,
      stateRegion: partner.state_region,
    });

    const screeningResult =
      coveredRegionBlocked
        ? "prohibited"
        : rule && (!rule.allow_engagement || !rule.allow_payouts)
        ? "prohibited"
        : rule?.requires_manual_review
          ? "manual_review"
          : "clear";

    screeningInserts.push({
      partner_id: partner.id,
      country_code: countryCode,
      screening_result: screeningResult,
      matched_rule_id: rule?.id ?? null,
      screening_source: "ofac_jurisdiction_rules",
      screening_reference: null,
      details:
        screeningResult === "prohibited"
          ? `Jurisdiction policy blocks engagement/payouts. sanctions_program=${rule?.sanctions_program ?? "none"}`
          : screeningResult === "manual_review"
            ? "Country policy requires manual review."
            : "No jurisdiction-level prohibition detected.",
      metadata: {
        sanctionsProgram: rule?.sanctions_program ?? null,
        sanctionsBasis: rule?.sanctions_basis ?? null,
        coveredRegionBlocked,
        stateRegion: partner.state_region ?? null,
      },
      screened_at: nowIso,
      screened_by: auth.userId,
    });

    if (screeningResult === "prohibited") {
      alertCandidates.push({
        partner_id: partner.id,
        alert_type: "sanctions_jurisdiction",
        severity: "critical",
        title: `Sanctions/blocked jurisdiction for ${partner.legal_name}`,
        message: `Partner country ${countryCode} is configured as blocked for engagement or payouts.`,
        metadata: {
          countryCode,
          stateRegion: partner.state_region ?? null,
          coveredRegionBlocked,
          sanctionsProgram: rule?.sanctions_program ?? null,
          sanctionsBasis: rule?.sanctions_basis ?? null,
        },
      });
    }

    if (rule?.requires_manual_review && (!determination || determination.determination_status !== "approved")) {
      alertCandidates.push({
        partner_id: partner.id,
        alert_type: "manual_review_required",
        severity: "critical",
        title: `Manual review required for ${partner.legal_name}`,
        message: "Jurisdiction requires manual review and no approved withholding determination exists.",
        metadata: { countryCode },
      });
    }

    if (requiresW8 && taxStatus !== "valid") {
      alertCandidates.push({
        partner_id: partner.id,
        alert_type: "tax_form_missing",
        severity: "critical",
        title: `Valid tax form missing for ${partner.legal_name}`,
        message: `Foreign partner (${countryCode}) requires valid W-8 documentation before payout.`,
        metadata: { countryCode, taxStatus, taxFormType: taxProfile?.tax_form_type ?? null },
      });
    }

    if (taxProfile?.form_expiration_date && taxProfile.form_expiration_date <= warningDateText) {
      alertCandidates.push({
        partner_id: partner.id,
        alert_type: "tax_form_expired",
        severity: taxProfile.form_expiration_date < nowDate ? "critical" : "warning",
        title: `Tax form expiry for ${partner.legal_name}`,
        message:
          taxProfile.form_expiration_date < nowDate
            ? `Tax form expired on ${taxProfile.form_expiration_date}.`
            : `Tax form will expire on ${taxProfile.form_expiration_date}.`,
        metadata: { expirationDate: taxProfile.form_expiration_date },
      });
    }

    if (!hasVerifiedPayout) {
      alertCandidates.push({
        partner_id: partner.id,
        alert_type: "payout_account_unverified",
        severity: "warning",
        title: `No verified payout account for ${partner.legal_name}`,
        message: "Partner has no verified payout account configured.",
        metadata: { countryCode },
      });
    }

    if (partner.kyc_status !== "verified") {
      alertCandidates.push({
        partner_id: partner.id,
        alert_type: "kyc_not_verified",
        severity: "warning",
        title: `KYC not verified for ${partner.legal_name}`,
        message: `Current KYC status is ${partner.kyc_status}.`,
        metadata: { kycStatus: partner.kyc_status },
      });
    }

    if (partner.compliance_status !== "approved") {
      alertCandidates.push({
        partner_id: partner.id,
        alert_type: "compliance_not_approved",
        severity: "warning",
        title: `Compliance not approved for ${partner.legal_name}`,
        message: `Current compliance status is ${partner.compliance_status}.`,
        metadata: { complianceStatus: partner.compliance_status },
      });
    }
  }

  const { error: screeningError } = await admin.from("partner_sanctions_screenings").insert(screeningInserts);
  if (screeningError) {
    console.error("Failed to write partner sanctions screenings.", toSafeErrorRecord(screeningError));
  }

  let openAlertCount = 0;
  for (const alert of alertCandidates) {
    const { error: alertError } = await admin
      .from("partner_compliance_alerts")
      .upsert(
        {
          partner_id: alert.partner_id,
          alert_type: alert.alert_type,
          severity: alert.severity,
          alert_status: "open",
          title: alert.title,
          message: alert.message,
          last_raised_at: nowIso,
          metadata: alert.metadata,
        },
        { onConflict: "partner_id,alert_type" },
      );
    if (alertError) {
      console.error("Failed to upsert partner compliance alert.", toSafeErrorRecord(alertError));
      continue;
    }
    openAlertCount += 1;
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "partner_compliance_monitor_run",
    metadata: {
      partnerCount: partners.length,
      screeningCount: screeningInserts.length,
      openAlertCount,
      alertCandidateCount: alertCandidates.length,
    },
  });

  return NextResponse.json({
    success: true,
    summary: {
      partnerCount: partners.length,
      screeningCount: screeningInserts.length,
      alertCandidateCount: alertCandidates.length,
      openAlertCount,
    },
  });
}
