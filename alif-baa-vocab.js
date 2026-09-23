// Authoritative Alif Baa vocabulary reference supplied by the user.
const ALIF_BAA_VOCAB=[
['coffee','قهْوة'],['Arabic coffee (Turkish)','قهْوة عربيّة -- تركيّة'],['tea','شاي'],['milk','حليب -- لبن'],['water','ماء'],['sugar','سكّر'],['bread','خُبْز'],['Arabic bread','خُبْز عربيّ'],['pencil','قلم'],['test','إمْتِحان'],
['office (s)','مكتب -- مكاتِب'],['library (s)','مكتبة -- مكتبات'],['building','بناية'],['room (s)','غُرْفة -- غرف'],['feeling well/good (m-f) Praise be to God','كويس -- كويسة الحمد لله'],['feeling hot (m-f)','حرّان -- حرّانة'],['feeling cold (m-f)','بردان -- بردانة'],['angry (m-f)','غضبان -- غضبانة'],['I have a headache','عندي صضاع'],['sad (m-f)','زعلان -- زعلانة'],
['I have a cold','عندي برد'],['sick (m-f)','مريض -- مريضة'],['hungry (m-f)','جوعان -- جوعانة'],['tired (m-f)','تعبان -- تعبانة'],['thirsty (m-f)','عطشان -- عطشانة'],['he -- she','هو -- هي'],['you (m) -- you (f) singular','أنتَ -- أنتِ'],['I','أنا'],['yes','نعم'],['no','لا'],
['zero','صفر'],['one','واحد'],['two','إثنين'],['three','ثلاثة'],['four','أربعة'],['five','خمسة'],['six','ستّة'],['seven','سبعة'],['eight','ثمانية'],['nine','تسعة'],['ten','عشرة'],
['this (m)','هذا'],['this (f)','هذه'],['with','مع'],['in','في'],['behind','وراء'],['in front of','أمام'],['easy (m-f)','سهل -- سهلة'],['good (m-f)','جيّد -- جيّدة'],['tasty (food)/good (person) (m-f)','طيّب -- طيّبة'],['never mind, that\'s ok','معليش'],
['car (s)','سيّارة -- سيّارات'],['street (s)','شارع -- شوارع'],['house (s)','بيت -- بيوت'],['clock, hour (s)','ساعة -- ساعات'],['professor (s) (masculine)','أستاذ -- أساتذة'],['professor (s) (feminine)','أستاذة -- أستاذات'],['wide, spacious (m-f)','واسع -- واسعة'],['small (m-f)','صغير -- صغيرة'],['hard, difficult (m-f)','صعب -- صعبة'],['arab/Arabic, Arabs (feminine)','عربيّة -- عربيّات'],
['arab/Arabic, Arabs (masculine)','عربيّ -- عرب'],['new (m-f)','جديد -- جديدة'],['student (s) (masculine)','طالب -- طلاب'],['student (s) (feminine)','طالبة -- طالبات'],['chair','كرسي'],['table (s)','طاولة -- طاولات'],['book (s)','كتاب -- كتب'],['far (m-f)','بعيد -- بعيدة'],['notebook','دفتر'],['paper','ورقة'],
['class','صف'],['window','شبّاك'],['money','فلوس'],['airplane (s)','طائرة -- طائرات'],['short (m-f)','قصير -- قصيرة'],['long or tall (m-f)','طويل -- طويلة'],['lesson','درس'],['big (m-f)','كبير -- كبيرة'],['near (m-f)','قريب -- قريبة'],['man (men)','رجل -- رجال'],
['woman (women)','إمْرأة -- نساء'],['boy (boys)','ولد -- أوْلاد'],['city (cities)','مدينة -- مُدُن'],['state (s)','ولاية -- ولايات'],['and','و'],['for, belonging to','ل'],['by, with','ب'],['thus, therefore, so','ف'],['university (ies)','جامعة -- جامعات'],['lemonade','ليمونادة'],
['sandwich','سندويتش'],['mineral water','مياه معدنية'],['chocolate','شوكولاتة'],['fried potatoes','بطاطة مقلية'],['baklava','بقلاوة'],['dates','تمر'],['carrot juice','عصير جزر'],['lieutenant','ملازم'],['first lieutenant','ملازم أول'],['captain','نقيب'],
['major','رائد'],['lieutenant colonel','مقدّم'],['colonel','عقيد'],['capital','عاصمة'],['I want','أريد'],['you (m) want; you (f) want','تُريد - تُريدين'],['how much','كم'],['on','على'],['to; into','إلى'],['girl (girls)','بنت - بنات']
];

// Card readings follow the source list in order. Keep the reference spellings above
// intact because sentence highlighting also uses them as the learner's baseline.
const ALIF_BAA_READINGS=[
'qahwa','qahwa ʿarabiyya — turkiyya','shāy','ḥalīb — laban','māʾ','sukkar','khubz','khubz ʿarabī','qalam','imtiḥān',
'maktab — makātib','maktaba — maktabāt','bināya','ghurfa — ghuraf','kuwayyis — kuwayyisa, al-ḥamdu lillāh','ḥarrān — ḥarrāna','bardān — bardāna','ghaḍbān — ghaḍbāna','ʿindī ṣudāʿ','zaʿlān — zaʿlāna',
'ʿindī bard','marīḍ — marīḍa','jawʿān — jawʿāna','taʿbān — taʿbāna','ʿaṭshān — ʿaṭshāna','huwa — hiya','anta — anti','anā','naʿam','lā',
'ṣifr','wāḥid','ithnayn','thalātha','arbaʿa','khamsa','sitta','sabʿa','thamāniya','tisʿa','ʿashara',
'hādhā','hādhihi','maʿa','fī','warāʾ','amām','sahl — sahla','jayyid — jayyida','ṭayyib — ṭayyiba','maʿlish',
'sayyāra — sayyārāt','shāriʿ — shawāriʿ','bayt — buyūt','sāʿa — sāʿāt','ustādh — asātidha','ustādha — ustādhāt','wāsiʿ — wāsiʿa','ṣaghīr — ṣaghīra','ṣaʿb — ṣaʿba','ʿarabiyya — ʿarabiyyāt',
'ʿarabī — ʿarab','jadīd — jadīda','ṭālib — ṭullāb','ṭāliba — ṭālibāt','kursī','ṭāwila — ṭāwilāt','kitāb — kutub','baʿīd — baʿīda','daftar','waraqa',
'ṣaff','shubbāk','fulūs','ṭāʾira — ṭāʾirāt','qaṣīr — qaṣīra','ṭawīl — ṭawīla','dars','kabīr — kabīra','qarīb — qarība','rajul — rijāl',
'imraʾa — nisāʾ','walad — awlād','madīna — mudun','wilāya — wilāyāt','wa','li','bi','fa','jāmiʿa — jāmiʿāt','laymūnāda',
'sandwītsh','miyāh maʿdaniyya','shūkūlāta','baṭāṭa maqliyya','baqlāwa','tamr','ʿaṣīr jazar','mulāzim','mulāzim awwal','naqīb',
'rāʾid','muqaddam','ʿaqīd','ʿāṣima','urīdu','turīdu — turīdīna','kam','ʿalā','ilā','bint — banāt'
];
const ALIF_BAA_CARDS=ALIF_BAA_VOCAB.map(([en,ar],i)=>({
  id:`alif-baa-${i+1}`,collectionId:'alif-baa',collection:'Alif Baa',
  en,ar,tr:ALIF_BAA_READINGS[i],pos:'Alif Baa',f:'—',mp:'—',fp:'—'
}));
