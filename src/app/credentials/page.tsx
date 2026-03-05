"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SoftCard from "@/app/components/ui/soft-card";

type CredentialTrack = {
  id: string;
  title: string;
  description: string;
  subject: string;
  requiredModules: number;
  badgeIcon: string;
  ladderTo: string | null;
  progress: number;
  earned: boolean;
};

const BADGE_EMOJI: Record<string, string> = {
  "algebra-foundations": "\u{1F52C}",
  "pre-calculus": "\u{1F4CA}",
  "calculus-mastery": "\u{1F3C6}",
  "reading-fluency": "\u{1F4D6}",
  "critical-analysis": "\u{1F4D1}",
  "science-explorer": "\u{1F52C}",
  "advanced-science": "\u{1F9EA}",
  "coding-basics": "\u{1F4BB}",
  "web-development": "\u{1F310}",
  "world-history": "\u{1F30E}",
};

export default function CredentialsPage() {
  const [tracks, setTracks] = useState<CredentialTrack[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/credentials")
      .then((r) => r.json())
      .then((d) => setTracks(d.tracks ?? []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const subjects = [...new Set(tracks.map((t) => t.subject))];

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <div>
        <Link href="/dashboard" className="text-xs text-accent hover:underline">Dashboard</Link>
        <span className="mx-1 text-xs text-foreground/30">/</span>
        <span className="text-xs text-foreground/50">Microcredentials</span>
      </div>

      <h1 className="text-2xl font-bold tracking-tight">Microcredentials</h1>
      <p className="text-sm text-foreground/60">
        Earn stackable credentials by completing module tracks. Each credential builds toward larger qualifications.
      </p>

      {loading ? (
        <p className="text-center text-sm text-foreground/40">Loading credentials...</p>
      ) : (
        subjects.map((subject) => (
          <div key={subject}>
            <h2 className="mb-3 text-base font-bold text-foreground">{subject}</h2>
            <div className="space-y-3">
              {tracks
                .filter((t) => t.subject === subject)
                .map((track) => {
                  const pct = track.requiredModules > 0
                    ? Math.round((track.progress / track.requiredModules) * 100)
                    : 0;

                  return (
                    <SoftCard
                      key={track.id}
                      className={`p-4 ${track.earned ? "border-2 border-amber-300 dark:border-amber-700" : ""}`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl ${
                            track.earned
                              ? "bg-amber-100 dark:bg-amber-900/30"
                              : "bg-accent/10"
                          }`}
                        >
                          {BADGE_EMOJI[track.id] ?? "\u{1F3C5}"}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="text-sm font-bold text-foreground">{track.title}</h3>
                            {track.earned && (
                              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                                EARNED
                              </span>
                            )}
                          </div>
                          <p className="mt-0.5 text-xs text-foreground/60">{track.description}</p>

                          {/* Progress bar */}
                          <div className="mt-2 flex items-center gap-2">
                            <div className="h-2 flex-1 rounded-full bg-border/30 overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all ${track.earned ? "bg-amber-400" : "bg-accent"}`}
                                style={{ width: `${Math.min(pct, 100)}%` }}
                              />
                            </div>
                            <span className="text-[11px] font-medium text-foreground/50 tabular-nums">
                              {track.progress}/{track.requiredModules}
                            </span>
                          </div>

                          {track.ladderTo && (
                            <p className="mt-1.5 text-[10px] text-foreground/40">
                              Leads to: {tracks.find((t) => t.id === track.ladderTo)?.title ?? track.ladderTo}
                            </p>
                          )}
                        </div>
                      </div>
                    </SoftCard>
                  );
                })}
            </div>
          </div>
        ))
      )}
    </main>
  );
}
