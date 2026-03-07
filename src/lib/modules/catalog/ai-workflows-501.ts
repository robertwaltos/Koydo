import type { LearningModule } from "@/lib/modules/types";

export const ai_workflows_501_Module: LearningModule = {
  "id": "ai-workflows-501",
  "title": "AI Workflows Specialization Studio",
  "description": "Post-401 specialization in AI Workflows, focused on agent orchestration, retrieval quality, evaluation pipelines, and operational governance through advanced casework, simulation, and capstone-level defense.",
  "subject": "AI Workflows",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "ai-engineering",
    "specialization"
  ],
  "minAge": 17,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Apply advanced methods for agent orchestration in high-constraint environments",
    "Engineer repeatable workflows that improve retrieval quality under uncertainty",
    "Evaluate interventions in evaluation pipelines with research-grade evidence standards",
    "Operationalize operational governance with transparent accountability and remediation loops",
    "Lead cross-functional decision reviews with clear tradeoff reasoning",
    "Deliver capstone-quality artifacts that withstand expert critique"
  ],
  "lessons": [
    {
      "id": "ai-workflows-501-l01",
      "title": "AI Workflows Advanced Foundations",
      "type": "video",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: A photorealistic, cinematic wide shot of a futuristic high-tech control room with glowing holographic nodes representing AI agents connecting and orchestrating tasks. Deep shadows, neon blue and amber lighting, 8k resolution, highly detailed.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic 3D animation tracking multiple glowing orbs representing AI agents flying through a complex digital network. They retrieve luminous data packets and assemble them into a cohesive, glowing geometric structure, symbolizing advanced AI orchestration. High frame rate, cinematic lighting.",
      "learningAids": [
        {
          "id": "ai-workflows-501-l01-a1",
          "type": "image",
          "title": "The Orchestration Framework",
          "content": "Visualize agent orchestration as a symphony: each agent is an instrument, and the workflow is the sheet music. Success requires perfect timing, clear constraints, and continuous monitoring."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-501-l01-c1",
          "kind": "concept",
          "title": "Advanced Scope and Decision Boundaries",
          "content": "In this lesson, we dive deep into the advanced boundaries that shape AI workflows. We will examine how the orchestration of different agents interacts with the quality of information retrieval. This means understanding how well the system can find, synthesize, and use information effectively under strict constraints. These interactions are vital for creating AI solutions that function smoothly in complex, high-stakes environments."
        },
        {
          "id": "ai-workflows-501-l01-c2",
          "kind": "concept",
          "title": "Causal Structure Under Uncertainty",
          "content": "Advanced AI workflows rarely operate in perfectly predictable environments. Here, we will model the pathways of cause and effect, explicitly accounting for uncertainties and hidden assumptions. This foundational understanding is essential before designing any interventions, as it helps us anticipate potential cascading failures and edge cases that may arise during execution."
        },
        {
          "id": "ai-workflows-501-l01-c3",
          "kind": "recap",
          "title": "Evidence and Rigor Standards",
          "content": "All advanced claims we make in our workflow design must be supported by measurable indicators. This means establishing strict confidence bounds and review checkpoints to ensure our findings are reliable, reproducible, and can be validated by independent evaluation pipelines."
        }
      ],
      "flashcards": [
        {
          "id": "ai-workflows-501-l01-f1",
          "front": "Agent Orchestration",
          "back": "A specialization axis in AI Workflows requiring explicit assumptions, coordinated agent interactions, and measured tradeoff choices."
        },
        {
          "id": "ai-workflows-501-l01-f2",
          "front": "Retrieval Quality",
          "back": "The operational design capability that governs whether complex workflows remain reliable and accurate when fetching external data."
        },
        {
          "id": "ai-workflows-501-l01-f3",
          "front": "Evaluation Pipelines",
          "back": "The rigorous practice of validating AI outcomes beyond headline metrics, using baselines and uncertainty bounds."
        }
      ],
      "imageUrl": "/generated-images/refinery/ai-workflows-501-l01.png"
    },
    {
      "id": "ai-workflows-501-l02",
      "title": "AI Workflows Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "lessonImagePrompt": "Imagen 4 prompt: A sleek, cyberpunk-style digital workbench interface displayed on a curved glass monitor. The screen shows complex node-based workflow diagrams, stress-testing metrics, and glowing red and green validation gates. Photorealistic, macro photography style, shallow depth of field.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A time-lapse style screen recording of a complex node-based AI workflow being built and tested. A data packet hits a failure gate, which flashes a warning red, then automatically reroutes the data to a safe, glowing green backup path. Smooth motion graphics, high-tech aesthetic.",
      "learningAids": [
        {
          "id": "ai-workflows-501-l02-a1",
          "type": "practice",
          "title": "Stress-Testing Protocol",
          "content": "Always push your workflow to the breaking point in a safe environment. Log assumptions, inject edge-case data, and verify if your failure gates trigger correctly."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-501-l02-c1",
          "kind": "practice",
          "title": "Method Sequence and Stress Test",
          "content": "In this interactive lab, you will design and build a specialized workflow that showcases the execution of advanced orchestration methods. Once constructed, you will put it to the test by challenging it with difficult scenarios, latency spikes, and edge cases. This testing phase is crucial for understanding how your workflow performs under pressure, ensuring you are prepared for real-world enterprise applications."
        },
        {
          "id": "ai-workflows-501-l02-c2",
          "kind": "recap",
          "title": "Controls and Failure Gates",
          "content": "To ensure specialized workflows are robust, we must implement control gates, rollback criteria, and accountability checkpoints. These elements manage risks and ensure we can respond effectively if an agent hallucinates or a retrieval fails. Connecting these controls to your initial assumptions is the hallmark of a senior AI engineer."
        },
        {
          "id": "ai-workflows-501-l02-c3",
          "kind": "concept",
          "title": "Iterative Refinement and Logging",
          "content": "Robust AI workflows require meticulous logging of every agent interaction and decision branch. In this phase, you will learn to implement structured logging that captures not just the outputs, but the intermediate reasoning steps of your agents. This data is critical for debugging complex failures and iteratively refining your orchestration logic."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-workflows-501-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Outcome Mapping",
          "description": "Match advanced controls with the strongest expected system effect.",
          "pairs": [
            {
              "left": "Pre-commit review gate",
              "right": "Prevents avoidable downstream defects"
            },
            {
              "left": "Rollback threshold",
              "right": "Contains impact quickly when failures emerge"
            },
            {
              "left": "Baseline monitoring",
              "right": "Enables defensible impact attribution"
            },
            {
              "left": "Retrospective cycle",
              "right": "Improves next-iteration design quality"
            }
          ]
        },
        {
          "id": "ai-workflows-501-l02-act2",
          "type": "sorting_buckets",
          "title": "Advanced Constraint Classification",
          "description": "Sort constraints into technical, governance, and stakeholder-impact categories.",
          "buckets": [
            "Technical",
            "Governance",
            "Stakeholder Impact"
          ],
          "items": [
            {
              "text": "Latency budget violation",
              "bucket": "Technical"
            },
            {
              "text": "Audit traceability requirement",
              "bucket": "Governance"
            },
            {
              "text": "Trust and adoption decline",
              "bucket": "Stakeholder Impact"
            },
            {
              "text": "Escalation policy noncompliance",
              "bucket": "Governance"
            }
          ]
        }
      ],
      "imageUrl": "/generated-images/refinery/ai-workflows-501-l02.png"
    },
    {
      "id": "ai-workflows-501-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 11,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing digital lock mechanism unlocking on a dark, brushed metallic surface, symbolizing the passing of a critical checkpoint in a high-tech environment. Volumetric lighting, 8k resolution, hyper-detailed textures.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced, cinematic montage of glowing data streams being analyzed in real-time. Bright green checkmarks dynamically appear over verified data packets as they pass through a digital filter, symbolizing successful evaluation and checkpoint completion.",
      "learningAids": [
        {
          "id": "ai-workflows-501-l03-a1",
          "type": "practice",
          "title": "Review Strategy",
          "content": "Recall the core pillars: explicit constraints, measurable indicators, and robust failure gates. Apply these to the scenarios below."
        }
      ],
      "questions": [
        {
          "id": "ai-workflows-501-l03-q1",
          "text": "Which practice most improves specialist performance in agent orchestration?",
          "skillId": "ai-workflows-501-skill-specialist",
          "options": [
            {
              "id": "a",
              "text": "Rely on undocumented assumptions"
            },
            {
              "id": "b",
              "text": "Define constraints, monitor leading indicators, and test edge cases"
            },
            {
              "id": "c",
              "text": "Avoid post-decision review"
            },
            {
              "id": "d",
              "text": "Optimize only for speed"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Advanced performance depends on explicit constraints, monitoring, and stress testing."
        },
        {
          "id": "ai-workflows-501-l03-q2",
          "text": "At level 501, the curriculum emphasizes:",
          "skillId": "ai-workflows-501-skill-level",
          "options": [
            {
              "id": "a",
              "text": "Specialist method execution, cross-domain integration, and high-stakes scenario performance"
            },
            {
              "id": "b",
              "text": "Unbounded iteration with no controls"
            },
            {
              "id": "c",
              "text": "Single-metric decision making"
            },
            {
              "id": "d",
              "text": "No uncertainty communication"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The 501 design is built around specialist method execution, cross-domain integration, and high-stakes scenario performance."
        },
        {
          "id": "ai-workflows-501-l03-q3",
          "text": "What best strengthens retrieval execution quality?",
          "skillId": "ai-workflows-501-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "No owner mapping or escalation path"
            },
            {
              "id": "b",
              "text": "Explicit ownership, checkpoints, and governance thresholds"
            },
            {
              "id": "c",
              "text": "Ad-hoc process changes without logs"
            },
            {
              "id": "d",
              "text": "Skipping retrospective review"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Quality execution needs ownership clarity, checkpoints, and threshold-driven governance."
        },
        {
          "id": "ai-workflows-501-l03-q4",
          "text": "A rigorous approach to evaluation pipelines should include:",
          "skillId": "ai-workflows-501-skill-evaluation",
          "options": [
            {
              "id": "a",
              "text": "Outcome claims without baselines"
            },
            {
              "id": "b",
              "text": "Baseline comparison, side-effect checks, and uncertainty bounds"
            },
            {
              "id": "c",
              "text": "Removal of difficult scenarios"
            },
            {
              "id": "d",
              "text": "Changing criteria after seeing results"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Baselines, side-effect checks, and uncertainty disclosure make results defensible."
        },
        {
          "id": "ai-workflows-501-l03-q5",
          "text": "A mature operational governance system should connect:",
          "skillId": "ai-workflows-501-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Policy and practice without measurement"
            },
            {
              "id": "b",
              "text": "Policy, measurable thresholds, and remediation pathways"
            },
            {
              "id": "c",
              "text": "Technical delivery with no accountability"
            },
            {
              "id": "d",
              "text": "Performance targets with no risk controls"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Governance quality comes from linking policy intent to measurable controls and action."
        },
        {
          "id": "ai-workflows-501-l03-q6",
          "text": "In high-stakes AI Workflows execution, which communication protocol is strongest?",
          "skillId": "ai-workflows-501-skill-advanced-6",
          "options": [
            {
              "id": "a",
              "text": "Broadcast conclusions without assumptions"
            },
            {
              "id": "b",
              "text": "Publish assumptions, confidence ranges, and decision checkpoints to stakeholders"
            },
            {
              "id": "c",
              "text": "Share only final outcomes after completion"
            },
            {
              "id": "d",
              "text": "Limit updates to a single informal channel"
            }
          ],
          "correctOptionId": "b",
          "explanation": "High-stakes communication must expose assumptions, confidence, and checkpoints."
        },
        {
          "id": "ai-workflows-501-l03-q7",
          "text": "A mature remediation loop in advanced AI Workflows should prioritize:",
          "skillId": "ai-workflows-501-skill-advanced-7",
          "options": [
            {
              "id": "a",
              "text": "Blame assignment without system updates"
            },
            {
              "id": "b",
              "text": "Root-cause analysis, control redesign, and measurable follow-up verification"
            },
            {
              "id": "c",
              "text": "One-time fixes without retesting"
            },
            {
              "id": "d",
              "text": "Issue closure based on elapsed time"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Mature remediation ties root causes to control redesign and verification."
        },
        {
          "id": "ai-workflows-501-l03-q8",
          "text": "Which portfolio decision rule best balances performance and resilience?",
          "skillId": "ai-workflows-501-skill-advanced-8",
          "options": [
            {
              "id": "a",
              "text": "Maximize short-term gains regardless of concentration risk"
            },
            {
              "id": "b",
              "text": "Optimize for expected value while enforcing risk limits and contingency capacity"
            },
            {
              "id": "c",
              "text": "Ignore correlated failure modes"
            },
            {
              "id": "d",
              "text": "Commit all resources to one irreversible pathway"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Balanced portfolios combine value optimization with explicit risk limits and contingency options."
        }
      ],
      "imageUrl": "/generated-images/refinery/ai-workflows-501-l03.png"
    },
    {
      "id": "ai-workflows-501-l04",
      "title": "AI Workflows Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: A diverse team of professionals in a modern, glass-walled boardroom, intensely analyzing a glowing holographic matrix of AI tradeoffs and risk scores hovering above the table. Cinematic lighting, photorealistic, corporate tech aesthetic.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A sleek visual breakdown of a complex decision matrix. 3D translucent bars rise and fall to represent effectiveness, reliability, and equity, dynamically adjusting and changing colors as different AI workflow options are selected. High-end broadcast graphics style.",
      "learningAids": [
        {
          "id": "ai-workflows-501-l04-a1",
          "type": "mnemonic",
          "title": "The E.R.E.F.M. Matrix",
          "content": "Evaluate options using EREFM: Effectiveness, Reliability, Equity, Feasibility, and Maintainability."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-501-l04-c1",
          "kind": "example",
          "title": "Case Stakes and Competing Objectives",
          "content": "In this case study, we explore an enterprise AI workflow that combines information retrieval, specialized tools, and policy enforcement under heavy production load. You will map out the strategic objectives guiding the workflow, identify potential risks that could lead to cascading failures, and analyze the governance constraints required before deployment. This comprehensive approach develops the critical thinking needed to manage complex, competing objectives."
        },
        {
          "id": "ai-workflows-501-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix and Option Scoring",
          "content": "We will learn to score architectural options using a tradeoff matrix. Each option is evaluated based on its effectiveness, reliability, equity, feasibility, and long-term maintainability. This rigorous scoring process moves us away from gut-feeling decisions and toward informed, defensible choices about which AI pathways to pursue."
        },
        {
          "id": "ai-workflows-501-l04-c3",
          "kind": "recap",
          "title": "Recovery and Adaptation Design",
          "content": "When failures inevitably occur, it is essential to translate those incidents into actionable safeguards. This includes creating automated response playbooks and measurable adaptation loops that allow the AI system—and the engineering team—to learn from mistakes and improve resilience over time."
        }
      ],
      "flashcards": [
        {
          "id": "ai-workflows-501-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A scoring framework for choosing among competing architectural options under real-world constraints."
        },
        {
          "id": "ai-workflows-501-l04-f2",
          "front": "Failure Signature",
          "back": "A recurrent, identifiable signal indicating a predictable class of breakdown risk in a workflow."
        },
        {
          "id": "ai-workflows-501-l04-f3",
          "front": "Adaptation Loop",
          "back": "A measured process for converting incident learning into improved future system behavior and safeguards."
        }
      ],
      "imageUrl": "/generated-images/refinery/ai-workflows-501-l04.png"
    },
    {
      "id": "ai-workflows-501-l05",
      "title": "AI Workflows Simulation and Response Studio",
      "type": "interactive",
      "duration": 17,
      "lessonImagePrompt": "Imagen 4 prompt: A high-tech simulation dashboard on a large curved screen, displaying warning alerts, mitigation pathways, and real-time data graphs. Dark mode UI with neon red and blue accents, photorealistic, immersive perspective.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A simulated 3D cyber-environment where a pulsing red warning signal triggers an automated response protocol. Glowing data streams are instantly shielded by a digital forcefield and rerouted safely along alternative pathways in real-time. Cinematic camera pan.",
      "learningAids": [
        {
          "id": "ai-workflows-501-l05-a1",
          "type": "practice",
          "title": "Simulation Mindset",
          "content": "Treat every simulation as a live production incident. Document your escalation triggers clearly before the simulation begins."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-501-l05-c1",
          "kind": "practice",
          "title": "Scenario Modeling",
          "content": "In this practice session, you will configure the assumptions, thresholds, and intervention pathways for AI simulations under high-stakes conditions. This hands-on experience bridges the gap between theoretical design and live incident response, helping you understand how to prepare for, monitor, and mitigate complex workflow failures effectively."
        },
        {
          "id": "ai-workflows-501-l05-c2",
          "kind": "recap",
          "title": "Debrief and Decision Quality Review",
          "content": "After each simulation run, teams must conduct a thorough review to assess whether they met their mitigation targets. You will analyze any unintended side effects of your interventions and identify gaps in governance compliance. This debriefing process is vital for continuous improvement and calibrating your engineering intuition."
        },
        {
          "id": "ai-workflows-501-l05-c3",
          "kind": "concept",
          "title": "Live Incident Triage",
          "content": "When a simulation triggers a critical failure, your triage process must be immediate and structured. We will practice isolating the failing agent, halting cascading data corruption, and deploying pre-approved fallback models. Mastering live triage ensures that when real-world anomalies occur, your response is swift, calculated, and minimizes operational downtime."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-workflows-501-l05-act1",
          "type": "scenario_practice",
          "title": "High-Stakes Intervention Simulation",
          "description": "Compare three advanced interventions and justify which best improves agent orchestration and operational governance.",
          "instructions": [
            "Define objective, constraints, and escalation triggers.",
            "Record near-term and long-term tradeoffs for each intervention.",
            "Select the metric set that confirms or falsifies your chosen approach."
          ]
        },
        {
          "id": "ai-workflows-501-l05-act2",
          "type": "matching_pairs",
          "title": "Mitigation Alignment",
          "description": "Match advanced risk scenarios with the strongest mitigation actions.",
          "pairs": [
            {
              "left": "Ambiguous ownership chain",
              "right": "Define accountable owner map and escalation rights"
            },
            {
              "left": "Weak measurement signal",
              "right": "Strengthen baseline instrumentation and quality checks"
            },
            {
              "left": "Policy-execution drift",
              "right": "Re-align controls to explicit governance standards"
            },
            {
              "left": "Stakeholder trust erosion",
              "right": "Increase transparency and corrective feedback cadence"
            }
          ]
        }
      ],
      "imageUrl": "/generated-images/refinery/ai-workflows-501-l05.png"
    },
    {
      "id": "ai-workflows-501-l06",
      "title": "Checkpoint 2: Research and Systems Decisions",
      "type": "quiz",
      "duration": 11,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing futuristic compass resting on a complex blueprint of neural networks and decision trees, symbolizing navigation through complex research and system decisions. Macro shot, dramatic lighting, highly detailed.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A smooth camera pan over a sprawling digital landscape of branching pathways. One specific path illuminates brightly in gold, representing the optimal system decision based on simulated data, while other paths fade into the background.",
      "learningAids": [
        {
          "id": "ai-workflows-501-l06-a1",
          "type": "practice",
          "title": "Decision Framework",
          "content": "Focus on how tradeoffs are scored, how failures are identified, and how systems adapt post-incident."
        }
      ],
      "questions": [
        {
          "id": "ai-workflows-501-l06-q1",
          "text": "What is the primary purpose of a Tradeoff Matrix in AI workflow design?",
          "skillId": "ai-workflows-501-skill-tradeoff",
          "options": [
            {
              "id": "a",
              "text": "To guarantee a zero-risk deployment"
            },
            {
              "id": "b",
              "text": "To score competing architectural options based on constraints like reliability and feasibility"
            },
            {
              "id": "c",
              "text": "To bypass governance reviews by automating decisions"
            },
            {
              "id": "d",
              "text": "To list all possible features an AI agent can perform"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix provides a structured way to evaluate and score competing options against real-world constraints."
        },
        {
          "id": "ai-workflows-501-l06-q2",
          "text": "In the context of system monitoring, what is a 'Failure Signature'?",
          "skillId": "ai-workflows-501-skill-failure",
          "options": [
            {
              "id": "a",
              "text": "A recurrent, identifiable signal indicating a predictable class of breakdown risk"
            },
            {
              "id": "b",
              "text": "The digital signature of the engineer who deployed the failing code"
            },
            {
              "id": "c",
              "text": "A random anomaly that cannot be tracked or predicted"
            },
            {
              "id": "d",
              "text": "A successful rollback execution"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A failure signature is a recognizable pattern or signal that precedes or accompanies a specific type of system failure."
        },
        {
          "id": "ai-workflows-501-l06-q3",
          "text": "What defines an effective 'Adaptation Loop'?",
          "skillId": "ai-workflows-501-skill-adaptation",
          "options": [
            {
              "id": "a",
              "text": "Ignoring minor incidents to focus on major outages"
            },
            {
              "id": "b",
              "text": "A measured process for converting incident learning into improved future system behavior"
            },
            {
              "id": "c",
              "text": "Automatically restarting the AI agents every 24 hours"
            },
            {
              "id": "d",
              "text": "Assigning blame to the lowest-performing agent"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Adaptation loops ensure that the system and the team learn from incidents to build better safeguards."
        },
        {
          "id": "ai-workflows-501-l06-q4",
          "text": "During a high-stakes intervention simulation, what must be defined before execution?",
          "skillId": "ai-workflows-501-skill-simulation",
          "options": [
            {
              "id": "a",
              "text": "The exact time the simulation will end"
            },
            {
              "id": "b",
              "text": "Objective, constraints, and escalation triggers"
            },
            {
              "id": "c",
              "text": "The final marketing copy for the product"
            },
            {
              "id": "d",
              "text": "The names of the stakeholders who will be fired if it fails"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Clear objectives, constraints, and triggers are required to make a simulation a valid test of operational readiness."
        },
        {
          "id": "ai-workflows-501-l06-q5",
          "text": "If a simulation reveals an 'Ambiguous ownership chain', what is the strongest mitigation?",
          "skillId": "ai-workflows-501-skill-mitigation",
          "options": [
            {
              "id": "a",
              "text": "Increase the server capacity"
            },
            {
              "id": "b",
              "text": "Define an accountable owner map and clear escalation rights"
            },
            {
              "id": "c",
              "text": "Write more code comments"
            },
            {
              "id": "d",
              "text": "Lower the performance thresholds"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Ambiguous ownership is a governance failure that requires explicit mapping of accountability and escalation paths."
        },
        {
          "id": "ai-workflows-501-l06-q6",
          "text": "What is the primary focus of a post-simulation Debrief and Decision Quality Review?",
          "skillId": "ai-workflows-501-skill-debrief",
          "options": [
            {
              "id": "a",
              "text": "Assessing if mitigation targets were met and identifying unintended side effects"
            },
            {
              "id": "b",
              "text": "Celebrating the completion of the simulation regardless of outcome"
            },
            {
              "id": "c",
              "text": "Deleting the simulation logs to save storage space"
            },
            {
              "id": "d",
              "text": "Rewriting the original project charter"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Debriefs focus on evaluating the effectiveness of interventions and uncovering hidden side effects or governance gaps."
        },
        {
          "id": "ai-workflows-501-l06-q7",
          "text": "How should a team handle 'Policy-execution drift' discovered during a review?",
          "skillId": "ai-workflows-501-skill-drift",
          "options": [
            {
              "id": "a",
              "text": "Change the policy to match the current execution"
            },
            {
              "id": "b",
              "text": "Re-align system controls to enforce explicit governance standards"
            },
            {
              "id": "c",
              "text": "Ignore it if the system is still generating revenue"
            },
            {
              "id": "d",
              "text": "Disable the monitoring tools reporting the drift"
            }
          ],
          "correctOptionId": "b",
          "explanation": "When execution drifts from policy, technical controls must be re-aligned to ensure compliance and safety."
        },
        {
          "id": "ai-workflows-501-l06-q8",
          "text": "Scenario modeling in AI workflows primarily helps engineers to:",
          "skillId": "ai-workflows-501-skill-modeling",
          "options": [
            {
              "id": "a",
              "text": "Design the user interface"
            },
            {
              "id": "b",
              "text": "Prepare for, monitor, and mitigate complex workflow failures before they happen in production"
            },
            {
              "id": "c",
              "text": "Reduce the cost of cloud computing"
            },
            {
              "id": "d",
              "text": "Write faster database queries"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Scenario modeling is a proactive practice to anticipate and design mitigations for complex failures."
        }
      ],
      "imageUrl": "/generated-images/refinery/ai-workflows-501-l06.png"
    },
    {
      "id": "ai-workflows-501-l07",
      "title": "AI Workflows Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "lessonImagePrompt": "Imagen 4 prompt: A stylized, modern scale of justice made of glowing digital light, perfectly balancing a glowing artificial intelligence brain on one side and a diverse group of human silhouettes on the other. Deep background, conceptual art, photorealistic.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A beautiful, fluid animation showing a ripple effect originating from a central, glowing AI node. The ripples spread outward, gently illuminating various human figures in the network, highlighting the interconnected impact of AI decisions on society.",
      "learningAids": [
        {
          "id": "ai-workflows-501-l07-a1",
          "type": "image",
          "title": "The Accountability Chain",
          "content": "Every AI decision must trace back to a human owner, a clear policy, and a measurable operational control."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-501-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "In this lesson, we evaluate how the outcomes of AI workflows are distributed among different stakeholders. This includes analyzing both immediate benefits and delayed harms, as well as indirect consequences that may arise from automated decisions. Understanding impact distribution is critical for building equitable and socially responsible AI systems."
        },
        {
          "id": "ai-workflows-501-l07-c2",
          "kind": "concept",
          "title": "Accountability System Design",
          "content": "To ensure accountability in our workflows, we must implement strict traceability standards, establish review rights, and outline clear remediation obligations. These measures are essential for maintaining public trust and ensuring that all stakeholders—from engineers to executives—are held responsible for the system's actions."
        },
        {
          "id": "ai-workflows-501-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "A responsible leadership checklist is a vital tool that helps leaders connect their strategic goals with ethical considerations, policies, and operational controls. This checklist serves as a comprehensive review document ensuring all aspects of deployment are aligned, accountable, and promote a culture of integrity in AI decision-making."
        }
      ],
      "flashcards": [
        {
          "id": "ai-workflows-501-l07-f1",
          "front": "Impact Distribution",
          "back": "The analysis of how benefits and harms of an AI system are allocated across different groups and timeframes."
        },
        {
          "id": "ai-workflows-501-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable, transparent explanation of the evidence, rationale, and human ownership behind an automated decision."
        },
        {
          "id": "ai-workflows-501-l07-f3",
          "front": "Responsible Leadership",
          "back": "A decision-making practice that actively balances technical performance, risk management, ethics, and accountability."
        }
      ],
      "imageUrl": "/generated-images/refinery/ai-workflows-501-l07.png"
    },
    {
      "id": "ai-workflows-501-l08",
      "title": "AI Workflows Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "lessonImagePrompt": "Imagen 4 prompt: A professional standing confidently in front of a massive holographic display showing a completed, intricate AI workflow architecture. They are presenting to a panel of shadowed experts in a high-tech auditorium. Cinematic lighting, photorealistic.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic, high-energy sequence showing a complex digital blueprint being finalized. It is stamped with a glowing, holographic 'APPROVED' seal, and then seamlessly transforms into a fully operational, glowing 3D AI network pulsing with light.",
      "learningAids": [
        {
          "id": "ai-workflows-501-l08-a1",
          "type": "practice",
          "title": "Defense Preparation",
          "content": "Anticipate the hardest questions. Ensure your evidence pack clearly links your architectural choices to your governance constraints and performance metrics."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-501-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter and Evidence Pack",
          "content": "In this final activity, you will create a comprehensive capstone charter. This document outlines clear objectives, identifies constraints, establishes success metrics, and defines governance controls for your specialized AI workflow. Additionally, you will compile an evidence pack to support your architectural decisions, ensuring all necessary data, logs, and tradeoff analyses are organized for expert review."
        },
        {
          "id": "ai-workflows-501-l08-c2",
          "kind": "recap",
          "title": "Defense Rehearsal",
          "content": "During the final practice round, you will prepare to defend your design decisions. This rehearsal focuses on addressing rigorous critiques from technical experts, governance bodies, and stakeholders. By simulating this high-pressure environment, you will build the confidence and articulation skills required to lead cross-functional AI initiatives in the real world."
        },
        {
          "id": "ai-workflows-501-l08-c3",
          "kind": "concept",
          "title": "Handling Expert Cross-Examination",
          "content": "A capstone defense is not just a presentation; it is a rigorous cross-examination of your architectural choices. You must be prepared to justify why you selected specific retrieval methods over others, how you calculated your confidence bounds, and what your fallback strategies are if your primary governance controls fail. Clear, evidence-based communication is your strongest asset here."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-workflows-501-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a specialization capstone charter with measurable outcomes and remediation pathways.",
          "instructions": [
            "Define objective, scope boundaries, and operating assumptions.",
            "Specify at least three measurable indicators and confidence thresholds.",
            "Define escalation and corrective-action criteria for failure scenarios."
          ]
        },
        {
          "id": "ai-workflows-501-l08-act2",
          "type": "debate_simulator",
          "title": "Capstone Defense Panel",
          "description": "Defend your capstone against expert critique on rigor, risk, and accountability."
        }
      ],
      "imageUrl": "/generated-images/refinery/ai-workflows-501-l08.png"
    }
  ]
};
