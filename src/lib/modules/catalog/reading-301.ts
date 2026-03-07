import type { LearningModule } from "@/lib/modules/types";

export const reading_301_Module: LearningModule = {
  "id": "reading-301",
  "title": "Analytical Reading, Rhetoric, and Synthesis III",
  "description": "Advanced reading curriculum on rhetorical analysis, thematic synthesis, source comparison, and evidence-based interpretation of complex texts.",
  "subject": "Reading",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "rhetoric",
    "analysis",
    "literacy"
  ],
  "minAge": 13,
  "maxAge": 18,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Analyze rhetorical choices in argument and informational texts",
    "Evaluate source reliability, perspective, and potential bias",
    "Synthesize central ideas across multiple complex readings",
    "Interpret figurative language and tone shifts in literary passages",
    "Construct concise analytical responses with layered evidence",
    "Differentiate strong reasoning from logical fallacies"
  ],
  "lessons": [
    {
      "id": "reading-301-l01",
      "title": "Rhetorical Situation and Authorial Strategy",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "reading-301-l01-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson's analytical framework to a sample text and record your reasoning."
        }
      ],
      "chunks": [
        {
          "id": "reading-301-l01-c1",
          "kind": "concept",
          "title": "The Rhetorical Situation",
          "content": "To analyze any text, we first need to understand its rhetorical situation. This means asking key questions: Who is the author? Who are they trying to reach (the audience)? What is their goal (the purpose)? And what is the broader setting or conversation (the context)? Answering these helps you grasp the text's true meaning and intent.",
          "visualPrompt": "An animated graphic showing four interconnected icons: a person (Author), a group of people (Audience), a target (Purpose), and a calendar/globe (Context)."
        },
        {
          "id": "reading-301-l01-c2",
          "kind": "concept",
          "title": "Appeals and Structural Choices",
          "content": "Authors make deliberate choices to persuade you. They select specific evidence, use language that appeals to logic (logos), emotion (pathos), or their own credibility (ethos), and organize their ideas in a particular sequence. Recognizing these strategies reveals how the author is trying to influence your thinking.",
          "visualPrompt": "Three icons appearing side-by-side: a brain with gears (Logos), a heart (Pathos), and a graduation cap (Ethos)."
        },
        {
          "id": "reading-301-l01-c3",
          "kind": "recap",
          "title": "Evaluating Strategy",
          "content": "Analytical reading goes beyond just naming the strategies an author uses. The real work is in evaluating their effectiveness. Ask yourself: How well do these choices help the author achieve their purpose for their intended audience? A strong analysis always connects the 'what' (the strategy) to the 'why' (its intended effect).",
          "visualPrompt": "A simple animation of a magnifying glass scanning over a line of text, highlighting a phrase, and a thought bubble appearing with a checkmark."
        }
      ],
      "flashcards": [
        {
          "id": "reading-301-l01-f1",
          "front": "Rhetorical Situation",
          "back": "The framework of author, audience, purpose, and context surrounding a text."
        },
        {
          "id": "reading-301-l01-f2",
          "front": "Rhetorical Appeal",
          "back": "A persuasive strategy appealing to logic (logos), emotion (pathos), or credibility (ethos)."
        },
        {
          "id": "reading-301-l01-f3",
          "front": "Rhetorical Strategy",
          "back": "A specific, deliberate choice an author makes to achieve their purpose."
        }
      ]
    },
    {
      "id": "reading-301-l02",
      "title": "Source Quality and Bias Detection Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "reading-301-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the source evaluation checklist to two contrasting articles on the same topic."
        }
      ],
      "chunks": [
        {
          "id": "reading-301-l02-c1",
          "kind": "concept",
          "title": "Signals of Reliability",
          "content": "How can you tell if a source is trustworthy? Look for reliability signals. These include the author's expertise, transparency about evidence and methods, citations to other credible sources, and a clear editorial process. The more signals you find, the more you can trust the information.",
          "visualPrompt": "A checklist icon with items like 'Author Expertise,' 'Verifiable Evidence,' and 'Citations' being checked off."
        },
        {
          "id": "reading-301-l02-c2",
          "kind": "practice",
          "title": "Identifying Bias and Framing",
          "content": "No source is perfectly neutral. An author's perspective, or bias, shapes how information is presented through word choice, selective evidence, and framing. As a critical reader, your job is to identify this perspective, question the claims, and seek out other sources to get a more complete picture.",
          "visualPrompt": "An image of a picture frame around a scene, with the frame visibly cutting off important details on the periphery."
        }
      ],
      "interactiveActivities": [
        {
          "id": "reading-301-l02-act1",
          "type": "matching_pairs",
          "title": "Reliability Cue Match",
          "description": "Match source characteristics to their implications for credibility.",
          "pairs": [
            {
              "left": "Methods and data are disclosed",
              "right": "High potential for verification"
            },
            {
              "left": "Anonymous author",
              "right": "Low accountability"
            },
            {
              "left": "Corroborated by independent sources",
              "right": "Stronger confidence in claims"
            },
            {
              "left": "Relies on a single personal story",
              "right": "Weak generalizability"
            }
          ]
        },
        {
          "id": "reading-301-l02-act2",
          "type": "scenario_practice",
          "title": "Source Vetting Drill",
          "description": "For a given research question, rank several source options from most to least reliable.",
          "instructions": [
            "Identify the strongest source and justify your choice with at least two reliability signals.",
            "Identify the weakest source and explain its limitations."
          ]
        }
      ]
    },
    {
      "id": "reading-301-l03",
      "title": "Argumentation and Logical Fallacies",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "reading-301-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Analyze a short editorial for its core argument and any potential logical fallacies."
        }
      ],
      "chunks": [
        {
          "id": "reading-301-l03-c1",
          "kind": "concept",
          "title": "Elements of a Strong Argument",
          "content": "A strong argument is built on a solid foundation. It must have a clear and debatable Claim (the main point), supported by relevant and sufficient Evidence (the facts and data), and connected by sound Reasoning (the explanation of how the evidence proves the claim).",
          "visualPrompt": "An animation of a three-legged stool being built, with each leg labeled 'Claim,' 'Evidence,' and 'Reasoning'."
        },
        {
          "id": "reading-301-l03-c2",
          "kind": "concept",
          "title": "What is a Logical Fallacy?",
          "content": "A logical fallacy is a flaw in reasoning that weakens or invalidates an argument. It's a trick or illusion of thought, often used to persuade when evidence is lacking. Learning to spot fallacies is a key skill for thinking critically about the information you encounter every day.",
          "visualPrompt": "An icon of a chain with a glowing, broken link in the middle."
        },
        {
          "id": "reading-301-l03-c3",
          "kind": "practice",
          "title": "Common Fallacies to Spot",
          "content": "Keep an eye out for common fallacies like 'Ad Hominem' (attacking the person, not the idea), 'Straw Man' (misrepresenting an opponent's argument to make it easier to attack), and 'Slippery Slope' (claiming a small first step will inevitably lead to a disastrous outcome).",
          "visualPrompt": "A rotating carousel of simple icons: a person pointing an accusing finger at another (Ad Hominem), a scarecrow (Straw Man), and a stick figure sliding down a steep slope (Slippery Slope)."
        }
      ],
      "flashcards": [
        {
          "id": "reading-301-l03-f1",
          "front": "Claim",
          "back": "The main point or thesis of an argument that needs to be supported by evidence."
        },
        {
          "id": "reading-301-l03-f2",
          "front": "Logical Fallacy",
          "back": "A flaw in reasoning that makes an argument invalid, unsound, or weak."
        },
        {
          "id": "reading-301-l03-f3",
          "front": "Straw Man Fallacy",
          "back": "Misrepresenting someone's argument to make it easier to attack."
        }
      ],
      "interactiveActivities": [
        {
          "id": "reading-301-l03-act1",
          "type": "multiple_choice_text",
          "title": "Fallacy Finder",
          "description": "Read the short arguments and identify the logical fallacy used in each.",
          "prompts": [
            {
              "id": "p1",
              "text": "'You can't trust Dr. Smith's research on climate change; I heard she's not very nice to her neighbors.' What fallacy is this?",
              "options": [
                "Slippery Slope",
                "Ad Hominem",
                "Straw Man"
              ],
              "correctOption": "Ad Hominem"
            },
            {
              "id": "p2",
              "text": "'My opponent wants to cut funding for this one military program. Clearly, he wants to leave our country completely defenseless.' What fallacy is this?",
              "options": [
                "Straw Man",
                "Ad Hominem",
                "Appeal to Authority"
              ],
              "correctOption": "Straw Man"
            }
          ]
        }
      ]
    },
    {
      "id": "reading-301-l04",
      "title": "Checkpoint 1: Rhetoric, Sources, and Argument",
      "type": "quiz",
      "duration": 10,
      "learningAids": [],
      "questions": [
        {
          "id": "reading-301-l04-q1",
          "text": "Why is analyzing the intended audience crucial for understanding an author's rhetorical strategy?",
          "skillId": "reading-301-skill-rhetoric",
          "options": [
            {
              "id": "a",
              "text": "The audience has no real influence on the author's choices."
            },
            {
              "id": "b",
              "text": "An author's choices about tone, evidence, and appeals are shaped by who they are trying to persuade."
            },
            {
              "id": "c",
              "text": "Only the author's personal biography matters for analysis."
            },
            {
              "id": "d",
              "text": "Audience analysis is only important for fictional stories."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Effective persuasion is always tailored to the specific audience's beliefs, values, and knowledge."
        },
        {
          "id": "reading-301-l04-q2",
          "text": "Which of the following is the strongest signal of a source's reliability?",
          "skillId": "reading-301-skill-sources",
          "options": [
            {
              "id": "a",
              "text": "An emotionally charged headline"
            },
            {
              "id": "b",
              "text": "Transparent methodology and verifiable evidence"
            },
            {
              "id": "c",
              "text": "Claims made by an anonymous author"
            },
            {
              "id": "d",
              "text": "A professional-looking website design"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Transparency allows readers to independently verify the information and assess the quality of the research."
        },
        {
          "id": "reading-301-l04-q3",
          "text": "A framing bias often occurs when an author:",
          "skillId": "reading-301-skill-bias",
          "options": [
            {
              "id": "a",
              "text": "Presents multiple competing perspectives fairly"
            },
            {
              "id": "b",
              "text": "Selectively presents evidence that supports only one viewpoint"
            },
            {
              "id": "c",
              "text": "Clearly defines key terms used in the text"
            },
            {
              "id": "d",
              "text": "Cites several independent, peer-reviewed studies"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Bias is often revealed through the strategic omission of counter-evidence or alternative views."
        },
        {
          "id": "reading-301-l04-q4",
          "text": "Identifying logical fallacies is a critical skill because it helps a reader:",
          "skillId": "reading-301-skill-argument",
          "options": [
            {
              "id": "a",
              "text": "Make an argument more emotional and persuasive"
            },
            {
              "id": "b",
              "text": "Better evaluate the quality and soundness of an argument's reasoning"
            },
            {
              "id": "c",
              "text": "Eliminate the need for evidence when making a claim"
            },
            {
              "id": "d",
              "text": "Understand the author's personal life"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Fallacy awareness is fundamental to distinguishing strong, logical arguments from weak, manipulative ones."
        }
      ]
    },
    {
      "id": "reading-301-l05",
      "title": "Literary Analysis: Tone, Symbol, and Theme",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "reading-301-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Analyze a short literary passage, identifying shifts in tone and tracking a central motif to develop a theme statement."
        }
      ],
      "chunks": [
        {
          "id": "reading-301-l05-c1",
          "kind": "concept",
          "title": "Decoding Tone and Voice",
          "content": "Tone is the author's attitude toward the subject, revealed through word choice (diction), sentence structure (syntax), and imagery. A shift in tone—from sarcastic to sincere, or from joyful to somber—is often a clue that something important is happening in the story or poem.",
          "visualPrompt": "A series of emoji faces transitioning from happy to sad to angry, with the words 'Diction' and 'Syntax' underneath."
        },
        {
          "id": "reading-301-l05-c2",
          "kind": "concept",
          "title": "Tracking Symbols and Motifs",
          "content": "Symbols are objects or images that represent a larger idea, while motifs are recurring symbols or ideas that develop over the course of a text. Tracking how a motif—like the color green or the image of a clock—changes or appears in different contexts can unlock the story's deeper meaning.",
          "visualPrompt": "An animation of a book opening, with a small key icon appearing on several different pages, each time glowing slightly brighter."
        },
        {
          "id": "reading-301-l05-c3",
          "kind": "recap",
          "title": "Developing a Theme",
          "content": "A theme is not just a single word like 'love' or 'death.' It's a complete, interpretive statement about that topic that is supported by evidence from the text. For example, instead of 'love,' a theme might be: 'The text suggests that true love requires sacrifice.' Always phrase your theme as an argument the text is making about the world.",
          "visualPrompt": "A simple equation graphic: 'Motif + Tone + Conflict = Theme Statement'."
        }
      ],
      "flashcards": [
        {
          "id": "reading-301-l05-f1",
          "front": "Tone",
          "back": "The author's or speaker's attitude toward a subject, conveyed through language choices."
        },
        {
          "id": "reading-301-l05-f2",
          "front": "Motif",
          "back": "A recurring element, image, or idea in a literary work that helps develop a theme."
        },
        {
          "id": "reading-301-l05-f3",
          "front": "Theme",
          "back": "A central, evidence-based message or insight about life or human nature that a text explores."
        }
      ]
    },
    {
      "id": "reading-301-l06",
      "title": "Multi-Text Synthesis and Reasoning Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "reading-301-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson's framework to write a paragraph synthesizing three short sources on a single topic."
        }
      ],
      "chunks": [
        {
          "id": "reading-301-l06-c1",
          "kind": "practice",
          "title": "Finding the Conversation",
          "content": "Synthesizing means putting multiple texts into conversation with each other. Your job is to identify the relationships between them. Where do the sources agree or corroborate each other? Where do they disagree or offer conflicting evidence? Where does one source qualify or add nuance to another's point?",
          "visualPrompt": "A Venn diagram with three overlapping circles labeled 'Source A,' 'Source B,' and 'Source C,' showing areas of agreement and uniqueness."
        },
        {
          "id": "reading-301-l06-c2",
          "kind": "recap",
          "title": "Building a Synthesis Claim",
          "content": "A strong synthesis is not a series of separate summaries. It's a new argument you create using the sources as your evidence. Your central claim should be your own insight about the topic, explaining the significance of the relationships you found between the texts. You are adding to the conversation, not just reporting on it.",
          "visualPrompt": "An animation showing puzzle pieces from different sources coming together to form a new, complete picture."
        }
      ],
      "interactiveActivities": [
        {
          "id": "reading-301-l06-act1",
          "type": "sorting_buckets",
          "title": "Synthesis Move Sort",
          "description": "Categorize each statement based on the type of relationship it describes between sources.",
          "buckets": [
            "Agreement",
            "Contrast",
            "Qualification"
          ],
          "items": [
            {
              "text": "Both authors cite similar trend data to support their claims.",
              "bucket": "Agreement"
            },
            {
              "text": "Source B directly challenges the core assumptions made in Source A.",
              "bucket": "Contrast"
            },
            {
              "text": "Source C supports Source A's conclusion, but only in the limited context of urban environments.",
              "bucket": "Qualification"
            },
            {
              "text": "While both studies examine student outcomes, they differ significantly in their sampling methods.",
              "bucket": "Contrast"
            }
          ]
        },
        {
          "id": "reading-301-l06-act2",
          "type": "scenario_practice",
          "title": "Synthesis Paragraph Builder",
          "description": "Draft a concise synthesis claim and supporting sentences using three provided source snippets.",
          "instructions": [
            "State one central claim that connects all three sources.",
            "Cite at least two specific relationships (e.g., agreement, contrast) between the sources in your supporting sentences."
          ]
        }
      ]
    },
    {
      "id": "reading-301-l07",
      "title": "Checkpoint 2: Literary and Synthesis Analysis",
      "type": "quiz",
      "duration": 11,
      "learningAids": [],
      "questions": [
        {
          "id": "reading-301-l07-q1",
          "text": "A valid theme statement for a literary work should be:",
          "skillId": "reading-301-skill-literary",
          "options": [
            {
              "id": "a",
              "text": "A single-word topic like 'Friendship'"
            },
            {
              "id": "b",
              "text": "An interpretive claim about a topic, supported by textual evidence"
            },
            {
              "id": "c",
              "text": "A detailed summary of the plot"
            },
            {
              "id": "d",
              "text": "A list of the main characters"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Themes are complete, evidence-based arguments about a topic, not just the topic itself."
        },
        {
          "id": "reading-301-l07-q2",
          "text": "The primary goal of synthesis writing is to:",
          "skillId": "reading-301-skill-synthesis",
          "options": [
            {
              "id": "a",
              "text": "Summarize each source separately in a list"
            },
            {
              "id": "b",
              "text": "Explain the relationships of agreement, contrast, and nuance between sources"
            },
            {
              "id": "c",
              "text": "Choose the single best source and ignore the others"
            },
            {
              "id": "d",
              "text": "Prove that all the sources are biased"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Synthesis requires integrating sources by analyzing how they interact and speak to one another."
        },
        {
          "id": "reading-301-l07-q3",
          "text": "Tracking a recurring motif is most useful for helping a reader:",
          "skillId": "reading-301-skill-literary",
          "options": [
            {
              "id": "a",
              "text": "Understand the author's biography"
            },
            {
              "id": "b",
              "text": "Count the number of pages in the book"
            },
            {
              "id": "c",
              "text": "Develop a deeper interpretation of the text's central themes"
            },
            {
              "id": "d",
              "text": "Memorize the plot sequence"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Motifs are building blocks of theme; their repetition and development signal what the text deems important."
        },
        {
          "id": "reading-301-l07-q4",
          "text": "The most effective rhetorical analysis explains:",
          "skillId": "reading-301-skill-rhetoric",
          "options": [
            {
              "id": "a",
              "text": "Only the names of the techniques used"
            },
            {
              "id": "b",
              "text": "How an author's strategic choices work to influence the audience and achieve a purpose"
            },
            {
              "id": "c",
              "text": "Only the author's life story"
            },
            {
              "id": "d",
              "text": "Only the length of the text"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Analysis must connect the strategy (the 'how') to its function and effect on the audience (the 'why')."
        }
      ]
    }
  ]
};
