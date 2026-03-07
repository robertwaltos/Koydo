import type { LearningModule } from "@/lib/modules/types";

export const science_101_Module: LearningModule = {
  "id": "science-101",
  "title": "Our Solar System",
  "description": "Explore the planets, their amazing journeys around the Sun, and other wonders of our solar system through fun videos and activities.",
  "subject": "Science",
  "tags": [
    "space",
    "astronomy",
    "planets"
  ],
  "minAge": 6,
  "maxAge": 12,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-rocket.svg",
  "learningObjectives": [
    "Identify key features of the inner and outer planets",
    "Explain how the Sun's gravity keeps planets in their paths (orbits)",
    "Use evidence to compare what it's like on different planets and moons",
    "Classify objects as planets, dwarf planets, or small bodies",
    "Describe the role of gravity in our solar system"
  ],
  "lessons": [
    {
      "id": "s101-l01",
      "title": "The Sun and Inner Planets",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Describe the Sun as the center of the solar system and its source of energy",
        "Name the four inner planets and list one key feature of each",
        "Explain why the inner planets are called 'rocky' or 'terrestrial' planets"
      ],
      "chunks": [
        {
          "id": "s101-l01-c1",
          "title": "The Sun: Our Star",
          "content": "The Sun is a star, and it’s the heart of our solar system! Imagine a giant, glowing ball of super-hot gas. The Sun makes a huge amount of energy by smashing tiny particles together in its center. This process, called nuclear fusion, creates all the light and heat that travels to Earth. The Sun is so big and heavy that its powerful gravity acts like an invisible string, holding all eight planets in their paths as they travel around it. Without the Sun, Earth would be a dark, frozen world. It takes about 8 minutes for the Sun's light to reach us here on Earth, which shows you just how far away it is!",
          "visualPrompt": "Animation of the Sun as a giant, swirling ball of hot gas. Show lines representing gravity pulling the planets, keeping them in orbit."
        },
        {
          "id": "s101-l01-c2",
          "title": "Mercury and Venus",
          "content": "Let's visit the two planets closest to the Sun! First is Mercury, the smallest planet in our solar system. It has no atmosphere to trap heat, so it gets incredibly hot during the day and freezing cold at night. Next is Venus, the hottest planet of all. Its thick, cloudy atmosphere traps the Sun's heat like a blanket, making its surface hot enough to melt lead! Venus is sometimes called Earth's 'sister planet' because they are about the same size, but they are very different worlds. While Earth is just right for life, Venus has a crushing atmosphere and clouds of acid.",
          "visualPrompt": "Side-by-side comparison showing Mercury's cratered, rocky surface and Venus's thick, swirling yellow clouds."
        },
        {
          "id": "s101-l01-c3",
          "title": "Earth and Mars",
          "content": "Earth, our home, is the third planet from the Sun. It's a special place because it's the only planet we know of with liquid water on its surface and an atmosphere with plenty of oxygen for us to breathe. These are the perfect ingredients for life! Next door is Mars, the fourth planet. It's known as the 'Red Planet' because of the rusty dust covering its surface. Mars is very cold and has a thin atmosphere, but scientists have found evidence that water once flowed there. It's also home to the tallest volcano in the solar system, Olympus Mons, which is three times taller than Mount Everest!",
          "visualPrompt": "An animation showing Earth as a vibrant blue and green marble, then panning over to Mars, highlighting its reddish, dusty landscape and giant volcano."
        }
      ],
      "flashcards": [
        {
          "id": "s101-l01-f1",
          "front": "What powers the Sun?",
          "back": "Nuclear fusion: A process where the Sun smashes tiny particles together, releasing huge amounts of energy as light and heat."
        },
        {
          "id": "s101-l01-f2",
          "front": "Why is Venus hotter than Mercury?",
          "back": "Venus has a thick atmosphere that traps heat like a blanket (the greenhouse effect), while tiny Mercury has almost no atmosphere."
        },
        {
          "id": "s101-l01-f3",
          "front": "Why is Mars called the Red Planet?",
          "back": "Its surface is covered in iron oxide, which is a type of rust, giving it a reddish color."
        },
        {
          "id": "s101-l01-f4",
          "front": "What is a terrestrial planet?",
          "back": "A planet with a solid, rocky surface. Mercury, Venus, Earth, and Mars are the four terrestrial planets."
        }
      ],
      "learningAids": [
        {
          "id": "s101-l01-a1",
          "type": "image",
          "title": "The Inner Planets",
          "content": "A diagram showing the Sun and the four inner planets in order, with a key fact bubble for each."
        }
      ]
    },
    {
      "id": "s101-l02",
      "title": "Interactive: Planet Size Sort",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Compare the sizes of the planets",
        "Group planets by their composition: rocky versus gas/ice giant",
        "Identify at least one unique fact about each inner planet"
      ],
      "chunks": [
        {
          "id": "s101-l02-c1",
          "title": "Comparing Planet Sizes",
          "content": "The planets in our solar system come in all different sizes! The biggest is Jupiter—it's so huge that all the other seven planets could fit inside it. Saturn is the second largest, followed by Uranus and Neptune. These four giant planets are in the outer solar system. The four inner planets are much smaller. Earth is the biggest of the inner planets, followed by Venus, then Mars, and finally tiny Mercury, the smallest of all. Understanding their sizes helps us group them into two main families: the small, rocky worlds and the giant, gassy worlds.",
          "visualPrompt": "An animation showing all eight planets lined up from largest (Jupiter) to smallest (Mercury) to show the dramatic size differences."
        },
        {
          "id": "s101-l02-c2",
          "title": "Rocky vs. Gas and Ice Giants",
          "content": "The two families of planets are very different. The inner planets—Mercury, Venus, Earth, and Mars—are called rocky or terrestrial planets. They have solid ground you could stand on, made of rock and metal. The outer planets are called giants. Jupiter and Saturn are gas giants, made mostly of hydrogen and helium gas, like the Sun. They don't have a solid surface to land on! Uranus and Neptune are called ice giants. They are also made of gas but contain more icy materials, like frozen water, which gives them their cool blue colors.",
          "visualPrompt": "A split-screen animation. On one side, a cutaway of Earth shows a solid core and rocky crust. On the other, a cutaway of Jupiter shows swirling gas layers all the way down."
        },
        {
          "id": "s101-l02-c3",
          "title": "What Planet Features Tell Us",
          "content": "A planet's features, like its size and what it's made of, tell us a story about where it lives in the solar system. The small, rocky planets are all close to the Sun's heat. The giant gas and ice planets are all in the cold, outer regions, far from the Sun. Separating these two groups is a huge ring of space rocks called the asteroid belt. By sorting planets based on their features, we can understand the patterns of our solar system, just like real scientists do when they explore space!",
          "visualPrompt": "A simple map of the solar system showing the Sun, the four inner planets, the asteroid belt, and the four outer planets to illustrate the pattern."
        }
      ],
      "interactiveActivities": [
        {
          "id": "s101-l02-ia1",
          "type": "sorting_buckets",
          "title": "Planet Type Sort",
          "description": "Sort planets by what they're made of and compare their relative sizes.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "instructions": [
            "Read each planet card.",
            "Drag it into the 'Rocky Planet' or 'Gas/Ice Giant' bucket.",
            "After you submit, check the hints to see how they rank in size!"
          ],
          "data": {
            "buckets": [
              {
                "id": "rocky",
                "label": "Rocky Planet"
              },
              {
                "id": "giant",
                "label": "Gas or Ice Giant"
              }
            ],
            "items": [
              {
                "id": "mercury",
                "label": "Mercury",
                "correctBucketId": "rocky"
              },
              {
                "id": "venus",
                "label": "Venus",
                "correctBucketId": "rocky"
              },
              {
                "id": "earth",
                "label": "Earth",
                "correctBucketId": "rocky"
              },
              {
                "id": "mars",
                "label": "Mars",
                "correctBucketId": "rocky"
              },
              {
                "id": "jupiter",
                "label": "Jupiter",
                "correctBucketId": "giant"
              },
              {
                "id": "saturn",
                "label": "Saturn",
                "correctBucketId": "giant"
              },
              {
                "id": "uranus",
                "label": "Uranus",
                "correctBucketId": "giant"
              },
              {
                "id": "neptune",
                "label": "Neptune",
                "correctBucketId": "giant"
              }
            ]
          }
        }
      ],
      "flashcards": [
        {
          "id": "s101-l02-f1",
          "front": "Which is the largest planet?",
          "back": "Jupiter. It's so big that all the other planets in the solar system could fit inside it!"
        },
        {
          "id": "s101-l02-f2",
          "front": "What is a gas giant?",
          "back": "A giant planet made mostly of hydrogen and helium gas. Jupiter and Saturn are gas giants."
        },
        {
          "id": "s101-l02-f3",
          "front": "What is an ice giant?",
          "back": "A giant planet made of gas and icy materials like water and methane. Uranus and Neptune are ice giants."
        },
        {
          "id": "s101-l02-f4",
          "front": "What is Jupiter's Great Red Spot?",
          "back": "A giant, swirling storm on Jupiter that is bigger than planet Earth and has been raging for hundreds of years."
        }
      ],
      "learningAids": [
        {
          "id": "s101-l02-a1",
          "type": "practice",
          "title": "Think Like a Scientist",
          "content": "Use a checklist to compare two planets: 1. Is it rocky or gassy? 2. Is it big or small? 3. Is it close to the Sun or far away?"
        }
      ]
    },
    {
      "id": "s101-l03",
      "title": "Inner Planets Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate understanding of the Sun, inner planets, and planet classification"
      ],
      "questions": [
        {
          "id": "s101-l03-q1",
          "text": "Which planet is known as the Red Planet?",
          "skillId": "planet-identification",
          "options": [
            {
              "id": "a",
              "text": "Mars"
            },
            {
              "id": "b",
              "text": "Venus"
            },
            {
              "id": "c",
              "text": "Jupiter"
            },
            {
              "id": "d",
              "text": "Saturn"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Mars is called the Red Planet because rusty dust on its surface gives it a reddish color."
        },
        {
          "id": "s101-l03-q2",
          "text": "Which inner planet is the hottest because of its thick, heat-trapping atmosphere?",
          "skillId": "planet-comparison",
          "options": [
            {
              "id": "a",
              "text": "Mercury"
            },
            {
              "id": "b",
              "text": "Venus"
            },
            {
              "id": "c",
              "text": "Earth"
            },
            {
              "id": "d",
              "text": "Mars"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Venus has a thick atmosphere that traps heat through the greenhouse effect, making it the hottest planet—even hotter than Mercury."
        },
        {
          "id": "s101-l03-q3",
          "text": "What do all the inner planets have in common?",
          "skillId": "planet-classification",
          "options": [
            {
              "id": "a",
              "text": "They are rocky planets with solid surfaces."
            },
            {
              "id": "b",
              "text": "They all have rings."
            },
            {
              "id": "c",
              "text": "They are all gas giants."
            },
            {
              "id": "d",
              "text": "They are all colder than Earth."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Mercury, Venus, Earth, and Mars are all terrestrial (rocky) planets with solid surfaces made of rock and metal."
        },
        {
          "id": "s101-l03-q4",
          "text": "What is the main source of light and heat for our solar system?",
          "skillId": "sun-concepts",
          "options": [
            {
              "id": "a",
              "text": "The Moon"
            },
            {
              "id": "b",
              "text": "The asteroid belt"
            },
            {
              "id": "c",
              "text": "The Sun"
            },
            {
              "id": "d",
              "text": "Earth's core"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The Sun is a star that produces energy, and its gravity holds the entire solar system together."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 2
        }
      },
      "learningAids": [
        {
          "id": "s101-l03-a1",
          "type": "mnemonic",
          "title": "Quiz Tip: Read and Reason",
          "content": "Read each question carefully. Think about what you learned about the inner planets. Choose the best answer and remember why it's correct!"
        }
      ]
    },
    {
      "id": "s101-l04",
      "title": "The Outer Planets",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Name the four outer planets and describe their main features",
        "Explain the difference between gas giants and ice giants",
        "Identify notable moons and ring systems"
      ],
      "chunks": [
        {
          "id": "s101-l04-c1",
          "title": "Jupiter and Saturn: The Gas Giants",
          "content": "Let's fly out to the gas giants! Jupiter, the biggest planet, is famous for its colorful stripes of swirling clouds and its Great Red Spot, a storm larger than Earth. Jupiter has more than 90 moons! One of its moons, Europa, is covered in ice, and scientists think there might be a liquid water ocean underneath. Next is Saturn, famous for its spectacular rings. These rings aren't solid; they're made of billions of pieces of ice and rock, from tiny specks to chunks as big as a house! Saturn's largest moon, Titan, is also special because it has a thick atmosphere and lakes of liquid methane.",
          "visualPrompt": "An animation flying past Jupiter, showing the scale of the Great Red Spot. Then, fly through Saturn's rings to show they are made of individual particles."
        },
        {
          "id": "s101-l04-c2",
          "title": "Uranus and Neptune: The Ice Giants",
          "content": "Farthest from the Sun are the two ice giants. Uranus is a beautiful pale blue-green color. What's really strange about Uranus is that it's tipped over and spins on its side! Scientists think something huge may have knocked it over long ago. The last planet is windy Neptune, which is a deep, rich blue. It has the fastest winds in the solar system, whipping around the planet at super-high speeds. Neptune's largest moon, Triton, is also unique because it orbits the planet backward, in the opposite direction that Neptune spins.",
          "visualPrompt": "An animation showing Uranus rotating on its side compared to other planets. Then, show clouds whipping across Neptune's surface at high speed."
        },
        {
          "id": "s101-l04-c3",
          "title": "Why Outer Planets Are So Different",
          "content": "Why are the outer planets so different from the inner ones? It's all about where they formed. In the cold, outer part of the solar system, it was easy for lightweight gases and ices to clump together, forming giant planets. Because these planets grew so large, their powerful gravity allowed them to capture many moons and form ring systems. Being so far from the Sun also means they are incredibly cold. Neptune, the farthest planet, gets 900 times less sunlight than Earth does! The asteroid belt between Mars and Jupiter marks the dividing line between the warm, rocky inner worlds and the cold, giant outer worlds.",
          "visualPrompt": "An animation of the early solar system. Show rocks clumping together near the Sun, while gas and ice clump together in the colder regions far from the Sun."
        }
      ],
      "flashcards": [
        {
          "id": "s101-l04-f1",
          "front": "What are Saturn's rings made of?",
          "back": "Billions of pieces of ice and rock, ranging from tiny grains to boulders as big as a house."
        },
        {
          "id": "s101-l04-f2",
          "front": "What's strange about how Uranus spins?",
          "back": "It's tilted on its side and spins like a rolling ball, likely because a huge object crashed into it long ago."
        },
        {
          "id": "s101-l04-f3",
          "front": "What is special about Jupiter's moon Europa?",
          "back": "It's covered in ice, and scientists believe there is a huge ocean of liquid water underneath, making it a good place to search for life."
        },
        {
          "id": "s101-l04-f4",
          "front": "Why are the outer planets so big?",
          "back": "They formed far from the Sun where it was cold enough for huge amounts of ice and gas to gather into giant planets."
        }
      ],
      "learningAids": [
        {
          "id": "s101-l04-a1",
          "type": "image",
          "title": "The Giant Planets",
          "content": "A diagram showing the four outer planets, highlighting a key feature of each (Jupiter's spot, Saturn's rings, Uranus's tilt, Neptune's deep blue color)."
        }
      ]
    },
    {
      "id": "s101-l05",
      "title": "Interactive: Orbit Simulator",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Explain how gravity keeps planets in orbit around the Sun",
        "Compare the time it takes inner and outer planets to orbit the Sun",
        "Predict how changing a planet's distance from the Sun affects its speed"
      ],
      "chunks": [
        {
          "id": "s101-l05-c1",
          "title": "What is an Orbit?",
          "content": "An orbit is the curved path an object in space takes around another one. In our solar system, the planets are always moving forward, but the Sun's powerful gravity is always pulling them inward. Think of swinging a ball on a string around your head. The string keeps the ball from flying away. The Sun's gravity is like an invisible string that keeps the planets traveling in a circle around it. This perfect balance between moving forward and being pulled inward is what creates a stable orbit and keeps our solar system together.",
          "visualPrompt": "Simple animation of a ball being swung on a string. Then, replace the person with the Sun and the ball with a planet, showing gravity as the string."
        },
        {
          "id": "s101-l05-c2",
          "title": "Orbital Speed and Period",
          "content": "Planets move at different speeds depending on how close they are to the Sun. The closer a planet is, the stronger the Sun's gravity pulls on it, and the faster it has to move to stay in orbit. Mercury zips around the Sun in just 88 Earth days! The time it takes to complete one orbit is called the orbital period, or a 'year.' Planets farther from the Sun have a weaker pull of gravity, so they move more slowly along their much larger paths. Faraway Neptune takes 165 Earth years to make just one trip around the Sun. That's a very long year!",
          "visualPrompt": "An animation showing two orbital paths. A small inner planet (Mercury) zips around quickly, while a large outer planet (Neptune) moves very slowly along its path."
        },
        {
          "id": "s101-l05-c3",
          "title": "Exploring Orbits with a Simulation",
          "content": "Now it's your turn to be a space scientist! In this simulation, you can change a planet's distance from the Sun and see what happens. Watch how the planet speeds up when you move it closer and slows down when you move it farther away. You'll also see how its 'year' gets shorter or longer. Understanding these rules of motion is exactly what NASA scientists do when they plan missions to send spacecraft to explore other planets. Have fun experimenting with the laws that run our solar system!",
          "visualPrompt": "A preview of the interactive simulation, showing a user dragging a planet's orbit closer to the Sun and watching the 'orbital speed' number go up."
        }
      ],
      "interactiveActivities": [
        {
          "id": "s101-l05-ia1",
          "type": "simulation",
          "title": "Orbit Speed Sandbox",
          "description": "Adjust a planet's distance from the Sun and see how its speed and year change.",
          "estimatedMinutes": 10,
          "difficultyLevel": "medium",
          "instructions": [
            "Choose a planet to start with.",
            "Use the slider to change its distance from the Sun.",
            "Watch the chart to see how its speed and year (orbital period) change."
          ],
          "data": {
            "controls": [
              "distance",
              "massProfile"
            ],
            "outputs": [
              "orbitalSpeed",
              "orbitalPeriod"
            ],
            "presets": [
              "innerOrbit",
              "earthLikeOrbit",
              "outerOrbit"
            ]
          }
        }
      ],
      "flashcards": [
        {
          "id": "s101-l05-f1",
          "front": "What is an orbit?",
          "back": "The curved path an object takes around another due to gravity. For example, planets orbit the Sun."
        },
        {
          "id": "s101-l05-f2",
          "front": "What is an orbital period?",
          "back": "The time it takes for a planet to complete one full trip around the Sun. Earth's orbital period is one year (365.25 days)."
        },
        {
          "id": "s101-l05-f3",
          "front": "What is the pattern for orbital speed?",
          "back": "Planets closer to the Sun orbit faster, while planets farther from the Sun orbit more slowly."
        },
        {
          "id": "s101-l05-f4",
          "front": "Which planet has the shortest year?",
          "back": "Mercury. It's the closest planet to the Sun, so it orbits the fastest, taking only 88 Earth days."
        }
      ],
      "learningAids": [
        {
          "id": "s101-l05-a1",
          "type": "practice",
          "title": "Orbit Explorer's Log",
          "content": "As you use the simulation, write down your observations. What happens to the speed when you move the planet closer? What happens to the year length?"
        }
      ]
    },
    {
      "id": "s101-l06",
      "title": "Outer Planets & Orbits Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate understanding of outer planets, orbits, and gravitational patterns"
      ],
      "questions": [
        {
          "id": "s101-l06-q1",
          "text": "Which planet is the largest in our solar system?",
          "skillId": "planet-comparison",
          "options": [
            {
              "id": "a",
              "text": "Jupiter"
            },
            {
              "id": "b",
              "text": "Saturn"
            },
            {
              "id": "c",
              "text": "Earth"
            },
            {
              "id": "d",
              "text": "Neptune"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Jupiter is so massive that all the other planets could fit inside it, making it by far the largest planet."
        },
        {
          "id": "s101-l06-q2",
          "text": "Which planet is famous for its bright, beautiful ring system?",
          "skillId": "planet-identification",
          "options": [
            {
              "id": "a",
              "text": "Uranus"
            },
            {
              "id": "b",
              "text": "Saturn"
            },
            {
              "id": "c",
              "text": "Venus"
            },
            {
              "id": "d",
              "text": "Mars"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Saturn has the most spectacular ring system, made of billions of pieces of ice and rock."
        },
        {
          "id": "s101-l06-q3",
          "text": "What is the main force that keeps planets in orbit around the Sun?",
          "skillId": "orbit-concepts",
          "options": [
            {
              "id": "a",
              "text": "Magnetism"
            },
            {
              "id": "b",
              "text": "The Sun's gravity"
            },
            {
              "id": "c",
              "text": "Solar wind"
            },
            {
              "id": "d",
              "text": "The planets' speed"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The Sun's enormous gravitational pull keeps all planets following their orbital paths instead of flying off into space."
        },
        {
          "id": "s101-l06-q4",
          "text": "A planet that is very far from the Sun will have a...",
          "skillId": "orbit-concepts",
          "options": [
            {
              "id": "a",
              "text": "shorter year than Earth."
            },
            {
              "id": "b",
              "text": "faster orbital speed than Earth."
            },
            {
              "id": "c",
              "text": "longer year than Earth."
            },
            {
              "id": "d",
              "text": "year that is the same as Earth's."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Planets that are farther from the Sun move more slowly and have much longer paths to travel, resulting in longer orbital periods (years)."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 2,
          "apply": 1
        }
      }
    },
    {
      "id": "s101-l07",
      "title": "Dwarf Planets and Small Bodies",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Define 'dwarf planet' and explain how it differs from a planet",
        "Describe the asteroid belt and the Kuiper Belt",
        "Identify comets and explain what causes their tails"
      ],
      "chunks": [
        {
          "id": "s101-l07-c1",
          "title": "What is a Dwarf Planet?",
          "content": "Besides the eight planets, our solar system has other smaller, round worlds called dwarf planets. To be a dwarf planet, an object must orbit the Sun and be big enough for its own gravity to make it round. But there's one key difference: a dwarf planet hasn't 'cleared its neighborhood.' This means it shares its orbital path with lots of other asteroids and icy objects. The most famous dwarf planet is Pluto. For a long time, we called it the ninth planet, but scientists reclassified it in 2006 once they discovered it shares its space with many other objects in a region called the Kuiper Belt.",
          "visualPrompt": "An animation comparing two orbits. One shows Earth's orbit, which is clear of debris. The other shows Pluto's orbit, which is full of other small, icy objects."
        },
        {
          "id": "s101-l07-c2",
          "title": "Asteroids and the Asteroid Belt",
          "content": "Asteroids are space rocks, much smaller than planets, that also orbit the Sun. Most of them are found in the asteroid belt, a wide, donut-shaped region between the orbits of Mars and Jupiter. There are millions of asteroids here, but space is so big that they are very far apart. Scientists love studying asteroids because they are leftover building blocks from when our solar system first formed over 4 billion years ago. They are like rocky time capsules that can teach us about the history of the planets.",
          "visualPrompt": "A map of the inner solar system showing the wide, sparse ring of the asteroid belt located between the orbits of Mars and Jupiter."
        },
        {
          "id": "s101-l07-c3",
          "title": "Comets and the Kuiper Belt",
          "content": "Comets are like giant, icy snowballs that orbit the Sun. Most of them live in the far, cold edges of the solar system, in a place called the Kuiper Belt (where Pluto is) or even farther out. When a comet's orbit brings it close to the Sun, the heat makes its ice turn into gas and dust. This material streams away from the comet, creating a beautiful, glowing tail that can stretch for millions of miles. The tail is pushed by the solar wind, so it always points away from the Sun, no matter which way the comet is traveling!",
          "visualPrompt": "An animation of a comet approaching the Sun. As it gets closer, a bright tail forms and grows, always pointing directly away from the Sun."
        }
      ],
      "flashcards": [
        {
          "id": "s101-l07-f1",
          "front": "What is a dwarf planet?",
          "back": "A round object that orbits the Sun but shares its orbital path with other objects. Examples include Pluto and Ceres."
        },
        {
          "id": "s101-l07-f2",
          "front": "Where is the asteroid belt?",
          "back": "A wide ring of millions of rocky asteroids located between the orbits of Mars and Jupiter."
        },
        {
          "id": "s101-l07-f3",
          "front": "Why do comets have tails?",
          "back": "When a comet gets near the Sun, its ice turns to gas and dust. This material is pushed away by the solar wind, forming a glowing tail."
        },
        {
          "id": "s101-l07-f4",
          "front": "What is the Kuiper Belt?",
          "back": "A ring of icy objects beyond Neptune's orbit. It's home to dwarf planets like Pluto and many comets."
        }
      ]
    },
    {
      "id": "s101-l08",
      "title": "Interactive: Comparing Worlds",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Compare the environments of different solar system bodies using evidence",
        "Explain how distance from the Sun affects surface conditions",
        "Evaluate which places might be good targets to search for life"
      ],
      "chunks": [
        {
          "id": "s101-l08-c1",
          "title": "Surface Conditions Across the Solar System",
          "content": "What would it be like to stand on another world? It depends! On Mercury, you'd bake in the day and freeze at night. On Venus, you'd be crushed and melted by the thick, hot atmosphere. Earth is the only place with comfortable temperatures and liquid water. Mars is a freezing, dusty desert. And if you tried to land on Jupiter or Saturn, you couldn't! They are gas giants with no solid surface, just thicker and thicker layers of swirling gas. A world's distance from the Sun and its atmosphere are the two main things that decide what its surface is like.",
          "visualPrompt": "A split screen showing four different planetary surfaces: Mercury's craters, Venus's cloudy sky, Earth's oceans, and Mars's red rocks."
        },
        {
          "id": "s101-l08-c2",
          "title": "Moons Worth Exploring",
          "content": "Some of the most exciting places to search for life aren't planets, but moons! Jupiter's moon Europa and Saturn's moon Enceladus are both covered in ice, but scientists are almost certain they have huge oceans of liquid water hidden underneath. Enceladus even sprays giant geysers of this water out into space! Another amazing moon is Titan, which orbits Saturn. It has a thick atmosphere and rivers and lakes, but they're filled with liquid methane, not water. These moons are top targets for future space missions to answer the big question: are we alone in the universe?",
          "visualPrompt": "An animation showing a cutaway of Europa, revealing a vast liquid ocean beneath its thick, icy crust."
        },
        {
          "id": "s101-l08-c3",
          "title": "Using Evidence to Compare Worlds",
          "content": "When scientists decide where to send a new rover or spacecraft, they compare different worlds using evidence. They look at data about temperature, atmosphere, and whether there are signs of water. Worlds with liquid water are always the most interesting candidates for supporting life. In this activity, you'll get to be a mission planner. You will look at the evidence for several worlds and decide which ones are the best targets for future exploration. This is how real science works—using what you know to make big decisions about where to explore next!",
          "visualPrompt": "A simple table or chart comparing Mars, Europa, and Titan. Columns could include 'Has Atmosphere?', 'Has Liquid Water?', and 'Temperature'."
        }
      ],
      "interactiveActivities": [
        {
          "id": "s101-l08-ia1",
          "type": "sorting_buckets",
          "title": "Exploration Targets Sort",
          "description": "Sort solar system bodies by their potential for future exploration based on the evidence.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the clue card for each world.",
            "Decide if it is a 'High-Priority' or 'Lower-Priority' target for exploration.",
            "Be ready to explain your reasoning after sorting!"
          ],
          "data": {
            "buckets": [
              {
                "id": "high",
                "label": "High-Priority Target"
              },
              {
                "id": "low",
                "label": "Lower-Priority Target"
              }
            ],
            "items": [
              {
                "id": "europa",
                "label": "Europa — has a likely ocean under its ice",
                "correctBucketId": "high"
              },
              {
                "id": "mars",
                "label": "Mars — shows evidence of ancient water",
                "correctBucketId": "high"
              },
              {
                "id": "enceladus",
                "label": "Enceladus — shoots water geysers into space",
                "correctBucketId": "high"
              },
              {
                "id": "titan",
                "label": "Titan — has a thick atmosphere and liquid methane lakes",
                "correctBucketId": "high"
              },
              {
                "id": "mercury",
                "label": "Mercury — no atmosphere, extreme temperatures",
                "correctBucketId": "low"
              },
              {
                "id": "venus",
                "label": "Venus — surface is hot enough to melt lead",
                "correctBucketId": "low"
              }
            ]
          }
        }
      ],
      "flashcards": [
        {
          "id": "s101-l08-f1",
          "front": "What is special about Europa?",
          "back": "It's a moon of Jupiter with a cracked icy surface that likely covers a global ocean of liquid water."
        },
        {
          "id": "s101-l08-f2",
          "front": "What is special about Enceladus?",
          "back": "It's a moon of Saturn that shoots geysers of water ice into space from an ocean hidden under its surface."
        },
        {
          "id": "s101-l08-f3",
          "front": "What is special about Titan?",
          "back": "It's Saturn's largest moon and has a thick atmosphere and lakes of liquid methane on its surface."
        },
        {
          "id": "s101-l08-f4",
          "front": "Why is finding liquid water so important?",
          "back": "All life as we know it requires liquid water, so places with water are the best candidates in the search for life beyond Earth."
        }
      ]
    },
    {
      "id": "s101-l09",
      "title": "Small Bodies & Comparison Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate knowledge of dwarf planets, small bodies, and evidence-based comparison"
      ],
      "questions": [
        {
          "id": "s101-l09-q1",
          "text": "What is the main difference between a planet and a dwarf planet?",
          "skillId": "planet-classification",
          "options": [
            {
              "id": "a",
              "text": "Dwarf planets are not round."
            },
            {
              "id": "b",
              "text": "Dwarf planets have not cleared their orbit of other objects."
            },
            {
              "id": "c",
              "text": "Dwarf planets do not orbit the Sun."
            },
            {
              "id": "d",
              "text": "Dwarf planets are always made of ice."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A dwarf planet orbits the Sun and is round, but unlike a planet, it has not cleared its orbital path of other objects."
        },
        {
          "id": "s101-l09-q2",
          "text": "What causes a comet to grow a glowing tail?",
          "skillId": "small-body-concepts",
          "options": [
            {
              "id": "a",
              "text": "It has rocket engines."
            },
            {
              "id": "b",
              "text": "Heat from the Sun turns its ice into gas and dust."
            },
            {
              "id": "c",
              "text": "It is on fire."
            },
            {
              "id": "d",
              "text": "It reflects light from Earth."
            }
          ],
          "correctOptionId": "b",
          "explanation": "As a comet approaches the Sun, solar heat vaporizes its ice, and the solar wind pushes the gas and dust into glowing tails."
        },
        {
          "id": "s101-l09-q3",
          "text": "Which moon is a top target for finding life because of its likely subsurface ocean?",
          "skillId": "exploration-concepts",
          "options": [
            {
              "id": "a",
              "text": "Earth's Moon"
            },
            {
              "id": "b",
              "text": "Europa"
            },
            {
              "id": "c",
              "text": "Titan"
            },
            {
              "id": "d",
              "text": "Phobos"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Europa, a moon of Jupiter, has a cracked icy surface that scientists believe covers a global liquid-water ocean—a possible habitat for life."
        },
        {
          "id": "s101-l09-q4",
          "text": "Where are most of the asteroids in our solar system found?",
          "skillId": "solar-system-geography",
          "options": [
            {
              "id": "a",
              "text": "Orbiting Earth"
            },
            {
              "id": "b",
              "text": "Beyond Neptune"
            },
            {
              "id": "c",
              "text": "In the asteroid belt between Mars and Jupiter"
            },
            {
              "id": "d",
              "text": "Between the Sun and Mercury"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The asteroid belt is a wide region of rocky debris located between the orbits of Mars and Jupiter."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 2,
          "apply": 1
        }
      }
    },
    {
      "id": "s101-l10",
      "title": "Mastery Quiz: Solar System Tour",
      "type": "quiz",
      "duration": 12,
      "objectives": [
        "Synthesize all solar-system concepts from the module"
      ],
      "questions": [
        {
          "id": "s101-l10-q1",
          "text": "Which statement best compares the inner and outer planets?",
          "skillId": "planet-classification",
          "options": [
            {
              "id": "a",
              "text": "Inner planets are small and rocky; outer planets are large gas or ice giants."
            },
            {
              "id": "b",
              "text": "Inner planets are cold and icy; outer planets are hot and rocky."
            },
            {
              "id": "c",
              "text": "All planets are the same size."
            },
            {
              "id": "d",
              "text": "Outer planets are closer to the Sun than inner planets."
            }
          ],
          "correctOptionId": "a",
          "explanation": "The inner planets (Mercury–Mars) are small and rocky, while the outer planets (Jupiter–Neptune) are much larger gas or ice giants."
        },
        {
          "id": "s101-l10-q2",
          "text": "Which planet is closest to the Sun and has the shortest year?",
          "skillId": "planet-identification",
          "options": [
            {
              "id": "a",
              "text": "Venus"
            },
            {
              "id": "b",
              "text": "Earth"
            },
            {
              "id": "c",
              "text": "Mercury"
            },
            {
              "id": "d",
              "text": "Mars"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Mercury orbits closest to the Sun, completing one orbit (or year) in just 88 Earth days."
        },
        {
          "id": "s101-l10-q3",
          "text": "Why do outer planets like Neptune have such long years?",
          "skillId": "orbit-concepts",
          "options": [
            {
              "id": "a",
              "text": "They are farther away, so their paths are much longer and they move more slowly."
            },
            {
              "id": "b",
              "text": "They often stop moving to save energy."
            },
            {
              "id": "c",
              "text": "They have less gravity."
            },
            {
              "id": "d",
              "text": "They spin backward."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Planets that are farther from the Sun have much longer orbital paths and move more slowly, so their years are much longer. Neptune takes 165 Earth years to orbit the Sun!"
        },
        {
          "id": "s101-l10-q4",
          "text": "Which of these is classified as a dwarf planet?",
          "skillId": "planet-classification",
          "options": [
            {
              "id": "a",
              "text": "Pluto"
            },
            {
              "id": "b",
              "text": "Earth"
            },
            {
              "id": "c",
              "text": "Jupiter"
            },
            {
              "id": "d",
              "text": "The Moon"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Pluto was reclassified as a dwarf planet in 2006 because it is round and orbits the Sun, but has not cleared its orbital path of other objects."
        },
        {
          "id": "s101-l10-q5",
          "text": "What are the two most important jobs of the Sun in our solar system?",
          "skillId": "sun-concepts",
          "options": [
            {
              "id": "a",
              "text": "Providing gravity to hold planets in orbit and energy for light and heat."
            },
            {
              "id": "b",
              "text": "Orbiting the Earth and creating the seasons."
            },
            {
              "id": "c",
              "text": "Being a rocky planet and having many moons."
            },
            {
              "id": "d",
              "text": "Pushing planets away and making them cold."
            }
          ],
          "correctOptionId": "a",
          "explanation": "The Sun's gravity keeps all planets in orbit, and its energy provides the light and heat that make life on Earth possible."
        },
        {
          "id": "s101-l10-q6",
          "text": "Scientists are most excited to explore Jupiter's moon Europa because it...",
          "skillId": "exploration-concepts",
          "options": [
            {
              "id": "a",
              "text": "has the tallest volcano in the solar system."
            },
            {
              "id": "b",
              "text": "may have a liquid water ocean beneath its icy surface."
            },
            {
              "id": "c",
              "text": "is the closest moon to Earth."
            },
            {
              "id": "d",
              "text": "has a thick oxygen atmosphere we could breathe."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Europa's cracked icy surface likely covers a global liquid-water ocean, making it one of the most promising places to search for life beyond Earth."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 6,
        "bloomProfile": {
          "remember": 1,
          "understand": 2,
          "apply": 2,
          "analyze": 1
        }
      }
    }
  ]
};
