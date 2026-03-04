import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { logAdminAction } from "@/lib/admin/audit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { getPlaidConfig, plaidPost } from "@/lib/finance/plaid";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const syncSchema = z.object({
  bankConnectionId: z.string().uuid(),
  periodStart: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  periodEnd: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  statementDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional().nullable(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

type PlaidTransaction = {
  transaction_id: string;
  account_id: string;
  date: string;
  authorized_date?: string | null;
  name: string;
  merchant_name?: string | null;
  amount: number;
  pending?: boolean;
  category?: string[] | null;
  personal_finance_category?: {
    primary?: string | null;
    detailed?: string | null;
  } | null;
};

type PlaidTransactionsPayload = {
  transactions?: PlaidTransaction[];
  total_transactions?: number;
  request_id?: string;
  error_message?: string;
};

function toCents(input: number) {
  if (!Number.isFinite(input)) return 0;
  return Math.round(Math.abs(input) * 100);
}

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const body = await request.json().catch(() => null);
  const parsed = syncSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const plaidConfig = getPlaidConfig();
  if (!plaidConfig) {
    return NextResponse.json(
      {
        error:
          "Plaid is not configured. Set PLAID_CLIENT_ID and PLAID_SECRET, or use manual/PDF/scan import routes.",
      },
      { status: 503 },
    );
  }

  const admin = createSupabaseAdminClient();
  const { data: connection, error: connectionError } = await admin
    .from("bank_connections")
    .select(
      "id, provider, institution_name, institution_id, account_name, account_mask, currency, plaid_item_id, access_token_encrypted, metadata",
    )
    .eq("id", parsed.data.bankConnectionId)
    .maybeSingle();

  if (connectionError) {
    console.error("Unexpected API error.", toSafeErrorRecord(connectionError));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
  if (!connection) {
    return NextResponse.json({ error: "Bank connection not found." }, { status: 404 });
  }
  if (connection.provider !== "plaid") {
    return NextResponse.json(
      { error: "Selected bank connection is not Plaid-backed." },
      { status: 400 },
    );
  }
  if (!connection.access_token_encrypted) {
    return NextResponse.json(
      { error: "No Plaid access token stored for this connection." },
      { status: 400 },
    );
  }

  const plaidAccountId =
    connection.metadata &&
    typeof connection.metadata === "object" &&
    "plaid_account_id" in connection.metadata &&
    typeof connection.metadata.plaid_account_id === "string"
      ? connection.metadata.plaid_account_id
      : null;

  const allTransactions: PlaidTransaction[] = [];
  let offset = 0;
  const count = 500;
  let total = Number.MAX_SAFE_INTEGER;
  let lastRequestId: string | null = null;

  while (allTransactions.length < total) {
    const batch = await plaidPost<PlaidTransactionsPayload>(
      "/transactions/get",
      {
        access_token: connection.access_token_encrypted,
        start_date: parsed.data.periodStart,
        end_date: parsed.data.periodEnd,
        options: { count, offset },
      },
      plaidConfig,
    );
    const batchError = !batch.ok ? batch.errorMessage : null;

    if (!batch.ok || !Array.isArray(batch.payload.transactions)) {
      return NextResponse.json(
        {
          error:
            batchError ??
            (typeof batch.payload.error_message === "string"
              ? batch.payload.error_message
              : "Failed to pull Plaid transactions."),
        },
        { status: 502 },
      );
    }

    const transactions = batch.payload.transactions;
    const normalizedTotal =
      typeof batch.payload.total_transactions === "number" &&
      Number.isFinite(batch.payload.total_transactions)
        ? Math.max(0, Math.trunc(batch.payload.total_transactions))
        : transactions.length;

    total = normalizedTotal;
    offset += transactions.length;
    lastRequestId =
      typeof batch.payload.request_id === "string" ? batch.payload.request_id : lastRequestId;

    allTransactions.push(...transactions);
    if (transactions.length === 0) {
      break;
    }
  }

  const scopedTransactions = plaidAccountId
    ? allTransactions.filter((entry) => entry.account_id === plaidAccountId)
    : allTransactions;

  const lines = scopedTransactions.map((transaction) => {
    const amount = Number(transaction.amount ?? 0);
    const direction = amount >= 0 ? "debit" : "credit";
    const amountCents = toCents(amount);
    const lineDate = transaction.authorized_date ?? transaction.date;
    const description = transaction.merchant_name?.trim() || transaction.name?.trim() || "Plaid transaction";

    return {
      line_date: lineDate,
      description,
      amount_cents: amountCents,
      direction,
      external_line_id: transaction.transaction_id,
      running_balance_cents: null,
      matched: false,
      metadata: {
        plaid_transaction_id: transaction.transaction_id,
        plaid_account_id: transaction.account_id,
        plaid_pending: Boolean(transaction.pending),
        plaid_category: transaction.category ?? [],
        plaid_personal_finance_category: transaction.personal_finance_category ?? null,
      },
    };
  });

  const totals = lines.reduce(
    (acc, line) => {
      if (line.direction === "credit") acc.credits += line.amount_cents;
      else acc.debits += line.amount_cents;
      return acc;
    },
    { credits: 0, debits: 0 },
  );

  const { data: importRow, error: importError } = await admin
    .from("bank_statement_imports")
    .insert({
      bank_connection_id: connection.id,
      source_type: "plaid_api",
      period_start: parsed.data.periodStart,
      period_end: parsed.data.periodEnd,
      statement_date: parsed.data.statementDate ?? parsed.data.periodEnd,
      import_status: "parsed",
      file_reference: `plaid:item:${connection.plaid_item_id ?? "unknown"}`,
      parser_version: "plaid-transactions-get-v1",
      total_credits_cents: totals.credits,
      total_debits_cents: totals.debits,
      line_count: lines.length,
      metadata: {
        plaid_item_id: connection.plaid_item_id ?? null,
        plaid_request_id: lastRequestId,
        plaid_account_id: plaidAccountId,
        plaid_environment: plaidConfig.environment,
        ...parsed.data.metadata,
      },
      created_by: auth.userId,
    })
    .select(
      "id, bank_connection_id, source_type, period_start, period_end, statement_date, import_status, line_count, total_credits_cents, total_debits_cents, created_at",
    )
    .single();

  if (importError) {
    console.error("Unexpected API error.", toSafeErrorRecord(importError));
    return NextResponse.json({ error: "Failed to create statement import." }, { status: 500 });
  }

  if (lines.length > 0) {
    const { error: linesError } = await admin.from("bank_statement_lines").insert(
      lines.map((line) => ({
        import_id: importRow.id,
        ...line,
      })),
    );
    if (linesError) {
      console.error("Unexpected API error.", toSafeErrorRecord(linesError));
      return NextResponse.json({ error: "Failed to persist Plaid transactions." }, { status: 500 });
    }
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "finance_plaid_transactions_sync",
    metadata: {
      bankConnectionId: connection.id,
      importId: importRow.id,
      periodStart: parsed.data.periodStart,
      periodEnd: parsed.data.periodEnd,
      lineCount: importRow.line_count,
      requestId: lastRequestId,
    },
  });

  return NextResponse.json({
    success: true,
    import: importRow,
    totals: {
      pulledTransactions: scopedTransactions.length,
      creditsCents: totals.credits,
      debitsCents: totals.debits,
    },
  });
}
