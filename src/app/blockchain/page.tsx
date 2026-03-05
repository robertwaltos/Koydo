"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import SoftCard from "@/app/components/ui/soft-card";

type BlockchainCred = {
  id: string;
  credential_hash: string;
  token_id: string;
  chain: string;
  status: string;
  metadata: { title?: string; type?: string; issuedAt?: string; score?: number };
  created_at: string;
};

export default function BlockchainPage() {
  const [creds, setCreds] = useState<BlockchainCred[]>([]);
  const [loading, setLoading] = useState(true);
  const [verifyHash, setVerifyHash] = useState("");
  const [verifyResult, setVerifyResult] = useState<{ verified: boolean; credential?: Record<string, unknown> } | null>(null);

  useEffect(() => {
    fetch("/api/blockchain")
      .then((r) => r.json())
      .then((d) => setCreds(d.credentials ?? []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const verify = useCallback(async () => {
    if (!verifyHash.trim()) return;
    const res = await fetch("/api/blockchain", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ hash: verifyHash.trim() }),
    });
    const data = await res.json();
    setVerifyResult(data);
  }, [verifyHash]);

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <div>
        <Link href="/dashboard" className="text-xs text-accent hover:underline">Dashboard</Link>
        <span className="mx-1 text-xs text-foreground/30">/</span>
        <span className="text-xs text-foreground/50">Blockchain Credentials</span>
      </div>

      <h1 className="text-2xl font-bold tracking-tight">Blockchain-Verified Credentials</h1>
      <p className="text-sm text-foreground/60">
        Mint your certificates as verifiable on-chain credentials. Anyone can verify their authenticity.
      </p>

      {/* Verify section */}
      <SoftCard className="p-5">
        <h2 className="text-sm font-bold text-foreground mb-2">Verify a Credential</h2>
        <div className="flex gap-2">
          <input
            type="text"
            value={verifyHash}
            onChange={(e) => setVerifyHash(e.target.value)}
            placeholder="Paste credential hash..."
            className="ui-focus-ring flex-1 rounded-xl border border-border bg-surface-muted px-4 py-2 text-sm font-mono"
          />
          <button
            type="button"
            onClick={verify}
            disabled={!verifyHash.trim()}
            className="shrink-0 rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white disabled:opacity-40"
          >
            Verify
          </button>
        </div>
        {verifyResult && (
          <div className={`mt-3 rounded-xl p-3 text-sm ${
            verifyResult.verified
              ? "bg-green-50 text-green-700 border border-green-200 dark:bg-green-900/10 dark:text-green-400 dark:border-green-800"
              : "bg-red-50 text-red-600 border border-red-200 dark:bg-red-900/10 dark:text-red-400 dark:border-red-800"
          }`}>
            {verifyResult.verified ? "\u2705 Credential verified!" : "\u274C Credential not found."}
          </div>
        )}
      </SoftCard>

      {/* My credentials */}
      <h2 className="text-base font-bold text-foreground">My Minted Credentials</h2>
      {loading ? (
        <p className="text-center text-sm text-foreground/40">Loading...</p>
      ) : creds.length === 0 ? (
        <SoftCard className="p-8 text-center">
          <p className="text-sm text-foreground/50">
            No blockchain credentials yet. Complete modules and mint your certificates!
          </p>
          <Link href="/certificates" className="mt-3 inline-flex rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold text-accent hover:bg-accent/20">
            View Certificates
          </Link>
        </SoftCard>
      ) : (
        <div className="space-y-3">
          {creds.map((c) => (
            <SoftCard key={c.id} className="p-4 border-l-4 border-accent">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-bold text-foreground">{c.metadata.title ?? "Certificate"}</h3>
                  <p className="text-[11px] text-foreground/40">
                    {c.metadata.type} &middot; Minted {new Date(c.created_at).toLocaleDateString()}
                  </p>
                </div>
                <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                  {c.status}
                </span>
              </div>
              <div className="mt-2 rounded-lg bg-surface-muted p-2">
                <p className="text-[10px] text-foreground/40 font-mono break-all">
                  Hash: {c.credential_hash}
                </p>
                <p className="text-[10px] text-foreground/40 font-mono mt-0.5">
                  Token: {c.token_id}
                </p>
              </div>
            </SoftCard>
          ))}
        </div>
      )}
    </main>
  );
}
