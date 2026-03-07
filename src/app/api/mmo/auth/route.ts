import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const runtime = "edge";

/**
 * MMO Bridge API: Authentication verification
 * Used by external game servers (e.g. Unity/Unreal/Custom) to verify
 * a user's Koydo session token and check subscription status.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { token } = body;

    if (!token) {
      return NextResponse.json({ error: "Missing session token" }, { status: 400 });
    }

    const supabase = await createSupabaseServerClient();
    
    // In a real scenario, the external server passes the JWT, and we verify it against Supabase Auth.
    // For this bridge, we assume the token is a valid Supabase JWT.
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      return NextResponse.json({ error: "Invalid or expired token", code: "AUTH_FAILED" }, { status: 401 });
    }

    // Fetch the user's profile and active subscription tier
    const { data: profile } = await supabase
      .from("user_profiles")
      .select("id, full_name, plan_tier")
      .eq("user_id", user.id)
      .maybeSingle();

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: profile?.full_name || "Unknown Adventurer",
        tier: profile?.plan_tier || "free"
      }
    });

  } catch (err) {
    console.error("[MMO Bridge] Auth Error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
