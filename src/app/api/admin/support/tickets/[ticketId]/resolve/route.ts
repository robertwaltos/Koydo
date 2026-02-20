import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/admin/audit";

const requestSchema = z.object({
  status: z.enum(["in_progress", "resolved", "closed"]).default("resolved"),
  resolutionNotes: z.string().max(4000).optional(),
});

export async function POST(
  request: Request,
  { params }: { params: Promise<{ ticketId: string }> }
) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const payload = requestSchema.safeParse(await request.json().catch(() => null));
  if (!payload.success) {
    return NextResponse.json({ error: "Invalid payload", details: payload.error.flatten() }, { status: 400 });
  }

  const { ticketId } = await params;

  const admin = createSupabaseAdminClient();
  const { error } = await admin
    .from("support_tickets")
    .update({
      status: payload.data.status,
      resolution_notes: payload.data.resolutionNotes ?? null,
      assigned_to: auth.userId,
      resolved_at:
        payload.data.status === "resolved" || payload.data.status === "closed"
          ? new Date().toISOString()
          : null,
    })
    .eq("id", ticketId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "support_ticket_update",
    metadata: { ticketId, status: payload.data.status },
  });

  return NextResponse.json({ success: true });
}
