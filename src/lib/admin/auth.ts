import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { validateOwnerStepUpSession } from "@/lib/admin/owner-security";

type AdminAccessLevel = "full_access" | "read_only";

type ProfileRow = {
  is_admin: boolean;
  is_owner: boolean;
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
    .select("is_admin,is_owner,data_mode")
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
