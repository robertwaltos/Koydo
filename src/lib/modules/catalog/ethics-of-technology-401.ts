import type { LearningModule } from "@/lib/modules/types";

export const ethics_of_technology_401_Module: LearningModule = {
  "id": "ethics-of-technology-401",
  "title": "Ethics of Technology Leadership and Capstone",
  "description": "An advanced curriculum on Technology Ethics, focusing on applying ethical frameworks, mitigating societal harms, implementing responsible design, and ensuring robust governance. This module uses case studies, simulations, and a final capstone project to build practical leadership skills.",
  "subject": "Ethics",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "ethics",
    "technology",
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
    "Apply ethical frameworks to technology decisions, clearly stating assumptions and tradeoffs.",
    "Design repeatable workflows to identify and mitigate societal harms under realistic constraints.",
    "Evaluate design decisions by analyzing their intended outcomes and potential side effects.",
    "Develop strong governance and accountability through transparent policies and clear escalation paths.",
    "Communicate complex findings and uncertainties effectively to diverse stakeholder groups.",
    "Produce well-reasoned, defensible recommendations that withstand critical review."
  ],
  "lessons": [
    {
      "id": "ethics-of-technology-401-l01",
      "title": "Core Foundations in Technology Ethics",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "ethics-of-technology-401-l01-a1",
          "type": "image",
          "title": "Guided Notes",
          "content": "Use the provided template to document key concepts, definitions, and examples as you watch the lesson."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-401-l01-c1",
          "kind": "concept",
          "title": "Ethical Frameworks and Societal Impact",
          "content": "In this lesson, we'll establish a shared language for discussing technology ethics. We will explore common ethical frameworks—like utilitarianism, deontology, and virtue ethics—which act as guiding principles for decision-making. We'll then connect these frameworks to the real-world, societal impacts of technology, both positive and negative, to understand the stakes of our work.",
          "visualPrompt": "A diagram showing three pillars labeled 'Utilitarianism,' 'Deontology,' and 'Virtue Ethics' with lines connecting them to a central concept bubble labeled 'Responsible Technology'."
        },
        {
          "id": "ethics-of-technology-401-l01-c2",
          "kind": "concept",
          "title": "Thinking Through Consequences",
          "content": "Effective ethical analysis requires us to think like a detective, tracing the potential cause-and-effect pathways of a technology. We will practice identifying hidden assumptions that could lead to system failures or unintended harm. This skill helps us anticipate problems and choose more robust and thoughtful solutions.",
          "visualPrompt": "An animated flowchart showing a single decision branching into multiple, unforeseen consequences, some positive (green) and some negative (red)."
        },
        {
          "id": "ethics-of-technology-401-l01-c3",
          "kind": "recap",
          "title": "Making Defensible Claims",
          "content": "Throughout this module, every claim you make must be backed by clear evidence and observable data. We will discuss how to acknowledge the limits of our knowledge by defining uncertainty. Finally, we'll introduce the concept of review checkpoints to ensure our analysis is sound, transparent, and accountable.",
          "visualPrompt": "A simple graphic of a scale, with a 'Claim' on one side and 'Evidence' on the other, shown in perfect balance."
        }
      ],
      "flashcards": [
        {
          "id": "ethics-of-technology-401-l01-f1",
          "front": "Ethical Framework",
          "back": "A set of guiding principles, such as utilitarianism or deontology, used to analyze and make decisions about complex moral issues."
        },
        {
          "id": "ethics-of-technology-401-l01-f2",
          "front": "Societal Harm",
          "back": "Negative impacts of technology on individuals, communities, or society as a whole, including issues of fairness, privacy, and safety."
        },
        {
          "id": "ethics-of-technology-401-l01-f3",
          "front": "Responsible Design",
          "back": "An approach to creating technology that proactively considers its ethical implications and potential for societal harm."
        }
      ]
    },
    {
      "id": "ethics-of-technology-401-l02",
      "title": "Responsible Design Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "ethics-of-technology-401-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the interactive tools to build your own workflow. Document your assumptions and justify your design choices."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-401-l02-c1",
          "kind": "practice",
          "title": "Building a Responsible Workflow",
          "content": "In this interactive lab, you will design a practical workflow for a technology project. The goal is to align company policies with day-to-day operations to ensure ethical considerations are embedded from start to finish. You'll build a plan that can withstand uncertainty and prepare you to defend your decisions in a project review.",
          "visualPrompt": "A drag-and-drop interface where learners can place workflow stages like 'Ideation,' 'Risk Assessment,' 'Stakeholder Review,' and 'Launch' into a sequence."
        },
        {
          "id": "ethics-of-technology-401-l02-c2",
          "kind": "recap",
          "title": "Ensuring Accountability",
          "content": "A good workflow is built on clarity and accountability. This involves mapping out who is responsible for each decision (ownership), creating checkpoints to review progress (control gates), and establishing methods to verify that decisions are working as intended after they are made. This structure prevents ambiguity and ensures follow-through.",
          "visualPrompt": "A flowchart with clear icons for 'Owner,' 'Checkpoint,' and 'Verification,' showing a clear path of responsibility."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ethics-of-technology-401-l02-act1",
          "type": "matching_pairs",
          "title": "Matching Actions to Benefits",
          "description": "Match each workflow control to its primary benefit for the system.",
          "pairs": [
            {
              "left": "Pre-launch ethical review",
              "right": "Reduces preventable harm"
            },
            {
              "left": "Automated rollback trigger",
              "right": "Limits damage during failures"
            },
            {
              "left": "Public impact dashboard",
              "right": "Supports transparent, defensible claims"
            },
            {
              "left": "Post-incident review cycle",
              "right": "Improves future decision quality"
            }
          ]
        },
        {
          "id": "ethics-of-technology-401-l02-act2",
          "type": "sorting_buckets",
          "title": "Classifying Project Constraints",
          "description": "Sort these project constraints into the correct categories.",
          "buckets": [
            "Technical",
            "Policy",
            "Societal Impact"
          ],
          "items": [
            {
              "text": "System response time target",
              "bucket": "Technical"
            },
            {
              "text": "Data privacy regulation (GDPR)",
              "bucket": "Policy"
            },
            {
              "text": "Risk of alienating a user community",
              "bucket": "Societal Impact"
            },
            {
              "text": "Public incident disclosure rule",
              "bucket": "Policy"
            }
          ]
        }
      ]
    },
    {
      "id": "ethics-of-technology-401-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "ethics-of-technology-401-l03-a1",
          "type": "practice",
          "title": "Review Your Notes",
          "content": "Before starting the quiz, review the key concepts from the first two lessons to solidify your understanding."
        }
      ],
      "questions": [
        {
          "id": "ethics-of-technology-401-l03-q1",
          "text": "Which action best improves the quality of decisions made using an ethical framework?",
          "skillId": "ethics-of-technology-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Relying on intuition and ignoring formal constraints"
            },
            {
              "id": "b",
              "text": "Defining assumptions, monitoring outcomes, and testing for failure cases"
            },
            {
              "id": "c",
              "text": "Treating all potential outcomes as equally important"
            },
            {
              "id": "d",
              "text": "Ignoring uncertainty to make decisions faster"
            }
          ],
          "correctOptionId": "b",
          "explanation": "High-quality decisions require making assumptions explicit, measuring what happens, and proactively looking for ways your plan could fail."
        },
        {
          "id": "ethics-of-technology-401-l03-q2",
          "text": "This advanced module (401) places the strongest emphasis on:",
          "skillId": "ethics-of-technology-401-skill-level",
          "options": [
            {
              "id": "a",
              "text": "Strategic leadership and aligning policy with real-world operations"
            },
            {
              "id": "b",
              "text": "Rapid execution without review cycles"
            },
            {
              "id": "c",
              "text": "Considering only a single stakeholder's perspective"
            },
            {
              "id": "d",
              "text": "Making claims about impact without baseline data"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The 401 level focuses on strategic leadership, which involves connecting high-level policy to practical operations and being able to defend those connections."
        },
        {
          "id": "ethics-of-technology-401-l03-q3",
          "text": "What is the most effective way to reduce societal harm caused by technology?",
          "skillId": "ethics-of-technology-401-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "Having no clear owner for incident response"
            },
            {
              "id": "b",
              "text": "Establishing clear control points, owner roles, and escalation paths"
            },
            {
              "id": "c",
              "text": "Making undocumented, ad-hoc changes to the system"
            },
            {
              "id": "d",
              "text": "Skipping post-incident reviews to save time"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliability improves when control, ownership, and escalation procedures are explicit and repeatable, ensuring a swift and organized response."
        },
        {
          "id": "ethics-of-technology-401-l03-q4",
          "text": "When evaluating a new feature, which approach is most defensible?",
          "skillId": "ethics-of-technology-401-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Using only anecdotal stories as evidence"
            },
            {
              "id": "b",
              "text": "Comparing its performance to a baseline and monitoring for side effects"
            },
            {
              "id": "c",
              "text": "Removing difficult scenarios from the evaluation"
            },
            {
              "id": "d",
              "text": "Changing the definition of success after seeing the results"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A defensible evaluation requires comparing results against a baseline (what was happening before) and actively looking for unintended consequences."
        },
        {
          "id": "ethics-of-technology-401-l03-q5",
          "text": "A mature governance and accountability model should always include:",
          "skillId": "ethics-of-technology-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "A one-time review with no path for correction"
            },
            {
              "id": "b",
              "text": "Links to policy, measurable thresholds, and clear triggers for action"
            },
            {
              "id": "c",
              "text": "A lack of transparency to avoid stakeholder criticism"
            },
            {
              "id": "d",
              "text": "Unbounded discretion for leaders without any guardrails"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Mature governance connects policy goals to measurable data and includes pre-defined triggers for corrective action when thresholds are crossed."
        }
      ]
    },
    {
      "id": "ethics-of-technology-401-l04",
      "title": "Case Study: The 'Smart City' Dilemma",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "ethics-of-technology-401-l04-a1",
          "type": "mnemonic",
          "title": "The IDEA Framework",
          "content": "When analyzing the case, use IDEA: Identify the issues, Determine the stakeholders, Evaluate your options, Act and assess."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-401-l04-c1",
          "kind": "example",
          "title": "Analyzing the Stakes",
          "content": "In this case study, we'll analyze a proposed 'Smart City' technology that promises to improve traffic flow and public safety. While it offers significant benefits, it also creates risks to fairness, privacy, and personal freedom. Your task is to map out the stakes for different community members, identifying both the obvious benefits and the hidden costs.",
          "visualPrompt": "A split-screen view. On the left, an animation of smooth, futuristic traffic. On the right, a concerned citizen looking at a surveillance camera."
        },
        {
          "id": "ethics-of-technology-401-l04-c2",
          "kind": "concept",
          "title": "Weighing the Tradeoffs",
          "content": "There is no perfect solution. We will construct a 'tradeoff matrix' to systematically compare different policy options. This tool helps us evaluate each option against key criteria like effectiveness, cost, equity, and feasibility. By making these tradeoffs explicit, we can have a more honest and structured debate about the best path forward.",
          "visualPrompt": "An animated construction of a tradeoff matrix table, with rows for 'Option A,' 'Option B,' and columns for 'Effectiveness,' 'Equity,' and 'Feasibility,' being filled in with ratings."
        },
        {
          "id": "ethics-of-technology-401-l04-c3",
          "kind": "recap",
          "title": "Learning from Mistakes",
          "content": "In this recap, we'll examine how to respond when things go wrong. We will learn to identify 'failure patterns'—the warning signs of a problem—and convert them into proactive safeguards. We'll also outline a 'response playbook,' a clear plan for what to do during a crisis, and discuss how to monitor the system to ensure our fixes are working.",
          "visualPrompt": "A simple diagram showing a 'Problem' icon leading to a 'Safeguard' icon, illustrating a proactive fix."
        }
      ],
      "flashcards": [
        {
          "id": "ethics-of-technology-401-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A tool used to compare different options by evaluating them against a shared set of important criteria."
        },
        {
          "id": "ethics-of-technology-401-l04-f2",
          "front": "Failure Pattern",
          "back": "A recurring, observable pattern of events or data that indicates a specific type of risk or system weakness."
        },
        {
          "id": "ethics-of-technology-401-l04-f3",
          "front": "Response Playbook",
          "back": "A documented, step-by-step plan for responding safely and quickly to a crisis or system failure."
        }
      ]
    },
    {
      "id": "ethics-of-technology-401-l05",
      "title": "Leadership Simulation: Product Launch",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "ethics-of-technology-401-l05-a1",
          "type": "practice",
          "title": "Simulation Guide",
          "content": "Before you begin, read the scenario brief. Your goal is to balance competing priorities to achieve a successful and responsible launch."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-401-l05-c1",
          "kind": "practice",
          "title": "Setting Up the Simulation",
          "content": "In this interactive simulation, you are the lead for a new product launch. You will choose which safety and fairness interventions to implement, knowing that each has a cost in time or resources. You will also set your own measurable thresholds for success, defining what a 'responsible launch' looks like before you begin.",
          "visualPrompt": "A dashboard interface with sliders for 'Budget,' 'Timeline,' and 'Safety Features,' requiring the learner to make allocation choices."
        },
        {
          "id": "ethics-of-technology-401-l05-c2",
          "kind": "recap",
          "title": "Analyzing the Results",
          "content": "After each simulation run, we will debrief as a group. You will analyze a results dashboard showing the outcomes of your choices: Did you meet your goals? What were the unintended side effects? Did you comply with your own governance standards? This reflection is key to improving your strategic decision-making.",
          "visualPrompt": "A post-simulation results screen showing metrics like 'Revenue,' 'User Trust,' 'Bugs Reported,' and 'Press Sentiment' with green or red indicators."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ethics-of-technology-401-l05-act1",
          "type": "scenario_practice",
          "title": "Product Launch Decisions",
          "description": "You face three decision points in the product launch. Choose the path that best balances your project goals with your ethical commitments.",
          "instructions": [
            "Define your primary objective and your non-negotiable ethical guardrails before starting.",
            "For each decision, record one short-term and one long-term tradeoff.",
            "Select the key metrics you would monitor after launch to see if your choice was correct."
          ]
        },
        {
          "id": "ethics-of-technology-401-l05-act2",
          "type": "matching_pairs",
          "title": "Matching Risks to Mitigations",
          "description": "Match each project risk with the most effective mitigation strategy.",
          "pairs": [
            {
              "left": "Ambiguous ownership of a key risk",
              "right": "Create a chart of roles and responsibilities"
            },
            {
              "left": "User feedback is unclear or low-quality",
              "right": "Improve the intake form and validation checks"
            },
            {
              "left": "Team is slowly ignoring a key policy",
              "right": "Schedule a review to re-align with documented standards"
            },
            {
              "left": "Negative public reaction to a feature",
              "right": "Increase transparency and open a two-way communication channel"
            }
          ]
        }
      ]
    },
    {
      "id": "ethics-of-technology-401-l06",
      "title": "Checkpoint 2: Application and Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "ethics-of-technology-401-l06-a1",
          "type": "practice",
          "title": "Review Your Work",
          "content": "Think back on the decisions you made in the case study and simulation. How did you handle tradeoffs and unexpected outcomes?"
        }
      ],
      "questions": [
        {
          "id": "ethics-of-technology-401-l06-q1",
          "text": "In a tradeoff matrix for a 'Smart City' project, what is the primary purpose of an 'Equity' criterion?",
          "skillId": "ethics-of-technology-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "To measure the project's profitability"
            },
            {
              "id": "b",
              "text": "To assess how fairly the benefits and burdens are distributed among different groups"
            },
            {
              "id": "c",
              "text": "To determine the technical feasibility of the project"
            },
            {
              "id": "d",
              "text": "To calculate the total number of users the project will serve"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The 'Equity' criterion specifically evaluates fairness, ensuring that one group doesn't receive all the benefits while another bears all the costs or risks."
        },
        {
          "id": "ethics-of-technology-401-l06-q2",
          "text": "During a product launch simulation, you notice a feature is causing harm to a small user group. What is the best immediate action?",
          "skillId": "ethics-of-technology-401-skill-level",
          "options": [
            {
              "id": "a",
              "text": "Ignore the issue since the group is small"
            },
            {
              "id": "b",
              "text": "Activate a pre-planned response to limit the harm, such as disabling the feature"
            },
            {
              "id": "c",
              "text": "Wait for more data before taking any action"
            },
            {
              "id": "d",
              "text": "Publicly deny that the problem exists to protect the company's reputation"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A mature response involves having a plan ready. The first priority is to contain the harm, even if it means temporarily disabling a feature."
        },
        {
          "id": "ethics-of-technology-401-l06-q3",
          "text": "What does a 'failure pattern' in a system, like a recurring type of data breach, indicate?",
          "skillId": "ethics-of-technology-401-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "A one-time, random event that won't happen again"
            },
            {
              "id": "b",
              "text": "A sign of individual employee incompetence"
            },
            {
              "id": "c",
              "text": "A deeper, underlying weakness in the system's design or processes"
            },
            {
              "id": "d",
              "text": "An issue that is too complex to be solved"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A recurring pattern points to a systemic issue, not just a single mistake. It requires a deeper fix in the system's architecture or workflow."
        },
        {
          "id": "ethics-of-technology-401-l06-q4",
          "text": "When communicating a difficult decision to stakeholders, what is the most crucial element?",
          "skillId": "ethics-of-technology-401-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Using complex jargon to sound authoritative"
            },
            {
              "id": "b",
              "text": "Hiding the potential negative consequences"
            },
            {
              "id": "c",
              "text": "Being transparent about the tradeoffs you considered and why you made your choice"
            },
            {
              "id": "d",
              "text": "Insisting that your decision is the only possible option"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Building trust requires transparency. Explaining the 'why' behind a decision, including the tradeoffs, shows respect for stakeholders and makes the decision more defensible."
        },
        {
          "id": "ethics-of-technology-401-l06-q5",
          "text": "The primary goal of a 'response playbook' is to:",
          "skillId": "ethics-of-technology-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Assign blame after an incident occurs"
            },
            {
              "id": "b",
              "text": "Ensure a chaotic and slow response to a crisis"
            },
            {
              "id": "c",
              "text": "Provide a clear, pre-planned set of actions to enable a fast and effective response"
            },
            {
              "id": "d",
              "text": "Document a plan that is never updated or practiced"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A playbook's purpose is to enable a calm, rapid, and coordinated response during a high-stress event by having the steps planned out in advance."
        }
      ]
    },
    {
      "id": "ethics-of-technology-401-l07",
      "title": "Synthesizing Your Framework for the Capstone",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "ethics-of-technology-401-l07-a1",
          "type": "image",
          "title": "Capstone Checklist",
          "content": "As you watch, check off the key components you'll need to include in your final capstone project charter."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-401-l07-c1",
          "kind": "concept",
          "title": "Reviewing the Core Principles",
          "content": "Let's bring everything together. In this lesson, we'll synthesize the core concepts of the module: applying ethical frameworks, identifying societal harms, and building responsible workflows. We will review how these pieces connect to form a comprehensive approach to technology leadership, preparing you for your final capstone project.",
          "visualPrompt": "An animation showing puzzle pieces labeled 'Frameworks,' 'Harms,' and 'Workflows' coming together to form a complete picture labeled 'Ethical Leadership'."
        },
        {
          "id": "ethics-of-technology-401-l07-c2",
          "kind": "concept",
          "title": "Connecting Policy to Practice",
          "content": "A major challenge for leaders is translating high-level principles into concrete actions. We will discuss practical methods for ensuring that your project's goals and daily operations are directly linked to your organization's ethical policies. This includes setting measurable goals, defining clear boundaries, and establishing accountability at every level.",
          "visualPrompt": "A pyramid diagram. The top level is 'Ethical Principles,' the middle is 'Governing Policies,' and the base is 'Daily Operations,' with arrows showing influence flowing downwards."
        },
        {
          "id": "ethics-of-technology-401-l07-c3",
          "kind": "recap",
          "title": "Preparing to Communicate Your Decisions",
          "content": "Your final project will require you to defend your plan. We'll recap best practices for communicating your work to different audiences. This means presenting evidence clearly, explaining tradeoffs honestly, and listening to critical feedback constructively. Strong communication is essential for building trust and ensuring your recommendations are adopted.",
          "visualPrompt": "Icons representing different audiences (a scientist, a CEO, a community member) with speech bubbles showing how the same core message is framed differently for each."
        }
      ],
      "flashcards": [
        {
          "id": "ethics-of-technology-401-l07-f1",
          "front": "Synthesis",
          "back": "The process of combining different concepts and skills into a unified, coherent framework for action."
        },
        {
          "id": "ethics-of-technology-401-l07-f2",
          "front": "Decision Traceability",
          "back": "The ability to explain why a decision was made, by whom, and based on what evidence and principles."
        },
        {
          "id": "ethics-of-technology-401-l07-f3",
          "front": "Stakeholder Communication",
          "back": "The practice of tailoring your message and evidence to effectively inform and engage different audiences."
        }
      ]
    },
    {
      "id": "ethics-of-technology-401-l08",
      "title": "Capstone Project: Building Your Ethics Charter",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "ethics-of-technology-401-l08-a1",
          "type": "practice",
          "title": "Charter Template",
          "content": "Use the provided digital template to structure your capstone project. Fill in each section based on the lab instructions."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-401-l08-c1",
          "kind": "practice",
          "title": "Drafting Your Project Charter",
          "content": "In this final interactive lab, you will create a comprehensive 'Ethics Charter' for a technology project of your choice. This document will define the project's scope and ethical guardrails, identify key risks and mitigation plans, establish metrics for success, and define governance checkpoints to ensure accountability from start to finish.",
          "visualPrompt": "A screen showing a fillable PDF or web form of a 'Project Charter' with sections for 'Objective,' 'Risks,' 'Metrics,' and 'Governance'."
        },
        {
          "id": "ethics-of-technology-401-l08-c2",
          "kind": "recap",
          "title": "Preparing Your Project Defense",
          "content": "Your charter is a living document that you must be prepared to defend. This final segment focuses on anticipating challenges and preparing clear, evidence-based justifications for your decisions. By stress-testing your own plan, you will build a robust and defensible final project that demonstrates your mastery of the course material.",
          "visualPrompt": "A checklist with items like 'Gather Evidence,' 'Anticipate Questions,' 'Practice Justifications,' and 'Final Review'."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ethics-of-technology-401-l08-act1",
          "type": "project_builder",
          "title": "Interactive Charter Builder",
          "description": "Use this tool to build a capstone charter with measurable objectives, risks, and remediation plans for a fictional tech project.",
          "instructions": [
            "State your project's primary objective and its ethical boundaries.",
            "Define at least three measurable indicators for 'responsible success'.",
            "Document a clear escalation path for what happens if a critical failure occurs."
          ]
        },
        {
          "id": "ethics-of-technology-401-l08-act2",
          "type": "debate_simulator",
          "title": "Simulated Review Panel",
          "description": "Defend your charter's approach against critiques from technical, policy, and community stakeholder perspectives.",
          "instructions": [
            "You will receive three critical questions, one from each perspective.",
            "Draft a concise, evidence-based response to each critique.",
            "Your responses will be evaluated for clarity, defensibility, and acknowledgement of tradeoffs."
          ]
        }
      ]
    }
  ]
};
