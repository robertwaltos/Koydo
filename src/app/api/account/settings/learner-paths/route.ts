import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { consumeParentChangeChallenge } from "@/lib/security/parent-change-confirmation";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const requestSchema = z.object({
  profileId: z.string().uuid(),
  pathAllowlist: z.array(z.string().min(1).max(120)).max(300).nullable(),
  challengeId: z.string().uuid(),
});

function normalizeAllowlist(value: string[] | null): string[] | null {
  if (!Array.isArray(value)) return null;
  const normalized = Array.from(
    new Set(
      value
        .map((entry) => entry.trim())
        .filter((entry) => entry.length > 0),
    ),
  );
  return normalized.length > 0 ? normalized : [];
}

export async function POST(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:account:settings:learner-paths:update", {
    max: 25,
    windowMs: 60 * 60 * 1000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many learner settings update attempts. Please retry later." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
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
    return NextResponse.json({ error: "Invalid payload.", details: payload.error.flatten() }, { status: 400 });
  }

  const normalizedAllowlist = normalizeAllowlist(payload.data.pathAllowlist);
  if (normalizedAllowlist && normalizedAllowlist.length === 0) {
    return NextResponse.json({ error: "Select at least one learning path in custom mode." }, { status: 400 });
  }

  try {
    await consumeParentChangeChallenge({
      userId: user.id,
      challengeId: payload.data.challengeId,
      scope: "student_profile_settings",
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Verification challenge is invalid." },
      { status: 400 },
    );
  }

  const { data: profile, error: profileError } = await supabase
    .from("student_profiles")
    .select("id, account_id")
    .eq("id", payload.data.profileId)
    .maybeSingle<{ id: string; account_id: string }>();
  if (profileError || !profile || profile.account_id !== user.id) {
    return NextResponse.json({ error: "Learner profile not found." }, { status: 404 });
  }

  const { error: updateError } = await supabase
    .from("student_profiles")
    .update({
      path_allowlist: normalizedAllowlist,
    })
    .eq("id", payload.data.profileId)
    .eq("account_id", user.id);

  if (updateError) {
    console.error("Failed to update learner path allowlist.", toSafeErrorRecord(updateError));
    return NextResponse.json({ error: "Unable to save learner path settings." }, { status: 500 });
  }

  return NextResponse.json({
    success: true,
    profileId: payload.data.profileId,
    pathAllowlist: normalizedAllowlist,
  });
}
