import type { LearningModule } from "@/lib/modules/types";

export const music_history_301_Module: LearningModule = {
  "id": "music-history-301",
  "title": "Music History: Systems and Analysis",
  "description": "An advanced curriculum in Music History that applies systems thinking to the analysis of historical periods, cultural exchange, and stylistic evolution. Students will learn to build structured analytical workflows, evaluate evidence critically, and communicate complex historical arguments.",
  "subject": "Music",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "arts",
    "history",
    "analysis"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Develop analytical frameworks for studying musical periods and cultural influences.",
    "Apply structured workflows to plan, execute, and review musicological research.",
    "Evaluate primary and secondary sources using clear evidence standards.",
    "Identify and diagnose common errors in historical analysis, such as confirmation bias or misinterpretation of sources.",
    "Communicate analytical findings and their limitations to diverse audiences.",
    "Build repeatable processes for continuous improvement in historical research and analysis."
  ],
  "lessons": [
    {
      "id": "music-history-301-l01",
      "title": "Foundational Models for Music History",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "music-history-301-l01-a1",
          "type": "image",
          "title": "Timeline of Musical Innovation",
          "content": "An interactive timeline showing the Baroque, Classical, and Romantic periods. It highlights key composers, pivotal compositions, and technological innovations (e.g., the invention of the piano), with prompts asking the user to draw causal links between them."
        }
      ],
      "chunks": [
        {
          "id": "music-history-301-l01-c1",
          "kind": "concept",
          "title": "Defining Scope and Vocabulary",
          "content": "To analyze music history effectively, we must first establish a clear and consistent vocabulary. This involves defining the boundaries of historical periods like the 'Baroque' or 'Classical' eras and identifying the core units of analysis we will study, such as a composer's use of harmony, a specific genre like the string quartet, or a single symphony. Agreeing on these terms allows us to compare findings accurately and build upon each other's work."
        },
        {
          "id": "music-history-301-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Historical Context",
          "content": "Understanding *why* musical styles changed is more important than just knowing *that* they changed. We will explore the relationship between music and its context, examining how constraints like social norms, political events, or technological limitations shaped musical creation. For example, the invention of the printing press dramatically lowered the cost of distributing sheet music, causing a shift in how musical ideas spread across Europe."
        },
        {
          "id": "music-history-301-l01-c3",
          "kind": "recap",
          "title": "Evidence and Argumentation",
          "content": "A strong historical argument relies on solid evidence. We will learn to distinguish between primary sources (like a composer's original score or letters) and secondary sources (like a biography). This lesson introduces the importance of setting clear standards for evidence and documenting our analytical process, ensuring our conclusions are transparent, defensible, and built on a foundation of fact."
        }
      ],
      "flashcards": [
        {
          "id": "music-history-301-l01-f1",
          "front": "Unit of Analysis",
          "back": "The specific musical element being studied, such as a melody, a composer's harmonic language, or a genre's evolution."
        },
        {
          "id": "music-history-301-l01-f2",
          "front": "Constraint",
          "back": "A social, technological, or economic boundary that shapes or limits musical possibilities in a given historical period."
        },
        {
          "id": "music-history-301-l01-f3",
          "front": "Primary Source",
          "back": "A firsthand account or direct evidence from the historical period, such as an original manuscript, a letter, or a period instrument."
        }
      ]
    },
    {
      "id": "music-history-301-l02",
      "title": "Building an Analytical Workflow",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "music-history-301-l02-a1",
          "type": "practice",
          "title": "Workflow Template",
          "content": "A downloadable worksheet for structuring a music history analysis. It includes sections for defining the research question, listing primary/secondary sources (inputs), setting analytical checkpoints, and defining the final output (e.g., an essay, a presentation)."
        }
      ],
      "chunks": [
        {
          "id": "music-history-301-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this lab, you will design a complete analytical workflow. For example, to trace the influence of J.S. Bach on Felix Mendelssohn, you would define your inputs (scores by both composers), establish checkpoints (e.g., compare fugal techniques), and determine your output (a written analysis with musical examples). This structured process ensures your research is thorough and repeatable."
        },
        {
          "id": "music-history-301-l02-c2",
          "kind": "recap",
          "title": "The Analyst's Journal",
          "content": "Every decision in your workflow should be documented in an 'analyst's journal.' This includes your rationale for choosing specific pieces to analyze, your hypothesis about what you expect to find, and a plan for how you will verify your conclusions. This practice makes your thought process transparent and helps you learn from your analytical journey, whether your hypothesis was confirmed or not."
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-history-301-l02-act1",
          "type": "matching_pairs",
          "title": "Analytical Process Match",
          "description": "Match each research step to its primary function in ensuring a quality analysis.",
          "pairs": [
            {
              "left": "Source Vetting",
              "right": "Prevents unreliable information from influencing your conclusions."
            },
            {
              "left": "Mid-Project Peer Review",
              "right": "Stops the propagation of early errors or flawed assumptions."
            },
            {
              "left": "Thesis Statement",
              "right": "Measures whether the final analysis successfully answers the research question."
            },
            {
              "left": "Post-Analysis Review",
              "right": "Captures lessons to improve the next research project."
            }
          ]
        },
        {
          "id": "music-history-301-l02-act2",
          "type": "sorting_buckets",
          "title": "Common Pitfalls in Research",
          "description": "Sort these common research problems into the correct categories.",
          "buckets": [
            "Flawed Premise",
            "Poor Execution",
            "Weak Evidence"
          ],
          "items": [
            {
              "text": "Research question is too broad",
              "bucket": "Flawed Premise"
            },
            {
              "text": "Disorganized research notes",
              "bucket": "Poor Execution"
            },
            {
              "text": "Relying only on secondary sources",
              "bucket": "Weak Evidence"
            },
            {
              "text": "No comparison against a baseline",
              "bucket": "Weak Evidence"
            }
          ]
        }
      ]
    },
    {
      "id": "music-history-301-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "music-history-301-l03-a1",
          "type": "practice",
          "title": "Review Your Notes",
          "content": "Before starting the quiz, review your workflow template and analyst's journal from the previous lesson. Think about how you defined your terms and structured your process."
        }
      ],
      "questions": [
        {
          "id": "music-history-301-l03-q1",
          "text": "When analyzing the transition from the Classical to the Romantic period, which action best improves the quality of your argument?",
          "skillId": "music-history-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Focus on a single symphony by one composer."
            },
            {
              "id": "b",
              "text": "Define 'Classical' and 'Romantic' criteria, compare works by multiple composers, and test your assumptions."
            },
            {
              "id": "c",
              "text": "Listen to the music and rely solely on your emotional response."
            },
            {
              "id": "d",
              "text": "Avoid documenting your analytical steps to save time."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A strong analysis relies on clear criteria, comparative evidence, and testable assumptions to ensure reliability and depth."
        },
        {
          "id": "music-history-301-l03-q2",
          "text": "In studying the spread of Italian opera conventions to France, what is the strongest indicator of a high-quality research process?",
          "skillId": "music-history-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Finishing the research paper as quickly as possible."
            },
            {
              "id": "b",
              "text": "A workflow with traceable steps, source verification checkpoints, and measurable analytical outcomes."
            },
            {
              "id": "c",
              "text": "An unstructured approach that follows inspiration without documentation."
            },
            {
              "id": "d",
              "text": "A single, compelling anecdote about a French composer."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A quality research process is observable, repeatable, and measurable, leading to more trustworthy conclusions."
        },
        {
          "id": "music-history-301-l03-q3",
          "text": "When evaluating a composer's stylistic development, which practice supports the most trustworthy conclusions?",
          "skillId": "music-history-301-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Ignoring early works that don't fit the narrative of 'progress'."
            },
            {
              "id": "b",
              "text": "Using early works as a baseline for comparison and analyzing failed or abandoned compositions."
            },
            {
              "id": "c",
              "text": "Deciding on the composer's 'mature style' after only looking at their late works."
            },
            {
              "id": "d",
              "text": "Removing the historical context from the musical analysis."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Using baselines for comparison and analyzing failures or outliers provides a more complete and honest assessment of stylistic change."
        },
        {
          "id": "music-history-301-l03-q4",
          "text": "A mature critical listening strategy for analyzing a piece of music should prioritize:",
          "skillId": "music-history-301-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Focusing only on melody at the expense of harmony and rhythm."
            },
            {
              "id": "b",
              "text": "A balanced analysis of form, harmony, rhythm, and historical context."
            },
            {
              "id": "c",
              "text": "Decisions based only on whether you personally like the piece."
            },
            {
              "id": "d",
              "text": "Not reviewing your initial analysis after learning new information."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A mature, balanced analysis considers multiple musical parameters in context to create a holistic and defensible interpretation."
        }
      ]
    },
    {
      "id": "music-history-301-l04",
      "title": "Methods, Metrics, and Common Errors",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "music-history-301-l04-a1",
          "type": "mnemonic",
          "title": "Avoid Analytical Traps (B.I.A.S.)",
          "content": "Use the mnemonic B.I.A.S. to remember common errors: B (Bias - letting preconceived notions guide you), I (Interpretation - over- or under-interpreting evidence), A (Assumption - failing to question your premises), S (Source - using unreliable sources)."
        }
      ],
      "chunks": [
        {
          "id": "music-history-301-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "Different research questions require different analytical methods. For example, Schenkerian analysis is excellent for revealing the harmonic structure of tonal music, but formal analysis is better for understanding the sectional layout of a sonata. In this lesson, you will learn to compare analytical methods and justify why one is better suited for a specific task, considering its strengths, limitations, and potential for error."
        },
        {
          "id": "music-history-301-l04-c2",
          "kind": "example",
          "title": "Measuring Musical Change",
          "content": "To make claims about musical evolution, we need ways to measure it. A good measurement framework connects leading indicators (early signs of a new trend, like Beethoven's increasing use of dynamic markings) with lagging outcomes (the established 'sound' of the Romantic era). We can also use diagnostic metrics, like tracking the frequency of a specific chord progression, to pinpoint exactly when and how a style is changing."
        },
        {
          "id": "music-history-301-l04-c3",
          "kind": "recap",
          "title": "Classifying Analytical Errors",
          "content": "When an analysis goes wrong, it's important to understand why. We will classify common errors into categories: source errors (misreading a manuscript), methodological errors (applying the wrong analytical technique), interpretive errors (confirmation bias), and argumentation errors (a logical flaw in your conclusion). This allows us to develop targeted strategies to prevent these mistakes in the future."
        }
      ],
      "flashcards": [
        {
          "id": "music-history-301-l04-f1",
          "front": "Leading Indicator",
          "back": "A musical feature or technique that signals a developing stylistic trend before it becomes widespread (e.g., early use of chromaticism)."
        },
        {
          "id": "music-history-301-l04-f2",
          "front": "Confirmation Bias",
          "back": "The tendency to favor evidence that supports your existing beliefs while ignoring evidence that contradicts them."
        },
        {
          "id": "music-history-301-l04-f3",
          "front": "Cost of Error",
          "back": "The impact of a flawed analysis, which could range from a poor grade to a published historical inaccuracy."
        }
      ]
    },
    {
      "id": "music-history-301-l05",
      "title": "Case Study: Designing a Museum Exhibit",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "music-history-301-l05-a1",
          "type": "practice",
          "title": "Case Study Brief",
          "content": "A downloadable PDF detailing the case scenario: 'A museum wants to create an exhibit on the influence of Eastern European folk music on Béla Bartók's compositions. Develop a research plan that is rigorous, engaging for the public, and achievable within six months.'"
        }
      ],
      "chunks": [
        {
          "id": "music-history-301-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "In this interactive case study, you will break down the museum exhibit scenario into its core components. You'll define the main objective (demonstrate folk influence), identify the context (a public museum exhibit), list constraints (time, budget, available sources), and brainstorm potential research paths. You will document the trade-offs for each path, such as depth of analysis versus audience accessibility."
        },
        {
          "id": "music-history-301-l05-c2",
          "kind": "recap",
          "title": "The Research Proposal",
          "content": "Based on your analysis, you will draft a formal research proposal for the museum. This proposal must include clear success criteria (e.g., 'visitors can identify a folk melody within a Bartók piece'), a timeline with key milestones, and a plan for verifying your analytical claims before the exhibit is finalized. This exercise simulates the real-world process of planning and executing a major musicological project."
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-history-301-l05-act1",
          "type": "scenario_practice",
          "title": "Research Strategy Simulation",
          "description": "For the Bartók exhibit, choose one of three research strategies, each with different trade-offs between speed, depth, and cost.",
          "instructions": [
            "Define what a 'successful exhibit' means before choosing.",
            "Document one short-term trade-off (e.g., 'less detailed analysis') and one long-term benefit (e.g., 'finished on time').",
            "Specify a metric to confirm your strategy worked (e.g., 'positive visitor feedback on clarity')."
          ]
        },
        {
          "id": "music-history-301-l05-act2",
          "type": "matching_pairs",
          "title": "Research Method and its Effect",
          "description": "Connect each research action with its most likely system-level effect on the project.",
          "pairs": [
            {
              "left": "Stricter source selection",
              "right": "Higher quality evidence but potentially fewer examples."
            },
            {
              "left": "Automated melodic pattern matching",
              "right": "Faster initial analysis but risks missing contextual nuance."
            },
            {
              "left": "Weekly peer review sessions",
              "right": "Improved analytical rigor and fewer late-stage errors."
            },
            {
              "left": "Consulting with ethnomusicologists",
              "right": "Reduced risk of misinterpreting the folk source material."
            }
          ]
        }
      ]
    },
    {
      "id": "music-history-301-l06",
      "title": "Checkpoint 2: Systems and Application",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "music-history-301-l06-a1",
          "type": "practice",
          "title": "Review the Case Study",
          "content": "Re-read your research proposal for the museum exhibit. How did you handle trade-offs, select methods, and define success? This will prepare you for the quiz."
        }
      ],
      "questions": [
        {
          "id": "music-history-301-l06-q1",
          "text": "When analyzing Stravinsky's use of rhythm, which method would be most appropriate for demonstrating innovation?",
          "skillId": "music-history-301-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Schenkerian analysis, which focuses primarily on pitch structure."
            },
            {
              "id": "b",
              "text": "A metric analysis comparing his rhythmic patterns to those of his predecessors, like Debussy and Rimsky-Korsakov."
            },
            {
              "id": "c",
              "text": "A purely biographical approach focusing on his life in Paris."
            },
            {
              "id": "d",
              "text": "Ignoring rhythm and focusing only on his orchestration."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Method selection is crucial. A metric and comparative analysis is the most direct way to evaluate rhythmic innovation, which was a key feature of Stravinsky's style."
        },
        {
          "id": "music-history-301-l06-q2",
          "text": "You claim that Composer A influenced Composer B. What is the best 'leading indicator' to support this claim?",
          "skillId": "music-history-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Both composers were born in the same country."
            },
            {
              "id": "b",
              "text": "Composer B owned a copy of Composer A's score and used a unique harmonic progression from it in an early work."
            },
            {
              "id": "c",
              "text": "A music critic 50 years later said they sounded similar."
            },
            {
              "id": "d",
              "text": "Both composers wrote symphonies."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A leading indicator is a specific, early piece of evidence that signals a future trend. The presence of a unique musical idea from A in B's early work is strong, direct evidence of influence."
        },
        {
          "id": "music-history-301-l06-q3",
          "text": "A historian argues that Mozart was a revolutionary composer based only on his final three symphonies. This conclusion is most vulnerable to what type of error?",
          "skillId": "music-history-301-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Using a primary source."
            },
            {
              "id": "b",
              "text": "Confirmation bias by selecting only the evidence that supports the 'revolutionary' thesis and ignoring his earlier, more conventional works."
            },
            {
              "id": "c",
              "text": "Incorrectly identifying a C-major chord."
            },
            {
              "id": "d",
              "text": "Applying a valid analytical method."
            }
          ],
          "correctOptionId": "b",
          "explanation": "This is a classic example of confirmation bias (a type of interpretive error), where the researcher selects a narrow dataset that confirms their hypothesis and ignores contradictory evidence."
        },
        {
          "id": "music-history-301-l06-q4",
          "text": "Your research project on Renaissance polyphony is behind schedule and the analysis feels unfocused. What is the best first step to improve the system?",
          "skillId": "music-history-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Work longer hours and hope for the best."
            },
            {
              "id": "b",
              "text": "Pause, review the original research question and workflow, and identify the specific bottleneck that is causing the delay."
            },
            {
              "id": "c",
              "text": "Switch to a completely different topic."
            },
            {
              "id": "d",
              "text": "Blame the complexity of the music."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A systems approach to problem-solving involves diagnosing the root cause within the process (the workflow) rather than just treating the symptom (being behind schedule)."
        }
      ]
    }
  ]
};
