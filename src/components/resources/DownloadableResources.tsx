"use client";

import { useEffect, useState } from "react";
import { useFeature } from "@/lib/platform/use-feature";
import SoftCard from "@/app/components/ui/soft-card";
import SoftButton from "@/app/components/ui/soft-button";

type Resource = {
  id: string;
  title: string;
  file_type: string;
  size_kb: number;
  download_url: string;
};

export default function DownloadableResources({ moduleId }: { moduleId: string }) {
  const { allowed, reason } = useFeature("downloadable_resources");
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    if (!allowed) return;
    async function load() {
      try {
        const res = await fetch(`/api/resources?moduleId=${moduleId}`);
        if (res.ok) {
          const data = await res.json();
          setResources(data.resources ?? []);
        }
      } catch {}
    }
    void load();
  }, [moduleId, allowed]);

  if (!allowed) {
    if (reason === "requires_subscription") {
      return (
        <div className="text-center text-xs text-zinc-500">
          Resources available with <a href="/pricing" className="text-accent underline">premium</a>.
        </div>
      );
    }
    return null;
  }

  if (resources.length === 0) return null;

  return (
    <SoftCard className="space-y-3 p-5">
      <h3 className="text-sm font-semibold">Downloadable Resources</h3>
      {resources.map((r) => (
        <div key={r.id} className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">{r.title}</p>
            <p className="text-[10px] text-zinc-500">{r.file_type.toUpperCase()} &middot; {Math.round(r.size_kb / 1024 * 10) / 10} MB</p>
          </div>
          <SoftButton variant="ghost" onClick={() => window.open(r.download_url, "_blank")}>
            Download
          </SoftButton>
        </div>
      ))}
    </SoftCard>
  );
}
