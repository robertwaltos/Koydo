import fs from "node:fs";
import path from "node:path";

const envPath = path.join(process.cwd(), ".env");

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
  if (env[key]) return env[key];
  if (fallbackKey && env[fallbackKey]) return env[fallbackKey];
  if (process.env[key]) return process.env[key];
  if (fallbackKey && process.env[fallbackKey]) return process.env[fallbackKey];
  return "";
}

function checkUrl(value) {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

function summarize(checks) {
  const fail = checks.filter((c) => c.status === "fail").length;
  const warn = checks.filter((c) => c.status === "warn").length;
  const pass = checks.filter((c) => c.status === "pass").length;
  return { pass, warn, fail, total: checks.length };
}

function printCheck(check) {
  const prefix = check.status === "pass" ? "[PASS]" : check.status === "warn" ? "[WARN]" : "[FAIL]";
  console.log(`${prefix} ${check.label} - ${check.detail}`);
}

function main() {
  const env = parseEnvFile(envPath);

  const supabaseUrl = readValue(env, "NEXT_PUBLIC_SUPABASE_URL", "EXPO_PUBLIC_SUPABASE_URL");
  const supabaseAnon = readValue(env, "NEXT_PUBLIC_SUPABASE_ANON_KEY", "EXPO_PUBLIC_SUPABASE_KEY");
  const supabaseService = readValue(env, "SUPABASE_SERVICE_ROLE_KEY");
  const billingMode = readValue(env, "BILLING_PROVIDER_MODE");
  const stripeSecret = readValue(env, "STRIPE_SECRET_KEY");
  const stripeWebhook = readValue(env, "STRIPE_WEBHOOK_SECRET");
  const resendApiKey = readValue(env, "RESEND_API_KEY");
  const consentFromEmail = readValue(env, "PARENT_CONSENT_FROM_EMAIL");
  const consentTokenSecret = readValue(env, "PARENT_CONSENT_TOKEN_SECRET");
  const mixpanel = readValue(env, "NEXT_PUBLIC_MIXPANEL_TOKEN");

  const checks = [];

  checks.push({
    label: "Supabase URL",
    status: supabaseUrl && checkUrl(supabaseUrl) ? "pass" : "fail",
    detail: supabaseUrl ? supabaseUrl : "Missing NEXT_PUBLIC_SUPABASE_URL/EXPO_PUBLIC_SUPABASE_URL",
  });

  checks.push({
    label: "Supabase Anon Key",
    status: supabaseAnon ? "pass" : "fail",
    detail: supabaseAnon ? "Present" : "Missing NEXT_PUBLIC_SUPABASE_ANON_KEY/EXPO_PUBLIC_SUPABASE_KEY",
  });

  checks.push({
    label: "Supabase Service Role Key",
    status: supabaseService ? "pass" : "warn",
    detail: supabaseService ? "Present" : "Missing (admin APIs requiring service role will fail)",
  });

  checks.push({
    label: "Billing Provider Mode",
    status: ["stripe_external", "app_store_iap"].includes(billingMode) ? "pass" : "warn",
    detail: billingMode || "Missing (defaults to stripe_external in code)",
  });

  checks.push({
    label: "Stripe Secret + Webhook",
    status: stripeSecret && stripeWebhook ? "pass" : stripeSecret || stripeWebhook ? "warn" : "warn",
    detail:
      stripeSecret && stripeWebhook
        ? "Both present"
        : "Missing one or both keys (billing routes limited until configured)",
  });

  checks.push({
    label: "Parent Consent Email",
    status: resendApiKey && consentFromEmail ? "pass" : "warn",
    detail:
      resendApiKey && consentFromEmail
        ? "Resend + sender configured"
        : "Missing RESEND_API_KEY or PARENT_CONSENT_FROM_EMAIL (falls back to local simulation link)",
  });

  checks.push({
    label: "Parent Consent Token Secret",
    status: consentTokenSecret.length >= 16 ? "pass" : "warn",
    detail:
      consentTokenSecret.length >= 16
        ? "Configured"
        : "Missing/short (verification link signing may be weaker or disabled)",
  });

  checks.push({
    label: "Mixpanel Token",
    status: mixpanel ? "pass" : "warn",
    detail: mixpanel ? "Present" : "Missing (analytics disabled)",
  });

  console.log("EduForge environment check");
  console.log(`Source: ${fs.existsSync(envPath) ? envPath : "process.env only"}`);
  console.log("");
  checks.forEach(printCheck);
  console.log("");
  const totals = summarize(checks);
  console.log(`Summary: ${totals.pass} pass / ${totals.warn} warn / ${totals.fail} fail (total ${totals.total})`);

  if (totals.fail > 0) {
    process.exitCode = 1;
  }
}

main();
