const dliWords=(chapter,rows)=>rows.map((x,i)=>({
  id:`dli-c${chapter}-${i+1}`,
  collectionId:'dli-basic',collection:'DLI MSA Course (Basic)',chapter,idInChapter:i+1,
  en:x[0],ar:x[1],tr:x[2],pos:x[3],f:x[4]||'—',mp:x[5]||'—',fp:x[6]||'—'
}));
const dliSentences=(chapter,rows)=>rows.map((x,i)=>({
  id:`dli-c${chapter}-s${i+1}`,chapter,idInChapter:i+1,en:x[0],ar:x[1],tr:x[2]
}));

const DLI_V1=dliWords(1,[
['Hello; peace be upon you','السَّلَامُ عَلَيْكُمْ','al-salāmu ʿalaykum','Greeting'],
['And peace be upon you','وَعَلَيْكُمُ السَّلَامُ','wa-ʿalaykumu al-salām','Greeting response'],
['door','بَاب','bāb','Noun','—','أَبْوَاب'],
['notebook','دَفْتَر','daftar','Noun','—','دَفَاتِر'],
['cup','فِنْجَان','finjān','Noun','—','فَنَاجِين'],
['chair','كُرْسِيّ','kursī','Noun','—','كَرَاسِيّ'],
['this (masculine)','هَذَا','hādhā','Demonstrative','هَذِهِ','هَؤُلَاءِ','هَؤُلَاءِ'],
['yes-or-no question particle','هَلْ','hal','Interrogative particle'],
['book','كِتَاب','kitāb','Noun','—','كُتُب'],
['no; not','لَا','lā','Negative particle'],
['what?','مَا','mā','Interrogative'],
['handkerchief','مِنْدِيل','mindīl','Noun','—','مَنَادِيل'],
['yes','نَعَمْ','naʿam','Affirmative response'],
['student; pupil','تِلْمِيذ','tilmīdh','Noun','تِلْمِيذَة','تَلَامِيذ','تِلْمِيذَات'],
['teacher; professor','أُسْتَاذ','ustādh','Noun','أُسْتَاذَة','أَسَاتِذَة','أُسْتَاذَات'],
['and','وَ','wa','Conjunction'],
['flag','عَلَم','ʿalam','Noun','—','أَعْلَام'],
['or (between alternatives)','أَمْ','am','Conjunction']
]);
const DLI_S1=dliSentences(1,[
['Hello. Peace be upon you.','السَّلَامُ عَلَيْكُمْ.','al-salāmu ʿalaykum.'],
['And peace be upon you.','وَعَلَيْكُمُ السَّلَامُ.','wa-ʿalaykumu al-salām.'],
['What is this?','مَا هَذَا؟','mā hādhā?'],
['This is a book.','هَذَا كِتَاب.','hādhā kitāb.'],
['Is this a notebook?','هَلْ هَذَا دَفْتَر؟','hal hādhā daftar?'],
['Yes, this is a notebook.','نَعَمْ، هَذَا دَفْتَر.','naʿam, hādhā daftar.'],
['Is this a door or a chair?','هَلْ هَذَا بَاب أَمْ كُرْسِيّ؟','hal hādhā bāb am kursī?'],
['This is a chair.','هَذَا كُرْسِيّ.','hādhā kursī.'],
['This is a cup, and this is a handkerchief.','هَذَا فِنْجَان وَهَذَا مِنْدِيل.','hādhā finjān wa-hādhā mindīl.'],
['Is this a flag?','هَلْ هَذَا عَلَم؟','hal hādhā ʿalam?'],
['No, this is a book.','لَا، هَذَا كِتَاب.','lā, hādhā kitāb.'],
['This is a student, and this is a teacher.','هَذَا تِلْمِيذ وَهَذَا أُسْتَاذ.','hādhā tilmīdh wa-hādhā ustādh.']
]);

const DLI_V2=dliWords(2,[
['Yemen','اليَمَن','al-yaman','Proper noun'],['Iraq','العِرَاق','al-ʿirāq','Proper noun'],['America','أَمْرِيكَا','amrīkā','Proper noun'],
['I','أَنَا','anā','Pronoun'],['you (masculine singular)','أَنْتَ','anta','Pronoun','أَنْتِ','أَنْتُمْ','أَنْتُنَّ'],
['where?','أَيْنَ','ayna','Interrogative'],['in','فِي','fī','Preposition'],['here','هُنَا','hunā','Adverb'],['there','هُنَاكَ','hunāka','Adverb'],
['he','هُوَ','huwa','Pronoun'],['she','هِيَ','hiya','Pronoun'],['Libya','لِيبِيَا','lībiyā','Proper noun'],
['who?','مَنْ','man','Interrogative'],['from','مِنْ','min','Preposition'],['where from?','مِنْ أَيْنَ','min ayna','Interrogative phrase']
]);
const DLI_S2=dliSentences(2,[
['Who are you? I am Farid.','مَنْ أَنْتَ؟ أَنَا فَرِيد.','man anta? anā farīd.'],['I am Najeeb.','أَنَا نَجِيب.','anā najīb.'],
['Where are you from? I am from Yemen.','مِنْ أَيْنَ أَنْتَ؟ أَنَا مِنَ اليَمَن.','min ayna anta? anā mina al-yaman.'],
['Saleem is from Iraq.','سَلِيم مِنَ العِرَاق.','salīm mina al-ʿirāq.'],['Farid is in America.','فَرِيد فِي أَمْرِيكَا.','farīd fī amrīkā.'],
['Where is Najeeb? He is here.','أَيْنَ نَجِيب؟ هُوَ هُنَا.','ayna najīb? huwa hunā.'],['Where is Saleem? He is there.','أَيْنَ سَلِيم؟ هُوَ هُنَاكَ.','ayna salīm? huwa hunāka.'],
['Is she in Libya? Yes, she is in Libya.','هَلْ هِيَ فِي لِيبِيَا؟ نَعَمْ، هِيَ فِي لِيبِيَا.','hal hiya fī lībiyā? naʿam, hiya fī lībiyā.'],
['Are you from America? No, I am from Yemen.','هَلْ أَنْتَ مِنْ أَمْرِيكَا؟ لَا، أَنَا مِنَ اليَمَن.','hal anta min amrīkā? lā, anā mina al-yaman.'],
['Who is here? Najeeb is here.','مَنْ هُنَا؟ نَجِيب هُنَا.','man hunā? najīb hunā.'],['Who is there? Saleem is there.','مَنْ هُنَاكَ؟ سَلِيم هُنَاكَ.','man hunāka? salīm hunāka.'],
['Where is she? She is in Iraq.','أَيْنَ هِيَ؟ هِيَ فِي العِرَاق.','ayna hiya? hiya fī al-ʿirāq.']
]);

const DLI_V3=dliWords(3,[
['Jordan','الأُرْدُنّ','al-urdunn','Proper noun'],['far; distant','بَعِيد','baʿīd','Adjective','بَعِيدَة','بَعِيدُون','بَعِيدَات'],
['new','جَدِيد','jadīd','Adjective','جَدِيدَة','جَدِيدُون','جَدِيدَات'],['Al-Ahram newspaper','جَرِيدَة الأَهْرَام','jarīdat al-ahrām','Proper noun'],
['The Washington Post newspaper','جَرِيدَة الوَاشِنْطُن بُوسْت','jarīdat al-wāshintun būst','Proper noun'],['Al-Hayat newspaper','جَرِيدَة الحَيَاة','jarīdat al-ḥayāh','Proper noun'],
['army','جَيْش','jaysh','Noun','—','جُيُوش'],['soldier','جُنْدِيّ','jundiyy','Noun','جُنْدِيَّة','جُنُود','جُنْدِيَّات'],
['big; senior; high-ranking','كَبِير','kabīr','Adjective','كَبِيرَة','كِبَار','كَبِيرَات'],['well-known','مَعْرُوف','maʿrūf','Adjective','مَعْرُوفَة','مَعْرُوفُون','مَعْرُوفَات'],
['correspondent; reporter','مُرَاسِل','murāsil','Noun','مُرَاسِلَة','مُرَاسِلُون','مُرَاسِلَات'],['field marshal','مُشِير','mushīr','Noun','—','مُشِيرُون'],
['camp; military base','مُعَسْكَر','muʿaskar','Noun','—','مُعَسْكَرَات'],['close to; near','قَرِيب مِنْ','qarīb min','Adjectival phrase','قَرِيبَة مِنْ','قَرِيبُون مِنْ','قَرِيبَات مِنْ'],
['man','رَجُل','rajul','Noun','اِمْرَأَة','رِجَال','نِسَاء'],['president; chief','رَئِيس','raʾīs','Noun','رَئِيسَة','رُؤَسَاء','رَئِيسَات'],
['army chief','رَئِيس الجَيْش','raʾīs al-jaysh','Noun phrase'],['small; young; junior','صَغِير','ṣaghīr','Adjective','صَغِيرَة','صِغَار','صَغِيرَات'],
['that (masculine)','ذَاكَ','dhāka','Demonstrative','تِلْكَ','أُولَئِكَ','أُولَئِكَ'],['that (masculine)','ذَلِكَ','dhalika','Demonstrative','تِلْكَ','أُولَئِكَ','أُولَئِكَ'],
['corporal','عَرِيف','ʿarīf','Noun','—','عُرَفَاء']
]);
const DLI_S3=dliSentences(3,[
['This is Bashir, and he is a corporal in the army.','هَذَا بَشِير، وَهُوَ عَرِيف فِي الجَيْش.','hādhā bashīr, wa-huwa ʿarīf fī al-jaysh.'],
['That man is a soldier in the army.','ذَلِكَ الرَّجُل جُنْدِيّ فِي الجَيْش.','dhalika al-rajul jundiyy fī al-jaysh.'],
['This army is large, and that camp is small.','هَذَا الجَيْش كَبِير، وَذَلِكَ المُعَسْكَر صَغِير.','hādhā al-jaysh kabīr, wa-dhalika al-muʿaskar ṣaghīr.'],
['The camp is near Jordan.','المُعَسْكَر قَرِيب مِنَ الأُرْدُنّ.','al-muʿaskar qarīb mina al-urdunn.'],
['Is Jordan far from Yemen? Yes, it is far.','هَلِ الأُرْدُنّ بَعِيد مِنَ اليَمَن؟ نَعَمْ، هُوَ بَعِيد.','hal al-urdunn baʿīd mina al-yaman? naʿam, huwa baʿīd.'],
['That field marshal is well-known.','ذَلِكَ المُشِير مَعْرُوف.','dhalika al-mushīr maʿrūf.'],['Who is that? That is the army chief.','مَنْ ذَاكَ؟ ذَاكَ رَئِيس الجَيْش.','man dhāka? dhāka raʾīs al-jaysh.'],
['This is a correspondent for Al-Ahram.','هَذَا مُرَاسِل جَرِيدَة الأَهْرَام.','hādhā murāsil jarīdat al-ahrām.'],['That is a correspondent for Al-Hayat.','ذَاكَ مُرَاسِل جَرِيدَة الحَيَاة.','dhāka murāsil jarīdat al-ḥayāh.'],
['The Washington Post is a well-known newspaper.','جَرِيدَة الوَاشِنْطُن بُوسْت مَعْرُوفَة.','jarīdat al-wāshintun būst maʿrūfa.'],
['Is the corporal new? Yes, he is new.','هَلِ العَرِيف جَدِيد؟ نَعَمْ، هُوَ جَدِيد.','hal al-ʿarīf jadīd? naʿam, huwa jadīd.'],['The army chief is in the camp.','رَئِيس الجَيْش فِي المُعَسْكَر.','raʾīs al-jaysh fī al-muʿaskar.']
]);

const DLI_V4=dliWords(4,[
['you (feminine singular)','أَنْتِ','anti','Pronoun','—','أَنْتُمْ','أَنْتُنَّ'],['lieutenant general','فَرِيق','farīq','Noun','—','فِرَقَاء'],
['this (feminine)','هَذِهِ','hādhihi','Demonstrative','—','هَؤُلَاءِ','هَؤُلَاءِ'],['she','هِيَ','hiya','Pronoun'],
['school','مَدْرَسَة','madrasa','Noun','—','مَدَارِس'],['correspondent; reporter (feminine)','مُرَاسِلَة','murāsila','Noun','—','—','مُرَاسِلَات'],
['leader; commander','قَائِد','qāʾid','Noun','قَائِدَة','قَادَة','قَائِدَات'],['pen; pencil','قَلَم','qalam','Noun','—','أَقْلَام'],
['Syria','سُورِيَا','sūriyā','Proper noun'],['Turkey','تُرْكِيَا','turkiyā','Proper noun'],['that (feminine)','تِلْكَ','tilka','Demonstrative','—','أُولَئِكَ','أُولَئِكَ'],
['student; pupil (feminine)','تِلْمِيذَة','tilmīdha','Noun','—','—','تِلْمِيذَات'],['teacher; professor (feminine)','أُسْتَاذَة','ustādha','Noun','—','—','أُسْتَاذَات'],
['sheet of paper','وَرَقَة','waraqa','Noun','—','—','أَوْرَاق']
]);
const DLI_S4=dliSentences(4,[
['Who are you? I am a student.','مَنْ أَنْتِ؟ أَنَا تِلْمِيذَة.','man anti? anā tilmīdha.'],['This is a school.','هَذِهِ مَدْرَسَة.','hādhihi madrasa.'],
['She is a professor at the school.','هِيَ أُسْتَاذَة فِي المَدْرَسَة.','hiya ustādha fī al-madrasa.'],['This is a correspondent from Syria.','هَذِهِ مُرَاسِلَة مِنْ سُورِيَا.','hādhihi murāsila min sūriyā.'],
['That student is from Turkey.','تِلْكَ التِّلْمِيذَة مِنْ تُرْكِيَا.','tilka al-tilmīdha min turkiyā.'],['This is Qahir, and he is a commander.','هَذَا قَاهِر، وَهُوَ قَائِد.','hādhā qāhir, wa-huwa qāʾid.'],
['The lieutenant general is in the school.','الفَرِيق فِي المَدْرَسَة.','al-farīq fī al-madrasa.'],['What is this? This is a sheet of paper.','مَا هَذِهِ؟ هَذِهِ وَرَقَة.','mā hādhihi? hādhihi waraqa.'],
['Is this a pen? Yes, this is a pen.','هَلْ هَذَا قَلَم؟ نَعَمْ، هَذَا قَلَم.','hal hādhā qalam? naʿam, hādhā qalam.'],['Who is this? She is a correspondent.','مَنْ هَذِهِ؟ هِيَ مُرَاسِلَة.','man hādhihi? hiya murāsila.'],
['Is the commander from Syria? No, he is from Turkey.','هَلِ القَائِد مِنْ سُورِيَا؟ لَا، هُوَ مِنْ تُرْكِيَا.','hal al-qāʾid min sūriyā? lā, huwa min turkiyā.']
]);

const DLI_V5=dliWords(5,[
['famous; renowned','مَشْهُور','mashhūr','Adjective','مَشْهُورَة','مَشْهُورُون','مَشْهُورَات'],['teacher (masculine)','مُعَلِّم','muʿallim','Noun','مُعَلِّمَة','مُعَلِّمُون','مُعَلِّمَات'],
['teacher (feminine)','مُعَلِّمَة','muʿallima','Noun','—','—','مُعَلِّمَات'],['car; automobile','سَيَّارَة','sayyāra','Noun','—','—','سَيَّارَات'],
['window','شُبَّاك','shubbāk','Noun','—','شَبَابِيك'],['colonel','عَقِيد','ʿaqīd','Noun','—','عُقَدَاء']
]);
const DLI_S5=dliSentences(5,[
['This is a famous teacher.','هَذَا مُعَلِّم مَشْهُور.','hādhā muʿallim mashhūr.'],['This is a famous female teacher.','هَذِهِ مُعَلِّمَة مَشْهُورَة.','hādhihi muʿallima mashhūra.'],
['This is the teacher’s car.','هَذِهِ سَيَّارَة المُعَلِّمَة.','hādhihi sayyārat al-muʿallima.'],['Is this a window? Yes, this is a window.','هَلْ هَذَا شُبَّاك؟ نَعَمْ، هَذَا شُبَّاك.','hal hādhā shubbāk? naʿam, hādhā shubbāk.'],
['That colonel is well-known.','ذَلِكَ العَقِيد مَعْرُوف.','dhalika al-ʿaqīd maʿrūf.'],['Who is that? That is the colonel.','مَنْ ذَلِكَ؟ ذَلِكَ العَقِيد.','man dhalika? dhalika al-ʿaqīd.']
]);

const DLI_V6=dliWords(6,[
['library','مَكْتَبَة','maktaba','Noun','—','مَكْتَبَات'],['with','مَعَ','maʿa','Preposition'],['lieutenant','مُلَازِم','mulāzim','Noun','—','مُلَازِمُون'],
['lieutenant colonel','مُقَدَّم','muqaddam','Noun','—','مُقَدَّمُون'],['assistant','مُسَاعِد','musāʿid','Noun','مُسَاعِدَة','مُسَاعِدُون','مُسَاعِدَات'],
['military base','قَاعِدَة','qāʿida','Noun','—','—','قَوَاعِد'],['capable; competent','قَدِير','qadīr','Adjective','قَدِيرَة','قَادِرُون','قَادِرَات'],
['blackboard','سَبُّورَة','sabbūra','Noun','—','—','سَبُّورَات']
]);
const DLI_S6=dliSentences(6,[
['This is the base library.','هَذِهِ مَكْتَبَة القَاعِدَة.','hādhihi maktabat al-qāʿida.'],['The blackboard is in the library.','السَّبُّورَة فِي المَكْتَبَة.','al-sabbūra fī al-maktaba.'],
['This is a lieutenant.','هَذَا مُلَازِم.','hādhā mulāzim.'],['That is a lieutenant colonel.','ذَلِكَ مُقَدَّم.','dhalika muqaddam.'],
['Who is this? This is the lieutenant colonel’s assistant.','مَنْ هَذَا؟ هَذَا مُسَاعِد المُقَدَّم.','man hādhā? hādhā musāʿid al-muqaddam.'],
['The assistant is capable.','المُسَاعِد قَدِير.','al-musāʿid qadīr.'],['The lieutenant is with the lieutenant colonel at the base.','المُلَازِم مَعَ المُقَدَّم فِي القَاعِدَة.','al-mulāzim maʿa al-muqaddam fī al-qāʿida.'],
['Is the blackboard large? Yes, it is large.','هَلِ السَّبُّورَة كَبِيرَة؟ نَعَمْ، هِيَ كَبِيرَة.','hal al-sabbūra kabīra? naʿam, hiya kabīra.']
]);

const DLI_V7=dliWords(7,[
['today','اليَوْم','al-yawm','Adverb'],['American','أَمْرِيكِيّ','amrīkiyy','Adjective; nationality','أَمْرِيكِيَّة','أَمْرِيكِيُّون','أَمْرِيكِيَّات'],
['English','إِنْجِلِيزِيّ','injilīziyy','Adjective; nationality','إِنْجِلِيزِيَّة','إِنْجِلِيزِيُّون','إِنْجِلِيزِيَّات'],['Turkish','تُرْكِيّ','turkiyy','Adjective; nationality','تُرْكِيَّة','أَتْرَاك','تُرْكِيَّات'],
['Arab; Arabic','عَرَبِيّ','ʿarabiyy','Adjective; nationality','عَرَبِيَّة','عَرَب','عَرَبِيَّات'],['also','أَيْضًا','ayḍan','Adverb'],
['important','هَامّ','hāmm','Adjective','هَامَّة','هَامُّون','هَامَّات'],['language','لُغَة','lugha','Noun','—','—','لُغَات'],
['office','مَكْتَب','maktab','Noun','—','مَكَاتِب'],['his office','مَكْتَبُهُ','maktabuhu','Possessive noun'],['your office','مَكْتَبُكَ','maktabuka','Possessive noun','مَكْتَبُكِ','مَكْتَبُكُمْ','مَكْتَبُكُنَّ'],['my office','مَكْتَبِي','maktabī','Possessive noun'],
['good evening','مَسَاء الخَيْر','masāʾ al-khayr','Greeting'],['good evening (response)','مَسَاء النُّور','masāʾ al-nūr','Greeting response'],
['old','قَدِيم','qadīm','Adjective','قَدِيمَة','قُدَمَاء','قَدِيمَات'],['rank','رُتْبَة','rutba','Noun','—','—','رُتَب'],['news item','خَبَر','khabar','Noun','—','أَخْبَار'],
['absent','غَائِب','ghāʾib','Adjective','غَائِبَة','غَائِبُون','غَائِبَات']
]);
const DLI_S7=dliSentences(7,[
['Good evening.','مَسَاء الخَيْر.','masāʾ al-khayr.'],['Good evening.','مَسَاء النُّور.','masāʾ al-nūr.'],['Where is the professor today? He is absent.','أَيْنَ الأُسْتَاذ اليَوْم؟ هُوَ غَائِب.','ayna al-ustādh al-yawm? huwa ghāʾib.'],
['This is an important news item.','هَذَا خَبَر هَامّ.','hādhā khabar hāmm.'],['What is your rank? I am a lieutenant.','مَا رُتْبَتُكَ؟ أَنَا مُلَازِم.','mā rutbatuka? anā mulāzim.'],
['This is the Arabic language.','هَذِهِ اللُّغَة العَرَبِيَّة.','hādhihi al-lugha al-ʿarabiyya.'],['The professor is American, and the female professor is American.','الأُسْتَاذ أَمْرِيكِيّ، وَالأُسْتَاذَة أَمْرِيكِيَّة.','al-ustādh amrīkiyy, wa-al-ustādha amrīkiyya.'],
['The male correspondent is English, and the female correspondent is English.','المُرَاسِل إِنْجِلِيزِيّ، وَالمُرَاسِلَة إِنْجِلِيزِيَّة.','al-murāsil injilīziyy, wa-al-murāsila injilīziyya.'],
['The commander is Turkish, and the female teacher is Turkish.','القَائِد تُرْكِيّ، وَالمُعَلِّمَة تُرْكِيَّة.','al-qāʾid turkiyy, wa-al-muʿallima turkiyya.'],
['I am Arab, and she is Arab.','أَنَا عَرَبِيّ، وَهِيَ عَرَبِيَّة.','anā ʿarabiyy, wa-hiya ʿarabiyya.'],['Where is your office? My office is here.','أَيْنَ مَكْتَبُكَ؟ مَكْتَبِي هُنَا.','ayna maktabuka? maktabī hunā.'],
['The professor is in his office.','الأُسْتَاذ فِي مَكْتَبِهِ.','al-ustādh fī maktabihi.'],['Is the office old? Yes, it is old.','هَلِ المَكْتَب قَدِيم؟ نَعَمْ، هُوَ قَدِيم.','hal al-maktab qadīm? naʿam, huwa qadīm.'],
['I am also in the office.','أَنَا أَيْضًا فِي المَكْتَب.','anā ayḍan fī al-maktab.']
]);

const DLI_V8=dliWords(8,[
['now','الآنَ','al-āna','Adverb'],['house','بَيْت','bayt','Noun','—','بُيُوت'],['your house','بَيْتُكَ','baytuka','Possessive noun','بَيْتُكِ','بُيُوتُكُمْ','بُيُوتُكُنَّ'],['her house','بَيْتُهَا','baytuhā','Possessive noun'],
['beautiful','جَمِيل','jamīl','Adjective','جَمِيلَة','جَمِيلُون','جَمِيلَات'],['pocket','جَيْب','jayb','Noun','—','جُيُوب'],
['How are you?','كَيْفَ حَالُكَ؟','kayfa ḥāluka?','Expression','كَيْفَ حَالُكِ؟'],['Fine, praise be to God','بِخَيْر، الحَمْدُ لِلَّه','bikhayr, al-ḥamdu lillāh','Expression'],
['short','قَصِير','qaṣīr','Adjective','قَصِيرَة','قِصَار','قَصِيرَات'],['good morning','صَبَاح الخَيْر','ṣabāḥ al-khayr','Greeting'],['good morning (response)','صَبَاح النُّور','ṣabāḥ al-nūr','Greeting response'],
['friend','صَدِيق','ṣadīq','Noun','صَدِيقَة','أَصْدِقَاء','صَدِيقَات'],['friend (feminine)','صَدِيقَة','ṣadīqa','Noun','—','—','صَدِيقَات'],
['tall; long','طَوِيل','ṭawīl','Adjective','طَوِيلَة','طِوَال','طَوِيلَات'],['thank you','شُكْرًا','shukran','Expression'],['you are welcome','عَفْوًا','ʿafwan','Expression'],
['private; special','خَاصّ','khāṣṣ','Adjective','خَاصَّة','خَاصُّون','خَاصَّات']
]);
const DLI_S8=dliSentences(8,[
['Good morning.','صَبَاح الخَيْر.','ṣabāḥ al-khayr.'],['Good morning.','صَبَاح النُّور.','ṣabāḥ al-nūr.'],['How are you? (addressing a man)','كَيْفَ حَالُكَ؟','kayfa ḥāluka?'],
['I am fine, praise be to God.','أَنَا بِخَيْر، الحَمْدُ لِلَّه.','anā bikhayr, al-ḥamdu lillāh.'],['How are you? (addressing a woman)','كَيْفَ حَالُكِ؟','kayfa ḥāluki?'],
['I am fine, praise be to God.','أَنَا بِخَيْر، الحَمْدُ لِلَّه.','anā bikhayr, al-ḥamdu lillāh.'],['Is this your house? Yes, this is my house.','هَلْ هَذَا بَيْتُكَ؟ نَعَمْ، هَذَا بَيْتِي.','hal hādhā baytuka? naʿam, hādhā baytī.'],
['She is in her house now.','هِيَ فِي بَيْتِهَا الآن.','hiya fī baytihā al-ān.'],['This is my male friend, and this is my female friend.','هَذَا صَدِيقِي، وَهَذِهِ صَدِيقَتِي.','hādhā ṣadīqī, wa-hādhihi ṣadīqatī.'],
['My male friend is tall, and my female friend is short.','صَدِيقِي طَوِيل، وَصَدِيقَتِي قَصِيرَة.','ṣadīqī ṭawīl, wa-ṣadīqatī qaṣīra.'],['My pen is in my pocket.','قَلَمِي فِي جَيْبِي.','qalamī fī jaybī.'],
['This is a beautiful private school.','هَذِهِ مَدْرَسَة خَاصَّة وَجَمِيلَة.','hādhihi madrasa khāṣṣa wa-jamīla.'],['Thank you.','شُكْرًا.','shukran.'],['You are welcome.','عَفْوًا.','ʿafwan.']
]);

const DLI_V9=dliWords(9,[
['you (masculine plural)','أَنْتُمْ','antum','Pronoun','أَنْتُنَّ'],['you (feminine plural)','أَنْتُنَّ','antunna','Pronoun'],
['commissioned officer','ضَابِط','ḍābiṭ','Noun','ضَابِطَة','ضُبَّاط','ضَابِطَات'],['commissioned officers','ضُبَّاط','ḍubbāṭ','Noun; plural'],
['they (masculine)','هُمْ','hum','Pronoun','هُنَّ'],['they (feminine)','هُنَّ','hunna','Pronoun'],
['nurse (feminine)','مُمَرِّضَة','mumarriḍa','Noun','—','—','مُمَرِّضَات'],['nurses (feminine)','مُمَرِّضَات','mumarriḍāt','Noun; plural'],
['teachers (feminine)','مُعَلِّمَات','muʿallimāt','Noun; plural'],['we','نَحْنُ','naḥnu','Pronoun'],['commanders; leaders','قَادَة','qāda','Noun; plural'],
['student (masculine)','طَالِب','ṭālib','Noun','طَالِبَة','طُلَّاب','طَالِبَات'],['students','طُلَّاب','ṭullāb','Noun; plural'],
['student (feminine)','طَالِبَة','ṭāliba','Noun','—','—','طَالِبَات'],['students (feminine)','طَالِبَات','ṭālibāt','Noun; plural'],
['table','طَاوِلَة','ṭāwila','Noun','—','—','طَاوِلَات'],['airplane','طَائِرَة','ṭāʾira','Noun','—','—','طَائِرَات'],['map','خَرِيطَة','kharīṭa','Noun','—','—','خَرَائِط']
]);
const DLI_S9=dliSentences(9,[
['Who are you all? We are students.','مَنْ أَنْتُمْ؟ نَحْنُ طُلَّاب.','man antum? naḥnu ṭullāb.'],['Who are you all? We are female students.','مَنْ أَنْتُنَّ؟ نَحْنُ طَالِبَات.','man antunna? naḥnu ṭālibāt.'],
['Who are they? They are officers.','مَنْ هُمْ؟ هُمْ ضُبَّاط.','man hum? hum ḍubbāṭ.'],['Who are they? They are nurses.','مَنْ هُنَّ؟ هُنَّ مُمَرِّضَات.','man hunna? hunna mumarriḍāt.'],
['This is an officer.','هَذَا ضَابِط.','hādhā ḍābiṭ.'],['This is a nurse, and these are nurses.','هَذِهِ مُمَرِّضَة، وَهَؤُلَاءِ مُمَرِّضَات.','hādhihi mumarriḍa, wa-hāʾulāʾi mumarriḍāt.'],
['This is a female teacher, and these are female teachers.','هَذِهِ مُعَلِّمَة، وَهَؤُلَاءِ مُعَلِّمَات.','hādhihi muʿallima, wa-hāʾulāʾi muʿallimāt.'],
['This is a male student, and this is a female student.','هَذَا طَالِب، وَهَذِهِ طَالِبَة.','hādhā ṭālib, wa-hādhihi ṭāliba.'],
['The students are in the school, and the female students are in the library.','الطُّلَّاب فِي المَدْرَسَة، وَالطَّالِبَات فِي المَكْتَبَة.','al-ṭullāb fī al-madrasa, wa-al-ṭālibāt fī al-maktaba.'],
['These are the army commanders.','هَؤُلَاءِ قَادَة الجَيْش.','hāʾulāʾi qādat al-jaysh.'],['The map is here, and the table is there.','الخَرِيطَة هُنَا، وَالطَّاوِلَة هُنَاكَ.','al-kharīṭa hunā, wa-al-ṭāwila hunāka.'],
['The airplane is large.','الطَّائِرَة كَبِيرَة.','al-ṭāʾira kabīra.']
]);

const DLI_V10=dliWords(10,[
['Sudan','السُّودَان','al-sūdān','Proper noun'],['democratic','دِيمُقْرَاطِيّ','dīmuqrāṭiyy','Adjective','دِيمُقْرَاطِيَّة','دِيمُقْرَاطِيُّون','دِيمُقْرَاطِيَّات'],
['republican','جُمْهُورِيّ','jumhūriyy','Adjective','جُمْهُورِيَّة','جُمْهُورِيُّون','جُمْهُورِيَّات'],['republic','جُمْهُورِيَّة','jumhūriyya','Noun','—','—','جُمْهُورِيَّات'],
['civilian; civil','مَدَنِيّ','madaniyy','Adjective','مَدَنِيَّة','مَدَنِيُّون','مَدَنِيَّات'],['libraries','مَكْتَبَات','maktabāt','Noun; plural'],
['king','مَلِك','malik','Noun','مَلِكَة','مُلُوك','مَلِكَات'],['kingdom','مَمْلَكَة','mamlaka','Noun','—','—','مَمَالِك'],['hello','مَرْحَبًا','marḥaban','Greeting'],['welcome; hello','أَهْلًا وَسَهْلًا','ahlan wa-sahlan','Greeting'],
['correspondents (feminine)','مُرَاسِلَات','murāsilāt','Noun; plural'],['presidents; chiefs (feminine)','رَئِيسَات','raʾīsāt','Noun; plural'],
['watch; clock; hour','سَاعَة','sāʿa','Noun','—','—','سَاعَات'],['blackboards','سَبُّورَات','sabbūrāt','Noun; plural'],['cars','سَيَّارَات','sayyārāt','Noun; plural'],
['friends (feminine)','صَدِيقَات','ṣadīqāt','Noun; plural'],['tables','طَاوِلَات','ṭāwilāt','Noun; plural'],['airplanes','طَائِرَات','ṭāʾirāt','Noun; plural'],
['pupils (feminine)','تِلْمِيذَات','tilmīdhāt','Noun; plural'],['teachers; professors (feminine)','أُسْتَاذَات','ustādhāt','Noun; plural'],
['government; system of government','حُكُومَة','ḥukūma','Noun','—','—','حُكُومَات'],['our government','حُكُومَتُنَا','ḥukūmatunā','Possessive noun'],
['your government (masculine plural)','حُكُومَتُكُمْ','ḥukūmatukum','Possessive noun','حُكُومَتُكُنَّ'],['their government (masculine)','حُكُومَتُهُمْ','ḥukūmatuhum','Possessive noun','حُكُومَتُهُنَّ'],
['on','عَلَى','ʿalā','Preposition'],['military','عَسْكَرِيّ','ʿaskariyy','Adjective','عَسْكَرِيَّة','عَسْكَرِيُّون','عَسْكَرِيَّات']
]);
const DLI_S10=dliSentences(10,[
['Hello.','مَرْحَبًا.','marḥaban.'],['Welcome.','أَهْلًا وَسَهْلًا.','ahlan wa-sahlan.'],['Sudan is a republic.','السُّودَان جُمْهُورِيَّة.','al-sūdān jumhūriyya.'],
['Sudan’s government is civil and democratic.','حُكُومَة السُّودَان مَدَنِيَّة وَدِيمُقْرَاطِيَّة.','ḥukūmat al-sūdān madaniyya wa-dīmuqrāṭiyya.'],
['Is your government military? No, our government is civil.','هَلْ حُكُومَتُكُمْ عَسْكَرِيَّة؟ لَا، حُكُومَتُنَا مَدَنِيَّة.','hal ḥukūmatukum ʿaskariyya? lā, ḥukūmatunā madaniyya.'],
['Is your government democratic? Yes, our government is democratic.','هَلْ حُكُومَتُكُنَّ دِيمُقْرَاطِيَّة؟ نَعَمْ، حُكُومَتُنَا دِيمُقْرَاطِيَّة.','hal ḥukūmatukunna dīmuqrāṭiyya? naʿam, ḥukūmatunā dīmuqrāṭiyya.'],
['Their government is military, and their government is civil.','حُكُومَتُهُمْ عَسْكَرِيَّة، وَحُكُومَتُهُنَّ مَدَنِيَّة.','ḥukūmatuhum ʿaskariyya, wa-ḥukūmatuhunna madaniyya.'],
['Jordan is a kingdom, and its king is well-known.','الأُرْدُنّ مَمْلَكَة، وَمَلِكُهَا مَعْرُوف.','al-urdunn mamlaka, wa-malikuhā maʿrūf.'],
['The libraries are large.','المَكْتَبَات كَبِيرَة.','al-maktabāt kabīra.'],['The female correspondents and female chiefs are in the library.','المُرَاسِلَات وَالرَّئِيسَات فِي المَكْتَبَة.','al-murāsilāt wa-al-raʾīsāt fī al-maktaba.'],
['The watches are on the tables.','السَّاعَات عَلَى الطَّاوِلَات.','al-sāʿāt ʿalā al-ṭāwilāt.'],['The blackboards are in the school.','السَّبُّورَات فِي المَدْرَسَة.','al-sabbūrāt fī al-madrasa.'],
['The cars are at the base.','السَّيَّارَات فِي القَاعِدَة.','al-sayyārāt fī al-qāʿida.'],['Our female friends are professors.','صَدِيقَاتُنَا أُسْتَاذَات.','ṣadīqātunā ustādhāt.'],
['The airplanes are large, and the female pupils are in the airplane.','الطَّائِرَات كَبِيرَة، وَالتِّلْمِيذَات فِي الطَّائِرَة.','al-ṭāʾirāt kabīra, wa-al-tilmīdhāt fī al-ṭāʾira.']
]);

// BEGIN GENERATED DLI CHAPTERS 11-40
const DLI_V11=dliWords(11,[
['these','هٰؤُلَاءِ','hāʾulāʾi','Demonstrative, plural','—','—','—'],
['those','أُولٰئِكَ','ulāʾika','Demonstrative, plural','—','—','—'],
['how many?','كَمْ؟','kam?','Interrogative','—','—','—'],
['one','وَاحِد','wāḥid','Numeral','وَاحِدَة','—','—'],
['I have / with me','عِنْدِي','ʿindī','Prepositional expression','—','—','—'],
['hand','يَد','yad','Noun','—','أَيْدٍ   أَيَادٍ','—'],
['Libyan','لِيبِيّ','lībiyy','Adjective/noun','لِيبِيَّة','لِيبِيُّون','لِيبِيَّات'],
['Sudanese','سُودَانِيّ','sūdāniyy','Adjective/noun','سُودَانِيَّة','سُودَانِيُّون','سُودَانِيَّات'],
['Iraqi','عِرَاقِيّ','ʿirāqiyy','Adjective/noun','عِرَاقِيَّة','عِرَاقِيُّون','عِرَاقِيَّات'],
]);
const DLI_S11=dliSentences(11,[
['Who are these?','مَنْ هٰؤُلَاءِ؟','man hāʾulāʾi?'],
['These are Libyan students.','هٰؤُلَاءِ طُلَّابٌ لِيبِيُّونَ.','hāʾulāʾi ṭullābun lībiyyūna.'],
['Those are Iraqi teachers.','أُولٰئِكَ مُعَلِّمَاتٌ عِرَاقِيَّاتٌ.','ulāʾika muʿallimātun ʿirāqiyyātun.'],
['How many Arab friends do you have?','كَمْ صَدِيقًا عَرَبِيًّا عِنْدَكَ؟','kam ṣadīqan ʿarabiyyan ʿindaka?'],
['I have one Sudanese friend.','عِنْدِي صَدِيقٌ سُودَانِيٌّ وَاحِدٌ.','ʿindī ṣadīqun sūdāniyyun wāḥidun.'],
['I also have one Iraqi friend.','وَعِنْدِي أَيْضًا صَدِيقَةٌ عِرَاقِيَّةٌ وَاحِدَةٌ.','wa-ʿindī ayḍan ṣadīqatun ʿirāqiyyatun wāḥidatun.'],
['This book is in my hand.','هٰذَا الْكِتَابُ فِي يَدِي.','hādhā al-kitābu fī yadī.'],
]);
const DLI_V12=dliWords(12,[
['professors / teachers','أَسَاتِذَة','asātidha','Noun','—','—','أُسْتَاذَات'],
['class','صَفّ','ṣaff','Noun','—','صُفُوف','—'],
['city','مَدِينَة','madīna','Noun','—','مُدُن','—'],
['capital','عَاصِمَة','ʿāṣima','Noun','—','عَوَاصِم','—'],
['Beirut','بَيْرُوت','bayrūt','Proper place name','—','—','—'],
['Baghdad','بَغْدَاد','baghdād','Proper place name','—','—','—'],
['Damascus','دِمَشْق','dimashq','Proper place name','—','—','—'],
['Sana\'a','صَنْعَاء','ṣanʿāʾ','Proper place name','—','—','—'],
['Egypt','مِصْر','miṣr','Proper place name','—','—','—'],
['Tunisia','تُونِس','tūnis','Proper place name','—','—','—'],
['Israel','إِسْرَائِيل','isrāʾīl','Proper place name','—','—','—'],
['peace be upon you','السَّلَامُ عَلَيْكُمْ','al-salāmu ʿalaykum','Greeting','—','—','—'],
]);
const DLI_S12=dliSentences(12,[
['Peace be upon you, professor.','السَّلَامُ عَلَيْكُمْ يَا أُسْتَاذ.','al-salāmu ʿalaykum yā ustādh.'],
['Are you the Arabic professor in this school?','هَلْ أَنْتَ أُسْتَاذُ اللُّغَةِ الْعَرَبِيَّةِ فِي هٰذِهِ الْمَدْرَسَةِ؟','hal anta ustādhu al-lughati al-ʿarabiyyati fī hādhihi al-madrasa?'],
['There are students from America in my class.','فِي صَفِّي طُلَّابٌ مِنْ أَمْرِيكَا.','fī ṣaffī ṭullābun min amrīkā.'],
['Baghdad is the capital of Iraq.','بَغْدَادُ عَاصِمَةُ الْعِرَاقِ.','baghdādu ʿāṣimatu al-ʿirāq.'],
['Damascus is the capital of Syria.','دِمَشْقُ عَاصِمَةُ سُورِيَا.','dimashqu ʿāṣimatu sūriyā.'],
['Sana\'a is the capital of Yemen.','صَنْعَاءُ عَاصِمَةُ الْيَمَنِ.','ṣanʿāʾu ʿāṣimatu al-yaman.'],
['Beirut is a famous Arab city.','بَيْرُوتُ مَدِينَةٌ عَرَبِيَّةٌ مَشْهُورَةٌ.','bayrūtu madīnatun ʿarabiyyatun mashhūratun.'],
['Are there professors from Egypt and Tunisia?','هَلْ هُنَاكَ أَسَاتِذَةٌ مِنْ مِصْرَ وَتُونِسَ؟','hal hunāka asātidhatun min miṣra wa-tūnisa?'],
]);
const DLI_V13=dliWords(13,[
['Cairo','الْقَاهِرَة','al-qāhira','Proper place name','—','—','—'],
['broadcasting / radio station','إِذَاعَة','idhāʿa','Noun','—','إِذَاعَات','—'],
['correspondent','مُرَاسِل','murāsil','Noun','مُرَاسِلَة','مُرَاسِلُون','مُرَاسِلَات'],
['journalist','صَحَفِيّ','ṣaḥafiyy','Noun','صَحَفِيَّة','صَحَفِيُّون','صَحَفِيَّات'],
['representative / delegate','مَنْدُوب','mandūb','Noun','مَنْدُوبَة','مَنْدُوبُون','مَنْدُوبَات'],
['headquarters','مَقَرّ','maqarr','Noun','—','مَقَرَّات','—'],
['assistant','مُسَاعِد','musāʿid','Noun','مُسَاعِدَة','مُسَاعِدُون','مُسَاعِدَات'],
['employee','مُوَظَّف','muwaẓẓaf','Noun','مُوَظَّفَة','مُوَظَّفُون','مُوَظَّفَات'],
['nurse','مُمَرِّض','mumarriḍ','Noun','مُمَرِّضَة','مُمَرِّضُون','مُمَرِّضَات'],
['teacher','مُعَلِّم','muʿallim','Noun','مُعَلِّمَة','مُعَلِّمُون','مُعَلِّمَات'],
['American','أَمْرِيكِيّ','amrīkiyy','fem. أَمْرِيكِيَّة','—','أَمْرِيكِيُّون','أَمْرِيكِيَّات'],
['Egyptian','مِصْرِيّ','miṣriyy','fem. مِصْرِيَّة','—','مِصْرِيُّون','مِصْرِيَّات'],
]);
const DLI_S13=dliSentences(13,[
['Who are these?','مَنْ هٰؤُلَاءِ؟','man hāʾulāʾi?'],
['These are Iraqi correspondents and journalists.','هٰؤُلَاءِ مُرَاسِلُونَ وَصَحَفِيُّونَ عِرَاقِيُّونَ.','hāʾulāʾi murāsilūna wa-ṣaḥafiyyūna ʿirāqiyyūna.'],
['Their headquarters is in Baghdad.','مَقَرُّهُمْ فِي بَغْدَادَ.','maqarruhum fī baghdāda.'],
['The Egyptian correspondents are in Cairo.','الْمُرَاسِلُونَ الْمِصْرِيُّونَ فِي الْقَاهِرَةِ.','al-murāsilūna al-miṣriyyūna fī al-qāhira.'],
['Is the radio representative here?','هَلْ مَنْدُوبُ الْإِذَاعَةِ هُنَا؟','hal mandūbu al-idhāʿati hunā?'],
['The representatives are with the assistants.','الْمَنْدُوبُونَ مَعَ الْمُسَاعِدِينَ.','al-mandūbūna maʿa al-musāʿidīn.'],
['The female employees work with the female journalists.','الْمُوَظَّفَاتُ يَعْمَلْنَ مَعَ الصَّحَفِيَّاتِ.','al-muwaẓẓafātu yaʿmalna maʿa al-ṣaḥafiyyāt.'],
['The nurses and teachers are American.','الْمُمَرِّضُونَ وَالْمُعَلِّمُونَ أَمْرِيكِيُّونَ.','al-mumarriḍūna wa-al-muʿallimūna amrīkiyyūna.'],
]);
const DLI_V14=dliWords(14,[
['pen / pencil','قَلَم','qalam','Noun','—','أَقْلَام','—'],
['book','كِتَاب','kitāb','Noun','—','كُتُب','—'],
['watch / hour','سَاعَة','sāʿa','Noun','—','سَاعَات','—'],
['house','بَيْت','bayt','Noun','—','بُيُوت','—'],
['university','جَامِعَة','jāmiʿa','Noun','—','جَامِعَات','—'],
['camp','مُعَسْكَر','muʿaskar','Noun','—','مُعَسْكَرَات','—'],
['language','لُغَة','lugha','Noun','—','لُغَات','—'],
['instructor / teacher','مُدَرِّس','mudarris','Noun','مُدَرِّسَة','مُدَرِّسُون','مُدَرِّسَات'],
['new','جَدِيد','jadīd','fem. جَدِيدَة','—','جُدُد','جَدِيدَات'],
['beautiful','جَمِيل','jamīl','fem. جَمِيلَة','—','جَمِيلُون','جَمِيلَات'],
['few / little','قَلِيل','qalīl','fem. قَلِيلَة','—','قَلِيلُون','قَلِيلَات'],
['many / much','كَثِير','kathīr','fem. كَثِيرَة','—','كَثِيرُون','كَثِيرَات'],
['famous','مَشْهُور','mashhūr','fem. مَشْهُورَة','—','مَشْهُورُون','مَشْهُورَات'],
['well-known','مَعْرُوف','maʿrūf','fem. مَعْرُوفَة','—','مَعْرُوفُون','مَعْرُوفَات'],
['capable','قَدِير','qadīr','fem. قَدِيرَة','—','قَدِيرُون','قَدِيرَات'],
['Jordanian','أُرْدُنِيّ','urduniyy','fem. أُرْدُنِيَّة','—','أُرْدُنِيُّون','أُرْدُنِيَّات'],
]);
const DLI_S14=dliSentences(14,[
['Is this university new?','هَلْ هٰذِهِ الْجَامِعَةُ جَدِيدَةٌ؟','hal hādhihi al-jāmiʿatu jadīdatun?'],
['Yes, it is a new and famous university.','نَعَمْ، هِيَ جَامِعَةٌ جَدِيدَةٌ وَمَشْهُورَةٌ.','naʿam, hiya jāmiʿatun jadīdatun wa-mashhūratun.'],
['How many new instructors are there?','كَمْ مُدَرِّسًا جَدِيدًا فِيهَا؟','kam mudarrisan jadīdan fīhā?'],
['There are many capable instructors.','فِيهَا مُدَرِّسُونَ قَدِيرُونَ كَثِيرُونَ.','fīhā mudarrisūna qadīrūna kathīrūna.'],
['There are few Jordanian students in the class.','فِي الصَّفِّ طُلَّابٌ أُرْدُنِيُّونَ قَلِيلُونَ.','fī al-ṣaffi ṭullābun urduniyyūna qalīlūna.'],
['These beautiful books are new.','هٰذِهِ الْكُتُبُ الْجَمِيلَةُ جَدِيدَةٌ.','hādhihi al-kutubu al-jamīlatu jadīdatun.'],
['The university has many languages.','فِي الْجَامِعَةِ لُغَاتٌ كَثِيرَةٌ.','fī al-jāmiʿati lughātun kathīratun.'],
['That well-known camp has many houses.','فِي ذٰلِكَ الْمُعَسْكَرِ الْمَعْرُوفِ بُيُوتٌ كَثِيرَةٌ.','fī dhālika al-muʿaskari al-maʿrūfi buyūtun kathīratun.'],
['I have three pens, four books, and one watch.','عِنْدِي ثَلَاثَةُ أَقْلَامٍ وَأَرْبَعَةُ كُتُبٍ وَسَاعَةٌ وَاحِدَةٌ.','ʿindī thalāthatu aqlāmin wa-arbaʿatu kutubin wa-sāʿatun wāḥidatun.'],
]);
const DLI_V15=dliWords(15,[
['name','اِسْم','ism','Noun','—','أَسْمَاء','—'],
['old / former / ancient','قَدِيم','qadīm','fem. قَدِيمَة','—','قُدَمَاء','قَدِيمَات'],
['president / head','رَئِيس','raʾīs','Noun','رَئِيسَة','رُؤَسَاء','رَئِيسَات'],
['prime minister','رَئِيسُ الْوُزَرَاءِ','raʾīsu al-wuzarāʾ','Compound noun','—','—','—'],
['minister','وَزِير','wazīr','Noun','وَزِيرَة','وُزَرَاء','وَزِيرَات'],
['leader','زَعِيم','zaʿīm','Noun','زَعِيمَة','زُعَمَاء','زَعِيمَات'],
['corporal','عَرِيف','ʿarīf','Noun','—','عُرَفَاء','—'],
['charming / pleasant','ظَرِيف','ẓarīf','fem. ظَرِيفَة','—','ظُرَفَاء','ظَرِيفَات'],
]);
const DLI_S15=dliSentences(15,[
['What is the president\'s name?','مَا اسْمُ الرَّئِيسِ؟','mā ismu al-raʾīs?'],
['The Syrian president is with the Egyptian prime minister.','الرَّئِيسُ السُّورِيُّ مَعَ رَئِيسِ الْوُزَرَاءِ الْمِصْرِيِّ.','al-raʾīsu al-sūriyyu maʿa raʾīsi al-wuzarāʾi al-miṣriyy.'],
['Three ministers are in the government office.','ثَلَاثَةُ وُزَرَاءَ فِي مَكْتَبِ الْحُكُومَةِ.','thalāthatu wuzarāʾa fī maktabi al-ḥukūma.'],
['Those leaders are famous.','أُولٰئِكَ الزُّعَمَاءُ مَشْهُورُونَ.','ulāʾika al-zuʿamāʾu mashhūrūna.'],
['The former president is a charming man.','الرَّئِيسُ الْقَدِيمُ رَجُلٌ ظَرِيفٌ.','al-raʾīsu al-qadīmu rajulun ẓarīfun.'],
['The female ministers are with the female leaders.','الْوَزِيرَاتُ مَعَ الزَّعِيمَاتِ.','al-wazīrātu maʿa al-zaʿīmāt.'],
['The corporals are in the nearby camp.','الْعُرَفَاءُ فِي الْمُعَسْكَرِ الْقَرِيبِ.','al-ʿurafāʾu fī al-muʿaskari al-qarīb.'],
]);
const DLI_V16=dliWords(16,[
['farther / farthest','أَبْعَد','abʿad','Comparative/superlative','—','—','—'],
['newer / newest','أَجَدّ','ajadd','Comparative/superlative','—','—','—'],
['more / most beautiful','أَجْمَل','ajmal','Comparative/superlative','—','—','—'],
['more / most famous','أَشْهَر','ashhar','Comparative/superlative','—','—','—'],
['smaller / smallest; younger / youngest','أَصْغَر','aṣghar','Comparative/superlative','—','—','—'],
['taller / tallest; longer / longest','أَطْوَل','aṭwal','Comparative/superlative','—','—','—'],
['nicer / nicest','أَظْرَف','aẓraf','Comparative/superlative','—','—','—'],
['older / oldest','أَقْدَم','aqdam','Comparative/superlative','—','—','—'],
['nearer / nearest','أَقْرَب','aqrab','Comparative/superlative','—','—','—'],
['shorter / shortest','أَقْصَر','aqṣar','Comparative/superlative','—','—','—'],
['less / least','أَقَلّ','aqall','Comparative/superlative','—','—','—'],
['bigger / biggest','أَكْبَر','akbar','Comparative/superlative','—','—','—'],
['more / most','أَكْثَر','akthar','Comparative/superlative','—','—','—'],
['very','جِدًّا','jiddan','Adverb','—','—','—'],
['Europe','أُورُوبَّا','ūrūbbā','Proper place name','—','—','—'],
['soldier','جُنْدِيّ','jundiyy','Noun','—','جُنُود','—'],
['army','جَيْش','jaysh','Noun','—','جُيُوش','—'],
]);
const DLI_S16=dliSentences(16,[
['This university is bigger than that university.','هٰذِهِ الْجَامِعَةُ أَكْبَرُ مِنْ تِلْكَ الْجَامِعَةِ.','hādhihi al-jāmiʿatu akbaru min tilka al-jāmiʿa.'],
['The American university is newer and more famous.','الْجَامِعَةُ الْأَمْرِيكِيَّةُ أَجَدُّ وَأَشْهَرُ.','al-jāmiʿatu al-amrīkiyyatu ajaddu wa-ashharu.'],
['My house is closer to the school.','بَيْتِي أَقْرَبُ إِلَى الْمَدْرَسَةِ.','baytī aqrabu ilā al-madrasa.'],
['The camp is farther than the city.','الْمُعَسْكَرُ أَبْعَدُ مِنَ الْمَدِينَةِ.','al-muʿaskaru abʿadu mina al-madīna.'],
['This student is younger and shorter.','هٰذَا الطَّالِبُ أَصْغَرُ وَأَقْصَرُ.','hādhā al-ṭālibu aṣgharu wa-aqṣaru.'],
['That teacher is taller and nicer.','ذٰلِكَ الْمُعَلِّمُ أَطْوَلُ وَأَظْرَفُ.','dhālika al-muʿallimu aṭwalu wa-aẓrafu.'],
['The old university is the most beautiful.','الْجَامِعَةُ الْقَدِيمَةُ هِيَ الْأَجْمَلُ.','al-jāmiʿatu al-qadīmatu hiya al-ajmal.'],
['There are more armies and fewer soldiers in Europe.','فِي أُورُوبَّا جُيُوشٌ أَكْثَرُ وَجُنُودٌ أَقَلُّ.','fī ūrūbbā juyūshun aktharu wa-junūdun aqallu.'],
['This army is very large.','هٰذَا الْجَيْشُ كَبِيرٌ جِدًّا.','hādhā al-jayshu kabīrun jiddan.'],
]);
const DLI_V17=dliWords(17,[
['who / which / that (masc. singular)','الَّذِي','alladhī','Relative pronoun','—','—','—'],
['who / which / that (fem. singular)','الَّتِي','allatī','Relative pronoun','—','—','—'],
['who / which / that (masc. plural)','الَّذِينَ','alladhīna','Relative pronoun','—','—','—'],
['who / which / that (fem. plural)','اللَّوَاتِي','allawātī','Relative pronoun','—','—','—'],
['which?','أَيّ؟','ayy?','Interrogative','—','—','—'],
['address','عُنْوَان','ʿunwān','Noun','—','عَنَاوِين','—'],
['homeland','وَطَن','waṭan','Noun','—','أَوْطَان','—'],
]);
const DLI_S17=dliSentences(17,[
['Who is the student who is in the professor\'s office?','مَنِ الطَّالِبُ الَّذِي فِي مَكْتَبِ الْأُسْتَاذِ؟','mani al-ṭālibu alladhī fī maktabi al-ustādh?'],
['The book that is on the table is the professor\'s book.','الْكِتَابُ الَّذِي عَلَى الطَّاوِلَةِ كِتَابُ الْأُسْتَاذِ.','al-kitābu alladhī ʿalā al-ṭāwilati kitābu al-ustādh.'],
['The student who is in the car is my friend.','الطَّالِبَةُ الَّتِي فِي السَّيَّارَةِ صَدِيقَتِي.','al-ṭālibatu allatī fī al-sayyārati ṣadīqatī.'],
['The professors who are in that class are famous.','الْأَسَاتِذَةُ الَّذِينَ فِي ذٰلِكَ الصَّفِّ مَشْهُورُونَ.','al-asātidhatu alladhīna fī dhālika al-ṣaffi mashhūrūna.'],
['The teachers who are in the minister\'s office are Egyptian.','الْمُعَلِّمَاتُ اللَّوَاتِي فِي مَكْتَبِ الْوَزِيرِ مِصْرِيَّاتٌ.','al-muʿallimātu allawātī fī maktabi al-wazīri miṣriyyātun.'],
['Which book is yours?','أَيُّ كِتَابٍ كِتَابُكَ؟','ayyu kitābin kitābuka?'],
['What is your address?','مَا عُنْوَانُكَ؟','mā ʿunwānuka?'],
['Iraq is the homeland that she is from.','الْعِرَاقُ هُوَ الْوَطَنُ الَّذِي هِيَ مِنْهُ.','al-ʿirāqu huwa al-waṭanu alladhī hiya minhu.'],
]);
const DLI_V18=dliWords(18,[
['republic','جُمْهُورِيَّة','jumhūriyya','Noun','—','جُمْهُورِيَّات','—'],
['president of the republic','رَئِيسُ الْجُمْهُورِيَّةِ','raʾīsu al-jumhūriyya','Compound noun','—','—','—'],
['prime minister','رَئِيسُ الْوُزَرَاءِ','raʾīsu al-wuzarāʾ','Compound noun','—','—','—'],
['minister','وَزِير','wazīr','Noun','وَزِيرَة','وُزَرَاء','وَزِيرَات'],
['newspaper','جَرِيدَة','jarīda','Noun','—','جَرَائِد','—'],
['newspapers / press','صُحُف','ṣuḥuf','Noun','—','—','—'],
['Al-Ahram newspaper','جَرِيدَةُ الْأَهْرَامِ','jarīdatu al-ahrām','Publication name','—','—','—'],
['most famous','أَشْهَر','ashhar','Comparative/superlative','—','—','—'],
]);
const DLI_S18=dliSentences(18,[
['Where is the president of Egypt now?','أَيْنَ رَئِيسُ جُمْهُورِيَّةِ مِصْرَ الْآنَ؟','ayna raʾīsu jumhūriyyati miṣra al-āna?'],
['He is with the Yemeni president in Sana\'a.','هُوَ مَعَ الرَّئِيسِ الْيَمَنِيِّ فِي صَنْعَاءَ.','huwa maʿa al-raʾīsi al-yamaniyyi fī ṣanʿāʾa.'],
['The prime minister is also there.','رَئِيسُ الْوُزَرَاءِ هُنَاكَ أَيْضًا.','raʾīsu al-wuzarāʾi hunāka ayḍan.'],
['Three Egyptian ministers are with him.','مَعَهُ ثَلَاثَةُ وُزَرَاءَ مِصْرِيِّينَ.','maʿahu thalāthatu wuzarāʾa miṣriyyīna.'],
['Newspaper correspondents and radio representatives are there.','مُرَاسِلُو الْجَرَائِدِ وَمَنْدُوبُو الْإِذَاعَةِ هُنَاكَ.','murāsilū al-jarāʾidi wa-mandūbū al-idhāʿati hunāka.'],
['Is the Al-Ahram correspondent there?','هَلْ مُرَاسِلُ جَرِيدَةِ الْأَهْرَامِ هُنَاكَ؟','hal murāsilu jarīdati al-ahrāmi hunāka?'],
['She is the most famous Egyptian correspondent.','هِيَ أَشْهَرُ مُرَاسِلَةٍ مِصْرِيَّةٍ.','hiya ashharu murāsilatin miṣriyyatin.'],
['Who are those newspaper journalists?','مَنْ أُولٰئِكَ صَحَفِيُّو الصُّحُفِ؟','man ulāʾika ṣaḥafiyyū al-ṣuḥuf?'],
]);
const DLI_V19=dliWords(19,[
['to / toward','إِلَى','ilā','Preposition','—','—','—'],
['after','بَعْد','baʿd','Preposition/adverb','—','—','—'],
['this morning','صَبَاحَ الْيَوْمِ','ṣabāḥa al-yawm','Time expression','—','—','—'],
['evening','مَسَاء','masāʾ','Noun/adverb','—','أَمْسِيَات','—'],
['why?','لِمَاذَا؟','limādhā?','Interrogative','—','—','—'],
['when?','مَتَى؟','matā?','Interrogative','—','—','—'],
['I obtain / receive','أَحْصُلُ عَلَى','aḥṣulu ʿalā','Verb phrase','—','—','—'],
['I go','أَذْهَبُ','adhhabu','Verb','—','—','—'],
['I return','أَرْجِعُ','arjiʿu','Verb','—','—','—'],
["I work / work","أَعْمَلُ / عَمَل","aʿmalu / ʿamal",'Verb / verbal noun','—','—','—'],
['husband','زَوْج','zawj','Noun','—','أَزْوَاج','—'],
['wife','زَوْجَة','zawja','Noun','—','زَوْجَات','—'],
['certificate / academic degree','شَهَادَة','shahāda','Noun','—','شَهَادَات','—'],
['bachelor\'s degree','الْبَكَالُورِيُوس','al-bakālūriyūs','Noun','—','—','—'],
['master\'s degree','الْمَاجِسْتِير','al-mājistīr','Noun','—','—','—'],
['doctorate','الدُّكْتُورَاه','al-duktūrāh','Noun','—','—','—'],
['Amman','عَمَّان','ʿammān','Proper place name','—','—','—'],
]);
const DLI_S19=dliSentences(19,[
['Why do you go to Cairo?','لِمَاذَا تَذْهَبُ إِلَى الْقَاهِرَةِ؟','limādhā tadhhabu ilā al-qāhira?'],
['I go to obtain a degree from Cairo University.','أَذْهَبُ لِلْحُصُولِ عَلَى شَهَادَةٍ مِنْ جَامِعَةِ الْقَاهِرَةِ.','adhhabu lil-ḥuṣūli ʿalā shahādatin min jāmiʿati al-qāhira.'],
['I obtain a bachelor\'s degree.','أَحْصُلُ عَلَى شَهَادَةِ الْبَكَالُورِيُوسِ.','aḥṣulu ʿalā shahādati al-bakālūriyūs.'],
['My wife obtains a master\'s degree.','تَحْصُلُ زَوْجَتِي عَلَى شَهَادَةِ الْمَاجِسْتِيرِ.','taḥṣulu zawjatī ʿalā shahādati al-mājistīr.'],
['Her husband obtains a doctorate.','يَحْصُلُ زَوْجُهَا عَلَى شَهَادَةِ الدُّكْتُورَاه.','yaḥṣulu zawjuhā ʿalā shahādati al-duktūrāh.'],
['When do you return to Amman?','مَتَى تَرْجِعُ إِلَى عَمَّانَ؟','matā tarjiʿu ilā ʿammāna?'],
['I return after obtaining the degree.','أَرْجِعُ بَعْدَ الْحُصُولِ عَلَى الشَّهَادَةِ.','arjiʿu baʿda al-ḥuṣūli ʿalā al-shahāda.'],
['I work this morning and return in the evening.','أَعْمَلُ صَبَاحَ الْيَوْمِ وَأَرْجِعُ مَسَاءً.','aʿmalu ṣabāḥa al-yawmi wa-arjiʿu masāʾan.'],
]);
const DLI_V20=dliWords(20,[
['meeting','اِجْتِمَاع','ijtimāʿ','Noun','—','اِجْتِمَاعَات','—'],
["end / completion","اِنْتِهَاء","intihāʾ",'Verbal noun','—','—','—'],
['I attend / am present','أَحْضُرُ','aḥḍuru','Verb','—','—','—'],
['I come / arrive at','أَحْضُرُ إِلَى','aḥḍuru ilā','Verb phrase','—','—','—'],
['morning','صَبَاح','ṣabāḥ','Noun','—','صَبَاحَات','—'],
['before','قَبْل','qabl','Preposition/adverb','—','—','—'],
['Lebanon','لُبْنَان','lubnān','Proper place name','—','—','—'],
]);
const DLI_S20=dliSentences(20,[
['Do you attend the university professors\' meeting in Beirut?','هَلْ تَحْضُرُ اجْتِمَاعَ أَسَاتِذَةِ الْجَامِعَةِ فِي بَيْرُوتَ؟','hal taḥḍuru ijtimāʿa asātidhati al-jāmiʿati fī bayrūta?'],
['Yes, I attend the meeting.','نَعَمْ، أَحْضُرُ الِاجْتِمَاعَ.','naʿam, aḥḍuru al-ijtimāʿa.'],
['I come to the city this morning.','أَحْضُرُ إِلَى الْمَدِينَةِ صَبَاحَ الْيَوْمِ.','aḥḍuru ilā al-madīnati ṣabāḥa al-yawm.'],
['The American University of Beirut professors attend.','يَحْضُرُ أَسَاتِذَةُ الْجَامِعَةِ الْأَمْرِيكِيَّةِ فِي بَيْرُوتَ.','yaḥḍuru asātidhatu al-jāmiʿati al-amrīkiyyati fī bayrūta.'],
['I go to Lebanon before the meeting.','أَذْهَبُ إِلَى لُبْنَانَ قَبْلَ الِاجْتِمَاعِ.','adhhabu ilā lubnāna qabla al-ijtimāʿ.'],
['I attend an important meeting in the morning.','أَحْضُرُ اجْتِمَاعًا هَامًّا فِي الصَّبَاحِ.','aḥḍuru ijtimāʿan hāmman fī al-ṣabāḥ.'],
['Where do you go after the meeting ends?','إِلَى أَيْنَ تَذْهَبُ بَعْدَ انْتِهَاءِ الِاجْتِمَاعِ؟','ilā ayna tadhhabu baʿda intihāʾi al-ijtimāʿ?'],
['I return home after the meeting.','أَرْجِعُ إِلَى بَيْتِي بَعْدَ الِاجْتِمَاعِ.','arjiʿu ilā baytī baʿda al-ijtimāʿ.'],
]);
const DLI_V21=dliWords(21,[
['the world','العَالَم','al-ʿālam','Noun','—','عَوَالِم','—'],
['international global','عَالَمِيّ','ʿālamiyy','Adjective','عَالَمِيَّة','عَالَمِيُّون','عَالَمِيَّات'],
['country','بَلَد','balad','Noun','—','بِلَاد','—'],
['state country','دَوْلَة','dawla','Noun','—','دُوَل','—'],
['Italy','إِيطَالِيَا','īṭāliyā','Place name','—','—','—'],
['tourism','سِيَاحَة','siyāḥa','Noun','—','—','—'],
['conference','مُؤْتَمَر','muʾtamar','Noun','—','مُؤْتَمَرَات','—'],
["attendance","حُضُور","ḥuḍūr",'Verbal noun','—','—','—'],
['result','نَتِيجَة','natīja','Noun','—','نَتَائِج','—'],
['duty assignment','وَاجِب','wājib','Noun','—','وَاجِبَات','—'],
['I have a duty','عَلَيَّ وَاجِب','ʿalayya wājib','Expression','—','—','—'],
['yesterday','أَمْسِ','amsi','Adverb','—','—','—'],
['about concerning','عَنْ','ʿan','Preposition','—','—','—'],
['in with by','بِـ','bi-','Preposition and prefix','—','—','—'],
['each every all','كُلّ','kull','Quantifier','—','—','—'],
['how','كَيْفَ','kayfa','Interrogative','—','—','—'],
['I read','أَقْرَأُ','aqraʾu','Verb','—','—','—'],
]);
const DLI_S21=dliSentences(21,[
['How did you go to Beirut?','كَيْفَ ذَهَبْتَ إِلَى بَيْرُوتَ؟','kayfa dhahabta ilā bayrūta?'],
['I went by airplane to attend the world tourism conference.','ذَهَبْتُ بِالطَّائِرَةِ لِحُضُورِ مُؤْتَمَرِ السِّيَاحَةِ العَالَمِيِّ.','dhahabtu bi-al-ṭāʾirati li-ḥuḍūri muʾtamari al-siyāḥati al-ʿālamiyy.'],
['Representatives from many Arab countries attended.','حَضَرَ مَنْدُوبُونَ مِنْ دُوَلٍ عَرَبِيَّةٍ كَثِيرَةٍ.','ḥaḍara mandūbūna min duwalin ʿarabiyyatin kathīra.'],
['After the conference, they returned to their countries.','بَعْدَ المُؤْتَمَرِ رَجَعُوا إِلَى بِلَادِهِمْ.','baʿda al-muʾtamari rajaʿū ilā bilādihim.'],
['They discussed the results with their governments.','بَحَثُوا النَّتَائِجَ مَعَ حُكُومَاتِهِمْ.','baḥathū al-natāʾija maʿa ḥukūmātihim.'],
['I read about tourism in Italy yesterday.','قَرَأْتُ عَنِ السِّيَاحَةِ فِي إِيطَالِيَا أَمْسِ.','qaraʾtu ʿani al-siyāḥati fī īṭāliyā amsi.'],
['I have an important duty today.','عَلَيَّ وَاجِبٌ هَامٌّ اليَوْمَ.','ʿalayya wājibun hāmmun al-yawma.'],
['Every country has representatives at the international conference.','لِكُلِّ دَوْلَةٍ مَنْدُوبُونَ فِي المُؤْتَمَرِ العَالَمِيِّ.','li-kulli dawlatin mandūbūna fī al-muʾtamari al-ʿālamiyy.'],
]);
const DLI_V22=dliWords(22,[
['literature','أَدَب','adab','Noun','—','آدَاب','—'],
["study studies","دِرَاسَة","dirāsa",'Verbal noun','—','دِرَاسَات','—'],
['I study','أَدْرُسُ','adrusu','Verb','—','—','—'],
['letter message','رِسَالَة','risāla','Noun','—','رَسَائِل','—'],
['newspapers press','صُحُف','ṣuḥuf','Noun','—','—','—'],
['family relatives','أَهْل','ahl','Collective noun','—','—','—'],
['I leave','أَتْرُكُ','atruku','Verb','—','—','—'],
['I sit','أَجْلِسُ','ajlisu','Verb','—','—','—'],
['I go out of','أَخْرُجُ مِنْ','akhruju min','Verb phrase','—','—','—'],
['I enter','أَدْخُلُ','adkhulu','Verb','—','—','—'],
['I write','أَكْتُبُ','aktubu','Verb','—','—','—'],
["return","رُجُوع","rujūʿ",'Verbal noun','—','—','—'],
['what','مَاذَا؟','mādhā?','Interrogative before a verb','—','—','—'],
]);
const DLI_S22=dliSentences(22,[
['Why did you go to London?','لِمَاذَا ذَهَبْتَ إِلَى لَنْدَنَ؟','limādhā dhahabta ilā landana?'],
['I went to study English literature.','ذَهَبْتُ لِدِرَاسَةِ الأَدَبِ الإِنْجِلِيزِيِّ.','dhahabtu li-dirāsati al-adabi al-injlīziyy.'],
['What did you study there?','مَاذَا دَرَسْتَ هُنَاكَ؟','mādhā darasta hunāka?'],
['I left London after receiving my doctorate.','تَرَكْتُ لَنْدَنَ بَعْدَ الحُصُولِ عَلَى شَهَادَةِ الدُّكْتُورَاه.','taraktu landana baʿda al-ḥuṣūli ʿalā shahādati al-duktūrāh.'],
['After returning, I became a professor at the university.','بَعْدَ رُجُوعِي أَصْبَحْتُ أُسْتَاذًا فِي الجَامِعَةِ.','baʿda rujūʿī aṣbaḥtu ustādhan fī al-jāmiʿa.'],
['I enter the library and sit with my professor.','أَدْخُلُ المَكْتَبَةَ وَأَجْلِسُ مَعَ أُسْتَاذِي.','adkhulu al-maktabata wa-ajlisu maʿa ustādhī.'],
['I read the newspapers and write a letter to my family.','أَقْرَأُ الصُّحُفَ وَأَكْتُبُ رِسَالَةً إِلَى أَهْلِي.','aqraʾu al-ṣuḥufa wa-aktubu risālatan ilā ahlī.'],
['I leave the classroom and go out of the school.','أَتْرُكُ الصَّفَّ وَأَخْرُجُ مِنَ المَدْرَسَةِ.','atruku al-ṣaffa wa-akhruju mina al-madrasa.'],
]);
const DLI_V23=dliWords(23,[
['foreign','أَجْنَبِيّ','ajnabiyy','Adjective','أَجْنَبِيَّة','أَجَانِب','أَجْنَبِيَّات'],
['friend','صَدِيق','ṣadīq','Noun','صَدِيقَة','أَصْدِقَاء','صَدِيقَات'],
['pupil','تِلْمِيذ','tilmīdh','Noun','تِلْمِيذَة','تَلَامِيذ','تِلْمِيذَات'],
['the Middle East','الشَّرْق الأَوْسَط','al-sharq al-awsaṭ','Place name','—','—','—'],
['hour','سَاعَة','sāʿa','Noun','—','سَاعَات','—'],
['year','سَنَة','sana','Noun','—','سَنَوَات','—'],
['day','يَوْم','yawm','Noun','—','أَيَّام','—'],
['political','سِيَاسِيّ','siyāsiyy','Adjective','سِيَاسِيَّة','سِيَاسِيُّون','سِيَاسِيَّات'],
['political science','العُلُوم السِّيَاسِيَّة','al-ʿulūm al-siyāsiyya','Academic field','—','—','—'],
['Arabs','عَرَب','ʿarab','Collective noun','—','—','—'],
['article','مَقَال','maqāl','Noun','—','مَقَالَات','—'],
["writing","كِتَابَة","kitāba",'Verbal noun','—','—','—'],
['I publish print','أَنْشُرُ','anshuru','Verb','—','—','—'],
['situation condition','وَضْع','waḍʿ','Noun','—','أَوْضَاع','—'],
['each of both','كُلٌّ مِنْ','kullun min','Expression','—','—','—'],
]);
const DLI_S23=dliSentences(23,[
['I went to America to study political science.','ذَهَبْتُ إِلَى أَمْرِيكَا لِدِرَاسَةِ العُلُومِ السِّيَاسِيَّةِ.','dhahabtu ilā amrīkā li-dirāsati al-ʿulūmi al-siyāsiyya.'],
['I studied at each of the two universities for one year.','دَرَسْتُ فِي كُلٍّ مِنَ الجَامِعَتَيْنِ سَنَةً وَاحِدَةً.','darastu fī kullin mina al-jāmiʿatayni sanatan wāḥida.'],
['I returned to the Middle East after receiving my degree.','رَجَعْتُ إِلَى الشَّرْقِ الأَوْسَطِ بَعْدَ حُصُولِي عَلَى الشَّهَادَةِ.','rajaʿtu ilā al-sharqi al-awsaṭi baʿda ḥuṣūlī ʿalā al-shahāda.'],
['My Arab and foreign friends study with me.','يَدْرُسُ مَعِي أَصْدِقَائِي العَرَبُ وَالأَجَانِبُ.','yadrusu maʿī aṣdiqāʾī al-ʿarabu wa-al-ajānib.'],
['I write a political article every day.','أَكْتُبُ مَقَالًا سِيَاسِيًّا كُلَّ يَوْمٍ.','aktubu maqālan siyāsiyyan kulla yawmin.'],
['I publish the article after one hour.','أَنْشُرُ المَقَالَ بَعْدَ سَاعَةٍ وَاحِدَةٍ.','anshuru al-maqāla baʿda sāʿatin wāḥida.'],
['The pupils read about the political situation.','يَقْرَأُ التَّلَامِيذُ عَنِ الوَضْعِ السِّيَاسِيِّ.','yaqraʾu al-talāmīdhu ʿani al-waḍʿi al-siyāsiyy.'],
['Writing about the Middle East is important.','الكِتَابَةُ عَنِ الشَّرْقِ الأَوْسَطِ هَامَّةٌ.','al-kitābatu ʿani al-sharqi al-awsaṭi hāmmatun.'],
]);
const DLI_V24=dliWords(24,[
['meeting','اِجْتِمَاع','ijtimāʿ','Noun','—','اِجْتِمَاعَات','—'],
['week','أُسْبُوع','usbūʿ','Noun','—','أَسَابِيع','—'],
['newspaper','صَحِيفَة','ṣaḥīfa','Noun','—','صُحُف','—'],
['political science','العُلُوم السِّيَاسِيَّة','al-ʿulūm al-siyāsiyya','Academic field','—','—','—'],
['Sunday','يَوْم الأَحَد','yawm al-aḥad','Day of week','—','—','—'],
['Monday','يَوْم الِاثْنَيْن','yawm al-ithnayn','Day of week','—','—','—'],
['Tuesday','يَوْم الثُّلَاثَاء','yawm al-thulāthāʾ','Day of week','—','—','—'],
['Wednesday','يَوْم الأَرْبِعَاء','yawm al-arbiʿāʾ','Day of week','—','—','—'],
['Thursday','يَوْم الخَمِيس','yawm al-khamīs','Day of week','—','—','—'],
['Friday','يَوْم الجُمُعَة','yawm al-jumuʿa','Day of week','—','—','—'],
['Saturday','يَوْم السَّبْت','yawm al-sabt','Day of week','—','—','—'],
]);
const DLI_S24=dliSentences(24,[
['We have three meetings this week.','عِنْدَنَا ثَلَاثَةُ اِجْتِمَاعَاتٍ هٰذَا الأُسْبُوعَ.','ʿindanā thalāthatu ijtimāʿātin hādhā al-usbūʿ.'],
['The political science meeting is on Sunday.','اِجْتِمَاعُ العُلُومِ السِّيَاسِيَّةِ يَوْمَ الأَحَدِ.','ijtimāʿu al-ʿulūmi al-siyāsiyyati yawma al-aḥad.'],
['I read the newspaper on Monday.','أَقْرَأُ الصَّحِيفَةَ يَوْمَ الِاثْنَيْنِ.','aqraʾu al-ṣaḥīfata yawma al-ithnayn.'],
['The professors meet on Tuesday and Wednesday.','يَجْتَمِعُ الأَسَاتِذَةُ يَوْمَي الثُّلَاثَاءِ وَالأَرْبِعَاءِ.','yajtamiʿu al-asātidhatu yawmay al-thulāthāʾi wa-al-arbiʿāʾ.'],
['I write my article on Thursday.','أَكْتُبُ مَقَالِي يَوْمَ الخَمِيسِ.','aktubu maqālī yawma al-khamīs.'],
['The representatives return on Friday.','يَرْجِعُ المَنْدُوبُونَ يَوْمَ الجُمُعَةِ.','yarjiʿu al-mandūbūna yawma al-jumuʿa.'],
['The newspaper publishes the results on Saturday.','تَنْشُرُ الصَّحِيفَةُ النَّتَائِجَ يَوْمَ السَّبْتِ.','tanshuru al-ṣaḥīfatu al-natāʾija yawma al-sabt.'],
['Every day of the week has important work.','فِي كُلِّ يَوْمٍ مِنَ الأُسْبُوعِ عَمَلٌ هَامٌّ.','fī kulli yawmin mina al-usbūʿi ʿamalun hāmmun.'],
]);
const DLI_V25=dliWords(25,[
['in front of','أَمَام','amāma','Preposition and adverb','—','—','—'],
['behind','وَرَاء','warāʾa','Preposition and adverb','—','—','—'],
['I begin','أَبْدَأُ','abdaʾu','Verb','—','—','—'],
['I discuss examine','أَبْحَثُ فِي','abḥathu fī','Verb phrase','—','—','—'],
['statement declaration','بَيَان','bayān','Noun','—','بَيَانَات','—'],
['ambassador','سَفِير','safīr','Noun','سَفِيرَة','سُفَرَاء','سَفِيرَات'],
['approximately almost','تَقْرِيبًا','taqrīban','Adverb','—','—','—'],
['I know recognize','أَعْرِفُ','aʿrifu','Verb','—','—','—'],
['problem','مُشْكِلَة','mushkila','Noun','—','مُشْكِلَات','—'],
]);
const DLI_S25=dliSentences(25,[
['The ambassador sits in front of the president.','يَجْلِسُ السَّفِيرُ أَمَامَ الرَّئِيسِ.','yajlisu al-safīru amāma al-raʾīs.'],
['The correspondents stand behind the ambassador.','يَقِفُ المُرَاسِلُونَ وَرَاءَ السَّفِيرِ.','yaqifu al-murāsilūna warāʾa al-safīr.'],
['I begin the meeting at approximately ten.','أَبْدَأُ الِاجْتِمَاعَ فِي السَّاعَةِ العَاشِرَةِ تَقْرِيبًا.','abdaʾu al-ijtimāʿa fī al-sāʿati al-ʿāshirata taqrīban.'],
['I discuss the political problem with the representatives.','أَبْحَثُ فِي المُشْكِلَةِ السِّيَاسِيَّةِ مَعَ المَنْدُوبِينَ.','abḥathu fī al-mushkilati al-siyāsiyyati maʿa al-mandūbīn.'],
['The government publishes an important statement.','تَنْشُرُ الحُكُومَةُ بَيَانًا هَامًّا.','tanshuru al-ḥukūmatu bayānan hāmman.'],
['I know the Iraqi ambassador.','أَعْرِفُ السَّفِيرَ العِرَاقِيَّ.','aʿrifu al-safīra al-ʿirāqiyy.'],
['Is the problem in front of us or behind us?','هَلِ المُشْكِلَةُ أَمَامَنَا أَمْ وَرَاءَنَا؟','hali al-mushkilatu amāmanā am warāʾanā?'],
['After the statement, we begin discussing the results.','بَعْدَ البَيَانِ نَبْدَأُ بَحْثَ النَّتَائِجِ.','baʿda al-bayāni nabdaʾu baḥtha al-natāʾij.'],
]);
const DLI_V26=dliWords(26,[
['Mr sir','السَّيِّد','al-sayyid','Title','السَّيِّدَة','—','—'],
['Mrs madam','السَّيِّدَة','al-sayyida','Title','—','—','—'],
['Miss','الآنِسَة','al-ānisa','Title','—','آنِسَات','—'],
['history','تَارِيخ','tārīkh','Noun','—','تَوَارِيخ','—'],
["teaching","تَدْرِيس","tadrīs",'Verbal noun','—','—','—'],
['I teach','أُدَرِّسُ','udarrisu','Verb','—','—','—'],
["reminder of","تَذْكِير بِـ","tadhkīr bi-",'Verbal noun phrase','—','—','—'],
['I remind of','أُذَكِّرُ بِـ','udhakkiru bi-','Verb phrase','—','—','—'],
["introduction to","تَعْرِيف بِـ","taʿrīf bi-",'Verbal noun phrase','—','—','—'],
['I introduce to','أُعَرِّفُ بِـ','uʿarrifu bi-','Verb phrase','—','—','—'],
['good well','جَيِّد','jayyid','Adjective','جَيِّدَة','جَيِّدُون','جَيِّدَات'],
['I enter','أَدْخُلُ','adkhulu','Verb','—','—','—'],
['question','سُؤَال','suʾāl','Noun','—','أَسْئِلَة','—'],
]);
const DLI_S26=dliSentences(26,[
['Who is this gentleman?','مَنْ هٰذَا السَّيِّدُ؟','man hādhā al-sayyidu?'],
['This lady is the history professor.','هٰذِهِ السَّيِّدَةُ أُسْتَاذَةُ التَّارِيخِ.','hādhihi al-sayyidatu ustādhatu al-tārīkh.'],
['The young lady teaches at the university.','الآنِسَةُ تُدَرِّسُ فِي الجَامِعَةِ.','al-ānisatu tudarrisu fī al-jāmiʿa.'],
['I teach Arab history.','أُدَرِّسُ التَّارِيخَ العَرَبِيَّ.','udarrisu al-tārīkha al-ʿarabiyy.'],
['I enter the classroom and ask a question.','أَدْخُلُ الصَّفَّ وَأَسْأَلُ سُؤَالًا.','adkhulu al-ṣaffa wa-asʾalu suʾālan.'],
['I introduce the students to the new professor.','أُعَرِّفُ الطُّلَّابَ بِالأُسْتَاذِ الجَدِيدِ.','uʿarrifu al-ṭullāba bi-al-ustādhi al-jadīd.'],
['I remind them of tomorrow\'s meeting.','أُذَكِّرُهُمْ بِاجْتِمَاعِ الغَدِ.','udhakkiruhum bi-ijtimāʿi al-ghad.'],
['Her teaching is very good.','تَدْرِيسُهَا جَيِّدٌ جِدًّا.','tadrīsuhā jayyidun jiddan.'],
]);
const DLI_V27=dliWords(27,[
['antiquities ruins','آثَار','āthār','Noun','—','—','—'],
['palace','قَصْر','qaṣr','Noun','—','قُصُور','—'],
['telephone','تِلِفُون','tilifūn','Noun','—','تِلِفُونَات','—'],
['former previous','سَابِق','sābiq','Adjective','سَابِقَة','سَابِقُون','سَابِقَات'],
['I travel','أُسَافِرُ','usāfiru','Verb','—','—','—'],
['I see watch','أُشَاهِدُ','ushāhidu','Verb','—','—','—'],
['I understand','أَفْهَمُ','afhamu','Verb','—','—','—'],
['I meet','أُقَابِلُ','uqābilu','Verb','—','—','—'],
['I help with','أُسَاعِدُ عَلَى','usāʿidu ʿalā','Verb phrase','—','—','—'],
['I converse with','أُحَادِثُ','uḥādithu','Verb','—','—','—'],
['I correspond with','أُكَاتِبُ','ukātibu','Verb','—','—','—'],
["socializing companionship","مُجَالَسَة","mujālasa",'Verbal noun','—','—','—'],
["conversation","مُحَادَثَة","muḥādatha",'Verbal noun','—','—','—'],
["assistance","مُسَاعَدَة","musāʿada",'Verbal noun','—','—','—'],
["viewing sightseeing","مُشَاهَدَة","mushāhada",'Verbal noun','—','—','—'],
["meeting interview","مُقَابَلَة","muqābala",'Verbal noun','—','—','—'],
]);
const DLI_S27=dliSentences(27,[
['Did you travel to Egypt for study or tourism?','هَلْ سَافَرْتَ إِلَى مِصْرَ لِلدِّرَاسَةِ أَمْ لِلسِّيَاحَةِ؟','hal sāfarta ilā miṣra li-al-dirāsati am li-al-siyāḥa?'],
['I traveled for tourism and saw the ancient Egyptian ruins.','سَافَرْتُ لِلسِّيَاحَةِ وَشَاهَدْتُ الآثَارَ المِصْرِيَّةَ القَدِيمَةَ.','sāfartu li-al-siyāḥati wa-shāhadtu al-āthāra al-miṣriyyata al-qadīma.'],
['I also saw the former king\'s palace.','وَشَاهَدْتُ أَيْضًا قَصْرَ المَلِكِ السَّابِقِ.','wa-shāhadtu ayḍan qaṣra al-maliki al-sābiq.'],
['Did you meet the American ambassador?','هَلْ قَابَلْتَ السَّفِيرَ الأَمْرِيكِيَّ؟','hal qābalta al-safīra al-amrīkiyy?'],
['No, I spoke with him by telephone.','لَا، حَادَثْتُهُ بِالتِّلِفُونِ.','lā, ḥādath-tuhu bi-al-tilifūn.'],
['I correspond with my Egyptian friends.','أُكَاتِبُ أَصْدِقَائِي المِصْرِيِّينَ.','ukātibu aṣdiqāʾī al-miṣriyyīn.'],
['Conversation helps me understand Arabic.','المُحَادَثَةُ تُسَاعِدُنِي عَلَى فَهْمِ العَرَبِيَّةِ.','al-muḥādathatu tusāʿidunī ʿalā fahmi al-ʿarabiyya.'],
['I enjoy sightseeing and meeting new friends.','أَتَمَتَّعُ بِمُشَاهَدَةِ الآثَارِ وَمُقَابَلَةِ أَصْدِقَاءَ جُدُدٍ.','atamattaʿu bi-mushāhadati al-āthāri wa-muqābalati aṣdiqāʾa judud.'],
]);
const DLI_V28=dliWords(28,[
["liberation","تَحْرِير","taḥrīr",'Verbal noun','—','—','—'],
['woman','مَرْأَة','marʾa','Noun','—','نِسَاء','—'],
['women\'s liberation','تَحْرِير المَرْأَة','taḥrīr al-marʾa','Compound expression','—','—','—'],
['state province','وِلَايَة','wilāya','Noun','—','وِلَايَات','—'],
['the United States','الوِلَايَات المُتَّحِدَة','al-wilāyāt al-muttaḥida','Place name','—','—','—'],
]);
const DLI_S28=dliSentences(28,[
['Did you attend the women\'s liberation conference this week?','هَلْ حَضَرْتَ مُؤْتَمَرَ تَحْرِيرِ المَرْأَةِ هٰذَا الأُسْبُوعَ؟','hal ḥaḍarta muʾtamara taḥrīri al-marʾati hādhā al-usbūʿ?'],
['Yes, more than twenty correspondents attended.','نَعَمْ، حَضَرَهُ أَكْثَرُ مِنْ عِشْرِينَ مُرَاسِلًا.','naʿam, ḥaḍarahu aktharu min ʿishrīna murāsilan.'],
['Five of them were from foreign countries.','كَانَ خَمْسَةٌ مِنْهُمْ مِنْ دُوَلٍ أَجْنَبِيَّةٍ.','kāna khamsatun minhum min duwalin ajnabiyya.'],
['Ninety female representatives attended the meeting.','حَضَرَتِ الِاجْتِمَاعَ تِسْعُونَ مَنْدُوبَةً.','ḥaḍarati al-ijtimāʿa tisʿūna mandūbatan.'],
['They came from the fifty states of America.','جِئْنَ مِنْ وِلَايَاتِ أَمْرِيكَا الخَمْسِينَ.','jiʾna min wilāyāti amrīkā al-khamsīn.'],
['The newspapers published the conference results.','نَشَرَتِ الصُّحُفُ نَتَائِجَ المُؤْتَمَرِ.','nasharati al-ṣuḥufu natāʾija al-muʾtamar.'],
['Most of them were American.','أَكْثَرُهَا أَمْرِيكِيَّةٌ.','aktharuhā amrīkiyyatun.'],
['The United States has fifty states.','فِي الوِلَايَاتِ المُتَّحِدَةِ خَمْسُونَ وِلَايَةً.','fī al-wilāyāti al-muttaḥidati khamsūna wilāyatan.'],
]);
const DLI_V29=dliWords(29,[
['son','اِبْن','ibn','Noun','اِبْنَة','أَبْنَاء','بَنَات'],
['girl daughter','بِنْت','bint','Noun','—','بَنَات','—'],
['boy son','وَلَد','walad','Noun','—','أَوْلَاد','—'],
['lesson','دَرْس','dars','Noun','—','دُرُوس','—'],
['reason cause','سَبَب','sabab','Noun','—','أَسْبَاب','—'],
['year','سَنَة','sana','Noun','—','سَنَوَات','—'],
['half','نِصْف','niṣf','Noun','—','أَنْصَاف','—'],
['France','فَرَنْسَا','faransā','Place name','—','—','—'],
['better best','أَحْسَن','aḥsan','Comparative and superlative','—','—','—'],
['I seat someone','أُجْلِسُ','ujlisu','Causative verb','—','—','—'],
['I bring','أُحْضِرُ','uḥḍiru','Causative verb','—','—','—'],
['I remove send out','أُخْرِجُ','ukhriju','Causative verb','—','—','—'],
['I admit bring in','أُدْخِلُ','udkhilu','Causative verb','—','—','—'],
['I make someone understand','أُفَهِّمُ','ufahhimu','Causative verb','—','—','—'],
['I complete finish','أُكْمِلُ','ukmilu','Verb','—','—','—'],
["bringing","إِحْضَار","iḥḍār",'Verbal noun','—','—','—'],
["removal sending out","إِخْرَاج","ikhrāj",'Verbal noun','—','—','—'],
["admission bringing in","إِدْخَال","idkhāl",'Verbal noun','—','—','—'],
["completion","إِكْمَال","ikmāl",'Verbal noun','—','—','—'],
['I understand','أَفْهَمُ','afhamu','Verb','—','—','—'],
["understanding","فَهْم","fahm",'Verbal noun','—','—','—'],
]);
const DLI_S29=dliSentences(29,[
['Into which university did you enroll your son?','أَيَّ جَامِعَةٍ أَدْخَلْتَ ابْنَكَ؟','ayya jāmiʿatin adkhalta ibnaka?'],
['I enrolled him in the American University.','أَدْخَلْتُهُ الجَامِعَةَ الأَمْرِيكِيَّةَ.','adkhaltuhu al-jāmiʿata al-amrīkiyya.'],
['That university is better for English literature.','تِلْكَ الجَامِعَةُ أَحْسَنُ لِدِرَاسَةِ الأَدَبِ الإِنْجِلِيزِيِّ.','tilka al-jāmiʿatu aḥsanu li-dirāsati al-adabi al-injlīziyy.'],
['I explained the reason to my son.','فَهَّمْتُ ابْنِي السَّبَبَ.','fahhamtu ibnī al-sababa.'],
['I seat the boy behind the ambassador.','أُجْلِسُ الوَلَدَ وَرَاءَ السَّفِيرِ.','ujlisu al-walada warāʾa al-safīr.'],
['I bring the books to the classroom.','أُحْضِرُ الكُتُبَ إِلَى الصَّفِّ.','uḥḍiru al-kutuba ilā al-ṣaff.'],
['I remove the students from the meeting.','أُخْرِجُ الطُّلَّابَ مِنَ الِاجْتِمَاعِ.','ukhriju al-ṭullāba mina al-ijtimāʿ.'],
['I complete the lessons after three years in France.','أُكْمِلُ الدُّرُوسَ بَعْدَ ثَلَاثِ سَنَوَاتٍ فِي فَرَنْسَا.','ukmilu al-durūsa baʿda thalāthi sanawātin fī faransā.'],
['I understand half of the lesson.','أَفْهَمُ نِصْفَ الدَّرْسِ.','afhamu niṣfa al-dars.'],
]);
const DLI_V30=dliWords(30,[
['I talk with to','أَتَحَدَّثُ مَعَ / إِلَى','ataḥaddathu maʿa / ilā','Verb phrase','—','—','—'],
['I speak with','أَتَكَلَّمُ مَعَ','atakallamu maʿa','Verb phrase','—','—','—'],
['I remember','أَتَذَكَّرُ','atadhakkaru','Verb','—','—','—'],
['I submit apply for','أَتَقَدَّمُ بِـ','ataqaddamu bi-','Verb phrase','—','—','—'],
['I decide','أُقَرِّرُ','uqarriru','Verb','—','—','—'],
['I enjoy','أَتَمَتَّعُ بِـ','atamattaʿu bi-','Verb phrase','—','—','—'],
['I set appoint','أُحَدِّدُ','uḥaddidu','Verb','—','—','—'],
['it is set scheduled','يَتَحَدَّدُ','yataḥaddadu','Passive or reflexive verb','—','—','—'],
['appointment','مَوْعِد','mawʿid','Noun','—','مَوَاعِيد','—'],
['secretary','سِكْرِتِير','sikritīr','Noun','سِكْرِتِيرَة','سِكْرِتِيرُون','سِكْرِتِيرَات'],
['request application','طَلَب','ṭalab','Noun','—','طَلَبَات','—'],
['foreign minister','وَزِير الخَارِجِيَّة','wazīr al-khārijiyya','Compound noun','—','وُزَرَاء الخَارِجِيَّة','—'],
['next upcoming','قَادِم','qādim','Adjective','قَادِمَة','قَادِمُون','قَادِمَات'],
['good evening','مَسَاء الخَيْر','masāʾ al-khayr','Greeting','—','—','—'],
['good evening response','مَسَاء النُّور','masāʾ al-nūr','Greeting response','—','—','—'],
['I introduce present','أُقَدِّمُ','uqaddimu','Verb','—','—','—'],
['I teach','أُعَلِّمُ','uʿallimu','Verb','—','—','—'],
]);
const DLI_S30=dliSentences(30,[
['Good evening.','مَسَاء الخَيْر.','masāʾ al-khayr.'],
['Good evening to you too.','مَسَاء النُّور.','masāʾ al-nūr.'],
['Did you speak with the foreign minister?','هَلْ تَحَدَّثْتَ مَعَ وَزِيرِ الخَارِجِيَّةِ؟','hal taḥaddathta maʿa wazīri al-khārijiyya?'],
['No, I spoke with his secretary by telephone.','لَا، تَكَلَّمْتُ مَعَ سِكْرِتِيرِهِ بِالتِّلِفُونِ.','lā, takallamtu maʿa sikritīrihi bi-al-tilifūn.'],
['I submitted a request to meet him.','تَقَدَّمْتُ بِطَلَبٍ لِمُقَابَلَتِهِ.','taqaddamtu bi-ṭalabin li-muqābalatihi.'],
['The appointment is set for next week.','يَتَحَدَّدُ المَوْعِدُ فِي الأُسْبُوعِ القَادِمِ.','yataḥaddadu al-mawʿidu fī al-usbūʿi al-qādim.'],
['I remember every meeting appointment.','أَتَذَكَّرُ مَوْعِدَ كُلِّ اجْتِمَاعٍ.','atadhakkaru mawʿida kulli ijtimāʿ.'],
['I introduce my wife to the ambassador.','أُقَدِّمُ زَوْجَتِي إِلَى السَّفِيرِ.','uqaddimu zawjatī ilā al-safīr.'],
['I decide to travel and enjoy seeing the antiquities.','أُقَرِّرُ أَنْ أُسَافِرَ وَأَتَمَتَّعَ بِمُشَاهَدَةِ الآثَارِ.','uqarriru an usāfira wa-atamattaʿa bi-mushāhadati al-āthār.'],
['I teach Arabic and speak with every student.','أُعَلِّمُ اللُّغَةَ العَرَبِيَّةَ وَأَتَحَدَّثُ مَعَ كُلِّ طَالِبٍ.','uʿallimu al-lughata al-ʿarabiyyata wa-ataḥaddathu maʿa kulli ṭālib.'],
]);
const DLI_V31=dliWords(31,[
['Congress','الكُونْغْرِس','al-kūnghris','Institution','—','—','—'],
['council assembly','مَجْلِس','majlis','Noun','—','مَجَالِس','—'],
['Senate','مَجْلِس الشُّيُوخ','majlis al-shuyūkh','Institution','—','—','—'],
['House of Representatives','مَجْلِس النُّوَّاب','majlis al-nuwwāb','Institution','—','—','—'],
['Council of Ministers cabinet','مَجْلِس الوُزَرَاء','majlis al-wuzarāʾ','Institution','—','—','—'],
['White House','البَيْت الأَبْيَض','al-bayt al-abyaḍ','Place name','—','—','—'],
['member','عُضْو','ʿuḍw','Noun','—','أَعْضَاء','—'],
['representative deputy','نَائِب','nāʾib','Noun','نَائِبَة','نُوَّاب','نَائِبَات'],
['budget','مِيزَانِيَّة','mīzāniyya','Noun','—','مِيزَانِيَّات','—'],
['Palestine','فِلَسْطِين','filasṭīn','Place name','—','—','—'],
['concerning about','بِشَأْن','bi-shaʾn','Preposition','—','—','—'],
['but','لٰكِنْ','lākin','Conjunction','—','—','—'],
['I confer discuss mutually','أَتَبَاحَثُ','atabāḥathu','Reciprocal verb','—','—','—'],
['I converse','أَتَحَدَّثُ','ataḥaddathu','Verb','—','—','—'],
['I quarrel','أَتَخَاصَمُ','atakhāṣamu','Reciprocal verb','—','—','—'],
['I reach an understanding','أَتَفَاهَمُ','atafāhamu','Reciprocal verb','—','—','—'],
['I meet','أَتَقَابَلُ','ataqābalu','Reciprocal verb','—','—','—'],
['I correspond','أَتَكَاتَبُ','atakātabu','Reciprocal verb','—','—','—'],
['I approve ratify','أُصَادِقُ عَلَى','uṣādiqu ʿalā','Verb phrase','—','—','—'],
]);
const DLI_S31=dliSentences(31,[
['The members of Congress discuss the budget.','يَتَبَاحَثُ أَعْضَاءُ الكُونْغْرِسِ بِشَأْنِ المِيزَانِيَّةِ.','yatabāḥathu aʿḍāʾu al-kūnghrisi bi-shaʾni al-mīzāniyya.'],
['The Senate and the House of Representatives meet today.','يَتَقَابَلُ مَجْلِسُ الشُّيُوخِ وَمَجْلِسُ النُّوَّابِ اليَوْمَ.','yataqābalu majlisu al-shuyūkhi wa-majlisu al-nuwwābi al-yawm.'],
['The representatives approve the new budget.','يُصَادِقُ النُّوَّابُ عَلَى المِيزَانِيَّةِ الجَدِيدَةِ.','yuṣādiqu al-nuwwābu ʿalā al-mīzāniyyati al-jadīda.'],
['I speak with a member of the Council of Ministers.','أَتَحَدَّثُ مَعَ عُضْوٍ فِي مَجْلِسِ الوُزَرَاءِ.','ataḥaddathu maʿa ʿuḍwin fī majlisi al-wuzarāʾ.'],
['The two representatives quarrel, but then reach an understanding.','يَتَخَاصَمُ النَّائِبَانِ وَلٰكِنَّهُمَا يَتَفَاهَمَانِ بَعْدَ ذٰلِكَ.','yatakhāṣamu al-nāʾibāni wa-lākinnahumā yatafāhamāni baʿda dhālik.'],
['The president meets the members at the White House.','يَتَقَابَلُ الرَّئِيسُ مَعَ الأَعْضَاءِ فِي البَيْتِ الأَبْيَضِ.','yataqābalu al-raʾīsu maʿa al-aʿḍāʾi fī al-bayti al-abyaḍ.'],
['We correspond concerning Palestine.','نَتَكَاتَبُ بِشَأْنِ فِلَسْطِينَ.','natakātabu bi-shaʾni filasṭīn.'],
['I confer with the representative about the council meeting.','أَتَبَاحَثُ مَعَ النَّائِبِ بِشَأْنِ اجْتِمَاعِ المَجْلِسِ.','atabāḥathu maʿa al-nāʾibi bi-shaʾni ijtimāʿi al-majlis.'],
]);
const DLI_V32=dliWords(32,[
["withdrawal","اِنْسِحَاب","insiḥāb",'Verbal noun','—','—','—'],
['I withdraw','أَنْسَحِبُ','ansaḥibu','Verb','—','—','—'],
["departure leaving","اِنْصِرَاف","inṣirāf",'Verbal noun','—','—','—'],
['I depart leave','أَنْصَرِفُ','anṣarifu','Verb','—','—','—'],
["convening","اِنْعِقَاد","inʿiqād",'Verbal noun','—','—','—'],
['it convenes','يَنْعَقِدُ','yanʿaqidu','Verb','—','—','—'],
['session','جَلْسَة','jalsa','Noun','—','جَلَسَات','—'],
['hall','قَاعَة','qāʿa','Noun','—','قَاعَات','—'],
['organization body','هَيْئَة','hayʾa','Noun','—','هَيْئَات','—'],
['United Nations','هَيْئَة الأُمَم المُتَّحِدَة','hayʾat al-umam al-muttaḥida','Organization','—','—','—'],
['people nation','شَعْب','shaʿb','Noun','—','شُعُوب','—'],
['secret confidential','سِرِّيّ','sirriyy','Adjective','سِرِّيَّة','—','—'],
['I withdraw something','أَسْحَبُ','asḥabu','Verb','—','—','—'],
['it opens','يَنْفَتِحُ','yanfatiḥu','Verb','—','—','—'],
['it is written','يَنْكَتِبُ','yankatibu','Verb','—','—','—'],
['it breaks','يَنْكَسِرُ','yankasiru','Verb','—','—','—'],
['I spend dismiss','أَصْرِفُ','aṣrifu','Verb','—','—','—'],
['I convene hold','أَعْقِدُ','aʿqidu','Verb','—','—','—'],
['I open','أَفْتَحُ','aftaḥu','Verb','—','—','—'],
['I break','أَكْسِرُ','aksiru','Verb','—','—','—'],
]);
const DLI_S32=dliSentences(32,[
['Egypt submitted a request to the United Nations.','قَدَّمَتْ مِصْرُ طَلَبًا إِلَى هَيْئَةِ الأُمَمِ المُتَّحِدَةِ.','qaddamat miṣru ṭalaban ilā hayʾati al-umami al-muttaḥida.'],
['A special session convened yesterday morning.','اِنْعَقَدَتْ جَلْسَةٌ خَاصَّةٌ صَبَاحَ أَمْسِ.','inʿaqadat jalsatun khāṣṣatun ṣabāḥa amsi.'],
['Many representatives withdrew from the meeting.','اِنْسَحَبَ مُنْدُوبُونَ كَثِيرُونَ مِنَ الِاجْتِمَاعِ.','insaḥaba mandūbūna kathīrūna mina al-ijtimāʿ.'],
['A secret session will convene next week.','سَتَنْعَقِدُ جَلْسَةٌ سِرِّيَّةٌ فِي الأُسْبُوعِ القَادِمِ.','satanʿaqidu jalsatun sirriyyatun fī al-usbūʿi al-qādim.'],
['The representatives depart before the session ends.','يَنْصَرِفُ المَنْدُوبُونَ قَبْلَ انْتِهَاءِ الجَلْسَةِ.','yanṣarifu al-mandūbūna qabla intihāʾi al-jalsa.'],
['I open the door of the conference hall.','أَفْتَحُ بَابَ قَاعَةِ المُؤْتَمَرِ.','aftaḥu bāba qāʿati al-muʾtamar.'],
['The pen breaks while the article is being written.','يَنْكَسِرُ القَلَمُ عِنْدَمَا يَنْكَتِبُ المَقَالُ.','yankasiru al-qalamu ʿindamā yankatibu al-maqāl.'],
['The country withdraws its soldiers after the people\'s request.','تَسْحَبُ الدَّوْلَةُ جُنُودَهَا بَعْدَ طَلَبِ الشَّعْبِ.','tasḥabu al-dawlatu junūdahā baʿda ṭalabi al-shaʿb.'],
]);
const DLI_V33=dliWords(33,[
['I begin with','أَبْتَدِئُ بِـ','abtadiʾu bi-','Verb phrase','—','—','—'],
['I meet with','أَجْتَمِعُ بِـ','ajtamiʿu bi-','Verb phrase','—','—','—'],
['I receive','أَسْتَلِمُ','astalimu','Verb','—','—','—'],
["listening","اِسْتِمَاع","istimāʿ",'Verbal noun','—','—','—'],
['I listen to','أَسْتَمِعُ إِلَى','astamiʿu ilā','Verb phrase','—','—','—'],
['I participate in','أَشْتَرِكُ فِي','ashtariku fī','Verb phrase','—','—','—'],
['I work','أَشْتَغِلُ','ashtagilu','Verb','—','—','—'],
['I criticize','أَنْتَقِدُ','antaqidu','Verb','—','—','—'],
["transfer relocation","اِنْتِقَال","intiqāl",'Verbal noun','—','—','—'],
['I move relocate','أَنْتَقِلُ','antaqilu','Verb','—','—','—'],
['I transfer something','أَنْقُلُ','anqulu','Verb','—','—','—'],
['war','حَرْب','ḥarb','Noun','—','حُرُوب','—'],
['First World War','الحَرْب العَالَمِيَّة الأُولَى','al-ḥarb al-ʿālamiyya al-ūlā','Historical event','—','—','—'],
['politics policy','سِيَاسَة','siyāsa','Noun','—','سِيَاسَات','—'],
['lecture','مُحَاضَرَة','muḥāḍara','Noun','—','مُحَاضَرَات','—'],
['discussion','مُنَاقَشَة','munāqasha','Noun','—','مُنَاقَشَات','—'],
['vice president of the republic','نَائِب رَئِيس الجُمْهُورِيَّة','nāʾib raʾīs al-jumhūriyya','Compound noun','—','—','—'],
['I hear','أَسْمَعُ','asmaʿu','Verb','—','—','—'],
['I kill','أَقْتُلُ','aqtulu','Verb','—','—','—'],
]);
const DLI_S33=dliSentences(33,[
['I listened to an important lecture about the war.','اِسْتَمَعْتُ إِلَى مُحَاضَرَةٍ هَامَّةٍ عَنِ الحَرْبِ.','istamaʿtu ilā muḥāḍaratin hāmmatin ʿani al-ḥarb.'],
['Many students participated in the discussion.','اِشْتَرَكَ طُلَّابٌ كَثِيرُونَ فِي المُنَاقَشَةِ.','ishtaraku ṭullābun kathīrūna fī al-munāqasha.'],
['The journalist criticized the government\'s policy.','اِنْتَقَدَ الصَّحَفِيُّ سِيَاسَةَ الحُكُومَةِ.','intaqada al-ṣaḥafiyyu siyāsata al-ḥukūma.'],
['I begin the lecture with a discussion of the First World War.','أَبْتَدِئُ المُحَاضَرَةَ بِمُنَاقَشَةِ الحَرْبِ العَالَمِيَّةِ الأُولَى.','abtadiʾu al-muḥāḍarata bi-munāqashati al-ḥarbi al-ʿālamiyyati al-ūlā.'],
['The prime minister meets with the journalists.','يَجْتَمِعُ رَئِيسُ الوُزَرَاءِ بِالصَّحَفِيِّينَ.','yajtamiʿu raʾīsu al-wuzarāʾi bi-al-ṣaḥafiyyīn.'],
['I received three letters after moving to Baghdad.','اِسْتَلَمْتُ ثَلَاثَ رَسَائِلَ بَعْدَ انْتِقَالِي إِلَى بَغْدَادَ.','istalamtu thalātha rasāʾila baʿda intiqālī ilā baghdād.'],
['I work in Cairo and transfer my books to my new office.','أَشْتَغِلُ فِي القَاهِرَةِ وَأَنْقُلُ كُتُبِي إِلَى مَكْتَبِي الجَدِيدِ.','ashtagilu fī al-qāhirati wa-anqulu kutubī ilā maktabī al-jadīd.'],
['The vice president heard about the political conference.','سَمِعَ نَائِبُ رَئِيسِ الجُمْهُورِيَّةِ عَنِ المُؤْتَمَرِ السِّيَاسِيِّ.','samiʿa nāʾibu raʾīsi al-jumhūriyyati ʿani al-muʾtamari al-siyāsiyy.'],
]);
const DLI_V34=dliWords(34,[
["retrieval recovery","اِسْتِرْجَاع","istirjāʿ",'Verbal noun','—','—','—'],
["inquiry","اِسْتِفْهَام","istifhām",'Verbal noun','—','—','—'],
['I inquire about','أَسْتَفْهِمُ عَنْ','astafhimu ʿan','Verb phrase','—','—','—'],
["reception","اِسْتِقْبَال","istiqbāl",'Verbal noun','—','—','—'],
['I receive welcome','أَسْتَقْبِلُ','astaqbilu','Verb','—','—','—'],
["enjoyment","اِسْتِمْتَاع","istimtāʿ",'Verbal noun','—','—','—'],
['I enjoy','أَسْتَمْتِعُ بِـ','astamtiʿu bi-','Verb phrase','—','—','—'],
["disapproval","اِسْتِنْكَار","istinkār",'Verbal noun','—','—','—'],
['I condemn disapprove of','أَسْتَنْكِرُ','astankiru','Verb','—','—','—'],
['I wake up','أَسْتَيْقِظُ','astayqiẓu','Verb','—','—','—'],
['I wake someone','أُوقِظُ','ūqiẓu','Verb','—','—','—'],
['party ceremony','حَفْل','ḥafl','Noun','—','حَفْلَات','—'],
['reception','حَفْل اِسْتِقْبَال','ḥafl istiqbāl','Compound noun','—','—','—'],
['visit','زِيَارَة','ziyāra','Noun','—','زِيَارَات','—'],
['aim purpose','غَايَة','ghāya','Noun','—','غَايَات','—'],
['the purpose of','الغَايَة مِنْ','al-ghāya min','Expression','—','—','—'],
['airport','مَطَار','maṭār','Noun','—','مَطَارَات','—'],
['minister of education','وَزِير التَّرْبِيَة وَالتَّعْلِيم','wazīr al-tarbiya wa-al-taʿlīm','Compound noun','—','—','—'],
['United Arab Republic','الجُمْهُورِيَّة العَرَبِيَّة المُتَّحِدَة','al-jumhūriyya al-ʿarabiyya al-muttaḥida','Historical state name','—','—','—'],
]);
const DLI_S34=dliSentences(34,[
['Why did the minister of education come to America?','لِمَاذَا حَضَرَ وَزِيرُ التَّرْبِيَةِ وَالتَّعْلِيمِ إِلَى أَمْرِيكَا؟','limādhā ḥaḍara wazīru al-tarbiyati wa-al-taʿlīmi ilā amrīkā?'],
['He came to visit the American universities.','حَضَرَ لِزِيَارَةِ الجَامِعَاتِ الأَمْرِيكِيَّةِ.','ḥaḍara li-ziyārati al-jāmiʿāti al-amrīkiyya.'],
['The ambassador and journalists welcomed him at the airport.','اِسْتَقْبَلَهُ السَّفِيرُ وَالصَّحَفِيُّونَ فِي المَطَارِ.','istaqbalahu al-safīru wa-al-ṣaḥafiyyūna fī al-maṭār.'],
['Many students attended the reception.','حَضَرَ طُلَّابٌ كَثِيرُونَ حَفْلَ الِاسْتِقْبَالِ.','ḥaḍara ṭullābun kathīrūna ḥafla al-istiqbāl.'],
['I inquire about the purpose of the visit.','أَسْتَفْهِمُ عَنِ الغَايَةِ مِنَ الزِّيَارَةِ.','astafhimu ʿani al-ghāyati mina al-ziyāra.'],
['I enjoyed visiting the university.','اِسْتَمْتَعْتُ بِزِيَارَةِ الجَامِعَةِ.','istamtaʿtu bi-ziyārati al-jāmiʿa.'],
['I wake up early and wake my wife before going to the airport.','أَسْتَيْقِظُ مُبَكِّرًا وَأُوقِظُ زَوْجَتِي قَبْلَ الذَّهَابِ إِلَى المَطَارِ.','astayqiẓu mubakkiran wa-ūqiẓu zawjatī qabla al-dhahābi ilā al-maṭār.'],
['The government expressed disapproval after the meeting.','أَعْرَبَتِ الحُكُومَةُ عَنِ الِاسْتِنْكَارِ بَعْدَ الِاجْتِمَاعِ.','aʿrabati al-ḥukūmatu ʿani al-istinkāri baʿda al-ijtimāʿ.'],
]);
const DLI_V35=dliWords(35,[
['foreigner foreign','أَجْنَبِيّ','ajnabiyy','fem. أَجْنَبِيَّة','—','أَجَانِب','—'],
['man','رَجُل','rajul','Noun','—','رِجَال','—'],
['week','أُسْبُوع','usbūʿ','Noun','—','أَسَابِيع','—'],
['notebook','دَفْتَر','daftar','Noun','—','دَفَاتِر','—'],
['letter','رِسَالَة','risāla','Noun','—','رَسَائِل','—'],
['window','شُبَّاك','shubbāk','Noun','—','شَبَابِيك','—'],
['cup','فِنْجَان','finjān','Noun','—','فَنَاجِين','—'],
['key','مِفْتَاح','miftāḥ','Noun','—','مَفَاتِيح','—'],
['handkerchief','مَنْدِيل','mandīl','Noun','—','مَنَادِيل','—'],
['school','مَدْرَسَة','madrasa','Noun','—','مَدَارِس','—'],
['office','مَكْتَب','maktab','Noun','—','مَكَاتِب','—'],
['problem','مُشْكِلَة','mushkila','Noun','—','مُشْكِلَات','—'],
['easy','سَهْل','sahl','fem. سَهْلَة','—','سَهْلُون','سَهْلَات'],
['difficult','صَعْب','ṣaʿb','fem. صَعْبَة','—','صِعَاب','صَعْبَات'],
['small young junior','صَغِير','ṣaghīr','fem. صَغِيرَة','—','صِغَار','صَغِيرَات'],
['tall long','طَوِيل','ṭawīl','fem. طَوِيلَة','—','طِوَال','طَوِيلَات'],
['few','قَلِيل','qalīl','fem. قَلِيلَة','—','قَلَائِل','—'],
['big old senior','كَبِير','kabīr','fem. كَبِيرَة','—','كِبَار','كَبِيرَات'],
]);
const DLI_S35=dliSentences(35,[
['The foreign minister traveled to the Middle East.','سَافَرَ وَزِيرُ الخَارِجِيَّةِ إِلَى الشَّرْقِ الأَوْسَطِ.','sāfara wazīru al-khārijiyyati ilā al-sharqi al-awsaṭ.'],
['He discussed difficult problems with government officials.','بَحَثَ مُشْكِلَاتٍ صَعْبَةً مَعَ رِجَالِ الحُكُومَةِ.','baḥatha mushkilātin ṣaʿbatan maʿa rijāli al-ḥukūma.'],
['Few foreign journalists attended the conference.','حَضَرَ المُؤْتَمَرَ صَحَفِيُّونَ أَجَانِبُ قَلَائِلُ.','ḥaḍara al-muʾtamara ṣaḥafiyyūna ajānibu qalāʾilu.'],
['These notebooks contain long letters.','هٰذِهِ الدَّفَاتِرُ فِيهَا رَسَائِلُ طَوِيلَةٌ.','hādhihi al-dafātiru fīhā rasāʾilu ṭawīlatun.'],
['The large hall has ten windows.','فِي القَاعَةِ الكَبِيرَةِ عَشَرَةُ شَبَابِيكَ.','fī al-qāʿati al-kabīrati ʿasharatu shabābīka.'],
['The small keys are on the office table.','المَفَاتِيحُ الصَّغِيرَةُ عَلَى طَاوِلَةِ المَكْتَبِ.','al-mafātīḥu al-ṣaghīratu ʿalā ṭāwilati al-maktab.'],
['There are three cups and some handkerchiefs.','هُنَاكَ ثَلَاثَةُ فَنَاجِينَ وَبَعْضُ المَنَادِيلِ.','hunāka thalāthatu fanājīna wa-baʿḍu al-manādīl.'],
['The schools will open after two weeks.','سَتَنْفَتِحُ المَدَارِسُ بَعْدَ أُسْبُوعَيْنِ.','satanfatiḥu al-madārisu baʿda usbūʿayn.'],
]);
const DLI_V36=dliWords(36,[
["admiration","إِعْجَاب","iʿjāb",'Verbal noun','—','—','—'],
['summer','صَيْف','ṣayf','Noun','—','أَصْيَاف','—'],
['I become greater','أَعْظُمُ','aʿẓumu','Verb','—','—','—'],
['greatness importance','عَظَمَة','ʿaẓama','Noun','—','—','—'],
['I know learn of','أَعْلَمُ','aʿlamu','Verb','—','—','—'],
['I grow become large','أَكْبُرُ','akburu','Verb','—','—','—'],
['I search discuss','أَبْحَثُ','abḥathu','Verb','—','—','—'],
['I leave','أَتْرُكُ','atruku','Verb','—','—','—'],
['I sit','أَجْلِسُ','ajlisu','Verb','—','—','—'],
['I attend come','أَحْضُرُ','aḥḍuru','Verb','—','—','—'],
['I go out','أَخْرُجُ','akhruju','Verb','—','—','—'],
['I enter','أَدْخُلُ','adkhulu','Verb','—','—','—'],
['I study','أَدْرُسُ','adrusu','Verb','—','—','—'],
['I go','أَذْهَبُ','adhhabu','Verb','—','—','—'],
['I return','أَرْجِعُ','arjiʿu','Verb','—','—','—'],
['I live','أَسْكُنُ','askunu','Verb','—','—','—'],
['I know','أَعْرِفُ','aʿrifu','Verb','—','—','—'],
['I work do','أَعْمَلُ','aʿmalu','Verb','—','—','—'],
['I understand','أَفْهَمُ','afhamu','Verb','—','—','—'],
['I read','أَقْرَأُ','aqraʾu','Verb','—','—','—'],
['I write','أَكْتُبُ','aktubu','Verb','—','—','—'],
['I publish','أَنْشُرُ','anshuru','Verb','—','—','—'],
]);
const DLI_S36=dliSentences(36,[
['I live in the university district.','أَسْكُنُ فِي المَدِينَةِ الجَامِعِيَّةِ.','askunu fī al-madīnati al-jāmiʿiyya.'],
['An Arab friend whom I met here lives with me.','يَسْكُنُ مَعِي صَدِيقٌ عَرَبِيٌّ تَعَرَّفْتُ عَلَيْهِ هُنَا.','yaskunu maʿī ṣadīqun ʿarabiyyun taʿarraftu ʿalayhi hunā.'],
['I study at the university in the summer.','أَدْرُسُ فِي الجَامِعَةِ فِي الصَّيْفِ.','adrusu fī al-jāmiʿati fī al-ṣayf.'],
['I go to Europe every summer for tourism.','أَذْهَبُ إِلَى أُورُوبَّا كُلَّ صَيْفٍ لِلسِّيَاحَةِ.','adhhabu ilā ūrūbbā kulla ṣayfin li-al-siyāḥa.'],
['I attend the lecture and sit behind my professor.','أَحْضُرُ المُحَاضَرَةَ وَأَجْلِسُ وَرَاءَ أُسْتَاذِي.','aḥḍuru al-muḥāḍarata wa-ajlisu warāʾa ustādhī.'],
['I understand the lecture and discuss the political problems.','أَفْهَمُ المُحَاضَرَةَ وَأَبْحَثُ المُشْكِلَاتِ السِّيَاسِيَّةَ.','afhamu al-muḥāḍarata wa-abḥathu al-mushkilāti al-siyāsiyya.'],
['I read the newspapers and write an article every week.','أَقْرَأُ الصُّحُفَ وَأَكْتُبُ مَقَالًا كُلَّ أُسْبُوعٍ.','aqraʾu al-ṣuḥufa wa-aktubu maqālan kulla usbūʿ.'],
['I publish my books in Egypt.','أَنْشُرُ كُتُبِي فِي مِصْرَ.','anshuru kutubī fī miṣr.'],
['I leave work in the evening and return home.','أَتْرُكُ العَمَلَ فِي المَسَاءِ وَأَرْجِعُ إِلَى البَيْتِ.','atruku al-ʿamala fī al-masāʾi wa-arjiʿu ilā al-bayt.'],
]);
const DLI_V37=dliWords(37,[
['another other','آخَر','ākhar','fem. أُخْرَى','—','آخَرُون','أُخْرَيَات'],
['the other','الآخَر','al-ākhar','fem. الأُخْرَى','—','الآخَرُون','الأُخْرَيَات'],
['last past','المَاضِي','al-māḍī','fem. المَاضِيَة','—','—','—'],
['some some of','بَعْض','baʿḍ','Quantifier','—','—','—'],
['especially in particular','خَاصَّةً','khāṣṣatan','Adverb','—','—','—'],
['desire for','رَغْبَة فِي','raghba fī','Noun phrase','—','—','—'],
['noon','ظُهْر','ẓuhr','Noun','—','—','—'],
['only','فَقَطْ','faqaṭ','Adverb','—','—','—'],
['alone by myself','وَحْدِي','waḥdī','Expression','—','—','—'],
['California','كَالِيفُورْنِيَا','kālīfūrniyā','Place name','—','—','—'],
]);
const DLI_S37=dliSentences(37,[
['I came to America last year to study.','حَضَرْتُ إِلَى أَمْرِيكَا فِي السَّنَةِ المَاضِيَةِ لِلدِّرَاسَةِ.','ḥaḍartu ilā amrīkā fī al-sanati al-māḍiyati li-al-dirāsa.'],
['Then I obtained another job in California.','ثُمَّ حَصَلْتُ عَلَى عَمَلٍ آخَرَ فِي كَالِيفُورْنِيَا.','thumma ḥaṣaltu ʿalā ʿamalin ākhara fī kālīfūrniyā.'],
['I live alone in a house near the school.','أَسْكُنُ وَحْدِي فِي بَيْتٍ قَرِيبٍ مِنَ المَدْرَسَةِ.','askunu waḥdī fī baytin qarībin mina al-madrasa.'],
['I return home at four in the afternoon.','أَرْجِعُ إِلَى البَيْتِ فِي السَّاعَةِ الرَّابِعَةِ بَعْدَ الظُّهْرِ.','arjiʿu ilā al-bayti fī al-sāʿati al-rābiʿati baʿda al-ẓuhr.'],
['Some teachers are Arab and others are foreign.','بَعْضُ الأَسَاتِذَةِ عَرَبٌ وَالآخَرُونَ أَجَانِبُ.','baʿḍu al-asātidhati ʿarabun wa-al-ākharūna ajānib.'],
['I know much about the Middle East, especially Egypt.','أَعْرِفُ كَثِيرًا عَنِ الشَّرْقِ الأَوْسَطِ وَعَنْ مِصْرَ خَاصَّةً.','aʿrifu kathīran ʿani al-sharqi al-awsaṭi wa-ʿan miṣra khāṣṣatan.'],
['In last week\'s letter, I wrote about my desire to return.','فِي رِسَالَةِ الأُسْبُوعِ المَاضِي كَتَبْتُ عَنْ رَغْبَتِي فِي الرُّجُوعِ.','fī risālati al-usbūʿi al-māḍī katabtu ʿan raghbatī fī al-rujūʿ.'],
['There is only one professor in the school today.','فِي المَدْرَسَةِ أُسْتَاذٌ وَاحِدٌ فَقَط اليَوْمَ.','fī al-madrasati ustādhun wāḥidun faqaṭ al-yawm.'],
]);
const DLI_V38=dliWords(38,[
['I search for','أَبْحَثُ عَنْ','abḥathu ʿan','Verb phrase','—','—','—'],
['market','سُوق','sūq','Noun','—','أَسْوَاق','—'],
['time occurrence','مَرَّة','marra','Noun','—','مَرَّات','—'],
['I look at','أَنْظُرُ إِلَى','anẓuru ilā','Verb phrase','—','—','—'],
['O hey','يَا','yā','Vocative particle','—','—','—'],
]);
const DLI_S38=dliSentences(38,[
['Where do you live, miss?','أَيْنَ تَسْكُنِينَ يَا آنِسَةُ؟','ayna taskunīna yā ānisatu?'],
['I live with my family near the university.','أَسْكُنُ مَعَ أَهْلِي قَرِيبًا مِنَ الجَامِعَةِ.','askunu maʿa ahlī qarīban mina al-jāmiʿa.'],
['At which university do you study?','فِي أَيِّ جَامِعَةٍ تَدْرُسِينَ؟','fī ayyi jāmiʿatin tadrusīna?'],
['I go to the university three times a week.','أَذْهَبُ إِلَى الجَامِعَةِ ثَلَاثَ مَرَّاتٍ فِي الأُسْبُوعِ.','adhhabu ilā al-jāmiʿati thalātha marrātin fī al-usbūʿ.'],
['I go to the market on Wednesday.','أَذْهَبُ إِلَى السُّوقِ يَوْمَ الأَرْبِعَاءِ.','adhhabu ilā al-sūqi yawma al-arbiʿāʾ.'],
['I am looking for a book about literature.','أَبْحَثُ عَنْ كِتَابٍ عَنِ الأَدَبِ.','abḥathu ʿan kitābin ʿani al-adab.'],
['I look at the books in the market.','أَنْظُرُ إِلَى الكُتُبِ فِي السُّوقِ.','anẓuru ilā al-kutubi fī al-sūq.'],
['O professor, do you read the Arabic newspapers?','يَا أُسْتَاذَةُ، هَلْ تَقْرَئِينَ الصُّحُفَ العَرَبِيَّةَ؟','yā ustādhatu, hal taqraʾīna al-ṣuḥufa al-ʿarabiyya?'],
]);
const DLI_V39=dliWords(39,[
['if','إِذَا','idhā','Conditional particle','—','—','—'],
['I graduate from','أَتَخَرَّجُ فِي / مِنْ','atakharraju fī / min','Verb phrase','—','—','—'],
["graduation","تَخَرُّج","takharruj",'Verbal noun','—','—','—'],
['well all right','حَسَنًا','ḥasanan','Adverb','—','—','—'],
['during throughout','خِلَال','khilāl','Preposition','—','—','—'],
['embassy','سِفَارَة','sifāra','Noun','—','سِفَارَات','—'],
['medicine','طِبّ','ṭibb','Noun','—','—','—'],
['doctor physician','طَبِيب','ṭabīb','Noun','طَبِيبَة','أَطِبَّاء','طَبِيبَات'],
['of course','طَبْعًا','ṭabʿan','Adverb','—','—','—'],
['road way','طَرِيق','ṭarīq','Noun','—','طُرُق','—'],
['by way of the radio','عَنْ طَرِيق الإِذَاعَة','ʿan ṭarīq al-idhāʿa','Expression','—','—','—'],
['year','عَام','ʿām','Noun','—','أَعْوَام','—'],
['lunch','غَدَاء','ghadāʾ','Noun','—','—','—'],
['college','كُلِّيَّة','kulliyya','Noun','—','كُلِّيَّات','—'],
['medical school','كُلِّيَّة الطِّبّ','kulliyyat al-ṭibb','Compound noun','—','—','—'],
['different from','مُخْتَلِف عَنْ','mukhtalif ʿan','Adjective','مُخْتَلِفَة','مُخْتَلِفُون','مُخْتَلِفَات'],
['same','نَفْس','nafs','Adjective-like noun','—','—','—'],
]);
const DLI_S39=dliSentences(39,[
['Do you know where the Jordanian embassy is?','هَلْ تَعْرِفُ أَيْنَ سِفَارَةُ الأُرْدُنِّ؟','hal taʿrifu ayna sifāratu al-urdunn?'],
['Of course, I work there.','طَبْعًا، أَعْمَلُ هُنَاكَ.','ṭabʿan, aʿmalu hunāk.'],
['I work seven hours a day at the embassy.','أَعْمَلُ سَبْعَ سَاعَاتٍ فِي اليَوْمِ فِي السِّفَارَةِ.','aʿmalu sabʿa sāʿātin fī al-yawmi fī al-sifāra.'],
['I go out for lunch at noon.','أَخْرُجُ لِلْغَدَاءِ فِي الظُّهْرِ.','akhruju li-al-ghadāʾi fī al-ẓuhr.'],
['The employees leave at different times.','يَخْرُجُ المُوَظَّفُونَ فِي سَاعَاتٍ مُخْتَلِفَةٍ.','yakhruju al-muwaẓẓafūna fī sāʿātin mukhtalifa.'],
['The secretaries do not eat lunch at the same hour.','لَا تَتَنَاوَلُ السِّكْرِتِيرَاتُ الغَدَاءَ فِي نَفْسِ السَّاعَةِ.','lā tatanāwalu al-sikritīrātu al-ghadāʾa fī nafsi al-sāʿa.'],
['I graduated from medical school this year.','تَخَرَّجْتُ فِي كُلِّيَّةِ الطِّبِّ هٰذَا العَامَ.','takharrajtu fī kulliyyati al-ṭibbi hādhā al-ʿām.'],
['The doctors learned the news by way of the radio.','عَلِمَ الأَطِبَّاءُ بِالخَبَرِ عَنْ طَرِيقِ الإِذَاعَةِ.','ʿalima al-aṭibbāʾu bi-al-khabari ʿan ṭarīqi al-idhāʿa.'],
['If the road is open, we will go to the college.','إِذَا كَانَ الطَّرِيقُ مَفْتُوحًا فَسَنَذْهَبُ إِلَى الكُلِّيَّةِ.','idhā kāna al-ṭarīqu maftūḥan fa-sanadhhabu ilā al-kulliyya.'],
]);
const DLI_V40=dliWords(40,[
['tonight','اللَّيْلَة','al-layla','Adverb','—','—','—'],
['self same','نَفْس','nafs','Emphatic noun','—','أَنْفُس','—'],
['petroleum','بِتْرُول','bitrūl','Noun','—','—','—'],
['beginning','بِدَايَة','bidāya','Noun','—','بِدَايَات','—'],
['all everyone','جَمِيع','jamīʿ','Quantifier','—','—','—'],
['current present','حَالِيّ','ḥāliyy','Adjective','حَالِيَّة','—','—'],
['good satisfactory','حَسَن','ḥasan','Adjective','حَسَنَة','حَسَنُون','حَسَنَات'],
['I pay to','أَدْفَعُ لِـ','adfaʿu li-','Verb phrase','—','—','—'],
['salary','رَاتِب','rātib','Noun','—','رَوَاتِب','—'],
['movie theater','سِينَمَا','sīnamā','Noun','—','سِينَمَات','—'],
['company','شَرِكَة','sharika','Noun','—','شَرِكَات','—'],
['relationship ties','عَلَاقَة','ʿalāqa','Noun','—','عَلَاقَات','—'],
['branch','فَرْع','farʿ','Noun','—','فُرُوع','—'],
['film movie','فِيلْم','fīlm','Noun','—','أَفْلَام','—'],
['Gone with the Wind','ذَهَبَ مَعَ الرِّيح','dhahaba maʿa al-rīḥ','Film title','—','—','—'],
]);
const DLI_S40=dliSentences(40,[
['I work for one of the largest petroleum companies.','أَعْمَلُ فِي وَاحِدَةٍ مِنْ أَكْبَرِ شَرِكَاتِ البِتْرُولِ.','aʿmalu fī wāḥidatin min akbari sharikāti al-bitrūl.'],
['I worked in the Cairo branch for five years.','عَمِلْتُ فِي فَرْعِ القَاهِرَةِ خَمْسَ سَنَوَاتٍ.','ʿamiltu fī farʿi al-qāhirati khamsa sanawāt.'],
['I know all the company\'s employees.','أَعْرِفُ مُوَظَّفِي الشَّرِكَةِ جَمِيعَهُمْ.','aʿrifu muwaẓẓafī al-sharikati jamīʿahum.'],
['I have good relationships with most of them.','لِي عَلَاقَاتٌ حَسَنَةٌ مَعَ أَكْثَرِهِمْ.','lī ʿalāqātun ḥasanatun maʿa aktharihim.'],
['At the beginning of last week, the company decided to transfer me.','فِي بِدَايَةِ الأُسْبُوعِ المَاضِي قَرَّرَتِ الشَّرِكَةُ نَقْلِي.','fī bidāyati al-usbūʿi al-māḍī qarrarati al-sharikatu naqlī.'],
['I will work in the new branch.','سَأَعْمَلُ فِي الفَرْعِ الجَدِيدِ.','sa-aʿmalu fī al-farʿi al-jadīd.'],
['I will travel tonight, and the company president himself will go to the airport.','سَأُسَافِرُ اللَّيْلَةَ وَسَيَذْهَبُ رَئِيسُ الشَّرِكَةِ نَفْسُهُ إِلَى المَطَارِ.','sa-usāfiru al-laylata wa-sayadhhabu raʾīsu al-sharikati nafsuhu ilā al-maṭār.'],
['The company pays good salaries.','تَدْفَعُ الشَّرِكَةُ رَوَاتِبَ حَسَنَةً.','tadfaʿu al-sharikatu rawātiba ḥasanatan.'],
['All the students will go to the cinema tonight.','سَيَذْهَبُ الطُّلَّابُ جَمِيعُهُمْ إِلَى السِّينَمَا اللَّيْلَةَ.','sayadhhabu al-ṭullābu jamīʿuhum ilā al-sīnamā al-layla.'],
['They will watch the film Gone with the Wind.','سَيُشَاهِدُونَ فِيلْمَ ذَهَبَ مَعَ الرِّيحِ.','sayushāhidūna fīlma dhahaba maʿa al-rīḥ.'],
]);
// END GENERATED DLI CHAPTERS 11-40

const DLI_CHAPTERS={

1:{subtitle:'Greetings and Classroom Objects',vocab:DLI_V1,sentences:DLI_S1,learn:['Basic greetings','Classroom objects','Simple questions and answers','This, and, or, yes and no']},
2:{subtitle:'People, Places and Location',vocab:DLI_V2,sentences:DLI_S2,learn:['Countries and locations','Personal pronouns','Where, who and where from','Here and there']},
3:{subtitle:'The Army, People and Newspapers',vocab:DLI_V3,sentences:DLI_S3,learn:['Army roles and ranks','People and descriptions','Distance and location','Newspapers and correspondents']},
4:{subtitle:'Women, Schools and Leadership',vocab:DLI_V4,sentences:DLI_S4,learn:['Feminine pronouns and demonstratives','School vocabulary','Leadership roles','Countries and simple descriptions']},
5:{subtitle:'Teachers, Vehicles and Rank',vocab:DLI_V5,sentences:DLI_S5,learn:['Teachers and gender','Vehicles and windows','Fame and recognition','The rank of colonel']},
6:{subtitle:'The Base, Library and Officers',vocab:DLI_V6,sentences:DLI_S6,learn:['Military ranks','The base and library','Assistants and ability','Using with and in']},
7:{subtitle:'Nationalities, Offices and News',vocab:DLI_V7,sentences:DLI_S7,learn:['Nationalities and gender','Office and possessive forms','News and rank','Evening greetings']},
8:{subtitle:'Home, Friends and Greetings',vocab:DLI_V8,sentences:DLI_S8,learn:['Morning greetings','Homes and possessions','Friends and descriptions','Polite expressions']},
9:{subtitle:'Groups, Students and Officers',vocab:DLI_V9,sentences:DLI_S9,learn:['Plural pronouns','Students, officers and nurses','Masculine and feminine groups','Maps, tables and airplanes']},
10:{subtitle:'Government, Countries and Plurals',vocab:DLI_V10,sentences:DLI_S10,learn:['Government and possessive forms','Kingdoms and republics','Occupational plurals','Objects and locations']},
11:{subtitle:'People, demonstratives, quantity, and nationality',vocab:DLI_V11,sentences:DLI_S11,learn:['Demonstratives and groups','Asking how many','Nationalities','Possession and quantity']},
12:{subtitle:'Cities, countries, and the classroom',vocab:DLI_V12,sentences:DLI_S12,learn:['Cities and capitals','Countries and locations','Classroom vocabulary','Greetings']},
13:{subtitle:'Media, representatives, and occupations',vocab:DLI_V13,sentences:DLI_S13,learn:['Media professions','Representatives and employees','Headquarters and broadcasting','Nationalities']},
14:{subtitle:'Plurals, quantity, and descriptions',vocab:DLI_V14,sentences:DLI_S14,learn:['Common plural patterns','Quantity and descriptions','Universities and instructors','Objects and places']},
15:{subtitle:'Government and leadership',vocab:DLI_V15,sentences:DLI_S15,learn:['Government leadership','Ministers and presidents','Military rank','People and descriptions']},
16:{subtitle:'Comparisons and superlatives',vocab:DLI_V16,sentences:DLI_S16,learn:['Comparatives and superlatives','Distance and size','Age and appearance','Armies and soldiers']},
17:{subtitle:'Relative pronouns and identification',vocab:DLI_V17,sentences:DLI_S17,learn:['Relative pronouns','Identifying people and things','Addresses and homeland','Which and who']},
18:{subtitle:'Government, newspapers, and public officials',vocab:DLI_V18,sentences:DLI_S18,learn:['Government officials','Newspapers and correspondents','The republic and prime minister','Public institutions']},
19:{subtitle:'Travel, work, and academic degrees',vocab:DLI_V19,sentences:DLI_S19,learn:['Travel and return','Academic degrees','Work and time','Why and when']},
20:{subtitle:'Meetings, attendance, and sequence',vocab:DLI_V20,sentences:DLI_S20,learn:['Meetings and attendance','Sequence and completion','Morning and before','Travel to Lebanon']},
21:{subtitle:'World Tourism and Conferences',vocab:DLI_V21,sentences:DLI_S21,learn:['World tourism','International conferences','Countries and results','Duties and attendance']},
22:{subtitle:'Study Literature and Returning Home',vocab:DLI_V22,sentences:DLI_S22,learn:['Literature and study','Entering and leaving','Letters and newspapers','Returning home']},
23:{subtitle:'Political Science and Publishing',vocab:DLI_V23,sentences:DLI_S23,learn:['Political science','The Middle East','Articles and publishing','Time and conditions']},
24:{subtitle:'Meetings and Days of the Week',vocab:DLI_V24,sentences:DLI_S24,learn:['Days of the week','Meetings and schedules','Newspapers','Political science']},
25:{subtitle:'Positions Discussion and Problems',vocab:DLI_V25,sentences:DLI_S25,learn:['Position and location','Discussing problems','Statements and ambassadors','Approximation']},
26:{subtitle:'Introductions Teaching and Reminders',vocab:DLI_V26,sentences:DLI_S26,learn:['Titles and introductions','Teaching history','Questions and reminders','Classroom interaction']},
27:{subtitle:'Travel Communication and Sightseeing',vocab:DLI_V27,sentences:DLI_S27,learn:['Travel and sightseeing','Antiquities and palaces','Conversation and correspondence','Meeting and helping']},
28:{subtitle:'Women Liberation and the United States',vocab:DLI_V28,sentences:DLI_S28,learn:['Women\'s liberation','States and the United States','Conference attendance','Publishing results']},
29:{subtitle:'Causative Actions and Education',vocab:DLI_V29,sentences:DLI_S29,learn:['Causative verbs','Family and education','Reasons and understanding','Completion and duration']},
30:{subtitle:'Appointments Requests and Conversation',vocab:DLI_V30,sentences:DLI_S30,learn:['Appointments and requests','Conversation and introductions','Decisions and enjoyment','The foreign minister']},
31:{subtitle:'Congress Councils and Reciprocal Actions',vocab:DLI_V31,sentences:DLI_S31,learn:['Congress and councils','Budgets and approval','Reciprocal actions','Political institutions']},
32:{subtitle:'Withdrawal Sessions and the United Nations',vocab:DLI_V32,sentences:DLI_S32,learn:['Withdrawal and departure','United Nations sessions','Confidential meetings','Inchoative verb patterns']},
33:{subtitle:'Lectures War and Political Discussion',vocab:DLI_V33,sentences:DLI_S33,learn:['Lectures and discussions','War and politics','Listening and participation','Movement and transfer']},
34:{subtitle:'Official Visits and Receptions',vocab:DLI_V34,sentences:DLI_S34,learn:['Official visits','Airports and receptions','Inquiry and purpose','Enjoyment and disapproval']},
35:{subtitle:'Common Broken Plurals and Descriptions',vocab:DLI_V35,sentences:DLI_S35,learn:['Broken plurals','People and objects','Descriptions','Schools and offices']},
36:{subtitle:'Present Tense Actions',vocab:DLI_V36,sentences:DLI_S36,learn:['Present tense verbs','Study and work','Reading and writing','Daily movement']},
37:{subtitle:'Other Some Last and Alone',vocab:DLI_V37,sentences:DLI_S37,learn:['Other and another','Some and only','Past time','Living alone and personal wishes']},
38:{subtitle:'Markets Frequency and Feminine Address',vocab:DLI_V38,sentences:DLI_S38,learn:['Markets and searching','Frequency expressions','Looking at things','Feminine forms of address']},
39:{subtitle:'Embassy Work Medicine and Time',vocab:DLI_V39,sentences:DLI_S39,learn:['Embassy work','Medicine and college','Lunch and schedules','Sameness and difference']},
40:{subtitle:'Companies Petroleum and Future Plans',vocab:DLI_V40,sentences:DLI_S40,learn:['Companies and petroleum','Branches and salaries','Future plans','Everyone and emphatic forms']}
};

// October 10, 2026 transcript import. Range-labeled sources remain grouped.
const DLI_TRANSCRIPT_IMPORT = {
  "41": {
    "subtitle": "Meals, cafés, and daily routines",
    "vocab": [
      [
        "I eat",
        "آكُلُ",
        "ākulu",
        "Verb"
      ],
      [
        "I drink",
        "أَشْرَبُ",
        "ashrabu",
        "Verb"
      ],
      [
        "I hear about",
        "أَسْمَعُ بِـ",
        "asmaʿu bi",
        "Verb"
      ],
      [
        "I offer; serve",
        "أُقَدِّمُ",
        "uqaddimu",
        "Verb"
      ],
      [
        "food",
        "طَعَام",
        "ṭaʿām",
        "Noun"
      ],
      [
        "usually",
        "عَادَةً",
        "ʿādatan",
        "Adverb"
      ],
      [
        "beside",
        "بِجَانِبِ",
        "bi-jānibi",
        "Preposition"
      ],
      [
        "café",
        "قَهْوَة",
        "qahwa",
        "Noun"
      ],
      [
        "restaurant",
        "مَطْعَم",
        "maṭʿam",
        "Noun",
        "—",
        "مَطَاعِم"
      ],
      [
        "plural of restaurant",
        "مَطَاعِم",
        "maṭāʿim",
        "Plural"
      ],
      [
        "excellent",
        "مُمْتَاز",
        "mumtāz",
        "Adjective"
      ],
      [
        "an hour before his return",
        "قَبْلَ رُجُوعِهِ بِسَاعَةٍ",
        "qabla rujūʿihi bi-sāʿatin",
        "Phrase"
      ],
      [
        "an hour after his return",
        "بَعْدَ رُجُوعِهِ بِسَاعَةٍ",
        "baʿda rujūʿihi bi-sāʿatin",
        "Phrase"
      ]
    ],
    "sentences": [
      [
        "When do you usually go for lunch?",
        "مَتَى تَذْهَبُ لِلْغَدَاءِ عَادَةً؟",
        "matā tadhhabu li-l-ghadāʾi ʿādatan?"
      ],
      [
        "I eat in a restaurant near my office.",
        "آكُلُ فِي مَطْعَمٍ قَرِيبٍ مِنْ مَكْتَبِي.",
        "ākulu fī maṭʿamin qarībin min maktabī."
      ],
      [
        "The food there is excellent.",
        "الطَّعَامُ هُنَاكَ مُمْتَازٌ.",
        "al-ṭaʿāmu hunāka mumtāzun."
      ],
      [
        "This is the capable professor's book.",
        "هَذَا كِتَابُ الأُسْتَاذِ الْقَدِيرِ.",
        "hādhā kitābu al-ustādhi al-qadīri."
      ]
    ],
    "learn": [
      "Meals",
      "cafés",
      "and daily routines"
    ],
    "sourceLessonRange": [
      41,
      41
    ],
    "sourceFiles": [
      {
        "filename": "lesson041-side 1.docx",
        "side": 1,
        "lessonRange": [
          41,
          41
        ]
      },
      {
        "filename": "lesson041-side 2.docx",
        "side": 2,
        "lessonRange": [
          41,
          41
        ]
      }
    ]
  },
  "42": {
    "subtitle": "Marriage, gifts, and future actions",
    "vocab": [
      [
        "I get married",
        "أَتَزَوَّجُ",
        "atazawwaju",
        "Verb"
      ],
      [
        "going",
        "الذَّهَاب",
        "al-dhahāb",
        "Verbal noun"
      ],
      [
        "young man",
        "شَابّ",
        "shābb",
        "Noun",
        "—",
        "شَبَاب"
      ],
      [
        "plural of young man",
        "شَبَاب",
        "shabāb",
        "Plural"
      ],
      [
        "bride",
        "عَرُوس",
        "ʿarūs",
        "Noun"
      ],
      [
        "bridegroom",
        "عَرِيس",
        "ʿarīs",
        "Noun"
      ],
      [
        "wrapper; cover",
        "غِلَاف",
        "ghilāf",
        "Noun"
      ],
      [
        "I wrap",
        "أُغَلِّفُ",
        "ughallifu",
        "Verb"
      ],
      [
        "married",
        "مُتَزَوِّج",
        "mutazawwij",
        "Adjective"
      ],
      [
        "gift",
        "هَدِيَّة",
        "hadiyya",
        "Noun",
        "—",
        "هَدَايَا"
      ],
      [
        "plural of gift",
        "هَدَايَا",
        "hadāyā",
        "Plural"
      ],
      [
        "I determine; set",
        "أُحَدِّدُ",
        "uḥaddidu",
        "Verb"
      ],
      [
        "I teach",
        "أُدَرِّسُ",
        "udarrisu",
        "Verb"
      ],
      [
        "I remind",
        "أُذَكِّرُ",
        "udhakkiru",
        "Verb"
      ],
      [
        "I introduce",
        "أُعَرِّفُ",
        "uʿarrifu",
        "Verb"
      ],
      [
        "I inform; teach",
        "أُعَلِّمُ",
        "uʿallimu",
        "Verb"
      ],
      [
        "I speak to",
        "أُكَلِّمُ",
        "ukallimu",
        "Verb"
      ]
    ],
    "sentences": [
      [
        "I will attend the wedding next Thursday.",
        "سَأَحْضُرُ حَفْلَ الزَّوَاجِ يَوْمَ الْخَمِيسِ الْقَادِمِ.",
        "sa-aḥḍuru ḥafla al-zawāji yawma al-khamīsi al-qādimi."
      ],
      [
        "I will give the bridegroom and his bride a small gift.",
        "سَأُقَدِّمُ إِلَى الْعَرِيسِ وَعَرُوسِهِ هَدِيَّةً صَغِيرَةً.",
        "sa-uqaddimu ilā al-ʿarīsi wa-ʿarūsihi hadiyyatan ṣaghīratan."
      ],
      [
        "I will wrap it in a beautiful wrapper.",
        "سَأُغَلِّفُهَا بِغِلَافٍ جَمِيلٍ.",
        "sa-ughallifuhā bi-ghilāfin jamīlin."
      ],
      [
        "I traveled to Cairo to obtain a doctorate.",
        "سَافَرْتُ إِلَى الْقَاهِرَةِ لِلْحُصُولِ عَلَى شَهَادَةِ الدُّكْتُورَاهِ.",
        "sāfartu ilā al-qāhirati li-l-ḥuṣūli ʿalā shahādati al-duktūrāhi."
      ]
    ],
    "learn": [
      "Marriage",
      "gifts",
      "and future actions"
    ],
    "sourceLessonRange": [
      42,
      42
    ],
    "sourceFiles": [
      {
        "filename": "lesson042-side 1.docx",
        "side": 1,
        "lessonRange": [
          42,
          42
        ]
      },
      {
        "filename": "lesson042-side 2.docx",
        "side": 2,
        "lessonRange": [
          42,
          42
        ]
      }
    ]
  },
  "43": {
    "subtitle": "Official visits and diplomatic relations",
    "vocab": [
      [
        "during",
        "أَثْنَاءَ",
        "athnāʾa",
        "Preposition"
      ],
      [
        "proposal; suggestion",
        "اِقْتِرَاح",
        "iqtirāḥ",
        "Noun"
      ],
      [
        "God willing",
        "إِنْ شَاءَ اللَّهُ",
        "in shāʾa Allāhu",
        "Expression"
      ],
      [
        "improvement",
        "التَّحْسِين",
        "al-taḥsīn",
        "Verbal noun"
      ],
      [
        "Russia",
        "رُوسِيَا",
        "rūsiyā",
        "Place name"
      ],
      [
        "Your Excellency",
        "سِيَادَتُكَ",
        "siyādatuka",
        "Title"
      ],
      [
        "Sinai",
        "سِينَاء",
        "sīnāʾ",
        "Place name"
      ],
      [
        "Moscow",
        "مُوسْكُو",
        "mūskū",
        "Place name"
      ],
      [
        "I oppose",
        "أُعَارِضُ",
        "uʿāriḍu",
        "Verb"
      ],
      [
        "I depart; leave",
        "أُغَادِرُ",
        "ughādiru",
        "Verb"
      ],
      [
        "I interrupt",
        "أُقَاطِعُ",
        "uqāṭiʿu",
        "Verb"
      ],
      [
        "I discuss",
        "أُنَاقِشُ",
        "unāqishu",
        "Verb"
      ],
      [
        "I help",
        "أُسَاعِدُ",
        "usāʿidu",
        "Verb"
      ],
      [
        "I travel",
        "أُسَافِرُ",
        "usāfiru",
        "Verb"
      ],
      [
        "I watch",
        "أُشَاهِدُ",
        "ushāhidu",
        "Verb"
      ],
      [
        "I approve; ratify",
        "أُصَادِقُ عَلَى",
        "uṣādiqu ʿalā",
        "Verb"
      ],
      [
        "I meet",
        "أُقَابِلُ",
        "uqābilu",
        "Verb"
      ]
    ],
    "sentences": [
      [
        "When will you leave Baghdad for London?",
        "مَتَى سَتُغَادِرُ بَغْدَادَ إِلَى لَنْدَنَ؟",
        "matā satughādiru baghdāda ilā landana?"
      ],
      [
        "I will leave Baghdad this afternoon.",
        "سَأُغَادِرُ بَغْدَادَ بَعْدَ ظُهْرِ الْيَوْمِ.",
        "sa-ughādiru baghdāda baʿda ẓuhri al-yawmi."
      ],
      [
        "Our ambassador will meet me at London Airport.",
        "سَيُقَابِلُنِي سَفِيرُنَا فِي مَطَارِ لَنْدَنَ.",
        "sayuqābilunī safīrunā fī maṭāri landana."
      ],
      [
        "The president will approve the budget.",
        "سَيُصَادِقُ رَئِيسُ الْجُمْهُورِيَّةِ عَلَى الْمِيزَانِيَّةِ.",
        "sayuṣādiqu raʾīsu al-jumhūriyyati ʿalā al-mīzāniyyati."
      ]
    ],
    "learn": [
      "Official visits and diplomatic relations"
    ],
    "sourceLessonRange": [
      43,
      43
    ],
    "sourceFiles": [
      {
        "filename": "lesson043-side 1.docx",
        "side": 1,
        "lessonRange": [
          43,
          43
        ]
      },
      {
        "filename": "lesson043-side 2.docx",
        "side": 2,
        "lessonRange": [
          43,
          43
        ]
      }
    ]
  },
  "44": {
    "subtitle": "Reporting, opinions, and resignation",
    "vocab": [
      [
        "I inform",
        "أُخْبِرُ",
        "ukhbiru",
        "Verb"
      ],
      [
        "I send",
        "أُرْسِلُ",
        "ursilu",
        "Verb"
      ],
      [
        "reason",
        "سَبَب",
        "sabab",
        "Noun",
        "—",
        "أَسْبَاب"
      ],
      [
        "plural of reason",
        "أَسْبَاب",
        "asbāb",
        "Plural"
      ],
      [
        "resignation",
        "اِسْتِقَالَة",
        "istiqāla",
        "Noun"
      ],
      [
        "I show; disclose",
        "أُظْهِرُ",
        "uẓhiru",
        "Verb"
      ],
      [
        "I express",
        "أُعْرِبُ عَنْ",
        "uʿribu ʿan",
        "Verb"
      ],
      [
        "I notify",
        "أُعْلِمُ بِـ",
        "uʿlimu bi",
        "Verb"
      ],
      [
        "I honor",
        "أُكْرِمُ",
        "ukrimu",
        "Verb"
      ],
      [
        "clearly",
        "بِوُضُوحٍ",
        "bi-wuḍūḥin",
        "Adverb"
      ],
      [
        "opinion",
        "رَأْي",
        "raʾy",
        "Noun"
      ],
      [
        "the following day",
        "الْغَد",
        "al-ghad",
        "Noun"
      ],
      [
        "ministry; cabinet",
        "وِزَارَة",
        "wizāra",
        "Noun"
      ],
      [
        "I seat someone",
        "أُجْلِسُ",
        "ujlisu",
        "Verb"
      ],
      [
        "I bring",
        "أُحْضِرُ",
        "uḥḍiru",
        "Verb"
      ],
      [
        "I take out",
        "أُخْرِجُ",
        "ukhriju",
        "Verb"
      ],
      [
        "I put in; admit",
        "أُدْخِلُ",
        "udkhilu",
        "Verb"
      ],
      [
        "I house someone",
        "أُسْكِنُ",
        "uskinu",
        "Verb"
      ],
      [
        "I please; impress",
        "أُعْجِبُ",
        "uʿjibu",
        "Verb"
      ],
      [
        "I explain; make someone understand",
        "أُفْهِمُ",
        "ufhimu",
        "Verb"
      ]
    ],
    "sentences": [
      [
        "Have you finished the article, Kareem?",
        "هَلْ أَكْمَلْتَ الْمَقَالَ يَا كَرِيمُ؟",
        "hal akmalta al-maqāla yā karīmu?"
      ],
      [
        "I will finish it tonight and bring it tomorrow morning.",
        "سَأُكْمِلُهُ اللَّيْلَةَ وَأُحْضِرُهُ صَبَاحَ الْغَدِ.",
        "sa-ukmiluhu al-laylata wa-uḥḍiruhu ṣabāḥa al-ghadi."
      ],
      [
        "I will express my opinion about that.",
        "سَأُعْرِبُ عَنْ رَأْيِي فِي ذَلِكَ.",
        "sa-uʿribu ʿan raʾyī fī dhālika."
      ],
      [
        "I will send it to Al-Ahram newspaper.",
        "سَأُرْسِلُهُ إِلَى جَرِيدَةِ الأَهْرَامِ.",
        "sa-ursiluhu ilā jarīdati al-ahrāmi."
      ]
    ],
    "learn": [
      "Reporting",
      "opinions",
      "and resignation"
    ],
    "sourceLessonRange": [
      44,
      44
    ],
    "sourceFiles": [
      {
        "filename": "lesson044-side 1.docx",
        "side": 1,
        "lessonRange": [
          44,
          44
        ]
      }
    ]
  },
  "45": {
    "subtitle": "Ages, salaries, and calendar months",
    "vocab": [
      [
        "October",
        "أُكْتُوبَر",
        "uktūbar",
        "Month"
      ],
      [
        "pound (currency)",
        "جُنَيْه",
        "junayh",
        "Noun"
      ],
      [
        "December",
        "دِيسَمْبَر",
        "dīsambar",
        "Month"
      ],
      [
        "September",
        "سِبْتَمْبَر",
        "sibtambar",
        "Month"
      ],
      [
        "month",
        "شَهْر",
        "shahr",
        "Noun",
        "—",
        "أَشْهُر"
      ],
      [
        "plural of month",
        "أَشْهُر",
        "ashhur",
        "Plural"
      ],
      [
        "age",
        "عُمْر",
        "ʿumr",
        "Noun"
      ],
      [
        "November",
        "نُوفَمْبَر",
        "nūfambar",
        "Month"
      ],
      [
        "father",
        "وَالِد",
        "wālid",
        "Noun"
      ],
      [
        "mother",
        "وَالِدَة",
        "wālida",
        "Noun"
      ]
    ],
    "sentences": [
      [
        "My friend is thirty-five years old.",
        "عُمْرُ صَدِيقِي خَمْسَةٌ وَثَلَاثُونَ عَامًا.",
        "ʿumru ṣadīqī khamsatun wa-thalāthūna ʿāman."
      ],
      [
        "He teaches English in a private school in Cairo.",
        "يُدَرِّسُ اللُّغَةَ الإِنْجِلِيزِيَّةَ فِي مَدْرَسَةٍ خَاصَّةٍ فِي الْقَاهِرَةِ.",
        "yudarrisu al-lughata al-injlīziyyata fī madrasatin khāṣṣatin fī al-qāhirati."
      ],
      [
        "His salary is fifty-five pounds a month.",
        "رَاتِبُهُ خَمْسَةٌ وَخَمْسُونَ جُنَيْهًا فِي الشَّهْرِ.",
        "rātibuhu khamsatun wa-khamsūna junayhan fī al-shahri."
      ],
      [
        "When did you study the lesson?",
        "مَتَى دَرَسْتَ الدَّرْسَ؟",
        "matā darasta al-darsa?"
      ]
    ],
    "learn": [
      "Ages",
      "salaries",
      "and calendar months"
    ],
    "sourceLessonRange": [
      45,
      45
    ],
    "sourceFiles": [
      {
        "filename": "lesson045-side 1.docx",
        "side": 1,
        "lessonRange": [
          45,
          45
        ]
      },
      {
        "filename": "lesson045side 2.docx",
        "side": 2,
        "lessonRange": [
          45,
          45
        ]
      }
    ]
  },
  "46": {
    "subtitle": "Medicine, supervision, and dates",
    "vocab": [
      [
        "I supervise",
        "أُشْرِفُ عَلَى",
        "ushrifu ʿalā",
        "Verb"
      ],
      [
        "under his supervision",
        "تَحْتَ إِشْرَافِهِ",
        "taḥta ishrāfihi",
        "Phrase"
      ],
      [
        "influenza",
        "إِنْفِلُوَنْزَا",
        "influwanzā",
        "Noun"
      ],
      [
        "doctor",
        "دُكْتُور",
        "duktūr",
        "Noun"
      ],
      [
        "kindergarten",
        "رَوْضَةُ الأَطْفَالِ",
        "rawḍatu al-aṭfāli",
        "Noun"
      ],
      [
        "cancer",
        "سَرَطَان",
        "saraṭān",
        "Noun"
      ],
      [
        "page",
        "صَفْحَة",
        "ṣafḥa",
        "Noun"
      ],
      [
        "treatment",
        "عِلَاج",
        "ʿilāj",
        "Noun"
      ],
      [
        "word",
        "كَلِمَة",
        "kalima",
        "Noun"
      ],
      [
        "patient; sick person",
        "مَرِيض",
        "marīḍ",
        "Noun",
        "—",
        "مَرْضَى"
      ],
      [
        "plural of patient; sick person",
        "مَرْضَى",
        "marḍā",
        "Plural"
      ],
      [
        "sick with",
        "مَرِيض بِـ",
        "marīḍ bi",
        "Adjective"
      ],
      [
        "hospital",
        "مُسْتَشْفَى",
        "mustashfā",
        "Noun"
      ]
    ],
    "sentences": [
      [
        "My friend graduated seven years ago.",
        "تَخَرَّجَ صَدِيقِي مُنْذُ سَبْعِ سَنَوَاتٍ.",
        "takharraja ṣadīqī mundhu sabʿi sanawātin."
      ],
      [
        "He supervises the treatment of patients with cancer.",
        "يُشْرِفُ عَلَى عِلَاجِ الْمَرْضَى بِالسَّرَطَانِ.",
        "yushrifu ʿalā ʿilāji al-marḍā bi-l-saraṭāni."
      ],
      [
        "He will enroll his daughter in kindergarten next year.",
        "سَيُدْخِلُ ابْنَتَهُ رَوْضَةَ الأَطْفَالِ فِي الْعَامِ الْقَادِمِ.",
        "sayudkhilu ibnatahu rawḍata al-aṭfāli fī al-ʿāmi al-qādimi."
      ],
      [
        "Did you go to school, Shaker?",
        "هَلْ ذَهَبْتَ إِلَى الْمَدْرَسَةِ يَا شَاكِرُ؟",
        "hal dhahabta ilā al-madrasati yā shākiru?"
      ]
    ],
    "learn": [
      "Medicine",
      "supervision",
      "and dates"
    ],
    "sourceLessonRange": [
      46,
      46
    ],
    "sourceFiles": [
      {
        "filename": "lesson046-side 1.docx",
        "side": 1,
        "lessonRange": [
          46,
          46
        ]
      },
      {
        "filename": "lesson046side 2.docx",
        "side": 2,
        "lessonRange": [
          46,
          46
        ]
      }
    ]
  },
  "47": {
    "subtitle": "Languages and diplomatic careers",
    "vocab": [
      [
        "sometimes",
        "أَحْيَانًا",
        "aḥyānan",
        "Adverb"
      ],
      [
        "diplomatic corps",
        "السِّلْكُ الدِّبْلُومَاسِيُّ",
        "al-silku al-diblūmāsiyyu",
        "Noun"
      ],
      [
        "I require",
        "أَتَطَلَّبُ",
        "ataṭallabu",
        "Verb"
      ],
      [
        "graduate",
        "مُتَخَرِّج",
        "mutakharrij",
        "Noun"
      ],
      [
        "knowledge",
        "مَعْرِفَة",
        "maʿrifa",
        "Noun"
      ],
      [
        "job; position",
        "وَظِيفَة",
        "waẓīfa",
        "Noun",
        "—",
        "وَظَائِف"
      ],
      [
        "plural of job; position",
        "وَظَائِف",
        "waẓāʾif",
        "Plural"
      ],
      [
        "I speak",
        "أَتَحَدَّثُ",
        "ataḥaddathu",
        "Verb"
      ],
      [
        "I become determined",
        "أَتَحَدَّدُ",
        "ataḥaddadu",
        "Verb"
      ],
      [
        "I graduate",
        "أَتَخَرَّجُ",
        "atakharraju",
        "Verb"
      ],
      [
        "I learn",
        "أَتَعَلَّمُ",
        "ataʿallamu",
        "Verb"
      ],
      [
        "I advance",
        "أَتَقَدَّمُ",
        "ataqaddamu",
        "Verb"
      ],
      [
        "I speak; converse",
        "أَتَكَلَّمُ",
        "atakallamu",
        "Verb"
      ],
      [
        "I enjoy",
        "أَتَمَتَّعُ بِـ",
        "atamattaʿu bi",
        "Verb"
      ]
    ],
    "sentences": [
      [
        "How many languages do you speak?",
        "كَمْ لُغَةً تَتَكَلَّمِينَ؟",
        "kam lughatan tatakallamīna?"
      ],
      [
        "I speak Arabic, English, and French.",
        "أَتَكَلَّمُ الْعَرَبِيَّةَ وَالإِنْجِلِيزِيَّةَ وَالْفَرَنْسِيَّةَ.",
        "atakallamu al-ʿarabiyyata wa-l-injlīziyyata wa-l-faransiyyata."
      ],
      [
        "Obtaining a diplomatic job requires knowledge of a foreign language.",
        "يَتَطَلَّبُ الْحُصُولُ عَلَى وَظِيفَةٍ دِبْلُومَاسِيَّةٍ مَعْرِفَةَ لُغَةٍ أَجْنَبِيَّةٍ.",
        "yataṭallabu al-ḥuṣūlu ʿalā waẓīfatin diblūmāsiyyatin maʿrifata lughatin ajnabiyyatin."
      ],
      [
        "I will return after finishing my studies.",
        "سَأَرْجِعُ بَعْدَ إِكْمَالِ دِرَاسَتِي.",
        "sa-arjiʿu baʿda ikmāli dirāsatī."
      ]
    ],
    "learn": [
      "Languages and diplomatic careers"
    ],
    "sourceLessonRange": [
      47,
      47
    ],
    "sourceFiles": [
      {
        "filename": "lesson047-side 1.docx",
        "side": 1,
        "lessonRange": [
          47,
          47
        ]
      },
      {
        "filename": "lesson047side 2.docx",
        "side": 2,
        "lessonRange": [
          47,
          47
        ]
      }
    ]
  },
  "48": {
    "subtitle": "Agreements, positions, and reciprocal verbs",
    "vocab": [
      [
        "agreement",
        "اِتِّفَاق",
        "ittifāq",
        "Noun"
      ],
      [
        "I agree with",
        "أَتَّفِقُ مَعَ",
        "attafiqu maʿa",
        "Verb"
      ],
      [
        "party; gathering",
        "حَفْلَة",
        "ḥafla",
        "Noun"
      ],
      [
        "official; formal",
        "رَسْمِيّ",
        "rasmī",
        "Adjective"
      ],
      [
        "lack; absence",
        "عَدَم",
        "ʿadam",
        "Noun"
      ],
      [
        "throne",
        "عَرْش",
        "ʿarsh",
        "Noun"
      ],
      [
        "I boycott",
        "أُقَاطِعُ",
        "uqāṭiʿu",
        "Verb"
      ],
      [
        "most of",
        "مُعْظَم",
        "muʿẓam",
        "Quantifier"
      ],
      [
        "position; office",
        "مَنْصِب",
        "manṣib",
        "Noun",
        "—",
        "مَنَاصِب"
      ],
      [
        "plural of position; office",
        "مَنَاصِب",
        "manāṣib",
        "Plural"
      ],
      [
        "topic; subject",
        "مَوْضُوع",
        "mawḍūʿ",
        "Noun",
        "—",
        "مَوَاضِيع"
      ],
      [
        "plural of topic; subject",
        "مَوَاضِيع",
        "mawāḍīʿ",
        "Plural"
      ],
      [
        "I confer",
        "أَتَبَاحَثُ",
        "atabāḥathu",
        "Verb"
      ],
      [
        "I converse mutually",
        "أَتَحَادَثُ",
        "ataḥādathu",
        "Verb"
      ],
      [
        "I quarrel",
        "أَتَخَاصَمُ",
        "atakhāṣamu",
        "Verb"
      ],
      [
        "I reach an understanding",
        "أَتَفَاهَمُ",
        "atafāhamu",
        "Verb"
      ],
      [
        "I meet",
        "أَتَقَابَلُ",
        "ataqābalu",
        "Verb"
      ],
      [
        "I correspond",
        "أَتَكَاتَبُ",
        "atakātabu",
        "Verb"
      ],
      [
        "I relinquish",
        "أَتَنَازَلُ عَنْ",
        "atanāzalu ʿan",
        "Verb"
      ]
    ],
    "sentences": [
      [
        "Will the prime minister relinquish his position soon?",
        "هَلْ سَيَتَنَازَلُ رَئِيسُ الْوُزَرَاءِ عَنْ مَنْصِبِهِ قَرِيبًا؟",
        "hal sayatanāzalu raʾīsu al-wuzarāʾi ʿan manṣibihi qarīban?"
      ],
      [
        "What is the reason for his wish to relinquish his position?",
        "مَا سَبَبُ رَغْبَتِهِ فِي التَّنَازُلِ عَنْ مَنْصِبِهِ؟",
        "mā sababu raghbatihi fī al-tanāzuli ʿan manṣibihi?"
      ],
      [
        "His disagreement with the president.",
        "عَدَمُ اتِّفَاقِهِ مَعَ رَئِيسِ الْجُمْهُورِيَّةِ.",
        "ʿadamu ittifāqihi maʿa raʾīsi al-jumhūriyyati."
      ],
      [
        "The prime minister met the delegates today.",
        "اجْتَمَعَ رَئِيسُ الْوُزَرَاءِ بِالْمَنْدُوبِينَ الْيَوْمَ.",
        "ijtamaʿa raʾīsu al-wuzarāʾi bi-l-mandūbīna al-yawma."
      ]
    ],
    "learn": [
      "Agreements",
      "positions",
      "and reciprocal verbs"
    ],
    "sourceLessonRange": [
      48,
      48
    ],
    "sourceFiles": [
      {
        "filename": "lesson048-side 1.docx",
        "side": 1,
        "lessonRange": [
          48,
          48
        ]
      },
      {
        "filename": "lesson048side 2.docx",
        "side": 2,
        "lessonRange": [
          48,
          48
        ]
      }
    ]
  },
  "49": {
    "subtitle": "Committees, legislation, and voting",
    "vocab": [
      [
        "social",
        "اِجْتِمَاعِيّ",
        "ijtimāʿī",
        "Adjective"
      ],
      [
        "economic",
        "اِقْتِصَادِيّ",
        "iqtiṣādī",
        "Adjective"
      ],
      [
        "I separate from",
        "أَنْفَصِلُ عَنْ",
        "anfaṣilu ʿan",
        "Verb"
      ],
      [
        "I become divided into",
        "أَنْقَسِمُ إِلَى",
        "anqasimu ilā",
        "Verb"
      ],
      [
        "voting",
        "التَّصْوِيت",
        "al-taṣwīt",
        "Verbal noun"
      ],
      [
        "revolution",
        "ثَوْرَة",
        "thawra",
        "Noun"
      ],
      [
        "part",
        "جُزْء",
        "juzʾ",
        "Noun",
        "—",
        "أَجْزَاء"
      ],
      [
        "plural of part",
        "أَجْزَاء",
        "ajzāʾ",
        "Plural"
      ],
      [
        "I vote on",
        "أُصَوِّتُ عَلَى",
        "uṣawwitu ʿalā",
        "Verb"
      ],
      [
        "law",
        "قَانُون",
        "qānūn",
        "Noun",
        "—",
        "قَوَانِين"
      ],
      [
        "plural of law",
        "قَوَانِين",
        "qawānīn",
        "Plural"
      ],
      [
        "committee",
        "لَجْنَة",
        "lajna",
        "Noun",
        "—",
        "لِجَان"
      ],
      [
        "plural of committee",
        "لِجَان",
        "lijān",
        "Plural"
      ],
      [
        "Foreign Relations Committee",
        "لَجْنَةُ الْعَلَاقَاتِ الْخَارِجِيَّةِ",
        "lajnatu al-ʿalāqāti al-khārijiyyati",
        "Noun"
      ],
      [
        "project",
        "مَشْرُوع",
        "mashrūʿ",
        "Noun",
        "—",
        "مَشَارِيع"
      ],
      [
        "plural of project",
        "مَشَارِيع",
        "mashārīʿ",
        "Plural"
      ],
      [
        "bill; draft law",
        "مَشْرُوعُ قَانُونٍ",
        "mashrūʿu qānūnin",
        "Noun"
      ],
      [
        "place",
        "مَكَان",
        "makān",
        "Noun",
        "—",
        "أَمَاكِن"
      ],
      [
        "plural of place",
        "أَمَاكِن",
        "amākin",
        "Plural"
      ],
      [
        "in agreement with",
        "مُوَافِق عَلَى",
        "muwāfiq ʿalā",
        "Adjective"
      ],
      [
        "I move; transfer",
        "أَنْتَقِلُ",
        "antaqilu",
        "Verb"
      ],
      [
        "I withdraw",
        "أَنْسَحِبُ",
        "ansaḥibu",
        "Verb"
      ],
      [
        "I leave; depart",
        "أَنْصَرِفُ",
        "anṣarifu",
        "Verb"
      ],
      [
        "I get broken",
        "أَنْكَسِرُ",
        "ankasiru",
        "Verb"
      ]
    ],
    "sentences": [
      [
        "When will the meeting be held?",
        "مَتَى سَيَنْعَقِدُ الاجْتِمَاعُ؟",
        "matā sayanʿaqidu al-ijtimāʿu?"
      ],
      [
        "It will be held at five this evening.",
        "سَيَنْعَقِدُ فِي السَّاعَةِ الْخَامِسَةِ مِنْ مَسَاءِ الْيَوْمِ.",
        "sayanʿaqidu fī al-sāʿati al-khāmisati min masāʾi al-yawmi."
      ],
      [
        "The members will leave after voting on the bill.",
        "سَيَنْصَرِفُ الأَعْضَاءُ بَعْدَ التَّصْوِيتِ عَلَى مَشْرُوعِ الْقَانُونِ.",
        "sayanṣarifu al-aʿḍāʾu baʿda al-taṣwīti ʿalā mashrūʿi al-qānūni."
      ],
      [
        "Did the boys break many cups?",
        "هَلْ كَسَرَ الأَوْلَادُ فَنَاجِينَ كَثِيرَةً؟",
        "hal kasara al-awlādu fanājīna kathīratan?"
      ]
    ],
    "learn": [
      "Committees",
      "legislation",
      "and voting"
    ],
    "sourceLessonRange": [
      49,
      49
    ],
    "sourceFiles": [
      {
        "filename": "lesson049-side 1.docx",
        "side": 1,
        "lessonRange": [
          49,
          49
        ]
      },
      {
        "filename": "lesson049side 2.docx",
        "side": 2,
        "lessonRange": [
          49,
          49
        ]
      }
    ]
  },
  "50": {
    "subtitle": "Petroleum companies and changing jobs",
    "vocab": [
      [
        "difference",
        "اِخْتِلَاف",
        "ikhtilāf",
        "Noun"
      ],
      [
        "I differ from",
        "أَخْتَلِفُ عَنْ",
        "akhtalifu ʿan",
        "Verb"
      ],
      [
        "month",
        "شَهْر",
        "shahr",
        "Noun",
        "—",
        "أَشْهُر"
      ],
      [
        "plural of month",
        "أَشْهُر",
        "ashhur",
        "Plural"
      ],
      [
        "Kuwait",
        "الْكُوَيْت",
        "al-kuwayt",
        "Place name"
      ],
      [
        "rich",
        "غَنِيّ",
        "ghanī",
        "Adjective",
        "—",
        "أَغْنِيَاء"
      ],
      [
        "plural of rich",
        "أَغْنِيَاء",
        "aghniyāʾ",
        "Plural"
      ],
      [
        "rich in",
        "غَنِيّ بِـ",
        "ghanī bi",
        "Adjective"
      ],
      [
        "editorial",
        "مَقَالٌ افْتِتَاحِيٌّ",
        "maqālun iftitāḥiyyun",
        "Noun"
      ],
      [
        "petroleum; oil",
        "نَفْط",
        "nafṭ",
        "Noun"
      ],
      [
        "I meet with",
        "أَجْتَمِعُ بِـ",
        "ajtamiʿu bi",
        "Verb"
      ],
      [
        "I receive",
        "أَسْتَلِمُ",
        "astalimu",
        "Verb"
      ],
      [
        "I listen to",
        "أَسْتَمِعُ إِلَى",
        "astamiʿu ilā",
        "Verb"
      ],
      [
        "I participate in",
        "أَشْتَرِكُ فِي",
        "ashtariku fī",
        "Verb"
      ],
      [
        "I work",
        "أَشْتَغِلُ",
        "ashtaghilu",
        "Verb"
      ]
    ],
    "sentences": [
      [
        "Where do you work, Professor Mahmoud?",
        "أَيْنَ تَشْتَغِلُ يَا أُسْتَاذُ مَحْمُودُ؟",
        "ayna tashtaghilu yā ustādhu maḥmūdu?"
      ],
      [
        "I work at Aramco.",
        "أَشْتَغِلُ فِي شَرِكَةِ أَرَامْكُو.",
        "ashtaghilu fī sharikati arāmkū."
      ],
      [
        "After three months I will move to another company.",
        "بَعْدَ ثَلَاثَةِ أَشْهُرٍ سَأَنْتَقِلُ إِلَى شَرِكَةٍ أُخْرَى.",
        "baʿda thalāthati ashhurin sa-antaqilu ilā sharikatin ukhrā."
      ],
      [
        "I will receive the official letter soon, God willing.",
        "سَأَسْتَلِمُ الرِّسَالَةَ الرَّسْمِيَّةَ قَرِيبًا إِنْ شَاءَ اللَّهُ.",
        "sa-astalimu al-risālata al-rasmiyyata qarīban in shāʾa Allāhu."
      ]
    ],
    "learn": [
      "Petroleum companies and changing jobs"
    ],
    "sourceLessonRange": [
      50,
      50
    ],
    "sourceFiles": [
      {
        "filename": "lesson050-side 1.docx",
        "side": 1,
        "lessonRange": [
          50,
          50
        ]
      }
    ]
  },
  "51": {
    "subtitle": "Delegations, expertise, and resources",
    "vocab": [
      [
        "I consider unlikely",
        "أَسْتَبْعِدُ",
        "astabʿidu",
        "Verb"
      ],
      [
        "I use; employ",
        "أَسْتَخْدِمُ",
        "astakhdimu",
        "Verb"
      ],
      [
        "extraction",
        "الاِسْتِخْرَاج",
        "al-istikhrāj",
        "Verbal noun"
      ],
      [
        "I extract",
        "أَسْتَخْرِجُ",
        "astakhriju",
        "Verb"
      ],
      [
        "I use",
        "أَسْتَعْمِلُ",
        "astaʿmilu",
        "Verb"
      ],
      [
        "expert",
        "خَبِير",
        "khabīr",
        "Noun",
        "—",
        "خُبَرَاء"
      ],
      [
        "plural of expert",
        "خُبَرَاء",
        "khubarāʾ",
        "Plural"
      ],
      [
        "arrival",
        "قُدُوم",
        "qudūm",
        "Noun"
      ],
      [
        "napalm",
        "نَابَالْم",
        "nābālm",
        "Noun"
      ],
      [
        "transportation",
        "نَقْل",
        "naql",
        "Noun"
      ],
      [
        "national; domestic",
        "وَطَنِيّ",
        "waṭanī",
        "Adjective"
      ],
      [
        "delegation",
        "وَفْد",
        "wafd",
        "Noun",
        "—",
        "وُفُود"
      ],
      [
        "plural of delegation",
        "وُفُود",
        "wufūd",
        "Plural"
      ],
      [
        "I retrieve",
        "أَسْتَرْجِعُ",
        "astarjiʿu",
        "Verb"
      ],
      [
        "I inquire about",
        "أَسْتَفْهِمُ عَنْ",
        "astafhimu ʿan",
        "Verb"
      ],
      [
        "I receive; welcome",
        "أَسْتَقْبِلُ",
        "astaqbilu",
        "Verb"
      ],
      [
        "I enjoy",
        "أَسْتَمْتِعُ",
        "astamtiʿu",
        "Verb"
      ],
      [
        "I denounce",
        "أَسْتَنْكِرُ",
        "astankiru",
        "Verb"
      ],
      [
        "I wake up",
        "أَسْتَيْقِظُ",
        "astayqiẓu",
        "Verb"
      ]
    ],
    "sentences": [
      [
        "Who will receive the American delegation?",
        "مَنْ سَيَسْتَقْبِلُ الْوَفْدَ الأَمْرِيكِيَّ؟",
        "man sayastaqbilu al-wafda al-amrīkiyya?"
      ],
      [
        "I will go to the minister's office and inquire about the time.",
        "سَأَذْهَبُ إِلَى مَكْتَبِ الْوَزِيرِ وَأَسْتَفْهِمُ عَنِ الْمَوْعِدِ.",
        "sa-adhhabu ilā maktabi al-wazīri wa-astafhimu ʿani al-mawʿidi."
      ],
      [
        "Will the delegation meet the president? I consider that unlikely.",
        "هَلْ سَيُقَابِلُ الْوَفْدُ رَئِيسَ الْجُمْهُورِيَّةِ؟ أَسْتَبْعِدُ ذَلِكَ.",
        "hal sayuqābilu al-wafdu raʾīsa al-jumhūriyyati? astabʿidu dhālika."
      ],
      [
        "There are sixty-seven female students in the school.",
        "فِي الْمَدْرَسَةِ سَبْعٌ وَسِتُّونَ طَالِبَةً.",
        "fī al-madrasati sabʿun wa-sittūna ṭālibatan."
      ]
    ],
    "learn": [
      "Delegations",
      "expertise",
      "and resources"
    ],
    "sourceLessonRange": [
      51,
      51
    ],
    "sourceFiles": [
      {
        "filename": "lesson051-side 1.docx",
        "side": 1,
        "lessonRange": [
          51,
          51
        ]
      },
      {
        "filename": "lesson051-side 2.docx",
        "side": 2,
        "lessonRange": [
          51,
          51
        ]
      }
    ]
  },
  "52": {
    "subtitle": "Elections and systems of government",
    "vocab": [
      [
        "sister",
        "أُخْت",
        "ukht",
        "Noun",
        "—",
        "أَخَوَات"
      ],
      [
        "plural of sister",
        "أَخَوَات",
        "akhawāt",
        "Plural"
      ],
      [
        "I fail",
        "أُخْفِقُ",
        "ukhfiqu",
        "Verb"
      ],
      [
        "last; latest",
        "أَخِير",
        "akhīr",
        "Adjective"
      ],
      [
        "Oxford",
        "أُكْسْفُورْد",
        "uksfūrd",
        "Place name"
      ],
      [
        "the only one",
        "الْوَحِيد",
        "al-waḥīd",
        "Adjective"
      ],
      [
        "examination",
        "اِمْتِحَان",
        "imtiḥān",
        "Noun"
      ],
      [
        "security",
        "أَمْن",
        "amn",
        "Noun"
      ],
      [
        "security office",
        "مَكْتَبُ الأَمْنِ",
        "maktabu al-amni",
        "Noun"
      ],
      [
        "police; security personnel",
        "رِجَالُ الأَمْنِ",
        "rijālu al-amni",
        "Noun"
      ],
      [
        "election",
        "اِنْتِخَاب",
        "intikhāb",
        "Noun"
      ],
      [
        "electoral; elective",
        "اِنْتِخَابِيّ",
        "intikhābī",
        "Adjective"
      ],
      [
        "I elect",
        "أَنْتَخِبُ",
        "antakhibu",
        "Verb"
      ],
      [
        "parliament",
        "بَرْلَمَان",
        "barlamān",
        "Noun"
      ],
      [
        "Great Britain",
        "بَرِيطَانِيَا الْعُظْمَى",
        "barīṭāniyā al-ʿuẓmā",
        "Place name"
      ],
      [
        "British",
        "بَرِيطَانِيّ",
        "barīṭānī",
        "Adjective"
      ],
      [
        "republic",
        "جُمْهُورِيَّة",
        "jumhūriyya",
        "Noun"
      ],
      [
        "rule; government",
        "حُكْم",
        "ḥukm",
        "Noun"
      ],
      [
        "monarchy",
        "الْحُكْمُ الْمَلَكِيُّ",
        "al-ḥukmu al-malakiyyu",
        "Noun"
      ],
      [
        "vote; voice",
        "صَوْت",
        "ṣawt",
        "Noun",
        "—",
        "أَصْوَات"
      ],
      [
        "plural of vote; voice",
        "أَصْوَات",
        "aṣwāt",
        "Plural"
      ],
      [
        "opportunity",
        "فُرْصَة",
        "furṣa",
        "Noun"
      ],
      [
        "as soon as possible",
        "فِي أَقْرَبِ فُرْصَةٍ",
        "fī aqrabi furṣatin",
        "Expression"
      ],
      [
        "difference",
        "فَرْق",
        "farq",
        "Noun",
        "—",
        "فُرُوق"
      ],
      [
        "plural of difference",
        "فُرُوق",
        "furūq",
        "Plural"
      ],
      [
        "candidate",
        "مُرَشَّح",
        "murashshaḥ",
        "Noun"
      ],
      [
        "kingdom",
        "مَمْلَكَة",
        "mamlaka",
        "Noun",
        "—",
        "مَمَالِك"
      ],
      [
        "plural of kingdom",
        "مَمَالِك",
        "mamālik",
        "Plural"
      ],
      [
        "I succeed",
        "أَنْجَحُ",
        "anjaḥu",
        "Verb"
      ],
      [
        "system",
        "نِظَام",
        "niẓām",
        "Noun",
        "—",
        "أَنْظِمَة"
      ],
      [
        "plural of system",
        "أَنْظِمَة",
        "anẓima",
        "Plural"
      ],
      [
        "hereditary",
        "وِرَاثِيّ",
        "wirāthī",
        "Adjective"
      ]
    ],
    "sentences": [
      [
        "What are the systems of government in the Arab world?",
        "مَا أَنْظِمَةُ الْحُكْمِ فِي الْعَالَمِ الْعَرَبِيِّ؟",
        "mā anẓimatu al-ḥukmi fī al-ʿālami al-ʿarabiyyi?"
      ],
      [
        "The monarchy is hereditary and the republic is elective.",
        "النِّظَامُ الْمَلَكِيُّ وِرَاثِيٌّ وَالنِّظَامُ الْجُمْهُورِيُّ انْتِخَابِيٌّ.",
        "al-niẓāmu al-malakiyyu wirāthiyyun wa-l-niẓāmu al-jumhūriyyu intikhābiyyun."
      ],
      [
        "Is that the only difference?",
        "هَلْ هَذَا هُوَ الْفَرْقُ الْوَحِيدُ؟",
        "hal hādhā huwa al-farqu al-waḥīdu?"
      ],
      [
        "There are seven colleges in our university.",
        "فِي جَامِعَتِنَا سَبْعُ كُلِّيَّاتٍ.",
        "fī jāmiʿatinā sabʿu kulliyyātin."
      ]
    ],
    "learn": [
      "Elections and systems of government"
    ],
    "sourceLessonRange": [
      52,
      52
    ],
    "sourceFiles": [
      {
        "filename": "lesson052-side 1.docx",
        "side": 1,
        "lessonRange": [
          52,
          52
        ]
      },
      {
        "filename": "lesson052-side 2.docx",
        "side": 2,
        "lessonRange": [
          52,
          52
        ]
      }
    ]
  },
  "53": {
    "subtitle": "Family, weddings, and summer travel",
    "vocab": [
      [
        "paternal cousin (male)",
        "ابْنُ عَمٍّ",
        "ibnu ʿammin",
        "Noun",
        "—",
        "أَبْنَاءُ عَمٍّ"
      ],
      [
        "plural of paternal cousin (male)",
        "أَبْنَاءُ عَمٍّ",
        "abnāʾu ʿammin",
        "Plural"
      ],
      [
        "paternal cousin (female)",
        "ابْنَةُ عَمٍّ",
        "ibnatu ʿammin",
        "Noun",
        "—",
        "بَنَاتُ عَمٍّ"
      ],
      [
        "plural of paternal cousin (female)",
        "بَنَاتُ عَمٍّ",
        "banātu ʿammin",
        "Plural"
      ],
      [
        "son",
        "ابْن",
        "ibn",
        "Noun",
        "—",
        "أَبْنَاء"
      ],
      [
        "plural of son",
        "أَبْنَاء",
        "abnāʾ",
        "Plural"
      ],
      [
        "news item",
        "خَبَر",
        "khabar",
        "Noun",
        "—",
        "أَخْبَار"
      ],
      [
        "plural of news item",
        "أَخْبَار",
        "akhbār",
        "Plural"
      ],
      [
        "family",
        "أُسْرَة",
        "usra",
        "Noun",
        "—",
        "أُسَر"
      ],
      [
        "plural of family",
        "أُسَر",
        "usar",
        "Plural"
      ],
      [
        "work; occupation",
        "عَمَل",
        "ʿamal",
        "Noun",
        "—",
        "أَعْمَال"
      ],
      [
        "plural of work; occupation",
        "أَعْمَال",
        "aʿmāl",
        "Plural"
      ],
      [
        "August",
        "أَغُسْطُس",
        "aghusṭus",
        "Month"
      ],
      [
        "public security",
        "الأَمْنُ الْعَامُّ",
        "al-amnu al-ʿāmmu",
        "Noun"
      ],
      [
        "training",
        "تَدْرِيب",
        "tadrīb",
        "Noun"
      ],
      [
        "Switzerland",
        "سُوِيسْرَا",
        "suwisrā",
        "Place name"
      ],
      [
        "honeymoon",
        "شَهْرُ الْعَسَلِ",
        "shahru al-ʿasali",
        "Noun"
      ],
      [
        "young woman",
        "فَتَاة",
        "fatāh",
        "Noun"
      ],
      [
        "spending (time)",
        "الْقَضَاء",
        "al-qaḍāʾ",
        "Verbal noun"
      ],
      [
        "summer resort",
        "مَصِيف",
        "maṣīf",
        "Noun",
        "—",
        "مَصَايِف"
      ],
      [
        "plural of summer resort",
        "مَصَايِف",
        "maṣāyif",
        "Plural"
      ],
      [
        "people",
        "نَاس",
        "nās",
        "Noun"
      ],
      [
        "July",
        "يُولْيُو",
        "yūlyū",
        "Month"
      ],
      [
        "June",
        "يُونْيُو",
        "yūnyū",
        "Month"
      ]
    ],
    "sentences": [
      [
        "I have a paternal cousin named Saeed.",
        "لِي ابْنُ عَمٍّ اسْمُهُ سَعِيدٌ.",
        "lī ibnu ʿammin ismuhu saʿīdun."
      ],
      [
        "He works for an oil company in Kuwait.",
        "يَعْمَلُ فِي شَرِكَةِ نَفْطٍ فِي الْكُوَيْتِ.",
        "yaʿmalu fī sharikati nafṭin fī al-kuwayti."
      ],
      [
        "The bridegroom and his bride went to Switzerland for their honeymoon.",
        "ذَهَبَ الْعَرِيسُ وَعَرُوسُهُ إِلَى سُوِيسْرَا لِقَضَاءِ شَهْرِ الْعَسَلِ.",
        "dhahaba al-ʿarīsu wa-ʿarūsuhu ilā suwisrā li-qaḍāʾi shahri al-ʿasali."
      ],
      [
        "I received a long letter from my cousin yesterday.",
        "اسْتَلَمْتُ مِنِ ابْنِ عَمِّي أَمْسِ رِسَالَةً طَوِيلَةً.",
        "istalamtu mini ibni ʿammī amsi risālatan ṭawīlatan."
      ]
    ],
    "learn": [
      "Family",
      "weddings",
      "and summer travel"
    ],
    "sourceLessonRange": [
      53,
      53
    ],
    "sourceFiles": [
      {
        "filename": "lesson053-side 1.docx",
        "side": 1,
        "lessonRange": [
          53,
          53
        ]
      }
    ]
  },
  "54": {
    "subtitle": "Broadcasting, cooperation, and education",
    "vocab": [
      [
        "economy; economics",
        "اِقْتِصَاد",
        "iqtiṣād",
        "Noun"
      ],
      [
        "God",
        "اللَّه",
        "Allāh",
        "Noun"
      ],
      [
        "under; below",
        "تَحْتَ",
        "taḥta",
        "Preposition"
      ],
      [
        "I improve",
        "أَتَحَسَّنُ",
        "ataḥassanu",
        "Verb"
      ],
      [
        "I cooperate",
        "أَتَعَاوَنُ",
        "ataʿāwanu",
        "Verb"
      ],
      [
        "cooperation",
        "التَّعَاوُن",
        "al-taʿāwun",
        "Verbal noun"
      ],
      [
        "report",
        "تَقْرِير",
        "taqrīr",
        "Noun",
        "—",
        "تَقَارِير"
      ],
      [
        "plural of report",
        "تَقَارِير",
        "taqārīr",
        "Plural"
      ],
      [
        "currently",
        "حَالِيًّا",
        "ḥāliyyan",
        "Adverb"
      ],
      [
        "broadcasting station",
        "دَارُ الإِذَاعَةِ",
        "dāru al-idhāʿati",
        "Noun",
        "—",
        "دُورُ الإِذَاعَةِ"
      ],
      [
        "plural of broadcasting station",
        "دُورُ الإِذَاعَةِ",
        "dūru al-idhāʿati",
        "Plural"
      ],
      [
        "gentlemen",
        "سَادَة",
        "sāda",
        "Noun"
      ],
      [
        "ladies",
        "سَيِّدَات",
        "sayyidāt",
        "Noun"
      ],
      [
        "ladies and gentlemen",
        "سَيِّدَاتِي وَسَادَتِي",
        "sayyidātī wa-sādatī",
        "Expression"
      ],
      [
        "police station",
        "دَارُ الشُّرْطَةِ",
        "dāru al-shurṭati",
        "Noun"
      ],
      [
        "number",
        "عَدَد",
        "ʿadad",
        "Noun",
        "—",
        "أَعْدَاد"
      ],
      [
        "plural of number",
        "أَعْدَاد",
        "aʿdād",
        "Plural"
      ],
      [
        "above",
        "فَوْقَ",
        "fawqa",
        "Preposition"
      ],
      [
        "I represent",
        "أُمَثِّلُ",
        "umaththilu",
        "Verb"
      ],
      [
        "welcome",
        "مَرْحَبًا بِكَ",
        "marḥaban bika",
        "Expression"
      ],
      [
        "unity",
        "وَحْدَة",
        "waḥda",
        "Noun"
      ],
      [
        "May God grant you success",
        "وَفَّقَكَ اللَّهُ",
        "waffaqaka Allāhu",
        "Expression"
      ]
    ],
    "sentences": [
      [
        "Ladies and gentlemen, good morning.",
        "سَيِّدَاتِي وَسَادَتِي، صَبَاحُ الْخَيْرِ.",
        "sayyidātī wa-sādatī, ṣabāḥu al-khayri."
      ],
      [
        "When did you leave Baghdad? I left it a week ago.",
        "مَتَى غَادَرْتُمْ بَغْدَادَ؟ غَادَرْتُهَا مُنْذُ أُسْبُوعٍ.",
        "matā ghādartum baghdāda? ghādartuhā mundhu usbūʿin."
      ],
      [
        "The conference will discuss educational problems in the Arab countries.",
        "سَيَبْحَثُ الْمُؤْتَمَرُ مُشْكِلَاتِ التَّعْلِيمِ فِي الدُّوَلِ الْعَرَبِيَّةِ.",
        "sayabḥathu al-muʾtamaru mushkilāti al-taʿlīmi fī al-duwali al-ʿarabiyyati."
      ],
      [
        "Our number is more than twenty-one teachers.",
        "عَدَدُنَا أَكْثَرُ مِنْ وَاحِدٍ وَعِشْرِينَ مُعَلِّمًا.",
        "ʿadadunā aktharu min wāḥidin wa-ʿishrīna muʿalliman."
      ]
    ],
    "learn": [
      "Broadcasting",
      "cooperation",
      "and education"
    ],
    "sourceLessonRange": [
      54,
      54
    ],
    "sourceFiles": [
      {
        "filename": "lesson054-side 1.docx",
        "side": 1,
        "lessonRange": [
          54,
          54
        ]
      },
      {
        "filename": "lesson054-side 2.docx",
        "side": 2,
        "lessonRange": [
          54,
          54
        ]
      }
    ]
  },
  "55": {
    "subtitle": "The dual and identifying two people",
    "vocab": [
      [
        "these two (masculine nominative)",
        "هَذَانِ",
        "hādhāni",
        "Demonstrative"
      ],
      [
        "these two (feminine nominative)",
        "هَاتَانِ",
        "hātāni",
        "Demonstrative"
      ],
      [
        "these two (masculine oblique)",
        "هَذَيْنِ",
        "hādhayni",
        "Demonstrative"
      ],
      [
        "these two (feminine oblique)",
        "هَاتَيْنِ",
        "hātayni",
        "Demonstrative"
      ],
      [
        "who; which (masculine dual nominative)",
        "اللَّذَانِ",
        "alladhāni",
        "Relative pronoun"
      ],
      [
        "who; which (feminine dual nominative)",
        "اللَّتَانِ",
        "allatāni",
        "Relative pronoun"
      ],
      [
        "who; which (masculine dual oblique)",
        "اللَّذَيْنِ",
        "alladhayni",
        "Relative pronoun"
      ],
      [
        "who; which (feminine dual oblique)",
        "اللَّتَيْنِ",
        "allatayni",
        "Relative pronoun"
      ],
      [
        "two young men",
        "شَابَّانِ",
        "shābbāni",
        "Dual noun"
      ],
      [
        "two young women",
        "شَابَّتَانِ",
        "shābbatāni",
        "Dual noun"
      ]
    ],
    "sentences": [
      [
        "Who are these two young men with the professor?",
        "مَنْ هَذَانِ الشَّابَّانِ اللَّذَانِ مَعَ الأُسْتَاذِ؟",
        "man hādhāni al-shābbāni alladhāni maʿa al-ustādhi?"
      ],
      [
        "These are the professor's two friends.",
        "هَذَانِ صَدِيقَا الأُسْتَاذِ.",
        "hādhāni ṣadīqā al-ustādhi."
      ],
      [
        "These are the professor's two female students.",
        "هَاتَانِ تِلْمِيذَتَا الأُسْتَاذِ.",
        "hātāni tilmīdhatā al-ustādhi."
      ],
      [
        "The two pupils who are in my office are from Syria.",
        "التِّلْمِيذَانِ اللَّذَانِ فِي مَكْتَبِي مِنْ سُورِيَا.",
        "al-tilmīdhāni alladhāni fī maktabī min sūriyā."
      ]
    ],
    "learn": [
      "The dual and identifying two people"
    ],
    "sourceLessonRange": [
      55,
      55
    ],
    "sourceFiles": [
      {
        "filename": "lesson055-side 1.docx",
        "side": 1,
        "lessonRange": [
          55,
          55
        ]
      },
      {
        "filename": "lesson055-side 2.docx",
        "side": 2,
        "lessonRange": [
          55,
          55
        ]
      }
    ]
  },
  "56": {
    "subtitle": "Newsrooms, dual pronouns, and taking",
    "vocab": [
      [
        "I take",
        "آخُذُ",
        "ākhudhu",
        "Verb"
      ],
      [
        "outside",
        "خَارِجَ",
        "khārija",
        "Preposition"
      ],
      [
        "abroad",
        "فِي الْخَارِجِ",
        "fī al-khāriji",
        "Expression"
      ],
      [
        "inside",
        "دَاخِلَ",
        "dākhila",
        "Preposition"
      ],
      [
        "Ministry of the Interior",
        "وِزَارَةُ الدَّاخِلِيَّةِ",
        "wizāratu al-dākhiliyyati",
        "Noun"
      ],
      [
        "line",
        "سَطْر",
        "saṭr",
        "Noun",
        "—",
        "سُطُور"
      ],
      [
        "plural of line",
        "سُطُور",
        "suṭūr",
        "Plural"
      ],
      [
        "affair; matter",
        "شَأْن",
        "shaʾn",
        "Noun",
        "—",
        "شُؤُون"
      ],
      [
        "plural of affair; matter",
        "شُؤُون",
        "shuʾūn",
        "Plural"
      ],
      [
        "picture",
        "صُورَة",
        "ṣūra",
        "Noun",
        "—",
        "صُوَر"
      ],
      [
        "plural of picture",
        "صُوَر",
        "ṣuwar",
        "Plural"
      ],
      [
        "photograph",
        "صُورَةٌ فُوتُوغْرَافِيَّةٌ",
        "ṣūratun fūtūghrāfiyyatun",
        "Noun"
      ],
      [
        "about what?",
        "عَمَّ",
        "ʿamma",
        "Interrogative"
      ],
      [
        "return",
        "عَوْدَة",
        "ʿawda",
        "Noun"
      ],
      [
        "editor",
        "مُحَرِّر",
        "muḥarrir",
        "Noun"
      ],
      [
        "photographer",
        "مُصَوِّر",
        "muṣawwir",
        "Noun"
      ],
      [
        "you two",
        "أَنْتُمَا",
        "antumā",
        "Pronoun"
      ],
      [
        "your (two people)",
        "ـكُمَا",
        "kumā",
        "Possessive suffix"
      ],
      [
        "their (two people)",
        "ـهُمَا",
        "humā",
        "Possessive suffix"
      ]
    ],
    "sentences": [
      [
        "Are you two journalists?",
        "هَلْ أَنْتُمَا صَحْفِيَّانِ؟",
        "hal antumā ṣaḥfiyyāni?"
      ],
      [
        "We work at the headquarters of Al-Ahram newspaper.",
        "نَعْمَلُ فِي الْمَقَرِّ الرَّئِيسِيِّ لِجَرِيدَةِ الأَهْرَامِ.",
        "naʿmalu fī al-maqarri al-raʾīsiyyi li-jarīdati al-ahrāmi."
      ],
      [
        "Their office is beside ours.",
        "مَكْتَبُهُمَا بِجَانِبِ مَكْتَبِنَا.",
        "maktabuhumā bi-jānibi maktabinā."
      ],
      [
        "June is the sixth month of the year.",
        "يُونْيُو سَادِسُ أَشْهُرِ السَّنَةِ.",
        "yūnyū sādisu ashhuri al-sanati."
      ]
    ],
    "learn": [
      "Newsrooms",
      "dual pronouns",
      "and taking"
    ],
    "sourceLessonRange": [
      56,
      56
    ],
    "sourceFiles": [
      {
        "filename": "lesson056-side 1.docx",
        "side": 1,
        "lessonRange": [
          56,
          56
        ]
      },
      {
        "filename": "lesson056-side 2.docx",
        "side": 2,
        "lessonRange": [
          56,
          56
        ]
      }
    ]
  },
  "57": {
    "subtitle": "Wedding celebrations and dual verbs",
    "vocab": [
      [
        "newlyweds; bride and groom",
        "عَرُوسَانِ",
        "ʿarūsāni",
        "Dual noun"
      ],
      [
        "dawn",
        "فَجْر",
        "fajr",
        "Noun"
      ],
      [
        "already; indeed",
        "قَدْ",
        "qad",
        "Particle"
      ],
      [
        "major general",
        "لِوَاء",
        "liwāʾ",
        "Noun",
        "—",
        "أَلْوِيَة"
      ],
      [
        "plural of major general",
        "أَلْوِيَة",
        "alwiya",
        "Plural"
      ],
      [
        "appointment; time",
        "مِيعَاد",
        "mīʿād",
        "Noun",
        "—",
        "مَوَاعِيد"
      ],
      [
        "plural of appointment; time",
        "مَوَاعِيد",
        "mawāʿīd",
        "Plural"
      ],
      [
        "captain (military rank)",
        "نَقِيب",
        "naqīb",
        "Noun",
        "—",
        "نُقَبَاء"
      ],
      [
        "plural of captain (military rank)",
        "نُقَبَاء",
        "nuqabāʾ",
        "Plural"
      ]
    ],
    "sentences": [
      [
        "Did you two enjoy the party?",
        "هَلِ اسْتَمْتَعْتُمَا بِالْحَفْلَةِ؟",
        "hali istamtaʿtumā bi-l-ḥaflati?"
      ],
      [
        "Each of us gave a small gift.",
        "قَدَّمَ كُلٌّ مِنَّا هَدِيَّةً صَغِيرَةً.",
        "qaddama kullun minnā hadiyyatan ṣaghīratan."
      ],
      [
        "When did you two return from the party? At dawn.",
        "مَتَى رَجَعْتُمَا مِنَ الْحَفْلَةِ؟ فِي الْفَجْرِ.",
        "matā rajaʿtumā mina al-ḥaflati? fī al-fajri."
      ],
      [
        "The company used more than nine cars to transport oil.",
        "اسْتَعْمَلَتِ الشَّرِكَةُ أَكْثَرَ مِنْ تِسْعِ سَيَّارَاتٍ لِنَقْلِ النَّفْطِ.",
        "istaʿmalati al-sharikatu akthara min tisʿi sayyārātin li-naqli al-nafṭi."
      ]
    ],
    "learn": [
      "Wedding celebrations and dual verbs"
    ],
    "sourceLessonRange": [
      57,
      57
    ],
    "sourceFiles": [
      {
        "filename": "lesson057-side 1.docx",
        "side": 1,
        "lessonRange": [
          57,
          57
        ]
      },
      {
        "filename": "lesson057-side 2.docx",
        "side": 2,
        "lessonRange": [
          57,
          57
        ]
      }
    ]
  },
  "58": {
    "subtitle": "Geography, vacation, and dual possessives",
    "vocab": [
      [
        "vacation; leave",
        "إِجَازَة",
        "ijāza",
        "Noun"
      ],
      [
        "strategic",
        "اِسْتِرَاتِيجِيّ",
        "istirātījī",
        "Adjective"
      ],
      [
        "Iran",
        "إِيرَان",
        "īrān",
        "Place name"
      ],
      [
        "south",
        "جَنُوب",
        "janūb",
        "Noun"
      ],
      [
        "travel; journey",
        "سَفَر",
        "safar",
        "Noun",
        "—",
        "أَسْفَار"
      ],
      [
        "plural of travel; journey",
        "أَسْفَار",
        "asfār",
        "Plural"
      ],
      [
        "east",
        "شَرْق",
        "sharq",
        "Noun"
      ],
      [
        "north",
        "شَمَال",
        "shamāl",
        "Noun"
      ],
      [
        "west",
        "غَرْب",
        "gharb",
        "Noun"
      ],
      [
        "duration; period",
        "مُدَّة",
        "mudda",
        "Noun",
        "—",
        "مُدَد"
      ],
      [
        "plural of duration; period",
        "مُدَد",
        "mudad",
        "Plural"
      ],
      [
        "location",
        "مَوْقِع",
        "mawqiʿ",
        "Noun",
        "—",
        "مَوَاقِع"
      ],
      [
        "plural of location",
        "مَوَاقِع",
        "mawāqiʿ",
        "Plural"
      ],
      [
        "I am located; fall",
        "أَقَعُ",
        "aqaʿu",
        "Verb"
      ]
    ],
    "sentences": [
      [
        "Do you two know Adnan and Kanaan?",
        "هَلْ تَعْرِفَانِ عَدْنَانَ وَكَنْعَانَ؟",
        "hal taʿrifāni ʿadnāna wa-kanʿāna?"
      ],
      [
        "They are our two friends.",
        "هُمَا صَدِيقَانَا.",
        "humā ṣadīqānā."
      ],
      [
        "They completed their studies a year ago.",
        "أَكْمَلَا دِرَاسَتَهُمَا مُنْذُ عَامٍ.",
        "akmalā dirāsatahumā mundhu ʿāmin."
      ],
      [
        "I want to know them.",
        "أُرِيدُ أَنْ أَعْرِفَهُمَا.",
        "urīdu an aʿrifahumā."
      ]
    ],
    "learn": [
      "Geography",
      "vacation",
      "and dual possessives"
    ],
    "sourceLessonRange": [
      58,
      58
    ],
    "sourceFiles": [
      {
        "filename": "lesson058-side 1.docx",
        "side": 1,
        "lessonRange": [
          58,
          58
        ]
      },
      {
        "filename": "lesson058-side 2.docx",
        "side": 2,
        "lessonRange": [
          58,
          58
        ]
      }
    ]
  },
  "59": {
    "subtitle": "Religion, fasting, and holidays",
    "vocab": [
      [
        "Islamic",
        "إِسْلَامِيّ",
        "islāmī",
        "Adjective"
      ],
      [
        "mosque",
        "جَامِع",
        "jāmiʿ",
        "Noun",
        "—",
        "جَوَامِع"
      ],
      [
        "plural of mosque",
        "جَوَامِع",
        "jawāmiʿ",
        "Plural"
      ],
      [
        "Al-Azhar Mosque",
        "الْجَامِعُ الأَزْهَرُ",
        "al-jāmiʿu al-azharu",
        "Noun"
      ],
      [
        "Ramadan",
        "رَمَضَان",
        "ramaḍān",
        "Noun"
      ],
      [
        "prayer",
        "صَلَاة",
        "ṣalāh",
        "Noun"
      ],
      [
        "fasting",
        "الصَّوْم",
        "al-ṣawm",
        "Verbal noun"
      ],
      [
        "holiday; festival",
        "عِيد",
        "ʿīd",
        "Noun",
        "—",
        "أَعْيَاد"
      ],
      [
        "plural of holiday; festival",
        "أَعْيَاد",
        "aʿyād",
        "Plural"
      ],
      [
        "Eid al-Fitr",
        "عِيدُ الْفِطْرِ",
        "ʿīdu al-fiṭri",
        "Noun"
      ],
      [
        "Christmas",
        "عِيدُ الْمِيلَادِ",
        "ʿīdu al-mīlādi",
        "Noun"
      ],
      [
        "poor",
        "فَقِير",
        "faqīr",
        "Adjective",
        "—",
        "فُقَرَاء"
      ],
      [
        "plural of poor",
        "فُقَرَاء",
        "fuqarāʾ",
        "Plural"
      ],
      [
        "saying; statement",
        "قَوْل",
        "qawl",
        "Noun",
        "—",
        "أَقْوَال"
      ],
      [
        "plural of saying; statement",
        "أَقْوَال",
        "aqwāl",
        "Plural"
      ],
      [
        "holiday greeting",
        "كُلُّ عَامٍ وَأَنْتَ بِخَيْرٍ",
        "kullu ʿāmin wa-anta bi-khayrin",
        "Expression"
      ],
      [
        "Muslim",
        "مُسْلِم",
        "muslim",
        "Noun"
      ],
      [
        "Mecca",
        "مَكَّة",
        "makka",
        "Place name"
      ],
      [
        "forbidden",
        "مَمْنُوع",
        "mamnūʿ",
        "Adjective"
      ],
      [
        "birth",
        "مِيلَاد",
        "mīlād",
        "Noun"
      ],
      [
        "calendar year (Common Era)",
        "سَنَةٌ مِيلَادِيَّةٌ",
        "sanatun mīlādiyyatun",
        "Noun"
      ],
      [
        "duty",
        "وَاجِب",
        "wājib",
        "Noun",
        "—",
        "وَاجِبَات"
      ],
      [
        "plural of duty",
        "وَاجِبَات",
        "wājibāt",
        "Plural"
      ],
      [
        "clear",
        "وَاضِح",
        "wāḍiḥ",
        "Adjective"
      ],
      [
        "I visit",
        "أَزُورُ",
        "azūru",
        "Verb"
      ],
      [
        "I fast",
        "أَصُومُ",
        "aṣūmu",
        "Verb"
      ],
      [
        "I say",
        "أَقُولُ",
        "aqūlu",
        "Verb"
      ]
    ],
    "sentences": [
      [
        "Eid al-Fitr is among the most important Islamic holidays.",
        "عِيدُ الْفِطْرِ مِنْ أَهَمِّ الأَعْيَادِ الإِسْلَامِيَّةِ.",
        "ʿīdu al-fiṭri min ahammi al-aʿyādi al-islāmiyyati."
      ],
      [
        "After the holiday prayer, many Muslims visit their relatives.",
        "بَعْدَ صَلَاةِ الْعِيدِ يَزُورُ كَثِيرٌ مِنَ الْمُسْلِمِينَ أَقْرِبَاءَهُمْ.",
        "baʿda ṣalāti al-ʿīdi yazūru kathīrun mina al-muslimīna aqribāʾahum."
      ],
      [
        "Eating during the daytime is forbidden while fasting.",
        "الأَكْلُ فِي النَّهَارِ مَمْنُوعٌ أَثْنَاءَ الصَّوْمِ.",
        "al-aklu fī al-nahāri mamnūʿun athnāʾa al-ṣawmi."
      ]
    ],
    "learn": [
      "Religion",
      "fasting",
      "and holidays"
    ],
    "sourceLessonRange": [
      59,
      59
    ],
    "sourceFiles": [
      {
        "filename": "lesson059-side 1.docx",
        "side": 1,
        "lessonRange": [
          59,
          59
        ]
      },
      {
        "filename": "lesson059-side 2.docx",
        "side": 2,
        "lessonRange": [
          59,
          59
        ]
      }
    ]
  },
  "60": {
    "subtitle": "Selling, walking, and school attendance",
    "vocab": [
      [
        "sale; selling",
        "الْبَيْع",
        "al-bayʿ",
        "Verbal noun"
      ],
      [
        "for sale",
        "لِلْبَيْعِ",
        "li-l-bayʿi",
        "Expression"
      ],
      [
        "revolution",
        "ثَوْرَة",
        "thawra",
        "Noun"
      ],
      [
        "mistake",
        "خَطَأ",
        "khaṭaʾ",
        "Noun",
        "—",
        "أَخْطَاء"
      ],
      [
        "plural of mistake",
        "أَخْطَاء",
        "akhṭāʾ",
        "Plural"
      ],
      [
        "it is wrong to",
        "مِنَ الْخَطَإِ أَنْ",
        "mina al-khaṭaʾi an",
        "Expression"
      ],
      [
        "walking",
        "السَّيْر",
        "al-sayr",
        "Verbal noun"
      ],
      [
        "I sell",
        "أَبِيعُ",
        "abīʿu",
        "Verb"
      ],
      [
        "I revolt against",
        "أَثُورُ عَلَى",
        "athūru ʿalā",
        "Verb"
      ],
      [
        "I come",
        "أَجِيءُ",
        "ajīʾu",
        "Verb"
      ],
      [
        "I walk",
        "أَسِيرُ",
        "asīru",
        "Verb"
      ],
      [
        "I return",
        "أَعُودُ",
        "aʿūdu",
        "Verb"
      ]
    ],
    "sentences": [
      [
        "How does Huda go to school?",
        "كَيْفَ تَذْهَبُ هُدَى إِلَى الْمَدْرَسَةِ؟",
        "kayfa tadhhabu hudā ilā al-madrasati?"
      ],
      [
        "She usually walks, and her father sometimes takes her in his car.",
        "تَسِيرُ عَادَةً وَيَأْخُذُهَا وَالِدُهَا بِسَيَّارَتِهِ أَحْيَانًا.",
        "tasīru ʿādatan wa-yaʾkhudhuhā wāliduhā bi-sayyāratihi aḥyānan."
      ],
      [
        "His car is old, and he will sell it soon.",
        "سَيَّارَتُهُ قَدِيمَةٌ وَسَيَبِيعُهَا قَرِيبًا.",
        "sayyāratuhu qadīmatun wa-sayabīʿuhā qarīban."
      ],
      [
        "Her absence from school is very rare.",
        "غِيَابُهَا عَنِ الْمَدْرَسَةِ قَلِيلٌ جِدًّا.",
        "ghiyābuhā ʿani al-madrasati qalīlun jiddan."
      ]
    ],
    "learn": [
      "Selling",
      "walking",
      "and school attendance"
    ],
    "sourceLessonRange": [
      60,
      60
    ],
    "sourceFiles": [
      {
        "filename": "lesson060-side 1.docx",
        "side": 1,
        "lessonRange": [
          60,
          60
        ]
      }
    ]
  },
  "61": {
    "subtitle": "Exams, nighttime study, and success",
    "vocab": [
      [
        "I close",
        "أُغْلِقُ",
        "ughliqu",
        "Verb"
      ],
      [
        "at night",
        "بِاللَّيْلِ",
        "bi-l-layli",
        "Expression"
      ],
      [
        "revolutionary; rebel",
        "ثَائِر",
        "thāʾir",
        "Noun",
        "—",
        "ثُوَّار"
      ],
      [
        "plural of revolutionary; rebel",
        "ثُوَّار",
        "thuwwār",
        "Plural"
      ],
      [
        "fear",
        "خَوْف",
        "khawf",
        "Noun"
      ],
      [
        "academic; pertaining to study",
        "دِرَاسِيّ",
        "dirāsī",
        "Adjective"
      ],
      [
        "certificate; degree",
        "شَهَادَة",
        "shahāda",
        "Noun"
      ],
      [
        "throughout",
        "طَوَالَ",
        "ṭawāla",
        "Preposition"
      ],
      [
        "night",
        "لَيْل",
        "layl",
        "Noun"
      ],
      [
        "middle",
        "مُنْتَصَف",
        "muntaṣaf",
        "Noun"
      ],
      [
        "midnight",
        "مُنْتَصَفُ اللَّيْلِ",
        "muntaṣafu al-layli",
        "Noun"
      ],
      [
        "success",
        "نَجَاح",
        "najāḥ",
        "Noun"
      ],
      [
        "daytime",
        "نَهَار",
        "nahār",
        "Noun"
      ],
      [
        "end",
        "نِهَايَة",
        "nihāya",
        "Noun"
      ],
      [
        "weekend",
        "إِجَازَةُ نِهَايَةِ الأُسْبُوعِ",
        "ijāzatu nihāyati al-usbūʿi",
        "Noun"
      ],
      [
        "sleep",
        "النَّوْم",
        "al-nawm",
        "Verbal noun"
      ],
      [
        "I fear",
        "أَخَافُ مِنْ",
        "akhāfu min",
        "Verb"
      ],
      [
        "I obtain",
        "أَنَالُ",
        "anālu",
        "Verb"
      ],
      [
        "I sleep",
        "أَنَامُ",
        "anāmu",
        "Verb"
      ]
    ],
    "sentences": [
      [
        "He studies medicine at Cairo University.",
        "يَدْرُسُ الطِّبَّ فِي جَامِعَةِ الْقَاهِرَةِ.",
        "yadrusu al-ṭibba fī jāmiʿati al-qāhirati."
      ],
      [
        "He will obtain his degree at the end of this academic year.",
        "سَيَنَالُ شَهَادَتَهُ فِي نِهَايَةِ هَذَا الْعَامِ الدِّرَاسِيِّ.",
        "sayanālu shahādatahu fī nihāyati hādhā al-ʿāmi al-dirāsiyyi."
      ],
      [
        "He usually sleeps after midnight.",
        "يَنَامُ بَعْدَ مُنْتَصَفِ اللَّيْلِ عَادَةً.",
        "yanāmu baʿda muntaṣafi al-layli ʿādatan."
      ]
    ],
    "learn": [
      "Exams",
      "nighttime study",
      "and success"
    ],
    "sourceLessonRange": [
      61,
      61
    ],
    "sourceFiles": [
      {
        "filename": "lesson061-side 1.docx",
        "side": 1,
        "lessonRange": [
          61,
          61
        ]
      },
      {
        "filename": "lesson061-side 2.docx",
        "side": 2,
        "lessonRange": [
          61,
          61
        ]
      }
    ]
  },
  "62": {
    "subtitle": "Relatives, awards, and emphatic dual numbers",
    "vocab": [
      [
        "I excel",
        "أَتَفَوَّقُ",
        "atafawwaqu",
        "Verb"
      ],
      [
        "excellence; distinction",
        "التَّفَوُّق",
        "al-tafawwuq",
        "Verbal noun"
      ],
      [
        "award; prize",
        "جَائِزَة",
        "jāʾiza",
        "Noun",
        "—",
        "جَوَائِز"
      ],
      [
        "plural of award; prize",
        "جَوَائِز",
        "jawāʾiz",
        "Plural"
      ],
      [
        "maternal uncle",
        "خَال",
        "khāl",
        "Noun",
        "—",
        "أَخْوَال"
      ],
      [
        "plural of maternal uncle",
        "أَخْوَال",
        "akhwāl",
        "Plural"
      ],
      [
        "maternal aunt",
        "خَالَة",
        "khāla",
        "Noun"
      ],
      [
        "paternal uncle",
        "عَمّ",
        "ʿamm",
        "Noun",
        "—",
        "أَعْمَام"
      ],
      [
        "plural of paternal uncle",
        "أَعْمَام",
        "aʿmām",
        "Plural"
      ],
      [
        "paternal aunt",
        "عَمَّة",
        "ʿamma",
        "Noun"
      ],
      [
        "two (masculine nominative)",
        "اثْنَانِ",
        "ithnāni",
        "Number"
      ],
      [
        "two (feminine nominative)",
        "اثْنَتَانِ",
        "ithnatāni",
        "Number"
      ]
    ],
    "sentences": [
      [
        "There are twenty-two Arab teachers in this school.",
        "فِي هَذِهِ الْمَدْرَسَةِ اثْنَانِ وَعِشْرُونَ أُسْتَاذًا عَرَبِيًّا.",
        "fī hādhihi al-madrasati ithnāni wa-ʿishrūna ustādhan ʿarabiyyan."
      ],
      [
        "They are all my friends.",
        "كُلُّهُمْ أَصْدِقَائِي.",
        "kulluhum aṣdiqāʾī."
      ],
      [
        "Among them are two Egyptians.",
        "بَيْنَهُمْ مِصْرِيَّانِ اثْنَانِ.",
        "baynahum miṣriyyāni ithnāni."
      ]
    ],
    "learn": [
      "Relatives",
      "awards",
      "and emphatic dual numbers"
    ],
    "sourceLessonRange": [
      62,
      62
    ],
    "sourceFiles": [
      {
        "filename": "lesson062-side 1.docx",
        "side": 1,
        "lessonRange": [
          62,
          62
        ]
      }
    ]
  },
  "63": {
    "subtitle": "Good, evil, and causative verbs",
    "vocab": [
      [
        "imam; prayer leader",
        "إِمَام",
        "imām",
        "Noun",
        "—",
        "أَئِمَّة"
      ],
      [
        "plural of imam; prayer leader",
        "أَئِمَّة",
        "aʾimma",
        "Plural"
      ],
      [
        "reward for good deeds",
        "ثَوَاب",
        "thawāb",
        "Noun"
      ],
      [
        "I frighten",
        "أُخَوِّفُ",
        "ukhawwifu",
        "Verb"
      ],
      [
        "good; good deed",
        "خَيْر",
        "khayr",
        "Noun",
        "—",
        "خَيْرَات"
      ],
      [
        "plural of good; good deed",
        "خَيْرَات",
        "khayrāt",
        "Plural"
      ],
      [
        "I offer a choice between",
        "أُخَيِّرُ بَيْنَ",
        "ukhayyiru bayna",
        "Verb"
      ],
      [
        "I encourage interest in",
        "أُرَغِّبُ فِي",
        "uraghghibu fī",
        "Verb"
      ],
      [
        "I direct; guide",
        "أُسَيِّرُ",
        "usayyiru",
        "Verb"
      ],
      [
        "evil; evil deed",
        "شَرّ",
        "sharr",
        "Noun",
        "—",
        "شُرُور"
      ],
      [
        "plural of evil; evil deed",
        "شُرُور",
        "shurūr",
        "Plural"
      ],
      [
        "punishment",
        "عِقَاب",
        "ʿiqāb",
        "Noun"
      ],
      [
        "I impose on",
        "أَفْرِضُ عَلَى",
        "afriḍu ʿalā",
        "Verb"
      ],
      [
        "I make easier for",
        "أُهَوِّنُ عَلَى",
        "uhawwinu ʿalā",
        "Verb"
      ]
    ],
    "sentences": [
      [
        "We went to the mosque for prayer last Friday.",
        "ذَهَبْنَا إِلَى الْجَامِعِ لِلصَّلَاةِ يَوْمَ الْجُمُعَةِ الْمَاضِي.",
        "dhahabnā ilā al-jāmiʿi li-l-ṣalāti yawma al-jumʿati al-māḍī."
      ],
      [
        "The imam encourages people to do good.",
        "يُرَغِّبُ الإِمَامُ النَّاسَ فِي عَمَلِ الْخَيْرِ.",
        "yuraghghibu al-imāmu al-nāsa fī ʿamali al-khayri."
      ],
      [
        "My father encouraged me to study medicine.",
        "رَغَّبَنِي وَالِدِي فِي دِرَاسَةِ الطِّبِّ.",
        "raghghabanī wālidī fī dirāsati al-ṭibbi."
      ]
    ],
    "learn": [
      "Good",
      "evil",
      "and causative verbs"
    ],
    "sourceLessonRange": [
      63,
      63
    ],
    "sourceFiles": [
      {
        "filename": "lesson063-side 1.docx",
        "side": 1,
        "lessonRange": [
          63,
          63
        ]
      }
    ]
  },
  "64": {
    "subtitle": "Independence, colonialism, and causative weak verbs",
    "vocab": [
      [
        "I incite against",
        "أُثِيرُ عَلَى",
        "uthīru ʿalā",
        "Verb"
      ],
      [
        "I frighten",
        "أُخِيفُ",
        "ukhīfu",
        "Verb"
      ],
      [
        "colonialism",
        "اِسْتِعْمَار",
        "istiʿmār",
        "Noun"
      ],
      [
        "independence",
        "اِسْتِقْلَال",
        "istiqlāl",
        "Noun"
      ],
      [
        "I lose; waste",
        "أُضِيعُ",
        "uḍīʿu",
        "Verb"
      ],
      [
        "I reside in",
        "أُقِيمُ فِي",
        "uqīmu fī",
        "Verb"
      ],
      [
        "I put to sleep",
        "أُنِيمُ",
        "unīmu",
        "Verb"
      ],
      [
        "period; time",
        "زَمَن",
        "zaman",
        "Noun",
        "—",
        "أَزْمِنَة"
      ],
      [
        "plural of period; time",
        "أَزْمِنَة",
        "azmina",
        "Plural"
      ],
      [
        "I become lost",
        "أَضِيعُ",
        "aḍīʿu",
        "Verb"
      ],
      [
        "other than",
        "غَيْر",
        "ghayr",
        "Particle"
      ],
      [
        "bomber aircraft",
        "قَاذِفَةُ قَنَابِلَ",
        "qādhifatu qanābila",
        "Noun"
      ],
      [
        "battalion",
        "كَتِيبَة",
        "katība",
        "Noun",
        "—",
        "كَتَائِب"
      ],
      [
        "plural of battalion",
        "كَتَائِب",
        "katāʾib",
        "Plural"
      ],
      [
        "therefore",
        "لِذَلِكَ",
        "li-dhālika",
        "Expression"
      ],
      [
        "probable",
        "مُحْتَمَل",
        "muḥtamal",
        "Adjective"
      ],
      [
        "colony",
        "مُسْتَعْمَرَة",
        "mustaʿmara",
        "Noun"
      ],
      [
        "independent",
        "مُسْتَقِلّ",
        "mustaqill",
        "Adjective"
      ],
      [
        "time",
        "وَقْت",
        "waqt",
        "Noun",
        "—",
        "أَوْقَات"
      ],
      [
        "plural of time",
        "أَوْقَات",
        "awqāt",
        "Plural"
      ]
    ],
    "sentences": [
      [
        "How many years did the French stay in Egypt?",
        "كَمْ عَامًا أَقَامَ الْفَرَنْسِيُّونَ بِمِصْرَ؟",
        "kam ʿāman aqāma al-faransiyyūna bi-miṣra?"
      ],
      [
        "They stayed there three years, then left.",
        "أَقَامُوا بِهَا ثَلَاثَةَ أَعْوَامٍ ثُمَّ تَرَكُوهَا.",
        "aqāmū bihā thalāthata aʿwāmin thumma tarakūhā."
      ],
      [
        "Egypt is an independent state.",
        "مِصْرُ دَوْلَةٌ مُسْتَقِلَّةٌ.",
        "miṣru dawlatun mustaqillatun."
      ],
      [
        "You put your children to sleep.",
        "أَنَمْتَ أَطْفَالَكَ.",
        "anamta aṭfālaka."
      ]
    ],
    "learn": [
      "Independence",
      "colonialism",
      "and causative weak verbs"
    ],
    "sourceLessonRange": [
      64,
      64
    ],
    "sourceFiles": [
      {
        "filename": "lesson064-side 1.docx",
        "side": 1,
        "lessonRange": [
          64,
          64
        ]
      },
      {
        "filename": "lesson064-side 2.docx",
        "side": 2,
        "lessonRange": [
          64,
          64
        ]
      }
    ]
  },
  "65": {
    "subtitle": "Hollow verbs, visits, and distances",
    "vocab": [
      [
        "I sell",
        "أَبِيعُ",
        "abīʿu",
        "Verb"
      ],
      [
        "distance",
        "بُعْد",
        "buʿd",
        "Noun",
        "—",
        "أَبْعَاد"
      ],
      [
        "plural of distance",
        "أَبْعَاد",
        "abʿād",
        "Plural"
      ],
      [
        "at a distance of",
        "عَلَى بُعْدِ",
        "ʿalā buʿdi",
        "Expression"
      ],
      [
        "I revolt against",
        "أَثُورُ عَلَى",
        "athūru ʿalā",
        "Verb"
      ],
      [
        "I come",
        "أَجِيءُ",
        "ajīʾu",
        "Verb"
      ],
      [
        "wing",
        "جَنَاح",
        "janāḥ",
        "Noun",
        "—",
        "أَجْنِحَة"
      ],
      [
        "plural of wing",
        "أَجْنِحَة",
        "ajniḥa",
        "Plural"
      ],
      [
        "I fear",
        "أَخَافُ مِنْ",
        "akhāfu min",
        "Verb"
      ],
      [
        "I visit",
        "أَزُورُ",
        "azūru",
        "Verb"
      ],
      [
        "colleague",
        "زَمِيل",
        "zamīl",
        "Noun",
        "—",
        "زُمَلَاء"
      ],
      [
        "plural of colleague",
        "زُمَلَاء",
        "zumalāʾ",
        "Plural"
      ],
      [
        "I walk",
        "أَسِيرُ",
        "asīru",
        "Verb"
      ],
      [
        "I fast",
        "أَصُومُ",
        "aṣūmu",
        "Verb"
      ],
      [
        "I return",
        "أَعُودُ",
        "aʿūdu",
        "Verb"
      ],
      [
        "I am absent",
        "أَغِيبُ",
        "aghību",
        "Verb"
      ],
      [
        "I do",
        "أَفْعَلُ",
        "afʿalu",
        "Verb"
      ],
      [
        "I say",
        "أَقُولُ",
        "aqūlu",
        "Verb"
      ],
      [
        "kilometer",
        "كِيلُومِتْر",
        "kīlūmitr",
        "Noun"
      ],
      [
        "together",
        "مَعًا",
        "maʿan",
        "Adverb"
      ],
      [
        "mile",
        "مِيل",
        "mīl",
        "Noun",
        "—",
        "أَمْيَال"
      ],
      [
        "plural of mile",
        "أَمْيَال",
        "amyāl",
        "Plural"
      ],
      [
        "I sleep",
        "أَنَامُ",
        "anāmu",
        "Verb"
      ]
    ],
    "sentences": [
      [
        "What did you two do after returning from school yesterday?",
        "مَاذَا فَعَلْتُمَا بَعْدَ عَوْدَتِكُمَا مِنَ الْمَدْرَسَةِ أَمْسِ؟",
        "mādhā faʿaltumā baʿda ʿawdatikumā mina al-madrasati amsi?"
      ],
      [
        "We visited our maternal aunt.",
        "زُرْنَا خَالَتَنَا.",
        "zurnā khālatanā."
      ],
      [
        "Her house is a mile from ours.",
        "بَيْتُهَا عَلَى بُعْدِ مِيلٍ مِنْ بَيْتِنَا.",
        "baytuhā ʿalā buʿdi mīlin min baytinā."
      ],
      [
        "I returned at six in the evening.",
        "عُدْتُ فِي السَّاعَةِ السَّادِسَةِ مَسَاءً.",
        "ʿudtu fī al-sāʿati al-sādisati masāʾan."
      ]
    ],
    "learn": [
      "Hollow verbs",
      "visits",
      "and distances"
    ],
    "sourceLessonRange": [
      65,
      65
    ],
    "sourceFiles": [
      {
        "filename": "lesson065-side 1.docx",
        "side": 1,
        "lessonRange": [
          65,
          65
        ]
      },
      {
        "filename": "lesson065-side 2.docx",
        "side": 2,
        "lessonRange": [
          65,
          65
        ]
      }
    ]
  },
  "66": {
    "subtitle": "Being, reading, and a teacher's library",
    "vocab": [
      [
        "last; final",
        "آخِر",
        "ākhir",
        "Adjective"
      ],
      [
        "most knowledgeable about",
        "أَعْرَف بِـ",
        "aʿraf bi",
        "Comparative"
      ],
      [
        "mail; post",
        "بَرِيد",
        "barīd",
        "Noun"
      ],
      [
        "body",
        "جِسْم",
        "jism",
        "Noun",
        "—",
        "أَجْسَام"
      ],
      [
        "plural of body",
        "أَجْسَام",
        "ajsām",
        "Plural"
      ],
      [
        "I carry",
        "أَحْمِلُ",
        "aḥmilu",
        "Verb"
      ],
      [
        "life",
        "حَيَاة",
        "ḥayāh",
        "Noun"
      ],
      [
        "reading",
        "الْقِرَاءَة",
        "al-qirāʾa",
        "Verbal noun"
      ],
      [
        "I am; I become",
        "أَكُونُ",
        "akūnu",
        "Verb"
      ],
      [
        "I dislike",
        "أَكْرَهُ",
        "akrahu",
        "Verb"
      ]
    ],
    "sentences": [
      [
        "I was a student last year.",
        "كُنْتُ طَالِبًا فِي السَّنَةِ الْمَاضِيَةِ.",
        "kuntu ṭāliban fī al-sanati al-māḍiyati."
      ],
      [
        "My teacher encouraged me to read.",
        "كَانَ أُسْتَاذِي يُرَغِّبُنِي فِي الْقِرَاءَةِ.",
        "kāna ustādhī yuraghghibunī fī al-qirāʾati."
      ],
      [
        "My teacher had a library in his house.",
        "كَانَتْ لِأُسْتَاذِي مَكْتَبَةٌ فِي بَيْتِهِ.",
        "kānat li-ustādhī maktabatun fī baytihi."
      ],
      [
        "I read a book every night.",
        "أَقْرَأُ كِتَابًا كُلَّ لَيْلَةٍ.",
        "aqraʾu kitāban kulla laylatin."
      ]
    ],
    "learn": [
      "Being",
      "reading",
      "and a teacher's library"
    ],
    "sourceLessonRange": [
      66,
      66
    ],
    "sourceFiles": [
      {
        "filename": "lesson066-side 1.docx",
        "side": 1,
        "lessonRange": [
          66,
          66
        ]
      }
    ]
  },
  "67": {
    "subtitle": "Objections, invitations, and weak verbs",
    "vocab": [
      [
        "objection to",
        "اِعْتِرَاض عَلَى",
        "iʿtirāḍ ʿalā",
        "Noun"
      ],
      [
        "I object to",
        "أَعْتَرِضُ عَلَى",
        "aʿtariḍu ʿalā",
        "Verb"
      ],
      [
        "country; land",
        "بِلَاد",
        "bilād",
        "Noun"
      ],
      [
        "invasion",
        "غَزْو",
        "ghazw",
        "Noun"
      ],
      [
        "I invite; call",
        "أَدْعُو",
        "adʿū",
        "Verb"
      ],
      [
        "I hope",
        "أَرْجُو",
        "arjū",
        "Verb"
      ],
      [
        "I complain to",
        "أَشْكُو إِلَى",
        "ashkū ilā",
        "Verb"
      ],
      [
        "I invade",
        "أَغْزُو",
        "aghzū",
        "Verb"
      ]
    ],
    "sentences": [
      [
        "Why will the United Nations call the members to a special meeting?",
        "لِمَاذَا سَتَدْعُو هَيْئَةُ الأُمَمِ الْمُتَّحِدَةِ الأَعْضَاءَ إِلَى اجْتِمَاعٍ خَاصٍّ؟",
        "li-mādhā satadʿū hayʾatu al-umami al-muttaḥidati al-aʿḍāʾa ilā ijtimāʿin khāṣṣin?"
      ],
      [
        "The meeting will be held tomorrow afternoon.",
        "سَيَنْعَقِدُ الاجْتِمَاعُ بَعْدَ ظُهْرِ غَدٍ.",
        "sayanʿaqidu al-ijtimāʿu baʿda ẓuhri ghadin."
      ],
      [
        "Will most members object to the invasion? I hope so.",
        "هَلْ سَيَعْتَرِضُ أَكْثَرُ الأَعْضَاءِ عَلَى الْغَزْوِ؟ أَرْجُو ذَلِكَ.",
        "hal sayaʿtariḍu aktharu al-aʿḍāʾi ʿalā al-ghazwi? arjū dhālika."
      ]
    ],
    "learn": [
      "Objections",
      "invitations",
      "and weak verbs"
    ],
    "sourceLessonRange": [
      67,
      67
    ],
    "sourceFiles": [
      {
        "filename": "lesson067-side 1.docx",
        "side": 1,
        "lessonRange": [
          67,
          67
        ]
      }
    ]
  },
  "68": {
    "subtitle": "Coasts, military news, and weak verbs",
    "vocab": [
      [
        "I broadcast",
        "أُذِيعُ",
        "udhīʿu",
        "Verb"
      ],
      [
        "I drop; shoot down",
        "أُسْقِطُ",
        "usqiṭu",
        "Verb"
      ],
      [
        "I intercept",
        "أَعْتَرِضُ",
        "aʿtariḍu",
        "Verb"
      ],
      [
        "I take off",
        "أُقْلِعُ",
        "uqliʿu",
        "Verb"
      ],
      [
        "sea",
        "بَحْر",
        "baḥr",
        "Noun",
        "—",
        "بِحَار"
      ],
      [
        "plural of sea",
        "بِحَار",
        "biḥār",
        "Plural"
      ],
      [
        "Mediterranean Sea",
        "الْبَحْرُ الأَبْيَضُ الْمُتَوَسِّطُ",
        "al-baḥru al-abyaḍu al-mutawassiṭu",
        "Place name"
      ],
      [
        "Red Sea",
        "الْبَحْرُ الأَحْمَرُ",
        "al-baḥru al-aḥmaru",
        "Place name"
      ],
      [
        "Black Sea",
        "الْبَحْرُ الأَسْوَدُ",
        "al-baḥru al-aswadu",
        "Place name"
      ],
      [
        "coast",
        "سَاحِل",
        "sāḥil",
        "Noun",
        "—",
        "سَوَاحِل"
      ],
      [
        "plural of coast",
        "سَوَاحِل",
        "sawāḥil",
        "Plural"
      ],
      [
        "enemy",
        "عَدُوّ",
        "ʿaduww",
        "Noun",
        "—",
        "أَعْدَاء"
      ],
      [
        "plural of enemy",
        "أَعْدَاء",
        "aʿdāʾ",
        "Plural"
      ],
      [
        "near",
        "قُرْبَ",
        "qurba",
        "Preposition"
      ],
      [
        "artillery",
        "مَدْفَعِيَّة",
        "madfaʿiyya",
        "Noun"
      ],
      [
        "disease",
        "مَرَض",
        "maraḍ",
        "Noun",
        "—",
        "أَمْرَاض"
      ],
      [
        "plural of disease",
        "أَمْرَاض",
        "amrāḍ",
        "Plural"
      ],
      [
        "related to disease",
        "مَرَضِيّ",
        "maraḍī",
        "Adjective"
      ],
      [
        "newscast",
        "نَشْرَةُ الأَخْبَارِ",
        "nashratu al-akhbāri",
        "Noun"
      ],
      [
        "I attack",
        "أُهَاجِمُ",
        "uhājimu",
        "Verb"
      ],
      [
        "attack",
        "هُجُوم",
        "hujūm",
        "Noun"
      ],
      [
        "I defeat",
        "أَهْزِمُ",
        "ahzimu",
        "Verb"
      ],
      [
        "I come",
        "آتِي",
        "ātī",
        "Verb"
      ],
      [
        "I build",
        "أَبْنِي",
        "abnī",
        "Verb"
      ],
      [
        "I spend (time)",
        "أَقْضِي",
        "aqḍī",
        "Verb"
      ]
    ],
    "sentences": [
      [
        "He will build a house near the coast.",
        "سَيَبْنِي بَيْتًا قُرْبَ السَّاحِلِ.",
        "sayabnī baytan qurba al-sāḥili."
      ],
      [
        "How many months does he spend here each year?",
        "كَمْ شَهْرًا يَقْضِي هُنَا كُلَّ عَامٍ؟",
        "kam shahran yaqḍī hunā kulla ʿāmin?"
      ],
      [
        "He spends two or three months.",
        "يَقْضِي شَهْرَيْنِ أَوْ ثَلَاثَةَ أَشْهُرٍ.",
        "yaqḍī shahrayni aw thalāthata ashhurin."
      ],
      [
        "His wife and daughter will come with him.",
        "سَتَأْتِي زَوْجَتُهُ وَابْنَتُهُ مَعَهُ.",
        "sataʾtī zawjatuhu wa-ibnatuhu maʿahu."
      ]
    ],
    "learn": [
      "Coasts",
      "military news",
      "and weak verbs"
    ],
    "sourceLessonRange": [
      68,
      68
    ],
    "sourceFiles": [
      {
        "filename": "lesson068-side 1.docx",
        "side": 1,
        "lessonRange": [
          68,
          68
        ]
      },
      {
        "filename": "lesson068-side 2.docx",
        "side": 2,
        "lessonRange": [
          68,
          68
        ]
      }
    ]
  },
  "69": {
    "subtitle": "Staying, graduation, and future plans",
    "vocab": [
      [
        "moon",
        "قَمَر",
        "qamar",
        "Noun"
      ],
      [
        "rocket",
        "صَارُوخ",
        "ṣārūkh",
        "Noun",
        "—",
        "صَوَارِيخ"
      ],
      [
        "plural of rocket",
        "صَوَارِيخ",
        "ṣawārīkh",
        "Plural"
      ],
      [
        "regiment",
        "فَوْج",
        "fawj",
        "Noun",
        "—",
        "أَفْوَاج"
      ],
      [
        "plural of regiment",
        "أَفْوَاج",
        "afwāj",
        "Plural"
      ],
      [
        "bomb",
        "قُنْبُلَة",
        "qunbula",
        "Noun",
        "—",
        "قَنَابِل"
      ],
      [
        "plural of bomb",
        "قَنَابِل",
        "qanābil",
        "Plural"
      ],
      [
        "I remain; stay",
        "أَبْقَى",
        "abqā",
        "Verb"
      ],
      [
        "I accept; am satisfied with",
        "أَرْضَى بِـ",
        "arḍā bi",
        "Verb"
      ],
      [
        "I see",
        "أَرَى",
        "arā",
        "Verb"
      ],
      [
        "I strive to",
        "أَسْعَى فِي",
        "asʿā fī",
        "Verb"
      ],
      [
        "I forget",
        "أَنْسَى",
        "ansā",
        "Verb"
      ]
    ],
    "sentences": [
      [
        "Will your sister stay in Cairo for a long time?",
        "هَلْ سَتَبْقَى أُخْتُكَ فِي الْقَاهِرَةِ طَوِيلًا؟",
        "hal satabqā ukhtuka fī al-qāhirati ṭawīlan?"
      ],
      [
        "She will return to America next Sunday.",
        "سَتَعُودُ إِلَى أَمْرِيكَا يَوْمَ الأَحَدِ الْقَادِمِ.",
        "sataʿūdu ilā amrīkā yawma al-aḥadi al-qādimi."
      ],
      [
        "She will graduate at the end of next year.",
        "سَتَتَخَرَّجُ فِي نِهَايَةِ الْعَامِ الْقَادِمِ.",
        "satatakharraju fī nihāyati al-ʿāmi al-qādimi."
      ],
      [
        "The professor will return to his homeland.",
        "سَيَعُودُ الأُسْتَاذُ إِلَى وَطَنِهِ.",
        "sayaʿūdu al-ustādhu ilā waṭanihi."
      ]
    ],
    "learn": [
      "Staying",
      "graduation",
      "and future plans"
    ],
    "sourceLessonRange": [
      69,
      69
    ],
    "sourceFiles": [
      {
        "filename": "lesson069-side 1.docx",
        "side": 1,
        "lessonRange": [
          69,
          69
        ]
      },
      {
        "filename": "lesson069-side 2.docx",
        "side": 2,
        "lessonRange": [
          69,
          69
        ]
      }
    ]
  },
  "70": {
    "subtitle": "Courts, elections, and public announcements",
    "vocab": [
      [
        "I arrest",
        "أَعْتَقِلُ",
        "aʿtaqilu",
        "Verb"
      ],
      [
        "I execute (a person)",
        "أُعْدِمُ",
        "uʿdimu",
        "Verb"
      ],
      [
        "death sentence",
        "الْحُكْمُ بِالإِعْدَامِ",
        "al-ḥukmu bi-l-iʿdāmi",
        "Noun"
      ],
      [
        "I announce",
        "أُعْلِنُ",
        "uʿlinu",
        "Verb"
      ],
      [
        "I declare war on",
        "أُعْلِنُ الْحَرْبَ عَلَى",
        "uʿlinu al-ḥarba ʿalā",
        "Verb phrase"
      ],
      [
        "I hold; establish",
        "أُقِيمُ",
        "uqīmu",
        "Verb"
      ],
      [
        "program",
        "بَرْنَامَج",
        "barnāmaj",
        "Noun",
        "—",
        "بَرَامِج"
      ],
      [
        "plural of program",
        "بَرَامِج",
        "barāmij",
        "Plural"
      ],
      [
        "mission",
        "بَعْثَة",
        "baʿtha",
        "Noun"
      ],
      [
        "military mission",
        "بَعْثَةٌ عَسْكَرِيَّةٌ",
        "baʿthatun ʿaskariyyatun",
        "Noun"
      ],
      [
        "diplomatic mission",
        "بَعْثَةٌ دِبْلُومَاسِيَّةٌ",
        "baʿthatun diblūmāsiyyatun",
        "Noun"
      ],
      [
        "archaeological expedition",
        "بَعْثَةٌ أَثَرِيَّةٌ",
        "baʿthatun athariyyatun",
        "Noun"
      ],
      [
        "I spy on",
        "أَتَجَسَّسُ عَلَى",
        "atajassasu ʿalā",
        "Verb"
      ],
      [
        "spy",
        "جَاسُوس",
        "jāsūs",
        "Noun",
        "—",
        "جَوَاسِيس"
      ],
      [
        "plural of spy",
        "جَوَاسِيس",
        "jawāsīs",
        "Plural"
      ],
      [
        "need",
        "حَاجَة",
        "ḥāja",
        "Noun"
      ],
      [
        "political party",
        "حِزْب",
        "ḥizb",
        "Noun",
        "—",
        "أَحْزَاب"
      ],
      [
        "plural of political party",
        "أَحْزَاب",
        "aḥzāb",
        "Plural"
      ],
      [
        "I sentence someone to",
        "أَحْكُمُ عَلَى",
        "aḥkumu ʿalā",
        "Verb"
      ],
      [
        "prison",
        "سِجْن",
        "sijn",
        "Noun",
        "—",
        "سُجُون"
      ],
      [
        "plural of prison",
        "سُجُون",
        "sujūn",
        "Plural"
      ],
      [
        "imprisonment",
        "سَجْن",
        "sajn",
        "Noun"
      ],
      [
        "person",
        "شَخْص",
        "shakhṣ",
        "Noun",
        "—",
        "أَشْخَاص"
      ],
      [
        "plural of person",
        "أَشْخَاص",
        "ashkhāṣ",
        "Plural"
      ],
      [
        "guest",
        "ضَيْف",
        "ḍayf",
        "Noun",
        "—",
        "ضُيُوف"
      ],
      [
        "plural of guest",
        "ضُيُوف",
        "ḍuyūf",
        "Plural"
      ],
      [
        "federal",
        "فِيدِرَالِيّ",
        "fīdirālī",
        "Adjective"
      ],
      [
        "scandal",
        "فَضِيحَة",
        "faḍīḥa",
        "Noun",
        "—",
        "فَضَائِح"
      ],
      [
        "plural of scandal",
        "فَضَائِح",
        "faḍāʾiḥ",
        "Plural"
      ],
      [
        "I stand; carry out",
        "أَقُومُ",
        "aqūmu",
        "Verb"
      ],
      [
        "spokesperson for",
        "مُتَحَدِّث بِاسْمِ",
        "mutaḥaddith bi-smi",
        "Noun"
      ],
      [
        "court",
        "مَحْكَمَة",
        "maḥkama",
        "Noun",
        "—",
        "مَحَاكِم"
      ],
      [
        "plural of court",
        "مَحَاكِم",
        "maḥākim",
        "Plural"
      ],
      [
        "occasion",
        "مُنَاسَبَة",
        "munāsaba",
        "Noun"
      ],
      [
        "on the occasion of",
        "بِمُنَاسَبَةِ",
        "bi-munāsabati",
        "Expression"
      ],
      [
        "type; kind",
        "نَوْع",
        "nawʿ",
        "Noun",
        "—",
        "أَنْوَاع"
      ],
      [
        "plural of type; kind",
        "أَنْوَاع",
        "anwāʿ",
        "Plural"
      ]
    ],
    "sentences": [
      [
        "The people elected the president of the Republican Party.",
        "انْتَخَبَ الشَّعْبُ رَئِيسَ الْحِزْبِ الْجُمْهُورِيِّ.",
        "intakhaba al-shaʿbu raʾīsa al-ḥizbi al-jumhūriyyi."
      ],
      [
        "A government spokesperson announced the arrest of several people.",
        "أَعْلَنَ مُتَحَدِّثٌ بِاسْمِ الْحُكُومَةِ اعْتِقَالَ عَدَدٍ مِنَ الأَشْخَاصِ.",
        "aʿlana mutaḥaddithun bi-smi al-ḥukūmati iʿtiqāla ʿadadin mina al-ashkhāṣi."
      ],
      [
        "The court sentenced them to imprisonment.",
        "حَكَمَتِ الْمَحْكَمَةُ عَلَيْهِمْ بِالسِّجْنِ.",
        "ḥakamati al-maḥkamatu ʿalayhim bi-l-sijni."
      ]
    ],
    "learn": [
      "Courts",
      "elections",
      "and public announcements"
    ],
    "sourceLessonRange": [
      70,
      70
    ],
    "sourceFiles": [
      {
        "filename": "lesson070-side 1.docx",
        "side": 1,
        "lessonRange": [
          70,
          70
        ]
      },
      {
        "filename": "lesson070-side 2.docx",
        "side": 2,
        "lessonRange": [
          70,
          70
        ]
      }
    ]
  },
  "71": {
    "subtitle": "Past-tense weak verbs and summer visitors",
    "vocab": [
      [
        "I come",
        "آتِي",
        "ātī",
        "Verb"
      ],
      [
        "I explode",
        "أَنْفَجِرُ",
        "anfajiru",
        "Verb"
      ],
      [
        "I stay",
        "أَبْقَى",
        "abqā",
        "Verb"
      ],
      [
        "I build",
        "أَبْنِي",
        "abnī",
        "Verb"
      ],
      [
        "I invite",
        "أَدْعُو",
        "adʿū",
        "Verb"
      ],
      [
        "I see",
        "أَرَى",
        "arā",
        "Verb"
      ],
      [
        "I hope",
        "أَرْجُو",
        "arjū",
        "Verb"
      ],
      [
        "I accept",
        "أَرْضَى بِـ",
        "arḍā bi",
        "Verb"
      ],
      [
        "visitor",
        "زَائِر",
        "zāʾir",
        "Noun"
      ],
      [
        "squadron",
        "سِرْب",
        "sirb",
        "Noun",
        "—",
        "أَسْرَاب"
      ],
      [
        "plural of squadron",
        "أَسْرَاب",
        "asrāb",
        "Plural"
      ],
      [
        "I strive",
        "أَسْعَى",
        "asʿā",
        "Verb"
      ],
      [
        "I complain to",
        "أَشْكُو إِلَى",
        "ashkū ilā",
        "Verb"
      ],
      [
        "I invade",
        "أَغْزُو",
        "aghzū",
        "Verb"
      ],
      [
        "relative",
        "قَرِيب",
        "qarīb",
        "Noun",
        "—",
        "أَقْرِبَاء"
      ],
      [
        "plural of relative",
        "أَقْرِبَاء",
        "aqribāʾ",
        "Plural"
      ],
      [
        "I spend (time)",
        "أَقْضِي",
        "aqḍī",
        "Verb"
      ],
      [
        "time bomb",
        "قُنْبُلَةٌ زَمَنِيَّةٌ",
        "qunbulatun zamaniyyatun",
        "Noun"
      ],
      [
        "I forget",
        "أَنْسَى",
        "ansā",
        "Verb"
      ]
    ],
    "sentences": [
      [
        "Why did your three friends come to this city?",
        "لِمَاذَا أَتَى أَصْدِقَاؤُكَ الثَّلَاثَةُ إِلَى هَذِهِ الْمَدِينَةِ؟",
        "li-mādhā atā aṣdiqāʾuka al-thalāthatu ilā hādhihi al-madīnati?"
      ],
      [
        "They came to spend the summer vacation.",
        "أَتَوْا لِقَضَاءِ الإِجَازَةِ الصَّيْفِيَّةِ.",
        "ataw li-qaḍāʾi al-ijāzati al-ṣayfiyyati."
      ],
      [
        "They stayed here a month, then visited other cities.",
        "بَقُوا هُنَا شَهْرًا ثُمَّ زَارُوا مُدُنًا أُخْرَى.",
        "baqū hunā shahran thumma zārū mudunan ukhrā."
      ],
      [
        "Did the newlyweds travel to Switzerland?",
        "هَلْ سَافَرَ الْعَرُوسَانِ إِلَى سُوِيسْرَا؟",
        "hal sāfara al-ʿarūsāni ilā suwisrā?"
      ]
    ],
    "learn": [
      "Past-tense weak verbs and summer visitors"
    ],
    "sourceLessonRange": [
      71,
      71
    ],
    "sourceFiles": [
      {
        "filename": "lesson071-side 1.docx",
        "side": 1,
        "lessonRange": [
          71,
          71
        ]
      },
      {
        "filename": "lesson071-side 2.docx",
        "side": 2,
        "lessonRange": [
          71,
          71
        ]
      }
    ]
  },
  "72": {
    "subtitle": "Warnings, apologies, and military terms",
    "vocab": [
      [
        "I launch; release",
        "أُطْلِقُ",
        "uṭliqu",
        "Verb"
      ],
      [
        "I fire at",
        "أُطْلِقُ الرَّصَاصَ عَلَى",
        "uṭliqu al-raṣāṣa ʿalā",
        "Verb phrase"
      ],
      [
        "Pakistan",
        "بَاكِسْتَان",
        "bākistān",
        "Place name"
      ],
      [
        "India",
        "الْهِنْد",
        "al-hind",
        "Place name"
      ],
      [
        "I triumph over",
        "أَنْتَصِرُ عَلَى",
        "antaṣiru ʿalā",
        "Verb"
      ],
      [
        "warning",
        "إِنْذَار",
        "indhār",
        "Noun"
      ],
      [
        "I issue a warning to",
        "أُصْدِرُ إِنْذَارًا إِلَى",
        "uṣdiru indhāran ilā",
        "Verb phrase"
      ],
      [
        "weak",
        "ضَعِيف",
        "ḍaʿīf",
        "Adjective",
        "—",
        "ضُعَفَاء"
      ],
      [
        "plural of weak",
        "ضُعَفَاء",
        "ḍuʿafāʾ",
        "Plural"
      ],
      [
        "strong",
        "قَوِيّ",
        "qawī",
        "Adjective",
        "—",
        "أَقْوِيَاء"
      ],
      [
        "plural of strong",
        "أَقْوِيَاء",
        "aqwiyāʾ",
        "Plural"
      ],
      [
        "mine (explosive)",
        "لُغْم",
        "lughm",
        "Noun",
        "—",
        "أَلْغَام"
      ],
      [
        "plural of mine (explosive)",
        "أَلْغَام",
        "alghām",
        "Plural"
      ],
      [
        "cannon",
        "مِدْفَع",
        "midfaʿ",
        "Noun",
        "—",
        "مَدَافِع"
      ],
      [
        "plural of cannon",
        "مَدَافِع",
        "madāfiʿ",
        "Plural"
      ],
      [
        "official source",
        "مَصْدَرٌ مَسْؤُولٌ",
        "maṣdarun masʾūlun",
        "Noun"
      ],
      [
        "pardon; forgiveness",
        "مَعْذِرَة",
        "maʿdhira",
        "Noun"
      ],
      [
        "I request forgiveness",
        "أَرْجُو الْمَعْذِرَةَ",
        "arjū al-maʿdhirata",
        "Expression"
      ],
      [
        "I relate to",
        "أَتَعَلَّقُ بِـ",
        "ataʿallaqu bi",
        "Verb"
      ]
    ],
    "sentences": [
      [
        "Why were you absent from the teachers' meeting?",
        "لِمَاذَا غِبْتُمْ عَنِ اجْتِمَاعِ الأَسَاتِذَةِ؟",
        "li-mādhā ghibtum ʿani ijtimāʿi al-asātidhati?"
      ],
      [
        "We forgot the time. Please excuse us.",
        "نَسِينَا الْمَوْعِدَ. نَرْجُو الْمَعْذِرَةَ.",
        "nasīnā al-mawʿida. narjū al-maʿdhirata."
      ],
      [
        "They stayed for three and a half hours.",
        "بَقُوا ثَلَاثَ سَاعَاتٍ وَنِصْفَ سَاعَةٍ.",
        "baqū thalātha sāʿātin wa-niṣfa sāʿatin."
      ],
      [
        "Has Egypt been independent for a long time?",
        "هَلْ مِصْرُ مُسْتَقِلَّةٌ مُنْذُ زَمَنٍ طَوِيلٍ؟",
        "hal miṣru mustaqillatun mundhu zamanin ṭawīlin?"
      ]
    ],
    "learn": [
      "Warnings",
      "apologies",
      "and military terms"
    ],
    "sourceLessonRange": [
      72,
      72
    ],
    "sourceFiles": [
      {
        "filename": "lesson072-side 1.docx",
        "side": 1,
        "lessonRange": [
          72,
          72
        ]
      },
      {
        "filename": "lesson072-side 2.docx",
        "side": 2,
        "lessonRange": [
          72,
          72
        ]
      }
    ]
  },
  "73": {
    "subtitle": "Letters, descriptions, and promises",
    "vocab": [
      [
        "reconnaissance",
        "اِسْتِطْلَاع",
        "istiṭlāʿ",
        "Noun"
      ],
      [
        "I finish; end",
        "أَنْتَهِي",
        "antahī",
        "Verb"
      ],
      [
        "until",
        "حَتَّى",
        "ḥattā",
        "Particle"
      ],
      [
        "invitation",
        "دَعْوَة",
        "daʿwa",
        "Noun"
      ],
      [
        "I mention",
        "أَذْكُرُ",
        "adhkuru",
        "Verb"
      ],
      [
        "operation; activity",
        "عَمَلِيَّة",
        "ʿamaliyya",
        "Noun"
      ],
      [
        "military operation",
        "عَمَلِيَّةٌ حَرْبِيَّةٌ",
        "ʿamaliyyatun ḥarbiyyatun",
        "Noun"
      ],
      [
        "immediately",
        "فَوْرًا",
        "fawran",
        "Adverb"
      ],
      [
        "I accept",
        "أَقْبَلُ",
        "aqbalu",
        "Verb"
      ],
      [
        "I die",
        "أَمُوتُ",
        "amūtu",
        "Verb"
      ],
      [
        "I describe",
        "أَصِفُ",
        "aṣifu",
        "Verb"
      ],
      [
        "description",
        "وَصْف",
        "waṣf",
        "Noun",
        "—",
        "أَوْصَاف"
      ],
      [
        "plural of description",
        "أَوْصَاف",
        "awṣāf",
        "Plural"
      ],
      [
        "I arrive; reach",
        "أَصِلُ",
        "aṣilu",
        "Verb"
      ],
      [
        "I promise",
        "أَعِدُ",
        "aʿidu",
        "Verb"
      ]
    ],
    "sentences": [
      [
        "Did a letter arrive from your friend in London?",
        "هَلْ وَصَلَتْكَ رِسَالَةٌ مِنْ صَدِيقِكَ فِي لَنْدَنَ؟",
        "hal waṣalatka risālatun min ṣadīqika fī landana?"
      ],
      [
        "A letter from him reaches me every week.",
        "تَصِلُنِي رِسَالَةٌ مِنْهُ كُلَّ أُسْبُوعٍ.",
        "taṣilunī risālatun minhu kulla usbūʿin."
      ],
      [
        "He promises to visit them in every letter.",
        "يَعِدُنِي بِزِيَارَتِهِمْ فِي كُلِّ رِسَالَةٍ.",
        "yaʿidunī bi-ziyāratihim fī kulli risālatin."
      ],
      [
        "The professor's house is ten kilometers away.",
        "بَيْتُ الأُسْتَاذِ عَلَى بُعْدِ عَشَرَةِ كِيلُومِتْرَاتٍ.",
        "baytu al-ustādhi ʿalā buʿdi ʿasharati kīlūmitrātin."
      ]
    ],
    "learn": [
      "Letters",
      "descriptions",
      "and promises"
    ],
    "sourceLessonRange": [
      73,
      73
    ],
    "sourceFiles": [
      {
        "filename": "lesson073-side 1.docx",
        "side": 1,
        "lessonRange": [
          73,
          73
        ]
      },
      {
        "filename": "lesson073-side 2.docx",
        "side": 2,
        "lessonRange": [
          73,
          73
        ]
      }
    ]
  },
  "74": {
    "subtitle": "Traffic, fines, and communication",
    "vocab": [
      [
        "contact; communication",
        "اِتِّصَال",
        "ittiṣāl",
        "Noun"
      ],
      [
        "I contact",
        "أَتَّصِلُ بِـ",
        "attaṣilu bi",
        "Verb"
      ],
      [
        "I necessitate",
        "أَسْتَوْجِبُ",
        "astawjibu",
        "Verb"
      ],
      [
        "I import",
        "أَسْتَوْرِدُ",
        "astawridu",
        "Verb"
      ],
      [
        "I stop someone",
        "أَسْتَوْقِفُ",
        "astawqifu",
        "Verb"
      ],
      [
        "I require; make obligatory",
        "أُوجِبُ",
        "ūjibu",
        "Verb"
      ],
      [
        "I stop; halt",
        "أُوقِفُ",
        "ūqifu",
        "Verb"
      ],
      [
        "stopping; suspension",
        "الإِيقَاف",
        "al-īqāf",
        "Verbal noun"
      ],
      [
        "speed",
        "سُرْعَة",
        "surʿa",
        "Noun"
      ],
      [
        "quickly",
        "بِسُرْعَةٍ",
        "bi-surʿatin",
        "Adverb"
      ],
      [
        "policeman",
        "شُرْطِيّ",
        "shurṭī",
        "Noun",
        "—",
        "شُرْطَة"
      ],
      [
        "plural of policeman",
        "شُرْطَة",
        "shurṭa",
        "Plural"
      ],
      [
        "traffic policeman",
        "شُرْطِيُّ الْمُرُورِ",
        "shurṭiyyu al-murūri",
        "Noun"
      ],
      [
        "fine (penalty)",
        "غَرَامَة",
        "gharāma",
        "Noun"
      ],
      [
        "platoon",
        "فَصِيلَة",
        "faṣīla",
        "Noun",
        "—",
        "فَصَائِل"
      ],
      [
        "plural of platoon",
        "فَصَائِل",
        "faṣāʾil",
        "Plural"
      ],
      [
        "traffic",
        "مُرُور",
        "murūr",
        "Noun"
      ],
      [
        "violation",
        "مُخَالَفَة",
        "mukhālafa",
        "Noun"
      ],
      [
        "I descend; land",
        "أَهْبِطُ",
        "ahbiṭu",
        "Verb"
      ],
      [
        "landing",
        "الْهُبُوط",
        "al-hubūṭ",
        "Verbal noun"
      ]
    ],
    "sentences": [
      [
        "A traffic policeman stopped me on my way home this morning.",
        "أَوْقَفَنِي شُرْطِيُّ الْمُرُورِ فِي طَرِيقِي إِلَى الْبَيْتِ صَبَاحَ الْيَوْمِ.",
        "awqafanī shurṭiyyu al-murūri fī ṭarīqī ilā al-bayti ṣabāḥa al-yawmi."
      ],
      [
        "My car's speed exceeded the legal speed.",
        "كَانَتْ سُرْعَةُ سَيَّارَتِي أَكْبَرَ مِنَ السُّرْعَةِ الْقَانُونِيَّةِ.",
        "kānat surʿatu sayyāratī akbara mina al-surʿati al-qānūniyyati."
      ],
      [
        "The violation required payment of a large fine.",
        "اسْتَوْجَبَتِ الْمُخَالَفَةُ دَفْعَ غَرَامَةٍ كَبِيرَةٍ.",
        "istawjabati al-mukhālafatu dafʿa gharāmatin kabīratin."
      ]
    ],
    "learn": [
      "Traffic",
      "fines",
      "and communication"
    ],
    "sourceLessonRange": [
      74,
      74
    ],
    "sourceFiles": [
      {
        "filename": "lesson074-side 1.docx",
        "side": 1,
        "lessonRange": [
          74,
          74
        ]
      }
    ]
  },
  "79": {
    "subtitle": "Diplomatic relations and hospital care",
    "vocab": [
      [
        "I deteriorate",
        "أَتَدَهْوَرُ",
        "atadahwaru",
        "Verb"
      ],
      [
        "diplomatic relations",
        "عَلَاقَاتٌ دِبْلُومَاسِيَّةٌ",
        "ʿalāqātun diblūmāsiyyatun",
        "Noun"
      ],
      [
        "health",
        "صِحَّة",
        "ṣiḥḥa",
        "Noun"
      ],
      [
        "care; attention",
        "عِنَايَة",
        "ʿināya",
        "Noun"
      ],
      [
        "cleanliness",
        "نَظَافَة",
        "naẓāfa",
        "Noun"
      ],
      [
        "dirtiness",
        "قَذَارَة",
        "qadhāra",
        "Noun"
      ],
      [
        "disgust",
        "اِشْمِئْزَاز",
        "ishmiʾzāz",
        "Noun"
      ],
      [
        "medical care",
        "عِنَايَةٌ طِبِّيَّةٌ",
        "ʿināyatun ṭibbiyyatun",
        "Noun"
      ]
    ],
    "sentences": [
      [
        "Diplomatic relations deteriorated.",
        "تَدَهْوَرَتِ الْعَلَاقَاتُ الدِّبْلُومَاسِيَّةُ.",
        "tadahwarati al-ʿalāqātu al-diblūmāsiyyatu."
      ],
      [
        "The ambassador held a press conference this morning.",
        "عَقَدَ السَّفِيرُ مُؤْتَمَرًا صَحْفِيًّا صَبَاحَ الْيَوْمِ.",
        "ʿaqada al-safīru muʾtamaran ṣaḥfiyyan ṣabāḥa al-yawmi."
      ],
      [
        "The patients wrote a letter to the minister.",
        "كَتَبَ الْمَرْضَى رِسَالَةً إِلَى الْوَزِيرِ.",
        "kataba al-marḍā risālatan ilā al-wazīri."
      ],
      [
        "They complained about the deterioration of their health.",
        "شَكَوْا مِنْ تَدَهْوُرِ صِحَّتِهِمْ.",
        "shakaw min tadahwuri ṣiḥḥatihim."
      ]
    ],
    "learn": [
      "Diplomatic relations and hospital care"
    ],
    "sourceLessonRange": [
      79,
      79
    ],
    "sourceFiles": [
      {
        "filename": "lesson079-side 2.docx",
        "side": 2,
        "lessonRange": [
          79,
          79
        ]
      }
    ]
  },
  "80": {
    "subtitle": "Reported statements and historical narratives",
    "vocab": [
      [
        "that; the fact that",
        "أَنَّ",
        "anna",
        "Particle"
      ],
      [
        "permit; authorization",
        "تَصْرِيح",
        "taṣrīḥ",
        "Noun",
        "—",
        "تَصَارِيح"
      ],
      [
        "plural of permit; authorization",
        "تَصَارِيح",
        "taṣārīḥ",
        "Plural"
      ],
      [
        "implementation",
        "التَّنْفِيذ",
        "al-tanfīdh",
        "Verbal noun"
      ],
      [
        "I fly over",
        "أُحَلِّقُ فَوْقَ",
        "uḥalliqu fawqa",
        "Verb"
      ],
      [
        "I refuse; reject",
        "أَرْفُضُ",
        "arfuḍu",
        "Verb"
      ],
      [
        "resident; inhabitant",
        "سَاكِن",
        "sākin",
        "Noun",
        "—",
        "سُكَّان"
      ],
      [
        "plural of resident; inhabitant",
        "سُكَّان",
        "sukkān",
        "Plural"
      ],
      [
        "Second World War",
        "الْحَرْبُ الْعَالَمِيَّةُ الثَّانِيَةُ",
        "al-ḥarbu al-ʿālamiyyatu al-thāniyatu",
        "Noun"
      ]
    ],
    "sentences": [
      [
        "I know that the professor is absent.",
        "أَعْرِفُ أَنَّ الأُسْتَاذَ غَائِبٌ.",
        "aʿrifu anna al-ustādha ghāʾibun."
      ],
      [
        "I heard that the two female students are sick.",
        "سَمِعْتُ أَنَّ الطَّالِبَتَيْنِ مَرِيضَتَانِ.",
        "samiʿtu anna al-ṭālibatayni marīḍatāni."
      ],
      [
        "We learned that they are on vacation.",
        "عَلِمْنَا أَنَّهُمْ فِي إِجَازَةٍ.",
        "ʿalimnā annahum fī ijāzatin."
      ],
      [
        "The newspapers mentioned that the president will visit Moscow.",
        "ذَكَرَتِ الصُّحُفُ أَنَّ رَئِيسَ الْجُمْهُورِيَّةِ سَيَزُورُ مُوسْكُو.",
        "dhakarati al-ṣuḥufu anna raʾīsa al-jumhūriyyati sayazūru mūskū."
      ]
    ],
    "learn": [
      "Reported statements and historical narratives"
    ],
    "sourceLessonRange": [
      80,
      80
    ],
    "sourceFiles": [
      {
        "filename": "lesson080-side 1.docx",
        "side": 1,
        "lessonRange": [
          80,
          80
        ]
      }
    ]
  },
  "81": {
    "subtitle": "International institutions, passive verbs, and public affairs",
    "vocab": [
      [
        "just; fair",
        "عَادِل",
        "ʿādil",
        "Adjective"
      ],
      [
        "armed forces",
        "قُوَّات",
        "quwwāt",
        "Noun"
      ],
      [
        "refugee",
        "لَاجِئ",
        "lājiʾ",
        "Noun"
      ],
      [
        "safeguarding",
        "الْمُحَافَظَة عَلَى",
        "al-muḥāfaẓa ʿalā",
        "Verbal noun"
      ],
      [
        "future",
        "مُسْتَقْبَل",
        "mustaqbal",
        "Noun"
      ],
      [
        "region; area",
        "مِنْطَقَة",
        "minṭaqa",
        "Noun",
        "—",
        "مَنَاطِق"
      ],
      [
        "plural of region; area",
        "مَنَاطِق",
        "mināṭiq",
        "Plural"
      ],
      [
        "I find",
        "أَجِدُ",
        "ajidu",
        "Verb"
      ],
      [
        "Jewish; a Jew",
        "يَهُودِيّ",
        "yahūdī",
        "Noun",
        "—",
        "يَهُود"
      ],
      [
        "plural of Jewish; a Jew",
        "يَهُود",
        "yahūd",
        "Plural"
      ],
      [
        "matter; affair",
        "أَمْر",
        "amr",
        "Noun",
        "—",
        "أُمُور"
      ],
      [
        "plural of matter; affair",
        "أُمُور",
        "umūr",
        "Plural"
      ],
      [
        "pipe; pipeline",
        "أُنْبُوب",
        "unbūb",
        "Noun",
        "—",
        "أَنَابِيب"
      ],
      [
        "plural of pipe; pipeline",
        "أَنَابِيب",
        "anābīb",
        "Plural"
      ],
      [
        "behind",
        "خَلْفَ",
        "khalfa",
        "Preposition"
      ],
      [
        "army chief of staff",
        "رَئِيسُ أَرْكَانِ حَرْبِ الْجَيْشِ",
        "raʾīsu arkāni ḥarbi al-jayshi",
        "Noun"
      ],
      [
        "truck",
        "سَيَّارَةُ نَقْلٍ",
        "sayyāratu naqlin",
        "Noun"
      ],
      [
        "I annex; join to",
        "أَضُمُّ إِلَى",
        "aḍummu ilā",
        "Verb"
      ],
      [
        "annexation",
        "الضَّمّ",
        "al-ḍamm",
        "Verbal noun"
      ],
      [
        "I consider; count",
        "أَعُدُّ",
        "aʿuddu",
        "Verb"
      ],
      [
        "I extend; lay (pipes)",
        "أَمُدُّ",
        "amuddu",
        "Verb"
      ],
      [
        "extension",
        "الْمَدّ",
        "al-madd",
        "Verbal noun"
      ],
      [
        "I perform; carry out",
        "أُجْرِي",
        "ujrī",
        "Verb"
      ],
      [
        "I occupy",
        "أَحْتَلُّ",
        "aḥtallu",
        "Verb"
      ],
      [
        "occupation",
        "اِحْتِلَال",
        "iḥtilāl",
        "Noun"
      ],
      [
        "I choose",
        "أَخْتَارُ",
        "akhtāru",
        "Verb"
      ],
      [
        "I recover; reclaim",
        "أَسْتَعِيدُ",
        "astaʿīdu",
        "Verb"
      ],
      [
        "I dispense with",
        "أَسْتَغْنِي عَنْ",
        "astaghnī ʿan",
        "Verb"
      ],
      [
        "I return something; repeat",
        "أُعِيدُ",
        "uʿīdu",
        "Verb"
      ],
      [
        "bank",
        "بَنْك",
        "bank",
        "Noun",
        "—",
        "بُنُوك"
      ],
      [
        "plural of bank",
        "بُنُوك",
        "bunūk",
        "Plural"
      ],
      [
        "I name",
        "أُسَمِّي",
        "usammī",
        "Verb"
      ],
      [
        "I am hostile to",
        "أُعَادِي",
        "uʿādī",
        "Verb"
      ],
      [
        "I punish",
        "أُعَاقِبُ",
        "uʿāqibu",
        "Verb"
      ],
      [
        "operation",
        "عَمَلِيَّة",
        "ʿamaliyya",
        "Noun"
      ],
      [
        "perhaps",
        "لَعَلَّ",
        "laʿalla",
        "Particle"
      ],
      [
        "but",
        "لَكِنَّ",
        "lākinna",
        "Particle"
      ],
      [
        "if only; I wish",
        "لَيْتَ",
        "layta",
        "Particle"
      ],
      [
        "bad",
        "سَيِّئ",
        "sayyiʾ",
        "Adjective"
      ],
      [
        "supervising; in charge of",
        "مُشْرِف عَلَى",
        "mushrif ʿalā",
        "Adjective"
      ]
    ],
    "sentences": [
      [
        "Was a solution found for the refugee problem?",
        "هَلْ وُجِدَ حَلٌّ لِمُشْكِلَةِ اللَّاجِئِينَ؟",
        "hal wujida ḥallun li-mushkilati al-lājiʾīna?"
      ],
      [
        "They promised a fair solution in the future.",
        "وَعَدُوا بِحَلٍّ عَادِلٍ فِي الْمُسْتَقْبَلِ.",
        "waʿadū bi-ḥallin ʿādilin fī al-mustaqbali."
      ],
      [
        "The results were published in all the Egyptian newspapers.",
        "نُشِرَتِ النَّتَائِجُ فِي جَمِيعِ الْجَرَائِدِ الْمِصْرِيَّةِ.",
        "nushirati al-natāʾiju fī jamīʿi al-jarāʾidi al-miṣriyyati."
      ],
      [
        "I read an article that was translated from Arabic.",
        "قَرَأْتُ مَقَالًا تُرْجِمَ مِنَ الْلُّغَةِ الْعَرَبِيَّةِ.",
        "qaraʾtu maqālan turjima mina al-lughati al-ʿarabiyyati."
      ],
      [
        "He had an operation on Saturday.",
        "أُجْرِيَتْ لَهُ عَمَلِيَّةٌ يَوْمَ السَّبْتِ.",
        "ujriyat lahu ʿamaliyyatun yawma al-sabti."
      ],
      [
        "Where are Security Council sessions held?",
        "أَيْنَ تُعْقَدُ جَلَسَاتُ مَجْلِسِ الأَمْنِ؟",
        "ayna tuʿqadu jalasātu majlisi al-amni?"
      ],
      [
        "They are held at United Nations headquarters in New York.",
        "تُعْقَدُ فِي مَقَرِّ هَيْئَةِ الأُمَمِ الْمُتَّحِدَةِ بِنِيُويُورْك.",
        "tuʿqadu fī maqarri hayʾati al-umami al-muttaḥidati bi-niyūyūrk."
      ],
      [
        "The sessions will last twelve or thirteen days.",
        "سَتَسْتَغْرِقُ الْجَلَسَاتُ اثْنَيْ عَشَرَ أَوْ ثَلَاثَةَ عَشَرَ يَوْمًا.",
        "satastaghriqu al-jalasātu ithnay ʿashara aw thalāthata ʿashara yawman."
      ]
    ],
    "learn": [
      "International institutions",
      "passive verbs",
      "and public affairs"
    ],
    "sourceLessonRange": [
      81,
      86
    ],
    "chapterLabel": "Chapters 81–86",
    "sourceFiles": [
      {
        "filename": "lesson081-086 side 1.docx",
        "side": 1,
        "lessonRange": [
          81,
          86
        ]
      },
      {
        "filename": "lesson081-086 side 2.docx",
        "side": 2,
        "lessonRange": [
          81,
          86
        ]
      }
    ]
  },
  "87": {
    "subtitle": "Broadcasting, land reform, and past negation",
    "vocab": [
      [
        "better; best",
        "أَفْضَل",
        "afḍal",
        "Comparative"
      ],
      [
        "yes (answering a negative question)",
        "بَلَى",
        "balā",
        "Response"
      ],
      [
        "aircraft carrier",
        "حَامِلَةُ طَائِرَاتٍ",
        "ḥāmilatu ṭāʾirātin",
        "Noun"
      ],
      [
        "surface; roof",
        "سَطْح",
        "saṭḥ",
        "Noun",
        "—",
        "سُطُوح"
      ],
      [
        "plural of surface; roof",
        "سُطُوح",
        "suṭūḥ",
        "Plural"
      ],
      [
        "ship",
        "سَفِينَة",
        "safīna",
        "Noun",
        "—",
        "سُفُن"
      ],
      [
        "plural of ship",
        "سُفُن",
        "sufun",
        "Plural"
      ],
      [
        "knot (speed)",
        "عُقْدَة",
        "ʿuqda",
        "Noun",
        "—",
        "عُقَد"
      ],
      [
        "plural of knot (speed)",
        "عُقَد",
        "ʿuqad",
        "Plural"
      ],
      [
        "dialect",
        "لَهْجَة",
        "lahja",
        "Noun"
      ],
      [
        "colloquial dialect",
        "لَهْجَةٌ عَامِّيَّةٌ",
        "lahjatun ʿāmmiyyatun",
        "Noun"
      ],
      [
        "water",
        "مَاء",
        "māʾ",
        "Noun",
        "—",
        "مِيَاه"
      ],
      [
        "plural of water",
        "مِيَاه",
        "miyāh",
        "Plural"
      ],
      [
        "governorate",
        "مُحَافَظَة",
        "muḥāfaẓa",
        "Noun"
      ],
      [
        "announcer",
        "مُذِيع",
        "mudhīʿ",
        "Noun"
      ],
      [
        "newscast",
        "نَشْرَةٌ إِخْبَارِيَّةٌ",
        "nashratun ikhbāriyyatun",
        "Noun"
      ],
      [
        "desert",
        "صَحْرَاء",
        "ṣaḥrāʾ",
        "Noun",
        "—",
        "صَحَارِي"
      ],
      [
        "plural of desert",
        "صَحَارِي",
        "ṣaḥārī",
        "Plural"
      ],
      [
        "river",
        "نَهْر",
        "nahr",
        "Noun",
        "—",
        "أَنْهَار"
      ],
      [
        "plural of river",
        "أَنْهَار",
        "anhār",
        "Plural"
      ],
      [
        "point of view",
        "وِجْهَةُ نَظَرٍ",
        "wijhatu naẓarin",
        "Noun"
      ],
      [
        "I give",
        "أُعْطِي",
        "uʿṭī",
        "Verb"
      ],
      [
        "I deliver (a speech)",
        "أُلْقِي",
        "ulqī",
        "Verb"
      ],
      [
        "property; possessions",
        "أَمْلَاك",
        "amlāk",
        "Noun"
      ],
      [
        "speech",
        "خِطَاب",
        "khiṭāb",
        "Noun"
      ],
      [
        "I confiscate",
        "أُصَادِرُ",
        "uṣādiru",
        "Verb"
      ],
      [
        "feddan (land measure)",
        "فَدَّان",
        "faddān",
        "Noun",
        "—",
        "أَفْدِنَة"
      ],
      [
        "plural of feddan (land measure)",
        "أَفْدِنَة",
        "afdina",
        "Plural"
      ],
      [
        "farmer",
        "فَلَّاح",
        "fallāḥ",
        "Noun"
      ],
      [
        "I implement",
        "أُنَفِّذُ",
        "unaffidhu",
        "Verb"
      ],
      [
        "I own",
        "أَمْلِكُ",
        "amliku",
        "Verb"
      ],
      [
        "I become",
        "أُصْبِحُ",
        "uṣbiḥu",
        "Verb"
      ],
      [
        "I join",
        "أَنْضَمُّ إِلَى",
        "anḍammu ilā",
        "Verb"
      ],
      [
        "television set",
        "جِهَازُ التِّلْفِزْيُونِ",
        "jihāzu al-tilfizyūni",
        "Noun"
      ],
      [
        "radar device",
        "جِهَازُ الرَّادَارِ",
        "jihāzu al-rādāri",
        "Noun"
      ],
      [
        "radio set",
        "جِهَازُ الرَّادْيُو",
        "jihāzu al-rādyū",
        "Noun"
      ],
      [
        "guest of honor",
        "ضَيْفُ الشَّرَفِ",
        "ḍayfu al-sharafi",
        "Noun"
      ],
      [
        "I remain; continue",
        "أَظَلُّ",
        "aẓallu",
        "Verb"
      ],
      [
        "I think",
        "أَظُنُّ",
        "aẓunnu",
        "Verb"
      ],
      [
        "delicious",
        "لَذِيذ",
        "ladhīdh",
        "Adjective"
      ],
      [
        "did not (jussive negator)",
        "لَمْ",
        "lam",
        "Particle"
      ],
      [
        "will not (subjunctive negator)",
        "لَنْ",
        "lan",
        "Particle"
      ],
      [
        "as long as",
        "مَا دَامَ",
        "mā dāma",
        "Expression"
      ],
      [
        "manager",
        "مُدِير",
        "mudīr",
        "Noun"
      ],
      [
        "enjoyable",
        "مُمْتِع",
        "mumtiʿ",
        "Adjective"
      ]
    ],
    "sentences": [
      [
        "Egyptian radio broadcasts five newscasts every day.",
        "تُذِيعُ دَارُ الإِذَاعَةِ الْمِصْرِيَّةِ خَمْسَ نَشْرَاتٍ إِخْبَارِيَّةٍ كُلَّ يَوْمٍ.",
        "tudhīʿu dāru al-idhāʿati al-miṣriyyati khamsa nashrātin ikhbāriyyatin kulla yawmin."
      ],
      [
        "The president delivered a speech.",
        "أَلْقَى الرَّئِيسُ خِطَابًا.",
        "alqā al-raʾīsu khiṭāban."
      ],
      [
        "The farmers did not own anything.",
        "لَمْ يَمْلِكِ الْفَلَّاحُونَ شَيْئًا.",
        "lam yamliki al-fallāḥūna shayʾan."
      ],
      [
        "It will not be before the middle of the year.",
        "لَنْ يَكُونَ ذَلِكَ قَبْلَ مُنْتَصَفِ الْعَامِ.",
        "lan yakūna dhālika qabla muntaṣafi al-ʿāmi."
      ],
      [
        "I do not think that is possible as long as she is sick.",
        "لَا أَظُنُّ ذَلِكَ مُحْتَمَلًا مَا دَامَتْ مَرِيضَةً.",
        "lā aẓunnu dhālika muḥtamalan mā dāmat marīḍatan."
      ]
    ],
    "learn": [
      "Broadcasting",
      "land reform",
      "and past negation"
    ],
    "sourceLessonRange": [
      87,
      89
    ],
    "chapterLabel": "Chapters 87–89",
    "sourceFiles": [
      {
        "filename": "lesson087-089 side 1.docx",
        "side": 1,
        "lessonRange": [
          87,
          89
        ]
      }
    ]
  },
  "90": {
    "subtitle": "Retirement, industry, and historical reading",
    "vocab": [
      [
        "celebration",
        "اِحْتِفَال",
        "iḥtifāl",
        "Noun"
      ],
      [
        "building; construction",
        "بِنَاء",
        "bināʾ",
        "Noun"
      ],
      [
        "I retire",
        "أَتَقَاعَدُ",
        "ataqāʿadu",
        "Verb"
      ],
      [
        "bridge",
        "جِسْر",
        "jisr",
        "Noun",
        "—",
        "جُسُور"
      ],
      [
        "plural of bridge",
        "جُسُور",
        "jusūr",
        "Plural"
      ],
      [
        "accident; incident",
        "حَادِث",
        "ḥādith",
        "Noun",
        "—",
        "حَوَادِث"
      ],
      [
        "plural of accident; incident",
        "حَوَادِث",
        "ḥawādith",
        "Plural"
      ],
      [
        "present; attending",
        "حَاضِر",
        "ḥāḍir",
        "Adjective"
      ],
      [
        "annual",
        "سَنَوِيّ",
        "sanawī",
        "Adjective"
      ],
      [
        "public; open",
        "عَلَنِيّ",
        "ʿalanī",
        "Adjective"
      ],
      [
        "when",
        "عِنْدَمَا",
        "ʿindamā",
        "Conjunction"
      ],
      [
        "subject; material",
        "مَادَّة",
        "mādda",
        "Noun",
        "—",
        "مَوَادّ"
      ],
      [
        "plural of subject; material",
        "مَوَادّ",
        "mawādd",
        "Plural"
      ],
      [
        "money",
        "مَال",
        "māl",
        "Noun",
        "—",
        "أَمْوَال"
      ],
      [
        "plural of money",
        "أَمْوَال",
        "amwāl",
        "Plural"
      ],
      [
        "means of transportation",
        "وَسَائِلُ الْمُوَاصَلَاتِ",
        "wasāʾilu al-muwāṣalāti",
        "Noun"
      ],
      [
        "I continue",
        "أَسْتَمِرُّ",
        "astamirru",
        "Verb"
      ],
      [
        "dynasty; family",
        "أُسْرَة",
        "usra",
        "Noun",
        "—",
        "أُسَر"
      ],
      [
        "plural of dynasty; family",
        "أُسَر",
        "usar",
        "Plural"
      ],
      [
        "I advance in",
        "أَتَقَدَّمُ فِي",
        "ataqaddamu fī",
        "Verb"
      ],
      [
        "agriculture",
        "زِرَاعَة",
        "zirāʿa",
        "Noun"
      ],
      [
        "industry",
        "صِنَاعَة",
        "ṣināʿa",
        "Noun"
      ],
      [
        "worker",
        "عَامِل",
        "ʿāmil",
        "Noun",
        "—",
        "عُمَّال"
      ],
      [
        "plural of worker",
        "عُمَّال",
        "ʿummāl",
        "Plural"
      ],
      [
        "pharaoh",
        "فِرْعَوْن",
        "firʿawn",
        "Noun",
        "—",
        "فَرَاعِنَة"
      ],
      [
        "plural of pharaoh",
        "فَرَاعِنَة",
        "farāʿina",
        "Plural"
      ],
      [
        "ready",
        "مُسْتَعِدّ",
        "mustaʿidd",
        "Adjective"
      ],
      [
        "factory",
        "مَصْنَع",
        "maṣnaʿ",
        "Noun",
        "—",
        "مَصَانِع"
      ],
      [
        "plural of factory",
        "مَصَانِع",
        "maṣāniʿ",
        "Plural"
      ],
      [
        "approximately",
        "نَحْوَ",
        "naḥwa",
        "Adverb"
      ],
      [
        "Hijra; migration",
        "هِجْرَة",
        "hijra",
        "Noun"
      ],
      [
        "Hijri year",
        "سَنَةٌ هِجْرِيَّةٌ",
        "sanatun hijriyyatun",
        "Noun"
      ],
      [
        "pyramid",
        "هَرَم",
        "haram",
        "Noun",
        "—",
        "أَهْرَام"
      ],
      [
        "plural of pyramid",
        "أَهْرَام",
        "ahrām",
        "Plural"
      ]
    ],
    "sentences": [
      [
        "He did not stay there for a long time.",
        "لَمْ يُقِمْ بِهَا زَمَنًا طَوِيلًا.",
        "lam yuqim bihā zamanan ṭawīlan."
      ],
      [
        "He did not obtain a degree, but studied some subjects.",
        "لَمْ يَنَلْ شَهَادَةً، لَكِنَّهُ دَرَسَ بَعْضَ الْمَوَادِّ.",
        "lam yanal shahādatan, lākinnahu darasa baʿḍa al-mawāddi."
      ],
      [
        "He may return when he retires.",
        "قَدْ يَعُودُ عِنْدَمَا يَتَقَاعَدُ.",
        "qad yaʿūdu ʿindamā yataqāʿadu."
      ],
      [
        "The workers' conference will continue for about ten days.",
        "سَيَسْتَمِرُّ مُؤْتَمَرُ الْعُمَّالِ نَحْوَ عَشَرَةِ أَيَّامٍ.",
        "sayastamirru muʾtamaru al-ʿummāli naḥwa ʿasharati ayyāmin."
      ],
      [
        "The sessions will not end before six o'clock.",
        "لَنْ تَنْتَهِيَ الْجَلَسَاتُ قَبْلَ السَّاعَةِ السَّادِسَةِ.",
        "lan tantahiya al-jalasātu qabla al-sāʿati al-sādisati."
      ]
    ],
    "learn": [
      "Retirement",
      "industry",
      "and historical reading"
    ],
    "sourceLessonRange": [
      90,
      92
    ],
    "chapterLabel": "Chapters 90–92",
    "sourceFiles": [
      {
        "filename": "lesson090-092 side 2.docx",
        "side": 2,
        "lessonRange": [
          90,
          92
        ]
      }
    ]
  },
  "93": {
    "subtitle": "Education, health, correspondence, and development",
    "vocab": [
      [
        "father",
        "أَب",
        "ab",
        "Noun",
        "—",
        "آبَاء"
      ],
      [
        "plural of father",
        "آبَاء",
        "ābāʾ",
        "Plural"
      ],
      [
        "brother",
        "أَخ",
        "akh",
        "Noun",
        "—",
        "إِخْوَة"
      ],
      [
        "plural of brother",
        "إِخْوَة",
        "ikhwa",
        "Plural"
      ],
      [
        "I disappear",
        "أَخْتَفِي",
        "akhtafī",
        "Verb"
      ],
      [
        "current; present",
        "حَاضِر",
        "ḥāḍir",
        "Adjective"
      ],
      [
        "I rescue from",
        "أُنْقِذُ مِنْ",
        "unqidhu min",
        "Verb"
      ],
      [
        "plan",
        "خُطَّة",
        "khuṭṭa",
        "Noun",
        "—",
        "خُطَط"
      ],
      [
        "plural of plan",
        "خُطَط",
        "khuṭaṭ",
        "Plural"
      ],
      [
        "I formulate a plan",
        "أَضَعُ خُطَّةً",
        "aḍaʿu khuṭṭatan",
        "Verb phrase"
      ],
      [
        "helicopter",
        "طَائِرَةُ هِلِيكُوبْتَر",
        "ṭāʾiratu hilīkūbtar",
        "Noun"
      ],
      [
        "dean",
        "عَمِيد",
        "ʿamīd",
        "Noun",
        "—",
        "عُمَدَاء"
      ],
      [
        "plural of dean",
        "عُمَدَاء",
        "ʿumadāʾ",
        "Plural"
      ],
      [
        "like; as",
        "كَـ",
        "ka",
        "Preposition"
      ],
      [
        "level",
        "مُسْتَوًى",
        "mustawan",
        "Noun"
      ],
      [
        "standard of living",
        "مُسْتَوَى الْمَعِيشَةِ",
        "mustawā al-maʿīshati",
        "Noun"
      ],
      [
        "goal; target",
        "هَدَف",
        "hadaf",
        "Noun",
        "—",
        "أَهْدَاف"
      ],
      [
        "plural of goal; target",
        "أَهْدَاف",
        "ahdāf",
        "Plural"
      ],
      [
        "deputy",
        "وَكِيل",
        "wakīl",
        "Noun",
        "—",
        "وُكَلَاء"
      ],
      [
        "plural of deputy",
        "وُكَلَاء",
        "wukalāʾ",
        "Plural"
      ],
      [
        "I want",
        "أُرِيدُ",
        "urīdu",
        "Verb"
      ],
      [
        "exhaustion",
        "إِرْهَاق",
        "irhāq",
        "Noun"
      ],
      [
        "weekly",
        "أُسْبُوعِيّ",
        "usbūʿī",
        "Adjective"
      ],
      [
        "empire",
        "إِمْبَرَاطُورِيَّة",
        "imbarāṭūriyya",
        "Noun"
      ],
      [
        "I attempt",
        "أُحَاوِلُ",
        "uḥāwilu",
        "Verb"
      ],
      [
        "serious; dangerous",
        "خَطِير",
        "khaṭīr",
        "Adjective"
      ],
      [
        "medicine",
        "دَوَاء",
        "dawāʾ",
        "Noun",
        "—",
        "أَدْوِيَة"
      ],
      [
        "plural of medicine",
        "أَدْوِيَة",
        "adwiya",
        "Plural"
      ],
      [
        "rest",
        "رَاحَة",
        "rāḥa",
        "Noun"
      ],
      [
        "I diagnose",
        "أُشَخِّصُ",
        "ushakhkhiṣu",
        "Verb"
      ],
      [
        "in order to",
        "كَيْ",
        "kay",
        "Particle"
      ],
      [
        "written",
        "مَكْتُوب",
        "maktūb",
        "Adjective"
      ],
      [
        "present; existing",
        "مَوْجُود",
        "mawjūd",
        "Adjective"
      ],
      [
        "I prescribe medicine",
        "أَصِفُ دَوَاءً",
        "aṣifu dawāʾan",
        "Verb phrase"
      ],
      [
        "daily",
        "يَوْمِيّ",
        "yawmī",
        "Adjective"
      ],
      [
        "every day",
        "يَوْمِيًّا",
        "yawmiyyan",
        "Adverb"
      ],
      [
        "most informed about",
        "أَعْلَم بِـ",
        "aʿlam bi",
        "Comparative"
      ],
      [
        "condition; requirement",
        "شَرْط",
        "sharṭ",
        "Noun",
        "—",
        "شُرُوط"
      ],
      [
        "plural of condition; requirement",
        "شُرُوط",
        "shurūṭ",
        "Plural"
      ],
      [
        "responsible; in charge",
        "مَسْؤُول",
        "masʾūl",
        "Adjective"
      ],
      [
        "suitable",
        "مُنَاسِب",
        "munāsib",
        "Adjective"
      ],
      [
        "someone; anyone",
        "أَحَد",
        "aḥad",
        "Pronoun"
      ],
      [
        "Soviet Union",
        "الاِتِّحَادُ السُّوفْيِتِيُّ",
        "al-ittiḥādu al-sūfyitiyyu",
        "Noun"
      ],
      [
        "ammunition",
        "ذَخِيرَة",
        "dhakhīra",
        "Noun",
        "—",
        "ذَخَائِر"
      ],
      [
        "plural of ammunition",
        "ذَخَائِر",
        "dhakhāʾir",
        "Plural"
      ],
      [
        "communist",
        "شُيُوعِيّ",
        "shuyūʿī",
        "Adjective"
      ],
      [
        "I befriend",
        "أُصَادِقُ",
        "uṣādiqu",
        "Verb"
      ],
      [
        "friendship",
        "صَدَاقَة",
        "ṣadāqa",
        "Noun"
      ],
      [
        "against",
        "ضِدَّ",
        "ḍidda",
        "Preposition"
      ],
      [
        "urgent",
        "عَاجِل",
        "ʿājil",
        "Adjective"
      ],
      [
        "in the very near future",
        "فِي الْقَرِيبِ الْعَاجِلِ",
        "fī al-qarībi al-ʿājili",
        "Expression"
      ],
      [
        "reader",
        "قَارِئ",
        "qāriʾ",
        "Noun",
        "—",
        "قُرَّاء"
      ],
      [
        "plural of reader",
        "قُرَّاء",
        "qurrāʾ",
        "Plural"
      ],
      [
        "I affect",
        "أُؤَثِّرُ عَلَى",
        "uʾaththiru ʿalā",
        "Verb"
      ],
      [
        "I postpone",
        "أُؤَجِّلُ",
        "uʾajjilu",
        "Verb"
      ],
      [
        "I need",
        "أَحْتَاجُ إِلَى",
        "aḥtāju ilā",
        "Verb"
      ],
      [
        "I perform",
        "أُؤَدِّي",
        "uʾaddī",
        "Verb"
      ],
      [
        "I rent",
        "أَسْتَأْجِرُ",
        "astaʾjiru",
        "Verb"
      ],
      [
        "I establish",
        "أُؤَسِّسُ",
        "uʾassisu",
        "Verb"
      ],
      [
        "I assure",
        "أُؤَكِّدُ",
        "uʾakkidu",
        "Verb"
      ],
      [
        "I compose; author",
        "أُؤَلِّفُ",
        "uʾallifu",
        "Verb"
      ],
      [
        "I am affected by",
        "أَتَأَثَّرُ بِـ",
        "ataʾaththaru bi",
        "Verb"
      ],
      [
        "I become postponed",
        "أَتَأَجَّلُ",
        "ataʾajjalu",
        "Verb"
      ],
      [
        "I become established",
        "أَتَأَسَّسُ",
        "ataʾassasu",
        "Verb"
      ],
      [
        "I make sure of",
        "أَتَأَكَّدُ مِنْ",
        "ataʾakkadu min",
        "Verb"
      ],
      [
        "I conspire",
        "أَتَآمَرُ",
        "ataʾāmaru",
        "Verb"
      ],
      [
        "servant",
        "خَادِم",
        "khādim",
        "Noun"
      ],
      [
        "overthrowing the government",
        "قَلْبُ نِظَامِ الْحُكْمِ",
        "qalbu niẓāmi al-ḥukmi",
        "Noun"
      ],
      [
        "displaced; homeless",
        "مُشَرَّد",
        "musharrad",
        "Adjective"
      ],
      [
        "direction",
        "اِتِّجَاه",
        "ittijāh",
        "Noun"
      ],
      [
        "name",
        "اسْم",
        "ism",
        "Noun",
        "—",
        "أَسْمَاء"
      ],
      [
        "plural of name",
        "أَسْمَاء",
        "asmāʾ",
        "Plural"
      ],
      [
        "in order",
        "بِالتَّرْتِيبِ",
        "bi-l-tartībi",
        "Expression"
      ],
      [
        "I fall behind in",
        "أَتَأَخَّرُ فِي",
        "ataʾakhkharu fī",
        "Verb"
      ],
      [
        "ignorant; uneducated",
        "جَاهِل",
        "jāhil",
        "Adjective",
        "—",
        "جُهَلَاء"
      ],
      [
        "plural of ignorant; uneducated",
        "جُهَلَاء",
        "juhalāʾ",
        "Plural"
      ],
      [
        "rank",
        "رُتْبَة",
        "rutba",
        "Noun",
        "—",
        "رُتَب"
      ],
      [
        "plural of rank",
        "رُتَب",
        "rutab",
        "Plural"
      ],
      [
        "student",
        "طَالِب",
        "ṭālib",
        "Noun",
        "—",
        "طَلَبَة"
      ],
      [
        "plural of student",
        "طَلَبَة",
        "ṭalaba",
        "Plural"
      ],
      [
        "pilot",
        "طَيَّار",
        "ṭayyār",
        "Noun"
      ],
      [
        "I become angry",
        "أَغْضَبُ",
        "aghḍabu",
        "Verb"
      ],
      [
        "I become numerous",
        "أَكْثُرُ",
        "akthuru",
        "Verb"
      ],
      [
        "late; behind",
        "مُتَأَخِّر",
        "mutaʾakhkhir",
        "Adjective"
      ],
      [
        "educated",
        "مُتَعَلِّم",
        "mutaʿallim",
        "Adjective"
      ],
      [
        "navigator; sailor",
        "مَلَّاح",
        "mallāḥ",
        "Noun"
      ],
      [
        "astronaut",
        "مَلَّاحُ الْفَضَاءِ",
        "mallāḥu al-faḍāʾi",
        "Noun"
      ]
    ],
    "sentences": [
      [
        "The ministry opposes the project.",
        "تُعَارِضُ الْوِزَارَةُ الْمَشْرُوعَ.",
        "tuʿāriḍu al-wizāratu al-mashrūʿa."
      ],
      [
        "Did the doctor diagnose your brother's illness?",
        "هَلْ شَخَّصَ الطَّبِيبُ مَرَضَ أَخِيكَ؟",
        "hal shakhkhaṣa al-ṭabību maraḍa akhīka?"
      ],
      [
        "The illness is not serious, and its cause is exhaustion.",
        "الْمَرَضُ لَيْسَ خَطِيرًا وَسَبَبُهُ الإِرْهَاقُ.",
        "al-maraḍu laysa khaṭīran wa-sababuhu al-irhāqu."
      ],
      [
        "My brother only needs rest.",
        "أَخِي فِي حَاجَةٍ إِلَى الرَّاحَةِ فَقَطْ.",
        "akhī fī ḥājatin ilā al-rāḥati faqaṭ."
      ],
      [
        "Ask to meet the official in charge.",
        "اطْلُبْ مُقَابَلَةَ الْمَوْظَفِ الْمَسْؤُولِ.",
        "uṭlub muqābalata al-muwaẓẓafi al-masʾūli."
      ],
      [
        "We befriend those who befriend us.",
        "نُصَادِقُ مَنْ يُصَادِقُنَا.",
        "nuṣādiqu man yuṣādiqunā."
      ],
      [
        "You will find a copy of the book with this letter.",
        "سَتَجِدُ مَعَ هَذِهِ الرِّسَالَةِ نُسْخَةً مِنَ الْكِتَابِ.",
        "satajidu maʿa hādhihi al-risālati nuskhatan mina al-kitābi."
      ],
      [
        "Success requires much work and great effort.",
        "يَتَطَلَّبُ النَّجَاحُ عَمَلًا كَثِيرًا وَجُهُودًا عَظِيمَةً.",
        "yataṭallabu al-najāḥu ʿamalan kathīran wa-juhūdan ʿaẓīmatan."
      ]
    ],
    "learn": [
      "Education",
      "health",
      "correspondence",
      "and development"
    ],
    "sourceLessonRange": [
      93,
      98
    ],
    "chapterLabel": "Chapters 93–98",
    "sourceFiles": [
      {
        "filename": "lesson093-098 side 1.docx",
        "side": 1,
        "lessonRange": [
          93,
          98
        ]
      },
      {
        "filename": "lesson093-098 side 2.docx",
        "side": 2,
        "lessonRange": [
          93,
          98
        ]
      }
    ]
  },
  "99": {
    "subtitle": "Education, international affairs, and public institutions",
    "vocab": [
      [
        "I keep; retain",
        "أُبْقِي",
        "ubqī",
        "Verb"
      ],
      [
        "I reach; amount to",
        "أَبْلُغُ",
        "ablughu",
        "Verb"
      ],
      [
        "commerce",
        "تِجَارَة",
        "tijāra",
        "Noun"
      ],
      [
        "college of commerce",
        "كُلِّيَّةُ التِّجَارَةِ",
        "kulliyyatu al-tijārati",
        "Noun"
      ],
      [
        "I exceed",
        "أَزِيدُ عَلَى",
        "azīdu ʿalā",
        "Verb"
      ],
      [
        "Ain Shams",
        "عَيْنُ شَمْسٍ",
        "ʿaynu shamsin",
        "Place name"
      ],
      [
        "accountant",
        "مُحَاسِب",
        "muḥāsib",
        "Noun"
      ],
      [
        "accounting",
        "مُحَاسَبَة",
        "muḥāsaba",
        "Noun"
      ],
      [
        "primary school",
        "مَدْرَسَةٌ ابْتِدَائِيَّةٌ",
        "madrasatun ibtidāʾiyyatun",
        "Noun"
      ],
      [
        "preparatory school",
        "مَدْرَسَةٌ إِعْدَادِيَّةٌ",
        "madrasatun iʿdādiyyatun",
        "Noun"
      ],
      [
        "secondary school",
        "مَدْرَسَةٌ ثَانَوِيَّةٌ",
        "madrasatun thānawiyyatun",
        "Noun"
      ],
      [
        "crowded",
        "مُزْدَحِم",
        "muzdaḥim",
        "Adjective"
      ],
      [
        "person (population count)",
        "نَسَمَة",
        "nasama",
        "Noun"
      ],
      [
        "union; association",
        "اِتِّحَاد",
        "ittiḥād",
        "Noun"
      ],
      [
        "I prove",
        "أُثْبِتُ",
        "uthbitu",
        "Verb"
      ],
      [
        "that not; in order not to",
        "أَلَّا",
        "allā",
        "Particle"
      ],
      [
        "I support",
        "أُؤَيِّدُ",
        "uʾayyidu",
        "Verb"
      ],
      [
        "after",
        "بَعْدَمَا",
        "baʿdamā",
        "Conjunction"
      ],
      [
        "while; whereas",
        "بَيْنَمَا",
        "baynamā",
        "Conjunction"
      ],
      [
        "following; next",
        "تَالٍ",
        "tālin",
        "Adjective"
      ],
      [
        "details",
        "تَفَاصِيل",
        "tafāṣīl",
        "Noun"
      ],
      [
        "passenger",
        "رَاكِب",
        "rākib",
        "Noun",
        "—",
        "رُكَّاب"
      ],
      [
        "plural of passenger",
        "رُكَّاب",
        "rukkāb",
        "Plural"
      ],
      [
        "weapon",
        "سِلَاح",
        "silāḥ",
        "Noun",
        "—",
        "أَسْلِحَة"
      ],
      [
        "plural of weapon",
        "أَسْلِحَة",
        "asliḥa",
        "Plural"
      ],
      [
        "cross",
        "صَلِيب",
        "ṣalīb",
        "Noun",
        "—",
        "صُلْبَان"
      ],
      [
        "plural of cross",
        "صُلْبَان",
        "ṣulbān",
        "Plural"
      ],
      [
        "International Red Cross",
        "الصَّلِيبُ الأَحْمَرُ الدُّوَلِيُّ",
        "al-ṣalību al-aḥmaru al-duwaliyyu",
        "Noun"
      ],
      [
        "Zionism",
        "صَهْيُونِيَّة",
        "ṣahyūniyya",
        "Noun"
      ],
      [
        "light",
        "ضَوْء",
        "ḍawʾ",
        "Noun",
        "—",
        "أَضْوَاء"
      ],
      [
        "plural of light",
        "أَضْوَاء",
        "aḍwāʾ",
        "Plural"
      ],
      [
        "in light of",
        "عَلَى ضَوْءِ",
        "ʿalā ḍawʾi",
        "Expression"
      ],
      [
        "I demand",
        "أُطَالِبُ بِـ",
        "uṭālibu bi",
        "Verb"
      ],
      [
        "Finnish",
        "فِنْلَنْدِيّ",
        "finlandī",
        "Adjective"
      ],
      [
        "I resist",
        "أُقَاوِمُ",
        "uqāwimu",
        "Verb"
      ],
      [
        "before",
        "قَبْلَمَا",
        "qablamā",
        "Conjunction"
      ],
      [
        "a person killed; casualty",
        "قَتِيل",
        "qatīl",
        "Noun",
        "—",
        "قَتْلَى"
      ],
      [
        "plural of a person killed; casualty",
        "قَتْلَى",
        "qatlā",
        "Plural"
      ],
      [
        "piracy",
        "قَرْصَنَة",
        "qarṣana",
        "Noun"
      ],
      [
        "air piracy; hijacking",
        "قَرْصَنَةٌ جَوِّيَّةٌ",
        "qarṣanatun jawwiyyatun",
        "Noun"
      ],
      [
        "force; strength",
        "قُوَّة",
        "quwwa",
        "Noun",
        "—",
        "قُوًى"
      ],
      [
        "plural of force; strength",
        "قُوًى",
        "quwan",
        "Plural"
      ],
      [
        "supreme council",
        "مَجْلِسٌ أَعْلَى",
        "majlisun aʿlā",
        "Noun"
      ],
      [
        "Arab League",
        "جَامِعَةُ الدُّوَلِ الْعَرَبِيَّةِ",
        "jāmiʿatu al-duwali al-ʿarabiyyati",
        "Noun"
      ],
      [
        "any; which",
        "أَيّ",
        "ayy",
        "Interrogative"
      ],
      [
        "rather; but",
        "بَلْ",
        "bal",
        "Particle"
      ],
      [
        "I entrust; make responsible",
        "أُحَمِّلُ",
        "uḥammilu",
        "Verb"
      ],
      [
        "disagreement; conflict",
        "خِلَاف",
        "khilāf",
        "Noun"
      ],
      [
        "despite",
        "بِالرَّغْمِ مِنْ",
        "bi-l-raghmi min",
        "Expression"
      ],
      [
        "high",
        "عَالٍ",
        "ʿālin",
        "Adjective"
      ],
      [
        "aggressive",
        "عُدْوَانِيّ",
        "ʿudwānī",
        "Adjective"
      ],
      [
        "judge",
        "قَاضٍ",
        "qāḍin",
        "Noun",
        "—",
        "قُضَاة"
      ],
      [
        "plural of judge",
        "قُضَاة",
        "quḍāh",
        "Plural"
      ],
      [
        "satisfactory",
        "مُرْضٍ",
        "murḍin",
        "Adjective"
      ],
      [
        "continuous",
        "مُسْتَمِرّ",
        "mustamirr",
        "Adjective"
      ],
      [
        "responsibility",
        "مَسْؤُولِيَّة",
        "masʾūliyya",
        "Noun"
      ],
      [
        "usual",
        "مُعْتَاد",
        "muʿtād",
        "Adjective"
      ],
      [
        "as usual",
        "كَالْمُعْتَادِ",
        "ka-l-muʿtādi",
        "Expression"
      ],
      [
        "port",
        "مِينَاء",
        "mīnāʾ",
        "Noun",
        "—",
        "مَوَانِئ"
      ],
      [
        "plural of port",
        "مَوَانِئ",
        "mawāniʾ",
        "Plural"
      ],
      [
        "I attack",
        "أَهْجُمُ عَلَى",
        "ahjumu ʿalā",
        "Verb"
      ],
      [
        "land",
        "أَرْض",
        "arḍ",
        "Noun",
        "—",
        "أَرَاضٍ"
      ],
      [
        "plural of land",
        "أَرَاضٍ",
        "arāḍin",
        "Plural"
      ],
      [
        "Asia",
        "آسِيَا",
        "āsiyā",
        "Place name"
      ],
      [
        "Australia",
        "أُسْتُرَالِيَا",
        "usturāliyā",
        "Place name"
      ],
      [
        "Antarctica",
        "أَنْتَارْكْتِيكَا",
        "antārktīkā",
        "Place name"
      ],
      [
        "secretary-general",
        "السِّكْرِتِيرُ الْعَامُّ",
        "al-sikritīru al-ʿāmmu",
        "Noun"
      ],
      [
        "assistant secretary",
        "السِّكْرِتِيرُ الْمُسَاعِدُ",
        "al-sikritīru al-musāʿidu",
        "Noun"
      ],
      [
        "control tower",
        "بُرْجُ الْمُرَاقَبَةِ",
        "burju al-murāqabati",
        "Noun"
      ],
      [
        "communiqué; announcement",
        "بَلَاغ",
        "balāgh",
        "Noun"
      ],
      [
        "I address; deal with",
        "أَتَنَاوَلُ",
        "atanāwalu",
        "Verb"
      ],
      [
        "permanent",
        "دَائِم",
        "dāʾim",
        "Adjective"
      ],
      [
        "I raise",
        "أَرْفَعُ",
        "arfaʿu",
        "Verb"
      ],
      [
        "I explain",
        "أَشْرَحُ",
        "ashraḥu",
        "Verb"
      ],
      [
        "public; general",
        "عَامّ",
        "ʿāmm",
        "Adjective"
      ],
      [
        "public opinion",
        "الرَّأْيُ الْعَامُّ",
        "al-raʾyu al-ʿāmmu",
        "Noun"
      ],
      [
        "continent",
        "قَارَّة",
        "qārra",
        "Noun"
      ],
      [
        "organization",
        "مُنَظَّمَة",
        "munaẓẓama",
        "Noun"
      ],
      [
        "summit conference",
        "مُؤْتَمَرُ الْقِمَّةِ",
        "muʾtamaru al-qimmati",
        "Noun"
      ],
      [
        "means; method",
        "وَسِيلَة",
        "wasīla",
        "Noun",
        "—",
        "وَسَائِل"
      ],
      [
        "plural of means; method",
        "وَسَائِل",
        "wasāʾil",
        "Plural"
      ],
      [
        "I do well; improve",
        "أُحْسِنُ",
        "uḥsinu",
        "Verb"
      ],
      [
        "if",
        "إِذَا",
        "idhā",
        "Particle"
      ],
      [
        "Germany",
        "أَلْمَانِيَا",
        "almāniyā",
        "Place name"
      ],
      [
        "German",
        "أَلْمَانِيّ",
        "almānī",
        "Adjective",
        "—",
        "أَلْمَان"
      ],
      [
        "plural of German",
        "أَلْمَان",
        "almān",
        "Plural"
      ],
      [
        "I finish",
        "أَنْتَهِي مِنْ",
        "antahī min",
        "Verb"
      ],
      [
        "article; clause",
        "بَنْد",
        "band",
        "Noun",
        "—",
        "بُنُود"
      ],
      [
        "plural of article; clause",
        "بُنُود",
        "bunūd",
        "Plural"
      ],
      [
        "I receive (instruction)",
        "أَتَلَقَّى",
        "atalaqqā",
        "Verb"
      ],
      [
        "barracks",
        "ثَكَنَة",
        "thakana",
        "Noun"
      ],
      [
        "map",
        "خَرِيطَة",
        "kharīṭa",
        "Noun",
        "—",
        "خَرَائِط"
      ],
      [
        "plural of map",
        "خَرَائِط",
        "kharāʾiṭ",
        "Plural"
      ],
      [
        "constitution",
        "دُسْتُور",
        "dustūr",
        "Noun",
        "—",
        "دَسَاتِير"
      ],
      [
        "plural of constitution",
        "دَسَاتِير",
        "dasātīr",
        "Plural"
      ],
      [
        "I permit",
        "أَسْمَحُ",
        "asmaḥu",
        "Verb"
      ],
      [
        "habit; custom",
        "عَادَة",
        "ʿāda",
        "Noun"
      ],
      [
        "as is his habit",
        "كَعَادَتِهِ",
        "ka-ʿādatihi",
        "Expression"
      ],
      [
        "I inspect; search",
        "أُفَتِّشُ",
        "ufattishu",
        "Verb"
      ],
      [
        "hotel",
        "فُنْدُق",
        "funduq",
        "Noun",
        "—",
        "فَنَادِق"
      ],
      [
        "plural of hotel",
        "فَنَادِق",
        "fanādiq",
        "Plural"
      ],
      [
        "generous",
        "كَرِيم",
        "karīm",
        "Adjective",
        "—",
        "كُرَمَاء"
      ],
      [
        "plural of generous",
        "كُرَمَاء",
        "kuramāʾ",
        "Plural"
      ],
      [
        "I notice",
        "أُلَاحِظُ",
        "ulāḥiẓu",
        "Verb"
      ],
      [
        "I continue",
        "أُوَاصِلُ",
        "uwāṣilu",
        "Verb"
      ]
    ],
    "sentences": [
      [
        "What is the capital of Egypt?",
        "مَا عَاصِمَةُ مِصْرَ؟",
        "mā ʿāṣimatu miṣra?"
      ],
      [
        "The Ministry of Education is trying to solve this problem.",
        "تَسْعَى وِزَارَةُ التَّرْبِيَةِ وَالتَّعْلِيمِ فِي حَلِّ هَذِهِ الْمُشْكِلَةِ.",
        "tasʿā wizāratu al-tarbiyati wa-l-taʿlīmi fī ḥalli hādhihi al-mushkilati."
      ],
      [
        "The schools are divided into three types.",
        "تَنْقَسِمُ الْمَدَارِسُ إِلَى ثَلَاثَةِ أَنْوَاعٍ.",
        "tanqasimu al-madārisu ilā thalāthati anwāʿin."
      ],
      [
        "The United Nations is discussing the Middle East problem.",
        "تُنَاقِشُ الأُمَمُ الْمُتَّحِدَةُ مُشْكِلَةَ الشَّرْقِ الأَوْسَطِ.",
        "tunāqishu al-umamu al-muttaḥidatu mushkilata al-sharqi al-awsaṭi."
      ],
      [
        "The delegates discussed the political and military situation.",
        "نَاقَشَ الْمَنْدُوبُونَ الْمَوْقِفَ السِّيَاسِيَّ وَالْعَسْكَرِيَّ.",
        "nāqasha al-mandūbūna al-mawqifa al-siyāsiyya wa-l-ʿaskariyya."
      ],
      [
        "I began learning German after finishing my higher studies.",
        "بَدَأْتُ تَعَلُّمَ اللُّغَةِ الأَلْمَانِيَّةِ بَعْدَ انْتِهَائِي مِنَ الدِّرَاسَةِ الْعَالِيَةِ.",
        "badaʾtu taʿalluma al-lughati al-almāniyyati baʿda intihāʾī mina al-dirāsati al-ʿāliyati."
      ],
      [
        "I did not continue learning it.",
        "لَمْ أُوَاصِلْ تَعَلُّمَهَا.",
        "lam uwāṣil taʿallumahā."
      ]
    ],
    "learn": [
      "Education",
      "international affairs",
      "and public institutions"
    ],
    "sourceLessonRange": [
      99,
      104
    ],
    "chapterLabel": "Chapters 99–104",
    "sourceFiles": [
      {
        "filename": "lesson099-104 side 1.docx",
        "side": 1,
        "lessonRange": [
          99,
          104
        ]
      },
      {
        "filename": "lesson099-104 side 2.docx",
        "side": 2,
        "lessonRange": [
          99,
          104
        ]
      }
    ]
  },
  "105": {
    "subtitle": "International news, interviews, and Arabic literature",
    "vocab": [
      [
        "I protest against",
        "أَحْتَجُّ عَلَى",
        "aḥtajju ʿalā",
        "Verb"
      ],
      [
        "Greece",
        "الْيُونَان",
        "al-yūnān",
        "Place name"
      ],
      [
        "supplies",
        "إِمْدَادَات",
        "imdādāt",
        "Noun"
      ],
      [
        "movement; maneuver",
        "تَحَرُّك",
        "taḥarruk",
        "Noun"
      ],
      [
        "interference; jamming",
        "تَشْوِيش",
        "tashwīsh",
        "Noun"
      ],
      [
        "I claim that",
        "أَزْعُمُ أَنَّ",
        "azʿumu anna",
        "Verb phrase"
      ],
      [
        "weapon",
        "سِلَاح",
        "silāḥ",
        "Noun",
        "—",
        "أَسْلِحَة"
      ],
      [
        "plural of weapon",
        "أَسْلِحَة",
        "asliḥa",
        "Plural"
      ],
      [
        "air force",
        "سِلَاحُ الطَّيَرَانِ",
        "silāḥu al-ṭayarāni",
        "Noun"
      ],
      [
        "artillery corps",
        "سِلَاحُ الْمَدْفَعِيَّةِ",
        "silāḥu al-madfaʿiyyati",
        "Noun"
      ],
      [
        "I arm",
        "أُسَلِّحُ",
        "usalliḥu",
        "Verb"
      ],
      [
        "crew",
        "طَاقَم",
        "ṭāqam",
        "Noun",
        "—",
        "أَطْقُم"
      ],
      [
        "plural of crew",
        "أَطْقُم",
        "aṭqum",
        "Plural"
      ],
      [
        "nutritional; food-related",
        "غِذَائِيّ",
        "ghidhāʾī",
        "Adjective"
      ],
      [
        "brick",
        "طُوب",
        "ṭūb",
        "Noun"
      ],
      [
        "captain (ship)",
        "قُبْطَان",
        "qubṭān",
        "Noun",
        "—",
        "قَبَاطِنَة"
      ],
      [
        "plural of captain (ship)",
        "قَبَاطِنَة",
        "qabāṭina",
        "Plural"
      ],
      [
        "I supply; extend",
        "أَمُدُّ",
        "amuddu",
        "Verb"
      ],
      [
        "monitoring; supervision",
        "مُرَاقَبَة",
        "murāqaba",
        "Noun"
      ],
      [
        "antenna",
        "هَوَائِيّ",
        "hawāʾī",
        "Noun"
      ],
      [
        "the day before yesterday",
        "أَمْسِ الأَوَّلِ",
        "amsi al-awwali",
        "Expression"
      ],
      [
        "in addition to",
        "بِالإِضَافَةِ إِلَى",
        "bi-l-iḍāfati ilā",
        "Expression"
      ],
      [
        "I train",
        "أُدَرِّبُ",
        "udarribu",
        "Verb"
      ],
      [
        "I encourage",
        "أُشَجِّعُ عَلَى",
        "ushajjiʿu ʿalā",
        "Verb"
      ],
      [
        "deal; transaction",
        "صَفْقَة",
        "ṣafqa",
        "Noun"
      ],
      [
        "I conclude a deal",
        "أَعْقِدُ صَفْقَةً",
        "aʿqidu ṣafqatan",
        "Verb phrase"
      ],
      [
        "I guarantee",
        "أَضْمَنُ",
        "aḍmanu",
        "Verb"
      ],
      [
        "model; type",
        "طِرَاز",
        "ṭirāz",
        "Noun",
        "—",
        "أَطْرِزَة"
      ],
      [
        "plural of model; type",
        "أَطْرِزَة",
        "aṭriza",
        "Plural"
      ],
      [
        "I mean",
        "أَعْنِي",
        "aʿnī",
        "Verb"
      ],
      [
        "only",
        "فَحَسْبُ",
        "fa-ḥasbu",
        "Adverb"
      ],
      [
        "technical",
        "فَنِّيّ",
        "fannī",
        "Adjective"
      ],
      [
        "technician",
        "عَامِلٌ فَنِّيٌّ",
        "ʿāmilun fanniyyun",
        "Noun"
      ],
      [
        "also",
        "كَذَلِكَ",
        "ka-dhālika",
        "Adverb"
      ],
      [
        "adviser",
        "مُسْتَشَار",
        "mustashār",
        "Noun"
      ],
      [
        "meaning",
        "مَعْنًى",
        "maʿnan",
        "Noun",
        "—",
        "مَعَانٍ"
      ],
      [
        "plural of meaning",
        "مَعَانٍ",
        "maʿānin",
        "Plural"
      ],
      [
        "I enable",
        "أُمَكِّنُ مِنْ",
        "umakkinu min",
        "Verb"
      ],
      [
        "possible",
        "مُمْكِن",
        "mumkin",
        "Adjective"
      ],
      [
        "news item",
        "نَبَأ",
        "nabaʾ",
        "Noun",
        "—",
        "أَنْبَاء"
      ],
      [
        "plural of news item",
        "أَنْبَاء",
        "anbāʾ",
        "Plural"
      ],
      [
        "I master",
        "أُتْقِنُ",
        "utqinu",
        "Verb"
      ],
      [
        "method; style",
        "أُسْلُوب",
        "uslūb",
        "Noun",
        "—",
        "أَسَالِيب"
      ],
      [
        "plural of method; style",
        "أَسَالِيب",
        "asālīb",
        "Plural"
      ],
      [
        "I add",
        "أُضِيفُ",
        "uḍīfu",
        "Verb"
      ],
      [
        "condition; state",
        "حَال",
        "ḥāl",
        "Noun",
        "—",
        "أَحْوَال"
      ],
      [
        "plural of condition; state",
        "أَحْوَال",
        "aḥwāl",
        "Plural"
      ],
      [
        "happy",
        "سَعِيد",
        "saʿīd",
        "Adjective",
        "—",
        "سُعَدَاء"
      ],
      [
        "plural of happy",
        "سُعَدَاء",
        "suʿadāʾ",
        "Plural"
      ],
      [
        "I express",
        "أُعَبِّرُ عَنْ",
        "uʿabbiru ʿan",
        "Verb"
      ],
      [
        "I change",
        "أُغَيِّرُ",
        "ughayyiru",
        "Verb"
      ],
      [
        "century",
        "قَرْن",
        "qarn",
        "Noun",
        "—",
        "قُرُون"
      ],
      [
        "plural of century",
        "قُرُون",
        "qurūn",
        "Plural"
      ],
      [
        "village",
        "قَرْيَة",
        "qarya",
        "Noun",
        "—",
        "قُرًى"
      ],
      [
        "plural of village",
        "قُرًى",
        "quran",
        "Plural"
      ],
      [
        "neither a little nor a lot",
        "لَا قَلِيلًا وَلَا كَثِيرًا",
        "lā qalīlan wa-lā kathīran",
        "Expression"
      ],
      [
        "smiling",
        "مُبْتَسِم",
        "mubtasim",
        "Adjective"
      ]
    ],
    "sentences": [
      [
        "The officers and crew declared their refusal to return.",
        "أَعْلَنَ الضُّبَّاطُ وَالطَّاقَمُ رَفْضَهُمُ الْعَوْدَةَ.",
        "aʿlana al-ḍubbāṭu wa-l-ṭāqamu rafḍahumu al-ʿawdata."
      ],
      [
        "They held a press conference in Rome.",
        "عَقَدُوا مُؤْتَمَرًا صَحْفِيًّا فِي رُومَا.",
        "ʿaqadū muʾtamaran ṣaḥfiyyan fī rūmā."
      ],
      [
        "We do not want war because it obstructs oil production.",
        "لَا نُرِيدُ الْحَرْبَ لِأَنَّهَا تُعَرْقِلُ إِنْتَاجَ النَّفْطِ.",
        "lā nurīdu al-ḥarba li-annahā tuʿarqilu intāja al-nafṭi."
      ],
      [
        "We cannot guarantee peace in the region by ourselves.",
        "لَا يُمْكِنُنَا وَحْدَنَا أَنْ نَضْمَنَ السَّلَامَ فِي الْمِنْطَقَةِ.",
        "lā yumkinunā waḥdanā an naḍmana al-salāma fī al-minṭaqati."
      ],
      [
        "Taha Hussein was born in a small village in southern Egypt.",
        "وُلِدَ طَهَ حُسَيْنٌ فِي قَرْيَةٍ صَغِيرَةٍ بِجَنُوبِ مِصْرَ.",
        "wulida ṭaha ḥusaynun fī qaryatin ṣaghīratin bi-janūbi miṣra."
      ],
      [
        "Arabic is a means of expressing Arab life.",
        "اللُّغَةُ الْعَرَبِيَّةُ وَسِيلَةٌ لِلتَّعْبِيرِ عَنِ الْحَيَاةِ الْعَرَبِيَّةِ.",
        "al-lughatu al-ʿarabiyyatu wasīlatun li-l-taʿbīri ʿani al-ḥayāti al-ʿarabiyyati."
      ],
      [
        "We celebrate the opening of an agricultural secondary school.",
        "نَحْتَفِلُ بِافْتِتَاحِ مَدْرَسَةٍ ثَانَوِيَّةٍ زِرَاعِيَّةٍ.",
        "naḥtafilu bi-iftitāḥi madrasatin thānawiyyatin zirāʿiyyatin."
      ]
    ],
    "learn": [
      "International news",
      "interviews",
      "and Arabic literature"
    ],
    "sourceLessonRange": [
      105,
      110
    ],
    "chapterLabel": "Chapters 105–110",
    "sourceFiles": [
      {
        "filename": "lesson105-110 side 1.docx",
        "side": 1,
        "lessonRange": [
          105,
          110
        ]
      }
    ]
  }
};
for (const [number, chapter] of Object.entries(DLI_TRANSCRIPT_IMPORT)) {
  DLI_CHAPTERS[number] = {...chapter,
    vocab:dliWords(Number(number),chapter.vocab),
    sentences:dliSentences(Number(number),chapter.sentences)};
}
const DLI_TRANSCRIPT_SOURCES = {
  "31": [
    {
      "filename": "lesson031-side 1(2).docx",
      "side": 1,
      "lessonRange": [
        31,
        31
      ]
    },
    {
      "filename": "lesson031-side 2(2).docx",
      "side": 2,
      "lessonRange": [
        31,
        31
      ]
    }
  ],
  "32": [
    {
      "filename": "lesson032-side 1(2).docx",
      "side": 1,
      "lessonRange": [
        32,
        32
      ]
    },
    {
      "filename": "lesson032-side 2(2).docx",
      "side": 2,
      "lessonRange": [
        32,
        32
      ]
    }
  ],
  "33": [
    {
      "filename": "lesson033-side 1(2).docx",
      "side": 1,
      "lessonRange": [
        33,
        33
      ]
    },
    {
      "filename": "lesson033-side 2(2).docx",
      "side": 2,
      "lessonRange": [
        33,
        33
      ]
    }
  ],
  "34": [
    {
      "filename": "lesson034-side 1(2).docx",
      "side": 1,
      "lessonRange": [
        34,
        34
      ]
    },
    {
      "filename": "lesson034-side 2(2).docx",
      "side": 2,
      "lessonRange": [
        34,
        34
      ]
    }
  ],
  "35": [
    {
      "filename": "lesson035-side 1(2).docx",
      "side": 1,
      "lessonRange": [
        35,
        35
      ]
    },
    {
      "filename": "lesson035-side 2(2).docx",
      "side": 2,
      "lessonRange": [
        35,
        35
      ]
    }
  ],
  "36": [
    {
      "filename": "lesson036-side 1(2).docx",
      "side": 1,
      "lessonRange": [
        36,
        36
      ]
    },
    {
      "filename": "lesson036-side 2(2).docx",
      "side": 2,
      "lessonRange": [
        36,
        36
      ]
    }
  ],
  "37": [
    {
      "filename": "lesson037-side 1(1).docx",
      "side": 1,
      "lessonRange": [
        37,
        37
      ]
    },
    {
      "filename": "lesson037-side 2(1).docx",
      "side": 2,
      "lessonRange": [
        37,
        37
      ]
    }
  ],
  "38": [
    {
      "filename": "lesson038-side 1(1).docx",
      "side": 1,
      "lessonRange": [
        38,
        38
      ]
    },
    {
      "filename": "lesson038-side 2(1).docx",
      "side": 2,
      "lessonRange": [
        38,
        38
      ]
    }
  ],
  "39": [
    {
      "filename": "lesson039-side 1(1).docx",
      "side": 1,
      "lessonRange": [
        39,
        39
      ]
    },
    {
      "filename": "lesson039-side 2(1).docx",
      "side": 2,
      "lessonRange": [
        39,
        39
      ]
    }
  ],
  "40": [
    {
      "filename": "lesson040-side 1(1).docx",
      "side": 1,
      "lessonRange": [
        40,
        40
      ]
    },
    {
      "filename": "lesson040-side 2(1).docx",
      "side": 2,
      "lessonRange": [
        40,
        40
      ]
    }
  ],
  "41": [
    {
      "filename": "lesson041-side 1.docx",
      "side": 1,
      "lessonRange": [
        41,
        41
      ]
    },
    {
      "filename": "lesson041-side 2.docx",
      "side": 2,
      "lessonRange": [
        41,
        41
      ]
    }
  ],
  "42": [
    {
      "filename": "lesson042-side 1.docx",
      "side": 1,
      "lessonRange": [
        42,
        42
      ]
    },
    {
      "filename": "lesson042-side 2.docx",
      "side": 2,
      "lessonRange": [
        42,
        42
      ]
    }
  ],
  "43": [
    {
      "filename": "lesson043-side 1.docx",
      "side": 1,
      "lessonRange": [
        43,
        43
      ]
    },
    {
      "filename": "lesson043-side 2.docx",
      "side": 2,
      "lessonRange": [
        43,
        43
      ]
    }
  ],
  "44": [
    {
      "filename": "lesson044-side 1.docx",
      "side": 1,
      "lessonRange": [
        44,
        44
      ]
    }
  ],
  "45": [
    {
      "filename": "lesson045-side 1.docx",
      "side": 1,
      "lessonRange": [
        45,
        45
      ]
    },
    {
      "filename": "lesson045side 2.docx",
      "side": 2,
      "lessonRange": [
        45,
        45
      ]
    }
  ],
  "46": [
    {
      "filename": "lesson046-side 1.docx",
      "side": 1,
      "lessonRange": [
        46,
        46
      ]
    },
    {
      "filename": "lesson046side 2.docx",
      "side": 2,
      "lessonRange": [
        46,
        46
      ]
    }
  ],
  "47": [
    {
      "filename": "lesson047-side 1.docx",
      "side": 1,
      "lessonRange": [
        47,
        47
      ]
    },
    {
      "filename": "lesson047side 2.docx",
      "side": 2,
      "lessonRange": [
        47,
        47
      ]
    }
  ],
  "48": [
    {
      "filename": "lesson048-side 1.docx",
      "side": 1,
      "lessonRange": [
        48,
        48
      ]
    },
    {
      "filename": "lesson048side 2.docx",
      "side": 2,
      "lessonRange": [
        48,
        48
      ]
    }
  ],
  "49": [
    {
      "filename": "lesson049-side 1.docx",
      "side": 1,
      "lessonRange": [
        49,
        49
      ]
    },
    {
      "filename": "lesson049side 2.docx",
      "side": 2,
      "lessonRange": [
        49,
        49
      ]
    }
  ],
  "50": [
    {
      "filename": "lesson050-side 1.docx",
      "side": 1,
      "lessonRange": [
        50,
        50
      ]
    }
  ],
  "51": [
    {
      "filename": "lesson051-side 1.docx",
      "side": 1,
      "lessonRange": [
        51,
        51
      ]
    },
    {
      "filename": "lesson051-side 2.docx",
      "side": 2,
      "lessonRange": [
        51,
        51
      ]
    }
  ],
  "52": [
    {
      "filename": "lesson052-side 1.docx",
      "side": 1,
      "lessonRange": [
        52,
        52
      ]
    },
    {
      "filename": "lesson052-side 2.docx",
      "side": 2,
      "lessonRange": [
        52,
        52
      ]
    }
  ],
  "53": [
    {
      "filename": "lesson053-side 1.docx",
      "side": 1,
      "lessonRange": [
        53,
        53
      ]
    }
  ],
  "54": [
    {
      "filename": "lesson054-side 1.docx",
      "side": 1,
      "lessonRange": [
        54,
        54
      ]
    },
    {
      "filename": "lesson054-side 2.docx",
      "side": 2,
      "lessonRange": [
        54,
        54
      ]
    }
  ],
  "55": [
    {
      "filename": "lesson055-side 1.docx",
      "side": 1,
      "lessonRange": [
        55,
        55
      ]
    },
    {
      "filename": "lesson055-side 2.docx",
      "side": 2,
      "lessonRange": [
        55,
        55
      ]
    }
  ],
  "56": [
    {
      "filename": "lesson056-side 1.docx",
      "side": 1,
      "lessonRange": [
        56,
        56
      ]
    },
    {
      "filename": "lesson056-side 2.docx",
      "side": 2,
      "lessonRange": [
        56,
        56
      ]
    }
  ],
  "57": [
    {
      "filename": "lesson057-side 1.docx",
      "side": 1,
      "lessonRange": [
        57,
        57
      ]
    },
    {
      "filename": "lesson057-side 2.docx",
      "side": 2,
      "lessonRange": [
        57,
        57
      ]
    }
  ],
  "58": [
    {
      "filename": "lesson058-side 1.docx",
      "side": 1,
      "lessonRange": [
        58,
        58
      ]
    },
    {
      "filename": "lesson058-side 2.docx",
      "side": 2,
      "lessonRange": [
        58,
        58
      ]
    }
  ],
  "59": [
    {
      "filename": "lesson059-side 1.docx",
      "side": 1,
      "lessonRange": [
        59,
        59
      ]
    },
    {
      "filename": "lesson059-side 2.docx",
      "side": 2,
      "lessonRange": [
        59,
        59
      ]
    }
  ],
  "60": [
    {
      "filename": "lesson060-side 1.docx",
      "side": 1,
      "lessonRange": [
        60,
        60
      ]
    }
  ],
  "61": [
    {
      "filename": "lesson061-side 1.docx",
      "side": 1,
      "lessonRange": [
        61,
        61
      ]
    },
    {
      "filename": "lesson061-side 2.docx",
      "side": 2,
      "lessonRange": [
        61,
        61
      ]
    }
  ],
  "62": [
    {
      "filename": "lesson062-side 1.docx",
      "side": 1,
      "lessonRange": [
        62,
        62
      ]
    }
  ],
  "63": [
    {
      "filename": "lesson063-side 1.docx",
      "side": 1,
      "lessonRange": [
        63,
        63
      ]
    }
  ],
  "64": [
    {
      "filename": "lesson064-side 1.docx",
      "side": 1,
      "lessonRange": [
        64,
        64
      ]
    },
    {
      "filename": "lesson064-side 2.docx",
      "side": 2,
      "lessonRange": [
        64,
        64
      ]
    }
  ],
  "65": [
    {
      "filename": "lesson065-side 1.docx",
      "side": 1,
      "lessonRange": [
        65,
        65
      ]
    },
    {
      "filename": "lesson065-side 2.docx",
      "side": 2,
      "lessonRange": [
        65,
        65
      ]
    }
  ],
  "66": [
    {
      "filename": "lesson066-side 1.docx",
      "side": 1,
      "lessonRange": [
        66,
        66
      ]
    }
  ],
  "67": [
    {
      "filename": "lesson067-side 1.docx",
      "side": 1,
      "lessonRange": [
        67,
        67
      ]
    }
  ],
  "68": [
    {
      "filename": "lesson068-side 1.docx",
      "side": 1,
      "lessonRange": [
        68,
        68
      ]
    },
    {
      "filename": "lesson068-side 2.docx",
      "side": 2,
      "lessonRange": [
        68,
        68
      ]
    }
  ],
  "69": [
    {
      "filename": "lesson069-side 1.docx",
      "side": 1,
      "lessonRange": [
        69,
        69
      ]
    },
    {
      "filename": "lesson069-side 2.docx",
      "side": 2,
      "lessonRange": [
        69,
        69
      ]
    }
  ],
  "70": [
    {
      "filename": "lesson070-side 1.docx",
      "side": 1,
      "lessonRange": [
        70,
        70
      ]
    },
    {
      "filename": "lesson070-side 2.docx",
      "side": 2,
      "lessonRange": [
        70,
        70
      ]
    }
  ],
  "71": [
    {
      "filename": "lesson071-side 1.docx",
      "side": 1,
      "lessonRange": [
        71,
        71
      ]
    },
    {
      "filename": "lesson071-side 2.docx",
      "side": 2,
      "lessonRange": [
        71,
        71
      ]
    }
  ],
  "72": [
    {
      "filename": "lesson072-side 1.docx",
      "side": 1,
      "lessonRange": [
        72,
        72
      ]
    },
    {
      "filename": "lesson072-side 2.docx",
      "side": 2,
      "lessonRange": [
        72,
        72
      ]
    }
  ],
  "73": [
    {
      "filename": "lesson073-side 1.docx",
      "side": 1,
      "lessonRange": [
        73,
        73
      ]
    },
    {
      "filename": "lesson073-side 2.docx",
      "side": 2,
      "lessonRange": [
        73,
        73
      ]
    }
  ],
  "74": [
    {
      "filename": "lesson074-side 1.docx",
      "side": 1,
      "lessonRange": [
        74,
        74
      ]
    }
  ],
  "79": [
    {
      "filename": "lesson079-side 2.docx",
      "side": 2,
      "lessonRange": [
        79,
        79
      ]
    }
  ],
  "80": [
    {
      "filename": "lesson080-side 1.docx",
      "side": 1,
      "lessonRange": [
        80,
        80
      ]
    }
  ],
  "81": [
    {
      "filename": "lesson081-086 side 1.docx",
      "side": 1,
      "lessonRange": [
        81,
        86
      ]
    },
    {
      "filename": "lesson081-086 side 2.docx",
      "side": 2,
      "lessonRange": [
        81,
        86
      ]
    }
  ],
  "87": [
    {
      "filename": "lesson087-089 side 1.docx",
      "side": 1,
      "lessonRange": [
        87,
        89
      ]
    }
  ],
  "90": [
    {
      "filename": "lesson090-092 side 2.docx",
      "side": 2,
      "lessonRange": [
        90,
        92
      ]
    }
  ],
  "93": [
    {
      "filename": "lesson093-098 side 1.docx",
      "side": 1,
      "lessonRange": [
        93,
        98
      ]
    },
    {
      "filename": "lesson093-098 side 2.docx",
      "side": 2,
      "lessonRange": [
        93,
        98
      ]
    }
  ],
  "99": [
    {
      "filename": "lesson099-104 side 1.docx",
      "side": 1,
      "lessonRange": [
        99,
        104
      ]
    },
    {
      "filename": "lesson099-104 side 2.docx",
      "side": 2,
      "lessonRange": [
        99,
        104
      ]
    }
  ],
  "105": [
    {
      "filename": "lesson105-110 side 1.docx",
      "side": 1,
      "lessonRange": [
        105,
        110
      ]
    }
  ]
};
for (const [number, sourceFiles] of Object.entries(DLI_TRANSCRIPT_SOURCES)) {
  if (DLI_CHAPTERS[number]) DLI_CHAPTERS[number].sourceFiles=sourceFiles;
}

const DLI_ALL_V=Object.values(DLI_CHAPTERS).flatMap(chapter=>chapter.vocab);


