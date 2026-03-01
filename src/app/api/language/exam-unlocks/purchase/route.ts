import { NextResponse } from "next/server";
import { z } from "zod";
import { createStripeServerClient } from "@/lib/billing/stripe-client";
import { verifyStripePaymentIntent } from "@/lib/billing/stripe-payment-verification";
import { serverEnv } from "@/lib/config/env";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import {
  checkLanguageExamUnlockEntitlement,
  getLanguageExamUnlockPrice,
  getLanguageRuntimeConfig,
  isMissingLanguageUnlockTableError,
  recordLanguageExamUnlockPurchase,
} from "@/lib/language-learning";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const purchaseSchema = z.object({
  level: z.enum(["beginner", "intermediate", "advanced"]),
  stripePaymentIntentId: z.string().trim().min(4).max(255),
  studentProfileId: z.string().uuid().optional(),
  pricePaidCents: z.number().int().positive().max(100_000).optional(),
  currency: z.string().trim().length(3).optional(),
  provider: z.string().trim().min(2).max(64).optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export async function POST(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:billing:language-unlock-purchase", {
    max: 30,
    windowMs: 5 * 60 * 1000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many unlock purchase attempts. Please retry shortly." },
      {
        status: 429,
        headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
      },
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

  const body = await request.json().catch(() => null);
  const parsed = purchaseSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid request payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  if (parsed.data.studentProfileId) {
    const { data: profile } = await supabase
      .from("student_profiles")
      .select("id")
      .eq("id", parsed.data.studentProfileId)
      .eq("account_id", user.id)
      .maybeSingle();
    if (!profile) {
      return NextResponse.json(
        { error: "Student profile not found for current account." },
        { status: 403 },
      );
    }
  }

  const admin = createSupabaseAdminClient();
  try {
    if (!serverEnv.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Missing Stripe configuration in environment variables." },
        { status: 500 },
      );
    }

    const quote = await getLanguageExamUnlockPrice(admin, {
      userId: user.id,
      studentProfileId: parsed.data.studentProfileId,
      level: parsed.data.level,
    });

    const stripe = createStripeServerClient(serverEnv.STRIPE_SECRET_KEY);
    const verification = await verifyStripePaymentIntent({
      stripe,
      paymentIntentId: parsed.data.stripePaymentIntentId,
      expectedUserId: user.id,
      requiredMetadata: {
        checkoutType: "language_exam_unlock",
        level: parsed.data.level,
        ...(parsed.data.studentProfileId
          ? { studentProfileId: parsed.data.studentProfileId }
          : {}),
      },
      expectedCurrency: quote.currency,
      minAmountCents: quote.priceCents,
    });

    if (!verification.ok) {
      return NextResponse.json(
        {
          error: "Payment verification failed for this unlock request.",
          code: verification.reason,
        },
        { status: 402 },
      );
    }

    const runtimeConfig = await getLanguageRuntimeConfig();
    const purchase = await recordLanguageExamUnlockPurchase(admin, {
      userId: user.id,
      studentProfileId: parsed.data.studentProfileId,
      level: parsed.data.level,
      stripePaymentIntentId: verification.paymentIntent.id,
      pricePaidCents:
        typeof verification.paymentIntent.amount_received === "number"
          ? verification.paymentIntent.amount_received
          : quote.priceCents,
      currency: verification.paymentIntent.currency.toUpperCase(),
      provider: "stripe_checkout",
      metadata: {
        source: "language_exam_unlock_verified_intent",
      },
    });

    const entitlement = await checkLanguageExamUnlockEntitlement(admin, {
      userId: user.id,
      studentProfileId: parsed.data.studentProfileId,
      level: parsed.data.level,
    });

    return NextResponse.json({
      success: true,
      purchase,
      quote,
      entitlement,
      runtimeConfig,
    });
  } catch (error) {
    if (isMissingLanguageUnlockTableError(error)) {
      return NextResponse.json(
        {
          error: "Language exam unlock tables are not migrated yet.",
          runtimeConfig: await getLanguageRuntimeConfig(),
        },
        { status: 503 },
      );
    }

    console.error("Failed to record language exam unlock purchase.", toSafeErrorRecord(error));
    return NextResponse.json(
      {
        error: "Failed to record language exam unlock purchase.",
      },
      { status: 500 },
    );
  }
}
