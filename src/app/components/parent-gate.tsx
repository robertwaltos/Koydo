"use client";

import { useCallback, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { X } from "lucide-react";
import { getAppId } from "@/lib/platform/app-manifest";

type ParentGateProps = {
  onSuccess: () => void | Promise<void>;
  children: ReactNode;
  actionText?: string;
};

type ParentGateChallenge = {
  question: string;
  token: string;
  expiresAt: string;
};

const KIDS_APP_IDS = new Set(["koydo_junior", "koydo_junior_de"]);

async function readErrorMessage(response: Response, fallback: string) {
  const payload = (await response.json().catch(() => null)) as { error?: string; reason?: string } | null;
  return payload?.error ?? payload?.reason ?? fallback;
}

export default function ParentGate({ onSuccess, children, actionText = "continue" }: ParentGateProps) {
  const appId = getAppId();
  const isKidsApp = KIDS_APP_IDS.has(appId);

  const [isOpen, setIsOpen] = useState(false);
  const [challenge, setChallenge] = useState<ParentGateChallenge | null>(null);
  const [input, setInput] = useState("");
  const [isLoadingChallenge, setIsLoadingChallenge] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const loadChallenge = useCallback(async () => {
    setIsLoadingChallenge(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/parent-gate", {
        method: "GET",
        headers: { "cache-control": "no-store" },
      });

      if (!response.ok) {
        setChallenge(null);
        setErrorMessage(await readErrorMessage(response, "Parent check is unavailable right now."));
        return;
      }

      const nextChallenge = (await response.json()) as ParentGateChallenge;
      setChallenge(nextChallenge);
      setInput("");
    } catch {
      setChallenge(null);
      setErrorMessage("Unable to load parent check right now.");
    } finally {
      setIsLoadingChallenge(false);
    }
  }, []);

  const openGate = useCallback(
    () => {
      setIsOpen(true);
      void loadChallenge();
    },
    [loadChallenge],
  );

  const closeGate = useCallback(() => {
    setIsOpen(false);
    setChallenge(null);
    setInput("");
    setErrorMessage(null);
    setIsVerifying(false);
  }, []);

  const appendDigit = useCallback((digit: string) => {
    setInput((prev) => {
      if (prev.length >= 6) return prev;
      return `${prev}${digit}`;
    });
    setErrorMessage(null);
  }, []);

  const backspaceDigit = useCallback(() => {
    setInput((prev) => prev.slice(0, -1));
    setErrorMessage(null);
  }, []);

  const clearInput = useCallback(() => {
    setInput("");
    setErrorMessage(null);
  }, []);

  const verifyAnswer = useCallback(async () => {
    if (!challenge || !input || isVerifying) {
      return;
    }

    const parsed = Number.parseInt(input, 10);
    if (Number.isNaN(parsed)) {
      setErrorMessage("Enter a valid number.");
      return;
    }

    setIsVerifying(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/parent-gate", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ token: challenge.token, answer: parsed }),
      });

      if (!response.ok) {
        const message = await readErrorMessage(response, "Verification failed. Please try again.");
        setErrorMessage(message === "Incorrect answer" ? "Incorrect answer. Try again." : message);
        setInput("");

        if (message.toLowerCase().includes("expired")) {
          await loadChallenge();
        }

        return;
      }

      closeGate();
      await onSuccess();
    } catch {
      setErrorMessage("Verification failed. Please try again.");
    } finally {
      setIsVerifying(false);
    }
  }, [challenge, closeGate, input, isVerifying, loadChallenge, onSuccess]);

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      await verifyAnswer();
    },
    [verifyAnswer],
  );

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={(event) => {
          event.preventDefault();
          openGate();
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openGate();
          }
        }}
        className="w-full"
      >
        {children}
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-2xl border border-border bg-white p-6 shadow-xl dark:bg-zinc-900">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold">Ask an Adult</h2>
              <button
                type="button"
                onClick={closeGate}
                className="rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="mb-4 text-zinc-600 dark:text-zinc-400">
              To {actionText}, solve this math problem:
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="rounded-xl bg-indigo-50 px-4 py-3 text-center text-2xl font-black tracking-wide text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300">
                {isLoadingChallenge ? "Loading..." : challenge?.question ?? "Unavailable"}
              </div>

              {isKidsApp ? (
                <div className="space-y-3">
                  <div className="rounded-xl border-2 border-zinc-200 bg-white px-4 py-3 text-center text-2xl font-bold text-zinc-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100">
                    {input || "____"}
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((digit) => (
                      <button
                        key={digit}
                        type="button"
                        onClick={() => appendDigit(digit)}
                        disabled={!challenge || isLoadingChallenge || isVerifying}
                        className="min-h-14 rounded-xl border border-zinc-200 bg-zinc-50 text-lg font-black text-zinc-800 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                      >
                        {digit}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={clearInput}
                      disabled={!challenge || isLoadingChallenge || isVerifying}
                      className="min-h-14 rounded-xl border border-zinc-200 bg-amber-50 text-sm font-bold text-amber-800 transition hover:bg-amber-100 disabled:opacity-50 dark:border-zinc-700 dark:bg-amber-900/40 dark:text-amber-100"
                    >
                      Clear
                    </button>
                    <button
                      type="button"
                      onClick={() => appendDigit("0")}
                      disabled={!challenge || isLoadingChallenge || isVerifying}
                      className="min-h-14 rounded-xl border border-zinc-200 bg-zinc-50 text-lg font-black text-zinc-800 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                    >
                      0
                    </button>
                    <button
                      type="button"
                      onClick={backspaceDigit}
                      disabled={!challenge || isLoadingChallenge || isVerifying}
                      className="min-h-14 rounded-xl border border-zinc-200 bg-amber-50 text-sm font-bold text-amber-800 transition hover:bg-amber-100 disabled:opacity-50 dark:border-zinc-700 dark:bg-amber-900/40 dark:text-amber-100"
                    >
                      Back
                    </button>
                  </div>
                </div>
              ) : (
                <input
                  type="number"
                  value={input}
                  onChange={(event) => {
                    setInput(event.target.value);
                    setErrorMessage(null);
                  }}
                  className="w-full rounded-xl border-2 border-zinc-200 p-4 text-center text-2xl font-bold transition-colors focus:border-indigo-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950"
                  placeholder="Answer"
                  autoFocus
                  disabled={!challenge || isLoadingChallenge || isVerifying}
                />
              )}

              {errorMessage ? (
                <p className="text-center text-sm font-medium text-red-500">{errorMessage}</p>
              ) : null}

              <button
                type="submit"
                disabled={!challenge || !input || isLoadingChallenge || isVerifying}
                className="mt-2 w-full rounded-xl bg-indigo-600 py-3.5 font-bold text-white shadow-md transition hover:bg-indigo-700 disabled:opacity-50"
              >
                {isVerifying ? "Checking..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
