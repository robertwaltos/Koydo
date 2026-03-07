import type { LearningModule } from "@/lib/modules/types";

export const pre_k_arts_101_Module: LearningModule = {
  "id": "pre-k-arts-101",
  "title": "Pre-K Creative Arts Studio",
  "description": "A fun journey into colors, shapes, lines, textures, and music! We'll mix paint, draw pictures, feel different things, dance to rhythms, and see amazing art, all while making our own wonderful creations.",
  "subject": "Arts",
  "tags": [
    "pre-k",
    "curriculum",
    "interactive",
    "creative expression"
  ],
  "minAge": 3,
  "maxAge": 5,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Name the primary colors: red, blue, and yellow",
    "Mix primary colors to make secondary colors: orange, green, and purple",
    "Identify circles, squares, and triangles in art and the world",
    "Draw different kinds of lines and create simple patterns",
    "Describe textures like smooth, rough, and soft",
    "Clap and move to simple rhythms",
    "Look at famous art and talk about how it makes you feel",
    "Create a personal piece of art to express an idea or feeling"
  ],
  "lessons": [
    {
      "id": "pre-k-arts-101-l01",
      "title": "Meet the Primary Colors",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Name the three primary colors: red, blue, and yellow",
        "Find primary colors in everyday objects",
        "Understand that primary colors are the 'parent' colors"
      ],
      "chunks": [
        {
          "id": "pre-k-arts-101-l01-c1",
          "title": "Colors Are Everywhere!",
          "content": "Look around you! Colors are everywhere. The sky is blue, grass is green, and a banana is yellow. Colors make our world beautiful and exciting. Artists use colors to make amazing paintings, and you can be an artist, too! Let's explore the wonderful world of colors together.",
          "visualPrompt": "A vibrant, animated scene showing a blue sky, green grass, a yellow sun, and a red ladybug. The colors pop as they are mentioned."
        },
        {
          "id": "pre-k-arts-101-l01-c2",
          "title": "The Three Special Colors",
          "content": "There are three very special colors called PRIMARY COLORS. They are RED, BLUE, and YELLOW. They are special because you can't make them by mixing other colors. Think of them as the 'parent' colors. All other colors are made from these three!",
          "visualPrompt": "Animation of red, blue, and yellow paint splats appearing one by one. They have friendly, smiling faces and wave."
        },
        {
          "id": "pre-k-arts-101-l01-c3",
          "title": "Let's Find Primary Colors!",
          "content": "Let's go on a color hunt! Can you find something RED? Like a juicy apple or a fire truck. Now, what about BLUE? Maybe you see the big blue sky or your blue toy car. And YELLOW? Look for the bright sun or a yummy banana. It's fun to find colors all around us!",
          "visualPrompt": "A split screen showing real-life photos: a red apple, a blue ball, and a yellow flower. A cartoon magnifying glass moves over each one."
        }
      ],
      "flashcards": [
        {
          "id": "pre-k-arts-101-l01-fc1",
          "front": "What are the three primary colors?",
          "back": "Red, Blue, and Yellow"
        },
        {
          "id": "pre-k-arts-101-l01-fc2",
          "front": "Why are primary colors special?",
          "back": "You can't make them by mixing other colors."
        },
        {
          "id": "pre-k-arts-101-l01-fc3",
          "front": "Name something red you can see.",
          "back": "Apples, strawberries, a stop sign."
        }
      ]
    },
    {
      "id": "pre-k-arts-101-l02",
      "title": "Color Mixing Magic",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Mix two primary colors to make a secondary color",
        "Name the three secondary colors: orange, green, and purple",
        "Guess what color two primaries will make"
      ],
      "chunks": [
        {
          "id": "pre-k-arts-101-l02-c1",
          "title": "Making New Colors!",
          "content": "When you mix two primary colors, something magical happens! You make a brand-new color called a SECONDARY COLOR. The three secondary colors are ORANGE, GREEN, and PURPLE. It's like a magic trick for artists!",
          "visualPrompt": "An animation of a magician's hat. A red and a yellow ball go in, and an orange ball pops out with a sparkle."
        },
        {
          "id": "pre-k-arts-101-l02-c2",
          "title": "The Color Recipes",
          "content": "Let's learn the secret color recipes! Mixing RED and YELLOW makes cheerful ORANGE. Mixing YELLOW and BLUE makes lovely GREEN, like the leaves on a tree. And mixing BLUE and RED makes pretty PURPLE, like yummy grapes. Let's say them together!",
          "visualPrompt": "Simple animation showing two paint blobs (e.g., red and yellow) swirling together on a palette to form a new color (orange)."
        },
        {
          "id": "pre-k-arts-101-l02-c3",
          "title": "A World of Colors",
          "content": "Now you know SIX wonderful colors! The three primary colors and the three secondary colors. That's almost a whole rainbow! With these colors, you can paint anything you can imagine. A green dinosaur, a purple butterfly, or a big orange sun!",
          "visualPrompt": "A simple rainbow appears on screen, highlighting red, orange, yellow, green, blue, and purple as they are mentioned."
        }
      ],
      "flashcards": [
        {
          "id": "pre-k-arts-101-l02-fc1",
          "front": "Red + Yellow = ?",
          "back": "Orange"
        },
        {
          "id": "pre-k-arts-101-l02-fc2",
          "front": "Blue + Yellow = ?",
          "back": "Green"
        },
        {
          "id": "pre-k-arts-101-l02-fc3",
          "front": "Red + Blue = ?",
          "back": "Purple"
        }
      ]
    },
    {
      "id": "pre-k-arts-101-l03",
      "title": "Color Mixing Lab",
      "type": "interactive",
      "duration": 10,
      "objectives": [
        "Practice matching primary color pairs to the secondary color they create",
        "Sort objects by primary vs. secondary color"
      ],
      "interactiveActivities": [
        {
          "id": "pre-k-arts-101-l03-ia1",
          "type": "matching_pairs",
          "title": "Color Mixing Match",
          "description": "Drag the right color to finish the color recipe.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "pairs": [
              {
                "id": "p1",
                "left": "Red + Yellow",
                "right": "Orange"
              },
              {
                "id": "p2",
                "left": "Blue + Yellow",
                "right": "Green"
              },
              {
                "id": "p3",
                "left": "Red + Blue",
                "right": "Purple"
              }
            ]
          }
        },
        {
          "id": "pre-k-arts-101-l03-ia2",
          "type": "sorting_buckets",
          "title": "Primary or Secondary?",
          "description": "Drag each color into the 'Primary Colors' bucket or the 'Secondary Colors' bucket.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "b1",
                "label": "Primary Colors"
              },
              {
                "id": "b2",
                "label": "Secondary Colors"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Red",
                "correctBucketId": "b1"
              },
              {
                "id": "i2",
                "label": "Orange",
                "correctBucketId": "b2"
              },
              {
                "id": "i3",
                "label": "Blue",
                "correctBucketId": "b1"
              },
              {
                "id": "i4",
                "label": "Green",
                "correctBucketId": "b2"
              },
              {
                "id": "i5",
                "label": "Yellow",
                "correctBucketId": "b1"
              },
              {
                "id": "i6",
                "label": "Purple",
                "correctBucketId": "b2"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "pre-k-arts-101-l04",
      "title": "Shapes in Art",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Identify circles, squares, and triangles in art",
        "Find shapes in everyday objects",
        "Use shapes to draw simple pictures"
      ],
      "chunks": [
        {
          "id": "pre-k-arts-101-l04-c1",
          "title": "The World is Full of Shapes!",
          "content": "Shapes are everywhere! Let's learn about three special shapes. A CIRCLE is round, like a ball or the sun. A SQUARE has four sides that are all the same, like a window or a cracker. And a TRIANGLE has three sides, like a slice of pizza or the roof of a house. Let's look for shapes!",
          "visualPrompt": "A cartoon sun (circle), a window (square), and a slice of pizza (triangle) are highlighted in a simple scene. The shape outline glows as it's named."
        },
        {
          "id": "pre-k-arts-101-l04-c2",
          "title": "Shapes in Nature and Buildings",
          "content": "Let's be shape detectives! Look at the wheels on a bus—they are circles that go round and round. The front of a building might be a big square. And look at that pine tree—it looks like a big triangle! Artists use these shapes to draw everything they see.",
          "visualPrompt": "A simple animation of a bus with glowing circle wheels, a building with a glowing square front, and a pine tree with a glowing triangle shape."
        },
        {
          "id": "pre-k-arts-101-l04-c3",
          "title": "Let's Draw with Shapes!",
          "content": "Did you know you can draw almost anything with shapes? Let's draw a house! Use a big square for the house and a triangle on top for the roof. How about a car? Use a rectangle for the body and two circles for the wheels. Grab a crayon and try it!",
          "visualPrompt": "A step-by-step animation showing a square and a triangle coming together to form a house. Then, a rectangle and two circles form a car."
        }
      ],
      "flashcards": [
        {
          "id": "pre-k-arts-101-l04-fc1",
          "front": "How many sides does a triangle have?",
          "back": "Three sides!"
        },
        {
          "id": "pre-k-arts-101-l04-fc2",
          "front": "What shape is perfectly round?",
          "back": "A circle."
        },
        {
          "id": "pre-k-arts-101-l04-fc3",
          "front": "What shapes can you use to draw a house?",
          "back": "A square for the body and a triangle for the roof."
        }
      ]
    },
    {
      "id": "pre-k-arts-101-l05",
      "title": "Colors & Shapes Checkpoint",
      "type": "quiz",
      "duration": 8,
      "questions": [
        {
          "id": "pre-k-arts-101-l05-q1",
          "text": "Which color do you get when you mix red and yellow?",
          "options": [
            {
              "id": "a",
              "text": "Orange"
            },
            {
              "id": "b",
              "text": "Green"
            },
            {
              "id": "c",
              "text": "Purple"
            }
          ],
          "correctOptionId": "a",
          "explanation": "That's right! Red and yellow mix together to make orange."
        },
        {
          "id": "pre-k-arts-101-l05-q2",
          "text": "Which of these is a primary color?",
          "options": [
            {
              "id": "a",
              "text": "Green"
            },
            {
              "id": "b",
              "text": "Orange"
            },
            {
              "id": "c",
              "text": "Blue"
            }
          ],
          "correctOptionId": "c",
          "explanation": "You got it! Blue is a primary color, along with red and yellow."
        },
        {
          "id": "pre-k-arts-101-l05-q3",
          "text": "How many sides does a square have?",
          "options": [
            {
              "id": "a",
              "text": "3"
            },
            {
              "id": "b",
              "text": "4"
            },
            {
              "id": "c",
              "text": "5"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Yes! A square has 4 sides that are all the same length."
        },
        {
          "id": "pre-k-arts-101-l05-q4",
          "text": "What color do blue and yellow make?",
          "options": [
            {
              "id": "a",
              "text": "Orange"
            },
            {
              "id": "b",
              "text": "Green"
            },
            {
              "id": "c",
              "text": "Purple"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Great job! Blue and yellow make green, like the grass outside."
        }
      ]
    },
    {
      "id": "pre-k-arts-101-l06",
      "title": "Lines & Patterns",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Identify different types of lines: straight, curved, zigzag",
        "Recognize and continue a simple pattern",
        "Draw different types of lines"
      ],
      "chunks": [
        {
          "id": "pre-k-arts-101-l06-c1",
          "title": "Different Kinds of Lines",
          "content": "Artists love to use lines! A STRAIGHT line is like a ruler. A CURVED line is like a rainbow. A ZIGZAG line goes up and down like a mountain. And a WAVY line wiggles like a snake. Can you draw these lines in the air with your finger?",
          "visualPrompt": "An animated pencil draws a straight line, a curved line, a zigzag line, and a wavy line. Each line type is labeled as it is drawn."
        },
        {
          "id": "pre-k-arts-101-l06-c2",
          "title": "What is a Pattern?",
          "content": "A pattern is something that repeats over and over again. Like on a zebra: stripe, no stripe, stripe, no stripe. Or a color pattern like red, blue, red, blue. What comes next? Red! Patterns are fun to find and make.",
          "visualPrompt": "An animation shows a sequence of a red block and a blue block. Another red block appears, and a question mark appears next to it, which then turns into a blue block."
        },
        {
          "id": "pre-k-arts-101-l06-c3",
          "title": "Let's Make a Pattern!",
          "content": "You can make patterns with anything! Let's try a line pattern: straight line, wavy line, straight line, wavy line. You can also make patterns with stickers or blocks. Try making your own pattern with your favorite colors!",
          "visualPrompt": "A child's hand is shown drawing a pattern of a straight line then a wavy line, repeating across the screen."
        }
      ],
      "flashcards": [
        {
          "id": "pre-k-arts-101-l06-fc1",
          "front": "What line looks like a lightning bolt?",
          "back": "A zigzag line."
        },
        {
          "id": "pre-k-arts-101-l06-fc2",
          "front": "What is a pattern?",
          "back": "Something that repeats over and over."
        },
        {
          "id": "pre-k-arts-101-l06-fc3",
          "front": "What comes next? Circle, Square, Circle, ___",
          "back": "Square!"
        }
      ]
    },
    {
      "id": "pre-k-arts-101-l07",
      "title": "Feeling Textures",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Understand what texture is",
        "Describe textures: smooth, rough, soft, bumpy",
        "Learn about collage as a way to use texture in art"
      ],
      "chunks": [
        {
          "id": "pre-k-arts-101-l07-c1",
          "title": "What is Texture?",
          "content": "Texture is how something feels when you touch it. A glass window feels SMOOTH. The bark on a tree feels ROUGH. Your favorite teddy bear feels SOFT. And a bumpy road feels BUMPY! Our hands can tell us so much about the world.",
          "visualPrompt": "Close-up animation of a hand touching different surfaces: a smooth window, rough tree bark, a soft teddy bear, and a bumpy lego block."
        },
        {
          "id": "pre-k-arts-101-l07-c2",
          "title": "Let's Find Textures!",
          "content": "Let's go on a texture hunt right where you are! Can you touch your shirt? Is it soft? Find a book. Is the cover smooth? Artists think about texture to make their art more interesting. They can even draw things to look rough or smooth.",
          "visualPrompt": "A cartoon character is shown touching its shirt, then a book, with animated sparkles or lines to indicate the texture (soft, smooth)."
        },
        {
          "id": "pre-k-arts-101-l07-c3",
          "title": "Making Art with Texture",
          "content": "A collage is a special kind of art where you glue different things onto paper. You can use soft cotton balls, rough sandpaper, and smooth pieces of paper. When you mix all these textures, you create a really cool piece of art that's fun to look at and to feel!",
          "visualPrompt": "An animated collage being created. A cotton ball, a piece of sandpaper, and a shiny piece of paper are glued onto a background, forming a simple picture."
        }
      ],
      "flashcards": [
        {
          "id": "pre-k-arts-101-l07-fc1",
          "front": "What is texture?",
          "back": "How something feels when you touch it."
        },
        {
          "id": "pre-k-arts-101-l07-fc2",
          "front": "What is a collage?",
          "back": "Art made by gluing different things together."
        },
        {
          "id": "pre-k-arts-101-l07-fc3",
          "front": "How does a teddy bear feel?",
          "back": "Soft and fuzzy."
        }
      ]
    },
    {
      "id": "pre-k-arts-101-l08",
      "title": "Music & Rhythm",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Understand that rhythm is a pattern in sound",
        "Clap along to a steady beat",
        "Identify loud vs. soft and fast vs. slow sounds"
      ],
      "chunks": [
        {
          "id": "pre-k-arts-101-l08-c1",
          "title": "What Is Rhythm?",
          "content": "Rhythm is the beat in music! It's a pattern of sounds. Your heart has a rhythm: thump-thump, thump-thump. When we clap our hands to a song, we are following the rhythm. Rhythm is what makes you want to dance!",
          "visualPrompt": "An animated heart beating to a steady rhythm. Then, cartoon hands clap in time with the beat."
        },
        {
          "id": "pre-k-arts-101-l08-c2",
          "title": "Loud & Soft, Fast & Slow",
          "content": "Music can be LOUD, like a big drum, or SOFT, like a quiet whisper. It can be FAST, like a bunny hopping, or SLOW, like a turtle walking. Let's try it! Clap your hands fast and loud! Now, tap your fingers slow and soft.",
          "visualPrompt": "A cartoon elephant stomps (loud/slow) and a mouse scurries (soft/fast). The words LOUD, SOFT, FAST, SLOW appear on screen."
        },
        {
          "id": "pre-k-arts-101-l08-c3",
          "title": "Make Your Own Music",
          "content": "You can be a musician right now! You don't need special instruments. You can clap your hands, stomp your feet, snap your fingers, or tap on a tabletop. Let's try making a rhythm together: clap, clap, stomp! Again! Clap, clap, stomp!",
          "visualPrompt": "A group of diverse cartoon kids are shown clapping, stomping, and snapping, creating a visual rhythm with musical notes floating around them."
        }
      ],
      "flashcards": [
        {
          "id": "pre-k-arts-101-l08-fc1",
          "front": "What is rhythm?",
          "back": "A pattern of sounds, like the beat in music."
        },
        {
          "id": "pre-k-arts-101-l08-fc2",
          "front": "Can you make music without instruments?",
          "back": "Yes! You can clap, stomp, and snap!"
        }
      ]
    },
    {
      "id": "pre-k-arts-101-l09",
      "title": "Art Elements Activity",
      "type": "interactive",
      "duration": 10,
      "objectives": [
        "Sort objects by their texture",
        "Match music words to their meanings"
      ],
      "interactiveActivities": [
        {
          "id": "pre-k-arts-101-l09-ia1",
          "type": "sorting_buckets",
          "title": "Texture Sort",
          "description": "Drag each object into the 'Smooth' bucket or the 'Rough' bucket.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "b1",
                "label": "Smooth"
              },
              {
                "id": "b2",
                "label": "Rough"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Glass window",
                "correctBucketId": "b1"
              },
              {
                "id": "i2",
                "label": "Sandpaper",
                "correctBucketId": "b2"
              },
              {
                "id": "i3",
                "label": "Silk ribbon",
                "correctBucketId": "b1"
              },
              {
                "id": "i4",
                "label": "Tree bark",
                "correctBucketId": "b2"
              },
              {
                "id": "i5",
                "label": "A shiny apple",
                "correctBucketId": "b1"
              },
              {
                "id": "i6",
                "label": "A rock",
                "correctBucketId": "b2"
              }
            ]
          }
        },
        {
          "id": "pre-k-arts-101-l09-ia2",
          "type": "matching_pairs",
          "title": "Music Word Match",
          "description": "Match the music word to what it means.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "pairs": [
              {
                "id": "p1",
                "left": "Rhythm",
                "right": "A pattern of sounds"
              },
              {
                "id": "p2",
                "left": "Loud",
                "right": "A big, strong sound"
              },
              {
                "id": "p3",
                "left": "Soft",
                "right": "A quiet, gentle sound"
              },
              {
                "id": "p4",
                "left": "Fast",
                "right": "A quick beat"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "pre-k-arts-101-l10",
      "title": "Famous Art & Feelings",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Look at a famous painting",
        "Talk about how art can show feelings like happy, calm, or excited",
        "Understand that everyone can see art differently"
      ],
      "chunks": [
        {
          "id": "pre-k-arts-101-l10-c1",
          "title": "Looking at Famous Paintings",
          "content": "Some paintings are so special that lots of people all over the world know about them. These are called famous paintings, and they were made by people called artists. Looking at art is like reading a story with your eyes!",
          "visualPrompt": "An animation of a cartoon art gallery with several famous (but simplified) paintings on the wall. A friendly guide character gestures to one."
        },
        {
          "id": "pre-k-arts-101-l10-c2",
          "title": "Starry Night",
          "content": "Let's look at this famous painting. It's called 'The Starry Night.' What do you see? There are bright, glowing stars and a big moon. Look at the swirly, wavy lines in the sky! The artist used dark blues and bright yellows to make the night feel alive.",
          "visualPrompt": "A simplified, animated version of Van Gogh's 'The Starry Night' is shown. The stars twinkle and the swirls in the sky move gently."
        },
        {
          "id": "pre-k-arts-101-l10-c3",
          "title": "How Does Art Make You Feel?",
          "content": "How does this painting make you feel? Does it make you feel sleepy and calm? Or maybe excited and full of wonder? There is no wrong answer! Art can make us feel all sorts of different feelings. That's part of the magic of art.",
          "visualPrompt": "Three cartoon thought bubbles appear next to the painting, one with a sleeping face (calm), one with a wide-eyed face (wonder), and one with a smiling face (happy)."
        }
      ],
      "flashcards": [
        {
          "id": "pre-k-arts-101-l10-fc1",
          "front": "Who makes art?",
          "back": "Artists!"
        },
        {
          "id": "pre-k-arts-101-l10-fc2",
          "front": "What did we see in 'The Starry Night'?",
          "back": "Swirly lines, bright stars, and a big moon."
        },
        {
          "id": "pre-k-arts-101-l10-fc3",
          "front": "Can art show feelings?",
          "back": "Yes! Art can make us feel happy, sleepy, or excited."
        }
      ]
    },
    {
      "id": "pre-k-arts-101-l11",
      "title": "My Masterpiece!",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Use colors, shapes, and lines to create a personal artwork",
        "Express a feeling or idea through art",
        "Feel proud of their own creative work"
      ],
      "interactiveActivities": [
        {
          "id": "pre-k-arts-101-l11-ia1",
          "type": "creative_project",
          "title": "Create Your Own Artwork",
          "description": "Now it's your turn to be the artist! Use everything you've learned to make your own masterpiece. Draw a picture using your favorite colors, shapes, and lines. What will you make? A sunny day? A silly monster? A picture of your family? Show us what you can create!",
          "estimatedMinutes": 12,
          "difficultyLevel": "easy",
          "data": {
            "prompts": [
              "Draw something that makes you happy.",
              "Use zigzag lines to show excitement.",
              "Mix two colors to make a new one for your picture.",
              "Add a soft or rough texture if you can!"
            ]
          }
        }
      ]
    },
    {
      "id": "pre-k-arts-101-l12",
      "title": "Creative Arts Celebration",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "pre-k-arts-101-l12-q1",
          "text": "What color do red and blue make?",
          "options": [
            {
              "id": "a",
              "text": "Orange"
            },
            {
              "id": "b",
              "text": "Green"
            },
            {
              "id": "c",
              "text": "Purple"
            }
          ],
          "correctOptionId": "c",
          "explanation": "You got it! Red and blue mix to make purple."
        },
        {
          "id": "pre-k-arts-101-l12-q2",
          "text": "What is texture?",
          "options": [
            {
              "id": "a",
              "text": "A color"
            },
            {
              "id": "b",
              "text": "How something feels"
            },
            {
              "id": "c",
              "text": "A sound"
            }
          ],
          "correctOptionId": "b",
          "explanation": "That's right! Texture is how something feels, like soft or rough."
        },
        {
          "id": "pre-k-arts-101-l12-q3",
          "text": "What is a pattern of sounds in music called?",
          "options": [
            {
              "id": "a",
              "text": "A shape"
            },
            {
              "id": "b",
              "text": "A rhythm"
            },
            {
              "id": "c",
              "text": "A color"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Yes! Rhythm is the beat in music that makes you want to dance."
        },
        {
          "id": "pre-k-arts-101-l12-q4",
          "text": "Which line looks like a lightning bolt?",
          "options": [
            {
              "id": "a",
              "text": "Wavy"
            },
            {
              "id": "b",
              "text": "Curved"
            },
            {
              "id": "c",
              "text": "Zigzag"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Great job! A zigzag line goes sharply up and down, like lightning."
        },
        {
          "id": "pre-k-arts-101-l12-q5",
          "text": "What can art show besides pictures of things?",
          "options": [
            {
              "id": "a",
              "text": "Feelings"
            },
            {
              "id": "b",
              "text": "Numbers"
            },
            {
              "id": "c",
              "text": "Letters"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Exactly! Art can show feelings like happiness, sadness, or excitement."
        },
        {
          "id": "pre-k-arts-101-l12-q6",
          "text": "Which of these is NOT a primary color?",
          "options": [
            {
              "id": "a",
              "text": "Red"
            },
            {
              "id": "b",
              "text": "Green"
            },
            {
              "id": "c",
              "text": "Yellow"
            }
          ],
          "correctOptionId": "b",
          "explanation": "You're a color expert! Green is a secondary color. You make it by mixing blue and yellow."
        }
      ]
    }
  ]
};
