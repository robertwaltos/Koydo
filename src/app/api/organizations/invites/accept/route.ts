import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { isMissingOrganizationTableError } from "@/lib/organizations/errors";
import {
  coerceOrganizationRole,
  getHigherOrganizationRole,
  type OrganizationRole,
} from "@/lib/organizations/roles";
import { hashInviteToken } from "@/lib/organizations/tokens";

const tokenSchema = z.object({
  token: z.string().trim().min(12).max(200),
});

type InviteRow = {
  id: string;
  organization_id: string;
  email: string;
  role: string;
  status: "pending" | "accepted" | "expired" | "revoked";
  invited_by: string;
  accepted_by: string | null;
  expires_at: string;
  accepted_at: string | null;
  metadata: Record<string, unknown> | null;
};

type OrganizationRow = {
  id: string;
  name: string;
  slug: string;
};

type MembershipRow = {
  id: string;
  role: string;
  status: string;
};

function rateLimitExceededResponse(retryAfterSeconds: number) {
  return NextResponse.json(
    { error: "Too many requests. Please retry shortly." },
    {
      status: 429,
      headers: {
        "Retry-After": String(retryAfterSeconds),
      },
    },
  );
}

function mapInviteStatus(invite: InviteRow) {
  const nowIso = new Date().toISOString();
  if (invite.status === "pending" && invite.expires_at <= nowIso) {
    return "expired";
  }
  return invite.status;
}

async function loadInviteByToken(
  admin: ReturnType<typeof createSupabaseAdminClient>,
  token: string,
) {
  const tokenHash = hashInviteToken(token);
  const { data, error } = await admin
    .from("organization_invites")
    .select("id, organization_id, email, role, status, invited_by, accepted_by, expires_at, accepted_at, metadata")
    .eq("invite_token_hash", tokenHash)
    .maybeSingle();

  if (error) {
    if (isMissingOrganizationTableError(error)) {
      return {
        ok: false as const,
        response: NextResponse.json(
          { error: "Organization tables not migrated yet." },
          { status: 503 },
        ),
      };
    }
    console.error("Failed to load organization invite by token.", toSafeErrorRecord(error));
    return {
      ok: false as const,
      response: NextResponse.json({ error: "Failed to load organization invite." }, { status: 500 }),
    };
  }

  const invite = data as InviteRow | null;
  if (!invite) {
    return {
      ok: false as const,
      response: NextResponse.json({ error: "Invite token not found." }, { status: 404 }),
    };
  }

  return {
    ok: true as const,
    invite,
  };
}

async function loadOrganization(
  admin: ReturnType<typeof createSupabaseAdminClient>,
  organizationId: string,
) {
  const { data, error } = await admin
    .from("organizations")
    .select("id, name, slug")
    .eq("id", organizationId)
    .maybeSingle();

  if (error) {
    if (isMissingOrganizationTableError(error)) {
      return {
        ok: false as const,
        response: NextResponse.json(
          { error: "Organization tables not migrated yet." },
          { status: 503 },
        ),
      };
    }
    console.error("Failed to load organization details.", toSafeErrorRecord(error));
    return {
      ok: false as const,
      response: NextResponse.json({ error: "Failed to load organization details." }, { status: 500 }),
    };
  }

  const organization = data as OrganizationRow | null;
  if (!organization) {
    return {
      ok: false as const,
      response: NextResponse.json({ error: "Organization not found." }, { status: 404 }),
    };
  }

  return {
    ok: true as const,
    organization,
  };
}

export async function GET(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:organizations:invites:accept:get", {
    max: 180,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return rateLimitExceededResponse(rateLimit.retryAfterSeconds);
  }

  const url = new URL(request.url);
  const parsed = tokenSchema.safeParse({
    token: url.searchParams.get("token") ?? undefined,
  });
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid token", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();
  const inviteResult = await loadInviteByToken(admin, parsed.data.token);
  if (!inviteResult.ok) return inviteResult.response;

  const organizationResult = await loadOrganization(admin, inviteResult.invite.organization_id);
  if (!organizationResult.ok) return organizationResult.response;

  return NextResponse.json({
    invite: {
      id: inviteResult.invite.id,
      organizationId: organizationResult.organization.id,
      organizationName: organizationResult.organization.name,
      organizationSlug: organizationResult.organization.slug,
      email: inviteResult.invite.email,
      role: inviteResult.invite.role,
      status: mapInviteStatus(inviteResult.invite),
      expiresAt: inviteResult.invite.expires_at,
      acceptedAt: inviteResult.invite.accepted_at,
      schoolName:
        typeof inviteResult.invite.metadata?.schoolName === "string"
          ? inviteResult.invite.metadata.schoolName
          : null,
    },
  });
}

export async function POST(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:organizations:invites:accept:post", {
    max: 90,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return rateLimitExceededResponse(rateLimit.retryAfterSeconds);
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const parsed = tokenSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  if (!user.email) {
    return NextResponse.json(
      { error: "Authenticated account is missing an email address." },
      { status: 409 },
    );
  }

  const admin = createSupabaseAdminClient();
  const inviteResult = await loadInviteByToken(admin, parsed.data.token);
  if (!inviteResult.ok) return inviteResult.response;

  const invite = inviteResult.invite;
  const effectiveStatus = mapInviteStatus(invite);
  if (effectiveStatus === "expired") {
    if (invite.status === "pending") {
      await admin
        .from("organization_invites")
        .update({ status: "expired" })
        .eq("id", invite.id)
        .eq("status", "pending");
    }
    return NextResponse.json({ error: "Invite has expired." }, { status: 409 });
  }

  if (effectiveStatus === "revoked") {
    return NextResponse.json({ error: "Invite has been revoked." }, { status: 409 });
  }

  if (effectiveStatus === "accepted") {
    return NextResponse.json({ error: "Invite has already been accepted." }, { status: 409 });
  }

  if (invite.email.toLowerCase() !== user.email.toLowerCase()) {
    return NextResponse.json(
      { error: "Invite email does not match the authenticated account." },
      { status: 403 },
    );
  }

  const inviteRole = coerceOrganizationRole(invite.role);
  if (!inviteRole) {
    return NextResponse.json(
      { error: "Invite role is invalid. Contact organization admin." },
      { status: 409 },
    );
  }

  const { data: existingMembershipData, error: existingMembershipError } = await admin
    .from("organization_memberships")
    .select("id, role, status")
    .eq("organization_id", invite.organization_id)
    .eq("user_id", user.id)
    .maybeSingle();

  if (existingMembershipError) {
    if (isMissingOrganizationTableError(existingMembershipError)) {
      return NextResponse.json(
        { error: "Organization tables not migrated yet." },
        { status: 503 },
      );
    }
    console.error("Failed to check existing organization membership.", toSafeErrorRecord(existingMembershipError));
    return NextResponse.json({ error: "Failed to check organization membership." }, { status: 500 });
  }

  const nowIso = new Date().toISOString();
  const existingMembership = existingMembershipData as MembershipRow | null;
  if (existingMembership) {
    const existingRole = coerceOrganizationRole(existingMembership.role);
    const nextRole: OrganizationRole = existingRole
      ? getHigherOrganizationRole(existingRole, inviteRole)
      : inviteRole;

    const { error: membershipUpdateError } = await admin
      .from("organization_memberships")
      .update({
        role: nextRole,
        status: "active",
        invited_by: invite.invited_by,
        metadata: {
          source: "api:organizations:invites:accept",
          inviteId: invite.id,
        },
      })
      .eq("id", existingMembership.id);

    if (membershipUpdateError) {
      console.error("Failed to update organization membership from invite.", toSafeErrorRecord(membershipUpdateError));
      return NextResponse.json({ error: "Failed to update organization membership." }, { status: 500 });
    }
  } else {
    const { error: membershipInsertError } = await admin
      .from("organization_memberships")
      .insert({
        organization_id: invite.organization_id,
        user_id: user.id,
        role: inviteRole,
        status: "active",
        invited_by: invite.invited_by,
        metadata: {
          source: "api:organizations:invites:accept",
          inviteId: invite.id,
        },
      });

    if (membershipInsertError) {
      console.error("Failed to insert organization membership from invite.", toSafeErrorRecord(membershipInsertError));
      return NextResponse.json({ error: "Failed to create organization membership." }, { status: 500 });
    }
  }

  const { error: inviteUpdateError } = await admin
    .from("organization_invites")
    .update({
      status: "accepted",
      accepted_by: user.id,
      accepted_at: nowIso,
      updated_at: nowIso,
    })
    .eq("id", invite.id)
    .eq("status", "pending");

  if (inviteUpdateError) {
    console.error("Failed to update organization invite status.", toSafeErrorRecord(inviteUpdateError));
    return NextResponse.json({ error: "Failed to update organization invite status." }, { status: 500 });
  }

  const organizationResult = await loadOrganization(admin, invite.organization_id);
  if (!organizationResult.ok) return organizationResult.response;

  return NextResponse.json({
    success: true,
    membership: {
      organizationId: organizationResult.organization.id,
      organizationName: organizationResult.organization.name,
      organizationSlug: organizationResult.organization.slug,
      role: inviteRole,
      acceptedAt: nowIso,
    },
  });
}
