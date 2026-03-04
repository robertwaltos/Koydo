import fs from "node:fs";
import path from "node:path";
import ts from "typescript";
import { createClient } from "@supabase/supabase-js";

const projectRoot = process.cwd();
const publicDir = path.join(projectRoot, "public");
const noFail = process.argv.includes("--no-fail");

const appStoreJsonPath = path.join(publicDir, "APPSTORE-COMPLIANCE-AUDIT.json");
const appStoreMdPath = path.join(publicDir, "APPSTORE-COMPLIANCE-AUDIT.md");
const dbJsonPath = path.join(publicDir, "DB-READINESS-REPORT.json");
const dbMdPath = path.join(publicDir, "DB-READINESS-REPORT.md");
const typeJsonPath = path.join(publicDir, "TYPECHECK-REPORT.json");
const typeMdPath = path.join(publicDir, "TYPECHECK-REPORT.md");
const tripleJsonPath = path.join(publicDir, "TRIPLE-PASS-LAUNCH-REVIEW.json");
const tripleMdPath = path.join(publicDir, "TRIPLE-PASS-LAUNCH-REVIEW.md");

const requiredAppStoreFiles = [
  "src/app/account/settings/page.tsx",
  "src/app/api/account/delete/route.ts",
  "src/app/legal/privacy/page.tsx",
  "src/app/legal/terms/page.tsx",
  "src/app/legal/refunds/page.tsx",
  "src/app/auth/age-gate/page.tsx",
  "src/app/auth/parent-consent/page.tsx",
  "src/app/api/compliance/age-gate/route.ts",
  "src/app/api/compliance/parent-consent/route.ts",
  "src/app/api/compliance/policy-acceptance/route.ts",
];

function ensureDir() {
  fs.mkdirSync(publicDir, { recursive: true });
}

function parseEnvFile() {
  const envPath = path.join(projectRoot, ".env");
  if (!fs.existsSync(envPath)) return {};
  const raw = fs.readFileSync(envPath, "utf8");
  const values = {};
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq < 0) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if ((value.startsWith("\"") && value.endsWith("\"")) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    values[key] = value;
  }
  return values;
}

function readEnvValue(env, key, fallbackKey) {
  return process.env[key] || (fallbackKey ? process.env[fallbackKey] : "") || env[key] || (fallbackKey ? env[fallbackKey] : "") || "";
}

function checkOAuthParity() {
  const signInPath = path.join(projectRoot, "src", "app", "auth", "sign-in", "oauth-buttons.tsx");
  const signUpPath = path.join(projectRoot, "src", "app", "auth", "sign-up", "page.tsx");
  const signInContent = fs.existsSync(signInPath) ? fs.readFileSync(signInPath, "utf8").toLowerCase() : "";
  const signUpContent = fs.existsSync(signUpPath) ? fs.readFileSync(signUpPath, "utf8").toLowerCase() : "";

  const hasOAuthComponent = signUpContent.includes("oauthbuttons");
  const offersThirdPartySignIn = ["google", "facebook", "twitter"]
    .some((provider) => signInContent.includes(`id: "${provider}"`));
  const hasAppleProvider = signInContent.includes('id: "apple"');

  if (!hasOAuthComponent) {
    return {
      id: "auth:oauth-parity",
      category: "auth",
      status: "warn",
      detail: "Sign-up page does not reference shared OAuth buttons component.",
    };
  }
  if (offersThirdPartySignIn && !hasAppleProvider) {
    return {
      id: "auth:oauth-parity",
      category: "auth",
      status: "fail",
      detail: "Third-party sign-in detected without Sign in with Apple parity.",
    };
  }
  return {
    id: "auth:oauth-parity",
    category: "auth",
    status: "pass",
    detail: offersThirdPartySignIn
      ? "Third-party sign-in includes Sign in with Apple parity and shared sign-up usage."
      : "No third-party sign-in providers detected; Apple parity requirement not triggered.",
  };
}

function runAppStoreAudit(env) {
  const checks = [
    ...requiredAppStoreFiles.map((relPath) => ({
      id: `file:${relPath}`,
      category: "required-file",
      status: fs.existsSync(path.join(projectRoot, relPath)) ? "pass" : "fail",
      detail: fs.existsSync(path.join(projectRoot, relPath)) ? "Exists" : "Missing",
      path: relPath,
    })),
    (() => {
      const billingMode = readEnvValue(env, "BILLING_PROVIDER_MODE");
      const allowed = ["stripe_external", "app_store_iap"];
      return {
        id: "env:BILLING_PROVIDER_MODE",
        category: "billing-mode",
        status: allowed.includes(billingMode) ? "pass" : "warn",
        detail: billingMode
          ? `Configured as ${billingMode}`
          : "Not set in .env (runtime may still provide it).",
        expected: allowed.join(" | "),
      };
    })(),
    checkOAuthParity(),
  ];

  const report = {
    generatedAt: new Date().toISOString(),
    totals: {
      pass: checks.filter((check) => check.status === "pass").length,
      warn: checks.filter((check) => check.status === "warn").length,
      fail: checks.filter((check) => check.status === "fail").length,
      total: checks.length,
    },
    checks,
  };

  const mdLines = [
    "# App Store Compliance Audit",
    "",
    `Generated: ${report.generatedAt}`,
    "",
    `Checks: ${report.totals.total} | Pass: ${report.totals.pass} | Warn: ${report.totals.warn} | Fail: ${report.totals.fail}`,
    "",
    "| Category | ID | Status | Detail |",
    "| --- | --- | --- | --- |",
    ...report.checks.map((check) => `| ${check.category} | ${check.id} | ${String(check.status).toUpperCase()} | ${check.detail} |`),
    "",
    "## Notes",
    "",
    "- This audit checks structural and configuration basics only.",
    "- Final app store compliance still requires policy/legal and UX review before submission.",
    "",
  ];

  fs.writeFileSync(appStoreJsonPath, JSON.stringify(report, null, 2), "utf8");
  fs.writeFileSync(appStoreMdPath, mdLines.join("\n"), "utf8");
  return report;
}

function isMissingTableError(message) {
  const lower = String(message || "").toLowerCase();
  return lower.includes("could not find the table") || (lower.includes("relation") && lower.includes("does not exist"));
}

function extractRequiredDbTables() {
  const filePath = path.join(projectRoot, "scripts", "check-db-readiness.mjs");
  if (!fs.existsSync(filePath)) return [];
  const raw = fs.readFileSync(filePath, "utf8");
  const match = raw.match(/const requiredTables = \[([\s\S]*?)\];/);
  if (!match?.[1]) return [];
  return Array.from(match[1].matchAll(/"([^"]+)"/g)).map((entry) => entry[1]).filter(Boolean);
}

async function runDbAudit(env) {
  const requiredTables = extractRequiredDbTables();
  const supabaseUrl = readEnvValue(env, "NEXT_PUBLIC_SUPABASE_URL", "EXPO_PUBLIC_SUPABASE_URL");
  const serviceKey = readEnvValue(env, "SUPABASE_SERVICE_ROLE_KEY");

  const rows = [];
  if (!supabaseUrl || !serviceKey || requiredTables.length === 0) {
    const report = {
      generatedAt: new Date().toISOString(),
      supabaseHost: "",
      totals: {
        present: 0,
        missing: requiredTables.length,
        error: 1,
        total: requiredTables.length,
      },
      tables: requiredTables.map((table) => ({
        table,
        status: "error",
        detail: "DB audit preconditions missing (URL/key/table-list).",
      })),
      missingSnippets: [],
    };
    fs.writeFileSync(dbJsonPath, JSON.stringify(report, null, 2), "utf8");
    fs.writeFileSync(
      dbMdPath,
      [
        "# Database Readiness Report",
        "",
        `Generated: ${report.generatedAt}`,
        "",
        "Failed to run DB checks due to missing Supabase settings or table definitions.",
        "",
      ].join("\n"),
      "utf8",
    );
    return report;
  }

  const supabase = createClient(supabaseUrl, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  for (const table of requiredTables) {
    const { error } = await supabase.from(table).select("*").limit(1);
    if (!error) {
      rows.push({ table, status: "present", detail: "Present" });
      continue;
    }
    if (isMissingTableError(error.message)) {
      rows.push({ table, status: "missing", detail: error.message });
      continue;
    }
    rows.push({ table, status: "error", detail: error.message });
  }

  const totals = {
    present: rows.filter((row) => row.status === "present").length,
    missing: rows.filter((row) => row.status === "missing").length,
    error: rows.filter((row) => row.status === "error").length,
    total: rows.length,
  };

  const report = {
    generatedAt: new Date().toISOString(),
    supabaseHost: (() => {
      try {
        return new URL(supabaseUrl).host;
      } catch {
        return "";
      }
    })(),
    totals,
    tables: rows,
    missingSnippets: [],
  };

  const mdLines = [
    "# Database Readiness Report",
    "",
    `Generated: ${report.generatedAt}`,
    `Supabase host: ${report.supabaseHost || "unknown"}`,
    "",
    `Summary: ${totals.present} present / ${totals.missing} missing / ${totals.error} error (total ${totals.total})`,
    "",
    "| Table | Status | Detail |",
    "| --- | --- | --- |",
    ...rows.map((row) => `| ${row.table} | ${row.status} | ${String(row.detail).replace(/\|/g, "\\|")} |`),
    "",
  ];

  fs.writeFileSync(dbJsonPath, JSON.stringify(report, null, 2), "utf8");
  fs.writeFileSync(dbMdPath, mdLines.join("\n"), "utf8");
  return report;
}

function formatDiagnostic(diag) {
  const message = ts.flattenDiagnosticMessageText(diag.messageText, "\n");
  if (!diag.file || typeof diag.start !== "number") return message;
  const { line, character } = diag.file.getLineAndCharacterOfPosition(diag.start);
  const rel = path.relative(projectRoot, diag.file.fileName).replace(/\\/g, "/");
  return `${rel}:${line + 1}:${character + 1} - ${message}`;
}

function runTypecheckAudit() {
  const configPath = ts.findConfigFile(projectRoot, ts.sys.fileExists, "tsconfig.json");
  if (!configPath) {
    const report = {
      generatedAt: new Date().toISOString(),
      ok: false,
      errorCount: 1,
      warningCount: 0,
      diagnostics: ["Unable to locate tsconfig.json."],
    };
    fs.writeFileSync(typeJsonPath, JSON.stringify(report, null, 2), "utf8");
    fs.writeFileSync(typeMdPath, "# Typecheck Report\n\nUnable to locate tsconfig.json.\n", "utf8");
    return report;
  }

  const configFile = ts.readConfigFile(configPath, ts.sys.readFile);
  if (configFile.error) {
    const report = {
      generatedAt: new Date().toISOString(),
      ok: false,
      errorCount: 1,
      warningCount: 0,
      diagnostics: [formatDiagnostic(configFile.error)],
    };
    fs.writeFileSync(typeJsonPath, JSON.stringify(report, null, 2), "utf8");
    fs.writeFileSync(typeMdPath, `# Typecheck Report\n\n${report.diagnostics[0]}\n`, "utf8");
    return report;
  }

  const parsed = ts.parseJsonConfigFileContent(
    configFile.config,
    ts.sys,
    path.dirname(configPath),
    { noEmit: true, pretty: false },
    configPath,
  );

  const program = ts.createProgram(parsed.fileNames, parsed.options);
  const diagnostics = ts.getPreEmitDiagnostics(program);
  const errorDiagnostics = diagnostics.filter((diag) => diag.category === ts.DiagnosticCategory.Error);
  const report = {
    generatedAt: new Date().toISOString(),
    ok: errorDiagnostics.length === 0,
    errorCount: errorDiagnostics.length,
    warningCount: 0,
    diagnostics: errorDiagnostics.slice(0, 50).map(formatDiagnostic),
  };

  const mdLines = [
    "# Typecheck Report",
    "",
    `Generated: ${report.generatedAt}`,
    `Status: ${report.ok ? "PASS" : "FAIL"}`,
    `Errors: ${report.errorCount}`,
    "",
  ];
  if (report.diagnostics.length > 0) {
    mdLines.push("## Diagnostics");
    mdLines.push("");
    for (const line of report.diagnostics) {
      mdLines.push(`- ${line}`);
    }
    mdLines.push("");
  }

  fs.writeFileSync(typeJsonPath, JSON.stringify(report, null, 2), "utf8");
  fs.writeFileSync(typeMdPath, mdLines.join("\n"), "utf8");
  return report;
}

function scoreStatus({ failCount, warnCount }) {
  if (failCount > 0) return 0;
  if (warnCount > 0) return 0.5;
  return 1;
}

function toTripleMarkdown(report) {
  const lines = [];
  lines.push("# Triple-Pass Launch Review");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push("");
  lines.push(`Overall: ${report.overallGreen ? "GREEN" : "NOT GREEN"} | Score: ${report.score.toFixed(2)}/10`);
  lines.push("");
  lines.push("| Pass | Status | Detail |");
  lines.push("| --- | --- | --- |");
  for (const pass of report.passes) {
    lines.push(`| ${pass.name} | ${pass.status.toUpperCase()} | ${pass.detail} |`);
  }
  lines.push("");
  lines.push("## Artifact Paths");
  lines.push("");
  lines.push("- public/APPSTORE-COMPLIANCE-AUDIT.json");
  lines.push("- public/DB-READINESS-REPORT.json");
  lines.push("- public/TYPECHECK-REPORT.json");
  lines.push("");
  return lines.join("\n");
}

async function main() {
  ensureDir();
  const env = parseEnvFile();

  const appStore = runAppStoreAudit(env);
  const db = await runDbAudit(env);
  const typecheck = runTypecheckAudit();

  const appStoreFail = Number(appStore?.totals?.fail ?? 0);
  const appStoreWarn = Number(appStore?.totals?.warn ?? 0);
  const dbFail = Number(db?.totals?.missing ?? 0) + Number(db?.totals?.error ?? 0);
  const typeFail = typecheck.ok ? 0 : 1;

  const passes = [
    {
      name: "policy_store_readiness",
      status: appStoreFail === 0 && appStoreWarn === 0 ? "pass" : appStoreFail > 0 ? "fail" : "warn",
      detail: `App Store checks: pass=${appStore?.totals?.pass ?? 0}, warn=${appStoreWarn}, fail=${appStoreFail}.`,
    },
    {
      name: "security_data_controls",
      status: dbFail === 0 ? "pass" : "fail",
      detail: `DB checks: present=${db?.totals?.present ?? 0}, missing=${db?.totals?.missing ?? 0}, error=${db?.totals?.error ?? 0}.`,
    },
    {
      name: "automation_monitoring",
      status: typeFail === 0 ? "pass" : "fail",
      detail: `Type integrity errors: ${typecheck.errorCount}.`,
    },
  ];

  const score = (
    (scoreStatus({ failCount: appStoreFail, warnCount: appStoreWarn })
      + scoreStatus({ failCount: dbFail, warnCount: 0 })
      + scoreStatus({ failCount: typeFail, warnCount: 0 })) / 3
  ) * 10;

  const report = {
    generatedAt: new Date().toISOString(),
    overallGreen: passes.every((pass) => pass.status === "pass"),
    score,
    targetScore: 10,
    passes,
  };

  fs.writeFileSync(tripleJsonPath, JSON.stringify(report, null, 2), "utf8");
  fs.writeFileSync(tripleMdPath, toTripleMarkdown(report), "utf8");
  console.log(`Wrote ${path.relative(projectRoot, tripleJsonPath)}`);
  console.log(`Wrote ${path.relative(projectRoot, tripleMdPath)}`);
  console.log(`Score: ${report.score.toFixed(2)}/10`);

  if (!report.overallGreen && !noFail) {
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
