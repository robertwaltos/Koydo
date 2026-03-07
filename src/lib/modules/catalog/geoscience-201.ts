import type { LearningModule } from "@/lib/modules/types";

export const geoscience_201_Module: LearningModule = {
  "id": "geoscience-201",
  "title": "Geoscience Applied Practice",
  "description": "A level 201 curriculum in Geoscience focusing on how Earth's crust moves and its surface changes. You'll learn to analyze earth materials, interpret natural hazards, and manage resources responsibly through case studies and simulations.",
  "subject": "Earth Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "geology",
    "earth-systems"
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
    "Explain how tectonic forces and surface processes shape the Earth and apply this knowledge to real-world scenarios.",
    "Develop a systematic process for analyzing rocks and minerals, ensuring your results are reliable.",
    "Assess different strategies for managing natural hazards, like earthquakes or landslides, by comparing their effectiveness.",
    "Create fair and transparent plans for managing natural resources, considering the needs of the environment and community.",
    "Clearly explain geological risks and the pros and cons of different decisions to various audiences.",
    "Justify your geological recommendations using scientific evidence and reflect on the outcomes."
  ],
  "lessons": [
    {
      "id": "geoscience-201-l01",
      "title": "Geoscience Core Models",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "geoscience-201-l01-a1",
          "type": "diagram",
          "title": "Core Concepts Map",
          "content": "A concept map showing the core areas of Geoscience: Tectonic Processes, Surface Processes, Earth Materials, and Hazard Analysis."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-201-l01-c1",
          "kind": "concept",
          "title": "Scope and Vocabulary",
          "content": "In this lesson, we will build a common vocabulary for discussing Geoscience. This shared language is essential for clear communication. We will outline the key areas we will explore, including the movement of Earth's crust (tectonics), the processes that shape our landscapes, and the analysis of materials like rocks and minerals. Defining these topics helps us understand the scope of our studies."
        },
        {
          "id": "geoscience-201-l01-c2",
          "kind": "concept",
          "title": "Cause and Effect",
          "content": "In this part of the lesson, you will learn how to identify and map the relationships between causes and effects in geological systems. We will explore the assumptions we make and the limitations we face when planning actions or solutions. This understanding is crucial for developing effective strategies in Geoscience."
        },
        {
          "id": "geoscience-201-l01-c3",
          "kind": "recap",
          "title": "Using Evidence",
          "content": "In Geoscience, it is important to support claims with solid evidence. This means using measurable data to back up our statements. We will also learn to establish confidence ranges for our findings and set up review checkpoints to ensure our work is reliable and can be trusted."
        }
      ],
      "flashcards": [
        {
          "id": "geoscience-201-l01-f1",
          "front": "Tectonic and Surface Processes",
          "back": "The large-scale movements of Earth's crust (tectonics) and the processes like erosion and weathering that shape the land (surface processes)."
        },
        {
          "id": "geoscience-201-l01-f2",
          "front": "Earth Materials Analysis",
          "back": "The systematic study of rocks, minerals, and soils to understand their properties and history."
        },
        {
          "id": "geoscience-201-l01-f3",
          "front": "Hazard and Risk Interpretation",
          "back": "The process of evaluating potential dangers from natural events (hazards) and their potential impact on people and property (risk)."
        }
      ]
    },
    {
      "id": "geoscience-201-l02",
      "title": "Geoscience Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "geoscience-201-l02-a1",
          "type": "diagram",
          "title": "Workflow Template",
          "content": "A blank flowchart template for students to map out a process, including decision points, actions, and outcomes."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-201-l02-c1",
          "kind": "practice",
          "title": "Building a Process",
          "content": "In this interactive activity, you will work together to create a workflow. This involves mapping out who is responsible for different tasks, setting up quality-control gates to monitor progress, and defining measurable outcomes to assess success. This hands-on experience will help you understand how organized processes function in real-world scenarios."
        },
        {
          "id": "geoscience-201-l02-c2",
          "kind": "recap",
          "title": "Testing and Safety Nets",
          "content": "In this recap, we will discuss how systems can be stress-tested to identify potential failure points. You will learn about setting thresholds for when to 'roll back' or revert to a previous state if things do not go as planned. This knowledge is essential for ensuring the reliability of geoscience projects."
        }
      ],
      "interactiveActivities": [
        {
          "id": "geoscience-201-l02-act1",
          "type": "matching_pairs",
          "title": "Matching Processes to Goals",
          "description": "Match each control process to its primary benefit for reliability or governance.",
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
      "id": "geoscience-201-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "geoscience-201-l03-a1",
          "type": "document",
          "title": "Key Concepts Review",
          "content": "A one-page summary of the core concepts, vocabulary, and workflow principles covered in the first two lessons."
        }
      ],
      "questions": [
        {
          "id": "geoscience-201-l03-q1",
          "text": "Which practice most improves decision quality when analyzing tectonic and surface processes?",
          "skillId": "geoscience-201-tectonic-processes",
          "options": [
            {
              "id": "a",
              "text": "Relying on intuition without data"
            },
            {
              "id": "b",
              "text": "Defining assumptions, constraints, and measurable indicators"
            },
            {
              "id": "c",
              "text": "Prioritizing speed over evidence in all cases"
            },
            {
              "id": "d",
              "text": "Ignoring uncertainty and potential edge cases"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Decision quality improves when assumptions, constraints, and measurement are made clear from the start."
        },
        {
          "id": "geoscience-201-l03-q2",
          "text": "A high-quality workflow for earth materials analysis should include:",
          "skillId": "geoscience-201-materials-analysis",
          "options": [
            {
              "id": "a",
              "text": "Clear roles, quality checkpoints, and criteria for handling problems"
            },
            {
              "id": "b",
              "text": "Vague responsibilities and on-the-spot decisions"
            },
            {
              "id": "c",
              "text": "No review after the work is completed"
            },
            {
              "id": "d",
              "text": "Making process changes without tracking them"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable execution needs clear ownership of tasks and pre-defined control points for quality."
        },
        {
          "id": "geoscience-201-l03-q3",
          "text": "A defensible approach to interpreting hazard and risk requires:",
          "skillId": "geoscience-201-hazard-interpretation",
          "options": [
            {
              "id": "a",
              "text": "Using stories without comparative data"
            },
            {
              "id": "b",
              "text": "Comparison against a baseline and analysis of side-effects"
            },
            {
              "id": "c",
              "text": "Changing success criteria after seeing the results"
            },
            {
              "id": "d",
              "text": "Ignoring cases that are difficult to analyze"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Comparing results to a baseline and analyzing side-effects are key to avoiding biased conclusions."
        },
        {
          "id": "geoscience-201-l03-q4",
          "text": "A mature system for managing resources connects:",
          "skillId": "geoscience-201-resource-governance",
          "options": [
            {
              "id": "a",
              "text": "The original goal, measurable controls, and plans for corrective action"
            },
            {
              "id": "b",
              "text": "Policy statements without any accountability"
            },
            {
              "id": "c",
              "text": "Performance targets with no risk controls"
            },
            {
              "id": "d",
              "text": "A management process that is not transparent"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Effective resource management links the policy's intent to measurable controls and a clear path for corrective action."
        }
      ]
    },
    {
      "id": "geoscience-201-l04",
      "title": "Geoscience Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "geoscience-201-l04-a1",
          "type": "image",
          "title": "Case Study Map",
          "content": "A topographical and geological map of a fictional region facing seismic risks, coastal erosion, and water resource challenges."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-201-l04-c1",
          "kind": "example",
          "title": "Case Context",
          "content": "In this case study, we will explore a region facing significant challenges, including earthquake threats, erosion, and groundwater shortages. You will analyze these issues, identify the competing goals of different community groups, and weigh the risks of making integrated geoscience decisions. This exercise will deepen your understanding of real-world geoscience complexities."
        },
        {
          "id": "geoscience-201-l04-c2",
          "kind": "concept",
          "title": "Weighing Pros and Cons",
          "content": "In this section, we will introduce the tradeoff matrix, a tool for evaluating different options. You will learn how to compare choices based on criteria like effectiveness, cost, risk, and community impact. This structured process will help you make well-informed decisions in geoscience projects."
        },
        {
          "id": "geoscience-201-l04-c3",
          "kind": "recap",
          "title": "Planning for Problems",
          "content": "In this recap, we will discuss how to learn from past failures to be more proactive. You will learn how to create safeguards and response playbooks that can be used in future situations. This knowledge is vital for improving resilience and safety in geoscience practices."
        }
      ],
      "flashcards": [
        {
          "id": "geoscience-201-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A table used to compare different choices by scoring them against important criteria, like cost, safety, and environmental impact."
        },
        {
          "id": "geoscience-201-l04-f2",
          "front": "Failure Pattern",
          "back": "A repeated type of problem or mistake that points to a weakness in a system or plan."
        },
        {
          "id": "geoscience-201-l04-f3",
          "front": "Response Playbook",
          "back": "A step-by-step guide created in advance to handle a specific problem, ensuring a quick and effective response."
        }
      ]
    },
    {
      "id": "geoscience-201-l05",
      "title": "Geoscience Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "geoscience-201-l05-a1",
          "type": "image",
          "title": "Simulation Dashboard",
          "content": "An image of a simulation interface showing input variables (e.g., sea wall height, pumping rate) and output monitors (e.g., flood risk, aquifer level)."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-201-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation",
          "content": "In this interactive simulation, you will run various intervention scenarios while dealing with uncertainty. You will compare the outcomes of each scenario to understand the potential impacts of your decisions. This practical experience will enhance your problem-solving skills in geoscience."
        },
        {
          "id": "geoscience-201-l05-c2",
          "kind": "recap",
          "title": "Reviewing the Results",
          "content": "After running the simulations, we will hold a debriefing session. You will evaluate your performance based on whether you met your targets, what side effects occurred, and whether you followed the established rules. This reflection will help you learn from your experience."
        }
      ],
      "interactiveActivities": [
        {
          "id": "geoscience-201-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Compare different plans for managing tectonic risks and natural resources in a simulated environment.",
          "instructions": [
            "Define your objective and constraints before choosing a plan.",
            "Document the short-term and long-term pros and cons of your choice.",
            "Specify the metrics that will prove your chosen path was successful."
          ]
        }
      ]
    },
    {
      "id": "geoscience-201-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "geoscience-201-l06-a1",
          "type": "document",
          "title": "Case Study Review",
          "content": "A summary of the key challenges, stakeholder perspectives, and decision criteria from the case analysis and simulation lessons."
        }
      ],
      "questions": [
        {
          "id": "geoscience-201-l06-q1",
          "text": "In a case study involving a coastal community, what is the most critical first step in evaluating the tradeoff between economic development and erosion control?",
          "skillId": "geoscience-201-case-analysis",
          "options": [
            {
              "id": "a",
              "text": "Build a seawall immediately"
            },
            {
              "id": "b",
              "text": "Survey residents' opinions"
            },
            {
              "id": "c",
              "text": "Analyze historical erosion data and geological maps"
            },
            {
              "id": "d",
              "text": "Secure funding for the largest possible project"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Understanding the geological context and historical trends with evidence is essential before evaluating any solution."
        },
        {
          "id": "geoscience-201-l06-q2",
          "text": "When using a simulation to test a flood mitigation plan, what does a 'side-effect analysis' primarily help you identify?",
          "skillId": "geoscience-201-simulation-evaluation",
          "options": [
            {
              "id": "a",
              "text": "The total cost of the project"
            },
            {
              "id": "b",
              "text": "Unexpected negative impacts in other areas, like downstream ecosystems"
            },
            {
              "id": "c",
              "text": "Who to blame if the plan fails"
            },
            {
              "id": "d",
              "text": "The popularity of the plan"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Simulations help reveal unintended consequences that might not be obvious at first."
        },
        {
          "id": "geoscience-201-l06-q3",
          "text": "A 'tradeoff matrix' is most useful for:",
          "skillId": "geoscience-201-decision-making",
          "options": [
            {
              "id": "a",
              "text": "Proving one option is perfect"
            },
            {
              "id": "b",
              "text": "Making a complex decision by systematically comparing choices against key criteria"
            },
            {
              "id": "c",
              "text": "Creating a project schedule"
            },
            {
              "id": "d",
              "text": "Ignoring stakeholder opinions"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix provides a structured way to evaluate the pros and cons of different options, especially when there is no single perfect answer."
        },
        {
          "id": "geoscience-201-l06-q4",
          "text": "Developing a 'response playbook' for a potential landslide is an example of:",
          "skillId": "geoscience-201-proactive-planning",
          "options": [
            {
              "id": "a",
              "text": "Reactive problem solving after a disaster"
            },
            {
              "id": "b",
              "text": "Proactive planning to manage a known risk"
            },
            {
              "id": "c",
              "text": "Ignoring the risk because it's unlikely"
            },
            {
              "id": "d",
              "text": "A purely economic analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A playbook is a proactive tool created in advance to ensure a coordinated and effective response when a hazardous event occurs."
        }
      ]
    },
    {
      "id": "geoscience-201-l07",
      "title": "Geoscience Governance and Impact",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "geoscience-201-l07-a1",
          "type": "diagram",
          "title": "Stakeholder Impact Map",
          "content": "An infographic illustrating how a decision to build a dam affects different stakeholders: farmers (irrigation), town residents (power), downstream ecosystems (water flow), and indigenous communities (land rights)."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-201-l07-c1",
          "kind": "concept",
          "title": "Impact on People and Communities",
          "content": "In this lesson, you will learn how to map out the distribution of benefits and burdens among different groups of people (stakeholders). This is crucial for ensuring that all voices are heard and considered in geoscience projects, promoting fairness and equity."
        },
        {
          "id": "geoscience-201-l07-c2",
          "kind": "concept",
          "title": "Ensuring Responsibility",
          "content": "In this section, we will explore how to build accountability into a project. You will learn about the importance of traceable decisions (who made what choice and why), the right for affected parties to review plans, and the obligation to fix problems. This helps create transparent and responsible project governance."
        },
        {
          "id": "geoscience-201-l07-c3",
          "kind": "recap",
          "title": "Putting It All Together Responsibly",
          "content": "At the end of a project, it's important to use a final checklist. This helps ensure that we are performing well, managing risks effectively, and considering the ethical impact of our actions. By balancing these elements, we can make responsible decisions that benefit everyone involved."
        }
      ],
      "flashcards": [
        {
          "id": "geoscience-201-l07-f1",
          "front": "Impact Distribution",
          "back": "How the positive and negative outcomes of a project are spread across different people, natural systems, and periods of time."
        },
        {
          "id": "geoscience-201-l07-f2",
          "front": "Decision Traceability",
          "back": "A clear, auditable record of a decision, including the evidence used, who was responsible, and the reasoning behind it."
        },
        {
          "id": "geoscience-201-l07-f3",
          "front": "Responsible Execution",
          "back": "A way of delivering a project that combines effectiveness with accountability and fairness to all involved."
        }
      ]
    },
    {
      "id": "geoscience-201-l08",
      "title": "Geoscience Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "geoscience-201-l08-a1",
          "type": "document",
          "title": "Project Charter Template",
          "content": "A document template for the Capstone Charter, with sections for Project Goal, Key Metrics, Constraints, Stakeholders, and Review Plan."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-201-l08-c1",
          "kind": "practice",
          "title": "Planning Your Final Project",
          "content": "In this activity, you will create a detailed plan, or 'charter,' for your final project. This includes writing clear objectives, identifying constraints, establishing metrics for success, and outlining a review process. This ensures that everyone understands the project's goals and rules."
        },
        {
          "id": "geoscience-201-l08-c2",
          "kind": "recap",
          "title": "Preparing to Present Your Plan",
          "content": "As we move forward, you will get ready to defend your project decisions. This means preparing to explain and justify your choices, addressing any technical questions or critiques about your plan. This practice helps build confidence and critical thinking skills."
        }
      ],
      "interactiveActivities": [
        {
          "id": "geoscience-201-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone project charter with measurable outcomes and plans for corrective action.",
          "instructions": [
            "Define the main objective and operating boundaries of your project.",
            "List at least three measurable indicators of success.",
            "Define the criteria for when a problem needs to be escalated or a corrective action is needed."
          ]
        }
      ]
    }
  ]
};
