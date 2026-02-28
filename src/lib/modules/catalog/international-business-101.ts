import type { LearningModule } from "@/lib/modules/types";

export const InternationalBusiness101Module: LearningModule = {
  id: "international-business-101",
  title: "Foundations of International Business",
  description:
    "Explore the forces driving global commerce and learn the essential frameworks for understanding cross-border business. From trade theories and currency markets to cultural dimensions and political environments, this module builds the knowledge base every international manager needs.",
  subject: "Business",
  tags: ["core", "curriculum", "interactive", "mba", "international-business"],
  minAge: 18,
  maxAge: 99,
  moduleVersion: "2.0.0",
  version: "2.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en", "es"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Explain the key drivers and historical patterns of globalization",
    "Compare classical and modern theories of international trade",
    "Interpret the components of a nation's balance of payments",
    "Describe how foreign exchange markets function",
    "Apply Hofstede's and Trompenaars' cultural frameworks to business scenarios",
    "Assess how political and legal systems shape international business decisions",
    "Evaluate the interconnected forces that create the global business environment"
  ],
  lessons: [
    {
      id: "international-business-101-l01",
      title: "Globalization: Drivers and Patterns",
      type: "video",
      duration: 12,
      objectives: [
        "Define globalization and trace its historical waves",
        "Identify the technological, political, and economic drivers of globalization",
        "Distinguish between globalization of markets and globalization of production"
      ],
      chunks: [
        {
          id: "international-business-101-l01-c1",
          title: "What Is Globalization?",
          content:
            "Globalization refers to the increasing integration of economies, societies, and cultures through cross-border flows of goods, services, capital, people, and information. It is not a modern invention — spice routes and colonial trading empires represent earlier waves. However, the pace accelerated dramatically after World War II with institutions like the GATT and later the WTO, and again in the 1990s with the internet revolution and the fall of trade barriers."
        },
        {
          id: "international-business-101-l01-c2",
          title: "Drivers of Globalization",
          content:
            "Three categories of drivers propel globalization. Technological drivers include advances in transportation (containerized shipping), communication (internet, mobile networks), and information processing. Political drivers include trade liberalization, bilateral and multilateral agreements, and the creation of supranational bodies. Economic drivers include the search for new markets, lower production costs, access to resources, and economies of scale that reward serving a global customer base."
        },
        {
          id: "international-business-101-l01-c3",
          title: "Markets vs. Production Globalization",
          content:
            "Globalization of markets is the convergence of consumer preferences across borders — people worldwide drink Coca-Cola and use iPhones. Globalization of production is the dispersal of manufacturing and service activities to optimal locations — a smartphone may be designed in California, with chips from Taiwan, assembly in China, and software from India. Together, these forces create deeply interconnected value chains that span dozens of countries."
        }
      ],
      flashcards: [
        { id: "international-business-101-l01-f1", front: "Globalization", back: "The increasing integration of economies, societies, and cultures through cross-border flows of goods, services, capital, people, and information" },
        { id: "international-business-101-l01-f2", front: "Three categories of globalization drivers", back: "Technological (transport, communication, IT), Political (trade liberalization, treaties, supranational bodies), and Economic (new markets, lower costs, resource access, scale)" },
        { id: "international-business-101-l01-f3", front: "Globalization of markets vs. production", back: "Markets: convergence of consumer tastes across borders. Production: dispersal of manufacturing and services to optimal locations worldwide" }
      ]
    },
    {
      id: "international-business-101-l02",
      title: "International Trade Theories",
      type: "video",
      duration: 14,
      objectives: [
        "Explain absolute advantage and comparative advantage",
        "Describe the Heckscher-Ohlin model and its predictions",
        "Outline new trade theory and its implications for policy"
      ],
      chunks: [
        {
          id: "international-business-101-l02-c1",
          title: "Absolute and Comparative Advantage",
          content:
            "Adam Smith's absolute advantage theory states that a country should export goods it can produce more efficiently than any other nation. David Ricardo refined this with comparative advantage: even if one country is more efficient at producing everything, both nations still benefit from trade if each specializes in goods where its opportunity cost is lowest. This principle is the bedrock of free trade arguments and explains why trade occurs even between unequal economies."
        },
        {
          id: "international-business-101-l02-c2",
          title: "Heckscher-Ohlin Model",
          content:
            "The Heckscher-Ohlin (H-O) theory predicts that countries export products that intensively use their abundant factors of production. A labor-rich country like Bangladesh exports textiles; a capital-rich country like Germany exports machinery. The Leontief Paradox challenged H-O when it found the U.S. exported labor-intensive goods despite being capital-abundant, prompting refinements that account for human capital, technology, and factor quality differences."
        },
        {
          id: "international-business-101-l02-c3",
          title: "New Trade Theory",
          content:
            "Paul Krugman's new trade theory argues that economies of scale and first-mover advantages shape trade patterns as much as factor endowments. Industries with high fixed costs (aircraft, semiconductors) tend toward oligopoly because only a few firms can achieve the scale needed to be profitable. This means trade patterns are partly a result of historical accident and government support, which provides a rationale for strategic trade policy and industrial subsidies."
        }
      ],
      flashcards: [
        { id: "international-business-101-l02-f1", front: "Comparative advantage (Ricardo)", back: "A country benefits from trade by specializing in goods where its opportunity cost is lowest, even if another country is more efficient at producing everything" },
        { id: "international-business-101-l02-f2", front: "Heckscher-Ohlin theory", back: "Countries export goods that intensively use their abundant factors of production — labor-abundant nations export labor-intensive goods, capital-abundant nations export capital-intensive goods" },
        { id: "international-business-101-l02-f3", front: "New trade theory (Krugman)", back: "Economies of scale and first-mover advantages shape trade patterns; industries with high fixed costs tend toward oligopoly, justifying strategic trade policy" }
      ]
    },
    {
      id: "international-business-101-l03",
      title: "Balance of Payments",
      type: "interactive",
      duration: 13,
      objectives: [
        "Identify the components of the current account and capital account",
        "Explain what a trade surplus and trade deficit mean for a nation",
        "Interpret how balance of payments data signals economic health"
      ],
      chunks: [
        {
          id: "international-business-101-l03-c1",
          title: "Structure of the Balance of Payments",
          content:
            "The balance of payments (BOP) is a comprehensive record of all economic transactions between residents of one country and the rest of the world during a given period. It has three main components: the current account (trade in goods and services, income flows, and transfers), the capital account (transfers of non-financial assets and debt forgiveness), and the financial account (investment flows including FDI, portfolio investment, and reserve assets). By definition the BOP always balances — a deficit in one account is offset by a surplus elsewhere."
        },
        {
          id: "international-business-101-l03-c2",
          title: "Current Account: Surpluses and Deficits",
          content:
            "The current account is the most closely watched component. A trade surplus means a nation exports more goods and services than it imports, accumulating foreign currency. A trade deficit means it imports more than it exports, spending foreign currency. The U.S. has run persistent current account deficits financed by foreign capital inflows. Neither surplus nor deficit is inherently good or bad — context matters, including the nation's growth stage, investment needs, and exchange rate regime."
        },
        {
          id: "international-business-101-l03-c3",
          title: "Using BOP Data in Business Decisions",
          content:
            "International managers monitor BOP data for signals about exchange rate pressure, government policy shifts, and market stability. A widening current account deficit may foreshadow currency depreciation or import restrictions. Large financial account inflows may indicate an attractive investment climate but also vulnerability to sudden capital flight. Understanding BOP dynamics helps firms anticipate regulatory changes and currency risks when planning cross-border operations."
        }
      ],
      flashcards: [
        { id: "international-business-101-l03-f1", front: "Balance of Payments (BOP)", back: "A comprehensive record of all economic transactions between a country's residents and the rest of the world, comprising the current account, capital account, and financial account" },
        { id: "international-business-101-l03-f2", front: "Current account deficit", back: "A nation imports more goods and services than it exports, spending foreign currency — financed by capital inflows recorded in the financial account" },
        { id: "international-business-101-l03-f3", front: "Why managers track BOP data", back: "To anticipate exchange rate movements, government policy shifts (import restrictions), and capital flow volatility that affect cross-border operations" }
      ]
    },
    {
      id: "international-business-101-l04",
      title: "Foreign Exchange Basics",
      type: "video",
      duration: 13,
      objectives: [
        "Explain how exchange rates are determined in a floating system",
        "Distinguish between spot and forward exchange rates",
        "Describe how currency fluctuations impact international business"
      ],
      chunks: [
        {
          id: "international-business-101-l04-c1",
          title: "How Exchange Rates Work",
          content:
            "An exchange rate is the price of one currency expressed in terms of another. In a floating exchange rate system, rates are determined by supply and demand in the foreign exchange (forex) market — the largest financial market in the world with daily turnover exceeding $7 trillion. Demand for a currency rises when foreigners buy a country's exports, invest in its assets, or speculate on appreciation. Supply increases when residents import goods or invest abroad."
        },
        {
          id: "international-business-101-l04-c2",
          title: "Spot and Forward Rates",
          content:
            "The spot rate is the exchange rate for immediate delivery of currency (settled within two business days). The forward rate is the rate agreed upon today for currency exchange at a specified future date — 30, 90, or 180 days hence. If the forward rate is higher than the spot rate, the currency is said to be trading at a forward premium; if lower, at a forward discount. Forward contracts allow businesses to lock in rates and reduce uncertainty."
        },
        {
          id: "international-business-101-l04-c3",
          title: "Currency Fluctuations and Business Impact",
          content:
            "Exchange rate movements create both risks and opportunities. When a firm's home currency strengthens, its exports become more expensive abroad, hurting competitiveness — but imports become cheaper. When the home currency weakens, exports gain competitiveness while import costs rise. Transaction exposure affects individual deals; translation exposure affects consolidated financial statements of multinationals; economic exposure affects long-term competitive position and cash flows."
        }
      ],
      flashcards: [
        { id: "international-business-101-l04-f1", front: "Exchange rate", back: "The price of one currency expressed in terms of another, determined by supply and demand in the forex market under a floating system" },
        { id: "international-business-101-l04-f2", front: "Spot rate vs. forward rate", back: "Spot: rate for immediate currency delivery. Forward: rate agreed today for exchange at a future date, used to hedge currency risk" },
        { id: "international-business-101-l04-f3", front: "Three types of currency exposure", back: "Transaction exposure (individual deals), Translation exposure (consolidating financial statements), Economic exposure (long-term competitive position and cash flows)" }
      ]
    },
    {
      id: "international-business-101-l05",
      title: "Checkpoint: Trade Theory & Foreign Exchange",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "international-business-101-l05-q1",
          text: "According to the theory of comparative advantage, when should a country specialize in producing a good?",
          options: [
            { id: "a", text: "When it can produce the good at the lowest absolute cost" },
            { id: "b", text: "When it has the lowest opportunity cost of producing that good" },
            { id: "c", text: "When it has the most advanced technology" },
            { id: "d", text: "When it has the largest domestic market for the good" }
          ],
          correctOptionId: "b",
          explanation: "Comparative advantage focuses on opportunity cost, not absolute efficiency. A nation should specialize where its relative sacrifice of other goods is smallest."
        },
        {
          id: "international-business-101-l05-q2",
          text: "The Heckscher-Ohlin model predicts that a labor-abundant country will:",
          options: [
            { id: "a", text: "Import labor-intensive goods" },
            { id: "b", text: "Export capital-intensive goods" },
            { id: "c", text: "Export labor-intensive goods" },
            { id: "d", text: "Have no trade advantage" }
          ],
          correctOptionId: "c",
          explanation: "H-O theory predicts countries export products that use their abundant factor intensively — a labor-rich nation exports labor-intensive goods."
        },
        {
          id: "international-business-101-l05-q3",
          text: "A firm's home currency appreciates significantly. What is the most likely effect?",
          options: [
            { id: "a", text: "Exports become cheaper and more competitive abroad" },
            { id: "b", text: "Imports become more expensive for domestic buyers" },
            { id: "c", text: "Exports become more expensive abroad, hurting competitiveness" },
            { id: "d", text: "There is no effect on trade competitiveness" }
          ],
          correctOptionId: "c",
          explanation: "When the home currency strengthens, products priced in that currency cost more in foreign currency terms, reducing export competitiveness."
        },
        {
          id: "international-business-101-l05-q4",
          text: "Which component of the balance of payments records foreign direct investment flows?",
          options: [
            { id: "a", text: "Current account" },
            { id: "b", text: "Capital account" },
            { id: "c", text: "Financial account" },
            { id: "d", text: "Trade balance" }
          ],
          correctOptionId: "c",
          explanation: "FDI, portfolio investment, and reserve asset changes are recorded in the financial account. The current account covers trade and income; the capital account covers non-financial asset transfers."
        }
      ]
    },
    {
      id: "international-business-101-l06",
      title: "Cultural Dimensions in Business",
      type: "interactive",
      duration: 14,
      objectives: [
        "Apply Hofstede's cultural dimensions to explain business behavior differences",
        "Compare Trompenaars' framework with Hofstede's model",
        "Develop strategies for managing cultural differences in negotiations and teams"
      ],
      chunks: [
        {
          id: "international-business-101-l06-c1",
          title: "Hofstede's Cultural Dimensions",
          content:
            "Geert Hofstede identified six dimensions along which national cultures vary: power distance (acceptance of hierarchy), individualism vs. collectivism, masculinity vs. femininity (competition vs. cooperation), uncertainty avoidance (tolerance for ambiguity), long-term vs. short-term orientation, and indulgence vs. restraint. For example, Japan scores high on uncertainty avoidance, which explains its preference for detailed contracts and thorough planning, while the U.S. scores high on individualism, shaping its emphasis on personal achievement and entrepreneurship."
        },
        {
          id: "international-business-101-l06-c2",
          title: "Trompenaars' Seven Dimensions",
          content:
            "Fons Trompenaars proposed seven cultural dimensions: universalism vs. particularism (rules vs. relationships), individualism vs. communitarianism, specific vs. diffuse (degree of involvement), neutral vs. emotional (expressing feelings), achievement vs. ascription (earned vs. inherited status), sequential vs. synchronic time, and internal vs. external control. Trompenaars' model is particularly useful for understanding how cultures handle relationships, which directly affects negotiation style, trust-building, and contract enforcement."
        },
        {
          id: "international-business-101-l06-c3",
          title: "Bridging Cultural Gaps in Practice",
          content:
            "Effective international managers develop cultural intelligence — the ability to adapt behavior in culturally diverse settings. Practical strategies include researching the cultural profile of counterparts before meetings, adapting communication style (direct vs. indirect), understanding attitudes toward time and deadlines, respecting local decision-making hierarchies, and building relationships before pushing for agreements. Cultural training programs and diverse teams help organizations institutionalize cross-cultural competence."
        }
      ],
      flashcards: [
        { id: "international-business-101-l06-f1", front: "Hofstede's six cultural dimensions", back: "Power distance, Individualism vs. Collectivism, Masculinity vs. Femininity, Uncertainty avoidance, Long-term vs. Short-term orientation, Indulgence vs. Restraint" },
        { id: "international-business-101-l06-f2", front: "Universalism vs. Particularism (Trompenaars)", back: "Universalism: rules apply equally to everyone. Particularism: relationships and context determine how rules are applied — affects contract negotiation and enforcement" },
        { id: "international-business-101-l06-f3", front: "Cultural intelligence", back: "The ability to adapt behavior effectively in culturally diverse settings — developed through research, training, diverse teams, and experience" }
      ]
    },
    {
      id: "international-business-101-l07",
      title: "Final Assessment: Foundations of International Business",
      type: "quiz",
      duration: 15,
      questions: [
        {
          id: "international-business-101-l07-q1",
          text: "Which of the following is a POLITICAL driver of globalization?",
          options: [
            { id: "a", text: "Containerized shipping" },
            { id: "b", text: "Reduction of tariff barriers through WTO agreements" },
            { id: "c", text: "The internet and mobile networks" },
            { id: "d", text: "Economies of scale in manufacturing" }
          ],
          correctOptionId: "b",
          explanation: "Trade liberalization through organizations like the WTO is a political driver. Containerized shipping and the internet are technological drivers; economies of scale are economic drivers."
        },
        {
          id: "international-business-101-l07-q2",
          text: "New trade theory suggests that trade patterns are significantly influenced by:",
          options: [
            { id: "a", text: "Factor endowments alone" },
            { id: "b", text: "Absolute advantage in every good" },
            { id: "c", text: "Economies of scale and first-mover advantages" },
            { id: "d", text: "Currency exchange rates exclusively" }
          ],
          correctOptionId: "c",
          explanation: "Krugman's new trade theory emphasizes economies of scale and first-mover advantages as key determinants of trade patterns, beyond traditional factor endowments."
        },
        {
          id: "international-business-101-l07-q3",
          text: "A country scoring HIGH on Hofstede's uncertainty avoidance dimension would most likely:",
          options: [
            { id: "a", text: "Welcome ambiguous business situations" },
            { id: "b", text: "Prefer detailed rules, procedures, and thorough planning" },
            { id: "c", text: "Encourage risk-taking and experimentation" },
            { id: "d", text: "Favor flat organizational structures" }
          ],
          correctOptionId: "b",
          explanation: "High uncertainty avoidance cultures feel threatened by ambiguity and respond with detailed rules, formal procedures, and extensive planning to reduce unpredictability."
        },
        {
          id: "international-business-101-l07-q4",
          text: "A forward exchange rate that is LOWER than the spot rate means the currency is trading at a:",
          options: [
            { id: "a", text: "Forward premium" },
            { id: "b", text: "Forward discount" },
            { id: "c", text: "Parity rate" },
            { id: "d", text: "Arbitrage spread" }
          ],
          correctOptionId: "b",
          explanation: "When the forward rate is below the spot rate, the currency is at a forward discount — the market expects the currency to weaken relative to the other currency."
        }
      ]
    }
  ],
};
