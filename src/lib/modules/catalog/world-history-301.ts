import type { LearningModule } from "@/lib/modules/types";

export const world_history_301_Module: LearningModule = {
  "id": "world-history-301",
  "title": "World History Interpretation and Synthesis",
  "description": "Synthesize causation, continuity, and source interpretation across major world history eras.",
  "subject": "History Worldwide",
  "tags": [
    "core",
    "curriculum",
    "interactive"
  ],
  "minAge": 10,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Understand core concepts of comparative causation and continuity vs. change.",
    "Apply historical argumentation strategies through source corroboration.",
    "Demonstrate mastery of historical synthesis with subject-specific case studies."
  ],
  "lessons": [
    {
      "id": "world-history-301-l01",
      "title": "Comparative Causation Across Eras",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "world-history-301-l01-c1",
          "title": "Comparative Causation Overview",
          "content": "[Visual Prompt: A split-screen animation showing the fall of the Roman Empire on the left and the Han Dynasty on the right, highlighting similar cracks forming in both structures.] In this lesson, we will dive into the exciting concept of comparative causation. This means we will learn how different events in history, even if they happened miles apart or in different eras, can be triggered by similar causes. By examining various historical events side-by-side, we practice synthesizing information—putting together different puzzle pieces to form a complete picture of the past."
        },
        {
          "id": "world-history-301-l01-c2",
          "title": "Continuity and Change",
          "content": "[Visual Prompt: A timeline morphing from a horse-drawn plow to a steam-powered tractor, with a persistent icon of a wheat stalk remaining constant.] The core concept we will focus on is how comparative causation works alongside the ideas of 'continuity' and 'change'. Continuity refers to things that stay the same over long periods, like the human need for agriculture. Change refers to dramatic shifts, like the invention of new farming machines. To understand history, we must identify what changed, what stayed the same, and what caused those shifts."
        },
        {
          "id": "world-history-301-l01-c3",
          "title": "Worked Example: Revolutions",
          "content": "[Visual Prompt: Two historical documents side-by-side: The Declaration of Independence and the Declaration of the Rights of Man.] Let's walk through a guided example! First, we define our goal: comparing the causes of the American and French Revolutions. Next, we gather evidence. Both populations were frustrated by unfair taxation and lack of representation. Finally, we verify our results: Did these similar causes lead to similar changes? Yes, both resulted in the overthrow of a monarchy or colonial power. This step-by-step approach builds strong analytical skills."
        },
        {
          "id": "world-history-301-l01-c4",
          "title": "Transfer Prompt",
          "content": "[Visual Prompt: A glowing map showing the ancient Silk Road, slowly fading into a map of the modern global shipping routes.] Now it's your turn! Apply the same process to a new scenario: Compare the causes of the expansion of the Silk Road to the causes of the Columbian Exchange. What drove people to explore and trade in both eras? Explain your reasoning in one clear sentence. This exercise reinforces your understanding of how human motivations repeat throughout history."
        }
      ],
      "flashcards": [
        {
          "id": "world-history-301-l01-f1",
          "front": "Comparative Causation",
          "back": "Identifying similar causes that led to different historical events across various eras or regions."
        },
        {
          "id": "world-history-301-l01-f2",
          "front": "Continuity",
          "back": "Historical patterns, traditions, or systems that remain the same over a long period of time."
        },
        {
          "id": "world-history-301-l01-f3",
          "front": "Change",
          "back": "Significant shifts or disruptions in historical patterns, such as a revolution or technological breakthrough."
        },
        {
          "id": "world-history-301-l01-f4",
          "front": "Synthesis",
          "back": "Combining different pieces of historical evidence to form a new, complete understanding of the past."
        }
      ],
      "learningAids": [
        {
          "id": "world-history-301-l01-a1",
          "type": "image",
          "title": "Concept Poster: Continuity vs. Change",
          "content": "A colorful infographic showing a river (continuity) with various boats and bridges being built over time (change)."
        },
        {
          "id": "world-history-301-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing the vocabulary of historical synthesis using a detective theme."
        }
      ]
    },
    {
      "id": "world-history-301-l02",
      "title": "Continuity and Change Synthesis",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Identify one core idea about comparative causation from this lesson.",
          "Explain where continuity/change synthesis appears in real life.",
          "Describe one question you still have about historical synthesis and interpretation."
        ]
      },
      "interactiveActivities": [
        {
          "id": "world-history-301-l02-ia1",
          "type": "drag_and_drop",
          "title": "Historical Sorting: Continuity vs. Change",
          "description": "Sort each historical development into Continuity (stayed the same) or Change (shifted dramatically) during the Industrial Revolution.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "data": {
            "targets": [
              {
                "id": "continuity",
                "label": "Continuity"
              },
              {
                "id": "change",
                "label": "Change"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "The need for food and basic agricultural goods",
                "correctTargetId": "continuity"
              },
              {
                "id": "d2",
                "label": "The shift from hand-made goods to machine-made goods",
                "correctTargetId": "change"
              },
              {
                "id": "d3",
                "label": "People migrating from rural farms to urban cities",
                "correctTargetId": "change"
              },
              {
                "id": "d4",
                "label": "The existence of social hierarchies and class structures",
                "correctTargetId": "continuity"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "world-history-301-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on continuity/change synthesis using the transition from the Bronze Age to the Iron Age."
        }
      ]
    },
    {
      "id": "world-history-301-l03",
      "title": "Checkpoint: Historical Synthesis",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "world-history-301-l03-q1",
          "text": "Which scenario is the best example of comparative causation?",
          "skillId": "world-history-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Analyzing how drought led to the collapse of both the Maya civilization and the Ancestral Puebloans."
            },
            {
              "id": "b",
              "text": "Reading a single biography about George Washington."
            },
            {
              "id": "c",
              "text": "Memorizing the exact dates of all battles in World War II."
            },
            {
              "id": "d",
              "text": "Assuming that all ancient civilizations fell for the exact same reason without evidence."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-301-l03-q2",
          "text": "When studying the transition from the Middle Ages to the Renaissance, which of the following represents a 'continuity'?",
          "skillId": "world-history-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "The dominant influence of the Catholic Church in daily European life."
            },
            {
              "id": "b",
              "text": "The invention of the printing press."
            },
            {
              "id": "c",
              "text": "The discovery of the Americas by European explorers."
            },
            {
              "id": "d",
              "text": "The shift towards humanism in art and philosophy."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-301-l03-q3",
          "text": "Why is it important to synthesize information from multiple historical eras?",
          "skillId": "world-history-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "It helps historians identify larger patterns of human behavior over time."
            },
            {
              "id": "b",
              "text": "It proves that history always repeats itself exactly the same way."
            },
            {
              "id": "c",
              "text": "It allows historians to ignore primary sources."
            },
            {
              "id": "d",
              "text": "It makes it easier to memorize isolated facts."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-301-l03-q4",
          "text": "If a historian is looking at how trade routes changed after the invention of the compass, what are they studying?",
          "skillId": "world-history-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "The impact of technological change on global interdependence."
            },
            {
              "id": "b",
              "text": "The continuity of ancient religious practices."
            },
            {
              "id": "c",
              "text": "The unreliability of primary sources."
            },
            {
              "id": "d",
              "text": "The comparative causation of political revolutions."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "world-history-301-l03-ia1",
          "type": "matching_pairs",
          "title": "Skill Match: Historical Analysis",
          "description": "Match each historical scenario to the analytical skill it requires.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each scenario on the left.",
            "Pick the best historical skill on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Comparing why two different empires collapsed."
              },
              {
                "id": "l2",
                "label": "Noticing that farming methods stayed the same for 500 years."
              },
              {
                "id": "l3",
                "label": "Combining three different letters to understand a battle."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Comparative Causation"
              },
              {
                "id": "r2",
                "label": "Identifying Continuity"
              },
              {
                "id": "r3",
                "label": "Historical Synthesis"
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
          "id": "world-history-301-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Remember the 3 C's of History: Causation (Why it happened), Continuity (What stayed the same), Change (What shifted)."
        }
      ]
    },
    {
      "id": "world-history-301-l04",
      "title": "Source Reliability and Corroboration",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "world-history-301-l04-c1",
          "title": "Source Reliability Focus",
          "content": "[Visual Prompt: A magnifying glass hovering over an ancient, torn diary, revealing hidden text.] In this lesson, we will deepen our understanding of source reliability. Not everything written in history is 100% true! We must act like detectives, evaluating who wrote a document, why they wrote it, and whether they had a reason to exaggerate or lie. This helps us critically evaluate the sources we encounter."
        },
        {
          "id": "world-history-301-l04-c2",
          "title": "The Power of Corroboration",
          "content": "[Visual Prompt: Three different newspaper clippings from different countries, all reporting on the same event, merging into one glowing truth icon.] Let's break down a key method: Corroboration. This means checking multiple sources to see if they agree. Step 1: Read your first source. Step 2: Find a second source from a different perspective. Step 3: Compare them. If a Roman general and an opposing Celtic leader both write that a battle was fought in the rain, that detail is highly corroborated and likely true!"
        },
        {
          "id": "world-history-301-l04-c3",
          "title": "Spotting Bias",
          "content": "[Visual Prompt: Two people standing on opposite sides of a number painted on the ground. One sees a '6', the other sees a '9'.] It's important to be aware of bias. Bias is a strong preference or prejudice that affects how someone views an event. A common mistake is assuming a primary source (someone who was there) is always unbiased. A king writing about his own reign will likely make himself look good! Recognizing bias improves your critical thinking."
        },
        {
          "id": "world-history-301-l04-c4",
          "title": "Independent Try",
          "content": "[Visual Prompt: A split screen showing a merchant's ledger and a poet's song about a marketplace.] Now, I encourage you to evaluate a source on your own. If you want to know the price of grain in ancient Egypt, which source is more reliable: a government tax record or a mythological poem about the harvest gods? Reflect on why the tax record provides better evidence for this specific question."
        }
      ],
      "flashcards": [
        {
          "id": "world-history-301-l04-f1",
          "front": "Source Reliability",
          "back": "How trustworthy a source is, based on the author's background, purpose, and access to information."
        },
        {
          "id": "world-history-301-l04-f2",
          "front": "Corroboration",
          "back": "Comparing multiple sources to see if they agree and support the same historical conclusion."
        },
        {
          "id": "world-history-301-l04-f3",
          "front": "Bias",
          "back": "A personal prejudice or perspective that might distort how an author reports historical events."
        },
        {
          "id": "world-history-301-l04-f4",
          "front": "Primary Source",
          "back": "A document or artifact created at the time of the event by someone who experienced it."
        }
      ],
      "learningAids": [
        {
          "id": "world-history-301-l04-a1",
          "type": "image",
          "title": "Corroboration Checklist",
          "content": "A visual checklist: Who wrote it? When? Why? Do other sources agree?"
        }
      ]
    },
    {
      "id": "world-history-301-l05",
      "title": "Perspective, Bias, and Context",
      "type": "interactive",
      "duration": 13,
      "metadata": {
        "prompts": [
          "Pick one historical source and outline its potential bias.",
          "Test your approach by finding a corroborating source.",
          "Revise your understanding based on the new evidence."
        ]
      },
      "interactiveActivities": [
        {
          "id": "world-history-301-l05-ia1",
          "type": "sorting_buckets",
          "title": "Source Sorting: Reliability Check",
          "description": "Sort these historical sources into Highly Reliable, Potentially Biased, or Needs Corroboration based on a goal of understanding a peasant revolt.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "reliable",
                "label": "Highly Reliable (for facts/dates)"
              },
              {
                "id": "biased",
                "label": "Potentially Biased (shows perspective)"
              },
              {
                "id": "corroborate",
                "label": "Needs Corroboration (unverified claims)"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Official court records of arrests made during the revolt",
                "correctBucketId": "reliable"
              },
              {
                "id": "i2",
                "label": "A letter from the King calling the peasants 'mindless monsters'",
                "correctBucketId": "biased"
              },
              {
                "id": "i3",
                "label": "A rumor written down by a monk living 100 miles away",
                "correctBucketId": "corroborate"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "world-history-301-l05-a1",
          "type": "animation",
          "title": "Bias Walkthrough",
          "content": "Animated sequence showing how two different artists painted the same historical battle completely differently based on who paid them."
        }
      ]
    },
    {
      "id": "world-history-301-l06",
      "title": "Checkpoint: Historical Argumentation",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "world-history-301-l06-q1",
          "text": "What is the primary purpose of corroborating sources in historical research?",
          "skillId": "world-history-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "To confirm details by finding agreement across multiple independent documents."
            },
            {
              "id": "b",
              "text": "To prove that all primary sources are completely unbiased."
            },
            {
              "id": "c",
              "text": "To find the longest document and use only that one."
            },
            {
              "id": "d",
              "text": "To ignore secondary sources entirely."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-301-l06-q2",
          "text": "If you are writing a historical argument about the working conditions in 19th-century factories, which source is most likely to contain bias favoring the factory owners?",
          "skillId": "world-history-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "A pamphlet written by the factory owner to attract investors."
            },
            {
              "id": "b",
              "text": "A diary entry from a 12-year-old factory worker."
            },
            {
              "id": "c",
              "text": "A photograph of the factory floor taken by an investigative journalist."
            },
            {
              "id": "d",
              "text": "A hospital record showing worker injuries."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-301-l06-q3",
          "text": "Which option shows strong reasoning when building a historical argument?",
          "skillId": "world-history-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Making a claim and supporting it with corroborated evidence from multiple primary sources."
            },
            {
              "id": "b",
              "text": "Making a claim based on a single, highly biased source."
            },
            {
              "id": "c",
              "text": "Ignoring evidence that contradicts your initial guess."
            },
            {
              "id": "d",
              "text": "Stating an opinion without referencing any historical documents."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-301-l06-q4",
          "text": "Why must historians consider the 'context' of a document?",
          "skillId": "world-history-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "Because the time, place, and culture in which it was written heavily influence its meaning."
            },
            {
              "id": "b",
              "text": "Because context tells you exactly how many pages the document has."
            },
            {
              "id": "c",
              "text": "Because older documents are always more accurate than newer ones."
            },
            {
              "id": "d",
              "text": "Because context removes all bias from the author."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "world-history-301-l06-ia1",
          "type": "matching_pairs",
          "title": "Bias Match: Who Wrote It?",
          "description": "Match the biased historical statement to its most likely author.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the quote on the left.",
            "Match it to the perspective on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "'The new taxes are a glorious way to fund our beautiful palaces!'"
              },
              {
                "id": "l2",
                "label": "'These machines are stealing our jobs and ruining our lives!'"
              },
              {
                "id": "l3",
                "label": "'Our conquest brought civilization to these untamed lands.'"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "An absolute monarch"
              },
              {
                "id": "r2",
                "label": "A displaced artisan/worker"
              },
              {
                "id": "r3",
                "label": "An imperialist general"
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
          "id": "world-history-301-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the acronym SOAP: Source, Occasion, Audience, Purpose when reading a document."
        }
      ]
    },
    {
      "id": "world-history-301-l07",
      "title": "Global Interdependence Case Study",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "world-history-301-l07-c1",
          "title": "The Columbian Exchange",
          "content": "[Visual Prompt: An animated map showing ships crossing the Atlantic, carrying tomatoes and potatoes to Europe, and horses and diseases to the Americas.] Before diving into your historical argument, let's look at a massive case study of global interdependence: The Columbian Exchange. This was the widespread transfer of plants, animals, culture, and ideas between the Americas and the Old World in the 15th and 16th centuries. Planning your argument around such a massive event requires organizing your evidence carefully."
        },
        {
          "id": "world-history-301-l07-c2",
          "title": "Decision Rules for Evidence",
          "content": "[Visual Prompt: A scale weighing a diary entry against a global population chart.] When you have to make a choice between different pieces of evidence, use a simple rule: pick the option that has the strongest connection to your claim. If your claim is that the Columbian Exchange changed global diets, a chart showing the rise of potato farming in Ireland is stronger evidence than a single letter from an explorer complaining about the weather."
        },
        {
          "id": "world-history-301-l07-c3",
          "title": "Synthesizing the Impact",
          "content": "[Visual Prompt: A split screen showing population growth in Europe and population decline in the Americas due to disease.] As you review your work, check for completeness. Did you look at multiple perspectives? The Columbian Exchange brought nutritional wealth to Europe but devastating diseases to Indigenous populations in the Americas. A strong historical synthesis acknowledges both the positive and negative impacts of global interdependence."
        },
        {
          "id": "world-history-301-l07-c4",
          "title": "Next-Step Plan",
          "content": "[Visual Prompt: A student's notebook with 'Claim', 'Evidence', and 'Reasoning' highlighted.] After completing your practice round, write down one action you would like to repeat. For example, 'I will always check for bias in my primary sources.' This reflection helps you set specific goals for your future historical essays."
        }
      ],
      "flashcards": [
        {
          "id": "world-history-301-l07-f1",
          "front": "Global Interdependence",
          "back": "The reliance of people and countries around the world on one another for goods, services, and ideas."
        },
        {
          "id": "world-history-301-l07-f2",
          "front": "Columbian Exchange",
          "back": "The massive transfer of biological and cultural goods between the Old and New Worlds starting in 1492."
        },
        {
          "id": "world-history-301-l07-f3",
          "front": "Historical Claim",
          "back": "A clear, arguable statement about the past that must be supported by evidence."
        },
        {
          "id": "world-history-301-l07-f4",
          "front": "Synthesis",
          "back": "Combining evidence from different regions (like Europe and the Americas) to explain a global phenomenon."
        }
      ],
      "learningAids": [
        {
          "id": "world-history-301-l07-a1",
          "type": "practice",
          "title": "Argument Planner",
          "content": "Template for planning a mini-essay: Claim -> Evidence 1 -> Evidence 2 -> Synthesis/Conclusion."
        }
      ]
    },
    {
      "id": "world-history-301-l08",
      "title": "Document-Based Seminar",
      "type": "interactive",
      "duration": 10,
      "metadata": {
        "prompts": [
          "What did you learn most clearly from the document?",
          "Where did you struggle with the author's perspective?",
          "What is your next improvement target for document analysis?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "world-history-301-l08-ia1",
          "type": "matching_pairs",
          "title": "Document Purpose Match",
          "description": "Match each historical document excerpt to its main purpose.",
          "estimatedMinutes": 7,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "A poster urging citizens to buy war bonds."
              },
              {
                "id": "l2",
                "label": "A merchant's ledger listing the price of silk."
              },
              {
                "id": "l3",
                "label": "A treaty signed by two kings ending a war."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "To Persuade / Propagandize"
              },
              {
                "id": "r2",
                "label": "To Record Economic Data"
              },
              {
                "id": "r3",
                "label": "To Establish Political Agreements"
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
          "id": "world-history-301-l08-a1",
          "type": "mnemonic",
          "title": "Analysis Cycle",
          "content": "Remember: Read, Contextualize, Corroborate, Conclude."
        }
      ]
    },
    {
      "id": "world-history-301-l09",
      "title": "Review: World History Interpretation",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "world-history-301-l09-q1",
          "text": "Which of the following is the best example of 'continuity' in world history?",
          "skillId": "world-history-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The reliance on agriculture as the primary source of food for thousands of years."
            },
            {
              "id": "b",
              "text": "The sudden invention of the steam engine."
            },
            {
              "id": "c",
              "text": "The rapid spread of a new disease across a continent."
            },
            {
              "id": "d",
              "text": "The overthrow of a long-standing dynasty."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-301-l09-q2",
          "text": "When building a historical argument about the Silk Road, what is the best first step?",
          "skillId": "world-history-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define your claim and gather evidence from multiple sources along the route."
            },
            {
              "id": "b",
              "text": "Guess the outcome without looking at maps or documents."
            },
            {
              "id": "c",
              "text": "Only read sources from one single city on the route."
            },
            {
              "id": "d",
              "text": "Assume trade was exactly the same as it is today."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-301-l09-q3",
          "text": "How does a historian synthesize information?",
          "skillId": "world-history-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "By combining evidence from different sources to form a new, comprehensive understanding."
            },
            {
              "id": "b",
              "text": "By ignoring any evidence that doesn't fit their personal opinion."
            },
            {
              "id": "c",
              "text": "By copying a primary source word-for-word without analyzing it."
            },
            {
              "id": "d",
              "text": "By focusing only on the dates of battles."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-301-l09-q4",
          "text": "Why is it important to identify the author's perspective in a historical document?",
          "skillId": "world-history-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It helps determine if the author has a bias that might influence their account of events."
            },
            {
              "id": "b",
              "text": "It is the only way to know what year the document was written."
            },
            {
              "id": "c",
              "text": "It proves that the document is 100% factual."
            },
            {
              "id": "d",
              "text": "It allows historians to skip the corroboration step."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "world-history-301-l09-ia1",
          "type": "matching_pairs",
          "title": "Cause and Effect Match",
          "description": "Match the historical cause to its major global effect.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review the cause on the left.",
            "Pick the resulting effect on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Agricultural Revolution (Farming)"
              },
              {
                "id": "l2",
                "label": "Columbian Exchange"
              },
              {
                "id": "l3",
                "label": "Industrial Revolution"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Permanent settlements and population growth"
              },
              {
                "id": "r2",
                "label": "Global mixing of crops, animals, and diseases"
              },
              {
                "id": "r3",
                "label": "Mass production and rapid urbanization"
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
          "id": "world-history-301-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase 'Claim, Evidence, Reasoning' (CER) for every historical argument."
        }
      ]
    },
    {
      "id": "world-history-301-l10",
      "title": "Mastery: World History III",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "world-history-301-l10-q1",
          "text": "When analyzing the fall of both the Roman and Han empires, which factor represents comparative causation?",
          "skillId": "world-history-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Both empires faced internal political corruption and external invasions from nomadic groups."
            },
            {
              "id": "b",
              "text": "Both empires were destroyed by the exact same volcanic eruption."
            },
            {
              "id": "c",
              "text": "Both empires invented the printing press at the same time."
            },
            {
              "id": "d",
              "text": "Neither empire had any trade routes."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-301-l10-q2",
          "text": "What is the best first step when analyzing the reliability of a newly discovered historical diary?",
          "skillId": "world-history-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Determine who wrote it, when they wrote it, and what their position in society was."
            },
            {
              "id": "b",
              "text": "Assume everything in it is true because it is old."
            },
            {
              "id": "c",
              "text": "Publish it immediately without checking other sources."
            },
            {
              "id": "d",
              "text": "Translate it into modern slang."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-301-l10-q3",
          "text": "Which of the following is an example of historical synthesis?",
          "skillId": "world-history-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Using a tax record, a soldier's letter, and a map to explain why a battle was lost."
            },
            {
              "id": "b",
              "text": "Reading one textbook chapter and copying the summary."
            },
            {
              "id": "c",
              "text": "Arguing that history is too complex to understand."
            },
            {
              "id": "d",
              "text": "Focusing only on the history of a single city while ignoring the rest of the world."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-301-l10-q4",
          "text": "Why is understanding 'context' crucial for interpreting a historical document?",
          "skillId": "world-history-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "Words and actions mean different things depending on the cultural and historical period they occurred in."
            },
            {
              "id": "b",
              "text": "It helps you memorize the exact date the document was signed."
            },
            {
              "id": "c",
              "text": "Context proves that the author was unbiased."
            },
            {
              "id": "d",
              "text": "It allows you to ignore the author's perspective."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "world-history-301-l10-ia1",
          "type": "matching_pairs",
          "title": "Source Type Match",
          "description": "Match the source type to its best use case in historical research.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review the source type on the left.",
            "Pick the best use case on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Personal Diary"
              },
              {
                "id": "l2",
                "label": "Government Census Data"
              },
              {
                "id": "l3",
                "label": "Modern History Textbook"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Understanding individual emotions and daily life"
              },
              {
                "id": "r2",
                "label": "Tracking population changes and economic trends"
              },
              {
                "id": "r3",
                "label": "Getting a broad overview and synthesis of an era"
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
          "id": "world-history-301-l10-a1",
          "type": "mnemonic",
          "title": "Mastery Tip",
          "content": "Always ask: Who, What, When, Where, Why, and How does this connect to the bigger picture?"
        }
      ]
    },
    {
      "id": "world-history-301-l11",
      "title": "Applied History Worldwide Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Select one historical era you struggle with.",
          "Apply a step-by-step source reliability check to a document from that era.",
          "Document your findings and how they change your view of the era."
        ]
      },
      "interactiveActivities": [
        {
          "id": "world-history-301-l11-ia1",
          "type": "sorting_buckets",
          "title": "Argument Builder Ladder",
          "description": "Sort the steps of building a historical argument into the correct phases: Claim, Evidence, and Reasoning.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "claim",
                "label": "Claim (The Argument)"
              },
              {
                "id": "evidence",
                "label": "Evidence (The Proof)"
              },
              {
                "id": "reasoning",
                "label": "Reasoning (The Connection)"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Stating that the printing press caused the Reformation.",
                "correctBucketId": "claim"
              },
              {
                "id": "i2",
                "label": "Quoting a 16th-century document showing increased book sales.",
                "correctBucketId": "evidence"
              },
              {
                "id": "i3",
                "label": "Explaining how cheaper books allowed ideas to spread faster than before.",
                "correctBucketId": "reasoning"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "world-history-301-l11-a1",
          "type": "practice",
          "title": "CER Framework Card",
          "content": "Use Claim, Evidence, Reasoning for every historical essay."
        }
      ]
    },
    {
      "id": "world-history-301-l12",
      "title": "World History III Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "world-history-301-l12-q1",
          "text": "Which of the following best demonstrates comparative causation?",
          "skillId": "world-history-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Studying how unequal land distribution led to revolutions in both France and Russia."
            },
            {
              "id": "b",
              "text": "Listing the names of all French kings in chronological order."
            },
            {
              "id": "c",
              "text": "Comparing the painting styles of the Renaissance and the Middle Ages."
            },
            {
              "id": "d",
              "text": "Reading a fictional story set during the Russian Revolution."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-301-l12-q2",
          "text": "When evaluating a historical argument, what makes the evidence 'strong'?",
          "skillId": "world-history-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "It is corroborated by multiple reliable primary sources."
            },
            {
              "id": "b",
              "text": "It is based on a popular rumor from the time period."
            },
            {
              "id": "c",
              "text": "It comes from a single, highly biased author."
            },
            {
              "id": "d",
              "text": "It is written in very complicated language."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-301-l12-q3",
          "text": "Which statement is an example of historical synthesis?",
          "skillId": "world-history-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Combining economic data, political treaties, and personal diaries to explain the causes of World War I."
            },
            {
              "id": "b",
              "text": "Stating that World War I started solely because of one assassination."
            },
            {
              "id": "c",
              "text": "Refusing to read any sources from the opposing side of a conflict."
            },
            {
              "id": "d",
              "text": "Memorizing the map of Europe in 1914."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-301-l12-q4",
          "text": "Why do historians study 'change over time'?",
          "skillId": "world-history-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "To understand how societies evolve and what triggers major shifts in human history."
            },
            {
              "id": "b",
              "text": "To prove that the past was exactly the same as the present."
            },
            {
              "id": "c",
              "text": "To find out which historical era was the 'best'."
            },
            {
              "id": "d",
              "text": "To memorize dates more easily."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "world-history-301-l12-ia1",
          "type": "matching_pairs",
          "title": "Era Characteristics Match",
          "description": "Match the historical era to its defining characteristic of change.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review the era on the left.",
            "Pick the defining change on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "The Renaissance"
              },
              {
                "id": "l2",
                "label": "The Industrial Revolution"
              },
              {
                "id": "l3",
                "label": "The Age of Exploration"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Rebirth of classical learning and humanism"
              },
              {
                "id": "r2",
                "label": "Shift to mechanized production and factories"
              },
              {
                "id": "r3",
                "label": "Establishment of global maritime trade routes"
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
          "id": "world-history-301-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "History is a web, not a straight line. Look for the connections!"
        }
      ]
    },
    {
      "id": "world-history-301-l13",
      "title": "History Worldwide Scenario Lab",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "world-history-301-l13-c1",
          "title": "Scenario Brief: The Lost Trade Route",
          "content": "[Visual Prompt: A dusty map with a faded, dotted line connecting two ancient cities across a desert.] In this scenario, you are a historian who suspects a previously unknown trade route existed between two ancient empires. How do you prove it? You will need to explore how different events are connected, evaluate the trustworthiness of artifacts, and develop a strong argument based on historical evidence."
        },
        {
          "id": "world-history-301-l13-c2",
          "title": "Plan the Approach",
          "content": "[Visual Prompt: A split screen showing a Roman coin found in India, and an Indian jewel found in Rome.] To tackle this scenario, break it down. First, look for physical evidence (artifacts). If you find Roman coins in ancient India, that's a clue! Next, look for written evidence. Are there merchant logs? By planning your approach, you organize your thoughts and make it easier to build a solid case."
        },
        {
          "id": "world-history-301-l13-c3",
          "title": "Execute and Justify",
          "content": "[Visual Prompt: An animated scale balancing a single rumor against a pile of physical coins and merchant logs.] Once you have your plan, put it into action. As you gather evidence, justify why it matters. You can't just say 'They traded.' You must say, 'Because Roman coins from 100 CE were found in Indian ports, and Indian spices were recorded in Roman cookbooks, we can justify the claim that a robust trade route existed.' Solid evidence beats guesses."
        },
        {
          "id": "world-history-301-l13-c4",
          "title": "Evaluate Outcome",
          "content": "[Visual Prompt: A completed, glowing map showing the newly proven trade route with icons of the evidence found along the way.] After completing your scenario, evaluate the outcome. Did your evidence prove your claim? Were there any gaps? Maybe you found coins, but no written records. Acknowledging what you *don't* know is just as important as proving what you *do* know. This reflection makes you a better historian."
        }
      ],
      "flashcards": [
        {
          "id": "world-history-301-l13-f1",
          "front": "Artifact",
          "back": "A physical object made by a human being, typically an item of cultural or historical interest."
        },
        {
          "id": "world-history-301-l13-f2",
          "front": "Evidence Link",
          "back": "The logical connection between a historical artifact/document and the claim you are making."
        },
        {
          "id": "world-history-301-l13-f3",
          "front": "Historical Gap",
          "back": "Missing information or evidence in the historical record that prevents a complete understanding."
        },
        {
          "id": "world-history-301-l13-f4",
          "front": "Applied Mastery",
          "back": "Using historical skills (corroboration, synthesis) to solve a new, real-world historical mystery."
        }
      ],
      "learningAids": [
        {
          "id": "world-history-301-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting physical artifacts, written sources, and historical arguments."
        },
        {
          "id": "world-history-301-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "You found a Viking sword in North America. Write a one-sentence claim and list two pieces of evidence you would look for to corroborate it."
        }
      ]
    },
    {
      "id": "world-history-301-l14",
      "title": "History Worldwide Coaching Clinic",
      "type": "interactive",
      "duration": 13,
      "metadata": {
        "prompts": [
          "Identify one historical fallacy you sometimes make (e.g., assuming a single cause).",
          "Choose the best correction routine for that pattern.",
          "Write a goal for your next document analysis."
        ]
      },
      "interactiveActivities": [
        {
          "id": "world-history-301-l14-ia1",
          "type": "matching_pairs",
          "title": "Historical Fallacy Match",
          "description": "Match the common historical mistake (fallacy) to its definition.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Presentism"
              },
              {
                "id": "l2",
                "label": "Single Cause Fallacy"
              },
              {
                "id": "l3",
                "label": "Confirmation Bias"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Judging people of the past by modern moral standards."
              },
              {
                "id": "r2",
                "label": "Assuming a massive historical event happened for only one reason."
              },
              {
                "id": "r3",
                "label": "Only looking for evidence that supports what you already believe."
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
          "id": "world-history-301-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose the bias, Correct the context, Transfer the knowledge."
        }
      ]
    },
    {
      "id": "world-history-301-l15",
      "title": "World History III Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "world-history-301-l15-q1",
          "text": "Which of the following best describes 'synthesis' in the study of World History?",
          "skillId": "world-history-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Connecting different historical events, regions, or themes to create a broader understanding."
            },
            {
              "id": "b",
              "text": "Breaking down a single document into its individual sentences."
            },
            {
              "id": "c",
              "text": "Memorizing the exact timeline of a single nation."
            },
            {
              "id": "d",
              "text": "Ignoring secondary sources in favor of primary sources."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-301-l15-q2",
          "text": "If two primary sources from the same event contradict each other, what is the best historical practice?",
          "skillId": "world-history-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Analyze the bias, perspective, and context of both authors to understand why they differ."
            },
            {
              "id": "b",
              "text": "Assume both sources are completely fake and throw them away."
            },
            {
              "id": "c",
              "text": "Pick the source that is easiest to read and ignore the other."
            },
            {
              "id": "d",
              "text": "Combine the two stories into a fictional narrative."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-301-l15-q3",
          "text": "Which of the following is an example of a 'continuity' across the ancient and modern world?",
          "skillId": "world-history-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "The existence of trade networks to exchange scarce resources."
            },
            {
              "id": "b",
              "text": "The use of the internet for global communication."
            },
            {
              "id": "c",
              "text": "The reliance on steam power for transportation."
            },
            {
              "id": "d",
              "text": "The widespread use of democratic voting systems."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-301-l15-q4",
          "text": "Why is understanding comparative causation useful for historians?",
          "skillId": "world-history-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It reveals underlying patterns in human behavior, such as why empires fall or economies crash."
            },
            {
              "id": "b",
              "text": "It proves that geography has no impact on history."
            },
            {
              "id": "c",
              "text": "It allows historians to predict the exact date of future events."
            },
            {
              "id": "d",
              "text": "It makes reading primary sources unnecessary."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "world-history-301-l15-ia1",
          "type": "matching_pairs",
          "title": "Global Trade Match",
          "description": "Match the historical trade route to its primary exchanged goods to demonstrate synthesis of global interdependence.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review the trade route on the left.",
            "Pick the primary goods exchanged on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "The Silk Road"
              },
              {
                "id": "l2",
                "label": "Trans-Saharan Trade"
              },
              {
                "id": "l3",
                "label": "Columbian Exchange"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Silk, spices, and porcelain"
              },
              {
                "id": "r2",
                "label": "Gold and salt"
              },
              {
                "id": "r3",
                "label": "Potatoes, horses, and diseases"
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
          "id": "world-history-301-l15-a1",
          "type": "mnemonic",
          "title": "Final Mastery Tip",
          "content": "History is the story of us. Always look for the human element behind the dates and documents!"
        }
      ]
    }
  ]
};
