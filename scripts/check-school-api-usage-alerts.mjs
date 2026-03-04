import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

const ENV_PATH = path.resolve(".env");
const DEFAULT_REPORT_JSON = "public/SCHOOL-API-USAGE-ALERT-REPORT.json";
const DEFAULT_REPORT_MD = "public/SCHOOL-API-USAGE-ALERT-REPORT.md";

function parseArgs(argv) {
  return {
    apply: argv.includes("--apply"),
    noFail: argv.includes("--no-fail"),
    outJson: readArgValue(argv, "--out-json") ?? DEFAULT_REPORT_JSON,
    outMd: readArgValue(argv, "--out-md") ?? DEFAULT_REPORT_MD,
  };
}

function readArgValue(argv, key) {
  const index = argv.indexOf(key);
  if (index < 0) return null;
  if (index + 1 >= argv.length) return null;
  return String(argv[index + 1] ?? "").trim() || null;
}

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const raw = fs.readFileSync(filePath, "utf8");
  const env = {};
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const equals = trimmed.indexOf("=");
    if (equals <= 0) continue;
    const key = trimmed.slice(0, equals).trim();
    let value = trimmed.slice(equals + 1).trim();
    if (
      value.length >= 2
      && ((value.startsWith("\"") && value.endsWith("\"")) || (value.startsWith("'") && value.endsWith("'")))
    ) {
      value = value.slice(1, -1);
    }
    env[key] = value;
  }
  return env;
}

function envValue(fileValues, key, fallbackKey) {
  return process.env[key]
    || (fallbackKey ? process.env[fallbackKey] : "")
    || fileValues[key]
    || (fallbackKey ? fileValues[fallbackKey] : "")
    || "";
}

function toPercent(value) {
  return `${(value * 100).toFixed(2)}%`;
}

function severityFromRules(input) {
  if (input.errorCritical || input.rowCritical) return "critical";
  if (input.errorSpike || input.rowSpike) return "warning";
  return "info";
}

async function hasRecentOpenAlert(supabase, category, dedupeWindowHours) {
  const sinceIso = new Date(Date.now() - dedupeWindowHours * 60 * 60 * 1000).toISOString();
  const { data, error } = await supabase
    .from("admin_alerts")
    .select("id")
    .eq("category", category)
    .eq("acknowledged", false)
    .gte("created_at", sinceIso)
    .limit(1);
  if (error) throw new Error(`Failed checking duplicate alerts: ${error.message}`);
  return Boolean(data && data.length > 0);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const env = parseEnvFile(ENV_PATH);
  const supabaseUrl = envValue(env, "NEXT_PUBLIC_SUPABASE_URL", "EXPO_PUBLIC_SUPABASE_URL");
  const serviceRoleKey = envValue(env, "SUPABASE_SERVICE_ROLE_KEY");

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL/EXPO_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.");
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  const now = Date.now();
  const since24h = new Date(now - 24 * 60 * 60 * 1000).toISOString();
  const since7d = new Date(now - 7 * 24 * 60 * 60 * 1000).toISOString();

  const [logs24hResult, logs7dResult] = await Promise.all([
    supabase
      .from("partner_school_api_usage_logs")
      .select("id, status_code, response_row_count, response_bytes, created_at")
      .gte("created_at", since24h)
      .limit(50_000),
    supabase
      .from("partner_school_api_usage_logs")
      .select("id, status_code, response_row_count, response_bytes, created_at")
      .gte("created_at", since7d)
      .lt("created_at", since24h)
      .limit(200_000),
  ]);

  if (logs24hResult.error) throw new Error(`Failed querying 24h school API logs: ${logs24hResult.error.message}`);
  if (logs7dResult.error) throw new Error(`Failed querying 7d school API logs: ${logs7dResult.error.message}`);

  const logs24h = logs24hResult.data ?? [];
  const logs7d = logs7dResult.data ?? [];

  const requests24h = logs24h.length;
  const errors24h = logs24h.filter((row) => Number(row.status_code) >= 400).length;
  const errorRate24h = requests24h > 0 ? errors24h / requests24h : 0;
  const rows24h = logs24h.reduce((sum, row) => sum + Math.max(0, Number(row.response_row_count ?? 0)), 0);
  const bytes24h = logs24h.reduce((sum, row) => sum + Math.max(0, Number(row.response_bytes ?? 0)), 0);
  const rows7d = logs7d.reduce((sum, row) => sum + Math.max(0, Number(row.response_row_count ?? 0)), 0);
  const baselineDailyRows = rows7d / 7;

  const errorSpike = errors24h >= 20 && errorRate24h >= 0.2;
  const errorCritical = errors24h >= 50 && errorRate24h >= 0.35;

  const rowSpikeThreshold = Math.max(5_000, baselineDailyRows * 3);
  const rowCriticalThreshold = Math.max(20_000, baselineDailyRows * 6);
  const rowSpike = rows24h > rowSpikeThreshold;
  const rowCritical = rows24h > rowCriticalThreshold;

  const alertTriggered = errorSpike || rowSpike;
  const severity = severityFromRules({
    errorSpike,
    errorCritical,
    rowSpike,
    rowCritical,
  });

  const report = {
    generatedAt: new Date().toISOString(),
    windows: {
      since24h,
      since7d,
    },
    metrics: {
      requests24h,
      errors24h,
      errorRate24h: Number(errorRate24h.toFixed(4)),
      rows24h,
      bytes24h,
      rows7d,
      baselineDailyRows: Number(baselineDailyRows.toFixed(2)),
      rowSpikeThreshold: Number(rowSpikeThreshold.toFixed(2)),
      rowCriticalThreshold: Number(rowCriticalThreshold.toFixed(2)),
    },
    rules: {
      errorSpike,
      errorCritical,
      rowSpike,
      rowCritical,
    },
    alertTriggered,
    alertSeverity: severity,
    alertInserted: false,
    alertId: null,
  };

  if (alertTriggered && args.apply) {
    const category = "school_api_usage_anomaly";
    const duplicate = await hasRecentOpenAlert(supabase, category, 24);
    if (!duplicate) {
      const { data: alertRow, error: alertError } = await supabase
        .from("admin_alerts")
        .insert({
          severity,
          category,
          message: `School API anomaly detected: errors24h=${errors24h}, errorRate24h=${toPercent(errorRate24h)}, rows24h=${rows24h}.`,
          metadata: report,
        })
        .select("id")
        .single();

      if (alertError) {
        throw new Error(`Failed inserting school API anomaly alert: ${alertError.message}`);
      }
      report.alertInserted = true;
      report.alertId = alertRow?.id ?? null;
    }
  }

  const outJsonPath = path.resolve(args.outJson);
  const outMdPath = path.resolve(args.outMd);
  fs.mkdirSync(path.dirname(outJsonPath), { recursive: true });
  fs.writeFileSync(outJsonPath, JSON.stringify(report, null, 2), "utf8");

  const markdown = [
    "# School API Usage Alert Report",
    "",
    `Generated: ${report.generatedAt}`,
    "",
    "## Metrics (Last 24h)",
    "",
    `- Requests: ${requests24h}`,
    `- 4xx/5xx: ${errors24h}`,
    `- Error rate: ${toPercent(errorRate24h)}`,
    `- Rows exported: ${rows24h}`,
    `- Bytes transferred: ${bytes24h}`,
    "",
    "## Baseline (Previous 7d)",
    "",
    `- Rows total: ${rows7d}`,
    `- Daily avg rows: ${baselineDailyRows.toFixed(2)}`,
    `- Row spike threshold: ${rowSpikeThreshold.toFixed(2)}`,
    `- Row critical threshold: ${rowCriticalThreshold.toFixed(2)}`,
    "",
    "## Rules",
    "",
    `- errorSpike: ${errorSpike}`,
    `- errorCritical: ${errorCritical}`,
    `- rowSpike: ${rowSpike}`,
    `- rowCritical: ${rowCritical}`,
    "",
    "## Alert",
    "",
    `- Triggered: ${alertTriggered}`,
    `- Severity: ${severity}`,
    `- Inserted: ${report.alertInserted}`,
    `- Alert ID: ${report.alertId ?? "n/a"}`,
    "",
  ].join("\n");

  fs.writeFileSync(outMdPath, markdown, "utf8");

  console.log(JSON.stringify({
    reportJson: path.relative(process.cwd(), outJsonPath),
    reportMd: path.relative(process.cwd(), outMdPath),
    alertTriggered,
    alertSeverity: severity,
    alertInserted: report.alertInserted,
    alertId: report.alertId,
    metrics: report.metrics,
  }, null, 2));

  if (alertTriggered && !args.noFail) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`school api usage alert check failed: ${message}`);
  process.exit(1);
});
