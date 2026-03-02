import { NextRequest, NextResponse } from "next/server";

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

interface ChatRequestBody {
  message: string;
  companionGender: "female" | "male";
  history?: ChatMessage[];
}

const OPENAI_API_KEY = process.env.OPENAI_API_KEY ?? "";
const MODEL = "gpt-4o-mini";
const MAX_TOKENS = 200;

const COMPANION_SYSTEM_PROMPT = (gender: "female" | "male") => {
  const name = gender === "female" ? "Aria" : "Kai";
  const personality =
    gender === "female"
      ? "You are Aria, a warm, nurturing, and endlessly patient learning companion on Koydo. You celebrate every small win with genuine excitement. You use phrases like 'Great job!', 'You're so smart!', 'I believe in you!', and 'Let's figure this out together!' You are like a kind older sister or favorite teacher."
      : "You are Kai, an energetic, enthusiastic learning companion on Koydo who makes everything feel like an adventure. You use phrases like 'Awesome!', 'Let's GO!', 'You totally got this!', 'Challenge accepted!', and 'That was EPIC!' You are like a cool older brother or a coach who gets excited about every topic.";

  return `${personality}

IMPORTANT RULES:
1. You ONLY discuss topics covered in the Koydo educational curriculum: math, science, language arts, history, geography, coding, arts, music, and life skills.
2. If asked about anything outside Koydo curriculum, gently redirect: "I can only help with Koydo learning topics! Want to explore [relevant subject]?"
3. Keep responses SHORT (2-3 sentences max). This is a quick helper chat, not a lecture.
4. Never discuss politics, religion, adult content, violence, or personal information.
5. Always be encouraging and age-appropriate.
6. Your name is ${name} and you work for Koydo.`;
};

export async function POST(req: NextRequest) {
  if (!OPENAI_API_KEY) {
    return NextResponse.json({ reply: "Chat is temporarily unavailable." }, { status: 503 });
  }

  let body: ChatRequestBody;
  try {
    body = await req.json() as ChatRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { message, companionGender, history = [] } = body;

  if (!message?.trim()) {
    return NextResponse.json({ error: "message is required" }, { status: 400 });
  }

  if (!companionGender || !["female", "male"].includes(companionGender)) {
    return NextResponse.json({ error: "companionGender must be female or male" }, { status: 400 });
  }

  // Build OpenAI messages array
  const messages: Array<{ role: string; content: string }> = [
    { role: "system", content: COMPANION_SYSTEM_PROMPT(companionGender) },
    // Include up to last 8 history messages
    ...history.slice(-8).map((m) => ({ role: m.role, content: m.content })),
    { role: "user", content: message.slice(0, 1000) },
  ];

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        messages,
        max_tokens: MAX_TOKENS,
        temperature: 0.8,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("[companion/chat] OpenAI error:", err);
      return NextResponse.json(
        { reply: "I'm having a little trouble right now. Try again in a moment! 😊" },
        { status: 200 },
      );
    }

    const data = await res.json() as {
      choices: Array<{ message: { content: string } }>;
    };
    const reply = data.choices?.[0]?.message?.content?.trim() ?? "I didn't catch that. Could you try again?";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("[companion/chat] Fetch failed:", err);
    return NextResponse.json(
      { reply: "Oops! Something went wrong. Try again! 😊" },
      { status: 200 },
    );
  }
}
