import Link from "next/link";
import { getAllLearningModules } from "@/lib/modules";

export const dynamic = "force-dynamic";

function getExamModules() {
  return getAllLearningModules().filter((module) => module.tags?.includes("exam-prep"));
}

export default function ExamPrepPage() {
  const examModules = getExamModules();

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-12">
      <header className="rounded-2xl border border-indigo-200 bg-gradient-to-r from-sky-50 via-indigo-50 to-amber-50 p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">Exam Preparation Tracks</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900">Global Exam Prep Hub</h1>
        <p className="mt-2 max-w-3xl text-sm text-zinc-700">
          Structured pathways for major entrance and high-stakes exams. Each track includes guided lessons,
          interactive practice, quiz checkpoints, and full mock review cycles.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {examModules.map((module) => (
          <article key={module.id} className="rounded-xl border border-black/10 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">{module.subject}</p>
            <h2 className="mt-2 text-lg font-semibold text-zinc-900">{module.title}</h2>
            <p className="mt-2 text-sm text-zinc-700">{module.description}</p>
            <p className="mt-3 text-xs text-zinc-500">
              Lessons: {module.lessons.length} | Ages {module.minAge ?? "?"}-{module.maxAge ?? "?"}
            </p>
            <div className="mt-4">
              <Link
                href={`/modules/${module.id}`}
                className="inline-flex rounded-md border border-indigo-300 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-800 hover:bg-indigo-100"
              >
                Open Track
              </Link>
            </div>
          </article>
        ))}
      </section>

      {examModules.length === 0 ? (
        <p className="rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-800">
          No exam-prep tracks are currently registered. Run module generation and sync scripts to add them.
        </p>
      ) : null}
    </main>
  );
}
