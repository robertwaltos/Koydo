export const FINANCE_REPORT_TYPE = "finance" as const;
export const FINANCE_ANALYTICS_REPORT_TYPE = "finance_analytics" as const;

export const FINANCE_ENTRY_KINDS = [
  "manual",
  "subscription",
  "iap",
  "invoice",
  "refund",
  "payroll",
  "vendor_bill",
  "tax_payment",
  "adjustment",
] as const;

export type FinanceEntryKind = (typeof FINANCE_ENTRY_KINDS)[number];

export const REVENUE_CHANNELS = [
  "web_subscription",
  "ios_iap",
  "android_iap",
  "organization_contract",
  "affiliate",
  "consulting",
  "ads",
  "other",
] as const;

export type RevenueChannel = (typeof REVENUE_CHANNELS)[number];

export type AccountType = "asset" | "liability" | "equity" | "revenue" | "expense";

export type BusinessAccountRow = {
  code: string;
  name: string;
  account_type: AccountType;
  category: string;
  description: string | null;
  tax_deductible_default: boolean;
  is_system: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

export type BusinessGlTransactionRow = {
  id: string;
  occurred_on: string;
  description: string;
  amount_cents: number;
  debit_account_code: string;
  credit_account_code: string;
  entry_kind: FinanceEntryKind;
  revenue_channel: RevenueChannel | null;
  counterparty_name: string | null;
  employee_name: string | null;
  source_document: string | null;
  source_system: string;
  source_ref: string | null;
  tax_deductible: boolean;
  metadata: Record<string, unknown>;
  created_by: string | null;
  created_at: string;
  updated_at: string;
};

export type OwnerTaxProfileRow = {
  id: string;
  owner_name: string;
  filing_status: "single" | "married_joint" | "married_separate" | "head_household";
  federal_tax_rate: number;
  state_tax_rate: number;
  self_employment_tax_rate: number;
  local_tax_rate: number;
  additional_tax_rate: number;
  deduction_rate: number;
  notes: string | null;
  is_active: boolean;
  updated_by: string | null;
  created_at: string;
  updated_at: string;
};

export type FinanceLedgerLine = {
  transaction_id: string;
  occurred_on: string;
  month_key: string;
  description: string;
  side: "debit" | "credit";
  account_code: string;
  account_name: string;
  account_type: AccountType;
  account_category: string;
  amount_cents: number;
  signed_amount_cents: number;
  signed_amount_usd: number;
  revenue_channel: RevenueChannel | null;
  counterparty_name: string | null;
  tax_deductible: boolean;
  entry_kind: FinanceEntryKind;
  source_system: string;
  source_ref: string | null;
  created_at: string;
};

export type FinanceRevenueChannelSummary = {
  channel: RevenueChannel | "unattributed";
  revenue_cents: number;
  revenue_usd: number;
  share_of_revenue: number;
};

export type FinanceExpenseCategorySummary = {
  category: string;
  expense_cents: number;
  expense_usd: number;
  share_of_expense: number;
};

export type FinanceMonthlySummary = {
  month_key: string;
  revenue_cents: number;
  operating_expense_cents: number;
  tax_expense_cents: number;
  net_income_pre_tax_cents: number;
  net_income_after_booked_tax_cents: number;
};

export type FinanceTaxProjection = {
  owner_name: string;
  filing_status: OwnerTaxProfileRow["filing_status"];
  effective_total_rate: number;
  taxable_income_cents: number;
  projected_tax_cents: number;
  projected_after_tax_income_cents: number;
  notes: string | null;
};

export type FinanceSnapshot = {
  generated_at: string;
  totals: {
    revenue_cents: number;
    operating_expense_cents: number;
    tax_expense_cents: number;
    deductible_expense_cents: number;
    net_income_pre_tax_cents: number;
    net_income_after_booked_tax_cents: number;
  };
  revenue_channels: FinanceRevenueChannelSummary[];
  expense_categories: FinanceExpenseCategorySummary[];
  monthly: FinanceMonthlySummary[];
  tax_projection: FinanceTaxProjection | null;
  line_items: FinanceLedgerLine[];
};

export const SERVICE_INTEGRATION_CATEGORIES = [
  "payments",
  "subscription",
  "banking",
  "analytics",
  "marketing",
  "ai",
  "infrastructure",
  "communications",
  "other",
] as const;

export type ServiceIntegrationCategory = (typeof SERVICE_INTEGRATION_CATEGORIES)[number];

export type FinanceTierPerformance = {
  tier_key: string;
  provider: string;
  plan_id: string;
  active_subscriptions: number;
  trial_subscriptions: number;
  canceled_subscriptions: number;
  conversion_count: number;
  churn_count: number;
  revenue_cents: number;
};

export type FinanceMarketingPerformance = {
  source: string;
  region: string;
  conversions: number;
  active_subscriptions: number;
  churned_subscriptions: number;
  spend_cents: number;
  attributed_revenue_cents: number;
  roi_ratio: number | null;
};

export type FinanceServicePerformance = {
  service_key: string;
  service_name: string;
  category: ServiceIntegrationCategory;
  usage_quantity: number;
  usage_unit: string;
  estimated_cost_cents: number;
  billed_cost_cents: number;
  variance_cents: number;
  last_seen_at: string | null;
};

export type FinancePricingFunnel = {
  window_days: number;
  pricing_views: number;
  checkout_views: number;
  checkout_starts: number;
  success_views: number;
  pricing_to_checkout_rate: number;
  checkout_start_rate: number;
  checkout_success_rate: number;
};

export type FinanceAnalyticsOverview = {
  generated_at: string;
  as_of_date: string;
  window_days: number;
  kpis: {
    dau: number;
    mau: number;
    paying_users: number;
    active_subscriptions: number;
    mrr_cents: number;
    arr_cents: number;
    revenue_cents: number;
    operating_expense_cents: number;
    marketing_spend_cents: number;
    ai_cost_cents: number;
    infrastructure_cost_cents: number;
    gross_margin_cents: number;
  };
  tier_performance: FinanceTierPerformance[];
  marketing_performance: FinanceMarketingPerformance[];
  service_performance: FinanceServicePerformance[];
  pricing_funnel: FinancePricingFunnel;
  coverage: {
    acquisition_source_coverage: number;
    region_coverage: number;
    service_attribution_coverage: number;
  };
  pipeline_health: {
    last_reconciliation_run_id: string | null;
    last_reconciliation_status: string | null;
    last_reconciliation_completed_at: string | null;
    stale_unreconciled_records: number;
  };
  optimization_insights: string[];
  warnings: string[];
};
