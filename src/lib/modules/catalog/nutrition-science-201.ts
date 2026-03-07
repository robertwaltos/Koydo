import type { LearningModule } from "@/lib/modules/types";

export const nutrition_science_201_Module: LearningModule = {
  "id": "nutrition-science-201",
  "title": "Nutrition Science Applied Practice",
  "description": "Level 201 curriculum in Nutrition Science, centered on metabolic foundations, dietary pattern analysis, evidence-based intervention design, and nutrition policy and equity through case analysis, simulation, and checkpoint-driven mastery.",
  "subject": "Health Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "nutrition",
    "public-health"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Explain and apply metabolic foundations under practical constraints",
    "Build repeatable workflows for dietary pattern analysis with measurable controls",
    "Evaluate interventions in evidence-based intervention design using comparative evidence",
    "Operationalize nutrition policy and equity with transparent governance loops",
    "Communicate uncertainty, risk, and tradeoffs clearly to mixed stakeholders",
    "Defend decisions through evidence-backed reasoning and post-run review"
  ],
  "lessons": [
    {
      "id": "nutrition-science-201-l01",
      "title": "Nutrition Science Core Models",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "nutrition-science-201-l01-a1",
          "type": "infographic",
          "title": "The Three Pillars of Nutrition Science",
          "content": "An infographic illustrating the relationship between Metabolic Foundations, Dietary Patterns, and Evidence-Based Interventions."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-201-l01-c1",
          "kind": "concept",
          "title": "Scope and Vocabulary",
          "content": "In this lesson, we will learn the key terms used in Nutrition Science. We will define our focus areas, including how the body processes food and how different eating patterns affect health. This shared vocabulary will help us communicate clearly as we explore these topics together."
        },
        {
          "id": "nutrition-science-201-l01-c2",
          "kind": "concept",
          "title": "Understanding Cause and Effect",
          "content": "Here, you will learn to identify and map the relationships between factors that influence nutrition. This includes understanding the assumptions we make and the limitations we face when designing nutrition programs. This skill will help you create more effective strategies to improve dietary habits."
        },
        {
          "id": "nutrition-science-201-l01-c3",
          "kind": "recap",
          "title": "What Makes Evidence Strong?",
          "content": "In this section, we will discuss how to evaluate nutrition claims. We will learn to base conclusions on measurable indicators, use confidence ranges to understand the certainty of our findings, and apply review checkpoints to ensure our information is accurate and reliable."
        }
      ],
      "flashcards": [
        {
          "id": "nutrition-science-201-l01-f1",
          "front": "Metabolic Foundations",
          "back": "The biochemical processes of how the body uses nutrients. Understanding these helps us make informed decisions about diet."
        },
        {
          "id": "nutrition-science-201-l01-f2",
          "front": "Dietary Pattern Analysis",
          "back": "A systematic way to study eating habits to ensure our findings are reliable and can be repeated."
        },
        {
          "id": "nutrition-science-201-l01-f3",
          "front": "Evidence-Based Intervention",
          "back": "A method for creating nutrition programs that uses solid proof to separate what truly works from what only seems to work."
        }
      ]
    },
    {
      "id": "nutrition-science-201-l02",
      "title": "Nutrition Science Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "nutrition-science-201-l02-a1",
          "type": "template",
          "title": "Project Workflow Template",
          "content": "A downloadable template for mapping out a nutrition intervention project, including roles, checkpoints, and success metrics."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-201-l02-c1",
          "kind": "practice",
          "title": "Building Your Project Plan",
          "content": "In this interactive activity, you will create a project workflow. This involves assigning responsibilities, setting up checkpoints to monitor progress, and defining measurable outcomes to assess success. This hands-on experience will help you learn how to organize and manage nutrition projects effectively."
        },
        {
          "id": "nutrition-science-201-l02-c2",
          "kind": "recap",
          "title": "Planning for Problems",
          "content": "In this recap, we will explore how to prepare for potential challenges. You will learn to stress-test your plans by imagining what could go wrong and setting clear rules for when to pause or go back to a previous step. This helps build resilience into your nutrition initiatives."
        }
      ],
      "interactiveActivities": [
        {
          "id": "nutrition-science-201-l02-act1",
          "type": "matching_pairs",
          "title": "Control Mapping",
          "description": "Match each control to its strongest reliability or governance effect.",
          "pairs": [
            {
              "left": "Pre-commit review",
              "right": "Prevents avoidable defects"
            },
            {
              "left": "Rollback trigger",
              "right": "Contains impact during failures"
            },
            {
              "left": "Baseline monitor",
              "right": "Supports defensible outcome claims"
            },
            {
              "left": "Retrospective cycle",
              "right": "Improves future decisions"
            }
          ]
        }
      ]
    },
    {
      "id": "nutrition-science-201-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "nutrition-science-201-l03-a1",
          "type": "worksheet",
          "title": "Key Concepts Study Guide",
          "content": "A one-page summary of key concepts and vocabulary from Lessons 1 and 2 to review before the quiz."
        }
      ],
      "questions": [
        {
          "id": "nutrition-science-201-l03-q1",
          "text": "Which practice most improves decision quality when studying metabolic foundations?",
          "skillId": "nutrition-science-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Use implicit assumptions and no baseline"
            },
            {
              "id": "b",
              "text": "Define assumptions, constraints, and measurable indicators"
            },
            {
              "id": "c",
              "text": "Prioritize speed over evidence in all cases"
            },
            {
              "id": "d",
              "text": "Ignore uncertainty and edge cases"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Decision quality improves when assumptions, constraints, and measurement are explicit."
        },
        {
          "id": "nutrition-science-201-l03-q2",
          "text": "A high-quality workflow for dietary pattern analysis should include:",
          "skillId": "nutrition-science-201-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Clear roles, progress checkpoints, and rules for handling problems"
            },
            {
              "id": "b",
              "text": "No role clarity and ad-hoc decisions"
            },
            {
              "id": "c",
              "text": "No post-implementation review"
            },
            {
              "id": "d",
              "text": "Untracked process changes"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable execution needs clear ownership and threshold-driven control points."
        }
      ]
    },
    {
      "id": "nutrition-science-201-l04",
      "title": "Nutrition Science Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "nutrition-science-201-l04-a1",
          "type": "document",
          "title": "Case Study Brief",
          "content": "A document outlining the background, stakeholders, and challenges of the community nutrition initiative being analyzed."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-201-l04-c1",
          "kind": "example",
          "title": "Introducing the Case Study",
          "content": "We will examine a community nutrition initiative that aims to improve health while respecting cultural preferences and addressing food access issues. You will identify competing goals and potential risks, enhancing your critical thinking and problem-solving skills."
        },
        {
          "id": "nutrition-science-201-l04-c2",
          "kind": "concept",
          "title": "Weighing the Options",
          "content": "We will introduce a tradeoff matrix, a visual tool for evaluating different options for nutrition interventions. You will learn to score these options based on their effectiveness, feasibility, risks, and stakeholder impact. This structured approach will help you make informed decisions."
        },
        {
          "id": "nutrition-science-201-l04-c3",
          "kind": "recap",
          "title": "Learning from Setbacks",
          "content": "In this recap, we will discuss how to turn patterns of failure into opportunities for improvement. You will learn to create safeguards and response plans that can be activated if things do not go as expected. This proactive approach will help you prepare for challenges in your nutrition projects."
        }
      ],
      "flashcards": [
        {
          "id": "nutrition-science-201-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A chart used to compare different choices by weighing their pros and cons against important goals."
        },
        {
          "id": "nutrition-science-201-l04-f2",
          "front": "Failure Pattern",
          "back": "A repeated type of problem that signals a weak spot in a plan."
        },
        {
          "id": "nutrition-science-201-l04-f3",
          "front": "Response Playbook",
          "back": "A pre-planned set of actions to handle common problems quickly and effectively."
        }
      ]
    },
    {
      "id": "nutrition-science-201-l05",
      "title": "Nutrition Science Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "nutrition-science-201-l05-a1",
          "type": "image",
          "title": "Simulation Dashboard",
          "content": "A screenshot of the interactive simulation interface, showing variables like budget, community trust, and health outcomes that the user can manipulate."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-201-l05-c1",
          "kind": "practice",
          "title": "Running the Simulation",
          "content": "In this interactive simulation, you will run various intervention scenarios while dealing with uncertainty. You will compare the outcomes of different approaches to see which ones are most effective. This practical experience will deepen your understanding of how to navigate complex nutrition challenges."
        },
        {
          "id": "nutrition-science-201-l05-c2",
          "kind": "recap",
          "title": "Analyzing Your Results",
          "content": "In this debriefing session, you will evaluate each simulation run by looking at how well you met your targets, any side effects that occurred, and whether you followed the rules. This reflection will help you learn from your experiences and improve future interventions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "nutrition-science-201-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Compare intervention paths for improving community health and ensuring equitable outcomes.",
          "instructions": [
            "Define your primary objective and constraints before selecting an intervention.",
            "Document the potential short-term and long-term tradeoffs of your choice.",
            "Specify the key metrics that will prove your chosen path was successful."
          ]
        }
      ]
    },
    {
      "id": "nutrition-science-201-l06",
      "title": "Checkpoint 2: Application and Analysis",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "nutrition-science-201-l06-a1",
          "type": "diagram",
          "title": "Decision-Making Framework",
          "content": "A visual guide (flowchart) for applying the Tradeoff Matrix and analyzing simulation results to make an evidence-based decision."
        }
      ],
      "questions": [
        {
          "id": "nutrition-science-201-l06-q1",
          "text": "When analyzing a nutrition case study, what is the primary purpose of a tradeoff matrix?",
          "skillId": "nutrition-science-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To prove one option is perfect"
            },
            {
              "id": "b",
              "text": "To ignore the negative aspects of a preferred solution"
            },
            {
              "id": "c",
              "text": "To systematically compare options across multiple, competing criteria"
            },
            {
              "id": "d",
              "text": "To choose the option with the lowest cost, regardless of other factors"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A tradeoff matrix is a tool for structured decision-making, allowing for a balanced comparison of pros and cons."
        },
        {
          "id": "nutrition-science-201-l06-q2",
          "text": "In a nutrition intervention simulation, why is it important to test scenarios with high uncertainty?",
          "skillId": "nutrition-science-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "To see how a plan holds up when things don't go as expected"
            },
            {
              "id": "b",
              "text": "To guarantee a successful outcome"
            },
            {
              "id": "c",
              "text": "Because uncertain scenarios are the easiest to model"
            },
            {
              "id": "d",
              "text": "To prove that the initial plan was flawless"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Simulating uncertainty stress-tests a plan and reveals potential weaknesses, improving its real-world resilience."
        },
        {
          "id": "nutrition-science-201-l06-q3",
          "text": "A 'failure pattern' in a case study or simulation is most useful for:",
          "skillId": "nutrition-science-201-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Assigning blame to a specific person"
            },
            {
              "id": "b",
              "text": "Identifying recurring risks to build better recovery plans"
            },
            {
              "id": "c",
              "text": "Justifying why a project should be cancelled"
            },
            {
              "id": "d",
              "text": "Proving that the initial goals were wrong"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Identifying patterns in failures allows for proactive planning and the creation of effective safeguards for the future."
        },
        {
          "id": "nutrition-science-201-l06-q4",
          "text": "When debriefing a simulation, what is the most critical comparison to make to determine an intervention's success?",
          "skillId": "nutrition-science-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Comparing the final outcome only to the best-case scenario"
            },
            {
              "id": "b",
              "text": "Comparing the outcome against the initial baseline and stated goals"
            },
            {
              "id": "c",
              "text": "Comparing your results to other students' results to see who won"
            },
            {
              "id": "d",
              "text": "Comparing the cost of the intervention to its popularity"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Success is measured by the change from the starting point (baseline) and how well the results met the pre-defined objectives."
        }
      ]
    },
    {
      "id": "nutrition-science-201-l07",
      "title": "Nutrition Science Governance and Impact",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "nutrition-science-201-l07-a1",
          "type": "diagram",
          "title": "Stakeholder Map",
          "content": "A diagram showing the different groups affected by a nutrition policy and how benefits or burdens are distributed among them."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-201-l07-c1",
          "kind": "concept",
          "title": "Who is Affected?",
          "content": "In this lesson, you will explore how the benefits and burdens of nutrition initiatives are distributed among different groups of people. By mapping these impacts, you will gain insights into how to create fair and effective nutrition programs that consider everyone's needs."
        },
        {
          "id": "nutrition-science-201-l07-c2",
          "kind": "concept",
          "title": "Ensuring Fairness and Responsibility",
          "content": "Here, we will discuss the importance of accountability in nutrition governance. You will learn how to ensure that decisions can be traced, reviewed, and corrected if issues arise. This is crucial for maintaining trust and integrity in nutrition programs."
        },
        {
          "id": "nutrition-science-201-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution",
          "content": "This recap focuses on putting it all together. We will review how to use checklists to ensure your project is effective, ethical, and accountable. You will learn to monitor performance, manage risks, and consider the ethical impact of your decisions on the community."
        }
      ],
      "flashcards": [
        {
          "id": "nutrition-science-201-l07-f1",
          "front": "Impact Distribution",
          "back": "An analysis of how the positive and negative effects of a program are shared among different groups of people."
        },
        {
          "id": "nutrition-science-201-l07-f2",
          "front": "Decision Traceability",
          "back": "The ability to follow the 'why' behind a decision, including the evidence used and who was responsible."
        },
        {
          "id": "nutrition-science-201-l07-f3",
          "front": "Responsible Execution",
          "back": "Carrying out a project in a way that is effective, fair, and accountable to all stakeholders."
        }
      ]
    },
    {
      "id": "nutrition-science-201-l08",
      "title": "Nutrition Science Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "nutrition-science-201-l08-a1",
          "type": "template",
          "title": "Capstone Charter Template",
          "content": "A fillable document that guides students in defining their project's objective, scope, success metrics, and risk management plan."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-201-l08-c1",
          "kind": "practice",
          "title": "Planning Your Final Project",
          "content": "In this interactive activity, you will work with a team to develop a detailed plan for your capstone project. This 'charter' will outline your objectives, potential challenges, and clear metrics for measuring success. This process helps connect course concepts to the practical decisions you'll make in your final assessment."
        },
        {
          "id": "nutrition-science-201-l08-c2",
          "kind": "recap",
          "title": "Preparing to Present Your Work",
          "content": "In these practice sessions, you will prepare to defend your project decisions. You will learn to respond thoughtfully to critiques about your project's technical details and ethical considerations. This practice builds confidence and strengthens your ability to explain your reasoning clearly."
        }
      ],
      "interactiveActivities": [
        {
          "id": "nutrition-science-201-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with measurable outcomes and remediation pathways.",
          "instructions": [
            "Define your project's main objective and operating boundaries.",
            "List at least three measurable indicators of success.",
            "Define the criteria for when to escalate a problem or take corrective action."
          ]
        }
      ]
    }
  ]
};
