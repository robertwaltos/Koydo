import { NextResponse } from "next/server";
import { z } from "zod";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const preferencePatchSchema = z.object({
  theme_pack: z.enum(["simple", "sunrise", "ocean", "forest", "candy", "space"]).optional(),
  theme_mode: z.enum(["system", "light", "dark"]).optional(),
  motion_pref: z.enum(["standard"]).optional(),
  contrast_pref: z.enum(["standard", "high"]).optional(),
});

export async function GET() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data, error } = await supabase
    .from("user_profiles")
    .select("theme_pack, theme_mode, motion_pref, contrast_pref")
    .eq("user_id", user.id)
    .maybeSingle();

  if (error) {
    console.error("Failed to load user preferences.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to load user preferences." }, { status: 500 });
  }

  return NextResponse.json({
    preferences: {
      theme_pack: data?.theme_pack ?? "simple",
      theme_mode: data?.theme_mode ?? "system",
      motion_pref: data?.motion_pref ?? "standard",
      contrast_pref: data?.contrast_pref ?? "standard",
    },
  });
}

export async function PATCH(request: Request) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const json = await request.json().catch(() => null);
  const parsed = preferencePatchSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  const update = parsed.data;
  if (Object.keys(update).length === 0) {
    return NextResponse.json({ ok: true });
  }

  const { error } = await supabase.from("user_profiles").upsert(
    {
      user_id: user.id,
      ...update,
    },
    { onConflict: "user_id" }
  );

  if (error) {
    console.error("Failed to update user preferences.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to update user preferences." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
