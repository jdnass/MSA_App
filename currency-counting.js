// Currency & Counting content and aggregate module lessons, approved October 21, 2026.
window.MOSA_APPLY_CURRENCY_COUNTING=function(modules){
 const numberRows=[
  [0,'صِفْر','ṣifr'],[11,'أَحَدَ عَشَرَ','aḥada ʿashara'],[12,'اِثْنَا عَشَرَ','ithnā ʿashara'],[13,'ثَلَاثَةَ عَشَرَ','thalāthata ʿashara'],[14,'أَرْبَعَةَ عَشَرَ','arbaʿata ʿashara'],[15,'خَمْسَةَ عَشَرَ','khamsata ʿashara'],[16,'سِتَّةَ عَشَرَ','sittata ʿashara'],[17,'سَبْعَةَ عَشَرَ','sabʿata ʿashara'],[18,'ثَمَانِيَةَ عَشَرَ','thamāniyata ʿashara'],[19,'تِسْعَةَ عَشَرَ','tisʿata ʿashara'],
  [20,'عِشْرُون','ʿishrūn'],[21,'وَاحِد وَعِشْرُون','wāḥid wa-ʿishrūn'],[32,'اِثْنَان وَثَلَاثُون','ithnān wa-thalāthūn'],[99,'تِسْعَة وَتِسْعُون','tisʿa wa-tisʿūn'],[100,'مِئَة','miʾa'],[101,'مِئَة وَوَاحِد','miʾa wa-wāḥid'],[112,'مِئَة وَاثْنَا عَشَرَ','miʾa wa-thnā ʿashara'],[136,'مِئَة وَسِتَّة وَثَلَاثُون','miʾa wa-sitta wa-thalāthūn'],[200,'مِئَتَان','miʾatān'],['hundreds','مِئَات','miʾāt'],[201,'مِئَتَان وَوَاحِد','miʾatān wa-wāḥid'],[215,'مِئَتَان وَخَمْسَةَ عَشَرَ','miʾatān wa-khamsata ʿashara'],[300,'ثَلَاثمِئَة','thalāthmiʾa'],[400,'أَرْبَعمِئَة','arbaʿmiʾa'],[500,'خَمْسمِئَة','khamsmiʾa'],[600,'سِتّمِئَة','sittmiʾa'],[700,'سَبْعمِئَة','sabʿmiʾa'],[800,'ثَمَانمِئَة','thamānmiʾa'],[900,'تِسْعمِئَة','tisʿmiʾa'],
  [1000,'أَلْف','alf'],[2000,'أَلْفَان','alfān'],[1318,'أَلْف وَثَلَاثمِئَة وَثَمَانِيَةَ عَشَرَ','alf wa-thalāthmiʾa wa-thamāniyata ʿashara'],[1007,'أَلْف وَسَبْعَة','alf wa-sabʿa'],[1032,'أَلْف وَاثْنَان وَثَلَاثُون','alf wa-thnān wa-thalāthūn'],[2149,'أَلْفَان وَمِئَة وَتِسْعَة وَأَرْبَعُون','alfān wa-miʾa wa-tisʿa wa-arbaʿūn'],['thousands','آلَاف','ālāf'],[3000,'ثَلَاثَة آلَاف','thalātha ālāf'],[4000,'أَرْبَعَة آلَاف','arbaʿa ālāf'],[10000,'عَشَرَة آلَاف','ʿashara ālāf'],[100000,'مِئَة أَلْف','miʾat alf'],[200000,'مِئَتَا أَلْف','miʾatā alf'],[300000,'ثَلَاثمِئَة أَلْف','thalāthmiʾat alf'],[400000,'أَرْبَعمِئَة أَلْف','arbaʿmiʾat alf'],[500000,'خَمْسمِئَة أَلْف','khamsmiʾat alf'],[1000000,'مِلْيُون','milyūn'],[2000000,'مِلْيُونَان','milyūnān'],[10000000,'عَشَرَة مَلَايِين','ʿashara malāyīn'],['million','مِلْيُون','milyūn'],['millions','مَلَايِين','malāyīn']
 ];
 const arabicDigits=value=>String(value).replace(/[0-9]/g,d=>'٠١٢٣٤٥٦٧٨٩'[Number(d)]).replaceAll(',','٬');
 const numbers=numberRows.map(([value,ar,tr],i)=>({id:`mosa-m17-s1-v${i+1}`,collectionId:'mosa-modules',collection:'MoSA Modules',chapter:17,subchapter:1,idInChapter:i+1,en:typeof value==='number'?`${value.toLocaleString('en-US')} (${arabicDigits(value.toLocaleString('en-US'))})`:value,ar,tr,pos:'Number',f:'—',mp:'—',fp:'—',numberValue:value}));
 const rows=[
  ['Can you count in Arabic?','هَلْ تَسْتَطِيعُ أَنْ تَعُدَّ بِالْعَرَبِيَّة؟','hal tastaṭīʿu an taʿudda bi-l-ʿarabiyya?'],
  ['I can count from 1 to 10.','أَسْتَطِيعُ أَنْ أَعُدَّ مِنْ وَاحِد إِلَى عَشَرَة.','astaṭīʿu an aʿudda min wāḥid ilā ʿashara.'],
  ['I know a lot of numbers.','أَعْرِفُ كَثِيرًا مِنَ الْأَعْدَاد.','aʿrifu kathīran mina al-aʿdād.'],
  ['What are you selling?','مَاذَا تَبِيعُ؟','mādhā tabīʿu?'],
  ['I am selling fruits and vegetables.','أَبِيعُ الْفَوَاكِه وَالْخُضَار.','abīʿu al-fawākih wa-l-khuḍār.'],
  ['How much does this cost?','كَمْ يُكَلِّفُ هَذَا؟','kam yukallifu hādhā?'],
  ['That costs 157 lira.','ذَلِكَ يُكَلِّفُ مِئَة وَسَبْعًا وَخَمْسِينَ لِيرَة.','dhālika yukallifu miʾa wa-sabʿan wa-khamsīna līra.'],
  ['Do you accept U.S. dollars?','هَلْ تَقْبَلُونَ الدُّولَارَات الْأَمْرِيكِيَّة؟','hal taqbalūna ad-dūlārāt al-amrīkiyya?'],
  ['No, but we accept pounds and riyal.','لَا، لَكِنْ نَقْبَلُ الْجُنَيْهَات وَالرِّيَالَات.','lā, lākin naqbalu al-junayhāt wa-r-riyālāt.'],
  ['Can I exchange dollars for pounds nearby?','هَلْ يُمْكِنُنِي أَنْ أَسْتَبْدِلَ الدُّولَارَات بِالْجُنَيْهَات فِي مَكَان قَرِيب؟','hal yumkinunī an astabdila ad-dūlārāt bi-l-junayhāt fī makān qarīb?'],
  ['There is an ATM near here.','هُنَاكَ صَرَّاف آلِيّ قَرِيب مِنْ هُنَا.','hunāka ṣarrāf āliyy qarīb min hunā.'],
  ['Do you take checks?','هَلْ تَقْبَلُونَ الشِّيكَات؟','hal taqbalūna ash-shīkāt?'],
  ['No, only cash is accepted.','لَا، نَقْبَلُ النَّقْد فَقَط.','lā, naqbalu an-naqd faqaṭ.'],
  ['What is the cost of this map?','مَا تَكْلِفَة هَذِهِ الْخَرِيطَة؟','mā taklifat hādhihi al-kharīṭa?'],
  ['The map costs 1,438 lira.','تُكَلِّفُ الْخَرِيطَة أَلْفًا وَأَرْبَعمِئَة وَثَمَانِيًا وَثَلَاثِينَ لِيرَة.','tukallifu al-kharīṭa alfan wa-arbaʿmiʾa wa-thamāniyan wa-thalāthīna līra.'],
  ['That’s too expensive.','ذَلِكَ غَالٍ أَكْثَر مِنَ اللَّازِم.','dhālika ghālin akthar mina al-lāzim.'],
  ['It’s cheap and great quality.','إِنَّهَا رَخِيصَة وَذَات جَوْدَة عَالِيَة.','innahā rakhīṣa wa-dhāt jawda ʿāliya.'],
  ['No, that amount is too high.','لَا، هَذَا الْمَبْلَغ مُرْتَفِع جِدًّا.','lā, hādhā al-mablagh murtafiʿ jiddan.'],
  ['Can you lower the cost?','هَلْ يُمْكِنُكَ أَنْ تُخَفِّضَ السِّعْر؟','hal yumkinuka an tukhaffiḍa as-siʿr?'],
  ['Is the price negotiable?','هَلِ السِّعْر قَابِل لِلتَّفَاوُض؟','hali as-siʿr qābil li-t-tafāwuḍ?'],
  ['Can I please have a discount of 25%?','هَلْ يُمْكِنُنِي الْحُصُول عَلَى خَصْم بِنِسْبَة خَمْسَة وَعِشْرِينَ فِي الْمِئَة، مِنْ فَضْلِكَ؟','hal yumkinunī al-ḥuṣūl ʿalā khaṣm bi-nisbat khamsa wa-ʿishrīna fī al-miʾa, min faḍlika?'],
  ['The price is non-negotiable.','السِّعْر غَيْر قَابِل لِلتَّفَاوُض.','as-siʿr ghayr qābil li-t-tafāwuḍ.'],
  ['I only have 1,000 lira with me.','مَعِي أَلْف لِيرَة فَقَط.','maʿī alf līra faqaṭ.'],
  ['That’s not enough money.','هَذَا الْمَال لَيْسَ كَافِيًا.','hādhā al-māl laysa kāfiyan.'],
  ['How much is this?','بِكَمْ هَذَا؟','bi-kam hādhā?'],
  ['Those bananas are 150 lira each.','ذَلِكَ الْمَوْز بِمِئَة وَخَمْسِينَ لِيرَة لِلْحَبَّة.','dhālika al-mawz bi-miʾa wa-khamsīna līra li-l-ḥabba.'],
  ['Okay, I will take it.','حَسَنًا، سَآخُذُهُ.','ḥasanan, sa-ākhudhuhu.'],
  ['What quantity would you like?','مَا الْكَمِّيَّة الَّتِي تُرِيدُهَا؟','mā al-kammiyya allatī turīduhā?'],
  ['I’ll take several.','سَآخُذُ عِدَّة حَبَّات.','sa-ākhudhu ʿiddat ḥabbāt.'],
  ['Is 3 enough?','هَلْ ثَلَاث حَبَّات تَكْفِي؟','hal thalāth ḥabbāt takfī?'],
  ['Sure. Let me get my wallet.','بِالتَّأْكِيد. دَعْنِي أُحْضِرْ مِحْفَظَتِي.','bi-t-taʾkīd. daʿnī uḥḍir miḥfaẓatī.'],
  ['It’s okay. It’s free.','لَا بَأْس. إِنَّهُ مَجَّانِيّ.','lā baʾs. innahu majjāniyy.'],
  ['I want to pay you.','أُرِيدُ أَنْ أَدْفَعَ لَكَ.','urīdu an adfaʿa laka.'],
  ['It’s a small payment anyways.','إِنَّهَا دَفْعَة صَغِيرَة عَلَى أَيّ حَال.','innahā dafʿa ṣaghīra ʿalā ayy ḥāl.'],
  ['Please keep the change.','اِحْتَفِظْ بِالْبَاقِي، مِنْ فَضْلِكَ.','iḥtafiẓ bi-l-bāqī, min faḍlika.'],
  ['I cannot carry coins.','لَا أَسْتَطِيعُ حَمْل الْعُمْلَات الْمَعْدِنِيَّة.','lā astaṭīʿu ḥaml al-ʿumlāt al-maʿdiniyya.']
 ];
 const words=[
  [2,'I can; am able','أَسْتَطِيعُ','astaṭīʿu','Verb'],[2,'I count','أَعُدُّ','aʿuddu','Verb'],[2,'in Arabic','بِالْعَرَبِيَّة','bi-l-ʿarabiyya','Expression'],[2,'from … to …','مِنْ … إِلَى …','min … ilā …','Expression'],[2,'I know','أَعْرِفُ','aʿrifu','Verb'],[2,'number; quantity','عَدَد','ʿadad','Noun','أَعْدَاد'],[2,'numbers','أَعْدَاد','aʿdād','Noun (broken plural)'],[2,'many; much','كَثِير','kathīr','Adjective'],
  [3,'I sell','أَبِيعُ','abīʿu','Verb'],[3,'fruit','فَوَاكِه','fawākih','Noun'],[3,'vegetables','خُضَار','khuḍār','Noun'],[3,'how much?','كَمْ؟','kam?','Question'],[3,'it costs','يُكَلِّفُ','yukallifu','Verb'],[3,'lira','لِيرَة','līra','Noun','لِيرَات'],[3,'I accept','أَقْبَلُ','aqbalu','Verb'],[3,'U.S. dollar','دُولَار أَمْرِيكِيّ','dūlār amrīkiyy','Noun phrase','دُولَارَات أَمْرِيكِيَّة'],[3,'U.S. dollars','دُولَارَات أَمْرِيكِيَّة','dūlārāt amrīkiyya','Noun phrase'],[3,'pound (currency)','جُنَيْه','junayh','Noun','جُنَيْهَات'],[3,'pounds (currency)','جُنَيْهَات','junayhāt','Noun (plural)'],[3,'riyal','رِيَال','riyāl','Noun','رِيَالَات'],[3,'riyals','رِيَالَات','riyālāt','Noun (plural)'],[3,'I exchange; replace','أَسْتَبْدِلُ','astabdilu','Verb'],[3,'near; nearby','قَرِيب','qarīb','Adjective'],[3,'ATM','صَرَّاف آلِيّ','ṣarrāf āliyy','Noun phrase'],[3,'check; cheque','شِيك','shīk','Noun','شِيكَات'],[3,'checks; cheques','شِيكَات','shīkāt','Noun (plural)'],[3,'cash','نَقْد','naqd','Noun'],[3,'only','فَقَط','faqaṭ','Adverb'],
  [4,'cost','تَكْلِفَة','taklifa','Noun','تَكَالِيف'],[4,'map','خَرِيطَة','kharīṭa','Noun','خَرَائِط'],[4,'expensive','غَالٍ','ghālin','Adjective'],[4,'too much; more than necessary','أَكْثَر مِنَ اللَّازِم','akthar mina al-lāzim','Expression'],[4,'cheap','رَخِيص','rakhīṣ','Adjective'],[4,'quality','جَوْدَة','jawda','Noun'],[4,'high; elevated','عَالٍ','ʿālin','Adjective'],[4,'amount','مَبْلَغ','mablagh','Noun','مَبَالِغ'],[4,'high; elevated','مُرْتَفِع','murtafiʿ','Adjective'],[4,'I lower; reduce','أُخَفِّضُ','ukhaffiḍu','Verb'],[4,'price','سِعْر','siʿr','Noun','أَسْعَار'],[4,'negotiable','قَابِل لِلتَّفَاوُض','qābil li-t-tafāwuḍ','Adjective phrase'],[4,'negotiation','تَفَاوُض','tafāwuḍ','Verbal noun'],[4,'non-negotiable','غَيْر قَابِل لِلتَّفَاوُض','ghayr qābil li-t-tafāwuḍ','Adjective phrase'],[4,'discount','خَصْم','khaṣm','Noun'],[4,'percentage; proportion','نِسْبَة','nisba','Noun','نِسَب'],[4,'percent','فِي الْمِئَة','fī al-miʾa','Expression'],[4,'with me','مَعِي','maʿī','Expression'],[4,'money','مَال','māl','Noun','أَمْوَال'],[4,'enough; sufficient','كَافٍ','kāfin','Adjective'],
  [5,'how much is …?','بِكَمْ؟','bi-kam?','Question'],[5,'bananas','مَوْز','mawz','Noun'],[5,'one item; one piece (e.g. a banana)','حَبَّة','ḥabba','Noun','حَبَّات'],[5,'each; per item','لِلْحَبَّة','li-l-ḥabba','Expression'],[5,'I take','آخُذُ','ākhudhu','Verb'],[5,'quantity','كَمِّيَّة','kammiyya','Noun'],[5,'several','عِدَّة','ʿidda','Quantifier'],[5,'it suffices; is enough','يَكْفِي','yakfī','Verb'],[5,'let me','دَعْنِي','daʿnī','Expression'],[5,'I bring; get','أُحْضِرُ','uḥḍiru','Verb'],[5,'wallet','مِحْفَظَة','miḥfaẓa','Noun'],
  [6,'it’s okay; no problem','لَا بَأْس','lā baʾs','Expression'],[6,'free; at no charge','مَجَّانِيّ','majjāniyy','Adjective'],[6,'I want','أُرِيدُ','urīdu','Verb'],[6,'I pay','أَدْفَعُ','adfaʿu','Verb'],[6,'payment; installment','دَفْعَة','dafʿa','Noun','دَفَعَات'],[6,'small','صَغِير','ṣaghīr','Adjective'],[6,'anyway; in any case','عَلَى أَيّ حَال','ʿalā ayy ḥāl','Expression'],[6,'I keep','أَحْتَفِظُ بِـ','aḥtafiẓu bi-','Verb'],[6,'change; remainder','الْبَاقِي','al-bāqī','Noun'],[6,'carrying','حَمْل','ḥaml','Verbal noun'],[6,'coin','عُمْلَة مَعْدِنِيَّة','ʿumla maʿdiniyya','Noun phrase','عُمْلَات مَعْدِنِيَّة'],[6,'coins','عُمْلَات مَعْدِنِيَّة','ʿumlāt maʿdiniyya','Noun phrase']
 ];
 const numberGrammar=[{id:'mosa-m17-s1-g1',type:'note',title:'Counting Forms and Numbers in Sentences',body:`<p>These cards show standalone counting forms. When a number modifies a noun, its gender and grammatical case can change its form.</p><div class="grammar-example">[ثَلَاثَة كُتُب] — three books<br>[ثَلَاث لِيرَات] — three lira<br>[مِئَة لِيرَة] — one hundred lira</div><p>For 3–10, use the opposite gender form from the singular counted noun. Hundreds and thousands take a singular genitive counted noun; 11–99 normally take a singular accusative counted noun.</p><div class="grammar-alert">The ن of a dual drops in an iḍāfa: [مِئَتَان] → [مِئَتَا أَلْف] (200,000).<br>مِئَة and مِائَة are two spellings of the same word; the extra ا is not pronounced.<br>“Million” is [مِلْيُون]; its plural is [مَلَايِين].</div>`}];
 const chapter={chapterLabel:'Currency & Counting',subtitle:'Currency & Counting',icon:'🔢',placeholder:false,subchapters:{1:{chapterLabel:'Numbers',subtitle:'Numbers from zero to ten million',vocab:numbers,grammar:numberGrammar,sentences:[],learn:['Read the requested numbers in words and numerals','Build hundreds, thousands, and millions']}}};
 const specs=[[2,'Counting in Arabic',0,3],[3,'Currencies & Payment Methods',3,13],[4,'Prices & Bargaining',13,24],[5,'Buying & Quantities',24,31],[6,'Paying & Change',31,36]];
 for(const [subchapter,title,start,end] of specs){
  const vocab=words.filter(w=>w[0]===subchapter).map((w,i)=>({id:`mosa-m17-s${subchapter}-v${i+1}`,collectionId:'mosa-modules',collection:'MoSA Modules',chapter:17,subchapter,idInChapter:i+1,en:w[1],ar:w[2],tr:w[3],pos:w[4],f:'—',mp:w[5]||'—',fp:'—'}));
  const sentences=rows.slice(start,end).map(([en,ar,tr],i)=>({id:`mosa-m17-s${subchapter}-s${i+1}`,chapter:17,subchapter,idInChapter:i+1,en,ar,tr}));
  chapter.subchapters[subchapter]={chapterLabel:title,subtitle:title,vocab,grammar:[],sentences,learn:[title]};
 }
 chapter.vocab=Object.values(chapter.subchapters).flatMap(s=>s.vocab);
 chapter.sentences=Object.values(chapter.subchapters).flatMap(s=>s.sentences);
 chapter.grammar=numberGrammar;
 chapter.learn=['Count and read numbers','Discuss prices, currencies, quantities, payments, and change'];
 modules.chapters[17]=chapter;
 // Preserve ordinal vocabulary and move only its existing grammar card into a separate lesson.
 const time=modules.chapters[34];const ordinal=time.subchapters[1];
 time.subchapters[0]={chapterLabel:'Ordinal Numbers: Grammar',subtitle:'Forming ordinal numbers',grammarOnly:true,vocab:[],sentences:[],grammar:ordinal.grammar,learn:['Form and use ordinal numbers']};
 ordinal.grammar=[];
 time.subchapterNumbers=[0,...Object.keys(time.subchapters).map(Number).filter(n=>n!==0)];
 delete modules.chapters[32];
 modules.chapterNumbers=modules.chapterNumbers.filter(n=>n!==32);
 modules.totalChapters=modules.chapterNumbers.length;
 // Aggregate views reuse the original cards and IDs; never add them to the chapter totals again.
 const key=ar=>String(ar||'').normalize('NFC').replace(/[\u064B-\u065F\u0670\u0640]/g,'').replace(/\s+/g,' ').trim();
 for(const ch of Object.values(modules.chapters)){
  if(!ch.subchapters)continue; // Keep unpopulated chapters reserved for their future lessons.
  const order=(ch.subchapterNumbers||Object.keys(ch.subchapters).map(Number)).filter(n=>!ch.subchapters[n].aggregate);
  const lessons=order.map(n=>ch.subchapters[n]);
  const regular=lessons.filter(s=>!/^additional vocabulary$/i.test(s.chapterLabel||''));
  const seen=new Set();const vocab=[];
  for(const w of regular.flatMap(s=>s.vocab||[])){const k=key(w.ar);if(!seen.has(k)){seen.add(k);vocab.push(w);}}
  const sentenceIds=new Set();const sentences=lessons.flatMap(s=>s.sentences||[]).filter(s=>{if(sentenceIds.has(s.id))return false;sentenceIds.add(s.id);return true;});
  ch.subchapters[90]={chapterLabel:'All Vocabulary',subtitle:'Vocabulary from the regular subchapters',aggregate:'vocab',vocab,grammar:[],sentences:[],learn:['Review the chapter’s vocabulary, excluding Additional Vocabulary']};
  ch.subchapters[91]={chapterLabel:'All Sentences',subtitle:'All chapter sentences in lesson order',aggregate:'sentences',vocab:[],grammar:[],sentences,learn:['Practice all chapter sentences in one place']};
  ch.subchapterNumbers=[...order,90,91];
 }
};
