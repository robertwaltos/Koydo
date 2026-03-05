"use client";

import { useState } from "react";
import { useFeature } from "@/lib/platform/use-feature";
import SoftCard from "@/app/components/ui/soft-card";
import SoftButton from "@/app/components/ui/soft-button";

type ExportType = "certificate" | "notes" | "progress";

export default function OfflineExports({ profileId }: { profileId: string }) {
  const { allowed, reason } = useFeature("offline_exports");
  const [exporting, setExporting] = useState<ExportType | null>(null);

  if (!allowed) {
    if (reason === "requires_subscription") {
      return (
        <SoftCard className="p-5 text-center">
          <p className="text-sm text-zinc-600">Offline Exports requires a premium subscription.</p>
          <a href="/pricing" className="mt-2 inline-block text-sm font-medium text-accent hover:underline">Upgrade</a>
        </SoftCard>
      );
    }
    return null;
  }

  const handleExport = async (type: ExportType) => {
    setExporting(type);
    try {
      const res = await fetch("/api/exports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profileId, type }),
      });
      if (res.ok) {
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `koydo-${type}-${Date.now()}.pdf`;
        a.click();
        URL.revokeObjectURL(url);
      }
    } catch {}
    setExporting(null);
  };

  return (
    <SoftCard className="space-y-4 p-5">
      <h3 className="text-lg font-semibold">Offline Exports</h3>
      <p className="text-xs text-zinc-500">Download certificates, notes, and progress reports as PDF.</p>

      <div className="flex flex-wrap gap-3">
        <SoftButton
          variant="accent"
          onClick={() => handleExport("certificate")}
          disabled={exporting !== null}
        >
          {exporting === "certificate" ? "Generating…" : "Certificate PDF"}
        </SoftButton>

        <SoftButton
          variant="neutral"
          onClick={() => handleExport("notes")}
          disabled={exporting !== null}
        >
          {exporting === "notes" ? "Generating…" : "Export Notes"}
        </SoftButton>

        <SoftButton
          variant="neutral"
          onClick={() => handleExport("progress")}
          disabled={exporting !== null}
        >
          {exporting === "progress" ? "Generating…" : "Progress Report"}
        </SoftButton>
      </div>
    </SoftCard>
  );
}
