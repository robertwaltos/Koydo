import fs from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { requireAdminForApi } from "@/lib/admin/auth";

type PromptKey = "seedanceVideo" | "seedanceAnimation" | "lessonImage" | "researchAgent";

type PromptMetaEntry = {
  source?: string;
  version?: string;
  qaStatus?: string;
};

type PromptPack = {
  schemaVersion?: string;
  generatedAt?: string;
  totals?: { modules?: number; lessons?: number };
  modules?: Array<{
    moduleId: string;
    moduleTitle: string;
    lessons?: Array<{
      lessonId: string;
      lessonTitle: string;
      lessonType?: string;
      promptSources?: Partial<Record<PromptKey, string>>;
      promptMeta?: Partial<Record<PromptKey, PromptMetaEntry>>;
    }>;
  }>;
};

export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const promptPackPath = path.join(process.cwd(), "public", "LESSON-MEDIA-PROMPT-PACK.json");

  let promptPack: PromptPack;
  try {
    const raw = await fs.readFile(promptPackPath, "utf8");
    promptPack = JSON.parse(raw) as PromptPack;
  } catch {
    return NextResponse.json(
      { error: "Missing LESSON-MEDIA-PROMPT-PACK.json. Run prompt generation first." },
      { status: 500 },
    );
  }

  const modules = (promptPack.modules ?? []).map((moduleEntry) => ({
    moduleId: moduleEntry.moduleId,
    moduleTitle: moduleEntry.moduleTitle,
    lessonCount: (moduleEntry.lessons ?? []).length,
    lessons: (moduleEntry.lessons ?? []).map((lesson) => ({
      lessonId: lesson.lessonId,
      lessonTitle: lesson.lessonTitle,
      lessonType: lesson.lessonType ?? "unknown",
      promptSources: lesson.promptSources ?? {},
      promptMeta: lesson.promptMeta ?? {},
    })),
  }));

  return NextResponse.json({
    generatedAt: promptPack.generatedAt ?? null,
    schemaVersion: promptPack.schemaVersion ?? null,
    totals: {
      modules: promptPack.totals?.modules ?? modules.length,
      lessons: promptPack.totals?.lessons ?? modules.reduce((acc, entry) => acc + entry.lessonCount, 0),
    },
    modules,
  });
}
