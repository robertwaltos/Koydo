import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { createHash, randomUUID } from "node:crypto";
import { createClient } from "@supabase/supabase-js";

const projectRoot = process.cwd();
const publicDir = path.join(projectRoot, "public");
const statusJsonPath = path.join(publicDir, "BACKGROUND-LAUNCH-AUDIT-LATEST.json");
const statusMdPath = path.join(publicDir, "BACKGROUND-LAUNCH-AUDIT-LATEST.md");
const tripleJsonPath = path.join(publicDir, "TRIPLE-PASS-LAUNCH-REVIEW.json");
const appStoreJsonPath = path.join(publicDir, "APPSTORE-COMPLIANCE-AUDIT.json");
const dbJsonPath = path.join(publicDir, "DB-READINESS-REPORT.json");
const typeJsonPath = path.join(publicDir, "TYPECHECK-REPORT.json");

const SCOPE = "launch_background_random_periodic";
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

function parseNumber(value, fallback) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return parsed;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function parseArgs(argv) {
  const options = {
    apply: false,
    force: false,
    allowNoDb: false,
    maxDays: clamp(parseNumber(process.env.BACKGROUND_LAUNCH_AUDIT_MAX_DAYS, 5), 1, 30),
    dailyProbability: clamp(
      parseNumber(process.env.BACKGROUND_LAUNCH_AUDIT_DAILY_PROBABILITY, 0.35),
      0,
      1,
    ),
    targetScore: clamp(parseNumber(process.env.COMPLIANCE_TRIPLE_PASS_TARGET_SCORE, 10), 1, 10),
    scope: SCOPE,
    evidenceProvider:
      process.env.COMPLIANCE_EVIDENCE_STORAGE_PROVIDER?.trim()
      || "google_vault_export",
    retentionDays: clamp(parseNumber(process.env.COMPLIANCE_EVIDENCE_RETENTION_DAYS, 2555), 30, 3650),
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--apply") {
      options.apply = true;
      continue;
    }
    if (arg === "--force") {
      options.force = true;
      continue;
    }
    if (arg === "--allow-no-db") {
      options.allowNoDb = true;
      continue;
    }
    if (arg === "--max-days") {
      options.maxDays = clamp(parseNumber(argv[index + 1], options.maxDays), 1, 30);
      index += 1;
      continue;
    }
    if (arg === "--daily-probability") {
      options.dailyProbability = clamp(parseNumber(argv[index + 1], options.dailyProbability), 0, 1);
      index += 1;
      continue;
    }
    if (arg === "--target-score") {
      options.targetScore = clamp(parseNumber(argv[index + 1], options.targetScore), 1, 10);
      index += 1;
      continue;
    }
    if (arg === "--scope") {
      const value = String(argv[index + 1] || "").trim();
      if (value) options.scope = value;
      index += 1;
      continue;
    }
    if (arg === "--evidence-provider") {
      const value = String(argv[index + 1] || "").trim();
      if (value) options.evidenceProvider = value;
      index += 1;
      continue;
    }
    if (arg === "--retention-days") {
      options.retentionDays = clamp(parseNumber(argv[index + 1], options.retentionDays), 30, 3650);
      index += 1;
    }
  }

  return options;
}

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const raw = fs.readFileSync(filePath, "utf8");
  const values = {};
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const equalsIndex = trimmed.indexOf("=");
    if (equalsIndex < 0) continue;
    const key = trimmed.slice(0, equalsIndex).trim();
    let value = trimmed.slice(equalsIndex + 1).trim();
    if ((value.startsWith("\"") && value.endsWith("\"")) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    values[key] = value;
  }
  return values;
}

function readEnvValue(envFileValues, key, fallbackKey) {
  if (process.env[key]) return process.env[key];
  if (fallbackKey && process.env[fallbackKey]) return process.env[fallbackKey];
  if (envFileValues[key]) return envFileValues[key];
  if (fallbackKey && envFileValues[fallbackKey]) return envFileValues[fallbackKey];
  return "";
}

function normalizeProvider(input) {
  if (
    input === "supabase_storage"
    || input === "google_vault_export"
    || input === "external_archive"
    || input === "inline"
  ) {
    return input;
  }
  return "google_vault_export";
}

async function loadLatestBackgroundRun(supabase, scope) {
  const { data, error } = await supabase
    .from("compliance_audit_runs")
    .select("id,status,score,target_score,created_at,completed_at")
    .eq("scope", scope)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();
  if (error) throw new Error(`Failed to load last background compliance run: ${error.message}`);
  return data ?? null;
}

function decideExecution({ force, maxDays, dailyProbability, latestRun }) {
  const now = Date.now();
  const randomRoll = Math.random();
  const latestCompletedAt = latestRun?.completed_at ?? latestRun?.created_at ?? null;
  const daysSinceLastRun = latestCompletedAt
    ? (now - Date.parse(latestCompletedAt)) / ONE_DAY_MS
    : null;

  if (force) {
    return {
      shouldRun: true,
      reason: "Forced run requested.",
      randomRoll,
      daysSinceLastRun,
    };
  }
  if (!latestCompletedAt) {
    return {
      shouldRun: true,
      reason: "No prior background run found; bootstrapping cadence.",
      randomRoll,
      daysSinceLastRun,
    };
  }
  if (Number.isFinite(daysSinceLastRun) && daysSinceLastRun >= maxDays) {
    return {
      shouldRun: true,
      reason: `Last run age ${daysSinceLastRun.toFixed(2)} days exceeds max ${maxDays} day window.`,
      randomRoll,
      daysSinceLastRun,
    };
  }

  const shouldRun = randomRoll <= dailyProbability;
  return {
    shouldRun,
    reason: shouldRun
      ? `Randomized run selected (roll=${randomRoll.toFixed(4)} <= probability=${dailyProbability.toFixed(4)}).`
      : `Randomized run skipped (roll=${randomRoll.toFixed(4)} > probability=${dailyProbability.toFixed(4)}).`,
    randomRoll,
    daysSinceLastRun,
  };
}

function runTriplePassScript() {
  const result = spawnSync(
    process.execPath,
    [path.join("scripts", "run-launch-triple-pass.mjs"), "--no-fail"],
    {
      cwd: projectRoot,
      encoding: "utf8",
      stdio: "pipe",
    },
  );

  if (result.error) {
    throw new Error(`Failed to execute triple-pass script: ${result.error.message}`);
  }
  if (result.status !== 0) {
    throw new Error(
      `Triple-pass script exited ${result.status}.\nstdout:\n${result.stdout || ""}\nstderr:\n${result.stderr || ""}`,
    );
  }

  return {
    status: result.status,
    stdout: result.stdout || "",
    stderr: result.stderr || "",
  };
}

function readJsonOrThrow(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing expected artifact file: ${path.relative(projectRoot, filePath)}`);
  }
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function toSeverity(value) {
  if (value === "fail") return "fail";
  if (value === "warn") return "warn";
  return "pass";
}

function computeFindingRollup(triplePassReport) {
  const passes = Array.isArray(triplePassReport?.passes)
    ? triplePassReport.passes
    : [];

  const findings = passes.map((pass, index) => {
    const passName = String(pass?.name || `pass_${index + 1}`);
    const status = toSeverity(String(pass?.status || "warn").toLowerCase());
    return {
      pass_name: passName,
      finding_key: "summary",
      severity: status,
      title: `Triple-pass status (${passName})`,
      detail: String(pass?.detail || "No detail available."),
      remediation:
        status === "fail"
          ? "Resolve blocking findings before launch sign-off."
          : status === "warn"
            ? "Review warning and track remediation."
            : null,
      metadata: {
        source: "run-launch-triple-pass.mjs",
      },
    };
  });

  const counts = {
    total: findings.length,
    pass: findings.filter((entry) => entry.severity === "pass").length,
    warn: findings.filter((entry) => entry.severity === "warn").length,
    fail: findings.filter((entry) => entry.severity === "fail").length,
  };

  return {
    findings,
    counts,
    passSummary: passes.map((pass) => ({
      passName: String(pass?.name || "unknown"),
      checksTotal: 1,
      passCount: toSeverity(String(pass?.status || "warn").toLowerCase()) === "pass" ? 1 : 0,
      warnCount: toSeverity(String(pass?.status || "warn").toLowerCase()) === "warn" ? 1 : 0,
      failCount: toSeverity(String(pass?.status || "warn").toLowerCase()) === "fail" ? 1 : 0,
    })),
  };
}

async function persistEvidenceAndRun({
  supabase,
  scope,
  startedAt,
  completedAt,
  targetScore,
  triplePassReport,
  rollup,
  reportBundle,
  decision,
  options,
}) {
  const serializedBundle = JSON.stringify(reportBundle, null, 2);
  const checksum = createHash("sha256").update(serializedBundle).digest("hex");
  const storageProvider = normalizeProvider(options.evidenceProvider);
  const storagePath = `compliance/background-random/${completedAt.slice(0, 10)}/${randomUUID()}.json`;
  const retentionUntil = new Date(Date.now() + options.retentionDays * ONE_DAY_MS).toISOString();

  const { data: evidenceRow, error: evidenceError } = await supabase
    .from("compliance_evidence_artifacts")
    .insert({
      artifact_type: "compliance_audit_report",
      storage_provider: storageProvider,
      storage_path: storagePath,
      checksum_sha256: checksum,
      immutable: true,
      retention_until: retentionUntil,
      metadata: {
        scope,
        scheduler: "background_random_periodic",
        decision,
        artifacts: {
          appStore: "public/APPSTORE-COMPLIANCE-AUDIT.json",
          dbReadiness: "public/DB-READINESS-REPORT.json",
          typecheck: "public/TYPECHECK-REPORT.json",
          triplePass: "public/TRIPLE-PASS-LAUNCH-REVIEW.json",
        },
        reportBundle,
      },
      created_by: null,
    })
    .select("id")
    .single();
  if (evidenceError || !evidenceRow?.id) {
    throw new Error(evidenceError?.message || "Failed to insert compliance evidence artifact.");
  }

  const numericScore = clamp(parseNumber(triplePassReport?.score, 0), 0, 10);
  const status = triplePassReport?.overallGreen === false || rollup.counts.fail > 0
    ? "completed"
    : "completed";
  const runReport = {
    generatedAt: completedAt,
    scheduler: "background_random_periodic",
    decision,
    score: numericScore,
    targetScore,
    achievedTarget: numericScore >= targetScore && rollup.counts.fail === 0,
    sourceArtifacts: reportBundle.artifacts,
  };

  const { data: runRow, error: runError } = await supabase
    .from("compliance_audit_runs")
    .insert({
      initiated_by: null,
      scope,
      status,
      score: numericScore,
      target_score: targetScore,
      checks_total: rollup.counts.total,
      checks_pass: rollup.counts.pass,
      checks_warn: rollup.counts.warn,
      checks_fail: rollup.counts.fail,
      pass_summary: rollup.passSummary,
      report: runReport,
      evidence_artifact_id: evidenceRow.id,
      started_at: startedAt,
      completed_at: completedAt,
      error: null,
    })
    .select("id")
    .single();
  if (runError || !runRow?.id) {
    throw new Error(runError?.message || "Failed to insert compliance audit run.");
  }

  if (rollup.findings.length > 0) {
    const { error: findingsError } = await supabase
      .from("compliance_audit_findings")
      .insert(
        rollup.findings.map((finding) => ({
          run_id: runRow.id,
          pass_name: finding.pass_name,
          finding_key: finding.finding_key,
          severity: finding.severity,
          title: finding.title,
          detail: finding.detail,
          remediation: finding.remediation,
          metadata: finding.metadata,
        })),
      );
    if (findingsError) {
      throw new Error(findingsError.message);
    }
  }

  return {
    evidenceArtifactId: evidenceRow.id,
    runId: runRow.id,
    storageProvider,
    storagePath,
    checksum,
  };
}

function writeStatusArtifacts(payload) {
  fs.mkdirSync(publicDir, { recursive: true });
  fs.writeFileSync(statusJsonPath, JSON.stringify(payload, null, 2), "utf8");

  const lines = [
    "# Background Launch Audit (Random Periodic)",
    "",
    `Generated: ${payload.generatedAt}`,
    `Scope: ${payload.scope}`,
    `Mode: ${payload.mode}`,
    "",
    "## Decision",
    "",
    `- shouldRun: ${payload.decision.shouldRun}`,
    `- reason: ${payload.decision.reason}`,
    `- randomRoll: ${payload.decision.randomRoll?.toFixed?.(6) ?? payload.decision.randomRoll}`,
    `- daysSinceLastRun: ${
      typeof payload.decision.daysSinceLastRun === "number"
        ? payload.decision.daysSinceLastRun.toFixed(3)
        : "n/a"
    }`,
    "",
  ];

  if (payload.result?.status === "completed") {
    lines.push("## Result");
    lines.push("");
    lines.push(`- triplePassScore: ${payload.result.triplePassScore}`);
    lines.push(`- targetScore: ${payload.result.targetScore}`);
    lines.push(`- achievedTarget: ${payload.result.achievedTarget}`);
    lines.push(`- checks: pass=${payload.result.checks.pass}, warn=${payload.result.checks.warn}, fail=${payload.result.checks.fail}`);
    if (payload.result.evidenceArtifactId) {
      lines.push(`- evidenceArtifactId: ${payload.result.evidenceArtifactId}`);
    }
    if (payload.result.runId) {
      lines.push(`- runId: ${payload.result.runId}`);
    }
    lines.push("");
  } else if (payload.result?.status === "skipped") {
    lines.push("## Result");
    lines.push("");
    lines.push("- Background run skipped based on random cadence policy.");
    lines.push("");
  }

  lines.push("## Artifact Paths");
  lines.push("");
  lines.push("- public/APPSTORE-COMPLIANCE-AUDIT.json");
  lines.push("- public/DB-READINESS-REPORT.json");
  lines.push("- public/TYPECHECK-REPORT.json");
  lines.push("- public/TRIPLE-PASS-LAUNCH-REVIEW.json");
  lines.push("- public/BACKGROUND-LAUNCH-AUDIT-LATEST.json");
  lines.push("");
  fs.writeFileSync(statusMdPath, lines.join("\n"), "utf8");
}

async function main() {
  const startedAt = new Date().toISOString();
  const options = parseArgs(process.argv.slice(2));
  const envValues = parseEnvFile(path.join(projectRoot, ".env"));
  const supabaseUrl = readEnvValue(envValues, "NEXT_PUBLIC_SUPABASE_URL", "EXPO_PUBLIC_SUPABASE_URL");
  const serviceRoleKey = readEnvValue(envValues, "SUPABASE_SERVICE_ROLE_KEY");

  const hasDbCredentials = Boolean(supabaseUrl && serviceRoleKey);
  if (options.apply && !hasDbCredentials && !options.allowNoDb) {
    throw new Error(
      "Missing Supabase credentials. Set NEXT_PUBLIC_SUPABASE_URL/EXPO_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.",
    );
  }

  const supabase = hasDbCredentials
    ? createClient(supabaseUrl, serviceRoleKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    })
    : null;

  const latestRun = supabase
    ? await loadLatestBackgroundRun(supabase, options.scope)
    : null;

  const decision = decideExecution({
    force: options.force,
    maxDays: options.maxDays,
    dailyProbability: options.dailyProbability,
    latestRun,
  });

  if (!options.apply) {
    const preview = {
      generatedAt: new Date().toISOString(),
      mode: "dry-run",
      scope: options.scope,
      options,
      latestRun,
      decision,
      result: {
        status: "dry-run",
      },
    };
    writeStatusArtifacts(preview);
    console.log(JSON.stringify(preview, null, 2));
    return;
  }

  if (!decision.shouldRun) {
    const skipped = {
      generatedAt: new Date().toISOString(),
      mode: "apply",
      scope: options.scope,
      options,
      latestRun,
      decision,
      result: {
        status: "skipped",
      },
    };
    writeStatusArtifacts(skipped);
    console.log(`Skipped background launch audit: ${decision.reason}`);
    return;
  }

  const scriptExecution = runTriplePassScript();
  const appStoreReport = readJsonOrThrow(appStoreJsonPath);
  const dbReport = readJsonOrThrow(dbJsonPath);
  const typecheckReport = readJsonOrThrow(typeJsonPath);
  const triplePassReport = readJsonOrThrow(tripleJsonPath);
  const completedAt = new Date().toISOString();
  const rollup = computeFindingRollup(triplePassReport);

  const reportBundle = {
    generatedAt: completedAt,
    scope: options.scope,
    scheduler: {
      policy: "random_periodic",
      maxDays: options.maxDays,
      dailyProbability: options.dailyProbability,
      decision,
    },
    scriptExecution,
    artifacts: {
      appStoreAudit: appStoreReport,
      dbReadiness: dbReport,
      typecheck: typecheckReport,
      triplePass: triplePassReport,
    },
  };

  let persistence = {
    evidenceArtifactId: null,
    runId: null,
    storageProvider: normalizeProvider(options.evidenceProvider),
    storagePath: null,
    checksum: null,
  };
  if (supabase) {
    persistence = await persistEvidenceAndRun({
      supabase,
      scope: options.scope,
      startedAt,
      completedAt,
      targetScore: options.targetScore,
      triplePassReport,
      rollup,
      reportBundle,
      decision,
      options,
    });
  }

  const numericScore = clamp(parseNumber(triplePassReport?.score, 0), 0, 10);
  const status = {
    generatedAt: completedAt,
    mode: "apply",
    scope: options.scope,
    options,
    latestRun,
    decision,
    result: {
      status: "completed",
      triplePassScore: numericScore,
      targetScore: options.targetScore,
      achievedTarget: numericScore >= options.targetScore && rollup.counts.fail === 0,
      checks: rollup.counts,
      evidenceArtifactId: persistence.evidenceArtifactId,
      runId: persistence.runId,
      storageProvider: persistence.storageProvider,
      storagePath: persistence.storagePath,
      checksum: persistence.checksum,
    },
  };

  writeStatusArtifacts(status);
  console.log(`Completed background launch audit run. runId=${persistence.runId ?? "local-only"}`);
}

main().catch((error) => {
  const status = {
    generatedAt: new Date().toISOString(),
    mode: "apply",
    scope: SCOPE,
    result: {
      status: "failed",
      error: error instanceof Error ? error.message : String(error),
    },
  };
  try {
    writeStatusArtifacts(status);
  } catch {
    // ignore secondary write failures
  }
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
