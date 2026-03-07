import type { LearningModule } from "@/lib/modules/types";

export const public_health_101_Module: LearningModule = {
  "id": "public-health-101",
  "title": "Public Health Foundations",
  "description": "A foundational curriculum in Public Health, focused on population health metrics, epidemiologic reasoning, prevention strategy, and health equity governance through case-driven analysis, simulations, and assessment-backed mastery.",
  "subject": "Health Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "health",
    "policy"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Apply population health metrics, stating assumptions and tradeoffs clearly.",
    "Develop systematic methods for analyzing health problems under real-world constraints.",
    "Evaluate prevention strategies by comparing them to a baseline and analyzing potential side effects.",
    "Promote health equity through transparent policies and clear processes for addressing issues.",
    "Communicate evidence and uncertainty effectively to diverse groups of people.",
    "Create well-reasoned recommendations that can withstand critical review."
  ],
  "lessons": [
    {
      "id": "public-health-101-l01",
      "title": "Introduction to Public Health",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "public-health-101-l01-a1",
          "type": "infographic",
          "title": "The Pillars of Public Health",
          "content": "An infographic showing the relationship between Population Health Metrics, Epidemiologic Reasoning, and Prevention Strategy."
        }
      ],
      "chunks": [
        {
          "id": "public-health-101-l01-c1",
          "kind": "concept",
          "title": "Language, Scope, and Boundaries",
          "content": "In this lesson, we will explore the key terms and concepts used in public health. We'll define the scope of our study and see how population health metrics (measurements of a community's health) and epidemiologic reasoning (the study of how diseases spread and are controlled) connect in real-world situations. This foundation is essential for understanding public health systems."
        },
        {
          "id": "public-health-101-l01-c2",
          "kind": "concept",
          "title": "Causal Reasoning Under Constraints",
          "content": "Here, you will learn to map cause-and-effect pathways in health issues. We will practice identifying hidden assumptions that could lead to mistakes before choosing a solution. This critical thinking process helps us make better, more informed decisions. A simple approach is to: (1) define the goal, (2) gather supporting evidence, (3) explain how evidence shapes your conclusion, and (4) verify the answer against the original goal."
        },
        {
          "id": "public-health-101-l01-c3",
          "kind": "recap",
          "title": "Evidence Standards",
          "content": "Throughout this module, all claims must be supported by observable evidence. We must also acknowledge the limits of our knowledge by considering uncertainty. By establishing regular review checkpoints, we ensure our findings are accurate and reliable, which is fundamental to maintaining high standards in public health."
        }
      ],
      "flashcards": [
        {
          "id": "public-health-101-l01-f1",
          "front": "Population Health Metrics",
          "back": "Measurements used to understand the health of a group or community, such as life expectancy or disease rates."
        },
        {
          "id": "public-health-101-l01-f2",
          "front": "Epidemiologic Reasoning",
          "back": "The process of studying patterns, causes, and effects of health and disease conditions in defined populations."
        },
        {
          "id": "public-health-101-l01-f3",
          "front": "Prevention Strategy",
          "back": "A plan of action to stop health problems from occurring or to reduce their impact."
        }
      ]
    },
    {
      "id": "public-health-101-l02",
      "title": "Public Health Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "public-health-101-l02-a1",
          "type": "template",
          "title": "Workflow Design Template",
          "content": "A downloadable template to help structure your step-by-step public health plan."
        }
      ],
      "chunks": [
        {
          "id": "public-health-101-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this activity, you will design a step-by-step plan, or workflow, for a basic public health scenario. Your workflow should use the vocabulary we've learned and map out the core processes. You will then test how well your plan holds up when faced with unexpected challenges and uncertainty."
        },
        {
          "id": "public-health-101-l02-c2",
          "kind": "recap",
          "title": "Readiness and Control Points",
          "content": "Effective public health operations require careful planning. This includes mapping out who is responsible for each task, establishing control points to monitor progress, and creating ways to verify decisions after they are made. These elements are essential for ensuring our initiatives are successful."
        }
      ],
      "interactiveActivities": [
        {
          "id": "public-health-101-l02-act1",
          "type": "matching_pairs",
          "title": "Matching Controls to Outcomes",
          "description": "Match each control mechanism to its most likely benefit for the system.",
          "pairs": [
            {
              "left": "Review before launch",
              "right": "Reduces preventable mistakes"
            },
            {
              "left": "Emergency stop plan",
              "right": "Limits the impact of failures"
            },
            {
              "left": "Performance dashboard",
              "right": "Helps make credible claims about impact"
            },
            {
              "left": "Post-project review",
              "right": "Improves the quality of future decisions"
            }
          ]
        },
        {
          "id": "public-health-101-l02-act2",
          "type": "sorting_buckets",
          "title": "Constraint Classification",
          "description": "Sort each constraint into the correct category: Technical, Policy, or Stakeholder Impact.",
          "buckets": [
            "Technical",
            "Policy",
            "Stakeholder Impact"
          ],
          "items": [
            {
              "text": "System response time goal",
              "bucket": "Technical"
            },
            {
              "text": "Data privacy regulation",
              "bucket": "Policy"
            },
            {
              "text": "Risk of losing community trust",
              "bucket": "Stakeholder Impact"
            },
            {
              "text": "Protocol for public announcements",
              "bucket": "Policy"
            }
          ]
        }
      ]
    },
    {
      "id": "public-health-101-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "public-health-101-l03-a1",
          "type": "document",
          "title": "Key Concepts Study Guide",
          "content": "A summary of the core vocabulary and methods covered in the first two lessons."
        }
      ],
      "questions": [
        {
          "id": "public-health-101-l03-q1",
          "text": "Which action most improves the quality of population health metrics in practice?",
          "skillId": "public-health-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Rely on intuition instead of defining constraints"
            },
            {
              "id": "b",
              "text": "Define assumptions, monitor key indicators, and test for potential failures"
            },
            {
              "id": "c",
              "text": "Treat all health outcomes as equally important"
            },
            {
              "id": "d",
              "text": "Ignore uncertainty and variation in data"
            }
          ],
          "correctOptionId": "b",
          "explanation": "High-quality decisions require clearly stated assumptions and measurable tests to check for weaknesses."
        },
        {
          "id": "public-health-101-l03-q2",
          "text": "At a 101 level, the strongest emphasis is on:",
          "skillId": "public-health-101-skill-level",
          "options": [
            {
              "id": "a",
              "text": "Foundational vocabulary, mapping core processes, and analyzing basic scenarios"
            },
            {
              "id": "b",
              "text": "Executing quickly without any review"
            },
            {
              "id": "c",
              "text": "Considering only a single group's perspective"
            },
            {
              "id": "d",
              "text": "Claiming results without baseline data for comparison"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A 101-level course focuses on building a strong foundation with key terms, processes, and simple scenarios."
        },
        {
          "id": "public-health-101-l03-q3",
          "text": "What best strengthens the reliability of epidemiologic reasoning?",
          "skillId": "public-health-101-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "Having no one assigned to respond to incidents"
            },
            {
              "id": "b",
              "text": "Clear control points, assigned owners, and thresholds for escalation"
            },
            {
              "id": "c",
              "text": "Making undocumented, spontaneous changes"
            },
            {
              "id": "d",
              "text": "Skipping reviews after an incident occurs"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliability improves when control, ownership, and escalation rules are clear and repeatable."
        }
      ]
    },
    {
      "id": "public-health-101-l04",
      "title": "Public Health Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "public-health-101-l04-a1",
          "type": "document",
          "title": "Case Study Brief",
          "content": "A one-page summary of the regional outbreak case, including key facts and figures."
        },
        {
          "id": "public-health-101-l04-a2",
          "type": "image",
          "title": "Outbreak Hotspot Map",
          "content": "A fictional map showing the spread of a disease in a region, with color-coded risk areas."
        }
      ],
      "chunks": [
        {
          "id": "public-health-101-l04-c1",
          "kind": "example",
          "title": "Case Context and Stakes",
          "content": "In this case study, we will analyze a regional outbreak response. This requires balancing disease surveillance, public communication, and intervention resources. You will map out the stakes involved in decision-making and identify less obvious risks. Understanding these dynamics is crucial for an effective public health response."
        },
        {
          "id": "public-health-101-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix Construction",
          "content": "We will build a tradeoff matrix to compare different interventions. This tool helps us evaluate each option based on criteria like effectiveness, cost, equity, and feasibility. By analyzing these factors systematically, we can make more informed decisions about which public health strategies to pursue."
        },
        {
          "id": "public-health-101-l04-c3",
          "kind": "recap",
          "title": "Learning from Failures",
          "content": "In this recap, we discuss how to turn lessons from failures into valuable safeguards. This includes creating response playbooks (guides for future situations) and establishing regular monitoring to track progress. By learning from past mistakes, we can improve our strategies and ensure better outcomes."
        }
      ],
      "flashcards": [
        {
          "id": "public-health-101-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A tool for comparing different options by weighing the pros and cons of each choice against specific criteria."
        },
        {
          "id": "public-health-101-l04-f2",
          "front": "Failure Signature",
          "back": "A recurring pattern of observable signs that indicates a specific type of risk or problem in a system."
        },
        {
          "id": "public-health-101-l04-f3",
          "front": "Recovery Playbook",
          "back": "A step-by-step guide for responding to a crisis or failure in a safe and timely manner."
        }
      ]
    },
    {
      "id": "public-health-101-l05",
      "title": "Public Health Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "public-health-101-l05-a1",
          "type": "document",
          "title": "Simulation Checklist",
          "content": "A checklist to guide you through setting up, running, and debriefing your simulation."
        }
      ],
      "chunks": [
        {
          "id": "public-health-101-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation Setup",
          "content": "In this interactive practice, you will set up a scenario simulation. This involves choosing interventions, defining the level of uncertainty, and setting measurable goals for success. This hands-on experience will help you learn how to plan and evaluate public health interventions effectively."
        },
        {
          "id": "public-health-101-l05-c2",
          "kind": "recap",
          "title": "Simulation Debrief",
          "content": "After each simulation, we will hold a debriefing session. We will review the results to assess the expected benefits, identify any negative side effects, and ensure our actions met our standards. This reflection is essential for learning and improving our public health strategies."
        }
      ],
      "interactiveActivities": [
        {
          "id": "public-health-101-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Compare three intervention paths and justify which one best improves population health while promoting health equity.",
          "instructions": [
            "Define your main objective and safety guardrails before starting.",
            "For each option, record one short-term and one long-term tradeoff.",
            "Select metrics that would prove or disprove the success of your choice."
          ]
        },
        {
          "id": "public-health-101-l05-act2",
          "type": "matching_pairs",
          "title": "Matching Risks to Solutions",
          "description": "Match each risk with the most effective response.",
          "pairs": [
            {
              "left": "Unclear ownership of tasks",
              "right": "Create a clear map of roles and escalation paths"
            },
            {
              "left": "Unreliable incoming data",
              "right": "Improve data validation and quality checks"
            },
            {
              "left": "Actions no longer match policy",
              "right": "Re-align practices with documented standards"
            },
            {
              "left": "Negative community reaction",
              "right": "Increase transparency and two-way communication"
            }
          ]
        }
      ]
    },
    {
      "id": "public-health-101-l06",
      "title": "Checkpoint 2: Application and Analysis",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "public-health-101-l06-a1",
          "type": "document",
          "title": "Case Analysis Framework",
          "content": "A structured guide for analyzing case studies and simulation results."
        }
      ],
      "questions": [
        {
          "id": "public-health-101-l06-q1",
          "text": "When analyzing a public health case study, what is the primary purpose of a tradeoff matrix?",
          "skillId": "public-health-101-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To prove one intervention is perfect"
            },
            {
              "id": "b",
              "text": "To systematically compare the pros and cons of different options"
            },
            {
              "id": "c",
              "text": "To list only the financial costs of each intervention"
            },
            {
              "id": "d",
              "text": "To ignore difficult choices and focus on easy ones"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix is a tool for structured comparison of different choices across multiple criteria, helping to make a balanced decision."
        },
        {
          "id": "public-health-101-l06-q2",
          "text": "In a simulation debrief, what is the most important reason to analyze negative side effects?",
          "skillId": "public-health-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "To assign blame for poor results"
            },
            {
              "id": "b",
              "text": "To understand the full impact of an intervention, including unintended harm"
            },
            {
              "id": "c",
              "text": "To prove the simulation was unrealistic"
            },
            {
              "id": "d",
              "text": "To focus only on what went wrong"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Analyzing side effects is crucial for understanding the real-world consequences of a strategy and ensuring it doesn't cause more harm than good."
        },
        {
          "id": "public-health-101-l06-q3",
          "text": "What does a 'recovery playbook' help a public health team to do?",
          "skillId": "public-health-101-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "Predict the future with 100% accuracy"
            },
            {
              "id": "b",
              "text": "Respond to a crisis quickly and effectively using a pre-planned process"
            },
            {
              "id": "c",
              "text": "Avoid all possible failures"
            },
            {
              "id": "d",
              "text": "Document the history of past successes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A recovery playbook provides clear, documented steps to manage a crisis, ensuring a more organized and effective response."
        }
      ]
    },
    {
      "id": "public-health-101-l07",
      "title": "Public Health Ethics and Policy",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "public-health-101-l07-a1",
          "type": "flowchart",
          "title": "Ethical Decision-Making Flowchart",
          "content": "A visual guide that walks through key ethical questions to consider when making public health decisions."
        }
      ],
      "chunks": [
        {
          "id": "public-health-101-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Mapping",
          "content": "In this lesson, we will map how public health decisions affect different groups of people (stakeholders). We will pay special attention to situations where the benefits for one group may create burdens for another. Understanding this is crucial for ensuring fairness and equity in public health."
        },
        {
          "id": "public-health-101-l07-c2",
          "kind": "concept",
          "title": "Accountability and Transparency",
          "content": "To ensure accountability, public health organizations need a clear structure for decision-making. This includes being able to trace a decision back to its origin, providing opportunities for review, and having clear standards for fixing things when they go wrong. These elements are essential for maintaining public trust."
        },
        {
          "id": "public-health-101-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "A successful public health initiative requires a comprehensive approach. We will review a checklist that covers policy guidelines, ethical considerations, technical reliability, and stakeholder trust. By addressing these criteria, we can build a solid foundation for our work."
        }
      ],
      "flashcards": [
        {
          "id": "public-health-101-l07-f1",
          "front": "Impact Distribution",
          "back": "How the positive and negative consequences of a decision are spread across different groups of people."
        },
        {
          "id": "public-health-101-l07-f2",
          "front": "Decision Traceability",
          "back": "The ability to explain why a decision was made, who made it, and what evidence was used."
        },
        {
          "id": "public-health-101-l07-f3",
          "front": "Responsible Execution",
          "back": "Delivering a project in a way that is effective, fair, and includes the ability to correct mistakes."
        }
      ]
    },
    {
      "id": "public-health-101-l08",
      "title": "Public Health Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "public-health-101-l08-a1",
          "type": "template",
          "title": "Capstone Project Charter Template",
          "content": "A fillable document to help you define the scope, goals, and rules for your capstone project."
        }
      ],
      "chunks": [
        {
          "id": "public-health-101-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter Drafting",
          "content": "In this activity, you will draft a detailed charter for your capstone project. The charter will outline the project's scope, identify constraints, establish success metrics, and set review checkpoints. This process helps you plan effectively and think critically about your project from start to finish."
        },
        {
          "id": "public-health-101-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "As you prepare to present your final project, it is crucial to focus on two areas. First, ensure your arguments are backed by solid evidence. Second, be ready to respond thoughtfully to critical feedback. This preparation will help you present your work confidently and effectively."
        }
      ],
      "interactiveActivities": [
        {
          "id": "public-health-101-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with measurable objectives, risks, and plans to address them.",
          "instructions": [
            "State your project's objective and boundaries.",
            "Define at least three measurable indicators of success.",
            "Document an escalation pathway for how you would handle critical failures."
          ]
        },
        {
          "id": "public-health-101-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Panel",
          "description": "Practice defending your capstone approach against critiques related to technical issues, policy, and stakeholder impact."
        }
      ]
    },
    {
      "id": "public-health-101-l09",
      "title": "Capstone Project: Public Health Proposal",
      "type": "project",
      "duration": 60,
      "learningAids": [
        {
          "id": "public-health-101-l09-a1",
          "type": "document",
          "title": "Submission Rubric",
          "content": "A detailed rubric showing how your final capstone project will be graded."
        },
        {
          "id": "public-health-101-l09-a2",
          "type": "document",
          "title": "Peer Review Guide",
          "content": "A guide with constructive questions to help you review a classmate's project."
        }
      ],
      "chunks": [
        {
          "id": "public-health-101-l09-c1",
          "kind": "practice",
          "title": "Project Execution",
          "content": "Using the charter you developed in the previous lesson, you will now execute your capstone project. You will analyze a provided public health problem, propose a detailed intervention, and create a presentation. Your proposal must use the concepts from this course, including metrics, epidemiologic reasoning, prevention strategy, and ethical governance, to defend your choices."
        }
      ]
    },
    {
      "id": "public-health-101-l10",
      "title": "Final Exam: Public Health Foundations",
      "type": "quiz",
      "duration": 20,
      "learningAids": [
        {
          "id": "public-health-101-l10-a1",
          "type": "document",
          "title": "Comprehensive Study Guide",
          "content": "A study guide covering all major topics from the entire module to help you prepare for the final exam."
        }
      ],
      "questions": [
        {
          "id": "public-health-101-l10-q1",
          "text": "When communicating a new public health policy to a community, what is the most critical element for building trust?",
          "skillId": "public-health-101-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Using complex scientific language to show expertise"
            },
            {
              "id": "b",
              "text": "Being transparent about the evidence, uncertainties, and potential tradeoffs"
            },
            {
              "id": "c",
              "text": "Making promises that cannot be guaranteed"
            },
            {
              "id": "d",
              "text": "Sharing information only with community leaders"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Transparency about what is known, what is unknown, and what the difficult choices are is fundamental to building and maintaining public trust."
        },
        {
          "id": "public-health-101-l10-q2",
          "text": "A defensible public health recommendation is one that:",
          "skillId": "public-health-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Is popular with everyone"
            },
            {
              "id": "b",
              "text": "Is based on a single, powerful anecdote"
            },
            {
              "id": "c",
              "text": "Is supported by evidence, acknowledges limitations, and has a clear rationale"
            },
            {
              "id": "d",
              "text": "Is the cheapest option available"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A defensible recommendation can withstand scrutiny because it is built on a foundation of evidence and clear, logical reasoning."
        },
        {
          "id": "public-health-101-l10-q3",
          "text": "What is the primary goal of mapping stakeholder impacts?",
          "skillId": "public-health-101-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "To identify which groups to ignore"
            },
            {
              "id": "b",
              "text": "To ensure that benefits and burdens are distributed fairly across different groups"
            },
            {
              "id": "c",
              "text": "To give more power to the most vocal stakeholders"
            },
            {
              "id": "d",
              "text": "To make the decision-making process more complicated"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The goal of stakeholder mapping is to promote health equity by understanding and addressing how a decision might disproportionately harm or benefit certain populations."
        }
      ]
    }
  ]
};
