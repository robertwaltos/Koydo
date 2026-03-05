"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import SoftCard from "@/app/components/ui/soft-card";

type Submission = {
  id: string;
  title: string;
  content_type: string;
  subject: string;
  grade_level: string;
  content: string;
  description: string | null;
  status: string;
  review_notes: string | null;
  created_at: string;
};

const CONTENT_TYPES = ["lesson", "quiz", "worksheet", "activity", "video-script"];

export default function CreatorPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [contentType, setContentType] = useState("lesson");
  const [subject, setSubject] = useState("");
  const [gradeLevel, setGradeLevel] = useState("6-8");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const fetchSubmissions = useCallback(async () => {
    setLoading(true);
    const res = await fetch("/api/creator?view=mine");
    const data = await res.json();
    setSubmissions(data.submissions ?? []);
    setLoading(false);
  }, []);

  useEffect(() => { fetchSubmissions(); }, [fetchSubmissions]);

  const submitContent = async () => {
    if (!title.trim() || !content.trim()) return;
    setSubmitting(true);
    try {
      await fetch("/api/creator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "submit", title, contentType, subject, gradeLevel, content, description }),
      });
      setShowForm(false);
      setTitle("");
      setContent("");
      setDescription("");
      fetchSubmissions();
    } catch {}
    setSubmitting(false);
  };

  const STATUS_STYLES: Record<string, string> = {
    pending: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    approved: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    rejected: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  };

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <div>
        <Link href="/dashboard" className="text-xs text-accent hover:underline">Dashboard</Link>
        <span className="mx-1 text-xs text-foreground/30">/</span>
        <span className="text-xs text-foreground/50">Creator Studio</span>
      </div>

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Creator Studio</h1>
        <button
          type="button"
          onClick={() => setShowForm(!showForm)}
          className="rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white"
        >
          {showForm ? "Cancel" : "Submit Content"}
        </button>
      </div>
      <p className="text-sm text-foreground/60">
        Submit your educational content for review. Approved content joins the KOYDO module library.
      </p>

      {showForm && (
        <SoftCard className="p-5 space-y-3">
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" maxLength={200}
            className="ui-focus-ring w-full rounded-xl border border-border bg-surface-muted px-4 py-2 text-sm" />
          <div className="flex gap-3">
            <select value={contentType} onChange={(e) => setContentType(e.target.value)}
              className="rounded-xl border border-border bg-surface-muted px-3 py-2 text-sm">
              {CONTENT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
            <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject"
              className="ui-focus-ring flex-1 rounded-xl border border-border bg-surface-muted px-4 py-2 text-sm" />
            <select value={gradeLevel} onChange={(e) => setGradeLevel(e.target.value)}
              className="rounded-xl border border-border bg-surface-muted px-3 py-2 text-sm">
              {["K-2", "3-5", "6-8", "9-12", "College"].map((g) => <option key={g} value={g}>{g}</option>)}
            </select>
          </div>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Short description" maxLength={1000}
            className="ui-focus-ring w-full rounded-xl border border-border bg-surface-muted px-4 py-2 text-sm" />
          <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Paste or write your content here..."
            maxLength={50000} rows={10}
            className="ui-focus-ring w-full rounded-xl border border-border bg-surface-muted px-4 py-2 text-sm font-mono resize-none" />
          <button type="button" onClick={submitContent} disabled={submitting || !title.trim() || !content.trim()}
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white disabled:opacity-40">
            Submit for Review
          </button>
        </SoftCard>
      )}

      {loading ? (
        <p className="text-center text-sm text-foreground/40">Loading...</p>
      ) : submissions.length === 0 ? (
        <SoftCard className="p-8 text-center">
          <p className="text-sm text-foreground/50">No submissions yet. Share your expertise with the KOYDO community!</p>
        </SoftCard>
      ) : (
        <div className="space-y-3">
          {submissions.map((s) => (
            <SoftCard key={s.id} className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-bold text-foreground">{s.title}</h3>
                  <p className="text-[11px] text-foreground/40">
                    {s.content_type} &middot; {s.subject} &middot; {s.grade_level} &middot; {new Date(s.created_at).toLocaleDateString()}
                  </p>
                </div>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${STATUS_STYLES[s.status] ?? ""}`}>
                  {s.status}
                </span>
              </div>
              {s.description && <p className="mt-1 text-xs text-foreground/60">{s.description}</p>}
              {s.review_notes && (
                <p className="mt-2 text-xs text-foreground/50 italic border-t border-border/20 pt-2">
                  Reviewer notes: {s.review_notes}
                </p>
              )}
            </SoftCard>
          ))}
        </div>
      )}
    </main>
  );
}
