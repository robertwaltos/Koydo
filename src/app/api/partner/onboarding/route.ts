import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { canManagePartnerFinancials, getPartnerPortalAccessForUser } from "@/lib/partners/access";

const onboardingUpdateSchema = z.object({
  partnerId: z.string().uuid().optional().nullable(),
  action: z.enum(["profile", "tax_profile", "payout_account"]),
  profile: z
    .object({
      displayName: z.string().trim().min(2).max(160).optional(),
      legalName: z.string().trim().min(2).max(200).optional(),
      contactEmail: z.string().email().optional(),
      contactPhone: z.string().trim().max(80).optional().nullable(),
      addressLine1: z.string().trim().max(200).optional().nullable(),
      addressLine2: z.string().trim().max(200).optional().nullable(),
      city: z.string().trim().max(120).optional().nullable(),
      stateRegion: z.string().trim().max(120).optional().nullable(),
      postalCode: z.string().trim().max(32).optional().nullable(),
      countryCode: z.string().trim().length(2).optional(),
      notes: z.string().trim().max(5000).optional().nullable(),
    })
    .optional(),
  taxProfile: z
    .object({
      taxFormType: z.enum(["w9", "w8_ben", "w8_ben_e", "w8_eci", "w8_imy", "none", "other"]),
      taxClassification: z.string().trim().max(200).optional().nullable(),
      tinType: z.enum(["ssn", "ein", "itin", "foreign", "other", "none"]).default("none"),
      taxIdentifier: z.string().trim().max(40).optional().nullable(),
      usTaxpayer: z.boolean().default(false),
      backupWithholdingRequired: z.boolean().default(false),
      withholdingRate: z.number().min(0).max(1).default(0),
      exemptionCode: z.string().trim().max(80).optional().nullable(),
      fatcaStatus: z.enum(["unknown", "not_applicable", "reportable", "documented"]).default("unknown"),
      formReceivedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional().nullable(),
      formExpirationDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional().nullable(),
      status: z.enum(["pending", "valid", "expired", "rejected"]).default("pending"),
      notes: z.string().trim().max(5000).optional().nullable(),
    })
    .optional(),
  payoutAccount: z
    .object({
      accountHolderName: z.string().trim().min(2).max(200),
      bankName: z.string().trim().min(2).max(200),
      accountType: z.enum(["checking", "savings", "custodial", "other"]).default("checking"),
      payoutMethod: z.enum(["ach", "wire", "swift", "sepa", "check", "paypal", "other"]).default("ach"),
      currency: z.string().trim().length(3).default("USD"),
      countryCode: z.string().trim().length(2).default("US"),
      routingNumberLast4: z.string().trim().max(4).optional().nullable(),
      accountNumberLast4: z.string().trim().max(4).optional().nullable(),
      ibanLast4: z.string().trim().max(4).optional().nullable(),
      swiftBic: z.string().trim().max(16).optional().nullable(),
      markPrimary: z.boolean().default(true),
    })
    .optional(),
});

function toTinLast4(value: string | null | undefined) {
  if (!value) return null;
  const normalized = value.replace(/\s+/g, "");
  if (!normalized) return null;
  return normalized.slice(-4);
}

export async function GET(request: Request) {
  const rate = await enforceIpRateLimit(request, "api:partner:onboarding:get", {
    max: 60,
    windowMs: 5 * 60 * 1000,
  });
  if (!rate.allowed) {
    return NextResponse.json({ error: "Too many requests. Please retry shortly." }, { status: 429 });
  }

  const supabase = await createSupabaseServerClient();
  const { data: authData, error: authError } = await supabase.auth.getUser();
  if (authError || !authData.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const partnerId = searchParams.get("partnerId");

  const accessRows = await getPartnerPortalAccessForUser({
    userId: authData.user.id,
    partnerId,
  }).catch((error) => {
    console.error("Failed to resolve partner portal access.", toSafeErrorRecord(error));
    return [];
  });
  if (accessRows.length === 0) {
    return NextResponse.json({ error: "No active partner portal access found." }, { status: 403 });
  }

  const activeAccess = accessRows[0];
  const admin = createSupabaseAdminClient();
  const [partnerResult, taxResult, payoutResult] = await Promise.all([
    admin
      .from("partners")
      .select(
        "id, display_name, legal_name, partner_type, contact_email, contact_phone, address_line1, address_line2, city, state_region, postal_code, country_code, reward_tier_id, onboarding_status, compliance_status, payout_status, kyc_status, notes, metadata, created_at, updated_at",
      )
      .eq("id", activeAccess.partner_id)
      .maybeSingle(),
    admin
      .from("partner_tax_profiles")
      .select(
        "id, partner_id, tax_form_type, tax_classification, tin_type, tin_last4, us_taxpayer, backup_withholding_required, withholding_rate, exemption_code, fatca_status, form_received_at, form_expiration_date, status, notes, metadata, updated_at",
      )
      .eq("partner_id", activeAccess.partner_id)
      .maybeSingle(),
    admin
      .from("partner_payout_accounts")
      .select(
        "id, partner_id, account_holder_name, bank_name, account_type, payout_method, currency, country_code, routing_number_last4, account_number_last4, iban_last4, swift_bic, verification_status, is_primary, metadata, created_at, updated_at",
      )
      .eq("partner_id", activeAccess.partner_id)
      .order("created_at", { ascending: false })
      .limit(20),
  ]);

  const error = partnerResult.error ?? taxResult.error ?? payoutResult.error;
  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
  if (!partnerResult.data) {
    return NextResponse.json({ error: "Partner not found." }, { status: 404 });
  }

  return NextResponse.json({
    access: activeAccess,
    partner: partnerResult.data,
    taxProfile: taxResult.data ?? null,
    payoutAccounts: payoutResult.data ?? [],
  });
}

export async function POST(request: Request) {
  const rate = await enforceIpRateLimit(request, "api:partner:onboarding:post", {
    max: 30,
    windowMs: 5 * 60 * 1000,
  });
  if (!rate.allowed) {
    return NextResponse.json({ error: "Too many requests. Please retry shortly." }, { status: 429 });
  }

  const supabase = await createSupabaseServerClient();
  const { data: authData, error: authError } = await supabase.auth.getUser();
  if (authError || !authData.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const parsed = onboardingUpdateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  const accessRows = await getPartnerPortalAccessForUser({
    userId: authData.user.id,
    partnerId: parsed.data.partnerId ?? null,
  }).catch((error) => {
    console.error("Failed to resolve partner portal access.", toSafeErrorRecord(error));
    return [];
  });
  if (accessRows.length === 0) {
    return NextResponse.json({ error: "No active partner portal access found." }, { status: 403 });
  }
  const activeAccess = accessRows[0];
  const isFinanceManager = canManagePartnerFinancials(activeAccess.role);

  const admin = createSupabaseAdminClient();
  if (parsed.data.action === "profile") {
    if (!(activeAccess.role === "owner" || activeAccess.role === "manager" || isFinanceManager)) {
      return NextResponse.json({ error: "Insufficient permissions for profile updates." }, { status: 403 });
    }
    if (!parsed.data.profile) {
      return NextResponse.json({ error: "Missing profile payload." }, { status: 400 });
    }
    const profile = parsed.data.profile;
    const { data, error } = await admin
      .from("partners")
      .update({
        display_name: profile.displayName,
        legal_name: profile.legalName,
        contact_email: profile.contactEmail,
        contact_phone: profile.contactPhone?.trim() || null,
        address_line1: profile.addressLine1?.trim() || null,
        address_line2: profile.addressLine2?.trim() || null,
        city: profile.city?.trim() || null,
        state_region: profile.stateRegion?.trim() || null,
        postal_code: profile.postalCode?.trim() || null,
        country_code: profile.countryCode?.toUpperCase(),
        notes: profile.notes?.trim() || null,
        onboarding_status: "profile_submitted",
      })
      .eq("id", activeAccess.partner_id)
      .select(
        "id, display_name, legal_name, contact_email, contact_phone, address_line1, address_line2, city, state_region, postal_code, country_code, onboarding_status, updated_at",
      )
      .single();
    if (error) {
      console.error("Unexpected API error.", toSafeErrorRecord(error));
      return NextResponse.json({ error: "Failed to update partner profile." }, { status: 500 });
    }
    return NextResponse.json({ success: true, partner: data });
  }

  if (parsed.data.action === "tax_profile") {
    if (!isFinanceManager) {
      return NextResponse.json({ error: "Only owner/finance contact can manage tax profile." }, { status: 403 });
    }
    if (!parsed.data.taxProfile) {
      return NextResponse.json({ error: "Missing tax profile payload." }, { status: 400 });
    }
    const tax = parsed.data.taxProfile;
    const { data, error } = await admin
      .from("partner_tax_profiles")
      .upsert(
        {
          partner_id: activeAccess.partner_id,
          tax_form_type: tax.taxFormType,
          tax_classification: tax.taxClassification?.trim() || null,
          tin_type: tax.tinType,
          tin_last4: toTinLast4(tax.taxIdentifier),
          us_taxpayer: tax.usTaxpayer,
          backup_withholding_required: tax.backupWithholdingRequired,
          withholding_rate: tax.withholdingRate,
          exemption_code: tax.exemptionCode?.trim() || null,
          fatca_status: tax.fatcaStatus,
          form_received_at: tax.formReceivedAt ?? null,
          form_expiration_date: tax.formExpirationDate ?? null,
          status: tax.status,
          notes: tax.notes?.trim() || null,
          metadata: {
            submittedBy: authData.user.id,
            submittedFrom: "partner_portal",
          },
          created_by: authData.user.id,
        },
        { onConflict: "partner_id" },
      )
      .select(
        "id, partner_id, tax_form_type, tax_classification, tin_type, tin_last4, us_taxpayer, backup_withholding_required, withholding_rate, exemption_code, fatca_status, form_received_at, form_expiration_date, status, notes, metadata, updated_at",
      )
      .single();
    if (error) {
      console.error("Unexpected API error.", toSafeErrorRecord(error));
      return NextResponse.json({ error: "Failed to upsert partner tax profile." }, { status: 500 });
    }

    await admin
      .from("partners")
      .update({
        onboarding_status: data.status === "valid" ? "tax_verified" : "tax_pending",
      })
      .eq("id", activeAccess.partner_id);

    return NextResponse.json({ success: true, taxProfile: data });
  }

  if (!isFinanceManager) {
    return NextResponse.json({ error: "Only owner/finance contact can manage payout accounts." }, { status: 403 });
  }
  if (!parsed.data.payoutAccount) {
    return NextResponse.json({ error: "Missing payout account payload." }, { status: 400 });
  }

  const payout = parsed.data.payoutAccount;
  const { data, error } = await admin
    .from("partner_payout_accounts")
    .insert({
      partner_id: activeAccess.partner_id,
      account_holder_name: payout.accountHolderName,
      bank_name: payout.bankName,
      account_type: payout.accountType,
      payout_method: payout.payoutMethod,
      currency: payout.currency.toUpperCase(),
      country_code: payout.countryCode.toUpperCase(),
      routing_number_last4: payout.routingNumberLast4?.trim() || null,
      account_number_last4: payout.accountNumberLast4?.trim() || null,
      iban_last4: payout.ibanLast4?.trim() || null,
      swift_bic: payout.swiftBic?.trim() || null,
      verification_status: "pending",
      is_primary: payout.markPrimary,
      metadata: { submittedBy: authData.user.id, submittedFrom: "partner_portal" },
      created_by: authData.user.id,
    })
    .select(
      "id, partner_id, account_holder_name, bank_name, account_type, payout_method, currency, country_code, routing_number_last4, account_number_last4, iban_last4, swift_bic, verification_status, is_primary, metadata, created_at, updated_at",
    )
    .single();
  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to create payout account." }, { status: 500 });
  }

  await admin
    .from("partners")
    .update({ onboarding_status: "payout_pending" })
    .eq("id", activeAccess.partner_id);

  return NextResponse.json({ success: true, payoutAccount: data });
}
