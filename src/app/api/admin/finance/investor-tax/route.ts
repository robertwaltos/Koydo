import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/admin/audit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const upsertSchema = z.object({
  investorId: z.string().uuid(),
  taxFormType: z.enum(["w9", "w8_ben", "w8_ben_e", "w8_eci", "w8_imy", "none", "other"]).default("none"),
  taxClassification: z.string().max(200).optional().nullable(),
  tinType: z.enum(["ssn", "ein", "itin", "foreign", "other", "none"]).default("none"),
  taxIdentifier: z.string().max(40).optional().nullable(),
  usTaxpayer: z.boolean().default(false),
  backupWithholdingRequired: z.boolean().default(false),
  withholdingRate: z.number().min(0).max(1).default(0),
  exemptionCode: z.string().max(80).optional().nullable(),
  fatcaStatus: z.enum(["unknown", "not_applicable", "reportable", "documented"]).default("unknown"),
  formReceivedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional().nullable(),
  formExpirationDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional().nullable(),
  status: z.enum(["pending", "valid", "expired", "rejected"]).default("pending"),
  notes: z.string().max(5000).optional().nullable(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

function toLast4(value: string | null | undefined) {
  if (!value) return null;
  const normalized = value.replace(/\s+/g, "");
  if (!normalized) return null;
  return normalized.slice(-4);
}

export async function GET(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const { searchParams } = new URL(request.url);
  const investorId = searchParams.get("investorId");

  const admin = createSupabaseAdminClient();
  let query = admin
    .from("investor_tax_profiles")
    .select(
      "id, investor_id, tax_form_type, tax_classification, tin_type, tin_last4, us_taxpayer, backup_withholding_required, withholding_rate, exemption_code, fatca_status, form_received_at, form_expiration_date, status, notes, metadata, created_by, created_at, updated_at",
    )
    .order("updated_at", { ascending: false })
    .limit(2000);

  if (investorId) {
    query = query.eq("investor_id", investorId);
  }

  const [profilesResult, investorsResult] = await Promise.all([
    query,
    admin
      .from("investors")
      .select("id, legal_name, investor_type, contact_email")
      .order("legal_name", { ascending: true })
      .limit(5000),
  ]);
  const error = profilesResult.error ?? investorsResult.error;
  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  return NextResponse.json({
    profiles: profilesResult.data ?? [],
    investors: investorsResult.data ?? [],
  });
}

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const body = await request.json().catch(() => null);
  const parsed = upsertSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("investor_tax_profiles")
    .upsert(
      {
        investor_id: parsed.data.investorId,
        tax_form_type: parsed.data.taxFormType,
        tax_classification: parsed.data.taxClassification?.trim() || null,
        tin_type: parsed.data.tinType,
        tin_last4: toLast4(parsed.data.taxIdentifier),
        us_taxpayer: parsed.data.usTaxpayer,
        backup_withholding_required: parsed.data.backupWithholdingRequired,
        withholding_rate: parsed.data.withholdingRate,
        exemption_code: parsed.data.exemptionCode?.trim() || null,
        fatca_status: parsed.data.fatcaStatus,
        form_received_at: parsed.data.formReceivedAt ?? null,
        form_expiration_date: parsed.data.formExpirationDate ?? null,
        status: parsed.data.status,
        notes: parsed.data.notes?.trim() || null,
        metadata: parsed.data.metadata ?? {},
        created_by: auth.userId,
      },
      { onConflict: "investor_id" },
    )
    .select(
      "id, investor_id, tax_form_type, tax_classification, tin_type, tin_last4, us_taxpayer, backup_withholding_required, withholding_rate, exemption_code, fatca_status, form_received_at, form_expiration_date, status, notes, metadata, created_by, created_at, updated_at",
    )
    .single();

  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to upsert investor tax profile." }, { status: 500 });
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "finance_investor_tax_profile_upsert",
    metadata: {
      investorId: data.investor_id,
      taxFormType: data.tax_form_type,
      status: data.status,
      withholdingRate: data.withholding_rate,
    },
  });

  return NextResponse.json({ success: true, profile: data });
}
