import type { LearningModule } from "@/lib/modules/types";

export const financial_literacy_501_Module: LearningModule = {
  "id": "financial-literacy-501",
  "title": "Financial Literacy Specialization Studio",
  "description": "An advanced course on financial literacy focusing on analyzing financial systems, designing effective financial plans, evaluating their impact, and leading with strong governance. This module uses advanced case studies, simulations, and expert critiques to build specialist-level skills.",
  "subject": "Financial Literacy",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "financial-literacy",
    "specialization"
  ],
  "minAge": 17,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Analyze complex financial situations to identify key problems, even with limited information.",
    "Design robust financial plans with clear steps and measurable checkpoints.",
    "Evaluate the real-world impact and potential downsides of financial strategies with research-level rigor.",
    "Develop and implement systems for responsible financial governance and leadership.",
    "Lead decision-making discussions, clearly communicating the tradeoffs between different options.",
    "Confidently defend financial recommendations using evidence and acknowledging uncertainties."
  ],
  "lessons": [
    {
      "id": "financial-literacy-501-l01",
      "title": "Advanced Financial Analysis Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "financial-literacy-501-l01-a1",
          "type": "image",
          "title": "The Structured Method",
          "content": "A flowchart showing the process: 1. Define the Problem, 2. State Assumptions, 3. Gather Evidence, 4. Propose Solution, 5. Set Metrics to Validate."
        }
      ],
      "chunks": [
        {
          "id": "financial-literacy-501-l01-c1",
          "kind": "concept",
          "title": "Defining the Scope of a Financial Problem",
          "content": "Before solving a financial problem, you must define its boundaries. This lesson teaches you how to diagnose the core issues in a financial system, like a household budget or a small business plan. We'll focus on identifying what's in your control and what isn't, which is the first step to designing an effective strategy."
        },
        {
          "id": "financial-literacy-501-l01-c2",
          "kind": "concept",
          "title": "Modeling Cause-and-Effect",
          "content": "Financial outcomes rarely have a single cause. Here, you'll learn to map the relationships between different financial factors and identify where uncertainty exists. Understanding these connections is essential for predicting the potential impact of your decisions and planning effective interventions."
        },
        {
          "id": "financial-literacy-501-l01-c3",
          "kind": "recap",
          "title": "Setting Standards for Evidence",
          "content": "In this recap, we'll review the importance of backing up your claims with measurable evidence. We will establish clear standards for what counts as proof and set up checkpoints to review our findings. This rigorous approach ensures our financial analysis is reliable and trustworthy."
        }
      ],
      "flashcards": [
        {
          "id": "financial-literacy-501-l01-f1",
          "front": "Financial Systems Diagnostics",
          "back": "The process of identifying the root causes of financial problems by defining the system, its constraints, and key metrics."
        },
        {
          "id": "financial-literacy-501-l01-f2",
          "front": "Operations and Execution Design",
          "back": "Creating a clear, step-by-step plan that includes checkpoints and fallback options to ensure it works under pressure."
        },
        {
          "id": "financial-literacy-501-l01-f3",
          "front": "Impact and Tradeoff Analysis",
          "back": "A disciplined way to evaluate a plan's true benefits and hidden costs by comparing it to other options."
        }
      ]
    },
    {
      "id": "financial-literacy-501-l02",
      "title": "Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "financial-literacy-501-l02-a1",
          "type": "practice",
          "title": "Workflow Diagram",
          "content": "An interactive diagram of a financial process. Users can drag and drop 'Control Gates' like 'Manager Approval' or 'Budget Check' into the workflow to see how they affect the outcome."
        }
      ],
      "chunks": [
        {
          "id": "financial-literacy-501-l02-c1",
          "kind": "practice",
          "title": "Designing and Stress-Testing Your Plan",
          "content": "In this interactive lab, you'll design a financial workflow for a specific goal. Then, you'll test its strength by running simulations of unexpected events, like a sudden income loss or market downturn. This hands-on practice is crucial for building plans that are resilient in the real world."
        },
        {
          "id": "financial-literacy-501-l02-c2",
          "kind": "recap",
          "title": "Building a System of Controls",
          "content": "A good plan needs good controls. We'll recap how to build them into your workflow. This includes regular checkpoints to monitor progress, clear rules for when to pause or reverse a decision, and a system for escalating major issues to ensure they are addressed quickly."
        }
      ],
      "interactiveActivities": [
        {
          "id": "financial-literacy-501-l02-act1",
          "type": "matching_pairs",
          "title": "Matching Controls to Outcomes",
          "description": "Match each control mechanism to its primary benefit for reliability and good governance.",
          "pairs": [
            {
              "left": "Final check before action",
              "right": "Prevents predictable mistakes"
            },
            {
              "left": "Emergency stop trigger",
              "right": "Contains the damage when things go wrong"
            },
            {
              "left": "Performance dashboard",
              "right": "Helps prove your strategy is working"
            },
            {
              "left": "Post-project review",
              "right": "Improves the quality of future decisions"
            }
          ]
        }
      ]
    },
    {
      "id": "financial-literacy-501-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "financial-literacy-501-l03-a1",
          "type": "practice",
          "title": "Key Principles Review",
          "content": "A one-page summary of the core principles: 1. Define everything. 2. Use evidence. 3. Plan for failure. 4. Ensure accountability."
        }
      ],
      "questions": [
        {
          "id": "financial-literacy-501-l03-q1",
          "text": "What is the most important first step for making a high-quality financial diagnosis?",
          "skillId": "financial-literacy-501-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Start immediately without a plan or assumptions"
            },
            {
              "id": "b",
              "text": "Clearly define your assumptions, limitations, and how you'll measure success"
            },
            {
              "id": "c",
              "text": "Focus only on making the decision as fast as possible"
            },
            {
              "id": "d",
              "text": "Ignore potential risks and uncertainties"
            }
          ],
          "correctOptionId": "b",
          "explanation": "High-quality decisions are built on a clear foundation of explicit assumptions, constraints, and metrics."
        },
        {
          "id": "financial-literacy-501-l03-q2",
          "text": "A strong financial plan requires:",
          "skillId": "financial-literacy-501-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Clear ownership, regular checkpoints, and rules for when to escalate problems"
            },
            {
              "id": "b",
              "text": "Vague roles and frequent, undocumented changes to the process"
            },
            {
              "id": "c",
              "text": "No review or reflection after the plan is complete"
            },
            {
              "id": "d",
              "text": "No way to undo a decision or fall back to a previous state"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable execution depends on clear ownership, scheduled reviews, and pre-defined rules for handling problems."
        },
        {
          "id": "financial-literacy-501-l03-q3",
          "text": "How can you make a defensible analysis of a financial plan's impact?",
          "skillId": "financial-literacy-501-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Rely on personal stories without any data"
            },
            {
              "id": "b",
              "text": "Compare results to a baseline, analyze side effects, and acknowledge uncertainties"
            },
            {
              "id": "c",
              "text": "Change the definition of success after seeing the results"
            },
            {
              "id": "d",
              "text": "Exclude difficult or negative scenarios from the analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A defensible analysis requires comparing results to a starting point, considering side effects, and being honest about uncertainty."
        },
        {
          "id": "financial-literacy-501-l03-q4",
          "text": "A mature system of financial governance connects:",
          "skillId": "financial-literacy-501-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "The original goal, measurable controls, and a clear process for fixing problems"
            },
            {
              "id": "b",
              "text": "A policy with no way to measure or enforce it"
            },
            {
              "id": "c",
              "text": "Goals without clear owners or a plan for what to do if they are missed"
            },
            {
              "id": "d",
              "text": "Operations that have no transparent accountability"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Mature governance creates an operational link between the intended goal, how it's measured, and how problems are corrected."
        }
      ]
    },
    {
      "id": "financial-literacy-501-l04",
      "title": "Advanced Case Study Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "financial-literacy-501-l04-a1",
          "type": "image",
          "title": "Tradeoff Matrix",
          "content": "A table comparing three different investment options across several criteria: Potential Return (High/Med/Low), Risk Level (High/Med/Low), and Cost (High/Med/Low), with a 'Best Choice' highlighted."
        }
      ],
      "chunks": [
        {
          "id": "financial-literacy-501-l04-c1",
          "kind": "concept",
          "title": "Structuring a Case Study",
          "content": "This lesson teaches you how to break down complex financial case studies. We will focus on identifying the competing goals and constraints within the scenario, such as the conflict between maximizing profit and minimizing risk. This analytical approach will sharpen your ability to evaluate difficult financial situations."
        },
        {
          "id": "financial-literacy-501-l04-c2",
          "kind": "practice",
          "title": "Framing Your Tradeoffs",
          "content": "In this practice, you'll learn to compare different choices by evaluating them across multiple dimensions like safety, cost, fairness, and governance. This structured comparison is essential for making well-rounded decisions that balance competing priorities."
        },
        {
          "id": "financial-literacy-501-l04-c3",
          "kind": "recap",
          "title": "The Decision Memo",
          "content": "We'll recap the key elements of a strong recommendation. Every decision memo should clearly state the underlying assumptions, provide supporting evidence, identify risks and how to control them, and include a fallback plan in case things don't go as expected."
        }
      ]
    },
    {
      "id": "financial-literacy-501-l05",
      "title": "Financial Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "financial-literacy-501-l05-a1",
          "type": "practice",
          "title": "Simulation Dashboard",
          "content": "An interactive dashboard for a retirement plan. Users can adjust sliders for 'Savings Rate,' 'Risk Tolerance,' and 'Retirement Age' to see the projected outcome on a graph."
        }
      ],
      "chunks": [
        {
          "id": "financial-literacy-501-l05-c1",
          "kind": "practice",
          "title": "Managing a Live Scenario",
          "content": "In this interactive simulation, you will manage a financial scenario in real-time. Your task is to operate the controls to balance performance goals with governance rules, such as staying within a budget or complying with regulations. This exercise connects theory to practice by highlighting the importance of tradeoffs and clear assumptions."
        },
        {
          "id": "financial-literacy-501-l05-c2",
          "kind": "recap",
          "title": "Designing Adaptive Responses",
          "content": "In our recap, we will discuss how to adapt your plan when a scenario changes. An effective response allows you to update your strategy while maintaining a clear record of your decisions and who is accountable for them, ensuring that you remain in control."
        }
      ],
      "interactiveActivities": [
        {
          "id": "financial-literacy-501-l05-act1",
          "type": "scenario",
          "title": "Crisis Management Simulation",
          "description": "Manage a high-pressure financial scenario. Adjust your strategy and controls as new, uncertain information is revealed."
        }
      ]
    },
    {
      "id": "financial-literacy-501-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "financial-literacy-501-l06-a1",
          "type": "practice",
          "title": "Key Principles Review",
          "content": "A one-page summary of the core principles: 1. Define everything. 2. Use evidence. 3. Plan for failure. 4. Ensure accountability."
        }
      ],
      "questions": [
        {
          "id": "financial-literacy-501-l06-q1",
          "text": "In advanced case studies, what is the first requirement for a defensible recommendation?",
          "skillId": "financial-literacy-501-skill-case1",
          "options": [
            {
              "id": "a",
              "text": "A preferred option without explaining your assumptions"
            },
            {
              "id": "b",
              "text": "A clear baseline, explicit constraints, and defined success criteria"
            },
            {
              "id": "c",
              "text": "High confidence without any supporting evidence"
            },
            {
              "id": "d",
              "text": "Focusing on only one metric, like profit, and ignoring all others"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible recommendations always start with a clear definition of the problem, including assumptions, constraints, and measurable goals."
        },
        {
          "id": "financial-literacy-501-l06-q2",
          "text": "A resilient financial strategy should always include:",
          "skillId": "financial-literacy-501-skill-case2",
          "options": [
            {
              "id": "a",
              "text": "Execution with checkpoints, fallback options, and escalation rules"
            },
            {
              "id": "b",
              "text": "A rigid plan that cannot be reversed or changed"
            },
            {
              "id": "c",
              "text": "No clear assignment of who is responsible for each task"
            },
            {
              "id": "d",
              "text": "Hidden assumptions and undocumented decisions"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Resilience in a plan comes from having checkpoints, fallback options, and a clear process for handling problems."
        },
        {
          "id": "financial-literacy-501-l06-q3",
          "text": "When evaluating a plan's impact, which method is the most rigorous?",
          "skillId": "financial-literacy-501-skill-case3",
          "options": [
            {
              "id": "a",
              "text": "A single success story without any comparison data"
            },
            {
              "id": "b",
              "text": "Comparison against a baseline, plus analysis of side effects and uncertainty"
            },
            {
              "id": "c",
              "text": "A story about the outcome without evidence of the process"
            },
            {
              "id": "d",
              "text": "Changing the goals after the fact to match the results"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rigorous evaluation requires comparing results to a baseline, analyzing unintended consequences, and acknowledging what you don't know."
        },
        {
          "id": "financial-literacy-501-l06-q4",
          "text": "Advanced governance is strongest when it:",
          "skillId": "financial-literacy-501-skill-case4",
          "options": [
            {
              "id": "a",
              "text": "Aligns decision-making authority with measurement and the duty to fix problems"
            },
            {
              "id": "b",
              "text": "Separates the policy from the operational controls that enforce it"
            },
            {
              "id": "c",
              "text": "Avoids transparency and external review"
            },
            {
              "id": "d",
              "text": "Treats accountability as optional, especially under pressure"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Mature governance ensures that the person with authority to act is also responsible for measuring results and correcting failures."
        }
      ]
    },
    {
      "id": "financial-literacy-501-l07",
      "title": "Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "financial-literacy-501-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A diagram showing a central financial decision (e.g., 'Company Automation') with arrows pointing to different groups (Employees, Customers, Investors, Community) and listing the positive and negative impacts for each."
        }
      ],
      "chunks": [
        {
          "id": "financial-literacy-501-l07-c1",
          "kind": "concept",
          "title": "Understanding Stakeholder Impact",
          "content": "Financial decisions affect more than just your bottom line. In this lesson, you'll learn to map out how benefits, costs, and risks are distributed across different groups of people (stakeholders). This is crucial for making choices that are not only profitable but also fair and responsible."
        },
        {
          "id": "financial-literacy-501-l07-c2",
          "kind": "concept",
          "title": "Designing for Accountability",
          "content": "Great governance requires clear accountability. We will explore how to build systems that create a clear record of who decided what and why. This includes ensuring there are processes for reviewing decisions and a clear obligation to fix mistakes, which is essential for maintaining trust."
        },
        {
          "id": "financial-literacy-501-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "We'll conclude with a practical checklist for responsible leadership. This guide helps you connect your financial goals with ethical considerations, ensure your plans comply with policies, and build resilience into your leadership style. It's a tool for making decisions you can be proud of."
        }
      ],
      "flashcards": [
        {
          "id": "financial-literacy-501-l07-f1",
          "front": "Impact Distribution",
          "back": "How the positive and negative outcomes of a decision are spread across different groups of people over time."
        },
        {
          "id": "financial-literacy-501-l07-f2",
          "front": "Decision Traceability",
          "back": "A clear, auditable record showing the evidence, ownership, and reasoning behind a decision."
        },
        {
          "id": "financial-literacy-501-l07-f3",
          "front": "Responsible Leadership",
          "back": "Making decisions by balancing performance, accountability, and ethical considerations."
        }
      ]
    },
    {
      "id": "financial-literacy-501-l08",
      "title": "Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "financial-literacy-501-l08-a1",
          "type": "practice",
          "title": "Defense Presentation Template",
          "content": "A slide deck template with pre-defined sections: 1. Problem Statement, 2. Key Assumptions, 3. Evidence, 4. Recommendation, 5. Risks & Mitigation, 6. Uncertainty Analysis."
        }
      ],
      "chunks": [
        {
          "id": "financial-literacy-501-l08-c1",
          "kind": "practice",
          "title": "Assembling Your Defense",
          "content": "In this interactive lab, you will build a complete defense for a financial recommendation. You will assemble your claims, organize the supporting evidence, clearly define the limits of your certainty, and propose a plan for what to do if you're wrong. This exercise prepares you to present your ideas effectively and professionally."
        },
        {
          "id": "financial-literacy-501-l08-c2",
          "kind": "recap",
          "title": "Rehearsing for the Expert Panel",
          "content": "To prepare for your final defense, you will practice responding to challenging questions from different expert viewpoints—such as a technical analyst, a compliance officer, or a community representative. This rehearsal is crucial for building the confidence to defend your position under pressure."
        }
      ],
      "interactiveActivities": [
        {
          "id": "financial-literacy-501-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend your financial recommendation in a simulated panel review. Respond to challenging questions from experts who will probe your assumptions and evidence."
        }
      ]
    }
  ]
};
