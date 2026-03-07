import type { LearningModule } from "@/lib/modules/types";

export const pre_k_geography_101_Module: LearningModule = {
  "id": "pre-k-geography-101",
  "title": "Pre-K My World Around Me",
  "description": "A fun geography adventure for children ages 3-5. Explore your home, neighborhood, land and water, maps, weather, and the seven continents — discovering the wonderful world all around you!",
  "subject": "Geography",
  "tags": [
    "pre-k",
    "curriculum",
    "interactive"
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
    "Name rooms in a home and what people do in each one",
    "Describe places in a neighborhood: school, store, park, library, and fire station",
    "Tell the difference between land and water",
    "Identify symbols on a simple picture map using a key",
    "Describe hot and cold weather and what to wear",
    "Name the seven continents and one fact about each",
    "Sort geographical features into land and water groups"
  ],
  "lessons": [
    {
      "id": "prek-geography-l01",
      "title": "My Home",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Name four rooms in a home: kitchen, bedroom, bathroom, living room",
        "Tell what people do in each room",
        "Describe what makes a home feel safe and cozy"
      ],
      "chunks": [
        {
          "id": "prek-geography-l01-c1",
          "title": "Kitchen and Bedroom",
          "content": "The kitchen is where we cook yummy meals! We can mix, stir, and bake delicious food like cookies or mac and cheese. 🧀 It's a busy, happy place. The bedroom is our cozy space for rest. We sleep in a soft bed, snuggle with our favorite toys, and have sweet dreams about fun adventures. Each room in our home is special!"
        },
        {
          "id": "prek-geography-l01-c2",
          "title": "Bathroom and Living Room",
          "content": "In the bathroom, we get clean! We can splash in the tub, wash our hands, and brush our teeth to make them sparkle. The living room is where the family gathers to have fun. We can read exciting stories, play games, and laugh together. 🛋️ It's a place for happy family moments!"
        },
        {
          "id": "prek-geography-l01-c3",
          "title": "Home Sweet Home",
          "content": "Homes can look very different! Some families live in big houses, some live in cozy apartments, and some even live on boats. But no matter what a home looks like, the most important part is the family inside. Home is where you feel safe and loved. 🏠"
        }
      ],
      "flashcards": [
        {
          "id": "prek-geography-l01-f1",
          "front": "Where do you cook food?",
          "back": "Kitchen! 🍳"
        },
        {
          "id": "prek-geography-l01-f2",
          "front": "Where do you sleep?",
          "back": "Bedroom! 🛏️"
        },
        {
          "id": "prek-geography-l01-f3",
          "front": "Where do you brush your teeth?",
          "back": "Bathroom! 🪥"
        },
        {
          "id": "prek-geography-l01-f4",
          "front": "Where does the family play together?",
          "back": "Living room! 🛋️"
        }
      ],
      "questions": [
        {
          "id": "prek-geography-l01-q1",
          "text": "Where does the family cook food?",
          "options": [
            {
              "id": "a",
              "text": "Kitchen"
            },
            {
              "id": "b",
              "text": "Bedroom"
            },
            {
              "id": "c",
              "text": "Bathroom"
            },
            {
              "id": "d",
              "text": "Garage"
            }
          ],
          "correctOptionId": "a",
          "explanation": "We cook food in the kitchen!"
        },
        {
          "id": "prek-geography-l01-q2",
          "text": "Where do you sleep at night?",
          "options": [
            {
              "id": "a",
              "text": "Bedroom"
            },
            {
              "id": "b",
              "text": "Kitchen"
            },
            {
              "id": "c",
              "text": "Living room"
            },
            {
              "id": "d",
              "text": "Backyard"
            }
          ],
          "correctOptionId": "a",
          "explanation": "We sleep in the bedroom!"
        },
        {
          "id": "prek-geography-l01-q3",
          "text": "Where do you brush your teeth?",
          "options": [
            {
              "id": "a",
              "text": "Bathroom"
            },
            {
              "id": "b",
              "text": "Bedroom"
            },
            {
              "id": "c",
              "text": "Kitchen"
            },
            {
              "id": "d",
              "text": "Living room"
            }
          ],
          "correctOptionId": "a",
          "explanation": "We brush teeth in the bathroom!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "prek-geography-l01-act1",
          "type": "drawing_canvas",
          "title": "Draw Your Favorite Room",
          "description": "Think about all the rooms in your home. Which one is your favorite? Draw a picture of it!"
        }
      ],
      "learningAids": [
        {
          "id": "prek-geography-l01-a1",
          "type": "printable",
          "title": "My Home Picture Cards",
          "content": "Printable cards showing a kitchen, bedroom, bathroom, and living room. Use them for a fun matching game!"
        }
      ]
    },
    {
      "id": "prek-geography-l02",
      "title": "My Neighborhood",
      "type": "interactive",
      "duration": 8,
      "objectives": [
        "Name five places in a neighborhood: school, store, park, library, fire station",
        "Describe what happens at each place",
        "Understand that neighbors help each other"
      ],
      "chunks": [
        {
          "id": "prek-geography-l02-c1",
          "title": "School and Store",
          "content": "School is a fun place to learn new things, like your ABCs, and make new friends! You get to play games, sing songs, and create art. The store is where we go to buy things we need, like yummy food. You can help pick out fresh apples 🍎 or your favorite snack to take home!"
        },
        {
          "id": "prek-geography-l02-c2",
          "title": "Park and Library",
          "content": "The park is a wonderful place for outdoor fun! You can fly high on the swings, zip down the slide, and run on the soft green grass. 🌳 The library is a quiet, magical place full of books. You can borrow picture books for free and go on amazing adventures in the stories you read!"
        },
        {
          "id": "prek-geography-l02-c3",
          "title": "Fire Station",
          "content": "The fire station is home to big, red fire trucks and brave firefighters! They wear shiny helmets and are always ready to help people in our neighborhood. 🚒 Firefighters are community heroes who keep us safe."
        }
      ],
      "flashcards": [
        {
          "id": "prek-geography-l02-f1",
          "front": "Where do you learn ABCs?",
          "back": "School! 🏫"
        },
        {
          "id": "prek-geography-l02-f2",
          "front": "Where do you buy apples?",
          "back": "Store! 🏪"
        },
        {
          "id": "prek-geography-l02-f3",
          "front": "Where are the swings?",
          "back": "Park! 🌳"
        },
        {
          "id": "prek-geography-l02-f4",
          "front": "Where do you borrow books?",
          "back": "Library! 📚"
        }
      ],
      "questions": [
        {
          "id": "prek-geography-l02-q1",
          "text": "Where do you learn ABCs and make friends?",
          "options": [
            {
              "id": "a",
              "text": "School"
            },
            {
              "id": "b",
              "text": "Store"
            },
            {
              "id": "c",
              "text": "Fire station"
            },
            {
              "id": "d",
              "text": "Park"
            }
          ],
          "correctOptionId": "a",
          "explanation": "School is where we learn!"
        },
        {
          "id": "prek-geography-l02-q2",
          "text": "Where are the swings and slides?",
          "options": [
            {
              "id": "a",
              "text": "Park"
            },
            {
              "id": "b",
              "text": "Library"
            },
            {
              "id": "c",
              "text": "Store"
            },
            {
              "id": "d",
              "text": "School"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Swings are at the park!"
        },
        {
          "id": "prek-geography-l02-q3",
          "text": "Where can you borrow books for free?",
          "options": [
            {
              "id": "a",
              "text": "Library"
            },
            {
              "id": "b",
              "text": "Fire station"
            },
            {
              "id": "c",
              "text": "Park"
            },
            {
              "id": "d",
              "text": "Store"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Libraries lend books for free!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "prek-geography-l02-act1",
          "type": "real_world_activity",
          "title": "Neighborhood I-Spy",
          "description": "With a grown-up, take a walk or look out your window. Can you spy a school, a store, or a park? What else do you see?"
        }
      ],
      "learningAids": [
        {
          "id": "prek-geography-l02-a1",
          "type": "printable",
          "title": "Neighborhood Coloring Page",
          "content": "A fun coloring page with a school, park, library, and store. Talk about each place as you color it!"
        }
      ]
    },
    {
      "id": "prek-geography-l03",
      "title": "Land and Water",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Tell the difference between land and water",
        "Name three land features: mountain, hill, valley",
        "Name three water features: ocean, river, lake"
      ],
      "chunks": [
        {
          "id": "prek-geography-l03-c1",
          "title": "Land Features",
          "content": "Land is the ground we walk and play on! 🌍 Some land is flat, and some is bumpy. Mountains are very, very tall pieces of land that can touch the clouds! ⛰️ A hill is like a small, round mountain that's fun to roll down. A valley is the low land between hills or mountains."
        },
        {
          "id": "prek-geography-l03-c2",
          "title": "Water Features",
          "content": "Our world has lots of water! An ocean is a huge body of salty water where big whales and colorful fish swim. 🌊 A river is like a long, twisty snake of water that flows across the land. A lake is a big pool of water with land all around it, perfect for splashing!"
        },
        {
          "id": "prek-geography-l03-c3",
          "title": "Land and Water Together",
          "content": "Land and water are everywhere! Fish live in the water, and rabbits live on the land. Some animals, like ducks, love both! They swim in the water and waddle on the land. 🦆 It's amazing how land and water create homes for all the animals."
        }
      ],
      "flashcards": [
        {
          "id": "prek-geography-l03-f1",
          "front": "What is super tall and touches the clouds?",
          "back": "Mountain! ⛰️"
        },
        {
          "id": "prek-geography-l03-f2",
          "front": "What is a giant body of saltwater?",
          "back": "Ocean! 🌊"
        },
        {
          "id": "prek-geography-l03-f3",
          "front": "What flows like a long twisty snake?",
          "back": "River! 🏞️"
        },
        {
          "id": "prek-geography-l03-f4",
          "front": "What is water with land all around it?",
          "back": "Lake! 💧"
        }
      ],
      "questions": [
        {
          "id": "prek-geography-l03-q1",
          "text": "What is super tall and touches the clouds?",
          "options": [
            {
              "id": "a",
              "text": "Mountain"
            },
            {
              "id": "b",
              "text": "Lake"
            },
            {
              "id": "c",
              "text": "River"
            },
            {
              "id": "d",
              "text": "Valley"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Mountains are super tall!"
        },
        {
          "id": "prek-geography-l03-q2",
          "text": "What is the giant body of saltwater?",
          "options": [
            {
              "id": "a",
              "text": "Ocean"
            },
            {
              "id": "b",
              "text": "Lake"
            },
            {
              "id": "c",
              "text": "River"
            },
            {
              "id": "d",
              "text": "Hill"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Oceans are huge and salty!"
        },
        {
          "id": "prek-geography-l03-q3",
          "text": "What flows like a long twisty snake?",
          "options": [
            {
              "id": "a",
              "text": "River"
            },
            {
              "id": "b",
              "text": "Mountain"
            },
            {
              "id": "c",
              "text": "Valley"
            },
            {
              "id": "d",
              "text": "Ocean"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Rivers flow like snakes!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "prek-geography-l03-act1",
          "type": "sorting_buckets",
          "title": "Land or Water Sort",
          "description": "Look at pictures of mountains, oceans, rivers, and hills. Drag each one into the 'LAND' bucket or the 'WATER' bucket."
        }
      ],
      "learningAids": [
        {
          "id": "prek-geography-l03-a1",
          "type": "printable",
          "title": "Land and Water Sorting Cards",
          "content": "Print and cut out picture cards of landforms and water bodies. Sort them into two piles: Land and Water."
        }
      ]
    },
    {
      "id": "prek-geography-l04",
      "title": "Geography Checkpoint",
      "type": "quiz",
      "duration": 5,
      "objectives": [
        "Review homes, neighborhoods, and land versus water",
        "Match places with what you do there"
      ],
      "chunks": [
        {
          "id": "prek-geography-l04-c1",
          "title": "Home Review",
          "content": "Remember your home! It has a kitchen for cooking, a bedroom for sleeping, a bathroom for getting clean, and a living room for family fun."
        },
        {
          "id": "prek-geography-l04-c2",
          "title": "Neighborhood Review",
          "content": "Your neighborhood has helpful places! There are schools for learning, stores for shopping, parks for playing, and libraries for reading."
        },
        {
          "id": "prek-geography-l04-c3",
          "title": "Land and Water Review",
          "content": "Our world is made of land and water. We've learned about tall mountains, flowing rivers, and giant oceans. They make our planet beautiful!"
        }
      ],
      "flashcards": [
        {
          "id": "prek-geography-l04-f1",
          "front": "Where do you cook?",
          "back": "Kitchen! 🍳"
        },
        {
          "id": "prek-geography-l04-f2",
          "front": "Where do you borrow books?",
          "back": "Library! 📚"
        },
        {
          "id": "prek-geography-l04-f3",
          "front": "What is super tall?",
          "back": "Mountain! ⛰️"
        },
        {
          "id": "prek-geography-l04-f4",
          "front": "What is salty and huge?",
          "back": "Ocean! 🌊"
        }
      ],
      "questions": [
        {
          "id": "prek-geography-l04-q1",
          "text": "Where does the family cook food?",
          "options": [
            {
              "id": "a",
              "text": "Kitchen"
            },
            {
              "id": "b",
              "text": "Park"
            },
            {
              "id": "c",
              "text": "Ocean"
            },
            {
              "id": "d",
              "text": "Library"
            }
          ],
          "correctOptionId": "a",
          "explanation": "We cook in the kitchen!"
        },
        {
          "id": "prek-geography-l04-q2",
          "text": "Where are the swings and slides?",
          "options": [
            {
              "id": "a",
              "text": "Park"
            },
            {
              "id": "b",
              "text": "Mountain"
            },
            {
              "id": "c",
              "text": "Bedroom"
            },
            {
              "id": "d",
              "text": "River"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Swings are at the park!"
        },
        {
          "id": "prek-geography-l04-q3",
          "text": "What is the giant body of saltwater?",
          "options": [
            {
              "id": "a",
              "text": "Ocean"
            },
            {
              "id": "b",
              "text": "Kitchen"
            },
            {
              "id": "c",
              "text": "School"
            },
            {
              "id": "d",
              "text": "Hill"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Oceans are big and salty!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "prek-geography-l04-act1",
          "type": "verbal_game",
          "title": "Place Match Game",
          "description": "Let's play a game! I'll say a place, you say what we do there. Ready? Kitchen... (cook!) Park... (swing!) Mountain... (climb!)"
        }
      ],
      "learningAids": [
        {
          "id": "prek-geography-l04-a1",
          "type": "printable",
          "title": "Review Picture Match",
          "content": "A worksheet to draw a line from a place (like a park) to what you do there (like swinging)."
        }
      ]
    },
    {
      "id": "prek-geography-l05",
      "title": "Maps",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Understand that a map is a picture of a place from above",
        "Use a simple key to read a picture map",
        "Follow a simple path on a map to find a treasure"
      ],
      "chunks": [
        {
          "id": "prek-geography-l05-c1",
          "title": "What Is a Map?",
          "content": "A map is like a picture of a place from way up high, like you're a bird flying in the sky! 🗺️ It shows where things are, like your house, the park, and the streets. Maps help us know where to go so we don't get lost."
        },
        {
          "id": "prek-geography-l05-c2",
          "title": "Map Key",
          "content": "A map key is a secret code that tells us what the pictures on the map mean. A little picture of a tree might mean there's a park. A star 🌟 might show where your school is. The key helps us read the map and find all the cool places!"
        },
        {
          "id": "prek-geography-l05-c3",
          "title": "Following a Path",
          "content": "Let's go on a treasure hunt! We can use our finger to follow a path on a map. Start at the house, follow the line past the big tree, and turn at the store. Hooray, you found the treasure at the park! 🎉 Maps help us find our way to fun adventures."
        }
      ],
      "flashcards": [
        {
          "id": "prek-geography-l05-f1",
          "front": "What is a bird's-eye picture of a place?",
          "back": "Map! 🗺️"
        },
        {
          "id": "prek-geography-l05-f2",
          "front": "What tells you what map pictures mean?",
          "back": "Key!"
        },
        {
          "id": "prek-geography-l05-f3",
          "front": "What shape might mean 'school' on a map?",
          "back": "Star! ⭐"
        },
        {
          "id": "prek-geography-l05-f4",
          "front": "What do you follow on a map?",
          "back": "Path!"
        }
      ],
      "questions": [
        {
          "id": "prek-geography-l05-q1",
          "text": "What is a bird's-eye picture of a place?",
          "options": [
            {
              "id": "a",
              "text": "Map"
            },
            {
              "id": "b",
              "text": "Book"
            },
            {
              "id": "c",
              "text": "Song"
            },
            {
              "id": "d",
              "text": "Clock"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Maps are pictures from above!"
        },
        {
          "id": "prek-geography-l05-q2",
          "text": "What tells you what the pictures on a map mean?",
          "options": [
            {
              "id": "a",
              "text": "Key"
            },
            {
              "id": "b",
              "text": "Lock"
            },
            {
              "id": "c",
              "text": "Door"
            },
            {
              "id": "d",
              "text": "Window"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A key explains the map symbols!"
        },
        {
          "id": "prek-geography-l05-q3",
          "text": "What do you follow on a map to get somewhere?",
          "options": [
            {
              "id": "a",
              "text": "Path"
            },
            {
              "id": "b",
              "text": "Clouds"
            },
            {
              "id": "c",
              "text": "Stars"
            },
            {
              "id": "d",
              "text": "Food"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Follow the path on a map!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "prek-geography-l05-act1",
          "type": "drawing_canvas",
          "title": "Draw a Map of Your Room",
          "description": "Pretend you're a bird flying over your room. Draw where your bed, door, and toys are. You can even make a key with little pictures!"
        }
      ],
      "learningAids": [
        {
          "id": "prek-geography-l05-a1",
          "type": "printable",
          "title": "Treasure Map Activity",
          "content": "A printable treasure map! Follow the path with your finger from the start to the 'X' that marks the spot."
        }
      ]
    },
    {
      "id": "prek-geography-l06",
      "title": "Hot and Cold Places",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Tell the difference between hot places and cold places",
        "Name animals that live in each: camel (hot), penguin (cold)",
        "Choose the right clothing for hot and cold weather"
      ],
      "chunks": [
        {
          "id": "prek-geography-l06-c1",
          "title": "Hot Places",
          "content": "Some places on Earth are very hot! ☀️ In the sandy desert, the sun is bright and it's very warm. Camels live here, and they have humps to help them go a long time without water. In the jungle, it's hot and rainy. Colorful parrots and playful monkeys live among the tall trees."
        },
        {
          "id": "prek-geography-l06-c2",
          "title": "Cold Places",
          "content": "Brrr! Some places are very cold! ❄️ The North and South Poles are covered in ice and snow. Penguins waddle on the ice in Antarctica, and fluffy polar bears with thick fur live in the cold Arctic. They are built to stay warm in chilly weather!"
        },
        {
          "id": "prek-geography-l06-c3",
          "title": "What to Wear",
          "content": "We dress for the weather! When it's hot, we wear shorts and t-shirts to stay cool. When it's cold, we bundle up in a warm coat, a cozy hat, and mittens to keep us from getting chilly. 🧤 Dressing right helps us have fun no matter what it's like outside!"
        }
      ],
      "flashcards": [
        {
          "id": "prek-geography-l06-f1",
          "front": "What animal lives in the hot desert?",
          "back": "Camel! 🐪"
        },
        {
          "id": "prek-geography-l06-f2",
          "front": "What animal waddles on cold ice?",
          "back": "Penguin! 🐧"
        },
        {
          "id": "prek-geography-l06-f3",
          "front": "What do you wear in hot weather?",
          "back": "Shorts and a t-shirt! ☀️"
        },
        {
          "id": "prek-geography-l06-f4",
          "front": "What do you wear in cold weather?",
          "back": "Coat, hat, and mittens! 🧤"
        }
      ],
      "questions": [
        {
          "id": "prek-geography-l06-q1",
          "text": "What animal lives in the hot sandy desert?",
          "options": [
            {
              "id": "a",
              "text": "Camel"
            },
            {
              "id": "b",
              "text": "Penguin"
            },
            {
              "id": "c",
              "text": "Polar bear"
            },
            {
              "id": "d",
              "text": "Seal"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Camels live in hot deserts!"
        },
        {
          "id": "prek-geography-l06-q2",
          "text": "What animal waddles on cold ice?",
          "options": [
            {
              "id": "a",
              "text": "Penguin"
            },
            {
              "id": "b",
              "text": "Camel"
            },
            {
              "id": "c",
              "text": "Monkey"
            },
            {
              "id": "d",
              "text": "Parrot"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Penguins waddle on ice!"
        },
        {
          "id": "prek-geography-l06-q3",
          "text": "What should you wear on a cold snowy day?",
          "options": [
            {
              "id": "a",
              "text": "Coat, hat, and mittens"
            },
            {
              "id": "b",
              "text": "Shorts and flip flops"
            },
            {
              "id": "c",
              "text": "Swimsuit"
            },
            {
              "id": "d",
              "text": "Just socks"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Bundle up when it is cold!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "prek-geography-l06-act1",
          "type": "sorting_buckets",
          "title": "Hot or Cold?",
          "description": "Look at pictures of a desert, ice, a jungle, and snow. Sort each picture into the 'HOT' bucket or the 'COLD' bucket."
        }
      ],
      "learningAids": [
        {
          "id": "prek-geography-l06-a1",
          "type": "printable",
          "title": "Dress the Bear Activity",
          "content": "A printable bear with different clothes. Dress the bear for a hot, sunny day and then for a cold, snowy day!"
        }
      ]
    },
    {
      "id": "prek-geography-l07",
      "title": "Continents",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Know that there are seven continents on Earth",
        "Name the seven continents",
        "Tell one fun fact about each continent"
      ],
      "chunks": [
        {
          "id": "prek-geography-l07-c1",
          "title": "North America, South America, Europe",
          "content": "Our world has seven huge pieces of land called continents. Let's learn about three! North America is where you can find the giant Grand Canyon. South America is home to the amazing Amazon jungle with colorful toucans. And in Europe, you can see the very tall Eiffel Tower in Paris! 🌎"
        },
        {
          "id": "prek-geography-l07-c2",
          "title": "Africa, Asia, Australia",
          "content": "Let's explore more continents! Africa has big lions and the huge Sahara Desert. Asia is where you can find cute pandas eating bamboo and the Great Wall of China. 🐼 And Australia is home to bouncing kangaroos and cuddly koalas. Each continent is so different!"
        },
        {
          "id": "prek-geography-l07-c3",
          "title": "Antarctica",
          "content": "Our last continent is Antarctica! It's the coldest place on Earth, covered in ice and snow. 🧊 It's so cold that only special animals like penguins can live there. There are no towns or stores, just lots and lots of ice! Now you know all seven continents!"
        }
      ],
      "flashcards": [
        {
          "id": "prek-geography-l07-f1",
          "front": "Where is the Grand Canyon?",
          "back": "North America! 🌎"
        },
        {
          "id": "prek-geography-l07-f2",
          "front": "Where do pandas live?",
          "back": "Asia! 🐼"
        },
        {
          "id": "prek-geography-l07-f3",
          "front": "Where do kangaroos bounce?",
          "back": "Australia! 🦘"
        },
        {
          "id": "prek-geography-l07-f4",
          "front": "What is the coldest continent?",
          "back": "Antarctica! 🧊"
        }
      ],
      "questions": [
        {
          "id": "prek-geography-l07-q1",
          "text": "Where is the Grand Canyon?",
          "options": [
            {
              "id": "a",
              "text": "North America"
            },
            {
              "id": "b",
              "text": "Africa"
            },
            {
              "id": "c",
              "text": "Antarctica"
            },
            {
              "id": "d",
              "text": "Asia"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The Grand Canyon is in North America!"
        },
        {
          "id": "prek-geography-l07-q2",
          "text": "Where do pandas live?",
          "options": [
            {
              "id": "a",
              "text": "Asia"
            },
            {
              "id": "b",
              "text": "Australia"
            },
            {
              "id": "c",
              "text": "Europe"
            },
            {
              "id": "d",
              "text": "South America"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Pandas live in Asia!"
        },
        {
          "id": "prek-geography-l07-q3",
          "text": "What is the coldest continent where penguins live?",
          "options": [
            {
              "id": "a",
              "text": "Antarctica"
            },
            {
              "id": "b",
              "text": "Africa"
            },
            {
              "id": "c",
              "text": "Australia"
            },
            {
              "id": "d",
              "text": "Europe"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Antarctica is the coldest!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "prek-geography-l07-act1",
          "type": "sing_along",
          "title": "Continent Song",
          "description": "Sing the seven continents song to the tune of 'Twinkle, Twinkle, Little Star': North America, South America, Europe, Africa, Asia, Australia, Antarctica — seven continents on our Earth!"
        }
      ],
      "learningAids": [
        {
          "id": "prek-geography-l07-a1",
          "type": "printable",
          "title": "World Map Coloring Page",
          "content": "A simple map of the seven continents. Color each continent a different color!"
        }
      ]
    },
    {
      "id": "prek-geography-l08",
      "title": "Geography Celebration Quiz",
      "type": "quiz",
      "duration": 5,
      "objectives": [
        "Review everything about homes, neighborhoods, maps, and continents",
        "Demonstrate knowledge of land versus water features",
        "Show understanding of hot and cold places"
      ],
      "chunks": [
        {
          "id": "prek-geography-l08-c1",
          "title": "Places We Know",
          "content": "You've learned so much! You know about rooms in a home, places in your neighborhood, and how to read a map. You are a great explorer! 🗺️"
        },
        {
          "id": "prek-geography-l08-c2",
          "title": "Land, Water, and Weather",
          "content": "Remember all the amazing things on our Earth? Tall mountains, big oceans, hot deserts, and cold, snowy places. Our world is full of wonders!"
        },
        {
          "id": "prek-geography-l08-c3",
          "title": "Seven Continents",
          "content": "There are seven continents on our planet: North America, South America, Europe, Africa, Asia, Australia, and Antarctica. You know them all! 🌍"
        }
      ],
      "flashcards": [
        {
          "id": "prek-geography-l08-f1",
          "front": "Where do you cook?",
          "back": "Kitchen! 🍳"
        },
        {
          "id": "prek-geography-l08-f2",
          "front": "What is super tall and touches clouds?",
          "back": "Mountain! ⛰️"
        },
        {
          "id": "prek-geography-l08-f3",
          "front": "How many continents are there?",
          "back": "Seven! 🌍"
        },
        {
          "id": "prek-geography-l08-f4",
          "front": "What animal lives in cold Antarctica?",
          "back": "Penguin! 🐧"
        }
      ],
      "questions": [
        {
          "id": "prek-geography-l08-q1",
          "text": "Where does the family cook food?",
          "options": [
            {
              "id": "a",
              "text": "Kitchen"
            },
            {
              "id": "b",
              "text": "Antarctica"
            },
            {
              "id": "c",
              "text": "Ocean"
            },
            {
              "id": "d",
              "text": "Mountain"
            }
          ],
          "correctOptionId": "a",
          "explanation": "We cook in the kitchen!"
        },
        {
          "id": "prek-geography-l08-q2",
          "text": "What is a bird's-eye picture of a place?",
          "options": [
            {
              "id": "a",
              "text": "Map"
            },
            {
              "id": "b",
              "text": "Song"
            },
            {
              "id": "c",
              "text": "Story"
            },
            {
              "id": "d",
              "text": "Painting"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A map shows places from above!"
        },
        {
          "id": "prek-geography-l08-q3",
          "text": "How many continents are on Earth?",
          "options": [
            {
              "id": "a",
              "text": "Seven"
            },
            {
              "id": "b",
              "text": "Three"
            },
            {
              "id": "c",
              "text": "Twelve"
            },
            {
              "id": "d",
              "text": "One"
            }
          ],
          "correctOptionId": "a",
          "explanation": "There are seven continents!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "prek-geography-l08-act1",
          "type": "drawing_canvas",
          "title": "My World Drawing",
          "description": "Draw your favorite thing you learned about. Was it a place in your neighborhood, a tall mountain, a map, or a penguin in Antarctica? Show us what you know!"
        }
      ],
      "learningAids": [
        {
          "id": "prek-geography-l08-a1",
          "type": "printable",
          "title": "Geography Explorer Certificate",
          "content": "A fun certificate to print and fill out to celebrate completing the 'My World Around Me' module. Great job, explorer!"
        }
      ]
    }
  ]
};
