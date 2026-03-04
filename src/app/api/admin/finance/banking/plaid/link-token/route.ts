import { NextResponse } from "next/server";
import { requireAdminForApi } from "@/lib/admin/auth";
import { logAdminAction } from "@/lib/admin/audit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { getPlaidConfig, plaidPost } from "@/lib/finance/plaid";

export async function POST() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const plaidConfig = getPlaidConfig();
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

  if (!plaidConfig) {
    return NextResponse.json(
      {
        error:
          "Plaid is not configured. Set PLAID_CLIENT_ID and PLAID_SECRET, or use manual/PDF/scan import routes.",
      },
      { status: 503 },
    );
  }

  try {
    const plaidResponse = await plaidPost<{
      link_token?: string;
      expiration?: string;
      request_id?: string;
      error_message?: string;
    }>(
      "/link/token/create",
      {
        client_name: "Koydo Finance",
        language: "en",
        country_codes: ["US"],
        user: {
          client_user_id: auth.userId,
        },
        products: ["transactions"],
        redirect_uri: `${appUrl}/admin/finance`,
      },
      plaidConfig,
    );

    const plaidError = !plaidResponse.ok ? plaidResponse.errorMessage : null;
    if (!plaidResponse.ok || !plaidResponse.payload.link_token) {
      return NextResponse.json(
        {
          error:
            plaidError ??
            (typeof plaidResponse.payload.error_message === "string"
              ? plaidResponse.payload.error_message
              : "Failed to create Plaid link token."),
        },
        { status: 502 },
      );
    }
    const payload = plaidResponse.payload;

    await logAdminAction({
      adminUserId: auth.userId,
      actionType: "finance_plaid_link_token_create",
      metadata: {
        requestId: payload.request_id ?? null,
        expiration: payload.expiration ?? null,
        environment: plaidConfig.environment,
      },
    });

    return NextResponse.json({
      linkToken: payload.link_token,
      expiration: payload.expiration ?? null,
      requestId: payload.request_id ?? null,
      provider: "plaid",
      environment: plaidConfig.environment,
    });
  } catch (error) {
    console.error("Failed to create Plaid link token.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to create Plaid link token." }, { status: 500 });
  }
}
