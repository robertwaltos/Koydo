import { NextResponse } from "next/server";
import Stripe from "stripe";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { serverEnv } from "@/lib/config/env";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/admin/audit";
import { enforceAdminActionRateLimit } from "@/lib/admin/rate-limit";
import { markApprovalRequestExecuted, requireApprovedRequestForAction } from "@/lib/admin/approvals";

const requestSchema = z.object({
  productId: z.string().min(1),
  monthlyPriceUsd: z.number().positive(),
  nickname: z.string().max(80).optional(),
  makeDefault: z.boolean().default(true),
  confirmText: z.literal("SET_PRICE"),
  approvalRequestId: z.string().uuid().optional(),
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
    actionType: "billing_set_price",
    windowSeconds: 3600,
    maxActions: 12,
  });
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Rate limit exceeded for pricing changes." },
      { status: 429 }
    );
  }

  const stripe = new Stripe(serverEnv.STRIPE_SECRET_KEY);
  const approvalCheck = await requireApprovedRequestForAction({
    actionType: "billing_set_price",
    approvalRequestId: payload.data.approvalRequestId,
    actorUserId: auth.userId,
  });
  if (!approvalCheck.ok) {
    return NextResponse.json({ error: approvalCheck.error }, { status: 400 });
  }

  const price = await stripe.prices.create({
    product: payload.data.productId,
    currency: "usd",
    unit_amount: Math.round(payload.data.monthlyPriceUsd * 100),
    recurring: { interval: "month" },
    nickname: payload.data.nickname ?? undefined,
    metadata: {
      createdByAdmin: auth.userId,
    },
  });

  if (payload.data.makeDefault) {
    const adminDb = createSupabaseAdminClient();
    await adminDb.from("app_settings").upsert({
      key: "stripe_price_id",
      value: { id: price.id, source: "admin-panel" },
      updated_by: auth.userId,
    });
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "billing_set_price",
    metadata: {
      productId: payload.data.productId,
      priceId: price.id,
      monthlyPriceUsd: payload.data.monthlyPriceUsd,
      makeDefault: payload.data.makeDefault,
    },
  });

  if (payload.data.approvalRequestId) {
    await markApprovalRequestExecuted({
      approvalRequestId: payload.data.approvalRequestId,
      actorUserId: auth.userId,
    });
  }

  return NextResponse.json({ success: true, priceId: price.id });
}
