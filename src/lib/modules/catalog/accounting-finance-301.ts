import type { LearningModule } from "@/lib/modules/types";

export const accounting_finance_301_Module: LearningModule = {
  "id": "accounting-finance-301",
  "title": "Corporate Finance and Control",
  "description": "Advanced corporate finance, valuation, capital planning, controls, and performance management.",
  "subject": "Accounting and Finance",
  "tags": [
    "curriculum",
    "interactive",
    "finance",
    "valuation",
    "capital-budgeting"
  ],
  "minAge": 16,
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
    "Master corporate valuation techniques including Discounted Cash Flow (DCF)",
    "Evaluate investment opportunities using NPV, IRR, and capital budgeting",
    "Design and implement robust financial controls and risk management strategies",
    "Analyze corporate performance using advanced KPIs like EVA and ROI"
  ],
  "lessons": [
    {
      "id": "accounting-finance-301-l01",
      "title": "Introduction to Corporate Valuation & DCF",
      "type": "video",
      "duration": 9,
      "lessonImagePrompt": "A sleek, modern corporate boardroom with a glowing holographic projection of a Discounted Cash Flow (DCF) financial model on the table, photorealistic, cinematic lighting.",
      "conceptVideoPrompt": "A dynamic 3D animation showing cash flows moving along a timeline, shrinking as they are discounted back to present value, with a sleek corporate aesthetic.",
      "learningAids": [
        {
          "id": "accounting-finance-301-l01-a1",
          "type": "image",
          "title": "DCF Concept Card",
          "content": "Visual summary of the Discounted Cash Flow formula: PV = CF1/(1+r)^1 + CF2/(1+r)^2 + ... + Terminal Value."
        },
        {
          "id": "accounting-finance-301-l01-a2",
          "type": "animation",
          "title": "Discounting in Action",
          "content": "Step-by-step walkthrough showing how future cash flows lose present value as the discount rate increases."
        }
      ],
      "imageUrl": "/generated-images/refinery/accounting-finance-301-l01.png"
    },
    {
      "id": "accounting-finance-301-l02",
      "title": "Calculating the Cost of Capital (WACC)",
      "type": "interactive",
      "duration": 12,
      "lessonImagePrompt": "A stylized balance scale balancing equity and debt, with glowing percentage signs, set against a dark blue financial background, 3D render.",
      "conceptVideoPrompt": "An interactive dashboard animation where sliders for debt and equity adjust a central WACC percentage gauge in real-time.",
      "metadata": {
        "prompts": [
          "Define Weighted Average Cost of Capital (WACC) in your own words.",
          "Calculate WACC given 60% equity at a 10% cost and 40% debt at a 5% cost (ignore taxes).",
          "Explain why debt is often considered a cheaper source of financing than equity."
        ]
      },
      "learningAids": [
        {
          "id": "accounting-finance-301-l02-a1",
          "type": "practice",
          "title": "WACC Calculation Practice",
          "content": "Follow the challenge flow to calculate WACC for a sample tech company, factoring in the corporate tax shield."
        }
      ],
      "imageUrl": "/generated-images/refinery/accounting-finance-301-l02.png"
    },
    {
      "id": "accounting-finance-301-l03",
      "title": "Checkpoint 1: Valuation & Cost of Capital",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A glowing checkpoint gate in a futuristic financial district, symbolizing passing a milestone in valuation knowledge.",
      "conceptVideoPrompt": "A fast-paced montage of financial charts, DCF models, and WACC calculations resolving into a glowing checkmark.",
      "questions": [
        {
          "id": "accounting-finance-301-l03-q1",
          "text": "What is the primary purpose of a Discounted Cash Flow (DCF) valuation?",
          "skillId": "accounting-finance-301-skill-valuation",
          "options": [
            {
              "id": "a",
              "text": "To find the intrinsic value of an asset based on its projected future cash flows."
            },
            {
              "id": "b",
              "text": "To determine the historical book value of a company's assets."
            },
            {
              "id": "c",
              "text": "To calculate the exact amount of dividends paid last year."
            },
            {
              "id": "d",
              "text": "To measure the short-term liquidity of a business."
            }
          ],
          "correctOptionId": "a",
          "explanation": "DCF valuation estimates the intrinsic value of an investment based on its expected future cash flows, discounted back to today's dollars."
        },
        {
          "id": "accounting-finance-301-l03-q2",
          "text": "How does an increase in the corporate tax rate generally affect a company's WACC, assuming it holds debt?",
          "skillId": "accounting-finance-301-skill-wacc",
          "options": [
            {
              "id": "a",
              "text": "It decreases WACC because the tax shield on debt interest becomes more valuable."
            },
            {
              "id": "b",
              "text": "It increases WACC because taxes reduce overall net income."
            },
            {
              "id": "c",
              "text": "It has no effect on WACC."
            },
            {
              "id": "d",
              "text": "It increases the cost of equity, thereby increasing WACC."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Interest on debt is tax-deductible. A higher tax rate increases this 'tax shield', lowering the after-tax cost of debt and thus lowering the overall WACC."
        },
        {
          "id": "accounting-finance-301-l03-q3",
          "text": "Which component is typically the most expensive in a company's capital structure?",
          "skillId": "accounting-finance-301-skill-wacc",
          "options": [
            {
              "id": "a",
              "text": "Cost of Equity"
            },
            {
              "id": "b",
              "text": "Cost of Senior Debt"
            },
            {
              "id": "c",
              "text": "Cost of Short-term Debt"
            },
            {
              "id": "d",
              "text": "Accounts Payable"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Equity is generally more expensive than debt because equity investors take on more risk (they are paid last in the event of bankruptcy) and require a higher expected return."
        }
      ],
      "learningAids": [
        {
          "id": "accounting-finance-301-l03-a1",
          "type": "mnemonic",
          "title": "WACC Memory Cue",
          "content": "Remember: Debt is Deductible. The tax shield makes debt cheaper than equity."
        }
      ],
      "imageUrl": "/generated-images/refinery/accounting-finance-301-l03.png"
    },
    {
      "id": "accounting-finance-301-l04",
      "title": "Capital Budgeting: NPV and IRR",
      "type": "interactive",
      "duration": 12,
      "lessonImagePrompt": "Two glowing paths diverging, one labeled NPV and the other IRR, with a businessman looking at a holographic compass, cinematic.",
      "conceptVideoPrompt": "A visual comparison of two investment projects, showing their cash flows over time and calculating NPV and IRR side-by-side.",
      "metadata": {
        "prompts": [
          "Explain the difference between Net Present Value (NPV) and Internal Rate of Return (IRR).",
          "Evaluate a project with an NPV of $50,000 and an IRR of 12% (assuming a hurdle rate of 10%). Should it be accepted?",
          "Why is NPV generally preferred over IRR when evaluating mutually exclusive projects?"
        ]
      },
      "learningAids": [
        {
          "id": "accounting-finance-301-l04-a1",
          "type": "practice",
          "title": "Project Selection Practice",
          "content": "Compare Project Alpha and Project Beta using NPV and IRR, and record your final investment recommendation."
        }
      ],
      "imageUrl": "/generated-images/refinery/accounting-finance-301-l04.png"
    },
    {
      "id": "accounting-finance-301-l05",
      "title": "Financial Controls & Risk Management",
      "type": "video",
      "duration": 9,
      "lessonImagePrompt": "A high-tech digital vault with glowing padlocks and financial data streams, representing internal controls and risk management.",
      "conceptVideoPrompt": "An animation showing a company's financial pipeline with various 'valves' and 'filters' representing internal controls preventing leaks and fraud.",
      "learningAids": [
        {
          "id": "accounting-finance-301-l05-a1",
          "type": "image",
          "title": "Internal Controls Framework",
          "content": "Visual summary of the COSO framework: Control Environment, Risk Assessment, Control Activities, Information, and Monitoring."
        },
        {
          "id": "accounting-finance-301-l05-a2",
          "type": "animation",
          "title": "Segregation of Duties",
          "content": "Animated scenario showing why the person who approves an invoice should not be the same person who signs the check."
        }
      ],
      "imageUrl": "/generated-images/refinery/accounting-finance-301-l05.png"
    },
    {
      "id": "accounting-finance-301-l06",
      "title": "Checkpoint 2: Capital Planning & Controls",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A futuristic shield protecting a stack of gold coins and data servers, symbolizing financial control.",
      "conceptVideoPrompt": "A quick review animation highlighting NPV formulas and a shield deflecting financial risks.",
      "questions": [
        {
          "id": "accounting-finance-301-l06-q1",
          "text": "If a project's Net Present Value (NPV) is positive, what does it mathematically imply about its Internal Rate of Return (IRR)?",
          "skillId": "accounting-finance-301-skill-capital-budgeting",
          "options": [
            {
              "id": "a",
              "text": "The IRR is greater than the cost of capital (discount rate)."
            },
            {
              "id": "b",
              "text": "The IRR is exactly zero."
            },
            {
              "id": "c",
              "text": "The IRR is less than the cost of capital."
            },
            {
              "id": "d",
              "text": "The IRR is negative."
            }
          ],
          "correctOptionId": "a",
          "explanation": "A positive NPV means the project generates returns higher than the required discount rate, which means its IRR must be higher than that discount rate."
        },
        {
          "id": "accounting-finance-301-l06-q2",
          "text": "What is the primary purpose of 'segregation of duties' in financial controls?",
          "skillId": "accounting-finance-301-skill-controls",
          "options": [
            {
              "id": "a",
              "text": "To prevent fraud and errors by ensuring no single individual has control over all phases of a transaction."
            },
            {
              "id": "b",
              "text": "To reduce the number of employees needed in the accounting department."
            },
            {
              "id": "c",
              "text": "To speed up the processing time of financial transactions."
            },
            {
              "id": "d",
              "text": "To ensure all employees are cross-trained in every department."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Segregation of duties is a key internal control intended to prevent fraud and error by dividing tasks among different people."
        },
        {
          "id": "accounting-finance-301-l06-q3",
          "text": "Which risk management strategy involves using financial instruments like derivatives to offset potential losses?",
          "skillId": "accounting-finance-301-skill-risk",
          "options": [
            {
              "id": "a",
              "text": "Hedging"
            },
            {
              "id": "b",
              "text": "Diversification"
            },
            {
              "id": "c",
              "text": "Bootstrapping"
            },
            {
              "id": "d",
              "text": "Amortization"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Hedging involves taking an offsetting position in a related asset (often a derivative) to mitigate price risk."
        }
      ],
      "learningAids": [
        {
          "id": "accounting-finance-301-l06-a1",
          "type": "mnemonic",
          "title": "NPV Rule",
          "content": "If NPV is positive, the project adds value. Accept it!"
        }
      ],
      "imageUrl": "/generated-images/refinery/accounting-finance-301-l06.png"
    },
    {
      "id": "accounting-finance-301-l07",
      "title": "Performance Management & KPIs",
      "type": "video",
      "duration": 9,
      "lessonImagePrompt": "A futuristic command center dashboard with glowing gauges, charts, and KPIs like EVA and ROI, photorealistic.",
      "conceptVideoPrompt": "A dynamic zoom-in on a corporate dashboard where metrics like Economic Value Added (EVA) and Return on Investment (ROI) update in real-time.",
      "learningAids": [
        {
          "id": "accounting-finance-301-l07-a1",
          "type": "image",
          "title": "EVA Concept Card",
          "content": "Visual breakdown of Economic Value Added: Net Operating Profit After Taxes (NOPAT) - (Invested Capital * WACC)."
        },
        {
          "id": "accounting-finance-301-l07-a2",
          "type": "animation",
          "title": "ROI vs. Residual Income",
          "content": "Animated comparison showing how ROI can sometimes discourage profitable investments, whereas Residual Income encourages them."
        }
      ],
      "imageUrl": "/generated-images/refinery/accounting-finance-301-l07.png"
    },
    {
      "id": "accounting-finance-301-l08",
      "title": "Scenario Analysis & Forecasting",
      "type": "interactive",
      "duration": 12,
      "lessonImagePrompt": "A glowing crystal ball showing multiple branching timelines of financial charts, representing scenario analysis.",
      "conceptVideoPrompt": "An animation of a financial model shifting between 'Best Case', 'Base Case', and 'Worst Case' scenarios, showing changing revenue curves.",
      "metadata": {
        "prompts": [
          "Define scenario analysis in the context of financial forecasting.",
          "Outline the key assumptions you would change to create a 'worst-case' revenue forecast for a retail business.",
          "How does sensitivity analysis differ from scenario analysis?"
        ]
      },
      "learningAids": [
        {
          "id": "accounting-finance-301-l08-a1",
          "type": "practice",
          "title": "Forecasting Challenge",
          "content": "Adjust the variables in the interactive model to build a base, best, and worst-case scenario for next year's budget."
        }
      ],
      "imageUrl": "/generated-images/refinery/accounting-finance-301-l08.png"
    },
    {
      "id": "accounting-finance-301-l09",
      "title": "Checkpoint 3: Performance & Forecasting",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A glowing target with an arrow dead center, surrounded by financial data, symbolizing accurate forecasting and performance.",
      "conceptVideoPrompt": "A rapid sequence showing a target being hit, followed by a graph projecting future growth based on historical data.",
      "questions": [
        {
          "id": "accounting-finance-301-l09-q1",
          "text": "What does Economic Value Added (EVA) primarily measure?",
          "skillId": "accounting-finance-301-skill-performance",
          "options": [
            {
              "id": "a",
              "text": "The true economic profit of a company after deducting the cost of all capital employed."
            },
            {
              "id": "b",
              "text": "The total revenue generated by a company in a fiscal year."
            },
            {
              "id": "c",
              "text": "The market share a company has gained over its competitors."
            },
            {
              "id": "d",
              "text": "The gross profit margin before operating expenses."
            }
          ],
          "correctOptionId": "a",
          "explanation": "EVA measures economic profit by subtracting the cost of capital from operating profit, showing if a company is truly creating wealth."
        },
        {
          "id": "accounting-finance-301-l09-q2",
          "text": "In financial forecasting, what is the main focus of sensitivity analysis?",
          "skillId": "accounting-finance-301-skill-forecasting",
          "options": [
            {
              "id": "a",
              "text": "Testing how changes in one specific variable affect the overall outcome."
            },
            {
              "id": "b",
              "text": "Changing all variables simultaneously to create a completely new business model."
            },
            {
              "id": "c",
              "text": "Reviewing historical financial statements for accounting errors."
            },
            {
              "id": "d",
              "text": "Calculating the exact date a company will run out of cash."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Sensitivity analysis isolates one variable (like price or volume) to see how sensitive the final outcome (like NPV or profit) is to changes in that single input."
        },
        {
          "id": "accounting-finance-301-l09-q3",
          "text": "Which KPI is most commonly used to measure the efficiency of an investment relative to its cost?",
          "skillId": "accounting-finance-301-skill-performance",
          "options": [
            {
              "id": "a",
              "text": "Return on Investment (ROI)"
            },
            {
              "id": "b",
              "text": "Earnings Before Interest and Taxes (EBIT)"
            },
            {
              "id": "c",
              "text": "Current Ratio"
            },
            {
              "id": "d",
              "text": "Days Sales Outstanding (DSO)"
            }
          ],
          "correctOptionId": "a",
          "explanation": "ROI directly measures the gain or loss generated on an investment relative to the amount of money invested."
        }
      ],
      "learningAids": [
        {
          "id": "accounting-finance-301-l09-a1",
          "type": "mnemonic",
          "title": "Forecasting Cue",
          "content": "Sensitivity = Single variable. Scenario = Several variables."
        }
      ],
      "imageUrl": "/generated-images/refinery/accounting-finance-301-l09.png"
    },
    {
      "id": "accounting-finance-301-l10",
      "title": "Final Assessment: Corporate Finance Mastery",
      "type": "quiz",
      "duration": 15,
      "lessonImagePrompt": "A grand, futuristic trophy made of glowing digital data and gold, representing mastery of corporate finance.",
      "conceptVideoPrompt": "A celebratory animation summarizing DCF, WACC, NPV, and KPIs, culminating in a golden mastery badge.",
      "questions": [
        {
          "id": "accounting-finance-301-l10-q1",
          "text": "When valuing a company using DCF, why is Free Cash Flow (FCF) used instead of Net Income?",
          "skillId": "accounting-finance-301-skill-valuation",
          "options": [
            {
              "id": "a",
              "text": "FCF represents the actual cash available to investors, excluding non-cash expenses and accounting for capital expenditures."
            },
            {
              "id": "b",
              "text": "Net Income is illegal to use in corporate valuation models."
            },
            {
              "id": "c",
              "text": "FCF is always a higher number than Net Income, making the company look better."
            },
            {
              "id": "d",
              "text": "Net Income does not include revenue from sales."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Net Income includes non-cash items like depreciation and ignores capital expenditures. FCF measures the actual cash generated that can be distributed to investors."
        },
        {
          "id": "accounting-finance-301-l10-q2",
          "text": "A company has a WACC of 8%. Project A has an IRR of 7% and Project B has an IRR of 10%. Assuming they are independent projects, which should be accepted?",
          "skillId": "accounting-finance-301-skill-capital-budgeting",
          "options": [
            {
              "id": "a",
              "text": "Project B only."
            },
            {
              "id": "b",
              "text": "Project A only."
            },
            {
              "id": "c",
              "text": "Both Project A and Project B."
            },
            {
              "id": "d",
              "text": "Neither project."
            }
          ],
          "correctOptionId": "a",
          "explanation": "A project should be accepted if its IRR exceeds the cost of capital (WACC). Project B (10%) > WACC (8%), while Project A (7%) < WACC (8%)."
        },
        {
          "id": "accounting-finance-301-l10-q3",
          "text": "What is widely considered the primary goal of corporate financial management?",
          "skillId": "accounting-finance-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Maximizing shareholder value."
            },
            {
              "id": "b",
              "text": "Maximizing short-term accounting profits."
            },
            {
              "id": "c",
              "text": "Minimizing all corporate taxes to zero."
            },
            {
              "id": "d",
              "text": "Eliminating all corporate debt."
            }
          ],
          "correctOptionId": "a",
          "explanation": "The fundamental objective of corporate finance is to maximize the long-term value of the firm for its shareholders."
        }
      ],
      "learningAids": [
        {
          "id": "accounting-finance-301-l10-a1",
          "type": "mnemonic",
          "title": "Mastery Review",
          "content": "Value is driven by Cash Flows, Risk (WACC), and Growth. Keep these three pillars in mind for all financial decisions."
        }
      ],
      "imageUrl": "/generated-images/refinery/accounting-finance-301-l10.png"
    }
  ]
};
