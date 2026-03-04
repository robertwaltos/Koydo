import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { logAdminAction } from "@/lib/admin/audit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { computeCommissionAmounts, type PartnerTaxProfileRow } from "@/lib/partners/program";
import {
  resolvePartnerWithholdingRate,
  type PartnerJurisdictionRuleRow,
  type PartnerWithholdingDeterminationRow,
} from "@/lib/partners/compliance";

const createCommissionSchema = z.object({
  partnerId: z.string().uuid(),
  referralId: z.string().uuid().optional().nullable(),
  partnerCodeId: z.string().uuid().optional().nullable(),
  eventType: z.enum(["conversion_commission", "manual_adjustment", "bonus", "reversal"]).default("conversion_commission"),
  status: z.enum(["pending", "approved", "held", "reversed", "paid", "canceled"]).default("approved"),
  sourceEventRef: z.string().trim().max(160).optional().nullable(),
  grossRevenueCents: z.number().int().min(0),
  commissionRate: z.number().min(0).max(1).optional().nullable(),
  bonusAmountCents: z.number().int().min(0).optional().nullable(),
  withholdingRate: z.number().min(0).max(1).optional().nullable(),
  currency: z.string().length(3).default("USD"),
  earnedAtIso: z.string().datetime().optional().nullable(),
  availableAtIso: z.string().datetime().optional().nullable(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export async function GET(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const { searchParams } = new URL(request.url);
  const partnerId = searchParams.get("partnerId");
  const status = searchParams.get("status");

  const admin = createSupabaseAdminClient();
  let query = admin
    .from("partner_commission_events")
    .select(
      "id, partner_id, referral_id, partner_code_id, event_type, status, source_event_ref, gross_revenue_cents, commission_rate, commission_amount_cents, bonus_amount_cents, withholding_tax_cents, net_amount_cents, currency, earned_at, available_at, approved_at, paid_at, metadata, created_at, updated_at",
    )
    .order("earned_at", { ascending: false })
    .limit(5000);
  if (partnerId) query = query.eq("partner_id", partnerId);
  if (status) query = query.eq("status", status);

  const { data, error } = await query;
  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  return NextResponse.json({ commissionEvents: data ?? [] });
}

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const body = await request.json().catch(() => null);
  const parsed = createCommissionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  const admin = createSupabaseAdminClient();

  const { data: partner, error: partnerError } = await admin
    .from("partners")
    .select("id, reward_tier_id, country_code")
    .eq("id", parsed.data.partnerId)
    .maybeSingle();
  if (partnerError) {
    console.error("Unexpected API error.", toSafeErrorRecord(partnerError));
    return NextResponse.json({ error: "Failed to load partner." }, { status: 500 });
  }
  if (!partner) {
    return NextResponse.json({ error: "Partner not found." }, { status: 404 });
  }

  let defaultCommissionRate = 0;
  let defaultBonusCents = 0;
  if (partner.reward_tier_id) {
    const { data: tier, error: tierError } = await admin
      .from("partner_reward_tiers")
      .select("commission_rate, bonus_cents")
      .eq("id", partner.reward_tier_id)
      .maybeSingle();
    if (tierError) {
      console.error("Unexpected API error.", toSafeErrorRecord(tierError));
      return NextResponse.json({ error: "Failed to load reward tier." }, { status: 500 });
    }
    defaultCommissionRate = Number(tier?.commission_rate ?? 0);
    defaultBonusCents = Number(tier?.bonus_cents ?? 0);
  }

  const { data: taxProfile, error: taxError } = await admin
    .from("partner_tax_profiles")
    .select("partner_id, tax_form_type, us_taxpayer, backup_withholding_required, withholding_rate, form_expiration_date, status")
    .eq("partner_id", parsed.data.partnerId)
    .maybeSingle();
  if (taxError) {
    console.error("Unexpected API error.", toSafeErrorRecord(taxError));
    return NextResponse.json({ error: "Failed to load partner tax profile." }, { status: 500 });
  }

  const countryCode = String(partner.country_code ?? "US").toUpperCase();
  const [ruleResult, determinationResult] = await Promise.all([
    admin
      .from("partner_jurisdiction_rules")
      .select(
        "id, country_code, jurisdiction_name, allow_engagement, allow_payouts, requires_manual_review, requires_w8, default_withholding_rate, sanctions_program, sanctions_basis",
      )
      .eq("country_code", countryCode)
      .maybeSingle(),
    admin
      .from("partner_withholding_determinations")
      .select(
        "partner_id, country_code, us_source_income, treaty_claimed, determination_status, approved_withholding_rate, effective_start, effective_end",
      )
      .eq("partner_id", parsed.data.partnerId)
      .maybeSingle(),
  ]);
  if (ruleResult.error) {
    console.error("Unexpected API error.", toSafeErrorRecord(ruleResult.error));
    return NextResponse.json({ error: "Failed to load jurisdiction rule." }, { status: 500 });
  }
  if (determinationResult.error) {
    console.error("Unexpected API error.", toSafeErrorRecord(determinationResult.error));
    return NextResponse.json({ error: "Failed to load withholding determination." }, { status: 500 });
  }

  const commissionRate = parsed.data.commissionRate ?? defaultCommissionRate;
  const bonusAmountCents = parsed.data.bonusAmountCents ?? defaultBonusCents;
  const withholdingResolution = resolvePartnerWithholdingRate({
    countryCode,
    taxProfile: (taxProfile as PartnerTaxProfileRow | null) ?? null,
    jurisdictionRule: (ruleResult.data as PartnerJurisdictionRuleRow | null) ?? null,
    determination: (determinationResult.data as PartnerWithholdingDeterminationRow | null) ?? null,
  });
  const withholdingRate = parsed.data.withholdingRate ?? withholdingResolution.rate;

  const amounts = computeCommissionAmounts({
    grossRevenueCents: parsed.data.grossRevenueCents,
    commissionRate,
    bonusCents: bonusAmountCents,
    withholdingRate,
  });

  const earnedAt = parsed.data.earnedAtIso ?? new Date().toISOString();
  const availableAt = parsed.data.availableAtIso ?? earnedAt;

  const { data, error } = await admin
    .from("partner_commission_events")
    .insert({
      partner_id: parsed.data.partnerId,
      referral_id: parsed.data.referralId ?? null,
      partner_code_id: parsed.data.partnerCodeId ?? null,
      event_type: parsed.data.eventType,
      status: parsed.data.status,
      source_event_ref: parsed.data.sourceEventRef?.trim() || null,
      gross_revenue_cents: parsed.data.grossRevenueCents,
      commission_rate: commissionRate,
      commission_amount_cents: amounts.commissionAmountCents,
      bonus_amount_cents: amounts.bonusAmountCents,
      withholding_tax_cents: amounts.withholdingTaxCents,
      net_amount_cents: amounts.netAmountCents,
      currency: parsed.data.currency.toUpperCase(),
      earned_at: earnedAt,
      available_at: availableAt,
      approved_at: parsed.data.status === "approved" ? new Date().toISOString() : null,
      created_by: auth.userId,
      metadata: parsed.data.metadata ?? {},
    })
    .select(
      "id, partner_id, referral_id, partner_code_id, event_type, status, source_event_ref, gross_revenue_cents, commission_rate, commission_amount_cents, bonus_amount_cents, withholding_tax_cents, net_amount_cents, currency, earned_at, available_at, approved_at, paid_at, metadata, created_at, updated_at",
    )
    .single();

  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to create commission event." }, { status: 500 });
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "partner_commission_event_create",
    metadata: {
      partnerId: data.partner_id,
      commissionEventId: data.id,
      status: data.status,
      netAmountCents: data.net_amount_cents,
      sourceEventRef: data.source_event_ref,
    },
  });

  return NextResponse.json({ success: true, commissionEvent: data });
}
