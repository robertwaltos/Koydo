import { NextResponse } from "next/server";
import { z } from "zod";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";

const requestSchema = z.object({
  confirmation: z.literal("DELETE"),
});

export async function POST(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:auth:account-delete", {
    max: 3,
    windowMs: 15 * 60 * 1000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many account deletion attempts. Please retry later." },
      {
        status: 429,
        headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
      },
    );
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const payload = requestSchema.safeParse(await request.json().catch(() => null));
  if (!payload.success) {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const admin = createSupabaseAdminClient();
  const { error } = await admin.auth.admin.deleteUser(user.id, false);
  if (error) {
    console.error("Failed to delete account.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to delete account." }, { status: 500 });
  }

  const { error: signOutError } = await supabase.auth.signOut();
  if (signOutError) {
    console.warn("Account deleted but failed to clear session cookie:", signOutError);
  }

  return NextResponse.json({ success: true });
}
