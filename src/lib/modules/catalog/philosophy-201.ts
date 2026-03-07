import type { LearningModule } from "@/lib/modules/types";

export const philosophy_201_Module: LearningModule = {
  "id": "philosophy-201",
  "title": "Philosophy Applied Practice",
  "description": "A level 201 curriculum in Philosophy, emphasizing argument structure, epistemology, ethics, and politics. This course focuses on applied reasoning and improving real-world decision quality through structured practice and assessment.",
  "subject": "Humanities",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "critical-thinking",
    "ethics"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Develop rigorous mental models for argument structure and knowledge evaluation.",
    "Apply structured methods to plan, execute, and review tasks in ethics and politics.",
    "Interpret evidence using metrics, constraints, and context.",
    "Diagnose common types of errors and design effective recovery actions.",
    "Communicate complex ideas and trade-offs clearly to various audiences.",
    "Build repeatable systems for sustained improvement in philosophical reasoning."
  ],
  "lessons": [
    {
      "id": "philosophy-201-l01",
      "title": "Core Models for Philosophical Inquiry",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "philosophy-201-l01-a1",
          "type": "image",
          "title": "Scope Diagram",
          "content": "Visualize a Venn diagram showing what is 'In Scope,' 'Out of Scope,' and 'Related but Excluded' for a given philosophical problem."
        }
      ],
      "chunks": [
        {
          "id": "philosophy-201-l01-c1",
          "kind": "concept",
          "title": "Defining Your Terms and Scope",
          "content": "In any philosophical discussion, clarity is key. We will learn to define the boundaries of our inquiry by specifying what topics we are focusing on. This includes identifying the 'unit of analysis'—the specific thing we are examining—and agreeing on a shared vocabulary. This ensures our arguments are consistent and can be fairly compared, preventing people from talking past one another.",
          "whyThisMatters": "Without a clear scope and shared definitions, arguments can become confusing and unproductive. This skill helps you build a solid foundation for any debate or analysis."
        },
        {
          "id": "philosophy-201-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Constraints",
          "content": "To think deeply, we must understand the root causes of events, not just their effects. This involves questioning our own assumptions, identifying dependencies, and recognizing the limitations or 'constraints' we are working within. By focusing on the 'why' behind an issue, we can develop more effective and lasting solutions instead of just addressing superficial symptoms.",
          "whyThisMatters": "Causal thinking moves you from simply describing a problem to truly understanding it, which is the first step toward solving it effectively.",
          "stepByStepApproach": [
            "1. State the problem or question clearly.",
            "2. Ask 'Why?' multiple times to trace the chain of causes backward.",
            "3. Identify the root cause(s) that, if addressed, would prevent the problem.",
            "4. List the constraints (e.g., time, resources, rules) that limit your possible solutions."
          ]
        },
        {
          "id": "philosophy-201-l01-c3",
          "kind": "recap",
          "title": "Evidence and Accountability",
          "content": "Strong arguments are built on solid evidence. In this section, we'll cover the importance of setting standards for the evidence you collect, keeping clear records of your reasoning, and establishing accountability. These practices ensure that our philosophical work is reliable, trustworthy, and open to constructive review. This discipline strengthens our arguments and deepens our understanding.",
          "whyThisMatters": "Evidence separates a well-reasoned argument from a mere opinion. Accountability ensures intellectual honesty and continuous improvement in your thinking process."
        }
      ],
      "flashcards": [
        {
          "id": "philosophy-201-l01-f1",
          "front": "Unit of Analysis",
          "back": "The primary object, entity, or process you are studying to make a well-supported decision."
        },
        {
          "id": "philosophy-201-l01-f2",
          "front": "Constraint Mapping",
          "back": "The process of identifying the boundaries, rules, or limitations that shape your available options."
        },
        {
          "id": "philosophy-201-l01-f3",
          "front": "Evidence Standard",
          "back": "A pre-defined rule for the minimum quality or amount of data required before you can confidently draw a conclusion."
        }
      ]
    },
    {
      "id": "philosophy-201-l02",
      "title": "Philosophy Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "philosophy-201-l02-a1",
          "type": "practice",
          "title": "Workflow Blueprint",
          "content": "Use a flowchart template to map out the steps of a philosophical argument, from initial question to final conclusion."
        }
      ],
      "chunks": [
        {
          "id": "philosophy-201-l02-c1",
          "kind": "practice",
          "title": "Constructing a Reasoning Workflow",
          "content": "In this activity, you will design a step-by-step process for analyzing an argument. This workflow will include defining your necessary inputs (like facts and principles), setting up review checkpoints to assess your progress, defining your desired outputs (like a conclusion or decision), and identifying criteria for when to go back and revise an earlier step. This helps make your reasoning systematic and repeatable."
        },
        {
          "id": "philosophy-201-l02-c2",
          "kind": "recap",
          "title": "The Importance of a Decision Log",
          "content": "We will review the practice of logging your key decisions as you work through a problem. For each major decision, you should note your reasoning, what you expect to happen as a result, and how you will verify if you were right. This habit allows you to review your thought process later, helping you learn from both your successes and mistakes."
        }
      ],
      "interactiveActivities": [
        {
          "id": "philosophy-201-l02-act1",
          "type": "matching_pairs",
          "title": "Workflow Component Match",
          "description": "Match each workflow component to its primary function.",
          "pairs": [
            {
              "left": "Checking Your Sources",
              "right": "Prevents low-quality information from weakening your argument"
            },
            {
              "left": "Mid-Point Review",
              "right": "Stops you from continuing down a flawed path"
            },
            {
              "left": "Measuring Success",
              "right": "Confirms whether you achieved your original goal"
            },
            {
              "left": "Post-Argument Reflection",
              "right": "Captures lessons to improve your process next time"
            }
          ]
        },
        {
          "id": "philosophy-201-l02-act2",
          "type": "sorting_buckets",
          "title": "Risk Classification",
          "description": "Sort each potential problem into its correct risk category.",
          "buckets": [
            "Strategic",
            "Operational",
            "Quality"
          ],
          "items": [
            {
              "text": "Arguing about the wrong question",
              "bucket": "Strategic"
            },
            {
              "text": "Unclear steps in the process",
              "bucket": "Operational"
            },
            {
              "text": "Inconsistent standards for evidence",
              "bucket": "Quality"
            },
            {
              "text": "No baseline for comparison",
              "bucket": "Quality"
            }
          ]
        }
      ]
    },
    {
      "id": "philosophy-201-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "philosophy-201-l03-a1",
          "type": "practice",
          "title": "Justify Your Answer",
          "content": "Before selecting an option, write one sentence explaining why you believe it is the correct choice."
        }
      ],
      "questions": [
        {
          "id": "philosophy-201-l03-q1",
          "text": "Which action best improves the quality of a philosophical argument?",
          "skillId": "argument-structure",
          "options": [
            {
              "id": "a",
              "text": "Rely on a single, unverified example"
            },
            {
              "id": "b",
              "text": "Define clear criteria, compare alternatives, and test assumptions"
            },
            {
              "id": "c",
              "text": "Focus only on evidence that supports your initial belief"
            },
            {
              "id": "d",
              "text": "Avoid documenting your reasoning to save time"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defining criteria, comparing options, and testing assumptions are core practices for building a reliable and transferable argument."
        },
        {
          "id": "philosophy-201-l03-q2",
          "text": "In evaluating knowledge, what is the strongest indicator of a high-quality process?",
          "skillId": "process-quality",
          "options": [
            {
              "id": "a",
              "text": "How quickly a conclusion is reached"
            },
            {
              "id": "b",
              "text": "Traceable steps, review checkpoints, and measurable outcomes"
            },
            {
              "id": "c",
              "text": "An unstructured process that relies on intuition alone"
            },
            {
              "id": "d",
              "text": "A single story of past success"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A quality process is observable, repeatable, and measurable, allowing for verification and improvement."
        },
        {
          "id": "philosophy-201-l03-q3",
          "text": "When analyzing an ethical problem, which practice supports a trustworthy conclusion?",
          "skillId": "evaluation-methods",
          "options": [
            {
              "id": "a",
              "text": "Ignoring inconvenient or complex edge cases"
            },
            {
              "id": "b",
              "text": "Using baseline comparisons and analyzing potential failures"
            },
            {
              "id": "c",
              "text": "Changing your success criteria after the results are in"
            },
            {
              "id": "d",
              "text": "Removing important context from your final report"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Baselines provide context for judgment, and failure analysis helps identify weaknesses, preventing overconfidence and improving the final design."
        },
        {
          "id": "philosophy-201-l03-q4",
          "text": "A mature applied reasoning strategy should prioritize:",
          "skillId": "reasoning-strategy",
          "options": [
            {
              "id": "a",
              "text": "Achieving one specific goal, no matter the side effects"
            },
            {
              "id": "b",
              "text": "Balanced outcomes across quality, risk, and sustainability"
            },
            {
              "id": "c",
              "text": "Decisions based only on gut feelings"
            },
            {
              "id": "d",
              "text": "Avoiding any review after a decision is made"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A sophisticated strategy considers the long-term and balances multiple important factors, rather than focusing on a single metric at any cost."
        }
      ]
    },
    {
      "id": "philosophy-201-l04",
      "title": "Methods, Metrics, and Failure Modes",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "philosophy-201-l04-a1",
          "type": "mnemonic",
          "title": "Classifying Failures",
          "content": "To remember the four main failure types, think 'DEEP': Data, Execution, Environment, Process."
        }
      ],
      "chunks": [
        {
          "id": "philosophy-201-l04-c1",
          "kind": "concept",
          "title": "Selecting the Right Method",
          "content": "There are many ways to approach a philosophical problem. The best method depends on factors like your constraints (e.g., time), the quality of your information, and the potential consequences of being wrong. In this lesson, you will learn how to compare different analytical methods and justify why one approach is better suited for a specific scenario than another."
        },
        {
          "id": "philosophy-201-l04-c2",
          "kind": "example",
          "title": "How to Measure Progress",
          "content": "We will explore a system for measurement that connects three key components: 'leading indicators' (early warnings), 'lagging outcomes' (final results), and 'diagnostic measures' (tools to find the cause). This framework helps you spot when you are drifting off course early on, allowing you to make thoughtful corrections before it's too late. Understanding this helps you monitor your progress and make better-informed decisions.",
          "whyThisMatters": "Good metrics act like an early-warning system. They help you see problems developing and fix them proactively, rather than being surprised by a poor outcome."
        },
        {
          "id": "philosophy-201-l04-c3",
          "kind": "recap",
          "title": "Understanding Why Things Go Wrong",
          "content": "In this recap, we will categorize failures into distinct groups, such as errors in data, process, execution, or judgment. By classifying the type of failure, we can design specific, targeted fixes instead of relying on generic, one-size-fits-all solutions. This structured approach enhances your ability to learn from mistakes and improve your problem-solving skills."
        }
      ],
      "flashcards": [
        {
          "id": "philosophy-201-l04-f1",
          "front": "Leading Indicator",
          "back": "An early metric that signals probable future outcomes before the final results are clear."
        },
        {
          "id": "philosophy-201-l04-f2",
          "front": "Failure Taxonomy",
          "back": "A structured classification of different types of errors, used to design targeted and effective solutions."
        },
        {
          "id": "philosophy-201-l04-f3",
          "front": "Cost of Error",
          "back": "The total negative impact (e.g., operational, social, financial) caused by an incorrect decision or action."
        }
      ]
    },
    {
      "id": "philosophy-201-l05",
      "title": "Case Study: Improving a System",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "philosophy-201-l05-a1",
          "type": "practice",
          "title": "Trade-off Analysis",
          "content": "For each potential solution in the case study, list one primary benefit and one significant drawback in a simple two-column table."
        }
      ],
      "chunks": [
        {
          "id": "philosophy-201-l05-c1",
          "kind": "practice",
          "title": "Breaking Down the Case",
          "content": "In this interactive case study, you will analyze a realistic scenario by breaking it down into its core components: the main objective, the surrounding context, the key constraints, and the available options for intervention. For each option, you will identify the trade-offs involved. This exercise will help you develop a systematic approach to complex, real-world problems."
        },
        {
          "id": "philosophy-201-l05-c2",
          "kind": "recap",
          "title": "Proposing an Improvement",
          "content": "Based on your analysis, you will outline a staged improvement plan. Your proposal must include clear success criteria, a simple map of who is responsible for each action, and a timeline for follow-up. This structured approach will help you communicate your recommendations effectively and demonstrate your ability to turn analysis into a concrete plan."
        }
      ],
      "interactiveActivities": [
        {
          "id": "philosophy-201-l05-act1",
          "type": "scenario_practice",
          "title": "Decision Path Simulation",
          "description": "Choose among three interventions to improve ethical outcomes in a system, balancing time and quality constraints.",
          "instructions": [
            "First, define what a 'successful' outcome would look like.",
            "For your chosen intervention, document one short-term trade-off and one long-term benefit.",
            "Specify one metric you would use to confirm that your intervention worked."
          ]
        },
        {
          "id": "philosophy-201-l05-act2",
          "type": "matching_pairs",
          "title": "Intervention to Outcome Mapping",
          "description": "Connect each intervention with its most likely system-level effect.",
          "pairs": [
            {
              "left": "Being more selective with initial information",
              "right": "Higher quality inputs and less corrective work later"
            },
            {
              "left": "Automated quality checks",
              "right": "Faster detection of common, preventable errors"
            },
            {
              "left": "Team review after a project",
              "right": "Better adaptation and learning for future cycles"
            },
            {
              "left": "Clear communication between groups",
              "right": "Reduced confusion and errors during handoffs"
            }
          ]
        }
      ]
    },
    {
      "id": "philosophy-201-l06",
      "title": "Checkpoint 2: Systems Reasoning",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "philosophy-201-l06-a1",
          "type": "practice",
          "title": "Explain the 'Why'",
          "content": "For each question, briefly explain why the incorrect answers are worse choices than the correct one."
        }
      ],
      "questions": [
        {
          "id": "philosophy-201-l06-q1",
          "text": "When choosing a method to analyze a complex problem, what is the most important first step?",
          "skillId": "method-selection",
          "options": [
            {
              "id": "a",
              "text": "Pick the method that is fastest, regardless of accuracy"
            },
            {
              "id": "b",
              "text": "Use the same method you used last time, without question"
            },
            {
              "id": "c",
              "text": "Understand the constraints, goals, and cost of error"
            },
            {
              "id": "d",
              "text": "Choose the most complicated method to seem thorough"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The best method depends on the specific context. Understanding your goals, limits, and the stakes involved is critical for making a wise choice."
        },
        {
          "id": "philosophy-201-l06-q2",
          "text": "A team notices that customer complaints (a lagging outcome) have increased. What type of metric should they investigate to find the root cause?",
          "skillId": "metrics-analysis",
          "options": [
            {
              "id": "a",
              "text": "Another lagging outcome, like quarterly profit"
            },
            {
              "id": "b",
              "text": "Leading indicators, like recent changes in product quality or support wait times"
            },
            {
              "id": "c",
              "text": "Vanity metrics, like total website visits"
            },
            {
              "id": "d",
              "text": "Historical metrics from five years ago"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Leading indicators are early warnings that can help diagnose why a lagging outcome has changed. They point to the potential cause of the problem."
        },
        {
          "id": "philosophy-201-l06-q3",
          "text": "An argument was found to be flawed because it was based on outdated statistics. According to the 'DEEP' model, how would you classify this failure?",
          "skillId": "failure-classification",
          "options": [
            {
              "id": "a",
              "text": "Execution failure (the argument was delivered poorly)"
            },
            {
              "id": "b",
              "text": "Process failure (the steps for checking sources were not followed)"
            },
            {
              "id": "c",
              "text": "Data failure (the input information was low-quality)"
            },
            {
              "id": "d",
              "text": "Environment failure (an external event changed the facts)"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The problem originated with the input material itself. A data failure occurs when the evidence or information used as a foundation is flawed."
        },
        {
          "id": "philosophy-201-l06-q4",
          "text": "When proposing an improvement to a system, what element is crucial for ensuring accountability?",
          "skillId": "system-improvement",
          "options": [
            {
              "id": "a",
              "text": "A vague goal without any way to measure it"
            },
            {
              "id": "b",
              "text": "A plan with no deadlines or assigned responsibilities"
            },
            {
              "id": "c",
              "text": "Clear success criteria and a timeline for follow-up"
            },
            {
              "id": "d",
              "text": "A focus only on the benefits, ignoring any potential trade-offs"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Accountability requires clarity. Knowing what success looks like, who is responsible, and when it should be reviewed are essential for a plan to be effective."
        }
      ]
    }
  ]
};
