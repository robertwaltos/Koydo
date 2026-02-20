import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

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

  // Fetch cost data
  // For simplicity, we'll fetch all records. A real app would paginate
  // and filter by the current month.
  const { data: tokenData, error: tokenError } = await supabase
    .from("user_tokens")
    .select("user_id, spent_usd");

  if (tokenError) {
    // Render error state
    return <p className="text-red-600">Could not load cost data.</p>;
  }

  // Calculate metrics
  const monthlyCost = tokenData.reduce((acc, row) => acc + (row.spent_usd ?? 0), 0);
  const activeUsers = new Set(tokenData.map(row => row.user_id)).size;
  const avgCostPerUser = activeUsers > 0 ? monthlyCost / activeUsers : 0;
  const budgetCap = 1.05;
  const isWithinBudget = avgCostPerUser <= budgetCap;

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-6 py-12">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Cost Monitoring</h1>
        <p className="mt-2 text-zinc-500">
          Real-time AI and infrastructure cost overview.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow dark:bg-zinc-900">
          <h3 className="text-sm font-medium text-zinc-500">Total Monthly Cost</h3>
          <p className="mt-2 text-3xl font-bold">
            ${monthlyCost.toFixed(2)}
          </p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow dark:bg-zinc-900">
          <h3 className="text-sm font-medium text-zinc-500">Active Users (This Month)</h3>
          <p className="mt-2 text-3xl font-bold">{activeUsers}</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow dark:bg-zinc-900">
          <h3 className="text-sm font-medium text-zinc-500">Avg. Cost / User</h3>
          <p className="mt-2 text-3xl font-bold">
            ${avgCostPerUser.toFixed(4)}
          </p>
          <p className={`mt-1 text-sm font-semibold ${isWithinBudget ? 'text-green-600' : 'text-red-600'}`}>
            {isWithinBudget ? 'Within' : 'Over'} Budget Cap (${budgetCap.toFixed(2)})
          </p>
        </div>
      </section>
    </main>
  );
}
