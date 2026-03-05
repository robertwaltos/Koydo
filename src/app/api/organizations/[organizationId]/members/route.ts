import { NextResponse } from "next/server";
import { z } from "zod";
import { requireOrganizationMembership } from "@/lib/organizations/membership";
import { logOrganizationAuditEvent } from "@/lib/organizations/audit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

/**
 * GET /api/organizations/[organizationId]/members
 * List all members of the organization. Requires admin or owner role.
 */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ organizationId: string }> },
) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { organizationId } = await params;
  const admin = createSupabaseAdminClient();

  const membership = await requireOrganizationMembership(
    admin, user.id, organizationId, ["owner", "admin"],
  );
  if (!membership.ok) return membership.response;

  const { data, error } = await admin
    .from("organization_memberships")
    .select("id, user_id, role, status, created_at, updated_at")
    .eq("organization_id", organizationId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to list members.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  return NextResponse.json({ members: data });
}

const updateSchema = z.object({
  action: z.enum(["suspend", "reactivate", "remove"]),
  userId: z.string().uuid(),
});

/**
 * PATCH /api/organizations/[organizationId]/members
 * Suspend, reactivate, or remove a member. Requires owner or admin role.
 * Suspending/removing a teacher cascades: deactivates their classroom enrollments.
 */
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ organizationId: string }> },
) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = updateSchema.safeParse(await request.json().catch(() => null));
  if (!body.success) {
    return NextResponse.json({ error: "Invalid payload", details: body.error.flatten() }, { status: 400 });
  }

  const { organizationId } = await params;
  const { action, userId: targetUserId } = body.data;
  const admin = createSupabaseAdminClient();

  // Verify actor has admin/owner role
  const membership = await requireOrganizationMembership(
    admin, user.id, organizationId, ["owner", "admin"],
  );
  if (!membership.ok) return membership.response;

  // Prevent self-suspension or self-removal
  if (targetUserId === user.id) {
    return NextResponse.json({ error: "Cannot modify your own membership." }, { status: 400 });
  }

  // Fetch target membership
  const { data: targetMember } = await admin
    .from("organization_memberships")
    .select("id, role, status")
    .eq("organization_id", organizationId)
    .eq("user_id", targetUserId)
    .maybeSingle();

  if (!targetMember) {
    return NextResponse.json({ error: "Member not found." }, { status: 404 });
  }

  // Prevent admins from modifying owners
  if (targetMember.role === "owner" && membership.membership.role !== "owner") {
    return NextResponse.json({ error: "Cannot modify an owner." }, { status: 403 });
  }

  try {
    if (action === "suspend") {
      await admin
        .from("organization_memberships")
        .update({ status: "suspended", updated_at: new Date().toISOString() })
        .eq("id", targetMember.id);

      // Cascade: deactivate classrooms owned by this teacher
      if (targetMember.role === "teacher") {
        await cascadeTeacherRevocation(admin, targetUserId, organizationId);
      }
    } else if (action === "reactivate") {
      await admin
        .from("organization_memberships")
        .update({ status: "active", updated_at: new Date().toISOString() })
        .eq("id", targetMember.id);
    } else if (action === "remove") {
      // Cascade before deletion
      if (targetMember.role === "teacher") {
        await cascadeTeacherRevocation(admin, targetUserId, organizationId);
      }

      await admin
        .from("organization_memberships")
        .delete()
        .eq("id", targetMember.id);
    }

    // Audit trail
    await logOrganizationAuditEvent(admin, {
      organizationId,
      actorUserId: user.id,
      eventType: `member.${action}`,
      subjectType: "organization_membership",
      subjectId: targetMember.id,
      metadata: {
        targetUserId,
        targetRole: targetMember.role,
        previousStatus: targetMember.status,
      },
    });

    return NextResponse.json({ success: true, action });
  } catch (error) {
    console.error("Member update failed.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

/**
 * When a teacher is suspended or removed, deactivate all enrollments
 * in their classrooms so learners are no longer linked to that teacher.
 */
async function cascadeTeacherRevocation(
  admin: ReturnType<typeof createSupabaseAdminClient>,
  teacherUserId: string,
  organizationId: string,
) {
  // Find all classrooms owned by this teacher in this org
  const { data: classrooms } = await admin
    .from("classroom_entities")
    .select("id")
    .eq("teacher_user_id", teacherUserId)
    .eq("organization_id", organizationId);

  if (!classrooms || classrooms.length === 0) return;

  const classroomIds = classrooms.map((c) => c.id);

  // Deactivate enrollments in those classrooms
  await admin
    .from("class_enrollments")
    .update({ status: "inactive", updated_at: new Date().toISOString() })
    .in("classroom_id", classroomIds);

  // Audit the cascade
  await logOrganizationAuditEvent(admin, {
    organizationId,
    actorUserId: teacherUserId,
    eventType: "teacher.cascade_revocation",
    subjectType: "classroom_entities",
    metadata: {
      classroomIds,
      reason: "teacher_membership_revoked",
    },
  });
}
