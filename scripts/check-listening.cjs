const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const html=fs.readFileSync('index.html','utf8');
const el=()=>({style:{},classList:{add(){},remove(){},contains(){return false},toggle(){}},addEventListener(){},querySelector:()=>null,querySelectorAll:()=>[],appendChild(){},setAttribute(){},innerHTML:''});
const attachedAudio=new Set();
const actions=new Map(),session={setActionHandler:(action,handler)=>actions.set(action,handler),setPositionState(){}};
const ctx={window:{addEventListener(){}},document:{body:{appendChild(audio){attachedAudio.add(audio)}},querySelector:()=>el(),querySelectorAll:()=>[],addEventListener(){},createElement:()=>el()},localStorage:{getItem:()=>null,setItem(){},removeItem(){}},navigator:{mediaSession:session,audioSession:{}},console,setTimeout:()=>{},URL,Blob,AbortController,location:{href:'https://example.com/'},MediaMetadata:class{constructor(data){Object.assign(this,data)}},Audio:class{constructor(src){this.src=src;this.currentTime=0;this.duration=100;this.readyState=1;this.loads=0;}play(){this.onplay?.();return Promise.resolve();}pause(){this.onpause?.();}load(){this.loads++;this.currentTime=0;this.onloadedmetadata?.();}setAttribute(){}removeAttribute(){}remove(){attachedAudio.delete(this)}},fetch:async(url,{signal}={})=>{signal?.throwIfAborted();const file=url.split('?')[0];try{return {ok:true,arrayBuffer:async()=>Uint8Array.from(fs.readFileSync(file)).buffer};}catch{return {ok:false};}}};
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
  await run('listeningPlayer.play()');assert.equal(run('listeningPlayer.status'),'playing');
  assert.equal(attachedAudio.size,1);
  run('listeningPlayer.audio.currentTime=4.25;listeningPlayer.audio.muted=true');
  actions.get('pause')();assert.equal(run('listeningPlayer.status'),'paused');
  await actions.get('play')();assert.equal(run('listeningPlayer.status'),'playing');
  assert.equal(run('listeningPlayer.audio.loads'),1);
  assert.equal(run('listeningPlayer.audio.currentTime'),4.25);
  assert.equal(run('listeningPlayer.audio.muted'),false);
  assert.equal(run('listeningPlayer.audio.volume'),1);
  assert.equal(ctx.navigator.audioSession.type,'playback');
  // Repeated remote resumes restore position without creating another player.
  actions.get('pause')();await actions.get('play')();assert.equal(attachedAudio.size,1);
  assert.equal(run('listeningPlayer.audio.currentTime'),4.25);
  // Metadata may arrive after play() on Safari; restore only while still wanted.
  actions.get('pause')();
  run('listeningPlayer.audio.readyState=0;listeningPlayer.audio.load=function(){this.loads++;this.currentTime=0};');
  await actions.get('play')();
  run('listeningPlayer.audio.onloadedmetadata()');
  assert.equal(run('listeningPlayer.audio.currentTime'),4.25);
  actions.get('pause')();await actions.get('play')();
  const staleRestore=run('listeningPlayer.audio.onloadedmetadata');
  actions.get('pause')();staleRestore();
  assert.equal(run('listeningPlayer.audio.currentTime'),0);
  await run('listeningPlayer.play()');
  actions.get('nexttrack')();assert.equal(run('listeningPlayer.audio.currentTime'),entries[1].start);
  actions.get('previoustrack')();assert.equal(run('listeningPlayer.audio.currentTime'),0);
  run('saveFilters()');assert.equal(run('listeningPlayer.status'),'idle');assert.equal(session.playbackState,'none');assert.equal(attachedAudio.size,0);
  // Failed files are skipped; stopping a pending preparation never restarts it.
  await run('listeningPlayer.prepare([...testWords,{id:"missing",ar:"missing"}],w=>w.id==="missing"?"./missing.mp3":recordedAudioSource(w))');
  assert.equal(run('listeningPlayer.entries.length'),2);assert.equal(run('listeningPlayer.skipped'),1);
  const pending=run('listeningPlayer.prepare(testWords,recordedAudioSource)');run('stopListening()');await pending;
  assert.equal(run('listeningPlayer.status'),'idle');assert.equal(run('listeningPlayer.audio'),null);
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
  console.log('PASS: app loads; filters, audio coverage, exact repetitions/gaps, MP3 index, lock-screen actions, failed recordings and cancellation');
})().catch(error=>{console.error(error);process.exitCode=1});
