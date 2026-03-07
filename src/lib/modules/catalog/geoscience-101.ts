import type { LearningModule } from "@/lib/modules/types";

export const geoscience_101_Module: LearningModule = {
  "id": "geoscience-101",
  "title": "Geoscience Foundations",
  "description": "An introductory curriculum in Geoscience focusing on tectonic processes, surface changes, earth materials, and natural hazards. Learn to analyze real-world cases, interpret risks, and understand resource stewardship through interactive labs, simulations, and a capstone project.",
  "subject": "Earth Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "geology",
    "earth-systems"
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
    "Explain the core processes that shape the Earth, such as plate tectonics and erosion.",
    "Develop a systematic approach to analyzing earth materials like rocks and minerals.",
    "Evaluate natural hazard risks using evidence and data.",
    "Analyze how resource management and stewardship decisions impact communities and the environment.",
    "Communicate scientific findings, including uncertainties and risks, to different audiences.",
    "Support decisions and conclusions with clear evidence and logical reasoning."
  ],
  "lessons": [
    {
      "id": "geoscience-101-l01",
      "title": "Introduction to Earth Systems",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "geoscience-101-l01-a1",
          "type": "image",
          "title": "Concept Map",
          "content": "A visual diagram showing how tectonic processes, surface processes, and the rock cycle are interconnected."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-101-l01-c1",
          "kind": "concept",
          "title": "Core Concepts and Vocabulary",
          "content": "Welcome to Geoscience! In this lesson, we'll introduce the key vocabulary for understanding our planet. We'll explore the major forces at work, including plate tectonics—the movement of Earth's crust—and surface processes like erosion by wind and water. [Visual: Animation of Earth's layers, followed by a world map showing the major tectonic plates.] Grasping these core ideas will build a strong foundation for the rest of the course."
        },
        {
          "id": "geoscience-101-l01-c2",
          "kind": "concept",
          "title": "Cause and Effect in Earth Science",
          "content": "Geoscience is all about understanding connections. We'll learn to identify cause-and-effect relationships, like how heavy rainfall on a steep slope can cause a landslide. [Visual: A simple flowchart showing: Heavy Rain -> Saturated Soil -> Increased Weight -> Slope Failure -> Landslide.] Recognizing these causal chains is the first step to predicting events and finding effective solutions."
        },
        {
          "id": "geoscience-101-l01-c3",
          "kind": "recap",
          "title": "The Importance of Evidence",
          "content": "In science, claims must be supported by evidence. We'll discuss why using measurable data is essential for making reliable conclusions. This means backing up our observations with facts and figures, and being honest about the certainty of our findings. [Visual: A graphic comparing a vague statement like 'the rock is old' with an evidence-based one like 'radiometric dating indicates the rock is 300 million years old']."
        }
      ],
      "flashcards": [
        {
          "id": "geoscience-101-l01-f1",
          "front": "Tectonic and Surface Processes",
          "back": "The large-scale movements of Earth's crust and the natural forces (like wind and water) that shape the land."
        },
        {
          "id": "geoscience-101-l01-f2",
          "front": "Earth Materials Analysis",
          "back": "The systematic process of identifying and studying rocks, minerals, and soils to understand their properties and history."
        },
        {
          "id": "geoscience-101-l01-f3",
          "front": "Hazard and Risk Interpretation",
          "back": "The process of evaluating the likelihood and potential impact of natural dangers like earthquakes, volcanoes, and floods."
        }
      ]
    },
    {
      "id": "geoscience-101-l02",
      "title": "Building a Scientific Investigation",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "geoscience-101-l02-a1",
          "type": "practice",
          "title": "Workflow Design Template",
          "content": "A downloadable template to help you structure your scientific investigation, with sections for questions, hypotheses, methods, and data collection."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-101-l02-c1",
          "kind": "practice",
          "title": "Designing Your Workflow",
          "content": "In this activity, you'll design a plan, or workflow, for a scientific investigation. This involves defining your research question, setting up clear steps, establishing checkpoints to review your progress, and deciding how you'll measure success. [Visual: An animated diagram of a simple workflow: 1. Ask Question -> 2. Form Hypothesis -> 3. Collect Data -> 4. Analyze -> 5. Conclude.]"
        },
        {
          "id": "geoscience-101-l02-c2",
          "kind": "recap",
          "title": "Planning for Problems",
          "content": "Even the best plans can face unexpected challenges. We'll discuss how to anticipate potential problems in your investigation. This includes thinking about what could go wrong and having a backup plan, which is crucial for ensuring your project stays on track."
        }
      ],
      "interactiveActivities": [
        {
          "id": "geoscience-101-l02-act1",
          "type": "matching_pairs",
          "title": "Investigation Steps",
          "description": "Match each scientific practice to its main purpose.",
          "pairs": [
            {
              "left": "Peer Review",
              "right": "Prevents avoidable errors in conclusions"
            },
            {
              "left": "Backup Plan",
              "right": "Reduces project delays during failures"
            },
            {
              "left": "Control Group",
              "right": "Provides a baseline for comparison"
            },
            {
              "left": "Repeating an Experiment",
              "right": "Improves the reliability of results"
            }
          ]
        }
      ]
    },
    {
      "id": "geoscience-101-l03",
      "title": "Checkpoint 1: Core Concepts",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "geoscience-101-l03-a1",
          "type": "practice",
          "title": "Review Key Terms",
          "content": "Quickly review the flashcards from Lesson 1 before starting the quiz."
        }
      ],
      "questions": [
        {
          "id": "geoscience-101-l03-q1",
          "text": "Which of the following is the best example of a surface process?",
          "skillId": "geoscience-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The movement of tectonic plates"
            },
            {
              "id": "b",
              "text": "A river carving a canyon through rock"
            },
            {
              "id": "c",
              "text": "The formation of magma deep in the mantle"
            },
            {
              "id": "d",
              "text": "The Earth's magnetic field"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Surface processes, like erosion from a river, shape the Earth's landscape. Plate tectonics and magma formation are internal processes."
        },
        {
          "id": "geoscience-101-l03-q2",
          "text": "When creating a workflow for an investigation, what is the purpose of establishing checkpoints?",
          "skillId": "geoscience-101-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "To provide regular opportunities to review progress and make adjustments."
            },
            {
              "id": "b",
              "text": "To make the project take longer."
            },
            {
              "id": "c",
              "text": "To ensure no one knows who is responsible for each task."
            },
            {
              "id": "d",
              "text": "To finish the project as quickly as possible without reviewing it."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Checkpoints are crucial for monitoring progress, identifying problems early, and ensuring the investigation is on the right track."
        },
        {
          "id": "geoscience-101-l03-q3",
          "text": "A defensible scientific conclusion requires:",
          "skillId": "geoscience-101-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "A popular opinion"
            },
            {
              "id": "b",
              "text": "Support from measurable data and evidence"
            },
            {
              "id": "c",
              "text": "Ignoring any data that disagrees with your hypothesis"
            },
            {
              "id": "d",
              "text": "A very complicated explanation"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Strong conclusions are always backed by verifiable evidence and data analysis."
        },
        {
          "id": "geoscience-101-l03-q4",
          "text": "What is the primary goal of 'hazard and risk interpretation'?",
          "skillId": "geoscience-101-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "To understand the potential for harm from natural events."
            },
            {
              "id": "b",
              "text": "To prove that natural disasters will never happen."
            },
            {
              "id": "c",
              "text": "To find valuable minerals and resources."
            },
            {
              "id": "d",
              "text": "To study the history of Earth's climate."
            }
          ],
          "correctOptionId": "a",
          "explanation": "This field focuses on evaluating the likelihood and impact of natural hazards to help communities prepare and stay safe."
        }
      ]
    },
    {
      "id": "geoscience-101-l04",
      "title": "Case Study: The San Andreas Fault",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "geoscience-101-l04-a1",
          "type": "image",
          "title": "Case Study Fact Sheet",
          "content": "A one-page summary of the San Andreas Fault, including its location, tectonic setting, history of seismic activity, and associated risks."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-101-l04-c1",
          "kind": "example",
          "title": "Case Context",
          "content": "We'll examine the San Andreas Fault in California, a region facing significant earthquake risk. [Visual: Map of California highlighting the San Andreas Fault line and major cities nearby.] This case requires balancing public safety, economic development, and water resource management, all of which are affected by seismic activity."
        },
        {
          "id": "geoscience-101-l04-c2",
          "kind": "concept",
          "title": "Using a Tradeoff Matrix",
          "content": "When making complex decisions, a tradeoff matrix can help. This tool lets us compare different options (e.g., retrofitting old buildings vs. creating new warning systems) based on criteria like cost, effectiveness, and public impact. [Visual: A simple table with options in rows and criteria in columns, with scores in the cells.] This helps make the decision-making process clear and logical."
        },
        {
          "id": "geoscience-101-l04-c3",
          "kind": "recap",
          "title": "Preparing for Disasters",
          "content": "By studying past earthquakes, we can identify patterns and prepare more effectively for the future. This involves creating emergency response plans and building codes to improve resilience. Learning from past events helps turn reactive recovery into proactive preparation."
        }
      ],
      "flashcards": [
        {
          "id": "geoscience-101-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A tool used to compare different solutions to a problem by scoring them against a set of important criteria."
        },
        {
          "id": "geoscience-101-l04-f2",
          "front": "Seismic Risk",
          "back": "The potential for damage and loss of life resulting from an earthquake in a particular area."
        },
        {
          "id": "geoscience-101-l04-f3",
          "front": "Response Plan",
          "back": "A set of predefined actions to be taken during and after a natural disaster to ensure safety and a timely recovery."
        }
      ]
    },
    {
      "id": "geoscience-101-l05",
      "title": "Earthquake Preparedness Simulation",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "geoscience-101-l05-a1",
          "type": "practice",
          "title": "Simulation Decision Guide",
          "content": "A guide outlining the different intervention options available in the simulation and the metrics used to measure success (e.g., budget, public safety score)."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-101-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation",
          "content": "In this simulation, you are in charge of allocating resources to prepare a city near the San Andreas Fault for an earthquake. You will choose between different strategies, such as strengthening infrastructure, running public education campaigns, or improving emergency services. Your goal is to minimize damage and protect citizens, all while managing a limited budget."
        },
        {
          "id": "geoscience-101-l05-c2",
          "kind": "recap",
          "title": "Debrief",
          "content": "After the simulation, we'll review the results. Did your choices achieve the desired outcomes? Were there any unintended consequences? This reflection is crucial for understanding the complex, real-world impact of geoscience decisions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "geoscience-101-l05-act1",
          "type": "scenario_practice",
          "title": "Earthquake Mitigation Challenge",
          "description": "Choose a set of interventions to prepare a city for a major earthquake and see the outcome.",
          "instructions": [
            "Review your city's budget and risk profile.",
            "Select a combination of infrastructure, education, and response initiatives.",
            "Run the simulation to see how your city fares in an earthquake and analyze the results."
          ]
        }
      ]
    },
    {
      "id": "geoscience-101-l06",
      "title": "Checkpoint 2: Application and Analysis",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "geoscience-101-l06-a1",
          "type": "practice",
          "title": "Review Case Study",
          "content": "Briefly review the San Andreas Fault case study materials before starting the quiz."
        }
      ],
      "questions": [
        {
          "id": "geoscience-101-l06-q1",
          "text": "In the San Andreas Fault case study, what is a primary tradeoff when deciding where to build new infrastructure?",
          "skillId": "geoscience-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The color of the buildings versus their height."
            },
            {
              "id": "b",
              "text": "Economic development versus the higher cost of earthquake-resistant construction."
            },
            {
              "id": "c",
              "text": "The name of the city versus its population."
            },
            {
              "id": "d",
              "text": "Choosing between building on the fault line or far away where there is no land."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Decision-makers must often balance the economic benefits of new development with the increased costs required to ensure buildings are safe in an earthquake zone."
        },
        {
          "id": "geoscience-101-l06-q2",
          "text": "When using a tradeoff matrix to evaluate earthquake preparedness options, which criterion would be most important for public safety?",
          "skillId": "geoscience-101-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Minimizing construction noise"
            },
            {
              "id": "b",
              "text": "The potential to reduce injuries and fatalities"
            },
            {
              "id": "c",
              "text": "How quickly the project can be finished"
            },
            {
              "id": "d",
              "text": "The aesthetic design of new buildings"
            }
          ],
          "correctOptionId": "b",
          "explanation": "While cost and time are important, the primary measure of success for a public safety project is its effectiveness in protecting human lives."
        },
        {
          "id": "geoscience-101-l06-q3",
          "text": "A city decides to invest in an early warning system but not in retrofitting schools. What is a potential unintended consequence?",
          "skillId": "geoscience-101-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "The city will have no earthquakes."
            },
            {
              "id": "b",
              "text": "People are warned of an earthquake but are still in unsafe buildings."
            },
            {
              "id": "c",
              "text": "The early warning system will be too loud."
            },
            {
              "id": "d",
              "text": "All schools will automatically become earthquake-proof."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A defensible plan requires analyzing side effects. An early warning is less effective if the population's shelters and essential buildings remain vulnerable."
        },
        {
          "id": "geoscience-101-l06-q4",
          "text": "Why is studying past failures, like building collapses in previous earthquakes, important for future planning?",
          "skillId": "geoscience-101-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "To assign blame to individuals."
            },
            {
              "id": "b",
              "text": "To understand weaknesses and develop stronger building codes and response plans."
            },
            {
              "id": "c",
              "text": "To prove that all future buildings will be perfectly safe."
            },
            {
              "id": "d",
              "text": "It is not important; every earthquake is completely different."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Analyzing past failures provides critical data for improving engineering and safety protocols, forming the basis of effective disaster mitigation."
        }
      ]
    },
    {
      "id": "geoscience-101-l07",
      "title": "Society and Stewardship",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "geoscience-101-l07-a1",
          "type": "image",
          "title": "Ethical Checklist for Geoscientists",
          "content": "A checklist with questions to consider, such as: Who benefits from this project? Who might be negatively affected? Is the decision-making process transparent?"
        }
      ],
      "chunks": [
        {
          "id": "geoscience-101-l07-c1",
          "kind": "concept",
          "title": "Impact on Communities",
          "content": "Geoscience decisions rarely affect everyone equally. For example, building a dam provides clean energy but may displace communities or affect farmers downstream. [Visual: A map showing a proposed dam, the area to be flooded, the city receiving power, and the river downstream.] We'll learn to map out how benefits and burdens are distributed among different groups."
        },
        {
          "id": "geoscience-101-l07-c2",
          "kind": "concept",
          "title": "Decision-Making and Responsibility",
          "content": "Who makes the final call on large projects, and who is accountable for the outcome? We'll discuss the importance of a transparent process where decisions can be traced back to the evidence used. This includes giving the public the right to review plans and ask questions, which builds trust and leads to better outcomes."
        },
        {
          "id": "geoscience-101-l07-c3",
          "kind": "recap",
          "title": "Ethical Geoscience",
          "content": "Responsible practice combines good science with ethical considerations. This means not only pursuing effective solutions but also ensuring they are fair and accountable. We'll recap with a simple checklist to help evaluate the performance, risk, and ethical impact of any geoscience project."
        }
      ],
      "flashcards": [
        {
          "id": "geoscience-101-l07-f1",
          "front": "Impact Distribution",
          "back": "How the positive and negative effects of a project or decision are spread across different groups of people and the environment."
        },
        {
          "id": "geoscience-101-l07-f2",
          "front": "Decision Traceability",
          "back": "The ability to follow a decision back to its origins, understanding the evidence, reasons, and people behind it."
        },
        {
          "id": "geoscience-101-l07-f3",
          "front": "Stewardship",
          "back": "The responsible planning and management of resources, such as land and water, to ensure their well-being for future generations."
        }
      ]
    },
    {
      "id": "geoscience-101-l08",
      "title": "Capstone Project: Planning Phase",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "geoscience-101-l08-a1",
          "type": "practice",
          "title": "Capstone Project Proposal Template",
          "content": "A structured document to help you outline your capstone project's objective, scope, methods, and success metrics."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-101-l08-c1",
          "kind": "practice",
          "title": "Creating Your Project Plan",
          "content": "In this activity, you will choose a real-world geoscience issue and create a detailed plan for your capstone project. Your plan must include a clear objective, any limitations you might face, and how you will measure your project's success. This is the blueprint for your final project."
        },
        {
          "id": "geoscience-101-l08-c2",
          "kind": "recap",
          "title": "Preparing to Present Your Work",
          "content": "As you finalize your plan, think about how you will defend your choices. Be prepared to answer questions about your methods, the data you plan to use, and the potential impact of your proposed solution. This preparation is key to building a strong, evidence-based project."
        }
      ],
      "interactiveActivities": [
        {
          "id": "geoscience-101-l08-act1",
          "type": "project_builder",
          "title": "Project Plan Builder",
          "description": "Build a capstone project plan with a clear objective and measurable outcomes.",
          "instructions": [
            "Define your project's main goal and what it will and will not cover.",
            "List at least three measurable indicators of success.",
            "Define the criteria for when you would need to seek help or change your plan."
          ]
        }
      ]
    },
    {
      "id": "geoscience-101-l09",
      "title": "Capstone Project: Execution and Presentation",
      "type": "interactive",
      "duration": 25,
      "learningAids": [
        {
          "id": "geoscience-101-l09-a1",
          "type": "rubric",
          "title": "Capstone Grading Rubric",
          "content": "Use this rubric to understand how your project will be evaluated on clarity, evidence, analysis, and presentation."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-101-l09-c1",
          "kind": "practice",
          "title": "Project Execution",
          "content": "Now it's time to bring your plan to life. Using the project plan you developed, you will research your chosen geoscience issue, analyze the data, and develop your proposed solution or analysis. Document your steps and findings carefully as you work."
        },
        {
          "id": "geoscience-101-l09-c2",
          "kind": "practice",
          "title": "Communicating Your Findings",
          "content": "A key scientific skill is sharing your work. Prepare a short presentation or report summarizing your project. Clearly state your research question, your methods, your findings, and your conclusions. Be prepared to explain the tradeoffs of your proposed solution."
        }
      ],
      "interactiveActivities": [
        {
          "id": "geoscience-101-l09-act1",
          "type": "project_submission",
          "title": "Submit Your Capstone Project",
          "description": "Upload your completed project report or presentation slides for review."
        }
      ]
    },
    {
      "id": "geoscience-101-l10",
      "title": "Final Checkpoint: Course Review",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "geoscience-101-l10-a1",
          "type": "review",
          "title": "Course Summary",
          "content": "Review the key concepts from all lessons before taking the final checkpoint."
        }
      ],
      "questions": [
        {
          "id": "geoscience-101-l10-q1",
          "text": "A geoscientist proposes building a seawall to protect a coastal town from erosion. Which of the following represents the most comprehensive analysis of the project?",
          "skillId": "geoscience-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Only calculating the cost of construction."
            },
            {
              "id": "b",
              "text": "Analyzing the wall's effectiveness, cost, and its environmental impact on nearby beaches."
            },
            {
              "id": "c",
              "text": "Asking the town's residents if they like the design of the wall."
            },
            {
              "id": "d",
              "text": "Building the wall as quickly as possible to see what happens."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A comprehensive analysis considers multiple factors, including effectiveness, cost, and unintended consequences (side effects) like environmental impact."
        },
        {
          "id": "geoscience-101-l10-q2",
          "text": "Your capstone project on local water quality reveals a potential source of pollution. What is the most responsible next step?",
          "skillId": "geoscience-101-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Keep the findings to yourself to avoid causing trouble."
            },
            {
              "id": "b",
              "text": "Post the unverified results on social media immediately."
            },
            {
              "id": "c",
              "text": "Double-check your data and methods, then prepare a clear report to share with local environmental authorities."
            },
            {
              "id": "d",
              "text": "Assume your data is wrong and discard the project."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Responsible science involves verifying your findings and communicating them clearly and accurately to the appropriate parties."
        },
        {
          "id": "geoscience-101-l10-q3",
          "text": "Why is 'decision traceability' important in a public geoscience project, like selecting a site for a new landfill?",
          "skillId": "geoscience-101-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "It ensures that no one can ever question the decision."
            },
            {
              "id": "b",
              "text": "It allows the public and other experts to see the evidence and reasoning, ensuring accountability and transparency."
            },
            {
              "id": "c",
              "text": "It helps keep the decision-making process a secret."
            },
            {
              "id": "d",
              "text": "It makes the project more expensive."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Traceability builds public trust by making the decision-making process open to review, showing that it was based on sound evidence and fair evaluation."
        },
        {
          "id": "geoscience-101-l10-q4",
          "text": "Which statement best summarizes the core principles of this Geoscience Foundations course?",
          "skillId": "geoscience-101-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Geoscience is about memorizing the names of rocks."
            },
            {
              "id": "b",
              "text": "The Earth is a static, unchanging planet."
            },
            {
              "id": "c",
              "text": "Understanding Earth requires a systematic, evidence-based approach to analyze processes, risks, and the impact of our decisions."
            },
            {
              "id": "d",
              "text": "All geoscience problems have one simple, correct solution."
            }
          ],
          "correctOptionId": "c",
          "explanation": "The course emphasizes a holistic approach, combining scientific knowledge with systematic analysis, risk evaluation, and ethical considerations."
        }
      ]
    }
  ]
};
