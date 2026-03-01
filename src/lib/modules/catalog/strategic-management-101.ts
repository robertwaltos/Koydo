import type { LearningModule } from "@/lib/modules/types";

export const StrategicManagement101Module: LearningModule = {
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
  "version": "2.0.0",
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
          "content": "Strategy is a set of integrated choices that positions an organization to create and capture value. It answers three questions: Where will we compete? How will we win? What capabilities do we need? Strategic management is the ongoing process of formulating, implementing, and evaluating these choices to achieve long-term objectives."
        },
        {
          "id": "strategic-management-101-l01-c2",
          "title": "Operational Effectiveness vs. Strategy",
          "content": "Michael Porter famously argued that operational effectiveness — doing the same things better than rivals — is necessary but not sufficient. Strategy means performing different activities from rivals, or performing similar activities in different ways. A company that only improves efficiency without a unique strategic position will face diminishing returns as competitors copy best practices."
        },
        {
          "id": "strategic-management-101-l01-c3",
          "title": "The Strategic Management Process",
          "content": "The process has four stages: (1) Environmental scanning — analyzing internal and external factors. (2) Strategy formulation — crafting mission, vision, goals, and strategies. (3) Strategy implementation — putting plans into action through resource allocation, structure, and culture. (4) Strategy evaluation — monitoring results and making corrections. This is a continuous cycle, not a one-time event."
        }
      ],
      "flashcards": [
        {
          "id": "strategic-management-101-l01-f1",
          "front": "Strategy",
          "back": "An integrated set of choices that positions an organization to create and capture value by answering where to compete, how to win, and what capabilities are needed"
        },
        {
          "id": "strategic-management-101-l01-f2",
          "front": "Operational effectiveness vs. Strategy",
          "back": "Operational effectiveness means doing the same things better; strategy means doing different things or doing them differently to create a unique position"
        },
        {
          "id": "strategic-management-101-l01-f3",
          "front": "Four stages of strategic management",
          "back": "Environmental scanning → Strategy formulation → Strategy implementation → Strategy evaluation (continuous cycle)"
        }
      ],
      "learningAids": [
        {
          "id": "strategic-management-101-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
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
          "content": "A vision statement describes what the organization aspires to become in the future. It is forward-looking, inspirational, and enduring. Tesla's vision — 'to create the most compelling car company of the 21st century by driving the world's transition to electric vehicles' — paints a picture of a desired future state. A good vision is ambitious yet achievable, and it energizes stakeholders."
        },
        {
          "id": "strategic-management-101-l02-c2",
          "title": "Mission Statement",
          "content": "A mission statement defines the organization's purpose — why it exists today. It typically includes the company's core business, target customers, and key values. Google's mission — 'to organize the world's information and make it universally accessible and useful' — is present-tense and describes daily focus. Together, vision and mission act as a compass for strategic decision-making."
        },
        {
          "id": "strategic-management-101-l02-c3",
          "title": "SMART Objectives",
          "content": "Strategic objectives translate the mission and vision into measurable targets. SMART objectives are Specific (clear what to achieve), Measurable (quantifiable), Achievable (realistic), Relevant (aligned with strategy), and Time-bound (with deadlines). Example: 'Increase market share in Southeast Asia from 12% to 18% by Q4 2027.' Objectives cascade from corporate to business to functional levels."
        }
      ],
      "flashcards": [
        {
          "id": "strategic-management-101-l02-f1",
          "front": "Vision statement",
          "back": "A forward-looking declaration of what the organization aspires to become — inspirational and enduring"
        },
        {
          "id": "strategic-management-101-l02-f2",
          "front": "Mission statement",
          "back": "Defines the organization's current purpose: what it does, for whom, and why it exists"
        },
        {
          "id": "strategic-management-101-l02-f3",
          "front": "SMART objectives",
          "back": "Specific, Measurable, Achievable, Relevant, Time-bound — strategic goals translated into actionable targets"
        }
      ],
      "learningAids": [
        {
          "id": "strategic-management-101-l02-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
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
          "content": "Strengths are internal capabilities that give the organization an advantage — brand reputation, patents, skilled workforce, efficient processes. Weaknesses are internal limitations — outdated technology, high debt, talent gaps, poor location. The key is honesty: overestimating strengths or ignoring weaknesses leads to strategic blind spots."
        },
        {
          "id": "strategic-management-101-l03-c2",
          "title": "External Analysis: Opportunities & Threats",
          "content": "Opportunities are external conditions the organization can exploit — emerging markets, regulatory changes favoring your industry, technological breakthroughs. Threats are external conditions that could harm performance — new competitors, economic downturns, shifting consumer preferences, supply chain disruptions. PESTEL analysis (Political, Economic, Social, Technological, Environmental, Legal) helps systematically scan for these."
        },
        {
          "id": "strategic-management-101-l03-c3",
          "title": "TOWS Matrix: From Analysis to Action",
          "content": "The TOWS matrix generates strategies by combining SWOT elements: SO strategies (use strengths to seize opportunities), WO strategies (address weaknesses to capture opportunities), ST strategies (use strengths to counter threats), and WT strategies (minimize weaknesses and avoid threats). This transforms a diagnostic tool into an action-oriented framework."
        }
      ],
      "flashcards": [
        {
          "id": "strategic-management-101-l03-f1",
          "front": "SWOT Analysis",
          "back": "Framework evaluating internal Strengths and Weaknesses plus external Opportunities and Threats to inform strategy"
        },
        {
          "id": "strategic-management-101-l03-f2",
          "front": "PESTEL",
          "back": "Political, Economic, Social, Technological, Environmental, Legal — a framework for scanning the macro-environment for opportunities and threats"
        },
        {
          "id": "strategic-management-101-l03-f3",
          "front": "TOWS Matrix",
          "back": "Combines SWOT elements into four strategy types: SO (strengths + opportunities), WO, ST, WT — turns diagnosis into action plans"
        }
      ],
      "learningAids": [
        {
          "id": "strategic-management-101-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
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
          "content": "Michael Porter's Five Forces model assesses the competitive intensity and attractiveness of an industry. The five forces are: (1) Threat of new entrants, (2) Bargaining power of suppliers, (3) Bargaining power of buyers, (4) Threat of substitutes, and (5) Rivalry among existing competitors. When all five forces are strong, industry profits are low. When forces are weak, the industry is attractive."
        },
        {
          "id": "strategic-management-101-l04-c2",
          "title": "Entry Barriers and Supplier/Buyer Power",
          "content": "Barriers to entry include economies of scale, brand loyalty, capital requirements, switching costs, access to distribution, and government policy. High barriers protect incumbents. Supplier power rises when suppliers are concentrated, offer differentiated inputs, or face low switching costs. Buyer power increases when buyers are concentrated, purchases are large, products are undifferentiated, or switching costs are low."
        },
        {
          "id": "strategic-management-101-l04-c3",
          "title": "Substitutes and Rivalry",
          "content": "Substitutes are products from other industries that serve the same need — streaming services substitute for cinema. The threat rises when substitutes offer better price-performance. Competitive rivalry intensifies when there are many firms of similar size, slow industry growth, high fixed costs, low differentiation, or high exit barriers. Understanding these forces helps firms position themselves where forces are weakest."
        }
      ],
      "flashcards": [
        {
          "id": "strategic-management-101-l04-f1",
          "front": "Porter's Five Forces",
          "back": "Framework assessing industry attractiveness through: threat of entrants, supplier power, buyer power, threat of substitutes, and competitive rivalry"
        },
        {
          "id": "strategic-management-101-l04-f2",
          "front": "Barriers to entry",
          "back": "Factors that make it difficult for new competitors to enter an industry: economies of scale, brand loyalty, capital requirements, switching costs, distribution access"
        },
        {
          "id": "strategic-management-101-l04-f3",
          "front": "Competitive rivalry intensifies when...",
          "back": "Many similar-sized firms, slow growth, high fixed costs, low product differentiation, or high exit barriers"
        }
      ],
      "learningAids": [
        {
          "id": "strategic-management-101-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
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
              "text": "Strategy involves performing different activities or performing them differently from rivals"
            },
            {
              "id": "b",
              "text": "Strategy means doing the same things faster than competitors"
            },
            {
              "id": "c",
              "text": "Strategy focuses only on cost reduction"
            },
            {
              "id": "d",
              "text": "Strategy is the same as benchmarking best practices"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Porter argued that strategy requires a unique position — doing different things or doing similar things differently — while operational effectiveness means doing the same things better."
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
          "id": "strategic-management-101-l06-c1",
          "title": "What Is Competitive Advantage?",
          "content": "Competitive advantage exists when a firm creates more economic value than its rivals — the difference between what customers are willing to pay and the cost of production. It can come from lower costs (cost advantage) or from differentiation that commands a price premium. Sustainable competitive advantage requires that the advantage be difficult for competitors to imitate."
        },
        {
          "id": "strategic-management-101-l06-c2",
          "title": "Porter's Generic Strategies",
          "content": "Porter identified three generic strategies: (1) Cost leadership — being the lowest-cost producer in the industry (Walmart, Ryanair). (2) Differentiation — offering unique value that justifies a premium price (Apple, Mercedes-Benz). (3) Focus — targeting a narrow market segment with either cost or differentiation advantage (Rolls-Royce, regional airlines). Each strategy requires different resources, skills, and organizational arrangements."
        },
        {
          "id": "strategic-management-101-l06-c3",
          "title": "Stuck in the Middle",
          "content": "Firms that fail to commit to one generic strategy are 'stuck in the middle' — they lack the cost advantage of leaders, the unique value of differentiators, and the specialized focus of niche players. These firms typically earn below-average returns. However, some modern companies (IKEA, Toyota) have found ways to combine elements of cost and differentiation through process innovation."
        }
      ],
      "flashcards": [
        {
          "id": "strategic-management-101-l06-f1",
          "front": "Competitive advantage",
          "back": "When a firm creates more economic value than rivals — through lower costs or differentiation that commands a premium"
        },
        {
          "id": "strategic-management-101-l06-f2",
          "front": "Porter's three generic strategies",
          "back": "Cost leadership (lowest cost), Differentiation (unique value at premium), Focus (narrow segment with cost or differentiation advantage)"
        },
        {
          "id": "strategic-management-101-l06-f3",
          "front": "Stuck in the middle",
          "back": "A firm failing to commit to any generic strategy — lacking cost advantage, differentiation, or focus — typically earning below-average returns"
        }
      ]
    },
    {
      "id": "strategic-management-101-l07",
      "title": "Final Assessment: Strategic Management Foundations",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "strategic-management-101-l07-q1",
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
          "explanation": "Walmart's 'Everyday Low Prices' model is the textbook example of cost leadership — achieving the lowest operating costs in retail through supply chain efficiency and scale."
        },
        {
          "id": "strategic-management-101-l07-q2",
          "text": "A TOWS 'WO strategy' combines which elements?",
          "options": [
            {
              "id": "a",
              "text": "Strengths and Opportunities"
            },
            {
              "id": "b",
              "text": "Weaknesses and Threats"
            },
            {
              "id": "c",
              "text": "Weaknesses and Opportunities"
            },
            {
              "id": "d",
              "text": "Strengths and Threats"
            }
          ],
          "correctOptionId": "c",
          "explanation": "WO strategies address internal Weaknesses to capitalize on external Opportunities — for example, partnering with a tech firm (addressing a technology weakness) to enter a growing digital market (opportunity)."
        },
        {
          "id": "strategic-management-101-l07-q3",
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
          "id": "strategic-management-101-l07-q4",
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
          "explanation": "A luxury watchmaker targets a narrow segment (collectors) with a differentiated product (premium craftsmanship) — this is focused differentiation."
        }
      ]
    }
  ]
};
