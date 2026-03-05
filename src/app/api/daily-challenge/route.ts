import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getAllLearningModules } from "@/lib/modules";

// Daily challenge categories with question templates
const CHALLENGE_TEMPLATES = [
  { gameType: "quiz", difficulty: "Easy", rewardPoints: 25, prefix: "Quick Quiz" },
  { gameType: "flashcard", difficulty: "Easy", rewardPoints: 20, prefix: "Flashcard Sprint" },
  { gameType: "speed-round", difficulty: "Medium", rewardPoints: 40, prefix: "Speed Round" },
  { gameType: "deep-dive", difficulty: "Hard", rewardPoints: 60, prefix: "Deep Dive" },
  { gameType: "mystery", difficulty: "Medium", rewardPoints: 35, prefix: "Mystery Module" },
];

function getDailySeed(): number {
  const now = new Date();
  return now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
}

function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

/** GET /api/daily-challenge — get today's challenge + completion status */
export async function GET() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  const seed = getDailySeed();
  const modules = getAllLearningModules();

  if (modules.length === 0) {
    return NextResponse.json({ challenge: null, completed: false });
  }

  // Deterministic daily selection
  const moduleIndex = Math.floor(seededRandom(seed) * modules.length);
  const templateIndex = Math.floor(seededRandom(seed + 1) * CHALLENGE_TEMPLATES.length);

  const mod = modules[moduleIndex];
  const template = CHALLENGE_TEMPLATES[templateIndex];

  const challenge = {
    id: `daily-${seed}`,
    title: `${template.prefix}: ${mod.title}`,
    description: `Complete a ${template.gameType} challenge on "${mod.title}" from ${mod.subject ?? "General"}. Earn ${template.rewardPoints} bonus XP!`,
    moduleId: mod.id,
    gameType: template.gameType,
    difficulty: template.difficulty,
    rewardPoints: template.rewardPoints,
  };

  // Check completion status if authenticated
  let completed = false;
  if (user) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const { data } = await supabase
      .from("user_certificates")
      .select("id")
      .eq("user_id", user.id)
      .eq("certificate_type", "milestone")
      .eq("title", `Daily Challenge: ${seed}`)
      .maybeSingle();
    completed = !!data;
  }

  return NextResponse.json({ challenge, completed });
}

/** POST /api/daily-challenge — mark today's challenge as completed */
export async function POST(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { score } = await req.json();
  const seed = getDailySeed();

  // Prevent double completion
  const { data: existing } = await supabase
    .from("user_certificates")
    .select("id")
    .eq("user_id", user.id)
    .eq("certificate_type", "milestone")
    .eq("title", `Daily Challenge: ${seed}`)
    .maybeSingle();

  if (existing) {
    return NextResponse.json({ ok: true, alreadyCompleted: true });
  }

  // Record completion as a milestone certificate
  await supabase.from("user_certificates").insert({
    user_id: user.id,
    certificate_type: "milestone",
    title: `Daily Challenge: ${seed}`,
    description: `Completed on ${new Date().toLocaleDateString()}`,
    score: score ?? null,
  });

  // Award XP via gamification state
  const { data: state } = await supabase
    .from("gamification_states")
    .select("points")
    .eq("user_id", user.id)
    .maybeSingle();

  if (state) {
    await supabase
      .from("gamification_states")
      .update({ points: (state.points ?? 0) + 35 })
      .eq("user_id", user.id);
  }

  return NextResponse.json({ ok: true, xpAwarded: 35 });
}
