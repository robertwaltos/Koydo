import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/admin/audit";
import { parseStatementInput } from "@/lib/finance/statement-parser";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const parseSchema = z.object({
  bankConnectionId: z.string().uuid().optional().nullable(),
  sourceType: z
    .enum(["plaid_api", "pdf_upload", "paper_scan", "csv_manual", "manual_entry"])
    .default("manual_entry"),
  periodStart: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  periodEnd: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  statementDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional().nullable(),
  rawText: z.string().max(10_000_000).optional().nullable(),
  ocrText: z.string().max(10_000_000).optional().nullable(),
  rawCsv: z.string().max(10_000_000).optional().nullable(),
  pdfBase64: z.string().max(20_000_000).optional().nullable(),
  fileReference: z.string().max(400).optional().nullable(),
  parserVersion: z.string().max(120).optional().nullable(),
  autoImport: z.boolean().default(true),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const body = await request.json().catch(() => null);
  const parsed = parseSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const lines = parseStatementInput({
    rawText: parsed.data.rawText ?? null,
    ocrText: parsed.data.ocrText ?? null,
    rawCsv: parsed.data.rawCsv ?? null,
    pdfBase64: parsed.data.pdfBase64 ?? null,
    hints: {
      statementDate: parsed.data.statementDate ?? parsed.data.periodEnd,
    },
  });

  if (lines.length === 0) {
    return NextResponse.json(
      {
        error:
          "No transaction lines could be parsed. Provide OCR/PDF extracted text or CSV in supported formats.",
      },
      { status: 422 },
    );
  }

  const totals = lines.reduce(
    (acc, line) => {
      if (line.direction === "credit") acc.credits += line.amountCents;
      else acc.debits += line.amountCents;
      return acc;
    },
    { credits: 0, debits: 0 },
  );

  if (!parsed.data.autoImport) {
    return NextResponse.json({
      success: true,
      parsedOnly: true,
      lineCount: lines.length,
      totals: {
        creditsCents: totals.credits,
        debitsCents: totals.debits,
      },
      lines: lines.slice(0, 5000),
    });
  }

  const admin = createSupabaseAdminClient();
  const { data: importRow, error: importError } = await admin
    .from("bank_statement_imports")
    .insert({
      bank_connection_id: parsed.data.bankConnectionId ?? null,
      source_type: parsed.data.sourceType,
      period_start: parsed.data.periodStart,
      period_end: parsed.data.periodEnd,
      statement_date: parsed.data.statementDate ?? parsed.data.periodEnd,
      import_status: "parsed",
      file_reference: parsed.data.fileReference ?? null,
      parser_version: parsed.data.parserVersion ?? "statement_parse_v1",
      total_credits_cents: totals.credits,
      total_debits_cents: totals.debits,
      line_count: lines.length,
      metadata: {
        parse_mode: "ocr_pdf_text",
        ...parsed.data.metadata,
      },
      created_by: auth.userId,
    })
    .select(
      "id, bank_connection_id, source_type, period_start, period_end, statement_date, import_status, file_reference, parser_version, total_credits_cents, total_debits_cents, line_count, metadata, created_by, created_at, updated_at",
    )
    .single();

  if (importError) {
    console.error("Unexpected API error.", toSafeErrorRecord(importError));
    return NextResponse.json({ error: "Failed to create statement import." }, { status: 500 });
  }

  const { error: linesError } = await admin.from("bank_statement_lines").insert(
    lines.map((line) => ({
      import_id: importRow.id,
      line_date: line.lineDate,
      description: line.description,
      amount_cents: line.amountCents,
      direction: line.direction,
      external_line_id: line.externalLineId,
      running_balance_cents: line.runningBalanceCents,
      metadata: line.metadata,
    })),
  );

  if (linesError) {
    console.error("Unexpected API error.", toSafeErrorRecord(linesError));
    return NextResponse.json({ error: "Failed to insert parsed statement lines." }, { status: 500 });
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "finance_bank_statement_parse_import",
    metadata: {
      importId: importRow.id,
      sourceType: parsed.data.sourceType,
      lineCount: lines.length,
      totalCreditsCents: totals.credits,
      totalDebitsCents: totals.debits,
      periodStart: parsed.data.periodStart,
      periodEnd: parsed.data.periodEnd,
    },
  });

  return NextResponse.json({
    success: true,
    parsedOnly: false,
    import: importRow,
    lineCount: lines.length,
    totals: {
      creditsCents: totals.credits,
      debitsCents: totals.debits,
    },
    linesPreview: lines.slice(0, 50),
  });
}
