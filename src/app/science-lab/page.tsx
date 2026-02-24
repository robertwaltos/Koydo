import AppleVisionLab from "./apple-vision-lab";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";

export default function ScienceLabPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <SoftCard as="header" className="border-accent/20 bg-[var(--gradient-hero)] p-6">
        <h1 className="text-3xl font-semibold tracking-tight">Interactive Science Lab</h1>
        <p className="mt-2 max-w-3xl text-sm text-zinc-700">
          Foundation route for immersive learning. Start with capability detection,
          then layer in 3D modules and on-device vision processing.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <ProgressChip label="Phase" value="Readiness" tone="info" />
          <ProgressChip label="Focus" value="WebXR + Vision" tone="neutral" />
        </div>
      </SoftCard>
      <AppleVisionLab />
    </main>
  );
}
