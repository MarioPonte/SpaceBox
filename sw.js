self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["/.","/images/logo5.png","/images/logo6.png","/fallback.html","/css/fallback.css"]);

            /* COLOCAR DEPOIS DE TODOS OS TESTES ESTAREM CONCLUIDOS
            return cache.addAll(["/SpaceBox/.","/SpaceBox/images/logo5.png","/SpaceBox/images/logo6.png"]);
            */
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