import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toCsv } from "@/lib/admin/csv";
import { logReportExport } from "@/lib/admin/report-export";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("dsar_requests")
    .select("id, user_id, request_type, status, details, requested_at, resolved_at")
    .order("requested_at", { ascending: false })
    .limit(5000);

  if (error) {
    console.error("Failed to query DSAR report source rows.", toSafeErrorRecord(error));
    return new Response(JSON.stringify({ error: "Failed to query DSAR report source rows." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const columns = [
    "id",
    "user_id",
    "request_type",
    "status",
    "details",
    "requested_at",
    "resolved_at",
  ];
  const rows = data ?? [];
  const csv = toCsv(rows, columns);
  const { exportId, checksum } = await logReportExport({
    adminUserId: auth.userId,
    reportType: "dsar",
    csvContent: csv,
    rowCount: rows.length,
  });

  return new Response(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="dsar-report-${new Date().toISOString().slice(0, 10)}.csv"`,
      "X-Export-Id": exportId,
      "X-Checksum-SHA256": checksum,
    },
  });
}
