var CACHE_NAME = 'pwa-task-manager';
var urlsToCache = [
  '../src/components',
  '/completed',
  '../src/components/home.js',
  '../src/components/lyrics.js',
  '../src/components/auth.js',
  '../src/components/style/style.css',
  '../src/',
  '../src/App.js',
  '../src/server/index.js',
  '../src/img/ColorFull.png',
  '../src/img/playCard.png',
  '../src/img/Spotify-logo.png'
];

// Install a service worker
self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Cache and return requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Update a service worker
self.addEventListener('activate', event => {
  var cacheWhitelist = ['pwa-task-manager'];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});