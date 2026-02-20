import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toCsv } from "@/lib/admin/csv";
import { logReportExport } from "@/lib/admin/report-export";

export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("admin_action_logs")
    .select("id, admin_user_id, action_type, target_user_id, metadata, created_at")
    .order("created_at", { ascending: false })
    .limit(5000);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const columns = [
    "id",
    "admin_user_id",
    "action_type",
    "target_user_id",
    "metadata",
    "created_at",
  ];
  const rows = data ?? [];
  const csv = toCsv(rows, columns);
  const { exportId, checksum } = await logReportExport({
    adminUserId: auth.userId,
    reportType: "audit",
    csvContent: csv,
    rowCount: rows.length,
  });

  return new Response(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="audit-report-${new Date().toISOString().slice(0, 10)}.csv"`,
      "X-Export-Id": exportId,
      "X-Checksum-SHA256": checksum,
    },
  });
}
