import fs from "node:fs/promises";
import path from "node:path";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import CurriculumClient from "./curriculum-client";

export const dynamic = "force-dynamic";

export default async function AdminCurriculumPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/auth/sign-in");
  }

  const { data: profile } = await supabase
    .from("user_profiles")
    .select("is_admin")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!profile?.is_admin) {
    return (
      <main className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-4 px-6 py-24">
        <h1 className="text-2xl font-semibold">Access Denied</h1>
        <p className="text-sm text-red-600">You must be an administrator to access curriculum operations.</p>
      </main>
    );
  }

  const root = process.cwd();
  const coveragePath = path.join(root, "public", "CURRICULUM-COVERAGE-REPORT.json");
  const planPath = path.join(root, "public", "CURRICULUM-EXPANSION-PLAN.json");
  const qualityPath = path.join(root, "public", "CURRICULUM-QUALITY-REPORT.json");

  const [coverageRaw, planRaw, qualityRaw] = await Promise.all([
    fs.readFile(coveragePath, "utf8").catch(() => '{"gradeSubjectSummary": []}'),
    fs.readFile(planPath, "utf8").catch(() => '{"targets": [], "totals": {"totalNeeded": 0}}'),
    fs.readFile(qualityPath, "utf8").catch(
      () => '{"totals": {"modules": 0, "averageScore": 0, "highPriorityModules": 0}, "topPriorityModules": []}',
    ),
  ]);

  const coverage = JSON.parse(coverageRaw) as {
    gradeSubjectSummary?: Array<{ gradeBand: string; subject: string; count: number }>;
  };
  const plan = JSON.parse(planRaw) as {
    targets?: Array<{
      gradeBand: string;
      subject: string;
      existingCount: number;
      targetCount: number;
      missingCount: number;
    }>;
    totals?: { totalNeeded?: number };
  };
  const quality = JSON.parse(qualityRaw) as {
    totals?: {
      modules?: number;
      averageScore?: number;
      highPriorityModules?: number;
      placeholderOptionCount?: number;
      genericReflectionCount?: number;
    };
    topPriorityModules?: Array<{
      moduleId: string;
      title: string;
      subject: string;
      score: number;
      priority: string;
      issues: string[];
    }>;
  };

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-12">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Curriculum Operations</h1>
        <p className="mt-2 text-sm text-zinc-600">
          Track subject/grade coverage, prioritize missing lessons, and drive curriculum expansion.
        </p>
      </header>

      <CurriculumClient
        summary={coverage.gradeSubjectSummary ?? []}
        planRows={plan.targets ?? []}
        totalNeeded={plan.totals?.totalNeeded ?? 0}
        quality={{
          modules: quality.totals?.modules ?? 0,
          averageScore: quality.totals?.averageScore ?? 0,
          highPriorityModules: quality.totals?.highPriorityModules ?? 0,
          placeholderOptionCount: quality.totals?.placeholderOptionCount ?? 0,
          genericReflectionCount: quality.totals?.genericReflectionCount ?? 0,
          topPriorityModules: quality.topPriorityModules ?? [],
        }}
      />
    </main>
  );
}
