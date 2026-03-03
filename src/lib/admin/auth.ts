import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export type AdminAccessLevel = "read_only" | "full_access";

export async function requireAdminForApi() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return {
      isAuthorized: false as const,
      response: NextResponse.json({ error: "Unauthorized" }, { status: 401 }),
    };
  }

  const { data: profile, error: profileError } = await supabase
    .from("user_profiles")
    .select("is_admin, admin_access_level")
    .eq("user_id", user.id)
    .maybeSingle();

  if (profileError || !profile?.is_admin) {
    return {
      isAuthorized: false as const,
      response: NextResponse.json({ error: "Forbidden" }, { status: 403 }),
    };
  }

  const accessLevel: AdminAccessLevel =
    (profile.admin_access_level as AdminAccessLevel | null) ?? "full_access";

  return {
    isAuthorized: true as const,
    userId: user.id,
    supabase,
    accessLevel,
  };
}

/**
 * Utility: reject if the admin is read-only. Use at the top of mutating API handlers.
 */
export function requireFullAccess(accessLevel: AdminAccessLevel) {
  if (accessLevel === "read_only") {
    return NextResponse.json(
      { error: "Read-only admin access does not permit this action." },
      { status: 403 },
    );
  }
  return null;
}
