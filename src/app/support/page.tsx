import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import SupportClient from "./support-client";

export const dynamic = "force-dynamic";

export default async function SupportPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/auth/sign-in");
  }

  const { data: tickets } = await supabase
    .from("support_tickets")
    .select("id, subject, status, priority, created_at, updated_at")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Support Center</h1>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          Report issues, track support status, and receive resolution updates.
        </p>
      </header>
      <SupportClient initialTickets={tickets ?? []} />
    </main>
  );
}
