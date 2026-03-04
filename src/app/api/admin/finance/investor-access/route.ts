import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/admin/audit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const createSchema = z.object({
  investorId: z.string().uuid(),
  userId: z.string().uuid(),
  role: z.enum(["owner", "finance_contact", "auditor", "viewer"]).default("owner"),
  status: z.enum(["active", "invited", "revoked"]).default("active"),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("investor_portal_access")
    .select("id, investor_id, user_id, role, status, metadata, created_at, updated_at")
    .order("created_at", { ascending: false })
    .limit(2000);

  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  return NextResponse.json({ access: data ?? [] });
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
    .from("investor_portal_access")
    .upsert(
      {
        investor_id: parsed.data.investorId,
        user_id: parsed.data.userId,
        role: parsed.data.role,
        status: parsed.data.status,
        created_by: auth.userId,
        metadata: parsed.data.metadata ?? {},
      },
      { onConflict: "investor_id,user_id" },
    )
    .select("id, investor_id, user_id, role, status, metadata, created_at, updated_at")
    .single();

  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "finance_investor_portal_access_upsert",
    metadata: {
      investorId: data.investor_id,
      userId: data.user_id,
      role: data.role,
      status: data.status,
    },
  });

  return NextResponse.json({ success: true, access: data });
}
