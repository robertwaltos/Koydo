import type { LearningModule } from "@/lib/modules/types";

// High-quality curriculum module derived from EPUB.
// Source: G:\My Drive\15_E-BOOKS\file002569.epub
// Author: Aristotle  |  Subject: Philosophy

export const MetaphysicsAristotleModule: LearningModule = {
  id: "metaphysics-aristotle",
  title: "Metaphysics",
  description:
    "An in-depth exploration of Aristotle's Metaphysics — the foundational treatise on 'first philosophy' that investigates being qua being, substance, causation, potentiality and actuality, and the nature of the divine. This module covers the core books of the Metaphysics and their enduring influence on Western thought.",
  subject: "Philosophy",
  tags: ["epub-derived", "curriculum", "interactive", "philosophy", "metaphysics", "aristotle", "ancient-philosophy"],
  minAge: 18,
  maxAge: 99,
  version: "2.0.0",
  learningObjectives: [
    "Explain Aristotle's conception of first philosophy as the study of being qua being",
    "Analyse the four causes and their role in scientific explanation",
    "Define substance (ousia) and distinguish it from accidents",
    "Explain the concepts of potentiality (dynamis) and actuality (energeia)",
    "Evaluate Aristotle's critique of Plato's Theory of Forms",
    "Describe the Unmoved Mover and its role in Aristotle's cosmology",
    "Assess the lasting influence of Aristotelian metaphysics on medieval and modern philosophy",
  ],
  lessons: [

    /* ─────────────────────────────────────────────────
       L01  First Philosophy: The Study of Being Qua Being
    ───────────────────────────────────────────────── */
    {
      id: "mt-l01",
      title: "First Philosophy: The Study of Being Qua Being",
      type: "video",
      duration: 12,
      objectives: [
        "Explain what Aristotle means by 'being qua being'",
        "Distinguish first philosophy from the special sciences",
        "Describe the opening argument that all men by nature desire to know",
      ],
      chunks: [
        {
          id: "mt-l01-c1",
          title: "All Men by Nature Desire to Know",
          content:
            "The Metaphysics opens with one of the most famous sentences in philosophy: 'All men by nature desire to know.' Aristotle begins not with abstractions but with observation: human beings take delight in their senses, especially sight, because the senses bring knowledge of the world. From sense perception arises memory, from memory experience, and from experience the universal judgments that constitute art (technē) and science (epistēmē). This ascending hierarchy reflects Aristotle's conviction that knowledge is not a single undifferentiated capacity but a structured achievement built from simpler cognitive abilities. The person who merely perceives knows that fire is hot; the person who has experience knows that this medicine cured this patient; but the person who has art or science knows why — she grasps the universal cause. The desire to know culminates in the desire for wisdom, which Aristotle defines as knowledge of first causes and principles. This is the subject of the Metaphysics: the investigation of the most fundamental explanatory principles of all reality.",
        },
        {
          id: "mt-l01-c2",
          title: "Being Qua Being",
          content:
            "Each special science investigates a particular domain of being: physics studies natural objects in motion, mathematics studies quantity and spatial relationships, biology studies living organisms. But none of these sciences asks what it means to be — to exist — as such. This is the task of first philosophy, or what Aristotle calls the study of 'being qua being' (to on hē on). The phrase means: to study things not insofar as they are physical, mathematical, or biological, but insofar as they are — simply insofar as they exist. What are the most general features that anything must have simply in virtue of existing? What are the fundamental categories under which all existing things fall? What principles govern existence as such? These questions cannot be answered by any special science because they presuppose the special sciences' own subject matter. First philosophy is the most general and most foundational of all inquiries — it investigates the conditions of possibility for any inquiry whatsoever.",
        },
        {
          id: "mt-l01-c3",
          title: "The Categories of Being",
          content:
            "Aristotle argues that 'being' is said in many ways — it is not a single univocal term but a family of related meanings organised around a central case. The central case is substance (ousia): the concrete individual thing — this man, this horse, this oak tree. All other categories of being — quality, quantity, relation, place, time, action, passion, and several others — are dependent on substance. Whiteness exists only as the whiteness of some substance; the number three exists only as the count of some group of substances. This is Aristotle's doctrine of the focal meaning of being: substance is the primary meaning of 'being,' and all other categories derive their meaning from their relationship to substance. The question 'What is being?' therefore reduces to the question 'What is substance?' — which becomes the central inquiry of the Metaphysics from Book VII onward. This approach is revolutionary because it rejects both Parmenides' view (being is one and undifferentiated) and the Sophists' view (being is an empty word with no stable meaning).",
        },
      ],
      flashcards: [
        {
          id: "mt-l01-f1",
          front: "Being qua being",
          back:
            "The study of things simply insofar as they exist — not as physical, mathematical, or biological entities, but as beings. This is the subject of first philosophy, the most general and foundational inquiry.",
        },
        {
          id: "mt-l01-f2",
          front: "Wisdom (Aristotle)",
          back:
            "Knowledge of first causes and principles — the highest form of knowledge, achieved by understanding the universal explanatory reasons behind phenomena, not merely that things are so but why they are so.",
        },
        {
          id: "mt-l01-f3",
          front: "Focal meaning of being",
          back:
            "Being is said in many ways but centred on substance (ousia). Quality, quantity, relation, and other categories exist only as attributes of substances — substance is the primary meaning of 'being.'",
        },
        {
          id: "mt-l01-f4",
          front: "Substance (ousia)",
          back:
            "The primary category of being — the concrete individual thing (this man, this horse). All other categories of being are dependent on substance and derive their meaning from their relationship to it.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L02  The Four Causes
    ───────────────────────────────────────────────── */
    {
      id: "mt-l02",
      title: "The Four Causes",
      type: "video",
      duration: 12,
      objectives: [
        "Identify and define the four causes: material, formal, efficient, and final",
        "Apply the four-cause framework to a concrete example",
        "Explain why Aristotle considers final causation essential to explanation",
      ],
      chunks: [
        {
          id: "mt-l02-c1",
          title: "The Material and Formal Causes",
          content:
            "Aristotle holds that to understand anything fully, we must identify its four causes (aitiai) — four types of explanatory factor that together constitute a complete account of why a thing is what it is. The material cause is the stuff out of which something is made: the bronze of a statue, the bricks of a house, the flesh and bones of an animal. The formal cause is the pattern, structure, or essence that makes a thing what it is: the shape the sculptor imposes on the bronze, the architectural plan of the house, the soul (psychē) that organises and animates the living body. The formal cause is not merely the external shape but the intelligible structure — the formula or definition (logos) that specifies what kind of thing something is. For Aristotle, form and matter are inseparable in concrete objects: you never encounter formless matter (raw potential without any structure) or matterless form (pure structure without any physical embodiment) in the natural world. Every natural substance is a composite (synolon) of matter and form.",
        },
        {
          id: "mt-l02-c2",
          title: "The Efficient and Final Causes",
          content:
            "The efficient cause is the agent or process that brings something into being: the sculptor who shapes the bronze, the builder who assembles the bricks, the parents who generate the child. In modern science, efficient causation is often the only type recognised — we explain events by identifying the preceding events or forces that produced them. But Aristotle insists on a fourth factor: the final cause, or the purpose, end (telos), or that for the sake of which something exists or occurs. The final cause of a house is shelter; the final cause of a knife is cutting; the final cause of the eye is seeing. Aristotle defends teleological explanation against the atomists (Democritus, Leucippus) who argued that everything happens by mechanical necessity and chance. He observes that natural processes regularly and reliably produce functional outcomes — acorns grow into oaks, not randomly into any plant. This regularity cannot be explained by chance alone and is best explained by the hypothesis that natural processes are directed toward ends.",
        },
        {
          id: "mt-l02-c3",
          title: "Convergence of Causes",
          content:
            "Aristotle observes that in many cases, three of the four causes converge. In biological organisms, the formal, efficient, and final causes are often identical: the form of the species (the soul as formal cause) is both the source of the organism's development (efficient cause) and the goal toward which development is directed (final cause). A human embryo develops into a human adult because the human form — the rational soul — guides the developmental process toward the realisation of a specifically human life. Only the material cause remains distinct: the flesh, bones, and organs that compose the body. This convergence illustrates a deep feature of Aristotle's metaphysics: form is not a static pattern imposed from outside but a dynamic principle of organisation that drives natural processes from within. This stands in sharp contrast to both Platonic Forms (which are eternally separate from the physical world) and modern mechanism (which explains development purely through physical and chemical forces without reference to inherent purpose or direction).",
        },
      ],
      flashcards: [
        {
          id: "mt-l02-f1",
          front: "The four causes",
          back:
            "Material (what it's made of), Formal (its structure/essence), Efficient (what produced it), Final (its purpose/telos). Together they provide a complete explanation of why a thing is what it is.",
        },
        {
          id: "mt-l02-f2",
          front: "Form and matter (hylomorphism)",
          back:
            "Every natural substance is a composite of matter (physical stuff) and form (intelligible structure). Neither exists in isolation in the natural world — you never encounter formless matter or matterless form.",
        },
        {
          id: "mt-l02-f3",
          front: "Final cause (telos)",
          back:
            "The purpose, end, or that-for-the-sake-of-which something exists. Aristotle defends teleological explanation against mechanism: natural processes reliably produce functional outcomes, best explained as directed toward ends.",
        },
        {
          id: "mt-l02-f4",
          front: "Convergence of causes in biology",
          back:
            "In organisms, the formal, efficient, and final causes often coincide: the soul is the form, the driver of development, and the goal of development. Only the material cause (flesh, bones) remains distinct.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L03  Substance, Potentiality, and Actuality
    ───────────────────────────────────────────────── */
    {
      id: "mt-l03",
      title: "Substance, Potentiality, and Actuality",
      type: "video",
      duration: 13,
      objectives: [
        "Distinguish between primary and secondary substance",
        "Define potentiality (dynamis) and actuality (energeia/entelecheia)",
        "Explain why Aristotle holds that actuality is prior to potentiality",
      ],
      chunks: [
        {
          id: "mt-l03-c1",
          title: "What Is Substance?",
          content:
            "Books VII and VIII of the Metaphysics contain Aristotle's most sustained investigation of substance (ousia) — the central concept of his entire metaphysical system. Aristotle identifies four candidates for what substance might be: the essence (to ti ēn einai — 'what it was to be' a thing), the universal, the genus, and the underlying subject (hypokeimenon). He systematically evaluates each. The underlying subject — the bare matter that remains when all attributes are stripped away — fails as substance because it has no determinate nature of its own. The universal and the genus fail because they are shared by many individuals and therefore cannot be the substance of any particular thing. The winning candidate is the essence: the set of fundamental properties that make a thing what it is and without which it would not be that thing. The essence of a human being is the rational soul; the essence of water is its chemical nature. Substance, then, is the form — the intelligible structure — of a concrete individual, not its matter and not any universal category under which it falls.",
        },
        {
          id: "mt-l03-c2",
          title: "Potentiality and Actuality",
          content:
            "In Book IX, Aristotle introduces the distinction between potentiality (dynamis) and actuality (energeia or entelecheia) — one of his most influential contributions to philosophy. An acorn has the potentiality to become an oak tree; a block of marble has the potentiality to become a statue; a sleeping mathematician has the potentiality to do mathematics. Actuality is the fulfilment or realisation of a potentiality: the full-grown oak, the completed statue, the mathematician actively proving theorems. Potentiality is not nothing — it is a real feature of existing things — but it is an incomplete or unfulfilled state of being. The distinction allows Aristotle to explain change without paradox: change is the transition from potentiality to actuality, from being something in capacity to being something in reality. This solves Parmenides' puzzle about how change is possible (since being cannot come from non-being): the acorn is not nothing, it is potentially an oak, and its growth is the actualisation of a real potentiality.",
        },
        {
          id: "mt-l03-c3",
          title: "The Priority of Actuality",
          content:
            "Aristotle argues that actuality is prior to potentiality in three senses. First, in definition: you cannot understand what a potentiality is without reference to the actuality it is a potentiality for. 'Buildable' means 'capable of being built' — the concept of the builder and the completed house are presupposed. Second, in time (within each species): the actual adult precedes the potential adult, because only an actual human can generate a new human embryo that has the potentiality to become an adult. Third, and most fundamentally, in substance: actuality is ontologically prior to potentiality because the fully actualised form is the primary reality, and potentiality only exists as a tendency toward that form. A world of pure potentialities with no actualities would be nothing at all — there would be no determinate being. This principle of the priority of actuality leads directly to Aristotle's concept of the Unmoved Mover: there must be a being of pure actuality with no residual potentiality, which serves as the ultimate explanation of all motion and change.",
        },
      ],
      flashcards: [
        {
          id: "mt-l03-f1",
          front: "The essence (to ti ēn einai)",
          back:
            "The set of fundamental properties that make a thing what it is — Aristotle's answer to 'what is substance?' The essence is the form or intelligible structure of a concrete individual.",
        },
        {
          id: "mt-l03-f2",
          front: "Potentiality (dynamis)",
          back:
            "A real but unfulfilled capacity: the acorn's capacity to become an oak, the marble's capacity to become a statue. Potentiality is not nothing — it is an incomplete state of being.",
        },
        {
          id: "mt-l03-f3",
          front: "Actuality (energeia/entelecheia)",
          back:
            "The fulfilment or realisation of a potentiality: the full-grown oak, the completed statue, the mathematician actively proving theorems. Actuality is the primary mode of being.",
        },
        {
          id: "mt-l03-f4",
          front: "Priority of actuality (three senses)",
          back:
            "Actuality is prior to potentiality in definition (potentiality presupposes the actual), in time (actual adults generate potential ones), and in substance (pure potentiality without actuality is nothing).",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L04  Checkpoint Quiz: Aristotelian Metaphysics
    ───────────────────────────────────────────────── */
    {
      id: "mt-l04",
      title: "Checkpoint Quiz: Aristotelian Metaphysics",
      type: "quiz",
      duration: 8,
      objectives: ["Assess understanding of being, substance, causes, and potentiality/actuality"],
      questions: [
        {
          id: "mt-l04-q1",
          text: "What does Aristotle mean by 'being qua being'?",
          options: [
            { id: "a", text: "The study of biological organisms as living beings" },
            { id: "b", text: "The study of things simply insofar as they exist — investigating the most general features of existence itself" },
            { id: "c", text: "The study of human consciousness and subjective experience" },
            { id: "d", text: "The mathematical study of quantity and spatial relationships" },
          ],
          correctOptionId: "b",
          explanation:
            "Being qua being is the investigation of things not as physical, biological, or mathematical entities, but simply insofar as they exist. It asks what the most general features of any existing thing must be.",
        },
        {
          id: "mt-l04-q2",
          text: "Which of the four causes explains what purpose a thing serves?",
          options: [
            { id: "a", text: "Material cause" },
            { id: "b", text: "Efficient cause" },
            { id: "c", text: "Formal cause" },
            { id: "d", text: "Final cause" },
          ],
          correctOptionId: "d",
          explanation:
            "The final cause (telos) is the purpose, end, or that-for-the-sake-of-which something exists. The final cause of a house is shelter; the final cause of the eye is seeing.",
        },
        {
          id: "mt-l04-q3",
          text: "Why does Aristotle reject 'underlying subject' (bare matter) as substance?",
          options: [
            { id: "a", text: "Because matter does not exist at all" },
            { id: "b", text: "Because bare matter, stripped of all attributes, has no determinate nature of its own and therefore cannot be what makes a thing what it is" },
            { id: "c", text: "Because matter is too complex to be understood" },
            { id: "d", text: "Because only universals can be substances" },
          ],
          correctOptionId: "b",
          explanation:
            "Bare matter — the subject that remains when all attributes are removed — has no determinate identity. Substance must be what gives a thing its determinate nature, and only the essence (form) does this.",
        },
        {
          id: "mt-l04-q4",
          text: "How does the potentiality-actuality distinction solve Parmenides' puzzle about change?",
          options: [
            { id: "a", text: "It proves that change is an illusion, as Parmenides claimed" },
            { id: "b", text: "It shows that change comes from absolute non-being" },
            { id: "c", text: "The acorn is not nothing but potentially an oak — change is the actualisation of a real potentiality, not the emergence of being from non-being" },
            { id: "d", text: "It eliminates the concept of potentiality entirely" },
          ],
          correctOptionId: "c",
          explanation:
            "Parmenides argued that change is impossible because being cannot come from non-being. Aristotle replies that the starting point of change is not non-being but potentiality — a real (though incomplete) state. Change is the transition from potential to actual.",
        },
        {
          id: "mt-l04-q5",
          text: "In what three senses is actuality prior to potentiality?",
          options: [
            { id: "a", text: "In definition (potentiality references its actuality), in time (within a species, the actual precedes the potential), and in substance (actuality is ontologically primary)" },
            { id: "b", text: "In size, weight, and speed" },
            { id: "c", text: "In importance, beauty, and goodness" },
            { id: "d", text: "In logic, grammar, and rhetoric" },
          ],
          correctOptionId: "a",
          explanation:
            "Actuality is definitionally prior (you can't define 'buildable' without 'built'), temporally prior (within a species, actual adults generate potential ones), and ontologically prior (pure potentiality with no actuality would be nothing).",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L05  Critique of Plato and the Problem of Forms
    ───────────────────────────────────────────────── */
    {
      id: "mt-l05",
      title: "Critique of Plato and the Problem of Forms",
      type: "video",
      duration: 12,
      objectives: [
        "Reconstruct Aristotle's main arguments against Plato's Theory of Forms",
        "Explain the 'Third Man' argument and its implications",
        "Assess how Aristotle's immanent forms differ from Plato's transcendent Forms",
      ],
      chunks: [
        {
          id: "mt-l05-c1",
          title: "The Third Man Argument",
          content:
            "Aristotle presents several devastating critiques of his teacher Plato's Theory of Forms. The most famous is the Third Man Argument. Plato holds that all particular men (Socrates, Callias, etc.) are men because they participate in the Form of Man — an eternal, perfect, abstract entity existing in a separate metaphysical realm. But, Aristotle asks, what makes both Socrates and the Form of Man both 'man'? By Plato's own reasoning, there must be a further Form — a 'Third Man' — in which both Socrates and the original Form participate. And what makes the Third Man and the original Form both 'man'? A Fourth Man is needed, and so on to infinity. The regress is vicious: if every explanation of why things share a property requires positing yet another entity to explain the sharing, the theory never actually explains anything. Each new Form creates the same problem it was introduced to solve. This argument strikes at the heart of Plato's metaphysics: if the Forms cannot explain participation without generating infinite regresses, they fail as explanatory entities.",
        },
        {
          id: "mt-l05-c2",
          title: "The Separation Problem",
          content:
            "Aristotle's second major objection concerns the separation (chōrismos) of Forms from particular things. Plato holds that Forms exist apart from the world of appearances — in a separate realm accessible only to pure thought. But if the Form of Man is entirely separate from particular men, how does it explain their nature? What causal mechanism connects an abstract, non-spatial, atemporal entity to concrete, spatial, temporal individuals? Plato's language of 'participation' (methexis) and 'imitation' (mimēsis) is, Aristotle charges, mere metaphor — poetic language that disguises the absence of a genuine explanation. In contrast, Aristotle's own solution places form within the concrete individual as its immanent organising principle. The form of a horse is not a separate abstract entity but the structural principle actually present in each particular horse, making it a horse. Form is in the world, not above it. This move eliminates the causal gap between form and matter that plagues Platonism while preserving the insight that form — intelligible structure — is real and explanatorily essential.",
        },
        {
          id: "mt-l05-c3",
          title: "Forms Do Not Explain Change",
          content:
            "Aristotle's third critique is that Platonic Forms cannot explain the phenomena they were designed to explain — in particular, change and becoming. If the Form of Man is eternal and unchanging, it cannot explain how a particular human being comes into existence, grows, changes, and perishes. It provides a static paradigm — an eternal 'what' — but no account of how or why anything happens. Aristotle's immanent forms, by contrast, are principles of activity: the soul (the form of a living organism) is what organises matter, drives development, and determines how the organism responds to its environment. The form is not a pattern observed from outside but a dynamic principle operating from within. This is why Aristotle's four-cause framework is so important: by asking not only 'what' (formal cause) but also 'how' (efficient cause), 'from what' (material cause), and 'for what end' (final cause), it provides a complete account of natural processes that static Platonic Forms cannot match.",
        },
      ],
      flashcards: [
        {
          id: "mt-l05-f1",
          front: "Third Man Argument",
          back:
            "If Socrates and the Form of Man are both 'man,' a further Form must explain their shared characteristic — generating an infinite regress. Each new Form creates the same problem it was meant to solve.",
        },
        {
          id: "mt-l05-f2",
          front: "The separation problem",
          back:
            "Plato's Forms exist in a separate realm, but 'participation' and 'imitation' are mere metaphors that disguise the absence of a causal mechanism connecting abstract Forms to concrete things.",
        },
        {
          id: "mt-l05-f3",
          front: "Immanent vs transcendent forms",
          back:
            "Aristotle places form within concrete individuals as their organising principle (immanent), while Plato locates Forms in a separate abstract realm (transcendent). Aristotle's move eliminates the causal gap of Platonism.",
        },
        {
          id: "mt-l05-f4",
          front: "Forms and change",
          back:
            "Eternal, unchanging Platonic Forms cannot explain change and becoming. Aristotle's immanent forms are dynamic principles that organise matter, drive development, and determine behaviour — explaining process, not just pattern.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L06  The Unmoved Mover and Aristotle's Legacy
    ───────────────────────────────────────────────── */
    {
      id: "mt-l06",
      title: "The Unmoved Mover and Aristotle's Legacy",
      type: "video",
      duration: 12,
      objectives: [
        "Explain the argument for the Unmoved Mover from the priority of actuality",
        "Describe the Unmoved Mover as thought thinking itself",
        "Trace Aristotle's influence through medieval theology to modern philosophy of science",
      ],
      chunks: [
        {
          id: "mt-l06-c1",
          title: "The Argument for the Unmoved Mover",
          content:
            "In Book XII (Lambda) of the Metaphysics, Aristotle presents his most celebrated theological argument. Motion (kinēsis) is eternal — there was never a first moment when things began to move, because any supposed first motion would itself require a prior cause. But an eternal chain of moved movers is explanatorily incomplete: it accounts for the transmission of motion but not for its ultimate origin. There must therefore be a first cause of motion that is itself unmoved — an Unmoved Mover. This being must be pure actuality (energeia) with no residual potentiality, because any potentiality would mean it could change, and if it could change, it would not be the unchanging source of all change. The Unmoved Mover does not push or pull the cosmos like an efficient cause; rather, it moves the cosmos as an object of desire and aspiration — as the final cause of all motion. The heavenly spheres move in eternal circles because they aspire to the perfection of the Unmoved Mover, and all natural processes are ultimately oriented toward actualisation, which is a participation in the divine perfection of pure actuality.",
        },
        {
          id: "mt-l06-c2",
          title: "Thought Thinking Itself",
          content:
            "What does the Unmoved Mover do? Aristotle's answer is that it thinks — and its object of thought can only be itself, because any other object would introduce an external dependency and therefore a potentiality. The Unmoved Mover is 'thought thinking itself' (noēsis noēseōs) — the highest and most perfect activity, eternally self-contemplative. This may seem strange to modern readers, but for Aristotle, intellectual activity (theōria) is the most excellent human activity, and the divine being eternally engages in the most excellent activity at the highest level. The Unmoved Mover is not a personal God who creates or governs the world by deliberate acts; it is a metaphysical principle — the ultimate actuality that explains why there is motion, change, and purposive development in the universe. The cosmos is not designed by the Unmoved Mover but is drawn toward it by a kind of metaphysical gravity: all things naturally move toward the fullest realisation of their potentialities, and the Unmoved Mover is the paradigm of complete realisation.",
        },
        {
          id: "mt-l06-c3",
          title: "The Legacy of Aristotelian Metaphysics",
          content:
            "Aristotle's Metaphysics has shaped Western intellectual history more profoundly than perhaps any other philosophical text. In the medieval period, both Islamic philosophy (Avicenna, Averroes) and Christian theology (Thomas Aquinas) adopted and adapted Aristotelian metaphysics to ground their natural theology. Aquinas's Five Ways — five arguments for God's existence — are heavily influenced by Aristotle's Unmoved Mover, four causes, and potentiality-actuality framework. The modern scientific revolution of the seventeenth century defined itself partly in opposition to Aristotelian physics, replacing teleological explanation with mechanical causation. Yet Aristotle's influence persists: contemporary biology still grapples with functional explanation (what organs are 'for'), philosophy of mind still debates the form-matter relationship (functionalism versus physicalism), and metaphysicians still investigate substance, essence, and the structure of reality using categories that descend from Aristotle. His insistence that explanation requires multiple types of cause — not only efficient but also formal and final — has been revived by philosophers who argue that reductive mechanism leaves important features of reality unexplained.",
        },
      ],
      flashcards: [
        {
          id: "mt-l06-f1",
          front: "The Unmoved Mover",
          back:
            "A being of pure actuality with no potentiality that is the ultimate cause of all motion. It moves the cosmos not by pushing but as an object of aspiration — the final cause toward which all things are oriented.",
        },
        {
          id: "mt-l06-f2",
          front: "Thought thinking itself (noēsis noēseōs)",
          back:
            "The Unmoved Mover's eternal activity: self-contemplation. Its object of thought can only be itself, because any external object would introduce dependency and potentiality, undermining its pure actuality.",
        },
        {
          id: "mt-l06-f3",
          front: "Aquinas and Aristotle",
          back:
            "Thomas Aquinas adopted Aristotelian metaphysics for Christian natural theology. His Five Ways are heavily influenced by Aristotle's Unmoved Mover, four causes, and potentiality-actuality framework.",
        },
        {
          id: "mt-l06-f4",
          front: "Aristotle's lasting relevance",
          back:
            "Despite the scientific revolution's rejection of Aristotelian physics, his categories of substance, essence, teleological explanation, and multiple causation continue to shape biology, philosophy of mind, and contemporary metaphysics.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L07  Final Assessment: Aristotle's Metaphysics
    ───────────────────────────────────────────────── */
    {
      id: "mt-l07",
      title: "Final Assessment: Aristotle's Metaphysics",
      type: "quiz",
      duration: 9,
      objectives: ["Evaluate comprehensive mastery of Aristotelian metaphysics"],
      questions: [
        {
          id: "mt-l07-q1",
          text: "Aristotle's study of 'being qua being' differs from the special sciences because:",
          options: [
            { id: "a", text: "It investigates things insofar as they exist as such, not as physical, mathematical, or biological entities" },
            { id: "b", text: "It uses only mathematical methods" },
            { id: "c", text: "It studies only divine beings" },
            { id: "d", text: "It rejects all empirical observation" },
          ],
          correctOptionId: "a",
          explanation:
            "Each special science studies a particular domain (physics studies motion, biology studies life). First philosophy studies the most general features of existence itself — what any being must be simply in virtue of existing.",
        },
        {
          id: "mt-l07-q2",
          text: "The Third Man Argument shows that Plato's Theory of Forms:",
          options: [
            { id: "a", text: "Successfully explains how particulars share properties" },
            { id: "b", text: "Generates an infinite regress — each Form requires another Form to explain the shared property, and the theory never actually explains participation" },
            { id: "c", text: "Is confirmed by modern physics" },
            { id: "d", text: "Is compatible with Aristotle's hylomorphism" },
          ],
          correctOptionId: "b",
          explanation:
            "If both Socrates and the Form of Man are 'man,' a further Form is needed to explain their shared character — then another for that Form, and so on infinitely. The regress means the theory never provides a final explanation.",
        },
        {
          id: "mt-l07-q3",
          text: "How does the Unmoved Mover cause motion?",
          options: [
            { id: "a", text: "By pushing the outermost celestial sphere like a physical force" },
            { id: "b", text: "By creating the universe from nothing at a specific moment" },
            { id: "c", text: "As a final cause — an object of aspiration and desire toward which all things are naturally drawn" },
            { id: "d", text: "By issuing verbal commands to the heavenly bodies" },
          ],
          correctOptionId: "c",
          explanation:
            "The Unmoved Mover is not an efficient cause that pushes or pulls. It moves the cosmos as a final cause — the paradigm of pure actuality toward which all things aspire, driving their natural development and motion.",
        },
        {
          id: "mt-l07-q4",
          text: "Why does Aristotle conclude that substance is form (essence) rather than matter?",
          options: [
            { id: "a", text: "Because matter does not exist" },
            { id: "b", text: "Because bare matter has no determinate nature and cannot explain what makes a thing what it is — only the essence (form) provides this identity" },
            { id: "c", text: "Because Plato proved that Forms are substances" },
            { id: "d", text: "Because matter is eternal and unchanging" },
          ],
          correctOptionId: "b",
          explanation:
            "Bare matter stripped of all attributes has no identity of its own. Substance must be what gives a thing its determinate nature — its 'what it is' — and this is the essence or form, not the underlying material.",
        },
        {
          id: "mt-l07-q5",
          text: "What is the philosophical significance of 'thought thinking itself'?",
          options: [
            { id: "a", text: "It describes how humans learn mathematics" },
            { id: "b", text: "It characterises the Unmoved Mover's eternal activity — pure self-contemplation, the most perfect activity, with no external dependencies that would introduce potentiality" },
            { id: "c", text: "It refers to Aristotle's method of writing philosophy" },
            { id: "d", text: "It describes the process of democratic deliberation" },
          ],
          correctOptionId: "b",
          explanation:
            "The Unmoved Mover's activity must be self-directed because any external object would introduce dependency and potentiality. Self-contemplation (noēsis noēseōs) is the most perfect activity — eternal intellectual engagement with the most perfect object (itself).",
        },
        {
          id: "mt-l07-q6",
          text: "Which modern field still engages most directly with Aristotle's concept of final causation?",
          options: [
            { id: "a", text: "Quantum mechanics" },
            { id: "b", text: "Biology, which still grapples with functional explanation — what organs and behaviours are 'for'" },
            { id: "c", text: "Computer science" },
            { id: "d", text: "Accounting and financial regulation" },
          ],
          correctOptionId: "b",
          explanation:
            "Biology continues to use teleological language: the heart is 'for' pumping blood, the eye is 'for' seeing. Whether this language is merely heuristic or reflects genuine purpose in nature remains a live philosophical debate descended directly from Aristotle.",
        },
      ],
    },
  ],
};
