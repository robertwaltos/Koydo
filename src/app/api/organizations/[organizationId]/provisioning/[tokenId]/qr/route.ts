import { NextResponse } from "next/server";
import * as QRCode from "qrcode";
import { z } from "zod";
import { serverEnv } from "@/lib/config/env";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { timingSafeEqualHexStrings } from "@/lib/security/safe-compare";
import { isMissingOrganizationTableError } from "@/lib/organizations/errors";
import { requireOrganizationMembership } from "@/lib/organizations/membership";
import {
  buildOrganizationProvisioningUrl,
  hashProvisioningToken,
} from "@/lib/organizations/tokens";

const querySchema = z.object({
  token: z.string().trim().min(12).max(200),
  format: z.enum(["svg", "png"]).default("svg"),
  size: z.coerce.number().int().min(160).max(1024).default(360),
});

type ProvisioningTokenRow = {
  id: string;
  token_hash: string;
  token_preview: string;
  seats_remaining: number;
  expires_at: string | null;
  revoked_at: string | null;
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

export async function GET(
  request: Request,
  context: { params: Promise<{ organizationId: string; tokenId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:organizations:provisioning:qr:get", {
    max: 120,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return rateLimitExceededResponse(rateLimit.retryAfterSeconds);
  }

  const { organizationId, tokenId } = await context.params;
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const parsedQuery = querySchema.safeParse({
    token: new URL(request.url).searchParams.get("token") ?? undefined,
    format: new URL(request.url).searchParams.get("format") ?? undefined,
    size: new URL(request.url).searchParams.get("size") ?? undefined,
  });
  if (!parsedQuery.success) {
    return NextResponse.json(
      { error: "Invalid query parameters", details: parsedQuery.error.flatten() },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();
  const membership = await requireOrganizationMembership(
    admin,
    user.id,
    organizationId,
    ["owner", "admin", "teacher", "it_manager"],
  );
  if (!membership.ok) return membership.response;

  const { data, error } = await admin
    .from("organization_provisioning_tokens")
    .select("id, token_hash, token_preview, seats_remaining, expires_at, revoked_at")
    .eq("id", tokenId)
    .eq("organization_id", organizationId)
    .maybeSingle();

  if (error) {
    if (isMissingOrganizationTableError(error)) {
      return NextResponse.json(
        { error: "Organization tables not migrated yet." },
        { status: 503 },
      );
    }
    return NextResponse.json({ error: "Failed to load provisioning token." }, { status: 500 });
  }

  const row = data as ProvisioningTokenRow | null;
  if (!row) {
    return NextResponse.json({ error: "Provisioning token not found." }, { status: 404 });
  }

  const providedHash = hashProvisioningToken(parsedQuery.data.token);
  if (!timingSafeEqualHexStrings(providedHash, row.token_hash)) {
    return NextResponse.json(
      { error: "Token does not match the requested provisioning record." },
      { status: 403 },
    );
  }

  const nowIso = new Date().toISOString();
  if (row.revoked_at) {
    return NextResponse.json({ error: "Provisioning token has been revoked." }, { status: 409 });
  }
  if (row.expires_at && row.expires_at <= nowIso) {
    return NextResponse.json({ error: "Provisioning token has expired." }, { status: 409 });
  }
  if (row.seats_remaining <= 0) {
    return NextResponse.json({ error: "Provisioning token has no seats remaining." }, { status: 409 });
  }

  const provisioningUrl = buildOrganizationProvisioningUrl(
    serverEnv.NEXT_PUBLIC_APP_URL,
    parsedQuery.data.token,
  );
  const qrOptions = {
    width: parsedQuery.data.size,
    margin: 2,
    errorCorrectionLevel: "M" as const,
  };

  if (parsedQuery.data.format === "png") {
    const png = await QRCode.toBuffer(provisioningUrl, {
      type: "png",
      ...qrOptions,
    });
    return new Response(new Uint8Array(png), {
      status: 200,
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "no-store",
      },
    });
  }

  const svg = await QRCode.toString(provisioningUrl, {
    type: "svg",
    ...qrOptions,
  });
  return new Response(svg, {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
