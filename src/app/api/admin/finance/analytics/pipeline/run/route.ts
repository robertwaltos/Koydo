import { NextResponse } from "next/server";
import { z } from "zod";
import { logAdminAction } from "@/lib/admin/audit";
import { requireAdminForApi } from "@/lib/admin/auth";
import { isMissingTableError } from "@/lib/admin/db-readiness";
import { runFinanceServiceIntelligencePipeline } from "@/lib/finance/service-intelligence";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

const runSchema = z.object({
  windowDays: z.number().int().min(7).max(365).default(30),
  reconciliationDays: z.number().int().min(7).max(730).default(120),
  maxRowsPerSource: z.number().int().min(500).max(100000).default(12000),
  runReconciliation: z.boolean().default(true),
});

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const body = await request.json().catch(() => null);
  const parsed = runSchema.safeParse(body ?? {});
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Invalid payload",
        details: parsed.error.flatten(),
      },
      { status: 400 },
    );
  }

  try {
    const admin = createSupabaseAdminClient();
    const snapshot = await runFinanceServiceIntelligencePipeline(admin, {
      windowDays: parsed.data.windowDays,
      reconciliationDays: parsed.data.reconciliationDays,
      maxRowsPerSource: parsed.data.maxRowsPerSource,
      triggeredBy: auth.userId,
      persistSnapshot: true,
      runReconciliation: parsed.data.runReconciliation,
    });

    await logAdminAction({
      adminUserId: auth.userId,
      actionType: "finance_service_intelligence_pipeline_run",
      metadata: {
        windowDays: parsed.data.windowDays,
        reconciliationDays: parsed.data.reconciliationDays,
        maxRowsPerSource: parsed.data.maxRowsPerSource,
        runReconciliation: parsed.data.runReconciliation,
        generatedAt: snapshot.generated_at,
      },
    });

    return NextResponse.json({ success: true, snapshot });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    if (isMissingTableError(message)) {
      return NextResponse.json(
        {
          error:
            "Finance analytics tables are not available yet. Run the latest Supabase migrations first.",
        },
        { status: 503 },
      );
    }
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to run finance analytics pipeline." }, { status: 500 });
  }
}
