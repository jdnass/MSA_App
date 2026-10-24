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
    }
    notify(){this.onchange(this);}
    note(event){
      this.events.push({event,at:new Date().toISOString(),position:this.audio?.currentTime||0,paused:this.audio?.paused,readyState:this.audio?.readyState});
      if(this.events.length>30)this.events.shift();
    }
    playbackReport(){
      const audio=this.audio;
      return JSON.stringify({playerVersion:100,transport:'local-range-stream',userAgent:navigator.userAgent,mode:(root.matchMedia?.('(display-mode: standalone)').matches||navigator.standalone)?'Home Screen app':'browser',visibility:document.visibilityState,status:this.status,audioSession:{type:navigator.audioSession?.type,state:navigator.audioSession?.state},audio:audio?{position:audio.currentTime,duration:audio.duration,paused:audio.paused,ended:audio.ended,muted:audio.muted,volume:audio.volume,readyState:audio.readyState,networkState:audio.networkState,error:audio.error?.code}:null,events:this.events},null,2);
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
        this.url=url;this.audio=new Audio();this.audio.crossOrigin='anonymous';
        this.audio.src=this.url;this.audio.preload='auto';
        // Keep the native media element connected while the page is backgrounded.
        // It lives outside the study view, which is replaced during navigation.
        this.audio.hidden=true;this.audio.setAttribute('playsinline','');
        document.body.appendChild(this.audio);
        this.audio.onplay=()=>{this.note('play');this.status='playing';this.updateSession();this.notify();};
        this.audio.onpause=()=>{this.playRequest++;this.note('pause');if(this.status!=='ended')this.status='paused';this.updateSession();this.notify();};
        this.audio.onended=()=>{this.note('ended');this.status='ended';this.updateSession();this.notify();};
        this.audio.ontimeupdate=()=>{const last=this.events.at(-1);if(last?.event==='progress'){last.position=this.audio.currentTime;last.at=new Date().toISOString();}else this.note('progress');this.updateSession();this.notify();};
        this.audio.onerror=()=>{this.note('error');this.status='error';this.error='Playback failed. Please prepare the list again.';this.notify();};
        this.audio.onplaying=()=>this.note('playing');
        this.audio.onwaiting=()=>this.note('waiting');
        this.audio.onstalled=()=>this.note('stalled');
        this.status='ready';this.note('ready');this.bindSession();this.notify();
      }catch(error){
        if(generation!==this.generation||signal.aborted)return;
        this.status='error';this.error=error.message;this.notify();
      }
    }
    current(){const time=this.audio?.currentTime||0;return this.entries.find(entry=>time<entry.end)||this.entries.at(-1);}
    async play(){
      if(!this.audio)return;
      const audio=this.audio,request=++this.playRequest;
      if(this.status==='ended')audio.currentTime=0;
      audio.muted=false;audio.volume=1;
      try{if(navigator.audioSession)navigator.audioSession.type='playback';}catch(error){}
      this.note('app-play');
      try{
        await audio.play();
      }catch(error){
        if(this.audio!==audio||this.playRequest!==request)return;
        this.note('play-rejected');this.status='paused';this.error='Tap Play to resume listening.';this.updateSession();this.notify();
      }
    }
    pause(){this.playRequest++;this.audio?.pause();}
    seek(time){if(this.audio)this.audio.currentTime=Math.max(0,Math.min(this.entries.at(-1)?.end||0,time));this.updateSession();this.notify();}
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
      if(this.audio){this.audio.onplaying=this.audio.onwaiting=this.audio.onstalled=this.audio.onplay=this.audio.onpause=this.audio.onended=this.audio.ontimeupdate=this.audio.onerror=null;this.audio.pause();this.audio.removeAttribute('src');this.audio.load();this.audio.remove();this.audio=null;}
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
