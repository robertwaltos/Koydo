import type { LearningModule } from "@/lib/modules/types";

export const renewable_energy_systems_401_Module: LearningModule = {
  "id": "renewable-energy-systems-401",
  "title": "Renewable Energy Systems Leadership",
  "description": "An advanced module for senior leaders on developing and executing renewable energy strategy, navigating policy, overcoming financial constraints, and managing system-wide grid integration.",
  "subject": "Renewable Energy",
  "tags": [
    "strategy",
    "finance",
    "policy",
    "grid integration",
    "leadership"
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
  "thumbnail": "/placeholders/lesson-grid-integration.svg",
  "learningObjectives": [
    "Analyze the impact of energy policies and regulatory frameworks on project viability.",
    "Evaluate renewable energy projects using key financial metrics like LCOE, IRR, and NPV.",
    "Develop strategies for integrating variable renewable energy sources into existing power grids.",
    "Formulate a comprehensive renewable energy strategy for a utility or corporation."
  ],
  "lessons": [
    {
      "id": "renewable-energy-systems-401-l01",
      "title": "Global Energy Transition & Strategic Frameworks",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "renewable-energy-systems-401-l01-a1",
          "type": "image",
          "title": "The Energy Trilemma",
          "content": "Infographic illustrating the balance between Energy Security, Energy Equity, and Environmental Sustainability."
        },
        {
          "id": "renewable-energy-systems-401-l01-a2",
          "type": "animation",
          "title": "Global Renewable Capacity Growth (2000-Present)",
          "content": "A time-lapse map visualizing the global expansion of wind, solar, and other renewable installations."
        }
      ]
    },
    {
      "id": "renewable-energy-systems-401-l02",
      "title": "Navigating Policy and Regulatory Landscapes",
      "type": "video",
      "duration": 18,
      "learningAids": [
        {
          "id": "renewable-energy-systems-401-l02-a1",
          "type": "image",
          "title": "Policy Mechanism Comparison",
          "content": "A chart comparing the mechanics and outcomes of Feed-in Tariffs (FiTs), Renewable Portfolio Standards (RPS), and Carbon Pricing."
        }
      ]
    },
    {
      "id": "renewable-energy-systems-401-l03",
      "title": "Interactive Case Study: Policy Impact Analysis",
      "type": "interactive",
      "duration": 25,
      "metadata": {
        "prompts": [
          "Given the introduction of a new carbon tax, identify the primary financial impacts on a mixed-asset portfolio (solar, wind, natural gas).",
          "Model the projected change in profitability for the utility's solar division over a 5-year period.",
          "Propose a strategic response to the new policy, such as asset divestment, new investment, or operational changes."
        ]
      },
      "learningAids": [
        {
          "id": "renewable-energy-systems-401-l03-a1",
          "type": "practice",
          "title": "Policy Scenario Simulator",
          "content": "Analyze a case study and use an embedded spreadsheet to model the financial outcomes of a new energy policy."
        }
      ]
    },
    {
      "id": "renewable-energy-systems-401-l04",
      "title": "Checkpoint: Strategy and Policy",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "renewable-energy-systems-401-l04-q1",
          "text": "Which policy mechanism directly guarantees a fixed price per unit of energy for renewable producers, reducing market risk?",
          "skillId": "renewable-energy-systems-401-skill-policy",
          "options": [
            {
              "id": "a",
              "text": "Feed-in Tariff (FiT)"
            },
            {
              "id": "b",
              "text": "Renewable Portfolio Standard (RPS)"
            },
            {
              "id": "c",
              "text": "Carbon Tax"
            },
            {
              "id": "d",
              "text": "Net Metering"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A Feed-in Tariff provides a long-term, guaranteed price for renewable energy fed into the grid, offering revenue certainty to investors."
        },
        {
          "id": "renewable-energy-systems-401-l04-q2",
          "text": "What is a primary strategic consideration when translating a national Renewable Portfolio Standard (RPS) into a corporate investment plan?",
          "skillId": "renewable-energy-systems-401-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "The cost and availability of Renewable Energy Credits (RECs) versus building new generation assets."
            },
            {
              "id": "b",
              "text": "The specific chemical composition of solar panels."
            },
            {
              "id": "c",
              "text": "The marketing budget for the previous fiscal year."
            },
            {
              "id": "d",
              "text": "The CEO's personal preference for wind turbines."
            }
          ],
          "correctOptionId": "a"
        }
      ]
    },
    {
      "id": "renewable-energy-systems-401-l05",
      "title": "Financing Renewable Energy Projects",
      "type": "video",
      "duration": 20,
      "learningAids": [
        {
          "id": "renewable-energy-systems-401-l05-a1",
          "type": "image",
          "title": "LCOE Formula Breakdown",
          "content": "A visual breakdown of the Levelized Cost of Energy (LCOE) formula, explaining each variable (CAPEX, O&M, fuel cost, discount rate, lifetime output)."
        },
        {
          "id": "renewable-energy-systems-401-l05-a2",
          "type": "animation",
          "title": "Project Finance Structure",
          "content": "An animated flowchart showing the relationships between sponsors, lenders, and the Special Purpose Vehicle (SPV) in a typical project finance deal."
        }
      ]
    },
    {
      "id": "renewable-energy-systems-401-l06",
      "title": "Simulation: Financial Modeling for a Solar PV Project",
      "type": "interactive",
      "duration": 30,
      "metadata": {
        "prompts": [
          "Adjust the capital expenditure (CAPEX) by -10% and record the new Internal Rate of Return (IRR).",
          "Determine the minimum Power Purchase Agreement (PPA) price required to achieve a target equity IRR of 12%.",
          "Perform a sensitivity analysis to identify which variable (CAPEX, O&M costs, or capacity factor) has the greatest impact on the project's Net Present Value (NPV)."
        ]
      },
      "learningAids": [
        {
          "id": "renewable-energy-systems-401-l06-a1",
          "type": "practice",
          "title": "Interactive Financial Model",
          "content": "Use a web-based simulator to model the financial viability of a utility-scale solar project by adjusting key input variables."
        }
      ]
    },
    {
      "id": "renewable-energy-systems-401-l07",
      "title": "Checkpoint: Project Finance and Economics",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "renewable-energy-systems-401-l07-q1",
          "text": "In project finance, what is the primary purpose of creating a Special Purpose Vehicle (SPV)?",
          "skillId": "renewable-energy-systems-401-skill-finance",
          "options": [
            {
              "id": "a",
              "text": "To serve as a marketing entity for the project."
            },
            {
              "id": "b",
              "text": "To isolate the project's financial risk from the parent company (non-recourse financing)."
            },
            {
              "id": "c",
              "text": "To handle the day-to-day operational maintenance of the facility."
            },
            {
              "id": "d",
              "text": "To lobby governments for more favorable energy policies."
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "renewable-energy-systems-401-l07-q2",
          "text": "A decrease in which of the following would most likely *lower* the Levelized Cost of Energy (LCOE) of a new wind farm?",
          "skillId": "renewable-energy-systems-401-skill-finance",
          "options": [
            {
              "id": "a",
              "text": "The project's capacity factor."
            },
            {
              "id": "b",
              "text": "The interest rate on the project's debt."
            },
            {
              "id": "c",
              "text": "The expected operational lifetime of the turbines."
            },
            {
              "id": "d",
              "text": "The cost of capital (discount rate)."
            }
          ],
          "correctOptionId": "d",
          "explanation": "A lower cost of capital (discount rate) reduces the present value of future costs, thereby lowering the overall LCOE. A decrease in capacity factor or lifetime would increase LCOE, while a decrease in interest rate is a component of, but not the same as, the overall cost of capital."
        }
      ]
    },
    {
      "id": "renewable-energy-systems-401-l08",
      "title": "System-Wide Operations and Grid Integration",
      "type": "video",
      "duration": 18,
      "learningAids": [
        {
          "id": "renewable-energy-systems-401-l08-a1",
          "type": "animation",
          "title": "Solving the Duck Curve",
          "content": "An animation showing the 'duck curve' of net load and how energy storage systems can 'clip' the peak solar production and 'fill' the evening ramp."
        },
        {
          "id": "renewable-energy-systems-401-l08-a2",
          "type": "image",
          "title": "Grid Services from Renewables",
          "content": "Infographic detailing ancillary services (e.g., frequency response, voltage control) that can be provided by modern inverter-based resources like solar and batteries."
        }
      ]
    },
    {
      "id": "renewable-energy-systems-401-l09",
      "title": "Capstone: Developing an Integrated Renewable Energy Strategy",
      "type": "interactive",
      "duration": 45,
      "metadata": {
        "prompts": [
          "Draft a mission statement for a utility aiming to achieve 50% renewable generation by 2035.",
          "Outline a phased, 10-year investment plan, justifying your choice of technologies (e.g., offshore wind vs. distributed solar) based on the provided regional data.",
          "Identify the top three policy, financial, and operational risks to your plan and propose specific mitigation strategies for each."
        ]
      },
      "learningAids": [
        {
          "id": "renewable-energy-systems-401-l09-a1",
          "type": "practice",
          "title": "Strategy Development Workspace",
          "content": "Use a guided template to build a comprehensive strategy proposal based on a detailed scenario brief, including mock policy documents and financial data sheets."
        }
      ]
    },
    {
      "id": "renewable-energy-systems-401-l10",
      "title": "Final Assessment",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "renewable-energy-systems-401-l10-q1",
          "text": "A utility is facing significant grid congestion during midday due to high solar PV penetration. Which of the following represents the most effective long-term strategic investment?",
          "skillId": "renewable-energy-systems-401-skill-integration",
          "options": [
            {
              "id": "a",
              "text": "Building more solar PV farms."
            },
            {
              "id": "b",
              "text": "Investing in utility-scale battery storage and demand-response programs."
            },
            {
              "id": "c",
              "text": "Signing a long-term PPA with a natural gas peaker plant."
            },
            {
              "id": "d",
              "text": "Offering subsidies for consumers to use more energy at night."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Battery storage directly addresses the intermittency of solar by storing excess midday energy for use during evening peaks, while demand-response programs incentivize load shifting, both of which alleviate grid congestion."
        },
        {
          "id": "renewable-energy-systems-401-l10-q2",
          "text": "As a project developer, you are evaluating two potential wind farm sites. Site A has a higher capacity factor but requires a more expensive grid connection. What financial metric is best suited for making a direct, 'apples-to-apples' comparison of the cost of energy from each site?",
          "skillId": "renewable-energy-systems-401-skill-finance",
          "options": [
            {
              "id": "a",
              "text": "Internal Rate of Return (IRR)"
            },
            {
              "id": "b",
              "text": "Net Present Value (NPV)"
            },
            {
              "id": "c",
              "text": "Levelized Cost of Energy (LCOE)"
            },
            {
              "id": "d",
              "text": "Payback Period"
            }
          ],
          "correctOptionId": "c"
        },
        {
          "id": "renewable-energy-systems-401-l10-q3",
          "text": "A government wants to rapidly deploy renewable energy while ensuring technological diversity and providing long-term investor certainty. Which combination of policies would be most effective?",
          "skillId": "renewable-energy-systems-401-skill-policy",
          "options": [
            {
              "id": "a",
              "text": "A single, flat carbon tax."
            },
            {
              "id": "b",
              "text": "Technology-specific Feed-in Tariffs combined with streamlined permitting processes."
            },
            {
              "id": "c",
              "text": "A short-term consumer rebate program for rooftop solar only."
            },
            {
              "id": "d",
              "text": "A strict ban on all non-renewable energy sources without a transition plan."
            }
          ],
          "correctOptionId": "b"
        }
      ]
    }
  ]
};
