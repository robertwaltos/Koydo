import { NextResponse } from "next/server";
import { z } from "zod";
import crypto from "node:crypto";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const PORTAL_TYPES = ["parent", "admin", "investor", "partner", "teacher", "school", "support"] as const;

const requestSchema = z.object({
  portalType: z.enum(PORTAL_TYPES),
  pin: z.string().regex(/^\d{6,8}$/, "PIN must be 6-8 digits"),
});

const querySchema = z.object({
  portalType: z.enum(PORTAL_TYPES),
});

function hashPin(pin: string, salt: string): string {
  return crypto.pbkdf2Sync(pin, salt, 100_000, 64, "sha512").toString("hex");
}

// ── Brute-force protection: per-user lockout after 5 failed attempts ─────────
// Uses Redis (Upstash) for persistence across serverless instances.
// Falls back to in-memory Map when Redis is unavailable (dev / missing config).

import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";

const MAX_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 15 * 60 * 1000; // 15 minutes

// In-memory fallback (dev only — resets on cold start in serverless)
const fallbackAttempts = new Map<string, { count: number; lockedUntil: number }>();

function getRedis() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  // Lazy import to avoid bundling Redis when not configured
  try {
    const { Redis } = require("@upstash/redis") as typeof import("@upstash/redis");
    return new Redis({ url, token });
  } catch {
    return null;
  }
}

async function checkLockout(userId: string, portalType: string): Promise<string | null> {
  const key = `pin_lockout:${userId}:${portalType}`;
  const redis = getRedis();

  if (redis) {
    try {
      const record = await redis.get<{ count: number; lockedUntil: number }>(key);
      if (!record) return null;
      if (record.lockedUntil > Date.now()) {
        const minutesLeft = Math.ceil((record.lockedUntil - Date.now()) / 60_000);
        return `Too many failed attempts. Try again in ${minutesLeft} minute(s).`;
      }
      // Lockout expired — clear it
      await redis.del(key);
      return null;
    } catch {
      // Redis error — fall through to in-memory
    }
  }

  // In-memory fallback
  const record = fallbackAttempts.get(key);
  if (!record) return null;
  if (record.lockedUntil > Date.now()) {
    const minutesLeft = Math.ceil((record.lockedUntil - Date.now()) / 60_000);
    return `Too many failed attempts. Try again in ${minutesLeft} minute(s).`;
  }
  if (record.lockedUntil <= Date.now()) {
    fallbackAttempts.delete(key);
  }
  return null;
}

async function recordFailedAttempt(userId: string, portalType: string): Promise<void> {
  const key = `pin_lockout:${userId}:${portalType}`;
  const redis = getRedis();

  if (redis) {
    try {
      const record = await redis.get<{ count: number; lockedUntil: number }>(key) ?? { count: 0, lockedUntil: 0 };
      record.count += 1;
      if (record.count >= MAX_ATTEMPTS) {
        record.lockedUntil = Date.now() + LOCKOUT_DURATION_MS;
      }
      // TTL slightly longer than lockout to auto-expire
      await redis.set(key, record, { ex: Math.ceil(LOCKOUT_DURATION_MS / 1000) + 60 });
      return;
    } catch {
      // Redis error — fall through to in-memory
    }
  }

  // In-memory fallback
  const record = fallbackAttempts.get(key) ?? { count: 0, lockedUntil: 0 };
  record.count += 1;
  if (record.count >= MAX_ATTEMPTS) {
    record.lockedUntil = Date.now() + LOCKOUT_DURATION_MS;
  }
  fallbackAttempts.set(key, record);
}

async function clearFailedAttempts(userId: string, portalType: string): Promise<void> {
  const key = `pin_lockout:${userId}:${portalType}`;
  const redis = getRedis();

  if (redis) {
    try {
      await redis.del(key);
      return;
    } catch {
      // Redis error — fall through to in-memory
    }
  }

  fallbackAttempts.delete(key);
}

export async function GET(request: Request) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = new URL(request.url);
  const parsed = querySchema.safeParse({
    portalType: url.searchParams.get("portalType"),
  });

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid portal type" }, { status: 400 });
  }

  const { data: pinRecord, error } = await supabase
    .from("portal_pins")
    .select("user_id")
    .eq("user_id", user.id)
    .eq("portal_type", parsed.data.portalType)
    .maybeSingle();

  if (error) {
    return NextResponse.json({ error: "Failed to check PIN status" }, { status: 500 });
  }

  return NextResponse.json({ hasPin: Boolean(pinRecord) });
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

  // Check lockout before attempting verification
  const lockoutMessage = await checkLockout(user.id, parsed.data.portalType);
  if (lockoutMessage) {
    return NextResponse.json({ error: lockoutMessage, locked: true }, { status: 429 });
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

  if (verified) {
    await clearFailedAttempts(user.id, parsed.data.portalType);
  } else {
    await recordFailedAttempt(user.id, parsed.data.portalType);
  }

  return NextResponse.json({ verified });
}

