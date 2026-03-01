export const ORGANIZATION_PAYMENT_METHODS = [
  "card",
  "ach",
  "wire",
  "po",
] as const;

export type OrganizationPaymentMethod = (typeof ORGANIZATION_PAYMENT_METHODS)[number];

export function buildOrganizationInvoiceReference(organizationId: string) {
  const orgPrefix = organizationId.replace(/-/g, "").slice(0, 8).toUpperCase();
  const timeSuffix = Date.now().toString(36).toUpperCase();
  return `KOYDO-ORG-${orgPrefix}-${timeSuffix}`;
}

export function getOrganizationInvoicingInstructions(params: {
  paymentMethod: OrganizationPaymentMethod;
  invoiceReference: string;
  purchaseOrderNumber?: string | null;
  amountCents: number;
  currency?: string;
  dueAtIso?: string | null;
}) {
  const currency = (params.currency ?? "USD").toUpperCase();
  const amount = (Math.max(0, params.amountCents) / 100).toFixed(2);
  const dueDate = params.dueAtIso ? params.dueAtIso : "to be confirmed";

  if (params.paymentMethod === "wire") {
    return [
      `Invoice reference: ${params.invoiceReference}`,
      `Amount due: ${currency} ${amount}`,
      `Payment due date: ${dueDate}`,
      "Wire instructions are issued by Koydo finance after request submission.",
      "Include the invoice reference in the wire memo.",
    ];
  }

  if (params.paymentMethod === "po") {
    return [
      `Invoice reference: ${params.invoiceReference}`,
      `Amount due: ${currency} ${amount}`,
      `Payment due date: ${dueDate}`,
      `Purchase order number: ${params.purchaseOrderNumber ?? "not provided"}`,
      "Submit district/school PO to Koydo finance referencing this invoice.",
    ];
  }

  return [
    `Invoice reference: ${params.invoiceReference}`,
    `Amount due: ${currency} ${amount}`,
    `Payment due date: ${dueDate}`,
  ];
}
