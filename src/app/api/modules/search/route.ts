import { NextResponse } from "next/server";
import { getAllLearningModules } from "@/lib/modules";
import { toModulePath } from "@/lib/routing/paths";

type ModuleSearchEntry = {
  id: string;
  title: string;
  subject: string;
  description: string;
  href: string;
  normalizedId: string;
  normalizedTitle: string;
  normalizedSubject: string;
  normalizedDescription: string;
  titleTokens: string[];
};

type ModuleSearchResult = {
  id: string;
  title: string;
  subject: string;
  href: string;
  score: number;
};

const moduleSearchIndex: ModuleSearchEntry[] = getAllLearningModules().map((moduleEntry) => {
  const normalizedTitle = normalizeText(moduleEntry.title);
  return {
    id: moduleEntry.id,
    title: moduleEntry.title,
    subject: moduleEntry.subject,
    description: moduleEntry.description,
    href: toModulePath(moduleEntry.id),
    normalizedId: normalizeText(moduleEntry.id),
    normalizedTitle,
    normalizedSubject: normalizeText(moduleEntry.subject),
    normalizedDescription: normalizeText(moduleEntry.description),
    titleTokens: tokenize(normalizedTitle),
  };
});

function normalizeText(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function tokenize(value: string) {
  return value.split(/[^a-z0-9]+/g).filter(Boolean);
}

function scoreEntry(entry: ModuleSearchEntry, normalizedQuery: string, queryTokens: string[]) {
  let score = 0;

  if (entry.normalizedId === normalizedQuery) score += 1800;
  if (entry.normalizedTitle === normalizedQuery) score += 1700;
  if (entry.normalizedTitle.startsWith(normalizedQuery)) score += 900;
  if (entry.normalizedSubject === normalizedQuery) score += 640;
  if (entry.normalizedSubject.startsWith(normalizedQuery)) score += 360;
  if (entry.normalizedTitle.includes(normalizedQuery)) score += 520;
  if (entry.normalizedSubject.includes(normalizedQuery)) score += 240;
  if (entry.normalizedDescription.includes(normalizedQuery)) score += 60;

  for (const token of queryTokens) {
    if (!token) continue;
    if (entry.normalizedId.includes(token)) score += 300;
    if (entry.titleTokens.some((titleToken) => titleToken === token)) score += 260;
    if (entry.titleTokens.some((titleToken) => titleToken.startsWith(token))) score += 150;
    if (entry.normalizedSubject.includes(token)) score += 100;
    if (entry.normalizedDescription.includes(token)) score += 25;
  }

  return score;
}

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const query = requestUrl.searchParams.get("q")?.slice(0, 80) ?? "";
  const normalizedQuery = normalizeText(query);

  if (normalizedQuery.length < 2) {
    return NextResponse.json({
      query,
      count: 0,
      results: [] as ModuleSearchResult[],
    });
  }

  const queryTokens = tokenize(normalizedQuery);

  const results = moduleSearchIndex
    .map((entry) => ({
      entry,
      score: scoreEntry(entry, normalizedQuery, queryTokens),
    }))
    .filter((candidate) => candidate.score > 0)
    .sort((left, right) => {
      if (right.score !== left.score) return right.score - left.score;
      return left.entry.title.localeCompare(right.entry.title);
    })
    .slice(0, 5)
    .map(({ entry, score }) => ({
      id: entry.id,
      title: entry.title,
      subject: entry.subject,
      href: entry.href,
      score,
    }));

  return NextResponse.json({
    query,
    count: results.length,
    results,
  });
}
