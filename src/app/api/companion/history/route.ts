import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";

const MAX_STORED_MESSAGES = 50;

const chatMessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().trim().min(1).max(1000),
});

const saveRequestSchema = z.object({
  companionGender: z.enum(["female", "male"]),
  messages: z.array(chatMessageSchema).max(MAX_STORED_MESSAGES),
  mood: z.string().max(50).optional(),
});

/**
 * GET /api/companion/history?gender=female|male
 *
 * Load saved companion chat history for cross-device continuity.
 */
export async function GET(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const gender = req.nextUrl.searchParams.get("gender");
  if (gender !== "female" && gender !== "male") {
    return NextResponse.json({ error: "Invalid gender param" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("companion_chat_history")
    .select("messages, mood, total_messages_sent, last_active_at")
    .eq("user_id", user.id)
    .eq("companion_gender", gender)
    .single();

  if (error && error.code !== "PGRST116") {
    console.error("[companion/history] Read failed:", error.message);
    return NextResponse.json({ error: "Failed to load history" }, { status: 500 });
  }

  return NextResponse.json({
    messages: (data?.messages as Array<{ role: string; content: string }>) ?? [],
    mood: data?.mood ?? "neutral",
    totalMessagesSent: data?.total_messages_sent ?? 0,
    lastActiveAt: data?.last_active_at ?? null,
  });
}

/**
 * POST /api/companion/history
 *
 * Save companion chat history. Upserts — creates if not exists.
 */
export async function POST(req: NextRequest) {
  const rateLimit = await enforceIpRateLimit(req, "api:companion:history:post", {
    max: 30,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many saves. Please retry shortly." },
      {
        status: 429,
        headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
      },
    );
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const rawBody = await req.json().catch(() => null);
  const parsed = saveRequestSchema.safeParse(rawBody);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { companionGender, messages, mood } = parsed.data;

  // Trim to last N messages
  const trimmed = messages.slice(-MAX_STORED_MESSAGES);

  const { error } = await supabase
    .from("companion_chat_history")
    .upsert(
      {
        user_id: user.id,
        companion_gender: companionGender,
        messages: trimmed,
        mood: mood ?? "neutral",
        total_messages_sent: trimmed.filter((m) => m.role === "user").length,
        last_active_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id,companion_gender" },
    );

  if (error) {
    console.error("[companion/history] Save failed:", error.message);
    return NextResponse.json({ error: "Failed to save history" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
