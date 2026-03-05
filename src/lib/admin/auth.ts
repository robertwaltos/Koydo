import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { validateOwnerStepUpSession } from "@/lib/admin/owner-security";

type AdminAccessLevel = "full_access" | "read_only";

type ProfileRow = {
  is_admin: boolean;
  is_owner: boolean;
  is_support?: boolean;
  data_mode: "live" | "beta";
  admin_access_level?: string | null;
};

function hasMissingOwnerColumnError(message: string) {
  const lower = message.toLowerCase();
  return lower.includes("column") && lower.includes("is_owner") && lower.includes("does not exist");
}

async function authenticateAdminUser() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return {
      ok: false as const,
      response: NextResponse.json({ error: "Unauthorized" }, { status: 401 }),
    };
  }

  let profile: ProfileRow | null = null;

  const profileResult = await supabase
    .from("user_profiles")
    .select("is_admin,is_owner,is_support,data_mode")
    .eq("user_id", user.id)
    .maybeSingle<ProfileRow>();

  if (profileResult.error && hasMissingOwnerColumnError(profileResult.error.message)) {
    const legacyProfileResult = await supabase
      .from("user_profiles")
      .select("is_admin")
      .eq("user_id", user.id)
      .maybeSingle<{ is_admin: boolean }>();
    if (!legacyProfileResult.error && legacyProfileResult.data?.is_admin) {
      profile = {
        is_admin: true,
        is_owner: false,
        data_mode: "live",
      };
    }
  } else if (!profileResult.error && profileResult.data) {
    profile = profileResult.data;
  }

  if (!profile?.is_admin) {
    return {
      ok: false as const,
      response: NextResponse.json({ error: "Forbidden" }, { status: 403 }),
    };
  }

  const accessLevel: AdminAccessLevel =
    (profile.admin_access_level as AdminAccessLevel | null) ?? "full_access";

  return {
    ok: true as const,
    supabase,
    user,
    profile,
  };
}

export async function requireAdminForApi() {
  const auth = await authenticateAdminUser();
  if (!auth.ok) {
    return {
      isAuthorized: false as const,
      response: auth.response,
    };
  }

  return {
    isAuthorized: true as const,
    userId: auth.user.id,
    userEmail: auth.user.email ?? null,
    supabase: auth.supabase,
    profile: auth.profile,
  };
}

export async function requireOwnerForApi(options?: {
  stepUpScope?: string;
  allowedFactorTypes?: Array<"totp" | "yubikey_otp" | "secondary_email">;
}) {
  const auth = await authenticateAdminUser();
  if (!auth.ok) {
    return {
      isAuthorized: false as const,
      response: auth.response,
    };
  }

  if (!auth.profile.is_owner) {
    return {
      isAuthorized: false as const,
      response: NextResponse.json({ error: "Owner access required." }, { status: 403 }),
    };
  }

  const requiredScope = options?.stepUpScope;
  if (requiredScope) {
    const stepUp = await validateOwnerStepUpSession(auth.user.id, requiredScope);
    if (!stepUp.valid) {
      return {
        isAuthorized: false as const,
        response: NextResponse.json(
          {
            error: "Owner step-up authentication required.",
            code: "owner_step_up_required",
            scope: requiredScope,
            reason: stepUp.reason,
          },
          { status: 428 },
        ),
      };
    }
    if (options?.allowedFactorTypes && options.allowedFactorTypes.length > 0) {
      const allowed = new Set(options.allowedFactorTypes);
      if (!allowed.has(stepUp.factorType)) {
        return {
          isAuthorized: false as const,
          response: NextResponse.json(
            {
              error: "Owner step-up method does not satisfy required factor policy.",
              code: "owner_step_up_factor_policy_mismatch",
              scope: requiredScope,
              requiredFactors: options.allowedFactorTypes,
              factorType: stepUp.factorType,
            },
            { status: 428 },
          ),
        };
      }
    }
    return {
      isAuthorized: true as const,
      userId: auth.user.id,
      userEmail: auth.user.email ?? null,
      supabase: auth.supabase,
      profile: auth.profile,
      stepUp,
    };
  }

  return {
    isAuthorized: true as const,
    userId: auth.user.id,
    userEmail: auth.user.email ?? null,
    supabase: auth.supabase,
    profile: auth.profile,
  };
}

/**
 * Authenticate a support staff member OR admin.
 * Support staff can access tickets, alerts, and support-related API routes only.
 * Admins retain full access. This allows hiring support without giving full admin.
 */
export async function requireSupportOrAdminForApi() {
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

  const { data: profile } = await supabase
    .from("user_profiles")
    .select("is_admin, is_owner, is_support, admin_access_level")
    .eq("user_id", user.id)
    .maybeSingle();

  const isAdmin = Boolean(profile?.is_admin);
  const isSupport = Boolean(profile?.is_support);

  if (!isAdmin && !isSupport) {
    return {
      isAuthorized: false as const,
      response: NextResponse.json({ error: "Forbidden" }, { status: 403 }),
    };
  }

  return {
    isAuthorized: true as const,
    userId: user.id,
    userEmail: user.email ?? null,
    supabase,
    isAdmin,
    isSupport,
    profile: profile as ProfileRow,
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
