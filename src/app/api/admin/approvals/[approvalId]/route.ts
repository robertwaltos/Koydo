import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/admin/audit";

const requestSchema = z.object({
  status: z.enum(["approved", "rejected"]),
  note: z.string().max(500).optional(),
});

export async function POST(
  request: Request,
  { params }: { params: Promise<{ approvalId: string }> }
) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const { approvalId } = await params;
  const body = await request.json().catch(() => null);
  const parsed = requestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  const admin = createSupabaseAdminClient();
  const { data: approval, error: fetchError } = await admin
    .from("admin_approval_requests")
    .select("requested_by, status")
    .eq("id", approvalId)
    .maybeSingle();

  if (fetchError || !approval) {
    return NextResponse.json({ error: "Approval request not found." }, { status: 404 });
  }
  if (approval.status !== "pending") {
    return NextResponse.json({ error: `Request already ${approval.status}.` }, { status: 400 });
  }
  if (approval.requested_by === auth.userId) {
    return NextResponse.json({ error: "Requester cannot self-approve." }, { status: 400 });
  }

  const updatePayload =
    parsed.data.status === "approved"
      ? {
          status: "approved",
          approved_by: auth.userId,
          approved_at: new Date().toISOString(),
        }
      : {
          status: "rejected",
          rejected_by: auth.userId,
          rejected_at: new Date().toISOString(),
        };

  const { error } = await admin
    .from("admin_approval_requests")
    .update(updatePayload)
    .eq("id", approvalId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "approval_request_update",
    metadata: {
      approvalRequestId: approvalId,
      status: parsed.data.status,
      note: parsed.data.note ?? null,
    },
  });

  return NextResponse.json({ success: true });
}
