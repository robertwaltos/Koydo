import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

function toLetterGrade(score: number) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

export async function GET() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { data: parentProfile } = await supabase
    .from("user_profiles")
    .select("is_parent")
    .eq("user_id", user.id)
    .maybeSingle();
  if (!parentProfile?.is_parent) {
    return NextResponse.json({ error: "Parent access required." }, { status: 403 });
  }

  const parentEmail = user.email?.trim().toLowerCase();
  if (!parentEmail) {
    return NextResponse.json({ reports: [] });
  }

  const admin = createSupabaseAdminClient();
  const { data: consents, error: consentError } = await admin
    .from("parent_consents")
    .select("child_user_id")
    .eq("parent_email", parentEmail)
    .eq("status", "verified");

  if (consentError) {
    return NextResponse.json({ error: consentError.message }, { status: 500 });
  }

  const childIds = Array.from(new Set((consents ?? []).map((row) => row.child_user_id)));
  if (childIds.length === 0) {
    return NextResponse.json({ reports: [] });
  }

  const [profilesResult, masteryResult, progressResult] = await Promise.all([
    admin.from("user_profiles").select("user_id, display_name").in("user_id", childIds),
    admin
      .from("user_skill_mastery")
      .select("user_id, mastery_level, attempts, correct_attempts")
      .in("user_id", childIds),
    admin.from("user_learning_progress").select("user_id, lesson_id").in("user_id", childIds),
  ]);

  if (profilesResult.error) {
    return NextResponse.json({ error: profilesResult.error.message }, { status: 500 });
  }
  if (masteryResult.error) {
    return NextResponse.json({ error: masteryResult.error.message }, { status: 500 });
  }
  if (progressResult.error) {
    return NextResponse.json({ error: progressResult.error.message }, { status: 500 });
  }

  const profileMap = new Map((profilesResult.data ?? []).map((row) => [row.user_id, row.display_name]));
  const masteryByChild = new Map();
  for (const row of masteryResult.data ?? []) {
    const existing = masteryByChild.get(row.user_id) ?? [];
    existing.push(row);
    masteryByChild.set(row.user_id, existing);
  }

  const progressCountByChild = new Map();
  for (const row of progressResult.data ?? []) {
    progressCountByChild.set(row.user_id, (progressCountByChild.get(row.user_id) ?? 0) + 1);
  }

  const reports = childIds.map((childId) => {
    const masteryRows = masteryByChild.get(childId) ?? [];
    const avgMastery =
      masteryRows.length > 0
        ? masteryRows.reduce((acc: number, row: { mastery_level: number | null }) => acc + Number(row.mastery_level ?? 0), 0) /
          masteryRows.length
        : 0;
    const masteryPercent = Math.round(avgMastery * 100);
    const attempts = masteryRows.reduce(
      (acc: number, row: { attempts: number | null }) => acc + Number(row.attempts ?? 0),
      0,
    );
    const correct = masteryRows.reduce(
      (acc: number, row: { correct_attempts: number | null }) => acc + Number(row.correct_attempts ?? 0),
      0,
    );
    const accuracyPercent = attempts > 0 ? Math.round((correct / attempts) * 100) : 0;

    return {
      childUserId: childId,
      childDisplayName: profileMap.get(childId) ?? "Learner",
      lessonsCompleted: progressCountByChild.get(childId) ?? 0,
      masteryPercent,
      accuracyPercent,
      grade: toLetterGrade(masteryPercent),
      totalAttempts: attempts,
      totalCorrect: correct,
    };
  });

  return NextResponse.json({ reports });
}
