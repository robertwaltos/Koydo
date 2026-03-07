"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AdaptiveBackground from "@/app/components/ui/adaptive-background";

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

type VoyagerAccess = {
  fullAccess: boolean;
  accessMode: "full_beta" | "coming_soon";
  allowedClasses: string[];
  matchedClasses: string[];
  reason: string;
};

type ShowcaseItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  imagePath: string;
};

const DIFFICULTY_COLORS: Record<string, string> = {
  Beginner: "bg-emerald-100 text-emerald-700 shadow-sm",
  Intermediate: "bg-amber-100 text-amber-700 shadow-sm",
  Advanced: "bg-rose-100 text-rose-700 shadow-sm",
};

export default function VRPage() {
  const [simulations, setSimulations] = useState<Simulation[]>([]);
  const [showcase, setShowcase] = useState<ShowcaseItem[]>([]);
  const [showcaseOffset, setShowcaseOffset] = useState(0);
  const [platform, setPlatform] = useState<PlatformInfo | null>(null);
  const [access, setAccess] = useState<VoyagerAccess | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/vr")
      .then((r) => r.json())
      .then((d) => {
        setSimulations(d.simulations ?? []);
        setShowcase(d.showcase ?? []);
        setPlatform(d.platformInfo ?? null);
        setAccess(d.access ?? null);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-12 sm:px-6">
      <AdaptiveBackground ageGroup="teen-mode" />

      <div className="relative mx-auto w-full max-w-5xl">
        <header className="mb-12">
          <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-6">
            <Link href="/dashboard" className="hover:text-indigo-600 transition-colors">Dashboard</Link>
            <span className="opacity-30">/</span>
            <span className="text-zinc-400">VR Simulations</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h1 className="text-5xl md:text-6xl font-black italic tracking-tighter text-zinc-900 drop-shadow-sm leading-none">
                  VOYAGER <span className="text-indigo-600">ZERO</span>
                </h1>
                {platform && (
                  <span className="inline-flex items-center rounded-full bg-white/40 backdrop-blur-md border border-white/60 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-indigo-700 shadow-sm">
                    {platform.version}
                  </span>
                )}
              </div>
              <p className="mt-6 text-lg font-medium text-zinc-600 max-w-2xl leading-relaxed">
                Step inside the lesson. High-fidelity immersive VR/AR learning simulations 
                designed for spatial computing and next-gen discovery.
              </p>
            </div>
          </div>
        </header>

        {platform && (
          <div className="mb-10 rounded-[2.5rem] border border-white/60 bg-white/40 backdrop-blur-2xl p-8 shadow-[0_16px_48px_rgba(0,0,0,0.06)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/60 border border-white shadow-sm text-3xl">
                  {"\u{1F97D}"}
                </div>
                <div>
                  <p className="text-base font-bold text-zinc-800 leading-relaxed">{platform.note}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {platform.supported.map((s) => (
                      <span key={s} className="rounded-full bg-indigo-50 border border-indigo-100 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-indigo-600 shadow-sm">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {access && !access.fullAccess && (
                <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50/80 backdrop-blur-xl px-5 py-4 text-sm font-semibold text-amber-900 shadow-sm flex items-center gap-3">
                  <span className="text-xl">🔒</span>
                  <p>Immersive access is currently limited to Beta classes. Join the waitlist in settings.</p>
                </div>
              )}
              {access?.fullAccess && access.matchedClasses.length > 0 && (
                <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50/80 backdrop-blur-xl px-5 py-4 text-sm font-bold text-emerald-800 shadow-sm flex items-center gap-3">
                  <span className="text-xl">✨</span>
                  <p>Beta Class Active: {access.matchedClasses.join(", ")}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="family-orbit-spinner" />
            <p className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400">Initializing Simulations...</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {simulations.map((sim) => (
              <article 
                key={sim.id} 
                className={`group relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/40 p-8 backdrop-blur-xl transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:bg-white/60 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] ${sim.status === "coming_soon" ? "opacity-70" : ""}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">{sim.category}</p>
                    <h3 className="text-xl font-black tracking-tight text-zinc-900 leading-tight">{sim.title}</h3>
                  </div>
                  <span className={`shrink-0 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest ${DIFFICULTY_COLORS[sim.difficulty] ?? ""}`}>
                    {sim.difficulty}
                  </span>
                </div>
                
                <div className="mt-4 flex items-center gap-2 text-xs font-bold text-indigo-600">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-50">⏱</span>
                  {sim.duration}
                </div>

                <p className="mt-4 text-sm font-medium leading-relaxed text-zinc-600 line-clamp-2">{sim.description}</p>
                
                <div className="mt-8 flex items-center justify-between">
                  {sim.status === "coming_soon" ? (
                    <span className="rounded-full border border-dashed border-zinc-300 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-zinc-400 shadow-inner">
                      Preview
                    </span>
                  ) : (
                    <button className="rounded-full bg-indigo-600 px-6 py-2 text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-indigo-500/30 transition-transform hover:scale-105 active:scale-95">
                      Launch 🚀
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {showcase.length > 0 && (
        <section className="relative mx-auto mt-12 w-full max-w-6xl">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-black tracking-tight text-zinc-900">Diverse Immersive Library</h2>
              <p className="text-sm font-medium text-zinc-600">
                Generated concept scenes ready for beta exploration. More drops continue daily.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                const next = showcaseOffset + 12;
                setShowcaseOffset(next >= showcase.length ? 0 : next);
              }}
              className="rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-widest text-zinc-600 shadow-sm backdrop-blur-md hover:bg-white"
            >
              Show Different Set
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {showcase.slice(showcaseOffset, showcaseOffset + 12).map((item) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-3xl border border-white/70 bg-white/70 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl"
              >
                <img
                  src={item.imagePath}
                  alt={item.title}
                  loading="lazy"
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-indigo-600">{item.category}</p>
                  <h3 className="mt-1 text-sm font-black leading-snug text-zinc-900">{item.title}</h3>
                  <p className="mt-2 text-xs font-medium leading-relaxed text-zinc-600 line-clamp-2">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
