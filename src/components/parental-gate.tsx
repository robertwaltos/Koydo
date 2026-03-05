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

function generateChallenge() {
  const a = Math.floor(Math.random() * 30) + 12; // 12–41
  const b = Math.floor(Math.random() * 9) + 3;   // 3–11
  return { a, b, answer: a * b };
}

export default function ParentalGate({ onVerified, onCancel }: ParentalGateProps) {
  const [challenge] = useState(generateChallenge);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (Number(input) === challenge.answer) {
        onVerified();
      } else {
        setError(true);
        setInput("");
        inputRef.current?.focus();
      }
    },
    [input, challenge.answer, onVerified],
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
            {challenge.a} &times; {challenge.b} = ?
          </label>

          <input
            ref={inputRef}
            type="number"
            inputMode="numeric"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError(false);
            }}
            className="mt-4 w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-center text-xl font-mono text-foreground outline-none focus:ring-2 focus:ring-accent"
            aria-label="Your answer"
            autoComplete="off"
          />

          {error && (
            <p className="mt-2 text-center text-sm text-red-500">
              That&apos;s not right. Please try again.
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
              disabled={!input}
              className="flex-1 rounded-full bg-accent px-4 py-2.5 min-h-11 text-sm font-semibold text-white hover:brightness-110 disabled:opacity-40"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
