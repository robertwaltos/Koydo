import { createHash } from "crypto";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

type ReportExportLogInput = {
  adminUserId: string;
  reportType: string;
  csvContent: string;
  rowCount: number;
};

export async function logReportExport({
  adminUserId,
  reportType,
  csvContent,
  rowCount,
}: ReportExportLogInput) {
  const checksum = createHash("sha256").update(csvContent).digest("hex");
  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("admin_report_exports")
    .insert({
      admin_user_id: adminUserId,
      report_type: reportType,
      format: "csv",
      status: "completed",
      row_count: rowCount,
      checksum_sha256: checksum,
      completed_at: new Date().toISOString(),
      metadata: {
        generatedAt: new Date().toISOString(),
      },
    })
    .select("id")
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return { exportId: data.id as string, checksum };
}
