import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { serverEnv } from "@/lib/config/env";
import { logAdminAction } from "@/lib/admin/audit";
import { enforceAdminActionRateLimit } from "@/lib/admin/rate-limit";
import { createStripeServerClient } from "@/lib/billing/stripe-client";

const requestSchema = z
  .object({
    code: z.string().min(3).max(32).regex(/^[A-Za-z0-9_-]+$/),
    percentOff: z.number().int().min(1).max(100).optional(),
    amountOffUsd: z.number().positive().optional(),
    duration: z.enum(["once", "repeating", "forever"]).default("once"),
    durationInMonths: z.number().int().positive().optional(),
    maxRedemptions: z.number().int().positive().optional(),
    redeemByIso: z.string().datetime().optional(),
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

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "billing_promo_code_create",
    metadata: {
      code: promotionCode.code,
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
