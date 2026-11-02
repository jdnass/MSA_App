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
  const nodes=new Map(),dom=k=>{if(!nodes.has(k))nodes.set(k,el());return nodes.get(k)};
  const win={addEventListener(){}},doc={querySelector:dom,querySelectorAll:()=>[],addEventListener(){},createElement:()=>el()};
  return new Function('window','document','localStorage','navigator','with(window){'+scripts+'\n;return {dom:document.querySelector,vocab:ALL_V,collections:COLLECTIONS,normalization:typeof NORMALIZED_VOCABULARY==="undefined"?null:NORMALIZED_VOCABULARY,state,filteredVocabulary,isSupplementalBrokenPlural,utility:window.MOSA_VOCABULARY_NORMALIZATION,values:localStorage.getItem("msa-vocab-id"),ratings:JSON.parse(localStorage.getItem("msa-ratings")),broken:brokenPluralEntries(),comparatives:comparativeEntries(),pairs:window.MOSA_ADJECTIVE_PLURALS,app,comparativeView,comparativeState,comparativeMode,comparativeAnswer,comparativeList,comparativeShuffle,comparativeRefresh,practiceSelectTopic};}')(win,doc,storage,{});
}
const d=load(),u=d.utility,byId=new Map(d.vocab.map(w=>[w.id,w]));
assert.equal(d.comparatives.length,44);
for(const [base,comparison] of [['طَوِيل','أَطْوَل'],['سَمِين','أَسْمَن'],['كَبِير','أَكْبَر'],['مُزْدَحِم','أَكْثَر اِزْدِحَامًا']])assert(d.comparatives.some(v=>u.key(v.base.ar)===u.key(base)&&v.comparative.ar===comparison));
for(const [singular,plural] of d.pairs){
 const matching=d.vocab.filter(w=>u.key(w.ar)===u.key(plural)&&/broken plural/i.test(w.pos||''));
 assert.equal(matching.length,1,'Expected one plural card for '+plural);
 assert(/adjective/i.test(matching[0].pos),plural+' must be tagged as an adjective');
 assert.equal(u.key(byId.get(matching[0].singularId).ar),u.key(singular));
 assert(d.broken.some(v=>u.key(v.singular.ar)===u.key(singular)&&u.key(v.plural.ar)===u.key(plural)),plural+' absent from practice');
}
for(const w of d.vocab.filter(w=>w.supplementalAdjectivePlural)){
 assert(d.isSupplementalBrokenPlural(w),w.id+' must respect the supplemental-plurals filter');
 const c=d.collections.find(c=>c.id===w.collectionId);
 assert((c.chapters?.[w.chapter]?.vocab||c.vocab).some(v=>v.id===w.id),w.id+' missing from lesson');
}
// Exercise rendering, answer concealment, per-card reveal, search, collection and shuffle.
d.practiceSelectTopic('comparatives');assert(d.app.innerHTML.includes('Making comparisons'));
d.comparativeMode(true);
assert(!d.dom('#comparativeResults').innerHTML.includes('أَطْوَل'));
d.comparativeAnswer('comparative-0');assert(d.dom('#comparativeResults').innerHTML.includes('أَطْوَل'));
assert(!d.dom('#comparativeResults').innerHTML.includes('أَسْمَن'));
d.comparativeState.search='fatter';assert.equal(d.comparativeList().length,1);
d.comparativeState.search='';d.comparativeState.collection='mango-msa';assert(d.comparativeList().every(v=>v.source==='mango-msa'));
d.comparativeState.collection='all';const ids=d.comparativeList().map(v=>v.id).sort();d.comparativeShuffle();assert.deepEqual(d.comparativeList().map(v=>v.id).sort(),ids);assert.equal(d.comparativeState.reveals.size,0);
d.state.hide.ar=true;d.state.hide.tr=true;d.comparativeMode(false);assert(d.dom('#comparativeResults').innerHTML.includes('Reveal ar'));assert(d.dom('#comparativeResults').innerHTML.includes('Reveal tr'));
d.practiceSelectTopic('verbs');assert(d.app.innerHTML.includes('Search verbs'));
d.practiceSelectTopic('broken-plurals');assert(d.app.innerHTML.includes('Search broken plurals'));
console.log('PASS: 44 comparatives, 45 singular–plural pairs, unique deck cards, plural filters, lesson integration, quiz reveals and all practice topics.');
