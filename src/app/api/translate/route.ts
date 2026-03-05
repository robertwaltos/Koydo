import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const SUPPORTED_LANGUAGES = [
  { code: "en", name: "English", flag: "\u{1F1FA}\u{1F1F8}" },
  { code: "es", name: "Spanish", flag: "\u{1F1EA}\u{1F1F8}" },
  { code: "fr", name: "French", flag: "\u{1F1EB}\u{1F1F7}" },
  { code: "de", name: "German", flag: "\u{1F1E9}\u{1F1EA}" },
  { code: "pt", name: "Portuguese", flag: "\u{1F1E7}\u{1F1F7}" },
  { code: "zh", name: "Chinese (Simplified)", flag: "\u{1F1E8}\u{1F1F3}" },
  { code: "ja", name: "Japanese", flag: "\u{1F1EF}\u{1F1F5}" },
  { code: "ko", name: "Korean", flag: "\u{1F1F0}\u{1F1F7}" },
  { code: "ar", name: "Arabic", flag: "\u{1F1F8}\u{1F1E6}" },
  { code: "hi", name: "Hindi", flag: "\u{1F1EE}\u{1F1F3}" },
];

/** GET /api/translate — list supported languages */
export async function GET() {
  return NextResponse.json({ languages: SUPPORTED_LANGUAGES });
}

/** POST /api/translate — translate content using AI */
export async function POST(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { text, targetLang, sourceLang } = await req.json();

  if (!text?.trim() || !targetLang) {
    return NextResponse.json({ error: "text and targetLang required" }, { status: 400 });
  }

  const targetName = SUPPORTED_LANGUAGES.find((l) => l.code === targetLang)?.name ?? targetLang;
  const sourceName = sourceLang
    ? SUPPORTED_LANGUAGES.find((l) => l.code === sourceLang)?.name ?? "English"
    : "English";

  try {
    const { serverEnv } = await import("@/lib/config/env");
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${serverEnv.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `You are a professional translator specializing in educational content. Translate the following text from ${sourceName} to ${targetName}. Maintain the educational tone, formatting, and accuracy. If the text contains technical terms, keep them accurate in the target language. Return ONLY the translated text with no additional commentary.`,
          },
          { role: "user", content: text.trim().slice(0, 5000) },
        ],
        max_tokens: 2000,
        temperature: 0.3,
      }),
    });

    const data = await response.json();
    const translation = data.choices?.[0]?.message?.content ?? "";

    return NextResponse.json({ translation, targetLang, sourceLang: sourceLang ?? "en" });
  } catch {
    return NextResponse.json({ error: "Translation failed" }, { status: 500 });
  }
}
