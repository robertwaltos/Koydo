import type { LearningModule } from "@/lib/modules/types";

export const LangArts35U1ExternalModule: LearningModule = {
  "id": "lang-arts-35-u1-external",
  "title": "Reading Comprehension & Writing",
  "description": "Language Arts unit for 3–5 imported from external JSX curriculum.",
  "subject": "Language Arts",
  "tags": [
    "external-ai",
    "curriculum-import",
    "grade-35"
  ],
  "minAge": 8,
  "maxAge": 11,
  "version": "external-1.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Explain What is the Main Idea?.",
    "Explain Finding the Main Idea.",
    "Explain Supporting Details.",
    "Explain Why Text Structure Matters.",
    "Explain Structure 1: Chronological Order.",
    "Explain Structure 2: Compare & Contrast.",
    "Build baseline confidence in Reading Comprehension & Writing.",
    "Apply one core Language Arts strategy for 35."
  ],
  "gradeBand": "35",
  "metadata": {
    "source": "../External_AI_Agents/lesson_platform (1).jsx",
    "sourceUnitId": "lang-arts-35-u1",
    "sourceUnitIdCanonical": "lang-arts-35-u1",
    "sourceUnitIdRaw": "lang_arts-35-u1",
    "importedAt": "2026-02-25T02:03:30.417Z"
  },
  "external": {
    "unitOrder": 1,
    "estimatedHours": null,
    "prerequisites": []
  },
  "lessons": [
    {
      "id": "lang-arts-35-u1-1",
      "title": "Main Idea & Supporting Details (35)",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "lang-arts-35-u1-1-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Main Idea & Supporting Details (35)."
        }
      ],
      "objectives": [
        "Explain What is the Main Idea?.",
        "Explain Finding the Main Idea.",
        "Explain Supporting Details."
      ],
      "chunks": [
        {
          "id": "lang-arts-35-u1-1-chunk-1",
          "title": "What is the Main Idea?",
          "content": "The main idea is the most important point in a paragraph or text. It tells us what the entire passage is mainly about. You can think of it like an umbrella that covers all the smaller details underneath it. When you find the main idea, you understand the big picture of what the author wants to share with you. It's like the heart of the text, giving you a clear understanding of its purpose. Identifying the main idea helps you focus on what really matters in the writing, making it easier to remember and discuss. Remember, every good story or article has a main idea that ties everything together, so keep an eye out for it as you read!"
        },
        {
          "id": "lang-arts-35-u1-1-chunk-2",
          "title": "Finding the Main Idea",
          "content": "Finding the main idea of a paragraph can be made easier by following a simple three-step strategy! First, take your time to read the entire paragraph from start to finish. This will help you understand the overall message. Next, think about what almost every sentence in the paragraph is discussing. You can ask yourself, 'What is the main topic that connects all these sentences?' Finally, the answer to that question is your main idea! It's a good tip to remember that the main idea is often found in the first sentence, which is known as the topic sentence. However, sometimes it might be located elsewhere in the paragraph, so be sure to keep an open mind as you read and explore the text! This approach will help you become a better reader and understand what you are reading more deeply."
        },
        {
          "id": "lang-arts-35-u1-1-chunk-3",
          "title": "Supporting Details",
          "content": "Supporting details are important pieces of information that help us understand and believe the main idea. Think of the main idea as the big umbrella that covers everything. For example, if the main idea is 'Dogs make great pets,' we can look for supporting details that explain why this is true. Some supporting details could be: 'Dogs are loyal companions who always stick by your side,' 'They can help people with disabilities by providing assistance and support,' and 'Dogs can be trained to follow commands, which makes them easier to care for.' Each of these details adds strength to the main idea, just like the smaller parts of an umbrella are held up by the main structure above. By using supporting details, we can paint a clearer picture of why something is true or important."
        },
        {
          "id": "lang-arts-35-u1-1-chunk-4",
          "title": "Main Idea vs. Topic",
          "content": "Understanding the difference between a topic and a main idea is a key skill in reading comprehension. Let's break it down! The topic is the subject of the text, and you can usually sum it up in just one word or a short phrase. For instance, if we take the topic 'Dolphins,' we are simply naming what the text is about. However, the main idea goes a step further. It tells us what the author wants to convey about that topic, and it is expressed as a complete thought or sentence. For example, if the topic is 'Dolphins,' the main idea could be 'Dolphins are intelligent animals that communicate in complex ways.' This example illustrates that the main idea is more than just a word; it is a full sentence that provides deeper insight into the topic. Recognizing this difference will help you understand and summarize texts more effectively!"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-35-u1-1-card-1",
          "front": "Main Idea",
          "back": "The MOST IMPORTANT point the author is making about the topic"
        },
        {
          "id": "lang-arts-35-u1-1-card-2",
          "front": "Topic Sentence",
          "back": "Often the first sentence — states the main idea of a paragraph"
        },
        {
          "id": "lang-arts-35-u1-1-card-3",
          "front": "Supporting Detail",
          "back": "A fact, example, or reason that BACKS UP the main idea"
        },
        {
          "id": "lang-arts-35-u1-1-card-4",
          "front": "How to find main idea",
          "back": "Ask: 'What does ALMOST EVERY sentence talk about?'"
        },
        {
          "id": "lang-arts-35-u1-1-card-5",
          "front": "Topic vs. Main Idea",
          "back": "Topic = subject (1-2 words); Main Idea = what author says about it (sentence)"
        }
      ],
      "prompts": {
        "seedanceVideo": "Sora/Seedance 2.0 Prompt: Animated study session. A student character reads a paragraph on screen while a floating 'Main Idea Umbrella' appears above the text. Supporting detail bullets pop up beneath the umbrella one by one, visually connecting to it with dotted lines. The concept is shown with concrete examples using relatable topics (animals, sports, food). Teacher narration explains each step. Ages 8-11. Clean, modern animation style. Duration: 60 seconds.",
        "seedanceAnimation": "Lottie animation: Umbrella labeled 'Main Idea' opens at top of screen. Raindrops labeled 'Detail 1', 'Detail 2', 'Detail 3' fall and cluster beneath it. Non-fitting details (wrong details) bounce away from the umbrella. Satisfying click/pop sounds implied. 12-second loop.",
        "lessonImage": "Create a clean educational illustration for \"Main Idea & Supporting Details (35)\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Main Idea & Supporting Details (35)\" (Language Arts, grade band 35)."
      },
      "localized": {
        "title": {
          "en": "Main Idea & Supporting Details"
        },
        "concept": {
          "en": "Main Idea & Supporting Details"
        }
      },
      "external": {
        "sourceLessonId": "lang_arts-35-u1-1",
        "order": 1
      }
    },
    {
      "id": "lang-arts-35-u1-2",
      "title": "Text Structure: 5 Organizational Patterns (35)",
      "type": "interactive",
      "duration": 15,
      "interactiveActivities": [
        {
          "id": "lang-arts-35-u1-2-ia1",
          "type": "drag_and_drop",
          "title": "Text Structure: 5 Organizational Patterns (35) Learning Flow",
          "description": "Sort each action into Plan, Practice, or Reflect.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "instructions": [
            "Read each action.",
            "Choose where it belongs.",
            "Use the result as your practice plan."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Plan"
              },
              {
                "id": "practice",
                "label": "Practice"
              },
              {
                "id": "reflect",
                "label": "Reflect"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set a goal for Explain Why Text Structure Matters..",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Rewrite one sentence to improve precision and tone.",
                "correctTargetId": "practice"
              },
              {
                "id": "d3",
                "label": "Write one thing to improve before the next attempt.",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "lang-arts-35-u1-2-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Text Structure: 5 Organizational Patterns (35)."
        }
      ],
      "metadata": {
        "prompts": [
          "Explain Why Text Structure Matters.",
          "Explain Structure 1: Chronological Order.",
          "Explain Structure 2: Compare & Contrast."
        ]
      },
      "objectives": [
        "Explain Why Text Structure Matters.",
        "Explain Structure 1: Chronological Order.",
        "Explain Structure 2: Compare & Contrast."
      ],
      "chunks": [
        {
          "id": "lang-arts-35-u1-2-chunk-1",
          "title": "Why Text Structure Matters",
          "content": "Authors use different patterns to organize information in their writing. This organization is important because it helps readers like you understand and remember what you read much better! When you recognize the structure of a text, it can make your reading experience smoother and more enjoyable. In nonfiction writing, there are five main text structures that authors often use. By learning about these structures, you can boost your reading comprehension skills and make connections between different ideas more easily. Understanding how information is organized will help you become a more effective reader and thinker!"
        },
        {
          "id": "lang-arts-35-u1-2-chunk-2",
          "title": "Structure 1: Chronological Order",
          "content": "The first structure we will explore is called Chronological Order. This means that events are presented in the exact order they occur, starting from the very first event and moving all the way to the last one. To help you recognize this structure, you can look for special words known as signal words. These words include 'first,' 'then,' 'next,' 'after,' and 'finally.' They guide you through the sequence of events. For instance, if you read a biography about Martin Luther King Jr., it might start with his childhood, then move on to important moments in his life, and finish with his lasting legacy. This way, you can understand how his experiences shaped who he became over time."
        },
        {
          "id": "lang-arts-35-u1-2-chunk-3",
          "title": "Structure 2: Compare & Contrast",
          "content": "The second structure we will explore is called Compare and Contrast. This structure helps us understand how two or more things are alike and how they are different. When you are reading or writing, you can look for special words that signal comparisons. These words include 'both,' 'however,' 'similarly,' 'on the other hand,' and 'unlike.' For example, let’s compare frogs and toads. Both frogs and toads are types of amphibians, which means they can live both in water and on land. However, frogs usually prefer to live near water, where they can find food and stay moist. On the other hand, toads are often found in drier areas and have adaptations that help them survive in those environments. By using the Compare and Contrast structure, we can better understand the unique characteristics of each creature while also recognizing their similarities."
        },
        {
          "id": "lang-arts-35-u1-2-chunk-4",
          "title": "Structure 3: Cause & Effect | Structure 4: Problem & Solution",
          "content": "The third text structure we will explore is called Cause and Effect. In this structure, one event leads to another event happening. For example, if it rains, the ground gets wet. You can spot this structure by looking for special words called signal words. Some of these signal words include 'because,' which shows the reason something happened, 'as a result,' which indicates the outcome of an event, and 'therefore,' which connects the cause to its effect.\nNext, we have the Problem and Solution structure. In this type of writing, a problem is introduced, and then a solution is provided to address that problem. For instance, if a school has too many students and not enough desks, the problem is the lack of desks, and the solution might be to buy more desks or create a new classroom. You can find signal words like 'problem,' 'solution,' and 'this led to' that help you identify this structure.\nFinally, the fifth structure is Description. This structure gives detailed information about a topic, including its characteristics, examples, and other important details. For example, if we describe a dog, we might talk about its fur, size, and behavior to help the reader understand what a dog is like. Using these structures can help you organize your writing and make it clearer for your readers."
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-35-u1-2-card-1",
          "front": "Chronological Order signal words",
          "back": "first, then, next, after, finally, before, last"
        },
        {
          "id": "lang-arts-35-u1-2-card-2",
          "front": "Compare & Contrast signal words",
          "back": "both, however, similarly, unlike, in contrast, also"
        },
        {
          "id": "lang-arts-35-u1-2-card-3",
          "front": "Cause & Effect signal words",
          "back": "because, as a result, therefore, so, leads to, causes"
        },
        {
          "id": "lang-arts-35-u1-2-card-4",
          "front": "Problem & Solution signal words",
          "back": "problem, solution, one answer is, this led to"
        },
        {
          "id": "lang-arts-35-u1-2-card-5",
          "front": "5 Text Structures",
          "back": "1. Chronological  2. Compare/Contrast  3. Cause/Effect  4. Problem/Solution  5. Description"
        }
      ],
      "prompts": {
        "seedanceVideo": "Sora/Seedance 2.0 Prompt: A textbook magically transforms, reorganizing itself into different structures as they're named. For Chronological: a timeline appears. For Compare/Contrast: a Venn diagram forms. For Cause/Effect: dominoes fall. For Problem/Solution: a puzzle solves itself. Each structure is narrated and signal words flash on screen highlighted in color. Ages 9-11. Upbeat, informative. Duration: 70 seconds.",
        "seedanceAnimation": "Lottie animation: Five icons appear in sequence — calendar (chronological), Venn diagram (compare), dominoes (cause/effect), puzzle (problem/solution), magnifying glass (description). Each pulses and glows when highlighted. 10-second loop.",
        "lessonImage": "Create a clean educational illustration for \"Text Structure: 5 Organizational Patterns (35)\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Text Structure: 5 Organizational Patterns (35)\" (Language Arts, grade band 35)."
      },
      "localized": {
        "title": {
          "en": "Text Structure: 5 Organizational Patterns"
        },
        "concept": {
          "en": "Text Structure: 5 Organizational Patterns"
        }
      },
      "external": {
        "sourceLessonId": "lang_arts-35-u1-2",
        "order": 2
      }
    },
    {
      "id": "lang-arts-35-u1-external-supp-quiz",
      "title": "Reading Comprehension & Writing Supplemental Check",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "lang-arts-35-u1-external-supp-quiz-q1",
          "text": "Which option best summarizes Reading Comprehension & Writing Supplemental Check?",
          "skillId": "lang-arts-35-u1-external-skill-reading-comprehension-writing-supplemental-check-summary",
          "options": [
            {
              "id": "a",
              "text": "Build baseline confidence in Reading Comprehension & Writing."
            },
            {
              "id": "b",
              "text": "A statement with no text evidence."
            },
            {
              "id": "c",
              "text": "A summary that adds ideas not in the lesson."
            },
            {
              "id": "d",
              "text": "A response that repeats words but misses meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "lang-arts-35-u1-external-supp-quiz-q2",
          "text": "Which response shows correct application of Reading Comprehension & Writing Supplemental Check?",
          "skillId": "lang-arts-35-u1-external-skill-reading-comprehension-writing-supplemental-check-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply one core Language Arts strategy for 35."
            },
            {
              "id": "b",
              "text": "Quote text without explaining relevance."
            },
            {
              "id": "c",
              "text": "Use opinion only with no supporting detail."
            },
            {
              "id": "d",
              "text": "Change the topic instead of answering the prompt."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "lang-arts-35-u1-external-supp-quiz-q3",
          "text": "Why is review important after learning Reading Comprehension & Writing Supplemental Check?",
          "skillId": "lang-arts-35-u1-external-skill-reading-comprehension-writing-supplemental-check-review",
          "options": [
            {
              "id": "a",
              "text": "Build a short paragraph with claim, evidence, and explanation."
            },
            {
              "id": "b",
              "text": "It replaces understanding with guessing."
            },
            {
              "id": "c",
              "text": "It removes the need for future practice."
            },
            {
              "id": "d",
              "text": "It makes progress tracking impossible."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "lang-arts-35-u1-external-supp-quiz-ia1",
          "type": "matching_pairs",
          "title": "Reading Comprehension & Writing Supplemental Check Error Match",
          "description": "Match each learning signal to the strongest correction action.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Read each signal.",
            "Pick the best response.",
            "Use matches for your next quiz retry."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "I still mix up Build baseline confidence in Reading Comprehension & Writing.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Reading Comprehension & Writing Supplemental Check in notes but not in timed checks."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Review one clear example and explain it aloud."
              },
              {
                "id": "r2",
                "label": "Use a short checklist before final answer selection."
              },
              {
                "id": "r3",
                "label": "Run a short re-check under the same time constraints."
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
        "questionsPerCheck": 3,
        "totalQuestions": 3,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 3,
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
          "hard": 0
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.7
      },
      "learningAids": [
        {
          "id": "lang-arts-35-u1-external-supp-quiz-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Reading Comprehension & Writing Supplemental Check."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Build baseline confidence in Reading Comprehension & Writing.",
        "Apply one core Language Arts strategy for 35."
      ],
      "chunks": [
        {
          "id": "lang-arts-35-u1-external-supp-quiz-chunk-intro",
          "title": "Reading Comprehension & Writing Supplemental Check Overview",
          "content": "This quiz is designed to help you reinforce the core concepts you have learned in Language Arts, specifically focusing on Reading Comprehension and Writing. By taking this quiz, you will have the opportunity to review important ideas and test your understanding of the material.\nContext recap: This quiz is designed to help you reinforce the core concepts you have learned in Language Arts, specifically focusing on Reading Comprehension and Writing. By taking this quiz, you will have the opportunity to review important ideas and test your understanding of the material.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-35-u1-external-supp-quiz-chunk-recap",
          "title": "Quick Recap",
          "content": "To wrap up our lesson, take a moment to summarize one key idea that you learned today. Additionally, think about one next step you can take to further your understanding of Reading Comprehension and Writing. This reflection will help you solidify your knowledge and plan for your learning journey ahead.\nContext recap: To wrap up our lesson, take a moment to summarize one key idea that you learned today. Additionally, think about one next step you can take to further your understanding of Reading Comprehension and Writing. This reflection will help you solidify your knowledge and plan for your learning journey ahead.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-35-u1-external-supp-quiz-card-1",
          "front": "What is one key idea in Reading Comprehension & Writing?",
          "back": "Build baseline confidence in Reading Comprehension & Writing."
        },
        {
          "id": "lang-arts-35-u1-external-supp-quiz-card-2",
          "front": "How can you practice this idea?",
          "back": "Apply one core Language Arts strategy for 35."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Reading Comprehension & Writing Supplemental Check\" in \"Language Arts\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Reading Comprehension & Writing Supplemental Check\" (Language Arts, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Reading Comprehension & Writing Supplemental Check\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Reading Comprehension & Writing Supplemental Check\" (Language Arts, grade band 35)."
      },
      "external": {
        "sourceLessonId": "lang-arts-35-u1-external-supp-quiz",
        "order": 3,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-35-u1-external-supp-seq-04",
      "title": "Reading Comprehension & Writing Concept Walkthrough 4: Paragraph Structure",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-04-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Reading Comprehension & Writing Concept Walkthrough 4: Paragraph Structure."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain paragraph structure using age-appropriate vocabulary.",
        "Apply paragraph structure in one guided Language Arts task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-04-chunk-intro",
          "title": "Paragraph Structure Intro",
          "content": "In this section, you will read a prompt carefully. After reading, highlight the key words and lines that provide evidence. This will help you focus on the main ideas and important details as you prepare to respond to the prompt.\nContext recap: In this section, you will read a prompt carefully. After reading, highlight the key words and lines that provide evidence. This will help you focus on the main ideas and important details as you prepare to respond to the prompt.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-04-chunk-practice",
          "title": "Guided Practice",
          "content": "Now it's time for some guided practice! You will annotate a short passage, which means you will make notes and highlight important parts. After that, summarize the main idea of the passage in your own words. This exercise will help you practice your reading comprehension skills and reinforce what you've learned.\nContext recap: Now it's time for some guided practice! You will annotate a short passage, which means you will make notes and highlight important parts. After that, summarize the main idea of the passage in your own words. This exercise will help you practice your reading comprehension skills and reinforce what you've learned.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-04-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you work on your paragraph structure, be on the lookout for a common mistake that many students make. This mistake can affect how clearly your ideas are presented. Once you identify this error, think about how you can fix it by using specific examples or evidence from your writing. This will help make your paragraph stronger and more convincing.\nContext recap: As you work on your paragraph structure, be on the lookout for a common mistake that many students make. This mistake can affect how clearly your ideas are presented. Once you identify this error, think about how you can fix it by using specific examples or evidence from your writing. This will help make your paragraph stronger and more convincing.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-04-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to quickly review what we learned about paragraph structure. Remember, a well-structured paragraph has a clear main idea and supporting details. After this review, think about one specific area where you can improve your paragraph writing. Setting a clear goal will help you focus on making your writing even better!\nContext recap: Let's take a moment to quickly review what we learned about paragraph structure. Remember, a well-structured paragraph has a clear main idea and supporting details. After this review, think about one specific area where you can improve your paragraph writing. Setting a clear goal will help you focus on making your writing even better!",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-04-card-1",
          "front": "What is paragraph structure?",
          "back": "It is a key Language Arts idea in Reading Comprehension & Writing."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-04-card-2",
          "front": "How can I practice paragraph structure?",
          "back": "Annotate one short passage and summarize the main idea."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-04-card-3",
          "front": "What should I review next?",
          "back": "Review paragraph structure, then set one clear improvement target."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-04-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Reading Comprehension & Writing Concept Walkthrough 4: Paragraph Structure\" in \"Language Arts\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Reading Comprehension & Writing Concept Walkthrough 4: Paragraph Structure\" (Language Arts, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Reading Comprehension & Writing Concept Walkthrough 4: Paragraph Structure\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Reading Comprehension & Writing Concept Walkthrough 4: Paragraph Structure\" (Language Arts, grade band 35)."
      },
      "external": {
        "sourceLessonId": "lang-arts-35-u1-external-generated-cycle-4",
        "order": 4,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-35-u1-external-supp-seq-05",
      "title": "Reading Comprehension & Writing Guided Practice Lab 5: Evidence Based Response",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-05-ia1",
          "type": "drag_and_drop",
          "title": "Reading Comprehension & Writing Guided Practice Lab 5: Evidence Based Response Learning Flow",
          "description": "Sort each action into Plan, Practice, or Reflect.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "instructions": [
            "Read each action.",
            "Choose where it belongs.",
            "Use the result as your practice plan."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Plan"
              },
              {
                "id": "practice",
                "label": "Practice"
              },
              {
                "id": "reflect",
                "label": "Reflect"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set a goal for Explain evidence-based response using age-appropriate vocabulary..",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Rewrite one sentence to improve precision and tone.",
                "correctTargetId": "practice"
              },
              {
                "id": "d3",
                "label": "Write one thing to improve before the next attempt.",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-05-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Reading Comprehension & Writing Guided Practice Lab 5: Evidence Based Response."
        }
      ],
      "metadata": {
        "prompts": [
          "Explain evidence-based response using age-appropriate vocabulary.",
          "Apply evidence-based response in one guided Language Arts task.",
          "Identify one correction step for the next attempt."
        ],
        "generatedSupplement": true
      },
      "objectives": [
        "Explain evidence-based response using age-appropriate vocabulary.",
        "Apply evidence-based response in one guided Language Arts task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-05-chunk-intro",
          "title": "Evidence Based Response Intro",
          "content": "In this section, we will focus on creating an evidence-based response. Start by making one clear claim about the text you are discussing. Then, support your claim with specific details from the text. This approach will help you build a strong argument and show that you understand the material.\nContext recap: In this section, we will focus on creating an evidence-based response. Start by making one clear claim about the text you are discussing. Then, support your claim with specific details from the text. This approach will help you build a strong argument and show that you understand the material.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-05-chunk-practice",
          "title": "Guided Practice",
          "content": "Now it's time for some guided practice! Choose one sentence from your writing that you think could be clearer or more impactful. Rewrite that sentence to improve its precision and tone. This exercise will help you learn how to express your ideas more effectively.\nContext recap: Now it's time for some guided practice! Choose one sentence from your writing that you think could be clearer or more impactful. Rewrite that sentence to improve its precision and tone. This exercise will help you learn how to express your ideas more effectively.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-05-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you apply what you've learned about evidence-based responses, keep an eye out for a common mistake that can occur. Identifying this error is important because it can weaken your argument. Once you spot it, think about how you can correct it using evidence from your text. This will strengthen your response.\nContext recap: As you apply what you've learned about evidence-based responses, keep an eye out for a common mistake that can occur. Identifying this error is important because it can weaken your argument. Once you spot it, think about how you can correct it using evidence from your text. This will strengthen your response.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-05-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly review what we've learned about evidence-based responses. Remember, it's important to support your claims with evidence from the text. After this recap, think about one specific area where you can improve your writing. Setting a clear improvement target will help you enhance your skills.\nContext recap: Let's quickly review what we've learned about evidence-based responses. Remember, it's important to support your claims with evidence from the text. After this recap, think about one specific area where you can improve your writing. Setting a clear improvement target will help you enhance your skills.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-05-card-1",
          "front": "What is evidence-based response?",
          "back": "It is a key Language Arts idea in Reading Comprehension & Writing."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-05-card-2",
          "front": "How can I practice evidence-based response?",
          "back": "Rewrite one sentence to improve precision and tone."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-05-card-3",
          "front": "What should I review next?",
          "back": "Review evidence-based response, then set one clear improvement target."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-05-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Reading Comprehension & Writing Guided Practice Lab 5: Evidence Based Response\" in \"Language Arts\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Reading Comprehension & Writing Guided Practice Lab 5: Evidence Based Response\" (Language Arts, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Reading Comprehension & Writing Guided Practice Lab 5: Evidence Based Response\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Reading Comprehension & Writing Guided Practice Lab 5: Evidence Based Response\" (Language Arts, grade band 35)."
      },
      "external": {
        "sourceLessonId": "lang-arts-35-u1-external-generated-cycle-5",
        "order": 5,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-35-u1-external-supp-seq-06",
      "title": "Reading Comprehension & Writing Checkpoint Quiz 6: Close Reading",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-06-q1",
          "text": "Which option best summarizes Reading Comprehension & Writing Checkpoint Quiz 6: Close Reading?",
          "skillId": "lang-arts-35-u1-external-skill-reading-comprehension-writing-checkpoint-quiz-6-close-reading-summary",
          "options": [
            {
              "id": "a",
              "text": "Explain close reading using age-appropriate vocabulary."
            },
            {
              "id": "b",
              "text": "A statement with no text evidence."
            },
            {
              "id": "c",
              "text": "A summary that adds ideas not in the lesson."
            },
            {
              "id": "d",
              "text": "A response that repeats words but misses meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-06-q2",
          "text": "Which response shows correct application of Reading Comprehension & Writing Checkpoint Quiz 6: Close Reading?",
          "skillId": "lang-arts-35-u1-external-skill-reading-comprehension-writing-checkpoint-quiz-6-close-reading-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply close reading in one guided Language Arts task."
            },
            {
              "id": "b",
              "text": "Quote text without explaining relevance."
            },
            {
              "id": "c",
              "text": "Use opinion only with no supporting detail."
            },
            {
              "id": "d",
              "text": "Change the topic instead of answering the prompt."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-06-q3",
          "text": "Why is review important after learning Reading Comprehension & Writing Checkpoint Quiz 6: Close Reading?",
          "skillId": "lang-arts-35-u1-external-skill-reading-comprehension-writing-checkpoint-quiz-6-close-reading-review",
          "options": [
            {
              "id": "a",
              "text": "Build a short paragraph with claim, evidence, and explanation."
            },
            {
              "id": "b",
              "text": "It replaces understanding with guessing."
            },
            {
              "id": "c",
              "text": "It removes the need for future practice."
            },
            {
              "id": "d",
              "text": "It makes progress tracking impossible."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-06-ia1",
          "type": "matching_pairs",
          "title": "Reading Comprehension & Writing Checkpoint Quiz 6: Close Reading Error Match",
          "description": "Match each learning signal to the strongest correction action.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Read each signal.",
            "Pick the best response.",
            "Use matches for your next quiz retry."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "I still mix up Explain close reading using age-appropriate vocabulary.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Reading Comprehension & Writing Checkpoint Quiz 6: Close Reading in notes but not in timed checks."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Review one clear example and explain it aloud."
              },
              {
                "id": "r2",
                "label": "Use a short checklist before final answer selection."
              },
              {
                "id": "r3",
                "label": "Run a short re-check under the same time constraints."
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
        "questionsPerCheck": 3,
        "totalQuestions": 3,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 3,
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
          "hard": 0
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.7
      },
      "learningAids": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-06-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Reading Comprehension & Writing Checkpoint Quiz 6: Close Reading."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain close reading using age-appropriate vocabulary.",
        "Apply close reading in one guided Language Arts task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-06-chunk-intro",
          "title": "Close Reading Intro",
          "content": "As you prepare for your close reading, remember to revise your work for clarity. This means checking your grammar and ensuring that your ideas flow smoothly from one to the next. Good transitions will help your reader follow your thoughts more easily.\nContext recap: As you prepare for your close reading, remember to revise your work for clarity. This means checking your grammar and ensuring that your ideas flow smoothly from one to the next. Good transitions will help your reader follow your thoughts more easily.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-06-chunk-practice",
          "title": "Guided Practice",
          "content": "For this guided practice, try to build a short paragraph that includes a claim, supporting evidence, and an explanation. This exercise will help you practice organizing your thoughts clearly and effectively, which is an important skill in writing.\nContext recap: For this guided practice, try to build a short paragraph that includes a claim, supporting evidence, and an explanation. This exercise will help you practice organizing your thoughts clearly and effectively, which is an important skill in writing.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-06-chunk-check",
          "title": "Common Pitfall Check",
          "content": "While you are working on your close reading, be aware of a common error that can happen. Recognizing this mistake is crucial because it can affect how well you understand the text. Once you identify it, think about how you can correct it using evidence from the reading. This will help improve your comprehension.\nContext recap: While you are working on your close reading, be aware of a common error that can happen. Recognizing this mistake is crucial because it can affect how well you understand the text. Once you identify it, think about how you can correct it using evidence from the reading. This will help improve your comprehension.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-06-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review what we've learned about close reading. Remember, this skill helps you understand texts more deeply. After this recap, think about one specific area where you can improve your close reading skills. Setting a clear target will guide your practice.\nContext recap: Let's take a moment to review what we've learned about close reading. Remember, this skill helps you understand texts more deeply. After this recap, think about one specific area where you can improve your close reading skills. Setting a clear target will guide your practice.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-06-card-1",
          "front": "What is close reading?",
          "back": "It is a key Language Arts idea in Reading Comprehension & Writing."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-06-card-2",
          "front": "How can I practice close reading?",
          "back": "Build a short paragraph with claim, evidence, and explanation."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-06-card-3",
          "front": "What should I review next?",
          "back": "Review close reading, then set one clear improvement target."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-06-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Reading Comprehension & Writing Checkpoint Quiz 6: Close Reading\" in \"Language Arts\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Reading Comprehension & Writing Checkpoint Quiz 6: Close Reading\" (Language Arts, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Reading Comprehension & Writing Checkpoint Quiz 6: Close Reading\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Reading Comprehension & Writing Checkpoint Quiz 6: Close Reading\" (Language Arts, grade band 35)."
      },
      "external": {
        "sourceLessonId": "lang-arts-35-u1-external-generated-cycle-6",
        "order": 6,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-35-u1-external-supp-seq-07",
      "title": "Reading Comprehension & Writing Concept Walkthrough 7: Vocabulary In Context",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-07-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Reading Comprehension & Writing Concept Walkthrough 7: Vocabulary In Context."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain vocabulary in context using age-appropriate vocabulary.",
        "Apply vocabulary in context in one guided Language Arts task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-07-chunk-intro",
          "title": "Vocabulary In Context Intro",
          "content": "As you begin your work on vocabulary in context, start by carefully reading the prompt. After that, highlight the key words and important lines that provide evidence. This will help you focus on the most important parts of the text as you analyze its meaning.\nContext recap: As you begin your work on vocabulary in context, start by carefully reading the prompt. After that, highlight the key words and important lines that provide evidence. This will help you focus on the most important parts of the text as you analyze its meaning.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-07-chunk-practice",
          "title": "Guided Practice",
          "content": "For this practice activity, choose a short passage to annotate. As you read, take notes on the main idea and any important details. Summarizing the main idea will help you understand the text better and improve your comprehension skills.\nContext recap: For this practice activity, choose a short passage to annotate. As you read, take notes on the main idea and any important details. Summarizing the main idea will help you understand the text better and improve your comprehension skills.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-07-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you work on using vocabulary in context, be on the lookout for a common mistake that many people make. This mistake often happens when the meaning of a word is misunderstood in a sentence. To improve your understanding, try to find evidence from the text that supports the correct usage of the word. This will help you learn how to apply vocabulary more accurately in your writing.\nContext recap: As you work on using vocabulary in context, be on the lookout for a common mistake that many people make. This mistake often happens when the meaning of a word is misunderstood in a sentence. To improve your understanding, try to find evidence from the text that supports the correct usage of the word. This will help you learn how to apply vocabulary more accurately in your writing.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-07-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review what we learned about using vocabulary in context. Think about the different ways words can change meaning depending on how they are used in sentences. After this review, set a specific goal for yourself to improve your vocabulary skills. This could be learning a new word each week or practicing using words in different contexts.\nContext recap: Let's take a moment to review what we learned about using vocabulary in context. Think about the different ways words can change meaning depending on how they are used in sentences. After this review, set a specific goal for yourself to improve your vocabulary skills. This could be learning a new word each week or practicing using words in different contexts.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-07-card-1",
          "front": "What is vocabulary in context?",
          "back": "It is a key Language Arts idea in Reading Comprehension & Writing."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-07-card-2",
          "front": "How can I practice vocabulary in context?",
          "back": "Annotate one short passage and summarize the main idea."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-07-card-3",
          "front": "What should I review next?",
          "back": "Review vocabulary in context, then set one clear improvement target."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-07-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Reading Comprehension & Writing Concept Walkthrough 7: Vocabulary In Context\" in \"Language Arts\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Reading Comprehension & Writing Concept Walkthrough 7: Vocabulary In Context\" (Language Arts, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Reading Comprehension & Writing Concept Walkthrough 7: Vocabulary In Context\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Reading Comprehension & Writing Concept Walkthrough 7: Vocabulary In Context\" (Language Arts, grade band 35)."
      },
      "external": {
        "sourceLessonId": "lang-arts-35-u1-external-generated-cycle-7",
        "order": 7,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-35-u1-external-supp-seq-08",
      "title": "Reading Comprehension & Writing Guided Practice Lab 8: Sentence Revision",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-08-ia1",
          "type": "drag_and_drop",
          "title": "Reading Comprehension & Writing Guided Practice Lab 8: Sentence Revision Learning Flow",
          "description": "Sort each action into Plan, Practice, or Reflect.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "instructions": [
            "Read each action.",
            "Choose where it belongs.",
            "Use the result as your practice plan."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Plan"
              },
              {
                "id": "practice",
                "label": "Practice"
              },
              {
                "id": "reflect",
                "label": "Reflect"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set a goal for Explain sentence revision using age-appropriate vocabulary..",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Rewrite one sentence to improve precision and tone.",
                "correctTargetId": "practice"
              },
              {
                "id": "d3",
                "label": "Write one thing to improve before the next attempt.",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-08-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Reading Comprehension & Writing Guided Practice Lab 8: Sentence Revision."
        }
      ],
      "metadata": {
        "prompts": [
          "Explain sentence revision using age-appropriate vocabulary.",
          "Apply sentence revision in one guided Language Arts task.",
          "Identify one correction step for the next attempt."
        ],
        "generatedSupplement": true
      },
      "objectives": [
        "Explain sentence revision using age-appropriate vocabulary.",
        "Apply sentence revision in one guided Language Arts task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-08-chunk-intro",
          "title": "Sentence Revision Intro",
          "content": "In this section, we will focus on revising sentences to make them clearer and more effective. Start by making one strong claim in your sentence. Then, support that claim with details from the text you are working with. This approach will help you create more persuasive and well-structured sentences.\nContext recap: In this section, we will focus on revising sentences to make them clearer and more effective. Start by making one strong claim in your sentence. Then, support that claim with details from the text you are working with. This approach will help you create more persuasive and well-structured sentences.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-08-chunk-practice",
          "title": "Guided Practice",
          "content": "Now it's time for some hands-on practice! Choose one sentence that you think could be improved. Your task is to rewrite this sentence to enhance its precision and tone. Think about the words you use and how they can better convey your message. This exercise will help you become a more effective writer.\nContext recap: Now it's time for some hands-on practice! Choose one sentence that you think could be improved. Your task is to rewrite this sentence to enhance its precision and tone. Think about the words you use and how they can better convey your message.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-08-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you revise your sentences, keep an eye out for a common mistake that can occur during this process. Many writers forget to check if their revisions maintain the original meaning or if they introduce new errors. After identifying this mistake, use evidence from your text to correct it. This will strengthen your writing skills.\nContext recap: As you revise your sentences, keep an eye out for a common mistake that can occur during this process. Many writers forget to check if their revisions maintain the original meaning or if they introduce new errors. After identifying this mistake, use evidence from your text to correct it. This will strengthen your writing skills.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-08-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly recap what we learned about sentence revision. Remember to focus on clarity and the overall tone of your writing. After this recap, think about one specific area where you can improve your sentence revision skills. Setting a clear target will help you grow as a writer.\nContext recap: Let's quickly recap what we learned about sentence revision. Remember to focus on clarity and the overall tone of your writing. After this recap, think about one specific area where you can improve your sentence revision skills. Setting a clear target will help you grow as a writer.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-08-card-1",
          "front": "What is sentence revision?",
          "back": "It is a key Language Arts idea in Reading Comprehension & Writing."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-08-card-2",
          "front": "How can I practice sentence revision?",
          "back": "Rewrite one sentence to improve precision and tone."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-08-card-3",
          "front": "What should I review next?",
          "back": "Review sentence revision, then set one clear improvement target."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-08-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Reading Comprehension & Writing Guided Practice Lab 8: Sentence Revision\" in \"Language Arts\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Reading Comprehension & Writing Guided Practice Lab 8: Sentence Revision\" (Language Arts, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Reading Comprehension & Writing Guided Practice Lab 8: Sentence Revision\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Reading Comprehension & Writing Guided Practice Lab 8: Sentence Revision\" (Language Arts, grade band 35)."
      },
      "external": {
        "sourceLessonId": "lang-arts-35-u1-external-generated-cycle-8",
        "order": 8,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-35-u1-external-supp-seq-09",
      "title": "Reading Comprehension & Writing Checkpoint Quiz 9: Paragraph Structure",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-09-q1",
          "text": "Which option best summarizes Reading Comprehension & Writing Checkpoint Quiz 9: Paragraph Structure?",
          "skillId": "lang-arts-35-u1-external-skill-reading-comprehension-writing-checkpoint-quiz-9-paragraph-structure-summary",
          "options": [
            {
              "id": "a",
              "text": "Explain paragraph structure using age-appropriate vocabulary."
            },
            {
              "id": "b",
              "text": "A statement with no text evidence."
            },
            {
              "id": "c",
              "text": "A summary that adds ideas not in the lesson."
            },
            {
              "id": "d",
              "text": "A response that repeats words but misses meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-09-q2",
          "text": "Which response shows correct application of Reading Comprehension & Writing Checkpoint Quiz 9: Paragraph Structure?",
          "skillId": "lang-arts-35-u1-external-skill-reading-comprehension-writing-checkpoint-quiz-9-paragraph-structure-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply paragraph structure in one guided Language Arts task."
            },
            {
              "id": "b",
              "text": "Quote text without explaining relevance."
            },
            {
              "id": "c",
              "text": "Use opinion only with no supporting detail."
            },
            {
              "id": "d",
              "text": "Change the topic instead of answering the prompt."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-09-q3",
          "text": "Why is review important after learning Reading Comprehension & Writing Checkpoint Quiz 9: Paragraph Structure?",
          "skillId": "lang-arts-35-u1-external-skill-reading-comprehension-writing-checkpoint-quiz-9-paragraph-structure-review",
          "options": [
            {
              "id": "a",
              "text": "Build a short paragraph with claim, evidence, and explanation."
            },
            {
              "id": "b",
              "text": "It replaces understanding with guessing."
            },
            {
              "id": "c",
              "text": "It removes the need for future practice."
            },
            {
              "id": "d",
              "text": "It makes progress tracking impossible."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-09-ia1",
          "type": "matching_pairs",
          "title": "Reading Comprehension & Writing Checkpoint Quiz 9: Paragraph Structure Error Match",
          "description": "Match each learning signal to the strongest correction action.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Read each signal.",
            "Pick the best response.",
            "Use matches for your next quiz retry."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "I still mix up Explain paragraph structure using age-appropriate vocabulary.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Reading Comprehension & Writing Checkpoint Quiz 9: Paragraph Structure in notes but not in timed checks."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Review one clear example and explain it aloud."
              },
              {
                "id": "r2",
                "label": "Use a short checklist before final answer selection."
              },
              {
                "id": "r3",
                "label": "Run a short re-check under the same time constraints."
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
        "questionsPerCheck": 3,
        "totalQuestions": 3,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 3,
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
          "hard": 0
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.7
      },
      "learningAids": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-09-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Reading Comprehension & Writing Checkpoint Quiz 9: Paragraph Structure."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain paragraph structure using age-appropriate vocabulary.",
        "Apply paragraph structure in one guided Language Arts task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-09-chunk-intro",
          "title": "Paragraph Structure Intro",
          "content": "In this section, we will explore how to revise paragraphs for better clarity, grammar, and flow. It's important to ensure that your ideas connect smoothly and that your writing is easy to understand. Focus on how each sentence relates to the next, making sure your thoughts are organized and clear.\nContext recap: In this section, we will explore how to revise paragraphs for better clarity, grammar, and flow. It's important to ensure that your ideas connect smoothly and that your writing is easy to understand. Focus on how each sentence relates to the next, making sure your thoughts are organized and clear.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-09-chunk-practice",
          "title": "Guided Practice",
          "content": "Now, let's practice building a short paragraph! Your task is to create a paragraph that includes a clear claim, supporting evidence, and an explanation of how the evidence relates to your claim. This structure will help you present your ideas in a logical and persuasive way.\nContext recap: Now, let's practice building a short paragraph! Your task is to create a paragraph that includes a clear claim, supporting evidence, and an explanation of how the evidence relates to your claim. This structure will help you present your ideas in a logical and persuasive way.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-09-chunk-check",
          "title": "Common Pitfall Check",
          "content": "While working on your paragraph structure, be aware of a common error that can happen. Sometimes, writers forget to connect their ideas clearly, which can confuse readers. After identifying this issue, use evidence from your writing to make corrections. This practice will enhance your writing skills.\nContext recap: While working on your paragraph structure, be aware of a common error that can happen. Sometimes, writers forget to connect their ideas clearly, which can confuse readers. After identifying this issue, use evidence from your writing to make corrections. This practice will enhance your writing skills.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-09-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's review what we learned about paragraph structure. Remember to focus on how your ideas flow together and how to make your writing clear. After this review, think about one specific goal you can set to improve your paragraph writing skills. This will help you become a more effective communicator.\nContext recap: Let's review what we learned about paragraph structure. Remember to focus on how your ideas flow together and how to make your writing clear. After this review, think about one specific goal you can set to improve your paragraph writing skills. This will help you become a more effective communicator.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-09-card-1",
          "front": "What is paragraph structure?",
          "back": "It is a key Language Arts idea in Reading Comprehension & Writing."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-09-card-2",
          "front": "How can I practice paragraph structure?",
          "back": "Build a short paragraph with claim, evidence, and explanation."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-09-card-3",
          "front": "What should I review next?",
          "back": "Review paragraph structure, then set one clear improvement target."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-09-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Reading Comprehension & Writing Checkpoint Quiz 9: Paragraph Structure\" in \"Language Arts\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Reading Comprehension & Writing Checkpoint Quiz 9: Paragraph Structure\" (Language Arts, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Reading Comprehension & Writing Checkpoint Quiz 9: Paragraph Structure\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Reading Comprehension & Writing Checkpoint Quiz 9: Paragraph Structure\" (Language Arts, grade band 35)."
      },
      "external": {
        "sourceLessonId": "lang-arts-35-u1-external-generated-cycle-9",
        "order": 9,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-35-u1-external-supp-seq-10",
      "title": "Reading Comprehension & Writing Concept Walkthrough 10: Evidence Based Response",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-10-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Reading Comprehension & Writing Concept Walkthrough 10: Evidence Based Response."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain evidence-based response using age-appropriate vocabulary.",
        "Apply evidence-based response in one guided Language Arts task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-10-chunk-intro",
          "title": "Evidence Based Response Intro",
          "content": "In this section, we will learn how to respond to prompts using evidence from texts. Start by carefully reading the prompt and highlighting the key words that stand out. Then, look for lines in the text that provide evidence to support your response. This method will help you create strong and well-supported answers.\nContext recap: In this section, we will learn how to respond to prompts using evidence from texts. Start by carefully reading the prompt and highlighting the key words that stand out. Then, look for lines in the text that provide evidence to support your response. This method will help you create strong and well-supported answers.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-10-chunk-practice",
          "title": "Guided Practice",
          "content": "Now it's time for some practice! Choose a short passage and annotate it by highlighting important points and ideas. After that, summarize the main idea of the passage in your own words. This exercise will help you understand the text better and improve your ability to communicate your thoughts.\nContext recap: Now it's time for some practice! Choose a short passage and annotate it by highlighting important points and ideas. After that, summarize the main idea of the passage in your own words. This exercise will help you understand the text better and improve your ability to communicate your thoughts.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-10-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you work on your evidence-based responses, be on the lookout for a common mistake that many students make. This error often involves not fully supporting your claims with the right evidence from the text. Take a moment to identify this mistake in your work, and then think about how you can correct it by adding specific evidence that strengthens your argument. Remember, using clear examples from the text is key to making your response stronger!\nContext recap: As you work on your evidence-based responses, be on the lookout for a common mistake that many students make. This error often involves not fully supporting your claims with the right evidence from the text. Take a moment to identify this mistake in your work, and then think about how you can correct it by adding specific evidence that strengthens your argument. Remember, using clear examples from the text is key to making your response stronger!",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-10-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to quickly review what we learned about evidence-based responses. It's important to remember how to use evidence from the text to support your ideas. After this review, think about one specific area where you can improve your writing. Setting a clear goal for improvement will help you focus on becoming a better writer in your next assignment!\nContext recap: Let's take a moment to quickly review what we learned about evidence-based responses. It's important to remember how to use evidence from the text to support your ideas. After this review, think about one specific area where you can improve your writing. Setting a clear goal for improvement will help you focus on becoming a better writer in your next assignment!",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-10-card-1",
          "front": "What is evidence-based response?",
          "back": "It is a key Language Arts idea in Reading Comprehension & Writing."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-10-card-2",
          "front": "How can I practice evidence-based response?",
          "back": "Annotate one short passage and summarize the main idea."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-10-card-3",
          "front": "What should I review next?",
          "back": "Review evidence-based response, then set one clear improvement target."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-10-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Reading Comprehension & Writing Concept Walkthrough 10: Evidence Based Response\" in \"Language Arts\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Reading Comprehension & Writing Concept Walkthrough 10: Evidence Based Response\" (Language Arts, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Reading Comprehension & Writing Concept Walkthrough 10: Evidence Based Response\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Reading Comprehension & Writing Concept Walkthrough 10: Evidence Based Response\" (Language Arts, grade band 35)."
      },
      "external": {
        "sourceLessonId": "lang-arts-35-u1-external-generated-cycle-10",
        "order": 10,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-35-u1-external-supp-seq-11",
      "title": "Reading Comprehension & Writing Guided Practice Lab 11: Close Reading",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-11-ia1",
          "type": "drag_and_drop",
          "title": "Reading Comprehension & Writing Guided Practice Lab 11: Close Reading Learning Flow",
          "description": "Sort each action into Plan, Practice, or Reflect.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "instructions": [
            "Read each action.",
            "Choose where it belongs.",
            "Use the result as your practice plan."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Plan"
              },
              {
                "id": "practice",
                "label": "Practice"
              },
              {
                "id": "reflect",
                "label": "Reflect"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set a goal for Explain close reading using age-appropriate vocabulary..",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Rewrite one sentence to improve precision and tone.",
                "correctTargetId": "practice"
              },
              {
                "id": "d3",
                "label": "Write one thing to improve before the next attempt.",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-11-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Reading Comprehension & Writing Guided Practice Lab 11: Close Reading."
        }
      ],
      "metadata": {
        "prompts": [
          "Explain close reading using age-appropriate vocabulary.",
          "Apply close reading in one guided Language Arts task.",
          "Identify one correction step for the next attempt."
        ],
        "generatedSupplement": true
      },
      "objectives": [
        "Explain close reading using age-appropriate vocabulary.",
        "Apply close reading in one guided Language Arts task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-11-chunk-intro",
          "title": "Close Reading Intro",
          "content": "In this section, we will explore the concept of close reading. When you read a text, it's important to make a clear claim about what you think it means. After making your claim, you should support it with specific details from the text. This means looking for quotes or examples that back up your idea. Close reading helps you understand the text better and allows you to express your thoughts more clearly!\nContext recap: In this section, we will explore the concept of close reading. When you read a text, it's important to make a clear claim about what you think it means. After making your claim, you should support it with specific details from the text. This means looking for quotes or examples that back up your idea.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-11-chunk-practice",
          "title": "Guided Practice",
          "content": "Now it's time for some guided practice! Choose one sentence from your writing and think about how you can make it clearer and more precise. This means you might want to change some words or rearrange the sentence to improve its tone. The goal is to make sure your message is easy to understand and sounds just right for your audience. Give it a try!\nContext recap: Now it's time for some guided practice! Choose one sentence from your writing and think about how you can make it clearer and more precise. This means you might want to change some words or rearrange the sentence to improve its tone. The goal is to make sure your message is easy to understand and sounds just right for your audience.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-11-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you practice close reading, keep an eye out for a common mistake that can happen. Sometimes, students forget to connect their ideas back to the text. When you notice this in your work, take a moment to correct it by adding evidence from the text that supports your thoughts. This will help make your analysis stronger and more convincing!\nContext recap: As you practice close reading, keep an eye out for a common mistake that can happen. Sometimes, students forget to connect their ideas back to the text. When you notice this in your work, take a moment to correct it by adding evidence from the text that supports your thoughts. This will help make your analysis stronger and more convincing!",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-11-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly recap what we've learned about close reading. Remember, it's all about understanding the text deeply and making connections to your ideas. After this recap, think about one specific area where you can improve your close reading skills. Setting a clear goal will help you focus on becoming a better reader and writer!\nContext recap: Let's quickly recap what we've learned about close reading. Remember, it's all about understanding the text deeply and making connections to your ideas. After this recap, think about one specific area where you can improve your close reading skills. Setting a clear goal will help you focus on becoming a better reader and writer!",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-11-card-1",
          "front": "What is close reading?",
          "back": "It is a key Language Arts idea in Reading Comprehension & Writing."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-11-card-2",
          "front": "How can I practice close reading?",
          "back": "Rewrite one sentence to improve precision and tone."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-11-card-3",
          "front": "What should I review next?",
          "back": "Review close reading, then set one clear improvement target."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-11-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Reading Comprehension & Writing Guided Practice Lab 11: Close Reading\" in \"Language Arts\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Reading Comprehension & Writing Guided Practice Lab 11: Close Reading\" (Language Arts, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Reading Comprehension & Writing Guided Practice Lab 11: Close Reading\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Reading Comprehension & Writing Guided Practice Lab 11: Close Reading\" (Language Arts, grade band 35)."
      },
      "external": {
        "sourceLessonId": "lang-arts-35-u1-external-generated-cycle-11",
        "order": 11,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-35-u1-external-supp-seq-12",
      "title": "Reading Comprehension & Writing Checkpoint Quiz 12: Vocabulary In Context",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-12-q1",
          "text": "Which option best summarizes Reading Comprehension & Writing Checkpoint Quiz 12: Vocabulary In Context?",
          "skillId": "lang-arts-35-u1-external-skill-reading-comprehension-writing-checkpoint-quiz-12-vocabulary-in-context-summary",
          "options": [
            {
              "id": "a",
              "text": "Explain vocabulary in context using age-appropriate vocabulary."
            },
            {
              "id": "b",
              "text": "A statement with no text evidence."
            },
            {
              "id": "c",
              "text": "A summary that adds ideas not in the lesson."
            },
            {
              "id": "d",
              "text": "A response that repeats words but misses meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-12-q2",
          "text": "Which response shows correct application of Reading Comprehension & Writing Checkpoint Quiz 12: Vocabulary In Context?",
          "skillId": "lang-arts-35-u1-external-skill-reading-comprehension-writing-checkpoint-quiz-12-vocabulary-in-context-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply vocabulary in context in one guided Language Arts task."
            },
            {
              "id": "b",
              "text": "Quote text without explaining relevance."
            },
            {
              "id": "c",
              "text": "Use opinion only with no supporting detail."
            },
            {
              "id": "d",
              "text": "Change the topic instead of answering the prompt."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-12-q3",
          "text": "Why is review important after learning Reading Comprehension & Writing Checkpoint Quiz 12: Vocabulary In Context?",
          "skillId": "lang-arts-35-u1-external-skill-reading-comprehension-writing-checkpoint-quiz-12-vocabulary-in-context-review",
          "options": [
            {
              "id": "a",
              "text": "Build a short paragraph with claim, evidence, and explanation."
            },
            {
              "id": "b",
              "text": "It replaces understanding with guessing."
            },
            {
              "id": "c",
              "text": "It removes the need for future practice."
            },
            {
              "id": "d",
              "text": "It makes progress tracking impossible."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-12-ia1",
          "type": "matching_pairs",
          "title": "Reading Comprehension & Writing Checkpoint Quiz 12: Vocabulary In Context Error Match",
          "description": "Match each learning signal to the strongest correction action.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Read each signal.",
            "Pick the best response.",
            "Use matches for your next quiz retry."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "I still mix up Explain vocabulary in context using age-appropriate vocabulary.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Reading Comprehension & Writing Checkpoint Quiz 12: Vocabulary In Context in notes but not in timed checks."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Review one clear example and explain it aloud."
              },
              {
                "id": "r2",
                "label": "Use a short checklist before final answer selection."
              },
              {
                "id": "r3",
                "label": "Run a short re-check under the same time constraints."
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
        "questionsPerCheck": 3,
        "totalQuestions": 3,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 3,
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
          "hard": 0
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.7
      },
      "learningAids": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-12-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Reading Comprehension & Writing Checkpoint Quiz 12: Vocabulary In Context."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain vocabulary in context using age-appropriate vocabulary.",
        "Apply vocabulary in context in one guided Language Arts task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-12-chunk-intro",
          "title": "Vocabulary In Context Intro",
          "content": "As we begin our quiz on vocabulary in context, remember to revise your work carefully. This means checking for clarity, making sure your grammar is correct, and ensuring that your ideas flow smoothly from one to the next. Taking the time to revise will help your writing shine and make it easier for others to understand your thoughts!\nContext recap: As we begin our quiz on vocabulary in context, remember to revise your work carefully. This means checking for clarity, making sure your grammar is correct, and ensuring that your ideas flow smoothly from one to the next. Taking the time to revise will help your writing shine and make it easier for others to understand your thoughts!",
          "kind": "concept"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-12-chunk-practice",
          "title": "Guided Practice",
          "content": "For this guided practice, your task is to create a short paragraph. In this paragraph, make sure to include a clear claim, some evidence to support that claim, and an explanation of how the evidence connects to your idea. This exercise will help you practice organizing your thoughts and presenting them in a way that is easy for others to follow!\nContext recap: For this guided practice, your task is to create a short paragraph. In this paragraph, make sure to include a clear claim, some evidence to support that claim, and an explanation of how the evidence connects to your idea. This exercise will help you practice organizing your thoughts and presenting them in a way that is easy for others to follow!",
          "kind": "practice"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-12-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you work on applying vocabulary in context, be aware of a common mistake that can occur. Sometimes, students may not use the right words or phrases that fit well with the text. If you notice this in your writing, take a moment to correct it by finding the right vocabulary that matches the context. This will help your writing become clearer and more effective!\nContext recap: As you work on applying vocabulary in context, be aware of a common mistake that can occur. Sometimes, students may not use the right words or phrases that fit well with the text. If you notice this in your writing, take a moment to correct it by finding the right vocabulary that matches the context. This will help your writing become clearer and more effective!",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-12-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly review what we've learned about using vocabulary in context. It's important to understand how words fit into the sentences and the overall message. After this review, think about one specific area where you can improve your vocabulary skills. Setting a clear goal will help you become a more confident writer!\nContext recap: Let's quickly review what we've learned about using vocabulary in context. It's important to understand how words fit into the sentences and the overall message. After this review, think about one specific area where you can improve your vocabulary skills. Setting a clear goal will help you become a more confident writer!",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-12-card-1",
          "front": "What is vocabulary in context?",
          "back": "It is a key Language Arts idea in Reading Comprehension & Writing."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-12-card-2",
          "front": "How can I practice vocabulary in context?",
          "back": "Build a short paragraph with claim, evidence, and explanation."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-12-card-3",
          "front": "What should I review next?",
          "back": "Review vocabulary in context, then set one clear improvement target."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-12-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Reading Comprehension & Writing Checkpoint Quiz 12: Vocabulary In Context\" in \"Language Arts\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Reading Comprehension & Writing Checkpoint Quiz 12: Vocabulary In Context\" (Language Arts, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Reading Comprehension & Writing Checkpoint Quiz 12: Vocabulary In Context\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Reading Comprehension & Writing Checkpoint Quiz 12: Vocabulary In Context\" (Language Arts, grade band 35)."
      },
      "external": {
        "sourceLessonId": "lang-arts-35-u1-external-generated-cycle-12",
        "order": 12,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-35-u1-external-supp-seq-13",
      "title": "Reading Comprehension & Writing Concept Walkthrough 13: Sentence Revision",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-13-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Reading Comprehension & Writing Concept Walkthrough 13: Sentence Revision."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain sentence revision using age-appropriate vocabulary.",
        "Apply sentence revision in one guided Language Arts task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-13-chunk-intro",
          "title": "Sentence Revision Intro",
          "content": "In this section, we will focus on the important skill of sentence revision. Start by reading the prompt carefully, and then highlight the key words and lines from the text that provide evidence for your ideas. This will help you identify the most important parts of the text that you can use to strengthen your writing. Remember, good revision makes your writing clearer and more impactful!\nContext recap: In this section, we will focus on the important skill of sentence revision. Start by reading the prompt carefully, and then highlight the key words and lines from the text that provide evidence for your ideas. This will help you identify the most important parts of the text that you can use to strengthen your writing. Remember, good revision makes your writing clearer and more impactful!",
          "kind": "concept"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-13-chunk-practice",
          "title": "Guided Practice",
          "content": "Now it's time for some guided practice! Choose a short passage and annotate it by making notes in the margins or highlighting important points. After that, summarize the main idea of the passage in your own words. This practice will help you understand the text better and improve your ability to communicate your thoughts clearly!\nContext recap: Now it's time for some guided practice! Choose a short passage and annotate it by making notes in the margins or highlighting important points. After that, summarize the main idea of the passage in your own words. This practice will help you understand the text better and improve your ability to communicate your thoughts clearly!",
          "kind": "practice"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-13-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you practice revising sentences, be on the lookout for a common mistake that many people make. Once you spot this error, take a moment to think about how you can correct it. Use specific examples from the text to support your revision and make your sentence clearer and more effective.\nContext recap: As you practice revising sentences, be on the lookout for a common mistake that many people make. Once you spot this error, take a moment to think about how you can correct it. Use specific examples from the text to support your revision and make your sentence clearer and more effective.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-13-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to quickly review what we learned about revising sentences. After that, think about one specific area where you can make an improvement in your writing. Setting a clear goal will help you focus on enhancing your skills.\nContext recap: Let's take a moment to quickly review what we learned about revising sentences. After that, think about one specific area where you can make an improvement in your writing. Setting a clear goal will help you focus on enhancing your skills.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-13-card-1",
          "front": "What is sentence revision?",
          "back": "It is a key Language Arts idea in Reading Comprehension & Writing."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-13-card-2",
          "front": "How can I practice sentence revision?",
          "back": "Annotate one short passage and summarize the main idea."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-13-card-3",
          "front": "What should I review next?",
          "back": "Review sentence revision, then set one clear improvement target."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-13-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Reading Comprehension & Writing Concept Walkthrough 13: Sentence Revision\" in \"Language Arts\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Reading Comprehension & Writing Concept Walkthrough 13: Sentence Revision\" (Language Arts, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Reading Comprehension & Writing Concept Walkthrough 13: Sentence Revision\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Reading Comprehension & Writing Concept Walkthrough 13: Sentence Revision\" (Language Arts, grade band 35)."
      },
      "external": {
        "sourceLessonId": "lang-arts-35-u1-external-generated-cycle-13",
        "order": 13,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-35-u1-external-supp-seq-14",
      "title": "Reading Comprehension & Writing Guided Practice Lab 14: Paragraph Structure",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-14-ia1",
          "type": "drag_and_drop",
          "title": "Reading Comprehension & Writing Guided Practice Lab 14: Paragraph Structure Learning Flow",
          "description": "Sort each action into Plan, Practice, or Reflect.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "instructions": [
            "Read each action.",
            "Choose where it belongs.",
            "Use the result as your practice plan."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Plan"
              },
              {
                "id": "practice",
                "label": "Practice"
              },
              {
                "id": "reflect",
                "label": "Reflect"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set a goal for Explain paragraph structure using age-appropriate vocabulary..",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Rewrite one sentence to improve precision and tone.",
                "correctTargetId": "practice"
              },
              {
                "id": "d3",
                "label": "Write one thing to improve before the next attempt.",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-14-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Reading Comprehension & Writing Guided Practice Lab 14: Paragraph Structure."
        }
      ],
      "metadata": {
        "prompts": [
          "Explain paragraph structure using age-appropriate vocabulary.",
          "Apply paragraph structure in one guided Language Arts task.",
          "Identify one correction step for the next attempt."
        ],
        "generatedSupplement": true
      },
      "objectives": [
        "Explain paragraph structure using age-appropriate vocabulary.",
        "Apply paragraph structure in one guided Language Arts task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-14-chunk-intro",
          "title": "Paragraph Structure Intro",
          "content": "When writing a paragraph, it's important to start with a clear main idea or claim. This claim should be supported by details from the text that help explain and strengthen your point. Remember, a strong paragraph has a clear focus and uses evidence to back it up.\nContext recap: When writing a paragraph, it's important to start with a clear main idea or claim. This claim should be supported by details from the text that help explain and strengthen your point. Remember, a strong paragraph has a clear focus and uses evidence to back it up.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-14-chunk-practice",
          "title": "Guided Practice",
          "content": "Now it's time to practice! Choose one sentence that you think could be improved. Your task is to rewrite this sentence so that it is more precise and has the right tone for your audience. Think about the words you use and how they can make your message clearer.\nContext recap: Now it's time to practice! Choose one sentence that you think could be improved. Your task is to rewrite this sentence so that it is more precise and has the right tone for your audience. Think about the words you use and how they can make your message clearer.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-14-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you work on structuring your paragraphs, keep an eye out for a common mistake that can happen. Once you identify this error, think about how you can fix it using evidence from your writing. This will help ensure that your paragraph is well-organized and effective.\nContext recap: As you work on structuring your paragraphs, keep an eye out for a common mistake that can happen. Once you identify this error, think about how you can fix it using evidence from your writing. This will help ensure that your paragraph is well-organized and effective.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-14-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly review what we learned about paragraph structure. After this recap, think about one specific area where you can improve your writing. Setting a clear target will help you focus on making your paragraphs stronger.\nContext recap: Let's quickly review what we learned about paragraph structure. After this recap, think about one specific area where you can improve your writing. Setting a clear target will help you focus on making your paragraphs stronger.\nWhy this matters: Quick Recap helps learners in Language Arts connect ideas from Reading Comprehension & Writing to decisions they make during practice and assessment. Keep the explanation friendly and practical.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-14-card-1",
          "front": "What is paragraph structure?",
          "back": "It is a key Language Arts idea in Reading Comprehension & Writing."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-14-card-2",
          "front": "How can I practice paragraph structure?",
          "back": "Rewrite one sentence to improve precision and tone."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-14-card-3",
          "front": "What should I review next?",
          "back": "Review paragraph structure, then set one clear improvement target."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-14-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Reading Comprehension & Writing Guided Practice Lab 14: Paragraph Structure\" in \"Language Arts\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Reading Comprehension & Writing Guided Practice Lab 14: Paragraph Structure\" (Language Arts, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Reading Comprehension & Writing Guided Practice Lab 14: Paragraph Structure\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Reading Comprehension & Writing Guided Practice Lab 14: Paragraph Structure\" (Language Arts, grade band 35)."
      },
      "external": {
        "sourceLessonId": "lang-arts-35-u1-external-generated-cycle-14",
        "order": 14,
        "generatedSupplement": true
      }
    },
    {
      "id": "lang-arts-35-u1-external-supp-seq-15",
      "title": "Reading Comprehension & Writing Checkpoint Quiz 15: Evidence Based Response",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-15-q1",
          "text": "Which option best summarizes Reading Comprehension & Writing Checkpoint Quiz 15: Evidence Based Response?",
          "skillId": "lang-arts-35-u1-external-skill-reading-comprehension-writing-checkpoint-quiz-15-evidence-based-response-summary",
          "options": [
            {
              "id": "a",
              "text": "Explain evidence-based response using age-appropriate vocabulary."
            },
            {
              "id": "b",
              "text": "A statement with no text evidence."
            },
            {
              "id": "c",
              "text": "A summary that adds ideas not in the lesson."
            },
            {
              "id": "d",
              "text": "A response that repeats words but misses meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-15-q2",
          "text": "Which response shows correct application of Reading Comprehension & Writing Checkpoint Quiz 15: Evidence Based Response?",
          "skillId": "lang-arts-35-u1-external-skill-reading-comprehension-writing-checkpoint-quiz-15-evidence-based-response-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply evidence-based response in one guided Language Arts task."
            },
            {
              "id": "b",
              "text": "Quote text without explaining relevance."
            },
            {
              "id": "c",
              "text": "Use opinion only with no supporting detail."
            },
            {
              "id": "d",
              "text": "Change the topic instead of answering the prompt."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-15-q3",
          "text": "Why is review important after learning Reading Comprehension & Writing Checkpoint Quiz 15: Evidence Based Response?",
          "skillId": "lang-arts-35-u1-external-skill-reading-comprehension-writing-checkpoint-quiz-15-evidence-based-response-review",
          "options": [
            {
              "id": "a",
              "text": "Build a short paragraph with claim, evidence, and explanation."
            },
            {
              "id": "b",
              "text": "It replaces understanding with guessing."
            },
            {
              "id": "c",
              "text": "It removes the need for future practice."
            },
            {
              "id": "d",
              "text": "It makes progress tracking impossible."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-15-ia1",
          "type": "matching_pairs",
          "title": "Reading Comprehension & Writing Checkpoint Quiz 15: Evidence Based Response Error Match",
          "description": "Match each learning signal to the strongest correction action.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Read each signal.",
            "Pick the best response.",
            "Use matches for your next quiz retry."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "I still mix up Explain evidence-based response using age-appropriate vocabulary.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Reading Comprehension & Writing Checkpoint Quiz 15: Evidence Based Response in notes but not in timed checks."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Review one clear example and explain it aloud."
              },
              {
                "id": "r2",
                "label": "Use a short checklist before final answer selection."
              },
              {
                "id": "r3",
                "label": "Run a short re-check under the same time constraints."
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
        "questionsPerCheck": 3,
        "totalQuestions": 3,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 3,
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
          "hard": 0
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.7
      },
      "learningAids": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-15-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Reading Comprehension & Writing Checkpoint Quiz 15: Evidence Based Response."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain evidence-based response using age-appropriate vocabulary.",
        "Apply evidence-based response in one guided Language Arts task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-15-chunk-intro",
          "title": "Evidence Based Response Intro",
          "content": "When you are writing an evidence-based response, it's important to revise your work for clarity. Make sure your grammar is correct and that your ideas flow smoothly from one to the next. This will help your reader understand your points better.\nContext recap: When you are writing an evidence-based response, it's important to revise your work for clarity. Make sure your grammar is correct and that your ideas flow smoothly from one to the next. This will help your reader understand your points better.",
          "kind": "concept"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-15-chunk-practice",
          "title": "Guided Practice",
          "content": "For this practice activity, try to build a short paragraph that includes a clear claim, supporting evidence, and an explanation of how the evidence relates to your claim. This structure will help you present your ideas in a logical and persuasive way.\nContext recap: For this practice activity, try to build a short paragraph that includes a clear claim, supporting evidence, and an explanation of how the evidence relates to your claim. This structure will help you present your ideas in a logical and persuasive way.",
          "kind": "practice"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-15-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you create your evidence-based response, be aware of a common mistake that can occur. Once you notice this error, think about how you can correct it by using evidence from your writing. This will help strengthen your argument and make it more convincing.\nContext recap: As you create your evidence-based response, be aware of a common mistake that can occur. Once you notice this error, think about how you can correct it by using evidence from your writing. This will help strengthen your argument and make it more convincing.",
          "kind": "analysis"
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-15-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review what we learned about writing evidence-based responses. After this review, think about one specific area where you can improve your writing. Setting a clear improvement target will help you become a better writer.\nContext recap: Let's take a moment to review what we learned about writing evidence-based responses. After this review, think about one specific area where you can improve your writing. Setting a clear improvement target will help you become a better writer.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "lang-arts-35-u1-external-supp-seq-15-card-1",
          "front": "What is evidence-based response?",
          "back": "It is a key Language Arts idea in Reading Comprehension & Writing."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-15-card-2",
          "front": "How can I practice evidence-based response?",
          "back": "Build a short paragraph with claim, evidence, and explanation."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-15-card-3",
          "front": "What should I review next?",
          "back": "Review evidence-based response, then set one clear improvement target."
        },
        {
          "id": "lang-arts-35-u1-external-supp-seq-15-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Reading Comprehension & Writing Checkpoint Quiz 15: Evidence Based Response\" in \"Language Arts\" for grade band \"35\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Reading Comprehension & Writing Checkpoint Quiz 15: Evidence Based Response\" (Language Arts, grade band 35).",
        "lessonImage": "Create a clean educational illustration for \"Reading Comprehension & Writing Checkpoint Quiz 15: Evidence Based Response\" in Language Arts.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Reading Comprehension & Writing Checkpoint Quiz 15: Evidence Based Response\" (Language Arts, grade band 35)."
      },
      "external": {
        "sourceLessonId": "lang-arts-35-u1-external-generated-cycle-15",
        "order": 15,
        "generatedSupplement": true
      }
    }
  ]
};
