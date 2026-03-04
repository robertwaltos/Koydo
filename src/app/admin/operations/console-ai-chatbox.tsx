"use client";

import { FormEvent, useMemo, useState } from "react";

type ConsoleChatRole = "user" | "assistant";

type ConsoleChatMessage = {
  id: string;
  role: ConsoleChatRole;
  content: string;
};

const SAVED_PROMPTS = [
  "Summarize system health and the top 3 blocking issues right now.",
  "Show the newest unresolved support tickets with priority and created_at.",
  "Summarize unacknowledged admin alerts by severity and category.",
  "Query stripe_webhook_events for failed events in the last 24 hours and summarize patterns.",
  "Query admin_action_logs for the latest 20 high-risk actions and summarize.",
] as const;

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

export default function ConsoleAiChatbox() {
  const [messages, setMessages] = useState<ConsoleChatMessage[]>([
    {
      id: createId(),
      role: "assistant",
      content:
        "Console AI ready. Ask about system health, support load, alerts, or query specific tables (read-only).",
    },
  ]);
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const trimmedDraft = draft.trim();
  const canSend = trimmedDraft.length >= 3 && !busy;

  const recentHistory = useMemo(
    () =>
      messages
        .slice(-10)
        .map((entry) => ({ role: entry.role, content: entry.content })),
    [messages],
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSend) return;

    const userMessage: ConsoleChatMessage = {
      id: createId(),
      role: "user",
      content: trimmedDraft,
    };

    setBusy(true);
    setError(null);
    setMessages((current) => [...current, userMessage]);
    setDraft("");

    try {
      const response = await fetch("/api/admin/ai/console-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmedDraft,
          history: recentHistory,
        }),
      });
      const payload = (await response.json().catch(() => ({}))) as {
        answer?: string;
        error?: string;
      };
      if (!response.ok) {
        throw new Error(payload.error ?? "Failed to get AI response.");
      }

      const answerText =
        typeof payload.answer === "string" && payload.answer.trim().length > 0
          ? payload.answer.trim()
          : "No answer returned.";

      setMessages((current) => [
        ...current,
        { id: createId(), role: "assistant", content: answerText },
      ]);
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Failed to get AI response.");
    } finally {
      setBusy(false);
    }
  }

  function applySavedPrompt(prompt: string) {
    setDraft(prompt);
    setError(null);
  }

  return (
    <section className="ui-soft-card p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-lg font-semibold">Console AI Assistant</h2>
        <span className="rounded-full border border-border bg-surface px-2 py-1 text-xs text-zinc-600">
          Admin-only, read-only DB access
        </span>
      </div>
      <p className="mt-2 text-sm text-zinc-600">
        Example: &quot;Summarize webhook failures today&quot;, &quot;What are the newest unresolved support
        tickets?&quot;, &quot;Query support_tickets where status = open.&quot;
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {SAVED_PROMPTS.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => applySavedPrompt(prompt)}
            className="ui-soft-button ui-focus-ring rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-zinc-700"
          >
            {prompt}
          </button>
        ))}
      </div>

      <div className="mt-4 max-h-80 space-y-3 overflow-y-auto rounded-2xl border border-border bg-surface p-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`rounded-xl px-3 py-2 text-sm ${
              message.role === "assistant"
                ? "border border-border bg-surface-muted text-zinc-800"
                : "ml-6 border border-emerald-200 bg-emerald-50 text-zinc-900"
            }`}
          >
            <p className="mb-1 text-[11px] uppercase tracking-wide text-zinc-500">
              {message.role === "assistant" ? "Console AI" : "You"}
            </p>
            <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
          </div>
        ))}
      </div>

      <form onSubmit={onSubmit} className="mt-4 space-y-3">
        <textarea
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Ask about live system state, users, support, billing, or table data..."
          className="ui-focus-ring min-h-24 w-full rounded-2xl border border-border bg-surface px-3 py-2 text-sm"
        />
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="submit"
            disabled={!canSend}
            className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface-muted px-4 py-2 text-sm disabled:opacity-60"
          >
            {busy ? "Thinking..." : "Ask Console AI"}
          </button>
          {error ? <p className="text-sm text-rose-700">{error}</p> : null}
        </div>
      </form>
    </section>
  );
}
