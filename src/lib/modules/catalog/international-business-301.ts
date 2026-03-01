import type { LearningModule } from "@/lib/modules/types";

export const InternationalBusiness301Module: LearningModule = {
  id: "international-business-301",
  title: "Global Trade & Finance",
  description:
    "Dive into the monetary systems and trade policies that govern global commerce. Understand exchange rate regimes, master hedging strategies for currency risk, analyze trade policy instruments, and navigate the complex landscape of the WTO and regional trade agreements.",
  subject: "Business",
  tags: ["core", "curriculum", "interactive", "mba", "international-business"],
  minAge: 18,
  maxAge: 99,
  version: "2.0.0",
  difficultyBand: "advanced",
  localeSupport: ["en", "es"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Trace the evolution of the international monetary system from Bretton Woods to today",
    "Compare fixed, floating, and managed exchange rate regimes",
    "Apply hedging instruments to manage foreign exchange risk",
    "Analyze the effects of tariffs, quotas, and subsidies on trade",
    "Explain the role of the WTO in governing international trade",
    "Evaluate major regional trade agreements and their business implications",
    "Describe trade finance instruments used in cross-border transactions"
  ],
  lessons: [
    {
      id: "international-business-301-l01",
      title: "The International Monetary System",
      type: "video",
      duration: 14,
      objectives: [
        "Describe the gold standard and its collapse",
        "Explain the Bretton Woods system and its legacy institutions",
        "Outline the current post-Bretton Woods monetary landscape"
      ],
      chunks: [
        {
          id: "international-business-301-l01-c1",
          title: "The Gold Standard Era",
          content:
            "Under the classical gold standard (1870s–1914), countries pegged their currencies to gold at fixed rates, making exchange rates stable and predictable. Trade imbalances self-corrected through gold flows — a deficit country lost gold, reducing its money supply and prices, making exports cheaper until balance restored. The system collapsed with World War I as governments printed money to finance the war, severing the gold link. Attempts to restore it in the 1920s failed amid the Great Depression."
        },
        {
          id: "international-business-301-l01-c2",
          title: "Bretton Woods and Its Legacy",
          content:
            "The 1944 Bretton Woods conference created a system where the U.S. dollar was pegged to gold at $35 per ounce and other currencies pegged to the dollar. It also established the International Monetary Fund (IMF) to provide short-term lending for balance of payments crises and the World Bank to finance post-war reconstruction. The system collapsed in 1971 when President Nixon ended dollar-gold convertibility due to U.S. inflation and trade deficits. The IMF and World Bank continue as pillars of global economic governance."
        },
        {
          id: "international-business-301-l01-c3",
          title: "The Modern Monetary Landscape",
          content:
            "Since 1973, the world has operated under a hybrid system. Major currencies (dollar, euro, yen, pound) float freely, their values determined by market forces. Some countries adopt managed floats — intervening periodically to smooth volatility. Others maintain fixed pegs (Hong Kong dollar to USD) or currency boards. The euro represents a radical experiment — 20 nations sharing a single currency, eliminating exchange rate risk within the eurozone but surrendering independent monetary policy."
        }
      ],
      flashcards: [
        { id: "international-business-301-l01-f1", front: "Bretton Woods system (1944–1971)", back: "U.S. dollar pegged to gold at $35/oz, other currencies pegged to the dollar. Created the IMF and World Bank. Collapsed when Nixon ended gold convertibility" },
        { id: "international-business-301-l01-f2", front: "Gold standard self-correcting mechanism", back: "Deficit country loses gold → money supply falls → prices drop → exports become cheaper → trade rebalances automatically" },
        { id: "international-business-301-l01-f3", front: "Managed float", back: "An exchange rate regime where the currency largely floats but the central bank intervenes periodically to reduce excessive volatility or guide the rate" }
      ]
    },
    {
      id: "international-business-301-l02",
      title: "Exchange Rate Regimes",
      type: "video",
      duration: 13,
      objectives: [
        "Compare fixed, floating, and pegged exchange rate systems",
        "Explain the impossible trinity of monetary policy",
        "Assess how regime choice affects business planning"
      ],
      chunks: [
        {
          id: "international-business-301-l02-c1",
          title: "Fixed vs. Floating Regimes",
          content:
            "A fixed exchange rate regime pegs the domestic currency to another currency or basket at a set rate, providing certainty for trade and investment but requiring large foreign reserves to defend the peg. A floating regime lets market supply and demand determine the rate, providing flexibility for monetary policy but introducing exchange rate volatility that complicates international transactions. Most economies fall somewhere on this spectrum rather than at the extremes."
        },
        {
          id: "international-business-301-l02-c2",
          title: "The Impossible Trinity",
          content:
            "The impossible trinity (or trilemma) states that a country cannot simultaneously maintain all three of: a fixed exchange rate, free capital movement, and independent monetary policy. It must sacrifice one. The U.S. chooses flexible exchange rates to keep independent monetary policy with open capital markets. China has historically restricted capital flows to maintain exchange rate control and monetary independence. The eurozone sacrifices independent monetary policy to combine fixed internal rates with free capital movement."
        },
        {
          id: "international-business-301-l02-c3",
          title: "Business Implications of Regime Choice",
          content:
            "Exchange rate regimes directly affect business strategy. Fixed rates reduce transaction costs and planning uncertainty but create the risk of sudden devaluations when pegs break (as in the 1997 Asian financial crisis). Floating rates require active currency risk management but adjust gradually, giving firms time to adapt. Businesses operating in pegged-rate countries must watch for signs of unsustainable pressure — widening trade deficits, declining reserves, and political instability — that could trigger a disruptive devaluation."
        }
      ],
      flashcards: [
        { id: "international-business-301-l02-f1", front: "Fixed exchange rate regime", back: "Currency pegged at a set rate to another currency or basket — provides certainty but requires large reserves to defend and limits monetary policy flexibility" },
        { id: "international-business-301-l02-f2", front: "Impossible trinity (trilemma)", back: "A country cannot simultaneously have a fixed exchange rate, free capital movement, AND independent monetary policy — it must sacrifice one of the three" },
        { id: "international-business-301-l02-f3", front: "Business risk under fixed-rate regimes", back: "Low day-to-day volatility but risk of sudden, disruptive devaluation when the peg becomes unsustainable — watch for declining reserves and widening deficits" }
      ]
    },
    {
      id: "international-business-301-l03",
      title: "Foreign Exchange Risk Management",
      type: "interactive",
      duration: 15,
      objectives: [
        "Distinguish between transaction, translation, and economic exposure",
        "Explain how forward contracts and options hedge currency risk",
        "Evaluate operational hedging strategies for multinationals"
      ],
      chunks: [
        {
          id: "international-business-301-l03-c1",
          title: "Types of Foreign Exchange Exposure",
          content:
            "Transaction exposure arises from contractual obligations denominated in foreign currency — an American exporter billing in euros faces risk between invoicing and payment. Translation exposure affects multinational financial statements when foreign subsidiary results are consolidated into the parent's reporting currency. Economic (operating) exposure is the broadest — it captures how exchange rate changes affect a firm's future cash flows, competitive position, and market value over the long term."
        },
        {
          id: "international-business-301-l03-c2",
          title: "Financial Hedging Instruments",
          content:
            "Forward contracts lock in a future exchange rate for a specific date and amount — eliminating uncertainty but also forgoing any favorable movements. Currency options give the right but not the obligation to exchange at a set rate, providing downside protection while preserving upside potential — but at a premium cost. Currency swaps exchange principal and interest payments in different currencies, useful for long-term debt management. Firms choose instruments based on the certainty of the underlying cash flow and their risk tolerance."
        },
        {
          id: "international-business-301-l03-c3",
          title: "Operational Hedging Strategies",
          content:
            "Beyond financial instruments, firms use operational strategies to reduce currency exposure. Natural hedging involves matching revenue and cost currencies — producing in the same country where you sell. Diversifying sourcing and production across multiple countries reduces dependence on any single exchange rate. Leading and lagging adjusts the timing of payments — accelerating payments in a strengthening foreign currency (leading) or delaying them in a weakening one (lagging). Transfer pricing and currency clauses in contracts provide additional levers."
        }
      ],
      flashcards: [
        { id: "international-business-301-l03-f1", front: "Transaction exposure", back: "Risk from contractual obligations in foreign currency between the time a deal is agreed and payment is received or made" },
        { id: "international-business-301-l03-f2", front: "Forward contract vs. currency option", back: "Forward: locks in a future rate, eliminating risk but also upside. Option: provides downside protection while preserving upside, at the cost of a premium" },
        { id: "international-business-301-l03-f3", front: "Natural hedging", back: "Matching revenue and cost currencies by producing in the same country where you sell — reduces economic exposure without financial instruments" }
      ]
    },
    {
      id: "international-business-301-l04",
      title: "International Trade Policy Instruments",
      type: "video",
      duration: 14,
      objectives: [
        "Explain how tariffs, quotas, and subsidies affect trade flows",
        "Analyze the arguments for and against protectionist policies",
        "Assess strategic trade policy and its real-world applications"
      ],
      chunks: [
        {
          id: "international-business-301-l04-c1",
          title: "Tariffs and Their Effects",
          content:
            "Tariffs are taxes imposed on imported goods. Ad valorem tariffs are a percentage of the import's value; specific tariffs are a fixed amount per unit. Tariffs raise the domestic price of imports, protecting local producers but raising costs for consumers and downstream industries. The effective rate of protection — accounting for tariffs on both finished goods and inputs — often differs significantly from the nominal rate. Governments use tariffs to generate revenue, protect infant industries, retaliate against unfair trade practices, or address national security concerns."
        },
        {
          id: "international-business-301-l04-c2",
          title: "Quotas, Subsidies, and Non-Tariff Barriers",
          content:
            "Import quotas set a physical limit on the quantity of goods that can enter a country, creating artificial scarcity that benefits domestic producers. Voluntary export restraints (VERs) achieve similar effects through exporter-side limits. Subsidies are government payments to domestic producers that lower their costs and improve competitiveness — agricultural subsidies in the U.S. and EU are perennial trade disputes. Non-tariff barriers include technical standards, labeling requirements, health regulations, and bureaucratic customs procedures that can be used to impede imports."
        },
        {
          id: "international-business-301-l04-c3",
          title: "Arguments For and Against Protection",
          content:
            "Protectionist arguments include infant industry protection (allowing new industries to mature), national security (maintaining domestic defense production), unfair competition response (countering foreign subsidies or dumping), and employment preservation. Free trade arguments counter that protection raises consumer prices, reduces efficiency, invites retaliation, and creates rent-seeking behavior where industries lobby for protection rather than improve. Strategic trade policy occupies a middle ground — targeted intervention in industries with large externalities and economies of scale, such as semiconductors or aerospace."
        }
      ],
      flashcards: [
        { id: "international-business-301-l04-f1", front: "Ad valorem vs. specific tariff", back: "Ad valorem: percentage of import value (e.g., 10%). Specific: fixed amount per unit (e.g., $5 per kilogram). Both raise domestic prices and protect local producers" },
        { id: "international-business-301-l04-f2", front: "Non-tariff barriers (NTBs)", back: "Trade restrictions other than tariffs: technical standards, labeling rules, health regulations, customs procedures — can be used to impede imports while appearing non-discriminatory" },
        { id: "international-business-301-l04-f3", front: "Strategic trade policy", back: "Targeted government intervention in industries with large externalities and economies of scale — a middle ground between free trade and broad protectionism" }
      ]
    },
    {
      id: "international-business-301-l05",
      title: "Checkpoint: Monetary Systems & Trade Policy",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "international-business-301-l05-q1",
          text: "Under the Bretton Woods system, currencies were pegged to:",
          options: [
            { id: "a", text: "Gold directly" },
            { id: "b", text: "The British pound" },
            { id: "c", text: "The U.S. dollar, which was convertible to gold" },
            { id: "d", text: "A basket of commodities" }
          ],
          correctOptionId: "c",
          explanation: "Bretton Woods established the U.S. dollar as the anchor currency pegged to gold at $35/oz, with other currencies pegged to the dollar."
        },
        {
          id: "international-business-301-l05-q2",
          text: "The impossible trinity states that a country CANNOT simultaneously maintain:",
          options: [
            { id: "a", text: "Trade surplus, low inflation, and full employment" },
            { id: "b", text: "Fixed exchange rate, free capital flows, and independent monetary policy" },
            { id: "c", text: "Low interest rates, strong currency, and high exports" },
            { id: "d", text: "Government spending, low taxes, and balanced budget" }
          ],
          correctOptionId: "b",
          explanation: "The trilemma requires countries to sacrifice one of three: exchange rate stability, capital mobility, or monetary policy independence."
        },
        {
          id: "international-business-301-l05-q3",
          text: "A forward contract differs from a currency option in that a forward:",
          options: [
            { id: "a", text: "Provides the right but not the obligation to exchange currency" },
            { id: "b", text: "Requires no upfront cost but eliminates both downside risk and upside potential" },
            { id: "c", text: "Can only be used for transactions under $1 million" },
            { id: "d", text: "Is only available from central banks" }
          ],
          correctOptionId: "b",
          explanation: "Forward contracts lock in a specific rate with no premium, eliminating uncertainty in both directions. Options charge a premium but preserve upside potential."
        },
        {
          id: "international-business-301-l05-q4",
          text: "Which trade policy instrument sets a physical limit on import quantities?",
          options: [
            { id: "a", text: "Ad valorem tariff" },
            { id: "b", text: "Subsidy" },
            { id: "c", text: "Import quota" },
            { id: "d", text: "Technical standard" }
          ],
          correctOptionId: "c",
          explanation: "Import quotas restrict the physical quantity of goods that can enter a country, creating scarcity that raises domestic prices and protects local producers."
        }
      ]
    },
    {
      id: "international-business-301-l06",
      title: "WTO & Regional Trade Agreements",
      type: "interactive",
      duration: 14,
      objectives: [
        "Explain the core principles and dispute settlement process of the WTO",
        "Compare major regional trade agreements (EU, USMCA, RCEP)",
        "Assess how trade agreements create opportunities and challenges for firms"
      ],
      chunks: [
        {
          id: "international-business-301-l06-c1",
          title: "The World Trade Organization",
          content:
            "The WTO, successor to GATT, governs international trade rules among its 164 member states. Its core principles include most-favored-nation (MFN) treatment — trade concessions given to one member must extend to all — and national treatment — imported goods must be treated no less favorably than domestic products once they clear customs. The WTO's dispute settlement body acts as the judiciary of trade, with binding rulings and authorized retaliatory measures. However, the Doha Round stalled in the 2000s, and the Appellate Body has been non-functional since 2019 due to U.S. blocking of judge appointments."
        },
        {
          id: "international-business-301-l06-c2",
          title: "Major Regional Trade Agreements",
          content:
            "Regional agreements have proliferated as multilateral progress stalls. The European Union represents the deepest integration — a single market with free movement of goods, services, capital, and people. USMCA (formerly NAFTA) links the U.S., Mexico, and Canada with rules emphasizing automotive content, digital trade, and labor standards. RCEP, signed in 2020, connects 15 Asia-Pacific nations including China, Japan, South Korea, and ASEAN members, covering 30% of global GDP. Each agreement creates a preferential zone where member-country goods face lower barriers."
        },
        {
          id: "international-business-301-l06-c3",
          title: "Strategic Implications for Business",
          content:
            "Trade agreements reshape supply chains and competitive dynamics. Rules of origin determine whether a product qualifies for preferential treatment — firms must carefully structure sourcing to meet these requirements. Agreements also harmonize standards, protect intellectual property, and open services markets. Companies can exploit agreements by locating production within member countries, but they must also prepare for trade diversion — when agreements redirect trade away from more efficient non-member suppliers. Monitoring ongoing negotiations is essential, as new agreements can rapidly shift competitive landscapes."
        }
      ],
      flashcards: [
        { id: "international-business-301-l06-f1", front: "Most-Favored-Nation (MFN) principle", back: "WTO rule requiring that trade concessions given to one member must be extended to all members — prevents discriminatory treatment" },
        { id: "international-business-301-l06-f2", front: "RCEP", back: "Regional Comprehensive Economic Partnership — 15 Asia-Pacific nations covering 30% of global GDP, signed in 2020, creating the world's largest trade bloc by population" },
        { id: "international-business-301-l06-f3", front: "Rules of origin", back: "Criteria determining whether a product qualifies for preferential tariff treatment under a trade agreement — firms must structure sourcing to meet these thresholds" }
      ]
    },
    {
      id: "international-business-301-l07",
      title: "Final Assessment: Global Trade & Finance",
      type: "quiz",
      duration: 15,
      questions: [
        {
          id: "international-business-301-l07-q1",
          text: "Which hedging strategy involves producing in the same country where products are sold?",
          options: [
            { id: "a", text: "Forward contract" },
            { id: "b", text: "Currency option" },
            { id: "c", text: "Natural hedging" },
            { id: "d", text: "Currency swap" }
          ],
          correctOptionId: "c",
          explanation: "Natural hedging matches revenue and cost currencies by co-locating production and sales, reducing economic exposure without financial instruments."
        },
        {
          id: "international-business-301-l07-q2",
          text: "The Bretton Woods system collapsed primarily because:",
          options: [
            { id: "a", text: "The World Bank refused to lend to developing nations" },
            { id: "b", text: "European nations refused to join" },
            { id: "c", text: "U.S. inflation and trade deficits made dollar-gold convertibility unsustainable" },
            { id: "d", text: "Gold reserves were discovered to be overestimated" }
          ],
          correctOptionId: "c",
          explanation: "Persistent U.S. deficits and expansionary monetary policy eroded confidence in the dollar's gold backing, leading Nixon to suspend convertibility in 1971."
        },
        {
          id: "international-business-301-l07-q3",
          text: "The WTO's national treatment principle requires that:",
          options: [
            { id: "a", text: "Foreign companies receive subsidies equal to domestic firms" },
            { id: "b", text: "Imported goods are treated no less favorably than domestic goods after clearing customs" },
            { id: "c", text: "All nations charge the same tariff rates" },
            { id: "d", text: "Foreign workers receive the same wages as local workers" }
          ],
          correctOptionId: "b",
          explanation: "National treatment prevents discrimination against imported goods through internal taxes, regulations, or standards once they have entered the domestic market."
        },
        {
          id: "international-business-301-l07-q4",
          text: "Translation exposure in foreign exchange risk management refers to:",
          options: [
            { id: "a", text: "Risk on individual contractual transactions" },
            { id: "b", text: "The impact on consolidated financial statements when converting subsidiary results" },
            { id: "c", text: "Long-term competitive effects of exchange rate changes" },
            { id: "d", text: "The cost of translating business documents into foreign languages" }
          ],
          correctOptionId: "b",
          explanation: "Translation exposure arises when a multinational converts foreign subsidiary financial statements into the parent company's reporting currency, affecting consolidated results."
        }
      ]
    }
  ],
};
