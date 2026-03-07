import type { LearningModule } from "@/lib/modules/types";

export const pre_k_biology_101_Module: LearningModule = {
  "id": "pre-k-biology-101",
  "title": "Pre-K Amazing Animals & Nature",
  "description": "A delightful biology adventure for children ages 3-5. Discover farm animals, pets, and wild animals; learn about plant parts and how seeds grow; and explore the tiny world of insects — all through playful stories and hands-on activities.",
  "subject": "Biology",
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
    "Name common farm animals and the sounds they make",
    "Name common pet animals and describe their special features",
    "Name common wild animals and where they live",
    "Point to and name the four main parts of a plant: roots, stem, leaves, flower",
    "Tell about what seeds need to grow: soil, water, and sunlight",
    "Name common insects and tell what makes them special",
    "Sort living things into groups: farm, pet, wild, plant, and insect"
  ],
  "lessons": [
    {
      "id": "prek-biology-l01",
      "title": "On the Farm",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Name five farm animals: cow, pig, chicken, horse, sheep",
        "Match each animal to the sound it makes",
        "Describe one fun fact about each animal"
      ],
      "chunks": [
        {
          "id": "prek-biology-l01-c1",
          "title": "Cows and Pigs",
          "content": "Let's visit the farm! First, we see a cow. A cow says 'Mooooo!' 🐮 Cows give us yummy milk for our cereal. Look, a pig! A pig says 'Oink, oink!' 🐷 Pigs love to roll in the cool, squishy mud. It's like their bathtub!"
        },
        {
          "id": "prek-biology-l01-c2",
          "title": "Chickens and Horses",
          "content": "Peck, peck, peck! Here comes a chicken. A chicken says 'Cluck, cluck!' 🐔 Chickens lay the eggs we eat for breakfast. And who is this? It's a big horse! A horse says 'Neigh!' 🐴 Horses are strong and can run super fast, like the wind!"
        },
        {
          "id": "prek-biology-l01-c3",
          "title": "Sheep",
          "content": "Look at the fluffy sheep! A sheep says 'Baa, baa!' 🐑 Their wool is soft and warm, like a blanket. We use their wool to make cozy sweaters to wear when it's cold."
        }
      ],
      "flashcards": [
        {
          "id": "prek-biology-l01-f1",
          "front": "What animal says 'moo' and gives milk?",
          "back": "Cow! 🐮"
        },
        {
          "id": "prek-biology-l01-f2",
          "front": "What animal has a curly tail and rolls in mud?",
          "back": "Pig! 🐷"
        },
        {
          "id": "prek-biology-l01-f3",
          "front": "What animal lays an egg every day?",
          "back": "Chicken! 🐔"
        },
        {
          "id": "prek-biology-l01-f4",
          "front": "What animal says 'baa' and gives us wool?",
          "back": "Sheep! 🐑"
        },
        {
          "id": "prek-biology-l01-f5",
          "front": "What animal says 'neigh' and runs fast?",
          "back": "Horse! 🐴"
        }
      ],
      "questions": [
        {
          "id": "prek-biology-l01-q1",
          "text": "Which animal says 'moo' and gives us milk?",
          "options": [
            {
              "id": "a",
              "text": "Cow"
            },
            {
              "id": "b",
              "text": "Pig"
            },
            {
              "id": "c",
              "text": "Chicken"
            },
            {
              "id": "d",
              "text": "Horse"
            }
          ],
          "correctOptionId": "a",
          "explanation": "That's right! Cows say 'moo' and give us milk!"
        },
        {
          "id": "prek-biology-l01-q2",
          "text": "Which animal lays an egg every day?",
          "options": [
            {
              "id": "a",
              "text": "Chicken"
            },
            {
              "id": "b",
              "text": "Cow"
            },
            {
              "id": "c",
              "text": "Sheep"
            },
            {
              "id": "d",
              "text": "Pig"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Yes! Chickens say 'cluck, cluck' and lay eggs!"
        },
        {
          "id": "prek-biology-l01-q3",
          "text": "Which animal has a curly tail and loves mud?",
          "options": [
            {
              "id": "a",
              "text": "Pig"
            },
            {
              "id": "b",
              "text": "Horse"
            },
            {
              "id": "c",
              "text": "Sheep"
            },
            {
              "id": "d",
              "text": "Cow"
            }
          ],
          "correctOptionId": "a",
          "explanation": "You got it! Pigs say 'oink' and love to roll in the mud!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "prek-biology-l01-act1",
          "type": "role_playing",
          "title": "Farm Sound Fun",
          "description": "Listen to farm animal sounds. Can you 'moo' like a cow? Can you 'oink' like a pig? Let's make all the sounds!"
        }
      ],
      "learningAids": [
        {
          "id": "prek-biology-l01-a1",
          "type": "image",
          "title": "Happy Farm Friends",
          "content": "A colorful picture showing a cow, pig, chicken, horse, and sheep in a happy farm scene."
        }
      ]
    },
    {
      "id": "prek-biology-l02",
      "title": "Our Animal Friends: Pets",
      "type": "interactive",
      "duration": 8,
      "objectives": [
        "Name five common pets: dog, cat, fish, hamster, rabbit",
        "Describe what makes each pet special",
        "Tell how pets move and what they eat"
      ],
      "chunks": [
        {
          "id": "prek-biology-l02-c1",
          "title": "Dogs and Cats",
          "content": "Some animals live in our homes. They are our pets! A dog says 'Woof, woof!' and wags its tail when it's happy to see you. 🐶 A cat says 'Meow!' and makes a soft, rumbly purring sound when you pet it. That means it's happy, too! 🐱"
        },
        {
          "id": "prek-biology-l02-c2",
          "title": "Fish and Hamsters",
          "content": "Look in the fishbowl! A fish swims all day. Swish, swish! 🐟 Fish breathe underwater with special gills. What's that running on a wheel? It's a hamster! 🐹 Hamsters have big cheeks to store snacks and love to run at night."
        },
        {
          "id": "prek-biology-l02-c3",
          "title": "Rabbits",
          "content": "Boing, boing! Here comes a rabbit! 🐰 Rabbits have long ears to hear everything and strong back legs for hopping. They love to munch on crunchy carrots!"
        }
      ],
      "flashcards": [
        {
          "id": "prek-biology-l02-f1",
          "front": "What pet wags its tail when happy?",
          "back": "Dog! 🐶"
        },
        {
          "id": "prek-biology-l02-f2",
          "front": "What pet purrs like a little motor?",
          "back": "Cat! 🐱"
        },
        {
          "id": "prek-biology-l02-f3",
          "front": "What pet swims and has no legs?",
          "back": "Fish! 🐟"
        },
        {
          "id": "prek-biology-l02-f4",
          "front": "What pet hops with long ears?",
          "back": "Rabbit! 🐰"
        },
        {
          "id": "prek-biology-l02-f5",
          "front": "What pet runs on a wheel and has big cheeks?",
          "back": "Hamster! 🐹"
        }
      ],
      "questions": [
        {
          "id": "prek-biology-l02-q1",
          "text": "Which pet wags its tail when it is happy?",
          "options": [
            {
              "id": "a",
              "text": "Dog"
            },
            {
              "id": "b",
              "text": "Fish"
            },
            {
              "id": "c",
              "text": "Hamster"
            },
            {
              "id": "d",
              "text": "Rabbit"
            }
          ],
          "correctOptionId": "a",
          "explanation": "That's right! Dogs wag their tails when they are happy!"
        },
        {
          "id": "prek-biology-l02-q2",
          "text": "Which pet swims underwater with no legs?",
          "options": [
            {
              "id": "a",
              "text": "Fish"
            },
            {
              "id": "b",
              "text": "Cat"
            },
            {
              "id": "c",
              "text": "Dog"
            },
            {
              "id": "d",
              "text": "Hamster"
            }
          ],
          "correctOptionId": "a",
          "explanation": "You got it! Fish use their fins to swim all day!"
        },
        {
          "id": "prek-biology-l02-q3",
          "text": "Which pet hops with long ears?",
          "options": [
            {
              "id": "a",
              "text": "Rabbit"
            },
            {
              "id": "b",
              "text": "Hamster"
            },
            {
              "id": "c",
              "text": "Fish"
            },
            {
              "id": "d",
              "text": "Cat"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Yes! Rabbits love to hop, hop, hop!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "prek-biology-l02-act1",
          "type": "role_playing",
          "title": "Pretend to be a Pet!",
          "description": "Let's pretend to be pets! Can you wag your tail like a happy dog? Can you hop like a bunny? Can you swim like a fish?"
        }
      ],
      "learningAids": [
        {
          "id": "prek-biology-l02-a1",
          "type": "image",
          "title": "Caring for Pets",
          "content": "A picture showing a child gently playing with a dog, cat, fish, hamster, and rabbit."
        }
      ]
    },
    {
      "id": "prek-biology-l03",
      "title": "Into the Wild",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Name five wild animals: lion, elephant, bear, giraffe, monkey",
        "Tell one amazing fact about each animal",
        "Understand that wild animals live in nature, not in homes"
      ],
      "chunks": [
        {
          "id": "prek-biology-l03-c1",
          "title": "Lion and Elephant",
          "content": "Wild animals live in nature, in places like jungles and savannas. The lion is the king! It lets out a big, loud 'ROAR!' 🦁 The elephant is the biggest animal on land. It uses its long trunk like a straw to drink water. Whoosh! 🐘"
        },
        {
          "id": "prek-biology-l03-c2",
          "title": "Bear and Giraffe",
          "content": "A big bear has a great sense of smell to find yummy berries. In winter, bears take a long nap called hibernation. Zzzz. 🐻 A giraffe has a super, super long neck to reach leaves at the top of tall trees. Munch, munch! 🦒"
        },
        {
          "id": "prek-biology-l03-c3",
          "title": "Monkey",
          "content": "Look up in the trees! It's a monkey! Monkeys are playful and love to swing from branch to branch with their long tails. 🐵 They also love to eat sweet bananas!"
        }
      ],
      "flashcards": [
        {
          "id": "prek-biology-l03-f1",
          "front": "Which animal roars really loud?",
          "back": "Lion! 🦁"
        },
        {
          "id": "prek-biology-l03-f2",
          "front": "Which animal has a super long trunk?",
          "back": "Elephant! 🐘"
        },
        {
          "id": "prek-biology-l03-f3",
          "front": "Which animal has a super long neck to eat leaves?",
          "back": "Giraffe! 🦒"
        },
        {
          "id": "prek-biology-l03-f4",
          "front": "Which animal swings with its tail?",
          "back": "Monkey! 🐵"
        }
      ],
      "questions": [
        {
          "id": "prek-biology-l03-q1",
          "text": "Which animal roars really loud?",
          "options": [
            {
              "id": "a",
              "text": "Lion"
            },
            {
              "id": "b",
              "text": "Bear"
            },
            {
              "id": "c",
              "text": "Giraffe"
            },
            {
              "id": "d",
              "text": "Monkey"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Yes! Lions let out a big ROAR!"
        },
        {
          "id": "prek-biology-l03-q2",
          "text": "Which animal has a trunk like a hose?",
          "options": [
            {
              "id": "a",
              "text": "Elephant"
            },
            {
              "id": "b",
              "text": "Lion"
            },
            {
              "id": "c",
              "text": "Bear"
            },
            {
              "id": "d",
              "text": "Giraffe"
            }
          ],
          "correctOptionId": "a",
          "explanation": "That's right! Elephants have long trunks to drink water!"
        },
        {
          "id": "prek-biology-l03-q3",
          "text": "Which animal swings from trees with its tail?",
          "options": [
            {
              "id": "a",
              "text": "Monkey"
            },
            {
              "id": "b",
              "text": "Giraffe"
            },
            {
              "id": "c",
              "text": "Elephant"
            },
            {
              "id": "d",
              "text": "Bear"
            }
          ],
          "correctOptionId": "a",
          "explanation": "You got it! Monkeys love to swing through the trees!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "prek-biology-l03-act1",
          "type": "role_playing",
          "title": "Wild Animal Safari",
          "description": "Let's go on a pretend safari! Stomp like an elephant! Stretch your neck like a giraffe! Roar like a mighty lion!"
        }
      ],
      "learningAids": [
        {
          "id": "prek-biology-l03-a1",
          "type": "image",
          "title": "Wild Animal World",
          "content": "A vibrant illustration of a jungle/savanna with a lion, elephant, bear, giraffe, and monkey."
        }
      ]
    },
    {
      "id": "prek-biology-l04",
      "title": "Animal Checkpoint",
      "type": "quiz",
      "duration": 5,
      "objectives": [
        "Review farm, pet, and wild animals",
        "Match animals to their sounds and features"
      ],
      "chunks": [
        {
          "id": "prek-biology-l04-c1",
          "title": "Farm Animals Review",
          "content": "Let's remember our farm friends! Who says 'moo' and gives us milk? The cow! 🐮 Who says 'oink' and loves mud? The pig! 🐷 Who says 'cluck, cluck' and lays eggs? The chicken! 🐔"
        },
        {
          "id": "prek-biology-l04-c2",
          "title": "Pet Animals Review",
          "content": "How about our pets? Who wags its tail and says 'woof'? The dog! 🐶 Who purrs when it's happy? The cat! 🐱 Who hops with long ears? The rabbit! 🐰"
        },
        {
          "id": "prek-biology-l04-c3",
          "title": "Wild Animals Review",
          "content": "And the wild animals! Who has a loud 'ROAR'? The lion! 🦁 Who has a long trunk for drinking water? The elephant! 🐘 Who swings through the trees? The monkey! 🐵 You know so many animals!"
        }
      ],
      "flashcards": [
        {
          "id": "prek-biology-l04-f1",
          "front": "Which animal says 'moo'?",
          "back": "Cow! 🐮"
        },
        {
          "id": "prek-biology-l04-f2",
          "front": "Which pet purrs?",
          "back": "Cat! 🐱"
        },
        {
          "id": "prek-biology-l04-f3",
          "front": "Which animal has a long trunk?",
          "back": "Elephant! 🐘"
        },
        {
          "id": "prek-biology-l04-f4",
          "front": "Which animal swings with its tail?",
          "back": "Monkey! 🐵"
        }
      ],
      "questions": [
        {
          "id": "prek-biology-l04-q1",
          "text": "Which animal says 'moo'?",
          "options": [
            {
              "id": "a",
              "text": "Cow"
            },
            {
              "id": "b",
              "text": "Dog"
            },
            {
              "id": "c",
              "text": "Lion"
            },
            {
              "id": "d",
              "text": "Rabbit"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Moooo! That's right, it's the cow!"
        },
        {
          "id": "prek-biology-l04-q2",
          "text": "Which pet purrs when you pet it?",
          "options": [
            {
              "id": "a",
              "text": "Cat"
            },
            {
              "id": "b",
              "text": "Fish"
            },
            {
              "id": "c",
              "text": "Horse"
            },
            {
              "id": "d",
              "text": "Pig"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Purrrrfect! Cats purr when they are happy!"
        },
        {
          "id": "prek-biology-l04-q3",
          "text": "Which wild animal has a long trunk?",
          "options": [
            {
              "id": "a",
              "text": "Elephant"
            },
            {
              "id": "b",
              "text": "Giraffe"
            },
            {
              "id": "c",
              "text": "Monkey"
            },
            {
              "id": "d",
              "text": "Bear"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Great job! Elephants have long trunks!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "prek-biology-l04-act1",
          "type": "role_playing",
          "title": "Animal Parade",
          "description": "Let's have an animal parade! March around the room and make the sound of your favorite animal. Can you be a quiet fish? Can you be a loud lion?"
        }
      ],
      "learningAids": [
        {
          "id": "prek-biology-l04-a1",
          "type": "printable",
          "title": "Animal Groups Coloring Page",
          "content": "A printable coloring page with three sections: Farm (cow, pig), Pet (dog, cat), and Wild (lion, monkey)."
        }
      ]
    },
    {
      "id": "prek-biology-l05",
      "title": "Wonderful Plants",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Name the four main parts of a plant: roots, stem, leaves, flower",
        "Describe what each part does for the plant",
        "Understand that flowers make seeds for new plants"
      ],
      "chunks": [
        {
          "id": "prek-biology-l05-c1",
          "title": "Roots and Stem",
          "content": "Plants have special parts! Down in the dirt are the roots. Roots are like straws, drinking up water for the plant. 🌱 They also hold the plant tight in the ground. The stem is like an elevator, carrying the water up, up, up to the leaves."
        },
        {
          "id": "prek-biology-l05-c2",
          "title": "Leaves",
          "content": "The leaves are the plant's kitchen! 🌿 They use sunshine to make food to help the plant grow big and strong. That's why leaves reach for the sun!"
        },
        {
          "id": "prek-biology-l05-c3",
          "title": "Flowers",
          "content": "And here are the beautiful flowers! 🌸 Flowers are so colorful and pretty. They smell sweet to invite bees to visit. After the bees visit, the flower can make tiny seeds for new baby plants!"
        }
      ],
      "flashcards": [
        {
          "id": "prek-biology-l05-f1",
          "front": "What part drinks water like a straw?",
          "back": "Roots! 🌱"
        },
        {
          "id": "prek-biology-l05-f2",
          "front": "What part is like an elevator for water?",
          "back": "Stem!"
        },
        {
          "id": "prek-biology-l05-f3",
          "front": "What part makes food with sunlight?",
          "back": "Leaves! 🌿"
        },
        {
          "id": "prek-biology-l05-f4",
          "front": "What pretty part makes seeds?",
          "back": "Flower! 🌸"
        }
      ],
      "questions": [
        {
          "id": "prek-biology-l05-q1",
          "text": "What part of the plant drinks water from the dirt?",
          "options": [
            {
              "id": "a",
              "text": "Roots"
            },
            {
              "id": "b",
              "text": "Flower"
            },
            {
              "id": "c",
              "text": "Leaf"
            },
            {
              "id": "d",
              "text": "Stem"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Yes! Roots drink water like straws!"
        },
        {
          "id": "prek-biology-l05-q2",
          "text": "What part makes food with sunlight?",
          "options": [
            {
              "id": "a",
              "text": "Leaves"
            },
            {
              "id": "b",
              "text": "Roots"
            },
            {
              "id": "c",
              "text": "Stem"
            },
            {
              "id": "d",
              "text": "Flower"
            }
          ],
          "correctOptionId": "a",
          "explanation": "You got it! Leaves are the plant's kitchen!"
        },
        {
          "id": "prek-biology-l05-q3",
          "text": "What pretty part makes new seeds?",
          "options": [
            {
              "id": "a",
              "text": "Flower"
            },
            {
              "id": "b",
              "text": "Stem"
            },
            {
              "id": "c",
              "text": "Roots"
            },
            {
              "id": "d",
              "text": "Leaf"
            }
          ],
          "correctOptionId": "a",
          "explanation": "That's right! Beautiful flowers make new seeds!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "prek-biology-l05-act1",
          "type": "exploration",
          "title": "Plant Detective",
          "description": "Let's be plant detectives! Find a plant outside or in your house. Can you gently point to the stem? The leaves? Can you see a flower? What colors is it?"
        }
      ],
      "learningAids": [
        {
          "id": "prek-biology-l05-a1",
          "type": "image",
          "title": "Parts of a Plant",
          "content": "A simple, labeled diagram of a flower, showing the roots, stem, leaves, and flower."
        }
      ]
    },
    {
      "id": "prek-biology-l06",
      "title": "Watch it Grow!",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Know the three things a seed needs: soil, water, sunlight",
        "Describe the order of growth: root, then stem, then leaves",
        "Explain why sunshine helps plants grow tall"
      ],
      "chunks": [
        {
          "id": "prek-biology-l06-c1",
          "title": "A Cozy Bed and a Drink",
          "content": "A tiny seed is like a sleeping baby plant. To grow, it needs a cozy bed of soil. It also needs a big drink of water to wake up! 💧"
        },
        {
          "id": "prek-biology-l06-c2",
          "title": "A Sunny Hug",
          "content": "Seeds also need warm sunshine! ☀️ The sun is like a warm hug that helps the plant grow tall and strong. That's why we put plants in a sunny window."
        },
        {
          "id": "prek-biology-l06-c3",
          "title": "Hello, Little Plant!",
          "content": "Let's watch it grow! First, a little root pushes down into the soil. Then, a green stem pushes up toward the sun! Soon, little leaves open up. Now you have a baby plant!"
        }
      ],
      "flashcards": [
        {
          "id": "prek-biology-l06-f1",
          "front": "What does a seed need to wake up?",
          "back": "Water! 💧"
        },
        {
          "id": "prek-biology-l06-f2",
          "front": "What helps the plant grow tall?",
          "back": "Sunlight! ☀️"
        },
        {
          "id": "prek-biology-l06-f3",
          "front": "What is the soft bed for seeds?",
          "back": "Soil! 🌱"
        },
        {
          "id": "prek-biology-l06-f4",
          "front": "What comes out first — a root or a leaf?",
          "back": "A root!"
        }
      ],
      "questions": [
        {
          "id": "prek-biology-l06-q1",
          "text": "What does a seed need to wake up?",
          "options": [
            {
              "id": "a",
              "text": "Water"
            },
            {
              "id": "b",
              "text": "A dark closet"
            },
            {
              "id": "c",
              "text": "Candy"
            },
            {
              "id": "d",
              "text": "Ice"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Yes! Seeds need a drink of water to wake up and grow!"
        },
        {
          "id": "prek-biology-l06-q2",
          "text": "What helps the plant grow tall and green?",
          "options": [
            {
              "id": "a",
              "text": "Sunlight"
            },
            {
              "id": "b",
              "text": "No water"
            },
            {
              "id": "c",
              "text": "A dark room"
            },
            {
              "id": "d",
              "text": "A cold fridge"
            }
          ],
          "correctOptionId": "a",
          "explanation": "You got it! Sunlight gives plants the energy to grow tall!"
        },
        {
          "id": "prek-biology-l06-q3",
          "text": "What is the soft, cozy bed for seeds?",
          "options": [
            {
              "id": "a",
              "text": "Soil"
            },
            {
              "id": "b",
              "text": "A rock"
            },
            {
              "id": "c",
              "text": "Paper"
            },
            {
              "id": "d",
              "text": "A toy box"
            }
          ],
          "correctOptionId": "a",
          "explanation": "That's right! Seeds love to grow in soft soil!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "prek-biology-l06-act1",
          "type": "hands_on_experiment",
          "title": "Grow a Bean in a Jar",
          "description": "Let's plant a bean! With a grown-up, put a wet paper towel and a bean in a clear jar. Place it in a sunny spot. Check every day to see the roots and stem start to grow!"
        }
      ]
    },
    {
      "id": "prek-biology-l07",
      "title": "The World of Insects",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Name four common insects: ant, bee, butterfly, ladybug",
        "Tell one special thing each insect can do",
        "Understand that a butterfly starts as a caterpillar"
      ],
      "chunks": [
        {
          "id": "prek-biology-l07-c1",
          "title": "Ants and Bees",
          "content": "Let's look for tiny insects! Ants are so strong! They can carry big crumbs of food. March, march, march! 🐜 Bees are busy buzzers. They fly from flower to flower to make sweet honey. Bzzzz! 🐝"
        },
        {
          "id": "prek-biology-l07-c2",
          "title": "Butterflies",
          "content": "A butterfly has a magical life! It starts as a tiny egg. Pop! A hungry caterpillar comes out. Munch, munch! Then it builds a cozy little house called a chrysalis. When it comes out, it's a beautiful butterfly with colorful wings! 🦋"
        },
        {
          "id": "prek-biology-l07-c3",
          "title": "Ladybugs",
          "content": "Look at this little red bug with black spots! It's a ladybug. 🐞 Ladybugs are great helpers in the garden. They eat tiny pests that hurt the plants. Thank you, ladybugs!"
        }
      ],
      "flashcards": [
        {
          "id": "prek-biology-l07-f1",
          "front": "Which insect is super strong?",
          "back": "Ant! 🐜"
        },
        {
          "id": "prek-biology-l07-f2",
          "front": "Which insect makes honey?",
          "back": "Bee! 🐝"
        },
        {
          "id": "prek-biology-l07-f3",
          "front": "What does a butterfly start as?",
          "back": "A caterpillar! 🐛"
        },
        {
          "id": "prek-biology-l07-f4",
          "front": "Which insect has spots and helps gardens?",
          "back": "Ladybug! 🐞"
        }
      ],
      "questions": [
        {
          "id": "prek-biology-l07-q1",
          "text": "Which tiny insect is super strong?",
          "options": [
            {
              "id": "a",
              "text": "Ant"
            },
            {
              "id": "b",
              "text": "Butterfly"
            },
            {
              "id": "c",
              "text": "Ladybug"
            },
            {
              "id": "d",
              "text": "Bee"
            }
          ],
          "correctOptionId": "a",
          "explanation": "You got it! Ants are tiny but super strong!"
        },
        {
          "id": "prek-biology-l07-q2",
          "text": "Which insect makes sweet honey?",
          "options": [
            {
              "id": "a",
              "text": "Bee"
            },
            {
              "id": "b",
              "text": "Ant"
            },
            {
              "id": "c",
              "text": "Ladybug"
            },
            {
              "id": "d",
              "text": "Butterfly"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Bzzzz! That's right, bees make yummy honey!"
        },
        {
          "id": "prek-biology-l07-q3",
          "text": "Which insect starts as a caterpillar?",
          "options": [
            {
              "id": "a",
              "text": "Butterfly"
            },
            {
              "id": "b",
              "text": "Bee"
            },
            {
              "id": "c",
              "text": "Ant"
            },
            {
              "id": "d",
              "text": "Ladybug"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Yes! A caterpillar changes into a beautiful butterfly!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "prek-biology-l07-act1",
          "type": "exploration",
          "title": "Bug Hunt",
          "description": "Let's go on a bug hunt! With a grown-up, gently look under leaves or on flowers. Can you find a busy ant or a pretty ladybug? Remember to just look and not touch."
        }
      ]
    },
    {
      "id": "prek-biology-l08",
      "title": "Nature Explorer Celebration",
      "type": "quiz",
      "duration": 5,
      "objectives": [
        "Review everything learned about animals, plants, and insects",
        "Show understanding of farm, pet, and wild animals",
        "Demonstrate knowledge of plant needs and insect facts"
      ],
      "chunks": [
        {
          "id": "prek-biology-l08-c1",
          "title": "All About Animals",
          "content": "You've learned about so many animals! Farm animals like cows 🐮, pets like dogs 🐶, and wild animals like lions 🦁. Can you make the sound of your favorite animal?"
        },
        {
          "id": "prek-biology-l08-c2",
          "title": "Plants and Growing",
          "content": "You're a plant expert, too! You know that plants need soil, water, and sunlight to grow. 🌱 You know about roots, stems, leaves, and flowers! 🌸"
        },
        {
          "id": "prek-biology-l08-c3",
          "title": "Amazing Insects",
          "content": "And don't forget the amazing insects! Strong ants 🐜, busy bees 🐝, and beautiful butterflies 🦋. You are a nature superstar!"
        }
      ],
      "flashcards": [
        {
          "id": "prek-biology-l08-f1",
          "front": "Which animal says 'moo'?",
          "back": "Cow! 🐮"
        },
        {
          "id": "prek-biology-l08-f2",
          "front": "What do plants need to grow?",
          "back": "Sunlight, water, and soil! 🌱"
        },
        {
          "id": "prek-biology-l08-f3",
          "front": "Which insect makes honey?",
          "back": "Bee! 🐝"
        },
        {
          "id": "prek-biology-l08-f4",
          "front": "Which animal has a long trunk?",
          "back": "Elephant! 🐘"
        }
      ],
      "questions": [
        {
          "id": "prek-biology-l08-q1",
          "text": "Which animal says 'moo' and gives milk?",
          "options": [
            {
              "id": "a",
              "text": "Cow"
            },
            {
              "id": "b",
              "text": "Lion"
            },
            {
              "id": "c",
              "text": "Rabbit"
            },
            {
              "id": "d",
              "text": "Fish"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Great job! Cows say 'moo' and give us milk!"
        },
        {
          "id": "prek-biology-l08-q2",
          "text": "What do seeds need to grow into plants?",
          "options": [
            {
              "id": "a",
              "text": "Soil, water, and sunlight"
            },
            {
              "id": "b",
              "text": "Candy and toys"
            },
            {
              "id": "c",
              "text": "Ice and snow"
            },
            {
              "id": "d",
              "text": "A dark closet"
            }
          ],
          "correctOptionId": "a",
          "explanation": "You're a super scientist! Seeds need soil, water, and sunlight!"
        },
        {
          "id": "prek-biology-l08-q3",
          "text": "Which insect changes from a caterpillar into a flying friend with beautiful wings?",
          "options": [
            {
              "id": "a",
              "text": "Butterfly"
            },
            {
              "id": "b",
              "text": "Ant"
            },
            {
              "id": "c",
              "text": "Ladybug"
            },
            {
              "id": "d",
              "text": "Bee"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Wow! You know that caterpillars change into beautiful butterflies!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "prek-biology-l08-act1",
          "type": "drawing_canvas",
          "title": "Nature Show and Tell",
          "description": "Time to be an artist! Draw your favorite thing from our lessons—an animal, a plant, or an insect. Tell a grown-up all about your drawing. You are a wonderful scientist! 🌟"
        }
      ],
      "learningAids": [
        {
          "id": "prek-biology-l08-a1",
          "type": "printable",
          "title": "Nature Explorer Certificate",
          "content": "A fun, printable certificate to celebrate completing the 'Amazing Animals & Nature' module."
        }
      ]
    }
  ]
};
