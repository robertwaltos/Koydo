import { NextResponse } from "next/server";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toCsv } from "@/lib/admin/csv";
import { logReportExport } from "@/lib/admin/report-export";

type ReportType = "dsar" | "support" | "audit";

async function buildReportCsv(reportType: ReportType) {
  const admin = createSupabaseAdminClient();

  if (reportType === "dsar") {
    const { data } = await admin
      .from("dsar_requests")
      .select("id, user_id, request_type, status, details, requested_at, resolved_at")
      .order("requested_at", { ascending: false })
      .limit(5000);
    const rows = data ?? [];
    const csv = toCsv(rows, [
      "id",
      "user_id",
      "request_type",
      "status",
      "details",
      "requested_at",
      "resolved_at",
    ]);
    return { csv, rowCount: rows.length };
  }

  if (reportType === "support") {
    const { data } = await admin
      .from("support_tickets")
      .select(
        "id, user_id, subject, description, status, priority, assigned_to, resolution_notes, created_at, updated_at, resolved_at"
      )
      .order("created_at", { ascending: false })
      .limit(5000);
    const rows = data ?? [];
    const csv = toCsv(rows, [
      "id",
      "user_id",
      "subject",
      "description",
      "status",
      "priority",
      "assigned_to",
      "resolution_notes",
      "created_at",
      "updated_at",
      "resolved_at",
    ]);
    return { csv, rowCount: rows.length };
  }

  const { data } = await admin
    .from("admin_action_logs")
    .select("id, admin_user_id, action_type, target_user_id, metadata, created_at")
    .order("created_at", { ascending: false })
    .limit(5000);
  const rows = data ?? [];
  const csv = toCsv(rows, [
    "id",
    "admin_user_id",
    "action_type",
    "target_user_id",
    "metadata",
    "created_at",
  ]);
  return { csv, rowCount: rows.length };
}

export async function POST() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const admin = createSupabaseAdminClient();
  const nowIso = new Date().toISOString();
  const { data: jobs, error } = await admin
    .from("admin_report_jobs")
    .select("id, report_type")
    .eq("status", "queued")
    .lte("run_after", nowIso)
    .order("run_after", { ascending: true })
    .limit(10);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  if (!jobs || jobs.length === 0) {
    return NextResponse.json({ success: true, processed: 0 });
  }

  let processed = 0;
  for (const job of jobs) {
    const reportType = job.report_type as ReportType;
    await admin
      .from("admin_report_jobs")
      .update({ status: "running", started_at: new Date().toISOString() })
      .eq("id", job.id);

    try {
      const { csv, rowCount } = await buildReportCsv(reportType);
      await logReportExport({
        adminUserId: auth.userId,
        reportType,
        csvContent: csv,
        rowCount,
      });
      await admin
        .from("admin_report_jobs")
        .update({
          status: "completed",
          completed_at: new Date().toISOString(),
        })
        .eq("id", job.id);
      processed += 1;
    } catch (runError) {
      await admin
        .from("admin_report_jobs")
        .update({
          status: "failed",
          completed_at: new Date().toISOString(),
          error: runError instanceof Error ? runError.message : "Unknown error",
        })
        .eq("id", job.id);
    }
  }

  return NextResponse.json({ success: true, processed });
}
