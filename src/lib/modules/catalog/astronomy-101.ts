import type { LearningModule } from "@/lib/modules/types";

export const astronomy_101_Module: LearningModule = {
  "id": "astronomy-101",
  "title": "Astronomy: Exploring the Universe",
  "description": "Journey through our solar system, study the Sun and Moon, discover stars and constellations, explore galaxies, and learn about space exploration from ancient observers to modern missions.",
  "subject": "Astronomy",
  "tags": [
    "astronomy",
    "science",
    "interactive",
    "curriculum",
    "enriched-from-epub"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Name the eight planets in order from the Sun",
    "Describe the Sun's structure and importance to life on Earth",
    "Explain the Moon's phases and its role in tides",
    "Identify major constellations and understand how stars form",
    "Compare types of galaxies and locate the Milky Way",
    "Trace the history of space exploration from Sputnik to Mars rovers"
  ],
  "lessons": [
    {
      "id": "astronomy-101-l01",
      "title": "Our Solar System",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "A vibrant, highly detailed illustration of the eight planets of the solar system orbiting a glowing Sun against a starry cosmic background, educational style, 4k resolution.",
      "conceptVideoPrompt": "A cinematic 3D fly-through of the solar system, starting from the blazing Sun, passing the rocky inner planets, flying through the asteroid belt, and gliding past the massive gas giants, ending at the icy Kuiper belt.",
      "chunks": [
        {
          "id": "astronomy-101-l01-c1",
          "title": "The Sun and Inner Planets",
          "content": "In our incredible solar system, we have one shining star called the Sun, which provides light and warmth to all the planets that orbit around it. There are eight fascinating planets in total, and the four that are closest to the Sun are known as the inner planets or rocky planets. The first planet, Mercury, is the closest to the Sun. It has no atmosphere, which means it cannot hold heat or air, making it a very hot and dry place. Next is Venus, the second planet from the Sun. It is the hottest planet in our solar system, covered in thick clouds that trap heat like a blanket. Our home, Earth, is the third planet and the only one known to have liquid water, which is essential for all living things. Finally, we have Mars, often referred to as the Red Planet due to its reddish soil that contains iron. Mars is also famous for having Olympus Mons, the tallest volcano in our solar system, which stands much taller than any mountain on Earth!"
        },
        {
          "id": "astronomy-101-l01-c2",
          "title": "The Outer Planets",
          "content": "After we pass Mars, we come to the asteroid belt. This area is filled with many rocky pieces that are leftovers from when our solar system was forming a long time ago. Beyond the asteroid belt, we find the gas giants, which are much larger and quite different from the smaller, rocky inner planets. The first of these giants is Jupiter, and it is the biggest planet in our solar system! Jupiter is famous for its Great Red Spot, which is a gigantic storm that has been swirling for hundreds of years. Next, we have Saturn, which is well-known for its beautiful rings made of ice and rock. These rings are so wide and bright that they make Saturn one of the most stunning planets to look at in the night sky. Then there's Uranus, which is special because it spins on its side, almost like a rolling ball! Finally, we reach Neptune, a deep blue planet that has the strongest winds of all the planets, creating some really wild weather patterns."
        },
        {
          "id": "astronomy-101-l01-c3",
          "title": "Dwarf Planets and Beyond",
          "content": "In 2006, Pluto was reclassified as a dwarf planet, which means it is no longer counted among the main planets in our solar system. This change was made because Pluto does not meet all the criteria to be a full-sized planet. Along with Pluto, there are other fascinating dwarf planets like Eris and Ceres. These dwarf planets are unique and help scientists learn more about our solar system's history. Beyond Neptune, we find the Kuiper Belt, a mysterious region filled with icy objects and leftover materials from when our solar system was formed. Even further out is the Oort Cloud, which is believed to stretch trillions of miles from the Sun. This cloud is thought to be the source of long-period comets that occasionally travel into the inner solar system, providing us with spectacular sights in the night sky."
        },
        {
          "id": "astronomy-101-l01-c4",
          "title": "The Cosmic Perspective on Our Solar System",
          "content": "The famous astronomer Carl Sagan once described our solar system as a small neighborhood in the vast cosmic ocean. This idea helps us understand just how tiny and special our home, Earth, really is. He called Earth a 'pale blue dot,' which reminds us that we are a small planet orbiting a medium-sized star, located in the outskirts of the Milky Way galaxy. Another well-known astronomer, Neil deGrasse Tyson, introduced a fascinating idea called the 'Goldilocks zone.' This is the perfect area around a star where conditions are just right for liquid water to exist. In our solar system, Venus is too hot for water to stay liquid, and Mars is too cold. However, Earth is located in this ideal Goldilocks zone, where temperatures are just right, allowing life to thrive. By learning about our cosmic address, we can better appreciate how special and fragile our place in the universe truly is."
        }
      ],
      "flashcards": [
        {
          "id": "astronomy-101-l01-f1",
          "front": "The four rocky inner planets in order",
          "back": "Mercury, Venus, Earth, Mars"
        },
        {
          "id": "astronomy-101-l01-f2",
          "front": "Planet with the Great Red Spot",
          "back": "Jupiter"
        },
        {
          "id": "astronomy-101-l01-f3",
          "front": "Planet famous for its icy rings",
          "back": "Saturn"
        },
        {
          "id": "astronomy-101-l01-f4",
          "front": "Why Pluto is no longer a full planet (since 2006)",
          "back": "Reclassified as a dwarf planet"
        },
        {
          "id": "astronomy-101-l01-f5",
          "front": "What is Earth's 'cosmic address' according to Carl Sagan?",
          "back": "Earth is a small planet orbiting a medium-sized star in the outskirts of the Milky Way galaxy — a pale blue dot in the vast cosmic ocean."
        },
        {
          "id": "astronomy-101-l01-f6",
          "front": "What is the 'Goldilocks zone' (habitable zone) around a star?",
          "back": "The region where conditions are 'just right' for liquid water — not too hot (like Venus), not too cold (like Mars), but just right for life as we know it."
        }
      ],
      "questions": [
        {
          "id": "astronomy-101-l01-q1",
          "text": "Which planet is closest to the Sun?",
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
          "correctOptionId": "a",
          "explanation": "Mercury orbits nearest to the Sun!"
        },
        {
          "id": "astronomy-101-l01-q2",
          "text": "Which planet is the largest in our solar system?",
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
              "text": "Neptune"
            },
            {
              "id": "d",
              "text": "Earth"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Jupiter is the biggest — over 1,300 Earths could fit inside it!"
        },
        {
          "id": "astronomy-101-l01-q3",
          "text": "Mars is called the Red Planet because of",
          "options": [
            {
              "id": "a",
              "text": "Iron-rust colored soil"
            },
            {
              "id": "b",
              "text": "Hot lava on the surface"
            },
            {
              "id": "c",
              "text": "Red clouds"
            },
            {
              "id": "d",
              "text": "The sunset color"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Iron oxide (rust) in the soil gives Mars its red color!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "astronomy-101-l01-act1",
          "type": "project_builder",
          "title": "Solar system scale model",
          "description": "Use different sized balls or fruits to represent each planet. A basketball for Jupiter, a marble for Mercury. Lay them out in order from the Sun and label each one."
        }
      ],
      "learningAids": [
        {
          "id": "astronomy-101-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ],
      "imageUrl": "/generated-images/refinery/astronomy-101-l01.png"
    },
    {
      "id": "astronomy-101-l02",
      "title": "The Sun",
      "type": "interactive",
      "duration": 12,
      "lessonImagePrompt": "A close-up, high-resolution digital painting of the Sun showing solar flares, glowing corona, and textured photosphere, vibrant oranges and yellows, space art.",
      "conceptVideoPrompt": "A dynamic animation zooming into the Sun, revealing its glowing layers from the corona down to the blazing core where bright flashes represent nuclear fusion.",
      "chunks": [
        {
          "id": "astronomy-101-l02-c1",
          "title": "What the Sun Is",
          "content": "The Sun is a medium-sized star, which means it is not too big or too small compared to other stars in the universe. It is essentially a giant ball of hot gas, primarily made up of hydrogen and helium. Inside the Sun, a fascinating process called nuclear fusion occurs. During nuclear fusion, hydrogen atoms combine to form helium. This process releases an enormous amount of energy in the form of light and heat, which is essential for life on Earth. To help you understand just how big the Sun is, imagine that about 1.3 million Earths could fit inside it! This incredible energy from the Sun warms our planet, gives us light during the day, and helps plants grow. Without the Sun, life as we know it would not be possible, making it one of the most important objects in our solar system."
        },
        {
          "id": "astronomy-101-l02-c2",
          "title": "Layers of the Sun",
          "content": "The Sun is made up of several layers, each with its own unique characteristics. At the very center is the core, where nuclear fusion takes place. Surrounding the core is the radiative zone, where energy slowly moves outward. Next is the convective zone, where hot gases rise and cooler gases sink, creating a cycle. The visible surface of the Sun is called the photosphere, which is what we see when we look at the Sun. Above that, there are two more layers: the chromosphere, which is a thin layer of gas, and the corona, the Sun's outer atmosphere that can be seen during a total solar eclipse."
        },
        {
          "id": "astronomy-101-l02-c3",
          "title": "Why the Sun Matters",
          "content": "The Sun is an incredibly important star for life on Earth. It provides the light and warmth that all living things need to survive. For instance, plants rely on sunlight to perform a special process called photosynthesis. During photosynthesis, plants take in sunlight and use it to create their own food while also producing oxygen, which is essential for us to breathe. Additionally, the Sun has a significant impact on our planet's weather patterns, ocean currents, and the water cycle. These processes are vital for maintaining a healthy environment and supporting all forms of life. However, it is crucial to remember that looking directly at the Sun can be very harmful to your eyes, so always protect your vision and never stare at it without proper eye protection!"
        },
        {
          "id": "astronomy-101-l02-c4",
          "title": "Reading the Sun's Light: Spectroscopy",
          "content": "Have you ever wondered how scientists learn about the Sun without actually going there? Well, let’s dive into an exciting discovery made by astronomers in the 19th century! Curious astronomers used special tools called prisms to study sunlight. When they did this, they found out that sunlight is not just a beautiful mix of colors, like a rainbow; it also holds secrets about the Sun itself! This special light can tell us about the Sun's temperature and what it is made of. How does it do this? It’s all thanks to something called spectra, which are unique patterns of bright and dark lines that appear when sunlight passes through a prism. Imagine each chemical element, like hydrogen or helium, leaving its own special fingerprint in these patterns. This means that scientists can figure out what the Sun is made of just by looking at these fingerprints in the light! This discovery was a game-changer for astronomy, allowing scientists to learn about the Sun and other stars without needing to travel to them."
        }
      ],
      "flashcards": [
        {
          "id": "astronomy-101-l02-f1",
          "front": "Process that powers the Sun",
          "back": "Nuclear fusion"
        },
        {
          "id": "astronomy-101-l02-f2",
          "front": "The two main gases in the Sun",
          "back": "Hydrogen and helium"
        },
        {
          "id": "astronomy-101-l02-f3",
          "front": "The visible surface of the Sun",
          "back": "Photosphere"
        },
        {
          "id": "astronomy-101-l02-f4",
          "front": "Sun's outer atmosphere seen during an eclipse",
          "back": "Corona"
        },
        {
          "id": "astronomy-101-l02-f5",
          "front": "How do astronomers determine what the Sun is made of without visiting it?",
          "back": "By using spectroscopy — splitting sunlight into a spectrum that reveals unique patterns (spectral lines) for each chemical element present."
        },
        {
          "id": "astronomy-101-l02-f6",
          "front": "What did Newton's universal law of gravitation reveal about the Sun?",
          "back": "The same force of gravity that pulls apples from trees also keeps all planets orbiting the Sun — the laws of physics are universal throughout the cosmos."
        }
      ],
      "questions": [
        {
          "id": "astronomy-101-l02-q1",
          "text": "What process powers the Sun?",
          "options": [
            {
              "id": "a",
              "text": "Nuclear fusion"
            },
            {
              "id": "b",
              "text": "Burning wood"
            },
            {
              "id": "c",
              "text": "Electricity"
            },
            {
              "id": "d",
              "text": "Friction"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The Sun fuses hydrogen atoms into helium, releasing energy!"
        },
        {
          "id": "astronomy-101-l02-q2",
          "text": "The corona is the Sun's",
          "options": [
            {
              "id": "a",
              "text": "Outer atmosphere"
            },
            {
              "id": "b",
              "text": "Core"
            },
            {
              "id": "c",
              "text": "Visible surface"
            },
            {
              "id": "d",
              "text": "Inner layer"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The corona is visible as a glowing halo during a total solar eclipse!"
        },
        {
          "id": "astronomy-101-l02-q3",
          "text": "Plants use sunlight for",
          "options": [
            {
              "id": "a",
              "text": "Photosynthesis"
            },
            {
              "id": "b",
              "text": "Gravity"
            },
            {
              "id": "c",
              "text": "Friction"
            },
            {
              "id": "d",
              "text": "Evaporation"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Photosynthesis converts sunlight into food and oxygen!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "astronomy-101-l02-act1",
          "type": "drawing_canvas",
          "title": "Sun layers diagram",
          "description": "Draw a cross-section of the Sun showing its six layers: core, radiative zone, convective zone, photosphere, chromosphere, and corona. Label and color each layer."
        }
      ],
      "learningAids": [
        {
          "id": "astronomy-101-l02-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ],
      "imageUrl": "/generated-images/refinery/astronomy-101-l02.png"
    },
    {
      "id": "astronomy-101-l03",
      "title": "Earth's Moon",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "A highly detailed, realistic image of the Moon showing its craters and maria, with a bright Earth visible in the background against the starry void.",
      "conceptVideoPrompt": "A time-lapse animation showing the Moon orbiting Earth, smoothly transitioning through its phases from new moon to full moon, with a brief demonstration of a solar eclipse.",
      "chunks": [
        {
          "id": "astronomy-101-l03-c1",
          "title": "Moon Facts",
          "content": "The Moon is a fascinating celestial body and is known as Earth's only natural satellite. This means that it travels around our planet, just like how Earth orbits the Sun. The distance between the Moon and Earth is about 238,900 miles, which is quite far! One of the most interesting things about the Moon is that it does not have an atmosphere. This means there is no air, no wind, and no water on its surface. Because of this lack of atmosphere, temperatures on the Moon can be extremely different depending on whether it is in sunlight or shadow. In sunlight, it can get as hot as 260°F, while in shadow, it can drop to a chilling −280°F! Another cool fact is that the footprints left by astronauts during the Apollo missions in 1969 are still there today. Since there is no wind to blow them away, these footprints serve as a lasting reminder of human exploration and our journey to understand the universe better."
        },
        {
          "id": "astronomy-101-l03-c2",
          "title": "Phases of the Moon",
          "content": "The Moon is a fascinating celestial body that does not generate its own light. Instead, it shines brightly in our night sky because it reflects the sunlight that reaches it. As the Moon orbits around the Earth, which takes approximately 29.5 days, we are able to see different parts of its illuminated side. This is what creates the various phases of the Moon that we can observe from our planet. The phases begin with the new moon, which appears completely dark because we are looking at the side that is not lit by the Sun. Next, we see the waxing crescent, where a small sliver of light starts to appear. Then comes the first quarter, where half of the Moon is illuminated. After that, we have the waxing gibbous, where more than half is lit up, leading to the full moon, which is when the entire face of the Moon is bright and round. Following the full moon, the Moon begins to wane, starting with the waning gibbous, then the third quarter, and finally the waning crescent before it returns to the new moon."
        },
        {
          "id": "astronomy-101-l03-c3",
          "title": "Tides and Eclipses",
          "content": "The Moon has a special effect on the Earth's oceans because of its gravitational pull. This pull creates what we call tides. When the Moon is directly overhead, the water on that side of the Earth is pulled towards it, creating what we call high tide. Interestingly, high tide also occurs on the opposite side of the Earth! This happens because the Earth is being pulled towards the Moon, leaving the water behind on the far side. Now, let's talk about eclipses, which are amazing events in the sky! A solar eclipse occurs when the Moon moves directly between the Earth and the Sun. During this time, the Moon blocks the Sun's light, making it look like the Sun has disappeared for a short while. On the other hand, a lunar eclipse happens when the Earth is positioned between the Sun and the Moon. This causes the Earth's shadow to fall on the Moon, making it look dark or even reddish. Both solar and lunar eclipses are wonderful reminders of how the Earth, Moon, and Sun interact in our universe!"
        }
      ],
      "flashcards": [
        {
          "id": "astronomy-101-l03-f1",
          "front": "How long the Moon takes to orbit Earth",
          "back": "About 29.5 days"
        },
        {
          "id": "astronomy-101-l03-f2",
          "front": "Moon phase when the entire face is lit",
          "back": "Full moon"
        },
        {
          "id": "astronomy-101-l03-f3",
          "front": "What causes ocean tides on Earth",
          "back": "The Moon's gravity"
        },
        {
          "id": "astronomy-101-l03-f4",
          "front": "When the Moon blocks the Sun",
          "back": "Solar eclipse"
        }
      ],
      "questions": [
        {
          "id": "astronomy-101-l03-q1",
          "text": "Why are astronaut footprints still on the Moon?",
          "options": [
            {
              "id": "a",
              "text": "No wind or atmosphere to erase them"
            },
            {
              "id": "b",
              "text": "They were painted on"
            },
            {
              "id": "c",
              "text": "Moon rock is very soft"
            },
            {
              "id": "d",
              "text": "Rain washed them deeper"
            }
          ],
          "correctOptionId": "a",
          "explanation": "With no wind or weather, nothing disturbs the footprints!"
        },
        {
          "id": "astronomy-101-l03-q2",
          "text": "The Moon produces its own light.",
          "options": [
            {
              "id": "a",
              "text": "False — it reflects sunlight"
            },
            {
              "id": "b",
              "text": "True"
            },
            {
              "id": "c",
              "text": "Only during full moon"
            },
            {
              "id": "d",
              "text": "Only at night"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The Moon shines because it reflects the Sun's light!"
        },
        {
          "id": "astronomy-101-l03-q3",
          "text": "What causes tides on Earth?",
          "options": [
            {
              "id": "a",
              "text": "The Moon's gravitational pull"
            },
            {
              "id": "b",
              "text": "Wind"
            },
            {
              "id": "c",
              "text": "The Sun's heat"
            },
            {
              "id": "d",
              "text": "Earth's rotation alone"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The Moon's gravity pulls on Earth's oceans, creating tides!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "astronomy-101-l03-act1",
          "type": "drawing_canvas",
          "title": "Moon phase tracker",
          "description": "Over one week, draw the Moon's shape each night. Label the phase (crescent, quarter, gibbous, or full). After a month you will see the full cycle."
        }
      ],
      "learningAids": [
        {
          "id": "astronomy-101-l03-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ],
      "imageUrl": "/generated-images/refinery/astronomy-101-l03.png"
    },
    {
      "id": "astronomy-101-l04",
      "title": "Astronomy Checkpoint",
      "type": "quiz",
      "duration": 8,
      "lessonImagePrompt": "A fun, stylized illustration of a young astronaut looking at a glowing holographic map of the solar system, Earth, and Moon.",
      "conceptVideoPrompt": "A fast-paced, engaging montage recapping the solar system, the blazing Sun, and the phases of the Moon, with dynamic text highlighting key facts.",
      "chunks": [
        {
          "id": "astronomy-101-l04-c1",
          "title": "Solar System Review",
          "content": "In our solar system, there are eight planets that orbit around the Sun. These planets can be divided into two groups: the four rocky inner planets and the four gas or ice giants. Jupiter is the largest planet of them all, while Mercury is the closest planet to the Sun. Understanding these basic facts about our solar system helps us appreciate the incredible diversity of worlds that exist beyond our own."
        },
        {
          "id": "astronomy-101-l04-c2",
          "title": "Sun and Moon Review",
          "content": "The Sun is an incredible star that generates energy through a process called nuclear fusion. This means it combines smaller atoms to create larger ones, releasing a lot of energy in the form of light and heat. The Moon, on the other hand, does not produce its own light; instead, it reflects the sunlight that shines on it. It takes about 29.5 days for the Moon to complete one orbit around Earth. Additionally, the Moon's gravitational pull is strong enough to influence the tides in our oceans, creating high and low tides that we can observe every day."
        },
        {
          "id": "astronomy-101-l04-c3",
          "title": "Keep Looking Up!",
          "content": "Now that you have learned about the planets, the structure of the Sun, and how the Moon operates, you are ready for your next adventure in astronomy! In the upcoming lessons, you will dive into the fascinating world of stars, explore the vastness of galaxies, and learn about exciting space missions that humans have embarked on to discover more about our universe. Keep your curiosity alive and get ready to look up at the night sky with new knowledge!"
        }
      ],
      "flashcards": [
        {
          "id": "astronomy-101-l04-f1",
          "front": "Number of planets in our solar system",
          "back": "Eight"
        },
        {
          "id": "astronomy-101-l04-f2",
          "front": "The Sun fuses hydrogen into this element",
          "back": "Helium"
        },
        {
          "id": "astronomy-101-l04-f3",
          "front": "Moon phase that is completely dark",
          "back": "New moon"
        },
        {
          "id": "astronomy-101-l04-f4",
          "front": "Tallest volcano in the solar system (on Mars)",
          "back": "Olympus Mons"
        }
      ],
      "questions": [
        {
          "id": "astronomy-101-l04-q1",
          "text": "How many planets are in our solar system?",
          "options": [
            {
              "id": "a",
              "text": "8"
            },
            {
              "id": "b",
              "text": "9"
            },
            {
              "id": "c",
              "text": "7"
            },
            {
              "id": "d",
              "text": "10"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Since 2006, there are 8 planets — Pluto is a dwarf planet!"
        },
        {
          "id": "astronomy-101-l04-q2",
          "text": "Saturn is famous for its",
          "options": [
            {
              "id": "a",
              "text": "Rings"
            },
            {
              "id": "b",
              "text": "Great Red Spot"
            },
            {
              "id": "c",
              "text": "Sideways tilt"
            },
            {
              "id": "d",
              "text": "Blue color"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Saturn has beautiful rings made of ice and rock!"
        },
        {
          "id": "astronomy-101-l04-q3",
          "text": "A solar eclipse happens when",
          "options": [
            {
              "id": "a",
              "text": "The Moon blocks the Sun"
            },
            {
              "id": "b",
              "text": "Earth blocks the Sun"
            },
            {
              "id": "c",
              "text": "The Sun turns off"
            },
            {
              "id": "d",
              "text": "Stars move in front of the Sun"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The Moon passes between the Sun and Earth during a solar eclipse!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "astronomy-101-l04-act1",
          "type": "drawing_canvas",
          "title": "Solar system poster review",
          "description": "Draw the Sun and all 8 planets in order. Add one fact next to each planet."
        }
      ],
      "learningAids": [
        {
          "id": "astronomy-101-l04-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ],
      "imageUrl": "/generated-images/refinery/astronomy-101-l04.png"
    },
    {
      "id": "astronomy-101-l05",
      "title": "Stars and Constellations",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "A breathtaking view of a colorful nebula in deep space, with bright newly formed stars shining through clouds of cosmic dust and gas.",
      "conceptVideoPrompt": "A visually stunning sequence showing the life cycle of a star, starting from a swirling nebula, igniting into a bright star, and ending in a spectacular supernova explosion.",
      "chunks": [
        {
          "id": "astronomy-101-l05-c1",
          "title": "What Are Stars?",
          "content": "Stars are incredible and enormous spheres made mostly of hot gases, with hydrogen and helium being the primary components. They shine brightly in the night sky and are responsible for the light and warmth we experience on Earth. This shining happens through a fascinating process called nuclear fusion. During nuclear fusion, stars combine hydrogen atoms to create helium, and in this process, they release a tremendous amount of energy, which is what makes them glow. Stars come in a variety of sizes and colors, each with its own unique characteristics. For instance, red dwarfs are smaller and cooler compared to other types of stars. Then we have yellow dwarfs, like our very own Sun, which are medium-sized and provide essential warmth and light to our planet. On the opposite end of the scale, we find blue giants, which are massive and incredibly hot. The journey of a star begins in a nebula, which is a vast cloud of gas and dust floating in space. Over time, gravity pulls these materials together, leading to the birth of a new star."
        },
        {
          "id": "astronomy-101-l05-c2",
          "title": "Constellations",
          "content": "Constellations are amazing patterns created by groups of stars that people from ancient times imagined as pictures or stories in the night sky. For example, one of the most famous constellations is Orion the Hunter. This constellation has three bright stars that line up to form his belt, making it easy to spot. Another well-known constellation is Ursa Major, which is also called the Great Bear. Within Ursa Major, you can find the Big Dipper, a shape that looks like a ladle or a scoop. The North Star, known as Polaris, is located at the tip of the Little Dipper and is very special because it helps travelers find their way by pointing directly north. These star patterns have been used for navigation and storytelling for many centuries, connecting us to the stories of our ancestors and the wonders of the universe."
        },
        {
          "id": "astronomy-101-l05-c3",
          "title": "Star Life Cycle",
          "content": "The life cycle of a star is an amazing journey that starts in a nebula, which is a giant cloud of gas and dust in space. In these nebulae, stars are born when the gas and dust come together under gravity. Once a star is formed, it spends millions or even billions of years shining brightly by burning hydrogen in its core. This process is what gives stars their light and heat. As time goes on and the star uses up its hydrogen fuel, different things happen depending on the size of the star. Smaller stars will gradually shrink and become what we call white dwarfs, which are very small and dense remnants of stars. On the other hand, larger stars have a more dramatic ending. They explode in a spectacular event known as a supernova! This explosion can leave behind fascinating remnants like a neutron star or even a black hole, which is a region in space where gravity is so strong that nothing can escape from it."
        },
        {
          "id": "astronomy-101-l05-c4",
          "title": "We Are Star Stuff: Cosmic Origins of the Elements",
          "content": "The well-known astronomer Carl Sagan once said, 'We are made of star stuff.' This fascinating idea means that the very building blocks of our bodies, like the elements that make up our muscles, bones, and blood, actually came from stars that existed long before our planet was formed. Every atom of carbon, which helps our muscles work, every atom of calcium, which keeps our bones strong, and every atom of iron, which is important for our blood, was created inside a star. These stars lived, burned brightly, and eventually died in spectacular explosions called supernovae. This happens through a process called stellar nucleosynthesis. Stars begin by fusing hydrogen atoms together to form helium. As they continue to burn, they can create even heavier elements like carbon and oxygen. When a massive star reaches the end of its life, it explodes in a supernova, sending these newly formed elements out into space. These elements mix with gas clouds, known as nebulae, which are the places where new stars and planets, including our Earth, are born. So, when we look at the periodic table of elements, we are not just seeing a list of chemicals; we are actually reading a cosmic story!"
        }
      ],
      "flashcards": [
        {
          "id": "astronomy-101-l05-f1",
          "front": "Cloud of gas and dust where stars are born",
          "back": "Nebula"
        },
        {
          "id": "astronomy-101-l05-f2",
          "front": "Constellation with three stars in a belt",
          "back": "Orion"
        },
        {
          "id": "astronomy-101-l05-f3",
          "front": "Star that always points north",
          "back": "Polaris (North Star)"
        },
        {
          "id": "astronomy-101-l05-f4",
          "front": "Explosive death of a massive star",
          "back": "Supernova"
        },
        {
          "id": "astronomy-101-l05-f5",
          "front": "What did Carl Sagan mean by 'We are made of star stuff'?",
          "back": "Every atom of carbon, nitrogen, and oxygen in our bodies was forged inside ancient stars that exploded as supernovae, scattering their elements across the cosmos to form new worlds and life."
        },
        {
          "id": "astronomy-101-l05-f6",
          "front": "What is stellar nucleosynthesis?",
          "back": "The process by which stars forge heavier elements (carbon, oxygen, iron) from lighter ones (hydrogen, helium) through nuclear fusion in their cores and during supernova explosions."
        },
        {
          "id": "astronomy-101-l05-f7",
          "front": "Why is the periodic table also a cosmic story, according to Tyson?",
          "back": "Because nearly every element heavier than hydrogen and helium was created inside stars — each element's existence is evidence of stellar processes that occurred billions of years ago."
        }
      ],
      "questions": [
        {
          "id": "astronomy-101-l05-q1",
          "text": "Where are stars born?",
          "options": [
            {
              "id": "a",
              "text": "In a nebula"
            },
            {
              "id": "b",
              "text": "On a planet"
            },
            {
              "id": "c",
              "text": "Inside the Sun"
            },
            {
              "id": "d",
              "text": "In the ocean"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Stars form inside nebulae — clouds of gas and dust!"
        },
        {
          "id": "astronomy-101-l05-q2",
          "text": "Which constellation has three stars in a row forming a belt?",
          "options": [
            {
              "id": "a",
              "text": "Orion"
            },
            {
              "id": "b",
              "text": "Ursa Major"
            },
            {
              "id": "c",
              "text": "Cassiopeia"
            },
            {
              "id": "d",
              "text": "Leo"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Orion's Belt is one of the most recognizable patterns in the sky!"
        },
        {
          "id": "astronomy-101-l05-q3",
          "text": "When a massive star explodes, it is called a",
          "options": [
            {
              "id": "a",
              "text": "Supernova"
            },
            {
              "id": "b",
              "text": "Solar eclipse"
            },
            {
              "id": "c",
              "text": "White dwarf"
            },
            {
              "id": "d",
              "text": "Nebula"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A supernova is the brilliant explosion of a dying massive star!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "astronomy-101-l05-act1",
          "type": "drawing_canvas",
          "title": "Constellation creator",
          "description": "On black paper, use a white crayon or chalk to place dots for stars. Connect them into a real constellation (Orion, Big Dipper) or invent your own. Name it and write a short story about it."
        }
      ],
      "imageUrl": "/generated-images/refinery/astronomy-101-l05.png"
    },
    {
      "id": "astronomy-101-l06",
      "title": "Galaxies",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "A majestic spiral galaxy with glowing blue and pink arms, a bright central bulge, floating in the vastness of deep space, photorealistic.",
      "conceptVideoPrompt": "A cosmic zoom-out starting from a single star system, revealing a massive spiral galaxy, and continuing to zoom out to show a vast web of countless glowing galaxies in the observable universe.",
      "chunks": [
        {
          "id": "astronomy-101-l06-c1",
          "title": "What Is a Galaxy?",
          "content": "A galaxy is an enormous collection of stars, gas, dust, and dark matter that are held together by the force of gravity. Imagine a giant cosmic city where everything is connected! Our home galaxy, the Milky Way, is a vast system that contains over 200 billion stars! That's a number so big it's hard to imagine! When we look at the Milky Way from the side, it appears as a flat disk, like a giant pizza in space. But when we look at it from above, we can see its stunning spiral arms that spread outwards, resembling a beautiful pinwheel. Galaxies come in many different shapes and sizes, like spirals, ellipses, and even irregular forms. They are the building blocks of the universe, each one hosting countless stars and possibly even planets where life could exist."
        },
        {
          "id": "astronomy-101-l06-c2",
          "title": "Types of Galaxies",
          "content": "Galaxies are fascinating structures in our universe, and they can be grouped into three main types based on their shapes. The first type is spiral galaxies, which are known for their stunning, curved arms that spiral outward. Our very own Milky Way is a spiral galaxy, and so is the Andromeda Galaxy, which is one of our closest galactic neighbors. The second type is elliptical galaxies. These galaxies have a smooth, oval shape and are mostly filled with older stars, giving them a more uniform appearance. Finally, we have irregular galaxies. Unlike the other two types, irregular galaxies do not have a clear shape and can look quite chaotic. A great example of an irregular galaxy is the Large Magellanic Cloud, which orbits around the Milky Way. Each type of galaxy adds to the incredible variety and complexity of the universe we live in."
        },
        {
          "id": "astronomy-101-l06-c3",
          "title": "The Observable Universe",
          "content": "Did you know that there are more than two trillion galaxies in the observable universe? That's an incredible number! To help us understand this vastness, astronomers use powerful tools like the Hubble Space Telescope. This amazing telescope took a famous photograph called the Deep Field. In this picture, thousands of galaxies can be seen in just a tiny area of the sky! Imagine looking at a small dot and discovering so many galaxies within it! The light from the most distant galaxies has traveled for over 13 billion years to reach us. This means we are seeing them as they were a long, long time ago, giving us a glimpse into the early universe. Each of these galaxies is like a unique world, and by studying them, we learn more about the history and evolution of everything around us in the cosmos."
        },
        {
          "id": "astronomy-101-l06-c4",
          "title": "The Shores of the Cosmic Ocean",
          "content": "Carl Sagan, a famous scientist and storyteller, once invited us to picture ourselves standing on 'the shores of the cosmic ocean.' This wonderful image helps us understand our place in the universe, which is incredibly vast and full of wonders. Imagine looking out at an endless ocean, where each wave represents a different galaxy! Our own Milky Way galaxy is just one of these waves, and it contains more than 200 billion stars! But here's something even more amazing: there are trillions of galaxies out there, each with its own stars and planets. Renowned astrophysicist Neil deGrasse Tyson reminds us that the same laws of physics, like gravity and electromagnetism, work the same way in the farthest galaxies as they do right here on our home planet, Earth. This means that scientists can study galaxies that are billions of light-years away using the same scientific principles we learn about in school. Because of this connection, we can explore the entire universe, uncovering its mysteries through careful observation and logical reasoning."
        }
      ],
      "flashcards": [
        {
          "id": "astronomy-101-l06-f1",
          "front": "Our home galaxy",
          "back": "The Milky Way"
        },
        {
          "id": "astronomy-101-l06-f2",
          "front": "Galaxy type with curved arms",
          "back": "Spiral galaxy"
        },
        {
          "id": "astronomy-101-l06-f3",
          "front": "Nearest large spiral galaxy to the Milky Way",
          "back": "Andromeda"
        },
        {
          "id": "astronomy-101-l06-f4",
          "front": "Estimated number of galaxies in the observable universe",
          "back": "Over two trillion"
        },
        {
          "id": "astronomy-101-l06-f5",
          "front": "How did Carl Sagan describe humanity's place among the galaxies?",
          "back": "We are like voyagers on the shores of a cosmic ocean — our planet is a tiny speck in an incomprehensibly vast universe containing trillions of galaxies, each with hundreds of billions of stars."
        },
        {
          "id": "astronomy-101-l06-f6",
          "front": "Why can we study distant galaxies from Earth, according to Tyson?",
          "back": "Because the laws of physics are universal — the same gravity, electromagnetism, and nuclear forces operate identically everywhere in the cosmos, making distant galaxies knowable through the same science we use on Earth."
        }
      ],
      "questions": [
        {
          "id": "astronomy-101-l06-q1",
          "text": "What type of galaxy is the Milky Way?",
          "options": [
            {
              "id": "a",
              "text": "Spiral"
            },
            {
              "id": "b",
              "text": "Elliptical"
            },
            {
              "id": "c",
              "text": "Irregular"
            },
            {
              "id": "d",
              "text": "Ring"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The Milky Way is a spiral galaxy with curved arms!"
        },
        {
          "id": "astronomy-101-l06-q2",
          "text": "Approximately how many stars are in the Milky Way?",
          "options": [
            {
              "id": "a",
              "text": "Over 200 billion"
            },
            {
              "id": "b",
              "text": "About 1 million"
            },
            {
              "id": "c",
              "text": "A few thousand"
            },
            {
              "id": "d",
              "text": "Exactly 100"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The Milky Way has over 200 billion stars!"
        },
        {
          "id": "astronomy-101-l06-q3",
          "text": "Which telescope took the famous Deep Field photo of galaxies?",
          "options": [
            {
              "id": "a",
              "text": "Hubble"
            },
            {
              "id": "b",
              "text": "Galileo's telescope"
            },
            {
              "id": "c",
              "text": "James Webb"
            },
            {
              "id": "d",
              "text": "A backyard telescope"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The Hubble Space Telescope captured thousands of galaxies in one tiny patch of sky!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "astronomy-101-l06-act1",
          "type": "drawing_canvas",
          "title": "Galaxy gallery",
          "description": "Draw three galaxies: one spiral (with arms), one elliptical (smooth oval), and one irregular (random shape). Label each type and add stars with white dots."
        }
      ],
      "imageUrl": "/generated-images/refinery/astronomy-101-l06.png"
    },
    {
      "id": "astronomy-101-l07",
      "title": "Space Exploration",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "An inspiring illustration of a modern space rover exploring the red, rocky surface of Mars, with Earth shining like a pale blue dot in the distant sky.",
      "conceptVideoPrompt": "A historical montage of space exploration, featuring the launch of Sputnik, the Apollo 11 moon landing, the International Space Station orbiting Earth, and a rover driving on Mars.",
      "chunks": [
        {
          "id": "astronomy-101-l07-c1",
          "title": "The Space Race",
          "content": "The Space Race was a thrilling time in history that began in 1957 when the Soviet Union launched Sputnik, the very first artificial satellite to orbit our planet, Earth. This remarkable achievement marked the beginning of an exciting competition between countries to explore the mysteries of space. Just a few years later, in 1961, a brave astronaut named Yuri Gagarin made history by becoming the first human to travel into space. His journey opened the door to new possibilities and sparked the imagination of people all around the world. In response to these incredible advancements, the United States initiated the Apollo program, which had a bold goal: to land humans on the Moon. On July 20, 1969, Neil Armstrong and Buzz Aldrin made this dream a reality when they became the first humans to walk on the lunar surface. As Armstrong took his first step onto the Moon, he famously said, 'That's one small step for man, one giant leap for mankind.' This historic moment not only showcased human ingenuity and courage but also inspired generations to dream big and explore the wonders of the universe beyond our own planet."
        },
        {
          "id": "astronomy-101-l07-c2",
          "title": "Rovers and Probes",
          "content": "NASA has sent several incredible rovers to Mars to explore its surface and gather important information about the planet. These rovers include Spirit, Opportunity, Curiosity, and Perseverance. Each of these rovers has a special job: Spirit and Opportunity were designed to look for signs of water, Curiosity is studying the planet's climate and geology, and Perseverance is searching for signs of ancient life. In addition to these rovers, we have Voyager 1 and Voyager 2, which were launched way back in 1977. These spacecraft have traveled far beyond our solar system and carry Golden Records. These records contain sounds and images of Earth, which are meant to communicate with any potential extraterrestrial life that might find them. Another amazing tool is the James Webb Space Telescope, which was launched in 2021. This telescope captures stunning images from the early universe, helping scientists learn more about how galaxies and stars formed. Through these missions, we are uncovering the mysteries of space and learning more about our place in the universe."
        },
        {
          "id": "astronomy-101-l07-c3",
          "title": "The International Space Station",
          "content": "The International Space Station, often called the ISS, is a remarkable laboratory that orbits our planet, Earth. Imagine a place high above us where astronauts from many different countries come together to live and work in space! The ISS travels at an incredible speed of about 17,500 miles per hour, which is so fast that it can complete a full circle around Earth every 90 minutes! That's like watching the sunrise and sunset 16 times in just one day! While they are on the ISS, astronauts conduct amazing experiments. For example, they grow plants in space to see how they adapt to living without gravity. They also study how our bones and muscles change in microgravity, which helps us understand how to keep astronauts healthy on long missions. Plus, they are preparing for exciting future missions to Mars, which could help us learn even more about our universe. This teamwork in space is important because it allows scientists to discover new things about our world and how we can explore it even further in the future."
        }
      ],
      "flashcards": [
        {
          "id": "astronomy-101-l07-f1",
          "front": "First artificial satellite (1957)",
          "back": "Sputnik"
        },
        {
          "id": "astronomy-101-l07-f2",
          "front": "First human to walk on the Moon (1969)",
          "back": "Neil Armstrong"
        },
        {
          "id": "astronomy-101-l07-f3",
          "front": "Mars rover launched in 2020",
          "back": "Perseverance"
        },
        {
          "id": "astronomy-101-l07-f4",
          "front": "Laboratory orbiting Earth",
          "back": "International Space Station (ISS)"
        },
        {
          "id": "astronomy-101-l07-f5",
          "front": "What role did Carl Sagan play in the Voyager mission?",
          "back": "Sagan chaired the committee that designed the Voyager Golden Record — a message from Earth containing sounds, images, and greetings in 55 languages sent into interstellar space as a cosmic message in a bottle."
        },
        {
          "id": "astronomy-101-l07-f6",
          "front": "What is the 'Pale Blue Dot' and why is it significant?",
          "back": "A photograph of Earth taken by Voyager 1 from 3.7 billion miles away, showing our planet as a tiny speck in a sunbeam. Sagan used it to remind humanity that this fragile world is the only home we have ever known."
        }
      ],
      "questions": [
        {
          "id": "astronomy-101-l07-q1",
          "text": "What was the first artificial satellite launched into space?",
          "options": [
            {
              "id": "a",
              "text": "Sputnik"
            },
            {
              "id": "b",
              "text": "Apollo 11"
            },
            {
              "id": "c",
              "text": "Hubble"
            },
            {
              "id": "d",
              "text": "ISS"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The Soviet Union launched Sputnik in 1957!"
        },
        {
          "id": "astronomy-101-l07-q2",
          "text": "Who was the first person to walk on the Moon?",
          "options": [
            {
              "id": "a",
              "text": "Neil Armstrong"
            },
            {
              "id": "b",
              "text": "Yuri Gagarin"
            },
            {
              "id": "c",
              "text": "Buzz Aldrin"
            },
            {
              "id": "d",
              "text": "John Glenn"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Neil Armstrong stepped onto the Moon on July 20, 1969!"
        },
        {
          "id": "astronomy-101-l07-q3",
          "text": "The ISS orbits Earth approximately every",
          "options": [
            {
              "id": "a",
              "text": "90 minutes"
            },
            {
              "id": "b",
              "text": "24 hours"
            },
            {
              "id": "c",
              "text": "7 days"
            },
            {
              "id": "d",
              "text": "1 year"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The ISS travels at 17,500 mph and circles Earth every 90 minutes!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "astronomy-101-l07-act1",
          "type": "project_builder",
          "title": "Space exploration timeline",
          "description": "Create a timeline from 1957 to today. Mark Sputnik (1957), Gagarin (1961), Moon landing (1969), Voyager (1977), ISS (1998), and James Webb (2021). Add a drawing for each event."
        }
      ],
      "imageUrl": "/generated-images/refinery/astronomy-101-l07.png"
    },
    {
      "id": "astronomy-101-l08",
      "title": "Final Astronomy Assessment",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A grand, celebratory collage of the universe, featuring planets, a glowing sun, a spiral galaxy, and a space shuttle, symbolizing the completion of an astronomical journey.",
      "conceptVideoPrompt": "An epic, sweeping visual journey through the cosmos, quickly revisiting the planets, the Sun, the Moon, distant galaxies, and human spacecraft, ending with a congratulatory message.",
      "chunks": [
        {
          "id": "astronomy-101-l08-c1",
          "title": "Solar System and Sun Review",
          "content": "In our solar system, there are eight amazing planets that orbit around the Sun, which is a massive star at the center of our solar system. The Sun generates energy through a process called nuclear fusion, which is how it shines so brightly and provides warmth to our planet. The planets can be divided into two groups: the inner planets, which are rocky and solid, and the outer planets, which are much larger and made mostly of gas and ice. Understanding these planets helps us learn more about the universe we live in and our place within it."
        },
        {
          "id": "astronomy-101-l08-c2",
          "title": "Moon, Stars, and Galaxies Review",
          "content": "The Moon is a fascinating celestial body that reflects sunlight, making it visible from Earth. It also plays a crucial role in creating tides in our oceans. Stars, on the other hand, are born in vast clouds of gas and dust called nebulae. Over time, these stars can go through dramatic changes, and some may end their lives in spectacular explosions known as supernovae. Our galaxy, the Milky Way, is a beautiful spiral galaxy that contains billions of stars, and it is just one of trillions of galaxies in the universe. Exploring these wonders helps us appreciate the vastness of space."
        },
        {
          "id": "astronomy-101-l08-c3",
          "title": "Space Exploration Review",
          "content": "In 1957, the world witnessed a groundbreaking event when Sputnik became the first human-made object to travel into space. This marked the beginning of space exploration! Then, in 1969, humans took a giant leap by walking on the Moon for the first time. Since then, we have sent rovers to explore the surface of Mars, gathering valuable information about the planet. The International Space Station serves as an orbiting laboratory where astronauts conduct important research. The journey of exploration continues, and there is so much more to discover about our universe!"
        }
      ],
      "flashcards": [
        {
          "id": "astronomy-101-l08-f1",
          "front": "Eight planets in order from the Sun",
          "back": "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune"
        },
        {
          "id": "astronomy-101-l08-f2",
          "front": "Cloud where stars are born",
          "back": "Nebula"
        },
        {
          "id": "astronomy-101-l08-f3",
          "front": "Our galaxy's type",
          "back": "Spiral"
        },
        {
          "id": "astronomy-101-l08-f4",
          "front": "First satellite in space",
          "back": "Sputnik (1957)"
        }
      ],
      "questions": [
        {
          "id": "astronomy-101-l08-q1",
          "text": "Which planet has the fastest winds in the solar system?",
          "options": [
            {
              "id": "a",
              "text": "Neptune"
            },
            {
              "id": "b",
              "text": "Jupiter"
            },
            {
              "id": "c",
              "text": "Saturn"
            },
            {
              "id": "d",
              "text": "Earth"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Neptune has wind speeds over 1,200 mph — the fastest of any planet!"
        },
        {
          "id": "astronomy-101-l08-q2",
          "text": "Stars produce light and heat through",
          "options": [
            {
              "id": "a",
              "text": "Nuclear fusion"
            },
            {
              "id": "b",
              "text": "Electricity"
            },
            {
              "id": "c",
              "text": "Burning coal"
            },
            {
              "id": "d",
              "text": "Reflection"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Fusion combines hydrogen into helium, releasing enormous energy!"
        },
        {
          "id": "astronomy-101-l08-q3",
          "text": "The Voyager probes carry",
          "options": [
            {
              "id": "a",
              "text": "Golden Records with sounds and images of Earth"
            },
            {
              "id": "b",
              "text": "Astronauts"
            },
            {
              "id": "c",
              "text": "Mars soil samples"
            },
            {
              "id": "d",
              "text": "Seeds for planting"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The Golden Records are a message from humanity to any finder in space!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "astronomy-101-l08-act1",
          "type": "project_builder",
          "title": "Astronomy journal",
          "description": "Create a small journal with one page per topic: Solar System, Sun, Moon, Stars, Galaxies, and Space Exploration. Write 2-3 facts and draw a picture on each page. Share it with someone and teach them what you learned!"
        }
      ],
      "imageUrl": "/generated-images/refinery/astronomy-101-l08.png"
    }
  ]
};
