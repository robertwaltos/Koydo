import Link from "next/link";
import { getAllLearningModules } from "@/lib/modules";
import { toModulePath } from "@/lib/routing/paths";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";

export default function ModuleNotFound() {
  const modules = getAllLearningModules().slice(0, 12);

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-12">
      <SoftCard as="header" className="border-amber-200 bg-amber-50 p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
          Module Not Found
        </p>
        <h1 className="mt-2 text-2xl font-bold text-zinc-900">That learning module link is unavailable.</h1>
        <p className="mt-2 text-sm text-zinc-700">
          The module may have been renamed or removed. Choose an available module below.
        </p>
        <div className="mt-3">
          <ProgressChip label="Available Modules" value={modules.length} tone="info" />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/modules"
            className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center justify-center border border-border bg-surface px-4 py-2 text-sm font-semibold text-foreground"
          >
            Browse All Modules
          </Link>
          <Link
            href="/dashboard"
            className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center justify-center border border-border bg-surface-muted px-4 py-2 text-sm font-semibold text-foreground"
          >
            Back to Dashboard
          </Link>
        </div>
      </SoftCard>

      <SoftCard as="section" className="p-5">
        <h2 className="text-lg font-semibold text-zinc-900">Available Modules</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {modules.map((learningModule) => (
            <Link
              key={learningModule.id}
              href={toModulePath(learningModule.id)}
              className="ui-focus-ring ui-soft-button block rounded-2xl border border-border bg-surface-muted p-3 text-sm hover:bg-surface"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-600">
                {learningModule.subject}
              </p>
              <p className="mt-1 font-medium text-zinc-900">{learningModule.title}</p>
              <p className="mt-1 text-xs text-zinc-600">{learningModule.lessons.length} lessons</p>
            </Link>
          ))}
        </div>
      </SoftCard>
    </main>
  );
}
