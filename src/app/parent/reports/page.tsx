import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import ParentReportsClient from "./parent-reports-client";

export const dynamic = "force-dynamic";

export default async function ParentReportsPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/auth/sign-in");
  }

  const { data: profile } = await supabase
    .from("user_profiles")
    .select("is_parent")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!profile?.is_parent) {
    return (
      <main className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-4 px-6 py-24">
        <h1 className="text-2xl font-semibold">Access Denied</h1>
        <p className="text-sm text-red-600">You must be a parent user to access reports.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-12">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Parent Reports</h1>
        <p className="mt-2 text-sm text-zinc-600">
          Detailed learner outcomes including grade, mastery, accuracy, and completion progress.
        </p>
      </header>
      <ParentReportsClient />
    </main>
  );
}
