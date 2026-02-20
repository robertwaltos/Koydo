import { NextResponse } from "next/server";
import Stripe from "stripe";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { serverEnv } from "@/lib/config/env";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/admin/audit";
import { enforceAdminActionRateLimit } from "@/lib/admin/rate-limit";

const requestSchema = z.object({
  name: z.string().min(3).max(80),
  code: z.string().min(3).max(32).regex(/^[A-Za-z0-9_-]+$/),
  discountPercent: z.number().int().min(1).max(100),
  startsAtIso: z.string().datetime().optional(),
  endsAtIso: z.string().datetime(),
  maxRedemptions: z.number().int().positive().optional(),
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
    actionType: "billing_sales_event_create",
    windowSeconds: 3600,
    maxActions: 20,
  });
  if (!rate.allowed) {
    return NextResponse.json({ error: "Rate limit exceeded for sales-event creation." }, { status: 429 });
  }

  const endsAt = new Date(payload.data.endsAtIso);
  if (Number.isNaN(endsAt.getTime()) || endsAt.getTime() <= Date.now()) {
    return NextResponse.json({ error: "endsAtIso must be in the future." }, { status: 400 });
  }

  const stripe = new Stripe(serverEnv.STRIPE_SECRET_KEY);
  const coupon = await stripe.coupons.create({
    percent_off: payload.data.discountPercent,
    duration: "once",
    max_redemptions: payload.data.maxRedemptions,
    redeem_by: Math.floor(endsAt.getTime() / 1000),
    metadata: {
      salesEventName: payload.data.name,
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
      salesEventName: payload.data.name,
      createdByAdmin: auth.userId,
    },
  });

  const adminDb = createSupabaseAdminClient();
  await adminDb.from("sales_events").insert({
    name: payload.data.name,
    promo_code: promotionCode.code,
    discount_percent: payload.data.discountPercent,
    starts_at: payload.data.startsAtIso ?? null,
    ends_at: payload.data.endsAtIso,
    max_redemptions: payload.data.maxRedemptions ?? null,
    stripe_coupon_id: coupon.id,
    stripe_promotion_code_id: promotionCode.id,
    created_by: auth.userId,
  });

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "billing_sales_event_create",
    metadata: {
      eventName: payload.data.name,
      code: promotionCode.code,
      discountPercent: payload.data.discountPercent,
      couponId: coupon.id,
      promotionCodeId: promotionCode.id,
    },
  });

  return NextResponse.json({
    success: true,
    code: promotionCode.code,
    couponId: coupon.id,
    promotionCodeId: promotionCode.id,
  });
}
