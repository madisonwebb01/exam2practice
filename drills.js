/* Unit 2 drill decks — built from the Module 3 and Module 4 quiz banks plus the
   Module 3 lecture transcript and the Module 4 lectures and exam review session.
   mod:1 = Module 3 (secretory pathway)   mod:2 = Module 4 (cytoskeleton) */

/* FIX THE FALSE STATEMENT: every credited-false statement from the NOT-TRUE / EXCEPT /
   FALSE questions, plus the traps. You say what actually makes it true, then flip. */
window.DECK_FIX = [
{mod:1, claim:"SRP brings the translating ribosome to the exoplasmic face of the ER membrane.", fix:"CYTOSOLIC face. The ribosome stays outside; only the growing chain goes through the translocon into the lumen. One word, and the instructor said this is how he writes the question."},
{mod:1, claim:"COPI coat proteins mediate anterograde transport out of the ER.", fix:"COPII is anterograde out of the ER. COPI is retrograde — Golgi back to ER, and between cisternae."},
{mod:1, claim:"Hydrolysis of GTP to GDP by Sar1 or ARF triggers assembly of the COP coat.", fix:"GTP BINDING triggers assembly and membrane insertion; hydrolysis triggers DISassembly and uncoating. Give a cell nonhydrolyzable GTP and coated vesicles pile up."},
{mod:1, claim:"The LDL receptor and its bound LDL are ultimately delivered to the lysosome.", fix:"Only the LDL goes to the lysosome. The receptor is recycled from the endosome back to the plasma membrane — that is the whole point of the acidic endosome."},
{mod:1, claim:"Calnexin interacts with exposed amino acids during protein folding in the ER.", fix:"Calnexin and calreticulin are LECTINS — they read the attached oligosaccharide. BiP, PDI and prolyl isomerase are the ones that touch amino acids."},
{mod:1, claim:"Type II membrane proteins have a signal sequence targeting them to the ER as well as a signal anchor sequence.", fix:"A Type II protein has ONLY the internal signal-anchor, which does both jobs. Type I is the one with a separate cleavable N-terminal signal plus a stop-transfer anchor."},
{mod:1, claim:"Clathrin coat subunits recognize the Tyr-X-X-Φ sequence on membrane proteins and bind onto them.", fix:"The ADAPTOR complexes (AP2, AP1) read the sorting signal and then recruit clathrin. Clathrin triskelia are pure mechanical force and never touch cargo."},
{mod:1, claim:"Acidification of the endosome dissociates apotransferrin from the transferrin receptor.", fix:"Exactly backwards. Apotransferrin binds the receptor TIGHTLY at acidic pH so it survives the ride back out; neutral pH at the cell surface is what releases it. Acid releases iron from ferrotransferrin."},
{mod:1, claim:"The KDEL receptor releases its cargo in the Golgi because of a pH change.", fix:"It BINDS in the Golgi at pH ~6.8 and releases back in the ER at pH ~7. The binding event in the Golgi is itself the signal to form the COPI retrograde vesicle."},
{mod:1, claim:"The two enzymes that write the mannose-6-phosphate tag reside in the trans-Golgi.", fix:"CIS-Golgi. GlcNAc phosphotransferase and the phosphodiesterase both live at the cis face. The trans-Golgi is where the M6P RECEPTOR later reads the tag."},
{mod:1, claim:"Sec61 is a GTP-binding protein required for cotranslational translocation.", fix:"Sec61 is a passive gated channel, not an enzyme and not a GTPase. The GTPases in that step are SRP's P54 subunit and the SRP receptor α subunit."},
{mod:1, claim:"ER glycoproteins carrying eight mannoses are sensitive to endoglycosidase D.", fix:"RESISTANT. Trimming to five mannoses in the Golgi is what makes a protein Endo D sensitive, so sensitivity means 'has reached the Golgi'."},
{mod:1, claim:"The Get3 complex can bring translating polyribosomes to the ER when GTP is absent.", fix:"Get3 only ever delivers a FINISHED protein, post-translationally, and it uses ATP. Anything involving a translating ribosome is SRP's job and needs GTP — so the answer to that question is none."},
{mod:1, claim:"A membrane protein with its N-terminus in the ER lumen will have that N-terminus in the cytosol once it reaches the plasma membrane.", fix:"Topology never flips. Luminal is equivalent to exoplasmic, so a luminal N-terminus ends up EXTRACELLULAR. What was cytosolic stays cytosolic the whole way."},
{mod:1, claim:"Membrane-spanning segments are stretches of hydrophilic amino acids.", fix:"Hydrophobic. That is why a hydropathy plot finds them as peaks above the zero line, and why counting peaks counts transmembrane domains."},
{mod:1, claim:"Dynamitin is the GTPase that pinches off a budding vesicle.", fix:"DYNAMIN does the pinching, with GTP. Dynamitin is a subunit of the dynactin complex that links dynein to its cargo — the instructor warned he plants these three as each other's distractors."},

{mod:2, claim:"The beta subunit of tubulin is constitutively bound to unhydrolyzed GTP.", fix:"That is ALPHA-tubulin — its GTP is structural and never hydrolyzed or exchanged. Beta-tubulin's GTP is the exchangeable one that hydrolyzes to GDP as the dimer treadmills."},
{mod:2, claim:"Intermediate filaments have associated motor proteins analogous to the myosins and kinesins/dyneins.", fix:"Intermediate filaments have NO motor proteins at all. They also have no polarity and need no ATP or GTP to assemble — three of the clean separators from actin and microtubules."},
{mod:2, claim:"Intermediate filaments are more dynamic than microtubules.", fix:"Far less dynamic. They are the permanent, tensile, structural filament — no treadmilling, no catastrophe and rescue."},
{mod:2, claim:"The myosin with the largest step size is myosin II, which is used for muscle contraction.", fix:"Myosin V has the large step (~36 nm per head, 72 nm hand-over-hand) because it walks cargo along actin. Myosin II is the muscle motor and takes small steps."},
{mod:2, claim:"Actin (−) ends assemble more rapidly than actin (+) ends.", fix:"The (+) end — the barbed end — is the fast-growing one. It also has the LOWER critical concentration, which is what drives treadmilling."},
{mod:2, claim:"Profilin acts as a GTPase Activating Protein (GAP) for G-actin.", fix:"Actin is an ATPase, not a GTPase, and profilin's job is nucleotide EXCHANGE — it helps ADP leave so ATP can take its place, making the monomer addable at the (+) end. It is a positive regulator."},
{mod:2, claim:"At steady state the concentrations of F-actin and G-actin are in equilibrium and no addition to F-actin filaments occurs.", fix:"Addition and loss both continue — they are simply balanced. That ongoing exchange at a constant filament length is exactly what treadmilling is."},
{mod:2, claim:"The majority of beta-tubulin subunits in a protofilament are bound to GDP+Pi.", fix:"GDP. Only the terminal cap at the growing (+) end is still GTP-bound; everything behind it has hydrolyzed and released Pi. Losing that cap is catastrophe."},
{mod:2, claim:"+TIPs enhance hydrolysis of GTP in the terminal tubulin dimer.", fix:"They do the opposite — +TIPs like EB1 enhance polymerization and SUPPRESS catastrophe at the (+) end. Enhancing terminal hydrolysis would destroy the GTP cap."},
{mod:2, claim:"All cells with cilia are motile because of the axonemal dynein motor.", fix:"The primary cilium is non-motile: 9+0, no central pair, and it works as a sensory antenna. Motile cilia and flagella are 9+2."},
{mod:2, claim:"All myosins share the ability to form dimers.", fix:"Myosin I is the single-headed family member. What ALL myosins share is a head domain, ATP binding and actin binding."},
{mod:2, claim:"The rate of actin subunit dissociation from a filament depends on the concentration of free G-actin.", fix:"Dissociation is concentration-independent — it is a first-order off-rate. Only the ASSOCIATION rate scales with free G-actin, which is why Cc = k_off / k_on."},
{mod:2, claim:"The tail domains of myosin are responsible for the motor activity.", fix:"The HEAD domain carries both the ATPase and the actin-binding site. The tail binds cargo (or, in myosin II, other myosin tails to build the thick filament)."},
{mod:2, claim:"At the (+) end of an actin polymer, the ATP-binding cleft is exposed.", fix:"The cleft is exposed at the (−) end, the pointed end. At the (+) barbed end it faces into the filament, which is part of why that end adds subunits faster."},
{mod:2, claim:"Kinesin and dynein motor proteins use actin microfilaments to transport cellular cargo.", fix:"Kinesin and dynein run on MICROTUBULES. Myosin is the actin-based motor. Intermediate filaments carry no motors at all."},
{mod:2, claim:"Unipolarity of the thick filament is crucial for ATP hydrolysis to result in sarcomere contraction.", fix:"The thick filament is BIPOLAR — myosin tails meet in the middle with heads pointing outward in both directions, so both Z discs are pulled inward at once."},
{mod:2, claim:"Laminin is a member of the intermediate filament protein family.", fix:"LAMIN is the intermediate filament of the nuclear lamina. LAMININ is an extracellular matrix protein on the basal side. The instructor flagged this pair specifically."},
{mod:2, claim:"The domain of kinesin required for microtubule binding is the tail domain.", fix:"The head (motor) domain binds the microtubule. The tail binds cargo — and kinesin's LIGHT CHAINS are in the tail, where myosin's light chains are in the neck."},
{mod:2, claim:"Listeria ActA protein binds and inactivates the Arp2/3 complex near the tail of the bacterium.", fix:"ActA ACTIVATES Arp2/3 (with VASP), driving branched ATP-actin assembly behind the bacterium — the comet tail it climbs to propel itself cell to cell."},
{mod:2, claim:"Each protofilament of an intermediate filament is formed by lateral association of parallel dimers.", fix:"ANTIPARALLEL TETRAMERS. Two parallel dimers pair head-to-head into an antiparallel tetramer, and it is the antiparallel arrangement that leaves the filament with no plus or minus end."},
{mod:2, claim:"A motile cell changes direction by capping the plus ends of actin at its new leading edge.", fix:"It caps the PREVIOUS leading edge. CapZ blocks growth where the cell no longer wants to go, so all available ATP-G-actin is forced into the new direction."}
];

/* REVERSE ID: given the mechanism or the result, name the molecule or technique. */
window.DECK_REV = [
{mod:1, clue:"A ribonucleoprotein with a hydrophobic groove that sequesters an emerging signal sequence, arrests translation, and docks the ribosome on the cytosolic face of the ER.", ans:"SRP — signal recognition particle", near:"Pairs with GTP and with co-translational translocation. Its partner on the membrane is the SRP receptor (α/β)."},
{mod:1, clue:"A gated channel described as a paper-towel roll through the ER membrane, with a lateral exit for membrane proteins.", ans:"The translocon (Sec61 complex)", near:"Not a GTPase and not a modifying enzyme — a passive pore. The lateral gate is how a stop-transfer anchor escapes into the bilayer."},
{mod:1, clue:"Binds the incoming chain in the ER lumen like beads on a string so it cannot slide back out, using ATP.", ans:"BiP (binding protein)", near:"Needed in post-translational translocation, where no ribosome plugs the pore. Also the sensor that releases Ire1 to start the UPR."},
{mod:1, clue:"Covers the hydrophobic C-terminal tail of a finished protein in the cytosol and hands it to a translocon using ATP.", ans:"The Get3 complex", near:"The tail-anchored route: post-translational, ATP. Its opposite number is SRP — co-translational, GTP."},
{mod:1, clue:"Cleaves a preformed protein near its C-terminus and transfers it onto a lipid anchor with high affinity for lipid rafts.", ans:"GPI transamidase", near:"Note the spelling — 'transaminase' is a planted distractor. The product goes to the apical plasma membrane."},
{mod:1, clue:"A membrane lipid that assembles the 2 GlcNAc + 9 mannose + 3 glucose precursor, flips it, and hands the whole block to an asparagine.", ans:"Dolichol phosphate", near:"The N-linked glycosylation donor. The N-X-S/T sequon is where it lands; the N is asparagine, not the N-terminus."},
{mod:1, clue:"Lectin-type quality-control chaperones that read the attached glycan to judge whether folding is going correctly.", ans:"Calnexin and calreticulin", near:"Distinguished from BiP, PDI and prolyl isomerase, which all read amino acids."},
{mod:1, clue:"An ER membrane protein that dimerizes when its chaperone leaves, then acts as an endonuclease on a specific unspliced mRNA.", ans:"Ire1", near:"Its substrate is Hac1 mRNA — one of the few mRNAs exported from the nucleus unspliced."},
{mod:1, clue:"A GTPase that wraps the neck of a budding vesicle and pinches it off.", ans:"Dynamin", near:"Keep it apart from dynactin (the cargo complex), dynamitin (a subunit of it) and dynein (the motor). The instructor plants all four together."},
{mod:1, clue:"A hexameric ATPase that, with α-SNAP, untangles the coiled SNARE bundle after fusion.", ans:"NSF", near:"The LAST step of vesicular transport and the only ATP-requiring one. Both questions have the same answer."},
{mod:1, clue:"Its GEF is Sec12; GTP binding extends a hydrophobic N-terminal tail into the ER membrane and recruits Sec23/Sec24.", ans:"Sar1", near:"COPII, anterograde, ER to cis-Golgi. ARF is the equivalent for COPI and clathrin, but anchors by a fatty-acid tail."},
{mod:1, clue:"A small GTPase on the vesicle read by an effector on the target membrane — the address on the letter and the number on the mailbox.", ans:"Rab", near:"About 150 of them. Docking, not fusion — fusion is the v-SNARE/t-SNARE coil."},
{mod:1, clue:"Binds its cargo at pH 6.8 and lets go at pH 7, and that binding event is itself the signal to form a retrograde vesicle.", ans:"The KDEL receptor", near:"Retrieves escaped ER residents. The vesicle it nucleates is COPI-coated."},
{mod:1, clue:"Adds GlcNAc-phosphate to a mannose; a second enzyme then clips the GlcNAc off to leave the bare tag.", ans:"GlcNAc phosphotransferase (then phosphodiesterase)", near:"Both cis-Golgi. Lose the phosphotransferase and you get I-cell disease — enzymes secreted instead of delivered."},
{mod:1, clue:"A high-mannose glycoprotein stays sensitive to it forever, so you cannot use it to time that protein's transit.", ans:"Endoglycosidase H", near:"Only a COMPLEX protein becomes Endo H resistant, and it does so on passing the medial Golgi — which is the only case where the trafficking study works."},
{mod:1, clue:"Resistant at 8 mannoses, sensitive at 5 — so resistance means the protein is still in the ER.", ans:"Endoglycosidase D", near:"Reads the ER-to-Golgi step. Endo H reads the medial-Golgi step."},

{mod:2, clue:"Not part of the finished polymer, but the scaffold at the MTOC on which α/β dimers start.", ans:"γ-tubulin (γ-TuRC)", near:"The microtubule counterpart of the nucleation-promoting factor in the Arp2/3 story."},
{mod:2, clue:"Stabilizes microtubules against depolymerization, arresting cells in mitosis because the chromosomes can never be pulled apart.", ans:"Taxol", near:"The opposite drug is colchicine/colcemid, which depolymerizes at high concentration — and, note, stabilizes at low concentration."},
{mod:2, clue:"A fungal metabolite that depolymerizes actin; its mirror-image partner from a death-cap mushroom stabilizes it.", ans:"Cytochalasin (and phalloidin)", near:"Phalloidin is the stabilizer from Amanita phalloides. Both are standard lab reagents — know which direction each goes."},
{mod:2, clue:"Severing proteins that cut ADP-actin filaments into chunks in milliseconds, far faster than natural depolymerization.", ans:"Cofilin and gelsolin", near:"Add either in vitro and you get depolymerization. Profilin and thymosin β4 act on monomers, not filaments."},
{mod:2, clue:"A sequestering protein that hides ATP-G-actin so it cannot be added to the (+) end — a negative regulator.", ans:"Thymosin β4", near:"Inhibit it and locomotion INCREASES, because more actin is released into the addable pool."},
{mod:2, clue:"Binds the side of an existing filament, not an end, and nucleates a daughter branch — but only once a nucleation-promoting factor has loaded actin onto it.", ans:"Arp2/3 complex", near:"Kill the NPF or kill Arp2/3 and a motile cell stops: no branching at the leading edge, no motility."},
{mod:2, clue:"Caps the (+) end of the thin filament at the Z disc; its partner caps the (−) end at the sarcomere centre.", ans:"CapZ (+ end) and tropomodulin (− end)", near:"Together they keep sarcomere thin filaments at a fixed length, which is why muscle actin never treadmills."},
{mod:2, clue:"A spring-like protein tethering the thick filament to the Z disc; a separate long protein stabilizes thin filaments along their side.", ans:"Titin (thick to Z disc) and nebulin (along thin filament)", near:"Titin is what pulls the sarcomere back on relaxation."},
{mod:2, clue:"Binds calcium, changes conformation, and lifts its partner band off the myosin-binding sites on actin.", ans:"Troponin (lifting tropomyosin)", near:"Calcium comes from the sarcoplasmic reticulum after the action potential reaches the T-tubules."},
{mod:2, clue:"A cross-linking protein that ties actin filaments to a transmembrane platelet receptor during clot formation.", ans:"Filamin (linking actin to Gp1b-IX)", near:"Gp1b-IX is the transmembrane protein; filamin is the crosslinker. The instructor starred this slide."},
{mod:2, clue:"A plus-end tracking protein that other +TIPs hitchhike onto, promoting growth at the (+) end.", ans:"EB1", near:"On that question, 'all of the answer choices are correct' was credited."},
{mod:2, clue:"One protein bends and breaks microtubules using ATP; another accelerates GTP hydrolysis so dimers fall off.", ans:"Katanin (severing) and stathmin (hydrolysis); kinesin-13 depolymerizes at both ends", near:"They work at the plus AND the minus end, which matters during the fast metaphase-to-anaphase transition."},
{mod:2, clue:"A large complex containing Arp1 filament, dynamitin and p150-glued that couples the motor to its cargo.", ans:"Dynactin", near:"Overexpress dynamitin and the whole complex blows apart — which is how it got its name."},
{mod:2, clue:"Linker proteins between outer doublets; digest them and the doublets slide past each other instead of bending.", ans:"Nexin", near:"The experiment that proved bending is sliding plus constraint."},
{mod:2, clue:"Lose it and anterograde IFT stops; lose its counterpart and retrograde IFT stops — each also hitchhikes back on the other.", ans:"Kinesin-2 (anterograde) and dynein (retrograde)", near:"The trick: lose dynein and kinesin-2 piles up at the tip with no ride home, so ANTEROGRADE ceases too."},
{mod:2, clue:"The one myosin that walks toward the (−) end of actin.", ans:"Myosin VI", near:"Its microtubule analogue is kinesin NCD, the one minus-end-directed kinesin. Dynein has no such exception."}
];

/* VARIABLE TWISTS: the same scenarios with one variable changed. Authored. */
window.DECK_TWIST = [
{mod:1, topic:"Microsome protection assay", q:"You run the cell-free assay but add the microsomes AFTER translation is complete, then add protease only. What do you see on the gel?", opts:[
["Protein of the mature (signal-cleaved) size, protected from digestion",0,"Protection requires the protein to be inside, and import only happens if microsomes are present DURING translation."],
["No protein band — everything is digested",1,"Co-translational means simultaneous. Add microsomes after the fact and the protein never got in, so it sits in the tube exposed and the protease destroys it."],
["Protein at the larger (uncleaved) size, protected",0,"Neither half works: it was never imported, so it was never protected and never cleaved."],
["Protein at the larger size, undigested, because the signal sequence resists protease",0,"A signal sequence confers no protease resistance. Only the membrane does."]]},

{mod:1, topic:"Endo H trafficking study", q:"Same transit experiment, but you follow a protein you already determined is HIGH MANNOSE. At 60 minutes it is still fully Endo H sensitive. When did it pass the medial Golgi?", opts:[
["Between 45 and 60 minutes",0,"You are reading sensitivity as if it would eventually flip. For a high-mannose protein it never does."],
["After 60 minutes — the experiment ended too early",0,"The trap the instructor said most people choose. Running it longer would change nothing."],
["You cannot tell from this experiment",1,"High-mannose proteins stay Endo H sensitive even in their fully mature form, so sensitivity carries no timing information. The trafficking study only works on a COMPLEX protein."],
["It never reached the Golgi",0,"It reached and left the Golgi — a mature high-mannose glycan is a Golgi product. Endo H simply cannot see the difference."]]},

{mod:1, topic:"Targeting machinery", q:"Which complex can carry out POST-translational translocation in the absence of ATP?", opts:[
["Get3",0,"Get3 is post-translational, but it runs on ATP hydrolysis. Remove ATP and it cannot hand its cargo over."],
["SRP",0,"SRP is co-translational, so it fails the first half of the question regardless of nucleotide."],
["None",1,"Post-translational translocation is Get3's route and Get3 needs ATP. Strip the ATP and nothing can do it. Flip the question to 'co-translational in the absence of GTP' and the answer is also none."],
["The Sec61 translocon alone",0,"The translocon is a channel. It has no targeting function and no nucleotide of its own."]]},

{mod:1, topic:"KDEL retrieval", q:"A mutation makes the KDEL receptor bind its cargo with high affinity at BOTH pH 6.8 and pH 7.0. What happens?", opts:[
["ER-resident proteins are secreted from the cell",0,"They would still be captured in the Golgi and loaded into COPI vesicles — retrieval still starts."],
["ER residents are retrieved but never released, so they accumulate bound to receptors",1,"Capture in the Golgi still works; release in the ER does not. Receptors stay occupied and are progressively taken out of service, and free ER enzyme falls."],
["Nothing changes — retrieval only depends on binding",0,"A cycle needs both halves. A receptor that never lets go cannot go back for more."],
["COPII vesicles stop forming",0,"COPII budding is driven by Sar1 and is independent of the KDEL system."]]},

{mod:1, topic:"I-cell disease", q:"A patient has no functional GlcNAc phosphotransferase. Where do the lysosomal hydrolases end up, and which cell type is the documented exception?", opts:[
["Retained in the ER; exception is neurons",0,"They are not retained — they move through the pathway normally, just without an address."],
["Secreted from the cell; exception is hepatocytes",1,"With no M6P tag the enzymes default to the secretory route and are released outside. Hepatocytes still target their hydrolases correctly, implying an alternative route in liver cells."],
["Delivered to peroxisomes; exception is hepatocytes",0,"Peroxisomal targeting uses a separate PTS signal and is unaffected."],
["Degraded in the Golgi; exception is fibroblasts",0,"Fibroblasts are the cells that show the classic inclusion-body phenotype, not an exception to it."]]},

{mod:1, topic:"Membrane topology", q:"A protein is inserted in the ER with its N-terminus in the lumen and its C-terminus in the cytosol. It has an even number of transmembrane spans. What is wrong with that description?", opts:[
["Nothing — both are possible independently",0,"They are not independent. The parity of the spans fixes the relationship between the two ends."],
["An even number of spans puts both termini on the SAME side",1,"Even number: N and C on the same face. Odd number: opposite faces. A luminal N with a cytosolic C requires an ODD number of spans."],
["The N-terminus can never be luminal",0,"It can — that is a standard Type I protein, which has one span (odd)."],
["Topology is set in the Golgi, so the ER arrangement does not matter",0,"Topology is set at insertion in the ER and never changes afterward."]]},

{mod:2, topic:"Critical concentration", q:"Free G-actin is 0.5 μM. At one end Cc = 0.4 μM; at the other Cc = 0.1 μM. What happens?", opts:[
["Both ends shrink",0,"Free actin is above BOTH critical concentrations, so both ends are in net-growth territory."],
["Both ends grow equally",0,"They are not equivalent. The end whose Cc is furthest below the free concentration has the bigger driving force."],
["The 0.1 μM end grows strongly; the 0.4 μM end sits near equilibrium and loses subunits as ATP hydrolyzes",1,"The instructor's worked case: when both Cc values are below the free concentration, the end FURTHEST below grows, and the one closest to it effectively dissociates because the ADP-actin there has lost affinity."],
["Nothing happens because the filament is at steady state",0,"Steady state would require the free concentration to sit between the two Cc values, not above both."]]},

{mod:2, topic:"Critical concentration", q:"At one end the association rate is 12 μM⁻¹s⁻¹ and the dissociation rate is 1.4 s⁻¹. What is the critical concentration there, and which end is it?", opts:[
["8.6 μM — the minus end",0,"You inverted the ratio. Cc is off-rate over on-rate, not the other way round."],
["0.12 μM — the plus end",1,"Cc = k_off / k_on = 1.4 / 12 ≈ 0.12 μM. A low Cc is the fast-growing barbed (+) end; the (−) end in the same worked example comes out near 0.6 μM."],
["0.12 μM — the minus end",0,"Right arithmetic, wrong end. The LOWER critical concentration belongs to the plus end — that difference is what powers treadmilling."],
["13.4 μM — neither; the filament cannot grow",0,"You added the rates instead of dividing them."]]},

{mod:2, topic:"Myosin step size", q:"You add 4 amino acids to the neck of myosin VI and measure a mean step of 73.75 nm. What must be true of the WILD-TYPE myosin VI?", opts:[
["Step size larger than 73.75 nm, moving toward the (+) end",0,"Both halves fail. Adding neck residues increases step size, so wild type must be smaller — and myosin VI is the minus-end exception."],
["Step size smaller than 73.75 nm, moving toward the (−) end",1,"A longer neck means a longer step, so the wild type must be below the recombinant value; and myosin VI is the one myosin that walks toward the (−) end."],
["Step size smaller than 73.75 nm, moving toward the (+) end",0,"Right on step size, wrong on direction. Every myosin EXCEPT VI is plus-end directed — and this is VI."],
["Step size larger than 73.75 nm, moving toward the (−) end",0,"Right on direction, wrong on step size. Lengthening the neck cannot make the mutant step shorter than wild type."]]},

{mod:2, topic:"IFT", q:"A mutant cannot express kinesin-2. What happens to intraflagellar transport?", opts:[
["Only anterograde IFT stops; retrograde continues normally",0,"Half right. Dynein is still present, but it has nothing to carry it out to the tip in the first place."],
["Anterograde stops, and retrograde ceases too because dynein can never reach the tip",1,"Dynein hitchhikes out on kinesin-2-driven cargo. With no kinesin-2 nothing travels to the tip, so there is nothing at the tip for dynein to bring back."],
["Only retrograde IFT stops",0,"That is the DYNEIN knockout: kinesin-2 piles up at the tip with no ride home, so anterograde eventually ceases as well."],
["Nothing changes because dynein can move in both directions",0,"Dynein is strictly minus-end directed. It cannot substitute for kinesin-2."]]},

{mod:2, topic:"Axoneme bending", q:"You use a highly specific protease to remove the nexin linkers from an axoneme, then add ATP. What do you observe?", opts:[
["No movement at all — dynein requires nexin to hydrolyze ATP",0,"Dynein's ATPase is intact. It is the mechanical constraint that has been removed, not the motor."],
["Doublets slide past each other but the axoneme does not bend",1,"Dynein's intrinsic action is SLIDING. Nexin resists that sliding and converts it into bending; remove nexin and the sliding simply runs free."],
["Normal beating continues",0,"Beating requires the sliding to be converted into bending, which is exactly what nexin does."],
["The central pair collapses and the doublets depolymerize",0,"The structure stays intact; only the constraint between doublets is gone."]]},

{mod:2, topic:"Branched actin", q:"A motile cell is treated with an inhibitor of its nucleation-promoting factor (NPF), leaving Arp2/3 intact. What happens?", opts:[
["Nothing — Arp2/3 nucleates branches on its own",0,"Arp2/3 is not recruited at all without actin-loaded NPF. That dependence is the control point."],
["Branching at the leading edge fails and motility ceases",1,"No NPF means no Arp2/3 recruitment, no branched network at the leading edge, and no lamellipodium — so the cell stops moving. The same outcome follows from inhibiting Arp2/3 directly."],
["The cell moves faster because unbranched filaments are longer",0,"The leading edge needs a branched, cross-linked network to push the membrane; a few long filaments cannot do it."],
["Only filopodia are lost; lamellipodia are unaffected",0,"Branched assembly is what builds the lamellipodium in the first place."]]},

{mod:2, topic:"Thymosin β4", q:"Thymosin β4 is inhibited in a fibroblast. What happens to locomotion?", opts:[
["Decreases, because less actin is recruited to the leading edge",0,"The intuitive-sounding answer and the wrong one. Thymosin β4 is a NEGATIVE regulator."],
["Increases, because more G-actin is available for polymerization",1,"Thymosin β4 sequesters ATP-G-actin to keep it out of the addable pool. Remove the sequestering and the free pool rises, so polymerization and locomotion increase."],
["No change, because thymosin β4 only acts on microtubules",0,"It is an actin monomer-binding protein."],
["No change, because profilin compensates",0,"Profilin does a different job — nucleotide exchange — and does not replace sequestration."]]},

{mod:2, topic:"Colcemid-resistant line", q:"You have a colcemid-resistant cell line. Which treatment will still arrest its division in interphase?", opts:[
["Colcemid at high concentration",0,"The line is resistant — that is the premise of the question."],
["Incubation at 0 °C, or taxol",1,"Two routes that bypass colcemid resistance entirely: cold depolymerizes microtubules, and taxol over-stabilizes them. Either way no functional spindle forms."],
["Taxol only",0,"Cold works too. Both ends of the stability axis break the spindle."],
["Nothing — a colcemid-resistant line divides under all conditions",0,"Resistance to one drug is not resistance to every perturbation of microtubule dynamics."]]}
];

/* RAPID TRAPS: the instructor's own high-yield warnings, as true/false. */
window.DECK_TRAP = [
{mod:1, s:"SRP delivers the translating ribosome to the cytosolic face of the ER membrane.", t:true, x:"'Exoplasmic face' or 'luminal face' in that sentence is the planted error. The ribosome never enters the lumen."},
{mod:1, s:"SRP pairs with GTP and co-translational translocation; Get3 pairs with ATP and post-translational translocation.", t:true, x:"The instructor's mnemonic. Swap either half and the correct answer to the question becomes 'none'."},
{mod:1, s:"With no signal or targeting sequence at all, a newly made protein ends up in the ER by default.", t:false, x:"The CYTOSOL. No address, no delivery — the letter stays where it was written."},
{mod:1, s:"Every protein in the secretory pathway carries the ER signal sequence; where it stops is set by a separate retention signal.", t:true, x:"Two signals, two jobs. ER signal gets you into the pathway; the retention signal (KDEL, M6P, and so on) picks the destination."},
{mod:1, s:"The luminal face of the ER is equivalent to the extracellular face of the plasma membrane.", t:true, x:"Luminal = exoplasmic = eventually extracellular. This is how the picture questions on topology are built."},
{mod:1, s:"A membrane protein with an even number of transmembrane spans has its N and C termini on opposite sides.", t:false, x:"Even number = SAME side. Odd number = opposite sides."},
{mod:1, s:"The enzyme that transfers a protein onto its GPI anchor is GPI transaminase.", t:false, x:"TransAMIDase. 'Transaminase' is a deliberate distractor."},
{mod:1, s:"A tail-anchored protein must be translocated post-translationally.", t:true, x:"Its only hydrophobic signal is at the C-terminus, which cannot emerge from the ribosome until translation is finished."},
{mod:1, s:"Dynamin pinches off vesicles using GTP; dynamitin is a subunit of the dynactin complex that links dynein to cargo.", t:true, x:"Four lookalike names — dynamin, dynamitin, dynactin, dynein. The instructor said he deliberately plants them as each other's distractors."},
{mod:1, s:"Disassembly of the SNARE complex by NSF is both the last step of vesicular transport and the only ATP-requiring one.", t:true, x:"He asks it both ways and the answer is the same molecule each time."},
{mod:1, s:"COPII is anterograde out of the ER, COPI is retrograde from the Golgi, and clathrin covers everything else.", t:true, x:"Clathrin: trans-Golgi to endosome, and endocytosis from the plasma membrane."},
{mod:1, s:"Sar1 and ARF recruit coats; Rab provides the address; v-SNARE and t-SNARE perform the fusion.", t:true, x:"Three jobs, three sets of proteins. Mixing them up is the most common way these questions are missed."},
{mod:1, s:"Both enzymes that build the mannose-6-phosphate tag are Golgi residents, not lysosomal.", t:true, x:"Cis-Golgi specifically. They make the address for the lysosome but they do not live there."},
{mod:1, s:"A high-mannose glycoprotein can be used for an Endo H trafficking study if you run the time course long enough.", t:false, x:"It stays Endo H sensitive forever, even fully mature. Only a COMPLEX protein ever becomes resistant, which is why only complex proteins can be timed."},
{mod:1, s:"Endo D resistance indicates the protein is still in the ER.", t:true, x:"Eight mannoses = resistant = ER. Five mannoses = sensitive = reached the Golgi."},
{mod:1, s:"The KDEL receptor binds its cargo at the ER's neutral pH and releases it in the acidic Golgi.", t:false, x:"Reversed. Binding happens in the Golgi at ~6.8; release happens back in the ER at ~7."},
{mod:1, s:"Ferrotransferrin binds the receptor at neutral pH; apotransferrin binds at acidic pH and is released at neutral pH.", t:true, x:"This pH logic is the whole transferrin cycle, and the instructor said it is one of the most-missed questions."},
{mod:1, s:"The LDL receptor is degraded with its ligand after each round of endocytosis.", t:false, x:"It recycles. The EGF receptor is the one that is degraded along with its ligand — those are the three fates: recycling, degradation, transcytosis."},
{mod:1, s:"The lysosomal membrane survives its own hydrolases because it is heavily glycosylated.", t:true, x:"The glycan coat on the luminal face keeps the proteases and lipases off the membrane itself."},
{mod:1, s:"In I-cell disease, hepatocytes still target their lysosomal hydrolases normally.", t:true, x:"The documented exception, implying an alternative targeting route in liver cells."},
{mod:1, s:"BiP prevents the translocating chain from sliding back out of the translocon.", t:true, x:"Needed only in post-translational translocation, where no ribosome plugs the pore. Folding later makes backsliding impossible anyway."},

{mod:2, s:"The GTP on α-tubulin is never hydrolyzed or exchanged; only β-tubulin's GTP hydrolyzes to GDP.", t:true, x:"α's nucleotide is purely structural. Any statement that beta's GTP is permanently unhydrolyzed has the subunits swapped."},
{mod:2, s:"The only property microtubules and microfilaments share is that both have distinct + and − ends.", t:true, x:"He said this outright: different nucleotides (GTP vs ATP), different distribution, different nucleation. Polarity is the one real similarity."},
{mod:2, s:"Myosin VI is the only myosin that moves toward the (−) end of actin.", t:true, x:"Its microtubule analogue is kinesin NCD, the lone minus-end-directed kinesin. Dynein has no exception of this kind."},
{mod:2, s:"The myosin power stroke occurs when ATP is hydrolyzed.", t:false, x:"It occurs when inorganic PHOSPHATE is released. He said many people get this wrong by one step."},
{mod:2, s:"Rigor mortis arises because ADP has been released and no ATP is available to detach the myosin head.", t:true, x:"ATP BINDING is what releases the head from actin. No ATP, no release — the heads stay locked."},
{mod:2, s:"Intermediate filaments have no polarity, need no ATP or GTP to assemble, and have no motor proteins.", t:true, x:"The three clean separators. On an 'is a property of intermediate filaments' question, the distractors will all be true of actin or microtubules."},
{mod:2, s:"An intermediate filament protofilament is built from antiparallel tetramers made of two parallel dimers.", t:true, x:"The antiparallel step is why the filament has no plus or minus end. Note the N-terminus of one dimer sits beside the C-terminus of the other."},
{mod:2, s:"Lamin is the nuclear lamina intermediate filament; laminin is an extracellular matrix protein.", t:true, x:"One letter apart, completely different proteins. He flagged this pair by name."},
{mod:2, s:"Cytoplasmic microtubules are 13-protofilament singlets; cilia and flagella are 13+10 doublets; basal bodies and centrioles are 13+10+10 triplets.", t:true, x:"He said the triplet location is the single most commonly missed item in this module."},
{mod:2, s:"A motile cilium is 9+2; a primary cilium is 9+0 and non-motile.", t:true, x:"The missing central pair is why the primary cilium cannot beat — it senses instead."},
{mod:2, s:"Myosin's light chains sit in the neck region; kinesin's light chains sit in the tail region.", t:true, x:"He called this a very specific question. Same word, different place in each motor."},
{mod:2, s:"MAP2 has a longer spacer arm than tau, so microtubules it organizes are spaced further apart.", t:true, x:"Given a micrograph: widely spaced microtubules means MAP2, tightly packed means tau."},
{mod:2, s:"Colcemid depolymerizes microtubules at high concentration and stabilizes them at low concentration.", t:true, x:"He underlined both halves. Colchicine and colcemid behave the same way."},
{mod:2, s:"Cytochalasin depolymerizes actin and phalloidin stabilizes it.", t:true, x:"Opposite mechanisms, both toxins, both standard lab reagents. Getting the direction backwards is the trap."},
{mod:2, s:"Adding cofilin or gelsolin to an in vitro actin preparation causes depolymerization.", t:true, x:"They are the severing proteins. Profilin and thymosin β4 act on monomers and do not sever."},
{mod:2, s:"Profilin is a positive regulator of actin assembly; thymosin β4 is a negative regulator.", t:true, x:"Profilin swaps ADP for ATP so the monomer can be added; thymosin β4 hides the monomer so it cannot."},
{mod:2, s:"Without a nucleation-promoting factor, Arp2/3 is not recruited and branched actin assembly fails.", t:true, x:"In a motile cell that means motility ceases. He named this as a question he asks as a mutation scenario."},
{mod:2, s:"Catastrophe and rescue are properties of both microtubules and actin filaments.", t:false, x:"Microtubules only. He stressed that this oscillation is specific to microtubule dynamic instability."},
{mod:2, s:"Critical concentration equals the dissociation rate divided by the association rate.", t:true, x:"Cc = k_off / k_on. The plus end has the lower Cc, which is what makes treadmilling directional."},
{mod:2, s:"Losing dynein stops retrograde IFT but leaves anterograde transport intact.", t:false, x:"Anterograde stops too, because kinesin-2 accumulates at the tip with no way back. Each motor depends on hitchhiking with the other."},
{mod:2, s:"Removing nexin from an axoneme causes the doublets to slide past each other instead of bending.", t:true, x:"The classic protease experiment. Dynein generates sliding; nexin converts it to bending."},
{mod:2, s:"The thick filament of a sarcomere is bipolar, with myosin tails meeting at the centre.", t:true, x:"Bipolarity is what lets both Z discs be pulled inward at once. 'Unipolarity' in that sentence is the planted error."},
{mod:2, s:"During contraction the A band stays the same length while the I band and H zone shrink.", t:true, x:"The A band is the length of the thick filament, which never changes. Only the overlap changes."},
{mod:2, s:"Sarcomere actin does not treadmill because CapZ caps the (+) end, tropomodulin caps the (−) end, and nebulin stabilizes the side.", t:true, x:"Three separate stabilizers. Muscle actin is permanent for the life of the cell."},
{mod:2, s:"A multinucleated cell can result from loss of myosin II.", t:true, x:"No contractile ring, so cytokinesis fails while nuclear division continues."},
{mod:2, s:"To change direction, a motile cell caps the plus ends at its previous leading edge.", t:true, x:"Capping the old direction forces all available ATP-G-actin into the new one. Capping the NEW edge is the planted reversal."}
];
