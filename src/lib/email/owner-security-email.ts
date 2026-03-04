import { serverEnv } from "@/lib/config/env";

type SendOwnerChallengeEmailInput = {
  toEmail: string;
  code: string;
  expiresInMinutes: number;
  ownerEmail: string | null;
};

export async function sendOwnerSecurityChallengeEmail({
  toEmail,
  code,
  expiresInMinutes,
  ownerEmail,
}: SendOwnerChallengeEmailInput) {
  const fromEmail = serverEnv.ADMIN_ALERT_FROM_EMAIL ?? serverEnv.PARENT_CONSENT_FROM_EMAIL;

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
      subject: "Koydo Owner Security Verification Code",
      html: `
        <p>A sign-in step-up challenge was requested for the Koydo owner console.</p>
        <p><strong>Verification code:</strong> ${code}</p>
        <p>This code expires in ${expiresInMinutes} minute(s).</p>
        <p>If you did not initiate this action, rotate owner credentials and review security logs immediately.</p>
        <p style="margin-top:16px;color:#475569;font-size:12px;">Requester: ${ownerEmail ?? "unknown owner"}</p>
      `,
      text: [
        "A sign-in step-up challenge was requested for the Koydo owner console.",
        `Verification code: ${code}`,
        `Code expiry: ${expiresInMinutes} minute(s).`,
        "If this was not you, rotate owner credentials and review security logs immediately.",
        `Requester: ${ownerEmail ?? "unknown owner"}`,
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
