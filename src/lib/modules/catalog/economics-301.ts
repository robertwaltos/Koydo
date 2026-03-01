import type { LearningModule } from "@/lib/modules/types";

export const Economics301Module: LearningModule = {
  id: "economics-301",
  title: "International Economics & Trade",
  description:
    "Analyze how nations trade, set exchange rates, and pursue development. Master comparative advantage, trade policy, balance of payments, currency markets, and the institutions that govern the global economy.",
  subject: "Business",
  tags: ["core", "curriculum", "interactive", "mba", "economics", "international"],
  minAge: 16,
  maxAge: 99,
  version: "2.0.0",
  learningObjectives: [
    "Apply Ricardian and Heckscher-Ohlin models of comparative advantage",
    "Evaluate the effects of tariffs, quotas, and trade agreements",
    "Analyze balance of payments accounts and their implications",
    "Explain exchange rate determination under fixed and floating regimes",
    "Assess the role of the WTO, IMF, and World Bank in global trade",
    "Examine economic development strategies and the role of foreign direct investment",
    "Debate the trade-offs of globalization for developed and developing nations"
  ],
  lessons: [
    /* ──────────────────────────────────────────────
       L01  Comparative Advantage & Gains from Trade  (video)
    ────────────────────────────────────────────── */
    {
      id: "economics-301-l01",
      title: "Comparative Advantage & Gains from Trade",
      type: "video",
      duration: 13,
      objectives: [
        "Distinguish absolute advantage from comparative advantage",
        "Calculate opportunity costs to identify comparative advantage",
        "Demonstrate gains from trade using a two-country model"
      ],
      chunks: [
        {
          id: "economics-301-l01-c1",
          title: "Absolute vs. Comparative Advantage",
          content:
            "Absolute advantage means a country can produce a good using fewer resources than another. Comparative advantage means a country can produce a good at a lower opportunity cost. David Ricardo showed that even when one country is better at producing everything, both countries gain by specializing in the good where their opportunity cost is lowest and trading for the rest."
        },
        {
          id: "economics-301-l01-c2",
          title: "Ricardian Model",
          content:
            "In the Ricardian model, comparative advantage arises from differences in labor productivity. If Country A gives up 2 units of wheat to produce 1 unit of cloth, while Country B gives up only 0.5 units of wheat per cloth, Country B has the comparative advantage in cloth. Country A specializes in wheat, Country B in cloth, and both consume more than in autarky (no-trade). The terms of trade — the price at which goods are exchanged — must fall between the two countries' opportunity costs for both to benefit."
        },
        {
          id: "economics-301-l01-c3",
          title: "Heckscher-Ohlin Model",
          content:
            "The Heckscher-Ohlin (H-O) model extends trade theory by focusing on factor endowments rather than labor productivity. Countries export goods that use their abundant factor intensively: a labor-abundant country exports labor-intensive goods; a capital-abundant country exports capital-intensive goods. The Stolper-Samuelson theorem shows that trade benefits the abundant factor and hurts the scarce factor, explaining why some groups oppose free trade even when the nation gains overall."
        }
      ],
      flashcards: [
        { id: "economics-301-l01-f1", front: "Comparative advantage", back: "The ability to produce a good at a lower opportunity cost than another producer, forming the basis for mutually beneficial trade" },
        { id: "economics-301-l01-f2", front: "Absolute advantage", back: "The ability to produce a good using fewer resources; does NOT determine trade patterns — comparative advantage does" },
        { id: "economics-301-l01-f3", front: "Terms of trade", back: "The price ratio at which two countries exchange goods; must fall between their respective opportunity costs for both to gain" },
        { id: "economics-301-l01-f4", front: "Heckscher-Ohlin model", back: "Predicts countries export goods that use their abundant factor intensively — labor-rich nations export labor-intensive goods" }
      ]
    },

    /* ──────────────────────────────────────────────
       L02  Trade Policy Instruments  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "economics-301-l02",
      title: "Trade Policy Instruments",
      type: "interactive",
      duration: 14,
      objectives: [
        "Classify tariffs, quotas, subsidies, and non-tariff barriers",
        "Analyze the welfare effects of a tariff using supply-and-demand diagrams",
        "Compare arguments for and against protectionism"
      ],
      chunks: [
        {
          id: "economics-301-l02-c1",
          title: "Tariffs and Their Effects",
          content:
            "A tariff is a tax on imported goods. It raises the domestic price above the world price, benefiting domestic producers and the government (tariff revenue) but hurting consumers who pay more. The net welfare effect is negative — the deadweight losses from reduced consumption and inefficient domestic production outweigh the gains. Specific tariffs are a fixed dollar amount per unit; ad valorem tariffs are a percentage of value."
        },
        {
          id: "economics-301-l02-c2",
          title: "Quotas and Non-Tariff Barriers",
          content:
            "An import quota limits the quantity of a good entering a country. Unlike tariffs, quotas generate no government revenue — the price increase becomes quota rents captured by whoever holds the import licenses. Non-tariff barriers (NTBs) include product standards, labeling requirements, health regulations, and voluntary export restraints. NTBs are harder to measure but often more restrictive than tariffs."
        },
        {
          id: "economics-301-l02-c3",
          title: "Arguments for Protection",
          content:
            "Protectionist arguments include: the infant industry argument (new industries need temporary shelter to reach competitive scale), national security (defense-critical industries), anti-dumping (foreign firms selling below cost to destroy competitors), and saving domestic jobs. Economists generally counter that most protectionism creates more costs than benefits — consumers pay higher prices, protected firms lose incentive to innovate, and retaliation risks trade wars."
        }
      ],
      interactiveActivities: [
        {
          id: "economics-301-l02-a1",
          title: "Classify Trade Policy Instruments",
          type: "sorting_buckets" as const,
          buckets: ["Tariff", "Quota", "Non-Tariff Barrier", "Subsidy"],
          items: [
            { id: "tp1", text: "10% tax on imported steel", bucket: "Tariff" },
            { id: "tp2", text: "Limit of 500,000 cars per year from Japan", bucket: "Quota" },
            { id: "tp3", text: "Requiring safety labels in the local language", bucket: "Non-Tariff Barrier" },
            { id: "tp4", text: "Government pays domestic farmers $2/bushel", bucket: "Subsidy" },
            { id: "tp5", text: "$50 per ton on imported cement", bucket: "Tariff" },
            { id: "tp6", text: "Mandatory 30-day quarantine on imported livestock", bucket: "Non-Tariff Barrier" },
            { id: "tp7", text: "Tax credit for domestic semiconductor manufacturers", bucket: "Subsidy" },
            { id: "tp8", text: "Cap of 10,000 metric tons of sugar imports", bucket: "Quota" }
          ]
        }
      ],
      flashcards: [
        { id: "economics-301-l02-f1", front: "Tariff", back: "A tax on imports; raises domestic price, helps producers, hurts consumers, generates government revenue" },
        { id: "economics-301-l02-f2", front: "Import quota", back: "A quantitative limit on imports; raises domestic price like a tariff but generates quota rents instead of tax revenue" },
        { id: "economics-301-l02-f3", front: "Infant industry argument", back: "Justification for temporary protection of new domestic industries until they achieve economies of scale" },
        { id: "economics-301-l02-f4", front: "Dumping", back: "Selling exports below cost or below home-market price, often to drive out foreign competitors" }
      ]
    },

    /* ──────────────────────────────────────────────
       L03  Trade Policy Quiz  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "economics-301-l03",
      title: "Trade Policy Quiz",
      type: "quiz",
      duration: 10,
      objectives: [
        "Demonstrate understanding of comparative advantage and trade policy"
      ],
      questions: [
        {
          id: "economics-301-l03-q1",
          text: "Country X can produce 1 car at an opportunity cost of 5 tons of wheat. Country Y can produce 1 car at an opportunity cost of 10 tons of wheat. Which country has the comparative advantage in cars?",
          skillId: "economics-301-skill-trade",
          options: [
            { id: "a", text: "Country X (lower opportunity cost in cars)" },
            { id: "b", text: "Country Y" },
            { id: "c", text: "Both equally" },
            { id: "d", text: "Neither — they should not trade" }
          ],
          correctOptionId: "a",
          explanation: "Country X gives up only 5 tons of wheat per car vs. 10 for Y, so X has the lower opportunity cost and comparative advantage in cars."
        },
        {
          id: "economics-301-l03-q2",
          text: "A tariff on imported steel is most likely to benefit which group?",
          skillId: "economics-301-skill-trade",
          options: [
            { id: "a", text: "Consumers of steel products" },
            { id: "b", text: "Domestic steel producers" },
            { id: "c", text: "Foreign steel exporters" },
            { id: "d", text: "Downstream manufacturers equally" }
          ],
          correctOptionId: "b",
          explanation: "Tariffs raise the domestic price, allowing domestic producers to charge more and increase output. Consumers, foreign exporters, and downstream manufacturers are harmed."
        },
        {
          id: "economics-301-l03-q3",
          text: "What distinguishes a quota from a tariff?",
          skillId: "economics-301-skill-trade",
          options: [
            { id: "a", text: "A quota raises prices but a tariff does not" },
            { id: "b", text: "A quota limits quantity and generates rents; a tariff raises price and generates tax revenue" },
            { id: "c", text: "Tariffs are illegal under WTO rules; quotas are permitted" },
            { id: "d", text: "There is no practical difference" }
          ],
          correctOptionId: "b",
          explanation: "Both raise domestic prices, but tariffs generate government revenue while quotas generate rents for license holders. Quotas set a hard quantity ceiling."
        },
        {
          id: "economics-301-l03-q4",
          text: "According to the Heckscher-Ohlin model, a labor-abundant country will export:",
          skillId: "economics-301-skill-trade",
          options: [
            { id: "a", text: "Capital-intensive goods" },
            { id: "b", text: "Goods with the highest absolute advantage" },
            { id: "c", text: "Labor-intensive goods" },
            { id: "d", text: "Only primary commodities" }
          ],
          correctOptionId: "c",
          explanation: "H-O predicts countries export goods that use their abundant factor intensively — labor-abundant countries export labor-intensive goods."
        }
      ]
    },

    /* ──────────────────────────────────────────────
       L04  Balance of Payments  (video)
    ────────────────────────────────────────────── */
    {
      id: "economics-301-l04",
      title: "Balance of Payments",
      type: "video",
      duration: 12,
      objectives: [
        "Identify the current account, capital account, and financial account",
        "Explain why the balance of payments must sum to zero",
        "Interpret a country's trade deficit or surplus"
      ],
      chunks: [
        {
          id: "economics-301-l04-c1",
          title: "Current Account",
          content:
            "The current account records trade in goods and services, net income from abroad (wages, investment returns), and unilateral transfers (foreign aid, remittances). A current account deficit means the country imports more value than it exports. The U.S. has run persistent current account deficits, meaning Americans buy more from the world than they sell — financed by capital inflows."
        },
        {
          id: "economics-301-l04-c2",
          title: "Capital and Financial Accounts",
          content:
            "The capital account tracks transfers of non-financial assets (patents, debt forgiveness). The financial account tracks investment flows: foreign direct investment (FDI), portfolio investment (stocks, bonds), and reserve assets. A current account deficit must be matched by a financial account surplus — if a country imports more than it exports, it must attract foreign capital (borrowing or selling assets) to finance the gap."
        },
        {
          id: "economics-301-l04-c3",
          title: "Twin Deficits and Sustainability",
          content:
            "The 'twin deficits' hypothesis suggests government budget deficits lead to current account deficits: government borrowing raises interest rates, attracting foreign capital, which appreciates the currency and makes exports expensive. Whether current account deficits are sustainable depends on what the capital inflows finance — productive investment (factories, technology) is healthier than consumption. Persistently large deficits can lead to a sudden stop if foreign investors lose confidence."
        }
      ],
      flashcards: [
        { id: "economics-301-l04-f1", front: "Current account", back: "BOP component tracking trade in goods/services, net income from abroad, and unilateral transfers" },
        { id: "economics-301-l04-f2", front: "Financial account", back: "BOP component tracking investment flows: FDI, portfolio investment, and reserve assets" },
        { id: "economics-301-l04-f3", front: "Trade deficit", back: "When a country's imports of goods and services exceed its exports; must be financed by net capital inflows" },
        { id: "economics-301-l04-f4", front: "Twin deficits hypothesis", back: "Theory that government budget deficits cause current account deficits through higher interest rates and currency appreciation" }
      ]
    },

    /* ──────────────────────────────────────────────
       L05  Exchange Rates  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "economics-301-l05",
      title: "Exchange Rates & Currency Markets",
      type: "interactive",
      duration: 14,
      objectives: [
        "Distinguish fixed, floating, and managed exchange rate regimes",
        "Explain how supply and demand determine floating exchange rates",
        "Analyze the effects of currency appreciation and depreciation on trade"
      ],
      chunks: [
        {
          id: "economics-301-l05-c1",
          title: "Exchange Rate Regimes",
          content:
            "Under a floating (flexible) exchange rate, market supply and demand determine the currency's value. Under a fixed (pegged) rate, the central bank maintains a set price by buying or selling foreign reserves. Managed float regimes intervene occasionally to smooth volatility. The 'impossible trinity' (or trilemma) says a country can have only two of three: independent monetary policy, free capital flows, and a fixed exchange rate."
        },
        {
          id: "economics-301-l05-c2",
          title: "Determinants of Exchange Rates",
          content:
            "Key drivers of floating exchange rates include: relative interest rates (higher rates attract foreign capital, appreciating the currency), relative inflation (higher inflation weakens the currency — purchasing power parity), trade balances (countries with surpluses see currency demand rise), and investor expectations. In the long run, purchasing power parity (PPP) suggests exchange rates adjust so identical goods cost the same across countries."
        },
        {
          id: "economics-301-l05-c3",
          title: "Impact on Trade",
          content:
            "When a currency depreciates (weakens), exports become cheaper to foreign buyers and imports become more expensive for domestic consumers — improving the trade balance (with a lag known as the J-curve). Appreciation has the opposite effect. Firms doing international business face exchange rate risk — an unexpected move can turn a profitable deal into a loss. Hedging with forward contracts, options, or natural hedges (matching revenue and cost currencies) can mitigate this risk."
        }
      ],
      interactiveActivities: [
        {
          id: "economics-301-l05-a1",
          title: "Match Exchange Rate Concepts",
          type: "matching_pairs" as const,
          pairs: [
            { id: "er1", left: "Purchasing power parity", right: "Exchange rates adjust so identical goods cost the same across countries" },
            { id: "er2", left: "Impossible trinity", right: "Cannot simultaneously have fixed exchange rate, free capital flows, and independent monetary policy" },
            { id: "er3", left: "J-curve effect", right: "Trade balance initially worsens after depreciation before improving" },
            { id: "er4", left: "Currency appreciation", right: "Exports become more expensive; imports become cheaper" },
            { id: "er5", left: "Managed float", right: "Central bank intervenes occasionally to smooth exchange rate volatility" },
            { id: "er6", left: "Forward contract", right: "Agreement to exchange currencies at a predetermined rate on a future date" }
          ]
        }
      ],
      flashcards: [
        { id: "economics-301-l05-f1", front: "Floating exchange rate", back: "Currency value determined by market supply and demand without central bank intervention" },
        { id: "economics-301-l05-f2", front: "Impossible trinity (trilemma)", back: "A country can maintain only two of three: fixed exchange rate, free capital flows, independent monetary policy" },
        { id: "economics-301-l05-f3", front: "J-curve effect", back: "After depreciation, the trade balance initially worsens (existing contracts at old prices) before improving as volumes adjust" },
        { id: "economics-301-l05-f4", front: "Purchasing power parity (PPP)", back: "Theory that exchange rates adjust in the long run so identical goods cost the same across countries" }
      ]
    },

    /* ──────────────────────────────────────────────
       L06  Exchange Rates Quiz  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "economics-301-l06",
      title: "Exchange Rates & BOP Quiz",
      type: "quiz",
      duration: 10,
      objectives: [
        "Demonstrate understanding of balance of payments and exchange rates"
      ],
      questions: [
        {
          id: "economics-301-l06-q1",
          text: "If the U.S. runs a current account deficit of $500 billion, what must be true about its financial account?",
          skillId: "economics-301-skill-bop",
          options: [
            { id: "a", text: "It must show a surplus of approximately $500 billion" },
            { id: "b", text: "It must also show a deficit" },
            { id: "c", text: "It is unaffected by the current account" },
            { id: "d", text: "The financial account only records FDI" }
          ],
          correctOptionId: "a",
          explanation: "The BOP must balance. A current account deficit is financed by a corresponding surplus in the financial account (net capital inflows)."
        },
        {
          id: "economics-301-l06-q2",
          text: "According to the impossible trinity, a country with a fixed exchange rate and free capital flows must give up:",
          skillId: "economics-301-skill-bop",
          options: [
            { id: "a", text: "International trade" },
            { id: "b", text: "A central bank" },
            { id: "c", text: "Independent monetary policy" },
            { id: "d", text: "Government spending" }
          ],
          correctOptionId: "c",
          explanation: "The trilemma states you can only have two of three: fixed rates, free capital flows, and independent monetary policy. Fixing the rate with open capital flows means the central bank must follow the anchor currency's policy."
        },
        {
          id: "economics-301-l06-q3",
          text: "If the euro depreciates against the dollar, what happens to European exports to the U.S.?",
          skillId: "economics-301-skill-bop",
          options: [
            { id: "a", text: "European exports become more expensive for Americans" },
            { id: "b", text: "European exports become cheaper for Americans" },
            { id: "c", text: "No effect on trade" },
            { id: "d", text: "Only services are affected, not goods" }
          ],
          correctOptionId: "b",
          explanation: "A weaker euro means each dollar buys more euros, making European goods cheaper in dollar terms. This boosts European exports."
        },
        {
          id: "economics-301-l06-q4",
          text: "The J-curve effect describes:",
          skillId: "economics-301-skill-bop",
          options: [
            { id: "a", text: "Trade balance permanently improving after depreciation" },
            { id: "b", text: "Inflation rising then falling after a tariff" },
            { id: "c", text: "Trade balance initially worsening after depreciation before improving" },
            { id: "d", text: "GDP growth accelerating in a J-shaped pattern" }
          ],
          correctOptionId: "c",
          explanation: "The J-curve: after depreciation, existing contracts are still at old prices so the import bill rises initially. Over time, export volumes increase and import volumes decrease, improving the balance."
        }
      ]
    },

    /* ──────────────────────────────────────────────
       L07  International Trade Agreements  (video)
    ────────────────────────────────────────────── */
    {
      id: "economics-301-l07",
      title: "Trade Agreements & Organizations",
      type: "video",
      duration: 12,
      objectives: [
        "Compare bilateral, regional, and multilateral trade agreements",
        "Explain the functions of the WTO, IMF, and World Bank",
        "Assess the impact of trade blocs like the EU, USMCA, and ASEAN"
      ],
      chunks: [
        {
          id: "economics-301-l07-c1",
          title: "The WTO and Multilateral Trade",
          content:
            "The World Trade Organization (WTO) oversees global trade rules among 160+ member nations. Its core principles include most-favored-nation (MFN) treatment — tariff reductions offered to one member must be extended to all — and national treatment (imported goods treated the same as domestic goods after entry). The WTO provides a dispute settlement mechanism where panels adjudicate trade conflicts. Challenges include slow Doha Round negotiations and rising unilateral trade actions."
        },
        {
          id: "economics-301-l07-c2",
          title: "Regional Trade Agreements",
          content:
            "Regional agreements reduce barriers among subsets of countries. A free trade area (e.g., USMCA/formerly NAFTA) eliminates tariffs among members but each keeps its own external tariffs. A customs union (e.g., EU customs union) also harmonizes external tariffs. A common market adds free movement of labor and capital. An economic union (e.g., the Eurozone) adds a shared currency and coordinated fiscal policy. Trade creation (new trade among members) benefits welfare; trade diversion (shifting from efficient outsiders to less-efficient members) harms it."
        },
        {
          id: "economics-301-l07-c3",
          title: "IMF and World Bank",
          content:
            "The International Monetary Fund (IMF) promotes exchange rate stability and provides short-term loans to countries with balance-of-payments crises, often with conditionality (fiscal austerity, structural reforms). The World Bank provides long-term development financing for infrastructure, education, and healthcare in developing nations. Critics argue IMF conditionality imposes harsh austerity and that World Bank projects sometimes fail to reach the poorest. Both institutions have reformed governance to give emerging economies more voice."
        }
      ],
      flashcards: [
        { id: "economics-301-l07-f1", front: "Most-favored-nation (MFN)", back: "WTO principle: tariff concessions given to one member must be extended to all members" },
        { id: "economics-301-l07-f2", front: "Trade creation", back: "Welfare-improving new trade between members of a trade bloc that replaces costlier domestic production" },
        { id: "economics-301-l07-f3", front: "Trade diversion", back: "Welfare-reducing shift of imports from an efficient non-member to a less-efficient bloc member due to preferential tariffs" },
        { id: "economics-301-l07-f4", front: "IMF conditionality", back: "Policy requirements (fiscal austerity, structural reform) attached to IMF loans for countries in balance-of-payments crisis" }
      ]
    },

    /* ──────────────────────────────────────────────
       L08  Economic Development  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "economics-301-l08",
      title: "Economic Development Strategies",
      type: "interactive",
      duration: 14,
      objectives: [
        "Compare import substitution and export-led growth strategies",
        "Analyze the role of FDI, aid, and institutions in development",
        "Evaluate development indicators beyond GDP per capita"
      ],
      chunks: [
        {
          id: "economics-301-l08-c1",
          title: "Development Strategies",
          content:
            "Import substitution industrialization (ISI) protects infant industries with tariffs so domestic firms develop. It was popular in Latin America in the 1950s-70s but often led to inefficient monopolies and debt. Export-led growth (ELG) focuses on producing competitive goods for global markets, as in the Asian Tigers (South Korea, Taiwan, Singapore, Hong Kong). ELG benefits from technology transfer, economies of scale, and disciplined competition, though it requires strong institutions and human capital investment."
        },
        {
          id: "economics-301-l08-c2",
          title: "FDI and Foreign Aid",
          content:
            "Foreign direct investment (FDI) occurs when a firm invests in physical operations abroad (factories, offices). FDI brings capital, technology, management know-how, and market access. However, profits may be repatriated, and host countries risk dependency. Foreign aid (official development assistance) can build infrastructure and health systems but faces challenges: corruption, aid dependency, misaligned donor priorities, and the 'Dutch disease' where aid inflows appreciate the currency and hurt exports."
        },
        {
          id: "economics-301-l08-c3",
          title: "Measuring Development",
          content:
            "GDP per capita captures average income but misses distribution, health, and education. The Human Development Index (HDI) combines life expectancy, education (mean and expected years of schooling), and GNI per capita. Other indicators include the Gini coefficient (income inequality), the Multidimensional Poverty Index (MPI), and the Sustainable Development Goals (SDGs). Institutions — rule of law, property rights, transparent governance — are increasingly seen as the deepest determinant of long-run development."
        }
      ],
      interactiveActivities: [
        {
          id: "economics-301-l08-a1",
          title: "Match Development Concepts",
          type: "matching_pairs" as const,
          pairs: [
            { id: "dc1", left: "Import substitution", right: "Protect infant industries to build domestic manufacturing behind tariff walls" },
            { id: "dc2", left: "Export-led growth", right: "Focus on producing competitive goods for global markets (Asian Tigers model)" },
            { id: "dc3", left: "Human Development Index", right: "Combines life expectancy, education, and income to measure well-being" },
            { id: "dc4", left: "Dutch disease", right: "Resource windfalls or aid inflows appreciate currency, harming export competitiveness" },
            { id: "dc5", left: "Gini coefficient", right: "Measures income inequality on a scale from 0 (perfect equality) to 1 (maximum inequality)" },
            { id: "dc6", left: "Foreign direct investment", right: "Firm invests in physical operations abroad, bringing capital, technology, and jobs" }
          ]
        }
      ],
      flashcards: [
        { id: "economics-301-l08-f1", front: "Import substitution industrialization (ISI)", back: "Development strategy using tariffs to protect infant industries and replace imports with domestic production" },
        { id: "economics-301-l08-f2", front: "Export-led growth (ELG)", back: "Strategy emphasizing production of competitive goods for world markets; used by Asian Tiger economies" },
        { id: "economics-301-l08-f3", front: "Human Development Index (HDI)", back: "Composite measure of life expectancy, education, and GNI per capita; broader than GDP per capita alone" },
        { id: "economics-301-l08-f4", front: "Dutch disease", back: "When large resource revenues or aid inflows cause currency appreciation that undermines export competitiveness" }
      ]
    },

    /* ──────────────────────────────────────────────
       L09  Development & Globalization Quiz  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "economics-301-l09",
      title: "Development & Globalization Quiz",
      type: "quiz",
      duration: 10,
      objectives: [
        "Demonstrate understanding of trade institutions and development economics"
      ],
      questions: [
        {
          id: "economics-301-l09-q1",
          text: "Which development strategy focuses on producing goods for international markets to drive industrialization?",
          skillId: "economics-301-skill-dev",
          options: [
            { id: "a", text: "Import substitution industrialization" },
            { id: "b", text: "Export-led growth" },
            { id: "c", text: "Aid dependency" },
            { id: "d", text: "Autarky" }
          ],
          correctOptionId: "b",
          explanation: "Export-led growth emphasizes competitive production for world markets, as seen in the Asian Tiger economies."
        },
        {
          id: "economics-301-l09-q2",
          text: "The WTO's most-favored-nation principle requires that:",
          skillId: "economics-301-skill-dev",
          options: [
            { id: "a", text: "Each country must have zero tariffs" },
            { id: "b", text: "Trade concessions to one member are extended to all members" },
            { id: "c", text: "Developing countries get preferential tariff rates" },
            { id: "d", text: "Countries must join regional trade agreements" }
          ],
          correctOptionId: "b",
          explanation: "MFN means any tariff reduction or trade advantage given to one WTO member must be offered to all members (with some exceptions for FTAs and developing nations)."
        },
        {
          id: "economics-301-l09-q3",
          text: "Trade diversion from a regional trade agreement occurs when:",
          skillId: "economics-301-skill-dev",
          options: [
            { id: "a", text: "Imports shift from a more efficient non-member to a less efficient member" },
            { id: "b", text: "All members increase productivity" },
            { id: "c", text: "New trade is created that didn't exist before" },
            { id: "d", text: "The agreement reduces all tariffs to zero" }
          ],
          correctOptionId: "a",
          explanation: "Trade diversion reduces welfare because the bloc's preferential tariffs make it cheaper to import from a less-efficient member rather than a more-efficient non-member."
        },
        {
          id: "economics-301-l09-q4",
          text: "What does the HDI measure that GDP per capita alone does not?",
          skillId: "economics-301-skill-dev",
          options: [
            { id: "a", text: "Stock market performance" },
            { id: "b", text: "Military spending" },
            { id: "c", text: "Life expectancy and education alongside income" },
            { id: "d", text: "Government debt levels" }
          ],
          correctOptionId: "c",
          explanation: "HDI captures three dimensions of human well-being: health (life expectancy), knowledge (years of schooling), and income (GNI per capita)."
        }
      ]
    },

    /* ──────────────────────────────────────────────
       L10  Mastery Quiz  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "economics-301-l10",
      title: "International Economics Mastery Quiz",
      type: "quiz",
      duration: 15,
      objectives: [
        "Synthesize knowledge across all topics in international economics"
      ],
      questions: [
        {
          id: "economics-301-l10-q1",
          text: "According to the Ricardian model, what drives comparative advantage?",
          skillId: "economics-301-skill-trade",
          options: [
            { id: "a", text: "Differences in labor productivity across countries" },
            { id: "b", text: "Differences in factor endowments" },
            { id: "c", text: "Government subsidies" },
            { id: "d", text: "Exchange rate manipulation" }
          ],
          correctOptionId: "a",
          explanation: "Ricardo's model is based on relative labor productivity differences. The H-O model focuses on factor endowments."
        },
        {
          id: "economics-301-l10-q2",
          text: "If a country imposes a tariff, the deadweight loss comes from:",
          skillId: "economics-301-skill-trade",
          options: [
            { id: "a", text: "Government revenue collection" },
            { id: "b", text: "Reduced consumption and inefficient domestic production" },
            { id: "c", text: "Increased exports" },
            { id: "d", text: "Lower wages for workers" }
          ],
          correctOptionId: "b",
          explanation: "Tariffs create two deadweight loss triangles: one from consumers buying less, another from inefficient domestic firms producing where they shouldn't."
        },
        {
          id: "economics-301-l10-q3",
          text: "A customs union differs from a free trade area because a customs union also:",
          skillId: "economics-301-skill-dev",
          options: [
            { id: "a", text: "Allows free movement of labor" },
            { id: "b", text: "Harmonizes members' external tariffs" },
            { id: "c", text: "Creates a shared currency" },
            { id: "d", text: "Bans all government subsidies" }
          ],
          correctOptionId: "b",
          explanation: "A free trade area removes tariffs among members but each sets its own external tariffs. A customs union adds a common external tariff."
        },
        {
          id: "economics-301-l10-q4",
          text: "Which BOP account records foreign direct investment flows?",
          skillId: "economics-301-skill-bop",
          options: [
            { id: "a", text: "Current account" },
            { id: "b", text: "Capital account" },
            { id: "c", text: "Financial account" },
            { id: "d", text: "Official reserve account only" }
          ],
          correctOptionId: "c",
          explanation: "FDI is recorded in the financial account, along with portfolio investment and changes in reserve assets."
        },
        {
          id: "economics-301-l10-q5",
          text: "The Stolper-Samuelson theorem predicts that free trade will:",
          skillId: "economics-301-skill-trade",
          options: [
            { id: "a", text: "Benefit all factors of production equally" },
            { id: "b", text: "Benefit the abundant factor and hurt the scarce factor" },
            { id: "c", text: "Only affect the agricultural sector" },
            { id: "d", text: "Have no effect on income distribution" }
          ],
          correctOptionId: "b",
          explanation: "Stolper-Samuelson: trade raises the real return to the abundant factor and lowers the return to the scarce factor, explaining why some groups lobby for protection."
        }
      ]
    },

    /* ──────────────────────────────────────────────
       L11  Applied Challenge: Trade Negotiation  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "economics-301-l11",
      title: "Applied Challenge: Trade Negotiation Scenario",
      type: "interactive",
      duration: 18,
      objectives: [
        "Apply trade theory to a realistic negotiation scenario",
        "Evaluate competing stakeholder interests in trade policy"
      ],
      chunks: [
        {
          id: "economics-301-l11-c1",
          title: "Scenario: Steel Tariff Debate",
          content:
            "Country Alphaland is considering a 25% tariff on imported steel. Domestic steel producers (15,000 jobs) support it. Auto manufacturers (200,000 jobs) oppose it because steel is a key input. The neighboring country Betaland exports most of the steel and threatens retaliation on Alphaland's agricultural exports. The WTO has ruled similar tariffs violated MFN principles. The government must balance producer protection, downstream costs, trade relations, and WTO compliance."
        },
        {
          id: "economics-301-l11-c2",
          title: "Stakeholder Analysis Framework",
          content:
            "Effective trade policy analysis considers: (1) Direct impact — who gains and loses from the tariff? (2) Magnitude — how large are the gains vs. losses? (3) Concentration — losses may be diffuse (small per consumer) while gains are concentrated (large per producer), creating political pressure asymmetries. (4) Retaliation risk — what are the downstream consequences? (5) Long-term effects — does protection improve competitiveness or create dependency? (6) Alternative policies — could subsidies, worker retraining, or safeguard measures achieve goals with less distortion?"
        }
      ],
      interactiveActivities: [
        {
          id: "economics-301-l11-a1",
          title: "Classify Stakeholder Positions on Steel Tariff",
          type: "sorting_buckets" as const,
          buckets: ["Supports Tariff", "Opposes Tariff"],
          items: [
            { id: "st1", text: "Domestic steel manufacturers seeking higher prices", bucket: "Supports Tariff" },
            { id: "st2", text: "Automakers facing higher input costs", bucket: "Opposes Tariff" },
            { id: "st3", text: "Steel workers' union fearing plant closures", bucket: "Supports Tariff" },
            { id: "st4", text: "Agricultural exporters worried about retaliation", bucket: "Opposes Tariff" },
            { id: "st5", text: "Construction companies facing higher material costs", bucket: "Opposes Tariff" },
            { id: "st6", text: "National security advisors citing defense readiness", bucket: "Supports Tariff" },
            { id: "st7", text: "Consumer advocacy groups concerned about price increases", bucket: "Opposes Tariff" },
            { id: "st8", text: "Small domestic steel foundries unable to compete on price", bucket: "Supports Tariff" }
          ]
        }
      ],
      flashcards: [
        { id: "economics-301-l11-f1", front: "Concentrated benefits, diffuse costs", back: "Trade protection gives large gains to few producers but small costs per consumer — creating asymmetric political lobbying" },
        { id: "economics-301-l11-f2", front: "Retaliation risk", back: "When one country raises tariffs, trading partners may impose counter-tariffs, escalating into a trade war that harms both economies" }
      ]
    },

    /* ──────────────────────────────────────────────
       L12  Mastery Retest  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "economics-301-l12",
      title: "International Economics Mastery Retest",
      type: "quiz",
      duration: 15,
      objectives: [
        "Demonstrate mastery of international economics concepts on second attempt"
      ],
      questions: [
        {
          id: "economics-301-l12-q1",
          text: "Country M has abundant capital and Country N has abundant labor. According to H-O, Country M will export:",
          skillId: "economics-301-skill-trade",
          options: [
            { id: "a", text: "Labor-intensive goods" },
            { id: "b", text: "Capital-intensive goods" },
            { id: "c", text: "Only services" },
            { id: "d", text: "Raw materials" }
          ],
          correctOptionId: "b",
          explanation: "H-O: countries export goods using their abundant factor intensively. Capital-abundant M exports capital-intensive goods."
        },
        {
          id: "economics-301-l12-q2",
          text: "An import quota differs from a voluntary export restraint (VER) because:",
          skillId: "economics-301-skill-trade",
          options: [
            { id: "a", text: "Quotas are imposed by the importing country; VERs are imposed by the exporter" },
            { id: "b", text: "VERs generate more government revenue than quotas" },
            { id: "c", text: "Quotas lower prices but VERs raise them" },
            { id: "d", text: "There is no meaningful difference" }
          ],
          correctOptionId: "a",
          explanation: "With a quota, the importing country limits entry; with a VER, the exporting country 'voluntarily' restricts its own exports (usually under political pressure). Quota rents go to importers; VER rents go to foreign exporters."
        },
        {
          id: "economics-301-l12-q3",
          text: "A country running a large current account deficit is necessarily:",
          skillId: "economics-301-skill-bop",
          options: [
            { id: "a", text: "Bankrupt" },
            { id: "b", text: "Receiving net capital inflows from abroad" },
            { id: "c", text: "Experiencing high inflation" },
            { id: "d", text: "Running a government budget surplus" }
          ],
          correctOptionId: "b",
          explanation: "By BOP identity, a current account deficit must be matched by a financial account surplus — meaning net capital inflows finance the gap."
        },
        {
          id: "economics-301-l12-q4",
          text: "Which is a potential downside of import substitution industrialization?",
          skillId: "economics-301-skill-dev",
          options: [
            { id: "a", text: "Too much foreign competition" },
            { id: "b", text: "Creation of inefficient monopolies sheltered from competition" },
            { id: "c", text: "Currency depreciation from excessive exports" },
            { id: "d", text: "Reduced government revenue" }
          ],
          correctOptionId: "b",
          explanation: "ISI's tariff walls often shield domestic firms from competitive pressure, leading to inefficiency, rent-seeking, and lack of innovation."
        },
        {
          id: "economics-301-l12-q5",
          text: "Purchasing power parity theory predicts that in the long run:",
          skillId: "economics-301-skill-bop",
          options: [
            { id: "a", text: "All countries will have the same GDP" },
            { id: "b", text: "Exchange rates adjust so identical goods cost the same across countries" },
            { id: "c", text: "Interest rates converge globally" },
            { id: "d", text: "Trade deficits disappear" }
          ],
          correctOptionId: "b",
          explanation: "PPP suggests exchange rates move toward levels where a basket of goods costs the same in each country, adjusting for relative price levels."
        }
      ]
    },

    /* ──────────────────────────────────────────────
       L13  Real-World Application  (video)
    ────────────────────────────────────────────── */
    {
      id: "economics-301-l13",
      title: "Real-World Application: Globalization Case Studies",
      type: "video",
      duration: 14,
      objectives: [
        "Analyze real-world trade disputes and their outcomes",
        "Evaluate globalization's effects on developed and developing nations"
      ],
      chunks: [
        {
          id: "economics-301-l13-c1",
          title: "The China Shock",
          content:
            "China's entry into the WTO in 2001 led to a massive increase in manufacturing imports to the U.S. and other developed countries. Research by Autor, Dorn, and Hanson found that U.S. regions most exposed to Chinese import competition experienced significant job losses, lower wages, and slower recovery than expected. This 'China shock' challenged the assumption that gains from trade are automatically distributed — many displaced workers never transitioned to growing sectors. It fueled political backlash against globalization."
        },
        {
          id: "economics-301-l13-c2",
          title: "Asian Tiger Success",
          content:
            "South Korea, Taiwan, Singapore, and Hong Kong transformed from low-income economies to high-income in a single generation through export-led growth. Key ingredients: massive investment in education and human capital, strategic industrial policy (government directing credit to priority sectors), openness to foreign technology while protecting infant industries selectively, high savings rates, and stable institutions. The model wasn't pure free trade — it was managed trade with a long-run outward orientation."
        },
        {
          id: "economics-301-l13-c3",
          title: "Brexit and Regional Integration",
          content:
            "The UK's 2016 vote to leave the EU reversed decades of integration. Economic impacts include: new customs barriers and border checks increasing trade costs, reduced FDI as firms no longer use the UK as an EU gateway, labor shortages in sectors dependent on EU workers, and uncertainty depressing investment. Meanwhile, the UK gained flexibility in trade policy (signing its own deals) and regulatory independence. Brexit illustrates that trade integration creates winners and losers, and that reversal is costly and complex."
        }
      ],
      flashcards: [
        { id: "economics-301-l13-f1", front: "China shock", back: "Rapid surge in Chinese manufacturing imports after WTO entry (2001) that caused significant job losses in exposed U.S. regions" },
        { id: "economics-301-l13-f2", front: "Asian Tigers", back: "South Korea, Taiwan, Singapore, Hong Kong — achieved rapid industrialization through export-led growth and strategic industrial policy" }
      ]
    },

    /* ──────────────────────────────────────────────
       L14  Coaching Clinic  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "economics-301-l14",
      title: "Coaching Clinic: Common International Economics Mistakes",
      type: "interactive",
      duration: 12,
      objectives: [
        "Identify and correct common misconceptions in international economics"
      ],
      chunks: [
        {
          id: "economics-301-l14-c1",
          title: "Misconceptions in Trade Theory",
          content:
            "Common mistakes: (1) Confusing absolute and comparative advantage — a country can have absolute advantage in everything but still gains from trade via comparative advantage. (2) Thinking trade deficits are always bad — they may reflect strong investment attractiveness. (3) Believing tariffs 'save' money — they shift costs to consumers and downstream firms. (4) Assuming PPP holds in the short run — it's a long-run tendency with large deviations. (5) Equating currency depreciation with economic weakness — it can be a deliberate policy to boost exports."
        }
      ],
      interactiveActivities: [
        {
          id: "economics-301-l14-a1",
          title: "Match Misconceptions to Corrections",
          type: "matching_pairs" as const,
          pairs: [
            { id: "mc1", left: "Trade deficits mean a country is losing", right: "Deficits may signal strong investment demand; they're financed by capital inflows" },
            { id: "mc2", left: "Tariffs help the overall economy", right: "Tariffs help protected producers but impose net welfare losses on the economy as a whole" },
            { id: "mc3", left: "A country with no absolute advantage can't trade", right: "Comparative advantage, not absolute advantage, determines beneficial trade patterns" },
            { id: "mc4", left: "PPP sets exchange rates daily", right: "PPP is a long-run tendency; short-run rates are driven by interest rates, capital flows, and speculation" },
            { id: "mc5", left: "Currency depreciation is always bad", right: "Depreciation can boost export competitiveness and is sometimes deliberately engineered" }
          ]
        }
      ],
      flashcards: [
        { id: "economics-301-l14-f1", front: "Why aren't trade deficits always bad?", back: "They may reflect attractive investment climate; strong economies often run deficits because foreign capital flows in to invest" },
        { id: "economics-301-l14-f2", front: "Why doesn't PPP hold in the short run?", back: "Capital flows, speculation, interest rate differentials, and transaction costs cause large short-run deviations from PPP" }
      ]
    },

    /* ──────────────────────────────────────────────
       L15  Mastery Sprint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "economics-301-l15",
      title: "International Economics Mastery Sprint",
      type: "quiz",
      duration: 12,
      objectives: [
        "Achieve final mastery of international economics concepts"
      ],
      questions: [
        {
          id: "economics-301-l15-q1",
          text: "If Country A's opportunity cost of wine is 2 cloth and Country B's opportunity cost of wine is 4 cloth, who should produce wine?",
          skillId: "economics-301-skill-trade",
          options: [
            { id: "a", text: "Country A (lower opportunity cost in wine)" },
            { id: "b", text: "Country B" },
            { id: "c", text: "Both should produce wine equally" },
            { id: "d", text: "Neither should produce wine" }
          ],
          correctOptionId: "a",
          explanation: "Country A gives up only 2 cloth per wine vs. 4 for B. A has comparative advantage in wine and should specialize there."
        },
        {
          id: "economics-301-l15-q2",
          text: "Which institution provides short-term loans to countries with balance-of-payments crises?",
          skillId: "economics-301-skill-dev",
          options: [
            { id: "a", text: "World Bank" },
            { id: "b", text: "WTO" },
            { id: "c", text: "IMF" },
            { id: "d", text: "ASEAN" }
          ],
          correctOptionId: "c",
          explanation: "The IMF provides short-term emergency financing for BOP crises; the World Bank focuses on long-term development lending."
        },
        {
          id: "economics-301-l15-q3",
          text: "What kind of trade agreement removes internal tariffs AND harmonizes external tariffs?",
          skillId: "economics-301-skill-dev",
          options: [
            { id: "a", text: "Free trade area" },
            { id: "b", text: "Customs union" },
            { id: "c", text: "Economic union" },
            { id: "d", text: "Bilateral investment treaty" }
          ],
          correctOptionId: "b",
          explanation: "A customs union eliminates tariffs among members (like an FTA) AND adopts a common external tariff schedule."
        },
        {
          id: "economics-301-l15-q4",
          text: "The 'China shock' research found that:",
          skillId: "economics-301-skill-dev",
          options: [
            { id: "a", text: "All U.S. workers benefited from cheaper imports" },
            { id: "b", text: "China's exports had no measurable impact on U.S. employment" },
            { id: "c", text: "U.S. regions exposed to Chinese imports experienced persistent job losses" },
            { id: "d", text: "Only agricultural workers were affected" }
          ],
          correctOptionId: "c",
          explanation: "Autor, Dorn, and Hanson showed significant, persistent labor market disruptions in U.S. regions competing with Chinese imports."
        },
        {
          id: "economics-301-l15-q5",
          text: "A managed float exchange rate regime means:",
          skillId: "economics-301-skill-bop",
          options: [
            { id: "a", text: "The rate is permanently fixed to the dollar" },
            { id: "b", text: "Market forces set the rate but the central bank intervenes occasionally" },
            { id: "c", text: "Only the government can buy and sell currency" },
            { id: "d", text: "The currency is not convertible" }
          ],
          correctOptionId: "b",
          explanation: "A managed float (dirty float) allows market determination with occasional central bank intervention to reduce excessive volatility."
        }
      ]
    }
  ]
};
