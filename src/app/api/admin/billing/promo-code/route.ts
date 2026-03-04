import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { serverEnv } from "@/lib/config/env";
import { logAdminAction } from "@/lib/admin/audit";
import { enforceAdminActionRateLimit } from "@/lib/admin/rate-limit";
import { createStripeServerClient } from "@/lib/billing/stripe-client";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { normalizePartnerCode } from "@/lib/partners/program";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const requestSchema = z
  .object({
    code: z.string().min(3).max(32).regex(/^[A-Za-z0-9_-]+$/),
    percentOff: z.number().int().min(1).max(100).optional(),
    amountOffUsd: z.number().positive().optional(),
    duration: z.enum(["once", "repeating", "forever"]).default("once"),
    durationInMonths: z.number().int().positive().optional(),
    maxRedemptions: z.number().int().positive().optional(),
    redeemByIso: z.string().datetime().optional(),
    partnerId: z.string().uuid().optional(),
    attributionWindowDays: z.number().int().min(1).max(365).default(30),
    partnerNotes: z.string().trim().max(2000).optional().nullable(),
  })
  .refine((value) => Boolean(value.percentOff) !== Boolean(value.amountOffUsd), {
    message: "Provide either percentOff or amountOffUsd.",
    path: ["percentOff"],
  });

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  if (!serverEnv.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: "Missing Stripe configuration." }, { status: 500 });
  }

  const payload = requestSchema.safeParse(await request.json().catch(() => null));
  if (!payload.success) {
    return NextResponse.json({ error: "Invalid payload", details: payload.error.flatten() }, { status: 400 });
  }

  const rate = await enforceAdminActionRateLimit({
    adminUserId: auth.userId,
    actionType: "billing_promo_code_create",
    windowSeconds: 3600,
    maxActions: 50,
  });
  if (!rate.allowed) {
    return NextResponse.json({ error: "Rate limit exceeded for promo code creation." }, { status: 429 });
  }

  const stripe = createStripeServerClient(serverEnv.STRIPE_SECRET_KEY);
  const coupon = await stripe.coupons.create({
    percent_off: payload.data.percentOff,
    amount_off: payload.data.amountOffUsd ? Math.round(payload.data.amountOffUsd * 100) : undefined,
    currency: payload.data.amountOffUsd ? "usd" : undefined,
    duration: payload.data.duration,
    duration_in_months: payload.data.duration === "repeating" ? payload.data.durationInMonths : undefined,
    max_redemptions: payload.data.maxRedemptions,
    redeem_by: payload.data.redeemByIso ? Math.floor(new Date(payload.data.redeemByIso).getTime() / 1000) : undefined,
    metadata: {
      createdByAdmin: auth.userId,
    },
  });

  const promotionCode = await stripe.promotionCodes.create({
    promotion: {
      type: "coupon",
      coupon: coupon.id,
    },
    code: payload.data.code.toUpperCase(),
    max_redemptions: payload.data.maxRedemptions,
    metadata: {
      createdByAdmin: auth.userId,
    },
  });

  let partnerCodeRecordId: string | null = null;
  if (payload.data.partnerId) {
    const adminDb = createSupabaseAdminClient();
    const normalizedCode = normalizePartnerCode(payload.data.code);
    const { data: partner, error: partnerError } = await adminDb
      .from("partners")
      .select("id")
      .eq("id", payload.data.partnerId)
      .maybeSingle();
    if (partnerError || !partner) {
      console.error("Failed to validate partner for promo-code assignment.", toSafeErrorRecord(partnerError));
      return NextResponse.json(
        {
          error: "Promo code created in Stripe, but partner assignment failed because partner was not found.",
          code: promotionCode.code,
          couponId: coupon.id,
          promotionCodeId: promotionCode.id,
        },
        { status: 500 },
      );
    }

    const { data: partnerCode, error: partnerCodeError } = await adminDb
      .from("partner_codes")
      .insert({
        partner_id: payload.data.partnerId,
        code: normalizedCode,
        stripe_promotion_code_id: promotionCode.id,
        stripe_coupon_id: coupon.id,
        status: "active",
        attribution_window_days: payload.data.attributionWindowDays,
        max_redemptions: payload.data.maxRedemptions ?? null,
        notes: payload.data.partnerNotes?.trim() || null,
        metadata: {
          createdVia: "admin_billing_promo_code_route",
          createdByAdmin: auth.userId,
        },
        created_by: auth.userId,
      })
      .select("id")
      .single();
    if (partnerCodeError) {
      console.error("Failed to persist partner code assignment for promo code.", toSafeErrorRecord(partnerCodeError));
      return NextResponse.json(
        {
          error: "Promo code created in Stripe, but partner assignment persistence failed.",
          code: promotionCode.code,
          couponId: coupon.id,
          promotionCodeId: promotionCode.id,
        },
        { status: 500 },
      );
    }
    partnerCodeRecordId = partnerCode.id;
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "billing_promo_code_create",
    metadata: {
      code: promotionCode.code,
      couponId: coupon.id,
      promotionCodeId: promotionCode.id,
      partnerId: payload.data.partnerId ?? null,
      partnerCodeRecordId,
    },
  });

  return NextResponse.json({
    success: true,
    code: promotionCode.code,
    couponId: coupon.id,
    promotionCodeId: promotionCode.id,
    partnerCodeRecordId,
  });
}
