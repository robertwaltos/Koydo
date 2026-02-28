import { NextRequest } from "next/server";

type RateLimitOptions = {
  max: number;
  windowMs: number;
};

type RateLimitResult = {
  allowed: boolean;
  remaining: number;
  retryAfterSeconds: number;
};

type Bucket = {
  count: number;
  resetAt: number;
};

const RATE_BUCKETS = new Map<string, Bucket>();

function now() {
  return Date.now();
}

function readIpFromHeaders(headers: Headers): string {
  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  const realIp = headers.get("x-real-ip");
  if (realIp) return realIp.trim();

  return "unknown";
}

export function getClientIp(request: Request | NextRequest): string {
  return readIpFromHeaders(request.headers);
}

function cleanupExpiredBuckets() {
  const ts = now();
  for (const [key, bucket] of RATE_BUCKETS.entries()) {
    if (bucket.resetAt <= ts) {
      RATE_BUCKETS.delete(key);
    }
  }
}

export function enforceIpRateLimit(
  request: Request | NextRequest,
  scope: string,
  options: RateLimitOptions,
): RateLimitResult {
  cleanupExpiredBuckets();

  const ts = now();
  const ip = getClientIp(request);
  const key = `${scope}:${ip}`;
  const existing = RATE_BUCKETS.get(key);

  if (!existing || existing.resetAt <= ts) {
    RATE_BUCKETS.set(key, {
      count: 1,
      resetAt: ts + options.windowMs,
    });

    return {
      allowed: true,
      remaining: Math.max(0, options.max - 1),
      retryAfterSeconds: Math.ceil(options.windowMs / 1000),
    };
  }

  if (existing.count >= options.max) {
    return {
      allowed: false,
      remaining: 0,
      retryAfterSeconds: Math.max(1, Math.ceil((existing.resetAt - ts) / 1000)),
    };
  }

  existing.count += 1;
  RATE_BUCKETS.set(key, existing);

  return {
    allowed: true,
    remaining: Math.max(0, options.max - existing.count),
    retryAfterSeconds: Math.max(1, Math.ceil((existing.resetAt - ts) / 1000)),
  };
}
