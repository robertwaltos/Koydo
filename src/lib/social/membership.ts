import { NextResponse } from "next/server";
import type { SupabaseClient } from "@supabase/supabase-js";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { isMissingSocialTableError } from "@/lib/social/errors";
import {
  SOCIAL_COHORT_ROLES,
  hasSocialCohortRole,
  type SocialCohortRole,
} from "@/lib/social/roles";

type SocialCohortMembershipRow = {
  id: string;
  cohort_id: string;
  user_id: string;
  role: SocialCohortRole;
  status: string;
  joined_at: string;
};

export async function requireCohortMembership(
  admin: SupabaseClient,
  userId: string,
  cohortId: string,
  allowedRoles: readonly SocialCohortRole[],
) {
  const { data, error } = await admin
    .from("social_cohort_members")
    .select("id, cohort_id, user_id, role, status, joined_at")
    .eq("cohort_id", cohortId)
    .eq("user_id", userId)
    .maybeSingle();

  if (error) {
    if (isMissingSocialTableError(error)) {
      return {
        ok: false as const,
        response: NextResponse.json(
          { error: "Social cohort tables are not migrated yet." },
          { status: 503 },
        ),
      };
    }

    console.error("Failed to load social cohort membership.", toSafeErrorRecord(error));
    return {
      ok: false as const,
      response: NextResponse.json(
        { error: "Failed to verify social cohort membership." },
        { status: 500 },
      ),
    };
  }

  const membership = data as SocialCohortMembershipRow | null;
  if (!membership || membership.status !== "active") {
    return {
      ok: false as const,
      response: NextResponse.json({ error: "Forbidden" }, { status: 403 }),
    };
  }

  if (!hasSocialCohortRole(membership.role, allowedRoles)) {
    return {
      ok: false as const,
      response: NextResponse.json(
        {
          error: "Insufficient cohort role.",
          requiredOneOf: allowedRoles,
          role: membership.role,
          validRoles: SOCIAL_COHORT_ROLES,
        },
        { status: 403 },
      ),
    };
  }

  return {
    ok: true as const,
    membership,
  };
}