import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/admin/audit";

const requestSchema = z.object({
  actionType: z.enum(["user_delete", "billing_refund", "billing_set_price"]),
  reason: z.string().min(5).max(500).optional(),
  payload: z.record(z.string(), z.unknown()).optional(),
});

export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("admin_approval_requests")
    .select(
      "id, action_type, status, requested_by, approved_by, rejected_by, executed_by, reason, created_at, approved_at, rejected_at, executed_at, expires_at"
    )
    .order("created_at", { ascending: false })
    .limit(300);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ approvals: data });
}

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const body = await request.json().catch(() => null);
  const parsed = requestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("admin_approval_requests")
    .insert({
      action_type: parsed.data.actionType,
      payload: parsed.data.payload ?? {},
      requested_by: auth.userId,
      reason: parsed.data.reason ?? null,
      status: "pending",
    })
    .select("id, action_type, status, created_at, expires_at")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "approval_request_create",
    metadata: {
      approvalRequestId: data.id,
      requestActionType: parsed.data.actionType,
    },
  });

  return NextResponse.json({ success: true, approval: data });
}
