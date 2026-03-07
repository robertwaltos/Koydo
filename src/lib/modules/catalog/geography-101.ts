import type { LearningModule } from "@/lib/modules/types";

export const geography_101_Module: LearningModule = {
  "id": "geography-101",
  "title": "Geography: Our Amazing World",
  "description": "Embark on a global adventure! Explore Earth's continents and oceans, master map-reading skills, discover towering mountains and vast plains, understand different climates, trace the paths of world rivers, and journey through countries and their capitals.",
  "subject": "Geography",
  "tags": [
    "geography",
    "social-studies",
    "interactive",
    "curriculum"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
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
          "content": "Our Earth has seven incredible continents to explore! The largest is Asia, home to many different cultures. Africa is known for its vast deserts and amazing wildlife. North America has everything from snowy mountains to sunny beaches, while South America is famous for its rainforests. Antarctica is the coldest continent, mostly visited by scientists. Europe is filled with history and famous cities. The smallest continent is Australia, which is also a country. It's often grouped with nearby islands into a region called Oceania. Together, these continents are like giant puzzle pieces on our planet."
        },
        {
          "id": "geography-101-l01-c2",
          "title": "The Five Oceans",
          "content": "Surrounding the continents are five massive oceans. The Pacific Ocean is the largest and deepest. The Atlantic Ocean separates the Americas from Europe and Africa. The Indian Ocean is the warmest, nestled between Africa, Asia, and Australia. The Southern Ocean circles Antarctica and helps regulate Earth's temperature. Finally, the Arctic Ocean is the smallest and coldest, located at the North Pole. These oceans cover about 71% of our planet and are vital for our climate, weather, and all life on Earth."
        },
        {
          "id": "geography-101-l01-c3",
          "title": "How Continents Formed",
          "content": "Did you know that about 200 million years ago, all the continents were joined together in one supercontinent called Pangaea? Over millions of years, huge pieces of the Earth's crust, called tectonic plates, started to move. This movement caused Pangaea to break apart and the continents to drift to where they are today. This process is still happening! If you look at a map, you can see how South America and Africa seem to fit together like two puzzle pieces. It's amazing to think about how our planet is always changing."
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
          "title": "Label the World Map",
          "description": "Drag the names of the seven continents and five oceans to their correct locations on a world map. Color each continent a different color to make your map vibrant!"
        }
      ],
      "learningAids": [
        {
          "id": "geography-101-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "A colorful world map with all continents and oceans clearly labeled, perfect for a quick review."
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
          "content": "When you look at a map, you'll often see a symbol called a compass rose. It shows the four main directions: North, South, East, and West. A fun way to remember them in order is 'Never Eat Soggy Waffles.' Maps also show in-between directions like northeast, southeast, southwest, and northwest. These help us be more precise about where things are. The compass rose is your main tool for navigating a map."
        },
        {
          "id": "geography-101-l02-c2",
          "title": "Map Scale",
          "content": "A map is much smaller than the real world, so we use a map scale to understand distances. The scale might say '1 inch = 100 miles.' This means if you measure 3 inches between two cities on the map, the real distance is 300 miles! Reading the scale is key to figuring out how far apart places really are, which is very helpful for planning a trip."
        },
        {
          "id": "geography-101-l02-c3",
          "title": "Map Legend (Key)",
          "content": "Have you ever wondered what all the symbols on a map mean? That's what the map legend, or key, is for! The legend is a box that explains what each symbol represents. For example, a blue line is usually a river, a small dot might be a city, and a star often marks a capital city. Always check the legend first so you can understand what the map is showing you."
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
          "title": "Create a Treasure Map",
          "description": "Draw a map of your room, backyard, or an imaginary island. Be sure to include a compass rose, a scale (e.g., 1 inch = 1 foot), and a legend with symbols for furniture or landmarks. Mark an 'X' for the hidden treasure!"
        }
      ],
      "learningAids": [
        {
          "id": "geography-101-l02-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "An illustrated guide showing a compass rose, a map scale, and a sample legend with symbols for a city, river, and capital."
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
          "content": "Mountains are landforms that rise high above the surrounding area. They are often formed when tectonic plates push against each other. The tallest mountain in the world is Mount Everest, which is over 29,000 feet high! Valleys are the low areas between mountains or hills. They are often carved out by rivers over millions of years. The Grand Canyon is a famous example of a deep valley formed by the Colorado River."
        },
        {
          "id": "geography-101-l03-c2",
          "title": "Plateaus and Plains",
          "content": "A plateau is a large, flat area of land that is higher than the land around it, like a flat-topped mountain. The Tibetan Plateau is so high it's called the 'Roof of the World.' Plains, on the other hand, are large areas of flat land with few trees. Because their soil is often rich, plains are perfect for farming. The Great Plains in the United States is a huge agricultural region."
        },
        {
          "id": "geography-101-l03-c3",
          "title": "Islands and Peninsulas",
          "content": "Islands and peninsulas are landforms defined by water. An island is a piece of land that is completely surrounded by water on all sides. Greenland is the world's largest island. A peninsula is a piece of land that is surrounded by water on three sides, but still connected to a larger landmass. Florida in the United States and Italy in Europe are both famous peninsulas."
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
          "title": "Landform Landscape",
          "description": "Draw a creative landscape that includes at least four different landforms you learned about. Try to include a mountain, a valley, a plateau, and an island in a lake. Label each one."
        }
      ],
      "learningAids": [
        {
          "id": "geography-101-l03-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "A dynamic illustration showcasing a mountain, valley, plateau, and island in one landscape, with each landform clearly labeled."
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
          "content": "Time to check our progress! Remember, our world has seven continents and five oceans. To explore them, we use maps with special tools: a compass rose for direction, a scale for distance, and a legend to understand the symbols."
        },
        {
          "id": "geography-101-l04-c2",
          "title": "Landforms Review",
          "content": "We've also learned about the amazing shapes of our land. From towering mountains and the low-lying valleys between them, to flat-topped plateaus and wide-open plains. We also explored islands and peninsulas, which are defined by the water around them."
        },
        {
          "id": "geography-101-l04-c3",
          "title": "Great Progress!",
          "content": "You're doing a fantastic job! You can now read a map and identify key landforms. Get ready, because next we'll explore what the weather is like in different parts of the world, discover major rivers and lakes, and visit countries and their capitals."
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
          "front": "The Grand Canyon was carved by this river",
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
          "title": "Map and Landform Review Sheet",
          "description": "On a single page, draw a mini world map and label all 7 continents. Below it, draw and label 3 different landforms you learned about."
        }
      ],
      "learningAids": [
        {
          "id": "geography-101-l04-a1",
          "type": "infographic",
          "title": "Key Concepts Infographic",
          "content": "A one-page visual summary of the key concepts from the first three lessons: continents, map tools, and landforms."
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
          "title": "What is Climate?",
          "content": "Have you ever wondered why some places are hot all year and others have snowy winters? That's because of climate! Climate is the usual weather pattern in a place over a long time. It's affected by how close a place is to the equator (latitude), how high it is (altitude), and how near it is to an ocean. These factors create different climate zones around the world."
        },
        {
          "id": "geography-101-l05-c2",
          "title": "Tropical Zone",
          "content": "The tropical zone is located near the equator, an imaginary line around the middle of the Earth. This zone gets the most direct sunlight, so it's warm all year round. With high temperatures and lots of rain, this zone is home to lush tropical rainforests, like the Amazon. The equator divides the Earth into the Northern and Southern Hemispheres."
        },
        {
          "id": "geography-101-l05-c3",
          "title": "Temperate Zone",
          "content": "The temperate zones lie between the warm tropics and the cold polar regions. If you live here, you likely experience four distinct seasons: spring, summer, fall, and winter. The weather changes throughout the year, creating a wide variety of environments. Most of the United States, Europe, and eastern China are in temperate zones."
        },
        {
          "id": "geography-101-l05-c4",
          "title": "Polar Zone",
          "content": "The polar zones are near the North and South Poles. These are the coldest places on Earth because they receive the least direct sunlight. Winters are very long and harsh, while summers are short and cool. The Arctic (in the north) and Antarctica (in the south) are the two main polar regions, known for their vast ice and snow."
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
          "title": "Climate Zone Map",
          "description": "On a world map, color the tropical zone red, the temperate zones green, and the polar zones blue. Draw and label the equator to show the center of the tropical zone."
        }
      ],
      "learningAids": [
        {
          "id": "geography-101-l05-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "A diagram of the Earth showing how the sun's rays create the hot Tropical, mild Temperate, and cold Polar zones."
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
          "content": "The Nile River in Africa is the longest river in the world, flowing for about 4,130 miles. In South America, the Amazon River carries more water than any other river and runs through the world's largest rainforest. The Mississippi River is a vital waterway in North America, and the Yangtze River is the longest river in Asia, playing a huge role in China's history and economy."
        },
        {
          "id": "geography-101-l06-c2",
          "title": "Major World Lakes",
          "content": "The Caspian Sea, located between Europe and Asia, is the world's largest lake by area. In North America, Lake Superior is the largest freshwater lake by surface area. And in Russia, Lake Baikal is the deepest lake in the world and holds about 20% of the world's unfrozen fresh water. These lakes are important for wildlife, recreation, and as a source of fresh water."
        },
        {
          "id": "geography-101-l06-c3",
          "title": "Why Rivers and Lakes Matter",
          "content": "Rivers and lakes are vital for life. They provide drinking water for people and animals, water for growing crops (irrigation), and paths for boats to travel. Many ancient civilizations, like Egypt along the Nile, grew strong because they had a reliable source of water for farming and trade. These bodies of water are essential for our planet's health."
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
          "title": "River and Lake Map",
          "description": "On a world map, draw and label the Nile, Amazon, Mississippi, and Yangtze rivers in blue. Mark the locations of Lake Baikal, Lake Superior, and the Caspian Sea. Add small arrows to show the direction each river flows."
        }
      ],
      "learningAids": [
        {
          "id": "geography-101-l06-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "A world map highlighting the major rivers and lakes from the lesson, with a small fact box for each."
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
          "content": "Let's visit some capitals in the Americas! The capital of the United States is Washington, D.C., a city full of monuments and museums. In Canada, the capital is Ottawa. Mexico's capital is Mexico City, one of the largest and most vibrant cities in the world. In South America, the capital of Brazil is Brasília, a city famous for its modern architecture that looks like an airplane from above."
        },
        {
          "id": "geography-101-l07-c2",
          "title": "Europe, Asia, and Africa",
          "content": "Let's take a quick tour of other major capitals! In Europe, Paris is the capital of France, and London is the capital of the United Kingdom. In Asia, you'll find Beijing in China and Tokyo in Japan. Moscow is the capital of the vast country of Russia. In Africa, Cairo is the capital of Egypt. Some countries, like South Africa, even have multiple capitals for different government functions!"
        },
        {
          "id": "geography-101-l07-c3",
          "title": "Australia and Fun Facts",
          "content": "The capital of Australia is Canberra, a city chosen as a compromise between the two largest cities, Sydney and Melbourne. Did you know there are about 195 countries in the world? The smallest is Vatican City, an independent state inside Rome, Italy. The newest country is South Sudan, which was formed in 2011. Each country has its own unique culture and history."
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
          "title": "Capital City Match",
          "description": "Match each country to its capital: USA→Washington D.C., Japan→Tokyo, France→Paris, Brazil→Brasília, Australia→Canberra, Egypt→Cairo. Try to do it from memory!"
        }
      ],
      "learningAids": [
        {
          "id": "geography-101-l07-a1",
          "type": "image",
          "title": "Capital City Postcards",
          "content": "A collection of digital 'postcards' from key capital cities like Paris, Tokyo, and Brasília, each showing a famous landmark."
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
          "content": "Let's review our journey! We started with the big picture: seven continents and five oceans. We learned to use maps as our guide, using the compass rose, scale, and legend. We then explored Earth's amazing landforms, from the highest mountains to the flattest plains."
        },
        {
          "id": "geography-101-l08-c2",
          "title": "Climate, Rivers, and Lakes Review",
          "content": "Next, we investigated climate, learning why tropical zones are hot, polar zones are cold, and temperate zones have four seasons. We traced the paths of the world's longest rivers, like the Nile, and discovered the deepest lakes, like Lake Baikal, learning why they are so important for life."
        },
        {
          "id": "geography-101-l08-c3",
          "title": "Countries and Capitals Review",
          "content": "Finally, we visited some of the world's 195 countries and their capital cities, from Washington, D.C. to Canberra. You've learned so much about our planet. Congratulations on becoming a world geography expert!"
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
          "title": "My Geography Journal",
          "description": "Create a geography journal to show what you've learned! Dedicate one page to each major topic: Continents, Maps, Landforms, Climate, Rivers/Lakes, and Countries. On each page, write 2-3 key facts and draw a picture. Share your journal with family or friends!"
        }
      ],
      "learningAids": [
        {
          "id": "geography-101-l08-a1",
          "type": "printable",
          "title": "Geography Expert Certificate",
          "content": "A printable certificate of completion to celebrate your new geography knowledge. Fill in your name and date!"
        }
      ]
    }
  ]
};
