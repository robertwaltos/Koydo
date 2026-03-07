import type { LearningModule } from "@/lib/modules/types";

export const language_arts_101_Module: LearningModule = {
  "id": "language-arts-101",
  "title": "Language Arts Foundations",
  "description": "Build essential reading, writing, and comprehension skills through fun, interactive lessons.",
  "subject": "Language Arts",
  "tags": [
    "reading",
    "writing",
    "comprehension",
    "core"
  ],
  "minAge": 7,
  "maxAge": 14,
  "version": "1.1.0",
  "learningObjectives": [
    "Identify the main idea and supporting details in a text.",
    "Use context clues to define unfamiliar words.",
    "Write well-structured paragraphs with a topic sentence, supporting details, and a conclusion.",
    "Identify and analyze story elements: character, setting, plot, conflict, and theme.",
    "Apply grammar and punctuation rules to write clear sentences.",
    "Provide and use constructive feedback to revise writing."
  ],
  "lessons": [
    {
      "id": "language-arts-101-l01",
      "title": "Reading for the Main Idea",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Distinguish the main idea from supporting details.",
        "Summarize a paragraph in one sentence."
      ],
      "chunks": [
        {
          "id": "language-arts-101-l01-c1",
          "title": "What Is the Main Idea?",
          "kind": "intro",
          "content": "The main idea is the big point the author wants you to know. It answers the question: 'What is this story or paragraph mostly about?' Everything else you read, like facts and examples, are called supporting details. Think of them as clues that help explain the main idea and make it easier to understand. Finding the main idea helps you remember what you read and become a stronger reader."
        },
        {
          "id": "language-arts-101-l01-c2",
          "title": "How to Find the Main Idea",
          "kind": "concept",
          "content": "To find the main idea, look for a sentence that tells you what the whole paragraph is about. This is called the topic sentence, and it's often the first or last sentence. Sometimes, the main idea isn't stated in one sentence. In that case, you have to be a detective! Read all the details and ask yourself, 'What is the one thing all these details are talking about?' That will be your main idea."
        },
        {
          "id": "language-arts-101-l01-c3",
          "title": "Example: Honeybees",
          "kind": "example",
          "content": "Let's look at this paragraph: 'Honeybees are super important for farming. They help pollinate about one-third of the food we eat, including apples, almonds, and blueberries. Without bees, many of our favorite foods wouldn't be able to grow.' The main idea is the first sentence: 'Honeybees are super important for farming.' The other sentences are supporting details because they give examples of how bees help us."
        },
        {
          "id": "language-arts-101-l01-c4",
          "title": "Practice Finding the Main Idea",
          "kind": "practice",
          "content": "Now it's your turn! Find a short paragraph in a book or online article. Read it carefully. Can you find the topic sentence that states the main idea? Underline it. Then, find two supporting details that prove the main idea is true. This practice will make you an expert at understanding what you read."
        }
      ],
      "flashcards": [
        {
          "id": "language-arts-101-l01-f1",
          "front": "What is a main idea?",
          "back": "The most important point of a text; what it's mostly about."
        },
        {
          "id": "language-arts-101-l01-f2",
          "front": "What is a supporting detail?",
          "back": "A fact, example, or description that explains or proves the main idea."
        },
        {
          "id": "language-arts-101-l01-f3",
          "front": "Where is the main idea often found?",
          "back": "In the first or last sentence of a paragraph (the topic sentence)."
        }
      ],
      "learningAids": [
        {
          "id": "language-arts-101-l01-a1",
          "type": "image",
          "title": "Main Idea Umbrella",
          "content": "A visual diagram showing a main idea as a big umbrella protecting three supporting details (raindrops) underneath it."
        },
        {
          "id": "language-arts-101-l01-a2",
          "type": "animation",
          "title": "Highlight the Main Idea",
          "content": "An animation shows a paragraph being read. The topic sentence glows, and then the supporting details are highlighted in a different color to show how they connect."
        }
      ]
    },
    {
      "id": "language-arts-101-l02",
      "title": "Be a Word Detective: Context Clues",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Use four types of context clues to determine word meaning.",
        "Build vocabulary while reading."
      ],
      "chunks": [
        {
          "id": "language-arts-101-l02-c1",
          "title": "What Are Context Clues?",
          "kind": "concept",
          "content": "Have you ever found a word you don't know while reading? Don't worry! You can be a word detective. Context clues are hints in the sentences around a new word that help you figure out its meaning. There are four main types of clues: Definition (the meaning is given), Example (examples of the word are listed), Contrast (the word's opposite is mentioned), and Inference (you use story clues to make a smart guess)."
        },
        {
          "id": "language-arts-101-l02-c2",
          "title": "Look for Signal Words",
          "kind": "concept",
          "content": "Signal words can point you to the right clue! For a Definition clue, look for words like 'means' or 'is'. For an Example clue, you might see 'such as' or 'for instance'. For a Contrast clue, watch for 'but', 'unlike', or 'however'. Learning to spot these signals makes finding the meaning much faster and easier."
        }
      ],
      "interactiveActivities": [
        {
          "id": "language-arts-101-l02-ia1",
          "type": "sorting_buckets",
          "title": "What's the Clue?",
          "description": "Drag each sentence to the bucket that matches its context clue type.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "definition",
                "label": "Definition Clue"
              },
              {
                "id": "example",
                "label": "Example Clue"
              },
              {
                "id": "contrast",
                "label": "Contrast Clue"
              },
              {
                "id": "inference",
                "label": "Inference Clue"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "The desert is arid, or very dry, with little rain.",
                "correctBucketId": "definition"
              },
              {
                "id": "i2",
                "label": "She felt elated, unlike her brother, who was sad.",
                "correctBucketId": "contrast"
              },
              {
                "id": "i3",
                "label": "Nocturnal animals, such as owls and bats, are active at night.",
                "correctBucketId": "example"
              },
              {
                "id": "i4",
                "label": "The room was in disarray—clothes on the floor and books piled high.",
                "correctBucketId": "inference"
              },
              {
                "id": "i5",
                "label": "A habitat is the natural home where a plant or animal lives.",
                "correctBucketId": "definition"
              },
              {
                "id": "i6",
                "label": "Reptiles, for instance snakes and lizards, are cold-blooded.",
                "correctBucketId": "example"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "language-arts-101-l02-a1",
          "type": "image",
          "title": "Context Clue Detective Kit",
          "content": "A graphic showing a magnifying glass over a book. Four icons are shown: a dictionary (Definition), a list (Example), opposite arrows (Contrast), and a lightbulb (Inference)."
        }
      ]
    },
    {
      "id": "language-arts-101-l03",
      "title": "Checkpoint: Reading Skills",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "language-arts-101-l03-q1",
          "text": "Read: 'Many animals migrate to survive the winter. For example, birds fly south for warmer weather, and whales travel to tropical waters.' What is the main idea?",
          "options": [
            {
              "id": "a",
              "text": "Birds fly south in winter."
            },
            {
              "id": "b",
              "text": "Many animals migrate to survive the winter."
            },
            {
              "id": "c",
              "text": "Whales travel to tropical waters."
            },
            {
              "id": "d",
              "text": "Winter is cold."
            }
          ],
          "correctOptionId": "b",
          "explanation": "The first sentence states the main idea. The other sentences are supporting details that give specific examples of animal migration."
        },
        {
          "id": "language-arts-101-l03-q2",
          "text": "In the sentence 'The garrulous parrot never stopped talking,' what does 'garrulous' most likely mean?",
          "options": [
            {
              "id": "a",
              "text": "Colorful"
            },
            {
              "id": "b",
              "text": "Quiet"
            },
            {
              "id": "c",
              "text": "Very talkative"
            },
            {
              "id": "d",
              "text": "Sleepy"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The clue 'never stopped talking' helps you infer that garrulous means very talkative."
        },
        {
          "id": "language-arts-101-l03-q3",
          "text": "Which is a supporting detail, NOT a main idea?",
          "options": [
            {
              "id": "a",
              "text": "Exercise is important for good health."
            },
            {
              "id": "b",
              "text": "Running for 20 minutes strengthens the heart."
            },
            {
              "id": "c",
              "text": "Eating well helps your body function properly."
            },
            {
              "id": "d",
              "text": "Getting enough sleep is essential for recovery."
            }
          ],
          "correctOptionId": "b",
          "explanation": "'Running for 20 minutes' is a specific detail about one type of exercise. The other options are broad claims that could be main ideas."
        },
        {
          "id": "language-arts-101-l03-q4",
          "text": "Which signal words point to a contrast clue?",
          "options": [
            {
              "id": "a",
              "text": "such as, for example"
            },
            {
              "id": "b",
              "text": "means, is, or"
            },
            {
              "id": "c",
              "text": "but, however, unlike"
            },
            {
              "id": "d",
              "text": "because, so, therefore"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Words like 'but,' 'however,' and 'unlike' show an opposite or different idea, which is a contrast clue."
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "feedbackMode": "after_submit",
        "masteryThreshold": 0.75
      }
    },
    {
      "id": "language-arts-101-l04",
      "title": "Writing Strong Sentences",
      "type": "video",
      "duration": 11,
      "objectives": [
        "Write complete sentences with a subject and predicate.",
        "Use different sentence types to make writing more interesting."
      ],
      "chunks": [
        {
          "id": "language-arts-101-l04-c1",
          "title": "The Parts of a Sentence",
          "kind": "intro",
          "content": "Every complete sentence needs two parts. The first part is the subject, which is the 'who' or 'what' the sentence is about. The second part is the predicate, which tells what the subject 'did'. For example, in 'The cat napped,' the subject is 'The cat' (who) and the predicate is 'napped' (did what). If a sentence is missing one of these parts, it's called a fragment."
        },
        {
          "id": "language-arts-101-l04-c2",
          "title": "Sentence Types",
          "kind": "concept",
          "content": "You can make your writing more exciting by using different types of sentences. A simple sentence has one main thought, like 'The dog barked.' A compound sentence joins two simple sentences with a word like 'and' or 'but,' like 'The dog barked, and the cat hid.' A complex sentence has a main thought and a smaller thought that adds information, like 'When the dog barked, the cat hid.'"
        },
        {
          "id": "language-arts-101-l04-c3",
          "title": "Avoiding Common Mistakes",
          "kind": "concept",
          "content": "Two common mistakes are fragments and run-on sentences. A fragment is an incomplete thought, like 'Running in the park.' A run-on sentence squishes two or more thoughts together without the right punctuation, like 'I like ice cream it is my favorite.' You can fix a run-on by adding a period: 'I like ice cream. It is my favorite.'"
        }
      ],
      "flashcards": [
        {
          "id": "language-arts-101-l04-f1",
          "front": "What are the two parts of a complete sentence?",
          "back": "A subject (who or what) and a predicate (what the subject does or is)."
        },
        {
          "id": "language-arts-101-l04-f2",
          "front": "What is a run-on sentence?",
          "back": "Two or more complete sentences joined together without correct punctuation."
        },
        {
          "id": "language-arts-101-l04-f3",
          "front": "What is a fragment?",
          "back": "An incomplete thought that is missing a subject, a predicate, or both."
        }
      ],
      "learningAids": [
        {
          "id": "language-arts-101-l04-a1",
          "type": "image",
          "title": "Sentence Building Blocks",
          "content": "A visual chart showing a simple sentence as one block, a compound sentence as two blocks joined by a connector, and a complex sentence as one big block with a smaller one attached."
        }
      ]
    },
    {
      "id": "language-arts-101-l05",
      "title": "Building Perfect Paragraphs",
      "type": "interactive",
      "duration": 13,
      "objectives": [
        "Write a paragraph with a topic sentence, supporting details, and a concluding sentence.",
        "Organize ideas in a logical order."
      ],
      "chunks": [
        {
          "id": "language-arts-101-l05-c1",
          "title": "The Paragraph Sandwich",
          "kind": "concept",
          "content": "Think of a paragraph like a sandwich! The top bun is your topic sentence—it tells the reader the main idea. The fillings are your supporting details—these are the facts and examples that make your paragraph interesting. The bottom bun is your concluding sentence—it wraps everything up. Every good paragraph needs all three parts to be complete and delicious!"
        },
        {
          "id": "language-arts-101-l05-c2",
          "title": "Using Transition Words",
          "kind": "concept",
          "content": "Transition words are like bridges that connect your ideas and help your reader follow along. Words like 'First,' 'Next,' and 'Finally' help you put things in order. Words like 'For example' introduce a detail, and 'In conclusion' signals that you are wrapping up. Using these words makes your writing flow smoothly."
        }
      ],
      "interactiveActivities": [
        {
          "id": "language-arts-101-l05-ia1",
          "type": "drag_and_drop",
          "title": "Build a Paragraph Sandwich",
          "description": "Drag each sentence to its correct place in the paragraph sandwich.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "targets": [
              {
                "id": "topic",
                "label": "Top Bun (Topic Sentence)"
              },
              {
                "id": "detail1",
                "label": "Filling (Supporting Detail 1)"
              },
              {
                "id": "detail2",
                "label": "Filling (Supporting Detail 2)"
              },
              {
                "id": "conclusion",
                "label": "Bottom Bun (Concluding Sentence)"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "In conclusion, reading every day is a great way to build a stronger mind.",
                "correctTargetId": "conclusion"
              },
              {
                "id": "d2",
                "label": "Reading every day is one of the best habits you can develop.",
                "correctTargetId": "topic"
              },
              {
                "id": "d3",
                "label": "First, it helps improve your focus and concentration.",
                "correctTargetId": "detail1"
              },
              {
                "id": "d4",
                "label": "Also, it exposes you to new words and ideas, which grows your vocabulary.",
                "correctTargetId": "detail2"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "language-arts-101-l05-a1",
          "type": "image",
          "title": "The Paragraph Sandwich",
          "content": "A cartoon drawing of a sandwich. The top bun is labeled 'Topic Sentence,' the lettuce and tomato are 'Supporting Details,' and the bottom bun is 'Concluding Sentence.'"
        }
      ]
    },
    {
      "id": "language-arts-101-l06",
      "title": "Checkpoint: Writing Skills",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "language-arts-101-l06-q1",
          "text": "Which of these is a sentence fragment?",
          "options": [
            {
              "id": "a",
              "text": "The cat slept."
            },
            {
              "id": "b",
              "text": "Running through the park."
            },
            {
              "id": "c",
              "text": "She finished her homework."
            },
            {
              "id": "d",
              "text": "The storm passed, and the sky cleared."
            }
          ],
          "correctOptionId": "b",
          "explanation": "'Running through the park' is a fragment because it is missing a subject (who was running?)."
        },
        {
          "id": "language-arts-101-l06-q2",
          "text": "What is the job of a topic sentence?",
          "options": [
            {
              "id": "a",
              "text": "To give a fun fact."
            },
            {
              "id": "b",
              "text": "To state the main idea of the paragraph."
            },
            {
              "id": "c",
              "text": "To end the paragraph."
            },
            {
              "id": "d",
              "text": "To ask a question."
            }
          ],
          "correctOptionId": "b",
          "explanation": "The topic sentence introduces the main idea that the rest of the paragraph will be about."
        },
        {
          "id": "language-arts-101-l06-q3",
          "text": "Which of these is a compound sentence?",
          "options": [
            {
              "id": "a",
              "text": "The bird sang a song."
            },
            {
              "id": "b",
              "text": "Because it was cold, she wore a jacket."
            },
            {
              "id": "c",
              "text": "The bird sang, and the squirrel listened."
            },
            {
              "id": "d",
              "text": "She wore a warm jacket."
            }
          ],
          "correctOptionId": "c",
          "explanation": "A compound sentence joins two complete thoughts ('The bird sang' and 'the squirrel listened') with a conjunction like 'and'."
        },
        {
          "id": "language-arts-101-l06-q4",
          "text": "Which transition word is best for starting your last supporting detail?",
          "options": [
            {
              "id": "a",
              "text": "First"
            },
            {
              "id": "b",
              "text": "However"
            },
            {
              "id": "c",
              "text": "For example"
            },
            {
              "id": "d",
              "text": "Finally"
            }
          ],
          "correctOptionId": "d",
          "explanation": "'Finally' is a signal word that tells the reader you are presenting your last point before the conclusion."
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "feedbackMode": "after_submit",
        "masteryThreshold": 0.75
      }
    },
    {
      "id": "language-arts-101-l07",
      "title": "Unpacking a Story",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Identify characters, setting, plot, conflict, and theme in a story.",
        "Explain the difference between a story's topic and its theme."
      ],
      "chunks": [
        {
          "id": "language-arts-101-l07-c1",
          "title": "The Five Story Elements",
          "kind": "concept",
          "content": "Every story is made of five key ingredients. Characters are the people or animals in the story. Setting is the 'where' and 'when' the story happens. Plot is the sequence of events—what happens from beginning to end. Conflict is the problem or challenge the characters face. And Theme is the big message or lesson the story teaches us."
        },
        {
          "id": "language-arts-101-l07-c2",
          "title": "The Plot Rollercoaster",
          "kind": "concept",
          "content": "The plot of a story is like a rollercoaster ride. It starts with the exposition, where we meet the characters. Then comes the rising action, where the problem gets bigger and things get exciting. The climax is the top of the hill—the most exciting part! After that is the falling action, where things start to calm down. Finally, the resolution is the end of the ride, where the problem is solved."
        },
        {
          "id": "language-arts-101-l07-c3",
          "title": "Theme vs. Topic",
          "kind": "concept",
          "content": "It's easy to mix up theme and topic. A topic is one word, like 'friendship' or 'courage.' The theme is the message about that topic, and it's a full sentence. For a story with the topic 'friendship,' the theme might be 'True friends help each other in tough times.' The theme is the lesson you can use in your own life."
        }
      ],
      "flashcards": [
        {
          "id": "language-arts-101-l07-f1",
          "front": "What is the climax of a story?",
          "back": "The turning point—the most exciting moment where the main conflict is at its peak."
        },
        {
          "id": "language-arts-101-l07-f2",
          "front": "What is the difference between theme and topic?",
          "back": "A topic is one word (like 'love'). A theme is a full sentence message about that topic (like 'Love is stronger than hate')."
        },
        {
          "id": "language-arts-101-l07-f3",
          "front": "What are the five story elements?",
          "back": "Characters, Setting, Plot, Conflict, and Theme."
        }
      ],
      "learningAids": [
        {
          "id": "language-arts-101-l07-a1",
          "type": "image",
          "title": "The Plot Rollercoaster",
          "content": "A visual diagram of a rollercoaster track. The beginning is labeled 'Exposition,' the climb up is 'Rising Action,' the peak is 'Climax,' the drop down is 'Falling Action,' and the end is 'Resolution.'"
        },
        {
          "id": "language-arts-101-l07-a2",
          "type": "practice",
          "title": "Story Element Map",
          "content": "Think of your favorite movie. Can you fill in a map with its main characters, setting, conflict, climax, and theme?"
        }
      ]
    },
    {
      "id": "language-arts-101-l08",
      "title": "Writing with Evidence (The PEE Method)",
      "type": "interactive",
      "duration": 11,
      "objectives": [
        "Support a claim using evidence from a text.",
        "Explain how evidence supports a point."
      ],
      "chunks": [
        {
          "id": "language-arts-101-l08-c1",
          "title": "What is the PEE Method?",
          "kind": "concept",
          "content": "When you write about a story, you need to prove your ideas are true. The PEE method helps you do this! P stands for Point: Make your point in one sentence. E stands for Evidence: Find a quote or detail from the text that proves your point. E stands for Explain: Explain how your evidence connects to your point. Using PEE makes your arguments strong and convincing."
        },
        {
          "id": "language-arts-101-l08-c2",
          "title": "PEE in Action",
          "kind": "example",
          "content": "Let's try it. Point: The wolf in 'The Three Little Pigs' is not very smart. Evidence: For example, the story says he tried to blow down a house made of bricks. Explain: This shows he isn't smart because he should have known that a brick house is too strong to blow down. See? PEE helps you build a strong paragraph."
        }
      ],
      "interactiveActivities": [
        {
          "id": "language-arts-101-l08-ia1",
          "type": "sorting_buckets",
          "title": "Evidence or Opinion?",
          "description": "Sort each statement as either text evidence (a fact from a story) or a personal opinion (what a reader thinks).",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "evidence",
                "label": "Text Evidence"
              },
              {
                "id": "opinion",
                "label": "Personal Opinion"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "The author states that the dragon had 'scales like steel.'",
                "correctBucketId": "evidence"
              },
              {
                "id": "i2",
                "label": "I think dragons are the coolest mythical creatures.",
                "correctBucketId": "opinion"
              },
              {
                "id": "i3",
                "label": "According to the text, the character felt 'a deep sense of regret.'",
                "correctBucketId": "evidence"
              },
              {
                "id": "i4",
                "label": "The ending of the story was boring.",
                "correctBucketId": "opinion"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "language-arts-101-l08-a1",
          "type": "image",
          "title": "PEE Building Blocks",
          "content": "A graphic showing three stacked building blocks. The bottom block is labeled 'P - Point,' the middle is 'E - Evidence,' and the top is 'E - Explain.'"
        }
      ]
    },
    {
      "id": "language-arts-101-l09",
      "title": "Better Together: Peer Feedback",
      "type": "interactive",
      "duration": 10,
      "objectives": [
        "Give constructive and kind feedback on writing.",
        "Use feedback to revise and improve your own writing."
      ],
      "chunks": [
        {
          "id": "language-arts-101-l09-c1",
          "title": "The Feedback Sandwich",
          "kind": "concept",
          "content": "Giving feedback helps others, and getting it helps you! A great way to give feedback is with a 'Feedback Sandwich.' First, say something you liked (the top bun). Next, offer a helpful suggestion for improvement (the filling). Finally, end with another positive comment (the bottom bun). This method is kind and effective."
        },
        {
          "id": "language-arts-101-l09-c2",
          "title": "How to Revise",
          "kind": "concept",
          "content": "When you get feedback, it's time to revise! Revision means 'to see again.' Read the suggestions and think about how they can make your writing stronger. A good way to revise is to use ARMS: Add more details. Remove parts that don't belong. Move sentences for better flow. Substitute boring words with exciting ones."
        }
      ],
      "interactiveActivities": [
        {
          "id": "language-arts-101-l09-ia1",
          "type": "matching_pairs",
          "title": "Helpful vs. Unhelpful Feedback",
          "description": "Match the unhelpful comment to a more helpful, specific version.",
          "estimatedMinutes": 7,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "'It's good.'"
              },
              {
                "id": "l2",
                "label": "'I don't get it.'"
              },
              {
                "id": "l3",
                "label": "'You have mistakes.'"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "'I love your topic sentence! It really grabbed my attention.'"
              },
              {
                "id": "r2",
                "label": "'Could you add an example in the second paragraph to help me understand your point?'"
              },
              {
                "id": "r3",
                "label": "'I think there's a run-on sentence in paragraph one. Maybe add a period?'"
              }
            ],
            "pairs": [
              {
                "leftId": "l1",
                "rightId": "r1"
              },
              {
                "leftId": "l2",
                "rightId": "r2"
              },
              {
                "leftId": "l3",
                "rightId": "r3"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "language-arts-101-l09-a1",
          "type": "image",
          "title": "The Feedback Sandwich",
          "content": "A cartoon drawing of a sandwich. The top bun is labeled 'Praise,' the filling is 'Suggestion,' and the bottom bun is 'Praise.'"
        },
        {
          "id": "language-arts-101-l09-a2",
          "type": "mnemonic",
          "title": "ARMS for Revision",
          "content": "A - Add details. R - Remove unneeded parts. M - Move sentences. S - Substitute weak words."
        }
      ]
    },
    {
      "id": "language-arts-101-l10",
      "title": "Skills Review & Goal Setting",
      "type": "quiz",
      "duration": 10,
      "objectives": [
        "Review all concepts from the module.",
        "Identify a personal area for improvement."
      ],
      "chunks": [
        {
          "id": "language-arts-101-l10-c1",
          "title": "Find Your Focus",
          "kind": "recap",
          "content": "You've learned so much! Let's review the big skills: finding the main idea, using context clues, writing strong sentences and paragraphs, and analyzing stories. Think about which of these skills feels the most challenging for you. Is it writing topic sentences? Finding the theme? Focusing on your biggest challenge is the best way to improve. Let's get ready to show what you know!"
        }
      ],
      "questions": [
        {
          "id": "language-arts-101-l10-q1",
          "text": "What is the climax of a story?",
          "options": [
            {
              "id": "a",
              "text": "The beginning where characters are introduced."
            },
            {
              "id": "b",
              "text": "The most exciting moment where the conflict peaks."
            },
            {
              "id": "c",
              "text": "The end where the problem is solved."
            },
            {
              "id": "d",
              "text": "The setting of the story."
            }
          ],
          "correctOptionId": "b",
          "explanation": "The climax is the turning point or the moment of highest tension in the plot."
        },
        {
          "id": "language-arts-101-l10-q2",
          "text": "Which is the best topic sentence for a paragraph about why dogs are good pets?",
          "options": [
            {
              "id": "a",
              "text": "Dogs have fur and four legs."
            },
            {
              "id": "b",
              "text": "Dogs make excellent companions because they are loyal and playful."
            },
            {
              "id": "c",
              "text": "My dog's name is Sparky."
            },
            {
              "id": "d",
              "text": "You should feed your dog every day."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A good topic sentence makes a clear claim that can be supported with details. Option B states two reasons that can be explained in the paragraph."
        },
        {
          "id": "language-arts-101-l10-q3",
          "text": "In 'The frugal shopper always used coupons, unlike her extravagant friend,' what does 'frugal' mean?",
          "options": [
            {
              "id": "a",
              "text": "Wasteful"
            },
            {
              "id": "b",
              "text": "Careful with money"
            },
            {
              "id": "c",
              "text": "Funny"
            },
            {
              "id": "d",
              "text": "Fast"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The contrast clue 'unlike her extravagant friend' tells you that frugal is the opposite of extravagant (spending a lot). Therefore, frugal means careful with money."
        },
        {
          "id": "language-arts-101-l10-q4",
          "text": "What does the 'E' in the PEE method stand for?",
          "options": [
            {
              "id": "a",
              "text": "Excitement"
            },
            {
              "id": "b",
              "text": "Ending"
            },
            {
              "id": "c",
              "text": "Evidence and Explain"
            },
            {
              "id": "d",
              "text": "Effort"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The two 'E's in PEE stand for Evidence (a quote or detail from the text) and Explain (how the evidence proves your point)."
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "feedbackMode": "after_submit",
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "language-arts-101-l10-a1",
          "type": "practice",
          "title": "Personal Skills Checklist",
          "content": "Rate yourself from 1 (need practice) to 5 (I'm an expert!) on: Main Idea, Context Clues, Sentences, Paragraphs, Story Elements. Choose your lowest score to focus on this week!"
        }
      ]
    },
    {
      "id": "language-arts-101-l11",
      "title": "Language Arts Mastery Check",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "language-arts-101-l11-q1",
          "text": "A story's theme is best described as:",
          "options": [
            {
              "id": "a",
              "text": "The setting of the story."
            },
            {
              "id": "b",
              "text": "A single word like 'courage'."
            },
            {
              "id": "c",
              "text": "The author's message or lesson, stated as a complete sentence."
            },
            {
              "id": "d",
              "text": "The list of characters."
            }
          ],
          "correctOptionId": "c",
          "explanation": "The theme is the central message or lesson. A single word like 'courage' is a topic, not a theme."
        },
        {
          "id": "language-arts-101-l11-q2",
          "text": "How would you fix this run-on sentence: 'I love reading I go to the library every week.'",
          "options": [
            {
              "id": "a",
              "text": "I love reading, I go to the library every week."
            },
            {
              "id": "b",
              "text": "I love reading. I go to the library every week."
            },
            {
              "id": "c",
              "text": "I love reading I, go to the library every week."
            },
            {
              "id": "d",
              "text": "I love reading and, I go to the library every week."
            }
          ],
          "correctOptionId": "b",
          "explanation": "The best way to fix this run-on is to separate the two complete thoughts with a period."
        },
        {
          "id": "language-arts-101-l11-q3",
          "text": "Read: 'The student's notes were meticulous; every detail was organized perfectly.' What does 'meticulous' mean?",
          "options": [
            {
              "id": "a",
              "text": "Sloppy"
            },
            {
              "id": "b",
              "text": "Very careful and precise"
            },
            {
              "id": "c",
              "text": "Short"
            },
            {
              "id": "d",
              "text": "Confusing"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The clue 'every detail was organized perfectly' helps you infer that meticulous means very careful and precise."
        },
        {
          "id": "language-arts-101-l11-q4",
          "text": "Which revision tip is about improving your ideas (content)?",
          "options": [
            {
              "id": "a",
              "text": "Fixing spelling errors."
            },
            {
              "id": "b",
              "text": "Adding a specific example to support your main idea."
            },
            {
              "id": "c",
              "text": "Correcting comma usage."
            },
            {
              "id": "d",
              "text": "Checking for capital letters."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Adding examples improves the content and strength of your ideas. The other options are about fixing mechanics (conventions)."
        }
      ],
      "quizBlueprint": {
        "frequency": "mastery_assessment",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "feedbackMode": "after_submit",
        "masteryThreshold": 0.75
      }
    },
    {
      "id": "language-arts-101-l12",
      "title": "Challenge Lab: Analyze a Story",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Analyze a complete short story using all learned skills.",
        "Write a critical response paragraph using the PEE method."
      ],
      "chunks": [
        {
          "id": "language-arts-101-l12-c1",
          "title": "The Lost Kite: A Mini Story",
          "kind": "intro",
          "content": "Let's read a story together: 'Maya spent weeks building a kite. On the day she flew it, a strong gust of wind snatched it away. She chased it for blocks and found it tangled and broken in a tall tree. Instead of being sad, Maya studied how the wind had pulled it apart. She immediately started designing a new, stronger kite. She wasn't upset about her failure; she was excited to learn from it.'"
        },
        {
          "id": "language-arts-101-l12-c2",
          "title": "Analyzing the Story",
          "kind": "example",
          "content": "Let's break down the story. Character: Maya, who is creative and persistent. Setting: Her neighborhood on a windy day. Conflict: Maya vs. Nature (the wind breaks her kite). Climax: Finding the broken kite in the tree. Resolution: She decides to learn from the experience and build a better kite. Theme: Failure can be an opportunity to learn and improve."
        },
        {
          "id": "language-arts-101-l12-c3",
          "title": "Your Response",
          "kind": "practice",
          "content": "Now it's your turn. Write one paragraph answering this question: 'What does this story teach us about having a positive attitude?' Use the PEE method. Start with your Point, add Evidence from the story (a quote or detail), and Explain how that evidence proves your point. This is your chance to combine all your skills!"
        }
      ],
      "flashcards": [
        {
          "id": "language-arts-101-l12-f1",
          "front": "What is the theme of 'The Lost Kite'?",
          "back": "Failure can be an opportunity to learn and improve."
        },
        {
          "id": "language-arts-101-l12-f2",
          "front": "What type of conflict does Maya face?",
          "back": "Person vs. Nature (her kite against the wind). She also shows Person vs. Self by choosing to be positive instead of upset."
        },
        {
          "id": "language-arts-101-l12-f3",
          "front": "What makes a good response paragraph?",
          "back": "A clear point, strong evidence from the text, and an explanation that connects them (PEE)."
        }
      ],
      "learningAids": [
        {
          "id": "language-arts-101-l12-a1",
          "type": "image",
          "title": "Story Analysis Map for 'The Lost Kite'",
          "content": "A filled-in graphic organizer for 'The Lost Kite' showing the character, setting, conflict, climax, resolution, and theme."
        }
      ]
    },
    {
      "id": "language-arts-101-l13",
      "title": "Mastery Check Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "language-arts-101-l13-q1",
          "text": "Which sentence uses text evidence correctly to prove a point?",
          "options": [
            {
              "id": "a",
              "text": "I think the character is brave because he's my favorite."
            },
            {
              "id": "b",
              "text": "The character is brave, as shown when the author writes, 'He stepped forward despite his fear.'"
            },
            {
              "id": "c",
              "text": "The character is obviously brave."
            },
            {
              "id": "d",
              "text": "Brave characters are the best."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Option B makes a claim ('The character is brave') and supports it with a direct quote from the text as evidence."
        },
        {
          "id": "language-arts-101-l13-q2",
          "text": "In which part of the plot are the characters and setting introduced?",
          "options": [
            {
              "id": "a",
              "text": "Climax"
            },
            {
              "id": "b",
              "text": "Resolution"
            },
            {
              "id": "c",
              "text": "Exposition"
            },
            {
              "id": "d",
              "text": "Falling action"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The exposition is the beginning of the story where the reader is introduced to the characters, setting, and basic situation."
        },
        {
          "id": "language-arts-101-l13-q3",
          "text": "'Although the hike was arduous, we were thrilled to reach the top.' Based on the sentence, 'arduous' most likely means:",
          "options": [
            {
              "id": "a",
              "text": "Easy and fun"
            },
            {
              "id": "b",
              "text": "Short"
            },
            {
              "id": "c",
              "text": "Difficult and tiring"
            },
            {
              "id": "d",
              "text": "Beautiful"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The word 'Although' signals a contrast. Even though the hike was something challenging, they were thrilled. This implies it was difficult and tiring."
        },
        {
          "id": "language-arts-101-l13-q4",
          "text": "Which is the best concluding sentence for a paragraph about why pets reduce stress?",
          "options": [
            {
              "id": "a",
              "text": "Dogs can learn many tricks."
            },
            {
              "id": "b",
              "text": "Therefore, owning a pet is a proven way to lower stress and improve well-being."
            },
            {
              "id": "c",
              "text": "My cat is very fluffy."
            },
            {
              "id": "d",
              "text": "Some people are allergic to pets."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A good concluding sentence summarizes the main idea of the paragraph. Option B effectively wraps up the point about pets and stress."
        }
      ],
      "quizBlueprint": {
        "frequency": "mastery_assessment",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "feedbackMode": "after_submit",
        "masteryThreshold": 0.75
      }
    }
  ]
};
