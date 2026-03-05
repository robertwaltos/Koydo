import { NextResponse } from "next/server";
import { z } from "zod";
import { requireSupportOrAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/admin/audit";
import { sendTicketResolvedEmail } from "@/lib/email/ticket-resolved-email";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const requestSchema = z.object({
  status: z.enum(["in_progress", "resolved", "closed"]).default("resolved"),
  resolutionNotes: z.string().max(4000).optional(),
});

export async function POST(
  request: Request,
  { params }: { params: Promise<{ ticketId: string }> }
) {
  const auth = await requireSupportOrAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const payload = requestSchema.safeParse(await request.json().catch(() => null));
  if (!payload.success) {
    return NextResponse.json({ error: "Invalid payload", details: payload.error.flatten() }, { status: 400 });
  }

  const { ticketId } = await params;

  const admin = createSupabaseAdminClient();

  // Fetch ticket + user email before updating
  const { data: ticket } = await admin
    .from("support_tickets")
    .select("subject, user_id")
    .eq("id", ticketId)
    .maybeSingle();

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
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "support_ticket_update",
    metadata: { ticketId, status: payload.data.status },
  });

  // Fire-and-forget email notification on resolution
  if (
    (payload.data.status === "resolved" || payload.data.status === "closed") &&
    ticket?.user_id
  ) {
    const { data: userData } = await admin.auth.admin.getUserById(ticket.user_id);
    if (userData?.user?.email) {
      sendTicketResolvedEmail({
        toEmail: userData.user.email,
        ticketSubject: ticket.subject ?? "Support Ticket",
        ticketId,
        status: payload.data.status,
        resolutionNotes: payload.data.resolutionNotes,
      }).catch((err) => console.error("Ticket notification email failed:", err));
    }
  }

  return NextResponse.json({ success: true });
}

