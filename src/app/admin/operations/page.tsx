import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import OperationsConsole from "./operations-console";

export const dynamic = "force-dynamic";

export default async function AdminOperationsPage() {
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
      <main className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-4 px-6 py-24">
        <h1 className="text-2xl font-semibold">Access Denied</h1>
        <p className="text-sm text-red-600">You must be an administrator to access owner operations.</p>
      </main>
    );
  }

  const admin = createSupabaseAdminClient();
  const { data: tickets } = await admin
    .from("support_tickets")
    .select("id, user_id, subject, status, priority, created_at")
    .order("created_at", { ascending: false })
    .limit(50);

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-12">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Owner Operations Console</h1>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          Manage support, users, billing operations, pricing, and commercial campaigns.
        </p>
      </header>

      <OperationsConsole initialTickets={tickets ?? []} />
    </main>
  );
}
