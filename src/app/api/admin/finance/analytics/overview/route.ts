import { NextResponse } from "next/server";
import { requireAdminForApi } from "@/lib/admin/auth";
import { isMissingTableError } from "@/lib/admin/db-readiness";
import {
  loadLatestFinanceAnalyticsSnapshot,
  runFinanceServiceIntelligencePipeline,
} from "@/lib/finance/service-intelligence";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

function parseWindowDays(value: string | null) {
  const parsed = Number(value ?? 30);
  if (!Number.isFinite(parsed)) return 30;
  return Math.max(7, Math.min(365, Math.trunc(parsed)));
}

export async function GET(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const { searchParams } = new URL(request.url);
  const windowDays = parseWindowDays(searchParams.get("windowDays"));
  const refresh = searchParams.get("refresh") === "1";

  try {
    const admin = createSupabaseAdminClient();
    const snapshot = refresh
      ? await runFinanceServiceIntelligencePipeline(admin, {
          windowDays,
          reconciliationDays: Math.max(30, windowDays),
          maxRowsPerSource: 12000,
          triggeredBy: auth.userId,
          persistSnapshot: true,
          runReconciliation: false,
        })
      : await loadLatestFinanceAnalyticsSnapshot(admin, windowDays);

    if (snapshot) {
      return NextResponse.json({ snapshot });
    }

    const generated = await runFinanceServiceIntelligencePipeline(admin, {
      windowDays,
      reconciliationDays: Math.max(30, windowDays),
      maxRowsPerSource: 12000,
      triggeredBy: auth.userId,
      persistSnapshot: true,
      runReconciliation: false,
    });
    return NextResponse.json({ snapshot: generated, generated: true });
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
    return NextResponse.json({ error: "Failed to load finance analytics overview." }, { status: 500 });
  }
}
