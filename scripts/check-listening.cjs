const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const html=fs.readFileSync('index.html','utf8');
const el=()=>({style:{},classList:{add(){},remove(){},contains(){return false},toggle(){}},addEventListener(){},querySelector:()=>null,querySelectorAll:()=>[],appendChild(){},setAttribute(){},innerHTML:''});
const attachedAudio=new Set();
const actions=new Map(),session={setActionHandler:(action,handler)=>actions.set(action,handler),setPositionState(){}};
const cacheMaps=new Map();
const cacheAPI={async open(name){if(!cacheMaps.has(name))cacheMaps.set(name,new Map());const data=cacheMaps.get(name);const key=value=>typeof value==='string'?value:value.url;return {async match(value){const saved=data.get(key(value));return saved?new Response(saved.body,{status:saved.status,headers:saved.headers}):undefined;},async put(value,response){data.set(key(value),{body:await response.blob(),status:response.status,headers:new Headers(response.headers)});},async delete(value){return data.delete(key(value));},async keys(){return [...data.keys()].map(url=>new Request(url));}};},async keys(){return [...cacheMaps.keys()];},async delete(name){return cacheMaps.delete(name);}};
class TestChannel{constructor(){this.port1={onmessage:null,close(){}};this.port2={postMessage:data=>queueMicrotask(()=>this.port1.onmessage?.({data})),close(){}};}}
const serviceWorker={controller:{postMessage(message,ports){ports[0].postMessage({listeningStreamVersion:100});}},addEventListener(){},removeEventListener(){}};
const ctx={window:{addEventListener(){}},document:{body:{appendChild(audio){attachedAudio.add(audio)}},querySelector:()=>el(),querySelectorAll:()=>[],addEventListener(){},createElement:()=>el()},localStorage:{getItem:()=>null,setItem(){},removeItem(){}},navigator:{serviceWorker,mediaSession:session,audioSession:{}},console,setTimeout:()=>{},clearTimeout,URL,Blob,AbortController,Request,Response,Headers,ReadableStream,MessageChannel:TestChannel,caches:cacheAPI,crypto:require('node:crypto'),location:{href:'https://example.com/'},MediaMetadata:class{constructor(data){Object.assign(this,data)}},Audio:class{constructor(src){this.src=src;this.currentTime=0;this.duration=100;this.readyState=1;this.loads=0;}play(){this.onplay?.();return Promise.resolve();}pause(){this.onpause?.();}load(){this.loads++;this.currentTime=0;this.onloadedmetadata?.();}setAttribute(){}removeAttribute(){}remove(){attachedAudio.delete(this)}},fetch:async(url,{signal,headers}={})=>{signal?.throwIfAborted();if(url.startsWith('https://example.com/listening-audio/'))return ctx.window.MosaListeningStream.respond(new Request(url,{headers}));const file=url.split('?')[0];try{return {ok:true,arrayBuffer:async()=>Uint8Array.from(fs.readFileSync(file)).buffer};}catch{return {ok:false};}}};
vm.createContext(ctx);
for(const m of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)){
  const src=m[1].match(/src=["']([^"']+)/)?.[1];
  vm.runInContext(src?fs.readFileSync(src.split('?')[0],'utf8'):m[2],ctx);
}
const run=code=>vm.runInContext(code,ctx);
if(process.argv.includes('--inventory')){console.log(JSON.stringify(run('ALL_V.filter(w=>{const s=recordedAudioSource(w);return s&&!s.includes(".mp3")}).map(w=>({id:w.id,en:w.en,src:recordedAudioSource(w)}))'),null,2));process.exit();}
(async()=>{
  run('go("vocabulary");openListeningSheet()');
  assert(run('studyHeaderActions().indexOf("header-filter")<studyHeaderActions().indexOf("header-headset")'));
  run('state.filters.collections=new Set(["mango-msa"]);state.filters.chapters=new Set(["mango-msa:11"])');
  assert(run('listeningWords().every(w=>w.collectionId==="mango-msa"&&Number(w.chapter)===11)'));
  assert(run('listeningWords().length>0'));
  run('globalThis.testWords=listeningWords().slice(0,2)');
  await run('listeningPlayer.prepare(testWords,recordedAudioSource)');
  assert.equal(run('listeningPlayer.status'),'ready');
  assert.equal(run('listeningPlayer.entries.length'),2);
  assert(run('listeningPlayer.audio.src.startsWith("https://example.com/listening-audio/")'));
  assert.equal(run('listeningPlayer.audio.crossOrigin'),'anonymous');
  const entries=run('listeningPlayer.entries');
  assert.equal(entries[1].start,entries[0].end);
  const {mp3Frames,playlistBlob}=ctx.window.MosaListeningAudio;
  const first=mp3Frames(Uint8Array.from(fs.readFileSync(run('recordedAudioSource(testWords[0])').split('?')[0])).buffer);
  assert(Math.abs(entries[0].repeat-first.duration-3)<1e-9);
  assert(Math.abs(entries[0].end-2*first.duration-6)<1e-9);
  const silence=mp3Frames(Uint8Array.from(fs.readFileSync('audio/listening-silence.mp3')).buffer);
  const gap={frames:silence.frames.slice(0,125)};
  assert.equal(gap.frames.length*0.024,3);
  const blob=playlistBlob([first,gap,first,gap]);
  assert.equal(mp3Frames(await blob.arrayBuffer()).duration,2*first.duration+6);
  const transport=ctx.window.MosaListeningStream,trackURL=run('listeningPlayer.url');
  const complete=await transport.respond(new Request(trackURL));
  assert.equal(complete.status,200);const original=new Uint8Array(await complete.arrayBuffer());
  for(const [range,start,end] of [['bytes=0-1',0,1],['bytes=192-',192,original.length-1],['bytes=-10',original.length-10,original.length-1],['bytes=4-9999999',4,original.length-1]]){
    const response=await transport.respond(new Request(trackURL,{headers:{Range:range}}));
    assert.equal(response.status,206);assert.equal(response.headers.get('Content-Range'),`bytes ${start}-${end}/${original.length}`);
    assert.deepEqual(new Uint8Array(await response.arrayBuffer()),original.slice(start,end+1));
  }
  const invalid=await transport.respond(new Request(trackURL,{headers:{Range:`bytes=${original.length}-`}}));
  assert.equal(invalid.status,416);assert.equal(invalid.headers.get('Content-Range'),`bytes */${original.length}`);
  const head=await transport.respond(new Request(trackURL,{method:'HEAD'}));assert.equal(head.status,200);assert.equal((await head.arrayBuffer()).byteLength,0);
  assert.equal(head.headers.get('Content-Length'),String(original.length));
  assert.equal((await transport.respond(new Request('https://example.com/listening-audio/missing.mp3'))).status,410);
  const chunkSample=Uint8Array.from({length:2*1024*1024+17},(_,i)=>i%251);
  const chunkURL=await transport.storeTrack(new Blob([chunkSample]));
  const crossing=await transport.respond(new Request(chunkURL,{headers:{Range:'bytes=1048573-1048581'}}));
  assert.equal(crossing.status,206);assert.deepEqual(new Uint8Array(await crossing.arrayBuffer()),chunkSample.slice(1048573,1048582));
  await transport.removeTrack(chunkURL);
  assert(!(await (await cacheAPI.open(transport.CACHE)).keys()).some(key=>key.url.startsWith(chunkURL)));
  // Run the real service-worker fetch handler: media probes must bypass the
  // generic network/HTML fallback, and updates must preserve prepared tracks.
  const listeners={},workerContext={console,URL,Blob,Response,Headers,ReadableStream,caches:cacheAPI,self:{registration:{scope:'https://example.com/'},addEventListener(type,handler){listeners[type]=handler;},clients:{claim:()=>Promise.resolve()}}};
  vm.createContext(workerContext);workerContext.importScripts=file=>vm.runInContext(fs.readFileSync(file.split('?')[0],'utf8'),workerContext);
  vm.runInContext(fs.readFileSync('sw.js','utf8'),workerContext);
  let result;listeners.fetch({request:new Request(trackURL,{headers:{Range:'bytes=0-1'}}),respondWith(value){result=value;}});
  assert.equal((await result).status,206);
  assert(transport.matches(trackURL,'https://example.com/'));
  assert(!transport.matches('https://other.example/listening-audio/test.mp3','https://example.com/'));
  assert(!transport.matches('https://example.com/index.html','https://example.com/'));
  let activation;listeners.activate({waitUntil(value){activation=value;}});await activation;
  assert((await cacheAPI.keys()).includes(transport.CACHE));
  await run('listeningPlayer.play()');assert.equal(run('listeningPlayer.status'),'playing');
  assert.equal(attachedAudio.size,1);
  assert.equal(actions.get('play'),null,'The browser owns lock-screen play');
  assert.equal(actions.get('pause'),null,'The browser owns lock-screen pause');
  // Simulate native controls invoking the audio element directly, bypassing app
  // play/pause callbacks. A paused page must not need JS to reload or seek audio.
  run('listeningPlayer.audio.currentTime=4.25');
  const nativeAudio=run('listeningPlayer.audio'),source=nativeAudio.src;
  for(let i=0;i<3;i++){
    nativeAudio.pause();assert.equal(run('listeningPlayer.status'),'paused');
    await nativeAudio.play();assert.equal(run('listeningPlayer.status'),'playing');
    assert.equal(nativeAudio.currentTime,4.25);assert.equal(nativeAudio.loads,0);
    assert.equal(nativeAudio.src,source);assert.equal(attachedAudio.size,1);
  }
  assert.equal(session.playbackState,'none','Native playback state remains authoritative');
  nativeAudio.currentTime=4.5;nativeAudio.ontimeupdate();nativeAudio.currentTime=4.75;nativeAudio.ontimeupdate();
  const report=JSON.parse(run('listeningPlayer.playbackReport()'));
  assert.equal(report.playerVersion,101);assert.equal(report.transport,'local-range-stream');assert.equal(report.audio.position,4.75);assert.equal(report.events.at(-1).event,'progress');assert.equal(report.events.at(-1).position,4.75);
  assert(report.events.some(event=>event.event==='pause'));
  assert(!('word' in report),'Report excludes vocabulary content');
  actions.get('nexttrack')();assert.equal(run('listeningPlayer.audio.currentTime'),entries[1].start);
  actions.get('previoustrack')();assert.equal(run('listeningPlayer.audio.currentTime'),0);
  run('saveFilters()');assert.equal(run('listeningPlayer.status'),'idle');assert.equal(session.playbackState,'none');assert.equal(attachedAudio.size,0);
  // Failed files are skipped; stopping a pending preparation never restarts it.
  await run('listeningPlayer.prepare([...testWords,{id:"missing",ar:"missing"}],w=>w.id==="missing"?"./missing.mp3":recordedAudioSource(w))');
  assert.equal(run('listeningPlayer.entries.length'),2);assert.equal(run('listeningPlayer.skipped'),1);
  const pending=run('listeningPlayer.prepare(testWords,recordedAudioSource)');run('stopListening()');await pending;
  assert.equal(run('listeningPlayer.status'),'idle');assert.equal(run('listeningPlayer.audio'),null);
  // A failed Safari range probe never exposes a broken player as ready.
  const goodFetch=ctx.fetch;ctx.fetch=async(url,options)=>url.startsWith('https://example.com/listening-audio/')?new Response('wrong worker',{status:200}):goodFetch(url,options);
  await run('listeningPlayer.prepare(testWords,recordedAudioSource)');assert.equal(run('listeningPlayer.status'),'error');assert.equal(run('listeningPlayer.audio'),null);
  ctx.fetch=goodFetch;
  // Every vocabulary recording supported by the UI can be assembled.
  for(const src of new Set(run('ALL_V.map(listeningAudioSource).filter(Boolean)'))){mp3Frames(Uint8Array.from(fs.readFileSync(src.split('?')[0])).buffer);}
  if(process.argv.includes('--full')){
    const start=Date.now();
    await run('listeningPlayer.prepare(ALL_V.filter(w=>listeningAudioSource(w)),listeningAudioSource)');
    assert.equal(run('listeningPlayer.status'),'ready');
    assert.equal(run('listeningPlayer.skipped'),0);
    console.log('Full list:',run('listeningPlayer.entries.length'),'words;',((Date.now()-start)/1000).toFixed(1),'seconds to assemble locally;',Math.round(process.memoryUsage().rss/1048576),'MiB test process memory');
    run('stopListening()');
  }
  console.log('PASS: app loads; filters, audio coverage, exact repetitions/gaps, MP3 index, native controls, Safari range probes and resume reads, worker updates, reports, failed recordings and cancellation');
})().catch(error=>{console.error(error);process.exitCode=1});
