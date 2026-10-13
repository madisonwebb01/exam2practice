# BIOL 8420 — Exam 2 Practice Lab (Unit 2: Modules 3 & 4)

A self-contained practice test for Unit 2 of Understanding Cell Processes. No build step, no
dependencies, no server required — open `index.html` in a browser and it runs.

## What's in it

**120 questions, verbatim from the instructor's own practice banks.**

| Bank | Module | Questions | Source |
|---|---|---|---|
| `bank1.js` | Module 3 — protein sorting and the secretory pathway | 51 | BIOL 8420 Practice Quiz Bank, Module 3 |
| `bank2.js` | Module 4 — the cytoskeleton | 69 | Module 4 Practice Quiz |

Stems and answer choices are reproduced word for word, typos included. The credited answer is
always the instructor's yellow highlight. Nothing was paraphrased, reordered, or invented.

**Every option carries its own explanation** — why the right one is right, and why each wrong
one fails. Explanations stay hidden until you submit. On a correct answer they stay collapsed,
with a "Show the reasoning anyway" button for the times you want them.

**Five drill decks** (Additional Practice Tools tab), scoped by module or mixed:

| Deck | Cards (mixed) | What it does |
|---|---|---|
| Distractor Autopsy | 376 | One wrong answer at a time. Say why it fails, then check yourself. Generated from every non-credited option in both banks. |
| Variable Twists | 14 | The same scenarios with one variable changed — critical-concentration arithmetic, IFT knockouts, Endo H timing, I-cell disease. Authored. |
| Fix the False | 37 | Every credited-false statement from the NOT-TRUE / EXCEPT / FALSE questions. Repair it out loud, then flip. |
| Reverse ID | 32 | Given the mechanism, name the molecule. |
| Rapid Traps | 47 | The instructor's own high-yield warnings, as fast true/false. |

The drill decks draw on the Module 3 lecture transcript, the Module 4 Part 1 and Part 2 lectures,
and the Module 4 exam review session — the places where he says outright what he will ask and what
the distractors will be.

**Other features:** filter by module / missed pile / flagged; flag anything for later; move
forward and back without losing answers; independent shuffle of question order and answer order;
results screen with a per-topic breakdown, weakest topic first.

## Progress saving

Score, missed pile and flags are kept in the browser's `localStorage`. That means progress lives
in **one browser on one device** — it does not sync to your phone or another computer, and it
cannot be read back out. A private window or cleared site data starts you fresh. There is a
two-step **Reset progress** button in the tab strip.

## Files

```
index.html                  the whole app — markup, styles, logic
bank1.js                    Module 3 questions
bank2.js                    Module 4 questions
drills.js                   the four authored/derived decks
golgi-topology.png          Module 3 Q5
single-pass-topology.png    Module 3 Q43 (composite: the drawn protein + the four candidate sequences)
map-gfp.png                 Module 4 Q29
myosin-step.png             Module 4 Q31
map-gfp-tem.png             Module 4 Q61
README.md                   this file
```

Everything is flat at the root so the whole set can be multi-selected when uploading.

## Putting it on GitHub Pages

Upload all files to the repository root, then: **Settings → Pages → Deploy from a branch →
main / (root)**. Same as the Exam 1 lab.

## Known discrepancies — worth taking to the instructor

These are places where the sources disagree or the question is ambiguous. In every case the
instructor's highlighted answer was credited, and the question carries a visible note in the app
explaining the conflict.

**Module 3**

- **Q7 (ER import, TRUE)** — the key credits "ribosomal translation of a 6-12 amino acid sequence
  on the N-terminus… will initiate the process through interactions with SRP." But option (a),
  "SRPs are needed during co-translational protein import," also reads as true on its face.
  Separately, the signal peptide is usually quoted at roughly 20–35 residues, not 6–12 — the
  lecture itself says 30–35. The key is credited, but this one is genuinely worth asking about.

**Module 4**

- **Q12 (intermediate filament protofilaments)** — the key says protofilaments form by *lateral*
  association of antiparallel tetramers. Both lectures describe antiparallel tetramers associating
  *end to end*. No end-to-end option was offered, and the feature actually being tested is
  antiparallel-vs-parallel and tetramer-vs-dimer, so the highlight is credited.
- **Q62 (force for axoneme bending)** — the key says bending of outer doublets. Mechanistically the
  primary force is dynein-driven *sliding* of outer doublets, which nexin cross-links convert into
  bending — which is exactly what the instructor's own nexin-protease experiment shows. No "sliding"
  option was offered, so the highlight is credited.
- **Q42 / Q67** — near-duplicates: same content, options reordered, stem opens "Where are" vs
  "When are". Both kept as written.
- **Q58 / Q69** — the cell-migration sequence asked two ways. Q58 is a four-step list starting at
  lamellipodium formation; Q69 is a five-step list starting at the rear "step zero" adhesion. The
  two keys differ on purpose and do not contradict each other.
- **Question count** — the Module 4 quiz header says "70 questions in bank" but the document
  contains 69 numbered questions, ending at Q69. Nothing is missing from this build; the header
  appears to be off by one.
