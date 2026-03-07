import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import crypto from "crypto";

const requestSchema = z.object({
  studentProfileId: z.string().uuid(),
  validDays: z.number().int().min(1).max(30).default(7),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = requestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const { studentProfileId, validDays } = parsed.data;

  const supabase = await createSupabaseServerClient();
  const { data: { user }, error: authError } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Ensure user owns this student profile
  const { data: profile, error: profileError } = await supabase
    .from("student_profiles")
    .select("id")
    .eq("id", studentProfileId)
    .eq("account_id", user.id)
    .single();

  if (profileError || !profile) {
    return NextResponse.json({ error: "Profile not found or access denied." }, { status: 403 });
  }

  // Generate a cryptographically secure token
  const token = crypto.randomBytes(16).toString("hex");
  const expiresAt = new Date(Date.now() + validDays * 24 * 60 * 60 * 1000).toISOString();

  const { error: insertError } = await supabase
    .from("brag_sheet_links")
    .insert({
      token,
      student_profile_id: studentProfileId,
      parent_user_id: user.id,
      expires_at: expiresAt
    });

  if (insertError) {
    return NextResponse.json({ error: "Failed to generate link." }, { status: 500 });
  }

  // Return the full URL
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const shareUrl = `${baseUrl}/cheer/${token}`;

  return NextResponse.json({ success: true, url: shareUrl, expiresAt });
}
