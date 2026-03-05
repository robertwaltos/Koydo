"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import SoftCard from "@/app/components/ui/soft-card";

type Thread = {
  id: string;
  participant_a: string;
  participant_b: string;
  updated_at: string;
};

type Message = {
  id: string;
  thread_id: string;
  sender_id: string;
  content: string;
  created_at: string;
};

export default function MessagesPage() {
  const [threads, setThreads] = useState<Thread[]>([]);
  const [activeThread, setActiveThread] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    fetch("/api/messages")
      .then((r) => r.json())
      .then((d) => setThreads(d.threads ?? []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const loadThread = useCallback(async (threadId: string) => {
    setActiveThread(threadId);
    const res = await fetch(`/api/messages?threadId=${threadId}`);
    const data = await res.json();
    setMessages(data.messages ?? []);
  }, []);

  const sendMessage = async () => {
    if (!input.trim() || !activeThread || sending) return;
    setSending(true);
    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ threadId: activeThread, content: input }),
      });
      const data = await res.json();
      if (data.message) {
        setMessages((prev) => [...prev, data.message]);
        setInput("");
      }
    } catch {}
    setSending(false);
  };

  if (activeThread) {
    return (
      <main className="mx-auto flex h-[calc(100vh-64px)] w-full max-w-2xl flex-col px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-bold text-foreground">Conversation</h2>
          <button
            type="button"
            onClick={() => { setActiveThread(null); setMessages([]); }}
            className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/60 hover:bg-accent/8"
          >
            Back
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-3 pb-4">
          {messages.map((msg) => (
            <div key={msg.id} className="flex justify-start">
              <div className="max-w-[80%] rounded-2xl px-4 py-2.5 text-sm bg-surface-muted text-foreground border border-border/30">
                <p className="text-[10px] text-foreground/30 mb-1">{msg.sender_id.slice(0, 8)}</p>
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 pt-2 border-t border-border/20">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") sendMessage(); }}
            placeholder="Type a message..."
            maxLength={1000}
            className="ui-focus-ring flex-1 rounded-xl border border-border bg-surface-muted px-4 py-2.5 text-sm"
            disabled={sending}
          />
          <button
            type="button"
            onClick={sendMessage}
            disabled={!input.trim() || sending}
            className="shrink-0 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-40"
          >
            Send
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <div>
        <Link href="/dashboard" className="text-xs text-accent hover:underline">Dashboard</Link>
        <span className="mx-1 text-xs text-foreground/30">/</span>
        <span className="text-xs text-foreground/50">Messages</span>
      </div>

      <h1 className="text-2xl font-bold tracking-tight">Messages</h1>
      <p className="text-sm text-foreground/60">
        Send and receive moderated messages with classmates and tutors.
      </p>

      {loading ? (
        <p className="text-center text-sm text-foreground/40">Loading...</p>
      ) : threads.length === 0 ? (
        <SoftCard className="p-8 text-center">
          <p className="text-sm text-foreground/50">No conversations yet. Start a conversation from a peer tutoring session!</p>
        </SoftCard>
      ) : (
        <div className="space-y-2">
          {threads.map((t) => (
            <SoftCard
              key={t.id}
              className="cursor-pointer p-4 transition hover:border-accent/30"
              onClick={() => loadThread(t.id)}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-foreground">
                  Conversation
                </p>
                <p className="text-[11px] text-foreground/40">
                  {new Date(t.updated_at).toLocaleDateString()}
                </p>
              </div>
            </SoftCard>
          ))}
        </div>
      )}
    </main>
  );
}
