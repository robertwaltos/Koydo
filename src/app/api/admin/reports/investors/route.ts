import { requireAdminForApi } from "@/lib/admin/auth";
import { isMissingTableError } from "@/lib/admin/db-readiness";
import { toCsv } from "@/lib/admin/csv";
import { logReportExport } from "@/lib/admin/report-export";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { buildCapTableRows, loadInvestorDataset } from "@/lib/finance/investor-reporting";
import { FINANCE_REPORT_TYPE } from "@/lib/finance/types";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  try {
    const admin = createSupabaseAdminClient();
    const dataset = await loadInvestorDataset(admin, { limit: 20000 });
    const capTableRows = buildCapTableRows(dataset);
    const columns = [
      "investor_id",
      "investor_name",
      "investor_type",
      "investor_email",
      "investor_phone",
      "investor_class_code",
      "investor_class_name",
      "shares_owned",
      "ownership_percent",
      "ownership_percent_of_class",
      "primary_bank_name",
      "primary_bank_currency",
      "primary_bank_status",
      "kyc_status",
      "aml_status",
      "accreditation_status",
      "onboarding_status",
      "holding_status",
      "holding_created_at",
    ];
    const csv = toCsv(capTableRows, columns);
    const { exportId, checksum } = await logReportExport({
      adminUserId: auth.userId,
      reportType: FINANCE_REPORT_TYPE,
      csvContent: csv,
      rowCount: capTableRows.length,
      metadata: {
        subReportType: "investor_cap_table",
        investorCount: dataset.investors.length,
        holdingCount: dataset.holdings.length,
        generatedAt: new Date().toISOString(),
      },
    });

    return new Response(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="investor-cap-table-${new Date()
          .toISOString()
          .slice(0, 10)}.csv"`,
        "X-Export-Id": exportId,
        "X-Checksum-SHA256": checksum,
      },
    });
  } catch (error) {
    if (error instanceof Error && isMissingTableError(error.message)) {
      return new Response(
        JSON.stringify({ error: "Investor tables are not available in this environment yet." }),
        {
          status: 503,
          headers: { "Content-Type": "application/json" },
        },
      );
    }
    console.error("Failed to generate investor report.", toSafeErrorRecord(error));
    return new Response(JSON.stringify({ error: "Failed to generate investor report." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
