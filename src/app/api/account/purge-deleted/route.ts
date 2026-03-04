import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { timingSafeEqualStrings } from "@/lib/security/safe-compare";

/**
 * POST /api/account/purge-deleted
 *
 * Permanently deletes user accounts whose soft-delete grace period has expired.
 * This endpoint should be called by a scheduled cron job (e.g. daily via Vercel
 * Cron, GitHub Actions, or a similar scheduler).
 *
 * Security: Requires a bearer token matching CRON_SECRET env var.
 */
export async function POST(request: NextRequest) {
  const rateLimit = await enforceIpRateLimit(request, "api:account:purge-deleted:cron", {
    max: 20,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
    );
  }

  const headerStore = await headers();
  const authHeader = headerStore.get("authorization")?.trim() ?? "";
  const cronSecret = process.env.CRON_SECRET;
  const bearerToken = authHeader.startsWith("Bearer ")
    ? authHeader.slice("Bearer ".length).trim()
    : "";

  // Guard: require a valid cron secret to prevent unauthorized purges
  if (!cronSecret || !timingSafeEqualStrings(bearerToken, cronSecret.trim())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const admin = createSupabaseAdminClient();
  const users = [];
  const perPage = 1000;
  let page = 1;

  while (true) {
    const { data: listData, error: listError } = await admin.auth.admin.listUsers({
      page,
      perPage,
    });

    if (listError) {
      console.error("Failed to list users for purge", toSafeErrorRecord(listError));
      return NextResponse.json({ error: "Failed to list users" }, { status: 500 });
    }

    users.push(...listData.users);
    if (listData.users.length < perPage) {
      break;
    }
    page += 1;
  }

  const now = new Date();
  const purged: string[] = [];
  const errors: string[] = [];

  for (const user of users) {
    const meta = user.user_metadata;
    if (!meta?.deleted_at || !meta?.scheduled_purge_at) continue;

    const purgeAt = new Date(meta.scheduled_purge_at as string);
    if (purgeAt > now) continue; // Grace period not yet expired

    // Permanently delete the user
    const { error } = await admin.auth.admin.deleteUser(user.id, false);
    if (error) {
      console.error(`Failed to purge user ${user.id}`, toSafeErrorRecord(error));
      errors.push(user.id);
    } else {
      purged.push(user.id);
    }
  }

  return NextResponse.json({
    purgedCount: purged.length,
    errorCount: errors.length,
    scannedUsers: users.length,
  });
}
