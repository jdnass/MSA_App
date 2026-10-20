// Broken-plural study groups use reviewed spellings, not guesses from word endings.
const brokenPluralPatterns=[
  {
    "id": "afaal",
    "ar": "أَفْعَال",
    "tr": "afʿāl",
    "words": "أبعاد أبناء أبواب أتراك أجداد أجزاء أجسام أجناس أجواء أجيال أحداث أحزاب أحفاد أحلام أحوال أحياء أخبار أخطاء أخلاق أخوال أدوار أديان أرباح أرقام أرياف أزواج أسباب أسراب أسرار أسعار أسفار أسماء أسماك أسنان أسواق أشخاص أشغال أشياء أصحاب أصياف أضواء أطباق أطفال أعداء أعداد أعراس أعراض أعضاء أعلام أعمار أعمال أعمام أعوام أعياد أفراد أفكار أفلام أفواج أقدام أقسام أقلام أقمار أقوال أكواب ألبان ألغام ألمان ألوان أمراض أمطار أموال أميال أنباء أنصاف أنماط أنهار أنواع أهداف أهرام أوراق أوصاف أوضاع أوطان أولاد آداب آذان آلاف آلام آمال أيام"
  },
  {
    "id": "fuool",
    "ar": "فُعُول",
    "tr": "fuʿūl",
    "words": "أمور بحور بنود بنوك بيوت ثلوج جسور جنود جيوب جيوش حدود حروب حروف حلول دخول دروس رؤوس سطوح سطور شرور شروط شعوب شهور صدور صفوف صيوف ضيوف طعوم ظهور عصور علوم فروع فروق فصول قصور قلوب كسور لحوم ملوك نجوم وجوه وفود ظنون عيون قروش حقول شيوخ خطوط"
  },
  {
    "id": "fiaal",
    "ar": "فِعَال",
    "tr": "fiʿāl",
    "words": "بحار بلاد ثقال جبال جياع خفاف دماء ديار رجال رقاب رياح سمان صعاب صغار طوال غضاب قصار كبار كلاب مياه نحاف لجان"
  },
  {
    "id": "fual",
    "ar": "فُعَل",
    "tr": "fuʿal",
    "words": "أسر جمل خطط دول رتب رخص ركب ستر شقق صور عطل عقد علب فرص مدد نسخ قرى قوى غرف"
  },
  {
    "id": "fial",
    "ar": "فِعَل",
    "tr": "fiʿal",
    "words": "بدل قيم منح مهن نسب"
  },
  {
    "id": "fuul",
    "ar": "فُعُل",
    "tr": "fuʿul",
    "words": "جدد سفن صحف طرق كتب مدن"
  },
  {
    "id": "full",
    "ar": "فُعْل",
    "tr": "fuʿl",
    "words": "حمر صفر"
  },
  {
    "id": "fuaal",
    "ar": "فُعَّال",
    "tr": "fuʿʿāl",
    "words": "ثوار خطاب ركاب سكان ضباط طلاب عمال قراء نواب حجاج"
  },
  {
    "id": "fulaan",
    "ar": "فُعْلَان",
    "tr": "fuʿlān",
    "words": "بلدان شبان صلبان قمصان"
  },
  {
    "id": "filaan",
    "ar": "فِعْلَان",
    "tr": "fiʿlān",
    "words": "جيران حيطان سيقان"
  },
  {
    "id": "fulaa",
    "ar": "فُعَلَاء",
    "tr": "fuʿalāʾ",
    "words": "بسطاء جهلاء خبراء رؤساء رقباء زعماء زملاء سعداء سفراء ضعفاء طرفاء ظرفاء عرفاء عظماء عقداء علماء عمداء غرباء فقراء قدماء كرماء مدراء نقباء وزراء وكلاء"
  },
  {
    "id": "afilaa",
    "ar": "أَفْعِلَاء",
    "tr": "afʿilāʾ",
    "words": "أذكياء أصدقاء أطباء أغبياء أغنياء أقرباء أقوياء"
  },
  {
    "id": "mafaail",
    "ar": "مَفَاعِل",
    "tr": "mafāʿil",
    "words": "مبالغ متاجر مجالس محافظ محاكم مدارس مدافع مراحل مرافق مراكز مسارح مشاهد مصانع مصايف مطابخ مطابع مطاعم معارف معاطف معاهد مكاتب ملابس ملاعق ممالك منازل مناشف مناصب مناطق مناهج مواقع مواقف موانئ مشاكل مخاد"
  },
  {
    "id": "mafaaiil",
    "ar": "مَفَاعِيل",
    "tr": "mafāʿīl",
    "words": "مجانين مشاريع مفاتيح مناديل مواضيع مواعيد"
  },
  {
    "id": "faail",
    "ar": "فَعَائِل",
    "tr": "faʿāʾil",
    "words": "جرائد جوائز حدائق حقائب حقائق خرائط خزائن دقائق ذخائر رسائل ضرائب عجائز عصائر فصائل فضائح قصائد قلائل كتائب كنائس مسائل نتائج نصائح وسائط وسائل وظائف وقائع"
  },
  {
    "id": "fawaail",
    "ar": "فَوَاعِل",
    "tr": "fawāʿil",
    "words": "جوامع جوانب حوادث دوافع روائح روابط رواتب سواحل شوارع شواطئ عوائل عواصم عوالم قوائم قواعد قوافل نوادر هواتف فواكه نوافذ"
  },
  {
    "id": "falaalil",
    "ar": "فَعَالِل",
    "tr": "faʿālil",
    "words": "برامج دفاتر شراشف فنادق قنابل"
  },
  {
    "id": "falaaliil",
    "ar": "فَعَالِيل",
    "tr": "faʿālīl",
    "words": "بناطيل تنانير جماهير جواسيس دساتير سراويل شبابيك سكاكين عناوين فناجين دكاكين تلاميذ"
  },
  {
    "id": "afaail",
    "ar": "أَفَاعِل",
    "tr": "afāʿil",
    "words": "أجانب أقارب أماكن أوائل أواخر"
  },
  {
    "id": "afaaiil",
    "ar": "أَفَاعِيل",
    "tr": "afāʿīl",
    "words": "أباريق أسابيع أساليب أنابيب"
  },
  {
    "id": "tafaail",
    "ar": "تَفَاعِل",
    "tr": "tafāʿil",
    "words": "تجارب"
  },
  {
    "id": "tafaaiil",
    "ar": "تَفَاعِيل",
    "tr": "tafāʿīl",
    "words": "تصاريح تقارير تقاويم تكاليف تواريخ"
  },
  {
    "id": "afilah",
    "ar": "أَفْعِلَة",
    "tr": "afʿila",
    "words": "أئمة أجنحة أجوبة أحذية أحزمة أحسية أدوية أزمنة أسئلة أسلحة أشتية أشربة أطرزة أطعمة أفدنة ألوية أنظمة أوشحة أربعة"
  },
  {
    "id": "aful",
    "ar": "أَفْعُل",
    "tr": "afʿul",
    "words": "أذرع أسهم أشهر أنفس أعين أيد"
  },
  {
    "id": "faalah",
    "ar": "فَعَلَة",
    "tr": "faʿala",
    "words": "حفدة طلبة قادة سادة"
  },
  {
    "id": "fulah",
    "ar": "فُعَلَة",
    "tr": "fuʿala",
    "words": "قضاة"
  },
  {
    "id": "filah",
    "ar": "فِعْلَة",
    "tr": "fiʿla",
    "words": "إخوة فتية"
  },
  {
    "id": "falaalilah",
    "ar": "فَعَالِلَة",
    "tr": "faʿālila",
    "words": "تلامذة فراعنة قباطنة"
  },
  {
    "id": "falaa",
    "ar": "فَعْلَى",
    "tr": "faʿlā",
    "words": "قتلى مرضى"
  },
  {
    "id": "falaaya",
    "ar": "فَعَالَى / فَعَالِي",
    "tr": "faʿālā / faʿālī",
    "words": "زوايا صحارى صحاري قضايا هدايا نصارى"
  },
  {
    "id": "falaaliyy",
    "ar": "فَعَالِيّ",
    "tr": "faʿāliyy",
    "words": "كراسي"
  },
  {
    "id": "weak",
    "ar": "Patterns with letter changes",
    "tr": "Weak / doubled forms",
    "words": "آباء آراء أراض أياد دور ليال معان مقاه مواد نواد"
  },
  {
    "id": "other",
    "ar": "Other plural forms",
    "tr": "Learn with the singular",
    "words": "أربعاء فرقاء نساء"
  }
,
  {"id":"afaailah","ar":"أَفَاعِلَة","tr":"afāʿila","words":"أساتذة"},
  {"id":"fulaalaa","ar":"فُعَالَى","tr":"fuʿālā","words":"كسالى"}
];
const brokenPluralState={search:'',pattern:'all',reveals:new Set(),collections:new Set((()=>{try{const saved=JSON.parse(localStorage.getItem('mosa-broken-plural-collections')||'[]');return Array.isArray(saved)?saved.filter(id=>COLLECTIONS.some(c=>c.id===id)):[]}catch{return []}})())};
function brokenPluralKey(value){return stripHarakat(String(value||'')).replace(/ـ/g,'').trim().replace(/^ال/,'').replace(/\s+/g,' ')}
const brokenPluralPatternByWord=new Map(brokenPluralPatterns.flatMap(p=>p.words.split(' ').map(w=>[w,p.id])));
function brokenPluralPattern(value){return brokenPluralPatternByWord.get(brokenPluralKey(value).split(' ')[0])}
// Additional reviewed source plurals not yet used by the pattern practice table.
const sourceBrokenPluralWords=new Set('آثار أملاك تفاصيل صنادل جوارب تمارين أمم'.split(' '));
// Unvocalized spellings can coincide with a singular or a weekday.
const sourceBrokenPluralExclusions=new Set(['dli-c87-25','madina-book1-30','ak2-c9-12','mango-c13-23']);
// Source vocabulary cards qualify; supplemental family-completion cards do not.
// Part 2 preserves sourceOrders even for explicitly listed plural cards.
function isSourceBrokenPlural(word){
  if(sourceBrokenPluralExclusions.has(word.id)||isCompanionVerbForm(word))return false;
  if(Array.isArray(word.sourceOrders)&&!word.sourceOrders.length)return false;
  if(!word.sourceOrders?.length&&(word.singularId||/(?:-bp|-plural)$/.test(word.id)))return false;
  if(!/noun|adjective/i.test(word.pos||'')&&!/^madina/.test(word.collectionId||''))return false;
  if(/pronoun|verb/i.test(word.pos||''))return false;
  const key=brokenPluralKey(word.ar).split(' ')[0];
  if(['شرطة','ناس','عرب','يهود','أربعة'].includes(key))return false;
  return brokenPluralPatternByWord.has(key)||sourceBrokenPluralWords.has(key);
}
function brokenPluralSourceRank(id){return id==='alkitaab1'?0:id==='mango-msa'?1:id==='alkitaab2'?2:id.startsWith('madina')?3:4}
function brokenPluralEntries(){
  const collections=[...COLLECTIONS].sort((a,b)=>brokenPluralSourceRank(a.id)-brokenPluralSourceRank(b.id));
  const rows=[],seen=new Map(),singulars=new Map();
  const extraPairs={'قروش':'قرش','حقول':'حقل','شيوخ':'شيخ','حجاج':'حاج','غرف':'غرفة','فتية':'فتى','نصارى':'نصراني','كسالى':'كسول','مخاد':'مخدة','دكاكين':'دكان','نوافذ':'نافذة','خطوط':'خط','نساء':'امرأة'};
  const allWords=collections.flatMap(c=>[...(c.vocab||[]),...Object.values(c.chapters||{}).flatMap(ch=>ch.vocab||[])]);
  for(const [plural,singular] of Object.entries(extraPairs)){const word=allWords.find(w=>brokenPluralKey(w.ar)===singular&&!/plural/i.test(w.pos||''));if(word)singulars.set(plural,word)}
  const wordsFor=c=>[...(c.vocab||[]),...Object.values(c.chapters||{}).flatMap(ch=>ch.vocab||[])];
  const variants=value=>String(value||'').split(/\s*[/؛;]\s*/).filter(v=>v&&v!=='—');
  function add(c,word,plural,singular=word,pluralCard=null){
    const pattern=brokenPluralPattern(plural);if(!pattern||!singular||brokenPluralKey(singular.ar)===brokenPluralKey(plural))return;
    // Gender counterparts and pronoun/verb inflections are not singular–plural pairs.
    if(['شرطة','ناس','عرب','يهود'].includes(brokenPluralKey(plural).split(' ')[0]))return;
    if(brokenPluralKey(plural)==='نساء'&&brokenPluralKey(singular.ar)!=='امرأة')return;
    if(brokenPluralKey(singular.ar)==='بسبب')singular={...singular,ar:'سَبَب',en:'reason; cause',tr:'sabab'};
    const key=brokenPluralKey(singular.ar)+'|'+brokenPluralKey(plural);
    if(seen.has(key)){const row=seen.get(key);if(!row.sources.some(s=>s.id===c.id))row.sources.push({id:c.id,name:c.name});if(brokenPluralSourceRank(c.id)<brokenPluralSourceRank(row.source)){row.source=c.id;row.chapter=word.chapter||0}return}
    const row={id:'bp-'+rows.length,pattern,meaning:singular.en,singular:{id:singular.id,ar:singular.ar,tr:singular.tr||''},plural:{id:pluralCard?.id||word.id+'-plural',ar:plural,tr:pluralCard?.tr||''},source:c.id,chapter:word.chapter||0,sources:[{id:c.id,name:c.name}]};
    seen.set(key,row);rows.push(row);
    const full=brokenPluralKey(plural);if(!singulars.has(full))singulars.set(full,singular);
  }
  for(const c of collections){const words=wordsFor(c),byId=new Map(words.map(w=>[w.id,w]));
    for(const word of words){
      if(!/noun|adjective/i.test(word.pos||'')||/pronoun|verb|plural/i.test(word.pos||''))continue;
      for(const value of [...variants(word.mp),...variants(word.fp)]){
        // Feminine plural metadata sometimes supplies a different gender, e.g. رجل → نساء.
        const pluralCard=words.find(p=>brokenPluralKey(p.ar)===brokenPluralKey(value)&&/plural/i.test(p.pos||''));
        add(c,word,value,word,pluralCard);
      }
    }
    for(const word of words){if(!word.singularId)continue;for(const value of variants(word.ar))add(c,word,value,byId.get(word.singularId),word)}
  }
  // Some source lists store plurals as standalone cards. Reuse a verified singular
  // from the collection data; do not invent one or infer a plural from its ending.
  for(const c of collections)for(const word of wordsFor(c)){
    if(!/plural/i.test(word.pos||'')&&!/^madina/.test(c.id))continue;
    if(/^madina/.test(c.id)&&!/(?:s\b|plural|men\b|women\b|people\b|children\b)/i.test(word.en))continue;
    for(const value of variants(word.ar)){const singular=singulars.get(brokenPluralKey(value));if(singular)add(c,word,value,singular,word)}
  }
  return rows.sort((a,b)=>brokenPluralSourceRank(a.source)-brokenPluralSourceRank(b.source)||a.source.localeCompare(b.source)||a.chapter-b.chapter);
}
let brokenPluralCache;
function brokenPluralList(){
  const q=brokenPluralKey(brokenPluralState.search).toLowerCase(),selected=brokenPluralState.collections;
  return (brokenPluralCache??=brokenPluralEntries()).filter(v=>(!selected.size||v.sources.some(s=>selected.has(s.id)))&&(brokenPluralState.pattern==='all'||v.pattern===brokenPluralState.pattern)&&(!q||brokenPluralKey([v.meaning,v.singular.ar,v.singular.tr,v.plural.ar,v.plural.tr,...v.sources.map(s=>s.name)].join(' ')).toLowerCase().includes(q))).map(v=>{
    if(!selected.size)return v;
    const source=v.sources.filter(s=>selected.has(s.id)).sort((a,b)=>brokenPluralSourceRank(a.id)-brokenPluralSourceRank(b.id)||a.id.localeCompare(b.id))[0];
    return {...v,source:source.id};
  }).sort((a,b)=>brokenPluralSourceRank(a.source)-brokenPluralSourceRank(b.source)||a.source.localeCompare(b.source)||a.chapter-b.chapter);
}
function brokenPluralFilterSheet(){
  const entries=brokenPluralCache??=brokenPluralEntries(),ids=new Set(entries.flatMap(v=>v.sources.map(s=>s.id)));
  const collections=COLLECTIONS.filter(c=>ids.has(c.id)).sort((a,b)=>brokenPluralSourceRank(a.id)-brokenPluralSourceRank(b.id)||a.id.localeCompare(b.id));
  sheet.innerHTML=`<div class="handle"></div><h3>Filter Broken Plurals</h3><div class="filter-section"><h4>Collections</h4><p class="filter-prompt">Choose one or more collections. Shared pairs are included whenever they occur in a selected collection. With none selected, all collections are shown.</p><div class="filter-grid">${collections.map(c=>`<button class="filter-chip ${brokenPluralState.collections.has(c.id)?'active':''}" onclick="brokenPluralToggleCollection('${c.id}')" aria-pressed="${brokenPluralState.collections.has(c.id)}">${practiceEscape(c.name)}</button>`).join('')}</div></div><div class="filter-footer"><button class="secondary" onclick="brokenPluralClearCollections()">Clear All</button><button class="primary" onclick="closeSheet()">Done · ${brokenPluralList().length} pairs</button></div>`;
  sheet.classList.add('open');backdrop.classList.add('open');
}
function brokenPluralSaveCollections(){localStorage.setItem('mosa-broken-plural-collections',JSON.stringify([...brokenPluralState.collections]))}
function brokenPluralToggleCollection(id){if(!COLLECTIONS.some(c=>c.id===id))return;const selected=brokenPluralState.collections;if(selected.has(id))selected.delete(id);else selected.add(id);brokenPluralSaveCollections();brokenPluralFilterSheet()}
function brokenPluralClearCollections(){brokenPluralState.collections.clear();brokenPluralSaveCollections();brokenPluralFilterSheet()}

function brokenPluralField(v,side,field,value,cls){const key=v.id+':'+side+':'+field,hidden=state.hide[field]&&!brokenPluralState.reveals.has(key);return `<button class="practice-field ${cls} ${hidden?'list-hidden':''}" onclick="brokenPluralReveal('${v.id}','${side}','${field}')" aria-label="${hidden?'Reveal '+field:practiceEscape(value)}">${practiceEscape(value||'—')}</button>`}
function brokenPluralView(){
  const entries=brokenPluralCache??=brokenPluralEntries();
  app.innerHTML=header('Practice','Learn singular and broken-plural pairs','',`<div class="header-actions"><button class="header-filter" onclick="brokenPluralFilterSheet()" aria-label="Filter broken plurals">${filterIcon()}${brokenPluralState.collections.size?`<span class="filter-badge">${brokenPluralState.collections.size}</span>`:''}</button><button class="header-gear" onclick="practiceOptions()" aria-label="Study options">${gearIcon()}</button></div>`)+practiceTabs()+`<p class="practice-intro">Broken plurals change the word’s internal pattern. Learn each singular with its plural. Within each pattern: Al-Kitaab Part 1 → Mango → Al-Kitaab Part 2 → Madina and other sources. Shared pairs appear once, under their earliest selected source.</p><label class="practice-search">Plural pattern<select aria-label="Plural pattern" style="width:100%;padding:12px;border:1px solid var(--line);border-radius:12px;background:white;font:inherit" onchange="brokenPluralState.pattern=this.value;brokenPluralRefresh()"><option value="all">All patterns</option>${brokenPluralPatterns.filter(p=>entries.some(v=>v.pattern===p.id)).map(p=>`<option value="${p.id}" ${brokenPluralState.pattern===p.id?'selected':''}>${p.ar} · ${p.tr}</option>`).join('')}</select></label><label class="practice-search">Search broken plurals<input type="search" placeholder="English, Arabic, transliteration, or source" value="${practiceEscape(brokenPluralState.search)}" oninput="brokenPluralState.search=this.value;brokenPluralRefresh()"></label><div id="brokenPluralResults"></div>`;
  brokenPluralRefresh();
}
function brokenPluralRefresh(){
  const rows=brokenPluralList();let html=`<p class="practice-count" aria-live="polite">${rows.length} singular–plural pairs</p>`;
  for(const pattern of brokenPluralPatterns){const group=rows.filter(v=>v.pattern===pattern.id);if(!group.length)continue;
    html+=`<section class="practice-group"><h2><span lang="ar" dir="rtl">${arabic(pattern.ar)}</span> <small>${pattern.tr}</small></h2>`;
    for(const source of [...new Set(group.map(v=>v.source))]){const words=group.filter(v=>v.source===source);html+=`<h3 class="practice-pattern">${practiceEscape(COLLECTIONS.find(c=>c.id===source)?.name||source)}</h3>`;
      for(const v of words)html+=`<article class="practice-row">${brokenPluralField(v,'meaning','en',v.meaning,'list-en')}<div class="practice-columns" style="grid-template-columns:repeat(2,minmax(0,1fr))">${[['singular','Singular'],['plural','Broken plural']].map(([side,label])=>`<div class="practice-cell"><div class="practice-cell-label">${label}${!state.hide.audio?`<button class="practice-audio" aria-label="Play ${label.toLowerCase()}" onclick="brokenPluralSpeak('${v.id}','${side}')">${speakerIcon()}</button>`:''}</div>${brokenPluralField(v,side,'ar',arabic(v[side].ar),'list-ar')}${v[side].tr?brokenPluralField(v,side,'tr',v[side].tr,'list-tr'):''}</div>`).join('')}</div><p class="practice-note">${practiceEscape(v.sources.map(s=>s.name).join(' · '))}</p></article>`;
    }html+='</section>';
  }
  if(!rows.length)html+='<p class="filter-empty">No matching broken plurals. Try another collection, pattern, or search.</p>';
  document.querySelector('#brokenPluralResults').innerHTML=html;
}
function brokenPluralReveal(id,side,field){if(!state.hide[field])return;brokenPluralState.reveals.add(id+':'+side+':'+field);brokenPluralRefresh()}
function brokenPluralSpeak(id,side){if(state.hide.audio||!['singular','plural'].includes(side))return;const row=(brokenPluralCache||[]).find(v=>v.id===id);if(row)playArabic(row[side])}
