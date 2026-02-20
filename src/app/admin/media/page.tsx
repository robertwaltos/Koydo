import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import MediaOpsClient from "./media-ops-client";

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
      <main className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-4 px-6 py-24">
        <h1 className="text-2xl font-semibold">Access Denied</h1>
        <p className="text-sm text-red-600">You must be an administrator to access media operations.</p>
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

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-12">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Media Operations</h1>
        <p className="mt-2 text-sm text-zinc-600">
          Queue and track AI-generated lesson media assets for videos, animations, and images.
        </p>
      </header>
      <MediaOpsClient initialJobs={(jobs ?? []) as MediaJob[]} />
    </main>
  );
}
