"use client";

import { FormEvent, useState } from "react";

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
        setStatus(data.error ?? "Unable to submit privacy request.");
        return;
      }
      setRequests((previous) => [data.request!, ...previous]);
      setStatus("Privacy request submitted.");
      event.currentTarget.reset();
    } catch {
      setStatus("Unable to submit privacy request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {status ? (
        <div className="rounded-md border border-black/10 bg-zinc-50 px-4 py-3 text-sm dark:border-white/15 dark:bg-zinc-800">
          {status}
        </div>
      ) : null}

      <section className="rounded-lg border border-black/10 bg-white p-5 dark:border-white/15 dark:bg-zinc-900">
        <h2 className="text-lg font-semibold">Submit Data Rights Request</h2>
        <form onSubmit={submitRequest} className="mt-4 grid gap-3">
          <select name="requestType" className="w-72 rounded-md border border-black/15 px-3 py-2 text-sm">
            <option value="access">Data access</option>
            <option value="erasure">Delete my data</option>
            <option value="rectification">Correct data</option>
            <option value="portability">Data portability</option>
            <option value="restriction">Restrict processing</option>
          </select>
          <textarea
            name="note"
            placeholder="Optional details for the request"
            className="min-h-28 rounded-md border border-black/15 px-3 py-2 text-sm"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-fit rounded-md bg-indigo-600 px-4 py-2 text-sm text-white disabled:opacity-70"
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </button>
        </form>
      </section>

      <section className="rounded-lg border border-black/10 bg-white p-5 dark:border-white/15 dark:bg-zinc-900">
        <h2 className="text-lg font-semibold">Policy Acknowledgments</h2>
        <div className="mt-3 space-y-2">
          {acceptances.map((entry) => (
            <article key={entry.id} className="rounded-md border border-black/10 p-3 text-sm dark:border-white/10">
              <p className="font-medium capitalize">{entry.policy_type}</p>
              <p className="text-xs text-zinc-500">Version: {entry.policy_version}</p>
              <p className="text-xs text-zinc-500">
                Accepted: {new Date(entry.accepted_at).toLocaleString()}
              </p>
            </article>
          ))}
          {acceptances.length === 0 ? (
            <p className="text-sm text-zinc-500">No policy acknowledgments recorded yet.</p>
          ) : null}
        </div>
      </section>

      <section className="rounded-lg border border-black/10 bg-white p-5 dark:border-white/15 dark:bg-zinc-900">
        <h2 className="text-lg font-semibold">Your Privacy Requests</h2>
        <div className="mt-3 space-y-2">
          {requests.map((entry) => (
            <article key={entry.id} className="rounded-md border border-black/10 p-3 text-sm dark:border-white/10">
              <p className="font-medium capitalize">{entry.request_type}</p>
              <p className="text-xs text-zinc-500">Status: {entry.status}</p>
              <p className="text-xs text-zinc-500">
                Requested: {new Date(entry.requested_at).toLocaleString()}
              </p>
              {entry.resolved_at ? (
                <p className="text-xs text-zinc-500">
                  Resolved: {new Date(entry.resolved_at).toLocaleString()}
                </p>
              ) : null}
            </article>
          ))}
          {requests.length === 0 ? <p className="text-sm text-zinc-500">No requests submitted yet.</p> : null}
        </div>
      </section>
    </div>
  );
}
