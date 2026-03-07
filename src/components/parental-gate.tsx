"use client";

import { useState, useCallback, useEffect, useRef } from "react";

/**
 * Parental Gate — Apple Kids Category compliance.
 *
 * Presents a multiplication challenge that an adult can solve but a young
 * child typically cannot (two 2-digit numbers). Must be completed before
 * the wrapped action (external link, IAP, account management) proceeds.
 *
 * Apple Guidelines §1.3 — Kids Category:
 * "Apps in the Kids Category … must include a parental gate to prevent
 *  children from accessing external links, purchasing opportunities, or
 *  other content deemed inappropriate for children."
 */

interface ParentalGateProps {
  /** Called when the adult successfully solves the challenge. */
  onVerified: () => void;
  /** Called when the user dismisses the gate without solving. */
  onCancel: () => void;
}

export default function ParentalGate({ onVerified, onCancel }: ParentalGateProps) {
  const [challenge, setChallenge] = useState<{ question: string; token: string } | null>(null);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<"idle" | "verifying" | "error" | "loading">("loading");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const fetchChallenge = useCallback(async () => {
    setStatus("loading");
    try {
      const res = await fetch("/api/parent-gate");
      if (!res.ok) throw new Error("Failed to load challenge");
      const data = await res.json();
      setChallenge(data);
      setStatus("idle");
      setTimeout(() => inputRef.current?.focus(), 100);
    } catch (err) {
      console.error("Parent gate fetch error:", err);
      setStatus("error");
      setErrorMsg("Could not load security challenge. Please check your connection.");
    }
  }, []);

  useEffect(() => {
    fetchChallenge();
  }, [fetchChallenge]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!challenge || !input) return;

      setStatus("verifying");
      try {
        const res = await fetch("/api/parent-gate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            token: challenge.token,
            answer: Number(input),
          }),
        });

        const data = await res.json();
        if (data.verified) {
          onVerified();
        } else {
          setStatus("error");
          setErrorMsg(data.reason === "Incorrect answer" ? "That's not right. Please try again." : "Challenge expired. Getting a new one...");
          setInput("");
          if (data.reason !== "Incorrect answer") {
            setTimeout(fetchChallenge, 1500);
          } else {
            setTimeout(() => inputRef.current?.focus(), 100);
          }
        }
      } catch (err) {
        setStatus("error");
        setErrorMsg("Verification failed. Please try again.");
      }
    },
    [input, challenge, onVerified, fetchChallenge],
  );


  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-label="Parental verification"
    >
      <div className="w-full max-w-sm rounded-2xl border border-border bg-surface p-6 shadow-2xl dark:bg-[var(--surface)]">
        <h2 className="text-lg font-bold text-foreground">
          Grown-ups only
        </h2>
        <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
          To continue, please solve this problem. This helps us make sure a
          parent or guardian is present.
        </p>

        <form onSubmit={handleSubmit} className="mt-5">
          <label className="block text-center text-2xl font-mono font-bold text-foreground">
            {status === "loading" ? "..." : challenge?.question} = ?
          </label>

          <input
            ref={inputRef}
            type="number"
            inputMode="numeric"
            value={input}
            disabled={status === "loading" || status === "verifying"}
            onChange={(e) => {
              setInput(e.target.value);
              setErrorMsg(null);
            }}
            className="mt-4 w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-center text-xl font-mono text-foreground outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
            aria-label="Your answer"
            autoComplete="off"
          />

          {errorMsg && (
            <p className="mt-2 text-center text-sm text-red-500">
              {errorMsg}
            </p>
          )}

          <div className="mt-5 flex gap-3">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 rounded-full border border-border bg-surface-muted px-4 py-2.5 min-h-11 text-sm font-semibold text-foreground hover:bg-surface dark:bg-surface/60 dark:hover:bg-surface/80"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!input || status === "verifying" || status === "loading"}
              className="flex-1 rounded-full bg-accent px-4 py-2.5 min-h-11 text-sm font-semibold text-white hover:brightness-110 disabled:opacity-40"
            >
              {status === "verifying" ? "Verifying..." : "Continue"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
