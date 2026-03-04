import { serverEnv } from "@/lib/config/env";

type SendParentSecurityEmailInput = {
  toEmail: string;
  code: string;
  expiresInMinutes: number;
  requesterEmail: string | null;
};

export async function sendParentSecurityChallengeEmail({
  toEmail,
  code,
  expiresInMinutes,
  requesterEmail,
}: SendParentSecurityEmailInput) {
  const fromEmail =
    serverEnv.ADMIN_ALERT_FROM_EMAIL
    ?? serverEnv.PARENT_CONSENT_FROM_EMAIL
    ?? serverEnv.SUPPORT_EMAIL;

  if (!serverEnv.RESEND_API_KEY || !fromEmail) {
    return {
      delivered: false,
      mode: "simulation" as const,
      reason: "Missing RESEND_API_KEY or sender email configuration.",
    };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${serverEnv.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: "Koydo Parent Account Change Verification Code",
      html: `
        <p>A sensitive account-change operation was requested in your Koydo parent account.</p>
        <p><strong>Verification code:</strong> ${code}</p>
        <p>This code expires in ${expiresInMinutes} minute(s).</p>
        <p>If you did not request this, do not share this code and contact support immediately.</p>
        <p style="margin-top:16px;color:#475569;font-size:12px;">Requester: ${requesterEmail ?? "unknown"}</p>
      `,
      text: [
        "A sensitive account-change operation was requested in your Koydo parent account.",
        `Verification code: ${code}`,
        `Code expiry: ${expiresInMinutes} minute(s).`,
        "If this was not you, do not share this code and contact support immediately.",
        `Requester: ${requesterEmail ?? "unknown"}`,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    return {
      delivered: false,
      mode: "provider-error" as const,
      reason: `Resend API error (${response.status}): ${errorText}`,
    };
  }

  return {
    delivered: true,
    mode: "email" as const,
    reason: null,
  };
}
