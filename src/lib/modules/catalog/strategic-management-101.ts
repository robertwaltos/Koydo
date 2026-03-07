import type { LearningModule } from "@/lib/modules/types";

export const strategic_management_101_Module: LearningModule = {
  "id": "strategic-management-101",
  "title": "Foundations of Strategic Management",
  "description": "Learn how organizations craft winning strategies. Master industry analysis, competitive positioning, SWOT frameworks, and the strategic planning process that separates thriving businesses from failing ones.",
  "subject": "Business",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "mba",
    "strategy"
  ],
  "minAge": 18,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Define strategic management and explain why it matters",
    "Apply SWOT analysis to evaluate an organization's position",
    "Use Porter's Five Forces to assess industry attractiveness",
    "Distinguish between corporate, business, and functional strategies",
    "Explain the strategic planning process from vision to execution",
    "Identify sources of competitive advantage",
    "Analyze real-world strategy cases using structured frameworks"
  ],
  "lessons": [
    {
      "id": "strategic-management-101-l01",
      "title": "What Is Strategic Management?",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Define strategy and strategic management",
        "Explain the difference between operational effectiveness and strategy",
        "Describe the strategic management process"
      ],
      "chunks": [
        {
          "id": "strategic-management-101-l01-c1",
          "title": "Strategy Defined",
          "content": "Strategy is an integrated set of choices that positions an organization to create and capture value. It answers three fundamental questions: 'Where will we compete?' which defines the target market or industry; 'How will we win?' which outlines the unique value proposition and competitive advantage; and 'What capabilities do we need?' which identifies the necessary resources and competencies. Strategic management is the ongoing process of formulating, implementing, and evaluating these choices to achieve long-term organizational goals."
        },
        {
          "id": "strategic-management-101-l01-c2",
          "title": "Operational Effectiveness vs. Strategy",
          "content": "According to strategist Michael Porter, operational effectiveness—performing similar activities better than rivals—is necessary but not sufficient for sustained success. Competitors can often imitate best practices, leading to competitive convergence where everyone looks the same. True strategy, in contrast, is about being different. It means choosing to perform different activities or to perform similar activities in different ways to deliver a unique mix of value. This creates a distinct and defensible market position."
        },
        {
          "id": "strategic-management-101-l01-c3",
          "title": "The Strategic Management Process",
          "content": "The strategic management process is a continuous cycle with four key stages. It begins with Environmental Scanning, where the organization analyzes its internal strengths and weaknesses and its external opportunities and threats. The second stage is Strategy Formulation, which involves defining the mission and vision, setting objectives, and crafting a strategy. Third is Strategy Implementation, where the formulated strategy is put into action through resource allocation, organizational structure, and culture. The final stage, Strategy Evaluation, involves monitoring performance and making adjustments as needed, ensuring the strategy remains relevant and effective."
        }
      ],
      "flashcards": [
        {
          "id": "strategic-management-101-l01-f1",
          "front": "Strategy",
          "back": "An integrated set of choices that positions an organization to create and capture value by answering where to compete, how to win, and what capabilities are needed."
        },
        {
          "id": "strategic-management-101-l01-f2",
          "front": "Operational Effectiveness vs. Strategy",
          "back": "Operational effectiveness means doing the same things better; strategy means doing different things or doing them differently to create a unique position."
        },
        {
          "id": "strategic-management-101-l01-f3",
          "front": "Four stages of strategic management",
          "back": "Environmental Scanning → Strategy Formulation → Strategy Implementation → Strategy Evaluation (a continuous cycle)."
        }
      ],
      "learningAids": [
        {
          "id": "strategic-management-101-l01-a1",
          "type": "diagram",
          "title": "The Strategic Management Cycle",
          "content": "A circular diagram illustrating the four stages: Environmental Scanning, Strategy Formulation, Strategy Implementation, and Strategy Evaluation, showing it's a continuous process."
        }
      ]
    },
    {
      "id": "strategic-management-101-l02",
      "title": "Vision, Mission, and Objectives",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Distinguish between vision and mission statements",
        "Write SMART strategic objectives",
        "Explain the hierarchy of goals in an organization"
      ],
      "chunks": [
        {
          "id": "strategic-management-101-l02-c1",
          "title": "Vision Statement",
          "content": "A vision statement is a declaration of an organization's long-term aspirations. It paints a picture of the future the company aims to create, serving as a source of inspiration and a strategic guide. A powerful vision is ambitious yet achievable. For example, Tesla's vision 'to create the most compelling car company of the 21st century by driving the world's transition to electric vehicles' clearly articulates a future-oriented goal that motivates employees, customers, and investors."
        },
        {
          "id": "strategic-management-101-l02-c2",
          "title": "Mission Statement",
          "content": "While a vision looks to the future, a mission statement defines the organization's purpose in the present. It answers the questions: 'What do we do?', 'Whom do we serve?', and 'How do we serve them?'. It describes the company's core business, target customers, and guiding values. For instance, Google's mission is 'to organize the world's information and make it universally accessible and useful.' This statement grounds the company's daily activities and strategic decisions in a clear purpose."
        },
        {
          "id": "strategic-management-101-l02-c3",
          "title": "SMART Objectives",
          "content": "Strategic objectives translate the broad mission and vision into specific, actionable targets. To be effective, these objectives should be SMART: Specific (clear and unambiguous), Measurable (quantifiable), Achievable (realistic), Relevant (aligned with the overall strategy), and Time-bound (having a deadline). For example, an objective like 'Increase market share in Southeast Asia from 12% to 18% by the end of 2027' is a SMART objective. These goals cascade down from the corporate level to business units and functional areas, ensuring organizational alignment."
        }
      ],
      "flashcards": [
        {
          "id": "strategic-management-101-l02-f1",
          "front": "Vision statement",
          "back": "A forward-looking declaration of what the organization aspires to become — inspirational and enduring."
        },
        {
          "id": "strategic-management-101-l02-f2",
          "front": "Mission statement",
          "back": "Defines the organization's current purpose: what it does, for whom, and why it exists."
        },
        {
          "id": "strategic-management-101-l02-f3",
          "front": "SMART objectives",
          "back": "Specific, Measurable, Achievable, Relevant, Time-bound — strategic goals translated into actionable targets."
        }
      ],
      "learningAids": [
        {
          "id": "strategic-management-101-l02-a1",
          "type": "diagram",
          "title": "Hierarchy of Goals",
          "content": "A pyramid diagram showing Vision at the top, followed by Mission, Strategic Objectives, and Tactical Goals at the base."
        }
      ]
    },
    {
      "id": "strategic-management-101-l03",
      "title": "SWOT Analysis",
      "type": "interactive",
      "duration": 15,
      "objectives": [
        "Identify internal strengths and weaknesses",
        "Identify external opportunities and threats",
        "Generate strategic options from SWOT matrix combinations"
      ],
      "chunks": [
        {
          "id": "strategic-management-101-l03-c1",
          "title": "Internal Analysis: Strengths & Weaknesses",
          "content": "The first half of a SWOT analysis focuses on the organization's internal environment. Strengths are the capabilities and resources that provide a competitive advantage, such as a strong brand reputation, proprietary patents, a skilled workforce, or efficient processes. Weaknesses are internal limitations that hinder performance, like outdated technology, high debt, talent gaps, or a poor location. An honest and thorough assessment of these internal factors is critical for identifying what the organization can build upon and what it needs to improve."
        },
        {
          "id": "strategic-management-101-l03-c2",
          "title": "External Analysis: Opportunities & Threats",
          "content": "The second half of SWOT analysis scans the external environment. Opportunities are favorable external factors an organization can leverage for growth, such as emerging markets, favorable regulatory changes, or technological breakthroughs. Threats are external challenges that could harm the organization's performance, including new competitors, economic downturns, shifting consumer tastes, or supply chain disruptions. Frameworks like PESTEL (Political, Economic, Social, Technological, Environmental, Legal) analysis can help systematically identify these factors."
        },
        {
          "id": "strategic-management-101-l03-c3",
          "title": "TOWS Matrix: From Analysis to Action",
          "content": "The TOWS matrix is a strategic tool that moves from SWOT analysis to strategy formulation. It matches internal factors with external factors to generate four types of strategic options. SO (Strengths-Opportunities) strategies use strengths to capitalize on opportunities. WO (Weaknesses-Opportunities) strategies aim to overcome weaknesses to pursue opportunities. ST (Strengths-Threats) strategies leverage strengths to mitigate threats. Finally, WT (Weaknesses-Threats) strategies are defensive, aiming to minimize weaknesses and avoid threats. This framework helps transform analysis into actionable strategic plans."
        }
      ],
      "flashcards": [
        {
          "id": "strategic-management-101-l03-f1",
          "front": "SWOT Analysis",
          "back": "A framework for evaluating internal Strengths and Weaknesses, plus external Opportunities and Threats, to inform strategy."
        },
        {
          "id": "strategic-management-101-l03-f2",
          "front": "PESTEL",
          "back": "Political, Economic, Social, Technological, Environmental, Legal — a framework for scanning the macro-environment for opportunities and threats."
        },
        {
          "id": "strategic-management-101-l03-f3",
          "front": "TOWS Matrix",
          "back": "A tool that combines SWOT elements into four strategy types (SO, WO, ST, WT) to turn diagnosis into action plans."
        }
      ],
      "learningAids": [
        {
          "id": "strategic-management-101-l03-a1",
          "type": "practice",
          "title": "Guided SWOT Practice",
          "content": "Analyze a provided case study by identifying its Strengths, Weaknesses, Opportunities, and Threats, then formulate one strategy for each quadrant of the TOWS matrix."
        },
        {
          "id": "strategic-management-101-l03-a2",
          "type": "diagram",
          "title": "SWOT & TOWS Matrices",
          "content": "A visual showing the 2x2 SWOT matrix (Strengths, Weaknesses, Opportunities, Threats) and how its components are combined to form the TOWS matrix for strategic action."
        }
      ]
    },
    {
      "id": "strategic-management-101-l04",
      "title": "Porter's Five Forces",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Name and explain each of Porter's Five Forces",
        "Assess industry profitability using the framework",
        "Identify strategic implications of each force"
      ],
      "chunks": [
        {
          "id": "strategic-management-101-l04-c1",
          "title": "The Five Forces Framework",
          "content": "Michael Porter's Five Forces model is a framework for analyzing an industry's competitive structure and its overall profitability. The five forces are: (1) Threat of New Entrants, (2) Bargaining Power of Suppliers, (3) Bargaining Power of Buyers, (4) Threat of Substitute Products or Services, and (5) Rivalry Among Existing Competitors. A strong collective force indicates intense competition and lower industry profitability, while weak forces suggest a more attractive industry with higher profit potential."
        },
        {
          "id": "strategic-management-101-l04-c2",
          "title": "Entry Barriers and Supplier/Buyer Power",
          "content": "The threat of new entrants is low when barriers to entry are high. These barriers include economies of scale, brand loyalty, high capital requirements, switching costs for customers, limited access to distribution channels, and government regulations. Supplier power is high when there are few suppliers, their products are unique, or switching suppliers is costly. Similarly, buyer power is high when there are few buyers, they purchase in large volumes, or products are undifferentiated, making it easy for them to switch."
        },
        {
          "id": "strategic-management-101-l04-c3",
          "title": "Substitutes and Rivalry",
          "content": "Substitutes are products from other industries that can fulfill the same customer need (e.g., video conferencing as a substitute for business travel). The threat of substitutes is high if they offer an attractive price-performance trade-off. Rivalry among existing competitors is the most visible force and is most intense when there are many similar-sized competitors, industry growth is slow, products lack differentiation, and exit barriers are high. Understanding these forces helps a firm position itself to better cope with competition."
        }
      ],
      "flashcards": [
        {
          "id": "strategic-management-101-l04-f1",
          "front": "Porter's Five Forces",
          "back": "A framework assessing industry attractiveness through: threat of entrants, supplier power, buyer power, threat of substitutes, and competitive rivalry."
        },
        {
          "id": "strategic-management-101-l04-f2",
          "front": "Barriers to entry",
          "back": "Factors that make it difficult for new competitors to enter an industry, such as economies of scale, brand loyalty, and high capital requirements."
        },
        {
          "id": "strategic-management-101-l04-f3",
          "front": "Competitive rivalry intensifies when...",
          "back": "There are many similar-sized firms, industry growth is slow, products are undifferentiated, or exit barriers are high."
        }
      ],
      "learningAids": [
        {
          "id": "strategic-management-101-l04-a1",
          "type": "diagram",
          "title": "Porter's Five Forces Model",
          "content": "A diagram with Rivalry Among Existing Competitors at the center, surrounded by the four other forces: Threat of New Entrants, Bargaining Power of Buyers, Bargaining Power of Suppliers, and Threat of Substitutes."
        }
      ]
    },
    {
      "id": "strategic-management-101-l05",
      "title": "Checkpoint: Industry & Environmental Analysis",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "strategic-management-101-l05-q1",
          "text": "Which of the following best distinguishes strategy from operational effectiveness?",
          "options": [
            {
              "id": "a",
              "text": "Strategy involves performing different activities or performing them differently from rivals."
            },
            {
              "id": "b",
              "text": "Strategy means doing the same things faster than competitors."
            },
            {
              "id": "c",
              "text": "Strategy focuses only on cost reduction."
            },
            {
              "id": "d",
              "text": "Strategy is the same as benchmarking best practices."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Porter argued that strategy requires a unique position—doing different things or doing similar things differently—while operational effectiveness means doing the same things better."
        },
        {
          "id": "strategic-management-101-l05-q2",
          "text": "In SWOT analysis, which element is an EXTERNAL factor?",
          "options": [
            {
              "id": "a",
              "text": "Brand reputation"
            },
            {
              "id": "b",
              "text": "Employee skill gaps"
            },
            {
              "id": "c",
              "text": "New government regulation"
            },
            {
              "id": "d",
              "text": "Proprietary technology"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Government regulation is an external factor (threat or opportunity). Brand reputation, skill gaps, and proprietary technology are all internal factors (strengths or weaknesses)."
        },
        {
          "id": "strategic-management-101-l05-q3",
          "text": "According to Porter's Five Forces, which condition would INCREASE buyer power?",
          "options": [
            {
              "id": "a",
              "text": "High switching costs for buyers"
            },
            {
              "id": "b",
              "text": "Products are highly differentiated"
            },
            {
              "id": "c",
              "text": "Buyers purchase in large volumes relative to seller revenue"
            },
            {
              "id": "d",
              "text": "There are many small, fragmented buyers"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Large-volume buyers have more leverage over sellers. High switching costs, differentiated products, and fragmented buyers all reduce buyer power."
        },
        {
          "id": "strategic-management-101-l05-q4",
          "text": "What does the 'T' in PESTEL stand for?",
          "options": [
            {
              "id": "a",
              "text": "Territorial"
            },
            {
              "id": "b",
              "text": "Technological"
            },
            {
              "id": "c",
              "text": "Temporal"
            },
            {
              "id": "d",
              "text": "Tactical"
            }
          ],
          "correctOptionId": "b",
          "explanation": "PESTEL stands for Political, Economic, Social, Technological, Environmental, Legal — all macro-environmental factors that shape industry conditions."
        }
      ]
    },
    {
      "id": "strategic-management-101-l06",
      "title": "Levels of Strategy",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Distinguish between corporate, business, and functional-level strategies",
        "Explain how strategies at different levels align",
        "Provide examples of decisions made at each level"
      ],
      "chunks": [
        {
          "id": "strategic-management-101-l06-c1",
          "title": "Corporate-Level Strategy: Where to Play?",
          "content": "Corporate-level strategy addresses the overall scope of the organization. It asks, 'In which industries and markets should we compete?' Key decisions at this level include diversification, mergers and acquisitions, strategic alliances, and portfolio management. For example, when The Walt Disney Company acquired 21st Century Fox, it was a corporate-level decision to expand its entertainment portfolio and strengthen its position in the streaming market."
        },
        {
          "id": "strategic-management-101-l06-c2",
          "title": "Business-Level Strategy: How to Win?",
          "content": "Business-level strategy focuses on how to compete successfully within a specific market or industry. Each business unit or division within a larger corporation develops its own strategy to gain a competitive advantage. This is where frameworks like Porter's generic strategies (cost leadership, differentiation, focus) are applied. For instance, within Apple Inc., the iPhone's business-level strategy centers on differentiation through design, user experience, and a strong ecosystem."
        },
        {
          "id": "strategic-management-101-l06-c3",
          "title": "Functional-Level Strategy: How to Deliver?",
          "content": "Functional-level strategy supports the business-level strategy by setting goals for specific departments like marketing, finance, operations, and human resources. These strategies ensure that daily activities are aligned with the broader business objectives. For example, if a business unit's strategy is cost leadership, the operations function will focus on supply chain efficiency and waste reduction, while the marketing function might focus on a 'low price' messaging campaign."
        }
      ],
      "flashcards": [
        {
          "id": "strategic-management-101-l06-f1",
          "front": "Corporate-Level Strategy",
          "back": "Decisions about which industries and markets the overall company should compete in, managing the firm's portfolio of businesses."
        },
        {
          "id": "strategic-management-101-l06-f2",
          "front": "Business-Level Strategy",
          "back": "Actions to achieve a competitive advantage in a single product market or business unit."
        },
        {
          "id": "strategic-management-101-l06-f3",
          "front": "Functional-Level Strategy",
          "back": "Department-specific strategies (e.g., Marketing, HR, Finance) that support the business-level strategy."
        }
      ],
      "learningAids": [
        {
          "id": "strategic-management-101-l06-a1",
          "type": "diagram",
          "title": "Strategic Hierarchy",
          "content": "A pyramid diagram illustrating the three levels of strategy: Corporate at the top, Business in the middle, and Functional at the base, showing how they align."
        }
      ]
    },
    {
      "id": "strategic-management-101-l07",
      "title": "Competitive Advantage & Generic Strategies",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Define competitive advantage and its sources",
        "Explain Porter's three generic strategies",
        "Identify the danger of being 'stuck in the middle'"
      ],
      "chunks": [
        {
          "id": "strategic-management-101-l07-c1",
          "title": "What Is Competitive Advantage?",
          "content": "A company has a competitive advantage when it can create more economic value than its rivals. Economic value is the difference between the perceived benefit a customer gains from a product and the cost to produce it. This advantage can be achieved in two main ways: having lower costs than competitors (cost advantage) or offering a unique product that commands a premium price (differentiation advantage). For an advantage to be sustainable, it must be difficult for competitors to imitate."
        },
        {
          "id": "strategic-management-101-l07-c2",
          "title": "Porter's Generic Strategies",
          "content": "Michael Porter outlined three generic strategies for achieving competitive advantage. (1) Cost Leadership: Becoming the lowest-cost producer in the industry, like Walmart. (2) Differentiation: Offering unique and superior value to customers on dimensions like quality, design, or service, like Apple. (3) Focus: Concentrating on a narrow market segment and serving it with either a cost advantage (Focus Cost) or differentiation (Focus Differentiation). For example, Rolls-Royce pursues a focused differentiation strategy by targeting the ultra-luxury car segment."
        },
        {
          "id": "strategic-management-101-l07-c3",
          "title": "Stuck in the Middle",
          "content": "A firm that fails to choose a clear generic strategy is described as 'stuck in the middle.' Such a firm lacks the low costs of the cost leader and the uniqueness of the differentiator, leading to below-average performance. It tries to be all things to all people but ends up with no clear competitive advantage. While traditionally viewed as a recipe for failure, some modern firms like IKEA have successfully combined elements of both cost leadership and differentiation through strategic innovation, a concept sometimes called 'blue ocean strategy'."
        }
      ],
      "flashcards": [
        {
          "id": "strategic-management-101-l07-f1",
          "front": "Competitive advantage",
          "back": "When a firm creates more economic value than rivals, either through lower costs or differentiation that commands a premium price."
        },
        {
          "id": "strategic-management-101-l07-f2",
          "front": "Porter's three generic strategies",
          "back": "Cost Leadership (lowest cost), Differentiation (unique value at a premium), and Focus (serving a narrow segment with a cost or differentiation advantage)."
        },
        {
          "id": "strategic-management-101-l07-f3",
          "front": "Stuck in the middle",
          "back": "A firm failing to commit to a generic strategy, lacking both cost advantage and differentiation, typically resulting in below-average returns."
        }
      ],
      "learningAids": [
        {
          "id": "strategic-management-101-l07-a1",
          "type": "diagram",
          "title": "Porter's Generic Strategies Matrix",
          "content": "A 2x2 matrix with 'Competitive Scope' (Broad/Narrow) on one axis and 'Source of Competitive Advantage' (Cost/Differentiation) on the other, showing the resulting strategies."
        }
      ]
    },
    {
      "id": "strategic-management-101-l08",
      "title": "Final Assessment: Strategic Management Foundations",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "strategic-management-101-l08-q1",
          "text": "Which generic strategy does Walmart primarily pursue?",
          "options": [
            {
              "id": "a",
              "text": "Differentiation"
            },
            {
              "id": "b",
              "text": "Cost leadership"
            },
            {
              "id": "c",
              "text": "Focused differentiation"
            },
            {
              "id": "d",
              "text": "Blue ocean strategy"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Walmart's 'Everyday Low Prices' model is the textbook example of cost leadership, achieved through supply chain efficiency and economies of scale."
        },
        {
          "id": "strategic-management-101-l08-q2",
          "text": "A company deciding whether to acquire a competitor or enter a new geographic market is making what kind of strategic decision?",
          "options": [
            {
              "id": "a",
              "text": "Functional-level"
            },
            {
              "id": "b",
              "text": "Business-level"
            },
            {
              "id": "c",
              "text": "Corporate-level"
            },
            {
              "id": "d",
              "text": "Operational-level"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Corporate-level strategy deals with the overall scope of the organization, including decisions about which industries to compete in, acquisitions, and portfolio management."
        },
        {
          "id": "strategic-management-101-l08-q3",
          "text": "Which is the correct order of the strategic management process?",
          "options": [
            {
              "id": "a",
              "text": "Formulation → Scanning → Implementation → Evaluation"
            },
            {
              "id": "b",
              "text": "Scanning → Formulation → Implementation → Evaluation"
            },
            {
              "id": "c",
              "text": "Implementation → Evaluation → Scanning → Formulation"
            },
            {
              "id": "d",
              "text": "Evaluation → Scanning → Formulation → Implementation"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The process begins with environmental scanning (understanding context), then formulation (making strategic choices), implementation (executing), and evaluation (assessing results)."
        },
        {
          "id": "strategic-management-101-l08-q4",
          "text": "A luxury watchmaker selling only to collectors is pursuing which generic strategy?",
          "options": [
            {
              "id": "a",
              "text": "Cost leadership"
            },
            {
              "id": "b",
              "text": "Broad differentiation"
            },
            {
              "id": "c",
              "text": "Focused differentiation"
            },
            {
              "id": "d",
              "text": "Focused cost leadership"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A luxury watchmaker targets a narrow segment (collectors) with a differentiated product (premium craftsmanship), which is the definition of focused differentiation."
        }
      ]
    }
  ]
};
