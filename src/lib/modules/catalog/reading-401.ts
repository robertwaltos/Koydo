import type { LearningModule } from "@/lib/modules/types";

export const reading_401_Module: LearningModule = {
  "id": "reading-401",
  "title": "Critical Interpretation, Research Synthesis, and Discourse Leadership",
  "description": "Expert-level reading curriculum on critical interpretation frameworks, advanced synthesis, argument quality evaluation, and high-stakes evidence communication.",
  "subject": "Reading",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "critical-reading",
    "research",
    "communication"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Apply advanced critical interpretation frameworks to complex texts.",
    "Evaluate argument validity and evidence quality across multi-source research discourse.",
    "Synthesize competing perspectives into coherent, evidence-led positions.",
    "Assess uncertainty, bias, and limitation language in expert writing.",
    "Produce decision-grade analytical briefings for diverse audiences.",
    "Lead capstone discourse analysis with transparent interpretation boundaries."
  ],
  "lessons": [
    {
      "id": "reading-401-l01",
      "title": "Interpretive Frameworks and Critical Lenses",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "reading-401-l01-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson's interpretive process to a provided text and record your reasoning steps."
        }
      ],
      "chunks": [
        {
          "id": "reading-401-l01-c1",
          "kind": "concept",
          "title": "Framework Selection",
          "content": "Unlocking a text's deeper meaning begins with selecting the right analytical framework, or 'lens.' Consider the text's purpose, genre, and historical context. A historical lens, for example, reveals different insights than a formalist or feminist one. The goal is to choose a framework that illuminates the text's core arguments and intentions.",
          "visualPrompts": [
            "An animation showing a single text being viewed through different colored lenses (e.g., a historical lens shows newspaper clippings in the background, a psychological lens shows brain synapses).",
            "A toolbox icon opening to reveal tools like a magnifying glass, a scale, and a compass, each representing a different analytical framework."
          ]
        },
        {
          "id": "reading-401-l01-c2",
          "kind": "concept",
          "title": "Making Assumptions Visible",
          "content": "Every reader brings assumptions to a text. A rigorous interpretation makes these assumptions explicit. By acknowledging your own starting premises, you can critically test them against the evidence, evaluate alternative perspectives, and strengthen the foundation of your analysis.",
          "visualPrompts": [
            "An iceberg diagram where the visible tip is labeled 'Interpretation' and the much larger submerged part is labeled 'Assumptions, Biases, and Context'."
          ]
        },
        {
          "id": "reading-401-l01-c3",
          "kind": "recap",
          "title": "Interpretive Rigor",
          "content": "The quality of an interpretation depends on its transparency and logic. A strong analysis is built on a clear evidence trail, a fair engagement with competing viewpoints, and a coherent argument. It's not just what you claim, but how rigorously you support it.",
          "visualPrompts": [
            "A simple flowchart: Evidence -> Analysis -> Claim, with a dotted line showing 'Alternative Viewpoints' feeding into the 'Analysis' stage."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "reading-401-l01-f1",
          "front": "Interpretive Lens",
          "back": "An analytical framework (e.g., historical, feminist, formalist) that guides a reader's attention to specific textual features."
        },
        {
          "id": "reading-401-l01-f2",
          "front": "Counter-Reading",
          "back": "An alternative interpretation of a text that is tested against the same body of evidence."
        },
        {
          "id": "reading-401-l01-f3",
          "front": "Interpretive Assumption",
          "back": "An underlying belief or premise that shapes a reader's analytical claims about a text."
        }
      ]
    },
    {
      "id": "reading-401-l02",
      "title": "Argument Robustness and Evidence Governance Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "reading-401-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson's evaluation criteria to a sample research article and record your reasoning."
        }
      ],
      "chunks": [
        {
          "id": "reading-401-l02-c1",
          "kind": "concept",
          "title": "Argument Robustness Metrics",
          "content": "A robust argument is more than just a claim; it's a well-supported structure. Key metrics include the quality and relevance of its evidence, its acknowledgment of uncertainty, and its thoughtful engagement with potential counterarguments. A strong argument anticipates and addresses criticism.",
          "visualPrompts": [
            "An animation of a bridge being built. The bridge deck is the 'Claim,' supported by strong pillars labeled 'High-Quality Evidence,' 'Addresses Counterarguments,' and 'Acknowledges Limitations.'"
          ]
        },
        {
          "id": "reading-401-l02-c2",
          "kind": "practice",
          "title": "Evidence Governance",
          "content": "Effective analysis requires disciplined evidence management. This means systematically tracking source reliability, evaluating research methodologies, and assessing the direct relevance of data to the claim being made. Good governance ensures your conclusions are built on a foundation of trustworthy information.",
          "visualPrompts": [
            "A dashboard interface with gauges for 'Source Reliability,' 'Methodological Soundness,' and 'Relevance.' A user drags a piece of evidence onto the dashboard, and the needles move."
          ]
        }
      ],
      "interactiveActivities": [
        {
          "id": "reading-401-l02-act1",
          "type": "matching_pairs",
          "title": "Robustness Match",
          "description": "Match the argument feature to its implication for quality.",
          "pairs": [
            {
              "left": "Explicit limitation statement",
              "right": "Improves credibility by defining boundaries"
            },
            {
              "left": "Selective citation of supporting data only",
              "right": "Raises risk of confirmation bias"
            },
            {
              "left": "Engagement with a counterargument",
              "right": "Strengthens overall argumentative robustness"
            },
            {
              "left": "Evidence from a transparent methodology",
              "right": "Improves verifiability and trust"
            }
          ]
        },
        {
          "id": "reading-401-l02-act2",
          "type": "scenario_practice",
          "title": "Policy Brief Vetting Drill",
          "description": "Evaluate a policy brief's argument quality and evidentiary grounding.",
          "instructions": [
            "Identify the single strongest piece of evidence used and explain why.",
            "Identify one overclaim or unsupported assertion and rewrite it to be more precise and responsible."
          ]
        }
      ]
    },
    {
      "id": "reading-401-l03",
      "title": "Checkpoint 1: Critical Frameworks and Argument Quality",
      "type": "quiz",
      "duration": 10,
      "learningAids": [],
      "questions": [
        {
          "id": "reading-401-l03-q1",
          "text": "Why is it crucial to make interpretive assumptions explicit?",
          "skillId": "reading-401-skill-interpretation",
          "options": [
            {
              "id": "a",
              "text": "To hide uncertainty from the reader"
            },
            {
              "id": "b",
              "text": "To allow claims to be tested and refined transparently"
            },
            {
              "id": "c",
              "text": "To avoid the need for textual evidence"
            },
            {
              "id": "d",
              "text": "To force a single, authoritative reading"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Explicit assumptions are foundational to intellectual honesty, enabling critical testing and stronger, more defensible reasoning."
        },
        {
          "id": "reading-401-l03-q2",
          "text": "A robust argument typically includes:",
          "skillId": "reading-401-skill-argument",
          "options": [
            {
              "id": "a",
              "text": "Reliance on a single source with no caveats"
            },
            {
              "id": "b",
              "text": "Transparent evaluation of evidence quality and handling of counterarguments"
            },
            {
              "id": "c",
              "text": "Rhetoric based on assertion rather than evidence"
            },
            {
              "id": "d",
              "text": "A complete absence of uncertainty language"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Robustness is derived from the quality of evidence, transparency about its limitations, and critical engagement with opposing views."
        },
        {
          "id": "reading-401-l03-q3",
          "text": "The risk of an 'overclaim' increases when a writer:",
          "skillId": "reading-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "States the methodological limits of their research"
            },
            {
              "id": "b",
              "text": "Presents a conclusion with absolute certainty and no scope boundaries"
            },
            {
              "id": "c",
              "text": "Uses independently corroborated data"
            },
            {
              "id": "d",
              "text": "Compares and contrasts alternative explanations"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Unbounded certainty language often signals that a claim has exceeded the scope of what the available evidence can support."
        },
        {
          "id": "reading-401-l03-q4",
          "text": "Which of the following is the most reliable interpretive practice?",
          "skillId": "reading-401-skill-interpretation",
          "options": [
            {
              "id": "a",
              "text": "Select one interpretive lens and ignore all alternatives"
            },
            {
              "id": "b",
              "text": "Evaluate several plausible interpretations against the available evidence"
            },
            {
              "id": "c",
              "text": "Prioritize personal preference over textual evidence"
            },
            {
              "id": "d",
              "text": "Avoid considering the source's historical or cultural context"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Testing alternative readings against the evidence is a hallmark of rigorous and nuanced interpretation."
        }
      ]
    },
    {
      "id": "reading-401-l04",
      "title": "Advanced Synthesis: Cross-Discourse Integration",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "reading-401-l04-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson's synthesis process to a set of conflicting articles and record your reasoning."
        }
      ],
      "chunks": [
        {
          "id": "reading-401-l04-c1",
          "kind": "concept",
          "title": "Synthesis Architectures",
          "content": "Expert synthesis moves beyond summarizing sources one by one. It constructs a new, integrated understanding. You can architect your synthesis around core themes, competing explanatory models, or points of tension, weaving evidence from multiple sources into a coherent, overarching narrative.",
          "visualPrompts": [
            "An animation of different colored threads (sources) being woven together on a loom to create a complex, unified tapestry (synthesis)."
          ]
        },
        {
          "id": "reading-401-l04-c2",
          "kind": "concept",
          "title": "Conflict Mapping",
          "content": "When sources disagree, don't just pick a side. Map the conflict. Pinpoint the precise source of disagreement: Is it their underlying assumptions, their research methods, their data, or their interpretation of the same data? This deepens understanding and reveals pathways for resolution.",
          "visualPrompts": [
            "A diagram with two figures arguing. Lines trace back from their conflicting claims to different roots labeled 'Assumptions,' 'Methods,' and 'Data Sets.'"
          ]
        },
        {
          "id": "reading-401-l04-c3",
          "kind": "recap",
          "title": "Position with Boundaries",
          "content": "A high-quality synthesis culminates in a well-defined position, but it doesn't feign absolute certainty. It responsibly outlines the boundaries of its claims, acknowledging remaining uncertainties and specifying what new evidence might change the conclusion. This transparency is a cornerstone of credibility.",
          "visualPrompts": [
            "A map showing a clearly marked territory labeled 'Our Conclusion.' The border is marked with signs that say 'Further Research Needed Here' or 'This Model Applies Under X Conditions.'"
          ]
        }
      ],
      "flashcards": [
        {
          "id": "reading-401-l04-f1",
          "front": "Synthesis Architecture",
          "back": "The organizational logic (e.g., thematic, dialectical) used to integrate multiple sources into a single, unified argument."
        },
        {
          "id": "reading-401-l04-f2",
          "front": "Conflict Mapping",
          "back": "A structured comparison of competing claims that identifies the specific points of divergence in assumptions, methods, or evidence."
        },
        {
          "id": "reading-401-l04-f3",
          "front": "Boundary Condition",
          "back": "A specific context or condition under which a claim or interpretation may no longer be valid."
        }
      ]
    },
    {
      "id": "reading-401-l05",
      "title": "Decision-Grade Communication Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "reading-401-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson's communication principles to draft an executive summary based on a complex report."
        }
      ],
      "chunks": [
        {
          "id": "reading-401-l05-c1",
          "kind": "practice",
          "title": "Audience-Calibrated Briefing",
          "content": "Communicating expert analysis means translating complexity without sacrificing integrity. Calibrate your language, scope, and level of detail to your audience's needs and prior knowledge, while always maintaining fidelity to the evidence and being transparent about uncertainties.",
          "visualPrompts": [
            "An animation of a complex scientific diagram being transformed into three different outputs: a dense academic paragraph, a clear bulleted list for a manager, and a simple, powerful graphic for the public."
          ]
        },
        {
          "id": "reading-401-l05-c2",
          "kind": "recap",
          "title": "Interpretation Accountability",
          "content": "Responsible communication is accountable communication. This means ensuring every claim is traceable to its evidence, carefully controlling the scope of conclusions, and clearly stating what questions remain unanswered. This practice builds trust and enables informed decision-making.",
          "visualPrompts": [
            "A checklist with three items: 'Traceable Claims,' 'Scoped Conclusions,' and 'Stated Uncertainties.' As an animated hand checks each box, a 'Credibility' meter rises."
          ]
        }
      ],
      "interactiveActivities": [
        {
          "id": "reading-401-l05-act1",
          "type": "sorting_buckets",
          "title": "Briefing Statement Sort",
          "description": "Sort these statements by their communication strength for a decision-making audience.",
          "buckets": [
            "Strong",
            "Weak"
          ],
          "items": [
            {
              "text": "Conclusion with evidence qualifier and stated confidence level (e.g., 'high confidence').",
              "bucket": "Strong"
            },
            {
              "text": "An absolute, sweeping claim with no citation or source provided.",
              "bucket": "Weak"
            },
            {
              "text": "A recommendation that explicitly discloses the key assumptions it rests upon.",
              "bucket": "Strong"
            },
            {
              "text": "A forecast presented as a certainty with no mention of risks or alternative scenarios.",
              "bucket": "Weak"
            }
          ]
        },
        {
          "id": "reading-401-l05-act2",
          "type": "scenario_practice",
          "title": "Executive Summary Drill",
          "description": "You have completed a 20-page synthesis on a complex topic. Now, convert it into a 3-point executive summary for a busy decision-maker.",
          "instructions": [
            "State your single most important headline claim, including a confidence level (high, medium, low).",
            "Identify the single most critical uncertainty or risk that could affect the decision.",
            "Propose one clear, actionable next step for the decision-maker."
          ]
        }
      ]
    },
    {
      "id": "reading-401-l06",
      "title": "Checkpoint 2: Synthesis and Communication Rigor",
      "type": "quiz",
      "duration": 11,
      "learningAids": [],
      "questions": [
        {
          "id": "reading-401-l06-q1",
          "text": "Why should you include confidence qualifiers (e.g., 'high confidence,' 'likely') in analytical summaries?",
          "skillId": "reading-401-skill-communication",
          "options": [
            {
              "id": "a",
              "text": "To intentionally weaken all claims and avoid responsibility"
            },
            {
              "id": "b",
              "text": "To accurately align the strength of a claim with the certainty of the evidence"
            },
            {
              "id": "c",
              "text": "To avoid having to draw a firm conclusion"
            },
            {
              "id": "d",
              "text": "To make the summary longer and more academic"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Confidence qualifiers are essential for intellectual honesty and support accurate, risk-informed decision-making by the audience."
        },
        {
          "id": "reading-401-l06-q2",
          "text": "A strong synthesis differs from a simple summary primarily because it:",
          "skillId": "reading-401-skill-synthesis",
          "options": [
            {
              "id": "a",
              "text": "Lists the findings of each source separately"
            },
            {
              "id": "b",
              "text": "Builds a new, integrated argument from the relationships between sources"
            },
            {
              "id": "c",
              "text": "Ignores any disagreements between sources to create a cleaner story"
            },
            {
              "id": "d",
              "text": "Treats all evidence from all sources as equally valid"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Synthesis is a creative, analytical act that constructs a new, integrated interpretation from cross-source dynamics, rather than just reporting on them."
        },
        {
          "id": "reading-401-l06-q3",
          "text": "When faced with two high-quality sources that present conflicting conclusions, the best initial response is to:",
          "skillId": "reading-401-skill-analysis",
          "options": [
            {
              "id": "a",
              "text": "Choose the one that best fits your prior beliefs and ignore the other"
            },
            {
              "id": "b",
              "text": "Map their underlying assumptions and methods to explain the divergence"
            },
            {
              "id": "c",
              "text": "Declare that both sources must be fundamentally wrong"
            },
            {
              "id": "d",
              "text": "Avoid interpretation and simply state that there is a conflict"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rigorous conflict analysis requires a deep dive into methodological, evidential, and theoretical differences to understand why the divergence exists."
        },
        {
          "id": "reading-401-l06-q4",
          "text": "Decision-grade analytical writing for a non-expert audience should prioritize:",
          "skillId": "reading-401-skill-communication",
          "options": [
            {
              "id": "a",
              "text": "Comprehensive length over concise clarity"
            },
            {
              "id": "b",
              "text": "Clarity, traceable evidence, and boundary-aware recommendations"
            },
            {
              "id": "c",
              "text": "The elimination of all statements about uncertainty"
            },
            {
              "id": "d",
              "text": "Using complex jargon to demonstrate expertise"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Decision-makers need concise, evidence-grounded, and appropriately bounded conclusions to act effectively."
        }
      ]
    },
    {
      "id": "reading-401-l07",
      "title": "Capstone: Critical Discourse Analysis Studio",
      "type": "interactive",
      "duration": 20,
      "learningAids": [
        {
          "id": "reading-401-l07-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the provided workspace to structure your capstone analysis, from initial thesis to final recommendation."
        }
      ],
      "chunks": [
        {
          "id": "reading-401-l07-c1",
          "kind": "practice",
          "title": "Capstone Brief",
          "content": "Your capstone project is to produce a decision-grade discourse analysis on a contemporary, contested topic. You will synthesize a portfolio of complex texts, evaluate and rank the quality of competing evidence, map the core points of contention, and produce a final analytical briefing with actionable recommendations for a specified audience.",
          "visualPrompts": [
            "A project blueprint or roadmap graphic, showing the key stages: 'Text Collection,' 'Evidence Evaluation,' 'Synthesis & Mapping,' and 'Final Briefing.'"
          ]
        },
        {
          "id": "reading-401-l07-c2",
          "kind": "recap",
          "title": "Assessment Criteria",
          "content": "Your work will be evaluated on its analytical rigor and communicative effectiveness. Success requires transparently stating your interpretive framework and assumptions, demonstrating fair and robust engagement with counterarguments, and delivering a final position that is clear, evidence-based, and responsibly bounded.",
          "visualPrompts": [
            "A scorecard or rubric with key criteria listed: 'Analytical Transparency,' 'Argument Robustness,' 'Synthesis Quality,' and 'Communication Clarity.'"
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "State your central interpretive thesis and identify the single strongest piece of evidence supporting it.",
          "Outline two credible counter-readings or counterarguments and articulate your reasoned response to each.",
          "Define one critical uncertainty or boundary condition that, if changed, could significantly revise your final interpretation."
        ]
      }
    }
  ]
};
