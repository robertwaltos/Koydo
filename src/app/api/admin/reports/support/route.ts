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
    .from("support_tickets")
    .select(
      "id, user_id, subject, description, status, priority, assigned_to, resolution_notes, created_at, updated_at, resolved_at"
    )
    .order("created_at", { ascending: false })
    .limit(5000);

  if (error) {
    console.error("Failed to query support report source rows.", toSafeErrorRecord(error));
    return new Response(JSON.stringify({ error: "Failed to query support report source rows." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const columns = [
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
  ];
  const rows = data ?? [];
  const csv = toCsv(rows, columns);
  const { exportId, checksum } = await logReportExport({
    adminUserId: auth.userId,
    reportType: "support",
    csvContent: csv,
    rowCount: rows.length,
  });

  return new Response(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="support-report-${new Date().toISOString().slice(0, 10)}.csv"`,
      "X-Export-Id": exportId,
      "X-Checksum-SHA256": checksum,
    },
  });
}
