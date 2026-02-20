import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function GET() {
  try {
    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error || !user) {
      return NextResponse.json({
        user: null,
        isAuthenticated: false,
        isAdmin: false,
        isParent: false,
        role: "guest",
      });
    }

    const { data: profile } = await supabase
      .from("user_profiles")
      .select("is_admin, is_parent")
      .eq("user_id", user.id)
      .maybeSingle();

    const isAdmin = Boolean(profile?.is_admin);
    const isParent = Boolean(profile?.is_parent);
    const role = isAdmin ? "admin" : isParent ? "parent" : "learner";

    return NextResponse.json({
      user: { id: user.id, email: user.email ?? null },
      isAuthenticated: true,
      isAdmin,
      isParent,
      role,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Unable to load auth context.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
