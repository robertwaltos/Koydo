import { NextResponse } from "next/server";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

/**
 * Check for an unclaimed admin provision matching this user's email.
 * If found, auto-grant the is_admin flag + admin_access_level on user_profiles
 * and mark the provision as claimed.
 */
async function claimAdminProvision(userId: string, email: string | undefined) {
  if (!email) return;

  try {
    const admin = createSupabaseAdminClient();

    const { data: provision } = await admin
      .from("admin_provisions")
      .select("id, access_level")
      .eq("email", email.toLowerCase())
      .eq("is_active", true)
      .is("claimed_at", null)
      .maybeSingle();

    if (!provision) return;

    // Grant admin or support on user_profiles based on provision access_level
    const isSupport = provision.access_level === "support";
    await admin
      .from("user_profiles")
      .update({
        is_admin: isSupport ? false : true,
        is_support: isSupport ? true : false,
        admin_access_level: isSupport ? null : provision.access_level,
      })
      .eq("user_id", userId);

    // Mark provision as claimed
    await admin
      .from("admin_provisions")
      .update({
        claimed_at: new Date().toISOString(),
        claimed_by: userId,
        updated_at: new Date().toISOString(),
      })
      .eq("id", provision.id);
  } catch {
    // Non-critical: don't break auth context if provision check fails
  }
}

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
        adminAccessLevel: null,
      });
    }

    const { data: profile } = await supabase
      .from("user_profiles")
      .select("is_admin, is_parent, is_support, admin_access_level")
      .eq("user_id", user.id)
      .maybeSingle();

    let isAdmin = Boolean(profile?.is_admin);
    let adminAccessLevel: string | null =
      (profile?.admin_access_level as string | null) ?? null;

    // Auto-claim admin provision if not yet admin
    if (!isAdmin) {
      await claimAdminProvision(user.id, user.email);

      // Re-check after potential claim
      const { data: refreshed } = await supabase
        .from("user_profiles")
        .select("is_admin, admin_access_level")
        .eq("user_id", user.id)
        .maybeSingle();

      if (refreshed?.is_admin) {
        isAdmin = true;
        adminAccessLevel = (refreshed.admin_access_level as string | null) ?? null;
      }
    }

    const isParent = Boolean(profile?.is_parent);
    const isSupport = Boolean(profile?.is_support);
    const role = isAdmin ? "admin" : isSupport ? "support" : isParent ? "parent" : "learner";

    return NextResponse.json({
      user: { id: user.id, email: user.email ?? null },
      isAuthenticated: true,
      isAdmin,
      isParent,
      isSupport,
      role,
      adminAccessLevel,
    });
  } catch (error) {
    console.error("Unable to load auth context.", toSafeErrorRecord(error));
    return NextResponse.json(
      {
        error: "Unable to load auth context.",
      },
      { status: 500 }
    );
  }
}
