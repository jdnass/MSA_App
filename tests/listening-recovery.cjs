const {readFileSync}=require('node:fs');
const vm=require('node:vm');
const assert=require('node:assert/strict');
let now=0,nextTimer=0;
const timers=new Map(),attached=new Set(),actions=new Map();
class Audio {
  constructor(){this.currentTime=0;this.duration=100;this.paused=true;this.ended=false;this.readyState=4;this.playCalls=0;}
  play(){this.playCalls++;this.paused=false;this.onplay?.();return Promise.resolve();}
  pause(){if(this.paused)return;this.paused=true;this.onpause?.();}
  load(){this.currentTime=0;}
  setAttribute(){} removeAttribute(){} remove(){attached.delete(this);}
}
const context={Audio,console,Date:class extends Date{static now(){return now;}},
  setTimeout(fn,delay){const id=++nextTimer;timers.set(id,{fn,at:now+delay});return id;},clearTimeout(id){timers.delete(id);},
  document:{visibilityState:'visible',body:{appendChild(a){attached.add(a);}}},
  navigator:{userAgent:'test',mediaSession:{setActionHandler(a,h){actions.set(a,h);},setPositionState(){}}},
  MosaListeningStream:{removeTrack:async()=>{}},URL,location:{href:'https://example.com/'}};
vm.createContext(context);vm.runInContext(readFileSync('passive-listening.js','utf8'),context);
function tick(ms){const end=now+ms;while(true){const due=[...timers].filter(([,t])=>t.at<=end).sort((a,b)=>a[1].at-b[1].at)[0];if(!due)break;now=due[1].at;timers.delete(due[0]);due[1].fn();}now=end;}
function player(){const p=new context.MosaPassivePlayer();p.url='https://example.com/listening-audio/test.mp3';p.entries=[{word:{id:'a'},start:0,end:100}];p.attachAudio();p.status='ready';p.bindSession();return p;}
(async()=>{
  // Normal progress, including encoded silence, never rebuilds the player.
  let p=player(),original=p.audio;await p.play();
  for(let i=0;i<12;i++){p.audio.currentTime+=1;tick(1000);}
  assert.equal(p.audio,original);assert.equal(actions.get('play'),null);assert.equal(actions.get('pause'),null);
  p.pause();tick(10000);assert.equal(p.audio,original);assert.equal(timers.size,0);p.stop();
  // Reproduce the report: native resume reports play, but its clock never moves.
  p=player();await p.play();p.audio.currentTime=49.590338168;p.audio.pause();
  original=p.audio;await original.play();tick(4000);
  assert.notEqual(p.audio,original);assert.equal(attached.size,1);assert(p.events.some(e=>e.event==='clock-stuck'));
  p.audio.onloadedmetadata();assert.equal(p.audio.currentTime,49.590338168);assert.equal(p.audio.playCalls,1);
  p.audio.currentTime+=1;tick(1000);assert(p.events.some(e=>e.event==='recovery-progress'));p.stop();
  // A user pause during recovery prevents a late metadata callback restarting it.
  p=player();await p.play();p.audio.currentTime=30;tick(5000);p.pause();
  p.audio.onloadedmetadata();assert.equal(p.audio.playCalls,0);assert.equal(p.audio.currentTime,30);assert.equal(p.status,'paused');p.stop();
  // Stop during recovery cannot resurrect an old player or leave timers behind.
  p=player();await p.play();tick(4000);const late=p.audio.onloadedmetadata;p.stop();late();
  assert.equal(p.audio,null);assert.equal(attached.size,0);assert.equal(timers.size,0);
  // A second frozen decoder fails once, without an endless reload/play loop.
  p=player();await p.play();tick(4000);p.audio.onloadedmetadata();tick(4000);
  assert.equal(p.status,'paused');assert.equal(p.audio.paused,true);assert.equal(timers.size,0);
  assert(p.events.some(e=>e.event==='resume-needs-tap'));p.stop();
  // Missing metadata also has a bounded timeout.
  p=player();await p.play();tick(12000);assert.equal(p.status,'paused');p.stop();
  // Autoplay refusal during recovery must request a user tap, not claim success.
  p=player();await p.play();tick(4000);p.audio.play=()=>Promise.reject(Error('NotAllowedError'));
  p.audio.onloadedmetadata();await Promise.resolve();assert.equal(p.status,'paused');p.stop();
  assert.equal(timers.size,0);assert.equal(JSON.parse(p.playbackReport()).playerVersion,101);
  console.log('PASS: advancing playback, frozen native resume, saved position, pause/stop races, bounded recovery, metadata timeout, autoplay refusal, native controls');
})().catch(error=>{console.error(error);process.exitCode=1;});
