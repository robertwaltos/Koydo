import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { z } from "zod";
import { createStripeServerClient } from "@/lib/billing/stripe-client";
import { serverEnv } from "@/lib/config/env";
import { getLanguageSkuById } from "@/lib/language-learning/pricing-spec";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { requireOrganizationMembership } from "@/lib/organizations/membership";
import { isMissingOrganizationTableError } from "@/lib/organizations/errors";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const requestSchema = z.object({
  organizationId: z.string().uuid(),
  seats: z.coerce.number().int().min(1).max(250_000),
  contactEmail: z.string().email().optional(),
});

const STRIPE_API_TIMEOUT_MS = 12_000;

type OrganizationRow = {
  id: string;
  name: string;
};

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
    message: "Unable to create organization checkout session right now. Please try again.",
    status: 500,
  };
}

export async function POST(request: Request) {
  const rateLimit = enforceIpRateLimit(request, "api:stripe:checkout:organization", {
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

  const admin = createSupabaseAdminClient();
  const membership = await requireOrganizationMembership(
    admin,
    user.id,
    parsed.data.organizationId,
    ["owner", "admin"],
  );
  if (!membership.ok) {
    return membership.response;
  }

  const { data: organizationData, error: organizationError } = await admin
    .from("organizations")
    .select("id, name")
    .eq("id", parsed.data.organizationId)
    .maybeSingle();

  if (organizationError) {
    if (isMissingOrganizationTableError(organizationError)) {
      return NextResponse.json(
        { error: "Organization tables not migrated yet." },
        { status: 503 },
      );
    }
    return NextResponse.json({ error: organizationError.message }, { status: 500 });
  }

  const organization = organizationData as OrganizationRow | null;
  if (!organization) {
    return NextResponse.json({ error: "Organization not found." }, { status: 404 });
  }

  const schoolSku = getLanguageSkuById("language_school_annual");
  if (!schoolSku) {
    return NextResponse.json({ error: "Missing school pricing SKU configuration." }, { status: 500 });
  }

  const unitPriceCents = schoolSku.priceCentsUsd;
  const seats = parsed.data.seats;
  const totalPriceCents = unitPriceCents * seats;

  const { data: purchaseRow, error: purchaseInsertError } = await admin
    .from("organization_license_purchases")
    .insert({
      organization_id: organization.id,
      purchased_by: user.id,
      seats_purchased: seats,
      seats_assigned: 0,
      unit_price_cents: unitPriceCents,
      total_price_cents: totalPriceCents,
      currency: "USD",
      plan_id: "language_school_annual",
      status: "checkout_created",
      metadata: {
        source: "api:stripe:checkout:organization",
      },
    })
    .select("id")
    .single();

  if (purchaseInsertError) {
    if (isMissingOrganizationTableError(purchaseInsertError)) {
      return NextResponse.json(
        { error: "Organization tables not migrated yet." },
        { status: 503 },
      );
    }
    return NextResponse.json({ error: purchaseInsertError.message }, { status: 500 });
  }

  const stripe = createStripeServerClient(serverEnv.STRIPE_SECRET_KEY);
  const metadata = {
    checkoutType: "organization_license_purchase",
    organizationId: organization.id,
    purchaseId: purchaseRow.id,
    seats: String(seats),
    unitPriceCents: String(unitPriceCents),
    purchaserUserId: user.id,
  };

  const createSessionPayload: Stripe.Checkout.SessionCreateParams = {
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          unit_amount: totalPriceCents,
          product_data: {
            name: `${organization.name} - Annual Student Licenses`,
            description: `${seats} licenses at $${(unitPriceCents / 100).toFixed(2)} per seat/year`,
          },
        },
        quantity: 1,
      },
    ],
    success_url: `${serverEnv.NEXT_PUBLIC_APP_URL}/billing/success?product=organization_licenses&organizationId=${organization.id}`,
    cancel_url: `${serverEnv.NEXT_PUBLIC_APP_URL}/billing/cancel?organizationId=${organization.id}`,
    client_reference_id: user.id,
    customer_email: parsed.data.contactEmail ?? user.email ?? undefined,
    metadata,
    payment_intent_data: {
      metadata,
    },
  };

  let session: Stripe.Checkout.Session;
  try {
    session = await withStripeTimeout(stripe.checkout.sessions.create(createSessionPayload));
  } catch (error) {
    console.error("Failed to create organization checkout session.", toSafeErrorRecord(error));
    const mapped = getStripeUserFacingError(error);
    return NextResponse.json({ error: mapped.message }, { status: mapped.status });
  }

  const { error: purchaseUpdateError } = await admin
    .from("organization_license_purchases")
    .update({
      stripe_checkout_session_id: session.id,
      metadata: {
        source: "api:stripe:checkout:organization",
        stripeCheckoutSessionId: session.id,
      },
    })
    .eq("id", purchaseRow.id);

  if (purchaseUpdateError) {
    console.error(
      "Organization purchase row update failed after checkout creation.",
      toSafeErrorRecord(purchaseUpdateError),
    );
  }

  return NextResponse.json({
    checkoutUrl: session.url,
    quote: {
      organizationId: organization.id,
      organizationName: organization.name,
      seats,
      unitPriceCents,
      totalPriceCents,
      currency: "USD",
      purchaseId: purchaseRow.id,
    },
  });
}

