import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";
import { buildFinanceSnapshot, loadFinanceDataset } from "@/lib/finance/reporting";
import type { FinanceAnalyticsOverview } from "@/lib/finance/types";
import {
  buildBankAuditFindings,
  buildCapTableRows,
  buildDividendRegisterRows,
  loadInvestorDataset,
} from "@/lib/finance/investor-reporting";
import {
  loadLatestFinanceAnalyticsSnapshot,
  runFinanceServiceIntelligencePipeline,
} from "@/lib/finance/service-intelligence";
import FinanceClient from "./finance-client";

export const dynamic = "force-dynamic";

type PortalAccessRow = {
  id: string;
  investor_id: string;
  user_id: string;
  role: string;
  status: string;
  created_at: string;
};

type BankConnectionRow = {
  id: string;
  provider: string;
  institution_name: string;
  account_name: string | null;
  account_mask: string | null;
  status: string;
  created_at: string;
};

type BankStatementImportRow = {
  id: string;
  source_type: string;
  period_start: string;
  period_end: string;
  line_count: number;
  import_status: string;
  created_at: string;
};

type BankReconciliationRunRow = {
  id: string;
  period_start: string;
  period_end: string;
  status: string;
  matched_count: number;
  review_count: number;
  unmatched_count: number;
  created_at: string;
};

function toCurrency(cents: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(cents / 100);
}

function toSinceDate(days: number) {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

export default async function AdminFinancePage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/auth/sign-in");
  }

  const { data: profile, error: profileError } = await supabase
    .from("user_profiles")
    .select("is_admin")
    .eq("user_id", user.id)
    .maybeSingle();

  if (profileError || !profile?.is_admin) {
    return (
      <main className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-6 py-24">
        <SoftCard className="w-full max-w-2xl border-rose-200 bg-rose-50 p-8 text-center">
          <h1 className="text-2xl font-semibold">Access Denied</h1>
          <p className="mt-3 text-sm text-rose-700">
            You must be an administrator to access finance operations.
          </p>
        </SoftCard>
      </main>
    );
  }

  const admin = createSupabaseAdminClient();
  const sinceDate = toSinceDate(365);
  let financeDataset:
    | Awaited<ReturnType<typeof loadFinanceDataset>>
    | null = null;
  let investorDataset:
    | Awaited<ReturnType<typeof loadInvestorDataset>>
    | null = null;
  let loadErrorMessage: string | null = null;

  try {
    [financeDataset, investorDataset] = await Promise.all([
      loadFinanceDataset(admin, { sinceDate, limit: 20000 }),
      loadInvestorDataset(admin, { limit: 20000 }),
    ]);
  } catch (error) {
    loadErrorMessage =
      error instanceof Error
        ? error.message
        : "Finance tables may not be migrated yet. Apply latest Supabase migrations.";
  }

  if (!financeDataset || !investorDataset || loadErrorMessage) {
    return (
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-12">
        <SoftCard className="border-amber-200 bg-amber-50 p-6">
          <h1 className="text-2xl font-semibold">Finance Module Not Ready</h1>
          <p className="mt-2 text-sm text-amber-900">
            {loadErrorMessage ??
              "Finance tables may not be migrated yet. Apply latest Supabase migrations."}
          </p>
          <p className="mt-2 text-xs text-amber-800">
            Run the newest Supabase migrations, then reload this page.
          </p>
        </SoftCard>
      </main>
    );
  }

  const financeSnapshot = buildFinanceSnapshot(financeDataset);
  const capTableRows = buildCapTableRows(investorDataset);
  const dividendRows = buildDividendRegisterRows(investorDataset);
  const bankAuditFindings = buildBankAuditFindings(investorDataset);
  const [connectionsResult, importsResult, runsResult, portalAccessResult] = await Promise.all([
    admin
      .from("bank_connections")
      .select("id, provider, institution_name, account_name, account_mask, status, created_at")
      .order("created_at", { ascending: false })
      .limit(200),
    admin
      .from("bank_statement_imports")
      .select("id, source_type, period_start, period_end, line_count, import_status, created_at")
      .order("created_at", { ascending: false })
      .limit(200),
    admin
      .from("bank_reconciliation_runs")
      .select(
        "id, period_start, period_end, status, matched_count, review_count, unmatched_count, created_at",
      )
      .order("created_at", { ascending: false })
      .limit(200),
    admin
      .from("investor_portal_access")
      .select("id, investor_id, user_id, role, status, created_at")
      .order("created_at", { ascending: false })
      .limit(500),
  ]);

  const bankConnections = (connectionsResult.data ?? []) as BankConnectionRow[];
  const bankImports = (importsResult.data ?? []) as BankStatementImportRow[];
  const bankRuns = (runsResult.data ?? []) as BankReconciliationRunRow[];
  const portalAccess = (portalAccessResult.data ?? []) as PortalAccessRow[];
  let initialAnalytics: FinanceAnalyticsOverview | null = null;
  let analyticsErrorMessage: string | null = null;

  try {
    initialAnalytics = await loadLatestFinanceAnalyticsSnapshot(admin, 30);
    if (!initialAnalytics) {
      initialAnalytics = await runFinanceServiceIntelligencePipeline(admin, {
        windowDays: 30,
        reconciliationDays: 120,
        maxRowsPerSource: 12000,
        triggeredBy: user.id,
        persistSnapshot: true,
        runReconciliation: false,
      });
    }
  } catch (error) {
    analyticsErrorMessage =
      error instanceof Error
        ? error.message
        : "Finance analytics pipeline data is currently unavailable.";
  }

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-12">
      <SoftCard as="header" className="border-accent/20 bg-[var(--gradient-hero)] p-6">
        <h1 className="text-3xl font-semibold tracking-tight">Finance & Investor Operations</h1>
        <p className="mt-2 text-sm text-zinc-700">
          General ledger, investor management, dividends, and institutional audit readiness.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <ProgressChip
            label="Revenue (365d)"
            value={toCurrency(financeSnapshot.totals.revenue_cents)}
            tone="info"
          />
          <ProgressChip
            label="Net Income Pre-Tax"
            value={toCurrency(financeSnapshot.totals.net_income_pre_tax_cents)}
            tone={financeSnapshot.totals.net_income_pre_tax_cents >= 0 ? "success" : "warning"}
          />
          <ProgressChip label="Investors" value={investorDataset.investors.length} tone="neutral" />
          <ProgressChip
            label="Audit Findings"
            value={bankAuditFindings.length}
            tone={bankAuditFindings.length > 0 ? "warning" : "success"}
          />
          {initialAnalytics ? (
            <ProgressChip label="DAU" value={initialAnalytics.kpis.dau} tone="neutral" />
          ) : null}
          {initialAnalytics ? (
            <ProgressChip label="MAU" value={initialAnalytics.kpis.mau} tone="neutral" />
          ) : null}
        </div>
      </SoftCard>

      <SoftCard as="section" className="p-5">
        <h2 className="text-lg font-semibold">Reports</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <a href="/api/admin/reports/finance?days=365" className="underline">
              Download Finance Ledger Report (CSV, 365d)
            </a>
          </li>
          <li>
            <a href="/api/admin/reports/finance-analytics?days=30" className="underline">
              Download Finance Analytics Report (CSV, 30d)
            </a>
          </li>
          <li>
            <a href="/api/admin/reports/tax-projection?days=365&format=csv" className="underline">
              Download Tax Projection Report (CSV)
            </a>
          </li>
          <li>
            <a href="/api/admin/reports/investors" className="underline">
              Download Investor Cap Table Report (CSV)
            </a>
          </li>
          <li>
            <a href="/api/admin/reports/dividends" className="underline">
              Download Dividend Register Report (CSV)
            </a>
          </li>
          <li>
            <a href="/api/admin/reports/banking-audit?days=365&format=csv&persist=1" className="underline">
              Download Banking Audit Report (CSV) and Persist Audit Run
            </a>
          </li>
        </ul>
      </SoftCard>

      <SoftCard as="section" className="p-5">
        <h2 className="text-lg font-semibold">Bank Reconciliation Pipeline</h2>
        <p className="mt-2 text-sm text-zinc-700">
          Supported ingestion paths: Plaid API, PDF upload parser, paper scan OCR parser, CSV/manual.
        </p>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <code>POST /api/admin/finance/banking/plaid/link-token</code> (generate Plaid Link token)
          </li>
          <li>
            <code>POST /api/admin/finance/banking/plaid/exchange-public-token</code> (exchange public
            token and persist Plaid accounts)
          </li>
          <li>
            <code>POST /api/admin/finance/banking/plaid/transactions/sync</code> (pull statement lines
            directly from Plaid)
          </li>
          <li>
            <code>POST /api/admin/finance/banking/statements/import</code> (import statement lines)
          </li>
          <li>
            <code>POST /api/admin/finance/banking/reconciliation/run</code> (execute matching run)
          </li>
          <li>
            <code>GET /api/admin/finance/banking/reconciliation</code> (review runs and items)
          </li>
        </ul>
      </SoftCard>

      <FinanceClient
        initialAccounts={financeDataset.accounts}
        initialInvestors={investorDataset.investors.map((entry) => ({
          id: entry.id,
          legal_name: entry.legal_name,
          contact_email: entry.contact_email,
        }))}
        initialTaxProfile={financeDataset.activeTaxProfile}
        initialLineItems={financeSnapshot.line_items.slice(0, 200)}
        initialRevenueChannels={financeSnapshot.revenue_channels}
        initialExpenseCategories={financeSnapshot.expense_categories}
        initialMonthly={financeSnapshot.monthly}
        initialTaxProjection={financeSnapshot.tax_projection}
        initialClasses={investorDataset.investorClasses}
        initialCapTableRows={capTableRows.slice(0, 300)}
        initialDividendRows={dividendRows.slice(0, 300)}
        initialFindings={bankAuditFindings.slice(0, 200)}
        initialDeclarations={investorDataset.declarations.slice(0, 200)}
        initialPortalAccess={portalAccess}
        initialBankConnections={bankConnections}
        initialBankImports={bankImports}
        initialBankRuns={bankRuns}
        initialAnalytics={initialAnalytics}
        initialAnalyticsError={analyticsErrorMessage}
      />
    </main>
  );
}
