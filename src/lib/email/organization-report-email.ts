import { serverEnv } from "@/lib/config/env";

type SendOrganizationReportReadyEmailInput = {
  toEmail: string;
  organizationName: string;
  format: "csv" | "pdf";
  downloadUrl: string;
  reportWindowDays: number;
};

export async function sendOrganizationReportReadyEmail(
  input: SendOrganizationReportReadyEmailInput,
) {
  if (!serverEnv.RESEND_API_KEY || !serverEnv.PARENT_CONSENT_FROM_EMAIL) {
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
      from: serverEnv.PARENT_CONSENT_FROM_EMAIL,
      to: [input.toEmail],
      subject: `${input.organizationName} report is ready`,
      html: `
        <p>Hello,</p>
        <p>Your ${input.format.toUpperCase()} report for <strong>${input.organizationName}</strong> is ready.</p>
        <p>Window: last ${input.reportWindowDays} day(s).</p>
        <p>Download: <a href="${input.downloadUrl}">${input.downloadUrl}</a></p>
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

