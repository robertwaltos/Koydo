"use client";

import { useState } from "react";
import Link from "next/link";
import SoftCard from "@/app/components/ui/soft-card";

const CONTENT_TYPES = [
  { id: "lesson", label: "Lesson Plan", icon: "\u{1F4D6}" },
  { id: "quiz", label: "Quiz", icon: "\u{1F4DD}" },
  { id: "worksheet", label: "Worksheet", icon: "\u{1F4C4}" },
  { id: "flashcards", label: "Flashcards", icon: "\u{1F0CF}" },
];

const GRADE_LEVELS = ["K-2", "3-5", "6-8", "9-12", "College"];

export default function ContentAuthoringPage() {
  const [contentType, setContentType] = useState("lesson");
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [gradeLevel, setGradeLevel] = useState("6-8");
  const [instructions, setInstructions] = useState("");
  const [generating, setGenerating] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generate = async () => {
    if (!subject.trim() || !topic.trim()) return;
    setGenerating(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch("/api/ai/content-authoring", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contentType, subject, topic, gradeLevel, instructions }),
      });
      const data = await res.json();
      if (data.error) setError(data.error);
      else setResult(data.content);
    } catch {
      setError("Failed to generate content.");
    }
    setGenerating(false);
  };

  const copyResult = async () => {
    if (result) {
      try { await navigator.clipboard.writeText(result); } catch {}
    }
  };

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <div>
        <Link href="/dashboard" className="text-xs text-accent hover:underline">Dashboard</Link>
        <span className="mx-1 text-xs text-foreground/30">/</span>
        <span className="text-xs text-foreground/50">Content Authoring</span>
      </div>

      <h1 className="text-2xl font-bold tracking-tight">AI Content Authoring</h1>
      <p className="text-sm text-foreground/60">
        Generate lesson plans, quizzes, worksheets, and flashcards with AI assistance. For educators and parents.
      </p>

      <SoftCard className="p-6 space-y-4">
        {/* Content type selection */}
        <div>
          <label className="text-xs font-bold text-foreground/60 uppercase tracking-wide mb-2 block">Content Type</label>
          <div className="flex flex-wrap gap-2">
            {CONTENT_TYPES.map((ct) => (
              <button
                key={ct.id}
                type="button"
                onClick={() => setContentType(ct.id)}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                  contentType === ct.id
                    ? "bg-accent text-white"
                    : "border border-border text-foreground/60 hover:border-accent/30"
                }`}
              >
                {ct.icon} {ct.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="text-xs font-bold text-foreground/60 uppercase tracking-wide mb-1 block">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="e.g. Mathematics, Science, English"
              className="ui-focus-ring w-full rounded-xl border border-border bg-surface-muted px-4 py-2.5 text-sm"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-foreground/60 uppercase tracking-wide mb-1 block">Topic</label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g. Photosynthesis, Fractions, Civil War"
              className="ui-focus-ring w-full rounded-xl border border-border bg-surface-muted px-4 py-2.5 text-sm"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-bold text-foreground/60 uppercase tracking-wide mb-2 block">Grade Level</label>
          <div className="flex gap-2">
            {GRADE_LEVELS.map((gl) => (
              <button
                key={gl}
                type="button"
                onClick={() => setGradeLevel(gl)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                  gradeLevel === gl
                    ? "bg-accent/10 text-accent border border-accent/30"
                    : "border border-border text-foreground/50"
                }`}
              >
                {gl}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs font-bold text-foreground/60 uppercase tracking-wide mb-1 block">Special Instructions (optional)</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Any specific requirements or focus areas..."
            maxLength={500}
            rows={2}
            className="ui-focus-ring w-full rounded-xl border border-border bg-surface-muted px-4 py-2.5 text-sm resize-none"
          />
        </div>

        <button
          type="button"
          onClick={generate}
          disabled={generating || !subject.trim() || !topic.trim()}
          className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white disabled:opacity-40"
        >
          {generating ? "Generating..." : "Generate Content"}
        </button>
      </SoftCard>

      {error && (
        <SoftCard className="border-red-300 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/10">
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
        </SoftCard>
      )}

      {result && (
        <SoftCard className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-foreground">Generated Content</h2>
            <button
              type="button"
              onClick={copyResult}
              className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent hover:bg-accent/20"
            >
              Copy
            </button>
          </div>
          <div className="whitespace-pre-wrap text-sm text-foreground/80 leading-relaxed">
            {result}
          </div>
        </SoftCard>
      )}
    </main>
  );
}
