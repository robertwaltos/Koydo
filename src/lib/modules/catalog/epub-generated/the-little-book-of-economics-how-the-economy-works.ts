import type { LearningModule } from "@/lib/modules/types";

// High-quality curriculum module derived from EPUB.
// Source: G:\My Drive\15_E-BOOKS\file002141.epub
// Author: Greg Ip  |  Subject: Economics / Macroeconomics

export const TheLittleBookOfEconomicsHowTheEconomyWorksModule: LearningModule = {
  id: "the-little-book-of-economics-how-the-economy-works",
  title: "The Little Book of Economics: How the Economy Works in the Real World",
  description:
    "Greg Ip, chief economics commentator for The Economist, distils the essential workings of the modern economy into an accessible guide. The book explains why some countries grow rich while others stagnate, how recessions and financial crises occur, what central banks actually do, and how fiscal and monetary policies shape everyday life — all without assuming prior economics training.",
  subject: "Economics",
  tags: ["epub-derived", "curriculum", "interactive", "macroeconomics", "economic-growth", "monetary-policy"],
  minAge: 18,
  maxAge: 99,
  moduleVersion: "2.0.0",
  version: "2.0.0",
  learningObjectives: [
    "Identify the three drivers of economic growth: people, capital, and ideas",
    "Explain how population growth and demographics affect long-term prosperity",
    "Describe the role of capital accumulation and diminishing returns",
    "Analyse how technological innovation overcomes diminishing returns and drives sustained growth",
    "Explain the roles of the Federal Reserve, monetary policy, and interest rates",
    "Evaluate how fiscal policy and government intervention shape the business cycle",
  ],
  lessons: [

    /* ─────────────────────────────────────────────────
       L01  Secrets of Success: The Growth Formula
    ───────────────────────────────────────────────── */
    {
      id: "lbe-l01",
      title: "Secrets of Success: People, Capital, and Ideas",
      type: "video",
      duration: 12,
      objectives: [
        "Identify the three fundamental inputs to economic growth",
        "Explain why GDP per capita is the best single measure of prosperity",
        "Describe the concept of a production function and its components",
      ],
      chunks: [
        {
          id: "lbe-l01-c1",
          title: "The Three Ingredients of Prosperity",
          content:
            "Why are some countries rich and others poor? Greg Ip answers this foundational question with elegant simplicity: economic growth depends on three inputs — people (labour), capital (tools, machines, factories, infrastructure), and ideas (technology, innovation, organisational know-how). Every economy is essentially a production function that combines human effort with physical tools and intellectual knowledge to produce goods and services. GDP — gross domestic product — measures the total value of that output. But raw GDP can be misleading because large populations can produce large output while still being desperately poor on a per-person basis. GDP per capita — total output divided by population — is the better measure of material living standards. The United States and Luxembourg have very different GDPs but both rank among the world's highest in GDP per capita, reflecting high productivity per person. Understanding these three inputs and how they interact is the key to understanding why some nations prosper, why growth rates vary across time, and what policies can influence economic outcomes.",
        },
        {
          id: "lbe-l01-c2",
          title: "From Subsistence to Surplus: The Long View",
          content:
            "For most of human history, economic growth was essentially zero. The world's population grew, but output per person barely changed from the Roman Empire to the Industrial Revolution. Ip explains that this stagnation was not due to laziness or incompetence but to the absence of one critical ingredient: sustained technological innovation. Before the Industrial Revolution, economies could grow only by adding more labour (population growth) and more capital (clearing more farmland, building more tools). But these inputs faced diminishing returns — each additional unit of input produced progressively less additional output. You can only farm so much land before the next acre is less fertile. You can only add so many workers before they start getting in each other's way. The breakthrough came when the scientific method, universal education, and property rights created an institutional environment that rewarded innovation. The steam engine, the spinning jenny, the power loom — these were not just inventions but force multipliers that allowed each worker to produce dramatically more. For the first time, output per person began to rise consistently, and the world entered an era of sustained growth that continues — unevenly — today.",
        },
        {
          id: "lbe-l01-c3",
          title: "Total Factor Productivity: The Magic Ingredient",
          content:
            "Ip introduces a concept that economists call total factor productivity (TFP) — the portion of economic output that cannot be explained by increases in labour or capital alone. TFP captures the intangible contribution of better technology, more efficient organisation, improved management practices, and higher-quality education. When TFP grows, the same amount of labour and capital produces more output — the economy becomes fundamentally more efficient. Robert Solow, the Nobel Prize-winning economist, demonstrated that TFP — not additional labour or capital — accounted for the majority of economic growth in the United States during the twentieth century. This finding has profound policy implications. Countries that invest in education, scientific research, institutional quality, and the rule of law tend to generate higher TFP growth. Countries that focus solely on accumulating capital — building more factories, pouring more concrete — eventually hit diminishing returns unless their capital investments are accompanied by the knowledge to use them effectively. The recipe for sustained economic growth is not just more inputs but smarter use of inputs.",
        },
      ],
      flashcards: [
        {
          id: "lbe-l01-f1",
          front: "Three drivers of economic growth",
          back: "People (labour), capital (tools/machines/infrastructure), and ideas (technology/innovation/organisational knowledge). These combine through a production function to generate output.",
        },
        {
          id: "lbe-l01-f2",
          front: "GDP per capita",
          back: "Total economic output divided by population — a better measure of material living standards than raw GDP, because it accounts for population size.",
        },
        {
          id: "lbe-l01-f3",
          front: "Total factor productivity (TFP)",
          back: "The portion of output growth unexplained by increases in labour or capital — capturing technology, organisation, management, and education. TFP accounted for the majority of 20th-century US growth.",
        },
        {
          id: "lbe-l01-f4",
          front: "Diminishing returns",
          back: "Each additional unit of a single input (labour or capital) produces progressively less additional output. Only technological innovation can overcome this constraint and sustain long-term per-capita growth.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L02  Population, Capital, and Demographics
    ───────────────────────────────────────────────── */
    {
      id: "lbe-l02",
      title: "Population Growth, Capital, and the Demographic Transition",
      type: "video",
      duration: 12,
      objectives: [
        "Explain how population growth affects economic output and per-capita income",
        "Describe the demographic transition and its economic consequences",
        "Analyse how capital accumulation interacts with diminishing returns",
      ],
      chunks: [
        {
          id: "lbe-l02-c1",
          title: "Population: Blessing or Curse?",
          content:
            "Ip addresses one of economics' oldest debates: is population growth good or bad for prosperity? Thomas Malthus famously argued in 1798 that population would always outstrip food production, condemning humanity to perpetual subsistence. For most of history, Malthus was essentially right: more people meant more mouths to feed but not proportionally more output. However, the modern era has overturned this grim prediction. More people can mean more workers, more consumers, more taxpayers, and — crucially — more minds generating ideas. The United States' economic dynamism owes much to sustained population growth through high birth rates and immigration, which provided the expanding labour force and consumer base that fuelled industrial expansion. Yet population growth alone is insufficient. Sub-Saharan African nations with the world's highest birth rates remain among the poorest, because the other two inputs — capital and ideas — are insufficient to absorb the growing population productively. The lesson is nuanced: population growth accelerates economic development when accompanied by education, infrastructure, and institutions that convert raw labour into productive human capital.",
        },
        {
          id: "lbe-l02-c2",
          title: "The Demographic Transition",
          content:
            "Ip explains the demographic transition — the shift from high birth rates and high death rates to low birth rates and low death rates that accompanies economic development. In the first stage, mortality falls (due to better sanitation, medicine, and nutrition) while fertility remains high, producing rapid population growth. In the second stage, fertility declines as rising incomes, urbanisation, and female education change reproductive patterns. In the third stage, both birth and death rates are low, producing aging populations and slowing or even negative population growth. This transition has enormous economic implications. The 'demographic dividend' — the period when the working-age population is large relative to dependents — can turbocharge growth, as happened in the East Asian 'tiger' economies from the 1960s through the 1990s. But the subsequent aging of the population creates a 'demographic burden': fewer workers supporting more retirees, rising healthcare costs, and declining consumer demand. Japan, Italy, and Germany are already deep into this phase. Understanding where a country sits in the demographic transition is essential for forecasting its economic trajectory.",
        },
        {
          id: "lbe-l02-c3",
          title: "Capital Accumulation and Its Limits",
          content:
            "Ip explains capital accumulation — the process of building the physical and financial infrastructure that workers need to be productive. A farmer with a tractor produces more than one with a hoe. A factory with robots produces more than one with manual assembly lines. Capital — in the form of machinery, buildings, transportation networks, telecommunications infrastructure, and software — amplifies worker productivity. However, capital faces diminishing returns: the first thousand dollars of investment in a developing country buys enormous productivity gains (a road connecting a village to a market, a well providing clean water). But the thousandth thousand dollars may add only marginal improvement. This is why the world's poorest countries can theoretically grow faster than rich ones — they have far more low-hanging fruit to pick. Ip notes that this 'convergence hypothesis' works in practice only when countries also invest in education, legal institutions, and governance that enable efficient capital deployment. China's spectacular growth combined massive capital investment with institutional reforms that improved capital allocation — building not just factories but the systems to run them efficiently.",
        },
      ],
      flashcards: [
        {
          id: "lbe-l02-f1",
          front: "Demographic transition",
          back: "The shift from high birth/death rates to low birth/death rates accompanying economic development. Creates a 'demographic dividend' (growing workforce) followed by a 'demographic burden' (aging population).",
        },
        {
          id: "lbe-l02-f2",
          front: "Demographic dividend",
          back: "The economic growth boost when the working-age population is large relative to dependents — as seen in East Asian tiger economies from the 1960s-1990s.",
        },
        {
          id: "lbe-l02-f3",
          front: "Convergence hypothesis",
          back: "Poor countries can theoretically grow faster than rich ones because early capital investments yield larger productivity gains. But this only works when accompanied by education, institutions, and governance.",
        },
        {
          id: "lbe-l02-f4",
          front: "Capital accumulation limits",
          back: "Capital investment faces diminishing returns — the first dollar invested buys enormous productivity gains, but each successive dollar adds less. Sustained growth requires technological innovation, not just capital.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L03  Innovation and the Government's Role
    ───────────────────────────────────────────────── */
    {
      id: "lbe-l03",
      title: "Ideas, Innovation, and Nurturing Growth",
      type: "video",
      duration: 13,
      objectives: [
        "Explain how innovation overturns diminishing returns and enables sustained growth",
        "Describe the roles of education, property rights, and rule of law in fostering innovation",
        "Evaluate the government's role in providing public goods and managing market failures",
      ],
      chunks: [
        {
          id: "lbe-l03-c1",
          title: "Ideas: The Engine That Overtakes Diminishing Returns",
          content:
            "If people and capital face diminishing returns, how has the world achieved centuries of sustained growth? Ip's answer is emphatic: ideas. Unlike physical inputs, ideas are non-rival — an idea can be used by millions of people simultaneously without being depleted. The discovery of pasteurisation, the invention of the transistor, the development of the internet — each of these innovations created economic value far exceeding the cost of the research that produced them. Ip explains that innovation operates through multiple channels: product innovation (creating entirely new goods and services — smartphones, antibiotics, social media), process innovation (finding better ways to produce existing goods — the assembly line, containerised shipping, just-in-time manufacturing), and organisational innovation (new ways of structuring work and coordination — the corporation, the franchise model, agile software development). The critical insight is that innovation is not random or mysterious; it is produced by systems — education systems that develop skilled researchers, legal systems that protect intellectual property, financial systems that fund risky ventures, and cultural systems that reward experimentation and tolerate failure.",
        },
        {
          id: "lbe-l03-c2",
          title: "The Institutional Framework for Innovation",
          content:
            "Ip emphasises that innovation does not occur in a vacuum. It requires an institutional ecosystem that includes several critical elements. First, education: a population with widespread literacy, numeracy, and scientific training produces more innovators and, equally important, more workers capable of adopting and applying innovations. Second, property rights and rule of law: inventors and entrepreneurs will not invest years in research and risk their capital unless they can expect to retain the fruits of their efforts. Patents, copyrights, contract enforcement, and independent courts create the incentive structure that motivates innovation. Third, openness: economies that are open to trade, immigration, and foreign ideas benefit from the global pool of knowledge. The United States' historic success owes much to its ability to attract talented immigrants who brought knowledge, energy, and entrepreneurial drive. Fourth, financial systems: innovation is inherently risky — most new ideas fail. Venture capital, stock markets, and bankruptcy laws that allow failed entrepreneurs to try again create the financial infrastructure that tolerates and absorbs failure while rewarding success.",
        },
        {
          id: "lbe-l03-c3",
          title: "Government: Gardener, Not Architect",
          content:
            "Ip explores the contentious question of the government's role in fostering economic growth. He rejects both laissez-faire absolutism (government should do nothing) and central planning (government should direct the economy). Instead, he argues that government's most important function is providing public goods that the private sector cannot efficiently supply: infrastructure (roads, airports, power grids), basic research (fundamental science that is decades away from commercial application), education (especially primary and secondary where the social returns exceed private returns), and a safety net that prevents cyclical downturns from causing permanent human damage. Government also manages market failures — situations where private markets produce socially undesirable outcomes: pollution, monopoly power, information asymmetry, and systemic financial risk. Ip uses the metaphor of the gardener: government should not try to design or build the garden (that is the private sector's job), but it should prepare the soil (infrastructure, education), protect against pests (regulation, antitrust), provide water during droughts (counter-cyclical fiscal and monetary policy), and avoid trampling the plants (excessive regulation, corruption, capricious policy changes).",
        },
      ],
      flashcards: [
        {
          id: "lbe-l03-f1",
          front: "Non-rival nature of ideas",
          back: "Unlike physical inputs, ideas can be used by millions simultaneously without depletion. This property allows innovation to overcome diminishing returns and generate sustained economic growth.",
        },
        {
          id: "lbe-l03-f2",
          front: "Three channels of innovation",
          back: "Product innovation (new goods/services), process innovation (better production methods), and organisational innovation (new ways of structuring work and coordination).",
        },
        {
          id: "lbe-l03-f3",
          front: "Institutional ecosystem for innovation",
          back: "Education (skilled researchers/adopters), property rights and rule of law (incentives), openness (global knowledge), and financial systems (risk tolerance, venture capital, bankruptcy that permits retry).",
        },
        {
          id: "lbe-l03-f4",
          front: "Government as gardener (Ip's metaphor)",
          back: "Government should prepare soil (infrastructure, education), protect against pests (regulation), provide water in droughts (counter-cyclical policy) — but not design the garden (private sector's role).",
        },
        {
          id: "lbe-l03-f5",
          front: "Public goods rationale",
          back: "Government provides goods the private sector cannot efficiently supply — basic research, infrastructure, primary education, safety nets — where social returns exceed private returns.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L04  Monetary Policy and the Business Cycle
    ───────────────────────────────────────────────── */
    {
      id: "lbe-l04",
      title: "The Fed, Monetary Policy, and the Business Cycle",
      type: "video",
      duration: 12,
      objectives: [
        "Explain the Federal Reserve's dual mandate and its policy instruments",
        "Describe how interest rates affect spending, investment, and inflation",
        "Analyse the causes and mechanics of recessions",
      ],
      chunks: [
        {
          id: "lbe-l04-c1",
          title: "The Federal Reserve: Guardian of the Economy",
          content:
            "Ip devotes considerable attention to the Federal Reserve — the United States' central bank — and its enormous influence on the economy. The Fed operates under a dual mandate from Congress: maintain maximum employment and stable prices (low inflation). These goals can conflict: stimulating employment may increase inflation, while suppressing inflation may increase unemployment. The Fed's primary instrument is the federal funds rate — the interest rate at which banks lend to each other overnight. By raising this rate, the Fed makes borrowing more expensive throughout the economy: mortgages, car loans, business loans, and credit card rates all rise, cooling spending and investment. By lowering the rate, borrowing becomes cheaper, stimulating demand. The Fed also influences the economy through open market operations (buying and selling government bonds to increase or decrease the money supply), reserve requirements (how much cash banks must hold), and forward guidance (communicating future policy intentions to shape expectations). Since 2008, the Fed has also employed unconventional tools like quantitative easing — purchasing large quantities of long-term securities to push down long-term interest rates when short-term rates have already reached zero.",
        },
        {
          id: "lbe-l04-c2",
          title: "Inflation: Too Much Money Chasing Too Few Goods",
          content:
            "Ip explains inflation — a sustained increase in the general price level — as essentially too much money chasing too few goods. Moderate inflation (2-3 percent annually) is generally considered healthy because it provides a buffer against deflation (falling prices, which discourage spending and investment because consumers wait for lower prices) and allows real wages to adjust gradually. High inflation erodes purchasing power, distorts investment decisions, and disproportionately hurts people on fixed incomes. Hyperinflation — as experienced by Weimar Germany, Zimbabwe, and Venezuela — destroys the currency's function as a store of value and medium of exchange, causing economic collapse. Ip emphasises that the Fed's inflation management is essentially a credibility game: if businesses and consumers believe the Fed will keep inflation near its 2 percent target, they set prices and wages accordingly, making the target self-fulfilling. If they lose confidence — if they believe inflation will spiral — they raise prices pre-emptively, creating the very inflation they feared. This is why central bank independence and consistent communication are so important: they protect the credibility that keeps inflation expectations anchored.",
        },
        {
          id: "lbe-l04-c3",
          title: "Recessions: When the Engine Stalls",
          content:
            "Ip explains recessions — periods of declining economic output, rising unemployment, and falling living standards — as an inherent feature of capitalist economies, not a sign of failure. Recessions can be triggered by various shocks: oil price spikes (1973, 1979), financial crises (2008), pandemics (2020), or simply the natural unwinding of excesses accumulated during expansions. The business cycle — the rhythmic alternation of expansion and contraction — reflects the economy's tendency to overshoot in both directions. During expansions, optimism leads to over-investment, excessive hiring, and the accumulation of inventories and debt beyond what sustained demand can support. The correction — the recession — clears these excesses, allowing the economy to rebuild on a sounder foundation. Ip notes that while recessions are painful and policy should seek to moderate their severity, attempts to prevent them entirely can create worse outcomes by allowing imbalances to grow larger. The Great Moderation — the period of reduced economic volatility from the mid-1980s to 2007 — may have contributed to the severity of the 2008 crisis by encouraging excessive risk-taking during an unusually long period of stability.",
        },
      ],
      flashcards: [
        {
          id: "lbe-l04-f1",
          front: "Federal Reserve's dual mandate",
          back: "Maximum employment and stable prices (low inflation) — goals that can conflict, requiring the Fed to balance the trade-off through interest rate management and other policy tools.",
        },
        {
          id: "lbe-l04-f2",
          front: "Federal funds rate",
          back: "The interest rate at which banks lend to each other overnight — the Fed's primary policy instrument. Raising it cools the economy; lowering it stimulates spending and investment.",
        },
        {
          id: "lbe-l04-f3",
          front: "Inflation as a credibility game",
          back: "If people believe the Fed will maintain its 2% target, they set prices/wages accordingly (self-fulfilling). Loss of confidence triggers pre-emptive price increases, creating the spiral they feared.",
        },
        {
          id: "lbe-l04-f4",
          front: "Business cycle",
          back: "The rhythmic alternation of expansion and contraction. Expansions overshoot (over-investment, excess debt); recessions correct excesses. Attempts to prevent recessions entirely may worsen eventual corrections.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L05  Checkpoint Quiz
    ───────────────────────────────────────────────── */
    {
      id: "lbe-l05",
      title: "Little Book of Economics: Checkpoint Quiz",
      type: "quiz",
      duration: 8,
      objectives: ["Assess understanding of growth drivers, demographics, innovation, and monetary policy"],
      questions: [
        {
          id: "lbe-l05-q1",
          text: "Why does Ip argue that total factor productivity (TFP) is the most important driver of sustained growth?",
          options: [
            { id: "a", text: "Because it measures how many workers a country has" },
            { id: "b", text: "Because TFP captures the contribution of technology, organisation, and education — allowing the same inputs to produce more output and overcoming diminishing returns" },
            { id: "c", text: "Because TFP measures a country's capital stock" },
            { id: "d", text: "Because TFP eliminates the need for population growth" },
          ],
          correctOptionId: "b",
          explanation:
            "Solow showed that TFP — not additional labour or capital — accounted for the majority of 20th-century US growth. TFP represents getting smarter, not just bigger — the only input that defeats diminishing returns.",
        },
        {
          id: "lbe-l05-q2",
          text: "What is the 'demographic dividend' and why does it boost growth?",
          options: [
            { id: "a", text: "Government payments to elderly citizens that stimulate consumer spending" },
            { id: "b", text: "The period when the working-age population is large relative to dependents, providing abundant labour, higher savings, and strong consumer demand" },
            { id: "c", text: "Tax breaks for families with many children" },
            { id: "d", text: "Immigration policies that increase the population" },
          ],
          correctOptionId: "b",
          explanation:
            "During the demographic dividend, fewer dependents per worker means more savings, investment, and consumption. East Asian tigers experienced dramatic growth during this phase (1960s-1990s).",
        },
        {
          id: "lbe-l05-q3",
          text: "Why are ideas described as 'non-rival' goods?",
          options: [
            { id: "a", text: "Because only one person can use an idea at a time" },
            { id: "b", text: "Because ideas can be used by millions of people simultaneously without being depleted — unlike physical inputs, use by one person does not reduce availability to others" },
            { id: "c", text: "Because ideas have no monetary value" },
            { id: "d", text: "Because ideas are always freely available to everyone" },
          ],
          correctOptionId: "b",
          explanation:
            "Non-rivalry means one person using an idea does not diminish its availability to others. This property is why innovation can generate value far exceeding the original investment — and why ideas overcome diminishing returns.",
        },
        {
          id: "lbe-l05-q4",
          text: "What did Ip mean by describing government's role as that of a 'gardener'?",
          options: [
            { id: "a", text: "Government should grow food for the population" },
            { id: "b", text: "Government should prepare conditions for growth (infrastructure, education), protect against problems (regulation), provide support during downturns (counter-cyclical policy), but not design the economy" },
            { id: "c", text: "Government should control all aspects of the economy like a garden" },
            { id: "d", text: "Government should only focus on agriculture" },
          ],
          correctOptionId: "b",
          explanation:
            "The gardener metaphor captures Ip's middle ground: government provides public goods, manages market failures, and supports during crises — but the private sector creates growth. Government should nurture, not architect.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L06  Final Assessment
    ───────────────────────────────────────────────── */
    {
      id: "lbe-l06",
      title: "Little Book of Economics: Comprehensive Assessment",
      type: "quiz",
      duration: 9,
      objectives: ["Evaluate mastery of macroeconomic principles, monetary policy, and growth theory"],
      questions: [
        {
          id: "lbe-l06-q1",
          text: "A developing country invests massively in factories and infrastructure but neglects education and legal institutions. According to Ip, what is the likely outcome?",
          options: [
            { id: "a", text: "Rapid and sustained economic growth" },
            { id: "b", text: "Initial growth that hits diminishing returns because capital investment without TFP growth (education, innovation, institutions) cannot sustain per-capita improvements" },
            { id: "c", text: "No economic change at all" },
            { id: "d", text: "The country becomes an innovation leader" },
          ],
          correctOptionId: "b",
          explanation:
            "Capital alone faces diminishing returns. Without the TFP contributors — education, innovation, property rights, rule of law — each additional dollar of investment yields progressively less output. China succeeded because it combined capital with institutional reform.",
        },
        {
          id: "lbe-l06-q2",
          text: "Why does Ip argue that moderate inflation (2-3%) is healthier than zero inflation?",
          options: [
            { id: "a", text: "Because inflation makes everyone richer" },
            { id: "b", text: "Because moderate inflation provides a buffer against deflation, allows real wages to adjust gradually, and keeps the Fed's tools effective" },
            { id: "c", text: "Because the Fed cannot measure zero inflation" },
            { id: "d", text: "Because inflation helps only banks" },
          ],
          correctOptionId: "b",
          explanation:
            "Deflation (falling prices) discourages spending and can trap economies in a downward spiral. Moderate inflation provides room for the Fed to cut real interest rates during downturns, and allows the economy to absorb shocks through gradual price adjustments.",
        },
        {
          id: "lbe-l06-q3",
          text: "How does the Federal Reserve's credibility affect inflation expectations?",
          options: [
            { id: "a", text: "Credibility has no effect on inflation" },
            { id: "b", text: "If businesses and consumers believe the Fed will maintain its target, they set prices accordingly — making the target self-fulfilling. Loss of credibility triggers pre-emptive price increases" },
            { id: "c", text: "The Fed's reputation only matters to banks" },
            { id: "d", text: "Credibility reduces the money supply directly" },
          ],
          correctOptionId: "b",
          explanation:
            "Inflation management is fundamentally a credibility game. Anchored expectations create economic stability; unanchored expectations create self-fulfilling inflationary spirals. This is why central bank independence is essential.",
        },
        {
          id: "lbe-l06-q4",
          text: "What practical lesson does Ip draw from the Great Moderation's contribution to the 2008 crisis?",
          options: [
            { id: "a", text: "Economic stability always leads to financial crises" },
            { id: "b", text: "Prolonged stability encouraged excessive risk-taking, demonstrating that attempts to prevent all recessions can worsen eventual corrections by allowing imbalances to grow larger" },
            { id: "c", text: "The Great Moderation had no connection to the 2008 crisis" },
            { id: "d", text: "Central banks should encourage periodic recessions" },
          ],
          correctOptionId: "b",
          explanation:
            "The Great Moderation (mid-1980s to 2007) reduced economic volatility but may have bred complacency — with both investors and regulators underestimating risk during an unusually long period of stability, contributing to the severity of the eventual correction.",
        },
      ],
    },
  ],
};
