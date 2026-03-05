"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SoftCard from "@/app/components/ui/soft-card";

type Certificate = {
  id: string;
  certificate_type: string;
  title: string;
  description: string | null;
  issued_at: string;
  module_id: string | null;
  exam_id: string | null;
  score: number | null;
};

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch { return ""; }
}

function CertificateCard({ cert }: { cert: Certificate }) {
  const shareText = `I earned the "${cert.title}" certificate on KOYDO!`;

  const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: "KOYDO Certificate", text: shareText, url: window.location.origin });
        return;
      } catch {}
    }
    try { await navigator.clipboard.writeText(shareText); } catch {}
  };

  return (
    <SoftCard className="relative overflow-hidden border-2 border-amber-200/50 dark:border-amber-800/30">
      {/* Decorative ribbon */}
      <div className="absolute -right-8 -top-8 h-16 w-16 rotate-45 bg-gradient-to-br from-amber-400 to-amber-500 opacity-20" />

      <div className="p-5">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-amber-200 text-2xl dark:from-amber-900/30 dark:to-amber-800/20">
            {cert.certificate_type === "exam_pass" ? "&#127941;" : cert.certificate_type === "milestone" ? "&#11088;" : "&#127891;"}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-base font-bold text-foreground">{cert.title}</h3>
            {cert.description && (
              <p className="mt-0.5 text-sm text-foreground/60">{cert.description}</p>
            )}
            <div className="mt-2 flex flex-wrap items-center gap-3 text-[11px] text-foreground/40">
              <span>Issued: {formatDate(cert.issued_at)}</span>
              {cert.score != null && <span>Score: {cert.score}%</span>}
              <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                Verified
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={share}
            className="ui-focus-ring rounded-full border border-border px-3 py-1 text-[11px] font-medium text-foreground/60 hover:bg-accent/8"
          >
            Share
          </button>
          {cert.module_id && (
            <Link
              href={`/modules/${cert.module_id}`}
              className="rounded-full border border-border px-3 py-1 text-[11px] font-medium text-accent hover:bg-accent/8"
            >
              View Module
            </Link>
          )}
        </div>
      </div>
    </SoftCard>
  );
}

export default function CertificatesPage() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/certificates")
      .then((r) => r.json())
      .then((d) => setCertificates(d.certificates ?? []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-12">
      <div>
        <Link href="/dashboard" className="text-xs text-accent hover:underline">Dashboard</Link>
        <span className="mx-1 text-xs text-foreground/30">/</span>
        <span className="text-xs text-foreground/50">Certificates</span>
      </div>

      <h1 className="text-2xl font-bold tracking-tight">My Certificates</h1>
      <p className="text-sm text-foreground/60">
        Earned through completed modules and passed exams. Share your achievements with the world.
      </p>

      {loading ? (
        <p className="text-center text-sm text-foreground/40">Loading...</p>
      ) : certificates.length === 0 ? (
        <SoftCard className="p-8 text-center">
          <p className="text-3xl mb-3">&#127891;</p>
          <p className="text-foreground/50 text-sm">
            No certificates yet. Complete modules and pass exams to earn your first certificate!
          </p>
          <Link
            href="/explore"
            className="mt-4 inline-flex rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white hover:brightness-110"
          >
            Start Learning
          </Link>
        </SoftCard>
      ) : (
        <div className="space-y-4">
          {certificates.map((cert) => (
            <CertificateCard key={cert.id} cert={cert} />
          ))}
        </div>
      )}
    </main>
  );
}
