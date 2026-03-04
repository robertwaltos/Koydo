import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/admin/audit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const createSchema = z.object({
  provider: z
    .enum(["plaid", "manual_api", "pdf_upload", "paper_scan", "csv_manual", "other"])
    .default("manual_api"),
  institutionName: z.string().min(2).max(240),
  institutionId: z.string().max(120).optional().nullable(),
  accountName: z.string().max(240).optional().nullable(),
  accountMask: z.string().max(20).optional().nullable(),
  currency: z.string().length(3).default("USD"),
  status: z.enum(["pending", "connected", "disconnected", "error"]).default("pending"),
  plaidItemId: z.string().max(200).optional().nullable(),
  accessTokenEncrypted: z.string().max(5000).optional().nullable(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("bank_connections")
    .select(
      "id, provider, institution_name, institution_id, account_name, account_mask, currency, status, plaid_item_id, metadata, created_by, created_at, updated_at",
    )
    .order("created_at", { ascending: false })
    .limit(500);

  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  return NextResponse.json({ connections: data ?? [] });
}

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const body = await request.json().catch(() => null);
  const parsed = createSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("bank_connections")
    .insert({
      provider: parsed.data.provider,
      institution_name: parsed.data.institutionName.trim(),
      institution_id: parsed.data.institutionId?.trim() || null,
      account_name: parsed.data.accountName?.trim() || null,
      account_mask: parsed.data.accountMask?.trim() || null,
      currency: parsed.data.currency.toUpperCase(),
      status: parsed.data.status,
      plaid_item_id: parsed.data.plaidItemId?.trim() || null,
      access_token_encrypted: parsed.data.accessTokenEncrypted?.trim() || null,
      metadata: parsed.data.metadata ?? {},
      created_by: auth.userId,
    })
    .select(
      "id, provider, institution_name, institution_id, account_name, account_mask, currency, status, plaid_item_id, metadata, created_by, created_at, updated_at",
    )
    .single();

  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "finance_bank_connection_create",
    metadata: {
      connectionId: data.id,
      provider: data.provider,
      institutionName: data.institution_name,
      status: data.status,
    },
  });

  return NextResponse.json({ success: true, connection: data });
}
