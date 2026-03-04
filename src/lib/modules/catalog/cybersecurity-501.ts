import type { LearningModule } from "@/lib/modules/types";

export const Cybersecurity501Module: LearningModule = {
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
  "version": "2.0.0",
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
          "content": "In this lesson, we will dive into the advanced boundaries that shape the field of Cybersecurity. We will discover how to frame our understanding of threat modeling, which helps us identify potential risks, and defense-in-depth design, which is a strategy to protect our systems. By examining how these two important concepts work together within complex systems, we will learn how to enhance the security of our digital environments and keep them safe from various threats.\nContext recap: In this lesson, we will dive into the advanced boundaries that shape the field of Cybersecurity. We will discover how to frame our understanding of threat modeling, which helps us identify potential risks, and defense-in-depth design, which is a strategy to protect our systems. By examining how these two important concepts work together within complex systems, we will learn how to enhance the security of our digital environments and keep them safe from various threats."
        },
        {
          "id": "cybersecurity-501-l01-c2",
          "kind": "concept",
          "title": "Causal Structure Under Uncertainty",
          "content": "In this part of the lesson, learners will focus on modeling causal pathways. This involves understanding the different ranges of uncertainty and identifying any hidden assumptions that may exist. By doing this before designing interventions, we can create more effective strategies to address potential cybersecurity threats.\nContext recap: In this part of the lesson, learners will focus on modeling causal pathways. This involves understanding the different ranges of uncertainty and identifying any hidden assumptions that may exist. By doing this before designing interventions, we can create more effective strategies to address potential cybersecurity threats."
        },
        {
          "id": "cybersecurity-501-l01-c3",
          "kind": "recap",
          "title": "Evidence and Rigor Standards",
          "content": "It is important to remember that all advanced claims in cybersecurity must be supported by measurable indicators. This means we need to establish confidence bounds and set up review checkpoints to ensure that our findings are reliable and valid. This rigorous approach helps us maintain high standards in our cybersecurity practices.\nContext recap: It is important to remember that all advanced claims in cybersecurity must be supported by measurable indicators. This means we need to establish confidence bounds and set up review checkpoints to ensure that our findings are reliable and valid. This rigorous approach helps us maintain high standards in our cybersecurity practices."
        }
      ],
      "flashcards": [
        {
          "id": "cybersecurity-501-l01-f1",
          "front": "threat modeling",
          "back": "A specialization axis in Cybersecurity requiring explicit assumptions and measured tradeoff choices."
        },
        {
          "id": "cybersecurity-501-l01-f2",
          "front": "defense-in-depth design",
          "back": "Operational design capability that governs whether complex workflows remain reliable."
        },
        {
          "id": "cybersecurity-501-l01-f3",
          "front": "incident response systems",
          "back": "Evaluation practice for validating outcomes beyond headline metrics."
        }
      ]
    },
    {
      "id": "cybersecurity-501-l02",
      "title": "Cybersecurity Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
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
          "content": "In this engaging interactive lab, students will have the opportunity to design and build a specialized workflow that highlights the importance of executing specific methods effectively. This process will involve integrating knowledge from various fields to create a comprehensive approach. Once the workflow is established, students will put their creation to the test by simulating challenging situations, such as facing adversarial attacks or dealing with edge cases. This testing phase is crucial as it helps ensure that the workflow is robust and effective in real-world scenarios.\nContext recap: In this engaging interactive lab, students will have the opportunity to design and build a specialized workflow that highlights the importance of executing specific methods effectively. This process will involve integrating knowledge from various fields to create a comprehensive approach. Once the workflow is established, students will put their creation to the test by simulating challenging situations, such as facing adversarial attacks or dealing with edge cases. This testing phase is crucial as it helps ensure that the workflow is robust and effective in real-world scenarios."
        },
        {
          "id": "cybersecurity-501-l02-c2",
          "kind": "recap",
          "title": "Controls and Failure Gates",
          "content": "To create robust specialist workflows, it is essential to implement control gates, rollback criteria, and accountability checkpoints. These elements help ensure that the workflow can handle unexpected issues and maintain accountability throughout the process, which is crucial for effective cybersecurity management.\nContext recap: To create robust specialist workflows, it is essential to implement control gates, rollback criteria, and accountability checkpoints. These elements help ensure that the workflow can handle unexpected issues and maintain accountability throughout the process, which is crucial for effective cybersecurity management."
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
      ]
    },
    {
      "id": "cybersecurity-501-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 11,
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
          "id": "cybersecurity-501-l03-q2",
          "text": "At level 501, the curriculum emphasizes:",
          "skillId": "cybersecurity-501-skill-level",
          "options": [
            {
              "id": "a",
              "text": "specialist method execution, cross-domain integration, and high-stakes scenario performance"
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
          "id": "cybersecurity-501-l03-q3",
          "text": "What best strengthens defense-in-depth design execution quality?",
          "skillId": "cybersecurity-501-skill-execution",
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
          "id": "cybersecurity-501-l03-q4",
          "text": "A rigorous approach to incident response systems should include:",
          "skillId": "cybersecurity-501-skill-evaluation",
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
          "id": "cybersecurity-501-l03-q5",
          "text": "A mature security governance system should connect:",
          "skillId": "cybersecurity-501-skill-governance",
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
          "id": "cybersecurity-501-l03-q6",
          "text": "In high-stakes Cybersecurity Specialization Studio execution, which communication protocol is strongest?",
          "skillId": "cybersecurity-501-skill-advanced-6",
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
          "id": "cybersecurity-501-l03-q7",
          "text": "A mature remediation loop in advanced Computer Science should prioritize:",
          "skillId": "cybersecurity-501-skill-advanced-7",
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
          "id": "cybersecurity-501-l03-q8",
          "text": "Which portfolio decision rule best balances performance and resilience in Cybersecurity Specialization Studio?",
          "skillId": "cybersecurity-501-skill-advanced-8",
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
      "id": "cybersecurity-501-l04",
      "title": "Cybersecurity Advanced Case Analysis",
      "type": "video",
      "duration": 14,
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
          "content": "In this engaging case study, we will explore a coordinated attack campaign that demands swift and effective responses in four key areas: detection, containment, communication, and recovery. As learners, you will actively participate in mapping out the strategic objectives that guide our actions. Additionally, you will identify potential risks that could lead to failure and examine the governance constraints that must be taken into account before we proceed with any actions. This thorough approach not only enhances your understanding but also equips you with the skills needed to tackle real-world cybersecurity challenges confidently."
        },
        {
          "id": "cybersecurity-501-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix and Option Scoring",
          "content": "When evaluating options in cybersecurity, it is important to score them based on several criteria. These include effectiveness, reliability, equity, feasibility, and long-term maintainability. By using a tradeoff matrix, learners can make informed decisions that balance these factors effectively.\nContext recap: When evaluating options in cybersecurity, it is important to score them based on several criteria. These include effectiveness, reliability, equity, feasibility, and long-term maintainability. By using a tradeoff matrix, learners can make informed decisions that balance these factors effectively."
        },
        {
          "id": "cybersecurity-501-l04-c3",
          "kind": "recap",
          "title": "Recovery and Adaptation Design",
          "content": "In our recap, we will discuss how to translate failure signatures into actionable safeguards. This includes creating response playbooks and measurable adaptation loops that allow us to learn from failures and improve our cybersecurity strategies over time.\nContext recap: In our recap, we will discuss how to translate failure signatures into actionable safeguards. This includes creating response playbooks and measurable adaptation loops that allow us to learn from failures and improve our cybersecurity strategies over time.\nWhy this matters: Recovery and Adaptation Design helps learners in Computer Science connect ideas from Cybersecurity Specialization Studio to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
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
      ]
    },
    {
      "id": "cybersecurity-501-l05",
      "title": "Cybersecurity Simulation and Response Studio",
      "type": "interactive",
      "duration": 17,
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
          "content": "In this practice session, learners will configure the assumptions, thresholds, and intervention pathways for simulation scenarios. This will take place under high-stakes conditions, allowing learners to experience the pressure of real-world cybersecurity challenges and develop their response strategies.\nContext recap: In this practice session, learners will configure the assumptions, thresholds, and intervention pathways for simulation scenarios. This will take place under high-stakes conditions, allowing learners to experience the pressure of real-world cybersecurity challenges and develop their response strategies."
        },
        {
          "id": "cybersecurity-501-l05-c2",
          "kind": "recap",
          "title": "Debrief and Decision Quality Review",
          "content": "After each simulation run, teams will conduct a thorough review to assess how well they met their targets. This includes analyzing any side effects and identifying gaps in governance compliance. This debriefing process is crucial for improving decision-making and enhancing future performance.\nContext recap: After each simulation run, teams will conduct a thorough review to assess how well they met their targets. This includes analyzing any side effects and identifying gaps in governance compliance. This debriefing process is crucial for improving decision-making and enhancing future performance."
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
      ]
    },
    {
      "id": "cybersecurity-501-l06",
      "title": "Checkpoint 2: Research and Systems Decisions",
      "type": "quiz",
      "duration": 11,
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
          "text": "Which practice most improves specialist performance in threat modeling?",
          "skillId": "cybersecurity-501-skill-specialist",
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
          "id": "cybersecurity-501-l06-q2",
          "text": "At level 501, the curriculum emphasizes:",
          "skillId": "cybersecurity-501-skill-level",
          "options": [
            {
              "id": "a",
              "text": "specialist method execution, cross-domain integration, and high-stakes scenario performance"
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
          "id": "cybersecurity-501-l06-q3",
          "text": "What best strengthens defense-in-depth design execution quality?",
          "skillId": "cybersecurity-501-skill-execution",
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
          "id": "cybersecurity-501-l06-q4",
          "text": "A rigorous approach to incident response systems should include:",
          "skillId": "cybersecurity-501-skill-evaluation",
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
          "id": "cybersecurity-501-l06-q5",
          "text": "A mature security governance system should connect:",
          "skillId": "cybersecurity-501-skill-governance",
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
          "id": "cybersecurity-501-l06-q6",
          "text": "In high-stakes Cybersecurity Specialization Studio execution, which communication protocol is strongest?",
          "skillId": "cybersecurity-501-skill-advanced-6",
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
          "id": "cybersecurity-501-l06-q7",
          "text": "A mature remediation loop in advanced Computer Science should prioritize:",
          "skillId": "cybersecurity-501-skill-advanced-7",
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
          "id": "cybersecurity-501-l06-q8",
          "text": "Which portfolio decision rule best balances performance and resilience in Cybersecurity Specialization Studio?",
          "skillId": "cybersecurity-501-skill-advanced-8",
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
      "id": "cybersecurity-501-l07",
      "title": "Cybersecurity Governance and Public Impact",
      "type": "video",
      "duration": 13,
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
          "content": "In this lesson, learners will evaluate how the outcomes of cybersecurity actions are distributed among various stakeholders. This includes considering both delayed and indirect effects, which is important for understanding the broader impact of our decisions in the field.\nContext recap: In this lesson, learners will evaluate how the outcomes of cybersecurity actions are distributed among various stakeholders. This includes considering both delayed and indirect effects, which is important for understanding the broader impact of our decisions in the field."
        },
        {
          "id": "cybersecurity-501-l07-c2",
          "kind": "concept",
          "title": "Accountability System Design",
          "content": "Designing an accountability system is essential in cybersecurity. This involves implementing traceability standards, establishing review rights, and defining remediation obligations. These components help ensure that all actions taken are accountable and transparent, fostering trust and responsibility.\nContext recap: Designing an accountability system is essential in cybersecurity. This involves implementing traceability standards, establishing review rights, and defining remediation obligations. These components help ensure that all actions taken are accountable and transparent, fostering trust and responsibility.\nWhy this matters: Accountability System Design helps learners in Computer Science connect ideas from Cybersecurity Specialization Studio to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "cybersecurity-501-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "A responsible leadership checklist is an important tool that helps leaders connect their strategies, ethical considerations, policies, and operational controls. By reviewing these elements together, leaders can ensure they are making informed decisions that positively impact their organizations and the public. This checklist serves as a guide to maintain accountability and transparency in leadership roles.\nContext recap: A responsible leadership checklist is an important tool that helps leaders connect their strategies, ethical considerations, policies, and operational controls. By reviewing these elements together, leaders can ensure they are making informed decisions that positively impact their organizations and the public. This checklist serves as a guide to maintain accountability and transparency in leadership roles."
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
      ]
    },
    {
      "id": "cybersecurity-501-l08",
      "title": "Cybersecurity Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
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
          "content": "In this activity, learners will create a comprehensive capstone charter. This document will outline the main objectives of their project, identify any constraints they may face, establish metrics for measuring success, and define governance controls to ensure everything runs smoothly. Additionally, they will develop an evidence plan that details how they will gather and present proof of their work and findings. This process encourages critical thinking and thorough planning.\nContext recap: In this activity, learners will create a comprehensive capstone charter. This document will outline the main objectives of their project, identify any constraints they may face, establish metrics for measuring success, and define governance controls to ensure everything runs smoothly. Additionally, they will develop an evidence plan that details how they will gather and present proof of their work and findings. This process encourages critical thinking and thorough planning."
        },
        {
          "id": "cybersecurity-501-l08-c2",
          "kind": "recap",
          "title": "Defense Rehearsal",
          "content": "During the final practice round, learners will engage in a defense rehearsal. This important exercise prepares them to effectively defend their decisions and strategies against various critiques. They will face challenges related to technical aspects, governance issues, and feedback from stakeholders. This practice not only builds confidence but also enhances their ability to communicate and justify their choices in a professional setting.\nContext recap: During the final practice round, learners will engage in a defense rehearsal. This important exercise prepares them to effectively defend their decisions and strategies against various critiques. They will face challenges related to technical aspects, governance issues, and feedback from stakeholders. This practice not only builds confidence but also enhances their ability to communicate and justify their choices in a professional setting."
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
      ]
    }
  ]
};
