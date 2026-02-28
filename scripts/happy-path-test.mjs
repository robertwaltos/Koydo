#!/usr/bin/env node

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { spawn } from "node:child_process";
import { createClient } from "@supabase/supabase-js";
import { createServerClient } from "@supabase/ssr";

const STARTUP_TIMEOUT_MS = 120_000;
const NPM_COMMAND = "npm";

function parseArgs(argv) {
  const hasFlag = (flag) => {
    const plain = flag.replace(/^--/, "");
    return argv.includes(flag) || argv.includes(plain);
  };
  const getArgValue = (flag) => {
    const plain = flag.replace(/^--/, "");
    const index = argv.indexOf(flag);
    const plainIndex = argv.indexOf(plain);
    if (index !== -1) return argv[index + 1] ?? null;
    if (plainIndex !== -1) return argv[plainIndex + 1] ?? null;
    return null;
  };

  const providedPort = Number(getArgValue("--port"));
  const randomPort = 4700 + Math.floor(Math.random() * 400);

  return {
    json: hasFlag("--json"),
    skipBuild: hasFlag("--skip-build"),
    baseUrl: getArgValue("--base-url"),
    port: Number.isFinite(providedPort) && providedPort > 0 ? providedPort : randomPort,
  };
}

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const values = {};
  const raw = fs.readFileSync(filePath, "utf8");
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const equalsIndex = trimmed.indexOf("=");
    if (equalsIndex < 0) continue;
    values[trimmed.slice(0, equalsIndex).trim()] = trimmed.slice(equalsIndex + 1).trim();
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

function normalizeBaseUrl(value) {
  try {
    return new URL(value).origin;
  } catch {
    return null;
  }
}

function runCommand(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: process.cwd(),
      stdio: "inherit",
      shell: true,
    });
    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
        return;
      }
      reject(new Error(`Command failed: ${command} ${args.join(" ")} (exit ${code ?? "null"})`));
    });
  });
}

function waitForServerReady(child, timeoutMs, port) {
  return new Promise((resolve, reject) => {
    let settled = false;
    const timer = setTimeout(() => {
      if (settled) return;
      settled = true;
      reject(new Error(`Timed out waiting for server readiness after ${timeoutMs}ms.`));
    }, timeoutMs);

    const onData = (chunk) => {
      const text = chunk.toString();
      process.stdout.write(text);
      if (settled) return;
      if (
        text.includes("Ready in")
        || text.includes(`http://localhost:${port}`)
        || text.includes(`http://127.0.0.1:${port}`)
      ) {
        settled = true;
        clearTimeout(timer);
        resolve();
      }
    };

    child.stdout?.on("data", onData);
    child.stderr?.on("data", onData);
    child.on("exit", (code) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      reject(new Error(`Server exited before readiness (exit ${code ?? "null"}).`));
    });
  });
}

function toRelativeLocation(locationHeader, baseUrl) {
  if (!locationHeader) return "";
  try {
    const parsed = new URL(locationHeader, baseUrl);
    return `${parsed.pathname}${parsed.search}`;
  } catch {
    return locationHeader;
  }
}

async function request(baseUrl, routePath, init = {}) {
  const url = new URL(routePath, baseUrl).toString();
  const response = await fetch(url, {
    redirect: "manual",
    ...init,
  });
  let json = null;
  try {
    json = await response.json();
  } catch {
    json = null;
  }
  return { response, json };
}

function upsertCookie(cookieStore, cookieName, cookieValue, cookieOptions) {
  const maxAge = typeof cookieOptions?.maxAge === "number" ? cookieOptions.maxAge : undefined;
  const expires = cookieOptions?.expires ? new Date(cookieOptions.expires) : null;
  const shouldDelete =
    maxAge === 0
    || cookieValue === ""
    || (expires && Number.isFinite(expires.getTime()) && expires.getTime() <= Date.now());

  if (shouldDelete) {
    cookieStore.delete(cookieName);
    return;
  }

  cookieStore.set(cookieName, cookieValue);
}

async function buildSupabaseSessionCookieHeader({ supabaseUrl, supabaseAnonKey, accessToken, refreshToken }) {
  const cookieStore = new Map();
  const serverClient = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return [...cookieStore.entries()].map(([name, value]) => ({ name, value }));
      },
      setAll(cookiesToSet) {
        for (const cookie of cookiesToSet) {
          upsertCookie(cookieStore, cookie.name, cookie.value, cookie.options);
        }
      },
    },
  });

  const { error } = await serverClient.auth.setSession({
    access_token: accessToken,
    refresh_token: refreshToken,
  });

  if (error) {
    throw new Error(error.message);
  }

  const pairs = [...cookieStore.entries()].map(([name, value]) => `${name}=${value}`);
  if (pairs.length === 0) {
    throw new Error("Supabase session cookie generation produced no cookies.");
  }
  return pairs.join("; ");
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const envValues = parseEnvFile(path.resolve(".env"));
  const supabaseUrl = readValue(envValues, "NEXT_PUBLIC_SUPABASE_URL", "EXPO_PUBLIC_SUPABASE_URL");
  const supabaseAnonKey = readValue(envValues, "NEXT_PUBLIC_SUPABASE_ANON_KEY", "EXPO_PUBLIC_SUPABASE_KEY");
  const supabaseServiceKey = readValue(envValues, "SUPABASE_SERVICE_ROLE_KEY");

  if (!supabaseUrl || !supabaseAnonKey || !supabaseServiceKey) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, or SUPABASE_SERVICE_ROLE_KEY.");
  }

  const derivedBaseUrl = args.baseUrl
    ? normalizeBaseUrl(args.baseUrl)
    : `http://127.0.0.1:${args.port}`;
  if (!derivedBaseUrl) {
    throw new Error(`Invalid base URL: ${args.baseUrl}`);
  }

  if (!args.skipBuild) {
    await runCommand(NPM_COMMAND, ["run", "build"]);
  }

  const server = spawn(NPM_COMMAND, ["run", "start", "--", "-p", String(args.port)], {
    cwd: process.cwd(),
    stdio: ["ignore", "pipe", "pipe"],
    shell: true,
  });

  let cleanedUp = false;
  const cleanupServer = () => {
    if (cleanedUp) return;
    cleanedUp = true;
    if (process.platform === "win32") {
      if (server.pid) {
        spawn("taskkill", ["/pid", String(server.pid), "/T", "/F"], { stdio: "ignore", shell: false });
      }
      return;
    }
    if (!server.killed) server.kill("SIGTERM");
  };

  process.on("exit", cleanupServer);
  process.on("SIGINT", () => {
    cleanupServer();
    process.exit(130);
  });
  process.on("SIGTERM", () => {
    cleanupServer();
    process.exit(143);
  });

  const checks = [];
  const addCheck = (name, ok, detail) => checks.push({ name, ok, detail });

  let userId = "";
  let profileOneId = "";
  let profileTwoId = "";
  const admin = createClient(supabaseUrl, supabaseServiceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
  const anon = createClient(supabaseUrl, supabaseAnonKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const cleanupUserData = async () => {
    if (profileOneId) await admin.from("student_profiles").delete().eq("id", profileOneId);
    if (profileTwoId) await admin.from("student_profiles").delete().eq("id", profileTwoId);
    if (userId) await admin.auth.admin.deleteUser(userId);
  };

  try {
    await waitForServerReady(server, STARTUP_TIMEOUT_MS, args.port);

    const email = `happy.path.${Date.now()}.${crypto.randomBytes(3).toString("hex")}@example.com`;
    const password = `HappyPath!${crypto.randomBytes(8).toString("hex")}`;

    const createUserResult = await admin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });
    if (createUserResult.error || !createUserResult.data.user?.id) {
      throw new Error(`Failed to create test user: ${createUserResult.error?.message ?? "missing user id"}`);
    }
    userId = createUserResult.data.user.id;
    addCheck("Sign up (email/password account creation)", true, `Created test user ${userId.slice(0, 8)}…`);

    const upsertComplianceProfile = await admin.from("user_profiles").upsert({
      user_id: userId,
      display_name: "Happy Path Parent",
      birth_date: "1990-01-01",
      parental_consent_required: false,
      parental_consent_status: "not_required",
    });
    if (upsertComplianceProfile.error) {
      throw new Error(`Failed to set user_profiles onboarding baseline: ${upsertComplianceProfile.error.message}`);
    }

    const signInResult = await anon.auth.signInWithPassword({ email, password });
    if (signInResult.error || !signInResult.data.session) {
      throw new Error(`Failed to sign in: ${signInResult.error?.message ?? "missing session"}`);
    }
    const session = signInResult.data.session;
    const authCookie = await buildSupabaseSessionCookieHeader({
      supabaseUrl,
      supabaseAnonKey,
      accessToken: session.access_token,
      refreshToken: session.refresh_token,
    });
    addCheck("Sign in", true, "Authenticated session established.");

    const profileOne = await admin
      .from("student_profiles")
      .insert({
        account_id: userId,
        display_name: "Happy Learner A",
        grade_level: "3",
        age_years: 8,
        initial_assessment_status: "pending",
      })
      .select("id")
      .single();
    if (profileOne.error || !profileOne.data?.id) {
      throw new Error(`Failed to create learner profile #1: ${profileOne.error?.message ?? "missing profile id"}`);
    }
    profileOneId = profileOne.data.id;
    addCheck("Create learner profile (age 8)", true, `Profile ${profileOneId.slice(0, 8)}… created.`);

    const onboardingUpdate = await admin
      .from("student_profiles")
      .update({
        initial_assessment_status: "completed",
        initial_assessment_data: {
          version: "happy_path_script_v1",
          completed_at: new Date().toISOString(),
          responses: [{ q: "Sample", selected: "A", correct: "A", is_correct: true }],
        },
      })
      .eq("id", profileOneId);
    if (onboardingUpdate.error) {
      throw new Error(`Failed to complete onboarding assessment: ${onboardingUpdate.error.message}`);
    }
    addCheck("Complete onboarding assessment", true, "Profile assessment status set to completed.");

    const profileTwo = await admin
      .from("student_profiles")
      .insert({
        account_id: userId,
        display_name: "Happy Learner B",
        grade_level: "5",
        age_years: 10,
        initial_assessment_status: "completed",
      })
      .select("id")
      .single();
    if (profileTwo.error || !profileTwo.data?.id) {
      throw new Error(`Failed to create learner profile #2: ${profileTwo.error?.message ?? "missing profile id"}`);
    }
    profileTwoId = profileTwo.data.id;

    const profileOneCookie = `${authCookie}; active_profile_id=${profileOneId}`;
    const profileTwoCookie = `${authCookie}; active_profile_id=${profileTwoId}`;

    const exploreResponse = await request(derivedBaseUrl, "/explore?stage=early-elem", {
      headers: { cookie: profileOneCookie },
    });
    addCheck(
      "Browse explore lobby and select a stage",
      exploreResponse.response.status === 200,
      `status=${exploreResponse.response.status}`,
    );

    const moduleResponse = await request(derivedBaseUrl, "/modules/basic-math-101", {
      headers: { cookie: profileOneCookie },
    });
    addCheck(
      "Open a free module",
      moduleResponse.response.status === 200,
      `status=${moduleResponse.response.status}`,
    );

    const lessonResponse = await request(derivedBaseUrl, "/lessons/basic-math-101-l01", {
      headers: { cookie: profileOneCookie },
    });
    addCheck(
      "Open lesson experience (video/flashcards/quiz flow route)",
      lessonResponse.response.status === 200,
      `status=${lessonResponse.response.status}`,
    );

    const progressResponse = await request(derivedBaseUrl, "/api/progress", {
      method: "POST",
      headers: {
        cookie: profileOneCookie,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        lessonId: "basic-math-101-l01",
        scorePercentage: 0.9,
      }),
    });
    const progressOk = progressResponse.response.status === 200 && progressResponse.json?.success === true;
    addCheck(
      "Complete a lesson and save progress",
      progressOk,
      `status=${progressResponse.response.status} success=${String(progressResponse.json?.success ?? false)}`,
    );

    const progressRow = await admin
      .from("user_learning_progress")
      .select("lesson_id, repetitions, next_review_at")
      .eq("user_id", userId)
      .eq("lesson_id", "basic-math-101-l01")
      .maybeSingle();
    addCheck(
      "Return to explore and verify progress persisted",
      !progressRow.error && Boolean(progressRow.data),
      progressRow.error ? progressRow.error.message : "Progress row exists for basic-math-101-l01",
    );

    const dashboardProfileOne = await request(derivedBaseUrl, "/student/dashboard", {
      headers: { cookie: profileOneCookie },
    });
    const dashboardProfileTwo = await request(derivedBaseUrl, "/student/dashboard", {
      headers: { cookie: profileTwoCookie },
    });
    addCheck(
      "Switch profiles",
      dashboardProfileOne.response.status === 200 && dashboardProfileTwo.response.status === 200,
      `profile1=${dashboardProfileOne.response.status} profile2=${dashboardProfileTwo.response.status}`,
    );

    const signedOutResponse = await request(derivedBaseUrl, "/who-is-learning");
    const signedOutLocation = toRelativeLocation(signedOutResponse.response.headers.get("location"), derivedBaseUrl);
    const signedOutOk = signedOutResponse.response.status >= 300
      && signedOutResponse.response.status < 400
      && signedOutLocation.startsWith("/auth/sign-in");
    addCheck("Sign out", signedOutOk, `status=${signedOutResponse.response.status} location=${signedOutLocation}`);

    const secondSignIn = await anon.auth.signInWithPassword({ email, password });
    if (secondSignIn.error || !secondSignIn.data.session) {
      throw new Error(`Failed to sign back in: ${secondSignIn.error?.message ?? "missing session"}`);
    }
    const secondAuthCookie = await buildSupabaseSessionCookieHeader({
      supabaseUrl,
      supabaseAnonKey,
      accessToken: secondSignIn.data.session.access_token,
      refreshToken: secondSignIn.data.session.refresh_token,
    });

    const signedBackInResponse = await request(derivedBaseUrl, "/who-is-learning", {
      headers: { cookie: secondAuthCookie },
    });
    addCheck(
      "Sign back in",
      signedBackInResponse.response.status === 200,
      `status=${signedBackInResponse.response.status}`,
    );
  } finally {
    await cleanupUserData();
    cleanupServer();
  }

  const totals = {
    pass: checks.filter((check) => check.ok).length,
    fail: checks.filter((check) => !check.ok).length,
    total: checks.length,
  };
  const report = {
    generatedAt: new Date().toISOString(),
    baseUrl: derivedBaseUrl,
    totals,
    checks: checks.map((check) => ({
      name: check.name,
      level: check.ok ? "pass" : "fail",
      detail: check.detail,
    })),
  };

  if (args.json) {
    console.log(JSON.stringify(report, null, 2));
  } else {
    console.log("Happy path test");
    console.log(`Base URL: ${derivedBaseUrl}`);
    for (const check of report.checks) {
      console.log(`[${check.level.toUpperCase()}] ${check.name} - ${check.detail}`);
    }
    console.log(`Summary: ${totals.pass} pass / ${totals.fail} fail (total ${totals.total})`);
  }

  if (totals.fail > 0) {
    process.exitCode = 1;
  }
}

void main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
