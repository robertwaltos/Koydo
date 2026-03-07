import type { LearningModule } from "@/lib/modules/types";

export const ai_workflows_401_Module: LearningModule = {
  "id": "ai-workflows-401",
  "title": "AI Workflows Mastery and Leadership",
  "description": "Level 401 curriculum in AI Workflows, emphasizing prompt design, retrieval pipelines, agent orchestration, evaluation metrics, and real-world decision quality through structured practice and assessment.",
  "subject": "AI Workflows",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "technology",
    "ai-engineering"
  ],
  "minAge": 16,
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
      "id": "ai-workflows-401-l01",
      "title": "Core Models for AI Workflows",
      "type": "video",
      "duration": 13,
      "lessonImagePrompt": "Imagen 4 prompt: A sleek, modern command center with glowing holographic nodes representing AI agents and data pipelines, cinematic lighting, photorealistic, highly detailed, 16:9 aspect ratio.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic 3D animation of a glowing data pipeline connecting various AI nodes, with a smooth camera pan showing data flowing seamlessly through a futuristic digital landscape, 4k resolution, cinematic lighting.",
      "learningAids": [
        {
          "id": "ai-workflows-401-l01-a1",
          "type": "image",
          "title": "Concept Map",
          "content": "Visualize the relationship between Prompts, Retrieval Pipelines, and Agent Orchestration to understand the full workflow."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-401-l01-c1",
          "kind": "concept",
          "title": "Operating Vocabulary and Scope",
          "content": "In the advanced study of AI Workflows, precise language is your most valuable tool. We must carefully define the boundaries of our work—whether we are optimizing a single prompt, a Retrieval-Augmented Generation (RAG) pipeline, or a multi-agent orchestration system. By establishing a shared operating vocabulary, we ensure that decisions across different engineering teams can be compared fairly and accurately. This clarity eliminates ambiguity, streamlines collaboration, and sets the foundation for scalable AI systems."
        },
        {
          "id": "ai-workflows-401-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Constraints",
          "content": "To excel in AI Workflows, it is crucial to understand not just the outputs we see, but the underlying mechanisms that produce them. This requires mapping out our assumptions, recognizing system dependencies, and identifying technical or business constraints. By applying causal thinking, we ensure that our interventions target the root causes of hallucinations or latency, rather than just treating the symptoms. This deeper understanding enables us to architect more resilient AI solutions."
        },
        {
          "id": "ai-workflows-401-l01-c3",
          "kind": "recap",
          "title": "Evidence and Accountability",
          "content": "Executing AI workflows reliably requires maintaining high standards for evidence. This means keeping detailed logs of prompt iterations, tracking retrieval accuracy, and establishing clear accountability loops. These practices are not optional; they are fundamental to ensuring that our AI systems are trustworthy, auditable, and capable of continuous improvement. By adhering to strict evidence standards, we transition from experimental AI to enterprise-grade reliability."
        }
      ],
      "flashcards": [
        {
          "id": "ai-workflows-401-l01-f1",
          "front": "Unit of analysis",
          "back": "The specific entity or process you evaluate to make defensible decisions."
        },
        {
          "id": "ai-workflows-401-l01-f2",
          "front": "Constraint mapping",
          "back": "A method for identifying boundaries that shape feasible options."
        },
        {
          "id": "ai-workflows-401-l01-f3",
          "front": "Evidence standard",
          "back": "The minimum quality threshold data must meet before action is taken."
        }
      ],
      "imageUrl": "/generated-images/refinery/ai-workflows-401-l01.png"
    },
    {
      "id": "ai-workflows-401-l02",
      "title": "AI Workflows Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: A top-down view of a collaborative workspace with a digital whiteboard showing a complex AI workflow diagram, photorealistic, highly detailed, 16:9 aspect ratio.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A time-lapse of a digital whiteboard where a complex AI workflow is being drawn, with nodes lighting up and connecting dynamically to show data flow, 4k resolution, smooth motion.",
      "learningAids": [
        {
          "id": "ai-workflows-401-l02-a1",
          "type": "practice",
          "title": "Workflow Checklist",
          "content": "Always verify inputs, establish checkpoints, and define expected outputs before deploying a new workflow."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-401-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive lab, you will construct a complete workflow for designing prompts and managing retrieval pipelines. You will identify necessary inputs, establish quality checkpoints to monitor progress, determine expected outputs, and set up rollback triggers to revert changes if an AI agent behaves unexpectedly. This hands-on experience bridges the gap between theoretical architecture and practical implementation."
        },
        {
          "id": "ai-workflows-401-l02-c2",
          "kind": "recap",
          "title": "Decision Logging",
          "content": "Every architectural decision made during workflow construction must be accompanied by a clear rationale, an expected effect, and a verification point. This practice, known as decision logging, allows teams to conduct thorough post-mortems after a workflow has run. By documenting the 'why' behind our choices, we create a knowledge base that accelerates future troubleshooting and enhances overall system governance."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-workflows-401-l02-act1",
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
          "id": "ai-workflows-401-l02-act2",
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
      "imageUrl": "/generated-images/refinery/ai-workflows-401-l02.png"
    },
    {
      "id": "ai-workflows-401-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A stylized glowing checkpoint gate in a digital landscape, neon blue and purple hues, futuristic, photorealistic, 16:9 aspect ratio.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A smooth fly-through of a digital tunnel that opens up into a bright, structured data grid, symbolizing passing a checkpoint, 4k resolution, seamless loop.",
      "learningAids": [
        {
          "id": "ai-workflows-401-l03-a1",
          "type": "practice",
          "title": "Test Strategy",
          "content": "Read each question carefully and identify the core workflow principle being tested before selecting your answer."
        }
      ],
      "questions": [
        {
          "id": "ai-workflows-401-l03-q1",
          "text": "Which action best improves decisions in prompt design work?",
          "skillId": "ai-workflows-401-skill-core",
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
          "id": "ai-workflows-401-l03-q2",
          "text": "In retrieval pipelines, what is the strongest indicator of process quality?",
          "skillId": "ai-workflows-401-skill-process",
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
          "id": "ai-workflows-401-l03-q3",
          "text": "When evaluating agent orchestration, which practice supports trustworthy conclusions?",
          "skillId": "ai-workflows-401-skill-eval",
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
          "id": "ai-workflows-401-l03-q4",
          "text": "A mature evaluation metrics strategy should prioritize:",
          "skillId": "ai-workflows-401-skill-strategy",
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
          "explanation": "Balanced scorecards align long-term performance with accountability."
        }
      ],
      "imageUrl": "/generated-images/refinery/ai-workflows-401-l03.png"
    },
    {
      "id": "ai-workflows-401-l04",
      "title": "Methods, Metrics, and Failure Modes in AI Workflows",
      "type": "video",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: A futuristic dashboard displaying various AI performance metrics, glowing graphs, and failure mode alerts, high-tech environment, photorealistic, 16:9 aspect ratio.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A close-up of a digital dashboard with graphs dynamically updating, highlighting a sudden anomaly in red that quickly gets resolved and turns green, 4k resolution, realistic screen glare.",
      "learningAids": [
        {
          "id": "ai-workflows-401-l04-a1",
          "type": "mnemonic",
          "title": "Metric Types",
          "content": "Remember L-L-D: Leading (predictive), Lagging (historical), and Diagnostic (root-cause) metrics."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-401-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "When selecting methods for AI workflows, you must weigh constraints, information quality, and the cost of errors. For instance, a high-stakes medical RAG system requires strict deterministic guardrails, whereas a creative brainstorming agent might favor higher temperature settings and looser constraints. By comparing alternatives and justifying your choices, you develop the critical engineering judgment needed to deploy AI safely and effectively."
        },
        {
          "id": "ai-workflows-401-l04-c2",
          "kind": "example",
          "title": "Metric Architecture",
          "content": "A robust metric architecture connects leading indicators (which predict future performance, like retrieval latency), lagging outcomes (which reflect past results, like user satisfaction scores), and diagnostic measures (which explain the 'why', like token limit errors). This tri-fold framework allows teams to detect deviations early and respond deliberately, ensuring continuous optimization of the AI workflow."
        },
        {
          "id": "ai-workflows-401-l04-c3",
          "kind": "recap",
          "title": "Failure Taxonomy",
          "content": "To build resilient systems, we categorize AI failures into four main groups: data-related (e.g., stale embeddings), process (e.g., missing checkpoints), execution (e.g., API timeouts), and governance (e.g., unauthorized prompt changes). By organizing failures into this taxonomy, we can design targeted, systemic fixes rather than applying temporary patches, drastically improving workflow reliability."
        }
      ],
      "flashcards": [
        {
          "id": "ai-workflows-401-l04-f1",
          "front": "Leading indicator",
          "back": "A metric that signals probable future outcomes before final results appear."
        },
        {
          "id": "ai-workflows-401-l04-f2",
          "front": "Failure taxonomy",
          "back": "A structured classification of failure types used to design targeted fixes."
        },
        {
          "id": "ai-workflows-401-l04-f3",
          "front": "Cost of error",
          "back": "The operational, financial, or social impact caused by an incorrect decision."
        }
      ],
      "imageUrl": "/generated-images/refinery/ai-workflows-401-l04.png"
    },
    {
      "id": "ai-workflows-401-l05",
      "title": "Case Studio: Improve an AI Workflows System",
      "type": "interactive",
      "duration": 16,
      "lessonImagePrompt": "Imagen 4 prompt: A diverse team of engineers analyzing a 3D holographic projection of an AI system architecture on a smart table, modern tech office, photorealistic, 16:9 aspect ratio.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A cinematic camera circles around a group of professionals discussing a glowing, interactive AI system map on a smart table, pointing at specific nodes, 4k resolution, shallow depth of field.",
      "learningAids": [
        {
          "id": "ai-workflows-401-l05-a1",
          "type": "practice",
          "title": "Analysis Framework",
          "content": "Follow the sequence: Define Objective -> Understand Context -> Map Constraints -> Propose Interventions."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-401-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "In this interactive case study, you will deconstruct a failing multi-agent orchestration system. You will identify the core objective, analyze the operational context, map out API and budget constraints, and evaluate potential intervention strategies. By documenting the trade-offs of each option—such as choosing between faster response times versus higher accuracy—you will hone your ability to navigate complex, real-world AI engineering challenges."
        },
        {
          "id": "ai-workflows-401-l05-c2",
          "kind": "recap",
          "title": "Improvement Proposal",
          "content": "After analyzing the case, you will synthesize your findings into a structured improvement proposal. This proposal must define clear success criteria, assign accountability for each architectural change, and establish a timeline for post-deployment review. Articulating these elements ensures that your technical recommendations are actionable, measurable, and aligned with broader business objectives."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-workflows-401-l05-act1",
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
          "id": "ai-workflows-401-l05-act2",
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
      "imageUrl": "/generated-images/refinery/ai-workflows-401-l05.png"
    },
    {
      "id": "ai-workflows-401-l06",
      "title": "Checkpoint 2: Systems Reasoning",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing, intricate puzzle with pieces representing different AI workflow components coming together, cinematic lighting, photorealistic, 16:9 aspect ratio.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A cinematic animation of digital puzzle pieces assembling themselves into a glowing, unified AI brain, symbolizing systems reasoning, 4k resolution, smooth transitions.",
      "learningAids": [
        {
          "id": "ai-workflows-401-l06-a1",
          "type": "practice",
          "title": "Review Strategy",
          "content": "Recall the failure taxonomy and the differences between leading and lagging metrics before answering."
        }
      ],
      "questions": [
        {
          "id": "ai-workflows-401-l06-q1",
          "text": "Which of the following is the best example of a leading indicator in an AI retrieval pipeline?",
          "skillId": "ai-workflows-401-skill-metrics",
          "options": [
            {
              "id": "a",
              "text": "Total user complaints at the end of the month"
            },
            {
              "id": "b",
              "text": "Average latency of document retrieval during processing"
            },
            {
              "id": "c",
              "text": "Quarterly infrastructure cost"
            },
            {
              "id": "d",
              "text": "Final accuracy score reported by the client"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Latency is a leading indicator because it can predict future user dissatisfaction or system timeouts before the final outcome occurs."
        },
        {
          "id": "ai-workflows-401-l06-q2",
          "text": "If an AI agent repeatedly fails because it receives outdated information from the vector database, how should this be classified in a failure taxonomy?",
          "skillId": "ai-workflows-401-skill-failure",
          "options": [
            {
              "id": "a",
              "text": "Execution failure"
            },
            {
              "id": "b",
              "text": "Data-related failure"
            },
            {
              "id": "c",
              "text": "Governance failure"
            },
            {
              "id": "d",
              "text": "Process failure"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Outdated information in a database is a data-related failure, requiring interventions like embedding updates or better data ingestion pipelines."
        },
        {
          "id": "ai-workflows-401-l06-q3",
          "text": "When decomposing a case study to improve an AI workflow, why is it critical to map constraints early?",
          "skillId": "ai-workflows-401-skill-systems",
          "options": [
            {
              "id": "a",
              "text": "To eliminate the need for performance metrics"
            },
            {
              "id": "b",
              "text": "To ensure proposed interventions are actually feasible"
            },
            {
              "id": "c",
              "text": "To bypass the testing phase entirely"
            },
            {
              "id": "d",
              "text": "To increase the acceptable cost of error"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Mapping constraints (like budget, API limits, or latency requirements) ensures that the solutions you design can actually be implemented in reality."
        },
        {
          "id": "ai-workflows-401-l06-q4",
          "text": "What is the primary benefit of implementing a post-run retrospective in an AI workflow?",
          "skillId": "ai-workflows-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "It prevents all future errors from occurring"
            },
            {
              "id": "b",
              "text": "It captures lessons learned to improve adaptation in later cycles"
            },
            {
              "id": "c",
              "text": "It automatically fixes data corruption"
            },
            {
              "id": "d",
              "text": "It replaces the need for leading indicators"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Retrospectives are a governance tool used to capture insights and improve the system iteratively over time."
        }
      ],
      "imageUrl": "/generated-images/refinery/ai-workflows-401-l06.png"
    }
  ]
};
