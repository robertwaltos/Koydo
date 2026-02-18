import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { serverEnv } from "@/lib/config/env";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

function toIsoDate(epochSeconds?: number | null) {
  return epochSeconds ? new Date(epochSeconds * 1000).toISOString() : null;
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

async function handleCheckoutCompleted(event: Stripe.Event, stripe: Stripe) {
  const session = event.data.object as Stripe.Checkout.Session;
  if (session.mode !== "subscription" || !session.subscription) {
    return;
  }

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
}

async function handleSubscriptionUpdated(event: Stripe.Event) {
  const subscription = event.data.object as Stripe.Subscription;
  await upsertSubscriptionFromObject(subscription);
}

async function handleSubscriptionDeleted(event: Stripe.Event) {
  const subscription = event.data.object as Stripe.Subscription;
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
  const stripe = new Stripe(serverEnv.STRIPE_SECRET_KEY);

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      payload,
      signature,
      serverEnv.STRIPE_WEBHOOK_SECRET,
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Invalid webhook signature.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 400 },
    );
  }

  try {
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
      default:
        break;
    }
  } catch (error) {
    return NextResponse.json(
      {
        error: "Webhook processing failed",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ received: true, eventType: event.type });
}
