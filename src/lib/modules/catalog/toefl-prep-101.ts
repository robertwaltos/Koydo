import type { LearningModule } from "@/lib/modules/types";

export const toefl_prep_101_Module: LearningModule = {
  "id": "toefl-prep-101",
  "title": "TOEFL iBT Prep Foundations",
  "description": "Master the TOEFL iBT with a clear, step-by-step guide. Build skills in reading, listening, speaking, and writing through targeted lessons and timed practice.",
  "subject": "Exam Prep",
  "tags": [
    "exam-prep",
    "toefl",
    "english-language",
    "advanced"
  ],
  "minAge": 14,
  "maxAge": 24,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es",
    "fr",
    "de",
    "ar",
    "hi",
    "zh",
    "ja",
    "ko",
    "ru"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Understand the structure and scoring of all four TOEFL iBT sections.",
    "Apply effective strategies for reading, listening, speaking, and writing tasks.",
    "Improve speed and accuracy under timed test conditions.",
    "Analyze performance on practice drills to identify and improve weak areas."
  ],
  "quizBlueprint": {
    "frequency": "weekly_assessment",
    "questionsPerCheck": 20,
    "totalQuestions": 20,
    "timeLimitMinutes": 25,
    "questionTypes": [
      {
        "type": "mcq_single",
        "percentage": 100,
        "pointsEach": 1,
        "bloomsLevels": [
          1,
          2,
          3,
          4
        ]
      }
    ],
    "difficultyDistribution": {
      "easy": 6,
      "medium": 10,
      "hard": 4
    },
    "feedbackMode": "after_submit",
    "adaptive": false,
    "masteryThreshold": 0.8
  },
  "lessons": [
    {
      "id": "toefl-prep-101-l01",
      "title": "Understanding the TOEFL iBT",
      "type": "video",
      "duration": 10,
      "learningAids": [
        {
          "id": "toefl-prep-101-l01-a1",
          "type": "image",
          "title": "Infographic: The 4 Sections of the TOEFL",
          "content": "A clear visual breakdown of the Reading, Listening, Speaking, and Writing sections, including question counts and timing."
        },
        {
          "id": "toefl-prep-101-l01-a2",
          "type": "animation",
          "title": "How Your TOEFL Score is Calculated",
          "content": "An animated explainer showing how raw points from each section are converted to the final scaled score out of 120."
        }
      ]
    },
    {
      "id": "toefl-prep-101-l02",
      "title": "Mastering Academic Reading",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Describe the difference between skimming for the main idea and scanning for specific details.",
          "Apply the 'main idea first' strategy to a sample paragraph and summarize its core point in one sentence.",
          "Set a personal goal for improving your reading speed on the next practice drill."
        ]
      },
      "interactiveActivities": [
        {
          "id": "toefl-prep-101-l02-ia1",
          "type": "drag_and_drop",
          "title": "Match Question Type to Strategy",
          "description": "Drag the best reading strategy to the corresponding TOEFL question type.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Read each question type on the left.",
            "Drag the most effective strategy from the right to match it.",
            "Check your answers to confirm your understanding."
          ],
          "data": {
            "targets": [
              {
                "id": "t1",
                "label": "Factual Information Question"
              },
              {
                "id": "t2",
                "label": "Vocabulary Question"
              },
              {
                "id": "t3",
                "label": "Prose Summary Question"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Scan for keywords and locate the specific sentence.",
                "correctTargetId": "t1"
              },
              {
                "id": "d2",
                "label": "Use context clues from the surrounding sentences.",
                "correctTargetId": "t2"
              },
              {
                "id": "d3",
                "label": "Review topic sentences to identify major ideas.",
                "correctTargetId": "t3"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "toefl-prep-101-l03",
      "title": "Reading Skills Check",
      "type": "quiz",
      "duration": 12,
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 5,
        "totalQuestions": 5,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 5,
            "pointsEach": 1,
            "bloomsLevels": [
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 1,
          "medium": 3,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.8
      },
      "questions": [
        {
          "id": "toefl-prep-101-l03-q1",
          "text": "When you encounter an unfamiliar word in a reading passage, what is the most efficient first step?",
          "skillId": "skill-reading-vocabulary",
          "options": [
            {
              "id": "a",
              "text": "Stop reading and look it up in a dictionary immediately."
            },
            {
              "id": "b",
              "text": "Read the sentences before and after it to understand its meaning from context."
            },
            {
              "id": "c",
              "text": "Skip the entire paragraph and hope it's not important."
            },
            {
              "id": "d",
              "text": "Guess a random meaning based on how the word sounds."
            }
          ],
          "correctOptionId": "b",
          "hint": "The TOEFL tests your ability to use clues within the text.",
          "explanation": "Using context clues is the fastest and most effective strategy for vocabulary questions, as it saves time and improves comprehension."
        },
        {
          "id": "toefl-prep-101-l03-q2",
          "text": "For a 'Prose Summary' question, which type of information should you prioritize for your answer choices?",
          "skillId": "skill-reading-summary",
          "options": [
            {
              "id": "a",
              "text": "Minor details, specific dates, and small examples."
            },
            {
              "id": "b",
              "text": "The main ideas presented in the passage's topic sentences."
            },
            {
              "id": "c",
              "text": "Information that is interesting but not directly stated in the passage."
            },
            {
              "id": "d",
              "text": "The exact first and last sentences of the passage."
            }
          ],
          "correctOptionId": "b",
          "hint": "A summary should capture the most important points, not the small details.",
          "explanation": "Prose Summary questions test your ability to distinguish major ideas from minor supporting details. Focusing on the main points is key."
        },
        {
          "id": "toefl-prep-101-l03-q3",
          "text": "If you are running out of time in the Reading section, what is a good strategy?",
          "skillId": "skill-reading-pacing",
          "options": [
            {
              "id": "a",
              "text": "Spend all remaining time on one difficult question to ensure it's correct."
            },
            {
              "id": "b",
              "text": "Quickly skim the remaining questions and answer the ones that seem easiest first."
            },
            {
              "id": "c",
              "text": "Leave the rest of the questions blank."
            },
            {
              "id": "d",
              "text": "Read the entire passage again from the beginning."
            }
          ],
          "correctOptionId": "b",
          "hint": "Maximize your points by answering as many questions as you can correctly.",
          "explanation": "Prioritizing easier questions helps secure points quickly. Since there is no penalty for wrong answers, you should make an educated guess on any remaining questions before time runs out."
        },
        {
          "id": "toefl-prep-101-l03-q4",
          "text": "What is the primary purpose of skimming a passage before reading the questions?",
          "skillId": "skill-reading-strategy",
          "options": [
            {
              "id": "a",
              "text": "To memorize every detail and fact presented."
            },
            {
              "id": "b",
              "text": "To get a general understanding of the passage's topic and structure."
            },
            {
              "id": "c",
              "text": "To find the answers to the questions before reading them."
            },
            {
              "id": "d",
              "text": "To practice your reading speed without a goal."
            }
          ],
          "correctOptionId": "b",
          "hint": "Think about the 'big picture' of the text.",
          "explanation": "Skimming helps you create a mental map of the passage, making it easier to locate information when you start answering specific questions."
        },
        {
          "id": "toefl-prep-101-l03-q5",
          "text": "An 'Inference' question asks you to...",
          "skillId": "skill-reading-inference",
          "options": [
            {
              "id": "a",
              "text": "Find a detail that is directly stated in the text."
            },
            {
              "id": "b",
              "text": "Define a vocabulary word using context."
            },
            {
              "id": "c",
              "text": "Draw a logical conclusion based on information given in the text."
            },
            {
              "id": "d",
              "text": "Identify the author's main argument."
            }
          ],
          "correctOptionId": "c",
          "hint": "Inference means to 'read between the lines'.",
          "explanation": "Inference questions require you to understand what the author suggests or implies, even if it is not written directly. You must use the evidence in the text to make a logical deduction."
        }
      ]
    },
    {
      "id": "toefl-prep-101-l04",
      "title": "Active Listening Strategies",
      "type": "video",
      "duration": 11,
      "learningAids": [
        {
          "id": "toefl-prep-101-l04-a1",
          "type": "image",
          "title": "Checklist: What to Listen For",
          "content": "A simple checklist covering main ideas, key details, speaker's attitude, and organizational cues (e.g., 'First,' 'In contrast')."
        },
        {
          "id": "toefl-prep-101-l04-a2",
          "type": "animation",
          "title": "Visualizing a Lecture's Structure",
          "content": "An animation that maps out a sample lecture, showing how the main topic branches into supporting points and examples."
        }
      ]
    },
    {
      "id": "toefl-prep-101-l05",
      "title": "Note-Taking for Lectures & Conversations",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Listen to a 1-minute audio clip and practice taking notes using a simple two-column format (Main Idea | Details).",
          "Identify three abbreviations or symbols you can use to take notes faster (e.g., 'w/' for with, '->' for causes).",
          "Review your notes. Are they clear enough to understand a day later? What is one thing you could improve?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "toefl-prep-101-l05-ia1",
          "type": "sorting_buckets",
          "title": "Main Idea vs. Supporting Detail",
          "description": "Listen to short audio statements and sort them into the correct category.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "instructions": [
            "Listen to each statement from a sample lecture.",
            "Decide if it's a main idea or a supporting detail.",
            "Drag the statement to the correct bucket."
          ],
          "data": {
            "buckets": [
              {
                "id": "main_idea",
                "label": "Main Idea"
              },
              {
                "id": "supporting_detail",
                "label": "Supporting Detail"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "(Audio) 'Today, we'll discuss the two primary causes of soil erosion.'",
                "correctBucketId": "main_idea"
              },
              {
                "id": "i2",
                "label": "(Audio) 'For example, heavy rainfall can wash away the topsoil.'",
                "correctBucketId": "supporting_detail"
              },
              {
                "id": "i3",
                "label": "(Audio) 'The second major factor is wind.'",
                "correctBucketId": "main_idea"
              },
              {
                "id": "i4",
                "label": "(Audio) 'In 1934, a dust storm in Texas blew soil as far as New York City.'",
                "correctBucketId": "supporting_detail"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "toefl-prep-101-l06",
      "title": "Listening Skills Check",
      "type": "quiz",
      "duration": 12,
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 5,
        "totalQuestions": 5,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 5,
            "pointsEach": 1,
            "bloomsLevels": [
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 1,
          "medium": 3,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.8
      },
      "questions": [
        {
          "id": "toefl-prep-101-l06-q1",
          "text": "A professor says, 'Now, let's zero in on the main point.' This phrase signals...",
          "skillId": "skill-listening-cues",
          "options": [
            {
              "id": "a",
              "text": "A minor detail is about to be mentioned."
            },
            {
              "id": "b",
              "text": "The lecture is about to end."
            },
            {
              "id": "c",
              "text": "A key concept or main idea is coming next."
            },
            {
              "id": "d",
              "text": "The professor is going to ask a question."
            }
          ],
          "correctOptionId": "c",
          "hint": "Pay attention to words that guide the listener.",
          "explanation": "Transitional phrases like this are strong indicators that important information will follow. Good note-takers listen for these cues."
        },
        {
          "id": "toefl-prep-101-l06-q2",
          "text": "In a conversation, if one speaker says 'I'm not so sure about that,' what are they likely expressing?",
          "skillId": "skill-listening-attitude",
          "options": [
            {
              "id": "a",
              "text": "Strong agreement."
            },
            {
              "id": "b",
              "text": "Confusion about the topic."
            },
            {
              "id": "c",
              "text": "Doubt or disagreement."
            },
            {
              "id": "d",
              "text": "A desire to change the subject."
            }
          ],
          "correctOptionId": "c",
          "hint": "Consider the speaker's tone and choice of words.",
          "explanation": "This phrase is a polite way to disagree. Understanding a speaker's stance or attitude is a key listening skill on the TOEFL."
        },
        {
          "id": "toefl-prep-101-l06-q3",
          "text": "Why is it important to use abbreviations and symbols in your notes?",
          "skillId": "skill-listening-notes",
          "options": [
            {
              "id": "a",
              "text": "To make your notes look more complex and academic."
            },
            {
              "id": "b",
              "text": "To save time so you can write down more information."
            },
            {
              "id": "c",
              "text": "To practice your handwriting."
            },
            {
              "id": "d",
              "text": "To ensure you write every single word the speaker says."
            }
          ],
          "correctOptionId": "b",
          "hint": "Lectures can be fast. Your note-taking needs to be efficient.",
          "explanation": "You can't write down everything. Using symbols and abbreviations allows you to capture key ideas and details much more quickly."
        },
        {
          "id": "toefl-prep-101-l06-q4",
          "text": "After a lecture on whale migration, a question asks 'What can be inferred about the future of the gray whale?' What kind of information should you use to answer?",
          "skillId": "skill-listening-inference",
          "options": [
            {
              "id": "a",
              "text": "A direct quote from the professor about the future."
            },
            {
              "id": "b",
              "text": "Your own personal opinion about whales."
            },
            {
              "id": "c",
              "text": "A logical conclusion based on the facts the professor presented."
            },
            {
              "id": "d",
              "text": "A detail about a different species of whale."
            }
          ],
          "correctOptionId": "c",
          "hint": "An inference is an educated guess based on evidence.",
          "explanation": "Like in reading, listening inference questions require you to connect the dots from the information provided to reach a conclusion that is implied but not directly stated."
        },
        {
          "id": "toefl-prep-101-l06-q5",
          "text": "If you miss a detail while listening to a lecture, what should you do?",
          "skillId": "skill-listening-focus",
          "options": [
            {
              "id": "a",
              "text": "Stop listening and worry about the missed information."
            },
            {
              "id": "b",
              "text": "Keep listening to catch the next points and not miss more information."
            },
            {
              "id": "c",
              "text": "Guess what the detail might have been and write it down."
            },
            {
              "id": "d",
              "text": "Raise your hand and ask the speaker to repeat it."
            }
          ],
          "correctOptionId": "b",
          "hint": "Don't let one small mistake cause you to miss even more.",
          "explanation": "In a timed test, you cannot pause or rewind. The best strategy is to refocus immediately so you can understand the rest of the lecture and answer other questions correctly."
        }
      ]
    },
    {
      "id": "toefl-prep-101-l07",
      "title": "Structuring Your Speaking Responses",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "toefl-prep-101-l07-a1",
          "type": "image",
          "title": "Template: Independent Speaking Task",
          "content": "A visual template showing the structure: State Opinion -> Reason 1 + Example -> Reason 2 + Example -> Conclusion."
        },
        {
          "id": "toefl-prep-101-l07-a2",
          "type": "image",
          "title": "Template: Integrated Speaking Task",
          "content": "A visual template for summarizing and connecting reading and listening sources, highlighting key transition phrases."
        }
      ]
    },
    {
      "id": "toefl-prep-101-l08",
      "title": "Integrated & Independent Speaking Practice",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Choose an Independent Speaking prompt (e.g., 'Do you prefer to study alone or in a group?'). Use a timer to give yourself 15 seconds to prepare and 45 seconds to speak.",
          "Record your response and listen to it. Did you state your main point clearly? Did you provide a supporting reason?",
          "Review the Integrated Speaking template. Identify three transition phrases (e.g., 'The reading states..., but the lecturer argues...') you can use in your next practice."
        ]
      },
      "interactiveActivities": [
        {
          "id": "toefl-prep-101-l08-ia1",
          "type": "drag_and_drop",
          "title": "Build a Coherent Spoken Response",
          "description": "Drag the sentences into the correct order to form a well-structured answer to an Independent Speaking question.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "The question is: 'Should universities require students to attend all classes?'",
            "Drag the sentences into a logical order: Main Point, Reason, Example, Conclusion.",
            "Check your answer to see the ideal structure."
          ],
          "data": {
            "targets": [
              {
                "id": "t1",
                "label": "1. State Opinion"
              },
              {
                "id": "t2",
                "label": "2. Give a Reason"
              },
              {
                "id": "t3",
                "label": "3. Provide an Example"
              },
              {
                "id": "t4",
                "label": "4. Conclude"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "In my opinion, universities should not require mandatory attendance.",
                "correctTargetId": "t1"
              },
              {
                "id": "d2",
                "label": "The main reason is that adult learners should manage their own time.",
                "correctTargetId": "t2"
              },
              {
                "id": "d3",
                "label": "For instance, a student might learn better by reading the textbook than by sitting in a lecture.",
                "correctTargetId": "t3"
              },
              {
                "id": "d4",
                "label": "Therefore, I believe required attendance is not the best policy.",
                "correctTargetId": "t4"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "toefl-prep-101-l09",
      "title": "Speaking Skills Check",
      "type": "quiz",
      "duration": 12,
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 5,
        "totalQuestions": 5,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 5,
            "pointsEach": 1,
            "bloomsLevels": [
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 1,
          "medium": 3,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.8
      },
      "questions": [
        {
          "id": "toefl-prep-101-l09-q1",
          "text": "For the Independent Speaking task, what is the most important element of a high-scoring response?",
          "skillId": "skill-speaking-independent",
          "options": [
            {
              "id": "a",
              "text": "Using very complex, academic vocabulary."
            },
            {
              "id": "b",
              "text": "Speaking for the entire time without pausing."
            },
            {
              "id": "c",
              "text": "Clearly stating your opinion and supporting it with reasons and examples."
            },
            {
              "id": "d",
              "text": "Agreeing with the most common opinion."
            }
          ],
          "correctOptionId": "c",
          "hint": "Structure and development are more important than using big words.",
          "explanation": "Scorers look for a well-organized and well-developed response. A clear argument with support is the foundation of a good score."
        },
        {
          "id": "toefl-prep-101-l09-q2",
          "text": "In an Integrated Speaking task, you read a passage and then listen to a lecture. What is your main goal?",
          "skillId": "skill-speaking-integrated",
          "options": [
            {
              "id": "a",
              "text": "To give your personal opinion on the topic."
            },
            {
              "id": "b",
              "text": "To summarize the reading passage only."
            },
            {
              "id": "c",
              "text": "To summarize the lecture only."
            },
            {
              "id": "d",
              "text": "To explain the relationship between the reading and the lecture."
            }
          ],
          "correctOptionId": "d",
          "hint": "The task is to connect the two sources.",
          "explanation": "The key to this task is synthesis. You must accurately summarize the main points from both sources and explain how the lecture supports, challenges, or adds to the information in the reading."
        },
        {
          "id": "toefl-prep-101-l09-q3",
          "text": "What is the purpose of the 15-30 seconds of preparation time before you speak?",
          "skillId": "skill-speaking-prep",
          "options": [
            {
              "id": "a",
              "text": "To write out your entire speech word-for-word."
            },
            {
              "id": "b",
              "text": "To quickly outline your main points and supporting ideas."
            },
            {
              "id": "c",
              "text": "To check your grammar and spelling."
            },
            {
              "id": "d",
              "text": "To take a short break and relax."
            }
          ],
          "correctOptionId": "b",
          "hint": "You don't have time to write a full script. What's the next best thing?",
          "explanation": "Effective use of prep time involves jotting down a few keywords for your main idea and reasons. This simple outline will guide your response and keep you on track."
        },
        {
          "id": "toefl-prep-101-l09-q4",
          "text": "Which of the following is a good way to improve your speaking fluency?",
          "skillId": "skill-speaking-fluency",
          "options": [
            {
              "id": "a",
              "text": "Memorizing entire scripts for common topics."
            },
            {
              "id": "b",
              "text": "Speaking as fast as you possibly can."
            },
            {
              "id": "c",
              "text": "Practicing with a timer and recording yourself to identify pauses and hesitations."
            },
            {
              "id": "d",
              "text": "Only practicing in your head without speaking out loud."
            }
          ],
          "correctOptionId": "c",
          "hint": "Fluency is about smooth, natural speech, not just speed.",
          "explanation": "Recording yourself is a powerful tool. It helps you notice where you hesitate or use filler words (like 'um' or 'uh'), so you can work on speaking more smoothly and confidently."
        },
        {
          "id": "toefl-prep-101-l09-q5",
          "text": "Using transition words like 'First,' 'Furthermore,' and 'In conclusion' helps to...",
          "skillId": "skill-speaking-clarity",
          "options": [
            {
              "id": "a",
              "text": "Make your response sound more complicated."
            },
            {
              "id": "b",
              "text": "Fill up the speaking time."
            },
            {
              "id": "c",
              "text": "Improve the logical flow and organization of your response."
            },
            {
              "id": "d",
              "text": "Show off your vocabulary."
            }
          ],
          "correctOptionId": "c",
          "hint": "How do these words help the listener?",
          "explanation": "Transition words act as signposts for the listener, making your argument easy to follow. They clearly signal the introduction of a new point, an additional detail, or a conclusion."
        }
      ]
    },
    {
      "id": "toefl-prep-101-l10",
      "title": "High-Scoring Writing Techniques",
      "type": "video",
      "duration": 10,
      "learningAids": [
        {
          "id": "toefl-prep-101-l10-a1",
          "type": "image",
          "title": "Anatomy of a Strong Paragraph",
          "content": "A diagram showing the key components: Topic Sentence, Supporting Evidence/Examples, and Concluding Sentence."
        },
        {
          "id": "toefl-prep-101-l10-a2",
          "type": "animation",
          "title": "Paraphrasing vs. Plagiarizing",
          "content": "An animation showing a sentence from a source text being correctly paraphrased (changed structure and vocabulary) versus being plagiarized (minor word changes)."
        }
      ]
    },
    {
      "id": "toefl-prep-101-l11",
      "title": "Integrated & Independent Writing Practice",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Read a short paragraph and practice paraphrasing its main idea in a single sentence, using your own words.",
          "Brainstorm two reasons and one specific example for the Independent Writing prompt: 'Is it better for students to work part-time while studying?'",
          "Write a clear thesis statement that directly answers the prompt and outlines the main points of your essay."
        ]
      },
      "interactiveActivities": [
        {
          "id": "toefl-prep-101-l11-ia1",
          "type": "matching_pairs",
          "title": "Connect Thesis to Topic Sentences",
          "description": "Match the thesis statement to the topic sentences that would logically follow it in an essay.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the thesis statement on the left.",
            "Find the two topic sentences on the right that directly support the thesis.",
            "Match the pairs to build a coherent essay outline."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Thesis: Cities should invest more in public transportation to reduce traffic and pollution."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "First, an expanded subway system would significantly decrease the number of cars on the road."
              },
              {
                "id": "r2",
                "label": "Furthermore, relying on electric buses and trains would lower the city's carbon emissions."
              },
              {
                "id": "r3",
                "label": "Bicycle lanes are also a popular feature in modern cities."
              }
            ],
            "pairs": [
              {
                "leftId": "l1",
                "rightId": "r1"
              },
              {
                "leftId": "l1",
                "rightId": "r2"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "toefl-prep-101-l12",
      "title": "Writing Skills Check",
      "type": "quiz",
      "duration": 12,
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 5,
        "totalQuestions": 5,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 5,
            "pointsEach": 1,
            "bloomsLevels": [
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 1,
          "medium": 3,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.8
      },
      "questions": [
        {
          "id": "toefl-prep-101-l12-q1",
          "text": "What is the main purpose of a thesis statement in an Independent Writing essay?",
          "skillId": "skill-writing-thesis",
          "options": [
            {
              "id": "a",
              "text": "To ask the reader a question to make them think."
            },
            {
              "id": "b",
              "text": "To present your main argument and preview the points you will discuss."
            },
            {
              "id": "c",
              "text": "To summarize the entire essay in great detail."
            },
            {
              "id": "d",
              "text": "To introduce a surprising fact that is unrelated to the topic."
            }
          ],
          "correctOptionId": "b",
          "hint": "The thesis is the roadmap for your entire essay.",
          "explanation": "A strong thesis statement clearly states your position and gives the reader a preview of the main ideas you will use to support it, providing structure and focus."
        },
        {
          "id": "toefl-prep-101-l12-q2",
          "text": "In the Integrated Writing task, it is crucial to...",
          "skillId": "skill-writing-integrated",
          "options": [
            {
              "id": "a",
              "text": "Include your own personal opinion on the topic."
            },
            {
              "id": "b",
              "text": "Accurately report how the lecture challenges or supports the points in the reading passage."
            },
            {
              "id": "c",
              "text": "Focus only on the information from the reading passage."
            },
            {
              "id": "d",
              "text": "Write more about the lecture than the reading."
            }
          ],
          "correctOptionId": "b",
          "hint": "This task tests your ability to synthesize information from two sources.",
          "explanation": "Your score depends on how well you connect the points from the lecture to the points from the reading. You should not include your own opinion."
        },
        {
          "id": "toefl-prep-101-l12-q3",
          "text": "Using specific examples in your body paragraphs helps to...",
          "skillId": "skill-writing-support",
          "options": [
            {
              "id": "a",
              "text": "Make your essay longer and meet the word count."
            },
            {
              "id": "b",
              "text": "Confuse the reader with too much information."
            },
            {
              "id": "c",
              "text": "Make your general statements more convincing and easier to understand."
            },
            {
              "id": "d",
              "text": "Show that you can memorize facts."
            }
          ],
          "correctOptionId": "c",
          "hint": "Examples make your ideas concrete and believable.",
          "explanation": "Strong essays support general claims with specific, relevant examples. This demonstrates a deeper understanding and makes your argument much more persuasive."
        },
        {
          "id": "toefl-prep-101-l12-q4",
          "text": "What does it mean to 'paraphrase' information from a source?",
          "skillId": "skill-writing-paraphrase",
          "options": [
            {
              "id": "a",
              "text": "To copy the information exactly as it is written."
            },
            {
              "id": "b",
              "text": "To change only one or two words in the original sentence."
            },
            {
              "id": "c",
              "text": "To quote the entire paragraph."
            },
            {
              "id": "d",
              "text": "To restate the original idea using your own words and sentence structure."
            }
          ],
          "correctOptionId": "d",
          "hint": "Think about how to express someone else's idea in your own voice.",
          "explanation": "Effective paraphrasing is a key academic skill. It involves fully understanding an idea and then explaining it using different vocabulary and sentence patterns to avoid plagiarism."
        },
        {
          "id": "toefl-prep-101-l12-q5",
          "text": "Before you start writing your essay, it is a good idea to spend 2-3 minutes doing what?",
          "skillId": "skill-writing-planning",
          "options": [
            {
              "id": "a",
              "text": "Checking your email."
            },
            {
              "id": "b",
              "text": "Creating a simple outline with your thesis and main points."
            },
            {
              "id": "c",
              "text": "Writing the introduction and conclusion first."
            },
            {
              "id": "d",
              "text": "Worrying about the time limit."
            }
          ],
          "correctOptionId": "b",
          "hint": "A little planning can save you a lot of time later.",
          "explanation": "Planning your essay before you write helps ensure your ideas are logical and well-organized. A quick outline prevents you from getting stuck and makes the writing process much smoother."
        }
      ]
    },
    {
      "id": "toefl-prep-101-l13",
      "title": "Time Management and Pacing Drills",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Look at the time limits for the Reading section. How much time should you ideally spend on each passage and its questions?",
          "Practice a 'cut-loss' rule: If you are stuck on a question for more than 90 seconds, make your best guess, flag it for review, and move on.",
          "Set a timer for 20 minutes and try to complete one Independent Writing task, including 3 minutes for planning and 2 minutes for review."
        ]
      },
      "interactiveActivities": [
        {
          "id": "toefl-prep-101-l13-ia1",
          "type": "sorting_buckets",
          "title": "Pacing Strategy Sorter",
          "description": "Sort these actions into 'Good Pacing' and 'Poor Pacing' categories.",
          "estimatedMinutes": 7,
          "difficultyLevel": "easy",
          "instructions": [
            "Read each test-taking behavior.",
            "Decide if it helps or hurts your time management.",
            "Drag it to the correct bucket."
          ],
          "data": {
            "buckets": [
              {
                "id": "good_pacing",
                "label": "Good Pacing"
              },
              {
                "id": "poor_pacing",
                "label": "Poor Pacing"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Spending 10 minutes on one multiple-choice question.",
                "correctBucketId": "poor_pacing"
              },
              {
                "id": "i2",
                "label": "Saving 2 minutes at the end of the writing task to proofread.",
                "correctBucketId": "good_pacing"
              },
              {
                "id": "i3",
                "label": "Answering the easiest questions in a section first.",
                "correctBucketId": "good_pacing"
              },
              {
                "id": "i4",
                "label": "Reading the passage so slowly that you only finish half the questions.",
                "correctBucketId": "poor_pacing"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "toefl-prep-101-l14",
      "title": "Mixed-Section Simulation",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "toefl-prep-101-l14-a1",
          "type": "image",
          "title": "Checklist: Pre-Test Routine",
          "content": "A simple checklist for what to do before a full practice test: review notes, set time goals, and prepare your workspace."
        },
        {
          "id": "toefl-prep-101-l14-a2",
          "type": "animation",
          "title": "How to Analyze Your Mistakes",
          "content": "A short animation showing how to categorize errors from a practice test into 'Careless Mistake,' 'Content Gap,' or 'Time Pressure Error' to guide your review."
        }
      ]
    },
    {
      "id": "toefl-prep-101-l15",
      "title": "Full Mock Exam & Next Steps",
      "type": "quiz",
      "duration": 25,
      "quizBlueprint": {
        "frequency": "mock_assessment",
        "questionsPerCheck": 10,
        "totalQuestions": 10,
        "timeLimitMinutes": 20,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 10,
            "pointsEach": 1,
            "bloomsLevels": [
              2,
              3,
              4
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 2,
          "medium": 5,
          "hard": 3
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.8
      },
      "questions": [
        {
          "id": "toefl-prep-101-l15-q1",
          "text": "After completing a full mock exam, what is the most productive first step in your review process?",
          "skillId": "skill-analysis-review",
          "options": [
            {
              "id": "a",
              "text": "Immediately take another full mock exam."
            },
            {
              "id": "b",
              "text": "Focus only on the questions you got right to build confidence."
            },
            {
              "id": "c",
              "text": "Identify patterns in your mistakes (e.g., specific question types, sections, or timing issues)."
            },
            {
              "id": "d",
              "text": "Check your final score and then forget about the test."
            }
          ],
          "correctOptionId": "c",
          "hint": "Effective review is about understanding *why* you made mistakes.",
          "explanation": "Analyzing your errors helps you create a targeted study plan. Focusing on your specific weak areas is the fastest way to improve your score."
        },
        {
          "id": "toefl-prep-101-l15-q2",
          "text": "If you consistently score lower in the Listening section than in other sections, what should your study plan prioritize?",
          "skillId": "skill-analysis-planning",
          "options": [
            {
              "id": "a",
              "text": "Stop practicing listening and focus on your stronger sections."
            },
            {
              "id": "b",
              "text": "Do more timed listening drills and practice note-taking on academic lectures."
            },
            {
              "id": "c",
              "text": "Practice reading more quickly."
            },
            {
              "id": "d",
              "text": "Memorize more vocabulary words."
            }
          ],
          "correctOptionId": "b",
          "hint": "Address your biggest weakness directly.",
          "explanation": "Your study time is limited, so you should dedicate the most effort to the area that has the most room for improvement and will have the biggest impact on your overall score."
        },
        {
          "id": "toefl-prep-101-l15-q3",
          "text": "You find that you run out of time on the Reading section. Which strategy adjustment is most likely to help?",
          "skillId": "skill-analysis-pacing",
          "options": [
            {
              "id": "a",
              "text": "Read each passage three times before looking at the questions."
            },
            {
              "id": "b",
              "text": "Set a strict time limit for each passage and move on even if you haven't answered all questions."
            },
            {
              "id": "c",
              "text": "Spend at least five minutes on every vocabulary question."
            },
            {
              "id": "d",
              "text": "Answer the questions in random order."
            }
          ],
          "correctOptionId": "b",
          "hint": "Good time management requires discipline.",
          "explanation": "By allocating a specific amount of time to each passage (e.g., 18 minutes), you ensure you have a chance to attempt all questions. This prevents you from getting bogged down and losing easy points later on."
        },
        {
          "id": "toefl-prep-101-l15-q4",
          "text": "Your speaking responses are clear, but they lack specific details and examples. How can you improve this?",
          "skillId": "skill-analysis-speaking",
          "options": [
            {
              "id": "a",
              "text": "Speak more slowly to fill the time."
            },
            {
              "id": "b",
              "text": "During prep time, brainstorm one specific example for each main reason you plan to give."
            },
            {
              "id": "c",
              "text": "Use more complicated grammar."
            },
            {
              "id": "d",
              "text": "Memorize a list of interesting facts."
            }
          ],
          "correctOptionId": "b",
          "hint": "Strong support makes your argument convincing.",
          "explanation": "Development is a key scoring criterion. Actively planning your examples during the short preparation time ensures you have concrete support to offer, making your response much stronger."
        },
        {
          "id": "toefl-prep-101-l15-q5",
          "text": "In your Integrated Writing task, you accurately summarized the reading and lecture, but failed to connect them. What should you focus on next time?",
          "skillId": "skill-analysis-writing",
          "options": [
            {
              "id": "a",
              "text": "Using transition words that explicitly show the relationship (e.g., 'In contrast,' 'The lecturer reinforces this point by...')."
            },
            {
              "id": "b",
              "text": "Writing a longer introduction."
            },
            {
              "id": "c",
              "text": "Checking for spelling errors."
            },
            {
              "id": "d",
              "text": "Adding your own opinion about the topic."
            }
          ],
          "correctOptionId": "a",
          "hint": "The task is about synthesis, not just summary.",
          "explanation": "The highest-scoring essays make the connections between the two sources very clear. Using specific transition phrases is the most effective way to signal this relationship to the scorer."
        },
        {
          "id": "toefl-prep-101-l15-q6",
          "text": "What is the main benefit of simulating test-day conditions (e.g., quiet room, no interruptions) during a mock exam?",
          "skillId": "skill-analysis-simulation",
          "options": [
            {
              "id": "a",
              "text": "It makes the practice test feel less important."
            },
            {
              "id": "b",
              "text": "It helps you practice managing time, focus, and stress, just like on the real test."
            },
            {
              "id": "c",
              "text": "It allows you to use a dictionary and other aids."
            },
            {
              "id": "d",
              "text": "It guarantees you will get a high score."
            }
          ],
          "correctOptionId": "b",
          "hint": "The TOEFL is a test of endurance as well as knowledge.",
          "explanation": "Practicing under realistic conditions builds mental stamina and helps you develop strategies for handling the pressure of the actual exam, leading to a more reliable performance on test day."
        },
        {
          "id": "toefl-prep-101-l15-q7",
          "text": "If your mock exam score is close to your target, what should be your focus in the final week of prep?",
          "skillId": "skill-analysis-finalprep",
          "options": [
            {
              "id": "a",
              "text": "Learning a lot of new, advanced material."
            },
            {
              "id": "b",
              "text": "Taking a full week off from studying."
            },
            {
              "id": "c",
              "text": "Reviewing key strategies, doing light practice, and avoiding burnout."
            },
            {
              "id": "d",
              "text": "Taking three more full mock exams in two days."
            }
          ],
          "correctOptionId": "c",
          "hint": "Cramming at the last minute can be counterproductive.",
          "explanation": "In the final days, it's best to reinforce what you already know and ensure you are well-rested and confident. Light review is more effective than intense, stressful cramming."
        },
        {
          "id": "toefl-prep-101-l15-q8",
          "text": "You notice you make most of your mistakes at the end of long sections. This suggests you should work on...",
          "skillId": "skill-analysis-stamina",
          "options": [
            {
              "id": "a",
              "text": "Your vocabulary."
            },
            {
              "id": "b",
              "text": "Your mental stamina and focus."
            },
            {
              "id": "c",
              "text": "Your typing speed."
            },
            {
              "id": "d",
              "text": "Your grammar."
            }
          ],
          "correctOptionId": "b",
          "hint": "Performance can drop when you get tired.",
          "explanation": "This pattern often points to fatigue or loss of focus. Doing timed, full-length sections during practice can help build the endurance needed to maintain performance throughout the entire test."
        },
        {
          "id": "toefl-prep-101-l15-q9",
          "text": "The best way to use feedback from a speaking or writing practice response is to...",
          "skillId": "skill-analysis-feedback",
          "options": [
            {
              "id": "a",
              "text": "Ignore the feedback if you disagree with it."
            },
            {
              "id": "b",
              "text": "Read the feedback once and then move on."
            },
            {
              "id": "c",
              "text": "Identify one or two key areas for improvement and consciously apply that feedback to your next practice attempt."
            },
            {
              "id": "d",
              "text": "Try to fix every single mistake all at once."
            }
          ],
          "correctOptionId": "c",
          "hint": "Improvement happens one step at a time.",
          "explanation": "Trying to fix everything at once is overwhelming. A much more effective approach is to focus on improving one or two specific skills at a time, which leads to gradual but lasting improvement."
        },
        {
          "id": "toefl-prep-101-l15-q10",
          "text": "What is a 'gap closure plan'?",
          "skillId": "skill-analysis-gap-plan",
          "options": [
            {
              "id": "a",
              "text": "A plan to skip the questions you don't know."
            },
            {
              "id": "b",
              "text": "A schedule for taking breaks during the test."
            },
            {
              "id": "c",
              "text": "A targeted study plan based on your mock exam results that focuses on turning your weaknesses into strengths."
            },
            {
              "id": "d",
              "text": "A list of excuses for why you might get a low score."
            }
          ],
          "correctOptionId": "c",
          "hint": "This is about creating a smart plan for your final preparation.",
          "explanation": "A gap closure plan is an action plan. After analyzing your mock exam, you identify the 'gaps' in your skills and create a specific plan of drills and review activities to close those gaps before test day."
        }
      ]
    }
  ]
};
