import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { logAdminAction } from "@/lib/admin/audit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { getPlaidConfig, plaidPost } from "@/lib/finance/plaid";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const exchangeSchema = z.object({
  publicToken: z.string().min(8).max(800),
  institutionName: z.string().min(2).max(240).optional().nullable(),
  institutionId: z.string().max(120).optional().nullable(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

type PlaidExchangePayload = {
  access_token?: string;
  item_id?: string;
  request_id?: string;
  error_message?: string;
};

type PlaidAccountsPayload = {
  accounts?: Array<{
    account_id: string;
    name: string;
    official_name?: string | null;
    mask?: string | null;
    subtype?: string | null;
    type?: string | null;
    balances?: {
      iso_currency_code?: string | null;
      current?: number | null;
    } | null;
  }>;
  item?: {
    institution_id?: string | null;
  } | null;
  request_id?: string;
  error_message?: string;
};

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const body = await request.json().catch(() => null);
  const parsed = exchangeSchema.safeParse(body);
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

  const exchangeResult = await plaidPost<PlaidExchangePayload>(
    "/item/public_token/exchange",
    { public_token: parsed.data.publicToken },
    plaidConfig,
  );
  const exchangeError = !exchangeResult.ok ? exchangeResult.errorMessage : null;
  if (!exchangeResult.ok || !exchangeResult.payload.access_token || !exchangeResult.payload.item_id) {
    return NextResponse.json(
      {
        error:
          exchangeError ??
          (typeof exchangeResult.payload.error_message === "string"
            ? exchangeResult.payload.error_message
            : "Failed to exchange Plaid public token."),
      },
      { status: 502 },
    );
  }

  const accessToken = exchangeResult.payload.access_token;
  const plaidItemId = exchangeResult.payload.item_id;

  const accountsResult = await plaidPost<PlaidAccountsPayload>(
    "/accounts/get",
    { access_token: accessToken },
    plaidConfig,
  );
  const accountsError = !accountsResult.ok ? accountsResult.errorMessage : null;
  if (!accountsResult.ok || !Array.isArray(accountsResult.payload.accounts)) {
    return NextResponse.json(
      {
        error:
          accountsError ??
          (typeof accountsResult.payload.error_message === "string"
            ? accountsResult.payload.error_message
            : "Failed to fetch Plaid accounts."),
      },
      { status: 502 },
    );
  }

  const institutionName = parsed.data.institutionName?.trim() || "Plaid Connected Institution";
  const institutionId =
    parsed.data.institutionId?.trim() || accountsResult.payload.item?.institution_id || null;

  const admin = createSupabaseAdminClient();
  const createdConnections: Array<{
    id: string;
    provider: string;
    institution_name: string;
    account_name: string | null;
    account_mask: string | null;
    status: string;
    plaid_item_id: string | null;
    created_at: string;
  }> = [];

  try {
    for (const account of accountsResult.payload.accounts) {
      const accountMask = account.mask?.slice(-4) ?? null;
      const accountName = account.official_name?.trim() || account.name?.trim() || null;
      const accountCurrency =
        account.balances?.iso_currency_code?.trim().toUpperCase() || "USD";

      const { data, error } = await admin
        .from("bank_connections")
        .insert({
          provider: "plaid",
          institution_name: institutionName,
          institution_id: institutionId,
          account_name: accountName,
          account_mask: accountMask,
          currency: accountCurrency,
          status: "connected",
          plaid_item_id: plaidItemId,
          access_token_encrypted: accessToken,
          metadata: {
            plaid_account_id: account.account_id,
            plaid_account_name: account.name,
            plaid_account_official_name: account.official_name ?? null,
            plaid_account_type: account.type ?? null,
            plaid_account_subtype: account.subtype ?? null,
            plaid_current_balance: account.balances?.current ?? null,
            plaid_environment: plaidConfig.environment,
            ...parsed.data.metadata,
          },
          created_by: auth.userId,
        })
        .select("id, provider, institution_name, account_name, account_mask, status, plaid_item_id, created_at")
        .single();

      if (error) {
        throw new Error(error.message);
      }

      createdConnections.push(data);
    }
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to store Plaid bank connections." },
      { status: 500 },
    );
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "finance_plaid_public_token_exchange",
    metadata: {
      plaidItemId,
      environment: plaidConfig.environment,
      requestId: exchangeResult.payload.request_id ?? accountsResult.payload.request_id ?? null,
      connectionCount: createdConnections.length,
    },
  });

  return NextResponse.json({
    success: true,
    plaidItemId,
    connections: createdConnections,
  });
}
