import type { LearningModule } from "@/lib/modules/types";

// High-quality curriculum module derived from EPUB.
// Source: G:\My Drive\15_E-BOOKS\file004129.epub
// Author: Thomas Paine  |  Subject: History & Political Philosophy

export const RightsOfManThomasPaineMarkPhilpModule: LearningModule = {
  id: "rights-of-man-thomas-paine-mark-philp",
  title: "Rights of Man",
  description:
    "Thomas Paine's revolutionary pamphlet — written in direct response to Edmund Burke's attack on the French Revolution — remains one of the most powerful defences of natural rights, republican government, and popular sovereignty ever composed. Paine argues that legitimate government derives solely from the consent of the governed, that hereditary monarchy and aristocracy are usurpations without moral standing, and that a modern republic can provide social welfare, progressive taxation, and universal education without tyranny.",
  subject: "History",
  tags: ["epub-derived", "curriculum", "interactive", "political-philosophy", "enlightenment", "revolution"],
  minAge: 18,
  maxAge: 99,
  version: "2.0.0",
  learningObjectives: [
    "Explain the historical context that prompted Paine to write Rights of Man",
    "Distinguish Paine's theory of natural rights from Burke's defence of tradition and prescription",
    "Trace Paine's argument that hereditary government lacks legitimacy",
    "Describe Paine's defence of the French Revolution's principles and the Declaration of Rights",
    "Analyse Paine's proposals for social welfare, progressive taxation, and public education",
    "Evaluate Paine's influence on republican political thought in the Atlantic world",
    "Compare Paine's vision of government to contemporary democratic principles",
  ],
  lessons: [

    /* ─────────────────────────────────────────────────
       L01  The Controversy: Paine vs Burke
    ───────────────────────────────────────────────── */
    {
      id: "rom-l01",
      title: "The Great Debate: Paine Against Burke",
      type: "video",
      duration: 12,
      objectives: [
        "Describe the political context that provoked Rights of Man",
        "Summarise Burke's core arguments against the French Revolution",
        "Explain why Paine felt compelled to respond",
      ],
      chunks: [
        {
          id: "rom-l01-c1",
          title: "Burke's Attack and Paine's Fury",
          content:
            "From the part Edmund Burke took in the American Revolution, Thomas Paine naturally considered him a friend to mankind. Their acquaintance had commenced on the ground of liberty, and Paine expected it to continue there. But in late 1790, Burke published Reflections on the Revolution in France — a passionate denunciation of the revolutionary principles that Paine held sacred. Burke argued that the French revolutionaries were recklessly destroying centuries of accumulated social wisdom, that abstract declarations of rights were dangerous fantasies, and that the stability of society depended on inherited institutions — monarchy, aristocracy, and established religion — that embodied the hard-won experience of generations. Paine was stunned. He saw in Burke not a principled conservative but a man who had betrayed the very cause he once championed. Rights of Man was Paine's answer: a systematic demolition of Burke's position and, beyond it, a comprehensive programme for republican government.",
        },
        {
          id: "rom-l01-c2",
          title: "Two Opposing Philosophies of Government",
          content:
            "The Burke-Paine debate represents one of the defining intellectual confrontations in Western political thought. Burke's philosophy rested on prescription — the idea that institutions gain legitimacy through long use and gradual adaptation, that the collective wisdom embedded in tradition is superior to any individual's rational design. Society, for Burke, is a partnership between the living, the dead, and the unborn; revolutionary change severs that partnership and produces chaos. Paine's philosophy rested on reason and natural rights. He held that every generation possesses the inherent right to govern itself, that no past generation can bind the living to its arrangements, and that legitimacy derives exclusively from the active consent of the governed. Tradition, in Paine's view, is simply the residue of past power — often established by conquest and fraud — and carries no moral authority if it violates the natural rights of living people.",
        },
        {
          id: "rom-l01-c3",
          title: "The Transatlantic Significance of the Debate",
          content:
            "Paine dedicated the first part of Rights of Man to George Washington and the second to the Marquis de Lafayette — placing himself explicitly at the intersection of the American and French Revolutions. Having served as the author of Common Sense during the American struggle, Paine saw in 1789 a continuation of the same cause: humanity's advance from hereditary government to representative self-rule. But the debate was not merely Franco-British. Paine's pamphlet sold an estimated 200,000 copies in England alone — in a country of perhaps ten million — making it one of the most widely read political works in English history. The British government, alarmed by its influence, prosecuted Paine for seditious libel, forcing him to flee to France. The controversy demonstrated that ideas about rights and representation could cross borders and threaten established power structures on a continental scale, a pattern that would recur repeatedly through the nineteenth and twentieth centuries.",
        },
      ],
      flashcards: [
        {
          id: "rom-l01-f1",
          front: "Edmund Burke's Reflections on the Revolution in France (1790)",
          back: "Burke's attack on the French Revolution, arguing that abstract rights are dangerous, that stability rests on inherited institutions, and that society is a partnership between past, present, and future generations — the work that provoked Paine's response.",
        },
        {
          id: "rom-l01-f2",
          front: "Prescription (Burke's principle)",
          back: "The idea that institutions gain legitimacy through longstanding use and gradual adaptation, and that the accumulated wisdom of tradition is superior to any individual's rational redesign of society.",
        },
        {
          id: "rom-l01-f3",
          front: "Paine's principle of generational sovereignty",
          back: "Each generation possesses the inherent right to govern itself; no past generation can bind the living to its political arrangements. Legitimacy derives solely from the active consent of the governed.",
        },
        {
          id: "rom-l01-f4",
          front: "Sales and impact of Rights of Man",
          back: "Approximately 200,000 copies sold in England alone — in a population of ~10 million. The British government prosecuted Paine for seditious libel, forcing his flight to France and demonstrating the explosive power of rights discourse.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L02  Natural Rights and the French Declaration
    ───────────────────────────────────────────────── */
    {
      id: "rom-l02",
      title: "Natural Rights and the Declaration of the Rights of Man",
      type: "video",
      duration: 12,
      objectives: [
        "Define natural rights as Paine understood them",
        "Explain Paine's defence of the French Declaration of Rights",
        "Contrast natural rights with civil rights in Paine's framework",
      ],
      chunks: [
        {
          id: "rom-l02-c1",
          title: "The Origin of Rights: Nature Before Government",
          content:
            "Paine distinguishes between natural rights and civil rights. Natural rights are those that belong to every person by virtue of their existence — the rights of the mind, freedom of conscience, and the right to pursue happiness. These rights pre-exist any government and cannot be legitimately taken away by any political authority. Civil rights, by contrast, are natural rights whose enforcement the individual delegates to society in exchange for collective protection. Paine's critical point is that government does not grant rights — it can only recognise or violate them. When government is properly constituted, it serves as the instrument through which individuals collectively protect natural rights they cannot secure alone. When government violates those rights, it loses its claim to obedience. This framework stands in direct opposition to Burke's view, in which rights are granted by institutional tradition and can be modified or revoked as the inherited constitution evolves.",
        },
        {
          id: "rom-l02-c2",
          title: "Paine's Defence of the Declaration of Rights",
          content:
            "Paine provides a detailed commentary on the French Declaration of the Rights of Man and of the Citizen, adopted by the National Assembly in August 1789. He notes that the first three articles — asserting that men are born and remain free and equal in rights, that the purpose of political association is the preservation of natural rights, and that sovereignty resides in the nation — comprehend in general terms the whole of a Declaration of Rights. The succeeding articles, Paine explains, either originate from these three or follow as elucidations. The principle that liberty consists in the freedom to do everything that injures no one else establishes a clear boundary between personal freedom and social obligation. The principle that the law is an expression of the general will, and that all citizens have the right to participate in its formation, establishes the foundation of representative government. Paine's enthusiasm for the Declaration is not uncritical — he acknowledges that principles must be translated into institutions — but he insists that the principles themselves are self-evidently correct.",
        },
        {
          id: "rom-l02-c3",
          title: "Against Hereditary Right: The Illegitimacy of Monarchy",
          content:
            "Paine's most radical argument is that hereditary government is an absurdity. He asks a disarmingly simple question: by what right does any individual claim authority over millions of people merely because of an accident of birth? Burke had answered that the English people, through the Settlement of 1688, had bound themselves and their posterity to the House of Hanover for all time. Paine demolishes this claim: 'There never did, there never will, and there never can exist a parliament, or any description of men, or any generation of men, in any country, possessed of the right or the power of binding and controlling posterity to the end of time.' Every generation must be free to choose its own government. The 1688 settlement was, at best, a compact for its own time — it cannot speak for citizens not yet born. To claim otherwise is to assert that the dead have more authority than the living, which inverts every principle of reason and justice.",
        },
      ],
      flashcards: [
        {
          id: "rom-l02-f1",
          front: "Natural rights (Paine)",
          back: "Rights that belong to every person by virtue of existence — freedom of conscience, the rights of the mind, and the pursuit of happiness. They pre-exist government and cannot legitimately be taken away.",
        },
        {
          id: "rom-l02-f2",
          front: "Civil rights (Paine)",
          back: "Natural rights whose enforcement the individual delegates to society in exchange for collective protection — government does not create these rights, it only administers their collective defence.",
        },
        {
          id: "rom-l02-f3",
          front: "French Declaration of the Rights of Man (1789)",
          back: "The founding document of French revolutionary principles: men are born free and equal; sovereignty resides in the nation; the law is an expression of the general will. Paine saw it as the embodiment of natural rights theory.",
        },
        {
          id: "rom-l02-f4",
          front: "Paine on hereditary government",
          back: "'There never did, there never will, there never can exist a parliament possessed of the right of binding posterity to the end of time.' Each generation must choose its own government; the dead cannot govern the living.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L03  The French Revolution Defended
    ───────────────────────────────────────────────── */
    {
      id: "rom-l03",
      title: "The French Revolution Defended: Paine's Counter-Narrative",
      type: "video",
      duration: 12,
      objectives: [
        "Summarise Paine's account of the events of 1789",
        "Explain how Paine reframed the Revolution as a rational assertion of rights",
        "Contrast Paine's narrative with Burke's depiction of revolutionary violence",
      ],
      chunks: [
        {
          id: "rom-l03-c1",
          title: "Burke's Nightmare, Paine's Daybreak",
          content:
            "Burke's Reflections painted the French Revolution in colours of horror: the mob marching on Versailles, Marie Antoinette humiliated, the ancient constitution of France destroyed by demagogues intoxicated with abstract philosophy. Burke mourned the 'age of chivalry' and predicted that unbridled revolution would consume its own children. Paine's counter-argument is devastating in its simplicity. Among the incivilities by which nations provoke each other, he writes, Burke's pamphlet is an extraordinary instance. Neither the people of France nor the National Assembly were troubling themselves about the affairs of England; that Burke should commence an unprovoked attack upon them was as much a work of incivility as any that could be charged against the Revolution itself. Paine accuses Burke of weeping for the plumage and forgetting the dying bird — mourning the loss of aristocratic pomp while ignoring the centuries of suffering that the old regime inflicted on the common people of France.",
        },
        {
          id: "rom-l03-c2",
          title: "Revolution as Rational Reconstruction",
          content:
            "Paine insists that the French Revolution was not an eruption of irrational violence but a rational response to irrational government. The ancien régime was not a functioning society disrupted by radicals — it was a system of legalised plunder in which the court and the aristocracy consumed the labour of millions without consent, accountability, or justification. The storming of the Bastille was not mob savagery but the inevitable consequence of a government that had exhausted every claim to legitimacy. When Paine describes the revolution he emphasises order, not chaos: the Declaration of Rights, the constitutional debates, the abolition of feudal privileges, the establishment of representative institutions. Where Burke saw the destruction of an ancient constitution, Paine saw the construction of the first government in European history actually founded on the principle that sovereignty resides in the people — not in the throne, not in tradition, not in the church, but in the active, living nation.",
        },
        {
          id: "rom-l03-c3",
          title: "The American Example as Proof of Principle",
          content:
            "Throughout Rights of Man, Paine holds up the American Revolution as proof that republican government is not a utopian fantasy but a functioning reality. The American experiment demonstrated that a large, diverse nation could govern itself without monarchy, without hereditary aristocracy, and without an established church — and do so more justly, more efficiently, and more prosperously than any European nation governed by these institutions. Paine argues that the American Revolution was the critical catalyst for the French Revolution. It proved that the principles of Locke and Montesquieu were not just philosophical abstractions but practical foundations for governance. What Archimedes said of mechanical powers, Paine writes, may be applied to reason and liberty: 'Had we a place to stand upon, we might raise the world.' The revolution of America presented in politics what was only theory in mechanics — a working demonstration that government by consent was not only morally right but practically superior to government by inheritance.",
        },
      ],
      flashcards: [
        {
          id: "rom-l03-f1",
          front: "Burke on the Revolution: 'the age of chivalry is gone'",
          back: "Burke mourned the loss of aristocratic refinement and tradition, depicting the Revolution as irrational mob violence that destroyed centuries of accumulated social wisdom.",
        },
        {
          id: "rom-l03-f2",
          front: "Paine: 'he weeps for the plumage and forgets the dying bird'",
          back: "Paine's accusation that Burke mourned aristocratic ceremony while ignoring the centuries of suffering inflicted on the common people by the ancien régime — a devastating rhetorical reversal.",
        },
        {
          id: "rom-l03-f3",
          front: "Paine's characterisation of the French Revolution",
          back: "Not irrational violence but a rational response to irrational government — emphasising the Declaration of Rights, constitutional debates, and the construction of the first European government founded on popular sovereignty.",
        },
        {
          id: "rom-l03-f4",
          front: "American Revolution as proof of principle",
          back: "Paine held up America as proof that a large, diverse nation could govern itself without monarchy, aristocracy, or established church — demonstrating that government by consent was both morally right and practically superior.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L04  Government by Principle: Paine's Republic
    ───────────────────────────────────────────────── */
    {
      id: "rom-l04",
      title: "Government by Principle: Paine's Republic",
      type: "video",
      duration: 12,
      objectives: [
        "Describe Paine's theory of representative government",
        "Explain why Paine believed democratic republics reduce the need for war",
        "Detail Paine's proposals for social welfare and progressive taxation",
      ],
      chunks: [
        {
          id: "rom-l04-c1",
          title: "The Three Forms of Government",
          content:
            "Paine identifies three forms of government: government by superstition (theocracy), government by power (monarchy and aristocracy), and government by reason (representative democracy). The first prevailed in antiquity; the second characterises the Old World; the third has emerged, first in America and now in France. Government by reason, Paine argues, is not merely one option among equals but the only legitimate form. Its legitimacy rests on a simple chain of reasoning: human beings are born with natural rights; government exists to protect those rights; the only government capable of protecting rights without itself becoming a violator is one that derives its authority from the active consent of the governed, exercises power through elected representatives, and remains permanently subject to revision by the people. Any government that claims authority from heredity, conquest, or divine sanction has no moral standing and may rightfully be altered or abolished.",
        },
        {
          id: "rom-l04-c2",
          title: "Why Republics Are Peaceful",
          content:
            "Paine makes a striking argument that democratic republics are inherently less warlike than monarchies. Under hereditary government, war is a personal enterprise of the sovereign — an instrument for expanding dynastic territory, distracting domestic populations, and enriching military aristocracies. The costs of war are borne by those who have no voice in declaring it. Under representative government, Paine argues, the citizens who must fight and finance a war are the same citizens who decide whether to authorise it. This alignment of costs and decision-making power creates a structural bias toward peace. Paine envisioned an era in which republican government would spread across nations, creating conditions for international cooperation and the reduction of military expenditure. The savings could then be redirected to social welfare — a visionary proposal that anticipated twentieth-century arguments about the democratic peace.",
        },
        {
          id: "rom-l04-c3",
          title: "Social Welfare and Progressive Taxation: A Revolutionary Programme",
          content:
            "In Part Two of Rights of Man, Paine goes beyond political theory to propose specific social policies that were breathtakingly ahead of their time. He calls for progressive taxation — taxing large estates at higher rates to fund public services. He proposes universal public education, government-funded pensions for the elderly, maternity grants for new mothers, and support payments for the poor — funded not by charity but by right. Every civilised society, Paine argues, owes its least fortunate members a basic level of material security, because poverty is not a moral failing but a structural consequence of how property and wealth are distributed. These proposals, written in 1791, anticipate the welfare state by more than a century. Paine's reasoning is characteristically direct: if government exists to serve the people, then its first obligation is to ensure that no citizen is left in conditions of destitution when collective resources are available to prevent it. The cost, he calculates, would be a fraction of what European monarchies spent on wars, courts, and aristocratic pensions.",
        },
      ],
      flashcards: [
        {
          id: "rom-l04-f1",
          front: "Paine's three forms of government",
          back: "1) Government by superstition (theocracy); 2) Government by power (monarchy/aristocracy); 3) Government by reason (representative democracy) — only the third is legitimate because it derives from consent.",
        },
        {
          id: "rom-l04-f2",
          front: "Paine's argument for the democratic peace",
          back: "Under representative government, those who fight and finance wars are the same citizens who authorise them — aligning costs with decision-making creates a structural bias toward peace.",
        },
        {
          id: "rom-l04-f3",
          front: "Paine's social welfare proposals (1791)",
          back: "Progressive taxation, universal public education, government pensions for the elderly, maternity grants, and poverty relief — all funded by right, not charity. Anticipated the welfare state by over a century.",
        },
        {
          id: "rom-l04-f4",
          front: "Paine on poverty",
          back: "Not a moral failing but a structural consequence of how property and wealth are distributed. Government's first obligation is ensuring no citizen suffers destitution when collective resources can prevent it.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L05  Checkpoint Quiz
    ───────────────────────────────────────────────── */
    {
      id: "rom-l05",
      title: "Rights of Man: Checkpoint Quiz",
      type: "quiz",
      duration: 8,
      objectives: ["Assess comprehension of Paine's arguments, the Burke debate, and revolutionary principles"],
      questions: [
        {
          id: "rom-l05-q1",
          text: "What was the immediate provocation for Paine writing Rights of Man?",
          options: [
            { id: "a", text: "The American Declaration of Independence" },
            { id: "b", text: "Edmund Burke's Reflections on the Revolution in France, which attacked the French Revolution and defended hereditary government" },
            { id: "c", text: "King George III's attempt to tax American colonies" },
            { id: "d", text: "The execution of Louis XVI during the Terror" },
          ],
          correctOptionId: "b",
          explanation:
            "Rights of Man was a direct response to Burke's 1790 Reflections, which denounced the French Revolution and defended traditional, hereditary institutions. Paine felt Burke had betrayed the cause of liberty they once shared.",
        },
        {
          id: "rom-l05-q2",
          text: "How does Paine distinguish natural rights from civil rights?",
          options: [
            { id: "a", text: "Natural rights are granted by government; civil rights exist in nature" },
            { id: "b", text: "Natural rights belong to every person by virtue of existence and pre-exist government; civil rights are natural rights whose enforcement is delegated to society" },
            { id: "c", text: "Natural rights apply only to citizens; civil rights are universal" },
            { id: "d", text: "There is no distinction; Paine uses the terms interchangeably" },
          ],
          correctOptionId: "b",
          explanation:
            "Paine defined natural rights as pre-governmental (freedom of conscience, pursuit of happiness) and civil rights as natural rights whose collective enforcement individuals delegate to government.",
        },
        {
          id: "rom-l05-q3",
          text: "What is Paine's argument against hereditary government?",
          options: [
            { id: "a", text: "Hereditary rulers are always incompetent" },
            { id: "b", text: "No generation has the right to bind posterity — each generation must be free to choose its own government" },
            { id: "c", text: "Monarchy is too expensive compared to republics" },
            { id: "d", text: "Hereditary government was never practised in human history" },
          ],
          correctOptionId: "b",
          explanation:
            "Paine's core anti-hereditary argument is about generational sovereignty: 'There never did, there never will, and there never can exist a parliament possessed of the right of binding posterity to the end of time.'",
        },
        {
          id: "rom-l05-q4",
          text: "Which of Paine's social welfare proposals was most revolutionary for 1791?",
          options: [
            { id: "a", text: "Abolishing all taxation" },
            { id: "b", text: "Establishing a global monarchy" },
            { id: "c", text: "Progressive taxation funding public education, elderly pensions, maternity grants, and poverty relief — as rights, not charity" },
            { id: "d", text: "Requiring all citizens to serve in the military" },
          ],
          correctOptionId: "c",
          explanation:
            "Paine proposed a comprehensive welfare programme — progressive taxation, public education, pensions, maternity grants, poverty support — funded as a matter of right. These ideas anticipated the modern welfare state by over a century.",
        },
        {
          id: "rom-l05-q5",
          text: "Why does Paine argue that republican governments are inherently less warlike?",
          options: [
            { id: "a", text: "Republics have weaker militaries" },
            { id: "b", text: "Republican leaders are morally superior to monarchs" },
            { id: "c", text: "The citizens who fight and finance wars are also the citizens who authorise them, aligning costs with decision-making" },
            { id: "d", text: "Republics cannot form alliances with other nations" },
          ],
          correctOptionId: "c",
          explanation:
            "Paine argued that monarchs declare wars whose costs fall on citizens with no voice. In republics, those who bear the costs also make the decisions — creating a structural incentive for peace.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L06  Reason and Ignorance: Paine's Vision for the Future
    ───────────────────────────────────────────────── */
    {
      id: "rom-l06",
      title: "Reason and Ignorance: Paine's Vision for Civilisation",
      type: "video",
      duration: 11,
      objectives: [
        "Explain Paine's distinction between society and government",
        "Describe Paine's confidence in reason as the engine of political progress",
        "Evaluate the lasting influence of Rights of Man on democratic movements",
      ],
      chunks: [
        {
          id: "rom-l06-c1",
          title: "Society and Government: A Crucial Distinction",
          content:
            "One of Paine's most enduring contributions to political thought is his sharp distinction between society and government. Society, Paine argues, is produced by the needs and wants of individuals — it is the natural result of human sociability, cooperation, and mutual dependence. Government, by contrast, is produced by our wickedness — it is a necessary restraint on behaviour that would otherwise undermine social cooperation. Society is positive and constructive; government is, at best, a necessary evil. From this distinction flows Paine's characteristic optimism: if most social cooperation occurs naturally, then the apparatus of government can be kept minimal. The bloated bureaucracies, standing armies, and aristocratic sinecures of European monarchies are not necessary features of governance but parasitic growths that serve the interests of those in power, not the people they claim to govern. A properly constituted republic would require only a fraction of the apparatus — and the expense — that hereditary governments demand.",
        },
        {
          id: "rom-l06-c2",
          title: "The March of Reason Against Ignorance",
          content:
            "Paine concludes Rights of Man with a sweeping vision of historical progress. Two forces operate upon the great bulk of mankind: reason and ignorance. If either can be rendered sufficiently extensive in a country, the machinery of government runs easily. Reason obeys itself; ignorance submits to whatever is dictated to it. The two modes of government that prevail in the world correspond to these forces: government by election and representation, grounded in reason, and government by hereditary succession, grounded in ignorance. Paine is confident that reason is winning. The American and French Revolutions have demonstrated that hereditary government is neither inevitable nor irreplaceable. Once the spell of prescription is broken — once people see that they can govern themselves — the old systems lose their psychological hold. Paine predicts that the revolutionary impulse will spread beyond France and America to the rest of Europe and eventually the world, creating a new era of republican government, international peace, and human flourishing.",
        },
        {
          id: "rom-l06-c3",
          title: "Legacy: Rights of Man and the Democratic Tradition",
          content:
            "The influence of Rights of Man extends far beyond its immediate controversy with Burke. Its assertion that government exists to serve the people — not the reverse — became foundational to modern democratic theory. Its proposal that the state has a positive obligation to provide education, pensions, and poverty relief anticipated the welfare-state philosophies of the nineteenth and twentieth centuries. Its argument for progressive taxation influenced generations of fiscal reform. And its insistence that every generation has the sovereign right to govern itself remains a living principle in constitutional debate worldwide. Paine wrote for working people in language they could understand — plain, direct, and scornful of aristocratic mystification. This deliberate accessibility was itself a political act: Paine believed that political argument should not be the exclusive province of the educated elite. By writing lucidly for a mass audience, he helped create the public sphere in which democratic citizenship became possible.",
        },
      ],
      flashcards: [
        {
          id: "rom-l06-f1",
          front: "Paine's distinction: society vs government",
          back: "Society is produced by human needs and cooperation (positive and natural). Government is produced by our wickedness (a necessary restraint). Most social order is natural; bloated government serves elites, not the people.",
        },
        {
          id: "rom-l06-f2",
          front: "Reason vs ignorance (Paine's historical vision)",
          back: "Government by election and representation is grounded in reason; hereditary government is grounded in ignorance. Paine believed reason was winning and would spread republican government worldwide.",
        },
        {
          id: "rom-l06-f3",
          front: "Paine's rhetorical strategy",
          back: "He wrote in plain, accessible language for working people — rejecting aristocratic mystification. This accessibility was itself a political act, helping create the mass public sphere necessary for democratic citizenship.",
        },
        {
          id: "rom-l06-f4",
          front: "Lasting legacy of Rights of Man",
          back: "Foundational text for democratic theory, welfare-state philosophy, progressive taxation, and generational sovereignty. Its principles inform constitutional debate worldwide and shaped the democratic tradition in the Atlantic world and beyond.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L07  Final Assessment
    ───────────────────────────────────────────────── */
    {
      id: "rom-l07",
      title: "Rights of Man: Comprehensive Assessment",
      type: "quiz",
      duration: 9,
      objectives: ["Evaluate mastery of Paine's arguments, historical context, and political philosophy"],
      questions: [
        {
          id: "rom-l07-q1",
          text: "What does Paine mean when he says Burke 'weeps for the plumage and forgets the dying bird'?",
          options: [
            { id: "a", text: "Burke was more concerned with natural history than politics" },
            { id: "b", text: "Burke mourned the loss of aristocratic ceremony while ignoring the suffering of the common people under the ancien régime" },
            { id: "c", text: "Burke was secretly sympathetic to the Revolution" },
            { id: "d", text: "Burke failed to notice that France had no monarchy to begin with" },
          ],
          correctOptionId: "b",
          explanation:
            "Paine accused Burke of lamenting the end of aristocratic splendour ('the plumage') while remaining indifferent to the genuine misery ('the dying bird') that the old regime imposed on millions of ordinary French citizens.",
        },
        {
          id: "rom-l07-q2",
          text: "What role does the American Revolution play in Paine's argument?",
          options: [
            { id: "a", text: "Paine argues America should reconquer the colonies lost by Britain" },
            { id: "b", text: "It serves as practical proof that a large, diverse nation can govern itself through republican institutions without monarchy, aristocracy, or an established church" },
            { id: "c", text: "Paine uses it to argue that all revolution inevitably fails" },
            { id: "d", text: "It demonstrates that only small countries can be republics" },
          ],
          correctOptionId: "b",
          explanation:
            "Paine cites the American republic as living proof that self-government works at scale — undermining Burke's claim that hereditary government is the only stable form of political organisation.",
        },
        {
          id: "rom-l07-q3",
          text: "Why does Paine call government 'a necessary evil'?",
          options: [
            { id: "a", text: "He believes all political leaders are corrupt" },
            { id: "b", text: "Society naturally cooperates through human needs has; government is a restraint necessitated by our wickedness, so it should be kept minimal" },
            { id: "c", text: "Government was invented by monarchs to oppress the people" },
            { id: "d", text: "He believes anarchy is the ideal form of political organisation" },
          ],
          correctOptionId: "b",
          explanation:
            "Paine distinguishes society (natural cooperation) from government (restraint on misbehaviour). Since most social order is naturally produced, government should be limited to what society cannot achieve on its own — making it necessary but inherently restrictive.",
        },
        {
          id: "rom-l07-q4",
          text: "Which of the following best describes Paine's view of the French Declaration of Rights?",
          options: [
            { id: "a", text: "A dangerous abstraction with no practical value" },
            { id: "b", text: "A correct statement of self-evident principles — sovereignty resides in the nation, men are born free, and law expresses the general will" },
            { id: "c", text: "An inadequate document that should have proclaimed France a monarchy" },
            { id: "d", text: "A purely ceremonial document with no binding authority" },
          ],
          correctOptionId: "b",
          explanation:
            "Paine enthusiastically defended the Declaration, arguing that its first three articles — freedom, equality, and national sovereignty — comprehend in general terms the whole of a Declaration of Rights, with subsequent articles being elucidations.",
        },
        {
          id: "rom-l07-q5",
          text: "How does Paine anticipate the concept of generational sovereignty in modern constitutional theory?",
          options: [
            { id: "a", text: "By arguing that constitutions should never be amended" },
            { id: "b", text: "By insisting that no past generation has the right to bind posterity — each living generation must be free to choose and revise its own political arrangements" },
            { id: "c", text: "By proposing that only the founding generation has authority over the constitution" },
            { id: "d", text: "By arguing that hereditary monarchy is the most stable form of government" },
          ],
          correctOptionId: "b",
          explanation:
            "Paine's principle of generational sovereignty — that the living cannot be bound by the dead — remains foundational in constitutional theory, influencing debates about constitutional amendment, sunset clauses, and the legitimacy of long-standing political arrangements.",
        },
      ],
    },
  ],
};
