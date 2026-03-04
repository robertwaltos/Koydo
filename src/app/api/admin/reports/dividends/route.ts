import { requireAdminForApi } from "@/lib/admin/auth";
import { isMissingTableError } from "@/lib/admin/db-readiness";
import { toCsv } from "@/lib/admin/csv";
import { logReportExport } from "@/lib/admin/report-export";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { buildDividendRegisterRows, loadInvestorDataset } from "@/lib/finance/investor-reporting";
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
    const rows = buildDividendRegisterRows(dataset);
    const columns = [
      "declaration_id",
      "declaration_name",
      "declaration_status",
      "investor_name",
      "investor_email",
      "investor_class_code",
      "investor_class_name",
      "payment_status",
      "shares_eligible",
      "gross_amount_cents",
      "withholding_tax_cents",
      "net_amount_cents",
      "payment_reference",
      "paid_at",
      "declaration_record_date",
      "declaration_payment_date",
      "created_at",
    ];
    const csv = toCsv(rows, columns);

    const { exportId, checksum } = await logReportExport({
      adminUserId: auth.userId,
      reportType: FINANCE_REPORT_TYPE,
      csvContent: csv,
      rowCount: rows.length,
      metadata: {
        subReportType: "dividend_register",
        declarationCount: dataset.declarations.length,
        paymentCount: dataset.dividendPayments.length,
      },
    });

    return new Response(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="dividend-register-${new Date()
          .toISOString()
          .slice(0, 10)}.csv"`,
        "X-Export-Id": exportId,
        "X-Checksum-SHA256": checksum,
      },
    });
  } catch (error) {
    if (error instanceof Error && isMissingTableError(error.message)) {
      return new Response(
        JSON.stringify({ error: "Investor dividend tables are not available in this environment yet." }),
        {
          status: 503,
          headers: { "Content-Type": "application/json" },
        },
      );
    }
    console.error("Failed to generate dividend report.", toSafeErrorRecord(error));
    return new Response(JSON.stringify({ error: "Failed to generate dividend report." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
