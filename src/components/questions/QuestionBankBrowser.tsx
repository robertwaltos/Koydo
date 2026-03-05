"use client";

import { useState } from "react";
import { useFeature } from "@/lib/platform/use-feature";
import SoftCard from "@/app/components/ui/soft-card";
import SoftButton from "@/app/components/ui/soft-button";

type Question = {
  id: string;
  text: string;
  subject: string;
  difficulty: string;
  type: string;
  options?: string[];
};

export default function QuestionBankBrowser() {
  const { allowed, reason } = useFeature("question_bank_browser");
  const [query, setQuery] = useState("");
  const [subject, setSubject] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [results, setResults] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);

  if (!allowed) {
    if (reason === "requires_subscription") {
      return (
        <SoftCard className="p-5 text-center">
          <p className="text-sm text-zinc-600">Question Bank requires a premium subscription.</p>
          <a href="/pricing" className="mt-2 inline-block text-sm font-medium text-accent hover:underline">Upgrade</a>
        </SoftCard>
      );
    }
    return null;
  }

  const search = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (query) params.set("q", query);
      if (subject) params.set("subject", subject);
      if (difficulty) params.set("difficulty", difficulty);
      const res = await fetch(`/api/question-bank?${params}`);
      if (res.ok) {
        const data = await res.json();
        setResults(data.questions ?? []);
      }
    } catch {}
    setLoading(false);
  };

  return (
    <SoftCard className="space-y-4 p-5">
      <h3 className="text-lg font-semibold">Question Bank</h3>

      <div className="flex flex-wrap gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") search(); }}
          placeholder="Search questions…"
          className="flex-1 rounded-xl border border-border bg-surface-muted px-3 py-2 text-sm"
        />
        <select value={subject} onChange={(e) => setSubject(e.target.value)} className="rounded-xl border border-border px-2 py-1 text-sm">
          <option value="">All subjects</option>
          <option value="math">Math</option>
          <option value="science">Science</option>
          <option value="english">English</option>
          <option value="history">History</option>
        </select>
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className="rounded-xl border border-border px-2 py-1 text-sm">
          <option value="">All levels</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <SoftButton variant="accent" onClick={search} disabled={loading}>
          {loading ? "…" : "Search"}
        </SoftButton>
      </div>

      <div className="divide-y divide-border">
        {results.map((q) => (
          <div key={q.id} className="py-3">
            <p className="text-sm">{q.text}</p>
            <div className="mt-1 flex gap-2">
              <span className="rounded bg-zinc-100 px-1.5 py-0.5 text-[10px] font-medium capitalize">{q.subject}</span>
              <span className="rounded bg-zinc-100 px-1.5 py-0.5 text-[10px] font-medium capitalize">{q.difficulty}</span>
              <span className="rounded bg-zinc-100 px-1.5 py-0.5 text-[10px] font-medium">{q.type}</span>
            </div>
          </div>
        ))}
        {results.length === 0 && !loading && (
          <p className="py-4 text-center text-xs text-zinc-500">Search to find questions.</p>
        )}
      </div>
    </SoftCard>
  );
}
