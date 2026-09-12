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
['now','الآن','al-ān','Adverb'],['house','بَيْت','bayt','Noun','—','بُيُوت'],['your house','بَيْتُكَ','baytuka','Possessive noun','بَيْتُكِ','بُيُوتُكُمْ','بُيُوتُكُنَّ'],['her house','بَيْتُهَا','baytuhā','Possessive noun'],
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
10:{subtitle:'Government, Countries and Plurals',vocab:DLI_V10,sentences:DLI_S10,learn:['Government and possessive forms','Kingdoms and republics','Occupational plurals','Objects and locations']}
};
const DLI_ALL_V=Object.values(DLI_CHAPTERS).flatMap(chapter=>chapter.vocab);
