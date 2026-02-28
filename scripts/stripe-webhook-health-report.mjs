import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

const envPath = path.resolve(".env");
const outJson = path.resolve("public/STRIPE-WEBHOOK-HEALTH-REPORT.json");
const outMd = path.resolve("public/STRIPE-WEBHOOK-HEALTH-REPORT.md");
const webhookTable = "stripe_webhook_events";

function parseArgs(argv) {
  const hasFlag = (flag) => {
    const plain = flag.replace(/^--/, "");
    return argv.includes(flag) || argv.includes(plain);
  };

  const getNumberArg = (flag, fallback) => {
    const index = argv.indexOf(flag);
    const plain = flag.replace(/^--/, "");
    const plainIndex = argv.indexOf(plain);
    const inline = argv.find((value) => value.startsWith(`${plain}=`));

    let rawValue = null;
    if (index !== -1) rawValue = argv[index + 1] ?? null;
    else if (plainIndex !== -1) rawValue = argv[plainIndex + 1] ?? null;
    else if (inline) rawValue = inline.slice(plain.length + 1);

    if (rawValue === null) return fallback;
    const raw = Number(rawValue);
    if (!Number.isFinite(raw) || raw <= 0) return fallback;
    return raw;
  };

  return {
    writeReport: hasFlag("--write-report"),
    noFail: hasFlag("--no-fail"),
    json: hasFlag("--json"),
    windowHours: getNumberArg("--window-hours", 24),
    staleMinutes: getNumberArg("--stale-minutes", 10),
  };
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

function readValue(env, key, fallbackKey) {
  if (process.env[key]) return process.env[key];
  if (fallbackKey && process.env[fallbackKey]) return process.env[fallbackKey];
  if (env[key]) return env[key];
  if (fallbackKey && env[fallbackKey]) return env[fallbackKey];
  return "";
}

function isMissingTableError(message) {
  const lower = String(message ?? "").toLowerCase();
  return lower.includes("could not find the table") || (lower.includes("relation") && lower.includes("does not exist"));
}

function buildFailedTypeCounts(rows) {
  const counts = new Map();
  for (const row of rows) {
    const eventType = typeof row?.event_type === "string" && row.event_type.length > 0
      ? row.event_type
      : "unknown";
    counts.set(eventType, (counts.get(eventType) ?? 0) + 1);
  }

  return [...counts.entries()]
    .map(([eventType, count]) => ({ eventType, count }))
    .sort((a, b) => b.count - a.count);
}

function toMarkdown(report) {
  const lines = [];
  lines.push("# Stripe Webhook Health Report");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push(`Window: last ${report.windowHours} hour(s)`);
  lines.push(`Stale processing threshold: ${report.staleMinutes} minute(s)`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Tracking enabled: ${report.trackingEnabled ? "yes" : "no"}`);
  lines.push(`- Healthy: ${report.healthy ? "yes" : "no"}`);
  lines.push(`- Detail: ${report.detail}`);
  lines.push(`- Received: ${report.totals.received}`);
  lines.push(`- Processed: ${report.totals.processed}`);
  lines.push(`- Failed: ${report.totals.failed}`);
  lines.push(`- Processing: ${report.totals.processing}`);
  lines.push(`- Retries: ${report.totals.retries}`);
  lines.push(`- Stale processing: ${report.totals.staleProcessing}`);
  lines.push(`- Latest processed at: ${report.latestProcessedAt ?? "n/a"}`);
  if (Array.isArray(report.failedByEventType) && report.failedByEventType.length > 0) {
    lines.push(
      `- Failed by event type: ${report.failedByEventType
        .map((entry) => `${entry.eventType} (${entry.count})`)
        .join(", ")}`,
    );
  }
  lines.push("");
  lines.push("## Recent Failed Events");
  lines.push("");

  if (report.recentFailed.length === 0) {
    lines.push("No failed webhook events in the selected window.");
  } else {
    lines.push("| Event ID | Type | Attempts | Updated At | Error |");
    lines.push("| --- | --- | ---: | --- | --- |");
    for (const row of report.recentFailed) {
      lines.push(
        `| ${row.eventId} | ${row.eventType} | ${row.attemptCount} | ${row.updatedAt} | ${(row.lastError ?? "").replace(/\|/g, "\\|")} |`,
      );
    }
  }

  return lines.join("\n");
}

async function runCountQuery(query) {
  const { count, error } = await query;
  return {
    count: Number(count ?? 0),
    error,
  };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const env = parseEnvFile(envPath);
  const supabaseUrl = readValue(env, "NEXT_PUBLIC_SUPABASE_URL", "EXPO_PUBLIC_SUPABASE_URL");
  const serviceKey = readValue(env, "SUPABASE_SERVICE_ROLE_KEY");

  if (!supabaseUrl || !serviceKey) {
    console.error(
      "Missing NEXT_PUBLIC_SUPABASE_URL/EXPO_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY. Cannot run webhook health checks.",
    );
    process.exitCode = 1;
    return;
  }

  const supabase = createClient(supabaseUrl, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const generatedAt = new Date().toISOString();
  const windowStart = new Date(Date.now() - args.windowHours * 60 * 60 * 1000).toISOString();
  const staleCutoff = new Date(Date.now() - args.staleMinutes * 60 * 1000).toISOString();

  const [
    receivedResult,
    processedResult,
    failedResult,
    processingResult,
    retriesResult,
    staleProcessingResult,
    failedRowsResult,
    failedTypeRowsResult,
    latestProcessedResult,
  ] = await Promise.all([
    runCountQuery(
      supabase
        .from(webhookTable)
        .select("event_id", { count: "exact", head: true })
        .gte("created_at", windowStart),
    ),
    runCountQuery(
      supabase
        .from(webhookTable)
        .select("event_id", { count: "exact", head: true })
        .eq("status", "processed")
        .gte("created_at", windowStart),
    ),
    runCountQuery(
      supabase
        .from(webhookTable)
        .select("event_id", { count: "exact", head: true })
        .eq("status", "failed")
        .gte("created_at", windowStart),
    ),
    runCountQuery(
      supabase
        .from(webhookTable)
        .select("event_id", { count: "exact", head: true })
        .eq("status", "processing")
        .gte("created_at", windowStart),
    ),
    runCountQuery(
      supabase
        .from(webhookTable)
        .select("event_id", { count: "exact", head: true })
        .gt("attempt_count", 1)
        .gte("created_at", windowStart),
    ),
    runCountQuery(
      supabase
        .from(webhookTable)
        .select("event_id", { count: "exact", head: true })
        .eq("status", "processing")
        .lt("updated_at", staleCutoff),
    ),
    supabase
      .from(webhookTable)
      .select("event_id, event_type, attempt_count, updated_at, last_error")
      .eq("status", "failed")
      .order("updated_at", { ascending: false })
      .limit(10),
    supabase
      .from(webhookTable)
      .select("event_type")
      .eq("status", "failed")
      .gte("created_at", windowStart)
      .limit(2000),
    supabase
      .from(webhookTable)
      .select("processed_at")
      .eq("status", "processed")
      .not("processed_at", "is", null)
      .order("processed_at", { ascending: false })
      .limit(1)
      .maybeSingle(),
  ]);

  const errors = [
    receivedResult.error,
    processedResult.error,
    failedResult.error,
    processingResult.error,
    retriesResult.error,
    staleProcessingResult.error,
    failedRowsResult.error,
    failedTypeRowsResult.error,
    latestProcessedResult.error,
  ].filter(Boolean);

  let report;

  if (errors.length > 0 && isMissingTableError(errors[0].message)) {
    report = {
      generatedAt,
      windowHours: args.windowHours,
      staleMinutes: args.staleMinutes,
      trackingEnabled: false,
      healthy: false,
      detail:
        "stripe_webhook_events is unavailable via Supabase API (missing table, schema cache stale, or table not exposed).",
      totals: {
        received: 0,
        processed: 0,
        failed: 0,
        processing: 0,
        retries: 0,
        staleProcessing: 0,
      },
      latestProcessedAt: null,
      recentFailed: [],
      failedByEventType: [],
    };
  } else if (errors.length > 0) {
    throw new Error(errors[0].message);
  } else {
    const failed = failedResult.count;
    const staleProcessing = staleProcessingResult.count;
    const healthy = failed === 0 && staleProcessing === 0;
    const failedByEventType = buildFailedTypeCounts(failedTypeRowsResult.data ?? []);
    report = {
      generatedAt,
      windowHours: args.windowHours,
      staleMinutes: args.staleMinutes,
      trackingEnabled: true,
      healthy,
      detail: healthy ? "Webhook processing healthy." : "Webhook processing requires attention.",
      totals: {
        received: receivedResult.count,
        processed: processedResult.count,
        failed,
        processing: processingResult.count,
        retries: retriesResult.count,
        staleProcessing,
      },
      latestProcessedAt:
        latestProcessedResult.data && typeof latestProcessedResult.data.processed_at === "string"
          ? latestProcessedResult.data.processed_at
          : null,
      recentFailed: (failedRowsResult.data ?? []).map((row) => ({
        eventId: row.event_id,
        eventType: typeof row.event_type === "string" ? row.event_type : "unknown",
        attemptCount: Number(row.attempt_count ?? 0),
        updatedAt: row.updated_at,
        lastError: row.last_error,
      })),
      failedByEventType,
    };
  }

  if (args.json) {
    console.log(JSON.stringify(report, null, 2));
  } else {
    console.log("Stripe webhook health check");
    console.log(`Window: last ${report.windowHours}h | stale threshold: ${report.staleMinutes}m`);
    console.log("");
    console.log(`[INFO] Tracking enabled: ${report.trackingEnabled ? "yes" : "no"}`);
    console.log(`[INFO] Health: ${report.healthy ? "healthy" : "needs attention"}`);
    console.log(`[INFO] Detail: ${report.detail}`);
    console.log(
      `[INFO] Totals - received: ${report.totals.received}, processed: ${report.totals.processed}, failed: ${report.totals.failed}, processing: ${report.totals.processing}, retries: ${report.totals.retries}, stale: ${report.totals.staleProcessing}`,
    );
    console.log(`[INFO] Latest processed at: ${report.latestProcessedAt ?? "n/a"}`);
    if (report.failedByEventType.length > 0) {
      console.log(
        `[INFO] Failed by event type: ${report.failedByEventType
          .slice(0, 8)
          .map((entry) => `${entry.eventType} (${entry.count})`)
          .join(", ")}`,
      );
    }

    if (report.recentFailed.length > 0) {
      console.log("");
      console.log("Recent failed events:");
      for (const row of report.recentFailed) {
        console.log(`- ${row.eventId} | ${row.eventType} | attempts=${row.attemptCount} | ${row.updatedAt}`);
        if (row.lastError) {
          console.log(`  error: ${row.lastError}`);
        }
      }
    }
  }

  if (args.writeReport) {
    fs.mkdirSync(path.dirname(outJson), { recursive: true });
    fs.writeFileSync(outJson, JSON.stringify(report, null, 2));
    fs.writeFileSync(outMd, toMarkdown(report));
    console.log("");
    console.log(`Wrote ${outJson}`);
    console.log(`Wrote ${outMd}`);
  }

  if (!args.noFail && !report.healthy) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
