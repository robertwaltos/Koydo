import { NextResponse } from "next/server";
import { requireAdminForApi } from "@/lib/admin/auth";
import { isMissingTableError } from "@/lib/admin/db-readiness";
import { toCsv } from "@/lib/admin/csv";
import { logReportExport } from "@/lib/admin/report-export";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import {
  buildFinanceSnapshot,
  buildTaxProjectionCsvRows,
  loadFinanceDataset,
} from "@/lib/finance/reporting";
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

function wantsCsv(value: string | null) {
  if (!value) return true;
  const normalized = value.trim().toLowerCase();
  return normalized === "csv";
}

export async function GET(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const { searchParams } = new URL(request.url);
  const days = parseDays(searchParams.get("days"));
  const sinceDate = toSinceDate(days);
  const asCsv = wantsCsv(searchParams.get("format"));

  try {
    const admin = createSupabaseAdminClient();
    const dataset = await loadFinanceDataset(admin, {
      sinceDate,
      limit: 200000,
    });
    const snapshot = buildFinanceSnapshot(dataset);
    const rows = buildTaxProjectionCsvRows(snapshot);

    if (!snapshot.tax_projection) {
      return NextResponse.json(
        {
          error: "No active owner tax profile is configured.",
          details:
            "Create or activate an owner tax profile in the Finance admin section to generate tax projection reports.",
        },
        { status: 409 },
      );
    }

    if (!asCsv) {
      return NextResponse.json({
        generatedAt: snapshot.generated_at,
        sinceDate,
        daysWindow: days,
        totals: snapshot.totals,
        taxProjection: snapshot.tax_projection,
        monthly: snapshot.monthly,
      });
    }

    const columns = [
      "owner_name",
      "filing_status",
      "effective_total_rate",
      "taxable_income_cents",
      "projected_tax_cents",
      "projected_after_tax_income_cents",
      "notes",
      "revenue_cents",
      "operating_expense_cents",
      "booked_tax_expense_cents",
      "net_income_pre_tax_cents",
      "net_income_after_booked_tax_cents",
      "deductible_expense_cents",
      "generated_at",
    ];
    const csv = toCsv(rows, columns);

    const { exportId, checksum } = await logReportExport({
      adminUserId: auth.userId,
      reportType: FINANCE_REPORT_TYPE,
      csvContent: csv,
      rowCount: rows.length,
      metadata: {
        subReportType: "tax_projection",
        daysWindow: days,
        sinceDate,
        totals: snapshot.totals,
        taxProjection: snapshot.tax_projection,
      },
    });

    return new Response(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="tax-projection-${days}d-${new Date()
          .toISOString()
          .slice(0, 10)}.csv"`,
        "X-Export-Id": exportId,
        "X-Checksum-SHA256": checksum,
      },
    });
  } catch (error) {
    if (error instanceof Error && isMissingTableError(error.message)) {
      return NextResponse.json(
        { error: "Finance tables are not available in this environment yet." },
        { status: 503 },
      );
    }
    console.error("Failed to generate tax projection report.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to generate tax projection report." }, { status: 500 });
  }
}
