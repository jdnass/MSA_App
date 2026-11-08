"use strict";
const { pictures, fragments, verbs, readings, subforms } = window.SUWAR_DATA;
const main = document.querySelector("#main");
const nav = document.querySelector("#nav");
const dialog = document.querySelector("#options");
const fields = document.querySelector("#option-fields");
const tabIcons = {
  Pictures: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="15" cy="9" r="2"/><path d="m4 18 5-6 4 5 3-3 4 4"/>',
  Fragments: '<path d="M4 5h16M4 10h12M4 15h16M4 20h9"/>',
  Verbs: '<path d="m13 2-9 12h7l-1 8 10-13h-8z"/>',
  Reading: '<path d="M12 5v15m0-15C8 2 4 3 2 4v14c4-2 7-1 10 2 3-3 6-4 10-2V4c-2-1-6-2-10 1z"/>'
};
const labels = {en:"Hide English",ar:"Hide Arabic",tr:"Hide transliteration",harakat:"Hide harakat",audio:"Hide audio"};
const confidence = ["Confident","Iffy","Weak"];
const escape = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const key = "suwar-study-v1";
let saved;
try { saved = JSON.parse(localStorage.getItem(key)) || {}; } catch { saved = {}; }
const state = {
  tab:"Pictures", index:0, chapter:"", broken:"all", confidence:"", structure:"", form:"",
  reading:"", cases:false, revealed:new Set(), shuffled:[],
  ratings:saved.ratings || {}, hide:saved.hide || {}, order:saved.order === "shuffle" ? "shuffle" : "chronological"
};
let audio;
let speechVersion=0;
const save = () => {
  try { localStorage.setItem(key, JSON.stringify({ratings:state.ratings,hide:state.hide,order:state.order})); } catch {}
};
const clearMarks = text => text.replace(/[\u0610-\u061a\u064b-\u065f\u0670]/g,"");
const marked = text => text.replace(/\{([^}]*)\}/g, (_, suffix) => state.cases ? suffix : "");
const arabic = text => escape(state.hide.harakat ? clearMarks(text) : text);
const quote = text => '<span lang="ar" dir="rtl">' + arabic(text) + '</span>';
const unique = values => [...new Set(values)];
const chapters = unique(pictures.map(v => v.chapterName));
const structures = unique(fragments.map(v => v.section));
const forms = ["I","II","III","IV","V","VI","VII","VIII","IX","X","Quadriliteral"];
const romanize = text => {
  const letters = {"أ":"ʾ","إ":"ʾ","آ":"ʾā","ا":"ā","ٱ":"a","ب":"b","ت":"t","ث":"th","ج":"j","ح":"ḥ","خ":"kh","د":"d","ذ":"dh","ر":"r","ز":"z","س":"s","ش":"sh","ص":"ṣ","ض":"ḍ","ط":"ṭ","ظ":"ẓ","ع":"ʿ","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ي":"y","ى":"ā","ة":"ah","ء":"ʾ","ؤ":"ʾ","ئ":"ʾ","َ":"a","ِ":"i","ُ":"u","ً":"an","ٍ":"in","ٌ":"un","ْ":"","ٰ":"ā","ـ":""};
  return text.replace(/\u064e?[اى]/g, "ا").replace(/ِي(?![َُِّ])/g,"ī").replace(/ُو(?![َُِّ])/g,"ū")
    .replace(/([ء-ي])([َُِ]?)ّ/g,"$1$1$2").replace(/ّ([َُِ]?)/g,"$1")
    .replace(/[\u0621-\u065f\u0670]/g,c=>letters[c]??"").replace(/aā/g,"ā");
};
const select = (label, name, options, value) =>
  '<label>' + escape(label) + '<select data-field="' + name + '">' +
  options.map(([val,title])=>'<option value="' + escape(val) + '"' + (val===value?' selected':'') + '>' + escape(title) + '</option>').join("") + '</select></label>';
const optionsWithAll = (label, values) => [["",label], ...values.map(v=>[v,v])];

function list() {
  if (state.tab === "Pictures") {
    const source = state.order === "shuffle" ? state.shuffled : pictures;
    return source.filter(v => (!state.chapter || v.chapterName===state.chapter) &&
      (state.broken==="all" || v.broken===(state.broken==="only")) &&
      (!state.confidence || state.ratings[v.id]===state.confidence));
  }
  if (state.tab === "Fragments") return fragments.filter(v => !state.structure || v.section===state.structure);
  if (state.tab === "Verbs") return verbs.filter(v => !state.form || v.form===state.form).slice().sort((a,b)=>forms.indexOf(a.form)-forms.indexOf(b.form));
  return [];
}

function shufflePictures() {
  state.shuffled = pictures.slice();
  for (let i=state.shuffled.length-1;i>0;i--) {
    const j=Math.floor(Math.random()*(i+1));
    [state.shuffled[i],state.shuffled[j]]=[state.shuffled[j],state.shuffled[i]];
  }
}

function stopAudio() {
  speechVersion++;
  if (audio) {audio.pause();audio=null;}
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
}

function play(card) {
  stopAudio();
  const version = speechVersion;
  const fallback = () => {
    if (version!==speechVersion) return;
    if ("speechSynthesis" in window) {
      const voice = new SpeechSynthesisUtterance(card.ar);
      voice.lang="ar";
      voice.rate=.83;
      const installed = window.speechSynthesis.getVoices().find(v => /^ar(?:-|$)/i.test(v.lang));
      if (installed) voice.voice=installed;
      voice.onerror = () => {
        if (version===speechVersion) document.querySelector(".audio-status").textContent="Arabic speech is unavailable on this device.";
      };
      window.speechSynthesis.speak(voice);
    } else {
      document.querySelector(".audio-status").textContent="Arabic speech is unavailable on this device.";
    }
  };
  if (!card.audio) return fallback();
  audio=new Audio(card.audio);
  audio.play().catch(fallback);
}

function reveal(key,text,cls,defaultHidden=false) {
  const hidden=(state.hide[key]??defaultHidden) && !state.revealed.has(key);
  const label={en:"English",ar:"Arabic",tr:"transliteration"}[key];
  if(hidden) return '<button class="secondary reveal" type="button" data-reveal="' + key + '">Show ' + label + '</button>';
  return '<div class="' + cls + '"' + (key==="ar"?' lang="ar" dir="rtl"':'') + '>' + (key==="ar"?arabic(text):escape(text)) + '</div>';
}

function renderCard(v) {
  const picture = state.tab==="Pictures";
  const verb = state.tab==="Verbs";
  let artwork="";
  if (picture) {
    const [page,x,y]=v.art;
    artwork='<div class="art" role="img" aria-label="Clay illustration" style="background-image:url(./art/clay-'+page+'.webp);background-position:'+x*20+'% '+y*20+'%"></div>';
  }
  const meta=picture?v.chapterName+" · "+v.kind+(v.broken?" · Broken plural":""):
    verb?(v.form==="Quadriliteral"?v.form:"Form "+v.form)+(v.subform&&subforms[v.subform]?" · "+subforms[v.subform].label:""):v.section;
  const canShowAudio=!state.hide.audio;
  const showVerbDetails=verb&&(!state.hide.ar||state.revealed.has("ar"));
  const related=showVerbDetails?[["Past (I)",v.past],["Maṣdar",v.masdar]].filter(([,text])=>text&&text!=="—"):[];
  return '<article class="card '+(picture?"picture":"fragment")+'"><p class="caption">'+escape(meta)+'</p>'+artwork+
    reveal("en",v.en,"en")+reveal("ar",v.ar,"ar",state.tab==="Fragments")+
    (picture||verb?reveal("tr",v.tr||romanize(v.ar),"tr"):"")+
    (related.length?'<div class="forms">'+related.map(([label,text])=>'<div><small>'+label+'</small><div class="ar">'+quote(text)+'</div></div>').join("")+'</div>':"")+
    (canShowAudio?'<div class="audio-row"><button class="secondary" data-play type="button">Play Arabic</button><div class="audio-status caption" role="status"></div></div>':"")+
    (picture?'<div class="ratings" aria-label="Confidence">'+confidence.map(c=>'<button class="rating" type="button" data-rate="'+c+'" aria-pressed="'+(state.ratings[v.id]===c)+'">'+c+'</button>').join("")+'</div>':"")+'</article>';
}

function deck() {
  const all=list();
  state.index=Math.max(0,Math.min(all.length-1,state.index));
  const heading = state.tab;
  let controls;
  if (heading==="Pictures") controls=select("Banana chapter","chapter",optionsWithAll("All chapters",chapters),state.chapter)+
    select("Broken plurals","broken",[["all","Include all"],["hide","Hide broken plurals"],["only","Broken plurals only"]],state.broken)+
    select("Confidence","confidence",optionsWithAll("All levels",confidence),state.confidence);
  else if (heading==="Fragments") controls=select("Sentence structure","structure",optionsWithAll("All structures",structures),state.structure);
  else controls=select("Verb form","form",optionsWithAll("All forms",forms.filter(f=>verbs.some(v=>v.form===f))),state.form);
  return '<h2>'+heading+'</h2><div class="controls">'+controls+'</div>'+
    (all.length?'<p class="counter" aria-live="polite">'+(state.index+1)+' / '+all.length+'</p>'+renderCard(all[state.index])+
      '<div class="move"><button class="secondary" data-step="-1" '+(state.index===0?"disabled":"")+'>Previous</button><button class="primary" data-step="1" '+(state.index===all.length-1?"disabled":"")+'>Next</button></div>':
      '<article class="empty"><h3>No matching cards</h3><p class="muted">Try a different filter.</p></article>');
}

function renderReading() {
  const item=readings.find(r=>String(r.id)===state.reading);
  const title='<h2>Reading</h2><p class="muted">Banana Part 1 passages</p>';
  const controls=select("Banana chapter","reading",[["","Choose a chapter"],...readings.map(r=>[String(r.id),r.title])],state.reading);
  if (!item) return title+'<div class="controls">'+controls+'</div>';
  let content;
  if(item.tokens) content='<p class="caption">Tap a word for its meaning.</p><div class="gloss caption" id="gloss" aria-live="polite">Word meanings appear here.</div>'+
    item.tokens.map((paragraph,i)=>'<p lang="ar" dir="rtl">'+paragraph.map(([ar,en],j)=>/^[.،؟!؛]$/.test(ar)?escape(ar):
      ' <button type="button" class="word" data-word="'+i+':'+j+'" aria-pressed="false">'+arabic(marked(ar))+'</button>').join("")+'</p>').join("");
  else content=item.lines.map(([en,ar])=>'<div><p lang="ar" dir="rtl">'+arabic(marked(ar))+'</p><details><summary>English</summary><p>'+escape(en)+'</p></details></div>').join("");
  return title+'<div class="controls">'+controls+'</div><label class="option">Show marked case endings<input type="checkbox" data-field="cases" '+(state.cases?"checked":"")+'></label><article class="reading sections">'+content+'</article>';
}

function render() {
  nav.innerHTML=Object.entries(tabIcons).map(([tab,icon])=>'<button type="button" data-tab="'+tab+'"'+(tab===state.tab?' aria-current="page"':"")+'><svg viewBox="0 0 24 24" aria-hidden="true">'+icon+'</svg>'+tab+'</button>').join("");
  main.innerHTML=state.tab==="Reading"?renderReading():deck();
}

function step(delta) {
  const index = state.index + delta;
  if(index<0 || index>=list().length) return;
  stopAudio();
  state.index=index;
  state.revealed.clear();
  render();
}

nav.addEventListener("click",event=>{
  const next=event.target.closest("[data-tab]")?.dataset.tab;
  if(!next || next===state.tab)return;
  stopAudio();
  state.tab=next;
  state.index=0;
  state.revealed.clear();
  render();
  window.scrollTo(0,0);
});
main.addEventListener("change",event=>{
  const {field}=event.target.dataset;
  if(!field)return;
  state[field]=event.target.type==="checkbox"?event.target.checked:event.target.value;
  stopAudio();
  state.index=0;
  state.revealed.clear();
  render();
  main.querySelector('[data-field="'+field+'"]')?.focus();
});
main.addEventListener("click",event=>{
  const btn=event.target.closest("button");
  if(!btn)return;
  const {reveal:field,rate,step:delta,word}=btn.dataset;
  const card=list()[state.index];
  if(field){state.revealed.add(field);render();}
  else if(rate&&card){state.ratings[card.id]=rate;save();render();}
  else if(delta){step(Number(delta));}
  else if(btn.hasAttribute("data-play")&&card){play(card);}
  else if(word){
    const [i,j]=word.split(":").map(Number);
    const item=readings.find(r=>String(r.id)===state.reading);
    const [,meaning]=item.tokens[i][j];
    main.querySelector('.word[aria-pressed="true"]')?.setAttribute("aria-pressed","false");
    btn.setAttribute("aria-pressed","true");
    document.querySelector("#gloss").textContent=meaning;
  }
});

document.querySelector("#settings").addEventListener("click",()=>{
  fields.innerHTML=Object.entries(labels).map(([field,label])=>'<label class="option">'+label+'<input type="checkbox" data-hide="'+field+'" '+((state.hide[field]??(field==="ar"&&state.tab==="Fragments"))?"checked":"")+'></label>').join("")+
    '<div class="controls">'+select("Picture order","order",[["chronological","Chronological"],["shuffle","Shuffle"]],state.order)+'</div>';
  dialog.showModal();
});
fields.addEventListener("change",event=>{
  if(event.target.dataset.hide){state.hide[event.target.dataset.hide]=event.target.checked;}
  else if(event.target.dataset.field==="order"){state.order=event.target.value;state.index=0;if(state.order==="shuffle")shufflePictures();}
  stopAudio();
  state.revealed.clear();
  save();
  render();
});
document.addEventListener("keydown",event=>{
  if(dialog.open||state.tab==="Reading"||/INPUT|SELECT|TEXTAREA/.test(event.target.tagName))return;
  if(event.key==="ArrowLeft")step(-1);
  if(event.key==="ArrowRight")step(1);
});
let touch;
main.addEventListener("touchstart",event=>{
  const p=event.changedTouches[0];
  touch=event.target.closest(".card")?{x:p.clientX,y:p.clientY}:null;
},{passive:true});
main.addEventListener("touchend",event=>{
  if(!touch)return;
  const p=event.changedTouches[0], dx=p.clientX-touch.x, dy=p.clientY-touch.y;
  touch=null;
  if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.5)step(dx<0?1:-1);
},{passive:true});
if(state.order==="shuffle")shufflePictures();
render();
if("serviceWorker" in navigator && location.protocol!=="file:") navigator.serviceWorker.register("./sw.js").catch(()=>{});
