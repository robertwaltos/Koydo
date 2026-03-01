import type { LearningModule } from "@/lib/modules/types";

// High-quality curriculum module derived from EPUB.
// Source: G:\My Drive\15_E-BOOKS\file007846.epub
// Author: Michael C. Hill  |  Subject: Economics / Political Economy

export const CannibalCapitalismMichaelCHillModule: LearningModule = {
  id: "cannibal-capitalism-michael-c-hill",
  title: "Cannibal Capitalism: How Big Business and the Feds Are Ruining America",
  description:
    "Michael C. Hill's provocative analysis argues that modern American capitalism has devolved into a self-consuming system — cannibal capitalism — where short-term financial engineering, deregulation, and political complicity hollow out the real economy, devastate working families, and concentrate wealth at the top. Drawing on personal experience, economic history, and policy analysis, Hill traces the evolution from productive capitalism to a predatory model that consumes its own foundations.",
  subject: "Economics",
  tags: ["epub-derived", "curriculum", "interactive", "political-economy", "capitalism", "economic-policy"],
  minAge: 18,
  maxAge: 99,
  version: "2.0.0",
  learningObjectives: [
    "Define 'cannibal capitalism' and distinguish it from productive capitalism",
    "Trace the historical evolution from New Deal regulation to deregulation and financialisation",
    "Analyse the causes and consequences of the 2007-2009 financial crisis",
    "Explain how the real economy diverges from financial markets",
    "Evaluate the impact of cannibal capitalism on healthcare, education, and energy",
    "Assess proposed reforms and systemic alternatives",
  ],
  lessons: [

    /* ─────────────────────────────────────────────────
       L01  The Face of Self-Destruction
    ───────────────────────────────────────────────── */
    {
      id: "cc-l01",
      title: "The Face of Self-Destruction: What Is Cannibal Capitalism?",
      type: "video",
      duration: 12,
      objectives: [
        "Define cannibal capitalism and its relationship to catabolism",
        "Explain why Hill argues the system consumes its own productive base",
        "Distinguish predatory capitalism from productive market economics",
      ],
      chunks: [
        {
          id: "cc-l01-c1",
          title: "From Personal Ruin to Systemic Diagnosis",
          content:
            "Michael Hill opens with a deeply personal story: after decades of professional success, he found himself facing financial collapse — not because of personal irresponsibility, but because of systemic forces beyond any individual's control. His experience mirrors millions of Americans who played by the rules, saved diligently, invested prudently, and still lost everything when the system itself imploded. Hill uses this personal lens to argue that the 2007-2009 financial crisis was not an aberration but the logical outcome of a system that had been cannibalising its own productive foundations for decades. The metaphor of cannibalism is deliberately provocative: just as an organism consuming its own tissue represents a pathological breakdown of normal biological function, cannibal capitalism represents an economy that devours its own workers, communities, infrastructure, and institutions to generate short-term profits for a diminishing elite.",
        },
        {
          id: "cc-l01-c2",
          title: "Catabolism: The Biological Metaphor",
          content:
            "Hill introduces the concept of catabolism — the metabolic process by which an organism breaks down its own tissues for energy, typically when external nutrition is unavailable. In a healthy economy, businesses create value by producing goods and services, employing workers, investing in infrastructure, and innovating. In a catabolic economy, the primary mechanism of profit generation shifts from value creation to value extraction: asset stripping, financial engineering, wage suppression, deregulation of consumer protections, privatisation of public goods, and the transfer of risk from corporations to individuals. The shift is insidious because financial indicators — stock prices, corporate profits, GDP growth — can remain positive even as the real economy deteriorates. Wall Street celebrates record earnings while Main Street experiences stagnant wages, crumbling infrastructure, declining healthcare access, and rising personal debt. The metrics of success have been systematically decoupled from the well-being of the population they purport to measure.",
        },
        {
          id: "cc-l01-c3",
          title: "Ponzi Dynamics and Structural Selfishness",
          content:
            "Hill argues that cannibal capitalism exhibits Ponzi-like dynamics: it requires continuous growth in debt, consumption, and asset prices to sustain itself, because the underlying productive economy no longer generates sufficient returns to support the superstructure of financial claims built upon it. When Reaganomics dismantled the regulatory framework of the New Deal era, it was sold as liberation — freeing markets from government interference to unleash innovation and prosperity. In practice, Hill contends, deregulation freed capital to pursue short-term extraction at the expense of long-term investment. Tax cuts for the wealthy were supposed to 'trickle down' but instead funded stock buybacks, offshore accounts, and speculative financial instruments. The social contract that linked corporate success to community prosperity was broken, replaced by a doctrine of shareholder primacy that treated workers, communities, and the environment as costs to be minimised rather than stakeholders to be served.",
        },
      ],
      flashcards: [
        {
          id: "cc-l01-f1",
          front: "Cannibal capitalism",
          back: "Hill's term for an economic system that generates profit primarily through value extraction — asset stripping, wage suppression, and financial engineering — rather than value creation, consuming its own productive foundations.",
        },
        {
          id: "cc-l01-f2",
          front: "Catabolism (economic metaphor)",
          back: "Like an organism breaking down its own tissues for energy, a catabolic economy profits by dismantling its own productive base — workers, infrastructure, public institutions — for short-term financial gain.",
        },
        {
          id: "cc-l01-f3",
          front: "Ponzi dynamics in cannibal capitalism",
          back: "The system requires continuous growth in debt, consumption, and asset prices because the real economy no longer generates sufficient returns to support the financial superstructure built upon it.",
        },
        {
          id: "cc-l01-f4",
          front: "Decoupling of metrics",
          back: "Financial indicators (stock prices, corporate profits, GDP) remain positive while the real economy deteriorates — stagnant wages, crumbling infrastructure, rising personal debt — masking systemic dysfunction.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L02  The Crash of 2007–2009
    ───────────────────────────────────────────────── */
    {
      id: "cc-l02",
      title: "The Crash of 2007–2009: Anatomy of a Catabolic Crisis",
      type: "video",
      duration: 13,
      objectives: [
        "Trace the causal chain from deregulation to mortgage crisis to systemic collapse",
        "Explain how securitisation and derivatives amplified risk",
        "Analyse the role of moral hazard and regulatory capture",
      ],
      chunks: [
        {
          id: "cc-l02-c1",
          title: "The Road to Collapse",
          content:
            "Hill traces the 2007-2009 financial crisis back to a decades-long process of deregulation that systematically removed the safeguards erected after the Great Depression. The Glass-Steagall Act of 1933, which separated commercial banking from investment banking, was effectively dismantled through regulatory reinterpretation throughout the 1980s and 1990s before being formally repealed in 1999. This allowed banks to use depositors' money for speculative trading. Simultaneously, the derivatives market — financial instruments whose value is derived from underlying assets — exploded from negligible levels to hundreds of trillions of dollars in notional value, with virtually no regulatory oversight. The Commodity Futures Modernization Act of 2000 explicitly exempted derivatives from regulation. The result was a financial system where risk was not reduced but obscured — spread through complex chains of securitisation and credit default swaps that no individual institution, regulator, or rating agency could fully understand or monitor.",
        },
        {
          id: "cc-l02-c2",
          title: "Subprime Mortgages and Securitisation",
          content:
            "The proximate trigger was the subprime mortgage crisis, but Hill emphasises that subprime lending was a symptom, not a cause. When real wages stagnated and the cost of housing, healthcare, and education rose far faster than income, consumer debt became the mechanism that maintained the illusion of prosperity. Banks discovered that they could originate mortgages to borrowers who clearly could not repay them, bundle those mortgages into mortgage-backed securities (MBS), have those securities rated AAA by compliant rating agencies, and sell them to investors worldwide — pocketing enormous fees at every step while passing the risk downstream. The incentive structure was perverse: every participant in the chain profited from volume, not quality. Loan officers profited from originations regardless of default risk. Banks profited from securitisation fees. Rating agencies profited from rating volume. And when the inevitable defaults came, the losses fell on pension funds, municipalities, and taxpayers — not on those who created and profited from the risk.",
        },
        {
          id: "cc-l02-c3",
          title: "Too Big to Fail, Too Connected to Jail",
          content:
            "When the crisis hit, the government's response confirmed Hill's thesis. The institutions that had caused the crisis — through reckless lending, fraudulent securitisation, and inadequately hedged derivative positions — were deemed 'too big to fail' and rescued with hundreds of billions in taxpayer money. Meanwhile, millions of ordinary Americans lost their homes, their savings, and their jobs. Hill points to the fundamental asymmetry: risk was socialised (borne by the public) while profit was privatised (retained by executives and shareholders). The doctrine of moral hazard — the principle that insulating actors from the consequences of their risk-taking encourages more risk-taking — was confirmed on a civilisational scale. The banks were not only rescued; within two years they were reporting record profits and paying record bonuses, while unemployment remained elevated and millions of foreclosed families had no recourse.",
        },
      ],
      flashcards: [
        {
          id: "cc-l02-f1",
          front: "Glass-Steagall Act (1933)",
          back: "Depression-era law separating commercial from investment banking. Its erosion in the 1980s-90s and formal repeal in 1999 allowed banks to use depositor funds for speculative trading — a key enabler of the 2007-09 crisis.",
        },
        {
          id: "cc-l02-f2",
          front: "Securitisation chain incentives",
          back: "Every participant — loan officers, banks, rating agencies — profited from volume, not quality. Losses fell on pension funds, municipalities, and taxpayers who held the toxic securities, not on those who created them.",
        },
        {
          id: "cc-l02-f3",
          front: "Too big to fail",
          back: "Doctrine that certain financial institutions are so large and interconnected that their failure would cause systemic collapse, justifying taxpayer-funded bailouts — confirming the asymmetry of privatised profits and socialised risk.",
        },
        {
          id: "cc-l02-f4",
          front: "Moral hazard",
          back: "Insulating actors from the consequences of their risk-taking encourages more risk-taking. The bailouts demonstrated moral hazard at civilisational scale — rescued banks reported record profits within two years.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L03  The Real Economy vs. Financial Economy
    ───────────────────────────────────────────────── */
    {
      id: "cc-l03",
      title: "Devolution of the Real Economy",
      type: "video",
      duration: 12,
      objectives: [
        "Distinguish the real economy from the financial economy",
        "Explain how financialisation redirects capital from productive investment",
        "Describe the consequences for workers, communities, and infrastructure",
      ],
      chunks: [
        {
          id: "cc-l03-c1",
          title: "Two Economies, One Country",
          content:
            "Hill draws a sharp distinction between the real economy — where goods are produced, services are delivered, infrastructure is built, and people earn livelihoods — and the financial economy, where money makes money through trading, speculation, and financial engineering. In a healthy system, the financial sector serves the real economy by allocating capital to productive enterprises, managing risk, and facilitating transactions. In cannibal capitalism, this relationship is inverted: the real economy serves the financial sector, providing the raw material — wages, mortgages, consumer debt, public assets — that is processed into financial products. Manufacturing, once the backbone of American prosperity, has been systematically offshored not because foreign workers are more productive but because labour arbitrage — exploiting wage differentials between countries — generates higher returns than investing in domestic productivity improvements.",
        },
        {
          id: "cc-l03-c2",
          title: "Financialisation of Everything",
          content:
            "Hill traces the financialisation of the American economy — the process by which financial markets, financial institutions, and financial elites gain increasing influence over economic policy and outcomes. In the 1950s, the financial sector accounted for roughly 10 percent of corporate profits; by the mid-2000s, it accounted for over 40 percent. This shift did not represent increased efficiency or productivity; it represented a massive reallocation of national income from productive sectors to extractive financial activities. Corporations that once invested profits in research, development, and capacity expansion increasingly diverted them to stock buybacks (inflating share prices and executive compensation), dividend payments, and acquisitions — financial activities that redistribute existing wealth rather than creating new value. The result is an economy where the most profitable activities are those that produce nothing tangible: trading derivatives, managing leveraged buyouts, and engineering tax avoidance structures.",
        },
        {
          id: "cc-l03-c3",
          title: "Consequences for Workers and Communities",
          content:
            "The consequences for ordinary Americans are documented throughout Hill's analysis. Real median household income stagnated for decades while productivity continued to rise — meaning workers produced more but received no greater share of the value they created. The gap was captured by capital owners and financial intermediaries. Healthcare costs rose far faster than inflation, shifting an ever-larger burden onto families. Higher education costs exploded, forcing students into debt that now exceeds $1.7 trillion nationally. Infrastructure — roads, bridges, water systems, electrical grids — deteriorated as public investment was cut to fund tax reductions for corporations and the wealthy. Communities that once thrived around manufacturing facilities were hollowed out by plant closures and offshoring, creating a geography of despair marked by unemployment, substance abuse, and population decline. Hill argues that these are not incidental side effects but structural features of cannibal capitalism — the inevitable result of a system that prioritises extraction over investment.",
        },
      ],
      flashcards: [
        {
          id: "cc-l03-f1",
          front: "Financialisation",
          back: "The process by which financial markets gain increasing influence over economic policy and outcomes. Financial sector profits grew from ~10% of corporate profits in the 1950s to over 40% by the mid-2000s — extracting rather than creating value.",
        },
        {
          id: "cc-l03-f2",
          front: "Labour arbitrage",
          back: "Exploiting wage differentials between countries by offshoring production — not because foreign workers are more productive, but because lower wages generate higher returns for capital owners.",
        },
        {
          id: "cc-l03-f3",
          front: "Stock buybacks as financialisation",
          back: "Corporations divert profits from productive investment (R&D, capacity) to repurchasing their own shares — inflating stock prices and executive compensation without creating new economic value.",
        },
        {
          id: "cc-l03-f4",
          front: "Productivity-wage gap",
          back: "Workers produce more (rising productivity) but receive no greater share of value (stagnant real wages). The gap is captured by capital owners and financial intermediaries — a structural feature of cannibal capitalism.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L04  Healthcare, Education, and Energy
    ───────────────────────────────────────────────── */
    {
      id: "cc-l04",
      title: "Selective Morality: Health, Education, and Power",
      type: "video",
      duration: 12,
      objectives: [
        "Analyse how cannibal capitalism affects the healthcare system",
        "Explain the miseducation thesis and the student debt crisis",
        "Evaluate energy policy through the lens of systemic extraction",
      ],
      chunks: [
        {
          id: "cc-l04-c1",
          title: "Healthcare: Profit Over Patients",
          content:
            "Hill devotes extensive analysis to the American healthcare system as a case study in cannibal capitalism. The United States spends more per capita on healthcare than any other developed nation yet achieves worse outcomes on virtually every metric — life expectancy, infant mortality, preventable deaths, chronic disease management. Hill argues that this paradox is explained by the system's structure: healthcare in America is not primarily a system for delivering care but a system for generating profit. Insurance companies profit by collecting premiums and denying claims. Pharmaceutical companies profit by maintaining patents, blocking generics, and pricing drugs at whatever the market will bear — $300 for insulin that costs $5 to produce. Hospital systems profit through consolidation, eliminating competition, and charging opaque prices that bear no relationship to costs. The healthcare workforce — nurses, technicians, home health aides — is simultaneously essential and exploited, with wages that fail to keep pace with the physical and emotional demands of the work.",
        },
        {
          id: "cc-l04-c2",
          title: "Miseducation: Debt as a Business Model",
          content:
            "Hill's chapter on education — titled 'Miseducation' — argues that the American education system has been cannibalised at both ends. K-12 public education has been systematically defunded, with tax cuts reducing school budgets while charter school movements divert public funds to private operators with minimal accountability. Higher education, meanwhile, has been transformed from a public good into a private financial product. State universities that once provided affordable, high-quality education have seen their public funding slashed, forcing them to raise tuition dramatically. The federal student loan system, designed to expand access, instead enabled tuition inflation by guaranteeing revenue to institutions regardless of educational outcomes. Students graduate — or fail to graduate — with crushing debt loads that constrain their economic choices for decades: delaying home purchases, family formation, entrepreneurship, and retirement savings. The for-profit education sector represents the most extreme manifestation, with institutions that spend more on marketing than instruction and leave students with debt but without marketable skills.",
        },
        {
          id: "cc-l04-c3",
          title: "Power to the People: Energy and Extraction",
          content:
            "Hill's analysis of energy policy reveals the same catabolic pattern. Despite decades of warnings about climate change and fossil fuel dependence, American energy policy remains dominated by extraction industries that prioritise short-term profit over long-term sustainability. Oil and gas companies receive billions in annual subsidies while renewable energy development is intermittently supported and then defunded with each political cycle. The externalities of fossil fuel extraction — environmental degradation, public health impacts, climate change — are borne by communities and future generations rather than priced into the cost of energy. Hill argues that this represents the purest form of cannibal capitalism: consuming the planetary commons — clean air, stable climate, biodiversity — to generate private profit, with the costs deferred to a future that current decision-makers will not live to see. The solution, he suggests, lies not in incremental reform but in fundamentally restructuring the relationship between energy production, public interest, and democratic accountability.",
        },
      ],
      flashcards: [
        {
          id: "cc-l04-f1",
          front: "Healthcare paradox (Hill's analysis)",
          back: "The US spends more per capita on healthcare than any developed nation but achieves worse outcomes — because the system is structured to generate profit (insurance denials, pharmaceutical patents, hospital consolidation) rather than deliver care.",
        },
        {
          id: "cc-l04-f2",
          front: "Miseducation thesis",
          back: "Education has been cannibalised: K-12 is defunded, higher education is converted from a public good into a financial product, and the student loan system enables tuition inflation while loading students with constraining debt.",
        },
        {
          id: "cc-l04-f3",
          front: "Energy externalities as cannibalism",
          back: "Fossil fuel extraction consumes planetary commons (clean air, stable climate, biodiversity) for private profit while deferring costs to communities and future generations — the purest form of cannibal capitalism.",
        },
        {
          id: "cc-l04-f4",
          front: "Selective morality",
          back: "Hill's term for the application of market logic to domains — healthcare, education, energy — where unregulated profit-seeking produces systematically harmful outcomes that are justified by free-market ideology.",
        },
        {
          id: "cc-l04-f5",
          front: "For-profit education",
          back: "The most extreme manifestation of education cannibalism: institutions spending more on marketing than instruction, leaving students with debt but without marketable skills.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L05  Checkpoint Quiz
    ───────────────────────────────────────────────── */
    {
      id: "cc-l05",
      title: "Cannibal Capitalism: Checkpoint Quiz",
      type: "quiz",
      duration: 8,
      objectives: ["Assess understanding of cannibal capitalism concepts, causes, and consequences"],
      questions: [
        {
          id: "cc-l05-q1",
          text: "What does Hill mean by the biological metaphor of 'catabolism' applied to capitalism?",
          options: [
            { id: "a", text: "An economy that grows by hiring more workers" },
            { id: "b", text: "An economy that breaks down its own productive tissues — workers, infrastructure, public institutions — for short-term financial gain, like an organism consuming itself" },
            { id: "c", text: "An economy with a strong manufacturing sector" },
            { id: "d", text: "An economy where all businesses are small and local" },
          ],
          correctOptionId: "b",
          explanation:
            "Catabolism is the metabolic process of self-consumption. Hill applies it to an economy that profits by dismantling its own productive foundations rather than building new value.",
        },
        {
          id: "cc-l05-q2",
          text: "How did the repeal of Glass-Steagall contribute to the 2007-2009 financial crisis?",
          options: [
            { id: "a", text: "It prohibited banks from making loans" },
            { id: "b", text: "It allowed banks to use depositor funds for speculative investment banking activities, removing the firewall between commercial and investment banking" },
            { id: "c", text: "It created new regulations that were too complex to follow" },
            { id: "d", text: "It required banks to hold more reserves" },
          ],
          correctOptionId: "b",
          explanation:
            "Glass-Steagall separated commercial banking (deposits and loans) from investment banking (speculation and trading). Its repeal allowed banks to gamble with depositor money, amplifying systemic risk.",
        },
        {
          id: "cc-l05-q3",
          text: "What does Hill identify as the fundamental asymmetry revealed by the bank bailouts?",
          options: [
            { id: "a", text: "Banks were punished while individuals were rewarded" },
            { id: "b", text: "Risk was socialised (borne by taxpayers) while profits were privatised (retained by executives and shareholders)" },
            { id: "c", text: "Both banks and individuals received equal support" },
            { id: "d", text: "The government profited from the bailouts" },
          ],
          correctOptionId: "b",
          explanation:
            "The bailouts demonstrated moral hazard at a civilisational scale: banks that caused the crisis were rescued with public money and returned to record profits within two years, while millions of ordinary Americans lost homes and savings.",
        },
        {
          id: "cc-l05-q4",
          text: "How does financialisation distort the relationship between the financial and real economies?",
          options: [
            { id: "a", text: "It strengthens manufacturing by providing more capital" },
            { id: "b", text: "It inverts the relationship: instead of finance serving the real economy, the real economy becomes raw material (wages, debt, public assets) processed into financial products" },
            { id: "c", text: "It has no effect on the real economy" },
            { id: "d", text: "It reduces corporate profits across all sectors" },
          ],
          correctOptionId: "b",
          explanation:
            "In a healthy system, finance allocates capital to productive enterprises. Under financialisation, the real economy serves finance — its wages, mortgages, and public assets become inputs for profit-generating financial products.",
        },
        {
          id: "cc-l05-q5",
          text: "Why does Hill call American education 'miseducation'?",
          options: [
            { id: "a", text: "Because teachers are poorly trained" },
            { id: "b", text: "Because at both K-12 and higher levels, education has been transformed from a public good into a financial extraction system — defunded public schools, debt-loaded students, for-profit institutions spending more on marketing than teaching" },
            { id: "c", text: "Because students learn too much theory and not enough practice" },
            { id: "d", text: "Because class sizes are too small" },
          ],
          correctOptionId: "b",
          explanation:
            "Hill argues that education has been cannibalised: public K-12 funding is cut, higher education is converted into a debt-generating product, and for-profit schools prioritise revenue extraction over educational outcomes.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L06  Final Assessment
    ───────────────────────────────────────────────── */
    {
      id: "cc-l06",
      title: "Cannibal Capitalism: Comprehensive Assessment",
      type: "quiz",
      duration: 9,
      objectives: ["Evaluate mastery of cannibal capitalism analysis and proposed systemic reforms"],
      questions: [
        {
          id: "cc-l06-q1",
          text: "Why can financial indicators (stock prices, GDP) remain positive while the real economy deteriorates?",
          options: [
            { id: "a", text: "Financial indicators always accurately reflect economic health" },
            { id: "b", text: "Metrics have been decoupled from well-being: financial engineering, stock buybacks, and debt-fuelled consumption inflate financial indicators while wages stagnate and infrastructure crumbles" },
            { id: "c", text: "GDP only measures government spending" },
            { id: "d", text: "Stock prices are set by government regulation" },
          ],
          correctOptionId: "b",
          explanation:
            "The metrics of success have been systematically decoupled from the well-being of the population. Financial engineering creates the appearance of prosperity while the productive foundations erode.",
        },
        {
          id: "cc-l06-q2",
          text: "What is the perverse incentive structure in securitisation that Hill describes?",
          options: [
            { id: "a", text: "Every participant is rewarded for reducing risk" },
            { id: "b", text: "Every participant — loan officers, banks, rating agencies — profits from volume regardless of quality, while losses fall on distant investors and taxpayers" },
            { id: "c", text: "Only borrowers benefit from the securitisation chain" },
            { id: "d", text: "Rating agencies are legally liable for inaccurate ratings" },
          ],
          correctOptionId: "b",
          explanation:
            "The securitisation chain rewarded volume at every step: origination fees, securitisation fees, rating fees. Quality was irrelevant because risk was passed downstream to pension funds, municipalities, and ultimately taxpayers.",
        },
        {
          id: "cc-l06-q3",
          text: "What does the productivity-wage gap demonstrate about modern American capitalism?",
          options: [
            { id: "a", text: "Workers are becoming less productive" },
            { id: "b", text: "That workers produce more (rising productivity) but receive no greater share of value (stagnant real wages), with the gap captured by capital owners and financial intermediaries" },
            { id: "c", text: "That wages have risen faster than productivity" },
            { id: "d", text: "That productivity measurement is unreliable" },
          ],
          correctOptionId: "b",
          explanation:
            "The divergence of productivity and wages is evidence that the gains from economic growth are being captured by capital and finance rather than shared with the workers who produce them — a structural feature of cannibal capitalism.",
        },
        {
          id: "cc-l06-q4",
          text: "How does Hill characterise fossil fuel subsidies through the lens of cannibal capitalism?",
          options: [
            { id: "a", text: "As necessary investments in energy security" },
            { id: "b", text: "As the purest form of cannibalism: consuming planetary commons (clean air, stable climate) for private profit while deferring costs to communities and future generations" },
            { id: "c", text: "As temporary measures that will be phased out" },
            { id: "d", text: "As irrelevant to the cannibal capitalism thesis" },
          ],
          correctOptionId: "b",
          explanation:
            "Energy extraction subsidies exemplify cannibal capitalism by converting shared planetary resources into private profit while externalising environmental and health costs onto the public and future generations.",
        },
        {
          id: "cc-l06-q5",
          text: "What is Hill's central proposed solution to cannibal capitalism?",
          options: [
            { id: "a", text: "Eliminating all government involvement in the economy" },
            { id: "b", text: "Incrementally improving existing financial regulations" },
            { id: "c", text: "Fundamentally restructuring the relationship between economic activity, public interest, and democratic accountability — not incremental reform" },
            { id: "d", text: "Returning to a purely agricultural economy" },
          ],
          correctOptionId: "c",
          explanation:
            "Hill argues that the problems are systemic, not incidental, and therefore require fundamental restructuring — realigning economic incentives with public well-being and restoring democratic accountability over economic policy.",
        },
      ],
    },
  ],
};
