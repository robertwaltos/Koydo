import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { serverEnv } from "@/lib/config/env";
import { createStripeServerClient } from "@/lib/billing/stripe-client";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const STRIPE_API_TIMEOUT_MS = 12_000;

async function withStripeTimeout<T>(promise: Promise<T>): Promise<T> {
  let timeoutHandle: NodeJS.Timeout | null = null;
  const timeoutPromise = new Promise<never>((_, reject) => {
    timeoutHandle = setTimeout(() => reject(new Error("STRIPE_API_TIMEOUT")), STRIPE_API_TIMEOUT_MS);
  });

  try {
    return await Promise.race([promise, timeoutPromise]);
  } finally {
    if (timeoutHandle) {
      clearTimeout(timeoutHandle);
    }
  }
}

export async function POST(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:billing:stripe-portal", {
    max: 30,
    windowMs: 5 * 60 * 1000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many portal requests. Please retry shortly." },
      {
        status: 429,
        headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
      },
    );
  }

  if (serverEnv.BILLING_PROVIDER_MODE === "app_store_iap") {
    return NextResponse.json(
      {
        error: "External billing portal is disabled in app-store mode. Use in-app subscription management.",
      },
      { status: 403 }
    );
  }

  if (!serverEnv.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: "Missing Stripe configuration." }, { status: 500 });
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data: subscription, error } = await supabase
    .from("subscriptions")
    .select("stripe_customer_id")
    .eq("user_id", user.id)
    .order("updated_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    console.error("Failed to load subscription for Stripe portal.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to load subscription details." }, { status: 500 });
  }

  const stripe = createStripeServerClient(serverEnv.STRIPE_SECRET_KEY);
  let stripeCustomerId = subscription?.stripe_customer_id ?? null;

  if (!stripeCustomerId && user.email) {
    try {
      const customerList = await stripe.customers.list({ email: user.email, limit: 10 });
      const uniqueIds = [...new Set(customerList.data.map((customer) => customer.id))];
      if (uniqueIds.length === 1) {
        [stripeCustomerId] = uniqueIds;
      }
    } catch (lookupError) {
      console.error("Failed Stripe customer lookup for portal fallback.", toSafeErrorRecord(lookupError));
    }
  }

  if (!stripeCustomerId) {
    return NextResponse.json(
      { error: "No customer record found. Complete checkout first or contact support." },
      { status: 400 },
    );
  }

  let session: Stripe.BillingPortal.Session;

  try {
    session = await withStripeTimeout(
      stripe.billingPortal.sessions.create({
        customer: stripeCustomerId,
        return_url: `${serverEnv.NEXT_PUBLIC_APP_URL}/account/settings`,
      }),
    );
  } catch (portalError) {
    console.error("Failed to create Stripe portal session.", toSafeErrorRecord(portalError));
    if (portalError instanceof Error && portalError.message === "STRIPE_API_TIMEOUT") {
      return NextResponse.json(
        { error: "Stripe is taking too long to respond. Please retry in a moment." },
        { status: 504 },
      );
    }
    return NextResponse.json({ error: "Unable to open billing portal." }, { status: 500 });
  }

  return NextResponse.json({ portalUrl: session.url });
}



