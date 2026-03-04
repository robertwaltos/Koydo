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
  const getFirstPositionalArg = () =>
    argv.find((value) => !value.startsWith("--") && !value.includes("=")) ?? null;
  const hasFlag = (flag) => argv.includes(flag);
  return {
    json: hasFlag("--json"),
    noFail: hasFlag("--no-fail"),
    requestedBaseUrl:
      getFirstPositionalArg()
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
  if (cookieHeader) headers.cookie = cookieHeader;
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

  const email = `smoke.s2.teacher.${Date.now()}.${crypto.randomBytes(3).toString("hex")}@example.com`;
  const password = `Sm0ke!${crypto.randomBytes(8).toString("hex")}`;

  let userId = "";
  let classId = "";

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
    if (createUserError) throw new Error(`Failed to create smoke teacher user: ${createUserError.message}`);

    userId = createdUserData.user?.id ?? "";
    if (!userId) throw new Error("Teacher user creation returned no user id.");

    const { error: profileError } = await admin.from("user_profiles").upsert(
      {
        user_id: userId,
        display_name: "Classroom Smoke Teacher S2",
        birth_date: "1990-01-01",
        parental_consent_required: false,
        parental_consent_status: "not_required",
      },
      { onConflict: "user_id" },
    );
    if (profileError) throw new Error(`Failed to seed teacher profile: ${profileError.message}`);

    const { data: signInData, error: signInError } = await anon.auth.signInWithPassword({
      email,
      password,
    });
    if (signInError) throw new Error(`Failed to sign in teacher fixture: ${signInError.message}`);

    const session = signInData.session;
    if (!session?.access_token || !session.refresh_token) {
      throw new Error("Teacher sign-in succeeded but no access/refresh token returned.");
    }

    const { data: classRow, error: classError } = await admin
      .from("classroom_entities")
      .insert({
        teacher_user_id: userId,
        name: "Smoke Classroom S2",
        max_size: 20,
      })
      .select("id")
      .single();
    if (classError) throw new Error(`Failed to create classroom fixture: ${classError.message}`);
    classId = classRow.id;

    const authCookieHeader = await buildSupabaseSessionCookieHeader({
      supabaseUrl,
      supabaseAnonKey,
      accessToken: session.access_token,
      refreshToken: session.refresh_token,
    });

    return {
      available: true,
      classId,
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
    console.error(`Invalid base URL: ${args.requestedBaseUrl}`);
    process.exitCode = 1;
    return;
  }

  const fixture = await createTeacherFixture(envValues);
  if (!fixture.available) {
    console.error(fixture.reason);
    process.exitCode = 1;
    return;
  }

  const results = [];
  const silent = args.json;

  try {
    const cookie = fixture.authCookieHeader;
    const classId = fixture.classId;

    await runCheck(results, "Google Classroom create preview returns stub", async () => {
      const { response, json } = await request(
        baseUrl,
        `/api/testing/classes/${classId}/lms/google-classroom/assignments`,
        {
          method: "POST",
          headers: createJsonHeaders(cookie),
          body: JSON.stringify({
            mode: "preview",
            moduleId: "smoke-module-s2-preview",
            title: "S2 preview assignment",
            courseId: "course-s2-preview",
            points: 25,
          }),
        },
      );
      assert.equal(response.status, 200);
      assert.equal(json?.syncState, "preview_only");
    }, silent);

    await runCheck(results, "Google Classroom create queues stub and writes session settings", async () => {
      const created = await request(
        baseUrl,
        `/api/testing/classes/${classId}/lms/google-classroom/assignments`,
        {
          method: "POST",
          headers: createJsonHeaders(cookie),
          body: JSON.stringify({
            mode: "create",
            moduleId: "smoke-module-s2-create",
            title: "S2 create assignment",
            courseId: "course-s2-create",
            points: 40,
          }),
        },
      );
      assert.equal(created.response.status, 200);
      assert.ok(
        ["queued_stub", "queued_retry_required", "synced"].includes(String(created.json?.syncState)),
      );
      assert.ok(created.json?.assignment?.id);

      const session = await request(baseUrl, `/api/testing/classes/${classId}/session`, {
        headers: { cookie },
      });
      assert.equal(session.response.status, 200);
      const stubs = session.json?.session?.sessionSettings?.googleClassroomAssignmentStubs;
      assert.ok(Array.isArray(stubs));
      assert.ok(stubs.length >= 1);
    }, silent);

    await runCheck(results, "Quick-review run flow supports lifecycle and outcome tally", async () => {
      const launched = await request(baseUrl, `/api/testing/classes/${classId}/quick-review`, {
        method: "POST",
        headers: createJsonHeaders(cookie),
        body: JSON.stringify({
          mode: "launch",
          topic: "Decimal operations",
          questionCount: 4,
          durationMinutes: 7,
          difficultyBand: "mixed",
          learningGoal: "Solve decimal word problems.",
        }),
      });
      assert.equal(launched.response.status, 200);

      const start = await request(baseUrl, `/api/testing/classes/${classId}/quick-review/run`, {
        method: "PATCH",
        headers: createJsonHeaders(cookie),
        body: JSON.stringify({ action: "start" }),
      });
      assert.equal(start.response.status, 200);
      assert.equal(start.json?.run?.status, "live");

      const next = await request(baseUrl, `/api/testing/classes/${classId}/quick-review/run`, {
        method: "PATCH",
        headers: createJsonHeaders(cookie),
        body: JSON.stringify({ action: "next" }),
      });
      assert.equal(next.response.status, 200);
      assert.equal(next.json?.run?.currentPromptIndex, 1);

      const markCorrect = await request(baseUrl, `/api/testing/classes/${classId}/quick-review/run`, {
        method: "PATCH",
        headers: createJsonHeaders(cookie),
        body: JSON.stringify({ action: "record_outcome", outcome: "correct" }),
      });
      assert.equal(markCorrect.response.status, 200);
      const prompt = markCorrect.json?.prompts?.[markCorrect.json?.run?.currentPromptIndex];
      const outcome = markCorrect.json?.run?.promptOutcomes?.find((entry) => entry.promptId === prompt?.id);
      assert.ok(outcome?.correctCount >= 1);

      const end = await request(baseUrl, `/api/testing/classes/${classId}/quick-review/run`, {
        method: "PATCH",
        headers: createJsonHeaders(cookie),
        body: JSON.stringify({ action: "end" }),
      });
      assert.equal(end.response.status, 200);
      assert.equal(end.json?.run?.status, "ended");
    }, silent);

    await runCheck(results, "Ingestion preview and save stub succeed", async () => {
      const preview = await request(baseUrl, `/api/testing/classes/${classId}/ingestion/preview`, {
        method: "POST",
        headers: createJsonHeaders(cookie),
        body: JSON.stringify({
          mode: "preview",
          title: "S2 ingestion preview",
          sourceType: "notes",
          rawText:
            "Students should explain equivalent fractions and compare visual models. They should identify simplification steps and verify equivalent forms.",
          language: "en",
          tags: ["fractions", "practice"],
          generateQuestions: true,
          questionCount: 5,
          difficultyBand: "mixed",
        }),
      });
      assert.equal(preview.response.status, 200);
      assert.ok(preview.json?.parse?.segmentCount >= 1);
      assert.ok(Array.isArray(preview.json?.keywords));

      const saved = await request(baseUrl, `/api/testing/classes/${classId}/ingestion/preview`, {
        method: "POST",
        headers: createJsonHeaders(cookie),
        body: JSON.stringify({
          mode: "save_stub",
          title: "S2 ingestion save",
          sourceType: "notes",
          rawText:
            "Learners will analyze fraction equivalence and justify simplification choices with evidence and visual examples.",
          language: "en",
          tags: ["fractions", "analysis"],
          generateQuestions: true,
          questionCount: 4,
          difficultyBand: "baseline",
        }),
      });
      assert.equal(saved.response.status, 200);

      const session = await request(baseUrl, `/api/testing/classes/${classId}/session`, {
        headers: { cookie },
      });
      assert.equal(session.response.status, 200);
      const ingestionStub = session.json?.session?.sessionSettings?.ingestionPreviewStub;
      assert.ok(ingestionStub);
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
    console.log(`Summary: ${totals.pass} pass / ${totals.fail} fail (total ${totals.total})`);
  }

  if (!args.noFail && totals.fail > 0) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
