// Module grammar lessons and navigation refinements approved October 21, 2026.
window.MOSA_APPLY_MODULE_GRAMMAR = function (modules, alKitaab) {
  const sources=Object.values(alKitaab.chapters).flatMap(ch=>ch.grammar||[]);
  const reference=(id,newId,title,transform=body=>body)=>{
    const original=sources.find(g=>g.id===id);
    if(!original)throw new Error(`Missing Al-Kitaab grammar source: ${id}`);
    return {...original,id:newId,title:title||original.title,sourceGrammarId:id,body:transform(original.body)};
  };
  const note=(id,title,body,type='note')=>({id,type,title,body});
  const lesson=(number,key,title,cards)=>{
    const ch=modules.chapters[number];
    ch.placeholder=false;
    if(!ch.subchapters)ch.subchapters={};
    ch.subchapters[key]={chapterLabel:title,subtitle:title,grammarOnly:true,vocab:[],sentences:[],grammar:cards,learn:cards.map(c=>c.title)};
    ch.subchapterNumbers=[key,...(ch.subchapterNumbers||Object.keys(ch.subchapters).map(Number)).filter(n=>n!==key)];
  };
  lesson(5,0,'Possessive Pronouns',[
    note('mosa-m5-s0-g1','Showing Possession',`<p>Attach a possessive suffix to a noun to say “my,” “your,” “his,” “her,” or “our.” The suffix identifies the owner.</p><div class="grammar-example">[أَخِي] — my brother<br>[أُخْتُكَ] — your sister (addressing a man)<br>[وَالِدُهَا] — her father<br>[وَالِدَتُهُ] — his mother</div><div class="grammar-alert">Choose the suffix for the <b>owner</b>, not for the gender of the thing owned. [وَالِدَتُهُ] means “his mother”: ـهُ refers to him.</div>`,'intro'),
    reference('c3-g5','mosa-m5-s0-g2','Possessive Pronoun Suffixes'),
    note('mosa-m5-s0-g3','Family Words with Suffixes',`<p>A final [ة] becomes [ت] before a possessive suffix:</p><div class="grammar-example">[أُسْرَة] → [أُسْرَتِي] — my family<br>[زَوْجَة] → [زَوْجَتِي] — my wife</div><p>A noun with a possessive suffix is definite; do not add ال to it. Its adjective is definite too:</p><div class="grammar-example">[أُسْرَتِي الْكَبِيرَة] — my big family</div><p>The dual possessive suffixes are [ـكُمَا] “your (two)” and [ـهُمَا] “their (two).”</p><div class="grammar-alert">[أَب] and [أَخ] have special forms with suffixes. Learn common examples together: [أَبِي] — my father; [أَخِي] — my brother; [أَبُوهَا] — her father; [أَخُوهَا] — her brother. Their long vowel can change with grammatical case.</div>`)
  ]);
  lesson(8,0,'Human Nouns & Adjectives',[
    note('mosa-m8-s0-g1','Describing a Person',`<p>An adjective normally follows the noun it describes. For human nouns, it agrees in gender, number, definiteness, and case.</p><div class="grammar-example">[صَدِيق لَطِيف] — a nice male friend<br>[صَدِيقَة لَطِيفَة] — a nice female friend<br>[الصَّدِيق اللَّطِيف] — the nice male friend</div><p>Many adjectives add ة for the feminine: [لَطِيف] → [لَطِيفَة]. Some have other patterns: [كَبِير] → [كَبِيرَة], but [أَحْمَر] → [حَمْرَاء].</p><div class="grammar-alert">A phrase and a sentence differ:<br>[الصَّدِيق اللَّطِيف] — the nice friend<br>[الصَّدِيق لَطِيف] — the friend is nice.</div>`,'intro'),
    note('mosa-m8-s0-g2','Describing Groups of People',`<p>Human plurals normally take plural adjectives. Use masculine plural agreement for male or mixed groups and feminine plural agreement for female groups.</p><div class="grammar-example">[طُلَّاب مُجْتَهِدُونَ] — hardworking male/mixed students<br>[طَالِبَات مُجْتَهِدَات] — hardworking female students<br>[أَصْدِقَاء لُطَفَاء] — nice friends</div><p>This applies even when the human noun has a broken plural, such as [طُلَّاب] or [أَصْدِقَاء]. Adjectives can have regular or broken plurals too.</p><div class="grammar-alert">The feminine-singular rule for nonhuman plurals does not normally apply to groups of people.</div>`),
    reference('c1-g4','mosa-m8-s0-g3','Nisba Adjectives: Origin & Association'),
    note('mosa-m8-s0-g4','Nisba Adjectives for People',`<p>Nisba adjectives follow the same agreement rules as other adjectives.</p><div class="grammar-example">[طَالِب أَمْرِيكِيّ] — an American male student<br>[طَالِبَة أَمْرِيكِيَّة] — an American female student<br>[طُلَّاب أَمْرِيكِيُّونَ] — American male/mixed students<br>[طَالِبَات أَمْرِيكِيَّات] — American female students</div><p>The masculine sound plural uses [ـُونَ] in the nominative and [ـِينَ] in the accusative/genitive. The feminine sound plural uses [ـَات].</p><div class="grammar-alert">Nisba is a word-formation pattern, not a separate agreement system. Learn the masculine and feminine forms with each new adjective.</div>`)
  ]);
  modules.chapters[24].chapterLabel=modules.chapters[24].subtitle='Around the Home';
  lesson(24,0,'Nonhuman Nouns & Adjectives',[
    note('mosa-m24-s0-g1','Describing One Thing',`<p>For a singular nonhuman noun, the adjective agrees with the noun’s grammatical gender, definiteness, and case.</p><div class="grammar-example">[بَيْت كَبِير] — a big house<br>[غُرْفَة كَبِيرَة] — a big room<br>[الْبَيْت الْكَبِير] — the big house<br>[الْغُرْفَة الْكَبِيرَة] — the big room</div><p>Grammatical gender belongs to the noun. A thing does not need to be a person to be masculine or feminine.</p>`,'intro'),
    reference('c3-g6','mosa-m24-s0-g2','Nonhuman Plurals: Feminine Singular Agreement'),
    note('mosa-m24-s0-g3','Around the Home: Plural Agreement',`<p>Nonhuman plurals normally take a <b>feminine singular adjective</b>, whether the noun has a broken plural or a sound plural.</p><div class="grammar-example">[بُيُوت كَبِيرَة] — big houses<br>[غُرَف صَغِيرَة] — small rooms<br>[طَاوِلَات جَدِيدَة] — new tables<br>[كُتُب مُفِيدَة] — useful books</div><p>Demonstratives and pronouns normally follow this pattern too:</p><div class="grammar-example">[هَذِهِ الْبُيُوت كَبِيرَة.] — These houses are big.<br>[هِيَ جَمِيلَة.] — They are beautiful. (referring to the houses)</div><div class="grammar-alert">Compare people and things:<br>[طُلَّاب جُدُد] — new students<br>[كُتُب جَدِيدَة] — new books.</div>`)
  ]);
  const pastTransform=body=>body.replaceAll('كَتَب','دَرَس').replaceAll('to write','to study').replaceAll('“to write”','“to study”').replaceAll('wrote','studied');
  lesson(10,0,'Past Tense',[
    reference('ak-c8-g2','mosa-m10-s0-g1','Past-Tense Conjugation: “To Study”',pastTransform),
    note('mosa-m10-s0-g2','Past Tense in University Sentences',`<p>Past-tense suffixes show who performed the action. The same regular endings appear with many verbs.</p><div class="grammar-example">[دَرَسْتُ إِدَارَة الْأَعْمَال.] — I studied business administration.<br>[دَرَسَ أَخِي الْقَانُون.] — My brother studied law.<br>[دَرَسَتْ مِيلَانِي الطِّبّ.] — Melanie studied medicine.</div><div class="grammar-example">[تَخَرَّجْتُ مِنَ الْجَامِعَة.] — I graduated from university.<br>[حَصَلَتْ عَلَى دَرَجَة الْمَاجِسْتِير.] — She obtained a master’s degree.</div><div class="grammar-alert">The suffix pattern carries over to other verb forms, but weak and doubled verbs can also change their stems. Learn each verb’s past stem.</div>`),
    note('mosa-m10-s0-g3','Past-Tense Dual Forms',`<p>To complete the table, the dual forms of [دَرَسَ] are:</p><div class="grammar-example">[أَنْتُمَا دَرَسْتُمَا] — You two studied.<br>[هُمَا دَرَسَا] — They two (male/mixed) studied.<br>[هُمَا دَرَسَتَا] — They two (female) studied.</div><p>There is no separate “we two” verb form; use [نَحْنُ دَرَسْنَا].</p>`)
  ]);
  lesson(6,0,'Object Pronouns',[
    reference('c4-g3','mosa-m6-s0-g1','Object Pronouns'),
    note('mosa-m6-s0-g2','Talking About Friends',`<p>Conjugate the verb for its subject first, then attach the pronoun for its object.</p><div class="grammar-example">[أَعْرِفُهُ.] — I know him.<br>[أَعْرِفُهَا.] — I know her.<br>[هُوَ يَعْرِفُنِي.] — He knows me.<br>[سَأُعَرِّفُكَ عَلَيْهِ.] — I will introduce you to him.</div><div class="grammar-alert">Possession attaches to a noun: [صَدِيقِي] — my friend.<br>An object attaches to a verb: [يَعْرِفُنِي] — he knows me.<br>“Me” uses ـنِي as an object, rather than possessive ـِي.</div><p>The dual object suffixes are [ـكُمَا] “you two” and [ـهُمَا] “them two”: [أَعْرِفُكُمَا] — I know you two; [أَعْرِفُهُمَا] — I know them two.</p>`)
  ]);
  lesson(28,0,'Future Tense',[
    reference('ak-c8-g3','mosa-m28-s0-g1','Future Tense: سَـ and سَوْفَ'),
    note('mosa-m28-s0-g2','Future Plans with Different Subjects',`<p>Conjugate the present-tense verb for the subject, then attach سَـ or place سَوْفَ before it.</p><div class="grammar-example">[سَأَدْرُسُ] — I will study.<br>[سَتَدْرُسِينَ] — You (female) will study.<br>[سَيَدْرُسُونَ] — They (male/mixed) will study.<br>[سَوْفَ نَدْرُسُ] — We will study.</div><div class="grammar-alert">سَـ and سَوْفَ do not themselves change the verb’s mood. Do not treat them as a strict near-future versus distant-future distinction.</div>`),
    reference('ak-c8-g5','mosa-m28-s0-g3','“Will Not” with لَنْ')
  ]);
  const career=modules.chapters[35];
  const conditionalCards=[];
  for(const sub of Object.values(career.subchapters)){
    conditionalCards.push(...(sub.grammar||[]));
    sub.grammar=[];
  }
  lesson(35,0,'Conditionals',[
    note('mosa-m35-s0-g1','Conditional Sentences',`<p>Arabic expresses “if…” using sentence structures rather than a separate conditional tense.</p><div class="grammar-example">[إِذَا] — a real future possibility: “If I succeed, I will…”<br>[لَوْ] — an imagined situation: “If I had…, I would…”</div><p>The choice reflects how you present the situation. A past-tense form after إِذَا or لَوْ does not automatically make the whole sentence refer to the past.</p>`,'intro'),
    ...conditionalCards
  ]);
  lesson(35,6,'The Subjunctive',[
    note('mosa-m35-s6-g1','The Subjunctive Mood',`<p>The <b>subjunctive [الْمَنْصُوب]</b> is a form of the present-tense verb used after particles such as [أَنْ], [لَنْ], and purpose [لِـ].</p><div class="grammar-example">[أَعْمَلُ] — I work.<br>[أُرِيدُ أَنْ أَعْمَلَ فِي التَّمْوِيل.] — I want to work in finance.<br>[لَنْ أَتْرُكَ وَظِيفَتِي.] — I will not leave my job.</div><div class="grammar-alert">For most regular verbs, final ـُ becomes ـَ. This is a <b>verb mood ending</b>, not a noun case ending.</div>`,'intro'),
    note('mosa-m35-s6-g2','Goals: أَنْ and Purpose لِـ',`<p>Use أَنْ to introduce a verb after expressions such as “I want.” Use purpose لِـ to express “in order to.”</p><div class="grammar-example">[أُرِيدُ أَنْ أَكْسِبَ الْمَال.] — I want to make money.<br>[أَعْمَلُ لِأَكْسِبَ الْمَال.] — I work to make money.<br>[قَبْلَ أَنْ أُغَادِرَ] — before I leave</div><p>Keep the first verb conjugated normally and put the verb after أَنْ in the subjunctive.</p><div class="grammar-alert">Not every لِـ has the same function:<br>[لِأَعْمَلَ] — so that I work (purpose + subjunctive)<br>[لِنَعْمَلْ] — let’s work (command لِـ + jussive).</div>`),
    note('mosa-m35-s6-g3','Subjunctive Endings',`<p>Three patterns cover most regular forms:</p><div class="grammar-example">Final ـُ becomes ـَ:<br>[أَعْمَلُ] → [أَنْ أَعْمَلَ]</div><div class="grammar-example">Drop the ن from ـِينَ، ـَانِ، ـُونَ:<br>[تَعْمَلِينَ] → [أَنْ تَعْمَلِي]<br>[تَعْمَلَانِ] → [أَنْ تَعْمَلَا]<br>[يَعْمَلُونَ] → [أَنْ يَعْمَلُوا]</div><div class="grammar-example">Keep the feminine plural ـنَ:<br>[يَعْمَلْنَ] → [أَنْ يَعْمَلْنَ]</div><div class="grammar-alert">Compare:<br>[لَنْ أَعْمَلَ] — I will not work. (subjunctive)<br>[لَمْ أَعْمَلْ] — I did not work. (jussive)<br>Weak verbs have additional patterns; these examples show a regular verb.</div>`)
  ]);
  // Put the conditional lesson before the subjunctive, followed by the original content.
  career.subchapterNumbers=[0,6,1,2,3,4,5];
  const icons={1:'🎨',2:'👋',3:'🗣️',4:'🤝',5:'👨‍👩‍👧‍👦',6:'👥',7:'🛒',8:'🙂',9:'🧑‍💼',10:'🎓',11:'🧸',12:'📰',13:'✈️',14:'🚆',15:'🧭',16:'🏨',17:'🔢',18:'🚨',19:'🩺',20:'🏙️',21:'📷',22:'🛍️',23:'🌿',24:'🏠',25:'🏢',26:'🏛️',27:'❓',28:'🗓️',29:'🏥',30:'🎸',31:'🏋️',32:'📦',33:'🍽️',34:'🕒',35:'💼',36:'🍲',37:'🏫'};
  for(const [number,ch] of Object.entries(modules.chapters)){
    ch.icon=icons[number]||'📖';
    if(ch.subchapters){
      const lessons=Object.values(ch.subchapters);
      ch.vocab=lessons.flatMap(s=>s.vocab||[]);
      ch.sentences=lessons.flatMap(s=>s.sentences||[]);
      const ordered=ch.subchapterNumbers||Object.keys(ch.subchapters).map(Number);
      ch.grammar=ordered.flatMap(n=>ch.subchapters[n].grammar||[]);
    }
  }
  const order=modules.chapterNumbers.filter(n=>![34,17,35,36,15].includes(n));
  order.splice(order.indexOf(28),0,34,17);
  order.splice(order.indexOf(37)+1,0,35,36,15);
  modules.chapterNumbers=order;
  modules.totalChapters=order.length;
};
