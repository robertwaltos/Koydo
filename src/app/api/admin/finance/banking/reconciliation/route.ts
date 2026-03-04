import { NextResponse } from "next/server";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

function parseInteger(value: string | null, fallback: number) {
  if (!value) return fallback;
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.trunc(parsed);
}

export async function GET(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const { searchParams } = new URL(request.url);
  const limit = Math.max(1, Math.min(500, parseInteger(searchParams.get("limit"), 100)));
  const runId = searchParams.get("runId");
  const admin = createSupabaseAdminClient();

  const [runsResult, itemsResult, importsResult] = await Promise.all([
    admin
      .from("bank_reconciliation_runs")
      .select(
        "id, period_start, period_end, source_import_id, status, matched_count, unmatched_count, review_count, notes, metadata, created_by, created_at, updated_at, completed_at",
      )
      .order("created_at", { ascending: false })
      .limit(limit),
    runId
      ? admin
          .from("bank_reconciliation_items")
          .select(
            "id, reconciliation_run_id, statement_line_id, gl_transaction_id, match_type, confidence_score, status, note, metadata, created_at, updated_at",
          )
          .eq("reconciliation_run_id", runId)
          .order("created_at", { ascending: false })
          .limit(limit)
      : admin
          .from("bank_reconciliation_items")
          .select(
            "id, reconciliation_run_id, statement_line_id, gl_transaction_id, match_type, confidence_score, status, note, metadata, created_at, updated_at",
          )
          .order("created_at", { ascending: false })
          .limit(limit),
    admin
      .from("bank_statement_imports")
      .select(
        "id, bank_connection_id, source_type, period_start, period_end, statement_date, import_status, total_credits_cents, total_debits_cents, line_count, created_at",
      )
      .order("created_at", { ascending: false })
      .limit(limit),
  ]);

  const error = runsResult.error ?? itemsResult.error ?? importsResult.error;
  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  return NextResponse.json({
    runs: runsResult.data ?? [],
    items: itemsResult.data ?? [],
    imports: importsResult.data ?? [],
  });
}
