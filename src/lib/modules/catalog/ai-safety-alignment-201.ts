import type { LearningModule } from "@/lib/modules/types";

export const ai_safety_alignment_201_Module: LearningModule = {
  "id": "ai-safety-alignment-201",
  "title": "AI Safety and Alignment Applied Practice",
  "description": "Level 201 curriculum in AI Safety and Alignment, focused on risk modeling, alignment objectives, evaluation harnesses, and governance controls, with rigorous scenario analysis and assessment-backed mastery.",
  "subject": "AI Ethics",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "ai",
    "safety"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Explain and apply risk modeling using clear assumptions and constraints",
    "Build repeatable workflows for alignment objectives with measurable checkpoints",
    "Evaluate evaluation harnesses outcomes against baseline and target metrics",
    "Use governance patterns to improve governance controls decision quality",
    "Communicate tradeoffs across technical, policy, and user-impact dimensions",
    "Synthesize AI Safety and Alignment methods into defensible recommendations"
  ],
  "lessons": [
    {
      "id": "ai-safety-alignment-201-l01",
      "title": "AI Safety and Alignment Core Concepts",
      "type": "video",
      "duration": 13,
      "lessonImagePrompt": "Imagen 4 prompt: A cinematic, highly detailed 3D render of a glowing digital boundary surrounding a complex neural network, symbolizing safety constraints and alignment in artificial intelligence. Soft blue and gold lighting, photorealistic.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic 3D animation panning over a futuristic digital city where glowing pathways represent causal structures. Safe routes illuminate in bright green, while unsafe routes are blocked by glowing red energy shields, demonstrating system boundaries. 4k resolution, smooth cinematic motion.",
      "learningAids": [
        {
          "id": "ai-safety-alignment-201-l01-a1",
          "type": "image",
          "title": "Vocabulary Anchor",
          "content": "Always define your system boundaries first. If you don't know where the AI's influence stops, you cannot accurately model its risks."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-201-l01-c1",
          "kind": "concept",
          "title": "Vocabulary and System Boundaries",
          "content": "Welcome to AI Safety! First, we need a shared vocabulary to discuss complex concepts clearly. We will define the specific boundaries within which AI systems operate. Knowing exactly where an AI's influence begins and ends is crucial for understanding its limitations and accurately modeling potential risks in the real world."
        },
        {
          "id": "ai-safety-alignment-201-l01-c2",
          "kind": "concept",
          "title": "Causal Structures and Constraints",
          "content": "Next, we'll map out 'causal paths'—tracing the domino effect from an AI's action to a real-world outcome. We will also identify hidden assumptions that might skew our understanding. Before suggesting any changes to an AI system, we must apply strict checks to our constraints, ensuring our safety ideas are grounded in reality and technically feasible."
        },
        {
          "id": "ai-safety-alignment-201-l01-c3",
          "kind": "recap",
          "title": "Evidence Discipline",
          "content": "This module introduces an 'evidence-first workflow.' This means every safety claim must be backed by measurable data, not just good intentions. We will also discuss 'expected uncertainty,' which helps us understand that not all outcomes can be predicted perfectly, making continuous monitoring an absolute necessity."
        }
      ],
      "flashcards": [
        {
          "id": "ai-safety-alignment-201-l01-f1",
          "front": "Risk Modeling",
          "back": "A core mechanism in AI Safety requiring explicit assumptions and measurable controls to predict potential failures."
        },
        {
          "id": "ai-safety-alignment-201-l01-f2",
          "front": "Alignment Objectives",
          "back": "Operational practices that convert high-level ethical strategies into reliable, measurable execution."
        },
        {
          "id": "ai-safety-alignment-201-l01-f3",
          "front": "Evaluation Harnesses",
          "back": "The testing and evaluation layer that determines whether safety interventions truly improve system outcomes."
        }
      ]
    },
    {
      "id": "ai-safety-alignment-201-l02",
      "title": "AI Safety and Alignment Methods Lab",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: A high-tech laboratory workbench featuring holographic blueprints of AI workflows. Glowing nodes connect to form a secure, optimized sequence. Photorealistic, vibrant colors, depth of field.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A time-lapse animation of a digital workflow being constructed block by block. As the blocks connect, simulated stress-tests represented by bursts of red energy hit the structure, which adapts and reinforces itself with glowing blue shields. High frame rate, sleek digital aesthetic.",
      "learningAids": [
        {
          "id": "ai-safety-alignment-201-l02-a1",
          "type": "practice",
          "title": "Method Sequencing",
          "content": "Think of method sequencing like building a bridge. You must lay the foundation (baselines) before you build the supports (stress tests) and open it to traffic (release)."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-201-l02-c1",
          "kind": "practice",
          "title": "Method Sequence Construction",
          "content": "In this lab, you'll build a step-by-step safety workflow. Think of it as designing a safety net optimized for effective execution. After building your sequence, you will stress-test each step to see how it holds up under conditions of uncertainty, ensuring your safety methods are robust, adaptable, and ready for the real world."
        },
        {
          "id": "ai-safety-alignment-201-l02-c2",
          "kind": "recap",
          "title": "Operational Readiness Checks",
          "content": "To ensure our methods are ready, we conduct operational readiness checks. This involves mapping out exactly who is responsible for each part of the process, identifying 'triggers' that would prompt us to shut down or revert the system, and maintaining strict logs of evidence. These checks confirm that all safety nets are in place before deployment."
        },
        {
          "id": "ai-safety-alignment-201-l02-c3",
          "kind": "concept",
          "title": "Iterative Refinement",
          "content": "Once your initial sequence is built and tested, the next step is iterative refinement. No safety method is perfect on the first try. By analyzing the results of your stress tests, you can adjust parameters, add new baselines, or tighten constraints, ensuring the workflow becomes progressively more resilient over time."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-safety-alignment-201-l02-act1",
          "type": "matching_pairs",
          "title": "Method-to-Outcome Mapping",
          "description": "Match each design choice to the strongest expected system effect.",
          "pairs": [
            {
              "left": "Pre-release stress tests",
              "right": "Lower severe failure probability"
            },
            {
              "left": "Checkpoint gating",
              "right": "Prevents defect propagation"
            },
            {
              "left": "Baseline comparison",
              "right": "Supports defensible impact claims"
            },
            {
              "left": "Retrospective review",
              "right": "Improves next-iteration decisions"
            }
          ]
        },
        {
          "id": "ai-safety-alignment-201-l02-act2",
          "type": "sorting_buckets",
          "title": "Constraint Sorting",
          "description": "Sort constraints into technical, policy, and user-impact categories.",
          "buckets": [
            "Technical",
            "Policy",
            "User Impact"
          ],
          "items": [
            {
              "text": "Latency budget",
              "bucket": "Technical"
            },
            {
              "text": "Audit retention requirement",
              "bucket": "Policy"
            },
            {
              "text": "Accessibility burden",
              "bucket": "User Impact"
            },
            {
              "text": "Human review threshold",
              "bucket": "Policy"
            }
          ]
        }
      ]
    },
    {
      "id": "ai-safety-alignment-201-l03",
      "title": "Checkpoint 1: Core Methods",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A sleek, futuristic checkpoint gate with glowing green checkmarks and holographic data streams, representing a successful validation of knowledge. Crisp, clean vector-style 3D render.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A smooth, first-person fly-through of a digital tunnel. As correct answers are selected, the tunnel illuminates with bright, guiding lights, clearing the path forward through complex data structures. Seamless looping motion, glowing neon accents.",
      "learningAids": [
        {
          "id": "ai-safety-alignment-201-l03-a1",
          "type": "practice",
          "title": "Quiz Strategy",
          "content": "Read each scenario carefully. Ask yourself: 'Which option provides the most measurable, evidence-based approach to safety?'"
        }
      ],
      "questions": [
        {
          "id": "ai-safety-alignment-201-l03-q1",
          "text": "Which practice most strengthens risk modeling in real deployments?",
          "skillId": "ai-safety-alignment-201-skill-risk",
          "options": [
            {
              "id": "a",
              "text": "Relying solely on post-incident user reports"
            },
            {
              "id": "b",
              "text": "Defining failure criteria and monitoring leading indicators"
            },
            {
              "id": "c",
              "text": "Optimizing the model for maximum speed over accuracy"
            },
            {
              "id": "d",
              "text": "Keeping safety metrics confidential to prevent gaming"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Explicit failure criteria and leading indicators improve early detection and response, which is the core of effective risk modeling."
        },
        {
          "id": "ai-safety-alignment-201-l03-q2",
          "text": "At level 201, AI Safety and Alignment work should prioritize:",
          "skillId": "ai-safety-alignment-201-skill-level",
          "options": [
            {
              "id": "a",
              "text": "Method execution, workflow reliability, and scenario interpretation"
            },
            {
              "id": "b",
              "text": "Theoretical debates about artificial general intelligence (AGI)"
            },
            {
              "id": "c",
              "text": "Writing code for new neural network architectures"
            },
            {
              "id": "d",
              "text": "Maximizing shareholder value above all else"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The 201 sequence is designed around practical method execution, workflow reliability, and interpreting complex scenarios."
        },
        {
          "id": "ai-safety-alignment-201-l03-q3",
          "text": "What is the strongest indicator of healthy alignment objectives?",
          "skillId": "ai-safety-alignment-201-skill-ops",
          "options": [
            {
              "id": "a",
              "text": "A high volume of manual, undocumented interventions"
            },
            {
              "id": "b",
              "text": "Clear owner mapping, review cadence, and measurable thresholds"
            },
            {
              "id": "c",
              "text": "A zero-tolerance policy for any system errors"
            },
            {
              "id": "d",
              "text": "Frequent changes to the core ethical guidelines"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Stable systems require clear ownership, a predictable decision cadence, and measurable controls to ensure alignment."
        },
        {
          "id": "ai-safety-alignment-201-l03-q4",
          "text": "When improving evaluation harnesses, which approach is most defensible?",
          "skillId": "ai-safety-alignment-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Highlighting only the scenarios where the AI succeeds"
            },
            {
              "id": "b",
              "text": "Comparing against baselines and including rigorous failure analysis"
            },
            {
              "id": "c",
              "text": "Removing edge cases that the model consistently fails"
            },
            {
              "id": "d",
              "text": "Using purely qualitative feedback from the development team"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Baselines and failure analysis reduce bias and reveal the true performance and safety of the system."
        },
        {
          "id": "ai-safety-alignment-201-l03-q5",
          "text": "A mature governance controls strategy should include:",
          "skillId": "ai-safety-alignment-201-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "A single, centralized decision-maker for all AI projects"
            },
            {
              "id": "b",
              "text": "Policy, measurement, and escalation pathways linked to impact tiers"
            },
            {
              "id": "c",
              "text": "Governance reviews only after a critical failure has occurred"
            },
            {
              "id": "d",
              "text": "Complete separation between technical metrics and policy decisions"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Effective governance connects policy intent directly to measurement and predefined response actions based on severity."
        }
      ]
    },
    {
      "id": "ai-safety-alignment-201-l04",
      "title": "AI Safety and Alignment Case Analysis",
      "type": "video",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: A split-screen visual: on the left, a student happily interacting with a glowing, helpful AI interface; on the right, a subtle red warning symbol highlighting a hidden data error. Cinematic lighting, highly detailed, photorealistic.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic infographic animation showing a decision tradeoff matrix. Sliders for 'Performance', 'Cost', and 'Equity' move up and down, demonstrating how adjusting one variable impacts the others in real-time. Clean corporate design, smooth transitions.",
      "learningAids": [
        {
          "id": "ai-safety-alignment-201-l04-a1",
          "type": "mnemonic",
          "title": "Tradeoff Matrix",
          "content": "Remember the acronym PACE: Performance, Accessibility, Cost, Equity. Evaluate every AI intervention against these four pillars."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-201-l04-c1",
          "kind": "example",
          "title": "Case Setup and Stakes",
          "content": "Imagine an AI tutor that helps students but occasionally 'hallucinates' or makes up facts. In this case study, we'll analyze the real-world stakes of these errors. You will develop the skills to distinguish between solid evidence and mere assumptions, exploring the serious risks that arise from relying on inaccurate information in high-stakes environments like education."
        },
        {
          "id": "ai-safety-alignment-201-l04-c2",
          "kind": "concept",
          "title": "Decision Tradeoff Matrix",
          "content": "To solve complex AI safety issues, we use a decision tradeoff matrix. This tool helps us evaluate different intervention alternatives systematically. Each option is scored based on criteria including performance, reliability, cost, and implications for equity among different user groups. This ensures we make informed, balanced decisions rather than just picking the easiest technical fix."
        },
        {
          "id": "ai-safety-alignment-201-l04-c3",
          "kind": "recap",
          "title": "Lessons from Failure Modes",
          "content": "We will categorize the different failure patterns—or 'failure modes'—observed in AI systems. By doing this, we transform one-off incidents into reusable design safeguards. Instead of viewing failures as isolated bad luck, we treat them as valuable data points that help us engineer stronger, more resilient systems for the future."
        }
      ],
      "flashcards": [
        {
          "id": "ai-safety-alignment-201-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured framework used to compare options across competing priorities (like cost vs. equity) before choosing an intervention."
        },
        {
          "id": "ai-safety-alignment-201-l04-f2",
          "front": "Failure Mode",
          "back": "A repeatable pattern describing exactly how and why systems break under real-world constraints."
        },
        {
          "id": "ai-safety-alignment-201-l04-f3",
          "front": "Escalation Threshold",
          "back": "A predefined condition or metric that, when met, automatically triggers higher-level review or corrective action."
        }
      ]
    },
    {
      "id": "ai-safety-alignment-201-l05",
      "title": "AI Safety and Alignment Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "lessonImagePrompt": "Imagen 4 prompt: A futuristic control room with large, curved holographic screens displaying simulation data, policy metrics, and global network maps. High-tech, immersive atmosphere, volumetric lighting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced animation of data packets flowing through a complex network. Suddenly, an anomaly occurs; the system pauses, a 'Decision Review Loop' graphic appears, and the network reroutes safely based on new policy rules. Cyberpunk aesthetic, glowing data streams.",
      "learningAids": [
        {
          "id": "ai-safety-alignment-201-l05-a1",
          "type": "practice",
          "title": "Simulation Mindset",
          "content": "Treat every simulation as a real-world deployment. If your metrics drift in the simulation, they will fail in reality. Always define your success metrics before hitting 'run'."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-201-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "Welcome to the Simulation Studio! Here, you'll test AI models in safe, simulated environments before they face the real world. You will set up a scenario model that includes clear assumptions about uncertainties and defines success metrics directly linked to governance controls. This allows you to safely explore how variables like user load or data quality influence outcomes."
        },
        {
          "id": "ai-safety-alignment-201-l05-c2",
          "kind": "recap",
          "title": "Decision Review Loop",
          "content": "At the end of each simulation round, you will conduct a decision review loop. This vital step involves reviewing the evidence gathered, checking it against established safety policies, and identifying specific actions for improvement. This reflective, iterative process is the heartbeat of continuous learning and adaptation in AI safety."
        },
        {
          "id": "ai-safety-alignment-201-l05-c3",
          "kind": "concept",
          "title": "Analyzing Simulation Data",
          "content": "Running the simulation is only half the battle; the real value lies in analyzing the data it produces. You will learn to spot subtle metric drifts and correlate them with specific policy choices. This analytical skill allows you to pinpoint exactly where an AI system might fail before it ever reaches the public."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-safety-alignment-201-l05-act1",
          "type": "scenario_practice",
          "title": "Policy and Operations Simulation",
          "description": "Run three intervention strategies and justify which option best advances risk modeling and governance controls.",
          "instructions": [
            "Define the primary objective and guardrails before choosing an intervention.",
            "Record one tradeoff created by each intervention.",
            "Select a follow-up metric that confirms whether the choice was successful."
          ]
        },
        {
          "id": "ai-safety-alignment-201-l05-act2",
          "type": "matching_pairs",
          "title": "Mitigation Mapping",
          "description": "Match each failure condition with the strongest mitigation response.",
          "pairs": [
            {
              "left": "Unreliable input stream",
              "right": "Introduce quality contracts and quarantine checks"
            },
            {
              "left": "Policy ambiguity",
              "right": "Define decision authority and escalation rules"
            },
            {
              "left": "Metric drift",
              "right": "Re-baseline and monitor leading indicators"
            },
            {
              "left": "User trust decline",
              "right": "Increase transparency and corrective feedback loops"
            }
          ]
        }
      ]
    },
    {
      "id": "ai-safety-alignment-201-l06",
      "title": "Checkpoint 2: Systems and Decisions",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing digital scale perfectly balancing a glowing brain representing AI innovation and a shield representing safety and ethics. Photorealistic, dramatic lighting, macro photography style.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A conceptual animation of glowing puzzle pieces representing ethics, policy, and technical constraints flying together to form a solid, unbreakable shield. 4k resolution, dynamic camera angles, particle effects.",
      "learningAids": [
        {
          "id": "ai-safety-alignment-201-l06-a1",
          "type": "practice",
          "title": "Reviewing Tradeoffs",
          "content": "Recall the Tradeoff Matrix and Mitigation Mapping. Every AI decision involves balancing competing priorities. Look for the answer that acknowledges and manages these tradeoffs."
        }
      ],
      "questions": [
        {
          "id": "ai-safety-alignment-201-l06-q1",
          "text": "What is the primary purpose of a decision tradeoff matrix in AI safety?",
          "skillId": "ai-safety-alignment-201-skill-tradeoff",
          "options": [
            {
              "id": "a",
              "text": "To guarantee that all potential risks are eliminated before launch"
            },
            {
              "id": "b",
              "text": "To systematically compare options across competing priorities like performance and equity"
            },
            {
              "id": "c",
              "text": "To automate the ethical approval process for new AI models"
            },
            {
              "id": "d",
              "text": "To obscure system flaws from end-users and regulators"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix provides a structured way to evaluate how improving one area (like performance) might negatively impact another (like cost or equity)."
        },
        {
          "id": "ai-safety-alignment-201-l06-q2",
          "text": "How should failure modes be treated in a mature AI safety environment?",
          "skillId": "ai-safety-alignment-201-skill-failure-modes",
          "options": [
            {
              "id": "a",
              "text": "As isolated incidents to be quickly patched and forgotten"
            },
            {
              "id": "b",
              "text": "As repeatable patterns used to develop reusable design safeguards"
            },
            {
              "id": "c",
              "text": "As proof that the AI system should be permanently shut down"
            },
            {
              "id": "d",
              "text": "As confidential data that should be hidden from the safety team"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Analyzing failure modes allows teams to understand how systems break under constraints and build robust, reusable safeguards against future occurrences."
        },
        {
          "id": "ai-safety-alignment-201-l06-q3",
          "text": "During a decision review loop, what is the most critical action after gathering simulation evidence?",
          "skillId": "ai-safety-alignment-201-skill-review-loop",
          "options": [
            {
              "id": "a",
              "text": "Checking for alignment with established policies and identifying corrective actions"
            },
            {
              "id": "b",
              "text": "Immediately deploying the model to production to gather real user data"
            },
            {
              "id": "c",
              "text": "Deleting the simulation logs to save storage space and reduce liability"
            },
            {
              "id": "d",
              "text": "Adjusting the success metrics so the simulation appears successful"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The review loop is designed to compare actual evidence against policy requirements to ensure the system remains aligned and safe."
        },
        {
          "id": "ai-safety-alignment-201-l06-q4",
          "text": "If an AI system suffers from an unreliable input stream, what is the strongest mitigation response?",
          "skillId": "ai-safety-alignment-201-skill-mitigation",
          "options": [
            {
              "id": "a",
              "text": "Increase the processing speed to handle the bad data faster"
            },
            {
              "id": "b",
              "text": "Rely on the AI model's internal logic to automatically correct the data"
            },
            {
              "id": "c",
              "text": "Introduce quality contracts and quarantine checks for incoming data"
            },
            {
              "id": "d",
              "text": "Lower the transparency of the system to avoid alarming users"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Quality contracts and quarantine checks act as a filter, preventing bad data from corrupting the AI's outputs."
        },
        {
          "id": "ai-safety-alignment-201-l06-q5",
          "text": "Why is it important to define escalation rules in AI governance?",
          "skillId": "ai-safety-alignment-201-skill-escalation",
          "options": [
            {
              "id": "a",
              "text": "To ensure developers are financially penalized for their mistakes"
            },
            {
              "id": "b",
              "text": "To establish clear decision authority when policy ambiguity or critical failures occur"
            },
            {
              "id": "c",
              "text": "To bypass legal and compliance requirements during an emergency"
            },
            {
              "id": "d",
              "text": "To intentionally slow down the deployment process to frustrate competitors"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Escalation rules provide a clear, pre-planned pathway for decision-making when unexpected or severe issues arise, preventing panic and confusion."
        }
      ]
    },
    {
      "id": "ai-safety-alignment-201-l07",
      "title": "AI Safety and Alignment Ethics, Policy, and Public Impact",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A diverse group of people represented as glowing silhouettes within a vast digital network, highlighting the human connections and stakeholder impact of AI. Warm, inviting colors, soft focus background.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A visual map expanding outward from a central AI core. Concentric circles ripple outward, illuminating different communities and sectors, demonstrating the widespread public impact of AI deployment. Elegant data visualization, smooth scaling animation.",
      "learningAids": [
        {
          "id": "ai-safety-alignment-201-l07-a1",
          "type": "image",
          "title": "Stakeholder Mapping",
          "content": "Always ask: 'Who is not in the room?' The most severe AI risks often fall on marginalized or unrepresented stakeholders."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-201-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Analysis",
          "content": "Who really bears the risk when an AI fails? In this lesson, we'll map out all the stakeholders—especially those who might be overlooked. This involves identifying exactly who benefits from an AI system, who might bear the hidden risks, and how different policy choices shape outcomes for various groups. Understanding these human dynamics is crucial for fairness."
        },
        {
          "id": "ai-safety-alignment-201-l07-c2",
          "kind": "concept",
          "title": "Governance and Accountability",
          "content": "We will explore the governance and accountability mechanisms essential for managing AI systems at scale. These mechanisms must be linked to measurable controls, ensuring transparency and establishing clear pathways for remediation when issues arise. True accountability means knowing exactly who is responsible when an AI system makes a mistake."
        },
        {
          "id": "ai-safety-alignment-201-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "Before making any final decisions about deploying an AI system, it is crucial to use a comprehensive 'Responsible Execution Checklist.' This checklist evaluates legal requirements, ethical considerations, technical specifications, and potential user impacts. By rigorously applying this checklist, we ensure our deployments are not just technically sound, but socially responsible."
        }
      ],
      "flashcards": [
        {
          "id": "ai-safety-alignment-201-l07-f1",
          "front": "Stakeholder Map",
          "back": "A framework that tracks how the impacts (both positive and negative) of an AI system are distributed across affected groups."
        },
        {
          "id": "ai-safety-alignment-201-l07-f2",
          "front": "Accountability Loop",
          "back": "A continuous cycle connecting system outcomes, human ownership, and corrective action."
        },
        {
          "id": "ai-safety-alignment-201-l07-f3",
          "front": "Responsible Execution",
          "back": "A delivery practice that refuses to compromise safety, fairness, and transparency for the sake of raw performance."
        }
      ]
    },
    {
      "id": "ai-safety-alignment-201-l08",
      "title": "AI Safety and Alignment Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing, holographic blueprint of a comprehensive AI safety charter resting on a sleek digital drafting table. High contrast, professional and futuristic aesthetic, sharp details.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A cinematic zoom-out starting from a single line of code or metric, expanding rapidly to reveal a massive, interconnected AI governance dashboard monitoring global systems in real-time. Epic scale, high-tech UI elements.",
      "learningAids": [
        {
          "id": "ai-safety-alignment-201-l08-a1",
          "type": "practice",
          "title": "Defensible Claims",
          "content": "A claim without evidence is just an opinion. In your capstone, ensure every safety claim you make is backed by a specific, measurable metric."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-201-l08-c1",
          "kind": "practice",
          "title": "Capstone Scope Definition",
          "content": "It's time to bring it all together. You'll draft a Capstone Charter, outlining your own AI safety project with strict metrics and ethical guardrails. This charter will identify potential risks, establish hard metrics for measuring success, and include governance checkpoints to ensure the project stays aligned with ethical standards."
        },
        {
          "id": "ai-safety-alignment-201-l08-c2",
          "kind": "recap",
          "title": "Defense Preparation",
          "content": "To conclude the module, you will use a defense preparation template. This tool guides you in making safety claims supported by hard evidence and requires you to explicitly explain the trade-offs you accepted. This rigorous process ensures you can articulate your reasoning clearly and defend your AI safety decisions to stakeholders, policymakers, and the public."
        },
        {
          "id": "ai-safety-alignment-201-l08-c3",
          "kind": "concept",
          "title": "Peer Review and Feedback",
          "content": "Before finalizing your capstone, you will engage in a peer review process. Presenting your charter to others exposes blind spots and hidden biases in your risk modeling. Constructive feedback is a cornerstone of AI safety, ensuring that your final defense is robust, well-rounded, and ready for real-world scrutiny."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-safety-alignment-201-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a one-page capstone charter with metrics, controls, and success criteria.",
          "instructions": [
            "State the primary objective and boundary conditions.",
            "Define at least three measurable success indicators.",
            "Identify one ethical or policy risk and mitigation plan."
          ]
        },
        {
          "id": "ai-safety-alignment-201-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Drill",
          "description": "Defend your capstone approach against simulated critiques focusing on cost, risk, and equity.",
          "instructions": [
            "Review the simulated critique of your capstone charter.",
            "Formulate a defense using your defined metrics and tradeoff matrix.",
            "Submit your response for peer or mentor review."
          ]
        }
      ]
    }
  ]
};
