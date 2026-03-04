import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { serverEnv } from "@/lib/config/env";
import { buildCompanionSystemPrompt, type PersonalityContext } from "@/lib/greeter/companion-personality";
import type { CompanionMood } from "@/lib/greeter/companion-mood";

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const OPENAI_API_KEY = serverEnv.OPENAI_API_KEY ?? "";
const MODEL = "gpt-4o-mini";
const MAX_TOKENS = 200;
const MAX_HISTORY_MESSAGES = 8;

const chatMessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().trim().min(1).max(1000),
});

const chatRequestSchema = z.object({
  message: z.string().trim().min(1).max(1000),
  companionGender: z.enum(["female", "male"]),
  history: z.array(chatMessageSchema).max(MAX_HISTORY_MESSAGES).optional().default([]),
  // Personality tuning (optional — clients send if available)
  ageRange: z.string().max(10).optional(),
  mood: z.string().max(30).optional(),
  locale: z.string().max(10).optional(),
  streak: z.coerce.number().int().min(0).max(9999).optional(),
  displayName: z.string().max(100).optional(),
});

function rateLimitExceededResponse(retryAfterSeconds: number) {
  return NextResponse.json(
    { error: "Too many companion chat requests. Please retry shortly." },
    {
      status: 429,
      headers: {
        "Retry-After": String(retryAfterSeconds),
      },
    },
  );
}

export async function POST(req: NextRequest) {
  const rateLimit = await enforceIpRateLimit(req, "api:companion:chat:post", {
    max: 45,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return rateLimitExceededResponse(rateLimit.retryAfterSeconds);
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!OPENAI_API_KEY) {
    return NextResponse.json({ reply: "Chat is temporarily unavailable." }, { status: 503 });
  }

  const contentType = req.headers.get("content-type")?.toLowerCase() ?? "";
  if (contentType && !contentType.includes("application/json")) {
    return NextResponse.json({ error: "Unsupported content type." }, { status: 415 });
  }

  const rawBody = await req.json().catch(() => null);
  const parsed = chatRequestSchema.safeParse(rawBody);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { message, companionGender, history, ageRange, mood, locale, streak, displayName } = parsed.data;

  // Build personality-tuned system prompt
  const personalityCtx: PersonalityContext = {
    gender: companionGender,
    ageRange,
    mood: mood as CompanionMood | undefined,
    locale,
    streak,
    displayName,
  };
  const systemPrompt = buildCompanionSystemPrompt(personalityCtx);

  const messages: Array<{ role: string; content: string }> = [
    { role: "system", content: systemPrompt },
    ...history.slice(-MAX_HISTORY_MESSAGES).map((entry) => ({
      role: entry.role,
      content: entry.content,
    })),
    { role: "user", content: message },
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
      console.error("[companion/chat] OpenAI error.", {
        status: res.status,
        body: err.slice(0, 400),
      });
      return NextResponse.json(
        { reply: "I'm having a little trouble right now. Try again in a moment! 😊" },
        { status: 200 },
      );
    }

    const data = await res.json() as {
      choices: Array<{ message: { content: string } }>;
    };
    const reply = data.choices?.[0]?.message?.content?.trim() ?? "I didn't catch that. Could you try again?";

    // ── Log conversation to DB (companion channel) ──
    try {
      const admin = createSupabaseAdminClient();
      await admin.from("ai_tutor_conversations").insert([
        {
          user_id: user.id,
          role: "user",
          source: "user",
          message: message.slice(0, 1000),
          metadata: { channel: "companion", companionGender },
        },
        {
          user_id: user.id,
          role: "assistant",
          source: "openai",
          message: reply,
          metadata: { channel: "companion", companionGender },
        },
      ]);
    } catch (logErr) {
      console.error("[companion/chat] Failed to log conversation:", logErr);
    }

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("[companion/chat] Fetch failed.", toSafeErrorRecord(err));
    return NextResponse.json(
      { reply: "Oops! Something went wrong. Try again! 😊" },
      { status: 200 },
    );
  }
}
