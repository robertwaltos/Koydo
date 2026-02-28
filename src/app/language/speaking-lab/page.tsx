import { redirect } from "next/navigation";
import SoftCard from "@/app/components/ui/soft-card";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import SpeakingLabClient from "./speaking-lab-client";

export const dynamic = "force-dynamic";

type LearnerOption = {
  id: string;
  displayName: string;
  gradeLevel: string | null;
};

export default async function SpeakingLabPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect(`/auth/sign-in?next=${encodeURIComponent("/language/speaking-lab")}`);
  }

  const { data: learnerProfiles } = await supabase
    .from("student_profiles")
    .select("id, display_name, grade_level")
    .eq("account_id", user.id)
    .order("display_name", { ascending: true });

  const learners: LearnerOption[] = (learnerProfiles ?? []).map((profile) => ({
    id: profile.id,
    displayName: profile.display_name,
    gradeLevel: profile.grade_level ?? null,
  }));

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-12">
      <SoftCard as="header" organicCorners className="bg-[var(--gradient-hero)] p-6">
        <p className="ui-type-eyebrow text-cyan-700">Language Speaking Lab</p>
        <h1 className="ui-type-display-lg mt-2 text-zinc-900">
          Translation + Pronunciation Studio
        </h1>
        <p className="mt-2 text-sm text-zinc-700">
          Run guided speaking attempts with confidence-safe grading and live entitlement checks.
        </p>
      </SoftCard>

      <SpeakingLabClient learners={learners} />
    </main>
  );
}
