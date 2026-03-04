import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import {
  buildFinalComplianceEvidencePack,
  buildScalabilityOptimizationHints,
  summarizeGaReadiness,
} from "@/lib/platform/codex-b/s12-ga-load-compliance";

const requestSchema = z.object({
  readinessChecks: z
    .array(
      z.object({
        checkId: z.string().trim().min(1).max(120),
        category: z.enum(["reliability", "security", "compliance", "product"]),
        passed: z.boolean(),
        severity: z.enum(["blocker", "critical", "major", "minor"]),
      }),
    )
    .max(2000)
    .default([]),
  loadResults: z
    .array(
      z.object({
        scenario: z.string().trim().min(1).max(200),
        rps: z.number().min(0).max(100000),
        p95Ms: z.number().min(0).max(600000),
        errorRate: z.number().min(0).max(1),
        cpuUtilization: z.number().min(0).max(1),
        memoryUtilization: z.number().min(0).max(1),
      }),
    )
    .max(2000)
    .default([]),
  evidenceArtifacts: z
    .array(
      z.object({
        artifactId: z.string().trim().min(1).max(120),
        domain: z.enum(["ferpa", "coppa", "security", "availability"]),
        storagePath: z.string().trim().min(1).max(400),
        capturedAt: z.string().datetime(),
      }),
    )
    .max(5000)
    .default([]),
});

export async function POST(request: Request) {
  const rate = await enforceIpRateLimit(request, "api:admin:platform:codex-b:ga-readiness:post", {
    max: 20,
    windowMs: 60_000,
  });
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Too many GA readiness requests. Please retry shortly." },
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
    const gaSummary = summarizeGaReadiness(parsed.data.readinessChecks);
    const loadHints = buildScalabilityOptimizationHints(parsed.data.loadResults);
    const evidencePack = buildFinalComplianceEvidencePack(parsed.data.evidenceArtifacts);

    return NextResponse.json({
      gaSummary,
      loadHints,
      evidencePack,
    });
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
