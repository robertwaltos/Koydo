import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { SupabaseClient } from "@supabase/supabase-js";
import { skills } from "@/lib/data/curriculum";

export const dynamic = "force-dynamic";

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
      <main className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-6 px-6 py-24">
        <h1 className="text-2xl font-semibold">Parent Dashboard</h1>
        <p className="text-center text-red-600">Parent role is required to view this dashboard.</p>
      </main>
    );
  }

  const { childProfile, childSkills, error } = await getChildData(
    supabase,
    user.id
  );

  if (error || !childProfile || !childSkills) {
    return (
      <main className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-6 px-6 py-24">
        <h1 className="text-2xl font-semibold">Parent Dashboard</h1>
        <p className="text-center text-red-600">{error || "Could not load child data."}</p>
        <p className="text-center text-sm text-zinc-500">
          Please ensure you are signed in with the email address used for parent consent and that your child has started using the app.
        </p>
      </main>
    );
  }

  const skillMap = new Map(skills.map((s) => [s.id, s.name]));
  const strengths = childSkills.slice(0, 3);
  const weaknesses = childSkills.filter(s => s.mastery_level < 0.7).slice(-3).reverse();

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-6 py-12">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Parent Dashboard</h1>
        <p className="mt-2 text-zinc-500">
          Viewing progress for{" "}
          <span className="font-semibold text-zinc-700 dark:text-zinc-200">
            {childProfile.display_name ?? "your child"}
          </span>
        </p>
      </header>

      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Strengths */}
        <div className="rounded-lg border border-green-500/30 bg-white p-6 shadow-sm dark:bg-zinc-900">
          <h2 className="text-xl font-bold text-green-700 dark:text-green-300">
            Recent Wins
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Your child is excelling in these areas. Great work!
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            {strengths.map((skill) => (
              <li key={skill.skill_id} className="rounded-md bg-green-50 p-3 font-medium text-green-800 dark:bg-green-900/40 dark:text-green-200">
                {skillMap.get(skill.skill_id) ?? skill.skill_id}
              </li>
            ))}
            {strengths.length === 0 && <p className="text-sm text-zinc-500">No mastered skills yet. Keep practicing!</p>}
          </ul>
        </div>

        {/* Weaknesses */}
        <div className="rounded-lg border border-amber-500/30 bg-white p-6 shadow-sm dark:bg-zinc-900">
          <h2 className="text-xl font-bold text-amber-700 dark:text-amber-300">
            Opportunities
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Here are a few areas to focus on for improvement.
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            {weaknesses.map((skill) => (
              <li key={skill.skill_id} className="rounded-md bg-amber-50 p-3 font-medium text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">
                {skillMap.get(skill.skill_id) ?? skill.skill_id}
              </li>
            ))}
             {weaknesses.length === 0 && <p className="text-sm text-zinc-500">No areas for improvement found. Amazing!</p>}
          </ul>
        </div>
      </section>

      <section className="rounded-lg bg-indigo-50 p-6 dark:bg-indigo-900/30">
        <h2 className="text-xl font-bold text-indigo-700 dark:text-indigo-200">What to do tonight (10 mins)</h2>
        <p className="mt-2 text-zinc-700 dark:text-zinc-300">
          Based on recent progress, try this simple activity: practice{" "}
          <strong className="font-semibold">
            {weaknesses.length > 0 ? (skillMap.get(weaknesses[0].skill_id) ?? weaknesses[0].skill_id) : "reviewing past lessons"}
          </strong>{" "}
          with your child. A little encouragement goes a long way!
        </p>
      </section>
    </main>
  );
}
