/* Shared vocabulary catalog: source priority, gender counterparts and plural metadata. */
(function(){
  const priority=['alkitaab1','mango-msa','madina-book1','dli-basic','madina-book2','alif-baa','alkitaab2','mosa-modules'];
  const rank=id=>{const n=priority.indexOf(id);return n<0?priority.length:n;};
  const plain=s=>String(s||'').normalize('NFC').replace(/[\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06edـ]/g,'').replace(/\s+/g,' ').trim();
  // Keep lexicalized articles: اليوم means today, whereas يوم means a day.
  const key=s=>plain(s)==='عيد الميلاد'?'عيد الميلاد':plain(s).replace(/[؟?!.,،؛]/g,'').split(' ').map(w=>['اليوم','الليلة','الآن','الأحد','الاثنين','الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'].includes(w)?w:w.replace(/^ال/,'')).join(' ');
  const variants=s=>String(s||'').split(/\s*[/؛;]\s*/).filter(v=>v&&v!=='—');
  const forms=w=>variants(w.ar);
  const noun=w=>!/verb|pronoun|preposition|conjunction|suffix/i.test(w.pos||'')&&!/^I\s/i.test(w.en||'');
  function vocalization(s,ignoreCase){
    let a=String(s).normalize('NFC').replace(/ـ/g,'').split(/\s+/).map(token=>{
      if(!token.startsWith('ال'))return token;
      const bare=token.replace(/^ال[\u064b-\u065f]*/,'');
      return /^[تثدذرزسشصضطظلن]/.test(bare)?bare.replace(/^(.)([\u064b-\u0650\u0652]*)ّ/,'$1$2'):bare;
    }).join(' ').replace(/[\u064b-\u064d\u0652\u0670]/g,'');
    if(ignoreCase)a=a.replace(/[\u064e-\u0650]+(?=\s|$)/g,'');
    const out=[];
    for(const ch of a){if(/[\u064e-\u0651]/.test(ch)){if(out.length)out[out.length-1].marks+=ch;}else if(/[ء-ي]/.test(ch))out.push({ch,marks:''});}
    return out;
  }
  function compatible(a,b,wa,wb){
    if(key(a)!==key(b))return false;
    const meaning=w=>String(w.en||'').toLowerCase().replace(/^(?:the|a|an) /,'').replace(/[.,!?]/g,'').trim();
    if(noun(wa)&&noun(wb)&&meaning(wa)===meaning(wb))return true;
    const x=vocalization(a,noun(wa)&&noun(wb)),y=vocalization(b,noun(wa)&&noun(wb));
    if(x.length!==y.length)return false;
    for(let i=0;i<x.length;i++){
      const av=x[i].marks.match(/[\u064e-\u0650]/)?.[0],bv=y[i].marks.match(/[\u064e-\u0650]/)?.[0];
      if(av&&bv&&av!==bv)return false;
      // Shadda distinguishes, for example, أدرس (study) and أدرّس (teach).
      if(x[i].marks.includes('ّ')!==y[i].marks.includes('ّ')&&/[\u064e-\u0651]/.test(a)&&/[\u064e-\u0651]/.test(b))return false;
    }
    // Preserve distinct senses with different grammatical roles.
    const role=w=>/adjective/i.test(w.pos||'')?'adjective':/^Noun\b/i.test(w.pos||'')?'noun':null;
    if(role(wa)&&role(wb)&&role(wa)!==role(wb)&&meaning(wa)!==meaning(wb))return false;
    return true;
  }
  const humanStems=new Set('والد خال عم جد زوج ابن حفيد خطيب طفل مراسل تلميذ أستاذ معلم صديق ممرض طالب رئيس ياباني'.split(' '));
  function femaleBase(w,cards){
    const a=key(w.ar);if(!a.endsWith('ة')||a.includes(' ')||/adverb|preposition|conjunction|particle/i.test(w.pos||'')||/unit of time|especially|in particular/i.test(w.en||''))return null;
    const stem=a.slice(0,-1);
    const labelled=/female|feminine|\(f\)/i.test(w.en||'');
    const declared=cards.find(m=>m.f&&m.f!=='—'&&key(m.f)===a&&key(m.ar)===stem&&compatible(w.ar,m.f,w,{...m,en:'declared feminine counterpart'}));
    if(!humanStems.has(stem)&&!labelled&&!declared)return null;
    // A language name is vocabulary in its own right, rather than a female person.
    if(['عربي','إنجليزي','تركي'].includes(stem)&&!labelled)return null;
    return cards.find(m=>key(m.ar)===stem&&noun(m)&&!/^plural of/i.test(m.en||'')&&compatible(w.ar.replace(/ة[\u064b-\u065f]*$/,''),m.ar,w,m));
  }
  function normalize(collections){
    const cards=[],seenIds=new Set(),lessons=[];
    function chapter(c){lessons.push(c);for(const w of c.vocab||[])add(w);for(const sub of Object.values(c.subchapters||{}))chapter(sub);}
    function add(w){if(w.id&&!seenIds.has(w.id)){seenIds.add(w.id);cards.push(w);}}
    for(const c of collections){for(const w of c.vocab||[])add(w);for(const ch of Object.values(c.chapters||{}))chapter(ch);}
    const byId=new Map(cards.map(w=>[w.id,w]));
    const combined={
      'alif-baa-2':[['قهْوة عربيّة','Arabic coffee','qahwa ʿarabiyya'],['قهْوة تركيّة','Turkish coffee','qahwa turkiyya']],
      'alif-baa-4':[['حليب','milk','ḥalīb'],['لبن','milk','laban']],
      'alif-baa-26':[['هُوَ','he','huwa','Pronoun'],['هِيَ','she','hiya','Pronoun']],
      'alif-baa-27':[['أَنْتَ','you (masculine singular)','anta','Pronoun'],['أَنْتِ','you (feminine singular)','anti','Pronoun']],
      'alif-baa-107':[['تُرِيدُ','you want (masculine singular)','turīdu','Verb'],['تُرِيدِينَ','you want (feminine singular)','turīdīna','Verb']]
    };
    for(const [id,entries] of Object.entries(combined)){
      const original=byId.get(id);if(!original)continue;
      entries.forEach(([ar,en,tr,pos],i)=>{const w=i?{...original,id:id+'-variant-'+i,audioKind:'vocabulary'}:original;Object.assign(w,{ar,en,tr,pos:pos||original.pos});if(i)add(w);});
    }
    const good=byId.get('alif-baa-15');if(good)Object.assign(good,{ar:'كويس -- كويسة',en:'feeling well/good (m-f)'});
    const egg=byId.get('madina-book2-75');if(egg)Object.assign(egg,{ar:'بَيْضَة',en:'egg',tr:'bayḍa',mp:'بَيْض'});
    // Alif Baa stores some forms in one string. Put those forms into the same
    // fields used by the other courses before comparing the headwords.
    for(const w of cards)if(w.collectionId==='alif-baa'&&/ -- | - /.test(w.ar)){
      const parts=w.ar.split(/\s+(?:--|-)\s+/),tr=String(w.tr||'').split(/\s+[—–-]\s+/);
      if(parts.length===2&&(/\(s\)|\(ies\)|\(men\)|\(women\)|\(boys\)|\(cities\)|\(girls\)|Arabs/i.test(w.en)||/\(m-f\)/i.test(w.en))){
        w.ar=parts[0];w.tr=tr[0];
        if(/\(m-f\)/i.test(w.en))w.f=parts[1];else w.mp=parts[1];
        w.en=w.en.replace(/\s*\((?:s|ies|men|women|boys|cities|girls|m-f)\)/gi,'');
      }
    }
    // Source-listed standalone Madina plurals need the same metadata as the
    // plural cards in the other courses. Only reviewed singular/plural pairs.
    const extraPairs={'قروش':'قرش','حقول':'حقل','شيوخ':'شيخ','حجاج':'حاج','غرف':'غرفة','فتية':'فتى','نصارى':'نصراني','كسالى':'كسول','مخاد':'مخدة','دكاكين':'دكان','نوافذ':'نافذة','خطوط':'خط','نساء':'امرأة','حفدة':'حفيد','علماء':'عالم','فناجين':'فنجان','أمهات':'أم','ركاب':'راكب','قمصان':'قميص','دقائق':'دقيقة','حروف':'حرف','مفاتيح':'مفتاح','مناديل':'منديل'};
    const pluralBases=new Map();
    const addPlural=(ar,base)=>{const k=key(ar);if(!pluralBases.has(k))pluralBases.set(k,[]);pluralBases.get(k).push({ar,base});};
    for(const w of cards)for(const f of ['mp','fp'])for(const ar of variants(w[f]))if(key(ar)!==key(w.ar)){
      addPlural(ar,w);
    }
    for(const [p,s] of Object.entries(extraPairs)){const base=cards.find(w=>key(w.ar)===s&&!/plural/i.test(w.pos||''));if(base&&!pluralBases.has(p))addPlural(p,base);}
    for(const w of cards)if(/^madina/.test(w.collectionId)&&!/^I\b/.test(w.en)){
      const base=(pluralBases.get(key(w.ar))||[]).find(p=>compatible(w.ar,p.ar,w,{en:'verified plural reading',pos:'Noun'}))?.base;
      if(base&&key(base.ar)!==key(w.ar)){
        w.pos=(/adjective/i.test(base.pos||'')?'Adjective':'Noun')+(/ات$|ون$|ين$/.test(key(w.ar))?' (sound plural)':' (broken plural)');
        w.singularId=base.id;w.sourceListedPlural=true;
        if(!base.mp||base.mp==='—')base.mp=w.ar;
      }
    }
    const ordered=cards.map((w,i)=>({w,i})).sort((a,b)=>rank(a.w.collectionId)-rank(b.w.collectionId)||a.i-b.i).map(v=>v.w);
    const aliases={},femaleIds=new Set();
    for(const w of ordered){const base=femaleBase(w,ordered);if(base){aliases[w.id]=base.id;femaleIds.add(w.id);if(!base.f||base.f==='—')base.f=w.ar;}}
    // Remove standalone gender duplicates from lessons as well, while retaining
    // the feminine form on the masculine card. Lesson sentences stay untouched.
    for(const c of [...collections,...lessons])if(c.vocab)c.vocab=c.vocab.filter(w=>!femaleIds.has(w.id));
    const catalog=[],index=new Map();
    for(const w of ordered){
      if(femaleIds.has(w.id))continue;
      const readings=forms(w),matches=readings.flatMap(ar=>(index.get(key(ar))||[]).filter(v=>compatible(ar,v.ar,w,v.word)));
      const retained=readings.every(ar=>matches.some(v=>compatible(ar,v.ar,w,v.word)))?matches[0]?.word:null;
      if(retained){
        aliases[w.id]=retained.id;
        retained.duplicateSources??=[{id:retained.id,collectionId:retained.collectionId}];
        retained.duplicateSources.push({id:w.id,collectionId:w.collectionId});
        if(w.grammarNote&&!retained.grammarNote?.includes(w.grammarNote))retained.grammarNote=(retained.grammarNote||'')+w.grammarNote;
        // Retain useful form metadata when the preferred course lacks it.
        for(const f of ['f','mp','fp'])if((!retained[f]||retained[f]==='—')&&w[f]&&w[f]!=='—')retained[f]=w[f];
        continue;
      }
      catalog.push(w);for(const ar of readings){const k=key(ar);if(!index.has(k))index.set(k,[]);index.get(k).push({word:w,ar});}
    }
    const resolve=id=>{const seen=new Set();while(aliases[id]&&!seen.has(id)){seen.add(id);id=aliases[id];}return id;};
    for(const id of Object.keys(aliases))aliases[id]=resolve(id);
    for(const w of cards)if(w.singularId)w.singularId=resolve(w.singularId);
    return {vocab:catalog,aliases,removedFeminine:[...femaleIds],sourcePriority:priority,originalCount:cards.length};
  }
  window.MOSA_VOCABULARY_NORMALIZATION={normalize,key,compatible,rank};
})();
