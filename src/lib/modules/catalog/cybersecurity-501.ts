import type { LearningModule } from "@/lib/modules/types";

export const cybersecurity_501_Module: LearningModule = {
  "id": "cybersecurity-501",
  "title": "Cybersecurity Specialization Studio",
  "description": "Post-401 specialization in Cybersecurity, focused on threat modeling, defense-in-depth design, incident response systems, and security governance through advanced casework, simulation, and capstone-level defense.",
  "subject": "Computer Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "security",
    "defense"
  ],
  "minAge": 17,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Apply advanced methods for threat modeling in high-constraint environments",
    "Engineer repeatable workflows that improve defense-in-depth design under uncertainty",
    "Evaluate interventions in incident response systems with research-grade evidence standards",
    "Operationalize security governance with transparent accountability and remediation loops",
    "Lead cross-functional decision reviews with clear tradeoff reasoning",
    "Deliver capstone-quality artifacts that withstand expert critique"
  ],
  "lessons": [
    {
      "id": "cybersecurity-501-l01",
      "title": "Cybersecurity Advanced Foundations",
      "type": "video",
      "duration": 14,
      "lessonImagePrompt": "A futuristic digital blueprint of a complex network architecture, with glowing nodes and shield icons representing defense-in-depth strategies, dark background with neon blue and amber accents, photorealistic.",
      "conceptVideoPrompt": "A cinematic fly-through of a 3D network topology. Red threat vectors attempt to breach multiple glowing security layers, which dynamically adapt and block the intrusions, illustrating defense-in-depth and causal pathways. 4k, smooth motion.",
      "learningAids": [
        {
          "id": "cybersecurity-501-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "chunks": [
        {
          "id": "cybersecurity-501-l01-c1",
          "kind": "concept",
          "title": "Advanced Scope and Decision Boundaries",
          "content": "Explore the advanced boundaries of cybersecurity architecture. This section frames threat modeling as a rigorous exercise in identifying systemic risks and defense-in-depth as a layered operational strategy. By analyzing the intersection of these concepts, you will learn to architect resilient digital environments capable of withstanding sophisticated, multi-vector threats."
        },
        {
          "id": "cybersecurity-501-l01-c2",
          "kind": "concept",
          "title": "Causal Structure Under Uncertainty",
          "content": "Focus on modeling causal pathways in highly uncertain environments. This involves mapping potential attack vectors, quantifying uncertainty ranges, and exposing hidden architectural assumptions. Proactively addressing these variables enables the design of highly effective, targeted security interventions."
        },
        {
          "id": "cybersecurity-501-l01-c3",
          "kind": "recap",
          "title": "Evidence and Rigor Standards",
          "content": "Advanced cybersecurity claims require empirical validation. Establish confidence bounds, define measurable leading indicators, and implement strict review checkpoints. This rigorous, evidence-based approach ensures that security postures remain defensible and resilient under expert scrutiny."
        }
      ],
      "flashcards": [
        {
          "id": "cybersecurity-501-l01-f1",
          "front": "Threat modeling",
          "back": "A specialization axis in Cybersecurity requiring explicit assumptions and measured tradeoff choices."
        },
        {
          "id": "cybersecurity-501-l01-f2",
          "front": "Defense-in-depth design",
          "back": "Operational design capability that governs whether complex workflows remain reliable."
        },
        {
          "id": "cybersecurity-501-l01-f3",
          "front": "Incident response systems",
          "back": "Evaluation practice for validating outcomes beyond headline metrics."
        }
      ],
      "imageUrl": "/generated-images/refinery/cybersecurity-501-l01.png"
    },
    {
      "id": "cybersecurity-501-l02",
      "title": "Cybersecurity Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "lessonImagePrompt": "A split-screen view showing a complex workflow diagram on the left and a real-time stress-test dashboard on the right, featuring graphs, warning alerts, and green success metrics, modern UI design, photorealistic.",
      "conceptVideoPrompt": "A time-lapse style animation of a cybersecurity workflow being constructed block by block. Suddenly, simulated red cyber attacks strike the blocks, but glowing energy shields (control gates) activate, successfully repelling the attacks and demonstrating system resilience. 4k, high-tech aesthetic.",
      "learningAids": [
        {
          "id": "cybersecurity-501-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "chunks": [
        {
          "id": "cybersecurity-501-l02-c1",
          "kind": "practice",
          "title": "Method Sequence and Stress Test",
          "content": "Design and implement specialized security workflows that integrate cross-domain intelligence. Once established, subject these workflows to rigorous stress testing, simulating adversarial attacks and extreme edge cases to validate robustness and operational efficacy in real-world scenarios."
        },
        {
          "id": "cybersecurity-501-l02-c2",
          "kind": "recap",
          "title": "Controls and Failure Gates",
          "content": "Architect robust specialist workflows by embedding strict control gates, automated rollback criteria, and accountability checkpoints. These mechanisms ensure systems fail safely, contain breaches rapidly, and maintain strict governance standards during unexpected operational anomalies."
        }
      ],
      "interactiveActivities": [
        {
          "id": "cybersecurity-501-l02-act1",
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
          "id": "cybersecurity-501-l02-act2",
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
      "imageUrl": "/generated-images/refinery/cybersecurity-501-l02.png"
    },
    {
      "id": "cybersecurity-501-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 11,
      "lessonImagePrompt": "A sleek, modern digital assessment interface floating in a dark room, displaying complex cybersecurity questions with glowing holographic text, cinematic lighting, photorealistic.",
      "conceptVideoPrompt": "A slow, deliberate pan across a high-tech command desk featuring multiple monitors displaying code, network graphs, and analytical data, conveying a sense of deep focus and rigorous evaluation. 4k, realistic.",
      "learningAids": [
        {
          "id": "cybersecurity-501-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "questions": [
        {
          "id": "cybersecurity-501-l03-q1",
          "text": "Which practice most improves specialist performance in threat modeling?",
          "skillId": "cybersecurity-501-skill-specialist",
          "options": [
            {
              "id": "a",
              "text": "Relying on undocumented assumptions"
            },
            {
              "id": "b",
              "text": "Defining constraints, monitoring leading indicators, and testing edge cases"
            },
            {
              "id": "c",
              "text": "Avoiding post-decision review"
            },
            {
              "id": "d",
              "text": "Optimizing exclusively for deployment speed"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Advanced performance depends on explicit constraints, monitoring, and stress testing."
        },
        {
          "id": "cybersecurity-501-l03-q2",
          "text": "At the 501 specialization level, the curriculum primarily emphasizes:",
          "skillId": "cybersecurity-501-skill-level",
          "options": [
            {
              "id": "a",
              "text": "Specialist method execution, cross-domain integration, and high-stakes scenario performance"
            },
            {
              "id": "b",
              "text": "Unbounded iteration with no operational controls"
            },
            {
              "id": "c",
              "text": "Single-metric decision making"
            },
            {
              "id": "d",
              "text": "Obfuscation of uncertainty communication"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The 501 design is built around specialist method execution, cross-domain integration, and high-stakes scenario performance."
        },
        {
          "id": "cybersecurity-501-l03-q3",
          "text": "What best strengthens defense-in-depth design execution quality?",
          "skillId": "cybersecurity-501-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Removing owner mapping and escalation paths"
            },
            {
              "id": "b",
              "text": "Explicit ownership, checkpoints, and governance thresholds"
            },
            {
              "id": "c",
              "text": "Ad-hoc process changes without audit logs"
            },
            {
              "id": "d",
              "text": "Skipping retrospective reviews"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Quality execution needs ownership clarity, checkpoints, and threshold-driven governance."
        },
        {
          "id": "cybersecurity-501-l03-q4",
          "text": "A rigorous approach to incident response systems must include:",
          "skillId": "cybersecurity-501-skill-evaluation",
          "options": [
            {
              "id": "a",
              "text": "Outcome claims without historical baselines"
            },
            {
              "id": "b",
              "text": "Baseline comparison, side-effect checks, and uncertainty bounds"
            },
            {
              "id": "c",
              "text": "Removal of difficult or anomalous scenarios"
            },
            {
              "id": "d",
              "text": "Changing success criteria after observing results"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Baselines, side-effect checks, and uncertainty disclosure make results defensible."
        },
        {
          "id": "cybersecurity-501-l03-q5",
          "text": "When modeling causal structure under uncertainty, an architect should prioritize:",
          "skillId": "cybersecurity-501-skill-causal",
          "options": [
            {
              "id": "a",
              "text": "Ignoring variables that cannot be perfectly quantified"
            },
            {
              "id": "b",
              "text": "Mapping potential attack vectors and quantifying uncertainty ranges"
            },
            {
              "id": "c",
              "text": "Assuming all hidden architectural dependencies are secure"
            },
            {
              "id": "d",
              "text": "Relying solely on automated vulnerability scanners"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Proactively addressing uncertainty ranges and mapping vectors enables the design of highly effective interventions."
        },
        {
          "id": "cybersecurity-501-l03-q6",
          "text": "In control-to-outcome mapping, a 'rollback threshold' is primarily designed to:",
          "skillId": "cybersecurity-501-skill-controls",
          "options": [
            {
              "id": "a",
              "text": "Prevent avoidable downstream defects before deployment"
            },
            {
              "id": "b",
              "text": "Contain impact quickly when operational failures emerge"
            },
            {
              "id": "c",
              "text": "Enable defensible impact attribution post-incident"
            },
            {
              "id": "d",
              "text": "Improve next-iteration design quality"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rollback thresholds act as a failure gate to contain impact rapidly when anomalies occur."
        },
        {
          "id": "cybersecurity-501-l03-q7",
          "text": "Which of the following is an example of a 'Governance' constraint?",
          "skillId": "cybersecurity-501-skill-constraints",
          "options": [
            {
              "id": "a",
              "text": "Latency budget violation"
            },
            {
              "id": "b",
              "text": "Trust and adoption decline"
            },
            {
              "id": "c",
              "text": "Audit traceability requirement"
            },
            {
              "id": "d",
              "text": "Bandwidth saturation"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Audit traceability is a governance constraint ensuring accountability and compliance."
        },
        {
          "id": "cybersecurity-501-l03-q8",
          "text": "To meet advanced evidence and rigor standards, cybersecurity claims must be supported by:",
          "skillId": "cybersecurity-501-skill-rigor",
          "options": [
            {
              "id": "a",
              "text": "Anecdotal evidence from senior engineers"
            },
            {
              "id": "b",
              "text": "Empirical validation, confidence bounds, and measurable leading indicators"
            },
            {
              "id": "c",
              "text": "Theoretical models without real-world stress testing"
            },
            {
              "id": "d",
              "text": "Consensus among the development team"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rigorous standards require empirical validation, defined confidence bounds, and measurable indicators."
        }
      ]
    },
    {
      "id": "cybersecurity-501-l04",
      "title": "Cybersecurity Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "lessonImagePrompt": "A dramatic, dimly lit war room with cybersecurity experts analyzing a massive digital map showing a coordinated global cyber attack, red and blue tactical lines intersecting, photorealistic.",
      "conceptVideoPrompt": "A dynamic visualization of a tradeoff matrix. Different security options are represented as glowing 3D pillars that rise and fall based on shifting variables like effectiveness, reliability, and equity, culminating in an optimal strategic choice. 4k, sleek data visualization.",
      "learningAids": [
        {
          "id": "cybersecurity-501-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "chunks": [
        {
          "id": "cybersecurity-501-l04-c1",
          "kind": "example",
          "title": "Case Stakes and Competing Objectives",
          "content": "Analyze a coordinated attack campaign requiring rapid, synchronized responses across detection, containment, communication, and recovery. Map strategic objectives, identify critical failure risks, and navigate strict governance constraints to formulate a comprehensive, real-world incident response strategy."
        },
        {
          "id": "cybersecurity-501-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix and Option Scoring",
          "content": "Evaluate competing security interventions using a rigorous tradeoff matrix. Score options against critical criteria including operational effectiveness, system reliability, stakeholder equity, technical feasibility, and long-term maintainability to ensure balanced, defensible decision-making."
        },
        {
          "id": "cybersecurity-501-l04-c3",
          "kind": "recap",
          "title": "Recovery and Adaptation Design",
          "content": "Translate post-incident failure signatures into actionable, systemic safeguards. Develop dynamic response playbooks and measurable adaptation loops that convert operational breakdowns into continuous security posture improvements."
        }
      ],
      "flashcards": [
        {
          "id": "cybersecurity-501-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A scoring framework for choosing among competing options under real constraints."
        },
        {
          "id": "cybersecurity-501-l04-f2",
          "front": "Failure signature",
          "back": "A recurrent signal indicating a predictable class of breakdown risk."
        },
        {
          "id": "cybersecurity-501-l04-f3",
          "front": "Adaptation loop",
          "back": "A measured process for converting incident learning into improved future behavior."
        }
      ],
      "imageUrl": "/generated-images/refinery/cybersecurity-501-l04.png"
    },
    {
      "id": "cybersecurity-501-l05",
      "title": "Cybersecurity Simulation and Response Studio",
      "type": "interactive",
      "duration": 17,
      "lessonImagePrompt": "A virtual reality simulation interface showing a network under attack, with floating holographic panels displaying intervention pathways, thresholds, and real-time system health metrics, cyberpunk aesthetic, photorealistic.",
      "conceptVideoPrompt": "A fast-paced point-of-view shot navigating through a digital maze representing a network under attack. The user selects different intervention pathways, causing the maze to dynamically reconfigure and trap the malicious red data streams. 4k, immersive.",
      "learningAids": [
        {
          "id": "cybersecurity-501-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "chunks": [
        {
          "id": "cybersecurity-501-l05-c1",
          "kind": "practice",
          "title": "Scenario Modeling",
          "content": "Configure operating assumptions, critical thresholds, and intervention pathways within high-fidelity simulation environments. Execute these models under high-stakes, time-constrained conditions to refine strategic response capabilities and validate theoretical defense architectures."
        },
        {
          "id": "cybersecurity-501-l05-c2",
          "kind": "recap",
          "title": "Debrief and Decision Quality Review",
          "content": "Conduct exhaustive post-simulation reviews to evaluate target adherence, analyze unintended side effects, and identify governance compliance gaps. This rigorous debriefing protocol is essential for calibrating decision quality and driving iterative performance enhancements."
        }
      ],
      "interactiveActivities": [
        {
          "id": "cybersecurity-501-l05-act1",
          "type": "scenario_practice",
          "title": "High-Stakes Intervention Simulation",
          "description": "Compare three advanced interventions and justify which best improves threat modeling and security governance.",
          "instructions": [
            "Define objective, constraints, and escalation triggers.",
            "Record near-term and long-term tradeoffs for each intervention.",
            "Select the metric set that confirms or falsifies your chosen approach."
          ]
        },
        {
          "id": "cybersecurity-501-l05-act2",
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
      "imageUrl": "/generated-images/refinery/cybersecurity-501-l05.png"
    },
    {
      "id": "cybersecurity-501-l06",
      "title": "Checkpoint 2: Research and Systems Decisions",
      "type": "quiz",
      "duration": 11,
      "lessonImagePrompt": "A glowing, translucent digital brain composed of binary code and network nodes, symbolizing advanced research, analysis, and systemic decision-making in cybersecurity, dark background, photorealistic.",
      "conceptVideoPrompt": "A cinematic sequence showing a complex web of data points coalescing into a clear, structured decision tree. Glowing pulses travel down the optimal paths, representing informed, research-backed systems decisions. 4k, abstract data visualization.",
      "learningAids": [
        {
          "id": "cybersecurity-501-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "questions": [
        {
          "id": "cybersecurity-501-l06-q1",
          "text": "What is the primary purpose of utilizing a tradeoff matrix in advanced case analysis?",
          "skillId": "cybersecurity-501-skill-tradeoff",
          "options": [
            {
              "id": "a",
              "text": "To eliminate all risks associated with an intervention"
            },
            {
              "id": "b",
              "text": "To score competing options against criteria like reliability, equity, and feasibility"
            },
            {
              "id": "c",
              "text": "To bypass governance constraints during an emergency"
            },
            {
              "id": "d",
              "text": "To automate the incident response process entirely"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix provides a rigorous framework for scoring competing options under real constraints."
        },
        {
          "id": "cybersecurity-501-l06-q2",
          "text": "In the context of recovery and adaptation design, a 'failure signature' is best defined as:",
          "skillId": "cybersecurity-501-skill-failure-signature",
          "options": [
            {
              "id": "a",
              "text": "A recurrent signal indicating a predictable class of breakdown risk"
            },
            {
              "id": "b",
              "text": "The digital footprint left by a malicious actor"
            },
            {
              "id": "c",
              "text": "A cryptographic key used to lock compromised systems"
            },
            {
              "id": "d",
              "text": "An isolated, unrepeatable system error"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Failure signatures are recurrent signals that help architects predict and mitigate specific classes of breakdown risks."
        },
        {
          "id": "cybersecurity-501-l06-q3",
          "text": "What is the core function of an adaptation loop following a cybersecurity incident?",
          "skillId": "cybersecurity-501-skill-adaptation",
          "options": [
            {
              "id": "a",
              "text": "To assign blame to specific operational teams"
            },
            {
              "id": "b",
              "text": "To convert incident learning into measurable, improved future behavior and safeguards"
            },
            {
              "id": "c",
              "text": "To restore systems to their exact pre-incident state without changes"
            },
            {
              "id": "d",
              "text": "To generate public relations statements"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Adaptation loops ensure that lessons learned from incidents are systematically integrated into future security postures."
        },
        {
          "id": "cybersecurity-501-l06-q4",
          "text": "During high-stakes scenario modeling, an architect must prioritize configuring:",
          "skillId": "cybersecurity-501-skill-scenario",
          "options": [
            {
              "id": "a",
              "text": "Operating assumptions, critical thresholds, and intervention pathways"
            },
            {
              "id": "b",
              "text": "Marketing metrics and user engagement statistics"
            },
            {
              "id": "c",
              "text": "Only the best-case operational outcomes"
            },
            {
              "id": "d",
              "text": "Static defense perimeters that cannot be altered"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Effective scenario modeling requires defining assumptions, thresholds, and dynamic intervention pathways."
        },
        {
          "id": "cybersecurity-501-l06-q5",
          "text": "A rigorous debrief and decision quality review should focus heavily on:",
          "skillId": "cybersecurity-501-skill-debrief",
          "options": [
            {
              "id": "a",
              "text": "Celebrating successful metrics while ignoring near-misses"
            },
            {
              "id": "b",
              "text": "Evaluating target adherence, analyzing unintended side effects, and identifying governance gaps"
            },
            {
              "id": "c",
              "text": "Expediting the closure of the incident ticket"
            },
            {
              "id": "d",
              "text": "Ensuring the simulation results match initial hypotheses perfectly"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Quality reviews must critically analyze side effects, governance gaps, and target adherence to drive improvement."
        },
        {
          "id": "cybersecurity-501-l06-q6",
          "text": "When comparing advanced interventions in a simulation, the chosen approach must be validated by:",
          "skillId": "cybersecurity-501-skill-validation",
          "options": [
            {
              "id": "a",
              "text": "A metric set that can confirm or falsify the approach's efficacy"
            },
            {
              "id": "b",
              "text": "The subjective preference of the incident commander"
            },
            {
              "id": "c",
              "text": "The speed of implementation alone"
            },
            {
              "id": "d",
              "text": "Its alignment with legacy system architectures"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Scientific rigor in cybersecurity requires metrics capable of falsifying or confirming the chosen intervention."
        },
        {
          "id": "cybersecurity-501-l06-q7",
          "text": "Which mitigation action best addresses the risk of an 'ambiguous ownership chain'?",
          "skillId": "cybersecurity-501-skill-mitigation-1",
          "options": [
            {
              "id": "a",
              "text": "Strengthening baseline instrumentation"
            },
            {
              "id": "b",
              "text": "Defining an accountable owner map and explicit escalation rights"
            },
            {
              "id": "c",
              "text": "Increasing transparency with external stakeholders"
            },
            {
              "id": "d",
              "text": "Re-aligning controls to governance standards"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Ambiguous ownership is directly resolved by mapping accountable owners and defining escalation rights."
        },
        {
          "id": "cybersecurity-501-l06-q8",
          "text": "If a system exhibits 'policy-execution drift', the most appropriate mitigation is to:",
          "skillId": "cybersecurity-501-skill-mitigation-2",
          "options": [
            {
              "id": "a",
              "text": "Re-align operational controls to explicit governance standards"
            },
            {
              "id": "b",
              "text": "Rewrite the policy to match the drifted execution"
            },
            {
              "id": "c",
              "text": "Ignore the drift if no breaches have occurred"
            },
            {
              "id": "d",
              "text": "Increase the frequency of corrective feedback to customers"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Policy-execution drift requires re-aligning the actual operational controls back to the established governance standards."
        }
      ],
      "imageUrl": "/generated-images/refinery/cybersecurity-501-l06.png"
    },
    {
      "id": "cybersecurity-501-l07",
      "title": "Cybersecurity Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "lessonImagePrompt": "A modern corporate boardroom with a large holographic display showing a balance scale weighing cybersecurity risks against public impact and ethical governance, sleek, professional, photorealistic.",
      "conceptVideoPrompt": "A visual metaphor of a ripple effect in a digital pool. A single security decision (a glowing data drop) hits the surface, and the ripples expand outward, highlighting different stakeholder groups and long-term impacts. 4k, elegant motion graphics.",
      "learningAids": [
        {
          "id": "cybersecurity-501-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "chunks": [
        {
          "id": "cybersecurity-501-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "Evaluate the asymmetric distribution of cybersecurity outcomes across diverse stakeholder groups. Analyze delayed, indirect, and cascading effects to fully comprehend the broader socio-technical impact of architectural and operational security decisions."
        },
        {
          "id": "cybersecurity-501-l07-c2",
          "kind": "concept",
          "title": "Accountability System Design",
          "content": "Architect transparent accountability frameworks by enforcing strict traceability standards, establishing clear review rights, and defining explicit remediation obligations. These structures are critical for maintaining institutional trust and ensuring responsible security governance."
        },
        {
          "id": "cybersecurity-501-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "Operationalize a responsible leadership framework that aligns strategic intent, ethical obligations, policy mandates, and technical controls. Utilize this comprehensive checklist to ensure high-stakes decisions remain transparent, accountable, and aligned with public interest."
        }
      ],
      "flashcards": [
        {
          "id": "cybersecurity-501-l07-f1",
          "front": "Impact distribution",
          "back": "How benefits and harms are allocated across groups and timeframes."
        },
        {
          "id": "cybersecurity-501-l07-f2",
          "front": "Decision traceability",
          "back": "An auditable explanation of evidence, rationale, and ownership behind a decision."
        },
        {
          "id": "cybersecurity-501-l07-f3",
          "front": "Responsible leadership",
          "back": "Decision practice that balances performance, risk, ethics, and accountability."
        }
      ],
      "imageUrl": "/generated-images/refinery/cybersecurity-501-l07.png"
    },
    {
      "id": "cybersecurity-501-l08",
      "title": "Cybersecurity Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "lessonImagePrompt": "A professional cybersecurity expert standing confidently in front of a panel of judges in a high-tech auditorium, presenting a comprehensive digital capstone charter on a massive screen, cinematic lighting, photorealistic.",
      "conceptVideoPrompt": "A dynamic montage of a capstone project coming together: documents being digitally signed, network architectures being finalized, and a glowing shield locking into place, symbolizing a fully defended and rigorously tested security posture. 4k, inspiring.",
      "learningAids": [
        {
          "id": "cybersecurity-501-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "chunks": [
        {
          "id": "cybersecurity-501-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter and Evidence Pack",
          "content": "Draft a comprehensive specialization capstone charter. Define precise scope boundaries, operational constraints, and governance controls. Construct a robust evidence plan detailing the empirical metrics and validation methodologies required to prove architectural efficacy."
        },
        {
          "id": "cybersecurity-501-l08-c2",
          "kind": "recap",
          "title": "Defense Rehearsal",
          "content": "Engage in a rigorous defense rehearsal to prepare for expert scrutiny. Articulate and justify architectural decisions, tradeoff rationales, and governance compliance against aggressive technical and strategic critiques, refining your ability to communicate complex security postures."
        }
      ],
      "interactiveActivities": [
        {
          "id": "cybersecurity-501-l08-act1",
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
          "id": "cybersecurity-501-l08-act2",
          "type": "debate_simulator",
          "title": "Capstone Defense Panel",
          "description": "Defend your capstone against expert critique on rigor, risk, and accountability."
        }
      ],
      "imageUrl": "/generated-images/refinery/cybersecurity-501-l08.png"
    }
  ]
};
