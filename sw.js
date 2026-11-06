// Minimal service worker: it only lets the browser install Enroque as an app. It caches nothing, so updates show up as soon as GitHub Pages publishes them.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
