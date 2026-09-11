const VERSION="mystudyplaner-v330";
self.addEventListener("install",e=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil((async()=>{try{const ks=await caches.keys();await Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)));}catch(_){} await self.clients.claim(); try{await self.registration.unregister();}catch(_){} })()));
self.addEventListener("fetch",e=>{});
