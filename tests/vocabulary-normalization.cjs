const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),html=fs.readFileSync(path.join(root,'index.html'),'utf8');
function load(saved={},normalize=true){
  const source=normalize?html:html.replace(/\/\/ One vocabulary entry per Arabic reading[\s\S]*?(?=\/\/ Vocabulary grammar comments shared)/,'');
  const scripts=[...source.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)].map(m=>{
    const src=m[1].match(/src=["']([^"']+)/)?.[1];
    return src?fs.readFileSync(path.resolve(root,src.split('?')[0]),'utf8'):m[2].trim()==='render();'?'':m[2];
  }).join('\n;\n');
  const el=()=>({style:{},classList:{add(){},remove(){},contains(){return false}},addEventListener(){},querySelector:()=>el(),querySelectorAll:()=>[],appendChild(){},setAttribute(){},innerHTML:''});
  const values=new Map(Object.entries(saved)),storage={getItem:k=>values.get(k)??null,setItem:(k,v)=>values.set(k,v),removeItem:k=>values.delete(k)};
  const win={addEventListener(){}},doc={querySelector:()=>el(),querySelectorAll:()=>[],addEventListener(){},createElement:()=>el()};
  return new Function('window','document','localStorage','navigator','with(window){'+scripts+'\n;return {vocab:ALL_V,collections:COLLECTIONS,normalization:typeof NORMALIZED_VOCABULARY==="undefined"?null:NORMALIZED_VOCABULARY,state,filteredVocabulary,isSupplementalBrokenPlural,utility:window.MOSA_VOCABULARY_NORMALIZATION,values:localStorage.getItem("msa-vocab-id"),ratings:JSON.parse(localStorage.getItem("msa-ratings")),broken:brokenPluralEntries()};}')(win,doc,storage,{});
}
const d=load(),byId=new Map(d.vocab.map(w=>[w.id,w])),aliases=d.normalization.aliases;
assert.equal(new Set(d.vocab.map(w=>w.id)).size,d.vocab.length);
for(const [id,target] of Object.entries(aliases)){assert(!byId.has(id),id+' remains');assert(byId.has(target),target+' missing');}
assert.deepEqual(d.normalization.sourcePriority.slice(0,7),['alkitaab1','mango-msa','madina-book1','dli-basic','madina-book2','alif-baa','alkitaab2']);
const hotels=d.vocab.filter(w=>d.utility.key(w.ar)==='فندق');
assert.equal(hotels.length,1);assert.equal(hotels[0].collectionId,'alkitaab1');
for(const source of ['mango-msa','madina-book1']){
  d.state.filters.collections=new Set([source]);assert(!d.filteredVocabulary().some(w=>d.utility.key(w.ar)==='فندق'));
}
d.state.filters.collections.clear();
const country=byId.get('c2-13'),countries=byId.get('c2-13-bp');
assert(country&&countries);assert(!byId.has('madina-book1-53'));assert(!byId.has('madina-book1-54'));
assert(d.filteredVocabulary().includes(countries));
d.state.filters.brokenPlurals.add('source');
assert(d.filteredVocabulary().includes(country));assert(!d.filteredVocabulary().includes(countries));
for(const w of d.vocab.filter(w=>w.sourceListedPlural))assert(!d.isSupplementalBrokenPlural(w));
assert(!byId.has('madina-book1-36'));assert(byId.has('madina-book1-35'));assert.equal(byId.get('madina-book1-35').f,'طِفْلَة');
for(const id of ['madina-book1-30','madina-book1-136','madina-book2-283','c1-4-bp','c1-7','c3-21','c3-5','dli-c1-17'])assert(byId.has(id),id+' should remain');
assert(!/plural/i.test(byId.get('madina-book1-30').pos),'camel was mistaken for sentences');
const migrated=load({'msa-vocab-id':'madina-book1-120','msa-ratings':JSON.stringify({'madina-book1-120':2})});
assert.equal(migrated.values,'ak-c11-22');assert.equal(migrated.ratings['ak-c11-22'],2);
const card=(id,collectionId,ar,en,pos='Noun')=>({id,collectionId,ar,en,pos,f:'—',mp:'—',fp:'—'});
function fixture(words){return d.utility.normalize([...new Set(words.map(w=>w.collectionId))].map(id=>({id,vocab:words.filter(w=>w.collectionId===id),chapters:{}})));}
// Independent fixtures ensure priority is not accidentally inherited from input order.
for(const later of d.normalization.sourcePriority.slice(1,7)){
 const out=fixture([card('later',later,'الْفُنْدُق','hotel'),card('first','alkitaab1','فُنْدُق','hotel')]);assert.equal(out.vocab.length,1);assert.equal(out.vocab[0].id,'first');
}
assert.equal(fixture([card('science','alkitaab1','عِلْم','science'),card('flag','mango-msa','عَلَم','flag')]).vocab.length,2);
assert.equal(fixture([card('sentences','alkitaab1','جُمَل','sentences'),card('camel','madina-book1','جَمَل','camel')]).vocab.length,2);
assert.equal(fixture([card('study','alkitaab1','أَدْرُسُ','I study','Verb'),card('teach','mango-msa','أُدَرِّسُ','I teach','Verb')]).vocab.length,2);
assert.equal(fixture([card('a','mango-msa','التَّارِيخ','history'),card('b','dli-basic','تَارِيخ','history')]).vocab.length,1);
assert.equal(fixture([card('office','alkitaab1','مَكْتَب','office'),card('library','madina-book1','مَكْتَبَة','library')]).vocab.length,2);
assert.equal(fixture([card('day','alkitaab1','يَوْم','day'),card('today','mango-msa','اليَوْم','today')]).vocab.length,2);
assert.equal(fixture([card('birthday','mango-msa','عِيد مِيلَاد','birthday'),card('christmas','dli-basic','عِيدُ الْمِيلَادِ','Christmas')]).vocab.length,2);
assert(byId.has('mango-c13-20'),'Sunday must remain separate from someone');
assert(byId.has('mango-c13-23'),'Wednesday must remain separate from springs');
assert.equal(fixture([card('someone','alkitaab1','أَحَد','someone'),card('sunday','mango-msa','الأَحَد','Sunday')]).vocab.length,2);
assert.equal(fixture([card('springs','alkitaab1','أَرْبِعَة / أَرْبِعَاء','springs'),card('wednesday','mango-msa','الأَرْبِعَاء','Wednesday')]).vocab.length,2);
const baseline=load({},false);
function lessonText(data){
 const rows=[];function visit(c){rows.push({sentences:c.sentences,grammar:c.grammar});for(const child of Object.values(c.subchapters||{}))visit(child);}
 for(const c of data.collections)for(const ch of Object.values(c.chapters||{}))visit(ch);return rows;
}
assert.deepEqual(lessonText(d),lessonText(baseline));
console.log(JSON.stringify({pass:true,cards:d.vocab.length,duplicateCards:Object.keys(aliases).length-d.normalization.removedFeminine.length,feminineCards:d.normalization.removedFeminine.length,pluralPairs:d.broken.length}));
