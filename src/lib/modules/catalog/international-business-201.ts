import type { LearningModule } from "@/lib/modules/types";

export const InternationalBusiness201Module: LearningModule = {
  id: "international-business-201",
  title: "International Strategy & Market Entry",
  description:
    "Master the strategic decisions firms face when expanding across borders. Analyze foreign direct investment theory, evaluate market entry modes from exporting to wholly-owned subsidiaries, and learn to manage the human side of international operations including expatriates and cross-cultural teams.",
  subject: "Business",
  tags: ["core", "curriculum", "interactive", "mba", "international-business"],
  minAge: 18,
  maxAge: 99,
  version: "2.0.0",
  difficultyBand: "intermediate",
  localeSupport: ["en", "es"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Explain the major theories of foreign direct investment",
    "Compare and contrast market entry modes and their trade-offs",
    "Evaluate location selection criteria for international expansion",
    "Describe best practices in expatriate management",
    "Develop strategies for leading cross-cultural teams effectively",
    "Conduct a country risk assessment for market entry decisions",
    "Integrate strategic analysis to recommend optimal entry approaches"
  ],
  lessons: [
    {
      id: "international-business-201-l01",
      title: "Foreign Direct Investment Theory",
      type: "video",
      duration: 13,
      objectives: [
        "Define FDI and distinguish it from portfolio investment",
        "Explain Dunning's OLI paradigm",
        "Describe the motivations behind horizontal and vertical FDI"
      ],
      chunks: [
        {
          id: "international-business-201-l01-c1",
          title: "Understanding FDI",
          content:
            "Foreign direct investment (FDI) occurs when a firm invests directly in production or business operations in another country, typically acquiring at least 10% ownership. Unlike portfolio investment (buying stocks and bonds), FDI involves active management control. Global FDI flows exceed $1.3 trillion annually and are a primary engine of economic integration. FDI can take the form of greenfield investments (building new facilities) or brownfield acquisitions (purchasing existing businesses)."
        },
        {
          id: "international-business-201-l01-c2",
          title: "Dunning's OLI Paradigm",
          content:
            "John Dunning's eclectic paradigm explains why firms undertake FDI through three advantages: Ownership advantages (O) — proprietary technology, brand, or managerial expertise that gives the firm an edge. Location advantages (L) — factors in the host country such as market size, low costs, or natural resources. Internalization advantages (I) — it is more profitable to exploit ownership advantages internally than to license them. All three conditions must be met for FDI to be the preferred mode."
        },
        {
          id: "international-business-201-l01-c3",
          title: "Horizontal vs. Vertical FDI",
          content:
            "Horizontal FDI involves replicating the same business activities in a foreign country — Toyota building car plants in the U.S. to serve the American market. Vertical FDI involves locating different stages of the value chain abroad — an electronics firm sourcing components in Southeast Asia (backward vertical) or setting up distribution in Europe (forward vertical). Horizontal FDI is driven by market access and trade barrier avoidance; vertical FDI is driven by cost efficiency and access to inputs."
        }
      ],
      flashcards: [
        { id: "international-business-201-l01-f1", front: "Foreign Direct Investment (FDI)", back: "Investment in production or operations in another country with active management control, typically 10%+ ownership — distinct from passive portfolio investment" },
        { id: "international-business-201-l01-f2", front: "Dunning's OLI paradigm", back: "FDI requires three advantages: Ownership (proprietary assets), Location (host country factors), Internalization (more profitable to operate internally than to license)" },
        { id: "international-business-201-l01-f3", front: "Horizontal vs. Vertical FDI", back: "Horizontal: replicating same activities abroad (market access). Vertical: locating different value chain stages abroad (cost efficiency and input access)" }
      ]
    },
    {
      id: "international-business-201-l02",
      title: "Market Entry Modes",
      type: "video",
      duration: 15,
      objectives: [
        "Compare exporting, licensing, and franchising as entry strategies",
        "Evaluate joint ventures versus wholly-owned subsidiaries",
        "Analyze the trade-offs between control, risk, and resource commitment"
      ],
      chunks: [
        {
          id: "international-business-201-l02-c1",
          title: "Low-Commitment Modes: Exporting and Licensing",
          content:
            "Exporting is the simplest entry mode — producing domestically and selling abroad through agents, distributors, or company-owned channels. It requires minimal investment but exposes firms to transportation costs and trade barriers. Licensing allows a foreign firm to use intellectual property (patents, trademarks, know-how) for a royalty fee. It provides low-risk market access but risks losing control of quality and potentially creating a future competitor who absorbs the licensed knowledge."
        },
        {
          id: "international-business-201-l02-c2",
          title: "Mid-Commitment Modes: Franchising and Joint Ventures",
          content:
            "Franchising is a specialized licensing form where the franchisor provides an entire business system — brand, operations manual, training, and supply chain — in exchange for fees and royalties. McDonald's and Hilton use this globally. Joint ventures (JVs) involve two or more firms creating a jointly-owned entity. JVs share costs and risks, provide local knowledge, and satisfy government requirements in countries that restrict full foreign ownership. However, JVs can suffer from partner conflicts and knowledge leakage."
        },
        {
          id: "international-business-201-l02-c3",
          title: "High-Commitment Modes: Wholly-Owned Subsidiaries",
          content:
            "A wholly-owned subsidiary gives the parent firm 100% ownership and full control. It can be established through greenfield investment (building from scratch) or acquisition (buying an existing firm). Greenfield offers a custom-built operation aligned with company culture but takes longer. Acquisition provides immediate market presence and existing capabilities but carries integration risk. Wholly-owned subsidiaries demand the highest resource commitment but offer the greatest control over operations, technology, and profits."
        }
      ],
      flashcards: [
        { id: "international-business-201-l02-f1", front: "Licensing as market entry", back: "A foreign firm pays royalties to use intellectual property — low risk and investment, but risks quality control loss and creating future competitors" },
        { id: "international-business-201-l02-f2", front: "Joint venture advantages and risks", back: "Advantages: shared costs, local knowledge, meeting ownership requirements. Risks: partner conflicts, knowledge leakage, split decision-making" },
        { id: "international-business-201-l02-f3", front: "Greenfield vs. Acquisition", back: "Greenfield: custom-built, culturally aligned, but slower. Acquisition: immediate presence and capabilities, but integration risk and cultural clashes" }
      ]
    },
    {
      id: "international-business-201-l03",
      title: "Location Selection for International Expansion",
      type: "interactive",
      duration: 14,
      objectives: [
        "Identify the key factors in evaluating potential host countries",
        "Apply frameworks for comparing location alternatives",
        "Assess infrastructure, institutional quality, and market potential"
      ],
      chunks: [
        {
          id: "international-business-201-l03-c1",
          title: "Market-Seeking Factors",
          content:
            "When firms expand to access new customers, they evaluate market size (GDP, population), growth rate, per capita income, and consumer demographics. Market-seeking FDI targets large or fast-growing economies where demand for the firm's products is strong or emerging. China and India attract massive market-seeking investment due to their combination of population scale and rising middle classes. Firms also consider competitive density — an uncrowded market offers more opportunity than a saturated one."
        },
        {
          id: "international-business-201-l03-c2",
          title: "Efficiency-Seeking and Resource-Seeking Factors",
          content:
            "Efficiency-seeking location decisions focus on production costs — labor rates, energy prices, tax incentives, and logistics infrastructure. Vietnam and Mexico have attracted manufacturing investment through competitive wages and trade agreement access. Resource-seeking decisions target natural resources (mining in Australia), skilled talent pools (tech hubs in Bangalore), or agricultural inputs. The best locations combine favorable costs with reliable infrastructure, political stability, and supportive regulatory environments."
        },
        {
          id: "international-business-201-l03-c3",
          title: "Institutional Quality and Business Climate",
          content:
            "Beyond economics, firms assess institutional quality: rule of law, contract enforcement, corruption levels, regulatory transparency, and intellectual property protection. The World Bank's Ease of Doing Business indicators and Transparency International's Corruption Perceptions Index are commonly used benchmarks. Weak institutions increase transaction costs and risk. Special economic zones (SEZs) and investment promotion agencies are tools host countries use to attract FDI by offering streamlined regulations, tax breaks, and dedicated infrastructure."
        }
      ],
      flashcards: [
        { id: "international-business-201-l03-f1", front: "Market-seeking FDI", back: "Investment driven by access to large or fast-growing consumer markets — evaluated through GDP, growth rate, per capita income, and competitive density" },
        { id: "international-business-201-l03-f2", front: "Efficiency-seeking FDI", back: "Investment targeting lower production costs — labor rates, energy prices, tax incentives, and logistics infrastructure in host countries" },
        { id: "international-business-201-l03-f3", front: "Special Economic Zones (SEZs)", back: "Designated areas offering streamlined regulations, tax breaks, and dedicated infrastructure to attract foreign direct investment" }
      ]
    },
    {
      id: "international-business-201-l04",
      title: "International HRM & Expatriate Management",
      type: "video",
      duration: 13,
      objectives: [
        "Compare ethnocentric, polycentric, and geocentric staffing approaches",
        "Identify the stages and challenges of the expatriate assignment cycle",
        "Design compensation and support systems for international assignees"
      ],
      chunks: [
        {
          id: "international-business-201-l04-c1",
          title: "International Staffing Approaches",
          content:
            "Firms choose among three staffing philosophies. Ethnocentric staffing places home-country nationals in key positions abroad, ensuring headquarters control but risking cultural insensitivity. Polycentric staffing hires host-country nationals for local management, gaining cultural expertise but potentially creating silos. Geocentric staffing selects the best person regardless of nationality, building a global talent pool but incurring higher costs and visa complexities. Most multinationals blend these approaches based on the role and location."
        },
        {
          id: "international-business-201-l04-c2",
          title: "The Expatriate Assignment Cycle",
          content:
            "The expatriate cycle has four phases: selection (assessing technical skills, cultural adaptability, family situation), preparation (language training, cultural orientation, relocation logistics), adjustment (managing culture shock through a U-curve of honeymoon, frustration, adaptation, and mastery), and repatriation (returning home with career planning and knowledge transfer). Failure rates for expatriate assignments remain high — estimates range from 10% to 40% — often due to family adjustment difficulties and inadequate preparation."
        },
        {
          id: "international-business-201-l04-c3",
          title: "Compensation and Support",
          content:
            "International compensation packages typically use the balance sheet approach — maintaining the expatriate's home-country purchasing power plus incentives. Components include base salary, hardship premium, cost-of-living adjustment (COLA), housing allowance, education allowance for children, and tax equalization. Beyond financial support, successful programs provide cultural mentors, spouse career assistance, pre-departure visits, and ongoing communication with headquarters to prevent the 'out of sight, out of mind' problem."
        }
      ],
      flashcards: [
        { id: "international-business-201-l04-f1", front: "Ethnocentric vs. Polycentric vs. Geocentric staffing", back: "Ethnocentric: home-country managers abroad. Polycentric: local managers in each country. Geocentric: best person regardless of nationality" },
        { id: "international-business-201-l04-f2", front: "Expatriate U-curve of adjustment", back: "Four phases: honeymoon (excitement), frustration (culture shock), adaptation (learning to cope), mastery (effective functioning)" },
        { id: "international-business-201-l04-f3", front: "Balance sheet compensation approach", back: "Maintains expatriate's home-country purchasing power plus incentives — includes base salary, COLA, hardship premium, housing, education, and tax equalization" }
      ]
    },
    {
      id: "international-business-201-l05",
      title: "Checkpoint: Entry Strategy & International HRM",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "international-business-201-l05-q1",
          text: "According to Dunning's OLI paradigm, which condition must be met for a firm to prefer FDI over licensing?",
          options: [
            { id: "a", text: "The firm must have location advantages only" },
            { id: "b", text: "It must be more profitable to exploit ownership advantages internally than to license them" },
            { id: "c", text: "The host country must have lower wages than the home country" },
            { id: "d", text: "The firm must already have operations in the host country" }
          ],
          correctOptionId: "b",
          explanation: "The Internalization advantage means the firm benefits more from exploiting its proprietary assets internally (through FDI) than by licensing them to an external party."
        },
        {
          id: "international-business-201-l05-q2",
          text: "Which market entry mode provides the HIGHEST level of control but also the HIGHEST resource commitment?",
          options: [
            { id: "a", text: "Exporting" },
            { id: "b", text: "Licensing" },
            { id: "c", text: "Joint venture" },
            { id: "d", text: "Wholly-owned subsidiary" }
          ],
          correctOptionId: "d",
          explanation: "A wholly-owned subsidiary gives 100% ownership and full operational control, but requires the greatest investment of capital, management time, and organizational resources."
        },
        {
          id: "international-business-201-l05-q3",
          text: "A geocentric staffing approach means:",
          options: [
            { id: "a", text: "Only home-country nationals manage foreign operations" },
            { id: "b", text: "Only host-country nationals manage local operations" },
            { id: "c", text: "The best candidate is selected regardless of nationality" },
            { id: "d", text: "All positions are filled through local recruitment agencies" }
          ],
          correctOptionId: "c",
          explanation: "Geocentric staffing selects the most qualified person for each role regardless of national origin, building a truly global talent pool."
        },
        {
          id: "international-business-201-l05-q4",
          text: "What is the primary reason expatriate assignments fail?",
          options: [
            { id: "a", text: "Lack of technical skills" },
            { id: "b", text: "Family adjustment difficulties and inadequate cultural preparation" },
            { id: "c", text: "Insufficient salary" },
            { id: "d", text: "Time zone differences" }
          ],
          correctOptionId: "b",
          explanation: "Research consistently shows that family adjustment issues and inadequate cross-cultural preparation are the leading causes of expatriate assignment failure, not technical competence."
        }
      ]
    },
    {
      id: "international-business-201-l06",
      title: "Managing Cross-Cultural Teams & Country Risk",
      type: "interactive",
      duration: 14,
      objectives: [
        "Apply strategies for leading effective multicultural teams",
        "Distinguish between political, economic, and financial country risks",
        "Use risk assessment frameworks to evaluate target markets"
      ],
      chunks: [
        {
          id: "international-business-201-l06-c1",
          title: "Leading Cross-Cultural Teams",
          content:
            "Cross-cultural teams bring diverse perspectives that enhance creativity and problem-solving, but they also face communication barriers, differing work styles, and conflicting assumptions. Effective leaders establish shared norms early, create psychological safety for all voices, use structured decision-making processes, and rotate meeting times across time zones for distributed teams. Research by Erin Meyer highlights that communication styles (low-context vs. high-context), feedback norms (direct vs. indirect), and trust-building methods (task-based vs. relationship-based) vary dramatically across cultures."
        },
        {
          id: "international-business-201-l06-c2",
          title: "Understanding Country Risk",
          content:
            "Country risk encompasses all factors in a host nation that could adversely affect a firm's operations or profitability. Political risk includes government instability, expropriation, regulatory changes, and civil unrest. Economic risk involves recession, inflation, currency devaluation, and sovereign default. Financial risk covers banking system fragility, capital controls, and repatriation restrictions. These risks interact — political instability often triggers economic deterioration and capital flight."
        },
        {
          id: "international-business-201-l06-c3",
          title: "Country Risk Assessment Frameworks",
          content:
            "Firms use multiple tools to evaluate country risk. Quantitative methods include rating agencies (Moody's sovereign ratings), composite indices (Economist Intelligence Unit Country Risk Service), and econometric models. Qualitative methods include political analysis, scenario planning, and expert panels. Best practice combines both approaches and monitors risks continuously rather than assessing only at entry. Risk mitigation strategies include political risk insurance (from agencies like MIGA), local partnerships, diversifying across markets, and structuring investments to minimize exposure."
        }
      ],
      flashcards: [
        { id: "international-business-201-l06-f1", front: "Keys to leading cross-cultural teams", back: "Establish shared norms early, create psychological safety, use structured decision-making, rotate meeting times, and adapt communication style to cultural context" },
        { id: "international-business-201-l06-f2", front: "Three categories of country risk", back: "Political (instability, expropriation, regulation), Economic (recession, inflation, currency), Financial (banking fragility, capital controls, repatriation restrictions)" },
        { id: "international-business-201-l06-f3", front: "Political risk insurance (MIGA)", back: "The Multilateral Investment Guarantee Agency provides insurance against political risks like expropriation, currency restrictions, and war — reducing the cost of investing in risky markets" }
      ]
    },
    {
      id: "international-business-201-l07",
      title: "Final Assessment: International Strategy & Market Entry",
      type: "quiz",
      duration: 15,
      questions: [
        {
          id: "international-business-201-l07-q1",
          text: "A Japanese automaker builds a factory in the United States to serve American consumers. This is an example of:",
          options: [
            { id: "a", text: "Vertical FDI" },
            { id: "b", text: "Horizontal FDI" },
            { id: "c", text: "Portfolio investment" },
            { id: "d", text: "Licensing" }
          ],
          correctOptionId: "b",
          explanation: "Horizontal FDI replicates the same production activity (car manufacturing) in a foreign market to serve local customers, avoiding trade barriers and transportation costs."
        },
        {
          id: "international-business-201-l07-q2",
          text: "Which market entry mode is MOST vulnerable to creating a future competitor through knowledge transfer?",
          options: [
            { id: "a", text: "Wholly-owned subsidiary" },
            { id: "b", text: "Exporting through a distributor" },
            { id: "c", text: "Licensing technology to a foreign firm" },
            { id: "d", text: "Greenfield investment" }
          ],
          correctOptionId: "c",
          explanation: "Licensing transfers proprietary knowledge to a foreign partner who may eventually use it independently, becoming a competitor once the license expires."
        },
        {
          id: "international-business-201-l07-q3",
          text: "A firm evaluating potential host countries considers GDP growth rate, per capita income, and consumer demographics. This firm is engaged in:",
          options: [
            { id: "a", text: "Efficiency-seeking analysis" },
            { id: "b", text: "Resource-seeking analysis" },
            { id: "c", text: "Market-seeking analysis" },
            { id: "d", text: "Strategic asset-seeking analysis" }
          ],
          correctOptionId: "c",
          explanation: "Market-seeking analysis evaluates consumer demand indicators like GDP growth, income levels, and demographics to identify attractive target markets for expansion."
        },
        {
          id: "international-business-201-l07-q4",
          text: "The balance sheet approach to expatriate compensation is designed to:",
          options: [
            { id: "a", text: "Pay expatriates the local market rate in the host country" },
            { id: "b", text: "Maintain the expatriate's home-country purchasing power plus incentives" },
            { id: "c", text: "Reduce total compensation costs for the company" },
            { id: "d", text: "Eliminate the need for tax equalization" }
          ],
          correctOptionId: "b",
          explanation: "The balance sheet approach ensures expatriates are neither better nor worse off financially than if they stayed home, adding premiums and allowances to offset the costs and disruptions of the assignment."
        }
      ]
    }
  ],
};
