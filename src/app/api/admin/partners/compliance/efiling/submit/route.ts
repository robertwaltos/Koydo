import { NextResponse } from "next/server";
import { z } from "zod";
import { requireOwnerForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { logAdminAction } from "@/lib/admin/audit";
import { submitComplianceFiling } from "@/lib/partners/efiling";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";

const requestSchema = z.object({
  filingKind: z.enum(["irs_1099", "irs_1042", "irs_1042s", "ofac_rejected_transactions"]),
  filingPeriodStart: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  filingPeriodEnd: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  referenceId: z.string().trim().min(4).max(120),
  payload: z.record(z.string(), z.unknown()),
});

export async function POST(request: Request) {
  const auth = await requireOwnerForApi({
    stepUpScope: "security_admin",
    allowedFactorTypes: ["totp", "yubikey_otp"],
  });
  if (!auth.isAuthorized) return auth.response;

  const rate = await enforceIpRateLimit(request, "api:admin:partners:compliance:efiling:submit", {
    max: 12,
    windowMs: 60 * 60 * 1000,
  });
  if (!rate.allowed) {
    return NextResponse.json({ error: "Too many filing submissions. Try again later." }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  const parsed = requestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  const admin = createSupabaseAdminClient();
  const { data: filingRecord, error: createError } = await admin
    .from("partner_compliance_filings")
    .insert({
      filing_kind: parsed.data.filingKind,
      filing_period_start: parsed.data.filingPeriodStart,
      filing_period_end: parsed.data.filingPeriodEnd,
      submission_status: "queued",
      provider: "manual_package",
      submission_reference: parsed.data.referenceId,
      submission_payload: parsed.data.payload,
      submitted_by: auth.userId,
    })
    .select("id")
    .single();
  if (createError) {
    console.error("Unexpected API error.", toSafeErrorRecord(createError));
    return NextResponse.json({ error: "Failed to create filing record." }, { status: 500 });
  }

  const submission = await submitComplianceFiling({
    filingKind: parsed.data.filingKind,
    filingPeriodStart: parsed.data.filingPeriodStart,
    filingPeriodEnd: parsed.data.filingPeriodEnd,
    payload: parsed.data.payload,
    referenceId: parsed.data.referenceId,
  }).catch((error) => {
    console.error("E-filing connector error.", toSafeErrorRecord(error));
    return {
      status: "manual_required" as const,
      provider: "manual_package" as const,
      submissionReference: parsed.data.referenceId,
      details: {
        reason: error instanceof Error ? error.message : "Unknown connector error.",
      },
    };
  });

  const submissionStatus =
    submission.status === "submitted" ? "submitted" : "manual_required";
  const { error: updateError } = await admin
    .from("partner_compliance_filings")
    .update({
      submission_status: submissionStatus,
      provider: submission.provider,
      submission_reference: submission.submissionReference,
      response_payload: submission.details,
      submitted_at: new Date().toISOString(),
    })
    .eq("id", filingRecord.id);
  if (updateError) {
    console.error("Failed to update filing record.", toSafeErrorRecord(updateError));
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "partner_compliance_efiling_submit",
    metadata: {
      filingRecordId: filingRecord.id,
      filingKind: parsed.data.filingKind,
      submissionStatus,
      provider: submission.provider,
      submissionReference: submission.submissionReference,
      ownerFactorType: auth.stepUp?.factorType ?? null,
    },
  });

  return NextResponse.json({
    success: true,
    filingRecordId: filingRecord.id,
    result: submission,
  });
}
