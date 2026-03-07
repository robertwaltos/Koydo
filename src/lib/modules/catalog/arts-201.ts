import type { LearningModule } from "@/lib/modules/types";

export const arts_201_Module: LearningModule = {
  "id": "arts-201",
  "title": "Creative Arts Studio II",
  "description": "Develop composition, visual storytelling, and critique routines across creative media.",
  "subject": "Arts",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "visual-arts"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Understand core concepts in visual composition and color narrative.",
    "Apply creative communication strategies through guided practice and iteration.",
    "Demonstrate mastery of visual storytelling and critique with subject-specific quizzes."
  ],
  "lessons": [
    {
      "id": "arts-201-l01",
      "title": "Composition and Visual Balance",
      "type": "video",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A vibrant, balanced flat-lay of art supplies including paintbrushes, palettes, and sketchbooks arranged symmetrically on a bright wooden table, soft natural lighting, high resolution, photorealistic.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic top-down view of a blank canvas where colorful geometric 3D shapes smoothly slide into a perfectly balanced composition, demonstrating visual weight, 4k resolution, smooth 60fps animation, bright educational style.",
      "chunks": [
        {
          "id": "arts-201-l01-c1",
          "title": "Composition and Visual Balance Overview",
          "content": "Welcome to the exciting world of visual composition! Whether you are sketching a comic book or painting a landscape, understanding how to arrange your artwork is key. We will discover how to create beautiful and balanced pieces by mastering the principles of creative composition. Let's get ready to level up our art skills!"
        },
        {
          "id": "arts-201-l01-c2",
          "title": "Core Concept: Visual Weight",
          "content": "Visual composition is how we arrange elements in our artwork. Think of it like a playground seesaw! If you put a giant, dark shape on one side, you need something on the other side to balance it out. This is called 'visual weight.' We use colors, shapes, and sizes to guide the viewer's eye and make the artwork feel stable and complete."
        },
        {
          "id": "arts-201-l01-c3",
          "title": "Worked Example: The Rule of Thirds",
          "content": "Let's look at a famous pro-trick called the Rule of Thirds. Imagine a tic-tac-toe grid over your canvas. Instead of putting your main subject right in the dead center, try placing it where the lines cross! This simple shift makes your artwork look much more dynamic and interesting to the viewer."
        },
        {
          "id": "arts-201-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn! Look around the room you are in right now. If you were going to take a photograph of this room, what would be your main focal point, and where would you place it using the Rule of Thirds? Explain your choice in one clear sentence."
        }
      ],
      "flashcards": [
        {
          "id": "arts-201-l01-f1",
          "front": "Visual Composition",
          "back": "The arrangement of elements within an artwork."
        },
        {
          "id": "arts-201-l01-f2",
          "front": "Visual Weight",
          "back": "How much an element attracts the viewer's eye based on size, color, or contrast."
        },
        {
          "id": "arts-201-l01-f3",
          "front": "Rule of Thirds",
          "back": "A grid system used to place subjects off-center for a more dynamic look."
        },
        {
          "id": "arts-201-l01-f4",
          "front": "Focal Point",
          "back": "The main star of your artwork that draws the viewer's attention first."
        }
      ],
      "learningAids": [
        {
          "id": "arts-201-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic showing the Rule of Thirds grid over a landscape painting."
        },
        {
          "id": "arts-201-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation showing a seesaw balancing different colored shapes."
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-201-l01.png"
    },
    {
      "id": "arts-201-l02",
      "title": "Color Narrative and Mood",
      "type": "interactive",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A split-screen digital painting showing the exact same fantasy landscape in two different color palettes: one warm, sunny, and inviting, the other cool, dark, and mysterious, highly detailed, 8k.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A time-lapse of a digital painting where the mood completely changes as the artist shifts the color palette from bright yellows and oranges to deep blues and purples, cinematic lighting, smooth transitions.",
      "metadata": {
        "prompts": [
          "Identify how warm colors make you feel compared to cool colors.",
          "Explain where color narrative appears in your favorite movie.",
          "Describe one question you still have about mixing colors."
        ]
      },
      "interactiveActivities": [
        {
          "id": "arts-201-l02-ia1",
          "type": "drag_and_drop",
          "title": "Color Mood Match",
          "description": "Sort each color palette into the mood it creates: Energetic, Calm, or Mysterious.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "data": {
            "targets": [
              {
                "id": "energetic",
                "label": "Energetic"
              },
              {
                "id": "calm",
                "label": "Calm"
              },
              {
                "id": "mysterious",
                "label": "Mysterious"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Bright Reds, Oranges, and Yellows",
                "correctTargetId": "energetic"
              },
              {
                "id": "d2",
                "label": "Soft Blues, Greens, and Pastels",
                "correctTargetId": "calm"
              },
              {
                "id": "d3",
                "label": "Dark Purples, Blacks, and Deep Blues",
                "correctTargetId": "mysterious"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "arts-201-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on choosing a color palette for a specific emotion."
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-201-l02.png"
    },
    {
      "id": "arts-201-l03",
      "title": "Checkpoint: Visual Composition",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing neon question mark hovering over a beautifully composed still life painting of fruit and a vase, 3d render, vibrant colors, studio lighting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A quick, engaging 3D animation showing a golden scale balancing different sized colorful shapes, representing visual balance, bright and educational, 4k.",
      "questions": [
        {
          "id": "arts-201-l03-q1",
          "text": "What does 'visual weight' refer to in an artwork?",
          "skillId": "arts-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "How much an element attracts the viewer's eye."
            },
            {
              "id": "b",
              "text": "The actual physical weight of the canvas."
            },
            {
              "id": "c",
              "text": "The amount of paint used on the brush."
            },
            {
              "id": "d",
              "text": "The price of the artwork in a gallery."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l03-q2",
          "text": "If you want to make a painting feel calm and peaceful, which color palette is best?",
          "skillId": "arts-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Soft blues and greens."
            },
            {
              "id": "b",
              "text": "Bright neon reds and yellows."
            },
            {
              "id": "c",
              "text": "Harsh blacks and stark whites."
            },
            {
              "id": "d",
              "text": "Vibrant oranges and purples."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l03-q3",
          "text": "How does the Rule of Thirds help an artist?",
          "skillId": "arts-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "It helps place the subject off-center to make the image more dynamic."
            },
            {
              "id": "b",
              "text": "It forces the artist to only use three colors."
            },
            {
              "id": "c",
              "text": "It requires the canvas to be cut into three pieces."
            },
            {
              "id": "d",
              "text": "It ensures the main subject is always perfectly in the middle."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l03-q4",
          "text": "Why is having a focal point important in visual composition?",
          "skillId": "arts-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It gives the viewer's eye a specific place to look first."
            },
            {
              "id": "b",
              "text": "It makes the artwork harder to understand."
            },
            {
              "id": "c",
              "text": "It hides the mistakes in the background."
            },
            {
              "id": "d",
              "text": "It removes the need for any other colors."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "arts-201-l03-ia1",
          "type": "matching_pairs",
          "title": "Concept Match: Visual Composition",
          "description": "Match the art term to its correct definition.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each term on the left.",
            "Pick the best definition on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Focal Point"
              },
              {
                "id": "l2",
                "label": "Visual Weight"
              },
              {
                "id": "l3",
                "label": "Rule of Thirds"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "The main star of the artwork"
              },
              {
                "id": "r2",
                "label": "How much an element attracts the eye"
              },
              {
                "id": "r3",
                "label": "A grid used for dynamic placement"
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
          "id": "arts-201-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Remember 'W.T.F.' for composition: Weight, Thirds, Focal point!"
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-201-l03.png"
    },
    {
      "id": "arts-201-l04",
      "title": "Design Iteration Cycle",
      "type": "video",
      "duration": 11,
      "lessonImagePrompt": "Imagen 4 prompt: Three side-by-side sketches of a cool sci-fi character design, showing the progression from a rough pencil outline to a fully colored and detailed final digital version, high quality.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced stop-motion animation of a clay sculpture being molded, adjusted, and refined multiple times until it becomes a perfect, highly detailed little dragon, studio lighting.",
      "chunks": [
        {
          "id": "arts-201-l04-c1",
          "title": "What is Iteration?",
          "content": "In this lesson, we will explore the design iteration cycle! 'Iteration' is just a fancy word for drafting, testing, and improving. Great art rarely happens on the first try. Instead of expecting perfection immediately, we will practice making rough drafts, getting feedback, and making smart changes to improve our creative projects."
        },
        {
          "id": "arts-201-l04-c2",
          "title": "The Iteration Steps",
          "content": "Let's break down the steps for our design iteration cycle! Step 1: Brainstorm and sketch your initial idea. Step 2: Review your sketch and ask, 'Does this communicate my goal?' Step 3: Revise and refine based on your review. Following these steps takes the pressure off being perfect right away!"
        },
        {
          "id": "arts-201-l04-c3",
          "title": "Common Mistakes in Iteration",
          "content": "It's important to be aware of common mistakes during the design process. The biggest mistake is falling in love with your first draft and refusing to change it! Another mistake is skipping the brainstorming phase and jumping straight to final details. By staying flexible, we can create much stronger artwork."
        },
        {
          "id": "arts-201-l04-c4",
          "title": "Independent Try",
          "content": "Now, it's time for you to try! Take a piece of paper and draw a quick 30-second sketch of a tree. Then, look at it, figure out one thing you want to improve, and draw it again in 60 seconds. Notice how much better the second version is? That's the power of iteration!"
        }
      ],
      "flashcards": [
        {
          "id": "arts-201-l04-f1",
          "front": "Iteration",
          "back": "The process of drafting, reviewing, and improving an artwork."
        },
        {
          "id": "arts-201-l04-f2",
          "front": "Brainstorming",
          "back": "Generating many rough ideas before choosing one to develop."
        },
        {
          "id": "arts-201-l04-f3",
          "front": "Revision",
          "back": "Making changes to an artwork to improve its composition or message."
        },
        {
          "id": "arts-201-l04-f4",
          "front": "First Draft",
          "back": "The initial, rough version of an artwork, meant to be improved upon."
        }
      ],
      "learningAids": [
        {
          "id": "arts-201-l04-a1",
          "type": "image",
          "title": "Iteration Example",
          "content": "An image showing a character design evolving over three distinct drafts."
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-201-l04.png"
    },
    {
      "id": "arts-201-l05",
      "title": "Symbolism and Visual Storytelling",
      "type": "interactive",
      "duration": 13,
      "lessonImagePrompt": "Imagen 4 prompt: An open magical storybook where glowing 3D symbols like a heart, an antique key, and a bright star float out of the pages, rich fantasy lighting, highly detailed.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A cinematic pan across a classic oil painting, zooming in on specific symbolic details like a wilting flower and a bright flickering candle, with soft glowing highlights emphasizing the symbols.",
      "metadata": {
        "prompts": [
          "Pick one symbol you see every day and explain what it means.",
          "How can weather in a painting tell a story?",
          "Create your own symbol for 'adventure'."
        ]
      },
      "interactiveActivities": [
        {
          "id": "arts-201-l05-ia1",
          "type": "sorting_buckets",
          "title": "Symbol Sorter",
          "description": "Sort the visual symbols into the emotion or idea they usually represent.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "danger",
                "label": "Danger / Conflict"
              },
              {
                "id": "peace",
                "label": "Peace / Hope"
              },
              {
                "id": "mystery",
                "label": "Mystery / Unknown"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Dark storm clouds",
                "correctBucketId": "danger"
              },
              {
                "id": "i2",
                "label": "A white dove flying",
                "correctBucketId": "peace"
              },
              {
                "id": "i3",
                "label": "A locked door in a dark hallway",
                "correctBucketId": "mystery"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "arts-201-l05-a1",
          "type": "animation",
          "title": "Storytelling Walkthrough",
          "content": "Animated sequence showing how adding a single prop (like a broken clock) changes the story of a painting."
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-201-l05.png"
    },
    {
      "id": "arts-201-l06",
      "title": "Checkpoint: Creative Communication",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing checkpoint flag planted on a colorful wooden artist's palette covered in wet paint, 3d rendered, bright and encouraging, soft focus background.",
      "conceptVideoPrompt": "Veo 3.1 prompt: An animated sequence showing a rough pencil sketch transforming into a polished, fully colored artwork as glowing feedback notes appear, get checked off, and disappear.",
      "questions": [
        {
          "id": "arts-201-l06-q1",
          "text": "What is the main purpose of design iteration?",
          "skillId": "arts-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "To improve artwork through drafting, reviewing, and revising."
            },
            {
              "id": "b",
              "text": "To finish an artwork as fast as possible on the first try."
            },
            {
              "id": "c",
              "text": "To copy another artist's work exactly."
            },
            {
              "id": "d",
              "text": "To avoid getting any feedback from others."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l06-q2",
          "text": "What does a dark, stormy sky usually symbolize in visual storytelling?",
          "skillId": "arts-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Danger, conflict, or sadness."
            },
            {
              "id": "b",
              "text": "Happiness and celebration."
            },
            {
              "id": "c",
              "text": "A calm and peaceful morning."
            },
            {
              "id": "d",
              "text": "Wealth and success."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l06-q3",
          "text": "Why is it a mistake to fall in love with your very first draft?",
          "skillId": "arts-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Because it prevents you from making changes that could improve the artwork."
            },
            {
              "id": "b",
              "text": "Because first drafts are always perfect."
            },
            {
              "id": "c",
              "text": "Because you will run out of paper."
            },
            {
              "id": "d",
              "text": "Because other people will steal your idea."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l06-q4",
          "text": "Which of the following is an example of visual storytelling?",
          "skillId": "arts-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "Using a wilting flower to show that time is passing."
            },
            {
              "id": "b",
              "text": "Writing a long paragraph on the back of the canvas."
            },
            {
              "id": "c",
              "text": "Buying expensive paint brushes."
            },
            {
              "id": "d",
              "text": "Signing your name at the bottom of the painting."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "arts-201-l06-ia1",
          "type": "matching_pairs",
          "title": "Iteration Match",
          "description": "Match the iteration step to its description.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each step on the left.",
            "Pick the best description on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Brainstorming"
              },
              {
                "id": "l2",
                "label": "Drafting"
              },
              {
                "id": "l3",
                "label": "Revising"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Coming up with many rough ideas"
              },
              {
                "id": "r2",
                "label": "Creating the first rough version"
              },
              {
                "id": "r3",
                "label": "Making changes to improve the work"
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
          "id": "arts-201-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Draft, Review, Revise!"
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-201-l06.png"
    },
    {
      "id": "arts-201-l07",
      "title": "Comparative Art Analysis",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: Two distinct paintings displayed side-by-side in a modern art gallery, one abstract and colorful, the other realistic and muted, with a glowing 3D magnifying glass hovering between them.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A split-screen video smoothly panning across a classic Renaissance painting and a bold Modernist painting, highlighting contrasting brushstrokes and color choices with glowing outlines.",
      "chunks": [
        {
          "id": "arts-201-l07-c1",
          "title": "What is Comparative Analysis?",
          "content": "Comparative art analysis sounds complicated, but it just means looking at two artworks side-by-side and finding what is similar and what is different. By comparing two pieces, we can learn a lot about the choices each artist made regarding color, composition, and mood."
        },
        {
          "id": "arts-201-l07-c2",
          "title": "Using Critique Language",
          "content": "When comparing art, we use 'critique language.' Instead of just saying 'I like this one better,' we use specific words. For example, 'Painting A uses warm colors to feel energetic, while Painting B uses cool colors to feel calm.' This helps us explain our thoughts clearly and professionally."
        },
        {
          "id": "arts-201-l07-c3",
          "title": "The Three Pillars of Comparison",
          "content": "When you compare two artworks, look at three main pillars: 1) Subject Matter (What is it a picture of?), 2) Technique (How was it made? Are the brushstrokes smooth or messy?), and 3) Mood (How does it make you feel?). Checking these three things ensures your analysis is thorough."
        },
        {
          "id": "arts-201-l07-c4",
          "title": "Next-Step Plan",
          "content": "After completing your analysis, write down one thing you noticed that you want to try in your own art! Maybe you loved how one artist used shadows, or how another used bright outlines. Analyzing other people's art is one of the best ways to improve your own."
        }
      ],
      "flashcards": [
        {
          "id": "arts-201-l07-f1",
          "front": "Comparative Analysis",
          "back": "Looking at two artworks to find similarities and differences."
        },
        {
          "id": "arts-201-l07-f2",
          "front": "Critique Language",
          "back": "Using specific art vocabulary to explain your thoughts clearly."
        },
        {
          "id": "arts-201-l07-f3",
          "front": "Subject Matter",
          "back": "What the artwork is actually showing (e.g., a bowl of fruit, a landscape)."
        },
        {
          "id": "arts-201-l07-f4",
          "front": "Technique",
          "back": "The method the artist used to create the work (e.g., thick brushstrokes, smooth blending)."
        }
      ],
      "learningAids": [
        {
          "id": "arts-201-l07-a1",
          "type": "practice",
          "title": "Comparison Planner",
          "content": "A Venn diagram template for comparing two artworks."
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-201-l07.png"
    },
    {
      "id": "arts-201-l08",
      "title": "Portfolio Revision Session",
      "type": "interactive",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A neat wooden desk with an open professional portfolio book, scattered pencil sketches, and a glowing digital drawing tablet, warm cozy study lighting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A top-down view of an artist's hands organizing and swapping out different vibrant art prints in a sleek black portfolio book, professional, satisfying, and highly detailed.",
      "metadata": {
        "prompts": [
          "Look at your past work. What is one thing you have improved at?",
          "Which piece in your portfolio needs the most revision and why?",
          "What is your next artistic goal?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "arts-201-l08-ia1",
          "type": "matching_pairs",
          "title": "Feedback to Action Match",
          "description": "Match the critique feedback with the best revision action.",
          "estimatedMinutes": 7,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Feedback: 'The main character blends into the background.'"
              },
              {
                "id": "l2",
                "label": "Feedback: 'The mood feels too happy for a sad scene.'"
              },
              {
                "id": "l3",
                "label": "Feedback: 'The composition feels unbalanced on the left.'"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Action: Increase contrast or add a bright outline to the character."
              },
              {
                "id": "r2",
                "label": "Action: Change the color palette to cooler, muted tones."
              },
              {
                "id": "r3",
                "label": "Action: Add visual weight to the right side of the canvas."
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
          "id": "arts-201-l08-a1",
          "type": "mnemonic",
          "title": "Revision Cycle",
          "content": "Listen, Plan, Revise!"
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-201-l08.png"
    },
    {
      "id": "arts-201-l09",
      "title": "Review: Artistic Decisions",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing human brain made entirely of colorful, textured paint splatters, representing artistic decision making, 3d render, dark background.",
      "conceptVideoPrompt": "Veo 3.1 prompt: An animated flowchart showing different artistic choices (color, composition, medium) branching out into different beautiful artworks, dynamic camera movements.",
      "questions": [
        {
          "id": "arts-201-l09-q1",
          "text": "When comparing two artworks, what does 'technique' refer to?",
          "skillId": "arts-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "How the artist applied the materials, like brushstrokes or blending."
            },
            {
              "id": "b",
              "text": "The price the artwork sold for."
            },
            {
              "id": "c",
              "text": "The emotion the viewer feels."
            },
            {
              "id": "d",
              "text": "The frame around the painting."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l09-q2",
          "text": "If a peer says your painting 'lacks a focal point,' what is the best revision action?",
          "skillId": "arts-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Make one specific element stand out using bright color or high contrast."
            },
            {
              "id": "b",
              "text": "Paint over the entire canvas with black."
            },
            {
              "id": "c",
              "text": "Add fifty more tiny details everywhere."
            },
            {
              "id": "d",
              "text": "Ignore the feedback because art is subjective."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l09-q3",
          "text": "Why is it important to use 'critique language' instead of just saying 'I like it'?",
          "skillId": "arts-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "It helps explain exactly *why* something works or doesn't work."
            },
            {
              "id": "b",
              "text": "It makes you sound smarter than the artist."
            },
            {
              "id": "c",
              "text": "It is a rule required by all art galleries."
            },
            {
              "id": "d",
              "text": "It guarantees the artwork will win an award."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l09-q4",
          "text": "What is the main goal of a portfolio revision session?",
          "skillId": "arts-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "To look back at past work, identify weaknesses, and plan improvements."
            },
            {
              "id": "b",
              "text": "To throw away all your old art."
            },
            {
              "id": "c",
              "text": "To show off to your friends."
            },
            {
              "id": "d",
              "text": "To copy someone else's portfolio."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "arts-201-l09-ia1",
          "type": "matching_pairs",
          "title": "Critique Match",
          "description": "Match the casual statement to the professional critique language.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each casual statement on the left.",
            "Pick the professional translation on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "'It looks too messy.'"
              },
              {
                "id": "l2",
                "label": "'My eyes don't know where to look.'"
              },
              {
                "id": "l3",
                "label": "'It feels sad.'"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "'The technique uses chaotic, unrefined brushstrokes.'"
              },
              {
                "id": "r2",
                "label": "'The composition lacks a clear focal point.'"
              },
              {
                "id": "r3",
                "label": "'The cool color palette creates a somber mood.'"
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
          "id": "arts-201-l09-a1",
          "type": "mnemonic",
          "title": "Critique Tip",
          "content": "Be Specific, Be Kind, Be Helpful."
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-201-l09.png"
    },
    {
      "id": "arts-201-l10",
      "title": "Mastery: Creative Arts II",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A golden trophy shaped like a paintbrush and artist's palette, sparkling under a dramatic spotlight, 3d render, highly detailed.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A celebratory montage of various art styles and techniques blending together in a colorful, dynamic swirl, ending with a burst of golden confetti.",
      "questions": [
        {
          "id": "arts-201-l10-q1",
          "text": "Which of the following best describes 'visual balance'?",
          "skillId": "arts-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Distributing visual weight evenly across the canvas."
            },
            {
              "id": "b",
              "text": "Using only black and white paint."
            },
            {
              "id": "c",
              "text": "Drawing everything exactly in the center."
            },
            {
              "id": "d",
              "text": "Making sure the canvas doesn't fall off the easel."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l10-q2",
          "text": "What is the first step in the design iteration cycle?",
          "skillId": "arts-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Brainstorming and sketching rough ideas."
            },
            {
              "id": "b",
              "text": "Adding the final highlights and signature."
            },
            {
              "id": "c",
              "text": "Framing the artwork."
            },
            {
              "id": "d",
              "text": "Selling the artwork."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l10-q3",
          "text": "If an artist uses a bright red stop sign in a painting of a quiet forest, what are they likely trying to do?",
          "skillId": "arts-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Create a strong focal point and symbolize a warning."
            },
            {
              "id": "b",
              "text": "Blend the sign into the background."
            },
            {
              "id": "c",
              "text": "Make the forest look more natural."
            },
            {
              "id": "d",
              "text": "Show that they ran out of green paint."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l10-q4",
          "text": "Why is it helpful to compare two different artworks?",
          "skillId": "arts-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It highlights the unique choices each artist made regarding technique and mood."
            },
            {
              "id": "b",
              "text": "It proves which artist is objectively better."
            },
            {
              "id": "c",
              "text": "It allows you to combine them into one painting."
            },
            {
              "id": "d",
              "text": "It is the only way to learn how to paint."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "arts-201-l10-ia1",
          "type": "matching_pairs",
          "title": "Mastery Match",
          "description": "Match the core concept to its practical application.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each concept on the left.",
            "Pick the best application on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Rule of Thirds"
              },
              {
                "id": "l2",
                "label": "Color Narrative"
              },
              {
                "id": "l3",
                "label": "Iteration"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Placing a character off-center for dynamic effect"
              },
              {
                "id": "r2",
                "label": "Using dark blues to show a character is sad"
              },
              {
                "id": "r3",
                "label": "Redrawing a hand three times until it looks right"
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
          "id": "arts-201-l10-a1",
          "type": "mnemonic",
          "title": "Mastery Checklist",
          "content": "Composition, Color, Story, Iteration!"
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-201-l10.png"
    },
    {
      "id": "arts-201-l11",
      "title": "Applied Arts Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: A bustling, brightly lit art studio with wooden easels, blank canvases, and colorful paint splatters on the floor, inspiring and creative atmosphere, photorealistic.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced time-lapse of a collaborative mural being painted on a large brick wall by multiple artists, showing teamwork, creative process, and vibrant colors.",
      "metadata": {
        "prompts": [
          "What is the first step you take when starting a new art project?",
          "How do you decide when an artwork is 'finished'?",
          "Describe a time you had to change your artwork based on feedback."
        ]
      },
      "interactiveActivities": [
        {
          "id": "arts-201-l11-ia1",
          "type": "sorting_buckets",
          "title": "Project Workflow",
          "description": "Sort the actions into the correct phase of an art project: Planning, Creating, or Refining.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "planning",
                "label": "Planning"
              },
              {
                "id": "creating",
                "label": "Creating"
              },
              {
                "id": "refining",
                "label": "Refining"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Sketching thumbnails and picking colors",
                "correctBucketId": "planning"
              },
              {
                "id": "i2",
                "label": "Applying the main layers of paint",
                "correctBucketId": "creating"
              },
              {
                "id": "i3",
                "label": "Asking for a critique and fixing details",
                "correctBucketId": "refining"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "arts-201-l11-a1",
          "type": "practice",
          "title": "Workflow Card",
          "content": "Plan -> Create -> Refine -> Finalize."
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-201-l11.png"
    },
    {
      "id": "arts-201-l12",
      "title": "Creative Arts II Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing neon 'Level Up' sign surrounded by floating art supplies like markers, brushes, and digital pens, vibrant colors, 3d render.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced, energetic animation of a blank canvas rapidly filling up with a masterpiece, symbolizing applied mastery, dynamic camera angles.",
      "questions": [
        {
          "id": "arts-201-l12-q1",
          "text": "Which of the following is the best example of visual storytelling?",
          "skillId": "arts-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "A painting of a broken crown lying in the mud to symbolize a fallen king."
            },
            {
              "id": "b",
              "text": "A perfectly symmetrical drawing of a square."
            },
            {
              "id": "c",
              "text": "A blank canvas with a title card."
            },
            {
              "id": "d",
              "text": "A random splash of paint with no intended meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l12-q2",
          "text": "When giving a critique, what is the most helpful approach?",
          "skillId": "arts-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Point out specific areas for improvement and suggest actionable changes."
            },
            {
              "id": "b",
              "text": "Just say 'it looks bad' without explaining why."
            },
            {
              "id": "c",
              "text": "Only give compliments so the artist doesn't feel bad."
            },
            {
              "id": "d",
              "text": "Redraw the artwork for them."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l12-q3",
          "text": "If an artwork feels 'unbalanced,' what is likely the problem?",
          "skillId": "arts-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "All the heavy visual elements are crowded on one side of the canvas."
            },
            {
              "id": "b",
              "text": "The artist used too many warm colors."
            },
            {
              "id": "c",
              "text": "The canvas is not a perfect square."
            },
            {
              "id": "d",
              "text": "The paint hasn't dried yet."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l12-q4",
          "text": "Why do artists create multiple drafts (iterate)?",
          "skillId": "arts-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "To test different ideas and refine their composition before the final piece."
            },
            {
              "id": "b",
              "text": "Because they keep losing their first drawing."
            },
            {
              "id": "c",
              "text": "To waste time in the studio."
            },
            {
              "id": "d",
              "text": "Because art teachers force them to."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "arts-201-l12-ia1",
          "type": "matching_pairs",
          "title": "Applied Knowledge Match",
          "description": "Match the artistic problem to the best solution.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each problem on the left.",
            "Pick the best solution on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "The painting feels too chaotic."
              },
              {
                "id": "l2",
                "label": "The viewer doesn't know where to look."
              },
              {
                "id": "l3",
                "label": "The mood feels wrong for a scary scene."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Simplify the background and remove clutter."
              },
              {
                "id": "r2",
                "label": "Create a strong focal point using contrast."
              },
              {
                "id": "r3",
                "label": "Change the colors to dark, cool tones."
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
          "id": "arts-201-l12-a1",
          "type": "mnemonic",
          "title": "Problem Solving Tip",
          "content": "Identify the issue, pick a strategy, execute the fix!"
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-201-l12.png"
    },
    {
      "id": "arts-201-l13",
      "title": "Arts Scenario Lab",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A digital drawing tablet showing a half-finished poster design for a school play, surrounded by colorful sticky notes and reference photos on a wooden desk.",
      "conceptVideoPrompt": "Veo 3.1 prompt: An animated sequence showing the step-by-step creation of a theater poster, from initial rough thumbnail sketches to the final vibrant, high-resolution print.",
      "chunks": [
        {
          "id": "arts-201-l13-c1",
          "title": "Scenario Brief: The School Play Poster",
          "content": "In this exciting scenario, you have been hired to design a poster for the school's new mystery play! You need to use visual composition to make the title stand out, color narrative to make it look mysterious, and design iteration to get it approved by the drama teacher. Let's apply all our skills to this real-world challenge!"
        },
        {
          "id": "arts-201-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this poster, start by breaking it down. First, what is the focal point? (The title of the play). Second, what is the color palette? (Dark purples and greens for mystery). Third, what symbols can we use? (A magnifying glass or a shadow). Planning these choices in advance makes the actual drawing much easier."
        },
        {
          "id": "arts-201-l13-c3",
          "title": "Execute and Justify",
          "content": "Now it's time to put your plan into action! As you sketch, you decide to place the title using the Rule of Thirds so it catches the eye. You use dark colors to set the mood. If the drama teacher asks why you made these choices, you can use critique language to justify them: 'I used dark tones to establish a mysterious narrative.'"
        },
        {
          "id": "arts-201-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After finishing the first draft, you step back and evaluate. Is the title easy to read? Does it feel mysterious? You notice the title blends into the background a bit, so you iterate: you add a bright yellow outline to the text to increase contrast. Now it's perfect!"
        }
      ],
      "flashcards": [
        {
          "id": "arts-201-l13-f1",
          "front": "Scenario Planning",
          "back": "Breaking a large project into smaller choices like color, composition, and symbols."
        },
        {
          "id": "arts-201-l13-f2",
          "front": "Justification",
          "back": "Explaining *why* you made an artistic choice using proper vocabulary."
        },
        {
          "id": "arts-201-l13-f3",
          "front": "Contrast",
          "back": "Using opposite colors or values (light vs dark) to make something stand out."
        },
        {
          "id": "arts-201-l13-f4",
          "front": "Applied Mastery",
          "back": "Using all your learned skills together to solve a real-world art problem."
        }
      ],
      "learningAids": [
        {
          "id": "arts-201-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A flowchart showing the steps from receiving the poster assignment to the final printed design."
        },
        {
          "id": "arts-201-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Design a quick thumbnail sketch for a 'Comedy Night' poster. What colors will you use?"
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-201-l13.png"
    },
    {
      "id": "arts-201-l14",
      "title": "Arts Coaching Clinic",
      "type": "interactive",
      "duration": 13,
      "lessonImagePrompt": "Imagen 4 prompt: A friendly, stylized 3D character of an art teacher pointing to a glowing high-tech whiteboard displaying a color wheel and composition grids.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A smooth animation showing a 'mistake' in a painting (like muddy colors) being magically corrected with a wave of a glowing paintbrush, leaving vibrant, clean colors behind.",
      "metadata": {
        "prompts": [
          "Identify one thing you often struggle with in your art.",
          "Choose the best way to practice fixing that struggle.",
          "Write a goal for your next art project."
        ]
      },
      "interactiveActivities": [
        {
          "id": "arts-201-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match the common art mistake to the best way to fix it.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "My colors look muddy and gray."
              },
              {
                "id": "l2",
                "label": "My drawing looks stiff and unnatural."
              },
              {
                "id": "l3",
                "label": "I never finish my projects."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Clean your brush more often and study color theory."
              },
              {
                "id": "r2",
                "label": "Do quick 30-second gesture sketches to loosen up."
              },
              {
                "id": "r3",
                "label": "Break the project into smaller, manageable steps."
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
          "id": "arts-201-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Identify the mistake, find the tool, practice the fix."
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-201-l14.png"
    },
    {
      "id": "arts-201-l15",
      "title": "Creative Arts II Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing finish line ribbon being broken by a flying paintbrush, dynamic and celebratory, 3d render, bright confetti background.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A high-energy, colorful particle animation forming the words 'Art Mastery' in a bold, creative font, 4k resolution, 60fps.",
      "questions": [
        {
          "id": "arts-201-l15-q1",
          "text": "What is the primary benefit of using the Rule of Thirds?",
          "skillId": "arts-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It creates a more engaging and dynamic composition than centering the subject."
            },
            {
              "id": "b",
              "text": "It ensures you use exactly three colors."
            },
            {
              "id": "c",
              "text": "It makes the painting dry faster."
            },
            {
              "id": "d",
              "text": "It is required for all professional artwork."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l15-q2",
          "text": "If you want to tell a story of hope and peace, which visual symbols and colors should you use?",
          "skillId": "arts-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Soft pastels, bright lighting, and symbols like doves or sunrises."
            },
            {
              "id": "b",
              "text": "Dark reds, heavy shadows, and symbols like broken glass."
            },
            {
              "id": "c",
              "text": "Neon greens and chaotic, messy brushstrokes."
            },
            {
              "id": "d",
              "text": "Only black and white with no symbols."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l15-q3",
          "text": "During a critique, someone says your artwork 'lacks visual weight on the right side.' How do you fix this?",
          "skillId": "arts-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Add a darker color, a larger shape, or more detail to the right side."
            },
            {
              "id": "b",
              "text": "Erase everything on the left side."
            },
            {
              "id": "c",
              "text": "Turn the canvas upside down."
            },
            {
              "id": "d",
              "text": "Tell them they are wrong."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-201-l15-q4",
          "text": "What is the ultimate goal of the design iteration cycle?",
          "skillId": "arts-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "To continuously refine and improve an artwork until it successfully communicates its intended message."
            },
            {
              "id": "b",
              "text": "To make as many mistakes as possible."
            },
            {
              "id": "c",
              "text": "To avoid ever finishing a project."
            },
            {
              "id": "d",
              "text": "To copy a photograph perfectly."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "arts-201-l15-ia1",
          "type": "matching_pairs",
          "title": "Final Sprint Match",
          "description": "Match the art term to its final definition.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each term on the left.",
            "Pick the best definition on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Visual Storytelling"
              },
              {
                "id": "l2",
                "label": "Iteration"
              },
              {
                "id": "l3",
                "label": "Critique"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Using symbols and colors to convey a narrative"
              },
              {
                "id": "r2",
                "label": "The process of drafting and revising"
              },
              {
                "id": "r3",
                "label": "Analyzing and providing feedback on art"
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
          "id": "arts-201-l15-a1",
          "type": "mnemonic",
          "title": "You Did It!",
          "content": "Keep creating, keep iterating, keep growing!"
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-201-l15.png"
    }
  ]
};
