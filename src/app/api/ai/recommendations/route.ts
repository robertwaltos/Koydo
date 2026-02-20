import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getAllLearningModules } from "@/lib/modules";

export async function GET() {
  try {
    const learningModules = getAllLearningModules();
    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 1. Fetch user's skill mastery
    const { data: skillMastery, error: masteryError } = await supabase
      .from("user_skill_mastery")
      .select("skill_id, mastery_level")
      .eq("user_id", user.id)
      .order("mastery_level", { ascending: true });

    if (masteryError) {
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    // 2. Identify weakest skill
    // For this mock, we'll just pick the one with the lowest mastery level.
    // A real implementation would be more sophisticated.
    const weakestSkill = skillMastery?.[0];

    // --- MOCK AI LOGIC ---
    console.log("--- Mock AI Recommendation ---");
    console.log("User:", user.id);
    console.log("All Skill Masteries:", skillMastery);
    console.log("Identified Weakest Skill:", weakestSkill?.skill_id);

    let recommendedLessonId = null;

    if (weakestSkill) {
      // 3. Find a lesson that teaches this skill
      for (const learningModule of learningModules) {
        for (const lesson of learningModule.lessons) {
          if (lesson.questions?.some((q) => q.skillId === weakestSkill.skill_id)) {
            // Found a lesson that contains the weak skill.
            // A real app might find an introductory video lesson instead of another quiz.
            recommendedLessonId = lesson.id;
            break;
          }
        }
        if (recommendedLessonId) break;
      }
    }

    console.log("Recommended Lesson:", recommendedLessonId);
    console.log("-----------------------------");
    // --- END MOCK AI LOGIC ---

    if (!recommendedLessonId) {
      return NextResponse.json({ recommendation: null });
    }
    
    // 4. Return the recommended lesson
    // Find the full lesson object to return it
    const recommendedLesson = learningModules
      .flatMap((m) => m.lessons)
      .find((l) => l.id === recommendedLessonId);

    return NextResponse.json({ recommendation: recommendedLesson });

  } catch (err) {
    console.error("Unexpected error in recommendations route:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
