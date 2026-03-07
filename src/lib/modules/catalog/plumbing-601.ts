import type { LearningModule } from "@/lib/modules/types";

export const plumbing_601_Module: LearningModule = {
  "id": "plumbing-601",
  "title": "Plumbing Research and Leadership",
  "description": "A post-401 specialization in plumbing, focused on systems diagnostics, operational design, impact analysis, and governance. This module uses advanced case studies, simulations, and defense-based checkpoints to build leadership skills.",
  "subject": "Plumbing",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "plumbing",
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
    "Apply advanced methods for diagnosing plumbing systems in high-constraint environments.",
    "Design robust systems for plumbing operations with measurable control points.",
    "Evaluate the impact and tradeoffs of plumbing interventions with research-grade rigor.",
    "Develop and implement plumbing governance frameworks with clear accountability.",
    "Lead cross-functional decision reviews, communicating tradeoffs and uncertainties clearly.",
    "Defend recommendations against expert critique using evidence and logical reasoning."
  ],
  "lessons": [
    {
      "id": "plumbing-601-l01",
      "title": "Advanced Plumbing Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "plumbing-601-l01-a1",
          "type": "diagram",
          "title": "Plumbing System Interdependencies Map",
          "content": "A visual map showing how different parts of a complex plumbing system (e.g., supply, drainage, venting) interact and depend on each other."
        }
      ],
      "chunks": [
        {
          "id": "plumbing-601-l01-c1",
          "kind": "concept",
          "title": "Defining System Boundaries",
          "content": "This lesson introduces advanced concepts for analyzing complex plumbing systems. We'll learn how to define the scope of a problem, diagnose issues systematically, and design effective operational plans. Mastering these skills is key to tackling the most challenging plumbing scenarios."
        },
        {
          "id": "plumbing-601-l01-c2",
          "kind": "concept",
          "title": "Modeling Cause and Effect",
          "content": "Here, we will map the causal chains that lead to plumbing failures. We will also learn to account for uncertainty and system dependencies when planning interventions. This helps you make smarter, more reliable decisions when faced with incomplete information."
        },
        {
          "id": "plumbing-601-l01-c3",
          "kind": "recap",
          "title": "Using Evidence-Based Practices",
          "content": "We'll recap the importance of backing up all claims with measurable evidence. This includes defining clear success metrics and using review checkpoints to ensure your work is both effective and accountable."
        }
      ],
      "flashcards": [
        {
          "id": "plumbing-601-l01-f1",
          "front": "Plumbing Systems Diagnostics",
          "back": "The systematic process of identifying the root cause of issues in a plumbing system by defining assumptions and measuring variables."
        },
        {
          "id": "plumbing-601-l01-f2",
          "front": "Plumbing Operations Design",
          "back": "The process of planning a plumbing project or repair, including checkpoints and backup plans, to ensure it works correctly under pressure."
        },
        {
          "id": "plumbing-601-l01-f3",
          "front": "Tradeoff Analysis",
          "back": "The discipline of evaluating different solutions to identify the true benefits and hidden costs of each, such as choosing between a cheaper part with a shorter lifespan and a more expensive, durable one."
        }
      ]
    },
    {
      "id": "plumbing-601-l02",
      "title": "Plumbing Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "plumbing-601-l02-a1",
          "type": "template",
          "title": "Workflow Design Template",
          "content": "A fillable template for designing a plumbing workflow, with sections for goals, steps, required materials, checkpoints, and rollback plans."
        }
      ],
      "chunks": [
        {
          "id": "plumbing-601-l02-c1",
          "kind": "practice",
          "title": "Designing and Stress-Testing Workflows",
          "content": "In this interactive lab, you will design a detailed workflow for a complex plumbing task. We will then run simulations to stress-test your plan against unexpected problems, helping you build more resilient and reliable operational designs."
        },
        {
          "id": "plumbing-601-l02-c2",
          "kind": "recap",
          "title": "Building Smart Control Gates",
          "content": "We'll review how to structure workflows with key control gates. These include quality checkpoints, criteria for stopping and reversing a step (rollback), and clear rules for when to escalate a problem to a supervisor."
        }
      ],
      "interactiveActivities": [
        {
          "id": "plumbing-601-l02-act1",
          "type": "matching_pairs",
          "title": "Match Controls to Outcomes",
          "description": "Match each operational control to the reliability or governance benefit it provides.",
          "pairs": [
            {
              "left": "Pre-work inspection checklist",
              "right": "Prevents predictable failures before they start."
            },
            {
              "left": "Pressure test failure trigger",
              "right": "Limits potential water damage by stopping a faulty installation."
            },
            {
              "left": "Baseline performance dashboard",
              "right": "Provides clear evidence of whether an intervention worked."
            },
            {
              "left": "Post-project retrospective meeting",
              "right": "Improves the quality of planning for the next project."
            }
          ]
        }
      ]
    },
    {
      "id": "plumbing-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "plumbing-601-l03-a1",
          "type": "checklist",
          "title": "Key Concepts Review",
          "content": "A one-page checklist summarizing the core concepts from the first two lessons, including systems diagnostics, operational design, and control gates."
        }
      ],
      "questions": [
        {
          "id": "plumbing-601-l03-q1",
          "text": "Which practice most improves the quality of a plumbing systems diagnosis?",
          "skillId": "plumbing-601-diagnostics",
          "options": [
            {
              "id": "a",
              "text": "Guessing the cause based on past experience alone."
            },
            {
              "id": "b",
              "text": "Defining assumptions, constraints, and measurable indicators."
            },
            {
              "id": "c",
              "text": "Optimizing only for the speed of the diagnosis."
            },
            {
              "id": "d",
              "text": "Ignoring rare but possible causes."
            }
          ],
          "correctOptionId": "b",
          "explanation": "High-quality decisions are based on explicit assumptions, known constraints, and clear metrics, which allows for a systematic and verifiable diagnosis."
        },
        {
          "id": "plumbing-601-l03-q2",
          "text": "A strong operational design for a complex plumbing job requires:",
          "skillId": "plumbing-601-execution",
          "options": [
            {
              "id": "a",
              "text": "Clear roles, scheduled checkpoints, and rules for escalation."
            },
            {
              "id": "b",
              "text": "Vague responsibilities and changing the plan on the fly."
            },
            {
              "id": "c",
              "text": "Skipping any review after the job is complete."
            },
            {
              "id": "d",
              "text": "No plan for what to do if a step fails."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable execution depends on clear ownership, planned reviews (checkpoints), and predefined triggers for escalating problems."
        },
        {
          "id": "plumbing-601-l03-q3",
          "text": "A defensible tradeoff analysis for a plumbing repair should include:",
          "skillId": "plumbing-601-analysis",
          "options": [
            {
              "id": "a",
              "text": "A story about a time a similar repair worked."
            },
            {
              "id": "b",
              "text": "A comparison to a baseline, analysis of side effects, and acknowledging uncertainties."
            },
            {
              "id": "c",
              "text": "Changing the definition of success after seeing the results."
            },
            {
              "id": "d",
              "text": "Excluding worst-case scenarios from the analysis."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A defensible analysis is honest and comprehensive. It compares results to a baseline, considers unintended consequences, and discloses what is still unknown."
        },
        {
          "id": "plumbing-601-l03-q4",
          "text": "A mature governance system connects:",
          "skillId": "plumbing-601-governance",
          "options": [
            {
              "id": "a",
              "text": "The goal of a policy, measurable controls, and a plan for corrective action."
            },
            {
              "id": "b",
              "text": "A policy with no way to measure if it's being followed."
            },
            {
              "id": "c",
              "text": "Goals without assigning responsibility or a path for escalation."
            },
            {
              "id": "d",
              "text": "Operations without transparent accountability for mistakes."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Mature governance isn't just about rules; it's about linking the intent of the rules to measurable actions and having a clear process for what to do when things go wrong."
        }
      ]
    },
    {
      "id": "plumbing-601-l04",
      "title": "Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "plumbing-601-l04-a1",
          "type": "document",
          "title": "Case Study Analysis Framework",
          "content": "A structured document guiding learners on how to break down a complex case study, including sections for identifying stakeholders, constraints, and potential solutions."
        }
      ],
      "chunks": [
        {
          "id": "plumbing-601-l04-c1",
          "kind": "concept",
          "title": "Deconstructing Complex Scenarios",
          "content": "In this lesson, we will analyze real-world case studies that involve competing constraints, such as budget, time, and safety regulations. We will break down the impacts and tradeoffs of different decisions to understand the complexity of professional plumbing challenges."
        },
        {
          "id": "plumbing-601-l04-c2",
          "kind": "practice",
          "title": "Framing the Tradeoffs",
          "content": "We will practice comparing different solutions for a plumbing problem. You'll learn to evaluate options based on multiple criteria like safety, reliability, cost, and fairness. This skill is crucial for making balanced and defensible decisions in your work."
        },
        {
          "id": "plumbing-601-l04-c3",
          "kind": "recap",
          "title": "The Decision Memo",
          "content": "We will recap a standard format for presenting a recommendation. A strong decision memo clearly states the assumptions made, the evidence considered, the risks involved, and the fallback plans, ensuring your decisions are well-documented and transparent."
        }
      ]
    },
    {
      "id": "plumbing-601-l05",
      "title": "Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "plumbing-601-l05-a1",
          "type": "guide",
          "title": "Simulation Control Panel Guide",
          "content": "An interactive tutorial explaining the controls and variables within the simulation, such as budget allocation, team deployment, and risk management settings."
        }
      ],
      "chunks": [
        {
          "id": "plumbing-601-l05-c1",
          "kind": "practice",
          "title": "Managing a Live Scenario",
          "content": "In this interactive clinic, you will manage a simulated plumbing crisis. You'll have to make decisions in real-time, balancing performance goals with safety and governance constraints. This hands-on experience will test your ability to manage complex, evolving situations."
        },
        {
          "id": "plumbing-601-l05-c2",
          "kind": "recap",
          "title": "Designing Adaptive Responses",
          "content": "We'll review how to adapt your plan as a situation changes. Effective leaders update their approach based on new information while maintaining a clear record of why decisions were made, ensuring accountability."
        }
      ],
      "interactiveActivities": [
        {
          "id": "plumbing-601-l05-act1",
          "type": "scenario",
          "title": "High-Pressure System Failure",
          "description": "Manage a high-pressure plumbing failure in a commercial building. You must allocate resources and make critical decisions under a tight deadline and budget, while minimizing system downtime."
        }
      ]
    },
    {
      "id": "plumbing-601-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "plumbing-601-l06-a1",
          "type": "checklist",
          "title": "Scenario Debrief Checklist",
          "content": "A checklist to help you review your performance in a case study or simulation, focusing on decision quality, risk management, and outcome analysis."
        }
      ],
      "questions": [
        {
          "id": "plumbing-601-l06-q1",
          "text": "In a case study involving a historic building, what is the most critical first step before recommending a plumbing modernization?",
          "skillId": "plumbing-601-case-analysis",
          "options": [
            {
              "id": "a",
              "text": "Choosing the most advanced piping material available."
            },
            {
              "id": "b",
              "text": "Establishing a clear baseline of the current system's state and defining the project's constraints (e.g., preservation rules, budget)."
            },
            {
              "id": "c",
              "text": "Assuming the client has an unlimited budget."
            },
            {
              "id": "d",
              "text": "Focusing only on improving water pressure."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible recommendations start with understanding the current situation (baseline) and the rules you have to play by (constraints). This is especially true in sensitive environments like historic buildings."
        },
        {
          "id": "plumbing-601-l06-q2",
          "text": "During a simulation of a city-wide water main break, your initial repair strategy fails. What is the most resilient response?",
          "skillId": "plumbing-601-simulation-response",
          "options": [
            {
              "id": "a",
              "text": "Continue with the failed strategy, hoping it eventually works."
            },
            {
              "id": "b",
              "text": "Immediately activate a pre-planned fallback option and escalate the issue according to protocol."
            },
            {
              "id": "c",
              "text": "Blame the simulation for being unrealistic."
            },
            {
              "id": "d",
              "text": "Hide the failure from stakeholders until you find a new solution."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Resilience in operations means having backup plans and clear procedures for when things go wrong. Activating a fallback and escalating allows for a swift, controlled response."
        },
        {
          "id": "plumbing-601-l06-q3",
          "text": "When analyzing the impact of installing low-flow fixtures in a large facility, what constitutes the most rigorous analysis?",
          "skillId": "plumbing-601-impact-evaluation",
          "options": [
            {
              "id": "a",
              "text": "Only reporting the total water savings."
            },
            {
              "id": "b",
              "text": "Comparing water usage to a pre-installation baseline, while also analyzing potential side effects (e.g., user satisfaction, drainage issues) and acknowledging uncertainties in savings."
            },
            {
              "id": "c",
              "text": "Claiming the project was a success without any data."
            },
            {
              "id": "d",
              "text": "Changing the project goals to match the final water usage numbers."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rigorous evaluation is comprehensive. It requires comparing to a baseline, looking for unintended consequences (side effects), and being honest about the precision of the results (uncertainty)."
        },
        {
          "id": "plumbing-601-l06-q4",
          "text": "In a case study about a controversial new pipeline, what does strong governance look like?",
          "skillId": "plumbing-601-governance-application",
          "options": [
            {
              "id": "a",
              "text": "Aligning decision-making authority with measurable safety controls and clear obligations for remediation if something goes wrong."
            },
            {
              "id": "b",
              "text": "Making policy decisions without consulting the engineers who will build it."
            },
            {
              "id": "c",
              "text": "Avoiding public review to speed up the project."
            },
            {
              "id": "d",
              "text": "Treating accountability as someone else's problem."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Mature governance ensures that the people with authority are also bound by measurable rules and are responsible for fixing any negative outcomes."
        }
      ]
    },
    {
      "id": "plumbing-601-l07",
      "title": "Plumbing Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "plumbing-601-l07-a1",
          "type": "template",
          "title": "Stakeholder Impact Map",
          "content": "A visual template for mapping how a plumbing project's benefits and burdens are distributed across different groups (e.g., residents, businesses, environment)."
        }
      ],
      "chunks": [
        {
          "id": "plumbing-601-l07-c1",
          "kind": "concept",
          "title": "Mapping Stakeholder Impacts",
          "content": "In this lesson, we will map out how the benefits, costs, and risks of a plumbing project are distributed across different groups of people. Understanding these impacts is a critical part of ethical and transparent plumbing governance."
        },
        {
          "id": "plumbing-601-l07-c2",
          "kind": "concept",
          "title": "Designing for Accountability",
          "content": "Here, we will explore how to build accountability into plumbing projects. This includes creating a clear decision-making record, defining who has the right to review plans, and establishing who is obligated to fix problems."
        },
        {
          "id": "plumbing-601-l07-c3",
          "kind": "recap",
          "title": "The Responsible Leadership Checklist",
          "content": "We'll conclude with a practical checklist for responsible leadership. This tool helps you connect project outcomes to ethical standards, ensure compliance with policy, and build resilience into your plumbing practices."
        }
      ],
      "flashcards": [
        {
          "id": "plumbing-601-l07-f1",
          "front": "Impact Distribution",
          "back": "How the positive and negative outcomes of a project are spread across different populations and over time."
        },
        {
          "id": "plumbing-601-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record showing who made a decision, when, and based on what evidence and rationale."
        },
        {
          "id": "plumbing-601-l07-f3",
          "front": "Responsible Leadership",
          "back": "Making decisions that balance performance goals with accountability and ethical considerations for all stakeholders."
        }
      ]
    },
    {
      "id": "plumbing-601-l08",
      "title": "Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "plumbing-601-l08-a1",
          "type": "template",
          "title": "Capstone Defense Presentation Template",
          "content": "A slide deck template with sections for problem statement, evidence, analysis, recommendation, risk assessment, and implementation plan."
        }
      ],
      "chunks": [
        {
          "id": "plumbing-601-l08-c1",
          "kind": "practice",
          "title": "Assembling Your Defense",
          "content": "In this activity, you will assemble a complete recommendation for a complex plumbing scenario. Your brief must include evidence-backed claims, a clear acknowledgment of uncertainties, and a plan for remediation if things go wrong."
        },
        {
          "id": "plumbing-601-l08-c2",
          "kind": "recap",
          "title": "Rehearsing for Expert Review",
          "content": "We will practice responding to tough questions from different perspectives: a technical expert, a governance official, and a community stakeholder. This rehearsal will prepare you to defend your work confidently and professionally."
        }
      ],
      "interactiveActivities": [
        {
          "id": "plumbing-601-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Present your capstone recommendation to a simulated expert panel and defend it against critical cross-examination."
        }
      ]
    },
    {
      "id": "plumbing-601-l09",
      "title": "Checkpoint 3: Capstone Defense",
      "type": "quiz",
      "duration": 15,
      "learningAids": [
        {
          "id": "plumbing-601-l09-a1",
          "type": "guide",
          "title": "Comprehensive Module Review Guide",
          "content": "A summary document covering all major topics from the module, including diagnostics, operational design, case analysis, simulation, and governance."
        }
      ],
      "questions": [
        {
          "id": "plumbing-601-l09-q1",
          "text": "You are leading a project to replace the plumbing in a hospital. Which of the following demonstrates the strongest leadership?",
          "skillId": "plumbing-601-synthesis-leadership",
          "options": [
            {
              "id": "a",
              "text": "Choosing the cheapest materials to maximize profit, without consulting hospital staff."
            },
            {
              "id": "b",
              "text": "Developing a phased installation plan with clear checkpoints, communicating potential disruptions to staff, and having a contingency plan for water supply."
            },
            {
              "id": "c",
              "text": "Starting the work without a formal plan to show initiative."
            },
            {
              "id": "d",
              "text": "Ignoring infection control protocols to finish the job faster."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Strong leadership synthesizes operational design (phased plan, checkpoints), stakeholder communication, and risk management (contingency plan) to achieve the goal responsibly."
        },
        {
          "id": "plumbing-601-l09-q2",
          "text": "When presenting your analysis of a recurring sewer backup issue to a city council, what is the most crucial element to include in your recommendation?",
          "skillId": "plumbing-601-synthesis-communication",
          "options": [
            {
              "id": "a",
              "text": "A highly technical explanation that only other plumbers can understand."
            },
            {
              "id": "b",
              "text": "A single solution presented as a perfect fix with no downsides."
            },
            {
              "id": "c",
              "text": "A clear explanation of the tradeoffs between different solutions (e.g., cost vs. long-term reliability), including an honest assessment of uncertainties."
            },
            {
              "id": "d",
              "text": "A demand for an immediate, unlimited budget."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Effective communication with governance bodies requires translating technical issues into clear tradeoffs and being transparent about what is known and unknown, enabling them to make an informed decision."
        },
        {
          "id": "plumbing-601-l09-q3",
          "text": "Your team implements a new, innovative water recycling system, but it fails to meet the projected savings. What is the most accountable next step?",
          "skillId": "plumbing-601-synthesis-accountability",
          "options": [
            {
              "id": "a",
              "text": "Adjust the original projections to match the actual results."
            },
            {
              "id": "b",
              "text": "Conduct a root-cause analysis, document the findings transparently, and propose a remediation plan based on the evidence."
            },
            {
              "id": "c",
              "text": "Disband the team to avoid further issues."
            },
            {
              "id": "d",
              "text": "Hope that no one notices the discrepancy."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Accountability involves owning the outcome, diagnosing the failure systematically (root-cause analysis), communicating honestly, and taking corrective action."
        },
        {
          "id": "plumbing-601-l09-q4",
          "text": "A simulation reveals that your emergency shutdown procedure for a chemical plant's plumbing has a 15% chance of failing under specific conditions. What is the most responsible action?",
          "skillId": "plumbing-601-synthesis-risk",
          "options": [
            {
              "id": "a",
              "text": "Ignore the result because the probability is low."
            },
            {
              "id": "b",
              "text": "Report the risk, redesign the procedure to include redundancies, and re-run the simulation to verify the fix."
            },
            {
              "id": "c",
              "text": "Delete the simulation results to avoid liability."
            },
            {
              "id": "d",
              "text": "Inform the plant manager but recommend no action to avoid costs."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Responsible leadership requires taking simulation and analysis seriously, especially concerning safety. The correct process is to report, redesign to mitigate the risk, and verify the solution."
        }
      ]
    }
  ]
};
