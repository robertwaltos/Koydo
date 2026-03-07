import type { LearningModule } from "@/lib/modules/types";

export const sports_science_201_Module: LearningModule = {
  "id": "sports-science-201",
  "title": "Sports Science: Applied Practice",
  "description": "A Level 201 curriculum in Sports Science focused on performance physiology, training periodization, biomechanics, and injury prevention. Learn through case studies, simulations, and practical application.",
  "subject": "Health Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "sports",
    "human-performance"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Apply principles of performance physiology, clearly stating assumptions and limitations.",
    "Design and implement training periodization plans with effective checkpoints.",
    "Evaluate biomechanics and movement using baseline data and side-effect analysis.",
    "Develop robust injury prevention strategies with clear accountability.",
    "Communicate complex findings and tradeoffs to different audiences.",
    "Build defensible recommendations that can withstand critical review."
  ],
  "lessons": [
    {
      "id": "sports-science-201-l01",
      "title": "Core Foundations of Sports Science",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "sports-science-201-l01-a1",
          "type": "image",
          "title": "The Body's Energy Systems",
          "content": "A diagram illustrating the three main energy systems (ATP-PC, Glycolytic, and Oxidative) and the types of activities they fuel."
        }
      ],
      "chunks": [
        {
          "id": "sports-science-201-l01-c1",
          "kind": "concept",
          "title": "Scope and Shared Vocabulary",
          "content": "In this lesson, we'll explore the exciting field of Sports Science. We will define its scope, introduce key terms, and discuss how the body's physiology and training schedules work together to improve athletic performance. Understanding these fundamentals is essential for anyone interested in sports and health."
        },
        {
          "id": "sports-science-201-l01-c2",
          "kind": "concept",
          "title": "Cause, Effect, and Constraints",
          "content": "Here, you will learn to map out how different factors influence athletic performance. We will also practice identifying and questioning hidden assumptions before making decisions. This critical thinking process is vital for making informed choices in sports science."
        },
        {
          "id": "sports-science-201-l01-c3",
          "kind": "recap",
          "title": "Discipline of Evidence",
          "content": "In this recap, we emphasize that all claims in sports science must be backed by observable evidence. We will also discuss the importance of acknowledging uncertainties and using review checkpoints to ensure our findings are accurate and reliable."
        }
      ],
      "flashcards": [
        {
          "id": "sports-science-201-l01-f1",
          "front": "Performance Physiology",
          "back": "The study of how the body functions and responds to exercise and training."
        },
        {
          "id": "sports-science-201-l01-f2",
          "front": "Training Periodization",
          "back": "The strategic planning of training into cycles or phases to optimize performance for key events."
        },
        {
          "id": "sports-science-201-l01-f3",
          "front": "Biomechanics",
          "back": "The study of the mechanics of a living body, especially the forces exerted by muscles and gravity on the skeletal structure."
        }
      ]
    },
    {
      "id": "sports-science-201-l02",
      "title": "Sports Science Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "sports-science-201-l02-a1",
          "type": "image",
          "title": "Periodization Flowchart",
          "content": "A visual flowchart showing a sample annual training plan, broken down into macrocycles, mesocycles, and microcycles."
        }
      ],
      "chunks": [
        {
          "id": "sports-science-201-l02-c1",
          "kind": "practice",
          "title": "Building and Testing a Workflow",
          "content": "In this interactive activity, you will design your own training workflow. You'll focus on effective methods, disciplined execution, and evidence-based reasoning. Then, you'll test your workflow's reliability, especially when faced with unexpected challenges. This hands-on experience is crucial for developing practical skills."
        },
        {
          "id": "sports-science-201-l02-c2",
          "kind": "recap",
          "title": "Checkpoints and Readiness",
          "content": "In this recap, we will discuss the concept of 'readiness' in a workflow. This involves mapping out responsibilities, setting clear criteria for checkpoints, defining when to pause or 'roll back' a plan, and identifying signals that confirm you're on track."
        }
      ],
      "interactiveActivities": [
        {
          "id": "sports-science-201-l02-act1",
          "type": "matching_pairs",
          "title": "Control Mapping",
          "description": "Match each control measure to its primary benefit for a training program.",
          "pairs": [
            {
              "left": "Pre-season fitness test",
              "right": "Reduces preventable early-season injuries"
            },
            {
              "left": "Mid-cycle performance review",
              "right": "Allows for timely adjustments to the plan"
            },
            {
              "left": "Athlete wellness monitoring",
              "right": "Helps identify overtraining before it becomes a problem"
            },
            {
              "left": "Post-season retrospective",
              "right": "Improves the quality of next season's plan"
            }
          ]
        },
        {
          "id": "sports-science-201-l02-act2",
          "type": "sorting_buckets",
          "title": "Constraint Sorting",
          "description": "Sort these factors that can limit a training plan into the correct categories.",
          "buckets": [
            "Athlete-Specific",
            "Logistical",
            "Regulatory"
          ],
          "items": [
            {
              "text": "Athlete's injury history",
              "bucket": "Athlete-Specific"
            },
            {
              "text": "Available gym hours",
              "bucket": "Logistical"
            },
            {
              "text": "Rules on practice time limits",
              "bucket": "Regulatory"
            },
            {
              "text": "Team travel schedule",
              "bucket": "Logistical"
            }
          ]
        }
      ]
    },
    {
      "id": "sports-science-201-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "sports-science-201-l03-a1",
          "type": "document",
          "title": "Key Concepts Review Sheet",
          "content": "A one-page summary of the key terms and concepts from Lessons 1 and 2."
        }
      ],
      "questions": [
        {
          "id": "sports-science-201-l03-q1",
          "text": "Which approach most improves decisions in performance physiology?",
          "skillId": "sports-science-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Relying on untested assumptions"
            },
            {
              "id": "b",
              "text": "Defining constraints, testing for potential problems, and monitoring key indicators"
            },
            {
              "id": "c",
              "text": "Treating all athletes and situations as identical"
            },
            {
              "id": "d",
              "text": "Avoiding any analysis of uncertainty"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliable decisions require understanding limitations, anticipating problems, and tracking measurable signals."
        },
        {
          "id": "sports-science-201-l03-q2",
          "text": "This intermediate course level should emphasize:",
          "skillId": "sports-science-201-skill-level",
          "options": [
            {
              "id": "a",
              "text": "Method execution, workflow discipline, and evidence-based reasoning"
            },
            {
              "id": "b",
              "text": "Speed of execution without any review"
            },
            {
              "id": "c",
              "text": "Ignoring baselines or control groups"
            },
            {
              "id": "d",
              "text": "Making decisions from a single perspective"
            }
          ],
          "correctOptionId": "a",
          "explanation": "This level is structured around applying methods correctly, maintaining a disciplined process, and using evidence to make decisions."
        },
        {
          "id": "sports-science-201-l03-q3",
          "text": "What best strengthens the reliability of a training periodization plan?",
          "skillId": "sports-science-201-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "Unclear responsibilities and escalation paths"
            },
            {
              "id": "b",
              "text": "Scheduled checkpoints, clear ownership, and defined response thresholds"
            },
            {
              "id": "c",
              "text": "Making changes to the plan without tracking them"
            },
            {
              "id": "d",
              "text": "Never reviewing incidents or problems"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliability depends on having clear controls, owners, and pre-defined triggers for action."
        },
        {
          "id": "sports-science-201-l03-q4",
          "text": "For biomechanics and movement analysis, which practice is most defensible?",
          "skillId": "sports-science-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Using only anecdotal success stories as evidence"
            },
            {
              "id": "b",
              "text": "Comparing against a baseline and checking for negative side-effects"
            },
            {
              "id": "c",
              "text": "Ignoring scenarios where the technique doesn't work"
            },
            {
              "id": "d",
              "text": "Adjusting the success criteria after seeing the results"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Comparing to a baseline and checking for side-effects prevents biased or incomplete conclusions."
        },
        {
          "id": "sports-science-201-l03-q5",
          "text": "A mature injury prevention model should include:",
          "skillId": "sports-science-201-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "A policy that is disconnected from any measurement"
            },
            {
              "id": "b",
              "text": "Links between policy, measurable thresholds, and clear corrective actions"
            },
            {
              "id": "c",
              "text": "No obligation to be transparent about risks"
            },
            {
              "id": "d",
              "text": "No expectation to fix identified problems"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A strong governance model connects goals, measurement, and a clear process for responding to issues."
        }
      ]
    },
    {
      "id": "sports-science-201-l04",
      "title": "Case Analysis: High-Performance Training",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "sports-science-201-l04-a1",
          "type": "image",
          "title": "Sample Tradeoff Matrix",
          "content": "A visual table comparing three different recovery methods (e.g., ice bath, massage, active recovery) across criteria like cost, time, effectiveness, and accessibility."
        }
      ],
      "chunks": [
        {
          "id": "sports-science-201-l04-c1",
          "kind": "example",
          "title": "Case Context and Decision Stakes",
          "content": "In this case analysis, we will examine a high-performance training program. Your task is to map out the significant risks to the athletes (like injury or burnout) and the constraints the coaches must navigate (like budget or schedule). This exercise will deepen your understanding of the challenges in creating effective and safe training programs."
        },
        {
          "id": "sports-science-201-l04-c2",
          "kind": "concept",
          "title": "The Tradeoff Matrix",
          "content": "We will introduce the tradeoff matrix, a tool for evaluating different options. Each option will be scored on criteria like effectiveness, reliability, and feasibility. This scoring system helps you practice making structured, informed choices when selecting interventions in sports science."
        },
        {
          "id": "sports-science-201-l04-c3",
          "kind": "recap",
          "title": "Learning from Failure",
          "content": "In this recap, we will learn how to turn failures into valuable lessons. This involves creating safeguards, developing response plans (or 'playbooks'), and updating monitoring systems. By doing so, we can be better prepared for future challenges and continuously improve our practices."
        }
      ],
      "flashcards": [
        {
          "id": "sports-science-201-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured tool for comparing different options against a set of key criteria."
        },
        {
          "id": "sports-science-201-l04-f2",
          "front": "Failure Pattern",
          "back": "A recurring type of problem that can be analyzed to design targeted solutions."
        },
        {
          "id": "sports-science-201-l04-f3",
          "front": "Response Playbook",
          "back": "A pre-defined set of actions to take in response to a specific problem, ensuring a quick and safe recovery."
        }
      ]
    },
    {
      "id": "sports-science-201-l05",
      "title": "Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "sports-science-201-l05-a1",
          "type": "image",
          "title": "Simulation Interface",
          "content": "A screenshot of a mock dashboard where a user can adjust training variables (e.g., intensity, volume) and see the simulated impact on performance and injury risk."
        }
      ],
      "chunks": [
        {
          "id": "sports-science-201-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this interactive practice, you will set up your own simulation. You will choose different training interventions, define uncertainty parameters (like how an athlete might respond), and establish measurable success thresholds. This will help you understand how to use simulations to test ideas in sports science."
        },
        {
          "id": "sports-science-201-l05-c2",
          "kind": "recap",
          "title": "Simulation Debrief",
          "content": "After running the simulation, we will conduct a debrief. This review will evaluate the outcomes, identify any unintended side effects, and check how well the results align with safety and ethical constraints. This process is essential for understanding the full implications of our decisions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "sports-science-201-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Evaluate three training strategies for a marathon runner. Justify which one best balances performance goals with injury prevention.",
          "instructions": [
            "Define the primary objective and the non-negotiable safety limits.",
            "Record the potential short-term and long-term tradeoffs for each strategy.",
            "Select the key metrics you will use to confirm success and the triggers for stopping the intervention."
          ]
        },
        {
          "id": "sports-science-201-l05-act2",
          "type": "matching_pairs",
          "title": "Risk and Mitigation",
          "description": "Match the identified risk to the most effective mitigation strategy.",
          "pairs": [
            {
              "left": "Ambiguous coaching responsibilities",
              "right": "Create a clear role chart with decision-making authority"
            },
            {
              "left": "Unreliable athlete feedback",
              "right": "Implement standardized daily wellness surveys"
            },
            {
              "left": "Training plan becomes outdated",
              "right": "Schedule regular reviews to adapt the plan"
            },
            {
              "left": "Athlete resistance to a new method",
              "right": "Improve communication and provide educational sessions"
            }
          ]
        }
      ]
    },
    {
      "id": "sports-science-201-l06",
      "title": "Checkpoint 2: Application and Analysis",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "sports-science-201-l06-a1",
          "type": "document",
          "title": "Case Study and Simulation Review",
          "content": "A one-page summary of the key methods from Lessons 4 and 5, including the tradeoff matrix and simulation debrief process."
        }
      ],
      "questions": [
        {
          "id": "sports-science-201-l06-q1",
          "text": "When analyzing a case study of an athlete's training program, what is the most important first step?",
          "skillId": "sports-science-201-skill-case-analysis",
          "options": [
            {
              "id": "a",
              "text": "Immediately suggest a new technology"
            },
            {
              "id": "b",
              "text": "Identify key risks, constraints, and performance goals"
            },
            {
              "id": "c",
              "text": "Copy a plan from a famous athlete"
            },
            {
              "id": "d",
              "text": "Focus only on the athlete's diet"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A thorough analysis starts with understanding the full context, including risks, goals, and limitations."
        },
        {
          "id": "sports-science-201-l06-q2",
          "text": "A tradeoff matrix is used in a case analysis to:",
          "skillId": "sports-science-201-skill-tradeoffs",
          "options": [
            {
              "id": "a",
              "text": "Prove one option is perfect in every way"
            },
            {
              "id": "b",
              "text": "Systematically compare different strategies across multiple criteria like cost, effectiveness, and risk"
            },
            {
              "id": "c",
              "text": "Confuse the stakeholders with too much data"
            },
            {
              "id": "d",
              "text": "Choose the option with the most exciting name"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix provides a structured way to evaluate competing options against a consistent set of important factors."
        },
        {
          "id": "sports-science-201-l06-q3",
          "text": "What is the main purpose of creating a 'response playbook' after analyzing a training failure?",
          "skillId": "sports-science-201-skill-failure-learning",
          "options": [
            {
              "id": "a",
              "text": "To assign blame to a single person"
            },
            {
              "id": "b",
              "text": "To ensure the same mistake is never discussed again"
            },
            {
              "id": "c",
              "text": "To have a pre-planned, effective procedure to handle similar issues in the future"
            },
            {
              "id": "d",
              "text": "To create more paperwork for the coaching staff"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Response playbooks are proactive tools designed to improve future outcomes by learning from past failures."
        },
        {
          "id": "sports-science-201-l06-q4",
          "text": "When setting up an intervention simulation, why is it important to define 'measurable success thresholds'?",
          "skillId": "sports-science-201-skill-simulation-setup",
          "options": [
            {
              "id": "a",
              "text": "To make the simulation harder to complete"
            },
            {
              "id": "b",
              "text": "To ensure the simulation always produces a positive result"
            },
            {
              "id": "c",
              "text": "Success thresholds are not important in simulations"
            },
            {
              "id": "d",
              "text": "To have clear, objective criteria for judging if the simulated intervention was successful"
            }
          ],
          "correctOptionId": "d",
          "explanation": "Clear success metrics are essential for objectively evaluating the outcome of a simulation and making evidence-based decisions."
        },
        {
          "id": "sports-science-201-l06-q5",
          "text": "During a simulation debrief, what does checking for 'side effects' mean?",
          "skillId": "sports-science-201-skill-simulation-debrief",
          "options": [
            {
              "id": "a",
              "text": "Looking only for additional, unplanned positive outcomes"
            },
            {
              "id": "b",
              "text": "Ignoring any negative results from the simulation"
            },
            {
              "id": "c",
              "text": "Identifying unintended negative consequences of the intervention"
            },
            {
              "id": "d",
              "text": "Verifying that the simulation software is working correctly"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A responsible debrief includes looking for both the intended effects and any unintended negative side effects to get a complete picture of an intervention's impact."
        }
      ]
    },
    {
      "id": "sports-science-201-l07",
      "title": "Integrating Policy and Ethics",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "sports-science-201-l07-a1",
          "type": "image",
          "title": "Stakeholder Map",
          "content": "An infographic showing the central athlete surrounded by connected stakeholders like coaches, family, teammates, medical staff, and governing bodies."
        }
      ],
      "chunks": [
        {
          "id": "sports-science-201-l07-c1",
          "kind": "concept",
          "title": "Mapping Stakeholder Impact",
          "content": "In this lesson, you will examine how the benefits and burdens of sports science practices are distributed among different groups (stakeholders). We will consider how these impacts change over time, helping you understand the broader implications of your work."
        },
        {
          "id": "sports-science-201-l07-c2",
          "kind": "concept",
          "title": "Framework for Accountability",
          "content": "Here, we will explore accountability in sports science. This includes traceability (being able to track why a decision was made), the right to review, and the responsibility to correct problems. This framework highlights the importance of ethical practices in your work."
        },
        {
          "id": "sports-science-201-l07-c3",
          "kind": "recap",
          "title": "Responsible Practice Checklist",
          "content": "To conclude, we will create a checklist that connects performance with rules, ethics, and stakeholder trust. This checklist will guide you in making responsible choices that respect both the sport and the people involved."
        }
      ],
      "flashcards": [
        {
          "id": "sports-science-201-l07-f1",
          "front": "Impact Distribution",
          "back": "How the outcomes (both positive and negative) of a decision affect different groups over time."
        },
        {
          "id": "sports-science-201-l07-f2",
          "front": "Decision Traceability",
          "back": "The evidence chain showing how and why a decision was made, who was involved, and what information was used."
        },
        {
          "id": "sports-science-201-l07-f3",
          "front": "Responsible Practice",
          "back": "Conducting work in a way that balances effectiveness with ethical guidelines and safety."
        }
      ]
    },
    {
      "id": "sports-science-201-l08",
      "title": "Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "sports-science-201-l08-a1",
          "type": "image",
          "title": "Capstone Charter Template",
          "content": "A visual template of a project charter with sections for Objective, Key Metrics, Risks, and Stakeholders."
        }
      ],
      "chunks": [
        {
          "id": "sports-science-201-l08-c1",
          "kind": "practice",
          "title": "The Capstone Charter",
          "content": "In this activity, you will create a 'capstone charter' for a final project. This document will outline your main goal, potential challenges, how you will measure success, and the steps you will take to ensure your project is managed responsibly. This is an opportunity to apply everything you've learned."
        },
        {
          "id": "sports-science-201-l08-c2",
          "kind": "recap",
          "title": "Preparing Your Defense",
          "content": "As part of your planning, you will gather evidence to support your project proposal. This means anticipating questions about your technical choices, your ethical considerations, and the impact on different stakeholders. Being prepared with solid reasoning will help you present your project confidently."
        }
      ],
      "interactiveActivities": [
        {
          "id": "sports-science-201-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with objectives, metrics, risks, and response plans.",
          "instructions": [
            "Define a clear objective and the project's boundaries.",
            "List at least three measurable success indicators.",
            "Define criteria for escalating a problem and for taking corrective action."
          ]
        },
        {
          "id": "sports-science-201-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Panel",
          "description": "Defend your capstone project decisions against critical questions from a simulated panel of experts.",
          "instructions": [
            "Receive a challenge related to your project's technical approach.",
            "Receive a challenge related to your project's ethical implications.",
            "Receive a challenge related to stakeholder concerns."
          ]
        }
      ]
    }
  ]
};
