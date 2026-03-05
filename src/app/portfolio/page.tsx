"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SoftCard from "@/app/components/ui/soft-card";

type Portfolio = {
  displayName: string;
  totalXP: number;
  level: number;
  currentStreak: number;
  bestStreak: number;
  modulesCompleted: number;
  examsPassed: number;
  milestonesEarned: number;
  badgeCount: number;
  certificates: Array<{ id: string; title: string; certificate_type: string; issued_at: string; score?: number }>;
  badges: Array<{ id: string; earnedAt: string }>;
  joinedAt: string;
};

function StatCard({ label, value, icon }: { label: string; value: string | number; icon: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border/40 bg-surface p-3">
      <span className="text-xl">{icon}</span>
      <div>
        <p className="text-lg font-bold tabular-nums text-foreground">{value}</p>
        <p className="text-[11px] text-foreground/50">{label}</p>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [data, setData] = useState<Portfolio | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/portfolio")
      .then((r) => r.json())
      .then((d) => { if (d.displayName) setData(d); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const sharePortfolio = async () => {
    const text = data
      ? `Check out my KOYDO learning portfolio! Level ${data.level} with ${data.totalXP.toLocaleString()} XP, ${data.modulesCompleted} modules completed.`
      : "Check out my KOYDO learning portfolio!";
    if (navigator.share) {
      try { await navigator.share({ title: "My KOYDO Portfolio", text, url: window.location.href }); return; } catch {}
    }
    try { await navigator.clipboard.writeText(`${text}\n${window.location.href}`); } catch {}
  };

  if (loading) return <main className="p-12 text-center text-foreground/40">Loading portfolio...</main>;
  if (!data) return (
    <main className="mx-auto max-w-2xl p-12 text-center">
      <p className="text-foreground/50">Sign in to view your portfolio.</p>
      <Link href="/auth/sign-in" className="mt-4 inline-flex rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white">
        Sign In
      </Link>
    </main>
  );

  const memberSince = new Date(data.joinedAt).toLocaleDateString(undefined, { year: "numeric", month: "long" });

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-12">
      <div>
        <Link href="/dashboard" className="text-xs text-accent hover:underline">Dashboard</Link>
        <span className="mx-1 text-xs text-foreground/30">/</span>
        <span className="text-xs text-foreground/50">My Portfolio</span>
      </div>

      {/* Profile header */}
      <SoftCard className="overflow-hidden">
        <div className="bg-gradient-to-r from-accent/20 via-accent/10 to-transparent p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/20 text-2xl font-bold text-accent">
              {data.displayName.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">{data.displayName}</h1>
              <p className="text-sm text-foreground/50">
                Level {data.level} &middot; Member since {memberSince}
              </p>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <button
              type="button"
              onClick={sharePortfolio}
              className="rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent hover:bg-accent/20"
            >
              Share Portfolio
            </button>
          </div>
        </div>
      </SoftCard>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard label="Total XP" value={data.totalXP.toLocaleString()} icon="&#9889;" />
        <StatCard label="Level" value={data.level} icon="&#11088;" />
        <StatCard label="Current Streak" value={`${data.currentStreak}d`} icon="&#128293;" />
        <StatCard label="Best Streak" value={`${data.bestStreak}d`} icon="&#127942;" />
        <StatCard label="Modules Done" value={data.modulesCompleted} icon="&#128218;" />
        <StatCard label="Exams Passed" value={data.examsPassed} icon="&#9989;" />
        <StatCard label="Milestones" value={data.milestonesEarned} icon="&#127895;" />
        <StatCard label="Badges" value={data.badgeCount} icon="&#127941;" />
      </div>

      {/* Certificates */}
      {data.certificates.length > 0 && (
        <SoftCard className="p-5">
          <h2 className="text-base font-bold text-foreground mb-3">Certificates</h2>
          <div className="space-y-2">
            {data.certificates.slice(0, 10).map((cert) => (
              <div key={cert.id} className="flex items-center justify-between rounded-lg border border-border/30 p-3">
                <div>
                  <p className="text-sm font-medium text-foreground">{cert.title}</p>
                  <p className="text-[11px] text-foreground/40">
                    {new Date(cert.issued_at).toLocaleDateString()}
                    {cert.score != null && ` · Score: ${cert.score}%`}
                  </p>
                </div>
                <span className="text-xs font-medium text-green-600 dark:text-green-400">Verified</span>
              </div>
            ))}
          </div>
          {data.certificates.length > 10 && (
            <Link href="/certificates" className="mt-2 block text-center text-xs text-accent hover:underline">
              View all {data.certificates.length} certificates
            </Link>
          )}
        </SoftCard>
      )}
    </main>
  );
}
