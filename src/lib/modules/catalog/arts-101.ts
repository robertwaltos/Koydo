import type { LearningModule } from "@/lib/modules/types";

export const Arts101Module: LearningModule = {
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
  "version": "2.0.0",
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
      "chunks": [
        {
          "id": "arts-101-l01-c1",
          "title": "Line and Shape",
          "content": "Lines are the most basic and important building blocks of art. Imagine a line as a mark made by a point that moves across a surface, like a pencil gliding on paper. Lines can be straight, like the edge of a ruler, or curved, like a gentle wave. They can also be zigzag, thick, or thin, each giving a different feeling to the artwork. When lines come together and connect, they form shapes. There are two main types of shapes that artists use: geometric shapes and organic shapes. Geometric shapes, such as circles, squares, and triangles, have specific measurements and are very precise. On the other hand, organic shapes, like the fluffy clouds in the sky or the unique outline of a leaf, are more freeform and irregular, just like things we see in nature. By learning about lines and shapes, artists can better express their thoughts and feelings through their creations, making their artwork more interesting and meaningful."
        },
        {
          "id": "arts-101-l01-c2",
          "title": "Color, Value, and Texture",
          "content": "Color is an exciting and important part of art! It has three main properties that help us understand it better. The first property is called hue, which is simply the name of the color, like red, blue, or green. The second property is value, which tells us how light or dark a color is. For example, a light blue is a different value than a dark blue. The third property is intensity, which describes how bright or dull a color looks. A bright red is high in intensity, while a faded red is low in intensity.\nAnother cool element of art is texture. Texture is all about how a surface feels or how it looks like it would feel if you touched it. Textures can be smooth, like a polished stone; rough, like tree bark; bumpy, like a popcorn kernel; or soft, like a fluffy pillow. Artists can create texture in their drawings and paintings using different techniques. They might use dots, lines, or shading to give the illusion of texture. A great example of this is the famous artist Vincent van Gogh. He used thick paint strokes in his artwork, which created a texture that you can almost feel just by looking at it! Understanding color and texture can help you express your creativity in amazing ways."
        },
        {
          "id": "arts-101-l01-c3",
          "title": "Space and Form",
          "content": "Space is a very important idea in art that helps us understand how objects relate to each other and their surroundings. When we talk about space, we mean the area that is around, between, and even inside objects. Positive space is where the main subject of the artwork is found; this is what we focus on and what draws our attention. On the other hand, negative space is the empty area that surrounds the subject. It might seem like just empty space, but it plays a crucial role in how we perceive the artwork.\nNow, let’s talk about form! Form refers to three-dimensional shapes. For example, a sphere is a round shape that you can hold in your hand, while a circle is flat and only seen on paper. Similarly, a cube is a solid shape, whereas a square is just a flat outline. Artists use different techniques to create the illusion of form on flat surfaces like paper. They often use shading, which is adding darker and lighter areas, and perspective, which helps to show depth and distance. These techniques make their artwork look more realistic and three-dimensional, allowing viewers to feel as if they can reach out and touch the objects depicted."
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
          "front": "Area enclosed when lines connect",
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
          "explanation": "Texture is how a surface feels — rough, smooth, bumpy!"
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
          "explanation": "Negative space is the empty area around objects!"
        },
        {
          "id": "arts-101-l01-q3",
          "text": "Geometric shapes like circles and squares have",
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
          "explanation": "Geometric shapes are precise and measurable!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "arts-101-l01-act1",
          "type": "drawing_canvas",
          "title": "Elements scavenger hunt",
          "description": "Look around your room and find one example each of line, shape, color, texture, space, and form. Draw or photograph each one and label it."
        }
      ],
      "learningAids": [
        {
          "id": "arts-101-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "arts-101-l02",
      "title": "The Color Wheel",
      "type": "interactive",
      "duration": 12,
      "chunks": [
        {
          "id": "arts-101-l02-c1",
          "title": "Primary and Secondary Colors",
          "content": "Primary colors are the building blocks of all other colors, and they include red, yellow, and blue. These colors are special because they cannot be made by mixing any other colors together. Think of them as the original colors that artists use to create a whole rainbow of shades! Now, when we mix two primary colors together, we create what are called secondary colors. For example, if you take red and mix it with yellow, you will get a bright and cheerful orange. If you mix yellow with blue, you will see a lovely green color appear. Lastly, when you combine blue and red, you create a rich purple. It's fascinating to see how these colors interact! The first color wheel was invented by the famous scientist Sir Isaac Newton in 1666. He took the colors of light and arranged them in a circle, showing how they relate to one another. This color wheel helps artists and designers understand how to mix colors and create beautiful artworks!"
        },
        {
          "id": "arts-101-l02-c2",
          "title": "Warm and Cool Colors",
          "content": "Colors can be divided into two main categories: warm colors and cool colors. Warm colors include shades like red, orange, and yellow. These colors remind us of things that are hot, like fire and sunlight. Because of this, warm colors tend to stand out in a painting, making them feel like they are coming forward towards us. On the other hand, we have cool colors, which include blue, green, and purple. These colors remind us of cooler things, such as water and ice. As a result, cool colors often seem to recede or move back in space, creating a sense of distance. Artists use these warm and cool colors in clever ways to add depth to their artwork and to set different moods. By choosing specific colors, they can influence how we feel when we look at their creations, making us feel warm and energetic or calm and relaxed."
        },
        {
          "id": "arts-101-l02-c3",
          "title": "Complementary Colors",
          "content": "Complementary colors are special pairs of colors that sit directly across from each other on the color wheel. For instance, if you look at the color wheel, you will see that red is opposite green, blue is opposite orange, and yellow is opposite purple. When you place these complementary colors next to each other, something magical happens! They make each other look even brighter and more lively. This effect can really make your artwork pop! A famous artist named Claude Monet loved to use complementary colors in his beautiful paintings, especially in his series called Water Lilies. By using these colors, he was able to create a glowing effect that made his paintings look stunning and full of life. Next time you paint, try using complementary colors to see how they can transform your artwork!"
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
          "front": "Colors opposite on the color wheel",
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
          "explanation": "Red + yellow = orange — a secondary color!"
        },
        {
          "id": "arts-101-l02-q2",
          "text": "Which pair are complementary colors?",
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
          "explanation": "Red and green are opposite on the color wheel!"
        },
        {
          "id": "arts-101-l02-q3",
          "text": "Warm colors like red and orange seem to",
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
          "explanation": "Warm colors pop forward while cool colors recede!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "arts-101-l02-act1",
          "type": "drawing_canvas",
          "title": "Color wheel painting",
          "description": "Using only red, yellow, and blue paint, mix and paint a full 12-color wheel. Label each slice with its color name and whether it is primary, secondary, or tertiary."
        }
      ],
      "learningAids": [
        {
          "id": "arts-101-l02-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "arts-101-l03",
      "title": "Drawing Techniques",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "arts-101-l03-c1",
          "title": "Contour Drawing",
          "content": "Contour drawing is a special drawing technique that focuses on capturing the outline and edges of an object without lifting your pencil from the paper. This method is fantastic for helping you train your eye to really notice the details of what you are drawing. By practicing contour drawing, you can improve your observation skills and become a better artist. One exciting variation of this technique is called blind contour drawing. In this practice, you look only at the object you are drawing and do not glance at your paper at all! This can lead to some surprising and fun results. A well-known artist named Egon Schiele was famous for using bold contour lines in his expressive figure drawings. His unique style made his artwork stand out and showed how contour drawing can add character and emotion to your pieces. So grab your pencil and try contour drawing today to see the world in a new way!"
        },
        {
          "id": "arts-101-l03-c2",
          "title": "Shading and Value",
          "content": "Shading is a fantastic technique that artists use to make their drawings look more realistic and three-dimensional! When you add shading to a flat image, it can create the illusion of depth and form. There are several fun methods to try out when shading. One is called hatching, where you draw a series of parallel lines close together. Another method is cross-hatching, which involves overlapping lines to create darker areas. You can also use stippling, which is when you make lots of tiny dots to build up shadows. Blending is another technique that allows you to create smooth transitions between light and dark areas, and you can do this with a pencil or even your finger! A famous artist known for his incredible shading skills is Leonardo da Vinci. He used a special technique called sfumato, which means 'smoky' in Italian. This technique creates soft, gentle transitions between colors and tones, and you can see it beautifully in his painting, the Mona Lisa. By practicing these shading techniques, you can add depth and life to your own drawings!"
        },
        {
          "id": "arts-101-l03-c3",
          "title": "Proportion",
          "content": "Proportion is an important concept in art that helps us understand how different parts of a drawing relate to each other in size. When we draw a human face, there are some useful guidelines that can help us get it just right! For instance, if you look closely, you'll notice that the eyes are usually positioned halfway down the head. This means that if you were to measure from the top of the head to the chin, the eyes would sit right in the middle. Next, the nose is placed halfway between the eyes and the chin, which helps to create a balanced look. Lastly, the mouth is about one-third of the way down from the nose to the chin. By following these simple proportion guidelines, artists can create faces that look more realistic and lifelike. Remember, practicing these techniques will help you improve your drawing skills and make your artwork even more impressive! So grab your pencils and start experimenting with proportions in your drawings today!"
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
          "front": "Technique using parallel lines to create value",
          "back": "Hatching"
        },
        {
          "id": "arts-101-l03-f3",
          "front": "Size relationship between parts of a drawing",
          "back": "Proportion"
        },
        {
          "id": "arts-101-l03-f4",
          "front": "Soft, smoky shading technique used by da Vinci",
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
          "explanation": "Contour drawing captures the outline of objects!"
        },
        {
          "id": "arts-101-l03-q2",
          "text": "Shading with tiny dots is called",
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
          "explanation": "Stippling uses many small dots to create value!"
        },
        {
          "id": "arts-101-l03-q3",
          "text": "On the average human face, the eyes are located",
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
          "explanation": "Eyes sit at the midpoint of the head height!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "arts-101-l03-act1",
          "type": "drawing_canvas",
          "title": "Shading sampler",
          "description": "Draw four squares. Fill each with a different shading technique: hatching, cross-hatching, stippling, and blending. Then draw a sphere and shade it with your favorite technique to make it look 3D."
        }
      ],
      "learningAids": [
        {
          "id": "arts-101-l03-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "arts-101-l04",
      "title": "Art Checkpoint",
      "type": "quiz",
      "duration": 8,
      "chunks": [
        {
          "id": "arts-101-l04-c1",
          "title": "Elements and Color Review",
          "content": "In this lesson, we explored the seven essential elements of art that every artist should know: line, shape, color, texture, space, form, and value. Each of these elements plays a crucial role in how we create and appreciate art. You learned that primary colors, which are red, blue, and yellow, can be mixed together to create secondary colors like green, orange, and purple. This mixing process is exciting because it allows you to create a whole new palette of colors! Furthermore, we discussed complementary colors, which are colors that sit directly opposite each other on the color wheel. When you place these colors next to each other, they make each other look even brighter and more vibrant. Understanding these concepts is fundamental to both creating and enjoying art, as they help you see the world in a more colorful and creative way."
        },
        {
          "id": "arts-101-l04-c2",
          "title": "Drawing Techniques Review",
          "content": "In our review of drawing techniques, we discussed contour drawing, which focuses on capturing the outlines of objects. We also explored shading techniques, including hatching, cross-hatching, stippling, and blending, which add depth and dimension to your drawings. Finally, we talked about how proportion guidelines can help you draw realistic faces and figures, making your artwork more lifelike and engaging.\nContext recap: In our review of drawing techniques, we discussed contour drawing, which focuses on capturing the outlines of objects. We also explored shading techniques, including hatching, cross-hatching, stippling, and blending, which add depth and dimension to your drawings. Finally, we talked about how proportion guidelines can help you draw realistic faces and figures, making your artwork more lifelike and engaging."
        },
        {
          "id": "arts-101-l04-c3",
          "title": "You Are Growing as an Artist!",
          "content": "Congratulations! You have now learned the essential building blocks of all visual art. Every painting, drawing, and sculpture uses these same elements and techniques. As you continue to practice and explore your creativity, you will grow as an artist and develop your own unique style. Remember, art is all about experimenting and expressing yourself! So, don't be afraid to try new things and let your imagination soar. Keep creating and have fun with your art journey!\nContext recap: Congratulations! You have now learned the essential building blocks of all visual art. Every painting, drawing, and sculpture uses these same elements and techniques. As you continue to practice and explore your creativity, you will grow as an artist and develop your own unique style.\nWhy this matters: You Are Growing as an Artist! helps learners in Arts connect ideas from Creative Arts Studio to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        }
      ],
      "flashcards": [
        {
          "id": "arts-101-l04-f1",
          "front": "Three primary colors",
          "back": "Red, yellow, blue"
        },
        {
          "id": "arts-101-l04-f2",
          "front": "Element that describes how light or dark",
          "back": "Value"
        },
        {
          "id": "arts-101-l04-f3",
          "front": "Drawing the outline without lifting your pencil",
          "back": "Contour drawing"
        },
        {
          "id": "arts-101-l04-f4",
          "front": "Colors opposite on the color wheel",
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
          "explanation": "Primary colors cannot be made by mixing others!"
        },
        {
          "id": "arts-101-l04-q2",
          "text": "What shading technique uses overlapping sets of lines?",
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
          "explanation": "Cross-hatching layers lines in different directions!"
        },
        {
          "id": "arts-101-l04-q3",
          "text": "Negative space is",
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
          "explanation": "Negative space is the area surrounding the subject!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "arts-101-l04-act1",
          "type": "drawing_canvas",
          "title": "Mini gallery review",
          "description": "Collect your best drawing from each of the first three lessons. Write one sentence about which element or technique you used in each piece."
        }
      ],
      "learningAids": [
        {
          "id": "arts-101-l04-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "arts-101-l05",
      "title": "Famous Artists",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "arts-101-l05-c1",
          "title": "Claude Monet — Impressionism",
          "content": "Claude Monet was a talented French painter who lived from 1840 to 1926. He is well-known for being one of the founders of the Impressionist movement, which was a new way of looking at art that focused on capturing moments in time. Monet loved to paint outdoors, where he could see the beautiful changes in light and color as the day went on. One of his most famous series of paintings is called Water Lilies. This series includes over 250 different paintings of the pond in his garden, where he spent a lot of time observing nature. Monet's unique painting style features loose and visible brushstrokes, which create a shimmering and dreamlike effect. This technique makes it feel like you are stepping right into the scene he painted. Through his artwork, Monet encourages us to appreciate the beauty of nature and the world around us, reminding us to take a moment to enjoy the sights and colors in our own lives."
        },
        {
          "id": "arts-101-l05-c2",
          "title": "Vincent van Gogh — Post-Impressionism",
          "content": "Vincent van Gogh was a truly extraordinary artist who lived from 1853 to 1890. He is best known for his unique style that features thick, swirling brushstrokes, a technique called impasto. This method allows the paint to stand out from the canvas, creating a lively texture that draws the viewer in. One of his most famous paintings is The Starry Night, which he created in 1889. In this artwork, you can see a beautiful night sky filled with swirling clouds and shining stars. The vibrant blues and yellows he used express strong feelings and a sense of movement, making the painting feel alive. Interestingly, during his lifetime, van Gogh only sold one painting, which is quite surprising! However, today, his artwork is incredibly valuable and can sell for tens of millions of dollars! His journey reminds us of the importance of pursuing our passions, even when we face difficulties or don't receive recognition right away. It teaches us to believe in ourselves and our creativity, no matter what others may think."
        },
        {
          "id": "arts-101-l05-c3",
          "title": "Frida Kahlo — Self-Portraits",
          "content": "Frida Kahlo was a remarkable Mexican artist who was born in 1907 and became famous for her expressive self-portraits. She had a unique way of using bright colors and powerful symbols in her artwork to share her feelings and life experiences. One of her most famous paintings is called Self-Portrait with Thorn Necklace and Hummingbird. In this artwork, she includes various plants and animals, using vibrant colors to show deep themes of pain and strength. Frida's art is not just beautiful; it tells a story about who she was and what she went through in her life. Her creativity encourages us to think about our own identities and to express our emotions through our own art. Frida Kahlo is celebrated as one of the most important artists of the 20th century, and her work continues to inspire people around the world to explore their own creativity and feelings."
        }
      ],
      "flashcards": [
        {
          "id": "arts-101-l05-f1",
          "front": "Painted Water Lilies with loose brushstrokes",
          "back": "Claude Monet"
        },
        {
          "id": "arts-101-l05-f2",
          "front": "Thick paint technique using swirling brushstrokes",
          "back": "Impasto (Van Gogh)"
        },
        {
          "id": "arts-101-l05-f3",
          "front": "Mexican artist known for bold self-portraits",
          "back": "Frida Kahlo"
        },
        {
          "id": "arts-101-l05-f4",
          "front": "Painting of a swirling night sky from 1889",
          "back": "The Starry Night (Van Gogh)"
        }
      ],
      "questions": [
        {
          "id": "arts-101-l05-q1",
          "text": "Which artist started the Impressionist movement and painted Water Lilies?",
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
          "explanation": "Monet is the father of Impressionism!"
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
          "explanation": "Impasto means thick, textured paint applied with bold strokes!"
        },
        {
          "id": "arts-101-l05-q3",
          "text": "Frida Kahlo is best known for her",
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
          "explanation": "Kahlo created powerful symbolic self-portraits!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "arts-101-l05-act1",
          "type": "drawing_canvas",
          "title": "Artist style study",
          "description": "Pick one famous artist from the lesson. Create a short artwork inspired by their style. If you pick Monet, use loose brushstrokes. If Van Gogh, use thick swirls. If Kahlo, create a symbolic self-portrait."
        }
      ]
    },
    {
      "id": "arts-101-l06",
      "title": "Sculpture and 3D Art",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "arts-101-l06-c1",
          "title": "Clay Sculpture",
          "content": "Clay is a wonderful material that can be shaped in many ways, such as pinching, rolling, or coiling. Ancient Greek artists were skilled in creating beautiful clay vases and figures that are still admired today. You can try making a simple pinch pot by using your fingers to shape the clay into a bowl. Once you have your pot, you can add fun textures using a pencil or a fork to create interesting designs. Working with clay allows you to express your creativity and make something unique!\nContext recap: Clay is a wonderful material that can be shaped in many ways, such as pinching, rolling, or coiling. Ancient Greek artists were skilled in creating beautiful clay vases and figures that are still admired today. You can try making a simple pinch pot by using your fingers to shape the clay into a bowl. Once you have your pot, you can add fun textures using a pencil or a fork to create interesting designs."
        },
        {
          "id": "arts-101-l06-c2",
          "title": "Paper Mâché",
          "content": "Paper mâché is an exciting and imaginative art technique that lets you create wonderful sculptures using simple materials! To start, you take strips of newspaper and dip them into a mixture of glue and water. This mixture helps the paper stick together. You can layer these strips over a balloon or a cardboard shape to form your sculpture. Once it dries, it becomes hard and sturdy! The famous sculptor Auguste Rodin often worked with real models to create his art, but with paper mâché, you have the freedom to make colorful masks or fun animal shapes. After your creation is dry, you can paint it in any colors you like! This technique is a fantastic way to express your creativity and make unique three-dimensional art pieces that you can show off to your friends and family!"
        },
        {
          "id": "arts-101-l06-c3",
          "title": "Assemblage",
          "content": "Assemblage is a fascinating form of sculpture that uses found objects to create new artworks. The famous artist Pablo Picasso was known for his innovative techniques, such as gluing together newspaper, string, and wood in his piece Still Life with Chair Caning. You can try your hand at assemblage by collecting safe, recycled items from around your home, like bottle caps, old toys, or cardboard. With these materials, you can build a robot or a creature, letting your imagination run wild! This art form encourages creativity and resourcefulness.\nContext recap: Assemblage is a fascinating form of sculpture that uses found objects to create new artworks. The famous artist Pablo Picasso was known for his innovative techniques, such as gluing together newspaper, string, and wood in his piece Still Life with Chair Caning. You can try your hand at assemblage by collecting safe, recycled items from around your home, like bottle caps, old toys, or cardboard. With these materials, you can build a robot or a creature, letting your imagination run wild!"
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
          "front": "Sculpture made from newspaper and glue",
          "back": "Paper mâché"
        },
        {
          "id": "arts-101-l06-f3",
          "front": "Art made by gluing found objects together",
          "back": "Assemblage"
        },
        {
          "id": "arts-101-l06-f4",
          "front": "Famous for Still Life with Chair Caning assemblage",
          "back": "Pablo Picasso"
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
          "explanation": "Paper mâché uses wet newspaper strips!"
        },
        {
          "id": "arts-101-l06-q2",
          "text": "What 3D art is made by gluing recycled objects?",
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
          "explanation": "Assemblage uses found objects!"
        },
        {
          "id": "arts-101-l06-q3",
          "text": "Pinch pots and coils are made with",
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
          "explanation": "Clay is soft and perfect for pinching!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "arts-101-l06-act1",
          "type": "project_builder",
          "title": "Recycled robot assemblage",
          "description": "Gather clean cardboard tubes, bottle caps, egg cartons, glue, tape, and markers. Build and decorate a standing robot or creature."
        }
      ]
    },
    {
      "id": "arts-101-l07",
      "title": "Art in Nature",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "arts-101-l07-c1",
          "title": "Patterns in Nature",
          "content": "Nature is full of beautiful patterns that can inspire artists. For example, leaves have repeating vein patterns, and sunflowers display stunning spiral shapes. The artist Andy Goldsworthy is known for arranging natural materials like leaves and stones into temporary art pieces that highlight these perfect patterns. By observing nature closely, we can find inspiration for our own artwork and learn to appreciate the beauty that surrounds us every day.\nContext recap: Nature is full of beautiful patterns that can inspire artists. For example, leaves have repeating vein patterns, and sunflowers display stunning spiral shapes. The artist Andy Goldsworthy is known for arranging natural materials like leaves and stones into temporary art pieces that highlight these perfect patterns. By observing nature closely, we can find inspiration for our own artwork and learn to appreciate the beauty that surrounds us every day."
        },
        {
          "id": "arts-101-l07-c2",
          "title": "Symmetry",
          "content": "Symmetry is a really interesting idea that you can find both in art and in nature! It happens when one side of something looks just like the other side. A great example of symmetry is a butterfly's wings, which are identical on both sides. Another example is a snowflake, which has a beautiful and complex pattern that is the same all around. You can try this out yourself by taking a real leaf and folding it in half. When you do this, you'll notice that both sides of the leaf match perfectly, showing off nature's symmetry! An artist named Georgia O'Keeffe is well-known for her paintings of large flowers that often have these lovely symmetrical shapes. Learning about symmetry can help you make your own artwork feel balanced and harmonious, making it even more beautiful!"
        },
        {
          "id": "arts-101-l07-c3",
          "title": "Fractals and Repeating Shapes",
          "content": "Fractals are fascinating shapes that repeat themselves in smaller and smaller versions, creating beautiful and intricate patterns. You can find examples of fractals all around us in nature! For instance, look at the branches of a tree; they spread out and keep dividing into smaller branches. Another great example is the spirals you see in seashells, which also follow this repeating pattern. To create your very own fractal pattern, grab some paper and start drawing a tree. Begin with a big trunk and then add smaller branches coming off of it. Keep going by adding even tinier branches! This fun exercise not only helps you learn about fractals but also encourages you to express your creativity through your artwork. Fractals show us how repetition and complexity can create stunning beauty in the world around us."
        }
      ],
      "flashcards": [
        {
          "id": "arts-101-l07-f1",
          "front": "Repeating shapes that get smaller",
          "back": "Fractals"
        },
        {
          "id": "arts-101-l07-f2",
          "front": "One side mirrors the other",
          "back": "Symmetry"
        },
        {
          "id": "arts-101-l07-f3",
          "front": "Repeating lines in leaves or petals",
          "back": "Patterns"
        },
        {
          "id": "arts-101-l07-f4",
          "front": "Artist who arranges leaves and stones outdoors",
          "back": "Andy Goldsworthy"
        }
      ],
      "questions": [
        {
          "id": "arts-101-l07-q1",
          "text": "When one side of a butterfly's wings matches the other, it has",
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
          "explanation": "Symmetry means mirror halves!"
        },
        {
          "id": "arts-101-l07-q2",
          "text": "Repeating smaller and smaller branches in a tree is an example of",
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
          "explanation": "Fractals repeat at smaller scales!"
        },
        {
          "id": "arts-101-l07-q3",
          "text": "Repeating vein lines in a leaf create a",
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
          "explanation": "Patterns repeat over and over!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "arts-101-l07-act1",
          "type": "drawing_canvas",
          "title": "Nature symmetry print",
          "description": "Go outside and collect flat leaves or flowers. Paint one side, fold paper over it, press, and open to see the mirror image. Label it 'Nature Symmetry'."
        }
      ]
    },
    {
      "id": "arts-101-l08",
      "title": "Final Portfolio Assessment",
      "type": "quiz",
      "duration": 10,
      "chunks": [
        {
          "id": "arts-101-l08-c1",
          "title": "Review All Elements and Techniques",
          "content": "Throughout this course, you have learned about various important elements and techniques in art, including line, shape, color, texture, space, contour, shading, and proportion. You also explored how famous artists use these elements in their work to create stunning pieces. Understanding these concepts will help you express your creativity and develop your own unique style as an artist.\nContext recap: Throughout this course, you have learned about various important elements and techniques in art, including line, shape, color, texture, space, contour, shading, and proportion. You also explored how famous artists use these elements in their work to create stunning pieces. Understanding these concepts will help you express your creativity and develop your own unique style as an artist."
        },
        {
          "id": "arts-101-l08-c2",
          "title": "Review 3D and Nature Art",
          "content": "In this course, you had the opportunity to create exciting three-dimensional art using techniques like clay modeling, paper mâché, and assemblage. You also discovered the beauty of symmetry and patterns found in nature, which can inspire your artwork. These experiences have allowed you to explore different materials and methods, helping you grow as an artist and encouraging you to express your creativity in new ways.\nContext recap: In this course, you had the opportunity to create exciting three-dimensional art using techniques like clay modeling, paper mâché, and assemblage. You also discovered the beauty of symmetry and patterns found in nature, which can inspire your artwork. These experiences have allowed you to explore different materials and methods, helping you grow as an artist and encouraging you to express your creativity in new ways."
        },
        {
          "id": "arts-101-l08-c3",
          "title": "Your Artist Statement",
          "content": "As you reflect on your artistic journey, think about your favorite piece of art that you created. Write or share a sentence about it, such as, 'I used shading and complementary colors to make my drawing look three-dimensional and bright.' This artist statement helps you express your thoughts and feelings about your work, and it’s a great way to communicate your artistic vision to others.\nContext recap: As you reflect on your artistic journey, think about your favorite piece of art that you created. Write or share a sentence about it, such as, 'I used shading and complementary colors to make my drawing look three-dimensional and bright.' This artist statement helps you express your thoughts and feelings about your work, and it’s a great way to communicate your artistic vision to others."
        }
      ],
      "flashcards": [
        {
          "id": "arts-101-l08-f1",
          "front": "Thick paint technique Van Gogh used",
          "back": "Impasto"
        },
        {
          "id": "arts-101-l08-f2",
          "front": "Mirror-image balance in nature",
          "back": "Symmetry"
        },
        {
          "id": "arts-101-l08-f3",
          "front": "Self-portrait artist with thorn necklace",
          "back": "Frida Kahlo"
        },
        {
          "id": "arts-101-l08-f4",
          "front": "Art made from glued found objects",
          "back": "Assemblage"
        }
      ],
      "questions": [
        {
          "id": "arts-101-l08-q1",
          "text": "Which artist painted Water Lilies with loose brushstrokes?",
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
          "explanation": "Claude Monet is the impressionist who painted Water Lilies!"
        },
        {
          "id": "arts-101-l08-q2",
          "text": "What technique uses thick swirls of paint?",
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
          "explanation": "Impasto is thick, textured paint!"
        },
        {
          "id": "arts-101-l08-q3",
          "text": "Art made by gluing recycled objects is called",
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
          "explanation": "Assemblage uses found objects!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "arts-101-l08-act1",
          "type": "project_builder",
          "title": "Final portfolio",
          "description": "Collect your best 6 pieces from the whole module (drawing, color wheel, sculpture, nature print, etc.). Add a cover with your name and 'My Arts 101 Portfolio'. Present it to family or teacher and explain one thing you learned from each piece."
        }
      ]
    }
  ]
};
