import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { logAdminAction } from "@/lib/admin/audit";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import {
  runPhaseAIntegrationHarness,
  upsertVectorDocument,
  queryVectorDocuments,
  buildRolloutDashboardSnapshot,
} from "@/lib/platform/codex-b/s4-vector-rollout-harness";
import { getRolloutGovernanceConfig } from "@/lib/platform/rollout-governance";

const requestSchema = z.object({
  includeVectorSanity: z.boolean().optional().default(true),
  includeRolloutSanity: z.boolean().optional().default(true),
});

export async function POST(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:admin:platform:codex-b:integration-harness:run:post", {
    max: 15,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many harness requests. Please retry shortly." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
    );
  }

  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const parsed = requestSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  try {
    const cases = [] as Array<{ id: string; description: string; run: () => Promise<boolean> | boolean }>;

    if (parsed.data.includeVectorSanity) {
      cases.push({
        id: "vector-sanity",
        description: "Vector upsert and retrieval sanity check",
        run: () => {
          upsertVectorDocument({
            documentId: "harness-doc-1",
            text: "fractions ratio proportion arithmetic",
            metadata: { source: "harness" },
          });
          const results = queryVectorDocuments("ratio fractions", 1);
          return results.length > 0;
        },
      });
    }

    if (parsed.data.includeRolloutSanity) {
      cases.push({
        id: "rollout-sanity",
        description: "Rollout dashboard snapshot sanity check",
        run: async () => {
          const runtime = await getRolloutGovernanceConfig({ cacheTtlMs: 1_000 });
          const snapshot = buildRolloutDashboardSnapshot({
            emergencyStopActive: runtime.killSwitches.global,
            featureFlags: runtime.features,
            staleWorkers: 0,
            incidentOpen: Boolean(runtime.emergencyReason),
          });
          return typeof snapshot.generatedAt === "string" && snapshot.generatedAt.length > 0;
        },
      });
    }

    const harness = await runPhaseAIntegrationHarness(cases);

    await logAdminAction({
      adminUserId: auth.userId,
      actionType: "codex_b_phase_a_harness_run",
      metadata: {
        total: harness.total,
        passed: harness.passed,
        failed: harness.failed,
      },
    });

    return NextResponse.json({
      success: true,
      harness,
    });
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
