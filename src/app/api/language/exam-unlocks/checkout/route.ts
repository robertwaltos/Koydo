import { NextResponse } from "next/server";
import { z } from "zod";
import type Stripe from "stripe";
import { createStripeServerClient } from "@/lib/billing/stripe-client";
import { serverEnv } from "@/lib/config/env";
import { getLanguageExamUnlockPrice } from "@/lib/language-learning";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const requestSchema = z.object({
  level: z.enum(["beginner", "intermediate", "advanced"]),
  studentProfileId: z.string().uuid().optional(),
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
  }

  return {
    message: "Unable to create exam unlock checkout session right now. Please try again.",
    status: 500,
  };
}

export async function POST(request: Request) {
  const rateLimit = enforceIpRateLimit(request, "api:billing:language-unlock-checkout", {
    max: 25,
    windowMs: 5 * 60 * 1000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many unlock checkout attempts. Please retry shortly." },
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
  const quote = await getLanguageExamUnlockPrice(admin, {
    userId: user.id,
    studentProfileId: parsed.data.studentProfileId,
    level: parsed.data.level,
  });

  const stripe = createStripeServerClient(serverEnv.STRIPE_SECRET_KEY);
  const currency = quote.currency.toLowerCase();
  const metadata = {
    checkoutType: "language_exam_unlock",
    level: quote.level,
    userId: user.id,
    geoTier: quote.geoTier,
    priceCents: String(quote.priceCents),
    additionalAttempts: String(quote.additionalAttempts),
    ...(parsed.data.studentProfileId
      ? { studentProfileId: parsed.data.studentProfileId }
      : {}),
  };
  const createSessionPayload: Stripe.Checkout.SessionCreateParams = {
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency,
          unit_amount: quote.priceCents,
          product_data: {
            name: `Language Exam Unlock (${quote.level})`,
            description: `${quote.additionalAttempts} additional scored attempts`,
          },
        },
        quantity: 1,
      },
    ],
    success_url: `${serverEnv.NEXT_PUBLIC_APP_URL}/billing/success?product=language_exam_unlock&level=${quote.level}`,
    cancel_url: `${serverEnv.NEXT_PUBLIC_APP_URL}/billing/language`,
    client_reference_id: user.id,
    customer_email: user.email ?? undefined,
    metadata,
    payment_intent_data: {
      metadata,
    },
  };

  let session: Stripe.Checkout.Session;
  try {
    session = await withStripeTimeout(stripe.checkout.sessions.create(createSessionPayload));
  } catch (error) {
    console.error("Failed to create Stripe exam unlock checkout session:", toSafeErrorRecord(error));
    const mapped = getStripeUserFacingError(error);
    return NextResponse.json({ error: mapped.message }, { status: mapped.status });
  }

  return NextResponse.json({
    checkoutUrl: session.url,
    quote,
  });
}
