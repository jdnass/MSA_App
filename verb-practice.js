// Sound-root templates use ف ع ل as placeholders for the three root letters.
// Reference: https://andreasmhallberg.github.io/documents/verb-forms/verb-forms.tex.pdf
const practicePatternNotes={
 I:{description:'The basic three-root-letter form. The middle root vowel follows one of six past → present patterns; learn each verb’s pattern and verbal noun together.'},
 II:{description:'Double the middle root letter (a shadda). The “I” present begins u-; the past keeps the doubled letter.',present:['أُفَعِّلُ','ufaʿʿilu'],past:['فَعَّلْتُ','faʿʿaltu'],noun:['تَفْعِيل','tafʿīl']},
 III:{description:'Lengthen the vowel after the first root letter to ā. Keep that long ā in both the present and past.',present:['أُفَاعِلُ','ufāʿilu'],past:['فَاعَلْتُ','fāʿaltu'],noun:['مُفَاعَلَة / فِعَال','mufāʿala / fiʿāl']},
 IV:{description:'The past adds أَـ before the root. In the “I” present, the opening أُـ is pronounced u-.',present:['أُفْعِلُ','ufʿilu'],past:['أَفْعَلْتُ','afʿaltu'],noun:['إِفْعَال','ifʿāl']},
 V:{description:'Add ta- to Form II’s doubled-middle-letter pattern. The “I” present starts ata-; the past starts ta-.',present:['أَتَفَعَّلُ','atafaʿʿalu'],past:['تَفَعَّلْتُ','tafaʿʿaltu'],noun:['تَفَعُّل','tafaʿʿul']},
 VI:{description:'Add ta- to Form III’s long-ā pattern. Listen for ata- in the “I” present and ta- in the past.',present:['أَتَفَاعَلُ','atafāʿalu'],past:['تَفَاعَلْتُ','tafāʿaltu'],noun:['تَفَاعُل','tafāʿul']},
 VII:{description:'Add n before the first root letter: an- in the “I” present, in- in the standalone past and verbal noun.',present:['أَنْفَعِلُ','anfaʿilu'],past:['اِنْفَعَلْتُ','infaʿaltu'],noun:['اِنْفِعَال','infiʿāl']},
 VIII:{description:'Insert t after the first root letter. In some roots, that t changes or merges with a neighboring consonant.',present:['أَفْتَعِلُ','aftaʿilu'],past:['اِفْتَعَلْتُ','iftaʿaltu'],noun:['اِفْتِعَال','iftiʿāl']},
 IX:{description:'Double the final root letter. Before the past “I” ending -tu, the two copies separate rather than staying a shadda.',present:['أَفْعَلُّ','afʿallu'],past:['اِفْعَلَلْتُ','ifʿalaltu'],noun:['اِفْعِلَال','ifʿilāl']},
 X:{description:'Add st before the root: asta- in the “I” present, ista- in the standalone past and verbal noun.',present:['أَسْتَفْعِلُ','astafʿilu'],past:['اِسْتَفْعَلْتُ','istafʿaltu'],noun:['اِسْتِفْعَال','istifʿāl']},
 'Quadriliteral I':{description:'This pattern has four root letters. It is separate from the three-letter-root forms I–X.',present:['أُفَعْلِلُ','ufaʿlilu'],past:['فَعْلَلْتُ','faʿlaltu'],noun:['فَعْلَلَة','faʿlala']}
};
const practiceTenseNotes={
  "II": [
    [
      "Present",
      "Three syllables when the final -u is omitted. Starts with [أُ] (u-), with a shadda [ّ] on the second root letter: [أُدَرِّسُ] — u-dar-ris(u)."
    ],
    [
      "Past",
      "Retains the shadda on the second root letter: [دَرَّسْتُ] — darrastu."
    ],
    [
      "Verbal noun",
      "Usually adds [تَ] (ta-), a sukūn [ْ] on the first root letter, and a long ī [ِي] between the second and final root letters, with no shadda: [تَدْرِيس] — tadrīs. Some verbs use another pattern, such as [تَرْبِيَة] — tarbiya."
    ]
  ],
  "III": [
    [
      "Present",
      "Three syllables when the final -u is omitted. Starts with [أُ] (u-), with a long ā [ا] after the first root letter: [أُسَافِرُ] — u-sā-fir(u)."
    ],
    [
      "Past",
      "Retains the root letters and long ā. The dictionary “he” form has fatḥas: [سَافَرَ] — sāfara. The “I” form adds -tu and a sukūn on the final root letter: [سَافَرْتُ] — sāfartu."
    ],
    [
      "Verbal noun",
      "Commonly adds mu- and follows [مُفَاعَلَة] (mufāʿala), retaining the root letters and long ā. Another standard pattern is [فِعَال] (fiʿāl). Travel uses [سَفَر] (safar) in our vocabulary; the regular Form III noun [مُسَافَرَة] (musāfara) also exists."
    ]
  ],
  "IV": [
    [
      "Present",
      "Two syllables when the final -u is omitted. Starts with [أُ] (u-), followed by a sukūn [ْ] on the first root letter: [أُرْسِلُ] — ur-sil(u)."
    ],
    [
      "Past",
      "Starts with [أَ] (a-): [أَرْسَلْتُ] — arsaltu."
    ],
    [
      "Verbal noun",
      "Starts with [إِ] (i-) and adds a long ā [َا] before the final root letter: [إِرْسَال] — irsāl. The regular pattern is [إِفْعَال] — ifʿāl."
    ]
  ],
  "V": [
    [
      "Present",
      "Four syllables when the final -u is omitted. Starts with [أَتَ] (ata-): [أَتَعَلَّمُ] — a-ta-ʿal-lam(u)."
    ],
    [
      "Past",
      "Starts with [تَ] (ta-): [تَعَلَّمْتُ] — taʿallamtu."
    ],
    [
      "Verbal noun",
      "The doubled middle root letter carries both shadda and damma [ُّ]: [تَعَلُّم] — taʿallum."
    ]
  ]
};
function practiceTenseExplanation(form){return practiceTenseNotes[form]?`<p class="practice-note">These descriptions apply to the regular active “I” pattern.</p>${practiceTenseNotes[form].map(([label,text])=>`<p><strong>${label}:</strong> ${grammarText(text)}</p>`).join('')}`:''}
function practiceGuideTemplate(p){return `<div class="practice-guide-templates">${[['present','Present · I'],['past','Past · I'],['noun','Verbal noun']].map(([k,label])=>`<div><small>${label}</small><span lang="ar" dir="rtl">${arabic(p[k][0])}</span><span class="practice-guide-tr">${p[k][1]}</span></div>`).join('')}</div>`}
function practicePatternGuide(){const f=practiceState.filters;let forms=f.subforms.size?['I']:practiceForms.filter(form=>f.forms.has(form));if(!forms.length)return `<section class="practice-guide"><h2>How the patterns work</h2><p>Forms are templates for root letters. Select a verb form or Form I vowel pattern in Filters to see its sound pattern here.</p></section>`;let html=grammarText('<section class="practice-guide"><h2>Selected patterns</h2><p>ف ع ل (f–ʿ–l) stand for root letters. The verb templates below use “I”; weak and doubled roots can change their sound. Verbal noun patterns are common templates, with exceptions.</p><p><strong>Weak roots</strong> contain و or ي. These root letters can become long vowels or disappear in some conjugations: [أَقُولُ] (aqūlu, I say) → [قُلْتُ] (qultu, I said), from ق–و–ل.</p><p><strong>Doubled roots</strong> have identical second and third letters. They can merge under a shadda or separate before an ending: [أَمُدُّ] (amuddu, I extend) → [مَدَدْتُ] (madadtu, I extended), from م–د–د.</p><p>The verb keeps its numbered form. Form II’s doubled middle letter is part of its template; it does not mean the root itself is doubled. For example, [دَرَّسَ] (darrasa) has three different root letters: د–ر–س.</p>');for(let form of forms){let p=practicePatternNotes[form];html+=`<div class="practice-guide-entry"><h3>${form==='Quadriliteral I'?form:'Form '+form}</h3>${practiceTenseNotes[form]?practiceTenseExplanation(form):`<p>${p.description}</p>`}`;if(form==='I'){let subs=[...f.subforms];if(!subs.length)html+='<p class="practice-guide-tr">Six active patterns: a → u · a → i · a → a · i → a · u → u · i → i. Select one to see its “I” template.</p>';for(let sub of subs){let s=window.MOSA_VERB_SUBFORMS[sub];html+=`<h4>${s.label}</h4>`;if(sub==='irregular'){html+='<p>Compare the complete conjugations below; a single sound-root template does not describe these entries.</p>';continue}let template;if(sub==='passive'){html+='<p>The subject receives the action. Listen for u–i in the past and u–a in the present.</p>';template={present:['أُفْعَلُ','ufʿalu'],past:['فُعِلْتُ','fuʿiltu'],noun:['—','Learn with the verb']}}else{let [a,b]=sub.split('-'),mark={a:'َ',i:'ِ',u:'ُ'};html+=`<p>The middle root vowel is ${a} in the past and ${b} in the present. The “I” past adds -tu; the present begins a-.</p>`;template={present:['أَفْع'+mark[b]+'لُ','afʿ'+b+'lu'],past:['فَع'+mark[a]+'لْتُ','faʿ'+a+'ltu'],noun:['—','Learn with the verb']}}html+=practiceGuideTemplate(template)}}else html+=practiceGuideTemplate(p);html+='</div>'}return html+'</section>'}
// Practice has independent filters and ratings; study visibility options are shared.
const practiceForms=['I','II','III','IV','V','VI','VII','VIII','IX','X','Quadriliteral I'];
function practiceStored(key,fallback){try{return JSON.parse(localStorage.getItem(key))||fallback}catch{return fallback}}
const practiceSaved=practiceStored('mosa-practice-filters',{});
const practiceState={filters:Object.fromEntries(['forms','subforms','collections','chapters','difficulties'].map(key=>[key,new Set(practiceSaved[key]||[])])),ratings:practiceStored('mosa-practice-ratings',{}),search:'',reveals:new Set()};
function practiceEscape(value){return String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function practiceList(){const f=practiceState.filters,q=stripHarakat(practiceState.search).toLowerCase().trim();return window.MOSA_VERB_PRACTICE.filter(v=>(!f.forms.size||f.forms.has(v.form))&&(!f.subforms.size||(v.form==='I'&&f.subforms.has(v.subform)))&&(!f.difficulties.size||f.difficulties.has(practiceState.ratings[v.id]||3))&&v.memberships.some(m=>(!f.collections.size||f.collections.has(m.collectionId))&&(!f.chapters.size||f.chapters.has(m.collectionId+':'+m.chapter)))&&(!q||stripHarakat([v.meaning,v.present.ar,v.present.tr,v.past.ar,v.past.tr,v.noun.ar,v.noun.tr].join(' ')).toLowerCase().includes(q)))}
function practiceView(){let count=Object.values(practiceState.filters).reduce((n,s)=>n+s.size,0);app.innerHTML=header('Practice','Learn verbs by their form','',`<div class="header-actions"><button class="header-filter" onclick="practiceFilterSheet()" aria-label="Filter verbs">${filterIcon()}${count?`<span class="filter-badge">${count}</span>`:''}</button><button class="header-gear" onclick="practiceOptions()" aria-label="Study options">${gearIcon()}</button></div>`)+`<div class="practice-tabs" role="tablist" aria-label="Practice topics"><button role="tab" aria-selected="true" class="active" onclick="practiceView()">Verbs</button></div><p class="practice-intro">Compare the present, past, and verbal noun (maṣdar). Verb columns use “I” where Arabic allows it. Form I patterns describe the middle root vowel: past → present.</p><div id="practicePatternGuide"></div><label class="practice-search">Search verbs<input type="search" placeholder="English, Arabic, or transliteration" value="${practiceEscape(practiceState.search)}" oninput="practiceState.search=this.value;practiceRefresh()"></label><div id="practiceResults"></div>`;practiceRefresh()}
function practiceField(v,tense,field,value,cls){let key=v.id+':'+tense+':'+field,hidden=state.hide[field]&&!practiceState.reveals.has(key);return `<button class="practice-field ${cls} ${hidden?'list-hidden':''}" onclick="practiceReveal('${v.id}','${tense}','${field}')" aria-label="${hidden?'Reveal '+field:practiceEscape(value)}">${practiceEscape(value)}</button>`}
function practiceRow(v){return `<article class="practice-row"><div class="practice-row-title">${practiceField(v,'meaning','en',v.meaning,'list-en')}<span class="practice-tag">${v.passive?'Passive · ':''}${practiceEscape(v.rootType)}</span></div><div class="practice-columns">${[['present','Present · I'],['past','Past · I'],['noun','Verbal noun']].map(([tense,label])=>`<div class="practice-cell"><div class="practice-cell-label">${label}${!state.hide.audio?`<button class="practice-audio" aria-label="Play ${tense}" onclick="practiceSpeak('${v.id}','${tense}')">${speakerIcon()}</button>`:''}</div>${practiceField(v,tense,'ar',arabic(v[tense].ar),'list-ar')}${practiceField(v,tense,'tr',v[tense].tr,'list-tr')}</div>`).join('')}</div>${v.note?`<p class="practice-note">${practiceEscape(v.note)}</p>`:''}${v.grammarNote?`<div class="practice-note">${grammarText(v.grammarNote)}</div>`:''}<div class="practice-rating"><label for="rating-${v.id}">Difficulty</label><select id="rating-${v.id}" onchange="practiceRate('${v.id}',Number(this.value))">${[1,2,3,4,5].map(n=>`<option value="${n}" ${(practiceState.ratings[v.id]||3)===n?'selected':''}>${n}</option>`).join('')}</select></div></article>`}
function practiceRefresh(){document.querySelector('#practicePatternGuide').innerHTML=practicePatternGuide();let list=practiceList(),html=`<p class="practice-count" aria-live="polite">${list.length} verb ${list.length===1?'family':'families'}</p>`;for(let form of practiceForms){let rows=list.filter(v=>v.form===form);if(!rows.length)continue;html+=`<section class="practice-group"><h2>${form==='Quadriliteral I'?'Quadriliteral verbs':'Form '+form}</h2>`;let groups=form==='I'?Object.keys(window.MOSA_VERB_SUBFORMS):[''];for(let sub of groups){let group=rows.filter(v=>!sub||v.subform===sub);if(!group.length)continue;if(sub){let p=window.MOSA_VERB_SUBFORMS[sub];html+=`<h3 class="practice-pattern">${p.label}<span>${practiceEscape(p.tr)}</span>${p.past?`<small lang="ar" dir="rtl">${arabic(p.past)} ← ${arabic(p.present)}</small>`:''}</h3>${group.some(v=>v.rootType==='Weak / doubled')?'<p class="practice-note">Weak and doubled roots belong to an underlying pattern, but their full conjugations can change vowels or drop letters.</p>':''}`}html+=group.map(practiceRow).join('')}html+='</section>'}if(!list.length)html+=`<section class="filter-empty"><h2>No matching verbs</h2><p>${practiceState.filters.forms.has('IX')?'No Form IX verbs are in the current vocabulary.':'Try a different search or filter.'}</p><button class="primary" onclick="practiceClear(true)">Clear Filters and Search</button></section>`;document.querySelector('#practiceResults').innerHTML=html}
function practiceReveal(id,tense,field){if(!state.hide[field])return;practiceState.reveals.add(id+':'+tense+':'+field);practiceRefresh()}
function practiceSpeak(id,tense){if(state.hide.audio)return;let v=window.MOSA_VERB_PRACTICE.find(v=>v.id===id);if(v&&['present','past','noun'].includes(tense))playArabic({id:v.id+'-'+tense,...v[tense]})}
function practiceRate(id,n){practiceState.ratings[id]=n;localStorage.setItem('mosa-practice-ratings',JSON.stringify(practiceState.ratings));practiceRefresh()}
function practiceChip(type,value,label=value){let active=practiceState.filters[type].has(value);return `<button class="filter-chip ${active?'active':''}" onclick="practiceToggleFilter('${type}','${value}')" aria-pressed="${active}">${practiceEscape(label)}</button>`}
function practiceCollections(){let ids=new Set(window.MOSA_VERB_PRACTICE.flatMap(v=>v.memberships.map(m=>m.collectionId)));return COLLECTIONS.filter(c=>ids.has(c.id))}
function practiceFilterSheet(){let collections=practiceCollections().filter(c=>practiceState.filters.collections.has(c.id));sheet.innerHTML=`<div class="handle"></div><h3>Filter Verbs</h3><div class="filter-section"><h4>Verb form</h4><div class="filter-grid">${practiceForms.map(f=>practiceChip('forms',f,f==='Quadriliteral I'?f:'Form '+f)).join('')}</div></div><div class="filter-section"><h4>Form I · past → present vowel</h4><p class="filter-prompt">Selecting a pattern shows Form I verbs only. These are the six active patterns; passive and irregular entries are separate.</p><div class="filter-grid">${Object.entries(window.MOSA_VERB_SUBFORMS).map(([key,p])=>practiceChip('subforms',key,p.label)).join('')}</div></div><div class="filter-section"><h4>Collections</h4><div class="filter-grid">${practiceCollections().map(c=>practiceChip('collections',c.id,c.name)).join('')}</div></div><div class="filter-section"><h4>Chapters</h4>${collections.length?collections.map(c=>`<p class="filter-prompt">${c.name}</p><div class="filter-grid">${[...new Set(window.MOSA_VERB_PRACTICE.flatMap(v=>v.memberships.filter(m=>m.collectionId===c.id).map(m=>m.chapter)))].sort((a,b)=>a-b).map(ch=>practiceChip('chapters',c.id+':'+ch,'Chapter '+ch)).join('')}</div>`).join(''):'<p class="filter-prompt">Select a collection to choose chapters.</p>'}</div><div class="filter-section"><h4>Difficulty</h4><div class="filter-grid">${[1,2,3,4,5].map(n=>practiceChip('difficulties',n,String(n))).join('')}</div></div><div class="filter-footer"><button class="secondary" onclick="practiceClear()">Clear All</button><button class="primary" onclick="closeSheet()">Done · ${practiceList().length} verbs</button></div>`;sheet.classList.add('open');backdrop.classList.add('open')}
function practiceSaveFilters(){localStorage.setItem('mosa-practice-filters',JSON.stringify(Object.fromEntries(Object.entries(practiceState.filters).map(([k,v])=>[k,[...v]]))))}
function practiceToggleFilter(type,value){let f=practiceState.filters;if(type==='difficulties')value=Number(value);if(f[type].has(value)){f[type].delete(value);if(type==='collections')for(let ch of [...f.chapters])if(ch.startsWith(value+':'))f.chapters.delete(ch)}else{f[type].add(value);if(type==='subforms'){f.forms.clear();f.forms.add('I')}if(type==='forms'&&value!=='I')f.subforms.clear()}practiceSaveFilters();practiceFilterSheet()}
function practiceClear(show=false){Object.values(practiceState.filters).forEach(s=>s.clear());practiceState.search='';practiceSaveFilters();if(show)render();else practiceFilterSheet()}
function practiceOptions(){sheet.innerHTML=`<div class="handle"></div><h3>Study Options</h3>${[['en','English'],['ar','Arabic'],['tr','Transliteration'],['harakat','Harakat'],['audio','Audio']].map(([k,l])=>`<div class="option">Hide ${l}<button class="switch ${state.hide[k]?'on':''}" aria-label="Hide ${l}" aria-pressed="${state.hide[k]}" onclick="practiceToggleOption('${k}')"></button></div>`).join('')}`;sheet.classList.add('open');backdrop.classList.add('open')}
function practiceToggleOption(key){state.hide[key]=!state.hide[key];practiceState.reveals.clear();if(['en','ar','tr'].includes(key)){for(let r of [...state.listReveals])if(r.endsWith(':'+key))state.listReveals.delete(r);for(let r of [...state.cardReveals])if(r.endsWith(':'+key))state.cardReveals.delete(r)}localStorage.setItem('msa-study-options',JSON.stringify(state.hide));practiceOptions()}
