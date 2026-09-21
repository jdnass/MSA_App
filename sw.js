const CACHE='mosa-v29';
const ASSETS=['./','./index.html','./alif-baa-vocab.js?v=29','./dli-basic-data.js?v=29','./alkitaab-chapters-5-13.js?v=29','./manifest.webmanifest','./icons/moza-icon-180.png','./icons/moza-icon-192.png','./icons/moza-icon-512.png','./icons/moza-icon-1024.png','./audio/vocab/war.m4a','./audio/vocab/american.m4a','./audio/vocab/also.m4a','./audio/vocab/army.m4a'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  event.respondWith(fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));return response}).catch(()=>caches.match(event.request).then(hit=>hit||caches.match('./index.html'))));
});
