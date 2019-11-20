const CACHE_NAME = 'v1';
const CACHE_ASSETS = [
    '/{repository}/acknowledgment.html',
    '/{repository}/contacts.html',
    '/{repository}/edit-user.html',
    '/{repository}/index.html',
    '/{repository}/notifications.html',
    '/{repository}/settings.html',
    '/{repository}/summary.html',
    '/{repository}/css/styles.css',
    '/{repository}/scripts/main.js'
]

self.addEventListener('install', event => {
    console.log('Hey, Im the service worker, Im installed');
    event.waitUntil(
        caches
        .open(CACHE_NAME)
        .then(cache => {
            console.log('caching now');
            cache.addAll(CACHE_ASSETS);
        })
        .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    console.log('Activated');
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        console.log('clearing old cache')
                        return caches.delete(cache);
                    };
                })
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    console.log('Service worker fetching');
    event.respondWith(
        fetch(event.request)
        .catch(() => caches.match(event.request))
    )
})