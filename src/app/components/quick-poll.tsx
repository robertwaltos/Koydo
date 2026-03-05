"use client";

import { useCallback, useState } from "react";
import SoftCard from "@/app/components/ui/soft-card";

type Poll = {
  id: string;
  question: string;
  options: string[];
  results: Record<string, number>;
  userResponse: string | null;
};

export default function QuickPoll({ poll: initialPoll }: { poll: Poll }) {
  const [poll, setPoll] = useState(initialPoll);
  const [voting, setVoting] = useState(false);

  const totalVotes = Object.values(poll.results).reduce((s, n) => s + n, 0);
  const hasVoted = poll.userResponse !== null;

  const vote = useCallback(async (option: string) => {
    if (hasVoted || voting) return;
    setVoting(true);
    try {
      const res = await fetch("/api/polls", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "vote", pollId: poll.id, selectedOption: option }),
      });
      if (res.ok) {
        setPoll((prev) => ({
          ...prev,
          userResponse: option,
          results: {
            ...prev.results,
            [option]: (prev.results[option] ?? 0) + 1,
          },
        }));
      }
    } catch {}
    setVoting(false);
  }, [poll.id, hasVoted, voting]);

  return (
    <SoftCard className="p-4">
      <h3 className="text-sm font-bold text-foreground mb-3">{poll.question}</h3>
      <div className="space-y-2">
        {poll.options.map((option) => {
          const count = poll.results[option] ?? 0;
          const pct = totalVotes > 0 ? Math.round((count / (totalVotes + (hasVoted ? 0 : 0))) * 100) : 0;
          const isSelected = poll.userResponse === option;

          return (
            <button
              key={option}
              type="button"
              disabled={hasVoted || voting}
              onClick={() => vote(option)}
              className={`relative w-full text-left rounded-xl border px-4 py-2.5 text-sm transition overflow-hidden ${
                isSelected
                  ? "border-accent bg-accent/10 font-medium text-accent"
                  : hasVoted
                    ? "border-border/40 text-foreground/60"
                    : "border-border hover:border-accent/30 text-foreground cursor-pointer"
              }`}
            >
              {hasVoted && (
                <div
                  className="absolute inset-y-0 left-0 bg-accent/10 transition-all"
                  style={{ width: `${pct}%` }}
                />
              )}
              <span className="relative flex items-center justify-between">
                <span>{option}</span>
                {hasVoted && (
                  <span className="text-xs text-foreground/40 tabular-nums">{pct}%</span>
                )}
              </span>
            </button>
          );
        })}
      </div>
      {hasVoted && (
        <p className="mt-2 text-[11px] text-foreground/40 text-center">
          {totalVotes + 1} vote{totalVotes !== 0 ? "s" : ""}
        </p>
      )}
    </SoftCard>
  );
}
