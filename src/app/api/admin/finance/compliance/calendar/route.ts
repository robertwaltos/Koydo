import { NextResponse } from "next/server";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

function parseInteger(value: string | null, fallback: number) {
  if (!value) return fallback;
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.trunc(parsed);
}

export async function GET(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const { searchParams } = new URL(request.url);
  const limit = Math.max(1, Math.min(2000, parseInteger(searchParams.get("limit"), 200)));
  const status = searchParams.get("status");
  const fromDate = searchParams.get("fromDate");
  const toDate = searchParams.get("toDate");

  const admin = createSupabaseAdminClient();
  let calendarQuery = admin
    .from("finance_compliance_calendar")
    .select(
      "id, requirement_id, period_start, period_end, due_date, filing_method, status, report_export_id, submission_method, submission_reference, submitted_at, assigned_to, notes, metadata, created_at, updated_at",
    )
    .order("due_date", { ascending: true })
    .limit(limit);

  if (status) calendarQuery = calendarQuery.eq("status", status);
  if (fromDate) calendarQuery = calendarQuery.gte("due_date", fromDate);
  if (toDate) calendarQuery = calendarQuery.lte("due_date", toDate);

  const [requirementsResult, calendarResult, alertsResult] = await Promise.all([
    admin
      .from("finance_compliance_requirements")
      .select(
        "id, requirement_code, requirement_name, authority_name, jurisdiction, applies_to, cadence, filing_method, report_type, default_alert_lead_days, is_active, metadata",
      )
      .order("requirement_code", { ascending: true })
      .limit(5000),
    calendarQuery,
    admin
      .from("finance_compliance_alerts")
      .select(
        "id, calendar_id, severity, alert_status, title, message, first_raised_at, last_raised_at, acknowledged_at, resolved_at, escalation_count, metadata, created_at, updated_at",
      )
      .order("last_raised_at", { ascending: false })
      .limit(limit),
  ]);

  const error = requirementsResult.error ?? calendarResult.error ?? alertsResult.error;
  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  return NextResponse.json({
    requirements: requirementsResult.data ?? [],
    calendar: calendarResult.data ?? [],
    alerts: alertsResult.data ?? [],
  });
}
