import { NextResponse } from "next/server";
import { z } from "zod";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";

const createTicketSchema = z.object({
  subject: z.string().min(3).max(120),
  description: z.string().min(5).max(4000).optional(),
  priority: z.enum(["low", "normal", "high"]).default("normal"),
});

export async function GET() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data, error } = await supabase
    .from("support_tickets")
    .select("id, subject, status, priority, created_at, updated_at, resolved_at")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to load support tickets.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to load support tickets." }, { status: 500 });
  }

  return NextResponse.json({ tickets: data });
}

export async function POST(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:support:tickets:post", {
    max: 12,
    windowMs: 60 * 60 * 1_000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many support ticket requests. Please retry later." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
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

  const payload = createTicketSchema.safeParse(await request.json().catch(() => null));
  if (!payload.success) {
    return NextResponse.json({ error: "Invalid payload", details: payload.error.flatten() }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("support_tickets")
    .insert({
      user_id: user.id,
      subject: payload.data.subject,
      description: payload.data.description ?? null,
      priority: payload.data.priority,
    })
    .select("id, subject, status, priority, created_at")
    .single();

  if (error) {
    console.error("Failed to create support ticket.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to create support ticket." }, { status: 500 });
  }

  return NextResponse.json({ success: true, ticket: data });
}
