"use client";

import { FormEvent, useState } from "react";
import SoftCard from "@/app/components/ui/soft-card";
import { useI18n } from "@/lib/i18n/provider";

type DsarRequest = {
  id: string;
  request_type: string;
  status: string;
  requested_at: string;
  resolved_at: string | null;
};

type PolicyAcceptance = {
  id: string;
  policy_type: string;
  policy_version: string;
  accepted_at: string;
};

export default function PrivacyClient({
  initialRequests,
  acceptances,
}: {
  initialRequests: DsarRequest[];
  acceptances: PolicyAcceptance[];
}) {
  const { t } = useI18n();
  const [requests, setRequests] = useState(initialRequests);
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitRequest = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("");
    setIsSubmitting(true);
    const form = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/privacy/dsar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          requestType: form.get("requestType"),
          details: { note: String(form.get("note") ?? "") },
        }),
      });
      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
        request?: DsarRequest;
      };
      if (!response.ok || !data.request) {
        setStatus(data.error ?? t("privacy_client_error_message"));
        return;
      }
      setRequests((previous) => [data.request!, ...previous]);
      setStatus(t("privacy_client_success_message"));
      event.currentTarget.reset();
    } catch {
      setStatus(t("privacy_client_error_message"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {status ? (
        <div role="status" className="ui-soft-card rounded-md px-4 py-3 text-sm">
          {status}
        </div>
      ) : null}

      <SoftCard as="section" className="p-5">
        <h2 className="text-lg font-semibold">{t("privacy_client_submit_request_title")}</h2>
        <form onSubmit={submitRequest} className="mt-4 grid gap-3">
          <select
            name="requestType"
            aria-label={t("privacy_client_request_type_label")}
            className="ui-focus-ring w-72 rounded-md border border-border bg-surface px-3 py-2 text-sm"
          >
            <option value="access">{t("privacy_client_request_type_access")}</option>
            <option value="erasure">{t("privacy_client_request_type_erasure")}</option>
            <option value="rectification">{t("privacy_client_request_type_rectification")}</option>
            <option value="portability">{t("privacy_client_request_type_portability")}</option>
            <option value="restriction">{t("privacy_client_request_type_restriction")}</option>
          </select>
          <textarea
            name="note"
            placeholder={t("privacy_client_note_placeholder")}
            className="ui-focus-ring min-h-28 rounded-md border border-border bg-surface px-3 py-2 text-sm"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="ui-soft-button ui-focus-ring min-h-11 w-fit rounded-full bg-accent px-4 py-2 text-sm text-white disabled:opacity-70"
          >
            {isSubmitting ? t("privacy_client_submitting_button") : t("privacy_client_submit_button")}
          </button>
        </form>
      </SoftCard>

      <SoftCard as="section" className="p-5">
        <h2 className="text-lg font-semibold">{t("privacy_client_acknowledgments_title")}</h2>
        <div className="mt-3 space-y-2">
          {acceptances.map((entry) => (
            <article key={entry.id} className="ui-soft-card rounded-md p-3 text-sm">
              <p className="font-medium capitalize">{entry.policy_type}</p>
              <p className="text-xs text-zinc-500">{t("privacy_client_acknowledgments_version", { version: entry.policy_version })}</p>
              <p className="text-xs text-zinc-500">
                {t("privacy_client_acknowledgments_accepted", { date: new Date(entry.accepted_at).toLocaleString() })}
              </p>
            </article>
          ))}
          {acceptances.length === 0 ? (
            <p className="text-sm text-zinc-500">{t("privacy_client_acknowledgments_none")}</p>
          ) : null}
        </div>
      </SoftCard>

      <SoftCard as="section" className="p-5">
        <h2 className="text-lg font-semibold">{t("privacy_client_your_requests_title")}</h2>
        <div className="mt-3 space-y-2">
          {requests.map((entry) => (
            <article key={entry.id} className="ui-soft-card rounded-md p-3 text-sm">
              <p className="font-medium capitalize">{entry.request_type}</p>
              <p className="text-xs text-zinc-500">{t("privacy_client_requests_status", { status: entry.status })}</p>
              <p className="text-xs text-zinc-500">
                {t("privacy_client_requests_requested", { date: new Date(entry.requested_at).toLocaleString() })}
              </p>
              {entry.resolved_at ? (
                <p className="text-xs text-zinc-500">
                  {t("privacy_client_requests_resolved", { date: new Date(entry.resolved_at).toLocaleString() })}
                </p>
              ) : null}
            </article>
          ))}
          {requests.length === 0 ? <p className="text-sm text-zinc-500">{t("privacy_client_requests_none")}</p> : null}
        </div>
      </SoftCard>
    </div>
  );
}
