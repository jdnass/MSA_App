const cacheName = "suwar-v2";
const files = ["./","./index.html","./styles.css","./app.js","./data.js","./manifest.webmanifest","./icon.svg","./icon-192.png","./icon-512.png"];
self.addEventListener("install",event=>{
  event.waitUntil(caches.open(cacheName).then(cache=>cache.addAll(files)));
});
self.addEventListener("activate",event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith("suwar-")&&key!==cacheName).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET" || !event.request.url.startsWith(self.registration.scope))return;
  event.respondWith(fetch(event.request).then(async response=>{
    if(response.ok){const cache=await caches.open(cacheName);await cache.put(event.request,response.clone());}
    return response;
  }).catch(async()=>await caches.match(event.request) || Response.error()));
});
