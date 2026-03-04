import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/admin/audit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const settleSchema = z.object({
  paymentIds: z.array(z.string().uuid()).max(1000).optional(),
  status: z.enum(["paid", "failed", "canceled"]).default("paid"),
  paidAtIso: z.string().datetime().optional(),
  paymentReferencePrefix: z.string().max(64).optional(),
  errorMessage: z.string().max(500).optional(),
});

export async function POST(
  request: Request,
  context: { params: Promise<{ declarationId: string }> },
) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const { declarationId } = await context.params;
  const body = await request.json().catch(() => null);
  const parsed = settleSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();
  let paymentQuery = admin
    .from("dividend_payments")
    .select(
      "id, declaration_id, payment_status, payment_reference, paid_at, investor_id, gross_amount_cents, net_amount_cents",
    )
    .eq("declaration_id", declarationId);

  if (parsed.data.paymentIds && parsed.data.paymentIds.length > 0) {
    paymentQuery = paymentQuery.in("id", parsed.data.paymentIds);
  }

  const { data: targetPayments, error: targetError } = await paymentQuery;
  if (targetError) {
    console.error("Unexpected API error.", toSafeErrorRecord(targetError));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
  if (!targetPayments || targetPayments.length === 0) {
    return NextResponse.json({ error: "No matching dividend payments found." }, { status: 404 });
  }

  const settlementTime =
    parsed.data.status === "paid"
      ? parsed.data.paidAtIso
        ? new Date(parsed.data.paidAtIso).toISOString()
        : new Date().toISOString()
      : null;

  let updated = 0;
  for (let index = 0; index < targetPayments.length; index += 1) {
    const payment = targetPayments[index];
    const nextReference =
      parsed.data.status === "paid"
        ? parsed.data.paymentReferencePrefix
          ? `${parsed.data.paymentReferencePrefix}-${String(index + 1).padStart(4, "0")}`
          : payment.payment_reference ?? null
        : payment.payment_reference ?? null;

    const { error: updateError } = await admin
      .from("dividend_payments")
      .update({
        payment_status: parsed.data.status,
        paid_at: settlementTime,
        payment_reference: nextReference,
        metadata:
          parsed.data.status === "failed" && parsed.data.errorMessage
            ? {
                settlementError: parsed.data.errorMessage,
                settlementUpdatedBy: auth.userId,
                settlementUpdatedAt: new Date().toISOString(),
              }
            : undefined,
      })
      .eq("id", payment.id);

    if (updateError) {
      console.error("Unexpected API error.", toSafeErrorRecord(updateError));
      continue;
    }
    updated += 1;
  }

  const { data: allPayments, error: allPaymentsError } = await admin
    .from("dividend_payments")
    .select("id, payment_status")
    .eq("declaration_id", declarationId);

  if (!allPaymentsError && allPayments) {
    const allPaid = allPayments.length > 0 && allPayments.every((payment) => payment.payment_status === "paid");
    if (allPaid) {
      await admin.from("dividend_declarations").update({ status: "paid" }).eq("id", declarationId);
    }
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "finance_dividend_payments_settle",
    metadata: {
      declarationId,
      paymentCount: targetPayments.length,
      updatedCount: updated,
      status: parsed.data.status,
      paymentReferencePrefix: parsed.data.paymentReferencePrefix ?? null,
    },
  });

  return NextResponse.json({
    success: true,
    declarationId,
    targeted: targetPayments.length,
    updated,
    status: parsed.data.status,
    settledAt: settlementTime,
  });
}
