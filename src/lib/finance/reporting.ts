import type { SupabaseClient } from "@supabase/supabase-js";
import type {
  AccountType,
  BusinessAccountRow,
  BusinessGlTransactionRow,
  FinanceExpenseCategorySummary,
  FinanceLedgerLine,
  FinanceMonthlySummary,
  FinanceRevenueChannelSummary,
  FinanceSnapshot,
  FinanceTaxProjection,
  OwnerTaxProfileRow,
  RevenueChannel,
} from "@/lib/finance/types";

function toCentsNumber(value: unknown) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return 0;
  return Math.trunc(parsed);
}

function toRateNumber(value: unknown, fallback = 0) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.max(0, Math.min(1, parsed));
}

function toUsd(cents: number) {
  return Number((cents / 100).toFixed(2));
}

function toMonthKey(occurredOn: string) {
  const parsed = new Date(occurredOn);
  if (Number.isNaN(parsed.getTime())) {
    return occurredOn.slice(0, 7);
  }
  const year = parsed.getUTCFullYear();
  const month = String(parsed.getUTCMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

function toSignedAmountCents(accountType: AccountType, side: "debit" | "credit", amountCents: number) {
  const debitPositive = accountType === "asset" || accountType === "expense";
  if (side === "debit") {
    return debitPositive ? amountCents : -amountCents;
  }
  return debitPositive ? -amountCents : amountCents;
}

type FinanceDataset = {
  accounts: BusinessAccountRow[];
  transactions: BusinessGlTransactionRow[];
  activeTaxProfile: OwnerTaxProfileRow | null;
};

export async function loadFinanceDataset(
  admin: SupabaseClient,
  input: { sinceDate?: string; limit?: number } = {},
): Promise<FinanceDataset> {
  const limit = Math.max(1, Math.min(200000, input.limit ?? 5000));
  const accountPromise = admin
    .from("business_chart_of_accounts")
    .select(
      "code, name, account_type, category, description, tax_deductible_default, is_system, is_active, created_at, updated_at",
    )
    .eq("is_active", true)
    .order("code", { ascending: true });

  let transactionQuery = admin
    .from("business_gl_transactions")
    .select(
      "id, occurred_on, description, amount_cents, debit_account_code, credit_account_code, entry_kind, revenue_channel, counterparty_name, employee_name, source_document, source_system, source_ref, tax_deductible, metadata, created_by, created_at, updated_at",
    )
    .order("occurred_on", { ascending: false })
    .order("created_at", { ascending: false })
    .limit(limit);

  if (input.sinceDate) {
    transactionQuery = transactionQuery.gte("occurred_on", input.sinceDate);
  }

  const taxProfilePromise = admin
    .from("owner_tax_profiles")
    .select(
      "id, owner_name, filing_status, federal_tax_rate, state_tax_rate, self_employment_tax_rate, local_tax_rate, additional_tax_rate, deduction_rate, notes, is_active, updated_by, created_at, updated_at",
    )
    .eq("is_active", true)
    .order("updated_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  const [accountsResult, transactionsResult, taxProfileResult] = await Promise.all([
    accountPromise,
    transactionQuery,
    taxProfilePromise,
  ]);

  if (accountsResult.error) {
    throw new Error(accountsResult.error.message);
  }
  if (transactionsResult.error) {
    throw new Error(transactionsResult.error.message);
  }
  if (taxProfileResult.error) {
    throw new Error(taxProfileResult.error.message);
  }

  const accounts = (accountsResult.data ?? []).map((row) => ({
    ...row,
    account_type: row.account_type as AccountType,
    tax_deductible_default: Boolean(row.tax_deductible_default),
    is_system: Boolean(row.is_system),
    is_active: Boolean(row.is_active),
  })) as BusinessAccountRow[];

  const transactions = (transactionsResult.data ?? []).map((row) => ({
    ...row,
    amount_cents: toCentsNumber(row.amount_cents),
    tax_deductible: Boolean(row.tax_deductible),
  })) as BusinessGlTransactionRow[];

  const taxProfile = taxProfileResult.data
    ? ({
        ...taxProfileResult.data,
        federal_tax_rate: toRateNumber(taxProfileResult.data.federal_tax_rate),
        state_tax_rate: toRateNumber(taxProfileResult.data.state_tax_rate),
        self_employment_tax_rate: toRateNumber(taxProfileResult.data.self_employment_tax_rate),
        local_tax_rate: toRateNumber(taxProfileResult.data.local_tax_rate),
        additional_tax_rate: toRateNumber(taxProfileResult.data.additional_tax_rate),
        deduction_rate: toRateNumber(taxProfileResult.data.deduction_rate),
      } as OwnerTaxProfileRow)
    : null;

  return {
    accounts,
    transactions,
    activeTaxProfile: taxProfile,
  };
}

function buildLedgerLines(
  accounts: BusinessAccountRow[],
  transactions: BusinessGlTransactionRow[],
): FinanceLedgerLine[] {
  const accountByCode = new Map(accounts.map((account) => [account.code, account]));
  const lines: FinanceLedgerLine[] = [];

  for (const transaction of transactions) {
    const amountCents = toCentsNumber(transaction.amount_cents);
    if (amountCents <= 0) continue;

    const debitAccount = accountByCode.get(transaction.debit_account_code);
    const creditAccount = accountByCode.get(transaction.credit_account_code);
    if (!debitAccount || !creditAccount) {
      continue;
    }

    const monthKey = toMonthKey(transaction.occurred_on);

    const debitSigned = toSignedAmountCents(debitAccount.account_type, "debit", amountCents);
    lines.push({
      transaction_id: transaction.id,
      occurred_on: transaction.occurred_on,
      month_key: monthKey,
      description: transaction.description,
      side: "debit",
      account_code: debitAccount.code,
      account_name: debitAccount.name,
      account_type: debitAccount.account_type,
      account_category: debitAccount.category,
      amount_cents: amountCents,
      signed_amount_cents: debitSigned,
      signed_amount_usd: toUsd(debitSigned),
      revenue_channel: transaction.revenue_channel,
      counterparty_name: transaction.counterparty_name,
      tax_deductible: transaction.tax_deductible || debitAccount.tax_deductible_default,
      entry_kind: transaction.entry_kind,
      source_system: transaction.source_system,
      source_ref: transaction.source_ref,
      created_at: transaction.created_at,
    });

    const creditSigned = toSignedAmountCents(creditAccount.account_type, "credit", amountCents);
    lines.push({
      transaction_id: transaction.id,
      occurred_on: transaction.occurred_on,
      month_key: monthKey,
      description: transaction.description,
      side: "credit",
      account_code: creditAccount.code,
      account_name: creditAccount.name,
      account_type: creditAccount.account_type,
      account_category: creditAccount.category,
      amount_cents: amountCents,
      signed_amount_cents: creditSigned,
      signed_amount_usd: toUsd(creditSigned),
      revenue_channel: transaction.revenue_channel,
      counterparty_name: transaction.counterparty_name,
      tax_deductible: transaction.tax_deductible || creditAccount.tax_deductible_default,
      entry_kind: transaction.entry_kind,
      source_system: transaction.source_system,
      source_ref: transaction.source_ref,
      created_at: transaction.created_at,
    });
  }

  lines.sort((left, right) => {
    if (left.occurred_on !== right.occurred_on) {
      return left.occurred_on < right.occurred_on ? 1 : -1;
    }
    if (left.transaction_id !== right.transaction_id) {
      return left.transaction_id.localeCompare(right.transaction_id);
    }
    return left.side.localeCompare(right.side);
  });
  return lines;
}

function buildRevenueChannels(
  lines: FinanceLedgerLine[],
  totalRevenueCents: number,
): FinanceRevenueChannelSummary[] {
  const channelRevenueMap = new Map<RevenueChannel | "unattributed", number>();
  for (const line of lines) {
    if (line.account_type !== "revenue") continue;
    const channel = line.revenue_channel ?? "unattributed";
    channelRevenueMap.set(channel, (channelRevenueMap.get(channel) ?? 0) + line.signed_amount_cents);
  }

  return Array.from(channelRevenueMap.entries())
    .map(([channel, cents]) => ({
      channel,
      revenue_cents: cents,
      revenue_usd: toUsd(cents),
      share_of_revenue: totalRevenueCents > 0 ? Number((cents / totalRevenueCents).toFixed(4)) : 0,
    }))
    .sort(
      (left, right) =>
        right.revenue_cents - left.revenue_cents || left.channel.localeCompare(right.channel),
    );
}

function buildExpenseCategories(
  lines: FinanceLedgerLine[],
  totalOperatingExpenseCents: number,
): FinanceExpenseCategorySummary[] {
  const categoryMap = new Map<string, number>();
  for (const line of lines) {
    if (line.account_type !== "expense") continue;
    if (line.account_category === "tax") continue;
    categoryMap.set(
      line.account_category,
      (categoryMap.get(line.account_category) ?? 0) + line.signed_amount_cents,
    );
  }

  return Array.from(categoryMap.entries())
    .map(([category, cents]) => ({
      category,
      expense_cents: cents,
      expense_usd: toUsd(cents),
      share_of_expense:
        totalOperatingExpenseCents > 0
          ? Number((cents / totalOperatingExpenseCents).toFixed(4))
          : 0,
    }))
    .sort((left, right) => right.expense_cents - left.expense_cents || left.category.localeCompare(right.category));
}

function buildMonthlySummary(lines: FinanceLedgerLine[]): FinanceMonthlySummary[] {
  const monthMap = new Map<string, { revenue: number; operatingExpense: number; taxExpense: number }>();
  for (const line of lines) {
    const key = line.month_key;
    const entry = monthMap.get(key) ?? { revenue: 0, operatingExpense: 0, taxExpense: 0 };
    if (line.account_type === "revenue") {
      entry.revenue += line.signed_amount_cents;
    } else if (line.account_type === "expense") {
      if (line.account_category === "tax") {
        entry.taxExpense += line.signed_amount_cents;
      } else {
        entry.operatingExpense += line.signed_amount_cents;
      }
    }
    monthMap.set(key, entry);
  }

  return Array.from(monthMap.entries())
    .map(([monthKey, values]) => ({
      month_key: monthKey,
      revenue_cents: values.revenue,
      operating_expense_cents: values.operatingExpense,
      tax_expense_cents: values.taxExpense,
      net_income_pre_tax_cents: values.revenue - values.operatingExpense,
      net_income_after_booked_tax_cents: values.revenue - values.operatingExpense - values.taxExpense,
    }))
    .sort((left, right) => left.month_key.localeCompare(right.month_key));
}

function buildTaxProjection(
  activeTaxProfile: OwnerTaxProfileRow | null,
  netIncomePreTaxCents: number,
): FinanceTaxProjection | null {
  if (!activeTaxProfile) return null;
  const totalRate =
    activeTaxProfile.federal_tax_rate +
    activeTaxProfile.state_tax_rate +
    activeTaxProfile.self_employment_tax_rate +
    activeTaxProfile.local_tax_rate +
    activeTaxProfile.additional_tax_rate;
  const taxableIncomeCents = Math.max(
    0,
    Math.round(netIncomePreTaxCents * (1 - activeTaxProfile.deduction_rate)),
  );
  const projectedTaxCents = Math.max(0, Math.round(taxableIncomeCents * totalRate));
  const projectedAfterTaxIncomeCents = netIncomePreTaxCents - projectedTaxCents;

  return {
    owner_name: activeTaxProfile.owner_name,
    filing_status: activeTaxProfile.filing_status,
    effective_total_rate: Number(totalRate.toFixed(5)),
    taxable_income_cents: taxableIncomeCents,
    projected_tax_cents: projectedTaxCents,
    projected_after_tax_income_cents: projectedAfterTaxIncomeCents,
    notes: activeTaxProfile.notes,
  };
}

export function buildFinanceSnapshot(input: FinanceDataset): FinanceSnapshot {
  const lines = buildLedgerLines(input.accounts, input.transactions);

  let revenueCents = 0;
  let operatingExpenseCents = 0;
  let taxExpenseCents = 0;
  let deductibleExpenseCents = 0;

  for (const line of lines) {
    if (line.account_type === "revenue") {
      revenueCents += line.signed_amount_cents;
      continue;
    }
    if (line.account_type !== "expense") {
      continue;
    }
    if (line.account_category === "tax") {
      taxExpenseCents += line.signed_amount_cents;
    } else {
      operatingExpenseCents += line.signed_amount_cents;
    }
    if (line.tax_deductible && line.signed_amount_cents > 0) {
      deductibleExpenseCents += line.signed_amount_cents;
    }
  }

  const netIncomePreTaxCents = revenueCents - operatingExpenseCents;
  const netIncomeAfterBookedTaxCents = netIncomePreTaxCents - taxExpenseCents;

  const snapshot: FinanceSnapshot = {
    generated_at: new Date().toISOString(),
    totals: {
      revenue_cents: revenueCents,
      operating_expense_cents: operatingExpenseCents,
      tax_expense_cents: taxExpenseCents,
      deductible_expense_cents: deductibleExpenseCents,
      net_income_pre_tax_cents: netIncomePreTaxCents,
      net_income_after_booked_tax_cents: netIncomeAfterBookedTaxCents,
    },
    revenue_channels: buildRevenueChannels(lines, revenueCents),
    expense_categories: buildExpenseCategories(lines, operatingExpenseCents),
    monthly: buildMonthlySummary(lines),
    tax_projection: buildTaxProjection(input.activeTaxProfile, netIncomePreTaxCents),
    line_items: lines,
  };

  return snapshot;
}

export function buildFinanceCsvRows(lines: FinanceLedgerLine[]) {
  return lines.map((line) => ({
    occurred_on: line.occurred_on,
    transaction_id: line.transaction_id,
    description: line.description,
    side: line.side,
    account_code: line.account_code,
    account_name: line.account_name,
    account_type: line.account_type,
    account_category: line.account_category,
    amount_cents: line.amount_cents,
    signed_amount_cents: line.signed_amount_cents,
    signed_amount_usd: line.signed_amount_usd,
    revenue_channel: line.revenue_channel,
    counterparty_name: line.counterparty_name,
    tax_deductible: line.tax_deductible ? 1 : 0,
    entry_kind: line.entry_kind,
    source_system: line.source_system,
    source_ref: line.source_ref,
    created_at: line.created_at,
  }));
}

export function buildTaxProjectionCsvRows(snapshot: FinanceSnapshot) {
  const projection = snapshot.tax_projection;
  if (!projection) return [];

  return [
    {
      owner_name: projection.owner_name,
      filing_status: projection.filing_status,
      effective_total_rate: projection.effective_total_rate,
      taxable_income_cents: projection.taxable_income_cents,
      projected_tax_cents: projection.projected_tax_cents,
      projected_after_tax_income_cents: projection.projected_after_tax_income_cents,
      notes: projection.notes,
      revenue_cents: snapshot.totals.revenue_cents,
      operating_expense_cents: snapshot.totals.operating_expense_cents,
      booked_tax_expense_cents: snapshot.totals.tax_expense_cents,
      net_income_pre_tax_cents: snapshot.totals.net_income_pre_tax_cents,
      net_income_after_booked_tax_cents: snapshot.totals.net_income_after_booked_tax_cents,
      deductible_expense_cents: snapshot.totals.deductible_expense_cents,
      generated_at: snapshot.generated_at,
    },
  ];
}
