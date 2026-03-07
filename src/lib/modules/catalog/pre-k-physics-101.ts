import type { LearningModule } from "@/lib/modules/types";

export const pre_k_physics_101_Module: LearningModule = {
  "id": "pre-k-physics-101",
  "title": "Pre-K Push, Pull & Play! Physics Fun",
  "description": "Discover the amazing world of pushes, pulls, gravity, and motion! Children ages 3-5 explore how things move, why balls roll downhill, what makes magnets stick, and how to build the tallest tower — all through playful experiments and silly stories.",
  "subject": "Physics",
  "tags": [
    "pre-k",
    "curriculum",
    "interactive",
    "forces",
    "stem"
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
    "Tell the difference between a push and a pull",
    "Show that a big push makes things go fast and a little push makes things go slow",
    "Explain that gravity is a force that pulls things down to the ground",
    "Guess if an object will roll or slide down a ramp",
    "Discover that magnets stick to some metals",
    "Build a strong tower using a wide base and triangles"
  ],
  "lessons": [
    {
      "id": "prek-physics-l01",
      "title": "Meet Push and Pull!",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Define a push as a force that moves something away",
        "Define a pull as a force that moves something toward you",
        "Give examples of pushes and pulls in everyday life"
      ],
      "chunks": [
        {
          "id": "prek-physics-l01-c1",
          "title": "What Is a Push?",
          "content": "A push moves something AWAY from you. Imagine pushing a friend on a swing. Whee! They go flying forward! 🚀 Or when you push a toy car... Vroom! It races away from you! Even blowing bubbles is a gentle push with your breath! 🌬️"
        },
        {
          "id": "prek-physics-l01-c2",
          "title": "What Is a Pull?",
          "content": "A pull brings something TOWARD you. Think about pulling your favorite wagon by its handle. Clack, clack, clack! It follows right behind you! Or when you pull open a drawer to get your toys. You are pulling it closer! Even pulling on your socks to get them on your feet is a pull! 🧦"
        },
        {
          "id": "prek-physics-l01-c3",
          "title": "Push or Pull? A Fun Game!",
          "content": "Let's play a game! When you kick a soccer ball, is that a push or a pull? It's a PUSH with your foot! ⚽ When you pull a zipper up on your coat, is that a push or a pull? It's a PULL! Great job! Look around you. Can you find five things you can push and five things you can pull?"
        }
      ],
      "flashcards": [
        {
          "id": "prek-physics-l01-f1",
          "front": "What is a push?",
          "back": "Moves something AWAY from you, like pushing a car! 🚗💨"
        },
        {
          "id": "prek-physics-l01-f2",
          "front": "What is a pull?",
          "back": "Brings something TOWARD you, like pulling a wagon! ❤️"
        },
        {
          "id": "prek-physics-l01-f3",
          "front": "What is a force?",
          "back": "A push or a pull that makes things move!"
        }
      ],
      "questions": [
        {
          "id": "prek-physics-l01-q1",
          "text": "Kicking a ball is a...",
          "options": [
            {
              "id": "a",
              "text": "Push"
            },
            {
              "id": "b",
              "text": "Pull"
            },
            {
              "id": "c",
              "text": "Nap"
            },
            {
              "id": "d",
              "text": "Song"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Your foot pushes the ball away from you — that is a push!"
        },
        {
          "id": "prek-physics-l01-q2",
          "text": "Pulling a wagon moves it...",
          "options": [
            {
              "id": "a",
              "text": "Away from you"
            },
            {
              "id": "b",
              "text": "Toward you"
            },
            {
              "id": "c",
              "text": "Up into the sky"
            },
            {
              "id": "d",
              "text": "Underground"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A pull moves things toward you — the wagon follows behind!"
        }
      ],
      "learningAids": [
        {
          "id": "prek-physics-l01-a1",
          "type": "image",
          "title": "Push & Pull Picture Chart",
          "content": "A colorful chart with pictures of kids pushing swings and pulling wagons."
        }
      ]
    },
    {
      "id": "prek-physics-l02",
      "title": "Big Push, Little Push",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Show that a big push makes things move faster and farther",
        "Show that a little push makes things move slowly and a short distance",
        "Describe how you can control the strength of a push"
      ],
      "chunks": [
        {
          "id": "prek-physics-l02-c1",
          "title": "Gentle Tap vs. Big Push",
          "content": "Let's play with a toy car! 🚗 First, give it a tiny, gentle tap with your finger. Boop! It moves just a little bit. Now, give it a BIG push! WHOOSH! It zooms all the way across the floor! A big push gives it more power to go fast and far!"
        },
        {
          "id": "prek-physics-l02-c2",
          "title": "The Bowling Game",
          "content": "Have you ever seen bowling? 🎳 If you roll the ball very softly, it might stop before it gets to the pins. But if you give it a strong, powerful roll, it goes super fast and... CRASH! It knocks all the pins down! A stronger push makes a bigger crash!"
        },
        {
          "id": "prek-physics-l02-c3",
          "title": "You're in Control!",
          "content": "You are a force expert! You know how to use a gentle push when you pet a soft kitten. 🐱 And you know how to use a big push when you're trying to win a race! You choose how much force to use every day. That's your superpower!"
        }
      ],
      "flashcards": [
        {
          "id": "prek-physics-l02-f1",
          "front": "What happens with a BIG push?",
          "back": "Things go FASTER and FARTHER! 💨"
        },
        {
          "id": "prek-physics-l02-f2",
          "front": "What happens with a LITTLE push?",
          "back": "Things go SLOWLY and not very far. 🐢"
        }
      ],
      "questions": [
        {
          "id": "prek-physics-l02-q1",
          "text": "You give a toy car a BIG push. It will...",
          "options": [
            {
              "id": "a",
              "text": "Move just a little"
            },
            {
              "id": "b",
              "text": "Go far and fast!"
            },
            {
              "id": "c",
              "text": "Float up"
            },
            {
              "id": "d",
              "text": "Sing a song"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A big push has lots of force and makes things zoom!"
        }
      ]
    },
    {
      "id": "prek-physics-l03",
      "title": "Gravity: The Downward Pull",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Explain that gravity is a force that pulls everything to the ground",
        "Guess that a dropped toy will fall down, not up",
        "Describe why jumping always brings you back to Earth"
      ],
      "chunks": [
        {
          "id": "prek-physics-l03-c1",
          "title": "The Invisible String",
          "content": "There's a secret, invisible force all around us called GRAVITY! 🌍 It's like a giant, invisible string pulling everything down to the ground. When you drop your favorite ball, boink! Gravity pulls it down. When you jump up high, gravity pulls you right back down to your feet. Whee! Thump!"
        },
        {
          "id": "prek-physics-l03-c2",
          "title": "The Feather and the Block",
          "content": "Let's try an experiment! Find a feather (or a small piece of paper) and a block. Drop them at the same time. The block falls straight down, THUD! The feather floats and wiggles its way down. 🪶 Why? The air pushes up on the feather, slowing it down. But gravity is pulling them BOTH down!"
        },
        {
          "id": "prek-physics-l03-c3",
          "title": "Gravity is Our Friend",
          "content": "Gravity is a super helper! It keeps our food on our plate and our juice in our cup. 🥤 It keeps our feet on the ground so we don't float away into space like an astronaut! 🧑‍🚀 Thank you, gravity, for keeping us safe on Earth!"
        }
      ],
      "flashcards": [
        {
          "id": "prek-physics-l03-f1",
          "front": "What is gravity?",
          "back": "An invisible force that pulls everything DOWN to the ground! 🌍"
        },
        {
          "id": "prek-physics-l03-f2",
          "front": "Why don't we float away into space?",
          "back": "Gravity keeps our feet on the ground!"
        },
        {
          "id": "prek-physics-l03-f3",
          "front": "If you jump up, what happens?",
          "back": "Gravity pulls you back down!"
        }
      ],
      "questions": [
        {
          "id": "prek-physics-l03-q1",
          "text": "If you drop a toy, what does gravity do?",
          "options": [
            {
              "id": "a",
              "text": "Pushes it up"
            },
            {
              "id": "b",
              "text": "Pulls it down to the ground"
            },
            {
              "id": "c",
              "text": "Makes it disappear"
            },
            {
              "id": "d",
              "text": "Turns it into a cat"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Gravity pulls everything down toward the ground!"
        }
      ]
    },
    {
      "id": "prek-physics-l04",
      "title": "Ramps: Let's Roll and Slide!",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Show that things go faster down a steep ramp",
        "Tell the difference between rolling and sliding",
        "Explain that ramps are simple machines that help us"
      ],
      "chunks": [
        {
          "id": "prek-physics-l04-c1",
          "title": "Steep Ramps are Fast!",
          "content": "A ramp is like a slide for your toys! Let's make a ramp with a book. If you make the ramp very steep (high up), your toy car will go ZOOM! Super fast! 🏎️ If you make the ramp gentle (low down), the car will roll slowly. You can control the speed!"
        },
        {
          "id": "prek-physics-l04-c2",
          "title": "Rollers and Sliders",
          "content": "Some things ROLL and some things SLIDE. Round things, like a ball or a marble, love to roll! They tumble over and over. ⚽ But flat things, like a block or a book, can't roll. They just SLIDE down. Whoosh! Try it! What things in your room can roll? What things can slide?"
        },
        {
          "id": "prek-physics-l04-c3",
          "title": "Ramps are Helpers",
          "content": "Ramps are super helpful! They help people in wheelchairs go up without using stairs. They help movers slide heavy boxes into a truck. Ramps make hard work easier by letting things roll or slide instead of being lifted. They are amazing helpers!"
        }
      ],
      "flashcards": [
        {
          "id": "prek-physics-l04-f1",
          "front": "How do you make a toy car go faster on a ramp?",
          "back": "Make the ramp STEEPER! 🏎️"
        },
        {
          "id": "prek-physics-l04-f2",
          "front": "What's the difference between rolling and sliding?",
          "back": "Round things ROLL. Flat things SLIDE!"
        },
        {
          "id": "prek-physics-l04-f3",
          "front": "Why are ramps helpful?",
          "back": "They make it easier to move things up and down!"
        }
      ],
      "questions": [
        {
          "id": "prek-physics-l04-q1",
          "text": "A ball on a very steep ramp will roll...",
          "options": [
            {
              "id": "a",
              "text": "Slowly"
            },
            {
              "id": "b",
              "text": "Not at all"
            },
            {
              "id": "c",
              "text": "Fast!"
            },
            {
              "id": "d",
              "text": "Upward"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Steep ramps make things roll fast because gravity pulls them down harder!"
        }
      ]
    },
    {
      "id": "prek-physics-l05",
      "title": "Ramp Race! (Interactive)",
      "type": "interactive",
      "duration": 10,
      "objectives": [
        "Sort objects into things that roll and things that slide"
      ],
      "interactiveActivities": [
        {
          "id": "prek-physics-l05-ia1",
          "type": "sorting_buckets",
          "title": "Roller or Slider?",
          "description": "Drag each object to the right box. Will it roll or slide?",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "rollers",
                "label": "Rollers ⚽"
              },
              {
                "id": "sliders",
                "label": "Sliders 🧱"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Soccer ball ⚽",
                "correctBucketId": "rollers"
              },
              {
                "id": "i2",
                "label": "Book 📕",
                "correctBucketId": "sliders"
              },
              {
                "id": "i3",
                "label": "Orange 🍊",
                "correctBucketId": "rollers"
              },
              {
                "id": "i4",
                "label": "Block 🧱",
                "correctBucketId": "sliders"
              },
              {
                "id": "i5",
                "label": "Marble 🔮",
                "correctBucketId": "rollers"
              },
              {
                "id": "i6",
                "label": "Toy Phone 📱",
                "correctBucketId": "sliders"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "prek-physics-l05-a1",
          "type": "practice",
          "title": "Let's Experiment Sheet",
          "content": "A printable sheet prompting kids to find 3 rollers and 3 sliders in their room and draw them."
        }
      ]
    },
    {
      "id": "prek-physics-l06",
      "title": "Checkpoint: Forces and Rolling",
      "type": "quiz",
      "duration": 8,
      "questions": [
        {
          "id": "prek-physics-l06-q1",
          "text": "Opening a drawer is a...",
          "options": [
            {
              "id": "a",
              "text": "Push"
            },
            {
              "id": "b",
              "text": "Pull"
            },
            {
              "id": "c",
              "text": "Jump"
            },
            {
              "id": "d",
              "text": "Song"
            }
          ],
          "correctOptionId": "b",
          "explanation": "You pull a drawer toward you to open it!"
        },
        {
          "id": "prek-physics-l06-q2",
          "text": "A BIG push makes a ball go...",
          "options": [
            {
              "id": "a",
              "text": "Slowly"
            },
            {
              "id": "b",
              "text": "Fast!"
            },
            {
              "id": "c",
              "text": "Nowhere"
            },
            {
              "id": "d",
              "text": "Quiet"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A big push has more force, so it makes things go fast!"
        },
        {
          "id": "prek-physics-l06-q3",
          "text": "Gravity pulls things...",
          "options": [
            {
              "id": "a",
              "text": "Up into the sky"
            },
            {
              "id": "b",
              "text": "Sideways"
            },
            {
              "id": "c",
              "text": "Down toward the ground"
            },
            {
              "id": "d",
              "text": "In circles"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Gravity always pulls things down toward the Earth!"
        },
        {
          "id": "prek-physics-l06-q4",
          "text": "Which object would ROLL down a ramp?",
          "options": [
            {
              "id": "a",
              "text": "A book"
            },
            {
              "id": "b",
              "text": "A flat block"
            },
            {
              "id": "c",
              "text": "A round ball"
            },
            {
              "id": "d",
              "text": "A sandwich"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Round things roll! Flat things slide."
        }
      ],
      "learningAids": [
        {
          "id": "prek-physics-l06-a1",
          "type": "mnemonic",
          "title": "Think and Draw!",
          "content": "Draw a picture of a push, a pull, and something rolling down a ramp."
        }
      ]
    },
    {
      "id": "prek-physics-l07",
      "title": "Magical Magnets",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Explain that magnets pull some metal objects toward them",
        "Describe that magnets have two ends called poles that can attract or repel",
        "Predict whether a magnet will stick to an object or not"
      ],
      "chunks": [
        {
          "id": "prek-physics-l07-c1",
          "title": "The Sticking Power!",
          "content": "Magnets are so cool! 🧲 They have a special power to pull things toward them. It's like magic! They can stick to your fridge and hold up your drawings. But magnets are picky! They only like to stick to special metals, like iron and steel. They don't stick to wood, plastic, or your teddy bear."
        },
        {
          "id": "prek-physics-l07-c2",
          "title": "Friends and Not-Friends",
          "content": "Every magnet has two ends, a North pole and a South pole. When a North and a South get close, they are best friends! They SNAP together! ❤️ But if you try to push two Norths together, they say 'No way!' and push each other apart. This is called repelling. It's like they want their own space."
        },
        {
          "id": "prek-physics-l07-c3",
          "title": "Let's Go on a Magnet Hunt!",
          "content": "Let's be detectives! Take a magnet and walk around your room. Will it stick to a spoon? (Yes, if it's metal!) Will it stick to your bed? (No!) Will it stick to a paperclip? (Yes!) See how many magnetic things you can find!"
        }
      ],
      "flashcards": [
        {
          "id": "prek-physics-l07-f1",
          "front": "What do magnets stick to?",
          "back": "Metal things like iron and steel! Not wood or plastic. 🧲"
        },
        {
          "id": "prek-physics-l07-f2",
          "front": "What are the two ends of a magnet?",
          "back": "North and South poles! Opposite poles stick together."
        },
        {
          "id": "prek-physics-l07-f3",
          "front": "What does 'repel' mean?",
          "back": "To push away! Two North poles or two South poles push each other away. 🧲💨🧲"
        }
      ],
      "questions": [
        {
          "id": "prek-physics-l07-q1",
          "text": "Will a magnet stick to a wooden block?",
          "options": [
            {
              "id": "a",
              "text": "Yes, always"
            },
            {
              "id": "b",
              "text": "No, magnets only stick to some metals"
            },
            {
              "id": "c",
              "text": "Only on Tuesdays"
            },
            {
              "id": "d",
              "text": "Only if you ask nicely"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Magnets only attract special metals like iron and steel — not wood!"
        }
      ]
    },
    {
      "id": "prek-physics-l08",
      "title": "Magnet Hunt! (Interactive)",
      "type": "interactive",
      "duration": 10,
      "objectives": [
        "Sort objects into magnetic and non-magnetic groups"
      ],
      "interactiveActivities": [
        {
          "id": "prek-physics-l08-ia1",
          "type": "sorting_buckets",
          "title": "Magnetic or Not?",
          "description": "Will a magnet stick to it or not? Drag each item to the right box!",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "magnetic",
                "label": "Sticks! 🧲"
              },
              {
                "id": "not-magnetic",
                "label": "Doesn't Stick!"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Metal paperclip",
                "correctBucketId": "magnetic"
              },
              {
                "id": "i2",
                "label": "Plastic cup",
                "correctBucketId": "not-magnetic"
              },
              {
                "id": "i3",
                "label": "Iron nail",
                "correctBucketId": "magnetic"
              },
              {
                "id": "i4",
                "label": "Wooden spoon",
                "correctBucketId": "not-magnetic"
              },
              {
                "id": "i5",
                "label": "Steel key",
                "correctBucketId": "magnetic"
              },
              {
                "id": "i6",
                "label": "Rubber duck",
                "correctBucketId": "not-magnetic"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "prek-physics-l09",
      "title": "Build a Super Strong Tower!",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Explain that a wide base makes a tower more stable",
        "Describe why triangles are the strongest shape for building",
        "Predict which tower design will stand up the longest"
      ],
      "chunks": [
        {
          "id": "prek-physics-l09-c1",
          "title": "The Wobbly Tower",
          "content": "Let's build with blocks! If you stack them up, up, up in a tall, skinny line, what happens? It gets wobbly! And... CRASH! 💥 It falls down. Why? Because a skinny tower is easy to tip over."
        },
        {
          "id": "prek-physics-l09-c2",
          "title": "The Super Strong Base",
          "content": "Here's a secret! To build a strong tower, make the bottom WIDE. Like a pyramid! A wide base is strong and stable. It's very hard to push over. Try building a tower with a big, wide bottom. See how tall you can make it!"
        },
        {
          "id": "prek-physics-l09-c3",
          "title": "Triangle Power!",
          "content": "Look for triangles! 🔺 Triangles are the strongest shape. You can't squish them easily. Squares can get floppy, but triangles stay strong. That's why you see triangles on big bridges and tall towers. They keep everything from falling down!"
        }
      ],
      "flashcards": [
        {
          "id": "prek-physics-l09-f1",
          "front": "How do you make a tower strong?",
          "back": "Give it a wide base! This makes it harder to tip over."
        },
        {
          "id": "prek-physics-l09-f2",
          "front": "What is the strongest shape?",
          "back": "The triangle! It cannot be squished flat like a square can. 🔺"
        }
      ],
      "questions": [
        {
          "id": "prek-physics-l09-q1",
          "text": "Which tower is hardest to knock over?",
          "options": [
            {
              "id": "a",
              "text": "A tall skinny tower"
            },
            {
              "id": "b",
              "text": "A pyramid shape — wide on the bottom"
            },
            {
              "id": "c",
              "text": "A single block standing on its edge"
            },
            {
              "id": "d",
              "text": "A tower made of feathers"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Pyramid shapes have a wide base — they are super stable!"
        }
      ]
    },
    {
      "id": "prek-physics-l10",
      "title": "Building Challenge! (Interactive)",
      "type": "interactive",
      "duration": 8,
      "objectives": [
        "Choose a wide base for a stable tower",
        "Pick triangles to make a structure strong"
      ],
      "interactiveActivities": [
        {
          "id": "prek-physics-l10-ia1",
          "type": "sorting_buckets",
          "title": "Strong or Wobbly?",
          "description": "Which of these will stand up strong? Which will fall down?",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "strong",
                "label": "Stands Strong 💪"
              },
              {
                "id": "wobbly",
                "label": "Falls Down 😮"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Pyramid Tower (wide base)",
                "correctBucketId": "strong"
              },
              {
                "id": "i2",
                "label": "Tall Skinny Tower",
                "correctBucketId": "wobbly"
              },
              {
                "id": "i3",
                "label": "Bridge with Triangles",
                "correctBucketId": "strong"
              },
              {
                "id": "i4",
                "label": "Bridge with Squares",
                "correctBucketId": "wobbly"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "prek-physics-l11",
      "title": "Final Quiz: You're a Physics Star!",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "prek-physics-l11-q1",
          "text": "Pushing a door open is a...",
          "options": [
            {
              "id": "a",
              "text": "Pull"
            },
            {
              "id": "b",
              "text": "Push"
            },
            {
              "id": "c",
              "text": "Magnet"
            },
            {
              "id": "d",
              "text": "Gravity"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Pushing a door moves it away from you — that is a push!"
        },
        {
          "id": "prek-physics-l11-q2",
          "text": "Why does an apple fall from a tree?",
          "options": [
            {
              "id": "a",
              "text": "The wind blows it down"
            },
            {
              "id": "b",
              "text": "It is sleepy"
            },
            {
              "id": "c",
              "text": "Gravity pulls it toward the ground"
            },
            {
              "id": "d",
              "text": "Magic"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Gravity is the force that pulls everything down toward Earth!"
        },
        {
          "id": "prek-physics-l11-q3",
          "text": "To make a car go faster down a ramp, you should make the ramp...",
          "options": [
            {
              "id": "a",
              "text": "Flatter"
            },
            {
              "id": "b",
              "text": "Steeper"
            },
            {
              "id": "c",
              "text": "Wider"
            },
            {
              "id": "d",
              "text": "Softer"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Steeper ramps let gravity pull things down faster!"
        },
        {
          "id": "prek-physics-l11-q4",
          "text": "Which will a magnet stick to?",
          "options": [
            {
              "id": "a",
              "text": "A plastic toy"
            },
            {
              "id": "b",
              "text": "A metal key"
            },
            {
              "id": "c",
              "text": "A wooden block"
            },
            {
              "id": "d",
              "text": "A rubber ball"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Magnets attract metal! Keys are usually made of metal."
        },
        {
          "id": "prek-physics-l11-q5",
          "text": "What is the strongest shape for building?",
          "options": [
            {
              "id": "a",
              "text": "Circle"
            },
            {
              "id": "b",
              "text": "Square"
            },
            {
              "id": "c",
              "text": "Triangle"
            },
            {
              "id": "d",
              "text": "Squiggly line"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Triangles cannot be squished flat — they are the strongest!"
        },
        {
          "id": "prek-physics-l11-q6",
          "text": "A very GENTLE push makes a toy go...",
          "options": [
            {
              "id": "a",
              "text": "Super fast"
            },
            {
              "id": "b",
              "text": "Slowly, just a little bit"
            },
            {
              "id": "c",
              "text": "Backward"
            },
            {
              "id": "d",
              "text": "Up into the air"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Less force means less movement — a gentle push = a short, slow roll!"
        }
      ]
    }
  ]
};
