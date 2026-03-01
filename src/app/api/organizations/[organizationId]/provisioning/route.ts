import { NextResponse } from "next/server";
import { z } from "zod";
import { serverEnv } from "@/lib/config/env";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { logOrganizationAuditEvent } from "@/lib/organizations/audit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { isMissingOrganizationTableError } from "@/lib/organizations/errors";
import { requireOrganizationMembership } from "@/lib/organizations/membership";
import { getOrganizationSeatSummary } from "@/lib/organizations/license-summary";
import {
  buildOrganizationProvisioningUrl,
  generateProvisioningToken,
} from "@/lib/organizations/tokens";

const postSchema = z.object({
  seats: z.coerce.number().int().min(1).max(50_000).default(1),
  expiresInDays: z.coerce.number().int().min(1).max(180).default(45),
  note: z.string().trim().max(500).optional(),
});

const patchSchema = z.object({
  tokenId: z.string().uuid(),
  action: z.enum(["revoke"]),
  note: z.string().trim().max(500).optional(),
});

type ProvisioningTokenRow = {
  id: string;
  token_preview: string;
  seats_total: number;
  seats_remaining: number;
  expires_at: string | null;
  revoked_at: string | null;
  created_at: string;
  metadata: Record<string, unknown> | null;
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

export async function GET(
  request: Request,
  context: { params: Promise<{ organizationId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:organizations:provisioning:get", {
    max: 120,
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

  const admin = createSupabaseAdminClient();
  const membership = await requireOrganizationMembership(
    admin,
    user.id,
    organizationId,
    ["owner", "admin", "teacher", "it_manager"],
  );
  if (!membership.ok) return membership.response;

  const { data, error } = await admin
    .from("organization_provisioning_tokens")
    .select("id, token_preview, seats_total, seats_remaining, expires_at, revoked_at, created_at, metadata")
    .eq("organization_id", organizationId)
    .order("created_at", { ascending: false })
    .limit(200);

  if (error) {
    if (isMissingOrganizationTableError(error)) {
      return NextResponse.json(
        { error: "Organization tables not migrated yet." },
        { status: 503 },
      );
    }
    console.error("Failed to load organization provisioning tokens.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to load provisioning tokens." }, { status: 500 });
  }

  const seatSummary = await getOrganizationSeatSummary(admin, organizationId);
  const nowIso = new Date().toISOString();
  const tokens = ((data ?? []) as ProvisioningTokenRow[]).map((row) => ({
    id: row.id,
    tokenPreview: row.token_preview,
    seatsTotal: row.seats_total,
    seatsRemaining: row.seats_remaining,
    expiresAt: row.expires_at,
    revokedAt: row.revoked_at,
    createdAt: row.created_at,
    active:
      !row.revoked_at
      && (!row.expires_at || row.expires_at > nowIso)
      && row.seats_remaining > 0,
    note:
      typeof row.metadata?.note === "string"
        ? row.metadata.note
        : null,
  }));

  return NextResponse.json({
    seatSummary,
    tokens,
  });
}

export async function POST(
  request: Request,
  context: { params: Promise<{ organizationId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:organizations:provisioning:post", {
    max: 45,
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
  const parsed = postSchema.safeParse(body);
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

  const seatSummary = await getOrganizationSeatSummary(admin, organizationId);
  if (parsed.data.seats > seatSummary.availableSeats) {
    return NextResponse.json(
      {
        error: "Requested seats exceed available unallocated licenses.",
        seatSummary,
        requestedSeats: parsed.data.seats,
      },
      { status: 409 },
    );
  }

  const token = generateProvisioningToken();
  const expiresAt = new Date(
    Date.now() + parsed.data.expiresInDays * 24 * 60 * 60 * 1000,
  ).toISOString();

  const { data: insertedToken, error: insertError } = await admin
    .from("organization_provisioning_tokens")
    .insert({
      organization_id: organizationId,
      created_by: user.id,
      token_hash: token.tokenHash,
      token_preview: token.tokenPreview,
      seats_total: parsed.data.seats,
      seats_remaining: parsed.data.seats,
      expires_at: expiresAt,
      metadata: {
        note: parsed.data.note ?? null,
      },
    })
    .select("id, token_preview, seats_total, seats_remaining, expires_at, created_at")
    .single();

  if (insertError) {
    if (isMissingOrganizationTableError(insertError)) {
      return NextResponse.json(
        { error: "Organization tables not migrated yet." },
        { status: 503 },
      );
    }
    console.error("Failed to create organization provisioning token.", toSafeErrorRecord(insertError));
    return NextResponse.json({ error: "Failed to create provisioning token." }, { status: 500 });
  }

  const provisioningUrl = buildOrganizationProvisioningUrl(
    serverEnv.NEXT_PUBLIC_APP_URL,
    token.token,
  );
  const origin = serverEnv.NEXT_PUBLIC_APP_URL.replace(/\/+$/, "");
  const qrCodeUrl = `${origin}/api/organizations/${organizationId}/provisioning/${insertedToken.id}/qr?token=${encodeURIComponent(token.token)}&format=svg`;

  try {
    await logOrganizationAuditEvent(admin, {
      organizationId,
      actorUserId: user.id,
      eventType: "provisioning_token_created",
      subjectType: "provisioning_token",
      subjectId: insertedToken.id,
      metadata: {
        source: "api:organizations:provisioning:create",
        seatsTotal: insertedToken.seats_total,
        seatsRemaining: insertedToken.seats_remaining,
        expiresAt: insertedToken.expires_at,
        note: parsed.data.note ?? null,
      },
    });
  } catch {
    // Best-effort audit logging.
  }

  return NextResponse.json({
    token: {
      id: insertedToken.id,
      value: token.token,
      tokenPreview: insertedToken.token_preview,
      provisioningUrl,
      qrCodeUrl,
      seatsTotal: insertedToken.seats_total,
      seatsRemaining: insertedToken.seats_remaining,
      expiresAt: insertedToken.expires_at,
      createdAt: insertedToken.created_at,
    },
    seatSummaryAfterReservation: {
      ...seatSummary,
      reservedSeats: seatSummary.reservedSeats + parsed.data.seats,
      availableSeats: Math.max(0, seatSummary.availableSeats - parsed.data.seats),
    },
  });
}

export async function PATCH(
  request: Request,
  context: { params: Promise<{ organizationId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:organizations:provisioning:patch", {
    max: 45,
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
  const parsed = patchSchema.safeParse(body);
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

  const { data: existingToken, error: existingTokenError } = await admin
    .from("organization_provisioning_tokens")
    .select("id, revoked_at, seats_remaining, metadata")
    .eq("organization_id", organizationId)
    .eq("id", parsed.data.tokenId)
    .maybeSingle();

  if (existingTokenError) {
    if (isMissingOrganizationTableError(existingTokenError)) {
      return NextResponse.json(
        { error: "Organization tables not migrated yet." },
        { status: 503 },
      );
    }
    console.error("Failed to load organization provisioning token.", toSafeErrorRecord(existingTokenError));
    return NextResponse.json({ error: "Failed to load provisioning token." }, { status: 500 });
  }
  if (!existingToken) {
    return NextResponse.json({ error: "Provisioning token not found." }, { status: 404 });
  }
  if (existingToken.revoked_at) {
    return NextResponse.json(
      { error: "Provisioning token is already revoked." },
      { status: 409 },
    );
  }

  const revokedAt = new Date().toISOString();
  const { data: revokedToken, error: revokeError } = await admin
    .from("organization_provisioning_tokens")
    .update({
      revoked_at: revokedAt,
      metadata: {
        ...((existingToken.metadata as Record<string, unknown> | null) ?? {}),
        revokedBy: user.id,
        revokedAt,
        revokeNote: parsed.data.note ?? null,
      },
    })
    .eq("id", existingToken.id)
    .is("revoked_at", null)
    .select("id, token_preview, seats_total, seats_remaining, expires_at, revoked_at, created_at, metadata")
    .maybeSingle();

  if (revokeError) {
    if (isMissingOrganizationTableError(revokeError)) {
      return NextResponse.json(
        { error: "Organization tables not migrated yet." },
        { status: 503 },
      );
    }
    console.error("Failed to revoke organization provisioning token.", toSafeErrorRecord(revokeError));
    return NextResponse.json({ error: "Failed to revoke provisioning token." }, { status: 500 });
  }
  if (!revokedToken) {
    return NextResponse.json(
      { error: "Provisioning token could not be revoked." },
      { status: 409 },
    );
  }

  const seatSummary = await getOrganizationSeatSummary(admin, organizationId);

  try {
    await logOrganizationAuditEvent(admin, {
      organizationId,
      actorUserId: user.id,
      eventType: "provisioning_token_revoked",
      subjectType: "provisioning_token",
      subjectId: revokedToken.id,
      metadata: {
        source: "api:organizations:provisioning:revoke",
        seatsRemaining: revokedToken.seats_remaining,
        note: parsed.data.note ?? null,
      },
    });
  } catch {
    // Best-effort audit logging.
  }

  return NextResponse.json({
    token: {
      id: revokedToken.id,
      tokenPreview: revokedToken.token_preview,
      seatsTotal: revokedToken.seats_total,
      seatsRemaining: revokedToken.seats_remaining,
      expiresAt: revokedToken.expires_at,
      revokedAt: revokedToken.revoked_at,
      createdAt: revokedToken.created_at,
      note:
        typeof revokedToken.metadata?.note === "string"
          ? revokedToken.metadata.note
          : null,
    },
    seatSummary,
  });
}
