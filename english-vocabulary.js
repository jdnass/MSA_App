/* Optional Al-Kitaab Part 1 English endings; recordings are generated once. */
function englishVocabularyEnabled(){return localStorage.getItem('msa-english-ending')==='true';}
function englishVocabularySource(word){return word.collectionId==='alkitaab1'?window.MOSA_ENGLISH_AUDIO?.[String(word.en||'').trim()]:null;}
function englishVocabularyOption(){const enabled=englishVocabularyEnabled();return `<div class="option">English after Arabic (audio playbook)<button type="button" class="switch ${enabled?'on':''}" onclick="toggleEnglishVocabulary()" aria-label="English after Arabic for Al-Kitaab Part 1" aria-pressed="${enabled}"></button></div><p class="filter-prompt">When enabled: Arabic twice, then English once, with three-second pauses.</p>`;}
function toggleEnglishVocabulary(){stopAudio();stopListening();localStorage.setItem('msa-english-ending',String(!englishVocabularyEnabled()));state.lastAutoKey=null;if(listeningSheetOpen)openListeningSheet();else openSheet();}
// Repetition and optional English belong only to the audio playbook.
function playVocabulary(word){playArabic(word);}
