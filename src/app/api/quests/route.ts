import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { requireFeature } from "@/lib/platform/require-feature";
import { selectQuestsForPeriod } from "@/lib/gamification/quests";

/**
 * GET /api/quests?profileId=<id> — Get active/completed quests
 */
export async function GET(request: Request) {
  const gate = await requireFeature("quest_system", request);
  if (gate) return gate;

  const url = new URL(request.url);
  const profileId = url.searchParams.get("profileId");
  if (!profileId) return NextResponse.json({ error: "profileId required" }, { status: 400 });

  const supabase = await createSupabaseServerClient();
  const { data } = await supabase
    .from("quests")
    .select("*")
    .eq("profile_id", profileId)
    .in("status", ["active", "completed"])
    .order("started_at", { ascending: false })
    .limit(10);

  // If no active quests, generate new ones
  if (!data || data.filter((q: { status: string }) => q.status === "active").length === 0) {
    const templates = selectQuestsForPeriod();
    const admin = createSupabaseAdminClient();
    const now = new Date().toISOString();
    const newQuests = [...templates.daily, ...templates.weekly].map((t) => ({
      quest_template_id: t.id,
      profile_id: profileId,
      current_count: 0,
      target_count: t.targetCount,
      xp_reward: t.xpReward,
      status: "active",
      started_at: now,
      completed_at: null,
    }));

    const { data: inserted } = await admin
      .from("quests")
      .insert(newQuests)
      .select("*");

    return NextResponse.json({ quests: [...(inserted ?? []), ...(data ?? [])] });
  }

  return NextResponse.json({ quests: data ?? [] });
}
