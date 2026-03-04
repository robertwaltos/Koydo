import type { LearningModule } from "@/lib/modules/types";

export const LanguageArts101Module: LearningModule = {
  "id": "language-arts-101",
  "title": "Language Arts Foundations",
  "description": "Build reading, writing, speaking, and comprehension skills with age-appropriate practice.",
  "subject": "Language Arts",
  "tags": [
    "core",
    "curriculum",
    "interactive"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "2.0.0",
  "learningObjectives": [
    "Identify the main idea and supporting details in a passage",
    "Use context clues to determine the meaning of unfamiliar words",
    "Write well-structured paragraphs with a topic sentence, details, and conclusion",
    "Identify story elements: character, setting, plot, conflict, and theme",
    "Apply grammar and punctuation rules in writing"
  ],
  "lessons": [
    {
      "id": "language-arts-101-l01",
      "title": "Reading for Main Idea",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Distinguish the main idea from supporting details",
        "Summarize a paragraph in one sentence"
      ],
      "chunks": [
        {
          "id": "language-arts-101-l01-c1",
          "title": "What Is the Main Idea?",
          "kind": "intro",
          "content": "The main idea of a text is the most important point that the author wants you to understand. It helps answer the question: 'What is this passage mostly about?' When you read a paragraph, everything else you see, like facts, examples, and descriptions, serves as supporting details. These details are like clues that help explain or prove the main idea, making it clearer for you, the reader. Understanding the main idea is very important because it allows you to grasp the overall message of the text. It helps you remember the key points and understand what the author is trying to communicate. By focusing on the main idea, you can become a better reader and thinker, making it easier to discuss and write about what you've read."
        },
        {
          "id": "language-arts-101-l01-c2",
          "title": "Finding the Main Idea",
          "kind": "concept",
          "content": "Finding the main idea in a paragraph is an important skill that helps you understand what you are reading. Often, the main idea can be found in the first or last sentence of the paragraph, which is known as the topic sentence. This sentence usually gives you a clear idea of what the paragraph is about. However, there are times when the main idea is not directly stated. In these cases, you will need to use your detective skills to uncover it by examining the details in the paragraph. A great strategy to use is to read the entire paragraph carefully. After reading, ask yourself, 'What is the one big idea that all the details support?' This question will help you focus on the main idea and improve your reading comprehension. Remember, understanding the main idea is like finding the treasure in a story, and it makes reading much more enjoyable!"
        },
        {
          "id": "language-arts-101-l01-c3",
          "title": "Worked Example",
          "kind": "example",
          "content": "Let's explore an example together to help us learn how to find the main idea in a text. Imagine you read this passage: 'Honeybees are essential to agriculture. They pollinate about one-third of the food we eat, including apples, almonds, and blueberries. Without bees, many crops would fail.' In this passage, the main idea is that 'Honeybees are essential to agriculture.' This means that honeybees play a very important role in helping our food grow. The other sentences in the passage give us supporting details that explain why honeybees are so crucial. They tell us that honeybees help pollinate many of the fruits and nuts we enjoy, and without them, a lot of our crops would not survive. Understanding the main idea helps us see the big picture of what the text is about and why it matters to us and our food supply."
        },
        {
          "id": "language-arts-101-l01-c4",
          "title": "Try It Yourself",
          "kind": "practice",
          "content": "It's time for you to practice finding the main idea in a text! Start by selecting a paragraph from a book or an article that you find interesting. Take your time to read it carefully. Once you've read it, look for the sentence that you think best represents the main idea of that paragraph and underline it. After identifying the main idea, think about two details from the paragraph that support or explain your main idea. Write these details down. Finally, take a moment to review your work: do the details you listed really help to explain or prove your main idea? This activity will help you become more skilled at identifying main ideas in various texts, making your reading experience even more enjoyable and insightful!"
        }
      ],
      "flashcards": [
        {
          "id": "language-arts-101-l01-f1",
          "front": "What is a main idea?",
          "back": "The most important point of a passage — what the text is mostly about. All supporting details connect to it."
        },
        {
          "id": "language-arts-101-l01-f2",
          "front": "What is a supporting detail?",
          "back": "A fact, example, reason, or description that explains, proves, or illustrates the main idea."
        },
        {
          "id": "language-arts-101-l01-f3",
          "front": "Where is the main idea usually found?",
          "back": "Often in the first sentence (topic sentence) or last sentence of a paragraph. Sometimes it is implied and must be inferred."
        },
        {
          "id": "language-arts-101-l01-f4",
          "front": "How do you summarize a paragraph?",
          "back": "State the main idea in your own words in one sentence. Leave out minor details — keep only the core message."
        }
      ],
      "learningAids": [
        {
          "id": "language-arts-101-l01-a1",
          "type": "image",
          "title": "Main Idea Umbrella",
          "content": "A visual diagram showing a main idea as an umbrella covering three supporting details underneath."
        },
        {
          "id": "language-arts-101-l01-a2",
          "type": "animation",
          "title": "Finding the Main Idea",
          "content": "Animation highlighting the topic sentence in a paragraph as it is read aloud, then dimming the supporting details."
        }
      ]
    },
    {
      "id": "language-arts-101-l02",
      "title": "Context Clues and Vocabulary",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Use four types of context clues to determine word meaning",
        "Build vocabulary through reading"
      ],
      "interactiveActivities": [
        {
          "id": "language-arts-101-l02-ia1",
          "type": "sorting_buckets",
          "title": "Type of Context Clue",
          "description": "Classify each example by the type of context clue used.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "definition",
                "label": "Definition clue (meaning given directly)"
              },
              {
                "id": "example",
                "label": "Example clue (examples explain the word)"
              },
              {
                "id": "contrast",
                "label": "Contrast clue (opposite meaning given)"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "'The arid, or extremely dry, desert gets little rain.'",
                "correctBucketId": "definition"
              },
              {
                "id": "i2",
                "label": "'She felt elated — unlike her brother, who was miserable.'",
                "correctBucketId": "contrast"
              },
              {
                "id": "i3",
                "label": "'Nocturnal animals, such as owls and bats, are active at night.'",
                "correctBucketId": "example"
              },
              {
                "id": "i4",
                "label": "'A habitat is the natural home of an animal or plant.'",
                "correctBucketId": "definition"
              },
              {
                "id": "i5",
                "label": "'While the villain was cruel, the hero was compassionate.'",
                "correctBucketId": "contrast"
              },
              {
                "id": "i6",
                "label": "'Reptiles like snakes, lizards, and turtles are cold-blooded.'",
                "correctBucketId": "example"
              }
            ]
          }
        }
      ],
      "chunks": [
        {
          "id": "language-arts-101-l02-c1",
          "title": "What Are Context Clues?",
          "kind": "concept",
          "content": "Context clues are like little hints that you can find in the sentences around a word you don’t know. They help you understand what that unfamiliar word means without having to look it up in a dictionary. There are four main types of context clues that can guide you: First, there are Definition clues, which tell you the meaning of the word right there in the text. Next, we have Example clues, where the text gives you examples that help explain the word. Then, there are Contrast clues, which show you the opposite meaning of the word, helping you understand it better. Finally, we have Inference clues, where you gather hints from the whole sentence to figure out what the word means. By learning how to use these context clues, you can improve your vocabulary and become a better reader! This skill is super important because it allows you to enjoy books and stories even more, as you won’t get stuck on words you don’t know."
        },
        {
          "id": "language-arts-101-l02-c2",
          "title": "Signal Words",
          "kind": "concept",
          "content": "When you are reading a story or an article, it's really helpful to pay attention to signal words. These words act like little guides that show you what kind of information is coming next. For example, if you see definition clues, you might notice words like 'means,' 'is defined as,' 'or,' or 'also known as.' These words help you understand what a new word means. If you come across example clues, look for phrases such as 'such as,' 'for example,' 'including,' or 'like.' These phrases give you examples that can clarify the meaning of the word. On the other hand, if you see contrast clues, you might find words like 'but,' 'however,' 'unlike,' 'while,' or 'instead of.' These signal words help you understand how the new word is different from something else. By recognizing these signal words, you can better understand the meaning of new vocabulary and improve your reading skills!"
        }
      ],
      "learningAids": [
        {
          "id": "language-arts-101-l02-a1",
          "type": "practice",
          "title": "Context Clue Detective",
          "content": "Read each sentence and identify the unfamiliar word, the type of clue, and the word's meaning: 1) 'The benevolent king, unlike the tyrant before him, was kind to all.' 2) 'Precipitation, such as rain, snow, and hail, is part of the water cycle.'"
        }
      ]
    },
    {
      "id": "language-arts-101-l03",
      "title": "Checkpoint: Reading Comprehension",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "language-arts-101-l03-q1",
          "text": "Read: 'Many animals migrate to survive winter. Birds fly south for warmer weather. Whales travel to tropical waters to give birth. Caribou move to lower elevations to find food.' What is the main idea?",
          "skillId": "language-arts-101-skill-main-idea",
          "options": [
            {
              "id": "a",
              "text": "Birds fly south in winter"
            },
            {
              "id": "b",
              "text": "Many animals migrate to survive winter"
            },
            {
              "id": "c",
              "text": "Whales travel to tropical waters"
            },
            {
              "id": "d",
              "text": "Caribou move to lower elevations"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The first sentence states the main idea. The other sentences are supporting details giving specific examples of animal migration."
        },
        {
          "id": "language-arts-101-l03-q2",
          "text": "In the sentence 'The garrulous parrot never stopped talking,' what does 'garrulous' most likely mean?",
          "skillId": "language-arts-101-skill-vocabulary",
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
              "text": "Dangerous"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The clue 'never stopped talking' tells you garrulous means very talkative. This is an inference context clue."
        },
        {
          "id": "language-arts-101-l03-q3",
          "text": "Which is a supporting detail, NOT a main idea?",
          "skillId": "language-arts-101-skill-main-idea",
          "options": [
            {
              "id": "a",
              "text": "Exercise is important for good health"
            },
            {
              "id": "b",
              "text": "Running strengthens the heart and lungs"
            },
            {
              "id": "c",
              "text": "Eating well helps your body function properly"
            },
            {
              "id": "d",
              "text": "Sleep is essential for physical recovery"
            }
          ],
          "correctOptionId": "b",
          "explanation": "'Running strengthens the heart and lungs' is a specific detail about one type of exercise. The others are broad enough to be main ideas."
        },
        {
          "id": "language-arts-101-l03-q4",
          "text": "Which signal words indicate a contrast context clue?",
          "skillId": "language-arts-101-skill-vocabulary",
          "options": [
            {
              "id": "a",
              "text": "such as, for example, including"
            },
            {
              "id": "b",
              "text": "means, is defined as, also known as"
            },
            {
              "id": "c",
              "text": "but, however, unlike, while"
            },
            {
              "id": "d",
              "text": "because, since, therefore"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Contrast clue signal words: 'but,' 'however,' 'unlike,' 'while,' 'instead of.' They indicate an opposite meaning."
        }
      ],
      "interactiveActivities": [
        {
          "id": "language-arts-101-l03-ia1",
          "type": "matching_pairs",
          "title": "Main Idea or Detail?",
          "description": "Match each statement to whether it is a main idea or supporting detail.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Dogs make wonderful family pets"
              },
              {
                "id": "l2",
                "label": "Golden retrievers are gentle with children"
              },
              {
                "id": "l3",
                "label": "Dogs can be trained to follow commands"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Main idea (broad claim)"
              },
              {
                "id": "r2",
                "label": "Supporting detail (specific example)"
              },
              {
                "id": "r3",
                "label": "Supporting detail (specific fact)"
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
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 1,
          "medium": 2,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "language-arts-101-l03-a1",
          "type": "mnemonic",
          "title": "Main Idea Check",
          "content": "Ask: 'Does every detail in this paragraph connect back to this one sentence?' If yes, you found the main idea."
        }
      ]
    },
    {
      "id": "language-arts-101-l04",
      "title": "Writing Strong Sentences",
      "type": "video",
      "duration": 11,
      "objectives": [
        "Write complete sentences with a subject and predicate",
        "Vary sentence structure for clarity and interest"
      ],
      "chunks": [
        {
          "id": "language-arts-101-l04-c1",
          "title": "What Makes a Complete Sentence?",
          "kind": "intro",
          "content": "A complete sentence is like a little story that has two important parts: a subject and a predicate. The subject is the part that tells us who or what the sentence is about. For example, in the sentence 'The dog barked loudly,' 'The dog' is the subject because it tells us who is doing something. The predicate is the part that tells us what the subject does or is. In our example, 'barked loudly' is the predicate because it tells us what the dog is doing. It's very important to know that sometimes we might say something that isn't a complete sentence, which we call a fragment. A fragment is missing either a subject or a predicate. For instance, if we say 'Running down the street,' we don't know who is running, so that's a fragment. By understanding these parts of a sentence, you can write sentences that are clear and complete, making your writing much better!"
        },
        {
          "id": "language-arts-101-l04-c2",
          "title": "Simple, Compound, and Complex Sentences",
          "kind": "concept",
          "content": "In writing, there are three main types of sentences that can help make your work more exciting and enjoyable to read: simple, compound, and complex sentences. A simple sentence is straightforward and contains just one independent clause. For example, 'The rain fell.' This sentence gives us a complete thought without any extra information. Next, we have compound sentences, which are a bit more complex. They consist of two independent clauses that are connected by a conjunction, like 'and' or 'but.' An example of a compound sentence is, 'The rain fell, and the flowers bloomed.' This sentence tells us two complete ideas that are related. Lastly, complex sentences combine an independent clause with a dependent clause. A great example is, 'Although the rain fell, we played outside.' Here, the first part gives us a complete thought, while the second part adds more detail but cannot stand alone. By using a mix of these sentence types in your writing, you can create a more dynamic and engaging style that captures your readers' attention and keeps them interested in what you have to say."
        },
        {
          "id": "language-arts-101-l04-c3",
          "title": "Avoiding Run-ons and Fragments",
          "kind": "concept",
          "content": "A run-on sentence happens when two complete thoughts are squished together without the right punctuation. For instance, if you say, 'I like pizza I eat it every day,' that's a run-on sentence. To fix it, you can use a period to separate the ideas, like this: 'I like pizza. I eat it every day.' Alternatively, you can use a semicolon or a conjunction. For example, you could say, 'I like pizza; I eat it every day,' or 'I like pizza, so I eat it every day.'\nNow, let’s talk about fragments. A fragment is like a puzzle piece that’s missing either a subject or a verb. For example, the phrase 'Because it was raining' is a fragment because it doesn’t tell us who or what is doing something. To make it a complete sentence, you could say, 'We stayed inside because it was raining.'\nUnderstanding how to avoid run-on sentences and fragments is important because it helps you write sentences that are clear and easy to understand. When your sentences are clear, your readers can follow your ideas more easily, making your writing more effective and enjoyable to read."
        },
        {
          "id": "language-arts-101-l04-c4",
          "title": "Sentence Starters for Variety",
          "kind": "practice",
          "content": "To make your writing more exciting and interesting, it's important to mix up how you begin your sentences. Instead of always starting with 'I' or 'The,' you can try using different kinds of sentence starters. For instance, you could begin with a time word like 'Yesterday,' which helps set when something happened. Another option is to use a prepositional phrase, such as 'Under the old bridge,' which gives more detail about where something is taking place. You can also start with an -ing word, like 'Racing to the finish,' to create a sense of action. Lastly, using a transition word like 'However' can help connect your ideas smoothly. Now, for some practice, look at three sentences from your recent writing and rewrite them using these different starters. This fun exercise will help you develop a more creative and engaging writing style that keeps your readers interested!"
        }
      ],
      "flashcards": [
        {
          "id": "language-arts-101-l04-f1",
          "front": "What are the two parts of a complete sentence?",
          "back": "Subject (who or what) and predicate (what the subject does or is). Both are required."
        },
        {
          "id": "language-arts-101-l04-f2",
          "front": "What is the difference between a run-on and a fragment?",
          "back": "A run-on joins two complete sentences without proper punctuation. A fragment is missing a subject, verb, or complete thought."
        },
        {
          "id": "language-arts-101-l04-f3",
          "front": "What makes a sentence compound?",
          "back": "Two independent clauses joined by a coordinating conjunction (FANBOYS: for, and, nor, but, or, yet, so) or a semicolon."
        },
        {
          "id": "language-arts-101-l04-f4",
          "front": "What makes a sentence complex?",
          "back": "An independent clause + a dependent clause, often connected by a subordinating conjunction (because, although, when, if, while)."
        }
      ],
      "learningAids": [
        {
          "id": "language-arts-101-l04-a1",
          "type": "image",
          "title": "Sentence Types Chart",
          "content": "Visual chart showing simple, compound, and complex sentences with color-coded independent and dependent clauses."
        }
      ]
    },
    {
      "id": "language-arts-101-l05",
      "title": "Paragraph Building Workshop",
      "type": "interactive",
      "duration": 13,
      "objectives": [
        "Write a paragraph with a topic sentence, supporting details, and concluding sentence",
        "Organize ideas in logical order"
      ],
      "interactiveActivities": [
        {
          "id": "language-arts-101-l05-ia1",
          "type": "drag_and_drop",
          "title": "Build a Paragraph",
          "description": "Place each sentence in the correct position to form a well-organized paragraph.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "targets": [
              {
                "id": "topic",
                "label": "Topic Sentence"
              },
              {
                "id": "detail1",
                "label": "Supporting Detail 1"
              },
              {
                "id": "detail2",
                "label": "Supporting Detail 2"
              },
              {
                "id": "conclusion",
                "label": "Concluding Sentence"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "In conclusion, regular reading builds a stronger mind and a richer vocabulary.",
                "correctTargetId": "conclusion"
              },
              {
                "id": "d2",
                "label": "Reading every day is one of the best habits a student can develop.",
                "correctTargetId": "topic"
              },
              {
                "id": "d3",
                "label": "Studies show that daily readers score higher on comprehension tests.",
                "correctTargetId": "detail1"
              },
              {
                "id": "d4",
                "label": "Reading also exposes students to new words, improving their vocabulary over time.",
                "correctTargetId": "detail2"
              }
            ]
          }
        }
      ],
      "chunks": [
        {
          "id": "language-arts-101-l05-c1",
          "title": "The Paragraph Sandwich",
          "kind": "concept",
          "content": "Imagine a paragraph as a tasty sandwich that you can create! At the very top, we have the top bun, which is like the topic sentence. This sentence tells us what the main idea of the paragraph is, just like the name of a sandwich tells you what to expect. Next, we have the fillings, which are the supporting details. These can be facts, examples, or explanations that add flavor and depth to our main idea, just like lettuce, tomatoes, and cheese make a sandwich more delicious. Finally, at the bottom, we have the bottom bun, which is the concluding sentence. This sentence wraps up the idea and gives a nice finish to the paragraph, similar to how the bottom bun holds everything together. Just like a sandwich needs all its layers to be satisfying and complete, a paragraph needs each of these parts to effectively share its message and engage the reader. So, remember, when you write a paragraph, think about how you can build it like a great sandwich, making sure each part is included for the best result!"
        },
        {
          "id": "language-arts-101-l05-c2",
          "title": "Transitions Connect Ideas",
          "kind": "concept",
          "content": "Transitions are special words that help connect your ideas smoothly in your writing. They act like bridges that guide your reader from one thought to another, making your writing easier to understand. Some common transition words you might use are 'First,' which helps you start a sequence, 'Next,' which shows what comes after, and 'In addition,' which adds more information. You can also use 'For example' to give a specific instance, 'However' to show a contrast, 'Finally' to wrap things up, and 'In conclusion' to summarize your main points. Without these helpful transitions, your writing can feel choppy and disconnected, like a puzzle with missing pieces. By including them, you create a smooth flow of ideas that makes your writing clearer and more enjoyable to read."
        }
      ],
      "learningAids": [
        {
          "id": "language-arts-101-l05-a1",
          "type": "animation",
          "title": "Paragraph Assembly",
          "content": "Animated demonstration of building a paragraph: topic sentence appears first, then details slide into place with transition words, and the concluding sentence closes it out."
        }
      ]
    },
    {
      "id": "language-arts-101-l06",
      "title": "Checkpoint: Writing Basics",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "language-arts-101-l06-q1",
          "text": "Which sentence is a fragment?",
          "skillId": "language-arts-101-skill-sentences",
          "options": [
            {
              "id": "a",
              "text": "The cat slept on the windowsill."
            },
            {
              "id": "b",
              "text": "Running through the park on a sunny day."
            },
            {
              "id": "c",
              "text": "She quickly finished her homework."
            },
            {
              "id": "d",
              "text": "The storm passed, and the sky cleared."
            }
          ],
          "correctOptionId": "b",
          "explanation": "'Running through the park on a sunny day' has no subject performing the action and no complete predicate. It is a fragment."
        },
        {
          "id": "language-arts-101-l06-q2",
          "text": "What is the purpose of a topic sentence?",
          "skillId": "language-arts-101-skill-paragraphs",
          "options": [
            {
              "id": "a",
              "text": "To provide a specific detail or example"
            },
            {
              "id": "b",
              "text": "To state the main idea of the paragraph"
            },
            {
              "id": "c",
              "text": "To conclude the paragraph"
            },
            {
              "id": "d",
              "text": "To introduce the next paragraph"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The topic sentence states the main idea. All other sentences in the paragraph should support this central claim."
        },
        {
          "id": "language-arts-101-l06-q3",
          "text": "Which is a compound sentence?",
          "skillId": "language-arts-101-skill-sentences",
          "options": [
            {
              "id": "a",
              "text": "The bird sang."
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
              "text": "She wore a warm jacket to school."
            }
          ],
          "correctOptionId": "c",
          "explanation": "A compound sentence has two independent clauses joined by a conjunction. 'The bird sang' + 'and' + 'the squirrel listened.'"
        },
        {
          "id": "language-arts-101-l06-q4",
          "text": "Which transition word shows contrast?",
          "skillId": "language-arts-101-skill-paragraphs",
          "options": [
            {
              "id": "a",
              "text": "Furthermore"
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
              "text": "In addition"
            }
          ],
          "correctOptionId": "b",
          "explanation": "'However' signals a contrast or opposing idea. 'Furthermore' and 'In addition' signal more of the same. 'For example' introduces an illustration."
        }
      ],
      "interactiveActivities": [
        {
          "id": "language-arts-101-l06-ia1",
          "type": "sorting_buckets",
          "title": "Sentence or Fragment?",
          "description": "Sort each group of words as a complete sentence or a fragment.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "sentence",
                "label": "Complete sentence"
              },
              {
                "id": "fragment",
                "label": "Fragment"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "The dog chased the ball across the yard.",
                "correctBucketId": "sentence"
              },
              {
                "id": "i2",
                "label": "After the game ended.",
                "correctBucketId": "fragment"
              },
              {
                "id": "i3",
                "label": "Swimming in the deep blue ocean.",
                "correctBucketId": "fragment"
              },
              {
                "id": "i4",
                "label": "We finished the project on time.",
                "correctBucketId": "sentence"
              },
              {
                "id": "i5",
                "label": "Because she studied hard, she passed the test.",
                "correctBucketId": "sentence"
              },
              {
                "id": "i6",
                "label": "Under the old wooden bridge near the river.",
                "correctBucketId": "fragment"
              }
            ]
          }
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 1,
          "medium": 2,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "language-arts-101-l06-a1",
          "type": "mnemonic",
          "title": "FANBOYS",
          "content": "Coordinating conjunctions that join independent clauses: For, And, Nor, But, Or, Yet, So."
        }
      ]
    },
    {
      "id": "language-arts-101-l07",
      "title": "Story Elements and Theme",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Identify characters, setting, plot, conflict, and theme in a story",
        "Distinguish theme from topic"
      ],
      "chunks": [
        {
          "id": "language-arts-101-l07-c1",
          "title": "The Five Story Elements",
          "kind": "concept",
          "content": "Every story is built around five important elements that help us understand it better. These elements are: Characters, which are the people or beings the story revolves around; Setting, which tells us where and when the story takes place; Plot, which is the sequence of events that unfold; Conflict, which is the challenge or problem the characters face; and Theme, which is the deeper message or lesson the author wants to convey. By recognizing and analyzing these elements, we can gain a clearer understanding of any story we read or hear. For example, in a fairy tale, the characters might be a brave knight and a dragon, the setting could be a magical kingdom, the plot might involve the knight's quest to save a princess, the conflict could be the battle between the knight and the dragon, and the theme might be about courage and friendship. Understanding these elements not only enhances our reading experience but also helps us appreciate the creativity behind storytelling."
        },
        {
          "id": "language-arts-101-l07-c2",
          "title": "Plot Structure",
          "kind": "concept",
          "content": "Most stories follow a specific pattern known as plot structure, which helps us understand how a story unfolds. This structure includes several important parts. First, we have the Exposition, where the characters and the setting are introduced, giving us a glimpse into the world of the story. Next comes the Rising Action, where problems and complications begin to develop, creating tension and excitement as the story progresses. Then we reach the Climax, which is the turning point or the most thrilling moment of the story, where everything changes. After that, we have the Falling Action, where events start to resolve and the story moves towards its conclusion. Finally, we arrive at the Resolution, where the main problem is solved, and we see how the characters have changed. This entire structure is sometimes referred to as Freytag's Pyramid, and understanding it can help us follow and analyze stories more effectively, making our reading experience richer and more enjoyable."
        },
        {
          "id": "language-arts-101-l07-c3",
          "title": "Theme vs Topic",
          "kind": "concept",
          "content": "When we discuss the topic of a story, we are identifying what the story is mainly about, and we can usually sum it up in just one word. Some examples of topics include friendship, courage, or jealousy. Each of these words captures a central idea of the story. On the other hand, the theme of a story goes much deeper. It is a complete statement that conveys the lesson or message that the author wants to share with the readers. For instance, if we take the topic of courage, we can express the theme as: 'True courage means acting despite fear, not the absence of fear.' This shows us that courage is not just about being fearless; it’s about taking action even when we are scared. It’s important to remember that a theme is always written as a full sentence, not just a single word. Understanding this difference helps us uncover the deeper meanings and insights in the stories we read, making our reading experience richer and more enjoyable."
        },
        {
          "id": "language-arts-101-l07-c4",
          "title": "Finding the Theme",
          "kind": "example",
          "content": "Let's explore the story 'The Tortoise and the Hare' together! This classic tale is all about competition, where two very different characters face off in a race. The topic of the story is competition, but the theme offers us a valuable lesson: 'Slow and steady effort can overcome natural talent when talent becomes overconfident.' This means that sometimes, even if someone is very talented, they can lose if they don't work hard and stay focused. To discover the theme of a story, you can ask yourself some thoughtful questions. For example, you might wonder: 'What important lesson did the main character learn during their adventure?' or 'What message is the author trying to share with us, the readers?' By thinking about these questions, you can uncover the deeper meaning behind the story and understand what the author wants us to learn. Remember, stories often have lessons that can help us in our own lives!"
        }
      ],
      "flashcards": [
        {
          "id": "language-arts-101-l07-f1",
          "front": "What is the climax of a story?",
          "back": "The turning point — the most intense or exciting moment where the main conflict reaches its peak."
        },
        {
          "id": "language-arts-101-l07-f2",
          "front": "What is the difference between theme and topic?",
          "back": "Topic is one word (e.g., friendship). Theme is a complete message about that topic (e.g., 'True friends stand by you in difficult times')."
        },
        {
          "id": "language-arts-101-l07-f3",
          "front": "What are the five story elements?",
          "back": "Characters, Setting, Plot, Conflict, and Theme."
        },
        {
          "id": "language-arts-101-l07-f4",
          "front": "What is conflict in a story?",
          "back": "The problem or struggle the character faces. Types: person vs person, person vs nature, person vs self, person vs society."
        }
      ],
      "learningAids": [
        {
          "id": "language-arts-101-l07-a1",
          "type": "practice",
          "title": "Story Element Map",
          "content": "Pick a story you know well. Fill in: Characters, Setting (where/when), Conflict (main problem), Climax (turning point), Resolution (how it ends), Theme (the lesson)."
        }
      ]
    },
    {
      "id": "language-arts-101-l08",
      "title": "Peer Feedback Activity",
      "type": "interactive",
      "duration": 10,
      "objectives": [
        "Give constructive feedback on writing",
        "Revise writing based on feedback"
      ],
      "interactiveActivities": [
        {
          "id": "language-arts-101-l08-ia1",
          "type": "matching_pairs",
          "title": "Feedback That Helps",
          "description": "Match each weak feedback comment to a stronger, more helpful version.",
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
                "label": "'I don't like your ending.'"
              },
              {
                "id": "l3",
                "label": "'You have mistakes.'"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "'Your opening sentence hooks the reader — the detail about the storm was vivid.'"
              },
              {
                "id": "r2",
                "label": "'The ending feels rushed. Could you add a sentence showing how the character felt?'"
              },
              {
                "id": "r3",
                "label": "'Check paragraph 2 — there are two run-on sentences that need periods or conjunctions.'"
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
      "chunks": [
        {
          "id": "language-arts-101-l08-c1",
          "title": "The Revision Process",
          "kind": "concept",
          "content": "Excellent writers understand that revising their work is a crucial part of becoming better at writing. When we talk about revision, we mean taking a second look at what you've written, almost like putting on a new pair of glasses to see things more clearly. There are three key steps to follow during the revision process: First, let's focus on Content. Ask yourself, 'Is the main idea easy to understand? Are the details I included relevant and helpful to my readers?' Next, we move on to Organization. Think about whether your writing flows smoothly. Are there clear transitions between your ideas that help guide the reader? Finally, we check Conventions. This means looking at spelling, grammar, and punctuation to make sure everything is correct. Remember, it's best to take your time and work through each step one at a time. This way, you can make your writing the best it can be!"
        }
      ],
      "learningAids": [
        {
          "id": "language-arts-101-l08-a1",
          "type": "mnemonic",
          "title": "ARMS Revision",
          "content": "Add details, Remove unnecessary parts, Move sentences for better flow, Substitute weak words with stronger ones."
        }
      ]
    },
    {
      "id": "language-arts-101-l09",
      "title": "Review: Language Skills",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "language-arts-101-l09-q1",
          "text": "What is the climax of a story?",
          "skillId": "language-arts-101-skill-story-elements",
          "options": [
            {
              "id": "a",
              "text": "The introduction of the characters"
            },
            {
              "id": "b",
              "text": "The most intense moment when the conflict reaches its peak"
            },
            {
              "id": "c",
              "text": "The resolution of the problem"
            },
            {
              "id": "d",
              "text": "The background information at the beginning"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The climax is the turning point — the moment of highest tension where the outcome of the conflict is decided."
        },
        {
          "id": "language-arts-101-l09-q2",
          "text": "Which is the best topic sentence for a paragraph about the benefits of school gardens?",
          "skillId": "language-arts-101-skill-paragraphs",
          "options": [
            {
              "id": "a",
              "text": "Gardens have flowers and vegetables."
            },
            {
              "id": "b",
              "text": "School gardens provide hands-on learning while teaching responsibility."
            },
            {
              "id": "c",
              "text": "My school has a big garden."
            },
            {
              "id": "d",
              "text": "Students should water plants every day."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A good topic sentence makes a clear claim that details can support. Option B states a benefit that can be explained with examples."
        },
        {
          "id": "language-arts-101-l09-q3",
          "text": "In 'The frugal shopper compared prices carefully, unlike her extravagant friend,' what does 'frugal' mean?",
          "skillId": "language-arts-101-skill-vocabulary",
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
              "text": "Angry"
            },
            {
              "id": "d",
              "text": "Fast"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The contrast clue 'unlike her extravagant friend' tells you frugal is the opposite of extravagant (spending freely). Frugal = careful with money."
        },
        {
          "id": "language-arts-101-l09-q4",
          "text": "What type of conflict is shown when a character struggles with whether to tell the truth?",
          "skillId": "language-arts-101-skill-story-elements",
          "options": [
            {
              "id": "a",
              "text": "Person vs person"
            },
            {
              "id": "b",
              "text": "Person vs nature"
            },
            {
              "id": "c",
              "text": "Person vs self"
            },
            {
              "id": "d",
              "text": "Person vs society"
            }
          ],
          "correctOptionId": "c",
          "explanation": "An internal struggle with one's own feelings, conscience, or decisions is 'person vs self' conflict."
        }
      ],
      "interactiveActivities": [
        {
          "id": "language-arts-101-l09-ia1",
          "type": "matching_pairs",
          "title": "Plot Structure",
          "description": "Match each plot element to its definition.",
          "estimatedMinutes": 5,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Exposition"
              },
              {
                "id": "l2",
                "label": "Rising Action"
              },
              {
                "id": "l3",
                "label": "Climax"
              },
              {
                "id": "l4",
                "label": "Resolution"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Introduces characters, setting, and situation"
              },
              {
                "id": "r2",
                "label": "Complications build toward the main conflict"
              },
              {
                "id": "r3",
                "label": "The turning point of highest tension"
              },
              {
                "id": "r4",
                "label": "The conflict is resolved and the story concludes"
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
              },
              {
                "leftId": "l4",
                "rightId": "r4"
              }
            ]
          }
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 1,
          "medium": 2,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "language-arts-101-l09-a1",
          "type": "mnemonic",
          "title": "Plot Mountain",
          "content": "Draw a mountain: left slope = rising action, peak = climax, right slope = falling action, flat ground left = exposition, flat ground right = resolution."
        }
      ]
    },
    {
      "id": "language-arts-101-l10",
      "title": "Mastery: Language Arts",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "language-arts-101-l10-q1",
          "text": "A story's theme is best described as:",
          "skillId": "language-arts-101-skill-story-elements",
          "options": [
            {
              "id": "a",
              "text": "The setting of the story"
            },
            {
              "id": "b",
              "text": "A single word like 'friendship'"
            },
            {
              "id": "c",
              "text": "A lesson or message the author conveys, stated as a complete sentence"
            },
            {
              "id": "d",
              "text": "The sequence of events"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Theme is a complete statement about life or human nature. A single word like 'friendship' is a topic, not a theme."
        },
        {
          "id": "language-arts-101-l10-q2",
          "text": "Fix this run-on: 'I love reading I go to the library every week.'",
          "skillId": "language-arts-101-skill-sentences",
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
              "text": "I love, reading I go to the library every week."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Separate two independent clauses with a period. Option A is a comma splice (still a run-on). Options C and D have incorrect comma placement."
        },
        {
          "id": "language-arts-101-l10-q3",
          "text": "Read: 'The teacher was impressed by the student's meticulous notes — every detail was organized perfectly.' What does 'meticulous' mean?",
          "skillId": "language-arts-101-skill-vocabulary",
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
              "text": "Colorful"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The context 'every detail was organized perfectly' tells you meticulous means very careful and precise."
        },
        {
          "id": "language-arts-101-l10-q4",
          "text": "Which revision tip addresses content (not mechanics)?",
          "skillId": "language-arts-101-skill-paragraphs",
          "options": [
            {
              "id": "a",
              "text": "Fix spelling errors"
            },
            {
              "id": "b",
              "text": "Add a specific example to support the main idea"
            },
            {
              "id": "c",
              "text": "Correct comma usage"
            },
            {
              "id": "d",
              "text": "Check for capitalization"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Adding examples is a content revision. Spelling, commas, and capitalization are mechanics/conventions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "language-arts-101-l10-ia1",
          "type": "sorting_buckets",
          "title": "Revision Categories",
          "description": "Sort each revision action into Content, Organization, or Conventions.",
          "estimatedMinutes": 5,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "content",
                "label": "Content (ideas and details)"
              },
              {
                "id": "organization",
                "label": "Organization (structure and flow)"
              },
              {
                "id": "conventions",
                "label": "Conventions (grammar and mechanics)"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Add a more vivid example to paragraph 2",
                "correctBucketId": "content"
              },
              {
                "id": "i2",
                "label": "Move the conclusion to after the last supporting point",
                "correctBucketId": "organization"
              },
              {
                "id": "i3",
                "label": "Fix the run-on sentence in the introduction",
                "correctBucketId": "conventions"
              },
              {
                "id": "i4",
                "label": "Add a transition word between paragraphs 3 and 4",
                "correctBucketId": "organization"
              },
              {
                "id": "i5",
                "label": "Remove a detail that does not support the main idea",
                "correctBucketId": "content"
              },
              {
                "id": "i6",
                "label": "Correct the misspelled word in the title",
                "correctBucketId": "conventions"
              }
            ]
          }
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
            "pointsEach": 1,
            "bloomsLevels": [
              2,
              3,
              4
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 0,
          "medium": 2,
          "hard": 2
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "language-arts-101-l10-a1",
          "type": "mnemonic",
          "title": "Theme Finder",
          "content": "Ask: 'What did the character learn?' + 'What does the author want ME to learn?' = the theme."
        }
      ]
    },
    {
      "id": "language-arts-101-l11",
      "title": "Applied Language Arts Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Analyze a short text for main idea, vocabulary, and story elements",
        "Write a response paragraph using evidence from the text"
      ],
      "interactiveActivities": [
        {
          "id": "language-arts-101-l11-ia1",
          "type": "sorting_buckets",
          "title": "Evidence or Opinion?",
          "description": "Sort each statement as text evidence or personal opinion.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "evidence",
                "label": "Text evidence (from the passage)"
              },
              {
                "id": "opinion",
                "label": "Personal opinion (reader's view)"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "'The author states that 75% of students preferred outdoor recess.'",
                "correctBucketId": "evidence"
              },
              {
                "id": "i2",
                "label": "'I think outdoor recess is the best part of the day.'",
                "correctBucketId": "opinion"
              },
              {
                "id": "i3",
                "label": "'According to the passage, the character felt guilty after lying.'",
                "correctBucketId": "evidence"
              },
              {
                "id": "i4",
                "label": "'The ending of the story was disappointing.'",
                "correctBucketId": "opinion"
              },
              {
                "id": "i5",
                "label": "'The text mentions three benefits of recycling.'",
                "correctBucketId": "evidence"
              },
              {
                "id": "i6",
                "label": "'Everyone should recycle more.'",
                "correctBucketId": "opinion"
              }
            ]
          }
        }
      ],
      "chunks": [
        {
          "id": "language-arts-101-l11-c1",
          "title": "Writing with Evidence",
          "kind": "concept",
          "content": "Effective writing is like building a strong bridge; it needs solid support to hold up your ideas. When you make a claim or argument, it's important to back it up with specific examples from the text you are discussing. This is where the PEE structure comes in handy! First, you start with your Point, which means you clearly state what you believe or what you are trying to prove. Next, you provide Evidence by quoting or paraphrasing parts of the text that support your point. This could be a sentence or a phrase that really shows what you mean. Finally, you need to Explain how the evidence you provided connects to your claim. This means telling your reader why the evidence is important and how it helps to support your argument. Using this PEE structure not only strengthens your writing but also ensures that your ideas are based on the text, making them more convincing and reliable. Remember, good writing is not just about what you think; it’s about showing why you think it through the text!"
        }
      ],
      "learningAids": [
        {
          "id": "language-arts-101-l11-a1",
          "type": "practice",
          "title": "PEE Paragraph Practice",
          "content": "Write a PEE paragraph answering: 'Is the main character brave or foolish?' Use at least one quote from the text as evidence."
        }
      ]
    },
    {
      "id": "language-arts-101-l12",
      "title": "Language Arts Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "language-arts-101-l12-q1",
          "text": "Which sentence uses text evidence correctly?",
          "skillId": "language-arts-101-skill-paragraphs",
          "options": [
            {
              "id": "a",
              "text": "I think the character is brave because he seems cool."
            },
            {
              "id": "b",
              "text": "The character is brave, as shown when the author writes, 'He stepped forward despite his trembling hands.'"
            },
            {
              "id": "c",
              "text": "Everyone agrees the character is brave."
            },
            {
              "id": "d",
              "text": "Brave characters are common in stories."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Option B makes a claim and supports it with a direct quote from the text. This is proper use of text evidence."
        },
        {
          "id": "language-arts-101-l12-q2",
          "text": "In which part of the plot does the reader first meet the characters and learn about the setting?",
          "skillId": "language-arts-101-skill-story-elements",
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
          "explanation": "Exposition is the beginning of the story where the characters, setting, and initial situation are introduced."
        },
        {
          "id": "language-arts-101-l12-q3",
          "text": "'Although the hike was arduous, we reached the summit.' Based on the sentence, 'arduous' most likely means:",
          "skillId": "language-arts-101-skill-vocabulary",
          "options": [
            {
              "id": "a",
              "text": "Easy"
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
          "explanation": "'Although' signals contrast. Despite the hike being arduous, they succeeded — implying it was difficult and tiring but they persevered."
        },
        {
          "id": "language-arts-101-l12-q4",
          "text": "Which is the best concluding sentence for a paragraph about why pets reduce stress?",
          "skillId": "language-arts-101-skill-paragraphs",
          "options": [
            {
              "id": "a",
              "text": "Dogs can learn many tricks."
            },
            {
              "id": "b",
              "text": "In conclusion, owning a pet can significantly lower stress and improve mental health."
            },
            {
              "id": "c",
              "text": "My cat is fluffy and cute."
            },
            {
              "id": "d",
              "text": "Some people are allergic to pets."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A concluding sentence restates or summarizes the main idea. Option B wraps up the paragraph about pets reducing stress."
        }
      ],
      "interactiveActivities": [
        {
          "id": "language-arts-101-l12-ia1",
          "type": "matching_pairs",
          "title": "Conflict Types",
          "description": "Match each scenario to the correct type of conflict.",
          "estimatedMinutes": 5,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "A sailor battles a violent storm at sea"
              },
              {
                "id": "l2",
                "label": "Two friends argue over who should lead the group project"
              },
              {
                "id": "l3",
                "label": "A student feels torn between cheating and doing the right thing"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Person vs Nature"
              },
              {
                "id": "r2",
                "label": "Person vs Person"
              },
              {
                "id": "r3",
                "label": "Person vs Self"
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
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
            "pointsEach": 1,
            "bloomsLevels": [
              2,
              3,
              4
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 0,
          "medium": 2,
          "hard": 2
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "language-arts-101-l12-a1",
          "type": "mnemonic",
          "title": "PEE Structure",
          "content": "Point (your claim) → Evidence (quote the text) → Explain (how the evidence supports your point)."
        }
      ]
    },
    {
      "id": "language-arts-101-l13",
      "title": "Language Arts Scenario Lab",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Analyze a complete short story using all language arts skills",
        "Write a critical response to literature"
      ],
      "chunks": [
        {
          "id": "language-arts-101-l13-c1",
          "title": "The Lost Kite: A Mini Story",
          "kind": "intro",
          "content": "Let's read a mini story together: 'Maya spent three weeks carefully building a kite using newspaper and bamboo sticks. She was so excited for the day she was ready to launch it! But on that special day, a sudden gust of wind snatched the kite right out of her hands and carried it high over the rooftops. Maya felt a rush of determination and quickly chased after it for several blocks. Finally, she spotted her kite tangled in a tree, fluttering in the breeze. Instead of feeling sad or giving up, Maya took a deep breath and decided to study how the wind had pulled the kite apart. She thought about what went wrong and began to imagine how she could design a stronger kite for the next time she tried to fly it. This story teaches us about the importance of perseverance, which means not giving up, and learning from our experiences. Every challenge can help us grow and improve!' This story encourages us to think about how we can turn our setbacks into opportunities for learning and creativity."
        },
        {
          "id": "language-arts-101-l13-c2",
          "title": "Analyzing the Elements",
          "kind": "example",
          "content": "Let's take a closer look at the different parts of Maya's story. The main Character is Maya, a girl who shows creativity and determination in everything she does. The Setting of the story is her neighborhood on a particularly windy day, which is important because it influences what happens next. The Conflict happens when the strong wind, a force of nature, causes her kite to get damaged and fly away. This creates a problem for Maya. The Climax of the story is an exciting moment when she sees her kite stuck in a tree, which adds a sense of urgency to her adventure. Finally, the Resolution is when Maya chooses not to give up. Instead of feeling defeated, she decides to design a new, stronger kite for her next attempt. The Theme of this story teaches us that when we face challenges or setbacks, they can actually be great chances for us to learn and grow, helping us become better at what we do."
        },
        {
          "id": "language-arts-101-l13-c3",
          "title": "Vocabulary in Context",
          "kind": "example",
          "content": "As we dive into the story, we can discover important context clues that help us figure out the meanings of some tricky words. For instance, when we read the phrase 'a gust of wind ripped it from her hands,' we learn that the word 'gust' means a sudden and strong blast of wind. The detail that it 'ripped it from her hands' shows us just how powerful that wind was, making it easier for us to picture the scene. Another example is the phrase 'tangled in a tree.' This tells us that the kite got caught and twisted in the branches, which helps us visualize what happened. By paying attention to these context clues, we can understand the story much better and enjoy it even more!"
        },
        {
          "id": "language-arts-101-l13-c4",
          "title": "Your Response",
          "kind": "practice",
          "content": "Now it's your turn to share your thoughts about the story! Write a paragraph that answers the question: 'What does this story teach us about failure?' To help you organize your response, use the PEE method. First, start with your Point by clearly stating your claim about what you believe the story teaches. Next, include some Evidence by quoting a specific part of the story that supports your claim. Finally, provide an Explanation of how that evidence connects to your point, explaining why it is important. This exercise will not only help you practice expressing your ideas clearly but also teach you how to support your opinions with evidence from the text. Remember, everyone experiences failure at some point, and understanding it can help us grow and learn!"
        }
      ],
      "flashcards": [
        {
          "id": "language-arts-101-l13-f1",
          "front": "What is the theme of 'The Lost Kite'?",
          "back": "Setbacks can be opportunities to learn and improve. Maya turns her failure into a chance to build a better design."
        },
        {
          "id": "language-arts-101-l13-f2",
          "front": "What type of conflict does Maya face?",
          "back": "Person vs nature — the wind destroys her kite. She also shows person vs self as she chooses persistence over disappointment."
        },
        {
          "id": "language-arts-101-l13-f3",
          "front": "What makes a good critical response paragraph?",
          "back": "A claim (your interpretation), evidence (a quote or detail from the text), and explanation (how the evidence supports your claim)."
        },
        {
          "id": "language-arts-101-l13-f4",
          "front": "How do you find the theme of a short story?",
          "back": "Ask: What challenge did the character face? How did they change? What lesson can the reader take away?"
        }
      ],
      "learningAids": [
        {
          "id": "language-arts-101-l13-a1",
          "type": "image",
          "title": "Story Analysis Graphic",
          "content": "A filled-in story map for 'The Lost Kite' showing character, setting, conflict, climax, resolution, and theme in a visual organizer."
        },
        {
          "id": "language-arts-101-l13-a2",
          "type": "practice",
          "title": "Write Your Own Ending",
          "content": "Rewrite the resolution: what if Maya gave up? How would the theme change? Write two sentences for the new ending and identify the new theme."
        }
      ]
    },
    {
      "id": "language-arts-101-l14",
      "title": "Language Arts Coaching Clinic",
      "type": "interactive",
      "duration": 13,
      "objectives": [
        "Identify personal writing and reading weaknesses",
        "Apply targeted improvement strategies"
      ],
      "interactiveActivities": [
        {
          "id": "language-arts-101-l14-ia1",
          "type": "matching_pairs",
          "title": "Common Writing Errors and Fixes",
          "description": "Match each writing problem to its most effective fix.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Paragraphs have no topic sentence"
              },
              {
                "id": "l2",
                "label": "Writing sounds choppy — all short simple sentences"
              },
              {
                "id": "l3",
                "label": "The response only states opinions with no evidence"
              },
              {
                "id": "l4",
                "label": "Vocabulary is repetitive — 'good' and 'nice' used constantly"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Start each paragraph with a clear sentence that states the main point"
              },
              {
                "id": "r2",
                "label": "Combine sentences using conjunctions, or vary sentence starters"
              },
              {
                "id": "r3",
                "label": "Add quotes or specific details from the text using PEE structure"
              },
              {
                "id": "r4",
                "label": "Use a thesaurus to find precise synonyms: excellent, generous, thoughtful"
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
              },
              {
                "leftId": "l4",
                "rightId": "r4"
              }
            ]
          }
        }
      ],
      "chunks": [
        {
          "id": "language-arts-101-l14-c1",
          "title": "Target Your Weakness",
          "kind": "recap",
          "content": "As we continue to develop our language arts skills, it's essential to identify some common challenges that many students encounter. These challenges can include: 1) Confusing the main idea of a text with the supporting details that help explain it; 2) Writing sentence fragments, which are incomplete thoughts, or run-on sentences, which are too long and confusing; 3) Sharing opinions without backing them up with facts or evidence; 4) Having difficulty telling the difference between the theme, which is the underlying message of a story, and the topic, which is simply what the story is about; and 5) Using a limited range of vocabulary in our writing, which can make our work less engaging. To make progress, take a moment to think about which of these challenges feels the most significant for you. Once you've identified your biggest gap, focus on practicing that specific area. Remember, targeted practice—working on one specific skill at a time—can be much more effective than trying to review everything at once. This focused approach will help you build confidence and improve your language arts abilities more quickly."
        }
      ],
      "learningAids": [
        {
          "id": "language-arts-101-l14-a1",
          "type": "mnemonic",
          "title": "Self-Assessment Checklist",
          "content": "Rate yourself 1-5 on: Main Idea, Vocabulary, Sentence Structure, Paragraph Writing, Story Analysis. Focus this week on your lowest-rated skill."
        }
      ]
    },
    {
      "id": "language-arts-101-l15",
      "title": "Language Arts Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "language-arts-101-l15-q1",
          "text": "Read: 'Despite the team's best efforts, the project was a fiasco — nothing went as planned, and the client was furious.' What does 'fiasco' mean?",
          "skillId": "language-arts-101-skill-vocabulary",
          "options": [
            {
              "id": "a",
              "text": "A great success"
            },
            {
              "id": "b",
              "text": "A complete failure or disaster"
            },
            {
              "id": "c",
              "text": "A minor inconvenience"
            },
            {
              "id": "d",
              "text": "A creative solution"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Context clues: 'nothing went as planned' and 'the client was furious' both indicate fiasco means a complete failure or disaster."
        },
        {
          "id": "language-arts-101-l15-q2",
          "text": "Which statement correctly identifies a theme (not just a topic)?",
          "skillId": "language-arts-101-skill-story-elements",
          "options": [
            {
              "id": "a",
              "text": "Friendship"
            },
            {
              "id": "b",
              "text": "The story is about a dog"
            },
            {
              "id": "c",
              "text": "True friends support each other even when it is difficult"
            },
            {
              "id": "d",
              "text": "Loyalty and trust"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A theme is a complete statement about life. 'Friendship,' 'loyalty,' and 'a dog' are topics or subjects, not themes."
        },
        {
          "id": "language-arts-101-l15-q3",
          "text": "Which revision MOST improves this sentence? 'The sunset was nice and the sky was nice.'",
          "skillId": "language-arts-101-skill-sentences",
          "options": [
            {
              "id": "a",
              "text": "The sunset was very nice and the sky was very nice."
            },
            {
              "id": "b",
              "text": "The sunset blazed orange and pink across the evening sky."
            },
            {
              "id": "c",
              "text": "The sunset was nice. The sky was nice."
            },
            {
              "id": "d",
              "text": "Nice sunset, nice sky."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Option B replaces the vague, repetitive word 'nice' with vivid, specific descriptive language that paints a picture."
        },
        {
          "id": "language-arts-101-l15-q4",
          "text": "What is the BEST way to begin a conclusion paragraph in an essay?",
          "skillId": "language-arts-101-skill-paragraphs",
          "options": [
            {
              "id": "a",
              "text": "Introduce a completely new argument"
            },
            {
              "id": "b",
              "text": "Restate the thesis in different words and summarize key points"
            },
            {
              "id": "c",
              "text": "Copy the introduction word for word"
            },
            {
              "id": "d",
              "text": "Ask a series of questions"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A conclusion restates the main argument (thesis) in fresh words and briefly summarizes the key points, leaving the reader with a clear takeaway."
        }
      ],
      "interactiveActivities": [
        {
          "id": "language-arts-101-l15-ia1",
          "type": "drag_and_drop",
          "title": "Story Element Sort",
          "description": "Place each detail from 'The Lost Kite' into the correct story element category.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "targets": [
              {
                "id": "character",
                "label": "Character"
              },
              {
                "id": "setting",
                "label": "Setting"
              },
              {
                "id": "conflict",
                "label": "Conflict"
              },
              {
                "id": "theme",
                "label": "Theme"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Maya — creative and persistent",
                "correctTargetId": "character"
              },
              {
                "id": "d2",
                "label": "A windy day in Maya's neighborhood",
                "correctTargetId": "setting"
              },
              {
                "id": "d3",
                "label": "The wind destroys her handmade kite",
                "correctTargetId": "conflict"
              },
              {
                "id": "d4",
                "label": "Setbacks are opportunities to learn and improve",
                "correctTargetId": "theme"
              }
            ]
          }
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
            "pointsEach": 1,
            "bloomsLevels": [
              2,
              3,
              4
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 0,
          "medium": 2,
          "hard": 2
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "language-arts-101-l15-a1",
          "type": "mnemonic",
          "title": "Vivid Writing Rule",
          "content": "Replace vague words (good, nice, bad, thing) with precise ones. Show, don't tell: instead of 'She was sad,' write 'Tears blurred her vision as she turned away.'"
        }
      ]
    }
  ]
};
