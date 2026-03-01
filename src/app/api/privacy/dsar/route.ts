import { NextResponse } from "next/server";
import { z } from "zod";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const requestSchema = z.object({
  requestType: z.enum(["access", "erasure", "rectification", "portability", "restriction"]),
  details: z.record(z.string(), z.unknown()).optional(),
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
    .from("dsar_requests")
    .select("id, request_type, status, details, requested_at, resolved_at")
    .eq("user_id", user.id)
    .order("requested_at", { ascending: false });

  if (error) {
    console.error("Failed to load DSAR requests.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to load DSAR requests." }, { status: 500 });
  }

  return NextResponse.json({ requests: data });
}

export async function POST(request: Request) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const parsed = requestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("dsar_requests")
    .insert({
      user_id: user.id,
      request_type: parsed.data.requestType,
      details: parsed.data.details ?? {},
      status: "pending",
    })
    .select("id, request_type, status, requested_at")
    .single();

  if (error) {
    console.error("Failed to create DSAR request.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to create DSAR request." }, { status: 500 });
  }

  return NextResponse.json({ success: true, request: data });
}
