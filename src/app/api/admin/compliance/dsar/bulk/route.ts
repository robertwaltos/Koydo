import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/admin/audit";

const requestSchema = z.object({
  requestIds: z.array(z.string().uuid()).min(1).max(200),
  status: z.enum(["pending", "in_progress", "completed", "rejected"]),
  confirmText: z.literal("UPDATE_DSAR_BULK"),
});

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

  const resolvedAt =
    parsed.data.status === "completed" || parsed.data.status === "rejected"
      ? new Date().toISOString()
      : null;

  const admin = createSupabaseAdminClient();
  const { error } = await admin
    .from("dsar_requests")
    .update({
      status: parsed.data.status,
      resolved_at: resolvedAt,
    })
    .in("id", parsed.data.requestIds);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "dsar_bulk_status_update",
    metadata: {
      status: parsed.data.status,
      requestCount: parsed.data.requestIds.length,
    },
  });

  return NextResponse.json({
    success: true,
    updatedCount: parsed.data.requestIds.length,
  });
}
