#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { spawn } from "node:child_process";
import { createBrowserClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";

const DEFAULT_EMAIL = "codex.partner.smoke@example.com";
const DEFAULT_PASSWORD = "CodexPartnerSmoke#2026";
const DEFAULT_OUT_JSON = "public/PARTNER-COMPLIANCE-API-SMOKE-REPORT.json";
const DEFAULT_OUT_MD = "public/PARTNER-COMPLIANCE-API-SMOKE-REPORT.md";

function parseArgs(argv) {
  const args = {
    baseUrl: "",
    port: 4700 + Math.floor(Math.random() * 200),
    startServer: true,
    withBuild: false,
    outJson: DEFAULT_OUT_JSON,
    outMd: DEFAULT_OUT_MD,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === "--base-url" && argv[i + 1]) {
      args.baseUrl = argv[i + 1];
      i += 1;
      continue;
    }
    if (token === "--port" && argv[i + 1]) {
      args.port = Number.parseInt(argv[i + 1], 10);
      i += 1;
      continue;
    }
    if (token === "--no-start-server") {
      args.startServer = false;
      continue;
    }
    if (token === "--with-build") {
      args.withBuild = true;
      continue;
    }
    if (token === "--out-json" && argv[i + 1]) {
      args.outJson = argv[i + 1];
      i += 1;
      continue;
    }
    if (token === "--out-md" && argv[i + 1]) {
      args.outMd = argv[i + 1];
      i += 1;
      continue;
    }
  }

  if (!args.baseUrl) {
    args.baseUrl = `http://127.0.0.1:${args.port}`;
  }
  return args;
}

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const raw = fs.readFileSync(filePath, "utf8");
  const env = {};
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf("=");
    if (idx <= 0) continue;
    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();
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

function redactEmail(email) {
  const value = String(email ?? "").trim();
  const at = value.indexOf("@");
  if (at <= 1) return "***";
  return `${value.slice(0, 2)}***${value.slice(at)}`;
}

function summarizeBody(text, limit = 900) {
  const compact = text.replace(/\s+/g, " ").trim();
  if (compact.length <= limit) return compact;
  return `${compact.slice(0, limit)}...`;
}

function isoDateOffset(days) {
  const dt = new Date();
  dt.setUTCDate(dt.getUTCDate() + days);
  return dt.toISOString().slice(0, 10);
}

function startServer(port) {
  return spawn("npm", ["run", "start", "--", "-p", String(port)], {
    cwd: process.cwd(),
    stdio: ["ignore", "pipe", "pipe"],
    shell: true,
  });
}

async function waitForServer(baseUrl, timeoutMs = 120000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(`${baseUrl}/api/health`, {
        redirect: "manual",
        signal: AbortSignal.timeout(5000),
      });
      if (response.status < 500) return true;
    } catch {
      // Keep waiting.
    }
    await new Promise((resolve) => setTimeout(resolve, 900));
  }
  return false;
}

async function runCommand(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: process.cwd(),
      stdio: "inherit",
      shell: true,
      ...options,
    });
    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`Command failed: ${command} ${args.join(" ")} (exit ${code ?? "null"})`));
    });
  });
}

async function ensureSmokeUser({ envValues }) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    || process.env.EXPO_PUBLIC_SUPABASE_URL
    || envValues.NEXT_PUBLIC_SUPABASE_URL
    || envValues.EXPO_PUBLIC_SUPABASE_URL
    || "";
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || envValues.SUPABASE_SERVICE_ROLE_KEY || "";
  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Missing Supabase service env for smoke auth setup.");
  }

  const smokeEmail = process.env.PARTNER_SMOKE_ADMIN_EMAIL || envValues.PARTNER_SMOKE_ADMIN_EMAIL || DEFAULT_EMAIL;
  const smokePassword = process.env.PARTNER_SMOKE_ADMIN_PASSWORD || envValues.PARTNER_SMOKE_ADMIN_PASSWORD || DEFAULT_PASSWORD;
  const admin = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  let user = null;
  let page = 1;
  while (page <= 20 && !user) {
    const listed = await admin.auth.admin.listUsers({ page, perPage: 1000 });
    if (listed.error) throw new Error(`Failed listing users: ${listed.error.message}`);
    user = (listed.data.users ?? []).find(
      (entry) => String(entry.email ?? "").toLowerCase() === smokeEmail.toLowerCase(),
    ) ?? null;
    if ((listed.data.users ?? []).length < 1000) break;
    page += 1;
  }

  if (!user) {
    const created = await admin.auth.admin.createUser({
      email: smokeEmail,
      password: smokePassword,
      email_confirm: true,
      user_metadata: {
        source: "codex_partner_smoke",
      },
    });
    if (created.error || !created.data.user?.id) {
      throw new Error(`Failed creating smoke user: ${created.error?.message ?? "unknown error"}`);
    }
    user = created.data.user;
  } else {
    const updated = await admin.auth.admin.updateUserById(user.id, {
      password: smokePassword,
      email_confirm: true,
      user_metadata: {
        source: "codex_partner_smoke",
      },
    });
    if (updated.error) {
      throw new Error(`Failed updating smoke user: ${updated.error.message}`);
    }
  }

  const baseProfile = {
    user_id: user.id,
    is_admin: true,
    is_parent: false,
    display_name: "Codex Partner Smoke Admin",
  };

  const profileWithOwner = {
    ...baseProfile,
    is_owner: true,
    data_mode: "live",
  };

  const firstUpsert = await admin
    .from("user_profiles")
    .upsert(profileWithOwner, { onConflict: "user_id" });
  if (firstUpsert.error) {
    const message = String(firstUpsert.error.message ?? "").toLowerCase();
    const ownerColumnMissing = message.includes("is_owner") && message.includes("does not exist");
    const dataModeMissing = message.includes("data_mode") && message.includes("does not exist");
    if (ownerColumnMissing || dataModeMissing) {
      const fallback = await admin
        .from("user_profiles")
        .upsert(baseProfile, { onConflict: "user_id" });
      if (fallback.error) {
        throw new Error(`Failed upserting smoke user profile (fallback): ${fallback.error.message}`);
      }
    } else {
      throw new Error(`Failed upserting smoke user profile: ${firstUpsert.error.message}`);
    }
  }

  return {
    userId: user.id,
    email: smokeEmail,
    password: smokePassword,
  };
}

async function createAuthCookieJar({ envValues, email, password }) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    || process.env.EXPO_PUBLIC_SUPABASE_URL
    || envValues.NEXT_PUBLIC_SUPABASE_URL
    || envValues.EXPO_PUBLIC_SUPABASE_URL
    || "";
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    || process.env.EXPO_PUBLIC_SUPABASE_KEY
    || envValues.NEXT_PUBLIC_SUPABASE_ANON_KEY
    || envValues.EXPO_PUBLIC_SUPABASE_KEY
    || "";

  if (!supabaseUrl || !anonKey) {
    throw new Error("Missing Supabase public URL/anon key for authenticated API smoke.");
  }

  const jar = [];
  const supabase = createBrowserClient(supabaseUrl, anonKey, {
    cookies: {
      getAll() {
        return jar;
      },
      setAll(cookiesToSet) {
        for (const cookie of cookiesToSet) {
          const existing = jar.findIndex((entry) => entry.name === cookie.name);
          if (!cookie.value) {
            if (existing >= 0) jar.splice(existing, 1);
            continue;
          }
          const next = { name: cookie.name, value: cookie.value };
          if (existing >= 0) jar[existing] = next;
          else jar.push(next);
        }
      },
    },
  });

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    throw new Error(`Supabase sign-in failed for smoke user: ${error.message}`);
  }
  if (!data.user?.id) {
    throw new Error("Supabase sign-in returned no user.");
  }
  if (jar.length === 0) {
    throw new Error("Supabase sign-in succeeded but no auth cookies were produced.");
  }
  return jar;
}

async function sweepApi({ api, traces, route, state }) {
  const started = Date.now();
  let status = 0;
  let text = "";
  let json = null;
  let error = null;

  try {
    const response = await api(route.url, {
      method: route.method,
      body: route.body ?? undefined,
      headers: route.body ? { "Content-Type": "application/json" } : undefined,
    });
    status = response.status;
    text = await response.text();
    try {
      json = JSON.parse(text);
    } catch {
      json = null;
    }
  } catch (caught) {
    error = caught instanceof Error ? caught.message : String(caught);
  }

  if (route.after && typeof route.after === "function") {
    try {
      route.after({ status, json, text, state });
    } catch (caught) {
      const message = caught instanceof Error ? caught.message : String(caught);
      error = error ? `${error} | after-hook: ${message}` : `after-hook: ${message}`;
    }
  }

  const expected = route.expect;
  const pass = !error && expected.includes(status);
  const trace = {
    name: route.name,
    method: route.method,
    url: route.url,
    expectedStatuses: expected,
    status,
    pass,
    durationMs: Date.now() - started,
    error,
    responsePreview: summarizeBody(text || ""),
  };
  traces.push(trace);

  const label = pass ? "PASS" : "FAIL";
  process.stdout.write(`[${label}] ${route.method} ${route.url} -> ${status}${error ? ` (${error})` : ""}\n`);
}

function reportToMarkdown(report) {
  const lines = [];
  lines.push("# Partner Compliance API Smoke Report");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push(`Base URL: ${report.baseUrl}`);
  lines.push(`Smoke user: ${report.smokeUserEmail}`);
  lines.push(`Duration: ${report.durationMs}ms`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Pass: ${report.summary.pass}`);
  lines.push(`- Fail: ${report.summary.fail}`);
  lines.push(`- Total: ${report.summary.total}`);
  lines.push("");
  lines.push("## Trace");
  lines.push("");
  lines.push("| Name | Method | URL | Expected | Actual | Result | Duration (ms) |");
  lines.push("| --- | --- | --- | --- | ---: | --- | ---: |");
  for (const trace of report.traces) {
    lines.push(
      `| ${trace.name} | ${trace.method} | ${trace.url} | ${trace.expectedStatuses.join(",")} | ${trace.status} | ${trace.pass ? "PASS" : "FAIL"} | ${trace.durationMs} |`,
    );
  }
  lines.push("");
  lines.push("## Failures");
  lines.push("");
  const failures = report.traces.filter((trace) => !trace.pass);
  if (failures.length === 0) {
    lines.push("None.");
  } else {
    for (const trace of failures) {
      lines.push(`### ${trace.name}`);
      lines.push("");
      lines.push(`- Method: ${trace.method}`);
      lines.push(`- URL: ${trace.url}`);
      lines.push(`- Expected: ${trace.expectedStatuses.join(", ")}`);
      lines.push(`- Actual: ${trace.status}`);
      if (trace.error) lines.push(`- Error: ${trace.error}`);
      if (trace.responsePreview) lines.push(`- Response: ${trace.responsePreview}`);
      lines.push("");
    }
  }
  return lines.join("\n");
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const startedAt = Date.now();
  const envValues = parseEnvFile(path.resolve(".env"));
  const smokeUser = await ensureSmokeUser({ envValues });
  const smokeUserEmailRedacted = redactEmail(smokeUser.email);
  const authJar = await createAuthCookieJar({
    envValues,
    email: smokeUser.email,
    password: smokeUser.password,
  });

  let server = null;
  if (args.startServer) {
    if (args.withBuild) {
      await runCommand("npm", ["run", "build"]);
    }
    server = startServer(args.port);
    const ready = await waitForServer(args.baseUrl, 150000);
    if (!ready) {
      throw new Error(`Timed out waiting for local server at ${args.baseUrl}`);
    }
  }

  const traces = [];
  const state = {
    userId: smokeUser.userId,
    usPartnerId: null,
    irPartnerId: null,
    payoutBatchId: null,
  };

  try {
    const api = async (routePath, options) => {
      const headers = new Headers(options?.headers ?? {});
      const cookieHeader = authJar.map((cookie) => `${cookie.name}=${cookie.value}`).join("; ");
      headers.set("Cookie", cookieHeader);

      const response = await fetch(new URL(routePath, args.baseUrl), {
        method: options?.method ?? "GET",
        headers,
        body: options?.body ? JSON.stringify(options.body) : undefined,
        redirect: "manual",
      });
      return response;
    };
    const runKey = Date.now();
    const periodStart = isoDateOffset(-7);
    const periodEnd = isoDateOffset(1);

    const routes = [
      {
        name: "admin_partners_list",
        method: "GET",
        url: "/api/admin/partners",
        expect: [200],
      },
      {
        name: "admin_partner_create_us",
        method: "POST",
        url: "/api/admin/partners",
        expect: [200],
        body: {
          displayName: `Smoke US Partner ${runKey}`,
          legalName: `Smoke US Partner Legal ${runKey}`,
          partnerType: "affiliate",
          contactEmail: `smoke-us-${runKey}@example.com`,
          countryCode: "US",
          portalUserId: state.userId,
          notes: "Automated partner compliance smoke run (US).",
        },
        after: ({ json, state: ctx }) => {
          ctx.usPartnerId = json?.partner?.id ?? null;
          if (!ctx.usPartnerId) throw new Error("US partner id missing from response.");
        },
      },
      {
        name: "admin_partner_create_ir",
        method: "POST",
        url: "/api/admin/partners",
        expect: [200],
        body: {
          displayName: `Smoke IR Partner ${runKey}`,
          legalName: `Smoke IR Partner Legal ${runKey}`,
          partnerType: "affiliate",
          contactEmail: `smoke-ir-${runKey}@example.com`,
          countryCode: "IR",
          portalUserId: state.userId,
          notes: "Automated partner compliance smoke run (IR).",
        },
        after: ({ json, state: ctx }) => {
          ctx.irPartnerId = json?.partner?.id ?? null;
          if (!ctx.irPartnerId) throw new Error("IR partner id missing from response.");
        },
      },
      {
        name: "admin_withholding_us",
        method: "POST",
        url: "/api/admin/partners/compliance/withholding",
        expect: [200],
        body: () => ({
          partnerId: state.usPartnerId,
          countryCode: "US",
          sourceIncomeType: "service_commission",
          usSourceIncome: true,
          treatyClaimed: false,
          determinationStatus: "approved",
          approvedWithholdingRate: 0,
          effectiveStart: periodStart,
          effectiveEnd: isoDateOffset(90),
          determinationReference: `SMOKE-US-${runKey}`,
          rationale: "US local partner smoke determination.",
        }),
      },
      {
        name: "admin_withholding_ir",
        method: "POST",
        url: "/api/admin/partners/compliance/withholding",
        expect: [200],
        body: () => ({
          partnerId: state.irPartnerId,
          countryCode: "IR",
          sourceIncomeType: "service_commission",
          usSourceIncome: true,
          treatyClaimed: false,
          determinationStatus: "pending",
          determinationReference: `SMOKE-IR-${runKey}`,
          rationale: "International partner compliance pending review.",
        }),
      },
      {
        name: "admin_commission_us",
        method: "POST",
        url: "/api/admin/partners/commissions",
        expect: [200],
        body: () => ({
          partnerId: state.usPartnerId,
          eventType: "conversion_commission",
          status: "approved",
          sourceEventRef: `SMOKE-US-EVT-${runKey}`,
          grossRevenueCents: 120000,
          commissionRate: 0.2,
          bonusAmountCents: 5000,
          currency: "USD",
          earnedAtIso: new Date().toISOString(),
          availableAtIso: new Date().toISOString(),
        }),
      },
      {
        name: "admin_commission_ir",
        method: "POST",
        url: "/api/admin/partners/commissions",
        expect: [200],
        body: () => ({
          partnerId: state.irPartnerId,
          eventType: "conversion_commission",
          status: "approved",
          sourceEventRef: `SMOKE-IR-EVT-${runKey}`,
          grossRevenueCents: 90000,
          commissionRate: 0.2,
          bonusAmountCents: 0,
          currency: "USD",
          earnedAtIso: new Date().toISOString(),
          availableAtIso: new Date().toISOString(),
        }),
      },
      {
        name: "admin_payout_batch_create",
        method: "POST",
        url: "/api/admin/partners/payouts",
        expect: [200],
        body: {
          batchName: `Partner Payout Smoke ${runKey}`,
          periodStart,
          periodEnd,
          currency: "USD",
          notes: "Automated partner payout smoke batch.",
        },
        after: ({ json, state: ctx }) => {
          ctx.payoutBatchId = json?.batch?.id ?? null;
          if (!ctx.payoutBatchId) throw new Error("Payout batch id missing from response.");
        },
      },
      {
        name: "admin_payout_batch_get",
        method: "GET",
        url: () => `/api/admin/partners/payouts?batchId=${state.payoutBatchId}`,
        expect: [200],
      },
      {
        name: "admin_compliance_monitor_run",
        method: "POST",
        url: "/api/admin/partners/compliance/monitor/run",
        expect: [200],
      },
      {
        name: "admin_regulatory_updates_run",
        method: "POST",
        url: "/api/admin/partners/compliance/regulatory-updates/run",
        expect: [200],
      },
      {
        name: "admin_compliance_weekly_run",
        method: "POST",
        url: "/api/admin/partners/compliance/weekly/run",
        expect: [200],
      },
      {
        name: "admin_filings_queue_get",
        method: "GET",
        url: () => `/api/admin/partners/compliance/filings?periodStart=${periodStart}&periodEnd=${periodEnd}`,
        expect: [200],
      },
      {
        name: "admin_payout_scheduler_dry_run",
        method: "POST",
        url: "/api/admin/partners/payouts/scheduler/run",
        expect: [200],
        body: {
          periodStart,
          periodEnd,
          currency: "USD",
          dryRun: true,
        },
      },
      {
        name: "partner_onboarding_get",
        method: "GET",
        url: () => `/api/partner/onboarding?partnerId=${state.usPartnerId}`,
        expect: [200],
      },
      {
        name: "partner_onboarding_profile_update",
        method: "POST",
        url: "/api/partner/onboarding",
        expect: [200],
        body: () => ({
          partnerId: state.usPartnerId,
          action: "profile",
          profile: {
            displayName: `Smoke US Partner ${runKey} Updated`,
            legalName: `Smoke US Partner Legal ${runKey} Updated`,
            contactEmail: `smoke-us-${runKey}@example.com`,
            countryCode: "US",
            city: "Austin",
            stateRegion: "TX",
            notes: "Profile update from smoke test.",
          },
        }),
      },
      {
        name: "partner_onboarding_tax_update",
        method: "POST",
        url: "/api/partner/onboarding",
        expect: [200],
        body: () => ({
          partnerId: state.usPartnerId,
          action: "tax_profile",
          taxProfile: {
            taxFormType: "w9",
            tinType: "ein",
            taxIdentifier: "12-3456789",
            usTaxpayer: true,
            backupWithholdingRequired: false,
            withholdingRate: 0,
            fatcaStatus: "not_applicable",
            formReceivedAt: periodStart,
            formExpirationDate: isoDateOffset(365),
            status: "valid",
            notes: "Tax profile smoke update.",
          },
        }),
      },
      {
        name: "partner_onboarding_payout_account_create",
        method: "POST",
        url: "/api/partner/onboarding",
        expect: [200],
        body: () => ({
          partnerId: state.usPartnerId,
          action: "payout_account",
          payoutAccount: {
            accountHolderName: "Smoke Test LLC",
            bankName: "Smoke Test Bank",
            accountType: "checking",
            payoutMethod: "ach",
            currency: "USD",
            countryCode: "US",
            routingNumberLast4: "1100",
            accountNumberLast4: "9000",
            markPrimary: true,
          },
        }),
      },
      {
        name: "partner_portal_overview_get",
        method: "GET",
        url: () => `/api/partner/portal/overview?partnerId=${state.usPartnerId}`,
        expect: [200],
      },
      {
        name: "owner_efiling_submit_requires_step_up",
        method: "POST",
        url: "/api/admin/partners/compliance/efiling/submit",
        expect: [428],
        body: {
          filingKind: "irs_1099",
          filingPeriodStart: periodStart,
          filingPeriodEnd: periodEnd,
          referenceId: `SMOKE-EFILE-${runKey}`,
          payload: {
            partnerScope: "smoke",
          },
        },
      },
      {
        name: "owner_payout_approve_requires_step_up",
        method: "POST",
        url: () => `/api/admin/partners/payouts/${state.payoutBatchId}/approve`,
        expect: [428],
        body: {
          approvalScope: "final_release",
          reasonAccountingCode: "SMOKE-APPROVE",
          ledgerAccountCode: "SMOKE-LEDGER",
          approvalReason: "Smoke test approval path validation.",
          confirmText: "APPROVE_PARTNER_PAYOUT",
          approvalPassword1: "unused-because-step-up-required",
          approvalPassword2: "unused-because-step-up-required",
          approvalPassword3: "unused-because-step-up-required",
        },
      },
      {
        name: "owner_payout_process_requires_step_up",
        method: "POST",
        url: () => `/api/admin/partners/payouts/${state.payoutBatchId}/process`,
        expect: [428],
        body: {
          status: "paid",
          reasonAccountingCode: "SMOKE-PROCESS",
          ledgerAccountCode: "SMOKE-LEDGER",
          confirmText: "RELEASE_PARTNER_PAYOUTS",
          paymentReferencePrefix: `SMOKE-${runKey}`,
        },
      },
    ];

    for (const entry of routes) {
      const body = typeof entry.body === "function" ? entry.body() : entry.body;
      const url = typeof entry.url === "function" ? entry.url() : entry.url;
      await sweepApi({
        api,
        traces,
        state,
        route: {
          ...entry,
          body,
          url,
        },
      });
    }
  } finally {
    if (server) {
      if (process.platform === "win32" && server.pid) {
        spawn("taskkill", ["/pid", String(server.pid), "/T", "/F"], {
          stdio: "ignore",
          shell: false,
        });
      } else if (!server.killed) {
        server.kill("SIGTERM");
      }
    }
  }

  const summary = {
    pass: traces.filter((trace) => trace.pass).length,
    fail: traces.filter((trace) => !trace.pass).length,
    total: traces.length,
  };
  const report = {
    generatedAt: new Date().toISOString(),
    baseUrl: args.baseUrl,
    smokeUserEmail: smokeUserEmailRedacted,
    durationMs: Date.now() - startedAt,
    summary,
    state: {
      userId: state.userId,
      usPartnerId: state.usPartnerId,
      irPartnerId: state.irPartnerId,
      payoutBatchId: state.payoutBatchId,
    },
    traces,
  };

  const outJsonPath = path.resolve(args.outJson);
  const outMdPath = path.resolve(args.outMd);
  fs.mkdirSync(path.dirname(outJsonPath), { recursive: true });
  fs.writeFileSync(outJsonPath, JSON.stringify(report, null, 2), "utf8");
  fs.writeFileSync(outMdPath, reportToMarkdown(report), "utf8");

  process.stdout.write(`Wrote ${path.relative(process.cwd(), outJsonPath)}\n`);
  process.stdout.write(`Wrote ${path.relative(process.cwd(), outMdPath)}\n`);
  process.stdout.write(`Summary: pass=${summary.pass} fail=${summary.fail} total=${summary.total}\n`);

  if (summary.fail > 0) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  const message = error instanceof Error ? error.message : String(error);
  process.stderr.write(`partner compliance smoke failed: ${message}\n`);
  process.exit(1);
});
