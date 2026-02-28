import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createStripeServerClient } from "@/lib/billing/stripe-client";
import { serverEnv } from "@/lib/config/env";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import {
  recordLanguageExamUnlockPurchase,
  reverseLanguageExamUnlockForRefund,
} from "@/lib/language-learning";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

type WebhookClaimResult = "process" | "duplicate" | "untracked";

function toIsoDate(epochSeconds?: number | null) {
  return epochSeconds ? new Date(epochSeconds * 1000).toISOString() : null;
}

function isMissingTableError(message: string) {
  const lower = message.toLowerCase();
  return lower.includes("could not find the table") || (lower.includes("relation") && lower.includes("does not exist"));
}

function isDuplicateKeyError(code?: string | null) {
  return code === "23505";
}

async function upsertSubscriptionFromObject(subscription: Stripe.Subscription) {
  const supabase = createSupabaseAdminClient();

  const userId = subscription.metadata?.userId || null;
  const stripePriceId = subscription.items.data[0]?.price?.id ?? null;

  const payload = {
    user_id: userId,
    stripe_customer_id:
      typeof subscription.customer === "string" ? subscription.customer : subscription.customer?.id,
    stripe_subscription_id: subscription.id,
    stripe_price_id: stripePriceId,
    status: subscription.status,
    current_period_start: toIsoDate(subscription.items.data[0]?.current_period_start),
    current_period_end: toIsoDate(subscription.items.data[0]?.current_period_end),
    cancel_at_period_end: subscription.cancel_at_period_end,
    canceled_at: toIsoDate(subscription.canceled_at),
    metadata: subscription.metadata,
  };

  const { error } = await supabase.from("subscriptions").upsert(payload, {
    onConflict: "stripe_subscription_id",
  });

  if (error) {
    throw new Error(error.message);
  }
}

async function claimWebhookEvent(event: Stripe.Event): Promise<WebhookClaimResult> {
  const supabase = createSupabaseAdminClient();
  const { data: existing, error: existingError } = await supabase
    .from("stripe_webhook_events")
    .select("event_id, status, attempt_count")
    .eq("event_id", event.id)
    .maybeSingle();

  if (existingError) {
    if (isMissingTableError(existingError.message)) {
      return "untracked";
    }
    throw new Error(existingError.message);
  }

  const now = new Date().toISOString();

  if (!existing) {
    const { error: insertError } = await supabase
      .from("stripe_webhook_events")
      .insert({
        event_id: event.id,
        event_type: event.type,
        status: "processing",
        attempt_count: 1,
        event_created_at: toIsoDate(event.created),
        updated_at: now,
      });

    if (!insertError) {
      return "process";
    }
    if (isMissingTableError(insertError.message)) {
      return "untracked";
    }
    if (isDuplicateKeyError(insertError.code)) {
      return "duplicate";
    }
    throw new Error(insertError.message);
  }

  if (existing.status === "processed") {
    return "duplicate";
  }

  const nextAttempt = Math.max(1, Number(existing.attempt_count ?? 1) + 1);
  const { error: updateError } = await supabase
    .from("stripe_webhook_events")
    .update({
      event_type: event.type,
      status: "processing",
      attempt_count: nextAttempt,
      last_error: null,
      updated_at: now,
    })
    .eq("event_id", event.id);

  if (updateError) {
    if (isMissingTableError(updateError.message)) {
      return "untracked";
    }
    throw new Error(updateError.message);
  }

  return "process";
}

async function markWebhookEventStatus(
  eventId: string,
  status: "processed" | "failed",
  lastError?: string,
) {
  const supabase = createSupabaseAdminClient();
  const now = new Date().toISOString();
  const payload =
    status === "processed"
      ? {
          status,
          processed_at: now,
          updated_at: now,
          last_error: null,
        }
      : {
          status,
          updated_at: now,
          last_error: (lastError ?? "Unknown webhook processing error").slice(0, 1000),
        };

  const { error } = await supabase
    .from("stripe_webhook_events")
    .update(payload)
    .eq("event_id", eventId);

  if (error && !isMissingTableError(error.message)) {
    console.error("Failed to update webhook tracking status.", toSafeErrorRecord(error));
  }
}

async function handleCheckoutCompleted(event: Stripe.Event, stripe: Stripe) {
  const session = event.data.object as Stripe.Checkout.Session;

  if (session.mode === "subscription" && session.subscription) {
    const subscriptionId =
      typeof session.subscription === "string" ? session.subscription : session.subscription.id;
    const subscription = await stripe.subscriptions.retrieve(subscriptionId);

    if (session.client_reference_id && !subscription.metadata.userId) {
      await stripe.subscriptions.update(subscription.id, {
        metadata: {
          ...subscription.metadata,
          userId: session.client_reference_id,
        },
      });
    }

    const freshSubscription = await stripe.subscriptions.retrieve(subscription.id);
    await upsertSubscriptionFromObject(freshSubscription);
    return;
  }

  if (session.mode !== "payment") {
    return;
  }

  const metadata = session.metadata ?? {};
  if (metadata.checkoutType !== "language_exam_unlock") {
    return;
  }

  const level = metadata.level;
  if (level !== "beginner" && level !== "intermediate" && level !== "advanced") {
    return;
  }

  const userId = metadata.userId ?? session.client_reference_id ?? null;
  if (!userId || typeof userId !== "string") {
    throw new Error("Missing userId metadata for language exam unlock checkout session.");
  }

  const paymentIntentId =
    typeof session.payment_intent === "string"
      ? session.payment_intent
      : session.payment_intent?.id ?? null;
  if (!paymentIntentId) {
    throw new Error("Missing payment_intent for language exam unlock checkout session.");
  }

  const studentProfileIdRaw = metadata.studentProfileId;
  const geoTierRaw = metadata.geoTier;

  const admin = createSupabaseAdminClient();
  await recordLanguageExamUnlockPurchase(admin, {
    userId,
    studentProfileId:
      typeof studentProfileIdRaw === "string" && studentProfileIdRaw.length > 0
        ? studentProfileIdRaw
        : undefined,
    level,
    stripePaymentIntentId: paymentIntentId,
    pricePaidCents:
      typeof session.amount_total === "number" ? Math.max(1, session.amount_total) : undefined,
    currency: session.currency ? session.currency.toUpperCase() : undefined,
    provider: "stripe_checkout",
    geoTierOverride:
      geoTierRaw === "tier_1" ||
      geoTierRaw === "tier_2" ||
      geoTierRaw === "tier_3" ||
      geoTierRaw === "tier_4" ||
      geoTierRaw === "tier_5"
        ? geoTierRaw
        : undefined,
    metadata: {
      stripeCheckoutSessionId: session.id,
      checkoutType: metadata.checkoutType,
    },
  });
}

async function handleChargeRefunded(event: Stripe.Event) {
  const charge = event.data.object as Stripe.Charge;
  const paymentIntentId =
    typeof charge.payment_intent === "string"
      ? charge.payment_intent
      : charge.payment_intent?.id ?? null;
  if (!paymentIntentId) {
    return;
  }

  const refundedAmount = Math.max(0, Number(charge.amount_refunded ?? 0));
  const originalAmount = Math.max(0, Number(charge.amount ?? 0));
  const isFullRefund = originalAmount > 0 && refundedAmount >= originalAmount;

  const admin = createSupabaseAdminClient();
  await reverseLanguageExamUnlockForRefund(admin, {
    stripePaymentIntentId: paymentIntentId,
    refundEventId: event.id,
    refundedAmountCents: refundedAmount,
    isFullRefund,
  });
}

async function handleSubscriptionUpdated(event: Stripe.Event) {
  const subscription = event.data.object as Stripe.Subscription;
  await upsertSubscriptionFromObject(subscription);
}

async function handleSubscriptionDeleted(event: Stripe.Event) {
  const subscription = event.data.object as Stripe.Subscription;
  await upsertSubscriptionFromObject(subscription);
}

async function handleInvoicePaymentFailed(event: Stripe.Event, stripe: Stripe) {
  const invoice = event.data.object as Stripe.Invoice & {
    subscription?: string | Stripe.Subscription | null;
  };
  const subscriptionId =
    typeof invoice.subscription === "string"
      ? invoice.subscription
      : invoice.subscription?.id ?? null;

  if (!subscriptionId) {
    return;
  }

  const subscription = await stripe.subscriptions.retrieve(subscriptionId);
  await upsertSubscriptionFromObject(subscription);
}

export async function POST(request: NextRequest) {
  if (!serverEnv.STRIPE_SECRET_KEY || !serverEnv.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json(
      { error: "Missing Stripe webhook configuration." },
      { status: 500 },
    );
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing stripe-signature header." }, { status: 400 });
  }

  const payload = await request.text();
  const stripe = createStripeServerClient(serverEnv.STRIPE_SECRET_KEY);

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      payload,
      signature,
      serverEnv.STRIPE_WEBHOOK_SECRET,
    );
  } catch (error) {
    console.error("Stripe webhook signature validation failed.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Invalid webhook signature." }, { status: 400 });
  }

  let claimResult: WebhookClaimResult = "untracked";

  try {
    claimResult = await claimWebhookEvent(event);
    if (claimResult === "duplicate") {
      return NextResponse.json({ received: true, eventType: event.type, duplicate: true });
    }

    switch (event.type) {
      case "checkout.session.completed":
        await handleCheckoutCompleted(event, stripe);
        break;
      case "customer.subscription.created":
      case "customer.subscription.updated":
        await handleSubscriptionUpdated(event);
        break;
      case "customer.subscription.deleted":
        await handleSubscriptionDeleted(event);
        break;
      case "invoice.payment_failed":
        await handleInvoicePaymentFailed(event, stripe);
        break;
      case "charge.refunded":
        await handleChargeRefunded(event);
        break;
      default:
        console.warn("Stripe webhook event skipped (unhandled type):", event.type);
        break;
    }

    if (claimResult !== "untracked") {
      await markWebhookEventStatus(event.id, "processed");
    }
  } catch (error) {
    if (claimResult !== "untracked") {
      await markWebhookEventStatus(
        event.id,
        "failed",
        error instanceof Error ? error.message : "Unknown error",
      );
    }

    return NextResponse.json(
      {
        error: "Webhook processing failed",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ received: true, eventType: event.type, duplicate: false });
}



