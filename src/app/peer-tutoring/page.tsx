"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import SoftCard from "@/app/components/ui/soft-card";

type TutoringRequest = {
  id: string;
  requester_id: string;
  tutor_id: string | null;
  subject: string;
  topic: string;
  description: string | null;
  status: string;
  created_at: string;
};

export default function PeerTutoringPage() {
  const [tab, setTab] = useState<"open" | "mine">("open");
  const [requests, setRequests] = useState<TutoringRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const fetchRequests = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/peer-tutoring?view=${tab}`);
      const data = await res.json();
      setRequests(data.requests ?? []);
    } catch {}
    setLoading(false);
  }, [tab]);

  useEffect(() => { fetchRequests(); }, [fetchRequests]);

  const createRequest = async () => {
    if (!subject.trim() || !topic.trim()) return;
    setSubmitting(true);
    try {
      await fetch("/api/peer-tutoring", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "request", subject, topic, description }),
      });
      setShowForm(false);
      setSubject("");
      setTopic("");
      setDescription("");
      setTab("mine");
    } catch {}
    setSubmitting(false);
  };

  const acceptRequest = async (requestId: string) => {
    await fetch("/api/peer-tutoring", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "accept", requestId }),
    });
    fetchRequests();
  };

  const STATUS_COLORS: Record<string, string> = {
    open: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    matched: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    completed: "bg-gray-100 text-gray-600 dark:bg-gray-800/30 dark:text-gray-400",
  };

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <div>
        <Link href="/dashboard" className="text-xs text-accent hover:underline">Dashboard</Link>
        <span className="mx-1 text-xs text-foreground/30">/</span>
        <span className="text-xs text-foreground/50">Peer Tutoring</span>
      </div>

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Peer Tutoring</h1>
        <button
          type="button"
          onClick={() => setShowForm(!showForm)}
          className="rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white"
        >
          {showForm ? "Cancel" : "Ask for Help"}
        </button>
      </div>
      <p className="text-sm text-foreground/60">
        Get help from peers or volunteer to tutor others. Earn XP by helping!
      </p>

      {showForm && (
        <SoftCard className="p-5 space-y-3">
          <h3 className="text-sm font-bold text-foreground">Request Help</h3>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject (e.g. Mathematics)"
            maxLength={100}
            className="ui-focus-ring w-full rounded-xl border border-border bg-surface-muted px-4 py-2 text-sm"
          />
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Specific topic (e.g. Quadratic equations)"
            maxLength={200}
            className="ui-focus-ring w-full rounded-xl border border-border bg-surface-muted px-4 py-2 text-sm"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe what you need help with..."
            maxLength={1000}
            rows={3}
            className="ui-focus-ring w-full rounded-xl border border-border bg-surface-muted px-4 py-2 text-sm resize-none"
          />
          <button
            type="button"
            onClick={createRequest}
            disabled={submitting || !subject.trim() || !topic.trim()}
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white disabled:opacity-40"
          >
            Post Request
          </button>
        </SoftCard>
      )}

      <div className="flex gap-2 border-b border-border/20 pb-1">
        {(["open", "mine"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`rounded-t-lg px-4 py-2 text-sm font-medium transition ${
              tab === t ? "text-accent border-b-2 border-accent" : "text-foreground/50 hover:text-foreground"
            }`}
          >
            {t === "open" ? "Help Others" : "My Requests"}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-center text-sm text-foreground/40">Loading...</p>
      ) : requests.length === 0 ? (
        <SoftCard className="p-8 text-center">
          <p className="text-sm text-foreground/50">
            {tab === "open" ? "No open help requests right now." : "You haven't made any requests."}
          </p>
        </SoftCard>
      ) : (
        <div className="space-y-3">
          {requests.map((r) => (
            <SoftCard key={r.id} className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-bold text-foreground">{r.topic}</h3>
                  <p className="text-[11px] text-foreground/40">{r.subject} &middot; {new Date(r.created_at).toLocaleDateString()}</p>
                </div>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${STATUS_COLORS[r.status] ?? ""}`}>
                  {r.status}
                </span>
              </div>
              {r.description && <p className="mt-2 text-sm text-foreground/60">{r.description}</p>}
              {tab === "open" && r.status === "open" && (
                <button
                  type="button"
                  onClick={() => acceptRequest(r.id)}
                  className="mt-3 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent hover:bg-accent/20"
                >
                  Volunteer to Help
                </button>
              )}
            </SoftCard>
          ))}
        </div>
      )}
    </main>
  );
}
