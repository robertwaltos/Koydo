import { serverEnv } from "@/lib/config/env";

type SendOrganizationInviteEmailInput = {
  toEmail: string;
  organizationName: string;
  inviteUrl: string;
  role: string;
  invitedByName?: string | null;
};

export async function sendOrganizationInviteEmail(input: SendOrganizationInviteEmailInput) {
  if (!serverEnv.RESEND_API_KEY || !serverEnv.PARENT_CONSENT_FROM_EMAIL) {
    return {
      delivered: false,
      mode: "simulation" as const,
      reason: "Missing RESEND_API_KEY or sender email configuration.",
    };
  }

  const inviterLabel = input.invitedByName?.trim() || "A Koydo administrator";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${serverEnv.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: serverEnv.PARENT_CONSENT_FROM_EMAIL,
      to: [input.toEmail],
      subject: `Invitation to join ${input.organizationName} on Koydo`,
      html: `
        <p>Hello,</p>
        <p>${inviterLabel} invited you to join <strong>${input.organizationName}</strong> on Koydo.</p>
        <p>Role: <strong>${input.role}</strong></p>
        <p>Accept invite: <a href="${input.inviteUrl}">${input.inviteUrl}</a></p>
        <p>If you did not expect this invite, you can ignore this email.</p>
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

