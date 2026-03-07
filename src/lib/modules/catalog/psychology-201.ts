import type { LearningModule } from "@/lib/modules/types";

export const psychology_201_Module: LearningModule = {
  "id": "psychology-201",
  "title": "Psychology Applied Practice",
  "description": "Explore the practical side of psychology in this hands-on course. You'll learn to analyze cognitive systems, understand learning and development, and apply research methods to solve real-world problems. This module focuses on building skills in designing effective interventions and making high-quality decisions through structured practice.",
  "subject": "Psychology",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "behavioral-science",
    "research"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Build clear mental models to understand how people think, learn, and develop.",
    "Use structured methods to plan, conduct, and review psychological research.",
    "Analyze evidence by considering data, context, and limitations.",
    "Identify common reasons why projects fail and design effective recovery plans.",
    "Explain complex psychological concepts and the pros and cons of different decisions to any audience.",
    "Create reliable systems and workflows for continuous improvement in your psychological practice."
  ],
  "lessons": [
    {
      "id": "psychology-201-l01",
      "title": "Foundations: Core Models for Psychological Analysis",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "psychology-201-l01-a1",
          "type": "image",
          "title": "Core Models Infographic",
          "content": "A visual diagram showing how a clear Scope, Causal Thinking, and strong Evidence form the foundation for sound psychological analysis."
        }
      ],
      "chunks": [
        {
          "id": "psychology-201-l01-c1",
          "kind": "concept",
          "title": "Defining Your Focus: Scope and Vocabulary",
          "content": "To study psychology effectively, we need a shared language and clear boundaries. This section teaches you how to define the scope of your analysis—what you're studying and what you're not. We'll establish a common vocabulary, or set of key terms, so that everyone can communicate their findings clearly. This precision prevents misunderstandings and is the first step toward rigorous analysis and better decision-making."
        },
        {
          "id": "psychology-201-l01-c2",
          "kind": "concept",
          "title": "Thinking in Causes: Models and Constraints",
          "content": "Good psychological practice goes beyond observing what happens to understanding *why* it happens. Here, we'll practice causal thinking by examining the underlying reasons for behaviors and outcomes. You'll learn to map the relationships between different factors and identify constraints—the real-world limits on your options. This approach helps you design interventions that address root causes, not just symptoms, leading to more effective and lasting solutions."
        },
        {
          "id": "psychology-201-l01-c3",
          "kind": "recap",
          "title": "Recap: Evidence and Accountability",
          "content": "In this recap, we'll connect our core models to the principles of evidence and accountability. Using reliable data, keeping clear records of your work, and establishing clear ownership for decisions are essential for trustworthy results. These practices ensure your conclusions are defensible and that you can learn systematically from both successes and failures."
        }
      ],
      "flashcards": [
        {
          "id": "psychology-201-l01-f1",
          "front": "Unit of analysis",
          "back": "The main 'thing' (person, group, behavior, or process) you are studying to make a decision."
        },
        {
          "id": "psychology-201-l01-f2",
          "front": "Constraint mapping",
          "back": "A technique for mapping out the limitations or rules that affect your available choices."
        },
        {
          "id": "psychology-201-l01-f3",
          "front": "Evidence standard",
          "back": "The rule you set for how good your evidence must be before you act on it."
        }
      ]
    },
    {
      "id": "psychology-201-l02",
      "title": "Lab: Building a Psychology Workflow",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "psychology-201-l02-a1",
          "type": "image",
          "title": "Workflow Builder",
          "content": "An interactive diagram where you can drag and drop components like 'Input,' 'Checkpoint,' and 'Output' to build a complete process."
        }
      ],
      "chunks": [
        {
          "id": "psychology-201-l02-c1",
          "kind": "practice",
          "title": "Practice: Building Your Workflow",
          "content": "In this hands-on lab, you'll design a complete workflow for a psychological task. You will define the necessary inputs (the information you start with), create checkpoints to review your progress, specify the final outputs (the results), and plan rollback triggers (what to do if something goes wrong). This exercise makes the abstract process of psychological analysis concrete and repeatable."
        },
        {
          "id": "psychology-201-l02-c2",
          "kind": "recap",
          "title": "Recap: The Importance of Logging Decisions",
          "content": "As we conclude the lab, let's review the critical habit of decision logging. For every choice you make in your workflow, you should document your rationale (why you chose it), the expected outcome, and how you'll verify if it worked. This detailed log is essential for learning from your experience and improving your process over time."
        }
      ],
      "interactiveActivities": [
        {
          "id": "psychology-201-l02-act1",
          "type": "matching_pairs",
          "title": "Workflow Component Match",
          "description": "Match each workflow component to its primary purpose.",
          "pairs": [
            {
              "left": "Input audit",
              "right": "Ensures only good data is used."
            },
            {
              "left": "Checkpoint gate",
              "right": "Prevents errors from moving to the next step."
            },
            {
              "left": "Outcome metric",
              "right": "Checks if you achieved your goal."
            },
            {
              "left": "Retrospective log",
              "right": "Helps improve the process next time."
            }
          ]
        },
        {
          "id": "psychology-201-l02-act2",
          "type": "sorting_buckets",
          "title": "Sorting Risks",
          "description": "Drag each risk into the correct category: Strategic, Operational, or Quality.",
          "buckets": [
            "Strategic",
            "Operational",
            "Quality"
          ],
          "items": [
            {
              "text": "Misaligned goals",
              "bucket": "Strategic"
            },
            {
              "text": "Unclear handoff timing",
              "bucket": "Operational"
            },
            {
              "text": "Inconsistent acceptance criteria",
              "bucket": "Quality"
            },
            {
              "text": "No benchmark baseline",
              "bucket": "Quality"
            }
          ]
        }
      ]
    },
    {
      "id": "psychology-201-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "psychology-201-l03-a1",
          "type": "image",
          "title": "Self-Correction Prompt",
          "content": "Before submitting, reread the question and your answer. Does your reasoning directly address the core concept being tested?"
        }
      ],
      "questions": [
        {
          "id": "psychology-201-l03-q1",
          "text": "What is the best way to improve decisions when analyzing how people think?",
          "skillId": "psychology-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Rely on one unverified example"
            },
            {
              "id": "b",
              "text": "Define criteria, compare alternatives, and test assumptions"
            },
            {
              "id": "c",
              "text": "Skip metrics and move directly to execution"
            },
            {
              "id": "d",
              "text": "Avoid documenting rationale"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Explicit criteria and testable assumptions improve reliability and transferability."
        },
        {
          "id": "psychology-201-l03-q2",
          "text": "When studying development and learning, what is the best sign of a high-quality process?",
          "skillId": "psychology-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Output speed only"
            },
            {
              "id": "b",
              "text": "Traceable steps, checkpoints, and measurable outcomes"
            },
            {
              "id": "c",
              "text": "Unstructured iteration without logs"
            },
            {
              "id": "d",
              "text": "One-time performance anecdotes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Quality processes are observable, repeatable, and measurable."
        },
        {
          "id": "psychology-201-l03-q3",
          "text": "Which of these practices helps produce trustworthy research conclusions?",
          "skillId": "psychology-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Ignore edge cases"
            },
            {
              "id": "b",
              "text": "Use baseline comparisons and failure analysis"
            },
            {
              "id": "c",
              "text": "Change targets after results are known"
            },
            {
              "id": "d",
              "text": "Remove context from findings"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Baselines and failure analysis prevent overclaiming and improve design quality."
        },
        {
          "id": "psychology-201-l03-q4",
          "text": "A good plan for creating a psychological intervention should prioritize:",
          "skillId": "psychology-201-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Focusing on one goal, no matter the negative side effects."
            },
            {
              "id": "b",
              "text": "Balancing good results with managing risks and ensuring long-term success."
            },
            {
              "id": "c",
              "text": "Decisions based only on intuition"
            },
            {
              "id": "d",
              "text": "No post-implementation review"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Balanced scorecards align long-term performance with accountability."
        }
      ]
    },
    {
      "id": "psychology-201-l04",
      "title": "Advanced Tools: Methods, Metrics, and Failure Modes",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "psychology-201-l04-a1",
          "type": "mnemonic",
          "title": "The 3 M's",
          "content": "Remember the '3 M's' of evaluation: choosing the right Methods, tracking the right Metrics, and anticipating potential Mistakes (Failure Modes)."
        }
      ],
      "chunks": [
        {
          "id": "psychology-201-l04-c1",
          "kind": "concept",
          "title": "Choosing the Right Method",
          "content": "How do you choose the best research method? It's a balancing act. You need to consider your constraints (like time and resources), the quality of available information, and the cost of being wrong. In this section, you'll learn to compare different methods, like surveys, experiments, and observations, and justify why one is a better fit for a specific psychological question."
        },
        {
          "id": "psychology-201-l04-c2",
          "kind": "example",
          "title": "Designing Your Metrics",
          "content": "Good metrics tell a story. A strong set of metrics includes leading indicators (which predict future results), lagging indicators (which measure final outcomes), and diagnostic metrics (which help you understand why something is happening). This structure helps you see problems early and respond effectively, rather than waiting for the final results to show that something went wrong."
        },
        {
          "id": "psychology-201-l04-c3",
          "kind": "recap",
          "title": "Recap: Classifying Failures",
          "content": "Not all failures are the same. We can classify them into common categories: data problems, process flaws, execution mistakes, and poor oversight. By understanding the *type* of failure, we can design a targeted fix instead of relying on a generic solution. This recap will give you a framework for diagnosing and learning from errors systematically."
        }
      ],
      "flashcards": [
        {
          "id": "psychology-201-l04-f1",
          "front": "Leading indicator",
          "back": "An early measurement that helps predict a future result."
        },
        {
          "id": "psychology-201-l04-f2",
          "front": "Failure taxonomy",
          "back": "An organized system for categorizing mistakes to find better solutions."
        },
        {
          "id": "psychology-201-l04-f3",
          "front": "Cost of error",
          "back": "The total negative impact (e.g., wasted time, money, or harm) of a bad decision."
        }
      ]
    },
    {
      "id": "psychology-201-l05",
      "title": "Case Study: Improving a Mental Health App",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "psychology-201-l05-a1",
          "type": "image",
          "title": "Case Analysis Framework",
          "content": "Use this four-quadrant grid to organize your notes: 1. Objective, 2. Context & Constraints, 3. Intervention Options, 4. Trade-offs."
        }
      ],
      "chunks": [
        {
          "id": "psychology-201-l05-c1",
          "kind": "practice",
          "title": "Analyzing the Case",
          "content": "In this interactive case study, you'll analyze a scenario about a mental health app that isn't engaging its users. Your task is to break down the problem into its key parts: the main objective (e.g., increase user engagement), the context, the constraints (like budget and time), and the possible intervention options. You'll practice identifying the trade-offs for each option."
        },
        {
          "id": "psychology-201-l05-c2",
          "kind": "recap",
          "title": "Recap: Proposing Your Solution",
          "content": "Based on your analysis, you will now create a structured improvement proposal. Your proposal must include clear success criteria (how you'll know if it worked), an owner for each action item, and a timeline for implementation and review. This exercise simulates how to turn analysis into a concrete, actionable plan."
        }
      ],
      "interactiveActivities": [
        {
          "id": "psychology-201-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "You are the lead psychologist for a mental health app. Choose an intervention to improve user retention, balancing time and quality constraints.",
          "instructions": [
            "Define success criteria before selecting an intervention.",
            "Document one short-term tradeoff and one long-term benefit.",
            "Specify a metric that confirms success in the next cycle."
          ]
        },
        {
          "id": "psychology-201-l05-act2",
          "type": "matching_pairs",
          "title": "Matching Interventions to Outcomes",
          "description": "Connect each proposed intervention with its most likely positive outcome.",
          "pairs": [
            {
              "left": "Tighter intake criteria",
              "right": "Better data and fewer errors later on."
            },
            {
              "left": "Checkpoint automation",
              "right": "Catching problems earlier."
            },
            {
              "left": "Post-run retrospective",
              "right": "Learning from experience to do better next time."
            },
            {
              "left": "Cross-team briefing",
              "right": "Clearer communication between teams."
            }
          ]
        }
      ]
    },
    {
      "id": "psychology-201-l06",
      "title": "Checkpoint 2: Application and Analysis",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "psychology-201-l06-a1",
          "type": "image",
          "title": "Reasoning Checklist",
          "content": "For each question, check your answer against the concepts from Lessons 4 & 5: Method Selection, Metrics, and Failure Analysis."
        }
      ],
      "questions": [
        {
          "id": "psychology-201-l06-q1",
          "text": "You are designing a study on student stress but have a very small budget and limited time. Which method selection principle is most important to consider?",
          "skillId": "psychology-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Choosing the newest, most complex method available"
            },
            {
              "id": "b",
              "text": "Ignoring the limitations and proceeding with an ideal plan"
            },
            {
              "id": "c",
              "text": "Balancing the method's accuracy with practical constraints"
            },
            {
              "id": "d",
              "text": "Only using methods that guarantee a positive result"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Effective method selection requires balancing the ideal scientific approach with real-world constraints like budget, time, and data availability."
        },
        {
          "id": "psychology-201-l06-q2",
          "text": "A team is trying to improve a therapy app. They notice that 'daily user logins' (a leading indicator) are increasing. What does this metric suggest?",
          "skillId": "psychology-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "The app is a confirmed long-term success."
            },
            {
              "id": "b",
              "text": "It's a positive early sign, but they still need to measure long-term outcomes (like 'symptom reduction')."
            },
            {
              "id": "c",
              "text": "The metric is useless and should be ignored."
            },
            {
              "id": "d",
              "text": "The app's design must be perfect."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Leading indicators like engagement provide early signals, but they don't replace the need to measure the ultimate goal or lagging outcome (e.g., therapeutic effectiveness)."
        },
        {
          "id": "psychology-201-l06-q3",
          "text": "A research project fails because the data collected was inconsistent and unreliable. According to a failure taxonomy, what is the most likely category for this failure?",
          "skillId": "psychology-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Execution error"
            },
            {
              "id": "b",
              "text": "Data issue"
            },
            {
              "id": "c",
              "text": "Governance challenge"
            },
            {
              "id": "d",
              "text": "Process problem"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Failures caused by low-quality, inconsistent, or unreliable information fall into the 'data issue' category, which requires fixes like better data validation or collection methods."
        },
        {
          "id": "psychology-201-l06-q4",
          "text": "When proposing an improvement to a psychological system, what is the most critical component to include for accountability?",
          "skillId": "psychology-201-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "A vague goal without a deadline."
            },
            {
              "id": "b",
              "text": "Clear success criteria, assigned owners, and a follow-up timeline."
            },
            {
              "id": "c",
              "text": "A plan that avoids measuring any results."
            },
            {
              "id": "d",
              "text": "An assumption that the first try will be perfect."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A strong improvement proposal ensures accountability by clearly defining what success looks like, who is responsible for each part, and when progress will be reviewed."
        }
      ]
    },
    {
      "id": "psychology-201-l07",
      "title": "Capstone: Design an Intervention",
      "type": "interactive",
      "duration": 25,
      "learningAids": [
        {
          "id": "psychology-201-l07-a1",
          "type": "image",
          "title": "Intervention Design Canvas",
          "content": "A one-page template to guide you through defining the problem, setting goals, choosing methods, and planning your intervention."
        }
      ],
      "chunks": [
        {
          "id": "psychology-201-l07-c1",
          "kind": "practice",
          "title": "Step 1: Define the Problem and Scope",
          "content": "For your capstone project, you will design a small-scale psychological intervention. Start by choosing a common problem, such as procrastination, mild anxiety about public speaking, or unhealthy snacking. Define the specific behavior you want to change (your unit of analysis) and identify the key constraints you might face."
        },
        {
          "id": "psychology-201-l07-c2",
          "kind": "recap",
          "title": "Step 2: Propose and Justify Your Intervention",
          "content": "Now, outline your intervention. What method will you use? What are your leading and lagging metrics for success? What potential failure modes will you watch for? You will submit a short proposal that brings together all the concepts from this course: core models, workflow, methods, metrics, and failure analysis."
        }
      ],
      "interactiveActivities": [
        {
          "id": "psychology-201-l07-act1",
          "type": "scenario_practice",
          "title": "Intervention Builder",
          "description": "Use our guided tool to build your intervention proposal step-by-step.",
          "instructions": [
            "Clearly state the problem you are addressing.",
            "Select a primary intervention strategy (e.g., cognitive behavioral technique, nudge, mindfulness exercise).",
            "Define one leading metric (e.g., daily practice log) and one lagging metric (e.g., self-reported confidence score after 2 weeks).",
            "Identify one potential risk and how you would mitigate it."
          ]
        }
      ]
    }
  ]
};
