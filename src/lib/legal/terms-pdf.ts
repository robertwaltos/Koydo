import { createSimpleTextPdf } from "@/lib/pdf/simple-text-pdf";
import {
  buildTermsPlainText,
  type ResolvedTermsDocument,
} from "@/lib/legal/terms-of-service";

export function createTermsPdfAttachment(document: ResolvedTermsDocument) {
  const title = `Koydo Terms of Service ${document.version} (${document.stateCode})`;
  const text = buildTermsPlainText(document);
  const pdf = createSimpleTextPdf({ title, text });

  return {
    filename: `Koydo-Terms-${document.version}-${document.stateCode}.pdf`,
    contentType: "application/pdf",
    contentBase64: pdf.toString("base64"),
  };
}
