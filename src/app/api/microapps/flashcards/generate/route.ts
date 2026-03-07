import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const runtime = "edge";

const GEMINI_API_KEY = process.env.GOOGLE_API_KEY;
const MODEL_NAME = "gemini-2.5-pro"; // Rely on the robust 2.5 model

export async function POST(req: Request) {
  try {
    const supabase = await createSupabaseServerClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    // Require authentication for the API
    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Optional: Check if user has active Koydo Master subscription or 'Pro' tier here.

    const body = await req.json();
    const { topic } = body;

    if (!topic || typeof topic !== "string") {
      return NextResponse.json({ error: "Topic is required" }, { status: 400 });
    }

    const prompt = `You are an expert pedagogical AI. Generate a 20-card flashcard deck about "${topic}".
    The target audience is an advanced high school or university student.
    
    Output strictly in JSON format matching this schema:
    {
      "deckTitle": "A concise title",
      "cards": [
        { "front": "The concept or question", "back": "The detailed answer or definition" }
      ]
    }
    
    Do not wrap in markdown blocks, just return raw JSON.`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.2,
            responseMimeType: "application/json",
          }
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini API Error:", errorText);
      return NextResponse.json({ error: "Failed to generate deck from AI Provider" }, { status: 502 });
    }

    const data = await response.json();
    const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!candidateText) {
      return NextResponse.json({ error: "Empty response from AI" }, { status: 500 });
    }

    const generatedData = JSON.parse(candidateText);

    // ── Save the generated deck to Supabase ──────────────────────────────────
    const { data: insertedDeck, error: insertError } = await supabase
      .from("flashcard_decks")
      .insert({
        user_id: user.id,
        title: generatedData.deckTitle,
        cards: generatedData.cards,
      })
      .select()
      .single();

    if (insertError) {
      console.error("Supabase Insert Error:", insertError);
      // Fallback: Still return the JSON so the user can see it, even if save failed
    }

    return NextResponse.json({
      ...generatedData,
      id: insertedDeck?.id,
    });
  } catch (error) {
    console.error("Flashcard generation error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
