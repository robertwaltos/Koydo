import { serverEnv } from "@/lib/config/env";

type SendParentConsentEmailInput = {
  toEmail: string;
  verificationUrl: string;
  childUserId: string;
};

export async function sendParentConsentVerificationEmail({
  toEmail,
  verificationUrl,
  childUserId,
}: SendParentConsentEmailInput) {
  if (!serverEnv.RESEND_API_KEY || !serverEnv.PARENT_CONSENT_FROM_EMAIL) {
    return {
      delivered: false,
      mode: "simulation" as const,
      reason: "Missing RESEND_API_KEY or PARENT_CONSENT_FROM_EMAIL",
    };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${serverEnv.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: serverEnv.PARENT_CONSENT_FROM_EMAIL,
      to: [toEmail],
      subject: "EduForge Parent Verification Required",
      html: `
        <p>Hello Parent/Guardian,</p>
        <p>Please verify consent for child account <strong>${childUserId}</strong> by opening this link:</p>
        <p><a href="${verificationUrl}">Verify parental consent</a></p>
        <p>If you did not request this, you can ignore this email.</p>
      `,
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
