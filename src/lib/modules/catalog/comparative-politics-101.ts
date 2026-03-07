import type { LearningModule } from "@/lib/modules/types";

export const comparative_politics_101_Module: LearningModule = {
  "id": "comparative-politics-101",
  "title": "Comparative Politics Foundations",
  "description": "Level 101 curriculum in Comparative Politics, centered on institutional system comparison, state-society dynamics, policy implementation variation, and democratic and accountability governance through case analysis, simulation, and checkpoint-driven mastery.",
  "subject": "Social Studies",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "politics",
    "governance"
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
    "Explain and apply institutional system comparison under practical constraints",
    "Build repeatable workflows for state-society dynamics with measurable controls",
    "Evaluate interventions in policy implementation variation using comparative evidence",
    "Operationalize democratic and accountability governance with transparent governance loops",
    "Communicate uncertainty, risk, and tradeoffs clearly to mixed stakeholders",
    "Defend decisions through evidence-backed reasoning and post-run review"
  ],
  "lessons": [
    {
      "id": "comparative-politics-101-l01",
      "title": "Comparative Politics Core Models",
      "type": "video",
      "duration": 13,
      "lessonImagePrompt": "A split-screen illustration showing a bustling parliament building on one side and a diverse group of citizens engaging in a town hall on the other, vibrant colors, digital art style.",
      "conceptVideoPrompt": "A dynamic animated infographic showing gears connecting a government building to a crowd of people, symbolizing state-society dynamics, smooth transitions, cinematic lighting, 4k.",
      "learningAids": [
        {
          "id": "comparative-politics-101-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Remember: Always define your terms and assumptions before comparing systems to avoid false equivalencies."
        }
      ],
      "chunks": [
        {
          "id": "comparative-politics-101-l01-c1",
          "kind": "concept",
          "title": "Scope and Vocabulary",
          "content": "Welcome to Comparative Politics! In this lesson, we will learn the foundational vocabulary used to study and compare different political systems. We will explore the boundaries of what we can accurately compare across nations and examine how societies interact with their governments. Mastering these terms is your first step toward analyzing global political events with clarity and precision."
        },
        {
          "id": "comparative-politics-101-l01-c2",
          "kind": "concept",
          "title": "Causal Reasoning",
          "content": "Politics is rarely random. Here, we will explore how to identify the hidden connections between political events and policy decisions. You will learn to map out cause-and-effect relationships, recognize your own biases and assumptions, and understand the real-world limitations leaders face when designing solutions to complex societal issues."
        },
        {
          "id": "comparative-politics-101-l01-c3",
          "kind": "recap",
          "title": "Evidence Standards",
          "content": "Strong political analysis requires more than just opinions; it requires solid evidence. We will emphasize the importance of backing up claims using measurable indicators. You will learn how to gauge the reliability of your data and establish checkpoints to review your findings, ensuring your conclusions are both defensible and objective."
        }
      ],
      "flashcards": [
        {
          "id": "comparative-politics-101-l01-f1",
          "front": "Institutional system comparison",
          "back": "A core decision lens in Comparative Politics requiring explicit assumption control to evaluate different governments."
        },
        {
          "id": "comparative-politics-101-l01-f2",
          "front": "State-society dynamics",
          "back": "The ongoing interactions and power balances between a government and its citizens."
        },
        {
          "id": "comparative-politics-101-l01-f3",
          "front": "Policy implementation variation",
          "back": "The study of why the same policy can have drastically different outcomes depending on where and how it is executed."
        }
      ]
    },
    {
      "id": "comparative-politics-101-l02",
      "title": "Comparative Politics Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "A top-down view of a collaborative workspace with maps, sticky notes, and flowcharts connecting different political institutions, modern flat design.",
      "conceptVideoPrompt": "A time-lapse style animation of a flowchart building itself, connecting policy ideas to execution steps with glowing nodes, high-tech aesthetic, 4k.",
      "learningAids": [
        {
          "id": "comparative-politics-101-l02-a1",
          "type": "practice",
          "title": "Workflow Strategy",
          "content": "Map out the 'Who, What, and When' before executing any political workflow to ensure accountability."
        }
      ],
      "chunks": [
        {
          "id": "comparative-politics-101-l02-c1",
          "kind": "practice",
          "title": "Workflow Build",
          "content": "It is time to put theory into practice. In this interactive activity, you will design a governance workflow. You will map out who is responsible for specific tasks, establish control points to monitor progress, and define clear, measurable outcomes. This hands-on experience mirrors how policy analysts organize and manage real-world political projects."
        },
        {
          "id": "comparative-politics-101-l02-c2",
          "kind": "recap",
          "title": "Readiness and Rollback",
          "content": "No system is perfect. We must discuss how to stress-test our workflows for potential failures. You will learn how to identify the warning signs that a policy is failing and understand when to trigger a 'rollback' to a previous, stable state. This is crucial for maintaining stability during political crises."
        }
      ],
      "interactiveActivities": [
        {
          "id": "comparative-politics-101-l02-act1",
          "type": "matching_pairs",
          "title": "Control Mapping",
          "description": "Match each control mechanism to its strongest reliability or governance effect.",
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
      ],
      "imageUrl": "/generated-images/refinery/comparative-politics-101-l02.png"
    },
    {
      "id": "comparative-politics-101-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A stylized glowing checkpoint gate on a pathway made of books and documents, symbolizing a knowledge check in political science, 3d render.",
      "conceptVideoPrompt": "A fast-paced montage of political science concepts like voting boxes, gavels, and data charts coming together into a glowing checkmark, 4k.",
      "learningAids": [
        {
          "id": "comparative-politics-101-l03-a1",
          "type": "practice",
          "title": "Quiz Prep",
          "content": "Review your notes on causal reasoning and control mapping before starting this checkpoint."
        }
      ],
      "questions": [
        {
          "id": "comparative-politics-101-l03-q1",
          "text": "Which practice most improves decision quality in institutional system comparison?",
          "skillId": "comparative-politics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Relying on implicit assumptions without a baseline"
            },
            {
              "id": "b",
              "text": "Defining assumptions, constraints, and measurable indicators explicitly"
            },
            {
              "id": "c",
              "text": "Prioritizing speed of execution over evidence gathering"
            },
            {
              "id": "d",
              "text": "Ignoring uncertainty and edge cases to simplify the model"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Decision quality improves significantly when assumptions, constraints, and measurement criteria are made explicit and transparent."
        },
        {
          "id": "comparative-politics-101-l03-q2",
          "text": "High-quality execution in state-society dynamics requires which of the following?",
          "skillId": "comparative-politics-101-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Owner mapping, checkpoints, and escalation thresholds"
            },
            {
              "id": "b",
              "text": "Fluid role clarity to encourage ad-hoc decisions"
            },
            {
              "id": "c",
              "text": "Skipping post-implementation reviews to save time"
            },
            {
              "id": "d",
              "text": "Allowing untracked process changes for flexibility"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable execution needs clear ownership and threshold-driven control points to ensure accountability."
        },
        {
          "id": "comparative-politics-101-l03-q3",
          "text": "A defensible approach to evaluating policy implementation variation requires:",
          "skillId": "comparative-politics-101-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Highlighting anecdotal wins without broader comparison"
            },
            {
              "id": "b",
              "text": "Baseline comparison and rigorous side-effect analysis"
            },
            {
              "id": "c",
              "text": "Adjusting success criteria after seeing the final results"
            },
            {
              "id": "d",
              "text": "Excluding difficult or outlier cases from the data"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Using a baseline for comparison and analyzing side-effects prevents biased conclusions and reveals the true impact of a policy."
        },
        {
          "id": "comparative-politics-101-l03-q4",
          "text": "Mature democratic and accountability governance systems successfully connect:",
          "skillId": "comparative-politics-101-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Policy intent, measurable controls, and remediation pathways"
            },
            {
              "id": "b",
              "text": "Broad policy statements without strict accountability measures"
            },
            {
              "id": "c",
              "text": "High performance targets with no underlying risk controls"
            },
            {
              "id": "d",
              "text": "Strict governance rules with no public transparency"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Effective governance links the original intent of a policy to measurable controls and clear pathways for corrective action if things go wrong."
        }
      ],
      "imageUrl": "/generated-images/refinery/comparative-politics-101-l03.png"
    },
    {
      "id": "comparative-politics-101-l04",
      "title": "Comparative Politics Case Analysis",
      "type": "video",
      "duration": 14,
      "lessonImagePrompt": "A split screen showing three different countries' responses to a natural disaster, highlighting different political strategies, detailed digital illustration.",
      "conceptVideoPrompt": "An animated map of the world where different regions light up with data points and graphs, comparing policy outcomes, cinematic camera pan, 4k.",
      "learningAids": [
        {
          "id": "comparative-politics-101-l04-a1",
          "type": "mnemonic",
          "title": "Tradeoff Matrix Mnemonic",
          "content": "Remember E.F.R.I. when evaluating options: Effectiveness, Feasibility, Risks, and Impacts."
        }
      ],
      "chunks": [
        {
          "id": "comparative-politics-101-l04-c1",
          "kind": "example",
          "title": "Case Context",
          "content": "In this case study, we will explore how various countries tackle a shared global crisis, such as a pandemic or economic crash. Because each country has a unique political system, their responses will vary wildly. We will examine factors like government legitimacy and enforcement capability. By analyzing these diverse responses, you will gain a deeper understanding of the complexities involved in international political decision-making."
        },
        {
          "id": "comparative-politics-101-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix",
          "content": "Every political decision involves sacrifice. Here, we introduce the tradeoff matrix—a tool used to evaluate different policy options based on their effectiveness, feasibility, associated risks, and impacts on various stakeholders. This scoring system will help you make informed, objective decisions when comparing competing political strategies."
        },
        {
          "id": "comparative-politics-101-l04-c3",
          "kind": "recap",
          "title": "Recovery Design",
          "content": "How do governments bounce back from bad decisions? We will focus on turning patterns of failure into protective measures. By learning from historical policy mistakes, we can create 'response playbooks' that guide leaders to act more effectively and safely during future challenges."
        }
      ],
      "flashcards": [
        {
          "id": "comparative-politics-101-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A structured method to compare policy options under competing priorities and constraints."
        },
        {
          "id": "comparative-politics-101-l04-f2",
          "front": "Failure pattern",
          "back": "A recurring signal or sequence of events indicating a predictable risk mode in governance."
        },
        {
          "id": "comparative-politics-101-l04-f3",
          "front": "Response playbook",
          "back": "A predefined action pathway designed for safe and timely recovery from a policy failure."
        }
      ],
      "imageUrl": "/generated-images/refinery/comparative-politics-101-l04.png"
    },
    {
      "id": "comparative-politics-101-l05",
      "title": "Comparative Politics Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "lessonImagePrompt": "A futuristic control room with holographic displays showing different political scenarios and outcome metrics, sci-fi aesthetic.",
      "conceptVideoPrompt": "A first-person view of interacting with a glowing digital dashboard, adjusting sliders for 'policy strictness' and 'public trust', watching real-time graphs change, 4k.",
      "learningAids": [
        {
          "id": "comparative-politics-101-l05-a1",
          "type": "practice",
          "title": "Simulation Tip",
          "content": "Change only one variable at a time during your simulation to accurately measure its specific impact."
        }
      ],
      "chunks": [
        {
          "id": "comparative-politics-101-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation",
          "content": "Step into the role of a policymaker. In this interactive simulation, you will run various intervention scenarios while navigating real-world uncertainty. You will adjust variables, implement policies, and compare the outcomes to understand the cascading impacts of your political decisions. Pay close attention to the tradeoffs you are forced to make."
        },
        {
          "id": "comparative-politics-101-l05-c2",
          "kind": "recap",
          "title": "Debrief",
          "content": "A simulation is only as good as the lessons drawn from it. In this debriefing session, we will evaluate your simulation runs. Did you achieve your primary goals? What unintended side effects occurred? How well did you adhere to democratic governance standards? This reflection is vital for translating simulated practice into real-world analytical skills."
        }
      ],
      "interactiveActivities": [
        {
          "id": "comparative-politics-101-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Compare intervention paths for institutional system comparison and democratic accountability.",
          "instructions": [
            "Define your objective and constraints before selecting an intervention.",
            "Document both near-term and long-term tradeoffs.",
            "Specify the metrics that will validate your chosen path."
          ]
        }
      ],
      "imageUrl": "/generated-images/refinery/comparative-politics-101-l05.png"
    },
    {
      "id": "comparative-politics-101-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A glowing scale of justice balancing a policy document and a bag of coins, representing tradeoffs, 3d render.",
      "conceptVideoPrompt": "A dynamic animation of a decision tree branching out into different political outcomes, with red and green paths highlighting successes and failures, 4k.",
      "learningAids": [
        {
          "id": "comparative-politics-101-l06-a1",
          "type": "practice",
          "title": "Strategic Thinking",
          "content": "Think about the unintended consequences of policy decisions and how to measure them when answering."
        }
      ],
      "questions": [
        {
          "id": "comparative-politics-101-l06-q1",
          "text": "What is the primary purpose of using a tradeoff matrix in comparative politics?",
          "skillId": "comparative-politics-101-skill-tradeoffs",
          "options": [
            {
              "id": "a",
              "text": "To guarantee that a policy will have zero negative side effects"
            },
            {
              "id": "b",
              "text": "To systematically evaluate competing options based on effectiveness, risks, and impacts"
            },
            {
              "id": "c",
              "text": "To bypass public opinion and fast-track executive decisions"
            },
            {
              "id": "d",
              "text": "To obscure the true cost of a policy from stakeholders"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix provides a structured, objective way to compare options when faced with competing priorities and limited resources."
        },
        {
          "id": "comparative-politics-101-l06-q2",
          "text": "Why is identifying a 'failure pattern' critical in policy design?",
          "skillId": "comparative-politics-101-skill-analysis",
          "options": [
            {
              "id": "a",
              "text": "It allows policymakers to assign blame to previous administrations"
            },
            {
              "id": "b",
              "text": "It ensures that the same policy can be repeated without changes"
            },
            {
              "id": "c",
              "text": "It acts as a recurring signal that helps predict and mitigate future risks"
            },
            {
              "id": "d",
              "text": "It justifies the immediate defunding of public institutions"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Recognizing failure patterns allows governments to proactively design protective measures and response playbooks."
        },
        {
          "id": "comparative-politics-101-l06-q3",
          "text": "During a policy simulation, what is the most effective way to understand the impact of a specific intervention?",
          "skillId": "comparative-politics-101-skill-simulation",
          "options": [
            {
              "id": "a",
              "text": "Change multiple variables at once to see the maximum effect"
            },
            {
              "id": "b",
              "text": "Ignore long-term tradeoffs and focus only on immediate wins"
            },
            {
              "id": "c",
              "text": "Define constraints beforehand and isolate variables to measure specific outcomes"
            },
            {
              "id": "d",
              "text": "Rely entirely on intuition rather than predefined metrics"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Isolating variables and defining constraints allows for accurate measurement of an intervention's true impact."
        },
        {
          "id": "comparative-politics-101-l06-q4",
          "text": "What is the most important outcome of a post-simulation debrief?",
          "skillId": "comparative-politics-101-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Evaluating goal achievement, unintended side effects, and governance adherence"
            },
            {
              "id": "b",
              "text": "Deleting the simulation data to start fresh"
            },
            {
              "id": "c",
              "text": "Declaring a definitive 'winner' among the simulated countries"
            },
            {
              "id": "d",
              "text": "Rewriting the initial goals to match the final outcomes"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A proper debrief reflects on successes, failures, and ethical adherence to improve future real-world decision-making."
        }
      ],
      "imageUrl": "/generated-images/refinery/comparative-politics-101-l06.png"
    },
    {
      "id": "comparative-politics-101-l07",
      "title": "Comparative Politics Governance and Impact",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "An abstract illustration of a diverse group of citizens connected by glowing lines to a central government hub, emphasizing accountability and impact, vibrant.",
      "conceptVideoPrompt": "A visual metaphor of a ripple effect in a pond, transitioning into a map showing how a single policy decision impacts different communities, smooth animation, 4k.",
      "learningAids": [
        {
          "id": "comparative-politics-101-l07-a1",
          "type": "image",
          "title": "Traceability Rule",
          "content": "Accountability requires traceability: Always ask who made the decision, and based on what evidence?"
        }
      ],
      "chunks": [
        {
          "id": "comparative-politics-101-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact",
          "content": "Policies do not affect everyone equally. In this lesson, you will learn how to map the distribution of benefits and burdens among different societal groups. Understanding who gains and who loses from a political decision is essential for evaluating the fairness and long-term viability of a policy."
        },
        {
          "id": "comparative-politics-101-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Trust in government relies on accountability. We will explore how to build systems where decisions can be traced back to their origins. You will learn about the rights of citizens to review government actions and the ethical responsibilities that leaders hold. This architecture is the backbone of a healthy democracy."
        },
        {
          "id": "comparative-politics-101-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution",
          "content": "Execution is not just about getting things done; it is about getting them done right. We will introduce a responsible execution checklist to ensure that performance, risk management, and ethical impacts are all balanced. This ensures that our political solutions are not only effective but also just."
        }
      ],
      "flashcards": [
        {
          "id": "comparative-politics-101-l07-f1",
          "front": "Impact distribution",
          "back": "The analysis of how policy outcomes, both positive and negative, are allocated across different populations."
        },
        {
          "id": "comparative-politics-101-l07-f2",
          "front": "Decision traceability",
          "back": "An auditable trail that explains the evidence, ownership, and rationale behind a political choice."
        },
        {
          "id": "comparative-politics-101-l07-f3",
          "front": "Responsible execution",
          "back": "A delivery method that balances policy effectiveness with strict accountability and fairness."
        }
      ],
      "imageUrl": "/generated-images/refinery/comparative-politics-101-l07.png"
    },
    {
      "id": "comparative-politics-101-l08",
      "title": "Comparative Politics Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "A blueprint of a government building overlaid with project management timelines and success metrics, architectural drawing style.",
      "conceptVideoPrompt": "A cinematic zoom-out from a single policy document to a grand, functioning city, symbolizing the successful planning and execution of a capstone project, 4k.",
      "learningAids": [
        {
          "id": "comparative-politics-101-l08-a1",
          "type": "practice",
          "title": "Capstone Constitution",
          "content": "A strong capstone charter acts as your project's constitution—refer back to it often to stay on track."
        }
      ],
      "chunks": [
        {
          "id": "comparative-politics-101-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter",
          "content": "It is time to synthesize everything you have learned. In this activity, you will draft a comprehensive charter for your final capstone project. You must define clear objectives, outline operational constraints, establish measurable success indicators, and set governance triggers. This charter will serve as your roadmap for the final assessment."
        },
        {
          "id": "comparative-politics-101-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "A great policy is useless if you cannot defend it. As you finalize your capstone, you must prepare to justify your decisions. We will practice responding to critiques regarding your technical choices, tradeoff evaluations, and governance standards. This preparation ensures you can confidently present evidence-backed reasoning to any stakeholder."
        }
      ],
      "interactiveActivities": [
        {
          "id": "comparative-politics-101-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with measurable outcomes and remediation pathways.",
          "instructions": [
            "Define your core objective and operating boundaries.",
            "List at least three measurable success indicators.",
            "Define escalation and corrective-action criteria for potential failures."
          ]
        }
      ],
      "imageUrl": "/generated-images/refinery/comparative-politics-101-l08.png"
    }
  ]
};
