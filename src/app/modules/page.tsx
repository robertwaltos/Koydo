import Link from "next/link";
import { getAllLearningModules } from "@/lib/modules";
import ModuleCoverImage from "@/app/components/module-cover-image";
import { toModulePath } from "@/lib/routing/paths";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";

export default function ModulesPage() {
  const learningModules = getAllLearningModules();

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-12">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Learning Modules</h1>
        <p className="text-sm text-zinc-600">
          Modules are registered from a central registry so new modules automatically appear here.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {learningModules.map((learningModule) => (
          <SoftCard
            key={learningModule.id}
            as="article"
            interactive
            className="border-sky-200 p-5"
          >
            <ModuleCoverImage
              moduleId={learningModule.id}
              moduleTitle={learningModule.title}
              fallbackSrc={learningModule.thumbnail}
              className="h-40 w-full rounded-xl border border-sky-100 object-cover"
            />
            <p className="mt-3 text-xs uppercase tracking-wide text-zinc-500">
              {learningModule.subject}
            </p>
            <h2 className="mt-2 text-lg font-semibold text-zinc-900">{learningModule.title}</h2>
            <p className="mt-2 text-sm text-zinc-700">
              {learningModule.description}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <ProgressChip label="Lessons" value={learningModule.lessons.length} tone="info" />
              {learningModule.version ? <ProgressChip label="Version" value={learningModule.version} /> : null}
            </div>
            <Link
              href={toModulePath(learningModule.id)}
              className="ui-soft-button ui-focus-ring mt-4 inline-flex min-h-11 items-center justify-center border border-sky-300 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-900 hover:bg-sky-100"
            >
              View Module
            </Link>
          </SoftCard>
        ))}
      </section>
    </main>
  );
}
