"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import ProgressChip from "@/app/components/ui/progress-chip";
import SoftCard from "@/app/components/ui/soft-card";
import { toTestingResultPath } from "@/lib/routing/paths";
import type {
  TestingAttemptStartResponse,
  TestingExamCatalogEntry,
  TestingQuestionPayload,
} from "@/lib/testing/types";

type TestingExamClientProps = {
  examId: string;
  initialMode: "auto" | "sample" | "full";
};

type CatalogResponse = {
  exams: TestingExamCatalogEntry[];
};

type AttemptSession = TestingAttemptStartResponse & {
  startedAtMs: number;
};

function formatSeconds(totalSeconds: number) {
  const safe = Math.max(0, totalSeconds);
  const minutes = Math.floor(safe / 60);
  const seconds = safe % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export default function TestingExamClient({ examId, initialMode }: TestingExamClientProps) {
  const router = useRouter();
  const [exam, setExam] = useState<TestingExamCatalogEntry | null>(null);
  const [isLoadingExam, setIsLoadingExam] = useState(true);
  const [attempt, setAttempt] = useState<AttemptSession | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didAutoSubmit, setDidAutoSubmit] = useState(false);

  const loadExam = useCallback(async () => {
    setIsLoadingExam(true);
    setError(null);
    try {
      const response = await fetch("/api/testing/exams?language=en", { cache: "no-store" });
      const payload = (await response.json().catch(() => null)) as CatalogResponse | { error?: string } | null;

      if (!response.ok) {
        setError(payload && "error" in payload && payload.error ? payload.error : "Failed to load exam.");
        setIsLoadingExam(false);
        return;
      }

      const catalog = Array.isArray((payload as CatalogResponse)?.exams)
        ? (payload as CatalogResponse).exams
        : [];
      const matched = catalog.find((entry) => entry.id === examId) ?? null;
      if (!matched) {
        setError("Exam not found in your catalog.");
      } else {
        setExam(matched);
      }
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "Failed to load exam.");
    } finally {
      setIsLoadingExam(false);
    }
  }, [examId]);

  useEffect(() => {
    void loadExam();
  }, [loadExam]);

  const currentQuestion: TestingQuestionPayload | null = useMemo(() => {
    if (!attempt) return null;
    return attempt.questions[currentQuestionIndex] ?? null;
  }, [attempt, currentQuestionIndex]);

  const answeredCount = useMemo(() => Object.keys(answers).length, [answers]);
  const totalQuestions = attempt?.questions.length ?? 0;

  const submitAttempt = useCallback(
    async (reason: "manual" | "timeout") => {
      if (!attempt) return;
      setIsSubmitting(true);
      setError(null);
      try {
        const submissionPayload = {
          answers: Object.entries(answers).map(([questionId, selected]) => ({
            questionId,
            selected,
          })),
        };

        const response = await fetch(`/api/testing/attempts/${encodeURIComponent(attempt.attemptId)}/submit`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submissionPayload),
        });

        const payload = await response.json().catch(() => null);
        if (!response.ok) {
          setError(payload?.error ?? "Failed to submit attempt.");
          return;
        }

        router.push(toTestingResultPath(attempt.attemptId));
      } catch (submitError) {
        setError(submitError instanceof Error ? submitError.message : "Failed to submit attempt.");
      } finally {
        setIsSubmitting(false);
        if (reason === "timeout") {
          setDidAutoSubmit(true);
        }
      }
    },
    [answers, attempt, router],
  );

  useEffect(() => {
    if (!attempt || isSubmitting || didAutoSubmit) return;
    if (remainingSeconds <= 0) {
      setDidAutoSubmit(true);
      void submitAttempt("timeout");
      return;
    }

    const timeout = window.setTimeout(() => {
      setRemainingSeconds((previous) => Math.max(0, previous - 1));
    }, 1000);

    return () => window.clearTimeout(timeout);
  }, [attempt, didAutoSubmit, isSubmitting, remainingSeconds, submitAttempt]);

  async function startAttempt() {
    setError(null);
    try {
      const response = await fetch(`/api/testing/exams/${encodeURIComponent(examId)}/start`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ language: "en", mode: initialMode }),
      });
      const payload = (await response.json().catch(() => null)) as TestingAttemptStartResponse & { error?: string };

      if (!response.ok) {
        setError(payload?.error ?? "Could not start attempt.");
        return;
      }

      const session: AttemptSession = {
        ...payload,
        startedAtMs: Date.now(),
      };
      setAttempt(session);
      setCurrentQuestionIndex(0);
      setAnswers({});
      setRemainingSeconds(Math.max(1, session.timingMinutes * 60));
      setDidAutoSubmit(false);
    } catch (startError) {
      setError(startError instanceof Error ? startError.message : "Could not start attempt.");
    }
  }

  function selectAnswer(questionId: string, selected: string) {
    setAnswers((previous) => ({ ...previous, [questionId]: selected }));
  }

  if (isLoadingExam) {
    return (
      <SoftCard className="p-5">
        <p className="text-sm font-semibold text-zinc-700">Loading exam...</p>
      </SoftCard>
    );
  }

  if (error && !attempt) {
    return (
      <SoftCard className="border-red-200 bg-red-50 p-5">
        <p className="text-sm font-semibold text-red-800">{error}</p>
        <button
          type="button"
          onClick={() => {
            void loadExam();
          }}
          className="ui-focus-ring mt-3 inline-flex min-h-11 items-center rounded-full border border-red-300 bg-white px-4 py-2 text-sm font-bold text-red-800 hover:bg-red-100"
        >
          Retry
        </button>
      </SoftCard>
    );
  }

  if (!attempt) {
    return (
      <SoftCard className="p-5 sm:p-6">
        <h2 className="text-xl font-extrabold tracking-tight text-zinc-900">
          {exam?.name ?? "Practice Exam"}
        </h2>
        <p className="mt-2 text-sm font-medium text-zinc-700">
          Start your attempt when ready. Answers remain hidden until submission.
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          <ProgressChip label="Requested Mode" value={initialMode === "auto" ? "auto" : initialMode} tone="neutral" />
          {exam ? <ProgressChip label="Exam Length" value={`${exam.timingMinutes} min`} tone="info" /> : null}
          {exam ? <ProgressChip label="Questions" value={exam.questionCount} tone="warning" /> : null}
        </div>

        {error ? (
          <p className="mt-3 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-800">
            {error}
          </p>
        ) : null}

        <button
          type="button"
          onClick={() => {
            void startAttempt();
          }}
          className="ui-focus-ring mt-4 inline-flex min-h-11 items-center rounded-full border border-emerald-300 bg-emerald-50 px-5 py-2 text-sm font-bold text-emerald-900 hover:bg-emerald-100"
        >
          Start Attempt
        </button>
      </SoftCard>
    );
  }

  return (
    <div className="space-y-4">
      <SoftCard className="p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-2">
            <ProgressChip label="Mode" value={attempt.attemptType} tone={attempt.attemptType === "full" ? "success" : "neutral"} />
            <ProgressChip label="Progress" value={`${Math.min(currentQuestionIndex + 1, totalQuestions)}/${totalQuestions}`} tone="info" />
            <ProgressChip label="Answered" value={`${answeredCount}/${totalQuestions}`} tone="warning" />
          </div>
          <p className="rounded-full border border-zinc-300 bg-zinc-50 px-3 py-1 text-sm font-bold text-zinc-800">
            {formatSeconds(remainingSeconds)}
          </p>
        </div>
      </SoftCard>

      {error ? (
        <SoftCard className="border-red-200 bg-red-50 p-4">
          <p className="text-sm font-semibold text-red-800">{error}</p>
        </SoftCard>
      ) : null}

      {currentQuestion ? (
        <SoftCard as="article" className="p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Domain: {currentQuestion.domain}
          </p>
          <h2 className="mt-2 text-lg font-bold text-zinc-900 sm:text-xl">{currentQuestion.text}</h2>

          <div className="mt-4 space-y-2">
            {currentQuestion.options.map((option, index) => {
              const optionId = `${currentQuestion.id}-option-${index}`;
              const selected = answers[currentQuestion.id] === option;
              return (
                <button
                  key={optionId}
                  type="button"
                  onClick={() => selectAnswer(currentQuestion.id, option)}
                  className={`ui-focus-ring flex min-h-11 w-full items-start rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors ${
                    selected
                      ? "border-emerald-300 bg-emerald-50 text-emerald-900"
                      : "border-zinc-200 bg-white text-zinc-800 hover:bg-zinc-50"
                  }`}
                >
                  <span className="mr-2 text-zinc-500">{String.fromCharCode(65 + index)}.</span>
                  <span>{option}</span>
                </button>
              );
            })}
          </div>
        </SoftCard>
      ) : null}

      <SoftCard className="p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              disabled={currentQuestionIndex <= 0}
              onClick={() => setCurrentQuestionIndex((previous) => Math.max(0, previous - 1))}
              className="ui-focus-ring inline-flex min-h-11 items-center rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-800 hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Previous
            </button>
            <button
              type="button"
              disabled={currentQuestionIndex >= totalQuestions - 1}
              onClick={() =>
                setCurrentQuestionIndex((previous) => Math.min(totalQuestions - 1, previous + 1))
              }
              className="ui-focus-ring inline-flex min-h-11 items-center rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-800 hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Next
            </button>
          </div>

          <button
            type="button"
            disabled={isSubmitting}
            onClick={() => {
              void submitAttempt("manual");
            }}
            className="ui-focus-ring inline-flex min-h-11 items-center rounded-full border border-emerald-300 bg-emerald-50 px-5 py-2 text-sm font-bold text-emerald-900 hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Submitting..." : "Submit Attempt"}
          </button>
        </div>
      </SoftCard>
    </div>
  );
}
