import { toSafeErrorRecord } from "@/lib/logging/safe-error";

export type PlaidConfig = {
  clientId: string;
  secret: string;
  environment: "sandbox" | "development" | "production";
};

type PlaidResponse<TPayload extends Record<string, unknown>> =
  | { ok: true; status: number; payload: TPayload }
  | { ok: false; status: number; errorMessage: string | null; payload: Record<string, unknown> };

export function resolvePlaidBaseUrl(environment: PlaidConfig["environment"]) {
  if (environment === "production") return "https://production.plaid.com";
  if (environment === "development") return "https://development.plaid.com";
  return "https://sandbox.plaid.com";
}

export function getPlaidConfig(): PlaidConfig | null {
  const clientId = process.env.PLAID_CLIENT_ID?.trim();
  const secret = process.env.PLAID_SECRET?.trim();
  const environmentRaw = (process.env.PLAID_ENV ?? "sandbox").trim().toLowerCase();
  const environment: PlaidConfig["environment"] =
    environmentRaw === "production"
      ? "production"
      : environmentRaw === "development"
        ? "development"
        : "sandbox";

  if (!clientId || !secret) {
    return null;
  }

  return {
    clientId,
    secret,
    environment,
  };
}

export async function plaidPost<TPayload extends Record<string, unknown>>(
  path: string,
  body: Record<string, unknown>,
  config: PlaidConfig,
): Promise<PlaidResponse<TPayload>> {
  const base = resolvePlaidBaseUrl(config.environment);

  try {
    const response = await fetch(`${base}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: config.clientId,
        secret: config.secret,
        ...body,
      }),
    });

    const payload = (await response.json().catch(() => ({}))) as Record<string, unknown>;
    if (!response.ok) {
      return {
        ok: false,
        status: response.status,
        errorMessage:
          typeof payload.error_message === "string"
            ? payload.error_message
            : typeof payload.display_message === "string"
              ? payload.display_message
              : null,
        payload,
      };
    }

    return {
      ok: true,
      status: response.status,
      payload: payload as TPayload,
    };
  } catch (error) {
    console.error("Plaid API request failed.", toSafeErrorRecord(error));
    return {
      ok: false,
      status: 500,
      errorMessage: "Plaid API request failed.",
      payload: {},
    };
  }
}
