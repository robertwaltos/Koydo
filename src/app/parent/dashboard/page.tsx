import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { SupabaseClient } from "@supabase/supabase-js";
import { skills } from "@/lib/data/curriculum";
import Link from "next/link";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";
import ParentAiInterventionsCard from "./parent-ai-interventions-card";

export const dynamic = "force-dynamic";

function toneFromPercent(value: number): "success" | "info" | "warning" {
  if (value >= 80) return "success";
  if (value >= 60) return "info";
  return "warning";
}

function toPercent(masteryLevel: number | null | undefined) {
  return Math.round(Number(masteryLevel ?? 0) * 100);
}

// Helper to find a child associated with the current user (as a parent)
async function getChildData(supabase: SupabaseClient, parentUserId: string) {
  const { data: parentProfile, error: parentError } = await supabase
    .from("user_profiles")
    .select("parent_email")
    .eq("user_id", parentUserId)
    .single();

  if (parentError || !parentProfile || !parentProfile.parent_email) {
    // This assumes the parent's primary email is used as the parent_email contact
    return { error: "Could not verify parent status." };
  }

  // Find a child user whose parent_email matches the logged-in user's email
  const { data: childProfile, error: childError } = await supabase
    .from("user_profiles")
    .select("user_id, display_name")
    .eq("parent_email", parentProfile.parent_email)
    .neq("user_id", parentUserId) // Ensure it's not the parent themselves
    .limit(1)
    .single();

  if (childError || !childProfile) {
    return { error: "No child found for this parent account." };
  }

  // Fetch the child's skill mastery data
  const { data: childSkills, error: skillsError } = await supabase
    .from("user_skill_mastery")
    .select("skill_id, mastery_level")
    .eq("user_id", childProfile.user_id)
    .order("mastery_level", { ascending: false });

  if (skillsError) {
    return { error: "Could not fetch child's progress." };
  }

  return { childProfile, childSkills };
}

export default async function ParentDashboardPage() {
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
          <h1 className="text-2xl font-semibold">Parent Dashboard</h1>
          <p className="mt-3 text-sm text-rose-700">
            Parent role is required to view this dashboard.
          </p>
        </SoftCard>
      </main>
    );
  }

  const { childProfile, childSkills, error } = await getChildData(
    supabase,
    user.id
  );

  if (error || !childProfile || !childSkills) {
    return (
      <main className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-6 py-24">
        <SoftCard className="w-full max-w-2xl border-rose-200 bg-rose-50 p-8">
          <h1 className="text-center text-2xl font-semibold">Parent Dashboard</h1>
          <p className="mt-3 text-center text-sm text-rose-700">
            {error || "Could not load child data."}
          </p>
          <p className="mt-2 text-center text-sm text-zinc-600">
            Please ensure you are signed in with the email used for parent
            consent and that your child has started using the app.
          </p>
        </SoftCard>
      </main>
    );
  }

  const skillMap = new Map(skills.map((s) => [s.id, s.name]));
  const strengths = childSkills.slice(0, 3);
  const weaknesses = childSkills
    .filter((skill) => Number(skill.mastery_level ?? 0) < 0.7)
    .sort((a, b) => Number(a.mastery_level ?? 0) - Number(b.mastery_level ?? 0))
    .slice(0, 3);
  const averageMastery =
    childSkills.length > 0
      ? Math.round(
          (childSkills.reduce(
            (total, skill) => total + Number(skill.mastery_level ?? 0),
            0,
          ) /
            childSkills.length) *
            100,
        )
      : 0;
  const readySkills = childSkills.filter(
    (skill) => Number(skill.mastery_level ?? 0) >= 0.8,
  ).length;

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-12">
      <SoftCard as="header" className="border-accent/20 bg-(--gradient-hero) p-6">
        <h1 className="text-3xl font-bold tracking-tight">Parent Dashboard</h1>
        <p className="mt-2 text-sm text-zinc-700">
          Viewing progress for{" "}
          <span className="font-semibold text-zinc-900">
            {childProfile.display_name ?? "your child"}
          </span>
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <ProgressChip
            label="Average Mastery"
            value={`${averageMastery}%`}
            tone={toneFromPercent(averageMastery)}
          />
          <ProgressChip label="Recent Wins" value={readySkills} tone="success" />
          <ProgressChip
            label="Focus Areas"
            value={weaknesses.length}
            tone={weaknesses.length === 0 ? "success" : "warning"}
          />
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/parent/reports"
            className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center justify-center border border-border bg-surface px-4 py-2 text-sm font-semibold text-foreground"
          >
            View detailed reports
          </Link>
          <Link
            href="/parent/compliance"
            className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center justify-center border border-border bg-surface px-4 py-2 text-sm font-semibold text-foreground"
          >
            Review consent history
          </Link>
        </div>
      </SoftCard>

      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <SoftCard as="section" className="border-emerald-200 p-6">
          <h2 className="text-xl font-bold text-emerald-800">Recent Wins</h2>
          <p className="mt-1 text-sm text-zinc-600">
            Your child is excelling in these areas. Great work!
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            {strengths.map((skill) => (
              <li
                key={skill.skill_id}
                className="rounded-2xl border border-emerald-200 bg-emerald-50 p-3"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-medium text-emerald-900">
                    {skillMap.get(skill.skill_id) ?? skill.skill_id}
                  </span>
                  <ProgressChip
                    label="Mastery"
                    value={`${toPercent(skill.mastery_level)}%`}
                    tone={toneFromPercent(toPercent(skill.mastery_level))}
                  />
                </div>
              </li>
            ))}
            {strengths.length === 0 ? (
              <li className="text-sm text-zinc-500">
                No mastered skills yet. Keep practicing.
              </li>
            ) : null}
          </ul>
        </SoftCard>

        <SoftCard as="section" className="border-amber-200 p-6">
          <h2 className="text-xl font-bold text-amber-800">
            Opportunities
          </h2>
          <p className="mt-1 text-sm text-zinc-600">
            Here are a few areas to focus on for improvement.
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            {weaknesses.map((skill) => (
              <li
                key={skill.skill_id}
                className="rounded-2xl border border-amber-200 bg-amber-50 p-3"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-medium text-amber-900">
                    {skillMap.get(skill.skill_id) ?? skill.skill_id}
                  </span>
                  <ProgressChip
                    label="Mastery"
                    value={`${toPercent(skill.mastery_level)}%`}
                    tone={toneFromPercent(toPercent(skill.mastery_level))}
                  />
                </div>
              </li>
            ))}
            {weaknesses.length === 0 ? (
              <li className="text-sm text-zinc-500">
                No areas for improvement found. Amazing.
              </li>
            ) : null}
          </ul>
        </SoftCard>
      </section>

      <ParentAiInterventionsCard />

      <SoftCard as="aside" organicCorners className="border-sky-200 bg-sky-50 p-6">
        <h2 className="text-xl font-bold text-sky-800">What to do tonight (10 mins)</h2>
        <p className="mt-2 text-zinc-700">
          Based on recent progress, try this simple activity: practice{" "}
          <strong className="font-semibold">
            {weaknesses.length > 0
              ? (skillMap.get(weaknesses[0].skill_id) ?? weaknesses[0].skill_id)
              : "reviewing past lessons"}
          </strong>{" "}
          with your child. A little encouragement goes a long way!
        </p>
      </SoftCard>
    </main>
  );
}
