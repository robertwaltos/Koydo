import type { LearningModule } from "@/lib/modules/types";

export const module_template.example_Module: LearningModule = {
  "id": "subject-001",
  "title": "The Amazing Water Cycle",
  "description": "Learn how water travels from the ground to the sky and back again in a never-ending journey called the water cycle.",
  "subject": "Science",
  "tags": [
    "water cycle",
    "earth science",
    "weather"
  ],
  "minAge": 8,
  "maxAge": 12,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/images/science/water-cycle-overview.svg",
  "learningObjectives": [
    "Identify and describe the three main stages of the water cycle: evaporation, condensation, and precipitation."
  ],
  "lessons": [
    {
      "id": "subject-001-l1",
      "title": "What is the Water Cycle?",
      "type": "interactive",
      "duration": 5
    },
    {
      "id": "subject-001-l2",
      "title": "Evaporation, Condensation, and Precipitation",
      "type": "video",
      "duration": 8,
      "sourceUrl": "/videos/science/water-cycle-stages.mp4"
    },
    {
      "id": "subject-001-l3",
      "title": "Check Your Knowledge",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "subject-001-l3-q1",
          "text": "When the sun heats up water in a lake and turns it into a gas (water vapor), what is this process called?",
          "skillId": "science-water-cycle-evaporation",
          "hint": "Think about the 'up' part of the cycle, when water seems to disappear into the air.",
          "explanation": "Evaporation is the correct answer. It's the process where liquid water is heated and transforms into a gas called water vapor, rising into the atmosphere.",
          "imageUrl": "/images/science/evaporation-sun-lake.svg",
          "imageAlt": "An illustration of the sun shining on a lake, with wavy lines rising from the water to show evaporation.",
          "options": [
            {
              "id": "a",
              "text": "Evaporation",
              "imageUrl": "/icons/science/evaporation.svg"
            },
            {
              "id": "b",
              "text": "Condensation",
              "imageUrl": "/icons/science/condensation.svg"
            },
            {
              "id": "c",
              "text": "Precipitation",
              "imageUrl": "/icons/science/precipitation.svg"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "subject-001-l3-q2",
          "text": "What happens when water vapor in the air gets cold and changes back into liquid, forming clouds?",
          "skillId": "science-water-cycle-condensation",
          "hint": "This is what makes clouds in the sky.",
          "explanation": "Condensation is the process where water vapor cools down and turns back into tiny liquid water droplets, which group together to form clouds.",
          "imageUrl": "/images/science/cloud-formation.svg",
          "imageAlt": "An illustration showing water vapor rising and forming a fluffy white cloud.",
          "options": [
            {
              "id": "a",
              "text": "Collection"
            },
            {
              "id": "b",
              "text": "Condensation"
            },
            {
              "id": "c",
              "text": "Evaporation"
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "subject-001-l3-q3",
          "text": "Rain, snow, and hail are all examples of...?",
          "skillId": "science-water-cycle-precipitation",
          "hint": "Think about how water comes back down from the clouds.",
          "explanation": "Precipitation is any form of water that falls from the clouds to the Earth's surface, including rain, snow, sleet, or hail.",
          "imageUrl": "/images/science/rain-snow-hail.svg",
          "imageAlt": "An illustration of a cloud with rain, snowflakes, and hailstones falling from it.",
          "options": [
            {
              "id": "a",
              "text": "Evaporation"
            },
            {
              "id": "b",
              "text": "Condensation"
            },
            {
              "id": "c",
              "text": "Precipitation"
            }
          ],
          "correctOptionId": "c"
        }
      ]
    },
    {
      "id": "subject-001-l4",
      "title": "The Cycle Repeats!",
      "type": "summary",
      "duration": 3,
      "summaryText": "Great job! You've learned how water evaporates, forms clouds through condensation, and falls back to Earth as precipitation. This amazing cycle happens all the time, all over the world.",
      "summaryImageUrl": "/images/science/full-water-cycle-diagram.svg"
    }
  ]
};
