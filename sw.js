self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            //return cache.addAll(["/.","/images/logo5.png","/images/logo6.png","/images/offline.png","/fallback.html","/css/fallback.css"]);
            return cache.addAll(["/SpaceBox/.","/SpaceBox/images/logo5.png","/SpaceBox/images/logo6.png","/SpaceBox/images/offline.png","/SpaceBox/fallback.html","/SpaceBox/css/fallback.css"]);
        })
    );
});



self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        }).catch(() => caches.match("fallback.html"))
    );
});

self.addEventListener('notificationclick', event => {
    event.waitUntil(clients.openWindow('apod.html'));
});