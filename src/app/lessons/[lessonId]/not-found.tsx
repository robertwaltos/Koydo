import Link from "next/link";
import { getAllLearningModules } from "@/lib/modules";
import { toModulePath } from "@/lib/routing/paths";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";

export default function LessonNotFound() {
  const modules = getAllLearningModules().slice(0, 8);

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-12">
      <SoftCard as="header" className="border-rose-200 bg-rose-50 p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-rose-700">Lesson Not Found</p>
        <h1 className="mt-2 text-2xl font-bold text-zinc-900">That lesson link is unavailable.</h1>
        <p className="mt-2 text-sm text-zinc-700">
          The lesson may have moved during curriculum updates. Jump back to a valid module or dashboard path.
        </p>
        <div className="mt-3">
          <ProgressChip label="Suggested Modules" value={modules.length} tone="info" />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/dashboard"
            className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center justify-center border border-border bg-surface px-4 py-2 text-sm font-semibold text-foreground"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/modules"
            className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center justify-center border border-border bg-surface-muted px-4 py-2 text-sm font-semibold text-foreground"
          >
            Browse Modules
          </Link>
        </div>
      </SoftCard>

      <SoftCard as="section" className="p-5">
        <h2 className="text-lg font-semibold text-zinc-900">Start With These Modules</h2>
        <ul className="mt-4 space-y-2">
          {modules.map((learningModule) => (
            <li key={learningModule.id}>
              <Link
                href={toModulePath(learningModule.id)}
                className="ui-focus-ring ui-soft-button flex min-h-11 items-center justify-between rounded-2xl border border-border bg-surface-muted px-3 py-2 text-sm hover:bg-surface"
              >
                <span className="font-medium text-zinc-900">{learningModule.title}</span>
                <span className="text-xs text-zinc-600">{learningModule.lessons.length} lessons</span>
              </Link>
            </li>
          ))}
        </ul>
      </SoftCard>
    </main>
  );
}
