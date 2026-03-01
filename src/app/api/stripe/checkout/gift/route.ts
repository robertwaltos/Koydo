import { createHash } from "crypto";
import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { z } from "zod";
import { createStripeServerClient } from "@/lib/billing/stripe-client";
import { serverEnv } from "@/lib/config/env";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getLanguagePlanById, type LanguagePlanId } from "@/lib/language-learning/pricing";
import { generateGiftCode, generateGiftCodeFromSeed } from "@/lib/organizations/tokens";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { isMissingOrganizationTableError } from "@/lib/organizations/errors";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const requestSchema = z.object({
  recipientEmail: z.string().email(),
  planId: z
    .enum([
      "language_plus_conservative",
      "language_family_conservative",
      "language_plus_growth",
      "language_family_growth",
      "language_school_annual",
    ])
    .default("language_plus_conservative"),
  months: z.coerce.number().int().min(1).max(24).default(12),
});

const idempotencyKeySchema = z
  .string()
  .trim()
  .min(8)
  .max(120)
  .regex(/^[A-Za-z0-9._:-]+$/);

type GiftCheckoutRow = {
  id: string;
  recipient_email: string;
  plan_id: string;
  months_granted: number;
  status: string;
  gift_code_preview: string;
  stripe_checkout_session_id: string | null;
  metadata: Record<string, unknown> | null;
};

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
    if (timeoutHandle) clearTimeout(timeoutHandle);
  }
}

function rateLimitExceededResponse(retryAfterSeconds: number) {
  return NextResponse.json(
    { error: "Too many requests. Please retry shortly." },
    {
      status: 429,
      headers: {
        "Retry-After": String(retryAfterSeconds),
      },
    },
  );
}

function getStripeUserFacingError(error: unknown): { message: string; status: number } {
  if (error instanceof Error && error.message === "STRIPE_API_TIMEOUT") {
    return {
      message: "Stripe is taking too long to respond. Please retry in a moment.",
      status: 504,
    };
  }

  return {
    message: "Unable to create gift checkout session right now. Please try again.",
    status: 500,
  };
}

function resolveGiftPriceCents(planId: LanguagePlanId, months: number) {
  const plan = getLanguagePlanById(planId);
  if (!plan) return null;

  const monthlyCents = Math.round(plan.priceUsdMonthly * 100);
  return Math.max(0, monthlyCents * months);
}

function readIdempotencyKey(request: Request) {
  const headerValue =
    request.headers.get("idempotency-key")
    ?? request.headers.get("x-idempotency-key")
    ?? null;
  if (!headerValue) return null;

  const parsed = idempotencyKeySchema.safeParse(headerValue);
  if (!parsed.success) return null;
  return parsed.data;
}

function buildIdempotencyFingerprint(input: {
  recipientEmail: string;
  planId: string;
  months: number;
}) {
  const normalized = [
    input.recipientEmail.toLowerCase(),
    input.planId,
    String(input.months),
  ].join("|");
  return createHash("sha256").update(normalized).digest("hex");
}

function buildGiftSeed(userId: string, idempotencyKey: string) {
  return createHash("sha256")
    .update(`${serverEnv.SUPABASE_SERVICE_ROLE_KEY}|gift-checkout|${userId}|${idempotencyKey}`)
    .digest("hex");
}

export async function POST(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:stripe:checkout:gift", {
    max: 25,
    windowMs: 5 * 60 * 1000,
  });
  if (!rateLimit.allowed) {
    return rateLimitExceededResponse(rateLimit.retryAfterSeconds);
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

  const body = await request.json().catch(() => null);
  const parsed = requestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const totalPriceCents = resolveGiftPriceCents(parsed.data.planId, parsed.data.months);
  if (totalPriceCents == null) {
    return NextResponse.json({ error: "Unable to resolve gift plan pricing." }, { status: 400 });
  }

  const normalizedRecipientEmail = parsed.data.recipientEmail.toLowerCase();
  const idempotencyKey = readIdempotencyKey(request);
  const idempotencyFingerprint = idempotencyKey
    ? buildIdempotencyFingerprint({
      recipientEmail: normalizedRecipientEmail,
      planId: parsed.data.planId,
      months: parsed.data.months,
    })
    : null;

  const giftCode = idempotencyKey
    ? generateGiftCodeFromSeed(buildGiftSeed(user.id, idempotencyKey))
    : generateGiftCode();
  const admin = createSupabaseAdminClient();
  const expiresAt = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString();
  const stripe = createStripeServerClient(serverEnv.STRIPE_SECRET_KEY);

  let giftRow: GiftCheckoutRow | null = null;
  if (idempotencyKey) {
    const { data: existingGiftData, error: existingGiftError } = await admin
      .from("gifted_memberships")
      .select("id, recipient_email, plan_id, months_granted, status, gift_code_preview, stripe_checkout_session_id, metadata")
      .eq("purchaser_user_id", user.id)
      .contains("metadata", { idempotencyKey })
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (existingGiftError) {
      if (isMissingOrganizationTableError(existingGiftError)) {
        return NextResponse.json(
          { error: "Gifting tables not migrated yet." },
          { status: 503 },
        );
      }
      console.error("Failed to load existing gift checkout for idempotency.", toSafeErrorRecord(existingGiftError));
      return NextResponse.json({ error: "Failed to load existing gift checkout." }, { status: 500 });
    }

    const existingGift = existingGiftData as GiftCheckoutRow | null;
    if (existingGift) {
      const existingFingerprint =
        typeof existingGift.metadata?.idempotencyFingerprint === "string"
          ? existingGift.metadata.idempotencyFingerprint
          : null;
      if (!existingFingerprint || existingFingerprint !== idempotencyFingerprint) {
        return NextResponse.json(
          {
            error:
              "Idempotency key was already used with a different gift checkout payload.",
          },
          { status: 409 },
        );
      }
      giftRow = existingGift;
    }
  }

  if (!giftRow) {
    const metadata: Record<string, unknown> = {
      source: "api:stripe:checkout:gift",
    };
    if (idempotencyKey && idempotencyFingerprint) {
      metadata.idempotencyKey = idempotencyKey;
      metadata.idempotencyFingerprint = idempotencyFingerprint;
    }

    const { data: insertedGift, error: giftInsertError } = await admin
      .from("gifted_memberships")
      .insert({
        purchaser_user_id: user.id,
        recipient_email: normalizedRecipientEmail,
        plan_id: parsed.data.planId,
        months_granted: parsed.data.months,
        status: "checkout_created",
        gift_code_hash: giftCode.hash,
        gift_code_preview: giftCode.preview,
        expires_at: expiresAt,
        metadata,
      })
      .select("id, recipient_email, plan_id, months_granted, status, gift_code_preview, stripe_checkout_session_id, metadata")
      .single();

    if (giftInsertError) {
      if (isMissingOrganizationTableError(giftInsertError)) {
        return NextResponse.json(
          { error: "Gifting tables not migrated yet." },
          { status: 503 },
        );
      }
      console.error("Failed to create gift checkout record.", toSafeErrorRecord(giftInsertError));
      return NextResponse.json({ error: "Failed to create gift checkout record." }, { status: 500 });
    }

    giftRow = insertedGift as GiftCheckoutRow;
  }

  let sessionUrl: string | null = null;
  if (giftRow.stripe_checkout_session_id) {
    try {
      const existingSession = await withStripeTimeout(
        stripe.checkout.sessions.retrieve(giftRow.stripe_checkout_session_id),
      );
      sessionUrl = existingSession.url;
    } catch {
      sessionUrl = null;
    }
  }

  if (!sessionUrl) {
    const checkoutMetadata = {
      checkoutType: "gift_membership",
      giftId: giftRow.id,
      purchaserUserId: user.id,
      recipientEmail: normalizedRecipientEmail,
      planId: parsed.data.planId,
      months: String(parsed.data.months),
      giftCodePreview: giftCode.preview,
      ...(idempotencyKey ? { idempotencyKey } : {}),
    };

    const createSessionPayload: Stripe.Checkout.SessionCreateParams = {
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: totalPriceCents,
            product_data: {
              name: "Koydo Gift Membership",
              description: `${parsed.data.months} month(s) of ${parsed.data.planId}`,
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${serverEnv.NEXT_PUBLIC_APP_URL}/billing/success?product=gift_membership`,
      cancel_url: `${serverEnv.NEXT_PUBLIC_APP_URL}/billing/cancel?product=gift_membership`,
      client_reference_id: user.id,
      customer_email: user.email ?? undefined,
      metadata: checkoutMetadata,
      payment_intent_data: {
        metadata: checkoutMetadata,
      },
    };

    let session: Stripe.Checkout.Session;
    try {
      const createPromise = idempotencyKey
        ? stripe.checkout.sessions.create(createSessionPayload, {
          idempotencyKey: `gift-membership:${user.id}:${idempotencyKey}`,
        })
        : stripe.checkout.sessions.create(createSessionPayload);
      session = await withStripeTimeout(createPromise);
    } catch (error) {
      console.error("Failed to create gift checkout session.", toSafeErrorRecord(error));
      const mapped = getStripeUserFacingError(error);
      return NextResponse.json({ error: mapped.message }, { status: mapped.status });
    }

    sessionUrl = session.url;

    const { error: updateGiftError } = await admin
      .from("gifted_memberships")
      .update({
        stripe_checkout_session_id: session.id,
        metadata: {
          ...((giftRow.metadata ?? {}) as Record<string, unknown>),
          source: "api:stripe:checkout:gift",
          stripeCheckoutSessionId: session.id,
          ...(idempotencyKey ? { idempotencyKey, idempotencyFingerprint } : {}),
        },
      })
      .eq("id", giftRow.id);

    if (updateGiftError) {
      console.error(
        "Gift row update failed after checkout creation.",
        toSafeErrorRecord(updateGiftError),
      );
    }
  }

  return NextResponse.json({
    checkoutUrl: sessionUrl,
    gift: {
      giftId: giftRow.id,
      recipientEmail: normalizedRecipientEmail,
      planId: parsed.data.planId,
      months: parsed.data.months,
      totalPriceCents,
      currency: "USD",
      giftCode: giftCode.code,
      giftCodePreview: giftCode.preview,
    },
  });
}
