import { NextResponse } from "next/server";
import { z } from "zod";
import { serverEnv } from "@/lib/config/env";
import { sendOrganizationInviteEmail } from "@/lib/email/organization-invite-email";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { isMissingOrganizationTableError } from "@/lib/organizations/errors";
import { requireOrganizationMembership } from "@/lib/organizations/membership";
import {
  INVITABLE_ORGANIZATION_ROLES,
  type InvitableOrganizationRole,
} from "@/lib/organizations/roles";
import {
  buildOrganizationInviteUrl,
  generateOrganizationInviteToken,
} from "@/lib/organizations/tokens";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const inviteStatusSchema = z.enum(["pending", "accepted", "expired", "revoked"]);

const querySchema = z.object({
  status: inviteStatusSchema.optional(),
  limit: z.coerce.number().int().min(1).max(250).default(100),
});

const createInviteSchema = z.object({
  email: z.string().trim().email().transform((value) => value.toLowerCase()),
  role: z.enum(INVITABLE_ORGANIZATION_ROLES).default("viewer"),
  expiresInDays: z.coerce.number().int().min(1).max(90).default(14),
  schoolName: z.string().trim().max(160).optional(),
  note: z.string().trim().max(500).optional(),
});

const patchInviteSchema = z.object({
  inviteId: z.string().uuid(),
  action: z.enum(["revoke", "resend"]),
  expiresInDays: z.coerce.number().int().min(1).max(90).optional(),
});

type OrganizationRow = {
  id: string;
  name: string;
  slug: string;
};

type InviteRow = {
  id: string;
  email: string;
  role: InvitableOrganizationRole;
  status: "pending" | "accepted" | "expired" | "revoked";
  invite_token_preview: string;
  invited_by: string;
  accepted_by: string | null;
  expires_at: string;
  accepted_at: string | null;
  metadata: Record<string, unknown> | null;
  created_at: string;
  updated_at: string;
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

function mapInvite(row: InviteRow) {
  const nowIso = new Date().toISOString();
  const expiredByTime = row.expires_at <= nowIso;
  const effectiveStatus = row.status === "pending" && expiredByTime ? "expired" : row.status;
  return {
    id: row.id,
    email: row.email,
    role: row.role,
    status: effectiveStatus,
    tokenPreview: row.invite_token_preview,
    invitedBy: row.invited_by,
    acceptedBy: row.accepted_by,
    expiresAt: row.expires_at,
    acceptedAt: row.accepted_at,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    schoolName:
      typeof row.metadata?.schoolName === "string" ? row.metadata.schoolName : null,
    note: typeof row.metadata?.note === "string" ? row.metadata.note : null,
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
    console.error("Failed to load organization for invite flow.", toSafeErrorRecord(error));
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

export async function GET(
  request: Request,
  context: { params: Promise<{ organizationId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:organizations:invites:get", {
    max: 120,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return rateLimitExceededResponse(rateLimit.retryAfterSeconds);
  }

  const url = new URL(request.url);
  const query = querySchema.safeParse({
    status: url.searchParams.get("status") ?? undefined,
    limit: url.searchParams.get("limit") ?? undefined,
  });
  if (!query.success) {
    return NextResponse.json(
      { error: "Invalid query parameters", details: query.error.flatten() },
      { status: 400 },
    );
  }

  const { organizationId } = await context.params;
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const admin = createSupabaseAdminClient();
  const membership = await requireOrganizationMembership(
    admin,
    user.id,
    organizationId,
    ["owner", "admin", "teacher", "it_manager", "viewer"],
  );
  if (!membership.ok) return membership.response;

  let queryBuilder = admin
    .from("organization_invites")
    .select("id, email, role, status, invite_token_preview, invited_by, accepted_by, expires_at, accepted_at, metadata, created_at, updated_at")
    .eq("organization_id", organizationId)
    .order("created_at", { ascending: false })
    .limit(query.data.limit);

  if (query.data.status) {
    queryBuilder = queryBuilder.eq("status", query.data.status);
  }

  const { data, error } = await queryBuilder;
  if (error) {
    if (isMissingOrganizationTableError(error)) {
      return NextResponse.json(
        { error: "Organization tables not migrated yet." },
        { status: 503 },
      );
    }
    console.error("Failed to load organization invites.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to load organization invites." }, { status: 500 });
  }

  const invites = ((data ?? []) as InviteRow[]).map(mapInvite);
  return NextResponse.json({ invites });
}

export async function POST(
  request: Request,
  context: { params: Promise<{ organizationId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:organizations:invites:post", {
    max: 60,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return rateLimitExceededResponse(rateLimit.retryAfterSeconds);
  }

  const { organizationId } = await context.params;
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const parsed = createInviteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();
  const membership = await requireOrganizationMembership(
    admin,
    user.id,
    organizationId,
    ["owner", "admin", "it_manager"],
  );
  if (!membership.ok) return membership.response;

  const organizationResult = await loadOrganization(admin, organizationId);
  if (!organizationResult.ok) return organizationResult.response;
  const organization = organizationResult.organization;

  const nowIso = new Date().toISOString();
  const { data: existingInvite, error: existingInviteError } = await admin
    .from("organization_invites")
    .select("id, expires_at")
    .eq("organization_id", organizationId)
    .eq("email", parsed.data.email)
    .eq("status", "pending")
    .gt("expires_at", nowIso)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (existingInviteError) {
    if (isMissingOrganizationTableError(existingInviteError)) {
      return NextResponse.json(
        { error: "Organization tables not migrated yet." },
        { status: 503 },
      );
    }
    console.error("Failed to check existing organization invite.", toSafeErrorRecord(existingInviteError));
    return NextResponse.json({ error: "Failed to check existing organization invites." }, { status: 500 });
  }

  if (existingInvite?.id) {
    return NextResponse.json(
      {
        error: "An active invite already exists for this email.",
        inviteId: existingInvite.id,
        expiresAt: existingInvite.expires_at,
      },
      { status: 409 },
    );
  }

  const inviteToken = generateOrganizationInviteToken();
  const expiresAt = new Date(
    Date.now() + parsed.data.expiresInDays * 24 * 60 * 60 * 1000,
  ).toISOString();
  const inviteUrl = buildOrganizationInviteUrl(
    serverEnv.NEXT_PUBLIC_APP_URL,
    inviteToken.token,
  );

  const { data: insertedInvite, error: insertError } = await admin
    .from("organization_invites")
    .insert({
      organization_id: organizationId,
      email: parsed.data.email,
      role: parsed.data.role,
      invite_token_hash: inviteToken.tokenHash,
      invite_token_preview: inviteToken.tokenPreview,
      invited_by: user.id,
      status: "pending",
      expires_at: expiresAt,
      metadata: {
        source: "api:organizations:invites:create",
        schoolName: parsed.data.schoolName ?? null,
        note: parsed.data.note ?? null,
      },
    })
    .select("id, email, role, status, invite_token_preview, invited_by, accepted_by, expires_at, accepted_at, metadata, created_at, updated_at")
    .single();

  if (insertError) {
    if (isMissingOrganizationTableError(insertError)) {
      return NextResponse.json(
        { error: "Organization tables not migrated yet." },
        { status: 503 },
      );
    }
    console.error("Failed to create organization invite.", toSafeErrorRecord(insertError));
    return NextResponse.json({ error: "Failed to create organization invite." }, { status: 500 });
  }

  const delivery = await sendOrganizationInviteEmail({
    toEmail: parsed.data.email,
    organizationName: organization.name,
    inviteUrl,
    role: parsed.data.role,
    invitedByName: user.email ?? null,
  });

  return NextResponse.json({
    invite: {
      ...mapInvite(insertedInvite as InviteRow),
      inviteUrl,
      inviteToken: inviteToken.token,
    },
    delivery,
  });
}

export async function PATCH(
  request: Request,
  context: { params: Promise<{ organizationId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:organizations:invites:patch", {
    max: 60,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return rateLimitExceededResponse(rateLimit.retryAfterSeconds);
  }

  const { organizationId } = await context.params;
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const parsed = patchInviteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();
  const membership = await requireOrganizationMembership(
    admin,
    user.id,
    organizationId,
    ["owner", "admin", "it_manager"],
  );
  if (!membership.ok) return membership.response;

  const organizationResult = await loadOrganization(admin, organizationId);
  if (!organizationResult.ok) return organizationResult.response;

  const { data: inviteData, error: inviteError } = await admin
    .from("organization_invites")
    .select("id, email, role, status, invite_token_preview, invited_by, accepted_by, expires_at, accepted_at, metadata, created_at, updated_at")
    .eq("organization_id", organizationId)
    .eq("id", parsed.data.inviteId)
    .maybeSingle();

  if (inviteError) {
    if (isMissingOrganizationTableError(inviteError)) {
      return NextResponse.json(
        { error: "Organization tables not migrated yet." },
        { status: 503 },
      );
    }
    console.error("Failed to load organization invite for patch action.", toSafeErrorRecord(inviteError));
    return NextResponse.json({ error: "Failed to load organization invite." }, { status: 500 });
  }

  const invite = inviteData as InviteRow | null;
  if (!invite) {
    return NextResponse.json({ error: "Invite not found." }, { status: 404 });
  }

  if (parsed.data.action === "revoke") {
    if (invite.status !== "pending") {
      return NextResponse.json(
        { error: "Only pending invites can be revoked." },
        { status: 409 },
      );
    }

    const { data: updated, error: updateError } = await admin
      .from("organization_invites")
      .update({
        status: "revoked",
      })
      .eq("id", invite.id)
      .eq("status", "pending")
      .select("id, email, role, status, invite_token_preview, invited_by, accepted_by, expires_at, accepted_at, metadata, created_at, updated_at")
      .maybeSingle();

    if (updateError) {
      console.error("Failed to revoke organization invite.", toSafeErrorRecord(updateError));
      return NextResponse.json({ error: "Failed to revoke organization invite." }, { status: 500 });
    }
    if (!updated) {
      return NextResponse.json(
        { error: "Invite could not be revoked because it was already updated." },
        { status: 409 },
      );
    }

    return NextResponse.json({
      invite: mapInvite(updated as InviteRow),
    });
  }

  if (invite.status === "accepted") {
    return NextResponse.json(
      { error: "Accepted invites cannot be resent." },
      { status: 409 },
    );
  }

  const inviteToken = generateOrganizationInviteToken();
  const expiresInDays = parsed.data.expiresInDays ?? 14;
  const expiresAt = new Date(
    Date.now() + expiresInDays * 24 * 60 * 60 * 1000,
  ).toISOString();
  const inviteUrl = buildOrganizationInviteUrl(serverEnv.NEXT_PUBLIC_APP_URL, inviteToken.token);

  const { data: resentInvite, error: resendError } = await admin
    .from("organization_invites")
    .update({
      status: "pending",
      accepted_by: null,
      accepted_at: null,
      expires_at: expiresAt,
      invite_token_hash: inviteToken.tokenHash,
      invite_token_preview: inviteToken.tokenPreview,
      metadata: {
        ...(invite.metadata ?? {}),
        resentAt: new Date().toISOString(),
        source: "api:organizations:invites:resend",
      },
    })
    .eq("id", invite.id)
    .select("id, email, role, status, invite_token_preview, invited_by, accepted_by, expires_at, accepted_at, metadata, created_at, updated_at")
    .single();

  if (resendError) {
    console.error("Failed to resend organization invite.", toSafeErrorRecord(resendError));
    return NextResponse.json({ error: "Failed to resend organization invite." }, { status: 500 });
  }

  const delivery = await sendOrganizationInviteEmail({
    toEmail: invite.email,
    organizationName: organizationResult.organization.name,
    inviteUrl,
    role: invite.role,
    invitedByName: user.email ?? null,
  });

  return NextResponse.json({
    invite: {
      ...mapInvite(resentInvite as InviteRow),
      inviteUrl,
      inviteToken: inviteToken.token,
    },
    delivery,
  });
}
