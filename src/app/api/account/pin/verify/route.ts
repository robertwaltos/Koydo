import { NextResponse } from "next/server";
import { z } from "zod";
import crypto from "node:crypto";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const PORTAL_TYPES = ["parent", "admin", "investor", "partner", "teacher", "school", "support"] as const;

const requestSchema = z.object({
  portalType: z.enum(PORTAL_TYPES),
  pin: z.string().regex(/^\d{6,8}$/, "PIN must be 6-8 digits"),
});

function hashPin(pin: string, salt: string): string {
  return crypto.pbkdf2Sync(pin, salt, 100_000, 64, "sha512").toString("hex");
}

export async function POST(request: Request) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const parsed = requestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  const { data: pinRecord } = await supabase
    .from("portal_pins")
    .select("pin_hash")
    .eq("user_id", user.id)
    .eq("portal_type", parsed.data.portalType)
    .maybeSingle();

  if (!pinRecord) {
    return NextResponse.json({ error: "No PIN set for this portal", needsSetup: true }, { status: 404 });
  }

  const [salt, storedHash] = pinRecord.pin_hash.split(":");
  if (!salt || !storedHash) {
    return NextResponse.json({ error: "Corrupted PIN data" }, { status: 500 });
  }

  const inputHash = hashPin(parsed.data.pin, salt);
  const verified = crypto.timingSafeEqual(
    Buffer.from(storedHash, "hex"),
    Buffer.from(inputHash, "hex"),
  );

  return NextResponse.json({ verified });
}
