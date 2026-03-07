import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const ACTIVE_PROFILE_COOKIE_KEY = "active_profile_id";

const requestSchema = z.object({
  checkpointUrl: z.string().min(1).max(2048),
  moduleTitle: z.string().min(1).max(255),
});

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    const parsed = requestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
    }

    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "No active profile found." }, { status: 401 });
    }

    const cookieStore = await cookies();
    const rawProfileId = cookieStore.get(ACTIVE_PROFILE_COOKIE_KEY)?.value;
    const decodedProfileId = rawProfileId ? decodeURIComponent(rawProfileId) : "";
    let studentProfileId = "";

    if (decodedProfileId) {
      const { data: ownedProfile, error: ownedProfileError } = await supabase
        .from("student_profiles")
        .select("id")
        .eq("id", decodedProfileId)
        .eq("account_id", user.id)
        .maybeSingle();

      if (!ownedProfileError && ownedProfile?.id) {
        studentProfileId = ownedProfile.id;
      }
    }

    if (!studentProfileId) {
      return NextResponse.json({ error: "No active profile found." }, { status: 401 });
    }

    const { error } = await supabase
      .from("student_profiles")
      .update({
        last_checkpoint_url: parsed.data.checkpointUrl,
        last_module_title: parsed.data.moduleTitle
      })
      .eq("id", studentProfileId);

    if (error) {
      console.error("Failed to update Quick Resume checkpoint", error);
      return NextResponse.json({ error: "Failed to save checkpoint" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
