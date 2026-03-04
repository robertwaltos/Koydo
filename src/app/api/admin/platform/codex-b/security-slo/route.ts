import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import {
  evaluateSloAlerts,
  prioritizeSecurityFindings,
  resolveDistrictPilotAccess,
} from "@/lib/platform/codex-b/s8-security-slo-pilot";

const requestSchema = z.object({
  findings: z
    .array(
      z.object({
        findingId: z.string().trim().min(1).max(120),
        severity: z.enum(["critical", "high", "medium", "low"]),
        area: z.string().trim().min(1).max(120),
        remediationEtaDays: z.number().int().min(0).max(365),
        discoveredAt: z.string().datetime(),
      }),
    )
    .max(1000)
    .default([]),
  sloStatus: z
    .array(
      z.object({
        service: z.string().trim().min(1).max(120),
        availability: z.number().min(0).max(1),
        p95LatencyMs: z.number().min(0).max(120000),
        errorRate: z.number().min(0).max(1),
        targetAvailability: z.number().min(0).max(1),
        targetP95LatencyMs: z.number().min(0).max(120000),
        maxErrorRate: z.number().min(0).max(1),
      }),
    )
    .max(200)
    .default([]),
  pilotControl: z.object({
    districtId: z.string().trim().min(1).max(120),
    ring: z.enum(["canary", "pilot", "broad"]),
    enabledFeatures: z.array(z.string().trim().min(1).max(120)).max(200),
    emergencyStop: z.boolean(),
  }),
  pilotFeatureCheck: z.string().trim().min(1).max(120),
});

export async function POST(request: Request) {
  const rate = await enforceIpRateLimit(request, "api:admin:platform:codex-b:security-slo:post", {
    max: 25,
    windowMs: 60_000,
  });
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Too many security/SLO requests. Please retry shortly." },
      { status: 429, headers: { "Retry-After": String(rate.retryAfterSeconds) } },
    );
  }

  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const parsed = requestSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  try {
    const prioritizedFindings = prioritizeSecurityFindings(parsed.data.findings);
    const sloAlerts = evaluateSloAlerts(parsed.data.sloStatus);
    const pilotAccess = resolveDistrictPilotAccess(parsed.data.pilotControl, parsed.data.pilotFeatureCheck);

    return NextResponse.json({
      prioritizedFindings,
      sloAlerts,
      pilotAccess,
    });
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
