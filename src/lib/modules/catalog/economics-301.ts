import type { LearningModule } from "@/lib/modules/types";

export const economics_301_Module: LearningModule = {
  "id": "economics-301",
  "title": "International Economics & Trade",
  "description": "Analyze how nations trade, set exchange rates, and pursue development. Master comparative advantage, trade policy, balance of payments, currency markets, and the institutions that govern the global economy.",
  "subject": "Business",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "mba",
    "economics",
    "international"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "learningObjectives": [
    "Apply Ricardian and Heckscher-Ohlin models of comparative advantage",
    "Evaluate the effects of tariffs, quotas, and trade agreements",
    "Analyze balance of payments accounts and their implications",
    "Explain exchange rate determination under fixed and floating regimes",
    "Assess the role of the WTO, IMF, and World Bank in global trade",
    "Examine economic development strategies and the role of foreign direct investment",
    "Debate the trade-offs of globalization for developed and developing nations"
  ],
  "lessons": [
    {
      "id": "economics-301-l01",
      "title": "Comparative Advantage & Gains from Trade",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Distinguish absolute advantage from comparative advantage",
        "Calculate opportunity costs to identify comparative advantage",
        "Demonstrate gains from trade using a two-country model"
      ],
      "chunks": [
        {
          "id": "economics-301-l01-c1",
          "title": "Absolute vs. Comparative Advantage",
          "content": "Absolute advantage describes a scenario where one country can produce a good using fewer resources than another country, indicating higher sheer efficiency. For example, if Country A can produce 10 cars using the same resources Country B uses to produce 5, Country A holds the absolute advantage. However, global trade is driven by a different metric: comparative advantage. This occurs when a country can produce a good at a lower opportunity cost than its trading partners. Even if Country A is better at producing everything, it still benefits from specializing in the good where its opportunity cost is lowest, trading for other necessities. Economist David Ricardo famously illustrated that when nations focus on their comparative advantages and trade, total global output increases, allowing both countries to consume more than they could in isolation. [Visual Prompt: A side-by-side comparison chart showing Country A and Country B's production capabilities, highlighting the mathematical opportunity cost calculation.]"
        },
        {
          "id": "economics-301-l01-c2",
          "title": "The Ricardian Model",
          "content": "The Ricardian model of international trade formalizes how countries gain from specialization based on differences in labor productivity. Imagine Country A must give up 2 units of wheat to produce 1 unit of cloth, while Country B only gives up 0.5 units of wheat for the same cloth. Country B has a comparative advantage in cloth because its sacrifice (opportunity cost) is lower. Consequently, Country A should specialize in wheat, and Country B in cloth. By trading, both nations access a broader variety of goods and achieve higher overall consumption. For trade to be mutually beneficial, the 'terms of trade'—the ratio at which goods are exchanged—must fall between the opportunity costs of the two countries. This ensures a win-win scenario, demonstrating that trade is not a zero-sum game. [Visual Prompt: An animated production possibility frontier (PPF) graph demonstrating how specialization and trade expand the consumption possibilities beyond the domestic PPF for both nations.]"
        },
        {
          "id": "economics-301-l01-c3",
          "title": "The Heckscher-Ohlin Model",
          "content": "While the Ricardian model focuses on labor productivity, the Heckscher-Ohlin (H-O) model explains trade patterns through 'factor endowments'—the resources a country possesses, such as labor, capital, and land. The H-O model posits that countries will export goods that intensively use their abundant resources. A labor-abundant country, like Bangladesh, will naturally export labor-intensive goods like textiles. Conversely, a capital-abundant country, like Germany, will export capital-intensive goods like machinery. The related Stolper-Samuelson theorem adds a critical layer: while free trade benefits the economy as a whole, it creates winners and losers internally. It raises the income of the abundant factor (e.g., capital owners in Germany) but can lower the income of the scarce factor (e.g., unskilled labor in Germany). This dynamic explains why certain domestic groups fiercely lobby against free trade. [Visual Prompt: A world map highlighting labor-abundant countries exporting textiles and capital-abundant countries exporting advanced electronics and machinery.]"
        }
      ],
      "flashcards": [
        {
          "id": "economics-301-l01-f1",
          "front": "Comparative advantage",
          "back": "The ability to produce a good at a lower opportunity cost than another producer, forming the basis for mutually beneficial trade."
        },
        {
          "id": "economics-301-l01-f2",
          "front": "Absolute advantage",
          "back": "The ability to produce a good using fewer resources; does NOT determine trade patterns — comparative advantage does."
        },
        {
          "id": "economics-301-l01-f3",
          "front": "Terms of trade",
          "back": "The price ratio at which two countries exchange goods; must fall between their respective opportunity costs for both to gain."
        },
        {
          "id": "economics-301-l01-f4",
          "front": "Heckscher-Ohlin model",
          "back": "Predicts countries export goods that use their abundant factor intensively — e.g., labor-rich nations export labor-intensive goods."
        }
      ],
      "learningAids": [
        {
          "id": "economics-301-l01-a1",
          "type": "image",
          "title": "Trade Models Summary",
          "content": "Visual Prompt: A split graphic comparing Ricardo (focus on labor productivity/technology) vs. Heckscher-Ohlin (focus on resource endowments like capital vs. labor)."
        }
      ]
    },
    {
      "id": "economics-301-l02",
      "title": "Trade Policy Instruments",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Classify tariffs, quotas, subsidies, and non-tariff barriers",
        "Analyze the welfare effects of a tariff using supply-and-demand diagrams",
        "Compare arguments for and against protectionism"
      ],
      "chunks": [
        {
          "id": "economics-301-l02-c1",
          "title": "Tariffs and Their Economic Effects",
          "content": "A tariff is a tax imposed on imported goods, designed to make foreign products more expensive and shield domestic producers from global competition. While tariffs allow local businesses to charge higher prices and increase output, they come with significant economic trade-offs. Consumers bear the brunt of tariffs through higher prices and reduced choices. Furthermore, tariffs generate 'deadweight loss'—economic inefficiency caused by consumers being priced out of the market and domestic firms producing goods that could be made more efficiently abroad. Though the government collects tax revenue (either via specific tariffs per unit or ad valorem percentage tariffs), the overall welfare of the importing country typically declines. [Visual Prompt: A supply and demand graph showing the world price line, the new higher tariff price line, and shaded areas representing consumer loss, producer surplus, government revenue, and the two triangles of deadweight loss.]"
        },
        {
          "id": "economics-301-l02-c2",
          "title": "Quotas and Non-Tariff Barriers",
          "content": "An import quota is a strict quantitative limit on how much of a specific product can enter a country over a given period. Like tariffs, quotas restrict supply and drive up domestic prices, benefiting local producers at the expense of consumers. However, unlike tariffs, quotas do not generate tax revenue for the government. Instead, the price markup creates 'quota rents'—extra profits that go to the individuals or foreign entities holding the import licenses. Beyond quotas, countries frequently utilize Non-Tariff Barriers (NTBs) to restrict trade. These include stringent health and safety regulations, complex labeling requirements, and voluntary export restraints (VERs). While NTBs are often justified on regulatory grounds, they frequently serve as disguised protectionism, making them harder to measure and negotiate away than traditional tariffs. [Visual Prompt: An infographic comparing a tariff (showing tax revenue flowing to a government building) and a quota (showing quota rents flowing to a corporate license holder).]"
        },
        {
          "id": "economics-301-l02-c3",
          "title": "The Debate Over Protectionism",
          "content": "Despite the economic consensus favoring free trade, protectionism remains politically popular. Proponents often cite the 'infant industry argument,' suggesting that nascent domestic industries require temporary shielding from foreign giants until they achieve economies of scale. National security is another common justification, ensuring a country retains the capacity to produce critical goods like steel, semiconductors, or medical supplies during crises. Additionally, tariffs are used to combat 'dumping'—when foreign firms sell goods below cost to drive local competitors out of business. However, economists warn that protectionism frequently backfires. Temporary protections often become permanent, breeding inefficient monopolies that lack the incentive to innovate. Furthermore, unilateral tariffs frequently trigger retaliatory trade wars, ultimately harming export-reliant industries and raising costs across the global supply chain. [Visual Prompt: A split screen showing a fragile 'infant industry' being shielded by an umbrella (tariffs) versus a mature, stagnant industry relying on that same umbrella instead of competing.]"
        }
      ],
      "interactiveActivities": [
        {
          "id": "economics-301-l02-a1",
          "title": "Classify Trade Policy Instruments",
          "type": "sorting_buckets",
          "buckets": [
            "Tariff",
            "Quota",
            "Non-Tariff Barrier",
            "Subsidy"
          ],
          "items": [
            {
              "id": "tp1",
              "text": "10% tax on imported steel",
              "bucket": "Tariff"
            },
            {
              "id": "tp2",
              "text": "Limit of 500,000 cars per year from Japan",
              "bucket": "Quota"
            },
            {
              "id": "tp3",
              "text": "Requiring safety labels in the local language",
              "bucket": "Non-Tariff Barrier"
            },
            {
              "id": "tp4",
              "text": "Government pays domestic farmers $2/bushel",
              "bucket": "Subsidy"
            },
            {
              "id": "tp5",
              "text": "$50 per ton on imported cement",
              "bucket": "Tariff"
            },
            {
              "id": "tp6",
              "text": "Mandatory 30-day quarantine on imported livestock",
              "bucket": "Non-Tariff Barrier"
            },
            {
              "id": "tp7",
              "text": "Tax credit for domestic semiconductor manufacturers",
              "bucket": "Subsidy"
            },
            {
              "id": "tp8",
              "text": "Cap of 10,000 metric tons of sugar imports",
              "bucket": "Quota"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "economics-301-l02-f1",
          "front": "Tariff",
          "back": "A tax on imports; raises domestic price, helps producers, hurts consumers, generates government revenue, and creates deadweight loss."
        },
        {
          "id": "economics-301-l02-f2",
          "front": "Import quota",
          "back": "A quantitative limit on imports; raises domestic price like a tariff but generates quota rents for license holders instead of tax revenue."
        },
        {
          "id": "economics-301-l02-f3",
          "front": "Infant industry argument",
          "back": "The economic justification for temporary protection of new domestic industries until they achieve economies of scale and can compete globally."
        },
        {
          "id": "economics-301-l02-f4",
          "front": "Dumping",
          "back": "Selling exports below the cost of production or below the home-market price, often used as a predatory pricing strategy to drive out foreign competitors."
        }
      ],
      "learningAids": [
        {
          "id": "economics-301-l02-a1",
          "type": "practice",
          "title": "Welfare Analysis Practice",
          "content": "When analyzing a tariff, always identify the four key areas on the supply/demand graph: Consumer Surplus (decreases), Producer Surplus (increases), Government Revenue (increases), and Deadweight Loss (the net loss to society)."
        }
      ]
    },
    {
      "id": "economics-301-l03",
      "title": "Trade Policy Quiz",
      "type": "quiz",
      "duration": 10,
      "objectives": [
        "Demonstrate understanding of comparative advantage and trade policy"
      ],
      "questions": [
        {
          "id": "economics-301-l03-q1",
          "text": "Country X can produce 1 car at an opportunity cost of 5 tons of wheat. Country Y can produce 1 car at an opportunity cost of 10 tons of wheat. Which country has the comparative advantage in cars?",
          "skillId": "economics-301-skill-trade",
          "options": [
            {
              "id": "a",
              "text": "Country X (lower opportunity cost in cars)"
            },
            {
              "id": "b",
              "text": "Country Y"
            },
            {
              "id": "c",
              "text": "Both equally"
            },
            {
              "id": "d",
              "text": "Neither — they should not trade"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Country X gives up only 5 tons of wheat per car vs. 10 for Y, so X has the lower opportunity cost and comparative advantage in cars."
        },
        {
          "id": "economics-301-l03-q2",
          "text": "A tariff on imported steel is most likely to benefit which group?",
          "skillId": "economics-301-skill-trade",
          "options": [
            {
              "id": "a",
              "text": "Consumers of steel products"
            },
            {
              "id": "b",
              "text": "Domestic steel producers"
            },
            {
              "id": "c",
              "text": "Foreign steel exporters"
            },
            {
              "id": "d",
              "text": "Downstream manufacturers equally"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Tariffs raise the domestic price, allowing domestic producers to charge more and increase output. Consumers, foreign exporters, and downstream manufacturers are harmed."
        },
        {
          "id": "economics-301-l03-q3",
          "text": "What distinguishes a quota from a tariff?",
          "skillId": "economics-301-skill-trade",
          "options": [
            {
              "id": "a",
              "text": "A quota raises prices but a tariff does not"
            },
            {
              "id": "b",
              "text": "A quota limits quantity and generates rents; a tariff raises price and generates tax revenue"
            },
            {
              "id": "c",
              "text": "Tariffs are illegal under WTO rules; quotas are permitted"
            },
            {
              "id": "d",
              "text": "There is no practical difference"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Both raise domestic prices, but tariffs generate government revenue while quotas generate rents for license holders. Quotas set a hard quantity ceiling."
        },
        {
          "id": "economics-301-l03-q4",
          "text": "According to the Heckscher-Ohlin model, a labor-abundant country will export:",
          "skillId": "economics-301-skill-trade",
          "options": [
            {
              "id": "a",
              "text": "Capital-intensive goods"
            },
            {
              "id": "b",
              "text": "Goods with the highest absolute advantage"
            },
            {
              "id": "c",
              "text": "Labor-intensive goods"
            },
            {
              "id": "d",
              "text": "Only primary commodities"
            }
          ],
          "correctOptionId": "c",
          "explanation": "H-O predicts countries export goods that use their abundant factor intensively — labor-abundant countries export labor-intensive goods."
        }
      ],
      "learningAids": []
    },
    {
      "id": "economics-301-l04",
      "title": "Balance of Payments",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Identify the current account, capital account, and financial account",
        "Explain why the balance of payments must sum to zero",
        "Interpret a country's trade deficit or surplus"
      ],
      "chunks": [
        {
          "id": "economics-301-l04-c1",
          "title": "The Current Account",
          "content": "The Balance of Payments (BOP) is a nation's financial report card, tracking all economic transactions between its residents and the rest of the world. The most closely watched component is the Current Account. It records three main activities: the trade of goods and services (exports minus imports), primary income (earnings from foreign investments and wages earned abroad), and secondary income (unilateral transfers like foreign aid or worker remittances). When a country imports more value than it exports, it runs a Current Account deficit. The United States, for example, has run persistent current account deficits for decades, meaning Americans consume more global products than they sell. To balance the books, this deficit must be financed by foreign capital flowing into the country. [Visual Prompt: A balance scale showing exports and income on one side, and imports and outflows on the other, tipping heavily to show a trade deficit.]"
        },
        {
          "id": "economics-301-l04-c2",
          "title": "Capital and Financial Accounts",
          "content": "Because the Balance of Payments uses double-entry bookkeeping, it must always sum to zero: Current Account + Capital Account + Financial Account = 0. The Capital Account is relatively small, recording transfers of non-financial assets like debt forgiveness or patent rights. The Financial Account, however, is massive. It tracks the movement of investment capital, including Foreign Direct Investment (FDI, like building a factory abroad), portfolio investment (buying foreign stocks and bonds), and changes in central bank reserve assets. If a country has a Current Account deficit, it must have a corresponding surplus in its Financial Account. This means the country is effectively borrowing from the rest of the world or selling off domestic assets to foreigners to fund its consumption. [Visual Prompt: A flowchart illustrating how a Current Account deficit (money flowing out for goods) is perfectly offset by a Financial Account surplus (foreign money flowing in to buy domestic bonds and real estate).]"
        },
        {
          "id": "economics-301-l04-c3",
          "title": "Twin Deficits and Sustainability",
          "content": "The 'twin deficits hypothesis' links a government's fiscal budget deficit to its national current account deficit. When a government spends more than it taxes, it must borrow, which drives up domestic interest rates. These higher yields attract foreign investors, causing capital to flow into the country. This influx of foreign capital appreciates the domestic currency, making exports more expensive and imports cheaper, thereby widening the trade deficit. Is a persistent current account deficit sustainable? It depends entirely on how the foreign capital is utilized. If the inflows finance productive investments—like infrastructure or technology—the economy will grow enough to service the debt. However, if the capital merely funds short-term consumption or real estate bubbles, the country risks a sudden stop in foreign investment, leading to a severe currency and debt crisis. [Visual Prompt: An interconnected diagram linking government budget deficits to higher interest rates, currency appreciation, and ultimately, a widening trade deficit.]"
        }
      ],
      "flashcards": [
        {
          "id": "economics-301-l04-f1",
          "front": "Current account",
          "back": "BOP component tracking trade in goods/services, net income from abroad, and unilateral transfers."
        },
        {
          "id": "economics-301-l04-f2",
          "front": "Financial account",
          "back": "BOP component tracking investment flows: Foreign Direct Investment (FDI), portfolio investment, and reserve assets."
        },
        {
          "id": "economics-301-l04-f3",
          "front": "Balance of Payments Identity",
          "back": "Current Account + Capital Account + Financial Account = 0. A deficit in the current account must be financed by a surplus in the financial account."
        },
        {
          "id": "economics-301-l04-f4",
          "front": "Twin deficits hypothesis",
          "back": "The theory that government budget deficits cause current account deficits through higher interest rates and currency appreciation."
        }
      ],
      "learningAids": [
        {
          "id": "economics-301-l04-a1",
          "type": "image",
          "title": "BOP Equation",
          "content": "Visual Prompt: A graphic showing the equation CA + KA + FA = 0, with a seesaw balancing a CA deficit against an FA surplus."
        }
      ]
    },
    {
      "id": "economics-301-l05",
      "title": "Exchange Rates & Currency Markets",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Distinguish fixed, floating, and managed exchange rate regimes",
        "Explain how supply and demand determine floating exchange rates",
        "Analyze the effects of currency appreciation and depreciation on trade"
      ],
      "chunks": [
        {
          "id": "economics-301-l05-c1",
          "title": "Exchange Rate Regimes and the Trilemma",
          "content": "An exchange rate is simply the price of one currency in terms of another. In a floating exchange rate system, this price is determined entirely by market forces of supply and demand. Conversely, in a fixed (or pegged) regime, a central bank actively buys and sells foreign reserves to maintain a specific currency value. Many nations use a 'managed float,' allowing market determination but intervening to prevent extreme volatility. Policymakers choosing a regime face the 'Impossible Trinity' (or Trilemma). This principle states a country can only achieve two of three goals simultaneously: a fixed exchange rate, free capital flows, and an independent monetary policy. If a country pegs its currency and allows free capital movement, it loses control over its own interest rates, as it must mirror the monetary policy of the anchor currency to maintain the peg. [Visual Prompt: A triangle diagram illustrating the 'Impossible Trinity', with nodes for Fixed Exchange Rate, Free Capital Flow, and Independent Monetary Policy, showing that only one side of the triangle can be chosen.]"
        },
        {
          "id": "economics-301-l05-c2",
          "title": "Determinants of Floating Exchange Rates",
          "content": "In a floating regime, currency values fluctuate based on several macroeconomic drivers. Relative interest rates are a primary short-term driver; if a country raises its interest rates, it attracts foreign capital seeking higher yields, increasing demand for the currency and causing it to appreciate. Relative inflation also plays a critical role; a country with high inflation will see its currency depreciate, as its purchasing power erodes compared to trading partners. Trade balances matter too—strong export demand naturally increases demand for the exporter's currency. Finally, in the long run, exchange rates are guided by Purchasing Power Parity (PPP), the theory that exchange rates should eventually adjust so that a basket of identical goods costs the same across different countries. [Visual Prompt: A dynamic currency exchange board where arrows indicate how rising interest rates push currency values up, while rising inflation pushes them down.]"
        },
        {
          "id": "economics-301-l05-c3",
          "title": "Currency Impacts on International Trade",
          "content": "Exchange rate movements drastically alter a nation's trade competitiveness. When a currency depreciates (loses value), domestic goods become cheaper for foreign buyers, boosting exports. Simultaneously, imports become more expensive for domestic consumers, which should theoretically improve the trade balance. However, this improvement is rarely immediate. Due to the 'J-curve effect,' a trade balance often worsens right after depreciation because existing import contracts must be paid at the new, higher exchange rate. Only over time, as volumes adjust to the new prices, does the trade balance improve. Conversely, currency appreciation makes exports uncompetitive and imports cheap. Multinational firms face constant exchange rate risk, utilizing financial instruments like forward contracts and options, or operational strategies like natural hedging (matching revenues and costs in the same currency) to protect their profit margins. [Visual Prompt: A line graph illustrating the J-curve effect, showing an initial dip in the trade balance followed by a steady upward recovery after currency depreciation.]"
        }
      ],
      "interactiveActivities": [
        {
          "id": "economics-301-l05-a1",
          "title": "Match Exchange Rate Concepts",
          "type": "matching_pairs",
          "pairs": [
            {
              "id": "er1",
              "left": "Purchasing power parity",
              "right": "Exchange rates adjust so identical goods cost the same across countries"
            },
            {
              "id": "er2",
              "left": "Impossible trinity",
              "right": "Cannot simultaneously have fixed exchange rate, free capital flows, and independent monetary policy"
            },
            {
              "id": "er3",
              "left": "J-curve effect",
              "right": "Trade balance initially worsens after depreciation before improving"
            },
            {
              "id": "er4",
              "left": "Currency appreciation",
              "right": "Exports become more expensive; imports become cheaper"
            },
            {
              "id": "er5",
              "left": "Managed float",
              "right": "Central bank intervenes occasionally to smooth exchange rate volatility"
            },
            {
              "id": "er6",
              "left": "Forward contract",
              "right": "Agreement to exchange currencies at a predetermined rate on a future date"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "economics-301-l05-f1",
          "front": "Floating exchange rate",
          "back": "Currency value determined by market supply and demand without central bank intervention."
        },
        {
          "id": "economics-301-l05-f2",
          "front": "Impossible trinity (trilemma)",
          "back": "A country can maintain only two of three: fixed exchange rate, free capital flows, independent monetary policy."
        },
        {
          "id": "economics-301-l05-f3",
          "front": "J-curve effect",
          "back": "After depreciation, the trade balance initially worsens (existing contracts at old prices) before improving as volumes adjust."
        },
        {
          "id": "economics-301-l05-f4",
          "front": "Purchasing power parity (PPP)",
          "back": "Theory that exchange rates adjust in the long run so identical goods cost the same across countries."
        }
      ],
      "learningAids": []
    },
    {
      "id": "economics-301-l06",
      "title": "Exchange Rates & BOP Quiz",
      "type": "quiz",
      "duration": 10,
      "objectives": [
        "Demonstrate understanding of balance of payments and exchange rates"
      ],
      "questions": [
        {
          "id": "economics-301-l06-q1",
          "text": "If the U.S. runs a current account deficit of $500 billion, what must be true about its financial account?",
          "skillId": "economics-301-skill-bop",
          "options": [
            {
              "id": "a",
              "text": "It must show a surplus of approximately $500 billion"
            },
            {
              "id": "b",
              "text": "It must also show a deficit"
            },
            {
              "id": "c",
              "text": "It is unaffected by the current account"
            },
            {
              "id": "d",
              "text": "The financial account only records FDI"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The BOP must balance. A current account deficit is financed by a corresponding surplus in the financial account (net capital inflows)."
        },
        {
          "id": "economics-301-l06-q2",
          "text": "According to the impossible trinity, a country with a fixed exchange rate and free capital flows must give up:",
          "skillId": "economics-301-skill-bop",
          "options": [
            {
              "id": "a",
              "text": "International trade"
            },
            {
              "id": "b",
              "text": "A central bank"
            },
            {
              "id": "c",
              "text": "Independent monetary policy"
            },
            {
              "id": "d",
              "text": "Government spending"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The trilemma states you can only have two of three: fixed rates, free capital flows, and independent monetary policy. Fixing the rate with open capital flows means the central bank must follow the anchor currency's policy."
        },
        {
          "id": "economics-301-l06-q3",
          "text": "If the euro depreciates against the dollar, what happens to European exports to the U.S.?",
          "skillId": "economics-301-skill-bop",
          "options": [
            {
              "id": "a",
              "text": "European exports become more expensive for Americans"
            },
            {
              "id": "b",
              "text": "European exports become cheaper for Americans"
            },
            {
              "id": "c",
              "text": "No effect on trade"
            },
            {
              "id": "d",
              "text": "Only services are affected, not goods"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A weaker euro means each dollar buys more euros, making European goods cheaper in dollar terms. This boosts European exports."
        },
        {
          "id": "economics-301-l06-q4",
          "text": "The J-curve effect describes:",
          "skillId": "economics-301-skill-bop",
          "options": [
            {
              "id": "a",
              "text": "Trade balance permanently improving after depreciation"
            },
            {
              "id": "b",
              "text": "Inflation rising then falling after a tariff"
            },
            {
              "id": "c",
              "text": "Trade balance initially worsening after depreciation before improving"
            },
            {
              "id": "d",
              "text": "GDP growth accelerating in a J-shaped pattern"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The J-curve: after depreciation, existing contracts are still at old prices so the import bill rises initially. Over time, export volumes increase and import volumes decrease, improving the balance."
        }
      ],
      "learningAids": []
    },
    {
      "id": "economics-301-l07",
      "title": "Trade Agreements & Organizations",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Compare bilateral, regional, and multilateral trade agreements",
        "Explain the functions of the WTO, IMF, and World Bank",
        "Assess the impact of trade blocs like the EU, USMCA, and ASEAN"
      ],
      "chunks": [
        {
          "id": "economics-301-l07-c1",
          "title": "The WTO and Multilateral Trade",
          "content": "The World Trade Organization (WTO) is the global referee for international trade, governing rules among over 160 member nations. Its core mission is to ensure trade flows as smoothly, predictably, and freely as possible. A foundational pillar of the WTO is the Most-Favored-Nation (MFN) principle, which dictates that if a country grants a special favor (like a lower tariff rate) to one member, it must extend that same treatment to all other WTO members. Another key rule is 'national treatment,' requiring that imported goods be treated equally to domestically produced goods once they enter the market. The WTO also operates a robust dispute settlement mechanism to prevent unilateral trade wars. However, the organization faces modern challenges, including stalled multilateral negotiations (like the Doha Round) and the rise of unilateral tariffs that bypass WTO frameworks. [Visual Prompt: A global network map showing WTO member countries, with glowing lines representing Most-Favored-Nation tariff agreements connecting them.]"
        },
        {
          "id": "economics-301-l07-c2",
          "title": "Regional Trade Agreements",
          "content": "While the WTO focuses on global rules, countries frequently form Regional Trade Agreements (RTAs) for deeper integration. These exist on a spectrum. A Free Trade Area (like the USMCA) eliminates internal tariffs, but members maintain their own external tariffs against non-members. A Customs Union goes a step further by establishing a common external tariff. A Common Market allows the free movement of labor and capital across borders. Finally, an Economic Union (like the Eurozone) integrates fiscal and monetary policies, including a shared currency. While RTAs generate 'trade creation' by replacing expensive domestic production with cheaper imports from member states, they also risk 'trade diversion.' This occurs when preferential tariffs cause a country to stop buying from a highly efficient non-member and instead buy from a less efficient member state, reducing overall global welfare. [Visual Prompt: A staircase graphic showing the levels of economic integration: Free Trade Area -> Customs Union -> Common Market -> Economic Union.]"
        },
        {
          "id": "economics-301-l07-c3",
          "title": "The IMF and World Bank",
          "content": "Born out of the 1944 Bretton Woods conference, the International Monetary Fund (IMF) and the World Bank serve distinct but complementary roles in the global economy. The IMF acts as the world's financial first responder, providing short-term loans to countries facing severe balance-of-payments crises or currency collapses. These loans come with strict 'conditionality,' requiring borrowing nations to implement fiscal austerity (cutting spending) and structural reforms to stabilize their economies. Conversely, the World Bank focuses on long-term economic development and poverty reduction, funding infrastructure, education, and healthcare projects in developing nations. Both institutions have faced criticism—the IMF for imposing harsh austerity that can deepen recessions, and the World Bank for funding projects that sometimes overlook environmental or local community impacts. In response, both are evolving to give emerging economies a stronger voice in their governance. [Visual Prompt: A side-by-side comparison: The IMF depicted as an emergency medic (short-term stabilization) and the World Bank as an architect/construction worker (long-term infrastructure and development).]"
        }
      ],
      "flashcards": [
        {
          "id": "economics-301-l07-f1",
          "front": "Most-favored-nation (MFN)",
          "back": "WTO principle: tariff concessions given to one member must be extended to all members."
        },
        {
          "id": "economics-301-l07-f2",
          "front": "Trade creation",
          "back": "Welfare-improving new trade between members of a trade bloc that replaces costlier domestic production."
        },
        {
          "id": "economics-301-l07-f3",
          "front": "Trade diversion",
          "back": "Welfare-reducing shift of imports from an efficient non-member to a less-efficient bloc member due to preferential tariffs."
        },
        {
          "id": "economics-301-l07-f4",
          "front": "IMF conditionality",
          "back": "Policy requirements (fiscal austerity, structural reform) attached to IMF loans for countries in balance-of-payments crisis."
        }
      ],
      "learningAids": []
    },
    {
      "id": "economics-301-l08",
      "title": "Economic Development Strategies",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Compare import substitution and export-led growth strategies",
        "Analyze the role of FDI, aid, and institutions in development",
        "Evaluate development indicators beyond GDP per capita"
      ],
      "chunks": [
        {
          "id": "economics-301-l08-c1",
          "title": "Import Substitution vs. Export-Led Growth",
          "content": "Developing nations have historically pursued two divergent paths to industrialization. Import Substitution Industrialization (ISI) aims to replace foreign imports with domestic production. Popular in Latin America mid-20th century, ISI relies heavily on high tariffs to protect 'infant industries.' While it sparks initial industrial growth, it often results in inefficient, uncompetitive monopolies reliant on permanent government protection. In stark contrast, Export-Led Growth (ELG) focuses on integrating into the global economy by producing highly competitive goods for international markets. Championed by the 'Asian Tigers' (South Korea, Taiwan, Singapore, Hong Kong), ELG forces domestic firms to adopt advanced technologies and achieve economies of scale to survive global competition. The success of ELG relies heavily on massive investments in human capital (education) and strategic government support for key export sectors. [Visual Prompt: A split illustration showing a walled-off, stagnant factory (ISI) versus a bustling, high-tech port with cargo ships heading outward (ELG).]"
        },
        {
          "id": "economics-301-l08-c2",
          "title": "FDI, Foreign Aid, and the Dutch Disease",
          "content": "Capital accumulation is critical for development. Foreign Direct Investment (FDI)—where multinational corporations build physical operations in a host country—is highly sought after. FDI brings not just capital, but technology transfer, management expertise, and integration into global supply chains. However, over-reliance on FDI can lead to profit repatriation and loss of domestic economic control. Foreign Aid (Official Development Assistance) provides another capital source, targeting infrastructure and health. Yet, aid has complex side effects. Beyond issues of corruption and dependency, massive inflows of foreign aid (or sudden natural resource wealth) can trigger 'Dutch Disease.' This phenomenon occurs when foreign currency floods the country, causing the domestic currency to appreciate sharply. This makes the country's other exports (like manufacturing or agriculture) uncompetitive globally, inadvertently harming long-term development. [Visual Prompt: An infographic showing the flow of FDI (factories, tech, jobs) versus Foreign Aid, alongside a warning sign for 'Dutch Disease' showing a soaring currency crushing a local factory.]"
        },
        {
          "id": "economics-301-l08-c3",
          "title": "Measuring Development Beyond GDP",
          "content": "While Gross Domestic Product (GDP) per capita is the standard metric for economic output, it is a flawed measure of human well-being. It ignores income inequality, environmental degradation, and access to basic services. To provide a holistic view, the UN created the Human Development Index (HDI), which synthesizes three dimensions: health (life expectancy), education (years of schooling), and standard of living (Gross National Income per capita). Economists also rely on the Gini coefficient to measure income inequality, and the Multidimensional Poverty Index (MPI) to capture deprivations in daily life. Ultimately, modern development economics emphasizes that sustainable growth requires strong, inclusive institutions—secure property rights, the rule of law, and transparent governance—which are the true bedrock of long-term prosperity. [Visual Prompt: A dashboard comparing GDP per capita (a single dollar metric) with the Human Development Index (HDI), which includes vibrant icons for health, education, and income distribution.]"
        }
      ],
      "interactiveActivities": [
        {
          "id": "economics-301-l08-a1",
          "title": "Match Development Concepts",
          "type": "matching_pairs",
          "pairs": [
            {
              "id": "dc1",
              "left": "Import substitution",
              "right": "Protect infant industries to build domestic manufacturing behind tariff walls"
            },
            {
              "id": "dc2",
              "left": "Export-led growth",
              "right": "Focus on producing competitive goods for global markets (Asian Tigers model)"
            },
            {
              "id": "dc3",
              "left": "Human Development Index",
              "right": "Combines life expectancy, education, and income to measure well-being"
            },
            {
              "id": "dc4",
              "left": "Dutch disease",
              "right": "Resource windfalls or aid inflows appreciate currency, harming export competitiveness"
            },
            {
              "id": "dc5",
              "left": "Gini coefficient",
              "right": "Measures income inequality on a scale from 0 (perfect equality) to 1 (maximum inequality)"
            },
            {
              "id": "dc6",
              "left": "Foreign direct investment",
              "right": "Firm invests in physical operations abroad, bringing capital, technology, and jobs"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "economics-301-l08-f1",
          "front": "Import substitution industrialization (ISI)",
          "back": "Development strategy using tariffs to protect infant industries and replace imports with domestic production."
        },
        {
          "id": "economics-301-l08-f2",
          "front": "Export-led growth (ELG)",
          "back": "Strategy emphasizing production of competitive goods for world markets; used by Asian Tiger economies."
        },
        {
          "id": "economics-301-l08-f3",
          "front": "Human Development Index (HDI)",
          "back": "Composite measure of life expectancy, education, and GNI per capita; broader than GDP per capita alone."
        },
        {
          "id": "economics-301-l08-f4",
          "front": "Dutch disease",
          "back": "When large resource revenues or aid inflows cause currency appreciation that undermines export competitiveness."
        }
      ],
      "learningAids": []
    },
    {
      "id": "economics-301-l09",
      "title": "Development & Globalization Quiz",
      "type": "quiz",
      "duration": 10,
      "objectives": [
        "Demonstrate understanding of trade institutions and development economics"
      ],
      "questions": [
        {
          "id": "economics-301-l09-q1",
          "text": "Which development strategy focuses on producing goods for international markets to drive industrialization?",
          "skillId": "economics-301-skill-dev",
          "options": [
            {
              "id": "a",
              "text": "Import substitution industrialization"
            },
            {
              "id": "b",
              "text": "Export-led growth"
            },
            {
              "id": "c",
              "text": "Aid dependency"
            },
            {
              "id": "d",
              "text": "Autarky"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Export-led growth emphasizes competitive production for world markets, as seen in the Asian Tiger economies."
        },
        {
          "id": "economics-301-l09-q2",
          "text": "The WTO's most-favored-nation principle requires that:",
          "skillId": "economics-301-skill-dev",
          "options": [
            {
              "id": "a",
              "text": "Each country must have zero tariffs"
            },
            {
              "id": "b",
              "text": "Trade concessions to one member are extended to all members"
            },
            {
              "id": "c",
              "text": "Developing countries get preferential tariff rates"
            },
            {
              "id": "d",
              "text": "Countries must join regional trade agreements"
            }
          ],
          "correctOptionId": "b",
          "explanation": "MFN means any tariff reduction or trade advantage given to one WTO member must be offered to all members (with some exceptions for FTAs and developing nations)."
        },
        {
          "id": "economics-301-l09-q3",
          "text": "Trade diversion from a regional trade agreement occurs when:",
          "skillId": "economics-301-skill-dev",
          "options": [
            {
              "id": "a",
              "text": "Imports shift from a more efficient non-member to a less efficient member"
            },
            {
              "id": "b",
              "text": "All members increase productivity"
            },
            {
              "id": "c",
              "text": "New trade is created that didn't exist before"
            },
            {
              "id": "d",
              "text": "The agreement reduces all tariffs to zero"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Trade diversion reduces welfare because the bloc's preferential tariffs make it cheaper to import from a less-efficient member rather than a more-efficient non-member."
        },
        {
          "id": "economics-301-l09-q4",
          "text": "What does the HDI measure that GDP per capita alone does not?",
          "skillId": "economics-301-skill-dev",
          "options": [
            {
              "id": "a",
              "text": "Stock market performance"
            },
            {
              "id": "b",
              "text": "Military spending"
            },
            {
              "id": "c",
              "text": "Life expectancy and education alongside income"
            },
            {
              "id": "d",
              "text": "Government debt levels"
            }
          ],
          "correctOptionId": "c",
          "explanation": "HDI captures three dimensions of human well-being: health (life expectancy), knowledge (years of schooling), and income (GNI per capita)."
        }
      ]
    },
    {
      "id": "economics-301-l10",
      "title": "International Economics Mastery Quiz",
      "type": "quiz",
      "duration": 15,
      "objectives": [
        "Synthesize knowledge across all topics in international economics"
      ],
      "questions": [
        {
          "id": "economics-301-l10-q1",
          "text": "According to the Ricardian model, what drives comparative advantage?",
          "skillId": "economics-301-skill-trade",
          "options": [
            {
              "id": "a",
              "text": "Differences in labor productivity across countries"
            },
            {
              "id": "b",
              "text": "Differences in factor endowments"
            },
            {
              "id": "c",
              "text": "Government subsidies"
            },
            {
              "id": "d",
              "text": "Exchange rate manipulation"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Ricardo's model is based on relative labor productivity differences. The H-O model focuses on factor endowments."
        },
        {
          "id": "economics-301-l10-q2",
          "text": "If a country imposes a tariff, the deadweight loss comes from:",
          "skillId": "economics-301-skill-trade",
          "options": [
            {
              "id": "a",
              "text": "Government revenue collection"
            },
            {
              "id": "b",
              "text": "Reduced consumption and inefficient domestic production"
            },
            {
              "id": "c",
              "text": "Increased exports"
            },
            {
              "id": "d",
              "text": "Lower wages for workers"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Tariffs create two deadweight loss triangles: one from consumers buying less, another from inefficient domestic firms producing where they shouldn't."
        },
        {
          "id": "economics-301-l10-q3",
          "text": "A customs union differs from a free trade area because a customs union also:",
          "skillId": "economics-301-skill-dev",
          "options": [
            {
              "id": "a",
              "text": "Allows free movement of labor"
            },
            {
              "id": "b",
              "text": "Harmonizes members' external tariffs"
            },
            {
              "id": "c",
              "text": "Creates a shared currency"
            },
            {
              "id": "d",
              "text": "Bans all government subsidies"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A free trade area removes tariffs among members but each sets its own external tariffs. A customs union adds a common external tariff."
        },
        {
          "id": "economics-301-l10-q4",
          "text": "Which BOP account records foreign direct investment flows?",
          "skillId": "economics-301-skill-bop",
          "options": [
            {
              "id": "a",
              "text": "Current account"
            },
            {
              "id": "b",
              "text": "Capital account"
            },
            {
              "id": "c",
              "text": "Financial account"
            },
            {
              "id": "d",
              "text": "Official reserve account only"
            }
          ],
          "correctOptionId": "c",
          "explanation": "FDI is recorded in the financial account, along with portfolio investment and changes in reserve assets."
        },
        {
          "id": "economics-301-l10-q5",
          "text": "The Stolper-Samuelson theorem predicts that free trade will:",
          "skillId": "economics-301-skill-trade",
          "options": [
            {
              "id": "a",
              "text": "Benefit all factors of production equally"
            },
            {
              "id": "b",
              "text": "Benefit the abundant factor and hurt the scarce factor"
            },
            {
              "id": "c",
              "text": "Only affect the agricultural sector"
            },
            {
              "id": "d",
              "text": "Have no effect on income distribution"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Stolper-Samuelson: trade raises the real return to the abundant factor and lowers the return to the scarce factor, explaining why some groups lobby for protection."
        }
      ]
    },
    {
      "id": "economics-301-l11",
      "title": "Applied Challenge: Trade Negotiation Scenario",
      "type": "interactive",
      "duration": 18,
      "objectives": [
        "Apply trade theory to a realistic negotiation scenario",
        "Evaluate competing stakeholder interests in trade policy"
      ],
      "chunks": [
        {
          "id": "economics-301-l11-c1",
          "title": "Scenario: The Steel Tariff Debate",
          "content": "Step into the shoes of the Trade Minister for Country Alphaland. You are facing immense political pressure to impose a 25% tariff on imported steel. Domestic steel producers are lobbying hard, arguing the tariff is necessary to save 15,000 manufacturing jobs from cheap foreign competition. However, the auto manufacturing sector in Alphaland, which employs 200,000 workers, is fiercely opposed. Steel is a primary input for cars; a tariff will spike their production costs, making Alphaland's cars uncompetitive globally and threatening mass layoffs. Furthermore, Betaland—your primary steel supplier—has threatened to retaliate by placing tariffs on Alphaland's agricultural exports. To complicate matters, WTO lawyers warn that a unilateral tariff violates your Most-Favored-Nation commitments. You must navigate this minefield, balancing concentrated domestic interests against broader economic fallout and international law. [Visual Prompt: A stakeholder map showing the Trade Minister in the center, pulled in different directions by domestic steel producers, auto manufacturers, farmers, and WTO officials.]"
        },
        {
          "id": "economics-301-l11-c2",
          "title": "Stakeholder Analysis Framework",
          "content": "To resolve the steel tariff dilemma, economists use a stakeholder analysis framework centered on 'concentrated benefits vs. diffuse costs.' The 15,000 steelworkers face a concentrated, existential threat, making them highly organized and vocal. Conversely, the costs of the tariff are diffuse—spread across 200,000 auto workers and millions of car buyers who will pay slightly more for a vehicle. Because the cost per consumer is small, they are less likely to lobby against the tariff, creating an asymmetric political pressure that favors protectionism. A robust analysis must also weigh the risk of retaliation: protecting 15,000 steel jobs might cost 30,000 agricultural jobs if Betaland retaliates. Finally, policymakers must explore alternatives. Instead of a market-distorting tariff, could Alphaland offer targeted subsidies to upgrade steel technology, or fund worker retraining programs? These alternatives often achieve domestic goals with far less collateral damage to the global trade system. [Visual Prompt: A decision matrix weighing concentrated benefits (steel jobs) against diffuse costs (higher car prices for consumers) and retaliation risks (agricultural exports).]"
        }
      ],
      "interactiveActivities": [
        {
          "id": "economics-301-l11-a1",
          "title": "Classify Stakeholder Positions on Steel Tariff",
          "type": "sorting_buckets",
          "buckets": [
            "Supports Tariff",
            "Opposes Tariff"
          ],
          "items": [
            {
              "id": "st1",
              "text": "Domestic steel manufacturers seeking higher prices",
              "bucket": "Supports Tariff"
            },
            {
              "id": "st2",
              "text": "Automakers facing higher input costs",
              "bucket": "Opposes Tariff"
            },
            {
              "id": "st3",
              "text": "Steel workers' union fearing plant closures",
              "bucket": "Supports Tariff"
            },
            {
              "id": "st4",
              "text": "Agricultural exporters worried about retaliation",
              "bucket": "Opposes Tariff"
            },
            {
              "id": "st5",
              "text": "Construction companies facing higher material costs",
              "bucket": "Opposes Tariff"
            },
            {
              "id": "st6",
              "text": "National security advisors citing defense readiness",
              "bucket": "Supports Tariff"
            },
            {
              "id": "st7",
              "text": "Consumer advocacy groups concerned about price increases",
              "bucket": "Opposes Tariff"
            },
            {
              "id": "st8",
              "text": "Small domestic steel foundries unable to compete on price",
              "bucket": "Supports Tariff"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "economics-301-l11-f1",
          "front": "Concentrated benefits, diffuse costs",
          "back": "Trade protection gives large gains to few producers but small costs per consumer — creating asymmetric political lobbying."
        },
        {
          "id": "economics-301-l11-f2",
          "front": "Retaliation risk",
          "back": "When one country raises tariffs, trading partners may impose counter-tariffs, escalating into a trade war that harms both economies."
        }
      ]
    },
    {
      "id": "economics-301-l12",
      "title": "International Economics Mastery Retest",
      "type": "quiz",
      "duration": 15,
      "objectives": [
        "Demonstrate mastery of international economics concepts on second attempt"
      ],
      "questions": [
        {
          "id": "economics-301-l12-q1",
          "text": "Country M has abundant capital and Country N has abundant labor. According to H-O, Country M will export:",
          "skillId": "economics-301-skill-trade",
          "options": [
            {
              "id": "a",
              "text": "Labor-intensive goods"
            },
            {
              "id": "b",
              "text": "Capital-intensive goods"
            },
            {
              "id": "c",
              "text": "Only services"
            },
            {
              "id": "d",
              "text": "Raw materials"
            }
          ],
          "correctOptionId": "b",
          "explanation": "H-O: countries export goods using their abundant factor intensively. Capital-abundant M exports capital-intensive goods."
        },
        {
          "id": "economics-301-l12-q2",
          "text": "An import quota differs from a voluntary export restraint (VER) because:",
          "skillId": "economics-301-skill-trade",
          "options": [
            {
              "id": "a",
              "text": "Quotas are imposed by the importing country; VERs are imposed by the exporter"
            },
            {
              "id": "b",
              "text": "VERs generate more government revenue than quotas"
            },
            {
              "id": "c",
              "text": "Quotas lower prices but VERs raise them"
            },
            {
              "id": "d",
              "text": "There is no meaningful difference"
            }
          ],
          "correctOptionId": "a",
          "explanation": "With a quota, the importing country limits entry; with a VER, the exporting country 'voluntarily' restricts its own exports (usually under political pressure). Quota rents go to importers; VER rents go to foreign exporters."
        },
        {
          "id": "economics-301-l12-q3",
          "text": "A country running a large current account deficit is necessarily:",
          "skillId": "economics-301-skill-bop",
          "options": [
            {
              "id": "a",
              "text": "Bankrupt"
            },
            {
              "id": "b",
              "text": "Receiving net capital inflows from abroad"
            },
            {
              "id": "c",
              "text": "Experiencing high inflation"
            },
            {
              "id": "d",
              "text": "Running a government budget surplus"
            }
          ],
          "correctOptionId": "b",
          "explanation": "By BOP identity, a current account deficit must be matched by a financial account surplus — meaning net capital inflows finance the gap."
        },
        {
          "id": "economics-301-l12-q4",
          "text": "Which is a potential downside of import substitution industrialization?",
          "skillId": "economics-301-skill-dev",
          "options": [
            {
              "id": "a",
              "text": "Too much foreign competition"
            },
            {
              "id": "b",
              "text": "Creation of inefficient monopolies sheltered from competition"
            },
            {
              "id": "c",
              "text": "Currency depreciation from excessive exports"
            },
            {
              "id": "d",
              "text": "Reduced government revenue"
            }
          ],
          "correctOptionId": "b",
          "explanation": "ISI's tariff walls often shield domestic firms from competitive pressure, leading to inefficiency, rent-seeking, and lack of innovation."
        },
        {
          "id": "economics-301-l12-q5",
          "text": "Purchasing power parity theory predicts that in the long run:",
          "skillId": "economics-301-skill-bop",
          "options": [
            {
              "id": "a",
              "text": "All countries will have the same GDP"
            },
            {
              "id": "b",
              "text": "Exchange rates adjust so identical goods cost the same across countries"
            },
            {
              "id": "c",
              "text": "Interest rates converge globally"
            },
            {
              "id": "d",
              "text": "Trade deficits disappear"
            }
          ],
          "correctOptionId": "b",
          "explanation": "PPP suggests exchange rates move toward levels where a basket of goods costs the same in each country, adjusting for relative price levels."
        }
      ]
    },
    {
      "id": "economics-301-l13",
      "title": "Real-World Application: Globalization Case Studies",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Analyze real-world trade disputes and their outcomes",
        "Evaluate globalization's effects on developed and developing nations"
      ],
      "chunks": [
        {
          "id": "economics-301-l13-c1",
          "title": "The China Shock",
          "content": "In 2001, China's accession to the WTO integrated a massive, low-cost labor force into the global trading system. While this lowered prices for consumers worldwide, it had profound localized impacts. Economists Autor, Dorn, and Hanson documented the 'China Shock'—revealing that U.S. regions heavily exposed to Chinese manufacturing competition experienced severe, persistent job losses. Contrary to traditional economic models assuming displaced workers would quickly transition to new industries, many workers faced prolonged unemployment and depressed wages. This localized economic pain fueled significant political backlash against globalization, highlighting that while free trade grows the overall economic pie, the failure to redistribute those gains can fracture societies. [Visual Prompt: A timeline and heat map of the US showing manufacturing job losses concentrated in specific regions following China's 2001 WTO entry.]"
        },
        {
          "id": "economics-301-l13-c2",
          "title": "The Asian Tiger Success Story",
          "content": "The 'Asian Tigers'—South Korea, Taiwan, Singapore, and Hong Kong—provide the most striking example of trade-driven development. In a single generation, they transformed from impoverished agrarian societies into high-income tech powerhouses. Their success was not an accident of pure free markets, but a masterclass in Export-Led Growth and strategic industrial policy. Governments heavily subsidized education to build a highly skilled workforce, directed credit to strategic export sectors, and aggressively acquired foreign technology. High domestic savings rates provided the capital needed for massive infrastructure investments. By forcing domestic firms to compete on the global stage rather than protecting them behind tariff walls, the Tigers achieved unprecedented, sustained economic growth. [Visual Prompt: A line graph showing the explosive GDP growth of South Korea, Taiwan, Singapore, and Hong Kong from the 1960s to the 2000s, diverging sharply from other developing nations.]"
        },
        {
          "id": "economics-301-l13-c3",
          "title": "Brexit and the Costs of Disintegration",
          "content": "In 2016, the UK voted to leave the European Union, providing a rare real-world case study in economic disintegration. Leaving the EU's Single Market and Customs Union meant the sudden reintroduction of non-tariff barriers, customs checks, and regulatory friction. The immediate economic impacts were stark: supply chains were disrupted, foreign direct investment dropped as the UK lost its status as a frictionless gateway to Europe, and severe labor shortages emerged in sectors reliant on EU workers. While Brexit granted the UK the sovereignty to negotiate independent trade deals and set its own regulations, the macroeconomic consensus shows a net drag on UK GDP growth. Brexit serves as a powerful reminder that while economic integration is complex, reversing it carries profound and immediate economic costs. [Visual Prompt: An animation of the UK detaching from the European Union puzzle, followed by the appearance of customs checkpoints and trade friction symbols.]"
        }
      ],
      "flashcards": [
        {
          "id": "economics-301-l13-f1",
          "front": "China shock",
          "back": "Rapid surge in Chinese manufacturing imports after WTO entry (2001) that caused significant, persistent job losses in exposed U.S. regions."
        },
        {
          "id": "economics-301-l13-f2",
          "front": "Asian Tigers",
          "back": "South Korea, Taiwan, Singapore, Hong Kong — achieved rapid industrialization through export-led growth and strategic industrial policy."
        }
      ]
    },
    {
      "id": "economics-301-l14",
      "title": "Coaching Clinic: Common International Economics Mistakes",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Identify and correct common misconceptions in international economics"
      ],
      "chunks": [
        {
          "id": "economics-301-l14-c1",
          "title": "Debunking Trade Fallacies",
          "content": "International economics is full of counterintuitive concepts, leading to widespread public misconceptions. Let's correct the top five: \n\n1. Confusing Absolute and Comparative Advantage: A country doesn't need to be the 'best' at making something to export it; it just needs to have a lower opportunity cost. \n2. 'Trade Deficits are inherently bad': A deficit isn't a corporate loss. It often means a country is an attractive destination for foreign investment, financing the gap with capital inflows. \n3. 'Tariffs protect the economy': Tariffs protect specific producers but act as a regressive tax on consumers and downstream industries, resulting in a net loss for the overall economy. \n4. 'PPP dictates daily exchange rates': Purchasing Power Parity is a long-run gravitational pull. In the short run, exchange rates are wildly driven by interest rates and speculative capital flows. \n5. 'A weak currency means a weak economy': Currency depreciation is often a deliberate strategy to make exports cheaper and boost domestic manufacturing. [Visual Prompt: A 'Myth vs. Fact' flipboard animation correcting these common trade fallacies one by one.]"
        }
      ],
      "interactiveActivities": [
        {
          "id": "economics-301-l14-a1",
          "title": "Match Misconceptions to Corrections",
          "type": "matching_pairs",
          "pairs": [
            {
              "id": "mc1",
              "left": "Trade deficits mean a country is losing",
              "right": "Deficits may signal strong investment demand; they're financed by capital inflows"
            },
            {
              "id": "mc2",
              "left": "Tariffs help the overall economy",
              "right": "Tariffs help protected producers but impose net welfare losses on the economy as a whole"
            },
            {
              "id": "mc3",
              "left": "A country with no absolute advantage can't trade",
              "right": "Comparative advantage, not absolute advantage, determines beneficial trade patterns"
            },
            {
              "id": "mc4",
              "left": "PPP sets exchange rates daily",
              "right": "PPP is a long-run tendency; short-run rates are driven by interest rates, capital flows, and speculation"
            },
            {
              "id": "mc5",
              "left": "Currency depreciation is always bad",
              "right": "Depreciation can boost export competitiveness and is sometimes deliberately engineered"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "economics-301-l14-f1",
          "front": "Why aren't trade deficits always bad?",
          "back": "They may reflect an attractive investment climate; strong economies often run deficits because foreign capital flows in to invest."
        },
        {
          "id": "economics-301-l14-f2",
          "front": "Why doesn't PPP hold in the short run?",
          "back": "Capital flows, speculation, interest rate differentials, and transaction costs cause large short-run deviations from PPP."
        }
      ]
    },
    {
      "id": "economics-301-l15",
      "title": "International Economics Mastery Sprint",
      "type": "quiz",
      "duration": 12,
      "objectives": [
        "Achieve final mastery of international economics concepts"
      ],
      "questions": [
        {
          "id": "economics-301-l15-q1",
          "text": "If Country A's opportunity cost of wine is 2 cloth and Country B's opportunity cost of wine is 4 cloth, who should produce wine?",
          "skillId": "economics-301-skill-trade",
          "options": [
            {
              "id": "a",
              "text": "Country A (lower opportunity cost in wine)"
            },
            {
              "id": "b",
              "text": "Country B"
            },
            {
              "id": "c",
              "text": "Both should produce wine equally"
            },
            {
              "id": "d",
              "text": "Neither should produce wine"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Country A gives up only 2 cloth per wine vs. 4 for B. A has comparative advantage in wine and should specialize there."
        },
        {
          "id": "economics-301-l15-q2",
          "text": "Which institution provides short-term loans to countries with balance-of-payments crises?",
          "skillId": "economics-301-skill-dev",
          "options": [
            {
              "id": "a",
              "text": "World Bank"
            },
            {
              "id": "b",
              "text": "WTO"
            },
            {
              "id": "c",
              "text": "IMF"
            },
            {
              "id": "d",
              "text": "ASEAN"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The IMF provides short-term emergency financing for BOP crises; the World Bank focuses on long-term development lending."
        },
        {
          "id": "economics-301-l15-q3",
          "text": "What kind of trade agreement removes internal tariffs AND harmonizes external tariffs?",
          "skillId": "economics-301-skill-dev",
          "options": [
            {
              "id": "a",
              "text": "Free trade area"
            },
            {
              "id": "b",
              "text": "Customs union"
            },
            {
              "id": "c",
              "text": "Economic union"
            },
            {
              "id": "d",
              "text": "Bilateral investment treaty"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A customs union eliminates tariffs among members (like an FTA) AND adopts a common external tariff schedule."
        },
        {
          "id": "economics-301-l15-q4",
          "text": "The 'China shock' research found that:",
          "skillId": "economics-301-skill-dev",
          "options": [
            {
              "id": "a",
              "text": "All U.S. workers benefited from cheaper imports"
            },
            {
              "id": "b",
              "text": "China's exports had no measurable impact on U.S. employment"
            },
            {
              "id": "c",
              "text": "U.S. regions exposed to Chinese imports experienced persistent job losses"
            },
            {
              "id": "d",
              "text": "Only agricultural workers were affected"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Autor, Dorn, and Hanson showed significant, persistent labor market disruptions in U.S. regions competing with Chinese imports."
        },
        {
          "id": "economics-301-l15-q5",
          "text": "A managed float exchange rate regime means:",
          "skillId": "economics-301-skill-bop",
          "options": [
            {
              "id": "a",
              "text": "The rate is permanently fixed to the dollar"
            },
            {
              "id": "b",
              "text": "Market forces set the rate but the central bank intervenes occasionally"
            },
            {
              "id": "c",
              "text": "Only the government can buy and sell currency"
            },
            {
              "id": "d",
              "text": "The currency is not convertible"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A managed float (dirty float) allows market determination with occasional central bank intervention to reduce excessive volatility."
        }
      ]
    }
  ]
};
