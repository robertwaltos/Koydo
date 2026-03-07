import type { LearningModule } from "@/lib/modules/types";

export const reading_201_Module: LearningModule = {
  "id": "reading-201",
  "title": "Reading Comprehension and Argument Literacy II",
  "description": "Develop intermediate reading skills by learning to make inferences, analyze text structures, decode vocabulary, evaluate arguments, and support interpretations with evidence.",
  "subject": "Reading",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "literacy",
    "comprehension"
  ],
  "minAge": 9,
  "maxAge": 14,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Use textual evidence to justify literal and inferential comprehension answers",
    "Analyze text structure in narrative and informational passages",
    "Interpret vocabulary using context and morphology clues",
    "Identify claim, evidence, and reasoning quality in arguments",
    "Compare perspectives across multiple short texts",
    "Write concise evidence-supported reading responses"
  ],
  "lessons": [
    {
      "id": "reading-201-l01",
      "title": "Inference and Evidence Tracking",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "reading-201-l01-a1",
          "type": "practice",
          "title": "Inference Detective Worksheet",
          "content": "Use the provided short story to identify three inferences and highlight the textual evidence that supports each one."
        }
      ],
      "chunks": [
        {
          "id": "reading-201-l01-c1",
          "kind": "concept",
          "title": "What is an Inference?",
          "content": "An inference is like being a reading detective. You use clues from the text, combined with what you already know about the world, to figure out what the author doesn't say directly. It's reading between the lines to understand the full picture.",
          "visualPrompt": "An animation of a detective with a magnifying glass examining words in a book, with a thought bubble showing a lightbulb turning on."
        },
        {
          "id": "reading-201-l01-c2",
          "kind": "concept",
          "title": "Finding Strong Evidence",
          "content": "Not all clues are created equal! Strong evidence is specific and directly connected to your inference. It's a quote or detail you can point to that clearly supports your idea. Weak evidence is vague, off-topic, or doesn't really prove your point.",
          "visualPrompt": "A visual of a scale weighing a strong, specific quote (heavy side) against a weak, vague sentence (light side)."
        },
        {
          "id": "reading-201-l01-c3",
          "kind": "recap",
          "title": "Explaining Your Thinking",
          "content": "Finding evidence isn't the last step. You have to explain *how* that piece of evidence proves your inference is correct. This explanation builds a bridge between the author's words and your own conclusion, showing that your inference is based on the text.",
          "visualPrompt": "A simple diagram showing a bridge being built to connect an island labeled 'Your Inference' to an island labeled 'Text Evidence'."
        }
      ],
      "flashcards": [
        {
          "id": "reading-201-l01-f1",
          "front": "Inference",
          "back": "A conclusion drawn from textual clues plus what you already know."
        },
        {
          "id": "reading-201-l01-f2",
          "front": "Text Evidence",
          "back": "Specific words or passages from a text used to support an idea."
        },
        {
          "id": "reading-201-l01-f3",
          "front": "Relevant Evidence",
          "back": "Evidence that is directly connected to the question or claim."
        }
      ]
    },
    {
      "id": "reading-201-l02",
      "title": "Text Structure and Organization Lab",
      "type": "interactive",
      "duration": 14,
      "learningAids": [
        {
          "id": "reading-201-l02-a1",
          "type": "practice",
          "title": "Structure Scavenger Hunt",
          "content": "Read three short passages and identify the primary text structure for each, highlighting the signal words you find."
        }
      ],
      "chunks": [
        {
          "id": "reading-201-l02-c1",
          "kind": "concept",
          "title": "How Texts Are Built",
          "content": "Authors organize their writing in patterns called text structures. Knowing these patterns helps you predict what's coming and understand the main idea. Common structures include Sequence (in order), Cause and Effect (why it happened), Compare and Contrast (what's same/different), and Problem and Solution.",
          "visualPrompt": "Four simple icons: a numbered list for Sequence, a domino effect for Cause/Effect, a Venn diagram for Compare/Contrast, and a key fitting into a lock for Problem/Solution."
        },
        {
          "id": "reading-201-l02-c2",
          "kind": "concept",
          "title": "Spotting the Signs",
          "content": "Authors leave clues called signal words to show you which structure they are using. Words like 'first' or 'next' signal a sequence, while 'because' or 'as a result' signal a cause. These words are like road signs for your reading journey, guiding your understanding.",
          "visualPrompt": "An animation of a road sign with words like 'However,' 'Therefore,' and 'Next' appearing on it."
        },
        {
          "id": "reading-201-l02-c3",
          "kind": "concept",
          "title": "Why Structure Matters",
          "content": "Authors choose a structure to achieve a specific goal. A history text might use a sequence to explain events over time. A science article might use cause and effect to explain an experiment. Understanding the structure helps you understand the author's purpose.",
          "visualPrompt": "An icon of a blueprint next to an icon of a finished house, labeled 'Structure' and 'Author's Goal'."
        }
      ],
      "interactiveActivities": [
        {
          "id": "reading-201-l02-act1",
          "type": "matching_pairs",
          "title": "Structure Signal Match",
          "description": "Match the signal words to the text structure they indicate.",
          "pairs": [
            {
              "left": "because / therefore / as a result",
              "right": "Cause and Effect"
            },
            {
              "left": "first / next / finally / then",
              "right": "Sequence"
            },
            {
              "left": "similarly / however / on the other hand",
              "right": "Compare and Contrast"
            },
            {
              "left": "the issue is / one solution is",
              "right": "Problem and Solution"
            }
          ]
        },
        {
          "id": "reading-201-l02-act2",
          "type": "scenario_practice",
          "title": "Paragraph Blueprint Drill",
          "description": "Identify the structure of a short passage and justify your choice.",
          "instructions": [
            "Read the short paragraph.",
            "Identify its main text structure.",
            "Highlight the signal words that helped you decide."
          ]
        }
      ]
    },
    {
      "id": "reading-201-l03",
      "title": "Checkpoint 1: Inference and Structure",
      "type": "quiz",
      "duration": 10,
      "learningAids": [],
      "questions": [
        {
          "id": "reading-201-l03-q1",
          "text": "A strong inference must be supported by:",
          "skillId": "reading-201-skill-inference",
          "options": [
            {
              "id": "a",
              "text": "Your personal opinion only"
            },
            {
              "id": "b",
              "text": "Specific textual evidence and reasoning"
            },
            {
              "id": "c",
              "text": "Details from a different story"
            },
            {
              "id": "d",
              "text": "The title of the book"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A good inference is not a guess; it is a conclusion logically connected to evidence from the text."
        },
        {
          "id": "reading-201-l03-q2",
          "text": "Signal words like 'first', 'then', and 'finally' usually indicate which text structure?",
          "skillId": "reading-201-skill-structure",
          "options": [
            {
              "id": "a",
              "text": "Cause and Effect"
            },
            {
              "id": "b",
              "text": "Sequence"
            },
            {
              "id": "c",
              "text": "Compare and Contrast"
            },
            {
              "id": "d",
              "text": "Problem and Solution"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Words that show order or steps in a process point to a sequence structure."
        },
        {
          "id": "reading-201-l03-q3",
          "text": "The best evidence to support an idea from a text is typically:",
          "skillId": "reading-201-skill-evidence",
          "options": [
            {
              "id": "a",
              "text": "The longest quote you can find"
            },
            {
              "id": "b",
              "text": "The quote that is most directly relevant"
            },
            {
              "id": "c",
              "text": "The first sentence of the passage"
            },
            {
              "id": "d",
              "text": "Any word that is repeated often"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Relevance and precision matter more than the length of a quote. The best evidence directly supports your point."
        },
        {
          "id": "reading-201-l03-q4",
          "text": "When you explain your evidence, you should:",
          "skillId": "reading-201-skill-analysis",
          "options": [
            {
              "id": "a",
              "text": "Just restate the quote without any interpretation"
            },
            {
              "id": "b",
              "text": "Explain how the quote supports your claim or inference"
            },
            {
              "id": "c",
              "text": "Use examples that are not related to the text"
            },
            {
              "id": "d",
              "text": "Summarize the entire story"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The explanation is your reasoning. It connects the evidence to your main point."
        }
      ]
    },
    {
      "id": "reading-201-l04",
      "title": "Vocabulary in Context and Word Analysis",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "reading-201-l04-a1",
          "type": "practice",
          "title": "Word Detective Practice",
          "content": "For a list of challenging words, find their meaning using context clues from a passage, then break them down into prefix, root, and suffix."
        }
      ],
      "chunks": [
        {
          "id": "reading-201-l04-c1",
          "kind": "concept",
          "title": "Using Clues Around the Word",
          "content": "When you find a tricky word, look for context clues in the same sentence or nearby sentences. Authors often give hints like definitions, examples, synonyms (words with similar meanings), or antonyms (opposites) to help you figure out the meaning.",
          "visualPrompt": "An animation of a difficult word in a sentence, with surrounding words lighting up like puzzle pieces that fit together to reveal the meaning."
        },
        {
          "id": "reading-201-l04-c2",
          "kind": "concept",
          "title": "Breaking Words Apart",
          "content": "Many big words are built from smaller parts: prefixes (at the start), roots (the core), and suffixes (at the end). If you know 'un-' means 'not' and '-able' means 'can be done', you can figure out that 'unbreakable' means 'cannot be broken'.",
          "visualPrompt": "The word 'unbelievable' shown as three separate building blocks labeled 'un' (prefix), 'believe' (root), and 'able' (suffix) that click together."
        },
        {
          "id": "reading-201-l04-c3",
          "kind": "recap",
          "title": "Choosing the Best Meaning",
          "content": "A word can have several dictionary meanings. For example, 'run' can mean to move fast on your feet, or it can mean to operate a machine. You must use the context of the passage to decide which definition fits best in that specific sentence.",
          "visualPrompt": "A split screen showing two pictures: a person running and a running faucet. A sentence appears, and the correct picture is highlighted."
        }
      ],
      "flashcards": [
        {
          "id": "reading-201-l04-f1",
          "front": "Context Clue",
          "back": "A hint from the surrounding text that helps define a word."
        },
        {
          "id": "reading-201-l04-f2",
          "front": "Root Word",
          "back": "The core part of a word that holds the basic meaning."
        },
        {
          "id": "reading-201-l04-f3",
          "front": "Prefix",
          "back": "A word part added to the beginning of a root to change its meaning."
        },
        {
          "id": "reading-201-l04-f4",
          "front": "Suffix",
          "back": "A word part added to the end of a root to change its meaning."
        }
      ]
    },
    {
      "id": "reading-201-l05",
      "title": "Argument and Perspective Analysis Lab",
      "type": "interactive",
      "duration": 14,
      "learningAids": [
        {
          "id": "reading-201-l05-a1",
          "type": "practice",
          "title": "Argument Deconstruction",
          "content": "Read a short opinion article and identify the author's main claim, two pieces of evidence, and the reasoning that connects them."
        }
      ],
      "chunks": [
        {
          "id": "reading-201-l05-c1",
          "kind": "concept",
          "title": "The Three Parts of an Argument",
          "content": "A strong argument is like a three-legged stool. It needs a Claim (what the author believes), Evidence (the facts or proof), and Reasoning (the explanation that connects the evidence to the claim). If one leg is weak, the whole argument can fall over.",
          "visualPrompt": "An animation of a three-legged stool being built, with each leg labeled 'Claim', 'Evidence', and 'Reasoning'."
        },
        {
          "id": "reading-201-l05-c2",
          "kind": "concept",
          "title": "Types of Evidence",
          "content": "Authors use different kinds of evidence to support their claims. Look for facts, statistics (numbers), quotes from experts, or real-life examples. Be aware that evidence based only on a personal story (anecdote) or opinion may not be as strong.",
          "visualPrompt": "A collage of icons: a graph for statistics, a graduation cap for an expert, a speech bubble for a quote, and a person telling a story for an anecdote."
        },
        {
          "id": "reading-201-l05-c3",
          "kind": "recap",
          "title": "Seeing Different Viewpoints",
          "content": "Different authors can write about the same topic but have very different perspectives. When you read two texts, compare their claims and the evidence they choose. Ask yourself: why do they disagree? What information did each author include or leave out?",
          "visualPrompt": "A simple drawing of two people on opposite sides of a number on the ground. One sees a '6' while the other sees a '9'."
        }
      ],
      "interactiveActivities": [
        {
          "id": "reading-201-l05-act1",
          "type": "sorting_buckets",
          "title": "Argument Element Sort",
          "description": "Drag each statement into the correct bucket: Claim, Evidence, or Reasoning.",
          "buckets": [
            "Claim",
            "Evidence",
            "Reasoning"
          ],
          "items": [
            {
              "text": "Schools should start later in the morning.",
              "bucket": "Claim"
            },
            {
              "text": "A 2022 study found that teens got 30 more minutes of sleep.",
              "bucket": "Evidence"
            },
            {
              "text": "Getting enough sleep is crucial for a student's ability to focus in class.",
              "bucket": "Reasoning"
            },
            {
              "text": "According to Dr. Sleepwell, 'Later start times align with teen biology.'",
              "bucket": "Evidence"
            }
          ]
        },
        {
          "id": "reading-201-l05-act2",
          "type": "scenario_practice",
          "title": "Two-Text Comparison Drill",
          "description": "Compare the viewpoints in two short passages about year-round school.",
          "instructions": [
            "Read the two short passages about the same topic.",
            "What is the main claim in each passage?",
            "Identify one piece of evidence each author uses that the other does not."
          ]
        }
      ]
    },
    {
      "id": "reading-201-l06",
      "title": "Checkpoint 2: Vocabulary and Argument Literacy",
      "type": "quiz",
      "duration": 10,
      "learningAids": [],
      "questions": [
        {
          "id": "reading-201-l06-q1",
          "text": "What is the best first strategy for figuring out an unknown word in a passage?",
          "skillId": "reading-201-skill-vocab",
          "options": [
            {
              "id": "a",
              "text": "Skip the word and move on"
            },
            {
              "id": "b",
              "text": "Use surrounding context clues"
            },
            {
              "id": "c",
              "text": "Guess a random meaning"
            },
            {
              "id": "d",
              "text": "Look it up in a dictionary immediately"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Context clues are the most efficient first step, as they often provide the meaning without you having to stop reading."
        },
        {
          "id": "reading-201-l06-q2",
          "text": "In argument analysis, evidence is strongest when it is:",
          "skillId": "reading-201-skill-argument",
          "options": [
            {
              "id": "a",
              "text": "Based only on emotion"
            },
            {
              "id": "b",
              "text": "Relevant, credible, and specific"
            },
            {
              "id": "c",
              "text": "A claim that can't be proven"
            },
            {
              "id": "d",
              "text": "A personal story with no facts"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Strong evidence must be believable (credible), directly related to the claim (relevant), and detailed (specific)."
        },
        {
          "id": "reading-201-l06-q3",
          "text": "A text that uses signal words like 'similarly' and 'however' is likely using which structure?",
          "skillId": "reading-201-skill-structure",
          "options": [
            {
              "id": "a",
              "text": "Sequence"
            },
            {
              "id": "b",
              "text": "Compare and Contrast"
            },
            {
              "id": "c",
              "text": "Cause and Effect"
            },
            {
              "id": "d",
              "text": "Problem and Solution"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Words that show sameness ('similarly') and difference ('however') are key signals for the compare and contrast structure."
        },
        {
          "id": "reading-201-l06-q4",
          "text": "The most effective written response to a reading prompt includes:",
          "skillId": "reading-201-skill-writing",
          "options": [
            {
              "id": "a",
              "text": "A claim with no evidence"
            },
            {
              "id": "b",
              "text": "A claim, well-chosen evidence, and an explanation"
            },
            {
              "id": "c",
              "text": "Only a summary of the text"
            },
            {
              "id": "d",
              "text": "A list of quotes from the text"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A complete response needs a main idea (claim), proof (evidence), and the connection between them (explanation/reasoning)."
        }
      ]
    }
  ]
};
