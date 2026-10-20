// The Crafty Club: service worker minimo, serve solo a rendere il sito installabile come app.
// Non salva nulla in memoria: ogni richiesta va sempre in rete, così si vede sempre la versione aggiornata.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
