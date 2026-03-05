"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SoftCard from "@/app/components/ui/soft-card";

type Pathway = {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: string[];
  relatedModules: string[];
  salaryRange: string;
  demandLevel: string;
  ageGroup: string;
};

export default function CareerPathwaysPage() {
  const [pathways, setPathways] = useState<Pathway[]>([]);
  const [demandColors, setDemandColors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/career-pathways")
      .then((r) => r.json())
      .then((d) => {
        setPathways(d.pathways ?? []);
        setDemandColors(d.demandColors ?? {});
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <div>
        <Link href="/dashboard" className="text-xs text-accent hover:underline">Dashboard</Link>
        <span className="mx-1 text-xs text-foreground/30">/</span>
        <span className="text-xs text-foreground/50">Career Pathways</span>
      </div>

      <h1 className="text-2xl font-bold tracking-tight">Career Pathways</h1>
      <p className="text-sm text-foreground/60">
        Explore careers and discover which skills and modules connect to your future goals.
      </p>

      {loading ? (
        <p className="text-center text-sm text-foreground/40">Loading pathways...</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {pathways.map((p) => {
            const isExpanded = expandedId === p.id;
            return (
              <SoftCard
                key={p.id}
                className="cursor-pointer p-5 transition hover:border-accent/30 hover:shadow-md"
                onClick={() => setExpandedId(isExpanded ? null : p.id)}
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{p.icon}</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-foreground">{p.title}</h3>
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${demandColors[p.demandLevel] ?? ""}`}>
                        {p.demandLevel}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-foreground/70">{p.description}</p>
                    <p className="mt-1 text-xs text-foreground/40">{p.salaryRange} &middot; {p.ageGroup}</p>

                    {isExpanded && (
                      <div className="mt-4 space-y-3 border-t border-border/20 pt-3">
                        <div>
                          <h4 className="text-xs font-bold text-foreground/60 uppercase tracking-wide mb-1">Key Skills</h4>
                          <div className="flex flex-wrap gap-1.5">
                            {p.skills.map((skill) => (
                              <span key={skill} className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-medium text-accent">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-foreground/60 uppercase tracking-wide mb-1">Related Modules</h4>
                          <div className="flex flex-wrap gap-1.5">
                            {p.relatedModules.map((mod) => (
                              <Link
                                key={mod}
                                href={`/modules/${mod}`}
                                className="rounded-full border border-border px-2.5 py-0.5 text-[11px] text-foreground/60 hover:text-accent hover:border-accent/30"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {mod.replace(/-/g, " ")}
                              </Link>
                            ))}
                          </div>
                        </div>
                        <Link
                          href="/explore"
                          className="mt-2 inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent hover:bg-accent/20"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Start Learning
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </SoftCard>
            );
          })}
        </div>
      )}
    </main>
  );
}
