import type { LearningModule } from "@/lib/modules/types";

export const sports_science_401_Module: LearningModule = {
  "id": "sports-science-401",
  "title": "Sports Science Leadership and Capstone",
  "description": "An advanced curriculum in Sports Science focusing on performance physiology, training periodization, biomechanics, and injury prevention. Learners will engage in case analysis, simulation, and mastery checkpoints to develop leadership skills and complete a capstone project.",
  "subject": "Health Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "sports",
    "human-performance",
    "leadership"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Apply principles of performance physiology with explicit assumptions and constraints.",
    "Design and manage training periodization workflows with reliable control points.",
    "Evaluate biomechanics and movement analysis using baseline comparisons and side-effect analysis.",
    "Develop robust injury prevention strategies with accountable governance mechanisms.",
    "Communicate complex data, uncertainty, and tradeoffs effectively to diverse stakeholders.",
    "Construct defensible recommendations for performance improvement that are resilient to critical review."
  ],
  "lessons": [
    {
      "id": "sports-science-401-l01",
      "title": "Core Foundations in Sports Science",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "sports-science-401-l01-a1",
          "type": "image",
          "title": "The Performance System",
          "content": "A diagram illustrating the interconnectedness of physiology, biomechanics, and training cycles in determining athletic output."
        }
      ],
      "chunks": [
        {
          "id": "sports-science-401-l01-c1",
          "kind": "concept",
          "title": "Scope and Shared Vocabulary",
          "content": "This lesson introduces the core disciplines of advanced sports science. We will define key terms and explore the relationship between performance physiology—the study of the body's response to exercise—and training periodization, the strategic planning of an athlete's training schedule. Understanding this foundation is essential for applying these concepts in real-world scenarios."
        },
        {
          "id": "sports-science-401-l01-c2",
          "kind": "concept",
          "title": "Causal Structures and Constraints",
          "content": "Effective sports science requires understanding cause and effect. Here, you will learn to map causal pathways, such as how training volume affects fatigue and injury risk. We will also practice identifying and testing hidden assumptions (e.g., 'more training is always better') before recommending interventions to improve performance."
        },
        {
          "id": "sports-science-401-l01-c3",
          "kind": "recap",
          "title": "Evidence-Based Practice",
          "content": "This recap emphasizes the importance of grounding all claims in observable, measurable evidence. We will review how to properly document uncertainties and establish review checkpoints to ensure that our conclusions are both accurate and reliable."
        }
      ],
      "flashcards": [
        {
          "id": "sports-science-401-l01-f1",
          "front": "Performance Physiology",
          "back": "The study of how the body functions and adapts during exercise, forming a core analytical lens in Sports Science."
        },
        {
          "id": "sports-science-401-l01-f2",
          "front": "Training Periodization",
          "back": "The systematic planning of athletic training, organizing it into cycles to promote peak performance and prevent overtraining."
        },
        {
          "id": "sports-science-401-l01-f3",
          "front": "Biomechanics and Movement Analysis",
          "back": "The framework for evaluating movement efficiency and technique to validate outcomes, enhance performance, and reduce injury risk."
        }
      ]
    },
    {
      "id": "sports-science-401-l02",
      "title": "Sports Science Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "sports-science-401-l02-a1",
          "type": "image",
          "title": "Return-to-Play Protocol",
          "content": "A flowchart showing a step-by-step decision-making process for an injured athlete's return to competition, highlighting control gates and readiness checks."
        }
      ],
      "chunks": [
        {
          "id": "sports-science-401-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction and Testing",
          "content": "In this lab, you will design a practical workflow for a sports science challenge, such as a 'return-to-play' protocol. You will define the goal, identify the evidence needed at each stage, explain how that evidence informs your decisions, and stress-test the workflow against potential uncertainties, like a slower-than-expected recovery."
        },
        {
          "id": "sports-science-401-l02-c2",
          "kind": "recap",
          "title": "Control Gates and Readiness",
          "content": "This recap focuses on building safety and reliability into your workflows. We'll review how to map ownership for each step, set clear criteria for advancing (e.g., passing a strength test), define conditions for pausing or rolling back the plan, and identify verification signals that confirm an athlete is ready for the next phase."
        }
      ],
      "interactiveActivities": [
        {
          "id": "sports-science-401-l02-act1",
          "type": "matching_pairs",
          "title": "Control Mapping",
          "description": "Match each control mechanism to its primary function in a workflow.",
          "pairs": [
            {
              "left": "Pre-release gate",
              "right": "Reduces preventable failures"
            },
            {
              "left": "Rollback threshold",
              "right": "Contains negative outcomes quickly"
            },
            {
              "left": "Baseline monitor",
              "right": "Helps attribute cause and effect"
            },
            {
              "left": "Retrospective cycle",
              "right": "Improves future decision quality"
            }
          ]
        },
        {
          "id": "sports-science-401-l02-act2",
          "type": "sorting_buckets",
          "title": "Constraint Sorting",
          "description": "Sort these constraints into their correct categories.",
          "buckets": [
            "Technical",
            "Policy",
            "Stakeholder Impact"
          ],
          "items": [
            {
              "text": "Athlete's maximum heart rate zone",
              "bucket": "Technical"
            },
            {
              "text": "League rules on practice time",
              "bucket": "Policy"
            },
            {
              "text": "Athlete's trust in the coaching staff",
              "bucket": "Stakeholder Impact"
            },
            {
              "text": "Anti-doping regulations",
              "bucket": "Policy"
            }
          ]
        }
      ]
    },
    {
      "id": "sports-science-401-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "sports-science-401-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Before answering, document your assumptions, show your reasoning, and verify your conclusions."
        }
      ],
      "questions": [
        {
          "id": "sports-science-401-l03-q1",
          "text": "Which approach most improves decisions in performance physiology?",
          "skillId": "sports-science-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Rely on assumptions that are never tested"
            },
            {
              "id": "b",
              "text": "Define constraints, test failure modes, and monitor indicators"
            },
            {
              "id": "c",
              "text": "Treat all athletes and contexts as identical"
            },
            {
              "id": "d",
              "text": "Avoid analyzing uncertainty"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliable decisions require explicit constraints, failure tests, and measured signals to guide adjustments."
        },
        {
          "id": "sports-science-401-l03-q2",
          "text": "This advanced course emphasizes:",
          "skillId": "sports-science-401-skill-level",
          "options": [
            {
              "id": "a",
              "text": "Strategic leadership, policy integration, and capstone defense"
            },
            {
              "id": "b",
              "text": "Execution speed without review"
            },
            {
              "id": "c",
              "text": "Making decisions without baselines or controls"
            },
            {
              "id": "d",
              "text": "Relying on a single perspective for decision-making"
            }
          ],
          "correctOptionId": "a",
          "explanation": "This level is explicitly structured around strategic leadership, integrating policy with operations, and defending a capstone project."
        },
        {
          "id": "sports-science-401-l03-q3",
          "text": "What best strengthens the reliability of a training periodization plan?",
          "skillId": "sports-science-401-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "Unassigned tasks and unclear escalation paths"
            },
            {
              "id": "b",
              "text": "Control checkpoints, clear ownership, and response thresholds"
            },
            {
              "id": "c",
              "text": "Making untracked changes to the plan"
            },
            {
              "id": "d",
              "text": "Never reviewing incidents or setbacks"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliability depends on clear controls, owners, and threshold-driven responses to keep the plan on track."
        }
      ]
    },
    {
      "id": "sports-science-401-l04",
      "title": "Case Analysis: High-Performance Training",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "sports-science-401-l04-a1",
          "type": "practice",
          "title": "Case Study Checklist",
          "content": "A checklist graphic with key items: 1. Identify Primary Goal, 2. Map Risks & Constraints, 3. Analyze Tradeoffs, 4. Formulate Recommendation, 5. Define Success Metrics."
        }
      ],
      "chunks": [
        {
          "id": "sports-science-401-l04-c1",
          "kind": "example",
          "title": "Case Study: Pre-Season Training for a Collegiate Soccer Team",
          "content": "We will analyze a case study of a high-performance training program. The goal is to maximize athletic conditioning while ensuring adequate recovery and minimizing injury risk before the competitive season. Your task is to identify the key risks (e.g., overtraining, burnout) and constraints (e.g., limited budget, NCAA regulations) that must be managed."
        },
        {
          "id": "sports-science-401-l04-c2",
          "kind": "concept",
          "title": "The Tradeoff Matrix",
          "content": "We introduce the tradeoff matrix, a tool for evaluating different interventions. For our case study, we might compare three different pre-season plans. Each plan will be scored on criteria like effectiveness (performance gain), reliability (low injury rate), and feasibility (cost and time). This structured comparison helps justify your final recommendation."
        },
        {
          "id": "sports-science-401-l04-c3",
          "kind": "recap",
          "title": "Learning from Setbacks",
          "content": "This recap discusses how to transform failures into learning opportunities. If an athlete in the case study suffers a preventable injury, how do we respond? We'll cover creating safeguards (e.g., better monitoring), developing response playbooks (e.g., immediate recovery protocols), and updating our systems to prevent recurrence."
        }
      ],
      "flashcards": [
        {
          "id": "sports-science-401-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured tool for comparing alternative solutions across multiple, often competing, criteria."
        },
        {
          "id": "sports-science-401-l04-f2",
          "front": "Failure Pattern",
          "back": "A recurring type of risk or setback that can be analyzed to design targeted, preventative measures."
        },
        {
          "id": "sports-science-401-l04-f3",
          "front": "Response Playbook",
          "back": "A predefined action sequence to ensure a safe, timely, and effective recovery from an incident or setback."
        }
      ]
    },
    {
      "id": "sports-science-401-l05",
      "title": "Simulation Studio: Decision Making Under Pressure",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "sports-science-401-l05-a1",
          "type": "image",
          "title": "Simulation Dashboard",
          "content": "A mock dashboard showing inputs (training load, nutrition plan) and outputs (performance metrics, fatigue levels, injury probability) for a simulated athlete."
        }
      ],
      "chunks": [
        {
          "id": "sports-science-401-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this interactive practice, you will set up and run a simulation. For example, you could simulate the physiological impact of different hydration strategies on a marathon runner. You will configure the intervention scenarios (e.g., water only vs. electrolyte drinks), define uncertainty parameters (e.g., unexpected heatwave), and set measurable success thresholds (e.g., finishing time, dehydration levels)."
        },
        {
          "id": "sports-science-401-l05-c2",
          "kind": "recap",
          "title": "Simulation Debrief",
          "content": "After running the simulation, we will conduct a debrief. This review will evaluate the outcomes, identify any unintended side effects (e.g., gastrointestinal distress from a new drink), and assess how well the results align with our initial goals and constraints. This process is essential for refining strategies before real-world application."
        }
      ],
      "interactiveActivities": [
        {
          "id": "sports-science-401-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Evaluate three training strategies for a cyclist preparing for a race. Justify which one best balances performance goals with injury prevention.",
          "instructions": [
            "Define your primary objective and non-negotiable guardrails (e.g., no more than a 5% increase in injury risk).",
            "For each option, record the likely short-term gains and potential long-term risks.",
            "Select the metrics you will use to confirm success and the triggers that would require you to escalate a concern."
          ]
        },
        {
          "id": "sports-science-401-l05-act2",
          "type": "matching_pairs",
          "title": "Mitigation Alignment",
          "description": "Match the risk condition to the most effective mitigation response.",
          "pairs": [
            {
              "left": "Ambiguous ownership of recovery protocol",
              "right": "Define a role map and escalation authority"
            },
            {
              "left": "Wearable sensor data is noisy",
              "right": "Strengthen data intake validation and monitoring"
            },
            {
              "left": "Training plan deviates from best practices",
              "right": "Re-anchor controls to explicit standards"
            },
            {
              "left": "Athlete is hesitant about a new technique",
              "right": "Increase transparency and feedback channels"
            }
          ]
        }
      ]
    },
    {
      "id": "sports-science-401-l06",
      "title": "Checkpoint 2: Application and Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "sports-science-401-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Before answering, document your assumptions, show your reasoning, and verify your conclusions."
        }
      ],
      "questions": [
        {
          "id": "sports-science-401-l06-q1",
          "text": "When using a tradeoff matrix in a case analysis, what is its primary purpose?",
          "skillId": "sports-science-401-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To prove one option is perfect in every way"
            },
            {
              "id": "b",
              "text": "To ignore the negative aspects of a preferred option"
            },
            {
              "id": "c",
              "text": "To systematically compare options across multiple, competing criteria"
            },
            {
              "id": "d",
              "text": "To select the cheapest option regardless of effectiveness"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A tradeoff matrix provides a structured way to evaluate the pros and cons of different choices, ensuring a balanced and defensible decision."
        },
        {
          "id": "sports-science-401-l06-q2",
          "text": "In a simulation of athlete performance, 'defining uncertainty parameters' means:",
          "skillId": "sports-science-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Assuming everything will go exactly as planned"
            },
            {
              "id": "b",
              "text": "Introducing potential real-world variables like unexpected weather or minor illness"
            },
            {
              "id": "c",
              "text": "Only using data that is 100% certain and confirmed"
            },
            {
              "id": "d",
              "text": "Ignoring any factors that cannot be precisely measured"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defining uncertainty parameters makes a simulation more realistic by testing a plan against potential disruptions and variability."
        },
        {
          "id": "sports-science-401-l06-q3",
          "text": "What is the most productive outcome of a 'failure pattern' analysis?",
          "skillId": "sports-science-401-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "Assigning blame to a single individual"
            },
            {
              "id": "b",
              "text": "Designing targeted, preventative measures to address the root cause"
            },
            {
              "id": "c",
              "text": "Deciding that the activity is too risky to ever attempt again"
            },
            {
              "id": "d",
              "text": "Creating a new rule that punishes the failure"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The goal of analyzing failure patterns is to learn from them and build more resilient systems to prevent recurrence."
        }
      ]
    },
    {
      "id": "sports-science-401-l07",
      "title": "Policy and Ethics Integration",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "sports-science-401-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A diagram showing how a decision (e.g., implementing a new athlete data tracking system) affects different groups: athletes, coaches, administration, and fans."
        }
      ],
      "chunks": [
        {
          "id": "sports-science-401-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Mapping",
          "content": "Ethical practice requires considering all stakeholders. We will examine how the benefits (e.g., improved performance) and burdens (e.g., privacy concerns from data collection) of sports science initiatives are distributed among athletes, coaches, and organizations. This includes analyzing both short-term and long-term impacts."
        },
        {
          "id": "sports-science-401-l07-c2",
          "kind": "concept",
          "title": "Building Accountable Systems",
          "content": "This section explores how to create systems with clear accountability. We will discuss the importance of traceability (the ability to see who made what decision and why), review rights (mechanisms for stakeholders to question outcomes), and remediation obligations (a clear process for correcting issues when they arise)."
        },
        {
          "id": "sports-science-401-l07-c3",
          "kind": "recap",
          "title": "The Responsible Execution Checklist",
          "content": "This final checklist serves as a tool to align performance goals with policy, ethics, and stakeholder trust. It prompts you to confirm that your plan is not only effective but also fair, transparent, and compliant with relevant regulations, ensuring that your execution is responsible."
        }
      ],
      "flashcards": [
        {
          "id": "sports-science-401-l07-f1",
          "front": "Impact Distribution",
          "back": "The analysis of how outcomes and consequences of a decision differ across various stakeholder groups and timescales."
        },
        {
          "id": "sports-science-401-l07-f2",
          "front": "Decision Traceability",
          "back": "The documented evidence chain showing how and why a decision was made, which is crucial for accountability."
        },
        {
          "id": "sports-science-401-l07-f3",
          "front": "Responsible Execution",
          "back": "Delivering on performance goals in a manner that balances effectiveness with ethical safeguards and policy compliance."
        }
      ]
    },
    {
      "id": "sports-science-401-l08",
      "title": "Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "sports-science-401-l08-a1",
          "type": "practice",
          "title": "Capstone Charter Template",
          "content": "A document template with sections for: Project Objective, Scope (In/Out), Success Metrics, Key Stakeholders, Risk Assessment, and Governance Plan."
        }
      ],
      "chunks": [
        {
          "id": "sports-science-401-l08-c1",
          "kind": "practice",
          "title": "Building Your Capstone Charter",
          "content": "In this activity, you will create a charter for your capstone project. This document is the blueprint for your work, outlining your primary objective, the project's scope and limitations, the metrics you will use to measure success, and the decision-making process you will follow. A clear charter prevents confusion and keeps the project focused."
        },
        {
          "id": "sports-science-401-l08-c2",
          "kind": "recap",
          "title": "Preparing for Your Defense",
          "content": "A key part of the capstone is defending your work. This section focuses on preparing for that defense. You will practice anticipating and answering critical questions about your project's technical methods, policy implications, and stakeholder considerations. The goal is to build strong, evidence-based arguments to justify your decisions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "sports-science-401-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with objectives, metrics, risks, and remediation pathways.",
          "instructions": [
            "Define your project's primary objective and its boundary conditions in one or two sentences.",
            "List at least three measurable success indicators that prove you've met your objective.",
            "Identify one major risk and define the criteria for escalating it and taking corrective action."
          ]
        },
        {
          "id": "sports-science-401-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Panel",
          "description": "Defend your capstone decisions against simulated objections from technical, policy, and stakeholder experts."
        }
      ]
    },
    {
      "id": "sports-science-401-l09",
      "title": "Checkpoint 3: Capstone and Synthesis",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "sports-science-401-l09-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Before answering, document your assumptions, show your reasoning, and verify your conclusions."
        }
      ],
      "questions": [
        {
          "id": "sports-science-401-l09-q1",
          "text": "What is the primary purpose of a Capstone Charter?",
          "skillId": "sports-science-401-skill-level",
          "options": [
            {
              "id": "a",
              "text": "To serve as a daily log of all activities"
            },
            {
              "id": "b",
              "text": "To act as a formal contract with a funding agency"
            },
            {
              "id": "c",
              "text": "To provide a blueprint defining the project's goals, scope, and success criteria"
            },
            {
              "id": "d",
              "text": "To be written only after the project is fully completed"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The charter is a foundational document that aligns all stakeholders on the project's objectives, boundaries, and measures of success before major work begins."
        },
        {
          "id": "sports-science-401-l09-q2",
          "text": "When considering stakeholder impact, a responsible sports scientist must primarily balance performance goals with:",
          "skillId": "sports-science-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Media exposure and public relations"
            },
            {
              "id": "b",
              "text": "Ethical considerations like athlete welfare and data privacy"
            },
            {
              "id": "c",
              "text": "The personal preferences of the head coach"
            },
            {
              "id": "d",
              "text": "Minimizing all project costs"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Responsible execution requires that performance enhancement is pursued within an ethical framework that prioritizes the well-being and rights of the athletes."
        },
        {
          "id": "sports-science-401-l09-q3",
          "text": "A key component of 'Decision Traceability' is:",
          "skillId": "sports-science-401-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "Ensuring all decisions are made by one person"
            },
            {
              "id": "b",
              "text": "Keeping a documented record of the 'why' behind a decision"
            },
            {
              "id": "c",
              "text": "Making decisions quickly without documentation"
            },
            {
              "id": "d",
              "text": "Communicating decisions only verbally"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Traceability is about maintaining an evidence chain that explains the rationale, data, and context for a decision, which is essential for accountability and learning."
        }
      ]
    }
  ]
};
