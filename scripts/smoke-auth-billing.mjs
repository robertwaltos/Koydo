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
  const getFirstPositionalArg = () =>
    argv.find((value) => !value.startsWith("--") && !value.includes("=")) ?? null;

  return {
    json: hasFlag("--json"),
    noFail: hasFlag("--no-fail"),
    requireAuthenticated: hasFlag("--require-authenticated"),
    skipAuthenticated: hasFlag("--skip-authenticated"),
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

async function expectRedirect(baseUrl, routePath, expectedPrefix, cookieHeader = null) {
  const headers = cookieHeader ? { cookie: cookieHeader } : undefined;
  const { response } = await request(baseUrl, routePath, { headers });
  const location = toRelativeLocation(response.headers.get("location"), baseUrl);
  const redirected = response.status >= 300 && response.status < 400;
  const ok = redirected && location.startsWith(expectedPrefix);
  return {
    ok,
    detail: `status=${response.status} location=${location || "(none)"}`,
  };
}

async function expectStatus(baseUrl, routePath, expectedStatus, cookieHeader = null) {
  const headers = cookieHeader ? { cookie: cookieHeader } : undefined;
  const { response } = await request(baseUrl, routePath, { headers });
  return {
    ok: response.status === expectedStatus,
    detail: `status=${response.status} expected=${expectedStatus}`,
  };
}

async function expectProtectedBillingApi(baseUrl, routePath, cookieHeader = null) {
  const headers = { "Content-Type": "application/json" };
  if (cookieHeader) {
    headers.cookie = cookieHeader;
  }

  const { response, json } = await request(baseUrl, routePath, {
    method: "POST",
    headers,
    body: "{}",
  });

  if (response.status === 401 || response.status === 403) {
    return {
      ok: true,
      detail: `status=${response.status}`,
    };
  }

  if (
    response.status === 500
    && json
    && typeof json.error === "string"
    && json.error.toLowerCase().includes("missing stripe configuration")
  ) {
    return {
      ok: true,
      detail: `status=500 (${json.error})`,
    };
  }

  return {
    ok: false,
    detail: `status=${response.status} error=${json?.error ?? "unknown"}`,
  };
}

async function expectStatusOrRedirect(baseUrl, routePath, expectedStatus, expectedRedirectPrefix, cookieHeader = null) {
  const headers = cookieHeader ? { cookie: cookieHeader } : undefined;
  const { response } = await request(baseUrl, routePath, { headers });
  const location = toRelativeLocation(response.headers.get("location"), baseUrl);
  const isExpectedStatus = response.status === expectedStatus;
  const isExpectedRedirect =
    response.status >= 300
    && response.status < 400
    && location.startsWith(expectedRedirectPrefix);

  return {
    ok: isExpectedStatus || isExpectedRedirect,
    detail: `status=${response.status} location=${location || "(none)"}`,
  };
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
    throw new Error(error.message);
  }

  const pairs = [...cookieStore.entries()].map(([name, value]) => `${name}=${value}`);
  if (pairs.length === 0) {
    throw new Error("Supabase session cookie generation produced no cookies.");
  }

  return pairs.join("; ");
}

async function createAuthenticatedFixture(envValues) {
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

  const email = `smoke.auth.${Date.now()}.${crypto.randomBytes(3).toString("hex")}@example.com`;
  const password = `Sm0ke!${crypto.randomBytes(8).toString("hex")}`;

  let userId = "";
  let profileId = "";

  const cleanup = async () => {
    if (profileId) {
      await admin.from("student_profiles").delete().eq("id", profileId);
    }
    if (userId) {
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
      throw new Error(`Failed to create smoke user: ${createUserError.message}`);
    }

    userId = createdUserData.user?.id ?? "";
    if (!userId) {
      throw new Error("Smoke user creation returned no user id.");
    }

    const { error: onboardingProfileError } = await admin.from("user_profiles").upsert(
      {
        user_id: userId,
        display_name: "Smoke Parent",
        birth_date: "2000-01-01",
        parental_consent_required: false,
        parental_consent_status: "not_required",
      },
      { onConflict: "user_id" },
    );

    if (onboardingProfileError) {
      throw new Error(`Failed to seed smoke user onboarding profile: ${onboardingProfileError.message}`);
    }

    const { data: signInData, error: signInError } = await anon.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      throw new Error(`Failed to sign in smoke user: ${signInError.message}`);
    }

    const session = signInData.session;
    if (!session?.access_token || !session.refresh_token) {
      throw new Error("Sign-in succeeded but no access/refresh token returned.");
    }

    const { data: insertedProfile, error: profileError } = await admin
      .from("student_profiles")
      .insert({
        account_id: userId,
        display_name: "Smoke Learner",
        grade_level: "3",
        initial_assessment_status: "pending",
      })
      .select("id")
      .single();

    if (profileError) {
      throw new Error(`Failed to create smoke student profile: ${profileError.message}`);
    }

    profileId = insertedProfile.id;
    const authCookieHeader = await buildSupabaseSessionCookieHeader({
      supabaseUrl,
      supabaseAnonKey,
      accessToken: session.access_token,
      refreshToken: session.refresh_token,
    });
    const authWithProfileCookieHeader = `${authCookieHeader}; active_profile_id=${profileId}`;

    return {
      available: true,
      userId,
      profileId,
      authCookieHeader,
      authWithProfileCookieHeader,
      cleanup,
    };
  } catch (error) {
    await cleanup();
    throw error;
  }
}

async function runCheck(results, check) {
  try {
    const result = await check.run();
    const level = result.ok ? "pass" : "fail";
    results.push({ name: check.name, level, detail: result.detail });
    if (!check.silent) {
      console.log(`[${level.toUpperCase()}] ${check.name} - ${result.detail}`);
    }
  } catch (error) {
    const detail = error instanceof Error ? error.message : "Unknown error";
    results.push({ name: check.name, level: "fail", detail });
    if (!check.silent) {
      console.log(`[FAIL] ${check.name} - ${detail}`);
    }
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const envValues = parseEnvFile(envPath);
  const baseUrl = normalizeBaseUrl(args.requestedBaseUrl);

  if (!baseUrl) {
    const detail = `Invalid base URL: ${args.requestedBaseUrl}`;
    if (args.json) {
      console.log(JSON.stringify({
        generatedAt: new Date().toISOString(),
        baseUrl: args.requestedBaseUrl,
        totals: { pass: 0, warn: 0, fail: 1, skip: 0, total: 1 },
        checks: [{ name: "Base URL", level: "fail", detail }],
      }, null, 2));
    } else {
      console.error(`[FAIL] ${detail}`);
    }
    process.exitCode = 1;
    return;
  }

  const results = [];
  const print = !args.json;

  if (print) {
    console.log("Auth/Billing smoke checks");
    console.log(`Base URL: ${baseUrl}`);
    console.log("");
  }

  const unauthChecks = [
    {
      name: "Home route is reachable",
      run: () => expectStatus(baseUrl, "/", 200),
    },
    {
      name: "Who-is-learning redirects unauthenticated users",
      run: () => expectRedirect(baseUrl, "/who-is-learning", "/auth/sign-in"),
    },
    {
      name: "Select-profile redirects unauthenticated users",
      run: () => expectRedirect(baseUrl, "/select-profile", "/auth/sign-in"),
    },
    {
      name: "Student dashboard redirects unauthenticated users",
      run: () => expectRedirect(baseUrl, "/student/dashboard", "/auth/sign-in"),
    },
    {
      name: "Sign-in page with next path loads",
      run: () => expectStatus(baseUrl, "/auth/sign-in?next=%2Fbilling%2Fcheckout", 200),
    },
    {
      name: "Billing checkout page loads",
      run: () => expectStatus(baseUrl, "/billing/checkout", 200),
    },
    {
      name: "Stripe checkout API remains protected",
      run: () => expectProtectedBillingApi(baseUrl, "/api/stripe/checkout"),
    },
    {
      name: "Stripe portal API remains protected",
      run: () => expectProtectedBillingApi(baseUrl, "/api/stripe/portal"),
    },
  ];

  for (const check of unauthChecks) {
    await runCheck(results, { ...check, silent: !print });
  }

  let fixture = null;
  try {
    if (args.skipAuthenticated) {
      results.push({
        name: "Authenticated profile-gated smoke checks",
        level: "skip",
        detail: "Skipped by --skip-authenticated flag.",
      });
      if (print) {
        console.log("[SKIP] Authenticated profile-gated smoke checks - skipped by flag.");
      }
    } else {
      fixture = await createAuthenticatedFixture(envValues);

      if (!fixture.available) {
        const level = args.requireAuthenticated ? "fail" : "warn";
        results.push({
          name: "Authenticated profile-gated smoke checks",
          level,
          detail: fixture.reason,
        });
        if (print) {
          console.log(`[${level.toUpperCase()}] Authenticated profile-gated smoke checks - ${fixture.reason}`);
        }
      } else {
        const authenticatedChecks = [
          {
            name: "Who-is-learning is accessible when authenticated",
            run: () => expectStatus(baseUrl, "/who-is-learning", 200, fixture.authCookieHeader),
          },
          {
            name: "Select-profile is accessible when authenticated",
            run: () => expectStatus(baseUrl, "/select-profile", 200, fixture.authCookieHeader),
          },
          {
            name: "Student dashboard redirects to profile gate when profile cookie missing",
            run: () =>
              expectRedirect(baseUrl, "/student/dashboard", "/who-is-learning", fixture.authCookieHeader),
          },
          {
            name: "Student dashboard is accessible with valid active profile",
            run: () => expectStatus(baseUrl, "/student/dashboard", 200, fixture.authWithProfileCookieHeader),
          },
          {
            name: "Student root is reachable with valid active profile",
            run: () =>
              expectStatusOrRedirect(
                baseUrl,
                "/student",
                200,
                "/student/dashboard",
                fixture.authWithProfileCookieHeader,
              ),
          },
        ];

        for (const check of authenticatedChecks) {
          await runCheck(results, { ...check, silent: !print });
        }
      }
    }
  } finally {
    if (fixture?.cleanup) {
      await fixture.cleanup();
    }
  }

  const totals = {
    pass: results.filter((result) => result.level === "pass").length,
    warn: results.filter((result) => result.level === "warn").length,
    fail: results.filter((result) => result.level === "fail").length,
    skip: results.filter((result) => result.level === "skip").length,
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
      `Summary: ${totals.pass} pass / ${totals.warn} warn / ${totals.fail} fail / ${totals.skip} skip (total ${totals.total})`,
    );
  }

  if (!args.noFail && totals.fail > 0) {
    process.exitCode = 1;
  }
}

void main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
