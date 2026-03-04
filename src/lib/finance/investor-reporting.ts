import type { SupabaseClient } from "@supabase/supabase-js";

type InvestorClassRow = {
  id: string;
  class_code: string;
  class_name: string;
  is_active: boolean;
};

type InvestorRow = {
  id: string;
  legal_name: string;
  investor_type: string;
  contact_email: string | null;
  contact_phone: string | null;
  contact_address: string | null;
  accreditation_status: string;
  kyc_status: string;
  aml_status: string;
  onboarding_status: string;
  created_at: string;
  updated_at: string;
};

type InvestorHoldingRow = {
  id: string;
  investor_id: string;
  investor_class_id: string;
  shares_owned: number;
  ownership_percent: number | null;
  status: string;
  acquisition_date: string | null;
  acquisition_price_cents: number | null;
  cost_basis_cents: number | null;
  created_at: string;
  updated_at: string;
};

type InvestorBankAccountRow = {
  id: string;
  investor_id: string;
  bank_name: string;
  account_holder_name: string;
  payout_method: string;
  currency: string;
  country_code: string;
  routing_number_last4: string | null;
  account_number_last4: string | null;
  iban_last4: string | null;
  swift_bic: string | null;
  verification_status: string;
  is_primary: boolean;
  created_at: string;
  updated_at: string;
};

type DividendDeclarationRow = {
  id: string;
  investor_class_id: string | null;
  declaration_name: string;
  declared_at: string;
  record_date: string;
  payment_date: string;
  amount_per_share_cents: number;
  total_amount_cents: number | null;
  currency: string;
  status: string;
  created_at: string;
  updated_at: string;
};

type DividendPaymentRow = {
  id: string;
  declaration_id: string;
  investor_id: string;
  holding_id: string | null;
  investor_bank_account_id: string | null;
  shares_eligible: number;
  gross_amount_cents: number;
  withholding_tax_cents: number;
  net_amount_cents: number;
  payment_status: string;
  payment_reference: string | null;
  paid_at: string | null;
  created_at: string;
  updated_at: string;
};

export type CapTableRow = {
  investor_id: string;
  investor_name: string;
  investor_type: string;
  investor_email: string | null;
  investor_phone: string | null;
  investor_class_code: string;
  investor_class_name: string;
  shares_owned: number;
  ownership_percent: number;
  ownership_percent_of_class: number;
  primary_bank_name: string | null;
  primary_bank_currency: string | null;
  primary_bank_status: string | null;
  kyc_status: string;
  aml_status: string;
  accreditation_status: string;
  onboarding_status: string;
  holding_status: string;
  holding_created_at: string;
};

export type DividendRegisterRow = {
  declaration_id: string;
  declaration_name: string;
  declaration_status: string;
  investor_name: string;
  investor_email: string | null;
  investor_class_code: string | null;
  investor_class_name: string | null;
  payment_status: string;
  shares_eligible: number;
  gross_amount_cents: number;
  withholding_tax_cents: number;
  net_amount_cents: number;
  payment_reference: string | null;
  paid_at: string | null;
  declaration_record_date: string;
  declaration_payment_date: string;
  created_at: string;
};

export type BankAuditFinding = {
  severity: "info" | "warning" | "critical";
  category:
    | "kyc"
    | "aml"
    | "bank_verification"
    | "dividend_reconciliation"
    | "ledger_integrity"
    | "payout_exception"
    | "policy_compliance"
    | "institutional_reporting";
  finding_title: string;
  finding_detail: string;
  related_entity_type: string;
  related_entity_id: string;
  status: "open" | "resolved" | "waived";
};

export type InvestorDataset = {
  investorClasses: InvestorClassRow[];
  investors: InvestorRow[];
  holdings: InvestorHoldingRow[];
  bankAccounts: InvestorBankAccountRow[];
  declarations: DividendDeclarationRow[];
  dividendPayments: DividendPaymentRow[];
};

function toNumber(value: unknown) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

export async function loadInvestorDataset(
  admin: SupabaseClient,
  input: { limit?: number } = {},
): Promise<InvestorDataset> {
  const limit = Math.max(1, Math.min(200000, input.limit ?? 10000));
  const [
    classesResult,
    investorsResult,
    holdingsResult,
    bankAccountsResult,
    declarationsResult,
    paymentsResult,
  ] = await Promise.all([
    admin
      .from("investor_classes")
      .select("id, class_code, class_name, is_active")
      .order("class_code", { ascending: true }),
    admin
      .from("investors")
      .select(
        "id, legal_name, investor_type, contact_email, contact_phone, contact_address, accreditation_status, kyc_status, aml_status, onboarding_status, created_at, updated_at",
      )
      .order("legal_name", { ascending: true })
      .limit(limit),
    admin
      .from("investor_holdings")
      .select(
        "id, investor_id, investor_class_id, shares_owned, ownership_percent, status, acquisition_date, acquisition_price_cents, cost_basis_cents, created_at, updated_at",
      )
      .order("created_at", { ascending: false })
      .limit(limit),
    admin
      .from("investor_bank_accounts")
      .select(
        "id, investor_id, bank_name, account_holder_name, payout_method, currency, country_code, routing_number_last4, account_number_last4, iban_last4, swift_bic, verification_status, is_primary, created_at, updated_at",
      )
      .order("created_at", { ascending: false })
      .limit(limit),
    admin
      .from("dividend_declarations")
      .select(
        "id, investor_class_id, declaration_name, declared_at, record_date, payment_date, amount_per_share_cents, total_amount_cents, currency, status, created_at, updated_at",
      )
      .order("declared_at", { ascending: false })
      .limit(limit),
    admin
      .from("dividend_payments")
      .select(
        "id, declaration_id, investor_id, holding_id, investor_bank_account_id, shares_eligible, gross_amount_cents, withholding_tax_cents, net_amount_cents, payment_status, payment_reference, paid_at, created_at, updated_at",
      )
      .order("created_at", { ascending: false })
      .limit(limit),
  ]);

  const error =
    classesResult.error ??
    investorsResult.error ??
    holdingsResult.error ??
    bankAccountsResult.error ??
    declarationsResult.error ??
    paymentsResult.error;

  if (error) {
    throw new Error(error.message);
  }

  return {
    investorClasses: (classesResult.data ?? []) as InvestorClassRow[],
    investors: (investorsResult.data ?? []) as InvestorRow[],
    holdings: (holdingsResult.data ?? []).map((row) => ({
      ...row,
      shares_owned: toNumber(row.shares_owned),
      ownership_percent: row.ownership_percent === null ? null : toNumber(row.ownership_percent),
      acquisition_price_cents:
        row.acquisition_price_cents === null ? null : Math.trunc(toNumber(row.acquisition_price_cents)),
      cost_basis_cents: row.cost_basis_cents === null ? null : Math.trunc(toNumber(row.cost_basis_cents)),
    })) as InvestorHoldingRow[],
    bankAccounts: (bankAccountsResult.data ?? []).map((row) => ({
      ...row,
      is_primary: Boolean(row.is_primary),
    })) as InvestorBankAccountRow[],
    declarations: (declarationsResult.data ?? []).map((row) => ({
      ...row,
      amount_per_share_cents: Math.trunc(toNumber(row.amount_per_share_cents)),
      total_amount_cents: row.total_amount_cents === null ? null : Math.trunc(toNumber(row.total_amount_cents)),
    })) as DividendDeclarationRow[],
    dividendPayments: (paymentsResult.data ?? []).map((row) => ({
      ...row,
      shares_eligible: toNumber(row.shares_eligible),
      gross_amount_cents: Math.trunc(toNumber(row.gross_amount_cents)),
      withholding_tax_cents: Math.trunc(toNumber(row.withholding_tax_cents)),
      net_amount_cents: Math.trunc(toNumber(row.net_amount_cents)),
    })) as DividendPaymentRow[],
  };
}

export function buildCapTableRows(dataset: InvestorDataset): CapTableRow[] {
  const classById = new Map(dataset.investorClasses.map((row) => [row.id, row]));
  const investorById = new Map(dataset.investors.map((row) => [row.id, row]));
  const bankAccountsByInvestorId = new Map<string, InvestorBankAccountRow[]>();
  for (const bankAccount of dataset.bankAccounts) {
    const list = bankAccountsByInvestorId.get(bankAccount.investor_id) ?? [];
    list.push(bankAccount);
    bankAccountsByInvestorId.set(bankAccount.investor_id, list);
  }

  const totalSharesByClassId = new Map<string, number>();
  for (const holding of dataset.holdings) {
    if (holding.status !== "active") continue;
    totalSharesByClassId.set(
      holding.investor_class_id,
      (totalSharesByClassId.get(holding.investor_class_id) ?? 0) + holding.shares_owned,
    );
  }

  const rows: CapTableRow[] = [];
  for (const holding of dataset.holdings) {
    const investor = investorById.get(holding.investor_id);
    const investorClass = classById.get(holding.investor_class_id);
    if (!investor || !investorClass) continue;

    const bankAccounts = bankAccountsByInvestorId.get(investor.id) ?? [];
    const primaryBank =
      bankAccounts.find((entry) => entry.is_primary) ??
      bankAccounts.sort((left, right) => right.created_at.localeCompare(left.created_at))[0] ??
      null;

    const totalClassShares = totalSharesByClassId.get(holding.investor_class_id) ?? 0;
    const ownershipPercentOfClass =
      totalClassShares > 0 ? Number(((holding.shares_owned / totalClassShares) * 100).toFixed(5)) : 0;
    const ownershipPercent =
      holding.ownership_percent !== null ? holding.ownership_percent : ownershipPercentOfClass;

    rows.push({
      investor_id: investor.id,
      investor_name: investor.legal_name,
      investor_type: investor.investor_type,
      investor_email: investor.contact_email,
      investor_phone: investor.contact_phone,
      investor_class_code: investorClass.class_code,
      investor_class_name: investorClass.class_name,
      shares_owned: holding.shares_owned,
      ownership_percent: Number(ownershipPercent.toFixed(5)),
      ownership_percent_of_class: ownershipPercentOfClass,
      primary_bank_name: primaryBank?.bank_name ?? null,
      primary_bank_currency: primaryBank?.currency ?? null,
      primary_bank_status: primaryBank?.verification_status ?? null,
      kyc_status: investor.kyc_status,
      aml_status: investor.aml_status,
      accreditation_status: investor.accreditation_status,
      onboarding_status: investor.onboarding_status,
      holding_status: holding.status,
      holding_created_at: holding.created_at,
    });
  }

  rows.sort(
    (left, right) =>
      right.shares_owned - left.shares_owned ||
      left.investor_class_code.localeCompare(right.investor_class_code) ||
      left.investor_name.localeCompare(right.investor_name),
  );
  return rows;
}

export function buildDividendRegisterRows(dataset: InvestorDataset): DividendRegisterRow[] {
  const classById = new Map(dataset.investorClasses.map((row) => [row.id, row]));
  const investorById = new Map(dataset.investors.map((row) => [row.id, row]));
  const declarationById = new Map(dataset.declarations.map((row) => [row.id, row]));

  const rows: DividendRegisterRow[] = [];
  for (const payment of dataset.dividendPayments) {
    const declaration = declarationById.get(payment.declaration_id);
    const investor = investorById.get(payment.investor_id);
    if (!declaration || !investor) continue;

    const investorClass = declaration.investor_class_id
      ? classById.get(declaration.investor_class_id) ?? null
      : null;

    rows.push({
      declaration_id: declaration.id,
      declaration_name: declaration.declaration_name,
      declaration_status: declaration.status,
      investor_name: investor.legal_name,
      investor_email: investor.contact_email,
      investor_class_code: investorClass?.class_code ?? null,
      investor_class_name: investorClass?.class_name ?? null,
      payment_status: payment.payment_status,
      shares_eligible: payment.shares_eligible,
      gross_amount_cents: payment.gross_amount_cents,
      withholding_tax_cents: payment.withholding_tax_cents,
      net_amount_cents: payment.net_amount_cents,
      payment_reference: payment.payment_reference,
      paid_at: payment.paid_at,
      declaration_record_date: declaration.record_date,
      declaration_payment_date: declaration.payment_date,
      created_at: payment.created_at,
    });
  }

  rows.sort((left, right) => right.created_at.localeCompare(left.created_at));
  return rows;
}

export function buildBankAuditFindings(dataset: InvestorDataset): BankAuditFinding[] {
  const findings: BankAuditFinding[] = [];
  const investorById = new Map(dataset.investors.map((row) => [row.id, row]));
  const bankAccountsByInvestorId = new Map<string, InvestorBankAccountRow[]>();
  for (const bankAccount of dataset.bankAccounts) {
    const list = bankAccountsByInvestorId.get(bankAccount.investor_id) ?? [];
    list.push(bankAccount);
    bankAccountsByInvestorId.set(bankAccount.investor_id, list);
  }

  for (const investor of dataset.investors) {
    if (investor.kyc_status !== "verified") {
      findings.push({
        severity: "critical",
        category: "kyc",
        finding_title: "Investor missing verified KYC",
        finding_detail: `${investor.legal_name} is ${investor.kyc_status} and should be verified before payout operations.`,
        related_entity_type: "investor",
        related_entity_id: investor.id,
        status: "open",
      });
    }
    if (investor.aml_status === "flagged") {
      findings.push({
        severity: "critical",
        category: "aml",
        finding_title: "Investor AML screening flagged",
        finding_detail: `${investor.legal_name} requires compliance review before any transfer.`,
        related_entity_type: "investor",
        related_entity_id: investor.id,
        status: "open",
      });
    }
  }

  const investorsWithActiveHoldings = new Set(
    dataset.holdings.filter((holding) => holding.status === "active").map((holding) => holding.investor_id),
  );

  for (const investorId of investorsWithActiveHoldings) {
    const investor = investorById.get(investorId);
    if (!investor) continue;
    const bankAccounts = bankAccountsByInvestorId.get(investorId) ?? [];
    const hasVerifiedPrimary = bankAccounts.some(
      (bankAccount) => bankAccount.is_primary && bankAccount.verification_status === "verified",
    );
    if (!hasVerifiedPrimary) {
      findings.push({
        severity: "critical",
        category: "bank_verification",
        finding_title: "Active investor missing verified primary payout bank account",
        finding_detail: `${investor.legal_name} has active holdings but no verified primary payout account.`,
        related_entity_type: "investor",
        related_entity_id: investor.id,
        status: "open",
      });
    }
  }

  const paymentsByDeclarationId = new Map<string, DividendPaymentRow[]>();
  for (const payment of dataset.dividendPayments) {
    const list = paymentsByDeclarationId.get(payment.declaration_id) ?? [];
    list.push(payment);
    paymentsByDeclarationId.set(payment.declaration_id, list);

    if (payment.net_amount_cents !== payment.gross_amount_cents - payment.withholding_tax_cents) {
      findings.push({
        severity: "warning",
        category: "dividend_reconciliation",
        finding_title: "Dividend payment math mismatch",
        finding_detail: `Payment ${payment.id} net amount does not equal gross minus withholding.`,
        related_entity_type: "dividend_payment",
        related_entity_id: payment.id,
        status: "open",
      });
    }
    if (payment.payment_status === "paid" && (!payment.paid_at || !payment.payment_reference)) {
      findings.push({
        severity: "warning",
        category: "payout_exception",
        finding_title: "Paid dividend missing settlement evidence",
        finding_detail: `Payment ${payment.id} is marked paid but missing paid_at or payment_reference.`,
        related_entity_type: "dividend_payment",
        related_entity_id: payment.id,
        status: "open",
      });
    }
  }

  for (const declaration of dataset.declarations) {
    if (!["approved", "paid"].includes(declaration.status)) continue;
    const payments = paymentsByDeclarationId.get(declaration.id) ?? [];
    if (payments.length === 0) {
      findings.push({
        severity: "critical",
        category: "dividend_reconciliation",
        finding_title: "Dividend declaration has no payment rows",
        finding_detail: `${declaration.declaration_name} (${declaration.id}) is ${declaration.status} without generated payouts.`,
        related_entity_type: "dividend_declaration",
        related_entity_id: declaration.id,
        status: "open",
      });
      continue;
    }

    if (declaration.total_amount_cents !== null) {
      const sumGross = payments.reduce((acc, row) => acc + row.gross_amount_cents, 0);
      if (sumGross !== declaration.total_amount_cents) {
        findings.push({
          severity: "warning",
          category: "dividend_reconciliation",
          finding_title: "Dividend declaration total mismatch",
          finding_detail: `${declaration.declaration_name} total (${declaration.total_amount_cents}) does not match gross payout sum (${sumGross}).`,
          related_entity_type: "dividend_declaration",
          related_entity_id: declaration.id,
          status: "open",
        });
      }
    }
  }

  return findings;
}

export async function createBankAuditRun(input: {
  admin: SupabaseClient;
  generatedBy: string;
  periodStart: string;
  periodEnd: string;
  scope?: "finance" | "banking" | "insurance" | "institutional_due_diligence";
  findings: BankAuditFinding[];
}) {
  const { admin, generatedBy, periodStart, periodEnd, findings, scope = "banking" } = input;

  const summary = [
    `Findings: ${findings.length}`,
    `Critical: ${findings.filter((finding) => finding.severity === "critical").length}`,
    `Warnings: ${findings.filter((finding) => finding.severity === "warning").length}`,
    `Info: ${findings.filter((finding) => finding.severity === "info").length}`,
  ].join(" | ");

  const { data: run, error: runError } = await admin
    .from("bank_audit_runs")
    .insert({
      audit_scope: scope,
      period_start: periodStart,
      period_end: periodEnd,
      status: "open",
      summary,
      findings,
      generated_by: generatedBy,
    })
    .select("id, audit_scope, period_start, period_end, status, summary, findings, created_at")
    .single();

  if (runError) {
    throw new Error(runError.message);
  }

  if (findings.length > 0) {
    const { error: findingsError } = await admin.from("bank_audit_findings").insert(
      findings.map((finding) => ({
        audit_run_id: run.id,
        severity: finding.severity,
        category: finding.category,
        finding_title: finding.finding_title,
        finding_detail: finding.finding_detail,
        related_entity_type: finding.related_entity_type,
        related_entity_id: finding.related_entity_id,
        status: finding.status,
      })),
    );
    if (findingsError) {
      throw new Error(findingsError.message);
    }
  }

  return run;
}
