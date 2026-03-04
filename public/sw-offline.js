const RUNTIME_VERSION = "koydo-offline-v1";
const NAVIGATION_CACHE = `${RUNTIME_VERSION}-pages`;
const ASSET_CACHE = `${RUNTIME_VERSION}-assets`;
const LESSON_PACK_CACHE = "koydo-lesson-packs-v1";

const CORE_ASSETS = ["/", "/explore", "/manifest.json"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(ASSET_CACHE);
      await cache.addAll(CORE_ASSETS);
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((key) =>
            key !== NAVIGATION_CACHE
            && key !== ASSET_CACHE
            && key !== LESSON_PACK_CACHE)
          .map((key) => caches.delete(key)),
      );
      await self.clients.claim();
    })(),
  );
});

function isSameOriginRequest(request) {
  const url = new URL(request.url);
  return url.origin === self.location.origin;
}

function isCacheableAssetRequest(request) {
  return (
    request.destination === "script"
    || request.destination === "style"
    || request.destination === "font"
    || request.destination === "image"
    || request.destination === "document"
  );
}

function isApiRequest(request) {
  return new URL(request.url).pathname.startsWith("/api/");
}

async function cacheFirstFromCaches(request, cacheNames) {
  for (const cacheName of cacheNames) {
    const cache = await caches.open(cacheName);
    const hit = await cache.match(request);
    if (hit) {
      return hit;
    }
  }
  return null;
}

async function handleNavigationRequest(request) {
  const pageCache = await caches.open(NAVIGATION_CACHE);

  try {
    const networkResponse = await fetch(request);
    if (networkResponse && networkResponse.ok) {
      await pageCache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch {
    const cached = await cacheFirstFromCaches(request, [NAVIGATION_CACHE, LESSON_PACK_CACHE, ASSET_CACHE]);
    if (cached) {
      return cached;
    }

    return new Response(
      "<!doctype html><html><head><meta charset='utf-8'/><title>Offline</title></head><body><h1>Offline</h1><p>This lesson is not cached yet. Open it once while online to add it to your offline pack.</p></body></html>",
      {
        status: 503,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
        },
      },
    );
  }
}

async function handleAssetRequest(request) {
  const assetCache = await caches.open(ASSET_CACHE);
  const cached = await assetCache.match(request);

  if (cached) {
    fetch(request)
      .then((response) => {
        if (response && response.ok) {
          void assetCache.put(request, response.clone());
        }
      })
      .catch(() => {
        // Ignore refresh errors; cached response is already returned.
      });
    return cached;
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse && networkResponse.ok) {
      await assetCache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch {
    const packHit = await cacheFirstFromCaches(request, [LESSON_PACK_CACHE, NAVIGATION_CACHE]);
    if (packHit) return packHit;
    throw new Error("Asset unavailable offline");
  }
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  if (!isSameOriginRequest(request)) return;
  if (isApiRequest(request)) return;

  if (request.mode === "navigate") {
    event.respondWith(handleNavigationRequest(request));
    return;
  }

  if (isCacheableAssetRequest(request)) {
    event.respondWith(handleAssetRequest(request));
  }
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") {
    void self.skipWaiting();
  }
});

