import { NextResponse } from "next/server";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

type PartnerRow = {
  id: string;
  legal_name: string;
  country_code: string;
  contact_email: string | null;
};

type TaxProfileRow = {
  partner_id: string;
  tax_form_type: string;
  status: string;
  us_taxpayer: boolean;
};

type CommissionRow = {
  partner_id: string;
  gross_revenue_cents: number;
  withholding_tax_cents: number;
  net_amount_cents: number;
  currency: string;
  earned_at: string;
  paid_at: string | null;
};

function parseDate(value: string | null, fallback: string) {
  if (!value) return fallback;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return fallback;
  return date.toISOString().slice(0, 10);
}

export async function GET(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const { searchParams } = new URL(request.url);
  const periodStart = parseDate(searchParams.get("periodStart"), `${new Date().getUTCFullYear()}-01-01`);
  const periodEnd = parseDate(searchParams.get("periodEnd"), `${new Date().getUTCFullYear()}-12-31`);

  const admin = createSupabaseAdminClient();
  const [partnersResult, taxProfilesResult, commissionResult] = await Promise.all([
    admin.from("partners").select("id, legal_name, country_code, contact_email").limit(20000),
    admin
      .from("partner_tax_profiles")
      .select("partner_id, tax_form_type, status, us_taxpayer")
      .limit(20000),
    admin
      .from("partner_commission_events")
      .select("partner_id, gross_revenue_cents, withholding_tax_cents, net_amount_cents, currency, earned_at, paid_at")
      .gte("earned_at", `${periodStart}T00:00:00.000Z`)
      .lte("earned_at", `${periodEnd}T23:59:59.999Z`)
      .in("status", ["approved", "paid"])
      .limit(50000),
  ]);

  const error = partnersResult.error ?? taxProfilesResult.error ?? commissionResult.error;
  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to build filing queue." }, { status: 500 });
  }

  const partners = (partnersResult.data ?? []) as PartnerRow[];
  const taxProfilesByPartner = new Map<string, TaxProfileRow>();
  for (const profile of (taxProfilesResult.data ?? []) as TaxProfileRow[]) {
    taxProfilesByPartner.set(profile.partner_id, profile);
  }

  const commissionsByPartner = new Map<string, CommissionRow[]>();
  for (const commission of (commissionResult.data ?? []) as CommissionRow[]) {
    const existing = commissionsByPartner.get(commission.partner_id) ?? [];
    existing.push(commission);
    commissionsByPartner.set(commission.partner_id, existing);
  }

  const filingQueue = partners
    .map((partner) => {
      const taxProfile = taxProfilesByPartner.get(partner.id) ?? null;
      const commissions = commissionsByPartner.get(partner.id) ?? [];
      const grossRevenueCents = commissions.reduce((acc, row) => acc + Number(row.gross_revenue_cents ?? 0), 0);
      const withholdingTaxCents = commissions.reduce((acc, row) => acc + Number(row.withholding_tax_cents ?? 0), 0);
      const netPaidCents = commissions.reduce((acc, row) => acc + Number(row.net_amount_cents ?? 0), 0);
      const isUsTaxForm = taxProfile?.tax_form_type === "w9" || taxProfile?.us_taxpayer === true;
      const recommendedPrimaryForm = isUsTaxForm ? "1099-NEC (or 1099-MISC as applicable)" : "1042/1042-S";

      return {
        partnerId: partner.id,
        legalName: partner.legal_name,
        countryCode: partner.country_code,
        contactEmail: partner.contact_email,
        taxFormType: taxProfile?.tax_form_type ?? "none",
        taxProfileStatus: taxProfile?.status ?? "missing",
        recommendedPrimaryForm,
        grossRevenueCents,
        withholdingTaxCents,
        netPaidCents,
        commissionEventCount: commissions.length,
        periodStart,
        periodEnd,
      };
    })
    .filter((entry) => entry.commissionEventCount > 0)
    .sort((a, b) => b.grossRevenueCents - a.grossRevenueCents);

  return NextResponse.json({
    periodStart,
    periodEnd,
    filingQueue,
    summary: {
      partnerCount: filingQueue.length,
      grossRevenueCents: filingQueue.reduce((acc, row) => acc + row.grossRevenueCents, 0),
      withholdingTaxCents: filingQueue.reduce((acc, row) => acc + row.withholdingTaxCents, 0),
      netPaidCents: filingQueue.reduce((acc, row) => acc + row.netPaidCents, 0),
      requires1042sCount: filingQueue.filter((entry) => entry.recommendedPrimaryForm.startsWith("1042")).length,
      requires1099Count: filingQueue.filter((entry) => entry.recommendedPrimaryForm.startsWith("1099")).length,
    },
  });
}
