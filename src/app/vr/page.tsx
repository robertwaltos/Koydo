"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SoftCard from "@/app/components/ui/soft-card";

type Simulation = {
  id: string;
  title: string;
  category: string;
  description: string;
  difficulty: string;
  duration: string;
  requirements: string[];
  status: string;
};

type PlatformInfo = {
  name: string;
  version: string;
  supported: string[];
  note: string;
};

const DIFFICULTY_COLORS: Record<string, string> = {
  Beginner: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  Intermediate: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  Advanced: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
};

export default function VRPage() {
  const [simulations, setSimulations] = useState<Simulation[]>([]);
  const [platform, setPlatform] = useState<PlatformInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/vr")
      .then((r) => r.json())
      .then((d) => {
        setSimulations(d.simulations ?? []);
        setPlatform(d.platformInfo ?? null);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <div>
        <Link href="/dashboard" className="text-xs text-accent hover:underline">Dashboard</Link>
        <span className="mx-1 text-xs text-foreground/30">/</span>
        <span className="text-xs text-foreground/50">VR Simulations</span>
      </div>

      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold tracking-tight">Voyager Zero</h1>
        {platform && (
          <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold text-accent">
            {platform.version}
          </span>
        )}
      </div>
      <p className="text-sm text-foreground/60">
        Immersive VR/AR learning simulations. Step inside science, history, and mathematics.
      </p>

      {platform && (
        <SoftCard className="p-4 border-accent/20">
          <div className="flex items-start gap-3">
            <span className="text-2xl">{"\u{1F97D}"}</span>
            <div>
              <p className="text-sm text-foreground/70">{platform.note}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {platform.supported.map((s) => (
                  <span key={s} className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-medium text-accent">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </SoftCard>
      )}

      {loading ? (
        <p className="text-center text-sm text-foreground/40">Loading simulations...</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {simulations.map((sim) => (
            <SoftCard key={sim.id} className="p-5 opacity-80">
              <div className="flex items-start justify-between">
                <h3 className="text-base font-bold text-foreground">{sim.title}</h3>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${DIFFICULTY_COLORS[sim.difficulty] ?? ""}`}>
                  {sim.difficulty}
                </span>
              </div>
              <p className="mt-0.5 text-xs text-foreground/40">{sim.category} &middot; {sim.duration}</p>
              <p className="mt-2 text-sm text-foreground/60">{sim.description}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="rounded-full bg-foreground/5 px-3 py-1 text-[10px] font-semibold text-foreground/40 uppercase">
                  Coming Soon
                </span>
              </div>
            </SoftCard>
          ))}
        </div>
      )}
    </main>
  );
}
