import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { createStripeServerClient } from "@/lib/billing/stripe-client";
import { serverEnv } from "@/lib/config/env";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isMissingTestingTableError } from "@/lib/testing/api-utils";
import {
  TESTING_EXAM_UNLOCK_CURRENCY,
  TESTING_EXAM_UNLOCK_PRICE_CENTS,
} from "@/lib/testing/unlock-pricing";

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

export async function POST(
  request: Request,
  context: { params: Promise<{ examId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:billing:testing-exam-unlock-checkout", {
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

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { examId } = await context.params;
  const admin = createSupabaseAdminClient();
  const { data: exam, error: examError } = await admin
    .from("testing_exams")
    .select("id, exam_code, name, is_active")
    .eq("id", examId)
    .eq("is_active", true)
    .maybeSingle();

  if (examError || !exam) {
    if (isMissingTestingTableError(examError)) {
      return NextResponse.json(
        { error: "Testing database tables are not ready. Run Supabase migrations first." },
        { status: 503 },
      );
    }
    return NextResponse.json({ error: "Exam not found." }, { status: 404 });
  }

  const { data: entitlement } = await admin
    .from("user_exam_entitlements")
    .select("entitlement_type")
    .eq("user_id", user.id)
    .eq("exam_id", exam.id)
    .maybeSingle();

  if (entitlement?.entitlement_type === "full") {
    return NextResponse.json(
      {
        alreadyUnlocked: true,
        examId: exam.id,
      },
      { status: 409 },
    );
  }

  const metadata = {
    checkoutType: "testing_exam_unlock",
    examId: exam.id,
    examCode: exam.exam_code,
    userId: user.id,
  };

  const createSessionPayload: Stripe.Checkout.SessionCreateParams = {
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: TESTING_EXAM_UNLOCK_CURRENCY.toLowerCase(),
          unit_amount: TESTING_EXAM_UNLOCK_PRICE_CENTS,
          product_data: {
            name: `${exam.exam_code.toUpperCase()} Exam Unlock`,
            description: "One-time full access unlock for premium exam attempts.",
          },
        },
        quantity: 1,
      },
    ],
    success_url: `${serverEnv.NEXT_PUBLIC_APP_URL}/testing?checkout=success&examId=${exam.id}&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${serverEnv.NEXT_PUBLIC_APP_URL}/testing`,
    client_reference_id: user.id,
    customer_email: user.email ?? undefined,
    metadata,
    payment_intent_data: {
      metadata,
    },
  };

  const stripe = createStripeServerClient(serverEnv.STRIPE_SECRET_KEY);
  let session: Stripe.Checkout.Session;
  try {
    session = await withStripeTimeout(stripe.checkout.sessions.create(createSessionPayload));
  } catch (error) {
    console.error("Failed to create Stripe testing exam unlock checkout session.", toSafeErrorRecord(error));
    const mapped = getStripeUserFacingError(error);
    return NextResponse.json({ error: mapped.message }, { status: mapped.status });
  }

  return NextResponse.json({
    checkoutUrl: session.url,
    examId: exam.id,
  });
}
