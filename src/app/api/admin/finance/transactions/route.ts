import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/admin/audit";
import { FINANCE_ENTRY_KINDS, REVENUE_CHANNELS } from "@/lib/finance/types";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const createSchema = z.object({
  occurredOn: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  description: z.string().min(2).max(500),
  amountCents: z.number().int().positive().max(10_000_000_00),
  debitAccountCode: z.string().min(3).max(20),
  creditAccountCode: z.string().min(3).max(20),
  entryKind: z.enum(FINANCE_ENTRY_KINDS).default("manual"),
  revenueChannel: z.enum(REVENUE_CHANNELS).optional().nullable(),
  counterpartyName: z.string().max(200).optional().nullable(),
  employeeName: z.string().max(200).optional().nullable(),
  sourceDocument: z.string().max(200).optional().nullable(),
  sourceSystem: z
    .enum(["manual", "stripe", "revenuecat", "payroll", "tax", "bank", "other"])
    .default("manual"),
  sourceRef: z.string().max(200).optional().nullable(),
  taxDeductible: z.boolean().default(false),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

function parseInteger(value: string | null, fallback: number) {
  if (!value) return fallback;
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.trunc(parsed);
}

function toSinceDate(days: number) {
  const safeDays = Math.max(1, Math.min(3650, days));
  return new Date(Date.now() - safeDays * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

export async function GET(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const { searchParams } = new URL(request.url);
  const days = parseInteger(searchParams.get("days"), 365);
  const limit = Math.max(1, Math.min(5000, parseInteger(searchParams.get("limit"), 250)));
  const sinceDate = toSinceDate(days);

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("business_gl_transactions")
    .select(
      "id, occurred_on, description, amount_cents, debit_account_code, credit_account_code, entry_kind, revenue_channel, counterparty_name, employee_name, source_document, source_system, source_ref, tax_deductible, metadata, created_by, created_at, updated_at",
    )
    .gte("occurred_on", sinceDate)
    .order("occurred_on", { ascending: false })
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  return NextResponse.json({
    sinceDate,
    transactions: data ?? [],
  });
}

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const body = await request.json().catch(() => null);
  const parsed = createSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  if (parsed.data.debitAccountCode === parsed.data.creditAccountCode) {
    return NextResponse.json(
      { error: "Debit and credit accounts must differ." },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();
  const { data: accounts, error: accountsError } = await admin
    .from("business_chart_of_accounts")
    .select("code")
    .in("code", [parsed.data.debitAccountCode, parsed.data.creditAccountCode]);

  if (accountsError) {
    console.error("Unexpected API error.", toSafeErrorRecord(accountsError));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  const accountCodeSet = new Set((accounts ?? []).map((row) => row.code));
  if (
    !accountCodeSet.has(parsed.data.debitAccountCode) ||
    !accountCodeSet.has(parsed.data.creditAccountCode)
  ) {
    return NextResponse.json({ error: "Unknown account code." }, { status: 400 });
  }

  const { data, error } = await admin
    .from("business_gl_transactions")
    .insert({
      occurred_on: parsed.data.occurredOn,
      description: parsed.data.description.trim(),
      amount_cents: parsed.data.amountCents,
      debit_account_code: parsed.data.debitAccountCode,
      credit_account_code: parsed.data.creditAccountCode,
      entry_kind: parsed.data.entryKind,
      revenue_channel: parsed.data.revenueChannel ?? null,
      counterparty_name: parsed.data.counterpartyName?.trim() || null,
      employee_name: parsed.data.employeeName?.trim() || null,
      source_document: parsed.data.sourceDocument?.trim() || null,
      source_system: parsed.data.sourceSystem,
      source_ref: parsed.data.sourceRef?.trim() || null,
      tax_deductible: parsed.data.taxDeductible,
      metadata: parsed.data.metadata ?? {},
      created_by: auth.userId,
    })
    .select(
      "id, occurred_on, description, amount_cents, debit_account_code, credit_account_code, entry_kind, revenue_channel, counterparty_name, employee_name, source_document, source_system, source_ref, tax_deductible, metadata, created_by, created_at, updated_at",
    )
    .single();

  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "finance_gl_transaction_create",
    metadata: {
      transactionId: data.id,
      amountCents: data.amount_cents,
      debitAccountCode: data.debit_account_code,
      creditAccountCode: data.credit_account_code,
      entryKind: data.entry_kind,
      revenueChannel: data.revenue_channel,
    },
  });

  return NextResponse.json({ success: true, transaction: data });
}
