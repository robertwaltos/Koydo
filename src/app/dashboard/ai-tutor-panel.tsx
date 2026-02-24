"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";

type TutorHistoryMessage = {
  id: string;
  role: "user" | "assistant";
  source: "user" | "openai" | "rule_based" | "system";
  message: string;
  lessonId: string | null;
  moduleId: string | null;
  createdAt: string;
};

type TutorHistoryResponse = {
  messages?: TutorHistoryMessage[];
  memoryAvailable?: boolean;
  message?: string;
  usage?: TutorUsage;
  error?: string;
};

type TutorUsage = {
  dailyLimit: number;
  usedToday: number;
  remainingToday: number;
  usageTracked: boolean;
  limitReached: boolean;
};

type TutorResponse = {
  answer?: string;
  source?: "openai" | "rule_based";
  model?: string | null;
  warning?: string | null;
  memoryAvailable?: boolean;
  memorySaved?: boolean;
  usage?: TutorUsage;
  context?: {
    lessonId?: string | null;
    lessonTitle?: string | null;
    moduleTitle?: string | null;
    focusSkills?: string[];
  };
  error?: string;
};

const starterPrompts = [
  "Give me a 10-minute study plan for today.",
  "Explain this topic like I am 10 years old.",
  "Ask me 3 quick practice questions.",
];

function formatTime(value: string) {
  const timestamp = new Date(value);
  if (Number.isNaN(timestamp.getTime())) return "";
  return timestamp.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function AiTutorPanel() {
  const [question, setQuestion] = useState("");
  const [source, setSource] = useState<"openai" | "rule_based" | null>(null);
  const [model, setModel] = useState<string | null>(null);
  const [warning, setWarning] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [historyMessage, setHistoryMessage] = useState<string | null>(null);
  const [contextTitle, setContextTitle] = useState<string | null>(null);
  const [history, setHistory] = useState<TutorHistoryMessage[]>([]);
  const [memoryAvailable, setMemoryAvailable] = useState(true);
  const [usage, setUsage] = useState<TutorUsage | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingHistory, setIsLoadingHistory] = useState(true);
  const [isClearingHistory, setIsClearingHistory] = useState(false);

  const canSubmit = question.trim().length >= 3 && !isLoading;

  const promptCount = useMemo(
    () => question.trim().split(/\s+/).filter((token) => token.length > 0).length,
    [question],
  );

  const loadHistory = useCallback(async () => {
    setIsLoadingHistory(true);
    try {
      const response = await fetch("/api/ai/tutor?limit=24", { cache: "no-store" });
      const payload = (await response.json()) as TutorHistoryResponse;
      if (!response.ok) {
        throw new Error(payload.error ?? "Failed to load tutor history.");
      }
      setHistory(Array.isArray(payload.messages) ? payload.messages : []);
      setMemoryAvailable(payload.memoryAvailable !== false);
      setHistoryMessage(payload.message ?? null);
      setUsage(payload.usage ?? null);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to load tutor history.";
      setErrorMessage(message);
    } finally {
      setIsLoadingHistory(false);
    }
  }, []);

  useEffect(() => {
    void loadHistory();
  }, [loadHistory]);

  const clearHistory = async () => {
    if (isClearingHistory) return;
    setIsClearingHistory(true);
    setErrorMessage(null);
    try {
      const response = await fetch("/api/ai/tutor", {
        method: "DELETE",
      });
      const payload = (await response.json()) as TutorHistoryResponse & { deleted?: number };
      if (!response.ok) {
        throw new Error(payload.error ?? "Failed to clear tutor history.");
      }
      setHistory([]);
      setMemoryAvailable(payload.memoryAvailable !== false);
      setHistoryMessage(payload.message ?? null);
      setUsage(payload.usage ?? null);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to clear tutor history.";
      setErrorMessage(message);
    } finally {
      setIsClearingHistory(false);
    }
  };

  const submitQuestion = async () => {
    if (!canSubmit) return;

    const trimmedQuestion = question.trim();
    const nowIso = new Date().toISOString();

    setIsLoading(true);
    setErrorMessage(null);
    setWarning(null);
    setQuestion("");

    const optimisticUserMessage: TutorHistoryMessage = {
      id: `local-user-${Date.now()}`,
      role: "user",
      source: "user",
      message: trimmedQuestion,
      lessonId: null,
      moduleId: null,
      createdAt: nowIso,
    };
    setHistory((previous) => [...previous, optimisticUserMessage].slice(-40));

    try {
      const response = await fetch("/api/ai/tutor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: trimmedQuestion }),
      });

      const payload = (await response.json()) as TutorResponse;
      if (!response.ok) {
        if (payload.usage) {
          setUsage(payload.usage);
        }
        throw new Error(payload.error ?? "Tutor request failed.");
      }

      const assistantMessageText = payload.answer ?? "No answer returned.";
      const assistantMessage: TutorHistoryMessage = {
        id: `local-assistant-${Date.now()}`,
        role: "assistant",
        source: payload.source ?? "rule_based",
        message: assistantMessageText,
        lessonId: payload.context?.lessonId ?? null,
        moduleId: null,
        createdAt: new Date().toISOString(),
      };

      setHistory((previous) => [...previous, assistantMessage].slice(-40));
      setSource(payload.source ?? "rule_based");
      setModel(payload.model ?? null);
      setWarning(payload.warning ?? null);
      setMemoryAvailable(payload.memoryAvailable !== false);
      setUsage(payload.usage ?? null);

      const lessonTitle = payload.context?.lessonTitle ?? null;
      const moduleTitle = payload.context?.moduleTitle ?? null;
      setContextTitle(
        lessonTitle ? `${lessonTitle}${moduleTitle ? ` • ${moduleTitle}` : ""}` : null,
      );

      if (payload.memoryAvailable === false) {
        setHistoryMessage("Tutor memory is unavailable until latest schema is applied.");
      } else if (payload.memorySaved === false) {
        setHistoryMessage("Tutor answered, but this exchange was not saved to memory.");
      } else {
        setHistoryMessage(null);
      }
    } catch (error) {
      setHistory((previous) =>
        previous.filter((entry) => entry.id !== optimisticUserMessage.id),
      );
      const message = error instanceof Error ? error.message : "Tutor request failed.";
      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SoftCard as="section" className="border-teal-200 bg-teal-50 p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-lg font-bold text-teal-900">AI Tutor</h3>
        {source ? (
          <ProgressChip
            label="Mode"
            value={source === "openai" ? model ?? "openai" : "adaptive-rules"}
            tone={source === "openai" ? "info" : "neutral"}
          />
        ) : null}
      </div>

      <p className="mt-1 text-sm text-zinc-700">
        Ask for explanations, practice prompts, or a mini study strategy.
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <ProgressChip
          label="Memory"
          value={memoryAvailable ? "On" : "Unavailable"}
          tone={memoryAvailable ? "success" : "warning"}
        />
        {usage && usage.dailyLimit > 0 ? (
          <>
            <ProgressChip
              label="Today"
              value={`${usage.usedToday}/${usage.dailyLimit}`}
              tone={usage.limitReached ? "warning" : "info"}
            />
            <ProgressChip
              label="Remaining"
              value={usage.remainingToday}
              tone={usage.remainingToday > 0 ? "success" : "warning"}
            />
          </>
        ) : null}
        {usage && usage.dailyLimit > 0 && !usage.usageTracked ? (
          <ProgressChip label="Limit" value="Untracked" tone="warning" />
        ) : null}
        <button
          type="button"
          onClick={() => void clearHistory()}
          disabled={isClearingHistory || isLoadingHistory || history.length === 0}
          className="ui-focus-ring ui-soft-button min-h-10 rounded-full border border-teal-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-800 hover:bg-teal-100 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isClearingHistory ? "Clearing..." : "Clear history"}
        </button>
      </div>

      {historyMessage ? (
        <p className="mt-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-900">
          {historyMessage}
        </p>
      ) : null}

      <div className="mt-3 flex flex-wrap gap-2">
        {starterPrompts.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => setQuestion(prompt)}
            className="ui-focus-ring ui-soft-button min-h-10 rounded-full border border-teal-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-800 hover:bg-teal-100"
          >
            {prompt}
          </button>
        ))}
      </div>

      <div className="mt-3 space-y-2">
        <label htmlFor="ai-tutor-question" className="text-xs font-semibold uppercase tracking-wide text-zinc-700">
          Your question
        </label>
        <textarea
          id="ai-tutor-question"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          placeholder="Example: I keep missing fraction word problems. How should I practice?"
          className="ui-focus-ring min-h-28 w-full rounded-2xl border border-teal-200 bg-white p-3 text-sm text-zinc-900"
        />
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs text-zinc-600">{promptCount} words</p>
          <button
            type="button"
            onClick={() => void submitQuestion()}
            disabled={!canSubmit}
            className="ui-focus-ring ui-soft-button min-h-11 rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isLoading ? "Thinking..." : "Ask AI Tutor"}
          </button>
        </div>
      </div>

      {errorMessage ? (
        <p className="mt-3 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-900">
          {errorMessage}
        </p>
      ) : null}

      {warning ? (
        <p className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-900">
          {warning}
        </p>
      ) : null}

      {contextTitle ? (
        <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-teal-800">
          Context: {contextTitle}
        </p>
      ) : null}

      <SoftCard className="mt-3 max-h-96 overflow-y-auto border-teal-200 bg-white p-3">
        {isLoadingHistory ? (
          <p className="text-sm text-zinc-600">Loading tutor history...</p>
        ) : history.length === 0 ? (
          <p className="text-sm text-zinc-600">No messages yet. Ask your first question.</p>
        ) : (
          <div className="space-y-3">
            {history.map((entry) => (
              <div
                key={entry.id}
                className={`rounded-2xl border px-3 py-2 ${
                  entry.role === "user"
                    ? "border-sky-200 bg-sky-50 text-zinc-900"
                    : "border-teal-200 bg-teal-50 text-zinc-900"
                }`}
              >
                <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-zinc-700">
                    {entry.role === "user" ? "You" : "AI Tutor"} • {entry.source}
                  </p>
                  <p className="text-[11px] text-zinc-500">{formatTime(entry.createdAt)}</p>
                </div>
                <p className="whitespace-pre-line text-sm">{entry.message}</p>
              </div>
            ))}
          </div>
        )}
      </SoftCard>
    </SoftCard>
  );
}
