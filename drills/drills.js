// ---------- Language (shared with Enroque: same localStorage key, Spanish by default) ----------
const T = {
  es: {
    login: 'Entrar con Lichess', logged: '✓ Lichess', play: 'Jugar', puzzles: 'Puzzles', drills: 'Drills', library: 'Biblioteca', learn: 'Aprender', soon: 'pronto', other: 'EN',
    names: { 'invisible-knight': 'Caballo invisible', 'knight-forks': 'Forks de caballo', 'safe-square': 'Casilla segura', 'fork-skewer': 'Fork o skewer', 'safe-moves': 'Movimientos seguros', 'capture-path': 'Ruta de capturas', 'king-zone': 'Zona del rey', 'loose-pieces': 'Piezas colgadas' }, aria: 'Drill',
    level: 'Nivel', notation: 'Notación', show: 'Mostrar', jump: 'salto', jumps: 'saltos',
    arrows: 'Flechas ↑↑→', words: 'Palabras', clock: 'Reloj', clockhard: 'Reloj difícil', step: 'Paso a paso', seq: 'Secuencia',
    remember: 'Recuerda dónde está el caballo', start: 'Empezar', next: 'Siguiente', answer: 'Responder',
    jumpOf: (i, n) => 'Salto ' + i + ' de ' + n, tapEnd: 'Toca la casilla donde termina el caballo',
    where: '¿Dónde está el caballo ahora? Toca la casilla', ok: 'Correcto ✓',
    no: s => 'No exactamente. El caballo está en ' + s, legend: 'S = salida, números = casillas de llegada',
    again: 'Nueva posición', pieces: 'Piezas', random: 'Aleatorio (2-8)',
    fkTask: 'Toca cada casilla donde un caballo hace fork (ataca 2 o más piezas) sin poder ser capturado.',
    fkLeft: n => n === 1 ? 'Falta 1 casilla' : 'Faltan ' + n + ' casillas', fkNone: 'No falta ninguna',
    fkErr: (a, b) => 'Errores: ' + (a + b) + ' (amenaza ' + a + ', sin fork ' + b + ')',
    fkOk: (sq, list) => '✓ ' + sq + ': ataca ' + list, fkThreat: (sq, list) => sq + ': lo capturaría ' + list,
    fkWeak: (sq, k) => sq + ': ataca ' + k + (k === 1 ? ' pieza' : ' piezas') + ', hacen falta 2', fkBusy: sq => sq + ' está ocupada',
    fkDone: n => n ? '¡Completo! Con ' + n + (n === 1 ? ' error' : ' errores') : '¡Completo y sin errores!', fkReveal: 'Mostrar las que faltan', fkGaveUp: 'Estas eran las que faltaban',
    and: ' y ', in: ' en ', pn: { K: 'rey', Q: 'dama', R: 'torre', B: 'alfil', N: 'caballo', P: 'peón' },
    fkScore: (a, b) => 'Sin errores: ' + a + ' de ' + b,
    rnd: 'Aleatorio', cpPiece: 'Pieza', cpCount: 'Peones', cpTask: 'Captura todas las piezas rivales, una por salto: cada movimiento debe capturar. Si eliges un camino sin salida, pierdes.',
    cpProg: (k, n) => 'Capturas: ' + k + ' de ' + n, cpPick: 'Toca una pieza rival para capturarla', cpCannot: sq => sq + ': tu pieza no puede capturarla desde aquí',
    cpBlocked: (sq, by) => sq + ': el camino está bloqueado por ' + by, cpOk: sq => '✓ ' + sq, cpWin: '¡Ruta completa!',
    cpLost: 'Sin salida: desde ahí ya no se pueden capturar todas. Esta es una ruta posible.', cpRetry: 'Reintentar', cpScore: (a, b) => 'A la primera: ' + a + ' de ' + b,
    kzTask: 'Marca las casillas junto al rey donde una pieza rival puede llegar en la próxima jugada, dar jaque y quedar protegida: así el rey no puede capturarla.', kzLeft: n => n === 1 ? 'Falta 1 casilla' : 'Faltan ' + n + ' casillas',
    kzErr: n => 'Errores: ' + n, kzOk: (sq, who, prot) => '✓ ' + sq + ': ' + who + ' llega, da jaque y queda protegida por ' + prot,
    kzNoCheck: (sq, who) => sq + ': ' + who + ' puede llegar, pero desde ahí no da jaque', kzUnprot: (sq, who) => sq + ': ' + who + ' daría jaque, pero nadie la protege y el rey la captura', kzNone: sq => sq + ': ninguna pieza rival puede llegar ahí en una jugada', kzOut: 'Elige entre las casillas resaltadas',
    kzDone: n => n ? 'Completo con ' + n + (n === 1 ? ' error' : ' errores') : '¡Perfecto!', kzGaveUp: 'Estas eran las que faltaban', kzScore: (a, b) => 'Perfectas: ' + a + ' de ' + b, kzRival: 'Piezas rivales',
    lpTask: 'Marca todas las piezas sin protección, de cualquier color. Los reyes no cuentan.', lpLeft: n => n === 1 ? 'Falta 1 pieza' : 'Faltan ' + n + ' piezas',
    lpErr: n => 'Errores: ' + n, lpOk: sq => '✓ ' + sq + ': sin protección', lpProt: (sq, list) => sq + ': está protegida por ' + list, lpKing: 'El rey no cuenta',
    lpDone: n => n ? 'Completo con ' + n + (n === 1 ? ' error' : ' errores') : '¡Perfecto!', lpGaveUp: 'Estas eran las que faltaban', lpScore: (a, b) => 'Perfectas: ' + a + ' de ' + b, lpSide: 'Piezas por bando',
    smLevel: 'Nivel', smTask: 'Marca todas las casillas seguras a las que puede moverse tu pieza (la del anillo azul), según cómo se mueve. Puedes capturar, pero la casilla debe quedar sin atacar.',
    smLeft: n => n === 1 ? 'Falta 1 casilla segura' : 'Faltan ' + n + ' casillas seguras', smErr: (a, b) => 'Errores: ' + (a + b) + ' (atacada ' + a + ', movimiento imposible ' + b + ')',
    smOk: (sq, cap) => '✓ ' + sq + (cap ? ': captura y queda a salvo' : ': a salvo'), smThreat: (sq, list, cap) => sq + (cap ? ': la pieza está protegida por ' : ': la capturaría ') + list,
    smIllegal: sq => sq + ': tu pieza no puede moverse ahí', smBlocked: (sq, by) => sq + ': el camino está bloqueado por ' + by,
    smDone: (n, up) => n ? 'Completo con ' + n + (n === 1 ? ' error' : ' errores') + '. Mismo nivel.' : (up ? '¡Perfecto! Subes al nivel ' + up : '¡Perfecto!'),
    smReveal: 'Mostrar las que faltan', smGaveUp: 'Estas eran las que faltaban', smScore: (a, b) => 'Perfectas: ' + a + ' de ' + b,
    fsPiece: 'Tu pieza', fsRival: 'Pieza rival', fsRandom: 'Aleatoria', fsMarks: n => 'Marcadas: ' + n, fsCheck: 'Comprobar', fsNone: 'No es posible',
    fsTask: 'Tu pieza no está en el tablero. Marca cada casilla donde haría un fork (ataca al rey y a la otra pieza a la vez) o un skewer (una con la otra detrás en línea) y donde no pueda ser capturada. Si no hay ninguna, pulsa No es posible.',
    fsPerfect: '¡Perfecto!', fsPerfectNone: 'Correcto: no había ninguna', fsMist: n => n + (n === 1 ? ' casilla errónea' : ' casillas erróneas'),
    fsMiss: (n, l) => 'Faltaban: ' + l, fsAlt: l => 'También valían: ' + l, fsTapHint: 'Toca una casilla para ver por qué.',
    fsKinds: { fork: 'fork', skewer: 'skewer', pin: 'clavada' },
    fsKindTxt: { fork: 'ataca al rey y a la pieza a la vez', skewer: 'ataca al rey y la pieza queda detrás, en la misma línea', pin: 'ataca la pieza y el rey queda detrás, en la misma línea' },
    fsWin: (sq, k, txt, req) => sq + ': ' + k + ', ' + txt + '. La casilla es segura.' + (req ? '' : ' (extra, no era obligatoria)'),
    fsWhy: { none: 'no ataca ni al rey ni a la pieza', onlyK: 'solo ataca al rey', onlyM: 'solo ataca a la pieza', byK: 'el rey la captura', byM: 'la pieza rival la captura' },
    fsScore: (a, b) => 'Perfectas: ' + a + ' de ' + b,
    sfTask: 'Toca una casilla vacía que no esté atacada por ninguna pieza antes de que se acabe el tiempo.', sfStart: 'Empezar', sfEnd: 'Terminar', sfAgain: 'Jugar otra vez',
    sfLevel: l => 'Nivel ' + l, sfMax: 'máximo', sfHits: n => 'Aciertos: ' + n, sfBest: (l, n) => n ? 'Récord: ' + n + ' aciertos (nivel ' + l + ')' : '',
    sfTime: 'Se acabó el tiempo', sfAtt: (sq, list) => sq + ' está atacada por ' + list, sfExit: 'Terminaste',
    sfOver: (l, n) => 'Nivel ' + l + ' con ' + n + (n === 1 ? ' acierto' : ' aciertos') + '. En verde, las casillas seguras.', score: (l, a, b) => 'Nivel ' + l + ': ' + a + ' de ' + b + ' correctas'
  },
  en: {
    login: 'Log in with Lichess', logged: '✓ Lichess', play: 'Play', puzzles: 'Puzzles', drills: 'Drills', library: 'Library', learn: 'Learn', soon: 'soon', other: 'ES',
    names: { 'invisible-knight': 'Invisible Knight', 'knight-forks': 'Knight forks', 'safe-square': 'Safe Square Survivor', 'fork-skewer': 'Fork or skewer', 'safe-moves': 'Safe moves', 'capture-path': 'Capture path', 'king-zone': 'King zone', 'loose-pieces': 'Loose pieces' }, aria: 'Drill',
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
    rnd: 'Random', cpPiece: 'Piece', cpCount: 'Pawns', cpTask: 'Capture every enemy piece, one per jump: every move must capture. If you pick a dead-end route, you lose.',
    cpProg: (k, n) => 'Captures: ' + k + ' of ' + n, cpPick: 'Tap an enemy piece to capture it', cpCannot: sq => sq + ': your piece cannot capture it from here',
    cpBlocked: (sq, by) => sq + ': the path is blocked by ' + by, cpOk: sq => '✓ ' + sq, cpWin: 'Route complete!',
    cpLost: 'Dead end: from there you can no longer capture them all. This is one possible route.', cpRetry: 'Retry', cpScore: (a, b) => 'First try: ' + a + ' of ' + b,
    kzTask: 'Mark the squares next to the king where an enemy piece can arrive on its next move, give check and be protected: so the king cannot capture it.', kzLeft: n => n === 1 ? '1 square missing' : n + ' squares missing',
    kzErr: n => 'Errors: ' + n, kzOk: (sq, who, prot) => '✓ ' + sq + ': ' + who + ' arrives, gives check and is protected by ' + prot,
    kzNoCheck: (sq, who) => sq + ': ' + who + ' can arrive, but gives no check from there', kzUnprot: (sq, who) => sq + ': ' + who + ' would give check, but nothing protects it and the king captures it', kzNone: sq => sq + ': no enemy piece can arrive there in one move', kzOut: 'Choose among the highlighted squares',
    kzDone: n => n ? 'Complete with ' + n + (n === 1 ? ' error' : ' errors') : 'Perfect!', kzGaveUp: 'These were missing', kzScore: (a, b) => 'Perfect: ' + a + ' of ' + b, kzRival: 'Enemy pieces',
    lpTask: 'Mark every unprotected piece, of either color. Kings do not count.', lpLeft: n => n === 1 ? '1 piece missing' : n + ' pieces missing',
    lpErr: n => 'Errors: ' + n, lpOk: sq => '✓ ' + sq + ': unprotected', lpProt: (sq, list) => sq + ': is protected by ' + list, lpKing: 'Kings do not count',
    lpDone: n => n ? 'Complete with ' + n + (n === 1 ? ' error' : ' errors') : 'Perfect!', lpGaveUp: 'These were missing', lpScore: (a, b) => 'Perfect: ' + a + ' of ' + b, lpSide: 'Pieces per side',
    smLevel: 'Level', smTask: 'Mark every safe square your piece (the one with the blue ring) can move to, following how it moves. You may capture, but the square must end up unattacked.',
    smLeft: n => n === 1 ? '1 safe square missing' : n + ' safe squares missing', smErr: (a, b) => 'Errors: ' + (a + b) + ' (attacked ' + a + ', impossible move ' + b + ')',
    smOk: (sq, cap) => '✓ ' + sq + (cap ? ': captures and stays safe' : ': safe'), smThreat: (sq, list, cap) => sq + (cap ? ': the piece is protected by ' : ': would be captured by ') + list,
    smIllegal: sq => sq + ': your piece cannot move there', smBlocked: (sq, by) => sq + ': the path is blocked by ' + by,
    smDone: (n, up) => n ? 'Complete with ' + n + (n === 1 ? ' error' : ' errors') + '. Same level.' : (up ? 'Perfect! Up to level ' + up : 'Perfect!'),
    smReveal: 'Show the missing ones', smGaveUp: 'These were missing', smScore: (a, b) => 'Perfect: ' + a + ' of ' + b,
    fsPiece: 'Your piece', fsRival: 'Enemy piece', fsRandom: 'Random', fsMarks: n => 'Marked: ' + n, fsCheck: 'Check', fsNone: 'Not possible',
    fsTask: 'Your piece is not on the board. Mark every square where it would make a fork (attacks the king and the other piece at once) or a skewer (one with the other behind it on a line) and where it cannot be captured. If there is none, press Not possible.',
    fsPerfect: 'Perfect!', fsPerfectNone: 'Correct: there was none', fsMist: n => n + (n === 1 ? ' wrong square' : ' wrong squares'),
    fsMiss: (n, l) => 'Missed: ' + l, fsAlt: l => 'Also valid: ' + l, fsTapHint: 'Tap a square to see why.',
    fsKinds: { fork: 'fork', skewer: 'skewer', pin: 'pin' },
    fsKindTxt: { fork: 'attacks the king and the piece at once', skewer: 'attacks the king, with the piece behind it on the same line', pin: 'attacks the piece, with the king behind it on the same line' },
    fsWin: (sq, k, txt, req) => sq + ': ' + k + ', ' + txt + '. The square is safe.' + (req ? '' : ' (bonus, not required)'),
    fsWhy: { none: 'attacks neither the king nor the piece', onlyK: 'attacks only the king', onlyM: 'attacks only the piece', byK: 'the king captures it', byM: 'the enemy piece captures it' },
    fsScore: (a, b) => 'Perfect: ' + a + ' of ' + b,
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

// Fork or skewer. Your piece T (Q/R/B/N) is NOT on the board. The defender has a king K and one piece M (Q/R/B/N).
// A square is valid when T there forks K and M (attacks both at once) or skewers them (attacks one with the other directly behind it
// on the same line) AND the square itself is safe: neither the king nor the other piece can capture T there. Nothing that happens
// after the capture matters; only the geometry and the safety of that one square.
const fsKey = (x, y) => x + ',' + y;
const fsHas = (list, x, y) => list.some(p => p[0] === x && p[1] === y);
function fsBehind(a, p, q) {                     // p lies between a and q on one straight line
  const dx = q.x - a.x, dy = q.y - a.y, ex = p.x - a.x, ey = p.y - a.y;
  return dx * ey - dy * ex === 0 && dx * ex + dy * ey > 0 && Math.abs(ex) + Math.abs(ey) < Math.abs(dx) + Math.abs(dy);
}
function fsEval(T, K, M, s) {                    // fork and skewer are required; pin (piece in front, king behind) is accepted as an extra
  const A = { t: T, x: s[0], y: s[1] }, occ = {}; [K, M, A].forEach(p => { occ[fsKey(p.x, p.y)] = 1; });
  const at = pieceAttacks(T, A.x, A.y, occ), chk = fsHas(at, K.x, K.y), hit = fsHas(at, M.x, M.y), slider = T !== 'N';
  let kind = null;
  if (chk && hit) kind = 'fork'; else if (slider && chk && fsBehind(A, K, M)) kind = 'skewer'; else if (slider && hit && fsBehind(A, M, K)) kind = 'pin';
  if (!kind) return { win: false, reason: chk ? 'onlyK' : hit ? 'onlyM' : 'none', decoy: chk || hit };
  if (Math.max(Math.abs(K.x - A.x), Math.abs(K.y - A.y)) === 1) return { win: false, reason: 'byK', decoy: true };
  if (fsHas(pieceAttacks(M.t, M.x, M.y, occ), A.x, A.y)) return { win: false, reason: 'byM', decoy: true };
  return { win: true, kind };
}
function fsAnalyse(T, K, M) {                    // R = forks and skewers (required), B = pins (extras)
  const res = {}, R = [], B = []; let decoys = 0;
  for (let x = 0; x < 8; x++) for (let y = 0; y < 8; y++) {
    if ((x === K.x && y === K.y) || (x === M.x && y === M.y)) continue;
    const r = fsEval(T, K, M, [x, y]); res[fsKey(x, y)] = r;
    if (r.win) (r.kind === 'fork' || r.kind === 'skewer' ? R : B).push(fsKey(x, y)); else if (r.decoy) decoys++;
  }
  return { res, R, B, decoys };
}
function genFS(tSel, mSel, rnd) {                // about 30% of positions have no answer, with near-miss decoys when possible
  rnd = rnd || Math.random; const pick = () => 'QRBN'[Math.floor(rnd() * 4)], T = tSel || pick(); const Mt = mSel || pick();
  let none = rnd() < 0.3, last = null;
  for (let tries = 0; tries < 3000; tries++) {
    if (tries === 600) none = !none;             // this pairing never gives the wanted kind: take the other
    const kx = Math.floor(rnd() * 8), ky = Math.floor(rnd() * 8); let mx, my;
    do { mx = Math.floor(rnd() * 8); my = Math.floor(rnd() * 8); } while (mx === kx && my === ky);
    const K = { x: kx, y: ky }, M = { t: Mt, x: mx, y: my }, a = fsAnalyse(T, K, M), g = { T, K, M, R: a.R, B: a.B, res: a.res };
    if (a.R.length || !a.B.length) last = g;
    if (none) { if (a.R.length || a.B.length) continue; if (tries < 300 && a.decoys < 1) continue; }
    else if (!a.R.length || (a.R.length > 10 && tries < 1500)) continue;
    return g;
  }
  return last;
}

// Safe moves: enemy pieces of one colour plus ONE piece of the other colour (yours, on the board). Mark every square your piece can
// move to by its own rules where it would not be attacked afterwards. Captures count (the captured piece disappears, and the lines it
// was blocking open). Pins are ignored: a piece attacks even if it could not legally capture.
function smTargets(t, color, x, y, enemies) {     // destinations by movement rules: [{x, y, cap}], cap = index of the captured enemy or -1
  const at = {}; enemies.forEach((p, i) => { at[fsKey(p.x, p.y)] = i; });
  const out = [], ok = (a, b) => a >= 0 && a < 8 && b >= 0 && b < 8;
  const add = (a, b) => { const i = at[fsKey(a, b)]; out.push({ x: a, y: b, cap: i === undefined ? -1 : i }); return i !== undefined; };
  if (t === 'N') { KM.forEach(([dx, dy]) => { if (ok(x + dx, y + dy)) add(x + dx, y + dy); }); return out; }
  if (t === 'K') { for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) if ((dx || dy) && ok(x + dx, y + dy)) add(x + dx, y + dy); return out; }
  if (t === 'P') {
    const d = color === 'w' ? 1 : -1, start = color === 'w' ? 1 : 6;
    if (ok(x, y + d) && at[fsKey(x, y + d)] === undefined) { out.push({ x, y: y + d, cap: -1 }); if (y === start && at[fsKey(x, y + 2 * d)] === undefined) out.push({ x, y: y + 2 * d, cap: -1 }); }
    [-1, 1].forEach(dx => { if (ok(x + dx, y + d) && at[fsKey(x + dx, y + d)] !== undefined) add(x + dx, y + d); });
    return out;
  }
  const dirs = t === 'Q' ? SL.R.concat(SL.B) : SL[t];
  dirs.forEach(([dx, dy]) => { let a = x + dx, b = y + dy; while (ok(a, b)) { if (add(a, b)) break; a += dx; b += dy; } });
  return out;
}
function smAnalyse(t, color, from, enemies) {      // legal = every destination, safe = those left unattacked
  const ec = color === 'w' ? 'b' : 'w', legal = [], safe = [];
  smTargets(t, color, from.x, from.y, enemies).forEach(m => {
    const rest = enemies.filter((_, i) => i !== m.cap), occ = {}; rest.forEach(p => { occ[fsKey(p.x, p.y)] = 1; }); occ[fsKey(m.x, m.y)] = 1;
    const att = rest.filter(p => pieceAttacks(p.t, p.x, p.y, occ, ec).some(([a, b]) => a === m.x && b === m.y));
    const r = { x: m.x, y: m.y, cap: m.cap >= 0, att }; legal.push(r); if (!att.length) safe.push(r);
  });
  return { legal, safe };
}
function smWhy(t, color, from, enemies, x, y) {   // why the piece cannot go to x,y: 'blocked' (with the blocker) or 'illegal'
  const dx = x - from.x, dy = y - from.y, at = {}; enemies.forEach(p => { at[fsKey(p.x, p.y)] = p; });
  if (t === 'Q' || t === 'R' || t === 'B') {
    const ok = (t === 'Q' && (!dx || !dy || Math.abs(dx) === Math.abs(dy))) || (t === 'R' && (!dx || !dy)) || (t === 'B' && Math.abs(dx) === Math.abs(dy));
    if (ok && (dx || dy)) { const sx = Math.sign(dx), sy = Math.sign(dy); let a = from.x + sx, b = from.y + sy; while (a !== x || b !== y) { if (at[fsKey(a, b)]) return { why: 'blocked', by: at[fsKey(a, b)] }; a += sx; b += sy; } if (at[fsKey(x, y)] === undefined) return { why: 'illegal' }; }
  }
  if (t === 'P') {
    const d = color === 'w' ? 1 : -1, start = color === 'w' ? 1 : 6;
    if (dx === 0 && (dy === d || (dy === 2 * d && from.y === start))) { const b1 = at[fsKey(from.x, from.y + d)], b2 = dy === 2 * d ? at[fsKey(x, y)] : null; if (b1) return { why: 'blocked', by: b1 }; if (b2) return { why: 'blocked', by: b2 }; }
  }
  return { why: 'illegal' };
}
const SM_MAX = 10;
const SM = [      // enemy pieces, enemy types, types of your piece, how many safe squares remain (few and fewer)
  { n: 3, pool: 'RBN', mine: 'RBN', lo: 5, hi: 8 }, { n: 4, pool: 'RBN', mine: 'RBN', lo: 4, hi: 7 }, { n: 5, pool: 'QRBN', mine: 'QRBN', lo: 4, hi: 6 },
  { n: 6, pool: 'QRBN', mine: 'QRBN', lo: 3, hi: 5 }, { n: 7, pool: 'QRBNP', mine: 'QRBNKP', lo: 3, hi: 4 }, { n: 8, pool: 'QRBNPP', mine: 'QRBNKP', lo: 2, hi: 4 },
  { n: 9, pool: 'QRRBBNPP', mine: 'QRBNKP', lo: 2, hi: 3 }, { n: 10, pool: 'QRRBBNPP', mine: 'QRBNKP', lo: 2, hi: 2 }, { n: 11, pool: 'QRRBBNPP', mine: 'QRBNKP', lo: 1, hi: 2 },
  { n: 12, pool: 'QRRBBNPP', mine: 'QRBNKP', lo: 1, hi: 1 }
];
function genSM(level, rnd) {
  rnd = rnd || Math.random; const c = SM[Math.min(level, SM_MAX) - 1]; let best = null, bd = 1e9;
  for (let tries = 0; tries < 8000; tries++) {
    const mc = rnd() < 0.5 ? 'w' : 'b', ec = mc === 'w' ? 'b' : 'w', types = [];
    if (level >= 5 && rnd() < 0.5) types.push('K');
    while (types.length < c.n) types.push(c.pool[Math.floor(rnd() * c.pool.length)]);
    const t = c.mine[Math.floor(rnd() * c.mine.length)], used = {};
    const place = (ty, mine) => { let x, y; do { x = Math.floor(rnd() * 8); y = ty === 'P' ? (mine ? (mc === 'w' ? 1 + Math.floor(rnd() * 4) : 3 + Math.floor(rnd() * 4)) : 1 + Math.floor(rnd() * 6)) : Math.floor(rnd() * 8); } while (used[fsKey(x, y)]); used[fsKey(x, y)] = 1; return { t: ty, x, y }; };
    const me = place(t, true), enemies = types.map(ty => place(ty, false)), a = smAnalyse(t, mc, me, enemies), k = a.safe.length;
    if (!k) continue; const unsafe = a.legal.length - k, need = level <= 2 ? 1 : 2;
    const g = { t, mc, ec, me, enemies, legal: a.legal, safe: a.safe };
    if (k >= c.lo && k <= c.hi && unsafe >= need) return g;
    const d = (k < c.lo ? c.lo - k : k > c.hi ? k - c.hi : 0) + (unsafe < need ? need - unsafe : 0); if (d < bd) { bd = d; best = g; }
  }
  return best;
}

// Capture path: your piece P and n enemy pawns. Every move must capture a pawn, so n pawns take n moves. The route exists by
// construction; a wrong first choice can strand the piece. Nothing ever captures your piece: only visualizing the path matters.
function ptCaps(t, mc, pos, targets, mask) {      // legal captures from pos; i = index of the captured target
  const rem = [], idx = []; targets.forEach((p, i) => { if ((mask >> i) & 1) { rem.push(p); idx.push(i); } });
  return smTargets(t, mc, pos.x, pos.y, rem).filter(m => m.cap >= 0).map(m => ({ x: m.x, y: m.y, i: idx[m.cap] }));
}
function ptSolve(t, mc, pos, targets, mask, memo) {   // an order of target indexes that captures them all, or null
  if (!mask) return [];
  const key = pos.x + ',' + pos.y + ',' + mask; if (memo.has(key)) return memo.get(key);
  let res = null;
  for (const m of ptCaps(t, mc, pos, targets, mask)) { const r = ptSolve(t, mc, m, targets, mask & ~(1 << m.i), memo); if (r) { res = [m.i].concat(r); break; } }
  memo.set(key, res); return res;
}
function genPT(tSel, nSel, rnd) {
  rnd = rnd || Math.random; const kinds = 'NNBRQK', t = tSel || kinds[Math.floor(rnd() * kinds.length)], n = nSel || 2 + Math.floor(rnd() * 7), mc = rnd() < 0.5 ? 'w' : 'b';
  let last = null;
  for (let tries = 0; tries < 3000; tries++) {
    const start = { x: Math.floor(rnd() * 8), y: Math.floor(rnd() * 8) }, used = {}, targets = []; used[fsKey(start.x, start.y)] = 1; let cur = start, ok = true;
    for (let i = 0; i < n && ok; i++) {            // random walk on the empty board; the squares it lands on get the pawns
      const opts = smTargets(t, mc, cur.x, cur.y, []).filter(m => !used[fsKey(m.x, m.y)] && m.y >= 1 && m.y <= 6);
      if (!opts.length) { ok = false; break; }
      const m = opts[Math.floor(rnd() * opts.length)]; used[fsKey(m.x, m.y)] = 1; targets.push({ t: 'P', x: m.x, y: m.y }); cur = m;
    }
    if (!ok) continue;
    const full = (1 << n) - 1, memo = new Map(), sol = ptSolve(t, mc, start, targets, full, memo); if (!sol) continue;
    const caps = ptCaps(t, mc, start, targets, full), good = caps.filter(c => ptSolve(t, mc, c, targets, full & ~(1 << c.i), memo));
    last = { t, mc, start, targets, sol };
    if (n >= 3 && tries < 1500 && (caps.length < 2 || good.length === caps.length)) continue;      // want at least one tempting dead end
    return last;
  }
  return last;
}

// King zone: our king alone against n enemy pieces (queens, rooks, bishops, knights, pawns; no enemy king). The squares around the
// king are highlighted. A square is valid when an enemy piece can move there NEXT move, give check from there, and be protected by
// another enemy piece, so the king cannot capture it. Whether the king has other defences is ignored: this trains seeing the pattern.
function kzAnalyse(king, enemies, ec) {
  const all = [{ t: 'K', x: king.x, y: king.y }].concat(enemies), lastRank = ec === 'w' ? 7 : 0, cand = [];
  const o0 = {}; all.forEach(p => { o0[fsKey(p.x, p.y)] = 1; });
  const check = enemies.some(p => fsHas(pieceAttacks(p.t, p.x, p.y, o0, ec), king.x, king.y));
  for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) {
    const x = king.x + dx, y = king.y + dy; if ((!dx && !dy) || x < 0 || x > 7 || y < 0 || y > 7 || o0[fsKey(x, y)]) continue;
    const r = { x, y, ok: false, why: 'none', by: null, prot: [] };
    enemies.forEach((p, i) => {
      if (r.ok) return;
      const others = all.filter(q => q !== p);
      const reach = smTargets(p.t, ec, p.x, p.y, others).some(m => m.x === x && m.y === y && m.cap < 0) && !(p.t === 'P' && y === lastRank);
      if (!reach) return;
      const occ = {}; others.forEach(q => { occ[fsKey(q.x, q.y)] = 1; }); occ[fsKey(x, y)] = 1;       // the board after the move
      if (!fsHas(pieceAttacks(p.t, x, y, occ, ec), king.x, king.y)) { if (r.why === 'none') { r.why = 'nocheck'; r.by = p; } return; }
      const prot = enemies.filter((q, j) => j !== i && fsHas(pieceAttacks(q.t, q.x, q.y, occ, ec), x, y));
      if (prot.length) { r.ok = true; r.why = 'ok'; r.by = p; r.prot = prot; } else if (r.why !== 'unprot') { r.why = 'unprot'; r.by = p; }
    });
    cand.push(r);
  }
  return { cand, valid: cand.filter(c => c.ok), check };
}
function genKZ(nSel, rnd) {
  rnd = rnd || Math.random; let last = null;
  for (let tries = 0; tries < 20000; tries++) {
    const mc = rnd() < 0.5 ? 'w' : 'b', ec = mc === 'w' ? 'b' : 'w', n = nSel || 3 + Math.floor(rnd() * 5);
    const king = { x: Math.floor(rnd() * 8), y: Math.floor(rnd() * 8) }, used = {}; used[fsKey(king.x, king.y)] = 1;
    const enemies = []; for (let i = 0; i < n; i++) { const t = 'QRRBBNNP'[Math.floor(rnd() * 8)]; let x, y; do { x = Math.floor(rnd() * 8); y = t === 'P' ? 1 + Math.floor(rnd() * 6) : Math.floor(rnd() * 8); } while (used[fsKey(x, y)]); used[fsKey(x, y)] = 1; enemies.push({ t, x, y }); }
    const a = kzAnalyse(king, enemies, ec); if (a.check || a.cand.length < 3 || !a.valid.length) continue;
    const g = { mc, ec, king, enemies, cand: a.cand, valid: a.valid }; last = g;
    if (a.valid.length > 3) continue;
    if (tries < 10000 && !a.cand.some(c => !c.ok && c.by)) continue;           // want decoys: a piece that reaches the square but does not check, or checks unprotected
    return g;
  }
  return last;
}

// Loose pieces: a few pieces of each colour (plus kings). Mark every piece that no friendly piece protects.
function lpAnalyse(pieces) {
  const occ = {}; pieces.forEach(p => { occ[fsKey(p.x, p.y)] = 1; });
  const at = pieces.map(p => pieceAttacks(p.t, p.x, p.y, occ, p.c));
  return pieces.map((p, i) => ({ p, def: pieces.filter((q, j) => j !== i && q.c === p.c && fsHas(at[j], p.x, p.y)) }));
}
function genLP(kSel, rnd) {
  rnd = rnd || Math.random;
  for (let tries = 0; tries < 6000; tries++) {
    const k = kSel || 2 + Math.floor(rnd() * 4), used = {}, pieces = [];
    const put = (t, c) => { let x, y; do { x = Math.floor(rnd() * 8); y = t === 'P' ? 1 + Math.floor(rnd() * 6) : Math.floor(rnd() * 8); } while (used[fsKey(x, y)]); used[fsKey(x, y)] = 1; pieces.push({ t, c, x, y }); };
    ['w', 'b'].forEach(c => { put('K', c); const bag = ['Q', 'R', 'R', 'B', 'B', 'N', 'N', 'P', 'P', 'P', 'P']; for (let i = 0; i < k; i++) put(bag.splice(Math.floor(rnd() * bag.length), 1)[0], c); });
    const wk = pieces[0], bk = pieces[k + 1]; if (Math.max(Math.abs(wk.x - bk.x), Math.abs(wk.y - bk.y)) < 2) continue;
    const info = lpAnalyse(pieces), loose = info.filter(a => a.p.t !== 'K' && !a.def.length);
    if (loose.length < 1 || loose.length > 2 * k - 1 || loose.length > 5) continue;
    return { pieces, info, loose };
  }
  return null;
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
    clear: () => sqs.forEach(b => { b.classList.remove('real', 'bad', 'ans', 'att', 'miss', 'alt', 'me', 'cand'); b.querySelectorAll('.p,.n').forEach(e => e.remove()); })
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
  pc.onchange = () => { cnt = pc.value === 'random' ? 'random' : +pc.value; store.set('fk:count', cnt); newPuzzle(); };
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

// ---------- Drill: Fork or skewer ----------
// The defender (random colour) has a king and one piece. Your piece is NOT on the board. Tap (mark) every square where it would make
// a fork or a skewer on a square where the piece cannot be captured, then press Check, or press Not possible. No feedback until then, so the
// answer "none" is not given away. Forks and skewers are required; a pin is accepted as an extra.
function mountForkSkewer(boardEl, panel) {
  const PT = ['random', 'Q', 'R', 'B', 'N'];
  let st = store.get('fs:t', 'random'), sm = store.get('fs:m', 'random');
  if (!PT.includes(st)) st = 'random'; if (!PT.includes(sm)) sm = 'random';
  let puz = null, color = 'w', marks = {}, phase = 'mark', out = null, tapped = null;
  const bar = mk('div', 'bar'), tt = mkSelect(bar, 'fsPiece', PT), tr = mkSelect(bar, 'fsRival', PT); tt.s.id = 'fst'; tr.s.id = 'fsm'; tt.s.value = st; tr.s.value = sm;
  const say = mk('div', 'say'), stat = mk('div', 'prog'), notes = mk('div', 'notes'), none = mk('button', 'second'), act = mk('button', 'primary'), score = mk('div', 'score');
  none.type = 'button'; none.id = 'none'; act.type = 'button'; act.id = 'act';
  boardEl.replaceChildren(); panel.replaceChildren(bar, say, stat, notes, none, act, score);
  const { sqs, at, clear } = buildBoard(boardEl, (x, y) => tap(x, y));
  const opp = () => color === 'w' ? 'b' : 'w', kk = k => k.split(',').map(Number), name = k => { const [x, y] = kk(k); return sqName(x, y); };
  const cap = w => w.charAt(0).toUpperCase() + w.slice(1);
  function labels() {
    const L = T[lang];
    tt.l.firstChild.nodeValue = L.fsPiece + ' '; tr.l.firstChild.nodeValue = L.fsRival + ' ';
    tt.s.setAttribute('aria-label', L.fsPiece); tr.s.setAttribute('aria-label', L.fsRival);
    [tt.s, tr.s].forEach(s => [...s.options].forEach(o => { o.textContent = o.value === 'random' ? L.fsRandom : cap(L.pn[o.value]); }));
    none.textContent = L.fsNone;
  }
  function base() { clear(); at(puz.K.x, puz.K.y).append(pieceEl(color + 'K')); at(puz.M.x, puz.M.y).append(pieceEl(color + puz.M.t)); }
  function drawMarks() {
    base();
    Object.keys(marks).forEach(k => { const [x, y] = kk(k), p = pieceEl(opp() + puz.T); p.classList.add('ghost'); at(x, y).append(p); });
    sqs.forEach(b => b.classList.add('ans'));
  }
  function drawResult() {
    base(); const L = T[lang];
    const lab = (k, cls) => { const [x, y] = kk(k), r = puz.res[k]; at(x, y).classList.add(cls); if (r.win) at(x, y).append(mk('span', 'n', L.fsKinds[r.kind])); };
    Object.keys(marks).forEach(k => { const [x, y] = kk(k); at(x, y).append(pieceEl(opp() + puz.T)); lab(k, puz.res[k].win ? 'real' : 'bad'); });
    out.missed.forEach(k => lab(k, 'miss')); out.alt.forEach(k => lab(k, 'alt'));
    sqs.forEach(b => b.classList.add('ans'));
  }
  function line(cls, t) { notes.append(mk('div', cls, t)); }
  function paint() {
    const L = T[lang]; say.replaceChildren(); notes.replaceChildren();
    const hand = mk('div', 'hand'); hand.append(mk('span', 'p hp ' + opp() + puz.T));
    if (phase === 'mark') {
      hand.append(mk('div', 'msg sm', L.fsTask)); say.append(hand);
      stat.textContent = L.fsMarks(Object.keys(marks).length); stat.className = 'prog';
      act.textContent = L.fsCheck; none.hidden = false;
    } else {
      const w = mk('div'); w.append(mk('div', 'msg ' + (out.perfect ? 'ok' : 'no'), out.perfect ? (puz.R.length ? L.fsPerfect : L.fsPerfectNone) : (out.wrong.length ? L.fsMist(out.wrong.length) : L.fsMiss(out.missed.length, ''))));
      say.append(w); stat.textContent = ''; act.textContent = L.again; none.hidden = true;
      out.wrong.slice(0, 4).forEach(k => line('no', name(k) + ': ' + L.fsWhy[puz.res[k].reason]));
      if (out.missed.length) line('no', L.fsMiss(out.missed.length, out.missed.slice(0, 8).map(k => name(k) + ' (' + L.fsKinds[puz.res[k].kind] + ')').join(', ')));
      if (out.alt.length) line('', L.fsAlt(out.alt.slice(0, 8).map(k => name(k) + ' (' + L.fsKinds[puz.res[k].kind] + ')').join(', ')));
      if (tapped) { const r = puz.res[tapped]; line(r.win ? 'ok' : 'no', r.win ? L.fsWin(name(tapped), L.fsKinds[r.kind], L.fsKindTxt[r.kind], r.kind === 'fork' || r.kind === 'skewer') : name(tapped) + ': ' + L.fsWhy[r.reason]); }
      else line('', L.fsTapHint);
    }
    scoreLine();
  }
  function scoreLine() { const v = store.get('fs:scores', { ok: 0, total: 0 }); score.textContent = v.total ? T[lang].fsScore(v.ok, v.total) : ''; }
  function tap(x, y) {
    const k = fsKey(x, y);
    if (phase === 'mark') {
      if ((x === puz.K.x && y === puz.K.y) || (x === puz.M.x && y === puz.M.y)) return;
      if (marks[k]) delete marks[k]; else marks[k] = 1;
      drawMarks(); paint();
    } else if (puz.res[k]) { tapped = k; paint(); }
  }
  function check(noneBtn) {
    if (phase !== 'mark') return; if (noneBtn) marks = {};
    const mk_ = Object.keys(marks), wrong = mk_.filter(k => !puz.res[k].win), missed = puz.R.filter(k => !marks[k]), alt = puz.B.filter(k => !marks[k]);
    out = { wrong, missed, alt, perfect: !wrong.length && !missed.length }; phase = 'result'; tapped = null;
    const v = store.get('fs:scores', { ok: 0, total: 0 }); v.total++; if (out.perfect) v.ok++; store.set('fs:scores', v);
    drawResult(); paint();
  }
  function newPuzzle() {
    puz = genFS(st === 'random' ? null : st, sm === 'random' ? null : sm); color = Math.random() < 0.5 ? 'w' : 'b';
    marks = {}; phase = 'mark'; out = null; tapped = null; drawMarks(); paint();
  }
  tt.s.onchange = () => { st = tt.s.value; store.set('fs:t', st); newPuzzle(); };
  tr.s.onchange = () => { sm = tr.s.value; store.set('fs:m', sm); newPuzzle(); };
  none.onclick = () => check(true);
  act.onclick = () => { if (phase === 'mark') check(false); else newPuzzle(); };
  labels(); newPuzzle();
  return { unmount() {}, relabel() { labels(); if (phase === 'result') drawResult(); paint(); } };
}

// ---------- Drill: Safe moves ----------
// Enemy pieces of one colour and ONE piece of yours (blue ring). Mark every square it can move to, by its own rules, where it would
// not be attacked afterwards. Each level leaves fewer safe squares. A perfect position (no errors) raises the level.
function mountSafeMoves(boardEl, panel) {
  const LEVELS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let level = store.get('sm:level', 1); if (!LEVELS.includes(level)) level = 1;
  let puz = null, found = {}, errA = 0, errI = 0, over = false, last = null, upTo = null;
  const bar = mk('div', 'bar'), tl = mkSelect(bar, 'smLevel', LEVELS), lv = tl.s; lv.id = 'smlvl'; lv.value = level;
  const say = mk('div', 'say'), prog = mk('div', 'prog'), errs = mk('div', 'prog'), show = mk('button', 'second'), act = mk('button', 'primary'), score = mk('div', 'score');
  show.type = 'button'; show.id = 'reveal'; act.type = 'button'; act.id = 'act';
  boardEl.replaceChildren(); panel.replaceChildren(bar, say, prog, errs, show, act, score);
  const { sqs, at, clear } = buildBoard(boardEl, (x, y) => tap(x, y));
  const key = (x, y) => x + ',' + y, missing = () => puz.safe.filter(m => !found[key(m.x, m.y)]);
  const names = ps => { const L = T[lang]; const l = ps.map(p => L.pn[p.t] + L.in + sqName(p.x, p.y)); return l.length > 1 ? l.slice(0, -1).join(', ') + L.and + l[l.length - 1] : l[0]; };

  function labels() {
    const L = T[lang]; tl.l.firstChild.nodeValue = L.smLevel + ' '; lv.setAttribute('aria-label', L.smLevel);
    [...lv.options].forEach(o => { o.textContent = o.value; }); show.textContent = L.smReveal; act.textContent = L.again;
  }
  function scoreLine() { const v = store.get('sm:scores', { ok: 0, total: 0 }); score.textContent = v.total ? T[lang].smScore(v.ok, v.total) : ''; }
  function say_() {
    const L = T[lang]; say.replaceChildren(); let t, c = 'msg';
    if (!last) { t = L.smTask; c += ' sm'; }
    else if (last.kind === 'ok') { t = L.smOk(sqName(last.x, last.y), last.cap); c += ' ok'; }
    else if (last.kind === 'threat') { t = L.smThreat(sqName(last.x, last.y), names(last.att), last.cap); c += ' no'; }
    else if (last.kind === 'blocked') { t = L.smBlocked(sqName(last.x, last.y), names([last.by])); c += ' no'; }
    else if (last.kind === 'illegal') { t = L.smIllegal(sqName(last.x, last.y)); c += ' no'; }
    else if (last.kind === 'done') { t = L.smDone(errA + errI, upTo); c += errA + errI ? ' no' : ' ok'; }
    else { t = L.smGaveUp; c += ' sm'; }
    say.append(mk('div', c, t));
  }
  function status() {
    const L = T[lang], m = missing().length;
    prog.textContent = over && !m ? '' : L.smLeft(m); prog.className = 'prog';
    errs.textContent = errA + errI ? L.smErr(errA, errI) : ''; errs.className = 'prog' + (errA + errI ? ' no' : '');
    show.hidden = over; sqs.forEach(b => b.classList.toggle('ans', !over));
    say_(); scoreLine();
  }
  function finish(gaveUp) {
    over = true; last = { kind: gaveUp ? 'gaveup' : 'done' }; upTo = null;
    const perfect = !gaveUp && !errA && !errI;
    if (perfect && level < SM_MAX) { upTo = level + 1; level = upTo; store.set('sm:level', level); lv.value = level; }
    const v = store.get('sm:scores', { ok: 0, total: 0 }); v.total++; if (perfect) v.ok++; store.set('sm:scores', v);
    if (gaveUp) missing().forEach(m => at(m.x, m.y).classList.add('miss'));
    status();
  }
  function tap(x, y) {
    if (over) return;
    sqs.forEach(b => b.classList.remove('bad', 'att'));
    if (x === puz.me.x && y === puz.me.y) return;
    const k = key(x, y); if (found[k]) return;
    const m = puz.legal.find(q => q.x === x && q.y === y);
    if (m && !m.att.length) {
      found[k] = 1; at(x, y).classList.add('real');
      if (m.cap) at(x, y).append(mk('span', 'n', '×')); else { const p = pieceEl(puz.mc + puz.t); p.classList.add('ghost'); at(x, y).append(p); }
      last = { kind: 'ok', x, y, cap: m.cap };
      if (!missing().length) { finish(false); return; }
    } else if (m) {
      errA++; at(x, y).classList.add('bad'); m.att.forEach(p => at(p.x, p.y).classList.add('att'));
      last = { kind: 'threat', x, y, att: m.att, cap: m.cap };
    } else {
      errI++; at(x, y).classList.add('bad'); const w = smWhy(puz.t, puz.mc, puz.me, puz.enemies, x, y);
      last = w.why === 'blocked' ? { kind: 'blocked', x, y, by: w.by } : { kind: 'illegal', x, y };
    }
    status();
  }
  function newPuzzle() {
    puz = genSM(level); found = {}; errA = errI = 0; over = false; last = null; upTo = null; clear();
    puz.enemies.forEach(p => at(p.x, p.y).append(pieceEl(puz.ec + p.t)));
    at(puz.me.x, puz.me.y).append(pieceEl(puz.mc + puz.t)); at(puz.me.x, puz.me.y).classList.add('me');
    status();
  }
  lv.onchange = () => { level = +lv.value; store.set('sm:level', level); newPuzzle(); };
  show.onclick = () => { if (!over) finish(true); };
  act.onclick = newPuzzle;
  labels(); newPuzzle();
  return { unmount() {}, relabel() { labels(); status(); } };
}

// ---------- Drill: Capture path ----------
// Your piece and n enemy pawns. Capture all of them, one per move: every move must capture. Pick a route that strands the piece and
// you lose (the solution is then shown). Nothing ever captures your piece: this trains seeing the path.
function mountCapturePath(boardEl, panel) {
  const PCS = ['random', 'N', 'B', 'R', 'Q', 'K'], CNT = ['random', 2, 3, 4, 5, 6, 7, 8];
  let sp = store.get('cp:piece', 'N'), sc = store.get('cp:count', 'random'); if (!PCS.includes(sp)) sp = 'N'; if (!CNT.includes(sc)) sc = 'random';
  let puz = null, cur = null, mask = 0, trail = [], phase = 'play', last = null, counted = false, memo = new Map();
  const bar = mk('div', 'bar'), tp = mkSelect(bar, 'cpPiece', PCS), tc = mkSelect(bar, 'cpCount', CNT); tp.s.id = 'cpp'; tc.s.id = 'cpn'; tp.s.value = sp; tc.s.value = sc;
  const say = mk('div', 'say'), prog = mk('div', 'prog'), retry = mk('button', 'second'), act = mk('button', 'primary'), score = mk('div', 'score');
  retry.type = 'button'; retry.id = 'retry'; act.type = 'button'; act.id = 'act';
  boardEl.replaceChildren(); panel.replaceChildren(bar, say, prog, retry, act, score);
  const { sqs, at, clear } = buildBoard(boardEl, (x, y) => tap(x, y));
  const full = () => (1 << puz.targets.length) - 1, ec = () => puz.mc === 'w' ? 'b' : 'w', cap = w => w.charAt(0).toUpperCase() + w.slice(1);
  const rem = () => puz.targets.filter((p, i) => (mask >> i) & 1);
  const names = ps => { const L = T[lang]; return ps.map(p => L.pn[p.t] + L.in + sqName(p.x, p.y)).join(', '); };
  function labels() {
    const L = T[lang]; tp.l.firstChild.nodeValue = L.cpPiece + ' '; tc.l.firstChild.nodeValue = L.cpCount + ' ';
    tp.s.setAttribute('aria-label', L.cpPiece); tc.s.setAttribute('aria-label', L.cpCount);
    [...tp.s.options].forEach(o => { o.textContent = o.value === 'random' ? L.fsRandom : cap(L.pn[o.value]); });
    [...tc.s.options].forEach(o => { o.textContent = o.value === 'random' ? L.rnd : o.value; });
    retry.textContent = L.cpRetry; act.textContent = L.again;
  }
  function render() {
    clear(); puz.targets.forEach((p, i) => { if ((mask >> i) & 1) at(p.x, p.y).append(pieceEl(ec() + 'P')); });
    if (phase === 'lost') {                                  // show the start and one full route
      at(puz.start.x, puz.start.y).append(pieceEl(puz.mc + puz.t)); at(puz.start.x, puz.start.y).classList.add('me');
      puz.sol.forEach((i, k) => { const p = puz.targets[i]; at(p.x, p.y).classList.add('real'); at(p.x, p.y).append(mk('span', 'n big', String(k + 1))); });
      puz.targets.forEach((p, i) => { if (!((mask >> i) & 1)) at(p.x, p.y).append(pieceEl(ec() + 'P')); });
    } else {
      at(cur.x, cur.y).append(pieceEl(puz.mc + puz.t)); at(cur.x, cur.y).classList.add('me');
      [puz.start].concat(trail).forEach((p, k, a) => { if (k < a.length - 1) at(p.x, p.y).append(mk('span', 'n big', k ? String(k) : 'S')); });
    }
    sqs.forEach(b => b.classList.toggle('ans', phase === 'play'));
  }
  function status() {
    const L = T[lang], n = puz.targets.length; say.replaceChildren(); let t, c = 'msg';
    if (!last) { t = L.cpTask; c += ' sm'; }
    else if (last.kind === 'pick') { t = L.cpPick; c += ' sm'; }
    else if (last.kind === 'cannot') { t = L.cpCannot(sqName(last.x, last.y)); c += ' no'; }
    else if (last.kind === 'blocked') { t = L.cpBlocked(sqName(last.x, last.y), names([last.by])); c += ' no'; }
    else if (last.kind === 'ok') { t = L.cpOk(sqName(last.x, last.y)); c += ' ok'; }
    else if (last.kind === 'win') { t = L.cpWin; c += ' ok'; }
    else { t = L.cpLost; c += ' no'; }
    say.append(mk('div', c, t)); prog.textContent = L.cpProg(trail.length, n); prog.className = 'prog' + (phase === 'won' ? ' ok' : phase === 'lost' ? ' no' : '');
    const v = store.get('cp:scores', { ok: 0, total: 0 }); score.textContent = v.total ? L.cpScore(v.ok, v.total) : '';
  }
  function record(won) { if (counted) return; counted = true; const v = store.get('cp:scores', { ok: 0, total: 0 }); v.total++; if (won) v.ok++; store.set('cp:scores', v); }
  function tap(x, y) {
    if (phase !== 'play') return;
    const i = puz.targets.findIndex((p, j) => ((mask >> j) & 1) && p.x === x && p.y === y);
    if (i < 0) { last = { kind: 'pick' }; status(); return; }
    const m = ptCaps(puz.t, puz.mc, cur, puz.targets, mask).find(c => c.i === i);
    if (!m) { const w = smWhy(puz.t, puz.mc, cur, rem(), x, y); last = w.why === 'blocked' ? { kind: 'blocked', x, y, by: w.by } : { kind: 'cannot', x, y }; status(); return; }
    trail.push({ x, y }); cur = { x, y }; mask &= ~(1 << i);
    if (!mask) { phase = 'won'; last = { kind: 'win' }; record(true); }
    else if (!ptSolve(puz.t, puz.mc, cur, puz.targets, mask, memo)) { phase = 'lost'; last = { kind: 'lost' }; record(false); }
    else last = { kind: 'ok', x, y };
    render(); status();
  }
  function reset() { cur = puz.start; mask = full(); trail = []; phase = 'play'; last = null; memo = new Map(); render(); status(); }
  function newPuzzle() { puz = genPT(sp === 'random' ? null : sp, sc === 'random' ? null : sc); counted = false; reset(); }
  tp.s.onchange = () => { sp = tp.s.value; store.set('cp:piece', sp); newPuzzle(); };
  tc.s.onchange = () => { sc = tc.s.value === 'random' ? 'random' : +tc.s.value; store.set('cp:count', sc); newPuzzle(); };
  retry.onclick = reset; act.onclick = newPuzzle;
  labels(); newPuzzle();
  return { unmount() {}, relabel() { labels(); status(); } };
}

// ---------- Drill: King zone ----------
// Our king with the squares around it highlighted, and enemy pieces. Mark every highlighted square where an enemy piece could arrive
// on its next move, give check, and be protected (so the king cannot take it).
function mountKingZone(boardEl, panel) {
  const CNT = ['random', 2, 3, 4, 5, 6, 7, 8], GLY = { Q: '♛', R: '♜', B: '♝', N: '♞', P: '♟' };
  let sc = store.get('kz:count', 'random'); if (!CNT.includes(sc)) sc = 'random';
  let puz = null, found = {}, errs = 0, over = false, last = null;
  const bar = mk('div', 'bar'), tc = mkSelect(bar, 'kzRival', CNT); tc.s.id = 'kzn'; tc.s.value = sc;
  const say = mk('div', 'say'), prog = mk('div', 'prog'), er = mk('div', 'prog'), show = mk('button', 'second'), act = mk('button', 'primary'), score = mk('div', 'score');
  show.type = 'button'; show.id = 'reveal'; act.type = 'button'; act.id = 'act';
  boardEl.replaceChildren(); panel.replaceChildren(bar, say, prog, er, show, act, score);
  const { sqs, at, clear } = buildBoard(boardEl, (x, y) => tap(x, y));
  const key = (x, y) => x + ',' + y, missing = () => puz.valid.filter(c => !found[key(c.x, c.y)]);
  const names = ps => { const L = T[lang]; return ps.map(p => L.pn[p.t] + L.in + sqName(p.x, p.y)).join(', '); };
  function labels() { const L = T[lang]; tc.l.firstChild.nodeValue = L.kzRival + ' '; tc.s.setAttribute('aria-label', L.kzRival); [...tc.s.options].forEach(o => { o.textContent = o.value === 'random' ? L.rnd : o.value; }); show.textContent = L.fkReveal; act.textContent = L.again; }
  function say_() {
    const L = T[lang]; say.replaceChildren(); let t, c = 'msg'; const q = last && puz.cand.find(z => z.x === last.x && z.y === last.y), sq = last && sqName(last.x, last.y);
    if (!last) { t = L.kzTask; c += ' sm'; }
    else if (last.kind === 'ok') { t = L.kzOk(sq, names([q.by]), names(q.prot)); c += ' ok'; }
    else if (last.kind === 'nocheck') { t = L.kzNoCheck(sq, names([q.by])); c += ' no'; }
    else if (last.kind === 'unprot') { t = L.kzUnprot(sq, names([q.by])); c += ' no'; }
    else if (last.kind === 'none') { t = L.kzNone(sq); c += ' no'; }
    else if (last.kind === 'out') { t = L.kzOut; c += ' sm'; }
    else if (last.kind === 'done') { t = L.kzDone(errs); c += errs ? ' no' : ' ok'; }
    else { t = L.kzGaveUp; c += ' sm'; }
    say.append(mk('div', c, t));
  }
  function status() {
    const L = T[lang], m = missing().length;
    prog.textContent = over && !m ? '' : L.kzLeft(m); prog.className = 'prog'; er.textContent = errs ? L.kzErr(errs) : ''; er.className = 'prog' + (errs ? ' no' : '');
    show.hidden = over; sqs.forEach(b => b.classList.toggle('ans', !over)); say_();
    const v = store.get('kz:scores', { ok: 0, total: 0 }); score.textContent = v.total ? L.kzScore(v.ok, v.total) : '';
  }
  function finish(gaveUp) {
    over = true; last = { kind: gaveUp ? 'gaveup' : 'done' };
    const v = store.get('kz:scores', { ok: 0, total: 0 }); v.total++; if (!gaveUp && !errs) v.ok++; store.set('kz:scores', v);
    puz.valid.forEach(c => { const b = at(c.x, c.y); b.classList.remove('cand'); if (!found[key(c.x, c.y)]) { b.classList.add('miss'); b.append(mk('span', 'n big', GLY[c.by.t])); } });
    status();
  }
  function tap(x, y) {
    if (over) return; sqs.forEach(b => b.classList.remove('bad', 'att'));
    const c = puz.cand.find(q => q.x === x && q.y === y); if (!c) { last = { kind: 'out' }; status(); return; }
    if (found[key(x, y)]) return;
    if (c.ok) {
      found[key(x, y)] = 1; const b = at(x, y); b.classList.remove('cand'); b.classList.add('real'); b.append(mk('span', 'n big', GLY[c.by.t]));
      last = { kind: 'ok', x, y }; if (!missing().length) { finish(false); return; }
    } else { errs++; at(x, y).classList.add('bad'); if (c.by) at(c.by.x, c.by.y).classList.add('att'); last = { kind: c.why, x, y }; }
    status();
  }
  function newPuzzle() {
    puz = genKZ(sc === 'random' ? null : sc); found = {}; errs = 0; over = false; last = null; clear();
    at(puz.king.x, puz.king.y).append(pieceEl(puz.mc + 'K')); puz.enemies.forEach(p => at(p.x, p.y).append(pieceEl(puz.ec + p.t)));
    puz.cand.forEach(c => at(c.x, c.y).classList.add('cand')); status();
  }
  tc.s.onchange = () => { sc = tc.s.value === 'random' ? 'random' : +tc.s.value; store.set('kz:count', sc); newPuzzle(); };
  show.onclick = () => { if (!over) finish(true); }; act.onclick = newPuzzle;
  labels(); newPuzzle();
  return { unmount() {}, relabel() { labels(); status(); } };
}

// ---------- Drill: Loose pieces ----------
// A few pieces of each colour plus both kings. Mark every piece (kings excepted) that no friendly piece protects.
function mountLoosePieces(boardEl, panel) {
  const CNT = ['random', 2, 3, 4, 5];
  let sc = store.get('lp:count', 'random'); if (!CNT.includes(sc)) sc = 'random';
  let puz = null, found = {}, errs = 0, over = false, last = null;
  const bar = mk('div', 'bar'), tc = mkSelect(bar, 'lpSide', CNT); tc.s.id = 'lpn'; tc.s.value = sc;
  const say = mk('div', 'say'), prog = mk('div', 'prog'), er = mk('div', 'prog'), show = mk('button', 'second'), act = mk('button', 'primary'), score = mk('div', 'score');
  show.type = 'button'; show.id = 'reveal'; act.type = 'button'; act.id = 'act';
  boardEl.replaceChildren(); panel.replaceChildren(bar, say, prog, er, show, act, score);
  const { sqs, at, clear } = buildBoard(boardEl, (x, y) => tap(x, y));
  const key = (x, y) => x + ',' + y, missing = () => puz.loose.filter(a => !found[key(a.p.x, a.p.y)]);
  const names = ps => { const L = T[lang]; return ps.map(p => L.pn[p.t] + L.in + sqName(p.x, p.y)).join(', '); };
  function labels() { const L = T[lang]; tc.l.firstChild.nodeValue = L.lpSide + ' '; tc.s.setAttribute('aria-label', L.lpSide); [...tc.s.options].forEach(o => { o.textContent = o.value === 'random' ? L.rnd : o.value; }); show.textContent = L.fkReveal; act.textContent = L.again; }
  function say_() {
    const L = T[lang]; say.replaceChildren(); let t, c = 'msg';
    if (!last) { t = L.lpTask; c += ' sm'; }
    else if (last.kind === 'ok') { t = L.lpOk(sqName(last.x, last.y)); c += ' ok'; }
    else if (last.kind === 'prot') { t = L.lpProt(sqName(last.x, last.y), names(last.def)); c += ' no'; }
    else if (last.kind === 'king') { t = L.lpKing; c += ' sm'; }
    else if (last.kind === 'done') { t = L.lpDone(errs); c += errs ? ' no' : ' ok'; }
    else { t = L.lpGaveUp; c += ' sm'; }
    say.append(mk('div', c, t));
  }
  function status() {
    const L = T[lang], m = missing().length;
    prog.textContent = over && !m ? '' : L.lpLeft(m); prog.className = 'prog'; er.textContent = errs ? L.lpErr(errs) : ''; er.className = 'prog' + (errs ? ' no' : '');
    show.hidden = over; sqs.forEach(b => b.classList.toggle('ans', !over)); say_();
    const v = store.get('lp:scores', { ok: 0, total: 0 }); score.textContent = v.total ? L.lpScore(v.ok, v.total) : '';
  }
  function finish(gaveUp) {
    over = true; last = { kind: gaveUp ? 'gaveup' : 'done' };
    const v = store.get('lp:scores', { ok: 0, total: 0 }); v.total++; if (!gaveUp && !errs) v.ok++; store.set('lp:scores', v);
    if (gaveUp) missing().forEach(a => at(a.p.x, a.p.y).classList.add('miss'));
    status();
  }
  function tap(x, y) {
    if (over) return; sqs.forEach(b => b.classList.remove('bad', 'att'));
    const a = puz.info.find(q => q.p.x === x && q.p.y === y); if (!a) return;
    if (a.p.t === 'K') { last = { kind: 'king' }; status(); return; }
    if (found[key(x, y)]) return;
    if (!a.def.length) { found[key(x, y)] = 1; at(x, y).classList.add('real'); last = { kind: 'ok', x, y }; if (!missing().length) { finish(false); return; } }
    else { errs++; at(x, y).classList.add('bad'); a.def.forEach(p => at(p.x, p.y).classList.add('att')); last = { kind: 'prot', x, y, def: a.def }; }
    status();
  }
  function newPuzzle() {
    puz = genLP(sc === 'random' ? null : sc); found = {}; errs = 0; over = false; last = null; clear();
    puz.pieces.forEach(p => at(p.x, p.y).append(pieceEl(p.c + p.t))); status();
  }
  tc.s.onchange = () => { sc = tc.s.value === 'random' ? 'random' : +tc.s.value; store.set('lp:count', sc); newPuzzle(); };
  show.onclick = () => { if (!over) finish(true); }; act.onclick = newPuzzle;
  labels(); newPuzzle();
  return { unmount() {}, relabel() { labels(); status(); } };
}

// ---------- Drill registry: every new drill is added here (add its name to T.es.names and T.en.names) ----------
const DRILLS = [
  { id: 'invisible-knight', mount: mountInvisibleKnight },
  { id: 'knight-forks', mount: mountKnightForks },
  { id: 'safe-square', mount: mountSafeSquare },
  { id: 'fork-skewer', mount: mountForkSkewer },
  { id: 'safe-moves', mount: mountSafeMoves },
  { id: 'capture-path', mount: mountCapturePath },
  { id: 'king-zone', mount: mountKingZone },
  { id: 'loose-pieces', mount: mountLoosePieces }
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
if ('serviceWorker' in navigator) navigator.serviceWorker.register('../sw.js').catch(() => {});
