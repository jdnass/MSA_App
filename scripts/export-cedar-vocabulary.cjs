const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..');
const source=fs.readFileSync(path.join(root,'index.html'),'utf8');
const tags=[...source.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)];
const scripts=tags.map(m=>{
 const src=m[1].match(/src=["']([^"']+)/)?.[1];
 if(src){const file=path.resolve(root,src.split('?')[0]);if(!file.startsWith(root+path.sep))throw Error('Invalid script path');return fs.readFileSync(file,'utf8');}
 return m[2].trim()==='render();'?'':m[2];
}).join('\n;\n');
const el=()=>({style:{},classList:{add(){},remove(){},contains(){return false}},addEventListener(){},querySelector:()=>el(),querySelectorAll:()=>[],appendChild(){},setAttribute(){},innerHTML:''});
const win={addEventListener(){}},doc={querySelector:()=>el(),querySelectorAll:()=>[],addEventListener(){},createElement:()=>el()};
const storage={getItem:()=>null,setItem(){},removeItem(){}};
const data=new Function('window','document','localStorage','navigator','with(window){'+scripts+'\n;return {vocab:ALL_V,collections:COLLECTIONS,verbs:window.MOSA_VERB_PRACTICE,broken:brokenPluralEntries()};}')(win,doc,storage,{});
const key=s=>String(s||'').normalize('NFC').replace(/\u0640/g,'').replace(/\s+/g,' ').trim();
const targets=new Map(),ids=new Set();
function add(ar,kind,en=''){
 if(typeof ar!=='string'||!/[ء-ي]/.test(ar))return;
 const k=key(ar);if(!k||k==='—')return;
 if(!targets.has(k))targets.set(k,{id:'cv-'+crypto.createHash('sha256').update(k).digest('hex').slice(0,24),ar:k,en,spoken:k.replace(/\s*·\s*[0-9٠-٩]+\s*$/u,''),kinds:[]});
 const t=targets.get(k);if(!t.kinds.includes(kind))t.kinds.push(kind);
}
function word(w,where){
 if(!w)return;if(w.id)ids.add(w.id);
 for(const f of ['ar','f','mp','fp','masculine','sourcePastAr','sourcePresentAr'])add(w[f],where+':'+f,w.en||'');
}
function chapter(ch){for(const w of ch.vocab||[])word(w,'lesson');for(const sub of Object.values(ch.subchapters||{}))chapter(sub);}
for(const w of data.vocab)word(w,'vocabulary');
for(const col of data.collections){for(const w of col.vocab||[])word(w,'lesson');for(const ch of Object.values(col.chapters||{}))chapter(ch);}
for(const v of data.verbs)for(const f of ['present','past','noun']){ids.add(v.id+'-'+f);add(v[f]?.ar,'verb-tree:'+f,v.meaning||'');}
for(const b of data.broken)for(const f of ['singular','plural']){if(b[f]?.id)ids.add(b[f].id);add(b[f]?.ar,'broken-plural:'+f,b.meaning||'');}
for(const t of [...targets.values()])for(const part of t.ar.split(/\s*[/؛;]\s*/))add(part,'variant',t.en);
const entries=[...targets.values()].sort((a,b)=>a.id.localeCompare(b.id));
if(entries.length>10000||entries.length<1000||new Set(entries.map(t=>t.id)).size!==entries.length)throw Error('Unexpected vocabulary target count');

const collectionId=process.argv.find(a=>a.startsWith('--collection='))?.split('=')[1];
let scope=null;
if(collectionId){
 const collection=data.collections.find(c=>c.id===collectionId);
 if(!collection)throw Error('Unknown collection: '+collectionId);
 const scopedKeys=new Set();
 const scopedAdd=ar=>{if(typeof ar!=='string'||!/[ء-ي]/.test(ar))return;scopedKeys.add(key(ar));for(const part of ar.split(/\s*[/؛;]\s*/))scopedKeys.add(key(part));};
 const scopedWord=w=>{for(const f of ['ar','f','mp','fp','masculine','sourcePastAr','sourcePresentAr'])scopedAdd(w[f]);};
 const scopedChapter=ch=>{for(const w of ch.vocab||[])scopedWord(w);for(const sub of Object.values(ch.subchapters||{}))scopedChapter(sub);};
 for(const w of collection.vocab||[])scopedWord(w);
 for(const ch of Object.values(collection.chapters||{}))scopedChapter(ch);
 for(const w of data.vocab.filter(w=>w.collectionId===collectionId))scopedWord(w);
 for(const v of data.verbs.filter(v=>v.memberships?.some(m=>m.collectionId===collectionId)))for(const f of ['present','past','noun'])scopedAdd(v[f]?.ar);
 for(const b of data.broken.filter(b=>b.sources?.some(s=>s.id===collectionId)))for(const f of ['singular','plural'])scopedAdd(b[f]?.ar);
 const selected=entries.filter(t=>scopedKeys.has(t.ar));
 if(!selected.length||selected.length!==scopedKeys.size)throw Error('Invalid scoped target coverage');
 scope={collectionId,ids:selected.map(t=>t.id)};
}

const report={version:1,scope,cardCount:data.vocab.length,practiceVerbs:data.verbs.length,brokenPluralPairs:data.broken.length,ids:[...ids].sort(),entries};
if(process.argv.includes('--coverage')){
 const recordings={};const dir=path.join(root,'audio/cedar-vocab/manifests');for(const f of fs.readdirSync(dir))if(f.endsWith('.json'))Object.assign(recordings,JSON.parse(fs.readFileSync(path.join(dir,f),'utf8')));const manifest={recordings};
 const missing=entries.filter(t=>(!scope||scope.ids.includes(t.id))&&(!manifest.recordings[t.id]||manifest.recordings[t.id].ar!==t.ar||!fs.existsSync(path.join(root,'audio/cedar-vocab',manifest.recordings[t.id].file))));
 if(missing.length)throw Error('Missing vocabulary recordings: '+missing.length);
 console.log('PASS: complete vocabulary, verb-tree, and broken-plural audio coverage');
}else fs.writeFileSync(path.join(root,'cedar-vocab-targets.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({cards:data.vocab.length,uniqueReadings:entries.length,verbTrees:data.verbs.length,brokenPluralPairs:data.broken.length}));
module.exports={key,report};
