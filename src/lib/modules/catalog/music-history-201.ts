import type { LearningModule } from "@/lib/modules/types";

export const music_history_201_Module: LearningModule = {
  "id": "music-history-201",
  "title": "Music History: Applied Practice",
  "description": "A Level 201 curriculum in Music History, emphasizing the analysis of historical periods, cultural influences, and musical styles through critical listening and structured research methods.",
  "subject": "Music",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "arts",
    "history"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Accurately define and differentiate major musical periods (e.g., Baroque, Classical, Romantic).",
    "Apply structured research methods to analyze musical pieces and identify stylistic characteristics.",
    "Evaluate primary and secondary sources to understand the cultural context of music.",
    "Identify and avoid common errors in historical interpretation, such as anachronism.",
    "Articulate how social, technological, and economic factors influenced musical development.",
    "Develop a consistent methodology for forming and defending a historical argument."
  ],
  "lessons": [
    {
      "id": "music-history-201-l01",
      "title": "Foundations of Music History Analysis",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "music-history-201-l01-a1",
          "type": "image",
          "title": "Historical Timeline",
          "content": "Visualize a timeline of major musical periods. Note the overlapping years and consider why the boundaries are not always sharp."
        }
      ],
      "chunks": [
        {
          "id": "music-history-201-l01-c1",
          "kind": "concept",
          "title": "Defining Periods, Styles, and Key Terms",
          "content": "To study music history effectively, we need a shared vocabulary. We'll define the major historical periods (Baroque, Classical, Romantic, etc.) and discuss the key musical characteristics of each. This ensures that when we analyze a piece, we're all using the same framework to describe its style, form, and instrumentation, allowing for clear and accurate discussion."
        },
        {
          "id": "music-history-201-l01-c2",
          "kind": "concept",
          "title": "Cause and Effect in Musical Evolution",
          "content": "Music doesn't change in a vacuum. We'll explore the 'why' behind musical evolution, examining the social, technological, and political factors that influenced composers. By understanding the root causes—like the invention of a new instrument or a shift in audience tastes—we can gain a much deeper appreciation for why music sounds the way it does in different eras."
        },
        {
          "id": "music-history-201-l01-c3",
          "kind": "recap",
          "title": "Working with Historical Evidence",
          "content": "A historian's claims are only as strong as their evidence. We'll introduce the difference between primary sources (like a composer's original score) and secondary sources (like a biography). You'll learn the importance of citing your sources and building arguments based on verifiable facts, which is the foundation of trustworthy historical analysis."
        }
      ],
      "flashcards": [
        {
          "id": "music-history-201-l01-f1",
          "front": "Stylistic Analysis",
          "back": "The process of identifying the characteristic features of a musical piece (harmony, melody, rhythm, form) to place it within a historical and cultural context."
        },
        {
          "id": "music-history-201-l01-f2",
          "front": "Cultural Context",
          "back": "The social, political, economic, and technological environment that shapes the creation and reception of music in a particular time and place."
        },
        {
          "id": "music-history-201-l01-f3",
          "front": "Primary Source",
          "back": "An original, first-hand account or artifact from the historical period being studied, such as a musical score, a letter from a composer, or a concert review."
        }
      ]
    },
    {
      "id": "music-history-201-l02",
      "title": "A Historian's Workflow: From Question to Conclusion",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "music-history-201-l02-a1",
          "type": "image",
          "title": "Research Flowchart",
          "content": "Visualize the research process: Start with a question, gather evidence, analyze the evidence, form a conclusion, and review your argument."
        }
      ],
      "chunks": [
        {
          "id": "music-history-201-l02-c1",
          "kind": "practice",
          "title": "Building a Research Plan",
          "content": "In this interactive lab, you will create a research plan to answer a historical question. You'll start by identifying what you need to know (e.g., key composers, influential pieces) and where to find information. You'll set checkpoints to review your progress and define what a successful final analysis (your 'output') will look like. This structured approach prevents wasted effort and leads to stronger conclusions."
        },
        {
          "id": "music-history-201-l02-c2",
          "kind": "recap",
          "title": "Documenting Your Analysis",
          "content": "As you research, it's crucial to document your findings and thought process. For every piece of evidence you collect, you should note why it's important and how it supports your ideas. This 'research log' not only helps you build a stronger final argument but also allows you to retrace your steps and learn from your process on future projects."
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-history-201-l02-act1",
          "type": "matching_pairs",
          "title": "Event and Impact",
          "description": "Match the historical event to its most likely impact on music.",
          "pairs": [
            {
              "left": "Invention of the printing press",
              "right": "Wider distribution of sheet music to amateurs"
            },
            {
              "left": "Rise of the public concert hall",
              "right": "Composers write larger-scale symphonies"
            },
            {
              "left": "Invention of the valved trumpet",
              "right": "Orchestral brass sections can play more complex melodies"
            },
            {
              "left": "The Protestant Reformation",
              "right": "Development of the chorale and congregational singing"
            }
          ]
        },
        {
          "id": "music-history-201-l02-act2",
          "type": "sorting_buckets",
          "title": "Period Characteristics",
          "description": "Sort these musical characteristics into the correct historical period.",
          "buckets": [
            "Baroque",
            "Classical",
            "Romantic"
          ],
          "items": [
            {
              "text": "Use of Basso Continuo",
              "bucket": "Baroque"
            },
            {
              "text": "Clear, balanced phrases and form (e.g., sonata form)",
              "bucket": "Classical"
            },
            {
              "text": "Emphasis on emotional expression and individualism",
              "bucket": "Romantic"
            },
            {
              "text": "Highly ornate and decorated melodies",
              "bucket": "Baroque"
            }
          ]
        }
      ]
    },
    {
      "id": "music-history-201-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "music-history-201-l03-a1",
          "type": "practice",
          "title": "Review Your Reasoning",
          "content": "Before selecting an answer, briefly write down why you believe it is correct. This reinforces the concepts from the first two lessons."
        }
      ],
      "questions": [
        {
          "id": "music-history-201-l03-q1",
          "text": "When analyzing a newly discovered manuscript, what is the best first step?",
          "skillId": "music-history-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Assume it was written by a famous composer."
            },
            {
              "id": "b",
              "text": "Define criteria for analysis (e.g., harmony, form) and compare it to known styles."
            },
            {
              "id": "c",
              "text": "Immediately schedule a public performance."
            },
            {
              "id": "d",
              "text": "Decide you like it, so its origin doesn't matter."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A systematic approach using clear criteria ensures a reliable and defensible conclusion about the music's origin and style."
        },
        {
          "id": "music-history-201-l03-q2",
          "text": "What is the strongest indicator of a high-quality research process in music history?",
          "skillId": "music-history-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Finishing the research as quickly as possible."
            },
            {
              "id": "b",
              "text": "A research log showing clear steps, cited evidence, and a logical argument."
            },
            {
              "id": "c",
              "text": "Using only one secondary source for all information."
            },
            {
              "id": "d",
              "text": "A conclusion based only on the historian's personal feelings."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A quality process is transparent, repeatable, and based on verifiable evidence, as documented in a research log."
        },
        {
          "id": "music-history-201-l03-q3",
          "text": "When arguing that a composer was influenced by another, what is the most trustworthy practice?",
          "skillId": "music-history-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Ignore any evidence that contradicts your theory."
            },
            {
              "id": "b",
              "text": "Compare specific musical examples and cite letters or documents showing a connection."
            },
            {
              "id": "c",
              "text": "State that since the composers lived at the same time, they must have been influenced."
            },
            {
              "id": "d",
              "text": "Change your definition of 'influence' after seeing the evidence."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Strong historical arguments rely on specific, verifiable evidence from both musical and documentary sources."
        },
        {
          "id": "music-history-201-l03-q4",
          "text": "A mature approach to studying the music of a historical period should prioritize:",
          "skillId": "music-history-201-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Focusing only on the one most famous composer."
            },
            {
              "id": "b",
              "text": "A balanced understanding of the music, its cultural context, and its historical significance."
            },
            {
              "id": "c",
              "text": "Listening to the music without any historical context."
            },
            {
              "id": "d",
              "text": "Never reviewing or questioning initial conclusions."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A comprehensive understanding connects the music itself with the world in which it was created."
        }
      ]
    },
    {
      "id": "music-history-201-l04",
      "title": "Analytical Tools and Common Pitfalls",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "music-history-201-l04-a1",
          "type": "image",
          "title": "Analytical Lenses",
          "content": "Imagine looking at a piece of music through different lenses: one for harmony, one for form, and one for social context. Each lens reveals something new."
        }
      ],
      "chunks": [
        {
          "id": "music-history-201-l04-c1",
          "kind": "concept",
          "title": "Choosing Your Analytical Lens",
          "content": "There are many ways to analyze music. You could focus on the notes themselves (formal analysis), the composer's life (biographical analysis), or the society it came from (socio-cultural analysis). We'll explore these different 'lenses' and discuss how to choose the best one for your research question. The right tool helps you uncover the most relevant insights."
        },
        {
          "id": "music-history-201-l04-c2",
          "kind": "example",
          "title": "Tracking Musical Change Over Time",
          "content": "How can we measure the evolution from Classical to Romantic music? We can track specific musical 'metrics.' For example, we can observe the increasing use of chromaticism (leading indicator), which results in more emotionally intense music (lagging outcome). By tracking these changes systematically, we can pinpoint when and how stylistic shifts occurred."
        },
        {
          "id": "music-history-201-l04-c3",
          "kind": "recap",
          "title": "Avoiding Common Errors in Interpretation",
          "content": "Good historians are aware of common traps. We'll create a 'taxonomy of errors' including anachronism (judging the past by modern standards), oversimplification (ignoring complexity), and confirmation bias (only seeing evidence that supports your theory). By learning to recognize these pitfalls, you can make your own analysis more accurate and nuanced."
        }
      ],
      "flashcards": [
        {
          "id": "music-history-201-l04-f1",
          "front": "Formal Analysis",
          "back": "The study of a musical work's structure, including its melody, harmony, rhythm, and form, independent of its external context."
        },
        {
          "id": "music-history-201-l04-f2",
          "front": "Anachronism",
          "back": "A common historical error where ideas, terms, or values from the present are incorrectly applied to the past."
        },
        {
          "id": "music-history-201-l04-f3",
          "front": "Leitmotif",
          "back": "A recurring musical theme, associated with a particular person, place, or idea, often used as a tool for tracking narrative and dramatic development."
        }
      ]
    },
    {
      "id": "music-history-201-l05",
      "title": "Case Study: The Transition from Baroque to Classical",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "music-history-201-l05-a1",
          "type": "practice",
          "title": "Build Your Argument",
          "content": "Use the provided evidence to construct a short, structured argument. State your claim, provide two pieces of supporting evidence, and write a concluding sentence."
        }
      ],
      "chunks": [
        {
          "id": "music-history-201-l05-c1",
          "kind": "practice",
          "title": "Analyzing the Transition",
          "content": "In this interactive case study, we'll examine music from the mid-18th century, a time of great change. You'll be presented with musical excerpts and historical documents from composers like C.P.E. Bach. Your task is to analyze the evidence to identify both lingering Baroque traits and emerging Classical characteristics, understanding the trade-offs composers made."
        },
        {
          "id": "music-history-201-l05-c2",
          "kind": "recap",
          "title": "Formulating a Historical Argument",
          "content": "Based on your analysis, you will formulate a clear historical argument. Your proposal will state a thesis about the Baroque-Classical transition, define the criteria you used to judge the music, and outline the key evidence that supports your conclusion. This exercise hones your ability to turn raw analysis into a persuasive, evidence-based narrative."
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-history-201-l05-act1",
          "type": "scenario_practice",
          "title": "Classify a Transitional Piece",
          "description": "You are analyzing a keyboard sonata by C.P.E. Bach. Based on the evidence, argue whether it is best classified as late Baroque or early Classical.",
          "instructions": [
            "Define your criteria for 'Baroque' and 'Classical' before you begin.",
            "Document one musical feature that supports a 'Baroque' classification and one that supports a 'Classical' one.",
            "State your final conclusion and briefly justify your choice."
          ]
        },
        {
          "id": "music-history-201-l05-act2",
          "type": "matching_pairs",
          "title": "Style to Period Mapping",
          "description": "Connect the musical characteristic with its primary historical style.",
          "pairs": [
            {
              "left": "Terraced dynamics (abrupt shifts from loud to soft)",
              "right": "Baroque"
            },
            {
              "left": "Alberti bass accompaniment",
              "right": "Classical"
            },
            {
              "left": "Long, flowing, and complex melodic lines",
              "right": "Baroque"
            },
            {
              "left": "Symmetrical and balanced melodic phrases",
              "right": "Classical"
            }
          ]
        }
      ]
    },
    {
      "id": "music-history-201-l06",
      "title": "Checkpoint 2: Systems and Reasoning",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "music-history-201-l06-a1",
          "type": "practice",
          "title": "Justify Your Answer",
          "content": "For each question, identify the key analytical skill being tested (e.g., identifying bias, selecting evidence, forming a conclusion)."
        }
      ],
      "questions": [
        {
          "id": "music-history-201-l06-q1",
          "text": "When analyzing a symphony, which 'analytical lens' would be best for understanding its overall structure and key relationships?",
          "skillId": "music-history-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Biographical, focusing only on the composer's personal life."
            },
            {
              "id": "b",
              "text": "Formal, focusing on sonata form, thematic development, and key areas."
            },
            {
              "id": "c",
              "text": "Economic, focusing only on how much the composer was paid."
            },
            {
              "id": "d",
              "text": "Anachronistic, focusing on how it sounds like a modern film score."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Formal analysis is the tool specifically designed to understand the internal structure and logic of a musical work."
        },
        {
          "id": "music-history-201-l06-q2",
          "text": "A historian claims Beethoven's 5th Symphony is about 'fate knocking at the door' based only on a story told after his death. This conclusion is weak because it lacks:",
          "skillId": "music-history-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "A good story."
            },
            {
              "id": "b",
              "text": "Corroboration from a primary source, like a letter or note from Beethoven himself."
            },
            {
              "id": "c",
              "text": "A faster tempo."
            },
            {
              "id": "d",
              "text": "A more famous person to tell the story."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Historical claims are strongest when supported by primary sources from the period, rather than later anecdotes."
        },
        {
          "id": "music-history-201-l06-q3",
          "text": "Which of the following is an example of an anachronistic error in analysis?",
          "skillId": "music-history-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Analyzing the harmony of a Bach fugue."
            },
            {
              "id": "b",
              "text": "Criticizing a 16th-century composer for not using the complex harmonies of the Romantic era."
            },
            {
              "id": "c",
              "text": "Noting the influence of folk music on a Classical symphony."
            },
            {
              "id": "d",
              "text": "Comparing the orchestration of two composers from the same period."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Anachronism is the error of judging a past work by the standards and knowledge of a later period."
        },
        {
          "id": "music-history-201-l06-q4",
          "text": "A mature strategy for analyzing a complex historical period like the early 20th century should prioritize:",
          "skillId": "music-history-201-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Deciding on one 'correct' style and ignoring all others."
            },
            {
              "id": "b",
              "text": "Understanding the multiple, often conflicting, styles (e.g., Impressionism, Expressionism, Neoclassicism) that co-existed."
            },
            {
              "id": "c",
              "text": "Assuming all composers were trying to do the same thing."
            },
            {
              "id": "d",
              "text": "Focusing only on music written before the year 1900."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Mature historical analysis acknowledges and explores the complexity and diversity of a period, rather than oversimplifying it."
        }
      ]
    }
  ]
};
