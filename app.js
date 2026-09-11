
const lessons = [
  {
    number:1, title:"Greetings & Introductions", subtitle:"Essential words for meeting people",
    vocabulary:[
      ["man","رَجُل","rajul","noun",null,"woman","مَرْأَة","mar'a",null],
      ["woman","مَرْأَة","mar'a","noun",null,null,null,null,null],
      ["hello","مَرْحَبًا","marḥaban","interjection",null,null,null,null,null],
      ["welcome","أَهْلًا وَسَهْلًا","ahlan wa sahlan","interjection",null,null,null,null,null],
      ["name","اِسْم","ism","noun",null,null,null,null,null],
      ["I","أَنَا","anā","pronoun",null,null,null,null,null],
      ["you (masculine)","أَنْتَ","anta","pronoun",null,null,null,null,null],
      ["you (feminine)","أَنْتِ","anti","pronoun",null,null,null,null,null],
      ["thank you","شُكْرًا","shukran","interjection",null,null,null,null,null],
      ["yes","نَعَم","naʿam","adverb",null,null,null,null,null]
    ],
    sentences:[
      ["The man is in the house.","الرَّجُلُ فِي الْبَيْتِ.","ar-rajulu fī al-bayti."],
      ["What is your name?","مَا اسْمُكَ؟","mā ismuka?"],
      ["Hello.","مَرْحَبًا.","marḥaban."],
      ["Thank you.","شُكْرًا.","shukran."],
      ["Yes, I am here.","نَعَم، أَنَا هُنَا.","naʿam, anā hunā."]
    ]
  }
];

let state = JSON.parse(localStorage.getItem("msaState") || '{"screen":"home","lesson":1,"section":"vocab","index":0,"speed":1,"hideTranslit":false}');
const app = document.getElementById("app");

function save(){localStorage.setItem("msaState",JSON.stringify(state))}
function lesson(){return lessons.find(x=>x.number===state.lesson)}
function speak(text, rate=1){
  if(!("speechSynthesis" in window)){ alert("Arabic speech is not available in this browser."); return; }
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text); u.lang="ar-SA"; u.rate=rate;
  const voices=speechSynthesis.getVoices();
  const ar=voices.find(v=>v.lang && v.lang.toLowerCase().startsWith("ar"));
  if(ar) u.voice=ar;
  speechSynthesis.speak(u);
}
function progress(){
  const l=lesson(), total=l.vocabulary.length+l.sentences.length;
  const done=state.section==="vocab"?state.index: l.vocabulary.length+state.index;
  return Math.min(100, Math.round(done/total*100));
}
function header(back=true){
  return `<div class="top"><div class="brand">MSA Arabic</div>${back?`<button class="icon-btn" onclick="goHome()">⌂</button>`:""}</div>`;
}
function render(){
  speechSynthesis?.cancel();
  if(state.screen==="home") renderHome();
  else if(state.screen==="overview") renderOverview();
  else if(state.screen==="learn") renderLearn();
  else renderComplete();
}
function renderHome(){
  const l=lessons[0];
  app.innerHTML=`<div class="shell">${header(false)}
    <section class="hero"><div class="kicker">Modern Standard Arabic</div><h1>Learn Arabic,<br>one lesson at a time.</h1>
    <p>A simple personal vocabulary and sentence trainer designed for your iPhone.</p>
    <button class="primary" style="width:100%;margin-top:12px" onclick="openOverview(1)">Continue Learning</button></section>
    <div class="card"><div class="kicker">Your lessons</div><div class="lesson-card" style="margin-top:14px" onclick="openOverview(1)">
      <div class="lesson-number">1</div><div class="lesson-meta"><strong>${l.title}</strong><span>${l.vocabulary.length} vocabulary · ${l.sentences.length} sentences</span></div><div class="chev">›</div>
    </div></div>
    <div class="notice small">Tip: after you start a lesson, Arabic audio will play automatically when your browser permits it. You can always replay or skip.</div>
  </div>`;
}
function openOverview(n){state.screen="overview";state.lesson=n;state.section="vocab";state.index=0;save();render()}
function renderOverview(){
  const l=lesson();
  app.innerHTML=`<div class="shell">${header()}
    <div class="lesson-head"><div class="kicker">Lesson ${l.number}</div><h2>${l.title}</h2><p>${l.subtitle}</p></div>
    <div class="card"><div class="stats"><div class="stat"><strong>${l.vocabulary.length}</strong><span>Vocabulary</span></div><div class="stat"><strong>${l.sentences.length}</strong><span>Sentences</span></div></div>
    <button class="primary" style="width:100%" onclick="startLesson()">Start Lesson</button></div>
    <div class="card"><strong>What you'll learn</strong><p class="small">English → Arabic → transliteration, grammatical category, optional feminine/plural forms, and spoken Arabic audio.</p></div>
  </div>`;
}
function startLesson(){state.screen="learn";state.section="vocab";state.index=0;save();render();setTimeout(autoSpeak,250)}
function autoSpeak(){
  const l=lesson();
  if(state.section==="vocab") speak(l.vocabulary[state.index][1],state.speed);
  else speak(l.sentences[state.index][1],state.speed);
}
function renderLearn(){
  const l=lesson(), isV=state.section==="vocab", item=isV?l.vocabulary[state.index]:l.sentences[state.index];
  const total=isV?l.vocabulary.length:l.sentences.length;
  const title=isV?"Vocabulary":"Sentences";
  let body="";
  if(isV){
    const [en,ar,tr,pos,unused,fem,femAr,femTr,plural]=item;
    body=`<div class="english">${en}</div><div class="arabic">${ar}</div>${state.hideTranslit?"":`<div class="translit">${tr}</div>`}
      <div class="tags"><span class="tag pos">${pos}</span>${femAr?`<span class="tag fem">feminine: ${femAr}</span>`:""}${plural?`<span class="tag plural">plural: ${plural}</span>`:""}</div>`;
  }else{
    body=`<div class="english">${item[0]}</div><div class="arabic">${item[1]}</div>${state.hideTranslit?"":`<div class="translit">${item[2]}</div>`}`;
  }
  app.innerHTML=`<div class="shell">${header()}
    <div class="progress-wrap"><div class="progress-label"><span>${title}</span><span>${state.index+1} of ${total}</span></div><div class="progress-line"><div class="progress-fill" style="width:${progress()}%"></div></div></div>
    <div class="card">${body}
      <div class="audio-row"><button class="audio play" onclick="speakCurrent(1)">▶ Replay</button><button class="audio slow" onclick="speakCurrent(.7)">◌ Slower</button><button class="audio skip" onclick="next()">Skip ›</button></div>
    </div>
    <div class="bottom"><button class="secondary" onclick="previous()">Back</button><button class="primary" onclick="next()">Next</button></div>
    <p class="center small">Audio speed: ${state.speed===1?"Normal":"Slow"} · <button style="border:0;background:none;color:var(--teal);font-weight:700" onclick="toggleTranslit()">${state.hideTranslit?"Show":"Hide"} transliteration</button></p>
  </div>`;
}
function speakCurrent(rate){const l=lesson(); const text=state.section==="vocab"?l.vocabulary[state.index][1]:l.sentences[state.index][1]; speak(text,rate)}
function toggleTranslit(){state.hideTranslit=!state.hideTranslit;save();render()}
function next(){
  const l=lesson();
  if(state.section==="vocab"){
    if(state.index<l.vocabulary.length-1) state.index++;
    else {state.section="sentences";state.index=0;}
  } else {
    if(state.index<l.sentences.length-1) state.index++;
    else {state.screen="complete";}
  }
  save();render(); if(state.screen==="learn") setTimeout(autoSpeak,220);
}
function previous(){
  const l=lesson();
  if(state.index>0) state.index--;
  else if(state.section==="sentences"){state.section="vocab";state.index=l.vocabulary.length-1}
  else {state.screen="overview"}
  save();render()
}
function goHome(){speechSynthesis?.cancel();state.screen="home";save();render()}
function renderComplete(){
  const l=lesson();
  app.innerHTML=`<div class="shell">${header()}
    <div class="card center" style="margin-top:60px;padding:32px 22px"><div class="big-check">✓</div><div class="kicker">Lesson ${l.number}</div><h2>Lesson Complete!</h2>
    <p>You finished ${l.vocabulary.length} vocabulary words and ${l.sentences.length} sentences.</p>
    <div class="row" style="margin-top:22px"><button class="secondary" onclick="openOverview(1)">Review</button><button class="primary" onclick="goHome()">Home</button></div></div>
  </div>`;
}
speechSynthesis?.addEventListener?.("voiceschanged",()=>{});
render();
