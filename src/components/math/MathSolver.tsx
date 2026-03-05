"use client";

import { useState } from "react";
import { useFeature } from "@/lib/platform/use-feature";
import SoftCard from "@/app/components/ui/soft-card";
import SoftButton from "@/app/components/ui/soft-button";

type SolverStep = {
  step: number;
  description: string;
  expression: string;
};

type SolverResult = {
  answer: string;
  steps: SolverStep[];
};

export default function MathSolver() {
  const { allowed, reason } = useFeature("math_solver");
  const [problem, setProblem] = useState("");
  const [result, setResult] = useState<SolverResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!allowed) {
    if (reason === "requires_subscription") {
      return (
        <SoftCard className="p-5 text-center">
          <p className="text-sm text-zinc-600">Math Solver requires a premium subscription.</p>
          <a href="/pricing" className="mt-2 inline-block text-sm font-medium text-accent hover:underline">Upgrade</a>
        </SoftCard>
      );
    }
    return null;
  }

  const solve = async () => {
    if (!problem.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch("/api/math-solver", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ problem: problem.trim() }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? "Failed to solve");
        return;
      }
      setResult(await res.json());
    } catch {
      setError("Connection error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SoftCard className="space-y-4 p-5">
      <h3 className="text-lg font-semibold">Math Solver</h3>
      <p className="text-xs text-zinc-500">Enter a math problem for step-by-step solution.</p>

      <div className="flex gap-2">
        <input
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") solve(); }}
          placeholder="e.g., solve 2x + 5 = 17"
          className="flex-1 rounded-xl border border-border bg-surface-muted px-3 py-2 text-sm font-mono"
        />
        <SoftButton variant="accent" onClick={solve} disabled={loading || !problem.trim()}>
          {loading ? "Solving…" : "Solve"}
        </SoftButton>
      </div>

      {error && <p className="text-sm text-rose-500">{error}</p>}

      {result && (
        <div className="space-y-3">
          <div className="rounded-xl bg-emerald-50 p-4 dark:bg-emerald-950">
            <p className="text-sm font-medium text-emerald-800 dark:text-emerald-200">Answer</p>
            <p className="mt-1 text-xl font-bold font-mono text-emerald-700 dark:text-emerald-300">
              {result.answer}
            </p>
          </div>

          <h4 className="text-sm font-semibold">Steps</h4>
          <div className="space-y-2">
            {result.steps.map((step) => (
              <div key={step.step} className="flex gap-3 rounded-lg border border-border p-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                  {step.step}
                </span>
                <div>
                  <p className="text-sm">{step.description}</p>
                  <p className="mt-0.5 font-mono text-xs text-zinc-600">{step.expression}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </SoftCard>
  );
}
