import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const runtime = "edge";

/**
 * MMO Bridge API: Profile & Game State
 * Fetches cross-app state (like total study time, focus points)
 * to be converted into in-game currency or XP in the MMO.
 */
export async function GET(req: Request) {
  try {
    const supabase = await createSupabaseServerClient();
    
    // Auth check based on cookies for web clients, or Authorization header for external game clients
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Gather metrics to convert to MMO progress
    // Example: Study sessions from Koydo Focus, flashcard mastery, etc.
    // This is pseudo-data structure illustrating the bridge concept.
    const mmoPayload = {
      characterId: user.id,
      globalLevel: 14,
      currency: {
        focusCrystals: 1250, // Earned from Koydo Focus Pomodoro
        knowledgeShards: 8400 // Earned from mastering Flashcard decks
      },
      activeQuests: [
        { id: "quest_biology_101", status: "in_progress", progress: 45 },
        { id: "quest_focus_streak", status: "completed" }
      ]
    };

    return NextResponse.json(mmoPayload);

  } catch (err) {
    console.error("[MMO Bridge] Profile Error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
