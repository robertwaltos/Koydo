import { NextResponse } from "next/server";
import { requireAdminForApi } from "@/lib/admin/auth";
import { loadAiRemediationUsageSummary } from "@/lib/admin/ai-remediation-usage";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";

export async function GET(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:admin:ai:remediation-usage:get", {
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
    const admin = createSupabaseAdminClient();
    const summary = await loadAiRemediationUsageSummary(admin);

    return NextResponse.json(summary, {
      status: summary.setupRequired ? 503 : 200,
    });
  } catch (error) {
    console.error("Failed to load AI remediation worksheet usage summary.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to load AI remediation worksheet usage summary." }, { status: 500 });
  }
}
