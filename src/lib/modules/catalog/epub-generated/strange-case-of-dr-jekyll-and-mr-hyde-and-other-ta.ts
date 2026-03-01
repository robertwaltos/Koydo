import type { LearningModule } from "@/lib/modules/types";

// High-quality curriculum module derived from EPUB.
// Source: G:\My Drive\15_E-BOOKS\file012251.epub
// Author: Robert Louis Stevenson  |  Subject: Literature/Philosophy

export const StrangeCaseOfDrJekyllAndMrHydeAndOtherTaModule: LearningModule = {
  id: "strange-case-of-dr-jekyll-and-mr-hyde-and-other-ta",
  title: "Strange Case of Dr Jekyll and Mr Hyde and Other Tales",
  description:
    "A literary and philosophical study of Robert Louis Stevenson's masterwork exploring the duality of human nature. This module analyses the novella's narrative structure, its Victorian social critique, the science of doubling and dissociation, and the ethical questions raised by Jekyll's experiment — alongside selected companion tales that deepen Stevenson's thematic concerns.",
  subject: "Literature/Philosophy",
  tags: ["epub-derived", "curriculum", "interactive", "literature", "philosophy", "victorian", "gothic", "duality"],
  minAge: 18,
  maxAge: 99,
  version: "2.0.0",
  learningObjectives: [
    "Analyse the narrative structure of Jekyll and Hyde and its use of multiple perspectives",
    "Explain the theme of duality and the doubling motif in Victorian literature",
    "Evaluate Stevenson's critique of Victorian respectability and repression",
    "Assess the scientific and philosophical context of Jekyll's experiment",
    "Compare Hyde as a literary figure with contemporary theories of the unconscious",
    "Examine the role of secrecy, silence, and confession in the novella",
    "Apply close reading skills to key passages and companion tales",
  ],
  lessons: [

    /* ─────────────────────────────────────────────────
       L01  Narrative Structure and the Art of Concealment
    ───────────────────────────────────────────────── */
    {
      id: "jh-l01",
      title: "Narrative Structure and the Art of Concealment",
      type: "video",
      duration: 12,
      objectives: [
        "Describe the novella's multi-perspective narrative structure",
        "Explain how Stevenson uses delayed revelation to build suspense",
        "Identify the significance of the final two chapters as confessional documents",
      ],
      chunks: [
        {
          id: "jh-l01-c1",
          title: "A Story Told in Fragments",
          content:
            "The Strange Case of Dr Jekyll and Mr Hyde is not narrated in a single continuous voice but assembled from multiple perspectives, each offering a partial view of a mystery that is only fully disclosed in the final two chapters. The first eight chapters are dominated by the point of view of Mr Utterson, Jekyll's lawyer and friend, who investigates the disturbing connection between the respectable Dr Jekyll and the repulsive Mr Hyde. Utterson is a model Victorian gentleman — discreet, loyal, rigidly honourable — and his investigative perspective mirrors the reader's position: both are trying to understand a scandalous relationship that the parties involved refuse to explain. The novella's structural genius lies in Stevenson's decision to withhold the central secret (that Jekyll and Hyde are the same person) until the final confessions, forcing the reader to experience the bafflement and mounting dread that Utterson himself feels. This structure transforms what could have been a straightforward horror story into a sophisticated study of knowledge, secrecy, and the limits of rational investigation.",
        },
        {
          id: "jh-l01-c2",
          title: "Dr Lanyon's Narrative and Dr Jekyll's Statement",
          content:
            "The novella's climax is delivered through two written documents read by Utterson after Jekyll's death. Dr Lanyon's narrative — a letter describing the night Lanyon witnessed Hyde's transformation back into Jekyll — is the first revelation. Lanyon is a conventional man of science whose worldview cannot accommodate what he has seen; the shock literally kills him. His narrative represents the failure of Victorian rationalism to contain the irrational. Jekyll's 'Full Statement of the Case,' the final chapter, then provides the complete explanation: his experiments with a mysterious salt that separated the good and evil components of his personality into distinct physical bodies. Crucially, Jekyll writes his confession as a dying man who has lost the ability to control his transformations. The statement is both explanation and testimony — a scientific notebook and a confession booth — and its tone shifts between clinical detachment and desperate self-justification. Stevenson's structural decision to place this confession last ensures that the reader's understanding reconstructs the entire preceding narrative retroactively, transforming every previous scene.",
        },
        {
          id: "jh-l01-c3",
          title: "The Detective Narrative Inverted",
          content:
            "Jekyll and Hyde is often classified alongside detective fiction — it appeared two years after the first Sherlock Holmes story — but Stevenson inverts the detective formula. In a conventional detection narrative, the investigator (the rational mind) uncovers the truth and restores order. Utterson investigates, but his investigation fails: he never deduces the truth; he receives it passively through documents left for him. The mystery is not solved by reason but disclosed by confession. Furthermore, the truth, once known, does not restore order — it destroys it. The revelation that a respectable gentleman of science was simultaneously a murderer and a moral monster is not a problem that can be fixed by arresting a criminal; it exposes a terrifying truth about human nature itself. Stevenson's inversion suggests that some truths are not amenable to the detective's rational method — that the deepest mysteries of human identity resist orderly investigation and demand, instead, the intimacy and vulnerability of self-disclosure.",
        },
      ],
      flashcards: [
        {
          id: "jh-l01-f1",
          front: "Multi-perspective structure",
          back:
            "The novella is assembled from fragments — Utterson's investigation, Lanyon's letter, Jekyll's confession — each offering a partial view. The full truth is withheld until the final two written documents.",
        },
        {
          id: "jh-l01-f2",
          front: "Utterson as investigator",
          back:
            "Jekyll's lawyer mirrors the reader: a respectable Victorian gentleman trying to rationally investigate a scandalous relationship that resists rational explanation. His investigation ultimately fails — he receives truth via confession, not deduction.",
        },
        {
          id: "jh-l01-f3",
          front: "Lanyon's narrative",
          back:
            "Dr Lanyon witnesses Hyde's transformation back into Jekyll and dies from the shock — representing the failure of conventional Victorian rationalism to contain the irrational.",
        },
        {
          id: "jh-l01-f4",
          front: "Inversion of the detective formula",
          back:
            "Unlike conventional detective fiction, the truth in Jekyll and Hyde is not discovered through reason but disclosed through confession — and instead of restoring order, the truth reveals a terrifying fact about human nature.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L02  Duality, Doubling, and the Victorian Self
    ───────────────────────────────────────────────── */
    {
      id: "jh-l02",
      title: "Duality, Doubling, and the Victorian Self",
      type: "video",
      duration: 13,
      objectives: [
        "Explain the concept of the double (Doppelgänger) in Gothic literature",
        "Analyse how Jekyll's experiment embodies Victorian anxieties about respectability",
        "Evaluate the relationship between repression and the emergence of Hyde",
      ],
      chunks: [
        {
          id: "jh-l02-c1",
          title: "The Doppelgänger Tradition",
          content:
            "The figure of the double — the Doppelgänger — is one of the central motifs of Gothic and Romantic literature. From E. T. A. Hoffmann's 'The Sandman' to Dostoevsky's The Double to Poe's 'William Wilson,' the literary double represents the uncanny experience of encountering an Other who is also the Self — a second self that embodies suppressed desires, forbidden impulses, or disowned aspects of identity. Stevenson's Hyde belongs squarely in this tradition but gives it a new scientific and ethical dimension. Unlike earlier doubles, who appear as mysterious external figures, Hyde is deliberately created by Jekyll through pharmacological experimentation. The double is not a supernatural visitation but a technological product — a consequence of the protagonist's own will and agency. This innovation makes Jekyll morally responsible for Hyde in a way that earlier doubled characters are not responsible for their Doppelgängers, transforming the double from a symbol of fate into a symbol of choice and its consequences.",
        },
        {
          id: "jh-l02-c2",
          title: "Victorian Respectability and Its Discontents",
          content:
            "The novella is set in and shaped by the culture of late Victorian London — a society obsessed with respectability, propriety, and the rigid separation of public and private life. Jekyll is a man of impeccable public reputation: a doctor, a philanthropist, a host of elegant dinner parties. But privately he harbours desires that he cannot reconcile with his public identity — desires he describes as 'undignified' rather than criminal, suggesting that the Victorian code of respectability demands not merely moral behaviour but a certain performance of moral seriousness that leaves no room for ordinary human pleasures. Jekyll's experiment is motivated not by a desire for evil but by the impossibility of being both respectable and fully alive within Victorian society. He wants to separate his two natures so that each can express itself without compromising the other. The tragedy is that this separation, far from resolving the conflict, radicalises it: freed from the constraint of respectability, Hyde becomes progressively more violent, while Jekyll becomes progressively more hypocritical, using his public reputation to conceal Hyde's crimes.",
        },
        {
          id: "jh-l02-c3",
          title: "Repression and the Return of the Repressed",
          content:
            "Stevenson's novella anticipates Freud's theory of repression — published over a decade later — with remarkable precision. Jekyll represses his 'lower' impulses in order to maintain his 'higher' identity. But repression does not eliminate the repressed impulses; it merely pushes them underground, where they accumulate energy and eventually return in distorted, violent form. Hyde is the return of Jekyll's repressed self — and crucially, Hyde grows stronger over time. The longer Jekyll denies his other nature, the more powerful and autonomous Hyde becomes, until eventually Hyde erupts spontaneously without the transforming salt. This trajectory embodies a psychological insight that Freud would later formalise: what is denied conscious expression does not disappear but finds indirect, often destructive outlets. The novella suggests that the Victorian project of rigidly separating the self into respectable and disreputable components is not merely difficult but dangerous — that the attempt to achieve moral purity through repression produces a monster worse than the original impulses it was designed to contain.",
        },
      ],
      flashcards: [
        {
          id: "jh-l02-f1",
          front: "The Doppelgänger tradition",
          back:
            "Hyde belongs to the Gothic tradition of the literary double, but Stevenson innovates by making the double a deliberate technological creation — a product of will and choice, not fate or supernatural visitation.",
        },
        {
          id: "jh-l02-f2",
          front: "Victorian respectability and Jekyll's motivation",
          back:
            "Jekyll's experiment stems not from a desire for evil but from the impossibility of being both respectable and fully human within Victorian society. He wants to separate his two natures so each can express itself freely.",
        },
        {
          id: "jh-l02-f3",
          front: "Hyde's progressive empowerment",
          back:
            "Hyde grows stronger over time as Jekyll's repression intensifies — eventually erupting spontaneously. Stevenson anticipates Freud: denied impulses do not disappear but accumulate energy and return in destructive form.",
        },
        {
          id: "jh-l02-f4",
          front: "Repression produces the monster",
          back:
            "The novella argues that rigidly separating the self into respectable and disreputable parts does not achieve moral purity but creates a destructive Other — the attempt at purity generates the very evil it was meant to prevent.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L03  Science, Ethics, and the Limits of Knowledge
    ───────────────────────────────────────────────── */
    {
      id: "jh-l03",
      title: "Science, Ethics, and the Limits of Knowledge",
      type: "video",
      duration: 12,
      objectives: [
        "Assess Jekyll's experiment as a critique of unregulated scientific ambition",
        "Analyse the ethical failure at the heart of Jekyll's project",
        "Connect Stevenson's concerns to contemporary debates about biotechnology and enhancement",
      ],
      chunks: [
        {
          id: "jh-l03-c1",
          title: "Jekyll as Promethean Scientist",
          content:
            "Jekyll belongs to a literary lineage of scientists who transgress the boundaries of legitimate knowledge: Victor Frankenstein, Faust, Rappaccini. Like them, he is driven by a conviction that human nature can be improved through technical intervention — and like them, he discovers that the intervention produces consequences he cannot control. Jekyll's specific innovation is pharmacological: a powder that dissolves the bond between the higher and lower elements of personality, allowing each to assume a separate physical form. The scientific details are deliberately vague — Stevenson is writing a moral fable, not science fiction — but the underlying premise is clear: Jekyll treats human identity as a technical problem that can be solved by chemical manipulation. The fundamental error is not that his chemistry fails (it works exactly as intended) but that his ethical reasoning fails: he assumes that separating good from evil in a personality will leave the good intact and merely quarantine the evil. In reality, the separation destroys the moral tension that makes ethical life possible.",
        },
        {
          id: "jh-l03-c2",
          title: "The Ethical Failure of the Experiment",
          content:
            "Jekyll's confession reveals a subtle but devastating ethical failure. He does not create Hyde in order to do evil; he creates Hyde in order to do evil without consequences — to enjoy forbidden pleasures while maintaining his respectable identity. The experiment is fundamentally dishonest: it seeks to evade moral responsibility rather than to understand or improve human nature. Jekyll wants the benefits of virtue (reputation, social standing, self-regard) without paying the price of virtue (self-restraint, renunciation of pleasure). This is not scientific hubris in the usual sense — an overestimation of one's power — but a moral failure: the refusal to accept the conditions of ethical selfhood. Human beings are integrated wholes; their capacity for good is inseparable from their capacity for evil. Jekyll's attempt to split this unity does not produce a good man and an evil man but a hypocrite and a monster, each parasitic on the other.",
        },
        {
          id: "jh-l03-c3",
          title: "Contemporary Resonances",
          content:
            "Stevenson's fable resonates powerfully with contemporary anxieties about biotechnology, pharmacology, and human enhancement. The desire to modulate personality through chemical intervention — to take a pill that makes you more confident, less anxious, more productive, more sexually responsive — echoes Jekyll's project of technical self-improvement. The ethical questions are strikingly similar: if we can chemically separate our 'productive' from our 'unproductive' selves, should we? What is lost when we treat personality as a set of parameters to be optimised? Stevenson suggests that integrated selfhood — the coexistence of conflicting impulses within a single responsible agent — is not a problem to be solved but a condition of moral maturity. The desire for moral purity through technical intervention is itself a form of moral immaturity: a refusal to accept the ambiguity, conflict, and compromise that constitute genuine ethical life. Jekyll and Hyde remains relevant because the temptation it dramatises — the desire to be good without the discipline of being whole — is a permanent feature of the human condition.",
        },
      ],
      flashcards: [
        {
          id: "jh-l03-f1",
          front: "Jekyll as Promethean scientist",
          back:
            "Jekyll treats human identity as a technical problem solvable by chemistry. His error is not scientific (the powder works) but ethical: he assumes separating good and evil will quarantine evil, but instead destroys the moral tension that makes ethical life possible.",
        },
        {
          id: "jh-l03-f2",
          front: "The fundamental dishonesty",
          back:
            "Jekyll creates Hyde not to do evil but to do evil without consequences — to enjoy forbidden pleasures while maintaining respectability. The experiment evades moral responsibility rather than improving human nature.",
        },
        {
          id: "jh-l03-f3",
          front: "Integrated selfhood",
          back:
            "Stevenson argues that the coexistence of conflicting impulses within a single agent is not a problem to be solved but a condition of moral maturity. Splitting the self produces a hypocrite and a monster, not virtue.",
        },
        {
          id: "jh-l03-f4",
          front: "Contemporary biotechnology parallels",
          back:
            "Jekyll's pharmacological self-modification anticipates modern debates about mood drugs, enhancement technologies, and personality optimisation — raising the same question of what is lost when identity is treated as a set of parameters.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L04  Checkpoint Quiz: Jekyll and Hyde
    ───────────────────────────────────────────────── */
    {
      id: "jh-l04",
      title: "Checkpoint Quiz: Jekyll and Hyde",
      type: "quiz",
      duration: 8,
      objectives: ["Assess understanding of narrative structure, duality, and ethical themes"],
      questions: [
        {
          id: "jh-l04-q1",
          text: "How does Stevenson's narrative structure differ from a conventional detective story?",
          options: [
            { id: "a", text: "The investigator solves the mystery through rational deduction and arrests the criminal" },
            { id: "b", text: "Utterson's investigation fails — the truth is disclosed through confessional documents, and knowledge does not restore order but reveals a terrifying truth" },
            { id: "c", text: "The story is told entirely through Jekyll's first-person narration" },
            { id: "d", text: "The mystery has no solution and the case remains permanently open" },
          ],
          correctOptionId: "b",
          explanation:
            "Unlike detective fiction, the truth in Jekyll and Hyde arrives through confession (Lanyon's letter, Jekyll's statement), not deduction. And the truth, once known, destroys order rather than restoring it.",
        },
        {
          id: "jh-l04-q2",
          text: "What motivates Jekyll to create Hyde?",
          options: [
            { id: "a", text: "A desire to commit murder and other violent crimes" },
            { id: "b", text: "Scientific curiosity with no personal motivation" },
            { id: "c", text: "The desire to enjoy forbidden pleasures without compromising his respectable reputation — to evade moral responsibility" },
            { id: "d", text: "A medical emergency requiring a radical treatment" },
          ],
          correctOptionId: "c",
          explanation:
            "Jekyll does not seek evil itself but freedom from the consequences of indulgence. He wants both the benefits of virtue (reputation) and the pleasures of vice — an evasion of the conditions of ethical selfhood.",
        },
        {
          id: "jh-l04-q3",
          text: "How does the novella anticipate Freud's theory of repression?",
          options: [
            { id: "a", text: "It argues that all human behaviour is sexually motivated" },
            { id: "b", text: "Jekyll represses his lower impulses, which do not disappear but accumulate energy and return as the progressively more violent Hyde" },
            { id: "c", text: "It describes Hyde as Jekyll's childhood trauma made flesh" },
            { id: "d", text: "It proposes that dreams reveal the repressed self" },
          ],
          correctOptionId: "b",
          explanation:
            "Denied conscious expression, Jekyll's repressed impulses grow stronger and more autonomous in Hyde's form — exactly paralleling Freud's later insight that repressed material returns in distorted, often destructive ways.",
        },
        {
          id: "jh-l04-q4",
          text: "Why does Dr Lanyon die after witnessing the transformation?",
          options: [
            { id: "a", text: "Hyde poisons him during the encounter" },
            { id: "b", text: "He symbolises the failure of conventional Victorian rationalism to accommodate the irrational — the shock of seeing his worldview shattered kills him" },
            { id: "c", text: "He catches a disease from Hyde" },
            { id: "d", text: "He is already terminally ill before the encounter" },
          ],
          correctOptionId: "b",
          explanation:
            "Lanyon dies of psychological shock. As a conventional man of science, his worldview cannot accommodate what he has witnessed. His death represents the collapse of Victorian rational certainty in the face of the irrational.",
        },
        {
          id: "jh-l04-q5",
          text: "Stevenson's innovation in the Doppelgänger tradition is that Hyde is:",
          options: [
            { id: "a", text: "A supernatural spirit sent by God as punishment" },
            { id: "b", text: "A twin brother separated at birth" },
            { id: "c", text: "A deliberate technological creation — a product of Jekyll's will and chemical experimentation — making Jekyll morally responsible" },
            { id: "d", text: "An entirely separate person with no connection to Jekyll" },
          ],
          correctOptionId: "c",
          explanation:
            "Unlike earlier literary doubles (fate-driven or supernatural), Hyde is deliberately created through Jekyll's pharmacological experiment. This makes the double a consequence of choice, not fate — and Jekyll becomes morally accountable.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L05  The Companion Tales: Markheim and Olalla
    ───────────────────────────────────────────────── */
    {
      id: "jh-l05",
      title: "The Companion Tales: Markheim and Olalla",
      type: "video",
      duration: 12,
      objectives: [
        "Analyse the moral argument at the centre of 'Markheim'",
        "Explain how 'Olalla' explores hereditary determinism and duality",
        "Compare the companion tales' treatment of duality with Jekyll and Hyde's",
      ],
      chunks: [
        {
          id: "jh-l05-c1",
          title: "Markheim: The Mirror and the Visitor",
          content:
            "In 'Markheim,' a man enters a dealer's shop on Christmas Day, ostensibly to buy a present but actually to murder the dealer and steal his money. After committing the murder, Markheim is confronted by a mysterious Visitor — a figure who may be his conscience, the Devil, or his own double. The Visitor engages Markheim in a philosophical dialogue about moral identity: is Markheim truly evil, or is he a good man who has committed an evil act? The story builds not on external action but on internal moral argument. Markheim eventually confesses his crime to the dealer's maid, choosing self-destruction over escape. Stevenson uses the encounter with the Visitor to explore the same question that animates Jekyll and Hyde: can a person be divided into good and evil components, or is moral identity an integrated whole? Markheim's final choice — to refuse escape and accept responsibility — suggests that moral unity is reasserted through confession and acceptance, contrasting with Jekyll's fatal attempt to achieve separation through chemistry.",
        },
        {
          id: "jh-l05-c2",
          title: "Olalla: Heredity, Degeneration, and Love",
          content:
            "The novella 'Olalla' takes a different approach to the theme of duality by grounding it in hereditary determinism — the late Victorian anxiety about biological degeneration. A wounded English officer convalesces at a decaying Spanish mansion inhabited by a once-noble family that has degenerated through generations of isolation and inbreeding. The mother is animalistic and half-mad; the son is beautiful but vacuous. Only Olalla, the daughter, has preserved her intelligence and moral sense, though she believes she carries the same biological taint. When the officer falls in love with her, Olalla refuses him, arguing that her heredity makes marriage and reproduction morally irresponsible. The story explores whether character is determined by blood or by will — whether Olalla is condemned by her genes or liberated by her choices. Stevenson's sympathy clearly lies with Olalla's moral independence, but he does not resolve the tension: the story ends ambiguously, with Olalla choosing renunciation rather than risking the transmission of her family's taint to another generation.",
        },
        {
          id: "jh-l05-c3",
          title: "Connecting the Tales: Duality as Permanent Theme",
          content:
            "Read together, the three works — Jekyll and Hyde, 'Markheim,' and 'Olalla' — reveal duality as Stevenson's central and most persistent theme. Each approaches the divided self from a different angle: Jekyll and Hyde through chemistry and pharmacology; 'Markheim' through moral philosophy and the examined conscience; 'Olalla' through heredity and biological determinism. In each case, the protagonist faces the question of whether human nature is fundamentally divided and whether the two halves can be reconciled or must be managed through sacrifice. Jekyll's answer (technical separation) leads to catastrophe. Markheim's answer (confession and acceptance) leads to self-destruction but also to moral redemption. Olalla's answer (renunciation) leads to loneliness but perhaps to a kind of dignity. None of the stories offers a comfortable resolution, because Stevenson sees duality not as a problem with a solution but as the permanent condition of moral consciousness — the irreducible tension between what we desire and what we believe we ought to do, between the inherited body and the choosing mind.",
        },
      ],
      flashcards: [
        {
          id: "jh-l05-f1",
          front: "Markheim's Visitor",
          back:
            "A mysterious figure (conscience, Devil, or double) who engages Markheim in philosophical dialogue about moral identity after his murder of the dealer. Markheim ultimately confesses, choosing responsibility over escape.",
        },
        {
          id: "jh-l05-f2",
          front: "Olalla's theme of hereditary determinism",
          back:
            "Olalla explores whether character is determined by biological heredity or individual will. Olalla refuses love and reproduction to prevent transmitting her family's degeneration — choosing renunciation as moral responsibility.",
        },
        {
          id: "jh-l05-f3",
          front: "Three approaches to duality",
          back:
            "Jekyll and Hyde: chemical separation (catastrophe). Markheim: confession and acceptance (redemption through destruction). Olalla: renunciation (lonely dignity). None offers comfort — duality is a permanent condition.",
        },
        {
          id: "jh-l05-f4",
          front: "Stevenson's view of duality",
          back:
            "Duality is not a problem with a solution but the permanent condition of moral consciousness — the irreducible tension between desire and duty, inherited nature and choosing will.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L06  Language, Imagery, and Close Reading
    ───────────────────────────────────────────────── */
    {
      id: "jh-l06",
      title: "Language, Imagery, and Close Reading",
      type: "video",
      duration: 12,
      objectives: [
        "Analyse Stevenson's use of fog, doors, and enclosed spaces as controlling imagery",
        "Perform close reading of key passages from the novella",
        "Connect stylistic choices to the novella's thematic concerns",
      ],
      chunks: [
        {
          id: "jh-l06-c1",
          title: "Fog, Darkness, and the Urban Uncanny",
          content:
            "Stevenson's London is a city of fog, gas-lamps, and labyrinthine streets — a topography of concealment that mirrors the novella's thematic concern with hidden identity. The fog is not merely atmospheric but symbolic: it obscures boundaries, blurs distinctions between spaces, and transforms familiar streets into alien landscapes. In one famous passage, Utterson makes his way through streets where 'the fog still slept on the wing of the morning' and the city appears in glimpses like a 'district of some city in a nightmare.' The fog represents the epistemological condition of the characters and the reader: crucial information is always partially obscured, identities are uncertain, and the most important truths are hidden behind locked doors and sealed letters. London itself becomes a character — a city whose respectability is a surface that conceals squalor, violence, and secrets, just as Jekyll's professional eminence conceals Hyde's crimes.",
        },
        {
          id: "jh-l06-c2",
          title: "Doors, Thresholds, and the Architecture of Secrecy",
          content:
            "The novella is structured around doors — physical barriers that separate private from public space and that mark the boundary between respectable and disreputable life. The most important door is the one connecting Jekyll's house to the laboratory by way of the old dissecting-room theatre. Jekyll's house has a handsome front door on a respectable square; the laboratory has a 'sinister block of building' with a blistered, neglected door that opens onto a dingy by-street. These two doors — front and back — correspond to Jekyll's two identities: the respectable front presented to society and the hidden back through which Hyde enters and exits. The dual entrance is both a practical necessity of the plot (it allows Hyde to come and go without detection) and a symbolic enactment of the novella's central theme: that every respectable Victorian gentleman has a back door — a private outlet for the impulses that his public persona suppresses. The architecture of the house is the architecture of the divided self.",
        },
        {
          id: "jh-l06-c3",
          title: "Close Reading: Jekyll's Full Statement",
          content:
            "Jekyll's final confession rewards careful stylistic attention. His language oscillates between clinical detachment and emotional extremity: 'I was slowly losing hold of my original and better self, and becoming slowly incorporated with my second and worse.' The passive construction ('I was losing hold,' 'I was becoming incorporated') reveals Jekyll's deepening helplessness — he is no longer the agent of his experiment but its victim. The word 'incorporated' — literally 'taken into the body' — captures the horror of physical possession: Hyde is not merely a costume Jekyll wears but a body that is absorbing his own. Equally telling is Jekyll's persistent refusal to take full responsibility: he consistently refers to Hyde's actions in the third person ('he did this,' 'Hyde was callous'), maintaining the fiction of separation even in confession. This rhetorical strategy reveals that Jekyll's fundamental dishonesty — the desire to enjoy evil without owning it — persists to the very end. The confession that should unite his two selves continues to divide them in language.",
        },
      ],
      flashcards: [
        {
          id: "jh-l06-f1",
          front: "Fog as symbolic imagery",
          back:
            "London fog obscures boundaries, blurs distinctions, and represents the epistemological condition of characters and reader alike — crucial truths are always partially hidden, reflecting the novella's theme of concealed identity.",
        },
        {
          id: "jh-l06-f2",
          front: "Front door / back door symbolism",
          back:
            "Jekyll's house has a respectable front entrance and a sinister back door to the laboratory — corresponding to his two identities. The architecture of the house enacts the architecture of the divided self.",
        },
        {
          id: "jh-l06-f3",
          front: "Passive constructions in Jekyll's confession",
          back:
            "Jekyll's language shifts from active to passive ('I was losing hold,' 'becoming incorporated'), revealing his transition from agent of the experiment to its victim — the loss of control that defines his tragedy.",
        },
        {
          id: "jh-l06-f4",
          front: "Third-person references to Hyde",
          back:
            "Even in his final confession, Jekyll refers to Hyde's crimes in the third person — maintaining the fiction of separation and revealing that his fundamental dishonesty (enjoying evil without owning it) persists to the end.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L07  Final Assessment: Jekyll, Hyde, and the Self
    ───────────────────────────────────────────────── */
    {
      id: "jh-l07",
      title: "Final Assessment: Jekyll, Hyde, and the Self",
      type: "quiz",
      duration: 9,
      objectives: ["Evaluate comprehensive mastery of the novella's literary and philosophical dimensions"],
      questions: [
        {
          id: "jh-l07-q1",
          text: "The dual entrance to Jekyll's house symbolises:",
          options: [
            { id: "a", text: "His wealth and ability to afford two doors" },
            { id: "b", text: "The separation between his public respectable identity (front door) and his secret disreputable life (back door)" },
            { id: "c", text: "A fire safety requirement of Victorian architecture" },
            { id: "d", text: "His plan to escape the police through a second exit" },
          ],
          correctOptionId: "b",
          explanation:
            "The handsome front door on the respectable square and the sinister back door to the laboratory correspond to Jekyll's two identities — the architecture of the house enacts the architecture of the divided self.",
        },
        {
          id: "jh-l07-q2",
          text: "Stevenson's treatment of the Doppelgänger tradition is innovative because:",
          options: [
            { id: "a", text: "Hyde is the first evil character in English literature" },
            { id: "b", text: "Hyde is a deliberate, pharmacological creation — making Jekyll morally responsible for his double in a way that earlier doubled characters are not" },
            { id: "c", text: "Hyde and Jekyll are identical in appearance" },
            { id: "d", text: "The double is presented as purely imaginary" },
          ],
          correctOptionId: "b",
          explanation:
            "Unlike supernatural or fateful doubles in earlier literature, Hyde is deliberately created through Jekyll's experiment. This makes the double a consequence of choice and transforms Jekyll from victim of fate to morally accountable agent.",
        },
        {
          id: "jh-l07-q3",
          text: "In 'Olalla,' the titular character refuses love and reproduction because:",
          options: [
            { id: "a", text: "She has taken religious vows of celibacy" },
            { id: "b", text: "She believes her hereditary taint makes marriage morally irresponsible — she fears transmitting her family's biological degeneration" },
            { id: "c", text: "She is already married to another person" },
            { id: "d", text: "The English officer is too poor to support a family" },
          ],
          correctOptionId: "b",
          explanation:
            "Olalla's refusal embodies the tension between hereditary determinism and moral choice. She believes her genes condemn her offspring and chooses renunciation as an act of moral responsibility despite her love for the officer.",
        },
        {
          id: "jh-l07-q4",
          text: "Jekyll's ethical failure is fundamentally:",
          options: [
            { id: "a", text: "That he is a bad scientist whose chemistry is flawed" },
            { id: "b", text: "That he seeks to enjoy forbidden pleasures without moral consequences — to evade the conditions of integrated ethical selfhood" },
            { id: "c", text: "That he does not publish his findings for peer review" },
            { id: "d", text: "That he deliberately sets out to become a serial murderer" },
          ],
          correctOptionId: "b",
          explanation:
            "Jekyll's experiment works chemically but fails ethically. He wants the benefits of virtue (reputation) and the pleasures of vice (through Hyde) simultaneously, refusing to accept that human moral identity requires integrated wholeness.",
        },
        {
          id: "jh-l07-q5",
          text: "Stevenson's view of duality, across all three works, is that:",
          options: [
            { id: "a", text: "Duality can be resolved through scientific progress" },
            { id: "b", text: "Duality is a permanent condition of moral consciousness — the irreducible tension between conflicting impulses within a single responsible agent" },
            { id: "c", text: "Good and evil are illusions without real content" },
            { id: "d", text: "Only religious conversion can unify the divided self" },
          ],
          correctOptionId: "b",
          explanation:
            "None of the three stories (Jekyll and Hyde, 'Markheim,' 'Olalla') offers a comfortable resolution. Stevenson presents duality not as a problem with a solution but as the permanent condition of moral consciousness — the tension between desire and duty, body and will.",
        },
        {
          id: "jh-l07-q6",
          text: "How does Jekyll's language in his final confession reveal his persistent dishonesty?",
          options: [
            { id: "a", text: "He writes in a foreign language to hide the truth" },
            { id: "b", text: "He uses passive constructions and third-person references to Hyde, maintaining the fiction of separation even while confessing — refusing to fully own his actions" },
            { id: "c", text: "He deliberately lies about the details of the experiment" },
            { id: "d", text: "He blames everything on Dr Lanyon" },
          ],
          correctOptionId: "b",
          explanation:
            "Jekyll's passive voice ('I was losing hold') shows his loss of agency, while his third-person references to Hyde ('he did this') maintain the separation between identities — revealing that his dishonesty persists even in confession.",
        },
      ],
    },
  ],
};
