/* Local, same-origin media transport. Audio stays on this device. */
(function(root){
  'use strict';
  const CACHE='mosa-listening-tracks-v1',VERSION=100,CHUNK_SIZE=1024*1024;
  function path(scope){return new URL('./listening-audio/',scope).pathname;}
  function matches(url,scope){const candidate=new URL(url),base=new URL(scope);return candidate.origin===base.origin&&candidate.pathname.startsWith(path(scope));}
  async function respond(request){
    const cache=await caches.open(CACHE),cached=await cache.match(request.url);
    if(!cached)return new Response('Listening session expired. Prepare audio again.',{status:410});
    const {size,chunkSize}=await cached.json();
    const headers=new Headers({'Content-Type':'audio/mpeg','Content-Length':String(size),'Accept-Ranges':'bytes','Cache-Control':'no-store'});
    if(request.method==='HEAD')return new Response(null,{status:200,headers});
    const range=request.headers.get('Range'),match=range?.match(/^bytes=(\d*)-(\d*)$/);
    // Unsupported range syntax, including multiple ranges, may be ignored.
    let start=0,end=size-1,status=200;
    if(match){
      start=match[1]?Number(match[1]):null;end=match[2]?Number(match[2]):null;
      if(start===null&&end!==null){start=Math.max(0,size-end);end=size-1;}
      else if(end===null)end=size-1;
      const valid=Number.isSafeInteger(start)&&Number.isSafeInteger(end)&&start>=0&&start<size&&end>=start;
      if(!valid){headers.set('Content-Range',`bytes */${size}`);headers.set('Content-Length','0');return new Response(null,{status:416,headers});}
      end=Math.min(end,size-1);status=206;
      headers.set('Content-Range',`bytes ${start}-${end}/${size}`);headers.set('Content-Length',String(end-start+1));
    }
    let position=start,cancelled=false;
    const stream=new ReadableStream({
      async pull(controller){
        if(position>end){controller.close();return;}
        try{
          const index=Math.floor(position/chunkSize),response=await cache.match(`${request.url}.part-${index}`);
          if(!response)throw Error('Listening session expired. Prepare audio again.');
          const bytes=new Uint8Array(await response.arrayBuffer());
          if(cancelled)return;
          const offset=position%chunkSize,length=Math.min(bytes.length-offset,end-position+1);
          if(length<=0)throw Error('Incomplete listening audio.');
          controller.enqueue(bytes.subarray(offset,offset+length));position+=length;
        }catch(error){if(!cancelled)controller.error(error);}
      },
      cancel(){cancelled=true;}
    });
    return new Response(stream,{status,headers});
  }
  function waitForWorker(signal){
    return new Promise((resolve,reject)=>{
      const worker=navigator.serviceWorker;let channel,timer;
      const cleanup=()=>{clearTimeout(timer);channel?.port1.close();channel?.port2.close();worker?.removeEventListener('controllerchange',ping);signal?.removeEventListener('abort',abort);};
      const fail=error=>{cleanup();reject(error);};
      const abort=()=>fail(Error('Listening preparation cancelled.'));
      const ping=()=>{
        if(!worker?.controller)return;
        channel?.port1.close();channel?.port2.close();channel=new MessageChannel();
        channel.port1.onmessage=event=>{if(event.data?.listeningStreamVersion===VERSION){cleanup();resolve();}};
        worker.controller.postMessage({type:'MOSA_LISTENING_CAPABILITIES'},[channel.port2]);
      };
      if(!worker){fail(Error('Listening needs a secure browser with offline support.'));return;}
      if(signal?.aborted){abort();return;}
      timer=setTimeout(()=>fail(Error('MoSA is updating. Reopen the app, then prepare audio again.')),5000);
      signal?.addEventListener('abort',abort,{once:true});worker.addEventListener('controllerchange',ping);ping();
    });
  }
  async function storeTrack(blob,signal){
    await waitForWorker(signal);signal?.throwIfAborted();
    const cache=await caches.open(CACHE),url=new URL(`./listening-audio/${Date.now()}-${crypto.randomUUID()}.mp3`,location.href).href;
    // Reclaim abandoned sessions after a day; active sessions in other tabs stay.
    for(const request of await cache.keys()){
      const timestamp=Number(new URL(request.url).pathname.split('/').pop().split('-')[0]);
      if(timestamp&&Date.now()-timestamp>86400000)await cache.delete(request);
    }
    const written=[];
    try{
      for(let start=0,index=0;start<blob.size;start+=CHUNK_SIZE,index++){
        signal?.throwIfAborted();const key=`${url}.part-${index}`;written.push(key);
        await cache.put(key,new Response(blob.slice(start,start+CHUNK_SIZE),{headers:{'Content-Type':'application/octet-stream'}}));
      }
      signal?.throwIfAborted();written.push(url);
      await cache.put(url,new Response(JSON.stringify({size:blob.size,chunkSize:CHUNK_SIZE,chunks:Math.ceil(blob.size/CHUNK_SIZE)}),{headers:{'Content-Type':'application/json'}}));
      // Verify the active worker, not a stale worker or an HTML fallback, serves
      // Safari's initial two-byte probe before making the Play button available.
      const probe=await fetch(url,{headers:{Range:'bytes=0-1'},cache:'no-store',signal});
      if(probe.status!==206||probe.headers.get('Content-Range')!==`bytes 0-1/${blob.size}`)throw Error('MoSA is updating. Reopen the app, then prepare audio again.');
      await probe.body?.cancel();signal?.throwIfAborted();
      return url;
    }catch(error){for(const key of written)await cache.delete(key);throw error;}
  }
  async function removeTrack(url){
    const cache=await caches.open(CACHE),response=await cache.match(url);
    if(response){const metadata=await response.json();for(let i=0;i<metadata.chunks;i++)await cache.delete(`${url}.part-${i}`);}
    await cache.delete(url);
  }
  root.MosaListeningStream={CACHE,VERSION,matches,respond,waitForWorker,storeTrack,removeTrack};
})(typeof window!=='undefined'?window:globalThis);
