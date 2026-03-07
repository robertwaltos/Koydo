import type { LearningModule } from "@/lib/modules/types";

export const arts_301_Module: LearningModule = {
  "id": "arts-301",
  "title": "Creative Arts Composition and Curation",
  "description": "Advance from art production to intentional composition, critique, and portfolio curation.",
  "subject": "Arts",
  "tags": [
    "core",
    "curriculum",
    "interactive"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Understand core concepts in visual composition and balance.",
    "Apply iterative revision and constructive critique strategies.",
    "Demonstrate mastery in curating a cohesive art portfolio."
  ],
  "lessons": [
    {
      "id": "arts-301-l01",
      "title": "Composition Systems and Balance",
      "type": "video",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A vibrant, high-quality digital illustration of a young artist's desk filled with colorful paints, sketchbooks, and a glowing tablet displaying a perfectly balanced geometric composition. Warm, inspiring lighting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A cinematic, 4k resolution video panning across a beautiful art gallery. The camera zooms into a painting, and glowing animated lines appear over it to demonstrate the Rule of Thirds and symmetrical balance.",
      "chunks": [
        {
          "id": "arts-301-l01-c1",
          "title": "Welcome to Composition!",
          "content": "Welcome to the exciting world of composition! Think of composition as the invisible skeleton of your artwork. It's how you arrange elements like shapes, colors, and lines to make your art look amazing. Today, we'll explore how to use balance and structure to guide your viewer's eye exactly where you want it to go. Get ready to level up your creative skills!"
        },
        {
          "id": "arts-301-l01-c2",
          "title": "The Magic of Balance",
          "content": "Balance in art is like balancing on a seesaw. Symmetrical balance means both sides of your artwork look almost exactly the same, creating a calm and formal feeling. Asymmetrical balance is trickier—it uses different objects of different sizes that still feel visually 'equal.' For example, one large dark circle on the left can be balanced by three small light circles on the right!"
        },
        {
          "id": "arts-301-l01-c3",
          "title": "The Rule of Thirds",
          "content": "Let's look at a famous trick: The Rule of Thirds. Imagine a tic-tac-toe board drawn over your canvas. Instead of putting your main subject right in the dead center, try placing it where those lines cross! This simple shift makes your artwork feel more dynamic, natural, and interesting to look at."
        },
        {
          "id": "arts-301-l01-c4",
          "title": "Your Turn to Frame",
          "content": "Now it's your turn! Make a rectangle with your fingers and look around your room. Try framing a view using the Rule of Thirds. Place a lamp, a poster, or a pet on one of the imaginary intersecting lines. Notice how it changes the feel of the 'picture'? This is your first step to mastering composition!"
        }
      ],
      "flashcards": [
        {
          "id": "arts-301-l01-f1",
          "front": "Composition",
          "back": "The arrangement of visual elements in an artwork."
        },
        {
          "id": "arts-301-l01-f2",
          "front": "Symmetrical Balance",
          "back": "When both sides of an artwork carry equal visual weight and look almost identical."
        },
        {
          "id": "arts-301-l01-f3",
          "front": "Asymmetrical Balance",
          "back": "When different elements are arranged to balance each other out without being identical."
        },
        {
          "id": "arts-301-l01-f4",
          "front": "Rule of Thirds",
          "back": "A grid system that places the subject off-center for a more dynamic look."
        }
      ],
      "learningAids": [
        {
          "id": "arts-301-l01-a1",
          "type": "image",
          "title": "Composition Poster",
          "content": "A colorful infographic showing examples of symmetrical, asymmetrical, and radial balance."
        },
        {
          "id": "arts-301-l01-a2",
          "type": "animation",
          "title": "Rule of Thirds Animation",
          "content": "Short animation showing a camera viewfinder applying the Rule of Thirds to a landscape."
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-301-l01.png"
    },
    {
      "id": "arts-301-l02",
      "title": "Narrative Intent in Visual Design",
      "type": "interactive",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A split-screen illustration. On the left, a simple sketch of a character. On the right, the same character fully painted with dramatic lighting, rain, and a glowing magical artifact, showing strong narrative intent.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A time-lapse video of an artist drawing a storyboard. As the artist draws, the characters come to life in brief animated bursts, showing how visual choices tell a story without words.",
      "metadata": {
        "prompts": [
          "What story is your favorite painting trying to tell?",
          "How can colors change the mood of an artwork?",
          "Describe a time you used art to express a feeling."
        ]
      },
      "interactiveActivities": [
        {
          "id": "arts-301-l02-ia1",
          "type": "drag_and_drop",
          "title": "Storytelling Flow Builder",
          "description": "Sort each artistic action into the correct phase of creating a narrative.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Plan the Story"
              },
              {
                "id": "execute",
                "label": "Create the Art"
              },
              {
                "id": "reflect",
                "label": "Check the Message"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Decide on the main emotion (e.g., joy, sadness)",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Use warm colors to paint a sunny, happy scene",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Ask a friend what feeling they get from the painting",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "arts-301-l02-a1",
          "type": "practice",
          "title": "Mood Board",
          "content": "A guided activity where you select colors and shapes to match a specific emotion."
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-301-l02.png"
    },
    {
      "id": "arts-301-l03",
      "title": "Checkpoint: Advanced Composition",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D rendered golden trophy sitting on a wooden artist's easel, surrounded by scattered paintbrushes and color palettes. Bright, celebratory lighting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced, energetic montage of different art styles (cubism, realism, abstract) transitioning smoothly into one another, ending with a glowing checkmark.",
      "questions": [
        {
          "id": "arts-301-l03-q1",
          "text": "What does 'Rule of Thirds' refer to in visual composition?",
          "skillId": "arts-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Placing the main subject on the intersections of a 3x3 grid."
            },
            {
              "id": "b",
              "text": "Using exactly three colors in every painting."
            },
            {
              "id": "c",
              "text": "Drawing three different subjects in the center."
            },
            {
              "id": "d",
              "text": "Dividing the canvas into three solid stripes."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-301-l03-q2",
          "text": "Which of the following best describes asymmetrical balance?",
          "skillId": "arts-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Different elements that carry equal visual weight."
            },
            {
              "id": "b",
              "text": "Both sides of the artwork are exactly identical."
            },
            {
              "id": "c",
              "text": "All elements are pushed to one side of the canvas."
            },
            {
              "id": "d",
              "text": "Using only black and white colors."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-301-l03-q3",
          "text": "What is 'Narrative Intent' in art?",
          "skillId": "arts-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "The specific story or message the artist wants to communicate."
            },
            {
              "id": "b",
              "text": "The type of paint the artist chooses to use."
            },
            {
              "id": "c",
              "text": "The price tag placed on the artwork."
            },
            {
              "id": "d",
              "text": "The frame used to hang the picture."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-301-l03-q4",
          "text": "How can colors affect the narrative of a piece?",
          "skillId": "arts-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "They can change the mood, like using blue for sadness or yellow for joy."
            },
            {
              "id": "b",
              "text": "Colors only make the painting dry faster."
            },
            {
              "id": "c",
              "text": "Colors have no effect on the story of an artwork."
            },
            {
              "id": "d",
              "text": "They only matter if the artwork is symmetrical."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "arts-301-l03-ia1",
          "type": "matching_pairs",
          "title": "Composition Match",
          "description": "Match the composition term to its best definition.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the term on the left.",
            "Find the matching definition on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Symmetrical Balance"
              },
              {
                "id": "l2",
                "label": "Rule of Thirds"
              },
              {
                "id": "l3",
                "label": "Narrative Intent"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Mirror image on both sides"
              },
              {
                "id": "r2",
                "label": "Off-center grid placement"
              },
              {
                "id": "r3",
                "label": "The story the art tells"
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
          "id": "arts-301-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Remember 'S.A.R.': Symmetrical, Asymmetrical, Rule of Thirds!"
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-301-l03.png"
    },
    {
      "id": "arts-301-l04",
      "title": "Iteration and Refinement Workflow",
      "type": "video",
      "duration": 11,
      "lessonImagePrompt": "Imagen 4 prompt: A sequence of three canvases showing the evolution of a painting: a rough pencil sketch, a blocked-in color version, and a highly detailed final masterpiece. Soft studio lighting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A smooth, continuous shot showing an artist erasing, redrawing, and painting over a canvas. The artwork evolves beautifully over time, highlighting the power of revision.",
      "chunks": [
        {
          "id": "arts-301-l04-c1",
          "title": "The Power of the Rough Draft",
          "content": "Did you know that almost no masterpiece was created perfectly on the first try? Iteration is the secret superpower of great artists. It means creating a rough draft, looking at it closely, and making changes to improve it. Your first sketch is just a map; iteration is how you build the actual world!"
        },
        {
          "id": "arts-301-l04-c2",
          "title": "Step-by-Step Refinement",
          "content": "Let's break down the refinement workflow. Step 1: The Thumbnail Sketch (getting the basic shapes down). Step 2: The Block-In (adding base colors and lighting). Step 3: The Polish (adding details, textures, and highlights). By working in stages, you don't get overwhelmed by details too early."
        },
        {
          "id": "arts-301-l04-c3",
          "title": "Embracing Mistakes",
          "content": "During revision, you will find mistakes. That is a good thing! A weirdly drawn hand or a color that clashes is just a signal telling you what to fix next. Don't erase your whole drawing in frustration. Instead, ask yourself: 'What exactly isn't working here?' and fix just that part."
        },
        {
          "id": "arts-301-l04-c4",
          "title": "The Fresh Eyes Technique",
          "content": "Have you ever stared at your art so long it starts to look weird? That's normal! A great refinement trick is the 'Fresh Eyes' technique. Step away from your art for an hour, or look at it in a mirror. You will instantly spot things you want to change or improve!"
        }
      ],
      "flashcards": [
        {
          "id": "arts-301-l04-f1",
          "front": "Iteration",
          "back": "The process of repeating and refining an artwork to improve it."
        },
        {
          "id": "arts-301-l04-f2",
          "front": "Thumbnail Sketch",
          "back": "A small, quick drawing used to plan the composition."
        },
        {
          "id": "arts-301-l04-f3",
          "front": "Block-In",
          "back": "The stage where basic colors and values are added to the sketch."
        },
        {
          "id": "arts-301-l04-f4",
          "front": "Fresh Eyes Technique",
          "back": "Taking a break or flipping the canvas to see mistakes clearly."
        }
      ],
      "learningAids": [
        {
          "id": "arts-301-l04-a1",
          "type": "image",
          "title": "Evolution of a Drawing",
          "content": "Visual guide showing a drawing moving from sketch to final polish."
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-301-l04.png"
    },
    {
      "id": "arts-301-l05",
      "title": "Critique Language and Evidence",
      "type": "interactive",
      "duration": 13,
      "lessonImagePrompt": "Imagen 4 prompt: A diverse group of young artists sitting in a circle in a bright art studio, looking at a painting on an easel and having a friendly, constructive discussion. Speech bubbles with positive art icons.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A short, engaging animation of two characters looking at a sculpture. One character points out a specific detail, and a glowing line highlights the area, showing how to give specific, helpful feedback.",
      "metadata": {
        "prompts": [
          "What is the difference between an insult and a critique?",
          "How do you feel when someone gives you feedback on your art?",
          "Why is it important to be specific when critiquing?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "arts-301-l05-ia1",
          "type": "sorting_buckets",
          "title": "Helpful vs. Unhelpful Feedback",
          "description": "Sort the feedback phrases into 'Constructive Critique' or 'Unhelpful Comments'.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "constructive",
                "label": "Constructive Critique"
              },
              {
                "id": "unhelpful",
                "label": "Unhelpful Comments"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "'The bright yellow really draws my eye to the character's face.'",
                "correctBucketId": "constructive"
              },
              {
                "id": "i2",
                "label": "'I don't like it, it looks weird.'",
                "correctBucketId": "unhelpful"
              },
              {
                "id": "i3",
                "label": "'Maybe try making the shadows darker to add more depth.'",
                "correctBucketId": "constructive"
              },
              {
                "id": "i4",
                "label": "'It's perfect, don't change anything.' (Too vague!)",
                "correctBucketId": "unhelpful"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "arts-301-l05-a1",
          "type": "animation",
          "title": "The Critique Sandwich",
          "content": "Animated sequence showing how to layer feedback: Compliment, Suggestion, Compliment."
        }
      ]
    },
    {
      "id": "arts-301-l06",
      "title": "Checkpoint: Creative Revision Quality",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing magnifying glass hovering over a beautifully detailed sketchbook page, highlighting the intricate pencil strokes. Magical, sparkling dust around the lens.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic 3D animation of a checklist appearing next to a painting. As the painting improves (colors brighten, lines sharpen), green checkmarks appear on the list.",
      "questions": [
        {
          "id": "arts-301-l06-q1",
          "text": "What is the main purpose of iterative revision in art?",
          "skillId": "arts-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "To gradually improve the artwork through multiple drafts and changes."
            },
            {
              "id": "b",
              "text": "To finish the artwork as fast as possible on the first try."
            },
            {
              "id": "c",
              "text": "To copy another artist's work exactly."
            },
            {
              "id": "d",
              "text": "To throw away the artwork and start over completely."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-301-l06-q2",
          "text": "Which of the following is an example of constructive critique?",
          "skillId": "arts-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "'The composition is great, but the background colors could be a bit cooler to make the subject pop.'"
            },
            {
              "id": "b",
              "text": "'This is bad, you should just give up.'"
            },
            {
              "id": "c",
              "text": "'I love it, it's nice.' (Without explaining why)"
            },
            {
              "id": "d",
              "text": "'Why did you draw a dog? I like cats better.'"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-301-l06-q3",
          "text": "What is the 'Fresh Eyes' technique?",
          "skillId": "arts-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Taking a break or flipping the canvas to spot mistakes you missed."
            },
            {
              "id": "b",
              "text": "Asking a stranger to paint the rest of your picture."
            },
            {
              "id": "c",
              "text": "Painting with your eyes closed."
            },
            {
              "id": "d",
              "text": "Only painting early in the morning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-301-l06-q4",
          "text": "Why is a 'Thumbnail Sketch' useful?",
          "skillId": "arts-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It helps you plan the composition quickly before committing to details."
            },
            {
              "id": "b",
              "text": "It is the final step of the painting process."
            },
            {
              "id": "c",
              "text": "It is used to frame the final artwork."
            },
            {
              "id": "d",
              "text": "It prevents you from ever making mistakes."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "arts-301-l06-ia1",
          "type": "matching_pairs",
          "title": "Revision Match",
          "description": "Match the revision problem to the best solution.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review the problem on the left.",
            "Pick the best artistic solution on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "The painting looks flat."
              },
              {
                "id": "l2",
                "label": "I can't tell if the proportions are right."
              },
              {
                "id": "l3",
                "label": "I don't know what to fix next."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Add darker shadows and brighter highlights."
              },
              {
                "id": "r2",
                "label": "Flip the canvas or look in a mirror."
              },
              {
                "id": "r3",
                "label": "Ask a peer for a constructive critique."
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
          "id": "arts-301-l06-a1",
          "type": "mnemonic",
          "title": "Critique Rule",
          "content": "Be Kind, Be Specific, Be Helpful."
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-301-l06.png"
    },
    {
      "id": "arts-301-l07",
      "title": "Portfolio Curation Principles",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A sleek, modern art gallery wall displaying a carefully curated row of framed artworks. A young artist stands back, holding a clipboard, looking proud. Cinematic lighting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A top-down view of hands sliding physical photographs and sketches around on a large wooden table, organizing them into a cohesive, beautiful portfolio layout.",
      "chunks": [
        {
          "id": "arts-301-l07-c1",
          "title": "What is Curation?",
          "content": "Imagine you are the director of an art museum. You can't hang every single painting ever made on the walls; you have to choose the best ones that tell a story together. That is curation! Curating your portfolio means selecting your strongest artworks to show off your unique skills and style."
        },
        {
          "id": "arts-301-l07-c2",
          "title": "Quality Over Quantity",
          "content": "A common mistake is putting every drawing you've ever done into your portfolio. Remember: a portfolio is only as strong as its weakest piece. It is much better to have 5 amazing, finished artworks than 20 messy, half-finished sketches. Be brave and choose only your best work!"
        },
        {
          "id": "arts-301-l07-c3",
          "title": "Creating a Cohesive Theme",
          "content": "When people look at your portfolio, they should get a sense of who you are as an artist. Try to group artworks that share a similar theme, color palette, or subject matter. If you have a mix of sci-fi robots and watercolor flowers, try organizing them into separate sections so the viewer doesn't get confused."
        },
        {
          "id": "arts-301-l07-c4",
          "title": "The Power of the First and Last Impression",
          "content": "Here is a pro tip for ordering your portfolio: Put your absolute best piece first to grab their attention. Put your second-best piece last, so they leave with a great final impression. Fill the middle with your other strong works. This creates a powerful journey for the viewer!"
        }
      ],
      "flashcards": [
        {
          "id": "arts-301-l07-f1",
          "front": "Curation",
          "back": "The process of selecting, organizing, and presenting artworks."
        },
        {
          "id": "arts-301-l07-f2",
          "front": "Portfolio",
          "back": "A curated collection of an artist's best work."
        },
        {
          "id": "arts-301-l07-f3",
          "front": "Cohesive Theme",
          "back": "A unifying idea or style that ties a collection of artworks together."
        },
        {
          "id": "arts-301-l07-f4",
          "front": "Ordering Strategy",
          "back": "Best piece first, second-best piece last."
        }
      ],
      "learningAids": [
        {
          "id": "arts-301-l07-a1",
          "type": "practice",
          "title": "Portfolio Planner",
          "content": "A template to help you select and order 5 pieces of your own art."
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-301-l07.png"
    },
    {
      "id": "arts-301-l08",
      "title": "Studio Critique Lab",
      "type": "interactive",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A digital interface showing a virtual art gallery. Several glowing cursors point to different paintings, simulating an online interactive critique session. High-tech, creative vibe.",
      "conceptVideoPrompt": "Veo 3.1 prompt: An animated sequence showing a messy pile of art magically sorting itself into a neat, professional portfolio book, with a ribbon tying around it at the end.",
      "metadata": {
        "prompts": [
          "Which piece of art are you most proud of and why?",
          "What is the hardest part about leaving an artwork out of your portfolio?",
          "How do you decide which artwork goes first?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "arts-301-l08-ia1",
          "type": "matching_pairs",
          "title": "Curation Decisions",
          "description": "Match the portfolio problem with the best curation strategy.",
          "estimatedMinutes": 7,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "I have 30 drawings, some are just doodles."
              },
              {
                "id": "l2",
                "label": "I want to make a strong first impression."
              },
              {
                "id": "l3",
                "label": "My art styles are very different."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Select only the top 5-10 finished pieces."
              },
              {
                "id": "r2",
                "label": "Put your absolute best artwork on page one."
              },
              {
                "id": "r3",
                "label": "Group them into separate themed sections."
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
          "id": "arts-301-l08-a1",
          "type": "mnemonic",
          "title": "Curation Rule",
          "content": "Your portfolio is only as strong as your weakest piece."
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-301-l08.png"
    },
    {
      "id": "arts-301-l09",
      "title": "Review: Artistic Decision-Making",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing brain made of colorful paint splatters and geometric shapes, symbolizing artistic decision-making and creativity. Dark background to make the colors pop.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced recap video showing quick flashes of the Rule of Thirds, a critique session, and a portfolio being organized, ending with a bold 'REVIEW' text.",
      "questions": [
        {
          "id": "arts-301-l09-q1",
          "text": "What is the best strategy for ordering a portfolio?",
          "skillId": "arts-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Put your best piece first and your second-best piece last."
            },
            {
              "id": "b",
              "text": "Put them in alphabetical order by title."
            },
            {
              "id": "c",
              "text": "Put your worst piece first so they see your improvement."
            },
            {
              "id": "d",
              "text": "Randomize the order completely."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-301-l09-q2",
          "text": "Why is 'Quality over Quantity' important in curation?",
          "skillId": "arts-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Because a few excellent pieces look more professional than many mediocre ones."
            },
            {
              "id": "b",
              "text": "Because portfolios have a strict weight limit."
            },
            {
              "id": "c",
              "text": "Because artists shouldn't make a lot of art."
            },
            {
              "id": "d",
              "text": "It isn't important; more art is always better."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-301-l09-q3",
          "text": "If an artist uses dark, stormy colors and sharp, jagged shapes, what is likely their narrative intent?",
          "skillId": "arts-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "To convey a feeling of danger, tension, or sadness."
            },
            {
              "id": "b",
              "text": "To show a peaceful, sunny day at the beach."
            },
            {
              "id": "c",
              "text": "To make the viewer feel relaxed and sleepy."
            },
            {
              "id": "d",
              "text": "To demonstrate symmetrical balance."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-301-l09-q4",
          "text": "What should you do if you receive constructive critique that you disagree with?",
          "skillId": "arts-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "Listen politely, consider their point of view, and decide if it serves your artistic goal."
            },
            {
              "id": "b",
              "text": "Argue with the person immediately."
            },
            {
              "id": "c",
              "text": "Change your artwork right away, even if you hate the idea."
            },
            {
              "id": "d",
              "text": "Throw the artwork away."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "arts-301-l09-ia1",
          "type": "matching_pairs",
          "title": "Artistic Choices Match",
          "description": "Match the artistic choice to its intended effect.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review the artistic choice on the left.",
            "Pick the resulting effect on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Using the Rule of Thirds"
              },
              {
                "id": "l2",
                "label": "Curating only 5 best pieces"
              },
              {
                "id": "l3",
                "label": "Using a 'Critique Sandwich'"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Creates a dynamic, natural composition"
              },
              {
                "id": "r2",
                "label": "Ensures a high-quality, professional portfolio"
              },
              {
                "id": "r3",
                "label": "Delivers feedback in a kind, helpful way"
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
          "id": "arts-301-l09-a1",
          "type": "mnemonic",
          "title": "Decision Tip",
          "content": "Every choice (color, line, placement) should support your main story."
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-301-l09.png"
    },
    {
      "id": "arts-301-l10",
      "title": "Mastery: Creative Arts III",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A grand, ornate golden frame surrounding a glowing, magical canvas that says 'MASTERY'. Confetti and sparkles falling around it in a celebratory studio setting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A sweeping, cinematic shot moving through an art exhibition where all the concepts (balance, iteration, curation) are displayed as glowing, floating holograms.",
      "questions": [
        {
          "id": "arts-301-l10-q1",
          "text": "Which of the following best defines 'Composition' in visual arts?",
          "skillId": "arts-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The intentional arrangement of visual elements to guide the viewer's eye."
            },
            {
              "id": "b",
              "text": "The type of canvas material used for oil painting."
            },
            {
              "id": "c",
              "text": "The process of cleaning paintbrushes."
            },
            {
              "id": "d",
              "text": "A random scattering of colors without a plan."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-301-l10-q2",
          "text": "What is the primary goal of iterative revision?",
          "skillId": "arts-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "To refine and improve an artwork through multiple stages of drafting."
            },
            {
              "id": "b",
              "text": "To prove that the first draft is always perfect."
            },
            {
              "id": "c",
              "text": "To make the artwork look exactly like a photograph."
            },
            {
              "id": "d",
              "text": "To finish the project as quickly as possible."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-301-l10-q3",
          "text": "When curating a portfolio, why might you exclude a piece you spent 20 hours on?",
          "skillId": "arts-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Because it doesn't fit the cohesive theme or isn't as strong as your other pieces."
            },
            {
              "id": "b",
              "text": "Because you should only include art that took less than an hour to make."
            },
            {
              "id": "c",
              "text": "Because portfolios can only hold 3 pieces of art."
            },
            {
              "id": "d",
              "text": "Because long projects are always bad."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-301-l10-q4",
          "text": "How does asymmetrical balance differ from symmetrical balance?",
          "skillId": "arts-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "Asymmetrical balance uses different elements to create visual weight, while symmetrical uses identical elements."
            },
            {
              "id": "b",
              "text": "Asymmetrical balance is only used in sculpture."
            },
            {
              "id": "c",
              "text": "Symmetrical balance is always off-center."
            },
            {
              "id": "d",
              "text": "There is no difference; they mean the same thing."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "arts-301-l10-ia1",
          "type": "matching_pairs",
          "title": "Mastery Concept Match",
          "description": "Match the core concept to its real-world application.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review the concept on the left.",
            "Pick the application on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Rule of Thirds"
              },
              {
                "id": "l2",
                "label": "Iterative Revision"
              },
              {
                "id": "l3",
                "label": "Portfolio Curation"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Placing a character's eyes on the top grid line."
              },
              {
                "id": "r2",
                "label": "Doing a rough sketch before adding final ink."
              },
              {
                "id": "r3",
                "label": "Choosing 5 sci-fi paintings for a gallery show."
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
          "id": "arts-301-l10-a1",
          "type": "mnemonic",
          "title": "Mastery Checklist",
          "content": "Compose carefully, Revise often, Curate ruthlessly."
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-301-l10.png"
    },
    {
      "id": "arts-301-l11",
      "title": "Applied Arts Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: A bustling, creative art studio with multiple stations. One station has sketches, another has paints, and a third has a corkboard for curating. Bright, energetic atmosphere.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced, inspiring montage of a student completing an art challenge: sketching rapidly, painting with bold strokes, and finally pinning the finished piece to a gallery wall.",
      "metadata": {
        "prompts": [
          "What is the hardest part of starting a new art project?",
          "How do you push through when a drawing isn't looking right?",
          "What is your favorite part of the creative process?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "arts-301-l11-ia1",
          "type": "sorting_buckets",
          "title": "Project Workflow",
          "description": "Sort the actions into the correct phase of an art project: Plan, Create, or Curate.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "plan",
                "label": "Plan (Composition & Intent)"
              },
              {
                "id": "create",
                "label": "Create (Iteration & Revision)"
              },
              {
                "id": "curate",
                "label": "Curate (Selection & Display)"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Drawing three quick thumbnail sketches",
                "correctBucketId": "plan"
              },
              {
                "id": "i2",
                "label": "Asking a friend for a critique on your shading",
                "correctBucketId": "create"
              },
              {
                "id": "i3",
                "label": "Choosing a frame that matches the artwork's mood",
                "correctBucketId": "curate"
              },
              {
                "id": "i4",
                "label": "Deciding to leave out a messy sketch from your final presentation",
                "correctBucketId": "curate"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "arts-301-l11-a1",
          "type": "practice",
          "title": "Challenge Workflow Card",
          "content": "Plan your composition -> Iterate your drafts -> Curate your final piece."
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-301-l11.png"
    },
    {
      "id": "arts-301-l12",
      "title": "Creative Arts III Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing silver medal with a paintbrush emblem, resting on a clean, white artist's desk next to a cup of colorful markers. Crisp, bright lighting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic animation of a quiz interface where correct answers burst into colorful paint splatters, celebrating the student's knowledge.",
      "questions": [
        {
          "id": "arts-301-l12-q1",
          "text": "If an artist wants to create a feeling of calm and stability, which composition system should they use?",
          "skillId": "arts-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Symmetrical Balance"
            },
            {
              "id": "b",
              "text": "Extreme Asymmetry"
            },
            {
              "id": "c",
              "text": "Random placement"
            },
            {
              "id": "d",
              "text": "Only drawing on the bottom edge"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-301-l12-q2",
          "text": "During a critique, someone says, 'The colors are muddy.' What is the best iterative step to take?",
          "skillId": "arts-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Review your color mixing and try adding brighter, cleaner highlights in the next draft."
            },
            {
              "id": "b",
              "text": "Paint the entire canvas black."
            },
            {
              "id": "c",
              "text": "Tell them they don't understand art."
            },
            {
              "id": "d",
              "text": "Leave it exactly as it is."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-301-l12-q3",
          "text": "Which of the following is a sign of a well-curated portfolio?",
          "skillId": "arts-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "It contains a small number of highly polished pieces that share a cohesive theme."
            },
            {
              "id": "b",
              "text": "It contains 100 unfinished sketches."
            },
            {
              "id": "c",
              "text": "It has no clear order or structure."
            },
            {
              "id": "d",
              "text": "It only contains art made in the last 24 hours."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-301-l12-q4",
          "text": "Why is the 'Fresh Eyes' technique effective?",
          "skillId": "arts-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It resets your brain so you can spot anatomical or compositional errors you became blind to."
            },
            {
              "id": "b",
              "text": "It makes the paint dry faster."
            },
            {
              "id": "c",
              "text": "It changes the colors of the painting magically."
            },
            {
              "id": "d",
              "text": "It is only used for photography."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "arts-301-l12-ia1",
          "type": "matching_pairs",
          "title": "Applied Knowledge Match",
          "description": "Match the scenario to the correct art term.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the scenario on the left.",
            "Match it to the correct term on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Placing a tree off-center to make the landscape interesting."
              },
              {
                "id": "l2",
                "label": "Redrawing a hand 3 times until it looks right."
              },
              {
                "id": "l3",
                "label": "Picking your 5 best dragon drawings for a folder."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Rule of Thirds"
              },
              {
                "id": "r2",
                "label": "Iterative Revision"
              },
              {
                "id": "r3",
                "label": "Curation"
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
          "id": "arts-301-l12-a1",
          "type": "mnemonic",
          "title": "Test Tip",
          "content": "Read carefully: Composition is arrangement, Iteration is fixing, Curation is selecting."
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-301-l12.png"
    },
    {
      "id": "arts-301-l13",
      "title": "Arts Scenario Lab",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A dramatic, cinematic illustration of a young artist standing before a massive blank canvas, holding a glowing paintbrush like a sword. Epic, inspiring lighting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A documentary-style video following a student as they design a poster for a school play. It shows them sketching, getting feedback from a teacher, revising, and finally hanging the printed poster.",
      "chunks": [
        {
          "id": "arts-301-l13-c1",
          "title": "The Real-World Challenge",
          "content": "Welcome to the Scenario Lab! Today, imagine you have been hired to design a poster for a school play. This isn't just a drawing; it's a project that requires composition, narrative intent, and revision. How do you start? You don't just start painting—you plan!"
        },
        {
          "id": "arts-301-l13-c2",
          "title": "Planning the Poster",
          "content": "First, what is the Narrative Intent? Is the play a comedy or a spooky mystery? If it's spooky, you might use dark purples and asymmetrical balance to make it feel unsettling. Next, use the Rule of Thirds to place the title and the main character so the poster is easy to read."
        },
        {
          "id": "arts-301-l13-c3",
          "title": "The Feedback Loop",
          "content": "You finish your first draft and show the director. They say, 'The character looks great, but I can't read the title.' This is constructive critique! Instead of getting upset, you use Iterative Revision. You go back, make the title bigger, and add a bright outline to make it pop."
        },
        {
          "id": "arts-301-l13-c4",
          "title": "Final Curation",
          "content": "Finally, you have three different color versions of the poster. You must Curate. You look at all three side-by-side and choose the one that best fits the spooky theme. By combining all your skills, you've created a professional, successful piece of art!"
        }
      ],
      "flashcards": [
        {
          "id": "arts-301-l13-f1",
          "front": "Scenario Planning",
          "back": "Breaking a large art project into smaller steps: Intent, Composition, Draft."
        },
        {
          "id": "arts-301-l13-f2",
          "front": "Feedback Loop",
          "back": "The cycle of creating, getting critique, and revising."
        },
        {
          "id": "arts-301-l13-f3",
          "front": "Readability",
          "back": "Ensuring the main subject or text is clear and easy to understand."
        },
        {
          "id": "arts-301-l13-f4",
          "front": "Applied Mastery",
          "back": "Using all your art skills together to solve a real-world creative problem."
        }
      ],
      "learningAids": [
        {
          "id": "arts-301-l13-a1",
          "type": "image",
          "title": "Project Roadmap",
          "content": "A visual map showing the steps from Client Brief -> Sketch -> Critique -> Final Poster."
        },
        {
          "id": "arts-301-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Imagine you are designing a book cover. Write down your Narrative Intent and Composition plan."
        }
      ]
    },
    {
      "id": "arts-301-l14",
      "title": "Arts Coaching Clinic",
      "type": "interactive",
      "duration": 13,
      "lessonImagePrompt": "Imagen 4 prompt: A cozy, inviting art teacher's desk with a warm lamp, a cup of tea, and a sketchbook open to a page showing common drawing mistakes being corrected with red ink. Comforting, educational vibe.",
      "conceptVideoPrompt": "Veo 3.1 prompt: An animated sequence showing a frustrated artist crumpling paper. A friendly animated mentor appears, un-crumples the paper, and points out a simple fix, turning frustration into a smile.",
      "metadata": {
        "prompts": [
          "What is a mistake you make often in your art?",
          "How do you usually fix a drawing that isn't working?",
          "What is one new technique you want to try next time?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "arts-301-l14-ia1",
          "type": "matching_pairs",
          "title": "Troubleshooting Art Blocks",
          "description": "Match the common artistic problem to the best coaching advice.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "My drawing looks stiff and boring."
              },
              {
                "id": "l2",
                "label": "I get overwhelmed by details too early."
              },
              {
                "id": "l3",
                "label": "I hate everything I draw today."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Try using the Rule of Thirds or Asymmetrical Balance."
              },
              {
                "id": "r2",
                "label": "Start with a loose Thumbnail Sketch first."
              },
              {
                "id": "r3",
                "label": "Use the 'Fresh Eyes' technique and take a break!"
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
          "id": "arts-301-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose the problem, Correct with a technique, Try again."
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-301-l14.png"
    },
    {
      "id": "arts-301-l15",
      "title": "Creative Arts III Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A dynamic, high-energy illustration of a glowing finish line ribbon being broken by a flying paintbrush, leaving a trail of rainbow colors. Triumphant, exciting lighting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A rapid-fire, exciting montage of all the art concepts learned in the module, ending with a massive, colorful fireworks display made of paint splatters.",
      "questions": [
        {
          "id": "arts-301-l15-q1",
          "text": "Which composition technique involves placing the subject off-center on intersecting grid lines?",
          "skillId": "arts-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Rule of Thirds"
            },
            {
              "id": "b",
              "text": "Symmetrical Balance"
            },
            {
              "id": "c",
              "text": "Color Blocking"
            },
            {
              "id": "d",
              "text": "Thumbnail Sketching"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-301-l15-q2",
          "text": "What is the best way to handle constructive critique?",
          "skillId": "arts-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Listen openly, evaluate the feedback, and use it to improve your next draft."
            },
            {
              "id": "b",
              "text": "Ignore it completely because your art is already perfect."
            },
            {
              "id": "c",
              "text": "Get angry and stop painting."
            },
            {
              "id": "d",
              "text": "Change your entire art style immediately."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-301-l15-q3",
          "text": "When curating a portfolio, what is the most impactful way to order your pieces?",
          "skillId": "arts-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Best piece first, second-best piece last."
            },
            {
              "id": "b",
              "text": "Smallest piece first, largest piece last."
            },
            {
              "id": "c",
              "text": "Oldest piece first, newest piece last."
            },
            {
              "id": "d",
              "text": "Worst piece first, best piece last."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "arts-301-l15-q4",
          "text": "What does 'Narrative Intent' mean in visual design?",
          "skillId": "arts-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "The specific story, mood, or message the artist wants to communicate."
            },
            {
              "id": "b",
              "text": "The price the artist wants to sell the painting for."
            },
            {
              "id": "c",
              "text": "The brand of paint used."
            },
            {
              "id": "d",
              "text": "The amount of time it took to finish."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "arts-301-l15-ia1",
          "type": "matching_pairs",
          "title": "Final Sprint Match",
          "description": "Match the core term to its final definition to prove your mastery!",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the term on the left.",
            "Match it to the correct definition on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Iteration"
              },
              {
                "id": "l2",
                "label": "Curation"
              },
              {
                "id": "l3",
                "label": "Composition"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Revising and improving drafts"
              },
              {
                "id": "r2",
                "label": "Selecting and organizing best works"
              },
              {
                "id": "r3",
                "label": "Arranging visual elements on a canvas"
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
          "id": "arts-301-l15-a1",
          "type": "mnemonic",
          "title": "Final Tip",
          "content": "Trust your eye, accept feedback, and always put your best work forward!"
        }
      ]
    }
  ]
};
