import type { LearningModule } from "@/lib/modules/types";

export const ethics_of_technology_201_Module: LearningModule = {
  "id": "ethics-of-technology-201",
  "title": "Ethics of Technology Applied Practice",
  "description": "A level 201 curriculum in Ethics of Technology, focused on ethical frameworks, societal impacts, responsible design, and governance through case studies, simulations, and practical assessments.",
  "subject": "Ethics",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "ethics",
    "technology"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Apply ethical frameworks to technology problems, clearly stating assumptions and tradeoffs.",
    "Design structured workflows to identify and mitigate potential harm from technology.",
    "Evaluate design decisions by comparing them to a baseline and analyzing potential side effects.",
    "Develop transparent governance policies and clear paths for addressing problems.",
    "Communicate complex findings and uncertainties to diverse groups of stakeholders.",
    "Produce well-reasoned recommendations that can withstand critical review."
  ],
  "lessons": [
    {
      "id": "ethics-of-technology-201-l01",
      "title": "Core Foundations in Tech Ethics",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "ethics-of-technology-201-l01-a1",
          "type": "diagram",
          "title": "Core Concepts Map",
          "content": "A visual diagram showing how ethical frameworks, potential harms, and evidence-based reasoning connect."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-201-l01-c1",
          "kind": "concept",
          "title": "Language, Scope, and Frameworks",
          "content": "In this lesson, we'll learn the key terms for discussing technology ethics. We'll define the scope of our analysis, explore ethical frameworks (guidelines for right and wrong), and see how they help us understand the potential negative impacts of technology on people and society. This foundation is key to analyzing real-world systems."
        },
        {
          "id": "ethics-of-technology-201-l01-c2",
          "kind": "concept",
          "title": "Causal Reasoning and Assumptions",
          "content": "We'll practice thinking about cause and effect. This involves mapping how certain actions lead to specific outcomes and identifying the hidden assumptions in our thinking. Recognizing these assumptions helps us choose better solutions to complex problems."
        },
        {
          "id": "ethics-of-technology-201-l01-c3",
          "kind": "recap",
          "title": "Standards for Evidence",
          "content": "This module requires that all claims be backed by evidence. We'll learn to use observable indicators (measurable signs) to support our arguments, acknowledge the limits of our knowledge (uncertainty), and use review checkpoints to ensure our work is solid."
        }
      ],
      "flashcards": [
        {
          "id": "ethics-of-technology-201-l01-f1",
          "front": "Ethical Frameworks",
          "back": "Guidelines or principles used to evaluate decisions and their outcomes, such as utilitarianism, deontology, or virtue ethics."
        },
        {
          "id": "ethics-of-technology-201-l01-f2",
          "front": "Sociotechnical Harms",
          "back": "The negative impacts technology can have on individuals, groups, and society as a whole."
        },
        {
          "id": "ethics-of-technology-201-l01-f3",
          "front": "Responsible Design",
          "back": "The practice of creating technology with a proactive focus on minimizing harm and promoting positive outcomes."
        }
      ]
    },
    {
      "id": "ethics-of-technology-201-l02",
      "title": "Ethical Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "ethics-of-technology-201-l02-a1",
          "type": "diagram",
          "title": "Sample Workflow",
          "content": "An example of a step-by-step workflow for analyzing an ethical problem, from issue identification to post-decision review."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-201-l02-c1",
          "kind": "practice",
          "title": "Building a Repeatable Process",
          "content": "In this lab, you'll design a step-by-step workflow for ethical analysis. The goal is to create a repeatable process for making decisions and interpreting evidence. You'll then test your workflow against unexpected challenges to see how well it holds up."
        },
        {
          "id": "ethics-of-technology-201-l02-c2",
          "kind": "recap",
          "title": "Readiness and Accountability",
          "content": "A good workflow includes clear ownership (who is responsible for what), control gates (checkpoints to ensure quality), and methods for verifying decisions after they are made. These elements are essential for accountability."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ethics-of-technology-201-l02-act1",
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
          "id": "ethics-of-technology-201-l02-act2",
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
      "id": "ethics-of-technology-201-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [],
      "questions": [
        {
          "id": "ethics-of-technology-201-l03-q1",
          "text": "Which action most improves the quality of decisions based on ethical frameworks?",
          "skillId": "ethics-of-technology-201-skill-core",
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
          "id": "ethics-of-technology-201-l03-q2",
          "text": "At this level (201), the strongest emphasis is on:",
          "skillId": "ethics-of-technology-201-skill-level",
          "options": [
            {
              "id": "a",
              "text": "Method execution, structured workflow practice, and evidence-based interpretation"
            },
            {
              "id": "b",
              "text": "Fast execution with no review loops"
            },
            {
              "id": "c",
              "text": "Considering a single stakeholder perspective only"
            },
            {
              "id": "d",
              "text": "Making claims about outcomes without baseline data"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The 201 level is explicitly designed around method execution, structured workflow practice, and evidence-based interpretation."
        },
        {
          "id": "ethics-of-technology-201-l03-q3",
          "text": "What best strengthens our ability to reliably mitigate sociotechnical harms?",
          "skillId": "ethics-of-technology-201-skill-reliability",
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
        }
      ]
    },
    {
      "id": "ethics-of-technology-201-l04",
      "title": "Case Analysis: A Real-World Dilemma",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "ethics-of-technology-201-l04-a1",
          "type": "image",
          "title": "Sample Tradeoff Matrix",
          "content": "A visual example of a tradeoff matrix comparing three different solutions across criteria like effectiveness, fairness, and cost."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-201-l04-c1",
          "kind": "example",
          "title": "Understanding the Stakes",
          "content": "We'll analyze a real-world case study of a new technology. You will identify the key stakeholders and map out the potential benefits and risks, including less obvious ones. This helps us understand the full context of a technological decision."
        },
        {
          "id": "ethics-of-technology-201-l04-c2",
          "kind": "concept",
          "title": "Building a Tradeoff Matrix",
          "content": "You'll learn to build a tradeoff matrix, a tool for comparing different options. We'll evaluate each option against criteria like effectiveness, reliability, fairness, and feasibility. This structured comparison helps clarify the pros and cons of each choice."
        },
        {
          "id": "ethics-of-technology-201-l04-c3",
          "kind": "recap",
          "title": "Learning from Failure",
          "content": "We'll examine what happens when things go wrong. You'll learn to identify failure patterns and use them to design better safeguards. We'll also create response playbooks—clear plans for what to do when failures happen—to ensure we can recover quickly and responsibly."
        }
      ],
      "flashcards": [
        {
          "id": "ethics-of-technology-201-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A tool used to compare different options by weighing their pros and cons across a set of key criteria."
        },
        {
          "id": "ethics-of-technology-201-l04-f2",
          "front": "Failure Signature",
          "back": "A recognizable pattern of events or data that indicates a specific type of system failure or risk."
        },
        {
          "id": "ethics-of-technology-201-l04-f3",
          "front": "Recovery Playbook",
          "back": "A step-by-step guide for responding to a crisis or system failure in a safe and organized way."
        }
      ]
    },
    {
      "id": "ethics-of-technology-201-l05",
      "title": "Simulation Studio: Testing Decisions",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "ethics-of-technology-201-l05-a1",
          "type": "image",
          "title": "Simulation Interface",
          "content": "A mock-up of a simulation dashboard where you can adjust variables and see the projected outcomes of your decisions."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-201-l05-c1",
          "kind": "practice",
          "title": "Configuring the Simulation",
          "content": "In this simulation, you'll apply what you've learned. You will choose interventions to solve a problem, define the range of possible outcomes (uncertainty), and set clear, measurable goals for success. This lets you test your ideas in a safe environment."
        },
        {
          "id": "ethics-of-technology-201-l05-c2",
          "kind": "recap",
          "title": "Debriefing the Results",
          "content": "After each simulation, we'll debrief. We'll analyze the results, looking at the expected benefits, unintended side effects, and whether our actions complied with our ethical and governance rules. This reflection is key to improving our decision-making."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ethics-of-technology-201-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Compare three intervention paths and justify which best balances project goals with ethical principles.",
          "instructions": [
            "Define your primary objective and ethical guardrails before selecting an intervention.",
            "Record one near-term and one long-term tradeoff for each option.",
            "Select metrics that would confirm or disprove the effectiveness of your choice."
          ]
        },
        {
          "id": "ethics-of-technology-201-l05-act2",
          "type": "matching_pairs",
          "title": "Mitigation Alignment",
          "description": "Match each risk condition with the strongest mitigation response.",
          "pairs": [
            {
              "left": "Ambiguous ownership",
              "right": "Create explicit role and escalation map"
            },
            {
              "left": "Weak data quality",
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
      "id": "ethics-of-technology-201-l06",
      "title": "Checkpoint 2: Analysis and Application",
      "type": "quiz",
      "duration": 10,
      "learningAids": [],
      "questions": [
        {
          "id": "ethics-of-technology-201-l06-q1",
          "text": "When using a tradeoff matrix, what is the primary goal?",
          "skillId": "ethics-of-technology-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To prove one option is perfect"
            },
            {
              "id": "b",
              "text": "To ignore stakeholder needs"
            },
            {
              "id": "c",
              "text": "To systematically compare options across multiple important criteria"
            },
            {
              "id": "d",
              "text": "To choose the cheapest option regardless of impact"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A tradeoff matrix provides a structured way to evaluate the pros and cons of different choices, ensuring a balanced decision."
        },
        {
          "id": "ethics-of-technology-201-l06-q2",
          "text": "A 'failure signature' is most useful for:",
          "skillId": "ethics-of-technology-201-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "Blaming a specific person for a problem"
            },
            {
              "id": "b",
              "text": "Predicting and preventing future similar failures"
            },
            {
              "id": "c",
              "text": "Ignoring the problem until it gets worse"
            },
            {
              "id": "d",
              "text": "Justifying a project's cancellation without analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "By identifying recurring patterns that lead to failure, we can design safeguards to prevent them from happening again."
        },
        {
          "id": "ethics-of-technology-201-l06-q3",
          "text": "In a simulation of a new technology policy, why is it important to define 'uncertainty parameters'?",
          "skillId": "ethics-of-technology-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To make the simulation easier to pass"
            },
            {
              "id": "b",
              "text": "To guarantee a successful outcome"
            },
            {
              "id": "c",
              "text": "To test how a solution performs under a range of possible real-world conditions"
            },
            {
              "id": "d",
              "text": "To make the results look better to leadership"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The real world is unpredictable. Setting uncertainty parameters helps test the resilience of a solution against various potential challenges."
        },
        {
          "id": "ethics-of-technology-201-l06-q4",
          "text": "A case analysis reveals that a new technology benefits one group while creating significant burdens for another. This is primarily an issue of:",
          "skillId": "ethics-of-technology-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Technical efficiency"
            },
            {
              "id": "b",
              "text": "Market demand"
            },
            {
              "id": "c",
              "text": "Equitable impact"
            },
            {
              "id": "d",
              "text": "Brand marketing"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Ethical analysis requires examining how benefits and harms are distributed among different stakeholder groups to ensure fairness."
        }
      ]
    },
    {
      "id": "ethics-of-technology-201-l07",
      "title": "Integrating Ethics and Policy",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "ethics-of-technology-201-l07-a1",
          "type": "diagram",
          "title": "Stakeholder Impact Map",
          "content": "An example map showing a central technology and its ripple effects (both positive and negative) on various stakeholder groups like users, employees, and the community."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-201-l07-c1",
          "kind": "concept",
          "title": "Mapping Stakeholder Impact",
          "content": "This lesson focuses on stakeholder impact mapping. We'll identify all the groups of people affected by a technology and analyze how benefits and harms are distributed among them. A key goal is to spot and address unfair imbalances."
        },
        {
          "id": "ethics-of-technology-201-l07-c2",
          "kind": "concept",
          "title": "Designing for Accountability",
          "content": "We'll design an 'accountability architecture'—a system that ensures responsibility. This includes decision traceability (being able to see who made a decision and why), review rights for those affected, and clear standards for how to fix problems when they arise."
        },
        {
          "id": "ethics-of-technology-201-l07-c3",
          "kind": "recap",
          "title": "The Responsible Execution Checklist",
          "content": "To wrap up, we'll create a responsible execution checklist. This practical tool integrates key considerations from the module—like policy alignment, ethical principles, system reliability, and stakeholder trust—to guide future projects."
        }
      ],
      "flashcards": [
        {
          "id": "ethics-of-technology-201-l07-f1",
          "front": "Impact Distribution",
          "back": "An analysis of how the positive and negative effects of a technology are spread across different groups of people."
        },
        {
          "id": "ethics-of-technology-201-l07-f2",
          "front": "Decision Traceability",
          "back": "The ability to reconstruct the history of a decision, including the evidence used, the people involved, and the reasoning behind it."
        },
        {
          "id": "ethics-of-technology-201-l07-f3",
          "front": "Responsible Execution",
          "back": "A comprehensive approach to building and deploying technology that is effective, fair, reliable, and trustworthy."
        }
      ]
    },
    {
      "id": "ethics-of-technology-201-l08",
      "title": "Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "ethics-of-technology-201-l08-a1",
          "type": "document",
          "title": "Capstone Charter Template",
          "content": "A fillable template to help structure your capstone project plan, including sections for objectives, metrics, risks, and governance."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-201-l08-c1",
          "kind": "practice",
          "title": "Drafting Your Project Charter",
          "content": "In this lab, you will draft a charter for your final capstone project. This plan will define your project's scope and goals, identify constraints, set measurable success metrics, and establish governance checkpoints to keep your project on track."
        },
        {
          "id": "ethics-of-technology-201-l08-c2",
          "kind": "recap",
          "title": "Preparing to Defend Your Work",
          "content": "This planning stage prepares you to defend your final project. We'll focus on strengthening your arguments with solid evidence and practice responding constructively to critical questions and feedback."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ethics-of-technology-201-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with measurable objectives, risks, and remediation plans.",
          "instructions": [
            "State your project objective and boundary conditions.",
            "Define at least three measurable success indicators.",
            "Document a governance escalation pathway for critical failures."
          ]
        },
        {
          "id": "ethics-of-technology-201-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Panel",
          "description": "Defend your proposed capstone approach against technical, policy, and stakeholder critiques."
        }
      ]
    },
    {
      "id": "ethics-of-technology-201-l09",
      "title": "Capstone Project: Defensible Recommendation",
      "type": "project",
      "duration": 60,
      "learningAids": [
        {
          "id": "ethics-of-technology-201-l09-a1",
          "type": "document",
          "title": "Capstone Project Rubric",
          "content": "A detailed rubric outlining the grading criteria for the capstone project, including analysis, evidence, clarity, and defensibility."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-201-l09-c1",
          "kind": "practice",
          "title": "Project Submission",
          "content": "Using the charter you developed in the previous lab, complete your capstone project. Your submission should include a detailed analysis of your chosen case, a tradeoff matrix for potential interventions, and a final, evidence-backed recommendation. Your recommendation must be defensible against the critiques outlined in the rubric."
        }
      ]
    },
    {
      "id": "ethics-of-technology-201-l10",
      "title": "Final Assessment: Comprehensive Review",
      "type": "quiz",
      "duration": 15,
      "learningAids": [],
      "questions": [
        {
          "id": "ethics-of-technology-201-l10-q1",
          "text": "A company wants to use an AI to screen job applicants. Which concept from this course is most critical to apply first?",
          "skillId": "ethics-of-technology-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Recovery playbook"
            },
            {
              "id": "b",
              "text": "Stakeholder impact mapping"
            },
            {
              "id": "c",
              "text": "Retrospective cycle"
            },
            {
              "id": "d",
              "text": "Rollback trigger"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Before building, it's crucial to map who could be affected (applicants, recruiters, the company) and how benefits or harms (like bias) might be distributed."
        },
        {
          "id": "ethics-of-technology-201-l10-q2",
          "text": "Your team's simulation shows a proposed feature has a 15% chance of creating a significant negative side effect. What is the most responsible next step?",
          "skillId": "ethics-of-technology-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Launch immediately to see what happens in the real world"
            },
            {
              "id": "b",
              "text": "Use a tradeoff matrix to weigh the potential benefit against the risk and explore mitigation strategies"
            },
            {
              "id": "c",
              "text": "Ignore the simulation as it's not real"
            },
            {
              "id": "d",
              "text": "Cancel the project entirely without further discussion"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Simulations provide data for risk assessment. The next step is to use a structured tool like a tradeoff matrix to make an informed decision about whether the risk is acceptable and how it can be reduced."
        },
        {
          "id": "ethics-of-technology-201-l10-q3",
          "text": "A 'responsible execution checklist' primarily helps to:",
          "skillId": "ethics-of-technology-201-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Ensure a project is completed as fast as possible"
            },
            {
              "id": "b",
              "text": "Replace the need for expert judgment"
            },
            {
              "id": "c",
              "text": "Integrate ethical, policy, and reliability checks into the project lifecycle"
            },
            {
              "id": "d",
              "text": "Guarantee the project will be profitable"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The checklist serves as a practical tool to ensure that diverse responsibilities—from fairness to security—are consistently addressed."
        },
        {
          "id": "ethics-of-technology-201-l10-q4",
          "text": "If a system's decisions lack 'traceability,' what is the main problem?",
          "skillId": "ethics-of-technology-201-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "The system is too slow"
            },
            {
              "id": "b",
              "text": "It's impossible to understand or challenge why a decision was made"
            },
            {
              "id": "c",
              "text": "The user interface is poorly designed"
            },
            {
              "id": "d",
              "text": "The marketing budget is too small"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Traceability is fundamental to accountability; without it, there is no way to review, audit, or correct flawed decisions."
        },
        {
          "id": "ethics-of-technology-201-l10-q5",
          "text": "The final capstone project emphasizes creating a 'defensible recommendation.' This means the recommendation must be:",
          "skillId": "ethics-of-technology-201-skill-level",
          "options": [
            {
              "id": "a",
              "text": "Popular with everyone"
            },
            {
              "id": "b",
              "text": "The only possible solution"
            },
            {
              "id": "c",
              "text": "Supported by evidence, aware of its tradeoffs, and resilient to critical review"
            },
            {
              "id": "d",
              "text": "Vague enough to avoid criticism"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A defensible recommendation is not necessarily perfect, but it is well-reasoned, evidence-based, and honestly acknowledges its own limitations and tradeoffs."
        }
      ]
    }
  ]
};
