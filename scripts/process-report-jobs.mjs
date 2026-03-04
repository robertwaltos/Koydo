import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { createClient } from "@supabase/supabase-js";

const envPath = path.resolve(".env");

const REPORT_CONFIG = {
  dsar: {
    select: "id, user_id, request_type, status, details, requested_at, resolved_at",
    orderColumn: "requested_at",
    columns: ["id", "user_id", "request_type", "status", "details", "requested_at", "resolved_at"],
  },
  support: {
    select:
      "id, user_id, subject, description, status, priority, ticket_type, parent_confirmation_required, parent_confirmation_status, ai_response_status, ai_response_text, auto_response_model, first_response_due_at, first_response_at, sla_breached_at, assigned_to, resolution_notes, created_at, updated_at, resolved_at",
    orderColumn: "created_at",
    columns: [
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
    ],
  },
  audit: {
    select: "id, admin_user_id, action_type, target_user_id, metadata, created_at",
    orderColumn: "created_at",
    columns: ["id", "admin_user_id", "action_type", "target_user_id", "metadata", "created_at"],
  },
  telemetry: {
    select: "user_id, module_id, lesson_id, event_type, event_at",
    orderColumn: "event_at",
    columns: [
      "day",
      "event_type",
      "event_count",
      "unique_users",
      "unique_modules",
      "unique_lessons",
    ],
  },
  finance: {
    select:
      "id, occurred_on, description, amount_cents, debit_account_code, credit_account_code, entry_kind, revenue_channel, counterparty_name, tax_deductible, source_system, source_ref, created_at",
    orderColumn: "occurred_on",
    columns: [
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
    ],
  },
  finance_analytics: {
    select:
      "as_of_date, window_days, dau, mau, paying_users, active_subscriptions, mrr_cents, arr_cents, revenue_cents, operating_expense_cents, marketing_spend_cents, ai_cost_cents, infrastructure_cost_cents, gross_margin_cents, coverage, pipeline_health, created_at",
    orderColumn: "created_at",
    columns: [
      "section",
      "key",
      "source",
      "region",
      "value_numeric",
      "value_text",
    ],
  },
  compliance_audit: {
    select:
      "id, status, score, target_score, checks_total, checks_pass, checks_warn, checks_fail, evidence_artifact_id, completed_at, created_at",
    orderColumn: "created_at",
    columns: [
      "section",
      "key",
      "source",
      "region",
      "value_numeric",
      "value_text",
    ],
  },
};

function parseArgs(argv) {
  const args = { apply: false, limit: 25, retryFailed: false, retryLimit: 25 };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--apply") {
      args.apply = true;
      continue;
    }
    if (arg === "--retry-failed") {
      args.retryFailed = true;
      continue;
    }
    if (arg === "--limit") {
      const next = argv[index + 1];
      if (next) {
        const parsed = Number(next);
        if (Number.isFinite(parsed) && parsed > 0) {
          args.limit = Math.min(250, Math.floor(parsed));
        }
        index += 1;
      }
    }
    if (arg === "--retry-limit") {
      const next = argv[index + 1];
      if (next) {
        const parsed = Number(next);
        if (Number.isFinite(parsed) && parsed > 0) {
          args.retryLimit = Math.min(500, Math.floor(parsed));
        }
        index += 1;
      }
    }
  }
  return args;
}

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const raw = fs.readFileSync(filePath, "utf8");
  const lines = raw.split(/\r?\n/);
  const values = {};

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const equalsIndex = trimmed.indexOf("=");
    if (equalsIndex < 0) continue;
    const key = trimmed.slice(0, equalsIndex).trim();
    const value = trimmed.slice(equalsIndex + 1).trim();
    values[key] = value;
  }

  return values;
}

function readEnvValue(fileValues, key, fallbackKey) {
  if (process.env[key]) return process.env[key];
  if (fallbackKey && process.env[fallbackKey]) return process.env[fallbackKey];
  if (fileValues[key]) return fileValues[key];
  if (fallbackKey && fileValues[fallbackKey]) return fileValues[fallbackKey];
  return "";
}

function escapeCell(value) {
  if (value === null || value === undefined) {
    return "";
  }
  const raw = typeof value === "string" ? value : JSON.stringify(value);
  const normalized = raw.replace(/"/g, '""');
  if (/[",\n]/.test(normalized)) {
    return `"${normalized}"`;
  }
  return normalized;
}

function toCsv(rows, columns) {
  const header = columns.join(",");
  const body = rows.map((row) => columns.map((column) => escapeCell(row[column])).join(",")).join("\n");
  return `${header}\n${body}`;
}

function buildTelemetryDailyRows(rows) {
  const bucketMap = new Map();
  for (const row of rows) {
    const eventAt = new Date(row.event_at);
    if (Number.isNaN(eventAt.getTime())) continue;
    const day = eventAt.toISOString().slice(0, 10);
    const eventType = String(row.event_type || "unknown");
    const key = `${day}|${eventType}`;
    if (!bucketMap.has(key)) {
      bucketMap.set(key, {
        eventCount: 0,
        userIds: new Set(),
        moduleIds: new Set(),
        lessonIds: new Set(),
      });
    }
    const bucket = bucketMap.get(key);
    bucket.eventCount += 1;
    if (row.user_id) bucket.userIds.add(row.user_id);
    if (row.module_id) bucket.moduleIds.add(row.module_id);
    if (row.lesson_id) bucket.lessonIds.add(row.lesson_id);
  }

  const rowsOut = [];
  for (const [key, bucket] of bucketMap.entries()) {
    const [day, eventType] = key.split("|");
    rowsOut.push({
      day,
      event_type: eventType,
      event_count: bucket.eventCount,
      unique_users: bucket.userIds.size,
      unique_modules: bucket.moduleIds.size,
      unique_lessons: bucket.lessonIds.size,
    });
  }

  rowsOut.sort((left, right) => {
    if (left.day !== right.day) {
      return left.day < right.day ? 1 : -1;
    }
    return String(left.event_type).localeCompare(String(right.event_type));
  });

  return rowsOut;
}

function toSignedAmountCents(accountType, side, amountCents) {
  const debitPositive = accountType === "asset" || accountType === "expense";
  if (side === "debit") {
    return debitPositive ? amountCents : -amountCents;
  }
  return debitPositive ? -amountCents : amountCents;
}

async function buildReportCsv(supabase, reportType) {
  const config = REPORT_CONFIG[reportType];
  if (!config) {
    throw new Error(`Unsupported report type: ${reportType}`);
  }

  if (reportType === "telemetry") {
    const daysWindow = 30;
    const cutoffIso = new Date(Date.now() - daysWindow * 24 * 60 * 60 * 1000).toISOString();
    const { data, error } = await supabase
      .from("learning_events")
      .select(config.select)
      .gte("event_at", cutoffIso)
      .order(config.orderColumn, { ascending: false })
      .limit(200000);

    if (error) {
      throw new Error(`Failed loading telemetry rows: ${error.message}`);
    }

    const sourceRows = data ?? [];
    const rollupRows = buildTelemetryDailyRows(sourceRows);
    return {
      csvContent: toCsv(rollupRows, config.columns),
      rowCount: rollupRows.length,
      metadata: {
        daysWindow,
        sourceEventCount: sourceRows.length,
        cutoffIso,
      },
    };
  }

  if (reportType === "finance") {
    const daysWindow = 365;
    const sinceDate = new Date(Date.now() - daysWindow * 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10);

    const [{ data: accounts, error: accountError }, { data: transactions, error: txError }] =
      await Promise.all([
        supabase
          .from("business_chart_of_accounts")
          .select("code, name, account_type, category")
          .eq("is_active", true),
        supabase
          .from("business_gl_transactions")
          .select(config.select)
          .gte("occurred_on", sinceDate)
          .order("occurred_on", { ascending: false })
          .order("created_at", { ascending: false })
          .limit(200000),
      ]);

    if (accountError) {
      throw new Error(`Failed loading finance accounts: ${accountError.message}`);
    }
    if (txError) {
      throw new Error(`Failed loading finance transactions: ${txError.message}`);
    }

    const accountByCode = new Map((accounts ?? []).map((row) => [row.code, row]));
    const lineRows = [];

    for (const tx of transactions ?? []) {
      const amountCents = Number(tx.amount_cents ?? 0);
      if (!Number.isFinite(amountCents) || amountCents <= 0) continue;

      const debitAccount = accountByCode.get(tx.debit_account_code);
      const creditAccount = accountByCode.get(tx.credit_account_code);
      if (!debitAccount || !creditAccount) continue;

      const debitSigned = toSignedAmountCents(debitAccount.account_type, "debit", amountCents);
      lineRows.push({
        occurred_on: tx.occurred_on,
        transaction_id: tx.id,
        description: tx.description,
        side: "debit",
        account_code: debitAccount.code,
        account_name: debitAccount.name,
        account_type: debitAccount.account_type,
        account_category: debitAccount.category,
        amount_cents: amountCents,
        signed_amount_cents: debitSigned,
        signed_amount_usd: Number((debitSigned / 100).toFixed(2)),
        revenue_channel: tx.revenue_channel,
        counterparty_name: tx.counterparty_name,
        tax_deductible: tx.tax_deductible ? 1 : 0,
        entry_kind: tx.entry_kind,
        source_system: tx.source_system,
        source_ref: tx.source_ref,
        created_at: tx.created_at,
      });

      const creditSigned = toSignedAmountCents(creditAccount.account_type, "credit", amountCents);
      lineRows.push({
        occurred_on: tx.occurred_on,
        transaction_id: tx.id,
        description: tx.description,
        side: "credit",
        account_code: creditAccount.code,
        account_name: creditAccount.name,
        account_type: creditAccount.account_type,
        account_category: creditAccount.category,
        amount_cents: amountCents,
        signed_amount_cents: creditSigned,
        signed_amount_usd: Number((creditSigned / 100).toFixed(2)),
        revenue_channel: tx.revenue_channel,
        counterparty_name: tx.counterparty_name,
        tax_deductible: tx.tax_deductible ? 1 : 0,
        entry_kind: tx.entry_kind,
        source_system: tx.source_system,
        source_ref: tx.source_ref,
        created_at: tx.created_at,
      });
    }

    return {
      csvContent: toCsv(lineRows, config.columns),
      rowCount: lineRows.length,
      metadata: {
        daysWindow,
        sinceDate,
        lineItemCount: lineRows.length,
      },
    };
  }

  if (reportType === "finance_analytics") {
    const windowDays = 30;
    const { data: snapshots, error: snapshotError } = await supabase
      .from("finance_analytics_snapshots")
      .select(
        "as_of_date, window_days, dau, mau, paying_users, active_subscriptions, mrr_cents, arr_cents, revenue_cents, operating_expense_cents, marketing_spend_cents, ai_cost_cents, infrastructure_cost_cents, gross_margin_cents, coverage, pipeline_health, optimization_insights, warnings, created_at",
      )
      .eq("window_days", windowDays)
      .order("as_of_date", { ascending: false })
      .order("created_at", { ascending: false })
      .limit(1);

    if (snapshotError) {
      throw new Error(`Failed loading finance analytics snapshots: ${snapshotError.message}`);
    }

    const snapshot = snapshots?.[0] ?? null;
    if (!snapshot) {
      return {
        csvContent: toCsv(
          [
            {
              section: "warning",
              key: "no_snapshot",
              source: "",
              region: "",
              value_numeric: "",
              value_text: "No finance analytics snapshot found for the requested window.",
            },
          ],
          config.columns,
        ),
        rowCount: 1,
        metadata: {
          daysWindow: windowDays,
          sourceRows: 0,
        },
      };
    }

    const rows = [
      { section: "kpi", key: "dau", source: "", region: "", value_numeric: snapshot.dau, value_text: "" },
      { section: "kpi", key: "mau", source: "", region: "", value_numeric: snapshot.mau, value_text: "" },
      {
        section: "kpi",
        key: "paying_users",
        source: "",
        region: "",
        value_numeric: snapshot.paying_users,
        value_text: "",
      },
      {
        section: "kpi",
        key: "active_subscriptions",
        source: "",
        region: "",
        value_numeric: snapshot.active_subscriptions,
        value_text: "",
      },
      {
        section: "kpi",
        key: "mrr_cents",
        source: "",
        region: "",
        value_numeric: snapshot.mrr_cents,
        value_text: "",
      },
      {
        section: "kpi",
        key: "arr_cents",
        source: "",
        region: "",
        value_numeric: snapshot.arr_cents,
        value_text: "",
      },
      {
        section: "kpi",
        key: "gross_margin_cents",
        source: "",
        region: "",
        value_numeric: snapshot.gross_margin_cents,
        value_text: "",
      },
      {
        section: "coverage",
        key: "coverage",
        source: "",
        region: "",
        value_numeric: "",
        value_text: JSON.stringify(snapshot.coverage ?? {}),
      },
      {
        section: "pipeline",
        key: "pipeline_health",
        source: "",
        region: "",
        value_numeric: "",
        value_text: JSON.stringify(snapshot.pipeline_health ?? {}),
      },
    ];

    for (const warning of Array.isArray(snapshot.warnings) ? snapshot.warnings : []) {
      rows.push({
        section: "warning",
        key: "warning",
        source: "",
        region: "",
        value_numeric: "",
        value_text: typeof warning === "string" ? warning : JSON.stringify(warning),
      });
    }
    for (const insight of Array.isArray(snapshot.optimization_insights) ? snapshot.optimization_insights : []) {
      rows.push({
        section: "insight",
        key: "insight",
        source: "",
        region: "",
        value_numeric: "",
        value_text: typeof insight === "string" ? insight : JSON.stringify(insight),
      });
    }

    return {
      csvContent: toCsv(rows, config.columns),
      rowCount: rows.length,
      metadata: {
        daysWindow: windowDays,
        asOfDate: snapshot.as_of_date,
        generatedAt: snapshot.created_at,
      },
    };
  }

  if (reportType === "compliance_audit") {
    const { data: run, error: runError } = await supabase
      .from("compliance_audit_runs")
      .select(config.select)
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
        csvContent: toCsv(rows, config.columns),
        rowCount: rows.length,
        metadata: {
          sourceRows: 0,
        },
      };
    }

    const { data: findings, error: findingError } = await supabase
      .from("compliance_audit_findings")
      .select("pass_name, finding_key, severity, title, detail, remediation")
      .eq("run_id", run.id)
      .order("created_at", { ascending: true });
    if (findingError) {
      throw new Error(`Failed loading compliance audit findings: ${findingError.message}`);
    }

    const rows = [
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
        source: finding.pass_name,
        region: "",
        value_numeric: "",
        value_text: `${finding.title} | ${finding.detail}${finding.remediation ? ` | remediation=${finding.remediation}` : ""}`,
      });
    }

    return {
      csvContent: toCsv(rows, config.columns),
      rowCount: rows.length,
      metadata: {
        runId: run.id,
        generatedAt: run.created_at,
      },
    };
  }

  const table =
    reportType === "dsar" ? "dsar_requests" : reportType === "support" ? "support_tickets" : "admin_action_logs";

  const { data, error } = await supabase
    .from(table)
    .select(config.select)
    .order(config.orderColumn, { ascending: false })
    .limit(5000);

  if (error) {
    throw new Error(`Failed loading ${reportType} rows: ${error.message}`);
  }

  const rows = data ?? [];
  return {
    csvContent: toCsv(rows, config.columns),
    rowCount: rows.length,
    metadata: {
      sourceRows: rows.length,
    },
  };
}

async function markJob(supabase, jobId, payload, expectedStatus = null) {
  let query = supabase.from("admin_report_jobs").update(payload).eq("id", jobId);
  if (expectedStatus) {
    query = query.eq("status", expectedStatus);
  }
  const { error } = await query;
  if (error) {
    throw new Error(`Failed updating report job ${jobId}: ${error.message}`);
  }
}

async function claimReportJob(supabase, jobId, startedAtIso) {
  const { data, error } = await supabase
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
    throw new Error(`Failed claiming report job ${jobId}: ${error.message}`);
  }

  return Boolean(data?.id);
}

async function retryFailedJobs(supabase, retryLimit) {
  const { data: failedJobs, error: failedJobsError } = await supabase
    .from("admin_report_jobs")
    .select("id")
    .eq("status", "failed")
    .order("completed_at", { ascending: false })
    .limit(retryLimit);

  if (failedJobsError) {
    throw new Error(`Failed loading failed report jobs for retry: ${failedJobsError.message}`);
  }

  const failedIds = (failedJobs ?? []).map((job) => job.id);
  if (failedIds.length === 0) {
    return 0;
  }

  const nowIso = new Date().toISOString();
  const { error: retryError } = await supabase
    .from("admin_report_jobs")
    .update({
      status: "queued",
      run_after: nowIso,
      started_at: null,
      completed_at: null,
      error: null,
    })
    .in("id", failedIds)
    .eq("status", "failed");

  if (retryError) {
    throw new Error(`Failed retrying failed report jobs: ${retryError.message}`);
  }

  return failedIds.length;
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const envValues = parseEnvFile(envPath);
  const supabaseUrl = readEnvValue(envValues, "NEXT_PUBLIC_SUPABASE_URL", "EXPO_PUBLIC_SUPABASE_URL");
  const serviceRoleKey = readEnvValue(envValues, "SUPABASE_SERVICE_ROLE_KEY");

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL/EXPO_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.");
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  let retried = 0;
  if (options.apply && options.retryFailed) {
    retried = await retryFailedJobs(supabase, options.retryLimit);
  }

  const nowIso = new Date().toISOString();
  const { data: jobs, error: jobsError } = await supabase
    .from("admin_report_jobs")
    .select("id, report_type, requested_by, run_after")
    .eq("status", "queued")
    .lte("run_after", nowIso)
    .order("run_after", { ascending: true })
    .limit(options.limit);

  if (jobsError) {
    throw new Error(`Failed loading queued report jobs: ${jobsError.message}`);
  }

  const dueJobs = jobs ?? [];
  if (dueJobs.length === 0) {
    console.log("No queued admin report jobs ready to run.");
    return;
  }

  if (!options.apply) {
    console.log(`Dry-run: ${dueJobs.length} queued report jobs are ready.`);
    for (const job of dueJobs) {
      console.log(`${job.id} :: ${job.report_type} :: run_after=${job.run_after}`);
    }
    return;
  }

  let processed = 0;
  let claimed = 0;
  let skipped = 0;
  let failed = 0;

  for (const job of dueJobs) {
    const startedAtIso = new Date().toISOString();
    const wasClaimed = await claimReportJob(supabase, job.id, startedAtIso);
    if (!wasClaimed) {
      skipped += 1;
      continue;
    }
    claimed += 1;

    try {
      const { csvContent, rowCount, metadata } = await buildReportCsv(supabase, job.report_type);
      const checksum = createHash("sha256").update(csvContent).digest("hex");
      const completedAt = new Date().toISOString();

      const { error: exportError } = await supabase.from("admin_report_exports").insert({
        admin_user_id: job.requested_by,
        report_type: job.report_type,
        format: "csv",
        status: "completed",
        row_count: rowCount,
        checksum_sha256: checksum,
        completed_at: completedAt,
        metadata: {
          generatedAt: completedAt,
          source: "report-jobs-script",
          ...(metadata ?? {}),
        },
      });

      if (exportError) {
        throw new Error(`Failed writing report export row: ${exportError.message}`);
      }

      await markJob(supabase, job.id, {
        status: "completed",
        completed_at: completedAt,
        error: null,
      }, "running");
      processed += 1;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      await markJob(supabase, job.id, {
        status: "failed",
        completed_at: new Date().toISOString(),
        error: message,
      }, "running");
      failed += 1;
    }
  }

  console.log(`Retried failed report jobs: ${retried}`);
  console.log(`Claimed report jobs: ${claimed}`);
  console.log(`Skipped (already claimed): ${skipped}`);
  console.log(`Processed report jobs: ${processed}`);
  console.log(`Failed report jobs: ${failed}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
