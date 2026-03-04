import { createHash } from "crypto";
import { serverEnv } from "@/lib/config/env";

export type FilingKind = "irs_1099" | "irs_1042" | "irs_1042s" | "ofac_rejected_transactions";

export type FilingSubmissionInput = {
  filingKind: FilingKind;
  filingPeriodStart: string;
  filingPeriodEnd: string;
  payload: Record<string, unknown>;
  referenceId: string;
};

export type FilingSubmissionResult = {
  status: "submitted" | "manual_required";
  provider: "irs_efile" | "ofac_reporting" | "manual_package";
  submissionReference: string;
  details: Record<string, unknown>;
};

function buildDeterministicReference(prefix: string, payload: Record<string, unknown>) {
  const digest = createHash("sha256")
    .update(JSON.stringify(payload))
    .digest("hex")
    .slice(0, 20);
  return `${prefix}-${digest}`;
}

async function fetchIrsAccessToken() {
  if (!serverEnv.IRS_EFILE_TOKEN_URL || !serverEnv.IRS_EFILE_CLIENT_ID || !serverEnv.IRS_EFILE_CLIENT_SECRET) {
    return null;
  }
  const form = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: serverEnv.IRS_EFILE_CLIENT_ID,
    client_secret: serverEnv.IRS_EFILE_CLIENT_SECRET,
  });
  if (serverEnv.IRS_EFILE_AUDIENCE) {
    form.set("audience", serverEnv.IRS_EFILE_AUDIENCE);
  }
  const response = await fetch(serverEnv.IRS_EFILE_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: form.toString(),
  });
  if (!response.ok) return null;
  const payload = (await response.json().catch(() => null)) as { access_token?: string } | null;
  return payload?.access_token ?? null;
}

async function submitIrsEfile(input: FilingSubmissionInput): Promise<FilingSubmissionResult> {
  if (!serverEnv.IRS_EFILE_API_URL) {
    return {
      status: "manual_required",
      provider: "manual_package",
      submissionReference: buildDeterministicReference("irs-manual", input.payload),
      details: {
        reason: "IRS_EFILE_API_URL not configured.",
      },
    };
  }

  const token = await fetchIrsAccessToken();
  const response = await fetch(serverEnv.IRS_EFILE_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(serverEnv.IRS_EFILE_CLIENT_ID ? { "X-Client-Id": serverEnv.IRS_EFILE_CLIENT_ID } : {}),
    },
    body: JSON.stringify({
      filingKind: input.filingKind,
      filingPeriodStart: input.filingPeriodStart,
      filingPeriodEnd: input.filingPeriodEnd,
      referenceId: input.referenceId,
      payload: input.payload,
    }),
  }).catch(() => null);

  if (!response || !response.ok) {
    return {
      status: "manual_required",
      provider: "manual_package",
      submissionReference: buildDeterministicReference("irs-manual", input.payload),
      details: {
        reason: "IRS connector failed or returned non-2xx response.",
        httpStatus: response?.status ?? null,
      },
    };
  }
  const payload = (await response.json().catch(() => ({}))) as Record<string, unknown>;
  return {
    status: "submitted",
    provider: "irs_efile",
    submissionReference: String(payload.submissionReference ?? payload.id ?? input.referenceId),
    details: payload,
  };
}

async function submitOfacReport(input: FilingSubmissionInput): Promise<FilingSubmissionResult> {
  if (!serverEnv.OFAC_REPORTING_API_URL) {
    return {
      status: "manual_required",
      provider: "manual_package",
      submissionReference: buildDeterministicReference("ofac-manual", input.payload),
      details: {
        reason: "OFAC_REPORTING_API_URL not configured.",
      },
    };
  }

  const response = await fetch(serverEnv.OFAC_REPORTING_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(serverEnv.OFAC_REPORTING_API_KEY ? { "X-API-Key": serverEnv.OFAC_REPORTING_API_KEY } : {}),
      ...(serverEnv.OFAC_REPORTING_BEARER_TOKEN ? { Authorization: `Bearer ${serverEnv.OFAC_REPORTING_BEARER_TOKEN}` } : {}),
    },
    body: JSON.stringify({
      reportType: input.filingKind,
      filingPeriodStart: input.filingPeriodStart,
      filingPeriodEnd: input.filingPeriodEnd,
      referenceId: input.referenceId,
      payload: input.payload,
    }),
  }).catch(() => null);

  if (!response || !response.ok) {
    return {
      status: "manual_required",
      provider: "manual_package",
      submissionReference: buildDeterministicReference("ofac-manual", input.payload),
      details: {
        reason: "OFAC connector failed or returned non-2xx response.",
        httpStatus: response?.status ?? null,
      },
    };
  }
  const payload = (await response.json().catch(() => ({}))) as Record<string, unknown>;
  return {
    status: "submitted",
    provider: "ofac_reporting",
    submissionReference: String(payload.submissionReference ?? payload.id ?? input.referenceId),
    details: payload,
  };
}

export async function submitComplianceFiling(
  input: FilingSubmissionInput,
): Promise<FilingSubmissionResult> {
  if (input.filingKind === "ofac_rejected_transactions") {
    return submitOfacReport(input);
  }
  return submitIrsEfile(input);
}
