import { NextResponse } from "next/server";
import { z } from "zod";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { logOrganizationAuditEvent } from "@/lib/organizations/audit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getOrganizationSeatSummary } from "@/lib/organizations/license-summary";
import { requireOrganizationMembership } from "@/lib/organizations/membership";
import { isMissingOrganizationTableError } from "@/lib/organizations/errors";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { syncOrganizationPurchaseAllocationStatuses } from "@/lib/organizations/purchases";

function isMissingColumnError(error: unknown) {
  if (!error || typeof error !== "object") return false;
  const code = "code" in error ? String((error as { code?: unknown }).code ?? "") : "";
  return code === "42703";
}

type OrganizationPurchaseRow = {
  id: string;
  seats_purchased: number;
  seats_assigned: number;
  unit_price_cents: number;
  total_price_cents: number;
  currency: string;
  plan_id: string;
  status: string;
  stripe_checkout_session_id: string | null;
  stripe_payment_intent_id: string | null;
  purchased_at: string | null;
  paid_at?: string | null;
  payment_method?: string | null;
  purchase_order_number?: string | null;
  invoice_reference?: string | null;
  invoice_due_at?: string | null;
  notes?: string | null;
  created_at: string;
};

const patchSchema = z.object({
  purchaseId: z.string().uuid(),
  action: z.enum(["mark_paid", "cancel"]),
  note: z.string().trim().max(500).optional(),
});

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

export async function GET(
  request: Request,
  context: { params: Promise<{ organizationId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:organizations:licenses:get", {
    max: 120,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return rateLimitExceededResponse(rateLimit.retryAfterSeconds);
  }

  const { organizationId } = await context.params;
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
    organizationId,
    ["owner", "admin", "teacher", "it_manager", "viewer"],
  );
  if (!membership.ok) return membership.response;

  const [seatSummary, purchasesResult, tokensResult] = await Promise.all([
    getOrganizationSeatSummary(admin, organizationId),
    admin
      .from("organization_license_purchases")
      .select("id, seats_purchased, seats_assigned, unit_price_cents, total_price_cents, currency, plan_id, status, stripe_checkout_session_id, stripe_payment_intent_id, purchased_at, paid_at, payment_method, purchase_order_number, invoice_reference, invoice_due_at, notes, created_at")
      .eq("organization_id", organizationId)
      .order("created_at", { ascending: false })
      .limit(200),
    admin
      .from("organization_provisioning_tokens")
      .select("id, token_preview, seats_total, seats_remaining, expires_at, revoked_at, created_at")
      .eq("organization_id", organizationId)
      .order("created_at", { ascending: false })
      .limit(200),
  ]);

  let purchasesData = (purchasesResult.data ?? []) as OrganizationPurchaseRow[];
  if (purchasesResult.error) {
    if (isMissingColumnError(purchasesResult.error)) {
      const fallback = await admin
        .from("organization_license_purchases")
        .select("id, seats_purchased, seats_assigned, unit_price_cents, total_price_cents, currency, plan_id, status, stripe_checkout_session_id, stripe_payment_intent_id, purchased_at, created_at")
        .eq("organization_id", organizationId)
        .order("created_at", { ascending: false })
        .limit(200);

      if (fallback.error) {
        if (isMissingOrganizationTableError(fallback.error)) {
          return NextResponse.json(
            { error: "Organization tables not migrated yet." },
            { status: 503 },
          );
        }
        console.error("Failed to load organization purchases (fallback query).", toSafeErrorRecord(fallback.error));
        return NextResponse.json({ error: "Failed to load organization purchase data." }, { status: 500 });
      }
      purchasesData = (fallback.data ?? []) as OrganizationPurchaseRow[];
    } else {
    if (isMissingOrganizationTableError(purchasesResult.error)) {
      return NextResponse.json(
        { error: "Organization tables not migrated yet." },
        { status: 503 },
      );
    }
    console.error("Failed to load organization purchases.", toSafeErrorRecord(purchasesResult.error));
    return NextResponse.json({ error: "Failed to load organization purchase data." }, { status: 500 });
    }
  }

  if (tokensResult.error) {
    if (isMissingOrganizationTableError(tokensResult.error)) {
      return NextResponse.json(
        { error: "Organization tables not migrated yet." },
        { status: 503 },
      );
    }
    console.error("Failed to load organization provisioning tokens.", toSafeErrorRecord(tokensResult.error));
    return NextResponse.json({ error: "Failed to load organization provisioning tokens." }, { status: 500 });
  }

  return NextResponse.json({
    seatSummary,
    purchases: purchasesData.map((row) => ({
      id: row.id,
      seatsPurchased: row.seats_purchased,
      seatsAssigned: row.seats_assigned,
      unitPriceCents: row.unit_price_cents,
      totalPriceCents: row.total_price_cents,
      currency: row.currency,
      planId: row.plan_id,
      status: row.status,
      stripeCheckoutSessionId: row.stripe_checkout_session_id,
      stripePaymentIntentId: row.stripe_payment_intent_id,
      purchasedAt: row.purchased_at,
      paidAt: row.paid_at,
      paymentMethod: row.payment_method,
      purchaseOrderNumber: row.purchase_order_number,
      invoiceReference: row.invoice_reference,
      invoiceDueAt: row.invoice_due_at,
      notes: row.notes,
      createdAt: row.created_at,
    })),
    provisioningTokens: (tokensResult.data ?? []).map((row) => ({
      id: row.id,
      tokenPreview: row.token_preview,
      seatsTotal: row.seats_total,
      seatsRemaining: row.seats_remaining,
      expiresAt: row.expires_at,
      revokedAt: row.revoked_at,
      createdAt: row.created_at,
    })),
  });
}

export async function PATCH(
  request: Request,
  context: { params: Promise<{ organizationId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:organizations:licenses:patch", {
    max: 60,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return rateLimitExceededResponse(rateLimit.retryAfterSeconds);
  }

  const { organizationId } = await context.params;
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const parsed = patchSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();
  const membership = await requireOrganizationMembership(
    admin,
    user.id,
    organizationId,
    ["owner", "admin"],
  );
  if (!membership.ok) return membership.response;

  const nowIso = new Date().toISOString();
  if (parsed.data.action === "mark_paid") {
    const { data, error } = await admin
      .from("organization_license_purchases")
      .update({
        status: "paid",
        paid_at: nowIso,
        purchased_at: nowIso,
        metadata: {
          source: "api:organizations:licenses:mark_paid",
          updatedBy: user.id,
          note: parsed.data.note ?? null,
        },
      })
      .eq("id", parsed.data.purchaseId)
      .eq("organization_id", organizationId)
      .in("status", ["checkout_created", "invoicing"])
      .select("id, status, paid_at, purchased_at")
      .maybeSingle();

    if (error) {
      if (isMissingOrganizationTableError(error)) {
        return NextResponse.json(
          { error: "Organization tables not migrated yet." },
          { status: 503 },
        );
      }
      console.error("Failed to mark organization purchase as paid.", toSafeErrorRecord(error));
      return NextResponse.json({ error: "Failed to update organization purchase." }, { status: 500 });
    }
    if (!data?.id) {
      return NextResponse.json(
        { error: "Purchase not found or not eligible for mark_paid." },
        { status: 409 },
      );
    }

    try {
      await syncOrganizationPurchaseAllocationStatuses(admin, organizationId);
    } catch {
      // Best-effort allocation sync.
    }

    try {
      await logOrganizationAuditEvent(admin, {
        organizationId,
        actorUserId: user.id,
        eventType: "license_purchase_marked_paid",
        subjectType: "license_purchase",
        subjectId: data.id,
        metadata: {
          source: "api:organizations:licenses:mark_paid",
          note: parsed.data.note ?? null,
          paidAt: data.paid_at,
        },
      });
    } catch {
      // Best-effort audit logging.
    }

    return NextResponse.json({
      success: true,
      purchase: {
        id: data.id,
        status: data.status,
        paidAt: data.paid_at,
        purchasedAt: data.purchased_at,
      },
    });
  }

  const { data, error } = await admin
    .from("organization_license_purchases")
    .update({
      status: "canceled",
      notes: parsed.data.note ?? null,
      metadata: {
        source: "api:organizations:licenses:cancel",
        updatedBy: user.id,
      },
    })
    .eq("id", parsed.data.purchaseId)
    .eq("organization_id", organizationId)
    .in("status", ["checkout_created", "invoicing"])
    .select("id, status")
    .maybeSingle();

  if (error) {
    if (isMissingOrganizationTableError(error)) {
      return NextResponse.json(
        { error: "Organization tables not migrated yet." },
        { status: 503 },
      );
    }
    console.error("Failed to cancel organization purchase.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to update organization purchase." }, { status: 500 });
  }

  if (!data?.id) {
    return NextResponse.json(
      { error: "Purchase not found or not eligible for cancellation." },
      { status: 409 },
    );
  }

  try {
    await logOrganizationAuditEvent(admin, {
      organizationId,
      actorUserId: user.id,
      eventType: "license_purchase_canceled",
      subjectType: "license_purchase",
      subjectId: data.id,
      metadata: {
        source: "api:organizations:licenses:cancel",
        note: parsed.data.note ?? null,
      },
    });
  } catch {
    // Best-effort audit logging.
  }

  return NextResponse.json({
    success: true,
    purchase: {
      id: data.id,
      status: data.status,
    },
  });
}
