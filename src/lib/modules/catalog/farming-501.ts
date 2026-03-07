import type { LearningModule } from "@/lib/modules/types";

export const farming_501_Module: LearningModule = {
  "id": "farming-501",
  "title": "Farming Specialization Studio",
  "description": "Post-401 specialization in Farming, focused on farming systems diagnostics, farming operations and execution design, farming impact and tradeoff analysis, and farming governance and leadership through advanced casework, simulation, and defense-based checkpoints.",
  "subject": "Farming",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "farming",
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
    "Apply advanced methods for farming systems diagnostics in high-constraint environments",
    "Design robust systems for farming operations and execution design with measurable control gates",
    "Evaluate interventions in farming impact and tradeoff analysis with research-grade rigor",
    "Operationalize farming governance and leadership with accountable governance and escalation pathways",
    "Lead cross-functional decision reviews with explicit tradeoff communication",
    "Defend recommendations under expert critique using evidence and uncertainty bounds"
  ],
  "lessons": [
    {
      "id": "farming-501-l01",
      "title": "Farming Advanced Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "farming-501-l01-a1",
          "type": "image",
          "title": "Farming System Boundaries",
          "content": "Diagram showing a farm as a system with defined boundaries. Inputs (sunlight, water, seeds, labor), internal processes (crop growth, irrigation, pest control), and outputs (harvested crops, profit, environmental runoff) are clearly labeled. External factors like market prices and government policy are shown outside the boundary."
        }
      ],
      "chunks": [
        {
          "id": "farming-501-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "Learn to define the scope of a farming system for analysis. This involves setting clear boundaries to distinguish internal factors you can control (like crop choice and irrigation schedules) from external constraints (like weather and market demand). This is the first step in diagnosing problems and designing effective solutions."
        },
        {
          "id": "farming-501-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "Explore how to model cause-and-effect relationships within a farm system. We'll map these causal pathways and learn to estimate uncertainty ranges for key variables, like crop yield or water availability. This modeling is essential for predicting the impact of potential interventions before you implement them."
        },
        {
          "id": "farming-501-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "This lesson concludes by stressing the importance of evidence-based decision-making. We will establish standards for what constitutes valid evidence, how to link claims to measurable data, and the use of confidence bounds and review checkpoints to ensure your analysis is robust and defensible."
        }
      ],
      "flashcards": [
        {
          "id": "farming-501-l01-f1",
          "front": "Farming Systems Diagnostics",
          "back": "The systematic process of identifying a farm's strengths, weaknesses, and constraints by defining its boundaries, inputs, and outputs."
        },
        {
          "id": "farming-501-l01-f2",
          "front": "Farming Operations Design",
          "back": "The design of reliable, repeatable farm workflows, including clear steps, roles, and control points to ensure success under pressure."
        },
        {
          "id": "farming-501-l01-f3",
          "front": "Impact and Tradeoff Analysis",
          "back": "A rigorous method for evaluating the full consequences of a farming intervention, including intended benefits, unintended side effects, and hidden costs."
        }
      ]
    },
    {
      "id": "farming-501-l02",
      "title": "Farming Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "farming-501-l02-a1",
          "type": "tool",
          "title": "Workflow Design Canvas",
          "content": "An interactive template for designing a farming workflow. Includes sections for task sequence, required resources, decision points (control gates), and escalation paths for when things go wrong."
        }
      ],
      "chunks": [
        {
          "id": "farming-501-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "In this lab, you will design a specialized workflow for a common farming challenge, such as integrated pest management or a precision irrigation schedule. You will then stress-test your design in a simulation against adverse scenarios like a sudden pest outbreak or equipment failure to identify and fix weaknesses."
        },
        {
          "id": "farming-501-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "We'll recap the principles of a strong control gate architecture. Learn how to embed checkpoints, pre-defined rollback criteria (when to stop and revert), and threshold-based escalation paths into your workflows. These elements transform a simple plan into a resilient operational system."
        }
      ],
      "interactiveActivities": [
        {
          "id": "farming-501-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Outcome Mapping",
          "description": "Match specialist controls with their strongest reliability and governance effects.",
          "pairs": [
            {
              "left": "Pre-commit gate",
              "right": "Prevents avoidable downstream failures"
            },
            {
              "left": "Rollback trigger",
              "right": "Limits blast radius under adverse outcomes"
            },
            {
              "left": "Baseline dashboard",
              "right": "Supports defensible impact attribution"
            },
            {
              "left": "Retrospective loop",
              "right": "Improves next-cycle decision quality"
            }
          ]
        }
      ]
    },
    {
      "id": "farming-501-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "farming-501-l03-a1",
          "type": "document",
          "title": "Key Concepts Review Sheet",
          "content": "A one-page summary of key terms and frameworks from Lessons 1 and 2, including system boundaries, causal modeling, and control gate architecture."
        }
      ],
      "questions": [
        {
          "id": "farming-501-l03-q1",
          "text": "Which practice most improves farming systems diagnostics decision quality?",
          "skillId": "farming-501-diagnostics",
          "options": [
            {
              "id": "a",
              "text": "Proceed without baseline or assumptions"
            },
            {
              "id": "b",
              "text": "Define assumptions, constraints, and measurable indicators"
            },
            {
              "id": "c",
              "text": "Optimize only for speed in every context"
            },
            {
              "id": "d",
              "text": "Ignore uncertainty and edge conditions"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Advanced decisions improve when assumptions, constraints, and metrics are explicit."
        },
        {
          "id": "farming-501-l03-q2",
          "text": "At level 501, strong execution for farming operations and execution design requires:",
          "skillId": "farming-501-operations",
          "options": [
            {
              "id": "a",
              "text": "Owner mapping, checkpoint cadence, and escalation thresholds"
            },
            {
              "id": "b",
              "text": "No role clarity and ad-hoc process changes"
            },
            {
              "id": "c",
              "text": "No retrospective or post-run review"
            },
            {
              "id": "d",
              "text": "No rollback or fallback conditions"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable advanced execution needs ownership clarity and threshold-driven governance."
        },
        {
          "id": "farming-501-l03-q3",
          "text": "A defensible approach to farming impact and tradeoff analysis includes:",
          "skillId": "farming-501-analysis",
          "options": [
            {
              "id": "a",
              "text": "Anecdotes without comparison"
            },
            {
              "id": "b",
              "text": "Baseline comparisons, side-effect analysis, and uncertainty bounds"
            },
            {
              "id": "c",
              "text": "Changing success criteria after outcomes"
            },
            {
              "id": "d",
              "text": "Excluding difficult scenarios from analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible analysis combines comparative baselines, side-effect checks, and uncertainty disclosure."
        },
        {
          "id": "farming-501-l03-q4",
          "text": "Mature governance systems connect:",
          "skillId": "farming-501-governance",
          "options": [
            {
              "id": "a",
              "text": "Policy intent, measurable controls, and remediation pathways"
            },
            {
              "id": "b",
              "text": "Policy language with no measurable enforcement"
            },
            {
              "id": "c",
              "text": "Targets without ownership or escalation design"
            },
            {
              "id": "d",
              "text": "Operations without transparent accountability"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Governance maturity is the operational link between intent, measurement, and corrective action."
        },
        {
          "id": "farming-501-l03-q5",
          "text": "What is the best way to compare competing interventions in advanced Farming?",
          "skillId": "farming-501-comparison",
          "options": [
            {
              "id": "a",
              "text": "Choose the option with the most persuasive narrative"
            },
            {
              "id": "b",
              "text": "Score alternatives against shared metrics, side effects, and uncertainty bounds"
            },
            {
              "id": "c",
              "text": "Switch metrics after results arrive"
            },
            {
              "id": "d",
              "text": "Prioritize whichever option has the shortest memo"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible comparisons require shared metrics, side-effect accounting, and uncertainty disclosure."
        },
        {
          "id": "farming-501-l03-q6",
          "text": "In high-stakes Farming Specialization Studio execution, which communication protocol is strongest?",
          "skillId": "farming-501-communication",
          "options": [
            {
              "id": "a",
              "text": "Broadcast conclusions without assumptions"
            },
            {
              "id": "b",
              "text": "Publish assumptions, confidence ranges, and decision checkpoints to stakeholders"
            },
            {
              "id": "c",
              "text": "Share only final outcomes after completion"
            },
            {
              "id": "d",
              "text": "Limit updates to a single informal channel"
            }
          ],
          "correctOptionId": "b",
          "explanation": "High-stakes communication must expose assumptions, confidence, and checkpoints."
        },
        {
          "id": "farming-501-l03-q7",
          "text": "A mature remediation loop in advanced Farming should prioritize:",
          "skillId": "farming-501-remediation",
          "options": [
            {
              "id": "a",
              "text": "Blame assignment without system updates"
            },
            {
              "id": "b",
              "text": "Root-cause analysis, control redesign, and measurable follow-up verification"
            },
            {
              "id": "c",
              "text": "One-time fixes without retesting"
            },
            {
              "id": "d",
              "text": "Issue closure based on elapsed time"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Mature remediation ties root causes to control redesign and verification."
        },
        {
          "id": "farming-501-l03-q8",
          "text": "Which portfolio decision rule best balances performance and resilience in Farming Specialization Studio?",
          "skillId": "farming-501-portfolio",
          "options": [
            {
              "id": "a",
              "text": "Maximize short-term gains regardless of concentration risk"
            },
            {
              "id": "b",
              "text": "Optimize for expected value while enforcing risk limits and contingency capacity"
            },
            {
              "id": "c",
              "text": "Ignore correlated failure modes"
            },
            {
              "id": "d",
              "text": "Commit all resources to one irreversible pathway"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Balanced portfolios combine value optimization with explicit risk limits and contingency options."
        }
      ]
    },
    {
      "id": "farming-501-l04",
      "title": "Farming Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "farming-501-l04-a1",
          "type": "document",
          "title": "Case Brief: The Verde Valley Water Crisis",
          "content": "A detailed case study document about a fictional agricultural valley facing a severe drought, presenting data on water rights, crop types, economic pressures, and community needs."
        }
      ],
      "chunks": [
        {
          "id": "farming-501-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "We will dissect a complex case study: the Verde Valley Water Crisis. This scenario presents competing constraints involving water scarcity, economic viability for farmers, and environmental protection. Your task is to diagnose the system and identify key leverage points for intervention."
        },
        {
          "id": "farming-501-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing",
          "content": "Working through the case, you will frame the critical tradeoffs. You'll compare potential interventions—such as investing in efficient irrigation, changing crop types, or fallowing land—across multiple dimensions: financial cost, water savings, long-term soil health, and social equity."
        },
        {
          "id": "farming-501-l04-c3",
          "kind": "recap",
          "title": "Decision Memo Pattern",
          "content": "Learn the structure of a professional decision memo. We'll review a pattern for presenting a recommendation that includes a clear statement of the problem, explicit assumptions, supporting evidence from the case, proposed risk controls, and viable fallback plans."
        }
      ]
    },
    {
      "id": "farming-501-l05",
      "title": "Farming Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "farming-501-l05-a1",
          "type": "tool",
          "title": "Simulation Control Panel",
          "content": "An interactive dashboard for the Verde Valley simulation. Allows you to allocate water, approve budgets, and implement policies, while monitoring real-time feedback on crop yields, farm profits, and river health."
        }
      ],
      "chunks": [
        {
          "id": "farming-501-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Controls",
          "content": "Take control in a live simulation of the Verde Valley Water Crisis. You will manage the farm collective's response to the drought by allocating resources, setting policy, and reacting to unexpected events. Your goal is to balance agricultural productivity with the long-term health of the ecosystem and community."
        },
        {
          "id": "farming-501-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "This recap focuses on adaptive response. We'll analyze how effective decisions in the simulation involved updating plans and control gates in response to new data, all while maintaining clear traceability and accountability for those changes."
        }
      ],
      "interactiveActivities": [
        {
          "id": "farming-501-l05-act1",
          "type": "scenario",
          "title": "Verde Valley Crisis Management",
          "description": "Run a high-pressure simulation of the Verde Valley drought. Tune controls, manage resources, and make critical decisions under uncertainty to achieve the best possible outcome."
        }
      ]
    },
    {
      "id": "farming-501-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "farming-501-l06-a1",
          "type": "document",
          "title": "Case & Simulation Debrief Framework",
          "content": "A structured guide to help you analyze your performance in the case study and simulation, focusing on decision quality, tradeoff management, and outcome analysis."
        }
      ],
      "questions": [
        {
          "id": "farming-501-l06-q1",
          "text": "In advanced casework, the first requirement for defensible recommendations is:",
          "skillId": "farming-501-case-diagnostics",
          "options": [
            {
              "id": "a",
              "text": "A preferred option without explicit assumptions"
            },
            {
              "id": "b",
              "text": "A clear baseline, explicit constraints, and success criteria"
            },
            {
              "id": "c",
              "text": "High confidence without evidence logs"
            },
            {
              "id": "d",
              "text": "Single-metric optimization only"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible recommendations begin with explicit assumptions, constraints, and measurable targets."
        },
        {
          "id": "farming-501-l06-q2",
          "text": "A resilient strategy for farming operations and execution design should include:",
          "skillId": "farming-501-case-operations",
          "options": [
            {
              "id": "a",
              "text": "Checkpointed execution with fallback and escalation criteria"
            },
            {
              "id": "b",
              "text": "One-way execution with no rollback capability"
            },
            {
              "id": "c",
              "text": "No ownership mapping across teams"
            },
            {
              "id": "d",
              "text": "Hidden assumptions and undocumented decisions"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Resilience depends on checkpoints, fallback options, and explicit escalation design."
        },
        {
          "id": "farming-501-l06-q3",
          "text": "When evaluating farming impact and tradeoff analysis, which method is most rigorous?",
          "skillId": "farming-501-case-analysis",
          "options": [
            {
              "id": "a",
              "text": "Single success story without controls"
            },
            {
              "id": "b",
              "text": "Comparative baselines plus side-effect and uncertainty analysis"
            },
            {
              "id": "c",
              "text": "Outcome-only narrative without process evidence"
            },
            {
              "id": "d",
              "text": "Retrospective scope changes to fit outcomes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rigorous evaluation requires comparisons, side-effect analysis, and uncertainty disclosure."
        },
        {
          "id": "farming-501-l06-q4",
          "text": "Advanced governance is strongest when it:",
          "skillId": "farming-501-case-governance",
          "options": [
            {
              "id": "a",
              "text": "Aligns authority, measurement, and remediation obligations"
            },
            {
              "id": "b",
              "text": "Separates policy from operational controls"
            },
            {
              "id": "c",
              "text": "Avoids external review and transparency"
            },
            {
              "id": "d",
              "text": "Treats accountability as optional under pressure"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Mature governance links authority, measurable controls, and corrective action."
        },
        {
          "id": "farming-501-l06-q5",
          "text": "In the Verde Valley case, a proposal to switch to a less water-intensive but lower-margin crop is best evaluated by:",
          "skillId": "farming-501-casetradeoff",
          "options": [
            {
              "id": "a",
              "text": "Focusing only on the total water saved"
            },
            {
              "id": "b",
              "text": "Analyzing the net financial impact, water savings, and long-term market risks"
            },
            {
              "id": "c",
              "text": "Choosing the option that requires the least amount of change"
            },
            {
              "id": "d",
              "text": "Polling farmers for their gut feelings on the new crop"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A robust evaluation requires a multi-dimensional analysis of financial, resource, and risk factors."
        },
        {
          "id": "farming-501-l06-q6",
          "text": "During the simulation, an unexpected equipment failure causes irrigation to stop. The most resilient response is to:",
          "skillId": "farming-501-simresponse",
          "options": [
            {
              "id": "a",
              "text": "Activate a pre-defined contingency plan, notify stakeholders, and deploy backup resources"
            },
            {
              "id": "b",
              "text": "Wait to see if the problem resolves itself to avoid overreacting"
            },
            {
              "id": "c",
              "text": "Immediately re-allocate all water to the remaining functional fields"
            },
            {
              "id": "d",
              "text": "Assign blame for the failure before taking corrective action"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A resilient response relies on prepared contingency plans and clear communication, not inaction or blame."
        },
        {
          "id": "farming-501-l06-q7",
          "text": "A decision memo recommending a high-cost irrigation upgrade should be supported by:",
          "skillId": "farming-501-casememo",
          "options": [
            {
              "id": "a",
              "text": "A guarantee that it will solve all water problems forever"
            },
            {
              "id": "b",
              "text": "An emotional appeal about the importance of farming"
            },
            {
              "id": "c",
              "text": "A single quote from a technology vendor"
            },
            {
              "id": "d",
              "text": "A cost-benefit analysis showing projected ROI, evidence of water savings, and a clear implementation plan"
            }
          ],
          "correctOptionId": "d",
          "explanation": "A strong recommendation for a major investment must be backed by quantitative analysis and a practical plan."
        },
        {
          "id": "farming-501-l06-q8",
          "text": "Reflecting on the simulation, a key indicator of strong governance was:",
          "skillId": "farming-501-simgovernance",
          "options": [
            {
              "id": "a",
              "text": "Making decisions in secret to avoid public debate"
            },
            {
              "id": "b",
              "text": "Sticking to the initial plan no matter what new data emerged"
            },
            {
              "id": "c",
              "text": "The ability to make and communicate difficult tradeoff decisions transparently to all stakeholders"
            },
            {
              "id": "d",
              "text": "Ensuring that one group of stakeholders benefited at the expense of all others"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Strong governance in a crisis involves transparency, adaptability, and fair communication about necessary tradeoffs."
        }
      ]
    },
    {
      "id": "farming-501-l07",
      "title": "Farming Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "farming-501-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A visual map showing a central farming decision (e.g., pesticide use) and its branching impacts on various stakeholders: farm workers (health), consumers (food safety), downstream communities (water quality), and the environment (biodiversity)."
        }
      ],
      "chunks": [
        {
          "id": "farming-501-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "Learn to map the full impact of farming decisions. We will analyze how benefits (e.g., higher yields), burdens (e.g., pollution), and delayed effects are distributed across different stakeholder groups, including farm workers, consumers, local communities, and future generations."
        },
        {
          "id": "farming-501-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Design systems for accountability. This involves creating an architecture for decision-making that ensures every major decision is traceable to its owner and rationale, includes clear rights for review by affected parties, and defines obligations for remediation if things go wrong."
        },
        {
          "id": "farming-501-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "We conclude with a responsible leadership checklist. This practical tool helps you integrate ethical considerations, policy compliance, and system resilience into your decision-making process, ensuring that you lead with integrity and foresight."
        }
      ],
      "flashcards": [
        {
          "id": "farming-501-l07-f1",
          "front": "Impact Distribution",
          "back": "The analysis of how the positive and negative outcomes of a decision are allocated across different populations and timescales."
        },
        {
          "id": "farming-501-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record connecting a decision to its evidence, rationale, owner, and outcome, ensuring accountability."
        },
        {
          "id": "farming-501-l07-f3",
          "front": "Responsible Leadership",
          "back": "A decision-making approach that balances performance goals with accountability, ethical duties, and long-term resilience."
        }
      ]
    },
    {
      "id": "farming-501-l08",
      "title": "Farming Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "farming-501-l08-a1",
          "type": "tool",
          "title": "Capstone Defense Template",
          "content": "A slide deck template for structuring your final capstone defense. Includes slides for problem statement, proposed solution, evidence, tradeoff analysis, risk mitigation, and governance plan."
        }
      ],
      "chunks": [
        {
          "id": "farming-501-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this lab, you will assemble a capstone defense brief for your proposed solution to a complex farming problem. You will structure your argument with a central claim, supported by evidence, while clearly defining the uncertainty bounds of your analysis and outlining potential remediation pathways."
        },
        {
          "id": "farming-501-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "Prepare for your defense through a simulated expert panel. You will practice responding to critical questions and challenges from different perspectives: a technical expert questioning your data, a governance expert probing your accountability plan, and a stakeholder representative concerned about community impact."
        }
      ],
      "interactiveActivities": [
        {
          "id": "farming-501-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Present and defend your capstone recommendations to a simulated panel of experts. Respond to adversarial cross-examination and justify your reasoning under pressure."
        }
      ]
    }
  ]
};
