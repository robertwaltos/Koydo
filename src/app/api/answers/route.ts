import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const answerSchema = z.object({
  skillId: z.string(),
  isCorrect: z.boolean(),
});

export async function POST(request: Request) {
  try {
    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const validation = answerSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const { skillId, isCorrect } = validation.data;

    // Fetch existing mastery
    const { data: existingMastery, error: fetchError } = await supabase
      .from("user_skill_mastery")
      .select("attempts, correct_attempts")
      .eq("user_id", user.id)
      .eq("skill_id", skillId)
      .maybeSingle();

    if (fetchError) {
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    const attempts = (existingMastery?.attempts ?? 0) + 1;
    const correct_attempts =
      (existingMastery?.correct_attempts ?? 0) + (isCorrect ? 1 : 0);
    const mastery_level =
      attempts > 0 ? correct_attempts / attempts : 0;

    const upsertData = {
      user_id: user.id,
      skill_id: skillId,
      attempts,
      correct_attempts,
      mastery_level,
    };

    // Upsert the new mastery level
    const { error: upsertError } = await supabase
      .from("user_skill_mastery")
      .upsert(upsertData);

    if (upsertError) {
      console.error("Error upserting skill mastery", upsertError);
      return NextResponse.json(
        { error: "Could not update skill mastery" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, newMasteryLevel: mastery_level });
  } catch (err) {
    console.error("Unexpected error in answers route:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
