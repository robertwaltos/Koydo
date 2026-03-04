import type { LearningModule } from "@/lib/modules/types";

export const MediaLiteracy101Module: LearningModule = {
  "id": "media-literacy-101",
  "title": "Media Literacy Foundations",
  "description": "Level 101 curriculum in Media Literacy, focused on source credibility, narrative framing, misinformation analysis, and civic decision impact, with rigorous scenario analysis and assessment-backed mastery.",
  "subject": "Media Studies",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "communication",
    "critical-thinking"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Explain and apply source credibility using clear assumptions and constraints",
    "Build repeatable workflows for narrative framing with measurable checkpoints",
    "Evaluate misinformation analysis outcomes against baseline and target metrics",
    "Use governance patterns to improve civic decision impact decision quality",
    "Communicate tradeoffs across technical, policy, and user-impact dimensions",
    "Synthesize Media Literacy methods into defensible recommendations"
  ],
  "lessons": [
    {
      "id": "media-literacy-101-l01",
      "title": "Media Literacy Core Concepts",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "media-literacy-101-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-101-l01-c1",
          "kind": "concept",
          "title": "Vocabulary and System Boundaries",
          "content": "In this lesson, we will create a common vocabulary that helps us understand Media Literacy better. We will also define the boundaries within which we operate when analyzing media. Additionally, we will explore how to evaluate the credibility of sources and how different narratives are framed in real-world situations. This foundational knowledge will help us navigate the complex media landscape more effectively.\nContext recap: In this lesson, we will create a common vocabulary that helps us understand Media Literacy better. We will also define the boundaries within which we operate when analyzing media. Additionally, we will explore how to evaluate the credibility of sources and how different narratives are framed in real-world situations. This foundational knowledge will help us navigate the complex media landscape more effectively."
        },
        {
          "id": "media-literacy-101-l01-c2",
          "kind": "concept",
          "title": "Causal Structures and Constraints",
          "content": "In this part of the lesson, students will learn to model causal paths, which means they will trace the connections between different events and ideas. They will also identify hidden assumptions that might influence our understanding of these connections. Before suggesting any changes or interventions, students will apply checks to ensure that their ideas are realistic and feasible. This practice will help them think critically about cause and effect in media.\nContext recap: In this part of the lesson, students will learn to model causal paths, which means they will trace the connections between different events and ideas. They will also identify hidden assumptions that might influence our understanding of these connections. Before suggesting any changes or interventions, students will apply checks to ensure that their ideas are realistic and feasible. This practice will help them think critically about cause and effect in media."
        },
        {
          "id": "media-literacy-101-l01-c3",
          "kind": "recap",
          "title": "Evidence Discipline",
          "content": "This module introduces a method called an evidence-first workflow. This means that every claim we make should be supported by observable evidence. Students will learn how to connect their claims to specific indicators that can be measured and understood. They will also explore the idea of uncertainty, which means recognizing that not everything is clear-cut and that some claims may have varying degrees of reliability. This approach encourages critical thinking and careful analysis.\nContext recap: This module introduces a method called an evidence-first workflow. This means that every claim we make should be supported by observable evidence. Students will learn how to connect their claims to specific indicators that can be measured and understood. They will also explore the idea of uncertainty, which means recognizing that not everything is clear-cut and that some claims may have varying degrees of reliability."
        }
      ],
      "flashcards": [
        {
          "id": "media-literacy-101-l01-f1",
          "front": "source credibility",
          "back": "A core mechanism in Media Literacy requiring explicit assumptions and measurable controls."
        },
        {
          "id": "media-literacy-101-l01-f2",
          "front": "narrative framing",
          "back": "Operational practices that convert strategy into reliable execution."
        },
        {
          "id": "media-literacy-101-l01-f3",
          "front": "misinformation analysis",
          "back": "The evaluation layer that determines whether interventions truly improve outcomes."
        }
      ]
    },
    {
      "id": "media-literacy-101-l02",
      "title": "Media Literacy Methods Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "media-literacy-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-101-l02-c1",
          "kind": "practice",
          "title": "Method Sequence Construction",
          "content": "In this interactive segment, learners will construct a sequence of methods that focus on foundational vocabulary, essential mechanisms, and baseline analysis. They will then test each step of their method to see how it holds up under uncertain conditions. This hands-on practice will help students understand the importance of a structured approach in analyzing media and developing their critical thinking skills.\nContext recap: In this interactive segment, learners will construct a sequence of methods that focus on foundational vocabulary, essential mechanisms, and baseline analysis. They will then test each step of their method to see how it holds up under uncertain conditions. This hands-on practice will help students understand the importance of a structured approach in analyzing media and developing their critical thinking skills."
        },
        {
          "id": "media-literacy-101-l02-c2",
          "kind": "recap",
          "title": "Operational Readiness Checks",
          "content": "To ensure that our methods are effective, we will conduct readiness assessments. This involves mapping out who is responsible for each part of the process, setting checkpoints to monitor progress, identifying triggers that would prompt us to revisit our decisions, and maintaining logs of evidence. These practices will help students understand the importance of accountability and thoroughness in media analysis.\nContext recap: To ensure that our methods are effective, we will conduct readiness assessments. This involves mapping out who is responsible for each part of the process, setting checkpoints to monitor progress, identifying triggers that would prompt us to revisit our decisions, and maintaining logs of evidence. These practices will help students understand the importance of accountability and thoroughness in media analysis."
        }
      ],
      "interactiveActivities": [
        {
          "id": "media-literacy-101-l02-act1",
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
          "id": "media-literacy-101-l02-act2",
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
      "id": "media-literacy-101-l03",
      "title": "Checkpoint 1: Core Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "media-literacy-101-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "media-literacy-101-l03-q1",
          "text": "Which practice most strengthens source credibility in real deployments?",
          "skillId": "media-literacy-101-skill-risk",
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
          "id": "media-literacy-101-l03-q2",
          "text": "At level 101, Media Literacy work should prioritize:",
          "skillId": "media-literacy-101-skill-level",
          "options": [
            {
              "id": "a",
              "text": "foundational vocabulary, core mechanisms, and baseline analysis"
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
          "explanation": "The 101 sequence is designed around foundational vocabulary, core mechanisms, and baseline analysis."
        },
        {
          "id": "media-literacy-101-l03-q3",
          "text": "What is the strongest indicator of healthy narrative framing?",
          "skillId": "media-literacy-101-skill-ops",
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
          "id": "media-literacy-101-l03-q4",
          "text": "When improving misinformation analysis, which approach is most defensible?",
          "skillId": "media-literacy-101-skill-eval",
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
          "id": "media-literacy-101-l03-q5",
          "text": "A mature civic decision impact strategy should include:",
          "skillId": "media-literacy-101-skill-governance",
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
      "id": "media-literacy-101-l04",
      "title": "Media Literacy Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "media-literacy-101-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-101-l04-c1",
          "kind": "example",
          "title": "Case Setup and Stakes",
          "content": "In this engaging case study, we will explore a fast-paced public event that is being reported on by various media outlets. Each outlet may present different stories and perspectives, which can significantly affect how people react and behave in response to the event. As learners, you will be encouraged to carefully analyze the information presented, identifying what is based on solid evidence, what might be assumptions, and what risks could arise from these narratives. This exercise is designed to deepen your understanding of how media influences public opinion and highlights the importance of critical thinking in evaluating the information we consume every day."
        },
        {
          "id": "media-literacy-101-l04-c2",
          "kind": "concept",
          "title": "Decision Tradeoff Matrix",
          "content": "In this section, we will explore how to evaluate different alternatives using a decision tradeoff matrix. Each option will be scored based on its performance, reliability, cost, and fairness. This structured approach will help students make informed choices when selecting a path for intervention, emphasizing the importance of weighing different factors in decision-making.\nContext recap: In this section, we will explore how to evaluate different alternatives using a decision tradeoff matrix. Each option will be scored based on its performance, reliability, cost, and fairness. This structured approach will help students make informed choices when selecting a path for intervention, emphasizing the importance of weighing different factors in decision-making."
        },
        {
          "id": "media-literacy-101-l04-c3",
          "kind": "recap",
          "title": "Lessons from Failure Modes",
          "content": "In this recap, we will categorize different patterns of failure that we observed during our analysis. By doing this, we can transform isolated incidents into valuable lessons that can inform our future designs and decisions. This practice encourages a growth mindset, where students learn from mistakes and use those lessons to improve their analytical skills.\nContext recap: In this recap, we will categorize different patterns of failure that we observed during our analysis. By doing this, we can transform isolated incidents into valuable lessons that can inform our future designs and decisions. This practice encourages a growth mindset, where students learn from mistakes and use those lessons to improve their analytical skills."
        }
      ],
      "flashcards": [
        {
          "id": "media-literacy-101-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A structured way to compare options across competing priorities before choosing an intervention."
        },
        {
          "id": "media-literacy-101-l04-f2",
          "front": "Failure mode",
          "back": "A repeatable pattern describing how systems break under real constraints."
        },
        {
          "id": "media-literacy-101-l04-f3",
          "front": "Escalation threshold",
          "back": "A predefined condition that triggers higher-level review or corrective action."
        }
      ]
    },
    {
      "id": "media-literacy-101-l05",
      "title": "Media Literacy Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "media-literacy-101-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-101-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this interactive practice, learners will set up a scenario model that includes clear assumptions about uncertainty and defines success metrics related to civic decision-making. This exercise will help students understand how to create models that reflect real-world complexities and the impact of their decisions on the community.\nContext recap: In this interactive practice, learners will set up a scenario model that includes clear assumptions about uncertainty and defines success metrics related to civic decision-making. This exercise will help students understand how to create models that reflect real-world complexities and the impact of their decisions on the community."
        },
        {
          "id": "media-literacy-101-l05-c2",
          "kind": "recap",
          "title": "Decision Review Loop",
          "content": "At the end of each simulation round, we will conduct a review of the evidence collected during the simulation. This will include checking how well our policies align with our goals and identifying actions for improvement. This reflective practice will help students understand the importance of continuous evaluation and adaptation in their decision-making processes.\nContext recap: At the end of each simulation round, we will conduct a review of the evidence collected during the simulation. This will include checking how well our policies align with our goals and identifying actions for improvement. This reflective practice will help students understand the importance of continuous evaluation and adaptation in their decision-making processes."
        }
      ],
      "interactiveActivities": [
        {
          "id": "media-literacy-101-l05-act1",
          "type": "scenario_practice",
          "title": "Policy and Operations Simulation",
          "description": "Run three intervention strategies and justify which option best advances source credibility and civic decision impact.",
          "instructions": [
            "Define the primary objective and guardrails before choosing an intervention.",
            "Record one tradeoff created by each intervention.",
            "Select a follow-up metric that confirms whether the choice was successful."
          ]
        },
        {
          "id": "media-literacy-101-l05-act2",
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
      "id": "media-literacy-101-l06",
      "title": "Checkpoint 2: Systems and Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "media-literacy-101-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "media-literacy-101-l06-q1",
          "text": "Which practice most strengthens source credibility in real deployments?",
          "skillId": "media-literacy-101-skill-risk",
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
          "id": "media-literacy-101-l06-q2",
          "text": "At level 101, Media Literacy work should prioritize:",
          "skillId": "media-literacy-101-skill-level",
          "options": [
            {
              "id": "a",
              "text": "foundational vocabulary, core mechanisms, and baseline analysis"
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
          "explanation": "The 101 sequence is designed around foundational vocabulary, core mechanisms, and baseline analysis."
        },
        {
          "id": "media-literacy-101-l06-q3",
          "text": "What is the strongest indicator of healthy narrative framing?",
          "skillId": "media-literacy-101-skill-ops",
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
          "id": "media-literacy-101-l06-q4",
          "text": "When improving misinformation analysis, which approach is most defensible?",
          "skillId": "media-literacy-101-skill-eval",
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
          "id": "media-literacy-101-l06-q5",
          "text": "A mature civic decision impact strategy should include:",
          "skillId": "media-literacy-101-skill-governance",
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
      "id": "media-literacy-101-l07",
      "title": "Media Literacy Ethics, Policy, and Public Impact",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "media-literacy-101-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-101-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Analysis",
          "content": "In this lesson, learners will analyze the various stakeholders involved in media decisions. They will identify who benefits from certain policies, who might face risks, and how different policy choices can affect various groups. This understanding will help students appreciate the complexities of media influence and the importance of considering multiple perspectives.\nContext recap: In this lesson, learners will analyze the various stakeholders involved in media decisions. They will identify who benefits from certain policies, who might face risks, and how different policy choices can affect various groups. This understanding will help students appreciate the complexities of media influence and the importance of considering multiple perspectives."
        },
        {
          "id": "media-literacy-101-l07-c2",
          "kind": "concept",
          "title": "Governance and Accountability",
          "content": "In this section, we will discuss governance mechanisms and how they relate to accountability. Students will learn about measurable controls, the obligations of transparency, and the pathways for addressing issues when they arise. This knowledge will empower them to understand the importance of responsible governance in media and policy.\nContext recap: In this section, we will discuss governance mechanisms and how they relate to accountability. Students will learn about measurable controls, the obligations of transparency, and the pathways for addressing issues when they arise. This knowledge will empower them to understand the importance of responsible governance in media and policy."
        },
        {
          "id": "media-literacy-101-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "Before making any decisions about deploying media projects, it is important to use a comprehensive checklist. This checklist should include important factors such as legal requirements, ethical considerations, technical aspects, and the potential impact on users. By carefully reviewing these criteria, we can ensure that our media practices are responsible and beneficial to everyone involved.\nContext recap: Before making any decisions about deploying media projects, it is important to use a comprehensive checklist. This checklist should include important factors such as legal requirements, ethical considerations, technical aspects, and the potential impact on users. By carefully reviewing these criteria, we can ensure that our media practices are responsible and beneficial to everyone involved."
        }
      ],
      "flashcards": [
        {
          "id": "media-literacy-101-l07-f1",
          "front": "Stakeholder map",
          "back": "A framework that tracks impact distribution across affected groups."
        },
        {
          "id": "media-literacy-101-l07-f2",
          "front": "Accountability loop",
          "back": "A cycle connecting outcomes, ownership, and corrective action."
        },
        {
          "id": "media-literacy-101-l07-f3",
          "front": "Responsible execution",
          "back": "Delivery practice that balances performance with safety, fairness, and transparency."
        }
      ]
    },
    {
      "id": "media-literacy-101-l08",
      "title": "Media Literacy Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "media-literacy-101-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-101-l08-c1",
          "kind": "practice",
          "title": "Capstone Scope Definition",
          "content": "In this activity, you will create a detailed plan for your capstone project. This plan, known as a capstone charter, should outline the main objectives you want to achieve, identify any potential risks you may encounter, establish how you will measure success, and set up checkpoints for governance. This structured approach will help guide your project and ensure that you stay on track.\nContext recap: In this activity, you will create a detailed plan for your capstone project. This plan, known as a capstone charter, should outline the main objectives you want to achieve, identify any potential risks you may encounter, establish how you will measure success, and set up checkpoints for governance. This structured approach will help guide your project and ensure that you stay on track."
        },
        {
          "id": "media-literacy-101-l08-c2",
          "kind": "recap",
          "title": "Defense Preparation",
          "content": "To conclude this lesson, you will receive a template for preparing your defense presentation. This template will guide you in making claims that are supported by evidence and will require you to explain the reasoning behind any trade-offs you make. This practice will help you articulate your ideas clearly and justify your decisions effectively.\nContext recap: To conclude this lesson, you will receive a template for preparing your defense presentation. This template will guide you in making claims that are supported by evidence and will require you to explain the reasoning behind any trade-offs you make. This practice will help you articulate your ideas clearly and justify your decisions effectively."
        }
      ],
      "interactiveActivities": [
        {
          "id": "media-literacy-101-l08-act1",
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
          "id": "media-literacy-101-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Drill",
          "description": "Defend your capstone approach against cost, risk, and equity critiques."
        }
      ]
    }
  ]
};
