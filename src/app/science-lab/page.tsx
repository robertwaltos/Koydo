import AppleVisionLab from "./apple-vision-lab";

export default function ScienceLabPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Interactive Science Lab</h1>
      <p className="max-w-3xl text-sm text-zinc-600 dark:text-zinc-300">
        Foundation route for immersive learning. Start with capability detection, then layer in
        3D modules and on-device vision processing.
      </p>
      <AppleVisionLab />
    </main>
  );
}
