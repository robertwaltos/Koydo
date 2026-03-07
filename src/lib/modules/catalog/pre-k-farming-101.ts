import type { LearningModule } from "@/lib/modules/types";

export const pre_k_farming_101_Module: LearningModule = {
  "id": "pre-k-farming-101",
  "title": "Pre-K Garden and Food Explorers",
  "description": "Let's get our hands dirty! Discover how tiny seeds grow into yummy food with help from soil, sun, and water. We'll meet friendly farm animals, learn what they give us, and play fun sorting games. For curious explorers ages 3-5.",
  "subject": "Farming",
  "tags": [
    "pre-k",
    "curriculum",
    "interactive",
    "garden",
    "plants",
    "animals",
    "food"
  ],
  "minAge": 3,
  "maxAge": 5,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en",
    "es",
    "fr",
    "de",
    "hi",
    "zh"
  ],
  "thumbnail": "/images/modules/pre-k-garden-explorers.svg",
  "learningObjectives": [
    "Describe what seeds need to grow: soil, water, and sunlight.",
    "Name common farm animals and the products they provide.",
    "Identify common fruits and vegetables.",
    "Explain the basic life cycle of a plant: seed → sprout → plant → flower/fruit.",
    "Demonstrate caring for a garden through pretend-play activities."
  ],
  "lessons": [
    {
      "id": "pre-k-farming-101-l01",
      "title": "Welcome, Garden Explorers! 🌱",
      "type": "video",
      "duration": 5,
      "chunks": [
        {
          "id": "pre-k-farming-101-l01-c1",
          "title": "Our Big Adventure",
          "content": "Hello, explorers! Are you ready for a big adventure on the farm? We're going to learn about tiny seeds that hold a big surprise inside. We'll discover what makes them grow into tall plants and yummy food. We will also meet some friendly farm animals and find out how they help us every day. Let's get ready to explore, learn, and play!"
        }
      ],
      "learningAids": [
        {
          "id": "pre-k-farming-101-l01-a1",
          "type": "image",
          "title": "A Happy Farm",
          "content": "A colorful, friendly illustration of a farm with a red barn, a smiling sun, green fields, a small garden, a cow, a chicken, and a pig."
        }
      ]
    },
    {
      "id": "pre-k-farming-101-l02",
      "title": "Tiny Seeds, Big Magic",
      "type": "video",
      "duration": 8,
      "chunks": [
        {
          "id": "pre-k-farming-101-l02-c1",
          "title": "A Plant's First Home",
          "content": "Did you know every big plant starts as a tiny seed? Inside each seed is a little baby plant, sleeping and waiting. To wake up, it needs a cozy bed. That cozy bed is called soil! Soil is more than just dirt; it's full of food, like special vitamins, that help the baby plant grow strong."
        },
        {
          "id": "pre-k-farming-101-l02-c2",
          "title": "How to Plant a Seed",
          "content": "Let's pretend to plant a seed! First, we make a little hole in the soft soil. Poke your finger in! Now, gently drop in our pretend seed. Plop! Last, we cover it up with soil and pat it down gently. Night night, little seed! You are safe and sound in your soil bed."
        }
      ],
      "flashcards": [
        {
          "id": "pre-k-farming-101-l02-fc1",
          "front": "What is inside every seed?",
          "back": "A baby plant waiting to grow."
        },
        {
          "id": "pre-k-farming-101-l02-fc2",
          "front": "What is a seed's cozy bed called?",
          "back": "Soil!"
        }
      ],
      "learningAids": [
        {
          "id": "pre-k-farming-101-l02-a1",
          "type": "image",
          "title": "Inside a Seed",
          "content": "A simple, large cut-away picture of a bean seed showing the tiny baby plant curled up inside its protective coat."
        }
      ]
    },
    {
      "id": "pre-k-farming-101-l03",
      "title": "A Recipe for a Happy Plant ☀️💧",
      "type": "video",
      "duration": 8,
      "chunks": [
        {
          "id": "pre-k-farming-101-l03-c1",
          "title": "Plants Get Hungry, Too!",
          "content": "Just like you need food to get energy to play, plants need food too! But they don't eat pizza. Plants eat sunlight! Their green leaves are like little hands that catch the sunshine. The sun gives them the energy to grow tall and strong. Yum, yum, sunshine!"
        },
        {
          "id": "pre-k-farming-101-l03-c2",
          "title": "Plants Get Thirsty",
          "content": "Glug, glug, glug! Plants get very thirsty. Their roots, which are under the ground in the soil, act like straws. They slurp up water and send it all the way up to the leaves. A plant with enough water stands up tall and happy. A thirsty plant looks droopy and sad."
        },
        {
          "id": "pre-k-farming-101-l03-c3",
          "title": "The Perfect Recipe",
          "content": "So, what's the recipe for a happy plant? It's easy to remember! They need three things: soil for a bed and food, sun for energy, and water to drink. When a plant has all three, it can grow, grow, grow!"
        }
      ],
      "flashcards": [
        {
          "id": "pre-k-farming-101-l03-fc1",
          "front": "What do plants 'eat' for energy?",
          "back": "Sunlight!"
        },
        {
          "id": "pre-k-farming-101-l03-fc2",
          "front": "What part of the plant is like a straw for water?",
          "back": "The roots."
        },
        {
          "id": "pre-k-farming-101-l03-fc3",
          "front": "Name the three things a plant needs to grow.",
          "back": "Soil, sunlight, and water."
        }
      ],
      "learningAids": [
        {
          "id": "pre-k-farming-101-l03-a1",
          "type": "image",
          "title": "Happy Plant Recipe",
          "content": "A simple visual equation: a picture of soil + a smiling sun + a water drop = a big, happy plant with a smiley face."
        }
      ]
    },
    {
      "id": "pre-k-farming-101-l04",
      "title": "Let's Help a Plant Grow!",
      "type": "interactive",
      "duration": 10,
      "metadata": {
        "prompts": [
          "Do plants need sunshine? Why?",
          "What would happen if we forgot to water our plant?",
          "Can a plant eat ice cream?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "pre-k-farming-101-l04-ia1",
          "type": "sorting_buckets",
          "title": "Good for Plants vs. Not for Plants",
          "description": "Drag each picture into the right bucket to help our plant grow.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "good",
                "label": "Good for Plants 👍"
              },
              {
                "id": "not-good",
                "label": "Not for Plants 👎"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Sun ☀️",
                "correctBucketId": "good"
              },
              {
                "id": "i2",
                "label": "Watering Can 💧",
                "correctBucketId": "good"
              },
              {
                "id": "i3",
                "label": "Bag of Soil 🟤",
                "correctBucketId": "good"
              },
              {
                "id": "i4",
                "label": "Lollipop 🍭",
                "correctBucketId": "not-good"
              },
              {
                "id": "i5",
                "label": "Toy Car 🚗",
                "correctBucketId": "not-good"
              },
              {
                "id": "i6",
                "label": "Cookie 🍪",
                "correctBucketId": "not-good"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "pre-k-farming-101-l04-a1",
          "type": "practice",
          "title": "Window Garden Experiment",
          "content": "Ask a grown-up to help you put a damp paper towel and a bean seed in a clear plastic bag. Tape it to a sunny window and watch it sprout in a few days!"
        }
      ]
    },
    {
      "id": "pre-k-farming-101-l05",
      "title": "Watch Me Grow! From Seed to Fruit 🍓",
      "type": "interactive",
      "duration": 10,
      "chunks": [
        {
          "id": "pre-k-farming-101-l05-c1",
          "title": "The Plant Life Cycle",
          "content": "A plant's life is like a circle! It starts as a seed. With soil, sun, and water, it grows a little sprout. The sprout grows bigger into a plant with leaves. Then, a beautiful flower blooms! Bees visit the flower, and soon a yummy fruit grows. Inside the fruit are new seeds, and the circle can start all over again! Let's put the pictures in order."
        }
      ],
      "interactiveActivities": [
        {
          "id": "pre-k-farming-101-l05-ia1",
          "type": "sequencing",
          "title": "How Does a Plant Grow?",
          "description": "Drag the pictures into the right order to show a plant's life.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "items": [
              {
                "id": "s1",
                "label": "Seed 🌱",
                "order": 1
              },
              {
                "id": "s2",
                "label": "Sprout",
                "order": 2
              },
              {
                "id": "s3",
                "label": "Plant with Leaves 🌿",
                "order": 3
              },
              {
                "id": "s4",
                "label": "Flower 🌸",
                "order": 4
              },
              {
                "id": "s5",
                "label": "Fruit 🍓",
                "order": 5
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "pre-k-farming-101-l05-a1",
          "type": "image",
          "title": "Life Cycle Circle",
          "content": "A simple, colorful circular diagram showing: seed → sprout → plant → flower → fruit → and an arrow back to the seed."
        }
      ]
    },
    {
      "id": "pre-k-farming-101-l06",
      "title": "Quiz Time: Plant Power! 🧠",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "pre-k-farming-101-l06-q1",
          "text": "Which three things does a plant need to grow?",
          "skillId": "pre-k-farming-101-skill-needs",
          "options": [
            {
              "id": "a",
              "text": "Soil, sun, and water"
            },
            {
              "id": "b",
              "text": "Candy, toys, and juice"
            },
            {
              "id": "c",
              "text": "Ice, rocks, and darkness"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Great job! Plants need soil for food, sun for energy, and water to drink."
        },
        {
          "id": "pre-k-farming-101-l06-q2",
          "text": "What is hiding inside every seed?",
          "skillId": "pre-k-farming-101-skill-seeds",
          "options": [
            {
              "id": "a",
              "text": "A tiny baby plant"
            },
            {
              "id": "b",
              "text": "A small rock"
            },
            {
              "id": "c",
              "text": "A piece of candy"
            }
          ],
          "correctOptionId": "a",
          "explanation": "That's right! Every seed has a baby plant inside, just waiting to grow."
        },
        {
          "id": "pre-k-farming-101-l06-q3",
          "text": "What comes right after the seed sprouts?",
          "skillId": "pre-k-farming-101-skill-lifecycle",
          "options": [
            {
              "id": "a",
              "text": "It grows into a plant with leaves."
            },
            {
              "id": "b",
              "text": "It makes a big apple."
            },
            {
              "id": "c",
              "text": "It goes back to sleep."
            }
          ],
          "correctOptionId": "a",
          "explanation": "You got it! The little sprout grows bigger and bigger into a plant."
        }
      ],
      "quizBlueprint": {
        "frequency": "checkpoint",
        "questionsPerCheck": 3,
        "totalQuestions": 3,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 3,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 2,
          "medium": 1,
          "hard": 0
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.7
      }
    },
    {
      "id": "pre-k-farming-101-l07",
      "title": "Meet the Farm Animals 🐔🐄",
      "type": "video",
      "duration": 8,
      "chunks": [
        {
          "id": "pre-k-farming-101-l07-c1",
          "title": "Cows and Chickens",
          "content": "Let's visit the animals! Moooo! Cows are big, gentle animals that eat grass. They give us yummy milk to drink, which also helps make cheese and yogurt. And over in the coop... Cluck, cluck, cluck! Chickens scratch in the dirt for bugs. The hens lay eggs for our breakfast. And the rooster says 'Cock-a-doodle-doo!' to wake up the farm."
        },
        {
          "id": "pre-k-farming-101-l07-c2",
          "title": "Pigs and Sheep",
          "content": "Oink, oink! Look at the pigs! They love to roll in the cool, squishy mud. It's like sunscreen for them! And who are those fluffy friends? Baaa! Those are sheep. Their thick, woolly coats are sheared to give us soft wool for warm sweaters and blankets."
        }
      ],
      "flashcards": [
        {
          "id": "pre-k-farming-101-l07-fc1",
          "front": "What do cows give us?",
          "back": "Milk!"
        },
        {
          "id": "pre-k-farming-101-l07-fc2",
          "front": "What do hens lay?",
          "back": "Eggs!"
        },
        {
          "id": "pre-k-farming-101-l07-fc3",
          "front": "What do we get from sheep?",
          "back": "Soft wool for clothes."
        }
      ],
      "learningAids": [
        {
          "id": "pre-k-farming-101-l07-a1",
          "type": "image",
          "title": "Farm Animal Friends",
          "content": "A colorful poster showing a cow with a milk bottle, a chicken with an egg, a sheep with a ball of yarn, and a pig in a mud puddle."
        }
      ]
    },
    {
      "id": "pre-k-farming-101-l08",
      "title": "Farm Friends Match-Up",
      "type": "interactive",
      "duration": 10,
      "metadata": {
        "prompts": [
          "What sound does a cow make?",
          "Which animal gives us wool for sweaters?",
          "Can you oink like a pig?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "pre-k-farming-101-l08-ia1",
          "type": "matching_pairs",
          "title": "Animal and Product Match",
          "description": "Match each farm animal to what it gives us.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Cow 🐄"
              },
              {
                "id": "l2",
                "label": "Chicken 🐔"
              },
              {
                "id": "l3",
                "label": "Sheep 🐑"
              },
              {
                "id": "l4",
                "label": "Bee 🐝"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Milk 🥛"
              },
              {
                "id": "r2",
                "label": "Egg 🥚"
              },
              {
                "id": "r3",
                "label": "Wool 🧶"
              },
              {
                "id": "r4",
                "label": "Honey 🍯"
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
          "id": "pre-k-farming-101-l08-a1",
          "type": "practice",
          "title": "Animal Sounds Fun",
          "content": "Let's make animal sounds! Can you moo like a cow? Cluck like a chicken? Baa like a sheep? Oink like a pig?"
        }
      ]
    },
    {
      "id": "pre-k-farming-101-l09",
      "title": "Yummy Foods from the Garden 🍎🥕",
      "type": "video",
      "duration": 8,
      "chunks": [
        {
          "id": "pre-k-farming-101-l09-c1",
          "title": "What are Fruits?",
          "content": "Fruits are a sweet treat from a plant! Think of crunchy apples, juicy strawberries, and sweet bananas. Here's a secret: if it has seeds inside, it's usually a fruit! The seeds are there to grow new plants. So even a tomato is a fruit! Isn't that silly?"
        },
        {
          "id": "pre-k-farming-101-l09-c2",
          "title": "What are Vegetables?",
          "content": "Vegetables are other yummy parts of a plant. We eat roots that grow under the ground, like carrots. We eat leaves, like in a salad. And sometimes we even eat flowers! Broccoli is a flower that hasn't opened yet. Crunch, crunch!"
        },
        {
          "id": "pre-k-farming-101-l09-c3",
          "title": "From the Farm to Your Tummy",
          "content": "Farmers work hard to grow all these delicious fruits and vegetables. When they are ripe, they are picked and sent on a truck to the grocery store. That's where we can buy them to eat. So next time you eat a carrot, thank a farmer!"
        }
      ],
      "flashcards": [
        {
          "id": "pre-k-farming-101-l09-fc1",
          "front": "How can you guess if something is a fruit?",
          "back": "It usually has seeds inside!"
        },
        {
          "id": "pre-k-farming-101-l09-fc2",
          "front": "Is a carrot a root, a stem, or a leaf?",
          "back": "A root! It grows underground."
        }
      ],
      "learningAids": [
        {
          "id": "pre-k-farming-101-l09-a1",
          "type": "image",
          "title": "Plant Parts We Eat",
          "content": "A simple diagram of a plant with labels pointing to different parts we eat: the tomato is the 'fruit', the lettuce is the 'leaf', the celery is the 'stem', the broccoli is the 'flower', and the carrot is the 'root'."
        }
      ]
    },
    {
      "id": "pre-k-farming-101-l10",
      "title": "Fruit or Veggie? Let's Sort!",
      "type": "interactive",
      "duration": 10,
      "metadata": {
        "prompts": [
          "Does a banana have seeds?",
          "Is broccoli a fruit or a vegetable?",
          "Name your favorite fruit and your favorite vegetable."
        ]
      },
      "interactiveActivities": [
        {
          "id": "pre-k-farming-101-l10-ia1",
          "type": "sorting_buckets",
          "title": "Fruit vs. Vegetable",
          "description": "Drag each food into the Fruit or Vegetable bucket.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "fruit",
                "label": "Fruit 🍎"
              },
              {
                "id": "veggie",
                "label": "Vegetable 🥕"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Apple 🍎",
                "correctBucketId": "fruit"
              },
              {
                "id": "i2",
                "label": "Carrot 🥕",
                "correctBucketId": "veggie"
              },
              {
                "id": "i3",
                "label": "Banana 🍌",
                "correctBucketId": "fruit"
              },
              {
                "id": "i4",
                "label": "Lettuce 🥬",
                "correctBucketId": "veggie"
              },
              {
                "id": "i5",
                "label": "Strawberry 🍓",
                "correctBucketId": "fruit"
              },
              {
                "id": "i6",
                "label": "Broccoli 🥦",
                "correctBucketId": "veggie"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "pre-k-farming-101-l10-a1",
          "type": "practice",
          "title": "Grocery Store I-Spy",
          "content": "Next time you're at the store, play I-Spy in the produce section! 'I spy with my little eye... a fruit that is red!'"
        }
      ]
    },
    {
      "id": "pre-k-farming-101-l11",
      "title": "Celebration Quiz: Farm Expert! 🏆",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "pre-k-farming-101-l11-q1",
          "text": "Which animal gives us milk for cheese and yogurt?",
          "skillId": "pre-k-farming-101-skill-animals",
          "options": [
            {
              "id": "a",
              "text": "Cow"
            },
            {
              "id": "b",
              "text": "Chicken"
            },
            {
              "id": "c",
              "text": "Pig"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Moo-velous! Cows give us milk to drink and make other yummy dairy foods."
        },
        {
          "id": "pre-k-farming-101-l11-q2",
          "text": "Which of these is a VEGETABLE that grows underground?",
          "skillId": "pre-k-farming-101-skill-food",
          "options": [
            {
              "id": "a",
              "text": "Carrot"
            },
            {
              "id": "b",
              "text": "Apple"
            },
            {
              "id": "c",
              "text": "Banana"
            }
          ],
          "correctOptionId": "a",
          "explanation": "You're right! A carrot is a root vegetable that we pull from the ground."
        },
        {
          "id": "pre-k-farming-101-l11-q3",
          "text": "What is the first step in a plant's life?",
          "skillId": "pre-k-farming-101-skill-lifecycle",
          "options": [
            {
              "id": "a",
              "text": "It starts as a seed."
            },
            {
              "id": "b",
              "text": "It starts as a flower."
            },
            {
              "id": "c",
              "text": "It starts as a big fruit."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Exactly! Every plant starts its life as a tiny seed."
        },
        {
          "id": "pre-k-farming-101-l11-q4",
          "text": "Which animal gives us soft wool for sweaters?",
          "skillId": "pre-k-farming-101-skill-animals",
          "options": [
            {
              "id": "a",
              "text": "Sheep"
            },
            {
              "id": "b",
              "text": "Cow"
            },
            {
              "id": "c",
              "text": "Chicken"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Baa-rilliant! Fluffy sheep give us wool to keep us warm."
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
              2
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 3,
          "medium": 1,
          "hard": 0
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.7
      }
    },
    {
      "id": "pre-k-farming-101-l12",
      "title": "You're a Garden Explorer!",
      "type": "video",
      "duration": 5,
      "chunks": [
        {
          "id": "pre-k-farming-101-l12-c1",
          "title": "Great Job!",
          "content": "Wow, you did it! You are now an official Garden and Food Explorer. You learned how a tiny seed uses soil, sun, and water to grow into food. You met cows, chickens, and sheep and discovered the amazing things they give us. Remember to eat your colorful fruits and veggies to grow strong like a tall sunflower. Keep exploring the wonderful world of food and farming!"
        }
      ],
      "learningAids": [
        {
          "id": "pre-k-farming-101-l12-a1",
          "type": "image",
          "title": "Garden Explorer Certificate",
          "content": "A bright, colorful certificate with the learner's name, stating 'Official Garden & Food Explorer' with pictures of vegetables, a smiling sun, and a farm animal."
        },
        {
          "id": "pre-k-farming-101-l12-a2",
          "type": "practice",
          "title": "Keep Exploring!",
          "content": "Try planting your own seeds! You can grow yummy herbs like mint or basil in a small pot on a windowsill."
        }
      ]
    }
  ]
};
