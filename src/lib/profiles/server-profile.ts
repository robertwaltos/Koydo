import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { ACTIVE_PROFILE_COOKIE_KEY } from "./active-profile";

/**
 * Retrieves the currently active profile for the authenticated user.
 * Validates ownership. If invalid or missing, redirects to profile selection.
 */
export async function getActiveProfileOrRedirect() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const cookieStore = await cookies();
  const profileId = cookieStore.get(ACTIVE_PROFILE_COOKIE_KEY)?.value;

  if (!profileId) {
    redirect("/select-profile");
  }

  // Validate ownership
  const { data: profile, error } = await supabase
    .from("student_profiles")
    .select("*")
    .eq("id", decodeURIComponent(profileId))
    .eq("account_id", user.id)
    .single();

  if (error || !profile) {
    // Cookie exists but is invalid or belongs to another user
    redirect("/select-profile");
  }

  return profile;
}

/**
 * Verifies if the given profile ID belongs to the current user.
 * Returns the profile if valid, null otherwise.
 */
export async function verifyProfileOwnership(profileId: string) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return null;

  const { data: profile, error } = await supabase
    .from("student_profiles")
    .select("id, account_id, grade_level, age_years, display_name")
    .eq("id", profileId)
    .eq("account_id", user.id)
    .single();

  if (error || !profile) return null;

  return profile;
}
