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

    // Grant admin on user_profiles
    await admin
      .from("user_profiles")
      .update({
        is_admin: true,
        admin_access_level: provision.access_level,
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
      .select("is_admin, is_parent, is_teacher, is_school, is_partner, is_owner, is_investor, is_support, admin_access_level")
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
    const isOwner = Boolean((profile as { is_owner?: boolean } | null)?.is_owner);
    const isTeacher = Boolean((profile as { is_teacher?: boolean } | null)?.is_teacher);
    const isSchool = Boolean((profile as { is_school?: boolean } | null)?.is_school);
    const isPartner = Boolean((profile as { is_partner?: boolean } | null)?.is_partner);
    const isInvestor = Boolean((profile as { is_investor?: boolean } | null)?.is_investor);
    const isSupport = Boolean((profile as { is_support?: boolean } | null)?.is_support);
    const role = isOwner ? "owner" : isAdmin ? "admin" : isSupport ? "support" : isParent ? "parent" : isTeacher ? "teacher" : isSchool ? "school" : isPartner ? "partner" : isInvestor ? "investor" : "learner";

    return NextResponse.json({
      user: { id: user.id, email: user.email ?? null },
      isAuthenticated: true,
      isAdmin,
      isOwner,
      isParent,
      isTeacher,
      isSchool,
      isPartner,
      isInvestor,
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
