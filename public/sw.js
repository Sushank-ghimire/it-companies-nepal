const CACHE_VERSION = "v1";
const STATIC_CACHE = `itcompaniesnepal-static-${CACHE_VERSION}`;
const RUNTIME_CACHE = `itcompaniesnepal-runtime-${CACHE_VERSION}`;
const OFFLINE_URL = "/";

const STATIC_ASSETS = ["/"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_ASSETS)),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((key) => key !== STATIC_CACHE && key !== RUNTIME_CACHE)
          .map((key) => caches.delete(key)),
      );
      await self.clients.claim();
    })(),
  );
});

function isNextStaticAsset(url) {
  // Hashed, immutable build output — safe to cache-first forever.
  return (
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/_next/image") ||
    /\.(?:woff2?|ttf|eot|ico|png|jpg|jpeg|gif|webp|avif|svg)$/.test(
      url.pathname,
    )
  );
}

function isApiOrData(url) {
  // Next.js data requests for pages (getServerSideProps/getStaticProps json)
  // and API routes — these carry app state, so prefer fresh data.
  return (
    url.pathname.startsWith("/_next/data/") || url.pathname.startsWith("/api/")
  );
}

async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) return cached;

  const response = await fetch(request);
  if (response && response.ok) {
    const cache = await caches.open(cacheName);
    cache.put(request, response.clone());
  }
  return response;
}

async function networkFirst(request, cacheName) {
  try {
    const response = await fetch(request);
    if (response && response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    const cached = await caches.match(request);
    if (cached) return cached;

    // Navigation fallback so users offline still see the shell.
    if (request.mode === "navigate") {
      const offline = await caches.match(OFFLINE_URL);
      if (offline) return offline;
    }
    throw err;
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cached = await caches.match(request);

  const networkPromise = fetch(request)
    .then((response) => {
      if (response && response.ok) {
        caches
          .open(cacheName)
          .then((cache) => cache.put(request, response.clone()));
      }
      return response;
    })
    .catch(() => undefined);

  return cached || networkPromise;
}

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") return;

  const url = new URL(request.url);

  if (url.origin !== self.location.origin) return;
  if (!url.protocol.startsWith("http")) return;

  if (isNextStaticAsset(url)) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  if (isApiOrData(url)) {
    event.respondWith(networkFirst(request, RUNTIME_CACHE));
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(networkFirst(request, RUNTIME_CACHE));
    return;
  }
  event.respondWith(staleWhileRevalidate(request, RUNTIME_CACHE));
});
