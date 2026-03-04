import { NextResponse } from "next/server";
import { requireAdminForApi } from "@/lib/admin/auth";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { getRolloutGovernanceConfig } from "@/lib/platform/rollout-governance";
import { buildRolloutDashboardSnapshot } from "@/lib/platform/codex-b/s4-vector-rollout-harness";

export async function GET(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:admin:platform:codex-b:rollout-dashboard:get", {
    max: 60,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many rollout dashboard requests. Please retry shortly." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
    );
  }

  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  try {
    const runtime = await getRolloutGovernanceConfig({ cacheTtlMs: 5_000 });
    const snapshot = buildRolloutDashboardSnapshot({
      emergencyStopActive: runtime.killSwitches.global,
      featureFlags: runtime.features,
      staleWorkers: 0,
      incidentOpen: Boolean(runtime.emergencyReason),
    });

    return NextResponse.json({
      source: runtime.source,
      emergencyReason: runtime.emergencyReason,
      killSwitches: runtime.killSwitches,
      rolloutPercentages: runtime.rolloutPercentages,
      snapshot,
    });
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
