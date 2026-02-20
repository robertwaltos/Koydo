import Link from "next/link";
import { getAllLearningModules } from "@/lib/modules";
import ModuleCoverImage from "@/app/components/module-cover-image";

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
          <article
            key={learningModule.id}
            className="rounded-2xl border border-sky-200 bg-white p-5 shadow-sm"
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
            <p className="mt-3 text-xs text-zinc-500">
              Lessons: {learningModule.lessons.length}
              {learningModule.version ? ` | Version: ${learningModule.version}` : ""}
            </p>
            <Link
              href={`/modules/${encodeURIComponent(learningModule.id)}`}
              className="mt-4 inline-block rounded-md border border-sky-300 bg-sky-50 px-3 py-2 text-sm font-medium text-sky-900 hover:bg-sky-100"
            >
              View Module
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
