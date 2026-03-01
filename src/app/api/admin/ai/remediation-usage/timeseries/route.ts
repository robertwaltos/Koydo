import { NextResponse } from "next/server";
import { requireAdminForApi } from "@/lib/admin/auth";
import { loadAiRemediationUsageTimeseries } from "@/lib/admin/ai-remediation-usage";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";

function parseDays(input: string | null) {
  const parsed = Number(input ?? "");
  if (!Number.isFinite(parsed)) return 14;
  return Math.max(1, Math.min(30, Math.round(parsed)));
}

export async function GET(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:admin:ai:remediation-usage:timeseries:get", {
    max: 120,
    windowMs: 60_000,
  });

  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please retry shortly." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
    );
  }

  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  try {
    const url = new URL(request.url);
    const days = parseDays(url.searchParams.get("days"));
    const admin = createSupabaseAdminClient();
    const data = await loadAiRemediationUsageTimeseries(admin, { days });

    return NextResponse.json(data, {
      status: data.setupRequired ? 503 : 200,
    });
  } catch (error) {
    console.error("Failed to load remediation worksheet timeseries.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to load remediation worksheet timeseries." }, { status: 500 });
  }
}
