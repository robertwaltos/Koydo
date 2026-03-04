import { NextResponse } from "next/server";
import { z } from "zod";
import { requireOwnerForApi } from "@/lib/admin/auth";
import { logAdminAction } from "@/lib/admin/audit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";

const processBatchSchema = z.object({
  status: z.enum(["paid", "failed", "canceled"]).default("paid"),
  payoutItemIds: z.array(z.string().uuid()).max(5000).optional(),
  paymentReferencePrefix: z.string().trim().max(80).optional(),
  errorMessage: z.string().trim().max(500).optional(),
  reasonAccountingCode: z.string().trim().min(2).max(64),
  ledgerAccountCode: z.string().trim().min(2).max(64),
  confirmText: z.literal("RELEASE_PARTNER_PAYOUTS"),
});

export async function POST(
  request: Request,
  context: { params: Promise<{ batchId: string }> },
) {
  const auth = await requireOwnerForApi({
    stepUpScope: "security_admin",
    allowedFactorTypes: ["totp", "yubikey_otp"],
  });
  if (!auth.isAuthorized) return auth.response;

  const rate = await enforceIpRateLimit(request, "api:admin:partners:payouts:process", {
    max: 6,
    windowMs: 60 * 60 * 1000,
  });
  if (!rate.allowed) {
    return NextResponse.json({ error: "Too many payout release attempts. Try again later." }, { status: 429 });
  }

  const { batchId } = await context.params;
  const body = await request.json().catch(() => null);
  const parsed = processBatchSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  const admin = createSupabaseAdminClient();
  const { data: batch, error: batchError } = await admin
    .from("partner_payout_batches")
    .select("id, status, created_by")
    .eq("id", batchId)
    .maybeSingle();
  if (batchError) {
    console.error("Unexpected API error.", toSafeErrorRecord(batchError));
    return NextResponse.json({ error: "Failed to load payout batch." }, { status: 500 });
  }
  if (!batch) {
    return NextResponse.json({ error: "Payout batch not found." }, { status: 404 });
  }
  if (batch.created_by && batch.created_by === auth.userId) {
    return NextResponse.json(
      { error: "Maker-checker policy violation: batch creator cannot execute payout release." },
      { status: 403 },
    );
  }
  const { data: approvals, error: approvalsError } = await admin
    .from("partner_payout_approvals")
    .select(
      "id, approval_status, approval_scope, reason_accounting_code, ledger_account_code, approved_by, owner_factor_type, approved_at",
    )
    .eq("payout_batch_id", batchId)
    .eq("approval_status", "approved")
    .order("approved_at", { ascending: false })
    .limit(5);
  if (approvalsError) {
    console.error("Unexpected API error.", toSafeErrorRecord(approvalsError));
    return NextResponse.json({ error: "Failed to validate payout approvals." }, { status: 500 });
  }
  const finalApproval = (approvals ?? []).find((entry) => entry.approval_scope === "final_release");
  if (!finalApproval) {
    return NextResponse.json(
      { error: "No final-release owner approval found. Funds cannot be released without human approval." },
      { status: 428 },
    );
  }
  if (
    finalApproval.reason_accounting_code !== parsed.data.reasonAccountingCode ||
    finalApproval.ledger_account_code !== parsed.data.ledgerAccountCode
  ) {
    return NextResponse.json(
      { error: "Accounting reason/account codes must match the recorded owner approval." },
      { status: 400 },
    );
  }

  let itemsQuery = admin
    .from("partner_payout_items")
    .select("id, partner_id, item_status, metadata")
    .eq("payout_batch_id", batchId)
    .in("item_status", ["queued", "processing"]);
  if (parsed.data.payoutItemIds && parsed.data.payoutItemIds.length > 0) {
    itemsQuery = itemsQuery.in("id", parsed.data.payoutItemIds);
  }
  const { data: items, error: itemsError } = await itemsQuery;
  if (itemsError) {
    console.error("Unexpected API error.", toSafeErrorRecord(itemsError));
    return NextResponse.json({ error: "Failed to load payout items." }, { status: 500 });
  }
  if (!items || items.length === 0) {
    return NextResponse.json({ error: "No queued payout items found." }, { status: 404 });
  }

  const nowIso = new Date().toISOString();
  let updatedCount = 0;
  for (let index = 0; index < items.length; index += 1) {
    const item = items[index];
    const paymentReference =
      parsed.data.status === "paid" && parsed.data.paymentReferencePrefix
        ? `${parsed.data.paymentReferencePrefix}-${String(index + 1).padStart(4, "0")}`
        : null;

    const { error: updateError } = await admin
      .from("partner_payout_items")
      .update({
        item_status: parsed.data.status === "paid" ? "paid" : parsed.data.status === "failed" ? "failed" : "canceled",
        paid_at: parsed.data.status === "paid" ? nowIso : null,
        payment_reference: paymentReference,
        error_message: parsed.data.status === "failed" ? parsed.data.errorMessage ?? "Payout processing failed." : null,
        metadata: {
          ...((item.metadata as Record<string, unknown> | null) ?? {}),
          reasonAccountingCode: parsed.data.reasonAccountingCode,
          ledgerAccountCode: parsed.data.ledgerAccountCode,
          releasedByOwnerId: auth.userId,
          releasedWithFactor: auth.stepUp?.factorType ?? null,
        },
      })
      .eq("id", item.id);

    if (updateError) {
      console.error("Unexpected API error.", toSafeErrorRecord(updateError));
      continue;
    }

    if (parsed.data.status === "paid") {
      const { error: paidEventError } = await admin
        .from("partner_commission_events")
        .update({
          status: "paid",
          paid_at: nowIso,
        })
        .eq("payout_item_id", item.id);
      if (paidEventError) {
        console.error("Failed to mark commission events as paid.", toSafeErrorRecord(paidEventError));
      }
    } else {
      const { error: revertEventError } = await admin
        .from("partner_commission_events")
        .update({
          status: "approved",
          payout_item_id: null,
        })
        .eq("payout_item_id", item.id);
      if (revertEventError) {
        console.error("Failed to release commission events from payout item.", toSafeErrorRecord(revertEventError));
      }
    }
    updatedCount += 1;
  }

  const { data: finalItems, error: finalItemsError } = await admin
    .from("partner_payout_items")
    .select("id, item_status")
    .eq("payout_batch_id", batchId);
  if (!finalItemsError && finalItems) {
    const allPaid = finalItems.length > 0 && finalItems.every((entry) => entry.item_status === "paid");
    const anyFailed = finalItems.some((entry) => entry.item_status === "failed");
    const allCanceled = finalItems.length > 0 && finalItems.every((entry) => entry.item_status === "canceled");
    const nextBatchStatus = allPaid ? "paid" : anyFailed ? "failed" : allCanceled ? "canceled" : "processing";
    const { data: batchForMetadata } = await admin
      .from("partner_payout_batches")
      .select("metadata")
      .eq("id", batchId)
      .maybeSingle();
    await admin
      .from("partner_payout_batches")
      .update({
        status: nextBatchStatus,
        processed_at: nextBatchStatus === "processing" ? null : nowIso,
        metadata: {
          ...((batchForMetadata?.metadata as Record<string, unknown> | null) ?? {}),
          reasonAccountingCode: parsed.data.reasonAccountingCode,
          ledgerAccountCode: parsed.data.ledgerAccountCode,
          executedByOwnerId: auth.userId,
          executedWithFactor: auth.stepUp?.factorType ?? null,
        },
      })
      .eq("id", batchId);
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "partner_payout_batch_process",
    metadata: {
      payoutBatchId: batchId,
      targetedCount: items.length,
      updatedCount,
      status: parsed.data.status,
      reasonAccountingCode: parsed.data.reasonAccountingCode,
      ledgerAccountCode: parsed.data.ledgerAccountCode,
      ownerFactorType: auth.stepUp?.factorType ?? null,
    },
  });

  return NextResponse.json({
    success: true,
    payoutBatchId: batchId,
    targetedCount: items.length,
    updatedCount,
    status: parsed.data.status,
  });
}
