import type { LearningModule } from "@/lib/modules/types";

export const ai_workflows_301_Module: LearningModule = {
  "id": "ai-workflows-301",
  "title": "AI Workflows Systems and Analysis",
  "description": "Level 301 curriculum in AI Workflows, emphasizing prompt design, retrieval pipelines, agent orchestration, evaluation metrics, and real-world decision quality through structured practice and assessment.",
  "subject": "AI Workflows",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "technology",
    "ai-engineering"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Develop rigorous mental models for prompt design and retrieval pipelines",
    "Apply structured methods to plan, execute, and review agent orchestration tasks",
    "Interpret evidence using metrics, constraints, and context",
    "Diagnose common failure modes and design recovery actions",
    "Communicate tradeoffs clearly to technical and non-technical audiences",
    "Build repeatable systems for sustained improvement in AI Workflows"
  ],
  "lessons": [
    {
      "id": "ai-workflows-301-l01",
      "title": "Core Models for AI Workflows",
      "type": "video",
      "duration": 13,
      "lessonImagePrompt": "A sleek, futuristic digital blueprint of an AI workflow system glowing on a dark glass table. Holographic nodes connect 'Prompt Design' and 'Retrieval Pipeline' modules. Cinematic lighting, photorealistic, 8k resolution, shot with a macro lens, highly detailed.",
      "conceptVideoPrompt": "A dynamic 3D animation showing glowing data packets flowing through a complex network of translucent pipes, representing an AI retrieval pipeline. The camera pans smoothly across the network, highlighting nodes that light up in neon blue and purple as data passes through. Cinematic depth of field, high-tech aesthetic, smooth 60fps motion.",
      "learningAids": [
        {
          "id": "ai-workflows-301-l01-a1",
          "type": "mnemonic",
          "title": "The UCE Framework",
          "content": "Remember UCE: Unit, Constraints, Evidence. Always define your Unit of analysis, map your Constraints, and set your Evidence standard before building."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-301-l01-c1",
          "kind": "concept",
          "title": "Operating Vocabulary and Scope",
          "content": "In AI Workflows, precision is everything. We start by defining our 'unit of analysis'—whether that is a specific prompt design or a complex retrieval pipeline. By establishing a shared vocabulary, teams of any age or background can collaborate effectively and build systems that are easy to compare, evaluate, and scale."
        },
        {
          "id": "ai-workflows-301-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Constraints",
          "content": "Great AI engineering requires causal thinking. Instead of just looking at the final output of a retrieval pipeline, we must map our constraints and dependencies. Why did the model choose this specific context? By understanding the root causes of AI behavior and the boundaries of our system, we build sustainable solutions rather than quick fixes."
        },
        {
          "id": "ai-workflows-301-l01-c3",
          "kind": "recap",
          "title": "Evidence and Accountability",
          "content": "Finally, we must hold our AI systems accountable. This means setting strict evidence standards for our prompt designs and maintaining detailed logs of our workflow. Clear accountability loops and rigorous testing ensure that our AI workflows are reliable, safe, and trustworthy for real-world applications."
        }
      ],
      "flashcards": [
        {
          "id": "ai-workflows-301-l01-f1",
          "front": "Unit of analysis",
          "back": "The specific entity or process (like a prompt or pipeline) you evaluate to make defensible decisions."
        },
        {
          "id": "ai-workflows-301-l01-f2",
          "front": "Constraint mapping",
          "back": "A method for identifying boundaries and limitations that shape feasible AI workflow options."
        },
        {
          "id": "ai-workflows-301-l01-f3",
          "front": "Evidence standard",
          "back": "The minimum quality threshold data must meet before an AI system takes action."
        }
      ],
      "imageUrl": "/generated-images/refinery/ai-workflows-301-l01.png"
    },
    {
      "id": "ai-workflows-301-l02",
      "title": "AI Workflows Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "A modern, well-lit tech laboratory with multiple transparent OLED screens displaying interactive workflow diagrams. A diverse team of engineers pointing at a checkpoint gate on the screen, vibrant colors, highly detailed, 4k resolution, photorealistic.",
      "conceptVideoPrompt": "Time-lapse style shot of a digital workflow being constructed piece by piece on a dark, infinite canvas. Glowing lines connect input nodes to output metrics, with a subtle pulse effect indicating successful data flow. Smooth zoom-in on a 'Decision Log' module locking into place.",
      "learningAids": [
        {
          "id": "ai-workflows-301-l02-a1",
          "type": "practice",
          "title": "Workflow Checklist",
          "content": "Before finalizing your workflow, verify you have defined: Inputs, Checkpoints, Expected Outputs, and Rollback Triggers."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-301-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive lab, you will construct a complete workflow for designing prompts and creating retrieval pipelines. This includes identifying the necessary data inputs, setting up checkpoint gates to monitor progress, defining the expected outputs, and establishing rollback triggers to safely manage any issues that arise during the process."
        },
        {
          "id": "ai-workflows-301-l02-c2",
          "kind": "practice",
          "title": "Iterative Testing and Rollbacks",
          "content": "Once your workflow is constructed, it must be tested iteratively. This means running small batches of data through the pipeline to see how the AI behaves. If an error occurs, rollback triggers automatically revert the system to its last safe state, preventing bad data from corrupting the entire workflow."
        },
        {
          "id": "ai-workflows-301-l02-c3",
          "kind": "recap",
          "title": "Decision Logging",
          "content": "Every decision made in your workflow should be accompanied by a clear rationale, an expected effect, and a verification point. This approach enables thorough post-run analyses, helping us learn from our experiences, trace back errors, and continuously improve future iterations of the AI model."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-workflows-301-l02-act1",
          "type": "matching_pairs",
          "title": "Workflow Match",
          "description": "Match each workflow component to its strongest governance function.",
          "pairs": [
            {
              "left": "Input audit",
              "right": "Prevents low-quality data from entering the system"
            },
            {
              "left": "Checkpoint gate",
              "right": "Stops propagation of known defects"
            },
            {
              "left": "Outcome metric",
              "right": "Measures whether the objective was met"
            },
            {
              "left": "Retrospective log",
              "right": "Captures lessons for next iteration"
            }
          ]
        },
        {
          "id": "ai-workflows-301-l02-act2",
          "type": "sorting_buckets",
          "title": "Risk Classification",
          "description": "Sort items into strategic, operational, and quality-risk groups.",
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
      ],
      "imageUrl": "/generated-images/refinery/ai-workflows-301-l02.png"
    },
    {
      "id": "ai-workflows-301-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A stylized, glowing checkpoint gate in a digital landscape, representing a knowledge test. Neon blue and purple hues, geometric shapes, futuristic and clean design, 8k resolution, Unreal Engine 5 render style.",
      "conceptVideoPrompt": "A sleek, abstract representation of a lock clicking open as glowing puzzle pieces snap together perfectly. Smooth slow-motion, macro lens, soft neon lighting, symbolizing successful knowledge acquisition and unlocking the next level.",
      "learningAids": [
        {
          "id": "ai-workflows-301-l03-a1",
          "type": "practice",
          "title": "Test Strategy",
          "content": "Read each scenario carefully. Identify the core constraint or objective before selecting your answer."
        }
      ],
      "questions": [
        {
          "id": "ai-workflows-301-l03-q1",
          "text": "Which action best improves decisions in prompt design work?",
          "skillId": "ai-workflows-301-skill-core",
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
              "text": "Avoid documenting rationale to save time"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Explicit criteria and testable assumptions improve reliability and transferability, ensuring your prompt design is robust."
        },
        {
          "id": "ai-workflows-301-l03-q2",
          "text": "In retrieval pipelines, what is the strongest indicator of process quality?",
          "skillId": "ai-workflows-301-skill-process",
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
          "explanation": "Quality processes are observable, repeatable, and measurable. Traceability allows you to debug and improve the pipeline."
        },
        {
          "id": "ai-workflows-301-l03-q3",
          "text": "When evaluating agent orchestration, which practice supports trustworthy conclusions?",
          "skillId": "ai-workflows-301-skill-eval",
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
          "explanation": "Baselines and failure analysis prevent overclaiming, provide context, and directly improve design quality."
        },
        {
          "id": "ai-workflows-301-l03-q4",
          "text": "A mature evaluation metrics strategy should prioritize:",
          "skillId": "ai-workflows-301-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Single-metric optimization at any cost"
            },
            {
              "id": "b",
              "text": "Balanced outcomes across quality, risk, and sustainability"
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
          "explanation": "Balanced scorecards align long-term performance with accountability, ensuring the system doesn't optimize one metric while breaking another."
        }
      ],
      "imageUrl": "/generated-images/refinery/ai-workflows-301-l03.png"
    },
    {
      "id": "ai-workflows-301-l04",
      "title": "Methods, Metrics, and Failure Modes in AI Workflows",
      "type": "video",
      "duration": 14,
      "lessonImagePrompt": "A sophisticated dashboard displaying AI evaluation metrics, with leading and lagging indicators shown as glowing holographic charts. Dark mode UI, sharp focus, professional tech environment, photorealistic, 8k.",
      "conceptVideoPrompt": "A visual metaphor of a complex clockwork mechanism where one gear slips, causing a cascade effect, representing a failure mode. The camera tracks the failure, then reverses as a glowing 'fix' stabilizes the system. High-quality 3D render, dramatic lighting, cinematic pacing.",
      "learningAids": [
        {
          "id": "ai-workflows-301-l04-a1",
          "type": "mnemonic",
          "title": "The LLD Metric Triad",
          "content": "Remember LLD: Leading, Lagging, Diagnostic. Use this triad to build a complete and robust metric architecture."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-301-l04-c1",
          "kind": "concept",
          "title": "Method Selection for Agent Orchestration",
          "content": "When orchestrating AI agents, choosing the right evaluation method is crucial. You must balance constraints like time and computing power against the cost of an AI error. By weighing these factors, you can select the most defensible method to guide your agent's decision-making process and ensure reliable task execution."
        },
        {
          "id": "ai-workflows-301-l04-c2",
          "kind": "example",
          "title": "Metric Architecture",
          "content": "A robust metric architecture uses the LLD triad: Leading indicators (predicting future agent performance), Lagging outcomes (the final results of the workflow), and Diagnostic measures (understanding why the agent made a specific choice). This triad helps you spot orchestration issues early and keep workflows on track."
        },
        {
          "id": "ai-workflows-301-l04-c3",
          "kind": "recap",
          "title": "Failure Taxonomy",
          "content": "Even the best AI workflows fail. We categorize these failures into a taxonomy: data issues (bad context), process problems (flawed retrieval), execution errors (agent hallucination), and governance challenges (lack of oversight). This structure helps us design precise, targeted fixes rather than guessing at solutions."
        }
      ],
      "flashcards": [
        {
          "id": "ai-workflows-301-l04-f1",
          "front": "Leading indicator",
          "back": "A metric that signals probable future outcomes before final results appear."
        },
        {
          "id": "ai-workflows-301-l04-f2",
          "front": "Failure taxonomy",
          "back": "A structured classification of failure types used to design targeted fixes."
        },
        {
          "id": "ai-workflows-301-l04-f3",
          "front": "Cost of error",
          "back": "The operational, financial, or social impact caused by an incorrect AI decision."
        }
      ],
      "imageUrl": "/generated-images/refinery/ai-workflows-301-l04.png"
    },
    {
      "id": "ai-workflows-301-l05",
      "title": "Case Studio: Improve an AI Workflows System",
      "type": "interactive",
      "duration": 16,
      "lessonImagePrompt": "An interactive command center desk with a glowing 3D map of an AI system architecture. A person's hands are visible adjusting a physical dial that changes the flow of the digital map, representing system improvement. Cinematic, highly detailed, 8k.",
      "conceptVideoPrompt": "Overhead tracking shot of a digital blueprint transforming into a fully optimized, glowing 3D network. The network pulses with bright, clean energy as bottlenecks are visually cleared away. Smooth, continuous motion, futuristic aesthetic, 4k resolution.",
      "learningAids": [
        {
          "id": "ai-workflows-301-l05-a1",
          "type": "practice",
          "title": "Decomposition Framework",
          "content": "Follow this flow: Objective -> Context -> Constraints -> Options. Use this to break down any complex AI system case."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-301-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "In this practice session, you will break down a realistic AI workflow case into its key components: the objective we aim to achieve, the context in which we are working, the constraints we face, and the various options for intervention. Document the trade-offs involved in each option to guide your decision-making."
        },
        {
          "id": "ai-workflows-301-l05-c2",
          "kind": "practice",
          "title": "Evaluating Trade-offs",
          "content": "Every intervention comes with a cost. If you tighten intake criteria to improve quality, you might slow down the system. If you automate checkpoints, you risk missing nuanced errors. In this step, you will weigh these trade-offs, balancing speed, cost, and accuracy to find the most sustainable solution."
        },
        {
          "id": "ai-workflows-301-l05-c3",
          "kind": "recap",
          "title": "Improvement Proposal",
          "content": "To wrap up, you will present a staged improvement proposal for the AI system. This must outline the criteria for success, identify who is responsible for each part of the plan, and include a timeline for follow-up actions. This structured approach ensures your proposal is clear, measurable, and actionable."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-workflows-301-l05-act1",
          "type": "scenario_practice",
          "title": "Decision Path Simulation",
          "description": "Choose among three interventions to improve agent orchestration outcomes under time and quality constraints.",
          "instructions": [
            "Define success criteria before selecting an intervention.",
            "Document one short-term tradeoff and one long-term benefit.",
            "Specify a metric that confirms success in the next cycle."
          ]
        },
        {
          "id": "ai-workflows-301-l05-act2",
          "type": "matching_pairs",
          "title": "Intervention to Outcome Mapping",
          "description": "Connect interventions with the most likely system-level effects.",
          "pairs": [
            {
              "left": "Tighter intake criteria",
              "right": "Higher signal quality and lower downstream rework"
            },
            {
              "left": "Checkpoint automation",
              "right": "Faster detection of preventable defects"
            },
            {
              "left": "Post-run retrospective",
              "right": "Improved adaptation in later cycles"
            },
            {
              "left": "Cross-team briefing",
              "right": "Reduced ambiguity at handoff boundaries"
            }
          ]
        }
      ],
      "imageUrl": "/generated-images/refinery/ai-workflows-301-l05.png"
    },
    {
      "id": "ai-workflows-301-l06",
      "title": "Checkpoint 2: Systems Reasoning",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A grand, futuristic archway made of glowing data streams, symbolizing the final checkpoint of a complex system. Deep space background with subtle nebula clouds, epic scale, highly detailed, 8k resolution.",
      "conceptVideoPrompt": "A fast-paced, dynamic fly-through of a massive, perfectly synchronized digital city representing a flawless AI workflow system. Data flows like traffic in glowing streams. The camera spirals upward to reveal the entire optimized network in a grand finale.",
      "learningAids": [
        {
          "id": "ai-workflows-301-l06-a1",
          "type": "practice",
          "title": "Final Review",
          "content": "Synthesize your knowledge of metrics, failure modes, and system constraints to evaluate these complex scenarios."
        }
      ],
      "questions": [
        {
          "id": "ai-workflows-301-l06-q1",
          "text": "When selecting a method for an AI workflow under strict time constraints and a high cost of error, what is the most defensible approach?",
          "skillId": "ai-workflows-301-skill-methods",
          "options": [
            {
              "id": "a",
              "text": "Deploy the fastest experimental model available"
            },
            {
              "id": "b",
              "text": "Implement a proven, conservative model with robust diagnostic logging"
            },
            {
              "id": "c",
              "text": "Bypass checkpoint gates to meet the deadline"
            },
            {
              "id": "d",
              "text": "Rely entirely on lagging indicators to catch mistakes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "When the cost of error is high, prioritizing proven methods and diagnostic logging ensures safety and traceability over raw speed."
        },
        {
          "id": "ai-workflows-301-l06-q2",
          "text": "Which combination of metrics provides the most comprehensive view of an AI system's health?",
          "skillId": "ai-workflows-301-skill-metrics",
          "options": [
            {
              "id": "a",
              "text": "Only lagging outcomes to see final results"
            },
            {
              "id": "b",
              "text": "Leading indicators for prediction, lagging outcomes for results, and diagnostic measures for root-cause analysis"
            },
            {
              "id": "c",
              "text": "Diagnostic measures exclusively"
            },
            {
              "id": "d",
              "text": "A single, overarching performance score"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A complete metric architecture requires leading, lagging, and diagnostic metrics to predict, measure, and understand performance."
        },
        {
          "id": "ai-workflows-301-l06-q3",
          "text": "If an AI agent consistently hallucinates due to outdated context windows, how should this failure be classified in a taxonomy?",
          "skillId": "ai-workflows-301-skill-failures",
          "options": [
            {
              "id": "a",
              "text": "Execution error"
            },
            {
              "id": "b",
              "text": "Governance challenge"
            },
            {
              "id": "c",
              "text": "Data-related issue"
            },
            {
              "id": "d",
              "text": "Process problem"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Outdated context windows represent a flaw in the information being fed to the model, making it a data-related issue."
        },
        {
          "id": "ai-workflows-301-l06-q4",
          "text": "What is the primary benefit of including a 'post-run retrospective' in an AI workflow improvement proposal?",
          "skillId": "ai-workflows-301-skill-improvement",
          "options": [
            {
              "id": "a",
              "text": "It captures lessons learned to improve adaptation and reduce errors in subsequent cycles"
            },
            {
              "id": "b",
              "text": "It guarantees that no errors will occur in the future"
            },
            {
              "id": "c",
              "text": "It speeds up the initial deployment phase"
            },
            {
              "id": "d",
              "text": "It replaces the need for leading indicators"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Retrospectives are designed to capture insights and feedback, which directly inform and improve the next iteration of the workflow."
        }
      ],
      "imageUrl": "/generated-images/refinery/ai-workflows-301-l06.png"
    }
  ]
};
