import { NextResponse } from "next/server";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toCsv } from "@/lib/admin/csv";
import { logReportExport } from "@/lib/admin/report-export";
import {
  buildTelemetryDailyCsvRows,
  buildTelemetrySummary,
  type LearningEventReportRow,
} from "@/lib/admin/telemetry-report";
import { buildFinanceCsvRows, buildFinanceSnapshot, loadFinanceDataset } from "@/lib/finance/reporting";
import {
  buildFinanceAnalyticsCsvRows,
  loadLatestFinanceAnalyticsSnapshot,
  runFinanceServiceIntelligencePipeline,
} from "@/lib/finance/service-intelligence";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

async function buildReportCsv(reportType: string) {
  const admin = createSupabaseAdminClient();

  if (reportType === "dsar") {
    const { data } = await admin
      .from("dsar_requests")
      .select("id, user_id, request_type, status, details, requested_at, resolved_at")
      .order("requested_at", { ascending: false })
      .limit(5000);
    const rows = data ?? [];
    const csv = toCsv(rows, [
      "id",
      "user_id",
      "request_type",
      "status",
      "details",
      "requested_at",
      "resolved_at",
    ]);
    return { csv, rowCount: rows.length, metadata: { sourceRows: rows.length } };
  }

  if (reportType === "support") {
    const { data } = await admin
      .from("support_tickets")
      .select(
        "id, user_id, subject, description, status, priority, ticket_type, parent_confirmation_required, parent_confirmation_status, ai_response_status, ai_response_text, auto_response_model, first_response_due_at, first_response_at, sla_breached_at, assigned_to, resolution_notes, created_at, updated_at, resolved_at"
      )
      .order("created_at", { ascending: false })
      .limit(5000);
    const rows = data ?? [];
    const csv = toCsv(rows, [
      "id",
      "user_id",
      "subject",
      "description",
      "status",
      "priority",
      "ticket_type",
      "parent_confirmation_required",
      "parent_confirmation_status",
      "ai_response_status",
      "ai_response_text",
      "auto_response_model",
      "first_response_due_at",
      "first_response_at",
      "sla_breached_at",
      "assigned_to",
      "resolution_notes",
      "created_at",
      "updated_at",
      "resolved_at",
    ]);
    return { csv, rowCount: rows.length, metadata: { sourceRows: rows.length } };
  }

  if (reportType === "audit") {
    const { data } = await admin
      .from("admin_action_logs")
      .select("id, admin_user_id, action_type, target_user_id, metadata, created_at")
      .order("created_at", { ascending: false })
      .limit(5000);
    const rows = data ?? [];
    const csv = toCsv(rows, [
      "id",
      "admin_user_id",
      "action_type",
      "target_user_id",
      "metadata",
      "created_at",
    ]);
    return { csv, rowCount: rows.length, metadata: { sourceRows: rows.length } };
  }

  if (reportType === "telemetry") {
    const days = 30;
    const cutoffIso = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
    const { data, error } = await admin
      .from("learning_events")
      .select("user_id, module_id, lesson_id, event_type, event_at")
      .gte("event_at", cutoffIso)
      .order("event_at", { ascending: false })
      .limit(200000);
    if (error) {
      throw new Error(`Failed loading telemetry rows: ${error.message}`);
    }
    const sourceRows = (data ?? []) as LearningEventReportRow[];
    const rollupRows = buildTelemetryDailyCsvRows(sourceRows);
    const summary = buildTelemetrySummary(sourceRows);
    const csv = toCsv(rollupRows, [
      "day",
      "event_type",
      "event_count",
      "unique_users",
      "unique_modules",
      "unique_lessons",
    ]);
    return {
      csv,
      rowCount: rollupRows.length,
      metadata: {
        daysWindow: days,
        sourceEventCount: sourceRows.length,
        cutoffIso,
        summary,
      },
    };
  }

  if (reportType === "finance") {
    const days = 365;
    const sinceDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
    const dataset = await loadFinanceDataset(admin, { sinceDate, limit: 200000 });
    const snapshot = buildFinanceSnapshot(dataset);
    const rows = buildFinanceCsvRows(snapshot.line_items);
    const csv = toCsv(rows, [
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
    ]);
    return {
      csv,
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
    };
  }

  if (reportType === "finance_analytics") {
    const windowDays = 30;
    const snapshot =
      (await loadLatestFinanceAnalyticsSnapshot(admin, windowDays)) ??
      (await runFinanceServiceIntelligencePipeline(admin, {
        windowDays,
        reconciliationDays: 120,
        maxRowsPerSource: 12000,
        persistSnapshot: true,
        runReconciliation: false,
      }));
    const rows = buildFinanceAnalyticsCsvRows(snapshot);
    const csv = toCsv(rows, ["section", "key", "source", "region", "value_numeric", "value_text"]);
    return {
      csv,
      rowCount: rows.length,
      metadata: {
        daysWindow: windowDays,
        asOfDate: snapshot.as_of_date,
        generatedAt: snapshot.generated_at,
        kpis: snapshot.kpis,
        coverage: snapshot.coverage,
        pipelineHealth: snapshot.pipeline_health,
      },
    };
  }

  if (reportType === "compliance_audit") {
    const { data: run, error: runError } = await admin
      .from("compliance_audit_runs")
      .select(
        "id, status, score, target_score, checks_total, checks_pass, checks_warn, checks_fail, evidence_artifact_id, completed_at, created_at",
      )
      .eq("scope", "app_store")
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();
    if (runError) {
      throw new Error(`Failed loading compliance audit run: ${runError.message}`);
    }

    if (!run) {
      const rows = [
        {
          section: "warning",
          key: "no_run",
          source: "",
          region: "",
          value_numeric: "",
          value_text: "No triple-pass compliance audit run found.",
        },
      ];
      return {
        csv: toCsv(rows, ["section", "key", "source", "region", "value_numeric", "value_text"]),
        rowCount: rows.length,
        metadata: {
          generatedAt: new Date().toISOString(),
          sourceRows: 0,
        },
      };
    }

    const { data: findings, error: findingError } = await admin
      .from("compliance_audit_findings")
      .select("pass_name, finding_key, severity, title, detail, remediation")
      .eq("run_id", run.id)
      .order("created_at", { ascending: true });
    if (findingError) {
      throw new Error(`Failed loading compliance audit findings: ${findingError.message}`);
    }

    const rows: Array<Record<string, string | number | null>> = [
      { section: "run", key: "status", source: "", region: "", value_numeric: "", value_text: String(run.status) },
      { section: "run", key: "score", source: "", region: "", value_numeric: Number(run.score ?? 0), value_text: "" },
      { section: "run", key: "target_score", source: "", region: "", value_numeric: Number(run.target_score ?? 10), value_text: "" },
      { section: "run", key: "checks_total", source: "", region: "", value_numeric: Number(run.checks_total ?? 0), value_text: "" },
      { section: "run", key: "checks_pass", source: "", region: "", value_numeric: Number(run.checks_pass ?? 0), value_text: "" },
      { section: "run", key: "checks_warn", source: "", region: "", value_numeric: Number(run.checks_warn ?? 0), value_text: "" },
      { section: "run", key: "checks_fail", source: "", region: "", value_numeric: Number(run.checks_fail ?? 0), value_text: "" },
      {
        section: "run",
        key: "evidence_artifact_id",
        source: "",
        region: "",
        value_numeric: "",
        value_text: String(run.evidence_artifact_id ?? ""),
      },
    ];

    for (const finding of findings ?? []) {
      rows.push({
        section: `finding_${finding.severity}`,
        key: `${finding.pass_name}:${finding.finding_key}`,
        source: String(finding.pass_name),
        region: "",
        value_numeric: "",
        value_text: `${finding.title} | ${finding.detail}${finding.remediation ? ` | remediation=${finding.remediation}` : ""}`,
      });
    }

    return {
      csv: toCsv(rows, ["section", "key", "source", "region", "value_numeric", "value_text"]),
      rowCount: rows.length,
      metadata: {
        runId: run.id,
        completedAt: run.completed_at,
        generatedAt: run.created_at,
      },
    };
  }

  throw new Error(`Unsupported report type: ${reportType}`);
}

async function claimReportJob(
  admin: ReturnType<typeof createSupabaseAdminClient>,
  jobId: string,
  startedAtIso: string,
) {
  const { data, error } = await admin
    .from("admin_report_jobs")
    .update({
      status: "running",
      started_at: startedAtIso,
      completed_at: null,
      error: null,
    })
    .eq("id", jobId)
    .eq("status", "queued")
    .select("id")
    .maybeSingle();

  if (error) {
    throw new Error(`Unable to claim report job ${jobId}: ${error.message}`);
  }

  return Boolean(data?.id);
}

export async function POST() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const admin = createSupabaseAdminClient();
  const nowIso = new Date().toISOString();
  const { data: jobs, error } = await admin
    .from("admin_report_jobs")
    .select("id, report_type, requested_by")
    .eq("status", "queued")
    .lte("run_after", nowIso)
    .order("run_after", { ascending: true })
    .limit(10);

  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
  if (!jobs || jobs.length === 0) {
    return NextResponse.json({ success: true, processed: 0, claimed: 0, skipped: 0 });
  }

  let processed = 0;
  let claimed = 0;
  let skipped = 0;
  for (const job of jobs) {
    const startIso = new Date().toISOString();
    const wasClaimed = await claimReportJob(admin, job.id, startIso);
    if (!wasClaimed) {
      skipped += 1;
      continue;
    }
    claimed += 1;

    try {
      const { csv, rowCount, metadata } = await buildReportCsv(job.report_type);
      await logReportExport({
        adminUserId: job.requested_by ?? auth.userId,
        reportType: job.report_type,
        csvContent: csv,
        rowCount,
        metadata,
      });
      await admin
        .from("admin_report_jobs")
        .update({
          status: "completed",
          completed_at: new Date().toISOString(),
        })
        .eq("id", job.id)
        .eq("status", "running");
      processed += 1;
    } catch (runError) {
      await admin
        .from("admin_report_jobs")
        .update({
          status: "failed",
          completed_at: new Date().toISOString(),
          error: runError instanceof Error ? runError.message : "Unknown error",
        })
        .eq("id", job.id)
        .eq("status", "running");
    }
  }

  return NextResponse.json({ success: true, processed, claimed, skipped });
}

