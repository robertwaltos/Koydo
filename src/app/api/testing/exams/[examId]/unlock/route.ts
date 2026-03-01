import { NextResponse } from "next/server";
import { z } from "zod";
import { createStripeServerClient } from "@/lib/billing/stripe-client";
import { verifyStripePaymentIntent } from "@/lib/billing/stripe-payment-verification";
import { serverEnv } from "@/lib/config/env";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isMissingTestingTableError } from "@/lib/testing/api-utils";
import {
  centsToFixedCurrencyAmount,
  TESTING_EXAM_UNLOCK_CURRENCY,
  TESTING_EXAM_UNLOCK_PRICE_CENTS,
} from "@/lib/testing/unlock-pricing";

const unlockSchema = z.union([
  z.object({
    stripePaymentIntentId: z
      .string()
      .trim()
      .regex(/^pi_[A-Za-z0-9_]+$/, "Invalid Stripe payment intent id."),
  }),
  z.object({
    stripeCheckoutSessionId: z
      .string()
      .trim()
      .regex(/^cs_[A-Za-z0-9_]+$/, "Invalid Stripe checkout session id."),
  }),
]);

function isMissingColumnError(error: unknown, columnName: string) {
  if (!error || typeof error !== "object") return false;
  const code = "code" in error ? String((error as { code?: unknown }).code ?? "") : "";
  const message = "message" in error ? String((error as { message?: unknown }).message ?? "") : "";
  return code === "42703" || message.toLowerCase().includes(columnName.toLowerCase());
}

function isDuplicateKeyError(code?: string | null) {
  return code === "23505";
}

type VerifyCheckoutSessionResult =
  | {
      ok: true;
      paymentIntentId: string;
      amountCents: number;
      currency: string;
    }
  | {
      ok: false;
      reason: "not_found" | "invalid_status" | "metadata_mismatch" | "user_mismatch" | "amount_too_low" | "currency_mismatch";
    };

async function verifyTestingUnlockCheckoutSession(input: {
  stripe: ReturnType<typeof createStripeServerClient>;
  checkoutSessionId: string;
  expectedUserId: string;
  expectedExamId: string;
}): Promise<VerifyCheckoutSessionResult> {
  let session;
  try {
    session = await input.stripe.checkout.sessions.retrieve(input.checkoutSessionId);
  } catch {
    return { ok: false, reason: "not_found" };
  }

  if (session.mode !== "payment" || session.payment_status !== "paid") {
    return { ok: false, reason: "invalid_status" };
  }

  const metadata = session.metadata ?? {};
  if (metadata.checkoutType !== "testing_exam_unlock" || metadata.examId !== input.expectedExamId) {
    return { ok: false, reason: "metadata_mismatch" };
  }
  if (metadata.userId !== input.expectedUserId) {
    return { ok: false, reason: "user_mismatch" };
  }

  const paymentIntentId =
    typeof session.payment_intent === "string"
      ? session.payment_intent
      : session.payment_intent?.id ?? null;
  if (!paymentIntentId) {
    return { ok: false, reason: "invalid_status" };
  }

  const amountCents = typeof session.amount_total === "number" ? Math.max(0, session.amount_total) : 0;
  if (amountCents < TESTING_EXAM_UNLOCK_PRICE_CENTS) {
    return { ok: false, reason: "amount_too_low" };
  }

  const currency = session.currency ? session.currency.toUpperCase() : TESTING_EXAM_UNLOCK_CURRENCY;
  if (currency !== TESTING_EXAM_UNLOCK_CURRENCY) {
    return { ok: false, reason: "currency_mismatch" };
  }

  return { ok: true, paymentIntentId, amountCents, currency };
}

export async function POST(
  request: Request,
  context: { params: Promise<{ examId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:billing:testing-exam-unlock-finalize", {
    max: 30,
    windowMs: 5 * 60 * 1000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many unlock finalize attempts. Please retry shortly." },
      {
        status: 429,
        headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
      },
    );
  }

  if (!serverEnv.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: "Missing Stripe configuration in environment variables." },
      { status: 500 },
    );
  }

  const { examId } = await context.params;
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const parsed = unlockSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();
  const { data: exam, error: examError } = await admin
    .from("testing_exams")
    .select("id, exam_code, is_active")
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

  const { data: entitlementRow, error: entitlementError } = await admin
    .from("user_exam_entitlements")
    .select("id, entitlement_type")
    .eq("user_id", user.id)
    .eq("exam_id", exam.id)
    .maybeSingle();

  if (entitlementError) {
    console.error("Unexpected API error.", toSafeErrorRecord(entitlementError));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  if (entitlementRow?.entitlement_type === "full") {
    return NextResponse.json({
      success: true,
      alreadyUnlocked: true,
      examId: exam.id,
      examCode: exam.exam_code,
      entitlementType: "full",
    });
  }

  const stripe = createStripeServerClient(serverEnv.STRIPE_SECRET_KEY);
  let verifiedPaymentIntentId: string;
  let verifiedAmountCents: number;
  let verifiedCurrency: string;

  if ("stripeCheckoutSessionId" in parsed.data) {
    const sessionVerification = await verifyTestingUnlockCheckoutSession({
      stripe,
      checkoutSessionId: parsed.data.stripeCheckoutSessionId,
      expectedUserId: user.id,
      expectedExamId: exam.id,
    });

    if (!sessionVerification.ok) {
      return NextResponse.json(
        {
          error: "Payment verification failed for this unlock request.",
          code: sessionVerification.reason,
        },
        { status: 402 },
      );
    }

    verifiedPaymentIntentId = sessionVerification.paymentIntentId;
    verifiedAmountCents = sessionVerification.amountCents;
    verifiedCurrency = sessionVerification.currency;
  } else {
    const verification = await verifyStripePaymentIntent({
      stripe,
      paymentIntentId: parsed.data.stripePaymentIntentId,
      expectedUserId: user.id,
      requiredMetadata: {
        checkoutType: "testing_exam_unlock",
        examId: exam.id,
      },
      expectedCurrency: TESTING_EXAM_UNLOCK_CURRENCY,
      minAmountCents: TESTING_EXAM_UNLOCK_PRICE_CENTS,
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

    verifiedPaymentIntentId = verification.paymentIntent.id;
    verifiedAmountCents = typeof verification.paymentIntent.amount_received === "number"
      ? verification.paymentIntent.amount_received
      : TESTING_EXAM_UNLOCK_PRICE_CENTS;
    verifiedCurrency = verification.paymentIntent.currency.toUpperCase();
  }

  const nowIso = new Date().toISOString();

  const purchaseInsertWithIdempotency = await admin
    .from("testing_purchases")
    .insert({
      user_id: user.id,
      exam_id: exam.id,
      amount: centsToFixedCurrencyAmount(verifiedAmountCents),
      currency: verifiedCurrency,
      status: "completed",
      provider: "stripe_checkout",
      provider_transaction_id: verifiedPaymentIntentId,
      idempotency_key: `testing_unlock:${verifiedPaymentIntentId}`,
      metadata: {
        flow: "testing_unlock_verified_intent",
        checkoutType: "testing_exam_unlock",
      },
      purchased_at: nowIso,
    })
    .select("id, status, amount, currency, provider_transaction_id")
    .single();

  const purchaseInsertFallback = async () =>
    admin
      .from("testing_purchases")
      .insert({
        user_id: user.id,
        exam_id: exam.id,
        amount: centsToFixedCurrencyAmount(verifiedAmountCents),
        currency: verifiedCurrency,
        status: "completed",
        provider: "stripe_checkout",
        provider_transaction_id: verifiedPaymentIntentId,
        metadata: {
          flow: "testing_unlock_verified_intent",
          checkoutType: "testing_exam_unlock",
        },
        purchased_at: nowIso,
      })
      .select("id, status, amount, currency, provider_transaction_id")
      .single();

  const { data: purchaseFromInsert, error: purchaseInsertError } = purchaseInsertWithIdempotency.error
    && isMissingColumnError(purchaseInsertWithIdempotency.error, "idempotency_key")
      ? await purchaseInsertFallback()
      : purchaseInsertWithIdempotency;

  let purchase = purchaseFromInsert;
  if (purchaseInsertError) {
    if (isDuplicateKeyError(purchaseInsertError.code)) {
      const { data: duplicatePurchase, error: duplicateLookupError } = await admin
        .from("testing_purchases")
        .select("id, status, amount, currency, provider_transaction_id")
        .eq("provider_transaction_id", verifiedPaymentIntentId)
        .maybeSingle();

      if (duplicateLookupError || !duplicatePurchase) {
        console.error("Unexpected API error.", toSafeErrorRecord(duplicateLookupError ?? purchaseInsertError));
        return NextResponse.json({ error: "Internal server error." }, { status: 500 });
      }

      purchase = duplicatePurchase;
    } else {
      console.error("Unexpected API error.", toSafeErrorRecord(purchaseInsertError));
      return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }
  }

  const entitlementUpsertWithState = await admin
    .from("user_exam_entitlements")
    .upsert(
      {
        user_id: user.id,
        exam_id: exam.id,
        entitlement_type: "full",
        state: "completed",
        unlocked_at: nowIso,
      },
      { onConflict: "user_id,exam_id" },
    );

  const entitlementUpsertFallback = async () =>
    admin
      .from("user_exam_entitlements")
      .upsert(
        {
          user_id: user.id,
          exam_id: exam.id,
          entitlement_type: "full",
          unlocked_at: nowIso,
        },
        { onConflict: "user_id,exam_id" },
      );

  const { error: upsertError } = entitlementUpsertWithState.error
    && isMissingColumnError(entitlementUpsertWithState.error, "state")
      ? await entitlementUpsertFallback()
      : entitlementUpsertWithState;

  if (upsertError) {
    console.error("Unexpected API error.", toSafeErrorRecord(upsertError));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  return NextResponse.json({
    success: true,
    alreadyUnlocked: false,
    examId: exam.id,
    examCode: exam.exam_code,
    entitlementType: "full",
    purchase,
  });
}
