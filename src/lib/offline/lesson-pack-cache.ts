const LESSON_PACK_CACHE_NAME = "koydo-lesson-packs-v1";

function hasCacheStorage() {
  return typeof window !== "undefined" && "caches" in window;
}

function normalizeRoute(route: string) {
  const trimmed = route.trim();
  if (!trimmed) return null;
  if (!trimmed.startsWith("/")) return null;
  return trimmed;
}

export async function cacheLessonPackRoutes(routes: string[]) {
  if (!hasCacheStorage()) {
    return { cachedCount: 0, failedRoutes: routes };
  }

  const normalized = [...new Set(routes.map(normalizeRoute).filter((entry): entry is string => Boolean(entry)))];
  if (normalized.length === 0) {
    return { cachedCount: 0, failedRoutes: [] as string[] };
  }

  const cache = await caches.open(LESSON_PACK_CACHE_NAME);
  let cachedCount = 0;
  const failedRoutes: string[] = [];

  for (const route of normalized) {
    try {
      const request = new Request(route, {
        method: "GET",
        credentials: "include",
      });
      const response = await fetch(request);
      if (!response.ok) {
        failedRoutes.push(route);
        continue;
      }
      await cache.put(request, response.clone());
      cachedCount += 1;
    } catch {
      failedRoutes.push(route);
    }
  }

  return { cachedCount, failedRoutes };
}

