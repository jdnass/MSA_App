/* One continuous MP3: the audio element, not background JavaScript timers,
   owns repetition and silence. Existing recordings are reused unchanged. */
(function(root){
  'use strict';
  function mp3Frames(buffer){
    const data=new Uint8Array(buffer),frames=[];
    let offset=0;
    if(String.fromCharCode(...data.slice(0,3))==='ID3'){
      offset=10+((data[6]&127)<<21)+((data[7]&127)<<14)+((data[8]&127)<<7)+(data[9]&127);
      if(data[5]&16)offset+=10;
    }
    while(offset+4<=data.length){
      const a=data[offset],b=data[offset+1],c=data[offset+2],d=data[offset+3];
      if(a!==255||(b&224)!==224)break; // trailing tags are not audio
      // Cedar recordings use MPEG-2 Layer III, 24 kHz, mono.
      if(((b>>3)&3)!==2||((b>>1)&3)!==1||((c>>2)&3)!==1||(d>>6)!==3)throw Error('Unsupported recording format');
      const kbps=[0,8,16,24,32,40,48,56,64,80,96,112,128,144,160][c>>4];
      if(!kbps)throw Error('Invalid MP3 bitrate');
      const size=Math.floor(72000*kbps/24000)+((c>>1)&1);
      if(offset+size>data.length)throw Error('Incomplete recording');
      const tag=String.fromCharCode(...data.slice(offset+13,offset+17));
      if(tag!=='Xing'&&tag!=='Info')frames.push(data.subarray(offset,offset+size));
      offset+=size;
    }
    if(!frames.length)throw Error('No audio in recording');
    return {frames,duration:frames.length*0.024};
  }
  function playlistBlob(parts){
    // A fresh Xing index gives native players the complete duration and seek map,
    // even when source recordings use different MP3 bitrates.
    const header=new Uint8Array(192);header.set([255,243,132,192]);
    header.set([88,105,110,103],13);
    const view=new DataView(header.buffer),count=parts.reduce((n,p)=>n+p.frames.length,0);
    const bytes=192+parts.reduce((n,p)=>n+p.frames.reduce((s,f)=>s+f.length,0),0);
    view.setUint32(17,7);view.setUint32(21,count);view.setUint32(25,bytes);
    const frames=parts.flatMap(p=>p.frames);let offset=192,index=0;
    for(let i=0;i<100;i++){
      const target=Math.floor(count*i/100);
      while(index<target)offset+=frames[index++].length;
      header[29+i]=Math.min(255,Math.floor(offset*256/bytes));
    }
    // Reuse each recording and silence Blob across repetitions. Passing over a
    // million individual frames to Blob on a full vocabulary list stalls phones.
    return new Blob([header,...parts.map(part=>part.blob||(part.blob=new Blob(part.frames)))],{type:'audio/mpeg'});
  }
  class PassivePlayer{
    constructor(onchange=()=>{}){
      this.onchange=onchange;this.audio=null;this.url=null;this.abort=null;
      this.status='idle';this.entries=[];this.skipped=0;this.progress=0;this.generation=0;this.playRequest=0;this.events=[];
      this.watchTimer=null;this.watchPosition=0;this.watchAt=0;this.recoveryAttempts=0;this.recovering=false;
    }
    notify(){this.onchange(this);}
    note(event){
      this.events.push({event,at:new Date().toISOString(),position:this.audio?.currentTime||0,paused:this.audio?.paused,readyState:this.audio?.readyState,visibility:document.visibilityState});
      if(this.events.length>60)this.events.shift();
    }
    playbackReport(){
      const audio=this.audio;
      return JSON.stringify({playerVersion:101,transport:'local-range-stream',userAgent:navigator.userAgent,mode:(root.matchMedia?.('(display-mode: standalone)').matches||navigator.standalone)?'Home Screen app':'browser',visibility:document.visibilityState,status:this.status,recovery:{attempts:this.recoveryAttempts,active:this.recovering},audioSession:{type:navigator.audioSession?.type,state:navigator.audioSession?.state},audio:audio?{position:audio.currentTime,duration:audio.duration,paused:audio.paused,ended:audio.ended,muted:audio.muted,volume:audio.volume,playbackRate:audio.playbackRate,readyState:audio.readyState,networkState:audio.networkState,error:audio.error?.code}:null,events:this.events},null,2);
    }
    async prepare(words,source){
      this.stop();this.events=[];const generation=this.generation;
      this.abort=new AbortController();const signal=this.abort.signal;
      this.status='preparing';this.progress=0;this.skipped=0;this.notify();
      try{
        const response=await fetch('./audio/listening-silence.mp3?v=97',{signal});
        if(!response.ok)throw Error('Could not load the listening pause');
        const silence=mp3Frames(await response.arrayBuffer());
        // 125 MPEG-2 frames at 24 kHz are exactly three seconds.
        const gap={frames:silence.frames.slice(0,125),duration:3};
        if(gap.frames.length!==125)throw Error('Invalid listening pause');
        const urls=[...new Set(words.map(source).filter(Boolean))],recordings=new Map();
        let cursor=0,done=0;
        const worker=async()=>{
          while(cursor<urls.length){
            const url=urls[cursor++];
            try{
              const response=await fetch(url,{signal});
              if(!response.ok)throw Error('Recording unavailable');
              recordings.set(url,mp3Frames(await response.arrayBuffer()));
            }catch(error){if(signal.aborted)throw error;recordings.set(url,null);}
            if(generation!==this.generation)return;
            this.progress=++done/urls.length;this.notify();
          }
        };
        await Promise.all(Array.from({length:Math.min(6,urls.length)},worker));
        if(generation!==this.generation)return;
        const parts=[];let time=0;
        this.entries=[];
        for(const word of words){
          const recording=recordings.get(source(word));
          if(!recording){this.skipped++;continue;}
          this.entries.push({word,start:time,repeat:time+recording.duration+3,end:time+2*recording.duration+6});
          parts.push(recording,gap,recording,gap);time+=2*recording.duration+6;
        }
        if(!this.entries.length)throw Error('No playable recordings match these filters.');
        const blob=playlistBlob(parts),url=await root.MosaListeningStream.storeTrack(blob,signal);
        if(generation!==this.generation){await root.MosaListeningStream.removeTrack(url);return;}
        this.url=url;this.attachAudio();
        this.status='ready';this.note('ready');this.bindSession();this.notify();
      }catch(error){
        if(generation!==this.generation||signal.aborted)return;
        this.status='error';this.error=error.message;this.notify();
      }
    }
    detachAudio(){
      const audio=this.audio;if(!audio)return;
      audio.onloadedmetadata=audio.onplaying=audio.onwaiting=audio.onstalled=audio.onplay=audio.onpause=audio.onended=audio.ontimeupdate=audio.onerror=null;
      audio.pause();audio.removeAttribute('src');audio.load();audio.remove();this.audio=null;
    }
    attachAudio(){
      const audio=this.audio=new Audio();audio.crossOrigin='anonymous';
      audio.src=this.url;audio.preload='auto';audio.hidden=true;audio.setAttribute('playsinline','');
      document.body.appendChild(audio);
      audio.onplay=()=>{
        this.note('play');this.status='playing';this.startWatch();this.updateSession();this.notify();
      };
      audio.onpause=()=>{
        this.playRequest++;this.clearWatch();this.recovering=false;this.note('pause');
        if(this.status!=='ended')this.status='paused';this.updateSession();this.notify();
      };
      audio.onended=()=>{this.clearWatch();this.recovering=false;this.note('ended');this.status='ended';this.updateSession();this.notify();};
      audio.ontimeupdate=()=>{
        const last=this.events.at(-1);if(last?.event==='progress'){last.position=audio.currentTime;last.at=new Date().toISOString();}else this.note('progress');
        this.updateSession();this.notify();
      };
      audio.onerror=()=>{this.clearWatch();this.recovering=false;this.note('error');this.status='error';this.error='Playback failed. Please prepare the list again.';this.notify();};
      audio.onplaying=()=>this.note('playing');
      audio.onwaiting=()=>this.note('waiting');audio.onstalled=()=>this.note('stalled');
    }
    clearWatch(){clearTimeout(this.watchTimer);this.watchTimer=null;}
    startWatch(){
      this.clearWatch();this.watchPosition=this.audio?.currentTime||0;this.watchAt=Date.now();
      this.watchTimer=setTimeout(()=>this.checkProgress(),1000);
    }
    checkProgress(){
      this.clearWatch();const audio=this.audio;
      if(!audio||audio.paused||audio.ended||this.status!=='playing')return;
      // Silence is encoded in the MP3, so even a three-second listening gap must
      // advance currentTime. A playing event alone is not proof of playback.
      if(Math.abs(audio.currentTime-this.watchPosition)>0.05){
        if(this.recovering){this.note('recovery-progress');this.recovering=false;}
        this.recoveryAttempts=0;this.watchPosition=audio.currentTime;this.watchAt=Date.now();
      }else if(Date.now()-this.watchAt>=4000){
        this.note('clock-stuck');
        if(this.recoveryAttempts===0){this.recover();return;}
        this.resumeFailed();return;
      }
      this.watchTimer=setTimeout(()=>this.checkProgress(),1000);
    }
    resumeFailed(){
      this.clearWatch();this.recovering=false;this.playRequest++;
      this.audio?.pause();this.status='paused';this.error='Playback could not resume. Open MoSA and tap Play to retry.';
      this.note('resume-needs-tap');this.updateSession();this.notify();
    }
    recover(){
      // Rebuild the native player only after a confirmed frozen clock. Keep
      // lock-screen play/pause native; never resume in response to a pause.
      const position=this.audio.currentTime,request=++this.playRequest;
      this.recoveryAttempts++;this.recovering=true;this.note('recovery-replace');
      this.detachAudio();this.attachAudio();const audio=this.audio;
      const valid=()=>this.audio===audio&&this.playRequest===request;
      audio.onloadedmetadata=()=>{
        audio.onloadedmetadata=null;if(this.audio!==audio)return;
        try{audio.currentTime=position;}catch(error){this.resumeFailed();return;}
        if(!valid())return;
        this.clearWatch();
        this.note('recovery-play');this.startWatch();
        audio.play().catch(()=>{if(valid())this.resumeFailed();});
      };
      // Also bound metadata loading: a failed recovery must not look like play.
      this.watchTimer=setTimeout(()=>{if(valid())this.resumeFailed();},8000);
      audio.load();this.notify();
    }
    current(){const time=this.audio?.currentTime||0;return this.entries.find(entry=>time<entry.end)||this.entries.at(-1);}
    async play(){
      if(!this.audio)return;
      const audio=this.audio,request=++this.playRequest;
      if(this.status==='ended')audio.currentTime=0;
      this.recoveryAttempts=0;this.error='';audio.muted=false;audio.volume=1;audio.playbackRate=1;
      try{if(navigator.audioSession)navigator.audioSession.type='playback';}catch(error){}
      this.note('app-play');
      try{
        await audio.play();
      }catch(error){
        if(this.audio!==audio||this.playRequest!==request)return;
        this.clearWatch();this.note('play-rejected');this.status='paused';this.error='Tap Play to resume listening.';this.updateSession();this.notify();
      }
    }
    pause(){this.playRequest++;this.clearWatch();this.recovering=false;this.note('app-pause');this.audio?.pause();this.status='paused';this.updateSession();this.notify();}
    seek(time){if(this.audio)this.audio.currentTime=Math.max(0,Math.min(this.entries.at(-1)?.end||0,time));this.note('seek');if(this.status==='playing'&&!this.recovering)this.startWatch();this.updateSession();this.notify();}
    skip(direction){const current=this.current(),index=this.entries.indexOf(current);this.seek(this.entries[Math.max(0,Math.min(this.entries.length-1,index+direction))]?.start||0);}
    bindSession(){
      if(!navigator.mediaSession)return;
      // Native play/pause must not depend on JavaScript running in a sleeping
      // Home Screen app. Null handlers return those actions to the browser.
      navigator.mediaSession.playbackState='none';
      for(const [action,handler] of Object.entries({play:null,pause:null,stop:()=>this.stop(),nexttrack:()=>this.skip(1),previoustrack:()=>this.skip(-1),seekto:event=>this.seek(event.seekTime),seekforward:event=>this.seek(this.audio.currentTime+(event.seekOffset||10)),seekbackward:event=>this.seek(this.audio.currentTime-(event.seekOffset||10))})){
        try{navigator.mediaSession.setActionHandler(action,handler);}catch(error){/* Some actions are unavailable on older browsers. */}
      }
      this.updateSession();
    }
    updateSession(){
      if(!navigator.mediaSession||!this.audio)return;
      const entry=this.current();
      if(entry&&this.metadataId!==entry.word.id&&typeof MediaMetadata!=='undefined'){
        this.metadataId=entry.word.id;
        navigator.mediaSession.metadata=new MediaMetadata({title:entry.word.en,artist:entry.word.ar,album:'MoSA · Vocabulary listening',artwork:[{src:new URL('./icons/moza-icon-512.png',location.href).href,sizes:'512x512',type:'image/png'}]});
      }
      // Leave playbackState at 'none' so the browser derives it from the native
      // media element even while this page's JavaScript is suspended.
      try{const duration=this.audio.duration;if(Number.isFinite(duration)&&duration>0)navigator.mediaSession.setPositionState?.({duration,position:Math.min(duration,this.audio.currentTime),playbackRate:1});}catch(error){}
    }
    stop(){
      this.generation++;this.playRequest++;
      this.abort?.abort();this.abort=null;
      this.clearWatch();this.recovering=false;this.recoveryAttempts=0;this.detachAudio();
      if(this.url)root.MosaListeningStream.removeTrack(this.url).catch(()=>{});this.url=null;
      if(this.status!=='idle'&&navigator.mediaSession){
        navigator.mediaSession.playbackState='none';navigator.mediaSession.metadata=null;
        for(const action of ['play','pause','stop','nexttrack','previoustrack','seekto','seekforward','seekbackward'])try{navigator.mediaSession.setActionHandler(action,null);}catch(error){}
      }
      this.status='idle';this.entries=[];this.metadataId=null;this.error='';this.notify();
    }
  }
  root.MosaPassivePlayer=PassivePlayer;
  // Export the pure audio assembler for validation without a browser.
  root.MosaListeningAudio={mp3Frames,playlistBlob};
})(typeof window!=='undefined'?window:globalThis);

