/**
 * Unified teacher authentication check.
 *
 * Teachers can be identified via three mechanisms:
 * 1. access_grants table (grant_type = 'teacher')
 * 2. organization_memberships (role = 'teacher')
 * 3. classroom_entities ownership (teacher_user_id)
 *
 * This module provides a single `isTeacher()` check that queries all three.
 */

import type { SupabaseClient } from "@supabase/supabase-js";

export type TeacherCheckResult = {
  isTeacher: boolean;
  /** Which mechanism(s) confirm teacher status */
  via: Array<"access_grant" | "org_membership" | "classroom_owner">;
};

/**
 * Check if a user has teacher privileges through any of the three mechanisms.
 * Short-circuits on first match for performance.
 */
export async function isTeacher(
  userId: string,
  supabase: SupabaseClient,
): Promise<TeacherCheckResult> {
  const via: TeacherCheckResult["via"] = [];

  // 1. Check access_grants (fastest — indexed)
  const { data: grants } = await supabase
    .from("access_grants")
    .select("id")
    .eq("user_id", userId)
    .eq("grant_type", "teacher")
    .eq("is_active", true)
    .limit(1);

  if (grants && grants.length > 0) {
    via.push("access_grant");
    return { isTeacher: true, via };
  }

  // 2. Check organization_memberships
  const { data: orgMemberships } = await supabase
    .from("organization_memberships")
    .select("id")
    .eq("user_id", userId)
    .eq("role", "teacher")
    .limit(1);

  if (orgMemberships && orgMemberships.length > 0) {
    via.push("org_membership");
    return { isTeacher: true, via };
  }

  // 3. Check classroom ownership
  const { data: classrooms } = await supabase
    .from("classroom_entities")
    .select("id")
    .eq("teacher_user_id", userId)
    .limit(1);

  if (classrooms && classrooms.length > 0) {
    via.push("classroom_owner");
    return { isTeacher: true, via };
  }

  return { isTeacher: false, via: [] };
}

/**
 * Quick guard — throws if user is not a teacher.
 */
export async function requireTeacher(
  userId: string,
  supabase: SupabaseClient,
): Promise<TeacherCheckResult> {
  const result = await isTeacher(userId, supabase);
  if (!result.isTeacher) {
    throw new Error("FORBIDDEN: Teacher access required.");
  }
  return result;
}
