import type { LearningModule } from "@/lib/modules/types";

export const ai_safety_alignment_301_Module: LearningModule = {
  "id": "ai-safety-alignment-301",
  "title": "AI Safety and Alignment Systems and Governance",
  "description": "Level 301 curriculum in AI Safety and Alignment, focused on risk modeling, alignment objectives, evaluation harnesses, and governance controls, with rigorous scenario analysis and assessment-backed mastery.",
  "subject": "AI Ethics",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "ai",
    "safety"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
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
      "id": "ai-safety-alignment-301-l01",
      "title": "AI Safety and Alignment Core Concepts",
      "type": "video",
      "duration": 13,
      "lessonImagePrompt": "Imagen 4 prompt: A cinematic, high-tech conceptual illustration of AI safety boundaries. Glowing digital nodes forming a neural network, contained within a crisp, glowing geometric shield. Deep blue and cyan color palette, volumetric lighting, 8k resolution, photorealistic, highly detailed.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic 3D animation showing a complex neural network of glowing data points. A translucent, protective geometric barrier smoothly forms around the network, symbolizing safety constraints. The camera slowly pans around the structure, with soft depth of field, cinematic lighting, and fluid temporal consistency. High fidelity, sleek corporate tech aesthetic.",
      "learningAids": [
        {
          "id": "ai-safety-alignment-301-l01-a1",
          "type": "image",
          "title": "Vocabulary Guide",
          "content": "Keep a running list of terms like 'Causal Structures' and 'Evidence Discipline' to anchor your understanding of system boundaries."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-301-l01-c1",
          "kind": "concept",
          "title": "Vocabulary and System Boundaries",
          "content": "Welcome to AI Safety 301. In this lesson, we will establish a shared vocabulary essential for navigating AI Safety and Alignment. Defining the boundaries within which AI systems operate allows us to visualize how risk assessment and alignment goals intersect in real-world deployments. Mastery of these concepts is the foundation for effective collaboration in AI governance.\nContext recap: Establishing a precise vocabulary and defining system boundaries are the first steps in aligning AI behavior with human intent and safety protocols."
        },
        {
          "id": "ai-safety-alignment-301-l01-c2",
          "kind": "concept",
          "title": "Causal Structures and Constraints",
          "content": "You will explore how to model causal relationships within complex systems. This involves identifying hidden assumptions and applying rigorous checks to constraints before proposing interventions, ensuring that solutions are evidence-based and structurally sound.\nContext recap: Modeling causal structures helps uncover hidden assumptions, allowing practitioners to test constraints and predict the downstream effects of AI interventions."
        },
        {
          "id": "ai-safety-alignment-301-l01-c3",
          "kind": "recap",
          "title": "Evidence Discipline",
          "content": "This module introduces a methodical approach prioritizing evidence in decision-making. Every claim must connect to observable indicators, allowing us to quantify uncertainty and make informed, reality-grounded decisions in high-stakes AI environments.\nContext recap: Evidence discipline requires linking safety claims to measurable indicators, reducing uncertainty and grounding governance decisions in empirical data."
        }
      ],
      "flashcards": [
        {
          "id": "ai-safety-alignment-301-l01-f1",
          "front": "Risk Modeling",
          "back": "A core mechanism in AI Safety and Alignment requiring explicit assumptions and measurable controls."
        },
        {
          "id": "ai-safety-alignment-301-l01-f2",
          "front": "Alignment Objectives",
          "back": "Operational practices that convert high-level safety strategy into reliable, measurable execution."
        },
        {
          "id": "ai-safety-alignment-301-l01-f3",
          "front": "Evaluation Harnesses",
          "back": "The testing and evaluation layer that determines whether interventions truly improve system outcomes."
        }
      ]
    },
    {
      "id": "ai-safety-alignment-301-l02",
      "title": "AI Safety and Alignment Methods Lab",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: A modern digital workspace interface showing a complex flowchart of AI methods. Nodes are connected by glowing lines, with metrics and graphs displayed on floating holographic panels. Dark mode UI, sleek and professional, 8k resolution, photorealistic.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A screen-recording style animation of a futuristic dashboard. The user interface dynamically connects different AI safety methods, showing real-time data flow and stress-test simulations. Graphs spike and stabilize as governance controls are applied. Smooth motion graphics, high-tech aesthetic, fluid transitions.",
      "learningAids": [
        {
          "id": "ai-safety-alignment-301-l02-a1",
          "type": "practice",
          "title": "Methodology Map",
          "content": "Sketch out the sequence of methods before applying them in the lab to visualize the trade-offs and operational readiness."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-301-l02-c1",
          "kind": "practice",
          "title": "Method Sequence Construction",
          "content": "In this interactive lab, you will construct a sequence of methods designed to balance competing system trade-offs. Focus will be placed on developing a robust metrics architecture and making informed governance decisions. By rigorously testing each step under uncertain conditions, you ensure your methods are reliable for real-world applications.\nContext recap: Constructing a method sequence involves balancing trade-offs, defining metrics, and stress-testing decisions under uncertainty to build robust AI safety protocols."
        },
        {
          "id": "ai-safety-alignment-301-l02-c2",
          "kind": "concept",
          "title": "Metrics Architecture",
          "content": "A robust metrics architecture bridges the gap between high-level safety goals and daily operations. You'll learn to design leading and lagging indicators that provide early warnings before a system fails, ensuring that your governance controls are proactive rather than reactive.\nContext recap: Effective metrics architecture provides the early warning signals necessary to maintain operational readiness and system safety."
        },
        {
          "id": "ai-safety-alignment-301-l02-c3",
          "kind": "recap",
          "title": "Operational Readiness Checks",
          "content": "To ensure systems are deployment-ready, we assess readiness through key operational factors. This includes mapping component ownership, establishing regular review checkpoints, identifying rollback triggers, and maintaining immutable evidence logs.\nContext recap: Operational readiness requires clear ownership, defined review cadences, rollback triggers, and comprehensive evidence logging to maintain system integrity."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-safety-alignment-301-l02-act1",
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
          "id": "ai-safety-alignment-301-l02-act2",
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
      "id": "ai-safety-alignment-301-l03",
      "title": "Checkpoint 1: Core Methods",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A minimalist, brightly lit examination room with a sleek digital tablet resting on a wooden desk. The tablet displays a glowing checkmark. Soft, natural lighting, photorealistic, highly detailed, 8k resolution.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A slow, smooth tracking shot over a futuristic digital tablet displaying a quiz interface. As the camera moves, a correct answer is selected, and a subtle, satisfying green glow emanates from the screen. Professional, calm, and academic atmosphere with realistic lighting reflections.",
      "learningAids": [
        {
          "id": "ai-safety-alignment-301-l03-a1",
          "type": "practice",
          "title": "Quiz Strategy",
          "content": "Eliminate options that rely on 'ad-hoc' or 'untracked' methods, as 301-level safety requires rigorous documentation and measurable controls."
        }
      ],
      "questions": [
        {
          "id": "ai-safety-alignment-301-l03-q1",
          "text": "Which practice most strengthens risk modeling in real deployments?",
          "skillId": "ai-safety-alignment-301-skill-risk",
          "options": [
            {
              "id": "a",
              "text": "Use assumptions without documenting them"
            },
            {
              "id": "b",
              "text": "Define failure criteria and monitor leading indicators"
            },
            {
              "id": "c",
              "text": "Evaluate outcomes only once per year"
            },
            {
              "id": "d",
              "text": "Avoid stress-testing edge cases"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Explicit failure criteria and leading indicators improve early detection and response."
        },
        {
          "id": "ai-safety-alignment-301-l03-q2",
          "text": "At level 301, AI Safety and Alignment work should prioritize:",
          "skillId": "ai-safety-alignment-301-skill-level",
          "options": [
            {
              "id": "a",
              "text": "System tradeoffs, metrics architecture, and governance decisions"
            },
            {
              "id": "b",
              "text": "Speed over traceability in all cases"
            },
            {
              "id": "c",
              "text": "No validation loops after release"
            },
            {
              "id": "d",
              "text": "Single-metric optimization without context"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The 301 sequence is designed around system tradeoffs, metrics architecture, and governance decisions."
        },
        {
          "id": "ai-safety-alignment-301-l03-q3",
          "text": "What is the strongest indicator of healthy alignment objectives?",
          "skillId": "ai-safety-alignment-301-skill-ops",
          "options": [
            {
              "id": "a",
              "text": "Untracked interventions and ad-hoc approvals"
            },
            {
              "id": "b",
              "text": "Clear owner mapping, review cadence, and measurable thresholds"
            },
            {
              "id": "c",
              "text": "Skipping post-incident analysis"
            },
            {
              "id": "d",
              "text": "Changing targets after observing results"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Stable systems require clear ownership, decision cadence, and measurable controls."
        },
        {
          "id": "ai-safety-alignment-301-l03-q4",
          "text": "When improving evaluation harnesses, which approach is most defensible?",
          "skillId": "ai-safety-alignment-301-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Use anecdotal wins as sole evidence"
            },
            {
              "id": "b",
              "text": "Compare against baselines and include failure analysis"
            },
            {
              "id": "c",
              "text": "Remove difficult test scenarios"
            },
            {
              "id": "d",
              "text": "Ignore lagging outcomes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Baselines and failure analysis reduce bias and reveal true system performance."
        },
        {
          "id": "ai-safety-alignment-301-l03-q5",
          "text": "A mature governance controls strategy should include:",
          "skillId": "ai-safety-alignment-301-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "No escalation path for critical defects"
            },
            {
              "id": "b",
              "text": "Policy, measurement, and escalation pathways linked to impact tiers"
            },
            {
              "id": "c",
              "text": "One-time governance review only"
            },
            {
              "id": "d",
              "text": "Separation between metrics and decisions"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Effective governance connects policy intent to measurement and response action."
        }
      ]
    },
    {
      "id": "ai-safety-alignment-301-l04",
      "title": "AI Safety and Alignment Case Analysis",
      "type": "video",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: A split-screen conceptual image. On the left, a glowing, orderly AI data stream. On the right, the stream fractures into chaotic red sparks, symbolizing a failure mode. High contrast, dramatic lighting, 8k resolution, photorealistic.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic visual metaphor of a decision matrix. Floating translucent blocks representing different AI interventions arrange themselves on a grid. Some blocks glow green (safe), while others turn amber (tradeoff) or red (risk). The camera glides smoothly through the grid, highlighting the complexity of AI governance choices with cinematic depth of field.",
      "learningAids": [
        {
          "id": "ai-safety-alignment-301-l04-a1",
          "type": "mnemonic",
          "title": "Tradeoff Matrix Focus",
          "content": "When analyzing cases, always weigh performance against equity and reliability. No single metric tells the whole story."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-301-l04-c1",
          "kind": "example",
          "title": "Case Setup and Stakes",
          "content": "In this case study, we analyze the deployment of an LLM-based educational assistant. While highly capable of generating convincing responses, the system occasionally hallucinates facts. We will explore the critical need to distinguish between empirical evidence and model assumptions, and evaluate the severe risks of over-reliance on unverified AI outputs in learning environments.\nContext recap: Analyzing real-world deployments, such as educational AI assistants, highlights the stakes of AI hallucinations and the necessity of verifying model outputs against empirical evidence."
        },
        {
          "id": "ai-safety-alignment-301-l04-c2",
          "kind": "concept",
          "title": "Decision Tradeoff Matrix",
          "content": "We will evaluate intervention alternatives using a decision tradeoff matrix. Each option is scored against criteria including performance, reliability, computational cost, and equity implications. This systematic approach ensures that intervention paths are chosen based on holistic, defensible data rather than isolated metrics.\nContext recap: A decision tradeoff matrix allows practitioners to systematically score and compare AI interventions across competing priorities like performance, cost, and equity."
        },
        {
          "id": "ai-safety-alignment-301-l04-c3",
          "kind": "recap",
          "title": "Lessons from Failure Modes",
          "content": "By categorizing patterns of failure, we transform isolated incidents into reusable design safeguards. Analyzing these failure modes allows us to anticipate edge cases and engineer robust fallback mechanisms, ultimately enhancing the reliability and safety of AI systems.\nContext recap: Understanding failure modes is crucial for proactive AI safety. It shifts the focus from reacting to individual errors to engineering systemic safeguards against repeatable failure patterns."
        }
      ],
      "flashcards": [
        {
          "id": "ai-safety-alignment-301-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured framework used to compare intervention options across competing priorities before making a deployment decision."
        },
        {
          "id": "ai-safety-alignment-301-l04-f2",
          "front": "Failure Mode",
          "back": "A repeatable pattern describing how systems break or degrade under real-world constraints."
        },
        {
          "id": "ai-safety-alignment-301-l04-f3",
          "front": "Escalation Threshold",
          "back": "A predefined metric condition that automatically triggers higher-level human review or corrective action."
        }
      ]
    },
    {
      "id": "ai-safety-alignment-301-l05",
      "title": "AI Safety and Alignment Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "lessonImagePrompt": "Imagen 4 prompt: A futuristic command center with multiple holographic displays showing global AI deployment simulations. Maps, graphs, and code snippets float in the air. Cool blue and purple lighting, highly detailed, cinematic, 8k resolution.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A first-person perspective moving smoothly through a virtual simulation studio. Holographic screens display AI models running through various stress tests. As parameters are adjusted on a virtual console, the simulation outcomes update in real-time, showing fluid shifts from unstable red states to stable blue states. High-end visual effects.",
      "learningAids": [
        {
          "id": "ai-safety-alignment-301-l05-a1",
          "type": "practice",
          "title": "Simulation Tip",
          "content": "Change only one variable at a time during your simulation to accurately isolate its impact on system stability and governance outcomes."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-301-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this simulation studio, you will configure a detailed scenario model incorporating specific assumptions about uncertainty. By defining success metrics tightly coupled with governance controls, you will observe how interacting variables affect system stability and alignment outcomes in a controlled environment.\nContext recap: Setting up a simulation requires explicit modeling of uncertainty and defining success metrics tied to governance, allowing for safe observation of complex system interactions."
        },
        {
          "id": "ai-safety-alignment-301-l05-c2",
          "kind": "concept",
          "title": "Decision Review Loop",
          "content": "Following each simulation round, a rigorous review of the collected evidence is conducted. This involves auditing the outcomes against established safety policies, identifying metric drift, and formulating corrective actions to refine the intervention strategy.\nContext recap: The decision review loop is a critical post-simulation process where evidence is audited against policy, ensuring continuous refinement of AI safety strategies."
        },
        {
          "id": "ai-safety-alignment-301-l05-c3",
          "kind": "recap",
          "title": "Iterative Refinement",
          "content": "Simulation isn't a one-and-done process. You'll practice taking the insights from your decision review loop to iteratively tweak model weights, constraints, and governance thresholds until the system stabilizes.\nContext recap: Iterative refinement uses simulation data to continuously improve system constraints and governance thresholds."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-safety-alignment-301-l05-act1",
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
          "id": "ai-safety-alignment-301-l05-act2",
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
      "id": "ai-safety-alignment-301-l06",
      "title": "Checkpoint 2: Systems and Decisions",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A close-up of a sleek, metallic chess piece (a knight) standing on a glowing digital chessboard, symbolizing strategic decision-making. Depth of field, cinematic lighting, 8k resolution, photorealistic.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A macro tracking shot of a digital chessboard. A glowing holographic chess piece moves across the board, leaving a trail of data. As it lands, ripples of light spread across the grid, representing the systemic impact of a single governance decision. Smooth, slow-motion animation, highly realistic textures.",
      "learningAids": [
        {
          "id": "ai-safety-alignment-301-l06-a1",
          "type": "practice",
          "title": "Decision Framework",
          "content": "Remember that every governance decision must be backed by empirical evidence and clear escalation paths. Avoid answers that suggest bypassing human oversight."
        }
      ],
      "questions": [
        {
          "id": "ai-safety-alignment-301-l06-q1",
          "text": "When utilizing a decision tradeoff matrix for AI interventions, what is the primary objective?",
          "skillId": "ai-safety-alignment-301-skill-tradeoffs",
          "options": [
            {
              "id": "a",
              "text": "To systematically compare options across competing priorities like performance, reliability, and equity"
            },
            {
              "id": "b",
              "text": "To ensure the AI system operates at maximum speed regardless of cost"
            },
            {
              "id": "c",
              "text": "To eliminate all possible risks before deployment"
            },
            {
              "id": "d",
              "text": "To bypass human review thresholds"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A tradeoff matrix provides a structured way to balance competing priorities and make defensible deployment decisions."
        },
        {
          "id": "ai-safety-alignment-301-l06-q2",
          "text": "How does categorizing 'failure modes' improve AI system design?",
          "skillId": "ai-safety-alignment-301-skill-failure-modes",
          "options": [
            {
              "id": "a",
              "text": "It hides system vulnerabilities from end-users"
            },
            {
              "id": "b",
              "text": "It transforms isolated incidents into reusable safeguards by identifying repeatable patterns of breakage"
            },
            {
              "id": "c",
              "text": "It guarantees that the system will never fail again"
            },
            {
              "id": "d",
              "text": "It shifts the blame to the data providers"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Understanding failure modes allows engineers to anticipate edge cases and build systemic, reusable safeguards."
        },
        {
          "id": "ai-safety-alignment-301-l06-q3",
          "text": "In an AI simulation studio, why is it critical to explicitly model assumptions about uncertainty?",
          "skillId": "ai-safety-alignment-301-skill-simulation",
          "options": [
            {
              "id": "a",
              "text": "Because unstated assumptions can obscure potential edge cases and lead to inaccurate outcome predictions"
            },
            {
              "id": "b",
              "text": "To make the simulation run faster on local hardware"
            },
            {
              "id": "c",
              "text": "Because uncertainty always leads to system failure"
            },
            {
              "id": "d",
              "text": "To confuse stakeholders during the review process"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Explicitly modeling uncertainty ensures that the simulation accurately reflects real-world unpredictability and edge cases."
        },
        {
          "id": "ai-safety-alignment-301-l06-q4",
          "text": "What is the most effective mitigation strategy for an AI system experiencing 'metric drift'?",
          "skillId": "ai-safety-alignment-301-skill-mitigation",
          "options": [
            {
              "id": "a",
              "text": "Ignore the drift if user complaints are low"
            },
            {
              "id": "b",
              "text": "Introduce quality contracts and quarantine checks"
            },
            {
              "id": "c",
              "text": "Re-baseline the metrics and implement monitoring for leading indicators"
            },
            {
              "id": "d",
              "text": "Increase transparency and corrective feedback loops"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Metric drift requires re-baselining to establish a new normal and monitoring leading indicators to catch future deviations early."
        },
        {
          "id": "ai-safety-alignment-301-l06-q5",
          "text": "During a decision review loop, what is the most important action to take after collecting simulation evidence?",
          "skillId": "ai-safety-alignment-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "Delete the evidence to save storage space"
            },
            {
              "id": "b",
              "text": "Evaluate the evidence against established policies to identify necessary corrective actions"
            },
            {
              "id": "c",
              "text": "Immediately deploy the model to production"
            },
            {
              "id": "d",
              "text": "Change the success metrics to match the simulation outcomes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The purpose of the review loop is to audit evidence against policy and refine the strategy before deployment."
        }
      ]
    },
    {
      "id": "ai-safety-alignment-301-l07",
      "title": "AI Safety and Alignment Ethics, Policy, and Public Impact",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A diverse group of silhouetted professionals standing around a glowing, circular holographic table displaying a global map with data nodes. Warm, inviting lighting mixed with high-tech blue glows. Cinematic, 8k resolution, photorealistic.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A slow, sweeping camera movement over a glowing digital map of the world. Data lines connect different regions, symbolizing global public impact. Small pop-up UI elements appear, showing 'Ethics Check' and 'Policy Alignment' with green checkmarks. Professional, inspiring, and forward-looking with fluid motion.",
      "learningAids": [
        {
          "id": "ai-safety-alignment-301-l07-a1",
          "type": "image",
          "title": "Stakeholder Lens",
          "content": "Always ask 'Who bears the risk?' when evaluating AI policy and public impact. Equity is a core component of safety."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-301-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Analysis",
          "content": "You will conduct comprehensive stakeholder analyses to identify who benefits from AI systems and who bears the risks. Understanding how policy choices disproportionately impact different demographic groups is foundational to responsible and equitable AI governance.\nContext recap: Stakeholder analysis maps the distribution of benefits and risks across affected groups, ensuring that AI policy choices promote equity and minimize harm."
        },
        {
          "id": "ai-safety-alignment-301-l07-c2",
          "kind": "concept",
          "title": "Governance and Accountability",
          "content": "We will examine the structural connection between governance mechanisms, measurable controls, and transparency obligations. Establishing clear pathways for remediation ensures that AI systems remain accountable to ethical guidelines and public trust.\nContext recap: True accountability requires linking governance policies to measurable controls and providing clear pathways for remediation when AI systems cause unintended harm."
        },
        {
          "id": "ai-safety-alignment-301-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "Prior to deployment, practitioners must utilize a responsible execution checklist encompassing legal requirements, ethical considerations, technical constraints, and user impact. This rigorous evaluation ensures deployments are both technically sound and socially responsible.\nContext recap: A responsible execution checklist acts as a final gatekeeper, balancing technical performance with safety, fairness, and legal compliance before AI deployment."
        }
      ],
      "flashcards": [
        {
          "id": "ai-safety-alignment-301-l07-f1",
          "front": "Stakeholder Map",
          "back": "A framework that tracks impact distribution across affected groups to ensure equitable AI outcomes."
        },
        {
          "id": "ai-safety-alignment-301-l07-f2",
          "front": "Accountability Loop",
          "back": "A governance cycle connecting system outcomes, human ownership, and corrective action."
        },
        {
          "id": "ai-safety-alignment-301-l07-f3",
          "front": "Responsible Execution",
          "back": "A delivery practice that rigorously balances technical performance with safety, fairness, and transparency."
        }
      ]
    },
    {
      "id": "ai-safety-alignment-301-l08",
      "title": "AI Safety and Alignment Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: A top-down view of a sleek desk with a digital blueprint of an AI system architecture. A stylus rests on the tablet, and holographic notes hover above the screen. Professional, analytical, high-tech aesthetic, 8k resolution, photorealistic.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A time-lapse style animation of a complex project charter being built on a digital canvas. Sections for 'Risks', 'Metrics', and 'Governance' snap into place. The camera zooms in on the 'Success Criteria' section as a digital signature is applied. Crisp, modern motion graphics, fluid transitions.",
      "learningAids": [
        {
          "id": "ai-safety-alignment-301-l08-a1",
          "type": "practice",
          "title": "Capstone Checklist",
          "content": "Ensure your charter explicitly links every success metric to a specific governance control. Vague metrics cannot be defended."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-301-l08-c1",
          "kind": "practice",
          "title": "Capstone Scope Definition",
          "content": "In this culminating activity, you will draft a comprehensive capstone charter. This document outlines primary project objectives, identifies systemic risks, establishes success metrics, and sets governance checkpoints, bridging theoretical knowledge with practical, real-world application.\nContext recap: Defining the capstone scope requires synthesizing risk modeling, metrics architecture, and governance controls into a cohesive, actionable project charter."
        },
        {
          "id": "ai-safety-alignment-301-l08-c2",
          "kind": "concept",
          "title": "Defense Preparation",
          "content": "You will utilize a defense preparation template to articulate your project strategies. This exercise demands that claims be supported by empirical evidence and that complex trade-offs be clearly justified, honing critical communication skills for professional AI governance roles.\nContext recap: Defense preparation trains practitioners to justify their AI safety decisions, articulate trade-offs, and back their claims with rigorous evidence."
        },
        {
          "id": "ai-safety-alignment-301-l08-c3",
          "kind": "recap",
          "title": "Feedback Integration",
          "content": "A strong capstone defense relies on anticipating critiques. You'll learn how to integrate peer feedback, addressing potential blind spots in your risk models and ensuring your final charter is bulletproof.\nContext recap: Integrating feedback strengthens your capstone charter by addressing blind spots and refining risk models before final deployment."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-safety-alignment-301-l08-act1",
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
          "id": "ai-safety-alignment-301-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Drill",
          "description": "Defend your capstone approach against cost, risk, and equity critiques by providing empirical evidence for your choices."
        }
      ]
    }
  ]
};
