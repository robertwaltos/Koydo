"use client";

import { useCallback, useState } from "react";
import type { ReactNode } from "react";
import { X } from "lucide-react";
import JuniorButton from "./JuniorButton";

export type ParentGateOverlayProps = {
  onSuccess: () => void | Promise<void>;
  children: ReactNode;
  actionText?: string;
};

type ParentGateChallenge = {
  question: string;
  token: string;
  expiresAt: string;
};

async function readErrorMessage(response: Response, fallback: string) {
  const payload = (await response.json().catch(() => null)) as { error?: string; reason?: string } | null;
  return payload?.error ?? payload?.reason ?? fallback;
}

export default function ParentGateOverlay({
  onSuccess,
  children,
  actionText = "continue",
}: ParentGateOverlayProps) {
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

  const openGate = useCallback(() => {
    setIsOpen(true);
    setInput("");
    setErrorMessage(null);
    void loadChallenge();
  }, [loadChallenge]);

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

  const backspace = useCallback(() => {
    setInput((prev) => prev.slice(0, -1));
    setErrorMessage(null);
  }, []);

  const clearAll = useCallback(() => {
    setInput("");
    setErrorMessage(null);
  }, []);

  const handleSubmit = useCallback(async () => {
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
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-[#152238]/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[28px] border-2 border-white/70 bg-white p-6 shadow-[0_28px_60px_rgba(16,24,40,0.35)]">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-extrabold text-[#24314f]">Parent Check</h2>
              <button
                type="button"
                onClick={closeGate}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-[#24314f] shadow-sm transition hover:bg-white"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="mb-4 text-sm font-semibold text-[#3b4763]">
              To {actionText}, solve this grown-up math puzzle.
            </p>

            <div className="mb-4 flex items-center justify-center rounded-2xl bg-[#fff3dc] py-4 text-2xl font-black tracking-wide text-[#3b2b20]">
              {isLoadingChallenge ? "Loading..." : challenge?.question ?? "Unavailable"}
            </div>

            <div className="mb-4 rounded-xl border-2 border-[#d7ddeb] bg-white px-4 py-3 text-center text-2xl font-extrabold text-[#24314f]">
              {input || "----"}
            </div>

            {errorMessage ? (
              <div className="mb-3 rounded-xl bg-[#ffe4ea] px-4 py-2 text-center text-sm font-semibold text-[#b4234e]">
                {errorMessage}
              </div>
            ) : null}

            <div className="grid grid-cols-3 gap-3">
              {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((digit) => (
                <button
                  key={digit}
                  type="button"
                  onClick={() => appendDigit(digit)}
                  disabled={!challenge || isLoadingChallenge || isVerifying}
                  className="min-h-[64px] rounded-2xl border-2 border-white/80 bg-[#f1f5ff] text-xl font-black text-[#24314f] shadow-[0_6px_0_rgba(36,49,79,0.16)] transition active:translate-y-1 disabled:opacity-50"
                >
                  {digit}
                </button>
              ))}
              <button
                type="button"
                onClick={clearAll}
                disabled={!challenge || isLoadingChallenge || isVerifying}
                className="min-h-[64px] rounded-2xl border-2 border-white/80 bg-[#ffe8d6] text-sm font-extrabold uppercase text-[#7a3c1e] shadow-[0_6px_0_rgba(122,60,30,0.2)] transition active:translate-y-1 disabled:opacity-50"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={() => appendDigit("0")}
                disabled={!challenge || isLoadingChallenge || isVerifying}
                className="min-h-[64px] rounded-2xl border-2 border-white/80 bg-[#f1f5ff] text-xl font-black text-[#24314f] shadow-[0_6px_0_rgba(36,49,79,0.16)] transition active:translate-y-1 disabled:opacity-50"
              >
                0
              </button>
              <button
                type="button"
                onClick={backspace}
                disabled={!challenge || isLoadingChallenge || isVerifying}
                className="min-h-[64px] rounded-2xl border-2 border-white/80 bg-[#ffe8d6] text-sm font-extrabold uppercase text-[#7a3c1e] shadow-[0_6px_0_rgba(122,60,30,0.2)] transition active:translate-y-1 disabled:opacity-50"
              >
                Back
              </button>
            </div>

            <div className="mt-5">
              <JuniorButton
                tone="sky"
                className="w-full"
                onClick={() => {
                  void handleSubmit();
                }}
                disabled={!challenge || !input || isLoadingChallenge || isVerifying}
              >
                {isVerifying ? "Checking..." : "Unlock"}
              </JuniorButton>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
