"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import SoftCard from "@/app/components/ui/soft-card";

type Scenario = {
  id: string;
  title: string;
  category: string;
  description: string;
  starterMessage: string;
  difficulty: string;
};

type Message = { role: "user" | "assistant"; content: string };

export default function RolePlayPage() {
  const [scenarios, setScenarios] = useState<Scenario[]>([]);
  const [activeScenario, setActiveScenario] = useState<Scenario | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [loading, setLoading] = useState(true);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/ai/roleplay")
      .then((r) => r.json())
      .then((d) => setScenarios(d.scenarios ?? []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const startScenario = useCallback((s: Scenario) => {
    setActiveScenario(s);
    setMessages([{ role: "assistant", content: s.starterMessage }]);
    setInput("");
  }, []);

  const sendMessage = useCallback(async () => {
    if (!input.trim() || !activeScenario || sending) return;
    const userMsg: Message = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setSending(true);

    try {
      const res = await fetch("/api/ai/roleplay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ scenarioId: activeScenario.id, messages: newMessages }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Something went wrong. Try again!" }]);
    }
    setSending(false);
  }, [input, activeScenario, messages, sending]);

  const exitScenario = () => {
    setActiveScenario(null);
    setMessages([]);
  };

  const DIFFICULTY_COLORS: Record<string, string> = {
    Beginner: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    Intermediate: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    Advanced: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  };

  // Chat view
  if (activeScenario) {
    return (
      <main className="mx-auto flex h-[calc(100vh-64px)] w-full max-w-2xl flex-col px-4 py-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-sm font-bold text-foreground">{activeScenario.title}</h2>
            <p className="text-[11px] text-foreground/50">{activeScenario.category}</p>
          </div>
          <button
            type="button"
            onClick={exitScenario}
            className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/60 hover:bg-accent/8"
          >
            Exit
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-3 pb-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                  msg.role === "user"
                    ? "bg-accent text-white rounded-br-md"
                    : "bg-surface-muted text-foreground border border-border/30 rounded-bl-md"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {sending && (
            <div className="flex justify-start">
              <div className="rounded-2xl bg-surface-muted border border-border/30 px-4 py-2.5 text-sm text-foreground/50 rounded-bl-md">
                Thinking...
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input */}
        <div className="flex gap-2 pt-2 border-t border-border/20">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") sendMessage(); }}
            placeholder="Type your response..."
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

  // Scenario selection
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <div>
        <Link href="/dashboard" className="text-xs text-accent hover:underline">Dashboard</Link>
        <span className="mx-1 text-xs text-foreground/30">/</span>
        <span className="text-xs text-foreground/50">AI Role-Play</span>
      </div>

      <h1 className="text-2xl font-bold tracking-tight">AI Role-Play</h1>
      <p className="text-sm text-foreground/60">
        Practice real-world scenarios with an AI partner. Build confidence in language, interviews, debates, and more.
      </p>

      {loading ? (
        <p className="text-center text-sm text-foreground/40">Loading scenarios...</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {scenarios.map((s) => (
            <SoftCard
              key={s.id}
              className="cursor-pointer p-5 transition hover:border-accent/30 hover:shadow-md"
              onClick={() => startScenario(s)}
            >
              <div className="flex items-start justify-between">
                <h3 className="text-base font-bold text-foreground">{s.title}</h3>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${DIFFICULTY_COLORS[s.difficulty] ?? ""}`}>
                  {s.difficulty}
                </span>
              </div>
              <p className="mt-1 text-xs text-foreground/50">{s.category}</p>
              <p className="mt-2 text-sm text-foreground/70">{s.description}</p>
              <button
                type="button"
                className="mt-3 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent hover:bg-accent/20"
              >
                Start Conversation
              </button>
            </SoftCard>
          ))}
        </div>
      )}
    </main>
  );
}
