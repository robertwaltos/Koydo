import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { getAppSetting } from "@/lib/settings/app-settings";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const VOYAGER_FULL_ACCESS_CLASSES = [
  "beta_tester",
  "admin",
  "support",
  "teacher",
  "school",
  "partner",
] as const;

export type VoyagerAccessClass = (typeof VOYAGER_FULL_ACCESS_CLASSES)[number];

export type VoyagerAccessDecision = {
  fullAccess: boolean;
  accessMode: "full_beta" | "coming_soon";
  allowedClasses: VoyagerAccessClass[];
  matchedClasses: VoyagerAccessClass[];
  activeGrantTypes: string[];
  reason: string;
  userId: string | null;
  checkedAt: string;
};

type ProfileRoleRow = {
  is_admin?: boolean | null;
  is_support?: boolean | null;
  is_teacher?: boolean | null;
  is_school?: boolean | null;
  is_partner?: boolean | null;
};

type GrantRow = {
  grant_type?: string | null;
  expires_at?: string | null;
};

type OrgMembershipRow = {
  role?: string | null;
  status?: string | null;
};

function buildDecision(input: {
  userId: string | null;
  matchedClasses?: Iterable<VoyagerAccessClass>;
  activeGrantTypes?: string[];
  reason: string;
}): VoyagerAccessDecision {
  const matchedClasses = Array.from(new Set(input.matchedClasses ?? []));
  const fullAccess = matchedClasses.length > 0;

  return {
    fullAccess,
    accessMode: fullAccess ? "full_beta" : "coming_soon",
    allowedClasses: [...VOYAGER_FULL_ACCESS_CLASSES],
    matchedClasses,
    activeGrantTypes: input.activeGrantTypes ?? [],
    reason: input.reason,
    userId: input.userId,
    checkedAt: new Date().toISOString(),
  };
}

function isMissingTableError(error: unknown) {
  if (!error || typeof error !== "object") return false;
  const code = "code" in error ? String((error as { code?: unknown }).code ?? "") : "";
  const message = "message" in error ? String((error as { message?: unknown }).message ?? "") : "";
  const lowered = message.toLowerCase();
  return (
    code === "42P01" ||
    code === "PGRST205" ||
    lowered.includes("does not exist") ||
    lowered.includes("could not find the table")
  );
}

async function resolveVoyagerAccessForUserId(userId: string): Promise<VoyagerAccessDecision> {
  try {
    const admin = createSupabaseAdminClient();
    const betaTesterFullAccess = Boolean(
      await getAppSetting<boolean>("beta_tester_full_access", true),
    );

    const [profileResult, grantsResult, classroomResult, orgMembershipsResult] = await Promise.all([
      admin
        .from("user_profiles")
        .select("is_admin, is_support, is_teacher, is_school, is_partner")
        .eq("user_id", userId)
        .maybeSingle<ProfileRoleRow>(),
      admin
        .from("access_grants")
        .select("grant_type, expires_at")
        .eq("user_id", userId)
        .eq("grant_type", "beta_tester")
        .eq("is_active", true),
      admin
        .from("classroom_entities")
        .select("id")
        .eq("teacher_user_id", userId)
        .limit(1),
      admin
        .from("organization_memberships")
        .select("role, status")
        .eq("user_id", userId)
        .in("role", ["owner", "admin", "teacher", "it_manager"]),
    ]);

    if (profileResult.error && !isMissingTableError(profileResult.error)) {
      console.error("Voyager access profile lookup failed.", toSafeErrorRecord(profileResult.error));
    }
    if (grantsResult.error && !isMissingTableError(grantsResult.error)) {
      console.error("Voyager access grant lookup failed.", toSafeErrorRecord(grantsResult.error));
    }
    if (classroomResult.error && !isMissingTableError(classroomResult.error)) {
      console.error("Voyager access classroom lookup failed.", toSafeErrorRecord(classroomResult.error));
    }
    if (orgMembershipsResult.error && !isMissingTableError(orgMembershipsResult.error)) {
      console.error("Voyager access organization lookup failed.", toSafeErrorRecord(orgMembershipsResult.error));
    }

    const matchedClasses = new Set<VoyagerAccessClass>();
    const profile = profileResult.data ?? null;
    if (profile?.is_admin) matchedClasses.add("admin");
    if (profile?.is_support) matchedClasses.add("support");
    if (profile?.is_teacher) matchedClasses.add("teacher");
    if (profile?.is_school) matchedClasses.add("school");
    if (profile?.is_partner) matchedClasses.add("partner");

    const now = Date.now();
    const activeGrantTypes = (grantsResult.data as GrantRow[] | null ?? [])
      .filter((grant) => {
        if (!grant?.grant_type) return false;
        if (!grant.expires_at) return true;
        const expiresAtMs = new Date(grant.expires_at).getTime();
        return Number.isFinite(expiresAtMs) && expiresAtMs > now;
      })
      .map((grant) => String(grant.grant_type));

    if (betaTesterFullAccess && activeGrantTypes.includes("beta_tester")) {
      matchedClasses.add("beta_tester");
    }

    if ((classroomResult.data ?? []).length > 0) {
      matchedClasses.add("teacher");
    }

    const activeMemberships = (orgMembershipsResult.data as OrgMembershipRow[] | null ?? []).filter(
      (membership) => {
        const status = membership.status?.toLowerCase();
        return !status || status === "active";
      },
    );

    if (activeMemberships.some((membership) => membership.role === "teacher")) {
      matchedClasses.add("teacher");
    }
    if (
      activeMemberships.some((membership) =>
        membership.role === "owner"
        || membership.role === "admin"
        || membership.role === "it_manager",
      )
    ) {
      matchedClasses.add("school");
    }

    return buildDecision({
      userId,
      matchedClasses,
      activeGrantTypes,
      reason:
        matchedClasses.size > 0
          ? `granted:${Array.from(matchedClasses).join(",")}`
          : "restricted_to_beta_classes",
    });
  } catch (error) {
    console.error("Voyager access check failed.", toSafeErrorRecord(error));
    return buildDecision({
      userId,
      reason: "access_check_failed",
    });
  }
}

export async function resolveVoyagerAccessForServerRequest(): Promise<VoyagerAccessDecision> {
  try {
    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error || !user) {
      return buildDecision({
        userId: null,
        reason: "unauthenticated",
      });
    }

    return resolveVoyagerAccessForUserId(user.id);
  } catch (error) {
    console.error("Voyager auth context failed.", toSafeErrorRecord(error));
    return buildDecision({
      userId: null,
      reason: "auth_context_unavailable",
    });
  }
}
