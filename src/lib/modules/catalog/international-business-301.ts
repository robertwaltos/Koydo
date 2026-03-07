import type { LearningModule } from "@/lib/modules/types";

export const international_business_301_Module: LearningModule = {
  "id": "international-business-301",
  "title": "Global Trade & Finance",
  "description": "Dive into the monetary systems and trade policies that govern global commerce. Understand exchange rate regimes, master hedging strategies for currency risk, analyze trade policy instruments, and navigate the complex landscape of the WTO and regional trade agreements.",
  "subject": "Business",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "mba",
    "international-business"
  ],
  "minAge": 18,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Trace the evolution of the international monetary system from Bretton Woods to today",
    "Compare fixed, floating, and managed exchange rate regimes",
    "Apply hedging instruments to manage foreign exchange risk",
    "Analyze the effects of tariffs, quotas, and subsidies on trade",
    "Explain the role of the WTO in governing international trade",
    "Evaluate major regional trade agreements and their business implications",
    "Describe trade finance instruments used in cross-border transactions"
  ],
  "lessons": [
    {
      "id": "international-business-301-l01",
      "title": "The International Monetary System",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Describe the gold standard and its collapse",
        "Explain the Bretton Woods system and its legacy institutions",
        "Outline the current post-Bretton Woods monetary landscape"
      ],
      "chunks": [
        {
          "id": "international-business-301-l01-c1",
          "title": "The Gold Standard Era",
          "content": "The classical gold standard, prevalent from the 1870s to 1914, was a monetary system where countries fixed their currency's value in terms of a specific amount of gold. This created a network of stable exchange rates, facilitating international trade. The system had a powerful self-correcting mechanism, known as the price-specie-flow mechanism: a country with a trade deficit would experience an outflow of gold, contracting its money supply. This led to deflation, making its exports cheaper and automatically restoring trade balance. However, the system's rigidity became its downfall. The financing needs of World War I led governments to suspend gold convertibility and resort to inflationary finance. Attempts to restore the gold standard in the 1920s were short-lived and ultimately failed amidst the economic turmoil of the Great Depression.",
          "visualPrompt": "An animated timeline showing the rise and fall of the Gold Standard, with key events like WWI and the Great Depression marked. Include an animated diagram illustrating the price-specie-flow mechanism with gold coins moving between two countries."
        },
        {
          "id": "international-business-301-l01-c2",
          "title": "Bretton Woods and Its Legacy",
          "content": "The Bretton Woods conference in 1944 established a new international monetary order designed to foster stability. The system was an adjustable-peg system centered on the U.S. dollar, which was itself pegged to gold at $35 per ounce. Other currencies were pegged to the dollar. Two key institutions were created: the International Monetary Fund (IMF) to provide short-term financing to countries facing balance of payments crises, and the World Bank to finance post-war reconstruction and development. The system facilitated over two decades of global growth but came under strain in the late 1960s due to persistent U.S. balance of payments deficits. In 1971, President Nixon suspended the dollar's convertibility to gold, effectively ending the Bretton Woods system. The IMF and World Bank, however, remain central to the global financial architecture.",
          "visualPrompt": "A diagram showing the Bretton Woods structure: gold at the center, linked to the U.S. dollar, which is then linked to other major currencies. Include logos for the IMF and World Bank with brief descriptions of their functions."
        },
        {
          "id": "international-business-301-l01-c3",
          "title": "The Modern Monetary Landscape",
          "content": "The post-Bretton Woods era, beginning in 1973, is characterized by a flexible, hybrid system of exchange rates. Major currencies like the U.S. dollar, euro, and Japanese yen float freely, with their values determined by market forces. Many other countries employ a managed float, where the central bank intervenes to smooth out excessive volatility. Some economies maintain fixed exchange rates, or pegs, to a major currency, such as the Hong Kong dollar's peg to the U.S. dollar. A unique arrangement is the Eurozone, where member states have adopted a single currency, the euro. This eliminates exchange rate risk among members but requires them to cede monetary policy autonomy to the European Central Bank. This modern landscape reflects a trade-off between exchange rate stability and national economic policy independence.",
          "visualPrompt": "A world map color-coded to show different exchange rate regimes: blue for floating, green for managed float, and red for fixed/pegged. Highlight the Eurozone as a special case."
        }
      ],
      "flashcards": [
        {
          "id": "international-business-301-l01-f1",
          "front": "Bretton Woods system (1944–1971)",
          "back": "U.S. dollar pegged to gold at $35/oz, other currencies pegged to the dollar. Created the IMF and World Bank. Collapsed when Nixon ended gold convertibility."
        },
        {
          "id": "international-business-301-l01-f2",
          "front": "Price-specie-flow mechanism",
          "back": "The self-correcting mechanism of the gold standard where a deficit country's gold outflow causes deflation, boosting exports and rebalancing trade."
        },
        {
          "id": "international-business-301-l01-f3",
          "front": "Managed float",
          "back": "An exchange rate regime where the currency largely floats but the central bank intervenes periodically to reduce excessive volatility or guide the rate."
        }
      ],
      "learningAids": [
        {
          "id": "international-business-301-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "international-business-301-l02",
      "title": "Exchange Rate Regimes",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Compare fixed, floating, and pegged exchange rate systems",
        "Explain the impossible trinity of monetary policy",
        "Assess how regime choice affects business planning"
      ],
      "chunks": [
        {
          "id": "international-business-301-l02-c1",
          "title": "Fixed vs. Floating Regimes",
          "content": "Exchange rate regimes fall on a spectrum between two main types: fixed and floating. A fixed exchange rate regime pegs a currency's value to another currency or a basket of currencies. This provides stability and predictability for international trade and investment but requires the central bank to hold substantial foreign exchange reserves to defend the peg, limiting its monetary policy autonomy. In contrast, a floating exchange rate is determined by market forces of supply and demand. This allows for independent monetary policy to address domestic economic goals like inflation and unemployment but introduces exchange rate volatility, creating uncertainty for businesses. In practice, many countries adopt intermediate systems, such as a managed float, to balance the trade-offs between stability and flexibility.",
          "visualPrompt": "A side-by-side comparison table. Left side: 'Fixed Regime' with icons for stability, reserves, and limited policy. Right side: 'Floating Regime' with icons for flexibility, market forces, and policy autonomy."
        },
        {
          "id": "international-business-301-l02-c2",
          "title": "The Impossible Trinity",
          "content": "The impossible trinity, or trilemma, is a core concept in international economics. It posits that a country cannot simultaneously achieve all three of the following policy goals: a fixed exchange rate, free capital movement, and an independent monetary policy. A country must choose two out of the three, sacrificing the third. For example, the United States prioritizes free capital flows and monetary independence, thus allowing its exchange rate to float. China has historically restricted capital flows to maintain control over both its exchange rate and monetary policy. Eurozone members have free capital mobility and a fixed internal exchange rate (the single currency), which requires them to forgo independent national monetary policies. This framework highlights the fundamental trade-offs governments face in managing their economies in a globalized world.",
          "visualPrompt": "An animated triangular diagram labeled 'The Impossible Trinity'. The vertices are 'Fixed Exchange Rate', 'Free Capital Mobility', and 'Independent Monetary Policy'. Show that a country can only be on one of the sides, not in the center, with country flags (USA, China, Eurozone) placed on the appropriate sides."
        },
        {
          "id": "international-business-301-l02-c3",
          "title": "Business Implications of Regime Choice",
          "content": "A country's choice of exchange rate regime has profound implications for business strategy. Fixed rates reduce transaction costs and uncertainty, simplifying planning and pricing for importers and exporters. However, they carry the risk of a sudden, large devaluation if the peg becomes unsustainable, which can be triggered by speculative attacks. The 1997 Asian financial crisis is a stark example. Floating rates expose firms to continuous currency fluctuations, necessitating active risk management through hedging. While this adds complexity, it allows for gradual adjustment to economic shocks. For firms operating in fixed-rate environments, it is critical to monitor economic fundamentals like foreign reserve levels, trade deficits, and political stability for signs that the peg may be under pressure.",
          "visualPrompt": "A flowchart for a business manager. The first question is 'What is the host country's exchange rate regime?'. Branches lead to 'Fixed' (Pros: Stability; Cons: Devaluation Risk) and 'Floating' (Pros: Gradual Adjustment; Cons: Volatility), with suggested business strategies for each."
        }
      ],
      "flashcards": [
        {
          "id": "international-business-301-l02-f1",
          "front": "Fixed exchange rate regime",
          "back": "Currency pegged at a set rate to another currency or basket — provides certainty but requires large reserves to defend and limits monetary policy flexibility."
        },
        {
          "id": "international-business-301-l02-f2",
          "front": "Impossible trinity (trilemma)",
          "back": "A country cannot simultaneously have a fixed exchange rate, free capital movement, AND independent monetary policy — it must sacrifice one of the three."
        },
        {
          "id": "international-business-301-l02-f3",
          "front": "Business risk under fixed-rate regimes",
          "back": "Low day-to-day volatility but risk of sudden, disruptive devaluation when the peg becomes unsustainable — watch for declining reserves and widening deficits."
        }
      ],
      "learningAids": [
        {
          "id": "international-business-301-l02-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "international-business-301-l03",
      "title": "Foreign Exchange Risk Management",
      "type": "interactive",
      "duration": 15,
      "objectives": [
        "Distinguish between transaction, translation, and economic exposure",
        "Explain how forward contracts and options hedge currency risk",
        "Evaluate operational hedging strategies for multinationals"
      ],
      "chunks": [
        {
          "id": "international-business-301-l03-c1",
          "title": "Types of Foreign Exchange Exposure",
          "content": "Multinational firms face three types of foreign exchange exposure. Transaction exposure arises from the time lag between entering into a contract and settling it in a foreign currency; exchange rate changes during this period can affect the cash flow value of the transaction. Translation exposure, also known as accounting exposure, is the risk that a firm's consolidated financial statements will be affected by exchange rate fluctuations when converting the results of foreign subsidiaries into the parent company's currency. Economic exposure, or operating exposure, is the long-term risk that exchange rate changes will affect a firm's future cash flows, competitive position, and overall market value. Managing these exposures is critical for financial stability and strategic success.",
          "visualPrompt": "An animated infographic showing a multinational corporation. Arrows point to different parts of its operations, labeled 'Transaction Exposure' (on an invoice), 'Translation Exposure' (on a consolidated balance sheet), and 'Economic Exposure' (on the company's stock price and market share)."
        },
        {
          "id": "international-business-301-l03-c2",
          "title": "Financial Hedging Instruments",
          "content": "Firms use financial instruments to manage foreign exchange risk, particularly transaction exposure. A forward contract locks in a specific exchange rate for a future date, eliminating uncertainty but also forgoing any potential upside from favorable currency movements. A currency option gives the holder the right, but not the obligation, to buy or sell a currency at a predetermined rate. This provides downside protection while preserving upside potential, but it comes at the cost of an upfront premium. Currency swaps involve exchanging principal and interest payments in different currencies, often used to manage long-term debt obligations and align the currency of assets and liabilities. The choice of instrument depends on the firm's risk tolerance and the certainty of its future cash flows.",
          "visualPrompt": "An animated chart comparing a floating exchange rate (a wavy line) to a hedged position. Show a straight horizontal line for a 'Forward Contract' and a line that follows the upside but has a floor for a 'Currency Option'."
        },
        {
          "id": "international-business-301-l03-c3",
          "title": "Operational Hedging Strategies",
          "content": "Beyond financial instruments, firms can use operational strategies to manage long-term economic exposure. Natural hedging involves matching revenue and cost currencies, for example, by locating production facilities in the primary markets where goods are sold. Diversifying production and sourcing across multiple countries can also reduce reliance on any single currency. Leading and lagging involves adjusting the timing of payments; a firm might pay a foreign currency invoice early (lead) if that currency is expected to appreciate, or delay it (lag) if it's expected to depreciate. Strategic use of transfer pricing and including currency clauses in contracts are other operational tools that can mitigate the impact of currency volatility on a firm's profitability and competitive standing.",
          "visualPrompt": "An infographic illustrating three operational hedging strategies: 1. 'Natural Hedging' with a factory and a store in the same country. 2. 'Diversification' with arrows pointing from a central HQ to factories in multiple countries. 3. 'Leading & Lagging' with a calendar and currency symbols."
        }
      ],
      "flashcards": [
        {
          "id": "international-business-301-l03-f1",
          "front": "Transaction exposure",
          "back": "Risk from contractual obligations in foreign currency between the time a deal is agreed and payment is received or made."
        },
        {
          "id": "international-business-301-l03-f2",
          "front": "Forward contract vs. currency option",
          "back": "Forward: locks in a future rate, eliminating risk but also upside. Option: provides downside protection while preserving upside, at the cost of a premium."
        },
        {
          "id": "international-business-301-l03-f3",
          "front": "Natural hedging",
          "back": "Matching revenue and cost currencies by producing in the same country where you sell — reduces economic exposure without financial instruments."
        }
      ],
      "learningAids": [
        {
          "id": "international-business-301-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "international-business-301-l04",
      "title": "International Trade Policy Instruments",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Explain how tariffs, quotas, and subsidies affect trade flows",
        "Analyze the arguments for and against protectionist policies",
        "Assess strategic trade policy and its real-world applications"
      ],
      "chunks": [
        {
          "id": "international-business-301-l04-c1",
          "title": "Tariffs and Their Effects",
          "content": "Tariffs are taxes levied on imported goods. They can be specific (a fixed charge per unit) or ad valorem (a percentage of the good's value). By raising the price of imported products, tariffs protect domestic producers from foreign competition. However, this comes at a cost: consumers pay higher prices, and overall economic welfare is reduced due to inefficient allocation of resources. The effective rate of protection, which considers tariffs on both finished goods and intermediate inputs, often provides a more accurate measure of a tariff's impact than the nominal rate. Governments use tariffs to generate revenue, protect infant industries, respond to perceived unfair trade practices, or for national security reasons. Understanding their economic effects is crucial for analyzing trade policy.",
          "visualPrompt": "An animated supply and demand graph. Show the initial equilibrium for an imported good. Then, animate a tariff being imposed, shifting the supply curve up, showing the new higher price, lower quantity, and highlighting the areas representing consumer loss, producer gain, and government revenue."
        },
        {
          "id": "international-business-301-l04-c2",
          "title": "Quotas, Subsidies, and Non-Tariff Barriers",
          "content": "Beyond tariffs, governments use other instruments to influence trade. Import quotas are direct restrictions on the quantity of a good that can be imported, creating scarcity and raising domestic prices. Voluntary export restraints (VERs) are similar but are imposed by the exporting country at the request of the importing country. Subsidies are government payments to domestic producers, which help them compete against foreign imports and gain export markets. Agricultural subsidies in the U.S. and EU are prominent examples and frequent sources of trade disputes. Non-tariff barriers (NTBs) are a broad category of regulations, such as technical standards, labeling requirements, and complex customs procedures, that can impede imports without being explicit taxes or quotas.",
          "visualPrompt": "An infographic comparing different trade barriers: a price tag with a '+' for tariffs, a gate with a number limit for quotas, a hand giving money for subsidies, and a maze of red tape for non-tariff barriers."
        },
        {
          "id": "international-business-301-l04-c3",
          "title": "Arguments For and Against Protection",
          "content": "The debate over protectionism involves several key arguments. Proponents argue for protecting 'infant industries' to allow them to mature and become competitive, preserving domestic production for national security, and retaliating against unfair practices like dumping (selling goods below cost). However, critics contend that protectionism leads to higher consumer prices, reduces economic efficiency by shielding uncompetitive firms, invites retaliation that can escalate into trade wars, and fosters 'rent-seeking' behavior where firms lobby for protection rather than innovating. A more nuanced approach is strategic trade policy, which suggests targeted government intervention in industries with significant externalities or economies of scale, such as aerospace or semiconductors, to help domestic firms gain a first-mover advantage in global markets.",
          "visualPrompt": "A balanced scale visual. On one side, list the arguments FOR protection (Infant Industry, National Security, Anti-Dumping). On the other side, list arguments AGAINST (Higher Prices, Inefficiency, Retaliation, Rent-Seeking)."
        }
      ],
      "flashcards": [
        {
          "id": "international-business-301-l04-f1",
          "front": "Ad valorem vs. specific tariff",
          "back": "Ad valorem: percentage of import value (e.g., 10%). Specific: fixed amount per unit (e.g., $5 per kilogram). Both raise domestic prices and protect local producers."
        },
        {
          "id": "international-business-301-l04-f2",
          "front": "Non-tariff barriers (NTBs)",
          "back": "Trade restrictions other than tariffs: technical standards, labeling rules, health regulations, customs procedures — can be used to impede imports while appearing non-discriminatory."
        },
        {
          "id": "international-business-301-l04-f3",
          "front": "Strategic trade policy",
          "back": "Targeted government intervention in industries with large externalities and economies of scale — a middle ground between free trade and broad protectionism."
        }
      ],
      "learningAids": [
        {
          "id": "international-business-301-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "international-business-301-l05",
      "title": "Checkpoint: Monetary Systems & Trade Policy",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "international-business-301-l05-q1",
          "text": "Under the Bretton Woods system, currencies were pegged to:",
          "options": [
            {
              "id": "a",
              "text": "Gold directly"
            },
            {
              "id": "b",
              "text": "The British pound"
            },
            {
              "id": "c",
              "text": "The U.S. dollar, which was convertible to gold"
            },
            {
              "id": "d",
              "text": "A basket of commodities"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Bretton Woods established the U.S. dollar as the anchor currency pegged to gold at $35/oz, with other currencies pegged to the dollar."
        },
        {
          "id": "international-business-301-l05-q2",
          "text": "The impossible trinity states that a country CANNOT simultaneously maintain:",
          "options": [
            {
              "id": "a",
              "text": "Trade surplus, low inflation, and full employment"
            },
            {
              "id": "b",
              "text": "Fixed exchange rate, free capital flows, and independent monetary policy"
            },
            {
              "id": "c",
              "text": "Low interest rates, strong currency, and high exports"
            },
            {
              "id": "d",
              "text": "Government spending, low taxes, and balanced budget"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The trilemma requires countries to sacrifice one of three: exchange rate stability, capital mobility, or monetary policy independence."
        },
        {
          "id": "international-business-301-l05-q3",
          "text": "A forward contract differs from a currency option in that a forward:",
          "options": [
            {
              "id": "a",
              "text": "Provides the right but not the obligation to exchange currency"
            },
            {
              "id": "b",
              "text": "Requires no upfront cost but eliminates both downside risk and upside potential"
            },
            {
              "id": "c",
              "text": "Can only be used for transactions under $1 million"
            },
            {
              "id": "d",
              "text": "Is only available from central banks"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Forward contracts lock in a specific rate with no premium, eliminating uncertainty in both directions. Options charge a premium but preserve upside potential."
        },
        {
          "id": "international-business-301-l05-q4",
          "text": "Which trade policy instrument sets a physical limit on import quantities?",
          "options": [
            {
              "id": "a",
              "text": "Ad valorem tariff"
            },
            {
              "id": "b",
              "text": "Subsidy"
            },
            {
              "id": "c",
              "text": "Import quota"
            },
            {
              "id": "d",
              "text": "Technical standard"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Import quotas restrict the physical quantity of goods that can enter a country, creating scarcity that raises domestic prices and protects local producers."
        }
      ]
    },
    {
      "id": "international-business-301-l06",
      "title": "WTO & Regional Trade Agreements",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Explain the core principles and dispute settlement process of the WTO",
        "Compare major regional trade agreements (EU, USMCA, RCEP)",
        "Assess how trade agreements create opportunities and challenges for firms"
      ],
      "chunks": [
        {
          "id": "international-business-301-l06-c1",
          "title": "The World Trade Organization",
          "content": "The World Trade Organization (WTO) is the primary international body governing the rules of trade between its 164 member nations. It succeeded the General Agreement on Tariffs and Trade (GATT) and is built on core principles like 'most-favored-nation' (MFN) treatment, which prevents discrimination between trading partners, and 'national treatment,' which prohibits discrimination between imported and domestically produced goods. A key function of the WTO is its quasi-judicial dispute settlement mechanism, which issues binding rulings on trade disputes. However, the WTO faces significant challenges, including the long-stalled Doha Round of trade negotiations and the paralysis of its Appellate Body since 2019, which has weakened its ability to resolve disputes effectively.",
          "visualPrompt": "An animated infographic showing the pillars of the WTO: a scale icon for 'Most-Favored-Nation', a mirror icon for 'National Treatment', and a gavel icon for 'Dispute Settlement'. Show a timeline of key events, including the stalled Doha Round and the Appellate Body crisis."
        },
        {
          "id": "international-business-301-l06-c2",
          "title": "Major Regional Trade Agreements",
          "content": "With multilateral progress stalled, regional trade agreements (RTAs) have proliferated. The European Union (EU) represents the deepest form of integration, with a single market allowing free movement of goods, services, capital, and people. The United States-Mexico-Canada Agreement (USMCA), which replaced NAFTA, features updated provisions on auto manufacturing, digital trade, and labor standards. The Regional Comprehensive Economic Partnership (RCEP), signed in 2020, unites 15 Asia-Pacific nations, including China, Japan, and South Korea, creating the world's largest trade bloc by population. These agreements liberalize trade among members but can create preferential trading blocs that discriminate against non-members.",
          "visualPrompt": "An interactive world map. Allow the user to click on the EU, USMCA, and RCEP blocs to see key statistics (GDP, population, trade volume) and a list of member countries for each."
        },
        {
          "id": "international-business-301-l06-c3",
          "title": "Strategic Implications for Business",
          "content": "Trade agreements fundamentally reshape the competitive landscape for businesses. They create opportunities by opening new markets and lowering tariff barriers, but they also introduce challenges. 'Rules of origin' are critical criteria that determine whether a product qualifies for preferential treatment, forcing firms to strategically manage their supply chains to meet these thresholds. Agreements can lead to 'trade creation,' where trade shifts to more efficient producers within the bloc, but also 'trade diversion,' where it shifts from more efficient non-members to less efficient members. Firms must also navigate harmonized regulations and intellectual property protections. Staying abreast of trade negotiations is vital, as new agreements can rapidly alter supply chain economics and market access.",
          "visualPrompt": "A flowchart illustrating how a company uses rules of origin. Show a product being assembled with components from different countries, and a checklist to see if the final product qualifies for preferential tariff treatment under a specific trade agreement."
        }
      ],
      "flashcards": [
        {
          "id": "international-business-301-l06-f1",
          "front": "Most-Favored-Nation (MFN) principle",
          "back": "WTO rule requiring that trade concessions given to one member must be extended to all members — prevents discriminatory treatment."
        },
        {
          "id": "international-business-301-l06-f2",
          "front": "RCEP",
          "back": "Regional Comprehensive Economic Partnership — 15 Asia-Pacific nations covering 30% of global GDP, signed in 2020, creating the world's largest trade bloc by population."
        },
        {
          "id": "international-business-301-l06-f3",
          "front": "Rules of origin",
          "back": "Criteria determining whether a product qualifies for preferential tariff treatment under a trade agreement — firms must structure sourcing to meet these thresholds."
        }
      ]
    },
    {
      "id": "international-business-301-l07",
      "title": "Final Assessment: Global Trade & Finance",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "international-business-301-l07-q1",
          "text": "Which hedging strategy involves producing in the same country where products are sold?",
          "options": [
            {
              "id": "a",
              "text": "Forward contract"
            },
            {
              "id": "b",
              "text": "Currency option"
            },
            {
              "id": "c",
              "text": "Natural hedging"
            },
            {
              "id": "d",
              "text": "Currency swap"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Natural hedging matches revenue and cost currencies by co-locating production and sales, reducing economic exposure without financial instruments."
        },
        {
          "id": "international-business-301-l07-q2",
          "text": "The Bretton Woods system collapsed primarily because:",
          "options": [
            {
              "id": "a",
              "text": "The World Bank refused to lend to developing nations"
            },
            {
              "id": "b",
              "text": "European nations refused to join"
            },
            {
              "id": "c",
              "text": "U.S. inflation and trade deficits made dollar-gold convertibility unsustainable"
            },
            {
              "id": "d",
              "text": "Gold reserves were discovered to be overestimated"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Persistent U.S. deficits and expansionary monetary policy eroded confidence in the dollar's gold backing, leading Nixon to suspend convertibility in 1971."
        },
        {
          "id": "international-business-301-l07-q3",
          "text": "The WTO's national treatment principle requires that:",
          "options": [
            {
              "id": "a",
              "text": "Foreign companies receive subsidies equal to domestic firms"
            },
            {
              "id": "b",
              "text": "Imported goods are treated no less favorably than domestic goods after clearing customs"
            },
            {
              "id": "c",
              "text": "All nations charge the same tariff rates"
            },
            {
              "id": "d",
              "text": "Foreign workers receive the same wages as local workers"
            }
          ],
          "correctOptionId": "b",
          "explanation": "National treatment prevents discrimination against imported goods through internal taxes, regulations, or standards once they have entered the domestic market."
        },
        {
          "id": "international-business-301-l07-q4",
          "text": "Translation exposure in foreign exchange risk management refers to:",
          "options": [
            {
              "id": "a",
              "text": "Risk on individual contractual transactions"
            },
            {
              "id": "b",
              "text": "The impact on consolidated financial statements when converting subsidiary results"
            },
            {
              "id": "c",
              "text": "Long-term competitive effects of exchange rate changes"
            },
            {
              "id": "d",
              "text": "The cost of translating business documents into foreign languages"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Translation exposure arises when a multinational converts foreign subsidiary financial statements into the parent company's reporting currency, affecting consolidated results."
        }
      ]
    }
  ]
};
