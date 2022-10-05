const cacheName = "members";

//When browser read this, caches all files mentioned in array
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(
      cacheName.then(function (cache) {
        return cache.addAll([
          "/members/",
          "/members/index.html",
          "/members/morten.png",
          "/members/olivia.png",
          "/members/nina.png",
        ]);
      })
    )
  );
});

// If the user request ressource (file, html, image etc) then look for it online
// If not available online, get file from cache
self.addEventListener("fetch", function (event) {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.open(cacheName).then((cache) => cache.match(event.request))
    )
  );
});
