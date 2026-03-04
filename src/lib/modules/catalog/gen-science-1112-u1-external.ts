import type { LearningModule } from "@/lib/modules/types";

export const GenScience1112U1ExternalModule: LearningModule = {
  "id": "gen-science-1112-u1-external",
  "title": "Physics: Mechanics, Thermodynamics & Waves",
  "description": "General Science unit for 11–12 imported from external JSX curriculum.",
  "subject": "General Science",
  "tags": [
    "external-ai",
    "curriculum-import",
    "grade-1112"
  ],
  "minAge": 16,
  "maxAge": 18,
  "version": "external-1.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Explain Newton's First Law: Inertia.",
    "Explain Newton's Second Law: F = ma.",
    "Explain Newton's Third Law: Action-Reaction.",
    "Build baseline confidence in Physics: Mechanics, Thermodynamics & Waves.",
    "Apply one core General Science strategy for 1112.",
    "Explain evidence interpretation using age-appropriate vocabulary.",
    "Apply evidence interpretation in one guided General Science task.",
    "Identify one correction step for the next attempt."
  ],
  "gradeBand": "1112",
  "metadata": {
    "source": "../External_AI_Agents/lesson_platform (1).jsx",
    "sourceUnitId": "gen-science-1112-u1",
    "sourceUnitIdCanonical": "gen-science-1112-u1",
    "sourceUnitIdRaw": "gen_science-1112-u1",
    "importedAt": "2026-02-25T02:03:30.477Z"
  },
  "external": {
    "unitOrder": 16,
    "estimatedHours": null,
    "prerequisites": []
  },
  "lessons": [
    {
      "id": "gen-science-1112-u1-1",
      "title": "Newton's Laws of Motion (1112)",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "gen-science-1112-u1-1-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Newton's Laws of Motion (1112)."
        }
      ],
      "objectives": [
        "Explain Newton's First Law: Inertia.",
        "Explain Newton's Second Law: F = ma.",
        "Explain Newton's Third Law: Action-Reaction."
      ],
      "chunks": [
        {
          "id": "gen-science-1112-u1-1-chunk-1",
          "title": "Newton's First Law: Inertia",
          "content": "Newton's First Law of Motion is a fundamental principle that helps us understand how objects behave. It states that an object that is at rest will remain at rest, and an object that is in motion will continue to move in a straight line at a constant speed unless it is acted upon by an external force. This concept is known as inertia, which describes the tendency of objects to resist changes in their state of motion.\nTo illustrate this idea, let's consider some relatable examples from our daily lives:\n- Picture a ball rolling on a perfectly smooth surface, like ice, where there is no friction. If no one stops it, that ball would keep rolling indefinitely, demonstrating how inertia allows it to maintain its motion.\n- Think about what happens when a car suddenly brakes. You might feel yourself lurch forward in your seat. This happens because your body wants to keep moving forward at the same speed, showcasing how inertia affects us in real-life situations.\n- Have you ever watched someone swiftly pull a tablecloth from underneath a set of dishes? Often, the dishes remain in place on the table because they are trying to stay at rest, illustrating inertia in action.\nUnderstanding Newton's First Law helps us grasp the behavior of objects around us and the forces that influence their motion. By recognizing these principles, we can better understand the physical world and how it operates."
        },
        {
          "id": "gen-science-1112-u1-1-chunk-2",
          "title": "Newton's Second Law: F = ma",
          "content": "Newton's Second Law of Motion is a fundamental principle in physics that helps us understand how forces affect the motion of objects. This law can be summarized with the equation F = ma. In this equation, F represents the force applied to an object, measured in Newtons (N), m is the mass of the object measured in kilograms (kg), and a is the acceleration of the object measured in meters per second squared (m/s²).\nThis law has significant implications for how we perceive motion. For instance, when you apply a greater force to an object, it will accelerate more quickly, assuming its mass does not change. On the other hand, if you are dealing with a heavier object, it will not accelerate as much when the same force is applied. This means that mass plays a crucial role in determining how an object responds to forces.\nTo illustrate this concept, consider the example of pushing a box that weighs 10 kg with a force of 50 N. You can find the acceleration of the box by rearranging the formula to a = F/m. Plugging in the values, you get a = 50 N / 10 kg, which simplifies to an acceleration of 5 m/s². This tells us that the box will increase its speed by 5 meters every second, demonstrating how force and mass interact to influence motion. Understanding this relationship is essential for studying mechanics and predicting how objects will move under various forces."
        },
        {
          "id": "gen-science-1112-u1-1-chunk-3",
          "title": "Newton's Third Law: Action-Reaction",
          "content": "Newton's Third Law of Motion states that for every action, there is an equal and opposite reaction. This means that whenever one object exerts a force on another object, the second object exerts a force of equal strength in the opposite direction back on the first object.\nThese force pairs have some key characteristics: they are always equal in strength, opposite in direction, and they act on different objects.\nHere are a few examples to illustrate this law:\n- When a rocket launches, the gases it expels downward (the action) push the rocket upward (the reaction).\n- When you walk, your foot pushes backward against the ground (the action), and the ground pushes your foot forward (the reaction).\n- When a rifle is fired, the bullet moves forward while the rifle itself recoils backward. These examples show how action and reaction forces work together in our physical world."
        },
        {
          "id": "gen-science-1112-u1-1-chunk-4",
          "title": "Applying Newton's Laws: Free Body Diagrams",
          "content": "Free Body Diagrams, often abbreviated as FBD, are essential tools in physics that allow us to visualize and analyze all the forces acting on an object. By creating these diagrams, we can gain a clearer understanding of how different forces interact and affect the motion of the object in question.\nWhen drawing a Free Body Diagram, there are several common forces that you should consider including:\n- **Weight (Fg)**: This is the force of gravity acting downward on the object, and it can be calculated using the formula Fg = mg, where 'm' is the mass of the object and 'g' is the acceleration due to gravity.\n- **Normal Force (N)**: This is the support force that acts perpendicular to the surface on which the object rests. It balances the weight of the object when it is at rest on a flat surface.\n- **Friction (f)**: This force opposes the motion of the object. It acts in the opposite direction to the applied force and can vary depending on the surfaces in contact.\n- **Applied Force (Fa)**: This is the force that you exert on the object when you push or pull it. It is directed in the direction of your push or pull.\n- **Tension (T)**: This force is transmitted through a rope or string when it is pulled tight by forces acting from opposite ends.\nTo determine the net force acting on an object, you need to sum all the forces while considering their directions. If the total net force equals zero, it indicates that the object is in equilibrium, meaning it is not accelerating and remains at rest or moves at a constant velocity. Understanding these concepts is crucial for analyzing motion and predicting how objects will behave under various forces."
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-1112-u1-1-card-1",
          "front": "Newton's 1st Law",
          "back": "Objects at rest stay at rest; objects in motion stay in motion unless a net force acts"
        },
        {
          "id": "gen-science-1112-u1-1-card-2",
          "front": "Inertia",
          "back": "The tendency of matter to resist changes in its state of motion"
        },
        {
          "id": "gen-science-1112-u1-1-card-3",
          "front": "Newton's 2nd Law",
          "back": "F = ma (Force = mass × acceleration)"
        },
        {
          "id": "gen-science-1112-u1-1-card-4",
          "front": "Newton's 3rd Law",
          "back": "Every action has an equal and opposite reaction (on different objects)"
        },
        {
          "id": "gen-science-1112-u1-1-card-5",
          "front": "F = ma: Find acceleration when F=60N, m=12kg",
          "back": "a = F/m = 60/12 = 5 m/s²"
        },
        {
          "id": "gen-science-1112-u1-1-card-6",
          "front": "Free Body Diagram",
          "back": "Visual diagram showing all forces acting on an object (with arrows)"
        }
      ],
      "prompts": {
        "seedanceVideo": "Sora/Seedance 2.0 Prompt: Physics visualization in a clean, modern animated lab. Newton's 1st Law: ball rolling on frictionless surface vs. one that stops due to friction. Newton's 2nd Law: force vectors scale as F=ma equation appears dynamically. Newton's 3rd Law: rocket launch in slow motion — exhaust vs. lift force arrows shown symmetrically. Free body diagram builds itself for a block on an incline. University-level aesthetic with mathematical elegance. Ages 16-18. Duration: 100 seconds.",
        "seedanceAnimation": "Lottie animation: Block on a surface. Force arrows appear: Weight (down, blue), Normal (up, green), Applied Force (right, red), Friction (left, orange). Each arrow scales proportionally. Net force arrow appears in purple. If balanced, 'Equilibrium' appears. 14-second animation.",
        "lessonImage": "Create a clean educational illustration for \"Newton's Laws of Motion (1112)\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Newton's Laws of Motion (1112)\" (General Science, grade band 1112)."
      },
      "localized": {
        "title": {
          "en": "Newton's Laws of Motion"
        },
        "concept": {
          "en": "Newton's Laws of Motion"
        }
      },
      "external": {
        "sourceLessonId": "gen_science-1112-u1-1",
        "order": 1
      }
    },
    {
      "id": "gen-science-1112-u1-external-supp-interactive",
      "title": "Physics: Mechanics, Thermodynamics & Waves Supplemental Practice",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "gen-science-1112-u1-external-supp-interactive-ia1",
          "type": "drag_and_drop",
          "title": "Physics: Mechanics, Thermodynamics & Waves Supplemental Practice Learning Flow",
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
                "label": "Set a goal for Build baseline confidence in Physics: Mechanics, Thermodynamics & Waves..",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Identify independent, dependent, and control variables.",
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
          "id": "gen-science-1112-u1-external-supp-interactive-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Physics: Mechanics, Thermodynamics & Waves Supplemental Practice."
        }
      ],
      "metadata": {
        "prompts": [
          "Build baseline confidence in Physics: Mechanics, Thermodynamics & Waves.",
          "Apply one core General Science strategy for 1112."
        ]
      },
      "objectives": [
        "Build baseline confidence in Physics: Mechanics, Thermodynamics & Waves.",
        "Apply one core General Science strategy for 1112."
      ],
      "chunks": [
        {
          "id": "gen-science-1112-u1-external-supp-interactive-chunk-intro",
          "title": "Physics: Mechanics, Thermodynamics & Waves Supplemental Practice Overview",
          "content": "In this section, we will focus on reinforcing the key concepts of General Science, specifically in the areas of Physics, Mechanics, Thermodynamics, and Waves. This will help you solidify your understanding and apply what you've learned in practical situations.\nContext recap: In this section, we will focus on reinforcing the key concepts of General Science, specifically in the areas of Physics, Mechanics, Thermodynamics, and Waves. This will help you solidify your understanding and apply what you've learned in practical situations.",
          "kind": "concept"
        },
        {
          "id": "gen-science-1112-u1-external-supp-interactive-chunk-recap",
          "title": "Quick Recap",
          "content": "As we wrap up this section, take a moment to summarize one important idea you learned today. Think about how you can apply this knowledge in your next steps, whether it's in your studies or in real-life situations.\nContext recap: As we wrap up this section, take a moment to summarize one important idea you learned today. Think about how you can apply this knowledge in your next steps, whether it's in your studies or in real-life situations.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-1112-u1-external-supp-interactive-card-1",
          "front": "What is one key idea in Physics: Mechanics, Thermodynamics & Waves?",
          "back": "Build baseline confidence in Physics: Mechanics, Thermodynamics & Waves."
        },
        {
          "id": "gen-science-1112-u1-external-supp-interactive-card-2",
          "front": "How can you practice this idea?",
          "back": "Apply one core General Science strategy for 1112."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Physics: Mechanics, Thermodynamics & Waves Supplemental Practice\" in \"General Science\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Physics: Mechanics, Thermodynamics & Waves Supplemental Practice\" (General Science, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Physics: Mechanics, Thermodynamics & Waves Supplemental Practice\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Physics: Mechanics, Thermodynamics & Waves Supplemental Practice\" (General Science, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "gen-science-1112-u1-external-supp-interactive",
        "order": 2,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-1112-u1-external-supp-quiz",
      "title": "Physics: Mechanics, Thermodynamics & Waves Supplemental Check",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "gen-science-1112-u1-external-supp-quiz-q1",
          "text": "Which option best summarizes Physics: Mechanics, Thermodynamics & Waves Supplemental Check?",
          "skillId": "gen-science-1112-u1-external-skill-physics-mechanics-thermodynamics-waves-supplemental-check-summary",
          "options": [
            {
              "id": "a",
              "text": "Build baseline confidence in Physics: Mechanics, Thermodynamics & Waves."
            },
            {
              "id": "b",
              "text": "A conclusion without evidence."
            },
            {
              "id": "c",
              "text": "A result that changes multiple variables at once."
            },
            {
              "id": "d",
              "text": "A claim that ignores the observed data."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "gen-science-1112-u1-external-supp-quiz-q2",
          "text": "Which response shows correct application of Physics: Mechanics, Thermodynamics & Waves Supplemental Check?",
          "skillId": "gen-science-1112-u1-external-skill-physics-mechanics-thermodynamics-waves-supplemental-check-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply one core General Science strategy for 1112."
            },
            {
              "id": "b",
              "text": "Select a conclusion before reviewing results."
            },
            {
              "id": "c",
              "text": "Use unrelated facts that do not match the experiment."
            },
            {
              "id": "d",
              "text": "Treat one observation as proof without retesting."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "gen-science-1112-u1-external-supp-quiz-q3",
          "text": "Why is review important after learning Physics: Mechanics, Thermodynamics & Waves Supplemental Check?",
          "skillId": "gen-science-1112-u1-external-skill-physics-mechanics-thermodynamics-waves-supplemental-check-review",
          "options": [
            {
              "id": "a",
              "text": "Explain one result using evidence and science vocabulary."
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
          "id": "gen-science-1112-u1-external-supp-quiz-ia1",
          "type": "matching_pairs",
          "title": "Physics: Mechanics, Thermodynamics & Waves Supplemental Check Error Match",
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
                "label": "I still mix up Build baseline confidence in Physics: Mechanics, Thermodynamics & Waves.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Physics: Mechanics, Thermodynamics & Waves Supplemental Check in notes but not in timed checks."
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
          "id": "gen-science-1112-u1-external-supp-quiz-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Physics: Mechanics, Thermodynamics & Waves Supplemental Check."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Build baseline confidence in Physics: Mechanics, Thermodynamics & Waves.",
        "Apply one core General Science strategy for 1112."
      ],
      "chunks": [
        {
          "id": "gen-science-1112-u1-external-supp-quiz-chunk-intro",
          "title": "Physics: Mechanics, Thermodynamics & Waves Supplemental Check Overview",
          "content": "This quiz will help reinforce the core concepts of General Science, particularly in the fields of Physics, Mechanics, Thermodynamics, and Waves. It’s a great way to test your understanding and see how well you can apply what you have learned.\nContext recap: This quiz will help reinforce the core concepts of General Science, particularly in the fields of Physics, Mechanics, Thermodynamics, and Waves. It’s a great way to test your understanding and see how well you can apply what you have learned.",
          "kind": "concept"
        },
        {
          "id": "gen-science-1112-u1-external-supp-quiz-chunk-recap",
          "title": "Quick Recap",
          "content": "As we conclude this quiz, take a moment to summarize one key idea that stood out to you. Consider what your next steps might be in your learning journey, and how you can continue to build on this knowledge.\nContext recap: As we conclude this quiz, take a moment to summarize one key idea that stood out to you. Consider what your next steps might be in your learning journey, and how you can continue to build on this knowledge.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-1112-u1-external-supp-quiz-card-1",
          "front": "What is one key idea in Physics: Mechanics, Thermodynamics & Waves?",
          "back": "Build baseline confidence in Physics: Mechanics, Thermodynamics & Waves."
        },
        {
          "id": "gen-science-1112-u1-external-supp-quiz-card-2",
          "front": "How can you practice this idea?",
          "back": "Apply one core General Science strategy for 1112."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Physics: Mechanics, Thermodynamics & Waves Supplemental Check\" in \"General Science\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Physics: Mechanics, Thermodynamics & Waves Supplemental Check\" (General Science, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Physics: Mechanics, Thermodynamics & Waves Supplemental Check\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Physics: Mechanics, Thermodynamics & Waves Supplemental Check\" (General Science, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "gen-science-1112-u1-external-supp-quiz",
        "order": 3,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-1112-u1-external-supp-seq-04",
      "title": "Physics: Mechanics, Thermodynamics & Waves Concept Walkthrough 4: Evidence Interpretation",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-04-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Physics: Mechanics, Thermodynamics & Waves Concept Walkthrough 4: Evidence Interpretation."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain evidence interpretation using age-appropriate vocabulary.",
        "Apply evidence interpretation in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-04-chunk-intro",
          "title": "Evidence Interpretation Intro",
          "content": "To begin our exploration of evidence interpretation, start by making an observation about something you see and then come up with a question that can be tested. This will guide your investigation and help you find answers.\nContext recap: To begin our exploration of evidence interpretation, start by making an observation about something you see and then come up with a question that can be tested. This will guide your investigation and help you find answers.\nWhy this matters: Evidence Interpretation Intro helps learners in General Science connect ideas from Physics: Mechanics, Thermodynamics & Waves to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "concept"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-04-chunk-practice",
          "title": "Guided Practice",
          "content": "Now it's time to conduct a mini investigation! As you explore, make sure to record your outcomes in a table. This will help you organize your findings and make it easier to analyze the results later.\nContext recap: Now it's time to conduct a mini investigation! As you explore, make sure to record your outcomes in a table. This will help you organize your findings and make it easier to analyze the results later.\nWhy this matters: Guided Practice helps learners in General Science connect ideas from Physics: Mechanics, Thermodynamics & Waves to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "practice"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-04-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you work on interpreting evidence, be aware of a common mistake that can occur. Pay attention to this error and think about how you can correct it using the evidence you have gathered. This will strengthen your understanding.\nContext recap: As you work on interpreting evidence, be aware of a common mistake that can occur. Pay attention to this error and think about how you can correct it using the evidence you have gathered. This will strengthen your understanding.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-04-chunk-recap",
          "title": "Quick Recap",
          "content": "To wrap up our session on evidence interpretation, take a moment to review what you have learned. Then, set a clear target for improvement in your understanding or skills. This will help you focus on what to work on next.\nContext recap: To wrap up our session on evidence interpretation, take a moment to review what you have learned. Then, set a clear target for improvement in your understanding or skills. This will help you focus on what to work on next.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-04-card-1",
          "front": "What is evidence interpretation?",
          "back": "It is a key General Science idea in Physics: Mechanics, Thermodynamics & Waves."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-04-card-2",
          "front": "How can I practice evidence interpretation?",
          "back": "Run a mini investigation and record outcomes in a table."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-04-card-3",
          "front": "What should I review next?",
          "back": "Review evidence interpretation, then set one clear improvement target."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-04-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Physics: Mechanics, Thermodynamics & Waves Concept Walkthrough 4: Evidence Interpretation\" in \"General Science\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Physics: Mechanics, Thermodynamics & Waves Concept Walkthrough 4: Evidence Interpretation\" (General Science, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Physics: Mechanics, Thermodynamics & Waves Concept Walkthrough 4: Evidence Interpretation\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Physics: Mechanics, Thermodynamics & Waves Concept Walkthrough 4: Evidence Interpretation\" (General Science, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "gen-science-1112-u1-external-generated-cycle-4",
        "order": 4,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-1112-u1-external-supp-seq-05",
      "title": "Physics: Mechanics, Thermodynamics & Waves Guided Practice Lab 5: Scientific Explanation",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-05-ia1",
          "type": "drag_and_drop",
          "title": "Physics: Mechanics, Thermodynamics & Waves Guided Practice Lab 5: Scientific Explanation Learning Flow",
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
                "label": "Set a goal for Explain scientific explanation using age-appropriate vocabulary..",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Identify independent, dependent, and control variables.",
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
          "id": "gen-science-1112-u1-external-supp-seq-05-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Physics: Mechanics, Thermodynamics & Waves Guided Practice Lab 5: Scientific Explanation."
        }
      ],
      "metadata": {
        "prompts": [
          "Explain scientific explanation using age-appropriate vocabulary.",
          "Apply scientific explanation in one guided General Science task.",
          "Identify one correction step for the next attempt."
        ],
        "generatedSupplement": true
      },
      "objectives": [
        "Explain scientific explanation using age-appropriate vocabulary.",
        "Apply scientific explanation in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-05-chunk-intro",
          "title": "Scientific Explanation Intro",
          "content": "When conducting experiments, it's important to change only one variable at a time. This helps ensure that the results are clear and easy to understand, allowing you to see how that specific change affects the outcome of your experiment.\nContext recap: When conducting experiments, it's important to change only one variable at a time. This helps ensure that the results are clear and easy to understand, allowing you to see how that specific change affects the outcome of your experiment.",
          "kind": "concept"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-05-chunk-practice",
          "title": "Guided Practice",
          "content": "In this activity, you will identify three types of variables in your experiment: the independent variable, which you change; the dependent variable, which you measure; and the control variables, which you keep constant to ensure a fair test. Understanding these concepts is crucial for conducting effective scientific investigations.\nContext recap: In this activity, you will identify three types of variables in your experiment: the independent variable, which you change; the dependent variable, which you measure; and the control variables, which you keep constant to ensure a fair test. Understanding these concepts is crucial for conducting effective scientific investigations.",
          "kind": "practice"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-05-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you apply scientific explanations, be mindful of a common mistake: failing to use evidence to support your claims. Make sure to identify this error and correct it by providing clear evidence from your data to back up your conclusions.\nContext recap: As you apply scientific explanations, be mindful of a common mistake: failing to use evidence to support your claims. Make sure to identify this error and correct it by providing clear evidence from your data to back up your conclusions.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-05-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review what we learned about scientific explanations. After this recap, think about one specific area where you can improve your understanding or application of these concepts in future experiments.\nContext recap: Let's take a moment to review what we learned about scientific explanations. After this recap, think about one specific area where you can improve your understanding or application of these concepts in future experiments.\nWhy this matters: Quick Recap helps learners in General Science connect ideas from Physics: Mechanics, Thermodynamics & Waves to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-05-card-1",
          "front": "What is scientific explanation?",
          "back": "It is a key General Science idea in Physics: Mechanics, Thermodynamics & Waves."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-05-card-2",
          "front": "How can I practice scientific explanation?",
          "back": "Identify independent, dependent, and control variables."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-05-card-3",
          "front": "What should I review next?",
          "back": "Review scientific explanation, then set one clear improvement target."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-05-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Physics: Mechanics, Thermodynamics & Waves Guided Practice Lab 5: Scientific Explanation\" in \"General Science\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Physics: Mechanics, Thermodynamics & Waves Guided Practice Lab 5: Scientific Explanation\" (General Science, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Physics: Mechanics, Thermodynamics & Waves Guided Practice Lab 5: Scientific Explanation\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Physics: Mechanics, Thermodynamics & Waves Guided Practice Lab 5: Scientific Explanation\" (General Science, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "gen-science-1112-u1-external-generated-cycle-5",
        "order": 5,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-1112-u1-external-supp-seq-06",
      "title": "Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 6: Observation Skills",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-06-q1",
          "text": "Which option best summarizes Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 6: Observation Skills?",
          "skillId": "gen-science-1112-u1-external-skill-physics-mechanics-thermodynamics-waves-checkpoint-quiz-6-observation-skills-summary",
          "options": [
            {
              "id": "a",
              "text": "Explain observation skills using age-appropriate vocabulary."
            },
            {
              "id": "b",
              "text": "A conclusion without evidence."
            },
            {
              "id": "c",
              "text": "A result that changes multiple variables at once."
            },
            {
              "id": "d",
              "text": "A claim that ignores the observed data."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-06-q2",
          "text": "Which response shows correct application of Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 6: Observation Skills?",
          "skillId": "gen-science-1112-u1-external-skill-physics-mechanics-thermodynamics-waves-checkpoint-quiz-6-observation-skills-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply observation skills in one guided General Science task."
            },
            {
              "id": "b",
              "text": "Select a conclusion before reviewing results."
            },
            {
              "id": "c",
              "text": "Use unrelated facts that do not match the experiment."
            },
            {
              "id": "d",
              "text": "Treat one observation as proof without retesting."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-06-q3",
          "text": "Why is review important after learning Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 6: Observation Skills?",
          "skillId": "gen-science-1112-u1-external-skill-physics-mechanics-thermodynamics-waves-checkpoint-quiz-6-observation-skills-review",
          "options": [
            {
              "id": "a",
              "text": "Explain one result using evidence and science vocabulary."
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
          "id": "gen-science-1112-u1-external-supp-seq-06-ia1",
          "type": "matching_pairs",
          "title": "Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 6: Observation Skills Error Match",
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
                "label": "I still mix up Explain observation skills using age-appropriate vocabulary.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 6: Observation Skills in notes but not in timed checks."
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
          "id": "gen-science-1112-u1-external-supp-seq-06-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 6: Observation Skills."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain observation skills using age-appropriate vocabulary.",
        "Apply observation skills in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-06-chunk-intro",
          "title": "Observation Skills Intro",
          "content": "In scientific investigations, it's essential to use evidence from your results to support your conclusions. This means looking closely at your data and explaining how it leads to your final thoughts or theories.\nContext recap: In scientific investigations, it's essential to use evidence from your results to support your conclusions. This means looking closely at your data and explaining how it leads to your final thoughts or theories.\nWhy this matters: Observation Skills Intro helps learners in General Science connect ideas from Physics: Mechanics, Thermodynamics & Waves to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "concept"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-06-chunk-practice",
          "title": "Guided Practice",
          "content": "For this practice, choose one of your results and explain it thoroughly. Use scientific vocabulary to describe what happened and how the evidence supports your explanation. This will help you communicate your findings effectively.\nContext recap: For this practice, choose one of your results and explain it thoroughly. Use scientific vocabulary to describe what happened and how the evidence supports your explanation. This will help you communicate your findings effectively.\nWhy this matters: Guided Practice helps learners in General Science connect ideas from Physics: Mechanics, Thermodynamics & Waves to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "practice"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-06-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you work on enhancing your observation skills, it's important to be mindful of a frequent mistake: failing to link your observations with the appropriate evidence. To improve your analysis, always ensure that you back up your observations with strong, reliable evidence that clearly supports what you have noticed. This connection is crucial for making accurate conclusions and understanding the concepts better.\nContext recap: As you work on enhancing your observation skills, it's important to be mindful of a frequent mistake: failing to link your observations with the appropriate evidence. To improve your analysis, always ensure that you back up your observations with strong, reliable evidence that clearly supports what you have noticed. This connection is crucial for making accurate conclusions and understanding the concepts better.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-06-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly review the key points about observation skills that we discussed. After this review, think about one specific goal you can set to improve your observation skills in future experiments.\nContext recap: Let's quickly review the key points about observation skills that we discussed. After this review, think about one specific goal you can set to improve your observation skills in future experiments.\nWhy this matters: Quick Recap helps learners in General Science connect ideas from Physics: Mechanics, Thermodynamics & Waves to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-06-card-1",
          "front": "What is observation skills?",
          "back": "It is a key General Science idea in Physics: Mechanics, Thermodynamics & Waves."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-06-card-2",
          "front": "How can I practice observation skills?",
          "back": "Explain one result using evidence and science vocabulary."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-06-card-3",
          "front": "What should I review next?",
          "back": "Review observation skills, then set one clear improvement target."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-06-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 6: Observation Skills\" in \"General Science\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 6: Observation Skills\" (General Science, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 6: Observation Skills\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 6: Observation Skills\" (General Science, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "gen-science-1112-u1-external-generated-cycle-6",
        "order": 6,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-1112-u1-external-supp-seq-07",
      "title": "Physics: Mechanics, Thermodynamics & Waves Concept Walkthrough 7: Hypothesis Testing",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-07-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Physics: Mechanics, Thermodynamics & Waves Concept Walkthrough 7: Hypothesis Testing."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain hypothesis testing using age-appropriate vocabulary.",
        "Apply hypothesis testing in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-07-chunk-intro",
          "title": "Hypothesis Testing Intro",
          "content": "To begin the process of hypothesis testing, start with a clear observation and formulate a testable question. This question will guide your investigation and help you determine what you want to find out.\nContext recap: To begin the process of hypothesis testing, start with a clear observation and formulate a testable question. This question will guide your investigation and help you determine what you want to find out.\nWhy this matters: Hypothesis Testing Intro helps learners in General Science connect ideas from Physics: Mechanics, Thermodynamics & Waves to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "concept"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-07-chunk-practice",
          "title": "Guided Practice",
          "content": "In this guided practice, conduct a mini investigation based on your hypothesis. Record your outcomes in a table to keep track of your results. This will help you analyze the data more effectively later on.\nContext recap: In this guided practice, conduct a mini investigation based on your hypothesis. Record your outcomes in a table to keep track of your results. This will help you analyze the data more effectively later on.\nWhy this matters: Guided Practice helps learners in General Science connect ideas from Physics: Mechanics, Thermodynamics & Waves to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "practice"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-07-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you engage in hypothesis testing, be on the lookout for a common mistake: not using evidence to support your hypothesis. If you notice this error, make sure to correct it by providing appropriate evidence from your investigation.\nContext recap: As you engage in hypothesis testing, be on the lookout for a common mistake: not using evidence to support your hypothesis. If you notice this error, make sure to correct it by providing appropriate evidence from your investigation.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-07-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review what we have learned about hypothesis testing. After this recap, think about one specific improvement target you can set for yourself to enhance your skills in this area.\nContext recap: Let's take a moment to review what we have learned about hypothesis testing. After this recap, think about one specific improvement target you can set for yourself to enhance your skills in this area.\nWhy this matters: Quick Recap helps learners in General Science connect ideas from Physics: Mechanics, Thermodynamics & Waves to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-07-card-1",
          "front": "What is hypothesis testing?",
          "back": "It is a key General Science idea in Physics: Mechanics, Thermodynamics & Waves."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-07-card-2",
          "front": "How can I practice hypothesis testing?",
          "back": "Run a mini investigation and record outcomes in a table."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-07-card-3",
          "front": "What should I review next?",
          "back": "Review hypothesis testing, then set one clear improvement target."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-07-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Physics: Mechanics, Thermodynamics & Waves Concept Walkthrough 7: Hypothesis Testing\" in \"General Science\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Physics: Mechanics, Thermodynamics & Waves Concept Walkthrough 7: Hypothesis Testing\" (General Science, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Physics: Mechanics, Thermodynamics & Waves Concept Walkthrough 7: Hypothesis Testing\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Physics: Mechanics, Thermodynamics & Waves Concept Walkthrough 7: Hypothesis Testing\" (General Science, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "gen-science-1112-u1-external-generated-cycle-7",
        "order": 7,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-1112-u1-external-supp-seq-08",
      "title": "Physics: Mechanics, Thermodynamics & Waves Guided Practice Lab 8: Variable Control",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-08-ia1",
          "type": "drag_and_drop",
          "title": "Physics: Mechanics, Thermodynamics & Waves Guided Practice Lab 8: Variable Control Learning Flow",
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
                "label": "Set a goal for Explain variable control using age-appropriate vocabulary..",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Identify independent, dependent, and control variables.",
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
          "id": "gen-science-1112-u1-external-supp-seq-08-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Physics: Mechanics, Thermodynamics & Waves Guided Practice Lab 8: Variable Control."
        }
      ],
      "metadata": {
        "prompts": [
          "Explain variable control using age-appropriate vocabulary.",
          "Apply variable control in one guided General Science task.",
          "Identify one correction step for the next attempt."
        ],
        "generatedSupplement": true
      },
      "objectives": [
        "Explain variable control using age-appropriate vocabulary.",
        "Apply variable control in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-08-chunk-intro",
          "title": "Variable Control Intro",
          "content": "In scientific experiments, it is important to change only one variable at a time. This practice helps us understand how that specific change affects the results. By isolating one variable, we can clearly see the impact it has on our experiment, making our findings more reliable and easier to interpret.\nContext recap: In scientific experiments, it is important to change only one variable at a time. This practice helps us understand how that specific change affects the results. By isolating one variable, we can clearly see the impact it has on our experiment, making our findings more reliable and easier to interpret.",
          "kind": "concept"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-08-chunk-practice",
          "title": "Guided Practice",
          "content": "In this activity, you will identify three types of variables in your experiment: independent variables, which you change; dependent variables, which you measure; and control variables, which you keep constant. Understanding these distinctions is crucial for conducting a successful experiment and drawing accurate conclusions.\nContext recap: In this activity, you will identify three types of variables in your experiment: independent variables, which you change; dependent variables, which you measure; and control variables, which you keep constant. Understanding these distinctions is crucial for conducting a successful experiment and drawing accurate conclusions.",
          "kind": "practice"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-08-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you apply variable control in your experiments, be mindful of a common mistake that many students make. This error can lead to confusing results. Take a moment to identify this mistake and think critically about how you can correct it using evidence from your observations.\nContext recap: As you apply variable control in your experiments, be mindful of a common mistake that many students make. This error can lead to confusing results. Take a moment to identify this mistake and think critically about how you can correct it using evidence from your observations.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-08-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review what we have learned about variable control. After this recap, think about one specific area where you can improve your understanding or application of this concept in future experiments. Setting a clear improvement target will help you focus your efforts.\nContext recap: Let's take a moment to review what we have learned about variable control. After this recap, think about one specific area where you can improve your understanding or application of this concept in future experiments. Setting a clear improvement target will help you focus your efforts.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-08-card-1",
          "front": "What is variable control?",
          "back": "It is a key General Science idea in Physics: Mechanics, Thermodynamics & Waves."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-08-card-2",
          "front": "How can I practice variable control?",
          "back": "Identify independent, dependent, and control variables."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-08-card-3",
          "front": "What should I review next?",
          "back": "Review variable control, then set one clear improvement target."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-08-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Physics: Mechanics, Thermodynamics & Waves Guided Practice Lab 8: Variable Control\" in \"General Science\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Physics: Mechanics, Thermodynamics & Waves Guided Practice Lab 8: Variable Control\" (General Science, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Physics: Mechanics, Thermodynamics & Waves Guided Practice Lab 8: Variable Control\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Physics: Mechanics, Thermodynamics & Waves Guided Practice Lab 8: Variable Control\" (General Science, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "gen-science-1112-u1-external-generated-cycle-8",
        "order": 8,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-1112-u1-external-supp-seq-09",
      "title": "Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 9: Evidence Interpretation",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-09-q1",
          "text": "Which option best summarizes Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 9: Evidence Interpretation?",
          "skillId": "gen-science-1112-u1-external-skill-physics-mechanics-thermodynamics-waves-checkpoint-quiz-9-evidence-interpretation-summary",
          "options": [
            {
              "id": "a",
              "text": "Explain evidence interpretation using age-appropriate vocabulary."
            },
            {
              "id": "b",
              "text": "A conclusion without evidence."
            },
            {
              "id": "c",
              "text": "A result that changes multiple variables at once."
            },
            {
              "id": "d",
              "text": "A claim that ignores the observed data."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-09-q2",
          "text": "Which response shows correct application of Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 9: Evidence Interpretation?",
          "skillId": "gen-science-1112-u1-external-skill-physics-mechanics-thermodynamics-waves-checkpoint-quiz-9-evidence-interpretation-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply evidence interpretation in one guided General Science task."
            },
            {
              "id": "b",
              "text": "Select a conclusion before reviewing results."
            },
            {
              "id": "c",
              "text": "Use unrelated facts that do not match the experiment."
            },
            {
              "id": "d",
              "text": "Treat one observation as proof without retesting."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-09-q3",
          "text": "Why is review important after learning Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 9: Evidence Interpretation?",
          "skillId": "gen-science-1112-u1-external-skill-physics-mechanics-thermodynamics-waves-checkpoint-quiz-9-evidence-interpretation-review",
          "options": [
            {
              "id": "a",
              "text": "Explain one result using evidence and science vocabulary."
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
          "id": "gen-science-1112-u1-external-supp-seq-09-ia1",
          "type": "matching_pairs",
          "title": "Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 9: Evidence Interpretation Error Match",
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
                "label": "I still mix up Explain evidence interpretation using age-appropriate vocabulary.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 9: Evidence Interpretation in notes but not in timed checks."
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
          "id": "gen-science-1112-u1-external-supp-seq-09-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 9: Evidence Interpretation."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain evidence interpretation using age-appropriate vocabulary.",
        "Apply evidence interpretation in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-09-chunk-intro",
          "title": "Evidence Interpretation Intro",
          "content": "When drawing conclusions from your experimental results, it is essential to use evidence to support your claims. This means looking closely at the data you collected and explaining how it leads to your conclusion. Strong evidence makes your argument more convincing and scientifically valid.\nContext recap: When drawing conclusions from your experimental results, it is essential to use evidence to support your claims. This means looking closely at the data you collected and explaining how it leads to your conclusion. Strong evidence makes your argument more convincing and scientifically valid.",
          "kind": "concept"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-09-chunk-practice",
          "title": "Guided Practice",
          "content": "In this guided practice, you will take one of your results and explain it using scientific vocabulary and evidence. This exercise will help you articulate your understanding of the data and demonstrate how it supports your conclusions, reinforcing your grasp of the scientific method.\nContext recap: In this guided practice, you will take one of your results and explain it using scientific vocabulary and evidence. This exercise will help you articulate your understanding of the data and demonstrate how it supports your conclusions, reinforcing your grasp of the scientific method.",
          "kind": "practice"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-09-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you interpret evidence in your experiments, be aware of a common error that can lead to misinterpretation. Identifying this mistake is crucial for improving your analytical skills. Once you spot it, think about how you can correct it using the evidence you have gathered.\nContext recap: As you interpret evidence in your experiments, be aware of a common error that can lead to misinterpretation. Identifying this mistake is crucial for improving your analytical skills. Once you spot it, think about how you can correct it using the evidence you have gathered.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-09-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly review the key points about evidence interpretation. After this review, consider setting a specific target for improvement in your ability to analyze and interpret data in future experiments. This will help you become a more effective scientist.\nContext recap: Let's quickly review the key points about evidence interpretation. After this review, consider setting a specific target for improvement in your ability to analyze and interpret data in future experiments. This will help you become a more effective scientist.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-09-card-1",
          "front": "What is evidence interpretation?",
          "back": "It is a key General Science idea in Physics: Mechanics, Thermodynamics & Waves."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-09-card-2",
          "front": "How can I practice evidence interpretation?",
          "back": "Explain one result using evidence and science vocabulary."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-09-card-3",
          "front": "What should I review next?",
          "back": "Review evidence interpretation, then set one clear improvement target."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-09-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 9: Evidence Interpretation\" in \"General Science\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 9: Evidence Interpretation\" (General Science, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 9: Evidence Interpretation\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 9: Evidence Interpretation\" (General Science, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "gen-science-1112-u1-external-generated-cycle-9",
        "order": 9,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-1112-u1-external-supp-seq-10",
      "title": "Physics: Mechanics, Thermodynamics & Waves Concept Walkthrough 10: Scientific Explanation",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-10-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Physics: Mechanics, Thermodynamics & Waves Concept Walkthrough 10: Scientific Explanation."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain scientific explanation using age-appropriate vocabulary.",
        "Apply scientific explanation in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-10-chunk-intro",
          "title": "Scientific Explanation Intro",
          "content": "To create a scientific explanation, you should start with a clear observation and formulate a testable question based on that observation. This process is fundamental in science, as it guides your investigation and helps you focus on what you want to learn.\nContext recap: To create a scientific explanation, you should start with a clear observation and formulate a testable question based on that observation. This process is fundamental in science, as it guides your investigation and helps you focus on what you want to learn.",
          "kind": "concept"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-10-chunk-practice",
          "title": "Guided Practice",
          "content": "In this guided practice, you will conduct a mini investigation. As you perform your experiment, make sure to record your outcomes in a table. This organized approach will help you analyze your results more effectively and draw meaningful conclusions.\nContext recap: In this guided practice, you will conduct a mini investigation. As you perform your experiment, make sure to record your outcomes in a table. This organized approach will help you analyze your results more effectively and draw meaningful conclusions.",
          "kind": "practice"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-10-chunk-check",
          "title": "Common Pitfall Check",
          "content": "While applying scientific explanations, be on the lookout for a common mistake that can hinder your understanding. Recognizing this error is an important step in improving your scientific reasoning. Once you identify it, think about how to correct it using the evidence you have gathered.\nContext recap: While applying scientific explanations, be on the lookout for a common mistake that can hinder your understanding. Recognizing this error is an important step in improving your scientific reasoning. Once you identify it, think about how to correct it using the evidence you have gathered.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-10-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's recap what we have learned about scientific explanations. After this recap, take a moment to set a clear improvement target for your future scientific explanations. This will help you refine your skills and enhance your understanding of the scientific process.\nContext recap: Let's recap what we have learned about scientific explanations. After this recap, take a moment to set a clear improvement target for your future scientific explanations. This will help you refine your skills and enhance your understanding of the scientific process.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-10-card-1",
          "front": "What is scientific explanation?",
          "back": "It is a key General Science idea in Physics: Mechanics, Thermodynamics & Waves."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-10-card-2",
          "front": "How can I practice scientific explanation?",
          "back": "Run a mini investigation and record outcomes in a table."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-10-card-3",
          "front": "What should I review next?",
          "back": "Review scientific explanation, then set one clear improvement target."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-10-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Physics: Mechanics, Thermodynamics & Waves Concept Walkthrough 10: Scientific Explanation\" in \"General Science\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Physics: Mechanics, Thermodynamics & Waves Concept Walkthrough 10: Scientific Explanation\" (General Science, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Physics: Mechanics, Thermodynamics & Waves Concept Walkthrough 10: Scientific Explanation\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Physics: Mechanics, Thermodynamics & Waves Concept Walkthrough 10: Scientific Explanation\" (General Science, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "gen-science-1112-u1-external-generated-cycle-10",
        "order": 10,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-1112-u1-external-supp-seq-11",
      "title": "Physics: Mechanics, Thermodynamics & Waves Guided Practice Lab 11: Observation Skills",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-11-ia1",
          "type": "drag_and_drop",
          "title": "Physics: Mechanics, Thermodynamics & Waves Guided Practice Lab 11: Observation Skills Learning Flow",
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
                "label": "Set a goal for Explain observation skills using age-appropriate vocabulary..",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Identify independent, dependent, and control variables.",
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
          "id": "gen-science-1112-u1-external-supp-seq-11-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Physics: Mechanics, Thermodynamics & Waves Guided Practice Lab 11: Observation Skills."
        }
      ],
      "metadata": {
        "prompts": [
          "Explain observation skills using age-appropriate vocabulary.",
          "Apply observation skills in one guided General Science task.",
          "Identify one correction step for the next attempt."
        ],
        "generatedSupplement": true
      },
      "objectives": [
        "Explain observation skills using age-appropriate vocabulary.",
        "Apply observation skills in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-11-chunk-intro",
          "title": "Observation Skills Intro",
          "content": "When conducting experiments, it is important to change only one variable at a time. This approach helps to ensure that the results are clear and easy to understand. By isolating each variable, you can accurately determine how it affects the outcome of your experiment.\nContext recap: When conducting experiments, it is important to change only one variable at a time. This approach helps to ensure that the results are clear and easy to understand. By isolating each variable, you can accurately determine how it affects the outcome of your experiment.",
          "kind": "concept"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-11-chunk-practice",
          "title": "Guided Practice",
          "content": "In this guided practice, you will identify three types of variables in your experiment: the independent variable, which you change; the dependent variable, which you measure; and the control variables, which you keep constant. Understanding these variables is crucial for conducting effective scientific experiments.\nContext recap: In this guided practice, you will identify three types of variables in your experiment: the independent variable, which you change; the dependent variable, which you measure; and the control variables, which you keep constant. Understanding these variables is crucial for conducting effective scientific experiments.",
          "kind": "practice"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-11-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you apply your observation skills, be on the lookout for a common mistake that many students make. Once you identify this error, use evidence from your observations to correct it. This practice will help you refine your skills and improve your scientific accuracy.\nContext recap: As you apply your observation skills, be on the lookout for a common mistake that many students make. Once you identify this error, use evidence from your observations to correct it. This practice will help you refine your skills and improve your scientific accuracy.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-11-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review the key observation skills we have learned. After this review, think about one specific area where you can improve your skills. Setting a clear improvement target will help you focus your efforts and enhance your scientific abilities.\nContext recap: Let's take a moment to review the key observation skills we have learned. After this review, think about one specific area where you can improve your skills. Setting a clear improvement target will help you focus your efforts and enhance your scientific abilities.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-11-card-1",
          "front": "What is observation skills?",
          "back": "It is a key General Science idea in Physics: Mechanics, Thermodynamics & Waves."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-11-card-2",
          "front": "How can I practice observation skills?",
          "back": "Identify independent, dependent, and control variables."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-11-card-3",
          "front": "What should I review next?",
          "back": "Review observation skills, then set one clear improvement target."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-11-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Physics: Mechanics, Thermodynamics & Waves Guided Practice Lab 11: Observation Skills\" in \"General Science\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Physics: Mechanics, Thermodynamics & Waves Guided Practice Lab 11: Observation Skills\" (General Science, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Physics: Mechanics, Thermodynamics & Waves Guided Practice Lab 11: Observation Skills\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Physics: Mechanics, Thermodynamics & Waves Guided Practice Lab 11: Observation Skills\" (General Science, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "gen-science-1112-u1-external-generated-cycle-11",
        "order": 11,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-1112-u1-external-supp-seq-12",
      "title": "Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 12: Hypothesis Testing",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-12-q1",
          "text": "Which option best summarizes Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 12: Hypothesis Testing?",
          "skillId": "gen-science-1112-u1-external-skill-physics-mechanics-thermodynamics-waves-checkpoint-quiz-12-hypothesis-testing-summary",
          "options": [
            {
              "id": "a",
              "text": "Explain hypothesis testing using age-appropriate vocabulary."
            },
            {
              "id": "b",
              "text": "A conclusion without evidence."
            },
            {
              "id": "c",
              "text": "A result that changes multiple variables at once."
            },
            {
              "id": "d",
              "text": "A claim that ignores the observed data."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-12-q2",
          "text": "Which response shows correct application of Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 12: Hypothesis Testing?",
          "skillId": "gen-science-1112-u1-external-skill-physics-mechanics-thermodynamics-waves-checkpoint-quiz-12-hypothesis-testing-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply hypothesis testing in one guided General Science task."
            },
            {
              "id": "b",
              "text": "Select a conclusion before reviewing results."
            },
            {
              "id": "c",
              "text": "Use unrelated facts that do not match the experiment."
            },
            {
              "id": "d",
              "text": "Treat one observation as proof without retesting."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-12-q3",
          "text": "Why is review important after learning Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 12: Hypothesis Testing?",
          "skillId": "gen-science-1112-u1-external-skill-physics-mechanics-thermodynamics-waves-checkpoint-quiz-12-hypothesis-testing-review",
          "options": [
            {
              "id": "a",
              "text": "Explain one result using evidence and science vocabulary."
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
          "id": "gen-science-1112-u1-external-supp-seq-12-ia1",
          "type": "matching_pairs",
          "title": "Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 12: Hypothesis Testing Error Match",
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
                "label": "I still mix up Explain hypothesis testing using age-appropriate vocabulary.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 12: Hypothesis Testing in notes but not in timed checks."
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
          "id": "gen-science-1112-u1-external-supp-seq-12-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 12: Hypothesis Testing."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain hypothesis testing using age-appropriate vocabulary.",
        "Apply hypothesis testing in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-12-chunk-intro",
          "title": "Hypothesis Testing Intro",
          "content": "When drawing conclusions from your experiments, it is essential to use evidence gathered from your results. This evidence should support your conclusions and help you understand the relationship between the variables you tested.\nContext recap: When drawing conclusions from your experiments, it is essential to use evidence gathered from your results. This evidence should support your conclusions and help you understand the relationship between the variables you tested.\nWhy this matters: Hypothesis Testing Intro helps learners in General Science connect ideas from Physics: Mechanics, Thermodynamics & Waves to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "concept"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-12-chunk-practice",
          "title": "Guided Practice",
          "content": "In this guided practice, you will explain one of your experimental results using scientific vocabulary and evidence. This exercise will help you articulate your findings clearly and demonstrate your understanding of the scientific concepts involved.\nContext recap: In this guided practice, you will explain one of your experimental results using scientific vocabulary and evidence. This exercise will help you articulate your findings clearly and demonstrate your understanding of the scientific concepts involved.\nWhy this matters: Guided Practice helps learners in General Science connect ideas from Physics: Mechanics, Thermodynamics & Waves to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "practice"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-12-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you engage in hypothesis testing, be aware of a common error that can occur. Once you spot this mistake, use evidence from your experiment to correct it. This practice will strengthen your understanding of the hypothesis testing process.\nContext recap: As you engage in hypothesis testing, be aware of a common error that can occur. Once you spot this mistake, use evidence from your experiment to correct it. This practice will strengthen your understanding of the hypothesis testing process.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-12-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly review the concept of hypothesis testing. After this recap, think about one specific area where you can improve your approach to hypothesis testing. Setting a clear improvement target will help you enhance your skills in this important scientific process.\nContext recap: Let's quickly review the concept of hypothesis testing. After this recap, think about one specific area where you can improve your approach to hypothesis testing. Setting a clear improvement target will help you enhance your skills in this important scientific process.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-12-card-1",
          "front": "What is hypothesis testing?",
          "back": "It is a key General Science idea in Physics: Mechanics, Thermodynamics & Waves."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-12-card-2",
          "front": "How can I practice hypothesis testing?",
          "back": "Explain one result using evidence and science vocabulary."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-12-card-3",
          "front": "What should I review next?",
          "back": "Review hypothesis testing, then set one clear improvement target."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-12-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 12: Hypothesis Testing\" in \"General Science\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 12: Hypothesis Testing\" (General Science, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 12: Hypothesis Testing\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 12: Hypothesis Testing\" (General Science, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "gen-science-1112-u1-external-generated-cycle-12",
        "order": 12,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-1112-u1-external-supp-seq-13",
      "title": "Physics: Mechanics, Thermodynamics & Waves Concept Walkthrough 13: Variable Control",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-13-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Physics: Mechanics, Thermodynamics & Waves Concept Walkthrough 13: Variable Control."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain variable control using age-appropriate vocabulary.",
        "Apply variable control in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-13-chunk-intro",
          "title": "Variable Control Intro",
          "content": "To begin your investigation, start with a clear observation and formulate a testable question. This foundational step is crucial for guiding your research and ensuring that your experiment is focused and relevant.\nContext recap: To begin your investigation, start with a clear observation and formulate a testable question. This foundational step is crucial for guiding your research and ensuring that your experiment is focused and relevant.\nWhy this matters: Variable Control Intro helps learners in General Science connect ideas from Physics: Mechanics, Thermodynamics & Waves to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "concept"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-13-chunk-practice",
          "title": "Guided Practice",
          "content": "In this guided practice, you will conduct a mini investigation. Be sure to record your outcomes in a table. This organized approach will help you analyze your results more effectively and draw meaningful conclusions from your data.\nContext recap: In this guided practice, you will conduct a mini investigation. Be sure to record your outcomes in a table. This organized approach will help you analyze your results more effectively and draw meaningful conclusions from your data.\nWhy this matters: Guided Practice helps learners in General Science connect ideas from Physics: Mechanics, Thermodynamics & Waves to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.",
          "kind": "practice"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-13-chunk-check",
          "title": "Common Pitfall Check",
          "content": "While applying variable control in your experiments, pay attention to a common error that can arise. Once you identify this mistake, use evidence from your investigation to correct it. This practice will enhance your understanding of how to effectively control variables.\nContext recap: While applying variable control in your experiments, pay attention to a common error that can arise. Once you identify this mistake, use evidence from your investigation to correct it. This practice will enhance your understanding of how to effectively control variables.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-13-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review the concept of variable control. After this review, think about one specific area where you can improve your skills in controlling variables during experiments. Setting a clear improvement target will help you refine your scientific methods.\nContext recap: Let's take a moment to review the concept of variable control. After this review, think about one specific area where you can improve your skills in controlling variables during experiments. Setting a clear improvement target will help you refine your scientific methods.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-13-card-1",
          "front": "What is variable control?",
          "back": "It is a key General Science idea in Physics: Mechanics, Thermodynamics & Waves."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-13-card-2",
          "front": "How can I practice variable control?",
          "back": "Run a mini investigation and record outcomes in a table."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-13-card-3",
          "front": "What should I review next?",
          "back": "Review variable control, then set one clear improvement target."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-13-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Physics: Mechanics, Thermodynamics & Waves Concept Walkthrough 13: Variable Control\" in \"General Science\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Physics: Mechanics, Thermodynamics & Waves Concept Walkthrough 13: Variable Control\" (General Science, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Physics: Mechanics, Thermodynamics & Waves Concept Walkthrough 13: Variable Control\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Physics: Mechanics, Thermodynamics & Waves Concept Walkthrough 13: Variable Control\" (General Science, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "gen-science-1112-u1-external-generated-cycle-13",
        "order": 13,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-1112-u1-external-supp-seq-14",
      "title": "Physics: Mechanics, Thermodynamics & Waves Guided Practice Lab 14: Evidence Interpretation",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-14-ia1",
          "type": "drag_and_drop",
          "title": "Physics: Mechanics, Thermodynamics & Waves Guided Practice Lab 14: Evidence Interpretation Learning Flow",
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
                "label": "Set a goal for Explain evidence interpretation using age-appropriate vocabulary..",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Identify independent, dependent, and control variables.",
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
          "id": "gen-science-1112-u1-external-supp-seq-14-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Physics: Mechanics, Thermodynamics & Waves Guided Practice Lab 14: Evidence Interpretation."
        }
      ],
      "metadata": {
        "prompts": [
          "Explain evidence interpretation using age-appropriate vocabulary.",
          "Apply evidence interpretation in one guided General Science task.",
          "Identify one correction step for the next attempt."
        ],
        "generatedSupplement": true
      },
      "objectives": [
        "Explain evidence interpretation using age-appropriate vocabulary.",
        "Apply evidence interpretation in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-14-chunk-intro",
          "title": "Evidence Interpretation Intro",
          "content": "When conducting experiments, it is important to change only one variable at a time. This approach helps us to clearly see how that specific change affects the results of our experiment. By isolating one variable, we can better understand the relationship between different factors and draw more accurate conclusions.\nContext recap: When conducting experiments, it is important to change only one variable at a time. This approach helps us to clearly see how that specific change affects the results of our experiment. By isolating one variable, we can better understand the relationship between different factors and draw more accurate conclusions.",
          "kind": "concept"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-14-chunk-practice",
          "title": "Guided Practice",
          "content": "In this activity, you will identify three types of variables in your experiment: independent variables, which you change; dependent variables, which you measure; and control variables, which you keep constant. Understanding these variables is crucial for designing a successful experiment and interpreting your results accurately.\nContext recap: In this activity, you will identify three types of variables in your experiment: independent variables, which you change; dependent variables, which you measure; and control variables, which you keep constant. Understanding these variables is crucial for designing a successful experiment and interpreting your results accurately.",
          "kind": "practice"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-14-chunk-check",
          "title": "Common Pitfall Check",
          "content": "As you apply evidence interpretation in your experiments, be on the lookout for a common mistake that many students make. Once you identify this error, think critically about how you can correct it using the evidence you have gathered. This practice will enhance your analytical skills and improve your scientific reasoning.\nContext recap: As you apply evidence interpretation in your experiments, be on the lookout for a common mistake that many students make. Once you identify this error, think critically about how you can correct it using the evidence you have gathered. This practice will enhance your analytical skills and improve your scientific reasoning.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-14-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's take a moment to review what we have learned about evidence interpretation. After this review, think about one specific area where you can improve your understanding or application of these concepts. Setting a clear improvement target will help you focus your efforts and enhance your skills in scientific inquiry.\nContext recap: Let's take a moment to review what we have learned about evidence interpretation. After this review, think about one specific area where you can improve your understanding or application of these concepts. Setting a clear improvement target will help you focus your efforts and enhance your skills in scientific inquiry.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-14-card-1",
          "front": "What is evidence interpretation?",
          "back": "It is a key General Science idea in Physics: Mechanics, Thermodynamics & Waves."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-14-card-2",
          "front": "How can I practice evidence interpretation?",
          "back": "Identify independent, dependent, and control variables."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-14-card-3",
          "front": "What should I review next?",
          "back": "Review evidence interpretation, then set one clear improvement target."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-14-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Physics: Mechanics, Thermodynamics & Waves Guided Practice Lab 14: Evidence Interpretation\" in \"General Science\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Physics: Mechanics, Thermodynamics & Waves Guided Practice Lab 14: Evidence Interpretation\" (General Science, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Physics: Mechanics, Thermodynamics & Waves Guided Practice Lab 14: Evidence Interpretation\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Physics: Mechanics, Thermodynamics & Waves Guided Practice Lab 14: Evidence Interpretation\" (General Science, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "gen-science-1112-u1-external-generated-cycle-14",
        "order": 14,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-1112-u1-external-supp-seq-15",
      "title": "Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 15: Scientific Explanation",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-15-q1",
          "text": "Which option best summarizes Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 15: Scientific Explanation?",
          "skillId": "gen-science-1112-u1-external-skill-physics-mechanics-thermodynamics-waves-checkpoint-quiz-15-scientific-explanation-summary",
          "options": [
            {
              "id": "a",
              "text": "Explain scientific explanation using age-appropriate vocabulary."
            },
            {
              "id": "b",
              "text": "A conclusion without evidence."
            },
            {
              "id": "c",
              "text": "A result that changes multiple variables at once."
            },
            {
              "id": "d",
              "text": "A claim that ignores the observed data."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-15-q2",
          "text": "Which response shows correct application of Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 15: Scientific Explanation?",
          "skillId": "gen-science-1112-u1-external-skill-physics-mechanics-thermodynamics-waves-checkpoint-quiz-15-scientific-explanation-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply scientific explanation in one guided General Science task."
            },
            {
              "id": "b",
              "text": "Select a conclusion before reviewing results."
            },
            {
              "id": "c",
              "text": "Use unrelated facts that do not match the experiment."
            },
            {
              "id": "d",
              "text": "Treat one observation as proof without retesting."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-15-q3",
          "text": "Why is review important after learning Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 15: Scientific Explanation?",
          "skillId": "gen-science-1112-u1-external-skill-physics-mechanics-thermodynamics-waves-checkpoint-quiz-15-scientific-explanation-review",
          "options": [
            {
              "id": "a",
              "text": "Explain one result using evidence and science vocabulary."
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
          "id": "gen-science-1112-u1-external-supp-seq-15-ia1",
          "type": "matching_pairs",
          "title": "Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 15: Scientific Explanation Error Match",
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
                "label": "I still mix up Explain scientific explanation using age-appropriate vocabulary.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 15: Scientific Explanation in notes but not in timed checks."
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
          "id": "gen-science-1112-u1-external-supp-seq-15-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 15: Scientific Explanation."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain scientific explanation using age-appropriate vocabulary.",
        "Apply scientific explanation in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-15-chunk-intro",
          "title": "Scientific Explanation Intro",
          "content": "In scientific research, it is essential to use evidence from your results to support your conclusions. This means that when you make a claim or state a finding, you should back it up with data and observations that you have collected during your experiments. This practice strengthens your arguments and makes your conclusions more credible.\nContext recap: In scientific research, it is essential to use evidence from your results to support your conclusions. This means that when you make a claim or state a finding, you should back it up with data and observations that you have collected during your experiments. This practice strengthens your arguments and makes your conclusions more credible.",
          "kind": "concept"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-15-chunk-practice",
          "title": "Guided Practice",
          "content": "For this practice, choose one of your experimental results and explain it using scientific vocabulary and evidence. This will help you articulate your understanding and demonstrate how the data supports your conclusions. Using precise language is important in science, as it helps convey your ideas clearly to others.\nContext recap: For this practice, choose one of your experimental results and explain it using scientific vocabulary and evidence. This will help you articulate your understanding and demonstrate how the data supports your conclusions. Using precise language is important in science, as it helps convey your ideas clearly to others.",
          "kind": "practice"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-15-chunk-check",
          "title": "Common Pitfall Check",
          "content": "While applying scientific explanations, be aware of a common error that can occur. Identifying this mistake is the first step; then, think about how you can correct it using the evidence you have gathered. This process will not only improve your explanations but also enhance your overall understanding of scientific principles.\nContext recap: While applying scientific explanations, be aware of a common error that can occur. Identifying this mistake is the first step; then, think about how you can correct it using the evidence you have gathered. This process will not only improve your explanations but also enhance your overall understanding of scientific principles.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-15-chunk-recap",
          "title": "Quick Recap",
          "content": "Let's quickly review what we have covered regarding scientific explanations. After this recap, consider setting one clear target for improvement in your understanding or application of these concepts. This goal will guide your learning and help you become more proficient in scientific reasoning.\nContext recap: Let's quickly review what we have covered regarding scientific explanations. After this recap, consider setting one clear target for improvement in your understanding or application of these concepts. This goal will guide your learning and help you become more proficient in scientific reasoning.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-1112-u1-external-supp-seq-15-card-1",
          "front": "What is scientific explanation?",
          "back": "It is a key General Science idea in Physics: Mechanics, Thermodynamics & Waves."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-15-card-2",
          "front": "How can I practice scientific explanation?",
          "back": "Explain one result using evidence and science vocabulary."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-15-card-3",
          "front": "What should I review next?",
          "back": "Review scientific explanation, then set one clear improvement target."
        },
        {
          "id": "gen-science-1112-u1-external-supp-seq-15-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 15: Scientific Explanation\" in \"General Science\" for grade band \"1112\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 15: Scientific Explanation\" (General Science, grade band 1112).",
        "lessonImage": "Create a clean educational illustration for \"Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 15: Scientific Explanation\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Physics: Mechanics, Thermodynamics & Waves Checkpoint Quiz 15: Scientific Explanation\" (General Science, grade band 1112)."
      },
      "external": {
        "sourceLessonId": "gen-science-1112-u1-external-generated-cycle-15",
        "order": 15,
        "generatedSupplement": true
      }
    }
  ]
};
