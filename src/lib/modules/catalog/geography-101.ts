import type { LearningModule } from "@/lib/modules/types";

export const Geography101Module: LearningModule = {
  "id": "geography-101",
  "title": "Geography: Our Amazing World",
  "description": "Explore Earth's continents and oceans, learn to read maps, discover landforms and climate zones, navigate world rivers and lakes, and study countries and capitals from every region.",
  "subject": "Geography",
  "tags": [
    "geography",
    "social-studies",
    "interactive",
    "curriculum"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "2.0.0",
  "learningObjectives": [
    "Name and locate the seven continents and five oceans",
    "Read maps using a compass rose, scale, and legend",
    "Identify major landforms including mountains, valleys, plateaus, and islands",
    "Describe Earth's climate zones and what determines climate",
    "Locate major world rivers and lakes on a map",
    "Match countries to their capitals across all continents"
  ],
  "lessons": [
    {
      "id": "geography-101-l01",
      "title": "Continents and Oceans",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "geography-101-l01-c1",
          "title": "The Seven Continents",
          "content": "The Earth is an amazing place, and it has seven incredible continents for us to explore! The largest of these is Asia, which is home to many different cultures and landscapes. Next, we have Africa, known for its vast deserts and rich wildlife. Then there’s North America, where you can find everything from snowy mountains to sunny beaches. South America is famous for its rainforests and the Andes mountains. Antarctica is the coldest continent, and it’s unique because it doesn’t have any permanent residents—just scientists visiting for research! Europe is filled with history and beautiful cities, while Australia/Oceania is the smallest continent, known for its unique animals and stunning coastlines. Together, these seven continents cover about 29% of the Earth's surface, and the rest is made up of oceans and other bodies of water. Isn’t it fascinating how diverse and wonderful our planet is? There’s so much to learn about each continent and the amazing things they have to offer!"
        },
        {
          "id": "geography-101-l01-c2",
          "title": "The Five Oceans",
          "content": "Did you know that our planet is surrounded by five incredible oceans? Let's explore them together! The Pacific Ocean is the largest and deepest of all, stretching across a vast area of the Earth. Next, we have the Atlantic Ocean, which is known for its rich history and important trade routes. The Indian Ocean comes next, located between Africa, Asia, and Australia, and is famous for its warm waters. Then, there's the Southern Ocean, which wraps around Antarctica and is unique because it helps regulate the Earth's temperature. Finally, we have the Arctic Ocean, the smallest and coldest of the five, located at the top of the world. Together, these oceans cover about 71% of our planet's surface and hold an astonishing 97% of all the water on Earth! They are not just big bodies of water; they are vital to our climate, weather patterns, and the many ecosystems that thrive within them. Understanding our oceans helps us appreciate the amazing world we live in!"
        },
        {
          "id": "geography-101-l01-c3",
          "title": "How Continents Formed",
          "content": "Did you know that around 200 million years ago, all the continents were joined together in a massive landmass called Pangaea? This supercontinent was like a giant puzzle piece made up of all the land we see today. Over millions of years, the Earth's surface has changed a lot! Tectonic plates, which are huge pieces of the Earth's crust, began to move and shift, causing the continents to drift apart. This movement is still happening today! That's why if you look closely, South America and Africa seem to fit together like two pieces of a puzzle. Isn't it fascinating to think about how our planet has transformed over such a long time? Understanding how continents formed helps us appreciate the incredible history of our Earth and how it continues to change. So, next time you look at a map, remember that those shapes were once all connected!"
        }
      ],
      "flashcards": [
        {
          "id": "geography-101-l01-f1",
          "front": "Largest continent by area",
          "back": "Asia"
        },
        {
          "id": "geography-101-l01-f2",
          "front": "Largest and deepest ocean",
          "back": "Pacific Ocean"
        },
        {
          "id": "geography-101-l01-f3",
          "front": "Supercontinent that broke apart 200 million years ago",
          "back": "Pangaea"
        },
        {
          "id": "geography-101-l01-f4",
          "front": "Percentage of Earth's surface covered by water",
          "back": "About 71%"
        }
      ],
      "questions": [
        {
          "id": "geography-101-l01-q1",
          "text": "Which is the largest continent?",
          "options": [
            {
              "id": "a",
              "text": "Asia"
            },
            {
              "id": "b",
              "text": "Africa"
            },
            {
              "id": "c",
              "text": "North America"
            },
            {
              "id": "d",
              "text": "Europe"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Asia is the largest continent by both area and population!"
        },
        {
          "id": "geography-101-l01-q2",
          "text": "How many oceans does Earth have?",
          "options": [
            {
              "id": "a",
              "text": "5"
            },
            {
              "id": "b",
              "text": "4"
            },
            {
              "id": "c",
              "text": "7"
            },
            {
              "id": "d",
              "text": "3"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Pacific, Atlantic, Indian, Southern, and Arctic — 5 oceans!"
        },
        {
          "id": "geography-101-l01-q3",
          "text": "The ancient supercontinent was called",
          "options": [
            {
              "id": "a",
              "text": "Pangaea"
            },
            {
              "id": "b",
              "text": "Atlantis"
            },
            {
              "id": "c",
              "text": "Oceania"
            },
            {
              "id": "d",
              "text": "Europa"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Pangaea means 'all lands' — it broke apart into today's continents!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "geography-101-l01-act1",
          "type": "drag_and_drop",
          "title": "Label the map",
          "description": "On a blank world map, write the name of each continent and ocean in the correct location. Color each continent a different color."
        }
      ],
      "learningAids": [
        {
          "id": "geography-101-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "geography-101-l02",
      "title": "Reading Maps",
      "type": "interactive",
      "duration": 12,
      "chunks": [
        {
          "id": "geography-101-l02-c1",
          "title": "Compass Rose and Directions",
          "content": "When you look at a map, you will often see a special symbol called a compass rose. This compass rose is very important because it shows us the four main directions: North, South, East, and West. To help you remember these directions easily, you can use a fun phrase: 'Never Eat Soggy Waffles.' Just think of this phrase as you go around the compass in a clockwise direction! But wait, there’s more! There are also in-between directions that we can use, which are called northeast, southeast, southwest, and northwest. These extra directions help us understand exactly where things are located on a map, making it easier for us to find our way around the world. So, the next time you use a map, remember to look for the compass rose and think about those tasty waffles to help you remember your directions!"
        },
        {
          "id": "geography-101-l02-c2",
          "title": "Map Scale",
          "content": "A map scale is an important tool that helps us understand how distances on a map compare to actual distances in the real world. Imagine you have a map that shows a scale where 1 inch equals 100 miles. This means that if you measure the distance between two cities on the map and find that they are 3 inches apart, you can calculate that in real life, those two cities are actually 300 miles apart! Knowing how to read and use map scales is super helpful, especially when you are planning a trip or trying to figure out how far away different places are from each other. It allows you to visualize the distance and helps you make better decisions about travel routes and times. So, next time you look at a map, remember to check the scale—it’s like having a secret code that unlocks the real distances between places!"
        },
        {
          "id": "geography-101-l02-c3",
          "title": "Map Legend (Key)",
          "content": "Have you ever looked at a map and wondered what all those symbols mean? That's where a map legend, which is also called a key, comes in handy! The legend is like a special guide that explains what different symbols represent on the map. For example, if you see a blue line, it usually indicates a river flowing through the area. A small black dot might represent a city, showing you where people live and work. And if you spot a star on the map, it typically marks a capital city, which is often an important place for the country. It's really important to always check the legend before you start reading a map. This way, you can understand what you're looking at and find your way around more easily! Maps can be fun and exciting to explore, especially when you know how to read them well!"
        }
      ],
      "flashcards": [
        {
          "id": "geography-101-l02-f1",
          "front": "Shows N, S, E, W on a map",
          "back": "Compass rose"
        },
        {
          "id": "geography-101-l02-f2",
          "front": "Shows how map distance relates to real distance",
          "back": "Map scale"
        },
        {
          "id": "geography-101-l02-f3",
          "front": "Explains symbols on a map",
          "back": "Legend (key)"
        },
        {
          "id": "geography-101-l02-f4",
          "front": "Memory trick for directions clockwise",
          "back": "Never Eat Soggy Waffles"
        }
      ],
      "questions": [
        {
          "id": "geography-101-l02-q1",
          "text": "A compass rose shows",
          "options": [
            {
              "id": "a",
              "text": "Directions (N, S, E, W)"
            },
            {
              "id": "b",
              "text": "The weather"
            },
            {
              "id": "c",
              "text": "Population size"
            },
            {
              "id": "d",
              "text": "Elevation"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The compass rose shows cardinal directions on a map!"
        },
        {
          "id": "geography-101-l02-q2",
          "text": "If 1 inch = 100 miles and two cities are 4 inches apart, they are",
          "options": [
            {
              "id": "a",
              "text": "400 miles apart"
            },
            {
              "id": "b",
              "text": "100 miles apart"
            },
            {
              "id": "c",
              "text": "4 miles apart"
            },
            {
              "id": "d",
              "text": "1,000 miles apart"
            }
          ],
          "correctOptionId": "a",
          "explanation": "4 inches × 100 miles = 400 miles!"
        },
        {
          "id": "geography-101-l02-q3",
          "text": "A star symbol on a map usually means",
          "options": [
            {
              "id": "a",
              "text": "Capital city"
            },
            {
              "id": "b",
              "text": "Mountain"
            },
            {
              "id": "c",
              "text": "River"
            },
            {
              "id": "d",
              "text": "Ocean"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Stars mark capital cities on most maps!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "geography-101-l02-act1",
          "type": "project_builder",
          "title": "Treasure map",
          "description": "Draw a map of your room or backyard. Include a compass rose, a scale (1 inch = 1 foot), and a legend with symbols for furniture or landmarks. Mark an X for hidden treasure!"
        }
      ],
      "learningAids": [
        {
          "id": "geography-101-l02-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "geography-101-l03",
      "title": "Landforms",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "geography-101-l03-c1",
          "title": "Mountains and Valleys",
          "content": "Mountains are fascinating and majestic landforms that rise high above the surrounding areas. They are formed through the movement of tectonic plates, which are huge pieces of the Earth's crust that shift and collide over time. The tallest mountain in the world is Mount Everest, which is located in the Himalayas. It reaches an astonishing height of 29,032 feet, making it a popular destination for adventurous climbers! On the other hand, valleys are the low-lying areas found between mountains or hills. These valleys are often shaped by the flowing water of rivers, which carve through the land over many years. A well-known example of a valley is the Grand Canyon, which was formed by the Colorado River cutting through rock over millions of years. Both mountains and valleys play important roles in our planet's landscape, providing habitats for various plants and animals and influencing weather patterns. Understanding these landforms helps us appreciate the beauty and complexity of our Earth!"
        },
        {
          "id": "geography-101-l03-c2",
          "title": "Plateaus and Plains",
          "content": "A plateau is a fascinating type of landform that looks like a flat-topped table, but it is actually much higher than the land around it. Imagine standing on a giant table that stretches for miles! One of the most well-known plateaus in the world is the Tibetan Plateau, which is often called the 'Roof of the World.' This incredible place is located at an astonishing height of 15,000 feet above sea level! This means it is really high up in the mountains, where the air is thin and the views are breathtaking.\nOn the other hand, we have plains, which are large, flat areas of land that can stretch as far as the eye can see. These flat lands are perfect for farming because they have rich soil that helps crops grow. A great example of this is the Great Plains in the United States. This region is known for its vast fields of wheat and corn, making it one of the most important agricultural areas in the country. Both plateaus and plains are essential parts of our planet's geography, each with its unique features and importance!"
        },
        {
          "id": "geography-101-l03-c3",
          "title": "Islands and Peninsulas",
          "content": "Islands and peninsulas are two amazing types of landforms that are surrounded by water. An island is a piece of land that is completely surrounded by water on all sides. The largest island in the world is Greenland, which is so big that it has its own unique ecosystems and wildlife! On the other hand, a peninsula is a piece of land that is surrounded by water on three sides. A great example of a peninsula is the state of Florida in the United States, which is known for its beautiful beaches and warm weather. Another famous peninsula is Italy, which is shaped like a boot and is rich in history and culture. These landforms not only make our planet more interesting but also play important roles in the environment and human activities, such as tourism and fishing."
        }
      ],
      "flashcards": [
        {
          "id": "geography-101-l03-f1",
          "front": "Tallest mountain in the world",
          "back": "Mount Everest (29,032 feet)"
        },
        {
          "id": "geography-101-l03-f2",
          "front": "Flat-topped elevated landform",
          "back": "Plateau"
        },
        {
          "id": "geography-101-l03-f3",
          "front": "Land completely surrounded by water",
          "back": "Island"
        },
        {
          "id": "geography-101-l03-f4",
          "front": "Land surrounded by water on three sides",
          "back": "Peninsula"
        }
      ],
      "questions": [
        {
          "id": "geography-101-l03-q1",
          "text": "The tallest mountain in the world is",
          "options": [
            {
              "id": "a",
              "text": "Mount Everest"
            },
            {
              "id": "b",
              "text": "Mount Kilimanjaro"
            },
            {
              "id": "c",
              "text": "Mount Fuji"
            },
            {
              "id": "d",
              "text": "Mount McKinley"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Mount Everest stands at 29,032 feet in the Himalayas!"
        },
        {
          "id": "geography-101-l03-q2",
          "text": "Florida is an example of a",
          "options": [
            {
              "id": "a",
              "text": "Peninsula"
            },
            {
              "id": "b",
              "text": "Island"
            },
            {
              "id": "c",
              "text": "Plateau"
            },
            {
              "id": "d",
              "text": "Mountain"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Florida is surrounded by water on three sides!"
        },
        {
          "id": "geography-101-l03-q3",
          "text": "Wide, flat areas of land used for farming are called",
          "options": [
            {
              "id": "a",
              "text": "Plains"
            },
            {
              "id": "b",
              "text": "Mountains"
            },
            {
              "id": "c",
              "text": "Islands"
            },
            {
              "id": "d",
              "text": "Valleys"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Plains are flat and great for agriculture like the Great Plains!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "geography-101-l03-act1",
          "type": "drawing_canvas",
          "title": "Landform diorama sketch",
          "description": "Draw a landscape that includes at least 4 landforms: a mountain, a valley, a plateau, and an island in a surrounding lake. Label each one."
        }
      ],
      "learningAids": [
        {
          "id": "geography-101-l03-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "geography-101-l04",
      "title": "Geography Checkpoint",
      "type": "quiz",
      "duration": 8,
      "chunks": [
        {
          "id": "geography-101-l04-c1",
          "title": "Continents and Maps Review",
          "content": "Let's review what we've learned! There are seven continents and five oceans on our planet. Maps use important tools like compass roses, scales, and legends to help us understand the information they present. Knowing these basics is essential for navigating and exploring our world!\nContext recap: Let's review what we've learned! There are seven continents and five oceans on our planet. Maps use important tools like compass roses, scales, and legends to help us understand the information they present. Knowing these basics is essential for navigating and exploring our world!"
        },
        {
          "id": "geography-101-l04-c2",
          "title": "Landforms Review",
          "content": "In our exploration of landforms, we discovered that mountains, valleys, plateaus, plains, islands, and peninsulas each have their own unique characteristics. These landforms are shaped by the movement of tectonic plates, which continuously change the Earth's surface. Understanding these features helps us appreciate the beauty and complexity of our planet!\nContext recap: In our exploration of landforms, we discovered that mountains, valleys, plateaus, plains, islands, and peninsulas each have their own unique characteristics. These landforms are shaped by the movement of tectonic plates, which continuously change the Earth's surface. Understanding these features helps us appreciate the beauty and complexity of our planet!"
        },
        {
          "id": "geography-101-l04-c3",
          "title": "Great Progress!",
          "content": "Congratulations on your progress! You now have the skills to read maps and identify various landforms. Next, we will dive into exciting topics such as climate zones, rivers, lakes, and world capitals. Keep up the great work as we continue our journey through geography!\nContext recap: Congratulations on your progress! You now have the skills to read maps and identify various landforms. Next, we will dive into exciting topics such as climate zones, rivers, lakes, and world capitals. Keep up the great work as we continue our journey through geography!"
        }
      ],
      "flashcards": [
        {
          "id": "geography-101-l04-f1",
          "front": "Number of continents",
          "back": "Seven"
        },
        {
          "id": "geography-101-l04-f2",
          "front": "What a compass rose shows",
          "back": "Directions (N, S, E, W)"
        },
        {
          "id": "geography-101-l04-f3",
          "front": "Grand Canyon was carved by this river",
          "back": "Colorado River"
        },
        {
          "id": "geography-101-l04-f4",
          "front": "The 'Roof of the World' plateau",
          "back": "Tibetan Plateau"
        }
      ],
      "questions": [
        {
          "id": "geography-101-l04-q1",
          "text": "How many continents are there?",
          "options": [
            {
              "id": "a",
              "text": "7"
            },
            {
              "id": "b",
              "text": "5"
            },
            {
              "id": "c",
              "text": "6"
            },
            {
              "id": "d",
              "text": "8"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Asia, Africa, North America, South America, Antarctica, Europe, Australia — 7!"
        },
        {
          "id": "geography-101-l04-q2",
          "text": "A map legend explains",
          "options": [
            {
              "id": "a",
              "text": "The symbols on the map"
            },
            {
              "id": "b",
              "text": "The weather"
            },
            {
              "id": "c",
              "text": "The continent names"
            },
            {
              "id": "d",
              "text": "The time zone"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The legend tells you what each symbol means!"
        },
        {
          "id": "geography-101-l04-q3",
          "text": "Greenland is the world's largest",
          "options": [
            {
              "id": "a",
              "text": "Island"
            },
            {
              "id": "b",
              "text": "Continent"
            },
            {
              "id": "c",
              "text": "Mountain"
            },
            {
              "id": "d",
              "text": "Peninsula"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Greenland is the largest island — but not big enough to be a continent!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "geography-101-l04-act1",
          "type": "drawing_canvas",
          "title": "Map and landform review sheet",
          "description": "Draw a mini world map with all 7 continents labeled. Below it, draw and label 3 landforms you learned about."
        }
      ],
      "learningAids": [
        {
          "id": "geography-101-l04-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "geography-101-l05",
      "title": "Climate Zones",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "geography-101-l05-c1",
          "title": "Tropical Zone",
          "content": "The tropical zone is a warm and lively area located close to the equator, where the sun shines brightly all year long. In this special region, temperatures are high, and there is plenty of rainfall, which creates the perfect conditions for beautiful and lush tropical rainforests. One of the most famous rainforests in the world, the Amazon rainforest, can be found in this zone. The equator itself is an imaginary line that runs around the middle of our planet, dividing it into two halves: the Northern Hemisphere, which is above the equator, and the Southern Hemisphere, which is below it. Learning about the tropical zone helps us understand the amazing variety of plants and animals that live in these warm climates, and why they are so important to our Earth."
        },
        {
          "id": "geography-101-l05-c2",
          "title": "Temperate Zone",
          "content": "Temperate zones are really interesting places that sit between the warm tropics and the cold polar regions. In these zones, we get to enjoy four different seasons: spring, summer, fall, and winter. Each season has its own special weather and changes in nature, like flowers blooming in spring or leaves changing colors in fall. Many regions, such as most of the United States, Europe, and eastern China, are located in temperate zones. This variety in climate creates different ecosystems, where many plants and animals thrive. It also allows people to grow a wide range of crops, making temperate zones important for both nature and human life."
        },
        {
          "id": "geography-101-l05-c3",
          "title": "Polar Zone",
          "content": "Polar zones are fascinating areas located near the North and South Poles, where the climate is known for being extremely cold. In these unique regions, winters can last a long time and are often very harsh, while summers are much shorter and tend to be cool. The Arctic, which is found in the Northern Hemisphere, and Antarctica, located in the Southern Hemisphere, are two of the most well-known polar regions. These areas are characterized by vast expanses of ice and snow, creating a stunning yet challenging environment for the plants and animals that live there. The climate in polar zones is influenced by several important factors, including latitude (how far north or south you are), altitude (how high you are above sea level), and the distance from the ocean. Understanding polar zones is not only interesting but also crucial for learning about climate change and how it affects the delicate ecosystems found in these cold regions of our planet."
        }
      ],
      "flashcards": [
        {
          "id": "geography-101-l05-f1",
          "front": "Hot zone near the equator",
          "back": "Tropical zone"
        },
        {
          "id": "geography-101-l05-f2",
          "front": "Zone with four distinct seasons",
          "back": "Temperate zone"
        },
        {
          "id": "geography-101-l05-f3",
          "front": "Extremely cold zone near the poles",
          "back": "Polar zone"
        },
        {
          "id": "geography-101-l05-f4",
          "front": "Imaginary line dividing Earth into Northern and Southern Hemispheres",
          "back": "Equator"
        }
      ],
      "questions": [
        {
          "id": "geography-101-l05-q1",
          "text": "The tropical zone is located near the",
          "options": [
            {
              "id": "a",
              "text": "Equator"
            },
            {
              "id": "b",
              "text": "North Pole"
            },
            {
              "id": "c",
              "text": "South Pole"
            },
            {
              "id": "d",
              "text": "Moon"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Tropical zones wrap around the equator where it is hottest!"
        },
        {
          "id": "geography-101-l05-q2",
          "text": "Which zone has four distinct seasons?",
          "options": [
            {
              "id": "a",
              "text": "Temperate"
            },
            {
              "id": "b",
              "text": "Tropical"
            },
            {
              "id": "c",
              "text": "Polar"
            },
            {
              "id": "d",
              "text": "Desert"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Temperate zones experience spring, summer, fall, and winter!"
        },
        {
          "id": "geography-101-l05-q3",
          "text": "Three things that affect climate are latitude, altitude, and",
          "options": [
            {
              "id": "a",
              "text": "Distance from the ocean"
            },
            {
              "id": "b",
              "text": "Population"
            },
            {
              "id": "c",
              "text": "Number of cities"
            },
            {
              "id": "d",
              "text": "Language spoken"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Oceans moderate temperatures — coastal areas are milder!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "geography-101-l05-act1",
          "type": "drawing_canvas",
          "title": "Climate zone map",
          "description": "On a world map, color the tropical zone red, the temperate zones green, and the polar zones blue. Draw the equator and label each zone."
        }
      ]
    },
    {
      "id": "geography-101-l06",
      "title": "World Rivers and Lakes",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "geography-101-l06-c1",
          "title": "Major World Rivers",
          "content": "The Nile River, which flows through northeastern Africa, is known as the longest river in the world, measuring about 4,130 miles long! This incredible river is not just a long stretch of water; it has been essential for the people and wildlife in the region for thousands of years. Next, we have the Amazon River, located in South America. This river is special because it carries more water than any other river on the planet and flows through the Amazon Rainforest, which is the largest rainforest in the world. The Amazon is home to countless species of plants and animals, making it a vital ecosystem. In North America, the Mississippi River is very important as it drains water from 31 states, providing water for many communities and supporting a variety of wildlife. Lastly, the Yangtze River in China is the longest river in Asia, playing a crucial role in the culture and economy of the region. Each of these rivers is not only a natural wonder but also a lifeline for the people and ecosystems that depend on them."
        },
        {
          "id": "geography-101-l06-c2",
          "title": "Major World Lakes",
          "content": "Let's explore some of the most important lakes in the world! The Caspian Sea, which is found on the border between Asia and Europe, holds the title of the largest lake by area. This means it covers a vast space! Moving over to North America, we have Lake Superior, which is the largest freshwater lake when we look at its surface area. That means it has more water on top than any other freshwater lake! Now, if we travel all the way to Russia, we find Lake Baikal. This lake is special because it is the deepest lake in the world, reaching incredible depths. It also contains about 20% of all the unfrozen freshwater on our planet! These lakes are not just stunning to look at; they play a crucial role in supporting wildlife, providing places for people to enjoy activities like fishing and swimming, and supplying water for our daily needs. Understanding these lakes helps us appreciate the beauty and importance of our planet's natural resources."
        },
        {
          "id": "geography-101-l06-c3",
          "title": "Why Rivers and Lakes Matter",
          "content": "Rivers and lakes are incredibly important to our planet. They provide essential resources such as drinking water, irrigation for farms, and transportation routes for people and goods. Additionally, they create habitats for a wide variety of wildlife. For example, ancient civilizations, like the one in Egypt, flourished along the banks of the Nile River due to its fertile flood plains, which supported agriculture and trade. Understanding the significance of rivers and lakes helps us appreciate their role in sustaining life.\nContext recap: Rivers and lakes are incredibly important to our planet. They provide essential resources such as drinking water, irrigation for farms, and transportation routes for people and goods. Additionally, they create habitats for a wide variety of wildlife. For example, ancient civilizations, like the one in Egypt, flourished along the banks of the Nile River due to its fertile flood plains, which supported agriculture and trade."
        }
      ],
      "flashcards": [
        {
          "id": "geography-101-l06-f1",
          "front": "Longest river in the world",
          "back": "Nile River (about 4,130 miles)"
        },
        {
          "id": "geography-101-l06-f2",
          "front": "River that carries the most water",
          "back": "Amazon River"
        },
        {
          "id": "geography-101-l06-f3",
          "front": "Deepest lake in the world",
          "back": "Lake Baikal (Russia)"
        },
        {
          "id": "geography-101-l06-f4",
          "front": "World's largest lake (by area)",
          "back": "Caspian Sea"
        }
      ],
      "questions": [
        {
          "id": "geography-101-l06-q1",
          "text": "Which is the longest river in the world?",
          "options": [
            {
              "id": "a",
              "text": "Nile"
            },
            {
              "id": "b",
              "text": "Amazon"
            },
            {
              "id": "c",
              "text": "Mississippi"
            },
            {
              "id": "d",
              "text": "Yangtze"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The Nile flows about 4,130 miles through Africa!"
        },
        {
          "id": "geography-101-l06-q2",
          "text": "The deepest lake in the world is",
          "options": [
            {
              "id": "a",
              "text": "Lake Baikal"
            },
            {
              "id": "b",
              "text": "Lake Superior"
            },
            {
              "id": "c",
              "text": "Caspian Sea"
            },
            {
              "id": "d",
              "text": "Lake Victoria"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Lake Baikal in Russia is over 5,300 feet deep!"
        },
        {
          "id": "geography-101-l06-q3",
          "text": "Ancient Egypt grew along the Nile because of its",
          "options": [
            {
              "id": "a",
              "text": "Fertile flood plains"
            },
            {
              "id": "b",
              "text": "Cold temperatures"
            },
            {
              "id": "c",
              "text": "Mountains"
            },
            {
              "id": "d",
              "text": "Polar ice"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The Nile's annual floods left rich soil for farming!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "geography-101-l06-act1",
          "type": "drawing_canvas",
          "title": "River and lake map",
          "description": "On a world map, draw and label the Nile, Amazon, Mississippi, and Yangtze rivers in blue. Mark Lake Baikal, Lake Superior, and the Caspian Sea. Add arrows showing which direction each river flows."
        }
      ]
    },
    {
      "id": "geography-101-l07",
      "title": "Countries and Capitals",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "geography-101-l07-c1",
          "title": "The Americas",
          "content": "In the Americas, we find many fascinating capitals that are important to their countries. The capital of the United States is Washington, D.C. This city is not only the political center of the country but also a place filled with history, monuments, and museums that tell the story of the nation. Moving north, we reach Canada, where the capital is Ottawa. Ottawa is known for its stunning buildings, including the Parliament Hill, and it hosts many cultural events throughout the year. Next, we travel to Mexico City, the capital of Mexico. This vibrant city is one of the largest in the world and is famous for its rich culture, delicious food, and lively atmosphere. Finally, we have Brazil, the largest country in South America, with its capital in Brasília. Brasília is unique because it was designed with modern architecture and is laid out in a way that resembles an airplane from above. Learning about these capitals helps us understand the heart and identity of each country in the Americas."
        },
        {
          "id": "geography-101-l07-c2",
          "title": "Europe, Asia, and Africa",
          "content": "In Europe, the capital of France is Paris, often called the 'City of Light.' The United Kingdom's capital is London, a city famous for its history and landmarks. Germany's capital is Berlin, known for its vibrant culture and history. Russia, the largest country in the world, has its capital in Moscow, a city rich in history and architecture. In Asia, China’s capital is Beijing, while India’s capital is New Delhi. Japan’s capital is Tokyo, a bustling metropolis. Lastly, Egypt’s capital is Cairo, and South Africa has three capitals: Pretoria, Cape Town, and Bloemfontein, each serving different governmental functions."
        },
        {
          "id": "geography-101-l07-c3",
          "title": "Australia and Fun Facts",
          "content": "Australia's capital city is Canberra, which many people mistakenly think is Sydney, the largest city in Australia. It's important to know that there are about 195 countries in the world, and each one has its own special culture, traditions, and history that make it unique. For example, the smallest country in the world is Vatican City, which is a tiny independent state located right in the heart of Rome, Italy. It’s fascinating to learn that the newest country is South Sudan, which became independent in 2011. By exploring these countries and their capitals, we can appreciate the rich diversity and variety of life around our planet, helping us to understand and respect different ways of living."
        }
      ],
      "flashcards": [
        {
          "id": "geography-101-l07-f1",
          "front": "Capital of the United States",
          "back": "Washington, D.C."
        },
        {
          "id": "geography-101-l07-f2",
          "front": "Capital of Japan",
          "back": "Tokyo"
        },
        {
          "id": "geography-101-l07-f3",
          "front": "Smallest country in the world",
          "back": "Vatican City"
        },
        {
          "id": "geography-101-l07-f4",
          "front": "Capital of Australia (not Sydney!)",
          "back": "Canberra"
        }
      ],
      "questions": [
        {
          "id": "geography-101-l07-q1",
          "text": "The capital of Brazil is",
          "options": [
            {
              "id": "a",
              "text": "Brasília"
            },
            {
              "id": "b",
              "text": "Rio de Janeiro"
            },
            {
              "id": "c",
              "text": "São Paulo"
            },
            {
              "id": "d",
              "text": "Buenos Aires"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Brasília is the planned capital, not the more famous Rio!"
        },
        {
          "id": "geography-101-l07-q2",
          "text": "The smallest country in the world is",
          "options": [
            {
              "id": "a",
              "text": "Vatican City"
            },
            {
              "id": "b",
              "text": "Monaco"
            },
            {
              "id": "c",
              "text": "Luxembourg"
            },
            {
              "id": "d",
              "text": "Singapore"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Vatican City is inside Rome and is only 0.17 square miles!"
        },
        {
          "id": "geography-101-l07-q3",
          "text": "The capital of Australia is",
          "options": [
            {
              "id": "a",
              "text": "Canberra"
            },
            {
              "id": "b",
              "text": "Sydney"
            },
            {
              "id": "c",
              "text": "Melbourne"
            },
            {
              "id": "d",
              "text": "Brisbane"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Canberra was chosen as a compromise between Sydney and Melbourne!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "geography-101-l07-act1",
          "type": "matching_pairs",
          "title": "Capital city match",
          "description": "Match each country to its capital: USA→Washington D.C., Japan→Tokyo, France→Paris, Brazil→Brasília, Australia→Canberra, Egypt→Cairo. Try to do it from memory!"
        }
      ]
    },
    {
      "id": "geography-101-l08",
      "title": "Final Geography Assessment",
      "type": "quiz",
      "duration": 10,
      "chunks": [
        {
          "id": "geography-101-l08-c1",
          "title": "Continents, Maps, and Landforms Review",
          "content": "In geography, we learn that there are seven continents and five oceans on our planet. Maps are essential tools that help us navigate and understand our world; they often include features like compass roses, scales, and legends to guide us. Major landforms include mountains, valleys, plateaus, plains, islands, and peninsulas, each with its own unique characteristics and importance. Understanding these concepts is crucial for exploring the geography of our amazing world.\nContext recap: In geography, we learn that there are seven continents and five oceans on our planet. Maps are essential tools that help us navigate and understand our world; they often include features like compass roses, scales, and legends to guide us. Major landforms include mountains, valleys, plateaus, plains, islands, and peninsulas, each with its own unique characteristics and importance. Understanding these concepts is crucial for exploring the geography of our amazing world."
        },
        {
          "id": "geography-101-l08-c2",
          "title": "Climate, Rivers, and Lakes Review",
          "content": "There are three main climate zones on Earth: tropical, temperate, and polar. The Nile River is recognized as the longest river in the world, while Lake Baikal is known for being the deepest lake, holding a significant portion of the world's unfrozen freshwater. Rivers play a crucial role in supporting agriculture, providing drinking water, and facilitating transportation. Understanding these elements helps us appreciate the interconnectedness of our planet's ecosystems.\nContext recap: There are three main climate zones on Earth: tropical, temperate, and polar. The Nile River is recognized as the longest river in the world, while Lake Baikal is known for being the deepest lake, holding a significant portion of the world's unfrozen freshwater. Rivers play a crucial role in supporting agriculture, providing drinking water, and facilitating transportation. Understanding these elements helps us appreciate the interconnectedness of our planet's ecosystems."
        },
        {
          "id": "geography-101-l08-c3",
          "title": "Countries and Capitals Review",
          "content": "There are 195 countries in the world, and each country has its own capital city that serves as the center of government. Vatican City is the smallest country, known for its rich history and significance in the Catholic Church. By learning about these countries and their capitals, you are becoming a world geography expert, equipped with knowledge about the diverse cultures and places that make up our planet!\nContext recap: There are 195 countries in the world, and each country has its own capital city that serves as the center of government. Vatican City is the smallest country, known for its rich history and significance in the Catholic Church. By learning about these countries and their capitals, you are becoming a world geography expert, equipped with knowledge about the diverse cultures and places that make up our planet!"
        }
      ],
      "flashcards": [
        {
          "id": "geography-101-l08-f1",
          "front": "Longest river",
          "back": "Nile"
        },
        {
          "id": "geography-101-l08-f2",
          "front": "Largest continent",
          "back": "Asia"
        },
        {
          "id": "geography-101-l08-f3",
          "front": "Zone with four seasons",
          "back": "Temperate"
        },
        {
          "id": "geography-101-l08-f4",
          "front": "Tallest mountain",
          "back": "Mount Everest"
        }
      ],
      "questions": [
        {
          "id": "geography-101-l08-q1",
          "text": "Which ocean is the largest?",
          "options": [
            {
              "id": "a",
              "text": "Pacific"
            },
            {
              "id": "b",
              "text": "Atlantic"
            },
            {
              "id": "c",
              "text": "Indian"
            },
            {
              "id": "d",
              "text": "Arctic"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The Pacific Ocean is the largest and deepest!"
        },
        {
          "id": "geography-101-l08-q2",
          "text": "Italy is shaped like a boot and is an example of a",
          "options": [
            {
              "id": "a",
              "text": "Peninsula"
            },
            {
              "id": "b",
              "text": "Island"
            },
            {
              "id": "c",
              "text": "Plateau"
            },
            {
              "id": "d",
              "text": "Plain"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Italy is surrounded by water on three sides — a peninsula!"
        },
        {
          "id": "geography-101-l08-q3",
          "text": "The Amazon River flows through the world's largest",
          "options": [
            {
              "id": "a",
              "text": "Rainforest"
            },
            {
              "id": "b",
              "text": "Desert"
            },
            {
              "id": "c",
              "text": "Ice cap"
            },
            {
              "id": "d",
              "text": "Mountain range"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The Amazon River flows through the Amazon Rainforest in South America!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "geography-101-l08-act1",
          "type": "project_builder",
          "title": "Geography journal",
          "description": "Create a geography journal with one page per lesson topic: Continents, Maps, Landforms, Climate, Rivers/Lakes, and Countries. Write 2-3 facts and draw a picture for each. Share your journal with someone and quiz them!"
        }
      ]
    }
  ]
};
