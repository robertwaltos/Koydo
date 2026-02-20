import fs from 'fs';
import path from 'path';

// This is a placeholder for a real AI content generation service.
// In a real application, this would involve API calls to a model like GPT-4 or Gemini.
async function generateLessonContent(subject, gradeLevel, topic) {
  // For now, we'll use a simple switch statement with hardcoded content.
  // This simulates the AI generating content based on the topic.
  switch (topic) {
    case 'Basic Shapes':
      return {
        id: `pre-k-${subject.toLowerCase()}-basic-shapes`,
        title: 'Learning Basic Shapes',
        learningObjectives: [
          'Identify circles, squares, and triangles.',
          'Recognize basic shapes in everyday objects.',
        ],
        content: [
          { type: 'text', body: "Let's learn about shapes! Shapes are all around us." },
          { type: 'image', url: '/placeholders/shapes.svg', alt: 'A circle, a square, and a triangle.' },
        ],
        quiz: {
          title: 'Shape Quiz',
          questions: [
            { id: 'q1', question: 'Which shape is round?', type: 'multiple-choice', options: ['Circle', 'Square', 'Triangle'], correctAnswer: 'Circle' },
            { id: 'q2', question: 'How many sides does a square have?', type: 'multiple-choice', options: ['3', '4', '5'], correctAnswer: '4' },
          ],
        },
        multilingual: {
          es: {
            title: 'Aprendiendo Formas Básicas',
            content: [{ type: 'text', body: '¡Vamos a aprender sobre las formas! Las formas están a nuestro alrededor.' }],
            quiz: {
              title: 'Prueba de Formas',
              questions: [
                { id: 'q1', question: '¿Qué forma es redonda?', options: ['Círculo', 'Cuadrado', 'Triángulo'] },
                { id: 'q2', question: '¿Cuántos lados tiene un cuadrado?', options: ['3', '4', '5'] },
              ],
            },
          },
        },
      };
    case 'Simple Addition':
      return {
        id: `pre-k-${subject.toLowerCase()}-simple-addition`,
        title: 'Introduction to Addition',
        learningObjectives: [
          'Understand the concept of adding numbers.',
          'Solve simple addition problems up to 5.',
        ],
        content: [
          { type: 'text', body: "Addition is putting numbers together. Let's try!" },
          { type: 'text', body: "1 + 1 = 2" },
        ],
        quiz: {
          title: 'Addition Quiz',
          questions: [
            { id: 'q1', question: 'What is 2 + 1?', type: 'multiple-choice', options: ['2', '3', '4'], correctAnswer: '3' },
          ],
        },
        multilingual: {
          es: {
            title: 'Introducción a la Suma',
          },
        },
      };
    case 'Number Recognition 0-10':
        return {
            id: `pre-k-${subject.toLowerCase()}-number-recognition-0-10`,
            title: 'Number Recognition 0-10',
            learningObjectives: [
                'Recognize and name numerals 0-10.',
                'Count objects up to 10 with one-to-one correspondence.',
            ],
            content: [
                { type: 'text', body: 'Lets learn our numbers from 0 to 10!' },
                { type: 'image', url: '/placeholders/numbers-0-10.svg', alt: 'The numbers 0 through 10.' },
            ],
            quiz: {
                title: 'Number Quiz',
                questions: [
                    { id: 'q1', question: 'What number is this?', type: 'multiple-choice', options: ['7', '8', '9'], correctAnswer: '8', image: '/placeholders/number-8.svg' },
                    { id: 'q2', question: 'How many stars do you see?', type: 'multiple-choice', options: ['4', '5', '6'], correctAnswer: '5', image: '/placeholders/5-stars.svg' },
                ],
            },
            multilingual: {
                es: {
                    title: 'Reconocimiento de Números 0-10',
                    content: [{ type: 'text', body: '¡Aprendamos nuestros números del 0 al 10!' }],
                    quiz: {
                        title: 'Prueba de Números',
                        questions: [
                            { id: 'q1', question: '¿Qué número es este?', options: ['7', '8', '9'] },
                            { id: 'q2', question: '¿Cuántas estrellas ves?', options: ['4', '5', '6'] },
                        ],
                    },
                },
            },
      };
    case 'Comparing Numbers':
        return {
            id: `pre-k-${subject.toLowerCase()}-comparing-numbers`,
            title: 'Comparing Numbers',
            learningObjectives: [
                'Use words like "more", "less", and "same" to compare groups of objects.',
                'Compare two numbers between 1 and 10.',
            ],
            content: [
                { type: 'text', body: 'Lets learn to compare numbers!' },
                { type: 'image', url: '/placeholders/more-less.svg', alt: 'A group of 3 apples and a group of 5 apples.' },
            ],
            quiz: {
                title: 'Comparing Quiz',
                questions: [
                    { id: 'q1', question: 'Which group has more?', type: 'multiple-choice', options: ['Group A', 'Group B'], correctAnswer: 'Group B', image: '/placeholders/comparing-groups.svg' },
                    { id: 'q2', question: 'Which number is less than 7?', type: 'multiple-choice', options: ['6', '7', '8'], correctAnswer: '6' },
                ],
            },
            multilingual: {
                es: {
                    title: 'Comparando Números',
                    content: [{ type: 'text', body: '¡Aprendamos a comparar números!' }],
                    quiz: {
                        title: 'Prueba de Comparación',
                        questions: [
                            { id: 'q1', question: '¿Qué grupo tiene más?', options: ['Grupo A', 'Grupo B'] },
                            { id: 'q2', question: '¿Qué número es menor que 7?', options: ['6', '7', '8'] },
                        ],
                    },
                },
            },
        };
    case 'Counting to 20':
        return {
            id: `pre-k-${subject.toLowerCase()}-counting-to-20`,
            title: 'Lets Count to 20!',
            learningObjectives: [
                'Rote count to 20.',
                'Recognize and identify numbers from 0 to 20.',
                'Count objects up to 20 with one-to-one correspondence.',
            ],
            content: [
                { type: 'text', body: 'Hi friends! Today, we\'re going on an adventure to count all the way to 20! Are you ready?' },
                { type: 'image', url: '/placeholders/counting-to-20.svg', alt: 'A colorful display of numbers from 1 to 20.' },
                { type: 'text', body: 'Let\'s count together! 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20! Great job!' },
            ],
            quiz: {
                title: 'Counting Quiz',
                questions: [
                    { id: 'q1', question: 'What number comes after 15?', type: 'multiple-choice', options: ['14', '16', '17'], correctAnswer: '16' },
                    { id: 'q2', question: 'How many fingers and toes do you have in all?', type: 'multiple-choice', options: ['10', '15', '20'], correctAnswer: '20' },
                ],
            },
            multilingual: {
                es: {
                    title: '¡Contemos hasta 20!',
                    content: [
                        { type: 'text', body: '¡Hola amigos! Hoy, vamos a una aventura para contar hasta 20. ¿Están listos?' }
                    ],
                    quiz: {
                        title: 'Prueba de Contar',
                        questions: [
                            { id: 'q1', question: '¿Qué número viene después de 15?', options: ['14', '16', '17'] },
                            { id: 'q2', question: '¿Cuántos dedos de las manos y de los pies tienes en total?', options: ['10', '15', '20'] },
                        ],
                    },
                },
            },
        };
    case 'Patterns':
        return {
            id: `pre-k-${subject.toLowerCase()}-patterns`,
            title: 'Fun with Patterns!',
            learningObjectives: [
                'Identify simple AB patterns.',
                'Extend simple AB patterns.',
                'Create simple AB patterns.',
            ],
            content: [
                { type: 'text', body: 'Patterns are all around us! A pattern is something that repeats. Let\'s look for patterns together!' },
                { type: 'image', url: '/placeholders/patterns.svg', alt: 'A simple AB pattern with a red square and a blue circle.' },
                { type: 'text', body: 'Look at the pattern: Red, Blue, Red, Blue. What comes next? That\'s right, Red!' },
            ],
            quiz: {
                title: 'Pattern Quiz',
                questions: [
                    { id: 'q1', question: 'Look at the pattern: Circle, Square, Circle, Square. What comes next?', type: 'multiple-choice', options: ['Circle', 'Square', 'Triangle'], correctAnswer: 'Circle' },
                    { id: 'q2', question: 'Which of these is a pattern?', type: 'multiple-choice', options: ['Apple, Banana, Orange', 'Clap, Stomp, Clap, Stomp', 'Red, Green, Blue'], correctAnswer: 'Clap, Stomp, Clap, Stomp' },
                ],
            },
            multilingual: {
                es: {
                    title: '¡Diversión con Patrones!',
                    content: [
                        { type: 'text', body: '¡Los patrones están a nuestro alrededor! Un patrón es algo que se repite. ¡Busquemos patrones juntos!' }
                    ],
                    quiz: {
                        title: 'Prueba de Patrones',
                        questions: [
                            { id: 'q1', question: 'Mira el patrón: Círculo, Cuadrado, Círculo, Cuadrado. ¿Qué sigue?', options: ['Círculo', 'Cuadrado', 'Triángulo'] },
                            { id: 'q2', question: '¿Cuál de estos es un patrón?', options: ['Manzana, Plátano, Naranja', 'Aplaude, Pisa, Aplaude, Pisa', 'Rojo, Verde, Azul'] },
                        ],
                    },
                },
            },
        };
    case 'Measurement (size)':
        return {
            id: `pre-k-${subject.toLowerCase()}-measurement-size`,
            title: 'Big and Small, Short and Tall',
            learningObjectives: [
                'Compare objects using size-related vocabulary (big/small, long/short, tall/short).',
                'Order objects by size.',
                'Measure objects using non-standard units (like hands or blocks).',
            ],
            content: [
                { type: 'text', body: 'Let\'s learn about size! Some things are big, and some are small. Some are short, and some are tall!' },
                { type: 'image', url: '/placeholders/measurement.svg', alt: 'A big block and a small block, a long pencil and a short pencil.' },
                { type: 'text', body: 'Can you find something in the room that is BIG? Can you find something that is SMALL?' },
            ],
            quiz: {
                title: 'Size Quiz',
                questions: [
                    { id: 'q1', question: 'Which is bigger, an elephant or a mouse?', type: 'multiple-choice', options: ['Elephant', 'Mouse'], correctAnswer: 'Elephant' },
                    { id: 'q2', question: 'Which is shorter, a pencil or a crayon?', type: 'multiple-choice', options: ['Pencil', 'Crayon'], correctAnswer: 'Crayon' },
                ],
            },
            multilingual: {
                es: {
                    title: 'Grande y Pequeño, Corto y Alto',
                    content: [
                        { type: 'text', body: '¡Vamos a aprender sobre el tamaño! Algunas cosas son grandes y otras pequeñas. ¡Algunas son cortas y otras altas!' }
                    ],
                    quiz: {
                        title: 'Prueba de Tamaño',
                        questions: [
                            { id: 'q1', question: '¿Qué es más grande, un elefante o un ratón?', options: ['Elefante', 'Ratón'] },
                            { id: 'q2', question: '¿Qué es más corto, un lápiz o un crayón?', options: ['Lápiz', 'Crayón'] },
                        ],
                    },
                },
            },
        };
    case 'Sorting and Classifying':
        return {
            id: `pre-k-${subject.toLowerCase()}-sorting-and-classifying`,
            title: 'Let\'s Sort!',
            learningObjectives: [
                'Identify similarities and differences between objects.',
                'Sort a collection of objects based on a single attribute (e.g., color, shape, size).',
                'Describe the attribute used for sorting.',
            ],
            content: [
                { type: 'text', body: 'Sorting is putting things together that are alike. Let\'s be super sorters!' },
                { type: 'image', url: '/placeholders/sorting.svg', alt: 'A collection of colorful shapes being sorted into groups.' },
                { type: 'text', body: 'We can sort by color, shape, or size. How would you sort your toys?' },
            ],
            quiz: {
                title: 'Sorting Quiz',
                questions: [
                    { id: 'q1', question: 'If you sort by color, which of these belong together?', type: 'multiple-choice', options: ['Red apple, red ball', 'Big ball, small ball', 'Square block, circle block'], correctAnswer: 'Red apple, red ball' },
                    { id: 'q2', question: 'You have a pile of socks. How can you sort them?', type: 'multiple-choice', options: ['By color', 'By size', 'Both are correct'], correctAnswer: 'Both are correct' },
                ],
            },
            multilingual: {
                es: {
                    title: '¡Vamos a Clasificar!',
                    content: [
                        { type: 'text', body: 'Clasificar es juntar cosas que son iguales. ¡Seamos súper clasificadores!' }
                    ],
                    quiz: {
                        title: 'Prueba de Clasificación',
                        questions: [
                            { id: 'q1', question: 'Si clasificas por color, ¿cuáles de estos van juntos?', options: ['Manzana roja, pelota roja', 'Pelota grande, pelota pequeña', 'Bloque cuadrado, bloque circular'] },
                            { id: 'q2', question: 'Tienes un montón de calcetines. ¿Cómo puedes clasificarlos?', options: ['Por color', 'Por tamaño', 'Ambas son correctas'] },
                        ],
                    },
                },
            },
        };
    case 'Money (pennies, nickels, dimes)':
        return {
            id: `pre-k-${subject.toLowerCase()}-money`,
            title: 'Coin Collectors',
            learningObjectives: [
                'Identify a penny, nickel, and dime by name.',
                'Recognize the physical characteristics of each coin (size, color).',
                'Sort pennies, nickels, and dimes.',
            ],
            content: [
                { type: 'text', body: 'Let\'s learn about money! We use coins to buy things. Today, we will learn about pennies, nickels, and dimes.' },
                { type: 'image', url: '/placeholders/coins.svg', alt: 'A penny, a nickel, and a dime.' },
                { type: 'text', body: 'A penny is brown. A nickel is bigger than a penny. A dime is the smallest.' },
            ],
            quiz: {
                title: 'Coin Quiz',
                questions: [
                    { id: 'q1', question: 'Which coin is brown?', type: 'multiple-choice', options: ['Penny', 'Nickel', 'Dime'], correctAnswer: 'Penny' },
                    { id: 'q2', question: 'Which coin is the smallest?', type: 'multiple-choice', options: ['Penny', 'Nickel', 'Dime'], correctAnswer: 'Dime' },
                ],
            },
            multilingual: {
                es: {
                    title: 'Coleccionistas de Monedas',
                    content: [
                        { type: 'text', body: '¡Vamos a aprender sobre el dinero! Usamos monedas para comprar cosas. Hoy aprenderemos sobre los centavos, las monedas de cinco centavos y las monedas de diez centavos.' }
                    ],
                    quiz: {
                        title: 'Prueba de Monedas',
                        questions: [
                            { id: 'q1', question: '¿Qué moneda es de color café?', options: ['Centavo', 'Moneda de cinco centavos', 'Moneda de diez centavos'] },
                            { id: 'q2', question: '¿Qué moneda es la más pequeña?', options: ['Centavo', 'Moneda de cinco centavos', 'Moneda de diez centavos'] },
                        ],
                    },
                },
            },
        };
    case 'Time (day, night)':
        return {
            id: `pre-k-${subject.toLowerCase()}-time-day-night`,
            title: 'Day and Night',
            learningObjectives: [
                'Identify common objects seen in the sky during the day (sun) and at night (moon, stars).',
                'Describe typical activities that happen during the day and at night.',
                'Understand that day and night follow a repeating pattern.',
            ],
            content: [
                { type: 'text', body: 'The sun shines during the day. We play and learn during the day.' },
                { type: 'image', url: '/placeholders/day-night.svg', alt: 'A sun and a moon with stars.' },
                { type: 'text', body: 'The moon and stars come out at night. We sleep at night.' },
            ],
            quiz: {
                title: 'Day and Night Quiz',
                questions: [
                    { id: 'q1', question: 'What do we see in the sky during the day?', type: 'multiple-choice', options: ['Sun', 'Moon', 'Stars'], correctAnswer: 'Sun' },
                    { id: 'q2', question: 'What do we usually do at night?', type: 'multiple-choice', options: ['Play outside', 'Go to school', 'Sleep'], correctAnswer: 'Sleep' },
                ],
            },
            multilingual: {
                es: {
                    title: 'Día y Noche',
                    content: [
                        { type: 'text', body: 'El sol brilla durante el día. Jugamos y aprendemos durante el día.' }
                    ],
                    quiz: {
                        title: 'Prueba de Día y Noche',
                        questions: [
                            { id: 'q1', question: '¿Qué vemos en el cielo durante el día?', options: ['Sol', 'Luna', 'Estrellas'] },
                            { id: 'q2', question: '¿Qué hacemos normalmente por la noche?', options: ['Jugar afuera', 'Ir a la escuela', 'Dormir'] },
                        ],
                    },
                },
            },
        };
    case 'Animals':
        return {
            id: `pre-k-${subject.toLowerCase()}-animals`,
            title: 'Our Animal Friends',
            learningObjectives: [
                'Identify at least three different animals by name.',
                'Imitate the sounds of at least two different animals.',
                'Describe where an animal lives (habitat).',
            ],
            content: [
                { type: 'text', body: 'Let\'s learn about animals! There are so many different kinds of animals all around the world.' },
                { type: 'image', url: '/placeholders/animals.svg', alt: 'A collection of cartoon animals like a lion, a monkey, and a fish.' },
                { type: 'text', body: 'A cow says "moo". A duck says "quack". What does a dog say?' },
            ],
            quiz: {
                title: 'Animal Quiz',
                questions: [
                    { id: 'q1', question: 'Which animal lives in the water?', type: 'multiple-choice', options: ['Fish', 'Bird', 'Cat'], correctAnswer: 'Fish' },
                    { id: 'q2', question: 'What sound does a pig make?', type: 'multiple-choice', options: ['Oink', 'Meow', 'Chirp'], correctAnswer: 'Oink' },
                ],
            },
            multilingual: {
                es: {
                    title: 'Nuestros Amigos los Animales',
                    content: [
                        { type: 'text', body: '¡Vamos a aprender sobre los animales! Hay tantos tipos diferentes de animales en todo el mundo.' }
                    ],
                    quiz: {
                        title: 'Prueba de Animales',
                        questions: [
                            { id: 'q1', question: '¿Qué animal vive en el agua?', options: ['Pez', 'Pájaro', 'Gato'] },
                            { id: 'q2', question: '¿Qué sonido hace un cerdo?', options: ['Oink', 'Miau', 'Pío'] },
                        ],
                    },
                },
            },
        };
    case 'Plants':
        return {
            id: `pre-k-${subject.toLowerCase()}-plants`,
            title: 'The World of Plants',
            learningObjectives: [
                'Identify the basic parts of a plant (roots, stem, leaves, flower).',
                'Understand that plants need sunlight and water to grow.',
                'Describe different characteristics of plants.',
            ],
            content: [
                { type: 'text', body: 'Let\'s learn about plants! Plants are all around us, from the big trees to the little flowers.' },
                { type: 'image', url: '/placeholders/plants.svg', alt: 'A simple drawing of a flower with roots, a stem, and leaves.' },
                { type: 'text', body: 'Plants need sunlight and water to grow big and strong. We eat plants too, like apples and carrots!' },
            ],
            quiz: {
                title: 'Plant Quiz',
                questions: [
                    { id: 'q1', question: 'What part of the plant is usually underground?', type: 'multiple-choice', options: ['Roots', 'Stem', 'Leaves'], correctAnswer: 'Roots' },
                    { id: 'q2', question: 'What do plants need to grow?', type: 'multiple-choice', options: ['Toys and candy', 'Sunlight and water', 'Milk and cookies'], correctAnswer: 'Sunlight and water' },
                ],
            },
            multilingual: {
                es: {
                    title: 'El Mundo de las Plantas',
                    content: [
                        { type: 'text', body: '¡Vamos a aprender sobre las plantas! Las plantas están a nuestro alrededor, desde los grandes árboles hasta las pequeñas flores.' }
                    ],
                    quiz: {
                        title: 'Prueba de Plantas',
                        questions: [
                            { id: 'q1', question: '¿Qué parte de la planta suele estar bajo tierra?', options: ['Raíces', 'Tallo', 'Hojas'] },
                            { id: 'q2', question: '¿Qué necesitan las plantas para crecer?', options: ['Juguetes y dulces', 'Luz solar y agua', 'Leche y galletas'] },
                        ],
                    },
                },
            },
        };
    case 'Weather':
        return {
            id: `pre-k-${subject.toLowerCase()}-weather`,
            title: 'Wonderful Weather',
            learningObjectives: [
                'Identify different types of weather (sunny, rainy, cloudy, windy).',
                'Describe what they see and feel during different weather conditions.',
                'Understand that weather changes.',
            ],
            content: [
                { type: 'text', body: 'Let\'s learn about the weather! The weather is what it\'s like outside. Is it sunny, rainy, or cloudy today?' },
                { type: 'image', url: '/placeholders/weather.svg', alt: 'A collection of weather icons: a sun, a cloud, a raindrop, and a gust of wind.' },
                { type: 'text', body: 'When it\'s sunny, we can play outside. When it\'s rainy, we need an umbrella.' },
            ],
            quiz: {
                title: 'Weather Quiz',
                questions: [
                    { id: 'q1', question: 'What do you need on a rainy day?', type: 'multiple-choice', options: ['An umbrella', 'Sunglasses', 'A kite'], correctAnswer: 'An umbrella' },
                    { id: 'q2', question: 'Which word describes a day with a lot of sun?', type: 'multiple-choice', options: ['Sunny', 'Cloudy', 'Windy'], correctAnswer: 'Sunny' },
                ],
            },
            multilingual: {
                es: {
                    title: 'El Clima Maravilloso',
                    content: [
                        { type: 'text', body: '¡Vamos a aprender sobre el clima! El clima es cómo está afuera. ¿Está soleado, lluvioso o nublado hoy?' }
                    ],
                    quiz: {
                        title: 'Prueba del Clima',
                        questions: [
                            { id: 'q1', question: '¿Qué necesitas en un día lluvioso?', options: ['Un paraguas', 'Gafas de sol', 'Una cometa'] },
                            { id: 'q2', question: '¿Qué palabra describe un día con mucho sol?', options: ['Soleado', 'Nublado', 'Ventoso'] },
                        ],
                    },
                },
            },
        };
    case 'The Five Senses':
        return {
            id: `pre-k-${subject.toLowerCase()}-the-five-senses`,
            title: 'My Amazing Senses',
            learningObjectives: [
                'Identify and name the five senses: sight, hearing, smell, taste, and touch.',
                'Understand that each sense helps us explore the world.',
                'Use descriptive language for sensory experiences.',
            ],
            content: [
                { type: 'text', body: 'We have five senses that help us learn about the world. Let\'s explore them!' },
                { type: 'image', url: '/placeholders/five-senses.svg', alt: 'Icons representing the five senses: an eye, an ear, a nose, a mouth, and a hand.' },
                { type: 'text', body: 'We use our eyes to see, our ears to hear, our nose to smell, our tongue to taste, and our hands to touch.' },
            ],
            quiz: {
                title: 'Senses Quiz',
                questions: [
                    { id: 'q1', question: 'Which sense do you use to see a rainbow?', type: 'multiple-choice', options: ['Sight', 'Hearing', 'Smell'], correctAnswer: 'Sight' },
                    { id: 'q2', question: 'Which sense do you use to feel a soft blanket?', type: 'multiple-choice', options: ['Touch', 'Taste', 'Hearing'], correctAnswer: 'Touch' },
                ],
            },
            multilingual: {
                es: {
                    title: 'Mis Sentidos Asombrosos',
                    content: [
                        { type: 'text', body: 'Tenemos cinco sentidos que nos ayudan a aprender sobre el mundo. ¡Vamos a explorarlos!' }
                    ],
                    quiz: {
                        title: 'Prueba de los Sentidos',
                        questions: [
                            { id: 'q1', question: '¿Qué sentido usas para ver un arcoíris?', options: ['Vista', 'Oído', 'Olfato'] },
                            { id: 'q2', question: '¿Qué sentido usas para sentir una manta suave?', options: ['Tacto', 'Gusto', 'Oído'] },
                        ],
                    },
                },
            },
        };
    case 'Seasons':
        return {
            id: `pre-k-${subject.toLowerCase()}-seasons`,
            title: 'The Four Seasons',
            learningObjectives: [
                'Identify the four seasons: Spring, Summer, Autumn (Fall), and Winter.',
                'Describe basic characteristics of each season (weather, clothing, activities).',
                'Understand that seasons change in a cycle.',
            ],
            content: [
                { type: 'text', body: 'There are four seasons in a year: spring, summer, autumn, and winter. Each season is special!' },
                { type: 'image', url: '/placeholders/seasons.svg', alt: 'Four icons representing the four seasons: a flower for spring, a sun for summer, a leaf for autumn, and a snowflake for winter.' },
                { type: 'text', body: 'In the spring, flowers bloom. In the summer, it\'s hot. In the autumn, leaves fall. In the winter, it\'s cold.' },
            ],
            quiz: {
                title: 'Seasons Quiz',
                questions: [
                    { id: 'q1', question: 'In which season do leaves fall from the trees?', type: 'multiple-choice', options: ['Spring', 'Summer', 'Autumn'], correctAnswer: 'Autumn' },
                    { id: 'q2', question: 'What season is hot and sunny?', type: 'multiple-choice', options: ['Winter', 'Summer', 'Spring'], correctAnswer: 'Summer' },
                ],
            },
            multilingual: {
                es: {
                    title: 'Las Cuatro Estaciones',
                    content: [
                        { type: 'text', body: 'Hay cuatro estaciones en un año: primavera, verano, otoño e invierno. ¡Cada estación es especial!' }
                    ],
                    quiz: {
                        title: 'Prueba de las Estaciones',
                        questions: [
                            { id: 'q1', question: '¿En qué estación se caen las hojas de los árboles?', options: ['Primavera', 'Verano', 'Otoño'] },
                            { id: 'q2', question: '¿Qué estación es calurosa y soleada?', options: ['Invierno', 'Verano', 'Primavera'] },
                        ],
                    },
                },
            },
        };
    case 'Living and Non-living Things':
        return {
            id: `pre-k-${subject.toLowerCase()}-living-and-non-living-things`,
            title: 'What\'s Alive?',
            learningObjectives: [
                'Identify characteristics of living things (needs food, water, air, grows).',
                'Distinguish between living and non-living things.',
                'Sort objects into \'living\' and \'non-living\' categories.',
            ],
            content: [
                { type: 'text', body: 'Some things are alive, and some are not. Living things need food, water, and air to grow.' },
                { type: 'image', url: '/placeholders/living-nonliving.svg', alt: 'A flower (living) and a rock (non-living).' },
                { type: 'text', body: 'A car is non-living. It does not need food or water. A tree is living. It needs sunlight and water to grow.' },
            ],
            quiz: {
                title: 'Living or Not?',
                questions: [
                    { id: 'q1', question: 'Which of these is a living thing?', type: 'multiple-choice', options: ['A book', 'A flower', 'A toy'], correctAnswer: 'A flower' },
                    { id: 'q2', question: 'Which of these is a non-living thing?', type: 'multiple-choice', options: ['A dog', 'A rock', 'A person'], correctAnswer: 'A rock' },
                ],
            },
            multilingual: {
                es: {
                    title: '¿Qué está vivo?',
                    content: [
                        { type: 'text', body: 'Algunas cosas están vivas y otras no. Los seres vivos necesitan comida, agua y aire para crecer.' }
                    ],
                    quiz: {
                        title: '¿Vivo o no?',
                        questions: [
                            { id: 'q1', question: '¿Cuál de estos es un ser vivo?', options: ['Un libro', 'Una flor', 'Un juguete'] },
                            { id: 'q2', question: '¿Cuál de estos es un ser no vivo?', options: ['Un perro', 'Una roca', 'Una persona'] },
                        ],
                    },
                },
            },
        };
    case 'Our Bodies':
        return {
            id: `pre-k-${subject.toLowerCase()}-our-bodies`,
            title: 'My Amazing Body',
            learningObjectives: [
                'Identify and name major external body parts (head, shoulders, knees, toes).',
                'Understand that our bodies can do many things, like run, jump, and play.',
                'Learn the importance of keeping our bodies healthy (eating good food, washing hands).',
            ],
            content: [
                { type: 'text', body: 'Our bodies are amazing! We can run, jump, and play. Let\'s learn about the parts of our body.' },
                { type: 'image', url: '/placeholders/our-bodies.svg', alt: 'A simple drawing of a child with labels for head, arms, and legs.' },
                { type: 'text', body: 'We have a head, shoulders, knees, and toes. Can you point to your nose?' },
            ],
            quiz: {
                title: 'Body Part Quiz',
                questions: [
                    { id: 'q1', question: 'What part of your body do you use to see?', type: 'multiple-choice', options: ['Eyes', 'Ears', 'Nose'], correctAnswer: 'Eyes' },
                    { id: 'q2', question: 'What should we do to keep our bodies healthy?', type: 'multiple-choice', options: ['Eat candy all day', 'Never wash our hands', 'Eat fruits and vegetables'], correctAnswer: 'Eat fruits and vegetables' },
                ],
            },
            multilingual: {
                es: {
                    title: 'Mi Cuerpo Asombroso',
                    content: [
                        { type: 'text', body: '¡Nuestros cuerpos son asombrosos! Podemos correr, saltar y jugar. Vamos a aprender sobre las partes de nuestro cuerpo.' }
                    ],
                    quiz: {
                        title: 'Prueba de Partes del Cuerpo',
                        questions: [
                            { id: 'q1', question: '¿Qué parte de tu cuerpo usas para ver?', options: ['Ojos', 'Orejas', 'Nariz'] },
                            { id: 'q2', question: '¿Qué debemos hacer para mantener nuestro cuerpo sano?', options: ['Comer dulces todo el día', 'Nunca lavarnos las manos', 'Comer frutas y verduras'] },
                        ],
                    },
                },
            },
        };
    case 'Space (Sun, Moon, Stars)':
        return {
            id: `pre-k-${subject.toLowerCase()}-space`,
            title: 'A Trip to Space',
            learningObjectives: [
                'Identify the sun, moon, and stars.',
                'Describe when we can see the sun (day) and the moon and stars (night).',
                'Understand that the sun is a star and gives us light and heat.',
            ],
            content: [
                { type: 'text', body: 'Let\'s go on an adventure to space! We will learn about the sun, the moon, and the stars.' },
                { type: 'image', url: '/placeholders/space.svg', alt: 'A simple drawing of the sun, moon, and stars in space.' },
                { type: 'text', body: 'The sun is a big star that we see during the day. At night, we see the moon and many other stars.' },
            ],
            quiz: {
                title: 'Space Quiz',
                questions: [
                    { id: 'q1', question: 'What do we see in the sky at night?', type: 'multiple-choice', options: ['The moon and stars', 'The sun', 'A big cloud'], correctAnswer: 'The moon and stars' },
                    { id: 'q2', question: 'What is the sun?', type: 'multiple-choice', options: ['A planet', 'A star', 'A moon'], correctAnswer: 'A star' },
                ],
            },
            multilingual: {
                es: {
                    title: 'Un Viaje al Espacio',
                    content: [
                        { type: 'text', body: '¡Vamos a una aventura al espacio! Aprenderemos sobre el sol, la luna y las estrellas.' }
                    ],
                    quiz: {
                        title: 'Prueba del Espacio',
                        questions: [
                            { id: 'q1', question: '¿Qué vemos en el cielo por la noche?', options: ['La luna y las estrellas', 'El sol', 'Una gran nube'] },
                            { id: 'q2', question: '¿Qué es el sol?', options: ['Un planeta', 'Una estrella', 'Una luna'] },
                        ],
                    },
                },
            },
        };
    case 'Water':
        return {
            id: `pre-k-${subject.toLowerCase()}-water`,
            title: 'Wonderful Water',
            learningObjectives: [
                'Identify water as a liquid.',
                'Describe some properties of water (clear, flows).',
                'Understand that water is essential for living things.',
            ],
            content: [
                { type: 'text', body: 'Let\'s learn about water! Water is a liquid that we can drink, and it\'s all around us in rivers, lakes, and oceans.' },
                { type: 'image', url: '/placeholders/water.svg', alt: 'A simple drawing of a glass of water and a raindrop.' },
                { type: 'text', body: 'All living things need water to survive, including people, animals, and plants.' },
            ],
            quiz: {
                title: 'Water Quiz',
                questions: [
                    { id: 'q1', question: 'What is something that needs water to live?', type: 'multiple-choice', options: ['A flower', 'A rock', 'A toy car'], correctAnswer: 'A flower' },
                    { id: 'q2', question: 'When you pour water, it...', type: 'multiple-choice', options: ['Stays still', 'Flows', 'Disappears'], correctAnswer: 'Flows' },
                ],
            },
            multilingual: {
                es: {
                    title: 'El Agua Maravillosa',
                    content: [
                        { type: 'text', body: '¡Vamos a aprender sobre el agua! El agua es un líquido que podemos beber, y está a nuestro alrededor en ríos, lagos y océanos.' }
                    ],
                    quiz: {
                        title: 'Prueba del Agua',
                        questions: [
                            { id: 'q1', question: '¿Qué es algo que necesita agua para vivir?', options: ['Una flor', 'Una roca', 'Un coche de juguete'] },
                            { id: 'q2', question: 'Cuando viertes agua, ...', options: ['Se queda quieta', 'Fluye', 'Desaparece'] },
                        ],
                    },
                },
            },
        };
    case 'Dinosaurs':
        return {
            id: `pre-k-${subject.toLowerCase()}-dinosaurs`,
            title: 'Dinosaur Discovery',
            learningObjectives: [
                'Identify at least two different types of dinosaurs (e.g., T-Rex, Triceratops).',
                'Understand that dinosaurs lived a long time ago and are now extinct.',
                'Learn what a fossil is.',
            ],
            content: [
                { type: 'text', body: 'Let\'s travel back in time to learn about dinosaurs! Dinosaurs were giant reptiles that lived a long, long time ago.' },
                { type: 'image', url: '/placeholders/dinosaurs.svg', alt: 'A friendly T-Rex and a Triceratops.' },
                { type: 'text', body: 'Some dinosaurs were plant-eaters, and some were meat-eaters. We learn about them by studying their fossils.' },
            ],
            quiz: {
                title: 'Dinosaur Quiz',
                questions: [
                    { id: 'q1', question: 'Which of these is a famous dinosaur?', type: 'multiple-choice', options: ['Tyrannosaurus Rex', 'Lion', 'Elephant'], correctAnswer: 'Tyrannosaurus Rex' },
                    { id: 'q2', question: 'What do we call the preserved remains of dinosaurs?', type: 'multiple-choice', options: ['Rocks', 'Fossils', 'Toys'], correctAnswer: 'Fossils' },
                ],
            },
            multilingual: {
                es: {
                    title: 'Descubrimiento de Dinosaurios',
                    content: [
                        { type: 'text', body: '¡Viajemos en el tiempo para aprender sobre los dinosaurios! Los dinosaurios eran reptiles gigantes que vivieron hace mucho, mucho tiempo.' }
                    ],
                    quiz: {
                        title: 'Prueba de Dinosaurios',
                        questions: [
                            { id: 'q1', question: '¿Cuál de estos es un dinosaurio famoso?', options: ['Tiranosaurio Rex', 'León', 'Elefante'] },
                            { id: 'q2', question: '¿Cómo llamamos a los restos preservados de los dinosaurios?', options: ['Rocas', 'Fósiles', 'Juguetes'] },
                        ],
                    },
                },
            },
        };
    case 'Figurative Language':
        return {
            id: `5th-grade-${subject.toLowerCase()}-figurative-language`,
            title: 'Unlocking Figurative Language',
            learningObjectives: [
                'Define and identify similes, metaphors, and personification.',
                'Interpret the meaning of figurative language in context.',
                'Use figurative language in their own writing.',
            ],
            content: [
                { type: 'text', body: 'Figurative language makes writing more interesting and vivid. It uses words in a non-literal way to create a special effect or meaning.' },
                { type: 'image', url: '/placeholders/figurative-language.svg', alt: 'An icon representing different types of figurative language.' },
                { type: 'text', body: 'A simile compares two things using \'like\' or \'as\' (e.g., \'as brave as a lion\'). A metaphor directly compares two things (e.g., \'The world is a stage\'). Personification gives human qualities to objects or animals (e.g., \'The wind whispered through the trees\').' },
            ],
            quiz: {
                title: 'Figurative Language Quiz',
                questions: [
                    { id: 'q1', question: 'Which of the following is a simile?', type: 'multiple-choice', options: ['The car was a furnace.', 'He is as strong as an ox.', 'The sun smiled down on us.'], correctAnswer: 'He is as strong as an ox.' },
                    { id: 'q2', question: 'What is the meaning of the metaphor \'The classroom was a zoo\'?', type: 'multiple-choice', options: ['The classroom was full of animals.', 'The classroom was very chaotic and noisy.', 'The classroom was clean and organized.'], correctAnswer: 'The classroom was very chaotic and noisy.' },
                ],
            },
            multilingual: {
                es: {
                    title: 'Desbloqueando el Lenguaje Figurado',
                    content: [
                        { type: 'text', body: 'El lenguaje figurado hace que la escritura sea más interesante y vívida. Usa palabras de una manera no literal para crear un efecto o significado especial.' }
                    ],
                    quiz: {
                        title: 'Prueba de Lenguaje Figurado',
                        questions: [
                            { id: 'q1', question: '¿Cuál de los siguientes es un símil?', options: ['El coche era un horno.', 'Es tan fuerte como un buey.', 'El sol nos sonrió.'] },
                            { id: 'q2', question: '¿Cuál es el significado de la metáfora \'El aula era un zoológico\'?', options: ['El aula estaba llena de animales.', 'El aula era muy caótica y ruidosa.', 'El aula estaba limpia y organizada.'] },
                        ],
                    },
                },
            },
        };
    case 'Reading Comprehension: Main Idea and Supporting Details':
        return {
            id: `5th-grade-${subject.toLowerCase()}-main-idea`,
            title: 'Finding the Main Idea',
            learningObjectives: [
                'Determine the main idea of a text.',
                'Explain how the main idea is supported by key details.',
                'Summarize a text by identifying the main idea and key details.',
            ],
            content: [
                { type: 'text', body: 'The main idea is the most important point the author is trying to make. Supporting details are facts and examples that explain the main idea.' },
                { type: 'image', url: '/placeholders/main-idea.svg', alt: 'A diagram showing a main idea with several supporting details branching off.' },
                { type: 'text', body: 'To find the main idea, look at the title, headings, and the first and last sentences of a paragraph. Ask yourself, "What is this text mostly about?"' },
            ],
            quiz: {
                title: 'Main Idea Quiz',
                questions: [
                    { id: 'q1', question: 'What is the main idea of a text?', type: 'multiple-choice', options: ['A small detail', 'The most important point', 'The title of the text'], correctAnswer: 'The most important point' },
                    { id: 'q2', question: 'What is the purpose of supporting details?', type: 'multiple-choice', options: ['To confuse the reader', 'To explain the main idea', 'To introduce a new topic'], correctAnswer: 'To explain the main idea' },
                ],
            },
            multilingual: {
                es: {
                    title: 'Encontrando la Idea Principal',
                    content: [
                        { type: 'text', body: 'La idea principal es el punto más importante que el autor intenta comunicar. Los detalles de apoyo son hechos y ejemplos que explican la idea principal.' }
                    ],
                    quiz: {
                        title: 'Prueba de Idea Principal',
                        questions: [
                            { id: 'q1', question: '¿Cuál es la idea principal de un texto?', options: ['Un pequeño detalle', 'El punto más importante', 'El título del texto'] },
                            { id: 'q2', question: '¿Cuál es el propósito de los detalles de apoyo?', options: ['Confundir al lector', 'Explicar la idea principal', 'Introducir un nuevo tema'] },
                        ],
                    },
                },
            },
        };
    case 'Writing: Narrative Writing':
        return {
            id: `5th-grade-${subject.toLowerCase()}-narrative-writing`,
            title: 'Telling Your Story: Narrative Writing',
            learningObjectives: [
                'Identify the key elements of a narrative (characters, setting, plot, conflict, resolution).',
                'Brainstorm and plan a personal narrative.',
                'Write a narrative with a clear beginning, middle, and end.',
            ],
            content: [
                { type: 'text', body: 'Narrative writing is all about telling a story. It can be a real story from your life or a fictional story from your imagination.' },
                { type: 'image', url: '/placeholders/narrative-writing.svg', alt: 'An icon representing a story with a beginning, middle, and end.' },
                { type: 'text', body: 'A good narrative has interesting characters, a vivid setting, and a clear plot with a beginning, middle, and end. It also has a conflict, or problem, that the characters must face and resolve.' },
            ],
            quiz: {
                title: 'Narrative Writing Quiz',
                questions: [
                    { id: 'q1', question: 'What is the plot of a story?', type: 'multiple-choice', options: ['The characters in the story', 'The sequence of events', 'The time and place of the story'], correctAnswer: 'The sequence of events' },
                    { id: 'q2', question: 'What is the conflict in a narrative?', type: 'multiple-choice', options: ['The problem the characters face', 'The end of the story', 'The lesson of the story'], correctAnswer: 'The problem the characters face' },
                ],
            },
            multilingual: {
                es: {
                    title: 'Contando tu Historia: Escritura Narrativa',
                    content: [
                        { type: 'text', body: 'La escritura narrativa se trata de contar una historia. Puede ser una historia real de tu vida o una historia de ficción de tu imaginación.' }
                    ],
                    quiz: {
                        title: 'Prueba de Escritura Narrativa',
                        questions: [
                            { id: 'q1', question: '¿Qué es la trama de una historia?', options: ['Los personajes de la historia', 'La secuencia de eventos', 'El tiempo y el lugar de la historia'] },
                            { id: 'q2', question: '¿Qué es el conflicto en una narrativa?', options: ['El problema que enfrentan los personajes', 'El final de la historia', 'La lección de la historia'] },
                        ],
                    },
                },
            },
        };
    case 'Grammar: Parts of Speech (Nouns, Verbs, Adjectives, Adverbs)':
        return {
            id: `5th-grade-${subject.toLowerCase()}-parts-of-speech`,
            title: 'The Building Blocks of Language: Parts of Speech',
            learningObjectives: [
                'Define and identify nouns, verbs, adjectives, and adverbs.',
                'Understand the function of each part of speech in a sentence.',
                'Use different parts of speech to build and enhance sentences.',
            ],
            content: [
                { type: 'text', body: 'Every word in a sentence has a job to do. These jobs are called "parts of speech". Today we will learn about four of them: nouns, verbs, adjectives, and adverbs.' },
                { type: 'image', url: '/placeholders/parts-of-speech.svg', alt: 'Icons representing a noun (person), verb (running), adjective (happy face), and adverb (fast forward).' },
                { type: 'text', body: 'A noun is a person, place, or thing. A verb is an action word. An adjective describes a noun. An adverb describes a verb.' },
            ],
            quiz: {
                title: 'Parts of Speech Quiz',
                questions: [
                    { id: 'q1', question: 'Which word in the following sentence is a noun: "The happy dog ran quickly."?', type: 'multiple-choice', options: ['happy', 'dog', 'ran'], correctAnswer: 'dog' },
                    { id: 'q2', question: 'Which word in the following sentence is an adjective: "The big, red ball bounced."?', type: 'multiple-choice', options: ['ball', 'bounced', 'red'], correctAnswer: 'red' },
                ],
            },
            multilingual: {
                es: {
                    title: 'Los Bloques de Construcción del Lenguaje: Partes de la Oración',
                    content: [
                        { type: 'text', body: 'Cada palabra en una oración tiene un trabajo que hacer. Estos trabajos se llaman "partes de la oración". Hoy aprenderemos sobre cuatro de ellos: sustantivos, verbos, adjetivos y adverbios.' }
                    ],
                    quiz: {
                        title: 'Prueba de Partes de la Oración',
                        questions: [
                            { id: 'q1', question: '¿Qué palabra en la siguiente oración es un sustantivo: "El perro feliz corrió rápidamente."?', options: ['feliz', 'perro', 'corrió'] },
                            { id: 'q2', question: '¿Qué palabra en la siguiente oración es un adjetivo: "La pelota grande y roja rebotó."?', options: ['pelota', 'rebotó', 'roja'] },
                        ],
                    },
                },
            },
        };
    case 'Vocabulary: Context Clues':
        return {
            id: `5th-grade-${subject.toLowerCase()}-context-clues`,
            title: 'Becoming a Word Detective: Using Context Clues',
            learningObjectives: [
                'Define context clues and explain their importance.',
                'Identify different types of context clues (definition, synonym, antonym, example, inference).',
                'Use context clues to determine the meaning of unfamiliar words.',
            ],
            content: [
                { type: 'text', body: 'Have you ever come across a word you don\'t know while reading? You can be a word detective and use "context clues" to figure it out! Context clues are hints the author gives you in the surrounding text.' },
                { type: 'image', url: '/placeholders/context-clues.svg', alt: 'A magnifying glass over a book, highlighting a word.' },
                { type: 'text', body: 'There are different types of context clues. Sometimes the author gives a definition, a synonym (a word that means the same), an antonym (a word that means the opposite), an example, or you have to make an inference based on the information given.' },
            ],
            quiz: {
                title: 'Context Clues Quiz',
                questions: [
                    { id: 'q1', question: 'In the sentence, "The vibrant, or colorful, bird flew by," what type of context clue helps you understand the word "vibrant"?', type: 'multiple-choice', options: ['Synonym', 'Antonym', 'Example'], correctAnswer: 'Synonym' },
                    { id: 'q2', question: 'What are context clues?', type: 'multiple-choice', options: ['Words that are hard to read', 'Hints in the text that help you understand a word', 'Pictures in a book'], correctAnswer: 'Hints in the text that help you understand a word' },
                ],
            },
            multilingual: {
                es: {
                    title: 'Conviértete en un Detective de Palabras: Usando Pistas de Contexto',
                    content: [
                        { type: 'text', body: '¿Alguna vez te has encontrado con una palabra que no conoces mientras lees? ¡Puedes ser un detective de palabras y usar "pistas de contexto" para resolverlo! Las pistas de contexto son pistas que el autor te da en el texto circundante.' }
                    ],
                    quiz: {
                        title: 'Prueba de Pistas de Contexto',
                        questions: [
                            { id: 'q1', question: 'En la oración, "El pájaro vibrante, o colorido, pasó volando", ¿qué tipo de pista de contexto te ayuda a entender la palabra "vibrante"?', options: ['Sinónimo', 'Antónimo', 'Ejemplo'] },
                            { id: 'q2', question: '¿Qué son las pistas de contexto?', options: ['Palabras difíciles de leer', 'Pistas en el texto que te ayudan a entender una palabra', 'Imágenes en un libro'] },
                        ],
                    },
                },
            },
        };
    case 'Poetry: Understanding Elements of Poetry (Rhyme, Rhythm, Stanza)':
        return {
            id: `5th-grade-${subject.toLowerCase()}-elements-of-poetry`,
            title: 'The Magic of Words: Exploring Poetry',
            learningObjectives: [
                'Identify and define key elements of poetry: rhyme, rhythm, and stanza.',
                'Recognize figurative language in poems (similes, metaphors).',
                'Analyze how the elements of poetry work together to create meaning and feeling.',
            ],
            content: [
                { type: 'text', body: 'Poetry is a special kind of writing that uses the power of words to make us feel and think. Poets use tools like rhyme, rhythm, and stanzas to create their magic.' },
                { type: 'image', url: '/placeholders/poetry-elements.svg', alt: 'Icons representing rhyme (two rhyming words), rhythm (musical notes), and a stanza (a group of lines).' },
                { type: 'text', body: 'Rhyme is when words have the same ending sound. Rhythm is the beat or pattern of a poem. A stanza is a group of lines in a poem, like a paragraph in a story.' },
            ],
            quiz: {
                title: 'Poetry Elements Quiz',
                questions: [
                    { id: 'q1', question: 'What is a stanza in a poem?', type: 'multiple-choice', options: ['A single line of a poem', 'A group of lines in a poem', 'The title of a poem'], correctAnswer: 'A group of lines in a poem' },
                    { id: 'q2', question: 'Which pair of words rhymes?', type: 'multiple-choice', options: ['cat, dog', 'sun, fun', 'big, small'], correctAnswer: 'sun, fun' },
                ],
            },
            multilingual: {
                es: {
                    title: 'La Magia de las Palabras: Explorando la Poesía',
                    content: [
                        { type: 'text', body: 'La poesía es un tipo especial de escritura que usa el poder de las palabras para hacernos sentir y pensar. Los poetas usan herramientas como la rima, el ritmo y las estrofas para crear su magia.' }
                    ],
                    quiz: {
                        title: 'Prueba de Elementos de Poesía',
                        questions: [
                            { id: 'q1', question: '¿Qué es una estrofa en un poema?', options: ['Una sola línea de un poema', 'Un grupo de líneas en un poema', 'El título de un poema'] },
                            { id: 'q2', question: '¿Qué par de palabras riman?', options: ['gato, perro', 'sol, diversión', 'grande, pequeño'] },
                        ],
                    },
                },
            },
        };
    case 'Writing: Persuasive Writing':
        return {
            id: `5th-grade-${subject.toLowerCase()}-persuasive-writing`,
            title: 'Convince Me! The Art of Persuasive Writing',
            learningObjectives: [
                'Define persuasive writing and understand its purpose.',
                'Differentiate between facts and opinions.',
                'Structure a persuasive argument with an introduction, reasons, and a conclusion.',
            ],
            content: [
                { type: 'text', body: 'Persuasive writing is used to convince, or persuade, a reader to believe an idea or to take a specific action. It\'s all about making a strong argument!' },
                { type: 'image', url: '/placeholders/persuasive-writing.svg', alt: 'An icon of a person giving a speech with a speech bubble.' },
                { type: 'text', body: 'A good persuasive piece includes a clear opinion, strong reasons to support that opinion, and facts or evidence to back up those reasons. A popular structure to remember this is OREO: Opinion, Reason, Evidence, Opinion (restated).' },
            ],
            quiz: {
                title: 'Persuasive Writing Quiz',
                questions: [
                    { id: 'q1', question: 'What is the main purpose of persuasive writing?', type: 'multiple-choice', options: ['To entertain the reader with a story', 'To inform the reader about a topic', 'To convince the reader of an opinion'], correctAnswer: 'To convince the reader of an opinion' },
                    { id: 'q2', question: 'Which of the following is a FACT, not an opinion?', type: 'multiple-choice', options: ['Pizza is the best food.', 'The Earth revolves around the Sun.', 'Recess should be longer.'], correctAnswer: 'The Earth revolves around the Sun.' },
                ],
            },
            multilingual: {
                es: {
                    title: '¡Convénceme! El Arte de la Escritura Persuasiva',
                    content: [
                        { type: 'text', body: 'La escritura persuasiva se usa para convencer, o persuadir, a un lector para que crea una idea o tome una acción específica. ¡Se trata de hacer un argumento fuerte!' }
                    ],
                    quiz: {
                        title: 'Prueba de Escritura Persuasiva',
                        questions: [
                            { id: 'q1', question: '¿Cuál es el propósito principal de la escritura persuasiva?', options: ['Entretener al lector con una historia', 'Informar al lector sobre un tema', 'Convencer al lector de una opinión'] },
                            { id: 'q2', question: '¿Cuál de los siguientes es un HECHO, no una opinión?', options: ['La pizza es la mejor comida.', 'La Tierra gira alrededor del Sol.', 'El recreo debería ser más largo.'] },
                        ],
                    },
                },
            },
        };
    case 'Grammar: Punctuation and Capitalization':
        return {
            id: `5th-grade-${subject.toLowerCase()}-punctuation-and-capitalization`,
            title: 'The Rules of Writing: Punctuation and Capitalization',
            learningObjectives: [
                'Identify and use correct end-of-sentence punctuation (period, question mark, exclamation point).',
                'Use commas correctly in a series, in dates, and in addresses.',
                'Apply capitalization rules for the beginning of sentences, proper nouns, and titles.',
            ],
            content: [
                { type: 'text', body: 'Punctuation and capitalization are like traffic signals for writing. They tell the reader when to pause, when to stop, and what is important.' },
                { type: 'image', url: '/placeholders/punctuation-capitalization.svg', alt: 'An icon showing a period, question mark, exclamation point, and a capital letter "A".' },
                { type: 'text', body: 'We use a period (.) at the end of a statement, a question mark (?) at the end of a question, and an exclamation point (!) to show strong feeling. We use capital letters for the first word of a sentence and for proper nouns like names and places.' },
            ],
            quiz: {
                title: 'Punctuation and Capitalization Quiz',
                questions: [
                    { id: 'q1', question: 'Which sentence is punctuated correctly?', type: 'multiple-choice', options: ['Where are you going.', 'Where are you going?', 'Where are you going!'], correctAnswer: 'Where are you going?' },
                    { id: 'q2', question: 'Which word in the following sentence should be capitalized: "my friend, sarah, is coming over."?', type: 'multiple-choice', options: ['my', 'friend', 'sarah'], correctAnswer: 'sarah' },
                ],
            },
            multilingual: {
                es: {
                    title: 'Las Reglas de la Escritura: Puntuación y Mayúsculas',
                    content: [
                        { type: 'text', body: 'La puntuación y las mayúsculas son como las señales de tráfico para la escritura. Le dicen al lector cuándo hacer una pausa, cuándo detenerse y qué es importante.' }
                    ],
                    quiz: {
                        title: 'Prueba de Puntuación y Mayúsculas',
                        questions: [
                            { id: 'q1', question: '¿Qué oración está puntuada correctly?', options: ['¿A dónde vas.', '¿A dónde vas?', '¡A dónde vas!'] },
                            { id: 'q2', question: '¿Qué palabra en la siguiente oración debería ir en mayúscula: "mi amiga, sarah, viene."?', options: ['mi', 'amiga', 'sarah'] },
                        ],
                    },
                },
            },
        };
    case 'Reading Comprehension: Cause and Effect':
        return {
            id: `5th-grade-${subject.toLowerCase()}-cause-and-effect`,
            title: 'Why Did It Happen? Understanding Cause and Effect',
            learningObjectives: [
                'Define cause and effect.',
                'Identify cause and effect relationships in a text.',
                'Use signal words to identify cause and effect relationships.',
            ],
            content: [
                { type: 'text', body: 'In stories and in real life, one event often leads to another. The "cause" is why something happens, and the "effect" is what happens as a result.' },
                { type: 'image', url: '/placeholders/cause-and-effect.svg', alt: 'A diagram showing a cause leading to an effect with an arrow.' },
                { type: 'text', body: 'Look for signal words like "because," "since," "so," and "as a result" to help you find cause and effect relationships. For example: "The plant died (effect) because it did not get enough water (cause)."' },
            ],
            quiz: {
                title: 'Cause and Effect Quiz',
                questions: [
                    { id: 'q1', question: 'In the sentence, "I studied for the test, so I got a good grade," what is the cause?', type: 'multiple-choice', options: ['I got a good grade.', 'I studied for the test.', 'The test was easy.'], correctAnswer: 'I studied for the test.' },
                    { id: 'q2', question: 'Which of the following is a signal word for an effect?', type: 'multiple-choice', options: ['because', 'since', 'as a result'], correctAnswer: 'as a result' },
                ],
            },
            multilingual: {
                es: {
                    title: '¿Por qué sucedió? Entendiendo Causa y Efecto',
                    content: [
                        { type: 'text', body: 'En las historias y en la vida real, un evento a menudo conduce a otro. La "causa" es por qué sucede algo, y el "efecto" es lo que sucede como resultado.' }
                    ],
                    quiz: {
                        title: 'Prueba de Causa y Efecto',
                        questions: [
                            { id: 'q1', question: 'En la oración, "Estudié para el examen, así que saqué una buena nota", ¿cuál es la causa?', options: ['Saqué una buena nota.', 'Estudié para el examen.', 'El examen fue fácil.'] },
                            { id: 'q2', question: '¿Cuál de las siguientes es una palabra de señal para un efecto?', options: ['porque', 'ya que', 'como resultado'] },
                        ],
                    },
                },
            },
        };
    case 'Writing: Expository Writing':
        return {
            id: `5th-grade-${subject.toLowerCase()}-expository-writing`,
            title: 'Explain It! The Power of Expository Writing',
            learningObjectives: [
                'Define expository writing and its purpose.',
                'Differentiate between expository writing and other types of writing.',
                'Structure an expository essay with an introduction, body paragraphs, and a conclusion.',
            ],
            content: [
                { type: 'text', body: 'Expository writing is all about explaining or informing. Its main purpose is to present information in a clear and organized way.' },
                { type: 'image', url: '/placeholders/expository-writing.svg', alt: 'An icon representing an informational text with a title and paragraphs.' },
                { type: 'text', body: 'Unlike narrative writing, which tells a story, or persuasive writing, which tries to convince you of something, expository writing presents facts and evidence to teach the reader about a topic.' },
            ],
            quiz: {
                title: 'Expository Writing Quiz',
                questions: [
                    { id: 'q1', question: 'What is the main purpose of expository writing?', type: 'multiple-choice', options: ['To tell a story', 'To explain or inform', 'To persuade the reader'], correctAnswer: 'To explain or inform' },
                    { id: 'q2', question: 'Which of these is an example of expository writing?', type: 'multiple-choice', options: ['A science textbook', 'A fictional story', 'A persuasive essay'], correctAnswer: 'A science textbook' },
                ],
            },
            multilingual: {
                es: {
                    title: '¡Explícalo! El Poder de la Escritura Expositiva',
                    content: [
                        { type: 'text', body: 'La escritura expositiva se trata de explicar o informar. Su propósito principal es presentar información de una manera clara y organizada.' }
                    ],
                    quiz: {
                        title: 'Prueba de Escritura Expositiva',
                        questions: [
                            { id: 'q1', question: '¿Cuál es el propósito principal de la escritura expositiva?', options: ['Contar una historia', 'Explicar o informar', 'Persuadir al lector'] },
                            { id: 'q2', question: '¿Cuál de estos es un ejemplo de escritura expositiva?', options: ['Un libro de texto de ciencias', 'Una historia de ficción', 'Un ensayo persuasivo'] },
                        ],
                    },
                },
            },
        };
    case 'Order of Operations (PEMDAS)':
        return {
            id: `5th-grade-basic-math-order-of-operations`,
            title: 'PEMDAS: The Secret Code of Math',
            learningObjectives: [
                'Understand and apply the order of operations (PEMDAS) to solve numerical expressions.',
                'Correctly evaluate expressions containing parentheses, multiplication, division, addition, and subtraction.',
                'Recognize that a consistent order of operations is necessary for solving problems.',
            ],
            content: [
                { type: 'text', body: 'When you have a math problem with more than one operation, you need to solve it in the correct order. We use PEMDAS to remember the order: Parentheses, Exponents, Multiplication and Division (from left to right), and Addition and Subtraction (from left to right).' },
                { type: 'image', url: '/placeholders/pemdas.svg', alt: 'An icon showing the PEMDAS acronym with corresponding math symbols.' },
                { type: 'text', body: 'For example, in the problem 10 - 2 * 3, we do the multiplication first (2 * 3 = 6), and then the subtraction (10 - 6 = 4).' },
            ],
            quiz: {
                title: 'Order of Operations Quiz',
                questions: [
                    { id: 'q1', question: 'What is the first step in solving the expression (8 + 2) * 5?', type: 'multiple-choice', options: ['8 + 2', '2 * 5', '8 * 5'], correctAnswer: '8 + 2' },
                    { id: 'q2', question: 'What is the value of the expression 12 / 4 + 2?', type: 'multiple-choice', options: ['3', '5', '2'], correctAnswer: '5' },
                ],
            },
            multilingual: {
                es: {
                    title: 'PEMDAS: El Código Secreto de las Matemáticas',
                    content: [
                        { type: 'text', body: 'Cuando tienes un problema de matemáticas con más de una operación, necesitas resolverlo en el orden correcto. Usamos PEMDAS para recordar el orden: Paréntesis, Exponentes, Multiplicación y División (de izquierda a derecha), y Suma y Resta (de izquierda a derecha).' }
                    ],
                    quiz: {
                        title: 'Prueba de Orden de Operaciones',
                        questions: [
                            { id: 'q1', question: '¿Cuál es el primer paso para resolver la expresión (8 + 2) * 5?', options: ['8 + 2', '2 * 5', '8 * 5'] },
                            { id: 'q2', question: '¿Cuál es el valor de la expresión 12 / 4 + 2?', options: ['3', '5', '2'] },
                        ],
                    },
                },
            },
        };
    case 'Place Value and Decimals':
        return {
            id: `5th-grade-basic-math-place-value-and-decimals`,
            title: 'Diving into Decimals: Understanding Place Value',
            learningObjectives: [
                'Read, write, and compare decimals to thousandths.',
                'Understand the relationship between decimal places (10 times and 1/10).',
                'Round decimals to any place.',
            ],
            content: [
                { type: 'text', body: 'Decimals are a way of writing parts of a whole number. The decimal point separates the whole number part from the fractional part.' },
                { type: 'image', url: '/placeholders/place-value-decimals.svg', alt: 'A place value chart showing the tenths, hundredths, and thousandths places.' },
                { type: 'text', body: 'Each place to the right of the decimal point is 10 times smaller than the place to its left. For example, the tenths place is 10 times bigger than the hundredths place.' },
            ],
            quiz: {
                title: 'Decimals and Place Value Quiz',
                questions: [
                    { id: 'q1', question: 'In the number 3.456, what place is the 5 in?', type: 'multiple-choice', options: ['Tenths', 'Hundredths', 'Thousandths'], correctAnswer: 'Hundredths' },
                    { id: 'q2', question: 'How do you write "two and sixty-three hundredths" as a decimal?', type: 'multiple-choice', options: ['2.63', '2.063', '26.3'], correctAnswer: '2.63' },
                ],
            },
            multilingual: {
                es: {
                    title: 'Sumergiéndose en los Decimales: Entendiendo el Valor Posicional',
                    content: [
                        { type: 'text', body: 'Los decimales son una forma de escribir partes de un número entero. El punto decimal separa la parte del número entero de la parte fraccionaria.' }
                    ],
                    quiz: {
                        title: 'Prueba de Decimales y Valor Posicional',
                        questions: [
                            { id: 'q1', question: 'En el número 3.456, ¿en qué lugar está el 5?', options: ['Décimas', 'Centésimas', 'Milésimas'] },
                            { id: 'q2', question: '¿Cómo se escribe "dos y sesenta y tres centésimas" como decimal?', options: ['2.63', '2.063', '26.3'] },
                        ],
                    },
                },
            },
        };
    case 'Adding and Subtracting Decimals':
        return {
            id: `5th-grade-basic-math-adding-and-subtracting-decimals`,
            title: 'Decimal Dance: Adding and Subtracting Decimals',
            learningObjectives: [
                'Add and subtract decimals to the hundredths place.',
                'Understand the importance of lining up decimal points.',
                'Solve word problems involving addition and subtraction of decimals.',
            ],
            content: [
                { type: 'text', body: 'Adding and subtracting decimals is just like working with whole numbers, with one important rule: you must line up the decimal points!' },
                { type: 'image', url: '/placeholders/adding-subtracting-decimals.svg', alt: 'An example showing two decimal numbers aligned by their decimal points for addition.' },
                { type: 'text', body: 'Once the decimal points are lined up, you can add or subtract as you normally would. Remember to bring the decimal point straight down in your answer.' },
            ],
            quiz: {
                title: 'Decimal Addition and Subtraction Quiz',
                questions: [
                    { id: 'q1', question: 'What is 3.45 + 1.2?', type: 'multiple-choice', options: ['4.65', '3.57', '4.57'], correctAnswer: '4.65' },
                    { id: 'q2', question: 'What is 5.7 - 2.34?', type: 'multiple-choice', options: ['3.36', '3.46', '3.03'], correctAnswer: '3.36' },
                ],
            },
            multilingual: {
                es: {
                    title: 'El Baile de los Decimales: Sumando y Restando Decimales',
                    content: [
                        { type: 'text', body: 'Sumar y restar decimales es como trabajar con números enteros, con una regla importante: ¡debes alinear los puntos decimales!' }
                    ],
                    quiz: {
                        title: 'Prueba de Suma y Resta de Decimales',
                        questions: [
                            { id: 'q1', question: '¿Cuánto es 3.45 + 1.2?', options: ['4.65', '3.57', '4.57'] },
                            { id: 'q2', question: '¿Cuánto es 5.7 - 2.34?', options: ['3.36', '3.46', '3.03'] },
                        ],
                    },
                },
            },
        };
    case 'Multiplying and Dividing Decimals':
        return {
            id: `5th-grade-basic-math-multiplying-and-dividing-decimals`,
            title: 'Mastering Decimals: Multiplication and Division',
            learningObjectives: [
                'Multiply decimals by whole numbers and other decimals.',
                'Divide decimals by whole numbers and other decimals.',
                'Accurately place the decimal point in products and quotients.',
            ],
            content: [
                { type: 'text', body: 'Multiplying decimals is like multiplying whole numbers, but with an extra step. First, multiply the numbers as if they were whole numbers. Then, count the total number of decimal places in the numbers you multiplied. Finally, place the decimal point in your answer so it has that many decimal places.' },
                { type: 'image', url: '/placeholders/multiplying-decimals.svg', alt: 'An example showing the multiplication of two decimal numbers and the placement of the decimal point in the product.' },
                { type: 'text', body: 'Dividing decimals is a bit different. If you divide a decimal by a whole number, you place the decimal point in the quotient directly above the decimal point in the dividend. If you divide by a decimal, you move the decimal point in the divisor to make it a whole number, and move the decimal point in the dividend the same number of places.' },
            ],
            quiz: {
                title: 'Decimal Multiplication and Division Quiz',
                questions: [
                    { id: 'q1', question: 'What is 2.5 * 3?', type: 'multiple-choice', options: ['7.5', '0.75', '75'], correctAnswer: '7.5' },
                    { id: 'q2', question: 'What is 6.4 / 2?', type: 'multiple-choice', options: ['3.2', '32', '0.32'], correctAnswer: '3.2' },
                ],
            },
            multilingual: {
                es: {
                    title: 'Dominando los Decimales: Multiplicación y División',
                    content: [
                        { type: 'text', body: 'Multiplicar decimales es como multiplicar números enteros, pero con un paso adicional. Primero, multiplica los números como si fueran números enteros. Luego, cuenta el número total de lugares decimales en los números que multiplicaste. Finalmente, coloca el punto decimal en tu respuesta para que tenga esa cantidad de lugares decimales.' }
                    ],
                    quiz: {
                        title: 'Prueba de Multiplicación y División de Decimales',
                        questions: [
                            { id: 'q1', question: '¿Cuánto es 2.5 * 3?', options: ['7.5', '0.75', '75'] },
                            { id: 'q2', question: '¿Cuánto es 6.4 / 2?', options: ['3.2', '32', '0.32'] },
                        ],
                    },
                },
            },
        };
    case 'Fractions: Adding and Subtracting with Unlike Denominators':
        return {
            id: `5th-grade-basic-math-adding-and-subtracting-fractions-unlike-denominators`,
            title: 'Finding Common Ground: Fractions with Unlike Denominators',
            learningObjectives: [
                'Add and subtract fractions with unlike denominators by finding a common denominator.',
                'Solve word problems involving addition and subtraction of fractions with unlike denominators.',
                'Understand why a common denominator is necessary to add and subtract fractions.',
            ],
            content: [
                { type: 'text', body: 'To add or subtract fractions with different denominators, you first need to find a common denominator. This means making the bottom numbers (the denominators) the same.' },
                { type: 'image', url: '/placeholders/unlike-denominators.svg', alt: 'An example showing two fractions with unlike denominators being converted to equivalent fractions with a common denominator.' },
                { type: 'text', body: 'Once you have a common denominator, you can add or subtract the numerators (the top numbers) and keep the denominator the same. For example, to solve 1/2 + 1/4, you can rewrite 1/2 as 2/4. Then, 2/4 + 1/4 = 3/4.' },
            ],
            quiz: {
                title: 'Fractions with Unlike Denominators Quiz',
                questions: [
                    { id: 'q1', question: 'What is the first step when adding fractions with unlike denominators?', type: 'multiple-choice', options: ['Add the numerators', 'Find a common denominator', 'Add the denominators'], correctAnswer: 'Find a common denominator' },
                    { id: 'q2', question: 'What is 1/3 + 1/6?', type: 'multiple-choice', options: ['2/9', '1/2', '2/6'], correctAnswer: '1/2' },
                ],
            },
            multilingual: {
                es: {
                    title: 'Encontrando un Terreno Común: Fracciones con Denominadores Diferentes',
                    content: [
                        { type: 'text', body: 'Para sumar o restar fracciones con diferentes denominadores, primero necesitas encontrar un denominador común. Esto significa hacer que los números de abajo (los denominadores) sean iguales.' }
                    ],
                    quiz: {
                        title: 'Prueba de Fracciones con Denominadores Diferentes',
                        questions: [
                            { id: 'q1', question: '¿Cuál es el primer paso al sumar fracciones con denominadores diferentes?', options: ['Sumar los numeradores', 'Encontrar un denominador común', 'Sumar los denominadores'] },
                            { id: 'q2', question: '¿Cuánto es 1/3 + 1/6?', options: ['2/9', '1/2', '2/6'] },
                        ],
                    },
                },
            },
        };
    case 'Fractions: Multiplying and Dividing':
        return {
            id: `5th-grade-basic-math-multiplying-and-dividing-fractions`,
            title: 'Fraction Action: Multiplying and Dividing Fractions',
            learningObjectives: [
                'Multiply a fraction or whole number by a fraction.',
                'Divide a unit fraction by a whole number and a whole number by a unit fraction.',
                'Solve real-world problems involving multiplication and division of fractions.',
            ],
            content: [
                { type: 'text', body: 'Multiplying fractions is simple: multiply the numerators, then multiply the denominators. To divide fractions, we use a trick called "keep, change, flip". You keep the first fraction, change the division sign to multiplication, and flip the second fraction (find its reciprocal). Then, multiply as usual!' },
                { type: 'image', url: '/placeholders/multiplying-dividing-fractions.svg', alt: 'An example showing how to multiply and divide two fractions.' },
                { type: 'text', body: 'For example, 1/2 * 3/4 = (1*3)/(2*4) = 3/8. To divide 1/2 by 1/4, you would calculate 1/2 * 4/1 = 4/2 = 2.' },
            ],
            quiz: {
                title: 'Fraction Multiplication and Division Quiz',
                questions: [
                    { id: 'q1', question: 'What is 2/3 * 1/5?', type: 'multiple-choice', options: ['2/15', '3/10', '2/8'], correctAnswer: '2/15' },
                    { id: 'q2', question: 'What is 1/2 / 4?', type: 'multiple-choice', options: ['2', '1/8', '1/6'], correctAnswer: '1/8' },
                ],
            },
            multilingual: {
                es: {
                    title: 'Acción de Fracciones: Multiplicando y Dividiendo Fracciones',
                    content: [
                        { type: 'text', body: 'Multiplicar fracciones es simple: multiplica los numeradores, luego multiplica los denominadores. Para dividir fracciones, usamos un truco llamado "mantener, cambiar, voltear". Mantienes la primera fracción, cambias el signo de división a multiplicación y volteas la segunda fracción (encuentras su recíproco). ¡Luego, multiplica como de costumbre!' }
                    ],
                    quiz: {
                        title: 'Prueba de Multiplicación y División de Fracciones',
                        questions: [
                            { id: 'q1', question: '¿Cuánto es 2/3 * 1/5?', options: ['2/15', '3/10', '2/8'] },
                            { id: 'q2', question: '¿Cuánto es 1/2 / 4?', options: ['2', '1/8', '1/6'] },
                        ],
                    },
                },
            },
        };
    // Add more cases for other topics here
    default:
      return null;
  }
}

async function createLesson(subject, gradeLevel, topic) {
  const lessonsDir = path.join(process.cwd(), 'eduforge-web', 'src', 'lib', 'data', 'lessons');
  if (!fs.existsSync(lessonsDir)) {
    fs.mkdirSync(lessonsDir, { recursive: true });
  }

  console.log(`Generating lesson for: ${subject} - ${gradeLevel} - ${topic}`);
  const lessonContent = await generateLessonContent(subject, gradeLevel, topic);

  if (lessonContent) {
    const lesson = {
      id: lessonContent.id,
      subject,
      gradeLevel,
      topic,
      ...lessonContent,
    };

    const filePath = path.join(lessonsDir, `${lesson.id}.json`);
    fs.writeFileSync(filePath, JSON.stringify(lesson, null, 2));
    console.log(`Successfully generated lesson: ${filePath}`);
  } else {
    console.log(`Could not generate content for topic: ${topic}`);
  }
}

async function main() {
  const topicsToGenerate = [
    { subject: 'Math', gradeLevel: 'Pre-K', topic: 'Basic Shapes' },
    { subject: 'Math', gradeLevel: 'Pre-K', topic: 'Simple Addition' },
    { subject: 'Math', gradeLevel: 'Pre-K', topic: 'Number Recognition 0-10' },
    { subject: 'Math', gradeLevel: 'Pre-K', topic: 'Comparing Numbers' },
    { subject: 'Math', gradeLevel: 'Pre-K', topic: 'Counting to 20' },
    { subject: 'Math', gradeLevel: 'Pre-K', topic: 'Patterns' },
    { subject: 'Math', gradeLevel: 'Pre-K', topic: 'Measurement (size)' },
    { subject: 'Math', gradeLevel: 'Pre-K', topic: 'Sorting and Classifying' },
    { subject: 'Math', gradeLevel: 'Pre-K', topic: 'Money (pennies, nickels, dimes)' },
    { subject: 'Math', gradeLevel: 'Pre-K', topic: 'Time (day, night)' },
    { subject: 'Science', gradeLevel: 'Pre-K', topic: 'Animals' },
    { subject: 'Science', gradeLevel: 'Pre-K', topic: 'Plants' },
    { subject: 'Science', gradeLevel: 'Pre-K', topic: 'Weather' },
    { subject: 'Science', gradeLevel: 'Pre-K', topic: 'The Five Senses' },
    { subject: 'Science', gradeLevel: 'Pre-K', topic: 'Seasons' },
    { subject: 'Science', gradeLevel: 'Pre-K', topic: 'Living and Non-living Things' },
    { subject: 'Science', gradeLevel: 'Pre-K', topic: 'Our Bodies' },
    { subject: 'Science', gradeLevel: 'Pre-K', topic: 'Space (Sun, Moon, Stars)' },
    { subject: 'Science', gradeLevel: 'Pre-K', topic: 'Water' },
    { subject: 'Science', gradeLevel: 'Pre-K', topic: 'Dinosaurs' },
    { subject: 'Language Arts', gradeLevel: '5th Grade', topic: 'Figurative Language' },
    { subject: 'Language Arts', gradeLevel: '5th Grade', topic: 'Reading Comprehension: Main Idea and Supporting Details' },
    { subject: 'Language Arts', gradeLevel: '5th Grade', topic: 'Writing: Narrative Writing' },
    { subject: 'Language Arts', gradeLevel: '5th Grade', topic: 'Grammar: Parts of Speech (Nouns, Verbs, Adjectives, Adverbs)' },
    { subject: 'Language Arts', gradeLevel: '5th Grade', topic: 'Vocabulary: Context Clues' },
    { subject: 'Language Arts', gradeLevel: '5th Grade', topic: 'Poetry: Understanding Elements of Poetry (Rhyme, Rhythm, Stanza)' },
    { subject: 'Language Arts', gradeLevel: '5th Grade', topic: 'Writing: Persuasive Writing' },
    { subject: 'Language Arts', gradeLevel: '5th Grade', topic: 'Grammar: Punctuation and Capitalization' },
    { subject: 'Language Arts', gradeLevel: '5th Grade', topic: 'Reading Comprehension: Cause and Effect' },
    { subject: 'Language Arts', gradeLevel: '5th Grade', topic: 'Writing: Expository Writing' },
    { subject: 'Basic Math', gradeLevel: '5th Grade', topic: 'Order of Operations (PEMDAS)' },
    { subject: 'Basic Math', gradeLevel: '5th Grade', topic: 'Place Value and Decimals' },
    { subject: 'Basic Math', gradeLevel: '5th Grade', topic: 'Adding and Subtracting Decimals' },
    { subject: 'Basic Math', gradeLevel: '5th Grade', topic: 'Multiplying and Dividing Decimals' },
    { subject: 'Basic Math', gradeLevel: '5th Grade', topic: 'Fractions: Adding and Subtracting with Unlike Denominators' },
    { subject: 'Basic Math', gradeLevel: '5th Grade', topic: 'Fractions: Multiplying and Dividing' },
  ];

  for (const topic of topicsToGenerate) {
    await createLesson(topic.subject, topic.gradeLevel, topic.topic);
  }
}

main();
