import type { LearningModule } from "@/lib/modules/types";

export const geoscience_401_Module: LearningModule = {
  "id": "geoscience-401",
  "title": "Geoscience Leadership and Capstone",
  "description": "Level 401 curriculum in Geoscience, centered on tectonic and surface processes, earth materials analysis, hazard and risk interpretation, and resource and stewardship governance through case analysis, simulation, and checkpoint-driven mastery.",
  "subject": "Earth Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "geology",
    "earth-systems"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Analyze tectonic and surface processes to solve real-world geological problems.",
    "Design and implement systematic workflows for analyzing earth materials, ensuring accuracy and repeatability.",
    "Critically evaluate geological hazard assessments and mitigation strategies using evidence-based comparisons.",
    "Develop and apply governance frameworks for the sustainable management of natural resources.",
    "Communicate complex geoscience concepts, including uncertainty and risk, to diverse audiences.",
    "Justify project decisions and analytical conclusions with robust evidence and reflective practice."
  ],
  "lessons": [
    {
      "id": "geoscience-401-l01",
      "title": "Geoscience Core Models",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "geoscience-401-l01-a1",
          "type": "image",
          "title": "The Dynamic Earth System",
          "content": "Diagram illustrating the interconnectedness of tectonic plates, the rock cycle, and surface processes like erosion and weathering."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-401-l01-c1",
          "kind": "concept",
          "title": "Scope and Vocabulary",
          "content": "In this lesson, we'll build our foundational vocabulary for advanced geoscience. We will define and explore core concepts like tectonic movements, the surface processes that shape our landscapes, and the classification of earth materials. Mastering these terms is the first step toward analyzing the Earth's complex systems."
        },
        {
          "id": "geoscience-401-l01-c2",
          "kind": "concept",
          "title": "Causal Reasoning",
          "content": "Geoscience involves understanding complex cause-and-effect relationships. We will learn to map these connections, identify our underlying assumptions, and recognize the limitations of our models. This critical thinking is essential before proposing solutions to geological challenges."
        },
        {
          "id": "geoscience-401-l01-c3",
          "kind": "recap",
          "title": "Evidence Standards",
          "content": "Scientific claims require strong evidence. We will establish standards for our work, focusing on using measurable indicators, defining confidence ranges for our data, and setting up review checkpoints to ensure our analysis is rigorous and defensible."
        }
      ],
      "flashcards": [
        {
          "id": "geoscience-401-l01-f1",
          "front": "Tectonic and Surface Processes",
          "back": "The fundamental forces that shape Earth's crust and landscapes, forming the basis for geological analysis."
        },
        {
          "id": "geoscience-401-l01-f2",
          "front": "Earth Materials Analysis",
          "back": "The systematic process of identifying and evaluating the properties of rocks, minerals, and soils to ensure reliable and repeatable results."
        },
        {
          "id": "geoscience-401-l01-f3",
          "front": "Hazard and Risk Interpretation",
          "back": "The evaluation process for assessing geological threats, distinguishing between potential and probable impacts to make informed decisions."
        }
      ]
    },
    {
      "id": "geoscience-401-l02",
      "title": "Geoscience Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "geoscience-401-l02-a1",
          "type": "image",
          "title": "Geoscience Workflow Example",
          "content": "A flowchart showing the steps for a seismic hazard analysis, from data collection to final report, including decision points and quality checks."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-401-l02-c1",
          "kind": "practice",
          "title": "Workflow Build",
          "content": "In this interactive lab, you will design a complete workflow for a geoscience task. This includes assigning responsibilities, setting quality checkpoints to monitor progress, and defining measurable outcomes to evaluate success. This hands-on experience demonstrates how structured processes lead to reliable results."
        },
        {
          "id": "geoscience-401-l02-c2",
          "kind": "recap",
          "title": "Readiness and Rollback",
          "content": "Effective workflows must account for potential failures. We will discuss how to stress-test a system to find weak points and establish clear criteria for when to pause or reverse a process. This foresight is crucial for managing complex projects and ensuring safety."
        }
      ],
      "interactiveActivities": [
        {
          "id": "geoscience-401-l02-act1",
          "type": "matching_pairs",
          "title": "Control Mapping",
          "description": "Match each workflow control to its primary purpose.",
          "pairs": [
            {
              "left": "Peer Review",
              "right": "Prevents avoidable errors before they happen"
            },
            {
              "left": "Emergency Stop Trigger",
              "right": "Contains impact during unexpected failures"
            },
            {
              "left": "Baseline Monitoring",
              "right": "Provides a basis for claiming a measured outcome"
            },
            {
              "left": "Post-Project Review",
              "right": "Improves the quality of future decisions"
            }
          ]
        }
      ]
    },
    {
      "id": "geoscience-401-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "geoscience-401-l03-a1",
          "type": "practice",
          "title": "Review Key Concepts",
          "content": "Revisit the flashcards from Lesson 1 and the workflow diagram from Lesson 2 before starting."
        }
      ],
      "questions": [
        {
          "id": "geoscience-401-l03-q1",
          "text": "What is the most critical first step when analyzing tectonic and surface processes?",
          "skillId": "geoscience-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Relying on intuition without data"
            },
            {
              "id": "b",
              "text": "Explicitly defining assumptions, constraints, and measurable indicators"
            },
            {
              "id": "c",
              "text": "Prioritizing speed over accuracy in all cases"
            },
            {
              "id": "d",
              "text": "Ignoring uncertainty and potential edge cases"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Decision quality improves when assumptions, constraints, and measurement are made explicit from the start."
        },
        {
          "id": "geoscience-401-l03-q2",
          "text": "A high-quality workflow for earth materials analysis should always include:",
          "skillId": "geoscience-401-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Clear role assignments, quality checkpoints, and defined escalation paths"
            },
            {
              "id": "b",
              "text": "Vague responsibilities and ad-hoc decisions"
            },
            {
              "id": "c",
              "text": "Skipping a post-implementation review to save time"
            },
            {
              "id": "d",
              "text": "Making process changes without documentation"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable execution requires clear ownership, defined control points, and a plan for addressing problems."
        },
        {
          "id": "geoscience-401-l03-q3",
          "text": "A defensible approach to hazard and risk interpretation requires:",
          "skillId": "geoscience-401-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Highlighting anecdotal successes without comparison"
            },
            {
              "id": "b",
              "text": "Comparison against a baseline and analysis of potential side effects"
            },
            {
              "id": "c",
              "text": "Changing the success criteria after seeing the results"
            },
            {
              "id": "d",
              "text": "Ignoring data that contradicts the initial hypothesis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Objective evaluation requires comparing results to a baseline and considering unintended consequences to prevent biased conclusions."
        },
        {
          "id": "geoscience-401-l03-q4",
          "text": "Mature resource and stewardship governance systems connect:",
          "skillId": "geoscience-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Policy goals, measurable controls, and clear paths for corrective action"
            },
            {
              "id": "b",
              "text": "Policy statements without any mechanism for accountability"
            },
            {
              "id": "c",
              "text": "Performance targets without any associated risk controls"
            },
            {
              "id": "d",
              "text": "Governance rules that are not transparent to stakeholders"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Effective governance links the original policy intent to measurable controls and a clear process for remediation."
        }
      ]
    },
    {
      "id": "geoscience-401-l04",
      "title": "Geoscience Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "geoscience-401-l04-a1",
          "type": "image",
          "title": "Tradeoff Matrix for Dam Siting",
          "content": "A sample matrix comparing three potential dam locations based on criteria like geological stability, environmental impact, cost, and community benefit."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-401-l04-c1",
          "kind": "example",
          "title": "Case Context",
          "content": "We will analyze a real-world case study of a region facing multiple geological challenges, such as seismic risk, coastal erosion, and groundwater depletion. As a geoscientist, you must weigh conflicting objectives and risks. Your task is to identify these competing priorities and evaluate the vulnerabilities of the current systems."
        },
        {
          "id": "geoscience-401-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix",
          "content": "A tradeoff matrix is a powerful tool for decision-making. We will use it to systematically evaluate different solutions against key criteria like effectiveness, feasibility, risk, and stakeholder impact. This structured approach helps justify a chosen path by making the decision process transparent."
        },
        {
          "id": "geoscience-401-l04-c3",
          "kind": "recap",
          "title": "Learning from Failure",
          "content": "Analyzing past failures is essential for improving future outcomes. We will discuss how to identify recurring failure patterns in geological projects and use that knowledge to design better safeguards and create response playbooks for when things go wrong."
        }
      ],
      "flashcards": [
        {
          "id": "geoscience-401-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured method to compare multiple options based on a consistent set of weighted criteria."
        },
        {
          "id": "geoscience-401-l04-f2",
          "front": "Failure Pattern",
          "back": "A recurring type of problem or weakness that indicates a predictable risk in a system or process."
        },
        {
          "id": "geoscience-401-l04-f3",
          "front": "Response Playbook",
          "back": "A predefined set of actions to ensure a safe, timely, and effective response to a known risk or failure."
        }
      ]
    },
    {
      "id": "geoscience-401-l05",
      "title": "Geoscience Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "geoscience-401-l05-a1",
          "type": "image",
          "title": "Simulation Interface",
          "content": "Screenshot of a simulation tool showing a map with adjustable variables for rainfall intensity and soil type to predict landslide risk."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-401-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation",
          "content": "In this interactive simulation, you will test different mitigation strategies for the case study region. You will adjust variables, account for uncertainty, and compare the outcomes of your choices. This practice hones your ability to forecast the potential consequences of your decisions."
        },
        {
          "id": "geoscience-401-l05-c2",
          "kind": "recap",
          "title": "Debrief",
          "content": "After the simulation, we will debrief as a group. You will present your results and justify your decisions, evaluating your performance against the project targets, any unintended side effects, and the established ethical and governance standards. This reflection is crucial for professional growth."
        }
      ],
      "interactiveActivities": [
        {
          "id": "geoscience-401-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Compare intervention paths for tectonic and surface processes and resource and stewardship governance.",
          "instructions": [
            "Define your primary objective and constraints before selecting an intervention.",
            "Document the short-term and long-term tradeoffs of your chosen path.",
            "Specify the metrics you will use to validate that your intervention was successful."
          ]
        }
      ]
    },
    {
      "id": "geoscience-401-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "geoscience-401-l06-a1",
          "type": "practice",
          "title": "Review Case Materials",
          "content": "Re-read the case study from Lesson 4 and your simulation results from Lesson 5 before starting."
        }
      ],
      "questions": [
        {
          "id": "geoscience-401-l06-q1",
          "text": "When using a tradeoff matrix to select a site for a new geothermal plant, what is the primary goal?",
          "skillId": "geoscience-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "To choose the option with the highest score in a single category, like cost."
            },
            {
              "id": "b",
              "text": "To make the decision process transparent and justifiable by comparing options across multiple, weighted criteria."
            },
            {
              "id": "c",
              "text": "To confirm a decision that has already been made informally."
            },
            {
              "id": "d",
              "text": "To create a complex document that is difficult for non-experts to question."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix is a tool for structured, transparent decision-making that balances competing priorities."
        },
        {
          "id": "geoscience-401-l06-q2",
          "text": "In a landslide simulation, you find that building a retaining wall protects a school but increases flood risk for a downstream neighborhood. This outcome is best described as a(n):",
          "skillId": "geoscience-401-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Unmitigated success"
            },
            {
              "id": "b",
              "text": "System failure"
            },
            {
              "id": "c",
              "text": "Unintended side effect or tradeoff"
            },
            {
              "id": "d",
              "text": "Data error in the simulation"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Effective analysis requires identifying not just the intended benefits but also the unintended negative consequences (tradeoffs) of an intervention."
        },
        {
          "id": "geoscience-401-l06-q3",
          "text": "A review of historical levee failures along a river reveals that most breaches occurred at curved sections during peak flow after heavy rainfall. This information represents a:",
          "skillId": "geoscience-401-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Random, unpredictable event"
            },
            {
              "id": "b",
              "text": "Failure pattern that can inform future risk assessments"
            },
            {
              "id": "c",
              "text": "Problem that is too complex to analyze"
            },
            {
              "id": "d",
              "text": "Sign that levees are an ineffective technology"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Identifying recurring failure patterns is a key part of learning from past events to predict and mitigate future risks."
        },
        {
          "id": "geoscience-401-l06-q4",
          "text": "When presenting your simulation results to a mixed group of stakeholders, what is the most effective communication strategy?",
          "skillId": "geoscience-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Focus only on the technical data and complex charts."
            },
            {
              "id": "b",
              "text": "Clearly explain the objectives, the tradeoffs of each option, and the uncertainties in your forecast."
            },
            {
              "id": "c",
              "text": "Present only the positive outcomes of your preferred solution."
            },
            {
              "id": "d",
              "text": "Avoid discussing risks to prevent unnecessary alarm."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Effective stakeholder communication requires transparency about tradeoffs, risks, and uncertainties to build trust and enable informed decisions."
        }
      ]
    },
    {
      "id": "geoscience-401-l07",
      "title": "Geoscience Governance and Impact",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "geoscience-401-l07-a1",
          "type": "image",
          "title": "Stakeholder Map for a Mining Project",
          "content": "A diagram showing the various stakeholders (local community, government, investors, environmental groups) and their respective interests and impacts."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-401-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact",
          "content": "Geoscience decisions have real-world consequences. In this lesson, we will learn how to map the distribution of benefits and burdens across different stakeholder groups. Understanding who is affected is essential for making fair, equitable, and sustainable choices."
        },
        {
          "id": "geoscience-401-l07-c2",
          "kind": "concept",
          "title": "Frameworks for Accountability",
          "content": "Good governance requires accountability. We will explore frameworks that ensure decisions are traceable to their origins, that stakeholders have the right to review those decisions, and that obligations for remediation are clearly defined. This structure builds trust and ensures responsibility."
        },
        {
          "id": "geoscience-401-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution",
          "content": "Responsible execution means balancing project performance with risk management and ethical considerations. We will develop a final checklist to evaluate our projects on all three fronts, ensuring our work is not only effective but also accountable and fair."
        }
      ],
      "flashcards": [
        {
          "id": "geoscience-401-l07-f1",
          "front": "Impact Distribution",
          "back": "The way in which the positive and negative outcomes of a project are allocated across different people, ecosystems, and timeframes."
        },
        {
          "id": "geoscience-401-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record explaining the evidence, ownership, and rationale behind a decision, allowing for transparent review."
        },
        {
          "id": "geoscience-401-l07-f3",
          "front": "Responsible Execution",
          "back": "A project delivery method that combines technical effectiveness with ethical accountability and social fairness."
        }
      ]
    },
    {
      "id": "geoscience-401-l08",
      "title": "Geoscience Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "geoscience-401-l08-a1",
          "type": "image",
          "title": "Capstone Project Charter",
          "content": "A template for a project charter including sections for Problem Statement, Objectives, Scope, Key Metrics, and Governance Plan."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-401-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter",
          "content": "In this lab, you will draft a charter for your capstone project. This document will serve as your roadmap, defining your objectives, constraints, metrics for success, and the governance plan that will guide your project. This structured planning is the foundation of a successful capstone."
        },
        {
          "id": "geoscience-401-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "A key part of your capstone is defending your work. We will discuss how to anticipate and prepare for questions about your methodology, data, and conclusions. Being ready to justify your decisions with evidence is a critical professional skill."
        }
      ],
      "interactiveActivities": [
        {
          "id": "geoscience-401-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with measurable outcomes and remediation pathways.",
          "instructions": [
            "Define a clear objective and the operating boundaries of your project.",
            "List at least three measurable indicators that will define success.",
            "Define the criteria for escalating a problem and for taking corrective action."
          ]
        }
      ]
    },
    {
      "id": "geoscience-401-l09",
      "title": "Capstone Project Execution",
      "type": "project",
      "duration": 120,
      "learningAids": [
        {
          "id": "geoscience-401-l09-a1",
          "type": "practice",
          "title": "Maintain a Project Log",
          "content": "Keep a detailed log of your decisions, data sources, analysis steps, and challenges. This will be invaluable for writing your final report and defending your work."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-401-l09-c1",
          "kind": "practice",
          "title": "Project Kickoff",
          "content": "Finalize your Capstone Charter from the previous lesson. Get feedback from your instructor or peers before beginning your research. A solid plan is crucial for success."
        },
        {
          "id": "geoscience-401-l09-c2",
          "kind": "practice",
          "title": "Data Collection and Analysis",
          "content": "Execute the core research for your project. Gather data from reliable sources, apply the analytical techniques learned in this course, and document every step of your workflow."
        },
        {
          "id": "geoscience-401-l09-c3",
          "kind": "practice",
          "title": "Synthesizing Results and Preparing Report",
          "content": "Translate your raw analysis into meaningful conclusions. Structure your findings into a clear, well-supported report or presentation that addresses your project's central objective and acknowledges limitations."
        }
      ]
    },
    {
      "id": "geoscience-401-l10",
      "title": "Checkpoint 3: Capstone and Governance",
      "type": "quiz",
      "duration": 15,
      "learningAids": [
        {
          "id": "geoscience-401-l10-a1",
          "type": "practice",
          "title": "Final Review",
          "content": "Review the concepts of governance from Lesson 7 and the purpose of the capstone charter from Lesson 8."
        }
      ],
      "questions": [
        {
          "id": "geoscience-401-l10-q1",
          "text": "When conducting a stakeholder impact analysis for a proposed coastal wind farm, which factor is most critical to consider for ensuring equitable outcomes?",
          "skillId": "geoscience-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "The total energy output of the farm."
            },
            {
              "id": "b",
              "text": "The distribution of economic benefits and environmental burdens across different communities."
            },
            {
              "id": "c",
              "text": "The engineering specifications of the turbines."
            },
            {
              "id": "d",
              "text": "The project's profitability for investors."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Equitable outcomes require a focus on how benefits (jobs, clean energy) and burdens (visual impact, construction noise) are distributed among all stakeholders."
        },
        {
          "id": "geoscience-401-l10-q2",
          "text": "What is the primary purpose of ensuring 'decision traceability' in a geoscience project?",
          "skillId": "geoscience-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "To make the project difficult for outsiders to understand."
            },
            {
              "id": "b",
              "text": "To create an auditable trail of evidence and rationale that supports and explains key decisions."
            },
            {
              "id": "c",
              "text": "To assign blame when a project fails."
            },
            {
              "id": "d",
              "text": "To fulfill a bureaucratic requirement with minimal effort."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Traceability is about transparency and accountability, allowing any decision to be reviewed and understood based on the evidence available at the time."
        },
        {
          "id": "geoscience-401-l10-q3",
          "text": "The 'measurable success indicators' section of a capstone charter is designed to:",
          "skillId": "geoscience-401-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Provide a vague, inspirational goal for the project."
            },
            {
              "id": "b",
              "text": "List all the tasks that need to be completed."
            },
            {
              "id": "c",
              "text": "Define objective, quantifiable criteria to determine if the project has achieved its goals."
            },
            {
              "id": "d",
              "text": "Describe the project's potential impact on society."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Measurable indicators are specific metrics that provide objective proof of whether the project's objectives were met."
        },
        {
          "id": "geoscience-401-l10-q4",
          "text": "As the leader of a capstone project evaluating groundwater contamination, you discover your initial model was based on a flawed assumption. What does a 'responsible execution' framework require you to do?",
          "skillId": "geoscience-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Ignore the flaw and hope no one notices to avoid delaying the project."
            },
            {
              "id": "b",
              "text": "Acknowledge the flawed assumption, document its impact, correct the model, and transparently report the change."
            },
            {
              "id": "c",
              "text": "Modify the data to fit the flawed model."
            },
            {
              "id": "d",
              "text": "Blame the source of the original assumption and continue without changes."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Responsible execution prioritizes scientific integrity and transparency over convenience. It involves acknowledging errors, correcting them, and communicating openly."
        }
      ]
    }
  ]
};
