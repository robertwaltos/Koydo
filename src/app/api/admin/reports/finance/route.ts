import { requireAdminForApi } from "@/lib/admin/auth";
import { isMissingTableError } from "@/lib/admin/db-readiness";
import { toCsv } from "@/lib/admin/csv";
import { logReportExport } from "@/lib/admin/report-export";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { buildFinanceCsvRows, buildFinanceSnapshot, loadFinanceDataset } from "@/lib/finance/reporting";
import { FINANCE_REPORT_TYPE } from "@/lib/finance/types";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

function parseDays(value: string | null) {
  if (!value) return 365;
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return 365;
  return Math.max(1, Math.min(3650, Math.trunc(parsed)));
}

function toSinceDate(days: number) {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

export async function GET(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const { searchParams } = new URL(request.url);
  const days = parseDays(searchParams.get("days"));
  const sinceDate = toSinceDate(days);

  try {
    const admin = createSupabaseAdminClient();
    const dataset = await loadFinanceDataset(admin, {
      sinceDate,
      limit: 200000,
    });
    const snapshot = buildFinanceSnapshot(dataset);
    const rows = buildFinanceCsvRows(snapshot.line_items);
    const columns = [
      "occurred_on",
      "transaction_id",
      "description",
      "side",
      "account_code",
      "account_name",
      "account_type",
      "account_category",
      "amount_cents",
      "signed_amount_cents",
      "signed_amount_usd",
      "revenue_channel",
      "counterparty_name",
      "tax_deductible",
      "entry_kind",
      "source_system",
      "source_ref",
      "created_at",
    ];
    const csv = toCsv(rows, columns);

    const { exportId, checksum } = await logReportExport({
      adminUserId: auth.userId,
      reportType: FINANCE_REPORT_TYPE,
      csvContent: csv,
      rowCount: rows.length,
      metadata: {
        daysWindow: days,
        sinceDate,
        lineItemCount: rows.length,
        totals: snapshot.totals,
        revenueChannels: snapshot.revenue_channels,
        expenseCategories: snapshot.expense_categories,
        taxProjection: snapshot.tax_projection,
      },
    });

    return new Response(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="finance-ledger-report-${days}d-${new Date()
          .toISOString()
          .slice(0, 10)}.csv"`,
        "X-Export-Id": exportId,
        "X-Checksum-SHA256": checksum,
      },
    });
  } catch (error) {
    if (error instanceof Error && isMissingTableError(error.message)) {
      return new Response(
        JSON.stringify({ error: "Finance tables are not available in this environment yet." }),
        {
          status: 503,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    console.error("Failed to generate finance report.", toSafeErrorRecord(error));
    return new Response(JSON.stringify({ error: "Failed to generate finance report." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
