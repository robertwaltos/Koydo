import type { LearningModule } from "@/lib/modules/types";

export const cybersecurity_601_Module: LearningModule = {
  "id": "cybersecurity-601",
  "title": "Cybersecurity Research and Leadership",
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
      "id": "cybersecurity-601-l01",
      "title": "Cybersecurity Advanced Foundations",
      "type": "video",
      "duration": 14,
      "lessonImagePrompt": "A sleek, high-tech cybersecurity command center with holographic data models showing threat vectors, cinematic lighting, photorealistic, 8k.",
      "conceptVideoPrompt": "A slow pan across a futuristic digital map where glowing red threat nodes are systematically neutralized by blue defense shields, high contrast, cinematic depth of field.",
      "learningAids": [
        {
          "id": "cybersecurity-601-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "chunks": [
        {
          "id": "cybersecurity-601-l01-c1",
          "kind": "concept",
          "title": "Advanced Scope and Decision Boundaries",
          "content": "In this lesson, we will explore the advanced boundaries of Cybersecurity leadership. We will learn how to define these boundaries and understand the critical importance of threat modeling in high-stakes environments. Additionally, we will discuss how the concept of defense-in-depth design plays a crucial role in protecting complex systems from sophisticated, multi-vector threats. By the end of this lesson, you will have a clearer understanding of how these elements interact to create a resilient digital infrastructure."
        },
        {
          "id": "cybersecurity-601-l01-c2",
          "kind": "concept",
          "title": "Causal Structure Under Uncertainty",
          "content": "Learners will engage in modeling causal pathways, which helps us understand how different systemic factors can lead to cascading security outcomes. We will explore the ranges of uncertainty that affect our strategic decisions and identify hidden assumptions that might compromise our architectural designs. This foundational knowledge is essential for creating effective, proactive interventions in Cybersecurity, ensuring preparedness for highly volatile scenarios."
        },
        {
          "id": "cybersecurity-601-l01-c3",
          "kind": "recap",
          "title": "Evidence and Rigor Standards",
          "content": "We emphasize the importance of grounding all advanced security claims in measurable indicators. Every assertion made in a leadership capacity must be supported by quantifiable data. We will discuss the significance of establishing confidence bounds and setting up rigorous review checkpoints to ensure that our findings are reliable and can withstand expert scrutiny. This empirical approach is vital for maintaining high standards in enterprise security."
        }
      ],
      "flashcards": [
        {
          "id": "cybersecurity-601-l01-f1",
          "front": "Threat Modeling",
          "back": "A specialization axis in Cybersecurity requiring explicit assumptions and measured tradeoff choices to anticipate attack vectors."
        },
        {
          "id": "cybersecurity-601-l01-f2",
          "front": "Defense-in-Depth Design",
          "back": "Operational design capability that governs whether complex workflows remain reliable through layered security controls."
        },
        {
          "id": "cybersecurity-601-l01-f3",
          "front": "Incident Response Systems",
          "back": "Evaluation practice for validating outcomes beyond headline metrics, focusing on containment, eradication, and recovery."
        }
      ],
      "imageUrl": "/generated-images/refinery/cybersecurity-601-l01.png"
    },
    {
      "id": "cybersecurity-601-l02",
      "title": "Cybersecurity Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "lessonImagePrompt": "A diverse team of cybersecurity specialists analyzing complex network graphs on a large glowing interactive table, modern laboratory setting, dramatic shadows.",
      "conceptVideoPrompt": "Time-lapse of a cybersecurity team collaborating around a digital whiteboard, drawing connections between failure gates and control systems, dynamic lighting.",
      "learningAids": [
        {
          "id": "cybersecurity-601-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "chunks": [
        {
          "id": "cybersecurity-601-l02-c1",
          "kind": "practice",
          "title": "Method Sequence and Stress Test",
          "content": "In this interactive lab, learners will create a specialist workflow that focuses on high-quality research reasoning and effective leadership decision-making. This workflow will culminate in a capstone defense that meets publication standards. After building this workflow, students will put it to the test against challenging scenarios, including adversarial conditions and edge cases. This hands-on experience solidifies the application of theoretical knowledge in high-pressure, real-world situations."
        },
        {
          "id": "cybersecurity-601-l02-c2",
          "kind": "recap",
          "title": "Controls and Failure Gates",
          "content": "We highlight the necessity of incorporating control gates, rollback criteria, and accountability checkpoints into robust specialist workflows. These elements are essential for ensuring that our processes are reliable and can adapt to unexpected systemic challenges. By understanding and implementing these controls, leaders are better equipped to manage risks and maintain the integrity of their organization's security posture."
        }
      ],
      "interactiveActivities": [
        {
          "id": "cybersecurity-601-l02-act1",
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
          "id": "cybersecurity-601-l02-act2",
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
      "imageUrl": "/generated-images/refinery/cybersecurity-601-l02.png"
    },
    {
      "id": "cybersecurity-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 11,
      "lessonImagePrompt": "A glowing digital lock morphing into a shield, surrounded by floating binary code and checkmarks, representing assessment and security, 3D render, neon blue and silver.",
      "conceptVideoPrompt": "A smooth zoom into a digital interface where multiple security checkpoints light up green one by one, symbolizing successful knowledge validation, sleek UI animation.",
      "learningAids": [
        {
          "id": "cybersecurity-601-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "questions": [
        {
          "id": "cybersecurity-601-l03-q1",
          "text": "Which practice most improves specialist performance in threat modeling?",
          "skillId": "cybersecurity-601-skill-specialist",
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
          "id": "cybersecurity-601-l03-q2",
          "text": "At level 601, the curriculum emphasizes:",
          "skillId": "cybersecurity-601-skill-level",
          "options": [
            {
              "id": "a",
              "text": "Research-grade reasoning, leadership decision quality, and publishable capstone defense"
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
          "explanation": "The 601 design is built around research-grade reasoning, leadership decision quality, and publishable capstone defense."
        },
        {
          "id": "cybersecurity-601-l03-q3",
          "text": "What best strengthens defense-in-depth design execution quality?",
          "skillId": "cybersecurity-601-skill-execution",
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
          "id": "cybersecurity-601-l03-q4",
          "text": "A rigorous approach to incident response systems should include:",
          "skillId": "cybersecurity-601-skill-evaluation",
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
          "id": "cybersecurity-601-l03-q5",
          "text": "A mature security governance system should connect:",
          "skillId": "cybersecurity-601-skill-governance",
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
          "id": "cybersecurity-601-l03-q6",
          "text": "In high-stakes Cybersecurity Research and Leadership execution, which communication protocol is strongest?",
          "skillId": "cybersecurity-601-skill-advanced-6",
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
          "id": "cybersecurity-601-l03-q7",
          "text": "A mature remediation loop in advanced Computer Science should prioritize:",
          "skillId": "cybersecurity-601-skill-advanced-7",
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
          "id": "cybersecurity-601-l03-q8",
          "text": "Which portfolio decision rule best balances performance and resilience in Cybersecurity Research and Leadership?",
          "skillId": "cybersecurity-601-skill-advanced-8",
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
      ]
    },
    {
      "id": "cybersecurity-601-l04",
      "title": "Cybersecurity Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "lessonImagePrompt": "A split-screen holographic display showing a cyber attack on one side and a structured tradeoff matrix on the other, high-tech corporate boardroom, photorealistic.",
      "conceptVideoPrompt": "A dynamic 3D visualization of a cyber threat spreading through a network, followed by a rapid deployment of containment protocols that isolate the affected nodes, cinematic camera sweep.",
      "learningAids": [
        {
          "id": "cybersecurity-601-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "chunks": [
        {
          "id": "cybersecurity-601-l04-c1",
          "kind": "example",
          "title": "Case Stakes and Competing Objectives",
          "content": "In this engaging case study, we explore a coordinated attack campaign that requires swift and effective responses, including detection, containment, communication, and recovery. Learners will map out strategic objectives that guide their actions, identify potential risks that could lead to failure, and understand the governance constraints that must be adhered to before proceeding. This hands-on activity deepens the understanding of the complexities involved in Cybersecurity and highlights the critical importance of thorough planning in high-stakes scenarios."
        },
        {
          "id": "cybersecurity-601-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix and Option Scoring",
          "content": "We introduce the concept of a tradeoff matrix, where different strategic options are evaluated based on rigorous criteria. These criteria include effectiveness, reliability, equity, feasibility, and long-term maintainability. By scoring options across these dimensions, learners develop a deeper understanding of how to make informed, defensible decisions in Cybersecurity, balancing competing priorities to achieve optimal outcomes."
        },
        {
          "id": "cybersecurity-601-l04-c3",
          "kind": "recap",
          "title": "Recovery and Adaptation Design",
          "content": "We discuss how to translate failure signatures into actionable safeguards, response playbooks, and measurable adaptation loops. This process is crucial for ensuring that organizations learn from past incidents and systematically improve their responses to future challenges. By establishing these mechanisms, leaders are better prepared to adapt and respond effectively in the ever-evolving landscape of cyber threats."
        }
      ],
      "flashcards": [
        {
          "id": "cybersecurity-601-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A scoring framework for choosing among competing options under real constraints, balancing risk and reward."
        },
        {
          "id": "cybersecurity-601-l04-f2",
          "front": "Failure Signature",
          "back": "A recurrent signal or pattern indicating a predictable class of breakdown risk within a system."
        },
        {
          "id": "cybersecurity-601-l04-f3",
          "front": "Adaptation Loop",
          "back": "A measured process for converting incident learning into improved future behavior and updated security controls."
        }
      ],
      "imageUrl": "/generated-images/refinery/cybersecurity-601-l04.png"
    },
    {
      "id": "cybersecurity-601-l05",
      "title": "Cybersecurity Simulation and Response Studio",
      "type": "interactive",
      "duration": 17,
      "lessonImagePrompt": "A first-person view of a dual-monitor setup displaying live cybersecurity simulation metrics, red and blue team scores, dark room with glowing screen reflections.",
      "conceptVideoPrompt": "Over-the-shoulder shot of a cybersecurity expert typing rapidly, the screen showing a live simulation of a network breach being actively mitigated, fast-paced, tense atmosphere.",
      "learningAids": [
        {
          "id": "cybersecurity-601-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "chunks": [
        {
          "id": "cybersecurity-601-l05-c1",
          "kind": "practice",
          "title": "Scenario Modeling",
          "content": "In this interactive practice session, learners will configure simulation assumptions, set operational thresholds, and outline intervention pathways while operating under high-stakes conditions. This hands-on experience allows students to apply their theoretical knowledge in a practical setting, enhancing their understanding of how to navigate complex, rapidly evolving scenarios in Cybersecurity effectively."
        },
        {
          "id": "cybersecurity-601-l05-c2",
          "kind": "recap",
          "title": "Debrief and Decision Quality Review",
          "content": "After each simulation run, teams will engage in a structured debriefing session. They will review their performance in terms of target attainment, analyze any unintended side effects that occurred, and identify gaps in governance compliance. This reflective practice is essential for continuous improvement and helps learners internalize the importance of accountability in security operations."
        }
      ],
      "interactiveActivities": [
        {
          "id": "cybersecurity-601-l05-act1",
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
          "id": "cybersecurity-601-l05-act2",
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
      "imageUrl": "/generated-images/refinery/cybersecurity-601-l05.png"
    },
    {
      "id": "cybersecurity-601-l06",
      "title": "Checkpoint 2: Research and Systems Decisions",
      "type": "quiz",
      "duration": 11,
      "lessonImagePrompt": "A futuristic glowing scale balancing a glowing red padlock and a blue data server, representing research and systems decisions, abstract digital art, 8k.",
      "conceptVideoPrompt": "A slow, rotating shot of a glowing 3D matrix evaluating different security protocols, with data streams flowing through the optimal path, high-tech aesthetic.",
      "learningAids": [
        {
          "id": "cybersecurity-601-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "questions": [
        {
          "id": "cybersecurity-601-l06-q1",
          "text": "What is the primary purpose of a tradeoff matrix in cybersecurity incident response?",
          "skillId": "cybersecurity-601-skill-tradeoff",
          "options": [
            {
              "id": "a",
              "text": "To guarantee a zero-risk outcome for all stakeholders"
            },
            {
              "id": "b",
              "text": "To evaluate competing options across criteria like reliability, equity, and feasibility"
            },
            {
              "id": "c",
              "text": "To bypass governance constraints during an emergency"
            },
            {
              "id": "d",
              "text": "To assign blame to specific team members post-incident"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix provides a structured framework for scoring and choosing among competing options under real constraints."
        },
        {
          "id": "cybersecurity-601-l06-q2",
          "text": "How should a failure signature be utilized in recovery design?",
          "skillId": "cybersecurity-601-skill-recovery",
          "options": [
            {
              "id": "a",
              "text": "To translate predictable breakdown risks into actionable safeguards and playbooks"
            },
            {
              "id": "b",
              "text": "To permanently shut down the affected system"
            },
            {
              "id": "c",
              "text": "To obscure the root cause from external auditors"
            },
            {
              "id": "d",
              "text": "To justify ignoring minor security alerts"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Failure signatures help identify recurrent risks, allowing teams to build targeted safeguards and adaptation loops."
        },
        {
          "id": "cybersecurity-601-l06-q3",
          "text": "What defines a mature adaptation loop in cybersecurity operations?",
          "skillId": "cybersecurity-601-skill-adaptation",
          "options": [
            {
              "id": "a",
              "text": "Repeating the same incident response steps without review"
            },
            {
              "id": "b",
              "text": "Converting incident learnings into measured, improved future behaviors and controls"
            },
            {
              "id": "c",
              "text": "Waiting for a third-party audit before making any changes"
            },
            {
              "id": "d",
              "text": "Focusing solely on public relations management"
            }
          ],
          "correctOptionId": "b",
          "explanation": "An adaptation loop is a measured process that ensures lessons learned from incidents lead to tangible improvements."
        },
        {
          "id": "cybersecurity-601-l06-q4",
          "text": "During high-stakes scenario modeling, what is the most critical initial step?",
          "skillId": "cybersecurity-601-skill-modeling",
          "options": [
            {
              "id": "a",
              "text": "Drafting the final press release"
            },
            {
              "id": "b",
              "text": "Configuring explicit simulation assumptions, constraints, and escalation triggers"
            },
            {
              "id": "c",
              "text": "Executing the simulation without predefined metrics"
            },
            {
              "id": "d",
              "text": "Assuming the adversary has limited capabilities"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Effective scenario modeling requires clear assumptions, constraints, and triggers to ensure the simulation yields valuable insights."
        },
        {
          "id": "cybersecurity-601-l06-q5",
          "text": "In a post-simulation debrief, which factor is most crucial for a decision quality review?",
          "skillId": "cybersecurity-601-skill-debrief",
          "options": [
            {
              "id": "a",
              "text": "Evaluating target attainment against governance compliance and unintended side effects"
            },
            {
              "id": "b",
              "text": "Ensuring the simulation finished under the allotted time"
            },
            {
              "id": "c",
              "text": "Praising the team regardless of the outcome"
            },
            {
              "id": "d",
              "text": "Deleting the simulation logs to save storage space"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A quality review must balance whether the goal was met against the costs, side effects, and adherence to governance."
        },
        {
          "id": "cybersecurity-601-l06-q6",
          "text": "When addressing an ambiguous ownership chain during an incident, the best mitigation is to:",
          "skillId": "cybersecurity-601-skill-mitigation",
          "options": [
            {
              "id": "a",
              "text": "Wait for someone to volunteer to lead"
            },
            {
              "id": "b",
              "text": "Define an accountable owner map and clear escalation rights"
            },
            {
              "id": "c",
              "text": "Escalate immediately to the CEO"
            },
            {
              "id": "d",
              "text": "Pause the response until ownership is naturally resolved"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Clear ownership and escalation paths are critical to resolving ambiguity and ensuring swift incident response."
        },
        {
          "id": "cybersecurity-601-l06-q7",
          "text": "If policy-execution drift is detected during a simulation, the appropriate response is to:",
          "skillId": "cybersecurity-601-skill-governance-drift",
          "options": [
            {
              "id": "a",
              "text": "Rewrite the policy to match the flawed execution"
            },
            {
              "id": "b",
              "text": "Re-align operational controls to explicit governance standards"
            },
            {
              "id": "c",
              "text": "Ignore the drift if the outcome was successful"
            },
            {
              "id": "d",
              "text": "Disband the simulation team"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Policy-execution drift indicates a breakdown in controls, requiring realignment to ensure governance standards are met."
        },
        {
          "id": "cybersecurity-601-l06-q8",
          "text": "Why is it necessary to record both near-term and long-term tradeoffs during intervention planning?",
          "skillId": "cybersecurity-601-skill-planning",
          "options": [
            {
              "id": "a",
              "text": "To prevent immediate containment actions from causing severe downstream systemic failures"
            },
            {
              "id": "b",
              "text": "To make the documentation look more comprehensive"
            },
            {
              "id": "c",
              "text": "To delay the decision-making process"
            },
            {
              "id": "d",
              "text": "Because short-term tradeoffs are usually irrelevant"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Interventions often have cascading effects; evaluating both timeframes ensures a cure isn't worse than the disease."
        }
      ],
      "imageUrl": "/generated-images/refinery/cybersecurity-601-l06.png"
    },
    {
      "id": "cybersecurity-601-l07",
      "title": "Cybersecurity Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "lessonImagePrompt": "A stylized globe interconnected with glowing fiber optic cables, surrounded by diverse silhouettes of people, representing public impact and global governance, cinematic lighting.",
      "conceptVideoPrompt": "A sweeping drone-style shot over a digital smart city where data flows securely between buildings, protected by glowing energy barriers, representing public cybersecurity governance.",
      "learningAids": [
        {
          "id": "cybersecurity-601-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "chunks": [
        {
          "id": "cybersecurity-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "In this lesson, learners will evaluate how the outcomes of Cybersecurity decisions are distributed among various stakeholders. This includes considering both immediate operational effects and those that may be delayed or indirect, such as public trust and regulatory compliance. Understanding this distribution is crucial for making informed, ethical decisions that consider the broader impact on the community and society as a whole."
        },
        {
          "id": "cybersecurity-601-l07-c2",
          "kind": "concept",
          "title": "Accountability System Design",
          "content": "We explore how to design an accountability system that ensures transparency and responsibility in enterprise Cybersecurity practices. This includes implementing strict traceability standards, establishing review rights, and defining clear remediation obligations. By mastering these components, leaders ensure that their security frameworks maintain integrity and foster trust among users and regulatory bodies."
        },
        {
          "id": "cybersecurity-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "A responsible leadership checklist is a vital tool that helps executives connect their strategic vision with ethical considerations, corporate policies, and operational controls. This checklist serves as a comprehensive review mechanism, ensuring that all aspects of leadership are aligned and working synergistically to promote robust, defensible governance in cybersecurity."
        }
      ],
      "flashcards": [
        {
          "id": "cybersecurity-601-l07-f1",
          "front": "Impact Distribution",
          "back": "The analytical process of determining how benefits and harms of a security decision are allocated across groups and timeframes."
        },
        {
          "id": "cybersecurity-601-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable, documented explanation of the evidence, rationale, and ownership behind a critical security decision."
        },
        {
          "id": "cybersecurity-601-l07-f3",
          "front": "Responsible Leadership",
          "back": "A decision-making practice that explicitly balances technical performance, systemic risk, ethics, and accountability."
        }
      ],
      "imageUrl": "/generated-images/refinery/cybersecurity-601-l07.png"
    },
    {
      "id": "cybersecurity-601-l08",
      "title": "Cybersecurity Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "lessonImagePrompt": "A prestigious, modern auditorium with a large screen displaying a complex cybersecurity architecture diagram, a speaker at a podium defending their capstone, photorealistic.",
      "conceptVideoPrompt": "A slow push-in on a confident cybersecurity professional presenting a holographic defense strategy to a panel of experts, professional lighting, shallow depth of field.",
      "learningAids": [
        {
          "id": "cybersecurity-601-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "chunks": [
        {
          "id": "cybersecurity-601-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter and Evidence Pack",
          "content": "In this culminating activity, learners will create a detailed capstone charter. This document outlines the main objectives of their project, the constraints they face, the metrics used to measure success, the governance controls implemented, and a rigorous plan for gathering evidence. This comprehensive approach ensures that all aspects of the project are architected to withstand professional scrutiny."
        },
        {
          "id": "cybersecurity-601-l08-c2",
          "kind": "recap",
          "title": "Defense Rehearsal",
          "content": "The final practice round is designed to prepare learners for defending their strategic decisions. During this rehearsal, they will practice responding to intense critiques from technical experts, governance bodies, and executive stakeholders. This exercise is crucial for building confidence and ensuring that leaders can effectively communicate, justify, and adapt their choices in a high-stakes, real-world setting."
        }
      ],
      "interactiveActivities": [
        {
          "id": "cybersecurity-601-l08-act1",
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
          "id": "cybersecurity-601-l08-act2",
          "type": "debate_simulator",
          "title": "Capstone Defense Panel",
          "description": "Defend your capstone against expert critique on rigor, risk, and accountability."
        }
      ],
      "imageUrl": "/generated-images/refinery/cybersecurity-601-l08.png"
    }
  ]
};
