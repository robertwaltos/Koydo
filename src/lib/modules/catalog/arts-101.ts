import type { LearningModule } from "@/lib/modules/types";

export const arts_101_Module: LearningModule = {
  "id": "arts-101",
  "title": "Creative Arts Studio",
  "description": "Explore the elements of art, color theory, drawing techniques, famous artists, sculpture, and nature art through hands-on projects and real-world examples.",
  "subject": "Arts",
  "tags": [
    "arts",
    "creativity",
    "interactive",
    "curriculum"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Identify the seven elements of art: line, shape, color, texture, space, form, and value",
    "Understand the color wheel including primary, secondary, complementary, and warm/cool colors",
    "Apply drawing techniques such as contour, shading, and proportion",
    "Recognize famous artists and their signature styles",
    "Create 3D art using clay, paper mâché, and assemblage",
    "Discover patterns, symmetry, and fractals in nature art"
  ],
  "lessons": [
    {
      "id": "arts-101-l01",
      "title": "Elements of Art",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A vibrant, stylized 3D illustration of an artist's palette surrounded by floating geometric and organic shapes, colorful lines, and textured spheres, bright and inspiring studio lighting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic 3D animation showing a single pencil line drawing itself across a white canvas, transforming into a geometric shape, filling with bright primary colors, and popping into a 3D textured sphere.",
      "chunks": [
        {
          "id": "arts-101-l01-c1",
          "title": "Line and Shape",
          "content": "Lines are the most basic and important building blocks of art. Imagine a line as a mark made by a point that moves across a surface, like a pencil gliding on paper. Lines can be straight, curved, zigzag, thick, or thin, each giving a different feeling to the artwork. When lines connect, they form shapes. There are two main types of shapes: geometric and organic. Geometric shapes, like circles and squares, are precise and measurable. Organic shapes, like clouds or leaves, are freeform and irregular, just like things we see in nature. Mastering lines and shapes is the first step to expressing your creativity!"
        },
        {
          "id": "arts-101-l01-c2",
          "title": "Color, Value, and Texture",
          "content": "Color brings art to life! It has three main properties: hue (the color's name, like red or blue), value (how light or dark it is), and intensity (how bright or dull it is). Another amazing element is texture, which is how a surface feels or looks like it would feel. Textures can be smooth, rough, bumpy, or soft. Artists create the illusion of texture using dots, lines, or shading. The famous artist Vincent van Gogh used thick paint strokes to create a texture you can almost feel just by looking at it!"
        },
        {
          "id": "arts-101-l01-c3",
          "title": "Space and Form",
          "content": "Space helps us understand how objects relate to each other. Positive space is the main subject of the artwork, while negative space is the empty area surrounding it. Both are crucial for a balanced picture! Form refers to three-dimensional shapes. While a circle is a flat shape, a sphere is a 3D form. Artists use techniques like shading and perspective to create the illusion of form and depth on a flat piece of paper, making their drawings look incredibly realistic."
        }
      ],
      "flashcards": [
        {
          "id": "arts-101-l01-f1",
          "front": "A mark made by a moving point",
          "back": "Line"
        },
        {
          "id": "arts-101-l01-f2",
          "front": "An area enclosed when lines connect",
          "back": "Shape"
        },
        {
          "id": "arts-101-l01-f3",
          "front": "How a surface feels or looks like it feels",
          "back": "Texture"
        },
        {
          "id": "arts-101-l01-f4",
          "front": "A 3D shape like a sphere or cube",
          "back": "Form"
        }
      ],
      "questions": [
        {
          "id": "arts-101-l01-q1",
          "text": "Which element of art describes how a surface feels?",
          "options": [
            {
              "id": "a",
              "text": "Texture"
            },
            {
              "id": "b",
              "text": "Line"
            },
            {
              "id": "c",
              "text": "Shape"
            },
            {
              "id": "d",
              "text": "Space"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Texture is how a surface feels—rough, smooth, or bumpy!"
        },
        {
          "id": "arts-101-l01-q2",
          "text": "What is the empty area around a subject called?",
          "options": [
            {
              "id": "a",
              "text": "Negative space"
            },
            {
              "id": "b",
              "text": "Positive space"
            },
            {
              "id": "c",
              "text": "Texture"
            },
            {
              "id": "d",
              "text": "Form"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Negative space is the empty area around objects, while positive space is the object itself."
        },
        {
          "id": "arts-101-l01-q3",
          "text": "Geometric shapes like circles and squares have:",
          "options": [
            {
              "id": "a",
              "text": "Exact measurements"
            },
            {
              "id": "b",
              "text": "Irregular edges"
            },
            {
              "id": "c",
              "text": "No lines"
            },
            {
              "id": "d",
              "text": "Rough texture"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Geometric shapes are precise and measurable, unlike organic shapes which are freeform."
        }
      ],
      "interactiveActivities": [
        {
          "id": "arts-101-l01-act1",
          "type": "drawing_canvas",
          "title": "Elements Scavenger Hunt",
          "description": "Look around your room and find one example each of line, shape, color, texture, space, and form. Draw or photograph each one and label it."
        }
      ],
      "learningAids": [
        {
          "id": "arts-101-l01-a1",
          "type": "image",
          "title": "The 7 Elements of Art",
          "content": "A visual chart displaying Line, Shape, Color, Value, Form, Texture, and Space with simple visual examples for each."
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-101-l01.png"
    },
    {
      "id": "arts-101-l02",
      "title": "The Color Wheel",
      "type": "interactive",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing, magical color wheel floating in a dark art studio, with bright neon paint splashing between primary and secondary colors, cinematic lighting, highly detailed.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A mesmerizing top-down view of liquid paint mixing. Red and yellow merge to form bright orange, then blue and yellow swirl into vibrant green, creating a perfect color wheel.",
      "chunks": [
        {
          "id": "arts-101-l02-c1",
          "title": "Primary and Secondary Colors",
          "content": "Primary colors are the building blocks of all other colors: red, yellow, and blue. They are special because they cannot be made by mixing any other colors together! When we mix two primary colors, we create secondary colors. Red and yellow make a cheerful orange. Yellow and blue make a lovely green. Blue and red create a rich purple. The first color wheel was invented by Sir Isaac Newton in 1666 to show how these colors relate to one another."
        },
        {
          "id": "arts-101-l02-c2",
          "title": "Warm and Cool Colors",
          "content": "Colors can be divided into warm and cool categories. Warm colors include red, orange, and yellow. They remind us of fire and sunlight, and they tend to stand out or 'come forward' in a painting. Cool colors include blue, green, and purple. They remind us of water and ice, and they often seem to recede or 'move back' in space. Artists use warm and cool colors to create depth and set different moods in their artwork."
        },
        {
          "id": "arts-101-l02-c3",
          "title": "Complementary Colors",
          "content": "Complementary colors are pairs that sit directly across from each other on the color wheel. Red is opposite green, blue is opposite orange, and yellow is opposite purple. When placed next to each other, they create a magical contrast, making each other look incredibly bright and lively! The famous artist Claude Monet loved using complementary colors to make his paintings glow with life."
        }
      ],
      "flashcards": [
        {
          "id": "arts-101-l02-f1",
          "front": "Colors that cannot be made by mixing others",
          "back": "Primary colors (red, yellow, blue)"
        },
        {
          "id": "arts-101-l02-f2",
          "front": "Red + yellow = ?",
          "back": "Orange"
        },
        {
          "id": "arts-101-l02-f3",
          "front": "Colors opposite each other on the color wheel",
          "back": "Complementary colors"
        },
        {
          "id": "arts-101-l02-f4",
          "front": "Colors that remind us of fire and sunlight",
          "back": "Warm colors (red, orange, yellow)"
        }
      ],
      "questions": [
        {
          "id": "arts-101-l02-q1",
          "text": "What do you get when you mix red and yellow?",
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
            },
            {
              "id": "d",
              "text": "Brown"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Red + yellow = orange, which is a secondary color!"
        },
        {
          "id": "arts-101-l02-q2",
          "text": "Which pair represents complementary colors?",
          "options": [
            {
              "id": "a",
              "text": "Red and green"
            },
            {
              "id": "b",
              "text": "Red and orange"
            },
            {
              "id": "c",
              "text": "Blue and purple"
            },
            {
              "id": "d",
              "text": "Yellow and orange"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Red and green are directly opposite each other on the color wheel."
        },
        {
          "id": "arts-101-l02-q3",
          "text": "Warm colors like red and orange seem to:",
          "options": [
            {
              "id": "a",
              "text": "Come forward in a painting"
            },
            {
              "id": "b",
              "text": "Disappear completely"
            },
            {
              "id": "c",
              "text": "Turn into cool colors"
            },
            {
              "id": "d",
              "text": "Recede into the background"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Warm colors pop forward, while cool colors recede into the background."
        }
      ],
      "interactiveActivities": [
        {
          "id": "arts-101-l02-act1",
          "type": "drawing_canvas",
          "title": "Color Wheel Painting",
          "description": "Using only red, yellow, and blue paint (or digital brushes), mix and paint a full 12-color wheel. Label each slice with its color name."
        }
      ],
      "learningAids": [
        {
          "id": "arts-101-l02-a1",
          "type": "image",
          "title": "The Color Wheel Map",
          "content": "A diagram showing primary, secondary, and tertiary colors, with arrows pointing to complementary pairs."
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-101-l02.png"
    },
    {
      "id": "arts-101-l03",
      "title": "Drawing Techniques",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A close-up of an open sketchbook on a wooden desk with a beautifully shaded graphite drawing of an apple, showing hatching and cross-hatching techniques, soft natural window lighting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A time-lapse animation of a hand drawing a realistic face, starting with basic proportion lines, moving to contour outlines, and finishing with smooth sfumato shading.",
      "chunks": [
        {
          "id": "arts-101-l03-c1",
          "title": "Contour Drawing",
          "content": "Contour drawing focuses on capturing the outline and edges of an object. It's a fantastic way to train your eye to notice details! A fun variation is 'blind contour drawing,' where you look only at the object and never at your paper. It leads to surprising and expressive results. The artist Egon Schiele was famous for using bold contour lines to add character and emotion to his figure drawings."
        },
        {
          "id": "arts-101-l03-c2",
          "title": "Shading and Value",
          "content": "Shading makes flat drawings look three-dimensional by adding shadows and light. You can use 'hatching' (parallel lines), 'cross-hatching' (overlapping lines), or 'stippling' (tiny dots) to build up dark areas. Leonardo da Vinci used a famous blending technique called 'sfumato' (meaning 'smoky' in Italian) to create soft, gentle transitions between light and dark, as seen in the Mona Lisa."
        },
        {
          "id": "arts-101-l03-c3",
          "title": "Proportion",
          "content": "Proportion is how different parts of a drawing relate to each other in size. When drawing a human face, guidelines help get it right! For example, the eyes are usually positioned exactly halfway down the head. The bottom of the nose is halfway between the eyes and the chin, and the mouth is about one-third of the way down from the nose to the chin. Practicing these rules helps create realistic, lifelike portraits."
        }
      ],
      "flashcards": [
        {
          "id": "arts-101-l03-f1",
          "front": "Drawing only the outline and edges of an object",
          "back": "Contour drawing"
        },
        {
          "id": "arts-101-l03-f2",
          "front": "A shading technique using parallel lines",
          "back": "Hatching"
        },
        {
          "id": "arts-101-l03-f3",
          "front": "The size relationship between parts of a drawing",
          "back": "Proportion"
        },
        {
          "id": "arts-101-l03-f4",
          "front": "A soft, smoky shading technique used by da Vinci",
          "back": "Sfumato"
        }
      ],
      "questions": [
        {
          "id": "arts-101-l03-q1",
          "text": "What is drawing only the outline and edges of an object called?",
          "options": [
            {
              "id": "a",
              "text": "Contour drawing"
            },
            {
              "id": "b",
              "text": "Shading"
            },
            {
              "id": "c",
              "text": "Stippling"
            },
            {
              "id": "d",
              "text": "Proportion"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Contour drawing captures the outline and edges of objects."
        },
        {
          "id": "arts-101-l03-q2",
          "text": "Shading with tiny dots is called:",
          "options": [
            {
              "id": "a",
              "text": "Stippling"
            },
            {
              "id": "b",
              "text": "Hatching"
            },
            {
              "id": "c",
              "text": "Contour"
            },
            {
              "id": "d",
              "text": "Proportion"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Stippling uses many small dots clustered together to create darker values."
        },
        {
          "id": "arts-101-l03-q3",
          "text": "On the average human face, the eyes are located:",
          "options": [
            {
              "id": "a",
              "text": "Halfway down the head"
            },
            {
              "id": "b",
              "text": "At the top of the head"
            },
            {
              "id": "c",
              "text": "One-third down"
            },
            {
              "id": "d",
              "text": "Near the chin"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The eyes sit right at the midpoint of the total head height."
        }
      ],
      "interactiveActivities": [
        {
          "id": "arts-101-l03-act1",
          "type": "drawing_canvas",
          "title": "Shading Sampler",
          "description": "Draw four squares. Fill each with a different shading technique: hatching, cross-hatching, stippling, and blending. Then draw a sphere and shade it to look 3D."
        }
      ],
      "learningAids": [
        {
          "id": "arts-101-l03-a1",
          "type": "image",
          "title": "Facial Proportions Guide",
          "content": "A diagram of a human face showing the horizontal guidelines for the eyes, nose, and mouth."
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-101-l03.png"
    },
    {
      "id": "arts-101-l04",
      "title": "Art Checkpoint",
      "type": "quiz",
      "duration": 8,
      "lessonImagePrompt": "Imagen 4 prompt: A colorful gallery wall displaying various framed artworks, including a color wheel, a contour drawing, and a textured painting, warm gallery lighting, photorealistic.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced, energetic montage reviewing art concepts: a color wheel spinning, a pencil sketching a 3D cube, and a brush applying thick impasto paint.",
      "chunks": [
        {
          "id": "arts-101-l04-c1",
          "title": "Elements and Color Review",
          "content": "Let's review! The seven essential elements of art are line, shape, color, texture, space, form, and value. You learned that primary colors (red, blue, yellow) mix to create secondary colors. We also explored complementary colors—opposites on the color wheel that make each other pop when placed side by side. These are the fundamental tools every artist uses to build a masterpiece."
        },
        {
          "id": "arts-101-l04-c2",
          "title": "Drawing Techniques Review",
          "content": "We also practiced drawing techniques. Contour drawing trains your eye to follow edges. Shading techniques like hatching, cross-hatching, and stippling add depth and dimension, turning flat shapes into 3D forms. Finally, understanding proportion helps you draw realistic faces by knowing exactly where features like the eyes and nose belong."
        },
        {
          "id": "arts-101-l04-c3",
          "title": "You Are Growing as an Artist!",
          "content": "Congratulations on mastering the basics! Every painting, drawing, and sculpture in the world uses these exact same elements and techniques. As you continue to practice, you will develop your own unique style. Remember, art is about experimenting, making mistakes, and expressing yourself. Keep your imagination wide open!"
        }
      ],
      "flashcards": [
        {
          "id": "arts-101-l04-f1",
          "front": "The three primary colors",
          "back": "Red, yellow, blue"
        },
        {
          "id": "arts-101-l04-f2",
          "front": "The element that describes how light or dark a color is",
          "back": "Value"
        },
        {
          "id": "arts-101-l04-f3",
          "front": "Drawing the outline without lifting your pencil",
          "back": "Contour drawing"
        },
        {
          "id": "arts-101-l04-f4",
          "front": "Colors opposite each other on the color wheel",
          "back": "Complementary colors"
        }
      ],
      "questions": [
        {
          "id": "arts-101-l04-q1",
          "text": "Which are the three primary colors?",
          "options": [
            {
              "id": "a",
              "text": "Red, yellow, blue"
            },
            {
              "id": "b",
              "text": "Orange, green, purple"
            },
            {
              "id": "c",
              "text": "Red, green, blue"
            },
            {
              "id": "d",
              "text": "Black, white, gray"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Red, yellow, and blue are the primary colors that make up all other colors."
        },
        {
          "id": "arts-101-l04-q2",
          "text": "What shading technique uses overlapping sets of parallel lines?",
          "options": [
            {
              "id": "a",
              "text": "Cross-hatching"
            },
            {
              "id": "b",
              "text": "Stippling"
            },
            {
              "id": "c",
              "text": "Blending"
            },
            {
              "id": "d",
              "text": "Contour"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Cross-hatching layers lines in different directions to build shadows."
        },
        {
          "id": "arts-101-l04-q3",
          "text": "Negative space is:",
          "options": [
            {
              "id": "a",
              "text": "The empty area around a subject"
            },
            {
              "id": "b",
              "text": "The main subject of the art"
            },
            {
              "id": "c",
              "text": "A type of shading"
            },
            {
              "id": "d",
              "text": "A warm color"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Negative space is the empty area surrounding the main subject."
        }
      ],
      "interactiveActivities": [
        {
          "id": "arts-101-l04-act1",
          "type": "drawing_canvas",
          "title": "Mini Gallery Review",
          "description": "Collect your best drawing from each of the first three lessons. Write one sentence about which element or technique you used in each piece."
        }
      ],
      "learningAids": [
        {
          "id": "arts-101-l04-a1",
          "type": "mnemonic",
          "title": "Elements Memory Cue",
          "content": "Remember the 7 elements with: Little (Line) Shapes Can (Color) Value True (Texture) Space & Form!"
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-101-l04.png"
    },
    {
      "id": "arts-101-l05",
      "title": "Famous Artists",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: An imaginative studio space blending three art styles: a Monet-style water lily pond on the floor, a Van Gogh starry night sky on the ceiling, and a Frida Kahlo inspired tropical portrait on the easel, highly detailed.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A visual journey transitioning through famous paintings: starting with the soft, shimmering water lilies of Monet, morphing into the thick, swirling stars of Van Gogh, and ending on the vibrant, symbolic flora of Frida Kahlo.",
      "chunks": [
        {
          "id": "arts-101-l05-c1",
          "title": "Claude Monet — Impressionism",
          "content": "Claude Monet (1840–1926) was a French painter and a founder of Impressionism. This movement focused on capturing quick moments in time, especially how sunlight changes colors outdoors. Monet is famous for his 'Water Lilies' series, featuring over 250 paintings of his garden pond. He used loose, visible brushstrokes to create a shimmering, dreamlike effect, encouraging us to appreciate the fleeting beauty of nature."
        },
        {
          "id": "arts-101-l05-c2",
          "title": "Vincent van Gogh — Post-Impressionism",
          "content": "Vincent van Gogh (1853–1890) was an extraordinary artist known for his emotional use of color and a technique called 'impasto'. Impasto involves applying paint so thickly that it stands out from the canvas, creating a swirling, lively texture. In his famous 1889 painting 'The Starry Night', vibrant blues and yellows express strong feelings and movement. Though he only sold one painting in his lifetime, his work is now celebrated worldwide."
        },
        {
          "id": "arts-101-l05-c3",
          "title": "Frida Kahlo — Self-Portraits",
          "content": "Frida Kahlo (1907–1954) was a remarkable Mexican artist famous for her bold, expressive self-portraits. She used bright colors and powerful symbols—like tropical plants and animals—to share her personal feelings, pain, and strength. In paintings like 'Self-Portrait with Thorn Necklace and Hummingbird', she tells a deep story about her identity. Her work inspires people to express their true emotions through art."
        }
      ],
      "flashcards": [
        {
          "id": "arts-101-l05-f1",
          "front": "Painted 'Water Lilies' with loose brushstrokes",
          "back": "Claude Monet"
        },
        {
          "id": "arts-101-l05-f2",
          "front": "A thick paint technique using swirling brushstrokes",
          "back": "Impasto (Van Gogh)"
        },
        {
          "id": "arts-101-l05-f3",
          "front": "Mexican artist known for bold, symbolic self-portraits",
          "back": "Frida Kahlo"
        },
        {
          "id": "arts-101-l05-f4",
          "front": "A famous painting of a swirling night sky from 1889",
          "back": "The Starry Night (Van Gogh)"
        }
      ],
      "questions": [
        {
          "id": "arts-101-l05-q1",
          "text": "Which artist helped start the Impressionist movement and painted Water Lilies?",
          "options": [
            {
              "id": "a",
              "text": "Claude Monet"
            },
            {
              "id": "b",
              "text": "Vincent van Gogh"
            },
            {
              "id": "c",
              "text": "Frida Kahlo"
            },
            {
              "id": "d",
              "text": "Pablo Picasso"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Monet is considered the father of Impressionism and painted the famous Water Lilies."
        },
        {
          "id": "arts-101-l05-q2",
          "text": "What technique did Van Gogh use to create thick, textured paint?",
          "options": [
            {
              "id": "a",
              "text": "Impasto"
            },
            {
              "id": "b",
              "text": "Contour"
            },
            {
              "id": "c",
              "text": "Stippling"
            },
            {
              "id": "d",
              "text": "Blending"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Impasto means applying thick, textured paint with bold strokes."
        },
        {
          "id": "arts-101-l05-q3",
          "text": "Frida Kahlo is best known for her:",
          "options": [
            {
              "id": "a",
              "text": "Bold self-portraits"
            },
            {
              "id": "b",
              "text": "Water lily paintings"
            },
            {
              "id": "c",
              "text": "Sculpture"
            },
            {
              "id": "d",
              "text": "Architecture"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Kahlo created powerful, symbolic self-portraits to express her identity and emotions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "arts-101-l05-act1",
          "type": "drawing_canvas",
          "title": "Artist Style Study",
          "description": "Pick one famous artist from the lesson. Create a short artwork inspired by their style. If Monet, use loose brushstrokes. If Van Gogh, use thick swirls. If Kahlo, create a symbolic self-portrait."
        }
      ],
      "learningAids": [
        {
          "id": "arts-101-l05-a1",
          "type": "mnemonic",
          "title": "Artist Memory Cue",
          "content": "Monet = Moments (Impressionism), Van Gogh = Vibrant swirls (Impasto), Kahlo = Keen self-portraits."
        }
      ]
    },
    {
      "id": "arts-101-l06",
      "title": "Sculpture and 3D Art",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A messy, creative art table covered in clay pinch pots, colorful paper mâché masks, and a quirky robot made from recycled bottle caps and cardboard, bright studio lighting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A stop-motion style animation showing a lump of clay shaping itself into a bowl, followed by newspaper strips wrapping around a balloon, and finally recycled objects assembling into a toy robot.",
      "chunks": [
        {
          "id": "arts-101-l06-c1",
          "title": "Clay Sculpture",
          "content": "Clay is a wonderful, earthy material that can be shaped by pinching, rolling, or coiling. Ancient artists created beautiful clay vases and figures that we still admire today. You can make a simple 'pinch pot' by pressing your thumb into a ball of clay and pinching the sides to form a bowl. Once shaped, you can carve fun textures into it using a pencil or fork. Working with clay is a very hands-on way to express your creativity!"
        },
        {
          "id": "arts-101-l06-c2",
          "title": "Paper Mâché",
          "content": "Paper mâché is an imaginative technique that uses simple materials to build sturdy sculptures. You dip strips of newspaper into a mixture of glue and water, then layer them over a base, like a balloon or cardboard shape. When it dries, it becomes a hard shell! You can use paper mâché to make colorful masks, piñatas, or animal shapes. Once dry, it's a perfect canvas for bright paints."
        },
        {
          "id": "arts-101-l06-c3",
          "title": "Assemblage",
          "content": "Assemblage is a fascinating form of 3D art made by gathering and gluing together 'found objects'. The famous artist Pablo Picasso used this technique, combining newspaper, string, and wood in his artworks. You can create your own assemblage by collecting safe, recycled items from home—like bottle caps, cardboard tubes, and old toys. By assembling these random pieces, you can build a robot, a creature, or an abstract sculpture!"
        }
      ],
      "flashcards": [
        {
          "id": "arts-101-l06-f1",
          "front": "3D art made by pinching and shaping soft material",
          "back": "Clay sculpture"
        },
        {
          "id": "arts-101-l06-f2",
          "front": "Sculpture made from layered newspaper and glue",
          "back": "Paper mâché"
        },
        {
          "id": "arts-101-l06-f3",
          "front": "Art made by gluing found or recycled objects together",
          "back": "Assemblage"
        },
        {
          "id": "arts-101-l06-f4",
          "front": "A simple clay bowl made by pressing and squeezing",
          "back": "Pinch pot"
        }
      ],
      "questions": [
        {
          "id": "arts-101-l06-q1",
          "text": "What sculpture technique uses strips of newspaper and glue?",
          "options": [
            {
              "id": "a",
              "text": "Paper mâché"
            },
            {
              "id": "b",
              "text": "Clay pinching"
            },
            {
              "id": "c",
              "text": "Assemblage"
            },
            {
              "id": "d",
              "text": "Contour drawing"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Paper mâché uses wet newspaper strips layered over a form."
        },
        {
          "id": "arts-101-l06-q2",
          "text": "What 3D art is made by gluing recycled or found objects together?",
          "options": [
            {
              "id": "a",
              "text": "Assemblage"
            },
            {
              "id": "b",
              "text": "Paper mâché"
            },
            {
              "id": "c",
              "text": "Clay"
            },
            {
              "id": "d",
              "text": "Shading"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Assemblage is the art of assembling found objects into a new sculpture."
        },
        {
          "id": "arts-101-l06-q3",
          "text": "Pinch pots and coils are made with:",
          "options": [
            {
              "id": "a",
              "text": "Clay"
            },
            {
              "id": "b",
              "text": "Newspaper"
            },
            {
              "id": "c",
              "text": "Cardboard"
            },
            {
              "id": "d",
              "text": "Crayons"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Clay is soft and perfect for pinching and coiling into shapes."
        }
      ],
      "interactiveActivities": [
        {
          "id": "arts-101-l06-act1",
          "type": "project_builder",
          "title": "Recycled Robot Assemblage",
          "description": "Gather clean cardboard tubes, bottle caps, egg cartons, glue, tape, and markers. Build and decorate a standing robot or creature."
        }
      ],
      "learningAids": [
        {
          "id": "arts-101-l06-a1",
          "type": "image",
          "title": "3D Art Guide",
          "content": "Visual guide showing the difference between Clay (a pot), Paper Mâché (a mask), and Assemblage (a junk robot)."
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-101-l06.png"
    },
    {
      "id": "arts-101-l07",
      "title": "Art in Nature",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A beautiful outdoor nature mandala made of perfectly arranged colorful autumn leaves, smooth river stones, and bright flower petals, showing perfect symmetry and fractal patterns, photorealistic.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A cinematic macro video zooming into a green fern leaf to reveal its fractal patterns, then panning to a perfectly symmetrical butterfly resting on a vibrant flower.",
      "chunks": [
        {
          "id": "arts-101-l07-c1",
          "title": "Patterns in Nature",
          "content": "Nature is the ultimate artist, full of beautiful, repeating patterns. Leaves have intricate vein networks, and sunflowers display stunning spiral shapes. The artist Andy Goldsworthy is famous for 'land art'. He arranges natural materials like leaves, ice, and stones into temporary, beautiful patterns outdoors. By observing nature closely, we can find endless inspiration for our own artwork."
        },
        {
          "id": "arts-101-l07-c2",
          "title": "Symmetry",
          "content": "Symmetry happens when one half of something is a perfect mirror image of the other half. A classic example is a butterfly's wings or a snowflake. If you fold a perfectly symmetrical leaf in half, the edges will match exactly! The artist Georgia O'Keeffe often painted large, beautiful flowers that highlighted these symmetrical shapes. Using symmetry in your art creates a sense of balance and harmony."
        },
        {
          "id": "arts-101-l07-c3",
          "title": "Fractals and Repeating Shapes",
          "content": "Fractals are fascinating shapes that repeat themselves in smaller and smaller versions. Look at a tree: a large trunk splits into branches, which split into smaller branches, and then into tiny twigs. That repeating pattern is a fractal! You also see them in fern leaves and seashells. Drawing fractals is a fun way to see how simple repetition can create incredibly complex and beautiful designs."
        }
      ],
      "flashcards": [
        {
          "id": "arts-101-l07-f1",
          "front": "Repeating shapes that get smaller and smaller",
          "back": "Fractals"
        },
        {
          "id": "arts-101-l07-f2",
          "front": "When one side perfectly mirrors the other",
          "back": "Symmetry"
        },
        {
          "id": "arts-101-l07-f3",
          "front": "Repeating lines or shapes, like in leaves or petals",
          "back": "Patterns"
        },
        {
          "id": "arts-101-l07-f4",
          "front": "An artist who arranges leaves and stones outdoors",
          "back": "Andy Goldsworthy"
        }
      ],
      "questions": [
        {
          "id": "arts-101-l07-q1",
          "text": "When one side of a butterfly's wings matches the other, it has:",
          "options": [
            {
              "id": "a",
              "text": "Symmetry"
            },
            {
              "id": "b",
              "text": "Fractals"
            },
            {
              "id": "c",
              "text": "Shading"
            },
            {
              "id": "d",
              "text": "Contour"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Symmetry means the two halves are mirror images of each other."
        },
        {
          "id": "arts-101-l07-q2",
          "text": "Repeating smaller and smaller branches in a tree is an example of:",
          "options": [
            {
              "id": "a",
              "text": "Fractals"
            },
            {
              "id": "b",
              "text": "Symmetry"
            },
            {
              "id": "c",
              "text": "Color wheel"
            },
            {
              "id": "d",
              "text": "Proportion"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Fractals are patterns that repeat at smaller and smaller scales."
        },
        {
          "id": "arts-101-l07-q3",
          "text": "Repeating vein lines in a leaf create a:",
          "options": [
            {
              "id": "a",
              "text": "Pattern"
            },
            {
              "id": "b",
              "text": "Shading"
            },
            {
              "id": "c",
              "text": "Contour"
            },
            {
              "id": "d",
              "text": "Space"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Patterns are created when lines, shapes, or colors repeat."
        }
      ],
      "interactiveActivities": [
        {
          "id": "arts-101-l07-act1",
          "type": "drawing_canvas",
          "title": "Nature Symmetry Print",
          "description": "Go outside and collect flat leaves. Paint one side of a leaf, press it onto paper, and lift it to see the symmetrical print. Label it 'Nature Symmetry'."
        }
      ],
      "learningAids": [
        {
          "id": "arts-101-l07-a1",
          "type": "image",
          "title": "Symmetry vs Asymmetry",
          "content": "A visual diagram showing a perfectly symmetrical butterfly next to an asymmetrical rock formation."
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-101-l07.png"
    },
    {
      "id": "arts-101-l08",
      "title": "Final Portfolio Assessment",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A proud student's art portfolio laid open on a wooden desk, showcasing a diverse collection of colorful drawings, paintings, and a small clay sculpture, bathed in warm sunlight.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A celebratory animation of an art portfolio opening up, with 3D elements like color wheels, shaded spheres, and paper mâché figures magically popping out of the pages.",
      "chunks": [
        {
          "id": "arts-101-l08-c1",
          "title": "Review All Elements and Techniques",
          "content": "You've made it to the end of the Creative Arts Studio! Let's reflect on what you've learned. You mastered the elements of art (line, shape, color, texture, space, form, value) and drawing techniques like contour, shading, and proportion. You also studied how masters like Monet, Van Gogh, and Kahlo used these tools to create their legendary styles."
        },
        {
          "id": "arts-101-l08-c2",
          "title": "Review 3D and Nature Art",
          "content": "Beyond flat paper, you explored the 3D world through clay, paper mâché, and assemblage. You learned that art isn't just in museums—it's in nature, too! By recognizing symmetry, patterns, and fractals in the world around you, you now have an endless supply of inspiration for your future projects."
        },
        {
          "id": "arts-101-l08-c3",
          "title": "Your Artist Statement",
          "content": "Every great artist has a portfolio—a collection of their best work. As you put yours together, think about your favorite piece. Write an 'Artist Statement' explaining it. For example: 'I used shading and complementary colors to make my drawing pop.' Sharing your thoughts helps others understand your unique artistic vision. Keep creating!"
        }
      ],
      "flashcards": [
        {
          "id": "arts-101-l08-f1",
          "front": "The thick paint technique Van Gogh used",
          "back": "Impasto"
        },
        {
          "id": "arts-101-l08-f2",
          "front": "Mirror-image balance found in nature",
          "back": "Symmetry"
        },
        {
          "id": "arts-101-l08-f3",
          "front": "The artist famous for symbolic self-portraits",
          "back": "Frida Kahlo"
        },
        {
          "id": "arts-101-l08-f4",
          "front": "3D art made from glued found objects",
          "back": "Assemblage"
        }
      ],
      "questions": [
        {
          "id": "arts-101-l08-q1",
          "text": "Which artist painted 'Water Lilies' with loose brushstrokes?",
          "options": [
            {
              "id": "a",
              "text": "Claude Monet"
            },
            {
              "id": "b",
              "text": "Frida Kahlo"
            },
            {
              "id": "c",
              "text": "Pablo Picasso"
            },
            {
              "id": "d",
              "text": "Andy Goldsworthy"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Claude Monet is the Impressionist master who painted Water Lilies."
        },
        {
          "id": "arts-101-l08-q2",
          "text": "What technique uses thick, textured swirls of paint?",
          "options": [
            {
              "id": "a",
              "text": "Impasto"
            },
            {
              "id": "b",
              "text": "Contour"
            },
            {
              "id": "c",
              "text": "Symmetry"
            },
            {
              "id": "d",
              "text": "Assemblage"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Impasto is the technique of applying thick, textured paint."
        },
        {
          "id": "arts-101-l08-q3",
          "text": "Art made by gluing recycled or found objects together is called:",
          "options": [
            {
              "id": "a",
              "text": "Assemblage"
            },
            {
              "id": "b",
              "text": "Impasto"
            },
            {
              "id": "c",
              "text": "Contour"
            },
            {
              "id": "d",
              "text": "Shading"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Assemblage uses found objects to build a new 3D artwork."
        }
      ],
      "interactiveActivities": [
        {
          "id": "arts-101-l08-act1",
          "type": "project_builder",
          "title": "Final Portfolio",
          "description": "Collect your best 6 pieces from the whole module. Add a cover with your name and 'My Arts 101 Portfolio'. Present it to family or a teacher and explain one thing you learned from each piece."
        }
      ],
      "learningAids": [
        {
          "id": "arts-101-l08-a1",
          "type": "image",
          "title": "Portfolio Checklist",
          "content": "A visual checklist reminding students to include: 1 Drawing, 1 Color Wheel, 1 Sculpture, 1 Nature Art, and 1 Artist Statement."
        }
      ],
      "imageUrl": "/generated-images/refinery/arts-101-l08.png"
    }
  ]
};
