const alkitaabWords=(chapter,rows)=>rows.map((word,i)=>({...word,id:`ak-c${chapter}-${i+1}`,collectionId:'alkitaab1',collection:'Al-Kitaab (Part 1)',chapter,idInChapter:i+1}));
const alkitaabSentences=(chapter,rows)=>rows.map((sentence,i)=>({...sentence,id:`ak-c${chapter}-s${i+1}`,chapter,idInChapter:i+1}));
const AK_V5=alkitaabWords(5,[
  {
    "en": "weather; atmosphere",
    "ar": "الجَوّ / الطَّقْس",
    "tr": "al-jaww / al-ṭaqs",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Weather"
  },
  {
    "en": "cold",
    "ar": "بارِد",
    "tr": "bārid",
    "pos": "Adjective",
    "f": "بارِدة",
    "mp": "—",
    "fp": "—",
    "category": "Weather"
  },
  {
    "en": "hot",
    "ar": "حارّ",
    "tr": "ḥārr",
    "pos": "Adjective",
    "f": "حارّة",
    "mp": "—",
    "fp": "—",
    "category": "Weather"
  },
  {
    "en": "sunny",
    "ar": "مُشْمِس",
    "tr": "mushmis",
    "pos": "Adjective",
    "f": "مُشْمِسة",
    "mp": "—",
    "fp": "—",
    "category": "Weather"
  },
  {
    "en": "cloudy",
    "ar": "غائِم",
    "tr": "ghāʾim",
    "pos": "Adjective",
    "f": "غائِمة",
    "mp": "—",
    "fp": "—",
    "category": "Weather"
  },
  {
    "en": "snow",
    "ar": "ثَلْج",
    "tr": "thalj",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Weather"
  },
  {
    "en": "rain",
    "ar": "مَطَر",
    "tr": "maṭar",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Weather"
  },
  {
    "en": "humidity",
    "ar": "الرُّطوبة",
    "tr": "al-ruṭūba",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Weather"
  },
  {
    "en": "degree",
    "ar": "دَرَجة",
    "tr": "daraja",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "دَرَجات",
    "category": "Weather"
  },
  {
    "en": "temperature",
    "ar": "دَرَجة الحَرارة",
    "tr": "darajat al-ḥarāra",
    "pos": "Noun phrase",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Weather"
  },
  {
    "en": "high",
    "ar": "عالٍ",
    "tr": "ʿālin",
    "pos": "Adjective",
    "f": "عالِية",
    "mp": "—",
    "fp": "—",
    "category": "Weather"
  },
  {
    "en": "season",
    "ar": "فَصْل",
    "tr": "faṣl",
    "pos": "Noun",
    "f": "—",
    "mp": "فُصول",
    "fp": "—",
    "category": "Seasons"
  },
  {
    "en": "spring",
    "ar": "الرَّبيع",
    "tr": "al-rabīʿ",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Seasons"
  },
  {
    "en": "summer",
    "ar": "الصَّيْف",
    "tr": "al-ṣayf",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Seasons"
  },
  {
    "en": "autumn",
    "ar": "الخَريف",
    "tr": "al-kharīf",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Seasons"
  },
  {
    "en": "winter",
    "ar": "الشِّتاء",
    "tr": "al-shitāʾ",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Seasons"
  },
  {
    "en": "semester",
    "ar": "فَصْل دِراسيّ",
    "tr": "faṣl dirāsī",
    "pos": "Noun",
    "f": "—",
    "mp": "فُصول دِراسيّة",
    "fp": "—",
    "category": "Study"
  },
  {
    "en": "very",
    "ar": "جِدًّا",
    "tr": "jiddan",
    "pos": "Adverb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Degree"
  },
  {
    "en": "well",
    "ar": "جَيِّدًا",
    "tr": "jayyidan",
    "pos": "Adverb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Degree"
  },
  {
    "en": "sometimes",
    "ar": "أَحْيانًا",
    "tr": "aḥyānan",
    "pos": "Adverb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Degree"
  },
  {
    "en": "only",
    "ar": "فَقَط",
    "tr": "faqaṭ",
    "pos": "Adverb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Degree"
  },
  {
    "en": "a little",
    "ar": "قَليلًا",
    "tr": "qalīlan",
    "pos": "Adverb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Degree"
  },
  {
    "en": "a lot; much",
    "ar": "كَثيرًا",
    "tr": "kathīran",
    "pos": "Adverb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Degree"
  },
  {
    "en": "best",
    "ar": "أَحْسَن",
    "tr": "aḥsan",
    "pos": "Adjective",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Degree"
  },
  {
    "en": "I feel; experience",
    "ar": "أَشْعُرُ بِـ",
    "tr": "ashʿuru bi-",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Feelings"
  },
  {
    "en": "loneliness",
    "ar": "الوِحْدة",
    "tr": "al-waḥda",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Feelings"
  },
  {
    "en": "crowding",
    "ar": "الاِزْدِحام",
    "tr": "al-izdiḥām",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Circumstances"
  },
  {
    "en": "because of",
    "ar": "بِسَبَبِ",
    "tr": "bi-sababi",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Circumstances"
  },
  {
    "en": "of ___ descent",
    "ar": "مِن أَصْلٍ + النِّسْبة",
    "tr": "min aṣlin + al-nisba",
    "pos": "Expression",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Background"
  },
  {
    "en": "as far as ___ is concerned",
    "ar": "بِالنِّسْبةِ لِـ",
    "tr": "bi-l-nisbati li-",
    "pos": "Expression",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Comparison"
  }
]);
const AK_S5=alkitaabSentences(5,[
  {
    "en": "How is the weather today?",
    "ar": "كَيْفَ الجَوُّ اليَوْمَ؟",
    "tr": "kayfa al-jawwu al-yawma?"
  },
  {
    "en": "The weather is very hot and the humidity is high.",
    "ar": "الجَوُّ حارٌّ جِدًّا وَالرُّطوبَةُ عالِيَةٌ.",
    "tr": "al-jawwu ḥārrun jiddan wa-l-ruṭūbatu ʿāliyatun."
  },
  {
    "en": "It is sunny in the summer and sometimes cloudy.",
    "ar": "الجَوُّ مُشْمِسٌ في الصَّيْفِ وَغائِمٌ أَحْيانًا.",
    "tr": "al-jawwu mushmisun fī al-ṣayfi wa-ghāʾimun aḥyānan."
  },
  {
    "en": "In winter there is a lot of rain and a little snow.",
    "ar": "في الشِّتاءِ هُناكَ مَطَرٌ كَثيرٌ وَثَلْجٌ قَليلٌ.",
    "tr": "fī al-shitāʾi hunāka maṭarun kathīrun wa-thaljun qalīlun."
  },
  {
    "en": "What is the temperature?",
    "ar": "ما دَرَجَةُ الحَرارَةِ؟",
    "tr": "mā darajatu al-ḥarārati?"
  },
  {
    "en": "Spring is the best season as far as I am concerned.",
    "ar": "الرَّبيعُ أَحْسَنُ فَصْلٍ بِالنِّسْبَةِ لي.",
    "tr": "al-rabīʿu aḥsanu faṣlin bi-l-nisbati lī."
  },
  {
    "en": "The autumn weather is cold because of the rain.",
    "ar": "جَوُّ الخَريفِ بارِدٌ بِسَبَبِ المَطَرِ.",
    "tr": "jawwu al-kharīfi bāridun bi-sababi al-maṭari."
  },
  {
    "en": "I study well during the semester.",
    "ar": "أَدْرُسُ جَيِّدًا خِلالَ الفَصْلِ الدِّراسِيِّ.",
    "tr": "adrusu jayyidan khilāla al-faṣli al-dirāsiyyi."
  },
  {
    "en": "I feel lonely only sometimes.",
    "ar": "أَشْعُرُ بِالوِحْدَةِ أَحْيانًا فَقَط.",
    "tr": "ashʿuru bi-l-waḥdati aḥyānan faqaṭ."
  },
  {
    "en": "I am of Egyptian descent.",
    "ar": "أَنا مِن أَصْلٍ مِصْرِيٍّ.",
    "tr": "anā min aṣlin miṣriyyin."
  }
]);
const AK_V6=alkitaabWords(6,[
  {
    "en": "after",
    "ar": "بَعْدَ",
    "tr": "baʿda",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Sequence"
  },
  {
    "en": "after that",
    "ar": "بَعْدَ ذٰلِكَ",
    "tr": "baʿda dhālika",
    "pos": "Expression",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Sequence"
  },
  {
    "en": "lecture; class",
    "ar": "مُحاضَرة",
    "tr": "muḥāḍara",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "مُحاضَرات",
    "category": "Education"
  },
  {
    "en": "I obtain; receive",
    "ar": "أَحْصُلُ عَلى",
    "tr": "aḥṣulu ʿalā",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Education"
  },
  {
    "en": "I graduate",
    "ar": "أَتَخَرَّجُ مِن",
    "tr": "atakharragu min",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Education"
  },
  {
    "en": "teaching assistant",
    "ar": "مُعيد",
    "tr": "muʿīd",
    "pos": "Noun",
    "f": "مُعيدة",
    "mp": "مُعيدون",
    "fp": "—",
    "category": "Education"
  },
  {
    "en": "commerce; trade",
    "ar": "التِّجارة",
    "tr": "al-tijāra",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Work"
  },
  {
    "en": "business administration",
    "ar": "إِدارة الأَعْمال",
    "tr": "idārat al-aʿmāl",
    "pos": "Noun phrase",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Work"
  },
  {
    "en": "company",
    "ar": "شَرِكة",
    "tr": "sharika",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "شَرِكات",
    "category": "Work"
  },
  {
    "en": "life",
    "ar": "الحَياة",
    "tr": "al-ḥayāh",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Life"
  },
  {
    "en": "I go to",
    "ar": "أَذْهَبُ إِلى",
    "tr": "adhhabu ilā",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Movement"
  },
  {
    "en": "week",
    "ar": "أُسْبوع",
    "tr": "usbūʿ",
    "pos": "Noun",
    "f": "—",
    "mp": "أَسابيع",
    "fp": "—",
    "category": "Time"
  },
  {
    "en": "two years",
    "ar": "سَنَتانِ / سَنَتَيْنِ",
    "tr": "sanatāni / sanatayn",
    "pos": "Expression",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Time"
  },
  {
    "en": "day",
    "ar": "يَوْم",
    "tr": "yawm",
    "pos": "Noun",
    "f": "—",
    "mp": "أَيّام",
    "fp": "—",
    "category": "Time"
  },
  {
    "en": "running",
    "ar": "الجَرْي",
    "tr": "al-jary",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Activities"
  },
  {
    "en": "dancing",
    "ar": "الرَّقْص",
    "tr": "al-raqṣ",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Activities"
  },
  {
    "en": "sports",
    "ar": "الرِّياضة",
    "tr": "al-riyāḍa",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Activities"
  },
  {
    "en": "swimming",
    "ar": "السِّباحة",
    "tr": "al-sibāḥa",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Activities"
  },
  {
    "en": "photography",
    "ar": "التَّصْوير",
    "tr": "al-taṣwīr",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Activities"
  },
  {
    "en": "basketball",
    "ar": "كُرَة السَّلَّة",
    "tr": "kurat al-salla",
    "pos": "Noun phrase",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Activities"
  },
  {
    "en": "soccer",
    "ar": "كُرَة القَدَم",
    "tr": "kurat al-qadam",
    "pos": "Noun phrase",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Activities"
  },
  {
    "en": "I play",
    "ar": "أَلْعَبُ",
    "tr": "alʿabu",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Activities"
  },
  {
    "en": "hobby",
    "ar": "هِواية",
    "tr": "hiwāya",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "هِوايات",
    "category": "Activities"
  },
  {
    "en": "in order to",
    "ar": "لِـ",
    "tr": "li-",
    "pos": "Particle",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Connectors"
  },
  {
    "en": "because",
    "ar": "لِأَنَّ",
    "tr": "liʾanna",
    "pos": "Expression",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Connectors"
  },
  {
    "en": "therefore",
    "ar": "لِذٰلِكَ",
    "tr": "li-dhālika",
    "pos": "Conjunction",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Connectors"
  },
  {
    "en": "why?",
    "ar": "لِماذا؟",
    "tr": "limādhā?",
    "pos": "Interrogative",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Questions"
  },
  {
    "en": "when?",
    "ar": "مَتى؟",
    "tr": "matā?",
    "pos": "Interrogative",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Questions"
  },
  {
    "en": "since; ago",
    "ar": "مُنْذُ",
    "tr": "mundhu",
    "pos": "Preposition",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Time"
  }
]);
const AK_S6=alkitaabSentences(6,[
  {
    "en": "I study business administration and attend a lecture every day.",
    "ar": "أَدْرُسُ إِدارَةَ الأَعْمالِ وَأَحْضُرُ مُحاضَرَةً كُلَّ يَوْمٍ.",
    "tr": "adrusu idārata al-aʿmāli wa-aḥḍuru muḥāḍaratan kulla yawmin."
  },
  {
    "en": "When do you graduate from the university?",
    "ar": "مَتى تَتَخَرَّجُ مِنَ الجامِعَةِ؟",
    "tr": "matā tatakharragu mina al-jāmiʿati?"
  },
  {
    "en": "I graduate after two years.",
    "ar": "أَتَخَرَّجُ بَعْدَ سَنَتَيْنِ.",
    "tr": "atakharragu baʿda sanatayn."
  },
  {
    "en": "After that, I obtain a job in a company.",
    "ar": "بَعْدَ ذٰلِكَ أَحْصُلُ عَلى وَظيفَةٍ في شَرِكَةٍ.",
    "tr": "baʿda dhālika aḥṣulu ʿalā waẓīfatin fī sharikatin."
  },
  {
    "en": "I go to the university in order to work as a teaching assistant.",
    "ar": "أَذْهَبُ إِلى الجامِعَةِ لِأَعْمَلَ مُعيدًا.",
    "tr": "adhhabu ilā al-jāmiʿati li-aʿmala muʿīdan."
  },
  {
    "en": "Why do you study commerce? Because I like business life.",
    "ar": "لِماذا تَدْرُسُ التِّجارَةَ؟ لِأَنِّي أُحِبُّ حَياةَ الأَعْمالِ.",
    "tr": "limādhā tadrusu al-tijārata? liʾannanī uḥibbu ḥayāta al-aʿmāli."
  },
  {
    "en": "Sports are my favorite hobby.",
    "ar": "الرِّياضَةُ هِوايَتي المُفَضَّلَةُ.",
    "tr": "al-riyāḍatu hiwāyatī al-mufaḍḍalatu."
  },
  {
    "en": "I play soccer and basketball every week.",
    "ar": "أَلْعَبُ كُرَةَ القَدَمِ وَكُرَةَ السَّلَّةِ كُلَّ أُسْبوعٍ.",
    "tr": "alʿabu kurata al-qadami wa-kurata al-sallati kulla usbūʿin."
  },
  {
    "en": "I like swimming, running, dancing, and photography.",
    "ar": "أُحِبُّ السِّباحَةَ وَالجَرْيَ وَالرَّقْصَ وَالتَّصْويرَ.",
    "tr": "uḥibbu al-sibāḥata wa-l-jarya wa-l-raqṣa wa-l-taṣwīra."
  },
  {
    "en": "I have studied here for two years; therefore, I know the city well.",
    "ar": "أَدْرُسُ هُنا مُنْذُ سَنَتَيْنِ، لِذٰلِكَ أَعْرِفُ المَدينَةَ جَيِّدًا.",
    "tr": "adrusu hunā mundhu sanatayn, li-dhālika aʿrifu al-madīnata jayyidan."
  }
]);
const AK_V7=alkitaabWords(7,[
  {
    "en": "first",
    "ar": "أَوَّل",
    "tr": "awwal",
    "pos": "Adjective",
    "f": "أُولى",
    "mp": "—",
    "fp": "—",
    "category": "Order"
  },
  {
    "en": "preparatory; middle-school",
    "ar": "إِعْداديّ",
    "tr": "iʿdādī",
    "pos": "Adjective",
    "f": "إِعْداديّة",
    "mp": "—",
    "fp": "—",
    "category": "Education"
  },
  {
    "en": "secondary",
    "ar": "ثانَوِيّ",
    "tr": "thānawī",
    "pos": "Adjective",
    "f": "ثانَوِيّة",
    "mp": "—",
    "fp": "—",
    "category": "Education"
  },
  {
    "en": "crazy",
    "ar": "مَجْنون",
    "tr": "majnūn",
    "pos": "Adjective",
    "f": "مَجْنونة",
    "mp": "مَجانين",
    "fp": "—",
    "category": "Description"
  },
  {
    "en": "accident",
    "ar": "حادِث",
    "tr": "ḥādith",
    "pos": "Noun",
    "f": "—",
    "mp": "حَوادِث",
    "fp": "—",
    "category": "Events"
  },
  {
    "en": "saddening; distressing",
    "ar": "مُحْزِن",
    "tr": "muḥzin",
    "pos": "Adjective",
    "f": "مُحْزِنة",
    "mp": "—",
    "fp": "—",
    "category": "Feelings"
  },
  {
    "en": "foreign affairs",
    "ar": "الخارِجِيَّة",
    "tr": "al-khārijiyya",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Government"
  },
  {
    "en": "May God have mercy on her",
    "ar": "رَحِمَها الله",
    "tr": "raḥimahā Allāh",
    "pos": "Expression",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Expression"
  },
  {
    "en": "future prefix",
    "ar": "سَـ",
    "tr": "sa-",
    "pos": "Particle",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Grammar"
  },
  {
    "en": "hospital",
    "ar": "مُسْتَشْفى",
    "tr": "mustashfā",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "مُسْتَشْفَيات",
    "category": "Places"
  },
  {
    "en": "general; public",
    "ar": "عامّ",
    "tr": "ʿāmm",
    "pos": "Adjective",
    "f": "عامّة",
    "mp": "—",
    "fp": "—",
    "category": "Description"
  },
  {
    "en": "I live",
    "ar": "أَعيشُ",
    "tr": "aʿīshu",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Life"
  },
  {
    "en": "economics; economy",
    "ar": "الاِقْتِصاد",
    "tr": "al-iqtiṣād",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Study"
  },
  {
    "en": "biggest; oldest",
    "ar": "أَكْبَر",
    "tr": "akbar",
    "pos": "Adjective",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Comparison"
  },
  {
    "en": "I die",
    "ar": "أَموتُ",
    "tr": "amūtu",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Life"
  },
  {
    "en": "money",
    "ar": "مال",
    "tr": "māl",
    "pos": "Noun",
    "f": "—",
    "mp": "أَمْوال",
    "fp": "—",
    "category": "Finance"
  },
  {
    "en": "there is; there are",
    "ar": "هُناكَ",
    "tr": "hunāka",
    "pos": "Expression",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Existence"
  },
  {
    "en": "ministry",
    "ar": "وِزارَة",
    "tr": "wizāra",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "وِزارات",
    "category": "Government"
  }
]);
const AK_S7=alkitaabSentences(7,[
  {
    "en": "I live in the biggest city in the country.",
    "ar": "أَعيشُ في أَكْبَرِ مَدينَةٍ في البَلَدِ.",
    "tr": "aʿīshu fī akbari madīnatin fī al-baladi."
  },
  {
    "en": "I studied first at a preparatory school and then at a secondary school.",
    "ar": "دَرَسْتُ أَوَّلًا في مَدْرَسَةٍ إِعْدادِيَّةٍ ثُمَّ في مَدْرَسَةٍ ثانَوِيَّةٍ.",
    "tr": "darastu awwalan fī madrasatin iʿdādiyyatin thumma fī madrasatin thānawiyyatin."
  },
  {
    "en": "I will study economics next year.",
    "ar": "سَأَدْرُسُ الاِقْتِصادَ السَّنَةَ القادِمَةَ.",
    "tr": "sa-adrusu al-iqtiṣāda al-sanata al-qādimata."
  },
  {
    "en": "There is a public hospital near the ministry.",
    "ar": "هُناكَ مُسْتَشْفًى عامٌّ قَريبٌ مِنَ الوِزارَةِ.",
    "tr": "hunāka mustashfan ʿāmmun qarībun mina al-wizārati."
  },
  {
    "en": "My first job was in the Ministry of Foreign Affairs.",
    "ar": "كانَتْ أَوَّلُ وَظيفَةٍ لي في وِزارَةِ الخارِجِيَّةِ.",
    "tr": "kānat awwalu waẓīfatin lī fī wizārati al-khārijiyyati."
  },
  {
    "en": "There was a terrible accident, and the news was distressing.",
    "ar": "كانَ هُناكَ حادِثٌ كَبيرٌ، وَكانَ الخَبَرُ مُحْزِنًا.",
    "tr": "kāna hunāka ḥādithun kabīrun, wa-kāna al-khabaru muḥzinan."
  },
  {
    "en": "She died in the hospital; may God have mercy on her.",
    "ar": "ماتَتْ في المُسْتَشْفى، رَحِمَها الله.",
    "tr": "mātat fī al-mustashfā, raḥimahā Allāh."
  },
  {
    "en": "He has a crazy idea about money.",
    "ar": "عِنْدَهُ فِكْرَةٌ مَجْنونَةٌ عَنِ المالِ.",
    "tr": "ʿindahu fikratun majnūnatun ʿani al-māli."
  }
]);
const AK_V8=alkitaabWords(8,[
  {
    "en": "mother",
    "ar": "أُمّ",
    "tr": "umm",
    "pos": "Noun",
    "f": "—",
    "mp": "أُمَّهات",
    "fp": "—",
    "category": "Family"
  },
  {
    "en": "after + verb",
    "ar": "بَعْدَ أَنْ",
    "tr": "baʿda an",
    "pos": "Conjunction",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Sequence"
  },
  {
    "en": "I obtained",
    "ar": "حَصَلْتُ عَلى",
    "tr": "ḥaṣaltu ʿalā",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Achievement"
  },
  {
    "en": "government",
    "ar": "حُكومَة",
    "tr": "ḥukūma",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "حُكومات",
    "category": "Government"
  },
  {
    "en": "I enter",
    "ar": "أَدْخُلُ",
    "tr": "adkhulu",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Movement"
  },
  {
    "en": "state; nation-state",
    "ar": "دَوْلَة",
    "tr": "dawla",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "دُوَل",
    "category": "Government"
  },
  {
    "en": "international",
    "ar": "دُوَلِيّ",
    "tr": "duwalī",
    "pos": "Adjective",
    "f": "دُوَلِيّة",
    "mp": "—",
    "fp": "—",
    "category": "Government"
  },
  {
    "en": "I review lessons",
    "ar": "أُذاكِرُ",
    "tr": "udhākiru",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Study"
  },
  {
    "en": "president; head",
    "ar": "رَئيس",
    "tr": "raʾīs",
    "pos": "Noun",
    "f": "—",
    "mp": "رُؤَساء",
    "fp": "—",
    "category": "Government"
  },
  {
    "en": "prime minister",
    "ar": "رَئيس الوُزَراء",
    "tr": "raʾīs al-wuzarāʾ",
    "pos": "Noun phrase",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Government"
  },
  {
    "en": "opinion about",
    "ar": "رَأْي في",
    "tr": "raʾy fī",
    "pos": "Noun",
    "f": "—",
    "mp": "آراء",
    "fp": "—",
    "category": "Opinion"
  },
  {
    "en": "I refuse",
    "ar": "أَرْفُضُ",
    "tr": "arfuḍu",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Decisions"
  },
  {
    "en": "I want to",
    "ar": "أُريدُ أَنْ",
    "tr": "urīdu an",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Intentions"
  },
  {
    "en": "I help",
    "ar": "أُساعِدُ",
    "tr": "usāʿidu",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Assistance"
  },
  {
    "en": "throughout",
    "ar": "طِوالَ",
    "tr": "ṭiwāla",
    "pos": "Preposition",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Time"
  },
  {
    "en": "thanks to",
    "ar": "بِفَضْلِ",
    "tr": "bi-faḍli",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Cause"
  },
  {
    "en": "future",
    "ar": "المُسْتَقْبَل",
    "tr": "al-mustaqbal",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Time"
  },
  {
    "en": "as; just as",
    "ar": "كَما",
    "tr": "kamā",
    "pos": "Conjunction",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Comparison"
  },
  {
    "en": "I join",
    "ar": "أَلْتَحِقُ بِـ",
    "tr": "altaḥiqu bi-",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Membership"
  },
  {
    "en": "like",
    "ar": "مِثْلَ",
    "tr": "mithla",
    "pos": "Preposition",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Comparison"
  },
  {
    "en": "past; last",
    "ar": "الماضي",
    "tr": "al-māḍī",
    "pos": "Adjective",
    "f": "الماضِيَة",
    "mp": "—",
    "fp": "—",
    "category": "Time"
  },
  {
    "en": "I succeed; pass",
    "ar": "أَنْجَحُ في",
    "tr": "anjaḥu fī",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Achievement"
  }
]);
const AK_S8=alkitaabSentences(8,[
  {
    "en": "I entered the university after I succeeded in secondary school.",
    "ar": "دَخَلْتُ الجامِعَةَ بَعْدَ أَنْ نَجَحْتُ في المَدْرَسَةِ الثّانَوِيَّةِ.",
    "tr": "dakhaltu al-jāmiʿata baʿda an najaḥtu fī al-madrasati al-thānawiyyati."
  },
  {
    "en": "I obtained an international scholarship.",
    "ar": "حَصَلْتُ عَلى مِنْحَةٍ دُوَلِيَّةٍ.",
    "tr": "ḥaṣaltu ʿalā minḥatin duwaliyyatin."
  },
  {
    "en": "I review my lessons throughout the week.",
    "ar": "أُذاكِرُ دُروسي طِوالَ الأُسْبوعِ.",
    "tr": "udhākiru durūsī ṭiwāla al-usbūʿi."
  },
  {
    "en": "I want to join the government in the future.",
    "ar": "أُريدُ أَنْ أَلْتَحِقَ بِالحُكومَةِ في المُسْتَقْبَلِ.",
    "tr": "urīdu an altaḥiqa bi-l-ḥukūmati fī al-mustaqbali."
  },
  {
    "en": "What is your opinion about the prime minister?",
    "ar": "ما رَأْيُكَ في رَئيسِ الوُزَراءِ؟",
    "tr": "mā raʾyuka fī raʾīsi al-wuzarāʾi?"
  },
  {
    "en": "The president helps the states, just as the prime minister does.",
    "ar": "يُساعِدُ الرَّئيسُ الدُّوَلَ كَما يُساعِدُ رَئيسُ الوُزَراءِ.",
    "tr": "yusāʿidu al-raʾīsu al-duwala kamā yusāʿidu raʾīsu al-wuzarāʾi."
  },
  {
    "en": "I refuse to work for that government.",
    "ar": "أَرْفُضُ أَنْ أَعْمَلَ في تِلْكَ الحُكومَةِ.",
    "tr": "arfuḍu an aʿmala fī tilka al-ḥukūmati."
  },
  {
    "en": "Thanks to my mother, I succeeded last year.",
    "ar": "بِفَضْلِ أُمِّي نَجَحْتُ في السَّنَةِ الماضِيَةِ.",
    "tr": "bi-faḍli ummī najaḥtu fī al-sanati al-māḍiyati."
  },
  {
    "en": "I want to become a leader like the president.",
    "ar": "أُريدُ أَنْ أُصْبِحَ رَئيسًا مِثْلَ الرَّئيسِ.",
    "tr": "urīdu an uṣbiḥa raʾīsan mithla al-raʾīsi."
  }
]);
const AK_V9=alkitaabWords(9,[
  {
    "en": "other; another",
    "ar": "آخَر",
    "tr": "ākhar",
    "pos": "Adjective",
    "f": "أُخْرى",
    "mp": "آخَرون",
    "fp": "—",
    "category": "Description"
  },
  {
    "en": "or",
    "ar": "أَوْ",
    "tr": "aw",
    "pos": "Conjunction",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Connectors"
  },
  {
    "en": "then",
    "ar": "ثُمَّ",
    "tr": "thumma",
    "pos": "Conjunction",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Connectors"
  },
  {
    "en": "some of",
    "ar": "بَعْض",
    "tr": "baʿḍ",
    "pos": "Determiner",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Quantity"
  },
  {
    "en": "around; about",
    "ar": "حَوالَيْ",
    "tr": "ḥawālay",
    "pos": "Preposition",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Approximation"
  },
  {
    "en": "sixth",
    "ar": "سادِس",
    "tr": "sādis",
    "pos": "Adjective",
    "f": "سادِسة",
    "mp": "—",
    "fp": "—",
    "category": "Order"
  },
  {
    "en": "special; private",
    "ar": "خاصّ",
    "tr": "khāṣṣ",
    "pos": "Adjective",
    "f": "خاصّة",
    "mp": "—",
    "fp": "—",
    "category": "Description"
  },
  {
    "en": "favorite",
    "ar": "مُفَضَّل",
    "tr": "mufaḍḍal",
    "pos": "Adjective",
    "f": "مُفَضَّلة",
    "mp": "—",
    "fp": "—",
    "category": "Description"
  },
  {
    "en": "program",
    "ar": "بَرْنامَج",
    "tr": "barnāmaj",
    "pos": "Noun",
    "f": "—",
    "mp": "بَرامِج",
    "fp": "—",
    "category": "Media"
  },
  {
    "en": "newspaper",
    "ar": "جَريدَة",
    "tr": "jarīda",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "جَرائِد",
    "category": "Media"
  },
  {
    "en": "I begin",
    "ar": "أَبْدَأُ",
    "tr": "abdaʾu",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Actions"
  },
  {
    "en": "I sit",
    "ar": "أَجْلِسُ",
    "tr": "ajlisu",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Actions"
  },
  {
    "en": "I leave",
    "ar": "أَخْرُجُ مِن",
    "tr": "akhruju min",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Actions"
  },
  {
    "en": "I smoke",
    "ar": "أُدَخِّنُ",
    "tr": "udakhkhinu",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Actions"
  },
  {
    "en": "I am able to",
    "ar": "أَسْتَطيعُ أَنْ",
    "tr": "astaṭīʿu an",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Ability"
  },
  {
    "en": "I return",
    "ar": "أَعودُ",
    "tr": "aʿūdu",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Actions"
  },
  {
    "en": "I eat breakfast",
    "ar": "أَفْطُرُ",
    "tr": "afṭuru",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Meals"
  },
  {
    "en": "I go down; stay",
    "ar": "أَنْزِلُ",
    "tr": "anzilu",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Movement"
  },
  {
    "en": "I wake someone up",
    "ar": "أُوقِظُ",
    "tr": "ūqiẓu",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Actions"
  },
  {
    "en": "chess",
    "ar": "الشَّطْرَنْج",
    "tr": "al-shaṭranj",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Leisure"
  },
  {
    "en": "club; association",
    "ar": "نادٍ",
    "tr": "nādin",
    "pos": "Noun",
    "f": "—",
    "mp": "نَوادٍ",
    "fp": "—",
    "category": "Leisure"
  },
  {
    "en": "noon",
    "ar": "الظُّهْر",
    "tr": "al-ẓuhr",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Time"
  },
  {
    "en": "afternoon",
    "ar": "بَعْدَ الظُّهْر",
    "tr": "baʿda al-ẓuhr",
    "pos": "Expression",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Time"
  },
  {
    "en": "lunch",
    "ar": "الغَداء",
    "tr": "al-ghadāʾ",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Meals"
  },
  {
    "en": "dinner",
    "ar": "العَشاء",
    "tr": "al-ʿashāʾ",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Meals"
  },
  {
    "en": "the world",
    "ar": "العالَم",
    "tr": "al-ʿālam",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "World"
  },
  {
    "en": "eye",
    "ar": "عَيْن",
    "tr": "ʿayn",
    "pos": "Noun",
    "f": "—",
    "mp": "عُيون",
    "fp": "—",
    "category": "Body"
  },
  {
    "en": "half",
    "ar": "نِصْف",
    "tr": "niṣf",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Quantity"
  },
  {
    "en": "subject; topic",
    "ar": "مَوْضوع",
    "tr": "mawḍūʿ",
    "pos": "Noun",
    "f": "—",
    "mp": "مَواضيع / مَوْضوعات",
    "fp": "—",
    "category": "Study"
  }
]);
const AK_S9=alkitaabSentences(9,[
  {
    "en": "I wake my brother at half past six.",
    "ar": "أُوقِظُ أَخي في السّادِسَةِ وَالنِّصْفِ.",
    "tr": "ūqiẓu akhī fī al-sādisati wa-l-niṣfi."
  },
  {
    "en": "I eat breakfast, read some newspapers, and then leave the house.",
    "ar": "أَفْطُرُ وَأَقْرَأُ بَعْضَ الجَرائِدِ ثُمَّ أَخْرُجُ مِنَ البَيْتِ.",
    "tr": "afṭuru wa-aqraʾu baʿḍa al-jarāʾidi thumma akhruju mina al-bayti."
  },
  {
    "en": "I begin work around noon.",
    "ar": "أَبْدَأُ العَمَلَ حَوالَيْ الظُّهْرِ.",
    "tr": "abdaʾu al-ʿamala ḥawālay al-ẓuhri."
  },
  {
    "en": "I have lunch in a private club.",
    "ar": "آكُلُ الغَداءَ في نادٍ خاصٍّ.",
    "tr": "ākulu al-ghadāʾa fī nādin khāṣṣin."
  },
  {
    "en": "In the afternoon, I sit and discuss another topic.",
    "ar": "بَعْدَ الظُّهْرِ أَجْلِسُ وَأُناقِشُ مَوْضوعًا آخَرَ.",
    "tr": "baʿda al-ẓuhri ajlisu wa-unāqishu mawḍūʿan ākhara."
  },
  {
    "en": "My favorite program is about the world.",
    "ar": "بَرْنامَجي المُفَضَّلُ عَنِ العالَمِ.",
    "tr": "barnāmajī al-mufaḍḍalu ʿani al-ʿālami."
  },
  {
    "en": "I am able to play chess, but I do not smoke.",
    "ar": "أَسْتَطيعُ أَنْ أَلْعَبَ الشَّطْرَنْجَ، وَلٰكِنِّي لا أُدَخِّنُ.",
    "tr": "astaṭīʿu an alʿaba al-shaṭranja, wa-lākinnī lā udakhkhinu."
  },
  {
    "en": "Do we eat dinner here or in another restaurant?",
    "ar": "هَلْ نَأْكُلُ العَشاءَ هُنا أَوْ في مَطْعَمٍ آخَرَ؟",
    "tr": "hal naʾkulu al-ʿashāʾa hunā aw fī maṭʿamin ākhara?"
  },
  {
    "en": "My eyes are tired, so I return home.",
    "ar": "عُيوني مُتْعَبَةٌ، لِذٰلِكَ أَعودُ إِلى البَيْتِ.",
    "tr": "ʿuyūnī mutʿabatun, li-dhālika aʿūdu ilā al-bayti."
  },
  {
    "en": "When I travel, I stay at a hotel for half a day.",
    "ar": "عِنْدَما أُسافِرُ أَنْزِلُ في فُنْدُقٍ لِنِصْفِ يَوْمٍ.",
    "tr": "ʿindamā usāfiru anzilu fī funduqin li-niṣfi yawmin."
  }
]);
const AK_V10=alkitaabWords(10,[
  {
    "en": "late",
    "ar": "مُتَأَخِّر",
    "tr": "mutaʾakhkhir",
    "pos": "Adjective",
    "f": "مُتَأَخِّرة",
    "mp": "مُتَأَخِّرون",
    "fp": "—",
    "category": "Time"
  },
  {
    "en": "if; when",
    "ar": "إِذا",
    "tr": "idhā",
    "pos": "Conjunction",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Condition"
  },
  {
    "en": "match; game",
    "ar": "مُباراة",
    "tr": "mubārāh",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "مُبارَيات",
    "category": "Sports"
  },
  {
    "en": "mosque",
    "ar": "جامِع",
    "tr": "jāmiʿ",
    "pos": "Noun",
    "f": "—",
    "mp": "جَوامِع",
    "fp": "—",
    "category": "Religion"
  },
  {
    "en": "I come to",
    "ar": "أَجيءُ إِلى",
    "tr": "ajīʾu ilā",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Movement"
  },
  {
    "en": "salary",
    "ar": "مُرَتَّب",
    "tr": "murattab",
    "pos": "Noun",
    "f": "—",
    "mp": "مُرَتَّبات",
    "fp": "—",
    "category": "Work"
  },
  {
    "en": "break; rest period",
    "ar": "اِسْتِراحَة",
    "tr": "istirāḥa",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "اِسْتِراحات",
    "category": "Work"
  },
  {
    "en": "quickly",
    "ar": "بِسُرْعَة",
    "tr": "bi-surʿa",
    "pos": "Adverb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Manner"
  },
  {
    "en": "I stay up late",
    "ar": "أَسْهَرُ",
    "tr": "asharu",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Routine"
  },
  {
    "en": "I become",
    "ar": "أُصْبِحُ",
    "tr": "uṣbiḥu",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Change"
  },
  {
    "en": "I wake up",
    "ar": "أَصْحو",
    "tr": "aṣḥū",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Routine"
  },
  {
    "en": "frankly",
    "ar": "بِصَراحَة",
    "tr": "bi-ṣarāḥa",
    "pos": "Adverb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Opinion"
  },
  {
    "en": "prayer",
    "ar": "الصَّلاة",
    "tr": "al-ṣalāh",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Religion"
  },
  {
    "en": "I pray",
    "ar": "أُصَلِّي",
    "tr": "uṣallī",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Religion"
  },
  {
    "en": "usually",
    "ar": "عادَةً",
    "tr": "ʿādatan",
    "pos": "Adverb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Frequency"
  },
  {
    "en": "I understand",
    "ar": "أَفْهَمُ",
    "tr": "afhamu",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Understanding"
  },
  {
    "en": "I meet",
    "ar": "أُقابِلُ",
    "tr": "uqābilu",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Meetings"
  },
  {
    "en": "interview",
    "ar": "مُقابَلَة",
    "tr": "muqābala",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "مُقابَلات",
    "category": "Meetings"
  },
  {
    "en": "more",
    "ar": "أَكْثَر",
    "tr": "akthar",
    "pos": "Adjective",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Quantity"
  },
  {
    "en": "I am; I become",
    "ar": "أَكونُ",
    "tr": "akūnu",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Existence"
  },
  {
    "en": "night",
    "ar": "لَيْلَة",
    "tr": "layla",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "لَيالٍ",
    "category": "Time"
  },
  {
    "en": "tonight",
    "ar": "اللَّيْلَة",
    "tr": "al-layla",
    "pos": "Adverb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Time"
  },
  {
    "en": "I enjoy",
    "ar": "أَسْتَمْتِعُ بِـ",
    "tr": "astamtiʿu bi-",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Enjoyment"
  },
  {
    "en": "I can; it is possible for me",
    "ar": "يُمْكِنُني أَنْ",
    "tr": "yumkinunī an",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Possibility"
  },
  {
    "en": "boring",
    "ar": "مُمِلّ",
    "tr": "mumill",
    "pos": "Adjective",
    "f": "مُمِلّة",
    "mp": "—",
    "fp": "—",
    "category": "Description"
  },
  {
    "en": "king",
    "ar": "مَلِك",
    "tr": "malik",
    "pos": "Noun",
    "f": "—",
    "mp": "مُلوك",
    "fp": "—",
    "category": "Government"
  },
  {
    "en": "I sleep",
    "ar": "أَنامُ",
    "tr": "anāmu",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Routine"
  },
  {
    "en": "appointment",
    "ar": "مَوْعِد",
    "tr": "mawʿid",
    "pos": "Noun",
    "f": "—",
    "mp": "مَواعيد",
    "fp": "—",
    "category": "Scheduling"
  },
  {
    "en": "time",
    "ar": "وَقْت",
    "tr": "waqt",
    "pos": "Noun",
    "f": "—",
    "mp": "أَوْقات",
    "fp": "—",
    "category": "Time"
  },
  {
    "en": "since; ago",
    "ar": "مُنْذُ",
    "tr": "mundhu",
    "pos": "Preposition",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Time"
  }
]);
const AK_S10=alkitaabSentences(10,[
  {
    "en": "I usually wake up early and pray in the mosque.",
    "ar": "أَصْحو مُبَكِّرًا عادَةً وَأُصَلِّي في الجامِعِ.",
    "tr": "aṣḥū mubakkiran ʿādatan wa-uṣallī fī al-jāmiʿi."
  },
  {
    "en": "If I sleep late, I come to work late.",
    "ar": "إِذا نِمْتُ مُتَأَخِّرًا أَجيءُ إِلى العَمَلِ مُتَأَخِّرًا.",
    "tr": "idhā nimtu mutaʾakhkhiran ajīʾu ilā al-ʿamali mutaʾakhkhiran."
  },
  {
    "en": "I have an interview appointment tonight.",
    "ar": "عِنْدي مَوْعِدُ مُقابَلَةٍ اللَّيْلَةَ.",
    "tr": "ʿindī mawʿidu muqābalatin al-laylata."
  },
  {
    "en": "I understand more when I take a short break.",
    "ar": "أَفْهَمُ أَكْثَرَ عِنْدَما آخُذُ اِسْتِراحَةً قَصيرَةً.",
    "tr": "afhamu akthara ʿindamā ākhudhu istirāḥatan qaṣīratan."
  },
  {
    "en": "Frankly, the meeting was boring.",
    "ar": "بِصَراحَةٍ كانَتِ المُقابَلَةُ مُمِلَّةً.",
    "tr": "bi-ṣarāḥatin kānat al-muqābalatu mumillatan."
  },
  {
    "en": "I quickly become tired when I stay up late.",
    "ar": "أُصْبِحُ مُتْعَبًا بِسُرْعَةٍ عِنْدَما أَسْهَرُ.",
    "tr": "uṣbiḥu mutʿaban bi-surʿatin ʿindamā asharu."
  },
  {
    "en": "I enjoy the match, and afterward I sleep.",
    "ar": "أَسْتَمْتِعُ بِالمُباراةِ، وَبَعْدَها أَنامُ.",
    "tr": "astamtiʿu bi-l-mubārāti, wa-baʿdahā anāmu."
  },
  {
    "en": "Is it possible for me to meet the king?",
    "ar": "هَلْ يُمْكِنُني أَنْ أُقابِلَ المَلِكَ؟",
    "tr": "hal yumkinunī an uqābila al-malika?"
  },
  {
    "en": "I have worked here for a long time, but the salary is small.",
    "ar": "أَعْمَلُ هُنا مُنْذُ وَقْتٍ طَويلٍ وَلٰكِنَّ المُرَتَّبَ قَليلٌ.",
    "tr": "aʿmalu hunā mundhu waqtin ṭawīlin wa-lākinna al-murattaba qalīlun."
  }
]);
const AK_V11=alkitaabWords(11,[
  {
    "en": "someone",
    "ar": "أَحَد",
    "tr": "aḥad",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "People"
  },
  {
    "en": "no one",
    "ar": "لا أَحَد",
    "tr": "lā aḥad",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "People"
  },
  {
    "en": "sea",
    "ar": "بَحْر",
    "tr": "baḥr",
    "pos": "Noun",
    "f": "—",
    "mp": "بِحار",
    "fp": "—",
    "category": "Geography"
  },
  {
    "en": "mountain",
    "ar": "جَبَل",
    "tr": "jabal",
    "pos": "Noun",
    "f": "—",
    "mp": "جِبال",
    "fp": "—",
    "category": "Geography"
  },
  {
    "en": "I exchange",
    "ar": "أَتَبادَلُ",
    "tr": "atabādalu",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Communication"
  },
  {
    "en": "between; among",
    "ar": "بَيْنَ",
    "tr": "bayna",
    "pos": "Preposition",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Position"
  },
  {
    "en": "experience",
    "ar": "تَجْرِبَة",
    "tr": "tajriba",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "تَجارِب",
    "category": "Experience"
  },
  {
    "en": "I gather together",
    "ar": "أَتَجَمَّعُ",
    "tr": "atajammaʿu",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Social"
  },
  {
    "en": "tour",
    "ar": "جَوْلَة",
    "tr": "jawla",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "جَوْلات",
    "category": "Travel"
  },
  {
    "en": "shyness; embarrassment",
    "ar": "الخَجَل",
    "tr": "al-khajal",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Feelings"
  },
  {
    "en": "I get engaged to",
    "ar": "أَخْطُبُ",
    "tr": "akhṭubu",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Relationships"
  },
  {
    "en": "tourism",
    "ar": "السِّياحَة",
    "tr": "al-siyāḥa",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Travel"
  },
  {
    "en": "market",
    "ar": "سوق",
    "tr": "sūq",
    "pos": "Noun",
    "f": "—",
    "mp": "أَسْواق",
    "fp": "—",
    "category": "Places"
  },
  {
    "en": "pharmacy",
    "ar": "صَيْدَلِيَّة",
    "tr": "ṣaydaliyya",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "صَيْدَلِيّات",
    "category": "Places"
  },
  {
    "en": "several",
    "ar": "عِدَّة",
    "tr": "ʿidda",
    "pos": "Determiner",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Quantity"
  },
  {
    "en": "I get to know; meet",
    "ar": "أَتَعَرَّفُ عَلى",
    "tr": "ataʿarrafu ʿalā",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Social"
  },
  {
    "en": "emotional; romantic",
    "ar": "عاطِفِيّ",
    "tr": "ʿāṭifī",
    "pos": "Adjective",
    "f": "عاطِفِيّة",
    "mp": "—",
    "fp": "—",
    "category": "Feelings"
  },
  {
    "en": "most of",
    "ar": "مُعْظَم",
    "tr": "muʿẓam",
    "pos": "Determiner",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Quantity"
  },
  {
    "en": "relationship",
    "ar": "عَلاقَة",
    "tr": "ʿalāqa",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "عَلاقات",
    "category": "Relationships"
  },
  {
    "en": "when",
    "ar": "عِنْدَما",
    "tr": "ʿindamā",
    "pos": "Conjunction",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Time"
  },
  {
    "en": "expensive",
    "ar": "غالٍ",
    "tr": "ghālin",
    "pos": "Adjective",
    "f": "غالِيَة",
    "mp": "—",
    "fp": "—",
    "category": "Description"
  },
  {
    "en": "hotel",
    "ar": "فُنْدُق",
    "tr": "funduq",
    "pos": "Noun",
    "f": "—",
    "mp": "فَنادِق",
    "fp": "—",
    "category": "Travel"
  },
  {
    "en": "I am cut off; disconnected",
    "ar": "أَنْقَطِعُ",
    "tr": "anqaṭiʿu",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Communication"
  },
  {
    "en": "once; one time",
    "ar": "مَرَّة",
    "tr": "marra",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "مَرّات",
    "category": "Frequency"
  },
  {
    "en": "together",
    "ar": "مَعًا",
    "tr": "maʿan",
    "pos": "Adverb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Social"
  },
  {
    "en": "of; among",
    "ar": "مِن",
    "tr": "min",
    "pos": "Preposition",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Quantity"
  },
  {
    "en": "engineer",
    "ar": "مُهَنْدِس",
    "tr": "muhandis",
    "pos": "Noun",
    "f": "مُهَنْدِسة",
    "mp": "مُهَنْدِسون",
    "fp": "—",
    "category": "Professions"
  }
]);
const AK_S11=alkitaabSentences(11,[
  {
    "en": "I went on a tour between the mountains and the sea.",
    "ar": "ذَهَبْتُ في جَوْلَةٍ بَيْنَ الجِبالِ وَالبَحْرِ.",
    "tr": "dhahabtu fī jawlatin bayna al-jibāli wa-l-baḥri."
  },
  {
    "en": "Tourism is expensive, so I stayed in a small hotel.",
    "ar": "السِّياحَةُ غالِيَةٌ، لِذٰلِكَ نَزَلْتُ في فُنْدُقٍ صَغيرٍ.",
    "tr": "al-siyāḥatu ghāliyatun, li-dhālika nazaltu fī funduqin ṣaghīrin."
  },
  {
    "en": "I visited several markets and a pharmacy.",
    "ar": "زُرْتُ عِدَّةَ أَسْواقٍ وَصَيْدَلِيَّةً.",
    "tr": "zurtu ʿiddata aswāqin wa-ṣaydaliyyatan."
  },
  {
    "en": "When we gather together, we exchange news and opinions.",
    "ar": "عِنْدَما نَتَجَمَّعُ مَعًا نَتَبادَلُ الأَخْبارَ وَالآراءَ.",
    "tr": "ʿindamā natajammaʿu maʿan natabādalu al-akhbāra wa-l-ārāʾa."
  },
  {
    "en": "I got to know an engineer during the tour.",
    "ar": "تَعَرَّفْتُ عَلى مُهَنْدِسٍ خِلالَ الجَوْلَةِ.",
    "tr": "taʿarraftu ʿalā muhandisin khilāla al-jawlati."
  },
  {
    "en": "Most of my travel experiences are wonderful.",
    "ar": "مُعْظَمُ تَجارِبي في السَّفَرِ رائِعَةٌ.",
    "tr": "muʿẓamu tajāribī fī al-safari rāʾiʿatun."
  },
  {
    "en": "I felt shy the first time I met her.",
    "ar": "شَعَرْتُ بِالخَجَلِ أَوَّلَ مَرَّةٍ تَعَرَّفْتُ عَلَيْها.",
    "tr": "shaʿartu bi-l-khajali awwala marratin taʿarraftu ʿalayhā."
  },
  {
    "en": "It was a romantic relationship, and I wanted to get engaged to her.",
    "ar": "كانَتْ عَلاقَةً عاطِفِيَّةً وَأَرَدْتُ أَنْ أَخْطُبَها.",
    "tr": "kānat ʿalāqatan ʿāṭifiyyatan wa-aradtu an akhṭubahā."
  },
  {
    "en": "No one called when the connection was cut off.",
    "ar": "لَمْ يَتَّصِلْ أَحَدٌ عِنْدَما اِنْقَطَعَ الاِتِّصالُ.",
    "tr": "lam yattaṣil aḥadun ʿindamā inqaṭaʿa al-ittiṣālu."
  }
]);
const AK_V12=alkitaabWords(12,[
  {
    "en": "I take",
    "ar": "آخُذُ",
    "tr": "ākhudhu",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Actions"
  },
  {
    "en": "last; final",
    "ar": "آخِر",
    "tr": "ākhir",
    "pos": "Adjective",
    "f": "آخِرة",
    "mp": "—",
    "fp": "—",
    "category": "Order"
  },
  {
    "en": "all together",
    "ar": "جَميعًا",
    "tr": "jamīʿan",
    "pos": "Adverb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Group"
  },
  {
    "en": "vacation from work",
    "ar": "إِجازَة",
    "tr": "ijāza",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "إِجازات",
    "category": "Leave"
  },
  {
    "en": "director",
    "ar": "مُدير",
    "tr": "mudīr",
    "pos": "Noun",
    "f": "مُديرة",
    "mp": "مُديرون",
    "fp": "—",
    "category": "Work"
  },
  {
    "en": "I visit",
    "ar": "أَزورُ",
    "tr": "azūru",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Travel"
  },
  {
    "en": "I did not travel",
    "ar": "لَمْ أُسافِرْ",
    "tr": "lam usāfir",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Travel"
  },
  {
    "en": "in addition to",
    "ar": "بِالإِضافَةِ إِلى",
    "tr": "bi-l-iḍāfati ilā",
    "pos": "Expression",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Addition"
  },
  {
    "en": "of course",
    "ar": "طَبْعًا",
    "tr": "ṭabʿan",
    "pos": "Adverb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Certainty"
  },
  {
    "en": "official holiday",
    "ar": "عُطْلَة",
    "tr": "ʿuṭla",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "عُطَل",
    "category": "Leave"
  },
  {
    "en": "I learn of; know",
    "ar": "أَعْلَمُ بِـ",
    "tr": "aʿlamu bi-",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Knowledge"
  },
  {
    "en": "I was appointed",
    "ar": "عُيِّنْتُ",
    "tr": "ʿuyyintu",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Work"
  },
  {
    "en": "I am absent from; miss",
    "ar": "أَتَغَيَّبُ عَنْ",
    "tr": "ataghayyabu ʿan",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Attendance"
  },
  {
    "en": "coming; next",
    "ar": "قادِم",
    "tr": "qādim",
    "pos": "Adjective",
    "f": "قادِمة",
    "mp": "—",
    "fp": "—",
    "category": "Time"
  },
  {
    "en": "I decide to",
    "ar": "أُقَرِّرُ أَنْ",
    "tr": "uqarriru an",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Decisions"
  },
  {
    "en": "decision",
    "ar": "قَرار",
    "tr": "qarār",
    "pos": "Noun",
    "f": "—",
    "mp": "قَرارات",
    "fp": "—",
    "category": "Decisions"
  },
  {
    "en": "comparative",
    "ar": "مُقارَن",
    "tr": "muqāran",
    "pos": "Adjective",
    "f": "مُقارَنة",
    "mp": "—",
    "fp": "—",
    "category": "Comparison"
  },
  {
    "en": "I spend time",
    "ar": "أَقْضي",
    "tr": "aqḍī",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Time"
  },
  {
    "en": "scholarship; grant",
    "ar": "مِنْحَة",
    "tr": "minḥa",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "مِنَح",
    "category": "Education"
  },
  {
    "en": "here",
    "ar": "هُنا",
    "tr": "hunā",
    "pos": "Adverb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Place"
  },
  {
    "en": "there",
    "ar": "هُناكَ",
    "tr": "hunāka",
    "pos": "Adverb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Place"
  },
  {
    "en": "death",
    "ar": "وَفاة",
    "tr": "wafāh",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Life"
  }
]);
const AK_S12=alkitaabSentences(12,[
  {
    "en": "I take a vacation from work next week.",
    "ar": "آخُذُ إِجازَةً مِنَ العَمَلِ الأُسْبوعَ القادِمَ.",
    "tr": "ākhudhu ijāzatan mina al-ʿamali al-usbūʿa al-qādima."
  },
  {
    "en": "Of course, we spend the official holiday together.",
    "ar": "طَبْعًا نَقْضي العُطْلَةَ جَميعًا.",
    "tr": "ṭabʿan naqḍī al-ʿuṭlata jamīʿan."
  },
  {
    "en": "I visit my family here in addition to my friends there.",
    "ar": "أَزورُ عائِلَتي هُنا بِالإِضافَةِ إِلى أَصْدِقائي هُناكَ.",
    "tr": "azūru ʿāʾilatī hunā bi-l-iḍāfati ilā aṣdiqāʾī hunāka."
  },
  {
    "en": "I did not travel during my last vacation.",
    "ar": "لَمْ أُسافِرْ خِلالَ إِجازَتي الأَخيرَةِ.",
    "tr": "lam usāfir khilāla ijāzatī al-akhīrati."
  },
  {
    "en": "I learned of the director’s decision.",
    "ar": "عَلِمْتُ بِقَرارِ المُديرِ.",
    "tr": "ʿalimtu bi-qarāri al-mudīri."
  },
  {
    "en": "I was appointed director last year.",
    "ar": "عُيِّنْتُ مُديرًا في السَّنَةِ الماضِيَةِ.",
    "tr": "ʿuyyintu mudīran fī al-sanati al-māḍiyati."
  },
  {
    "en": "I decided not to be absent from work.",
    "ar": "قَرَّرْتُ أَلّا أَتَغَيَّبَ عَنِ العَمَلِ.",
    "tr": "qarrartu allā ataghayyaba ʿani al-ʿamali."
  },
  {
    "en": "I received a comparative-studies scholarship.",
    "ar": "حَصَلْتُ عَلى مِنْحَةٍ لِلدِّراساتِ المُقارَنَةِ.",
    "tr": "ḥaṣaltu ʿalā minḥatin li-l-dirāsāti al-muqāranati."
  },
  {
    "en": "The final news was about the death of the president.",
    "ar": "كانَ الخَبَرُ الآخِرُ عَنْ وَفاةِ الرَّئيسِ.",
    "tr": "kāna al-khabaru al-ākhiru ʿan wafāti al-raʾīsi."
  }
]);
const AK_V13=alkitaabWords(13,[
  {
    "en": "finally; at last",
    "ar": "أَخيرًا",
    "tr": "akhīran",
    "pos": "Adverb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Sequence"
  },
  {
    "en": "in front of; before",
    "ar": "أَمامَ",
    "tr": "amāma",
    "pos": "Preposition",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Position"
  },
  {
    "en": "not to",
    "ar": "أَلّا",
    "tr": "allā",
    "pos": "Expression",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Grammar"
  },
  {
    "en": "magazine; journal",
    "ar": "مَجَلَّة",
    "tr": "majalla",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "مَجَلّات",
    "category": "Media"
  },
  {
    "en": "dream",
    "ar": "حُلْم",
    "tr": "ḥulm",
    "pos": "Noun",
    "f": "—",
    "mp": "أَحْلام",
    "fp": "—",
    "category": "Ambition"
  },
  {
    "en": "I return",
    "ar": "أَرْجِعُ",
    "tr": "arjiʿu",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Movement"
  },
  {
    "en": "I wish to",
    "ar": "أَرْغَبُ في",
    "tr": "arghabu fī",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Desire"
  },
  {
    "en": "I am still",
    "ar": "ما زِلْتُ",
    "tr": "mā ziltu",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Continuity"
  },
  {
    "en": "theater",
    "ar": "مَسْرَح",
    "tr": "masraḥ",
    "pos": "Noun",
    "f": "—",
    "mp": "مَسارِح",
    "fp": "—",
    "category": "Culture"
  },
  {
    "en": "I encourage someone to",
    "ar": "أُشَجِّعُ عَلى",
    "tr": "ushajjiʿu ʿalā",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Support"
  },
  {
    "en": "I think; believe that",
    "ar": "أَظُنُّ أَنَّ",
    "tr": "aẓunnu anna",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Thought"
  },
  {
    "en": "it means",
    "ar": "يَعْني",
    "tr": "yaʿnī",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Meaning"
  },
  {
    "en": "homesickness; estrangement",
    "ar": "الغُرْبَة",
    "tr": "al-ghurba",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Feelings"
  },
  {
    "en": "opportunity; chance",
    "ar": "فُرْصَة",
    "tr": "furṣa",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "فُرَص",
    "category": "Opportunity"
  },
  {
    "en": "Nice to meet you",
    "ar": "فُرْصَة سَعيدة",
    "tr": "furṣa saʿīda",
    "pos": "Expression",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Expression"
  },
  {
    "en": "I fail at",
    "ar": "أَفْشَلُ في",
    "tr": "afshalu fī",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Achievement"
  },
  {
    "en": "I dismiss; fire",
    "ar": "أَفْصِلُ مِن",
    "tr": "afṣilu min",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Work"
  },
  {
    "en": "I think about",
    "ar": "أُفَكِّرُ في",
    "tr": "ufakkiru fī",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Thought"
  },
  {
    "en": "I settle down",
    "ar": "أَسْتَقِرُّ",
    "tr": "astaqirru",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Stability"
  },
  {
    "en": "article",
    "ar": "مَقالَة",
    "tr": "maqāla",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "مَقالات",
    "category": "Media"
  },
  {
    "en": "likewise; also",
    "ar": "كَذٰلِكَ",
    "tr": "ka-dhālika",
    "pos": "Adverb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Addition"
  },
  {
    "en": "suitable for",
    "ar": "مُناسِب لِـ",
    "tr": "munāsib li-",
    "pos": "Adjective",
    "f": "مُناسِبة",
    "mp": "—",
    "fp": "—",
    "category": "Suitability"
  },
  {
    "en": "I finish",
    "ar": "أَنْتَهي مِن",
    "tr": "antahī min",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Completion"
  },
  {
    "en": "I find",
    "ar": "أَجِدُ",
    "tr": "ajidu",
    "pos": "Verb",
    "f": "—",
    "mp": "—",
    "fp": "—",
    "category": "Discovery"
  },
  {
    "en": "position; job",
    "ar": "وَظيفَة",
    "tr": "waẓīfa",
    "pos": "Noun",
    "f": "—",
    "mp": "—",
    "fp": "وَظائِف",
    "category": "Work"
  }
]);
const AK_S13=alkitaabSentences(13,[
  {
    "en": "I am still thinking about my dreams.",
    "ar": "ما زِلْتُ أُفَكِّرُ في أَحْلامي.",
    "tr": "mā ziltu ufakkiru fī aḥlāmī."
  },
  {
    "en": "I wish to return to my country and settle down there.",
    "ar": "أَرْغَبُ في أَنْ أَرْجِعَ إِلى بَلَدي وَأَسْتَقِرَّ هُناكَ.",
    "tr": "arghabu fī an arjiʿa ilā baladī wa-astaqirra hunāka."
  },
  {
    "en": "Homesickness means longing for one’s homeland.",
    "ar": "الغُرْبَةُ تَعْني الشَّوْقَ إِلى الوَطَنِ.",
    "tr": "al-ghurbatu taʿnī al-shawqa ilā al-waṭani."
  },
  {
    "en": "I finished an article for the magazine.",
    "ar": "اِنْتَهَيْتُ مِن مَقالَةٍ لِلمَجَلَّةِ.",
    "tr": "intahaytu min maqālatin li-l-majallati."
  },
  {
    "en": "I also write about theaters.",
    "ar": "أَكْتُبُ كَذٰلِكَ عَنِ المَسارِحِ.",
    "tr": "aktubu ka-dhālika ʿani al-masāriḥi."
  },
  {
    "en": "I found a suitable position at last.",
    "ar": "وَجَدْتُ أَخيرًا وَظيفَةً مُناسِبَةً.",
    "tr": "wajadtu akhīran waẓīfatan munāsibatan."
  },
  {
    "en": "I did not find many opportunities before that.",
    "ar": "لَمْ أَجِدْ فُرَصًا كَثيرَةً قَبْلَ ذٰلِكَ.",
    "tr": "lam ajid furaṣan kathīratan qabla dhālika."
  },
  {
    "en": "I think that I will not fail in the new job.",
    "ar": "أَظُنُّ أَنَّني لَنْ أَفْشَلَ في الوَظيفَةِ الجَديدَةِ.",
    "tr": "aẓunnu annanī lan afshala fī al-waẓīfati al-jadīdati."
  },
  {
    "en": "My father encourages me not to leave this opportunity.",
    "ar": "يُشَجِّعُني أَبي عَلى أَلّا أَتْرُكَ هٰذِهِ الفُرْصَةَ.",
    "tr": "yushajjiʿunī abī ʿalā allā atruka hādhihi al-furṣata."
  },
  {
    "en": "The director dismissed him from the position in front of everyone.",
    "ar": "فَصَلَهُ المُديرُ مِنَ الوَظيفَةِ أَمامَ الجَميعِ.",
    "tr": "faṣalahu al-mudīru mina al-waẓīfati amāma al-jamīʿi."
  },
  {
    "en": "Nice to meet you.",
    "ar": "فُرْصَةٌ سَعيدةٌ.",
    "tr": "furṣatun saʿīdatun."
  }
]);

const AK_G5=[
{id:'ak-c5-g1',type:'intro',title:'Grammar Overview',body:`<p>In this lesson, we will focus on the three “case endings”: nominative [الْمَرْفُوعُ], accusative [الْمَنْصُوبُ], and genitive [الْمَجْرُورُ].</p>`},
{id:'ak-c5-g2',type:'note',title:'What Are Case Endings?',body:`<p>In English, word order usually dictates the function of a word—for example, whether a noun is the subject or the object.</p><div class="grammar-example">In “A dog sees a cat,” <strong>dog</strong> is the subject, <strong>sees a cat</strong> is the predicate, and <strong>cat</strong> is the object.</div><p>In Arabic, word order is more flexible. Arabic therefore uses case endings to show the grammatical function of a word.</p>`},
{id:'ak-c5-g3',type:'note',title:'The Nominative Case',body:`<p>There are three case endings: nominative [الْمَرْفُوعُ], accusative [الْمَنْصُوبُ], and genitive [الْمَجْرُورُ].</p><p>The nominative case has two main applications:</p><ul class="grammar-list"><li>The subject</li><li>The predicate of a nominal (equational) sentence</li></ul><p>A nominal sentence has no main action verb in its predicate. Instead, a noun, pronoun, or adjective describes the subject.</p><div class="grammar-example">[الْبَيْتُ كَبِيرٌ]<br><strong>[الْبَيْتُ]</strong> is the subject, and <strong>[كَبِيرٌ]</strong> is the predicate. Both are nominative.</div><div class="grammar-example">[الْمُعَلِّمُونَ هُنَا]<br><strong>[الْمُعَلِّمُونَ]</strong> is the subject.</div><div class="grammar-example">[الْمُسْلِمُونَ طَيِّبُونَ]<br><strong>[الْمُسْلِمُونَ]</strong> and <strong>[طَيِّبُونَ]</strong> are nominative.</div><h3 class="grammar-section">Case markers</h3><p>Definite nouns take <span class="grammar-ar grammar-mark" lang="ar">ـُ</span>, while indefinite nouns take <span class="grammar-ar grammar-mark" lang="ar">ـٌ</span>.</p><p>Sound masculine plurals use [ـُونَ]. Sound feminine plurals follow the general pattern.</p><h3 class="grammar-section">Examples</h3><div class="grammar-example">a book · the book · books · the books<br>[كِتَابٌ] · [الْكِتَابُ] · [كُتُبٌ] · [الْكُتُبُ]</div><div class="grammar-example">a Muslim · the Muslim · Muslims · the Muslims<br>[مُسْلِمٌ] · [الْمُسْلِمُ] · [مُسْلِمُونَ] · [الْمُسْلِمُونَ]</div><div class="grammar-example">a female teacher · female teachers · the female teacher · the female teachers<br>[مُعَلِّمَةٌ] · [مُعَلِّمَاتٌ] · [الْمُعَلِّمَةُ] · [الْمُعَلِّمَاتُ]</div>`},
{id:'ak-c5-g4',type:'note',title:'The Accusative Case',body:`<p>The accusative case [الْمَنْصُوبُ] has four applications:</p><h3 class="grammar-section">1. Direct objects</h3><div class="grammar-example">[قَرَأْتُ الْكِتَابَ]<br><strong>[الْكِتَابَ]</strong> is the direct object.</div><div class="grammar-example">[أُدَرِّسُ الطُّلَّابَ]<br><strong>[الطُّلَّابَ]</strong> is the direct object.</div><h3 class="grammar-section">2. Predicate of [كَانَ] and its sisters</h3><div class="grammar-example">[كَانَ الْوَلَدُ سَعِيدًا]<br><strong>[سَعِيدًا]</strong> is accusative.</div><div class="grammar-example">[لَيْسَ الْوَلَدُ طَالِبًا]<br><strong>[طَالِبًا]</strong> is accusative.</div><h3 class="grammar-section">3. Adverbial expressions</h3><p>These answer when, how, why, where, or how often something happens.</p><div class="grammar-example">[أَشْرَبُ الْقَهْوَةَ صَبَاحًا]<br><strong>[صَبَاحًا]</strong> tells when [أَشْرَبُ] happens.</div><h3 class="grammar-section">4. Subject of [إِنَّ] and its sisters</h3><div class="grammar-example">[إِنَّ الْبَيْتَ كَبِيرٌ]<br><strong>[الْبَيْتَ]</strong> follows [إِنَّ] and is accusative.</div><h3 class="grammar-section">Case markers</h3><p>Definite nouns take <span class="grammar-ar grammar-mark" lang="ar">ـَ</span>, while indefinite nouns take <span class="grammar-ar grammar-mark" lang="ar">ـً</span> and normally add an [أَلِف], unless the word ends in a [تَاء مَرْبُوطَة].</p><p>Sound masculine plurals use [ـِينَ] in both definite and indefinite forms. Sound feminine plurals take <span class="grammar-ar grammar-mark" lang="ar">ـِ</span> when definite and <span class="grammar-ar grammar-mark" lang="ar">ـٍ</span> when indefinite.</p><h3 class="grammar-section">Examples</h3><div class="grammar-example">the house · a house · a cat<br>[الْبَيْتَ] · [بَيْتًا] · [قِطَّةً]</div><div class="grammar-example">teachers · the female teachers · female teachers<br>[مُعَلِّمِينَ] · [الْمُعَلِّمَاتِ] · [مُعَلِّمَاتٍ]</div>`},
{id:'ak-c5-g5',type:'note',title:'The Genitive Case',body:`<p>The genitive case [الْمَجْرُورُ] has two functions:</p><h3 class="grammar-section">1. Nouns following a preposition</h3><div class="grammar-example">[فِي الْبَيْتِ]<br><strong>[الْبَيْتِ]</strong> follows the preposition [فِي].</div><h3 class="grammar-section">2. [إِضَافَة] constructions</h3><p>Every word after the first term takes the genitive case.</p><div class="grammar-example">[كَلْبُ الْوَلَدِ]<br><strong>[الْوَلَدِ]</strong> is genitive.</div><div class="grammar-example">[بَيْتُ كَلْبِ الْوَلَدِ]<br><strong>[كَلْبِ]</strong> and <strong>[الْوَلَدِ]</strong> are genitive.</div><h3 class="grammar-section">Case markers</h3><p>Definite nouns take <span class="grammar-ar grammar-mark" lang="ar">ـِ</span>, while indefinite nouns take <span class="grammar-ar grammar-mark" lang="ar">ـٍ</span>.</p><p>Sound masculine plurals use [ـِينَ], matching the accusative case. Sound feminine plurals also match the accusative case.</p><h3 class="grammar-section">Examples</h3><div class="grammar-example">the house · a house<br>[الْبَيْتِ] · [بَيْتٍ]</div><div class="grammar-example">female teachers · the female teachers<br>[مُعَلِّمَاتٍ] · [الْمُعَلِّمَاتِ]</div>`},
{id:'ak-c5-g6',type:'note',title:'Case Endings Summary',body:`<div class="grammar-table-wrap" role="region" aria-label="Arabic case endings summary" tabindex="0"><table class="grammar-table"><thead><tr><th rowspan="2">Case</th><th rowspan="2">Functions</th><th colspan="2">General</th><th colspan="2">Sound Masc. Plurals</th><th colspan="2">Sound Fem. Plurals</th></tr><tr><th>Definite</th><th>Indefinite</th><th>Definite</th><th>Indefinite</th><th>Definite</th><th>Indefinite</th></tr></thead><tbody><tr><td>Nominative<br>[مَرْفُوع]</td><td><ul><li>Subject</li><li>Predicate of a nominal sentence</li></ul></td><td><span class="grammar-ar grammar-mark" lang="ar">ـُ</span></td><td><span class="grammar-ar grammar-mark" lang="ar">ـٌ</span></td><td>[ـُونَ]</td><td>[ـُونَ]</td><td>[ـَاتُ]</td><td>[ـَاتٌ]</td></tr><tr><td>Accusative<br>[مَنْصُوب]</td><td><ul><li>Direct object</li><li>Predicate of [كَانَ] and its sisters</li><li>Adverbial</li><li>Subject of [إِنَّ] and its sisters</li></ul></td><td><span class="grammar-ar grammar-mark" lang="ar">ـَ</span></td><td><span class="grammar-ar grammar-mark" lang="ar">ـً</span><br>+ [ا]*</td><td>[ـِينَ]</td><td>[ـِينَ]</td><td>[ـَاتِ]</td><td>[ـَاتٍ]</td></tr><tr><td>Genitive<br>[مَجْرُور]</td><td><ul><li>After a preposition</li><li>[إِضَافَة]</li></ul></td><td><span class="grammar-ar grammar-mark" lang="ar">ـِ</span></td><td><span class="grammar-ar grammar-mark" lang="ar">ـٍ</span></td><td>[ـِينَ]</td><td>[ـِينَ]</td><td>[ـَاتِ]</td><td>[ـَاتٍ]</td></tr></tbody></table></div><p class="grammar-footnote">* Add [ا] with the accusative indefinite ending unless the word ends in [ة].</p>`}
,
{id:'ak-c5-g7',type:'note',title:'Sentence 1: How Is the Weather Today?',body:`<div class="grammar-example">[كَيْفَ الجَوُّ اليَوْمَ؟]</div><p><strong>[كَيْفَ]</strong> is a fixed interrogative meaning “how?” and serves as the fronted predicate. <strong>[الجَوُّ]</strong> is the delayed subject, so it is nominative. <strong>[اليَوْمَ]</strong> tells when and is therefore an accusative adverb of time.</p><div class="grammar-table-wrap" role="region" aria-label="Sentence 1 case analysis" tabindex="0"><table class="grammar-table" style="min-width:620px"><thead><tr><th>Word</th><th>Function</th><th>Case or status</th><th>Ending</th></tr></thead><tbody><tr><td>[كَيْفَ]</td><td>Fronted interrogative predicate</td><td>Fixed form</td><td>—</td></tr><tr><td>[الجَوُّ]</td><td>Delayed subject</td><td>Nominative</td><td><span class="grammar-ar grammar-mark" lang="ar">ـُ</span></td></tr><tr><td>[اليَوْمَ]</td><td>Adverb of time</td><td>Accusative</td><td><span class="grammar-ar grammar-mark" lang="ar">ـَ</span></td></tr></tbody></table></div>`},
{id:'ak-c5-g8',type:'note',title:'Sentence 2: The Weather Is Very Hot',body:`<div class="grammar-example">[الجَوُّ حَارٌّ جِدًّا وَالرُّطُوبَةُ عَالِيَةٌ.]</div><p>This contains two nominal sentences joined by [وَ]. In each half, the definite subject takes <span class="grammar-ar grammar-mark" lang="ar">ـُ</span> and the indefinite predicate takes <span class="grammar-ar grammar-mark" lang="ar">ـٌ</span>. <strong>[جِدًّا]</strong> functions adverbially and is accusative.</p><div class="grammar-table-wrap" role="region" aria-label="Sentence 2 case analysis" tabindex="0"><table class="grammar-table" style="min-width:620px"><thead><tr><th>Word</th><th>Function</th><th>Case or status</th><th>Ending</th></tr></thead><tbody><tr><td>[الجَوُّ]</td><td>Subject</td><td>Nominative</td><td><span class="grammar-ar grammar-mark" lang="ar">ـُ</span></td></tr><tr><td>[حَارٌّ]</td><td>Predicate</td><td>Nominative</td><td><span class="grammar-ar grammar-mark" lang="ar">ـٌ</span></td></tr><tr><td>[جِدًّا]</td><td>Adverbial intensifier</td><td>Accusative</td><td><span class="grammar-ar grammar-mark" lang="ar">ـً + ا</span></td></tr><tr><td>[وَ]</td><td>Conjunction</td><td>Fixed form</td><td>—</td></tr><tr><td>[الرُّطُوبَةُ]</td><td>Subject</td><td>Nominative</td><td><span class="grammar-ar grammar-mark" lang="ar">ـُ</span></td></tr><tr><td>[عَالِيَةٌ]</td><td>Predicate</td><td>Nominative</td><td><span class="grammar-ar grammar-mark" lang="ar">ـٌ</span></td></tr></tbody></table></div>`},
{id:'ak-c5-g9',type:'note',title:'Sentence 3: It Is Sunny in the Summer',body:`<div class="grammar-example">[الجَوُّ مُشْمِسٌ فِي الصَّيْفِ وَغَائِمٌ أَحْيَانًا.]</div><p><strong>[الجَوُّ]</strong> is the nominative subject. <strong>[مُشْمِسٌ]</strong> and <strong>[غَائِمٌ]</strong> are coordinated predicates, so both are nominative. <strong>[الصَّيْفِ]</strong> is genitive after [فِي], while <strong>[أَحْيَانًا]</strong> is an accusative adverb of frequency.</p><div class="grammar-table-wrap" role="region" aria-label="Sentence 3 case analysis" tabindex="0"><table class="grammar-table" style="min-width:620px"><thead><tr><th>Word</th><th>Function</th><th>Case or status</th><th>Ending</th></tr></thead><tbody><tr><td>[الجَوُّ]</td><td>Subject</td><td>Nominative</td><td><span class="grammar-ar grammar-mark" lang="ar">ـُ</span></td></tr><tr><td>[مُشْمِسٌ]</td><td>First predicate</td><td>Nominative</td><td><span class="grammar-ar grammar-mark" lang="ar">ـٌ</span></td></tr><tr><td>[فِي]</td><td>Preposition</td><td>Fixed form</td><td>—</td></tr><tr><td>[الصَّيْفِ]</td><td>After a preposition</td><td>Genitive</td><td><span class="grammar-ar grammar-mark" lang="ar">ـِ</span></td></tr><tr><td>[وَ]</td><td>Conjunction</td><td>Fixed form</td><td>—</td></tr><tr><td>[غَائِمٌ]</td><td>Second predicate</td><td>Nominative</td><td><span class="grammar-ar grammar-mark" lang="ar">ـٌ</span></td></tr><tr><td>[أَحْيَانًا]</td><td>Adverb of frequency</td><td>Accusative</td><td><span class="grammar-ar grammar-mark" lang="ar">ـً + ا</span></td></tr></tbody></table></div>`},
{id:'ak-c5-g10',type:'note',title:'Sentence 4: In Winter There Is Rain',body:`<div class="grammar-example">[فِي الشِّتَاءِ هُنَاكَ مَطَرٌ كَثِيرٌ وَثَلْجٌ قَلِيلٌ.]</div><p><strong>[الشِّتَاءِ]</strong> is genitive after [فِي]. <strong>[هُنَاكَ]</strong> introduces an existential construction. <strong>[مَطَرٌ]</strong> is its delayed subject and remains nominative; <strong>[كَثِيرٌ]</strong> agrees with it. <strong>[ثَلْجٌ]</strong> is coordinated with [مَطَرٌ], and <strong>[قَلِيلٌ]</strong> agrees with [ثَلْجٌ].</p><div class="grammar-table-wrap" role="region" aria-label="Sentence 4 case analysis" tabindex="0"><table class="grammar-table" style="min-width:620px"><thead><tr><th>Word</th><th>Function</th><th>Case or status</th><th>Ending</th></tr></thead><tbody><tr><td>[فِي]</td><td>Preposition</td><td>Fixed form</td><td>—</td></tr><tr><td>[الشِّتَاءِ]</td><td>After a preposition</td><td>Genitive</td><td><span class="grammar-ar grammar-mark" lang="ar">ـِ</span></td></tr><tr><td>[هُنَاكَ]</td><td>Existential adverb</td><td>Fixed form</td><td>—</td></tr><tr><td>[مَطَرٌ]</td><td>Delayed subject</td><td>Nominative</td><td><span class="grammar-ar grammar-mark" lang="ar">ـٌ</span></td></tr><tr><td>[كَثِيرٌ]</td><td>Adjective describing [مَطَرٌ]</td><td>Nominative</td><td><span class="grammar-ar grammar-mark" lang="ar">ـٌ</span></td></tr><tr><td>[وَثَلْجٌ]</td><td>Coordinated noun</td><td>Nominative</td><td><span class="grammar-ar grammar-mark" lang="ar">ـٌ</span></td></tr><tr><td>[قَلِيلٌ]</td><td>Adjective describing [ثَلْجٌ]</td><td>Nominative</td><td><span class="grammar-ar grammar-mark" lang="ar">ـٌ</span></td></tr></tbody></table></div>`},
{id:'ak-c5-g11',type:'note',title:'Sentence 5: What Is the Temperature?',body:`<div class="grammar-example">[مَا دَرَجَةُ الْحَرَارَةِ؟]</div><p><strong>[مَا]</strong> is a fixed interrogative serving as the fronted predicate. <strong>[دَرَجَةُ الْحَرَارَةِ]</strong> is an [إِضَافَة] and the delayed subject. Its first term takes the nominative ending required by its role; its second term is genitive.</p><div class="grammar-table-wrap" role="region" aria-label="Sentence 5 case analysis" tabindex="0"><table class="grammar-table" style="min-width:620px"><thead><tr><th>Word</th><th>Function</th><th>Case or status</th><th>Ending</th></tr></thead><tbody><tr><td>[مَا]</td><td>Fronted interrogative predicate</td><td>Fixed form</td><td>—</td></tr><tr><td>[دَرَجَةُ]</td><td>Delayed subject; first term of [إِضَافَة]</td><td>Nominative</td><td><span class="grammar-ar grammar-mark" lang="ar">ـُ</span></td></tr><tr><td>[الْحَرَارَةِ]</td><td>Second term of [إِضَافَة]</td><td>Genitive</td><td><span class="grammar-ar grammar-mark" lang="ar">ـِ</span></td></tr></tbody></table></div>`},
{id:'ak-c5-g12',type:'note',title:'Sentence 6: Spring Is the Best Season',body:`<div class="grammar-example">[الرَّبِيعُ أَحْسَنُ فَصْلٍ بِالنِّسْبَةِ لِي.]</div><p><strong>[الرَّبِيعُ]</strong> is the nominative subject. <strong>[أَحْسَنُ فَصْلٍ]</strong> is the predicate and an [إِضَافَة]: [أَحْسَنُ] takes the predicate’s nominative ending, while [فَصْلٍ] is genitive. In [بِالنِّسْبَةِ لِي], both prepositions place the following noun or pronoun in the genitive position.</p><div class="grammar-table-wrap" role="region" aria-label="Sentence 6 case analysis" tabindex="0"><table class="grammar-table" style="min-width:620px"><thead><tr><th>Word</th><th>Function</th><th>Case or status</th><th>Ending</th></tr></thead><tbody><tr><td>[الرَّبِيعُ]</td><td>Subject</td><td>Nominative</td><td><span class="grammar-ar grammar-mark" lang="ar">ـُ</span></td></tr><tr><td>[أَحْسَنُ]</td><td>Predicate; first term of [إِضَافَة]</td><td>Nominative</td><td><span class="grammar-ar grammar-mark" lang="ar">ـُ</span></td></tr><tr><td>[فَصْلٍ]</td><td>Second term of [إِضَافَة]</td><td>Genitive</td><td><span class="grammar-ar grammar-mark" lang="ar">ـٍ</span></td></tr><tr><td>[بِـ]</td><td>Preposition</td><td>Fixed form</td><td>—</td></tr><tr><td>[النِّسْبَةِ]</td><td>After a preposition</td><td>Genitive</td><td><span class="grammar-ar grammar-mark" lang="ar">ـِ</span></td></tr><tr><td>[لِي]</td><td>Preposition + attached pronoun</td><td>Genitive position</td><td>Fixed form</td></tr></tbody></table></div>`},
{id:'ak-c5-g13',type:'note',title:'Sentence 7: The Autumn Weather Is Cold',body:`<div class="grammar-example">[جَوُّ الْخَرِيفِ بَارِدٌ بِسَبَبِ الْمَطَرِ.]</div><p><strong>[جَوُّ الْخَرِيفِ]</strong> is the subject and an [إِضَافَة]. [جَوُّ] takes the subject’s nominative ending, while [الْخَرِيفِ] is genitive. <strong>[بَارِدٌ]</strong> is the nominative predicate. [بِسَبَبِ الْمَطَرِ] contains a preposition followed by a second [إِضَافَة].</p><div class="grammar-table-wrap" role="region" aria-label="Sentence 7 case analysis" tabindex="0"><table class="grammar-table" style="min-width:620px"><thead><tr><th>Word</th><th>Function</th><th>Case or status</th><th>Ending</th></tr></thead><tbody><tr><td>[جَوُّ]</td><td>Subject; first term of [إِضَافَة]</td><td>Nominative</td><td><span class="grammar-ar grammar-mark" lang="ar">ـُ</span></td></tr><tr><td>[الْخَرِيفِ]</td><td>Second term of [إِضَافَة]</td><td>Genitive</td><td><span class="grammar-ar grammar-mark" lang="ar">ـِ</span></td></tr><tr><td>[بَارِدٌ]</td><td>Predicate</td><td>Nominative</td><td><span class="grammar-ar grammar-mark" lang="ar">ـٌ</span></td></tr><tr><td>[بِـ]</td><td>Preposition</td><td>Fixed form</td><td>—</td></tr><tr><td>[سَبَبِ]</td><td>After [بِـ]; first term of [إِضَافَة]</td><td>Genitive</td><td><span class="grammar-ar grammar-mark" lang="ar">ـِ</span></td></tr><tr><td>[الْمَطَرِ]</td><td>Second term of [إِضَافَة]</td><td>Genitive</td><td><span class="grammar-ar grammar-mark" lang="ar">ـِ</span></td></tr></tbody></table></div>`},
{id:'ak-c5-g14',type:'note',title:'Sentence 8: I Study Well During the Semester',body:`<div class="grammar-example">[أَدْرُسُ جَيِّدًا خِلَالَ الْفَصْلِ الدِّرَاسِيِّ.]</div><p><strong>[أَدْرُسُ]</strong> is an indicative present-tense verb; its final <span class="grammar-ar grammar-mark" lang="ar">ـُ</span> marks verbal mood rather than noun case, and its subject is the implied pronoun “I.” <strong>[جَيِّدًا]</strong> is an accusative adverb of manner. [خِلَالَ] is an accusative adverb of time and the first term of an [إِضَافَة]. [الْفَصْلِ] is genitive, and its adjective [الدِّرَاسِيِّ] agrees with it.</p><div class="grammar-table-wrap" role="region" aria-label="Sentence 8 case analysis" tabindex="0"><table class="grammar-table" style="min-width:620px"><thead><tr><th>Word</th><th>Function</th><th>Case or status</th><th>Ending</th></tr></thead><tbody><tr><td>[أَدْرُسُ]</td><td>Present-tense verb</td><td>Indicative mood</td><td><span class="grammar-ar grammar-mark" lang="ar">ـُ</span></td></tr><tr><td>[جَيِّدًا]</td><td>Adverb of manner</td><td>Accusative</td><td><span class="grammar-ar grammar-mark" lang="ar">ـً + ا</span></td></tr><tr><td>[خِلَالَ]</td><td>Adverb of time; first term of [إِضَافَة]</td><td>Accusative</td><td><span class="grammar-ar grammar-mark" lang="ar">ـَ</span></td></tr><tr><td>[الْفَصْلِ]</td><td>Second term of [إِضَافَة]</td><td>Genitive</td><td><span class="grammar-ar grammar-mark" lang="ar">ـِ</span></td></tr><tr><td>[الدِّرَاسِيِّ]</td><td>Adjective describing [الْفَصْلِ]</td><td>Genitive</td><td><span class="grammar-ar grammar-mark" lang="ar">ـِ</span></td></tr></tbody></table></div>`},
{id:'ak-c5-g15',type:'note',title:'Sentence 9: I Feel Lonely Only Sometimes',body:`<div class="grammar-example">[أَشْعُرُ بِالْوِحْدَةِ أَحْيَانًا فَقَطْ.]</div><p><strong>[أَشْعُرُ]</strong> is an indicative present-tense verb with an implied “I”; its final <span class="grammar-ar grammar-mark" lang="ar">ـُ</span> marks verbal mood. <strong>[الْوِحْدَةِ]</strong> is genitive after [بِـ]. <strong>[أَحْيَانًا]</strong> is an accusative adverb of frequency, while <strong>[فَقَطْ]</strong> is a fixed adverb meaning “only.”</p><div class="grammar-table-wrap" role="region" aria-label="Sentence 9 case analysis" tabindex="0"><table class="grammar-table" style="min-width:620px"><thead><tr><th>Word</th><th>Function</th><th>Case or status</th><th>Ending</th></tr></thead><tbody><tr><td>[أَشْعُرُ]</td><td>Present-tense verb</td><td>Indicative mood</td><td><span class="grammar-ar grammar-mark" lang="ar">ـُ</span></td></tr><tr><td>[بِـ]</td><td>Preposition</td><td>Fixed form</td><td>—</td></tr><tr><td>[الْوِحْدَةِ]</td><td>After a preposition</td><td>Genitive</td><td><span class="grammar-ar grammar-mark" lang="ar">ـِ</span></td></tr><tr><td>[أَحْيَانًا]</td><td>Adverb of frequency</td><td>Accusative</td><td><span class="grammar-ar grammar-mark" lang="ar">ـً + ا</span></td></tr><tr><td>[فَقَطْ]</td><td>Adverb meaning “only”</td><td>Fixed form</td><td><span class="grammar-ar grammar-mark" lang="ar">ـْ</span></td></tr></tbody></table></div>`},
{id:'ak-c5-g16',type:'note',title:'Sentence 10: I Am of Egyptian Descent',body:`<div class="grammar-example">[أَنَا مِنْ أَصْلٍ مِصْرِيٍّ.]</div><p><strong>[أَنَا]</strong> is a fixed pronoun serving as the subject. The prepositional phrase <strong>[مِنْ أَصْلٍ مِصْرِيٍّ]</strong> serves as the predicate. [أَصْلٍ] is genitive after [مِنْ], and its adjective [مِصْرِيٍّ] matches it in gender, indefiniteness, and genitive case.</p><div class="grammar-table-wrap" role="region" aria-label="Sentence 10 case analysis" tabindex="0"><table class="grammar-table" style="min-width:620px"><thead><tr><th>Word</th><th>Function</th><th>Case or status</th><th>Ending</th></tr></thead><tbody><tr><td>[أَنَا]</td><td>Subject pronoun</td><td>Fixed form</td><td>—</td></tr><tr><td>[مِنْ]</td><td>Preposition</td><td>Fixed form</td><td>—</td></tr><tr><td>[أَصْلٍ]</td><td>After a preposition</td><td>Genitive</td><td><span class="grammar-ar grammar-mark" lang="ar">ـٍ</span></td></tr><tr><td>[مِصْرِيٍّ]</td><td>Adjective describing [أَصْلٍ]</td><td>Genitive</td><td><span class="grammar-ar grammar-mark" lang="ar">ـٍ</span></td></tr></tbody></table></div>`}

];
const AK_CHAPTERS_5_13={5:{subtitle:"Weather, Seasons, and Feelings",vocab:AK_V5,grammar:AK_G5,sentences:AK_S5,learn:["Weather conditions", "Seasons and temperature", "Frequency and degree", "Feelings and circumstances"]},6:{subtitle:"Education, Work, and Hobbies",vocab:AK_V6,sentences:AK_S6,learn:["Education and graduation", "Work and business", "Sports and hobbies", "Time and sequence"]},7:{subtitle:"Life Events and Institutions",vocab:AK_V7,sentences:AK_S7,learn:["Schools and institutions", "Life events", "Government and economics", "Future expressions"]},8:{subtitle:"Government, Study, and the Future",vocab:AK_V8,sentences:AK_S8,learn:["Government and international affairs", "Study and achievement", "Opinions and decisions", "Plans for the future"]},9:{subtitle:"Daily Routine and Leisure",vocab:AK_V9,sentences:AK_S9,learn:["Daily routines", "Meals and time", "Media and leisure", "Ability and movement"]},10:{subtitle:"Evening Routine, Meetings, and Time",vocab:AK_V10,sentences:AK_S10,learn:["Evening routines", "Meetings and appointments", "Work and time", "Prayer and recreation"]},11:{subtitle:"Travel, Relationships, and Experiences",vocab:AK_V11,sentences:AK_S11,learn:["Travel and tourism", "Relationships and experiences", "Places and geography", "Social interaction"]},12:{subtitle:"Travel, Leave, and Career Decisions",vocab:AK_V12,sentences:AK_S12,learn:["Vacation and holidays", "Career decisions", "Travel and visits", "Scholarships and appointments"]},13:{subtitle:"Ambitions, Work, and the Future",vocab:AK_V13,sentences:AK_S13,learn:["Ambitions and dreams", "Work and opportunities", "Media and writing", "Homesickness and stability"]}};
const AK_VOCAB_5_13=[...AK_V5,...AK_V6,...AK_V7,...AK_V8,...AK_V9,...AK_V10,...AK_V11,...AK_V12,...AK_V13];

