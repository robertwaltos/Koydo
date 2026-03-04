import type { LearningModule } from "@/lib/modules/types";

export const Science301Module: LearningModule = {
  "id": "science-301",
  "title": "Systems Science, Modeling, and Experimental Analysis III",
  "description": "Advanced science curriculum integrating systems behavior, model-based reasoning, multivariable experiments, and evidence synthesis across disciplines.",
  "subject": "Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "systems",
    "analysis",
    "research"
  ],
  "minAge": 13,
  "maxAge": 18,
  "version": "2.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Analyze complex systems with interacting components and feedback loops",
    "Design multivariable experiments and evaluate confounding risks",
    "Interpret model assumptions and compare predictive performance",
    "Integrate evidence from physics, chemistry, biology, and Earth science contexts",
    "Assess uncertainty sources and robustness of scientific conclusions",
    "Construct coherent scientific arguments from multiple data streams"
  ],
  "lessons": [
    {
      "id": "science-301-l01",
      "title": "Systems Thinking and Feedback Dynamics",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "science-301-l01-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "chunks": [
        {
          "id": "science-301-l01-c1",
          "kind": "concept",
          "title": "System Boundaries and Components",
          "content": "In the study of scientific systems, we find that these systems are made up of different parts that interact with each other. Each system has boundaries that define what is included and what is not, as well as external factors that can influence how the system operates. Understanding these boundaries is essential because it helps us interpret the system's behavior accurately and make valid conclusions about how it works.\nContext recap: In the study of scientific systems, we find that these systems are made up of different parts that interact with each other. Each system has boundaries that define what is included and what is not, as well as external factors that can influence how the system operates. Understanding these boundaries is essential because it helps us interpret the system's behavior accurately and make valid conclusions about how it works."
        },
        {
          "id": "science-301-l01-c2",
          "kind": "concept",
          "title": "Feedback Loops",
          "content": "Feedback loops are important concepts in systems thinking. There are two types of feedback mechanisms: positive and negative. Positive feedback can make changes in a system grow stronger or more intense over time, while negative feedback works to stabilize the system and keep it balanced. Understanding how these feedback loops operate helps us predict how systems will behave in the future.\nContext recap: Feedback loops are important concepts in systems thinking. There are two types of feedback mechanisms: positive and negative. Positive feedback can make changes in a system grow stronger or more intense over time, while negative feedback works to stabilize the system and keep it balanced. Understanding how these feedback loops operate helps us predict how systems will behave in the future.\nContext recap: Feedback loops are important concepts in systems thinking. There are two types of feedback mechanisms: positive and negative. Positive feedback can make changes in a system grow stronger or more intense over time, while negative feedback works to stabilize the system and keep it balanced. Understanding how these feedback loops operate helps us predict how systems will behave in the future.\nWhy this matters: Feedback Loops helps learners in Science connect ideas from Systems Science, Modeling, and Experimental Analysis III to decisions they make during practice and assessment. Connect ideas to real decisions and evidence."
        },
        {
          "id": "science-301-l01-c3",
          "kind": "recap",
          "title": "Emergent Behavior",
          "content": "Emergent behavior refers to complex outcomes that arise from simple rules interacting with one another. When we analyze systems, we need to look at the whole picture rather than just focusing on individual parts. This holistic approach allows us to understand how different elements work together to create results that might not be obvious if we only consider one variable at a time.\nContext recap: Emergent behavior refers to complex outcomes that arise from simple rules interacting with one another. When we analyze systems, we need to look at the whole picture rather than just focusing on individual parts. This holistic approach allows us to understand how different elements work together to create results that might not be obvious if we only consider one variable at a time."
        }
      ],
      "flashcards": [
        {
          "id": "science-301-l01-f1",
          "front": "Feedback loop",
          "back": "Process where system output influences future system behavior."
        },
        {
          "id": "science-301-l01-f2",
          "front": "System boundary",
          "back": "Defined limit separating modeled system from external environment."
        },
        {
          "id": "science-301-l01-f3",
          "front": "Emergent behavior",
          "back": "System-level pattern not obvious from isolated components."
        }
      ]
    },
    {
      "id": "science-301-l02",
      "title": "Multivariable Experimental Design Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "science-301-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "chunks": [
        {
          "id": "science-301-l02-c1",
          "kind": "concept",
          "title": "Confounding and Interaction Effects",
          "content": "When we conduct experiments with multiple variables changing at the same time, it can be tricky to determine what is really causing the effects we observe. This is known as confounding. To get accurate results, we need to design our experiments carefully and use analysis techniques that can help us isolate the true contributors to any observed changes. This way, we can avoid misleading conclusions.\nContext recap: When we conduct experiments with multiple variables changing at the same time, it can be tricky to determine what is really causing the effects we observe. This is known as confounding. To get accurate results, we need to design our experiments carefully and use analysis techniques that can help us isolate the true contributors to any observed changes. This way, we can avoid misleading conclusions.\nContext recap: When we conduct experiments with multiple variables changing at the same time, it can be tricky to determine what is really causing the effects we observe. This is known as confounding. To get accurate results, we need to design our experiments carefully and use analysis techniques that can help us isolate the true contributors to any observed changes. This way, we can avoid misleading conclusions.\nWhy this matters: Confounding and Interaction Effects helps learners in Science connect ideas from Systems Science, Modeling, and Experimental Analysis III to decisions they make during practice and assessment. Connect ideas to real decisions and evidence."
        },
        {
          "id": "science-301-l02-c2",
          "kind": "practice",
          "title": "Factorial Thinking",
          "content": "Factorial thinking is a useful approach in experimental design. It allows us to evaluate not only the effects of individual variables but also how they interact with each other. By using this method, we can gain a deeper understanding of the relationships between different factors and how they collectively influence outcomes in our experiments.\nContext recap: Factorial thinking is a useful approach in experimental design. It allows us to evaluate not only the effects of individual variables but also how they interact with each other. By using this method, we can gain a deeper understanding of the relationships between different factors and how they collectively influence outcomes in our experiments."
        }
      ],
      "interactiveActivities": [
        {
          "id": "science-301-l02-act1",
          "type": "matching_pairs",
          "title": "Design-to-Risk Match",
          "description": "Match design strategy to risk reduced.",
          "pairs": [
            {
              "left": "Random assignment",
              "right": "Reduces selection bias"
            },
            {
              "left": "Blinding",
              "right": "Reduces observer and participant bias"
            },
            {
              "left": "Factorial design",
              "right": "Tests interactions among variables"
            },
            {
              "left": "Replication",
              "right": "Improves reliability across trials"
            }
          ]
        },
        {
          "id": "science-301-l02-act2",
          "type": "scenario_practice",
          "title": "Confounder Isolation Drill",
          "description": "Redesign a flawed experiment to reduce confounding.",
          "instructions": [
            "Identify one confounding path.",
            "Propose one redesign with stronger causal isolation."
          ]
        }
      ]
    },
    {
      "id": "science-301-l03",
      "title": "Checkpoint 1: Systems and Experimental Rigor",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "science-301-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "questions": [
        {
          "id": "science-301-l03-q1",
          "text": "Why define system boundaries before analysis?",
          "skillId": "science-301-skill-systems",
          "options": [
            {
              "id": "a",
              "text": "To ignore external drivers"
            },
            {
              "id": "b",
              "text": "To clarify scope and interpretation limits"
            },
            {
              "id": "c",
              "text": "To eliminate uncertainty"
            },
            {
              "id": "d",
              "text": "To avoid model assumptions"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Boundary definition prevents scope confusion and invalid inference."
        },
        {
          "id": "science-301-l03-q2",
          "text": "Factorial designs are especially useful because they:",
          "skillId": "science-301-skill-design",
          "options": [
            {
              "id": "a",
              "text": "Ignore interactions"
            },
            {
              "id": "b",
              "text": "Estimate both main and interaction effects"
            },
            {
              "id": "c",
              "text": "Require no controls"
            },
            {
              "id": "d",
              "text": "Guarantee causation with no uncertainty"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Factorial designs support richer causal structure analysis."
        },
        {
          "id": "science-301-l03-q3",
          "text": "A positive feedback loop tends to:",
          "skillId": "science-301-skill-systems",
          "options": [
            {
              "id": "a",
              "text": "Counteract change"
            },
            {
              "id": "b",
              "text": "Amplify change"
            },
            {
              "id": "c",
              "text": "Freeze system state"
            },
            {
              "id": "d",
              "text": "Remove delay effects"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Positive feedback reinforces deviations from baseline."
        },
        {
          "id": "science-301-l03-q4",
          "text": "Replication primarily improves:",
          "skillId": "science-301-skill-data",
          "options": [
            {
              "id": "a",
              "text": "Noise and bias"
            },
            {
              "id": "b",
              "text": "Reliability and confidence in findings"
            },
            {
              "id": "c",
              "text": "Single-trial certainty"
            },
            {
              "id": "d",
              "text": "Mechanism proof alone"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Repeated evidence strengthens reliability estimates."
        }
      ]
    },
    {
      "id": "science-301-l04",
      "title": "Modeling Scientific Phenomena Across Disciplines",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "science-301-l04-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "chunks": [
        {
          "id": "science-301-l04-c1",
          "kind": "concept",
          "title": "Model Types and Purposes",
          "content": "In science, we use different types of models to represent and understand various phenomena. These models can be conceptual, mathematical, computational, or physical, and each type serves a unique purpose depending on what we want to learn or infer. By choosing the right model, we can better analyze and predict behaviors in scientific studies.\nContext recap: In science, we use different types of models to represent and understand various phenomena. These models can be conceptual, mathematical, computational, or physical, and each type serves a unique purpose depending on what we want to learn or infer. By choosing the right model, we can better analyze and predict behaviors in scientific studies."
        },
        {
          "id": "science-301-l04-c2",
          "kind": "concept",
          "title": "Cross-Disciplinary Evidence",
          "content": "Many of today's scientific challenges require us to gather and combine evidence from various fields and scales. This cross-disciplinary approach allows scientists to tackle complex problems more effectively by integrating knowledge and data from different areas of study. By working together, we can create a more comprehensive understanding of the issues we face.\nContext recap: Many of today's scientific challenges require us to gather and combine evidence from various fields and scales. This cross-disciplinary approach allows scientists to tackle complex problems more effectively by integrating knowledge and data from different areas of study. By working together, we can create a more comprehensive understanding of the issues we face."
        },
        {
          "id": "science-301-l04-c3",
          "kind": "recap",
          "title": "Model Limits",
          "content": "The effectiveness of a model is often determined by how well it represents the real-world situation it is meant to simulate. This is known as scope fidelity. When we try to apply a model to situations that go beyond what it was designed for, we need to be very careful. It's important to recognize the limitations of our models and understand that making predictions outside of validated areas can lead to errors.\nContext recap: The effectiveness of a model is often determined by how well it represents the real-world situation it is meant to simulate. This is known as scope fidelity. When we try to apply a model to situations that go beyond what it was designed for, we need to be very careful. It's important to recognize the limitations of our models and understand that making predictions outside of validated areas can lead to errors.\nContext recap: The effectiveness of a model is often determined by how well it represents the real-world situation it is meant to simulate. This is known as scope fidelity. When we try to apply a model to situations that go beyond what it was designed for, we need to be very careful. It's important to recognize the limitations of our models and understand that making predictions outside of validated areas can lead to errors.\nWhy this matters: Model Limits helps learners in Science connect ideas from Systems Science, Modeling, and Experimental Analysis III to decisions they make during practice and assessment. Connect ideas to real decisions and evidence.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "flashcards": [
        {
          "id": "science-301-l04-f1",
          "front": "Conceptual model",
          "back": "Qualitative representation of system relationships."
        },
        {
          "id": "science-301-l04-f2",
          "front": "Computational model",
          "back": "Algorithmic simulation used to explore dynamic behavior."
        },
        {
          "id": "science-301-l04-f3",
          "front": "Validation",
          "back": "Process of testing model outputs against observed evidence."
        }
      ]
    },
    {
      "id": "science-301-l05",
      "title": "Evidence Synthesis and Claim Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "science-301-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "chunks": [
        {
          "id": "science-301-l05-c1",
          "kind": "practice",
          "title": "Integrating Multiple Evidence Streams",
          "content": "To draw strong scientific conclusions, it is essential to integrate multiple streams of evidence from different methods. Relying on a single observation can lead to incomplete or inaccurate results. By combining findings from various independent approaches, we can strengthen our claims and ensure that our conclusions are well-supported.\nContext recap: To draw strong scientific conclusions, it is essential to integrate multiple streams of evidence from different methods. Relying on a single observation can lead to incomplete or inaccurate results. By combining findings from various independent approaches, we can strengthen our claims and ensure that our conclusions are well-supported."
        },
        {
          "id": "science-301-l05-c2",
          "kind": "recap",
          "title": "Claim Calibration",
          "content": "When we make conclusions based on scientific data, we need to consider the uncertainty involved, the quality of the data we have, and the assumptions made in our models. This process is known as claim calibration. By calibrating our conclusions in this way, we can better communicate the reliability of our findings and the confidence we have in them.\nContext recap: When we make conclusions based on scientific data, we need to consider the uncertainty involved, the quality of the data we have, and the assumptions made in our models. This process is known as claim calibration. By calibrating our conclusions in this way, we can better communicate the reliability of our findings and the confidence we have in them."
        }
      ],
      "interactiveActivities": [
        {
          "id": "science-301-l05-act1",
          "type": "sorting_buckets",
          "title": "Evidence Strength Sort",
          "description": "Sort evidence items by contribution strength.",
          "buckets": [
            "Strong",
            "Moderate",
            "Weak"
          ],
          "items": [
            {
              "text": "Replicated controlled experiment with consistent outcome",
              "bucket": "Strong"
            },
            {
              "text": "Single observational dataset with confounders",
              "bucket": "Moderate"
            },
            {
              "text": "Unverified anecdotal report",
              "bucket": "Weak"
            },
            {
              "text": "Independent methods converging on same trend",
              "bucket": "Strong"
            }
          ]
        },
        {
          "id": "science-301-l05-act2",
          "type": "scenario_practice",
          "title": "Claim Defense Exercise",
          "description": "Defend and bound a scientific claim from mixed evidence.",
          "instructions": [
            "State strongest supporting evidence.",
            "State one major uncertainty that limits confidence."
          ]
        }
      ]
    },
    {
      "id": "science-301-l06",
      "title": "Checkpoint 2: Models and Evidence Integration",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "science-301-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "questions": [
        {
          "id": "science-301-l06-q1",
          "text": "Why combine multiple evidence streams?",
          "skillId": "science-301-skill-evidence",
          "options": [
            {
              "id": "a",
              "text": "To increase narrative complexity only"
            },
            {
              "id": "b",
              "text": "To improve robustness through independent convergence"
            },
            {
              "id": "c",
              "text": "To remove uncertainty"
            },
            {
              "id": "d",
              "text": "To avoid controls"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Independent convergence strengthens inferential confidence."
        },
        {
          "id": "science-301-l06-q2",
          "text": "Model extrapolation beyond validated conditions should be:",
          "skillId": "science-301-skill-models",
          "options": [
            {
              "id": "a",
              "text": "Treated as certainty"
            },
            {
              "id": "b",
              "text": "Reported with caution and explicit uncertainty"
            },
            {
              "id": "c",
              "text": "Hidden from discussion"
            },
            {
              "id": "d",
              "text": "Used without assumptions"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Predictive reliability decreases outside validated range."
        },
        {
          "id": "science-301-l06-q3",
          "text": "Most reliable claim language is:",
          "skillId": "science-301-skill-communication",
          "options": [
            {
              "id": "a",
              "text": "Absolute and unconditional"
            },
            {
              "id": "b",
              "text": "Evidence-aligned with known assumptions and limits"
            },
            {
              "id": "c",
              "text": "Independent of measurement quality"
            },
            {
              "id": "d",
              "text": "Anecdote-driven"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Scientific communication should align confidence with evidence strength."
        },
        {
          "id": "science-301-l06-q4",
          "text": "In multivariable studies, confounding is problematic because it:",
          "skillId": "science-301-skill-design",
          "options": [
            {
              "id": "a",
              "text": "Improves causal certainty"
            },
            {
              "id": "b",
              "text": "Creates ambiguous attribution of observed effects"
            },
            {
              "id": "c",
              "text": "Removes interaction effects"
            },
            {
              "id": "d",
              "text": "Guarantees reproducibility"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Confounders blur causal interpretation."
        }
      ]
    }
  ]
};
