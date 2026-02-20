import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

export const dynamic = "force-dynamic";

function monthKeyFromDate(date: Date) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

function previousMonthKey(currentKey: string) {
  const [yearString, monthString] = currentKey.split("-");
  const year = Number(yearString);
  const month = Number(monthString);
  if (!year || !month) return currentKey;
  const date = new Date(Date.UTC(year, month - 1, 1));
  date.setUTCMonth(date.getUTCMonth() - 1);
  return monthKeyFromDate(date);
}

export default async function AdminCostsPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/auth/sign-in");
  }

  // Authorize admin
  const { data: profile, error: profileError } = await supabase
    .from("user_profiles")
    .select("is_admin")
    .eq("user_id", user.id)
    .single();

  if (profileError || !profile?.is_admin) {
    return (
      <main className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-6 px-6 py-24">
        <h1 className="text-2xl font-semibold">Access Denied</h1>
        <p className="text-center text-red-600">
          You must be an administrator to view this page.
        </p>
      </main>
    );
  }

  const admin = createSupabaseAdminClient();
  const { data: tokenData, error: tokenError } = await admin
    .from("user_tokens")
    .select("user_id, month_key, spent_usd")
    .order("month_key", { ascending: false })
    .limit(10000);

  if (tokenError) {
    return (
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-6 py-12">
        <h1 className="text-2xl font-semibold">Cost Monitoring</h1>
        <p className="text-red-600">Could not load cost data: {tokenError.message}</p>
      </main>
    );
  }

  const { data: budgetSetting } = await admin
    .from("app_settings")
    .select("value")
    .eq("key", "cost_budget_cap_usd")
    .maybeSingle();

  const configuredCap =
    typeof budgetSetting?.value === "number"
      ? budgetSetting.value
      : typeof budgetSetting?.value === "object" &&
        budgetSetting?.value !== null &&
        "value" in budgetSetting.value &&
        typeof (budgetSetting.value as { value?: unknown }).value === "number"
        ? Number((budgetSetting.value as { value?: unknown }).value)
        : null;

  const budgetCap = 1.05;
  const perUserBudgetCap = configuredCap ?? budgetCap;

  const nowMonthKey = monthKeyFromDate(new Date());
  const priorMonthKey = previousMonthKey(nowMonthKey);
  const currentRows = tokenData.filter((row) => row.month_key === nowMonthKey);
  const priorRows = tokenData.filter((row) => row.month_key === priorMonthKey);

  const currentCost = currentRows.reduce((acc, row) => acc + Number(row.spent_usd ?? 0), 0);
  const currentUsers = new Set(currentRows.map((row) => row.user_id)).size;
  const currentAvgCostPerUser = currentUsers > 0 ? currentCost / currentUsers : 0;

  const priorCost = priorRows.reduce((acc, row) => acc + Number(row.spent_usd ?? 0), 0);
  const priorUsers = new Set(priorRows.map((row) => row.user_id)).size;
  const priorAvgCostPerUser = priorUsers > 0 ? priorCost / priorUsers : 0;

  const isWithinBudget = currentAvgCostPerUser <= perUserBudgetCap;
  const monthOverMonthDelta = priorCost > 0 ? ((currentCost - priorCost) / priorCost) * 100 : 0;

  const spendByUser = new Map<string, number>();
  for (const row of currentRows) {
    spendByUser.set(row.user_id, (spendByUser.get(row.user_id) ?? 0) + Number(row.spent_usd ?? 0));
  }

  const topUserIds = Array.from(spendByUser.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([userId]) => userId);

  const { data: topProfiles } =
    topUserIds.length > 0
      ? await admin
          .from("user_profiles")
          .select("user_id, display_name")
          .in("user_id", topUserIds)
      : { data: [] as { user_id: string; display_name: string | null }[] };

  const topProfileMap = new Map((topProfiles ?? []).map((row) => [row.user_id, row.display_name]));
  const topSpenders = topUserIds.map((userId) => ({
    userId,
    displayName: topProfileMap.get(userId) ?? "Learner",
    spendUsd: spendByUser.get(userId) ?? 0,
  }));

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-6 py-12">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Cost Monitoring</h1>
        <p className="mt-2 text-zinc-500">
          AI and infrastructure spend overview for {nowMonthKey}.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow dark:bg-zinc-900">
          <h3 className="text-sm font-medium text-zinc-500">Current Month Cost</h3>
          <p className="mt-2 text-3xl font-bold">
            ${currentCost.toFixed(2)}
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            Previous month ({priorMonthKey}): ${priorCost.toFixed(2)}
          </p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow dark:bg-zinc-900">
          <h3 className="text-sm font-medium text-zinc-500">Active Users (Current Month)</h3>
          <p className="mt-2 text-3xl font-bold">{currentUsers}</p>
          <p className="mt-1 text-xs text-zinc-500">Previous month: {priorUsers}</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow dark:bg-zinc-900">
          <h3 className="text-sm font-medium text-zinc-500">Avg. Cost / User</h3>
          <p className="mt-2 text-3xl font-bold">
            ${currentAvgCostPerUser.toFixed(4)}
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            Previous month: ${priorAvgCostPerUser.toFixed(4)}
          </p>
          <p className={`mt-1 text-sm font-semibold ${isWithinBudget ? 'text-green-600' : 'text-red-600'}`}>
            {isWithinBudget ? 'Within' : 'Over'} Budget Cap (${perUserBudgetCap.toFixed(2)})
          </p>
        </div>
      </section>

      <section className="rounded-lg bg-white p-6 shadow dark:bg-zinc-900">
        <h2 className="text-lg font-semibold">Month-over-Month Change</h2>
        <p className={`mt-2 text-2xl font-bold ${monthOverMonthDelta > 0 ? "text-red-600" : "text-green-600"}`}>
          {monthOverMonthDelta >= 0 ? "+" : ""}{monthOverMonthDelta.toFixed(1)}%
        </p>
        <p className="mt-1 text-xs text-zinc-500">
          Based on total spend comparing {nowMonthKey} vs {priorMonthKey}.
        </p>
      </section>

      <section className="rounded-lg bg-white p-6 shadow dark:bg-zinc-900">
        <h2 className="text-lg font-semibold">Top Spenders (Current Month)</h2>
        <div className="mt-3 space-y-2">
          {topSpenders.map((entry) => (
            <div key={entry.userId} className="flex items-center justify-between rounded-md border border-black/10 p-3 text-sm">
              <span>{entry.displayName}</span>
              <span className="font-semibold">${entry.spendUsd.toFixed(2)}</span>
            </div>
          ))}
          {topSpenders.length === 0 ? (
            <p className="text-sm text-zinc-500">No token usage records for current month.</p>
          ) : null}
        </div>
      </section>
    </main>
  );
}
