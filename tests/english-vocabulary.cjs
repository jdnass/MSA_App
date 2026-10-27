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
  const words=run('ALL_V.filter(w=>w.collectionId==="alkitaab1"&&recordedAudioSource(w)).slice(0,2)');
  const other=run('ALL_V.find(w=>w.collectionId==="mango-msa"&&recordedAudioSource(w))');
  assert(words.length===2&&other);
  const {mp3Frames}=ctx.window.MosaListeningAudio;
  if(process.argv.includes('--coverage')){
    const targets=JSON.parse(fs.readFileSync('english-vocab-targets.json','utf8'));
    for(const target of targets){
      const src=ctx.window.MOSA_ENGLISH_AUDIO[target.en];assert(src,'Missing English: '+target.en);
      mp3Frames(Uint8Array.from(fs.readFileSync(src.split("?")[0])).buffer);
    }
    console.log('PASS: '+targets.length+' English recordings match the playlist format');
  }
  const fixture=run('recordedAudioSource(ALL_V.find(w=>w.collectionId==="alkitaab1"&&recordedAudioSource(w)))');
  for(const w of words)ctx.window.MOSA_ENGLISH_AUDIO[w.en]=fixture;
  ctx.testWords=[words[0],other,words[1]];
  const english=w=>w.collectionId==='alkitaab1'?ctx.window.MOSA_ENGLISH_AUDIO[w.en]:null;
  await run('listeningPlayer.prepare(testWords,listeningAudioSource,englishVocabularySource)');
  assert.equal(run('listeningPlayer.status'),'ready');
  const entries=run('listeningPlayer.entries');
  for(let i=0;i<entries.length;i++){
    const entry=entries[i],word=ctx.testWords[i];ctx.word=word;
    const src=run('listeningAudioSource(word)');
    const ar=mp3Frames(Uint8Array.from(fs.readFileSync(src.split("?")[0])).buffer).duration;
    const en=english(word)?mp3Frames(Uint8Array.from(fs.readFileSync(english(word).split("?")[0])).buffer).duration:0;
    assert(Math.abs(entry.end-entry.start-(ar*2+6+(en?en+3:0)))<1e-8);
    assert.equal(entry.englishStart===null,!en);
    if(i)assert.equal(entry.start,entries[i-1].end);
  }
  const track=await ctx.window.MosaListeningStream.respond(new Request(run('listeningPlayer.url')));
  assert(Math.abs(mp3Frames(await track.arrayBuffer()).duration-entries.at(-1).end)<1e-8);
  run('stopListening()');
  // Failure of a requested English clip must not silently remove the meaning.
  await run('listeningPlayer.prepare(testWords,listeningAudioSource,w=>w.collectionId==="alkitaab1"?"./missing-english.mp3":null)');
  assert.equal(run('listeningPlayer.status'),'error');
  assert(run('listeningPlayer.error.includes("English recording")'));run('stopListening()');
  const values=new Map();ctx.localStorage.getItem=k=>values.get(k)||null;ctx.localStorage.setItem=(k,v)=>values.set(k,v);
  assert.equal(run('englishVocabularyEnabled()'),false);
  values.set('msa-english-ending','true');assert.equal(run('englishVocabularyEnabled()'),true);
  const pending=[];ctx.setTimeout=fn=>{pending.push(fn);};ctx.word=words[0];
  run('playVocabulary(word)');let audio=run('activeNativeAudio');const arabic=audio.src;
  audio.onended();pending.shift()();assert.equal(audio.src,arabic);
  audio.onended();pending.shift()();assert.equal(audio.src,fixture);
  audio.onended();assert.equal(run('activeNativeAudio'),null);
  run('playVocabulary(word)');audio=run('activeNativeAudio');audio.onended();
  run('stopAudio()');pending.shift()();assert.equal(run('activeNativeAudio'),null);
  ctx.word=other;run('playVocabulary(word)');audio=run('activeNativeAudio');audio.onended();
  assert.equal(pending.length,0,'Other collections play once');
  ctx.word=words[0];values.set('msa-english-ending','false');run('playVocabulary(word)');
  run('activeNativeAudio.onended()');assert.equal(pending.length,0,'Disabled option plays once');
  console.log('PASS: Arabic twice then English once; mixed collections; timing and seek boundaries; optional preference; card cancellation; English failure reported');
})().catch(error=>{console.error(error);process.exitCode=1});
