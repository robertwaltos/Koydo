import type { LearningModule } from "@/lib/modules/types";

export const world_history_201_Module: LearningModule = {
  "id": "world-history-201",
  "title": "World History Themes and Turning Points",
  "description": "Trace long-term historical themes using sources, causation, and continuity/change analysis.",
  "subject": "History Worldwide",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "history"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Understand core concepts like causation, continuity, and change in World History.",
    "Apply evidence and argument strategies by analyzing primary and secondary sources.",
    "Demonstrate mastery of historical thinking skills through interactive scenarios and quizzes."
  ],
  "lessons": [
    {
      "id": "world-history-201-l01",
      "title": "Causation in Historical Events",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "world-history-201-l01-c1",
          "title": "The Domino Effect of History",
          "content": "Have you ever wondered why big events happen? In history, events rarely happen out of nowhere. They are connected like falling dominoes. This is called causation, which means understanding how certain events (causes) lead to other events (effects). [Visual Prompt: An animation of colorful dominoes falling, with the first domino labeled 'Cause' and the final domino labeled 'Effect'.] By the end of this lesson, you will be a history detective, able to trace the clues of why things happened the way they did."
        },
        {
          "id": "world-history-201-l01-c2",
          "title": "Core Concept: Cause and Effect",
          "content": "Causation works together with continuity (things staying the same) and change (things shifting). To analyze history, we first identify the main event. Then, we look for evidence of what triggered it. Was it a new invention? A change in leadership? A natural disaster? [Visual Prompt: A magnifying glass hovering over a timeline, highlighting a specific spark that starts a fire.] This process helps us see how different events influence each other over time."
        },
        {
          "id": "world-history-201-l01-c3",
          "title": "Worked Example: The Printing Press",
          "content": "Let's walk through an example! Goal: Understand the impact of the printing press. Cause: Johannes Gutenberg invents a machine that can print books quickly in the 1400s. Effect: Books become cheaper, more people learn to read, and new ideas spread rapidly across the world. [Visual Prompt: A split screen showing a slow, hand-written book on the left, and a fast-moving printing press churning out pages on the right.] We verify our reasoning by checking historical records from that time."
        },
        {
          "id": "world-history-201-l01-c4",
          "title": "Transfer Prompt: Your Turn",
          "content": "Now it's your turn! Think of a major event you've learned about, like the building of the pyramids or the first moon landing. What was one cause, and what was one effect? [Visual Prompt: A blank flowchart with boxes for 'Cause', 'Event', and 'Effect' waiting to be filled.] Step-by-step: (1) Name the event, (2) Identify the cause, (3) Explain the effect, and (4) Check if the evidence supports your claim."
        }
      ],
      "flashcards": [
        {
          "id": "world-history-201-l01-f1",
          "front": "Causation",
          "back": "The relationship between cause and effect; how one event leads to another."
        },
        {
          "id": "world-history-201-l01-f2",
          "front": "Continuity",
          "back": "Things that remain the same over a long period of time in history."
        },
        {
          "id": "world-history-201-l01-f3",
          "front": "Change",
          "back": "Things that shift, evolve, or become different over time."
        },
        {
          "id": "world-history-201-l01-f4",
          "front": "Evidence",
          "back": "Facts, objects, or documents that prove a historical event happened."
        }
      ],
      "learningAids": [
        {
          "id": "world-history-201-l01-a1",
          "type": "image",
          "title": "Concept Poster: Causation",
          "content": "A colorful infographic showing a tree. The roots are the 'Causes', the trunk is the 'Event', and the branches/leaves are the 'Effects'."
        },
        {
          "id": "world-history-201-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing a friendly history detective character who uses a magnifying glass to find clues."
        }
      ]
    },
    {
      "id": "world-history-201-l02",
      "title": "Continuity and Change Over Time",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Identify one thing in your town that has stayed the same for 50 years (Continuity).",
          "Identify one thing in your town that has changed recently (Change).",
          "Why is it important for historians to study both?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "world-history-201-l02-ia1",
          "type": "drag_and_drop",
          "title": "Sort the Eras: Continuity vs. Change",
          "description": "Sort each historical scenario into Continuity or Change.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "data": {
            "targets": [
              {
                "id": "continuity",
                "label": "Continuity (Stayed the Same)"
              },
              {
                "id": "change",
                "label": "Change (Shifted/Evolved)"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "People continuing to farm wheat for thousands of years",
                "correctTargetId": "continuity"
              },
              {
                "id": "d2",
                "label": "The invention of the steam engine replacing horse-drawn carts",
                "correctTargetId": "change"
              },
              {
                "id": "d3",
                "label": "Using the same trade routes across the desert for centuries",
                "correctTargetId": "continuity"
              },
              {
                "id": "d4",
                "label": "The transition from writing on clay tablets to writing on paper",
                "correctTargetId": "change"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "world-history-201-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "[Visual Prompt: A digital whiteboard split into two columns: 'Then' and 'Now'.] Complete a guided activity comparing transportation in the 1800s to today."
        }
      ]
    },
    {
      "id": "world-history-201-l03",
      "title": "Checkpoint: Historical Thinking II",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "world-history-201-l03-q1",
          "text": "Which of the following best describes 'causation' in history?",
          "skillId": "world-history-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "How one event directly leads to or influences another event."
            },
            {
              "id": "b",
              "text": "A list of random dates and names."
            },
            {
              "id": "c",
              "text": "When everything in a society stays exactly the same."
            },
            {
              "id": "d",
              "text": "Ignoring evidence to make up a fun story."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-201-l03-q2",
          "text": "What is the best first step when analyzing continuity and change?",
          "skillId": "world-history-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Look at a specific time period and identify what stayed the same and what shifted."
            },
            {
              "id": "b",
              "text": "Guess what happened without looking at any historical documents."
            },
            {
              "id": "c",
              "text": "Only focus on the things that changed and ignore the rest."
            },
            {
              "id": "d",
              "text": "Assume that people in the past lived exactly like we do today."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-201-l03-q3",
          "text": "Which option shows strong reasoning when looking at historical evidence?",
          "skillId": "world-history-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Using multiple sources to verify facts step by step."
            },
            {
              "id": "b",
              "text": "Ignoring details that don't fit your favorite theory."
            },
            {
              "id": "c",
              "text": "Believing the very first thing you read without checking."
            },
            {
              "id": "d",
              "text": "Changing the topic when the evidence gets hard to understand."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-201-l03-q4",
          "text": "Why is it important to study both causes AND effects?",
          "skillId": "world-history-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It gives us the full picture of why history unfolded the way it did."
            },
            {
              "id": "b",
              "text": "It creates unnecessary confusion."
            },
            {
              "id": "c",
              "text": "Effects are the only things that actually matter."
            },
            {
              "id": "d",
              "text": "Causes are usually just myths."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "world-history-201-l03-ia1",
          "type": "matching_pairs",
          "title": "Concept Match: Historical Thinking",
          "description": "Match the historical term to its real-world example.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the historical term on the left.",
            "Find the matching example on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Causation"
              },
              {
                "id": "l2",
                "label": "Continuity"
              },
              {
                "id": "l3",
                "label": "Change"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "A drought leads to a poor harvest, which causes people to migrate."
              },
              {
                "id": "r2",
                "label": "A village uses the same river for fishing for 500 years."
              },
              {
                "id": "r3",
                "label": "A kingdom switches from trading gold to using paper money."
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
          "id": "world-history-201-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Remember the 3 C's of History: Causation, Continuity, and Change!"
        }
      ]
    },
    {
      "id": "world-history-201-l04",
      "title": "Using Sources and Corroboration",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "world-history-201-l04-c1",
          "title": "The Historian's Toolkit",
          "content": "In this lesson, we will learn how to use historical evidence like a detective. Historians don't just guess what happened; they look at sources. A 'Primary Source' is something from the actual time period, like a diary or a photograph. A 'Secondary Source' is written later, like a textbook. [Visual Prompt: An animation showing a dusty old diary (Primary) next to a modern history textbook (Secondary).] By the end of this lesson, you will know how to weigh evidence to find the truth."
        },
        {
          "id": "world-history-201-l04-c2",
          "title": "Corroboration: Checking the Facts",
          "content": "What happens if one person says a battle started at dawn, but another says it started at noon? We use a skill called 'Corroboration'. This means checking multiple sources to see where they agree and disagree. [Visual Prompt: Three different witnesses pointing in different directions, until the detective finds the clues that overlap.] Step 1: Read Source A. Step 2: Read Source B. Step 3: Find the overlapping facts to build a strong argument."
        },
        {
          "id": "world-history-201-l04-c3",
          "title": "Common Mistakes: Believing Everything",
          "content": "A common mistake is believing the very first source you read. Sometimes, people in history lied, exaggerated, or only saw part of the event. If you skip corroboration, you might end up with a false conclusion. Always ask: 'Who wrote this? Why did they write it? What might they be leaving out?' [Visual Prompt: A cartoon character reading a sign that says 'Free Gold Here!' and running into a trap, showing the danger of not questioning sources.]"
        },
        {
          "id": "world-history-201-l04-c4",
          "title": "Independent Try: Be the Detective",
          "content": "Now it's your turn! Imagine you find a letter from a king saying he is loved by all his people. Then, you find a diary from a farmer saying the king is cruel. How do you find the truth? You need more sources! [Visual Prompt: A scale weighing the king's letter on one side and the farmer's diary on the other.] Practice asking 'Who, What, When, Where, and Why' for every document you read."
        }
      ],
      "flashcards": [
        {
          "id": "world-history-201-l04-f1",
          "front": "Primary Source",
          "back": "A document or object written or created during the time under study (e.g., a diary, photograph, or artifact)."
        },
        {
          "id": "world-history-201-l04-f2",
          "front": "Secondary Source",
          "back": "An account or interpretation of events created by someone without firsthand experience (e.g., a textbook)."
        },
        {
          "id": "world-history-201-l04-f3",
          "front": "Corroboration",
          "back": "Comparing different sources to confirm facts and find where they agree or disagree."
        },
        {
          "id": "world-history-201-l04-f4",
          "front": "Sourcing",
          "back": "Asking who wrote a document, when it was written, and why it was created before trusting it."
        }
      ],
      "learningAids": [
        {
          "id": "world-history-201-l04-a1",
          "type": "image",
          "title": "Source Detective Sheet",
          "content": "[Visual Prompt: A graphic organizer shaped like a magnifying glass with sections for 'Who?', 'When?', 'Why?', and 'Do others agree?']"
        }
      ]
    },
    {
      "id": "world-history-201-l05",
      "title": "Perspective, Bias, and Interpretation",
      "type": "interactive",
      "duration": 13,
      "metadata": {
        "prompts": [
          "How might a king and a peasant view a new tax differently?",
          "Can you think of a time when you and a friend saw the same event but remembered it differently?",
          "Why is it important to spot bias in historical documents?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "world-history-201-l05-ia1",
          "type": "sorting_buckets",
          "title": "Fact, Opinion, or Bias?",
          "description": "Sort the historical statements into Fact, Opinion, or Bias.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "fact",
                "label": "Historical Fact"
              },
              {
                "id": "opinion",
                "label": "Personal Opinion"
              },
              {
                "id": "bias",
                "label": "Strong Bias"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "The treaty was signed on July 4, 1776.",
                "correctBucketId": "fact"
              },
              {
                "id": "i2",
                "label": "I believe the treaty was a good idea for our country.",
                "correctBucketId": "opinion"
              },
              {
                "id": "i3",
                "label": "Our glorious leader is perfect and our enemies are evil monsters.",
                "correctBucketId": "bias"
              },
              {
                "id": "i4",
                "label": "The battle lasted for three days.",
                "correctBucketId": "fact"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "world-history-201-l05-a1",
          "type": "animation",
          "title": "The Two Sides of the Story",
          "content": "[Visual Prompt: An animation showing two people looking at a number on the ground. One sees a '6', the other sees a '9'. It explains how perspective changes history.]"
        }
      ]
    },
    {
      "id": "world-history-201-l06",
      "title": "Checkpoint: Evidence and Argument",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "world-history-201-l06-q1",
          "text": "Which of the following is an example of a Primary Source?",
          "skillId": "world-history-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "A soldier's handwritten diary from the battlefield."
            },
            {
              "id": "b",
              "text": "A modern history textbook."
            },
            {
              "id": "c",
              "text": "A movie made last year about a historical event."
            },
            {
              "id": "d",
              "text": "An encyclopedia article written by a historian."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-201-l06-q2",
          "text": "What does it mean to 'corroborate' historical sources?",
          "skillId": "world-history-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "To compare multiple sources to see where they agree and disagree."
            },
            {
              "id": "b",
              "text": "To throw away sources you don't like."
            },
            {
              "id": "c",
              "text": "To only read the longest document."
            },
            {
              "id": "d",
              "text": "To assume the oldest source is always 100% correct."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-201-l06-q3",
          "text": "Why do historians need to look out for 'bias'?",
          "skillId": "world-history-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Because writers often favor one side and might leave out facts that make them look bad."
            },
            {
              "id": "b",
              "text": "Because bias makes documents completely useless."
            },
            {
              "id": "c",
              "text": "Because historians want to copy the bias into their own books."
            },
            {
              "id": "d",
              "text": "Because bias is a type of ancient language."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-201-l06-q4",
          "text": "If two primary sources disagree about how a fire started, what should you do?",
          "skillId": "world-history-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "Look for a third source and analyze the perspectives of the writers."
            },
            {
              "id": "b",
              "text": "Flip a coin to decide who is right."
            },
            {
              "id": "c",
              "text": "Assume the fire never happened."
            },
            {
              "id": "d",
              "text": "Pick the source with the best handwriting."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "world-history-201-l06-ia1",
          "type": "matching_pairs",
          "title": "Fix the Historian's Mistake",
          "description": "Match the historian's error to the best correction strategy.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review the mistake on the left.",
            "Pick the best way to fix it on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Only reading one diary to understand a war."
              },
              {
                "id": "l2",
                "label": "Believing a king's letter that says he is perfect."
              },
              {
                "id": "l3",
                "label": "Using a 2020 movie as proof of how Romans lived."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Find more sources to corroborate the story."
              },
              {
                "id": "r2",
                "label": "Check for bias and ask why he wrote it."
              },
              {
                "id": "r3",
                "label": "Find a primary source from Ancient Rome instead."
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
          "id": "world-history-201-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the 3 S's: Source it, Study it, Synthesize it!"
        }
      ]
    },
    {
      "id": "world-history-201-l07",
      "title": "Global Interconnections Across Eras",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "world-history-201-l07-c1",
          "title": "The Woven Threads of History",
          "content": "History isn't just about isolated countries; it's about how the world connects. Think of history as a giant woven blanket. Trade routes, like the famous Silk Road, connected Asia, Africa, and Europe. People didn't just trade silk and spices; they traded ideas, religions, and even diseases. [Visual Prompt: An animated map of the world with glowing lines connecting different continents, showing the flow of goods and ideas.]"
        },
        {
          "id": "world-history-201-l07-c2",
          "title": "Cultural Exchange",
          "content": "When different cultures meet, they influence each other. This is called cultural exchange. For example, paper was invented in China, but through trade, the knowledge spread to the Middle East and eventually to Europe. When analyzing global interconnections, always look for the 'ripple effect'—how an idea in one place changes life in another. [Visual Prompt: A drop of water hitting a pond, with ripples spreading out to touch different shores.]"
        },
        {
          "id": "world-history-201-l07-c3",
          "title": "Quality Control: Seeing the Big Picture",
          "content": "As you study these connections, make sure you are looking at the big picture. Don't just focus on the goods being traded. Ask yourself: How did this trade change the daily lives of the people? Did it bring wealth? Did it cause conflict? Ensuring your analysis is complete means looking at both the positive and negative impacts of global connections."
        },
        {
          "id": "world-history-201-l07-c4",
          "title": "Next-Step Plan: Mapping Connections",
          "content": "After learning about a trade route or an explorer, take a moment to map it out. Write down one good thing that came from the connection (like new foods) and one challenge (like the spread of illness). This reflection will help you understand the complex reality of our interconnected world. [Visual Prompt: A split chart showing 'Benefits of Connection' and 'Challenges of Connection'.]"
        }
      ],
      "flashcards": [
        {
          "id": "world-history-201-l07-f1",
          "front": "Global Interconnection",
          "back": "How different parts of the world are linked through trade, communication, and travel."
        },
        {
          "id": "world-history-201-l07-f2",
          "front": "Cultural Exchange",
          "back": "The sharing of ideas, traditions, and knowledge between different groups of people."
        },
        {
          "id": "world-history-201-l07-f3",
          "front": "Trade Route",
          "back": "A network of pathways and stops used for the commercial transport of cargo."
        },
        {
          "id": "world-history-201-l07-f4",
          "front": "Ripple Effect",
          "back": "How a single event or invention in one place can spread and impact the whole world."
        }
      ],
      "learningAids": [
        {
          "id": "world-history-201-l07-a1",
          "type": "practice",
          "title": "Connection Mapper",
          "content": "[Visual Prompt: A blank world map where students can draw lines connecting regions and label what was traded.]"
        }
      ]
    },
    {
      "id": "world-history-201-l08",
      "title": "History Seminar Protocol",
      "type": "interactive",
      "duration": 10,
      "metadata": {
        "prompts": [
          "What historical concept makes the most sense to you so far?",
          "Which skill (causation, sourcing, bias) is the trickiest?",
          "How will you practice your trickiest skill this week?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "world-history-201-l08-ia1",
          "type": "matching_pairs",
          "title": "Historian's Reflection Match",
          "description": "Match your study struggle with the best historian's action plan.",
          "estimatedMinutes": 7,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "I keep confusing primary and secondary sources."
              },
              {
                "id": "l2",
                "label": "I forget to check for bias before believing a document."
              },
              {
                "id": "l3",
                "label": "I struggle to see how events are connected (causation)."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Practice sorting 5 documents by when they were written."
              },
              {
                "id": "r2",
                "label": "Use a 'Who wrote this and why?' checklist every time."
              },
              {
                "id": "r3",
                "label": "Draw a cause-and-effect flowchart for the next event."
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
          "id": "world-history-201-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember: Observe the evidence, Adjust your theory, Repeat the process!"
        }
      ]
    },
    {
      "id": "world-history-201-l09",
      "title": "Review: World History Themes",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "world-history-201-l09-q1",
          "text": "Which scenario is the best example of 'Cultural Exchange'?",
          "skillId": "world-history-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Merchants from Asia bringing noodles to Italy, inspiring pasta."
            },
            {
              "id": "b",
              "text": "A village building a wall to keep everyone out."
            },
            {
              "id": "c",
              "text": "A king writing a diary about his daily meals."
            },
            {
              "id": "d",
              "text": "A storm destroying a local crop."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-201-l09-q2",
          "text": "When analyzing a historical trade route, what should a historian look for?",
          "skillId": "world-history-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Both the goods traded and the ideas/diseases that spread."
            },
            {
              "id": "b",
              "text": "Only the gold and silver that was moved."
            },
            {
              "id": "c",
              "text": "Just the names of the merchants."
            },
            {
              "id": "d",
              "text": "Evidence that trade never actually happened."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-201-l09-q3",
          "text": "Why is understanding 'perspective' crucial when studying global history?",
          "skillId": "world-history-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Because an event like a new trade route might be great for one country but harmful to another."
            },
            {
              "id": "b",
              "text": "Because everyone in history always agreed on everything."
            },
            {
              "id": "c",
              "text": "Because perspective helps you memorize dates faster."
            },
            {
              "id": "d",
              "text": "Because it allows you to ignore primary sources."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-201-l09-q4",
          "text": "What is the difference between continuity and change?",
          "skillId": "world-history-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "Continuity is what stays the same; change is what shifts over time."
            },
            {
              "id": "b",
              "text": "Continuity is about the future; change is about the past."
            },
            {
              "id": "c",
              "text": "They mean the exact same thing."
            },
            {
              "id": "d",
              "text": "Continuity is a primary source; change is a secondary source."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "world-history-201-l09-ia1",
          "type": "matching_pairs",
          "title": "Theme Match: World History",
          "description": "Match the historical theme to its definition.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review the theme on the left.",
            "Pick the correct definition on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Global Interconnections"
              },
              {
                "id": "l2",
                "label": "Causation"
              },
              {
                "id": "l3",
                "label": "Corroboration"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "How different regions link through trade and ideas."
              },
              {
                "id": "r2",
                "label": "How one event triggers another event."
              },
              {
                "id": "r3",
                "label": "Checking multiple sources to confirm facts."
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
          "id": "world-history-201-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "History is a web! Pull one string (cause) and watch the whole web move (effect)."
        }
      ]
    },
    {
      "id": "world-history-201-l10",
      "title": "Mastery: World History II",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "world-history-201-l10-q1",
          "text": "A historian finds a letter from a general claiming his army won a battle easily. What is the best next step?",
          "skillId": "world-history-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Find letters from enemy soldiers or ordinary citizens to corroborate the story."
            },
            {
              "id": "b",
              "text": "Publish a book saying the general was the greatest in history."
            },
            {
              "id": "c",
              "text": "Throw the letter away because it is probably biased."
            },
            {
              "id": "d",
              "text": "Assume the battle never happened."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-201-l10-q2",
          "text": "Which of the following is an example of a 'Ripple Effect' in history?",
          "skillId": "world-history-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "The invention of the compass in China leading to European explorers crossing the ocean."
            },
            {
              "id": "b",
              "text": "A king eating an apple for breakfast."
            },
            {
              "id": "c",
              "text": "A local river flooding and receding the next day."
            },
            {
              "id": "d",
              "text": "A diary being locked in a chest for 100 years."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-201-l10-q3",
          "text": "Why do historians study 'Continuity'?",
          "skillId": "world-history-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "To understand the deep traditions and daily habits that shape a society over centuries."
            },
            {
              "id": "b",
              "text": "Because change is too difficult to track."
            },
            {
              "id": "c",
              "text": "To prove that history is boring."
            },
            {
              "id": "d",
              "text": "Because primary sources only talk about things that stay the same."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-201-l10-q4",
          "text": "If a textbook (Secondary Source) disagrees with a diary (Primary Source), what should you do?",
          "skillId": "world-history-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "Analyze the bias of the diary writer and check the sources the textbook used."
            },
            {
              "id": "b",
              "text": "Always trust the textbook because it is newer."
            },
            {
              "id": "c",
              "text": "Always trust the diary because it is older."
            },
            {
              "id": "d",
              "text": "Ignore both and guess."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "world-history-201-l10-ia1",
          "type": "matching_pairs",
          "title": "Mastery Match: Historical Scenarios",
          "description": "Match the historical scenario to the skill being used.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the scenario on the left.",
            "Match it to the historical skill on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Tracing how a drought led to a revolution."
              },
              {
                "id": "l2",
                "label": "Comparing a Roman coin to a Greek text."
              },
              {
                "id": "l3",
                "label": "Noticing that farming methods didn't change for 200 years."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Causation"
              },
              {
                "id": "r2",
                "label": "Corroboration"
              },
              {
                "id": "r3",
                "label": "Continuity"
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
          "id": "world-history-201-l10-a1",
          "type": "mnemonic",
          "title": "Mastery Tip",
          "content": "A true historian questions everything! Who, What, When, Where, and Why?"
        }
      ]
    },
    {
      "id": "world-history-201-l11",
      "title": "Applied History Worldwide Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Select one historical skill you want to improve (e.g., finding bias).",
          "Apply a step-by-step check to a new historical document.",
          "Document your plan for the next quiz."
        ]
      },
      "interactiveActivities": [
        {
          "id": "world-history-201-l11-ia1",
          "type": "sorting_buckets",
          "title": "The Historian's Process",
          "description": "Sort the actions into the correct phase of historical research: Gather, Analyze, or Conclude.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "gather",
                "label": "Gather Evidence"
              },
              {
                "id": "analyze",
                "label": "Analyze Sources"
              },
              {
                "id": "conclude",
                "label": "Draw Conclusions"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Find three different diaries from the 1800s.",
                "correctBucketId": "gather"
              },
              {
                "id": "i2",
                "label": "Check the diaries for bias and compare their stories.",
                "correctBucketId": "analyze"
              },
              {
                "id": "i3",
                "label": "Write an essay explaining what most likely happened.",
                "correctBucketId": "conclude"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "world-history-201-l11-a1",
          "type": "practice",
          "title": "Research Loop Card",
          "content": "[Visual Prompt: A circular diagram showing Gather -> Analyze -> Conclude -> Repeat.]"
        }
      ]
    },
    {
      "id": "world-history-201-l12",
      "title": "World History II Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "world-history-201-l12-q1",
          "text": "Which of the following is the best example of 'Change' in history?",
          "skillId": "world-history-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "A country replacing its king with an elected president."
            },
            {
              "id": "b",
              "text": "A family passing down a cooking recipe for generations."
            },
            {
              "id": "c",
              "text": "The sun rising every morning."
            },
            {
              "id": "d",
              "text": "People continuing to speak the same language."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-201-l12-q2",
          "text": "When looking at a painting of a battle made 200 years AFTER the battle, what is it?",
          "skillId": "world-history-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "A Secondary Source."
            },
            {
              "id": "b",
              "text": "A Primary Source."
            },
            {
              "id": "c",
              "text": "A Corroboration."
            },
            {
              "id": "d",
              "text": "A Causation."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-201-l12-q3",
          "text": "How does 'Perspective' change how history is written?",
          "skillId": "world-history-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "People write about events based on their own beliefs, culture, and experiences."
            },
            {
              "id": "b",
              "text": "It doesn't; history is always written exactly the same way by everyone."
            },
            {
              "id": "c",
              "text": "Perspective only matters in math, not history."
            },
            {
              "id": "d",
              "text": "It makes all primary sources completely false."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-201-l12-q4",
          "text": "Why is it useful to review historical concepts regularly?",
          "skillId": "world-history-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It strengthens your ability to connect past events to the present day."
            },
            {
              "id": "b",
              "text": "It makes you forget the dates."
            },
            {
              "id": "c",
              "text": "It is only useful for passing a single test."
            },
            {
              "id": "d",
              "text": "It has no value in real life."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "world-history-201-l12-ia1",
          "type": "matching_pairs",
          "title": "Skill Check: Applied Retest",
          "description": "Match the historical action to the skill it demonstrates.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review the action on the left.",
            "Pick the correct skill on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Figuring out why an empire fell."
              },
              {
                "id": "l2",
                "label": "Noticing how a culture's art stayed the same."
              },
              {
                "id": "l3",
                "label": "Reading a diary to see how a peasant felt."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Causation"
              },
              {
                "id": "r2",
                "label": "Continuity"
              },
              {
                "id": "r3",
                "label": "Perspective"
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
          "id": "world-history-201-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Primary = Present at the time. Secondary = Second-hand knowledge."
        }
      ]
    },
    {
      "id": "world-history-201-l13",
      "title": "History Worldwide Scenario Lab",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "world-history-201-l13-c1",
          "title": "Scenario Brief: The Columbian Exchange",
          "content": "In this scenario, we will explore a massive turning point: The Columbian Exchange. When explorers from Europe traveled to the Americas, they didn't just bring flags; they brought horses, wheat, and diseases. In return, they took back potatoes, tomatoes, and corn. [Visual Prompt: An animated map showing ships crossing the Atlantic, with icons of horses going West and tomatoes going East.] This challenge will help us understand how one event changed the whole world."
        },
        {
          "id": "world-history-201-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this scenario, we break it down. First, we look at Causation: Why did the explorers sail? Second, we look at Change: How did diets change in Europe when they got potatoes? Third, we look at Perspective: How did the Native Americans view this arrival compared to the Europeans? [Visual Prompt: A detective's notebook with three tabs: Causes, Changes, Perspectives.]"
        },
        {
          "id": "world-history-201-l13-c3",
          "title": "Execute and Justify",
          "content": "Now we put our plan into action. If we claim that potatoes changed European history, we must justify it with evidence. We can look at population records (Primary Sources) showing that populations grew because potatoes were easy to farm. We don't just guess; we link our claims directly to the historical evidence. [Visual Prompt: A glowing line connecting a picture of a potato to a chart showing population growth.]"
        },
        {
          "id": "world-history-201-l13-c4",
          "title": "Evaluate Outcome",
          "content": "Finally, we evaluate our findings. Did the Columbian Exchange have only positive effects? No. While diets improved in Europe, diseases devastated Native American populations. A good historian looks at the whole picture. Reflecting on both the good and the bad helps us understand the true complexity of history."
        }
      ],
      "flashcards": [
        {
          "id": "world-history-201-l13-f1",
          "front": "Scenario Planning",
          "back": "Breaking a large historical event into smaller questions: Causes, Changes, and Perspectives."
        },
        {
          "id": "world-history-201-l13-f2",
          "front": "Evidence Link",
          "back": "Connecting every historical claim you make to a specific primary or secondary source."
        },
        {
          "id": "world-history-201-l13-f3",
          "front": "Columbian Exchange",
          "back": "The global transfer of plants, animals, and diseases that occurred after European arrival in the Americas."
        },
        {
          "id": "world-history-201-l13-f4",
          "front": "Holistic View",
          "back": "Looking at both the positive and negative impacts of a historical event."
        }
      ],
      "learningAids": [
        {
          "id": "world-history-201-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "[Visual Prompt: A real-world scenario map connecting causation (ships sailing), historical evidence (diaries), and perspective (two different viewpoints).]"
        },
        {
          "id": "world-history-201-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply the 'Evidence Link' strategy to a new case: The invention of the airplane. Explain your reasoning."
        }
      ]
    },
    {
      "id": "world-history-201-l14",
      "title": "History Worldwide Coaching Clinic",
      "type": "interactive",
      "duration": 13,
      "metadata": {
        "prompts": [
          "Identify one mistake you made in the last quiz.",
          "Choose the best way to fix that mistake for next time.",
          "Write a goal for your final Mastery Sprint."
        ]
      },
      "interactiveActivities": [
        {
          "id": "world-history-201-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match the common historian's mistake to the best correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "I keep confusing causes with effects."
              },
              {
                "id": "l2",
                "label": "I trust biased sources too quickly."
              },
              {
                "id": "l3",
                "label": "I forget to look at both continuity and change."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Draw a timeline: Cause comes BEFORE the event, Effect comes AFTER."
              },
              {
                "id": "r2",
                "label": "Always ask 'Who wrote this and what do they want?' first."
              },
              {
                "id": "r3",
                "label": "Use a T-chart: 'What stayed the same' vs 'What shifted'."
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
          "id": "world-history-201-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose the error, Correct the habit, Transfer the skill!"
        }
      ]
    },
    {
      "id": "world-history-201-l15",
      "title": "World History II Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "world-history-201-l15-q1",
          "text": "Which statement best explains 'Continuity' in World History?",
          "skillId": "world-history-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It refers to traditions, beliefs, or practices that remain the same over long periods."
            },
            {
              "id": "b",
              "text": "It refers to sudden, violent revolutions."
            },
            {
              "id": "c",
              "text": "It is a type of primary source written by a king."
            },
            {
              "id": "d",
              "text": "It means that history is completely unpredictable."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-201-l15-q2",
          "text": "What is the best first step when analyzing a newly discovered historical document?",
          "skillId": "world-history-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Determine who wrote it, when it was written, and why (Sourcing)."
            },
            {
              "id": "b",
              "text": "Assume everything in it is 100% true."
            },
            {
              "id": "c",
              "text": "Throw away all other documents because this one is new."
            },
            {
              "id": "d",
              "text": "Skip reading it and just look at the pictures."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-201-l15-q3",
          "text": "Which option shows strong reasoning when discussing 'Global Interconnections'?",
          "skillId": "world-history-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Explaining how a trade route spread both new technologies and new diseases."
            },
            {
              "id": "b",
              "text": "Claiming that countries never interacted with each other before the internet."
            },
            {
              "id": "c",
              "text": "Focusing only on one small village and ignoring the rest of the world."
            },
            {
              "id": "d",
              "text": "Saying that trade only ever brings positive results."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-201-l15-q4",
          "text": "Why is understanding 'Causation' essential for a historian?",
          "skillId": "world-history-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It helps explain WHY events happened, rather than just memorizing WHEN they happened."
            },
            {
              "id": "b",
              "text": "It makes reading primary sources unnecessary."
            },
            {
              "id": "c",
              "text": "It proves that all historical events are random."
            },
            {
              "id": "d",
              "text": "It is only used to study modern history, not ancient history."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "world-history-201-l15-ia1",
          "type": "matching_pairs",
          "title": "Final Sprint: Skill Match",
          "description": "Match the historical term to its ultimate definition.",
          "estimatedMinutes": 7,
          "difficultyLevel": "hard",
          "instructions": [
            "Review the term on the left.",
            "Pick the best definition on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Corroboration"
              },
              {
                "id": "l2",
                "label": "Perspective"
              },
              {
                "id": "l3",
                "label": "Causation"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Cross-checking multiple sources to find the truth."
              },
              {
                "id": "r2",
                "label": "The unique point of view of the person writing the source."
              },
              {
                "id": "r3",
                "label": "The chain reaction of events leading to an outcome."
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
          "id": "world-history-201-l15-a1",
          "type": "mnemonic",
          "title": "Final Tip",
          "content": "You are now a History Detective! Always look for the Cause, check the Source, and find the Connection."
        }
      ]
    }
  ]
};
