Enroque (working name) - first slice

Run (needs Python, any computer):
  cd enroque
  python3 -m http.server 8080
Open http://localhost:8080

Must use localhost, not a double-clicked file: Lichess login needs a web address.

Licenses: chessground is GPL-3.0 (vendor/), so this project's source must stay public.
Piece set: your own AI-generated set (pieces/), release it as CC0.

Drills: open /drills/ (link in the menu). Same palette, knights and language (ES/EN) as the app.

Biblioteca: biblioteca/<book>.txt, one file per book (format in the comments of rockwell-1890.txt). Register new books in BOOKS in app.js.
Positions are played against Lichess AI level 8 (needs login). The Rockwell file only has a TEST position until the real ones are added.
Drills: invisible-knight, knight-forks, safe-square, safe-square-all, fork-skewer, safe-moves, capture-path, king-zone and loose-pieces (drills/drills.js, add new ones to DRILLS there).
