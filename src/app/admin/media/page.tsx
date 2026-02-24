import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import MediaOpsClient from "./media-ops-client";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";

export const dynamic = "force-dynamic";

type MediaJob = {
  id: string;
  module_id: string | null;
  lesson_id: string | null;
  asset_type: "video" | "animation" | "image";
  provider: string;
  prompt: string;
  status: "queued" | "running" | "completed" | "failed" | "canceled";
  output_url: string | null;
  error: string | null;
  created_at: string;
  updated_at: string;
  completed_at: string | null;
};

export default async function AdminMediaPage() {
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
    .select("is_admin")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!profile?.is_admin) {
    return (
      <main className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-6 py-24">
        <SoftCard className="w-full max-w-2xl border-rose-200 bg-rose-50 p-8 text-center">
          <h1 className="text-2xl font-semibold">Access Denied</h1>
          <p className="mt-3 text-sm text-rose-700">
            You must be an administrator to access media operations.
          </p>
        </SoftCard>
      </main>
    );
  }

  const admin = createSupabaseAdminClient();
  const { data: jobs } = await admin
    .from("media_generation_jobs")
    .select(
      "id, module_id, lesson_id, asset_type, provider, prompt, status, output_url, error, created_at, updated_at, completed_at",
    )
    .order("created_at", { ascending: false })
    .limit(100);

  const initialJobs = (jobs ?? []) as MediaJob[];
  const queuedCount = initialJobs.filter((job) => job.status === "queued").length;
  const runningCount = initialJobs.filter((job) => job.status === "running").length;
  const failedCount = initialJobs.filter((job) => job.status === "failed").length;

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-12">
      <SoftCard as="header" className="border-accent/20 bg-[var(--gradient-hero)] p-6">
        <h1 className="text-3xl font-semibold tracking-tight">Media Operations</h1>
        <p className="mt-2 text-sm text-zinc-700">
          Queue and track AI-generated lesson media assets for videos, animations, and images.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <ProgressChip label="Queued" value={queuedCount} tone={queuedCount > 0 ? "warning" : "success"} />
          <ProgressChip label="Running" value={runningCount} tone="info" />
          <ProgressChip label="Failed" value={failedCount} tone={failedCount > 0 ? "warning" : "neutral"} />
        </div>
      </SoftCard>
      <MediaOpsClient initialJobs={initialJobs} />
    </main>
  );
}
