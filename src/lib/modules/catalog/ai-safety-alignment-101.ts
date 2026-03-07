import type { LearningModule } from "@/lib/modules/types";

export const ai_safety_alignment_101_Module: LearningModule = {
  "id": "ai-safety-alignment-101",
  "title": "AI Safety and Alignment Foundations",
  "description": "Level 101 curriculum in AI Safety and Alignment, focused on risk modeling, alignment objectives, evaluation harnesses, and governance controls, with rigorous scenario analysis and assessment-backed mastery.",
  "subject": "AI Ethics",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "ai",
    "safety"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "beginner",
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
      "id": "ai-safety-alignment-101-l01",
      "title": "AI Safety and Alignment Core Concepts",
      "type": "video",
      "duration": 13,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing, futuristic shield protecting a complex network of glowing data nodes, representing AI safety and boundaries, digital art style, vibrant blue and gold colors, highly detailed, 8k resolution.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A cinematic 3D animation showing a chaotic web of data nodes slowly organizing into a structured, safe pathway guided by glowing guardrails. The camera pans smoothly across the network, with dynamic lighting emphasizing the transition from chaos to order.",
      "learningAids": [
        {
          "id": "ai-safety-alignment-101-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-101-l01-c1",
          "kind": "concept",
          "title": "Vocabulary and System Boundaries",
          "content": "Welcome to AI Safety! Imagine building a super-smart robot. How do we make sure it follows the rules? In this lesson, we will build a shared vocabulary essential for understanding AI Safety and Alignment. We will define the specific boundaries within which AI systems operate, helping us understand their limitations and capabilities. Furthermore, we will investigate how risk modeling interacts with alignment objectives—the goals we set to ensure AI behaves in ways that are beneficial and safe in the real world."
        },
        {
          "id": "ai-safety-alignment-101-l01-c2",
          "kind": "concept",
          "title": "Causal Structures and Constraints",
          "content": "Every action has a reaction. Think of it like a line of dominoes. Here, you will practice modeling 'causal paths'—the chain reactions inside an AI system. You will learn to identify hidden assumptions that may influence outcomes and apply checks to ensure safety constraints are met before suggesting any interventions. This process helps us think critically about how our actions can impact the system and ensures that we are making informed, safe decisions."
        },
        {
          "id": "ai-safety-alignment-101-l01-c3",
          "kind": "recap",
          "title": "Evidence Discipline",
          "content": "We can't just guess if an AI is safe; we need proof. This module introduces 'evidence discipline,' a methodical approach where every claim we make is supported by observable indicators. We will learn how to connect our claims to expected uncertainties, which helps us understand the reliability of our information. By focusing on hard evidence, we can make better decisions and reduce the chances of errors in our safety assessments."
        }
      ],
      "flashcards": [
        {
          "id": "ai-safety-alignment-101-l01-f1",
          "front": "Risk Modeling",
          "back": "A core mechanism in AI Safety and Alignment requiring explicit assumptions and measurable controls."
        },
        {
          "id": "ai-safety-alignment-101-l01-f2",
          "front": "Alignment Objectives",
          "back": "Operational practices that convert strategy into reliable, safe execution."
        },
        {
          "id": "ai-safety-alignment-101-l01-f3",
          "front": "Evaluation Harnesses",
          "back": "The evaluation layer that determines whether interventions truly improve outcomes."
        }
      ]
    },
    {
      "id": "ai-safety-alignment-101-l02",
      "title": "AI Safety and Alignment Methods Lab",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: A high-tech laboratory workbench with holographic blueprints of AI neural networks being adjusted by a user, cyberpunk aesthetic, bright neon accents, photorealistic, depth of field.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A first-person cinematic view of interacting with a futuristic dashboard. The camera focuses on hands sliding holographic toggles to balance 'Performance' and 'Safety' meters until they lock into a perfect green alignment with a satisfying visual pulse.",
      "learningAids": [
        {
          "id": "ai-safety-alignment-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-101-l02-c1",
          "kind": "practice",
          "title": "Method Sequence Construction",
          "content": "Time to get hands-on! In this engaging interactive lab, you will create a method sequence that focuses on key vocabulary, important mechanisms, and basic analysis techniques. Once you have constructed your sequence, you will put each step to the test by examining how it performs in uncertain situations. This practice is designed to help you grasp the significance of being well-prepared and flexible when it comes to ensuring safety in artificial intelligence."
        },
        {
          "id": "ai-safety-alignment-101-l02-c2",
          "kind": "practice",
          "title": "Testing the Boundaries",
          "content": "Once your sequence is built, it's time to stress-test it! Think of this like a crash test for cars. We simulate extreme conditions to see where the AI might fail, ensuring it's safe before it ever reaches the public. You will apply different stress factors to your model and observe how the safety constraints hold up under pressure."
        },
        {
          "id": "ai-safety-alignment-101-l02-c3",
          "kind": "recap",
          "title": "Operational Readiness Checks",
          "content": "Are we ready to launch? In this recap, we will assess our readiness by mapping out ownership, establishing a cadence for checkpoints, identifying rollback triggers, and maintaining evidence logs. These elements are crucial for ensuring that our systems are prepared for any challenges that may arise, and they help us keep track of our progress and decisions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-safety-alignment-101-l02-act1",
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
          "id": "ai-safety-alignment-101-l02-act2",
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
      "id": "ai-safety-alignment-101-l03",
      "title": "Checkpoint 1: Core Methods",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing digital checkpoint gate in a futuristic cyber landscape, symbolizing a knowledge test, with a soft glowing checkmark, neon synthwave style, highly detailed.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic sequence of multiple-choice holographic panels floating in mid-air. A glowing cursor selects the correct answers, triggering a green success pulse and a satisfying particle explosion. Smooth tracking shot.",
      "learningAids": [
        {
          "id": "ai-safety-alignment-101-l03-a1",
          "type": "practice",
          "title": "Quiz Strategy",
          "content": "Read each scenario carefully. Eliminate options that violate core safety constraints before making your final selection."
        }
      ],
      "questions": [
        {
          "id": "ai-safety-alignment-101-l03-q1",
          "text": "Which practice most strengthens risk modeling in real deployments?",
          "skillId": "ai-safety-alignment-101-skill-risk",
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
          "explanation": "Explicit failure criteria and leading indicators improve early detection and response, acting like an early warning system."
        },
        {
          "id": "ai-safety-alignment-101-l03-q2",
          "text": "At level 101, AI Safety and Alignment work should prioritize:",
          "skillId": "ai-safety-alignment-101-skill-level",
          "options": [
            {
              "id": "a",
              "text": "Foundational vocabulary, core mechanisms, and baseline analysis"
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
          "explanation": "The 101 sequence is designed around foundational vocabulary, core mechanisms, and baseline analysis to build a strong safety mindset."
        },
        {
          "id": "ai-safety-alignment-101-l03-q3",
          "text": "What is the strongest indicator of healthy alignment objectives?",
          "skillId": "ai-safety-alignment-101-skill-ops",
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
          "explanation": "Stable systems require clear ownership, decision cadence, and measurable controls so everyone knows who is responsible for what."
        },
        {
          "id": "ai-safety-alignment-101-l03-q4",
          "text": "When improving evaluation harnesses, which approach is most defensible?",
          "skillId": "ai-safety-alignment-101-skill-eval",
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
          "explanation": "Baselines and failure analysis reduce bias and reveal true system performance, proving that the AI is actually improving."
        },
        {
          "id": "ai-safety-alignment-101-l03-q5",
          "text": "A mature governance controls strategy should include:",
          "skillId": "ai-safety-alignment-101-skill-governance",
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
          "explanation": "Effective governance connects policy intent to measurement and response action, ensuring that rules have real-world enforcement."
        }
      ]
    },
    {
      "id": "ai-safety-alignment-101-l04",
      "title": "AI Safety and Alignment Case Analysis",
      "type": "video",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: A split-screen digital illustration showing a friendly AI robot teaching a student on one side, and a complex decision matrix hologram on the other, modern vector art style, bright and engaging.",
      "conceptVideoPrompt": "Veo 3.1 prompt: An animated scenario showing a student asking an AI a question. The camera zooms into the AI's 'brain' where multiple glowing paths are processed, and a glowing 'tradeoff matrix' appears to filter out incorrect assumptions before answering.",
      "learningAids": [
        {
          "id": "ai-safety-alignment-101-l04-a1",
          "type": "mnemonic",
          "title": "Case Study Focus",
          "content": "Remember to separate facts from assumptions when analyzing the AI's behavior in this scenario."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-101-l04-c1",
          "kind": "example",
          "title": "Case Setup and Stakes",
          "content": "Let's look at a real-world scenario: an AI tutor designed to help students. What happens when it confidently gives the wrong answer? In this case study, it will be your job to distinguish between what is true and what is just an assumption. We will discuss the potential risks that arise from relying on inaccurate information, especially in important situations. This activity will enhance our understanding of how AI makes decisions and highlight the need for critical thinking."
        },
        {
          "id": "ai-safety-alignment-101-l04-c2",
          "kind": "concept",
          "title": "Decision Tradeoff Matrix",
          "content": "In this section, we will use a 'decision tradeoff matrix'—think of it as an advanced pros and cons list—to evaluate different alternatives based on their performance, reliability, cost, and fairness. By scoring each option, you will be able to make informed choices about which intervention path to take. This method emphasizes the importance of considering multiple competing factors when making decisions in AI development, because fixing one problem sometimes creates another!"
        },
        {
          "id": "ai-safety-alignment-101-l04-c3",
          "kind": "recap",
          "title": "Lessons from Failure Modes",
          "content": "In this recap, we will categorize failure patterns to transform isolated incidents into reusable design safeguards. By learning from past mistakes, we can create better systems that are less likely to fail in the future. This approach encourages a culture of continuous improvement and resilience in AI design."
        }
      ],
      "flashcards": [
        {
          "id": "ai-safety-alignment-101-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured way to compare options across competing priorities before choosing an intervention."
        },
        {
          "id": "ai-safety-alignment-101-l04-f2",
          "front": "Failure Mode",
          "back": "A repeatable pattern describing how systems break under real constraints."
        },
        {
          "id": "ai-safety-alignment-101-l04-f3",
          "front": "Escalation Threshold",
          "back": "A predefined condition that triggers higher-level review or corrective action."
        }
      ]
    },
    {
      "id": "ai-safety-alignment-101-l05",
      "title": "AI Safety and Alignment Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "lessonImagePrompt": "Imagen 4 prompt: A futuristic command center with large panoramic screens displaying global AI networks and simulation data, sleek and modern, cinematic lighting, photorealistic.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A time-lapse animation of a simulation dashboard where different policy interventions are applied. The camera slowly pushes in as graphs shift from red (risk) to green (safe) as the right choices are made, with dynamic UI elements.",
      "learningAids": [
        {
          "id": "ai-safety-alignment-101-l05-a1",
          "type": "practice",
          "title": "Simulation Guide",
          "content": "Test your hypotheses in the simulator. If an intervention fails, analyze the logs before trying again."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-101-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "Welcome to the Simulation Studio! In this interactive session, you will set up a scenario model that includes clear assumptions about uncertainty and defines success metrics linked to governance controls. This setup is essential for understanding how different factors can influence outcomes and helps prepare you for real-world applications of AI safety."
        },
        {
          "id": "ai-safety-alignment-101-l05-c2",
          "kind": "practice",
          "title": "Running the Simulation",
          "content": "Now, hit play! Watch how your chosen interventions affect the AI's behavior in real-time. Pay close attention to the metrics—did the safety score go up while performance stayed stable? If not, you might need to tweak your approach. This is where theory meets practice."
        },
        {
          "id": "ai-safety-alignment-101-l05-c3",
          "kind": "recap",
          "title": "Decision Review Loop",
          "content": "At the end of each simulation round, we will conduct a review of the evidence, check for alignment with policies, and identify actions for improvement. This process ensures that we are learning from each simulation and making necessary adjustments to enhance our understanding and effectiveness in AI safety."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-safety-alignment-101-l05-act1",
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
          "id": "ai-safety-alignment-101-l05-act2",
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
      "id": "ai-safety-alignment-101-l06",
      "title": "Checkpoint 2: Systems and Decisions",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing holographic lock and key mechanism assembling itself in cyberspace, representing secure decision-making and system checkpoints, macro photography style, glowing particles.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced visual of a digital maze where a glowing orb navigates through decision gates, successfully avoiding red hazard zones and reaching the center. Dynamic camera angles and motion blur.",
      "learningAids": [
        {
          "id": "ai-safety-alignment-101-l06-a1",
          "type": "practice",
          "title": "Quiz Strategy",
          "content": "Recall the tradeoff matrix and failure modes from the case study to answer these questions."
        }
      ],
      "questions": [
        {
          "id": "ai-safety-alignment-101-l06-q1",
          "text": "What is the primary purpose of a decision tradeoff matrix in AI safety?",
          "skillId": "ai-safety-alignment-101-skill-tradeoff",
          "options": [
            {
              "id": "a",
              "text": "To guarantee zero risk in all deployments"
            },
            {
              "id": "b",
              "text": "To compare options across competing priorities like cost, reliability, and fairness"
            },
            {
              "id": "c",
              "text": "To automate all human decisions"
            },
            {
              "id": "d",
              "text": "To hide system flaws from stakeholders"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix helps teams systematically evaluate and balance competing priorities before making a decision."
        },
        {
          "id": "ai-safety-alignment-101-l06-q2",
          "text": "How should a team handle a recurring 'failure mode' in an AI system?",
          "skillId": "ai-safety-alignment-101-skill-failure",
          "options": [
            {
              "id": "a",
              "text": "Ignore it if it only affects a small number of users"
            },
            {
              "id": "b",
              "text": "Delete the AI model entirely"
            },
            {
              "id": "c",
              "text": "Transform the pattern into a reusable design safeguard"
            },
            {
              "id": "d",
              "text": "Blame the user for incorrect inputs"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Identifying a failure mode allows teams to create systemic safeguards that prevent the issue from happening again."
        },
        {
          "id": "ai-safety-alignment-101-l06-q3",
          "text": "What is an 'escalation threshold'?",
          "skillId": "ai-safety-alignment-101-skill-escalation",
          "options": [
            {
              "id": "a",
              "text": "A predefined condition that triggers higher-level review or corrective action"
            },
            {
              "id": "b",
              "text": "The maximum processing speed of an AI model"
            },
            {
              "id": "c",
              "text": "A tool used to intentionally increase AI risk for testing"
            },
            {
              "id": "d",
              "text": "A marketing metric for user engagement"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Escalation thresholds ensure that when a system behaves unexpectedly or dangerously, the right human authorities are alerted immediately."
        },
        {
          "id": "ai-safety-alignment-101-l06-q4",
          "text": "If an AI system suffers from an 'unreliable input stream,' what is the strongest mitigation response?",
          "skillId": "ai-safety-alignment-101-skill-mitigation",
          "options": [
            {
              "id": "a",
              "text": "Increase transparency reports"
            },
            {
              "id": "b",
              "text": "Introduce quality contracts and quarantine checks"
            },
            {
              "id": "c",
              "text": "Define decision authority"
            },
            {
              "id": "d",
              "text": "Re-baseline performance metrics"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Quality contracts and quarantine checks directly address bad data by filtering it out before it impacts the system."
        },
        {
          "id": "ai-safety-alignment-101-l06-q5",
          "text": "Why is a 'decision review loop' essential after running an AI simulation?",
          "skillId": "ai-safety-alignment-101-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It ensures we learn from the simulation and adjust policies for better safety"
            },
            {
              "id": "b",
              "text": "It makes the simulation run faster on the next attempt"
            },
            {
              "id": "c",
              "text": "It generates random data to confuse the AI"
            },
            {
              "id": "d",
              "text": "It bypasses governance controls to save time"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The review loop is critical for continuous improvement, allowing teams to analyze evidence and refine their safety policies."
        }
      ]
    },
    {
      "id": "ai-safety-alignment-101-l07",
      "title": "AI Safety and Alignment Ethics, Policy, and Public Impact",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A diverse group of stylized people standing around a glowing, transparent globe with digital AI nodes, representing public impact and global ethics, warm lighting, optimistic tone, 3D render.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A cinematic animation showing a ripple effect from a central AI core, touching different stylized human figures. The camera orbits the scene, highlighting how AI decisions impact various stakeholders in society with glowing connection lines.",
      "learningAids": [
        {
          "id": "ai-safety-alignment-101-l07-a1",
          "type": "image",
          "title": "Stakeholder Mapping",
          "content": "Always consider the most vulnerable users when evaluating the public impact of an AI system."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-101-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Analysis",
          "content": "AI doesn't exist in a vacuum—it affects real people. In this section, you will analyze the various 'stakeholders' involved in AI systems to identify who benefits from these technologies, who may face risks, and how policy decisions can affect different groups. Understanding these dynamics is crucial for developing fair, equitable, and responsible AI solutions."
        },
        {
          "id": "ai-safety-alignment-101-l07-c2",
          "kind": "concept",
          "title": "Governance and Accountability",
          "content": "Who is responsible when an AI makes a mistake? In this part of the lesson, we will explore how governance mechanisms are connected to measurable controls, obligations for transparency, and pathways for remediation. This understanding is vital for ensuring accountability in AI systems and fostering trust among users and the broader public."
        },
        {
          "id": "ai-safety-alignment-101-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "Before making any decisions about deploying artificial intelligence systems, it is important to use a comprehensive checklist. This checklist should include important factors such as legal requirements, ethical considerations, technical specifications, and the potential impact on users. By carefully reviewing these criteria, we can ensure that our decisions are responsible and beneficial to everyone involved."
        }
      ],
      "flashcards": [
        {
          "id": "ai-safety-alignment-101-l07-f1",
          "front": "Stakeholder Map",
          "back": "A framework that tracks impact distribution across affected groups."
        },
        {
          "id": "ai-safety-alignment-101-l07-f2",
          "front": "Accountability Loop",
          "back": "A cycle connecting outcomes, ownership, and corrective action."
        },
        {
          "id": "ai-safety-alignment-101-l07-f3",
          "front": "Responsible Execution",
          "back": "Delivery practice that balances performance with safety, fairness, and transparency."
        }
      ]
    },
    {
      "id": "ai-safety-alignment-101-l08",
      "title": "AI Safety and Alignment Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing digital blueprint of a completed AI safety architecture, with puzzle pieces coming together to form a perfect shield, high-tech aesthetic, deep blues and bright cyan.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic build-up of a futuristic project charter, with holographic text and graphs snapping into place. The camera tilts up as the document culminates in a glowing 'Approved' stamp with a bright lens flare.",
      "learningAids": [
        {
          "id": "ai-safety-alignment-101-l08-a1",
          "type": "practice",
          "title": "Capstone Guide",
          "content": "Synthesize everything you've learned. Ensure your charter connects technical metrics directly to ethical outcomes."
        }
      ],
      "chunks": [
        {
          "id": "ai-safety-alignment-101-l08-c1",
          "kind": "practice",
          "title": "Capstone Scope Definition",
          "content": "You've made it to the final challenge! In this activity, you will create a detailed capstone charter. This document will outline the main objectives of your project, identify potential risks, establish success metrics to measure progress, and set up governance checkpoints to ensure everything stays on track. This exercise helps you think critically about your projects and prepares you for real-world AI safety challenges."
        },
        {
          "id": "ai-safety-alignment-101-l08-c2",
          "kind": "practice",
          "title": "Designing the Safeguards",
          "content": "With your scope defined, it's time to build the actual safety nets. You'll select specific technical controls and policy rules that act as guardrails, ensuring your AI stays on the right path even when faced with unexpected inputs. This step bridges the gap between high-level ethics and hands-on engineering."
        },
        {
          "id": "ai-safety-alignment-101-l08-c3",
          "kind": "recap",
          "title": "Defense Preparation",
          "content": "To conclude the module, you will work with a defense preparation template. This template will guide you in making claims that are supported by hard evidence and require you to explain the reasoning behind any trade-offs you make. This process encourages critical thinking and helps you articulate your safety strategies clearly and effectively to any audience."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-safety-alignment-101-l08-act1",
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
          "id": "ai-safety-alignment-101-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Drill",
          "description": "Defend your capstone approach against cost, risk, and equity critiques.",
          "instructions": [
            "Review the critique presented by the stakeholder.",
            "Select the best evidence-based response from your charter.",
            "Explain why the tradeoff is necessary for overall system safety."
          ]
        }
      ]
    }
  ]
};
