import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

const envPath = path.resolve(".env");
const VALID_REPORT_TYPES = ["dsar", "support", "audit"];

function parseArgs(argv) {
  const options = {
    apply: false,
    reportType: "",
    limit: 100,
    maxAgeMinutes: 90,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--apply") options.apply = true;
    else if (arg === "--report-type") options.reportType = String(argv[index + 1] ?? "");
    else if (arg === "--limit") options.limit = Number(argv[index + 1] ?? 100);
    else if (arg === "--max-age-minutes") options.maxAgeMinutes = Number(argv[index + 1] ?? 90);
  }

  options.reportType = options.reportType.trim().toLowerCase();
  options.limit = Number.isFinite(options.limit) ? Math.min(500, Math.max(1, options.limit)) : 100;
  options.maxAgeMinutes = Number.isFinite(options.maxAgeMinutes)
    ? Math.min(10080, Math.max(5, options.maxAgeMinutes))
    : 90;

  return options;
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

function normalizeReportType(value) {
  if (!value || value === "all") return "";
  if (VALID_REPORT_TYPES.includes(value)) return value;
  throw new Error(`Invalid report type "${value}". Use dsar|support|audit|all.`);
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const envValues = parseEnvFile(envPath);
  const supabaseUrl = readEnvValue(envValues, "NEXT_PUBLIC_SUPABASE_URL", "EXPO_PUBLIC_SUPABASE_URL");
  const serviceRoleKey = readEnvValue(envValues, "SUPABASE_SERVICE_ROLE_KEY");

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL/EXPO_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.");
  }

  const reportType = normalizeReportType(options.reportType);
  const staleCutoffIso = new Date(Date.now() - options.maxAgeMinutes * 60 * 1000).toISOString();
  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  let query = supabase
    .from("admin_report_jobs")
    .select("id, report_type, started_at, metadata")
    .eq("status", "running")
    .not("started_at", "is", null)
    .lt("started_at", staleCutoffIso);

  if (reportType) {
    query = query.eq("report_type", reportType);
  }

  const { data: staleJobs, error: staleError } = await query
    .order("started_at", { ascending: true })
    .limit(options.limit);

  if (staleError) {
    throw new Error(`Unable to fetch stale running report jobs: ${staleError.message}`);
  }

  if (!staleJobs || staleJobs.length === 0) {
    console.log("No stale running report jobs matched the provided filters.");
    return;
  }

  console.log(`Stale running report jobs: ${staleJobs.length}`);
  console.log(`Cutoff: started before ${staleCutoffIso}`);
  console.log(`Mode: ${options.apply ? "apply" : "dry-run"}`);

  if (!options.apply) {
    console.log("");
    console.log("Dry-run preview (first 10 jobs):");
    for (const row of staleJobs.slice(0, 10)) {
      const ageMinutes = row.started_at
        ? Math.round((Date.now() - new Date(row.started_at).getTime()) / 60000)
        : 0;
      console.log(`- ${row.id} | ${row.report_type} | ${ageMinutes}m stale`);
    }
    console.log("");
    console.log('Use "--apply" to reset stale running report jobs back to queued.');
    return;
  }

  let requeued = 0;
  let failedUpdates = 0;

  for (const job of staleJobs) {
    const nowIso = new Date().toISOString();
    const startedAt = job.started_at ? new Date(job.started_at).getTime() : Date.now();
    const ageMinutes = Math.max(1, Math.round((Date.now() - startedAt) / 60000));
    const previousStaleRequeueCount = Number((job.metadata ?? {}).stale_requeue_count ?? 0);
    const nextMetadata = {
      ...(job.metadata ?? {}),
      stale_requeue_count: Number.isFinite(previousStaleRequeueCount)
        ? previousStaleRequeueCount + 1
        : 1,
      stale_requeued_at: nowIso,
      stale_requeued_by: "requeue-stale-report-jobs-script",
      stale_requeue_reason: `running report job exceeded ${options.maxAgeMinutes} minutes`,
      stale_age_minutes: ageMinutes,
    };

    const { error: updateError } = await supabase
      .from("admin_report_jobs")
      .update({
        status: "queued",
        run_after: nowIso,
        started_at: null,
        completed_at: null,
        error: `Automatically re-queued after ${ageMinutes} minutes in running state.`,
        metadata: nextMetadata,
      })
      .eq("id", job.id)
      .eq("status", "running");

    if (updateError) {
      failedUpdates += 1;
      continue;
    }

    requeued += 1;
  }

  console.log(`Re-queued stale report jobs: ${requeued}`);
  console.log(`Failed updates: ${failedUpdates}`);

  if (failedUpdates > 0) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
