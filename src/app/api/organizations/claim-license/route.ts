import { NextResponse } from "next/server";
import { z } from "zod";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { hashProvisioningToken } from "@/lib/organizations/tokens";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { isMissingOrganizationTableError } from "@/lib/organizations/errors";
import { syncOrganizationPurchaseAllocationStatuses } from "@/lib/organizations/purchases";
import { logOrganizationAuditEvent } from "@/lib/organizations/audit";

const claimSchema = z.object({
  token: z.string().trim().min(12).max(200),
  studentProfileId: z.string().uuid().optional(),
  externalStudentId: z.string().trim().max(120).optional(),
  schoolName: z.string().trim().max(160).optional(),
});

type ProvisioningTokenRow = {
  id: string;
  organization_id: string;
  seats_remaining: number;
  seats_total: number;
  expires_at: string | null;
  revoked_at: string | null;
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

export async function POST(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:organizations:claim-license:post", {
    max: 80,
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
  const parsed = claimSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  if (parsed.data.studentProfileId) {
    const { data: profile, error: profileError } = await supabase
      .from("student_profiles")
      .select("id")
      .eq("id", parsed.data.studentProfileId)
      .eq("account_id", user.id)
      .maybeSingle();

    if (profileError || !profile) {
      return NextResponse.json(
        { error: "Student profile not found for current account." },
        { status: 403 },
      );
    }
  }

  const admin = createSupabaseAdminClient();
  const tokenHash = hashProvisioningToken(parsed.data.token);
  const nowIso = new Date().toISOString();

  const { data: tokenData, error: tokenError } = await admin
    .from("organization_provisioning_tokens")
    .select("id, organization_id, seats_remaining, seats_total, expires_at, revoked_at")
    .eq("token_hash", tokenHash)
    .maybeSingle();

  if (tokenError) {
    if (isMissingOrganizationTableError(tokenError)) {
      return NextResponse.json(
        { error: "Organization tables not migrated yet." },
        { status: 503 },
      );
    }
    console.error("Failed to load provisioning token during license claim.", toSafeErrorRecord(tokenError));
    return NextResponse.json({ error: "Failed to load provisioning token." }, { status: 500 });
  }

  const token = tokenData as ProvisioningTokenRow | null;
  if (!token) {
    return NextResponse.json({ error: "Provisioning token not found." }, { status: 404 });
  }

  if (token.revoked_at) {
    return NextResponse.json({ error: "Provisioning token has been revoked." }, { status: 409 });
  }

  if (token.expires_at && token.expires_at <= nowIso) {
    return NextResponse.json({ error: "Provisioning token has expired." }, { status: 409 });
  }

  if (token.seats_remaining <= 0) {
    return NextResponse.json({ error: "Provisioning token has no seats remaining." }, { status: 409 });
  }

  const { data: existingUserAssignment, error: existingUserAssignmentError } = await admin
    .from("organization_learners")
    .select("id, status")
    .eq("organization_id", token.organization_id)
    .eq("learner_user_id", user.id)
    .maybeSingle();

  if (existingUserAssignmentError && String(existingUserAssignmentError.code ?? "") !== "PGRST116") {
    console.error(
      "Failed to check existing learner assignment by user.",
      toSafeErrorRecord(existingUserAssignmentError),
    );
    return NextResponse.json({ error: "Failed to verify learner assignment state." }, { status: 500 });
  }
  if (existingUserAssignment?.id) {
    return NextResponse.json(
      {
        error:
          existingUserAssignment.status === "active"
            ? "This learner is already assigned to the organization."
            : "This learner already has an inactive organization assignment. Contact your organization administrator.",
      },
      { status: 409 },
    );
  }

  if (parsed.data.studentProfileId) {
    const { data: existingProfileAssignment, error: existingProfileAssignmentError } = await admin
      .from("organization_learners")
      .select("id, status")
      .eq("organization_id", token.organization_id)
      .eq("student_profile_id", parsed.data.studentProfileId)
      .maybeSingle();

    if (
      existingProfileAssignmentError
      && String(existingProfileAssignmentError.code ?? "") !== "PGRST116"
    ) {
      console.error(
        "Failed to check existing learner assignment by profile.",
        toSafeErrorRecord(existingProfileAssignmentError),
      );
      return NextResponse.json({ error: "Failed to verify learner assignment state." }, { status: 500 });
    }
    if (existingProfileAssignment?.id) {
      return NextResponse.json(
        {
          error:
            existingProfileAssignment.status === "active"
              ? "This student profile is already assigned to the organization."
              : "This student profile already has an inactive organization assignment. Contact your organization administrator.",
        },
        { status: 409 },
      );
    }
  }

  const { data: decrementedToken, error: decrementError } = await admin
    .from("organization_provisioning_tokens")
    .update({
      seats_remaining: token.seats_remaining - 1,
    })
    .eq("id", token.id)
    .eq("seats_remaining", token.seats_remaining)
    .gt("seats_remaining", 0)
    .select("id, seats_remaining")
    .maybeSingle();

  if (decrementError) {
    console.error("Failed to decrement provisioning token seats.", toSafeErrorRecord(decrementError));
    return NextResponse.json({ error: "Failed to reserve a seat from the provisioning token." }, { status: 500 });
  }
  if (!decrementedToken) {
    return NextResponse.json(
      { error: "Provisioning token is no longer available." },
      { status: 409 },
    );
  }

  const { data: learnerInsert, error: learnerInsertError } = await admin
    .from("organization_learners")
    .insert({
      organization_id: token.organization_id,
      learner_user_id: user.id,
      student_profile_id: parsed.data.studentProfileId ?? null,
      provisioning_token_id: token.id,
      provisioned_by_user_id: user.id,
      external_student_id: parsed.data.externalStudentId ?? null,
      school_name: parsed.data.schoolName ?? null,
      status: "active",
      metadata: {
        source: "api:organizations:claim-license",
      },
    })
    .select("id")
    .single();

  if (learnerInsertError) {
    await admin
      .from("organization_provisioning_tokens")
      .update({
        seats_remaining: token.seats_remaining,
      })
      .eq("id", token.id)
      .eq("seats_remaining", decrementedToken.seats_remaining);

    if (String(learnerInsertError.code ?? "") === "23505") {
      return NextResponse.json(
        { error: "This learner is already assigned to the organization." },
        { status: 409 },
      );
    }
    console.error("Failed to insert learner assignment for provisioning token.", toSafeErrorRecord(learnerInsertError));
    return NextResponse.json({ error: "Failed to assign learner to the organization." }, { status: 500 });
  }

  try {
    await syncOrganizationPurchaseAllocationStatuses(admin, token.organization_id);
  } catch {
    // Best-effort status synchronization.
  }

  try {
    await logOrganizationAuditEvent(admin, {
      organizationId: token.organization_id,
      actorUserId: user.id,
      eventType: "learner_assigned",
      subjectType: "organization_learner",
      subjectId: learnerInsert.id,
      metadata: {
        source: "api:organizations:claim-license",
        provisioningTokenId: token.id,
        studentProfileId: parsed.data.studentProfileId ?? null,
        externalStudentId: parsed.data.externalStudentId ?? null,
        schoolName: parsed.data.schoolName ?? null,
      },
    });
  } catch {
    // Best-effort audit logging.
  }

  return NextResponse.json({
    success: true,
    assignment: {
      id: learnerInsert.id,
      organizationId: token.organization_id,
      tokenId: token.id,
      seatsRemainingOnToken: decrementedToken.seats_remaining,
    },
  });
}
