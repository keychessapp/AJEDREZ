// ---------- Language (shared with Enroque: same localStorage key, Spanish by default) ----------
const T = {
  es: {
    login: 'Entrar con Lichess', logged: '✓ Lichess', play: 'Jugar', puzzles: 'Puzzles', drills: 'Drills', library: 'Biblioteca', learn: 'Aprender', soon: 'pronto', other: 'EN',
    names: { 'invisible-knight': 'Caballo invisible', 'knight-forks': 'Horquillas de caballo', 'safe-square': 'Casilla segura' }, aria: 'Drill',
    level: 'Nivel', notation: 'Notación', show: 'Mostrar', jump: 'salto', jumps: 'saltos',
    arrows: 'Flechas ↑↑→', words: 'Palabras', clock: 'Reloj', clockhard: 'Reloj difícil', step: 'Paso a paso', seq: 'Secuencia',
    remember: 'Recuerda dónde está el caballo', start: 'Empezar', next: 'Siguiente', answer: 'Responder',
    jumpOf: (i, n) => 'Salto ' + i + ' de ' + n, tapEnd: 'Toca la casilla donde termina el caballo',
    where: '¿Dónde está el caballo ahora? Toca la casilla', ok: 'Correcto ✓',
    no: s => 'No exactamente. El caballo está en ' + s, legend: 'S = salida, números = casillas de llegada',
    again: 'Nueva posición', pieces: 'Piezas', random: 'Aleatorio (2-8)',
    fkTask: 'Toca cada casilla donde un caballo hace horquilla (ataca 2 o más piezas) sin poder ser capturado.',
    fkLeft: n => n === 1 ? 'Falta 1 casilla' : 'Faltan ' + n + ' casillas', fkNone: 'No falta ninguna',
    fkErr: (a, b) => 'Errores: ' + (a + b) + ' (amenaza ' + a + ', sin horquilla ' + b + ')',
    fkOk: (sq, list) => '✓ ' + sq + ': ataca ' + list, fkThreat: (sq, list) => sq + ': lo capturaría ' + list,
    fkWeak: (sq, k) => sq + ': ataca ' + k + (k === 1 ? ' pieza' : ' piezas') + ', hacen falta 2', fkBusy: sq => sq + ' está ocupada',
    fkDone: n => n ? '¡Completo! Con ' + n + (n === 1 ? ' error' : ' errores') : '¡Completo y sin errores!', fkReveal: 'Mostrar las que faltan', fkGaveUp: 'Estas eran las que faltaban',
    and: ' y ', in: ' en ', pn: { K: 'rey', Q: 'dama', R: 'torre', B: 'alfil', N: 'caballo', P: 'peón' },
    fkScore: (a, b) => 'Sin errores: ' + a + ' de ' + b,
    sfTask: 'Toca una casilla vacía que no esté atacada por ninguna pieza antes de que se acabe el tiempo.', sfStart: 'Empezar', sfEnd: 'Terminar', sfAgain: 'Jugar otra vez',
    sfLevel: l => 'Nivel ' + l, sfMax: 'máximo', sfHits: n => 'Aciertos: ' + n, sfBest: (l, n) => n ? 'Récord: ' + n + ' aciertos (nivel ' + l + ')' : '',
    sfTime: 'Se acabó el tiempo', sfAtt: (sq, list) => sq + ' está atacada por ' + list, sfExit: 'Terminaste',
    sfOver: (l, n) => 'Nivel ' + l + ' con ' + n + (n === 1 ? ' acierto' : ' aciertos') + '. En verde, las casillas seguras.', score: (l, a, b) => 'Nivel ' + l + ': ' + a + ' de ' + b + ' correctas'
  },
  en: {
    login: 'Log in with Lichess', logged: '✓ Lichess', play: 'Play', puzzles: 'Puzzles', drills: 'Drills', library: 'Library', learn: 'Learn', soon: 'soon', other: 'ES',
    names: { 'invisible-knight': 'Invisible Knight', 'knight-forks': 'Knight forks', 'safe-square': 'Safe Square Survivor' }, aria: 'Drill',
    level: 'Level', notation: 'Notation', show: 'Show', jump: 'jump', jumps: 'jumps',
    arrows: 'Arrows ↑↑→', words: 'Words', clock: 'Clock', clockhard: 'Clock hard', step: 'Step by step', seq: 'Sequence',
    remember: 'Remember where the knight is', start: 'Start', next: 'Next', answer: 'Answer',
    jumpOf: (i, n) => 'Jump ' + i + ' of ' + n, tapEnd: 'Tap the square where the knight ends',
    where: 'Where is the knight now? Tap the square', ok: 'Correct ✓',
    no: s => 'Not quite. The knight is on ' + s, legend: 'S = start, numbers = landing squares',
    again: 'New position', pieces: 'Pieces', random: 'Random (2-8)',
    fkTask: 'Tap every square where a knight forks (attacks 2 or more pieces) and cannot be captured.',
    fkLeft: n => n === 1 ? '1 square missing' : n + ' squares missing', fkNone: 'Nothing missing',
    fkErr: (a, b) => 'Errors: ' + (a + b) + ' (threat ' + a + ', no fork ' + b + ')',
    fkOk: (sq, list) => '✓ ' + sq + ': attacks ' + list, fkThreat: (sq, list) => sq + ': would be captured by ' + list,
    fkWeak: (sq, k) => sq + ': attacks ' + k + (k === 1 ? ' piece' : ' pieces') + ', needs 2', fkBusy: sq => sq + ' is occupied',
    fkDone: n => n ? 'Complete! With ' + n + (n === 1 ? ' error' : ' errors') : 'Complete, no errors!', fkReveal: 'Show the missing ones', fkGaveUp: 'These were missing',
    and: ' and ', in: ' on ', pn: { K: 'king', Q: 'queen', R: 'rook', B: 'bishop', N: 'knight', P: 'pawn' },
    fkScore: (a, b) => 'No errors: ' + a + ' of ' + b,
    sfTask: 'Tap an empty square that no piece attacks before time runs out.', sfStart: 'Start', sfEnd: 'Finish', sfAgain: 'Play again',
    sfLevel: l => 'Level ' + l, sfMax: 'max', sfHits: n => 'Correct: ' + n, sfBest: (l, n) => n ? 'Best: ' + n + ' correct (level ' + l + ')' : '',
    sfTime: 'Time is up', sfAtt: (sq, list) => sq + ' is attacked by ' + list, sfExit: 'You finished',
    sfOver: (l, n) => 'Level ' + l + ' with ' + n + ' correct. Safe squares in green.', score: (l, a, b) => 'Level ' + l + ': ' + a + ' of ' + b + ' correct'
  }
};
let lang = 'es';
try { if (localStorage.lang === 'en') lang = 'en'; } catch (e) {}

// PURE-START
const KM = [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]];
const CLOCK = { '1,2': 1, '2,1': 2, '2,-1': 4, '1,-2': 5, '-1,-2': 7, '-2,-1': 8, '-2,1': 10, '-1,2': 11 };
const WORDS = { en: ['up', 'down', 'right', 'left'], es: ['arriba', 'abajo', 'derecha', 'izquierda'] };
function genPath(n, rnd) {
  rnd = rnd || Math.random;
  const x0 = Math.floor(rnd() * 8), y0 = Math.floor(rnd() * 8);
  let x = x0, y = y0, px = -1, py = -1, pdx = 0, pdy = 0; const steps = [];
  for (let k = 0; k < n; k++) {
    const all = KM.map(([dx, dy]) => ({ dx, dy, x: x + dx, y: y + dy }))
      .filter(m => m.x >= 0 && m.x < 8 && m.y >= 0 && m.y < 8 && !(m.x === px && m.y === py));
    let opts = all.filter(m => !(m.dx === pdx && m.dy === pdy));   // never the same jump twice in a row
    if (!opts.length) opts = all;
    const m = opts[Math.floor(rnd() * opts.length)];
    steps.push(m); px = x; py = y; x = m.x; y = m.y; pdx = m.dx; pdy = m.dy;
  }
  return { x0, y0, steps, x, y };
}
function fmtMove(dx, dy, mode, lg) {
  if (mode === 'words') { const w = WORDS[lg] || WORDS.en; return Math.abs(dy) + ' ' + (dy > 0 ? w[0] : w[1]) + ' ' + Math.abs(dx) + ' ' + (dx > 0 ? w[2] : w[3]); }
  if (mode === 'clock' || mode === 'clockhard') return String(CLOCK[dx + ',' + dy]);
  return Math.abs(dy) === 2 ? (dy > 0 ? '↑↑' : '↓↓') + (dx > 0 ? '→' : '←') : (dx > 0 ? '→→' : '←←') + (dy > 0 ? '↑' : '↓');
}

const SL = { R: [[1, 0], [-1, 0], [0, 1], [0, -1]], B: [[1, 1], [1, -1], [-1, 1], [-1, -1]] };
function pieceAttacks(t, x, y, occ, color) {           // squares a piece of type K/Q/R/B/N attacks; sliders stop at the first piece
  const out = [], ok = (a, b) => a >= 0 && a < 8 && b >= 0 && b < 8;
  if (t === 'P') { const d = color === 'b' ? -1 : 1; [-1, 1].forEach(dx => { if (ok(x + dx, y + d)) out.push([x + dx, y + d]); }); return out; }   // a pawn hits diagonally forward, forward being up for white, down for black
  if (t === 'N') { KM.forEach(([dx, dy]) => { if (ok(x + dx, y + dy)) out.push([x + dx, y + dy]); }); return out; }
  if (t === 'K') { for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) if ((dx || dy) && ok(x + dx, y + dy)) out.push([x + dx, y + dy]); return out; }
  const dirs = t === 'Q' ? SL.R.concat(SL.B) : SL[t];
  dirs.forEach(([dx, dy]) => { let a = x + dx, b = y + dy; while (ok(a, b)) { out.push([a, b]); if (occ[a + ',' + b]) break; a += dx; b += dy; } });
  return out;
}
function forkInfo(pieces, sx, sy) {             // a knight (of the other colour) on sx,sy: what it forks, who can capture it
  const occ = {}; pieces.forEach(p => { occ[p.x + ',' + p.y] = 1; });
  if (occ[sx + ',' + sy]) return null;
  const targets = pieces.filter(p => KM.some(([dx, dy]) => p.x === sx + dx && p.y === sy + dy));
  const attackers = pieces.filter(p => pieceAttacks(p.t, p.x, p.y, occ).some(([a, b]) => a === sx && b === sy));
  return { targets, attackers, ok: targets.length >= 2 && attackers.length === 0 };
}
function forkSquares(pieces) {
  const r = [];
  for (let x = 0; x < 8; x++) for (let y = 0; y < 8; y++) { const f = forkInfo(pieces, x, y); if (f && f.ok) r.push([x, y]); }
  return r;
}
function genFork(n, rnd) {                      // n pieces of one colour (2..8; null = random), at least 1 and at most 8 solutions
  rnd = rnd || Math.random;
  for (let tries = 0; ; tries++) {
    const cnt = n || 2 + Math.floor(rnd() * 7), types = [];
    if (rnd() < 0.5) types.push('K');
    while (types.length < cnt) types.push('QRRBBNN'[Math.floor(rnd() * 7)]);
    const used = {}, pieces = types.map(t => { let x, y; do { x = Math.floor(rnd() * 8); y = Math.floor(rnd() * 8); } while (used[x + ',' + y]); used[x + ',' + y] = 1; return { t, x, y }; });
    const sols = forkSquares(pieces);
    if (sols.length >= 1 && (sols.length <= 8 || tries > 2000)) return { pieces, sols };
  }
}

// Safe Square Survivor: levels 1..10 (then it stays at 10). n pieces, which types, and how many safe squares are left.
const SF_MAX = 10;
const SF = [
  { n: 3, pool: 'RB', lo: 18, hi: 40 }, { n: 4, pool: 'RB', lo: 14, hi: 30 }, { n: 4, pool: 'RBN', lo: 10, hi: 22 },
  { n: 5, pool: 'RBN', lo: 8, hi: 16 }, { n: 6, pool: 'QRBN', lo: 6, hi: 12 }, { n: 7, pool: 'QRBNP', lo: 4, hi: 9 },
  { n: 8, pool: 'QRBNPP', lo: 3, hi: 7 }, { n: 9, pool: 'QRRBBNPP', lo: 2, hi: 5 }, { n: 10, pool: 'QRRBBNPP', lo: 1, hi: 4 }, { n: 12, pool: 'QRRBBNPP', lo: 1, hi: 2 }
];
const sfTime = l => l <= 5 ? 15 : l <= 8 ? 12 : 10;      // seconds per position
function attackersOf(pieces, color, sx, sy) {
  const occ = {}; pieces.forEach(p => { occ[p.x + ',' + p.y] = 1; });
  if (occ[sx + ',' + sy]) return null;
  return pieces.filter(p => pieceAttacks(p.t, p.x, p.y, occ, color).some(([a, b]) => a === sx && b === sy));
}
function safeSquares(pieces, color) {
  const r = [];
  for (let x = 0; x < 8; x++) for (let y = 0; y < 8; y++) { const a = attackersOf(pieces, color, x, y); if (a && !a.length) r.push([x, y]); }
  return r;
}
function genSafe(level, rnd) {
  rnd = rnd || Math.random;
  const c = SF[Math.min(level, SF_MAX) - 1]; let best = null, bd = 1e9;
  for (let tries = 0; tries < 6000; tries++) {
    const types = []; if (level >= 5 && rnd() < 0.5) types.push('K');
    while (types.length < c.n) types.push(c.pool[Math.floor(rnd() * c.pool.length)]);
    const used = {}, color = rnd() < 0.5 ? 'w' : 'b';
    const pieces = types.map(t => { let x, y; do { x = Math.floor(rnd() * 8); y = t === 'P' ? 1 + Math.floor(rnd() * 6) : Math.floor(rnd() * 8); } while (used[x + ',' + y]); used[x + ',' + y] = 1; return { t, x, y }; });
    const safe = safeSquares(pieces, color), k = safe.length;
    if (k >= c.lo && k <= c.hi) return { pieces, color, safe };
    if (k >= 1) { const d = k < c.lo ? c.lo - k : k - c.hi; if (d < bd) { bd = d; best = { pieces, color, safe }; } }
  }
  return best;
}
const sqName = (x, y) => 'abcdefgh'[x] + (y + 1);
// PURE-END

const $ = (s, r) => (r || document).querySelector(s);
const mk = (t, c, x) => { const e = document.createElement(t); if (c) e.className = c; if (x != null) e.textContent = x; return e; };
const store = {
  get(k, d) { try { const v = localStorage.getItem('drills:' + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('drills:' + k, JSON.stringify(v)); } catch (e) {} }
};

// ---------- Shared: the 8x8 board (white at the bottom) and Enroque's pieces ----------
const pieceEl = code => mk('span', 'p ' + code);     // code like 'wN', 'bQ'
function buildBoard(boardEl, click) {
  const sqs = [];
  for (let y = 7; y >= 0; y--) for (let x = 0; x < 8; x++) {
    const b = mk('button', 'sq ' + ((x + y) % 2 ? 'l' : 'd')); b.type = 'button'; b.setAttribute('aria-label', sqName(x, y));
    if (y === 0) b.append(mk('span', 'c', 'abcdefgh'[x]));
    else if (x === 0) b.append(mk('span', 'c', String(y + 1)));
    b.onclick = () => click(x, y); boardEl.append(b); sqs.push(b);
  }
  boardEl.replaceChildren(...sqs);
  return {
    sqs, at: (x, y) => sqs[(7 - y) * 8 + x],
    clear: () => sqs.forEach(b => { b.classList.remove('real', 'bad', 'ans', 'att', 'miss'); b.querySelectorAll('.p,.n').forEach(e => e.remove()); })
  };
}
const mkSelect = (box, key, values) => { const s = mk('select'); values.forEach(v => { const o = mk('option'); o.value = v; s.append(o); }); const l = mk('label'); l.append(document.createTextNode(''), s); box.append(l); return { l, s, key }; };

// ---------- Drill: Invisible Knight ----------
function mountInvisibleKnight(boardEl, panel) {
  const LEVELS = [1, 2, 3, 4, 5, 7, 10], NOTES = ['arrows', 'words', 'clock', 'clockhard'], SHOWS = ['step', 'seq'];
  let level = store.get('ik:level', 3), mode = store.get('ik:mode', 'arrows'), show = store.get('ik:show', 'step');
  if (!LEVELS.includes(level)) level = 3;
  if (!NOTES.includes(mode)) mode = 'arrows';
  if (show !== 'seq') show = 'step';
  let puz = null, phase = 'show', i = 0;

  const bar = mk('div', 'bar');
  const tl = mkSelect(bar, 'level', LEVELS), tn = mkSelect(bar, 'notation', NOTES), ts = mkSelect(bar, 'show', SHOWS), tags = [tl, tn, ts];
  const lvl = tl.s, not = tn.s, shw = ts.s;
  lvl.id = 'lvl'; not.id = 'not'; shw.id = 'show';
  lvl.value = level; not.value = mode; shw.value = show;
  const say = mk('div', 'say'), prog = mk('div', 'prog'), act = mk('button', 'primary'), score = mk('div', 'score');
  act.type = 'button'; act.id = 'act';
  boardEl.replaceChildren(); panel.replaceChildren(bar, say, prog, act, score);

  function labels() {
    const L = T[lang];
    tags.forEach(t => { t.l.firstChild.nodeValue = L[t.key] + ' '; t.s.setAttribute('aria-label', L[t.key]); });
    [...lvl.options].forEach(o => { const n = +o.value; o.textContent = n + ' ' + (n === 1 ? L.jump : L.jumps); });
    [...not.options].forEach(o => { o.textContent = L[o.value]; });
    [...shw.options].forEach(o => { o.textContent = L[o.value]; });
  }

  const { sqs, at, clear: clearBoard } = buildBoard(boardEl, (x, y) => answer(x, y));
  const knightOn = (x, y) => at(x, y).append(pieceEl(puz.color + 'N'));

  function legend(dx, dy) {
    const g = mk('div', 'legend'); g.setAttribute('aria-hidden', 'true');
    for (let r = 0; r < 5; r++) for (let c = 0; c < 5; c++) {
      const ddx = c - 2, ddy = 2 - r, k = CLOCK[ddx + ',' + ddy];
      g.append(mk('i', k ? 't' + (ddx === dx && ddy === dy ? ' on' : '') : (c === 2 && r === 2 ? 'k' : ''), k ? String(k) : (c === 2 && r === 2 ? '♞' : '')));
    }
    return g;
  }
  function chips() {
    const box = mk('div', 'chips' + (mode === 'words' ? ' w' : ''));
    puz.steps.forEach((m, k) => { const c = mk('span', 'ch'); c.append(mk('sup', '', String(k + 1)), document.createTextNode(fmtMove(m.dx, m.dy, mode, lang))); box.append(c); });
    say.append(box);
    if (mode === 'clock') say.append(legend(null, null));
  }
  function scoreLine() {
    const s = store.get('ik:scores', {}), v = s[level] || { ok: 0, total: 0 };
    score.textContent = v.total ? T[lang].score(level, v.ok, v.total) : '';
  }
  function newPuzzle() { puz = genPath(level); puz.color = Math.random() < 0.5 ? 'w' : 'b'; phase = 'show'; i = 0; render(); }
  function render() {
    const L = T[lang];
    clearBoard(); say.replaceChildren(); prog.textContent = ''; prog.className = 'prog'; act.hidden = false;
    if (phase === 'show') {
      knightOn(puz.x0, puz.y0);
      say.append(mk('div', 'msg', L.remember));
      act.textContent = L.start;
    } else if (phase === 'jumps') {
      const m = puz.steps[i];
      say.append(mk('div', 'big' + (mode === 'words' ? ' txt' : ''), fmtMove(m.dx, m.dy, mode, lang)));
      if (mode === 'clock') say.append(legend(m.dx, m.dy));
      prog.textContent = L.jumpOf(i + 1, puz.steps.length);
      act.textContent = i < puz.steps.length - 1 ? L.next : L.answer;
    } else if (phase === 'answer') {
      if (show === 'seq') { chips(); prog.textContent = L.tapEnd; }
      else say.append(mk('div', 'msg', L.where));
      sqs.forEach(b => b.classList.add('ans'));
      act.hidden = true;
    }
    scoreLine();
  }
  function renderResult() {
    const L = T[lang];
    clearBoard(); say.replaceChildren(); prog.className = 'prog'; act.hidden = false;
    const marks = {}; const add = (px, py, t) => { const k = px + ',' + py; (marks[k] = marks[k] || []).push(t); };
    add(puz.x0, puz.y0, 'S'); puz.steps.forEach((m, k) => add(m.x, m.y, String(k + 1)));
    Object.entries(marks).forEach(([k, t]) => { const [px, py] = k.split(',').map(Number); at(px, py).append(mk('span', 'n', t.join(','))); });
    at(puz.x, puz.y).classList.add('real'); knightOn(puz.x, puz.y);
    if (!puz.ok) at(puz.gx, puz.gy).classList.add('bad');
    const text = puz.ok ? L.ok : L.no(sqName(puz.x, puz.y));
    if (show === 'seq') { chips(); prog.textContent = text; prog.className = 'prog ' + (puz.ok ? 'ok' : 'no'); }
    else { say.append(mk('div', 'msg ' + (puz.ok ? 'ok' : 'no'), text)); prog.textContent = L.legend; }
    act.textContent = L.again;
    scoreLine();
  }
  function answer(x, y) {
    if (phase !== 'answer') return;
    puz.ok = x === puz.x && y === puz.y; puz.gx = x; puz.gy = y; phase = 'result';
    const s = store.get('ik:scores', {}); const v = s[level] || { ok: 0, total: 0 }; v.total++; if (puz.ok) v.ok++; s[level] = v; store.set('ik:scores', s);
    renderResult();
  }
  const redraw = () => phase === 'result' ? renderResult() : render();
  act.onclick = () => {
    if (phase === 'show') { phase = show === 'seq' ? 'answer' : 'jumps'; i = 0; render(); }
    else if (phase === 'jumps') { if (i < puz.steps.length - 1) i++; else phase = 'answer'; render(); }
    else if (phase === 'result') newPuzzle();
  };
  lvl.onchange = () => { level = +lvl.value; store.set('ik:level', level); newPuzzle(); };
  not.onchange = () => { mode = not.value; store.set('ik:mode', mode); redraw(); };
  shw.onchange = () => { show = shw.value; store.set('ik:show', show); newPuzzle(); };
  const onKey = e => { if ((e.key === 'Enter' || e.key === ' ') && !/^(SELECT|BUTTON)$/.test(e.target.tagName) && !act.hidden) { e.preventDefault(); act.click(); } };
  document.addEventListener('keydown', onKey);
  labels(); newPuzzle();
  return { unmount: () => document.removeEventListener('keydown', onKey), relabel: () => { labels(); redraw(); } };
}

// ---------- Drill: Knight forks ----------
// 2-8 pieces of one colour on the board. Tap every empty square where a knight of the other colour
// attacks 2+ of them and no piece can capture it. Each right square gets that knight as a reference.
function mountKnightForks(boardEl, panel) {
  const COUNTS = ['random', 2, 3, 4, 5, 6, 7, 8];
  let cnt = store.get('fk:count', 'random'); if (!COUNTS.includes(cnt)) cnt = 'random';
  let puz = null, found = {}, errT = 0, errF = 0, over = false, last = null;   // last = {kind, ...} so the message can be redrawn in another language

  const bar = mk('div', 'bar'), tp = mkSelect(bar, 'pieces', COUNTS), pc = tp.s; pc.id = 'pc'; pc.value = cnt;
  const say = mk('div', 'say'), prog = mk('div', 'prog'), errs = mk('div', 'prog'), show = mk('button', 'second'), act = mk('button', 'primary'), score = mk('div', 'score');
  show.type = 'button'; show.id = 'reveal'; act.type = 'button'; act.id = 'act';
  boardEl.replaceChildren(); panel.replaceChildren(bar, say, prog, errs, show, act, score);
  const { sqs, at, clear } = buildBoard(boardEl, (x, y) => tap(x, y));
  const key = (x, y) => x + ',' + y, missing = () => puz.sols.filter(([x, y]) => !found[key(x, y)]);
  const names = ps => { const L = T[lang]; const l = ps.map(p => L.pn[p.t] + L.in + sqName(p.x, p.y)); return l.length > 1 ? l.slice(0, -1).join(', ') + L.and + l[l.length - 1] : l[0]; };

  function labels() { const L = T[lang]; tp.l.firstChild.nodeValue = L.pieces + ' '; pc.setAttribute('aria-label', L.pieces); [...pc.options].forEach(o => { o.textContent = o.value === 'random' ? L.random : o.value; }); show.textContent = L.fkReveal; act.textContent = L.again; }
  function scoreLine() { const v = store.get('fk:scores', { ok: 0, total: 0 }); score.textContent = v.total ? T[lang].fkScore(v.ok, v.total) : ''; }
  function say_() {                                                         // feedback line, always rebuilt from `last`
    const L = T[lang]; say.replaceChildren(); let t, c = 'msg';
    if (!last) { t = L.fkTask; c += ' sm'; }
    else if (last.kind === 'ok') { t = L.fkOk(sqName(last.x, last.y), names(last.targets)); c += ' ok'; }
    else if (last.kind === 'threat') { t = L.fkThreat(sqName(last.x, last.y), names(last.attackers)); c += ' no'; }
    else if (last.kind === 'weak') { t = L.fkWeak(sqName(last.x, last.y), last.k); c += ' no'; }
    else if (last.kind === 'busy') { t = L.fkBusy(sqName(last.x, last.y)); c += ' sm'; }
    else if (last.kind === 'done') { t = L.fkDone(errT + errF); c += ' ok'; }
    else { t = L.fkGaveUp; c += ' sm'; }
    say.append(mk('div', c, t));
  }
  function status() {
    const L = T[lang], m = missing().length;
    prog.textContent = over && !m ? '' : L.fkLeft(m); prog.className = 'prog';
    errs.textContent = errT + errF ? L.fkErr(errT, errF) : ''; errs.className = 'prog' + (errT + errF ? ' no' : '');
    show.hidden = over; sqs.forEach(b => b.classList.toggle('ans', !over));
    say_(); scoreLine();
  }
  function finish(gaveUp) {
    over = true; last = { kind: gaveUp ? 'gaveup' : 'done' };
    const v = store.get('fk:scores', { ok: 0, total: 0 }); v.total++; if (!gaveUp && !errT && !errF) v.ok++; store.set('fk:scores', v);
    if (gaveUp) missing().forEach(([x, y]) => at(x, y).classList.add('miss'));
    status();
  }
  function tap(x, y) {
    if (over) return;
    sqs.forEach(b => b.classList.remove('bad', 'att'));
    const f = forkInfo(puz.pieces, x, y);
    if (!f) { last = { kind: 'busy', x, y }; status(); return; }
    if (found[key(x, y)]) return;
    if (f.ok) {
      found[key(x, y)] = 1; at(x, y).append(pieceEl((puz.color === 'w' ? 'b' : 'w') + 'N'));
      last = { kind: 'ok', x, y, targets: f.targets };
      if (!missing().length) { finish(false); return; }
    } else if (f.attackers.length) {
      errT++; at(x, y).classList.add('bad'); f.attackers.forEach(p => at(p.x, p.y).classList.add('att'));
      last = { kind: 'threat', x, y, attackers: f.attackers };
    } else { errF++; at(x, y).classList.add('bad'); last = { kind: 'weak', x, y, k: f.targets.length }; }
    status();
  }
  function newPuzzle() {
    const g = genFork(cnt === 'random' ? null : +cnt); puz = { pieces: g.pieces, sols: g.sols, color: Math.random() < 0.5 ? 'w' : 'b' };
    found = {}; errT = errF = 0; over = false; last = null; clear();
    puz.pieces.forEach(p => at(p.x, p.y).append(pieceEl(puz.color + p.t)));
    status();
  }
  pc.onchange = () => { cnt = pc.value; store.set('fk:count', cnt); newPuzzle(); };
  show.onclick = () => { if (!over) finish(true); };
  act.onclick = newPuzzle;
  labels(); newPuzzle();
  return { unmount() {}, relabel() { labels(); status(); } };
}

// ---------- Drill: Safe Square Survivor ----------
// Tap an empty square that no piece attacks, before the clock runs out. Every right answer raises the level (cap 10, then it
// stays there). One wrong tap or a timeout ends the run. The clock lives in the bottom clock slot above/below the board.
function mountSafeSquare(boardEl, panel, ctx) {
  const clock = ctx.clock; clock.classList.add('on');
  let best = store.get('sq:best', { level: 0, n: 0 }), n = 0, puz = null, phase = 'idle', lock = null, tm = null, end = 0, res = null;
  const say = mk('div', 'say'), stat = mk('div', 'prog'), bestEl = mk('div', 'prog'), act = mk('button', 'primary');
  act.type = 'button'; act.id = 'act';
  boardEl.replaceChildren(); panel.replaceChildren(say, stat, bestEl, act);
  const { sqs, at, clear } = buildBoard(boardEl, (x, y) => tap(x, y));
  const level = () => Math.min(SF_MAX, n + 1), fmt = ms => { const s = Math.ceil(ms / 1000); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };
  const names = ps => { const L = T[lang]; const l = ps.map(p => L.pn[p.t] + L.in + sqName(p.x, p.y)); return l.length > 1 ? l.slice(0, -1).join(', ') + L.and + l[l.length - 1] : l[0]; };
  const stop = () => { clearInterval(tm); tm = null; clearTimeout(lock); lock = null; };

  function paint() {
    const L = T[lang]; say.replaceChildren();
    if (phase === 'idle' || phase === 'run') say.append(mk('div', 'msg sm', L.sfTask));
    else { const w = mk('div'); w.append(mk('div', 'msg ' + (res.kind === 'exit' ? '' : 'no'), res.kind === 'time' ? L.sfTime : res.kind === 'att' ? L.sfAtt(sqName(res.x, res.y), names(res.att)) : L.sfExit), mk('div', 'msg sm', L.sfOver(res.level, res.n))); say.append(w); }
    stat.textContent = phase === 'idle' ? '' : L.sfLevel(level()) + (level() >= SF_MAX ? ' · ' + L.sfMax : '') + ' · ' + L.sfHits(n);
    bestEl.textContent = L.sfBest(best.level, best.n);
    act.textContent = phase === 'run' ? L.sfEnd : phase === 'idle' ? L.sfStart : L.sfAgain; act.classList.toggle('dim', phase === 'run');
  }
  function draw() { clear(); puz.pieces.forEach(p => at(p.x, p.y).append(pieceEl(puz.color + p.t))); sqs.forEach(b => b.classList.add('ans')); }
  function tick() { const left = Math.max(0, end - Date.now()); clock.textContent = fmt(left); clock.classList.toggle('low', left <= 5000); if (!left) over('time'); }
  function next() {
    puz = genSafe(level()); draw(); end = Date.now() + sfTime(level()) * 1000; tick();
    clearInterval(tm); tm = setInterval(tick, 100); paint();
  }
  function over(kind, x, y, att) {
    if (phase !== 'run') return; stop(); phase = 'over';
    res = { kind, x, y, att, n, level: level() };
    if (n > best.n) { best = { level: level(), n }; store.set('sq:best', best); }
    draw(); sqs.forEach(b => b.classList.remove('ans'));
    puz.safe.forEach(([a, b]) => at(a, b).classList.add('real'));
    if (kind === 'att') { at(x, y).classList.remove('real'); at(x, y).classList.add('bad'); att.forEach(p => at(p.x, p.y).classList.add('att')); }
    clock.classList.remove('low'); paint();
  }
  function tap(x, y) {
    if (phase !== 'run' || lock) return;
    const a = attackersOf(puz.pieces, puz.color, x, y);
    if (!a) return;                                         // occupied square: ignored
    if (a.length) { over('att', x, y, a); return; }
    n++; clearInterval(tm); tm = null; at(x, y).classList.add('real'); paint();
    lock = setTimeout(() => { lock = null; next(); }, 350);
  }
  act.onclick = () => {
    if (phase === 'run') { over('exit'); return; }
    n = 0; res = null; phase = 'run'; next();
  };
  clear(); sqs.forEach(b => b.classList.remove('ans')); clock.textContent = fmt(sfTime(1) * 1000); paint();
  return { unmount() { stop(); clock.classList.remove('on', 'low'); }, relabel() { paint(); } };
}

// ---------- Drill registry: every new drill is added here (add its name to T.es.names and T.en.names) ----------
const DRILLS = [
  { id: 'invisible-knight', mount: mountInvisibleKnight },
  { id: 'knight-forks', mount: mountKnightForks },
  { id: 'safe-square', mount: mountSafeSquare }
];
let cur = null;
const sel = $('#drill');
DRILLS.forEach(d => { const o = mk('option'); o.value = d.id; sel.append(o); });
function paint() {
  const L = T[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i]').forEach(e => { e.textContent = L[e.dataset.i]; });
  [...sel.options].forEach(o => { o.textContent = L.names[o.value]; });
  sel.setAttribute('aria-label', L.aria);
  $('#lang').textContent = L.other;
  let tok = false; try { tok = !!localStorage.tok; } catch (e) {}
  $('#auth').textContent = tok ? L.logged : L.login;
  if (cur && cur.relabel) cur.relabel();
}
function openDrill(id) {
  const d = DRILLS.find(x => x.id === id) || DRILLS[0];
  if (cur) cur.unmount();
  sel.value = d.id; store.set('drill', d.id);
  $('#clk2').classList.remove('on', 'low');
  cur = d.mount($('#cg'), $('#dp'), { clock: $('#clk2') });
}
sel.onchange = () => openDrill(sel.value);
$('#auth').onclick = () => { location.href = '../'; };
$('#lang').onclick = () => { lang = lang === 'es' ? 'en' : 'es'; try { localStorage.lang = lang; } catch (e) {} paint(); };
openDrill(store.get('drill', DRILLS[0].id));
paint();
