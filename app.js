
const T={
 es:{play:'Jugar',puzzles:'Puzzles',library:'Biblioteca',learn:'Aprender',drills:'Drills',soon:'pronto',login:'Entrar con Lichess',logout:'Salir',time:'Elige el tiempo',rated:'Partida con rating',go:'Jugar ahora',cancel:'Cancelar búsqueda',hint:'Juegas contra personas reales de Lichess, con tu cuenta y tu rating.',other:'EN',botlbl:'Probar contra un bot',bot:'Empezar',search:'Buscando rival…',fail:'No se pudo: ',resign:'Rendirse',abort:'Abortar',draw:'Tablas',again:'Revancha',mute:'Silenciar chat del rival',chatph:'Escribe un mensaje',won:'Ganaste',lost:'Perdiste',drew:'Tablas',need:'Sal y vuelve a entrar para dar el permiso nuevo.',
  why:{mate:'jaque mate',resign:'abandono',outoftime:'tiempo',timeout:'tiempo',draw:'acuerdo',stalemate:'ahogado',aborted:'partida abortada',noStart:'sin comenzar'}},
 en:{play:'Play',puzzles:'Puzzles',library:'Library',learn:'Learn',drills:'Drills',soon:'soon',login:'Log in with Lichess',logout:'Log out',time:'Choose a time',rated:'Rated game',go:'Play now',cancel:'Cancel search',hint:'You play real Lichess players, with your account and rating.',other:'ES',botlbl:'Try a bot',bot:'Start',search:'Looking for an opponent…',fail:'Failed: ',resign:'Resign',abort:'Abort',draw:'Draw',again:'Rematch',mute:'Mute opponent chat',chatph:'Type a message',won:'You won',lost:'You lost',drew:'Draw',need:'Log out and back in to grant the new permission.',
  why:{mate:'checkmate',resign:'resignation',outoftime:'time',timeout:'time',draw:'agreement',stalemate:'stalemate',aborted:'aborted',noStart:'not started'}}};
let lang=localStorage.lang||'es',user=null,tc='10+0',G=null,seekAbort=null,cg;
const $=s=>document.querySelector(s),API='https://lichess.org';
const hdr=()=>({Authorization:'Bearer '+localStorage.tok});
const post=(p,b)=>fetch(API+p,{method:'POST',headers:{...hdr(),'Content-Type':'application/x-www-form-urlencoded'},body:b?new URLSearchParams(b):undefined});
const msg=t=>$('#msg').textContent=t||'';

// board: slate squares + our pieces
const sq=[];for(let r=0;r<8;r++)for(let f=0;f<8;f++)if((r+f)%2)sq.push(`<rect x='${f}' y='${r}' width='1' height='1'/>`);
const svg=`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'><rect width='8' height='8' fill='#b9c5da'/><g fill='#5f7597'>${sq.join('')}</g></svg>`;
document.documentElement.style.setProperty('--board',`url("data:image/svg+xml,${encodeURIComponent(svg)}")`);
const R={pawn:'P',knight:'N',bishop:'B',rook:'R',queen:'Q',king:'K'};
let css='';for(const c of['white','black'])for(const r in R)css+=`.cg-wrap piece.${r}.${c}{background-image:url(pieces/${c[0]}${R[r]}.svg)}`;
document.head.insertAdjacentHTML('beforeend',`<style>${css}</style>`);
cg=Chessground.Chessground($('#cg'),{fen:'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR',movable:{free:true,color:'both'}});

// text
function paint(){
  const L=T[lang];document.documentElement.lang=lang;
  document.querySelectorAll('[data-i]').forEach(e=>e.textContent=L[e.dataset.i]);
  document.querySelectorAll('[data-ph]').forEach(e=>e.placeholder=L[e.dataset.ph]);
  $('#lang').textContent=L.other;
  $('#auth').textContent=user?`${user.username} · ${L.logout}`:L.login;
  $('#resign').textContent=G&&G.n<2?L.abort:L.resign;
}
$('#lang').onclick=()=>{lang=lang=='es'?'en':'es';localStorage.lang=lang;paint();if(!$('#puzp').hidden){SET&&!SET.pause&&PZ?info():view()}else if(!$('#libp').hidden)libView()};
$('#presets').onclick=e=>{const b=e.target.closest('button');if(!b)return;
  document.querySelectorAll('#presets button').forEach(x=>x.classList.toggle('sel',x==b));tc=b.dataset.t};
const START='rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
function resetBoard(){cg.set({fen:START,viewOnly:false,lastMove:undefined,check:false,orientation:'white',movable:{free:true,color:'both',events:{}}});cg.setShapes([]);
  ['#oppn','#myn'].forEach(s=>$(s).textContent='');['#oc','#mc'].forEach(s=>$(s).textContent='--:--')}
function show(w){$('#playp').hidden=w!='play';$('#gamep').hidden=w!='game';$('#puzp').hidden=w!='puz';$('#libp').hidden=w!='lib';
  document.querySelectorAll('nav a[data-v]').forEach(a=>a.classList.toggle('on',a.dataset.v==(w=='game'?(G&&G.lib?'lib':'play'):w)));
  if(w=='play'){clearBadge();G=null;resetBoard()}
  if(w=='puz'){clearBadge();G=null;resetBoard();view()}
  if(w=='lib'){clearBadge();G=null;resetBoard();LIB.book=null;LIB.cur=null;libView()}}
$('#navplay').onclick=()=>show('play');$('#navpuz').onclick=()=>show('puz');$('#navlib').onclick=()=>show('lib');

// Lichess login (OAuth PKCE, no secret needed)
const CID='enroque-local',REDIR=location.origin+location.pathname;
const b64=b=>btoa(String.fromCharCode(...new Uint8Array(b))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
async function login(){
  const v=b64(crypto.getRandomValues(new Uint8Array(32)));
  const ch=b64(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(v)));
  sessionStorage.v=v;const st=b64(crypto.getRandomValues(new Uint8Array(16)));sessionStorage.st=st;
  location.href=API+'/oauth?'+new URLSearchParams({response_type:'code',client_id:CID,redirect_uri:REDIR,scope:'board:play challenge:write puzzle:read',code_challenge_method:'S256',code_challenge:ch,state:st});
}
async function finish(){
  const q=new URLSearchParams(location.search),code=q.get('code');if(!code)return;
  if(q.get('state')!==sessionStorage.st){history.replaceState(null,'',REDIR);return}
  try{const r=await fetch(API+'/api/token',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},
      body:new URLSearchParams({grant_type:'authorization_code',code,code_verifier:sessionStorage.v,redirect_uri:REDIR,client_id:CID})});
    const j=await r.json();if(j.access_token)localStorage.tok=j.access_token;}catch(e){console.error(e)}
  history.replaceState(null,'',REDIR);
}
async function me(){
  if(!localStorage.tok)return null;
  try{const r=await fetch(API+'/api/account',{headers:hdr()});if(!r.ok){delete localStorage.tok;return null}return r.json()}catch(e){return null}
}
$('#auth').onclick=()=>{if(user){delete localStorage.tok;user=null;paint()}else login()};

// streaming (ndjson)
async function stream(p,on,opt={}){
  try{const r=await fetch(API+p,{headers:hdr(),...opt});const rd=r.body.getReader(),d=new TextDecoder();let b='';
    for(;;){const{done,value}=await rd.read();if(done)break;b+=d.decode(value,{stream:true});const L=b.split('\n');b=L.pop();
      for(const l of L)if(l.trim())on(JSON.parse(l))}
  }catch(e){if(e.name!='AbortError')console.error(e)}
}

// find an opponent
$('#go').onclick=async()=>{
  if(!user)return login();
  const[m,i]=tc.split('+');seekAbort=new AbortController();msg(T[lang].search);$('#go').hidden=true;$('#cancel').hidden=false;
  try{await fetch(API+'/api/board/seek',{method:'POST',signal:seekAbort.signal,headers:{...hdr(),'Content-Type':'application/x-www-form-urlencoded'},
    body:new URLSearchParams({rated:$('#rated').checked,time:m,increment:i,color:'random'})})}catch(e){}
  $('#go').hidden=false;$('#cancel').hidden=true;msg('');
};
$('#cancel').onclick=()=>seekAbort&&seekAbort.abort();

// play a bot (Stockfish via Lichess AI, Maia via its bot account)
$('#bot').onclick=async()=>{
  if(!user)return login();
  const[m,i]=tc.split('+'),v=$('#bsel').value,c={'clock.limit':m*60,'clock.increment':+i};
  const r=v.startsWith('ai')?await post('/api/challenge/ai',{level:v.slice(2),...c}):await post('/api/challenge/'+v,{rated:false,...c});
  if(!r.ok){const t=await r.text();msg(r.status==401||r.status==403?T[lang].need:T[lang].fail+t.slice(0,120))}
};

// game

// sounds: synthesized, nothing to download
let ac;
function tone(f,t,d,v,ty='sine'){const o=ac.createOscillator(),g=ac.createGain();o.type=ty;o.frequency.setValueAtTime(f,t);o.frequency.exponentialRampToValueAtTime(f*.6,t+d);
  g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g).connect(ac.destination);o.start(t);o.stop(t+d)}
function knock(v,fr){const n=ac.sampleRate*.035|0,b=ac.createBuffer(1,n,ac.sampleRate),d=b.getChannelData(0);
  for(let i=0;i<n;i++)d[i]=(Math.random()*2-1)*Math.exp(-i/(n*.16));
  const s=ac.createBufferSource(),f=ac.createBiquadFilter(),g=ac.createGain();s.buffer=b;f.type='bandpass';f.frequency.value=fr;f.Q.value=1.1;g.gain.value=v;
  s.connect(f).connect(g).connect(ac.destination);s.start()}
function sound(k){try{ac=ac||new(window.AudioContext||window.webkitAudioContext)();ac.resume();const t=ac.currentTime;
  if(k=='move'){knock(.8,1700);tone(190,t,.09,.22)}
  else if(k=='cap'){knock(1.2,1200);knock(.6,2600);tone(140,t,.12,.3)}
  else if(k=='check')tone(990,t,.16,.07,'triangle')
  else if(k=='mate'){tone(523,t,.5,.1);tone(392,t+.14,.6,.1);tone(262,t+.28,.9,.12)}
  else if(k=='end'){tone(440,t,.4,.08);tone(330,t+.15,.6,.08)}
  else if(k=='ok'){tone(660,t,.12,.08);tone(880,t+.08,.22,.07,'triangle')}
  else if(k=='bad')tone(200,t,.24,.12,'triangle')}catch(e){}}
function badge(pos){const k=Chessops.makeSquare(pos.board.kingOf(pos.turn)),f=k.charCodeAt(0)-97,r=+k[1],w=G.color=='white',x=w?f:7-f,y=w?8-r:r-1,bd=$('.board');
  const b=document.createElement('div');b.className='mate';b.innerHTML='<span>#</span>';b.style.left=x*12.5+'%';b.style.top=y*12.5+'%';b.style.fontSize=bd.clientWidth/8*.3+'px';bd.appendChild(b)}
const clearBadge=()=>document.querySelectorAll('.mate').forEach(e=>e.remove());
const nm=p=>(p.name||(p.aiLevel?'Stockfish '+p.aiLevel:p.id||'?'))+(p.rating?` (${p.rating})`:'');
function openGame(id){
  if(G&&G.id==id)return;
  clearBadge();G={id,n:0,t:null,lib:LIBGAME};LIBGAME=null;$('#res').textContent='';$('#chat').innerHTML='';$('#moves').textContent='';
  $('#resign').hidden=$('#draw').hidden=false;$('#again').hidden=true;show('game');paint();
  $('#ginfo').hidden=!G.lib;if(G.lib)$('#ginfo').textContent=libLabel(G.lib);
  stream(`/api/board/game/stream/${id}`,m=>onGame(id,m));
}
function onGame(id,m){
  if(!G||G.id!=id)return;
  if(m.type=='gameFull'){
    G.color=m.white.id==user.id?'white':'black';G.opp=G.color=='white'?m.black:m.white;G.clock=m.clock;G.rated=m.rated;G.init=m.initialFen;
    cg.set({orientation:G.color});$('#oppn').textContent=nm(G.opp);$('#myn').textContent=nm(G.color=='white'?m.white:m.black);apply(m.state);
  }else if(m.type=='gameState')apply(m);
  else if(m.type=='chatLine'){const mine=m.username==user.username;if(mine||!$('#mute').checked){
    const c=$('#chat');c.insertAdjacentText('beforeend',`${m.username}: ${m.text}\n`);c.style.whiteSpace='pre-wrap';c.scrollTop=c.scrollHeight}}
}
function apply(s){
  const prev=G.n,first=!G.seen,pos=G.init&&G.init!='startpos'?load(G.init):Chessops.Chess.default(),odd=pos.turn=='black'?1:0,sans=[];let last;
  for(const u of s.moves.split(' ').filter(Boolean)){const mv=Chessops.parseUci(u);sans.push(Chessops.makeSanAndPlay(pos,mv));last=[Chessops.makeSquare(mv.from),Chessops.makeSquare(mv.to)]}
  const ls=sans[sans.length-1]||'';
  if(!first&&sans.length>prev){if(G.own!=sans.length)sound(ls.includes('x')?'cap':'move');
    if(/[+#]/.test(ls))setTimeout(()=>sound(ls.includes('#')?'mate':'check'),70)}
  G.seen=true;G.n=sans.length;const over=!['created','started'].includes(s.status),mine=!over&&pos.turn==G.color;
  cg.set({fen:Chessops.makeFen(pos.toSetup()),turnColor:pos.turn,lastMove:last,check:pos.isCheck(),viewOnly:over,
    movable:{free:false,color:G.color,dests:mine?Chessops.chessgroundDests(pos):new Map(),events:{after:onMove}}});
  $('#moves').innerHTML=sans.map((x,i)=>{const k=i+odd,n=(k>>1)+1;return k%2?(i?x:`<b>${n}…</b> ${x}`):`<b>${n}.</b> ${x}`}).join(' ');$('#moves').scrollTop=1e5;
  G.t={white:s.wtime,black:s.btime};G.at=Date.now();G.turn=over?null:pos.turn;clocks();paint();
  if(over){if(!first&&!G.over&&s.status!='mate')sound('end');if(G.lib&&!G.over&&s.winner==G.color)libSolved(G.lib);G.over=true;if(s.status=='mate'){clearBadge();badge(pos)}
    const L=T[lang];$('#res').textContent=(s.winner?(s.winner==G.color?L.won:L.lost):L.drew)+' · '+(L.why[s.status]||s.status);
    $('#resign').hidden=$('#draw').hidden=true;$('#again').hidden=false}
}
function onMove(o,d,m){sound(m&&m.captured?'cap':'move');G.own=G.n+1;let u=o+d;const p=cg.state.pieces.get(d);if(p&&p.role=='pawn'&&(d[1]=='8'||d[1]=='1'))u+='q';post(`/api/board/game/${G.id}/move/${u}`)}
function clocks(){
  if(!G||!G.t)return;if(!G.clock){$('#mc').textContent=$('#oc').textContent='--:--';return}const el=Date.now()-G.at,f=ms=>{const s=Math.ceil(Math.max(0,ms)/1000);return Math.floor(s/60)+':'+String(s%60).padStart(2,'0')};
  const t=c=>G.t[c]-(G.turn==c&&G.n>1?el:0),o=G.color=='white'?'black':'white';
  $('#mc').textContent=f(t(G.color));$('#oc').textContent=f(t(o));
}
setInterval(clocks,200);
$('#resign').onclick=()=>post(`/api/board/game/${G.id}/${G.n<2?'abort':'resign'}`);
$('#draw').onclick=()=>post(`/api/board/game/${G.id}/draw/yes`);
$('#again').onclick=()=>{if(G.lib){libPlay(G.lib);return}
  const c={'clock.limit':G.clock.initial/1000,'clock.increment':G.clock.increment/1000},o=G.opp;
  if(o.aiLevel)post('/api/challenge/ai',{level:o.aiLevel,...c});else post('/api/challenge/'+o.id,{rated:G.rated,...c});show('play')};
const send=()=>{const t=$('#ci').value.trim();if(t&&G){post(`/api/board/game/${G.id}/chat`,{room:'player',text:t});$('#ci').value=''}};
$('#cs').onclick=send;$('#ci').onkeydown=e=>{if(e.key=='Enter')send()};


// ===== Puzzles (sets, cycles; progress stays in this browser) =====
const TH={mix:['Mezcla','Mix'],mateIn1:['Mate en 1','Mate in 1'],mateIn2:['Mate en 2','Mate in 2'],mateIn3:['Mate en 3','Mate in 3'],fork:['Horquilla','Fork'],pin:['Clavada','Pin'],discoveredAttack:['Ataque descubierto','Discovered attack'],hangingPiece:['Pieza colgada','Hanging piece'],backRankMate:['Mate de pasillo','Back rank mate'],sacrifice:['Sacrificio','Sacrifice'],endgame:['Final','Endgame']};
const LV={easiest:['Muy fácil','Easiest'],easier:['Fácil','Easier'],normal:['Normal','Normal'],harder:['Difícil','Harder'],hardest:['Muy difícil','Hardest']};
const Z={new:['Nuevo set','New set'],cont:['Continuar','Continue'],theme:['Tema','Theme'],level:['Dificultad','Difficulty'],size:['Puzzles','Puzzles'],cycles:['Ciclos','Cycles'],create:['Crear set','Create set'],loading:['Cargando…','Loading…'],cyc:['Ciclo','Cycle'],rating:['Rating','Rating'],white:['Juegas con blancas','You play white'],black:['Juegas con negras','You play black'],good:['Correcto','Correct'],bad:['Error. Esta era la jugada','Wrong. This was the move'],skip:['Saltar','Skip'],exit:['Salir','Leave'],delc:['¿Eliminar este set?','Delete this set?'],cdone:['Ciclo terminado','Cycle finished'],time:['Tiempo','Time'],errs:['Errores','Errors'],acc:['Precisión','Accuracy'],next:['Siguiente ciclo','Next cycle'],nextp:['Siguiente','Next'],auto:['Abrir el siguiente automáticamente','Open the next one automatically'],sdone:['Set terminado','Set finished'],arch:['Archivo','Archive'],none:['Aún no hay sets terminados','No finished sets yet'],empty:['No llegaron puzzles. Prueba otro tema.','No puzzles came back. Try another theme.']};
let SETS=[],SET=null,PZ=null,ARCH=[],AUTO=localStorage.eauto!=='0';
try{SETS=JSON.parse(localStorage.esets||'[]');ARCH=JSON.parse(localStorage.earch||'[]').filter(a=>!a.inc);
  const old=JSON.parse(localStorage.eset||'null');if(old){SETS.push(old);localStorage.removeItem('eset')}}catch(e){}
SETS.forEach(s=>{s.mi=s.mi||[];s.id=s.id||Math.random()});
const save=()=>{try{localStorage.esets=JSON.stringify(SETS);localStorage.earch=JSON.stringify(ARCH)}catch(e){}};
const lg=p=>p[lang=='es'?0:1],mm=ms=>{const s=Math.round(ms/1000);return Math.floor(s/60)+':'+String(s%60).padStart(2,'0')};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const load=f=>Chessops.Chess.fromSetup(Chessops.parseFen(f).unwrap()).unwrap(),sqn=Chessops.makeSquare;
const opts=(o,sel)=>Object.keys(o).map(k=>`<option value="${k}"${k==sel?' selected':''}>${lg(o[k])}</option>`).join('');
const nums=a=>a.map(n=>`<option>${n}</option>`).join('');
// accuracy = puzzles solved on the first try / puzzles attempted, in the current cycle
const acc=s=>{const q=s.q.map(i=>s.puz[i].id),done=s.size-q.length,pend=s.mi.filter(i=>q.includes(i)).length,att=done+pend;return att?Math.round((done-(s.mi.length-pend))/att*100):null};
const pct=r=>r.acc!=null?r.acc+'%':r.err+' err';
const archHtml=()=>ARCH.length?ARCH.slice(0,12).map(a=>`<p class="mute"><b>${esc(lg(TH[a.name]||[a.name,a.name]))}</b> · ${esc(lg(LV[a.level]||[a.level,a.level]))} · ${a.size}×${a.cycles}<br>${a.res.map(r=>`${mm(r.ms)} · ${pct(r)}`).join(' → ')}</p>`).join(''):`<p class="mute">${lg(Z.none)}</p>`;

// turn an API puzzle into a stored one: position where the solver moves + solution
function prep(x){
  const mv=(x.game.pgn||'').split(' ').filter(Boolean),sol=x.puzzle.solution;
  for(let n=mv.length;n>=Math.max(0,mv.length-2);n--){
    const pos=Chessops.Chess.default();let last,ok=true;
    for(let i=0;i<n;i++){const m=Chessops.parseSan(pos,mv[i]);if(!m){ok=false;break}last=[sqn(m.from),sqn(m.to)];pos.play(m)}
    if(!ok)continue;const f=Chessops.parseUci(sol[0]);
    if(f&&pos.isLegal(f))return{id:x.puzzle.id,r:x.puzzle.rating,fen:Chessops.makeFen(pos.toSetup()),last,sol};
  }
  return null;
}
async function create(){
  if(!user)return login();
  const a=$('#pth').value,d=$('#plv').value,n=+$('#psz').value,c=+$('#pcy').value,pm=$('#pmsg');pm.textContent=lg(Z.loading);
  try{
    const r=await fetch(`${API}/api/puzzle/batch/${a}?nb=${n}&difficulty=${d}`,{headers:hdr()});
    if(!r.ok){pm.textContent=r.status==401||r.status==403?T[lang].need:T[lang].fail+r.status;return}
    const puz=(await r.json()).puzzles.map(prep).filter(Boolean);
    if(!puz.length){pm.textContent=lg(Z.empty);return}
    SET={id:Date.now(),name:a,level:d,size:puz.length,cycles:c,cycle:1,puz,q:puz.map((_,i)=>i),cms:0,err:0,mi:[],res:[],lt:0,pause:false};
    SETS.push(SET);save();view();
  }catch(e){pm.textContent=T[lang].fail+e.message}
}
function home(){
  PZ=null;SET=null;resetBoard();
  const list=SETS.map(s=>{const a=acc(s);return `<div class="set" data-act="open" data-id="${s.id}"><div><b>${esc(lg(TH[s.name]))} · ${esc(lg(LV[s.level]))}</b><small>${lg(Z.cyc)} ${s.cycle}/${s.cycles} · ${s.pause?lg(Z.cdone):(s.size-s.q.length)+'/'+s.size} · ${lg(Z.acc)} ${a==null?'—':a+'%'}</small></div><button class="x" data-act="del" data-id="${s.id}">✕</button></div>`}).join('');
  $('#pzv').innerHTML=(SETS.length?`<h2>${lg(Z.cont)}</h2>${list}<hr>`:'')+
   `<h2>${lg(Z.new)}</h2><label class="mute">${lg(Z.theme)}</label><select id="pth">${opts(TH)}</select>
    <label class="mute">${lg(Z.level)}</label><select id="plv">${opts(LV,'normal')}</select>
    <div class="row"><div style="flex:1"><label class="mute">${lg(Z.size)}</label><select id="psz">${nums([10,25,50])}</select></div>
    <div style="flex:1"><label class="mute">${lg(Z.cycles)}</label><select id="pcy">${nums([3,6,9])}</select></div></div>
    <button class="primary" data-act="create">${lg(Z.create)}</button><p class="mute" id="pmsg"></p>
    <details><summary>${lg(Z.arch)} (${ARCH.length})</summary>${archHtml()}</details>`;
}
function view(){
  if(!SET)return home();
  if(SET.pause){PZ=null;resetBoard();const r=SET.res[SET.res.length-1];
    $('#pzv').innerHTML=`<h2>${lg(Z.cdone)} ${r.c}/${SET.cycles}</h2><p>${lg(Z.time)}: <b>${mm(r.ms)}</b><br>${lg(Z.errs)}: <b>${r.err}</b><br>${lg(Z.acc)}: <b>${pct(r)}</b></p>
      <button class="primary" data-act="next">${lg(Z.next)}</button><div class="row"><button data-act="exit">${lg(Z.exit)}</button></div>`;return}
  startPuz();
}
function info(f,btn){
  const s=SET,p=PZ.p,t=esc(lg(TH[s.name])),done=s.size-s.q.length,a=acc(s);
  $('#pzv').innerHTML=`<h2>${t} · ${esc(lg(LV[s.level]))}</h2><p>${lg(Z.cyc)} <b>${s.cycle}/${s.cycles}</b> · <b>${Math.min(done+1,s.size)}/${s.size}</b> · ${lg(Z.acc)} <b>${a==null?'—':a+'%'}</b></p>
    <p class="mute">${lg(Z.rating)} ${p.r} · ${t}</p><p class="mute">${lg(PZ.side=='white'?Z.white:Z.black)}</p>
    <div class="res">${f||''}</div>${btn?`<button class="primary" data-act="nextp">${lg(Z.nextp)}</button>`:''}
    <label class="sw"><input type="checkbox" id="pauto"${AUTO?' checked':''}><span>${lg(Z.auto)}</span></label>
    <div class="row"><button data-act="skip">${lg(Z.skip)}</button><button data-act="exit">${lg(Z.exit)}</button></div>`;
}
function startPuz(){
  if($('#puzp').hidden)return;
  const s=SET;if(!s)return;if(!s.q.length)return endCycle();
  try{
    const p=s.puz[s.q[0]],pos=load(p.fen);PZ={p,pos,k:0,side:pos.turn,busy:false,wait:false};s.lt=Date.now();cg.setShapes([]);
    cg.set({fen:p.fen,orientation:pos.turn,turnColor:pos.turn,lastMove:p.last,check:pos.isCheck(),viewOnly:false,premovable:{enabled:false},
      movable:{free:false,color:pos.turn,dests:Chessops.chessgroundDests(pos),events:{after:onPuz}}});
    info();
  }catch(e){console.error(e);s.q.shift();save();setTimeout(startPuz,300)}
}
function resync(){
  cg.set({fen:Chessops.makeFen(PZ.pos.toSetup()),turnColor:PZ.side,check:PZ.pos.isCheck(),viewOnly:false,
    movable:{free:false,color:PZ.side,dests:Chessops.chessgroundDests(PZ.pos),events:{after:onPuz}}});
}
function miss(){
  const s=SET,want=PZ.p.sol[PZ.k];PZ.busy=true;s.err++;if(!s.mi.includes(PZ.p.id))s.mi.push(PZ.p.id);
  s.cms+=Math.min(Date.now()-s.lt,120000);sound('bad');
  cg.set({fen:Chessops.makeFen(PZ.pos.toSetup()),turnColor:PZ.side,lastMove:undefined,check:PZ.pos.isCheck(),viewOnly:true});
  if(want)cg.setShapes([{orig:want.slice(0,2),dest:want.slice(2,4),brush:'green'}]);
  s.q.push(s.q.shift());save();
  const f=`<span style="color:#e57373">${lg(Z.bad)}</span>`;
  if(AUTO){info(f);setTimeout(startPuz,1800)}else{PZ.wait=true;info(f,true)}
}
function onPuz(o,d,m){
  if(!PZ||PZ.busy)return;
  try{
    const p=PZ.p,want=p.sol[PZ.k];if(!want)return solved();
    let u=o+d;const pc=cg.state.pieces.get(d);
    if(pc&&pc.role=='pawn'&&(d[1]=='8'||d[1]=='1'))u+='q';
    const t=PZ.pos.clone();t.play(Chessops.parseUci(u));
    const w=PZ.pos.clone();w.play(Chessops.parseUci(want));
    if(Chessops.makeFen(t.toSetup())==Chessops.makeFen(w.toSetup())||t.isCheckmate()){
      PZ.pos=t;PZ.k++;sound(m&&m.captured?'cap':'move');
      if(t.isCheckmate()||PZ.k>=p.sol.length)return solved();
      PZ.busy=true;
      setTimeout(()=>{
        if(!PZ||$('#puzp').hidden)return;let fin=false;
        try{const r=Chessops.parseUci(p.sol[PZ.k]),cp=PZ.pos.board.get(r.to)!==undefined;PZ.pos.play(r);PZ.k++;sound(cp?'cap':'move');
          cg.set({fen:Chessops.makeFen(PZ.pos.toSetup()),turnColor:PZ.side,lastMove:[sqn(r.from),sqn(r.to)],check:PZ.pos.isCheck(),viewOnly:false,
            movable:{free:false,color:PZ.side,dests:Chessops.chessgroundDests(PZ.pos),events:{after:onPuz}}});fin=PZ.k>=p.sol.length;
        }catch(e){console.error(e);try{resync()}catch(_){}}
        PZ.busy=false;if(fin)solved();
      },450);
    }else miss();
  }catch(e){console.error(e);try{resync();info(`<span style="color:#e57373">${esc(e.message)}</span>`)}catch(_){}}
}
function solved(){
  const s=SET;PZ.busy=true;s.cms+=Math.min(Date.now()-s.lt,120000);s.q.shift();save();sound('ok');
  const f=`<span style="color:#81c784">${lg(Z.good)}</span>`;
  if(AUTO){info(f);setTimeout(startPuz,800)}else{PZ.wait=true;info(f,true)}
}
function endCycle(){
  const s=SET;s.res.push({c:s.cycle,ms:s.cms,err:s.err,acc:Math.round((s.size-s.mi.length)/s.size*100)});
  if(s.cycle>=s.cycles){ARCH.unshift({name:s.name,level:s.level,size:s.size,cycles:s.cycles,res:s.res});SETS=SETS.filter(x=>x!==s);save();home();$('#pmsg').textContent=lg(Z.sdone);return}
  s.pause=true;save();view();
}
$('#pzv').onclick=e=>{const b=e.target.closest('[data-act]');if(!b)return;const a=b.dataset.act,s=SET;
  if(a=='create')create();
  else if(a=='open'){SET=SETS.find(x=>String(x.id)==b.dataset.id)||null;if(SET){SET.mi=SET.mi||[];view()}}
  else if(a=='del'){if(confirm(lg(Z.delc))){SETS=SETS.filter(x=>String(x.id)!=b.dataset.id);save();home()}}
  else if(a=='next'){s.cycle++;s.q=s.puz.map((_,i)=>i);s.cms=0;s.err=0;s.mi=[];s.pause=false;save();view()}
  else if(a=='exit'){save();home()}
  else if(a=='skip'){if(PZ&&!PZ.busy)miss()}
  else if(a=='nextp'){if(PZ&&PZ.wait){PZ.wait=false;startPuz()}}};
$('#pzv').onchange=e=>{if(e.target.id=='pauto'){AUTO=e.target.checked;try{localStorage.eauto=AUTO?'1':'0'}catch(_){}}};

// ===== Biblioteca: books in biblioteca/*.txt, each position playable against Stockfish (Lichess AI level 8) =====
const BOOKS=[{id:'rockwell-1890',file:'biblioteca/rockwell-1890.txt'}];
const BZ={books:['Libros','Books'],back:['← Libros','← Books'],bookback:['← Posiciones','← Positions'],pos:['Posición','Position'],wt:['Juegan blancas','White to move'],bt:['Juegan negras','Black to move'],
 play:['Jugar contra Stockfish 8','Play against Stockfish 8'],again:['Jugar otra vez','Play again'],sol:['Ver solución','Show solution'],hide:['Ocultar solución','Hide solution'],solved:['resueltos','solved'],
 nofile:['No se pudo cargar el libro.','Could not load the book.'],empty:['Este libro aún no tiene posiciones.','This book has no positions yet.'],badfen:['FEN no válida en esta posición.','Invalid FEN in this position.'],
 login:['Entra con Lichess para jugar.','Log in with Lichess to play.'],book:['Libro','Book'],hint:['Mate = resuelto. Stockfish defiende lo mejor posible.','Checkmate = solved. Stockfish defends as well as it can.']};
const bz=k=>BZ[k][lang=='es'?0:1];
let LIB={books:null,book:null,cur:null},LIBGAME=null;
function parseBook(t){const b={meta:{},pos:[]};let c=b.meta,k=null;
  for(const raw of t.replace(/\r/g,'').split('\n')){const l=raw.trim();
    if(l.startsWith(';'))continue;
    if(l.startsWith('#')){c={};b.pos.push(c);k=null;continue}
    const m=l.match(/^([a-z_]+):\s*(.*)$/i);
    if(m){k=m[1].toLowerCase();c[k]=m[2]}else if(k&&l)c[k]+='\n'+l}
  b.pos.forEach((p,i)=>p.n=i+1);return b}
const libProg=()=>{try{return JSON.parse(localStorage.elib||'{}')}catch(_){return{}}};
function libSolved(l){const p=libProg();(p[l.book]=p[l.book]||{})[l.n]=1;try{localStorage.elib=JSON.stringify(p)}catch(_){}}
const libText=p=>(lang=='es'&&p.text_es)||p.text||'';
const libLabel=l=>bz('book')+' · '+bz('pos')+' '+l.n+(libText(l.p)?'\n'+libText(l.p):'');
async function libLoad(){if(LIB.books)return LIB.books;
  const out=[];for(const d of BOOKS){try{const r=await fetch(d.file);if(!r.ok)throw 0;out.push({...d,...parseBook(await r.text())})}catch(_){out.push({...d,meta:{},pos:[],err:1})}}
  return LIB.books=out}
async function libView(){const el=$('#lbv');
  if(LIB.cur&&LIB.book){libPos(LIB.cur);return}
  if(LIB.book){libBook(LIB.book);return}
  el.innerHTML='<h2>'+bz('books')+'</h2>';const bs=await libLoad();
  el.innerHTML='<h2>'+bz('books')+'</h2>'+bs.map((b,i)=>{const done=Object.keys(libProg()[b.id]||{}).length;
    return `<div class="set" data-i="${i}"><div><b>${esc(b.meta.title||b.id)}</b><small>${esc(b.meta.author||'')} ${esc(b.meta.year||'')}${b.err?' · '+bz('nofile'):' · '+done+'/'+b.pos.length+' '+bz('solved')}</small></div></div>`}).join('');
  el.onclick=e=>{const s=e.target.closest('.set');if(s&&!bs[s.dataset.i].err)libBook(bs[s.dataset.i])}}
function libBook(b){LIB.book=b;LIB.cur=null;resetBoard();const el=$('#lbv'),pr=libProg()[b.id]||{};
  el.innerHTML=`<button class="lnk" id="lbk">${bz('back')}</button><h2>${esc(b.meta.title||b.id)}</h2><p class="mute">${esc(b.meta.author||'')} ${esc(b.meta.year||'')}</p>`+
   (b.pos.length?`<div class="pgrid">${b.pos.map((p,i)=>`<button data-i="${i}"${pr[p.n]?' class="done"':''}>${p.n}</button>`).join('')}</div><p class="mute">${bz('hint')}</p>`:`<p class="mute">${bz('empty')}</p>`);
  $('#lbk').onclick=()=>{LIB.book=null;libView()};
  el.onclick=e=>{const x=e.target.closest('.pgrid button');if(x)libPos(b.pos[x.dataset.i])}}
function libPos(p){LIB.cur=p;const b=LIB.book,el=$('#lbv');let pos;
  try{pos=load(p.fen)}catch(_){el.innerHTML=`<button class="lnk" id="lbk">${bz('bookback')}</button><p class="res">${bz('badfen')}</p>`;$('#lbk').onclick=()=>{LIB.cur=null;libBook(b)};return}
  cg.set({fen:p.fen,orientation:pos.turn,viewOnly:true,lastMove:undefined,check:false,movable:{free:false,color:undefined}});cg.setShapes([]);
  const sol=p.solution?`<button class="row-b" id="lsol" style="width:100%;margin:6px 0">${bz('sol')}</button><div class="ltext" id="lsoltx" hidden>${esc(p.solution)}</div>`:'';
  el.innerHTML=`<button class="lnk" id="lbk">${bz('bookback')}</button><h2>${bz('pos')} ${p.n} / ${b.pos.length}</h2><p class="mute">${bz(pos.turn=='white'?'wt':'bt')}</p>`+
   (libText(p)?`<div class="ltext">${esc(libText(p))}</div>`:'')+sol+`<button class="primary" id="lplay">${bz('play')}</button><p class="mute" id="lmsg"></p>`;
  $('#lbk').onclick=()=>{LIB.cur=null;libBook(b)};
  $('#lplay').onclick=()=>libPlay({book:b.id,n:p.n,fen:p.fen,p});
  if(p.solution)$('#lsol').onclick=()=>{const t=$('#lsoltx');t.hidden=!t.hidden;$('#lsol').textContent=bz(t.hidden?'sol':'hide')}}
async function libPlay(l){if(!user){const m=$('#lmsg');if(m)m.textContent=bz('login');return login()}
  const pos=load(l.fen);LIBGAME=l;
  const r=await post('/api/challenge/ai',{level:8,variant:'fromPosition',fen:l.fen,color:pos.turn});
  if(!r.ok){LIBGAME=null;const t=await r.text(),m=$('#lmsg')||$('#res');m.textContent=r.status==401||r.status==403?T[lang].need:T[lang].fail+t.slice(0,120)}}
paint();
finish().then(me).then(u=>{user=u;paint();
  if(u)stream('/api/stream/event',ev=>{if(ev.type=='gameStart')openGame(ev.game.gameId||ev.game.id)})});
if(location.hash=='#puzzles')show('puz');
if(location.hash=='#biblioteca')show('lib');
if('serviceWorker' in navigator)navigator.serviceWorker.register('sw.js').catch(()=>{});
