import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const outJson = path.join(projectRoot, "public", "APPSTORE-COMPLIANCE-AUDIT.json");
const outMd = path.join(projectRoot, "public", "APPSTORE-COMPLIANCE-AUDIT.md");

const requiredFiles = [
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

function readEnvValue(key) {
  const envPath = path.join(projectRoot, ".env");
  if (!fs.existsSync(envPath)) return null;
  const raw = fs.readFileSync(envPath, "utf8");
  const line = raw
    .split(/\r?\n/)
    .find((entry) => entry.trim().startsWith(`${key}=`));
  if (!line) return null;
  return line.split("=").slice(1).join("=").trim() || null;
}

function checkFileExists(relPath) {
  const exists = fs.existsSync(path.join(projectRoot, relPath));
  return {
    id: `file:${relPath}`,
    category: "required-file",
    status: exists ? "pass" : "fail",
    detail: exists ? "Exists" : "Missing",
    path: relPath,
  };
}

function checkBillingMode() {
  const value = readEnvValue("BILLING_PROVIDER_MODE");
  const allowed = ["stripe_external", "app_store_iap"];
  const isValid = value ? allowed.includes(value) : false;
  return {
    id: "env:BILLING_PROVIDER_MODE",
    category: "billing-mode",
    status: isValid ? "pass" : "warn",
    detail: value
      ? `Configured as ${value}`
      : "Not set in .env (runtime may still provide it).",
    expected: allowed.join(" | "),
  };
}

function checkOAuthParity() {
  const signInPath = path.join(projectRoot, "src", "app", "auth", "sign-in", "oauth-buttons.tsx");
  const signUpPath = path.join(projectRoot, "src", "app", "auth", "sign-up", "page.tsx");
  const providers = ["google", "facebook", "apple", "twitter"];
  const signInContent = fs.existsSync(signInPath) ? fs.readFileSync(signInPath, "utf8").toLowerCase() : "";
  const signUpContent = fs.existsSync(signUpPath) ? fs.readFileSync(signUpPath, "utf8").toLowerCase() : "";
  const missing = providers.filter(
    (provider) => !(signInContent.includes(provider) && signUpContent.includes(provider)),
  );

  return {
    id: "auth:oauth-parity",
    category: "auth",
    status: missing.length === 0 ? "pass" : "warn",
    detail: missing.length === 0 ? "Sign-in/sign-up include target providers." : `Missing or inconsistent: ${missing.join(", ")}`,
  };
}

function buildAudit() {
  const checks = [
    ...requiredFiles.map(checkFileExists),
    checkBillingMode(),
    checkOAuthParity(),
  ];

  const totals = {
    pass: checks.filter((c) => c.status === "pass").length,
    warn: checks.filter((c) => c.status === "warn").length,
    fail: checks.filter((c) => c.status === "fail").length,
    total: checks.length,
  };

  return {
    generatedAt: new Date().toISOString(),
    totals,
    checks,
  };
}

function toMarkdown(audit) {
  const lines = [];
  lines.push("# App Store Compliance Audit");
  lines.push("");
  lines.push(`Generated: ${audit.generatedAt}`);
  lines.push("");
  lines.push(`Checks: ${audit.totals.total} | Pass: ${audit.totals.pass} | Warn: ${audit.totals.warn} | Fail: ${audit.totals.fail}`);
  lines.push("");
  lines.push("| Category | ID | Status | Detail |");
  lines.push("|---|---|---|---|");
  for (const check of audit.checks) {
    lines.push(`| ${check.category} | ${check.id} | ${String(check.status).toUpperCase()} | ${check.detail} |`);
  }
  lines.push("");
  lines.push("## Notes");
  lines.push("");
  lines.push("- This audit checks structural and configuration basics only.");
  lines.push("- Final app store compliance still requires policy/legal and UX review before submission.");
  lines.push("");
  return lines.join("\n");
}

function main() {
  const audit = buildAudit();
  fs.writeFileSync(outJson, JSON.stringify(audit, null, 2), "utf8");
  fs.writeFileSync(outMd, toMarkdown(audit), "utf8");
  console.log(`Wrote ${path.relative(projectRoot, outJson)}`);
  console.log(`Wrote ${path.relative(projectRoot, outMd)}`);
}

main();
