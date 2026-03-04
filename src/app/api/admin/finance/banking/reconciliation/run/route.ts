import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/admin/audit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const runSchema = z.object({
  periodStart: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  periodEnd: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  importId: z.string().uuid().optional(),
  dateToleranceDays: z.number().int().min(0).max(30).default(3),
});

function toUtcDay(dateString: string) {
  const parsed = new Date(dateString);
  if (Number.isNaN(parsed.getTime())) return null;
  return Date.UTC(parsed.getUTCFullYear(), parsed.getUTCMonth(), parsed.getUTCDate());
}

function signedStatementAmount(direction: string, amountCents: number) {
  return direction === "credit" ? amountCents : -amountCents;
}

function signedCashAmount(transaction: {
  amount_cents: number;
  debit_account_code: string;
  credit_account_code: string;
}) {
  if (transaction.debit_account_code === "1000") return transaction.amount_cents;
  if (transaction.credit_account_code === "1000") return -transaction.amount_cents;
  return null;
}

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const body = await request.json().catch(() => null);
  const parsed = runSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();
  const { data: run, error: runError } = await admin
    .from("bank_reconciliation_runs")
    .insert({
      period_start: parsed.data.periodStart,
      period_end: parsed.data.periodEnd,
      source_import_id: parsed.data.importId ?? null,
      status: "running",
      created_by: auth.userId,
      metadata: {
        dateToleranceDays: parsed.data.dateToleranceDays,
      },
    })
    .select("id, period_start, period_end, source_import_id, status, created_at")
    .single();

  if (runError) {
    console.error("Unexpected API error.", toSafeErrorRecord(runError));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  try {
    let statementQuery = admin
      .from("bank_statement_lines")
      .select("id, import_id, line_date, description, amount_cents, direction, matched")
      .gte("line_date", parsed.data.periodStart)
      .lte("line_date", parsed.data.periodEnd)
      .order("line_date", { ascending: true })
      .limit(200000);
    if (parsed.data.importId) {
      statementQuery = statementQuery.eq("import_id", parsed.data.importId);
    }
    const { data: statementLines, error: statementError } = await statementQuery;
    if (statementError) {
      throw new Error(statementError.message);
    }

    const { data: transactions, error: transactionError } = await admin
      .from("business_gl_transactions")
      .select("id, occurred_on, amount_cents, debit_account_code, credit_account_code, description")
      .gte("occurred_on", parsed.data.periodStart)
      .lte("occurred_on", parsed.data.periodEnd)
      .order("occurred_on", { ascending: true })
      .limit(200000);

    if (transactionError) {
      throw new Error(transactionError.message);
    }

    const cashTransactions = (transactions ?? [])
      .map((transaction) => {
        const signed = signedCashAmount({
          amount_cents: Number(transaction.amount_cents ?? 0),
          debit_account_code: transaction.debit_account_code,
          credit_account_code: transaction.credit_account_code,
        });
        if (signed === null) return null;
        return {
          id: transaction.id,
          occurred_on: transaction.occurred_on,
          signed_amount_cents: signed,
        };
      })
      .filter((entry): entry is { id: string; occurred_on: string; signed_amount_cents: number } => Boolean(entry));

    const candidatesByAmount = new Map<number, Array<{ id: string; occurred_on: string }>>();
    for (const transaction of cashTransactions) {
      const list = candidatesByAmount.get(transaction.signed_amount_cents) ?? [];
      list.push({ id: transaction.id, occurred_on: transaction.occurred_on });
      candidatesByAmount.set(transaction.signed_amount_cents, list);
    }

    const usedTransactionIds = new Set<string>();
    const items: Array<{
      reconciliation_run_id: string;
      statement_line_id: string;
      gl_transaction_id: string | null;
      match_type: "exact" | "amount_date" | "manual" | "unmatched";
      confidence_score: number | null;
      status: "matched" | "unmatched" | "needs_review" | "ignored";
      note: string | null;
      metadata: Record<string, unknown>;
    }> = [];
    const matchedStatementLineIds: string[] = [];

    for (const line of statementLines ?? []) {
      const signedAmount = signedStatementAmount(line.direction, Number(line.amount_cents ?? 0));
      const candidates = candidatesByAmount.get(signedAmount) ?? [];
      const lineDay = toUtcDay(line.line_date);

      let selected: { id: string; occurred_on: string; diff: number } | null = null;
      for (const candidate of candidates) {
        if (usedTransactionIds.has(candidate.id)) continue;
        const txDay = toUtcDay(candidate.occurred_on);
        if (lineDay === null || txDay === null) continue;
        const dayDiff = Math.abs(Math.round((txDay - lineDay) / (24 * 60 * 60 * 1000)));
        if (dayDiff > parsed.data.dateToleranceDays) continue;
        if (!selected || dayDiff < selected.diff) {
          selected = { ...candidate, diff: dayDiff };
        }
      }

      if (!selected) {
        items.push({
          reconciliation_run_id: run.id,
          statement_line_id: line.id,
          gl_transaction_id: null,
          match_type: "unmatched",
          confidence_score: null,
          status: "unmatched",
          note: "No cash transaction matched amount/date tolerance.",
          metadata: {
            signedAmountCents: signedAmount,
            lineDate: line.line_date,
            description: line.description,
          },
        });
        continue;
      }

      usedTransactionIds.add(selected.id);
      matchedStatementLineIds.push(line.id);
      const matchType = selected.diff === 0 ? "exact" : "amount_date";
      const confidence =
        selected.diff === 0
          ? 1
          : Math.max(0.5, 1 - selected.diff / Math.max(1, parsed.data.dateToleranceDays + 1));
      const status = selected.diff <= 1 ? "matched" : "needs_review";

      items.push({
        reconciliation_run_id: run.id,
        statement_line_id: line.id,
        gl_transaction_id: selected.id,
        match_type: matchType,
        confidence_score: confidence,
        status,
        note:
          selected.diff === 0
            ? "Exact amount/date match."
            : `Matched amount with ${selected.diff} day difference.`,
        metadata: {
          signedAmountCents: signedAmount,
          dayDifference: selected.diff,
        },
      });
    }

    const { error: itemsError } = await admin.from("bank_reconciliation_items").insert(items);
    if (itemsError) {
      throw new Error(itemsError.message);
    }

    if (matchedStatementLineIds.length > 0) {
      await admin
        .from("bank_statement_lines")
        .update({ matched: true })
        .in("id", matchedStatementLineIds);
    }

    const matchedCount = items.filter((entry) => entry.status === "matched").length;
    const reviewCount = items.filter((entry) => entry.status === "needs_review").length;
    const unmatchedCount = items.filter((entry) => entry.status === "unmatched").length;

    const { error: finalizeError } = await admin
      .from("bank_reconciliation_runs")
      .update({
        status: "completed",
        matched_count: matchedCount,
        review_count: reviewCount,
        unmatched_count: unmatchedCount,
        completed_at: new Date().toISOString(),
      })
      .eq("id", run.id);
    if (finalizeError) {
      throw new Error(finalizeError.message);
    }

    if (parsed.data.importId) {
      await admin
        .from("bank_statement_imports")
        .update({ import_status: "reconciled" })
        .eq("id", parsed.data.importId);
    }

    await logAdminAction({
      adminUserId: auth.userId,
      actionType: "finance_bank_reconciliation_run",
      metadata: {
        runId: run.id,
        periodStart: parsed.data.periodStart,
        periodEnd: parsed.data.periodEnd,
        importId: parsed.data.importId ?? null,
        matchedCount,
        reviewCount,
        unmatchedCount,
      },
    });

    return NextResponse.json({
      success: true,
      runId: run.id,
      periodStart: parsed.data.periodStart,
      periodEnd: parsed.data.periodEnd,
      totals: {
        lineCount: items.length,
        matchedCount,
        reviewCount,
        unmatchedCount,
      },
      unmatchedSample: items
        .filter((entry) => entry.status === "unmatched")
        .slice(0, 25)
        .map((entry) => ({
          statementLineId: entry.statement_line_id,
          note: entry.note,
          metadata: entry.metadata,
        })),
    });
  } catch (error) {
    await admin
      .from("bank_reconciliation_runs")
      .update({
        status: "failed",
        notes: error instanceof Error ? error.message : "Unknown reconciliation error",
        completed_at: new Date().toISOString(),
      })
      .eq("id", run.id);

    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to run bank reconciliation." }, { status: 500 });
  }
}
