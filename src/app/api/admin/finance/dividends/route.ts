import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/admin/audit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const createSchema = z.object({
  declarationName: z.string().min(2).max(240),
  investorClassId: z.string().uuid().optional().nullable(),
  recordDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  paymentDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  amountPerShareCents: z.number().int().min(0),
  withholdingRate: z.number().min(0).max(1).default(0),
  currency: z.string().length(3).default("USD"),
  status: z.enum(["draft", "declared", "approved"]).default("declared"),
  notes: z.string().max(5000).optional().nullable(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

function parseInteger(value: string | null, fallback: number) {
  if (!value) return fallback;
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.trunc(parsed);
}

export async function GET(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const { searchParams } = new URL(request.url);
  const limit = Math.max(1, Math.min(5000, parseInteger(searchParams.get("limit"), 250)));
  const admin = createSupabaseAdminClient();

  const [declarationsResult, paymentsResult] = await Promise.all([
    admin
      .from("dividend_declarations")
      .select(
        "id, investor_class_id, declaration_name, declared_at, record_date, payment_date, amount_per_share_cents, total_amount_cents, currency, status, notes, metadata, created_by, created_at, updated_at",
      )
      .order("declared_at", { ascending: false })
      .limit(limit),
    admin
      .from("dividend_payments")
      .select(
        "id, declaration_id, investor_id, holding_id, investor_bank_account_id, shares_eligible, gross_amount_cents, withholding_tax_cents, net_amount_cents, payment_status, payment_reference, paid_at, metadata, created_at, updated_at",
      )
      .order("created_at", { ascending: false })
      .limit(limit),
  ]);

  const error = declarationsResult.error ?? paymentsResult.error;
  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  const declarations = declarationsResult.data ?? [];
  const payments = paymentsResult.data ?? [];
  return NextResponse.json({
    declarations,
    payments,
    summary: {
      declarationCount: declarations.length,
      queuedPaymentCount: payments.filter((payment) => payment.payment_status === "queued").length,
      paidPaymentCount: payments.filter((payment) => payment.payment_status === "paid").length,
      grossAmountCents: payments.reduce((acc, payment) => acc + Number(payment.gross_amount_cents ?? 0), 0),
      netAmountCents: payments.reduce((acc, payment) => acc + Number(payment.net_amount_cents ?? 0), 0),
    },
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

  const admin = createSupabaseAdminClient();
  let holdingsQuery = admin
    .from("investor_holdings")
    .select("id, investor_id, investor_class_id, shares_owned, status")
    .eq("status", "active");

  if (parsed.data.investorClassId) {
    holdingsQuery = holdingsQuery.eq("investor_class_id", parsed.data.investorClassId);
  }

  const { data: holdings, error: holdingsError } = await holdingsQuery;
  if (holdingsError) {
    console.error("Unexpected API error.", toSafeErrorRecord(holdingsError));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
  if (!holdings || holdings.length === 0) {
    return NextResponse.json(
      { error: "No active holdings matched this declaration." },
      { status: 400 },
    );
  }

  const investorIds = Array.from(new Set(holdings.map((holding) => holding.investor_id)));
  const { data: bankAccounts, error: bankAccountsError } = await admin
    .from("investor_bank_accounts")
    .select("id, investor_id, verification_status, is_primary, created_at")
    .in("investor_id", investorIds)
    .order("created_at", { ascending: false });

  if (bankAccountsError) {
    console.error("Unexpected API error.", toSafeErrorRecord(bankAccountsError));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  const bankAccountByInvestorId = new Map<
    string,
    {
      id: string;
    }
  >();
  for (const investorId of investorIds) {
    const accounts = (bankAccounts ?? []).filter((entry) => entry.investor_id === investorId);
    const preferred =
      accounts.find(
        (entry) => entry.is_primary && entry.verification_status === "verified",
      ) ??
      accounts.find((entry) => entry.is_primary) ??
      accounts[0];
    if (preferred) {
      bankAccountByInvestorId.set(investorId, { id: preferred.id });
    }
  }

  const paymentRows = holdings.map((holding) => {
    const sharesEligible = Number(holding.shares_owned ?? 0);
    const gross = Math.max(0, Math.round(sharesEligible * parsed.data.amountPerShareCents));
    const withholding = Math.max(0, Math.round(gross * parsed.data.withholdingRate));
    const net = Math.max(0, gross - withholding);
    return {
      investor_id: holding.investor_id,
      holding_id: holding.id,
      investor_bank_account_id: bankAccountByInvestorId.get(holding.investor_id)?.id ?? null,
      shares_eligible: sharesEligible,
      gross_amount_cents: gross,
      withholding_tax_cents: withholding,
      net_amount_cents: net,
      payment_status: parsed.data.status === "draft" ? "queued" : "queued",
      metadata: {
        withholdingRate: parsed.data.withholdingRate,
      },
    };
  });

  const totalAmountCents = paymentRows.reduce((acc, row) => acc + row.gross_amount_cents, 0);
  const { data: declaration, error: declarationError } = await admin
    .from("dividend_declarations")
    .insert({
      investor_class_id: parsed.data.investorClassId ?? null,
      declaration_name: parsed.data.declarationName.trim(),
      record_date: parsed.data.recordDate,
      payment_date: parsed.data.paymentDate,
      amount_per_share_cents: parsed.data.amountPerShareCents,
      total_amount_cents: totalAmountCents,
      currency: parsed.data.currency.toUpperCase(),
      status: parsed.data.status,
      notes: parsed.data.notes?.trim() || null,
      metadata: parsed.data.metadata ?? {},
      created_by: auth.userId,
    })
    .select(
      "id, investor_class_id, declaration_name, declared_at, record_date, payment_date, amount_per_share_cents, total_amount_cents, currency, status, notes, metadata, created_by, created_at, updated_at",
    )
    .single();

  if (declarationError) {
    console.error("Unexpected API error.", toSafeErrorRecord(declarationError));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  const { data: payments, error: paymentsError } = await admin
    .from("dividend_payments")
    .insert(
      paymentRows.map((paymentRow) => ({
        declaration_id: declaration.id,
        ...paymentRow,
      })),
    )
    .select(
      "id, declaration_id, investor_id, holding_id, investor_bank_account_id, shares_eligible, gross_amount_cents, withholding_tax_cents, net_amount_cents, payment_status, payment_reference, paid_at, metadata, created_at, updated_at",
    );

  if (paymentsError) {
    console.error("Unexpected API error.", toSafeErrorRecord(paymentsError));
    return NextResponse.json({ error: "Failed to create dividend payment rows." }, { status: 500 });
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "finance_dividend_declaration_create",
    metadata: {
      declarationId: declaration.id,
      declarationName: declaration.declaration_name,
      paymentCount: (payments ?? []).length,
      totalAmountCents,
      amountPerShareCents: declaration.amount_per_share_cents,
      withholdingRate: parsed.data.withholdingRate,
    },
  });

  return NextResponse.json({
    success: true,
    declaration,
    payments: payments ?? [],
    paymentCount: (payments ?? []).length,
    totalAmountCents,
    totalNetAmountCents: (payments ?? []).reduce(
      (acc, payment) => acc + Number(payment.net_amount_cents ?? 0),
      0,
    ),
  });
}
