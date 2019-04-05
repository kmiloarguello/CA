var CACHE_NAME = 'ca-v1';
var urlsToCache = [
    "/",
    "/index.html",
    "/js/index.js",
    "/js/1.bundle.js",
    "/js/2.bundle.js",
    "/js/3.bundle.js",
    "/js/4.bundle.js",
    "/js/5.bundle.js",
    "/js/6.bundle.js",
    "/css/index.css",
    "/css/animate.css",
    "/img/camilo-arguello-pf.jpg",
    "/img/physics.png"
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
    caches.open(CACHE_NAME)
        .then(function(cache) {
        	return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
        })
    );
});
    