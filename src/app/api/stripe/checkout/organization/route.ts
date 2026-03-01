import { createHash } from "crypto";
import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { z } from "zod";
import { createStripeServerClient } from "@/lib/billing/stripe-client";
import { serverEnv } from "@/lib/config/env";
import { getLanguageSkuById } from "@/lib/language-learning/pricing-spec";
import {
  buildOrganizationInvoiceReference,
  getOrganizationInvoicingInstructions,
  ORGANIZATION_PAYMENT_METHODS,
  type OrganizationPaymentMethod,
} from "@/lib/organizations/invoicing";
import { logOrganizationAuditEvent } from "@/lib/organizations/audit";
import { isMissingOrganizationTableError } from "@/lib/organizations/errors";
import { requireOrganizationMembership } from "@/lib/organizations/membership";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const requestSchema = z.object({
  organizationId: z.string().uuid(),
  seats: z.coerce.number().int().min(1).max(250_000),
  contactEmail: z.string().email().optional(),
  paymentMethod: z.enum(ORGANIZATION_PAYMENT_METHODS).default("card"),
  purchaseOrderNumber: z.string().trim().min(2).max(120).optional(),
  invoiceDueInDays: z.coerce.number().int().min(7).max(120).default(30),
  notes: z.string().trim().max(500).optional(),
});

const idempotencyKeySchema = z
  .string()
  .trim()
  .min(8)
  .max(120)
  .regex(/^[A-Za-z0-9._:-]+$/);

const STRIPE_API_TIMEOUT_MS = 12_000;

type OrganizationRow = {
  id: string;
  name: string;
};

type PurchaseCheckoutRow = {
  id: string;
  seats_purchased: number;
  unit_price_cents: number;
  total_price_cents: number;
  currency: string;
  status: string;
  payment_method: OrganizationPaymentMethod | null;
  purchase_order_number: string | null;
  invoice_reference: string | null;
  invoice_due_at: string | null;
  stripe_checkout_session_id: string | null;
  metadata: Record<string, unknown> | null;
};

type CheckoutRouteResponse = {
  checkoutUrl: string | null;
  quote: {
    organizationId: string;
    organizationName: string;
    seats: number;
    unitPriceCents: number;
    totalPriceCents: number;
    currency: "USD";
    purchaseId: string;
    paymentMethod: OrganizationPaymentMethod;
    invoiceReference: string | null;
    invoiceDueAt: string | null;
    purchaseOrderNumber: string | null;
    status: string;
  };
  invoicing?: {
    paymentMethod: "wire" | "po";
    invoiceReference: string;
    dueAt: string;
    instructions: string[];
  };
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
  organizationId: string;
  seats: number;
  paymentMethod: OrganizationPaymentMethod;
  contactEmail: string | null;
  purchaseOrderNumber: string | null;
  invoiceDueInDays: number;
  notes: string | null;
}) {
  const normalized = [
    input.organizationId,
    String(input.seats),
    input.paymentMethod,
    input.contactEmail ?? "",
    input.purchaseOrderNumber ?? "",
    String(input.invoiceDueInDays),
    input.notes ?? "",
  ].join("|");
  return createHash("sha256").update(normalized).digest("hex");
}

function buildOrganizationCheckoutSessionPayload(params: {
  organization: OrganizationRow;
  seats: number;
  unitPriceCents: number;
  totalPriceCents: number;
  userId: string;
  customerEmail: string | null;
  paymentMethod: OrganizationPaymentMethod;
  purchaseId: string;
  purchaseOrderNumber: string | null;
  idempotencyKey: string | null;
}) {
  const metadata = {
    checkoutType: "organization_license_purchase",
    organizationId: params.organization.id,
    purchaseId: params.purchaseId,
    seats: String(params.seats),
    unitPriceCents: String(params.unitPriceCents),
    purchaserUserId: params.userId,
    paymentMethod: params.paymentMethod,
    purchaseOrderNumber: params.purchaseOrderNumber ?? "",
    ...(params.idempotencyKey ? { idempotencyKey: params.idempotencyKey } : {}),
  };

  const paymentMethodTypes =
    params.paymentMethod === "ach"
      ? (["us_bank_account", "card"] as Stripe.Checkout.SessionCreateParams.PaymentMethodType[])
      : (["card"] as Stripe.Checkout.SessionCreateParams.PaymentMethodType[]);

  const createSessionPayload: Stripe.Checkout.SessionCreateParams = {
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          unit_amount: params.totalPriceCents,
          product_data: {
            name: `${params.organization.name} - Annual Student Licenses`,
            description: `${params.seats} licenses at $${(params.unitPriceCents / 100).toFixed(2)} per seat/year`,
          },
        },
        quantity: 1,
      },
    ],
    success_url: `${serverEnv.NEXT_PUBLIC_APP_URL}/billing/success?product=organization_licenses&organizationId=${params.organization.id}`,
    cancel_url: `${serverEnv.NEXT_PUBLIC_APP_URL}/billing/cancel?organizationId=${params.organization.id}`,
    client_reference_id: params.userId,
    customer_email: params.customerEmail ?? undefined,
    metadata,
    payment_method_types: paymentMethodTypes,
    payment_intent_data: {
      metadata,
    },
  };

  return { createSessionPayload, metadata };
}

function isInvoicePaymentMethod(method: OrganizationPaymentMethod): method is "wire" | "po" {
  return method === "wire" || method === "po";
}

function buildCheckoutResponseFromPurchase(params: {
  organization: OrganizationRow;
  purchase: {
    id: string;
    seatsPurchased: number;
    unitPriceCents: number;
    totalPriceCents: number;
    status: string;
    paymentMethod: OrganizationPaymentMethod;
    purchaseOrderNumber: string | null;
    invoiceReference: string | null;
    invoiceDueAt: string | null;
  };
  checkoutUrl: string | null;
}): CheckoutRouteResponse {
  const response: CheckoutRouteResponse = {
    checkoutUrl: params.checkoutUrl,
    quote: {
      organizationId: params.organization.id,
      organizationName: params.organization.name,
      seats: params.purchase.seatsPurchased,
      unitPriceCents: params.purchase.unitPriceCents,
      totalPriceCents: params.purchase.totalPriceCents,
      currency: "USD",
      purchaseId: params.purchase.id,
      paymentMethod: params.purchase.paymentMethod,
      invoiceReference: params.purchase.invoiceReference,
      invoiceDueAt: params.purchase.invoiceDueAt,
      purchaseOrderNumber: params.purchase.purchaseOrderNumber,
      status: params.purchase.status,
    },
  };

  if (
    isInvoicePaymentMethod(params.purchase.paymentMethod)
    && params.purchase.invoiceReference
    && params.purchase.invoiceDueAt
  ) {
    response.invoicing = {
      paymentMethod: params.purchase.paymentMethod,
      invoiceReference: params.purchase.invoiceReference,
      dueAt: params.purchase.invoiceDueAt,
      instructions: getOrganizationInvoicingInstructions({
        paymentMethod: params.purchase.paymentMethod,
        invoiceReference: params.purchase.invoiceReference,
        purchaseOrderNumber: params.purchase.purchaseOrderNumber,
        amountCents: params.purchase.totalPriceCents,
        currency: "USD",
        dueAtIso: params.purchase.invoiceDueAt,
      }),
    };
  }

  return response;
}

export async function POST(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:stripe:checkout:organization", {
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

  const body = await request.json().catch(() => null);
  const parsed = requestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const idempotencyKey = readIdempotencyKey(request);
  const normalizedContactEmail = parsed.data.contactEmail ?? null;
  const normalizedNotes = parsed.data.notes ?? null;
  const idempotencyFingerprint = idempotencyKey
    ? buildIdempotencyFingerprint({
      organizationId: parsed.data.organizationId,
      seats: parsed.data.seats,
      paymentMethod: parsed.data.paymentMethod,
      contactEmail: normalizedContactEmail,
      purchaseOrderNumber: parsed.data.purchaseOrderNumber ?? null,
      invoiceDueInDays: parsed.data.invoiceDueInDays,
      notes: normalizedNotes,
    })
    : null;

  if (parsed.data.paymentMethod === "po" && !parsed.data.purchaseOrderNumber) {
    return NextResponse.json(
      { error: "purchaseOrderNumber is required when paymentMethod is po." },
      { status: 400 },
    );
  }

  const needsStripeCheckout =
    parsed.data.paymentMethod === "card" || parsed.data.paymentMethod === "ach";
  if (needsStripeCheckout && !serverEnv.STRIPE_SECRET_KEY) {
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
    console.error("Failed to load organization for checkout.", toSafeErrorRecord(organizationError));
    return NextResponse.json({ error: "Failed to load organization." }, { status: 500 });
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
  const invoiceDueAt = new Date(
    Date.now() + parsed.data.invoiceDueInDays * 24 * 60 * 60 * 1000,
  ).toISOString();
  const invoiceReference = isInvoicePaymentMethod(parsed.data.paymentMethod)
    ? buildOrganizationInvoiceReference(organization.id)
    : null;
  const initialStatus = isInvoicePaymentMethod(parsed.data.paymentMethod)
    ? "invoicing"
    : "checkout_created";
  const stripe = needsStripeCheckout
    ? createStripeServerClient(serverEnv.STRIPE_SECRET_KEY)
    : null;

  let purchaseRow: PurchaseCheckoutRow | null = null;
  let wasIdempotentReplay = false;
  let createdNewPurchase = false;
  if (idempotencyKey) {
    const { data: existingPurchaseData, error: existingPurchaseError } = await admin
      .from("organization_license_purchases")
      .select("id, seats_purchased, unit_price_cents, total_price_cents, currency, status, payment_method, purchase_order_number, invoice_reference, invoice_due_at, stripe_checkout_session_id, metadata")
      .eq("organization_id", organization.id)
      .eq("purchased_by", user.id)
      .contains("metadata", { idempotencyKey })
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (existingPurchaseError) {
      if (isMissingOrganizationTableError(existingPurchaseError)) {
        return NextResponse.json(
          { error: "Organization tables not migrated yet." },
          { status: 503 },
        );
      }
      console.error("Failed to load existing organization purchase for idempotency.", toSafeErrorRecord(existingPurchaseError));
      return NextResponse.json({ error: "Failed to load existing organization purchase." }, { status: 500 });
    }

    const existingPurchase = existingPurchaseData as PurchaseCheckoutRow | null;
    if (existingPurchase) {
      const existingFingerprint =
        typeof existingPurchase.metadata?.idempotencyFingerprint === "string"
          ? existingPurchase.metadata.idempotencyFingerprint
          : null;

      if (!existingFingerprint || existingFingerprint !== idempotencyFingerprint) {
        return NextResponse.json(
          {
            error:
              "Idempotency key was already used with a different organization checkout payload.",
          },
          { status: 409 },
        );
      }

      purchaseRow = existingPurchase;
      wasIdempotentReplay = true;
    }
  }

  if (!purchaseRow) {
    const metadata: Record<string, unknown> = {
      source: "api:stripe:checkout:organization",
      paymentMethod: parsed.data.paymentMethod,
      contactEmail: normalizedContactEmail ?? user.email ?? null,
    };
    if (idempotencyKey && idempotencyFingerprint) {
      metadata.idempotencyKey = idempotencyKey;
      metadata.idempotencyFingerprint = idempotencyFingerprint;
    }

    const { data: insertedPurchase, error: purchaseInsertError } = await admin
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
        status: initialStatus,
        payment_method: parsed.data.paymentMethod,
        purchase_order_number: parsed.data.purchaseOrderNumber ?? null,
        invoice_reference: invoiceReference,
        invoice_due_at: invoiceReference ? invoiceDueAt : null,
        notes: normalizedNotes,
        metadata,
      })
      .select("id, seats_purchased, unit_price_cents, total_price_cents, currency, status, payment_method, purchase_order_number, invoice_reference, invoice_due_at, stripe_checkout_session_id, metadata")
      .single();

    if (purchaseInsertError) {
      if (isMissingOrganizationTableError(purchaseInsertError)) {
        return NextResponse.json(
          { error: "Organization tables not migrated yet." },
          { status: 503 },
        );
      }
      console.error("Failed to create organization license purchase.", toSafeErrorRecord(purchaseInsertError));
      return NextResponse.json({ error: "Failed to create organization license purchase." }, { status: 500 });
    }

    purchaseRow = insertedPurchase as PurchaseCheckoutRow;
    createdNewPurchase = true;
  }

  const purchasePaymentMethod = purchaseRow.payment_method ?? parsed.data.paymentMethod;
  const purchaseResponse = {
    id: purchaseRow.id,
    seatsPurchased: purchaseRow.seats_purchased,
    unitPriceCents: purchaseRow.unit_price_cents,
    totalPriceCents: purchaseRow.total_price_cents,
    status: purchaseRow.status,
    paymentMethod: purchasePaymentMethod,
    purchaseOrderNumber: purchaseRow.purchase_order_number,
    invoiceReference: purchaseRow.invoice_reference,
    invoiceDueAt: purchaseRow.invoice_due_at,
  };

  if (isInvoicePaymentMethod(purchasePaymentMethod)) {
    const invoiceResponse = buildCheckoutResponseFromPurchase({
      organization,
      purchase: purchaseResponse,
      checkoutUrl: null,
    });

    try {
      await logOrganizationAuditEvent(admin, {
        organizationId: organization.id,
        actorUserId: user.id,
        eventType: createdNewPurchase
          ? "license_purchase_created"
          : "license_purchase_replayed",
        subjectType: "license_purchase",
        subjectId: purchaseRow.id,
        metadata: {
          source: "api:stripe:checkout:organization",
          idempotentReplay: wasIdempotentReplay,
          paymentMethod: purchasePaymentMethod,
          status: purchaseRow.status,
          invoiceReference: purchaseRow.invoice_reference,
        },
      });
    } catch {
      // Best-effort audit logging.
    }

    return NextResponse.json(invoiceResponse);
  }

  if (!stripe) {
    return NextResponse.json(
      { error: "Missing Stripe configuration in environment variables." },
      { status: 500 },
    );
  }

  let checkoutUrl: string | null = null;
  let createdNewSession = false;
  if (purchaseRow.stripe_checkout_session_id) {
    try {
      const existingSession = await withStripeTimeout(
        stripe.checkout.sessions.retrieve(purchaseRow.stripe_checkout_session_id),
      );
      checkoutUrl = existingSession.url;
    } catch {
      checkoutUrl = null;
    }
  }

  if (!checkoutUrl) {
    const { createSessionPayload, metadata } = buildOrganizationCheckoutSessionPayload({
      organization,
      seats: purchaseRow.seats_purchased,
      unitPriceCents: purchaseRow.unit_price_cents,
      totalPriceCents: purchaseRow.total_price_cents,
      userId: user.id,
      customerEmail: normalizedContactEmail ?? user.email ?? null,
      paymentMethod: purchasePaymentMethod,
      purchaseId: purchaseRow.id,
      purchaseOrderNumber: purchaseRow.purchase_order_number,
      idempotencyKey,
    });

    let session: Stripe.Checkout.Session;
    try {
      const createPromise = idempotencyKey
        ? stripe.checkout.sessions.create(createSessionPayload, {
          idempotencyKey: `org-checkout:${organization.id}:${user.id}:${idempotencyKey}`,
        })
        : stripe.checkout.sessions.create(createSessionPayload);
      session = await withStripeTimeout(createPromise);
    } catch (error) {
      console.error("Failed to create organization checkout session.", toSafeErrorRecord(error));
      const mapped = getStripeUserFacingError(error);
      return NextResponse.json({ error: mapped.message }, { status: mapped.status });
    }

    checkoutUrl = session.url;
    createdNewSession = true;

    const { error: purchaseUpdateError } = await admin
      .from("organization_license_purchases")
      .update({
        stripe_checkout_session_id: session.id,
        metadata: {
          ...((purchaseRow.metadata ?? {}) as Record<string, unknown>),
          source: "api:stripe:checkout:organization",
          stripeCheckoutSessionId: session.id,
          ...(idempotencyKey && idempotencyFingerprint
            ? { idempotencyKey, idempotencyFingerprint }
            : {}),
          ...metadata,
        },
      })
      .eq("id", purchaseRow.id);

    if (purchaseUpdateError) {
      console.error(
        "Organization purchase row update failed after checkout creation.",
        toSafeErrorRecord(purchaseUpdateError),
      );
    }
  }

  const checkoutResponse = buildCheckoutResponseFromPurchase({
    organization,
    purchase: purchaseResponse,
    checkoutUrl,
  });

  try {
    await logOrganizationAuditEvent(admin, {
      organizationId: organization.id,
      actorUserId: user.id,
      eventType: createdNewSession
        ? "license_purchase_checkout_session_created"
        : "license_purchase_checkout_session_reused",
      subjectType: "license_purchase",
      subjectId: purchaseRow.id,
      metadata: {
        source: "api:stripe:checkout:organization",
        idempotentReplay: wasIdempotentReplay,
        purchaseCreated: createdNewPurchase,
        paymentMethod: purchasePaymentMethod,
        status: purchaseRow.status,
      },
    });
  } catch {
    // Best-effort audit logging.
  }

  return NextResponse.json(checkoutResponse);
}
