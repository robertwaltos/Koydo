import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import ParentReportsClient from "./parent-reports-client";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";

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
      <main className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-6 py-24">
        <SoftCard className="w-full max-w-2xl border-rose-200 bg-rose-50 p-8 text-center">
          <h1 className="text-2xl font-semibold">Access Denied</h1>
          <p className="mt-3 text-sm text-rose-700">
            You must be a parent user to access reports.
          </p>
        </SoftCard>
      </main>
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-12">
      <SoftCard as="header" className="border-accent/20 bg-[var(--gradient-hero)] p-6">
        <h1 className="text-3xl font-semibold tracking-tight">Parent Reports</h1>
        <p className="mt-2 text-sm text-zinc-700">
          Detailed learner outcomes including grade, mastery, accuracy, and completion progress.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <ProgressChip label="Scope" value="All linked children" tone="info" />
          <ProgressChip label="Metrics" value="Grade, mastery, accuracy" tone="neutral" />
        </div>
      </SoftCard>
      <ParentReportsClient />
    </main>
  );
}
