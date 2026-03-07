import type { LearningModule } from "@/lib/modules/types";

export const accounting_finance_401_Module: LearningModule = {
  "id": "accounting-finance-401",
  "title": "Strategic Finance Leadership",
  "description": "Senior finance strategy, governance, risk integration, and enterprise resource allocation.",
  "subject": "Accounting and Finance",
  "tags": [
    "curriculum",
    "interactive",
    "finance",
    "leadership",
    "strategy"
  ],
  "minAge": 17,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es",
    "fr",
    "de",
    "ar",
    "hi",
    "zh",
    "ja",
    "ko",
    "ru"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Evaluate enterprise value creation through advanced capital allocation strategies.",
    "Integrate Enterprise Risk Management (ERM) with corporate governance frameworks.",
    "Analyze the financial and strategic implications of Mergers and Acquisitions (M&A).",
    "Communicate complex financial strategies effectively to diverse stakeholders."
  ],
  "lessons": [
    {
      "id": "accounting-finance-401-l01",
      "title": "Value Creation & Strategic Finance",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4: A sleek, modern corporate boardroom with holographic financial charts showing upward growth hovering above a glass table. Photorealistic, cinematic lighting, 8k resolution, highly detailed.",
      "conceptVideoPrompt": "Veo 3.1: A dynamic 3D animation showing a glowing corporate building at night. Luminous data streams flow into the building, transforming into solid gold pillars representing value creation. High-end corporate aesthetic, smooth tracking shot, cinematic depth of field.",
      "chunks": [
        {
          "id": "accounting-finance-401-l01-c1",
          "type": "text",
          "title": "The Core of Value Creation",
          "content": "At the highest level of finance, success is measured by one primary metric: Economic Value Creation. A company creates value only when its Return on Invested Capital (ROIC) exceeds its Weighted Average Cost of Capital (WACC). If a company earns a 10% return on capital that costs 8% to acquire, it is generating true economic profit."
        },
        {
          "id": "accounting-finance-401-l01-c2",
          "type": "text",
          "title": "Economic Value Added (EVA)",
          "content": "Economic Value Added (EVA) quantifies this value creation. It is calculated as Net Operating Profit After Taxes (NOPAT) minus the total cost of capital. Positive EVA indicates wealth is being created for shareholders, while negative EVA means wealth is being destroyed, regardless of whether accounting net income is positive."
        }
      ],
      "learningAids": [
        {
          "id": "accounting-finance-401-l01-a1",
          "type": "image",
          "title": "The Value Creation Framework",
          "content": "A visual diagram showing the relationship between Return on Invested Capital (ROIC), Weighted Average Cost of Capital (WACC), and Economic Value Added (EVA)."
        },
        {
          "id": "accounting-finance-401-l01-a2",
          "type": "animation",
          "title": "ROIC vs. WACC Dynamics",
          "content": "An animated scale balancing ROIC and WACC, demonstrating how value is only created when ROIC exceeds the cost of capital."
        }
      ],
      "imageUrl": "/generated-images/refinery/accounting-finance-401-l01.png"
    },
    {
      "id": "accounting-finance-401-l02",
      "title": "Capital Allocation & Resource Planning",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4: A top-down view of a modern executive desk made of dark wood. A sleek tablet displays interactive pie charts and resource allocation graphs glowing in neon blue and green. Photorealistic, sharp focus, dramatic studio lighting.",
      "conceptVideoPrompt": "Veo 3.1: A visual metaphor of a master chess player moving glowing glass pieces on a high-tech board. Each piece represents a different corporate division receiving capital funding. Cinematic lighting, slow-motion macro shots, elegant and strategic atmosphere.",
      "chunks": [
        {
          "id": "accounting-finance-401-l02-c1",
          "type": "text",
          "title": "The Capital Allocation Matrix",
          "content": "Capital allocation is the CEO and CFO's most critical job. When a company generates free cash flow, leadership must decide how to deploy it: reinvest in existing operations, fund M&A, pay down debt, issue dividends, or repurchase shares. The goal is always to choose the path with the highest risk-adjusted return."
        },
        {
          "id": "accounting-finance-401-l02-c2",
          "type": "text",
          "title": "Dividends vs. Share Repurchases",
          "content": "Returning capital to shareholders is essential when internal reinvestment opportunities (positive NPV projects) are scarce. Dividends provide a steady, predictable return but are rigid. Share repurchases are flexible and can signal to the market that management believes the stock is undervalued, effectively increasing the ownership stake of remaining shareholders."
        }
      ],
      "metadata": {
        "prompts": [
          "Identify the optimal capital allocation strategy for a mature, cash-rich company.",
          "Evaluate the trade-offs between share buybacks, dividends, and reinvestment.",
          "Draft a brief justification for your chosen allocation strategy."
        ]
      },
      "learningAids": [
        {
          "id": "accounting-finance-401-l02-a1",
          "type": "practice",
          "title": "Capital Allocation Simulator",
          "content": "Allocate $100M across R&D, debt repayment, and dividends to maximize shareholder value over a 5-year simulated period."
        }
      ],
      "imageUrl": "/generated-images/refinery/accounting-finance-401-l02.png"
    },
    {
      "id": "accounting-finance-401-l03",
      "title": "Checkpoint 1: Value & Capital",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4: A glowing digital checkpoint gate in a futuristic financial district, symbolizing the mastery of foundational finance concepts. Neon lights, cyberpunk aesthetic, highly detailed, 8k.",
      "conceptVideoPrompt": "Veo 3.1: A fast-paced montage of financial models, spreadsheets, and stock tickers rapidly resolving into a bright, glowing green checkmark in the center of the screen. High-energy, crisp motion graphics.",
      "questions": [
        {
          "id": "accounting-finance-401-l03-q1",
          "text": "Which scenario definitively indicates that a company is creating economic value?",
          "skillId": "accounting-finance-401-skill-value",
          "options": [
            {
              "id": "a",
              "text": "Return on Invested Capital (ROIC) exceeds the Weighted Average Cost of Capital (WACC)."
            },
            {
              "id": "b",
              "text": "Net Income has grown by 10% year-over-year."
            },
            {
              "id": "c",
              "text": "The company issues new equity to fund operations."
            },
            {
              "id": "d",
              "text": "Total assets exceed total liabilities."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Economic value is created only when the return generated on capital (ROIC) is greater than the cost of acquiring that capital (WACC)."
        },
        {
          "id": "accounting-finance-401-l03-q2",
          "text": "When a company has excess cash and no positive NPV projects available, what is generally the most value-enhancing capital allocation decision?",
          "skillId": "accounting-finance-401-skill-allocation",
          "options": [
            {
              "id": "a",
              "text": "Return capital to shareholders via dividends or share repurchases."
            },
            {
              "id": "b",
              "text": "Invest in negative NPV projects to maintain market share."
            },
            {
              "id": "c",
              "text": "Hold the cash indefinitely to build a massive reserve."
            },
            {
              "id": "d",
              "text": "Increase executive compensation."
            }
          ],
          "correctOptionId": "a",
          "explanation": "If no positive NPV projects exist, returning cash to shareholders allows them to invest it elsewhere for a better return, maximizing overall value."
        },
        {
          "id": "accounting-finance-401-l03-q3",
          "text": "How does an increase in the proportion of debt in a company's capital structure typically affect its WACC, assuming it remains below the optimal debt level?",
          "skillId": "accounting-finance-401-skill-wacc",
          "options": [
            {
              "id": "a",
              "text": "It decreases WACC due to the tax shield on interest payments."
            },
            {
              "id": "b",
              "text": "It increases WACC because debt is always more expensive than equity."
            },
            {
              "id": "c",
              "text": "It has no effect on WACC according to traditional theories."
            },
            {
              "id": "d",
              "text": "It decreases WACC by increasing the cost of equity."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Debt is typically cheaper than equity, and interest payments are tax-deductible. Adding debt (up to a point) lowers the overall WACC."
        }
      ],
      "learningAids": [
        {
          "id": "accounting-finance-401-l03-a1",
          "type": "mnemonic",
          "title": "Value Creation Rule",
          "content": "Remember: ROIC > WACC = Value Creation. If it costs more to fund than it earns, value is destroyed."
        }
      ],
      "imageUrl": "/generated-images/refinery/accounting-finance-401-l03.png"
    },
    {
      "id": "accounting-finance-401-l04",
      "title": "Corporate Governance & Board Dynamics",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4: A diverse board of directors in a high-tech, glass-walled meeting room overlooking a city skyline. They are focusing on a central glowing holographic document representing corporate governance. Photorealistic, cinematic lighting.",
      "conceptVideoPrompt": "Veo 3.1: An intricate 3D animation of a complex interlocking gear system made of polished glass and brushed steel. The gears represent shareholders, the board, and management, turning in perfect synchronization. Smooth, continuous camera movement.",
      "chunks": [
        {
          "id": "accounting-finance-401-l04-c1",
          "type": "text",
          "title": "The Agency Problem",
          "content": "Corporate governance exists primarily to solve the 'Agency Problem'—the inherent conflict of interest that arises when a company's owners (shareholders) are not the same people managing its day-to-day operations (executives). Without proper oversight, executives might prioritize personal wealth or empire-building over shareholder value."
        },
        {
          "id": "accounting-finance-401-l04-c2",
          "type": "text",
          "title": "The Role of the Board",
          "content": "The Board of Directors acts as the shareholders' proxy. A strong board requires independence—meaning a majority of directors have no material ties to the company other than their board seat. They are responsible for hiring and firing the CEO, approving major strategic shifts, and ensuring executive compensation is tied to long-term performance."
        }
      ],
      "metadata": {
        "prompts": [
          "Analyze a scenario involving a conflict of interest between management and shareholders.",
          "Propose a governance mechanism to align executive incentives with long-term value.",
          "Evaluate the effectiveness of an independent board of directors."
        ]
      },
      "learningAids": [
        {
          "id": "accounting-finance-401-l04-a1",
          "type": "practice",
          "title": "Agency Problem Resolution",
          "content": "Review a case study on executive compensation and redesign the bonus structure to mitigate agency risks."
        }
      ],
      "imageUrl": "/generated-images/refinery/accounting-finance-401-l04.png"
    },
    {
      "id": "accounting-finance-401-l05",
      "title": "Enterprise Risk Management (ERM)",
      "type": "video",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4: A futuristic command center with large curved screens displaying global risk heat maps, financial data, and geopolitical alerts. Cinematic lighting, highly detailed, photorealistic.",
      "conceptVideoPrompt": "Veo 3.1: A digital, glowing blue shield forming around a modern corporate headquarters. The shield deflects red data streams representing financial, operational, and cyber risks. High-tech aesthetic, dramatic camera sweep.",
      "chunks": [
        {
          "id": "accounting-finance-401-l05-c1",
          "type": "text",
          "title": "Beyond Traditional Risk Management",
          "content": "Traditional risk management often operates in silos (e.g., IT handles cyber risk, Finance handles currency risk). Enterprise Risk Management (ERM) is a holistic, top-down approach. It integrates risk management directly into strategic planning, recognizing that risks are interconnected and can impact the entire organization's ability to achieve its objectives."
        },
        {
          "id": "accounting-finance-401-l05-c2",
          "type": "text",
          "title": "Risk Appetite vs. Risk Tolerance",
          "content": "A crucial ERM concept is distinguishing between appetite and tolerance. 'Risk Appetite' is the broad amount of risk an organization is willing to accept in pursuit of its mission (e.g., 'We accept high market risk to achieve rapid growth'). 'Risk Tolerance' is the specific, measurable variance allowed around a given objective (e.g., 'We will not accept a currency fluctuation impact greater than 2% of EBITDA')."
        }
      ],
      "learningAids": [
        {
          "id": "accounting-finance-401-l05-a1",
          "type": "image",
          "title": "COSO ERM Framework",
          "content": "A detailed infographic of the COSO Enterprise Risk Management cube, highlighting strategy, performance, and review."
        },
        {
          "id": "accounting-finance-401-l05-a2",
          "type": "animation",
          "title": "Risk Appetite vs. Tolerance",
          "content": "An animated gauge showing the difference between a company's broad risk appetite and its specific, measurable risk tolerances."
        }
      ],
      "imageUrl": "/generated-images/refinery/accounting-finance-401-l05.png"
    },
    {
      "id": "accounting-finance-401-l06",
      "title": "Checkpoint 2: Governance & ERM",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4: A stylized golden scale of justice balancing a bag of money and a shield, representing governance and risk management. Placed on a dark marble table, dramatic spotlight, photorealistic.",
      "conceptVideoPrompt": "Veo 3.1: A 3D animation of a tightrope walker successfully navigating a high wire over a modern city at dusk, symbolizing the delicate balance of risk and governance. Cinematic, breathtaking perspective.",
      "questions": [
        {
          "id": "accounting-finance-401-l06-q1",
          "text": "What is the primary purpose of the 'Agency Theory' in corporate governance?",
          "skillId": "accounting-finance-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "To address conflicts of interest between shareholders (principals) and management (agents)."
            },
            {
              "id": "b",
              "text": "To determine the optimal marketing agency for corporate branding."
            },
            {
              "id": "c",
              "text": "To calculate the exact cost of debt for a new bond issuance."
            },
            {
              "id": "d",
              "text": "To ensure all employees receive equal compensation."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Agency theory focuses on resolving the inherent conflicts of interest that arise when ownership (shareholders) is separated from control (management)."
        },
        {
          "id": "accounting-finance-401-l06-q2",
          "text": "Within the COSO ERM framework, what does 'Risk Appetite' refer to?",
          "skillId": "accounting-finance-401-skill-erm",
          "options": [
            {
              "id": "a",
              "text": "The amount of risk an organization is willing to accept in pursuit of its strategic objectives."
            },
            {
              "id": "b",
              "text": "The maximum financial loss a company can sustain before bankruptcy."
            },
            {
              "id": "c",
              "text": "The specific variance allowed around a single performance metric."
            },
            {
              "id": "d",
              "text": "The total elimination of all operational hazards."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Risk appetite is the broad-based amount and type of risk that an organization is willing to pursue or retain to achieve its goals."
        },
        {
          "id": "accounting-finance-401-l06-q3",
          "text": "Which of the following is a key characteristic of a strong, independent Board of Directors?",
          "skillId": "accounting-finance-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "A majority of directors have no material ties to the company other than their board seat."
            },
            {
              "id": "b",
              "text": "The CEO also serves as the Chairman of the Board."
            },
            {
              "id": "c",
              "text": "Board members are primarily composed of current executive management."
            },
            {
              "id": "d",
              "text": "The board relies solely on internal audits for financial oversight."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Independence requires that directors do not have financial or personal ties to the company's management that could compromise their objective oversight."
        }
      ],
      "learningAids": [
        {
          "id": "accounting-finance-401-l06-a1",
          "type": "mnemonic",
          "title": "Governance Triangle",
          "content": "Align Incentives, Ensure Independence, Monitor Performance."
        }
      ],
      "imageUrl": "/generated-images/refinery/accounting-finance-401-l06.png"
    },
    {
      "id": "accounting-finance-401-l07",
      "title": "Mergers, Acquisitions & Restructuring",
      "type": "video",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4: Two massive, glowing 3D puzzle pieces snapping together over a stylized, illuminated map of the world, representing a global corporate merger. Photorealistic, vibrant colors, 8k.",
      "conceptVideoPrompt": "Veo 3.1: A time-lapse animation of two distinct corporate skyscrapers physically merging into one massive, futuristic mega-tower. Glowing energy lines connect them, symbolizing synergy in M&A. Epic, cinematic scale.",
      "chunks": [
        {
          "id": "accounting-finance-401-l07-c1",
          "type": "text",
          "title": "The Strategic Rationale for M&A",
          "content": "Mergers and Acquisitions are powerful tools for rapid growth, but they carry immense risk. Companies pursue M&A to acquire new technologies, enter new markets, eliminate competition, or achieve economies of scale. The success of a deal hinges on the concept of 'Synergy'—the idea that the combined company will be worth more than the sum of its parts (1+1=3)."
        },
        {
          "id": "accounting-finance-401-l07-c2",
          "type": "text",
          "title": "Accretion, Dilution, and Synergies",
          "content": "Financially, a deal is evaluated on whether it is 'Accretive' (increases the acquirer's Earnings Per Share) or 'Dilutive' (decreases EPS). Synergies drive accretion. Cost synergies (e.g., firing redundant staff, consolidating software) are generally easier to achieve and measure than revenue synergies (e.g., cross-selling products to a new customer base)."
        }
      ],
      "learningAids": [
        {
          "id": "accounting-finance-401-l07-a1",
          "type": "image",
          "title": "M&A Synergy Types",
          "content": "A chart breaking down Revenue Synergies (cross-selling, pricing power) vs. Cost Synergies (economies of scale, redundant headcount)."
        },
        {
          "id": "accounting-finance-401-l07-a2",
          "type": "animation",
          "title": "Accretion vs. Dilution",
          "content": "An animated EPS (Earnings Per Share) scale showing how an acquisition can either increase (accrete) or decrease (dilute) the acquirer's EPS."
        }
      ],
      "imageUrl": "/generated-images/refinery/accounting-finance-401-l07.png"
    },
    {
      "id": "accounting-finance-401-l08",
      "title": "Financial Leadership & Communication",
      "type": "interactive",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4: A charismatic CFO presenting financial results on a large glowing stage to a packed auditorium of investors. A massive screen behind them shows upward trending graphs. Cinematic lighting, photorealistic.",
      "conceptVideoPrompt": "Veo 3.1: A first-person view of an executive drafting a strategic memo on a glass tablet. Key financial terms glow and lift off the page, floating in the air to form a cohesive, interconnected strategy map. High-tech, augmented reality aesthetic.",
      "chunks": [
        {
          "id": "accounting-finance-401-l08-c1",
          "type": "text",
          "title": "The CFO as Chief Communicator",
          "content": "Modern financial leadership extends far beyond spreadsheets. The CFO is the primary storyteller of the company's financial health and strategic direction. They must translate complex financial data into a compelling narrative for diverse stakeholders, including equity analysts, institutional investors, the Board of Directors, and employees."
        },
        {
          "id": "accounting-finance-401-l08-c2",
          "type": "text",
          "title": "Navigating Earnings Calls and Crises",
          "content": "During quarterly earnings calls or times of crisis (e.g., an earnings miss), transparency and credibility are paramount. Effective leaders do not hide behind jargon or obscure metrics. They acknowledge shortfalls, clearly explain the root causes, and outline a definitive, measurable plan for corrective action to restore market confidence."
        }
      ],
      "metadata": {
        "prompts": [
          "Draft a response to an activist investor demanding a special dividend.",
          "Explain a complex M&A transaction to non-financial stakeholders.",
          "Formulate a communication strategy for an unexpected earnings miss."
        ]
      },
      "learningAids": [
        {
          "id": "accounting-finance-401-l08-a1",
          "type": "practice",
          "title": "Earnings Call Simulation",
          "content": "Role-play as a CFO answering tough Q&A questions from equity research analysts regarding a recent margin compression."
        }
      ],
      "imageUrl": "/generated-images/refinery/accounting-finance-401-l08.png"
    },
    {
      "id": "accounting-finance-401-l09",
      "title": "Checkpoint 3: M&A and Leadership",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4: A glowing handshake between two robotic hands over a digital stock ticker, representing successful M&A and leadership. Cyberpunk aesthetic, neon blue and gold, highly detailed.",
      "conceptVideoPrompt": "Veo 3.1: A dynamic animation of a complex 3D puzzle being completed rapidly. The final piece snaps into place, triggering a burst of golden light that illuminates the entire structure, symbolizing strategic fit and successful integration.",
      "questions": [
        {
          "id": "accounting-finance-401-l09-q1",
          "text": "In an M&A transaction, what does it mean if a deal is 'accretive'?",
          "skillId": "accounting-finance-401-skill-ma",
          "options": [
            {
              "id": "a",
              "text": "The acquiring company's Earnings Per Share (EPS) will increase after the transaction."
            },
            {
              "id": "b",
              "text": "The acquiring company's EPS will decrease after the transaction."
            },
            {
              "id": "c",
              "text": "The target company is purchased entirely with debt."
            },
            {
              "id": "d",
              "text": "The transaction requires regulatory approval."
            }
          ],
          "correctOptionId": "a",
          "explanation": "An accretive deal increases the acquirer's pro forma EPS, usually because the earnings gained from the target outweigh the costs of financing the deal."
        },
        {
          "id": "accounting-finance-401-l09-q2",
          "text": "Which of the following is generally considered the most difficult type of M&A synergy to realize in practice?",
          "skillId": "accounting-finance-401-skill-ma",
          "options": [
            {
              "id": "a",
              "text": "Revenue synergies (e.g., cross-selling products)."
            },
            {
              "id": "b",
              "text": "Cost synergies (e.g., eliminating duplicate IT systems)."
            },
            {
              "id": "c",
              "text": "Headcount reductions (e.g., firing redundant executives)."
            },
            {
              "id": "d",
              "text": "Facility consolidations (e.g., closing overlapping warehouses)."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Revenue synergies rely on customer behavior and market dynamics, making them highly unpredictable and harder to achieve than internal cost-cutting measures."
        },
        {
          "id": "accounting-finance-401-l09-q3",
          "text": "When communicating an earnings miss to the market, what is the most effective strategy for a CFO?",
          "skillId": "accounting-finance-401-skill-leadership",
          "options": [
            {
              "id": "a",
              "text": "Provide transparent reasons for the miss, outline corrective actions, and adjust forward guidance realistically."
            },
            {
              "id": "b",
              "text": "Blame macroeconomic factors entirely and refuse to take questions."
            },
            {
              "id": "c",
              "text": "Obscure the miss by highlighting unrelated non-GAAP metrics."
            },
            {
              "id": "d",
              "text": "Delay the earnings release until the next quarter."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Transparency, accountability, and a clear path forward build long-term credibility with investors, even during periods of underperformance."
        }
      ],
      "learningAids": [
        {
          "id": "accounting-finance-401-l09-a1",
          "type": "mnemonic",
          "title": "M&A Success Factors",
          "content": "Strategic Fit, Accurate Valuation, and Flawless Integration."
        }
      ],
      "imageUrl": "/generated-images/refinery/accounting-finance-401-l09.png"
    },
    {
      "id": "accounting-finance-401-l10",
      "title": "Final Mastery: Strategic Finance",
      "type": "quiz",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4: A majestic, glowing platinum trophy sitting on a sleek marble pedestal in a modern financial institution. Soft volumetric lighting, photorealistic, 8k resolution.",
      "conceptVideoPrompt": "Veo 3.1: A sweeping cinematic drone shot flying over a futuristic, thriving metropolis at night. The city lights pulse with energy, representing the successful application of strategic finance leadership driving global economic growth.",
      "questions": [
        {
          "id": "accounting-finance-401-l10-q1",
          "text": "A company has a WACC of 8% and generates an ROIC of 6%. It is currently growing revenues at 15% annually. What is the strategic implication?",
          "skillId": "accounting-finance-401-skill-value",
          "options": [
            {
              "id": "a",
              "text": "The company is destroying value; growth is accelerating the value destruction."
            },
            {
              "id": "b",
              "text": "The company is creating value because revenue growth is high."
            },
            {
              "id": "c",
              "text": "The company should take on more debt to increase its WACC."
            },
            {
              "id": "d",
              "text": "The company is perfectly optimized for long-term sustainability."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Because ROIC (6%) is less than WACC (8%), the company loses money on every dollar invested. Growing at 15% only destroys value faster."
        },
        {
          "id": "accounting-finance-401-l10-q2",
          "text": "How does Enterprise Risk Management (ERM) differ from traditional risk management?",
          "skillId": "accounting-finance-401-skill-erm",
          "options": [
            {
              "id": "a",
              "text": "ERM is a holistic, portfolio view of risk integrated with strategy, rather than managing risks in isolated silos."
            },
            {
              "id": "b",
              "text": "ERM focuses exclusively on purchasing insurance policies for physical assets."
            },
            {
              "id": "c",
              "text": "ERM is only concerned with financial reporting risks, ignoring operational risks."
            },
            {
              "id": "d",
              "text": "ERM aims to eliminate all risk from the organization."
            }
          ],
          "correctOptionId": "a",
          "explanation": "ERM takes a top-down, enterprise-wide approach, recognizing that risks are interrelated and must be managed in alignment with corporate strategy."
        },
        {
          "id": "accounting-finance-401-l10-q3",
          "text": "In the context of corporate governance, what is a 'Poison Pill'?",
          "skillId": "accounting-finance-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "A shareholder rights plan designed to deter a hostile takeover by diluting the acquirer's stake."
            },
            {
              "id": "b",
              "text": "A strategy to intentionally bankrupt a company to avoid paying creditors."
            },
            {
              "id": "c",
              "text": "A toxic financial asset that must be written off the balance sheet."
            },
            {
              "id": "d",
              "text": "A mandatory retirement age for the Board of Directors."
            }
          ],
          "correctOptionId": "a",
          "explanation": "A poison pill allows existing shareholders to buy additional shares at a discount, diluting the ownership interest of a hostile acquiring party."
        }
      ],
      "learningAids": [
        {
          "id": "accounting-finance-401-l10-a1",
          "type": "mnemonic",
          "title": "The CFO's Mandate",
          "content": "Allocate Capital, Mitigate Risk, Ensure Governance, Communicate Value."
        }
      ],
      "imageUrl": "/generated-images/refinery/accounting-finance-401-l10.png"
    }
  ]
};
