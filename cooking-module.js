// Cooking module and lesson ordering approved October 21, 2026.
window.MOSA_APPLY_COOKING = function (modules) {
  const chapterNumber = 36;
  const red = text => `<span class="conjugation-red">${text}</span>`;
  const cell = (pronoun, verb, english, colspan = false) => `<td${colspan ? ' colspan="2"' : ''}><div class="conjugation-ar">${red(pronoun)} ${verb}</div><span class="conjugation-en">${english}</span></td>`;
  const regular = (prefix, ending = 'ْ') => `${red(prefix)}طْبُخ${ending === 'ْ' ? ending : red(ending)}`;
  const didNot = (p, prefix, ending, en) => cell(p, `لَمْ ${regular(prefix, ending)}`, `${en} did not cook`);
  const didNotTable = `<table class="conjugation-table" aria-label="Did not cook: all pronouns"><tbody>
    <tr>${didNot('أَنَا', 'أَ', 'ْ', 'I')}${didNot('نَحْنُ', 'نَ', 'ْ', 'We')}</tr>
    <tr>${didNot('أَنْتَ', 'تَ', 'ْ', 'You (male)')}${didNot('أَنْتُمْ', 'تَ', 'ُوا', 'You all (male/mixed)')}</tr>
    <tr>${didNot('أَنْتِ', 'تَ', 'ِي', 'You (female)')}${didNot('أَنْتُنَّ', 'تَ', 'ْنَ', 'You all (female)')}</tr>
    <tr>${didNot('هُوَ', 'يَ', 'ْ', 'He')}${didNot('هُمْ', 'يَ', 'ُوا', 'They (male/mixed)')}</tr>
    <tr>${didNot('هِيَ', 'تَ', 'ْ', 'She')}${didNot('هُنَّ', 'يَ', 'ْنَ', 'They (female)')}</tr>
    <tr>${cell('أَنْتُمَا', `لَمْ ${regular('تَ', 'َا')}`, 'You two did not cook', true)}</tr>
    <tr>${didNot('هُمَا', 'يَ', 'َا', 'They two (male/mixed)')}${didNot('هُمَا', 'تَ', 'َا', 'They two (female)')}</tr>
  </tbody></table>`;
  const commandCell = (p, ending, en, negative, colspan = false) => cell(p, negative ? `لَا ${regular('تَ', ending)}` : `${red('اُ')}طْبُخ${ending === 'ْ' ? ending : red(ending)}`, en, colspan);
  const commandTable = negative => `<table class="conjugation-table" aria-label="${negative ? 'Do not cook' : 'Cook'}: second-person commands"><tbody>
    <tr>${commandCell('أَنْتَ', 'ْ', `${negative ? 'Don’t cook' : 'Cook'}! (to one man)`, negative)}${commandCell('أَنْتُمْ', 'ُوا', `${negative ? 'Don’t cook' : 'Cook'}! (to men / a mixed group)`, negative)}</tr>
    <tr>${commandCell('أَنْتِ', 'ِي', `${negative ? 'Don’t cook' : 'Cook'}! (to one woman)`, negative)}${commandCell('أَنْتُنَّ', 'ْنَ', `${negative ? 'Don’t cook' : 'Cook'}! (to women)`, negative)}</tr>
    <tr>${commandCell('أَنْتُمَا', 'َا', `${negative ? 'Don’t cook' : 'Cook'}! (to two people)`, negative, true)}</tr>
  </tbody></table>`;
  const grammar = [
    {id:'mosa-m36-g1',type:'intro',title:'The Jussive Mood',body:`<p>The <b>jussive mood [الْمَجْزُوم]</b> is a form of the present-tense verb used after certain particles. It helps us express “did not,” “don’t,” and “let’s.”</p><p>For most regular verbs, the final [ـُ] changes to [ـْ]: [تَطْبُخُ] → [تَطْبُخْ]. Other endings change differently: a final weak letter or the ن of certain endings may disappear.</p><div class="grammar-example">[تَطْبُخُ] — You cook.<br>[لَمْ تَطْبُخْ] — You did not cook.<br>[لَا تَطْبُخْ] — Don’t cook!<br>[اُطْبُخْ] — Cook!</div><div class="grammar-alert">The positive imperative [فِعْل الْأَمْر] is a separate verb form. Its formation is closely connected to the jussive.</div>`},
    {id:'mosa-m36-g2',type:'note',title:'“Did Not” — لَمْ + Jussive',body:`<p>Use <b>لَمْ + a present-tense verb in the jussive</b> to express “did not.” The verb has a present-tense form, but the meaning is past.</p><div class="grammar-example">[لَمْ أَذْهَبْ إِلَى الْمَتْجَر.] — I did not go to the store.<br>[لَمْ أَشْتَرِ الْمُكَوِّنَات.] — I did not buy the ingredients.</div><p class="conjugation-intro">“To cook”: [طَبَخَ — يَطْبُخُ]. Pronouns and changing prefixes/endings are red; the root letters ط ب خ remain black.</p>${didNotTable}<div class="grammar-alert">The final ـُ becomes ـْ. The ن disappears from ـِينَ، ـَانِ، ـُونَ; the feminine plural ـنَ stays.<br>For a weak verb, the final letter can disappear: [أَشْتَرِي] → [لَمْ أَشْتَرِ].</div><p>You can also negate the past with <b>مَا + past tense</b>: [مَا ذَهَبْتُ] — I did not go.</p>`},
    {id:'mosa-m36-g3',type:'note',title:'The Imperative — “Cook!”',body:`<p>The <b>imperative [فِعْل الْأَمْر]</b> tells someone to do something. It directly addresses “you,” so the table includes only second-person forms.</p><p>For many regular Form I verbs, start with the second-person jussive, remove تـ, and add an initial helping vowel if needed:</p><div class="grammar-pattern">[تَطْبُخُ] → [تَطْبُخْ] → [اُطْبُخْ]</div>${commandTable(false)}<div class="grammar-example">[اِغْسِلْ] — Wash!<br>[اِقْطَعْ] — Cut!<br>[أَضِفْ] — Add!<br>[ضَعْ] — Put!</div><div class="grammar-alert">The helping vowel varies. Other verb forms and weak verbs have their own patterns, so removing تـ alone does not always produce the complete command.</div><p><b>“Let’s…”:</b> use لِـ + the jussive: [لِنَطْبُخْ] — Let’s cook; [لِنَذْهَبْ] — Let’s go.</p>`},
    {id:'mosa-m36-g4',type:'note',title:'Negative Commands — “Don’t Cook!”',body:`<p>For a <b>negative command</b>, use <b>لَا + a second-person verb in the jussive</b>.</p><div class="grammar-example">[لَا تُضِفْ كَثِيرًا!] — Don’t add too much!</div>${commandTable(true)}<div class="grammar-alert">Compare the endings:<br>[لَا تَطْبُخُ] — You do not cook. (Statement)<br>[لَا تَطْبُخْ] — Do not cook! (Command)</div><p>For negative commands, retain the present-tense prefix: [اُطْبُخْ] → [لَا تَطْبُخْ]. Do not put لَا directly before the positive imperative.</p>`}
  ];
  // Each sentence keeps the approved English wording and sequence.
  const sentences = [
    ['Do you like cooking?','هَلْ تُحِبُّ الطَّبْخ؟','hal tuḥibbu aṭ-ṭabkh?'],
    ['Let’s cook some lentil soup.','لِنَطْبُخْ بَعْض شُورْبَة الْعَدَس.','li-naṭbukh baʿḍ shūrbat al-ʿadas.'],
    ['Did you go to the store?','هَلْ ذَهَبْتَ إِلَى الْمَتْجَر؟','hal dhahabta ilā al-matjar?'],
    ['No, I did not go to the store.','لَا، لَمْ أَذْهَبْ إِلَى الْمَتْجَر.','lā, lam adhhab ilā al-matjar.'],
    ['Did you buy ingredients?','هَلْ اِشْتَرَيْتَ الْمُكَوِّنَات؟','hal ishtarayta al-mukawwināt?'],
    ['No, I did not buy ingredients.','لَا، لَمْ أَشْتَرِ الْمُكَوِّنَات.','lā, lam ashtari al-mukawwināt.'],
    ['No problem, I have what we need.','لَا مُشْكِلَة، عِنْدِي مَا نَحْتَاجُ إِلَيْهِ.','lā mushkila, ʿindī mā naḥtāju ilayhi.'],
    ['Let’s go to the kitchen.','لِنَذْهَبْ إِلَى الْمَطْبَخ.','li-nadhhab ilā al-maṭbakh.'],
    ['First, take out the ingredients.','أَوَّلًا، أَخْرِجْ الْمُكَوِّنَات.','awwalan, akhrij al-mukawwināt.'],
    ['We need olive oil, garlic, and butter.','نَحْتَاجُ إِلَى زَيْت الزَّيْتُون وَالثُّوم وَالزُّبْدَة.','naḥtāju ilā zayt az-zaytūn wa-th-thūm wa-z-zubda.'],
    ['Add a half a cup of olive oil to a pot.','أَضِفْ نِصْف كُوب مِنْ زَيْت الزَّيْتُون إِلَى قِدْر.','aḍif niṣf kūb min zayt az-zaytūn ilā qidr.'],
    ['We do not need any pans for this recipe.','لَا نَحْتَاجُ إِلَى أَيّ مَقَالٍ لِهَذِهِ الْوَصْفَة.','lā naḥtāju ilā ayy maqālin li-hādhihi al-waṣfa.'],
    ['Bring the stove to low heat.','اِضْبِطْ الْمَوْقِد عَلَى حَرَارَة مُنْخَفِضَة.','iḍbiṭ al-mawqid ʿalā ḥarāra munkhafiḍa.'],
    ['Melt the butter.','أَذِبْ الزُّبْدَة.','adhib az-zubda.'],
    ['Next, prepare the red lentils.','بَعْدَ ذَلِكَ، حَضِّرْ الْعَدَس الْأَحْمَر.','baʿda dhālika, ḥaḍḍir al-ʿadas al-aḥmar.'],
    ['Start by washing them.','اِبْدَأْ بِغَسْلِهِ.','ibdaʾ bi-ghaslihi.'],
    ['You have to rinse them to remove any dirt.','عَلَيْكَ أَنْ تَشْطُفَهُ لِإِزَالَة أَيّ أَوْسَاخ.','ʿalayka an tashṭufahu li-izālat ayy awsākh.'],
    ['Then, add the lentils to the pot.','ثُمَّ أَضِفْ الْعَدَس إِلَى الْقِدْر.','thumma aḍif al-ʿadas ilā al-qidr.'],
    ['Stir gradually until the lentils become yellow.','حَرِّكْهُ تَدْرِيجِيًّا حَتَّى يُصْبِحَ لَوْنُهُ أَصْفَر.','ḥarrikhu tadrījiyyan ḥattā yuṣbiḥa lawnuhu aṣfar.'],
    ['After that, peel an onion.','بَعْدَ ذَلِكَ، قَشِّرْ بَصَلَة.','baʿda dhālika, qashshir baṣala.'],
    ['We have one in the refrigerator.','عِنْدَنَا وَاحِدَة فِي الثَّلَّاجَة.','ʿindanā wāḥida fī ath-thallāja.'],
    ['Cut it in half.','اِقْطَعْهَا إِلَى نِصْفَيْن.','iqṭaʿhā ilā niṣfayn.'],
    ['Chop it in small pieces.','قَطِّعْهَا إِلَى قِطَع صَغِيرَة.','qaṭṭiʿhā ilā qiṭaʿ ṣaghīra.'],
    ['Pour 6 cups of water in a pot.','صُبَّ سِتَّة أَكْوَاب مِنَ الْمَاء فِي قِدْر.','ṣubba sitta akwāb mina al-māʾ fī qidr.'],
    ['Boil the water.','أَغْلِ الْمَاء.','aghli al-māʾ.'],
    ['Mix it together.','اُخْلُطْ كُلّ شَيْء مَعًا.','ukhluṭ kull shayʾ maʿan.'],
    ['Add a couple tablespoons of lemon juice.','أَضِفْ مِلْعَقَتَيْن كَبِيرَتَيْن مِنْ عَصِير اللَّيْمُون.','aḍif milʿaqatayn kabīratayn min ʿaṣīr al-laymūn.'],
    ['Do not add too much, or the soup will be sour.','لَا تُضِفْ كَثِيرًا مِنْهُ، وَإِلَّا سَتُصْبِحُ الشُّورْبَة حَامِضَة.','lā tuḍif kathīran minhu, wa-illā sa-tuṣbiḥu ash-shūrba ḥāmiḍa.'],
    ['The recipe does not have many spices.','لَا تَحْتَوِي الْوَصْفَة عَلَى كَثِير مِنَ الْبَهَارَات.','lā taḥtawī al-waṣfa ʿalā kathīr mina al-bahārāt.'],
    ['Only a pinch of salt and pepper.','فَقَطْ رَشَّة مِنَ الْمِلْح وَالْفُلْفُل.','faqaṭ rashsha mina al-milḥ wa-l-fulful.'],
    ['You can include a teaspoon of cayenne pepper if you want it to be spicy.','يُمْكِنُكَ أَنْ تُضِيفَ مِلْعَقَة صَغِيرَة مِنْ فُلْفُل كَايِين إِذَا أَرَدْتَ أَنْ تَكُونَ الشُّورْبَة حَارَّة.','yumkinuka an tuḍīfa milʿaqa ṣaghīra min fulful kāyīn idhā aradta an takūna ash-shūrba ḥārra.'],
    ['How does it smell?','كَيْفَ رَائِحَتُهَا؟','kayfa rāʾiḥatuhā?'],
    ['It smells good.','رَائِحَتُهَا طَيِّبَة.','rāʾiḥatuhā ṭayyiba.'],
    ['Is it too hot?','هَلْ هِيَ سَاخِنَة أَكْثَر مِنَ اللَّازِم؟','hal hiya sākhina akthar mina al-lāzim?'],
    ['Taste it to see if it tastes good.','تَذَوَّقْهَا لِتَرَى إِنْ كَانَ طَعْمُهَا طَيِّبًا.','tadhawwaqhā li-tarā in kāna ṭaʿmuhā ṭayyiban.'],
    ['It tastes great.','طَعْمُهَا مُمْتَاز.','ṭaʿmuhā mumtāz.'],
    ['You are quite the chef.','أَنْتَ طَبَّاخ مَاهِر حَقًّا!','anta ṭabbākh māhir ḥaqqan!'],
    ['Put some bowls on the table for our guests.','ضَعْ بَعْض الْأَوْعِيَة عَلَى الطَّاوِلَة لِضُيُوفِنَا.','ḍaʿ baʿḍ al-awʿiya ʿalā aṭ-ṭāwila li-ḍuyūfinā.']
  ];
  // Vocabulary follows the sentence sequence; repeated roots/forms are not retaught within this chapter.
  const vocab = [
    [1,'I cook','أَطْبُخُ','aṭbukhu','Verb'],[1,'I cooked','طَبَخْتُ','ṭabakhtu','Verb (past)'],[1,'cooking','طَبْخ','ṭabkh','Verbal noun'],
    [1,'lentil soup','شُورْبَة الْعَدَس','shūrbat al-ʿadas','Noun phrase'],[1,'lentils','عَدَس','ʿadas','Noun'],[1,'store','مَتْجَر','matjar','Noun','مَتَاجِر'],[1,'ingredient','مُكَوِّن','mukawwin','Noun','مُكَوِّنَات'],[1,'ingredients','مُكَوِّنَات','mukawwināt','Noun (plural)'],[1,'no problem','لَا مُشْكِلَة','lā mushkila','Expression'],[1,'I need','أَحْتَاجُ إِلَى','aḥtāju ilā','Verb'],[1,'kitchen','مَطْبَخ','maṭbakh','Noun','مَطَابِخ'],[1,'kitchens','مَطَابِخ','maṭābikh','Noun (broken plural)'],
    [2,'first','أَوَّلًا','awwalan','Adverb'],[2,'I take out','أُخْرِجُ','ukhriju','Verb'],[2,'olive oil','زَيْت الزَّيْتُون','zayt az-zaytūn','Noun phrase'],[2,'garlic','ثُوم','thūm','Noun'],[2,'butter','زُبْدَة','zubda','Noun'],[2,'I add','أُضِيفُ','uḍīfu','Verb'],[2,'half','نِصْف','niṣf','Noun','أَنْصَاف'],[2,'cup; glass','كُوب','kūb','Noun','أَكْوَاب'],[2,'cups; glasses','أَكْوَاب','akwāb','Noun (broken plural)'],[2,'pot','قِدْر','qidr','Noun','قُدُور'],[2,'pots','قُدُور','qudūr','Noun (broken plural)'],[2,'frying pan','مِقْلَاة','miqlāh','Noun','مَقَالٍ'],[2,'frying pans','مَقَالٍ','maqālin','Noun (broken plural)'],[2,'recipe','وَصْفَة','waṣfa','Noun','وَصَفَات'],[2,'I adjust; set','أَضْبِطُ','aḍbiṭu','Verb'],[2,'stove','مَوْقِد','mawqid','Noun','مَوَاقِد'],[2,'heat; temperature','حَرَارَة','ḥarāra','Noun'],[2,'low','مُنْخَفِض','munkhafiḍ','Adjective'],[2,'I melt something','أُذِيبُ','udhību','Verb'],[2,'I prepare','أُحَضِّرُ','uḥaḍḍiru','Verb'],[2,'red','أَحْمَر','aḥmar','Adjective'],[2,'I start','أَبْدَأُ','abdaʾu','Verb'],[2,'I wash','أَغْسِلُ','aghsilu','Verb'],[2,'washing','غَسْل','ghasl','Verbal noun'],[2,'you have to','عَلَيْكَ أَنْ','ʿalayka an','Expression'],[2,'I rinse','أَشْطُفُ','ashṭufu','Verb'],[2,'removal','إِزَالَة','izāla','Verbal noun'],[2,'dirt','أَوْسَاخ','awsākh','Noun'],[2,'then','ثُمَّ','thumma','Conjunction'],
    [3,'I stir','أُحَرِّكُ','uḥarriku','Verb'],[3,'gradually','تَدْرِيجِيًّا','tadrījiyyan','Adverb'],[3,'until','حَتَّى','ḥattā','Conjunction'],[3,'I become','أُصْبِحُ','uṣbiḥu','Verb'],[3,'color','لَوْن','lawn','Noun','أَلْوَان'],[3,'yellow','أَصْفَر','aṣfar','Adjective'],[3,'after that','بَعْدَ ذَلِكَ','baʿda dhālika','Expression'],[3,'I peel','أُقَشِّرُ','uqashshiru','Verb'],[3,'onion','بَصَلَة','baṣala','Noun'],[3,'refrigerator','ثَلَّاجَة','thallāja','Noun','ثَلَّاجَات'],[3,'I cut','أَقْطَعُ','aqṭaʿu','Verb'],[3,'I chop; cut into pieces','أُقَطِّعُ','uqaṭṭiʿu','Verb'],[3,'piece','قِطْعَة','qiṭʿa','Noun','قِطَع'],[3,'pieces','قِطَع','qiṭaʿ','Noun (broken plural)'],[3,'small','صَغِير','ṣaghīr','Adjective'],[3,'I pour','أَصُبُّ','aṣubbu','Verb'],[3,'water','مَاء','māʾ','Noun'],[3,'I boil something','أُغْلِي','ughlī','Verb'],[3,'I mix','أَخْلُطُ','akhluṭu','Verb'],[3,'together','مَعًا','maʿan','Adverb'],
    [4,'tablespoon','مِلْعَقَة كَبِيرَة','milʿaqa kabīra','Noun phrase'],[4,'lemon juice','عَصِير اللَّيْمُون','ʿaṣīr al-laymūn','Noun phrase'],[4,'otherwise; or else','وَإِلَّا','wa-illā','Conjunction'],[4,'sour','حَامِض','ḥāmiḍ','Adjective'],[4,'I contain; include','أَحْتَوِي عَلَى','aḥtawī ʿalā','Verb'],[4,'spices','بَهَارَات','bahārāt','Noun'],[4,'pinch; sprinkle','رَشَّة','rashsha','Noun'],[4,'salt','مِلْح','milḥ','Noun'],[4,'pepper','فُلْفُل','fulful','Noun'],[4,'teaspoon','مِلْعَقَة صَغِيرَة','milʿaqa ṣaghīra','Noun phrase'],[4,'cayenne pepper','فُلْفُل كَايِين','fulful kāyīn','Noun phrase'],[4,'spicy','حَارّ','ḥārr','Adjective'],
    [5,'smell','رَائِحَة','rāʾiḥa','Noun','رَوَائِح'],[5,'good; pleasant; tasty','طَيِّب','ṭayyib','Adjective'],[5,'hot (temperature)','سَاخِن','sākhin','Adjective'],[5,'too much; more than necessary','أَكْثَر مِنَ اللَّازِم','akthar mina al-lāzim','Expression'],[5,'I taste; sample','أَتَذَوَّقُ','atadhawwaqu','Verb'],[5,'taste; flavor','طَعْم','ṭaʿm','Noun','طُعُوم'],[5,'excellent','مُمْتَاز','mumtāz','Adjective'],[5,'cook; chef','طَبَّاخ','ṭabbākh','Noun'],[5,'skilled','مَاهِر','māhir','Adjective'],[5,'really; truly','حَقًّا','ḥaqqan','Adverb'],[5,'I put','أَضَعُ','aḍaʿu','Verb'],[5,'bowl; container','وِعَاء','wiʿāʾ','Noun','أَوْعِيَة'],[5,'bowls; containers','أَوْعِيَة','awʿiya','Noun (broken plural)'],[5,'table','طَاوِلَة','ṭāwila','Noun','طَاوِلَات'],[5,'guest','ضَيْف','ḍayf','Noun','ضُيُوف'],[5,'guests','ضُيُوف','ḍuyūf','Noun (broken plural)']
  ];
  const specs = [[1,'Getting Ready',0,8],[2,'Starting the Recipe',8,18],[3,'Preparing and Mixing',18,26],[4,'Seasoning',26,31],[5,'Tasting and Serving',31,38]];
  const chapter = {chapterLabel:'Cooking',subtitle:'Cooking',placeholder:false,subchapters:{0:{chapterLabel:'Jussive & Commands',subtitle:'Did not, positive commands, and negative commands',vocab:[],sentences:[],grammar,learn:['Use لَمْ with the jussive','Form positive and negative commands']}}};
  for(const [subchapter,title,start,end] of specs){
    const words=vocab.filter(v=>v[0]===subchapter).map((v,i)=>({id:`mosa-m36-s${subchapter}-v${i+1}`,collectionId:'mosa-modules',collection:'MoSA Modules',chapter:chapterNumber,subchapter,idInChapter:i+1,en:v[1],ar:v[2],tr:v[3],pos:v[4],f:'—',mp:v[5]||'—',fp:'—'}));
    const cards=sentences.slice(start,end).map((s,i)=>({id:`mosa-m36-s${subchapter}-s${i+1}`,chapter:chapterNumber,subchapter,idInChapter:i+1,en:s[0],ar:s[1],tr:s[2]}));
    chapter.subchapters[subchapter]={chapterLabel:title,subtitle:title,vocab:words,grammar:[],sentences:cards,learn:[title]};
  }
  chapter.vocab=Object.values(chapter.subchapters).flatMap(s=>s.vocab);
  chapter.grammar=grammar;
  chapter.sentences=Object.values(chapter.subchapters).flatMap(s=>s.sentences);
  chapter.learn=['Cook lentil soup using kitchen and ingredient vocabulary','Use the jussive, لَمْ, and positive and negative commands'];
  modules.chapters[chapterNumber]=chapter;
  modules.chapters[8].chapterLabel=modules.chapters[8].subtitle='Describing People';
  modules.chapters[11].chapterLabel=modules.chapters[11].subtitle='Childhood';
  modules.chapters[37]={chapterLabel:'School',subtitle:'School',placeholder:true,vocab:[],grammar:[],sentences:[],learn:[]};
  // Move existing IDs rather than renumbering lessons or changing saved card IDs.
  const order=modules.chapterNumbers.filter(n=>![7,8,10,11,24,28,36,37].includes(n));
  order.splice(order.indexOf(6)+1,0,8,24,28,10,11,37);
  order.splice(order.indexOf(16)+1,0,7);
  order.splice(order.indexOf(15),0,36);
  modules.chapterNumbers=order;
  modules.totalChapters=order.length;
};
