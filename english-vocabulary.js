/* Optional Al-Kitaab Part 1 English endings; recordings are generated once. */
function englishVocabularyEnabled(){return localStorage.getItem('msa-english-ending')==='true';}
function englishVocabularySource(word){return word.collectionId==='alkitaab1'?window.MOSA_ENGLISH_AUDIO?.[String(word.en||'').trim()]:null;}
function englishVocabularyOption(){const enabled=englishVocabularyEnabled();return `<div class="option">English after Arabic (Al-Kitaab Part 1)<button type="button" class="switch ${enabled?'on':''}" onclick="toggleEnglishVocabulary()" aria-label="English after Arabic for Al-Kitaab Part 1" aria-pressed="${enabled}"></button></div><p class="filter-prompt">When enabled: Arabic twice, then English once, with three-second pauses.</p>`;}
function toggleEnglishVocabulary(){stopAudio();stopListening();localStorage.setItem('msa-english-ending',String(!englishVocabularyEnabled()));state.lastAutoKey=null;if(listeningSheetOpen)openListeningSheet();else openSheet();}
function playVocabulary(word){
  const english=englishVocabularyEnabled()&&englishVocabularySource(word),arabic=recordedAudioSource(word);
  if(!english||!arabic){playArabic(word);return;}
  stopAudio();if(listeningPlayer.status==='playing')listeningPlayer.pause();
  const audio=new Audio(arabic),sources=[arabic,arabic,english];let index=0;
  activeNativeAudio=audio;
  const play=()=>{if(activeNativeAudio!==audio)return;const attempt=audio.play();if(attempt?.catch)attempt.catch(()=>{if(activeNativeAudio===audio)stopAudio();});};
  audio.onerror=()=>{if(activeNativeAudio===audio)stopAudio();};
  audio.onended=()=>{if(activeNativeAudio!==audio)return;if(++index===sources.length){activeNativeAudio=null;return;}setTimeout(()=>{if(activeNativeAudio!==audio)return;audio.src=sources[index];play();},3000);};
  play();
}
