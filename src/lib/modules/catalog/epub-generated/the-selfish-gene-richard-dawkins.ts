import type { LearningModule } from "@/lib/modules/types";

// High-quality curriculum module derived from EPUB.
// Source: G:\My Drive\15_E-BOOKS\file012078.epub
// Author: Richard Dawkins  |  Subject: Biology

export const TheSelfishGeneRichardDawkinsModule: LearningModule = {
  id: "the-selfish-gene-richard-dawkins",
  title: "The Selfish Gene",
  description:
    "Richard Dawkins's revolutionary work reframes evolution from the perspective of the gene rather than the organism. Beginning with the origin of self-replicating molecules in the primordial soup, Dawkins argues that genes — not individuals, not groups, not species — are the true units of natural selection. Organisms are merely 'survival machines' built by genes to propagate copies of themselves. This gene's-eye view illuminates aggression, altruism, sexual conflict, parental investment, and the birth of culture through 'memes.'",
  subject: "Science",
  tags: ["epub-derived", "curriculum", "interactive", "biology", "evolution", "genetics"],
  minAge: 18,
  maxAge: 99,
  version: "2.0.0",
  learningObjectives: [
    "Explain why natural selection operates at the level of the gene rather than the individual organism",
    "Describe how the first self-replicating molecules gave rise to evolution by natural selection",
    "Define survival machines and explain the relationship between genes and organisms",
    "Analyse evolutionary stable strategies and their role in aggression and cooperation",
    "Apply kin selection theory to explain altruistic behaviour among related organisms",
    "Evaluate the concept of reciprocal altruism and its conditions for evolutionary stability",
    "Describe the meme as a unit of cultural replication and compare it to the gene",
  ],
  lessons: [

    /* ─────────────────────────────────────────────────
       L01  Why Are People? The Gene's-Eye View
    ───────────────────────────────────────────────── */
    {
      id: "sg-l01",
      title: "Why Are People? The Gene's-Eye View of Evolution",
      type: "video",
      duration: 12,
      objectives: [
        "State Dawkins's central thesis that organisms exist for the benefit of genes",
        "Explain what it means for a gene to be 'selfish' in evolutionary terms",
        "Distinguish gene-level selection from group selection",
      ],
      chunks: [
        {
          id: "sg-l01-c1",
          title: "The Question Every Intelligent Species Must Answer",
          content:
            "Dawkins opens with a striking thought experiment: if superior creatures from space ever visit Earth, the first question they would ask to assess our civilisation's maturity is 'Have they discovered evolution yet?' For over three thousand million years, living organisms existed without ever knowing why they were here. Then one of them — Charles Darwin — finally worked out the answer. Dawkins's purpose in The Selfish Gene is to take that answer to its logical conclusion. He argues that the fundamental unit of natural selection is not the species, not the group, not even the individual organism, but the gene itself. Organisms — from bacteria to blue whales to humans — are 'survival machines': vehicles built by genes to ensure their own replication. This perspective, which Dawkins calls the gene's-eye view, does not deny the reality of organisms, populations, or ecosystems. It simply insists that the deepest explanatory power in evolutionary biology lies at the level of the gene.",
        },
        {
          id: "sg-l01-c2",
          title: "What 'Selfish' Means — and What It Does Not",
          content:
            "Dawkins is careful to define selfishness in a strictly behavioural, not psychological, sense. A gene is 'selfish' if its effects tend to increase the number of copies of that gene in the next generation, regardless of consequences for other genes or for the organism as a whole. This is not a claim about consciousness or intention — genes do not think, scheme, or desire. It is a shorthand for a statistical outcome: those genes whose phenotypic effects happen to increase their representation in the gene pool will, by definition, become more prevalent. Genes that do not produce such effects will decline and eventually vanish. This framing eliminates a persistent confusion in evolutionary thinking. People often speak of behaviours evolving 'for the good of the species,' but Dawkins demonstrates that group selection is almost always a weaker evolutionary force than individual — and ultimately gene-level — selection. A gene that sacrifices its host for the good of the group will be outcompeted by a rival allele that does not.",
        },
        {
          id: "sg-l01-c3",
          title: "Survival Machines: Bodies as Gene Vehicles",
          content:
            "The phrase 'survival machine' captures Dawkins's central metaphor. Your body is not the beneficiary of evolution; it is the tool. Genes cannot replicate by themselves in the modern world — they need elaborate molecular machinery, housed in cells, organised into tissues and organs, coordinated by nervous systems and immune defences. All of this complexity exists because genes that built better survival machines left more copies of themselves than genes that did not. The total number of survival machines on Earth is almost beyond counting: an estimated three million insect species alone, each one a different design solution to the problem of gene propagation. Yet despite this staggering diversity, every survival machine shares the same fundamental logic — it is a vehicle constructed by cooperating genes to navigate environmental challenges long enough to reproduce. The organism dies; copies of its genes persist in offspring. From the gene's perspective, the body is disposable. What matters is the information encoded in DNA and its continued transmission across generations.",
        },
      ],
      flashcards: [
        {
          id: "sg-l01-f1",
          front: "Dawkins's central thesis",
          back: "Genes — not organisms, groups, or species — are the fundamental units of natural selection. Organisms are 'survival machines' built by genes to propagate copies of themselves across generations.",
        },
        {
          id: "sg-l01-f2",
          front: "Gene selfishness (Dawkins's definition)",
          back: "A gene is 'selfish' if its phenotypic effects tend to increase the number of copies of that gene in the next generation — a statistical outcome, not a psychological attribute. Genes do not think or intend.",
        },
        {
          id: "sg-l01-f3",
          front: "Why group selection is weak",
          back: "A gene that sacrifices its host for the good of the group will be outcompeted by a rival allele that does not. Individual (gene-level) selection is almost always a stronger evolutionary force than group-level selection.",
        },
        {
          id: "sg-l01-f4",
          front: "Survival machine",
          back: "Dawkins's term for any organism — from bacterium to human. Bodies are vehicles constructed by cooperating genes to navigate the environment, reproduce, and transmit genetic information. The body is disposable; gene copies persist.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L02  The Replicators: Origin of Life
    ───────────────────────────────────────────────── */
    {
      id: "sg-l02",
      title: "The Replicators: How Life Began in the Primordial Soup",
      type: "video",
      duration: 12,
      objectives: [
        "Describe the conditions in the primordial soup that allowed the first replicators to form",
        "Explain the three properties a molecule needs to function as a replicator",
        "Trace the evolutionary arms race from naked replicators to the first cells",
      ],
      chunks: [
        {
          id: "sg-l02-c1",
          title: "In the Beginning Was Simplicity",
          content:
            "Dawkins argues that the origin of life required no miraculous event — only a single chemical accident of sufficient improbability. In the primordial oceans of four billion years ago, simple organic molecules accumulated in what has been called the 'primordial soup.' Energy from ultraviolet radiation, lightning, and volcanic activity drove chemical reactions that produced amino acids, sugars, and nucleotide bases — the building blocks of more complex molecules. Experiments by Stanley Miller and others demonstrated that such synthesis is chemically plausible. Over vast stretches of time, random molecular collisions occasionally produced larger, more complex structures. At some point, by sheer chance, a molecule arose that had a remarkable property: it could make copies of itself. This was the first replicator — and that single event launched the process of evolution by natural selection on Earth.",
        },
        {
          id: "sg-l02-c2",
          title: "Fidelity, Fecundity, and Longevity: The Replicator's Three Properties",
          content:
            "Dawkins identifies three properties that determine a replicator's success in the competition for raw materials. First is copying fidelity: a replicator whose copies are exact will transmit its characteristics more reliably than one that makes frequent errors. Second is fecundity — the speed of replication. A molecule that copies itself ten times faster than a rival will exponentially dominate the population within a few generations. Third is longevity: the longer an individual copy survives, the more opportunities it has to be copied. These three properties — fidelity, fecundity, and longevity — establish a competitive dynamic among replicators. Copying errors are inevitable, and these 'mistakes' are the raw material of evolution. Most errors are neutral or harmful, but occasionally a mutation produces a variant with higher fidelity, faster replication, or greater durability. That variant then dominates. No conscious planning is involved — only the blind, cumulative logic of differential survival.",
        },
        {
          id: "sg-l02-c3",
          title: "From Naked Replicators to the First Survival Machines",
          content:
            "As competition among replicators intensified, natural selection began to favour variants that could protect themselves. Some replicators developed protein coats — rudimentary barriers against chemical degradation. Others evolved the ability to break down rival replicators and scavenge their building blocks. Dawkins describes this as an escalating arms race: each new defensive or offensive innovation created selective pressure for counter-innovations. Eventually, replicators began constructing increasingly elaborate protective shells around themselves — membranes that maintained favourable internal chemistry, enzymatic pathways that manufactured building blocks from simpler precursors, and regulatory mechanisms that coordinated molecular activity. These assemblages became the first cells: the original survival machines. The critical insight is that the replicators did not 'decide' to build cells. Rather, those replicators that happened to exist inside protective molecular structures survived and reproduced more successfully than naked replicators exposed to the competitive chemical environment. Bodies are, at their deepest origin, gene shelters.",
        },
      ],
      flashcards: [
        {
          id: "sg-l02-f1",
          front: "Primordial soup",
          back: "The pre-biotic oceans rich in organic molecules (amino acids, sugars, nucleotides) formed by energy from UV radiation, lightning, and volcanic activity — the chemical environment in which the first self-replicating molecules arose.",
        },
        {
          id: "sg-l02-f2",
          front: "Three properties of a successful replicator",
          back: "1) Copying fidelity — accuracy of replication; 2) Fecundity — speed of replication; 3) Longevity — survival time of each copy. Together these determine competitive success in a population of replicators.",
        },
        {
          id: "sg-l02-f3",
          front: "Copying errors (mutations)",
          back: "Inevitable mistakes in replication that provide the raw material for evolution. Most are neutral or harmful, but rare beneficial mutations produce variants with superior fidelity, fecundity, or longevity that then dominate the population.",
        },
        {
          id: "sg-l02-f4",
          front: "Replicator arms race",
          back: "The escalating competition among early replicators that drove the evolution of protective protein coats, lipid membranes, and enzymatic pathways — ultimately producing the first cells (survival machines) as gene shelters.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L03  Immortal Coils and the Gene Machine
    ───────────────────────────────────────────────── */
    {
      id: "sg-l03",
      title: "Immortal Coils and the Gene Machine",
      type: "video",
      duration: 13,
      objectives: [
        "Explain how chromosomal crossing-over defines the gene as a unit of selection",
        "Describe how genes cooperate within a genome to build complex organisms",
        "Analyse the evolution of nervous systems as gene-built decision-making tools",
      ],
      chunks: [
        {
          id: "sg-l03-c1",
          title: "What Exactly Is a Gene? The Immortal Coil",
          content:
            "A chromosome is a long strand of DNA that, during sexual reproduction, is broken apart and recombined through the process of crossing-over. This means that any individual stretch of DNA has a finite 'half-life' on a chromosome: eventually, recombination will split it from its neighbours. Dawkins defines the gene not as a fixed molecular entity but as any portion of chromosomal material that potentially lasts for enough generations to serve as a unit of natural selection. Short sequences are more likely to survive crossing-over intact than long ones, so the 'gene' in Dawkins's sense is typically a stretch of DNA small enough to persist through many recombination events. This is why genes, not whole chromosomes, are the units of selection: chromosomes are shuffled each generation, but a successful gene can persist — in the form of identical copies distributed across many organisms — for millions of years. The gene is, in Dawkins's phrase, an 'immortal coil' — not individually immortal, but potentially immortal as a lineage of faithful copies.",
        },
        {
          id: "sg-l03-c2",
          title: "Cooperation Among Genes: Building a Body",
          content:
            "If genes are selfish replicators, why do they cooperate to build complex organisms instead of competing destructively? Dawkins answers with an analogy to a rowing team. Each gene finds itself in a 'boat' (a body) with other genes, and its success depends on how well the whole crew rows together. Natural selection does not favour the gene that rows hardest individually if it disrupts the crew's coordination. Instead, it favours genes that complement each other — genes for building effective hearts alongside genes for efficient lungs, genes for sharp vision alongside genes for rapid neural processing. Over evolutionary time, this mutual selection pressure has assembled genomes of extraordinary internal cooperation. The result is the illusion of design: organisms look as if they were engineered because the genes that built them were selected, generation after generation, for their ability to work together within the shared vehicle of the body.",
        },
        {
          id: "sg-l03-c3",
          title: "The Gene Machine: Nervous Systems as Prediction Engines",
          content:
            "Early survival machines were passive receptacles — providing little more than chemical walls to protect genes from the environment. But as competition intensified, genes that built more sophisticated machines had a survival advantage. The greatest leap was the evolution of the nervous system: a gene-built organ capable of processing environmental information and generating adaptive behaviour in real time. Dawkins describes the nervous system as a device that allows genes to delegate decision-making to the organism. Genes cannot anticipate every contingency their survival machine will face, so they build brains equipped with general-purpose learning and prediction capabilities. The brain simulates possible futures and selects actions likely to promote survival and reproduction — faster and more flexibly than any genetically hardwired response could. In this sense, consciousness and intelligence are themselves products of gene selfishness: they exist because genes that built brains capable of flexible behaviour left more copies of themselves than genes that relied on rigid instincts alone.",
        },
      ],
      flashcards: [
        {
          id: "sg-l03-f1",
          front: "Dawkins's definition of 'gene'",
          back: "Any portion of chromosomal DNA small enough to last for many generations of crossing-over and recombination — the unit of selection. Not a fixed molecular entity but a stretch of information that persists as a lineage of faithful copies.",
        },
        {
          id: "sg-l03-f2",
          front: "Immortal coil",
          back: "Dawkins's metaphor for the gene: not individually immortal, but potentially immortal as a lineage of identical copies distributed across many organisms over millions of years — surviving the constant reshuffling of chromosomes.",
        },
        {
          id: "sg-l03-f3",
          front: "Rowing-team analogy",
          back: "Genes cooperate like members of a rowing crew: selection favours genes that complement each other within the shared body, not genes that disrupt overall coordination. This explains the emergence of complex, internally cooperative genomes.",
        },
        {
          id: "sg-l03-f4",
          front: "Nervous system as gene proxy",
          back: "Brains are gene-built organs that delegate real-time decision-making to the organism, simulating possible futures and selecting adaptive behaviour faster and more flexibly than hardwired genetic instructions could.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L04  Aggression, ESS, and Game Theory
    ───────────────────────────────────────────────── */
    {
      id: "sg-l04",
      title: "Aggression, Stability, and Evolutionary Game Theory",
      type: "video",
      duration: 12,
      objectives: [
        "Define an Evolutionary Stable Strategy (ESS) and explain its significance",
        "Contrast Hawk and Dove strategies and their payoff dynamics",
        "Explain why organisms rarely fight to the death despite 'selfish' genes",
      ],
      chunks: [
        {
          id: "sg-l04-c1",
          title: "Why Don't Animals Fight to the Death?",
          content:
            "If genes are selfish, why don't organisms engage in unlimited violence? Dawkins addresses this puzzle with a concept borrowed from mathematical game theory: the Evolutionary Stable Strategy (ESS), developed by John Maynard Smith. An ESS is a behavioural strategy that, once adopted by a majority of the population, cannot be invaded by any mutant alternative strategy. Consider aggression between members of the same species. To a survival machine, another survival machine is a potential competitor for food, territory, and mates — as well as a potential meal. But unlike predator-prey encounters, same-species conflicts carry a peculiar cost: both contestants are equally well armed. An antelope fighting a lion has horns versus claws, but an antelope fighting another antelope faces equally sharp horns on both sides. The risk of serious injury during intra-species combat is therefore very high, which is precisely why natural selection has favoured restraint rather than all-out war.",
        },
        {
          id: "sg-l04-c2",
          title: "Hawks, Doves, and the Logic of Mixed Strategies",
          content:
            "Dawkins introduces Maynard Smith's Hawk-Dove model to formalise this reasoning. Hawks always fight at full intensity and never back down until they win or are seriously injured. Doves display and posture but retreat immediately if their opponent escalates to real violence. In a population of pure Doves, a single Hawk mutant would win every contest unopposed and spread rapidly. But in a population of pure Hawks, the costs of constant serious injury would be devastating, and a Dove mutant — who avoids injury by retreating — would actually enjoy higher average fitness. The result is a stable equilibrium: a mixed population containing both strategies in a proportion determined by the relative costs of injury and the value of the contested resource. This is the ESS — not an optimal outcome for any individual, but a strategy mix that resists invasion by alternatives. Dawkins uses this to explain why real-world animal contests involve so much ritualised display and so little lethal combat.",
        },
        {
          id: "sg-l04-c3",
          title: "Beyond Hawks and Doves: Retaliator and Bourgeois Strategies",
          content:
            "The simple Hawk-Dove model is only a starting point. Dawkins describes more sophisticated ESS models that better reflect observed animal behaviour. The Retaliator strategy behaves like a Dove initially — displaying and posturing — but switches to Hawk-like escalation if the opponent attacks. In many models, Retaliator proves to be an even more robust ESS than either pure strategy because it avoids unnecessary fights while punishing unprovoked aggression. The Bourgeois strategy adds a property rule: if the individual happens to be the territory holder (the 'resident'), it fights like a Hawk; if it is the intruder, it retreats like a Dove. This asymmetry exploits a simple decision rule ('I was here first') to resolve contests without the costs of escalation. Both strategies demonstrate how game-theoretic logic, rather than group-level planning, can produce behaviours that look intelligent and even 'fair' — purely through the differential survival of genes that code for these conditional responses.",
        },
      ],
      flashcards: [
        {
          id: "sg-l04-f1",
          front: "Evolutionary Stable Strategy (ESS)",
          back: "A behavioural strategy that, once adopted by a majority, cannot be invaded by any alternative mutant strategy — a concept from John Maynard Smith that explains population-level behavioural equilibria through gene-level selection.",
        },
        {
          id: "sg-l04-f2",
          front: "Hawk-Dove model",
          back: "A game-theory model: Hawks always escalate (risking injury); Doves always retreat from real fights. Neither pure population is stable — the ESS is a mixed equilibrium whose proportions depend on injury cost vs resource value.",
        },
        {
          id: "sg-l04-f3",
          front: "Retaliator strategy",
          back: "An ESS variant: initially behaves like a Dove (display only), but escalates to Hawk-like fighting if the opponent attacks first — avoids unnecessary costs while punishing aggression.",
        },
        {
          id: "sg-l04-f4",
          front: "Bourgeois strategy",
          back: "An ESS using an asymmetric rule: fight like a Hawk when you are the resident (territory holder), retreat like a Dove when you are the intruder — resolves contests cheaply using a simple 'I was here first' convention.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L05  Checkpoint Quiz — Genes, Replicators, and Strategies
    ───────────────────────────────────────────────── */
    {
      id: "sg-l05",
      title: "Genes, Replicators, and Strategies: Checkpoint Quiz",
      type: "quiz",
      duration: 8,
      objectives: ["Assess understanding of replicators, survival machines, gene cooperation, and ESS"],
      questions: [
        {
          id: "sg-l05-q1",
          text: "According to Dawkins, what is the fundamental unit of natural selection?",
          options: [
            { id: "a", text: "The individual organism" },
            { id: "b", text: "The species" },
            { id: "c", text: "The gene" },
            { id: "d", text: "The social group" },
          ],
          correctOptionId: "c",
          explanation:
            "Dawkins argues that genes — not organisms, groups, or species — are the fundamental units of selection. Organisms are 'survival machines' built by genes for their own propagation.",
        },
        {
          id: "sg-l05-q2",
          text: "Which three properties determine a replicator's competitive success in the primordial soup?",
          options: [
            { id: "a", text: "Size, complexity, and energy consumption" },
            { id: "b", text: "Copying fidelity, fecundity (speed of replication), and longevity" },
            { id: "c", text: "Motility, membrane thickness, and metabolic rate" },
            { id: "d", text: "Temperature tolerance, chemical resistance, and mutation rate" },
          ],
          correctOptionId: "b",
          explanation:
            "Dawkins identifies copying fidelity, fecundity (replication speed), and longevity (survival time of each copy) as the three properties that determine which replicators dominate the population.",
        },
        {
          id: "sg-l05-q3",
          text: "Why does Dawkins define the 'gene' as a stretch of DNA small enough to survive many rounds of chromosomal crossing-over?",
          options: [
            { id: "a", text: "Small DNA sequences are more likely to mutate beneficially" },
            { id: "b", text: "Longer sequences are always non-functional" },
            { id: "c", text: "The gene must persist for enough generations to serve as a unit of natural selection, and crossing-over breaks apart long sequences" },
            { id: "d", text: "Only small sequences can be transcribed into proteins" },
          ],
          correctOptionId: "c",
          explanation:
            "Crossing-over during sexual reproduction constantly shuffles chromosomes. Only stretches of DNA short enough to survive recombination across many generations can act as stable units of selection — hence Dawkins's definition of the gene.",
        },
        {
          id: "sg-l05-q4",
          text: "In the Hawk-Dove model, what happens in a population composed entirely of Hawks?",
          options: [
            { id: "a", text: "All contests are resolved by display, so Hawks have maximum fitness" },
            { id: "b", text: "A Dove mutant would have lower fitness and be eliminated" },
            { id: "c", text: "Serious injuries are so frequent that a Dove mutant — who avoids injury by retreating — enjoys higher average fitness, allowing Dove genes to spread" },
            { id: "d", text: "Hawks evolve into Retaliators within one generation" },
          ],
          correctOptionId: "c",
          explanation:
            "In an all-Hawk population, the costs of constant serious injury are severe. A rare Dove mutant avoids these injury costs by retreating from escalated fights, giving it higher average fitness and allowing Dove genes to invade — driving the population toward a mixed ESS.",
        },
        {
          id: "sg-l05-q5",
          text: "What is the evolutionary purpose of the nervous system according to Dawkins's gene's-eye view?",
          options: [
            { id: "a", text: "To enable organisms to experience pleasure and pain as ends in themselves" },
            { id: "b", text: "To allow genes to delegate real-time decision-making to the organism, simulating futures more flexibly than hardwired instincts" },
            { id: "c", text: "To directly control gene expression during the organism's lifetime" },
            { id: "d", text: "To coordinate migration between populations and increase group survival" },
          ],
          correctOptionId: "b",
          explanation:
            "Dawkins describes the nervous system as a gene-built organ that handles real-time environmental challenges by simulating possible futures and selecting adaptive behaviour — more flexible than any genetically hardwired response could be.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L06  Kin Selection and Family Conflict
    ───────────────────────────────────────────────── */
    {
      id: "sg-l06",
      title: "Kin Selection: Family Planning and the Battle of Generations",
      type: "video",
      duration: 13,
      objectives: [
        "Apply Hamilton's rule to predict when altruism between relatives will be favoured",
        "Explain parent-offspring conflict using Trivers's theory",
        "Describe asymmetries of interest between parents and children from a gene's perspective",
      ],
      chunks: [
        {
          id: "sg-l06-c1",
          title: "Hamilton's Rule: The Mathematics of Family Altruism",
          content:
            "Why do animals sometimes sacrifice their own reproductive success for relatives? Dawkins presents W.D. Hamilton's elegant answer: a gene for altruism toward kin can spread if the cost to the altruist (c) is less than the benefit to the recipient (b) weighted by the degree of genetic relatedness (r). Formally: altruism is favoured when rb > c. Since siblings share, on average, 50 percent of their genes, a gene that causes an organism to sacrifice its life to save more than two siblings will increase its own representation in the gene pool. The deeper principle is that the gene 'does not care' which body it resides in — what matters is the total number of copies across all bodies. From the gene's perspective, an organism's own offspring (r = 0.5) are no more valuable than siblings (r = 0.5), and cousins (r = 0.125) count too, just at a discount. This view explains parental care not as a unique category of behaviour but as a special case of kin-selected altruism — the case where r happens to be 0.5.",
        },
        {
          id: "sg-l06-c2",
          title: "Parent-Offspring Conflict: When Family Interests Diverge",
          content:
            "Dawkins draws on Robert Trivers's theory to illuminate a subtler point: even though parents and offspring share 50 percent of their genes, their genetic interests are not identical — and the differences create genuine evolutionary conflict. A mother is equally related to each of her offspring (r = 0.5 in every case), so from her gene's perspective, the optimal strategy is to distribute investment roughly equally among all current and future children. But each individual child is related to itself by r = 1.0 and to its siblings by only r = 0.5. From the child's gene's perspective, it should receive at least twice as much parental investment as each sibling. This asymmetry means that a child's genes favour behaviours — crying louder, demanding food longer, resisting weaning — that extract more resources from the parent than the parent's genes would optimally give. The parent is not 'wrong' to resist, nor is the child 'greedy' — both are expressing the cold arithmetic of differential relatedness.",
        },
        {
          id: "sg-l06-c3",
          title: "Should a Mother Have Favourites?",
          content:
            "Dawkins extends the analysis to ask whether parents should invest equally in all offspring. From the mother's genetic perspective, each offspring carries the same proportion of her genes, suggesting equal investment. But circumstances intervene: a sickly offspring with low survival prospects represents a poor genetic return on investment, while a robust offspring in a favourable environment offers a high return. Genes that cause mothers to preferentially invest in offspring with the highest reproductive prospects — even at the expense of weaker siblings — will, on average, leave more copies of themselves. This logic explains the widespread phenomenon of brood reduction in nature: many bird species lay more eggs than they can typically raise, allowing the strongest chicks to outcompete weaker siblings when resources are scarce. The parent does not intervene because, from the gene's perspective, the surviving chicks represent the best available return on parental investment. Such explanations are chilling from a human moral perspective, but Dawkins insists that understanding selective pressures does not entail endorsing their outcomes.",
        },
      ],
      flashcards: [
        {
          id: "sg-l06-f1",
          front: "Hamilton's rule",
          back: "Altruism is favoured by natural selection when rb > c, where r = genetic relatedness between altruist and recipient, b = reproductive benefit to recipient, c = reproductive cost to altruist.",
        },
        {
          id: "sg-l06-f2",
          front: "Kin-selected altruism",
          back: "Behaviour that reduces an organism's own fitness but increases the fitness of genetic relatives — favoured because it increases the total number of copies of the altruist's genes across all bodies in the population.",
        },
        {
          id: "sg-l06-f3",
          front: "Parent-offspring conflict (Trivers)",
          back: "Genetic conflict arising because each offspring is related to itself by r = 1.0 but to siblings by only r = 0.5, while the parent is equally related (r = 0.5) to all — children's genes favour extracting more investment than parent's genes would optimally give.",
        },
        {
          id: "sg-l06-f4",
          front: "Brood reduction",
          back: "The phenomenon where parents produce more offspring than they can raise, allowing stronger offspring to outcompete weaker siblings when resources are scarce — represents optimal parental investment from a gene's-eye perspective.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L07  Reciprocal Altruism and Memes
    ───────────────────────────────────────────────── */
    {
      id: "sg-l07",
      title: "Reciprocal Altruism and Memes: The New Replicators",
      type: "video",
      duration: 13,
      objectives: [
        "Explain the conditions under which reciprocal altruism can be evolutionary stable",
        "Describe the 'tit-for-tat' strategy and its success in iterated games",
        "Define the meme as a unit of cultural replication and compare it to the gene",
      ],
      chunks: [
        {
          id: "sg-l07-c1",
          title: "You Scratch My Back: Altruism Among Non-Relatives",
          content:
            "Kin selection explains altruism among relatives, but many animals cooperate with non-relatives — cleaner fish that remove parasites from larger fish, vampire bats that share blood meals with unrelated roost-mates, baboons that form defensive coalitions. Dawkins draws on Trivers's theory of reciprocal altruism to explain these patterns. If two unrelated organisms interact repeatedly, a gene that causes its bearer to help others — provided they reciprocate — can be evolutionarily stable, because the long-term benefits of mutual aid exceed the short-term costs of each individual act. The key conditions are: repeated interactions between the same individuals, the ability to recognise and remember individuals, and the capacity to detect and punish cheaters who accept help but never reciprocate. When these conditions are met, cooperation between non-relatives emerges not from moral virtue but from the cold mathematics of iterated game theory.",
        },
        {
          id: "sg-l07-c2",
          title: "Tit-for-Tat and the Evolution of Cooperation",
          content:
            "Computer scientist Robert Axelrod ran famous tournaments in which game-theory strategies competed in iterated Prisoner's Dilemma games — and discovered that the simplest strategy, Tit-for-Tat, consistently outperformed far more complex alternatives. Tit-for-Tat begins by cooperating, then simply mirrors whatever the partner did on the previous move: cooperate if they cooperated, defect if they defected. Its success rests on four properties: it is nice (never the first to defect), retaliatory (immediately punishes defection), forgiving (returns to cooperation as soon as the partner does), and clear (its behaviour is easily understood by other strategies). Dawkins uses this result to illustrate how natural selection can favour cooperation without group selection or conscious intention. A gene coding for Tit-for-Tat behaviour in a population with repeated interactions will spread because its bearers gain the cumulative benefits of mutual cooperation while being protected from exploitation.",
        },
        {
          id: "sg-l07-c3",
          title: "Memes: Cultural Evolution and the New Replicators",
          content:
            "In the book's most far-reaching chapter, Dawkins introduces the concept of the meme — a unit of cultural transmission that replicates, mutates, and competes in a manner analogous to the gene. Examples include tunes, catchphrases, fashions, scientific ideas, religious beliefs, and architectural styles. Just as genes propagate by leaping from body to body via reproduction, memes propagate by leaping from brain to brain via communication: imitation, teaching, writing, broadcasting. A successful meme — like a catchy melody or a compelling political slogan — is one that is faithfully copied, spreads quickly, and persists in the cultural environment. The three replicator properties — fidelity, fecundity, and longevity — apply to memes just as they do to genes. Dawkins's deeper point is that human evolution cannot be understood through biology alone. Once brains became sophisticated enough to support imitation, a second replicator was born — one that evolves far faster than DNA and whose effects now dominate human life. Culture is not the opposite of biology; it is a new kind of Darwinian evolution running on a different substrate.",
        },
      ],
      flashcards: [
        {
          id: "sg-l07-f1",
          front: "Reciprocal altruism (Trivers)",
          back: "Cooperation between non-relatives that is evolutionary stable when interactions are repeated, individuals can be recognised, and cheaters (who accept help but never reciprocate) can be detected and punished.",
        },
        {
          id: "sg-l07-f2",
          front: "Tit-for-Tat strategy",
          back: "An iterated game-theory strategy: cooperate first, then mirror the partner's previous move. Succeeds because it is nice (never defects first), retaliatory (punishes defection), forgiving (returns to cooperation), and clear (easily understood).",
        },
        {
          id: "sg-l07-f3",
          front: "Meme (Dawkins)",
          back: "A unit of cultural transmission — tunes, ideas, fashions, beliefs — that replicates by leaping from brain to brain via imitation and communication. Subject to the same three replicator properties as genes: fidelity, fecundity, and longevity.",
        },
        {
          id: "sg-l07-f4",
          front: "Cultural evolution vs biological evolution",
          back: "Once brains supported imitation, a second Darwinian replicator — the meme — emerged, evolving far faster than DNA. Human behaviour is shaped by both genetic and memetic selection operating on different substrates.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L08  Final Assessment
    ───────────────────────────────────────────────── */
    {
      id: "sg-l08",
      title: "The Selfish Gene: Comprehensive Assessment",
      type: "quiz",
      duration: 9,
      objectives: ["Evaluate mastery of all major concepts from The Selfish Gene"],
      questions: [
        {
          id: "sg-l08-q1",
          text: "A worker bee that stings an intruder — dying in the process — to defend its hive is best explained by which concept?",
          options: [
            { id: "a", text: "Group selection: the hive survives at the expense of individuals" },
            { id: "b", text: "Kin selection (Hamilton's rule): the worker shares a high proportion of genes with the queen's offspring, so the gene for self-sacrifice spreads" },
            { id: "c", text: "Reciprocal altruism: other bees will return the favour in future encounters" },
            { id: "d", text: "The ESS Bourgeois strategy: the resident always fights to the death" },
          ],
          correctOptionId: "b",
          explanation:
            "Worker bees are extremely closely related to their sisters (r ≈ 0.75 in haplodiploid species). Hamilton's rule predicts that self-sacrifice is favoured when rb > c — saving many closely related sisters provides a large rb value that exceeds the cost of one worker's death.",
        },
        {
          id: "sg-l08-q2",
          text: "Which statement best captures Dawkins's reason for calling genes 'immortal coils'?",
          options: [
            { id: "a", text: "Individual DNA molecules never degrade" },
            { id: "b", text: "Genes survive as lineages of identical copies across millions of years, even though individual molecules are temporary" },
            { id: "c", text: "Chromosomes are passed intact from parent to offspring without recombination" },
            { id: "d", text: "Natural selection prevents any gene from going extinct" },
          ],
          correctOptionId: "b",
          explanation:
            "The 'immortal coil' is a metaphor for the gene's potential persistence as a lineage of faithful copies across vast timescales — even though each individual DNA molecule is temporary and chromosomes are reshuffled by crossing-over each generation.",
        },
        {
          id: "sg-l08-q3",
          text: "What distinguishes a meme from a gene as a replicator?",
          options: [
            { id: "a", text: "Memes are transmitted by imitation and communication rather than sexual reproduction, and they evolve much faster" },
            { id: "b", text: "Memes affect only human behaviour while genes affect all organisms" },
            { id: "c", text: "Memes are always beneficial while genes can be harmful" },
            { id: "d", text: "Memes cannot mutate — they are copied perfectly between brains" },
          ],
          correctOptionId: "a",
          explanation:
            "Dawkins defines memes as cultural replicators that spread from brain to brain via imitation, teaching, and media — operating on a different substrate than DNA and evolving far faster than biological genes.",
        },
        {
          id: "sg-l08-q4",
          text: "According to Trivers's parent-offspring conflict theory, why does a child's genetic interest differ from its mother's?",
          options: [
            { id: "a", text: "Children share no genes with their siblings" },
            { id: "b", text: "Mothers are related to all offspring equally (r = 0.5) and favour equal investment, while each child, related to itself by r = 1.0 and to siblings by r = 0.5, favours receiving disproportionately more" },
            { id: "c", text: "Mothers always prefer younger offspring because they have higher reproductive value" },
            { id: "d", text: "Children cannot recognise their siblings, preventing kin selection from operating" },
          ],
          correctOptionId: "b",
          explanation:
            "The asymmetry is arithmetic: a mother values each offspring equally (r = 0.5 to each), but each child values itself twice as much (r = 1.0) as a sibling (r = 0.5) — creating inherent genetic conflict over the distribution of parental investment.",
        },
        {
          id: "sg-l08-q5",
          text: "Why does Tit-for-Tat succeed in iterated Prisoner's Dilemma tournaments?",
          options: [
            { id: "a", text: "It always defects, maximising individual payoff in every round" },
            { id: "b", text: "It cooperates first, then mirrors the partner's previous move — balancing niceness, retaliation, forgiveness, and clarity" },
            { id: "c", text: "It uses complex probability calculations to predict the partner's next move" },
            { id: "d", text: "It randomly alternates between cooperation and defection, preventing exploitation" },
          ],
          correctOptionId: "b",
          explanation:
            "Tit-for-Tat's power lies in its simplicity: cooperate on the first move, then copy whatever the partner did previously. It is nice (never defects first), retaliatory (punishes defection immediately), forgiving (returns to cooperation), and clear (its pattern is transparent). These four properties make it remarkably robust across diverse opponent strategies.",
        },
        {
          id: "sg-l08-q6",
          text: "In what sense does Dawkins say the organism is 'disposable' from the gene's perspective?",
          options: [
            { id: "a", text: "Organisms never live long enough to reproduce" },
            { id: "b", text: "The body is a temporary vehicle — what matters is that copies of the gene persist in offspring and other relatives across generations" },
            { id: "c", text: "Natural selection eliminates all organisms equally" },
            { id: "d", text: "Genes actively programme organisms to die as quickly as possible" },
          ],
          correctOptionId: "b",
          explanation:
            "From the gene's perspective, the body is a means to an end: a survival machine that exists to replicate and transmit genetic information. The individual organism dies, but copies of its genes — in offspring, siblings, and other kin — persist across generations.",
        },
      ],
    },
  ],
};
