import type { LearningModule } from "@/lib/modules/types";

export const pre_k_social_studies_us_101_Module: LearningModule = {
  "id": "pre-k-social-studies-us-101",
  "title": "Pre-K My Community in the US",
  "description": "Explore neighborhoods, community helpers, American symbols, maps, and being a good citizen through stories, sorting games, and pretend play for ages 3-5.",
  "subject": "Social Studies US",
  "tags": [
    "pre-k",
    "curriculum",
    "interactive",
    "community",
    "helpers",
    "maps",
    "citizenship"
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
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Describe what a community is and name places in a neighborhood",
    "Identify community helpers and explain what they do",
    "Recognize American symbols: the flag, bald eagle, and Statue of Liberty",
    "Use simple map skills to describe where things are (near, far, left, right)",
    "Practice being a good citizen by following rules and being kind"
  ],
  "lessons": [
    {
      "id": "pre-k-social-studies-us-101-l01",
      "title": "What Is a Community?",
      "type": "video",
      "duration": 8,
      "chunks": [
        {
          "id": "pre-k-social-studies-us-101-l01-c1",
          "title": "People Living Together",
          "content": "A community is a group of people who live, work, and play near each other. Your neighborhood is your community! It has homes, stores, parks, and schools. Everyone in a community helps each other, making it a friendly and helpful place to be. We can make new friends and have fun together!"
        },
        {
          "id": "pre-k-social-studies-us-101-l01-c2",
          "title": "Places in a Community",
          "content": "Your community has many important places. A school is where you learn and make friends. A library is full of books and stories. A fire station is where brave firefighters work to keep us safe. A grocery store is where we get our food. A hospital is where doctors and nurses help us feel better when we're sick. And a park is a fun place to run and play!"
        },
        {
          "id": "pre-k-social-studies-us-101-l01-c3",
          "title": "Your Community",
          "content": "Every community is special! Some are in big cities with tall buildings. Some are in small towns with farms and animals. Some are near the ocean, and some are in the mountains. No matter where you live, people in a community work together to make it a wonderful home. It feels like being part of a big family!"
        }
      ],
      "flashcards": [
        {
          "id": "pre-k-social-studies-us-101-l01-fc1",
          "front": "What is a community?",
          "back": "A group of people who live, work, and play near each other."
        },
        {
          "id": "pre-k-social-studies-us-101-l01-fc2",
          "front": "Name three places in a community.",
          "back": "School, library, fire station, grocery store, hospital, or park."
        },
        {
          "id": "pre-k-social-studies-us-101-l01-fc3",
          "front": "Are all communities the same?",
          "back": "No! Some are big cities, some are small towns, some are near oceans or mountains."
        }
      ],
      "learningAids": [
        {
          "id": "pre-k-social-studies-us-101-l01-a1",
          "type": "image",
          "title": "Community Map 🗺️",
          "content": "Colorful bird's-eye view of a neighborhood with labeled buildings: school, library, fire station, store, park, homes."
        }
      ]
    },
    {
      "id": "pre-k-social-studies-us-101-l02",
      "title": "Community Helpers",
      "type": "video",
      "duration": 8,
      "chunks": [
        {
          "id": "pre-k-social-studies-us-101-l02-c1",
          "title": "Helpers Who Keep Us Safe",
          "content": "Some community helpers keep us safe. Firefighters are brave and put out fires. Police officers make sure everyone follows the rules and help people who are lost. Paramedics come in an ambulance to help when someone is sick or hurt. They are all trained to help us in an emergency. We can say 'thank you' to show them we are happy they help us!"
        },
        {
          "id": "pre-k-social-studies-us-101-l02-c2",
          "title": "Helpers Who Teach and Heal",
          "content": "Some helpers teach us and keep us healthy. Teachers help us learn to read, count, and play with friends at school. Doctors and nurses help us get better when we are sick. Dentists help keep our teeth clean and strong so we have a happy smile. Librarians help us find amazing books to read. They all help our community!"
        },
        {
          "id": "pre-k-social-studies-us-101-l02-c3",
          "title": "Helpers Who Build and Deliver",
          "content": "Other helpers build things and bring us things. Construction workers build our houses, schools, and roads. Mail carriers bring letters and packages to our homes from family and friends. Farmers grow the yummy fruits and vegetables we eat. Bus drivers take us to school safely. All of these helpers have important jobs!"
        }
      ],
      "flashcards": [
        {
          "id": "pre-k-social-studies-us-101-l02-fc1",
          "front": "What do firefighters do?",
          "back": "Put out fires and rescue people."
        },
        {
          "id": "pre-k-social-studies-us-101-l02-fc2",
          "front": "What does a mail carrier do?",
          "back": "Brings letters and packages to your door."
        },
        {
          "id": "pre-k-social-studies-us-101-l02-fc3",
          "front": "Who helps you learn at school?",
          "back": "Teachers!"
        },
        {
          "id": "pre-k-social-studies-us-101-l02-fc4",
          "front": "Who grows the food you eat?",
          "back": "Farmers."
        }
      ],
      "learningAids": [
        {
          "id": "pre-k-social-studies-us-101-l02-a1",
          "type": "image",
          "title": "Helpers Poster 🧑‍🚒👮‍♀️👩‍🏫",
          "content": "Grid of community helpers: firefighter, police officer, teacher, doctor, farmer, mail carrier — each with their tool."
        }
      ]
    },
    {
      "id": "pre-k-social-studies-us-101-l03",
      "title": "Match the Helper",
      "type": "interactive",
      "duration": 10,
      "metadata": {
        "prompts": [
          "Who would you call if there was a fire?",
          "Who brings letters to your house?",
          "What community helper would you like to be? Why?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "pre-k-social-studies-us-101-l03-ia1",
          "type": "matching_pairs",
          "title": "Helper to Tool Match",
          "description": "Match each community helper to what they use.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Firefighter 🧑‍🚒"
              },
              {
                "id": "l2",
                "label": "Doctor 👩‍⚕️"
              },
              {
                "id": "l3",
                "label": "Teacher 👩‍🏫"
              },
              {
                "id": "l4",
                "label": "Mail carrier 📬"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Fire hose 🚒"
              },
              {
                "id": "r2",
                "label": "Stethoscope 🩺"
              },
              {
                "id": "r3",
                "label": "Books and chalkboard 📚"
              },
              {
                "id": "r4",
                "label": "Mailbag and letters ✉️"
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
          "id": "pre-k-social-studies-us-101-l03-a1",
          "type": "practice",
          "title": "Helper Interview 📝",
          "content": "Ask a grown-up about their job. What do they do? Who do they help? Draw a picture of them at work!"
        }
      ]
    },
    {
      "id": "pre-k-social-studies-us-101-l04",
      "title": "American Symbols",
      "type": "video",
      "duration": 8,
      "chunks": [
        {
          "id": "pre-k-social-studies-us-101-l04-c1",
          "title": "The American Flag",
          "content": "The American flag is a special symbol of our country. It has red and white stripes and a blue box with white stars. There are 50 stars, one for each state in our country. There are 13 stripes for the first 13 states. When we see the flag, it reminds us that we are all one big American family."
        },
        {
          "id": "pre-k-social-studies-us-101-l04-c2",
          "title": "The Bald Eagle",
          "content": "The bald eagle is our national bird. It's a big, strong bird that flies high and free. This reminds us that America is a strong and free country. You can see pictures of the bald eagle on coins and stamps. It's a very important symbol!"
        },
        {
          "id": "pre-k-social-studies-us-101-l04-c3",
          "title": "The Statue of Liberty",
          "content": "The Statue of Liberty is a very tall statue in New York City. She holds a torch up high to welcome people to America. The statue was a gift of friendship from the country of France. She is a symbol of freedom and hope, reminding us to be kind and welcoming to everyone."
        }
      ],
      "flashcards": [
        {
          "id": "pre-k-social-studies-us-101-l04-fc1",
          "front": "How many stars are on the American flag?",
          "back": "50 — one for each state."
        },
        {
          "id": "pre-k-social-studies-us-101-l04-fc2",
          "front": "What is America's national bird?",
          "back": "The bald eagle."
        },
        {
          "id": "pre-k-social-studies-us-101-l04-fc3",
          "front": "Who gave the Statue of Liberty to America?",
          "back": "France — as a gift of friendship!"
        },
        {
          "id": "pre-k-social-studies-us-101-l04-fc4",
          "front": "What do the 13 stripes on the flag represent?",
          "back": "The first 13 states."
        }
      ],
      "learningAids": [
        {
          "id": "pre-k-social-studies-us-101-l04-a1",
          "type": "image",
          "title": "Symbols Poster 🇺🇸🦅🗽",
          "content": "Three American symbols side by side: the flag, the bald eagle, and the Statue of Liberty."
        }
      ]
    },
    {
      "id": "pre-k-social-studies-us-101-l05",
      "title": "Checkpoint: Community and Symbols",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "pre-k-social-studies-us-101-l05-q1",
          "text": "What is a community?",
          "skillId": "pre-k-social-studies-us-101-skill-community",
          "options": [
            {
              "id": "a",
              "text": "People who live, work, and play near each other"
            },
            {
              "id": "b",
              "text": "A type of sandwich"
            },
            {
              "id": "c",
              "text": "A big toy store"
            },
            {
              "id": "d",
              "text": "A color"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A community is a group of people who live nearby and help each other!"
        },
        {
          "id": "pre-k-social-studies-us-101-l05-q2",
          "text": "Who puts out fires and rescues people?",
          "skillId": "pre-k-social-studies-us-101-skill-helpers",
          "options": [
            {
              "id": "a",
              "text": "Firefighters"
            },
            {
              "id": "b",
              "text": "Librarians"
            },
            {
              "id": "c",
              "text": "Farmers"
            },
            {
              "id": "d",
              "text": "Bus drivers"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Firefighters are trained to put out fires and rescue people from danger."
        },
        {
          "id": "pre-k-social-studies-us-101-l05-q3",
          "text": "How many stars are on the American flag?",
          "skillId": "pre-k-social-studies-us-101-skill-symbols",
          "options": [
            {
              "id": "a",
              "text": "50"
            },
            {
              "id": "b",
              "text": "13"
            },
            {
              "id": "c",
              "text": "100"
            },
            {
              "id": "d",
              "text": "7"
            }
          ],
          "correctOptionId": "a",
          "explanation": "There are 50 stars — one for each of the 50 states in America!"
        },
        {
          "id": "pre-k-social-studies-us-101-l05-q4",
          "text": "Which country gave the Statue of Liberty to America?",
          "skillId": "pre-k-social-studies-us-101-skill-symbols",
          "options": [
            {
              "id": "a",
              "text": "France"
            },
            {
              "id": "b",
              "text": "England"
            },
            {
              "id": "c",
              "text": "Canada"
            },
            {
              "id": "d",
              "text": "Mexico"
            }
          ],
          "correctOptionId": "a",
          "explanation": "France gave the Statue of Liberty to America as a gift of friendship!"
        }
      ],
      "quizBlueprint": {
        "frequency": "checkpoint",
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
      "id": "pre-k-social-studies-us-101-l06",
      "title": "Maps and Directions",
      "type": "video",
      "duration": 8,
      "chunks": [
        {
          "id": "pre-k-social-studies-us-101-l06-c1",
          "title": "What Is a Map?",
          "content": "A map is like a drawing of a place from high up in the sky, like how a bird sees it! A map of your room shows where your bed and toys are. A map of your town shows the streets, parks, and school. Maps help us find where things are and explore new places!"
        },
        {
          "id": "pre-k-social-studies-us-101-l06-c2",
          "title": "Direction Words",
          "content": "We use special direction words to talk about where things are. Words like left, right, up, down, near, and far help us give directions. You can say, 'The park is NEAR my house,' or 'The toy is on your LEFT.' These words help us find our way around!"
        },
        {
          "id": "pre-k-social-studies-us-101-l06-c3",
          "title": "A Map of America",
          "content": "The United States is a big country with 50 states. A map of the United States shows all the states. Some states are very big, like Texas. Some are very cold, like Alaska. Some are islands in the ocean, like Hawaii. Can you find the state where you live on a map? It's fun to see where we are in our big country!"
        }
      ],
      "flashcards": [
        {
          "id": "pre-k-social-studies-us-101-l06-fc1",
          "front": "What is a map?",
          "back": "A picture of a place as seen from above."
        },
        {
          "id": "pre-k-social-studies-us-101-l06-fc2",
          "front": "Name four direction words.",
          "back": "Left, right, near, and far."
        },
        {
          "id": "pre-k-social-studies-us-101-l06-fc3",
          "front": "How many states does the United States have?",
          "back": "50 states."
        }
      ],
      "learningAids": [
        {
          "id": "pre-k-social-studies-us-101-l06-a1",
          "type": "practice",
          "title": "Classroom Map 🗺️",
          "content": "Draw a map of your room from above. Where is the bed? The door? The window? Label each one!"
        }
      ]
    },
    {
      "id": "pre-k-social-studies-us-101-l07",
      "title": "Direction Words Game",
      "type": "interactive",
      "duration": 10,
      "metadata": {
        "prompts": [
          "Point to something on your LEFT.",
          "What is NEAR you right now?",
          "Can you give directions from your bed to the kitchen?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "pre-k-social-studies-us-101-l07-ia1",
          "type": "sorting_buckets",
          "title": "Near or Far?",
          "description": "Drag each place — is it near your home or far away?",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "near",
                "label": "Near My Home 🏠"
              },
              {
                "id": "far",
                "label": "Far Away ✈️"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "My backyard 🌳",
                "correctBucketId": "near"
              },
              {
                "id": "i2",
                "label": "The Moon 🌙",
                "correctBucketId": "far"
              },
              {
                "id": "i3",
                "label": "My kitchen 🍳",
                "correctBucketId": "near"
              },
              {
                "id": "i4",
                "label": "Another country 🌍",
                "correctBucketId": "far"
              },
              {
                "id": "i5",
                "label": "My neighbor's house 🏡",
                "correctBucketId": "near"
              },
              {
                "id": "i6",
                "label": "The bottom of the ocean 🐙",
                "correctBucketId": "far"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "pre-k-social-studies-us-101-l07-a1",
          "type": "practice",
          "title": "Direction Walk 🚶‍♀️",
          "content": "Take a walk with a grown-up. Practice saying: 'Turn LEFT at the tree. The park is NEAR. The store is FAR.'"
        }
      ]
    },
    {
      "id": "pre-k-social-studies-us-101-l08",
      "title": "Being a Good Citizen",
      "type": "video",
      "duration": 8,
      "chunks": [
        {
          "id": "pre-k-social-studies-us-101-l08-c1",
          "title": "What Are Rules?",
          "content": "Rules help keep everyone safe and happy. At school, a rule might be to walk in the hallway so no one gets hurt. At home, a rule might be to clean up your toys so no one trips. When we cross the street, we follow the rule to look both ways. Rules are not to stop our fun, they are here to help us!"
        },
        {
          "id": "pre-k-social-studies-us-101-l08-c2",
          "title": "Being Kind",
          "content": "Being a good citizen means being kind. We can be kind by saying 'please' and 'thank you.' We can share our toys with friends. If you see someone who is sad, you can ask if they are okay. Every time you are kind, you make your community a happier place for everyone!"
        },
        {
          "id": "pre-k-social-studies-us-101-l08-c3",
          "title": "Taking Care of Our Community",
          "content": "Good citizens take care of their community. You can help by putting trash in the trash can to keep our parks and streets clean. You can be gentle with playground toys so everyone can enjoy them. Helping to water plants makes our community beautiful. When we all help a little, it makes a big difference!"
        }
      ],
      "flashcards": [
        {
          "id": "pre-k-social-studies-us-101-l08-fc1",
          "front": "Why do we have rules?",
          "back": "To keep everyone safe and happy."
        },
        {
          "id": "pre-k-social-studies-us-101-l08-fc2",
          "front": "Name two ways to be a good citizen.",
          "back": "Be kind to others and take care of your community."
        },
        {
          "id": "pre-k-social-studies-us-101-l08-fc3",
          "front": "What should you do if you see trash on the ground?",
          "back": "Pick it up — good citizens help keep their community clean!"
        }
      ],
      "learningAids": [
        {
          "id": "pre-k-social-studies-us-101-l08-a1",
          "type": "image",
          "title": "Good Citizen Checklist 👍",
          "content": "Checklist: ✅ Be kind ✅ Follow rules ✅ Help others ✅ Share ✅ Take care of our community."
        }
      ]
    },
    {
      "id": "pre-k-social-studies-us-101-l09",
      "title": "Good Citizen Choices",
      "type": "interactive",
      "duration": 10,
      "metadata": {
        "prompts": [
          "What is one rule at your house?",
          "How can you be kind to a friend today?",
          "What would happen if nobody followed rules?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "pre-k-social-studies-us-101-l09-ia1",
          "type": "sorting_buckets",
          "title": "Good Citizen or Not?",
          "description": "Is this what a good citizen would do?",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "good",
                "label": "Good Citizen ✅"
              },
              {
                "id": "not",
                "label": "Not a Good Choice ❌"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Share toys with a friend",
                "correctBucketId": "good"
              },
              {
                "id": "i2",
                "label": "Throw trash on the ground",
                "correctBucketId": "not"
              },
              {
                "id": "i3",
                "label": "Say please and thank you",
                "correctBucketId": "good"
              },
              {
                "id": "i4",
                "label": "Push someone in line",
                "correctBucketId": "not"
              },
              {
                "id": "i5",
                "label": "Help pick up the playground",
                "correctBucketId": "good"
              },
              {
                "id": "i6",
                "label": "Yell during library time",
                "correctBucketId": "not"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "pre-k-social-studies-us-101-l09-a1",
          "type": "practice",
          "title": "Kindness Challenge ❤️",
          "content": "Try to do three kind things today: help a family member, say something nice, and share something. Tell a grown-up about it!"
        }
      ]
    },
    {
      "id": "pre-k-social-studies-us-101-l10",
      "title": "Celebration Quiz: My Community!",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "pre-k-social-studies-us-101-l10-q1",
          "text": "What is America's national bird?",
          "skillId": "pre-k-social-studies-us-101-skill-symbols",
          "options": [
            {
              "id": "a",
              "text": "The bald eagle"
            },
            {
              "id": "b",
              "text": "A parrot"
            },
            {
              "id": "c",
              "text": "A penguin"
            },
            {
              "id": "d",
              "text": "A robin"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The bald eagle is big, strong, and free. It reminds us that America is a strong and free country!"
        },
        {
          "id": "pre-k-social-studies-us-101-l10-q2",
          "text": "What is a map?",
          "skillId": "pre-k-social-studies-us-101-skill-maps",
          "options": [
            {
              "id": "a",
              "text": "A picture of a place as seen from above"
            },
            {
              "id": "b",
              "text": "A type of hat"
            },
            {
              "id": "c",
              "text": "A musical instrument"
            },
            {
              "id": "d",
              "text": "A kind of food"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Maps show places from a bird's-eye view so you can see where things are!"
        },
        {
          "id": "pre-k-social-studies-us-101-l10-q3",
          "text": "Why do we have rules?",
          "skillId": "pre-k-social-studies-us-101-skill-citizenship",
          "options": [
            {
              "id": "a",
              "text": "To keep everyone safe and happy"
            },
            {
              "id": "b",
              "text": "To make life boring"
            },
            {
              "id": "c",
              "text": "Because grown-ups like saying no"
            },
            {
              "id": "d",
              "text": "To make things harder"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Rules protect us. A rule like 'stop at a red light' keeps cars from crashing. A rule like 'be quiet in the library' helps everyone read."
        },
        {
          "id": "pre-k-social-studies-us-101-l10-q4",
          "text": "Who grows the food we eat?",
          "skillId": "pre-k-social-studies-us-101-skill-helpers",
          "options": [
            {
              "id": "a",
              "text": "Farmers"
            },
            {
              "id": "b",
              "text": "Firefighters"
            },
            {
              "id": "c",
              "text": "Librarians"
            },
            {
              "id": "d",
              "text": "Bus drivers"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Farmers plant, grow, and harvest fruits, vegetables, and grains for everyone!"
        },
        {
          "id": "pre-k-social-studies-us-101-l10-q5",
          "text": "How can you be a good citizen?",
          "skillId": "pre-k-social-studies-us-101-skill-citizenship",
          "options": [
            {
              "id": "a",
              "text": "Be kind, follow rules, and help your community"
            },
            {
              "id": "b",
              "text": "Only think about yourself"
            },
            {
              "id": "c",
              "text": "Break things at the park"
            },
            {
              "id": "d",
              "text": "Never share with anyone"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Good citizens are kind, follow rules, and take care of the people and places around them."
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 5,
        "totalQuestions": 5,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 5,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 3,
          "medium": 2,
          "hard": 0
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.7
      },
      "learningAids": [
        {
          "id": "pre-k-social-studies-us-101-l10-a1",
          "type": "mnemonic",
          "title": "Community Rhyme 🎶",
          "content": "Helpers help and rules keep us right, be kind to all from morning to night. Our flag has stars, our eagle flies free — what a great community we can be!"
        }
      ]
    }
  ]
};
