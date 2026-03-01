import type { LearningModule } from "@/lib/modules/types";

// High-quality curriculum module derived from EPUB.
// Source: G:\My Drive\15_E-BOOKS\file004299.epub
// Author: Alexander Hamilton, James Madison, John Jay  |  Subject: History & Political Science

export const TheFederalistPapersAlexanderHamiltonJamesMadModule: LearningModule = {
  id: "the-federalist-papers-alexander-hamilton-james-mad",
  title: "The Federalist Papers",
  description:
    "The eighty-five essays collectively known as The Federalist — written by Alexander Hamilton, James Madison, and John Jay under the pseudonym 'Publius' in 1787-1788 — constitute the most influential defence of the United States Constitution ever published. Addressed to the citizens of New York during the ratification debate, they systematically argue for a strong federal union, separation of powers, checks and balances, representative government, and the protection of individual liberty within a republican framework.",
  subject: "History",
  tags: ["epub-derived", "curriculum", "interactive", "political-science", "constitution", "federalism"],
  minAge: 18,
  maxAge: 99,
  version: "2.0.0",
  learningObjectives: [
    "Explain the historical context and purpose of The Federalist Papers",
    "Describe the dangers of disunion and foreign influence that Publius warns against",
    "Analyse Madison's theory of faction in Federalist No. 10 and its republican remedy",
    "Explain the separation of powers among the three branches and the logic of checks and balances",
    "Evaluate Hamilton's defence of an independent judiciary and judicial review",
    "Describe the structure and powers of Congress as outlined in the essays",
    "Assess the lasting influence of The Federalist on American constitutional interpretation",
  ],
  lessons: [

    /* ─────────────────────────────────────────────────
       L01  The Case for Union
    ───────────────────────────────────────────────── */
    {
      id: "fed-l01",
      title: "The Case for Union: Why the Articles of Confederation Failed",
      type: "video",
      duration: 12,
      objectives: [
        "Describe the weaknesses of the Articles of Confederation that prompted the Constitutional Convention",
        "Summarise Hamilton's argument in Federalist No. 1 for deliberate constitutional choice",
        "Explain Jay's warnings about foreign threats to a disunited America",
      ],
      chunks: [
        {
          id: "fed-l01-c1",
          title: "Federalist No. 1: A New Kind of Political Question",
          content:
            "Hamilton opens The Federalist with a sweeping claim: the citizens of America are being asked to decide, through deliberation and free choice, a question of the highest importance — whether societies of men are capable of establishing good government from reflection and choice, or whether they are forever destined to depend on accident and force. After full experience of the insufficiency of the existing federal government under the Articles of Confederation, Americans are invited to deliberate upon a new constitution. Hamilton acknowledges that the debate will be fierce, that motives on both sides will be mixed, and that private interests will disguise themselves as public concerns. But he insists that the question deserves the most careful and dispassionate consideration, because its consequences comprehend nothing less than the existence of the Union, the safety of the parts of which it is composed, and the fate of an empire that is, in many respects, the most interesting in the world.",
        },
        {
          id: "fed-l01-c2",
          title: "Jay on Foreign Dangers: Federalist Nos. 2-5",
          content:
            "John Jay authors the first substantive group of essays, focusing on the dangers from foreign force and influence. When the people of America reflect that the question before them is one of the most important that has ever engaged their attention, Jay writes, the propriety of taking a comprehensive and serious view of it must be evident. Jay argues that a united America under a single federal government would be far more secure against foreign threats than thirteen separate states or several regional confederacies. A national government could maintain a professional military, conduct diplomacy with a single voice, control trade policy uniformly, and prevent European powers from exploiting divisions among the states. Jay points to the example of Britain's relationship with Scotland before and after the Act of Union: when the two kingdoms were separate, their rivalry invited foreign interference. United, they became a formidable power. American disunion, Jay warns, would similarly invite European manipulation and military aggression.",
        },
        {
          id: "fed-l01-c3",
          title: "Hamilton on Interstate Conflict: Federalist Nos. 6-8",
          content:
            "Hamilton extends the argument to dangers from within. If the Union dissolved, the resulting independent states or confederacies would inevitably come into conflict over commerce, territory, and competing interests — just as European nations had warred for centuries. Hamilton asks Americans to disdain being the instruments of European greatness and envisions instead thirteen states bound together in a strict and indissoluble union, concurring in erecting one great American system. Without union, standing armies would arise as each state or confederacy prepared for conflict with its neighbours. These armies, Hamilton warns, would threaten domestic liberty — a danger that a single, powerful federal government with limited military needs would largely prevent. The choice, in Hamilton's framing, is not between more or less government but between a government capable of securing liberty and a fragmentation that would eventually destroy it.",
        },
      ],
      flashcards: [
        {
          id: "fed-l01-f1",
          front: "Federalist No. 1 — Hamilton's central question",
          back: "Whether societies of men are capable of establishing good government from 'reflection and choice,' or whether they are forever destined to depend on 'accident and force.' The ratification debate would answer this question for the world.",
        },
        {
          id: "fed-l01-f2",
          front: "Jay's argument on foreign threats (Nos. 2-5)",
          back: "A united America under one federal government is far more secure against foreign aggression and manipulation than separate states. Disunion invites European powers to exploit divisions, as happened between England and Scotland before their union.",
        },
        {
          id: "fed-l01-f3",
          front: "Hamilton on interstate conflict (Nos. 6-8)",
          back: "Without union, American states would inevitably conflict over commerce and territory, leading to standing armies that threaten liberty — the very pattern that plagued Europe for centuries.",
        },
        {
          id: "fed-l01-f4",
          front: "Articles of Confederation — key weakness",
          back: "The existing federal government lacked the power to tax, regulate commerce, or enforce its decisions — creating a system so weak that it threatened the survival of the Union itself, prompting the Constitutional Convention.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L02  Faction and the Extended Republic
    ───────────────────────────────────────────────── */
    {
      id: "fed-l02",
      title: "Federalist No. 10: Faction and the Extended Republic",
      type: "video",
      duration: 13,
      objectives: [
        "Define faction as Madison understands it and explain why it is dangerous",
        "Distinguish between removing the causes of faction and controlling its effects",
        "Explain Madison's argument that a large republic better controls faction than a small one",
      ],
      chunks: [
        {
          id: "fed-l02-c1",
          title: "The Problem of Faction",
          content:
            "Federalist No. 10, authored by James Madison, is arguably the most celebrated essay in American political thought. Madison defines a faction as a number of citizens — whether a majority or a minority — who are united and actuated by some common impulse of passion or of interest adverse to the rights of other citizens or to the permanent and aggregate interests of the community. Faction is not a minor nuisance; it is the mortal disease of popular government. History demonstrated that ancient democracies invariably succumbed to factional violence, and many opponents of the proposed Constitution argued that republican government could work only in small, homogeneous states. Madison's genius lies in turning this conventional wisdom on its head: he argues that a well-constructed union provides a proper cure for faction, and that a large republic is actually better equipped to suppress factional mischief than a small one.",
        },
        {
          id: "fed-l02-c2",
          title: "Two Methods: Removing Causes vs Controlling Effects",
          content:
            "Madison identifies two theoretical approaches to the problem of faction: remove its causes, or control its effects. Removing the causes has two variants, both unacceptable. The first — destroying liberty — eliminates faction by eliminating the freedom that enables it, which is worse than the disease itself. The second — giving every citizen the same opinions, passions, and interests — is impracticable because human diversity in talents, opinions, and property is ineradicable. The latent causes of faction are sown in the nature of man: differences in ability, in property, in religion, in attachment to different leaders. Since the causes cannot be eliminated without destroying liberty or human nature, Madison concludes that the only viable strategy is to control faction's effects — to design institutions that prevent any faction, even a majority faction, from imposing its will at the expense of minority rights or the public good.",
        },
        {
          id: "fed-l02-c3",
          title: "The Extended Republic: Madison's Revolutionary Insight",
          content:
            "Madison's remedy relies on two features of the proposed Constitution: representative government and the extended republic. In a pure democracy, where citizens assemble and administer government directly, there is no check on majority faction — the majority simply rules. But in a republic, where citizens elect representatives to govern on their behalf, a filter of deliberation interposes between popular passion and legislative action. Representatives may refine and enlarge the public views, passing them through a medium of a chosen body of citizens whose wisdom may best discern the true interest of the country. More radically, Madison argues that extending the sphere of the republic — encompassing a greater variety of parties, interests, and geographic regions — makes it less probable that any single faction will constitute a majority. In a small republic, a single interest may dominate; in a large republic, the sheer diversity of factions prevents any one from achieving tyrannical control. This was a revolutionary insight that directly contradicted Montesquieu's widely accepted view that republics could function only in small territories.",
        },
      ],
      flashcards: [
        {
          id: "fed-l02-f1",
          front: "Faction (Madison's definition)",
          back: "A number of citizens united by a common passion or interest adverse to the rights of other citizens or to the permanent interests of the community — the 'mortal disease' of popular government.",
        },
        {
          id: "fed-l02-f2",
          front: "Why causes of faction cannot be removed",
          back: "Destroying liberty (worse than the disease) or making all citizens identical (impossible) are the only ways to remove faction's causes. Human diversity in talents, property, and opinions is ineradicable.",
        },
        {
          id: "fed-l02-f3",
          front: "The extended republic argument",
          back: "A large republic with diverse factions prevents any single faction from forming a tyrannical majority — directly contradicting Montesquieu's claim that republics work only in small territories.",
        },
        {
          id: "fed-l02-f4",
          front: "Representative government as faction filter",
          back: "Elected representatives 'refine and enlarge' public views through deliberation, interposing a check between popular passion and legislative action — preventing the raw majoritarianism of pure democracy.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L03  Separation of Powers and Checks & Balances
    ───────────────────────────────────────────────── */
    {
      id: "fed-l03",
      title: "Separation of Powers and the System of Checks and Balances",
      type: "video",
      duration: 13,
      objectives: [
        "Explain Madison's argument in Federalist No. 51 for institutional self-defence",
        "Describe how each branch checks the others in the proposed Constitution",
        "Analyse Madison's observation that 'if men were angels, no government would be necessary'",
      ],
      chunks: [
        {
          id: "fed-l03-c1",
          title: "Federalist No. 51: Ambition Must Counteract Ambition",
          content:
            "In Federalist No. 51, Madison presents one of the most famous passages in American political writing: 'If men were angels, no government would be necessary. If angels were to govern men, neither external nor internal controls on government would be necessary.' Since neither condition holds, government must be designed to control the governed — and then be obliged to control itself. Madison's solution is to give each branch the constitutional means and personal motives to resist encroachment by the others. Ambition must be made to counteract ambition. The interest of the man must be connected with the constitutional rights of the place. This is not a cynical observation but a design principle: rather than relying on the virtue of officeholders, the Constitution structures incentives so that self-interested behaviour by officials in each branch naturally protects the separation of powers.",
        },
        {
          id: "fed-l03-c2",
          title: "The Legislative Branch: Bicameralism and Divided Power",
          content:
            "Madison recognises that in a republic, the legislature necessarily predominates because it is closest to the people and possesses the broadest enumerated powers. This predominance creates the risk that Congress might absorb the functions of the other branches — concentrating all power in one body, which Madison considers the very definition of tyranny. The remedy is bicameralism: dividing Congress into a Senate and a House of Representatives with different modes of election, different terms, and different constituencies. The House, elected directly by the people every two years, channels popular will. The Senate, originally chosen by state legislatures for six-year terms, provides stability, deliberation, and protection of state interests. Each chamber must consent to legislation, creating a double check within the legislative branch itself. Additionally, the presidential veto gives the executive a role in legislation, further preventing legislative overreach.",
        },
        {
          id: "fed-l03-c3",
          title: "The Executive and the Judiciary: Energy and Independence",
          content:
            "Hamilton argues in his essays on the executive (particularly Federalist Nos. 70-77) that 'energy in the executive is a leading character in the definition of good government.' A vigorous executive is essential for national defence, enforcement of the laws, protection of property, and the security of liberty against faction and anarchy. Hamilton defends the single executive — as opposed to a plural presidency or executive council — on the grounds that unity enables decision, activity, secrecy, and dispatch, while diffusion produces delay, rivalry, and the evasion of accountability. For the judiciary, Hamilton's Federalist No. 78 provides the foundational argument for judicial independence and judicial review. Judges must hold office during good behaviour (life tenure) to insulate them from political pressure. And the courts must have the power to declare legislative acts void when they contradict the Constitution — because the Constitution is the fundamental law, and no legislative act inconsistent with it can be valid.",
        },
      ],
      flashcards: [
        {
          id: "fed-l03-f1",
          front: "Federalist No. 51 — 'If men were angels'",
          back: "Madison's famous passage: since humans are neither angelic nor governed by angels, government must control the governed AND control itself — through institutional design that makes 'ambition counteract ambition.'",
        },
        {
          id: "fed-l03-f2",
          front: "Bicameralism as a check on legislative dominance",
          back: "Dividing Congress into Senate and House — with different election modes, terms, and constituencies — prevents the legislative branch from concentrating all power, which Madison considered the definition of tyranny.",
        },
        {
          id: "fed-l03-f3",
          front: "Hamilton on executive energy (Federalist No. 70)",
          back: "A vigorous, unitary executive is essential for good government — unity enables decision, activity, secrecy, and dispatch; plural executives produce delay, rivalry, and evasion of accountability.",
        },
        {
          id: "fed-l03-f4",
          front: "Judicial review (Federalist No. 78)",
          back: "Hamilton's foundational argument: courts must declare legislative acts void when they contradict the Constitution, because the Constitution is fundamental law — no ordinary legislation inconsistent with it can be valid.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L04  The Judiciary and the Bill of Rights
    ───────────────────────────────────────────────── */
    {
      id: "fed-l04",
      title: "The Judiciary, Individual Rights, and the Constitution's Legacy",
      type: "video",
      duration: 12,
      objectives: [
        "Explain Hamilton's defence of judicial independence through life tenure",
        "Describe the Anti-Federalist demand for a Bill of Rights and Hamilton's counterarguments",
        "Assess the lasting influence of The Federalist on constitutional interpretation",
      ],
      chunks: [
        {
          id: "fed-l04-c1",
          title: "Federalist No. 78: The Least Dangerous Branch",
          content:
            "Hamilton calls the judiciary 'the least dangerous branch' because it possesses neither the sword of the executive nor the purse of the legislature — it has 'neither force nor will, but merely judgment.' Yet this very weakness makes judicial independence essential. Without life tenure and salary protections, judges would be vulnerable to pressure from the political branches and unable to serve as the guardians of the Constitution. Hamilton argues that the Constitution is a limited grant of power from the people to the government. When the legislature exceeds those limits, the courts must step in — not because judges are superior to legislators, but because the people's will, as expressed in the Constitution, is superior to both. Judicial review is therefore not an assertion of judicial supremacy but a defence of popular sovereignty against legislative overreach. This argument became the basis for Chief Justice John Marshall's landmark decision in Marbury v. Madison (1803), which established judicial review in American law.",
        },
        {
          id: "fed-l04-c2",
          title: "The Bill of Rights Debate",
          content:
            "One of the most contentious objections to the Constitution was the absence of a Bill of Rights — a catalogue of specific individual liberties that the federal government could not violate. In Federalist No. 84, Hamilton made a surprising argument against including one: the Constitution is itself a Bill of Rights, he claimed, because it is a limited grant of enumerated powers. The government can only exercise the powers specifically delegated to it; everything else remains with the states or the people. A separate Bill of Rights, Hamilton warned, might actually be dangerous, because listing specific rights could imply that unlisted rights did not exist. If you declare that the government shall not restrict the press, Hamilton reasoned, this might imply that the government otherwise could have restricted the press — creating a pretence for power that does not exist. Despite this argument, the demand for explicit protections was overwhelming, and the first ten amendments were ratified in 1791.",
        },
        {
          id: "fed-l04-c3",
          title: "The Federalist's Enduring Influence",
          content:
            "The Federalist Papers are not merely historical artefacts; they remain an active source of constitutional authority. The Supreme Court has cited them in hundreds of decisions as evidence of the original understanding of the Constitution's text. Madison's theory of faction informs debates about campaign finance, voting rights, and the structure of political parties. Hamilton's arguments about executive energy shape discussions of presidential power in national security and emergency governance. The principle that government must be designed to function with imperfect human beings — rather than relying on the virtue of officeholders — remains the foundational insight of American constitutional design. As the introduction to the Gideon edition (1818) noted, The Federalist represents the only authoritative text revised by its authors, preserving the original intellectual framework in which the Constitution was both defended and ratified.",
        },
      ],
      flashcards: [
        {
          id: "fed-l04-f1",
          front: "The least dangerous branch (Hamilton)",
          back: "The judiciary possesses neither sword nor purse — only judgment. Its very weakness makes independence (life tenure, salary protections) essential for it to serve as guardian of the Constitution.",
        },
        {
          id: "fed-l04-f2",
          front: "Hamilton's argument against a Bill of Rights (No. 84)",
          back: "The Constitution is a limited grant of enumerated powers — listing specific rights might imply that unlisted rights don't exist, creating a 'pretence for power' the government doesn't possess.",
        },
        {
          id: "fed-l04-f3",
          front: "Ninth Amendment (response to Hamilton's concern)",
          back: "Ratified in 1791, it states that the enumeration of certain rights shall not be construed to deny others retained by the people — directly addressing Hamilton's worry about implied powers.",
        },
        {
          id: "fed-l04-f4",
          front: "Lasting influence of The Federalist",
          back: "Cited in hundreds of Supreme Court decisions as evidence of original constitutional understanding. Madison's faction theory and Hamilton's executive energy arguments remain active in contemporary legal and political debate.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L05  Checkpoint Quiz
    ───────────────────────────────────────────────── */
    {
      id: "fed-l05",
      title: "The Federalist Papers: Checkpoint Quiz",
      type: "quiz",
      duration: 8,
      objectives: ["Assess understanding of union, faction, separation of powers, and judicial review"],
      questions: [
        {
          id: "fed-l05-q1",
          text: "In Federalist No. 10, what does Madison propose as the primary remedy for the 'mischiefs of faction'?",
          options: [
            { id: "a", text: "Abolish political parties through legislation" },
            { id: "b", text: "Control faction's effects through representative government and an extended republic with diverse interests" },
            { id: "c", text: "Give the president absolute veto power over all legislation" },
            { id: "d", text: "Restrict voting to property owners to ensure homogeneity" },
          ],
          correctOptionId: "b",
          explanation:
            "Madison argues that faction's causes are ineradicable, so the solution is controlling its effects. Representative government filters popular passions, while a large republic prevents any single faction from constituting a majority.",
        },
        {
          id: "fed-l05-q2",
          text: "Why does Madison describe the concentration of all government powers in one body as 'the very definition of tyranny'?",
          options: [
            { id: "a", text: "Because a single body is always inefficient" },
            { id: "b", text: "Because without separation of powers and mutual checks, nothing prevents those who make the laws from enforcing and judging them to serve their own interests" },
            { id: "c", text: "Because the Constitution explicitly prohibits it in Article I" },
            { id: "d", text: "Because foreign nations would refuse to trade with such a government" },
          ],
          correctOptionId: "b",
          explanation:
            "Madison's argument is that concentrated power eliminates accountability: those who make laws can also enforce and interpret them in their own favour, destroying liberty and the rule of law.",
        },
        {
          id: "fed-l05-q3",
          text: "What does Hamilton mean by calling the judiciary 'the least dangerous branch'?",
          options: [
            { id: "a", text: "The judiciary has the smallest budget" },
            { id: "b", text: "The judiciary controls neither the military nor taxation — it has only judgment, making it dependent on the other branches for enforcement" },
            { id: "c", text: "Judges are the least politically ambitious government officials" },
            { id: "d", text: "The judiciary handles only minor legal disputes" },
          ],
          correctOptionId: "b",
          explanation:
            "Hamilton argues that the judiciary possesses 'neither force nor will, but merely judgment.' Its inability to enforce its own decisions makes it the branch least capable of threatening liberty — and makes judicial independence all the more essential.",
        },
        {
          id: "fed-l05-q4",
          text: "According to Hamilton in Federalist No. 84, why might a Bill of Rights actually be dangerous?",
          options: [
            { id: "a", text: "It would slow down the ratification process" },
            { id: "b", text: "Listing specific rights might imply that unlisted rights do not exist, creating a pretence for government power that was never delegated" },
            { id: "c", text: "Individual rights conflict with the concept of federalism" },
            { id: "d", text: "The states already had their own bills of rights, making a federal one redundant" },
          ],
          correctOptionId: "b",
          explanation:
            "Hamilton worried that enumerating specific protections might imply that federal power extended to everything not explicitly protected — a concern later addressed by the Ninth Amendment.",
        },
        {
          id: "fed-l05-q5",
          text: "What is the fundamental design principle Madison articulates in Federalist No. 51?",
          options: [
            { id: "a", text: "Government should rely on the personal virtue of officeholders" },
            { id: "b", text: "The military should serve as the ultimate check on government" },
            { id: "c", text: "Ambition must be made to counteract ambition — institutional design should use self-interest to protect the separation of powers" },
            { id: "d", text: "Direct democracy is preferable to representative government" },
          ],
          correctOptionId: "c",
          explanation:
            "Madison's insight is that relying on virtue is insufficient. Instead, the Constitution structures incentives so that officeholders' self-interest ('the interest of the man') naturally defends their branch's constitutional prerogatives.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L06  Final Assessment
    ───────────────────────────────────────────────── */
    {
      id: "fed-l06",
      title: "The Federalist Papers: Comprehensive Assessment",
      type: "quiz",
      duration: 9,
      objectives: ["Evaluate mastery of all major concepts from The Federalist Papers"],
      questions: [
        {
          id: "fed-l06-q1",
          text: "Which author wrote the essays on foreign threats to the Union (Nos. 2-5)?",
          options: [
            { id: "a", text: "Alexander Hamilton" },
            { id: "b", text: "James Madison" },
            { id: "c", text: "John Jay" },
            { id: "d", text: "Thomas Jefferson" },
          ],
          correctOptionId: "c",
          explanation:
            "John Jay authored the early essays on dangers from foreign force and influence, arguing that a united America under a single federal government would be far more secure than separate states.",
        },
        {
          id: "fed-l06-q2",
          text: "How does Madison's extended republic argument challenge Montesquieu's political theory?",
          options: [
            { id: "a", text: "Madison agrees with Montesquieu that only small republics can work" },
            { id: "b", text: "Madison argues that large republics are actually better at controlling faction because their diversity prevents any single interest from forming a tyrannical majority" },
            { id: "c", text: "Madison claims Montesquieu never wrote about republics" },
            { id: "d", text: "Madison proposes abolishing state governments entirely" },
          ],
          correctOptionId: "b",
          explanation:
            "Montesquieu held that republics could function only in small, homogeneous territories. Madison reversed this, arguing that a large, diverse republic is actually better at preventing majority tyranny through the multiplicity of competing factions.",
        },
        {
          id: "fed-l06-q3",
          text: "Why does Hamilton defend a single executive rather than a plural presidency?",
          options: [
            { id: "a", text: "A single president is always wiser than a council" },
            { id: "b", text: "Unity enables decision, activity, secrecy, and dispatch; plurality produces delay, rivalry, and evasion of accountability" },
            { id: "c", text: "The Constitution explicitly bans executive councils" },
            { id: "d", text: "George Washington demanded a unitary executive" },
          ],
          correctOptionId: "b",
          explanation:
            "Hamilton argues in Federalist No. 70 that energy in the executive requires unity. A plural executive would diffuse responsibility, create internal rivalries, and make it impossible to hold any single person accountable.",
        },
        {
          id: "fed-l06-q4",
          text: "Under what pseudonym did Hamilton, Madison, and Jay publish The Federalist?",
          options: [
            { id: "a", text: "Brutus" },
            { id: "b", text: "Cato" },
            { id: "c", text: "Publius" },
            { id: "d", text: "Cincinnatus" },
          ],
          correctOptionId: "c",
          explanation:
            "All eighty-five essays were published under the pseudonym 'Publius,' a reference to Publius Valerius Publicola, one of the founders of the Roman Republic — symbolising their commitment to republican government.",
        },
        {
          id: "fed-l06-q5",
          text: "What is the primary purpose of bicameralism in the proposed Constitution?",
          options: [
            { id: "a", text: "To ensure that all legislation is debated twice to improve its quality" },
            { id: "b", text: "To divide the dominant legislative branch internally, preventing it from concentrating all government power" },
            { id: "c", text: "To represent the interests of foreign allies in the Senate" },
            { id: "d", text: "To give the president a legislative role through the Senate" },
          ],
          correctOptionId: "b",
          explanation:
            "Madison recognised that the legislature naturally predominates in a republic. Splitting it into two chambers with different constituencies, terms, and election modes creates an internal check against legislative tyranny.",
        },
      ],
    },
  ],
};
