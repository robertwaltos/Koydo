import type { LearningModule } from "@/lib/modules/types";

export const Economics201Module: LearningModule = {
  id: "economics-201",
  title: "Macroeconomics and Policy",
  description:
    "Explore how entire economies work — GDP, inflation, unemployment, monetary and fiscal policy. Understand the forces that drive recessions, recoveries, and long-run growth.",
  subject: "Business",
  tags: ["core", "curriculum", "interactive", "mba", "economics"],
  minAge: 16,
  maxAge: 99,
  moduleVersion: "2.0.0",
  version: "2.0.0",
  learningObjectives: [
    "Measure economic output using GDP and its components",
    "Analyze the causes and costs of inflation and unemployment",
    "Explain the business cycle: expansion, peak, recession, trough",
    "Describe how central banks use monetary policy to stabilize economies",
    "Evaluate fiscal policy tools: government spending and taxation",
    "Interpret the aggregate demand / aggregate supply model",
    "Assess the trade-offs between inflation and unemployment (Phillips curve)"
  ],
  lessons: [
    {
      id: "economics-201-l01",
      title: "Measuring the Economy: GDP",
      type: "video",
      duration: 12,
      objectives: [
        "Define GDP as the total market value of all final goods and services produced",
        "Distinguish between nominal and real GDP",
        "Identify the four components of GDP: C + I + G + NX"
      ],
      chunks: [
        {
          id: "economics-201-l01-c1",
          title: "What Is GDP?",
          content:
            "Gross Domestic Product (GDP) is the total market value of all final goods and services produced within a country in a given period. It's the broadest measure of economic activity. 'Final' means we don't count intermediate goods (flour used to bake bread) to avoid double counting. GDP can be measured by expenditure (what people spend), income (what people earn), or production (what firms produce) — all three yield the same number."
        },
        {
          id: "economics-201-l01-c2",
          title: "Components of GDP",
          content:
            "GDP = C + I + G + NX. Consumption (C): household spending on goods and services (~70% of US GDP). Investment (I): business spending on capital, residential construction, and inventory changes. Government spending (G): federal, state, and local purchases (not transfer payments like Social Security). Net exports (NX): exports minus imports. When imports exceed exports, NX is negative."
        },
        {
          id: "economics-201-l01-c3",
          title: "Nominal vs. Real GDP",
          content:
            "Nominal GDP is measured in current prices — it can rise simply because prices rose, not because more was produced. Real GDP adjusts for inflation using a base year's prices, giving a truer picture of economic growth. The GDP deflator (nominal GDP / real GDP × 100) measures the overall price level. When comparing economic performance across years, always use real GDP."
        }
      ],
      flashcards: [
        { id: "economics-201-l01-f1", front: "GDP", back: "Total market value of all final goods and services produced within a country in a given period" },
        { id: "economics-201-l01-f2", front: "GDP formula", back: "C + I + G + NX (Consumption + Investment + Government spending + Net exports)" },
        { id: "economics-201-l01-f3", front: "Real vs. nominal GDP", back: "Real GDP adjusts for inflation (constant prices); nominal uses current prices — real gives true growth" },
        { id: "economics-201-l01-f4", front: "GDP deflator", back: "(Nominal GDP / Real GDP) × 100 — measures the overall price level in the economy" }
      ]
    },
    {
      id: "economics-201-l02",
      title: "Inflation and Unemployment",
      type: "interactive",
      duration: 14,
      objectives: [
        "Define inflation and calculate it using CPI",
        "Distinguish between frictional, structural, and cyclical unemployment",
        "Explain the natural rate of unemployment"
      ],
      chunks: [
        {
          id: "economics-201-l02-c1",
          title: "Measuring Inflation",
          content:
            "Inflation is a sustained rise in the general price level. The Consumer Price Index (CPI) tracks the cost of a fixed basket of goods over time. CPI inflation rate = (CPI this year - CPI last year) / CPI last year × 100. Moderate inflation (2-3%) is normal and even healthy. Hyperinflation (>50% per month) destroys purchasing power and savings. Deflation (falling prices) can be equally dangerous — it discourages spending as consumers wait for lower prices."
        },
        {
          id: "economics-201-l02-c2",
          title: "Types of Unemployment",
          content:
            "Frictional unemployment: people between jobs or entering the workforce — temporary and voluntary. Structural unemployment: skills mismatch — workers' skills don't match available jobs (e.g., factory workers displaced by automation). Cyclical unemployment: caused by economic downturns — demand for labor falls during recessions. The natural rate of unemployment (frictional + structural) exists even in a healthy economy, typically 4-5%."
        },
        {
          id: "economics-201-l02-c3",
          title: "Costs of Inflation and Unemployment",
          content:
            "Inflation erodes purchasing power, hurts savers and fixed-income earners, creates uncertainty for business planning, and distorts price signals. Unemployment wastes human potential, reduces GDP, causes personal hardship, and erodes skills over time. The Phillips curve suggests a short-run trade-off: lower unemployment comes with higher inflation, and vice versa — policymakers must balance both."
        }
      ],
      activities: [
        {
          id: "economics-201-l02-a1",
          title: "Sort into Categories",
          type: "sorting_buckets",
          buckets: ["Frictional Unemployment", "Structural Unemployment", "Cyclical Unemployment"],
          items: [
            { text: "Recent graduate searching for first job", bucket: "Frictional Unemployment" },
            { text: "Coal miner whose mine closed due to shift to renewables", bucket: "Structural Unemployment" },
            { text: "Restaurant worker laid off during recession", bucket: "Cyclical Unemployment" },
            { text: "Worker who quit to find a better-paying position", bucket: "Frictional Unemployment" },
            { text: "Assembly line worker replaced by robots", bucket: "Structural Unemployment" },
            { text: "Construction workers idle during housing market crash", bucket: "Cyclical Unemployment" }
          ]
        }
      ],
      flashcards: [
        { id: "economics-201-l02-f1", front: "Consumer Price Index (CPI)", back: "Measures the average change in prices paid by consumers for a basket of goods and services over time" },
        { id: "economics-201-l02-f2", front: "Natural rate of unemployment", back: "Frictional + structural unemployment — the rate that exists in a healthy economy (typically 4-5%)" },
        { id: "economics-201-l02-f3", front: "Phillips curve", back: "Shows the short-run inverse relationship between inflation and unemployment — lower unemployment → higher inflation" },
        { id: "economics-201-l02-f4", front: "Hyperinflation", back: "Extremely rapid inflation (>50% per month) that destroys a currency's purchasing power — e.g., Zimbabwe 2008, Weimar Germany 1923" }
      ]
    },
    {
      id: "economics-201-l03",
      title: "GDP & Inflation Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: ["Demonstrate knowledge of GDP, inflation, and unemployment"],
      questions: [
        {
          id: "economics-201-l03-q1",
          text: "Which component is typically the largest share of US GDP?",
          skillId: "economics-201-skill-core",
          options: [
            { id: "a", text: "Government spending (G)" },
            { id: "b", text: "Net exports (NX)" },
            { id: "c", text: "Consumption (C)" },
            { id: "d", text: "Investment (I)" }
          ],
          correctOptionId: "c",
          explanation: "Consumer spending accounts for roughly 70% of US GDP."
        },
        {
          id: "economics-201-l03-q2",
          text: "A coal miner who loses their job because the economy shifts to solar energy is experiencing:",
          skillId: "economics-201-skill-core",
          options: [
            { id: "a", text: "Frictional unemployment" },
            { id: "b", text: "Cyclical unemployment" },
            { id: "c", text: "Structural unemployment" },
            { id: "d", text: "Seasonal unemployment" }
          ],
          correctOptionId: "c",
          explanation: "Structural unemployment occurs when workers' skills no longer match available jobs due to economic changes."
        },
        {
          id: "economics-201-l03-q3",
          text: "Real GDP differs from nominal GDP because real GDP:",
          skillId: "economics-201-skill-core",
          options: [
            { id: "a", text: "Includes only services, not goods" },
            { id: "b", text: "Adjusts for inflation using constant prices" },
            { id: "c", text: "Excludes government spending" },
            { id: "d", text: "Measures only domestic production" }
          ],
          correctOptionId: "b",
          explanation: "Real GDP removes the effect of price changes, showing true changes in output."
        },
        {
          id: "economics-201-l03-q4",
          text: "The Phillips curve suggests that in the short run:",
          skillId: "economics-201-skill-core",
          options: [
            { id: "a", text: "Inflation and unemployment move in the same direction" },
            { id: "b", text: "There is no relationship between inflation and unemployment" },
            { id: "c", text: "Lower unemployment comes with higher inflation" },
            { id: "d", text: "GDP and unemployment are positively correlated" }
          ],
          correctOptionId: "c",
          explanation: "The Phillips curve shows an inverse relationship: reducing unemployment tends to push inflation higher."
        }
      ],
      quizBlueprint: { totalQuestions: 4, bloomProfile: { remember: 1, understand: 2, apply: 1 } }
    },
    {
      id: "economics-201-l04",
      title: "Monetary Policy and Central Banking",
      type: "video",
      duration: 13,
      objectives: [
        "Explain the role of a central bank (e.g., the Federal Reserve)",
        "Describe the three main tools of monetary policy",
        "Analyze how interest rate changes affect the economy"
      ],
      chunks: [
        {
          id: "economics-201-l04-c1",
          title: "The Central Bank",
          content:
            "The central bank (Federal Reserve in the US, ECB in Europe, Bank of England in the UK) manages a nation's money supply and interest rates. Its primary goals: price stability (low inflation), maximum employment, and moderate long-term interest rates. The Fed is independent from the political branches to make unpopular but necessary decisions — like raising rates during booms to prevent overheating."
        },
        {
          id: "economics-201-l04-c2",
          title: "Tools of Monetary Policy",
          content:
            "Three main tools: (1) Open market operations — buying/selling government bonds. Buying bonds injects money into the economy (expansionary); selling removes money (contractionary). (2) The federal funds rate — the interest rate banks charge each other for overnight loans. The Fed sets a target and uses OMOs to achieve it. (3) Reserve requirements — the fraction of deposits banks must hold. Lower requirements allow more lending."
        },
        {
          id: "economics-201-l04-c3",
          title: "How Interest Rates Move the Economy",
          content:
            "When the Fed lowers interest rates: borrowing becomes cheaper → businesses invest more, consumers spend more → aggregate demand rises → GDP grows, unemployment falls. But too much stimulus can cause inflation. When the Fed raises rates: borrowing becomes expensive → spending and investment slow → aggregate demand falls → inflation cools, but unemployment may rise. This balancing act is the essence of monetary policy."
        }
      ],
      flashcards: [
        { id: "economics-201-l04-f1", front: "Federal Reserve (Fed)", back: "The US central bank — manages money supply, sets interest rates, and acts as lender of last resort" },
        { id: "economics-201-l04-f2", front: "Open market operations", back: "The Fed buying/selling government bonds to expand or contract the money supply" },
        { id: "economics-201-l04-f3", front: "Federal funds rate", back: "The interest rate banks charge each other for overnight loans — the Fed's primary policy rate" },
        { id: "economics-201-l04-f4", front: "Expansionary monetary policy", back: "Lowering interest rates / buying bonds to stimulate spending, investment, and economic growth" }
      ]
    },
    {
      id: "economics-201-l05",
      title: "Fiscal Policy",
      type: "interactive",
      duration: 13,
      objectives: [
        "Define fiscal policy as government spending and taxation decisions",
        "Distinguish between discretionary and automatic fiscal stabilizers",
        "Analyze the multiplier effect and crowding out"
      ],
      chunks: [
        {
          id: "economics-201-l05-c1",
          title: "Government Spending and Taxes",
          content:
            "Fiscal policy is the government's use of spending and taxation to influence the economy. Expansionary fiscal policy: increase spending or cut taxes to boost demand during recessions. Contractionary fiscal policy: cut spending or raise taxes to cool an overheating economy. Unlike monetary policy (controlled by the central bank), fiscal policy is set by elected officials — making it more politically difficult to implement quickly."
        },
        {
          id: "economics-201-l05-c2",
          title: "The Multiplier Effect",
          content:
            "When the government spends $1, that dollar becomes income for someone who then spends part of it, creating income for someone else, and so on. The spending multiplier = 1 / (1 - MPC), where MPC is the marginal propensity to consume. If MPC = 0.8, the multiplier is 5: a $100 billion spending increase boosts GDP by $500 billion. In practice, multipliers are smaller due to taxes, imports, and monetary policy responses."
        },
        {
          id: "economics-201-l05-c3",
          title: "Automatic Stabilizers and Crowding Out",
          content:
            "Automatic stabilizers are programs that naturally expand during recessions and contract during booms without new legislation — unemployment insurance, progressive income taxes, food stamps. They smooth the business cycle automatically. Crowding out is the concern that government borrowing raises interest rates, reducing private investment. If the government borrows heavily, it competes with private borrowers for funds, potentially offsetting some stimulus."
        }
      ],
      activities: [
        {
          id: "economics-201-l05-a1",
          title: "Match the Pairs",
          type: "matching_pairs",
          pairs: [
            { left: "Expansionary fiscal policy", right: "Increase spending or cut taxes to boost demand" },
            { left: "Contractionary fiscal policy", right: "Cut spending or raise taxes to cool the economy" },
            { left: "Automatic stabilizer", right: "Unemployment insurance — expands in recessions without legislation" },
            { left: "Spending multiplier", right: "1 / (1 - MPC) — amplifies the initial spending impact" },
            { left: "Crowding out", right: "Government borrowing raises rates, reducing private investment" },
            { left: "MPC (Marginal Propensity to Consume)", right: "The fraction of additional income that is spent rather than saved" }
          ]
        }
      ],
      flashcards: [
        { id: "economics-201-l05-f1", front: "Fiscal policy", back: "Government use of spending and taxation to influence aggregate demand and economic performance" },
        { id: "economics-201-l05-f2", front: "Spending multiplier", back: "1 / (1 - MPC) — each dollar of government spending generates more than $1 in total GDP" },
        { id: "economics-201-l05-f3", front: "Crowding out", back: "Government borrowing raises interest rates, potentially reducing private investment and offsetting fiscal stimulus" },
        { id: "economics-201-l05-f4", front: "Automatic stabilizers", back: "Built-in fiscal mechanisms (unemployment insurance, progressive taxes) that smooth the business cycle without legislation" }
      ]
    },
    {
      id: "economics-201-l06",
      title: "Policy Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: ["Demonstrate knowledge of monetary and fiscal policy"],
      questions: [
        {
          id: "economics-201-l06-q1",
          text: "When the Fed buys government bonds, it is conducting:",
          skillId: "economics-201-skill-core",
          options: [
            { id: "a", text: "Contractionary monetary policy" },
            { id: "b", text: "Expansionary monetary policy" },
            { id: "c", text: "Fiscal policy" },
            { id: "d", text: "Trade policy" }
          ],
          correctOptionId: "b",
          explanation: "Buying bonds injects money into the economy, lowering interest rates and stimulating spending."
        },
        {
          id: "economics-201-l06-q2",
          text: "If MPC = 0.75, the spending multiplier is:",
          skillId: "economics-201-skill-core",
          options: [
            { id: "a", text: "0.75" },
            { id: "b", text: "1.33" },
            { id: "c", text: "3" },
            { id: "d", text: "4" }
          ],
          correctOptionId: "d",
          explanation: "Multiplier = 1/(1 - 0.75) = 1/0.25 = 4."
        },
        {
          id: "economics-201-l06-q3",
          text: "Which is an example of an automatic stabilizer?",
          skillId: "economics-201-skill-core",
          options: [
            { id: "a", text: "A new infrastructure bill" },
            { id: "b", text: "Unemployment insurance payments" },
            { id: "c", text: "A central bank rate cut" },
            { id: "d", text: "A trade agreement" }
          ],
          correctOptionId: "b",
          explanation: "Unemployment insurance automatically expands during recessions without new legislation."
        },
        {
          id: "economics-201-l06-q4",
          text: "Crowding out occurs when government borrowing:",
          skillId: "economics-201-skill-core",
          options: [
            { id: "a", text: "Lowers interest rates" },
            { id: "b", text: "Increases private investment" },
            { id: "c", text: "Raises interest rates, reducing private investment" },
            { id: "d", text: "Eliminates unemployment" }
          ],
          correctOptionId: "c",
          explanation: "Heavy government borrowing competes with private borrowers for funds, pushing rates up."
        }
      ],
      quizBlueprint: { totalQuestions: 4, bloomProfile: { remember: 1, understand: 2, apply: 1 } }
    },
    {
      id: "economics-201-l07",
      title: "Aggregate Demand and Aggregate Supply",
      type: "video",
      duration: 12,
      objectives: [
        "Draw and interpret the AD/AS model",
        "Explain demand-pull and cost-push inflation",
        "Analyze how shocks shift AD and AS curves"
      ],
      chunks: [
        {
          id: "economics-201-l07-c1",
          title: "The AD/AS Framework",
          content:
            "The AD/AS model shows the whole economy on one graph. Aggregate demand (AD) slopes downward: at lower price levels, consumers can buy more. Aggregate supply has two versions: short-run AS (upward-sloping — higher prices encourage more production) and long-run AS (vertical at potential GDP — in the long run, output depends on resources and technology, not the price level). Equilibrium determines both the price level and real GDP."
        },
        {
          id: "economics-201-l07-c2",
          title: "Demand-Pull vs. Cost-Push Inflation",
          content:
            "Demand-pull inflation: too much money chasing too few goods — AD shifts right beyond capacity. Caused by excessive spending, easy monetary policy, or government stimulus. Cost-push inflation: rising production costs push AS left — supply shocks like oil price spikes, wage increases, or supply chain disruptions. The economy gets stagflation: rising prices AND falling output. The 1970s oil crisis is the textbook example."
        },
        {
          id: "economics-201-l07-c3",
          title: "Shocks and Policy Responses",
          content:
            "A positive demand shock (e.g., tech boom): AD shifts right → GDP rises, prices rise. Fed may raise rates to prevent overheating. A negative supply shock (e.g., pandemic): AS shifts left → GDP falls, prices rise (stagflation). Policy response is harder: stimulating demand fixes output but worsens inflation. Fighting inflation with tight money worsens the recession. This is the policymaker's nightmare."
        }
      ],
      flashcards: [
        { id: "economics-201-l07-f1", front: "Aggregate demand (AD)", back: "Total spending in the economy at each price level — slopes downward (lower prices → more spending)" },
        { id: "economics-201-l07-f2", front: "Long-run aggregate supply (LRAS)", back: "Vertical at potential GDP — in the long run, output depends on resources and technology, not prices" },
        { id: "economics-201-l07-f3", front: "Demand-pull inflation", back: "Inflation caused by excessive aggregate demand — 'too much money chasing too few goods'" },
        { id: "economics-201-l07-f4", front: "Stagflation", back: "Simultaneous stagnation (falling output) and inflation — caused by negative supply shocks" }
      ]
    },
    {
      id: "economics-201-l08",
      title: "International Trade and Exchange Rates",
      type: "interactive",
      duration: 13,
      objectives: [
        "Explain comparative advantage as the basis for trade",
        "Analyze how exchange rates are determined in currency markets",
        "Evaluate the effects of tariffs and trade agreements"
      ],
      chunks: [
        {
          id: "economics-201-l08-c1",
          title: "Why Countries Trade",
          content:
            "Trade is based on comparative advantage: countries benefit by specializing in goods where they have the lowest opportunity cost, then trading for other goods. Even if one country is better at producing everything (absolute advantage), both countries gain from specializing and trading. This is why the US imports clothing from Bangladesh and exports software — each focuses on its strength."
        },
        {
          id: "economics-201-l08-c2",
          title: "Exchange Rates",
          content:
            "An exchange rate is the price of one currency in terms of another. Under floating exchange rates, supply and demand for currencies determine the rate. A currency appreciates (strengthens) when demand for it rises — making imports cheaper but exports more expensive. A currency depreciates (weakens) when supply exceeds demand — making exports cheaper but imports more expensive. Central banks sometimes intervene to stabilize rates."
        },
        {
          id: "economics-201-l08-c3",
          title: "Tariffs, Quotas, and Free Trade",
          content:
            "Tariffs (taxes on imports) and quotas (limits on import quantities) protect domestic industries but raise prices for consumers and reduce total welfare. Arguments for protection: infant industry, national security, anti-dumping. Arguments against: higher consumer prices, retaliation, reduced efficiency. Free trade agreements (NAFTA/USMCA, EU single market) reduce barriers and generally increase GDP, but can displace workers in specific industries."
        }
      ],
      activities: [
        {
          id: "economics-201-l08-a1",
          title: "Match the Pairs",
          type: "matching_pairs",
          pairs: [
            { left: "Comparative advantage", right: "Produce goods where your opportunity cost is lowest" },
            { left: "Tariff", right: "A tax on imported goods — raises prices for consumers" },
            { left: "Currency appreciation", right: "Currency strengthens — imports cheaper, exports more expensive" },
            { left: "Currency depreciation", right: "Currency weakens — exports cheaper, imports more expensive" },
            { left: "Trade deficit", right: "Imports exceed exports — NX is negative" },
            { left: "Free trade agreement", right: "Reduces trade barriers between member countries" }
          ]
        }
      ],
      flashcards: [
        { id: "economics-201-l08-f1", front: "Comparative advantage", back: "A country should specialize in goods where it has the lowest opportunity cost — the basis for mutually beneficial trade" },
        { id: "economics-201-l08-f2", front: "Exchange rate", back: "The price of one currency in terms of another — determined by supply and demand in foreign exchange markets" },
        { id: "economics-201-l08-f3", front: "Tariff", back: "A tax on imported goods — protects domestic producers but raises prices for consumers and reduces total welfare" },
        { id: "economics-201-l08-f4", front: "Trade deficit", back: "When a country's imports exceed its exports — not necessarily bad, but can indicate structural economic issues" }
      ]
    },
    {
      id: "economics-201-l09",
      title: "AD/AS & Trade Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: ["Demonstrate knowledge of AD/AS model and international trade"],
      questions: [
        {
          id: "economics-201-l09-q1",
          text: "Cost-push inflation is caused by:",
          skillId: "economics-201-skill-core",
          options: [
            { id: "a", text: "Excessive consumer spending" },
            { id: "b", text: "Rising production costs shifting AS left" },
            { id: "c", text: "Central bank printing money" },
            { id: "d", text: "Government tax cuts" }
          ],
          correctOptionId: "b",
          explanation: "Cost-push inflation occurs when supply-side shocks (oil prices, wages) increase production costs."
        },
        {
          id: "economics-201-l09-q2",
          text: "If the US dollar appreciates, US exports become:",
          skillId: "economics-201-skill-core",
          options: [
            { id: "a", text: "Cheaper for foreign buyers" },
            { id: "b", text: "More expensive for foreign buyers" },
            { id: "c", text: "Unaffected" },
            { id: "d", text: "Illegal" }
          ],
          correctOptionId: "b",
          explanation: "A stronger dollar means foreign buyers need more of their currency to buy US goods."
        },
        {
          id: "economics-201-l09-q3",
          text: "Stagflation is particularly difficult for policymakers because:",
          skillId: "economics-201-skill-core",
          options: [
            { id: "a", text: "Both GDP and prices are falling" },
            { id: "b", text: "Stimulating demand worsens inflation; fighting inflation worsens recession" },
            { id: "c", text: "Unemployment is at the natural rate" },
            { id: "d", text: "There is no theory to explain it" }
          ],
          correctOptionId: "b",
          explanation: "Stagflation creates a dilemma: policies that help one problem worsen the other."
        },
        {
          id: "economics-201-l09-q4",
          text: "Tariffs primarily benefit:",
          skillId: "economics-201-skill-core",
          options: [
            { id: "a", text: "Consumers who buy the imported good" },
            { id: "b", text: "Domestic producers competing with imports" },
            { id: "c", text: "Foreign exporters" },
            { id: "d", text: "All parties equally" }
          ],
          correctOptionId: "b",
          explanation: "Tariffs protect domestic producers by making imported alternatives more expensive."
        }
      ],
      quizBlueprint: { totalQuestions: 4, bloomProfile: { remember: 1, understand: 2, apply: 1 } }
    },
    {
      id: "economics-201-l10",
      title: "Mastery Quiz: Macroeconomics",
      type: "quiz",
      duration: 12,
      objectives: ["Synthesize all macroeconomics concepts"],
      questions: [
        {
          id: "economics-201-l10-q1",
          text: "During a recession, the appropriate monetary policy response is to:",
          skillId: "economics-201-skill-core",
          options: [
            { id: "a", text: "Raise interest rates" },
            { id: "b", text: "Lower interest rates" },
            { id: "c", text: "Increase reserve requirements" },
            { id: "d", text: "Sell government bonds" }
          ],
          correctOptionId: "b",
          explanation: "Lower rates encourage borrowing and spending, stimulating aggregate demand."
        },
        {
          id: "economics-201-l10-q2",
          text: "The long-run aggregate supply curve is vertical because:",
          skillId: "economics-201-skill-core",
          options: [
            { id: "a", text: "Prices are fixed in the long run" },
            { id: "b", text: "Output depends on resources and technology, not the price level" },
            { id: "c", text: "Government always intervenes" },
            { id: "d", text: "There is no inflation in the long run" }
          ],
          correctOptionId: "b",
          explanation: "In the long run, an economy produces at its potential output regardless of the price level."
        },
        {
          id: "economics-201-l10-q3",
          text: "A country with a comparative advantage in software should:",
          skillId: "economics-201-skill-core",
          options: [
            { id: "a", text: "Produce software and everything else domestically" },
            { id: "b", text: "Import software and export raw materials" },
            { id: "c", text: "Specialize in software and trade for other goods" },
            { id: "d", text: "Avoid international trade" }
          ],
          correctOptionId: "c",
          explanation: "Comparative advantage means specializing where your opportunity cost is lowest, then trading."
        },
        {
          id: "economics-201-l10-q4",
          text: "Transfer payments (like Social Security) are NOT included in the G component of GDP because:",
          skillId: "economics-201-skill-core",
          options: [
            { id: "a", text: "They are too small to matter" },
            { id: "b", text: "They redistribute income but don't directly purchase goods or services" },
            { id: "c", text: "They are paid by the private sector" },
            { id: "d", text: "They are counted in the C component instead" }
          ],
          correctOptionId: "b",
          explanation: "Transfer payments shift money between people but don't represent government purchases of output."
        }
      ],
      quizBlueprint: { totalQuestions: 4, bloomProfile: { remember: 1, understand: 1, apply: 1, analyze: 1 } }
    },
    {
      id: "economics-201-l11",
      title: "Money, Banking, and Financial Markets",
      type: "interactive",
      duration: 14,
      objectives: [
        "Explain the money creation process through fractional reserve banking",
        "Describe how financial markets channel savings to investment",
        "Analyze the causes and effects of financial crises"
      ],
      chunks: [
        {
          id: "economics-201-l11-c1",
          title: "How Banks Create Money",
          content:
            "Banks don't just store money — they create it. Through fractional reserve banking, a bank keeps only a fraction of deposits as reserves and lends the rest. If the reserve requirement is 10%, a $1,000 deposit allows $900 in new loans. That $900 gets deposited elsewhere, and $810 is lent again. The money multiplier (1/reserve ratio) means $1,000 in initial deposits can create up to $10,000 in total money supply."
        },
        {
          id: "economics-201-l11-c2",
          title: "Financial Markets",
          content:
            "Financial markets connect savers (who have surplus funds) with borrowers (who need funds). Bond markets let governments and corporations borrow by issuing IOUs. Stock markets let companies raise equity capital by selling ownership shares. Interest rates are the price of borrowing: they coordinate the trillions of dollars flowing between savers and investors. Efficient financial markets allocate capital to its highest-value uses."
        },
        {
          id: "economics-201-l11-c3",
          title: "Financial Crises",
          content:
            "Financial crises occur when confidence in the financial system collapses. The 2008 crisis: banks made risky mortgage loans, packaged them into complex securities, and when housing prices fell, the securities became worthless. Banks failed, credit froze, and a severe recession followed. Lesson: financial regulation (capital requirements, stress tests, consumer protection) is essential to prevent excessive risk-taking."
        }
      ],
      activities: [
        {
          id: "economics-201-l11-a1",
          title: "Match the Pairs",
          type: "matching_pairs",
          pairs: [
            { left: "Fractional reserve banking", right: "Banks keep a fraction of deposits and lend the rest" },
            { left: "Money multiplier", right: "1 / reserve ratio — amplifies initial deposits into larger money supply" },
            { left: "Bond market", right: "Where governments and firms borrow by issuing debt IOUs" },
            { left: "Stock market", right: "Where firms raise equity capital by selling ownership shares" },
            { left: "2008 financial crisis", right: "Risky mortgages, complex securities, bank failures, credit freeze" },
            { left: "Moral hazard", right: "Taking excessive risk because someone else bears the cost (e.g., bailouts)" }
          ]
        }
      ],
      flashcards: [
        { id: "economics-201-l11-f1", front: "Fractional reserve banking", back: "Banks hold only a fraction of deposits as reserves and lend the rest — this process creates new money" },
        { id: "economics-201-l11-f2", front: "Money multiplier", back: "1 / reserve ratio — the maximum amount of money the banking system can create from initial deposits" },
        { id: "economics-201-l11-f3", front: "Moral hazard", back: "When one party takes risks because another party bears the consequences — e.g., banks expecting government bailouts" }
      ]
    },
    {
      id: "economics-201-l12",
      title: "Mastery Retest",
      type: "quiz",
      duration: 10,
      objectives: ["Demonstrate comprehensive macroeconomics mastery"],
      questions: [
        {
          id: "economics-201-l12-q1",
          text: "The money multiplier with a 20% reserve requirement is:",
          skillId: "economics-201-skill-core",
          options: [
            { id: "a", text: "2" },
            { id: "b", text: "5" },
            { id: "c", text: "10" },
            { id: "d", text: "20" }
          ],
          correctOptionId: "b",
          explanation: "Money multiplier = 1 / 0.20 = 5."
        },
        {
          id: "economics-201-l12-q2",
          text: "Demand-pull inflation is caused by:",
          skillId: "economics-201-skill-core",
          options: [
            { id: "a", text: "Rising production costs" },
            { id: "b", text: "Supply chain disruptions" },
            { id: "c", text: "Excessive aggregate demand beyond capacity" },
            { id: "d", text: "Currency appreciation" }
          ],
          correctOptionId: "c",
          explanation: "Too much spending relative to the economy's capacity drives prices up."
        },
        {
          id: "economics-201-l12-q3",
          text: "Automatic stabilizers differ from discretionary fiscal policy because they:",
          skillId: "economics-201-skill-core",
          options: [
            { id: "a", text: "Require new legislation each time" },
            { id: "b", text: "Activate automatically without new policy action" },
            { id: "c", text: "Only work during expansions" },
            { id: "d", text: "Are controlled by the central bank" }
          ],
          correctOptionId: "b",
          explanation: "Programs like unemployment insurance automatically expand during downturns without new laws."
        },
        {
          id: "economics-201-l12-q4",
          text: "Moral hazard in banking refers to:",
          skillId: "economics-201-skill-core",
          options: [
            { id: "a", text: "Banks refusing to lend" },
            { id: "b", text: "Banks taking excessive risks because they expect to be bailed out" },
            { id: "c", text: "Consumers saving too much" },
            { id: "d", text: "The government printing too much money" }
          ],
          correctOptionId: "b",
          explanation: "When banks believe the government will rescue them, they have less incentive to manage risk carefully."
        }
      ],
      quizBlueprint: { totalQuestions: 4, bloomProfile: { remember: 1, understand: 1, apply: 1, analyze: 1 } }
    },
    {
      id: "economics-201-l13",
      title: "Economic Growth and Development",
      type: "video",
      duration: 12,
      objectives: [
        "Identify the sources of long-run economic growth",
        "Explain the role of institutions, human capital, and technology",
        "Distinguish between economic growth and economic development"
      ],
      chunks: [
        {
          id: "economics-201-l13-c1",
          title: "Sources of Growth",
          content:
            "Long-run economic growth comes from: (1) Physical capital accumulation — more machines, buildings, infrastructure. (2) Human capital — education, skills, and health of the workforce. (3) Technological progress — innovations that let us produce more with the same inputs. (4) Institutional quality — rule of law, property rights, low corruption, stable government. Of these, technology is the only source of sustained, unlimited growth."
        },
        {
          id: "economics-201-l13-c2",
          title: "Growth vs. Development",
          content:
            "Economic growth means rising GDP per capita. Economic development is broader: improved living standards, reduced poverty, better health, education, and infrastructure. A country can have growth without development (oil-rich nations with extreme inequality) or development without rapid growth (countries investing in health and education). The Human Development Index (HDI) measures development using income, life expectancy, and education."
        },
        {
          id: "economics-201-l13-c3",
          title: "Why Some Countries Are Rich and Others Poor",
          content:
            "The divergence in living standards is dramatic: GDP per capita in rich countries is 50-100× that of the poorest. Key factors: geography (resources, climate), institutions (property rights, rule of law), culture (attitudes toward work, saving), history (colonialism, industrial revolution timing), and policy (trade openness, education investment). Institutions are widely considered the most important — without stable rules, investment and innovation can't flourish."
        }
      ],
      flashcards: [
        { id: "economics-201-l13-f1", front: "Economic growth", back: "An increase in real GDP per capita over time — more output per person" },
        { id: "economics-201-l13-f2", front: "Human capital", back: "The skills, knowledge, and health of the workforce — a key driver of productivity and growth" },
        { id: "economics-201-l13-f3", front: "Human Development Index (HDI)", back: "Measures development using income, life expectancy, and education — broader than GDP alone" }
      ]
    },
    {
      id: "economics-201-l14",
      title: "Coaching Clinic: Macro Mistakes",
      type: "interactive",
      duration: 13,
      objectives: [
        "Identify common macro misconceptions",
        "Distinguish correlation from causation in economic data",
        "Apply economic reasoning to current events"
      ],
      chunks: [
        {
          id: "economics-201-l14-c1",
          title: "Common Macro Mistakes",
          content:
            "Mistake 1: 'Government debt works like household debt.' Unlike households, governments can print money, tax, and never fully 'pay off' debt — they just need to keep the debt-to-GDP ratio manageable. Mistake 2: 'Trade deficits mean we're losing.' A trade deficit means we're importing more than exporting, but we're also consuming more goods. Mistake 3: 'Inflation is always bad.' Moderate inflation (2%) is healthy — it prevents deflation and gives central banks room to cut rates."
        },
        {
          id: "economics-201-l14-c2",
          title: "Correlation vs. Causation",
          content:
            "Economic data is full of correlations that aren't causal. Ice cream sales and drowning deaths both rise in summer — but ice cream doesn't cause drowning. Similarly, stock markets may rise with consumer confidence, but confidence doesn't always cause stock gains. Always ask: is there a logical mechanism? Could a third variable explain both? Would an experiment confirm the relationship? This skepticism is essential for policy analysis."
        }
      ],
      activities: [
        {
          id: "economics-201-l14-a1",
          title: "Sort into Categories",
          type: "sorting_buckets",
          buckets: ["True Statement", "Common Misconception"],
          items: [
            { text: "Government debt works exactly like household debt", bucket: "Common Misconception" },
            { text: "Trade deficits always mean an economy is failing", bucket: "Common Misconception" },
            { text: "Moderate inflation (2%) is generally healthy for an economy", bucket: "True Statement" },
            { text: "The money multiplier amplifies initial deposits", bucket: "True Statement" },
            { text: "Printing more money always causes hyperinflation", bucket: "Common Misconception" },
            { text: "Institutional quality is a key driver of economic growth", bucket: "True Statement" }
          ]
        }
      ],
      flashcards: [
        { id: "economics-201-l14-f1", front: "Correlation vs. causation", back: "Two variables moving together doesn't prove one causes the other — always look for mechanisms and confounding factors" },
        { id: "economics-201-l14-f2", front: "Debt-to-GDP ratio", back: "Government debt as a share of GDP — a better measure of debt sustainability than the absolute debt amount" }
      ]
    },
    {
      id: "economics-201-l15",
      title: "Mastery Sprint",
      type: "quiz",
      duration: 10,
      objectives: ["Demonstrate comprehensive mastery of macroeconomics"],
      questions: [
        {
          id: "economics-201-l15-q1",
          text: "Which factor is considered the most important for long-run growth?",
          skillId: "economics-201-skill-core",
          options: [
            { id: "a", text: "Natural resources" },
            { id: "b", text: "Government spending" },
            { id: "c", text: "Technological progress" },
            { id: "d", text: "Low interest rates" }
          ],
          correctOptionId: "c",
          explanation: "Technology is the only source of unlimited, sustained growth — it lets us do more with the same resources."
        },
        {
          id: "economics-201-l15-q2",
          text: "The aggregate demand curve slopes downward because at lower prices:",
          skillId: "economics-201-skill-core",
          options: [
            { id: "a", text: "Firms produce less" },
            { id: "b", text: "Consumers and businesses can buy more with their money" },
            { id: "c", text: "Interest rates rise" },
            { id: "d", text: "Imports increase" }
          ],
          correctOptionId: "b",
          explanation: "Lower prices increase the real value of money, boosting purchasing power and spending."
        },
        {
          id: "economics-201-l15-q3",
          text: "The 2008 financial crisis was primarily triggered by:",
          skillId: "economics-201-skill-core",
          options: [
            { id: "a", text: "Hyperinflation in the US" },
            { id: "b", text: "A collapse in the housing market and risky mortgage-backed securities" },
            { id: "c", text: "A sudden oil price spike" },
            { id: "d", text: "Government default on debt" }
          ],
          correctOptionId: "b",
          explanation: "Risky subprime mortgages were packaged into securities that collapsed when housing prices fell."
        },
        {
          id: "economics-201-l15-q4",
          text: "HDI measures economic development using:",
          skillId: "economics-201-skill-core",
          options: [
            { id: "a", text: "GDP, trade balance, and inflation" },
            { id: "b", text: "Income, life expectancy, and education" },
            { id: "c", text: "Stock market performance and unemployment" },
            { id: "d", text: "Government spending and tax revenue" }
          ],
          correctOptionId: "b",
          explanation: "The Human Development Index uses income per capita, life expectancy, and education years."
        }
      ],
      quizBlueprint: { totalQuestions: 4, bloomProfile: { remember: 1, understand: 1, apply: 1, analyze: 1 } }
    }
  ]
};
