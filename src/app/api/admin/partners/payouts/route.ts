import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { logAdminAction } from "@/lib/admin/audit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import {
  derivePartnerTaxStatus,
  evaluatePartnerPayoutEligibility,
  pickPrimaryVerifiedPayoutAccount,
  type PartnerComplianceSnapshot,
  type PartnerPayoutAccountRow,
  type PartnerTaxProfileRow,
} from "@/lib/partners/program";
import {
  isCoveredRegionRestricted,
  requiresForeignTaxDocumentation,
  resolvePartnerWithholdingRate,
  type PartnerJurisdictionRuleRow,
  type PartnerWithholdingDeterminationRow,
} from "@/lib/partners/compliance";

const createBatchSchema = z.object({
  batchName: z.string().trim().min(3).max(180),
  periodStart: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  periodEnd: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  partnerId: z.string().uuid().optional().nullable(),
  currency: z.string().length(3).default("USD"),
  notes: z.string().trim().max(5000).optional().nullable(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

type PartnerStatusRow = {
  id: string;
  country_code: string;
  state_region: string | null;
  onboarding_status: string;
  compliance_status: string;
  payout_status: string;
  kyc_status: string;
};

export async function GET(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const { searchParams } = new URL(request.url);
  const batchId = searchParams.get("batchId");

  const admin = createSupabaseAdminClient();
  if (batchId) {
    const [batchResult, itemsResult] = await Promise.all([
      admin
        .from("partner_payout_batches")
        .select(
          "id, batch_name, period_start, period_end, status, scheduled_for, processed_at, currency, total_amount_cents, item_count, notes, metadata, created_at, updated_at",
        )
        .eq("id", batchId)
        .maybeSingle(),
      admin
        .from("partner_payout_items")
        .select(
          "id, payout_batch_id, partner_id, partner_payout_account_id, tax_profile_status, compliance_snapshot, gross_amount_cents, withholding_tax_cents, net_amount_cents, item_status, payment_reference, paid_at, error_message, metadata, created_at, updated_at",
        )
        .eq("payout_batch_id", batchId)
        .order("created_at", { ascending: false })
        .limit(5000),
    ]);

    const error = batchResult.error ?? itemsResult.error;
    if (error) {
      console.error("Unexpected API error.", toSafeErrorRecord(error));
      return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }
    if (!batchResult.data) {
      return NextResponse.json({ error: "Payout batch not found." }, { status: 404 });
    }

    return NextResponse.json({
      batch: batchResult.data,
      items: itemsResult.data ?? [],
    });
  }

  const { data, error } = await admin
    .from("partner_payout_batches")
    .select(
      "id, batch_name, period_start, period_end, status, scheduled_for, processed_at, currency, total_amount_cents, item_count, notes, metadata, created_at, updated_at",
    )
    .order("created_at", { ascending: false })
    .limit(500);
  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
  return NextResponse.json({ batches: data ?? [] });
}

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const body = await request.json().catch(() => null);
  const parsed = createBatchSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  const admin = createSupabaseAdminClient();
  const batchCurrency = parsed.data.currency.toUpperCase();
  let eventsQuery = admin
    .from("partner_commission_events")
    .select(
      "id, partner_id, net_amount_cents, commission_amount_cents, bonus_amount_cents, withholding_tax_cents, status, available_at, currency",
    )
    .eq("status", "approved")
    .eq("currency", batchCurrency)
    .is("payout_item_id", null)
    .lte("available_at", `${parsed.data.periodEnd}T23:59:59.999Z`);

  if (parsed.data.partnerId) {
    eventsQuery = eventsQuery.eq("partner_id", parsed.data.partnerId);
  }
  const { data: commissionEvents, error: eventsError } = await eventsQuery.limit(10000);
  if (eventsError) {
    console.error("Unexpected API error.", toSafeErrorRecord(eventsError));
    return NextResponse.json({ error: "Failed to load commission events." }, { status: 500 });
  }
  if (!commissionEvents || commissionEvents.length === 0) {
    return NextResponse.json(
      { error: `No approved ${batchCurrency} commission events are eligible for this period.` },
      { status: 400 },
    );
  }

  const partnerIds = Array.from(new Set(commissionEvents.map((entry) => entry.partner_id)));
  const [partnersResult, taxResult, payoutAccountResult] = await Promise.all([
    admin
      .from("partners")
      .select("id, country_code, state_region, onboarding_status, compliance_status, payout_status, kyc_status")
      .in("id", partnerIds),
    admin
      .from("partner_tax_profiles")
      .select("partner_id, tax_form_type, us_taxpayer, backup_withholding_required, withholding_rate, form_expiration_date, status")
      .in("partner_id", partnerIds),
    admin
      .from("partner_payout_accounts")
      .select("id, partner_id, verification_status, is_primary, currency, country_code")
      .in("partner_id", partnerIds),
  ]);

  const joinError = partnersResult.error ?? taxResult.error ?? payoutAccountResult.error;
  if (joinError) {
    console.error("Unexpected API error.", toSafeErrorRecord(joinError));
    return NextResponse.json({ error: "Failed to resolve partner compliance state." }, { status: 500 });
  }

  const partnerById = new Map<string, PartnerStatusRow>();
  for (const partner of (partnersResult.data ?? []) as PartnerStatusRow[]) {
    partnerById.set(partner.id, partner);
  }
  const taxByPartnerId = new Map<string, PartnerTaxProfileRow>();
  for (const profile of (taxResult.data ?? []) as PartnerTaxProfileRow[]) {
    taxByPartnerId.set(profile.partner_id, profile);
  }
  const payoutAccountsByPartner = new Map<string, PartnerPayoutAccountRow[]>();
  for (const account of (payoutAccountResult.data ?? []) as PartnerPayoutAccountRow[]) {
    const existing = payoutAccountsByPartner.get(account.partner_id) ?? [];
    existing.push(account);
    payoutAccountsByPartner.set(account.partner_id, existing);
  }

  const countryCodes = Array.from(
    new Set(
      ((partnersResult.data ?? []) as PartnerStatusRow[])
        .map((partner) => partner.country_code?.toUpperCase())
        .filter((value): value is string => Boolean(value)),
    ),
  );

  const [jurisdictionResult, determinationsResult] = await Promise.all([
    countryCodes.length
      ? admin
          .from("partner_jurisdiction_rules")
          .select(
            "id, country_code, jurisdiction_name, allow_engagement, allow_payouts, requires_manual_review, requires_w8, default_withholding_rate, sanctions_program, sanctions_basis",
          )
          .in("country_code", countryCodes)
      : Promise.resolve({ data: [], error: null }),
    admin
      .from("partner_withholding_determinations")
      .select(
        "partner_id, country_code, us_source_income, treaty_claimed, determination_status, approved_withholding_rate, effective_start, effective_end",
      )
      .in("partner_id", partnerIds),
  ]);

  const complianceError = jurisdictionResult.error ?? determinationsResult.error;
  if (complianceError) {
    console.error("Unexpected API error.", toSafeErrorRecord(complianceError));
    return NextResponse.json({ error: "Failed to load international compliance controls." }, { status: 500 });
  }

  const jurisdictionByCountryCode = new Map<string, PartnerJurisdictionRuleRow>();
  for (const rule of (jurisdictionResult.data ?? []) as PartnerJurisdictionRuleRow[]) {
    jurisdictionByCountryCode.set(rule.country_code.toUpperCase(), rule);
  }
  const determinationByPartnerId = new Map<string, PartnerWithholdingDeterminationRow>();
  for (const determination of (determinationsResult.data ?? []) as PartnerWithholdingDeterminationRow[]) {
    determinationByPartnerId.set(determination.partner_id, determination);
  }

  const byPartner = new Map<string, typeof commissionEvents>();
  for (const event of commissionEvents) {
    if (!byPartner.has(event.partner_id)) byPartner.set(event.partner_id, []);
    byPartner.get(event.partner_id)!.push(event);
  }

  const nowIso = new Date().toISOString();
  const payoutItemInserts: Array<Record<string, unknown>> = [];
  const partnerEventIdsEligible = new Map<string, string[]>();
  let batchGross = 0;
  let batchNet = 0;

  for (const [partnerId, events] of byPartner.entries()) {
    const partner = partnerById.get(partnerId);
    if (!partner) continue;
    const taxProfile = taxByPartnerId.get(partnerId) ?? null;
    const taxStatus = derivePartnerTaxStatus(taxProfile, nowIso);
    const countryCode = (partner.country_code ?? "US").toUpperCase();
    const coveredRegionBlocked = isCoveredRegionRestricted({
      countryCode,
      stateRegion: partner.state_region,
    });
    const jurisdictionRule = jurisdictionByCountryCode.get(countryCode) ?? null;
    const determination = determinationByPartnerId.get(partnerId) ?? null;
    const withholdingResolution = resolvePartnerWithholdingRate({
      nowIso,
      countryCode,
      taxProfile,
      jurisdictionRule,
      determination,
    });
    const requiresForeignDocs = requiresForeignTaxDocumentation({
      countryCode,
      jurisdictionRule,
    });
    const payoutAccounts = payoutAccountsByPartner.get(partnerId) ?? [];
    const payoutAccountsForCurrency = payoutAccounts.filter(
      (account) => String(account.currency ?? "").toUpperCase() === batchCurrency,
    );
    const selectedPayoutAccount = pickPrimaryVerifiedPayoutAccount(
      payoutAccountsForCurrency.length > 0 ? payoutAccountsForCurrency : payoutAccounts,
    );
    const payoutAccountCurrencyMatches =
      Boolean(selectedPayoutAccount) &&
      String(selectedPayoutAccount?.currency ?? "").toUpperCase() === batchCurrency;
    const effectiveTaxStatus =
      requiresForeignDocs && countryCode !== "US" && taxStatus === "valid" && taxProfile?.tax_form_type === "w9"
        ? "pending"
        : taxStatus;
    const snapshot: PartnerComplianceSnapshot = {
      partnerId,
      countryCode,
      onboardingStatus: partner.onboarding_status,
      complianceStatus: partner.compliance_status,
      payoutStatus: partner.payout_status,
      kycStatus: partner.kyc_status,
      taxProfileStatus: effectiveTaxStatus,
      taxFormType: taxProfile?.tax_form_type ?? "missing",
      withholdingRate: withholdingResolution.rate,
      payoutAccountVerified:
        selectedPayoutAccount?.verification_status === "verified" && payoutAccountCurrencyMatches,
      jurisdictionAllowsEngagement: jurisdictionRule?.allow_engagement ?? true,
      jurisdictionAllowsPayouts: coveredRegionBlocked
        ? false
        : (jurisdictionRule?.allow_payouts ?? true),
      requiresManualReview: withholdingResolution.requiresManualReview,
      withholdingDeterminationStatus: determination?.determination_status ?? "missing",
    };
    const eligibility = evaluatePartnerPayoutEligibility(snapshot);

    const grossAmountCents = events.reduce((acc, row) => acc + Number(row.commission_amount_cents ?? 0) + Number(row.bonus_amount_cents ?? 0), 0);
    const withholdingTaxCents = events.reduce((acc, row) => acc + Number(row.withholding_tax_cents ?? 0), 0);
    const netAmountCents = events.reduce((acc, row) => acc + Number(row.net_amount_cents ?? 0), 0);

    payoutItemInserts.push({
      partner_id: partnerId,
      partner_payout_account_id: payoutAccountCurrencyMatches ? selectedPayoutAccount?.id ?? null : null,
      tax_profile_status: effectiveTaxStatus,
      compliance_snapshot: {
        ...snapshot,
        withholdingSource: withholdingResolution.source,
        withholdingReasons: withholdingResolution.reasons,
        sanctionsProgram: jurisdictionRule?.sanctions_program ?? null,
        sanctionsBasis: jurisdictionRule?.sanctions_basis ?? null,
        payoutAccountCurrency: selectedPayoutAccount?.currency ?? null,
        payoutAccountCountryCode: selectedPayoutAccount?.country_code ?? null,
        payoutAccountCurrencyMatchesBatch: payoutAccountCurrencyMatches,
        coveredRegionBlocked,
        stateRegion: partner.state_region ?? null,
        eligibility,
      },
      gross_amount_cents: grossAmountCents,
      withholding_tax_cents: withholdingTaxCents,
      net_amount_cents: netAmountCents,
      item_status: eligibility.eligible ? "queued" : "blocked",
      error_message: eligibility.eligible ? null : eligibility.reasons.join(" "),
      metadata: {
        source: "partner_payout_batch_build",
        eventCount: events.length,
      },
    });

    if (eligibility.eligible) {
      batchGross += grossAmountCents;
      batchNet += netAmountCents;
      partnerEventIdsEligible.set(partnerId, events.map((event) => event.id));
    }
  }

  const { data: batch, error: batchError } = await admin
    .from("partner_payout_batches")
    .insert({
      batch_name: parsed.data.batchName,
      period_start: parsed.data.periodStart,
      period_end: parsed.data.periodEnd,
      status: "draft",
      currency: batchCurrency,
      total_amount_cents: batchNet,
      item_count: payoutItemInserts.length,
      notes: parsed.data.notes?.trim() || null,
      metadata: parsed.data.metadata ?? {},
      created_by: auth.userId,
    })
    .select("id, batch_name, period_start, period_end, status, currency, total_amount_cents, item_count, created_at")
    .single();
  if (batchError) {
    console.error("Unexpected API error.", toSafeErrorRecord(batchError));
    return NextResponse.json({ error: "Failed to create payout batch." }, { status: 500 });
  }

  const { data: payoutItems, error: payoutItemsError } = await admin
    .from("partner_payout_items")
    .insert(
      payoutItemInserts.map((entry) => ({
        ...entry,
        payout_batch_id: batch.id,
      })),
    )
    .select("id, partner_id, item_status");
  if (payoutItemsError) {
    console.error("Unexpected API error.", toSafeErrorRecord(payoutItemsError));
    return NextResponse.json({ error: "Failed to create payout items." }, { status: 500 });
  }

  const itemIdByPartnerId = new Map((payoutItems ?? []).map((item) => [item.partner_id, item.id]));
  for (const [partnerId, eventIds] of partnerEventIdsEligible.entries()) {
    const payoutItemId = itemIdByPartnerId.get(partnerId);
    if (!payoutItemId) continue;
    const { error: linkError } = await admin
      .from("partner_commission_events")
      .update({ payout_item_id: payoutItemId })
      .in("id", eventIds);
    if (linkError) {
      console.error("Failed to link commission events to payout item.", toSafeErrorRecord(linkError));
    }
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "partner_payout_batch_create",
    metadata: {
      payoutBatchId: batch.id,
      itemCount: payoutItemInserts.length,
      grossAmountCents: batchGross,
      netAmountCents: batchNet,
      blockedItemCount: (payoutItems ?? []).filter((item) => item.item_status === "blocked").length,
    },
  });

  return NextResponse.json({
    success: true,
    batch,
    summary: {
      payoutItemCount: payoutItemInserts.length,
      totalGrossAmountCents: batchGross,
      totalNetAmountCents: batchNet,
      blockedItemCount: (payoutItems ?? []).filter((item) => item.item_status === "blocked").length,
    },
  });
}
