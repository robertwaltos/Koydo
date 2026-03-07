import type { LearningModule } from "@/lib/modules/types";

export const sustainability_policy_401_Module: LearningModule = {
  "id": "sustainability-policy-401",
  "title": "Sustainability Policy Leadership and Capstone",
  "description": "Level 401 curriculum in Sustainability Policy, focused on policy instrument design, transition economics, stakeholder governance, and long-term impact accountability through case-driven analysis, simulations, and assessment-backed mastery.",
  "subject": "Policy Studies",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "sustainability",
    "governance"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Apply policy instrument design with explicit assumptions and tradeoff framing",
    "Build repeatable workflows for transition economics under realistic constraints",
    "Evaluate stakeholder governance decisions with baseline and side-effect analysis",
    "Strengthen long-term impact accountability with transparent policies and escalation pathways",
    "Communicate evidence and uncertainty to mixed stakeholder groups",
    "Produce defensible recommendations that survive critical review"
  ],
  "lessons": [
    {
      "id": "sustainability-policy-401-l01",
      "title": "Sustainability Policy Core Foundations",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "sustainability-policy-401-l01-a1",
          "type": "image",
          "title": "Core Concepts Map",
          "content": "A visual diagram connecting policy instrument design, transition economics, and stakeholder governance."
        }
      ],
      "chunks": [
        {
          "id": "sustainability-policy-401-l01-c1",
          "kind": "concept",
          "title": "Language, Scope, and Boundaries",
          "content": "This lesson establishes the core concepts for the module. We will define operational language for policy, establish clear scope boundaries, and connect the design of policy instruments to the economics of sustainable transitions. This foundation is crucial for applying these ideas in complex, real-world systems."
        },
        {
          "id": "sustainability-policy-401-l01-c2",
          "kind": "concept",
          "title": "Causal Reasoning Under Constraints",
          "content": "Here, you will practice modeling cause-and-effect pathways to understand how specific actions lead to outcomes. A key skill is identifying critical assumptions that could lead to failure before an intervention is chosen. This structured thinking helps you make more robust and defensible policy decisions."
        },
        {
          "id": "sustainability-policy-401-l01-c3",
          "kind": "recap",
          "title": "Evidence Standards",
          "content": "Throughout this module, all claims must be supported by observable, measurable indicators. We will define clear standards for evidence, account for the bounds of uncertainty, and establish review checkpoints to ensure all findings are reliable and valid."
        }
      ],
      "flashcards": [
        {
          "id": "sustainability-policy-401-l01-f1",
          "front": "Policy Instrument Design",
          "back": "A central decision axis in sustainability policy requiring explicit tradeoff treatment and assumption analysis."
        },
        {
          "id": "sustainability-policy-401-l01-f2",
          "front": "Transition Economics",
          "back": "The analysis of costs, benefits, and risks associated with shifting a system to a more sustainable state, determining if plans survive real-world variability."
        },
        {
          "id": "sustainability-policy-401-l01-f3",
          "front": "Stakeholder Governance",
          "back": "The analytical process for assessing an intervention's quality, fairness, and the distribution of its consequences across different groups."
        }
      ]
    },
    {
      "id": "sustainability-policy-401-l02",
      "title": "Sustainability Policy Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "sustainability-policy-401-l02-a1",
          "type": "document",
          "title": "Workflow Template",
          "content": "A downloadable template for building your policy workflow, including sections for control gates, ownership mapping, and verification hooks."
        }
      ],
      "chunks": [
        {
          "id": "sustainability-policy-401-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive lab, you will build a detailed workflow that demonstrates strategic leadership in sustainability policy. The goal is to ensure policies are tightly aligned with operational practices for successful implementation. This exercise prepares you for your capstone defense by testing your ability to design systems that can withstand uncertainty."
        },
        {
          "id": "sustainability-policy-401-l02-c2",
          "kind": "recap",
          "title": "Readiness and Control Gates",
          "content": "To ensure operational readiness, you will map ownership for each process step. This includes setting up control gates as progress checkpoints and establishing verification hooks to enable post-decision review, ensuring accountability and continuous improvement."
        }
      ],
      "interactiveActivities": [
        {
          "id": "sustainability-policy-401-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Outcome Mapping",
          "description": "Match each control mechanism to its strongest expected system benefit.",
          "pairs": [
            {
              "left": "Pre-commit review gate",
              "right": "Reduces preventable defects"
            },
            {
              "left": "Rollback trigger",
              "right": "Limits blast radius during failures"
            },
            {
              "left": "Baseline dashboard",
              "right": "Supports defensible impact claims"
            },
            {
              "left": "Retrospective cycle",
              "right": "Improves future decision quality"
            }
          ]
        },
        {
          "id": "sustainability-policy-401-l02-act2",
          "type": "sorting_buckets",
          "title": "Constraint Classification",
          "description": "Sort constraints into technical, policy, and stakeholder-impact buckets.",
          "buckets": [
            "Technical",
            "Policy",
            "Stakeholder Impact"
          ],
          "items": [
            {
              "text": "Service latency target",
              "bucket": "Technical"
            },
            {
              "text": "Compliance retention rule",
              "bucket": "Policy"
            },
            {
              "text": "Community trust risk",
              "bucket": "Stakeholder Impact"
            },
            {
              "text": "Incident disclosure protocol",
              "bucket": "Policy"
            }
          ]
        }
      ]
    },
    {
      "id": "sustainability-policy-401-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "sustainability-policy-401-l03-a1",
          "type": "document",
          "title": "Key Concepts Review",
          "content": "A one-page summary of core concepts and definitions from Lessons 1 and 2 to prepare for the checkpoint."
        }
      ],
      "questions": [
        {
          "id": "sustainability-policy-401-l03-q1",
          "text": "Which action most improves policy instrument design quality in practice?",
          "skillId": "sustainability-policy-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Skip explicit constraints and rely on intuition"
            },
            {
              "id": "b",
              "text": "Define assumptions, monitor indicators, and test failure cases"
            },
            {
              "id": "c",
              "text": "Treat all outcomes as equivalent"
            },
            {
              "id": "d",
              "text": "Ignore uncertainty and variance"
            }
          ],
          "correctOptionId": "b",
          "explanation": "High-quality decisions require explicit assumptions and measurable stress tests."
        },
        {
          "id": "sustainability-policy-401-l03-q2",
          "text": "At level 401, the strongest emphasis is on:",
          "skillId": "sustainability-policy-401-skill-level",
          "options": [
            {
              "id": "a",
              "text": "Strategic leadership, policy-operations alignment, and capstone defense"
            },
            {
              "id": "b",
              "text": "Fast execution with no review loops"
            },
            {
              "id": "c",
              "text": "A single stakeholder perspective only"
            },
            {
              "id": "d",
              "text": "Outcome claims without baselines"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The 401 level is explicitly designed around strategic leadership, aligning policy with operations, and preparing for a capstone defense."
        },
        {
          "id": "sustainability-policy-401-l03-q3",
          "text": "What best strengthens transition economics reliability?",
          "skillId": "sustainability-policy-401-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "No ownership for incident response"
            },
            {
              "id": "b",
              "text": "Clear control points, owner mapping, and escalation thresholds"
            },
            {
              "id": "c",
              "text": "Ad-hoc changes without logs"
            },
            {
              "id": "d",
              "text": "No postmortem process"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliability improves when control, ownership, and escalation are explicit and repeatable."
        },
        {
          "id": "sustainability-policy-401-l03-q4",
          "text": "When evaluating stakeholder governance, which approach is most defensible?",
          "skillId": "sustainability-policy-401-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Use anecdotal examples only"
            },
            {
              "id": "b",
              "text": "Compare interventions against a baseline and monitor side effects"
            },
            {
              "id": "c",
              "text": "Remove difficult scenarios from evaluation"
            },
            {
              "id": "d",
              "text": "Change target definitions after results are known"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Baseline comparison and side-effect monitoring reduce overclaiming and hidden risk."
        },
        {
          "id": "sustainability-policy-401-l03-q5",
          "text": "A mature long-term impact accountability model should include:",
          "skillId": "sustainability-policy-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "One-time review with no corrective pathway"
            },
            {
              "id": "b",
              "text": "Policy links, measurable thresholds, and remediation triggers"
            },
            {
              "id": "c",
              "text": "No public or stakeholder transparency"
            },
            {
              "id": "d",
              "text": "Unbounded discretion without guardrails"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Mature governance connects policy goals to measurable thresholds and corrective pathways."
        }
      ]
    },
    {
      "id": "sustainability-policy-401-l04",
      "title": "Sustainability Policy Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "sustainability-policy-401-l04-a1",
          "type": "document",
          "title": "Case Brief: City Decarbonization Roadmap",
          "content": "Background document detailing the city's goals, constraints, and key stakeholders for the case analysis."
        },
        {
          "id": "sustainability-policy-401-l04-a2",
          "type": "image",
          "title": "Example Tradeoff Matrix",
          "content": "A visual example of a matrix comparing policy options across effectiveness, reliability, equity, and feasibility."
        }
      ],
      "chunks": [
        {
          "id": "sustainability-policy-401-l04-c1",
          "kind": "example",
          "title": "Case Context and Stakes",
          "content": "In this case study, you will analyze a city's decarbonization roadmap. The project requires balancing tradeoffs between affordability, grid reliability, and environmental targets. Your task is to map the stakes for different communities and identify hidden second-order risks beyond the obvious challenges."
        },
        {
          "id": "sustainability-policy-401-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix Construction",
          "content": "You will construct a tradeoff matrix to systematically compare different policy interventions. This tool helps evaluate options against multiple criteria like effectiveness, reliability, equity, and implementation feasibility, making the strengths and weaknesses of each path clear."
        },
        {
          "id": "sustainability-policy-401-l04-c3",
          "kind": "recap",
          "title": "Failure Lessons and Recovery",
          "content": "This lesson focuses on learning from failure. You will learn to convert failure signatures—recurring patterns of problems—into preventative safeguards. You will also outline response playbooks and monitoring updates to ensure adaptive and resilient strategies."
        }
      ],
      "flashcards": [
        {
          "id": "sustainability-policy-401-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured comparison of options under conflicting priorities, used to clarify and defend a chosen path."
        },
        {
          "id": "sustainability-policy-401-l04-f2",
          "front": "Failure Signature",
          "back": "A recurring, observable pattern of indicators that signals a specific class of system risk."
        },
        {
          "id": "sustainability-policy-401-l04-f3",
          "front": "Recovery Playbook",
          "back": "A documented, pre-planned sequence of actions for safe and timely response during adverse events."
        }
      ]
    },
    {
      "id": "sustainability-policy-401-l05",
      "title": "Sustainability Policy Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "sustainability-policy-401-l05-a1",
          "type": "image",
          "title": "Simulation Interface Preview",
          "content": "A screenshot of the simulation dashboard, showing intervention inputs, uncertainty parameters, and outcome metrics."
        }
      ],
      "chunks": [
        {
          "id": "sustainability-policy-401-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation Setup",
          "content": "In this hands-on session, you will configure policy scenarios for simulation. This involves selecting interventions, defining uncertainty parameters like budget fluctuations or technological delays, and setting measurable thresholds for success and failure."
        },
        {
          "id": "sustainability-policy-401-l05-c2",
          "kind": "recap",
          "title": "Simulation Debrief",
          "content": "After each simulation run, you will lead a debriefing session. The goal is to analyze the results, assess expected gains against unintended side effects, and verify that the outcomes comply with established governance standards. This reflective practice is essential for refining policy design."
        }
      ],
      "interactiveActivities": [
        {
          "id": "sustainability-policy-401-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Compare three intervention paths and justify which best advances policy goals while respecting long-term accountability.",
          "instructions": [
            "Define your primary objective and critical guardrails before selecting interventions.",
            "Record one near-term and one long-term tradeoff for each option.",
            "Select metrics that would confirm or falsify the effectiveness of your chosen path."
          ]
        },
        {
          "id": "sustainability-policy-401-l05-act2",
          "type": "matching_pairs",
          "title": "Mitigation Alignment",
          "description": "Match each risk condition with the strongest mitigation response.",
          "pairs": [
            {
              "left": "Ambiguous ownership",
              "right": "Create explicit role and escalation map"
            },
            {
              "left": "Weak signal quality",
              "right": "Strengthen intake validation and quality checks"
            },
            {
              "left": "Policy drift",
              "right": "Re-anchor controls to documented standards"
            },
            {
              "left": "Stakeholder backlash",
              "right": "Increase transparency and two-way communication"
            }
          ]
        }
      ]
    },
    {
      "id": "sustainability-policy-401-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "sustainability-policy-401-l06-a1",
          "type": "document",
          "title": "Case & Simulation Review",
          "content": "A summary of key decision points and analysis techniques from the Case Analysis and Simulation Studio lessons."
        }
      ],
      "questions": [
        {
          "id": "sustainability-policy-401-l06-q1",
          "text": "When constructing a tradeoff matrix for a city's decarbonization plan, what is the primary purpose of the 'equity' dimension?",
          "skillId": "sustainability-policy-401-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To measure the total carbon reduction"
            },
            {
              "id": "b",
              "text": "To assess the financial cost to the city"
            },
            {
              "id": "c",
              "text": "To evaluate how costs and benefits are distributed among different resident groups"
            },
            {
              "id": "d",
              "text": "To determine the technical reliability of the power grid"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The equity dimension specifically analyzes the fairness of impact distribution across stakeholders."
        },
        {
          "id": "sustainability-policy-401-l06-q2",
          "text": "In a policy simulation, an intervention meets its primary environmental target but also significantly increases energy costs for low-income households. This outcome is best described as a:",
          "skillId": "sustainability-policy-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Model error"
            },
            {
              "id": "b",
              "text": "Successful outcome"
            },
            {
              "id": "c",
              "text": "Negative side effect"
            },
            {
              "id": "d",
              "text": "Baseline metric"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A negative side effect is an unintended, adverse consequence of an intervention, which must be monitored alongside primary goals."
        },
        {
          "id": "sustainability-policy-401-l06-q3",
          "text": "A 'failure signature' in a case analysis refers to:",
          "skillId": "sustainability-policy-401-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "A legally binding document admitting fault"
            },
            {
              "id": "b",
              "text": "A recurring pattern of observable indicators that signals a specific type of system risk"
            },
            {
              "id": "c",
              "text": "The final report after a project is cancelled"
            },
            {
              "id": "d",
              "text": "A single, unpredictable catastrophic event"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A failure signature is a diagnostic tool used to identify and predict systemic weaknesses based on recurring patterns."
        },
        {
          "id": "sustainability-policy-401-l06-q4",
          "text": "Your simulation reveals a high risk of 'policy drift' over time. Which mitigation response is most appropriate?",
          "skillId": "sustainability-policy-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Increase two-way communication with stakeholders"
            },
            {
              "id": "b",
              "text": "Create an explicit role and escalation map"
            },
            {
              "id": "c",
              "text": "Strengthen intake validation and quality checks"
            },
            {
              "id": "d",
              "text": "Re-anchor controls to documented standards periodically"
            }
          ],
          "correctOptionId": "d",
          "explanation": "Policy drift, where implementation strays from the original intent, is best countered by periodically re-aligning operations with documented standards."
        },
        {
          "id": "sustainability-policy-401-l06-q5",
          "text": "What is the primary value of using both case analysis and simulation to evaluate policy?",
          "skillId": "sustainability-policy-401-skill-level",
          "options": [
            {
              "id": "a",
              "text": "They produce identical results, confirming the conclusion"
            },
            {
              "id": "b",
              "text": "Case analysis provides real-world context, while simulation tests responses to controlled uncertainty"
            },
            {
              "id": "c",
              "text": "Simulation is for technical issues, and case analysis is for stakeholder issues"
            },
            {
              "id": "d",
              "text": "They are redundant steps required for compliance"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The two methods are complementary; case studies ground the problem in reality, while simulations allow for testing hypotheses and exploring future possibilities under various conditions."
        }
      ]
    },
    {
      "id": "sustainability-policy-401-l07",
      "title": "Sustainability Policy Ethics and Integration",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "sustainability-policy-401-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "An example diagram illustrating how policy costs and benefits are distributed across different community groups."
        }
      ],
      "chunks": [
        {
          "id": "sustainability-policy-401-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Mapping",
          "content": "In this lesson, you will learn to map how policy impacts are distributed among different stakeholders. We will focus on identifying asymmetries, where the benefits and burdens of a policy do not align across groups. Understanding these dynamics is crucial for creating fair and effective policies."
        },
        {
          "id": "sustainability-policy-401-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Effective accountability requires a clear architecture. This includes decision traceability, the right to review and appeal decisions, and established standards for remediation when harms occur. By designing this architecture, you build trust and improve the legitimacy of policy."
        },
        {
          "id": "sustainability-policy-401-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "To ensure your policies are both effective and ethical, you will use a final checklist. This tool helps evaluate the integration of ethical considerations, the technical reliability of the policy, and the level of stakeholder trust. This review ensures your policies are responsible and beneficial."
        }
      ],
      "flashcards": [
        {
          "id": "sustainability-policy-401-l07-f1",
          "front": "Impact Distribution",
          "back": "How the benefits and harms of a policy are allocated across different stakeholder groups."
        },
        {
          "id": "sustainability-policy-401-l07-f2",
          "front": "Decision Traceability",
          "back": "The ability to explain why a decision was made, by whom, and with what evidence, which is a cornerstone of accountability."
        },
        {
          "id": "sustainability-policy-401-l07-f3",
          "front": "Responsible Execution",
          "back": "A delivery mode that combines effectiveness, fairness, and the capacity to correct course when negative impacts arise."
        }
      ]
    },
    {
      "id": "sustainability-policy-401-l08",
      "title": "Sustainability Policy Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "sustainability-policy-401-l08-a1",
          "type": "document",
          "title": "Capstone Charter Template",
          "content": "A structured document to guide the creation of your capstone charter, including sections for scope, metrics, risks, and governance."
        }
      ],
      "chunks": [
        {
          "id": "sustainability-policy-401-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter Drafting",
          "content": "In this interactive session, you will draft a comprehensive charter for your capstone project. This document will define the project's scope, identify key constraints, establish metrics for success, and set governance checkpoints to ensure the project stays on track."
        },
        {
          "id": "sustainability-policy-401-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "As you prepare for your final capstone presentation, the focus shifts to defense readiness. This involves building a strong, evidence-based justification for your policy recommendation and preparing to respond thoughtfully to critical feedback and challenging questions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "sustainability-policy-401-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with measurable objectives, risks, and remediation plans.",
          "instructions": [
            "State your primary objective and clear boundary conditions.",
            "Define at least three measurable success indicators.",
            "Document a governance escalation pathway for critical failures."
          ]
        },
        {
          "id": "sustainability-policy-401-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Panel",
          "description": "Defend your capstone approach against a simulated panel offering technical, policy, and stakeholder critiques."
        }
      ]
    }
  ]
};
