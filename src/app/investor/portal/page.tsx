import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import SoftCard from "@/app/components/ui/soft-card";
import { buildFinanceSnapshot, loadFinanceDataset } from "@/lib/finance/reporting";

export const dynamic = "force-dynamic";

function usd(cents: number) {
  return (cents / 100).toLocaleString("en-US", { style: "currency", currency: "USD" });
}

function percent(value: number) {
  return `${(value * 100).toFixed(2)}%`;
}

type InvestorAccessRow = {
  investor_id: string;
  role: string;
  status: string;
};

type InvestorRow = {
  id: string;
  legal_name: string;
  investor_type: string;
  contact_email: string | null;
  onboarding_status: string;
};

type HoldingRow = {
  id: string;
  investor_id: string;
  investor_class_id: string;
  shares_owned: number;
  ownership_percent: number | null;
  status: string;
  cost_basis_cents: number | null;
  acquisition_date: string | null;
};

type InvestorClassRow = {
  id: string;
  class_code: string;
  class_name: string;
};

type DividendPaymentRow = {
  id: string;
  declaration_id: string;
  investor_id: string;
  net_amount_cents: number;
  payment_status: string;
  paid_at: string | null;
  payment_reference: string | null;
};

type DividendDeclarationRow = {
  id: string;
  declaration_name: string;
  payment_date: string;
  record_date: string;
};

type InvestorReportDispatchRow = {
  id: string;
  investor_id: string;
  report_type: string;
  report_period_start: string | null;
  report_period_end: string | null;
  delivery_channel: string;
  delivery_status: string;
  sent_at: string | null;
  created_at: string;
};

export default async function InvestorPortalPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/auth/sign-in");
  }

  const admin = createSupabaseAdminClient();
  const { data: accessRows, error: accessError } = await admin
    .from("investor_portal_access")
    .select("investor_id, role, status")
    .eq("user_id", user.id)
    .eq("status", "active");

  if (accessError) {
    return (
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-6 py-12">
        <SoftCard className="border-rose-200 bg-rose-50 p-6">
          <h1 className="text-2xl font-semibold">Investor Portal Error</h1>
          <p className="mt-2 text-sm text-rose-700">{accessError.message}</p>
        </SoftCard>
      </main>
    );
  }

  const scopedAccess = (accessRows ?? []) as InvestorAccessRow[];
  if (scopedAccess.length === 0) {
    return (
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-6 py-12">
        <SoftCard className="border-amber-200 bg-amber-50 p-6">
          <h1 className="text-2xl font-semibold">Investor Access Pending</h1>
          <p className="mt-2 text-sm text-amber-800">
            Your account is authenticated but not yet linked to an investor profile.
          </p>
        </SoftCard>
      </main>
    );
  }

  const investorIds = scopedAccess.map((entry) => entry.investor_id);

  const [investorsResult, holdingsResult, classesResult, paymentsResult, declarationsResult, dispatchesResult, financeDataset] =
    await Promise.all([
      admin
        .from("investors")
        .select("id, legal_name, investor_type, contact_email, onboarding_status")
        .in("id", investorIds),
      admin
        .from("investor_holdings")
        .select(
          "id, investor_id, investor_class_id, shares_owned, ownership_percent, status, cost_basis_cents, acquisition_date",
        )
        .in("investor_id", investorIds)
        .order("created_at", { ascending: false }),
      admin
        .from("investor_classes")
        .select("id, class_code, class_name")
        .order("class_code", { ascending: true }),
      admin
        .from("dividend_payments")
        .select("id, declaration_id, investor_id, net_amount_cents, payment_status, paid_at, payment_reference")
        .in("investor_id", investorIds)
        .order("created_at", { ascending: false })
        .limit(500),
      admin
        .from("dividend_declarations")
        .select("id, declaration_name, payment_date, record_date")
        .order("declared_at", { ascending: false })
        .limit(500),
      admin
        .from("investor_report_dispatches")
        .select(
          "id, investor_id, report_type, report_period_start, report_period_end, delivery_channel, delivery_status, sent_at, created_at",
        )
        .in("investor_id", investorIds)
        .order("created_at", { ascending: false })
        .limit(200),
      loadFinanceDataset(admin, { limit: 200000 }),
    ]);

  const error =
    investorsResult.error ??
    holdingsResult.error ??
    classesResult.error ??
    paymentsResult.error ??
    declarationsResult.error ??
    dispatchesResult.error;
  if (error) {
    return (
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-6 py-12">
        <SoftCard className="border-rose-200 bg-rose-50 p-6">
          <h1 className="text-2xl font-semibold">Investor Portal Error</h1>
          <p className="mt-2 text-sm text-rose-700">{error.message}</p>
        </SoftCard>
      </main>
    );
  }

  const investors = (investorsResult.data ?? []) as InvestorRow[];
  const holdings = (holdingsResult.data ?? []) as HoldingRow[];
  const classes = (classesResult.data ?? []) as InvestorClassRow[];
  const dividendPayments = (paymentsResult.data ?? []) as DividendPaymentRow[];
  const dividendDeclarations = (declarationsResult.data ?? []) as DividendDeclarationRow[];
  const dispatches = (dispatchesResult.data ?? []) as InvestorReportDispatchRow[];

  const classById = new Map(classes.map((entry) => [entry.id, entry]));
  const declarationById = new Map(dividendDeclarations.map((entry) => [entry.id, entry]));
  const financeSnapshot = buildFinanceSnapshot(financeDataset);

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-12">
      <SoftCard as="header" className="border-accent/20 bg-[var(--gradient-hero)] p-6">
        <h1 className="text-3xl font-semibold tracking-tight">Investor Portal</h1>
        <p className="mt-2 text-sm text-zinc-700">
          Holdings performance, dividend payouts, and investor report delivery status.
        </p>
        <div className="mt-3 text-xs text-zinc-700">
          Company revenue (365d): {usd(financeSnapshot.totals.revenue_cents)} | net pre-tax:{" "}
          {usd(financeSnapshot.totals.net_income_pre_tax_cents)}
        </div>
      </SoftCard>

      <section className="grid gap-4 xl:grid-cols-2">
        {investors.map((investor) => {
          const investorHoldings = holdings.filter((entry) => entry.investor_id === investor.id);
          const activeHoldings = investorHoldings.filter((entry) => entry.status === "active");
          const totalShares = activeHoldings.reduce((acc, entry) => acc + Number(entry.shares_owned ?? 0), 0);
          const totalCostBasis = activeHoldings.reduce(
            (acc, entry) => acc + Number(entry.cost_basis_cents ?? 0),
            0,
          );
          const paidDividends = dividendPayments
            .filter((entry) => entry.investor_id === investor.id && entry.payment_status === "paid")
            .reduce((acc, entry) => acc + Number(entry.net_amount_cents ?? 0), 0);
          const dividendYield = totalCostBasis > 0 ? paidDividends / totalCostBasis : 0;

          return (
            <SoftCard key={investor.id} className="p-4">
              <h2 className="text-lg font-semibold">{investor.legal_name}</h2>
              <p className="mt-1 text-xs text-zinc-600">
                {investor.investor_type} | {investor.contact_email ?? "no-email"} | onboarding:{" "}
                {investor.onboarding_status}
              </p>
              <div className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                <p>Total active shares: {totalShares.toLocaleString()}</p>
                <p>Cost basis: {usd(totalCostBasis)}</p>
                <p>Paid dividends: {usd(paidDividends)}</p>
                <p>Cash yield on basis: {percent(dividendYield)}</p>
              </div>
              <div className="mt-3 space-y-1 text-xs">
                {activeHoldings.map((holding) => (
                  <p key={holding.id}>
                    {classById.get(holding.investor_class_id)?.class_code ?? "UNKNOWN"}:{" "}
                    {Number(holding.shares_owned ?? 0).toLocaleString()} shares
                    {holding.ownership_percent !== null
                      ? ` (${Number(holding.ownership_percent).toFixed(5)}%)`
                      : ""}
                  </p>
                ))}
                {activeHoldings.length === 0 ? <p className="text-zinc-500">No active holdings.</p> : null}
              </div>
            </SoftCard>
          );
        })}
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <SoftCard className="p-4">
          <h2 className="text-lg font-semibold">Dividend Activity</h2>
          <div className="mt-3 space-y-2 text-xs">
            {dividendPayments.slice(0, 40).map((payment) => {
              const declaration = declarationById.get(payment.declaration_id);
              return (
                <p key={payment.id}>
                  {declaration?.declaration_name ?? payment.declaration_id} | {payment.payment_status} |{" "}
                  {usd(Number(payment.net_amount_cents ?? 0))} | paid_at={payment.paid_at ?? "n/a"} |
                  ref={payment.payment_reference ?? "n/a"}
                </p>
              );
            })}
            {dividendPayments.length === 0 ? (
              <p className="text-zinc-500">No dividend payment history yet.</p>
            ) : null}
          </div>
        </SoftCard>

        <SoftCard className="p-4">
          <h2 className="text-lg font-semibold">Investor Reports</h2>
          <div className="mt-3 space-y-2 text-xs">
            {dispatches.slice(0, 40).map((dispatch) => (
              <p key={dispatch.id}>
                {dispatch.report_type} | {dispatch.delivery_status} | {dispatch.delivery_channel} |{" "}
                {dispatch.report_period_start ?? "n/a"} to {dispatch.report_period_end ?? "n/a"} | sent_at=
                {dispatch.sent_at ?? "n/a"}
              </p>
            ))}
            {dispatches.length === 0 ? <p className="text-zinc-500">No report dispatches yet.</p> : null}
          </div>
        </SoftCard>
      </section>
    </main>
  );
}
