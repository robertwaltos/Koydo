import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { serverEnv } from "@/lib/config/env";
import { logAdminAction } from "@/lib/admin/audit";
import { enforceAdminActionRateLimit } from "@/lib/admin/rate-limit";
import { createStripeServerClient } from "@/lib/billing/stripe-client";
import { markApprovalRequestExecuted, requireApprovedRequestForAction } from "@/lib/admin/approvals";

const requestSchema = z.object({
  paymentIntentId: z.string().min(1),
  amountCents: z.number().int().positive().optional(),
  reason: z.enum(["duplicate", "fraudulent", "requested_by_customer"]).default("requested_by_customer"),
  confirmText: z.literal("PROCESS_REFUND"),
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
    actionType: "billing_refund",
    windowSeconds: 3600,
    maxActions: 25,
  });
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Rate limit exceeded for refunds. Contact a platform owner." },
      { status: 429 }
    );
  }

  const stripe = createStripeServerClient(serverEnv.STRIPE_SECRET_KEY);
  const approvalCheck = await requireApprovedRequestForAction({
    actionType: "billing_refund",
    approvalRequestId: payload.data.approvalRequestId,
    actorUserId: auth.userId,
  });
  if (!approvalCheck.ok) {
    return NextResponse.json({ error: approvalCheck.error }, { status: 400 });
  }

  const refund = await stripe.refunds.create({
    payment_intent: payload.data.paymentIntentId,
    amount: payload.data.amountCents,
    reason: payload.data.reason,
    metadata: {
      requestedByAdmin: auth.userId,
    },
  });

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "billing_refund",
    metadata: {
      paymentIntentId: payload.data.paymentIntentId,
      amountCents: payload.data.amountCents ?? null,
      refundId: refund.id,
    },
  });

  if (payload.data.approvalRequestId) {
    await markApprovalRequestExecuted({
      approvalRequestId: payload.data.approvalRequestId,
      actorUserId: auth.userId,
    });
  }

  return NextResponse.json({ success: true, refundId: refund.id, status: refund.status });
}
