import type { LearningModule } from "@/lib/modules/types";

// High-quality curriculum module derived from EPUB.
// Source: G:\My Drive\15_E-BOOKS\file001674.epub
// Author: Niccolo Machiavelli  |  Subject: Philosophy & Political Science

export const ThePrinceNiccolMachiavelliPeterEBondanellaModule: LearningModule = {
  id: "the-prince-niccol-machiavelli-peter-e-bondanella",
  title: "The Prince",
  description:
    "Machiavelli's The Prince, written in 1513 and published posthumously in 1532, is the foundational text of modern political realism. Addressed to Lorenzo de' Medici, it systematically analyses how rulers acquire, maintain, and lose political power. Rejecting the classical tradition of idealised princely conduct, Machiavelli insists on examining politics as it actually is rather than as it ought to be — laying bare the strategic logic of statecraft, military force, civil governance, fortuna, and virtu.",
  subject: "Philosophy",
  tags: ["epub-derived", "curriculum", "interactive", "political-philosophy", "renaissance", "statecraft"],
  minAge: 18,
  maxAge: 99,
  moduleVersion: "2.0.0",
  version: "2.0.0",
  learningObjectives: [
    "Explain the historical context that prompted Machiavelli to write The Prince",
    "Classify the types of princedoms and their respective challenges",
    "Analyse Machiavelli's advice on acquiring new states through arms, fortune, and crime",
    "Evaluate the distinction between virtu and fortuna and their roles in political success",
    "Describe Machiavelli's controversial views on cruelty, generosity, and keeping faith",
    "Assess the lasting influence of The Prince on political thought and strategy",
  ],
  lessons: [

    /* ─────────────────────────────────────────────────
       L01  Machiavelli and the Birth of Political Realism
    ───────────────────────────────────────────────── */
    {
      id: "prince-l01",
      title: "Machiavelli and the Birth of Political Realism",
      type: "video",
      duration: 12,
      objectives: [
        "Describe Machiavelli's political career and the circumstances under which he wrote The Prince",
        "Explain why Machiavelli rejected the classical 'mirror for princes' tradition",
        "Define virtu and fortuna as Machiavelli uses them",
      ],
      chunks: [
        {
          id: "prince-l01-c1",
          title: "From Diplomat to Exile: Why Machiavelli Wrote The Prince",
          content:
            "Niccolo di Bernardo dei Machiavelli (1469-1527) was a Florentine diplomat, political philosopher, and playwright — a central figure of the Italian Renaissance. For fourteen years he served the Florentine Republic in sensitive diplomatic and military roles, travelling to the courts of France, the Holy Roman Empire, and the papacy, and observing firsthand the ruthless statecraft of Cesare Borgia. When the Medici family returned to power in 1512, Machiavelli was dismissed from office, arrested, tortured on suspicion of conspiracy, and exiled to his country estate. It was there, in forced retirement, that he composed The Prince — a concentrated distillation of everything he had learned about how political power is actually acquired and maintained. The book was not an abstract exercise; it was a practical manual, dedicated to the Magnificent Lorenzo de' Medici, that Machiavelli hoped would earn him a return to public life.",
        },
        {
          id: "prince-l01-c2",
          title: "The Effectual Truth: Rejecting Idealism",
          content:
            "Classical political writers had produced a genre known as the 'mirror for princes' — works of advice that instructed rulers to be virtuous, merciful, generous, and faithful. Machiavelli dismisses this tradition with characteristic bluntness. Many writers have imagined republics and princedoms that have never been seen or known to exist in reality, he argues. The gap between how people live and how they ought to live is so wide that a prince who neglects what is actually done for what should be done will bring about his ruin rather than his preservation. Machiavelli proposes instead to focus on the 'effectual truth' — la verita effettuale — the reality of political life as it is actually practised. This methodological shift from normative idealism to empirical observation is what makes The Prince the founding document of modern political realism and distinguishes Machiavelli from every previous writer on statecraft.",
        },
        {
          id: "prince-l01-c3",
          title: "Virtu and Fortuna: The Two Forces of Political Life",
          content:
            "Two concepts dominate The Prince: virtu and fortuna. Fortuna is the force of chance, circumstance, and unpredictable events — the external conditions that a prince cannot fully control. Machiavelli compares fortuna to a river in flood: when it breaks its banks, it sweeps everything before it. But in calm times, prudent men can build dykes and channels to moderate its fury. Virtu, by contrast, is the quality of the prince himself — not virtue in the Christian moral sense, but a composite of energy, intelligence, willpower, strategic vision, and the willingness to act decisively. A prince of great virtu can seize opportunities that fortuna presents and mitigate disasters that it inflicts. Machiavelli estimates that fortune is the arbiter of half our actions, but leaves the other half — or close to it — for us to govern. The prince who relies on fortune alone is ruined when fortune changes; the prince who adapts his conduct to the times will prevail.",
        },
      ],
      flashcards: [
        {
          id: "prince-l01-f1",
          front: "Why Machiavelli wrote The Prince",
          back: "Exiled from public life after the Medici return to power in 1512, Machiavelli composed The Prince as a practical manual on acquiring and maintaining political power — hoping to regain favour with the new rulers of Florence.",
        },
        {
          id: "prince-l01-f2",
          front: "La verita effettuale (the effectual truth)",
          back: "Machiavelli's methodological commitment to analysing politics as it actually is, not as it ought to be — rejecting the idealist 'mirror for princes' tradition in favour of empirical observation of how power really operates.",
        },
        {
          id: "prince-l01-f3",
          front: "Virtu (Machiavelli)",
          back: "Not moral virtue but a composite of energy, intelligence, willpower, strategic vision, and decisiveness — the personal qualities that enable a prince to seize opportunities and overcome adversity.",
        },
        {
          id: "prince-l01-f4",
          front: "Fortuna (Machiavelli)",
          back: "The force of chance and circumstance beyond the prince's control — compared to a flooding river. Fortune governs about half of human affairs, but prudent preparation (virtu) can moderate its destructive effects.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L02  Types of Princedoms and How They Are Acquired
    ───────────────────────────────────────────────── */
    {
      id: "prince-l02",
      title: "Types of Princedoms and How They Are Acquired",
      type: "video",
      duration: 12,
      objectives: [
        "Classify hereditary, new, and mixed princedoms",
        "Explain why hereditary states are easier to maintain",
        "Analyse the challenges specific to mixed princedoms",
      ],
      chunks: [
        {
          id: "prince-l02-c1",
          title: "The Classification of States",
          content:
            "Machiavelli opens The Prince with a deceptively simple classification: all states and governments by which men are or ever have been ruled have been either republics or princedoms. Having discussed republics at length in his Discourses on Livy, he devotes The Prince exclusively to princedoms. These are further divided into hereditary states — in which sovereignty is derived through an ancient line of ancestors — and new states, which are either wholly new or joined to the existing domains of a prince to form mixed princedoms. This classification is not merely taxonomic; each type presents distinct challenges of governance. A hereditary prince inherits a population accustomed to his family's rule, requiring only ordinary industry to maintain power. A new prince faces the fundamental difficulty that people who accepted his rule in hopes of improvement will quickly become disillusioned, while those loyal to the previous regime will be hostile. The mixed princedom combines both challenges.",
        },
        {
          id: "prince-l02-c2",
          title: "Hereditary Princedoms: The Easiest to Hold",
          content:
            "Hereditary states, Machiavelli argues, are maintained with far less difficulty than new ones, for the simple reason that their subjects are accustomed to the ruling family. Unless the prince displays extraordinary incompetence or cruelty, the force of habit and the absence of a credible alternative will keep the population compliant. Even if a hereditary prince is temporarily deposed, the memory of his lineage and the loyalty it commands make reconquest relatively easy. The lesson is that legitimacy born of custom is a powerful stabilising force. A hereditary prince who avoids innovation, adapts reasonably to events, and refrains from provoking widespread hatred will almost always maintain his position. This is the baseline against which Machiavelli measures the far greater challenges facing new and mixed princes — and it explains why so many of his strategic prescriptions are aggressive: the new prince lacks the cushion of inherited legitimacy.",
        },
        {
          id: "prince-l02-c3",
          title: "Mixed Princedoms: The Difficulty of Annexation",
          content:
            "The most common and most politically complex form is the mixed princedom — a new territory joined to the prince's existing domains. Machiavelli identifies a fundamental paradox: men change masters willingly, thinking to better their condition, but this expectation invariably leads to disappointment because the new prince must inevitably injure his new subjects through military occupation, taxation, and the disruption of existing arrangements. The prince thus makes enemies of all whom he has injured while losing the goodwill of those who helped him to power, since he cannot satisfy their expectations. Machiavelli prescribes specific remedies: the prince should reside in the new territory (physical presence deters rebellion), plant colonies rather than maintain expensive garrisons, become the protector of weaker neighbouring states, and act early against emerging threats. The key principle is that political disorders, like medical ones, are easy to cure in the beginning but hard to diagnose — and easy to diagnose later but impossible to cure.",
        },
      ],
      flashcards: [
        {
          id: "prince-l02-f1",
          front: "Machiavelli's classification of states",
          back: "All states are either republics or princedoms. Princedoms are hereditary (ancient lineage) or new (wholly new or mixed — new territory annexed to existing domains). Each type presents distinct governance challenges.",
        },
        {
          id: "prince-l02-f2",
          front: "Why hereditary princedoms are easiest to hold",
          back: "Subjects are accustomed to the ruling family. Custom provides legitimacy that new rulers lack. Unless the prince is extraordinarily incompetent or cruel, habit and the absence of alternatives sustain his power.",
        },
        {
          id: "prince-l02-f3",
          front: "The paradox of mixed princedoms",
          back: "New subjects welcome change hoping for improvement but are inevitably disappointed; the prince makes enemies of those he injures and loses the goodwill of those who helped him — creating instability from both sides.",
        },
        {
          id: "prince-l02-f4",
          front: "Political disorders are like medical ones (Machiavelli)",
          back: "Easy to cure when beginning (but hard to diagnose) and easy to diagnose later (but impossible to cure). The prince must act early against emerging threats, not wait until crises become visible.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L03  Arms, Crime, and the Civil Princedom
    ───────────────────────────────────────────────── */
    {
      id: "prince-l03",
      title: "New Princes: Merit, Fortune, Crime, and the Civil Princedom",
      type: "video",
      duration: 13,
      objectives: [
        "Compare princes who rise through their own arms and virtu with those who rise through fortune",
        "Analyse Machiavelli's treatment of princes who rise through crime",
        "Describe the civil princedom and its dependence on popular or aristocratic favour",
      ],
      chunks: [
        {
          id: "prince-l03-c1",
          title: "New Princes by Merit: Moses, Cyrus, Romulus, Theseus",
          content:
            "Machiavelli holds up four legendary founders — Moses, Cyrus, Romulus, and Theseus — as the highest examples of princes who acquired states through their own arms and personal virtu. Each rose from nothing to create a lasting political order. What did they have in common? Fortune gave them the opportunity — a people in bondage, a city without government — but virtu enabled them to recognise and seize that opportunity. Without the opportunity, their virtu would have been wasted; without virtu, the opportunity would have passed. Machiavelli's point is that the prince who rises by merit faces enormous difficulty in the acquisition — he must innovate, overcome entrenched opposition, and create new institutions — but once established, his position is relatively secure because his authority rests on demonstrated competence rather than borrowed power.",
        },
        {
          id: "prince-l03-c2",
          title: "New Princes by Fortune: Cesare Borgia",
          content:
            "Those who become princes by mere good fortune do so with little trouble but have much trouble maintaining themselves. Machiavelli's primary example is Cesare Borgia, who acquired the Romagna through the political and military support of his father, Pope Alexander VI. Having received everything from fortune, Borgia then displayed extraordinary virtu in consolidating his position: he destroyed rival factions, won over their followers, built his own army, and eliminated treacherous commanders through a combination of strategic deception and decisive violence. Yet when his father died and a hostile pope was elected, Borgia's entire edifice collapsed — proving that even the most skilful prince cannot survive the withdrawal of the fortune on which his initial power depended, if he has not had sufficient time to establish independent foundations.",
        },
        {
          id: "prince-l03-c3",
          title: "Princes by Crime and the Civil Princedom",
          content:
            "Machiavelli also examines princes who rise through criminal means — Agathocles of Syracuse, who massacred the senate and leading citizens to seize power, is his central example. Agathocles's methods were undeniably effective, but Machiavelli refuses to call his success a product of virtu: 'It cannot be called virtu to kill one's fellow citizens, betray friends, be without faith, without mercy, without religion.' Yet Machiavelli acknowledges that cruelties may be 'well used' if committed all at once to secure the state and then ceased, versus 'badly used' if they continue or escalate over time. The civil princedom presents a gentler path: a leading citizen who becomes prince not by crime or violence but by the favour of his fellow citizens. This type depends on either popular or aristocratic support. Machiavelli advises that popular support is far preferable, because the people ask only not to be oppressed, while the aristocracy seeks to oppress — making the people a more reliable and less demanding foundation for power.",
        },
      ],
      flashcards: [
        {
          id: "prince-l03-f1",
          front: "Princes by merit (Moses, Cyrus, Romulus, Theseus)",
          back: "Rose through their own arms and virtu. Fortune provided the opportunity; virtu enabled them to seize it. Difficult to acquire but relatively secure once established, because authority rests on demonstrated competence.",
        },
        {
          id: "prince-l03-f2",
          front: "Cesare Borgia — prince by fortune",
          back: "Acquired power through his father Pope Alexander VI's support, then displayed extraordinary virtu in consolidation. But when fortune turned (his father's death), his power collapsed — demonstrating the fragility of fortune-dependent rule.",
        },
        {
          id: "prince-l03-f3",
          front: "Well-used vs badly-used cruelties",
          back: "Well-used: committed all at once to secure the state, then ceased. Badly-used: continue or escalate over time. Only the former can consolidate power without perpetual instability.",
        },
        {
          id: "prince-l03-f4",
          front: "Civil princedom — why popular support is preferable",
          back: "The people ask only not to be oppressed; the aristocracy seeks to oppress. Popular support is a more reliable and less demanding foundation for power than aristocratic patronage.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L04  Cruelty, Generosity, and the Fox and the Lion
    ───────────────────────────────────────────────── */
    {
      id: "prince-l04",
      title: "Cruelty, Generosity, and the Fox and the Lion",
      type: "video",
      duration: 12,
      objectives: [
        "Analyse Machiavelli's argument that it is better to be feared than loved",
        "Explain the fox-and-lion metaphor for princely conduct",
        "Evaluate Machiavelli's views on keeping faith and appearing virtuous",
      ],
      chunks: [
        {
          id: "prince-l04-c1",
          title: "Is It Better to Be Feared or Loved?",
          content:
            "Machiavelli addresses the most famous question in political philosophy with characteristic pragmatism. Every prince, he acknowledges, would wish to be both feared and loved; but since the two are difficult to unite in one person, it is much safer to be feared than loved when one of the two must be dispensed with. The reason is psychological: love is maintained by a bond of obligation that, because men are wretched creatures, is broken whenever it serves their purpose. Fear, by contrast, is maintained by a dread of punishment that never relaxes. But Machiavelli adds a critical qualification: the prince must avoid being hated. Fear without hatred is the optimal condition — and the prince achieves it by abstaining from the property of his subjects and from their women. As long as the prince avoids confiscating wealth and violating personal honour, he can maintain the salutary fear that ensures obedience without provoking the desperate hatred that leads to conspiracy and revolt.",
        },
        {
          id: "prince-l04-c2",
          title: "The Fox and the Lion: Deception and Force",
          content:
            "Machiavelli introduces his most enduring metaphor: the prince must know how to act as both beast and man. Among the beasts, he must imitate both the fox and the lion. The lion cannot protect himself from traps, and the fox cannot defend himself from wolves. A prince who relies solely on the lion's force will be ensnared by cunning enemies; a prince who relies solely on the fox's cleverness will be overwhelmed by brute power. The effective prince combines both — using force when necessary and deception when advantageous. This double nature is, for Machiavelli, not a moral failing but a political necessity. The world does not reward princes who keep their word when it works against them. A prudent ruler cannot and should not observe faith when such observance turns against him and when the reasons that caused him to pledge it no longer exist. Since all men are not good, the prince who behaves as though they were will be destroyed among so many who are not good.",
        },
        {
          id: "prince-l04-c3",
          title: "The Appearance of Virtue",
          content:
            "Machiavelli draws a critical distinction between being virtuous and appearing virtuous. It is not necessary for a prince to have all the good qualities — mercy, faithfulness, humaneness, uprightness, and religious piety — but it is very necessary to appear to have them. Indeed, Machiavelli argues, actually possessing and always observing these qualities is harmful, because rigid virtue prevents the prince from adapting to circumstances that demand flexibility. But appearing to possess them is useful, because the masses judge by appearances and by the outcome of events. A prince who maintains his state will always be judged honourable, whatever his methods. Everyone sees what you appear to be; few perceive what you are. And those few dare not oppose the opinion of the many, who have the majesty of the state to back them up. This is perhaps the most disturbing and enduring insight of The Prince: that in politics, perception is reality, and the management of appearances is itself a form of statecraft.",
        },
      ],
      flashcards: [
        {
          id: "prince-l04-f1",
          front: "Better to be feared than loved (Machiavelli)",
          back: "Love is maintained by obligation easily broken by self-interest; fear is maintained by dread of punishment that never relaxes. But the prince must avoid being hated — fear without hatred is the optimal condition.",
        },
        {
          id: "prince-l04-f2",
          front: "The fox and the lion",
          back: "The prince must combine the fox's cunning (to recognise traps) with the lion's strength (to frighten wolves). Neither deception nor force alone suffices — the effective ruler masters both.",
        },
        {
          id: "prince-l04-f3",
          front: "Being vs appearing virtuous",
          back: "Actually possessing all moral virtues is harmful because rigidity prevents adaptation. Appearing virtuous is essential because the masses judge by appearances and outcomes. Perception management is itself a form of statecraft.",
        },
        {
          id: "prince-l04-f4",
          front: "Machiavelli on keeping faith",
          back: "A prudent ruler cannot observe faith when it works against him and when the conditions that prompted the pledge no longer exist. Since not all men are good, the prince who acts as though they were will be destroyed.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L05  Checkpoint Quiz
    ───────────────────────────────────────────────── */
    {
      id: "prince-l05",
      title: "The Prince: Checkpoint Quiz",
      type: "quiz",
      duration: 8,
      objectives: ["Assess understanding of Machiavelli's core concepts and strategic principles"],
      questions: [
        {
          id: "prince-l05-q1",
          text: "What does Machiavelli mean by 'la verita effettuale' (the effectual truth)?",
          options: [
            { id: "a", text: "The moral truths taught by the Christian church" },
            { id: "b", text: "The gap between political ideals and political realities — Machiavelli insists on analysing politics as it actually is, not as it ought to be" },
            { id: "c", text: "The historical accuracy of ancient Roman chronicles" },
            { id: "d", text: "The legal truth established by courts of law" },
          ],
          correctOptionId: "b",
          explanation:
            "Machiavelli's 'effectual truth' is his commitment to empirical political analysis — examining how rulers actually behave and what actually works, rather than prescribing ideal conduct that fails in practice.",
        },
        {
          id: "prince-l05-q2",
          text: "Why does Machiavelli say that princes who rise through fortune, like Cesare Borgia, face greater long-term risk?",
          options: [
            { id: "a", text: "They lack military training" },
            { id: "b", text: "Their initial power depends on external support, so when fortune turns — as it inevitably does — their position collapses if they haven't built independent foundations" },
            { id: "c", text: "Fortune always favours hereditary princes" },
            { id: "d", text: "They are always less intelligent than princes who rise by merit" },
          ],
          correctOptionId: "b",
          explanation:
            "Borgia acquired power through his father's papal authority. When Alexander VI died, Borgia's support evaporated — illustrating that fortune-dependent power is inherently fragile without independently established foundations.",
        },
        {
          id: "prince-l05-q3",
          text: "According to Machiavelli, why is popular support preferable to aristocratic support in a civil princedom?",
          options: [
            { id: "a", text: "The people are wealthier than the aristocracy" },
            { id: "b", text: "The people ask only not to be oppressed, while the aristocracy seeks to oppress — making popular support more reliable and less demanding" },
            { id: "c", text: "The aristocracy always supports hereditary princes instead" },
            { id: "d", text: "Popular support guarantees military victory" },
          ],
          correctOptionId: "b",
          explanation:
            "Machiavelli observes that the people's desire — simply not to be oppressed — is easier to satisfy than the aristocracy's desire to dominate. A prince who satisfies the people faces fewer threats and needs fewer concessions.",
        },
        {
          id: "prince-l05-q4",
          text: "What qualification does Machiavelli add to his claim that it is better to be feared than loved?",
          options: [
            { id: "a", text: "The prince should be equally feared by all social classes" },
            { id: "b", text: "The prince must avoid being hated — fear without hatred is the optimal condition, achieved by not confiscating property or violating personal honour" },
            { id: "c", text: "Fear is only useful against foreign enemies, not domestic subjects" },
            { id: "d", text: "The prince should inspire fear only through public executions" },
          ],
          correctOptionId: "b",
          explanation:
            "Machiavelli distinguishes fear from hatred: fear maintains obedience while hatred provokes conspiracy. The prince avoids hatred by respecting subjects' property and personal dignity while maintaining the credible threat of punishment.",
        },
        {
          id: "prince-l05-q5",
          text: "Why does Machiavelli argue that actually possessing all moral virtues can be harmful to a prince?",
          options: [
            { id: "a", text: "Virtuous princes are always assassinated" },
            { id: "b", text: "Rigid moral virtue prevents the prince from adapting to circumstances that require flexibility — including the use of deception or force when necessary" },
            { id: "c", text: "Morality is irrelevant in politics" },
            { id: "d", text: "Virtuous behaviour is too expensive to maintain" },
          ],
          correctOptionId: "b",
          explanation:
            "Machiavelli's argument is about adaptability: a prince who is always merciful, faithful, and humane cannot respond effectively when circumstances demand ruthlessness. Appearing virtuous is essential; being rigidly virtuous is dangerous.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L06  Final Assessment
    ───────────────────────────────────────────────── */
    {
      id: "prince-l06",
      title: "The Prince: Comprehensive Assessment",
      type: "quiz",
      duration: 9,
      objectives: ["Evaluate mastery of all major concepts from The Prince"],
      questions: [
        {
          id: "prince-l06-q1",
          text: "What does the fox-and-lion metaphor represent in Machiavelli's political philosophy?",
          options: [
            { id: "a", text: "The prince should choose between cunning and force based on his personality" },
            { id: "b", text: "The need to combine strategic deception (the fox) with military strength (the lion) — neither alone suffices against all threats" },
            { id: "c", text: "The prince should be gentle with friends (the fox) and fierce with enemies (the lion)" },
            { id: "d", text: "Foxes represent diplomats and lions represent generals in the prince's council" },
          ],
          correctOptionId: "b",
          explanation:
            "The fox recognises traps; the lion frightens wolves. A prince who relies only on force will be outmanoeuvred, and one who relies only on cunning will be overwhelmed. Effective statecraft requires mastery of both.",
        },
        {
          id: "prince-l06-q2",
          text: "What is Machiavelli's famous analogy about political disorders?",
          options: [
            { id: "a", text: "They are like storms that always pass eventually" },
            { id: "b", text: "They are like medical diseases — easy to cure early (when hard to diagnose) and easy to diagnose later (when impossible to cure)" },
            { id: "c", text: "They are like fires that must be allowed to burn themselves out" },
            { id: "d", text: "They are like earthquakes — unpredictable and unstoppable" },
          ],
          correctOptionId: "b",
          explanation:
            "Machiavelli's medical analogy emphasises the importance of early action: political problems that seem minor initially can become fatal if left untreated, while those that are obvious have already grown beyond remedy.",
        },
        {
          id: "prince-l06-q3",
          text: "How does Machiavelli's concept of virtu differ from Christian moral virtue?",
          options: [
            { id: "a", text: "Virtu is entirely about physical strength" },
            { id: "b", text: "Virtu is energy, intelligence, willpower, and strategic decisiveness — not moral goodness. It includes the ability to act ruthlessly when circumstances demand it" },
            { id: "c", text: "There is no difference; Machiavelli uses the term in its traditional sense" },
            { id: "d", text: "Virtu applies only to republican leaders, not princes" },
          ],
          correctOptionId: "b",
          explanation:
            "Machiavelli's virtu is a political quality: the combination of personal energy, strategic intelligence, and willpower needed to seize opportunities and overcome adversity — explicitly including the capacity for actions that Christian morality would condemn.",
        },
        {
          id: "prince-l06-q4",
          text: "According to Machiavelli, what proportion of human affairs does fortune govern?",
          options: [
            { id: "a", text: "All of them — human agency is an illusion" },
            { id: "b", text: "None — everything depends on the prince's skill" },
            { id: "c", text: "About half — leaving the other half for human virtu to govern" },
            { id: "d", text: "Three-quarters, with only a small margin for princely action" },
          ],
          correctOptionId: "c",
          explanation:
            "Machiavelli estimates that fortune is the arbiter of about half our actions, leaving roughly the other half for us to govern through virtu — a balance that makes political skill meaningful without denying the power of circumstance.",
        },
        {
          id: "prince-l06-q5",
          text: "Why does Machiavelli advise the prince to appear pious, merciful, and humane even when he is not?",
          options: [
            { id: "a", text: "Because God rewards hypocrisy" },
            { id: "b", text: "Because the masses judge by appearances and outcomes — a prince who maintains his state will be judged honourable regardless of his methods" },
            { id: "c", text: "Because appearing virtuous weakens the prince's enemies" },
            { id: "d", text: "Because Machiavelli secretly advocates genuine moral virtue" },
          ],
          correctOptionId: "b",
          explanation:
            "Machiavelli observes that most people see only appearances and results. Few perceive what a prince truly is, and those few dare not oppose the opinion of the many. Managing perception is therefore a core tool of effective statecraft.",
        },
      ],
    },
  ],
};
