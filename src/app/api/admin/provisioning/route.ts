/**
 * Admin Provisioning API — Pre-provision email addresses with admin access levels.
 *
 * When a user with a provisioned email signs up, the system can auto-grant them
 * the correct admin access level (read-only or full-access).
 *
 * Table: admin_provisions
 *   - id (uuid PK)
 *   - email (text, unique, lowercase)
 *   - access_level ("read_only" | "full_access")
 *   - provisioned_by (uuid FK → auth.users)
 *   - notes (text, nullable)
 *   - claimed_at (timestamptz, null until user signs up)
 *   - claimed_by (uuid, null until user signs up)
 *   - is_active (boolean, default true)
 *   - created_at (timestamptz)
 *   - updated_at (timestamptz)
 */

import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/admin/audit";
import { enforceAdminActionRateLimit } from "@/lib/admin/rate-limit";

const provisionSchema = z.object({
  email: z.string().email().transform((e) => e.trim().toLowerCase()),
  access_level: z.enum(["read_only", "full_access"]),
  notes: z.string().max(500).optional(),
});

const revokeSchema = z.object({
  id: z.string().uuid(),
});

// ── GET: List all provisioned emails ────────────────────────────────────────

export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("admin_provisions")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json(
      { error: "Failed to load provisions", detail: error.message },
      { status: 500 },
    );
  }

  return NextResponse.json({ provisions: data ?? [] });
}

// ── POST: Create a new provision ────────────────────────────────────────────

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  // Rate limit: 30 provisions per hour
  const rate = await enforceAdminActionRateLimit({
    adminUserId: auth.userId,
    actionType: "admin_provision_create",
    windowSeconds: 3600,
    maxActions: 30,
  });
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Rate limit exceeded. Try again later." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = provisionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const { email, access_level, notes } = parsed.data;
  const admin = createSupabaseAdminClient();

  // Check for existing provision
  const { data: existing } = await admin
    .from("admin_provisions")
    .select("id, is_active")
    .eq("email", email)
    .maybeSingle();

  if (existing?.is_active) {
    return NextResponse.json(
      { error: "This email is already provisioned." },
      { status: 409 },
    );
  }

  // Upsert: reactivate if previously revoked, or insert new
  const now = new Date().toISOString();
  if (existing) {
    const { error } = await admin
      .from("admin_provisions")
      .update({
        access_level,
        notes: notes ?? null,
        provisioned_by: auth.userId,
        is_active: true,
        claimed_at: null,
        claimed_by: null,
        updated_at: now,
      })
      .eq("id", existing.id);

    if (error) {
      return NextResponse.json(
        { error: "Failed to update provision", detail: error.message },
        { status: 500 },
      );
    }
  } else {
    const { error } = await admin.from("admin_provisions").insert({
      email,
      access_level,
      notes: notes ?? null,
      provisioned_by: auth.userId,
      is_active: true,
      created_at: now,
      updated_at: now,
    });

    if (error) {
      return NextResponse.json(
        { error: "Failed to create provision", detail: error.message },
        { status: 500 },
      );
    }
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "admin_provision_create",
    metadata: { email, access_level },
  });

  return NextResponse.json({ success: true, email, access_level });
}

// ── DELETE: Revoke a provision ──────────────────────────────────────────────

export async function DELETE(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = revokeSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();

  // Get current provision to log details
  const { data: provision } = await admin
    .from("admin_provisions")
    .select("email, access_level")
    .eq("id", parsed.data.id)
    .maybeSingle();

  const { error } = await admin
    .from("admin_provisions")
    .update({ is_active: false, updated_at: new Date().toISOString() })
    .eq("id", parsed.data.id);

  if (error) {
    return NextResponse.json(
      { error: "Failed to revoke provision", detail: error.message },
      { status: 500 },
    );
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "admin_provision_revoke",
    metadata: { provisionId: parsed.data.id, email: provision?.email },
  });

  return NextResponse.json({ success: true });
}
