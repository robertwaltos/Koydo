"use client";

import { useState } from "react";
import { useFeature } from "@/lib/platform/use-feature";
import SoftCard from "@/app/components/ui/soft-card";
import SoftButton from "@/app/components/ui/soft-button";

type FeedbackResult = {
  overallScore: number;
  grammar: { score: number; issues: string[] };
  clarity: { score: number; suggestions: string[] };
  structure: { score: number; feedback: string };
  improvements: string[];
};

export default function WritingFeedback() {
  const { allowed, reason } = useFeature("writing_feedback");
  const [text, setText] = useState("");
  const [result, setResult] = useState<FeedbackResult | null>(null);
  const [loading, setLoading] = useState(false);

  if (!allowed) {
    if (reason === "requires_subscription") {
      return (
        <SoftCard className="p-5 text-center">
          <p className="text-sm text-zinc-600">Writing Feedback requires a premium subscription.</p>
          <a href="/pricing" className="mt-2 inline-block text-sm font-medium text-accent hover:underline">Upgrade</a>
        </SoftCard>
      );
    }
    return null;
  }

  const analyze = async () => {
    if (!text.trim() || text.trim().length < 20) return;
    setLoading(true);
    try {
      const res = await fetch("/api/writing/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: text.trim() }),
      });
      if (res.ok) setResult(await res.json());
    } catch {}
    setLoading(false);
  };

  return (
    <SoftCard className="space-y-4 p-5">
      <h3 className="text-lg font-semibold">Writing Feedback</h3>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste or type your writing here (minimum 20 characters)…"
        rows={8}
        className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm"
      />

      <SoftButton variant="accent" onClick={analyze} disabled={loading || text.trim().length < 20}>
        {loading ? "Analyzing…" : "Get Feedback"}
      </SoftButton>

      {result && (
        <div className="space-y-4">
          {/* Overall score */}
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-accent text-xl font-bold text-accent">
              {result.overallScore}
            </div>
            <div>
              <p className="font-medium">Overall Score</p>
              <p className="text-xs text-zinc-500">Grammar: {result.grammar.score} &middot; Clarity: {result.clarity.score} &middot; Structure: {result.structure.score}</p>
            </div>
          </div>

          {/* Grammar issues */}
          {result.grammar.issues.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-rose-600">Grammar Issues</h4>
              <ul className="mt-1 space-y-1 text-xs text-zinc-600">
                {result.grammar.issues.map((issue, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-rose-400">-</span>{issue}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Improvements */}
          {result.improvements.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-amber-600">Suggestions</h4>
              <ul className="mt-1 space-y-1 text-xs text-zinc-600">
                {result.improvements.map((s, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-amber-400">-</span>{s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </SoftCard>
  );
}
