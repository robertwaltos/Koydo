import type { LearningModule } from "@/lib/modules/types";

// High-quality curriculum module derived from EPUB.
// Source: G:\My Drive\15_E-BOOKS\file002119.epub
// Author: William J. Bernstein  |  Subject: Economics / Finance / Investing

export const TheFourPillarsOfInvestingLessonsForBuildingModule: LearningModule = {
  id: "the-four-pillars-of-investing-lessons-for-building",
  title: "The Four Pillars of Investing: Lessons for Building a Winning Portfolio",
  description:
    "William Bernstein's investment classic organises the discipline of personal investing into four interlocking pillars: the Theory of investing (risk can be predicted only in aggregate, not for individual securities), the History of investing (manias and crashes are recurring features, not anomalies), the Psychology of investing (human cognitive biases systematically undermine returns), and the Business of investing (the financial services industry is structured to transfer wealth from clients to itself). Together, these pillars form a comprehensive framework for building a low-cost, diversified, evidence-based portfolio.",
  subject: "Economics",
  tags: ["epub-derived", "curriculum", "interactive", "investing", "portfolio-theory", "personal-finance"],
  minAge: 18,
  maxAge: 99,
  moduleVersion: "2.0.0",
  version: "2.0.0",
  learningObjectives: [
    "Explain the relationship between risk and return across asset classes",
    "Define the Efficient Market Hypothesis and its practical implications for individual investors",
    "Describe historical patterns of speculative manias and their common characteristics",
    "Identify cognitive biases that undermine investment decisions",
    "Analyse how the financial services industry's incentives conflict with client interests",
    "Apply asset allocation principles to construct a diversified, low-cost portfolio",
  ],
  lessons: [

    /* ─────────────────────────────────────────────────
       L01  Pillar One: Theory — Risk and Return
    ───────────────────────────────────────────────── */
    {
      id: "fpi-l01",
      title: "Pillar One: The Theory of Investing — Risk and Return",
      type: "video",
      duration: 13,
      objectives: [
        "Explain the fundamental risk-return trade-off",
        "Distinguish systematic from idiosyncratic risk",
        "Define the equity risk premium and why it compensates for uncertainty",
      ],
      chunks: [
        {
          id: "fpi-l01-c1",
          title: "No Guts, No Glory: The Iron Law of Risk and Return",
          content:
            "Bernstein opens Pillar One with a deceptively simple principle: in investing, risk and return are inseparable. Higher expected returns require accepting higher uncertainty about outcomes. This is not a temporary market condition or a flaw to be exploited but a fundamental structural feature of financial markets. If a safe investment — like a Treasury bill — offered the same long-term return as stocks, no rational investor would accept the volatility of equities. The extra return that stocks have historically provided over safe assets — the equity risk premium — is not a gift; it is compensation for enduring gut-wrenching declines, sometimes lasting years. Between 1929 and 1932, the US stock market lost approximately 89 percent of its value. Investors who panicked and sold locked in real, permanent losses. Those who held on eventually recovered and participated in decades of subsequent growth. Bernstein's point is that the premium exists precisely because most people cannot tolerate the risk — and those who can are rewarded for it.",
        },
        {
          id: "fpi-l01-c2",
          title: "Systematic vs. Idiosyncratic Risk",
          content:
            "Bernstein introduces the critical distinction between systematic risk (also called market risk) — the risk inherent in the entire market that cannot be eliminated through diversification — and idiosyncratic risk (also called specific or unsystematic risk) — the risk unique to individual companies or industries. Modern portfolio theory, developed by Harry Markowitz in 1952, demonstrated mathematically that while individual stock returns are highly unpredictable, the aggregate behaviour of diversified portfolios is far more predictable. By holding a sufficiently diversified portfolio, investors can eliminate idiosyncratic risk entirely, leaving only systematic risk — for which they are compensated with the equity risk premium. An investor who holds thirty stocks from different industries has dramatically reduced their exposure to any single company's failures while maintaining their exposure to the overall growth of the economy. The practical implication is powerful: owning the entire market through an index fund is not a compromise — it is the theoretically optimal strategy for capturing returns while minimising uncompensated risk.",
        },
        {
          id: "fpi-l01-c3",
          title: "Measuring the Beast: Valuation and Expected Returns",
          content:
            "Bernstein dedicates significant attention to the problem of estimating future returns — a task he warns is far more difficult than the financial industry admits. He examines the insights of Irving Fisher, the economist who declared in 1929 that stocks had reached 'a permanently high plateau' — just before the greatest crash in history. Fisher's humiliation illustrates a recurring theme: even brilliant analysts cannot predict short-term market movements. However, Bernstein argues that long-term expected returns can be roughly estimated through fundamental valuation metrics. The Gordon equation — expected return equals dividend yield plus dividend growth rate — provides a crude but useful framework. When stocks are expensive (low dividend yields, high price-to-earnings ratios), expected future returns are lower; when stocks are cheap (high yields, low P/E ratios), expected future returns are higher. The key insight is that valuation predicts returns over decades, not months, and even then only approximately. Investors who accept this uncertainty and maintain consistent exposure through all market conditions are rewarded over time.",
        },
      ],
      flashcards: [
        {
          id: "fpi-l01-f1",
          front: "Equity risk premium",
          back: "The extra return stocks provide over safe assets (like Treasury bills). It is not a gift but compensation for enduring volatility and uncertainty — it exists precisely because most people cannot tolerate the risk.",
        },
        {
          id: "fpi-l01-f2",
          front: "Systematic vs. idiosyncratic risk",
          back: "Systematic risk: market-wide, cannot be diversified away. Idiosyncratic risk: unique to individual companies, can be eliminated through diversification. Investors are only compensated for systematic risk.",
        },
        {
          id: "fpi-l01-f3",
          front: "Gordon equation",
          back: "Expected return ≈ dividend yield + dividend growth rate. A rough tool for estimating long-term (not short-term) equity returns based on current valuation.",
        },
        {
          id: "fpi-l01-f4",
          front: "Index fund rationale",
          back: "Holding the entire market is theoretically optimal: it eliminates all uncompensated idiosyncratic risk while capturing the equity risk premium — not a compromise but the evidence-based strategy.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L02  The Market Is Smarter Than You
    ───────────────────────────────────────────────── */
    {
      id: "fpi-l02",
      title: "Efficient Markets and the Perfect Portfolio",
      type: "video",
      duration: 12,
      objectives: [
        "Explain the Efficient Market Hypothesis (EMH) and its three forms",
        "Describe the asset allocation decision and why it matters more than stock selection",
        "Apply the concept of rebalancing to maintain target allocations",
      ],
      chunks: [
        {
          id: "fpi-l02-c1",
          title: "The Efficient Market Hypothesis",
          content:
            "Bernstein introduces the Efficient Market Hypothesis (EMH), one of the most important and controversial ideas in finance. In its semi-strong form — which Bernstein largely endorses — EMH states that all publicly available information is already reflected in current stock prices, making it impossible to consistently identify undervalued or overvalued securities using fundamental analysis alone. This does not mean prices are always 'correct' in some absolute sense; it means that any mispricings are too small, too fleeting, and too costly to exploit systematically after accounting for trading costs, taxes, and the time required for research. The evidence supporting EMH is extensive: year after year, the majority of actively managed mutual funds underperform their benchmark indices. The few that outperform in one period are no more likely to outperform in subsequent periods than chance would predict. Bernstein argues that the financial industry's continued promotion of active management in the face of this evidence is not intellectual disagreement but economic self-interest — active management generates far higher fees than passive indexing.",
        },
        {
          id: "fpi-l02-c2",
          title: "Asset Allocation: The Most Important Decision",
          content:
            "If stock selection is largely futile, Bernstein argues that the most important investment decision is asset allocation — how to divide a portfolio among broad asset classes: domestic stocks, international stocks, bonds, and real estate. Research by Brinson, Hood, and Beebower demonstrated that asset allocation explains over 90 percent of the variation in portfolio returns across time. The specific stocks or bonds within each category matter far less than the proportions allocated to each category. The logic is straightforward: different asset classes have different risk-return profiles and different correlations with each other. When US stocks decline, international stocks may hold steady or rise. When stocks fall, high-quality bonds typically appreciate. By combining imperfectly correlated assets, investors can achieve higher returns for the same level of risk — or the same returns with lower risk. This is the free lunch of diversification, and it is one of the few genuine free lunches in investing. Bernstein recommends that most investors hold a simple portfolio of three to five low-cost index funds spanning domestic equities, international equities, and high-quality bonds.",
        },
        {
          id: "fpi-l02-c3",
          title: "Rebalancing: Discipline Over Instinct",
          content:
            "A well-constructed portfolio will drift from its target allocation as different asset classes deliver different returns. If stocks rise 30 percent and bonds rise 5 percent, the portfolio will become over-weighted in stocks — exactly when stocks have become more expensive and potentially riskier. Rebalancing — periodically selling assets that have appreciated above their target weight and buying assets that have fallen below — is a disciplined process that forces investors to do what is psychologically difficult but financially beneficial: sell high and buy low. Bernstein notes that rebalancing typically adds a small but meaningful return boost over time — perhaps 0.5 to 1 percent annually — not because it generates alpha but because it systematically harvests the volatility of different asset classes. More importantly, rebalancing prevents the portfolio from becoming dangerously concentrated in whatever asset class has risen the most — which is often the asset class most vulnerable to a subsequent decline. The discipline of rebalancing is, in Bernstein's view, one of the most reliable sources of investment value available to individual investors.",
        },
      ],
      flashcards: [
        {
          id: "fpi-l02-f1",
          front: "Efficient Market Hypothesis (semi-strong form)",
          back: "All publicly available information is already reflected in stock prices. Mispricings may exist but are too small, fleeting, and costly to exploit systematically — explaining why most active fund managers underperform indices.",
        },
        {
          id: "fpi-l02-f2",
          front: "Asset allocation explains 90%+ of return variation",
          back: "Research shows that the proportion allocated to each asset class (stocks, bonds, international) matters far more than which specific securities are chosen within each class.",
        },
        {
          id: "fpi-l02-f3",
          front: "Free lunch of diversification",
          back: "Combining imperfectly correlated assets achieves higher returns for the same risk (or same returns with lower risk) — the only genuine free lunch in investing.",
        },
        {
          id: "fpi-l02-f4",
          front: "Rebalancing",
          back: "Periodically returning to target allocations by selling appreciated assets and buying depreciated ones. Forces the psychologically difficult practice of selling high and buying low, adding ~0.5-1% annual return.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L03  Pillar Two: History — Manias and Crashes
    ───────────────────────────────────────────────── */
    {
      id: "fpi-l03",
      title: "Pillar Two: The History of Investing — Manias and Crashes",
      type: "video",
      duration: 12,
      objectives: [
        "Identify common characteristics of speculative manias",
        "Apply historical lessons to recognise bubble conditions",
        "Explain why markets are cyclical and how to prepare emotionally and financially",
      ],
      chunks: [
        {
          id: "fpi-l03-c1",
          title: "A History of Manias: From Tulips to Tech Stocks",
          content:
            "Bernstein devotes Pillar Two to the history of speculative manias, arguing that understanding their recurring nature is essential for long-term investment survival. He traces a lineage that includes the Dutch Tulip Mania of 1637, the South Sea Bubble of 1720, the Railway Mania of the 1840s, the Roaring Twenties stock bubble, and the dot-com bubble of the late 1990s. Despite centuries separating these episodes, they share remarkably consistent characteristics: a genuinely transformative technology or economic development that provides plausible justification for elevated valuations; early investors who profit spectacularly, attracting wider public attention; the belief that 'this time is different' — that traditional valuation metrics no longer apply because the new paradigm has permanently altered economic reality; the entry of uninformed speculators, including many who have never previously invested, financed increasingly by borrowed money; and a climactic peak followed by a devastating crash that destroys the wealth of those who arrived latest.",
        },
        {
          id: "fpi-l03-c2",
          title: "The Anatomy of Bubbles",
          content:
            "Bernstein identifies several structural features that enable and amplify bubbles. First, financial innovation: each major mania involves new financial instruments or structures that appear to reduce risk but actually increase systemic fragility. The South Sea Company used novel share structures. The 1920s saw the proliferation of investment trusts (leveraged closed-end funds). The 1990s produced dot-com IPOs with no earnings and no plausible business models. Second, leverage: bubbles are fuelled by borrowed money, which amplifies gains on the way up and accelerates liquidation on the way down, as margin calls force selling into declining markets. Third, regulatory failure: each mania occurs in an environment where regulators are either unable or unwilling to constrain speculative excess, often because they share the prevailing optimism or face political pressure from beneficiaries of the bubble. Fourth, narratives of permanent transformation: every bubble is sustained by a story that explains why the old rules no longer apply — a story that seems compelling at the time but ridiculous in retrospect.",
        },
        {
          id: "fpi-l03-c3",
          title: "Lessons for the Modern Investor",
          content:
            "Bernstein extracts several practical lessons from this history. First, speculative manias are not anomalies but recurring features of financial markets — they will happen again, and investors must prepare for them emotionally and structurally. Second, the greatest risk is not that a mania will occur but that the investor will be drawn into it: the social pressure to participate when everyone around you is getting rich is psychologically overwhelming. Third, the best protection is a pre-committed investment plan — a written policy statement specifying asset allocation, rebalancing rules, and contribution rates that the investor follows regardless of market conditions. Fourth, history shows that the best time to buy is when things look worst — when pessimism is deepest, valuations are lowest, and every headline screams danger. Conversely, the worst time to buy is when optimism is highest and everyone agrees that the market can only go up. Bernstein quotes Baron Rothschild: the time to buy is when there is blood in the streets.",
        },
      ],
      flashcards: [
        {
          id: "fpi-l03-f1",
          front: "Common characteristics of speculative manias",
          back: "Transformative technology, early spectacular profits, belief that 'this time is different,' entry of uninformed speculators using leverage, and a climactic peak followed by devastating crash.",
        },
        {
          id: "fpi-l03-f2",
          front: "Role of leverage in bubbles",
          back: "Borrowed money amplifies gains on the way up and accelerates liquidation on the way down through margin calls — turning orderly declines into panicked sell-offs.",
        },
        {
          id: "fpi-l03-f3",
          front: "Narrative of permanent transformation",
          back: "Every bubble is sustained by a story explaining why 'the old rules no longer apply' — compelling at the time, ridiculous in retrospect. Recognising these narratives is key to bubble defence.",
        },
        {
          id: "fpi-l03-f4",
          front: "Best protection against manias",
          back: "A pre-committed written investment policy specifying asset allocation and rebalancing rules, followed regardless of market conditions — removing emotion from the decision process.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L04  Pillars Three and Four: Psychology and Business
    ───────────────────────────────────────────────── */
    {
      id: "fpi-l04",
      title: "Pillars Three & Four: Psychology and the Business of Investing",
      type: "video",
      duration: 13,
      objectives: [
        "Identify cognitive biases that undermine investment performance",
        "Explain how the financial services industry's incentives conflict with client outcomes",
        "Apply defensive strategies against both internal biases and external exploitation",
      ],
      chunks: [
        {
          id: "fpi-l04-c1",
          title: "Pillar Three: The Psychology of Investing",
          content:
            "Bernstein's third pillar addresses the cognitive biases that systematically undermine investment performance. Drawing on the research of Kahneman and Tversky, he catalogues the most damaging biases: loss aversion (the pain of losing a dollar is psychologically twice as intense as the pleasure of gaining one, causing investors to sell winners too early and hold losers too long), overconfidence (investors consistently overestimate their ability to select winning stocks and time market turning points), recency bias (recent experience is weighted disproportionately — after a market crash, investors believe stocks are permanently dangerous; after a boom, they believe stocks can only go up), and herd behaviour (the powerful social drive to do what everyone else is doing, which leads to buying at peaks and selling at bottoms). Bernstein argues that these biases are not character flaws but hard-wired features of human cognition shaped by evolution for survival in physical environments. The problem is that the ancestral environment rewarded rapid, fear-driven decision-making, while investing rewards patience, delayed gratification, and the ability to act contrary to instinct.",
        },
        {
          id: "fpi-l04-c2",
          title: "Pillar Four: The Business of Investing",
          content:
            "The fourth pillar reveals an uncomfortable truth: the financial services industry is primarily structured to transfer wealth from clients to itself. Bernstein documents the multiple layers of cost that erode investor returns: management fees (typically 1-2 percent annually for actively managed mutual funds), trading costs (commissions and market impact), tax inefficiency (excessive trading generates taxable gains), and the hidden cost of cash drag (funds hold cash reserves that underperform the market). These costs compound relentlessly. A 2 percent annual fee appears modest, but over 30 years it consumes roughly 45 percent of the investor's potential wealth — nearly half of what they could have earned with a low-cost index fund charging 0.05 percent. Bernstein argues that the industry's business model depends on a fundamental information asymmetry: most investors do not understand the cumulative impact of fees, and the industry has strong incentives to maintain that ignorance through marketing, complexity, and the cultivation of a false sense that professional management justifies the cost.",
        },
        {
          id: "fpi-l04-c3",
          title: "Defending Against Biases and Industry Extraction",
          content:
            "Bernstein synthesises the four pillars into a practical defensive strategy. Against cognitive biases: automate decisions wherever possible (automatic contributions, automatic rebalancing), write an investment policy statement and commit to following it regardless of emotional state, study financial history to develop an intuitive appreciation for the cyclical nature of markets, and cultivate relationships with like-minded investors who will reinforce discipline rather than promote panic. Against industry extraction: use low-cost index funds (Bernstein specifically recommends Vanguard and similar providers with investor-owned governance structures), minimise trading, hold investments in tax-advantaged accounts where possible, and be profoundly sceptical of any financial product that is too complex to understand in a single sentence. The overarching principle is that successful investing is not about brilliance, insight, or timing — it is about discipline, cost minimisation, and the ability to maintain a rational strategy through the inevitable emotional storms of market cycles.",
        },
      ],
      flashcards: [
        {
          id: "fpi-l04-f1",
          front: "Loss aversion",
          back: "The pain of losing a dollar is psychologically ~2× as intense as the pleasure of gaining one. Investors sell winners too early (to lock in pleasure) and hold losers too long (to avoid realising pain).",
        },
        {
          id: "fpi-l04-f2",
          front: "Impact of a 2% annual fee over 30 years",
          back: "Consumes roughly 45% of potential wealth due to compounding. A low-cost index fund at 0.05% leaves dramatically more capital — the cumulative effect far exceeds what most investors realise.",
        },
        {
          id: "fpi-l04-f3",
          front: "Information asymmetry in financial industry",
          back: "Most investors do not understand the cumulative impact of fees. The industry maintains this ignorance through marketing, complexity, and the false impression that professional management justifies the cost.",
        },
        {
          id: "fpi-l04-f4",
          front: "Bernstein's core principle of successful investing",
          back: "Not brilliance, insight, or timing — but discipline, cost minimisation, and maintaining a rational strategy through emotional storms. Automate decisions, use index funds, write a policy statement, follow it.",
        },
        {
          id: "fpi-l04-f5",
          front: "Recency bias in investing",
          back: "Disproportionately weighting recent experience — believing stocks are permanently dangerous after a crash, or can only go up after a boom — leading to buying at peaks and selling at bottoms.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L05  Checkpoint Quiz
    ───────────────────────────────────────────────── */
    {
      id: "fpi-l05",
      title: "Four Pillars of Investing: Checkpoint Quiz",
      type: "quiz",
      duration: 8,
      objectives: ["Assess understanding of risk-return theory, market efficiency, and behavioural biases"],
      questions: [
        {
          id: "fpi-l05-q1",
          text: "Why does the equity risk premium exist, according to Bernstein?",
          options: [
            { id: "a", text: "Because governments guarantee stock market returns" },
            { id: "b", text: "Because higher stock returns compensate investors for enduring volatility that most people cannot tolerate — the premium exists precisely because the risk is real and painful" },
            { id: "c", text: "Because stocks are always safer than bonds in the long run" },
            { id: "d", text: "Because financial advisors recommend stocks over bonds" },
          ],
          correctOptionId: "b",
          explanation:
            "The equity risk premium is compensation for bearing real risk. If stocks were not volatile and frightening during downturns, everyone would hold them and the premium would disappear. The premium rewards the ability to endure uncertainty.",
        },
        {
          id: "fpi-l05-q2",
          text: "What does the Efficient Market Hypothesis (semi-strong form) imply for individual stock-pickers?",
          options: [
            { id: "a", text: "All stocks will produce the same returns" },
            { id: "b", text: "Publicly available information is already reflected in prices, making it impossible to consistently identify mispricings after accounting for costs" },
            { id: "c", text: "Only insider information can be used to select stocks" },
            { id: "d", text: "Stock markets are perfectly predictable" },
          ],
          correctOptionId: "b",
          explanation:
            "EMH does not claim prices are always 'correct' — only that mispricings are too small, fleeting, and costly to exploit systematically. This explains why the majority of active managers underperform index benchmarks over time.",
        },
        {
          id: "fpi-l05-q3",
          text: "Why does Bernstein emphasise that speculative manias share consistent characteristics across centuries?",
          options: [
            { id: "a", text: "Because all bubbles involve the same stocks" },
            { id: "b", text: "To demonstrate that manias are recurring structural features of markets — not anomalies — so investors must prepare for them emotionally and structurally" },
            { id: "c", text: "Because regulators always prevent them from getting serious" },
            { id: "d", text: "Because historical manias are only of academic interest" },
          ],
          correctOptionId: "b",
          explanation:
            "By showing the pattern — transformative technology, spectacular early profits, 'this time is different' narrative, uninformed speculators, leverage, crash — Bernstein argues that future manias are inevitable and preparation, not prediction, is the defence.",
        },
        {
          id: "fpi-l05-q4",
          text: "What is the practical consequence of loss aversion for portfolio management?",
          options: [
            { id: "a", text: "Investors sell winners too early to lock in gains and hold losers too long to avoid realising pain — the opposite of optimal behaviour" },
            { id: "b", text: "Investors always make rational decisions about when to sell" },
            { id: "c", text: "Investors hold all stocks equally regardless of performance" },
            { id: "d", text: "Loss aversion only affects professional traders" },
          ],
          correctOptionId: "a",
          explanation:
            "Because losses feel ~2× as painful as equivalent gains feel pleasurable, investors lock in small gains quickly but hold onto losing positions hoping to recover — systematically doing the opposite of 'sell high, buy low.'",
        },
        {
          id: "fpi-l05-q5",
          text: "How does a 2% annual management fee affect long-term wealth, according to Bernstein?",
          options: [
            { id: "a", text: "It has negligible impact over time" },
            { id: "b", text: "It consumes roughly 45% of potential wealth over 30 years due to compounding — nearly half of what the investor could have earned with a low-cost index fund" },
            { id: "c", text: "It is offset by superior active management returns" },
            { id: "d", text: "It only matters for accounts under $10,000" },
          ],
          correctOptionId: "b",
          explanation:
            "Fees compound just as returns do. Over 30 years, a 2% drag each year consumes a massive portion of wealth — far exceeding what most investors realise. Low-cost index funds at 0.05% preserve dramatically more capital.",
        },
      ],
    },

    /* ─────────────────────────────────────────────────
       L06  Final Assessment
    ───────────────────────────────────────────────── */
    {
      id: "fpi-l06",
      title: "Four Pillars of Investing: Comprehensive Assessment",
      type: "quiz",
      duration: 9,
      objectives: ["Evaluate mastery of all four pillars of evidence-based investing"],
      questions: [
        {
          id: "fpi-l06-q1",
          text: "An investor who holds thirty stocks from different industries has primarily achieved what, according to portfolio theory?",
          options: [
            { id: "a", text: "Guaranteed positive returns" },
            { id: "b", text: "Elimination of idiosyncratic risk while maintaining exposure to the equity risk premium — the theoretically optimal trade-off" },
            { id: "c", text: "Immunity from all market declines" },
            { id: "d", text: "Higher returns than any individual stock" },
          ],
          correctOptionId: "b",
          explanation:
            "Diversification eliminates company-specific (idiosyncratic) risk but cannot eliminate market-wide (systematic) risk. The investor is compensated via the equity risk premium only for systematic risk — which is unavoidable.",
        },
        {
          id: "fpi-l06-q2",
          text: "A colleague insists that 'this time is different' because new technology has permanently transformed the economy. Based on Bernstein's analysis of history, what is the most likely reality?",
          options: [
            { id: "a", text: "They are probably correct — technology does change fundamental economics" },
            { id: "b", text: "The narrative of permanent transformation is a hallmark of every speculative mania — it always seems compelling at the time and ridiculous in retrospect" },
            { id: "c", text: "Technology has no effect on financial markets" },
            { id: "d", text: "Historical patterns are irrelevant to modern investing" },
          ],
          correctOptionId: "b",
          explanation:
            "From Dutch tulips to dot-coms, every bubble involves a genuinely transformative innovation — but the narrative of permanently elevated valuations has always proven false. The innovation may be real; the valuation mania is still a mania.",
        },
        {
          id: "fpi-l06-q3",
          text: "Why does Bernstein recommend the Gordon equation for estimating future stock returns?",
          options: [
            { id: "a", text: "It precisely predicts returns for the next quarter" },
            { id: "b", text: "It provides a crude but useful framework — expected return ≈ dividend yield + growth rate — that predicts returns over decades (not months) with rough accuracy" },
            { id: "c", text: "It was invented by Warren Buffett" },
            { id: "d", text: "It eliminates all uncertainty from investing" },
          ],
          correctOptionId: "b",
          explanation:
            "The Gordon equation is useful precisely because of its simplicity and long-term applicability. When yields are low and valuations high, expected returns are lower — and vice versa. But it operates over decades, not short periods.",
        },
        {
          id: "fpi-l06-q4",
          text: "What does rebalancing a portfolio systematically force the investor to do?",
          options: [
            { id: "a", text: "Always buy more stocks" },
            { id: "b", text: "Sell assets that have appreciated above target weight and buy those that have fallen below — systematically selling high and buying low" },
            { id: "c", text: "Concentrate in the best-performing asset class" },
            { id: "d", text: "Avoid all trading to minimise costs" },
          ],
          correctOptionId: "b",
          explanation:
            "Rebalancing enforces the psychologically difficult but financially beneficial discipline of selling what has risen (reducing overconcentration) and buying what has fallen (purchasing at lower valuations) — typically adding 0.5-1% annual return.",
        },
        {
          id: "fpi-l06-q5",
          text: "Bernstein argues that successful investing is NOT about brilliance or timing. What is it about?",
          options: [
            { id: "a", text: "Finding the best financial advisor" },
            { id: "b", text: "Discipline, cost minimisation, and maintaining a rational strategy through emotional storms — automating decisions and following a written policy statement" },
            { id: "c", text: "Reading financial news daily and reacting quickly" },
            { id: "d", text: "Concentrating wealth in a single high-conviction stock" },
          ],
          correctOptionId: "b",
          explanation:
            "Bernstein's synthesis of all four pillars: the theory shows markets are efficient, history shows manias recur, psychology shows humans are biased, and the industry is extractive. The defence is discipline, low costs, and automation — not insight.",
        },
      ],
    },
  ],
};
