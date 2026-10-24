let listeningSheetOpen=false;
const listeningPlayer=new window.MosaPassivePlayer(updateListeningUI);
function headsetIcon(){return `<svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14v-3a9 9 0 0 1 18 0v3"/><rect x="3" y="12" width="4" height="9" rx="2"/><rect x="17" y="12" width="4" height="9" rx="2"/></svg>`}
function listeningAudioSource(word){const src=recordedAudioSource(word);return window.MOSA_LISTENING_LEGACY?.[src]||src;}
function listeningWords(){return filteredVocabulary().filter(word=>listeningAudioSource(word));}
function listeningActive(){return ['preparing','ready','playing','paused'].includes(listeningPlayer.status);}
function listeningMessage(){
  const p=listeningPlayer;
  if(p.status==='preparing')return `Preparing audio · ${Math.round(p.progress*100)}%. Keep MoSA open until ready.`;
  if(p.status==='error')return p.error;
  if(p.status==='idle')return `${listeningWords().length} matching words have recordings.`;
  if(p.status==='ended')return `Finished · ${p.entries.length} words.${p.skipped?` Skipped ${p.skipped} unavailable recordings.`:''}`;
  const entry=p.current(),index=p.entries.indexOf(entry)+1;
  return `${p.status==='ready'?'Ready — tap Play':p.status==='paused'?'Paused':'Playing'} · ${index} of ${p.entries.length} words${p.skipped?` · ${p.skipped} unavailable recordings skipped`:''}`;
}
function openListeningSheet(){
  closeSheet(false);listeningSheetOpen=true;
  sheet.innerHTML=`<div class="handle"></div><h3>Vocabulary listening</h3><p class="filter-prompt">Listen to the words matching your filters. Each recording plays twice, with a three-second pause after each play. Words without audio are skipped.</p><p id="listening-status" role="status"></p><p id="listening-word" class="listening-word"></p><div class="listening-controls"><button class="secondary" onclick="listeningPlayer.skip(-1)" aria-label="Previous word">Previous</button><button class="primary" id="listening-play" onclick="toggleListening()">Prepare audio</button><button class="secondary" onclick="listeningPlayer.skip(1)" aria-label="Next word">Next</button></div><button class="secondary listening-stop" onclick="stopListening()">Stop listening</button><p class="filter-prompt">Once ready, tap Play before locking your phone. Use the lock-screen controls to pause or resume.</p><details><summary>Playback help</summary><p class="filter-prompt">Player version 99. If audio stops unexpectedly, copy the playback report to help troubleshoot. Nothing is sent automatically.</p><button class="secondary" onclick="copyListeningReport()">Copy playback report</button><p id="listening-report-status" role="status"></p><textarea id="listening-report" aria-label="Playback report" readonly hidden style="width:100%;min-height:150px"></textarea></details><button class="secondary listening-stop" onclick="closeSheet()">Done</button>`;
  sheet.classList.add('open');backdrop.classList.add('open');updateListeningUI();
}
async function toggleListening(){
  const p=listeningPlayer;
  if(p.status==='playing'){p.pause();return;}
  if(['ready','paused','ended'].includes(p.status)){stopAudio();await p.play();return;}
  if(p.status==='preparing')return;
  const words=listeningWords();
  if(!words.length){p.status='error';p.error='No recorded words match these filters. Try another collection or chapter.';p.notify();return;}
  // A new session follows the existing shuffle preference without repeats.
  if(state.order==='shuffle')for(let i=words.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[words[i],words[j]]=[words[j],words[i]];}
  stopAudio();await p.prepare(words,listeningAudioSource);
}
function stopListening(){listeningPlayer.stop();}
async function copyListeningReport(){
  const report=listeningPlayer.playbackReport(),status=document.querySelector('#listening-report-status');
  try{await navigator.clipboard.writeText(report);if(status)status.textContent='Playback report copied.';}
  catch(error){const field=document.querySelector('#listening-report');if(field){field.hidden=false;field.value=report;field.focus();field.select();}if(status)status.textContent='Select and copy the playback report below.';}
}
function updateListeningUI(){
  const p=listeningPlayer,active=listeningActive();
  document.querySelectorAll('.header-headset').forEach(button=>{button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
  const status=document.querySelector('#listening-status');if(status)status.textContent=listeningMessage();
  const word=document.querySelector('#listening-word');if(word)word.textContent=p.current()?`${p.current().word.en} · ${p.current().word.ar}`:'';
  const play=document.querySelector('#listening-play');if(play){play.textContent=p.status==='preparing'?'Preparing…':p.status==='playing'?'Pause':['ready','paused','ended'].includes(p.status)?'Play':'Prepare audio';play.disabled=p.status==='preparing';}
  if(listeningSheetOpen)document.querySelectorAll('.listening-controls .secondary').forEach(button=>button.disabled=!p.audio);
}
