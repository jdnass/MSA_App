const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const cacheMaps=new Map(),elements=new Map(),listeners=new Map(),nativeRequests=[],actions=new Map(),sessionTypes=[];
function element(id){return {id,value:id==='transport'?'direct':id==='session-type'?'playback':id==='resume-mode'?'native':'',disabled:false,hidden:true,textContent:'',handlers:{},currentTime:0,duration:120.048,paused:true,ended:false,readyState:4,networkState:1,seeking:false,playbackRate:1,muted:false,volume:1,buffered:{length:1,start:()=>0,end:()=>120},seekable:{length:1,start:()=>0,end:()=>120},addEventListener(event,fn){this.handlers[event]=fn;},async click(){return this.handlers.click?.();},pause(){if(!this.paused){this.paused=true;this.handlers.pause?.();}},play(){this.paused=false;this.handlers.play?.();this.handlers.playing?.();return Promise.resolve();},load(){this.currentTime=0;this.handlers.loadedmetadata?.();},removeAttribute(name){delete this[name];},focus(){},select(){}};}
for(const id of ['transport','session-type','resume-mode','test-audio','load','worked','failed','status','copy','copy-status','report','back','mode'])elements.set(id,element(id));
const caches={async open(name){if(!cacheMaps.has(name))cacheMaps.set(name,new Map());const data=cacheMaps.get(name),key=x=>typeof x==='string'?x:x.url;return {async match(x){return data.get(key(x))?.clone();},async put(x,r){data.set(key(x),r.clone());},async delete(x){return data.delete(key(x));},async keys(){return [...data.keys()].map(url=>new Request(url));}};},async keys(){return [...cacheMaps.keys()];},async delete(name){return cacheMaps.delete(name);}};
const scope='https://example.com/';
const workerContext={URL,Blob,Headers,Response,Request,ReadableStream,caches,self:{registration:{scope},addEventListener(type,fn){listeners.set(type,fn);}},fetch:async request=>{nativeRequests.push(request);return new Response('network');}};
vm.createContext(workerContext);workerContext.importScripts=file=>vm.runInContext(fs.readFileSync(file.split('?')[0],'utf8'),workerContext);
vm.runInContext(fs.readFileSync('sw.js','utf8'),workerContext);
class Channel{constructor(){this.port1={onmessage:null,close(){}};this.port2={close(){},postMessage:data=>queueMicrotask(()=>this.port1.onmessage?.({data}))};}}
const serviceWorker={controller:{postMessage(data,ports){listeners.get('message')({data,ports});}},addEventListener(){},removeEventListener(){}};
let fetchCount=0;
const context={URL,Blob,Headers,Response,Request,ReadableStream,AbortController,caches,crypto:require('node:crypto'),MessageChannel:Channel,setTimeout,clearTimeout,console,
  navigator:{serviceWorker,userAgent:'test',audioSession:{type:'auto'},mediaSession:{setActionHandler(action,handler){actions.set(action,handler);}}},matchMedia:()=>({matches:true}),
  location:{href:scope+'listening-test.html'},document:{visibilityState:'visible',getElementById:id=>elements.get(id),addEventListener(type,fn){listeners.set('document:'+type,fn);}},
  addEventListener(type,fn){listeners.set('window:'+type,fn);},
  fetch:async(url,options={})=>{fetchCount++;if(url===scope+'audio/listening-control.mp3')return new Response(fs.readFileSync('audio/listening-control.mp3'),{headers:{'Content-Type':'audio/mpeg'}});let result;listeners.get('fetch')({request:new Request(url,options),respondWith(r){result=r;}});return result;}};
let sessionType='auto';Object.defineProperty(context.navigator.audioSession,'type',{get:()=>sessionType,set:value=>{sessionTypes.push(value);sessionType=value;}});
vm.createContext(context);vm.runInContext('window=globalThis',context);
vm.runInContext(fs.readFileSync('listening-stream.js','utf8'),context);
vm.runInContext(fs.readFileSync('listening-test.js','utf8'),context);
(async()=>{
  const audio=elements.get('test-audio');
  for(const transport of ['direct','blob','stream']){
    elements.get('transport').value=transport;await elements.get('load').click();
    assert(elements.get('status').textContent.startsWith('Ready.'),elements.get('status').textContent);
    if(transport==='direct'){assert.equal(fetchCount,0,'Direct media is not fetched by page JS');assert.equal(audio.src,scope+'audio/listening-control.mp3');}
    if(transport==='blob')assert(audio.src.startsWith('blob:'));
    if(transport==='stream')assert(audio.src.startsWith(scope+'listening-audio/'));
    await audio.play();audio.currentTime=10;audio.handlers.timeupdate();audio.pause();
    context.document.visibilityState='hidden';listeners.get('document:visibilitychange')();
    await audio.play();audio.currentTime=20;audio.handlers.timeupdate();audio.currentTime=22;audio.handlers.timeupdate();
    context.document.visibilityState='visible';listeners.get('document:visibilitychange')();
    await elements.get('worked').click();assert.equal(audio.paused,true);
  }
  await elements.get('copy').click();const report=JSON.parse(elements.get('report').value);
  assert.equal(report.tests.length,3);assert.equal(report.mode,'Home Screen app');assert.equal(report.workerVersion,103);
  for(const test of report.tests){assert.equal(test.outcome,'resumed-audibly');assert(test.events.some(e=>e.event==='visibilitychange'));assert(test.events.some(e=>e.event==='timeupdate'&&e.from?.position===20&&e.position===22));assert(!test.events.some(e=>e.event.includes('recovery')));}
  for(const method of ['GET','HEAD'])for(const range of [null,'bytes=0-1']){
    let intercepted=false;listeners.get('fetch')({request:new Request(scope+'audio/listening-control.mp3',{method,headers:range?{Range:range}:{}}),respondWith(){intercepted=true;}});assert.equal(intercepted,false,'Control must bypass the worker for native range delivery');
  }
  const source=audio.src;await elements.get('back').click();await new Promise(resolve=>setImmediate(resolve));
  assert.equal((await context.MosaListeningStream.respond(new Request(source))).status,410);
  // Only an explicit remote Play invokes category reapplication. Preserve the
  // current element, source, buffer, and position; Pause cancels pending work.
  elements.get('transport').value='direct';elements.get('resume-mode').value='reactivate';
  await elements.get('load').click();assert.equal(typeof actions.get('play'),'function');
  await audio.play();audio.currentTime=25;const initialSource=audio.src;
  actions.get('pause')();assert.equal(audio.paused,true);
  const fetchesBefore=fetchCount;actions.get('play')();await Promise.resolve();
  assert.deepEqual(sessionTypes.slice(-2),['auto','playback']);assert.equal(audio.currentTime,25);
  assert.equal(audio.src,initialSource);assert.equal(fetchCount,fetchesBefore);assert.equal(audio.paused,false);
  await elements.get('copy').click();let latest=JSON.parse(elements.get('report').value).tests.at(-1);
  assert.equal(latest.resumeMode,'reactivate');assert(latest.events.some(e=>e.event==='remote-play'));
  assert(latest.events.some(e=>e.event==='session-reset-playback'&&e.audioSessionType==='playback'));
  // A delayed rejected play must not update UI after a subsequent Pause.
  actions.get('pause')();let rejectPlay;const originalPlay=audio.play;
  audio.play=()=>new Promise((resolve,reject)=>{rejectPlay=reject;});
  actions.get('play')();actions.get('pause')();const statusBefore=elements.get('status').textContent;
  rejectPlay(Error('late rejection'));await Promise.resolve();assert.equal(elements.get('status').textContent,statusBefore);assert.equal(audio.paused,true);
  audio.play=originalPlay;
  const oldPlay=actions.get('play');await elements.get('failed').click();oldPlay();assert.equal(audio.paused,true);assert.equal(actions.get('play'),null);
  // Reloading the native baseline unregisters custom actions and prevents a
  // captured handler from a previous test restarting playback.
  elements.get('resume-mode').value='native';await elements.get('load').click();oldPlay();assert.equal(audio.paused,true);assert.equal(actions.get('play'),null);
  // Unsupported controls produce an explicit error instead of a false test.
  const session=context.navigator.audioSession;delete context.navigator.audioSession;
  elements.get('resume-mode').value='reactivate';await elements.get('load').click();
  assert(elements.get('status').textContent.includes('does not expose'));assert.equal(actions.get('play'),null);context.navigator.audioSession=session;
  // Stale workers must not masquerade as a direct-server control.
  serviceWorker.controller.postMessage=(data,ports)=>ports[0].postMessage({listeningStreamVersion:100});
  await elements.get('load').click();assert(elements.get('status').textContent.includes('updating'));
  console.log('PASS: 3 transport paths, report history and progress spans, native media loading, lifecycle logging, no recovery, exact worker bypass for ranges, cleanup, stale-worker detection, remote session reactivation, pause cancellation, unsupported APIs');
})().catch(error=>{console.error(error);process.exitCode=1;});
