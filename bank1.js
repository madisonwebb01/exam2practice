/* Module 3 — Protein Sorting and the Secretory Pathway
   Source: BIOL 8420 Practice Quiz Bank, Module 3 (instructor-highlighted answers)
   opts format: [text, isCorrect, whyLine] */
window.BANK_M1 = [

{n:1, topic:"SRP and targeting", stem:"Which of the following is NOT a property of the mammalian signal recognition particles (SRP)?", opts:[
["It targets secretory polypeptides in the cytosolic translating ribosomes and brings the translating ribosomes to the exoplasmic face of the ER membrane",1,"The single swapped word is 'exoplasmic'. SRP delivers the translating ribosome to the CYTOSOLIC face of the ER membrane — the ribosome never enters the lumen. The instructor flagged this exact swap as the way this question is asked."],
["It binds to a terminal or internal hydrophobic signal sequence of a protein",0,"True. SRP binds an N-terminal signal sequence on a Type I protein and an internal signal-anchor on a Type II or III protein."],
["It targets secretory polypeptides in the cytosolic translating ribosomes and brings the translating ribosomes to the cytosolic face of the ER membrane",0,"True, and this is the correctly worded twin of the credited option — the only difference is cytosolic vs exoplasmic."],
["It contains both RNA and several proteins",0,"True. SRP is a ribonucleoprotein: an RNA scaffold plus subunits including P54, which carries the hydrophobic groove and the GTPase site."],
["It temporarily arrests translation",0,"True. Arrest is temporary and releases once the ribosome is handed to an open translocon."]]},

{n:2, topic:"Translocon", stem:"Which of the following is required for cotranslational translocation of a secretory protein into the ER?", opts:[
["1, 2, 3, 4, and 5",0,"Includes ATP but drops the translocon. Cotranslational translocation runs on GTP, and nothing crosses the membrane without the translocon."],
["1, 2, 3, 4, 5, and 6",0,"Everything including ATP. ATP belongs to the POST-translational route (BiP in yeast, Get3 for tail-anchored proteins), not to this one."],
["1, 2, 3, 5, and 6",0,"Swaps GTP out for ATP. SRP and the SRP receptor hydrolyze GTP; this is the mnemonic the instructor repeated — SRP/co-translational/GTP."],
["1, 2, 3, 4, and 6",1,"Hydrophobic signal sequence, SRP, SRP receptor, GTP, translocon. ATP (5) is the only item left out, and that is the whole point of the question."]]},

{n:3, topic:"Receptor fates", stem:"In the process of transcytosis of the antibodies; the Fc receptors have _____ for antibodies at pH 6.0 in the _____ to capture antibodies; but have _____ for antibodies at pH 7.0 in the _____ to aid the release of the antibodies.", opts:[
["low-affinity, intestinal-lumen, high-affinity, blood or interstitial fluid",0,"Backwards. If the receptor bound weakly in the lumen it could never capture the antibody in the first place."],
["high-affinity, intestinal-lumen, high-affinity, blood or interstitial fluid",0,"High affinity at both ends would capture the antibody and never let it go — nothing would be delivered to the neonate's blood."],
["high-affinity, intestinal-lumen, low-affinity, blood or interstitial fluid",1,"Capture at the acidic apical (luminal) side, release at the neutral basolateral side. The pH difference is what makes transcytosis directional."],
["low-affinity, intestinal lumen, low-affinity, blood or interstitial fluid",0,"Low affinity at both ends means no binding at all, so no transcytosis."]]},

{n:4, topic:"Vesicle budding GTPases", stem:"What phenotype would be observed in a cell containing a nonhydrolyzable form of GTP with respect to the vesicles of the secretory pathway?", opts:[
["Secretion of peptides from the cell would be increased.",0,"The opposite. Vesicles that cannot shed their coat cannot dock or fuse, so secretion falls."],
["Uncoated vesicles would accumulate.",0,"Uncoating is exactly what GTP hydrolysis by Sar1/ARF drives. Block hydrolysis and you block uncoating."],
["Coated vesicles would accumulate.",1,"Sar1 and ARF stay GTP-bound and membrane-inserted, the coat never disassembles, and coated vesicles pile up unable to proceed."],
["Vesicles would be delivered to incorrect target membranes.",0,"Targeting fidelity is a Rab/SNARE job. Blocking coat-GTPase hydrolysis stalls the vesicle before targeting is ever attempted."]]},

{n:5, topic:"Membrane protein topology", fig:"golgi-topology.png", figcap:"A single-pass protein in the Golgi membrane: the C-terminus sits in the Golgi lumen, the N-terminus on the cytosolic side.", stem:"Which of the following statement/s is/are correct based on your observation of the figure below?", opts:[
["The protein contains a stretch of membrane spanning hydrophilic amino acids",0,"Membrane-spanning stretches are HYDROPHOBIC — that is why a hydropathy plot finds them as peaks above the zero line."],
["If the protein becomes a lipid raft resident protein, the N-terminus will face the extracellular environment when the protein reaches its final destination",0,"Topology never flips. The N-terminus is cytosolic here, so it stays cytosolic at the plasma membrane; it is the LUMINAL face that becomes extracellular."],
["None of the answer choice is correct",1,"Each of the other three fails on one specific point: hydrophilic (should be hydrophobic), N-terminus extracellular (it is cytosolic), and a cleavable N-terminal signal (this protein used an internal signal-anchor, so nothing was cleaved)."],
["The protein had an N-terminal cleavable signal sequence removed by signal peptidase in the ER.",0,"A cleavable N-terminal signal sends the N-terminus into the lumen (Type I). Here the N-terminus is cytosolic, so this protein was inserted by an internal signal-anchor instead."]]},

{n:6, topic:"Vesicle coats", stem:"COPI coat proteins mediate _____ transport between the Golgi apparatus and other organelles.", opts:[
["enterograde",0,"Not a word — a spelling distractor for 'anterograde'. Even spelled correctly it would be wrong."],
["retrograde",1,"COPI runs backwards: Golgi to ER, and between Golgi cisternae. COPII is the forward (anterograde) ER-to-cis-Golgi coat."],
["siderograde",0,"Not a transport direction at all."],
["anterograde",0,"Anterograde out of the ER is COPII. Anterograde out of the Golgi is clathrin."]]},

{n:7, topic:"Signal hypothesis", stem:"Which statement about ER import is TRUE?", note:"Option a also reads as true (SRP is required for co-translational import), and the signal peptide is nearer 20–35 residues than 6–12. The instructor's highlight credits b, so b is credited here — but this is a fair one to raise with him.", opts:[
["Signal recognition particles (SRPs) are needed during co-translational protein import.",0,"Credited as incorrect by the instructor's key, though it reads as true on its face — see the note on this question."],
["Ribosomal translation of a 6-12 amino acid sequence on the N-terminus of a protein will initiate the process through interactions with SRP.",1,"The instructor's keyed answer: the emerging N-terminal hydrophobic stretch is what SRP grabs, and that grab is what starts targeting."],
["N-terminal signal sequences have been determined to be necessary for ER import because if they are added to sequences which are not normally targeted to the ER, they will end up in the ER.",0,"That experiment shows the signal is SUFFICIENT, not necessary. Necessity and sufficiency are different claims, and the word 'because' is the trap."],
["GTP hydrolysis by the Sec61 translocon causes ribosomal translation to begin again after it is halted by SRP binding.",0,"Sec61 is not a GTPase. The GTP is hydrolyzed on SRP, activated by the SRP receptor, and that is what releases the arrest."]]},

{n:8, topic:"Experimental methods", stem:"In a cell-free protein synthesis system utilizing microsomes from fragmented ER, under which condition could you determine if the new protein was imported into the microsome?", opts:[
["Ribosomes and mRNA are incubated with microsomes, then a protease is added and the results are analyzed.",1,"Protease alone is the test: imported protein is shielded by the microsomal membrane and survives, protein left outside is digested. Protection is the readout."],
["Ribosomes and mRNA are incubated with microsomes, then a protease and detergent are added and the results are analyzed.",0,"Detergent punches holes in the microsome so the protease gets in and everything is digested. This is the CONTROL that confirms the protein was inside — not the test itself."],
["Ribosomes and mRNA are incubated with microsomes, then detergent is added and the results are analyzed.",0,"Detergent with no protease destroys the vesicle but digests nothing, so there is no size change to read."],
["Ribosomes and mRNA are incubated with protease, then microsomes are added and the results are analyzed.",0,"Protease first destroys the protein before microsomes are ever present. You also lose cotranslational import, which only happens if microsomes are there during translation."]]},

{n:9, topic:"Endocytosis", stem:"Which of the following statements about LDL internalization is FALSE?", opts:[
["The LDL receptor and its bound LDL are ultimately delivered to the lysosome.",1,"The LDL particle goes to the lysosome; the RECEPTOR is recycled back to the plasma membrane from the endosome. Pairing receptor and ligand together is the false half."],
["Mutations in the LDL receptor cause familial hypercholesterolemia.",0,"True — the classic genetic disorder of this pathway."],
["Endosomal pH is crucial for dissociation of LDL from its receptor after endocytosis.",0,"True. Acidification in the endosome is what separates ligand from receptor and allows the receptor to recycle."],
["The LDL receptor transits the secretory pathway.",0,"True. It is a plasma-membrane protein, so it is made in the ER and travels ER to Golgi to plasma membrane like any other."]]},

{n:10, topic:"Lysosome targeting", stem:"The two enzymes _____ and _____ are responsible for attaching mannose-6-phosphate onto the soluble proteins/enzymes, targeted to the _____, and reside in the _____.", opts:[
["N-acetylglucosamine phosphotransferase; phosphodiesterase; peroxisome; Golgi",0,"Right enzymes, right residence, wrong destination. M6P is the lysosomal address; peroxisomal targeting uses an entirely separate PTS signal."],
["N-acetylglucosamine phosphotransferase; phosphodiesterase; lysosome; Golgi",1,"The phosphotransferase adds GlcNAc-phosphate to a mannose, the phosphodiesterase trims the GlcNAc off to expose M6P, and both enzymes live in the cis-Golgi."],
["N-acetylglucosamine phosphotransferase; phosphatase; lysosome; Golgi",0,"'Phosphatase' would strip the phosphate and destroy the signal. The second enzyme is a phosphodiesterase, which removes only the GlcNAc cap."],
["N-acetylglucosamine phosphotransferase; phosphatase; peroxisome; Golgi",0,"Wrong on both the second enzyme and the destination."]]},

{n:11, topic:"ER folding and QC", stem:"All the following proteins interact with exposed amino acids during protein folding in the ER EXCEPT:", opts:[
["prolyl isomerase",0,"Acts directly on the peptide backbone, rotating about proline peptide bonds."],
["PDI",0,"Protein disulfide isomerase forms and reshuffles disulfide bridges between cysteine side chains — amino acids."],
["calnexin",1,"Calnexin (with calreticulin) is a LECTIN: it binds the attached oligosaccharide, not exposed amino acids. That is what separates it from the other three."],
["BiP",0,"Binds exposed hydrophobic amino acid stretches on unfolded chains, and blocks backsliding through the translocon."]]},

{n:12, topic:"Translocon", stem:"Protein insertion into the mammalian ER membrane is typically:", opts:[
["post-translational",0,"The mammalian exception, not the rule — it applies to tail-anchored proteins via the Get complex, and in yeast to some soluble secretory proteins via BiP."],
["pretranslational.",0,"Not a real category. Nothing is translocated before it is translated."],
["quasitranslational.",0,"An invented term with no meaning in this pathway. Translocation is either co-translational or post-translational; there is no third category."],
["cotranslational",1,"The default: SRP brings the translating ribosome to the ER and the chain is threaded through the translocon as it is made."]]},

{n:13, topic:"Membrane protein topology", stem:"GPI-anchoring serves a special function, especially in polarized epithelial cells, because this modification serves to target proteins to the:", opts:[
["ER",0,"The GPI anchor is added in the ER, but it is an address for somewhere else — the modification is not a retention signal."],
["nucleus",0,"The nucleus is not on the secretory pathway at all, and nuclear import uses an NLS."],
["Golgi",0,"The protein passes through the Golgi; it does not stay there."],
["plasma membrane",1,"GPI-anchored proteins have high affinity for lipid rafts and are delivered to the apical plasma membrane in polarized cells — the lipid anchor also gives them far more lateral mobility than a transmembrane domain would."]]},

{n:14, topic:"Vesicle targeting and fusion", stem:"Vesicle budding recruits proteins that are needed for subsequent:", opts:[
["assembly of chromosome folding machinery.",0,"Nothing to do with the secretory pathway."],
["invagination of the vesicle into the ER lumen.",0,"Vesicles bud outward into the cytosol, not inward into the lumen."],
["shedding of integral membrane proteins into the cytosol.",0,"Integral membrane proteins are not shed — their transmembrane segments keep them in the bilayer."],
["selective vesicle targeting and fusion.",1,"The v-SNARE and the Rab GTPase are packaged at budding, so the vesicle leaves already carrying its address and its fusion machinery."]]},

{n:15, topic:"Experimental methods", stem:"Cell-free transport assays:", opts:[
["All of the answers choices are correct.",1,"All three are genuine uses: glycosylation state as a transport readout, a biochemical complement to genetic screens, and a way to test purified proteins by adding them back."],
["often probe for changes in the glycosylation state of transported proteins.",0,"True on its own — Endo D and Endo H sensitivity are exactly this readout — but the question wants all of them."],
["complement genetic approaches to the secretory pathway.",0,"True on its own. The yeast sec mutants and the cell-free assays were the two halves of the field."],
["provide a means to test the effect of added purified proteins.",0,"True on its own. Adding back a purified component is how NSF and the SNAREs were identified."]]},

{n:16, topic:"Membrane protein topology", stem:"Synthesis of a protein with high affinity to lipid rafts may use which of the following enzymes/proteins?", opts:[
["GPI-transamidase",0,"Needed — it cleaves the preformed protein and transfers it onto the GPI anchor — but it is not the only one."],
["SRP",0,"Needed, to get the protein to the ER in the first place."],
["Signal Peptidase",0,"Needed, to remove the N-terminal signal sequence."],
["All of the choices are correct",1,"A GPI-anchored (raft-loving) protein needs SRP for targeting, the translocon for entry, signal peptidase to cleave the signal, and GPI-transamidase for the anchor itself. Note the enzyme is transAMIDase — 'transaminase' is the planted distractor."],
["Translocon",0,"Needed, as the channel the chain passes through."]]},

{n:17, topic:"Vesicle budding GTPases", stem:"Which small GTPase is NOT involved in vesicle budding or docking?", opts:[
["Sar1",0,"Recruits the COPII coat at the ER."],
["ARF",0,"Recruits COPI and clathrin coats."],
["Ras",1,"Ras is a signal-transduction GTPase downstream of growth factor receptors. It has no role in coat recruitment or vesicle docking."],
["Rab1",0,"Rab GTPases are the address labels that dock a vesicle at its correct target membrane."]]},

{n:18, topic:"Endocytosis", stem:"Acidification of endosomes is important in dissociating:", opts:[
["apotransferrin from the transferrin receptor",0,"Backwards. Apotransferrin has HIGH affinity for the receptor at acidic pH — that is how it stays bound for the ride back out."],
["iron from apotransferrin",0,"Apotransferrin is by definition the iron-free form. There is no iron on it to release."],
["iron from ferrotransferrin",1,"The acidic endosome strips Fe from ferrotransferrin, leaving apotransferrin still bound to its receptor and recycled to the surface, where neutral pH finally releases it."],
["All of the answer choices are correct",0,"The first two are each wrong for their own reason, so 'all' cannot hold."]]},

{n:19, topic:"Lysosome targeting", stem:"The mannose 6-phosphate residue is important, as it is required to target soluble enzymes to the lysosome. The two enzymes responsible for attaching this residue onto these soluble enzymes reside in the:", opts:[
["trans-Golgi",0,"The trans-Golgi is where the M6P RECEPTOR sorts the tagged enzyme into a clathrin-coated vesicle — a later step than tagging."],
["cis-Golgi",1,"GlcNAc phosphotransferase and the phosphodiesterase are cis-Golgi residents. The tag is written on arrival, then read later at the trans face."],
["RER",0,"The ER does the core N-linked glycosylation and trimming, but the phosphate is not added until the Golgi."],
["medial-Golgi",0,"Medial is where mannoses come off and GlcNAc/galactose go on for complex sugars — not where M6P is written."]]},

{n:20, topic:"Vesicle coats", stem:"Which of the following statements regarding COP vesicle budding is FALSE?", opts:[
["COPI and COPII vesicles are composed of completely distinct coat proteins.",0,"True. COPI subunits and the Sec23/Sec24 COPII subunits are different proteins entirely."],
["Both Sar1 and ARF undergo conformational changes to insert into the ER or Golgi membranes in order to carry out their functions in vesicle assembly and budding.",0,"True. GDP-to-GTP exchange extends Sar1's hydrophobic N-terminal tail and ARF's fatty-acid tail into the bilayer."],
["COPII vesicles travel from the endoplasmic reticulum to the cis-Golgi.",0,"True — the definition of anterograde COPII traffic."],
["Hydrolysis of GTP to GDP by Sar1 or ARF triggers assembly of the COP coat.",1,"Backwards, and this is the whole question. GTP BINDING triggers assembly; hydrolysis to GDP triggers DISassembly and uncoating."]]},

{n:21, topic:"Membrane protein topology", stem:"A tail-anchored protein will have a hydrophobic amino acid residue at its:", opts:[
["Only internally and close to the N-terminal end",0,"Internal hydrophobic stretches belong to signal-anchor and stop-transfer-anchor proteins, not tail-anchored ones."],
["C-terminal end",1,"The name tells you: the tail is anchored, so the hydrophobic stretch is at the C-terminus. That is also why this protein must insert POST-translationally — the C-terminus cannot leave the ribosome until translation finishes."],
["N- terminal end",0,"An N-terminal hydrophobic stretch is a classic cleavable signal sequence (Type I), the opposite arrangement."],
["N and C terminal end",0,"Only the tail is hydrophobic."],
["Only internally and close to the C-terminal end",0,"'Close to' the C-terminus is not the same as AT the C-terminus — and an internal stretch would leave a luminal or cytosolic C-terminal tail hanging, which is not what tail-anchored means."]]},

{n:22, topic:"UPR", stem:"Please choose the correct sequence of events that occurs due to the unfolded protein response in the ER and the cytoplasm.", opts:[
["1, 3, 2, 4",0,"Starts with Ire1 dimerization, but BiP must leave Ire1 first — dimerization is a consequence, not the trigger."],
["2, 1, 3, 4",0,"Starts with translation of Hac1, which cannot happen before the mRNA is spliced."],
["3, 2, 1, 4",0,"Starts with splicing, which requires the dimerized Ire1 endonuclease that has not formed yet."],
["4, 1, 3, 2",1,"BiP dissociates from Ire1 monomers to go bind the unfolded proteins → Ire1 dimerizes → the dimer's endonuclease splices Hac1 mRNA → the spliced mRNA is translated into the Hac1 transcription factor, which then turns on the degradation machinery."]]},

{n:23, topic:"Vesicle targeting and fusion", stem:"Which of the following events in vesicular transport occurs at the very end?", opts:[
["disassembly of the SNARE complex by NSF",1,"The last step. NSF with α-SNAP uses ATP hydrolysis to untangle the coiled v-/t-SNARE bundle so the SNAREs can be recycled."],
["association of Rab with Rab effector",0,"That is docking — the address being read, well before fusion."],
["disassembly of vesicular coats",0,"Happens early, right after budding, so the vesicle can dock."],
["assembly of the v and t SNARE complex",0,"The fusion step itself, immediately before the complex is taken apart again."]]},

{n:24, topic:"Vesicle budding GTPases", stem:"If Sar1 is inserted into the membrane, it is:", opts:[
["bound to GTP and recruits cargo.",0,"Right nucleotide, wrong job. Cargo selection is done by the Sec24 subunit of the coat and by adaptor proteins, not by Sar1 itself."],
["bound to GTP and recruits COPII coat proteins.",1,"Sec12 (the GEF) swaps GDP for GTP, the GTP-bound form extends its hydrophobic tail into the ER membrane, and that inserted Sar1 is the scaffold that recruits Sec23/Sec24."],
["not bound to GTP or GDP.",0,"A nucleotide-free GTPase is a transient intermediate, not the membrane-inserted active state."],
["bound to GDP and recruits COPII coat proteins.",0,"GDP-bound Sar1 is the inactive, soluble, cytosolic form — tail tucked in, not inserted."]]},

{n:25, topic:"Vesicle targeting and fusion", stem:"Which of the following steps in vesicular transport of proteins requires the hydrolysis of ATP?", opts:[
["dissociation of Rab with Rab effector",0,"Rab is a GTPase — its cycle runs on GTP."],
["assembly of the SNARE complex",0,"SNARE coiling is spontaneous and energetically downhill; it releases energy rather than consuming ATP."],
["disassembly of vesicular coats",0,"Driven by GTP hydrolysis on Sar1 or ARF."],
["disassembly of the SNARE complex",1,"NSF is the ATPase of the pathway. This is the one ATP-requiring step, and it is also the last step — the instructor asks it both ways."],
["assembly of vesicular coats",0,"Driven by GTP binding on Sar1 or ARF, not ATP."]]},

{n:26, topic:"Golgi transport", stem:"Soluble and membrane proteins advance through the Golgi complex by:", opts:[
["stable continuities between Golgi cisterna.",0,"If the cisternae were permanently connected there would be no compartment-specific modification — the enzymes would all mix."],
["All of the answer choices are correct",0,"Stable continuities and cisternal progression are mutually exclusive models, so they cannot all be right."],
["transient continuities between Golgi cisterna.",0,"A proposed minor route, but not the credited mechanism."],
["cisternal progression through vesicle formation and fusion.",1,"Cisternae mature forward while resident enzymes are carried backwards in COPI vesicles — the standard cisternal maturation/progression model."]]},

{n:27, topic:"Post-translational translocation", stem:"Which of the following protein/protein complexes can bring the translating polyribosomes to the ER in the absence of GTP?", opts:[
["Signal Recognition Particle Receptor",0,"The receptor activates SRP's GTPase; without GTP the handoff never happens."],
["Get3 Protein complex",0,"The trap answer. Get3 does run on ATP rather than GTP — but it delivers a FINISHED protein post-translationally, never a translating ribosome."],
["None",1,"Bringing a TRANSLATING ribosome to the ER is by definition co-translational, and co-translational targeting is SRP-dependent and GTP-dependent. Remove GTP and nothing can do it. The instructor's mnemonic: SRP–co-translational–GTP, Get3–post-translational–ATP; swap either half and the answer is 'none'."],
["Signal Recognition Particle (SRP)",0,"SRP is the right machine but it requires GTP, which the question has removed."],
["Translocon",0,"The translocon is the channel. It does not go out and find ribosomes."]]},

{n:28, topic:"Vesicle targeting and fusion", stem:"Which of the following steps in vesicular transport occurs first?", opts:[
["disassembly of vesicular coats",0,"Second — the coat cannot come off before it goes on."],
["assembly of vesicular coats",1,"Coat assembly is step one: the GTPase inserts, the coat is recruited, and the mechanical force of coat polymerization is what deforms the membrane into a bud."],
["disassembly of the SNARE complex",0,"Dead last, by NSF."],
["association of Rab with Rab effector",0,"Docking, after the vesicle is formed and uncoated."],
["assembly of the v and t SNARE complex",0,"Fusion, second to last."]]},

{n:29, topic:"Membrane protein topology", stem:"The topology of membrane proteins can often be predicted by computer programs that identify_____topogenic segments.", opts:[
["hydrophobic",1,"A hydropathy plot scans a sliding window of about 20 residues; each peak above the zero line is a hydrophobic stretch long enough to cross the bilayer. Counting the peaks counts the transmembrane domains."],
["hydrophilic",0,"Hydrophilic stretches are the loops sitting in the cytosol or the lumen — they are what is left between the membrane-spanning segments."],
["glycosylation-specific",0,"Glycosylation sites (N-X-S/T) mark luminal/exoplasmic regions but are not what topology predictors scan for."],
["cleavable signal sequence",0,"Only Type I proteins have one, so it would predict nothing about the rest."]]},

{n:30, topic:"Glycosylation", stem:"Glycosylation, a post-translational modification of secretory proteins, occurs in the:", opts:[
["mitochondria",0,"Not part of the secretory pathway, and it does not glycosylate proteins."],
["More than one answer choices are correct",1,"Both the ER and the Golgi. The core N-linked glycan (2 GlcNAc, 9 mannose, 3 glucose) is added and first trimmed in the ER; further trimming and all complex-sugar additions happen in the Golgi."],
["Golgi",0,"True on its own, which is exactly why 'more than one' is the credited answer."],
["ER",0,"Also true on its own — the dolichol phosphate hands the whole glycan precursor over in the ER."]]},

{n:31, topic:"Receptor fates", stem:"An individual suffers from a mutation in the transferrin receptor. The mutation alters the receptor in such a way that it can't sense the neutral pH by changing its conformation. But the receptor's activity in acidic pH did not alter. Which of the following statement is FALSE in the above-mentioned condition?", opts:[
["None of the answer choice is false, they are all true",1,"All three consequences follow. The receptor cannot release apotransferrin at the cell surface, the occupied receptor cannot pick up new ferrotransferrin, and the result is iron deficiency."],
["The person will probably suffer from iron deficiency",0,"True. If the receptor never frees up, iron uptake collapses."],
["Apotransferrin can't be dissociated from the receptor on the cell surface",0,"True, and this is the direct effect of the mutation — neutral-pH release is exactly what is broken."],
["Ferrotransferrin, if present, will not be able to bind to the receptor on the cell surface",0,"True, as a knock-on effect: the receptor is still occupied by apotransferrin, so there is nowhere for ferrotransferrin to bind."]]},

{n:32, topic:"Signal hypothesis", stem:"As part of an early experiment on the secretory system, an in vitro translation system consisting only of mRNA and ribosomes resulted in secretory proteins that were larger than the identical protein when translated in a cell. Why?", opts:[
["Signal sequence cleavage requires ER entry and action of ER-resident proteins.",1,"Blobel's result. With no microsomes there is no membrane-bound signal peptidase, so the signal sequence is never removed and the product runs higher on the gel."],
["Secretory proteins translated in the cytosol are post-translationally modified by phosphorylation.",0,"Phosphorylation adds 80 Da — far too small to explain the shift, and it is not what the experiment manipulated."],
["Cotranslational protein synthesis and ER import lead to preferential utilization of a distinct translation stop site, changing the resulting protein size.",0,"Stop codon choice is set by the mRNA sequence and is not influenced by whether microsomes are present."],
["Alternative splicing of secretory protein mRNAs requires additional proteins not included in the in vitro system.",0,"Splicing happens in the nucleus, before the mRNA is ever added to the tube."]]},

{n:33, topic:"Membrane protein topology", stem:"Which of the following statements regarding secretory protein translocation is NOT true?", opts:[
["Type I membrane proteins contain two signal sequences; one targets the protein to the ER and one is a stop transfer anchor sequence.",0,"True. Type I has a cleavable N-terminal signal plus an internal stop-transfer anchor."],
["Type IV membrane proteins contain a mixture of both stop transfer anchor sequences and signal anchor sequences, the order of which determines the protein's orientation in the membrane.",0,"True — multipass proteins alternate SA and STA, and which one comes first sets the topology."],
["Type II membrane proteins have a signal sequence targeting them to the ER as well as a signal anchor sequence.",1,"Not true. A Type II protein has ONLY the internal signal-anchor; that single sequence does both jobs. Giving it a separate N-terminal signal as well is what makes this false."],
["Hydropathy profiles are used to computationally identify secreted proteins.",0,"True — hydropathy plots are the standard computational tool here."]]},

{n:34, topic:"Post-translational translocation", stem:"Post-translational translocation of some secretory proteins in yeast is powered by:", opts:[
["ATP hydrolysis by BiP",1,"With no ribosome sitting on the translocon the chain can slide back out, so BiP molecules bind it in the lumen like beads on a string — too bulky to reverse through the pore. That ratchet runs on ATP."],
["phospholipid hydrolysis by phospholipase C",0,"A signalling enzyme that makes IP3 and DAG. Nothing to do with translocation."],
["GTP hydrolysis EF-Tu",0,"EF-Tu delivers aminoacyl-tRNAs during translation — a different process, and in bacteria."],
["cAMP hydrolysis by cAMP phosphodiesterase",0,"A second-messenger terminating enzyme, unrelated to protein import."]]},

{n:35, topic:"Glycosylation", stem:"Endoglycosidase D is a useful reagent because it allows scientists to distinguish glycosylated proteins that:", opts:[
["targeted to lysosomes",0,"Endo D reads an early ER-vs-Golgi difference, long before lysosomal sorting."],
["remain in the ER",1,"ER glycoproteins still carry 8 mannoses and are Endo D RESISTANT; once in the Golgi three mannoses come off, leaving 5, and the protein becomes Endo D sensitive. Resistance therefore marks 'still in the ER'."],
["remain in the trans -Golgi",0,"Endo D cannot resolve positions within the Golgi — that later question is what Endo H is for."],
["get secreted outside the cell",0,"Secretion is far downstream of the mannose difference Endo D detects."]]},

{n:36, topic:"Vesicle coats", stem:"The presence of clathrin mediates vesicular transport:", opts:[
["from plasma membrane to trans -Golgi.",0,"Clathrin does bud from the plasma membrane, but the vesicle goes to the endosome, not straight back to the trans-Golgi."],
["from ER to cis -Golgi.",0,"That is COPII, recruited by Sar1 — the anterograde coat out of the ER. Clathrin never operates at the ER membrane."],
["from nuclear membrane to endosome.",0,"Not a route that exists."],
["from trans -Golgi to endosome",1,"Clathrin handles the trans-Golgi-to-endosome leg (M6P-tagged enzymes on their way to the lysosome) and plasma-membrane endocytosis. COPII is forward from the ER, COPI is retrograde from the Golgi, clathrin is everything else."]]},

{n:37, topic:"Vesicle coats", stem:"Which of the following protein should coat a vesicle that contains KDEL receptor?", opts:[
["Clathrin",0,"Clathrin works at the trans-Golgi and plasma membrane, not on the Golgi-to-ER retrieval route."],
["COP II",0,"COPII is the forward coat, ER to cis-Golgi. A KDEL receptor caught holding its cargo is heading the other way."],
["All of the answer choices are correct",0,"Only one coat serves retrograde Golgi-to-ER traffic."],
["COP I",1,"At Golgi pH (~6.8) the KDEL receptor binds its escaped ER-resident cargo, and that binding is itself the signal to form a COPI-coated retrograde vesicle. Back in the ER at pH 7 the cargo is released."],
["Adaptin",0,"Adaptins are the cargo-selecting adaptors that recruit clathrin; they are not a coat on their own."]]},

{n:38, topic:"Vesicle targeting and fusion", stem:"Which of the following statements about the function of a vesicle fusion protein is correct?", opts:[
["Rab proteins are responsible for docking of vesicles on target membranes.",1,"Rab-GTP on the vesicle is read by a Rab effector on the target — the letter's address and the mailbox number. Docking precedes SNARE-mediated fusion."],
["NSF is responsible for vesicle-membrane specificity.",0,"NSF is the ATPase that pulls the SNARE complex apart at the very end. Specificity comes from Rabs and from v-/t-SNARE pairing."],
["t-SNAREs localize to vesicles and generate appropriate membrane curvature.",0,"Reversed: t-SNAREs are on the TARGET membrane, v-SNAREs on the vesicle. Curvature comes from the coat, not from SNAREs."],
["v-SNAREs provide the energy for vesicle fusion.",0,"SNARE coiling releases energy rather than supplying it from a nucleotide; the ATP in this pathway is spent by NSF on disassembly."]]},

{n:39, topic:"Golgi transport", stem:"Protein sorting of anterograde cargo to different destinations within the Golgi complex occurs in the:", opts:[
["medial-Golgi",0,"Where mannoses are removed and GlcNAc, galactose and sialic acid are added — modification, not final sorting."],
["trans-Golgi",1,"The trans-Golgi network is the sorting station: M6P receptors pull lysosomal enzymes into clathrin vesicles, and everything else is routed to the plasma membrane or to secretory vesicles."],
["cis-Golgi",0,"The entry face. Cargo arrives here and the M6P tag is written here, but nothing is dispatched to its final destination yet."],
["All of the answer choices are correct",0,"Sorting to final destinations happens at one face, not throughout."]]},

{n:40, topic:"Endocytosis", stem:"Lipoproteins are effective in transporting lipid molecules in an aqueous environment because their surface layer is:", opts:[
["glycosidic",0,"The surface is a phospholipid monolayer plus apolipoprotein, not a sugar coat."],
["amphipathic",1,"A phospholipid monolayer with its hydrophilic heads facing the blood and its tails facing the cholesteryl-ester core — plus amphipathic apoB. That dual character is what keeps the particle soluble."],
["hydrophobic",0,"A hydrophobic surface would make the particle insoluble and it would aggregate in plasma."],
["hydrophobic and glycosidic",0,"Combines two wrong descriptions."]]},

{n:41, topic:"SRP and targeting", stem:"Which protein involved in the cotranslational translocation of proteins into the ER membrane is NOT a GTP-binding protein?", opts:[
["elongation factors in ribosome-mediated mRNA translation",0,"Elongation factors are classic GTPases."],
["Sec61 translocon",1,"The translocon is a passive channel — a gated pore, not an enzyme. Every other player in this step binds GTP."],
["α subunit of the SRP receptor",0,"A GTPase; it activates the GTPase of SRP during the handoff."],
["P54 subunit of SRP",0,"Carries both the hydrophobic signal-binding groove and SRP's own GTPase site."]]},

{n:42, topic:"Receptor fates", stem:"In hepatocytes, the process by which apically destined proteins travel from the basolateral region across the cell before fusing with the apical membrane is called:", opts:[
["exocytosis",0,"Exocytosis is the final fusion step alone, not the journey across the cell."],
["receptor mediated endocytosis",0,"That is only the uptake half; transcytosis is uptake on one face plus release on the other."],
["transcytosis",1,"Endocytosis at one face, transport across the cell, exocytosis at the opposite face. The neonatal antibody (FcRn) route is the same process running apical-to-basolateral."],
["Endocytosis",0,"Uptake only, with no delivery to the opposite surface."]]},

{n:43, topic:"Membrane protein topology", fig:"single-pass-topology.png", figcap:"Top: the membrane protein as drawn, with both NH3+ and COO- on the cytosolic side. Below: the four candidate linear sequences, a–d.", stem:"Which of the following linear sequences corresponds to the protein drawn below?", opts:[
["a — NH3+ · +++ · [TM1] · [TM2] · +++ · COO-",1,"Both termini are cytosolic, so a positive patch must sit beside each end — before the first span and after the second. The positive-inside rule is what makes the drawing and this sequence the same protein."],
["b — NH3+ · +++ · [TM1] · +++ · [TM2] · COO-",0,"Puts the second positive patch in the loop BETWEEN the two spans, which would place that loop in the cytosol and force the C-terminus to the opposite (exoplasmic) side. The drawing shows both ends on the same side."],
["c — NH3+ · [gap] · +++ · [TM1] · [TM2] · +++ · COO-",0,"The leading positive patch sits just before TM1 rather than at the N-terminus itself, and the N-terminal stretch is drawn detached — it does not match the drawn arrangement."],
["d — NH3+ · [TM1] · +++ · +++ · [TM2] · COO-",0,"Both positive patches land in the loop between the spans, leaving neither terminus marked. That topology would put the loop inside and both termini outside — the mirror image of what is drawn."]]},

{n:44, topic:"Vesicle coats", stem:"Which of the following statements regarding clathrin-coated vesicles is FALSE?", opts:[
["Clathrin coat subunits recognize  Tyr-X-X-Φ sequence on membrane proteins and bind onto them for clathrin-coated vesicle formation.",1,"Clathrin never touches cargo. The ADAPTOR complexes (AP2 at the plasma membrane, AP1 at the trans-Golgi) read the sorting signal and then recruit clathrin — the triskelia are pure mechanical force."],
["Dynamin is required for pinching off clathrin-coated vesicles.",0,"True. Dynamin wraps the neck and pinches it using GTP hydrolysis."],
["Adapter complexes provide the specificity of vesicle cargo.",0,"True — and this statement is the direct contradiction of the credited false one."],
["Clathrin-coated vesicle assembly is mediated by the GTPase ARF.",0,"True. ARF recruits both COPI and clathrin coats; Sar1 is the COPII counterpart."]]},

{n:45, topic:"ER folding and QC", stem:"Proteins that function in the ER will encounter which of the following by chance or random occurrence?", opts:[
["release from KDEL receptor binding in the Golgi due to a pH change",0,"Release happens back in the ER at pH 7. In the Golgi at pH 6.8 the receptor BINDS."],
["enzymatic modification of the ER resident soluble protein to add the KDEL sequence",0,"KDEL is encoded in the gene and built into the protein as it is translated, not added later by an enzyme."],
["sequestration in the ER by KDEL receptors",0,"Retrieval is the deliberate corrective mechanism, not the accident."],
["anterograde transport in COPII coated vesicles",1,"Escape is the accident. ER residents occasionally get swept into a forward COPII vesicle by chance — and the whole KDEL/COPI retrieval system exists to bring them back."]]},

{n:46, topic:"Membrane protein topology", stem:"A transmembrane receptor that functions at the cell membrane has an exoplasmic N-terminal sequence, a signal-anchor sequence, and a stop-transfer-anchor sequence. Where was this protein first inserted into the membrane?", opts:[
["at the plasma membrane",0,"The plasma membrane is the destination, not the insertion site. No translocon and no SRP machinery operate there."],
["in the trans-Golgi",0,"A waypoint. The protein was already a membrane protein by the time it got there."],
["in the late endosome",0,"Not on the forward secretory route at all."],
["in the ER",1,"Every membrane protein of the secretory pathway is inserted at the ER, via SRP and the translocon. Where it ends up is set by its retention signal; where it starts is always the ER."],
["in the cis-Golgi",0,"Also a waypoint downstream of insertion."]]},

{n:47, topic:"Endocytosis", stem:"An important molecule for generating fatty acids in the cell enters via receptor-mediated endocytosis. The complex formed between the receptor on the plasma membrane and the important molecule is stable only at neutral pH. Based on this knowledge, you would predict that:", opts:[
["the molecule is released from the receptor in the endosome",1,"Stable only at neutral pH means the acidic endosome breaks the complex. The ligand goes on to the lysosome and the receptor recycles — the LDL pattern exactly."],
["a COPII-coated vesicle will be required for import",0,"COPII works at the ER on the forward secretory route. Endocytosis from the plasma membrane uses clathrin."],
["the important molecule enters the cell via a protein channel",0,"An LDL-sized lipoprotein particle is far too large for any channel; that is why receptor-mediated endocytosis exists."],
["both the molecule and the receptor are degraded to release the molecule from the receptor",0,"Degrading the receptor every cycle would be wasteful, and the pH drop already separates them. Receptor degradation is the EGF-receptor pattern, not this one."]]},

{n:48, topic:"Protein sorting overview", stem:"In the absence of any signal or targeting sequence, the expected location for any protein after synthesis is:", opts:[
["Cytosol",1,"The default. A protein is a letter and the signal sequence is its address — with no address it stays where it was made. The instructor said to listen carefully for this exact phrasing."],
["Lysosome",0,"Requires the ER signal sequence plus the M6P tag."],
["Golgi",0,"Requires the ER signal sequence plus a Golgi retention signal."],
["Endoplasmic reticulum",0,"Requires an ER signal sequence — the very thing the question has removed."],
["Secretory vesicles",0,"Requires entry into the secretory pathway, which starts with the ER signal sequence."]]},

{n:49, topic:"ER folding and QC", stem:"Which of the following is not an important ER-resident enzyme that modifies proteins in the secretory pathway?", opts:[
["Sec61",1,"Sec61 is the translocon — a channel, not a modifying enzyme. It moves proteins; it does not change them."],
["Protein Disulfide Isomerase",0,"Forms and reshuffles disulfide bridges — a genuine modifying enzyme."],
["BiP",0,"An ER-resident chaperone that binds unfolded chains and prevents backsliding."],
["Glycosyltransferase",0,"Transfers the oligosaccharide onto the protein — the core N-linked glycosylation step."],
["Peptidyl-prolyl isomerase",0,"Rotates proline peptide bonds to aid folding."]]},

{n:50, topic:"Protein sorting overview", stem:"Which of the following proteins will not have a signal sequence?", opts:[
["Proteins targeted to the Cytosol",1,"Cytosolic is the no-address default. Every other destination on the list needs its own targeting sequence."],
["Proteins targeted to the Nucleus",0,"Carry a nuclear localization signal."],
["Proteins targeted to the Chloroplast",0,"Carry a chloroplast transit peptide."],
["Proteins targeted to the Mitochondria",0,"Carry a mitochondrial matrix targeting sequence."],
["Proteins targeted to the Rough ER",0,"Carry the ER signal sequence — the one that opens the whole secretory pathway."]]},

{n:51, topic:"Endocytosis", stem:"Which of the following is the most appropriate function of an LDL receptor?", opts:[
["It is a receptor for apolipoprotein B and is responsible for the receptor-mediated exocytosis of LDL",0,"Right ligand, wrong direction. LDL is taken INTO the cell."],
["It is a receptor for apolipoprotein B and is responsible for the receptor-mediated endocytosis of LDL",1,"Both halves matter: the receptor reads apoB on the particle surface (never the phospholipid), and it brings the particle in by clathrin-mediated endocytosis."],
["All of the answer choices are correct",0,"The exocytosis option and the cholesterol-synthesis option are each wrong, so 'all' fails."],
["It is responsible for initiating cholesterol synthesis",0,"The receptor imports cholesterol; it does not synthesize it. Imported cholesterol actually suppresses synthesis."],
["It is responsible for receptor-mediated endocytosis of cholesterol",0,"Close but imprecise — the receptor binds the apoB protein on an LDL particle, not free cholesterol. 'Most appropriate' is doing the work in this question."]]}

];
