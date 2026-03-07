import type { LearningModule } from "@/lib/modules/types";

export const pre_k_astronomy_101_Module: LearningModule = {
  "id": "pre-k-astronomy-101",
  "title": "Pre-K Sky & Space Explorers",
  "description": "Blast off on a space adventure for ages 3-5! Discover why the Sun lights up our day, why the Moon changes shape, what makes stars twinkle, and which planets are our neighbors — all through stories, songs, and hands-on play.",
  "subject": "Astronomy",
  "tags": [
    "pre-k",
    "curriculum",
    "interactive",
    "space"
  ],
  "minAge": 3,
  "maxAge": 5,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-rocket.svg",
  "learningObjectives": [
    "Describe the Sun as a star that gives us light and warmth.",
    "Explain that Earth's spinning causes daytime and nighttime.",
    "Name the four main phases of the Moon: new, crescent, half, and full.",
    "Identify stars as faraway suns that twinkle in the night sky.",
    "Name the eight planets in our solar system.",
    "Describe one fun fact about Earth, Mars, Jupiter, and Saturn.",
    "Describe what an astronaut does and why they float in space."
  ],
  "lessons": [
    {
      "id": "prek-astro-l00",
      "title": "Welcome, Space Explorers!",
      "type": "video",
      "duration": 5,
      "objectives": [
        "Get excited about learning about the sky and space.",
        "Identify the Sun, Moon, and stars as things we see in the sky."
      ],
      "chunks": [
        {
          "id": "prek-astro-l00-c1",
          "title": "Let's Look Up!",
          "content": "Hello, space explorers! Are you ready for an adventure? Our adventure is all about looking up! What do you see when you look up at the sky during the day? That's right, the big, bright Sun! ☀️ And what about at night? You might see the beautiful Moon and lots of sparkly stars! In our adventure, we're going to learn all about these amazing things. We'll learn about our planet Earth, meet its neighbors, and even see what it's like to be an astronaut! Let's get ready to blast off! 3... 2... 1... Liftoff! 🚀",
          "visualPrompts": [
            "A friendly animated host (e.g., a robot or an animal in a spacesuit) waves hello.",
            "Animation of a child looking up at a bright, sunny sky.",
            "The sky transitions to night, showing a friendly Moon and twinkling stars.",
            "A fun, animated rocket ship blasts off into space."
          ]
        }
      ],
      "learningAids": [
        {
          "id": "prek-astro-l00-a1",
          "type": "activity",
          "title": "Sky Drawing",
          "content": "Ask your little explorer to draw a picture of the daytime sky and the nighttime sky."
        }
      ]
    },
    {
      "id": "prek-astro-l01",
      "title": "The Sun: Our Daytime Star!",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Explain that the Sun is a star.",
        "Describe two things the Sun gives us: light and warmth.",
        "State that we should never look directly at the Sun."
      ],
      "chunks": [
        {
          "id": "prek-astro-l01-c1",
          "title": "Meet the Sun",
          "content": "Let's meet the star of our daytime sky: the Sun! ☀️ The Sun is a giant, hot, glowing star. It's the center of our space family, called the solar system. All the planets, including our Earth, dance around the big, bright Sun. The Sun is so important because it gives us light to see and helps plants and flowers grow. Without our Sun, our world would be very dark and very cold. Let's give a big 'hooray' for the Sun!",
          "visualPrompts": [
            "A friendly, smiling Sun character appears in the center of the screen.",
            "Animation of Earth and other planets happily spinning around the Sun.",
            "Simple animation showing flowers drooping in the dark, then perking up when the Sun shines on them."
          ]
        },
        {
          "id": "prek-astro-l01-c2",
          "title": "A Gift of Light and Warmth",
          "content": "The Sun gives us two very special gifts every day: light and warmth! The light helps us see all the colors of the world and lets us play outside. The warmth feels so nice on our skin and keeps our whole planet cozy. Plants need the Sun's light and warmth to grow big and strong, and so do we! So when you feel the warm sunshine, you can say, 'Thank you, Sun!' for helping us play and grow.",
          "visualPrompts": [
            "Split screen showing a dark room vs. a brightly lit room.",
            "Animation of kids playing happily in a sunny park.",
            "A time-lapse animation of a small seed sprouting and growing into a big sunflower, always facing the Sun."
          ]
        },
        {
          "id": "prek-astro-l01-c3",
          "title": "Sun Safety!",
          "content": "The Sun is our friend, but it is very, very bright and powerful. We have to be safe in the sun. The most important rule is to NEVER look right at the Sun. It can hurt your eyes! To stay safe while you play, you can wear cool sunglasses, a shady hat, and ask a grown-up to help you with sunscreen. Playing in the sun is lots of fun when we remember to be safe!",
          "visualPrompts": [
            "Animation of eyes looking at the Sun with a big red 'X' over it.",
            "Cartoon kids happily putting on sunglasses and fun hats.",
            "An animation showing sunscreen creating a sparkly, protective shield on a child's arm."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "prek-astro-l01-f1",
          "front": "What is the Sun?",
          "back": "A big, hot, glowing star! ☀️"
        },
        {
          "id": "prek-astro-l01-f2",
          "front": "What two gifts does the Sun give us?",
          "back": "Light and warmth!"
        },
        {
          "id": "prek-astro-l01-f3",
          "front": "Is it safe to look right at the Sun?",
          "back": "NEVER! It's too bright and can hurt your eyes. 😎"
        }
      ],
      "questions": [
        {
          "id": "prek-astro-l01-q1",
          "text": "The Sun is a giant, glowing...",
          "options": [
            {
              "id": "a",
              "text": "Ball"
            },
            {
              "id": "b",
              "text": "Star"
            },
            {
              "id": "c",
              "text": "Lightbulb"
            }
          ],
          "correctOptionId": "b",
          "explanation": "That's right! The Sun is our very own star."
        },
        {
          "id": "prek-astro-l01-q2",
          "text": "What does the Sun give us?",
          "options": [
            {
              "id": "a",
              "text": "Darkness and cold"
            },
            {
              "id": "b",
              "text": "Light and warmth"
            },
            {
              "id": "c",
              "text": "Rain and snow"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The Sun gives us light so we can see, and warmth to keep us cozy!"
        }
      ],
      "learningAids": [
        {
          "id": "prek-astro-l01-a1",
          "type": "printable",
          "title": "Sun Safety Coloring Page",
          "content": "A printable coloring sheet showing kids wearing hats and sunglasses while playing in the sun."
        }
      ]
    },
    {
      "id": "prek-astro-l02",
      "title": "Day and Night",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Explain that Earth spins, causing day and night.",
        "Describe that the side of Earth facing the Sun has daytime.",
        "State that one full spin is one full day."
      ],
      "chunks": [
        {
          "id": "prek-astro-l02-c1",
          "title": "Earth is a Spinner!",
          "content": "Did you know that our planet, Earth, is always spinning? It turns around and around, like a slow-motion spinning top! 🌍 You can't feel it because everything—you, your house, the trees—is all spinning together. It takes one whole day and one whole night for Earth to spin all the way around one time. This spinning is what gives us our days and our nights!",
          "visualPrompts": [
            "Animation of the Earth spinning gently in space.",
            "A visual comparison of the Earth spinning next to a toy top spinning."
          ]
        },
        {
          "id": "prek-astro-l02-c2",
          "title": "Sunshine and Shadows",
          "content": "Let's pretend the Sun is a big flashlight. When the flashlight shines on one side of our spinning Earth, it's bright! That's daytime, when we can play outside. But the other side of Earth is in the dark shadow. That's nighttime, when we sleep and see the stars. As Earth spins, your home moves from the sunshine into the shadow, and back again. Day, then night, then day again!",
          "visualPrompts": [
            "A simple animation showing a flashlight (labeled 'Sun') shining on a spinning globe.",
            "The animation clearly shows one side lit up (day) and the other side dark (night).",
            "A little house icon is shown moving from the light side to the dark side as the globe spins."
          ]
        },
        {
          "id": "prek-astro-l02-c3",
          "title": "Hello, Other Side!",
          "content": "Here's a fun secret: when it's nighttime for you and you're getting into bed, kids on the other side of the Earth are just waking up! 🌅 Their side of the Earth is spinning into the sunshine. So, while you're dreaming, they are eating breakfast and getting ready to play. We all share the same Sun, just at different times. Isn't that neat?",
          "visualPrompts": [
            "A split-screen animation. On one side, a child in pajamas looks at the Moon through a window. On the other side, a child eats breakfast as the Sun rises."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "prek-astro-l02-f1",
          "front": "Why do we have day and night?",
          "back": "Because our Earth spins around! 🌍"
        },
        {
          "id": "prek-astro-l02-f2",
          "front": "When it's daytime, which way is our part of Earth facing?",
          "back": "It's facing the Sun!"
        },
        {
          "id": "prek-astro-l02-f3",
          "front": "When it is night here, what is it on the other side of Earth?",
          "back": "Daytime! Kids there are waking up!"
        }
      ],
      "questions": [
        {
          "id": "prek-astro-l02-q1",
          "text": "We have day and night because Earth...",
          "options": [
            {
              "id": "a",
              "text": "Spins around"
            },
            {
              "id": "b",
              "text": "Jumps up and down"
            },
            {
              "id": "c",
              "text": "Stays still"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Earth spins around and around, which gives us daytime and nighttime."
        }
      ],
      "learningAids": [
        {
          "id": "prek-astro-l02-a1",
          "type": "activity",
          "title": "Day & Night with a Globe",
          "content": "Use a globe (or any ball) and a flashlight to show your child how one side is lit (day) while the other is dark (night) as you spin it."
        }
      ]
    },
    {
      "id": "prek-astro-l03",
      "title": "The Moon: Our Nightlight",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Name four Moon phases: new moon, crescent, half, full.",
        "Explain that the Moon reflects the Sun's light.",
        "Describe that the Moon travels around the Earth."
      ],
      "chunks": [
        {
          "id": "prek-astro-l03-c1",
          "title": "The Moon's Magic Trick",
          "content": "Look, it's the Moon! Sometimes the Moon is a big, bright circle. Other times, it's just a tiny sliver, like a banana. 🍌 And sometimes, you can't see it at all! Is the Moon changing its shape? Nope! It's a magic trick! The Moon is always a big round ball. We just see different parts of it lit up by the Sun as the Moon travels around our Earth.",
          "visualPrompts": [
            "Animation showing the Moon changing through its phases in the night sky.",
            "The animation reveals the Moon is always a round ball, but a 'spotlight' from the Sun is only lighting up parts of it."
          ]
        },
        {
          "id": "prek-astro-l03-c2",
          "title": "The Moon's Many Faces",
          "content": "The different shapes we see are called phases. When the Moon is hiding and all dark, that's a New Moon. 🌑 When it's a little sliver, it's a Crescent Moon. 🌙 When we see exactly half, it's a Half Moon. 🌓 And when the whole thing is bright and round, that's a Full Moon! 🌕 It's fun to look for the Moon each night and see which face it's showing you.",
          "visualPrompts": [
            "Clear, simple graphics appear for each phase as it's named: New, Crescent, Half, and Full.",
            "An animation of a child looking out their window each night and pointing to the different Moon shapes."
          ]
        },
        {
          "id": "prek-astro-l03-c3",
          "title": "The Moon is a Mirror",
          "content": "Here’s another secret: the Moon doesn't make its own light! It's actually a big, dark rock. So why does it glow? It works like a mirror! The Moon borrows its light from our bright Sun. The sunlight shines on the Moon, and the Moon reflects that light down to us on Earth. So when you see the Moon shining, you're really seeing sunshine bouncing off the Moon!",
          "visualPrompts": [
            "Animation showing the Moon as a dark, gray rock.",
            "Beams of light travel from the Sun, hit the Moon, and then bounce down to Earth, making the Moon appear to glow."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "prek-astro-l03-f1",
          "front": "Name four shapes, or phases, of the Moon.",
          "back": "New Moon 🌑, Crescent 🌙, Half Moon 🌓, and Full Moon 🌕."
        },
        {
          "id": "prek-astro-l03-f2",
          "front": "Does the Moon make its own light?",
          "back": "No! It reflects light from the Sun, like a mirror."
        },
        {
          "id": "prek-astro-l03-f3",
          "front": "Is the Moon really changing its shape?",
          "back": "No, it's always a round ball. We just see different parts lit by the Sun."
        }
      ],
      "questions": [
        {
          "id": "prek-astro-l03-q1",
          "text": "A full, round, glowing Moon is called a...",
          "options": [
            {
              "id": "a",
              "text": "New Moon"
            },
            {
              "id": "b",
              "text": "Half Moon"
            },
            {
              "id": "c",
              "text": "Full Moon"
            }
          ],
          "correctOptionId": "c",
          "explanation": "When we see the Moon's whole bright face, it is a Full Moon! 🌕"
        },
        {
          "id": "prek-astro-l03-q2",
          "text": "The Moon shines because...",
          "options": [
            {
              "id": "a",
              "text": "It has a lightbulb inside"
            },
            {
              "id": "b",
              "text": "It reflects the Sun's light"
            },
            {
              "id": "c",
              "text": "It is made of glitter"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The Moon is like a big mirror in the sky, reflecting sunlight!"
        }
      ],
      "learningAids": [
        {
          "id": "prek-astro-l03-a1",
          "type": "activity",
          "title": "Oreo Moon Phases",
          "content": "Use Oreo cookies to show the Moon phases. A full cookie is a Full Moon. Scrape off the filling to make a Half Moon and a Crescent Moon. A cookie with no filling is a New Moon."
        }
      ]
    },
    {
      "id": "prek-astro-l04",
      "title": "Moon Phase Match-Up!",
      "type": "interactive",
      "duration": 10,
      "objectives": [
        "Match each Moon phase name to its appearance.",
        "Practice identifying the four main Moon phases."
      ],
      "interactiveActivities": [
        {
          "id": "prek-astro-l04-ia1",
          "type": "matching_pairs",
          "title": "Match the Moon's Face!",
          "description": "Drag the name to the right Moon shape.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "New Moon"
              },
              {
                "id": "l2",
                "label": "Crescent Moon"
              },
              {
                "id": "l3",
                "label": "Half Moon"
              },
              {
                "id": "l4",
                "label": "Full Moon"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "🌑 All dark"
              },
              {
                "id": "r2",
                "label": "🌙 Thin sliver"
              },
              {
                "id": "r3",
                "label": "🌓 Half lit"
              },
              {
                "id": "r4",
                "label": "🌕 All bright"
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
              },
              {
                "leftId": "l4",
                "rightId": "r4"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "prek-astro-l04-a1",
          "type": "printable",
          "title": "Moon Phase Matching Game",
          "content": "A printable worksheet with pictures of Moon phases to cut out and paste next to the correct name."
        }
      ]
    },
    {
      "id": "prek-astro-l05",
      "title": "Checkpoint: Sun, Day & Night, Moon",
      "type": "quiz",
      "duration": 8,
      "questions": [
        {
          "id": "prek-astro-l05-q1",
          "text": "The Sun is actually a...",
          "options": [
            {
              "id": "a",
              "text": "Planet"
            },
            {
              "id": "b",
              "text": "Star"
            },
            {
              "id": "c",
              "text": "Moon"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The Sun is a star — a giant ball of hot glowing gas!"
        },
        {
          "id": "prek-astro-l05-q2",
          "text": "Day happens when our side of Earth faces the...",
          "options": [
            {
              "id": "a",
              "text": "Moon"
            },
            {
              "id": "b",
              "text": "Stars"
            },
            {
              "id": "c",
              "text": "Sun"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The side of Earth facing the Sun gets sunlight — that is daytime!"
        },
        {
          "id": "prek-astro-l05-q3",
          "text": "Which Moon phase looks like a thin banana?",
          "options": [
            {
              "id": "a",
              "text": "Full Moon"
            },
            {
              "id": "b",
              "text": "Crescent Moon"
            },
            {
              "id": "c",
              "text": "New Moon"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A crescent Moon is a thin sliver — it looks like a banana! 🌙"
        }
      ]
    },
    {
      "id": "prek-astro-l06",
      "title": "Twinkle, Twinkle, Giant Star",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Explain that stars are faraway suns.",
        "Describe why stars appear to twinkle.",
        "State that stars are in the sky during the day, but we can't see them."
      ],
      "chunks": [
        {
          "id": "prek-astro-l06-c1",
          "title": "Stars are Faraway Suns",
          "content": "When you look up at the night sky, you see lots of tiny, sparkly lights. Those are stars! And here's a secret: every star is actually a giant, hot, glowing sun, just like our Sun! ⭐ They look so tiny because they are very, very, VERY far away. It's like seeing an airplane high up in the sky. You know it's really big, but it looks tiny because it's so far away. Stars are the same way!",
          "visualPrompts": [
            "A beautiful, dark night sky filled with twinkling stars.",
            "Animation zooms in on one star, which grows bigger and bigger until it looks like our Sun.",
            "A simple animation comparing a star to an airplane looking small in the distance."
          ]
        },
        {
          "id": "prek-astro-l06-c2",
          "title": "Why Do Stars Twinkle?",
          "content": "Have you ever sung 'Twinkle, twinkle, little star'? Stars look like they are blinking or twinkling, but it's another magic trick! The stars themselves are shining with a steady light. They seem to twinkle because their light has to travel through all of Earth's air to reach our eyes. The air wiggles and jiggles, and that makes the starlight look like it's wiggling and twinkling, too! ✨",
          "visualPrompts": [
            "Animation of a star shining a straight, steady beam of light.",
            "A wavy, transparent layer labeled 'Air' appears around Earth. The light beam wiggles as it passes through the air.",
            "A child on Earth looks up and sees the wiggling light as a twinkle."
          ]
        },
        {
          "id": "prek-astro-l06-c3",
          "title": "Where Do Stars Go in the Day?",
          "content": "Where do the stars go when the Sun comes up? They don't go anywhere! The stars are always in the sky, day and night. But during the day, our Sun is so bright that it lights up the whole sky. The Sun's light is much closer and brighter than the faraway starlight, so we can't see the stars until the Sun sets and the sky gets dark again. They were hiding in the bright blue sky all along!",
          "visualPrompts": [
            "Animation of a night sky full of stars.",
            "The Sun rises, and its bright light fills the screen, making the stars fade from view.",
            "The Sun sets, the sky darkens, and the stars reappear."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "prek-astro-l06-f1",
          "front": "What are stars?",
          "back": "Giant suns that are very, very far away! ⭐"
        },
        {
          "id": "prek-astro-l06-f2",
          "front": "Why do stars look like they twinkle?",
          "back": "Because their light has to wiggle through Earth's air to reach us."
        },
        {
          "id": "prek-astro-l06-f3",
          "front": "Are stars in the sky during the day?",
          "back": "Yes! But the Sun is so bright we can't see them."
        }
      ],
      "questions": [
        {
          "id": "prek-astro-l06-q1",
          "text": "Stars look tiny because they are...",
          "options": [
            {
              "id": "a",
              "text": "Actually very small"
            },
            {
              "id": "b",
              "text": "Very, very far away"
            },
            {
              "id": "c",
              "text": "Hiding"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Every star is a giant sun — they just look tiny because they are so far away!"
        }
      ],
      "learningAids": [
        {
          "id": "prek-astro-l06-a1",
          "type": "craft",
          "title": "Glitter Star Constellations",
          "content": "Use black construction paper, glue, and glitter to make your own sparkly star pictures."
        }
      ]
    },
    {
      "id": "prek-astro-l07",
      "title": "Meet Our Planet Family",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Name the eight planets that orbit the Sun.",
        "Describe one fun fact about Earth, Mars, Jupiter, and Saturn."
      ],
      "chunks": [
        {
          "id": "prek-astro-l07-c1",
          "title": "The Planet Parade",
          "content": "Our Sun has a big family of planets that travel around it. There are eight of them! Let's say their names: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. They are all different sizes and colors, and they all follow their own path around the Sun. Let's meet a few of our planet neighbors!",
          "visualPrompts": [
            "An animation of the solar system with all eight planets orbiting the Sun.",
            "Each planet is shown with a friendly, smiling face.",
            "As each planet's name is said, it wiggles and glows."
          ]
        },
        {
          "id": "prek-astro-l07-c2",
          "title": "A Few Planet Friends",
          "content": "First, let's visit Earth! This is our home. It's a beautiful blue and green planet with water, land, and lots of amazing animals and people. 🌍 Next is Mars. Mars is called the Red Planet because it's covered in reddish, rusty dust. 🔴 Now look at this one—it's Jupiter! Jupiter is the biggest planet of all. It's a giant, stormy planet. And here is Saturn. Saturn is famous for its beautiful rings. The rings are made of ice and rock, and they spin around the planet like a hula hoop! 🪐",
          "visualPrompts": [
            "The animation zooms in on a beautiful, spinning Earth.",
            "The animation moves to Mars, highlighting its red color.",
            "The animation shows Jupiter, emphasizing its huge size compared to Earth.",
            "The animation focuses on Saturn, with its sparkly rings spinning around it."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "prek-astro-l07-f1",
          "front": "Which planet is our home?",
          "back": "Earth! It's the beautiful blue and green one. 🌍"
        },
        {
          "id": "prek-astro-l07-f2",
          "front": "Which planet is called the Red Planet?",
          "back": "Mars! It's covered in red dust. 🔴"
        },
        {
          "id": "prek-astro-l07-f3",
          "front": "Which planet is the biggest?",
          "back": "Jupiter! It's a giant, stormy gas planet."
        },
        {
          "id": "prek-astro-l07-f4",
          "front": "Which planet has beautiful rings?",
          "back": "Saturn! The rings are made of ice and rock. 🪐"
        }
      ],
      "questions": [
        {
          "id": "prek-astro-l07-q1",
          "text": "Which planet is famous for its beautiful rings?",
          "options": [
            {
              "id": "a",
              "text": "Mars"
            },
            {
              "id": "b",
              "text": "Earth"
            },
            {
              "id": "c",
              "text": "Saturn"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Saturn is famous for its gorgeous rings made of ice and rock!"
        },
        {
          "id": "prek-astro-l07-q2",
          "text": "Our home, the blue and green planet, is called...",
          "options": [
            {
              "id": "a",
              "text": "Jupiter"
            },
            {
              "id": "b",
              "text": "Earth"
            },
            {
              "id": "c",
              "text": "Mars"
            }
          ],
          "correctOptionId": "b",
          "explanation": "We live on the beautiful planet Earth!"
        }
      ],
      "learningAids": [
        {
          "id": "prek-astro-l07-a1",
          "type": "song",
          "title": "The Planet Song",
          "content": "Sing a simple song about the planets to help remember their names and a fun fact about each."
        }
      ]
    },
    {
      "id": "prek-astro-l08",
      "title": "Planet Sort: Small or Giant?",
      "type": "interactive",
      "duration": 10,
      "objectives": [
        "Sort the eight planets into two groups: small and rocky or big and gassy.",
        "Recall which planets are inner vs. outer."
      ],
      "interactiveActivities": [
        {
          "id": "prek-astro-l08-ia1",
          "type": "sorting_buckets",
          "title": "Small Planet or Giant Planet?",
          "description": "Drag each planet into the right group!",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "rocky",
                "label": "Small & Rocky"
              },
              {
                "id": "gas",
                "label": "Big & Gassy"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Mercury",
                "correctBucketId": "rocky"
              },
              {
                "id": "i2",
                "label": "Venus",
                "correctBucketId": "rocky"
              },
              {
                "id": "i3",
                "label": "Earth",
                "correctBucketId": "rocky"
              },
              {
                "id": "i4",
                "label": "Mars",
                "correctBucketId": "rocky"
              },
              {
                "id": "i5",
                "label": "Jupiter",
                "correctBucketId": "gas"
              },
              {
                "id": "i6",
                "label": "Saturn",
                "correctBucketId": "gas"
              },
              {
                "id": "i7",
                "label": "Uranus",
                "correctBucketId": "gas"
              },
              {
                "id": "i8",
                "label": "Neptune",
                "correctBucketId": "gas"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "prek-astro-l09",
      "title": "Astronauts: Space Explorers!",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Describe what an astronaut does.",
        "Explain that astronauts float in space because there is very little gravity.",
        "Name one thing astronauts need to survive in space."
      ],
      "chunks": [
        {
          "id": "prek-astro-l09-c1",
          "title": "What is an Astronaut?",
          "content": "Who flies in rockets and explores space? Astronauts! 🧑‍🚀 Astronauts are brave explorers who travel far away from Earth. They live and work in a special house that floats in space called a space station. On the space station, they do important science experiments to help us learn more about our amazing universe. Some astronauts have even walked on the Moon!",
          "visualPrompts": [
            "Animation of a friendly astronaut waving from inside a rocket.",
            "The rocket docks with the International Space Station (ISS).",
            "The astronaut is shown inside the ISS, looking at plants growing in a special container."
          ]
        },
        {
          "id": "prek-astro-l09-c2",
          "title": "Floating is Fun!",
          "content": "One of the coolest things about being in space is that you can float! Astronauts float around inside their space station. Their food floats, their tools float, and even their drinks float in little bubbles! 🫧 This happens because in space, there is almost no gravity to hold you down. To keep from floating away when they sleep, astronauts have to snuggle into special sleeping bags attached to the wall. How silly is that?",
          "visualPrompts": [
            "Fun animation of an astronaut doing a slow-motion somersault inside the space station.",
            "An astronaut chases a floating blob of orange juice.",
            "An astronaut zips into a sleeping bag that is attached to a wall."
          ]
        },
        {
          "id": "prek-astro-l09-c3",
          "title": "What to Pack for Space",
          "content": "You can't just open the door and go outside in space. There is no air to breathe! So when astronauts go for a 'spacewalk' outside, they have to wear a special spacesuit. A spacesuit is like your very own mini-spaceship. It gives the astronaut air to breathe, keeps them warm, and protects them from the Sun's bright light. It has a helmet to see out of and gloves for working. It's the perfect outfit for a space explorer!",
          "visualPrompts": [
            "An astronaut is shown inside the space station, looking out a window at empty space.",
            "Animation shows the different parts of a spacesuit being put on a cartoon astronaut.",
            "The fully-suited astronaut floats outside the space station, waving."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "prek-astro-l09-f1",
          "front": "Why do astronauts float in space?",
          "back": "Because there is almost no gravity to hold them down! 🫧"
        },
        {
          "id": "prek-astro-l09-f2",
          "front": "What is a spacesuit?",
          "back": "A special suit that gives astronauts air and keeps them safe in space. 🧑‍🚀"
        },
        {
          "id": "prek-astro-l09-f3",
          "front": "Where do astronauts live and work in space?",
          "back": "On a space station!"
        }
      ],
      "questions": [
        {
          "id": "prek-astro-l09-q1",
          "text": "In space, astronauts...",
          "options": [
            {
              "id": "a",
              "text": "Walk on the ceiling"
            },
            {
              "id": "b",
              "text": "Float around"
            },
            {
              "id": "c",
              "text": "Swim in the air"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Because there is very little gravity, astronauts float around in their space station!"
        }
      ],
      "learningAids": [
        {
          "id": "prek-astro-l09-a1",
          "type": "activity",
          "title": "Build a Rocket Ship",
          "content": "Use a large cardboard box, paper plates, and crayons to build your own rocket ship and pretend to be an astronaut."
        }
      ]
    },
    {
      "id": "prek-astro-l10",
      "title": "Final Quiz: You're a Space Superstar!",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "prek-astro-l10-q1",
          "text": "The Sun is a giant, hot...",
          "options": [
            {
              "id": "a",
              "text": "Star"
            },
            {
              "id": "b",
              "text": "Planet"
            },
            {
              "id": "c",
              "text": "Rock"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The Sun is our very own star!"
        },
        {
          "id": "prek-astro-l10-q2",
          "text": "Why do we have day and night?",
          "options": [
            {
              "id": "a",
              "text": "The Sun turns on and off."
            },
            {
              "id": "b",
              "text": "The Earth spins around."
            },
            {
              "id": "c",
              "text": "The Moon covers the Sun."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Our Earth spins around, giving us daytime when we face the Sun and nighttime when we face away."
        },
        {
          "id": "prek-astro-l10-q3",
          "text": "A full, round Moon is called a...",
          "options": [
            {
              "id": "a",
              "text": "New Moon"
            },
            {
              "id": "b",
              "text": "Crescent Moon"
            },
            {
              "id": "c",
              "text": "Full Moon"
            }
          ],
          "correctOptionId": "c",
          "explanation": "When we see the Moon's whole bright face, it is a Full Moon! 🌕"
        },
        {
          "id": "prek-astro-l10-q4",
          "text": "Stars look tiny because they are...",
          "options": [
            {
              "id": "a",
              "text": "Baby suns"
            },
            {
              "id": "b",
              "text": "Very, very far away"
            },
            {
              "id": "c",
              "text": "Hiding behind clouds"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Stars are giant suns — they just look tiny because they are incredibly far away!"
        },
        {
          "id": "prek-astro-l10-q5",
          "text": "Which planet is famous for its rings?",
          "options": [
            {
              "id": "a",
              "text": "Earth"
            },
            {
              "id": "b",
              "text": "Saturn"
            },
            {
              "id": "c",
              "text": "Mars"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Saturn is famous for its beautiful rings made of ice and rock!"
        },
        {
          "id": "prek-astro-l10-q6",
          "text": "Why do astronauts wear a special spacesuit?",
          "options": [
            {
              "id": "a",
              "text": "Because it looks cool"
            },
            {
              "id": "b",
              "text": "To give them air and keep them safe"
            },
            {
              "id": "c",
              "text": "So they can fly faster"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A spacesuit gives an astronaut air to breathe and protects them in space!"
        }
      ]
    },
    {
      "id": "prek-astro-l11",
      "title": "Keep Looking Up!",
      "type": "video",
      "duration": 5,
      "objectives": [
        "Review the main topics: Sun, Earth's spin, Moon, stars, planets, and astronauts.",
        "Encourage continued curiosity about the sky and space."
      ],
      "chunks": [
        {
          "id": "prek-astro-l11-c1",
          "title": "You're a Space Superstar!",
          "content": "Wow, you did it! You are now an official Sky and Space Explorer! You learned that the Sun is our daytime star, that our Earth is always spinning, and that the Moon has many different faces. You know that stars are faraway suns, you've met our planet family, and you know all about brave astronauts. The universe is a huge and wonderful place with so much to discover. So remember to always be curious, ask big questions, and never stop looking up! Goodbye for now, space superstars!",
          "visualPrompts": [
            "A fun, upbeat montage of clips and animations from all the previous lessons.",
            "The friendly host character appears and gives a thumbs-up.",
            "A certificate appears on screen that says 'Official Sky & Space Explorer' with the child's name.",
            "The animated rocket ship from the first lesson waves goodbye and flies off across the screen."
          ]
        }
      ],
      "learningAids": [
        {
          "id": "prek-astro-l11-a1",
          "type": "printable",
          "title": "Space Explorer Certificate",
          "content": "A printable certificate to celebrate completing the module."
        }
      ]
    }
  ]
};
