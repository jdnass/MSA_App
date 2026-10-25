const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8').replace(/\/\/ One vocabulary entry per Arabic reading[\s\S]*?(?=\/\/ Vocabulary grammar comments shared)/,'');
const cleanupStart=html.indexOf('// Normalize standalone possessive vocabulary');
const cleanupEnd=html.indexOf('// Vocabulary grammar comments shared',cleanupStart);
assert(cleanupStart>=0&&cleanupEnd>cleanupStart);
function load(source,savedId=null){
  const scripts=[...source.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)].map(m=>{
    const src=m[1].match(/src=["']([^"']+)/)?.[1];
    return src?fs.readFileSync(path.resolve(root,src.split('?')[0]),'utf8'):m[2].trim()==='render();'?'':m[2];
  }).join('\n;\n');
  const el=()=>({style:{},classList:{add(){},remove(){},contains(){return false}},addEventListener(){},querySelector:()=>el(),querySelectorAll:()=>[],appendChild(){},setAttribute(){},innerHTML:''});
  const win={addEventListener(){}},doc={querySelector:()=>el(),querySelectorAll:()=>[],addEventListener(){},createElement:()=>el()};
  const values=new Map(savedId?[['msa-vocab-id',savedId]]:[]);
  const storage={getItem:k=>values.get(k)??null,setItem:(k,v)=>values.set(k,v),removeItem:k=>values.delete(k)};
  return new Function('window','document','localStorage','navigator','with(window){'+scripts+'\n;return {vocab:ALL_V,collections:COLLECTIONS,mapping:typeof POSSESSIVE_VOCABULARY_BASE_IDS!=="undefined"?POSSESSIVE_VOCABULARY_BASE_IDS:null,recordedAudioSource,savedId:localStorage.getItem("msa-vocab-id")};}')(win,doc,storage,{});
}
const before=load(html.slice(0,cleanupStart)+html.slice(cleanupEnd));
const after=load(html);
function snapshots(data){
  const lessons=[];
  function chapter(c){lessons.push({vocab:c.vocab,sentences:c.sentences,grammar:c.grammar});for(const sub of Object.values(c.subchapters||{}))chapter(sub);}
  for(const c of data.collections){lessons.push({vocab:c.vocab});for(const ch of Object.values(c.chapters||{}))chapter(ch);}
  return lessons;
}
const oldLessons=snapshots(before),newLessons=snapshots(after);
assert.equal(oldLessons.length,newLessons.length);
const removed=new Set(Object.keys(after.mapping));
assert.equal(removed.size,19);
assert.equal(before.vocab.length-after.vocab.length,19);
for(const [id,baseId] of Object.entries(after.mapping)){
  assert(before.vocab.some(w=>w.id===id),id+' was not present');
  assert(!after.vocab.some(w=>w.id===id),id+' remains');
  const base=after.vocab.find(w=>w.id===baseId);
  assert(base,baseId+' is missing');
  assert.equal(after.recordedAudioSource(base),before.recordedAudioSource(before.vocab.find(w=>w.id===baseId)),baseId+' recording changed');
  assert.equal(load(html,id).savedId,baseId);
}
for(let i=0;i<oldLessons.length;i++){
  assert.deepEqual(newLessons[i].sentences,oldLessons[i].sentences);
  assert.deepEqual(newLessons[i].grammar,oldLessons[i].grammar);
  assert.deepEqual(newLessons[i].vocab,oldLessons[i].vocab?.filter(w=>!removed.has(w.id)));
}
assert.deepEqual(after.vocab,before.vocab.filter(w=>!removed.has(w.id)));
console.log('PASS: 19 possessive cards removed across all collections and subchapters; base words and existing recordings retained; sentences, grammar and other vocabulary unchanged.');
