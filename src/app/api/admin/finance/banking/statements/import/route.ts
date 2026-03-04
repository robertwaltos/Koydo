import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/admin/audit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const statementLineSchema = z.object({
  lineDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  description: z.string().min(1).max(500),
  amountCents: z.number().int().positive(),
  direction: z.enum(["credit", "debit"]),
  externalLineId: z.string().max(200).optional().nullable(),
  runningBalanceCents: z.number().int().optional().nullable(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

const importSchema = z.object({
  bankConnectionId: z.string().uuid().optional().nullable(),
  sourceType: z
    .enum(["plaid_api", "pdf_upload", "paper_scan", "csv_manual", "manual_entry"])
    .default("manual_entry"),
  periodStart: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  periodEnd: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  statementDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional().nullable(),
  fileReference: z.string().max(400).optional().nullable(),
  parserVersion: z.string().max(120).optional().nullable(),
  metadata: z.record(z.string(), z.unknown()).optional(),
  lines: z.array(statementLineSchema).min(1).max(50000),
});

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const body = await request.json().catch(() => null);
  const parsed = importSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const totals = parsed.data.lines.reduce(
    (acc, line) => {
      if (line.direction === "credit") acc.credits += line.amountCents;
      else acc.debits += line.amountCents;
      return acc;
    },
    { credits: 0, debits: 0 },
  );

  const admin = createSupabaseAdminClient();
  const { data: importRow, error: importError } = await admin
    .from("bank_statement_imports")
    .insert({
      bank_connection_id: parsed.data.bankConnectionId ?? null,
      source_type: parsed.data.sourceType,
      period_start: parsed.data.periodStart,
      period_end: parsed.data.periodEnd,
      statement_date: parsed.data.statementDate ?? null,
      import_status: "parsed",
      file_reference: parsed.data.fileReference?.trim() || null,
      parser_version: parsed.data.parserVersion?.trim() || null,
      total_credits_cents: totals.credits,
      total_debits_cents: totals.debits,
      line_count: parsed.data.lines.length,
      metadata: parsed.data.metadata ?? {},
      created_by: auth.userId,
    })
    .select(
      "id, bank_connection_id, source_type, period_start, period_end, statement_date, import_status, file_reference, parser_version, total_credits_cents, total_debits_cents, line_count, metadata, created_by, created_at, updated_at",
    )
    .single();

  if (importError) {
    console.error("Unexpected API error.", toSafeErrorRecord(importError));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  const { error: linesError } = await admin.from("bank_statement_lines").insert(
    parsed.data.lines.map((line) => ({
      import_id: importRow.id,
      line_date: line.lineDate,
      description: line.description.trim(),
      amount_cents: line.amountCents,
      direction: line.direction,
      external_line_id: line.externalLineId?.trim() || null,
      running_balance_cents: line.runningBalanceCents ?? null,
      metadata: line.metadata ?? {},
    })),
  );

  if (linesError) {
    console.error("Unexpected API error.", toSafeErrorRecord(linesError));
    return NextResponse.json({ error: "Failed to insert statement lines." }, { status: 500 });
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "finance_bank_statement_import",
    metadata: {
      importId: importRow.id,
      sourceType: importRow.source_type,
      periodStart: importRow.period_start,
      periodEnd: importRow.period_end,
      lineCount: importRow.line_count,
      totalCreditsCents: importRow.total_credits_cents,
      totalDebitsCents: importRow.total_debits_cents,
    },
  });

  return NextResponse.json({ success: true, import: importRow });
}
