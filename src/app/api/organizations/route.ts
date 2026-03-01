import { NextResponse } from "next/server";
import { z } from "zod";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getOrganizationSeatSummary } from "@/lib/organizations/license-summary";
import { isMissingOrganizationTableError } from "@/lib/organizations/errors";
import { slugifyOrganizationName } from "@/lib/organizations/roles";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";

const createOrganizationSchema = z.object({
  name: z.string().trim().min(2).max(160),
  organizationType: z
    .enum(["school", "district", "tutoring_center", "business", "nonprofit", "other"])
    .default("school"),
  billingEmail: z.string().email().optional(),
  schoolCount: z.coerce.number().int().min(1).max(5000).default(1),
});

type OrganizationRow = {
  id: string;
  name: string;
  slug: string;
  organization_type: string;
  school_count: number;
  billing_email: string | null;
  created_at: string;
};

type MembershipRow = {
  organization_id: string;
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

async function buildUniqueOrganizationSlug(admin: ReturnType<typeof createSupabaseAdminClient>, rawName: string) {
  const base = slugifyOrganizationName(rawName) || "organization";
  let slug = base;
  let counter = 1;

  while (counter <= 50) {
    const { data, error } = await admin
      .from("organizations")
      .select("id")
      .eq("slug", slug)
      .maybeSingle();

    if (error && !isMissingOrganizationTableError(error)) {
      throw error;
    }
    if (!data) return slug;

    counter += 1;
    slug = `${base}-${counter}`;
  }

  return `${base}-${Date.now().toString(36).slice(-5)}`;
}

export async function GET(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:organizations:get", {
    max: 120,
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

  const admin = createSupabaseAdminClient();
  const { data: memberships, error: membershipError } = await admin
    .from("organization_memberships")
    .select("organization_id, role, status")
    .eq("user_id", user.id)
    .eq("status", "active");

  if (membershipError) {
    if (isMissingOrganizationTableError(membershipError)) {
      return NextResponse.json(
        { error: "Organization tables not migrated yet." },
        { status: 503 },
      );
    }
    console.error("Failed to load organization memberships.", toSafeErrorRecord(membershipError));
    return NextResponse.json({ error: "Failed to load organization memberships." }, { status: 500 });
  }

  const activeMemberships = (memberships ?? []) as MembershipRow[];
  const organizationIds = activeMemberships.map((row) => row.organization_id);
  if (organizationIds.length === 0) {
    return NextResponse.json({ organizations: [] });
  }

  const { data: organizations, error: organizationsError } = await admin
    .from("organizations")
    .select("id, name, slug, organization_type, school_count, billing_email, created_at")
    .in("id", organizationIds)
    .order("created_at", { ascending: false });

  if (organizationsError) {
    if (isMissingOrganizationTableError(organizationsError)) {
      return NextResponse.json(
        { error: "Organization tables not migrated yet." },
        { status: 503 },
      );
    }
    console.error("Failed to load organizations.", toSafeErrorRecord(organizationsError));
    return NextResponse.json({ error: "Failed to load organizations." }, { status: 500 });
  }

  const byOrgRole = new Map(activeMemberships.map((row) => [row.organization_id, row.role]));
  const rows = (organizations ?? []) as OrganizationRow[];

  const payload = await Promise.all(
    rows.map(async (row) => {
      const seatSummary = await getOrganizationSeatSummary(admin, row.id);
      return {
        id: row.id,
        name: row.name,
        slug: row.slug,
        organizationType: row.organization_type,
        schoolCount: row.school_count,
        billingEmail: row.billing_email,
        role: byOrgRole.get(row.id) ?? "viewer",
        createdAt: row.created_at,
        seats: seatSummary,
      };
    }),
  );

  return NextResponse.json({ organizations: payload });
}

export async function POST(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:organizations:post", {
    max: 30,
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
  const parsed = createOrganizationSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();
  const slug = await buildUniqueOrganizationSlug(admin, parsed.data.name);

  const { data: insertedOrg, error: organizationError } = await admin
    .from("organizations")
    .insert({
      name: parsed.data.name,
      slug,
      organization_type: parsed.data.organizationType,
      school_count: parsed.data.schoolCount,
      billing_email: parsed.data.billingEmail ?? null,
      created_by: user.id,
    })
    .select("id, name, slug, organization_type, school_count, billing_email, created_at")
    .single();

  if (organizationError) {
    if (isMissingOrganizationTableError(organizationError)) {
      return NextResponse.json(
        { error: "Organization tables not migrated yet." },
        { status: 503 },
      );
    }
    console.error("Failed to create organization.", toSafeErrorRecord(organizationError));
    return NextResponse.json({ error: "Failed to create organization." }, { status: 500 });
  }

  const { error: membershipInsertError } = await admin
    .from("organization_memberships")
    .insert({
      organization_id: insertedOrg.id,
      user_id: user.id,
      role: "owner",
      status: "active",
      invited_by: user.id,
    });

  if (membershipInsertError) {
    console.error("Failed to create owner membership for organization.", toSafeErrorRecord(membershipInsertError));
    return NextResponse.json(
      { error: "Failed to assign owner membership." },
      { status: 500 },
    );
  }

  return NextResponse.json({
    organization: {
      id: insertedOrg.id,
      name: insertedOrg.name,
      slug: insertedOrg.slug,
      organizationType: insertedOrg.organization_type,
      schoolCount: insertedOrg.school_count,
      billingEmail: insertedOrg.billing_email,
      role: "owner",
      createdAt: insertedOrg.created_at,
      seats: {
        purchasedSeats: 0,
        assignedSeats: 0,
        reservedSeats: 0,
        availableSeats: 0,
      },
    },
  });
}
