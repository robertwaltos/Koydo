import type { SupabaseClient } from "@supabase/supabase-js";
import { getAllModulesUnfiltered } from "@/lib/modules";

type BaselineCaptureOptions = {
  capturedBy: string;
  baselineVersion?: string;
};

type BaselineModuleRow = {
  module_id: string;
  module_title: string;
  requires_baseline: boolean;
  baseline_version: string;
  baseline_payload: Record<string, unknown>;
  captured_by: string;
  captured_at: string;
};

type ModuleBaselineSummary = {
  baselineVersion: string | null;
  totalModules: number;
  modulesRequiringBaseline: number;
  modulesWithoutBaselineNeed: number;
  capturedAt: string | null;
};

function chunkArray<T>(items: T[], chunkSize: number) {
  const chunked: T[][] = [];
  for (let index = 0; index < items.length; index += chunkSize) {
    chunked.push(items.slice(index, index + chunkSize));
  }
  return chunked;
}

function moduleRequiresBaseline(module: ReturnType<typeof getAllModulesUnfiltered>[number]) {
  if (module.status === "draft") return false;
  if (!Array.isArray(module.lessons) || module.lessons.length === 0) return false;
  return module.lessons.some((lesson) =>
    Boolean(
      (lesson.questions?.length ?? 0) > 0
      || (lesson.chunks?.length ?? 0) > 0
      || (lesson.flashcards?.length ?? 0) > 0
      || (lesson.interactiveActivities?.length ?? 0) > 0,
    ),
  );
}

function buildBaselinePayload(module: ReturnType<typeof getAllModulesUnfiltered>[number]) {
  const lessonCount = module.lessons.length;
  const chunkCount = module.lessons.reduce((sum, lesson) => sum + (lesson.chunks?.length ?? 0), 0);
  const questionCount = module.lessons.reduce((sum, lesson) => sum + (lesson.questions?.length ?? 0), 0);
  const interactiveCount = module.lessons.reduce(
    (sum, lesson) => sum + (lesson.interactiveActivities?.length ?? 0),
    0,
  );
  const flashcardCount = module.lessons.reduce((sum, lesson) => sum + (lesson.flashcards?.length ?? 0), 0);

  return {
    moduleVersion: module.version ?? "unknown",
    status: module.status ?? "published",
    lessonCount,
    localeSupportCount: module.localeSupport?.length ?? 0,
    objectiveCount: module.learningObjectives?.length ?? 0,
    dynamicSurface: {
      chunkCount,
      questionCount,
      interactiveCount,
      flashcardCount,
    },
    defaultRuntimeState: {
      progressRows: 0,
      masteryRows: 0,
      eventRows: 0,
      remediationRows: 0,
      tutorConversationRows: 0,
      examErrorRows: 0,
    },
  };
}

export async function captureModuleBaselines(
  admin: SupabaseClient,
  options: BaselineCaptureOptions,
) {
  const modules = getAllModulesUnfiltered();
  const baselineVersion = options.baselineVersion ?? new Date().toISOString();
  const capturedAt = new Date().toISOString();

  const rows: BaselineModuleRow[] = modules.map((module) => ({
    module_id: module.id,
    module_title: module.title,
    requires_baseline: moduleRequiresBaseline(module),
    baseline_version: baselineVersion,
    baseline_payload: buildBaselinePayload(module),
    captured_by: options.capturedBy,
    captured_at: capturedAt,
  }));

  for (const batch of chunkArray(rows, 120)) {
    const { error } = await admin
      .from("module_baseline_snapshots")
      .upsert(batch, { onConflict: "module_id" });
    if (error) {
      throw new Error(error.message);
    }
  }

  const requiringBaseline = rows.filter((row) => row.requires_baseline).length;

  return {
    baselineVersion,
    totalModules: rows.length,
    modulesRequiringBaseline: requiringBaseline,
    modulesWithoutBaselineNeed: rows.length - requiringBaseline,
    capturedAt,
  };
}

export async function loadModuleBaselineSummary(admin: SupabaseClient): Promise<ModuleBaselineSummary> {
  const [latestResult, totalCountResult, requiresBaselineResult] = await Promise.all([
    admin
      .from("module_baseline_snapshots")
      .select("baseline_version,captured_at")
      .order("captured_at", { ascending: false })
      .limit(1)
      .maybeSingle<{ baseline_version: string; captured_at: string }>(),
    admin
      .from("module_baseline_snapshots")
      .select("module_id", { count: "exact", head: true }),
    admin
      .from("module_baseline_snapshots")
      .select("module_id", { count: "exact", head: true })
      .eq("requires_baseline", true),
  ]);

  if (latestResult.error) throw new Error(latestResult.error.message);
  if (totalCountResult.error) throw new Error(totalCountResult.error.message);
  if (requiresBaselineResult.error) throw new Error(requiresBaselineResult.error.message);

  const totalModules = totalCountResult.count ?? 0;
  const requiringBaseline = requiresBaselineResult.count ?? 0;

  return {
    baselineVersion: latestResult.data?.baseline_version ?? null,
    capturedAt: latestResult.data?.captured_at ?? null,
    totalModules,
    modulesRequiringBaseline: requiringBaseline,
    modulesWithoutBaselineNeed: totalModules - requiringBaseline,
  };
}
