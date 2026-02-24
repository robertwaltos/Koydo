import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toCsv } from "@/lib/admin/csv";
import { logReportExport } from "@/lib/admin/report-export";
import {
  buildTelemetryDailyCsvRows,
  buildTelemetrySummary,
  type LearningEventReportRow,
} from "@/lib/admin/telemetry-report";

function parseDays(value: string | null) {
  if (!value) return 30;
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return 30;
  return Math.max(1, Math.min(90, Math.trunc(parsed)));
}

export async function GET(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const { searchParams } = new URL(request.url);
  const days = parseDays(searchParams.get("days"));
  const cutoffIso = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("learning_events")
    .select("user_id, module_id, lesson_id, event_type, event_at")
    .gte("event_at", cutoffIso)
    .order("event_at", { ascending: false })
    .limit(200000);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const sourceRows = (data ?? []) as LearningEventReportRow[];
  const rollupRows = buildTelemetryDailyCsvRows(sourceRows);
  const summary = buildTelemetrySummary(sourceRows);

  const columns = [
    "day",
    "event_type",
    "event_count",
    "unique_users",
    "unique_modules",
    "unique_lessons",
  ];
  const csv = toCsv(rollupRows, columns);
  const { exportId, checksum } = await logReportExport({
    adminUserId: auth.userId,
    reportType: "telemetry",
    csvContent: csv,
    rowCount: rollupRows.length,
    metadata: {
      daysWindow: days,
      sourceEventCount: sourceRows.length,
      cutoffIso,
      summary,
    },
  });

  return new Response(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="telemetry-report-${days}d-${new Date()
        .toISOString()
        .slice(0, 10)}.csv"`,
      "X-Export-Id": exportId,
      "X-Checksum-SHA256": checksum,
      "X-Telemetry-Source-Events": String(sourceRows.length),
    },
  });
}
