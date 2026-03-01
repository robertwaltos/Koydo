import type { LearningModule } from "@/lib/modules/types";

// High-quality curriculum module derived from EPUB.
// Source: G:\My Drive\15_E-BOOKS\file003222.epub
// Author: Miguel de Cervantes  |  Subject: Literature

export const DonQuixoteMiguelDeCervantesModule: LearningModule = {
  id: "don-quixote-miguel-de-cervantes",
  title: "Don Quixote",
  description:
    "A comprehensive study of Miguel de Cervantes's Don Quixote — widely regarded as the first modern novel. This module explores the work's revolutionary narrative techniques, its comic and tragic dimensions, the dynamic relationship between Don Quixote and Sancho Panza, and the novel's enduring meditation on the tension between idealism and reality.",
  subject: "Literature",
  tags: ["epub-derived", "curriculum", "interactive", "literature", "spanish", "novel", "satire", "idealism"],
  minAge: 18,
  maxAge: 99,
  version: "2.0.0",
  learningObjectives: [
    "Analyse Cervantes's narrative innovations and their influence on the development of the novel",
    "Explain the dynamic between Don Quixote's idealism and the material world's resistance to it",
    "Evaluate the evolving relationship between Don Quixote and Sancho Panza",
    "Assess the metafictional elements of Part II and their significance",
    "Examine the blend of comedy and tragedy in the novel's treatment of madness",
    "Compare the novel's themes with broader Renaissance and early modern intellectual currents",
    "Apply close reading techniques to key episodes of the novel",
  ],
  lessons: [

    /* ─────────────────────────────────────────────────
       L01  The Birth of the Modern Novel
    ───────────────────────────────────────────────── */
    {
      id: "dq-l01",
      title: "The Birth of the Modern Novel",
      type: "video",
      duration: 12,
      objectives: [
        "Explain why Don Quixote is often called the first modern novel",
        "Describe Cervantes's satirical relationship with the romances of chivalry",
        "Identify the key narrative innovations that distinguish the novel from prior prose fiction",
      ],
      chunks: [
        {
          id: "dq-l01-c1",
          title: "Cervantes and the Romances of Chivalry",
          content:
            "Don Quixote begins as a satire of the romances of chivalry — the hugely popular prose fantasies that dominated sixteenth-century Spanish reading tastes. These romances told stories of heroic knights battling giants, enchanting sorcerers, and rescuing damsels, in a formulaic world where virtue always triumphed and the hero was always rewarded. Cervantes's protagonist, Alonso Quixano, is a minor gentleman who has read so many of these romances that he loses his mind and decides to become a knight-errant himself, renaming himself Don Quixote de la Mancha. He sets out to revive chivalry in a world that has no room for it — a world of innkeepers, barbers, farmers, and windmills. The comedy arises from the collision between his chivalric fantasies and the stubborn materiality of seventeenth-century Spain. But Cervantes's satire quickly transcends its initial target: the novel becomes not merely a parody of bad literature but a profound meditation on the relationship between fiction and reality, imagination and truth, idealism and the resistant world.",
        },
        {
          id: "dq-l01-c2",
          title: "Narrative Innovation: Realism and Perspectivism",
          content:
            "What makes Don Quixote the first modern novel is not its plot but its method. Previous prose narratives — romances, picaresque tales, pastoral stories — presented a single, authoritative version of events. Cervantes introduces multiple perspectives on the same events: Don Quixote sees a castle; Sancho sees an inn; the innkeeper sees a madman and his servant. None of these perspectives is simply wrong — each is internally coherent — but they cannot all be true simultaneously. This perspectivism forces the reader to become an active interpreter, evaluating competing accounts rather than passively receiving an authoritative narrative. Cervantes also introduces what literary theorists call 'novelistic realism': the detailed representation of everyday life in all its mundane, unglamorous particularity. The novel is populated not by idealised knights and princesses but by goatherds, convicts, prostitutes, Moorish slaves, and provincial priests — the actual inhabitants of early modern Spain, rendered with affectionate, unsentimental precision.",
        },
        {
          id: "dq-l01-c3",
          title: "The Novel as Self-Conscious Fiction",
          content:
            "Don Quixote is also revolutionary in its self-consciousness about its own fictionality. Cervantes frames the narrative as a translation of an Arabic manuscript by the historian Cide Hamete Benengeli — a fictitious author whose reliability is constantly questioned. The narrator interrupts the story to comment on Benengeli's methods, to note apparent inconsistencies, and to admit gaps in the record. In Part II (published ten years after Part I, in 1615), Cervantes introduces the most radical metafictional device in literary history: Don Quixote and Sancho discover that a book has been published about their adventures in Part I and that they are famous throughout Spain. Characters they meet have already read about them and have expectations about how they should behave. Don Quixote must now contend not only with the real world but with his own literary reputation — a situation that blurs the boundary between fiction and reality in a way that anticipates postmodernism by three and a half centuries.",
        },
      ],
      flashcards: [
        {
          id: "dq-l01-f1",
          front: "Don Quixote as first modern novel",
          back:
            "Distinguished by multiple perspectives on the same events, detailed everyday realism, self-conscious fictionality, and a protagonist who evolves psychologically — innovations that redefined prose narrative.",
        },
        {
          id: "dq-l01-f2",
          front: "Chivalric satire transcended",
          back:
            "Don Quixote begins as parody of romances of chivalry but becomes a meditation on the relationship between fiction and reality, imagination and truth, idealism and the resistant material world.",
        },
        {
          id: "dq-l01-f3",
          front: "Perspectivism in Don Quixote",
          back:
            "Cervantes presents multiple, internally coherent but incompatible perspectives on events (castle vs inn, giants vs windmills), forcing the reader to evaluate competing accounts rather than passively receive an authoritative narrative.",
        },
        {
          id: "dq-l01-f4",
          front: "Cide Hamete Benengeli",
          back:
            "The fictitious Arabic historian whose manuscript Cervantes claims to translate — a device that makes the novel self-conscious about its own fictionality, questioning narrative authority and reliability.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L02  Don Quixote and Sancho Panza: The Great Partnership
    ───────────────────────────────────────────────── */
    {
      id: "dq-l02",
      title: "Don Quixote and Sancho Panza: The Great Partnership",
      type: "video",
      duration: 13,
      objectives: [
        "Analyse the complementary natures of Don Quixote and Sancho",
        "Trace the mutual influence and gradual transformation of both characters",
        "Explain the concept of 'Sanchification' and 'Quixotification'",
      ],
      chunks: [
        {
          id: "dq-l02-c1",
          title: "Complementary Opposites",
          content:
            "The relationship between Don Quixote and Sancho Panza is one of the great partnerships in world literature — a dialectical pairing of complementary opposites that generates the novel's comedy, pathos, and philosophical depth. Don Quixote is tall, thin, learned, idealistic, and mad; Sancho is short, stout, illiterate, pragmatic, and sane. Don Quixote speaks in the elevated, archaic rhetoric of the chivalric romances; Sancho speaks in proverbs, folk wisdom, and earthy common sense. Don Quixote sees the world through the lens of chivalric fantasy (giants, enchantments, noble ladies); Sancho sees it through the lens of material necessity (food, money, sleep, beatings). Their dialogue — the constant negotiation between idealism and realism — is the engine of the novel. Neither perspective is presented as simply right: Quixote's idealism is noble but delusional; Sancho's realism is sensible but limited. The novel's wisdom lies not in choosing between them but in holding both in creative tension.",
        },
        {
          id: "dq-l02-c2",
          title: "Sanchification and Quixotification",
          content:
            "As the novel progresses, Don Quixote and Sancho gradually influence each other in a process that literary scholars call 'Sanchification' (Don Quixote becomes more realistic) and 'Quixotification' (Sancho absorbs his master's idealism). In Part I, Sancho accompanies Don Quixote primarily for the promised reward of an island to govern; by Part II, he has become genuinely devoted to his master and begins to see the world, at least partially, through Quixote's eyes. When Sancho actually receives his governorship (of the 'island' of Barataria — actually a small town), he rules with surprising wisdom, suggesting that Quixote's influence has elevated his character. Meanwhile, Don Quixote in Part II shows increasing moments of lucidity, sadness, and self-awareness. He begins to doubt his mission, question his enchantments, and acknowledge the gap between his fantasies and reality. This mutual transformation is one of the novel's profoundest insights: human relationships change both parties, and the boundary between idealism and realism is more permeable than either character initially believes.",
        },
        {
          id: "dq-l02-c3",
          title: "Dialogue as Philosophical Method",
          content:
            "The conversations between Don Quixote and Sancho function as a form of philosophical dialogue — not unlike the Platonic dialogues in which two interlocutors with different perspectives gradually approach a truth that neither holds individually. But Cervantes's dialogue is richer than Plato's because neither speaker has privileged access to truth: Don Quixote is often wrong in his interpretation of events but profoundly right in his moral convictions; Sancho is often right about facts but limited in his moral vision. Their arguments about whether they are approaching a castle or an inn, whether the barber's basin is Mambrino's golden helmet, whether knight-errantry is a viable career — these debates are simultaneously hilarious and philosophically serious. They enact the permanent human struggle to reconcile how the world is with how we believe it should be. The dialogue form also ensures that neither idealism nor realism ever gets the last word — each is always answerable to the other.",
        },
      ],
      flashcards: [
        {
          id: "dq-l02-f1",
          front: "Quixote and Sancho as complementary opposites",
          back:
            "Tall/short, learned/illiterate, idealistic/pragmatic, mad/sane. Their constant dialogue — the negotiation between idealism and realism — is the engine of the novel. Neither perspective is simply correct.",
        },
        {
          id: "dq-l02-f2",
          front: "Sanchification and Quixotification",
          back:
            "As the novel progresses, Quixote becomes more realistic (Sanchification) and Sancho absorbs his master's idealism (Quixotification) — demonstrating that human relationships transform both parties.",
        },
        {
          id: "dq-l02-f3",
          front: "Sancho's governorship of Barataria",
          back:
            "When Sancho governs his promised 'island' (actually a small town), he rules with surprising wisdom — evidence that Don Quixote's influence has genuinely elevated his character and judgment.",
        },
        {
          id: "dq-l02-f4",
          front: "Dialogue as philosophical method",
          back:
            "Quixote-Sancho conversations function like philosophical dialogues: neither speaker has privileged access to truth, and their debates enact the permanent struggle to reconcile how the world is with how we believe it should be.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L03  Comedy, Tragedy, and the Meaning of Madness
    ───────────────────────────────────────────────── */
    {
      id: "dq-l03",
      title: "Comedy, Tragedy, and the Meaning of Madness",
      type: "video",
      duration: 12,
      objectives: [
        "Analyse the shifting tone between comedy and tragedy across the novel",
        "Evaluate different interpretations of Don Quixote's madness",
        "Explain the significance of Quixote's deathbed return to sanity",
      ],
      chunks: [
        {
          id: "dq-l03-c1",
          title: "The Comedy of Collision",
          content:
            "Don Quixote is, at its most immediate level, one of the funniest books ever written. The comedy arises from the systematic collision between Don Quixote's chivalric interpretation of the world and the world's stubborn refusal to cooperate. He charges at windmills, believing them to be giants, and is knocked from his horse. He attacks a flock of sheep, convinced it is an enemy army, and is pelted with stones by the shepherds. He liberates a chain of convicted galley slaves, who promptly rob and beat him. Each episode follows the same comic pattern: grandiose illusion → violent contact with reality → absurd explanation (invariably involving malicious enchanters who have transformed things to deceive him). But the comedy is never merely cruel; Cervantes treats his hero with a warmth and respect that prevents the laughter from becoming contemptuous. Don Quixote is ridiculous, but his ridiculousness is inseparable from his nobility — he charges at windmills because he genuinely wants to fight injustice.",
        },
        {
          id: "dq-l03-c2",
          title: "The Tragic Dimension",
          content:
            "Beneath the comedy lies an increasingly tragic undertow, especially in Part II. Don Quixote's adventures become less slapstick and more cruel as other characters — particularly the Duke and Duchess — deliberately stage humiliating spectacles for their own entertainment, exploiting Quixote's delusions rather than merely happening to collide with them. The knight's suffering becomes less comic and more pitiable because he is no longer an agent of his own misadventures but a puppet manipulated by cynical aristocrats. His growing moments of self-doubt — the suspicion that his enchantments may be self-deception, that his Dulcinea may be an ordinary peasant, that his mission may be pointless — are genuinely heartbreaking precisely because they threaten the idealism that makes him who he is. The novel asks whether it is better to be a sane realist in a disenchanted world or a mad idealist whose illusions, however false, give life meaning and purpose. Cervantes does not answer this question; he dramatises its full difficulty.",
        },
        {
          id: "dq-l03-c3",
          title: "The Deathbed: Recovery and Loss",
          content:
            "The novel's ending is one of the most debated in literary history. On his deathbed, Don Quixote recovers his sanity: he renounces knight-errantry, abjures the romances of chivalry, and reclaims his birth name, Alonso Quixano the Good. He dies a Christian death, reconciled with reality. This should be a happy ending — the madman returns to reason — but it feels like one of the saddest passages in all of literature. To 'recover' sanity, Don Quixote must renounce everything that made his life meaningful: his quest, his ideals, his identity, his partnership with Sancho. Sancho tears at his beard and begs his master to live and go on adventures, but Quixote refuses. The question the ending poses is whether sanity purchased at the price of all meaning is truly a recovery — or whether Don Quixote dies not because he returns to sanity but because he can no longer sustain the illusion that made him alive. Cervantes leaves the reader suspended between relief (he dies at peace) and grief (he dies diminished), refusing to resolve the tension between idealism and reality that has animated the entire novel.",
        },
      ],
      flashcards: [
        {
          id: "dq-l03-f1",
          front: "The comic pattern of Don Quixote",
          back:
            "Grandiose chivalric illusion → violent contact with reality → absurd explanation involving malicious enchanters. The comedy is warm and respectful — ridicule is inseparable from nobility.",
        },
        {
          id: "dq-l03-f2",
          front: "The Duke and Duchess (Part II)",
          back:
            "Aristocrats who deliberately stage humiliating spectacles to exploit Quixote's delusions for entertainment — transforming him from agent of his own misadventures to puppet, making his suffering more tragic than comic.",
        },
        {
          id: "dq-l03-f3",
          front: "Quixote's deathbed recovery",
          back:
            "Don Quixote recovers sanity, renounces chivalry, and dies as Alonso Quixano. This 'recovery' is also a loss: he surrenders everything that gave his life meaning, and the reader is suspended between relief and grief.",
        },
        {
          id: "dq-l03-f4",
          front: "The unresolved question of the novel",
          back:
            "Is it better to be a sane realist in a disenchanted world or a mad idealist whose illusions provide meaning? Cervantes dramatises this question with full difficulty but refuses to answer it.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L04  Checkpoint Quiz: Don Quixote
    ───────────────────────────────────────────────── */
    {
      id: "dq-l04",
      title: "Checkpoint Quiz: Don Quixote",
      type: "quiz",
      duration: 8,
      objectives: ["Assess understanding of narrative techniques, the Quixote-Sancho relationship, and thematic tensions"],
      questions: [
        {
          id: "dq-l04-q1",
          text: "What is 'perspectivism' in the context of Don Quixote?",
          options: [
            { id: "a", text: "The philosophical doctrine that truth does not exist" },
            { id: "b", text: "Cervantes's technique of presenting multiple, internally coherent but incompatible perspectives on the same events, requiring the reader to evaluate competing accounts" },
            { id: "c", text: "The use of first-person narration throughout the novel" },
            { id: "d", text: "A painting technique used in Spanish art of the period" },
          ],
          correctOptionId: "b",
          explanation:
            "Don Quixote sees a castle; Sancho sees an inn; the innkeeper sees customers. Each perspective is internally coherent but they cannot all be true simultaneously. The reader must evaluate and interpret rather than passively receive.",
        },
        {
          id: "dq-l04-q2",
          text: "What does 'Quixotification' refer to?",
          options: [
            { id: "a", text: "Don Quixote's descent into deeper madness" },
            { id: "b", text: "The process by which Sancho gradually absorbs his master's idealism and begins to see the world partially through Quixote's eyes" },
            { id: "c", text: "The act of reading too many novels" },
            { id: "d", text: "A medical condition described in the novel" },
          ],
          correctOptionId: "b",
          explanation:
            "Quixotification describes Sancho's gradual transformation through his master's influence — becoming more idealistic and imaginative, as shown by his wise governance of Barataria and his genuine devotion to Quixote's mission.",
        },
        {
          id: "dq-l04-q3",
          text: "Why is Don Quixote's deathbed recovery of sanity experienced as tragic rather than happy?",
          options: [
            { id: "a", text: "Because he recovers only to discover he is bankrupt" },
            { id: "b", text: "Because recovering sanity means renouncing everything that gave his life meaning — his quest, his ideals, his identity — leaving him diminished, not restored" },
            { id: "c", text: "Because his family refuses to forgive him" },
            { id: "d", text: "Because the priest forces him to destroy all his books" },
          ],
          correctOptionId: "b",
          explanation:
            "Sanity, in this case, is also a loss. Don Quixote must surrender his chivalric identity, his quest, and his partnership with Sancho. The reader is left suspended between the relief of his peaceful death and grief at the loss of his animating idealism.",
        },
        {
          id: "dq-l04-q4",
          text: "The metafictional innovation in Part II is that:",
          options: [
            { id: "a", text: "The story switches to verse form" },
            { id: "b", text: "Don Quixote and Sancho discover that Part I has been published and they are famous — they must contend with their own literary reputations" },
            { id: "c", text: "A new narrator replaces Cide Hamete Benengeli" },
            { id: "d", text: "The characters reveal that they are aware they are fictional" },
          ],
          correctOptionId: "b",
          explanation:
            "In Part II, characters have already read Part I and have expectations of Quixote and Sancho. This blurs the boundary between fiction and reality — characters must contend not only with the real world but with their own literary existence.",
        },
        {
          id: "dq-l04-q5",
          text: "Cervantes's treatment of Don Quixote's madness is primarily characterised by:",
          options: [
            { id: "a", text: "Clinical detachment and medical diagnosis" },
            { id: "b", text: "Warmth and respect — his ridiculousness is inseparable from his nobility, and the comedy never becomes contemptuous" },
            { id: "c", text: "Fear and horror, treating madness as dangerous" },
            { id: "d", text: "Complete sympathy, never finding humour in his delusions" },
          ],
          correctOptionId: "b",
          explanation:
            "Cervantes laughs with and at Don Quixote simultaneously. The comedy arises from the collision of idealism with reality, but Quixote's absurdity is always bound up with his genuine desire to fight injustice — preventing the laughter from becoming cruel.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L05  Metafiction and the Novel About Novels
    ───────────────────────────────────────────────── */
    {
      id: "dq-l05",
      title: "Metafiction and the Novel About Novels",
      type: "video",
      duration: 12,
      objectives: [
        "Analyse Part II's self-referential structure and its consequences for characters",
        "Explain the significance of Avellaneda's spurious sequel in the novel's composition",
        "Assess how Don Quixote's metafictional strategies anticipate postmodernism",
      ],
      chunks: [
        {
          id: "dq-l05-c1",
          title: "Part II: Characters Who Have Read Their Own Story",
          content:
            "The metafictional structure of Part II is unprecedented in the history of fiction. Between the publication of Part I (1605) and Part II (1615), Don Quixote's fame within the novel's fictional world has spread: the characters he meets have read Part I and recognise him. This creates a new layer of complexity: Don Quixote must now negotiate not only his own delusional interpretation of reality but also other people's interpretation of his delusions. The Duke and Duchess, who have read Part I, deliberately construct elaborate hoaxes to keep Quixote in his chivalric role — they stage 'enchantments,' produce fake damsels in distress, and arrange Sancho's governorship. This means that the 'adventures' in Part II are no longer accidental collisions with reality but deliberate performances staged by an audience that is reading the quixotic script. The distinction between reality and fiction, already blurred in Part I, collapses entirely: the characters are living inside a book whose previous volume they have read.",
        },
        {
          id: "dq-l05-c2",
          title: "Avellaneda's Spurious Sequel",
          content:
            "In 1614, while Cervantes was writing Part II, an anonymous writer (known as Avellaneda) published a fraudulent continuation of Don Quixote's adventures. Cervantes was furious and responded with one of the most brilliant literary revenge moves in history: he incorporated Avellaneda's sequel into his own Part II as a plot element. Characters in Cervantes's Part II encounter a copy of Avellaneda's sequel and denounce it as a fraud. Don Quixote himself reads about the 'false Don Quixote' and is outraged that someone has misrepresented him. He deliberately changes his travel itinerary to prove that Avellaneda's version is false — demonstrating that the 'real' Don Quixote is the one in Cervantes's narrative, not the imposter. This extraordinary moment fuses literary criticism, character psychology, and narrative competition into a single plot device. It also raises profound questions about authorial authority: who 'owns' a fictional character? Can Don Quixote exist independently of Cervantes? If a character can contest his own misrepresentation, at what point does he become autonomous?",
        },
        {
          id: "dq-l05-c3",
          title: "Anticipating Postmodernism",
          content:
            "Don Quixote's metafictional strategies — characters who read their own stories, an unreliable fictitious historian, the incorporation of a rival sequel as plot material, the blurring of fiction and reality — represent techniques that would not become common in Western literature until the mid-twentieth century. Borges, Calvino, Nabokov, Barth, and other postmodern writers have all acknowledged Don Quixote as their ancestor. But Cervantes's metafiction has a warmth and human density that much postmodernism lacks: the self-referential games never become mere cleverness because they are always grounded in character psychology and emotional truth. The question of whether Don Quixote is real or fictional is not an abstract philosophical puzzle — it is a deeply personal crisis for a character who stakes his entire identity on a narrative he has chosen to live. Cervantes's genius is to make the reader feel the weight of this question rather than merely think about it, to make metafiction not a technique but a profound insight into the human relationship with stories and the fragile, constructed nature of identity itself.",
        },
      ],
      flashcards: [
        {
          id: "dq-l05-f1",
          front: "Part II's metafictional structure",
          back:
            "Characters have read Part I and recognise Don Quixote. The Duke and Duchess stage deliberate 'adventures,' transforming accidental collisions with reality into scripted performances — collapsing the fiction/reality boundary.",
        },
        {
          id: "dq-l05-f2",
          front: "Avellaneda's spurious sequel",
          back:
            "Cervantes incorporated a rival author's fraudulent continuation as a plot device: his characters encounter and denounce it, and Quixote changes his itinerary to refute the imposter — a literary revenge move and meditation on authorial ownership.",
        },
        {
          id: "dq-l05-f3",
          front: "Don Quixote as postmodern ancestor",
          back:
            "Cervantes's metafictional techniques — self-referential narrative, unreliable historian, blurred fiction/reality — anticipated postmodernism by 350 years. Borges, Calvino, Nabokov, and Barth all acknowledge this debt.",
        },
        {
          id: "dq-l05-f4",
          front: "Metafiction with emotional weight",
          back:
            "Unlike much postmodernism, Cervantes grounds self-referential games in character psychology and emotional truth — the question of whether Quixote is real is a personal crisis, not an abstract puzzle.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L06  Legacy and Universal Themes
    ───────────────────────────────────────────────── */
    {
      id: "dq-l06",
      title: "Legacy and Universal Themes",
      type: "video",
      duration: 12,
      objectives: [
        "Trace Don Quixote's influence on the development of the European novel",
        "Explain the concept of 'quixotism' and its cultural significance",
        "Assess why the novel continues to speak to contemporary readers",
      ],
      chunks: [
        {
          id: "dq-l06-c1",
          title: "The Novel After Cervantes",
          content:
            "Don Quixote's influence on the subsequent history of the novel is immeasurable. In England, Fielding's Tom Jones and Sterne's Tristram Shandy are directly modelled on Cervantine techniques: the self-conscious narrator, the picaresque structure, the mixing of comedy and moral seriousness. In France, Flaubert's Madame Bovary — the story of a woman who ruins herself by living according to the romantic novels she has read — is an explicit reworking of the Quixote theme. In Russia, Dostoevsky's The Idiot presents Prince Myshkin as a Christ-like innocent whose goodness is destroyed by contact with the cynical world — a tragic Quixote. In twentieth-century Latin America, Borges and García Márquez both acknowledge Cervantes as the fountainhead of their literary tradition. The novel, as a literary form, is essentially Cervantine: it is the genre that represents the clash between individual consciousness and the external world, between how things seem and how they are, between the stories we tell ourselves and the stubborn facts of existence.",
        },
        {
          id: "dq-l06-c2",
          title: "Quixotism: Idealism as Heroism and Folly",
          content:
            "The word 'quixotic' has entered every major European language, meaning impractically idealistic or committed to impossible causes. But the word contains an ambiguity that perfectly reflects the novel: to be quixotic is simultaneously noble and foolish, admirable and absurd. This ambiguity is the heart of Cervantes's achievement. Don Quixote is not simply a buffoon (as the crudest readings suggest) or simply a saint (as the most romantic readings suggest); he is both at once, and the reader's inability to separate the heroism from the folly is precisely the point. The concept of quixotism raises a question that every generation must answer for itself: is it better to see the world as it is and accept its imperfections, or to see the world as it should be and fight for an impossible ideal? Cervantes does not provide a definitive answer because the question has no definitive answer — it is the permanent condition of any creature capable of imagining a better world while living in this one.",
        },
        {
          id: "dq-l06-c3",
          title: "Why Don Quixote Endures",
          content:
            "Four centuries after its publication, Don Quixote remains the most widely translated book in history after the Bible. Its endurance cannot be explained by historical interest alone — the world of seventeenth-century La Mancha is remote from contemporary experience. The novel endures because its central themes are universal. The tension between idealism and reality, the comedy of human self-deception, the tragedy of losing one's animating illusions, the transformative power of friendship, the constructed nature of identity, the relationship between the stories we read and the lives we live — these are not historical curiosities but permanent features of the human condition. Every reader who has ever imagined a better world while struggling with the actual one is, in some sense, a Don Quixote. Every reader who has ever loved someone whose dreams seem impractical is, in some sense, a Sancho Panza. Cervantes created two characters so fundamentally human that they have become part of the shared vocabulary of civilization, their names synonymous with experiences that transcend any particular time, place, or culture.",
        },
      ],
      flashcards: [
        {
          id: "dq-l06-f1",
          front: "Don Quixote's literary descendants",
          back:
            "Fielding, Sterne, Flaubert (Madame Bovary), Dostoevsky (The Idiot), Borges, García Márquez — the entire novel tradition is essentially Cervantine: representing the clash between individual consciousness and the external world.",
        },
        {
          id: "dq-l06-f2",
          front: "Quixotism (the concept)",
          back:
            "To be quixotic is simultaneously noble and foolish — the word captures the irreducible ambiguity of the novel. Heroism and folly are inseparable in Quixote, and the reader cannot choose between them.",
        },
        {
          id: "dq-l06-f3",
          front: "Why Don Quixote endures",
          back:
            "Its themes are universal: idealism vs reality, self-deception, the tragedy of lost illusions, the power of friendship, identity construction, and the relationship between stories and lived experience.",
        },
        {
          id: "dq-l06-f4",
          front: "Quixote and Sancho as universal figures",
          back:
            "Every dreamer is a Quixote; every loving realist is a Sancho. Cervantes created characters so fundamentally human that their names transcend time, place, and culture to become part of civilization's shared vocabulary.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L07  Final Assessment: Don Quixote
    ───────────────────────────────────────────────── */
    {
      id: "dq-l07",
      title: "Final Assessment: Don Quixote",
      type: "quiz",
      duration: 9,
      objectives: ["Evaluate comprehensive mastery of Don Quixote's literary and philosophical dimensions"],
      questions: [
        {
          id: "dq-l07-q1",
          text: "Cervantes's perspectivism in Don Quixote is best described as:",
          options: [
            { id: "a", text: "A single authoritative narrator telling the definitive version of events" },
            { id: "b", text: "Multiple internally coherent but incompatible perspectives on the same events, requiring the reader to actively interpret and evaluate" },
            { id: "c", text: "A purely visual technique related to painting" },
            { id: "d", text: "The elimination of all narrative perspective" },
          ],
          correctOptionId: "b",
          explanation:
            "Cervantes presents competing interpretations (castle vs inn, giants vs windmills) that are coherent within each character's framework but incompatible — forcing the reader into active interpretive engagement.",
        },
        {
          id: "dq-l07-q2",
          text: "The incorporation of Avellaneda's spurious sequel into Part II serves to:",
          options: [
            { id: "a", text: "Acknowledge Avellaneda as a superior writer" },
            { id: "b", text: "Prove that Cervantes's Quixote is the 'real' one, raise questions about authorial ownership, and demonstrate fiction's power to contest its own misrepresentation" },
            { id: "c", text: "Complete a plotline left unfinished in Part I" },
            { id: "d", text: "Introduce a new major character" },
          ],
          correctOptionId: "b",
          explanation:
            "Cervantes's Quixote reads about Avellaneda's imposter and changes his route to refute it — asserting his 'reality' over the fake. This raises profound questions about who owns a fictional character and whether characters can become autonomous.",
        },
        {
          id: "dq-l07-q3",
          text: "Sancho's wise governance of Barataria demonstrates:",
          options: [
            { id: "a", text: "That he has been secretly educated throughout the novel" },
            { id: "b", text: "The process of 'Quixotification' — Sancho has absorbed his master's idealism and wisdom through years of partnership" },
            { id: "c", text: "That the Duke is a generous patron" },
            { id: "d", text: "That governance requires no special qualities" },
          ],
          correctOptionId: "b",
          explanation:
            "Sancho's surprisingly wise governance provides concrete evidence that Don Quixote's influence has elevated his character — he has absorbed idealism and judgment through their partnership, demonstrating the transformative power of the relationship.",
        },
        {
          id: "dq-l07-q4",
          text: "The central ambiguity of 'quixotism' is:",
          options: [
            { id: "a", text: "Whether Don Quixote is Spanish or Portuguese" },
            { id: "b", text: "Whether impractical idealism is noble or foolish — the novel presents it as inseparably both" },
            { id: "c", text: "Whether the romances of chivalry are historically accurate" },
            { id: "d", text: "Whether Dulcinea actually exists as a noblewoman" },
          ],
          correctOptionId: "b",
          explanation:
            "To be quixotic is simultaneously admirable and absurd. Cervantes's great achievement is making heroism and folly inseparable in his protagonist — the reader cannot choose between them, and that irreducibility is the novel's deepest insight.",
        },
        {
          id: "dq-l07-q5",
          text: "Don Quixote's death scene is experienced as tragic because:",
          options: [
            { id: "a", text: "He dies from a violent wound suffered in battle" },
            { id: "b", text: "Recovering sanity requires renouncing everything that gave his life meaning — his quest, identity, and partnership — leaving him diminished rather than restored" },
            { id: "c", text: "He dies without completing his mission to find the Holy Grail" },
            { id: "d", text: "His family refuses to attend his deathbed" },
          ],
          correctOptionId: "b",
          explanation:
            "Sanity is also loss. To become Alonso Quixano again, Don Quixote must surrender the chivalric identity, idealistic quest, and loving partnership with Sancho that constituted everything worth living for — making 'recovery' feel like a kind of death.",
        },
        {
          id: "dq-l07-q6",
          text: "The novel's question — 'Is it better to be a sane realist or a mad idealist?' — is resolved by:",
          options: [
            { id: "a", text: "Clearly arguing that realism is superior" },
            { id: "b", text: "Clearly arguing that idealism is superior" },
            { id: "c", text: "Remaining deliberately unresolved — Cervantes presents both perspectives with full force and refuses to choose between them" },
            { id: "d", text: "Proposing a third alternative that resolves the tension" },
          ],
          correctOptionId: "c",
          explanation:
            "Cervantes dramatises the question with full difficulty without resolving it. Both sane realism (Sancho's perspective) and mad idealism (Quixote's) have their virtues and costs, and the novel's wisdom lies in holding them in permanent, creative tension.",
        },
      ],
    },
  ],
};
