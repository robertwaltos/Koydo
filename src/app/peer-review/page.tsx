"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import SoftCard from "@/app/components/ui/soft-card";

type Submission = {
  id: string;
  author_id: string;
  module_id: string;
  lesson_id: string | null;
  title: string;
  content: string;
  status: string;
  created_at: string;
};

export default function PeerReviewPage() {
  const [tab, setTab] = useState<"available" | "mine">("available");
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [reviewingId, setReviewingId] = useState<string | null>(null);
  const [rating, setRating] = useState(4);
  const [feedback, setFeedback] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Submit new work state
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newModuleId, setNewModuleId] = useState("");

  const fetchSubmissions = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/peer-review?view=${tab}`);
      const data = await res.json();
      setSubmissions(data.submissions ?? []);
    } catch {}
    setLoading(false);
  }, [tab]);

  useEffect(() => { fetchSubmissions(); }, [fetchSubmissions]);

  const submitReview = async (submissionId: string) => {
    if (!feedback.trim()) return;
    setSubmitting(true);
    try {
      await fetch("/api/peer-review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "review", submissionId, rating, feedback }),
      });
      setReviewingId(null);
      setFeedback("");
      setRating(4);
      fetchSubmissions();
    } catch {}
    setSubmitting(false);
  };

  const submitWork = async () => {
    if (!newTitle.trim() || !newContent.trim() || !newModuleId.trim()) return;
    setSubmitting(true);
    try {
      await fetch("/api/peer-review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "submit", moduleId: newModuleId, title: newTitle, content: newContent }),
      });
      setShowSubmitForm(false);
      setNewTitle("");
      setNewContent("");
      setNewModuleId("");
      setTab("mine");
    } catch {}
    setSubmitting(false);
  };

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <div>
        <Link href="/dashboard" className="text-xs text-accent hover:underline">Dashboard</Link>
        <span className="mx-1 text-xs text-foreground/30">/</span>
        <span className="text-xs text-foreground/50">Peer Review</span>
      </div>

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Peer Review</h1>
        <button
          type="button"
          onClick={() => setShowSubmitForm(!showSubmitForm)}
          className="rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white"
        >
          {showSubmitForm ? "Cancel" : "Submit Work"}
        </button>
      </div>
      <p className="text-sm text-foreground/60">
        Submit your work for peer feedback or review others&apos; submissions to earn XP.
      </p>

      {/* Submit form */}
      {showSubmitForm && (
        <SoftCard className="p-5 space-y-3">
          <h3 className="text-sm font-bold text-foreground">Submit Work for Review</h3>
          <input
            type="text"
            value={newModuleId}
            onChange={(e) => setNewModuleId(e.target.value)}
            placeholder="Module ID (e.g. algebra-basics)"
            className="ui-focus-ring w-full rounded-xl border border-border bg-surface-muted px-4 py-2 text-sm"
          />
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Title of your submission"
            maxLength={200}
            className="ui-focus-ring w-full rounded-xl border border-border bg-surface-muted px-4 py-2 text-sm"
          />
          <textarea
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            placeholder="Paste your work here..."
            maxLength={5000}
            rows={6}
            className="ui-focus-ring w-full rounded-xl border border-border bg-surface-muted px-4 py-2 text-sm resize-none"
          />
          <button
            type="button"
            onClick={submitWork}
            disabled={submitting || !newTitle.trim() || !newContent.trim() || !newModuleId.trim()}
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white disabled:opacity-40"
          >
            Submit for Review
          </button>
        </SoftCard>
      )}

      {/* Tabs */}
      <div className="flex gap-2 border-b border-border/20 pb-1">
        {(["available", "mine"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`rounded-t-lg px-4 py-2 text-sm font-medium transition ${
              tab === t ? "text-accent border-b-2 border-accent" : "text-foreground/50 hover:text-foreground"
            }`}
          >
            {t === "available" ? "Available to Review" : "My Submissions"}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-center text-sm text-foreground/40">Loading...</p>
      ) : submissions.length === 0 ? (
        <SoftCard className="p-8 text-center">
          <p className="text-sm text-foreground/50">
            {tab === "available" ? "No submissions available for review right now." : "You haven't submitted any work yet."}
          </p>
        </SoftCard>
      ) : (
        <div className="space-y-3">
          {submissions.map((s) => (
            <SoftCard key={s.id} className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-bold text-foreground">{s.title}</h3>
                  <p className="text-[11px] text-foreground/40">
                    {s.module_id.replace(/-/g, " ")} &middot; {new Date(s.created_at).toLocaleDateString()}
                  </p>
                </div>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                  s.status === "completed"
                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                }`}>
                  {s.status}
                </span>
              </div>
              <p className="mt-2 text-sm text-foreground/70 whitespace-pre-wrap line-clamp-4">{s.content}</p>

              {tab === "available" && reviewingId !== s.id && (
                <button
                  type="button"
                  onClick={() => setReviewingId(s.id)}
                  className="mt-3 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent hover:bg-accent/20"
                >
                  Write Review
                </button>
              )}

              {reviewingId === s.id && (
                <div className="mt-3 space-y-2 border-t border-border/20 pt-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-foreground/50">Rating:</span>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className={`text-lg ${star <= rating ? "text-amber-400" : "text-foreground/20"}`}
                      >
                        {"\u2605"}
                      </button>
                    ))}
                  </div>
                  <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Write constructive feedback..."
                    maxLength={2000}
                    rows={3}
                    className="ui-focus-ring w-full rounded-xl border border-border bg-surface-muted px-4 py-2 text-sm resize-none"
                  />
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => submitReview(s.id)}
                      disabled={submitting || !feedback.trim()}
                      className="rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-white disabled:opacity-40"
                    >
                      Submit Review
                    </button>
                    <button
                      type="button"
                      onClick={() => { setReviewingId(null); setFeedback(""); }}
                      className="rounded-full border border-border px-4 py-1.5 text-xs text-foreground/50"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </SoftCard>
          ))}
        </div>
      )}
    </main>
  );
}
