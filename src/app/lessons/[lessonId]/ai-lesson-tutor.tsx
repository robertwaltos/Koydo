"use client";

import { useMemo, useState } from "react";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";

type TutorResponse = {
  answer?: string;
  source?: "openai" | "rule_based";
  model?: string | null;
  warning?: string | null;
  memoryAvailable?: boolean;
  usage?: {
    dailyLimit: number;
    usedToday: number;
    remainingToday: number;
    usageTracked: boolean;
    limitReached: boolean;
  };
  context?: {
    lessonTitle?: string | null;
    moduleTitle?: string | null;
  };
  error?: string;
};

type Props = {
  lessonId: string;
  lessonTitle: string;
};

export default function AiLessonTutor({ lessonId, lessonTitle }: Props) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [source, setSource] = useState<"openai" | "rule_based" | null>(null);
  const [warning, setWarning] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [memoryAvailable, setMemoryAvailable] = useState(true);
  const [usage, setUsage] = useState<TutorResponse["usage"] | null>(null);

  const suggestedPrompts = useMemo(
    () => [
      `Explain the key idea of "${lessonTitle}" simply.`,
      "Give me 3 practice questions for this lesson.",
      "What mistakes should I avoid in this topic?",
    ],
    [lessonTitle],
  );

  const canSubmit = question.trim().length >= 3 && !isLoading;

  const askTutor = async () => {
    if (!canSubmit) return;
    setIsLoading(true);
    setErrorMessage(null);
    setWarning(null);

    try {
      const response = await fetch("/api/ai/tutor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: question.trim(),
          lessonId,
        }),
      });

      const payload = (await response.json()) as TutorResponse;
      if (!response.ok) {
        setUsage(payload.usage ?? null);
        throw new Error(payload.error ?? "Tutor request failed.");
      }

      setAnswer(payload.answer ?? "No answer returned.");
      setSource(payload.source ?? "rule_based");
      setWarning(payload.warning ?? null);
      setMemoryAvailable(payload.memoryAvailable !== false);
      setUsage(payload.usage ?? null);
      setQuestion("");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Tutor request failed.";
      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SoftCard as="section" className="border-teal-200 bg-teal-50 p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-lg font-bold text-teal-900">Ask AI Tutor</h2>
        <div className="flex flex-wrap gap-2">
          {source ? (
            <ProgressChip
              label="Mode"
              value={source === "openai" ? "openai" : "adaptive-rules"}
              tone={source === "openai" ? "info" : "neutral"}
            />
          ) : null}
          <ProgressChip
            label="Memory"
            value={memoryAvailable ? "On" : "Unavailable"}
            tone={memoryAvailable ? "success" : "warning"}
          />
          {usage && usage.dailyLimit > 0 ? (
            <ProgressChip
              label="Remaining"
              value={usage.remainingToday}
              tone={usage.remainingToday > 0 ? "success" : "warning"}
            />
          ) : null}
        </div>
      </div>

      <p className="mt-1 text-sm text-zinc-700">
        Get instant help while working through this lesson.
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {suggestedPrompts.map((prompt) => (
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
        <label htmlFor={`lesson-ai-tutor-${lessonId}`} className="text-xs font-semibold uppercase tracking-wide text-zinc-700">
          Question
        </label>
        <textarea
          id={`lesson-ai-tutor-${lessonId}`}
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          placeholder="Ask about this lesson concept..."
          className="ui-focus-ring min-h-24 w-full rounded-2xl border border-teal-200 bg-white p-3 text-sm text-zinc-900"
        />
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => void askTutor()}
            disabled={!canSubmit}
            className="ui-focus-ring ui-soft-button min-h-11 rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isLoading ? "Thinking..." : "Ask tutor"}
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

      {answer ? (
        <SoftCard className="mt-4 border-teal-200 bg-white p-4">
          <p className="whitespace-pre-line text-sm text-zinc-800">{answer}</p>
        </SoftCard>
      ) : null}
    </SoftCard>
  );
}
