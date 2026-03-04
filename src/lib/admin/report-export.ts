import { createHash } from "crypto";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { storeComplianceEvidenceArtifact } from "@/lib/compliance/evidence-vault";

type ReportExportLogInput = {
  adminUserId: string;
  reportType: string;
  csvContent: string;
  rowCount: number;
  metadata?: Record<string, unknown>;
};

export async function logReportExport({
  adminUserId,
  reportType,
  csvContent,
  rowCount,
  metadata = {},
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
        ...metadata,
      },
    })
    .select("id")
    .single();

  if (error) {
    throw new Error(error.message);
  }

  try {
    await storeComplianceEvidenceArtifact(
      {
        artifactType: "report_export",
        createdBy: adminUserId,
        storagePath: `reports/${reportType}/${data.id}.csv`,
        content: csvContent,
        metadata: {
          reportType,
          rowCount,
          exportId: data.id,
        },
      },
      admin,
    );
  } catch (evidenceError) {
    console.error("Failed to store compliance evidence artifact for report export.", evidenceError);
  }

  return { exportId: data.id as string, checksum };
}
