const comparativeState={search:'',collection:'all',quiz:false,reveals:new Set(),order:null};
function comparativeEntries(){
 const u=window.MOSA_VOCABULARY_NORMALIZATION;
 return window.MOSA_COMPARATIVES.flatMap(row=>{
  const word=ALL_V.find(w=>u.key(w.ar)===u.key(row.base.ar)&&!/(?:plural|verb)/i.test(w.pos||'')&&u.compatible(w.ar,row.base.ar,w,{en:row.meaning,pos:'Adjective'}));
  return word?[{...row,source:word.collectionId,chapter:word.chapter,base:{...row.base,id:word.id}}]:[];
 });
}
function comparativeList(){
 const q=stripHarakat(comparativeState.search).toLowerCase().trim(),order=comparativeState.order;
 const rows=comparativeEntries().filter(v=>(comparativeState.collection==='all'||v.source===comparativeState.collection)&&(!q||stripHarakat([v.meaning,v.comparison,v.base.ar,v.base.tr,v.comparative.ar,v.comparative.tr].join(' ')).toLowerCase().includes(q)));
 return order?rows.sort((a,b)=>order.indexOf(a.id)-order.indexOf(b.id)):rows;
}
function comparativeView(){
 const sources=new Set(comparativeEntries().map(v=>v.source));
 app.innerHTML=header('Practice','Adjectives and their comparative forms','',`<div class="header-actions"><button class="header-gear" onclick="practiceOptions()" aria-label="Study options">${gearIcon()}</button></div>`)+practiceTabs()+`
 <section class="practice-guide"><h2>Making comparisons</h2>${grammarText('<p>Many adjectives use [أَفْعَل]: [طَوِيل ← أَطْوَل] — tall → taller. Add [مِنْ] for “than”: [أَنَا أَطْوَل مِنْ أَخِي] — I am taller than my brother.</p><p>In this construction, the comparative stays the same with feminine and plural subjects: [هِيَ أَطْوَل مِنْ أَخِيهَا] — she is taller than her brother. Context can also give a superlative meaning, as in [أَكْبَر بَيْت] — the biggest house.</p><p>Some comparisons use [أَكْثَر] or [أَشَدّ] plus an accusative noun. Learn these as phrases. A comparative is separate from a broken plural: [كَبِير ← أَكْبَر] means big → bigger; [كَبِير ← كِبَار] is singular → plural.</p>')}</section>
 <div class="order"><button class="${comparativeState.quiz?'':'active'}" aria-pressed="${!comparativeState.quiz}" onclick="comparativeMode(false)">Study pairs</button><button class="${comparativeState.quiz?'active':''}" aria-pressed="${comparativeState.quiz}" onclick="comparativeMode(true)">Practice · reveal</button></div>
 <label class="practice-search">Collection<select style="width:100%;padding:12px;border:1px solid var(--line);border-radius:12px;background:white;font:inherit" onchange="comparativeState.collection=this.value;comparativeRefresh()"><option value="all">All collections</option>${COLLECTIONS.filter(c=>sources.has(c.id)).map(c=>`<option value="${c.id}" ${comparativeState.collection===c.id?'selected':''}>${practiceEscape(c.name)}</option>`).join('')}</select></label>
 <label class="practice-search">Search adjectives<input type="search" placeholder="English, Arabic, or transliteration" value="${practiceEscape(comparativeState.search)}" oninput="comparativeState.search=this.value;comparativeRefresh()"></label>
 <button class="secondary" onclick="comparativeShuffle()">Shuffle</button><div id="comparativeResults"></div>`;
 comparativeRefresh();
}
function comparativeMode(quiz){stopAudio();comparativeState.quiz=quiz;comparativeState.reveals.clear();comparativeView()}
function comparativeShuffle(){
 const ids=comparativeEntries().map(v=>v.id);
 for(let i=ids.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[ids[i],ids[j]]=[ids[j],ids[i]]}
 comparativeState.order=ids;comparativeState.reveals.clear();comparativeRefresh();
}
function comparativeField(v,side,field,value,cls){
 const key=v.id+':'+side+':'+field,hidden=state.hide[field]&&!comparativeState.reveals.has(key);
 return `<button class="practice-field ${cls} ${hidden?'list-hidden':''}" onclick="comparativeReveal('${v.id}','${side}','${field}')" aria-label="${hidden?'Reveal '+field:practiceEscape(value)}">${practiceEscape(value)}</button>`;
}
function comparativeRefresh(){
 const rows=comparativeList();let html=`<p class="practice-count" aria-live="polite">${rows.length} adjective pairs${comparativeState.quiz?' · Say the comparative, then reveal it.':''}</p>`;
 for(const v of rows){
  const revealed=!comparativeState.quiz||comparativeState.reveals.has(v.id+':answer');
  html+=`<article class="practice-row">${comparativeField(v,'meaning','en',v.meaning,'list-en')}<div class="practice-columns" style="grid-template-columns:repeat(2,minmax(0,1fr))">`;
  for(const [side,label] of [['base','Adjective'],['comparative','Comparative']]){
   const concealed=side==='comparative'&&!revealed;
   const hasAudio=!concealed&&!state.hide.audio&&recordedAudioSource({...v[side],audioKind:'vocabulary'});
   html+=`<div class="practice-cell"><div class="practice-cell-label">${label}${hasAudio?`<button class="practice-audio" aria-label="Play ${label.toLowerCase()}" onclick="comparativeSpeak('${v.id}','${side}')">${speakerIcon()}</button>`:''}</div>${concealed?`<button class="secondary" onclick="comparativeAnswer('${v.id}')">Reveal comparative</button>`:comparativeField(v,side,'ar',arabic(v[side].ar),'list-ar')+comparativeField(v,side,'tr',v[side].tr,'list-tr')}</div>`;
  }
  html+='</div>';
  if(revealed)html+=comparativeField(v,'answer','en',v.comparison,'list-en')+(v.note?`<p class="practice-note">${grammarText(v.note)}</p>`:'');
  html+=`<p class="practice-note">${practiceEscape(COLLECTIONS.find(c=>c.id===v.source)?.name||v.source)}</p></article>`;
 }
 if(!rows.length)html+='<section class="filter-empty"><h2>No matching adjectives</h2><p>Try another collection or search.</p><button class="secondary" onclick="comparativeState.search=\'\';comparativeState.collection=\'all\';comparativeView()">Clear search and collection</button></section>';
 document.querySelector('#comparativeResults').innerHTML=html;
}
function comparativeReveal(id,side,field){if(!state.hide[field])return;comparativeState.reveals.add(id+':'+side+':'+field);comparativeRefresh()}
function comparativeAnswer(id){comparativeState.reveals.add(id+':answer');comparativeRefresh()}
function comparativeSpeak(id,side){if(state.hide.audio||!['base','comparative'].includes(side))return;const v=comparativeEntries().find(v=>v.id===id);if(v)playArabic({...v[side],audioKind:'vocabulary'})}
