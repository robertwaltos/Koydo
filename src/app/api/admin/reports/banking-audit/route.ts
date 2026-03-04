import { NextResponse } from "next/server";
import { requireAdminForApi } from "@/lib/admin/auth";
import { isMissingTableError } from "@/lib/admin/db-readiness";
import { toCsv } from "@/lib/admin/csv";
import { logReportExport } from "@/lib/admin/report-export";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import {
  buildBankAuditFindings,
  createBankAuditRun,
  loadInvestorDataset,
} from "@/lib/finance/investor-reporting";
import { FINANCE_REPORT_TYPE } from "@/lib/finance/types";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

function parseDays(value: string | null) {
  if (!value) return 365;
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return 365;
  return Math.max(1, Math.min(3650, Math.trunc(parsed)));
}

function parseBoolean(value: string | null, defaultValue: boolean) {
  if (!value) return defaultValue;
  const normalized = value.trim().toLowerCase();
  if (["1", "true", "yes", "y"].includes(normalized)) return true;
  if (["0", "false", "no", "n"].includes(normalized)) return false;
  return defaultValue;
}

export async function GET(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const { searchParams } = new URL(request.url);
  const days = parseDays(searchParams.get("days"));
  const persistRun = parseBoolean(searchParams.get("persist"), true);
  const format = (searchParams.get("format") ?? "json").trim().toLowerCase();
  const periodStart = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const periodEnd = new Date().toISOString().slice(0, 10);

  try {
    const admin = createSupabaseAdminClient();
    const dataset = await loadInvestorDataset(admin, { limit: 20000 });
    const findings = buildBankAuditFindings(dataset);
    const severityCounts = {
      critical: findings.filter((finding) => finding.severity === "critical").length,
      warning: findings.filter((finding) => finding.severity === "warning").length,
      info: findings.filter((finding) => finding.severity === "info").length,
    };

    let auditRun: {
      id: string;
      audit_scope: string;
      period_start: string;
      period_end: string;
      status: string;
      summary: string | null;
      findings: unknown;
      created_at: string;
    } | null = null;
    if (persistRun) {
      auditRun = await createBankAuditRun({
        admin,
        generatedBy: auth.userId,
        periodStart,
        periodEnd,
        scope: "banking",
        findings,
      });
    }

    if (format === "csv") {
      const rows = findings.map((finding) => ({
        severity: finding.severity,
        category: finding.category,
        finding_title: finding.finding_title,
        finding_detail: finding.finding_detail,
        related_entity_type: finding.related_entity_type,
        related_entity_id: finding.related_entity_id,
        status: finding.status,
      }));

      const columns = [
        "severity",
        "category",
        "finding_title",
        "finding_detail",
        "related_entity_type",
        "related_entity_id",
        "status",
      ];
      const csv = toCsv(rows, columns);
      const { exportId, checksum } = await logReportExport({
        adminUserId: auth.userId,
        reportType: FINANCE_REPORT_TYPE,
        csvContent: csv,
        rowCount: rows.length,
        metadata: {
          subReportType: "banking_audit",
          daysWindow: days,
          periodStart,
          periodEnd,
          persistRun,
          auditRunId: auditRun?.id ?? null,
          severityCounts,
        },
      });

      return new Response(csv, {
        status: 200,
        headers: {
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": `attachment; filename="banking-audit-${new Date()
            .toISOString()
            .slice(0, 10)}.csv"`,
          "X-Export-Id": exportId,
          "X-Checksum-SHA256": checksum,
        },
      });
    }

    return NextResponse.json({
      generatedAt: new Date().toISOString(),
      periodStart,
      periodEnd,
      daysWindow: days,
      persistRun,
      auditRun,
      findings,
      summary: {
        totalFindings: findings.length,
        ...severityCounts,
      },
    });
  } catch (error) {
    if (error instanceof Error && isMissingTableError(error.message)) {
      return NextResponse.json(
        { error: "Investor/banking audit tables are not available in this environment yet." },
        { status: 503 },
      );
    }
    console.error("Failed to generate banking audit report.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to generate banking audit report." }, { status: 500 });
  }
}
