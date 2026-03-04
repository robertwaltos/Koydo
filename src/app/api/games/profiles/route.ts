import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

export async function GET() {
  try {
    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data, error } = await supabase
      .from("student_profiles")
      .select("id, display_name, age_years")
      .eq("account_id", user.id)
      .order("created_at", { ascending: true });

    if (error) {
      return NextResponse.json({ error: "Failed to load learner profiles." }, { status: 500 });
    }

    return NextResponse.json({
      profiles: (data ?? []).map((profile) => ({
        id: profile.id,
        displayName: profile.display_name,
        ageYears: profile.age_years,
      })),
    });
  } catch (error) {
    console.error("Unexpected /api/games/profiles error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

