import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { logAdminAction } from "@/lib/admin/audit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

const partnerAccountClassSchema = z.preprocess(
  (value) => (typeof value === "string" ? value.trim().toUpperCase() : value),
  z.enum(["SCHOOL", "TEACHER"]),
);

const createPartnerSchema = z.object({
  displayName: z.string().trim().min(2).max(160),
  legalName: z.string().trim().min(2).max(200),
  partnerType: z.enum(["influencer", "affiliate", "agency", "school", "creator", "other"]).default("influencer"),
  accountClass: partnerAccountClassSchema.optional().nullable(),
  contactEmail: z.string().email(),
  contactPhone: z.string().trim().max(80).optional().nullable(),
  countryCode: z.string().trim().length(2).default("US"),
  rewardTierCode: z.string().trim().toUpperCase().max(40).optional().nullable(),
  portalUserId: z.string().uuid().optional().nullable(),
  notes: z.string().trim().max(5000).optional().nullable(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

type PartnerQueryRow = {
  id: string;
  display_name: string;
  legal_name: string;
  partner_type: string;
  country_code: string;
  contact_email: string;
  reward_tier_id: string | null;
  onboarding_status: string;
  compliance_status: string;
  payout_status: string;
  kyc_status: string;
  created_at: string;
  updated_at: string;
  metadata: Record<string, unknown> | null;
};

function parseAccountClassFromMetadata(metadata: unknown): "SCHOOL" | "TEACHER" | null {
  if (!metadata || typeof metadata !== "object") return null;
  const candidate = (metadata as Record<string, unknown>).accountClass;
  if (typeof candidate !== "string") return null;
  const normalized = candidate.trim().toUpperCase();
  return normalized === "SCHOOL" || normalized === "TEACHER" ? normalized : null;
}

export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const admin = createSupabaseAdminClient();
  const [partnersResult, tiersResult] = await Promise.all([
    admin
      .from("partners")
      .select(
        "id, display_name, legal_name, partner_type, country_code, contact_email, reward_tier_id, onboarding_status, compliance_status, payout_status, kyc_status, created_at, updated_at, metadata",
      )
      .order("created_at", { ascending: false })
      .limit(5000),
    admin
      .from("partner_reward_tiers")
      .select("id, tier_code, tier_name, commission_rate, bonus_cents, is_active")
      .order("commission_rate", { ascending: true }),
  ]);

  const error = partnersResult.error ?? tiersResult.error;
  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  const partners = ((partnersResult.data ?? []) as PartnerQueryRow[]).map((partner) => ({
    id: partner.id,
    display_name: partner.display_name,
    legal_name: partner.legal_name,
    partner_type: partner.partner_type,
    country_code: partner.country_code,
    contact_email: partner.contact_email,
    reward_tier_id: partner.reward_tier_id,
    onboarding_status: partner.onboarding_status,
    compliance_status: partner.compliance_status,
    payout_status: partner.payout_status,
    kyc_status: partner.kyc_status,
    created_at: partner.created_at,
    updated_at: partner.updated_at,
    account_class: parseAccountClassFromMetadata(partner.metadata),
  }));

  return NextResponse.json({
    partners,
    tiers: tiersResult.data ?? [],
  });
}

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const body = await request.json().catch(() => null);
  const parsed = createPartnerSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }
  if (parsed.data.accountClass && parsed.data.partnerType !== "school") {
    return NextResponse.json(
      { error: "accountClass can only be set when partnerType is school." },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();
  let rewardTierId: string | null = null;
  if (parsed.data.rewardTierCode) {
    const { data: tier, error: tierError } = await admin
      .from("partner_reward_tiers")
      .select("id")
      .eq("tier_code", parsed.data.rewardTierCode)
      .maybeSingle();
    if (tierError) {
      console.error("Unexpected API error.", toSafeErrorRecord(tierError));
      return NextResponse.json({ error: "Failed to resolve reward tier." }, { status: 500 });
    }
    if (!tier) {
      return NextResponse.json({ error: "Reward tier not found." }, { status: 400 });
    }
    rewardTierId = tier.id;
  }
  const metadata = { ...(parsed.data.metadata ?? {}) };
  if (parsed.data.partnerType === "school") {
    metadata.accountClass = parsed.data.accountClass ?? "SCHOOL";
  } else {
    delete metadata.accountClass;
  }

  const { data: partner, error: partnerError } = await admin
    .from("partners")
    .insert({
      display_name: parsed.data.displayName,
      legal_name: parsed.data.legalName,
      partner_type: parsed.data.partnerType,
      contact_email: parsed.data.contactEmail,
      contact_phone: parsed.data.contactPhone?.trim() || null,
      country_code: parsed.data.countryCode.toUpperCase(),
      reward_tier_id: rewardTierId,
      onboarding_status: "invited",
      compliance_status: "pending",
      payout_status: "blocked",
      kyc_status: "pending",
      notes: parsed.data.notes?.trim() || null,
      metadata,
      created_by: auth.userId,
    })
    .select(
      "id, display_name, legal_name, partner_type, country_code, contact_email, reward_tier_id, onboarding_status, compliance_status, payout_status, kyc_status, notes, metadata, created_at, updated_at",
    )
    .single();

  if (partnerError) {
    console.error("Unexpected API error.", toSafeErrorRecord(partnerError));
    return NextResponse.json({ error: "Failed to create partner." }, { status: 500 });
  }

  let access = null;
  if (parsed.data.portalUserId) {
    const { data: portalAccess, error: accessError } = await admin
      .from("partner_portal_access")
      .insert({
        partner_id: partner.id,
        user_id: parsed.data.portalUserId,
        role: "owner",
        status: "active",
        metadata: { invitedByAdmin: auth.userId },
        created_by: auth.userId,
      })
      .select("id, partner_id, user_id, role, status, created_at")
      .single();

    if (accessError) {
      console.error("Unexpected API error.", toSafeErrorRecord(accessError));
      return NextResponse.json(
        {
          error: "Partner created, but failed to create portal access assignment.",
          partner,
        },
        { status: 500 },
      );
    }
    access = portalAccess;
  }
  const partnerWithAccountClass = {
    ...partner,
    account_class: parseAccountClassFromMetadata(partner.metadata),
  };

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "partner_create",
    metadata: {
      partnerId: partner.id,
      partnerType: partner.partner_type,
      accountClass: partnerWithAccountClass.account_class,
      rewardTierId: partner.reward_tier_id,
      portalUserId: parsed.data.portalUserId ?? null,
    },
  });

  return NextResponse.json({
    success: true,
    partner: partnerWithAccountClass,
    portalAccess: access,
  });
}
