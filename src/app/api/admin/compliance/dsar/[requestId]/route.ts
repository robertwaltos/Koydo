import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/admin/audit";

const requestSchema = z.object({
  status: z.enum(["pending", "in_progress", "completed", "rejected"]),
});

export async function POST(
  request: Request,
  { params }: { params: Promise<{ requestId: string }> }
) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const { requestId } = await params;
  const body = await request.json().catch(() => null);
  const parsed = requestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  const admin = createSupabaseAdminClient();
  const resolvedAt =
    parsed.data.status === "completed" || parsed.data.status === "rejected"
      ? new Date().toISOString()
      : null;

  const { error } = await admin
    .from("dsar_requests")
    .update({
      status: parsed.data.status,
      resolved_at: resolvedAt,
    })
    .eq("id", requestId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "dsar_status_update",
    metadata: { requestId, status: parsed.data.status },
  });

  return NextResponse.json({ success: true });
}
