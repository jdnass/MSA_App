const fs=require('node:fs');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const html=fs.readFileSync('index.html','utf8');
for(const m of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g))new vm.Script(m[1]);
const match=html.match(/function playArabic\(d\)\{[\s\S]*?\n\n/);
assert(match,'audio player exists');
let played=[],spoken=[];
const ctx={window:{MOSA_MODULE_AUDIO:{'mosa-m10-s1-s1':{ar:'نص',src:'cedar.mp3'}}},
 NATIVE_AUDIO_BY_ID:{vocab:'original.m4a'},NATIVE_AUDIO_BY_KEY:{},VOCABULARY_BASE_AR:{},
 cedarVocabKey:d=>d,nativeAudioKey:d=>d.ar,stopAudio:()=>{},speakWithTTS:ar=>spoken.push(ar),
 Audio:class {constructor(src){this.src=src;}play(){played.push(this.src);return Promise.resolve();}}};
vm.createContext(ctx);vm.runInContext(match[0],ctx);
ctx.playArabic({id:'mosa-m10-s1-s1',ar:'نص'});assert.equal(played.pop(),'cedar.mp3');
ctx.playArabic({id:'vocab',ar:'نص'});assert.equal(played.pop(),'original.m4a');
ctx.playArabic({id:'mosa-m10-s1-s1',ar:'تغيير'});assert.equal(spoken.length,0);
ctx.playArabic({id:'other-sentence',ar:'آخر'});assert.equal(spoken.length,0);
const data=JSON.parse(fs.readFileSync('module-sentences.json','utf8'));
assert.equal(new Set(data.map(s=>s.id)).size,data.length);
assert(data.every(s=>s.id.startsWith('mosa-')));
assert(html.includes('cedar-module-audio.js?v=84'));
const grad='I graduated from the University of Michigan six years ago.';
const pub='The University of Michigan is a public university.';
assert.equal(html.split(pub).length-1,2);
assert.equal(html.split(grad).length-1,2);
console.log('PASS: inline syntax, Cedar scope, text freshness, original audio, silent fallback, unique sentence IDs');
