import { serverEnv } from "@/lib/config/env";
import { createTermsPdfAttachment } from "@/lib/legal/terms-pdf";
import { type ResolvedTermsDocument } from "@/lib/legal/terms-of-service";

type SendSignupThankYouEmailInput = {
  toEmail: string;
  recipientName: string;
  termsDocument: ResolvedTermsDocument;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendSignupThankYouEmail(input: SendSignupThankYouEmailInput) {
  const fromEmail = serverEnv.SIGNUP_FROM_EMAIL ?? serverEnv.PARENT_CONSENT_FROM_EMAIL;

  if (!serverEnv.RESEND_API_KEY || !fromEmail) {
    return {
      delivered: false,
      mode: "simulation" as const,
      reason: "Missing RESEND_API_KEY or sender email configuration.",
      attachmentFilename: `Koydo-Terms-${input.termsDocument.version}-${input.termsDocument.stateCode}.pdf`,
    };
  }

  const pdfAttachment = createTermsPdfAttachment(input.termsDocument);
  const termsUrl = `${serverEnv.NEXT_PUBLIC_APP_URL}/legal/terms?state=${encodeURIComponent(
    input.termsDocument.stateCode,
  )}`;

  const safeName = escapeHtml(input.recipientName);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${serverEnv.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [input.toEmail],
      subject: "Welcome to Koydo - Your account is ready",
      html: `
        <div style="background:#f3f8f5;padding:30px 14px;font-family:Georgia,'Times New Roman',serif;color:#1f2937;">
          <div style="max-width:620px;margin:0 auto;background:#ffffff;border:1px solid #d1fae5;border-radius:18px;overflow:hidden;box-shadow:0 10px 28px rgba(16,24,40,0.08);">
            <div style="padding:26px 28px;background:linear-gradient(120deg,#064e3b,#0f766e);color:white;">
              <p style="margin:0;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;opacity:0.9;">Koydo</p>
              <h1 style="margin:8px 0 0 0;font-size:28px;line-height:1.2;">Thank you for signing up</h1>
            </div>
            <div style="padding:24px 28px;">
              <p style="font-size:16px;margin:0 0 12px 0;">Hi ${safeName},</p>
              <p style="font-size:15px;line-height:1.6;margin:0 0 12px 0;">Your Koydo account is active. We are excited to have you in the learning community.</p>
              <p style="font-size:15px;line-height:1.6;margin:0 0 12px 0;">Attached is the Terms of Service PDF version you accepted at signup (${input.termsDocument.version}, billing state ${input.termsDocument.stateCode}).</p>
              <p style="font-size:15px;line-height:1.6;margin:0 0 18px 0;">You can also view it online at any time: <a href="${termsUrl}" style="color:#0f766e;text-decoration:underline;">Open Terms of Service</a>.</p>
              <div style="margin-top:20px;border-top:1px solid #e5e7eb;padding-top:12px;font-size:13px;color:#4b5563;line-height:1.6;">
                <div><strong>Terms Version:</strong> ${input.termsDocument.version}</div>
                <div><strong>Effective Date:</strong> ${input.termsDocument.effectiveDate}</div>
                <div><strong>Document Hash:</strong> ${input.termsDocument.documentHash}</div>
              </div>
            </div>
          </div>
        </div>
      `,
      text: [
        `Hi ${input.recipientName},`,
        "",
        "Your Koydo account is active. Thank you for signing up.",
        `Attached is the Terms of Service PDF you accepted at signup (${input.termsDocument.version}, state ${input.termsDocument.stateCode}).`,
        `View online: ${termsUrl}`,
        "",
        `Terms version: ${input.termsDocument.version}`,
        `Effective date: ${input.termsDocument.effectiveDate}`,
        `Document hash: ${input.termsDocument.documentHash}`,
      ].join("\n"),
      attachments: [
        {
          filename: pdfAttachment.filename,
          content: pdfAttachment.contentBase64,
          contentType: pdfAttachment.contentType,
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    return {
      delivered: false,
      mode: "provider-error" as const,
      reason: `Resend API error (${response.status}): ${errorText}`,
      attachmentFilename: pdfAttachment.filename,
    };
  }

  return {
    delivered: true,
    mode: "email" as const,
    reason: null,
    attachmentFilename: pdfAttachment.filename,
  };
}
