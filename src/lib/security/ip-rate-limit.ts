import { NextRequest } from "next/server";
import { isIP } from "node:net";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

type RateLimitOptions = {
  max: number;
  windowMs: number;
};

type RateLimitResult = {
  allowed: boolean;
  remaining: number;
  retryAfterSeconds: number;
};

// ---------------------------------------------------------------------------
// Redis-backed rate limiter (production — works across serverless instances)
// ---------------------------------------------------------------------------

let redisClient: Redis | null = null;
const redisLimiters = new Map<string, Ratelimit>();

function getRedisClient(): Redis | null {
  if (redisClient) return redisClient;

  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;

  redisClient = new Redis({ url, token });
  return redisClient;
}

/**
 * Get or create a Redis-backed rate limiter for the given scope + window.
 * Upstash sliding-window provides accurate distributed rate limiting.
 */
function getRedisLimiter(scope: string, options: RateLimitOptions): Ratelimit | null {
  const redis = getRedisClient();
  if (!redis) return null;

  const key = `${scope}:${options.max}:${options.windowMs}`;
  let limiter = redisLimiters.get(key);
  if (!limiter) {
    limiter = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(options.max, `${options.windowMs} ms`),
      prefix: `rl:${scope}`,
      analytics: false,
    });
    redisLimiters.set(key, limiter);
  }
  return limiter;
}

// ---------------------------------------------------------------------------
// In-memory fallback (development / when Redis is not configured)
// ---------------------------------------------------------------------------

type Bucket = {
  count: number;
  resetAt: number;
};

const RATE_BUCKETS = new Map<string, Bucket>();

function now() {
  return Date.now();
}

function cleanupExpiredBuckets() {
  const ts = now();
  for (const [key, bucket] of RATE_BUCKETS.entries()) {
    if (bucket.resetAt <= ts) {
      RATE_BUCKETS.delete(key);
    }
  }
}

function enforceInMemory(
  ip: string,
  scope: string,
  options: RateLimitOptions,
): RateLimitResult {
  cleanupExpiredBuckets();

  const ts = now();
  const key = `${scope}:${ip}`;
  const existing = RATE_BUCKETS.get(key);

  if (!existing || existing.resetAt <= ts) {
    RATE_BUCKETS.set(key, { count: 1, resetAt: ts + options.windowMs });
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

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

const IPV6_MAPPED_PREFIX = "::ffff:";

function normalizeIpCandidate(value: string | null | undefined): string | null {
  if (!value) return null;
  const trimmed = value.trim();
  if (!trimmed) return null;

  let candidate = trimmed;
  if (candidate.startsWith("[") && candidate.includes("]")) {
    candidate = candidate.slice(1, candidate.indexOf("]"));
  } else if (candidate.includes(".") && candidate.includes(":") && candidate.split(":").length === 2) {
    candidate = candidate.split(":")[0] ?? candidate;
  }

  if (candidate.startsWith(IPV6_MAPPED_PREFIX)) {
    candidate = candidate.slice(IPV6_MAPPED_PREFIX.length);
  }

  return isIP(candidate) ? candidate : null;
}

function parseTrustedProxyHops(): number {
  const parsed = Number.parseInt(process.env.IP_RATE_LIMIT_TRUSTED_PROXY_HOPS ?? "", 10);
  if (!Number.isFinite(parsed) || parsed < 1) {
    return 1;
  }
  return Math.min(10, parsed);
}

function readIpFromHeaders(headers: Headers): string {
  const providerSingleIpHeaders = [
    "cf-connecting-ip",
    "true-client-ip",
    "x-vercel-forwarded-for",
    "x-real-ip",
    "x-client-ip",
    "fly-client-ip",
  ];

  for (const headerName of providerSingleIpHeaders) {
    const candidate = normalizeIpCandidate(headers.get(headerName));
    if (candidate) {
      return candidate;
    }
  }

  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) {
    const chain = forwardedFor
      .split(",")
      .map((entry) => normalizeIpCandidate(entry))
      .filter((entry): entry is string => Boolean(entry));
    if (chain.length > 0) {
      // Read from right based on trusted proxy hops so attacker-prepended values
      // on the left do not bypass rate limits.
      const trustedProxyHops = parseTrustedProxyHops();
      const indexFromRight = chain.length - trustedProxyHops;
      const index = Math.max(0, indexFromRight);
      return chain[index] ?? chain[chain.length - 1] ?? "unknown";
    }
  }

  return "unknown";
}

export function getClientIp(request: Request | NextRequest): string {
  return readIpFromHeaders(request.headers);
}

/**
 * Enforce IP-based rate limiting.
 *
 * **Production**: Uses Upstash Redis sliding-window (distributed, survives
 * serverless cold starts). Set `UPSTASH_REDIS_REST_URL` and
 * `UPSTASH_REDIS_REST_TOKEN` environment variables.
 *
 * **Development / fallback**: In-memory Map (per-process, resets on cold
 * start). Adequate for local dev but NOT suitable for multi-instance
 * serverless deployments.
 */
export async function enforceIpRateLimit(
  request: Request | NextRequest,
  scope: string,
  options: RateLimitOptions,
): Promise<RateLimitResult> {
  const ip = getClientIp(request);

  // Prefer Redis-backed limiter when configured
  const redisLimiter = getRedisLimiter(scope, options);
  if (redisLimiter) {
    try {
      const result = await redisLimiter.limit(`${scope}:${ip}`);
      return {
        allowed: result.success,
        remaining: result.remaining,
        retryAfterSeconds: result.success
          ? Math.ceil(options.windowMs / 1000)
          : Math.max(1, Math.ceil((result.reset - Date.now()) / 1000)),
      };
    } catch {
      // Redis unreachable — degrade gracefully to in-memory
      console.warn("[rate-limit] Redis unreachable, falling back to in-memory");
    }
  }

  // Fallback: in-memory rate limiting
  return enforceInMemory(ip, scope, options);
}
