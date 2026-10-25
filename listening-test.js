/* Opt-in comparisons; experimental session reactivation runs only on remote Play. */
(function(){
  'use strict';
  const VERSION=103,source=new URL('./audio/listening-control.mp3',location.href).href;
  const $=id=>document.getElementById(id),audio=$('test-audio');
  const standalone=!!(matchMedia('(display-mode: standalone)').matches||navigator.standalone);
  let run=null,history=[],localURL=null,loading=false,controller=null,generation=0,workerVersion=null,actionRequest=0;
  function ranges(value){try{return Array.from({length:value.length},(_,i)=>[value.start(i),value.end(i)]);}catch(error){return [];}}
  function state(){return {position:audio.currentTime,duration:Number.isFinite(audio.duration)?audio.duration:null,paused:audio.paused,ended:audio.ended,readyState:audio.readyState,networkState:audio.networkState,seeking:audio.seeking,playbackRate:audio.playbackRate,muted:audio.muted,volume:audio.volume,buffered:ranges(audio.buffered),seekable:ranges(audio.seekable),error:audio.error?{code:audio.error.code,message:audio.error.message}:null};}
  function note(event,detail){
    if(!run)return;
    const entry={event,at:new Date().toISOString(),visibility:document.visibilityState,audioSessionType:navigator.audioSession?.type,...state()};
    if(detail)entry.detail=detail;
    const last=run.events.at(-1);
    // Keep the first and latest position in each uninterrupted progress span.
    if(event==='timeupdate'&&last?.event==='timeupdate'&&last.visibility===entry.visibility){
      entry.from=last.from||{at:last.at,position:last.position};run.events[run.events.length-1]=entry;
    }else run.events.push(entry);
    if(run.events.length>160)run.events.shift();
  }
  function snapshot(){return run?{...run,events:run.events.slice(),snapshot:state()}:null;}
  function report(){return JSON.stringify({diagnosticVersion:VERSION,mode:standalone?'Home Screen app':'browser',userAgent:navigator.userAgent,visibility:document.visibilityState,workerVersion,audioSession:{type:navigator.audioSession?.type,state:navigator.audioSession?.state},tests:[...history,...(run?[snapshot()]:[])]},null,2);}
  function resetActions(){
    actionRequest++;
    if(!navigator.mediaSession)return;
    navigator.mediaSession.playbackState='none';navigator.mediaSession.metadata=null;
    for(const action of ['play','pause','stop','nexttrack','previoustrack','seekto','seekforward','seekbackward'])try{navigator.mediaSession.setActionHandler(action,null);}catch(error){}
  }
  function bindReactivation(){
    if(run.resumeMode!=='reactivate')return;
    if(!navigator.audioSession||!navigator.mediaSession)throw Error('This browser does not expose the audio-session controls required for this test.');
    const target=run;
    const active=()=>run===target&&target.outcome===null&&!loading&&!!audio.src;
    const pause=()=>{if(!active())return;actionRequest++;note('remote-pause');audio.pause();navigator.mediaSession.playbackState='paused';};
    navigator.mediaSession.setActionHandler('play',()=>{
      if(!active())return;
      const request=++actionRequest,valid=()=>active()&&actionRequest===request;
      note('remote-play');
      try{
        // Stay in this user-initiated callback: no load, seek, new element,
        // timer, or awaited operation before play. Test category reapplication.
        navigator.audioSession.type='auto';note('session-reset-auto');
        navigator.audioSession.type='playback';note('session-reset-playback');
        Promise.resolve(audio.play()).then(()=>{if(valid())note('remote-play-resolved');},error=>{
          if(!valid())return;note('remote-play-rejected',{name:error.name,message:error.message});
          navigator.mediaSession.playbackState='paused';$('status').textContent='Resume was rejected. Record the result and copy the test report.';
        });
      }catch(error){if(valid()){note('session-reactivation-error',{name:error.name,message:error.message});navigator.mediaSession.playbackState='paused';$('status').textContent='Session reactivation failed. Copy the test report.';}}
    });
    navigator.mediaSession.setActionHandler('pause',pause);
    navigator.mediaSession.setActionHandler('stop',()=>{if(active()){note('remote-stop');pause();}});
    note('reactivation-handlers-bound');
  }
  function clearAudio(){resetActions();audio.pause();audio.removeAttribute('src');audio.load();}
  async function release(){
    const url=localURL;localURL=null;
    if(url?.startsWith('blob:'))URL.revokeObjectURL(url);
    else if(url)await window.MosaListeningStream.removeTrack(url);
  }
  async function workerCheck(){
    if(!navigator.serviceWorker?.controller)return;
    workerVersion=await new Promise(resolve=>{
      const channel=new MessageChannel(),timer=setTimeout(()=>finish(null),2500);
      function finish(value){clearTimeout(timer);channel.port1.close();channel.port2.close();resolve(value);}
      channel.port1.onmessage=event=>finish(event.data?.listeningDiagnosticVersion||null);
      navigator.serviceWorker.controller.postMessage({type:'MOSA_LISTENING_CAPABILITIES'},[channel.port2]);
    });
    if(workerVersion!==VERSION)throw Error('MoSA is updating. Close and reopen MoSA, then open Playback test again.');
  }
  async function load(){
    if(loading)return;loading=true;const request=++generation;controller=new AbortController();
    $('load').disabled=true;$('worked').disabled=$('failed').disabled=true;
    if(run){note('test-switch');history.push(snapshot());history=history.slice(-5);run=null;}
    clearAudio();
    try{
      await release();await workerCheck();
      if(request!==generation)return;
      const transport=$('transport').value,sessionType=$('session-type').value;
      run={transport,requestedSessionType:sessionType,resumeMode:$('resume-mode').value,startedAt:new Date().toISOString(),outcome:null,events:[]};
      $('status').textContent='Loading test audio…';note('test-load');
      try{if(navigator.audioSession)navigator.audioSession.type=sessionType;}catch(error){note('session-setting-error',error.message);}
      // Native baseline remains available. Neither mode uses a watchdog or
      // repeated metadata/position updates.
      resetActions();bindReactivation();
      let url=source;
      if(transport!=='direct'){
        const response=await fetch(source,{signal:controller.signal});
        if(!response.ok)throw Error('Could not load the test recording.');
        const blob=await response.blob();
        if(request!==generation)return;
        url=transport==='blob'?URL.createObjectURL(blob):await window.MosaListeningStream.storeTrack(blob,controller.signal);
        if(request!==generation){if(url.startsWith('blob:'))URL.revokeObjectURL(url);else await window.MosaListeningStream.removeTrack(url);return;}
        localURL=url;
      }
      if(request!==generation)return;
      audio.src=url;audio.load();note('source-set');
      $('worked').disabled=$('failed').disabled=false;
      $('status').textContent='Ready. Tap Play in the audio controls, then follow the steps below.';
    }catch(error){if(request!==generation)return;resetActions();note('load-error',error.message);$('status').textContent=error.message;}
    finally{if(request===generation){loading=false;$('load').disabled=false;}}
  }
  function outcome(value){if(!run)return;run.outcome=value;note('user-result',value);audio.pause();resetActions();$('status').textContent='Result recorded. Copy the report, or load the next test.';}
  for(const event of ['loadstart','loadedmetadata','loadeddata','canplay','canplaythrough','play','playing','pause','waiting','stalled','suspend','seeking','seeked','ratechange','volumechange','ended','error','timeupdate'])audio.addEventListener(event,()=>{
    note(event);
    if(event==='pause'||event==='ended'||event==='error')actionRequest++;
    if(run?.resumeMode==='reactivate'&&run.outcome===null&&navigator.mediaSession&&['play','pause','ended','error'].includes(event))navigator.mediaSession.playbackState=audio.paused||audio.ended||audio.error?'paused':'playing';
  });
  document.addEventListener('visibilitychange',()=>note('visibilitychange'));
  window.addEventListener('pageshow',event=>note('pageshow',{persisted:event.persisted}));
  window.addEventListener('pagehide',event=>{note('pagehide',{persisted:event.persisted});if(!event.persisted){generation++;controller?.abort();clearAudio();release().catch(()=>{});}});
  navigator.audioSession?.addEventListener?.('statechange',()=>note('audio-session-statechange',{state:navigator.audioSession.state}));
  $('load').addEventListener('click',load);
  $('worked').addEventListener('click',()=>outcome('resumed-audibly'));
  $('failed').addEventListener('click',()=>outcome('did-not-resume-audibly'));
  $('copy').addEventListener('click',async()=>{
    const text=report();
    try{await navigator.clipboard.writeText(text);$('copy-status').textContent='Test report copied.';}
    catch(error){$('report').hidden=false;$('report').value=text;$('report').focus();$('report').select();$('copy-status').textContent='Select and copy the report below.';}
  });
  $('back').addEventListener('click',()=>{generation++;controller?.abort();clearAudio();release().catch(()=>{});});
  $('mode').textContent=`Test version ${VERSION} · ${standalone?'Home Screen app':'Safari / browser'}`;
})();
