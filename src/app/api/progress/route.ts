import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { calculateSRS } from "@/lib/srs";

const progressUpdateSchema = z.object({
  lessonId: z.string(),
  // We'll derive a quality score from the percentage
  scorePercentage: z.number().min(0).max(1),
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
    const validation = progressUpdateSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid request body", details: validation.error.issues },
        { status: 400 }
      );
    }

    const { lessonId, scorePercentage } = validation.data;

    // Convert percentage to a 0-5 quality score
    const quality = Math.floor(scorePercentage * 5);

    // 1. Fetch existing progress
    const { data: existingProgress, error: fetchError } = await supabase
      .from("user_learning_progress")
      .select("repetitions, easiness_factor, interval")
      .eq("user_id", user.id)
      .eq("lesson_id", lessonId)
      .maybeSingle();

    if (fetchError) {
      console.error("Error fetching user progress:", fetchError);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    // 2. Calculate new SRS data
    const currentSRSData = existingProgress ?? {
      repetitions: 0,
      easiness_factor: 2.5,
      interval: 0,
    };
    const newSRSData = calculateSRS(quality, currentSRSData);

    // 3. Upsert the new progress
    const { error: upsertError } = await supabase
      .from("user_learning_progress")
      .upsert({
        user_id: user.id,
        lesson_id: lessonId,
        repetitions: newSRSData.repetitions,
        easiness_factor: newSRSData.easiness_factor,
        interval: newSRSData.interval,
        next_review_at: newSRSData.next_review_at.toISOString(),
        last_reviewed_at: new Date().toISOString(),
      });

    if (upsertError) {
      console.error("Error upserting user progress:", upsertError);
      return NextResponse.json({ error: "Could not save progress" }, { status: 500 });
    }

    return NextResponse.json({ success: true, ...newSRSData });
  } catch (err) {
    console.error("Unexpected error in progress route:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
