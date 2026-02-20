import Link from "next/link";
import { notFound } from "next/navigation";
import { getLearningModuleById } from "@/lib/modules";

export default function ModuleDetailsPage({
  params,
}: {
  params: { moduleId: string } | Promise<{ moduleId: string }>;
}) {
  return <ModuleDetailsPageContent params={params} />;
}

async function ModuleDetailsPageContent({
  params,
}: {
  params: { moduleId: string } | Promise<{ moduleId: string }>;
}) {
  const resolvedParams = await Promise.resolve(params);
  const learningModule = getLearningModuleById(resolvedParams.moduleId);

  if (!learningModule) {
    notFound();
  }

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <header className="space-y-2">
        <Link href="/modules" className="text-sm text-zinc-700 hover:underline">
          &larr; Back to modules
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight">{learningModule.title}</h1>
        <p className="text-sm text-zinc-700">{learningModule.description}</p>
        <p className="text-xs text-zinc-500">
          Subject: {learningModule.subject}
          {learningModule.version ? ` | Version: ${learningModule.version}` : ""}
        </p>
      </header>

      <section className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold">Lessons</h2>
        <ul className="mt-3 space-y-2">
          {learningModule.lessons.map((lesson) => (
            <li key={lesson.id}>
              <Link
                href={`/lessons/${lesson.id}`}
                className="flex items-center justify-between rounded-md border border-emerald-200 px-3 py-2 text-sm hover:bg-emerald-50"
              >
                <span>{lesson.title}</span>
                <span className="text-xs text-zinc-500">{lesson.duration} min</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
