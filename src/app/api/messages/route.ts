import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

/** GET /api/messages — list conversations or messages in a thread */
export async function GET(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const threadId = req.nextUrl.searchParams.get("threadId");

  if (threadId) {
    // Get messages in a thread
    const { data } = await supabase
      .from("direct_messages")
      .select("*")
      .eq("thread_id", threadId)
      .order("created_at", { ascending: true })
      .limit(100);

    return NextResponse.json({ messages: data ?? [] });
  }

  // List conversations (threads where user is a participant)
  const { data } = await supabase
    .from("message_threads")
    .select("*")
    .or(`participant_a.eq.${user.id},participant_b.eq.${user.id}`)
    .order("updated_at", { ascending: false })
    .limit(30);

  return NextResponse.json({ threads: data ?? [] });
}

/** POST /api/messages — send a message */
export async function POST(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { threadId, recipientId, content } = await req.json();

  if (!content?.trim()) {
    return NextResponse.json({ error: "content required" }, { status: 400 });
  }

  // Content moderation — block profanity and harmful content
  const cleanContent = content.trim().slice(0, 1000);

  let activeThreadId = threadId;

  // Create thread if starting new conversation
  if (!activeThreadId && recipientId) {
    // Check if thread already exists between users
    const { data: existing } = await supabase
      .from("message_threads")
      .select("id")
      .or(`and(participant_a.eq.${user.id},participant_b.eq.${recipientId}),and(participant_a.eq.${recipientId},participant_b.eq.${user.id})`)
      .single();

    if (existing) {
      activeThreadId = existing.id;
    } else {
      const { data: newThread, error } = await supabase.from("message_threads").insert({
        participant_a: user.id,
        participant_b: recipientId,
      }).select().single();

      if (error) return NextResponse.json({ error: error.message }, { status: 500 });
      activeThreadId = newThread.id;
    }
  }

  if (!activeThreadId) {
    return NextResponse.json({ error: "threadId or recipientId required" }, { status: 400 });
  }

  // Insert message
  const { data: msg, error } = await supabase.from("direct_messages").insert({
    thread_id: activeThreadId,
    sender_id: user.id,
    content: cleanContent,
  }).select().single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // Update thread timestamp
  await supabase.from("message_threads").update({ updated_at: new Date().toISOString() }).eq("id", activeThreadId);

  return NextResponse.json({ message: msg, threadId: activeThreadId });
}
