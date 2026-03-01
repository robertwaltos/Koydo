import type { LearningModule } from "@/lib/modules/types";

// High-quality curriculum module derived from EPUB.
// Source: G:\My Drive\15_E-BOOKS\file011688.epub
// Author: Paul Halpern  |  Subject: Physics / Particle Physics

export const ColliderPaulHalpernModule: LearningModule = {
  id: "collider-paul-halpern",
  title: "Collider: The Search for the World's Smallest Particles",
  description:
    "Paul Halpern traces the century-long quest to understand nature's smallest building blocks — from Rutherford's tabletop scattering experiments to the Large Hadron Collider beneath the Swiss-French border. The book illuminates how particle accelerators have revealed the structure of matter, the four fundamental forces, and the Higgs field, while exploring the human drama of the Superconducting Super Collider's cancellation and the international collaboration that built the LHC.",
  subject: "Science",
  tags: ["epub-derived", "curriculum", "interactive", "physics", "particle-physics", "LHC", "cosmology"],
  minAge: 18,
  maxAge: 99,
  version: "2.0.0",
  learningObjectives: [
    "Describe Rutherford's gold foil experiment and its revolutionary implications",
    "Trace the evolution of particle accelerators from cyclotrons to the LHC",
    "Explain the four fundamental forces and the Standard Model of particle physics",
    "Analyse the Higgs mechanism and why the Higgs boson matters",
    "Evaluate the rise and fall of the Superconducting Super Collider",
    "Describe the LHC's design, goals, and significance for fundamental physics",
  ],
  lessons: [

    /* ─────────────────────────────────────────────────
       L01  Striking Gold: The Discovery of the Nucleus
    ───────────────────────────────────────────────── */
    {
      id: "col-l01",
      title: "Striking Gold: Rutherford and the Discovery of the Nucleus",
      type: "video",
      duration: 12,
      objectives: [
        "Describe the plum pudding model and why it was the consensus before Rutherford",
        "Explain the gold foil scattering experiment and its unexpected results",
        "Analyse how the nuclear model of the atom replaced its predecessor",
      ],
      chunks: [
        {
          id: "col-l01-c1",
          title: "The Plum Pudding Atom",
          content:
            "By the early 1900s, scientists knew that atoms contained negatively charged electrons, discovered by J.J. Thomson in 1897. Thomson proposed the 'plum pudding' model: electrons were embedded like raisins in a diffuse sphere of positive charge, much like fruit scattered through a pudding. The atom was imagined as a fairly uniform, squishy ball — positive charge spread throughout, with tiny electrons dotted inside it. This model was elegant and consistent with the limited evidence available. It explained electrical neutrality (positive and negative charges balanced) and seemed to account for the atom's stability. There was no reason to suspect that the positive charge was anything other than a smooth, distributed cloud. Halpern emphasises that the plum pudding model was not naive — it was a reasonable hypothesis given what was known. What made it vulnerable was a simple, brilliant experiment that produced results the model could not explain.",
        },
        {
          id: "col-l01-c2",
          title: "The Gold Foil Experiment",
          content:
            "Ernest Rutherford, working at Manchester with Hans Geiger and Ernest Marsden, devised an experiment that would shatter the plum pudding model. They fired alpha particles — positively charged helium nuclei — at a thin gold foil and observed where the particles ended up. If Thomson's model were correct, the alpha particles should pass through the diffuse positive charge with only slight deflections — like firing bullets through fog. Most particles did exactly that, passing through with little change in direction. But occasionally — about 1 in 8,000 times — an alpha particle bounced back at a large angle, sometimes almost directly backward. Rutherford described his astonishment: 'It was almost as incredible as if you fired a 15-inch shell at a piece of tissue paper and it came back and hit you.' The plum pudding model could not explain these large-angle deflections because distributed positive charge could never generate the concentrated electrostatic repulsion needed to reverse an alpha particle's trajectory. Something very small, very dense, and very positively charged was lurking inside the atom.",
        },
        {
          id: "col-l01-c3",
          title: "The Nuclear Model and the Birth of Particle Physics",
          content:
            "Rutherford proposed that the atom's positive charge and nearly all of its mass were concentrated in a tiny nucleus — perhaps 10,000 times smaller than the atom itself, with electrons orbiting at relatively enormous distances. The atom was mostly empty space. This nuclear model explained the scattering results perfectly: most alpha particles passed through the empty space between electrons and nucleus, but the rare ones that approached the nucleus head-on experienced intense electrostatic repulsion and were deflected sharply or bounced back entirely. Halpern frames Rutherford's discovery as the founding moment of experimental particle physics — the discipline of probing nature's structure by hurling fast-moving particles at targets and analysing the debris. Every subsequent accelerator, from Lawrence's cyclotron to the LHC, follows the same fundamental logic: smash things together at high energy and see what comes out. The higher the energy, the smaller the structures that can be resolved — a principle rooted in quantum mechanics, where shorter wavelengths (higher energies) probe finer details. Rutherford's experiment established the methodology that would drive a century of discovery.",
        },
      ],
      flashcards: [
        {
          id: "col-l01-f1",
          front: "Plum pudding model (Thomson)",
          back: "Electrons embedded in a diffuse sphere of positive charge. Predicted alpha particles would pass through with only slight deflection — disproved by large-angle scattering in Rutherford's experiment.",
        },
        {
          id: "col-l01-f2",
          front: "Rutherford's gold foil experiment",
          back: "Alpha particles fired at thin gold foil. Most passed through, but ~1 in 8,000 bounced back at large angles — proving the atom's mass and positive charge are concentrated in a tiny, dense nucleus.",
        },
        {
          id: "col-l01-f3",
          front: "Nuclear model of the atom",
          back: "Positive charge and nearly all mass concentrated in a nucleus ~10,000× smaller than the atom, with electrons orbiting at great relative distances. The atom is mostly empty space.",
        },
        {
          id: "col-l01-f4",
          front: "Founding principle of particle physics",
          back: "Probe nature's structure by hurling fast particles at targets and analysing the debris. Higher energy = shorter wavelength = finer resolution of subatomic structures.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L02  Smashing Successes: Development of Accelerators
    ───────────────────────────────────────────────── */
    {
      id: "col-l02",
      title: "Smashing Successes: From Cyclotrons to Synchrotrons",
      type: "video",
      duration: 12,
      objectives: [
        "Describe the development of the cyclotron by Ernest Lawrence",
        "Explain how synchrotrons overcame the cyclotron's energy limitations",
        "Trace the escalation of accelerator energy and size through the twentieth century",
      ],
      chunks: [
        {
          id: "col-l02-c1",
          title: "Ernest Lawrence and the Cyclotron",
          content:
            "After Rutherford's discovery, physicists realised that probing the nuclear interior required higher-energy projectiles than natural radioactive sources could provide. Ernest Lawrence at Berkeley solved this problem with the cyclotron, invented in 1931. The cyclotron used two hollow D-shaped electrodes ('dees') inside a magnetic field. Charged particles were injected at the centre and accelerated by an oscillating electric field between the dees. The magnetic field bent the particle paths into semicircles, so with each half-revolution the particles crossed the gap, received another energy kick, and spiralled outward into wider and wider circles at ever-increasing speed. The genius of the design was its compactness: rather than needing a straight accelerator miles long, the cyclotron folded the acceleration path into a spiral, achieving high energies in a device that could fit on a tabletop. Lawrence's first cyclotron was only 4.5 inches in diameter and accelerated protons to 80,000 electron volts. By 1939, he had built a 60-inch cyclotron reaching 19 million electron volts — enough to produce artificial radioactive isotopes and win the Nobel Prize.",
        },
        {
          id: "col-l02-c2",
          title: "The Synchrotron Revolution",
          content:
            "The cyclotron faced a fundamental limitation: as particles approached the speed of light, Einstein's special relativity caused their mass to increase, throwing them out of synchronisation with the accelerating electric field. The solution was the synchrotron, which used a ring of magnets instead of a single large magnet, and varied the magnetic field strength in synchronisation with the particle's increasing energy. Particles circled the same ring millions of times, gaining energy with each pass through radio-frequency accelerating cavities. Because only the ring circumference needed to be enclosed — not the interior — synchrotrons could be built much larger than cyclotrons. Halpern traces the escalation: the Cosmotron at Brookhaven (1953, 3 billion electron volts), the Bevatron at Berkeley (where the antiproton was discovered in 1955), CERN's Proton Synchrotron (1959, 28 GeV), and Fermilab's Tevatron (1983, reaching nearly 1 trillion electron volts). Each generation of machine discovered new particles, confirmed theoretical predictions, and raised new questions that demanded still higher energies.",
        },
        {
          id: "col-l02-c3",
          title: "Colliders: Doubling the Energy",
          content:
            "A crucial innovation was the shift from fixed-target experiments, where accelerated particles struck stationary targets, to colliders, where two beams of particles circulating in opposite directions were steered into head-on collisions. The advantage is dramatic: in a fixed-target experiment, most of the projectile's kinetic energy is wasted on moving the target (conservation of momentum), so only a small fraction is available to create new particles. In a head-on collider, the centre-of-mass frame is at rest, and nearly all the energy is available for particle creation (via Einstein's E = mc²). Halpern explains that this innovation effectively squared the usable energy for a given beam energy, making colliders vastly more efficient for probing the frontiers of physics. CERN's Super Proton Synchrotron (SPS), converted into a proton-antiproton collider under Carlo Rubbia's leadership, discovered the W and Z bosons in 1983 — confirming the electroweak theory and earning Rubbia the Nobel Prize. The discovery demonstrated that colliders were the essential tool for frontier physics, setting the stage for the next generation: the Tevatron at Fermilab and, ultimately, the Large Hadron Collider.",
        },
      ],
      flashcards: [
        {
          id: "col-l02-f1",
          front: "Cyclotron (Lawrence, 1931)",
          back: "Two hollow D-shaped electrodes in a magnetic field. Charged particles spiral outward, gaining energy with each half-revolution. Compact design folds the acceleration path into a spiral.",
        },
        {
          id: "col-l02-f2",
          front: "Synchrotron advantage over cyclotron",
          back: "Varies magnetic field strength in sync with increasing particle energy, overcoming the relativistic mass-increase limitation. Ring-shaped — only the circumference needs enclosure, allowing much larger machines.",
        },
        {
          id: "col-l02-f3",
          front: "Collider vs. fixed-target advantage",
          back: "In head-on collisions, nearly all energy is available for particle creation (centre-of-mass at rest). Fixed-target experiments waste most energy on target motion. Colliders effectively square usable energy.",
        },
        {
          id: "col-l02-f4",
          front: "W and Z boson discovery (1983)",
          back: "Found at CERN's SPS proton-antiproton collider under Carlo Rubbia. Confirmed the electroweak theory unifying electromagnetism and the weak nuclear force — demonstrating colliders as essential frontier tools.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L03  The Standard Model and the Higgs
    ───────────────────────────────────────────────── */
    {
      id: "col-l03",
      title: "A Compelling Quartet: Forces, Particles, and the Higgs",
      type: "video",
      duration: 13,
      objectives: [
        "Identify the four fundamental forces and their carrier particles",
        "Explain the Standard Model's structure: quarks, leptons, and gauge bosons",
        "Describe the Higgs mechanism and why it was the LHC's primary target",
      ],
      chunks: [
        {
          id: "col-l03-c1",
          title: "The Four Fundamental Forces",
          content:
            "Halpern organises particle physics around the four fundamental forces that govern all interactions in the universe. The strong nuclear force binds quarks together inside protons and neutrons, and binds protons and neutrons together in atomic nuclei — it is the strongest force but operates only at nuclear distances (about 10⁻¹⁵ metres). The electromagnetic force governs interactions between charged particles, binding electrons to nuclei, enabling chemistry, and producing light — it has infinite range but is weaker than the strong force. The weak nuclear force mediates radioactive decay and certain nuclear reactions — it is much weaker than both the strong and electromagnetic forces and operates at even shorter range. Gravity, the most familiar force, is by far the weakest — approximately 10³⁸ times weaker than the strong force — but operates at infinite range and, because it always attracts (never repels), dominates at the cosmic scale. The quest of particle physics is to understand these forces at a fundamental level — ideally to unify them into a single framework, as Maxwell unified electricity and magnetism in the nineteenth century.",
        },
        {
          id: "col-l03-c2",
          title: "The Standard Model: A Periodic Table for the Subatomic World",
          content:
            "The Standard Model, developed throughout the 1960s and 1970s and confirmed by decades of experimental evidence, classifies all known fundamental particles into two categories: fermions (the matter particles) and bosons (the force carriers). Fermions subdivide into quarks (which feel the strong force and combine into protons, neutrons, and other hadrons) and leptons (which do not feel the strong force — electrons, muons, taus, and their associated neutrinos). There are six quarks (up, down, charm, strange, top, bottom) and six leptons, arranged in three generations of increasing mass. Forces are mediated by gauge bosons: photons carry electromagnetism, gluons carry the strong force, and W and Z bosons carry the weak force. Gravity's hypothetical carrier — the graviton — has never been observed and is not part of the Standard Model. Halpern describes the Standard Model as the most successful scientific theory ever constructed: every prediction it has made has been confirmed experimentally, often to extraordinary precision. Yet it is manifestly incomplete — it does not include gravity, does not explain dark matter or dark energy, and does not explain why particles have the masses they do.",
        },
        {
          id: "col-l03-c3",
          title: "The Higgs Mechanism: Mass from Nothing",
          content:
            "The Standard Model posed a deep puzzle: the mathematics required the W and Z bosons (weak force carriers) to be massless, like the photon. But experimentally they are heavy — nearly 100 times the proton mass. Peter Higgs, François Englert, and others proposed a solution: the universe is permeated by an invisible field — the Higgs field — that interacts with particles in a way that gives them mass. Particles that interact strongly with the Higgs field acquire large mass (like the top quark); those that interact weakly acquire small mass (like the electron); photons do not interact with it at all and remain massless. The analogy Halpern uses is a celebrity walking through a crowd: the more famous the person, the more people cluster around them, slowing their movement — that 'resistance to acceleration' is equivalent to mass. The Higgs field's existence should manifest as a new particle — the Higgs boson — which would appear briefly when the field is sufficiently excited by high-energy collisions. Finding the Higgs boson became the primary scientific justification for the LHC — the machine powerful enough to excite this field.",
        },
      ],
      flashcards: [
        {
          id: "col-l03-f1",
          front: "Four fundamental forces (ranked by strength)",
          back: "1) Strong nuclear (quarks, nuclei — shortest range, strongest), 2) Electromagnetic (charged particles — infinite range), 3) Weak nuclear (radioactive decay — short range), 4) Gravity (weakest, ~10³⁸ weaker than strong — infinite range, always attractive).",
        },
        {
          id: "col-l03-f2",
          front: "Standard Model classification",
          back: "Fermions = matter particles (6 quarks + 6 leptons in 3 generations). Bosons = force carriers (photon, gluons, W/Z bosons). Plus the Higgs boson. Does NOT include gravity (no observed graviton).",
        },
        {
          id: "col-l03-f3",
          front: "Higgs mechanism",
          back: "The universe is permeated by an invisible Higgs field. Particles interacting with it acquire mass proportional to interaction strength. The Higgs boson is the quantum excitation of this field — confirmed at the LHC in 2012.",
        },
        {
          id: "col-l03-f4",
          front: "Why the Standard Model is 'incomplete'",
          back: "It does not include gravity, does not explain dark matter/dark energy, does not explain why particles have their specific masses, and has ~20 free parameters that must be measured rather than predicted.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L04  The SSC and the LHC
    ───────────────────────────────────────────────── */
    {
      id: "col-l04",
      title: "Deep in the Heart of Texas: The SSC and the LHC",
      type: "video",
      duration: 13,
      objectives: [
        "Explain the Superconducting Super Collider project and why it was cancelled",
        "Describe the LHC's design, scale, and technical innovations",
        "Evaluate the significance of the Higgs boson discovery in 2012",
      ],
      chunks: [
        {
          id: "col-l04-c1",
          title: "The Rise and Fall of the SSC",
          content:
            "Halpern tells the dramatic story of the Superconducting Super Collider (SSC), planned for Waxahachie, Texas. Conceived in the 1980s during the Reagan era, the SSC was designed to be the world's most powerful accelerator: a 54-mile (87-kilometre) ring that would collide protons at 40 trillion electron volts — far beyond any existing machine. It was the flagship of American high-energy physics and was expected to discover the Higgs boson, supersymmetric particles, and potentially new physics beyond the Standard Model. Congress approved the project in 1987 with an estimated cost of $4.4 billion. But costs escalated relentlessly — driven by geological problems at the Texas site, management difficulties, and the inherent challenge of engineering at the frontier. By 1993, the estimated cost had roughly tripled, and Congress — facing post-Cold War budget pressures and scepticism about 'big science' — voted to cancel the project. Fourteen miles of tunnel had already been excavated. Two billion dollars had been spent. The cancellation was a watershed moment: the centre of gravity of particle physics shifted permanently from the United States to Europe.",
        },
        {
          id: "col-l04-c2",
          title: "The Large Hadron Collider: Heir to the SSC",
          content:
            "While the SSC was being debated and then cancelled, CERN — the European Organisation for Nuclear Research in Geneva — was developing its own machine: the Large Hadron Collider (LHC). Cleverly, CERN designed the LHC to fit inside the existing 27-kilometre tunnel of its predecessor, the Large Electron-Positron Collider (LEP), dramatically reducing civil engineering costs. The LHC accelerates two beams of protons in opposite directions to 7 trillion electron volts each, producing collision energies of 14 TeV — less than the SSC's planned 40 TeV but still far beyond anything previously achieved. The machine uses 1,232 superconducting dipole magnets cooled to 1.9 Kelvin (-271°C) — colder than outer space — producing magnetic fields of 8.3 Tesla to bend the proton beams around the ring. Four massive detectors — ATLAS, CMS, LHCb, and ALICE — surround the collision points, each designed to capture and analyse the debris from proton-proton collisions occurring 40 million times per second. Halpern describes the LHC as the largest, most complex scientific instrument ever built, involving thousands of scientists from over 100 countries.",
        },
        {
          id: "col-l04-c3",
          title: "The Higgs Discovery and Beyond",
          content:
            "The LHC's primary mission was fulfilled on 4 July 2012, when the ATLAS and CMS experiments jointly announced the discovery of a new particle consistent with the Higgs boson, at a mass of approximately 125 GeV. Peter Higgs and François Englert received the 2013 Nobel Prize in Physics. The discovery completed the Standard Model — every particle predicted by the theory had now been experimentally confirmed. But Halpern emphasises that the Higgs discovery was a beginning, not an ending. The LHC continues to search for evidence of physics beyond the Standard Model: supersymmetry (SUSY), which predicts a partner particle for every known particle; extra spatial dimensions predicted by string theory; dark matter candidates that might be produced in collisions; and any other unexpected phenomena that high-energy probes might reveal. The LHC also functions as a 'time machine' of sorts — recreating conditions that existed a trillionth of a second after the Big Bang, allowing physicists to study the fundamental processes that shaped the universe's earliest moments. Whether the LHC finds new physics or definitively rules out leading theories, either outcome would profoundly advance our understanding of nature.",
        },
      ],
      flashcards: [
        {
          id: "col-l04-f1",
          front: "Superconducting Super Collider (SSC)",
          back: "Planned 54-mile ring in Texas (40 TeV collisions). Approved 1987, cancelled 1993 after ~$2B spent and costs tripled. Shifted particle physics leadership from the US to Europe/CERN.",
        },
        {
          id: "col-l04-f2",
          front: "LHC key specifications",
          back: "27 km ring beneath Swiss-French border, 14 TeV collision energy, 1,232 superconducting magnets at 1.9 K (-271°C), 40 million collisions/second, 4 main detectors (ATLAS, CMS, LHCb, ALICE).",
        },
        {
          id: "col-l04-f3",
          front: "Higgs boson discovery (4 July 2012)",
          back: "ATLAS and CMS jointly announced a new particle at ~125 GeV consistent with the Higgs boson. Confirmed the Higgs mechanism and completed the Standard Model. Nobel Prize to Higgs and Englert (2013).",
        },
        {
          id: "col-l04-f4",
          front: "LHC goals beyond the Higgs",
          back: "Search for supersymmetry, extra dimensions, dark matter particles, and any unexpected physics. Also recreates conditions from a trillionth of a second after the Big Bang.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L05  Checkpoint Quiz
    ───────────────────────────────────────────────── */
    {
      id: "col-l05",
      title: "Collider: Checkpoint Quiz",
      type: "quiz",
      duration: 8,
      objectives: ["Assess understanding of particle physics history, accelerator technology, and the Standard Model"],
      questions: [
        {
          id: "col-l05-q1",
          text: "What did Rutherford's gold foil experiment reveal about atomic structure?",
          options: [
            { id: "a", text: "Atoms are solid, indivisible spheres" },
            { id: "b", text: "The atom's positive charge and nearly all its mass are concentrated in a tiny, dense nucleus, with the atom being mostly empty space" },
            { id: "c", text: "Electrons are evenly distributed throughout the atom" },
            { id: "d", text: "Atoms have no internal structure" },
          ],
          correctOptionId: "b",
          explanation:
            "The large-angle scattering of alpha particles (~1 in 8,000) could only be explained by a tiny, incredibly dense concentration of positive charge — the nucleus. Most particles passed through the vast empty space of the atom.",
        },
        {
          id: "col-l05-q2",
          text: "Why are colliders more efficient than fixed-target accelerators for discovering new particles?",
          options: [
            { id: "a", text: "Colliders are cheaper to build" },
            { id: "b", text: "In head-on collisions, nearly all beam energy is available for particle creation, whereas fixed-target experiments waste most energy on target recoil" },
            { id: "c", text: "Colliders produce fewer particles, making detection easier" },
            { id: "d", text: "Fixed-target experiments require larger magnets" },
          ],
          correctOptionId: "b",
          explanation:
            "Conservation of momentum means that in a fixed-target collision, most kinetic energy goes into moving the target. In a head-on collider, the centre-of-mass is at rest, so nearly all energy converts to new particles via E = mc².",
        },
        {
          id: "col-l05-q3",
          text: "What role does the Higgs field play in the Standard Model?",
          options: [
            { id: "a", text: "It carries the electromagnetic force" },
            { id: "b", text: "It permeates the universe and gives particles mass through their interaction with it — particles that interact strongly acquire more mass" },
            { id: "c", text: "It provides the strong nuclear force that binds quarks" },
            { id: "d", text: "It creates dark matter" },
          ],
          correctOptionId: "b",
          explanation:
            "The Higgs field solves the mass puzzle: the mathematics required massless W and Z bosons, but experimentally they're heavy. The Higgs field provides mass through interaction strength — confirmed by the Higgs boson discovery in 2012.",
        },
        {
          id: "col-l05-q4",
          text: "Why was the SSC's cancellation significant for particle physics?",
          options: [
            { id: "a", text: "It proved that particle physics research is unnecessary" },
            { id: "b", text: "It shifted the centre of gravity of high-energy physics from the United States to Europe, with CERN's LHC becoming the world's frontier machine" },
            { id: "c", text: "It led to the immediate discovery of the Higgs boson" },
            { id: "d", text: "It had no lasting impact on the field" },
          ],
          correctOptionId: "b",
          explanation:
            "After the $2B cancellation, the US ceded leadership in high-energy physics. CERN built the LHC in an existing tunnel (cost-effective design), discovered the Higgs boson, and became the world's undisputed frontier laboratory.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L06  Final Assessment
    ───────────────────────────────────────────────── */
    {
      id: "col-l06",
      title: "Collider: Comprehensive Assessment",
      type: "quiz",
      duration: 9,
      objectives: ["Evaluate mastery of particle physics, accelerator technology, and the Standard Model"],
      questions: [
        {
          id: "col-l06-q1",
          text: "The cyclotron's fundamental limitation was overcome by the synchrotron. What was that limitation?",
          options: [
            { id: "a", text: "Cyclotrons could only accelerate electrons" },
            { id: "b", text: "As particles approach light speed, relativistic mass increase throws them out of sync with the fixed-frequency accelerating field" },
            { id: "c", text: "Cyclotrons required excessively high voltages" },
            { id: "d", text: "Cyclotrons could not use superconducting magnets" },
          ],
          correctOptionId: "b",
          explanation:
            "Special relativity causes particle mass to increase at high speeds, desynchronising the particle from the cyclotron's oscillating field. The synchrotron varies its magnetic field in sync with increasing energy, solving the problem.",
        },
        {
          id: "col-l06-q2",
          text: "How does the LHC achieve temperatures colder than outer space, and why is this necessary?",
          options: [
            { id: "a", text: "Using liquid nitrogen to reduce noise in detectors" },
            { id: "b", text: "Cooling 1,232 superconducting magnets to 1.9 K with superfluid helium — superconductivity requires extremely low temperatures to produce the intense magnetic fields (8.3 Tesla) needed to bend 7 TeV proton beams" },
            { id: "c", text: "Keeping the tunnel comfortable for workers" },
            { id: "d", text: "Preventing protons from overheating" },
          ],
          correctOptionId: "b",
          explanation:
            "Superconducting magnets require near-absolute-zero temperatures to eliminate electrical resistance and produce the extremely strong magnetic fields needed to bend protons circulating at 99.9999991% of the speed of light.",
        },
        {
          id: "col-l06-q3",
          text: "Why does Halpern describe the Standard Model as both 'the most successful theory ever' and 'manifestly incomplete'?",
          options: [
            { id: "a", text: "Because it was never experimentally confirmed" },
            { id: "b", text: "Because every prediction has been confirmed to extraordinary precision, yet it does not include gravity, explain dark matter/energy, or predict why particles have their specific masses" },
            { id: "c", text: "Because it only applies to very large objects" },
            { id: "d", text: "Because physicists disagree on its mathematical foundation" },
          ],
          correctOptionId: "b",
          explanation:
            "The Standard Model has been confirmed in thousands of experiments with stunning precision. But it covers only 5% of the universe's mass-energy (not dark matter or dark energy), excludes gravity, and has ~20 unexplained free parameters.",
        },
        {
          id: "col-l06-q4",
          text: "What did the discovery of the W and Z bosons at CERN's SPS in 1983 confirm?",
          options: [
            { id: "a", text: "Einstein's theory of general relativity" },
            { id: "b", text: "The electroweak theory unifying electromagnetism and the weak nuclear force into a single framework" },
            { id: "c", text: "The existence of quarks" },
            { id: "d", text: "The Higgs mechanism" },
          ],
          correctOptionId: "b",
          explanation:
            "The W and Z bosons are the carriers of the weak nuclear force. Their discovery at the predicted masses confirmed the Glashow-Weinberg-Salam electroweak theory, which unified two of the four fundamental forces.",
        },
        {
          id: "col-l06-q5",
          text: "Halpern uses the analogy of a celebrity walking through a crowd to explain the Higgs mechanism. What does the 'crowd' represent?",
          options: [
            { id: "a", text: "Other particles in a collider experiment" },
            { id: "b", text: "The Higgs field — particles that interact more strongly with it accumulate more 'resistance to acceleration,' which manifests as greater mass" },
            { id: "c", text: "Gravity pulling particles downward" },
            { id: "d", text: "Dark matter surrounding visible matter" },
          ],
          correctOptionId: "b",
          explanation:
            "The crowd is the Higgs field. A famous person (strongly interacting particle) gathers many people around them, making them harder to push through — analogous to acquiring mass. An unknown person (weakly interacting) slips through easily — less mass.",
        },
      ],
    },
  ],
};
