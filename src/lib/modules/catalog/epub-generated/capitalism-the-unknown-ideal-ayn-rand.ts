import type { LearningModule } from "@/lib/modules/types";

// High-quality curriculum module derived from EPUB.
// Source: G:\My Drive\15_E-BOOKS\file006993.epub
// Author: Ayn Rand  |  Subject: Philosophy/Economics

export const CapitalismTheUnknownIdealAynRandModule: LearningModule = {
  id: "capitalism-the-unknown-ideal-ayn-rand",
  title: "Capitalism: The Unknown Ideal",
  description:
    "A comprehensive study of Ayn Rand's philosophical defense of laissez-faire capitalism as the only moral social system. This module examines Rand's arguments grounding capitalism in individual rights, her critiques of antitrust law and government regulation, her defense of the gold standard, and her analysis of the relationship between political freedom and economic freedom in the context of Objectivist philosophy.",
  subject: "Philosophy/Economics",
  tags: ["epub-derived", "curriculum", "interactive", "philosophy", "economics", "capitalism", "objectivism", "political-philosophy"],
  minAge: 18,
  maxAge: 99,
  version: "2.0.0",
  learningObjectives: [
    "Articulate Rand's moral argument for capitalism based on individual rights",
    "Explain the Objectivist theory of rights as derived from the requirements of human survival",
    "Analyse Rand's critique of antitrust legislation as punishing productive achievement",
    "Evaluate Alan Greenspan's essay defending the gold standard within the Objectivist framework",
    "Compare Rand's view of the 'mixed economy' with alternative political-economic theories",
    "Assess Rand's historical analysis of the Industrial Revolution as a period of liberation",
    "Apply Objectivist principles to contemporary debates about regulation and free markets",
  ],
  lessons: [

    /* ─────────────────────────────────────────────────
       L01  The Moral Foundations of Capitalism
    ───────────────────────────────────────────────── */
    {
      id: "ci-l01",
      title: "The Moral Foundations of Capitalism",
      type: "video",
      duration: 12,
      objectives: [
        "Explain why Rand considers capitalism the only moral social system",
        "Describe how individual rights derive from the requirements of human survival",
        "Distinguish Rand's moral defense from utilitarian and pragmatic defenses of capitalism",
      ],
      chunks: [
        {
          id: "ci-l01-c1",
          title: "Capitalism as a Moral System",
          content:
            "Rand's central thesis is that capitalism has never received a proper moral defense. Economists have defended it on utilitarian grounds — it produces more wealth, raises living standards, and allocates resources efficiently — but these pragmatic arguments concede the moral high ground to capitalism's opponents, who can always reply that efficiency should be sacrificed for the sake of 'social justice' or equality. Rand rejects this approach entirely. She argues that capitalism is the only social system consistent with the nature of man as a rational being. Because human survival requires the free exercise of individual judgment and productive effort, any system that restricts economic freedom necessarily violates the conditions of human life. Capitalism is not merely efficient; it is morally right because it is the only system that recognises and protects individual rights. The failure to make this moral case, Rand contends, is why capitalism has been losing ground to collectivism throughout the twentieth century.",
        },
        {
          id: "ci-l01-c2",
          title: "The Objectivist Theory of Rights",
          content:
            "Rand derives individual rights from a single biological fact: the survival requirements of a rational being. Unlike animals, which survive by instinct and physical prowess, human beings survive by reason — by identifying the facts of reality, forming concepts, and applying knowledge to production. This process requires freedom: the freedom to think without coercion, to act on one's own judgment, and to keep the product of one's effort. Rights, in Rand's system, are moral principles defining and sanctioning an individual's freedom of action in a social context. They are not permissions granted by society or government but recognitions of facts about human nature. The right to life is the source of all rights; the right to property is their implementation. Without property rights — without the right to keep, use, and dispose of the material values one has created — all other rights are meaningless, because human survival depends on the production and consumption of material goods.",
        },
        {
          id: "ci-l01-c3",
          title: "The Role of Government: A Night-Watchman State",
          content:
            "If individual rights are absolute moral principles, then the only legitimate function of government is to protect them. Rand advocates a minimal state — sometimes called a night-watchman state — whose powers are limited to three functions: the military (to protect against foreign aggression), the police (to protect against domestic criminals), and the courts (to settle disputes according to objective law). Any government action beyond these functions constitutes the initiation of physical force against innocent citizens and is therefore immoral. Taxation by force is a form of theft; economic regulation is a form of censorship of the mind's productive application; welfare redistribution is a form of slavery, compelling some to work for others without voluntary consent. Rand acknowledges that her position is radical but insists that half-measures — the 'mixed economy' that combines elements of freedom and control — are inherently unstable. They create economic distortions that generate calls for further intervention, leading inevitably toward full statism.",
        },
      ],
      flashcards: [
        {
          id: "ci-l01-f1",
          front: "Rand's moral case for capitalism",
          back:
            "Capitalism is the only social system consistent with the nature of man as a rational being. It is morally right because it alone recognises and protects individual rights — not merely because it is economically efficient.",
        },
        {
          id: "ci-l01-f2",
          front: "Objectivist theory of rights",
          back:
            "Rights are moral principles defining freedom of action in a social context, derived from the survival requirements of a rational being. The right to life is the source; the right to property is the practical implementation.",
        },
        {
          id: "ci-l01-f3",
          front: "Night-watchman state",
          back:
            "Rand's ideal government limited to three functions: military defense, police protection against criminals, and courts to settle disputes — any action beyond these constitutes the initiation of force against citizens.",
        },
        {
          id: "ci-l01-f4",
          front: "Instability of the mixed economy",
          back:
            "Rand argues that combining economic freedom with government control creates distortions that generate demands for further intervention, leading inevitably toward full statism — making half-measures inherently unstable.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L02  Antitrust, Patents, and the Assault on Big Business
    ───────────────────────────────────────────────── */
    {
      id: "ci-l02",
      title: "Antitrust, Patents, and the Assault on Big Business",
      type: "video",
      duration: 12,
      objectives: [
        "Summarise Rand's critique of antitrust law as punishment for productive success",
        "Explain how Rand defends patents and copyrights as applications of property rights",
        "Analyse the concept of economic power versus political power in Objectivist thought",
      ],
      chunks: [
        {
          id: "ci-l02-c1",
          title: "The Antitrust Assault on Achievement",
          content:
            "Rand and her associate Alan Greenspan argue that antitrust law is fundamentally unjust because it punishes businesses for being too successful. The Sherman Act and its successors penalise companies for practices such as 'predatory' pricing (charging too little), 'monopolistic' pricing (charging too much), and 'administered' pricing (charging the same as competitors). This contradictory set of prohibitions means that any business decision can be construed as a violation, leaving every successful firm in a state of legal uncertainty. Rand sees this as a deliberate assault on productive achievement — a system of laws so vague and contradictory that enforcement is necessarily arbitrary, placing the fate of productive enterprises in the hands of government officials guided by politics rather than justice. The real target of antitrust, she argues, is not monopoly but success itself. A genuinely free market cannot produce coercive monopolies because consumers always have the option to take their business elsewhere. Only government has the power to exclude competitors through legal barriers.",
        },
        {
          id: "ci-l02-c2",
          title: "Economic Power Versus Political Power",
          content:
            "A crucial distinction in Rand's analysis is between economic power and political power. Economic power is the ability to produce goods and services that others voluntarily choose to buy. A large corporation has enormous economic power, but this power can only be exercised through voluntary exchange — the corporation cannot force anyone to buy its products. Political power, by contrast, is the power of physical coercion — the power to compel obedience through fines, imprisonment, and ultimately, violence. Only governments possess political power, and when businesses seek government favours — protective tariffs, licensing requirements, regulatory barriers that exclude competitors — they are converting political power into economic advantage. Rand argues that the proper response to 'crony capitalism' is not more regulation (which only increases the political power available for abuse) but the strict separation of state and economics, just as the First Amendment separates state and religion.",
        },
        {
          id: "ci-l02-c3",
          title: "Intellectual Property: Patents and Copyrights",
          content:
            "Rand vigorously defends patents and copyrights as legitimate applications of property rights to the products of the mind. Just as a farmer owns the crops produced by his labour on physical land, an inventor owns the ideas produced by his intellectual effort. Patents grant a temporary monopoly on the use of an invention — typically twenty years — after which the invention enters the public domain. Rand considers this time limit a reasonable accommodation to the practical difficulty of enforcing intellectual property over indefinite periods, but she insists that the underlying principle is absolute: creators have a right to the product of their intellectual effort. Without patent and copyright protection, she argues, there would be no incentive for the enormous investment of time, energy, and capital required for significant innovations. Those who oppose intellectual property rights are, in Rand's view, advocating the expropriation of the most productive minds for the benefit of less productive imitators.",
        },
      ],
      flashcards: [
        {
          id: "ci-l02-f1",
          front: "Rand's critique of antitrust law",
          back:
            "Antitrust law punishes businesses for success with contradictory prohibitions (pricing too high, too low, or the same as competitors), making enforcement arbitrary and targeting productive achievement rather than genuine coercion.",
        },
        {
          id: "ci-l02-f2",
          front: "Economic power vs political power",
          back:
            "Economic power operates through voluntary exchange (no coercion). Political power operates through physical force (government). Only political power can create coercive monopolies; economic power alone cannot.",
        },
        {
          id: "ci-l02-f3",
          front: "Rand on patents and copyrights",
          back:
            "Intellectual property rights are applications of property rights to products of the mind. Creators own their inventions and ideas just as farmers own their crops, with time-limited patents as a practical accommodation.",
        },
        {
          id: "ci-l02-f4",
          front: "Separation of state and economics",
          back:
            "Rand argues for strict separation of government and economic activity — analogous to the First Amendment's separation of church and state — to prevent political power from being converted into economic advantage.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L03  The Gold Standard and the Industrial Revolution
    ───────────────────────────────────────────────── */
    {
      id: "ci-l03",
      title: "The Gold Standard and the Industrial Revolution",
      type: "video",
      duration: 13,
      objectives: [
        "Reconstruct Greenspan's defense of the gold standard as protection against government inflation",
        "Explain Rand's revisionist account of the Industrial Revolution as liberation not exploitation",
        "Assess the claim that capitalism ended child labour rather than causing it",
      ],
      chunks: [
        {
          id: "ci-l03-c1",
          title: "Gold and Economic Freedom",
          content:
            "Alan Greenspan's essay 'Gold and Economic Freedom,' published in this collection with Rand's endorsement, argues that the gold standard is not an arbitrary monetary system but the logical monetary expression of a free society. Under a gold standard, the supply of money is anchored to a physical commodity that the government cannot produce at will. This constrains the government's ability to finance deficit spending through inflation — the hidden tax that transfers wealth from savers to debtors and from citizens to the state. Without a gold standard, Greenspan argues, there is no way to protect savings from confiscation through inflation. The Federal Reserve system, created in 1913, was designed to manage a fiat currency freed from the gold constraint, and the result has been a century of chronic inflation punctuated by credit-fueled booms and busts. Between 1787 and 1913, the purchasing power of the dollar was roughly stable; after 1913, it lost over 95 percent of its value. This is not coincidence but the predictable consequence of removing the discipline of gold.",
        },
        {
          id: "ci-l03-c2",
          title: "The Industrial Revolution Reconsidered",
          content:
            "Rand challenges the standard progressive narrative that the Industrial Revolution was a period of capitalist exploitation — dark satanic mills, child labour, sixteen-hour days, starvation wages. She argues that this narrative reverses cause and effect. Before the Industrial Revolution, the condition of the English working class was not pastoral contentment but grinding poverty: high infant mortality, subsistence farming, periodic famine, and widespread child labour in agriculture and domestic service. The factories did not create child labour; they inherited it from a pre-industrial world in which children had always worked. What the factories offered was higher wages for adults, enabling families to eventually withdraw children from the workforce — a process that occurred gradually as rising productivity increased real wages. Government regulation of factory conditions came after, not before, this improvement, and Rand argues that such regulation often slowed the process by raising the cost of employing workers legally, pushing marginal firms into closure or into the underground economy.",
        },
        {
          id: "ci-l03-c3",
          title: "Capitalism and Human Progress",
          content:
            "Rand presents statistics demonstrating that the nineteenth-century period of relatively laissez-faire capitalism produced the greatest improvement in human material conditions in all of history. Life expectancy doubled, infant mortality plummeted, literacy became nearly universal, and the proportion of the population living in extreme poverty fell dramatically. She attributes these gains not to government action — governments in this period were comparatively small and unintrusive — but to the unleashing of individual productive energy through property rights, contract enforcement, and the rule of law. The key mechanism is the profit motive operating in a competitive market: entrepreneurs who satisfy consumers prosper and expand; those who fail to satisfy consumers are disciplined by the loss of capital. This continuous process of creative destruction, Rand argues, explains why capitalist societies innovate faster, produce more wealth, and distribute that wealth more widely than any alternative system, including the welfare states that began to supplant laissez-faire economics in the early twentieth century.",
        },
      ],
      flashcards: [
        {
          id: "ci-l03-f1",
          front: "Greenspan's case for the gold standard",
          back:
            "Gold anchors the money supply to a physical commodity governments cannot produce at will, constraining deficit spending and protecting savings from confiscation through inflation — the hidden tax of fiat money.",
        },
        {
          id: "ci-l03-f2",
          front: "Rand's revisionist view of the Industrial Revolution",
          back:
            "Factories did not create child labour or poverty; they inherited pre-industrial conditions. Rising productivity eventually raised wages enough for families to withdraw children from work, a process regulation often slowed.",
        },
        {
          id: "ci-l03-f3",
          front: "Creative destruction and the profit motive",
          back:
            "Entrepreneurs who satisfy consumers prosper; those who fail lose capital. This competitive process drives innovation, wealth creation, and broad distribution of material progress better than any alternative system.",
        },
        {
          id: "ci-l03-f4",
          front: "Inflation after the Federal Reserve",
          back:
            "Between 1787 and 1913, the dollar's purchasing power was roughly stable. After the Fed was created and gold discipline removed, the dollar lost over 95 percent of its value — the predictable consequence of fiat money.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L04  Checkpoint Quiz: Capitalism and Rights
    ───────────────────────────────────────────────── */
    {
      id: "ci-l04",
      title: "Checkpoint Quiz: Capitalism and Rights",
      type: "quiz",
      duration: 8,
      objectives: ["Assess understanding of Rand's moral defense of capitalism, antitrust critique, and gold standard argument"],
      questions: [
        {
          id: "ci-l04-q1",
          text: "Why does Rand reject utilitarian defenses of capitalism?",
          options: [
            { id: "a", text: "Because capitalism is not actually economically efficient" },
            { id: "b", text: "Because defending capitalism solely on efficiency grounds concedes the moral high ground to collectivists who can invoke 'social justice'" },
            { id: "c", text: "Because Rand opposes all economic calculation" },
            { id: "d", text: "Because utilitarianism supports the gold standard, which Rand rejects" },
          ],
          correctOptionId: "b",
          explanation:
            "Rand argues that pragmatic efficiency arguments let opponents reply that efficiency should be sacrificed for equality or justice. Only a moral defense — that capitalism is the only system consistent with individual rights — can be truly decisive.",
        },
        {
          id: "ci-l04-q2",
          text: "In Rand's view, what is the only legitimate function of government?",
          options: [
            { id: "a", text: "Redistributing wealth to ensure equality of outcomes" },
            { id: "b", text: "Managing the economy through monetary and fiscal policy" },
            { id: "c", text: "Protecting individual rights through military, police, and courts" },
            { id: "d", text: "Providing education, healthcare, and infrastructure" },
          ],
          correctOptionId: "c",
          explanation:
            "Rand's night-watchman state limits government to three functions — military defense, police protection, and courts — all aimed at protecting individual rights. Any action beyond these constitutes the initiation of force.",
        },
        {
          id: "ci-l04-q3",
          text: "How does Rand distinguish economic power from political power?",
          options: [
            { id: "a", text: "Economic power is exercised through voluntary exchange; political power is exercised through physical coercion" },
            { id: "b", text: "Economic power belongs to corporations; political power belongs to individuals" },
            { id: "c", text: "Economic power is unlimited; political power is limited by constitutions" },
            { id: "d", text: "There is no meaningful distinction — both are forms of control" },
          ],
          correctOptionId: "a",
          explanation:
            "Economic power operates through voluntary exchange — no one can be forced to buy a product. Political power operates through coercion — government can compel obedience with fines, imprisonment, or force. Only political power creates coercive monopolies.",
        },
        {
          id: "ci-l04-q4",
          text: "According to Greenspan, what does the gold standard protect against?",
          options: [
            { id: "a", text: "Foreign competition and trade deficits" },
            { id: "b", text: "Government confiscation of savings through inflation via unlimited fiat money creation" },
            { id: "c", text: "Banking fraud and embezzlement" },
            { id: "d", text: "Deflation and falling prices" },
          ],
          correctOptionId: "b",
          explanation:
            "The gold standard anchors the money supply to a physical commodity, constraining the government's ability to finance deficits by printing money — thereby protecting citizens' savings from the hidden tax of inflation.",
        },
        {
          id: "ci-l04-q5",
          text: "What is Rand's explanation for child labour during the Industrial Revolution?",
          options: [
            { id: "a", text: "Factory owners deliberately created child labour to maximise profits" },
            { id: "b", text: "Government mandated child labour to support wartime production" },
            { id: "c", text: "Factories inherited child labour from pre-industrial poverty; rising industrial wages gradually enabled families to withdraw children from work" },
            { id: "d", text: "Child labour was a myth invented by socialist historians" },
          ],
          correctOptionId: "c",
          explanation:
            "Rand argues factories did not create child labour — children worked in agriculture and domestic service long before industrialisation. Rising factory wages for adults gradually enabled families to withdraw children, and regulation often slowed this process.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L05  The Mixed Economy and Its Contradictions
    ───────────────────────────────────────────────── */
    {
      id: "ci-l05",
      title: "The Mixed Economy and Its Contradictions",
      type: "video",
      duration: 12,
      objectives: [
        "Define what Rand means by a 'mixed economy' and why she considers it unstable",
        "Explain the concept of pressure-group warfare in a mixed economy",
        "Analyse how regulation creates the problems it purports to solve",
      ],
      chunks: [
        {
          id: "ci-l05-c1",
          title: "What Is the Mixed Economy?",
          content:
            "Rand defines the mixed economy as a system that attempts to combine elements of capitalism (private ownership, market exchange) with elements of statism (government regulation, redistribution, public ownership of key industries). Most modern Western democracies operate as mixed economies. Rand considers this arrangement not a stable compromise but an unstable mixture of contradictory principles. Freedom and coercion cannot coexist in equilibrium: every act of government intervention distorts the market, creating unintended consequences that generate demands for further intervention. Price controls create shortages, which lead to rationing. Subsidies create surpluses, which lead to trade barriers. Licensing requirements reduce competition, which leads to calls for antitrust enforcement. Each new regulation creates new problems that can only be 'solved' by additional regulation, ratcheting the system progressively toward total government control. Rand sees this not as an accident but as the logical outcome of accepting the premise that the government has a right to regulate economic activity.",
        },
        {
          id: "ci-l05-c2",
          title: "Pressure-Group Warfare",
          content:
            "In a mixed economy, Rand argues, the government's power to grant economic favours — subsidies, protective tariffs, monopoly licenses, tax exemptions — transforms the political process into a contest among pressure groups, each seeking to use government power to benefit itself at the expense of others. Farmers lobby for agricultural subsidies; manufacturers lobby for protective tariffs; unions lobby for minimum wage laws; banks lobby for regulatory barriers against competitors. No group acts from philosophical principle; each acts from the pragmatic calculation that if it does not capture government power, its rivals will use that power against it. The result is a war of all against all, mediated not by voluntary exchange but by political influence. The public interest dissolves into a kaleidoscope of competing private interests, each claiming to represent the common good while seeking particular advantage. Rand argues this is not a corruption of the mixed economy but its inevitable consequence.",
        },
        {
          id: "ci-l05-c3",
          title: "The Ratchet Effect: Regulation Breeding Regulation",
          content:
            "Rand illustrates what might be called the ratchet effect of regulation with numerous historical examples. When the government imposed rent controls in New York City, landlords could not charge enough to maintain their buildings, leading to deterioration. The deterioration was then blamed on 'greedy landlords,' justifying further regulation — building codes, inspection regimes, tenant protections — each of which increased the cost of providing housing and reduced the incentive to build new apartments. The housing shortage worsened, leading to calls for public housing. Each intervention created the conditions for the next, and at no point did anyone ask whether the original intervention was the source of the problem. Rand sees this pattern everywhere: in healthcare, where licensing restrictions reduce the supply of physicians, raising costs, which are then blamed on the 'free market'; in education, where government subsidies inflate tuition, which is then used to justify further subsidies. The solution, she insists, is always less intervention, not more.",
        },
      ],
      flashcards: [
        {
          id: "ci-l05-f1",
          front: "Mixed economy (Rand's definition)",
          back:
            "A system combining private ownership with government regulation. Rand considers it inherently unstable — each intervention creates distortions requiring further intervention, ratcheting toward full statism.",
        },
        {
          id: "ci-l05-f2",
          front: "Pressure-group warfare",
          back:
            "In a mixed economy, government's power to grant economic favours transforms politics into a contest among groups seeking to use state power for private benefit — a war of all against all mediated by political influence.",
        },
        {
          id: "ci-l05-f3",
          front: "The ratchet effect of regulation",
          back:
            "Each government intervention distorts the market, creating unintended problems blamed on the 'free market,' which justify further intervention — a self-reinforcing cycle that progressively expands state control.",
        },
        {
          id: "ci-l05-f4",
          front: "Rand's rent control example",
          back:
            "Rent controls prevent landlords from charging enough to maintain buildings, causing deterioration blamed on landlords, leading to more regulation, reducing housing supply, and ultimately requiring public housing — each intervention creating the next.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L06  The Objectivist Ethics and Capitalism's Cultural Requirements
    ───────────────────────────────────────────────── */
    {
      id: "ci-l06",
      title: "The Objectivist Ethics and Capitalism's Cultural Requirements",
      type: "video",
      duration: 12,
      objectives: [
        "Connect Rand's ethics of rational self-interest to her defense of capitalism",
        "Explain why Rand believes altruism is incompatible with freedom",
        "Assess the cultural preconditions Rand identifies for a free society",
      ],
      chunks: [
        {
          id: "ci-l06-c1",
          title: "Rational Self-Interest as the Basis of Capitalism",
          content:
            "Rand argues that capitalism presupposes a specific ethical foundation: the morality of rational self-interest. Each individual has a moral right — indeed, a duty — to pursue his own happiness through productive achievement, and the social system must be structured to protect this pursuit. Rational self-interest is not hedonism or whim-worship; it is the disciplined pursuit of values identified by reason as conducive to one's long-term survival and flourishing. The trader principle is central: individuals deal with one another by voluntary exchange, offering value for value, not demanding the unearned. A capitalist society works precisely because rational self-interest motivates production, innovation, and cooperation through trade. Each participant pursues his own benefit, but the mechanism of voluntary exchange ensures that his benefit requires satisfying the needs of others. This is not a paradox but the natural result of a system that replaces force with reason as the mediating principle of human relationships.",
        },
        {
          id: "ci-l06-c2",
          title: "The Altruist Assault on Capitalism",
          content:
            "If rational self-interest is capitalism's ethical foundation, then altruism — the moral doctrine that self-sacrifice for the sake of others is the highest virtue — is capitalism's most dangerous enemy. Rand defines altruism strictly as the principle that an individual has no right to exist for his own sake, that service to others is the only justification for his existence, and that self-sacrifice is the highest moral duty. Under this morality, the productive individual who earns wealth through honest effort is guilty by default: his wealth is an accusation, proof that he has not sacrificed enough. The altruist framework transforms every successful businessman into a potential target for redistribution and every act of regulation into a moral crusade to force the selfish to serve the needy. Rand sees altruism not as a benign encouragement of generosity but as a totalitarian principle that, taken seriously, demands the systematic sacrifice of the able to the unable and provides the moral ammunition for every expansion of state power.",
        },
        {
          id: "ci-l06-c3",
          title: "Cultural Preconditions for Freedom",
          content:
            "Rand argues that political freedom cannot survive without a supporting culture. A free society requires that its citizens value reason over faith, individualism over collectivism, production over redistribution, and self-reliance over dependency. When a culture loses these values — when intellectuals promote irrationality, universities teach that truth is relative, artists glorify suffering, and moralists preach self-sacrifice — the population gradually becomes receptive to statism, regardless of its formal political constitution. Rand traces the decline of capitalism in the twentieth century not to economic failures but to a philosophical betrayal: Enlightenment reason was undermined by Kantian and Hegelian idealism, political individualism was eroded by Marxist collectivism, and the moral legitimacy of production was destroyed by altruistic ethics. Restoring capitalism, therefore, requires not merely political reform but a philosophical revolution — a new morality of rational self-interest, a new epistemology of objective reason, and a new aesthetics that celebrates human achievement.",
        },
      ],
      flashcards: [
        {
          id: "ci-l06-f1",
          front: "The trader principle",
          back:
            "Individuals deal with one another by voluntary exchange, offering value for value, neither demanding the unearned nor granting it — the ethical expression of rational self-interest in social relationships.",
        },
        {
          id: "ci-l06-f2",
          front: "Rand's strict definition of altruism",
          back:
            "The moral doctrine that an individual has no right to exist for his own sake and that self-sacrifice for others is the highest moral duty — which Rand sees as the primary ideological weapon against capitalism.",
        },
        {
          id: "ci-l06-f3",
          front: "Cultural preconditions for capitalism",
          back:
            "A free society requires a culture that values reason, individualism, production, and self-reliance. Without these, populations become receptive to statism regardless of formal political constitutions.",
        },
        {
          id: "ci-l06-f4",
          front: "Philosophical revolution",
          back:
            "Rand argues restoring capitalism requires not just political reform but a new morality (rational self-interest), epistemology (objective reason), and aesthetics (celebrating human achievement) to replace altruism and collectivism.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L07  Final Assessment: Capitalism as the Unknown Ideal
    ───────────────────────────────────────────────── */
    {
      id: "ci-l07",
      title: "Final Assessment: Capitalism as the Unknown Ideal",
      type: "quiz",
      duration: 9,
      objectives: ["Evaluate comprehensive mastery of Rand's philosophical defense of capitalism"],
      questions: [
        {
          id: "ci-l07-q1",
          text: "What does Rand mean by calling capitalism 'the unknown ideal'?",
          options: [
            { id: "a", text: "Capitalism has never existed in any form" },
            { id: "b", text: "Capitalism has never received a proper moral defense, so its true nature as the only system consistent with individual rights remains unrecognised" },
            { id: "c", text: "Capitalism is too complex for ordinary people to understand" },
            { id: "d", text: "Capitalism requires secret knowledge available only to entrepreneurs" },
          ],
          correctOptionId: "b",
          explanation:
            "The 'unknown ideal' refers to Rand's argument that capitalism's defenders have relied on pragmatic efficiency arguments rather than making the moral case — that capitalism alone recognises and protects individual rights. Its true moral nature remains 'unknown.'",
        },
        {
          id: "ci-l07-q2",
          text: "How does Rand's concept of rights differ from the 'positive rights' invoked by welfare-state advocates?",
          options: [
            { id: "a", text: "Rand's rights impose obligations on others to provide goods and services; positive rights do not" },
            { id: "b", text: "Rand's rights are freedoms from coercion (negative rights) requiring only non-interference; positive rights impose obligations on others to provide goods, which requires violating someone else's freedom" },
            { id: "c", text: "There is no meaningful difference — both protect individual welfare" },
            { id: "d", text: "Rand's rights apply only to property owners; positive rights apply to everyone" },
          ],
          correctOptionId: "b",
          explanation:
            "Rand's rights are negative: they require only that others refrain from initiating force. Positive rights (to healthcare, education, etc.) impose obligations on others to provide goods, which Rand argues requires forced labour and thus violates genuine rights.",
        },
        {
          id: "ci-l07-q3",
          text: "Why does Rand argue that monopolies can only arise through government action?",
          options: [
            { id: "a", text: "Because large companies always voluntarily break themselves up" },
            { id: "b", text: "Because in a free market, consumers can always choose competitors, and only government can legally exclude competitors through licensing, regulation, and legal barriers" },
            { id: "c", text: "Because monopolies have never existed historically" },
            { id: "d", text: "Because antitrust law effectively prevents all monopolies" },
          ],
          correctOptionId: "b",
          explanation:
            "In a free market, economic power operates through voluntary exchange — no firm can force consumers to buy its products. Only government possesses the coercive power to exclude competitors through legal barriers, creating genuine monopolies.",
        },
        {
          id: "ci-l07-q4",
          text: "What is the 'ratchet effect' in Rand's critique of the mixed economy?",
          options: [
            { id: "a", text: "The tendency for free markets to become progressively more deregulated" },
            { id: "b", text: "The tendency for each government intervention to create unintended problems that justify further intervention, progressively expanding state control" },
            { id: "c", text: "The tendency for tax rates to decrease over time" },
            { id: "d", text: "The speed at which economies recover from recessions" },
          ],
          correctOptionId: "b",
          explanation:
            "Each regulation distorts the market, creating problems blamed on the 'free market,' which justify additional regulation — a self-reinforcing cycle that ratchets the system toward total government control. Rand illustrates this with rent controls, healthcare, and education.",
        },
        {
          id: "ci-l07-q5",
          text: "According to Rand, why can't capitalism survive without a supporting philosophical culture?",
          options: [
            { id: "a", text: "Because capitalist institutions require constant government protection" },
            { id: "b", text: "Because only philosophy professors can run businesses effectively" },
            { id: "c", text: "Because when a culture abandons reason, individualism, and the moral legitimacy of production, the population becomes receptive to statism regardless of its formal political constitution" },
            { id: "d", text: "Because capitalism requires religious faith as its moral foundation" },
          ],
          correctOptionId: "c",
          explanation:
            "Rand traces capitalism's twentieth-century decline not to economic failures but to philosophical betrayal: Enlightenment reason was undermined by idealism, individualism by collectivism, and the morality of production by altruistic ethics. Restoring capitalism requires a philosophical revolution.",
        },
        {
          id: "ci-l07-q6",
          text: "How does Rand's position on altruism relate to ordinary acts of generosity?",
          options: [
            { id: "a", text: "Rand condemns all acts of kindness as moral weaknesses" },
            { id: "b", text: "Rand distinguishes between voluntary generosity (which she supports as an expression of personal values) and altruism as a moral principle demanding self-sacrifice as a duty" },
            { id: "c", text: "Rand considers generosity and altruism to be identical concepts" },
            { id: "d", text: "Rand believes generosity should be legally required" },
          ],
          correctOptionId: "b",
          explanation:
            "Rand opposes altruism as a moral principle — the doctrine that self-sacrifice is a duty — not voluntary kindness or charity. Freely choosing to help someone you value is consistent with rational self-interest; being morally compelled to sacrifice is not.",
        },
      ],
    },
  ],
};
