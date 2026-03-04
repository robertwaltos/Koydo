import { NextResponse } from "next/server";
import { serverEnv } from "@/lib/config/env";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { getPartnerPortalAccessForUser } from "@/lib/partners/access";
import {
  buildSchoolApiUsageDocument,
  resolvePartnerSchoolContext,
} from "@/lib/partners/school-api";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";

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

export async function GET(request: Request) {
  const rate = await enforceIpRateLimit(request, "api:partner:portal:school-api:documentation:get", {
    max: 120,
    windowMs: 5 * 60 * 1000,
  });
  if (!rate.allowed) {
    return rateLimitExceededResponse(rate.retryAfterSeconds);
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const partnerId = searchParams.get("partnerId");
  const format = (searchParams.get("format") ?? "json").toLowerCase();
  const accessRows = await getPartnerPortalAccessForUser({
    userId: user.id,
    partnerId,
  }).catch((error) => {
    console.error("Failed to resolve school API documentation portal access.", toSafeErrorRecord(error));
    return [];
  });
  if (accessRows.length === 0) {
    return NextResponse.json({ error: "No active partner portal access found." }, { status: 403 });
  }

  const access = accessRows[0];
  const admin = createSupabaseAdminClient();
  try {
    const schoolContext = await resolvePartnerSchoolContext(admin, access.partner_id);
    if (!schoolContext) {
      return NextResponse.json({ error: "Partner not found." }, { status: 404 });
    }

    const markdown = buildSchoolApiUsageDocument({
      appUrl: serverEnv.NEXT_PUBLIC_APP_URL,
      partnerDisplayName: schoolContext.partner.display_name,
      partnerId: schoolContext.partner.id,
      organizationId: schoolContext.linkedOrganization?.id ?? null,
      regulatoryMode: schoolContext.eligibility.regulatoryMode,
      allowedDatasets: schoolContext.eligibility.allowedDatasets,
    });

    if (format === "markdown" || format === "md") {
      return new Response(markdown, {
        status: 200,
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "Cache-Control": "no-store",
        },
      });
    }

    return NextResponse.json({
      partnerId: schoolContext.partner.id,
      organizationId: schoolContext.linkedOrganization?.id ?? null,
      regulatoryMode: schoolContext.eligibility.regulatoryMode,
      allowedDatasets: schoolContext.eligibility.allowedDatasets,
      markdown,
    });
  } catch (error) {
    console.error("Unexpected school API documentation error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
