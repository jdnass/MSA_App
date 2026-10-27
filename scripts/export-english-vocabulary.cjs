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
const collection=data.collections.find(c=>c.id==='alkitaab1');
const cards=[...data.vocab.filter(w=>w.collectionId==='alkitaab1'),...(collection.vocab||[]),...Object.values(collection.chapters||{}).flatMap(ch=>ch.vocab||[])];
const entries=[...new Set(cards.map(w=>w.en.trim()))].sort().map(en=>({id:'en-'+crypto.createHash('sha256').update(en).digest('hex').slice(0,24),en}));
if(entries.length<100||entries.length>1500)throw Error('Unexpected English scope');
fs.writeFileSync(path.join(root,'english-vocab-targets.json'),JSON.stringify(entries,null,2)+'\n');
console.log('Al-Kitaab Part 1 English readings:',entries.length);
