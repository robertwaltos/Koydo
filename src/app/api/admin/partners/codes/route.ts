import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { logAdminAction } from "@/lib/admin/audit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { normalizePartnerCode } from "@/lib/partners/program";

const createCodeSchema = z.object({
  partnerId: z.string().uuid(),
  code: z.string().trim().min(3).max(64).regex(/^[A-Za-z0-9_-]+$/),
  stripePromotionCodeId: z.string().trim().max(128).optional().nullable(),
  stripeCouponId: z.string().trim().max(128).optional().nullable(),
  startsAtIso: z.string().datetime().optional().nullable(),
  endsAtIso: z.string().datetime().optional().nullable(),
  maxRedemptions: z.number().int().positive().optional().nullable(),
  attributionWindowDays: z.number().int().min(1).max(365).default(30),
  status: z.enum(["active", "paused", "expired", "revoked"]).default("active"),
  notes: z.string().trim().max(2000).optional().nullable(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export async function GET(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const { searchParams } = new URL(request.url);
  const partnerId = searchParams.get("partnerId");

  const admin = createSupabaseAdminClient();
  let query = admin
    .from("partner_codes")
    .select(
      "id, partner_id, code, stripe_promotion_code_id, stripe_coupon_id, status, starts_at, ends_at, max_redemptions, current_redemptions, attribution_window_days, notes, metadata, created_at, updated_at",
    )
    .order("created_at", { ascending: false })
    .limit(5000);
  if (partnerId) query = query.eq("partner_id", partnerId);

  const { data, error } = await query;
  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  return NextResponse.json({ codes: data ?? [] });
}

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const body = await request.json().catch(() => null);
  const parsed = createCodeSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  const normalizedCode = normalizePartnerCode(parsed.data.code);
  const admin = createSupabaseAdminClient();

  const { data: partnerExists, error: partnerError } = await admin
    .from("partners")
    .select("id")
    .eq("id", parsed.data.partnerId)
    .maybeSingle();
  if (partnerError) {
    console.error("Unexpected API error.", toSafeErrorRecord(partnerError));
    return NextResponse.json({ error: "Failed to validate partner." }, { status: 500 });
  }
  if (!partnerExists) {
    return NextResponse.json({ error: "Partner not found." }, { status: 404 });
  }

  const { data, error } = await admin
    .from("partner_codes")
    .insert({
      partner_id: parsed.data.partnerId,
      code: normalizedCode,
      stripe_promotion_code_id: parsed.data.stripePromotionCodeId?.trim() || null,
      stripe_coupon_id: parsed.data.stripeCouponId?.trim() || null,
      status: parsed.data.status,
      starts_at: parsed.data.startsAtIso ?? null,
      ends_at: parsed.data.endsAtIso ?? null,
      max_redemptions: parsed.data.maxRedemptions ?? null,
      attribution_window_days: parsed.data.attributionWindowDays,
      notes: parsed.data.notes?.trim() || null,
      metadata: parsed.data.metadata ?? {},
      created_by: auth.userId,
    })
    .select(
      "id, partner_id, code, stripe_promotion_code_id, stripe_coupon_id, status, starts_at, ends_at, max_redemptions, current_redemptions, attribution_window_days, notes, metadata, created_at, updated_at",
    )
    .single();

  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to create partner code." }, { status: 500 });
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "partner_code_create",
    metadata: {
      partnerId: data.partner_id,
      partnerCodeId: data.id,
      code: data.code,
      stripePromotionCodeId: data.stripe_promotion_code_id,
    },
  });

  return NextResponse.json({ success: true, code: data });
}
