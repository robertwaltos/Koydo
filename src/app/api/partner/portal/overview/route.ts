import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { getPartnerPortalAccessForUser } from "@/lib/partners/access";
import { resolvePartnerSchoolContext } from "@/lib/partners/school-api";

export async function GET(request: Request) {
  const rate = await enforceIpRateLimit(request, "api:partner:portal:overview:get", {
    max: 120,
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
  const [partnerResult, codesResult, referralsResult, commissionResult, payoutsResult, payoutItemsResult] =
    await Promise.all([
      admin
        .from("partners")
        .select(
          "id, display_name, legal_name, partner_type, contact_email, reward_tier_id, onboarding_status, compliance_status, payout_status, kyc_status, updated_at",
        )
        .eq("id", activeAccess.partner_id)
        .maybeSingle(),
      admin
        .from("partner_codes")
        .select(
          "id, code, status, current_redemptions, max_redemptions, attribution_window_days, created_at, updated_at",
        )
        .eq("partner_id", activeAccess.partner_id)
        .order("created_at", { ascending: false })
        .limit(100),
      admin
        .from("partner_referrals")
        .select("id, conversion_status, conversion_value_cents, event_occurred_at, created_at")
        .eq("partner_id", activeAccess.partner_id)
        .order("created_at", { ascending: false })
        .limit(5000),
      admin
        .from("partner_commission_events")
        .select("id, status, net_amount_cents, commission_amount_cents, bonus_amount_cents, earned_at, paid_at, created_at")
        .eq("partner_id", activeAccess.partner_id)
        .order("created_at", { ascending: false })
        .limit(5000),
      admin
        .from("partner_payout_batches")
        .select("id, batch_name, period_start, period_end, status, currency, total_amount_cents, created_at")
        .order("created_at", { ascending: false })
        .limit(200),
      admin
        .from("partner_payout_items")
        .select("id, payout_batch_id, item_status, net_amount_cents, paid_at, created_at")
        .eq("partner_id", activeAccess.partner_id)
        .order("created_at", { ascending: false })
        .limit(1000),
    ]);
  const schoolContext = await resolvePartnerSchoolContext(admin, activeAccess.partner_id).catch((error) => {
    console.error("Failed to resolve school partner context for overview.", toSafeErrorRecord(error));
    return null;
  });

  const error =
    partnerResult.error ??
    codesResult.error ??
    referralsResult.error ??
    commissionResult.error ??
    payoutsResult.error ??
    payoutItemsResult.error;

  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
  if (!partnerResult.data) {
    return NextResponse.json({ error: "Partner not found." }, { status: 404 });
  }

  const referrals = referralsResult.data ?? [];
  const commissions = commissionResult.data ?? [];
  const payoutItems = payoutItemsResult.data ?? [];
  const payoutBatches = payoutsResult.data ?? [];
  const payoutsByBatchId = new Map(payoutBatches.map((batch) => [batch.id, batch]));

  const qualifiedReferralCount = referrals.filter((entry) => entry.conversion_status === "qualified").length;
  const pendingReferralCount = referrals.filter((entry) => entry.conversion_status === "pending").length;
  const grossReferredRevenueCents = referrals
    .filter((entry) => entry.conversion_status === "qualified")
    .reduce((acc, entry) => acc + Number(entry.conversion_value_cents ?? 0), 0);

  const totalCommissionsCents = commissions.reduce((acc, entry) => acc + Number(entry.net_amount_cents ?? 0), 0);
  const paidCommissionsCents = commissions
    .filter((entry) => entry.status === "paid")
    .reduce((acc, entry) => acc + Number(entry.net_amount_cents ?? 0), 0);
  const pendingCommissionsCents = commissions
    .filter((entry) => entry.status === "approved" || entry.status === "pending" || entry.status === "held")
    .reduce((acc, entry) => acc + Number(entry.net_amount_cents ?? 0), 0);

  return NextResponse.json({
    access: activeAccess,
    partner: partnerResult.data,
    summary: {
      codeCount: (codesResult.data ?? []).length,
      qualifiedReferralCount,
      pendingReferralCount,
      grossReferredRevenueCents,
      totalCommissionsCents,
      paidCommissionsCents,
      pendingCommissionsCents,
      payoutItemCount: payoutItems.length,
      paidPayoutItemCount: payoutItems.filter((entry) => entry.item_status === "paid").length,
      blockedPayoutItemCount: payoutItems.filter((entry) => entry.item_status === "blocked").length,
    },
    codes: codesResult.data ?? [],
    recentReferrals: referrals.slice(0, 200),
    recentCommissionEvents: commissions.slice(0, 200),
    recentPayouts: payoutItems.slice(0, 100).map((item) => ({
      ...item,
      payoutBatch: payoutsByBatchId.get(item.payout_batch_id) ?? null,
    })),
    schoolApi: schoolContext
      ? {
          eligible: schoolContext.eligibility.eligible,
          regulatoryMode: schoolContext.eligibility.regulatoryMode,
          allowedDatasets: schoolContext.eligibility.allowedDatasets,
          reasons: schoolContext.eligibility.reasons,
          linkedOrganizationId: schoolContext.linkedOrganization?.id ?? null,
          docsUrl: `/api/partner/portal/school-api/documentation?partnerId=${encodeURIComponent(activeAccess.partner_id)}`,
          portalUrl: `/partner/portal?partnerId=${encodeURIComponent(activeAccess.partner_id)}`,
        }
      : null,
  });
}
