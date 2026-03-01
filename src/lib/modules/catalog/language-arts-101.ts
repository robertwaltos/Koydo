import type { LearningModule } from "@/lib/modules/types";

export const LanguageArts101Module: LearningModule = {
  id: "language-arts-101",
  title: "Language Arts Foundations",
  description: "Build reading, writing, speaking, and comprehension skills with age-appropriate practice.",
  subject: "Language Arts",
  tags: ["core", "curriculum", "interactive"],
  minAge: 7,
  maxAge: 18,
  version: "2.0.0",
  learningObjectives: [
    "Identify the main idea and supporting details in a passage",
    "Use context clues to determine the meaning of unfamiliar words",
    "Write well-structured paragraphs with a topic sentence, details, and conclusion",
    "Identify story elements: character, setting, plot, conflict, and theme",
    "Apply grammar and punctuation rules in writing"
  ],
  lessons: [
    {
      id: "language-arts-101-l01",
      title: "Reading for Main Idea",
      type: "video",
      duration: 10,
      objectives: ["Distinguish the main idea from supporting details", "Summarize a paragraph in one sentence"],
      chunks: [
        {
          id: "language-arts-101-l01-c1",
          title: "What Is the Main Idea?",
          kind: "intro",
          content: "The main idea is the most important point the author wants you to understand. It answers the question: 'What is this passage mostly about?' Everything else in the paragraph — facts, examples, descriptions — are supporting details that explain or prove the main idea."
        },
        {
          id: "language-arts-101-l01-c2",
          title: "Finding the Main Idea",
          kind: "concept",
          content: "The main idea is often stated in the first or last sentence of a paragraph (the topic sentence). Sometimes it is implied and you must figure it out from the details. Strategy: read the whole paragraph, then ask yourself 'What is the one big idea all the details support?'"
        },
        {
          id: "language-arts-101-l01-c3",
          title: "Worked Example",
          kind: "example",
          content: "Read: 'Honeybees are essential to agriculture. They pollinate about one-third of the food we eat, including apples, almonds, and blueberries. Without bees, many crops would fail.' The main idea is 'Honeybees are essential to agriculture.' The other sentences are supporting details that explain why."
        },
        {
          id: "language-arts-101-l01-c4",
          title: "Try It Yourself",
          kind: "practice",
          content: "Read a paragraph from a book or article. Underline the sentence you think is the main idea. Then list two supporting details. Check: do the details explain or prove your main idea sentence?"
        }
      ],
      flashcards: [
        { id: "language-arts-101-l01-f1", front: "What is a main idea?", back: "The most important point of a passage — what the text is mostly about. All supporting details connect to it." },
        { id: "language-arts-101-l01-f2", front: "What is a supporting detail?", back: "A fact, example, reason, or description that explains, proves, or illustrates the main idea." },
        { id: "language-arts-101-l01-f3", front: "Where is the main idea usually found?", back: "Often in the first sentence (topic sentence) or last sentence of a paragraph. Sometimes it is implied and must be inferred." },
        { id: "language-arts-101-l01-f4", front: "How do you summarize a paragraph?", back: "State the main idea in your own words in one sentence. Leave out minor details — keep only the core message." }
      ],
      learningAids: [
        { id: "language-arts-101-l01-a1", type: "image", title: "Main Idea Umbrella", content: "A visual diagram showing a main idea as an umbrella covering three supporting details underneath." },
        { id: "language-arts-101-l01-a2", type: "animation", title: "Finding the Main Idea", content: "Animation highlighting the topic sentence in a paragraph as it is read aloud, then dimming the supporting details." }
      ]
    },
    {
      id: "language-arts-101-l02",
      title: "Context Clues and Vocabulary",
      type: "interactive",
      duration: 12,
      objectives: ["Use four types of context clues to determine word meaning", "Build vocabulary through reading"],
      interactiveActivities: [
        {
          id: "language-arts-101-l02-ia1",
          type: "sorting_buckets",
          title: "Type of Context Clue",
          description: "Classify each example by the type of context clue used.",
          estimatedMinutes: 8,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "definition", label: "Definition clue (meaning given directly)" },
              { id: "example", label: "Example clue (examples explain the word)" },
              { id: "contrast", label: "Contrast clue (opposite meaning given)" }
            ],
            items: [
              { id: "i1", label: "'The arid, or extremely dry, desert gets little rain.'", correctBucketId: "definition" },
              { id: "i2", label: "'She felt elated — unlike her brother, who was miserable.'", correctBucketId: "contrast" },
              { id: "i3", label: "'Nocturnal animals, such as owls and bats, are active at night.'", correctBucketId: "example" },
              { id: "i4", label: "'A habitat is the natural home of an animal or plant.'", correctBucketId: "definition" },
              { id: "i5", label: "'While the villain was cruel, the hero was compassionate.'", correctBucketId: "contrast" },
              { id: "i6", label: "'Reptiles like snakes, lizards, and turtles are cold-blooded.'", correctBucketId: "example" }
            ]
          }
        }
      ],
      chunks: [
        {
          id: "language-arts-101-l02-c1",
          title: "What Are Context Clues?",
          kind: "concept",
          content: "Context clues are hints in the surrounding text that help you figure out an unfamiliar word. Four common types: Definition (the meaning is stated directly), Example (examples illustrate the word), Contrast (an opposite is given), and Inference (you combine clues from the whole sentence)."
        },
        {
          id: "language-arts-101-l02-c2",
          title: "Signal Words",
          kind: "concept",
          content: "Look for signal words. Definition clues: 'means,' 'is defined as,' 'or,' 'also known as.' Example clues: 'such as,' 'for example,' 'including,' 'like.' Contrast clues: 'but,' 'however,' 'unlike,' 'while,' 'instead of.' These words tell you what type of clue to expect."
        }
      ],
      learningAids: [
        { id: "language-arts-101-l02-a1", type: "practice", title: "Context Clue Detective", content: "Read each sentence and identify the unfamiliar word, the type of clue, and the word's meaning: 1) 'The benevolent king, unlike the tyrant before him, was kind to all.' 2) 'Precipitation, such as rain, snow, and hail, is part of the water cycle.'" }
      ]
    },
    {
      id: "language-arts-101-l03",
      title: "Checkpoint: Reading Comprehension",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "language-arts-101-l03-q1",
          text: "Read: 'Many animals migrate to survive winter. Birds fly south for warmer weather. Whales travel to tropical waters to give birth. Caribou move to lower elevations to find food.' What is the main idea?",
          skillId: "language-arts-101-skill-main-idea",
          options: [
            { id: "a", text: "Birds fly south in winter" },
            { id: "b", text: "Many animals migrate to survive winter" },
            { id: "c", text: "Whales travel to tropical waters" },
            { id: "d", text: "Caribou move to lower elevations" }
          ],
          correctOptionId: "b",
          explanation: "The first sentence states the main idea. The other sentences are supporting details giving specific examples of animal migration."
        },
        {
          id: "language-arts-101-l03-q2",
          text: "In the sentence 'The garrulous parrot never stopped talking,' what does 'garrulous' most likely mean?",
          skillId: "language-arts-101-skill-vocabulary",
          options: [
            { id: "a", text: "Colorful" },
            { id: "b", text: "Quiet" },
            { id: "c", text: "Very talkative" },
            { id: "d", text: "Dangerous" }
          ],
          correctOptionId: "c",
          explanation: "The clue 'never stopped talking' tells you garrulous means very talkative. This is an inference context clue."
        },
        {
          id: "language-arts-101-l03-q3",
          text: "Which is a supporting detail, NOT a main idea?",
          skillId: "language-arts-101-skill-main-idea",
          options: [
            { id: "a", text: "Exercise is important for good health" },
            { id: "b", text: "Running strengthens the heart and lungs" },
            { id: "c", text: "Eating well helps your body function properly" },
            { id: "d", text: "Sleep is essential for physical recovery" }
          ],
          correctOptionId: "b",
          explanation: "'Running strengthens the heart and lungs' is a specific detail about one type of exercise. The others are broad enough to be main ideas."
        },
        {
          id: "language-arts-101-l03-q4",
          text: "Which signal words indicate a contrast context clue?",
          skillId: "language-arts-101-skill-vocabulary",
          options: [
            { id: "a", text: "such as, for example, including" },
            { id: "b", text: "means, is defined as, also known as" },
            { id: "c", text: "but, however, unlike, while" },
            { id: "d", text: "because, since, therefore" }
          ],
          correctOptionId: "c",
          explanation: "Contrast clue signal words: 'but,' 'however,' 'unlike,' 'while,' 'instead of.' They indicate an opposite meaning."
        }
      ],
      interactiveActivities: [
        {
          id: "language-arts-101-l03-ia1",
          type: "matching_pairs",
          title: "Main Idea or Detail?",
          description: "Match each statement to whether it is a main idea or supporting detail.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            left: [
              { id: "l1", label: "Dogs make wonderful family pets" },
              { id: "l2", label: "Golden retrievers are gentle with children" },
              { id: "l3", label: "Dogs can be trained to follow commands" }
            ],
            right: [
              { id: "r1", label: "Main idea (broad claim)" },
              { id: "r2", label: "Supporting detail (specific example)" },
              { id: "r3", label: "Supporting detail (specific fact)" }
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" }
            ]
          }
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [1, 2, 3] }],
        difficultyDistribution: { easy: 1, medium: 2, hard: 1 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.75
      },
      learningAids: [
        { id: "language-arts-101-l03-a1", type: "mnemonic", title: "Main Idea Check", content: "Ask: 'Does every detail in this paragraph connect back to this one sentence?' If yes, you found the main idea." }
      ]
    },
    {
      id: "language-arts-101-l04",
      title: "Writing Strong Sentences",
      type: "video",
      duration: 11,
      objectives: ["Write complete sentences with a subject and predicate", "Vary sentence structure for clarity and interest"],
      chunks: [
        {
          id: "language-arts-101-l04-c1",
          title: "What Makes a Complete Sentence?",
          kind: "intro",
          content: "A complete sentence has two essential parts: a subject (who or what the sentence is about) and a predicate (what the subject does or is). 'The dog barked loudly.' Subject: The dog. Predicate: barked loudly. Fragments like 'Running down the street' lack a subject or predicate."
        },
        {
          id: "language-arts-101-l04-c2",
          title: "Simple, Compound, and Complex Sentences",
          kind: "concept",
          content: "Simple: one independent clause ('The rain fell.'). Compound: two independent clauses joined by a conjunction ('The rain fell, and the flowers bloomed.'). Complex: one independent + one dependent clause ('Although the rain fell, we played outside.'). Mixing these types makes writing more interesting."
        },
        {
          id: "language-arts-101-l04-c3",
          title: "Avoiding Run-ons and Fragments",
          kind: "concept",
          content: "A run-on smashes two sentences together without proper punctuation: 'I like pizza I eat it every day.' Fix it with a period, semicolon, or conjunction: 'I like pizza. I eat it every day.' or 'I like pizza, so I eat it every day.' A fragment is missing a subject or verb: 'Because it was raining.' Fix: 'We stayed inside because it was raining.'"
        },
        {
          id: "language-arts-101-l04-c4",
          title: "Sentence Starters for Variety",
          kind: "practice",
          content: "Instead of starting every sentence with 'I' or 'The,' try: a time word ('Yesterday, ...'), a prepositional phrase ('Under the old bridge, ...'), an -ing word ('Racing to the finish, ...'), or a transition ('However, ...'). Rewrite three sentences from your recent writing using different starters."
        }
      ],
      flashcards: [
        { id: "language-arts-101-l04-f1", front: "What are the two parts of a complete sentence?", back: "Subject (who or what) and predicate (what the subject does or is). Both are required." },
        { id: "language-arts-101-l04-f2", front: "What is the difference between a run-on and a fragment?", back: "A run-on joins two complete sentences without proper punctuation. A fragment is missing a subject, verb, or complete thought." },
        { id: "language-arts-101-l04-f3", front: "What makes a sentence compound?", back: "Two independent clauses joined by a coordinating conjunction (FANBOYS: for, and, nor, but, or, yet, so) or a semicolon." },
        { id: "language-arts-101-l04-f4", front: "What makes a sentence complex?", back: "An independent clause + a dependent clause, often connected by a subordinating conjunction (because, although, when, if, while)." }
      ],
      learningAids: [
        { id: "language-arts-101-l04-a1", type: "image", title: "Sentence Types Chart", content: "Visual chart showing simple, compound, and complex sentences with color-coded independent and dependent clauses." }
      ]
    },
    {
      id: "language-arts-101-l05",
      title: "Paragraph Building Workshop",
      type: "interactive",
      duration: 13,
      objectives: ["Write a paragraph with a topic sentence, supporting details, and concluding sentence", "Organize ideas in logical order"],
      interactiveActivities: [
        {
          id: "language-arts-101-l05-ia1",
          type: "drag_and_drop",
          title: "Build a Paragraph",
          description: "Place each sentence in the correct position to form a well-organized paragraph.",
          estimatedMinutes: 8,
          difficultyLevel: "medium",
          data: {
            targets: [
              { id: "topic", label: "Topic Sentence" },
              { id: "detail1", label: "Supporting Detail 1" },
              { id: "detail2", label: "Supporting Detail 2" },
              { id: "conclusion", label: "Concluding Sentence" }
            ],
            draggables: [
              { id: "d1", label: "In conclusion, regular reading builds a stronger mind and a richer vocabulary.", correctTargetId: "conclusion" },
              { id: "d2", label: "Reading every day is one of the best habits a student can develop.", correctTargetId: "topic" },
              { id: "d3", label: "Studies show that daily readers score higher on comprehension tests.", correctTargetId: "detail1" },
              { id: "d4", label: "Reading also exposes students to new words, improving their vocabulary over time.", correctTargetId: "detail2" }
            ]
          }
        }
      ],
      chunks: [
        {
          id: "language-arts-101-l05-c1",
          title: "The Paragraph Sandwich",
          kind: "concept",
          content: "Think of a paragraph like a sandwich. The top bun is the topic sentence (main idea). The fillings are supporting details (facts, examples, explanations). The bottom bun is the concluding sentence (wraps up the idea). Without any layer, the paragraph feels incomplete."
        },
        {
          id: "language-arts-101-l05-c2",
          title: "Transitions Connect Ideas",
          kind: "concept",
          content: "Transitions are words that link sentences smoothly: 'First,' 'Next,' 'In addition,' 'For example,' 'However,' 'Finally,' 'In conclusion.' Without transitions, writing feels choppy. With them, ideas flow logically from one to the next."
        }
      ],
      learningAids: [
        { id: "language-arts-101-l05-a1", type: "animation", title: "Paragraph Assembly", content: "Animated demonstration of building a paragraph: topic sentence appears first, then details slide into place with transition words, and the concluding sentence closes it out." }
      ]
    },
    {
      id: "language-arts-101-l06",
      title: "Checkpoint: Writing Basics",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "language-arts-101-l06-q1",
          text: "Which sentence is a fragment?",
          skillId: "language-arts-101-skill-sentences",
          options: [
            { id: "a", text: "The cat slept on the windowsill." },
            { id: "b", text: "Running through the park on a sunny day." },
            { id: "c", text: "She quickly finished her homework." },
            { id: "d", text: "The storm passed, and the sky cleared." }
          ],
          correctOptionId: "b",
          explanation: "'Running through the park on a sunny day' has no subject performing the action and no complete predicate. It is a fragment."
        },
        {
          id: "language-arts-101-l06-q2",
          text: "What is the purpose of a topic sentence?",
          skillId: "language-arts-101-skill-paragraphs",
          options: [
            { id: "a", text: "To provide a specific detail or example" },
            { id: "b", text: "To state the main idea of the paragraph" },
            { id: "c", text: "To conclude the paragraph" },
            { id: "d", text: "To introduce the next paragraph" }
          ],
          correctOptionId: "b",
          explanation: "The topic sentence states the main idea. All other sentences in the paragraph should support this central claim."
        },
        {
          id: "language-arts-101-l06-q3",
          text: "Which is a compound sentence?",
          skillId: "language-arts-101-skill-sentences",
          options: [
            { id: "a", text: "The bird sang." },
            { id: "b", text: "Because it was cold, she wore a jacket." },
            { id: "c", text: "The bird sang, and the squirrel listened." },
            { id: "d", text: "She wore a warm jacket to school." }
          ],
          correctOptionId: "c",
          explanation: "A compound sentence has two independent clauses joined by a conjunction. 'The bird sang' + 'and' + 'the squirrel listened.'"
        },
        {
          id: "language-arts-101-l06-q4",
          text: "Which transition word shows contrast?",
          skillId: "language-arts-101-skill-paragraphs",
          options: [
            { id: "a", text: "Furthermore" },
            { id: "b", text: "However" },
            { id: "c", text: "For example" },
            { id: "d", text: "In addition" }
          ],
          correctOptionId: "b",
          explanation: "'However' signals a contrast or opposing idea. 'Furthermore' and 'In addition' signal more of the same. 'For example' introduces an illustration."
        }
      ],
      interactiveActivities: [
        {
          id: "language-arts-101-l06-ia1",
          type: "sorting_buckets",
          title: "Sentence or Fragment?",
          description: "Sort each group of words as a complete sentence or a fragment.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "sentence", label: "Complete sentence" },
              { id: "fragment", label: "Fragment" }
            ],
            items: [
              { id: "i1", label: "The dog chased the ball across the yard.", correctBucketId: "sentence" },
              { id: "i2", label: "After the game ended.", correctBucketId: "fragment" },
              { id: "i3", label: "Swimming in the deep blue ocean.", correctBucketId: "fragment" },
              { id: "i4", label: "We finished the project on time.", correctBucketId: "sentence" },
              { id: "i5", label: "Because she studied hard, she passed the test.", correctBucketId: "sentence" },
              { id: "i6", label: "Under the old wooden bridge near the river.", correctBucketId: "fragment" }
            ]
          }
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [1, 2, 3] }],
        difficultyDistribution: { easy: 1, medium: 2, hard: 1 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.75
      },
      learningAids: [
        { id: "language-arts-101-l06-a1", type: "mnemonic", title: "FANBOYS", content: "Coordinating conjunctions that join independent clauses: For, And, Nor, But, Or, Yet, So." }
      ]
    },
    {
      id: "language-arts-101-l07",
      title: "Story Elements and Theme",
      type: "video",
      duration: 12,
      objectives: ["Identify characters, setting, plot, conflict, and theme in a story", "Distinguish theme from topic"],
      chunks: [
        {
          id: "language-arts-101-l07-c1",
          title: "The Five Story Elements",
          kind: "concept",
          content: "Every story has five core elements: Characters (who the story is about), Setting (where and when), Plot (the sequence of events), Conflict (the problem or challenge), and Theme (the deeper message or lesson). Understanding these elements helps you analyze any story."
        },
        {
          id: "language-arts-101-l07-c2",
          title: "Plot Structure",
          kind: "concept",
          content: "Most plots follow a pattern: Exposition (introduces characters and setting) → Rising Action (problems and complications build) → Climax (the turning point or most intense moment) → Falling Action (events after the climax) → Resolution (the problem is solved). This is sometimes called Freytag's Pyramid."
        },
        {
          id: "language-arts-101-l07-c3",
          title: "Theme vs Topic",
          kind: "concept",
          content: "The topic is what the story is about in one word (friendship, courage, jealousy). The theme is a complete statement about that topic — the lesson or message. Topic: courage. Theme: 'True courage means acting despite fear, not the absence of fear.' The theme is always a sentence, not a single word."
        },
        {
          id: "language-arts-101-l07-c4",
          title: "Finding the Theme",
          kind: "example",
          content: "In 'The Tortoise and the Hare,' the topic is competition. The theme is 'Slow and steady effort can overcome natural talent when talent becomes overconfident.' You find the theme by asking: 'What did the main character learn?' or 'What is the author trying to teach the reader?'"
        }
      ],
      flashcards: [
        { id: "language-arts-101-l07-f1", front: "What is the climax of a story?", back: "The turning point — the most intense or exciting moment where the main conflict reaches its peak." },
        { id: "language-arts-101-l07-f2", front: "What is the difference between theme and topic?", back: "Topic is one word (e.g., friendship). Theme is a complete message about that topic (e.g., 'True friends stand by you in difficult times')." },
        { id: "language-arts-101-l07-f3", front: "What are the five story elements?", back: "Characters, Setting, Plot, Conflict, and Theme." },
        { id: "language-arts-101-l07-f4", front: "What is conflict in a story?", back: "The problem or struggle the character faces. Types: person vs person, person vs nature, person vs self, person vs society." }
      ],
      learningAids: [
        { id: "language-arts-101-l07-a1", type: "practice", title: "Story Element Map", content: "Pick a story you know well. Fill in: Characters, Setting (where/when), Conflict (main problem), Climax (turning point), Resolution (how it ends), Theme (the lesson)." }
      ]
    },
    {
      id: "language-arts-101-l08",
      title: "Peer Feedback Activity",
      type: "interactive",
      duration: 10,
      objectives: ["Give constructive feedback on writing", "Revise writing based on feedback"],
      interactiveActivities: [
        {
          id: "language-arts-101-l08-ia1",
          type: "matching_pairs",
          title: "Feedback That Helps",
          description: "Match each weak feedback comment to a stronger, more helpful version.",
          estimatedMinutes: 7,
          difficultyLevel: "easy",
          data: {
            left: [
              { id: "l1", label: "'It's good.'" },
              { id: "l2", label: "'I don't like your ending.'" },
              { id: "l3", label: "'You have mistakes.'" }
            ],
            right: [
              { id: "r1", label: "'Your opening sentence hooks the reader — the detail about the storm was vivid.'" },
              { id: "r2", label: "'The ending feels rushed. Could you add a sentence showing how the character felt?'" },
              { id: "r3", label: "'Check paragraph 2 — there are two run-on sentences that need periods or conjunctions.'" }
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" }
            ]
          }
        }
      ],
      chunks: [
        {
          id: "language-arts-101-l08-c1",
          title: "The Revision Process",
          kind: "concept",
          content: "Good writers revise. Revision means re-seeing your work. Three passes: 1) Content — Is the main idea clear? Are details relevant? 2) Organization — Does it flow logically with transitions? 3) Conventions — Spelling, grammar, punctuation. Tackle one pass at a time for best results."
        }
      ],
      learningAids: [
        { id: "language-arts-101-l08-a1", type: "mnemonic", title: "ARMS Revision", content: "Add details, Remove unnecessary parts, Move sentences for better flow, Substitute weak words with stronger ones." }
      ]
    },
    {
      id: "language-arts-101-l09",
      title: "Review: Language Skills",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "language-arts-101-l09-q1",
          text: "What is the climax of a story?",
          skillId: "language-arts-101-skill-story-elements",
          options: [
            { id: "a", text: "The introduction of the characters" },
            { id: "b", text: "The most intense moment when the conflict reaches its peak" },
            { id: "c", text: "The resolution of the problem" },
            { id: "d", text: "The background information at the beginning" }
          ],
          correctOptionId: "b",
          explanation: "The climax is the turning point — the moment of highest tension where the outcome of the conflict is decided."
        },
        {
          id: "language-arts-101-l09-q2",
          text: "Which is the best topic sentence for a paragraph about the benefits of school gardens?",
          skillId: "language-arts-101-skill-paragraphs",
          options: [
            { id: "a", text: "Gardens have flowers and vegetables." },
            { id: "b", text: "School gardens provide hands-on learning while teaching responsibility." },
            { id: "c", text: "My school has a big garden." },
            { id: "d", text: "Students should water plants every day." }
          ],
          correctOptionId: "b",
          explanation: "A good topic sentence makes a clear claim that details can support. Option B states a benefit that can be explained with examples."
        },
        {
          id: "language-arts-101-l09-q3",
          text: "In 'The frugal shopper compared prices carefully, unlike her extravagant friend,' what does 'frugal' mean?",
          skillId: "language-arts-101-skill-vocabulary",
          options: [
            { id: "a", text: "Wasteful" },
            { id: "b", text: "Careful with money" },
            { id: "c", text: "Angry" },
            { id: "d", text: "Fast" }
          ],
          correctOptionId: "b",
          explanation: "The contrast clue 'unlike her extravagant friend' tells you frugal is the opposite of extravagant (spending freely). Frugal = careful with money."
        },
        {
          id: "language-arts-101-l09-q4",
          text: "What type of conflict is shown when a character struggles with whether to tell the truth?",
          skillId: "language-arts-101-skill-story-elements",
          options: [
            { id: "a", text: "Person vs person" },
            { id: "b", text: "Person vs nature" },
            { id: "c", text: "Person vs self" },
            { id: "d", text: "Person vs society" }
          ],
          correctOptionId: "c",
          explanation: "An internal struggle with one's own feelings, conscience, or decisions is 'person vs self' conflict."
        }
      ],
      interactiveActivities: [
        {
          id: "language-arts-101-l09-ia1",
          type: "matching_pairs",
          title: "Plot Structure",
          description: "Match each plot element to its definition.",
          estimatedMinutes: 5,
          difficultyLevel: "medium",
          data: {
            left: [
              { id: "l1", label: "Exposition" },
              { id: "l2", label: "Rising Action" },
              { id: "l3", label: "Climax" },
              { id: "l4", label: "Resolution" }
            ],
            right: [
              { id: "r1", label: "Introduces characters, setting, and situation" },
              { id: "r2", label: "Complications build toward the main conflict" },
              { id: "r3", label: "The turning point of highest tension" },
              { id: "r4", label: "The conflict is resolved and the story concludes" }
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" },
              { leftId: "l4", rightId: "r4" }
            ]
          }
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [1, 2, 3] }],
        difficultyDistribution: { easy: 1, medium: 2, hard: 1 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.75
      },
      learningAids: [
        { id: "language-arts-101-l09-a1", type: "mnemonic", title: "Plot Mountain", content: "Draw a mountain: left slope = rising action, peak = climax, right slope = falling action, flat ground left = exposition, flat ground right = resolution." }
      ]
    },
    {
      id: "language-arts-101-l10",
      title: "Mastery: Language Arts",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "language-arts-101-l10-q1",
          text: "A story's theme is best described as:",
          skillId: "language-arts-101-skill-story-elements",
          options: [
            { id: "a", text: "The setting of the story" },
            { id: "b", text: "A single word like 'friendship'" },
            { id: "c", text: "A lesson or message the author conveys, stated as a complete sentence" },
            { id: "d", text: "The sequence of events" }
          ],
          correctOptionId: "c",
          explanation: "Theme is a complete statement about life or human nature. A single word like 'friendship' is a topic, not a theme."
        },
        {
          id: "language-arts-101-l10-q2",
          text: "Fix this run-on: 'I love reading I go to the library every week.'",
          skillId: "language-arts-101-skill-sentences",
          options: [
            { id: "a", text: "I love reading, I go to the library every week." },
            { id: "b", text: "I love reading. I go to the library every week." },
            { id: "c", text: "I love reading I, go to the library every week." },
            { id: "d", text: "I love, reading I go to the library every week." }
          ],
          correctOptionId: "b",
          explanation: "Separate two independent clauses with a period. Option A is a comma splice (still a run-on). Options C and D have incorrect comma placement."
        },
        {
          id: "language-arts-101-l10-q3",
          text: "Read: 'The teacher was impressed by the student's meticulous notes — every detail was organized perfectly.' What does 'meticulous' mean?",
          skillId: "language-arts-101-skill-vocabulary",
          options: [
            { id: "a", text: "Sloppy" },
            { id: "b", text: "Very careful and precise" },
            { id: "c", text: "Short" },
            { id: "d", text: "Colorful" }
          ],
          correctOptionId: "b",
          explanation: "The context 'every detail was organized perfectly' tells you meticulous means very careful and precise."
        },
        {
          id: "language-arts-101-l10-q4",
          text: "Which revision tip addresses content (not mechanics)?",
          skillId: "language-arts-101-skill-paragraphs",
          options: [
            { id: "a", text: "Fix spelling errors" },
            { id: "b", text: "Add a specific example to support the main idea" },
            { id: "c", text: "Correct comma usage" },
            { id: "d", text: "Check for capitalization" }
          ],
          correctOptionId: "b",
          explanation: "Adding examples is a content revision. Spelling, commas, and capitalization are mechanics/conventions."
        }
      ],
      interactiveActivities: [
        {
          id: "language-arts-101-l10-ia1",
          type: "sorting_buckets",
          title: "Revision Categories",
          description: "Sort each revision action into Content, Organization, or Conventions.",
          estimatedMinutes: 5,
          difficultyLevel: "medium",
          data: {
            buckets: [
              { id: "content", label: "Content (ideas and details)" },
              { id: "organization", label: "Organization (structure and flow)" },
              { id: "conventions", label: "Conventions (grammar and mechanics)" }
            ],
            items: [
              { id: "i1", label: "Add a more vivid example to paragraph 2", correctBucketId: "content" },
              { id: "i2", label: "Move the conclusion to after the last supporting point", correctBucketId: "organization" },
              { id: "i3", label: "Fix the run-on sentence in the introduction", correctBucketId: "conventions" },
              { id: "i4", label: "Add a transition word between paragraphs 3 and 4", correctBucketId: "organization" },
              { id: "i5", label: "Remove a detail that does not support the main idea", correctBucketId: "content" },
              { id: "i6", label: "Correct the misspelled word in the title", correctBucketId: "conventions" }
            ]
          }
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [2, 3, 4] }],
        difficultyDistribution: { easy: 0, medium: 2, hard: 2 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.75
      },
      learningAids: [
        { id: "language-arts-101-l10-a1", type: "mnemonic", title: "Theme Finder", content: "Ask: 'What did the character learn?' + 'What does the author want ME to learn?' = the theme." }
      ]
    },
    {
      id: "language-arts-101-l11",
      title: "Applied Language Arts Challenge Studio",
      type: "interactive",
      duration: 14,
      objectives: ["Analyze a short text for main idea, vocabulary, and story elements", "Write a response paragraph using evidence from the text"],
      interactiveActivities: [
        {
          id: "language-arts-101-l11-ia1",
          type: "sorting_buckets",
          title: "Evidence or Opinion?",
          description: "Sort each statement as text evidence or personal opinion.",
          estimatedMinutes: 8,
          difficultyLevel: "medium",
          data: {
            buckets: [
              { id: "evidence", label: "Text evidence (from the passage)" },
              { id: "opinion", label: "Personal opinion (reader's view)" }
            ],
            items: [
              { id: "i1", label: "'The author states that 75% of students preferred outdoor recess.'", correctBucketId: "evidence" },
              { id: "i2", label: "'I think outdoor recess is the best part of the day.'", correctBucketId: "opinion" },
              { id: "i3", label: "'According to the passage, the character felt guilty after lying.'", correctBucketId: "evidence" },
              { id: "i4", label: "'The ending of the story was disappointing.'", correctBucketId: "opinion" },
              { id: "i5", label: "'The text mentions three benefits of recycling.'", correctBucketId: "evidence" },
              { id: "i6", label: "'Everyone should recycle more.'", correctBucketId: "opinion" }
            ]
          }
        }
      ],
      chunks: [
        {
          id: "language-arts-101-l11-c1",
          title: "Writing with Evidence",
          kind: "concept",
          content: "Strong writing uses text evidence to support claims. Follow the PEE structure: Point (state your claim), Evidence (quote or paraphrase the text), Explain (tell how the evidence supports your point). This structure keeps your argument grounded in the text rather than just opinion."
        }
      ],
      learningAids: [
        { id: "language-arts-101-l11-a1", type: "practice", title: "PEE Paragraph Practice", content: "Write a PEE paragraph answering: 'Is the main character brave or foolish?' Use at least one quote from the text as evidence." }
      ]
    },
    {
      id: "language-arts-101-l12",
      title: "Language Arts Mastery Applied Retest",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "language-arts-101-l12-q1",
          text: "Which sentence uses text evidence correctly?",
          skillId: "language-arts-101-skill-paragraphs",
          options: [
            { id: "a", text: "I think the character is brave because he seems cool." },
            { id: "b", text: "The character is brave, as shown when the author writes, 'He stepped forward despite his trembling hands.'" },
            { id: "c", text: "Everyone agrees the character is brave." },
            { id: "d", text: "Brave characters are common in stories." }
          ],
          correctOptionId: "b",
          explanation: "Option B makes a claim and supports it with a direct quote from the text. This is proper use of text evidence."
        },
        {
          id: "language-arts-101-l12-q2",
          text: "In which part of the plot does the reader first meet the characters and learn about the setting?",
          skillId: "language-arts-101-skill-story-elements",
          options: [
            { id: "a", text: "Climax" },
            { id: "b", text: "Resolution" },
            { id: "c", text: "Exposition" },
            { id: "d", text: "Falling action" }
          ],
          correctOptionId: "c",
          explanation: "Exposition is the beginning of the story where the characters, setting, and initial situation are introduced."
        },
        {
          id: "language-arts-101-l12-q3",
          text: "'Although the hike was arduous, we reached the summit.' Based on the sentence, 'arduous' most likely means:",
          skillId: "language-arts-101-skill-vocabulary",
          options: [
            { id: "a", text: "Easy" },
            { id: "b", text: "Short" },
            { id: "c", text: "Difficult and tiring" },
            { id: "d", text: "Beautiful" }
          ],
          correctOptionId: "c",
          explanation: "'Although' signals contrast. Despite the hike being arduous, they succeeded — implying it was difficult and tiring but they persevered."
        },
        {
          id: "language-arts-101-l12-q4",
          text: "Which is the best concluding sentence for a paragraph about why pets reduce stress?",
          skillId: "language-arts-101-skill-paragraphs",
          options: [
            { id: "a", text: "Dogs can learn many tricks." },
            { id: "b", text: "In conclusion, owning a pet can significantly lower stress and improve mental health." },
            { id: "c", text: "My cat is fluffy and cute." },
            { id: "d", text: "Some people are allergic to pets." }
          ],
          correctOptionId: "b",
          explanation: "A concluding sentence restates or summarizes the main idea. Option B wraps up the paragraph about pets reducing stress."
        }
      ],
      interactiveActivities: [
        {
          id: "language-arts-101-l12-ia1",
          type: "matching_pairs",
          title: "Conflict Types",
          description: "Match each scenario to the correct type of conflict.",
          estimatedMinutes: 5,
          difficultyLevel: "medium",
          data: {
            left: [
              { id: "l1", label: "A sailor battles a violent storm at sea" },
              { id: "l2", label: "Two friends argue over who should lead the group project" },
              { id: "l3", label: "A student feels torn between cheating and doing the right thing" }
            ],
            right: [
              { id: "r1", label: "Person vs Nature" },
              { id: "r2", label: "Person vs Person" },
              { id: "r3", label: "Person vs Self" }
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" }
            ]
          }
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [2, 3, 4] }],
        difficultyDistribution: { easy: 0, medium: 2, hard: 2 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.75
      },
      learningAids: [
        { id: "language-arts-101-l12-a1", type: "mnemonic", title: "PEE Structure", content: "Point (your claim) → Evidence (quote the text) → Explain (how the evidence supports your point)." }
      ]
    },
    {
      id: "language-arts-101-l13",
      title: "Language Arts Scenario Lab",
      type: "video",
      duration: 12,
      objectives: ["Analyze a complete short story using all language arts skills", "Write a critical response to literature"],
      chunks: [
        {
          id: "language-arts-101-l13-c1",
          title: "The Lost Kite: A Mini Story",
          kind: "intro",
          content: "Read this mini story: 'Maya spent three weeks building a kite from newspaper and bamboo sticks. On launch day, a gust of wind ripped it from her hands and carried it over the rooftops. She chased it for blocks, finally spotting it tangled in a tree. Instead of crying, she studied how the wind had pulled the kite apart and began planning a stronger design.'"
        },
        {
          id: "language-arts-101-l13-c2",
          title: "Analyzing the Elements",
          kind: "example",
          content: "Character: Maya (creative, persistent). Setting: her neighborhood on a windy day. Conflict: person vs nature (the wind destroys her kite). Climax: she spots the kite tangled in a tree. Resolution: instead of giving up, she plans a stronger kite. Theme: setbacks can be opportunities to learn and improve."
        },
        {
          id: "language-arts-101-l13-c3",
          title: "Vocabulary in Context",
          kind: "example",
          content: "Notice context clues: 'a gust of wind ripped it from her hands' — 'gust' means a sudden strong blast of wind (the detail 'ripped it from her hands' shows it was forceful). 'Tangled in a tree' — caught and twisted in the branches."
        },
        {
          id: "language-arts-101-l13-c4",
          title: "Your Response",
          kind: "practice",
          content: "Write a paragraph answering: 'What does this story teach about failure?' Use the PEE structure: start with your claim, include a quote from the story as evidence, then explain how it supports your point."
        }
      ],
      flashcards: [
        { id: "language-arts-101-l13-f1", front: "What is the theme of 'The Lost Kite'?", back: "Setbacks can be opportunities to learn and improve. Maya turns her failure into a chance to build a better design." },
        { id: "language-arts-101-l13-f2", front: "What type of conflict does Maya face?", back: "Person vs nature — the wind destroys her kite. She also shows person vs self as she chooses persistence over disappointment." },
        { id: "language-arts-101-l13-f3", front: "What makes a good critical response paragraph?", back: "A claim (your interpretation), evidence (a quote or detail from the text), and explanation (how the evidence supports your claim)." },
        { id: "language-arts-101-l13-f4", front: "How do you find the theme of a short story?", back: "Ask: What challenge did the character face? How did they change? What lesson can the reader take away?" }
      ],
      learningAids: [
        { id: "language-arts-101-l13-a1", type: "image", title: "Story Analysis Graphic", content: "A filled-in story map for 'The Lost Kite' showing character, setting, conflict, climax, resolution, and theme in a visual organizer." },
        { id: "language-arts-101-l13-a2", type: "practice", title: "Write Your Own Ending", content: "Rewrite the resolution: what if Maya gave up? How would the theme change? Write two sentences for the new ending and identify the new theme." }
      ]
    },
    {
      id: "language-arts-101-l14",
      title: "Language Arts Coaching Clinic",
      type: "interactive",
      duration: 13,
      objectives: ["Identify personal writing and reading weaknesses", "Apply targeted improvement strategies"],
      interactiveActivities: [
        {
          id: "language-arts-101-l14-ia1",
          type: "matching_pairs",
          title: "Common Writing Errors and Fixes",
          description: "Match each writing problem to its most effective fix.",
          estimatedMinutes: 8,
          difficultyLevel: "medium",
          data: {
            left: [
              { id: "l1", label: "Paragraphs have no topic sentence" },
              { id: "l2", label: "Writing sounds choppy — all short simple sentences" },
              { id: "l3", label: "The response only states opinions with no evidence" },
              { id: "l4", label: "Vocabulary is repetitive — 'good' and 'nice' used constantly" }
            ],
            right: [
              { id: "r1", label: "Start each paragraph with a clear sentence that states the main point" },
              { id: "r2", label: "Combine sentences using conjunctions, or vary sentence starters" },
              { id: "r3", label: "Add quotes or specific details from the text using PEE structure" },
              { id: "r4", label: "Use a thesaurus to find precise synonyms: excellent, generous, thoughtful" }
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" },
              { leftId: "l4", rightId: "r4" }
            ]
          }
        }
      ],
      chunks: [
        {
          id: "language-arts-101-l14-c1",
          title: "Target Your Weakness",
          kind: "recap",
          content: "Common language arts gaps: 1) Confusing main idea with details. 2) Writing fragments or run-ons. 3) Stating opinions without evidence. 4) Struggling to find theme vs topic. 5) Limited vocabulary in writing. Pick your biggest gap and practice it specifically — targeted practice beats general review."
        }
      ],
      learningAids: [
        { id: "language-arts-101-l14-a1", type: "mnemonic", title: "Self-Assessment Checklist", content: "Rate yourself 1-5 on: Main Idea, Vocabulary, Sentence Structure, Paragraph Writing, Story Analysis. Focus this week on your lowest-rated skill." }
      ]
    },
    {
      id: "language-arts-101-l15",
      title: "Language Arts Mastery Sprint",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "language-arts-101-l15-q1",
          text: "Read: 'Despite the team's best efforts, the project was a fiasco — nothing went as planned, and the client was furious.' What does 'fiasco' mean?",
          skillId: "language-arts-101-skill-vocabulary",
          options: [
            { id: "a", text: "A great success" },
            { id: "b", text: "A complete failure or disaster" },
            { id: "c", text: "A minor inconvenience" },
            { id: "d", text: "A creative solution" }
          ],
          correctOptionId: "b",
          explanation: "Context clues: 'nothing went as planned' and 'the client was furious' both indicate fiasco means a complete failure or disaster."
        },
        {
          id: "language-arts-101-l15-q2",
          text: "Which statement correctly identifies a theme (not just a topic)?",
          skillId: "language-arts-101-skill-story-elements",
          options: [
            { id: "a", text: "Friendship" },
            { id: "b", text: "The story is about a dog" },
            { id: "c", text: "True friends support each other even when it is difficult" },
            { id: "d", text: "Loyalty and trust" }
          ],
          correctOptionId: "c",
          explanation: "A theme is a complete statement about life. 'Friendship,' 'loyalty,' and 'a dog' are topics or subjects, not themes."
        },
        {
          id: "language-arts-101-l15-q3",
          text: "Which revision MOST improves this sentence? 'The sunset was nice and the sky was nice.'",
          skillId: "language-arts-101-skill-sentences",
          options: [
            { id: "a", text: "The sunset was very nice and the sky was very nice." },
            { id: "b", text: "The sunset blazed orange and pink across the evening sky." },
            { id: "c", text: "The sunset was nice. The sky was nice." },
            { id: "d", text: "Nice sunset, nice sky." }
          ],
          correctOptionId: "b",
          explanation: "Option B replaces the vague, repetitive word 'nice' with vivid, specific descriptive language that paints a picture."
        },
        {
          id: "language-arts-101-l15-q4",
          text: "What is the BEST way to begin a conclusion paragraph in an essay?",
          skillId: "language-arts-101-skill-paragraphs",
          options: [
            { id: "a", text: "Introduce a completely new argument" },
            { id: "b", text: "Restate the thesis in different words and summarize key points" },
            { id: "c", text: "Copy the introduction word for word" },
            { id: "d", text: "Ask a series of questions" }
          ],
          correctOptionId: "b",
          explanation: "A conclusion restates the main argument (thesis) in fresh words and briefly summarizes the key points, leaving the reader with a clear takeaway."
        }
      ],
      interactiveActivities: [
        {
          id: "language-arts-101-l15-ia1",
          type: "drag_and_drop",
          title: "Story Element Sort",
          description: "Place each detail from 'The Lost Kite' into the correct story element category.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            targets: [
              { id: "character", label: "Character" },
              { id: "setting", label: "Setting" },
              { id: "conflict", label: "Conflict" },
              { id: "theme", label: "Theme" }
            ],
            draggables: [
              { id: "d1", label: "Maya — creative and persistent", correctTargetId: "character" },
              { id: "d2", label: "A windy day in Maya's neighborhood", correctTargetId: "setting" },
              { id: "d3", label: "The wind destroys her handmade kite", correctTargetId: "conflict" },
              { id: "d4", label: "Setbacks are opportunities to learn and improve", correctTargetId: "theme" }
            ]
          }
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [2, 3, 4] }],
        difficultyDistribution: { easy: 0, medium: 2, hard: 2 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.75
      },
      learningAids: [
        { id: "language-arts-101-l15-a1", type: "mnemonic", title: "Vivid Writing Rule", content: "Replace vague words (good, nice, bad, thing) with precise ones. Show, don't tell: instead of 'She was sad,' write 'Tears blurred her vision as she turned away.'" }
      ]
    }
  ],
};
