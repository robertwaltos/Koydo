import type { LearningModule } from "@/lib/modules/types";

export const Science201Module: LearningModule = {
  "id": "science-201",
  "title": "Scientific Reasoning and Applied Inquiry II",
  "description": "Intermediate science curriculum on hypothesis testing, measurement quality, experimental controls, and evidence-based explanation across physical, life, and Earth systems.",
  "subject": "Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "inquiry",
    "lab"
  ],
  "minAge": 10,
  "maxAge": 15,
  "version": "2.0.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Formulate testable scientific questions and hypotheses",
    "Design fair tests using variables, controls, and repeatability principles",
    "Interpret tables, graphs, and trends with attention to measurement quality",
    "Distinguish correlation from causation in scientific claims",
    "Evaluate reliability of evidence sources and experimental methods",
    "Communicate scientific conclusions with uncertainty-aware language"
  ],
  "lessons": [
    {
      "id": "science-201-l01",
      "title": "Scientific Questions, Hypotheses, and Variables",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "science-201-l01-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "chunks": [
        {
          "id": "science-201-l01-c1",
          "kind": "concept",
          "title": "From Curiosity to Testable Question",
          "content": "Scientific inquiry starts with our natural curiosity about the world around us. To make our questions useful, we need to turn these broad ideas into specific questions that can be measured and observed. This helps us focus our research and find clear answers to our inquiries.\nContext recap: Scientific inquiry starts with our natural curiosity about the world around us. To make our questions useful, we need to turn these broad ideas into specific questions that can be measured and observed. This helps us focus our research and find clear answers to our inquiries."
        },
        {
          "id": "science-201-l01-c2",
          "kind": "concept",
          "title": "Variables and Controls",
          "content": "In any scientific experiment, it is crucial to identify three types of variables: independent, dependent, and controlled. The independent variable is what you change, the dependent variable is what you measure, and controlled variables are kept constant to ensure a fair test. This way, we can trust the results of our experiments.\nContext recap: In any scientific experiment, it is crucial to identify three types of variables: independent, dependent, and controlled. The independent variable is what you change, the dependent variable is what you measure, and controlled variables are kept constant to ensure a fair test. This way, we can trust the results of our experiments."
        },
        {
          "id": "science-201-l01-c3",
          "kind": "recap",
          "title": "Hypothesis Quality",
          "content": "A strong hypothesis is an essential part of scientific inquiry. It should be specific, meaning it clearly states what you expect to happen. Additionally, it must be testable, allowing for experiments to confirm or refute it. Finally, a good hypothesis is based on previous evidence or logical reasoning, connecting it to what we already know.\nContext recap: A strong hypothesis is an essential part of scientific inquiry. It should be specific, meaning it clearly states what you expect to happen. Additionally, it must be testable, allowing for experiments to confirm or refute it. Finally, a good hypothesis is based on previous evidence or logical reasoning, connecting it to what we already know.\nContext recap: A strong hypothesis is an essential part of scientific inquiry. It should be specific, meaning it clearly states what you expect to happen. Additionally, it must be testable, allowing for experiments to confirm or refute it. Finally, a good hypothesis is based on previous evidence or logical reasoning, connecting it to what we already know.\nWhy this matters: Hypothesis Quality helps learners in Science connect ideas from Scientific Reasoning and Applied Inquiry II to decisions they make during practice and assessment. Connect ideas to real decisions and evidence."
        }
      ],
      "flashcards": [
        {
          "id": "science-201-l01-f1",
          "front": "Independent variable",
          "back": "Factor intentionally changed by the investigator."
        },
        {
          "id": "science-201-l01-f2",
          "front": "Dependent variable",
          "back": "Observed outcome measured in response to change."
        },
        {
          "id": "science-201-l01-f3",
          "front": "Control variable",
          "back": "Condition kept constant to isolate the tested factor."
        }
      ]
    },
    {
      "id": "science-201-l02",
      "title": "Experimental Design and Data Integrity Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "science-201-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "chunks": [
        {
          "id": "science-201-l02-c1",
          "kind": "concept",
          "title": "Repeatability and Fair Testing",
          "content": "For an experiment to be reliable, it must be repeatable. This means that if someone else conducts the same experiment under the same conditions, they should get similar results. It's also important to document everything carefully and to control any factors that could confuse the results. This helps ensure that our findings are trustworthy.\nContext recap: For an experiment to be reliable, it must be repeatable. This means that if someone else conducts the same experiment under the same conditions, they should get similar results. It's also important to document everything carefully and to control any factors that could confuse the results. This helps ensure that our findings are trustworthy.\nContext recap: For an experiment to be reliable, it must be repeatable. This means that if someone else conducts the same experiment under the same conditions, they should get similar results. It's also important to document everything carefully and to control any factors that could confuse the results. This helps ensure that our findings are trustworthy.\nWhy this matters: Repeatability and Fair Testing helps learners in Science connect ideas from Scientific Reasoning and Applied Inquiry II to decisions they make during practice and assessment. Connect ideas to real decisions and evidence."
        },
        {
          "id": "science-201-l02-c2",
          "kind": "practice",
          "title": "Data Capture Discipline",
          "content": "When collecting data, it is vital to follow a strict measurement protocol. This includes using consistent units of measurement and keeping complete records of all observations. Accurate data capture is essential because it provides the credible evidence needed to support our scientific claims.\nContext recap: When collecting data, it is vital to follow a strict measurement protocol. This includes using consistent units of measurement and keeping complete records of all observations. Accurate data capture is essential because it provides the credible evidence needed to support our scientific claims.\nContext recap: When collecting data, it is vital to follow a strict measurement protocol. This includes using consistent units of measurement and keeping complete records of all observations. Accurate data capture is essential because it provides the credible evidence needed to support our scientific claims. Context recap: When collecting data, it is vital to follow a strict measurement protocol.\nWhy this matters: Data Capture Discipline helps learners in Science connect ideas from Scientific Reasoning and Applied Inquiry II to decisions they make during practice and assessment. Connect ideas to real decisions and evidence."
        }
      ],
      "interactiveActivities": [
        {
          "id": "science-201-l02-act1",
          "type": "matching_pairs",
          "title": "Design-to-Risk Match",
          "description": "Match design choices to the reliability risk they reduce.",
          "pairs": [
            {
              "left": "Multiple trials",
              "right": "Reduces random error influence"
            },
            {
              "left": "Control group",
              "right": "Improves causal comparison"
            },
            {
              "left": "Calibrated instrument",
              "right": "Reduces systematic measurement bias"
            },
            {
              "left": "Detailed procedure log",
              "right": "Supports replication and verification"
            }
          ]
        },
        {
          "id": "science-201-l02-act2",
          "type": "scenario_practice",
          "title": "Experiment Critique Drill",
          "description": "Identify weaknesses in a sample experiment and propose fixes.",
          "instructions": [
            "Find one confounding variable.",
            "Recommend one stronger control method."
          ]
        }
      ]
    },
    {
      "id": "science-201-l03",
      "title": "Checkpoint 1: Inquiry and Experimental Method",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "science-201-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "questions": [
        {
          "id": "science-201-l03-q1",
          "text": "Why are control variables important?",
          "skillId": "science-201-skill-method",
          "options": [
            {
              "id": "a",
              "text": "They increase noise"
            },
            {
              "id": "b",
              "text": "They isolate effect of tested factor"
            },
            {
              "id": "c",
              "text": "They replace measurements"
            },
            {
              "id": "d",
              "text": "They remove need for trials"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Controls help ensure observed effects are attributable to intended changes."
        },
        {
          "id": "science-201-l03-q2",
          "text": "Most testable hypothesis is one that:",
          "skillId": "science-201-skill-hypothesis",
          "options": [
            {
              "id": "a",
              "text": "Is vague and broad"
            },
            {
              "id": "b",
              "text": "Defines measurable expected outcome"
            },
            {
              "id": "c",
              "text": "Cannot be disproven"
            },
            {
              "id": "d",
              "text": "Avoids prior evidence"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Testability requires measurable outcomes and potential falsification."
        },
        {
          "id": "science-201-l03-q3",
          "text": "What is the main benefit of repeated trials?",
          "skillId": "science-201-skill-data",
          "options": [
            {
              "id": "a",
              "text": "Eliminate all error"
            },
            {
              "id": "b",
              "text": "Improve reliability by reducing random variation effects"
            },
            {
              "id": "c",
              "text": "Guarantee desired result"
            },
            {
              "id": "d",
              "text": "Remove control group need"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Multiple trials improve confidence in observed patterns."
        },
        {
          "id": "science-201-l03-q4",
          "text": "Which practice best improves reproducibility?",
          "skillId": "science-201-skill-method",
          "options": [
            {
              "id": "a",
              "text": "Minimal documentation"
            },
            {
              "id": "b",
              "text": "Detailed method and measurement records"
            },
            {
              "id": "c",
              "text": "Changing procedures each trial"
            },
            {
              "id": "d",
              "text": "Ignoring units"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reproducibility depends on transparent, detailed procedural records."
        }
      ]
    },
    {
      "id": "science-201-l04",
      "title": "Data Representation and Trend Interpretation",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "science-201-l04-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "chunks": [
        {
          "id": "science-201-l04-c1",
          "kind": "concept",
          "title": "Choosing Graph Forms",
          "content": "Different types of graphs can show different relationships between data points. Choosing the right type of graph is important because it helps us understand the information correctly and prevents misunderstandings. By selecting the appropriate representation, we can communicate our findings more effectively.\nContext recap: Different types of graphs can show different relationships between data points. Choosing the right type of graph is important because it helps us understand the information correctly and prevents misunderstandings. By selecting the appropriate representation, we can communicate our findings more effectively.\nContext recap: Different types of graphs can show different relationships between data points. Choosing the right type of graph is important because it helps us understand the information correctly and prevents misunderstandings. By selecting the appropriate representation, we can communicate our findings more effectively. Context recap: Different types of graphs can show different relationships between data points.\nWhy this matters: Choosing Graph Forms helps learners in Science connect ideas from Scientific Reasoning and Applied Inquiry II to decisions they make during practice and assessment. Connect ideas to real decisions and evidence."
        },
        {
          "id": "science-201-l04-c2",
          "kind": "concept",
          "title": "Uncertainty and Error Bars",
          "content": "When interpreting data points, we must consider the uncertainty involved. Data should not be viewed as exact truths; instead, we should recognize that there is always some level of uncertainty. This context helps us make more informed conclusions about our findings.\nContext recap: When interpreting data points, we must consider the uncertainty involved. Data should not be viewed as exact truths; instead, we should recognize that there is always some level of uncertainty. This context helps us make more informed conclusions about our findings.\nContext recap: When interpreting data points, we must consider the uncertainty involved. Data should not be viewed as exact truths; instead, we should recognize that there is always some level of uncertainty. This context helps us make more informed conclusions about our findings. Context recap: When interpreting data points, we must consider the uncertainty involved.\nWhy this matters: Uncertainty and Error Bars helps learners in Science connect ideas from Scientific Reasoning and Applied Inquiry II to decisions they make during practice and assessment. Connect ideas to real decisions and evidence."
        },
        {
          "id": "science-201-l04-c3",
          "kind": "recap",
          "title": "Pattern vs Noise",
          "content": "In science, it is important to distinguish between meaningful patterns and random noise in data. Recognizing genuine trends helps us make accurate inferences and conclusions. This skill is central to understanding scientific results and making informed decisions based on data.\nContext recap: In science, it is important to distinguish between meaningful patterns and random noise in data. Recognizing genuine trends helps us make accurate inferences and conclusions. This skill is central to understanding scientific results and making informed decisions based on data.\nContext recap: In science, it is important to distinguish between meaningful patterns and random noise in data. Recognizing genuine trends helps us make accurate inferences and conclusions. This skill is central to understanding scientific results and making informed decisions based on data. Context recap: In science, it is important to distinguish between meaningful patterns and random noise in data.\nWhy this matters: Pattern vs Noise helps learners in Science connect ideas from Scientific Reasoning and Applied Inquiry II to decisions they make during practice and assessment. Connect ideas to real decisions and evidence."
        }
      ],
      "flashcards": [
        {
          "id": "science-201-l04-f1",
          "front": "Error bar",
          "back": "Visual indicator of measurement uncertainty range."
        },
        {
          "id": "science-201-l04-f2",
          "front": "Trend",
          "back": "General direction or relationship in data over observations."
        },
        {
          "id": "science-201-l04-f3",
          "front": "Outlier",
          "back": "Data point substantially different from the rest of a dataset."
        }
      ]
    },
    {
      "id": "science-201-l05",
      "title": "Causation, Correlation, and Claim Evaluation Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "science-201-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "chunks": [
        {
          "id": "science-201-l05-c1",
          "kind": "practice",
          "title": "Correlation Caution",
          "content": "Just because two variables show a relationship does not mean that one causes the other. To prove causation, we need strong experimental design and a clear understanding of the mechanisms involved. This caution helps us avoid jumping to conclusions without sufficient evidence.\nContext recap: Just because two variables show a relationship does not mean that one causes the other. To prove causation, we need strong experimental design and a clear understanding of the mechanisms involved. This caution helps us avoid jumping to conclusions without sufficient evidence.\nContext recap: Just because two variables show a relationship does not mean that one causes the other. To prove causation, we need strong experimental design and a clear understanding of the mechanisms involved. This caution helps us avoid jumping to conclusions without sufficient evidence. Context recap: Just because two variables show a relationship does not mean that one causes the other.\nWhy this matters: Correlation Caution helps learners in Science connect ideas from Scientific Reasoning and Applied Inquiry II to decisions they make during practice and assessment. Connect ideas to real decisions and evidence."
        },
        {
          "id": "science-201-l05-c2",
          "kind": "recap",
          "title": "Evidence Strength",
          "content": "When evaluating claims, the strength of the evidence is crucial. We should have confidence in a claim only if the evidence supporting it is of high quality, consistent, and comes from independent sources. This approach ensures that our conclusions are well-founded and reliable.\nContext recap: When evaluating claims, the strength of the evidence is crucial. We should have confidence in a claim only if the evidence supporting it is of high quality, consistent, and comes from independent sources. This approach ensures that our conclusions are well-founded and reliable."
        }
      ],
      "interactiveActivities": [
        {
          "id": "science-201-l05-act1",
          "type": "sorting_buckets",
          "title": "Claim Type Sort",
          "description": "Sort statements by correlation claim vs causal claim.",
          "buckets": [
            "Correlation",
            "Causation"
          ],
          "items": [
            {
              "text": "Two variables rise together in observations",
              "bucket": "Correlation"
            },
            {
              "text": "Controlled experiment isolates variable effect",
              "bucket": "Causation"
            },
            {
              "text": "Survey-only association finding",
              "bucket": "Correlation"
            },
            {
              "text": "Mechanism-supported intervention effect",
              "bucket": "Causation"
            }
          ]
        },
        {
          "id": "science-201-l05-act2",
          "type": "scenario_practice",
          "title": "Headline Claim Review",
          "description": "Evaluate a science headline and rate evidence quality.",
          "instructions": [
            "Identify one missing evidence detail.",
            "Propose one better follow-up study."
          ]
        }
      ]
    },
    {
      "id": "science-201-l06",
      "title": "Checkpoint 2: Data and Evidence Reasoning",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "science-201-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "questions": [
        {
          "id": "science-201-l06-q1",
          "text": "Why include error bars when presenting experimental results?",
          "skillId": "science-201-skill-data",
          "options": [
            {
              "id": "a",
              "text": "To hide exact measurements"
            },
            {
              "id": "b",
              "text": "To communicate uncertainty range"
            },
            {
              "id": "c",
              "text": "To prove causation automatically"
            },
            {
              "id": "d",
              "text": "To remove outliers"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Error bars provide context on precision and variability."
        },
        {
          "id": "science-201-l06-q2",
          "text": "Correlation without controlled testing most directly supports:",
          "skillId": "science-201-skill-claims",
          "options": [
            {
              "id": "a",
              "text": "Strong causation claim"
            },
            {
              "id": "b",
              "text": "Association claim requiring further investigation"
            },
            {
              "id": "c",
              "text": "No relationship conclusion"
            },
            {
              "id": "d",
              "text": "Definitive mechanism proof"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Association findings are preliminary without causal isolation."
        },
        {
          "id": "science-201-l06-q3",
          "text": "A reproducible result means:",
          "skillId": "science-201-skill-method",
          "options": [
            {
              "id": "a",
              "text": "Only one lab can obtain it"
            },
            {
              "id": "b",
              "text": "Independent trials can obtain similar outcomes"
            },
            {
              "id": "c",
              "text": "It has no uncertainty"
            },
            {
              "id": "d",
              "text": "It never includes outliers"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reproducibility reflects consistency across independent attempts."
        },
        {
          "id": "science-201-l06-q4",
          "text": "Most credible scientific claim language should be:",
          "skillId": "science-201-skill-communication",
          "options": [
            {
              "id": "a",
              "text": "Absolute and certainty-only"
            },
            {
              "id": "b",
              "text": "Evidence-aligned with uncertainty and scope limits"
            },
            {
              "id": "c",
              "text": "Unrelated to data"
            },
            {
              "id": "d",
              "text": "Based on one anecdote"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Responsible claims align confidence with evidence quality."
        }
      ]
    }
  ]
};
