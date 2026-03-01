import { NextRequest, NextResponse } from "next/server";
import { serverEnv } from "@/lib/config/env";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { getModuleRegistryCount } from "@/lib/modules";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";

type HealthCheck = {
  key: string;
  status: "pass" | "warn" | "fail";
  detail: string;
};

export async function GET(request: NextRequest) {
  const rateLimit = await enforceIpRateLimit(request, "api:health:get", {
    max: 60,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
    );
  }

  const checks: HealthCheck[] = [];

  const hasSupabasePublicConfig =
    Boolean(serverEnv.NEXT_PUBLIC_SUPABASE_URL) && Boolean(serverEnv.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  checks.push({
    key: "supabase_public_config",
    status: hasSupabasePublicConfig ? "pass" : "warn",
    detail: hasSupabasePublicConfig
      ? "Public Supabase URL and anon key configured."
      : "Missing public Supabase URL or anon key.",
  });

  const moduleCount = getModuleRegistryCount();
  checks.push({
    key: "module_registry",
    status: moduleCount > 0 ? "pass" : "fail",
    detail: `Registered modules: ${moduleCount}`,
  });

  const hasAdminSupabaseConfig =
    Boolean(serverEnv.NEXT_PUBLIC_SUPABASE_URL) && Boolean(serverEnv.SUPABASE_SERVICE_ROLE_KEY);

  if (!hasAdminSupabaseConfig) {
    checks.push({
      key: "supabase_admin_config",
      status: "warn",
      detail: "Missing admin Supabase configuration; DB deep check skipped.",
    });
  } else {
    try {
      const admin = createSupabaseAdminClient();
      const { error } = await admin.from("user_profiles").select("user_id", { head: true, count: "exact" }).limit(1);
      if (error) {
        console.error("[health] Supabase DB probe query failed.", toSafeErrorRecord(error));
        checks.push({
          key: "supabase_db_probe",
          status: "fail",
          detail: "Database probe failed.",
        });
      } else {
        checks.push({
          key: "supabase_db_probe",
          status: "pass",
          detail: "Database probe succeeded.",
        });
      }
    } catch (error) {
      console.error("[health] Supabase DB probe threw unexpectedly.", toSafeErrorRecord(error));
      checks.push({
        key: "supabase_db_probe",
        status: "fail",
        detail: "Database probe failed.",
      });
    }
  }

  const hasFail = checks.some((check) => check.status === "fail");
  const overallStatus = hasFail ? "degraded" : "ok";

  return NextResponse.json({
    service: "koydo-api",
    status: overallStatus,
    timestamp: new Date().toISOString(),
    checks,
  });
}
