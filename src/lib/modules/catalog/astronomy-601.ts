import type { LearningModule } from "@/lib/modules/types";

export const astronomy_601_Module: LearningModule = {
  "id": "astronomy-601",
  "title": "Astronomy Research and Leadership",
  "description": "Post-401 specialization in Astronomy, focused on astronomy systems diagnostics, astronomy operations and execution design, astronomy impact and tradeoff analysis, and astronomy governance and leadership through advanced casework, simulation, and defense-based checkpoints.",
  "subject": "Astronomy",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "astronomy",
    "specialization",
    "leadership"
  ],
  "minAge": 17,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Apply advanced methods for astronomy systems diagnostics in high-constraint environments",
    "Design robust systems for astronomy operations and execution design with measurable control gates",
    "Evaluate interventions in astronomy impact and tradeoff analysis with research-grade rigor",
    "Operationalize astronomy governance and leadership with accountable governance and escalation pathways",
    "Lead cross-functional decision reviews with explicit tradeoff communication",
    "Defend recommendations under expert critique using evidence and uncertainty bounds"
  ],
  "lessons": [
    {
      "id": "astronomy-601-l01",
      "title": "Astronomy Advanced Foundations",
      "type": "video",
      "duration": 14,
      "lessonImagePrompt": "A high-tech astronomical observatory control room with glowing holographic star maps and data diagnostics screens, cinematic lighting, photorealistic.",
      "conceptVideoPrompt": "A slow cinematic pan across a futuristic observatory control room, showing scientists analyzing complex causal pathways of galaxy formations on large glowing screens, highly detailed, 4k resolution.",
      "learningAids": [
        {
          "id": "astronomy-601-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "astronomy-601-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "In this lesson, we explore the advanced boundaries of astrophysics research and mission planning. We will focus on how to diagnose complex astronomical systems and design effective operational strategies. Defining precise system boundaries is crucial for leading large-scale observational projects, ensuring that our research scope is both thorough and resource-efficient."
        },
        {
          "id": "astronomy-601-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "Learners will engage in mapping out causal pathways—the intricate connections between different astrophysical phenomena and observational constraints. We will identify uncertainty ranges and system dependencies, which are critical when planning interventions like satellite deployments or telescope time allocation. This process helps us quantify risks and address observational challenges effectively."
        },
        {
          "id": "astronomy-601-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "It is essential that all claims made in advanced astronomical research are supported by measurable indicators. This means establishing strict confidence bounds and setting up rigorous review checkpoints. By enforcing these evidence thresholds, we ensure that our findings are scientifically defensible and can withstand peer review in the global scientific community."
        }
      ],
      "flashcards": [
        {
          "id": "astronomy-601-l01-f1",
          "front": "Astronomy Systems Diagnostics",
          "back": "A specialization axis requiring explicit assumptions and measurable constraints when analyzing astrophysical data."
        },
        {
          "id": "astronomy-601-l01-f2",
          "front": "Operations and Execution Design",
          "back": "Execution architecture that determines mission reliability under stress and resource constraints."
        },
        {
          "id": "astronomy-601-l01-f3",
          "front": "Impact and Tradeoff Analysis",
          "back": "Evaluation discipline for identifying true scientific gains and hidden operational costs."
        }
      ],
      "imageUrl": "/generated-images/refinery/astronomy-601-l01.png"
    },
    {
      "id": "astronomy-601-l02",
      "title": "Astronomy Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "lessonImagePrompt": "A digital interface showing a stress-test simulation of a satellite deployment, with red and green status indicators, sleek modern UI design.",
      "conceptVideoPrompt": "A dynamic screen recording style video showing a complex workflow diagram for a space mission being stress-tested, with nodes turning red and rerouting to green backup systems.",
      "learningAids": [
        {
          "id": "astronomy-601-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "astronomy-601-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "In this interactive practice, you will design specialized workflows tailored for high-stakes astronomy research, such as coordinating multi-messenger observation campaigns. You will conduct stress tests on these workflows by simulating adverse scenarios like sudden sensor failures or extreme weather at ground-based observatories. This hands-on experience is vital for building resilient mission architectures."
        },
        {
          "id": "astronomy-601-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "We will now review how your workflows should integrate various checkpoints, rollback criteria, and threshold-based escalation processes. In mission-critical astronomy, these components are the safety nets that ensure our research remains on track and that we can respond systematically if anomalies occur during data collection."
        }
      ],
      "interactiveActivities": [
        {
          "id": "astronomy-601-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Outcome Mapping",
          "description": "Match specialist controls with their strongest reliability and governance effects in an astronomical mission context.",
          "pairs": [
            {
              "left": "Pre-commit gate",
              "right": "Prevents avoidable downstream failures before telescope deployment"
            },
            {
              "left": "Rollback trigger",
              "right": "Limits blast radius under adverse observational outcomes"
            },
            {
              "left": "Baseline dashboard",
              "right": "Supports defensible impact attribution for new discoveries"
            },
            {
              "left": "Retrospective loop",
              "right": "Improves next-cycle decision quality for grant allocations"
            }
          ]
        }
      ],
      "imageUrl": "/generated-images/refinery/astronomy-601-l02.png"
    },
    {
      "id": "astronomy-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A glowing digital lock over a backdrop of deep space, symbolizing a checkpoint in a high-stakes astronomy mission, photorealistic.",
      "conceptVideoPrompt": "A subtle animation of a glowing digital lock rotating against a backdrop of a moving nebula, symbolizing knowledge verification.",
      "learningAids": [
        {
          "id": "astronomy-601-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "questions": [
        {
          "id": "astronomy-601-l03-q1",
          "text": "Which practice most improves astronomy systems diagnostics decision quality?",
          "skillId": "astronomy-601-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Proceed without baseline or assumptions"
            },
            {
              "id": "b",
              "text": "Define assumptions, constraints, and measurable indicators"
            },
            {
              "id": "c",
              "text": "Optimize only for speed in every context"
            },
            {
              "id": "d",
              "text": "Ignore uncertainty and edge conditions"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Advanced decisions improve when assumptions, constraints, and metrics are explicit."
        },
        {
          "id": "astronomy-601-l03-q2",
          "text": "At level 601, strong execution for astronomy operations and execution design requires:",
          "skillId": "astronomy-601-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Owner mapping, checkpoint cadence, and escalation thresholds"
            },
            {
              "id": "b",
              "text": "No role clarity and ad-hoc process changes"
            },
            {
              "id": "c",
              "text": "No retrospective or post-run review"
            },
            {
              "id": "d",
              "text": "No rollback or fallback conditions"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable advanced execution needs ownership clarity and threshold-driven governance."
        },
        {
          "id": "astronomy-601-l03-q3",
          "text": "A defensible approach to astronomy impact and tradeoff analysis includes:",
          "skillId": "astronomy-601-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Anecdotes without comparison"
            },
            {
              "id": "b",
              "text": "Baseline comparisons, side-effect analysis, and uncertainty bounds"
            },
            {
              "id": "c",
              "text": "Changing success criteria after outcomes"
            },
            {
              "id": "d",
              "text": "Excluding difficult scenarios from analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible analysis combines comparative baselines, side-effect checks, and uncertainty disclosure."
        },
        {
          "id": "astronomy-601-l03-q4",
          "text": "Mature governance systems in international astronomy collaborations connect:",
          "skillId": "astronomy-601-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Policy intent, measurable controls, and remediation pathways"
            },
            {
              "id": "b",
              "text": "Policy language with no measurable enforcement"
            },
            {
              "id": "c",
              "text": "Targets without ownership or escalation design"
            },
            {
              "id": "d",
              "text": "Operations without transparent accountability"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Governance maturity is the operational link between intent, measurement, and corrective action."
        },
        {
          "id": "astronomy-601-l03-q5",
          "text": "What is the best way to compare competing interventions (e.g., upgrading a sensor vs. launching a new probe) in advanced Astronomy?",
          "skillId": "astronomy-601-skill-advanced-5",
          "options": [
            {
              "id": "a",
              "text": "Choose the option with the most persuasive narrative"
            },
            {
              "id": "b",
              "text": "Score alternatives against shared metrics, side effects, and uncertainty bounds"
            },
            {
              "id": "c",
              "text": "Switch metrics after results arrive"
            },
            {
              "id": "d",
              "text": "Prioritize whichever option has the shortest memo"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible comparisons require shared metrics, side-effect accounting, and uncertainty disclosure."
        },
        {
          "id": "astronomy-601-l03-q6",
          "text": "In high-stakes Astronomy Research and Leadership execution, which communication protocol is strongest?",
          "skillId": "astronomy-601-skill-advanced-6",
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
          "id": "astronomy-601-l03-q7",
          "text": "A mature remediation loop following an observational anomaly should prioritize:",
          "skillId": "astronomy-601-skill-advanced-7",
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
          "id": "astronomy-601-l03-q8",
          "text": "Which portfolio decision rule best balances performance and resilience in allocating telescope time?",
          "skillId": "astronomy-601-skill-advanced-8",
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
      "imageUrl": "/generated-images/refinery/astronomy-601-l03.png"
    },
    {
      "id": "astronomy-601-l04",
      "title": "Astronomy Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "lessonImagePrompt": "A diverse team of senior astrophysicists sitting around a sleek conference table, reviewing a glowing 3D projection of a planetary system, cinematic.",
      "conceptVideoPrompt": "A time-lapse of a team of astrophysicists in a modern glass-walled meeting room, intensely discussing and pointing at a 3D holographic projection of a planetary system.",
      "learningAids": [
        {
          "id": "astronomy-601-l04-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "astronomy-601-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "This lesson focuses on the architecture of scenarios in astronomy case analysis. We will examine how to frame competing constraints that arise during mission planning and systems diagnostics. Understanding these constraints—such as budget limits versus scientific yield—is key to conducting effective impact and tradeoff analyses."
        },
        {
          "id": "astronomy-601-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing",
          "content": "In this practice session, you will compare different mission architectures based on several critical dimensions: safety, reliability, cost, equity of data access, and governance. This multidimensional comparison is essential for making well-rounded decisions that consider all aspects of a complex astronomical endeavor."
        },
        {
          "id": "astronomy-601-l04-c3",
          "kind": "recap",
          "title": "Decision Memo Pattern",
          "content": "We will review the structure of executive decision memos used in space agencies and research institutions. Each recommendation must include clear assumptions, supporting astrophysical evidence, risk controls, and fallback plans. This thorough approach ensures that our decisions are well-supported and can secure funding and approval."
        }
      ]
    },
    {
      "id": "astronomy-601-l05",
      "title": "Astronomy Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "lessonImagePrompt": "A first-person view of a complex dashboard used to control a deep-space probe, featuring telemetry data and interactive dials, photorealistic.",
      "conceptVideoPrompt": "A point-of-view shot interacting with a futuristic deep-space probe dashboard, adjusting dials as telemetry data fluctuates rapidly on screen.",
      "learningAids": [
        {
          "id": "astronomy-601-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "astronomy-601-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Controls",
          "content": "In this interactive clinic, you will operate scenario controls during a simulated astronomical event, such as an unexpected solar flare threatening a satellite network. You must balance data collection performance with strict governance and safety constraints. This experience bridges theoretical leadership concepts with real-time, high-pressure decision-making."
        },
        {
          "id": "astronomy-601-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "Following the simulation, we will analyze the importance of adaptive responses. Updating control gates dynamically while maintaining strict traceability and accountability ensures that all actions taken during an anomaly are documented. This is vital for post-incident reviews and maintaining transparency in the scientific community."
        }
      ],
      "interactiveActivities": [
        {
          "id": "astronomy-601-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Run a high-pressure astronomy scenario (e.g., orbital debris threat) and tune controls under uncertainty."
        }
      ],
      "imageUrl": "/generated-images/refinery/astronomy-601-l05.png"
    },
    {
      "id": "astronomy-601-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "lessonImagePrompt": "A stylized glowing checkmark superimposed over a detailed image of a spiral galaxy, representing mastery and success.",
      "conceptVideoPrompt": "A slow zoom into a highly detailed spiral galaxy, with a subtle, elegant glowing checkmark forming in the foreground.",
      "learningAids": [
        {
          "id": "astronomy-601-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "questions": [
        {
          "id": "astronomy-601-l06-q1",
          "text": "In advanced casework for space missions, the first requirement for defensible recommendations is:",
          "skillId": "astronomy-601-skill-case1",
          "options": [
            {
              "id": "a",
              "text": "A preferred option without explicit assumptions"
            },
            {
              "id": "b",
              "text": "A clear baseline, explicit constraints, and success criteria"
            },
            {
              "id": "c",
              "text": "High confidence without evidence logs"
            },
            {
              "id": "d",
              "text": "Single-metric optimization only"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible recommendations begin with explicit assumptions, constraints, and measurable targets."
        },
        {
          "id": "astronomy-601-l06-q2",
          "text": "A resilient strategy for astronomy operations and execution design should include:",
          "skillId": "astronomy-601-skill-case2",
          "options": [
            {
              "id": "a",
              "text": "Checkpointed execution with fallback and escalation criteria"
            },
            {
              "id": "b",
              "text": "One-way execution with no rollback capability"
            },
            {
              "id": "c",
              "text": "No ownership mapping across teams"
            },
            {
              "id": "d",
              "text": "Hidden assumptions and undocumented decisions"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Resilience depends on checkpoints, fallback options, and explicit escalation design."
        },
        {
          "id": "astronomy-601-l06-q3",
          "text": "When evaluating astronomy impact and tradeoff analysis, which method is most rigorous?",
          "skillId": "astronomy-601-skill-case3",
          "options": [
            {
              "id": "a",
              "text": "Single success story without controls"
            },
            {
              "id": "b",
              "text": "Comparative baselines plus side-effect and uncertainty analysis"
            },
            {
              "id": "c",
              "text": "Outcome-only narrative without process evidence"
            },
            {
              "id": "d",
              "text": "Retrospective scope changes to fit outcomes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rigorous evaluation requires comparisons, side-effect analysis, and uncertainty disclosure."
        },
        {
          "id": "astronomy-601-l06-q4",
          "text": "Advanced governance in multi-national observatories is strongest when it:",
          "skillId": "astronomy-601-skill-case4",
          "options": [
            {
              "id": "a",
              "text": "Aligns authority, measurement, and remediation obligations"
            },
            {
              "id": "b",
              "text": "Separates policy from operational controls"
            },
            {
              "id": "c",
              "text": "Avoids external review and transparency"
            },
            {
              "id": "d",
              "text": "Treats accountability as optional under pressure"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Mature governance links authority, measurable controls, and corrective action."
        },
        {
          "id": "astronomy-601-l06-q5",
          "text": "During a simulated satellite failure, what is the most critical immediate action for a mission leader?",
          "skillId": "astronomy-601-skill-advanced-5",
          "options": [
            {
              "id": "a",
              "text": "Draft a press release immediately"
            },
            {
              "id": "b",
              "text": "Activate predefined fallback protocols and log all telemetry changes"
            },
            {
              "id": "c",
              "text": "Wait for the system to self-correct without intervention"
            },
            {
              "id": "d",
              "text": "Assign blame to the engineering team"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Activating fallback protocols and maintaining traceability are critical during an anomaly."
        },
        {
          "id": "astronomy-601-l06-q6",
          "text": "In high-stakes Astronomy Research and Leadership execution, which communication protocol is strongest?",
          "skillId": "astronomy-601-skill-advanced-6",
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
          "id": "astronomy-601-l06-q7",
          "text": "A mature remediation loop in advanced Astronomy should prioritize:",
          "skillId": "astronomy-601-skill-advanced-7",
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
          "id": "astronomy-601-l06-q8",
          "text": "Which portfolio decision rule best balances performance and resilience in Astronomy Research and Leadership?",
          "skillId": "astronomy-601-skill-advanced-8",
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
      "imageUrl": "/generated-images/refinery/astronomy-601-l06.png"
    },
    {
      "id": "astronomy-601-l07",
      "title": "Astronomy Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "lessonImagePrompt": "A public press conference setting with a scientist at a podium, a large screen behind them showing a newly discovered exoplanet, photorealistic.",
      "conceptVideoPrompt": "A cinematic shot of a scientist at a podium during a press conference, gesturing towards a large screen displaying a beautiful exoplanet, camera slowly panning.",
      "learningAids": [
        {
          "id": "astronomy-601-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "astronomy-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "In this lesson, we will map out the distribution of benefits, burdens, and delayed effects across different stakeholder groups. Building large-scale infrastructure, like ground-based telescope arrays, impacts local communities, indigenous populations, and the global scientific body. Recognizing these impacts is crucial for ethical astronomy leadership."
        },
        {
          "id": "astronomy-601-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "We will explore the architecture of accountability in international space collaborations. This includes understanding how decision traceability, review rights, and remediation obligations are integrated into treaties and agency policies. These elements ensure that all decisions are made responsibly and can withstand public and governmental scrutiny."
        },
        {
          "id": "astronomy-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "To conclude, we will introduce a responsible leadership checklist that connects scientific outcomes with ethical considerations. This framework ensures policy compliance, builds resilience in our leadership approach, and guides us in making decisions that respect both the pursuit of knowledge and the communities we serve."
        }
      ],
      "flashcards": [
        {
          "id": "astronomy-601-l07-f1",
          "front": "Impact Distribution",
          "back": "How outcomes, benefits, and burdens of astronomical projects are allocated across populations and timescales."
        },
        {
          "id": "astronomy-601-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record of evidence, ownership, and rationale for mission-critical choices."
        },
        {
          "id": "astronomy-601-l07-f3",
          "front": "Responsible Leadership",
          "back": "Decision behavior balancing scientific performance, public accountability, and ethics."
        }
      ],
      "imageUrl": "/generated-images/refinery/astronomy-601-l07.png"
    },
    {
      "id": "astronomy-601-l08",
      "title": "Astronomy Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "lessonImagePrompt": "A formal academic defense setting, a candidate standing before a panel of experts with a large screen displaying complex astrophysical equations, cinematic lighting.",
      "conceptVideoPrompt": "A tense, cinematic shot of an academic defense, the camera slowly pushing in on the candidate as they confidently explain complex astrophysical equations to a panel of experts.",
      "learningAids": [
        {
          "id": "astronomy-601-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "astronomy-601-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this final interactive activity, you will compile a comprehensive defense brief for a proposed multi-billion dollar space observatory. This brief must articulate your scientific claims, the empirical evidence supporting them, quantified uncertainty bounds, and concrete pathways for remediation if technical challenges arise. Organization and clarity are paramount."
        },
        {
          "id": "astronomy-601-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "You will now practice your responses to adversarial critiques from a simulated expert panel. Prepare to defend your technical feasibility assessments, budget allocations, and governance structures. This rehearsal will test your ability to remain objective, rely on evidence, and communicate tradeoffs effectively under pressure."
        }
      ],
      "interactiveActivities": [
        {
          "id": "astronomy-601-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend your specialization recommendations and mission architecture under adversarial cross-examination."
        }
      ]
    }
  ]
};
