import { serverEnv } from "@/lib/config/env";

type SendTicketResolvedEmailInput = {
  toEmail: string;
  ticketSubject: string;
  ticketId: string;
  status: string;
  resolutionNotes?: string | null;
};

export async function sendTicketResolvedEmail({
  toEmail,
  ticketSubject,
  ticketId,
  status,
  resolutionNotes,
}: SendTicketResolvedEmailInput) {
  const fromEmail = serverEnv.ADMIN_ALERT_FROM_EMAIL;

  if (!serverEnv.RESEND_API_KEY || !fromEmail) {
    return { delivered: false, mode: "simulation" as const };
  }

  const notesSection = resolutionNotes
    ? `<p style="margin-top:12px;color:#374151"><strong>Resolution notes:</strong><br/>${resolutionNotes.replace(/\n/g, "<br/>")}</p>`
    : "";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${serverEnv.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: `Your support ticket has been ${status} — KOYDO`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:24px">
          <h2 style="color:#111827">Support Ticket Update</h2>
          <p style="color:#374151">Your ticket <strong>"${ticketSubject}"</strong> (ID: ${ticketId}) has been marked as <strong>${status}</strong>.</p>
          ${notesSection}
          <p style="margin-top:20px;color:#6b7280;font-size:13px">If you need further assistance, please reply to this email or open a new support request in your KOYDO account.</p>
        </div>
      `,
    }),
  });

  return { delivered: response.ok, mode: "live" as const };
}
