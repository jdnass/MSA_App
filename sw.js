importScripts('./listening-stream.js?v=100');
const CACHE='mosa-v104';
const ASSETS=['./listening-stream.js?v=100','./listening-legacy.js?v=97','./passive-listening.js?v=101','./listening-ui.js?v=102','./listening-test.html','./listening-test.js?v=103','./audio/listening-silence.mp3?v=97','./currency-counting.js?v=95','./module-grammar.js?v=94','./cooking-module.js?v=93','./cedar-vocab-audio.js?v=92','./cedar-module-audio.js?v=84','./broken-plural-practice.js?v=83','./madina-book2-vocab.js?v=83','./madina-book1-vocab.js?v=83','./mango-chapters-16-20.js?v=83','./mango-chapters-13-15.js?v=83','./mango-chapter-12.js?v=83','./mango-chapter-11.js?v=96','./verb-practice.js?v=83','./verb-practice-data.js?v=83','./mango-chapters-8-10.js?v=92','./mango-chapters-4-7.js?v=83','./','./index.html','./alif-baa-vocab.js?v=83','./dli-basic-data.js?v=83','./alkitaab-chapters-5-13.js?v=83','./alkitaab-part2-chapters-1-7.js?v=83','./manifest.webmanifest','./icons/moza-icon-180.png','./icons/moza-icon-192.png','./icons/moza-icon-512.png','./icons/moza-icon-1024.png','./audio/vocab/war.m4a','./audio/vocab/american.m4a','./audio/vocab/also.m4a','./audio/vocab/army.m4a','./audio/conversations/what-are-you-studying.m4a','./audio/conversations/i-am-studying-formal-arabic.m4a','./audio/conversations/with-whom-are-you-studying.m4a','./audio/conversations/i-am-studying-arabic-with-a-teacher.m4a','./audio/conversations/where-is-your-teacher-from.m4a','./audio/conversations/my-teacher-alaa-is-from-lebanon.m4a','./audio/conversations/what-does-your-teacher-do-for-work.m4a','./audio/conversations/he-is-a-translator-who-works-with-the-united-nations.m4a','./audio/conversations/really.m4a','./audio/conversations/yes-he-is-a-specialist-in-arabic.m4a','./audio/conversations/he-also-speaks-french-and-english.m4a','./audio/conversations/we-speak-about-grammar-literature-and-culture.m4a'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE&&key!==MosaListeningStream.CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('message',event=>{if(event.data?.type==='MOSA_LISTENING_CAPABILITIES')event.ports[0]?.postMessage({listeningStreamVersion:MosaListeningStream.VERSION,listeningDiagnosticVersion:103})});
self.addEventListener('fetch',event=>{
  // The diagnostic control must use the browser's real HTTP media loader.
  // Do not intercept, cache, or substitute HTML for this file, including ranges.
  const control=new URL('./audio/listening-control.mp3',self.registration.scope),requested=new URL(event.request.url);
  if(requested.origin===control.origin&&requested.pathname===control.pathname)return;
  if(['GET','HEAD'].includes(event.request.method)&&MosaListeningStream.matches(event.request.url,self.registration.scope)){event.respondWith(MosaListeningStream.respond(event.request));return;}
  if(event.request.method!=='GET')return;
  event.respondWith(fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));return response}).catch(()=>caches.match(event.request).then(hit=>hit||caches.match('./index.html'))));
});

















