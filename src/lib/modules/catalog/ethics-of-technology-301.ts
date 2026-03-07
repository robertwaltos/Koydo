import type { LearningModule } from "@/lib/modules/types";

export const ethics_of_technology_301_Module: LearningModule = {
  "id": "ethics-of-technology-301",
  "title": "Ethics of Technology Systems and Governance",
  "description": "Level 301 curriculum in Ethics of Technology, focused on normative frameworks, sociotechnical harms, responsible design practice, and governance and accountability through case-driven analysis, simulations, and assessment-backed mastery.",
  "subject": "Ethics",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "ethics",
    "technology"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Apply normative frameworks with explicit assumptions and tradeoff framing",
    "Build repeatable workflows for sociotechnical harms under realistic constraints",
    "Evaluate responsible design practice decisions with baseline and side-effect analysis",
    "Strengthen governance and accountability with transparent policies and escalation pathways",
    "Communicate evidence and uncertainty to mixed stakeholder groups",
    "Produce defensible recommendations that survive critical review"
  ],
  "lessons": [
    {
      "id": "ethics-of-technology-301-l01",
      "title": "Core Foundations in Technology Ethics",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "ethics-of-technology-301-l01-a1",
          "type": "infographic",
          "title": "The Three Pillars of Tech Ethics",
          "content": "A diagram showing the relationship between Normative Frameworks, Sociotechnical Harms, and Responsible Design."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-301-l01-c1",
          "kind": "concept",
          "title": "Language, Scope, and Boundaries",
          "content": "In this lesson, we will establish a shared vocabulary for discussing technology ethics. We will define the scope of our analysis and explore how normative frameworks—the principles guiding what is right and wrong—connect directly to sociotechnical harms, which are the negative impacts of technology on people and society. Understanding this connection is the first step to analyzing complex, real-world systems."
        },
        {
          "id": "ethics-of-technology-301-l01-c2",
          "kind": "concept",
          "title": "Causal Reasoning Under Constraints",
          "content": "Here, you will practice modeling cause-and-effect pathways to understand how technological decisions lead to specific outcomes. We will focus on identifying hidden assumptions that can lead to system failures and learn how to select effective interventions, or actions, to mitigate potential harm. This skill is essential for navigating the complexities of technology development."
        },
        {
          "id": "ethics-of-technology-301-l01-c3",
          "kind": "recap",
          "title": "Evidence Standards and Review",
          "content": "Throughout this module, we will anchor our claims in observable evidence and measurable indicators. This includes defining uncertainty bounds to acknowledge the limits of our knowledge and establishing clear review checkpoints to assess our work. This rigorous approach ensures our conclusions are well-supported and trustworthy."
        }
      ],
      "flashcards": [
        {
          "id": "ethics-of-technology-301-l01-f1",
          "front": "Normative Frameworks",
          "back": "Ethical principles or rules (e.g., fairness, privacy, safety) used to guide decisions and evaluate outcomes."
        },
        {
          "id": "ethics-of-technology-301-l01-f2",
          "front": "Sociotechnical Harms",
          "back": "Negative impacts on people or society caused by the interaction between technology and social structures."
        },
        {
          "id": "ethics-of-technology-301-l01-f3",
          "front": "Responsible Design Practice",
          "back": "A process for creating technology that proactively considers potential harms and aligns with ethical principles."
        }
      ]
    },
    {
      "id": "ethics-of-technology-301-l02",
      "title": "Ethical Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "ethics-of-technology-301-l02-a1",
          "type": "template",
          "title": "Ethical Workflow Canvas",
          "content": "A downloadable worksheet for mapping out a decision workflow, including sections for tradeoffs, metrics, and governance checks."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-301-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive lab, you will design a practical workflow for ethical analysis. This involves analyzing tradeoffs, integrating measurable metrics, and defining governance rules. You will collaborate with simulated teams to design robust decisions and test your workflow's resilience against unexpected challenges and uncertainty."
        },
        {
          "id": "ethics-of-technology-301-l02-c2",
          "kind": "recap",
          "title": "Readiness and Control Gates",
          "content": "For a system to be operationally ready, it is essential to map out owners and responsibilities. We will discuss the importance of control gates—checkpoints that ensure quality and alignment before proceeding. We will also introduce post-decision verification hooks, which are mechanisms for confirming that decisions achieved their intended goals without causing unintended harm."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ethics-of-technology-301-l02-act1",
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
              "right": "Limits the scope of impact during failures"
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
          "id": "ethics-of-technology-301-l02-act2",
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
      "id": "ethics-of-technology-301-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "ethics-of-technology-301-l03-a1",
          "type": "checklist",
          "title": "Key Concepts Review",
          "content": "A checklist of core concepts from Lessons 1 and 2 to review before starting the quiz."
        }
      ],
      "questions": [
        {
          "id": "ethics-of-technology-301-l03-q1",
          "text": "Which action most improves the quality of a normative framework in practice?",
          "skillId": "ethics-of-technology-301-skill-framework-application",
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
          "explanation": "High-quality decisions require explicit assumptions, measurable indicators, and rigorous stress tests."
        },
        {
          "id": "ethics-of-technology-301-l03-q2",
          "text": "At the 301 level, the strongest emphasis is on:",
          "skillId": "ethics-of-technology-301-skill-level-differentiation",
          "options": [
            {
              "id": "a",
              "text": "System tradeoff analysis, metrics and governance integration, and cross-team decision design"
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
              "text": "Making outcome claims without baselines"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The 301 level is explicitly designed around system tradeoff analysis, metrics and governance integration, and cross-team decision design."
        },
        {
          "id": "ethics-of-technology-301-l03-q3",
          "text": "What best strengthens the reliability of a system against sociotechnical harms?",
          "skillId": "ethics-of-technology-301-skill-reliability-improvement",
          "options": [
            {
              "id": "a",
              "text": "Having no ownership for incident response"
            },
            {
              "id": "b",
              "text": "Clear control points, owner mapping, and escalation thresholds"
            },
            {
              "id": "c",
              "text": "Making ad-hoc changes without logs"
            },
            {
              "id": "d",
              "text": "Skipping any incident review process"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliability improves when control, ownership, and escalation are explicit and repeatable."
        },
        {
          "id": "ethics-of-technology-301-l03-q4",
          "text": "When evaluating responsible design practice, which approach is most defensible?",
          "skillId": "ethics-of-technology-301-skill-evaluation-rigor",
          "options": [
            {
              "id": "a",
              "text": "Using anecdotal examples only"
            },
            {
              "id": "b",
              "text": "Comparing interventions against a baseline and monitoring for side effects"
            },
            {
              "id": "c",
              "text": "Removing difficult scenarios from the evaluation"
            },
            {
              "id": "d",
              "text": "Changing target definitions after results are known"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Baseline comparison and side-effect monitoring reduce overclaiming and hidden risk."
        },
        {
          "id": "ethics-of-technology-301-l03-q5",
          "text": "A mature governance and accountability model should include:",
          "skillId": "ethics-of-technology-301-skill-governance-maturity",
          "options": [
            {
              "id": "a",
              "text": "A one-time review with no corrective pathway"
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
      "id": "ethics-of-technology-301-l04",
      "title": "Case Analysis: A Real-World Dilemma",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "ethics-of-technology-301-l04-a1",
          "type": "template",
          "title": "Case Analysis Framework",
          "content": "A structured document for analyzing the case study, with sections for stakeholders, risks, tradeoffs, and proposed solutions."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-301-l04-c1",
          "kind": "example",
          "title": "Case Context and Stakes",
          "content": "In this case analysis, we will examine a technology that offers significant user convenience but introduces emerging risks to fairness, privacy, and autonomy. You will map the stakes for all affected parties, identifying both the obvious benefits and the hidden, non-obvious risks that are critical for a complete ethical evaluation."
        },
        {
          "id": "ethics-of-technology-301-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix Construction",
          "content": "We will construct a tradeoff matrix to systematically compare different interventions. This tool helps evaluate options across multiple criteria, such as effectiveness, reliability, equity, and implementation feasibility. Using this matrix provides a clear, evidence-based way to make and justify difficult decisions."
        },
        {
          "id": "ethics-of-technology-301-l04-c3",
          "kind": "recap",
          "title": "Failure Lessons and Recovery",
          "content": "In this recap, we will focus on learning from system failures. We will analyze failure signatures—recurring patterns that indicate risk—and convert them into actionable safeguards. This includes creating response playbooks and updating monitoring to prevent future incidents, turning past mistakes into improved system resilience."
        }
      ],
      "flashcards": [
        {
          "id": "ethics-of-technology-301-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured tool for comparing different options across a set of conflicting priorities or criteria."
        },
        {
          "id": "ethics-of-technology-301-l04-f2",
          "front": "Failure Signature",
          "back": "A recognizable pattern of events or data that indicates a specific type of system failure is occurring or is imminent."
        },
        {
          "id": "ethics-of-technology-301-l04-f3",
          "front": "Recovery Playbook",
          "back": "A step-by-step guide for responding to and recovering from a specific type of incident or failure."
        }
      ]
    },
    {
      "id": "ethics-of-technology-301-l05",
      "title": "Simulation Studio: Decision Making Under Uncertainty",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "ethics-of-technology-301-l05-a1",
          "type": "guide",
          "title": "Simulation Parameter Guide",
          "content": "A guide explaining the different variables and thresholds you can adjust in the simulation and their potential impact."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-301-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation Setup",
          "content": "In this interactive simulation, you will configure and test various interventions. This involves defining parameters of uncertainty and setting measurable success thresholds to determine if an intervention is working. This hands-on experience will allow you to apply your knowledge in a practical setting and understand the complexities of real-world decision-making."
        },
        {
          "id": "ethics-of-technology-301-l05-c2",
          "kind": "recap",
          "title": "Simulation Debrief",
          "content": "After each simulation run, we will hold a debriefing session. You will review the results to assess expected gains, identify unintended side effects, and ensure your actions complied with governance standards. This reflective process is essential for learning from outcomes and improving future decisions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ethics-of-technology-301-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Compare three intervention paths and justify which best advances the goals of your normative framework and governance model.",
          "instructions": [
            "Define your primary objective and ethical guardrails before selecting an intervention.",
            "Record one near-term and one long-term tradeoff for each option.",
            "Select metrics that would confirm or falsify the success of your chosen path."
          ]
        },
        {
          "id": "ethics-of-technology-301-l05-act2",
          "type": "matching_pairs",
          "title": "Mitigation Alignment",
          "description": "Match each risk condition with the strongest mitigation response.",
          "pairs": [
            {
              "left": "Ambiguous ownership",
              "right": "Create an explicit role and escalation map"
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
      "id": "ethics-of-technology-301-l06",
      "title": "Checkpoint 2: Application and Analysis",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "ethics-of-technology-301-l06-a1",
          "type": "summary",
          "title": "Application Concepts Summary",
          "content": "A summary of key methods from the Case Analysis and Simulation lessons, including tradeoff matrices and failure analysis."
        }
      ],
      "questions": [
        {
          "id": "ethics-of-technology-301-l06-q1",
          "text": "In a case analysis, what is the primary purpose of creating a tradeoff matrix?",
          "skillId": "ethics-of-technology-301-skill-tradeoff-analysis",
          "options": [
            {
              "id": "a",
              "text": "To prove one option is perfect and has no downsides"
            },
            {
              "id": "b",
              "text": "To systematically compare potential solutions across multiple, often competing, criteria"
            },
            {
              "id": "c",
              "text": "To list only the financial costs of each option"
            },
            {
              "id": "d",
              "text": "To choose the option that is fastest to implement, regardless of other factors"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix is a tool for structured comparison, helping to make informed decisions when no single option is best on all measures (e.g., cost, equity, effectiveness)."
        },
        {
          "id": "ethics-of-technology-301-l06-q2",
          "text": "When setting up a simulation of a new technology policy, why is it important to define 'success thresholds' beforehand?",
          "skillId": "ethics-of-technology-301-skill-simulation-setup",
          "options": [
            {
              "id": "a",
              "text": "To allow for changing the definition of success after seeing the results"
            },
            {
              "id": "b",
              "text": "To create objective, measurable criteria for evaluating the outcome of the simulation"
            },
            {
              "id": "c",
              "text": "To ensure the simulation always produces a positive result"
            },
            {
              "id": "d",
              "text": "Success thresholds are not necessary for a valid simulation"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defining success thresholds in advance prevents confirmation bias and ensures that the evaluation of the simulation's outcome is objective and rigorous."
        },
        {
          "id": "ethics-of-technology-301-l06-q3",
          "text": "What is the most constructive use of a 'failure signature' identified during a case analysis?",
          "skillId": "ethics-of-technology-301-skill-failure-analysis",
          "options": [
            {
              "id": "a",
              "text": "To assign blame to a specific team or individual"
            },
            {
              "id": "b",
              "text": "To develop proactive monitoring and preventative safeguards for the future"
            },
            {
              "id": "c",
              "text": "To justify why a particular failure was unavoidable"
            },
            {
              "id": "d",
              "text": "To remove the feature associated with the failure"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The goal of identifying failure signatures is to learn from them and build more resilient systems by creating targeted monitoring and response plans."
        },
        {
          "id": "ethics-of-technology-301-l06-q4",
          "text": "When analyzing a technology's impact, why is it insufficient to only consider the intended end-user?",
          "skillId": "ethics-of-technology-301-skill-stakeholder-mapping",
          "options": [
            {
              "id": "a",
              "text": "Because non-users are not affected by technology"
            },
            {
              "id": "b",
              "text": "Because technology can have significant, unintended impacts on non-users, communities, and society at large"
            },
            {
              "id": "c",
              "text": "Because it is too difficult to identify other stakeholders"
            },
            {
              "id": "d",
              "text": "Because the intended end-user's perspective is the only one that matters for business success"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A complete sociotechnical analysis requires considering the full spectrum of stakeholders, including those who do not use the product directly but are still affected by it."
        },
        {
          "id": "ethics-of-technology-301-l06-q5",
          "text": "What is the key difference between a 'rollback trigger' and a 'recovery playbook'?",
          "skillId": "ethics-of-technology-301-skill-response-planning",
          "options": [
            {
              "id": "a",
              "text": "There is no difference; the terms are interchangeable"
            },
            {
              "id": "b",
              "text": "A trigger is an automated mechanism to revert a change, while a playbook is a detailed human-led procedure for managing an incident"
            },
            {
              "id": "c",
              "text": "A playbook is automated, while a trigger is a manual process"
            },
            {
              "id": "d",
              "text": "A trigger is for preventing issues, while a playbook is for causing them"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A rollback trigger is a specific, often automated, control to undo a change, whereas a recovery playbook is a broader, comprehensive guide for human responders to manage a crisis."
        }
      ]
    },
    {
      "id": "ethics-of-technology-301-l07",
      "title": "Ethics and Policy Integration",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "ethics-of-technology-301-l07-a1",
          "type": "diagram",
          "title": "Accountability Loop",
          "content": "A diagram illustrating the cycle of traceability, review, and remediation in a responsible governance system."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-301-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Mapping",
          "content": "In this lesson, we will map how a technology's benefits and burdens are distributed across different stakeholder groups. It is critical to identify where these impacts diverge, as this often reveals systemic inequities. By understanding this distribution, you can advocate for fairer outcomes and more just technology."
        },
        {
          "id": "ethics-of-technology-301-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Here, we will design an architecture for accountability. This requires that decisions are traceable, stakeholders have rights to review and appeal decisions, and clear remediation standards exist to correct errors and harms. These elements are the foundation of a trustworthy and responsible technology governance system."
        },
        {
          "id": "ethics-of-technology-301-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "To ensure responsible implementation, we will develop a final checklist. This tool integrates key criteria from policy, ethics, and reliability to create a holistic view of readiness. Using this checklist helps confirm that a system is not only effective but also fair, safe, and aligned with community values."
        }
      ],
      "flashcards": [
        {
          "id": "ethics-of-technology-301-l07-f1",
          "front": "Impact Distribution",
          "back": "The way in which benefits and harms from a technology are allocated across different stakeholder groups."
        },
        {
          "id": "ethics-of-technology-301-l07-f2",
          "front": "Decision Traceability",
          "back": "The ability to reconstruct why a decision was made, by whom, and based on what evidence."
        },
        {
          "id": "ethics-of-technology-301-l07-f3",
          "front": "Responsible Execution",
          "back": "The practice of implementing technology in a way that is effective, ethically sound, and includes mechanisms for correction."
        }
      ]
    },
    {
      "id": "ethics-of-technology-301-l08",
      "title": "Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "ethics-of-technology-301-l08-a1",
          "type": "template",
          "title": "Capstone Project Charter",
          "content": "A fillable template for students to define their capstone project's scope, objectives, metrics, and governance plan."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-301-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter Drafting",
          "content": "In this interactive lab, you will draft a charter for your final capstone project. This document will outline the project's scope, constraints, success metrics, and governance checkpoints. Creating a strong charter is the first step to a successful and well-managed project."
        },
        {
          "id": "ethics-of-technology-301-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "As you prepare for your capstone project, it is crucial to anticipate challenges and critiques. This means gathering strong evidence to support your decisions, clarifying your reasoning, and developing thoughtful responses to potential feedback. This preparation will help you present your work confidently and effectively."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ethics-of-technology-301-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with measurable objectives, risks, and remediation plans.",
          "instructions": [
            "State your project's primary objective and its boundary conditions.",
            "Define at least three measurable success indicators.",
            "Document a governance escalation pathway for critical failures or ethical issues."
          ]
        },
        {
          "id": "ethics-of-technology-301-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Panel",
          "description": "Defend your proposed capstone approach against a series of simulated technical, policy, and stakeholder critiques."
        }
      ]
    },
    {
      "id": "ethics-of-technology-301-l09",
      "title": "Capstone Project: Recommendation & Defense",
      "type": "project",
      "duration": 60,
      "learningAids": [
        {
          "id": "ethics-of-technology-301-l09-a1",
          "type": "rubric",
          "title": "Capstone Evaluation Rubric",
          "content": "The official rubric that will be used to grade the capstone project, detailing criteria for analysis, evidence, and recommendations."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-301-l09-c1",
          "kind": "practice",
          "title": "Project Execution",
          "content": "Apply the frameworks and workflows from the module to a new, complex case study. You will analyze the sociotechnical system, identify key ethical tensions, evaluate potential interventions using a tradeoff matrix, and construct a final, defensible recommendation for action."
        },
        {
          "id": "ethics-of-technology-301-l09-c2",
          "kind": "recap",
          "title": "Submission and Peer Review",
          "content": "Finalize your project submission, including your analysis, tradeoff matrix, and policy recommendations. You will also participate in a peer review process, providing constructive feedback on a classmate's project based on the course rubric."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ethics-of-technology-301-l09-act1",
          "type": "project_submission",
          "title": "Capstone Project Submission",
          "description": "Upload your final capstone project document, including all required components as outlined in the project charter and rubric."
        },
        {
          "id": "ethics-of-technology-301-l09-act2",
          "type": "peer_review",
          "title": "Peer Review Assignment",
          "description": "Review a peer's capstone project using the provided rubric and offer constructive, actionable feedback."
        }
      ]
    },
    {
      "id": "ethics-of-technology-301-l10",
      "title": "Module Wrap-Up and Future Practice",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "ethics-of-technology-301-l10-a1",
          "type": "resource_list",
          "title": "Further Reading and Resources",
          "content": "A curated list of books, articles, and organizations for continued learning in technology ethics and governance."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-301-l10-c1",
          "kind": "concept",
          "title": "Synthesizing Core Concepts",
          "content": "This final lesson synthesizes the key pillars of the course: applying normative frameworks, mitigating sociotechnical harms, implementing responsible design, and building robust governance. We will review how these concepts connect to form a comprehensive, practical approach to technology ethics."
        },
        {
          "id": "ethics-of-technology-301-l10-c2",
          "kind": "recap",
          "title": "Applying Your Skills",
          "content": "Congratulations on completing the module. The goal is not just to understand these concepts, but to apply them. We'll conclude with strategies for integrating these ethical workflows into real-world professional practice. Your journey in responsible technology is just beginning."
        }
      ],
      "flashcards": [
        {
          "id": "ethics-of-technology-301-l10-f1",
          "front": "Normative Frameworks",
          "back": "The 'why': The ethical principles (e.g., fairness, privacy) guiding your decisions."
        },
        {
          "id": "ethics-of-technology-301-l10-f2",
          "front": "Responsible Design",
          "back": "The 'how': The repeatable processes used to build technology that aligns with ethical principles."
        },
        {
          "id": "ethics-of-technology-301-l10-f3",
          "front": "Governance & Accountability",
          "back": "The 'what happens next': The rules, oversight, and corrective actions that ensure principles are upheld over time."
        }
      ]
    }
  ]
};
