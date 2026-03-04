import { requireAdminForApi } from "@/lib/admin/auth";
import { toCsv } from "@/lib/admin/csv";
import { logReportExport } from "@/lib/admin/report-export";
import {
  buildFinanceAnalyticsCsvRows,
  loadLatestFinanceAnalyticsSnapshot,
  runFinanceServiceIntelligencePipeline,
} from "@/lib/finance/service-intelligence";
import { FINANCE_ANALYTICS_REPORT_TYPE } from "@/lib/finance/types";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

function parseWindowDays(value: string | null) {
  const parsed = Number(value ?? 30);
  if (!Number.isFinite(parsed)) return 30;
  return Math.max(7, Math.min(365, Math.trunc(parsed)));
}

export async function GET(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const { searchParams } = new URL(request.url);
  const windowDays = parseWindowDays(searchParams.get("days"));

  try {
    const admin = createSupabaseAdminClient();
    const snapshot =
      (await loadLatestFinanceAnalyticsSnapshot(admin, windowDays)) ??
      (await runFinanceServiceIntelligencePipeline(admin, {
        windowDays,
        reconciliationDays: Math.max(30, windowDays),
        maxRowsPerSource: 12000,
        triggeredBy: auth.userId,
        persistSnapshot: true,
        runReconciliation: false,
      }));

    const rows = buildFinanceAnalyticsCsvRows(snapshot);
    const columns = ["section", "key", "source", "region", "value_numeric", "value_text"];
    const csv = toCsv(rows, columns);

    const { exportId, checksum } = await logReportExport({
      adminUserId: auth.userId,
      reportType: FINANCE_ANALYTICS_REPORT_TYPE,
      csvContent: csv,
      rowCount: rows.length,
      metadata: {
        windowDays,
        generatedAt: snapshot.generated_at,
        asOfDate: snapshot.as_of_date,
        kpis: snapshot.kpis,
        coverage: snapshot.coverage,
        pipelineHealth: snapshot.pipeline_health,
      },
    });

    return new Response(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="finance-analytics-report-${windowDays}d-${new Date()
          .toISOString()
          .slice(0, 10)}.csv"`,
        "X-Export-Id": exportId,
        "X-Checksum-SHA256": checksum,
      },
    });
  } catch (error) {
    console.error("Failed to generate finance analytics report.", toSafeErrorRecord(error));
    return new Response(JSON.stringify({ error: "Failed to generate finance analytics report." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
