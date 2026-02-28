import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { z } from "zod";
import { serverEnv } from "@/lib/config/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import {
  getActiveStripePriceId,
  getStripePriceIdForLanguagePlan,
} from "@/lib/billing/pricing";
import { createStripeServerClient } from "@/lib/billing/stripe-client";
import {
  getSubscriptionStatusLabel,
  requiresPortalManagement,
} from "@/lib/billing/subscription";
import type { LanguagePlanId } from "@/lib/language-learning/pricing";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const checkoutSchema = {
  mode: "subscription" as const,
  successUrlPath: "/billing/success",
  cancelUrlPath: "/billing/cancel",
};

const requestSchema = z.object({
  customerEmail: z.string().email().optional(),
  couponCode: z
    .string()
    .trim()
    .toUpperCase()
    .regex(/^[A-Z0-9_-]{3,64}$/, "Coupon code format is invalid.")
    .optional(),
  languagePlanId: z
    .enum([
      "language_plus_conservative",
      "language_family_conservative",
      "language_plus_growth",
      "language_family_growth",
      "language_school_annual",
    ])
    .optional(),
});

const STRIPE_API_TIMEOUT_MS = 12_000;

async function withStripeTimeout<T>(promise: Promise<T>): Promise<T> {
  let timeoutHandle: NodeJS.Timeout | null = null;
  const timeoutPromise = new Promise<never>((_, reject) => {
    timeoutHandle = setTimeout(() => {
      reject(new Error("STRIPE_API_TIMEOUT"));
    }, STRIPE_API_TIMEOUT_MS);
  });

  try {
    return await Promise.race([promise, timeoutPromise]);
  } finally {
    if (timeoutHandle) {
      clearTimeout(timeoutHandle);
    }
  }
}

function getStripeUserFacingError(error: unknown): { message: string; status: number } {
  if (error instanceof Error && error.message === "STRIPE_API_TIMEOUT") {
    return {
      message: "Stripe is taking too long to respond. Please retry in a moment.",
      status: 504,
    };
  }

  if (error && typeof error === "object") {
    const maybeType = "type" in error ? String((error as { type?: unknown }).type ?? "") : "";
    const maybeCode = "code" in error ? String((error as { code?: unknown }).code ?? "") : "";
    const maybeDeclineCode =
      "decline_code" in error ? String((error as { decline_code?: unknown }).decline_code ?? "") : "";

    if (maybeType === "StripeCardError" || maybeCode === "card_declined" || maybeDeclineCode.length > 0) {
      return {
        message: "Your card was declined. Please use a different card or contact your bank.",
        status: 402,
      };
    }

    if (maybeCode === "coupon_invalid" || maybeCode === "invalid_coupon") {
      return {
        message: "That coupon code is invalid or expired. Please check and try again.",
        status: 400,
      };
    }
  }

  return {
    message: "Unable to create checkout session right now. Please try again.",
    status: 500,
  };
}

export async function POST(request: Request) {
  const rateLimit = enforceIpRateLimit(request, "api:billing:stripe-checkout", {
    max: 20,
    windowMs: 5 * 60 * 1000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many checkout attempts. Please retry shortly." },
      {
        status: 429,
        headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
      },
    );
  }

  if (serverEnv.BILLING_PROVIDER_MODE === "app_store_iap") {
    return NextResponse.json(
      {
        error:
          "External checkout is disabled in app-store mode. Use in-app purchase flow for this build.",
      },
      { status: 403 },
    );
  }

  if (!serverEnv.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: "Missing Stripe configuration in environment variables." },
      { status: 500 },
    );
  }

  const body = await request.json().catch(() => ({}));
  const parsed = requestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const selectedLanguagePlanId =
    (parsed.data.languagePlanId as LanguagePlanId | undefined) ?? null;
  const activePriceId = selectedLanguagePlanId
    ? await getStripePriceIdForLanguagePlan(selectedLanguagePlanId)
    : await getActiveStripePriceId();
  if (!activePriceId) {
    return NextResponse.json(
      {
        error: selectedLanguagePlanId
          ? `No Stripe price configured for plan ${selectedLanguagePlanId}.`
          : "No active Stripe price configured.",
      },
      { status: 500 },
    );
  }

  const supabase = await createSupabaseServerClient();
  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError || !userData.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = userData.user.id;
  const email = parsed.data.customerEmail ?? userData.user.email;

  const { data: existingSubscription, error: existingSubscriptionError } = await supabase
    .from("subscriptions")
    .select("status, stripe_customer_id")
    .eq("user_id", userId)
    .order("updated_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (existingSubscriptionError) {
    console.error("Failed to resolve existing Stripe customer.", toSafeErrorRecord(existingSubscriptionError));
  }

  const existingStatus = existingSubscription?.status ?? null;
  if (requiresPortalManagement(existingStatus)) {
    return NextResponse.json(
      {
        error: `Subscription already exists (${getSubscriptionStatusLabel(existingStatus)}). Manage it from account settings.`,
        managePath: "/account/settings",
      },
      { status: 409 },
    );
  }

  const existingCustomerId = existingSubscription?.stripe_customer_id ?? null;
  if (!existingCustomerId && !email) {
    return NextResponse.json(
      { error: "Missing customer email for checkout." },
      { status: 400 },
    );
  }

  const stripe = createStripeServerClient(serverEnv.STRIPE_SECRET_KEY);
  let explicitPromotionCodeId: string | null = null;

  if (parsed.data.couponCode) {
    try {
      const promotionCodes = await withStripeTimeout(
        stripe.promotionCodes.list({
          code: parsed.data.couponCode,
          active: true,
          limit: 1,
        }),
      );
      explicitPromotionCodeId = promotionCodes.data[0]?.id ?? null;
    } catch (error) {
      const mapped = getStripeUserFacingError(error);
      return NextResponse.json({ error: mapped.message }, { status: mapped.status });
    }

    if (!explicitPromotionCodeId) {
      return NextResponse.json(
        { error: "That coupon code is invalid or expired. Please check and try again." },
        { status: 400 },
      );
    }
  }

  const createSessionPayload: Stripe.Checkout.SessionCreateParams = {
    mode: checkoutSchema.mode,
    line_items: [{ price: activePriceId, quantity: 1 }],
    success_url: `${serverEnv.NEXT_PUBLIC_APP_URL}${checkoutSchema.successUrlPath}`,
    cancel_url: `${serverEnv.NEXT_PUBLIC_APP_URL}${checkoutSchema.cancelUrlPath}`,
    allow_promotion_codes: true,
    subscription_data: {
      metadata: {
        userId,
        ...(selectedLanguagePlanId ? { languagePlanId: selectedLanguagePlanId } : {}),
      },
    },
    client_reference_id: userId,
    metadata: {
      userId,
      ...(selectedLanguagePlanId ? { languagePlanId: selectedLanguagePlanId } : {}),
    },
  };

  if (existingCustomerId) {
    createSessionPayload.customer = existingCustomerId;
  } else if (email) {
    createSessionPayload.customer_email = email;
  }

  if (explicitPromotionCodeId) {
    createSessionPayload.discounts = [{ promotion_code: explicitPromotionCodeId }];
  }

  let session: Stripe.Checkout.Session;

  try {
    session = await withStripeTimeout(stripe.checkout.sessions.create(createSessionPayload));
  } catch (error) {
    console.error("Failed to create Stripe checkout session.", toSafeErrorRecord(error));
    const mapped = getStripeUserFacingError(error);
    return NextResponse.json({ error: mapped.message }, { status: mapped.status });
  }

  return NextResponse.json({ checkoutUrl: session.url });
}



