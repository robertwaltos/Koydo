import { NextResponse } from "next/server";
import { z } from "zod";
import { requireOwnerForApi } from "@/lib/admin/auth";
import {
  ensureOwnerPayoutApprovalPasswordConfigured,
  getExpectedPayoutApprovalPasswordHash,
  verifyOwnerActionPassword,
} from "@/lib/admin/owner-security";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/admin/audit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";

const approvalSchema = z.object({
  approvalScope: z.enum(["final_release", "emergency_hold"]).default("final_release"),
  reasonAccountingCode: z.string().trim().min(2).max(64),
  ledgerAccountCode: z.string().trim().min(2).max(64),
  approvalReason: z.string().trim().min(8).max(5000),
  confirmText: z.literal("APPROVE_PARTNER_PAYOUT"),
  approvalPassword1: z.string().min(8).max(256),
  approvalPassword2: z.string().min(8).max(256),
  approvalPassword3: z.string().min(8).max(256),
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

  const rate = await enforceIpRateLimit(request, "api:admin:partners:payouts:approve", {
    max: 12,
    windowMs: 60 * 60 * 1000,
  });
  if (!rate.allowed) {
    return NextResponse.json({ error: "Too many approval attempts. Try again later." }, { status: 429 });
  }

  const { batchId } = await context.params;
  const body = await request.json().catch(() => null);
  const parsed = approvalSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  try {
    ensureOwnerPayoutApprovalPasswordConfigured();
  } catch (error) {
    const message = error instanceof Error ? error.message : "Payout approval password is not configured.";
    return NextResponse.json({ error: message }, { status: 503 });
  }

  const expectedHash = getExpectedPayoutApprovalPasswordHash();
  const p1 = parsed.data.approvalPassword1;
  const p2 = parsed.data.approvalPassword2;
  const p3 = parsed.data.approvalPassword3;
  if (!(p1 === p2 && p2 === p3)) {
    return NextResponse.json(
      { error: "Approval password entries do not match across all three confirmations." },
      { status: 400 },
    );
  }
  if (!verifyOwnerActionPassword(p1, expectedHash)) {
    return NextResponse.json({ error: "Owner payout approval password is invalid." }, { status: 403 });
  }

  const admin = createSupabaseAdminClient();
  const { data: batch, error: batchError } = await admin
    .from("partner_payout_batches")
    .select("id, status, created_by, metadata")
    .eq("id", batchId)
    .maybeSingle();
  if (batchError) {
    console.error("Unexpected API error.", toSafeErrorRecord(batchError));
    return NextResponse.json({ error: "Failed to load payout batch." }, { status: 500 });
  }
  if (!batch) {
    return NextResponse.json({ error: "Payout batch not found." }, { status: 404 });
  }
  if (batch.status === "paid" || batch.status === "canceled") {
    return NextResponse.json({ error: "Payout batch is finalized and cannot be approved." }, { status: 400 });
  }

  const { data: approval, error: approvalError } = await admin
    .from("partner_payout_approvals")
    .insert({
      payout_batch_id: batchId,
      approval_status: "approved",
      approval_scope: parsed.data.approvalScope,
      reason_accounting_code: parsed.data.reasonAccountingCode,
      ledger_account_code: parsed.data.ledgerAccountCode,
      approval_reason: parsed.data.approvalReason,
      owner_factor_type: auth.stepUp?.factorType ?? "totp",
      owner_step_up_scope: auth.stepUp?.scope ?? "security_admin",
      approved_by: auth.userId,
      approved_at: new Date().toISOString(),
      metadata: {
        createdBy: batch.created_by ?? null,
      },
    })
    .select(
      "id, payout_batch_id, approval_status, approval_scope, reason_accounting_code, ledger_account_code, owner_factor_type, approved_by, approved_at, created_at",
    )
    .single();
  if (approvalError) {
    console.error("Unexpected API error.", toSafeErrorRecord(approvalError));
    return NextResponse.json({ error: "Failed to record payout approval." }, { status: 500 });
  }

  await admin
    .from("partner_payout_batches")
    .update({
      status: parsed.data.approvalScope === "final_release" ? "scheduled" : "canceled",
      metadata: {
        ...((batch.metadata as Record<string, unknown> | null) ?? {}),
        approvalId: approval.id,
        reasonAccountingCode: parsed.data.reasonAccountingCode,
        ledgerAccountCode: parsed.data.ledgerAccountCode,
      },
    })
    .eq("id", batchId);

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "partner_payout_batch_approve",
    metadata: {
      payoutBatchId: batchId,
      approvalId: approval.id,
      approvalScope: parsed.data.approvalScope,
      ownerFactorType: approval.owner_factor_type,
      reasonAccountingCode: approval.reason_accounting_code,
      ledgerAccountCode: approval.ledger_account_code,
    },
  });

  return NextResponse.json({
    success: true,
    approval,
  });
}
