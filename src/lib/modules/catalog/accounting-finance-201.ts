import type { LearningModule } from "@/lib/modules/types";

export const accounting_finance_201_Module: LearningModule = {
  "id": "accounting-finance-201",
  "title": "Accounting and Finance Practice",
  "description": "Intermediate financial analysis, managerial accounting, forecasting, and decision support frameworks.",
  "subject": "Accounting and Finance",
  "tags": [
    "curriculum",
    "interactive",
    "finance",
    "accounting",
    "business"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
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
    "Analyze financial statements using liquidity, solvency, and profitability ratios.",
    "Apply cost-volume-profit (CVP) analysis for managerial decision-making.",
    "Evaluate investment opportunities using capital budgeting techniques like NPV and IRR."
  ],
  "lessons": [
    {
      "id": "accounting-finance-201-l01",
      "title": "Financial Statement Analysis",
      "type": "video",
      "duration": 9,
      "lessonImagePrompt": "A photorealistic 8k image of a modern, sleek financial dashboard on a dark background, displaying glowing blue and green bar graphs, pie charts, and ratio indicators. Shot with a macro lens, shallow depth of field, highly detailed.",
      "conceptVideoPrompt": "A dynamic 3D animation in cinematic lighting. A balance sheet and income statement float in mid-air, then merge into a glowing magnifying glass. The glass sweeps over a digital landscape, revealing key financial ratios like 'Current Ratio' and 'Debt-to-Equity' in glowing neon text.",
      "learningAids": [
        {
          "id": "accounting-finance-201-l01-a1",
          "type": "image",
          "title": "Key Financial Ratios",
          "content": "Visual summary of Liquidity, Solvency, and Profitability ratios."
        },
        {
          "id": "accounting-finance-201-l01-a2",
          "type": "animation",
          "title": "Deconstructing the Balance Sheet",
          "content": "Step-by-step walkthrough of how assets, liabilities, and equity interact."
        }
      ]
    },
    {
      "id": "accounting-finance-201-l02",
      "title": "Calculating Key Ratios",
      "type": "interactive",
      "duration": 12,
      "lessonImagePrompt": "A photorealistic 8k close-up of an interactive digital tablet resting on a wooden desk. The screen displays a corporate balance sheet with glowing golden nodes highlighting current assets and liabilities. High-tech corporate aesthetic, soft ambient lighting.",
      "conceptVideoPrompt": "A first-person POV shot of a financial analyst's desk. The user's hands interact with a futuristic holographic display, dragging and dropping financial figures to calculate liquidity ratios. Smooth motion, professional and futuristic atmosphere, 4k resolution.",
      "metadata": {
        "prompts": [
          "Identify the formula for the Current Ratio.",
          "Calculate the ratio using the provided balance sheet data.",
          "Interpret what this ratio means for the company's short-term health."
        ]
      },
      "learningAids": [
        {
          "id": "accounting-finance-201-l02-a1",
          "type": "practice",
          "title": "Guided Ratio Practice",
          "content": "Follow the challenge flow to calculate and interpret ROE and Debt-to-Equity."
        }
      ]
    },
    {
      "id": "accounting-finance-201-l03",
      "title": "Checkpoint 1: Financial Analysis",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A stylized 3D render of a glowing neon checkpoint flag planted at the peak of a mountain made of financial trend lines and bar charts. Vibrant colors, dramatic lighting, symbolizing a learning milestone.",
      "conceptVideoPrompt": "A fast-paced, visually engaging 3D motion graphics montage. Financial terms and ratio formulas lock into place like glowing puzzle pieces. The camera pans around the completed puzzle as it emits a satisfying burst of light, symbolizing knowledge consolidation.",
      "questions": [
        {
          "id": "accounting-finance-201-l03-q1",
          "text": "What does the Current Ratio primarily measure?",
          "skillId": "accounting-finance-201-skill-liquidity",
          "options": [
            {
              "id": "a",
              "text": "A company's ability to pay off its short-term liabilities with short-term assets."
            },
            {
              "id": "b",
              "text": "The total profitability of a company over a fiscal year."
            },
            {
              "id": "c",
              "text": "The proportion of debt used to finance long-term assets."
            },
            {
              "id": "d",
              "text": "The speed at which inventory is sold."
            }
          ],
          "correctOptionId": "a",
          "explanation": "The Current Ratio (Current Assets / Current Liabilities) measures liquidity, indicating if a firm can cover its short-term obligations."
        },
        {
          "id": "accounting-finance-201-l03-q2",
          "text": "Which ratio is the best indicator of a company's long-term solvency?",
          "skillId": "accounting-finance-201-skill-solvency",
          "options": [
            {
              "id": "a",
              "text": "Debt-to-Equity Ratio"
            },
            {
              "id": "b",
              "text": "Gross Profit Margin"
            },
            {
              "id": "c",
              "text": "Quick Ratio"
            },
            {
              "id": "d",
              "text": "Return on Assets (ROA)"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The Debt-to-Equity ratio measures financial leverage and long-term solvency by comparing total liabilities to shareholder equity."
        },
        {
          "id": "accounting-finance-201-l03-q3",
          "text": "How is Return on Equity (ROE) calculated?",
          "skillId": "accounting-finance-201-skill-profitability",
          "options": [
            {
              "id": "a",
              "text": "Net Income divided by Shareholder's Equity"
            },
            {
              "id": "b",
              "text": "Gross Profit divided by Total Assets"
            },
            {
              "id": "c",
              "text": "Revenue divided by Total Liabilities"
            },
            {
              "id": "d",
              "text": "Operating Income divided by Current Assets"
            }
          ],
          "correctOptionId": "a",
          "explanation": "ROE measures how effectively management is using a company's assets to create profits, calculated as Net Income / Shareholder's Equity."
        }
      ],
      "learningAids": [
        {
          "id": "accounting-finance-201-l03-a1",
          "type": "mnemonic",
          "title": "Ratio Categories",
          "content": "Remember LSP: Liquidity (Short-term), Solvency (Long-term), Profitability (Returns)."
        }
      ]
    },
    {
      "id": "accounting-finance-201-l04",
      "title": "Cost-Volume-Profit (CVP) Analysis",
      "type": "interactive",
      "duration": 12,
      "lessonImagePrompt": "A high-quality 3D render of a break-even chart with intersecting glowing lines representing total cost and total revenue. The intersection point glows brightly in neon blue. Modern corporate aesthetic, dark background, 8k resolution.",
      "conceptVideoPrompt": "An animated isometric view of a factory production line. As products move down the belt, costs are visually split into fixed (a glowing building icon) and variable (glowing material icons). A dynamic counter shows how increasing volume pushes the profit margin above the break-even line.",
      "metadata": {
        "prompts": [
          "Identify the fixed and variable costs in the scenario.",
          "Calculate the contribution margin per unit.",
          "Determine the break-even point in units."
        ]
      },
      "learningAids": [
        {
          "id": "accounting-finance-201-l04-a1",
          "type": "practice",
          "title": "Break-Even Simulator",
          "content": "Adjust price and variable costs to see how the break-even point shifts in real-time."
        }
      ]
    },
    {
      "id": "accounting-finance-201-l05",
      "title": "Forecasting and Budgeting",
      "type": "video",
      "duration": 9,
      "lessonImagePrompt": "Creative conceptual art, photorealistic. A glowing, translucent crystal ball sits on a neat stack of leather-bound financial ledgers. Inside the crystal ball, digital trend lines project upward into the future. Cinematic lighting, 8k.",
      "conceptVideoPrompt": "A smooth time-lapse animation. A sleek desk calendar flips its pages rapidly while a digital cash flow statement next to it dynamically updates. Green and red numbers fluctuate, showing projected revenues and expenses over a fiscal year, ending on a positive green balance.",
      "learningAids": [
        {
          "id": "accounting-finance-201-l05-a1",
          "type": "image",
          "title": "Pro-Forma Statements",
          "content": "Visual guide to building projected income statements and balance sheets."
        },
        {
          "id": "accounting-finance-201-l05-a2",
          "type": "animation",
          "title": "The Cash Conversion Cycle",
          "content": "Animated flow of cash from inventory purchase to collecting accounts receivable."
        }
      ]
    },
    {
      "id": "accounting-finance-201-l06",
      "title": "Checkpoint 2: Managerial Accounting",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A 3D illustration of a glowing futuristic archery target with a glowing arrow perfectly in the bullseye. The target is surrounded by floating financial forecasting charts and graphs. High contrast, vibrant colors, 8k.",
      "conceptVideoPrompt": "A seamless visual transition. A 2D break-even chart smoothly transforms into a 3D thriving futuristic city skyline, representing a successful financial forecast. The camera sweeps through the city, highlighting the connection between smart cost management and future growth.",
      "questions": [
        {
          "id": "accounting-finance-201-l06-q1",
          "text": "In Cost-Volume-Profit analysis, what defines the break-even point?",
          "skillId": "accounting-finance-201-skill-cvp",
          "options": [
            {
              "id": "a",
              "text": "The sales level where total revenues equal total costs."
            },
            {
              "id": "b",
              "text": "The point where variable costs exceed fixed costs."
            },
            {
              "id": "c",
              "text": "The maximum production capacity of a facility."
            },
            {
              "id": "d",
              "text": "The sales level that maximizes net income."
            }
          ],
          "correctOptionId": "a",
          "explanation": "At the break-even point, a company makes exactly zero profit, meaning total revenues perfectly cover both fixed and variable costs."
        },
        {
          "id": "accounting-finance-201-l06-q2",
          "text": "Which of the following is typically considered a variable cost?",
          "skillId": "accounting-finance-201-skill-costs",
          "options": [
            {
              "id": "a",
              "text": "Direct materials used in production"
            },
            {
              "id": "b",
              "text": "Monthly factory rent"
            },
            {
              "id": "c",
              "text": "Annual insurance premiums"
            },
            {
              "id": "d",
              "text": "Salaries of executive management"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Variable costs fluctuate directly with production volume. Direct materials increase as more units are produced."
        },
        {
          "id": "accounting-finance-201-l06-q3",
          "text": "What is the primary purpose of a pro-forma income statement?",
          "skillId": "accounting-finance-201-skill-forecasting",
          "options": [
            {
              "id": "a",
              "text": "To project future profitability based on specific assumptions."
            },
            {
              "id": "b",
              "text": "To report historical tax liabilities to the government."
            },
            {
              "id": "c",
              "text": "To calculate the exact amount of cash currently in the bank."
            },
            {
              "id": "d",
              "text": "To audit past financial discrepancies."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Pro-forma statements are forward-looking documents used for forecasting and planning future financial performance."
        }
      ],
      "learningAids": [
        {
          "id": "accounting-finance-201-l06-a1",
          "type": "mnemonic",
          "title": "Contribution Margin",
          "content": "Contribution Margin = Sales - Variable Costs. It 'contributes' to paying off fixed costs!"
        }
      ]
    },
    {
      "id": "accounting-finance-201-l07",
      "title": "Capital Budgeting & Decision Support",
      "type": "video",
      "duration": 9,
      "lessonImagePrompt": "Cinematic, photorealistic 8k image. Two glowing, diverging paths in a modern digital landscape. One path leads to a high-tech factory, the other to a sleek startup skyscraper. Floating holographic dollar signs hover above the paths, symbolizing investment choices.",
      "conceptVideoPrompt": "A high-quality 3D animation of a sleek, modern balance scale. On one side, a stack of money representing 'Today'. On the other, a larger, glowing stack representing 'Future'. The scale tips, illustrating the time value of money and Net Present Value. Smooth camera orbit.",
      "learningAids": [
        {
          "id": "accounting-finance-201-l07-a1",
          "type": "image",
          "title": "Time Value of Money",
          "content": "Visual timeline showing how discounting future cash flows brings them to Present Value."
        },
        {
          "id": "accounting-finance-201-l07-a2",
          "type": "animation",
          "title": "NPV vs. IRR",
          "content": "Animated comparison of Net Present Value and Internal Rate of Return methodologies."
        }
      ]
    },
    {
      "id": "accounting-finance-201-l08",
      "title": "Evaluating Investment Projects",
      "type": "interactive",
      "duration": 12,
      "lessonImagePrompt": "A photorealistic 8k close-up of a futuristic, transparent calculator on a glass desk. Holographic numbers and the letters 'NPV' and 'IRR' float brightly above the device. High-tech finance concept, shallow depth of field, neon accents.",
      "conceptVideoPrompt": "A sleek user interface animation. A cursor inputs an initial investment amount and future cash flows into a modern dashboard. The system instantly processes the data with a glowing loading ring, then boldly displays a positive Net Present Value in bright green. Smooth, satisfying motion.",
      "metadata": {
        "prompts": [
          "List the expected cash flows for the project.",
          "Apply the discount rate to find the Present Value of each cash flow.",
          "Calculate the final NPV and state whether the project should be accepted."
        ]
      },
      "learningAids": [
        {
          "id": "accounting-finance-201-l08-a1",
          "type": "practice",
          "title": "NPV Calculator Challenge",
          "content": "Evaluate three competing projects and select the one that maximizes shareholder value."
        }
      ]
    },
    {
      "id": "accounting-finance-201-l09",
      "title": "Checkpoint 3: Capital Budgeting",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A photorealistic 8k image of a heavy, ornate golden key unlocking a futuristic, glowing vault door. Inside the vault, streams of digital data and financial projections shine brightly. Represents mastery of capital budgeting.",
      "conceptVideoPrompt": "A rapid, engaging 3D motion graphics review of investment appraisal techniques. A series of project proposals slide into view. A glowing green checkmark stamps projects with positive NPV, while a red X stamps negative NPV projects. Dynamic camera movements.",
      "questions": [
        {
          "id": "accounting-finance-201-l09-q1",
          "text": "What does a positive Net Present Value (NPV) indicate about a proposed project?",
          "skillId": "accounting-finance-201-skill-npv",
          "options": [
            {
              "id": "a",
              "text": "The project's returns exceed the cost of capital, adding value to the firm."
            },
            {
              "id": "b",
              "text": "The project will never recover its initial investment."
            },
            {
              "id": "c",
              "text": "The Internal Rate of Return is lower than the discount rate."
            },
            {
              "id": "d",
              "text": "The project has zero risk."
            }
          ],
          "correctOptionId": "a",
          "explanation": "A positive NPV means the present value of cash inflows is greater than the present value of outflows, indicating the investment is profitable."
        },
        {
          "id": "accounting-finance-201-l09-q2",
          "text": "How is the Internal Rate of Return (IRR) defined?",
          "skillId": "accounting-finance-201-skill-irr",
          "options": [
            {
              "id": "a",
              "text": "The discount rate that makes the Net Present Value of a project exactly zero."
            },
            {
              "id": "b",
              "text": "The interest rate a bank charges for a corporate loan."
            },
            {
              "id": "c",
              "text": "The total percentage of profit made over the life of a project."
            },
            {
              "id": "d",
              "text": "The time it takes to recover the initial investment."
            }
          ],
          "correctOptionId": "a",
          "explanation": "IRR is the break-even discount rate. If a project's IRR is higher than the company's required rate of return, it is typically accepted."
        },
        {
          "id": "accounting-finance-201-l09-q3",
          "text": "What is a major limitation of the Payback Period method?",
          "skillId": "accounting-finance-201-skill-payback",
          "options": [
            {
              "id": "a",
              "text": "It ignores the time value of money and cash flows occurring after the payback period."
            },
            {
              "id": "b",
              "text": "It is too complex to calculate for small businesses."
            },
            {
              "id": "c",
              "text": "It only works for projects with negative cash flows."
            },
            {
              "id": "d",
              "text": "It requires knowing the exact Internal Rate of Return beforehand."
            }
          ],
          "correctOptionId": "a",
          "explanation": "While simple, the payback period fails to account for the time value of money and ignores any profits generated after the initial cost is recovered."
        }
      ],
      "learningAids": [
        {
          "id": "accounting-finance-201-l09-a1",
          "type": "mnemonic",
          "title": "NPV Rule",
          "content": "If NPV is Positive, Proceed. If NPV is Negative, Neglect."
        }
      ]
    },
    {
      "id": "accounting-finance-201-l10",
      "title": "Final Assessment: Accounting & Finance",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A photorealistic 8k image of a grand, modern graduation cap with a golden tassel, resting elegantly on a stack of advanced finance textbooks and a glowing digital tablet. Warm, inspiring lighting, shallow depth of field.",
      "conceptVideoPrompt": "A sweeping, cinematic drone-style camera move over a futuristic, thriving financial district at golden hour. Sun flares reflect off glass skyscrapers. The scene symbolizes the completion of the intermediate finance journey and readiness for the real world. Epic, uplifting atmosphere.",
      "questions": [
        {
          "id": "accounting-finance-201-l10-q1",
          "text": "Which financial statement provides a snapshot of a company's financial position at a specific point in time?",
          "skillId": "accounting-finance-201-skill-statements",
          "options": [
            {
              "id": "a",
              "text": "Balance Sheet"
            },
            {
              "id": "b",
              "text": "Income Statement"
            },
            {
              "id": "c",
              "text": "Statement of Cash Flows"
            },
            {
              "id": "d",
              "text": "Statement of Retained Earnings"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The Balance Sheet shows Assets, Liabilities, and Equity at an exact date, unlike the Income Statement which covers a period of time."
        },
        {
          "id": "accounting-finance-201-l10-q2",
          "text": "If a company wants to improve its profit margin without raising the prices of its products, what must it do?",
          "skillId": "accounting-finance-201-skill-profitability",
          "options": [
            {
              "id": "a",
              "text": "Reduce its operating costs or cost of goods sold."
            },
            {
              "id": "b",
              "text": "Issue more shares of common stock."
            },
            {
              "id": "c",
              "text": "Take out a larger bank loan."
            },
            {
              "id": "d",
              "text": "Increase its accounts receivable."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Profit margin is Net Income / Revenue. If revenue (prices) cannot increase, the only way to increase net income is to decrease expenses."
        },
        {
          "id": "accounting-finance-201-l10-q3",
          "text": "Why is cash flow forecasting critical for a growing business?",
          "skillId": "accounting-finance-201-skill-forecasting",
          "options": [
            {
              "id": "a",
              "text": "To ensure sufficient liquidity to meet upcoming obligations and fund expansion."
            },
            {
              "id": "b",
              "text": "To guarantee that the company will never face competition."
            },
            {
              "id": "c",
              "text": "To replace the need for an annual tax return."
            },
            {
              "id": "d",
              "text": "To artificially inflate the company's stock price."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Even profitable companies can go bankrupt if they run out of cash. Forecasting ensures the business can pay its bills while growing."
        },
        {
          "id": "accounting-finance-201-l10-q4",
          "text": "Which capital budgeting metric represents the discount rate at which the Net Present Value of a project is exactly zero?",
          "skillId": "accounting-finance-201-skill-irr",
          "options": [
            {
              "id": "a",
              "text": "Internal Rate of Return (IRR)"
            },
            {
              "id": "b",
              "text": "Return on Investment (ROI)"
            },
            {
              "id": "c",
              "text": "Payback Period"
            },
            {
              "id": "d",
              "text": "Weighted Average Cost of Capital (WACC)"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The Internal Rate of Return (IRR) is the specific discount rate that makes the present value of cash inflows equal to the initial investment, resulting in an NPV of zero."
        },
        {
          "id": "accounting-finance-201-l10-q5",
          "text": "If a company's fixed costs increase but its variable costs and selling price remain the same, what happens to the break-even point?",
          "skillId": "accounting-finance-201-skill-cvp",
          "options": [
            {
              "id": "a",
              "text": "The break-even point increases."
            },
            {
              "id": "b",
              "text": "The break-even point decreases."
            },
            {
              "id": "c",
              "text": "The break-even point remains unchanged."
            },
            {
              "id": "d",
              "text": "The contribution margin per unit decreases."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Because the company now has higher fixed costs to cover, it must sell more units to reach the break-even point."
        }
      ],
      "learningAids": [
        {
          "id": "accounting-finance-201-l10-a1",
          "type": "mnemonic",
          "title": "Module Summary",
          "content": "Analyze the past (Ratios), manage the present (CVP), and plan the future (NPV/Forecasting)."
        }
      ]
    }
  ]
};
