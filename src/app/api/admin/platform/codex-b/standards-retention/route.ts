import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import {
  aggregateStandardsTelemetry,
  buildRetentionEnforcementPlan,
  planReportExportExecution,
  retentionPolicySchema,
  standardsTelemetryEventSchema,
} from "@/lib/platform/codex-b/s6-standards-report-retention";

const requestSchema = z.object({
  telemetryEvents: z.array(standardsTelemetryEventSchema).max(500).default([]),
  reportJobs: z
    .array(
      z.object({
        jobId: z.string().trim().min(1).max(120),
        requestedAt: z.string().datetime(),
        priority: z.enum(["normal", "high"]),
        estimatedRows: z.number().int().min(0).max(5_000_000),
        attempt: z.number().int().min(0).max(100),
      }),
    )
    .max(500)
    .default([]),
  retentionPolicies: z.array(retentionPolicySchema).max(100).default([]),
});

export async function POST(request: Request) {
  const rate = await enforceIpRateLimit(request, "api:admin:platform:codex-b:standards-retention:post", {
    max: 25,
    windowMs: 60_000,
  });
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Too many standards/retention requests. Please retry shortly." },
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
    const standards = aggregateStandardsTelemetry(parsed.data.telemetryEvents);
    const exportPlan = planReportExportExecution(parsed.data.reportJobs);
    const retention = buildRetentionEnforcementPlan(parsed.data.retentionPolicies);

    return NextResponse.json({
      standards,
      exportPlan,
      retention,
    });
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
