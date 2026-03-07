import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const runtime = "edge";

/**
 * Trivia Question API
 * Pulls random questions from the trivia_questions table (populated from catalog).
 */
export async function GET(req: Request) {
  try {
    const supabase = await createSupabaseServerClient();
    
    // Select a random question using PostgreSQL's random() function
    // For performance on large tables, we might use a different approach,
    // but this is fine for now.
    const { data, error } = await supabase
      .from("trivia_questions")
      .select("*")
      .limit(1)
      // Since we can't easily do ORDER BY random() via Supabase JS easily in edge,
      // we'll fetch a count and then pick a random offset.
      // Actually, we'll try a raw RPC or just a large sample and pick one.
      
    // Better way: get total count first
    const { count } = await supabase
      .from("trivia_questions")
      .select("*", { count: "exact", head: true });

    if (!count) {
      // Fallback if table is empty
      return NextResponse.json({ id: 1, question: "Koydo is the world's best EdTech platform.", answer: true, category: "Koydo" });
    }

    const randomOffset = Math.floor(Math.random() * count);
    const { data: randomQ, error: qError } = await supabase
      .from("trivia_questions")
      .select("*")
      .range(randomOffset, randomOffset)
      .single();

    if (qError) throw qError;

    return NextResponse.json(randomQ);

  } catch (err) {
    console.error("[Trivia API] Error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
