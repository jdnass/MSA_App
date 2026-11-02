/* Reviewed adjective forms. Plurals describe people; non-human plurals normally
   take feminine-singular agreement. These are lexical pairs, not generated rules. */
window.MOSA_ADJECTIVE_PLURALS=[
 ['طَوِيل','طِوَال','ṭiwāl','tall'],['قَصِير','قِصَار','qiṣār','short'],
 ['كَبِير','كِبَار','kibār','big'],['صَغِير','صِغَار','ṣighār','small'],
 ['سَمِين','سِمَان','simān','fat'],['نَحِيف','نِحَاف','niḥāf','thin'],
 ['ذَكِيّ','أَذْكِيَاء','adhkiyāʾ','smart'],['غَبِيّ','أَغْبِيَاء','aghbiyāʾ','stupid'],
 ['طَرِيف','طُرَفَاء','ṭurafāʾ','funny / amusing'],['عَجُوز','عَجَائِز','ʿajāʾiz','elderly'],
 ['شَابّ','شُبَّان','shubbān','young'],['مَجْنُون','مَجَانِين','majānīn','crazy'],
 ['سَعِيد','سُعَدَاء','suʿadāʾ','happy'],['حَزِين','حَزَانَى','ḥazānā','sad'],
 ['جَدِيد','جُدُد','judud','new'],['قَدِيم','قُدَمَاء','qudamāʾ','old / long-standing'],
 ['جَمِيل','جُمَلَاء','jumalāʾ','beautiful'],['قَوِيّ','أَقْوِيَاء','aqwiyāʾ','strong'],
 ['ضَعِيف','ضُعَفَاء','ḍuʿafāʾ','weak'],['فَقِير','فُقَرَاء','fuqarāʾ','poor'],
 ['غَنِيّ','أَغْنِيَاء','aghniyāʾ','rich'],['مَرِيض','مَرْضَى','marḍā','sick'],
 ['ثَقِيل','ثِقَال','thiqāl','heavy'],['خَفِيف','خِفَاف','khifāf','light in weight'],
 ['صَعْب','صِعَاب','ṣiʿāb','difficult'],['سَهْل','سِهَال','sihāl','easy'],
 ['سَرِيع','سِرَاع','sirāʿ','fast'],['كَرِيم','كُرَمَاء','kuramāʾ','generous'],
 ['عَظِيم','عُظَمَاء','ʿuẓamāʾ','great'],['جَاهِل','جُهَلَاء','juhalāʾ','ignorant'],
 ['بَسِيط','بُسَطَاء','busaṭāʾ','simple'],['غَاضِب','غِضَاب','ghiḍāb','angry'],
 ['جَائِع','جِيَاع','jiyāʿ','hungry'],['عَطْشَان','عِطَاش','ʿiṭāsh','thirsty'],
 ['شَبْعَان','شِبَاع','shibāʿ','full after eating'],['مَشْهُور','مَشَاهِير','mashāhīr','famous'],
 ['أَجْنَبِيّ','أَجَانِب','ajānib','foreign'],
 ['مَاهِر','مَهَرَة','mahara','skilled'],['عَادِل','عُدُول','ʿudūl','just / fair'],
 ['أَحْمَر','حُمْر','ḥumr','red'],['أَصْفَر','صُفْر','ṣufr','yellow'],
 ['أَخْضَر','خُضْر','khuḍr','green'],['أَزْرَق','زُرْق','zurq','blue'],
 ['أَبْيَض','بِيض','bīḍ','white'],['أَسْوَد','سُود','sūd','black']
];
window.MOSA_APPLY_ADJECTIVE_PLURALS=function(collections){
 const u=window.MOSA_VOCABULARY_NORMALIZATION,seen=new Set(),words=[];
 function visit(c){for(const w of c.vocab||[])if(!seen.has(w.id)){seen.add(w.id);words.push(w)}for(const ch of Object.values(c.chapters||c.subchapters||{}))visit(ch)}
 collections.forEach(visit);
 const note='<p>This is a broken plural of an adjective. These plural forms are useful when describing people. Non-human plurals normally take a feminine-singular adjective: [بُيُوت كَبِيرَة] — big houses; compare [رِجَال كِبَار] — big men.</p>';
 const ordered=[...words].sort((a,b)=>u.rank(a.collectionId)-u.rank(b.collectionId));
 for(const [ar,plural,tr,en] of window.MOSA_ADJECTIVE_PLURALS){
  const bases=ordered.filter(w=>u.key(w.ar)===u.key(ar)&&!/(?:plural|verb)/i.test(w.pos||'')&&u.compatible(w.ar,ar,w,{ar,en,pos:'Adjective'}));
  const base=bases[0];if(!base)continue;
  for(const w of bases){w.adjectiveBrokenPlurals??=[];if(!w.adjectiveBrokenPlurals.some(p=>u.key(p.ar)===u.key(plural)))w.adjectiveBrokenPlurals.push({ar:plural,tr});if(!w.mp||w.mp==='—')w.mp=plural;}
  const existing=ordered.find(w=>u.key(w.ar)===u.key(plural)&&u.compatible(w.ar,plural,w,{en:en+' (plural)',pos:'Adjective (broken plural)'}));
  if(existing){existing.singularId=base.id;existing.pos='Adjective (broken plural)';if(!existing.tr||existing.tr==='—')existing.tr=tr;continue;}
  const card={id:base.id+'-adjective-bp',collectionId:base.collectionId,collection:base.collection,chapter:base.chapter,subchapter:base.subchapter,en:en+' (plural)',ar:plural,tr,pos:'Adjective (broken plural)',f:'—',mp:'—',fp:'—',singularId:base.id,supplementalAdjectivePlural:true,grammarNote:note};
  const c=collections.find(c=>c.id===base.collectionId);if(!c)continue;
  let ch=c.chapters?.[base.chapter];
  if(ch){ch.vocab.push(card);if(ch.subchapters?.[base.subchapter])ch.subchapters[base.subchapter].vocab.push(card)}
  else (c.vocab??=[]).push(card);
  ordered.push(card);
 }
};
// Base Arabic, base transliteration, meaning, comparative, transliteration, meaning.
window.MOSA_COMPARATIVES=[
 ['طَوِيل','ṭawīl','tall / long','أَطْوَل','aṭwal','taller / longer'],
 ['سَمِين','samīn','fat','أَسْمَن','asman','fatter'],
 ['كَبِير','kabīr','big / old','أَكْبَر','akbar','bigger / older'],
 ['قَصِير','qaṣīr','short','أَقْصَر','aqṣar','shorter'],
 ['صَغِير','ṣaghīr','small / young','أَصْغَر','aṣghar','smaller / younger'],
 ['نَحِيف','naḥīf','thin','أَنْحَف','anḥaf','thinner'],
 ['جَمِيل','jamīl','beautiful','أَجْمَل','ajmal','more beautiful'],
 ['ذَكِيّ','dhakiyy','smart','أَذْكَى','adhkā','smarter'],
 ['غَبِيّ','ghabiyy','stupid','أَغْبَى','aghbā','more stupid'],
 ['جَيِّد','jayyid','good','أَفْضَل','afḍal','better'],
 ['سَيِّئ','sayyiʾ','bad','أَسْوَأ','aswaʾ','worse'],
 ['جَدِيد','jadīd','new','أَجَدّ','ajadd','newer'],
 ['قَدِيم','qadīm','old','أَقْدَم','aqdam','older / more ancient'],
 ['سَرِيع','sarīʿ','fast','أَسْرَع','asraʿ','faster'],
 ['سَهْل','sahl','easy','أَسْهَل','ashal','easier'],
 ['صَعْب','ṣaʿb','difficult','أَصْعَب','aṣʿab','more difficult'],
 ['قَوِيّ','qawiyy','strong','أَقْوَى','aqwā','stronger'],
 ['ضَعِيف','ḍaʿīf','weak','أَضْعَف','aḍʿaf','weaker'],
 ['ثَقِيل','thaqīl','heavy','أَثْقَل','athqal','heavier'],
 ['خَفِيف','khafīf','light in weight','أَخَفّ','akhaff','lighter'],
 ['رَخِيص','rakhīṣ','cheap','أَرْخَص','arkhaṣ','cheaper'],
 ['غالٍ','ghālin','expensive','أَغْلَى','aghlā','more expensive'],
 ['بارِد','bārid','cold','أَبْرَد','abrad','colder'],
 ['حارّ','ḥārr','hot','أَحَرّ','aḥarr','hotter'],
 ['قَرِيب','qarīb','near','أَقْرَب','aqrab','nearer'],
 ['بَعِيد','baʿīd','far','أَبْعَد','abʿad','farther'],
 ['غَنِيّ','ghaniyy','rich','أَغْنَى','aghnā','richer'],
 ['فَقِير','faqīr','poor','أَفْقَر','afqar','poorer'],
 ['سَعِيد','saʿīd','happy','أَسْعَد','asʿad','happier'],
 ['حَزِين','ḥazīn','sad','أَحْزَن','aḥzan','sadder'],
 ['هادِئ','hādiʾ','quiet','أَهْدَأ','ahdaʾ','quieter'],
 ['نَظِيف','naẓīf','clean','أَنْظَف','anẓaf','cleaner'],
 ['وَسِخ','wasikh','dirty','أَوْسَخ','awsakh','dirtier'],
 ['واضِح','wāḍiḥ','clear','أَوْضَح','awḍaḥ','clearer'],
 ['لَذِيذ','ladhīdh','delicious','أَلَذّ','aladhdh','more delicious'],
 ['كَرِيم','karīm','generous','أَكْرَم','akram','more generous'],
 ['عَظِيم','ʿaẓīm','great','أَعْظَم','aʿẓam','greater'],
 ['عَالٍ','ʿālin','high','أَعْلَى','aʿlā','higher'],
 ['مُهِمّ','muhimm','important','أَهَمّ','ahamm','more important'],
 ['مُمْتِع','mumtiʿ','enjoyable','أَكْثَر إِمْتَاعًا','akthar imtāʿan','more enjoyable','Use أَكْثَر + a verbal noun; do not force every adjective into أَفْعَل.'],
 ['مُزْدَحِم','muzdaḥim','crowded','أَكْثَر اِزْدِحَامًا','akthar izdiḥāman','more crowded','A longer adjective can use أَكْثَر with an accusative verbal noun.'],
 ['مَشْهُور','mashhūr','famous','أَكْثَر شُهْرَةً','akthar shuhratan','more famous'],
 ['مُتْعَب','mutʿab','tired','أَكْثَر تَعَبًا','akthar taʿaban','more tired'],
 ['أَحْمَر','aḥmar','red','أَشَدّ حُمْرَةً','ashadd ḥumratan','redder','Color adjectives already look like أَفْعَل. Use أَشَدّ + the color noun to compare intensity.']
].map((v,i)=>({id:'comparative-'+i,base:{ar:v[0],tr:v[1]},meaning:v[2],comparative:{ar:v[3],tr:v[4]},comparison:v[5],note:v[6]||''}));
