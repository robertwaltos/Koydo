import type { LearningModule } from "@/lib/modules/types";

export const space_missions_engineering_101_Module: LearningModule = {
  "id": "space-missions-engineering-101",
  "title": "Space Missions Engineering Foundations",
  "description": "Level 101 curriculum in Space Missions Engineering, focused on mission architecture, systems integration, risk and reliability modeling, and flight operations governance through case analysis, simulation practice, and mastery checkpoints.",
  "subject": "Aerospace Engineering",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "space",
    "engineering"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Apply mission architecture using explicit assumptions and constraints",
    "Design and execute workflows for systems integration with reliable control points",
    "Evaluate risk and reliability modeling decisions using baseline and side-effect analysis",
    "Strengthen flight operations governance with accountable governance mechanisms",
    "Communicate uncertainty and tradeoffs across stakeholder groups",
    "Build defensible recommendations resilient to critical review"
  ],
  "lessons": [
    {
      "id": "space-missions-engineering-101-l01",
      "title": "Space Missions Engineering Core Foundations",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "space-missions-engineering-101-l01-a1",
          "type": "diagram",
          "title": "Mission Architecture Example",
          "content": "A diagram showing the key components of a simple satellite mission: the spacecraft, launch vehicle, ground control, and communication links."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-101-l01-c1",
          "kind": "concept",
          "title": "Scope and Shared Vocabulary",
          "content": "In this lesson, we will dive into the fascinating world of Space Missions Engineering. We will define what this field is all about and introduce key vocabulary. We will also explain how mission architecture (the overall design) and systems integration (how different parts work together) fit together in a real mission. Understanding these concepts is crucial for anyone who dreams of being involved in designing and executing space missions."
        },
        {
          "id": "space-missions-engineering-101-l01-c2",
          "kind": "concept",
          "title": "Cause-and-Effect and Constraints",
          "content": "In this part of the lesson, students will learn how to identify and map out cause-and-effect chains. This means understanding how one decision impacts another and checking our hidden assumptions before deciding on the best actions to take. This skill is crucial for making informed decisions in engineering and problem-solving."
        },
        {
          "id": "space-missions-engineering-101-l01-c3",
          "kind": "recap",
          "title": "Discipline and Evidence",
          "content": "In this recap, we will emphasize the importance of backing up our ideas with real evidence. This means that when we make a claim, we should be able to support it with something that can be seen or measured. We will also discuss the importance of noting any uncertainties and having checkpoints for review to ensure our work is accurate and reliable."
        }
      ],
      "flashcards": [
        {
          "id": "space-missions-engineering-101-l01-f1",
          "front": "Mission Architecture",
          "back": "The overall plan or blueprint for a space mission. It's crucial to clearly state and check all assumptions when designing it."
        },
        {
          "id": "space-missions-engineering-101-l01-f2",
          "front": "Systems Integration",
          "back": "The process of making all the different parts of a spacecraft and mission work together correctly. Good integration is key to a reliable mission."
        },
        {
          "id": "space-missions-engineering-101-l01-f3",
          "front": "Risk and Reliability Modeling",
          "back": "A way to analyze what could go wrong (risks) and how dependable the systems are (reliability). This helps us find potential problems and hidden costs."
        }
      ]
    },
    {
      "id": "space-missions-engineering-101-l02",
      "title": "Space Missions Engineering Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "space-missions-engineering-101-l02-a1",
          "type": "template",
          "title": "Workflow Diagram Template",
          "content": "A blank flowchart template with standard symbols for processes, decisions, and start/end points to help you build your mission workflow."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-101-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction and Test",
          "content": "In this interactive activity, learners will design their own workflow using key terms and concepts from the first lesson. After creating their workflows, students will test them to see how well they hold up when things don't go as planned. This hands-on experience helps connect ideas to practice by highlighting tradeoffs, assumptions, and the need for verification."
        },
        {
          "id": "space-missions-engineering-101-l02-c2",
          "kind": "recap",
          "title": "Control Gates and Readiness",
          "content": "In this recap, we will discuss the importance of readiness in engineering projects. This includes defining who is in charge of each task, setting rules for go/no-go decisions, knowing when to go back to a previous step, and having proof that a step was completed successfully. These elements are crucial for ensuring a project is on track."
        }
      ],
      "interactiveActivities": [
        {
          "id": "space-missions-engineering-101-l02-act1",
          "type": "matching_pairs",
          "title": "Control Mapping",
          "description": "Match controls to their primary purpose.",
          "pairs": [
            {
              "left": "Pre-release gate",
              "right": "Prevents avoidable problems before launch"
            },
            {
              "left": "Rollback threshold",
              "right": "Limits the damage when something goes wrong"
            },
            {
              "left": "Baseline monitor",
              "right": "Helps figure out the root cause of a problem"
            },
            {
              "left": "Retrospective cycle",
              "right": "Helps the team learn from experience"
            }
          ]
        },
        {
          "id": "space-missions-engineering-101-l02-act2",
          "type": "sorting_buckets",
          "title": "Constraint Sorting",
          "description": "Sort constraint types into technical, policy, and stakeholder-impact categories.",
          "buckets": [
            "Technical",
            "Policy",
            "Stakeholder Impact"
          ],
          "items": [
            {
              "text": "Data throughput budget",
              "bucket": "Technical"
            },
            {
              "text": "Rules about how long to keep data",
              "bucket": "Policy"
            },
            {
              "text": "The danger of losing the public's confidence",
              "bucket": "Stakeholder Impact"
            },
            {
              "text": "Requirement to provide audit evidence",
              "bucket": "Policy"
            }
          ]
        }
      ]
    },
    {
      "id": "space-missions-engineering-101-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "space-missions-engineering-101-l03-a1",
          "type": "checklist",
          "title": "Pre-Quiz Review",
          "content": "Review key terms: Mission Architecture, Systems Integration, Control Gates, and Constraints. Remember to show your reasoning."
        }
      ],
      "questions": [
        {
          "id": "space-missions-engineering-101-l03-q1",
          "text": "What is the best way to make good decisions when designing a mission's architecture?",
          "skillId": "space-missions-engineering-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Rely on assumptions that are never tested"
            },
            {
              "id": "b",
              "text": "Define constraints, test for potential failures, and monitor key indicators"
            },
            {
              "id": "c",
              "text": "Treat all situations as if they are identical"
            },
            {
              "id": "d",
              "text": "Avoid analyzing any uncertainties"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliable decisions require clear constraints, testing for failures, and measuring key signals."
        },
        {
          "id": "space-missions-engineering-101-l03-q2",
          "text": "A beginner-level course in this subject should focus on:",
          "skillId": "space-missions-engineering-101-skill-level",
          "options": [
            {
              "id": "a",
              "text": "foundational vocabulary, understanding key concepts, and interpreting basic scenarios"
            },
            {
              "id": "b",
              "text": "working as fast as possible without review"
            },
            {
              "id": "c",
              "text": "having no baselines or controls"
            },
            {
              "id": "d",
              "text": "making decisions from a single perspective"
            }
          ],
          "correctOptionId": "a",
          "explanation": "This level is structured around foundational vocabulary, understanding key concepts, and interpreting basic scenarios."
        },
        {
          "id": "space-missions-engineering-101-l03-q3",
          "text": "What is the most effective way to make sure all systems work together reliably?",
          "skillId": "space-missions-engineering-101-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "Workflows with no clear owner or plan for problems"
            },
            {
              "id": "b",
              "text": "Control checkpoints, clear ownership, and defined response plans"
            },
            {
              "id": "c",
              "text": "Making changes without tracking them"
            },
            {
              "id": "d",
              "text": "Never reviewing incidents or problems"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliability depends on clear controls, owners, and planned responses to problems."
        },
        {
          "id": "space-missions-engineering-101-l03-q4",
          "text": "When analyzing risk and reliability, which of these methods is the most sound?",
          "skillId": "space-missions-engineering-101-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Use only stories of success as evidence"
            },
            {
              "id": "b",
              "text": "Compare results against a baseline and check for unintended side effects"
            },
            {
              "id": "c",
              "text": "Ignore scenarios that are difficult to analyze"
            },
            {
              "id": "d",
              "text": "Change the success criteria after seeing the results"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Comparing to a baseline and checking for side effects prevents biased or incomplete conclusions."
        },
        {
          "id": "space-missions-engineering-101-l03-q5",
          "text": "What are the key parts of a good system for managing flight operations?",
          "skillId": "space-missions-engineering-101-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Rules that are not connected to any measurements"
            },
            {
              "id": "b",
              "text": "Clear rules, measurable limits, and pathways to correct problems"
            },
            {
              "id": "c",
              "text": "No obligation to be transparent"
            },
            {
              "id": "d",
              "text": "No expectation to fix issues"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Good governance connects intention (rules), measurement (limits), and corrective action."
        }
      ]
    },
    {
      "id": "space-missions-engineering-101-l04",
      "title": "Space Missions Engineering Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "space-missions-engineering-101-l04-a1",
          "type": "infographic",
          "title": "Tradeoff Matrix Example",
          "content": "An infographic showing a sample tradeoff matrix comparing three different rocket engines based on cost, thrust, reliability, and development time."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-101-l04-c1",
          "kind": "example",
          "title": "Case Context and Decision Stakes",
          "content": "In this case analysis, we will explore a space mission with several stages that faces important challenges, including limits on payload, specific launch windows, and in-flight risks. Students will practice identifying high-impact risks and navigating the conflicting requirements that engineers must balance. This analysis connects foundational ideas to real-world decisions and encourages critical thinking."
        },
        {
          "id": "space-missions-engineering-101-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix",
          "content": "In this section, we will introduce the tradeoff matrix. This tool helps us compare different solutions to a problem by scoring them based on their effectiveness, reliability, fairness, and how practical they are to carry out. Understanding how to use a tradeoff matrix is essential for making informed decisions in engineering."
        },
        {
          "id": "space-missions-engineering-101-l04-c3",
          "kind": "recap",
          "title": "Learning from Failure",
          "content": "In this recap, we will discuss how to learn from failures. We will explore how to use past mistakes to build new safety measures, create pre-planned responses for future incidents, and implement monitoring updates to improve our processes. This approach helps ensure that we continuously learn and adapt in our engineering practices."
        }
      ],
      "flashcards": [
        {
          "id": "space-missions-engineering-101-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A chart used to compare different options by scoring them against important criteria, like cost, safety, and performance."
        },
        {
          "id": "space-missions-engineering-101-l04-f2",
          "front": "Failure Pattern",
          "back": "A type of problem that happens over and over. Identifying these helps in creating specific solutions to prevent them."
        },
        {
          "id": "space-missions-engineering-101-l04-f3",
          "front": "Response Playbook",
          "back": "A step-by-step guide prepared in advance to handle specific problems quickly and safely."
        }
      ]
    },
    {
      "id": "space-missions-engineering-101-l05",
      "title": "Space Missions Engineering Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "space-missions-engineering-101-l05-a1",
          "type": "screenshot",
          "title": "Simulation Dashboard",
          "content": "A screenshot of a mission simulation interface, showing adjustable parameters for payload weight, launch window, and engine thrust, with output graphs for trajectory and fuel consumption."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-101-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this interactive practice, learners will set up their own simulation scenarios. This includes setting up different solutions to test, adding variables for what could go wrong, and defining what a successful outcome looks like. This activity will allow students to apply their knowledge in a practical way and see how different factors can influence outcomes."
        },
        {
          "id": "space-missions-engineering-101-l05-c2",
          "kind": "recap",
          "title": "Simulation Debrief",
          "content": "In this recap, we will review the results after running our simulations. This will involve evaluating the outcomes, looking for unexpected negative outcomes, and checking if our solutions follow the mission's rules and limits. This process is important for understanding the implications of our decisions and ensuring responsible engineering practices."
        }
      ],
      "interactiveActivities": [
        {
          "id": "space-missions-engineering-101-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Evaluate three strategies and justify which best advances mission architecture and flight operations governance.",
          "instructions": [
            "Define your objective and safety limits before selecting a strategy.",
            "Record the short-term and long-term tradeoffs for each option.",
            "Select metrics to confirm success and triggers for escalating a problem."
          ]
        },
        {
          "id": "space-missions-engineering-101-l05-act2",
          "type": "matching_pairs",
          "title": "Mitigation Alignment",
          "description": "Match risk conditions to the strongest mitigation responses.",
          "pairs": [
            {
              "left": "Unclear who is in charge",
              "right": "Create a clear chart of roles and who to contact for help"
            },
            {
              "left": "Unreliable data from sensors",
              "right": "Improve data checks and sensor monitoring"
            },
            {
              "left": "Rules are no longer being followed",
              "right": "Review and enforce the original standards"
            },
            {
              "left": "Key groups disagree with the plan",
              "right": "Share more information and create ways for people to give input"
            }
          ]
        }
      ]
    },
    {
      "id": "space-missions-engineering-101-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "space-missions-engineering-101-l06-a1",
          "type": "checklist",
          "title": "Pre-Quiz Review",
          "content": "Review key concepts: Tradeoff Matrix, Failure Patterns, Simulation, and Mitigation. Remember to justify your choices."
        }
      ],
      "questions": [
        {
          "id": "space-missions-engineering-101-l06-q1",
          "text": "When using a tradeoff matrix to choose a component, what is the most important first step?",
          "skillId": "space-missions-engineering-101-skill-tradeoff",
          "options": [
            {
              "id": "a",
              "text": "Pick the cheapest option available"
            },
            {
              "id": "b",
              "text": "Define the evaluation criteria and their relative importance (e.g., safety, cost)"
            },
            {
              "id": "c",
              "text": "Build a prototype of the component immediately"
            },
            {
              "id": "d",
              "text": "Ask one senior engineer for their opinion"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix is only useful if you first define what you are measuring and how important each criterion is."
        },
        {
          "id": "space-missions-engineering-101-l06-q2",
          "text": "A mission experiences the same type of sensor failure on three separate occasions. This is best described as a:",
          "skillId": "space-missions-engineering-101-skill-failure-analysis",
          "options": [
            {
              "id": "a",
              "text": "Random event"
            },
            {
              "id": "b",
              "text": "Response playbook"
            },
            {
              "id": "c",
              "text": "Failure pattern"
            },
            {
              "id": "d",
              "text": "Tradeoff matrix"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A recurring problem with a similar signature is a failure pattern, which can be analyzed to find a root cause."
        },
        {
          "id": "space-missions-engineering-101-l06-q3",
          "text": "What is the primary purpose of running a mission simulation?",
          "skillId": "space-missions-engineering-101-skill-simulation",
          "options": [
            {
              "id": "a",
              "text": "To guarantee 100% mission success"
            },
            {
              "id": "b",
              "text": "To test how a plan performs under various conditions and uncertainties"
            },
            {
              "id": "c",
              "text": "To build the final flight hardware"
            },
            {
              "id": "d",
              "text": "To write the official press release for the mission"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Simulations are for exploring possibilities and testing the resilience of a plan against potential problems and uncertainties."
        },
        {
          "id": "space-missions-engineering-101-l06-q4",
          "text": "If a simulation shows a high risk of overheating during atmospheric re-entry, what would be a strong mitigation response?",
          "skillId": "space-missions-engineering-101-skill-mitigation",
          "options": [
            {
              "id": "a",
              "text": "Ignore the risk because it is just a simulation"
            },
            {
              "id": "b",
              "text": "Increase transparency with stakeholders about the mission"
            },
            {
              "id": "c",
              "text": "Investigate redesigning the heat shield or adjusting the re-entry angle"
            },
            {
              "id": "d",
              "text": "Define a new metric for what counts as a success"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Mitigation involves taking concrete steps to reduce a specific, identified risk. Redesigning the relevant component is a direct mitigation."
        },
        {
          "id": "space-missions-engineering-101-l06-q5",
          "text": "In a case analysis of a past mission failure, what is the most constructive goal?",
          "skillId": "space-missions-engineering-101-skill-case-analysis",
          "options": [
            {
              "id": "a",
              "text": "To assign blame to a single person or team"
            },
            {
              "id": "b",
              "text": "To understand the root causes to prevent similar failures in the future"
            },
            {
              "id": "c",
              "text": "To prove that the original plan was perfect and the failure was a fluke"
            },
            {
              "id": "d",
              "text": "To justify reducing the budget for all future missions"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The goal of analyzing past failures is to learn from them and improve the reliability and safety of future missions."
        }
      ]
    },
    {
      "id": "space-missions-engineering-101-l07",
      "title": "Space Missions Engineering Policy and Ethics Integration",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "space-missions-engineering-101-l07-a1",
          "type": "infographic",
          "title": "Stakeholder Map",
          "content": "An infographic showing the different stakeholders in a Mars rover mission, including scientists, engineers, the government, the public, and international partners, and their primary interests."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-101-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Mapping",
          "content": "In this lesson, learners will examine how the good and bad outcomes of a project affect different groups of people over time. This understanding is crucial for ensuring that all voices are heard and considered in the decision-making process, promoting fairness and equity in engineering."
        },
        {
          "id": "space-missions-engineering-101-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "In this section, we will discuss accountability in engineering. This includes understanding how to track who made a decision and why, people's right to question a decision, and the duty to fix problems that arise. Establishing a strong accountability framework is essential for ethical engineering practices."
        },
        {
          "id": "space-missions-engineering-101-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "At the end of our lesson, we will use a checklist that brings together the technical plan with rules, ethics, and stakeholder trust. This checklist will help ensure that we are not only achieving our technical goals but also acting responsibly and ethically in our work."
        }
      ],
      "flashcards": [
        {
          "id": "space-missions-engineering-101-l07-f1",
          "front": "Impact Distribution",
          "back": "The way a mission's positive and negative effects are shared among different groups of people, both now and in the future."
        },
        {
          "id": "space-missions-engineering-101-l07-f2",
          "front": "Decision Traceability",
          "back": "A clear record that shows who made a key decision, when, and based on what information."
        },
        {
          "id": "space-missions-engineering-101-l07-f3",
          "front": "Responsible Execution",
          "back": "Carrying out a mission in a way that is not only successful but also fair, ethical, and follows all the rules."
        }
      ]
    },
    {
      "id": "space-missions-engineering-101-l08",
      "title": "Space Missions Engineering Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "space-missions-engineering-101-l08-a1",
          "type": "template",
          "title": "Capstone Charter Template",
          "content": "A document template for the Capstone Charter with sections for Mission Statement, Key Objectives, Constraints, Success Metrics, and Governance Plan."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-101-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter",
          "content": "In this interactive activity, you will create a detailed capstone charter. This will include your main objectives, any constraints you might face, the metrics you will use to measure success, and the key checkpoints for approving each stage of your project. This is an important step in planning your capstone project effectively."
        },
        {
          "id": "space-missions-engineering-101-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "As part of our recap, you will prepare solid arguments to defend your project choices against potential critiques regarding your technical decisions, policy choices, and the viewpoints of different groups involved. This preparation will help you articulate your ideas clearly and confidently."
        }
      ],
      "interactiveActivities": [
        {
          "id": "space-missions-engineering-101-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with objectives, metrics, risks, and remediation pathways.",
          "instructions": [
            "Define your main objective and boundary conditions.",
            "List at least three measurable success indicators.",
            "Define criteria for escalating a problem and taking corrective action."
          ]
        },
        {
          "id": "space-missions-engineering-101-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Panel",
          "description": "Defend your capstone decisions against technical, policy, and stakeholder objections."
        }
      ]
    }
  ]
};
