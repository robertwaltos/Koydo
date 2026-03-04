import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";

const envPath = path.resolve(".env");

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

function parseArgs(argv) {
  const hasFlag = (flag) => argv.includes(flag) || argv.includes(flag.replace(/^--/, ""));
  const getArgValue = (flag) => {
    const plain = flag.replace(/^--/, "");
    const index = argv.indexOf(flag);
    const plainIndex = argv.indexOf(plain);
    if (index !== -1) return argv[index + 1] ?? null;
    if (plainIndex !== -1) return argv[plainIndex + 1] ?? null;
    return null;
  };
  const getFirstPositionalArg = () =>
    argv.find((value) => !value.startsWith("--") && !value.includes("=")) ?? null;

  return {
    json: hasFlag("--json"),
    noFail: hasFlag("--no-fail"),
    requestedBaseUrl:
      getArgValue("--base-url")
      ?? getFirstPositionalArg()
      ?? process.env.SMOKE_BASE_URL
      ?? process.env.NEXT_PUBLIC_APP_URL
      ?? "http://localhost:3000",
  };
}

function normalizeBaseUrl(value) {
  try {
    const parsed = new URL(value);
    return parsed.origin;
  } catch {
    return null;
  }
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

async function buildSupabaseSessionCookieHeader({
  supabaseUrl,
  supabaseAnonKey,
  accessToken,
  refreshToken,
}) {
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
    throw new Error(`Failed to build session cookie: ${error.message}`);
  }

  const pairs = [...cookieStore.entries()].map(([name, value]) => `${name}=${value}`);
  if (pairs.length === 0) {
    throw new Error("Supabase session cookie generation produced no cookies.");
  }

  return pairs.join("; ");
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

function createJsonHeaders(cookieHeader = null) {
  const headers = { "Content-Type": "application/json" };
  if (cookieHeader) {
    headers.cookie = cookieHeader;
  }
  return headers;
}

async function createTeacherFixture(envValues) {
  const supabaseUrl = readValue(envValues, "NEXT_PUBLIC_SUPABASE_URL", "EXPO_PUBLIC_SUPABASE_URL");
  const supabaseAnonKey = readValue(envValues, "NEXT_PUBLIC_SUPABASE_ANON_KEY", "EXPO_PUBLIC_SUPABASE_KEY");
  const supabaseServiceKey = readValue(envValues, "SUPABASE_SERVICE_ROLE_KEY");

  if (!supabaseUrl || !supabaseAnonKey || !supabaseServiceKey) {
    return {
      available: false,
      reason:
        "Missing NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, or SUPABASE_SERVICE_ROLE_KEY.",
    };
  }

  const admin = createClient(supabaseUrl, supabaseServiceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
  const anon = createClient(supabaseUrl, supabaseAnonKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const email = `smoke.teacher.${Date.now()}.${crypto.randomBytes(3).toString("hex")}@example.com`;
  const password = `Sm0ke!${crypto.randomBytes(8).toString("hex")}`;

  let userId = "";
  let classId = "";
  let assignmentId = "";

  const cleanup = async () => {
    if (classId) {
      await admin.from("classroom_sessions").delete().eq("class_id", classId);
      await admin.from("class_assignments").delete().eq("class_id", classId);
      await admin.from("class_enrollments").delete().eq("class_id", classId);
      await admin.from("classroom_entities").delete().eq("id", classId);
    }
    if (userId) {
      await admin.from("user_profiles").delete().eq("user_id", userId);
      await admin.auth.admin.deleteUser(userId);
    }
  };

  try {
    const { data: createdUserData, error: createUserError } = await admin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });

    if (createUserError) {
      throw new Error(`Failed to create smoke teacher user: ${createUserError.message}`);
    }

    userId = createdUserData.user?.id ?? "";
    if (!userId) {
      throw new Error("Teacher user creation returned no user id.");
    }

    const { error: profileError } = await admin.from("user_profiles").upsert(
      {
        user_id: userId,
        display_name: "Classroom Smoke Teacher",
        birth_date: "1990-01-01",
        parental_consent_required: false,
        parental_consent_status: "not_required",
      },
      { onConflict: "user_id" },
    );
    if (profileError) {
      throw new Error(`Failed to seed teacher profile: ${profileError.message}`);
    }

    const { data: signInData, error: signInError } = await anon.auth.signInWithPassword({
      email,
      password,
    });
    if (signInError) {
      throw new Error(`Failed to sign in teacher fixture: ${signInError.message}`);
    }

    const session = signInData.session;
    if (!session?.access_token || !session.refresh_token) {
      throw new Error("Teacher sign-in succeeded but no access/refresh token returned.");
    }

    const { data: classRow, error: classError } = await admin
      .from("classroom_entities")
      .insert({
        teacher_user_id: userId,
        name: "Smoke Classroom S1",
        max_size: 20,
      })
      .select("id")
      .single();
    if (classError) {
      throw new Error(`Failed to create classroom fixture: ${classError.message}`);
    }
    classId = classRow.id;

    const { data: assignmentRow, error: assignmentError } = await admin
      .from("class_assignments")
      .insert({
        class_id: classId,
        module_id: "smoke-module-s1",
        assigned_by: userId,
      })
      .select("id")
      .single();
    if (assignmentError) {
      throw new Error(`Failed to create assignment fixture: ${assignmentError.message}`);
    }
    assignmentId = assignmentRow.id;

    const authCookieHeader = await buildSupabaseSessionCookieHeader({
      supabaseUrl,
      supabaseAnonKey,
      accessToken: session.access_token,
      refreshToken: session.refresh_token,
    });

    return {
      available: true,
      supabaseUrl,
      classId,
      assignmentId,
      authCookieHeader,
      cleanup,
    };
  } catch (error) {
    await cleanup();
    throw error;
  }
}

async function runCheck(results, name, fn, silent = false) {
  try {
    await fn();
    results.push({ name, level: "pass", detail: "ok" });
    if (!silent) console.log(`[PASS] ${name}`);
  } catch (error) {
    const detail = error instanceof Error ? error.message : "Unknown error";
    results.push({ name, level: "fail", detail });
    if (!silent) console.log(`[FAIL] ${name} - ${detail}`);
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const envValues = parseEnvFile(envPath);
  const baseUrl = normalizeBaseUrl(args.requestedBaseUrl);

  if (!baseUrl) {
    const report = {
      generatedAt: new Date().toISOString(),
      baseUrl: args.requestedBaseUrl,
      totals: { pass: 0, fail: 1, total: 1 },
      checks: [{ name: "Base URL", level: "fail", detail: `Invalid base URL: ${args.requestedBaseUrl}` }],
    };
    if (args.json) {
      console.log(JSON.stringify(report, null, 2));
    } else {
      console.error(`[FAIL] Invalid base URL: ${args.requestedBaseUrl}`);
    }
    process.exitCode = 1;
    return;
  }

  const fixture = await createTeacherFixture(envValues);
  const results = [];
  const silent = args.json;

  if (!fixture.available) {
    const report = {
      generatedAt: new Date().toISOString(),
      baseUrl,
      totals: { pass: 0, fail: 1, total: 1 },
      checks: [{
        name: "Teacher fixture bootstrap",
        level: "fail",
        detail: fixture.reason,
      }],
    };
    if (args.json) {
      console.log(JSON.stringify(report, null, 2));
    } else {
      console.error(`[FAIL] ${fixture.reason}`);
    }
    process.exitCode = 1;
    return;
  }

  try {
    const classId = fixture.classId;
    const assignmentId = fixture.assignmentId;
    const cookie = fixture.authCookieHeader;

    await runCheck(results, "Session GET blocks anonymous caller", async () => {
      const { response } = await request(baseUrl, `/api/testing/classes/${classId}/session`);
      assert.equal(response.status, 401);
    }, silent);

    await runCheck(results, "Session GET returns default S1 state", async () => {
      const { response, json } = await request(baseUrl, `/api/testing/classes/${classId}/session`, {
        headers: { cookie },
      });
      assert.equal(response.status, 200, `Expected 200, got ${response.status}`);
      assert.equal(json?.classId, classId);
      assert.equal(json?.session?.sessionStatus, "draft");
      assert.ok(Array.isArray(json?.assignments));
    }, silent);

    await runCheck(results, "Session PATCH rejects foreign assignment id", async () => {
      const { response } = await request(baseUrl, `/api/testing/classes/${classId}/session`, {
        method: "PATCH",
        headers: createJsonHeaders(cookie),
        body: JSON.stringify({
          action: "save",
          activeAssignmentId: crypto.randomUUID(),
        }),
      });
      assert.equal(response.status, 400);
    }, silent);

    await runCheck(results, "Session PATCH save persists mode and fields", async () => {
      const { response, json } = await request(baseUrl, `/api/testing/classes/${classId}/session`, {
        method: "PATCH",
        headers: createJsonHeaders(cookie),
        body: JSON.stringify({
          action: "save",
          deliveryMode: "live",
          activeAssignmentId: assignmentId,
          lessonFocus: "Fractions checkpoint",
          announcement: "Warm-up then sprint review.",
        }),
      });
      assert.equal(response.status, 200);
      assert.equal(json?.session?.deliveryMode, "live");
      assert.equal(json?.session?.activeAssignmentId, assignmentId);
      assert.equal(json?.session?.lessonFocus, "Fractions checkpoint");
    }, silent);

    await runCheck(results, "Session lifecycle transitions: start/pause/resume/end/reset", async () => {
      const patch = async (action) =>
        request(baseUrl, `/api/testing/classes/${classId}/session`, {
          method: "PATCH",
          headers: createJsonHeaders(cookie),
          body: JSON.stringify({ action }),
        });

      const started = await patch("start");
      assert.equal(started.response.status, 200);
      assert.equal(started.json?.session?.sessionStatus, "live");
      assert.ok(started.json?.session?.startedAt);

      const paused = await patch("pause");
      assert.equal(paused.response.status, 200);
      assert.equal(paused.json?.session?.sessionStatus, "paused");

      const resumed = await patch("resume");
      assert.equal(resumed.response.status, 200);
      assert.equal(resumed.json?.session?.sessionStatus, "live");

      const ended = await patch("end");
      assert.equal(ended.response.status, 200);
      assert.equal(ended.json?.session?.sessionStatus, "ended");
      assert.ok(ended.json?.session?.endedAt);

      const reset = await patch("reset");
      assert.equal(reset.response.status, 200);
      assert.equal(reset.json?.session?.sessionStatus, "draft");
      assert.equal(reset.json?.session?.startedAt, null);
      assert.equal(reset.json?.session?.endedAt, null);
    }, silent);

    await runCheck(results, "Quick-review preview returns scaffold payload", async () => {
      const { response, json } = await request(baseUrl, `/api/testing/classes/${classId}/quick-review`, {
        method: "POST",
        headers: createJsonHeaders(cookie),
        body: JSON.stringify({
          mode: "preview",
          topic: "Equivalent fractions",
          questionCount: 6,
          durationMinutes: 8,
          difficultyBand: "mixed",
        }),
      });
      assert.equal(response.status, 200);
      assert.equal(json?.stub, true);
      assert.equal(json?.launchState, "preview_only");
      assert.equal(json?.prompts?.length, 6);
    }, silent);

    await runCheck(results, "Quick-review launch stores session quickReviewStub", async () => {
      const launched = await request(baseUrl, `/api/testing/classes/${classId}/quick-review`, {
        method: "POST",
        headers: createJsonHeaders(cookie),
        body: JSON.stringify({
          mode: "launch",
          topic: "Equivalent fractions",
          questionCount: 5,
          durationMinutes: 8,
          difficultyBand: "baseline",
          learningGoal: "Identify equivalent fraction forms.",
        }),
      });
      assert.equal(launched.response.status, 200);
      assert.equal(launched.json?.launchState, "queued_stub");

      const session = await request(baseUrl, `/api/testing/classes/${classId}/session`, {
        headers: { cookie },
      });
      assert.equal(session.response.status, 200);
      const quickReviewStub = session.json?.session?.sessionSettings?.quickReviewStub;
      assert.ok(quickReviewStub, "Expected quickReviewStub in session settings after launch.");
      assert.equal(quickReviewStub?.mode, "launch");
      assert.equal(quickReviewStub?.topic, "Equivalent fractions");
    }, silent);
  } finally {
    await fixture.cleanup();
  }

  const totals = {
    pass: results.filter((result) => result.level === "pass").length,
    fail: results.filter((result) => result.level === "fail").length,
    total: results.length,
  };

  const report = {
    generatedAt: new Date().toISOString(),
    baseUrl,
    totals,
    checks: results,
  };

  if (args.json) {
    console.log(JSON.stringify(report, null, 2));
  } else {
    console.log("");
    console.log(
      `Summary: ${totals.pass} pass / ${totals.fail} fail (total ${totals.total})`,
    );
  }

  if (!args.noFail && totals.fail > 0) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});

