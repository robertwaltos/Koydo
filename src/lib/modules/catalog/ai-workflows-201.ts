import type { LearningModule } from "@/lib/modules/types";

export const ai_workflows_201_Module: LearningModule = {
  "id": "ai-workflows-201",
  "title": "AI Workflows Applied Practice",
  "description": "Level 201 curriculum in AI Workflows, emphasizing prompt design, retrieval pipelines, agent orchestration, evaluation metrics, and real-world decision quality through structured practice and assessment.",
  "subject": "AI Workflows",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "technology",
    "ai-engineering"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
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
      "id": "ai-workflows-201-l01",
      "title": "Core Models for AI Workflows",
      "type": "video",
      "duration": 13,
      "lessonImagePrompt": "Imagen 4 prompt: A sleek, futuristic digital blueprint of an AI workflow glowing in neon blue and crisp white on a dark background. Interconnected nodes represent data, processes, and outcomes. High resolution, 3D render, educational tech aesthetic, photorealistic lighting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic 3D animation zooming through a glowing network of AI nodes. The camera glides along pulsing data streams, highlighting decision gates and causal links. Cinematic lighting, smooth motion, high-tech aesthetic, 4k resolution, 60fps.",
      "learningAids": [
        {
          "id": "ai-workflows-201-l01-a1",
          "type": "analogy",
          "title": "The Kitchen Analogy",
          "content": "Think of an AI workflow like a restaurant kitchen. The vocabulary is the recipe, causal thinking is understanding *why* a dish burned, and evidence is tasting the food before serving it to a customer."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-201-l01-c1",
          "kind": "concept",
          "title": "Operating Vocabulary and Scope",
          "content": "In AI Workflows, using clear and precise language is your first line of defense against errors. This means defining the exact boundaries of your project—what the AI should do, and just as importantly, what it shouldn't do. We also need to identify our 'unit of analysis,' which is the specific thing we are measuring, like a single data point or an entire process. When everyone on a team uses the same terminology, collaboration skyrockets and costly misunderstandings disappear."
        },
        {
          "id": "ai-workflows-201-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Constraints",
          "content": "To truly excel in AI engineering, you must understand the *why* behind an outcome, not just the *what*. Causal thinking means looking past the surface symptoms to find the root cause of a problem. In this lesson, we explore how to map out the dependencies that connect different parts of your AI system and the constraints (like time, budget, or computing power) that limit your options. By focusing on root causes, you build solutions that actually last."
        },
        {
          "id": "ai-workflows-201-l01-c3",
          "kind": "recap",
          "title": "Evidence and Accountability",
          "content": "Reliable AI requires reliable evidence. First, we must set a high 'evidence standard,' meaning we only act on data that is accurate and trustworthy. Next, we practice 'logging discipline'—keeping detailed records of every prompt tweak and system change so we can retrace our steps. Finally, we build accountability loops to ensure someone is always responsible for the AI's output. Together, these practices turn unpredictable AI experiments into trustworthy, professional workflows."
        }
      ],
      "flashcards": [
        {
          "id": "ai-workflows-201-l01-f1",
          "front": "Unit of analysis",
          "back": "The specific entity or process you evaluate to make defensible decisions."
        },
        {
          "id": "ai-workflows-201-l01-f2",
          "front": "Constraint mapping",
          "back": "A method for identifying boundaries (like time or compute) that shape feasible options."
        },
        {
          "id": "ai-workflows-201-l01-f3",
          "front": "Evidence standard",
          "back": "The minimum quality threshold data must meet before action is taken."
        }
      ],
      "imageUrl": "/generated-images/refinery/ai-workflows-201-l01.png"
    },
    {
      "id": "ai-workflows-201-l02",
      "title": "AI Workflows Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: An interactive digital dashboard showing a drag-and-drop interface for building AI workflows. Bright, clear UI elements, modern tech aesthetic, soft studio lighting, isometric perspective, highly detailed.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A time-lapse style animation of a complex AI workflow assembling itself. Glowing blocks representing inputs, checkpoints, and outputs snap into place on a digital grid. Smooth camera pan, vibrant colors, satisfying motion design, 4k.",
      "learningAids": [
        {
          "id": "ai-workflows-201-l02-a1",
          "type": "practice",
          "title": "Pro-Tip: The Rollback",
          "content": "Always build a 'rollback' trigger. If your AI starts generating nonsense or hallucinating, you need an automatic way to pause the workflow and revert to a safe, previous state."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-201-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "Now it's time to build. In this interactive lab, you will construct a complete workflow for designing prompts and retrieving information. You'll define the inputs, set up 'checkpoint gates' to catch errors mid-process, determine the expected outputs, and establish rollback triggers. Building this rigid structure is what ensures your AI system behaves predictably, even when a user throws unexpected or messy data at it."
        },
        {
          "id": "ai-workflows-201-l02-c2",
          "kind": "practice",
          "title": "Decision Logging",
          "content": "A workflow is only as good as its documentation. We emphasize logging every major decision made during the workflow's execution. Each log should include the rationale (why the AI did it), the expected effect, and a verification point (how we know it worked). This isn't just busywork; it's the key to troubleshooting. When an AI agent fails, a good decision log lets you pinpoint exactly where the logic broke down."
        },
        {
          "id": "ai-workflows-201-l02-c3",
          "kind": "recap",
          "title": "Iterative Refinement",
          "content": "Once your workflow is running and logging decisions, the final step is iterative refinement. You don't just build an AI workflow once and forget it. You use the data from your checkpoint gates and decision logs to continuously tweak prompts, adjust retrieval parameters, and tighten constraints. This cycle of building, measuring, and learning is the heartbeat of professional AI engineering."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-workflows-201-l02-act1",
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
          "id": "ai-workflows-201-l02-act2",
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
      "imageUrl": "/generated-images/refinery/ai-workflows-201-l02.png"
    },
    {
      "id": "ai-workflows-201-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A stylized glowing checkpoint gate in a digital landscape, symbolizing a test of knowledge. Holographic checkmarks and data streams, futuristic and clean, vibrant neon green and blue colors.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A slow, sweeping shot of a futuristic holographic lock unlocking as glowing data passes through it, representing successful knowledge checks. Cinematic depth of field, glowing particle effects, highly detailed.",
      "learningAids": [
        {
          "id": "ai-workflows-201-l03-a1",
          "type": "strategy",
          "title": "Test Strategy",
          "content": "Look for answers that emphasize 'measurability' and 'repeatability'. Good AI workflows are never based on guessing or one-off anecdotes!"
        }
      ],
      "questions": [
        {
          "id": "ai-workflows-201-l03-q1",
          "text": "Which action best improves decisions in prompt design work?",
          "skillId": "ai-workflows-201-skill-core",
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
          "explanation": "Explicit criteria and testable assumptions improve reliability and transferability, ensuring your prompt works consistently."
        },
        {
          "id": "ai-workflows-201-l03-q2",
          "text": "In retrieval pipelines, what is the strongest indicator of process quality?",
          "skillId": "ai-workflows-201-skill-process",
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
          "explanation": "Quality processes are observable, repeatable, and measurable. Speed means nothing if the steps aren't traceable."
        },
        {
          "id": "ai-workflows-201-l03-q3",
          "text": "When evaluating agent orchestration, which practice supports trustworthy conclusions?",
          "skillId": "ai-workflows-201-skill-eval",
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
          "explanation": "Baselines and failure analysis prevent overclaiming and improve design quality by showing exactly where the agent succeeds and fails."
        },
        {
          "id": "ai-workflows-201-l03-q4",
          "text": "A mature evaluation metrics strategy should prioritize:",
          "skillId": "ai-workflows-201-skill-strategy",
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
          "explanation": "Balanced scorecards align long-term performance with accountability, ensuring you don't break one part of the system while fixing another."
        }
      ],
      "imageUrl": "/generated-images/refinery/ai-workflows-201-l03.png"
    },
    {
      "id": "ai-workflows-201-l04",
      "title": "Methods, Metrics, and Failure Modes in AI Workflows",
      "type": "video",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: A high-tech analytical dashboard displaying glowing charts, leading and lagging indicators, and a failure taxonomy tree. Dark mode UI with vibrant neon accents, photorealistic screen glare.",
      "conceptVideoPrompt": "Veo 3.1 prompt: An animated sequence showing a glowing data pipeline where a red 'failure' node is detected, isolated, and repaired by a blue diagnostic pulse. Smooth, professional tech visualization, macro lens effect, 4k.",
      "learningAids": [
        {
          "id": "ai-workflows-201-l04-a1",
          "type": "mnemonic",
          "title": "The LLD Framework",
          "content": "To remember how to build a metric architecture, use LLD: Leading (predicts the future), Lagging (reports the past), and Diagnostic (explains the why)."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-201-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "Choosing the right method for your AI workflow isn't about picking the fanciest algorithm; it's about matching the tool to your reality. First, consider your constraints: Do you have strict time limits? Limited computing power? Next, evaluate your data quality. A complex model fed with garbage data will just give you garbage faster. Finally, calculate the 'cost of error.' If a mistake means a minor typo, you can move fast. If a mistake costs millions of dollars, you need a slower, highly verified method."
        },
        {
          "id": "ai-workflows-201-l04-c2",
          "kind": "example",
          "title": "Metric Architecture",
          "content": "A well-structured metric architecture is like a dashboard in a car. It connects 'leading indicators' (like a temperature gauge warning you the engine *might* overheat) with 'lagging outcomes' (like the engine actually smoking). It also includes 'diagnostic measures' (the mechanic's computer telling you exactly which valve broke). By structuring metrics this way, AI teams can spot problems early and adjust course before a total system failure occurs."
        },
        {
          "id": "ai-workflows-201-l04-c3",
          "kind": "recap",
          "title": "Failure Taxonomy",
          "content": "When an AI fails, 'it broke' isn't a helpful diagnosis. We categorize failures into a taxonomy of four main groups: Data issues (bad inputs), Process problems (flawed logic steps), Execution errors (server crashes), and Governance challenges (misaligned goals). By classifying failures precisely, we can design targeted fixes. You wouldn't change the AI's prompt if the real issue was a server timeout!"
        }
      ],
      "flashcards": [
        {
          "id": "ai-workflows-201-l04-f1",
          "front": "Leading indicator",
          "back": "A metric that signals probable future outcomes before final results appear."
        },
        {
          "id": "ai-workflows-201-l04-f2",
          "front": "Failure taxonomy",
          "back": "A structured classification of failure types used to design targeted fixes."
        },
        {
          "id": "ai-workflows-201-l04-f3",
          "front": "Cost of error",
          "back": "The operational, financial, or social impact caused by an incorrect AI decision."
        }
      ],
      "imageUrl": "/generated-images/refinery/ai-workflows-201-l04.png"
    },
    {
      "id": "ai-workflows-201-l05",
      "title": "Case Studio: Improve an AI Workflows System",
      "type": "interactive",
      "duration": 16,
      "lessonImagePrompt": "Imagen 4 prompt: A modern collaborative workspace hologram showing a 3D model of an AI system being optimized. Floating digital notes and intervention strategies, bright and inspiring, cinematic lighting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic visualization of an AI system evolving. The camera orbits a central glowing core as new, optimized pathways form around it, replacing old, inefficient ones. Bright, energetic lighting, seamless looping motion.",
      "learningAids": [
        {
          "id": "ai-workflows-201-l05-a1",
          "type": "framework",
          "title": "The Accountability Framework",
          "content": "When proposing an improvement, always define the 'Who, What, When, and How to Measure'. An idea without an owner and a deadline is just a wish."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-201-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "In this interactive case study, you will act as the lead AI Engineer. You'll be given a realistic scenario of a failing AI workflow and must break it down into key components. What is the main objective? What are the constraints limiting your options? You will explore various intervention strategies, paying close attention to trade-offs. Remember, in complex systems, improving one metric (like speed) often negatively impacts another (like accuracy)."
        },
        {
          "id": "ai-workflows-201-l05-c2",
          "kind": "practice",
          "title": "Improvement Proposal",
          "content": "After analyzing the case, you will draft a structured improvement proposal. This isn't just a list of ideas; it must include clear criteria for success, a mapping of who is responsible for implementing the fix, and a timeline for follow-up actions. This structured approach bridges the gap between theoretical problem-solving and actionable engineering, ensuring your fixes actually make it into production."
        },
        {
          "id": "ai-workflows-201-l05-c3",
          "kind": "recap",
          "title": "Communicating Trade-offs",
          "content": "The final step in any system improvement is communication. You must be able to explain your proposed changes to both technical peers and non-technical stakeholders. This means translating complex metrics into business impact. If you propose adding a new checkpoint gate that slows down the workflow by 2 seconds, you must clearly articulate how that 2-second delay prevents a critical failure that could cost the company thousands of dollars."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-workflows-201-l05-act1",
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
          "id": "ai-workflows-201-l05-act2",
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
      "imageUrl": "/generated-images/refinery/ai-workflows-201-l05.png"
    },
    {
      "id": "ai-workflows-201-l06",
      "title": "Checkpoint 2: Systems Reasoning",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing, intricate maze of light representing complex systems reasoning, with a clear, illuminated path leading to the center. High contrast, futuristic design, deep shadows and bright highlights.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A cinematic fly-through of a complex, glowing digital labyrinth. The camera smoothly navigates the turns, eventually rising above to reveal the entire interconnected system. High-end 3D motion graphics, 4k resolution.",
      "learningAids": [
        {
          "id": "ai-workflows-201-l06-a1",
          "type": "strategy",
          "title": "Test Strategy",
          "content": "Remember that constraints (time, money, data quality) always dictate the best method. The 'perfect' AI model is useless if you can't afford to run it!"
        }
      ],
      "questions": [
        {
          "id": "ai-workflows-201-l06-q1",
          "text": "When selecting a method for an AI workflow, what is the most important initial consideration?",
          "skillId": "ai-workflows-201-skill-methods",
          "options": [
            {
              "id": "a",
              "text": "Choosing the most complex algorithm available"
            },
            {
              "id": "b",
              "text": "Evaluating constraints like time limits and resource availability"
            },
            {
              "id": "c",
              "text": "Skipping directly to execution to save time"
            },
            {
              "id": "d",
              "text": "Ignoring the potential cost of errors"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Constraints dictate what is actually feasible, ensuring you don't design a system you cannot support or afford."
        },
        {
          "id": "ai-workflows-201-l06-q2",
          "text": "In a metric architecture, what is the primary purpose of a leading indicator?",
          "skillId": "ai-workflows-201-skill-metrics",
          "options": [
            {
              "id": "a",
              "text": "To show how the system performed in the past"
            },
            {
              "id": "b",
              "text": "To predict probable future outcomes before final results appear"
            },
            {
              "id": "c",
              "text": "To assign blame for a failed workflow"
            },
            {
              "id": "d",
              "text": "To replace all other forms of measurement"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Leading indicators act as early warning signs, allowing teams to adjust course before a failure actually occurs."
        },
        {
          "id": "ai-workflows-201-l06-q3",
          "text": "Why is it useful to categorize AI workflow failures into a taxonomy (e.g., data, process, execution)?",
          "skillId": "ai-workflows-201-skill-failure",
          "options": [
            {
              "id": "a",
              "text": "It allows teams to design specific, targeted fixes rather than guessing"
            },
            {
              "id": "b",
              "text": "It makes the documentation look more professional"
            },
            {
              "id": "c",
              "text": "It guarantees that the failure will never happen again"
            },
            {
              "id": "d",
              "text": "It shifts accountability away from the engineering team"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A taxonomy helps isolate the root cause, ensuring the intervention actually solves the underlying problem instead of just treating a symptom."
        },
        {
          "id": "ai-workflows-201-l06-q4",
          "text": "When proposing an improvement to an AI system, what must always be included to ensure accountability?",
          "skillId": "ai-workflows-201-skill-improvement",
          "options": [
            {
              "id": "a",
              "text": "A request for unlimited budget"
            },
            {
              "id": "b",
              "text": "Clear success criteria and a timeline for follow-up actions"
            },
            {
              "id": "c",
              "text": "A list of generic solutions without specific owners"
            },
            {
              "id": "d",
              "text": "A guarantee of 100% accuracy"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Success criteria and timelines ensure that the proposed improvement is measurable, assigned to an owner, and actually gets implemented."
        }
      ],
      "imageUrl": "/generated-images/refinery/ai-workflows-201-l06.png"
    }
  ]
};
