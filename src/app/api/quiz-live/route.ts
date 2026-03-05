import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

// Sample quiz questions for live games
const QUIZ_POOLS: Record<string, Array<{ question: string; options: string[]; answer: number }>> = {
  math: [
    { question: "What is 12 × 8?", options: ["86", "96", "106", "88"], answer: 1 },
    { question: "What is the square root of 144?", options: ["11", "12", "13", "14"], answer: 1 },
    { question: "What is 15% of 200?", options: ["25", "30", "35", "40"], answer: 1 },
    { question: "Solve: 3x + 7 = 22", options: ["x = 3", "x = 5", "x = 7", "x = 4"], answer: 1 },
    { question: "What is 2^8?", options: ["128", "256", "512", "64"], answer: 1 },
    { question: "What is the area of a circle with radius 5?", options: ["25\u03C0", "10\u03C0", "50\u03C0", "5\u03C0"], answer: 0 },
  ],
  science: [
    { question: "What gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: 2 },
    { question: "What is the chemical symbol for gold?", options: ["Go", "Gd", "Au", "Ag"], answer: 2 },
    { question: "How many planets are in our solar system?", options: ["7", "8", "9", "10"], answer: 1 },
    { question: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "1,000,000 km/s"], answer: 0 },
    { question: "What is the hardest natural substance?", options: ["Gold", "Iron", "Diamond", "Platinum"], answer: 2 },
  ],
  history: [
    { question: "In what year did World War II end?", options: ["1943", "1944", "1945", "1946"], answer: 2 },
    { question: "Who was the first President of the United States?", options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"], answer: 2 },
    { question: "The Great Wall of China was mainly built to protect against invasions from?", options: ["Japan", "Mongolia", "Korea", "Russia"], answer: 1 },
    { question: "What ancient civilization built the pyramids?", options: ["Romans", "Greeks", "Egyptians", "Persians"], answer: 2 },
    { question: "In what year did the Titanic sink?", options: ["1910", "1912", "1914", "1916"], answer: 1 },
  ],
  english: [
    { question: "What is a synonym for 'benevolent'?", options: ["Cruel", "Kind", "Angry", "Lazy"], answer: 1 },
    { question: "What is the past tense of 'swim'?", options: ["Swimmed", "Swam", "Swum", "Swimming"], answer: 1 },
    { question: "Which is an example of a metaphor?", options: ["She ran like the wind", "Time is money", "The wind howled", "As brave as a lion"], answer: 1 },
    { question: "What part of speech is 'quickly'?", options: ["Adjective", "Noun", "Adverb", "Verb"], answer: 2 },
  ],
};

/** GET /api/quiz-live — get a quiz game or list active games */
export async function GET(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const gameId = req.nextUrl.searchParams.get("gameId");

  if (gameId) {
    const { data } = await supabase
      .from("quiz_games")
      .select("*")
      .eq("id", gameId)
      .single();

    const { data: scores } = await supabase
      .from("quiz_game_scores")
      .select("*")
      .eq("game_id", gameId)
      .order("score", { ascending: false });

    return NextResponse.json({ game: data, scores: scores ?? [] });
  }

  // List active/recent games
  const { data } = await supabase
    .from("quiz_games")
    .select("*")
    .in("status", ["waiting", "active"])
    .order("created_at", { ascending: false })
    .limit(10);

  return NextResponse.json({ games: data ?? [] });
}

/** POST /api/quiz-live — create game, join, or submit answers */
export async function POST(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();

  if (body.action === "create") {
    const { subject, questionCount } = body;
    const pool = QUIZ_POOLS[subject ?? "math"] ?? QUIZ_POOLS.math;
    const count = Math.min(questionCount ?? 5, pool.length);

    // Shuffle and pick questions
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, count);

    const { data, error } = await supabase.from("quiz_games").insert({
      host_id: user.id,
      subject: subject ?? "math",
      questions: shuffled,
      status: "waiting",
      player_count: 1,
    }).select().single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ game: data });
  }

  if (body.action === "join") {
    const { gameId } = body;
    // Increment player count directly (RPC not required)
    const { data: game } = await supabase
      .from("quiz_games")
      .select("player_count")
      .eq("id", gameId)
      .single();
    await supabase.from("quiz_games").update({
      player_count: (game?.player_count ?? 1) + 1,
    }).eq("id", gameId);
    return NextResponse.json({ ok: true });
  }

  if (body.action === "submit-score") {
    const { gameId, score, totalQuestions, timeMs } = body;

    const { error } = await supabase.from("quiz_game_scores").upsert({
      game_id: gameId,
      user_id: user.id,
      score: score ?? 0,
      total_questions: totalQuestions ?? 5,
      time_ms: timeMs ?? 0,
    });

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ error: "Invalid action" }, { status: 400 });
}
