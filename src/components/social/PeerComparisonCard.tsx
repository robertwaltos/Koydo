"use client";

import { useEffect, useState } from "react";
import { useFeature } from "@/lib/platform/use-feature";
import SoftCard from "@/app/components/ui/soft-card";

type PercentileData = {
  percentile: number;
  totalPeers: number;
  myXP: number;
  medianXP: number;
};

export default function PeerComparisonCard({ profileId }: { profileId: string }) {
  const { allowed } = useFeature("peer_comparison");
  const [data, setData] = useState<PercentileData | null>(null);

  useEffect(() => {
    if (!allowed) return;
    async function load() {
      try {
        const res = await fetch(`/api/social/percentile?profileId=${profileId}`);
        if (res.ok) {
          setData(await res.json());
        }
      } catch {}
    }
    void load();
  }, [profileId, allowed]);

  if (!allowed || !data) return null;

  const { percentile, totalPeers, myXP, medianXP } = data;
  const message = percentile >= 90 ? "Top performer!" :
                  percentile >= 75 ? "Above average!" :
                  percentile >= 50 ? "Keeping up!" :
                  "Keep going!";

  return (
    <SoftCard className="p-5">
      <h3 className="text-sm font-semibold text-zinc-600 mb-3">How You Compare</h3>
      <div className="flex items-end gap-4">
        <div className="text-center">
          <p className="text-3xl font-bold text-accent">{percentile}<span className="text-base">th</span></p>
          <p className="text-xs text-zinc-500">percentile</p>
        </div>
        <div className="flex-1 space-y-1">
          <p className="text-sm font-medium">{message}</p>
          <p className="text-xs text-zinc-500">
            Your XP: {myXP.toLocaleString()} &middot; Median: {medianXP.toLocaleString()} &middot; {totalPeers} peers
          </p>
          {/* Visual bar */}
          <div className="relative h-2 rounded-full bg-zinc-200">
            <div
              className="absolute left-0 top-0 h-full rounded-full bg-accent"
              style={{ width: `${percentile}%` }}
            />
          </div>
        </div>
      </div>
    </SoftCard>
  );
}
