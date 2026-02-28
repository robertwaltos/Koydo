import { NextResponse } from "next/server";
import type { SupabaseClient } from "@supabase/supabase-js";
import {
  hasOrganizationRole,
  ORGANIZATION_ROLES,
  type OrganizationRole,
} from "@/lib/organizations/roles";

type OrganizationMembershipRow = {
  id: string;
  role: OrganizationRole;
  status: string;
  organization_id: string;
};

export async function requireOrganizationMembership(
  admin: SupabaseClient,
  userId: string,
  organizationId: string,
  allowedRoles: readonly OrganizationRole[],
) {
  const { data, error } = await admin
    .from("organization_memberships")
    .select("id, role, status, organization_id")
    .eq("organization_id", organizationId)
    .eq("user_id", userId)
    .maybeSingle();

  if (error) {
    return {
      ok: false as const,
      response: NextResponse.json({ error: error.message }, { status: 500 }),
    };
  }

  const membership = data as OrganizationMembershipRow | null;
  if (!membership || membership.status !== "active") {
    return {
      ok: false as const,
      response: NextResponse.json({ error: "Forbidden" }, { status: 403 }),
    };
  }

  if (!hasOrganizationRole(membership.role, allowedRoles)) {
    return {
      ok: false as const,
      response: NextResponse.json(
        {
          error: "Insufficient organization role.",
          requiredOneOf: allowedRoles,
          role: membership.role,
          validRoles: ORGANIZATION_ROLES,
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

