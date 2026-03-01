import type Stripe from "stripe";

type MetadataValue = string | undefined;

export type VerifyStripePaymentIntentInput = {
  stripe: Stripe;
  paymentIntentId: string;
  expectedUserId: string;
  requiredMetadata?: Record<string, MetadataValue>;
  expectedCurrency?: string;
  minAmountCents?: number;
};

export type VerifyStripePaymentIntentResult =
  | {
      ok: true;
      paymentIntent: Stripe.PaymentIntent;
    }
  | {
      ok: false;
      reason:
        | "not_found"
        | "invalid_status"
        | "missing_user_metadata"
        | "user_mismatch"
        | "metadata_mismatch"
        | "currency_mismatch"
        | "amount_too_low";
    };

function normalizeCurrency(value: string | null | undefined) {
  if (!value) return null;
  const normalized = value.trim().toLowerCase();
  return normalized.length === 3 ? normalized : null;
}

function normalizeAmount(value: number | null | undefined) {
  if (typeof value !== "number" || !Number.isFinite(value)) return null;
  return Math.max(0, Math.trunc(value));
}

export async function verifyStripePaymentIntent(
  input: VerifyStripePaymentIntentInput,
): Promise<VerifyStripePaymentIntentResult> {
  let paymentIntent: Stripe.PaymentIntent;
  try {
    paymentIntent = await input.stripe.paymentIntents.retrieve(input.paymentIntentId);
  } catch {
    return { ok: false, reason: "not_found" };
  }

  if (paymentIntent.status !== "succeeded") {
    return { ok: false, reason: "invalid_status" };
  }

  const metadata = paymentIntent.metadata ?? {};
  const metadataUserId = typeof metadata.userId === "string" ? metadata.userId : null;
  if (!metadataUserId) {
    return { ok: false, reason: "missing_user_metadata" };
  }

  if (metadataUserId !== input.expectedUserId) {
    return { ok: false, reason: "user_mismatch" };
  }

  const requiredMetadata = input.requiredMetadata ?? {};
  for (const [key, expectedValue] of Object.entries(requiredMetadata)) {
    if (!expectedValue) continue;
    if (metadata[key] !== expectedValue) {
      return { ok: false, reason: "metadata_mismatch" };
    }
  }

  const expectedCurrency = normalizeCurrency(input.expectedCurrency);
  const intentCurrency = normalizeCurrency(paymentIntent.currency);
  if (expectedCurrency && (!intentCurrency || expectedCurrency !== intentCurrency)) {
    return { ok: false, reason: "currency_mismatch" };
  }

  const minAmountCents = normalizeAmount(input.minAmountCents);
  const settledAmount = normalizeAmount(paymentIntent.amount_received ?? paymentIntent.amount);
  if (
    minAmountCents !== null
    && (settledAmount === null || settledAmount < minAmountCents)
  ) {
    return { ok: false, reason: "amount_too_low" };
  }

  return { ok: true, paymentIntent };
}
