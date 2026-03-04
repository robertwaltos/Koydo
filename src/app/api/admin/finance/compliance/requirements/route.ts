import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/admin/audit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const upsertSchema = z.object({
  id: z.string().uuid().optional(),
  requirementCode: z.string().min(3).max(120),
  requirementName: z.string().min(3).max(240),
  authorityName: z.string().min(2).max(240),
  jurisdiction: z.string().min(2).max(64).default("US"),
  appliesTo: z.enum(["investor", "business", "banking", "payroll", "tax"]).default("business"),
  cadence: z.enum(["monthly", "quarterly", "annual", "custom"]).default("annual"),
  dueMonth: z.number().int().min(1).max(12).optional().nullable(),
  dueDay: z.number().int().min(1).max(31).default(15),
  dueOffsetDays: z.number().int().min(-365).max(365).default(0),
  filingMethod: z.enum(["electronic", "paper", "either"]).default("electronic"),
  reportType: z.string().max(80).optional().nullable(),
  defaultAlertLeadDays: z.number().int().min(0).max(365).default(30),
  isActive: z.boolean().default(true),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("finance_compliance_requirements")
    .select(
      "id, requirement_code, requirement_name, authority_name, jurisdiction, applies_to, cadence, due_month, due_day, due_offset_days, filing_method, report_type, default_alert_lead_days, is_active, metadata, created_at, updated_at",
    )
    .order("requirement_code", { ascending: true })
    .limit(5000);

  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  return NextResponse.json({ requirements: data ?? [] });
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
  const payload = {
    id: parsed.data.id,
    requirement_code: parsed.data.requirementCode.trim().toUpperCase(),
    requirement_name: parsed.data.requirementName.trim(),
    authority_name: parsed.data.authorityName.trim(),
    jurisdiction: parsed.data.jurisdiction.trim().toUpperCase(),
    applies_to: parsed.data.appliesTo,
    cadence: parsed.data.cadence,
    due_month: parsed.data.dueMonth ?? null,
    due_day: parsed.data.dueDay,
    due_offset_days: parsed.data.dueOffsetDays,
    filing_method: parsed.data.filingMethod,
    report_type: parsed.data.reportType?.trim() || null,
    default_alert_lead_days: parsed.data.defaultAlertLeadDays,
    is_active: parsed.data.isActive,
    metadata: parsed.data.metadata ?? {},
  };

  const { data, error } = await admin
    .from("finance_compliance_requirements")
    .upsert(payload, { onConflict: "requirement_code" })
    .select(
      "id, requirement_code, requirement_name, authority_name, jurisdiction, applies_to, cadence, due_month, due_day, due_offset_days, filing_method, report_type, default_alert_lead_days, is_active, metadata, created_at, updated_at",
    )
    .single();

  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to upsert compliance requirement." }, { status: 500 });
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "finance_compliance_requirement_upsert",
    metadata: {
      requirementId: data.id,
      requirementCode: data.requirement_code,
      cadence: data.cadence,
      filingMethod: data.filing_method,
      isActive: data.is_active,
    },
  });

  return NextResponse.json({ success: true, requirement: data });
}
