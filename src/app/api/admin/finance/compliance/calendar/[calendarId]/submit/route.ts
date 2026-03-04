import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/admin/audit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const submitSchema = z.object({
  status: z.enum(["prepared", "submitted", "waived"]).default("submitted"),
  submissionMethod: z.enum(["electronic", "paper", "other"]).optional(),
  submissionReference: z.string().max(300).optional().nullable(),
  reportExportId: z.string().uuid().optional().nullable(),
  notes: z.string().max(5000).optional().nullable(),
});

type RouteContext = {
  params: Promise<{
    calendarId: string;
  }>;
};

export async function POST(request: Request, context: RouteContext) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const { calendarId } = await context.params;
  const body = await request.json().catch(() => null);
  const parsed = submitSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const nowIso = new Date().toISOString();
  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("finance_compliance_calendar")
    .update({
      status: parsed.data.status,
      submission_method:
        parsed.data.status === "submitted" ? parsed.data.submissionMethod ?? "electronic" : null,
      submission_reference: parsed.data.submissionReference?.trim() || null,
      report_export_id: parsed.data.reportExportId ?? null,
      submitted_at: parsed.data.status === "submitted" ? nowIso : null,
      notes: parsed.data.notes?.trim() || null,
    })
    .eq("id", calendarId)
    .select(
      "id, requirement_id, period_start, period_end, due_date, filing_method, status, report_export_id, submission_method, submission_reference, submitted_at, assigned_to, notes, metadata, created_at, updated_at",
    )
    .single();

  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to update compliance filing status." }, { status: 500 });
  }

  if (parsed.data.status === "submitted" || parsed.data.status === "waived") {
    await admin
      .from("finance_compliance_alerts")
      .update({ alert_status: "resolved", resolved_at: nowIso })
      .eq("calendar_id", calendarId)
      .neq("alert_status", "resolved");
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "finance_compliance_calendar_submit",
    metadata: {
      calendarId: data.id,
      status: data.status,
      submissionMethod: data.submission_method,
      submissionReference: data.submission_reference,
    },
  });

  return NextResponse.json({ success: true, filing: data });
}
