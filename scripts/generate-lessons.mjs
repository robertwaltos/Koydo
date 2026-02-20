import fs from 'fs';
import path from 'path';

const lessonsDir = path.join(process.cwd(), 'src', 'lib', 'data', 'lessons');

if (!fs.existsSync(lessonsDir)) {
  fs.mkdirSync(lessonsDir, { recursive: true });
}

const lessons = [
  {
    "id": "pre-k-math-basic-shapes",
    "subject": "Math",
    "gradeLevel": "Pre-K",
    "topic": "Basic Shapes",
    "title": "Learning Basic Shapes",
    "learningObjectives": [
      "Identify circles, squares, and triangles.",
      "Recognize basic shapes in everyday objects."
    ],
    "content": [
      {
        "type": "text",
        "body": "Let's learn about shapes! Shapes are all around us."
      },
      {
        "type": "image",
        "url": "/placeholders/shapes.svg",
        "alt": "A circle, a square, and a triangle."
      }
    ],
    "quiz": {
      "title": "Shape Quiz",
      "questions": [
        {
          "id": "q1",
          "question": "Which shape is round?",
          "type": "multiple-choice",
          "options": ["Circle", "Square", "Triangle"],
          "correctAnswer": "Circle"
        }
      ]
    },
    "multilingual": {
      "es": {
        "title": "Aprendiendo Formas Básicas"
      }
    }
  },
  {
    "id": "pre-k-math-simple-addition",
    "subject": "Math",
    "gradeLevel": "Pre-K",
    "topic": "Simple Addition",
    "title": "Introduction to Addition",
    "learningObjectives": [
      "Understand the concept of adding numbers.",
      "Solve simple addition problems up to 5."
    ],
    "content": [
      {
        "type": "text",
        "body": "Addition is putting numbers together. Let's try!"
      },
      {
        "type": "text",
        "body": "1 + 1 = 2"
      }
    ],
    "quiz": {
      "title": "Addition Quiz",
      "questions": [
        {
          "id": "q1",
          "question": "What is 2 + 1?",
          "type": "multiple-choice",
          "options": ["2", "3", "4"],
          "correctAnswer": "3"
        }
      ]
    },
    "multilingual": {
      "es": {
        "title": "Introducción a la Suma"
      }
    }
  }
];

lessons.forEach(lesson => {
  const filePath = path.join(lessonsDir, `${lesson.id}.json`);
  fs.writeFileSync(filePath, JSON.stringify(lesson, null, 2));
  console.log(`Generated lesson: ${lesson.title}`);
});
