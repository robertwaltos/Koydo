import type { LearningModule } from "@/lib/modules/types";

export const Coding101Module: LearningModule = {
  "id": "coding-101",
  "title": "Coding: From Zero to Programmer",
  "description": "Learn the foundations of programming from scratch! Understand what code is, work with variables, conditionals, loops, functions, and basic data structures through hands-on examples and challenges.",
  "subject": "Coding",
  "tags": [
    "coding",
    "computer-science",
    "interactive",
    "curriculum"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "2.0.0",
  "learningObjectives": [
    "Explain what code is and how computers follow instructions",
    "Create and use variables to store different data types",
    "Write conditional statements using if, elif, and else",
    "Build loops (for and while) to repeat actions efficiently",
    "Define and call functions to organize reusable code",
    "Use lists and basic data structures to manage collections of data"
  ],
  "lessons": [
    {
      "id": "coding-101-l01",
      "title": "What is Code?",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "coding-101-l01-c1",
          "title": "Code Is Instructions",
          "content": "Code is like a special set of instructions that tells a computer exactly what to do, much like how a recipe guides a chef in preparing a delicious meal. Just as a chef needs to follow the recipe carefully to create the perfect dish, computers need to follow our instructions step by step to perform tasks. While computers are incredibly fast at processing information, they don't have the ability to think for themselves. They rely entirely on the instructions we give them, and they follow each step precisely. This means that even a tiny mistake, like a typo, can lead to unexpected results! For example, if a chef accidentally adds salt instead of sugar, the dessert won't taste right. Similarly, in coding, it's important to be careful and clear when writing code to ensure everything works as intended. So, remember, just like cooking, coding requires attention to detail and precision to achieve the best results!"
        },
        {
          "id": "coding-101-l01-c2",
          "title": "Programming Languages",
          "content": "Just like people communicate in languages such as English, Spanish, or Mandarin, computers have their own special languages called programming languages. These languages allow us to give instructions to computers so they can perform tasks for us. Some popular programming languages include Python, JavaScript, and Scratch. For instance, in Python, when you write the line of code print('Hello, World!'), you are telling the computer to display the words 'Hello, World!' on the screen. Learning these programming languages is like discovering a new way to talk to computers and make them do amazing things! By understanding how to use these languages, you can create games, websites, and much more. So, are you ready to start your journey into the world of coding?"
        },
        {
          "id": "coding-101-l01-c3",
          "title": "Algorithms",
          "content": "An algorithm is like a recipe or a set of instructions that helps us solve a problem step by step. Imagine you want to make a delicious peanut butter sandwich. Here’s how you would do it using an algorithm: 1. First, take out two slices of bread from the package. 2. Next, grab a jar of peanut butter and a knife. 3. Carefully spread peanut butter on one of the slices of bread. Make sure to cover it well! 4. Now, take the second slice of bread and place it on top of the first slice with the peanut butter. 5. Finally, you can cut the sandwich in half if you like, and enjoy your tasty treat! In the world of coding, we write algorithms using special programming languages. These languages help computers understand our instructions so they can perform tasks just like we do when we follow a recipe. Learning to create algorithms is an important first step in becoming a great programmer!"
        }
      ],
      "flashcards": [
        {
          "id": "coding-101-l01-f1",
          "front": "A set of instructions that tells a computer what to do",
          "back": "Code"
        },
        {
          "id": "coding-101-l01-f2",
          "front": "A step-by-step plan to solve a problem",
          "back": "Algorithm"
        },
        {
          "id": "coding-101-l01-f3",
          "front": "A language that reads almost like English",
          "back": "Python"
        },
        {
          "id": "coding-101-l01-f4",
          "front": "The first program most beginners write",
          "back": "Hello, World!"
        }
      ],
      "questions": [
        {
          "id": "coding-101-l01-q1",
          "text": "Code is like a",
          "options": [
            {
              "id": "a",
              "text": "Recipe for a computer"
            },
            {
              "id": "b",
              "text": "Song for your ears"
            },
            {
              "id": "c",
              "text": "Painting for your eyes"
            },
            {
              "id": "d",
              "text": "Game you play outside"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Code gives step-by-step instructions, just like a recipe!"
        },
        {
          "id": "coding-101-l01-q2",
          "text": "A step-by-step plan to solve a problem is called",
          "options": [
            {
              "id": "a",
              "text": "An algorithm"
            },
            {
              "id": "b",
              "text": "A variable"
            },
            {
              "id": "c",
              "text": "A loop"
            },
            {
              "id": "d",
              "text": "A function"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Algorithms are the planning step before coding!"
        },
        {
          "id": "coding-101-l01-q3",
          "text": "print('Hello, World!') is written in",
          "options": [
            {
              "id": "a",
              "text": "Python"
            },
            {
              "id": "b",
              "text": "English"
            },
            {
              "id": "c",
              "text": "Spanish"
            },
            {
              "id": "d",
              "text": "Math"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Python is a programming language that reads almost like English!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "coding-101-l01-act1",
          "type": "project_builder",
          "title": "Write an algorithm",
          "description": "Write an algorithm (step-by-step instructions) for something you do every day — like brushing your teeth or getting dressed. Write at least 6 steps. Be very specific — remember, a computer would follow them literally!"
        }
      ],
      "learningAids": [
        {
          "id": "coding-101-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "coding-101-l02",
      "title": "Variables and Data Types",
      "type": "interactive",
      "duration": 12,
      "chunks": [
        {
          "id": "coding-101-l02-c1",
          "title": "What Are Variables?",
          "content": "A variable is like a special box that has a label on it, and it can hold different kinds of values. Imagine you have a box labeled 'name'. When we write in Python, 'name = 'Alex'', we are putting the name 'Alex' inside that box. Now, if we have another box labeled 'age', and we write 'age = 10', we are putting the number 10 in that box. The exciting part about variables is that we can change what is inside these boxes whenever we want! For example, if we decide that Alex has a birthday and is now a year older, we can write 'age = 11'. This means we have updated the value in the 'age' box to 11. Variables help us keep track of information that can change over time, making our programs more dynamic and interesting!"
        },
        {
          "id": "coding-101-l02-c2",
          "title": "Data Types",
          "content": "Variables are special containers in programming that can hold different kinds of data. It's really important to know what type of data you're working with because it helps us understand how to use it correctly. For example, strings are pieces of text that we put inside quotes, like 'Hello'. When we see something like this, we know it's a string! Next, we have integers, which are whole numbers without any fractions or decimals, such as 42. Then, there are floats, which are numbers that include decimals, like 3.14. Finally, we have booleans, which are a bit different because they can only be either True or False. Understanding these different data types is super important because it changes how we can use them in our programs. For instance, we can add numbers together, like 5 + 3, which equals 8. But if we try to add strings, we aren't really adding them; instead, we're joining them together. For example, if we take 'Hi' and add ' there', we get 'Hi there' as the result. So, knowing about data types helps us write better code and avoid mistakes!"
        },
        {
          "id": "coding-101-l02-c3",
          "title": "Naming Variables",
          "content": "Choosing good names for your variables is very important because it helps others (and yourself!) understand what the code does. For example, names like player_score, favorite_color, and total_cost clearly describe what each variable holds. This makes it easier for anyone reading your code to know what information is being stored. In Python, there are some rules to follow when naming variables: you can't use spaces (so use underscores instead), a variable name can't start with a number, and remember that uppercase and lowercase letters are treated differently (for example, Age and age are not the same). Clear and descriptive names make your code much easier to read and understand! By following these guidelines, you can write code that is not only functional but also easy for others to follow, which is a key skill for any programmer."
        }
      ],
      "flashcards": [
        {
          "id": "coding-101-l02-f1",
          "front": "A labeled box that holds a value",
          "back": "Variable"
        },
        {
          "id": "coding-101-l02-f2",
          "front": "Data type for text in quotes",
          "back": "String"
        },
        {
          "id": "coding-101-l02-f3",
          "front": "Data type for whole numbers (like 42)",
          "back": "Integer"
        },
        {
          "id": "coding-101-l02-f4",
          "front": "Data type that is either True or False",
          "back": "Boolean"
        }
      ],
      "questions": [
        {
          "id": "coding-101-l02-q1",
          "text": "In Python, name = 'Alex' creates a",
          "options": [
            {
              "id": "a",
              "text": "Variable holding a string"
            },
            {
              "id": "b",
              "text": "Loop"
            },
            {
              "id": "c",
              "text": "Function"
            },
            {
              "id": "d",
              "text": "Algorithm"
            }
          ],
          "correctOptionId": "a",
          "explanation": "name is a variable and 'Alex' is a string (text)!"
        },
        {
          "id": "coding-101-l02-q2",
          "text": "3.14 is an example of which data type?",
          "options": [
            {
              "id": "a",
              "text": "Float"
            },
            {
              "id": "b",
              "text": "Integer"
            },
            {
              "id": "c",
              "text": "String"
            },
            {
              "id": "d",
              "text": "Boolean"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Floats are numbers with decimal points!"
        },
        {
          "id": "coding-101-l02-q3",
          "text": "Which is a good variable name?",
          "options": [
            {
              "id": "a",
              "text": "player_score"
            },
            {
              "id": "b",
              "text": "123abc"
            },
            {
              "id": "c",
              "text": "my score"
            },
            {
              "id": "d",
              "text": "x"
            }
          ],
          "correctOptionId": "a",
          "explanation": "player_score is descriptive, uses underscores, and follows Python rules!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "coding-101-l02-act1",
          "type": "project_builder",
          "title": "Variable bio card",
          "description": "On paper or in a code editor, create variables about yourself: my_name = 'Your Name', my_age = your age, favorite_food = 'your food', is_student = True. Then write print statements for each one."
        }
      ],
      "learningAids": [
        {
          "id": "coding-101-l02-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "coding-101-l03",
      "title": "Conditionals: If, Elif, Else",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "coding-101-l03-c1",
          "title": "If Statements",
          "content": "An if statement is a really cool tool that helps the computer make decisions based on specific conditions. For instance, in the programming language Python, we can write something like this: if temperature > 90: print('It is hot!'). In this example, the computer looks at the temperature and checks if it is greater than 90 degrees. If this condition is true, the computer will show the message 'It is hot!'. However, if the temperature is not greater than 90, the computer will skip this instruction and continue with the next one. This ability to make choices based on conditions is what makes programming so fun and interesting! It allows us to create programs that can respond differently depending on the situation, just like how we make decisions in our daily lives."
        },
        {
          "id": "coding-101-l03-c2",
          "title": "Elif and Else",
          "content": "In programming, we often need to make decisions based on certain conditions. The word 'elif' is short for 'else if'. It helps us check another condition if the first one we checked was not true. On the other hand, 'else' is what the computer will do if none of the conditions we checked are true. Let's look at an example to understand this better:\nImagine we want to give grades based on a score. We can write our code like this:\nif score >= 90:\n    print('A')\nelif score >= 80:\n    print('B')\nelse:\n    print('Keep trying!')\nIn this example, Python will check each condition one by one, starting from the top. If the score is 90 or higher, it will print 'A'. If the score is 80 or higher but less than 90, it will print 'B'. If the score is below 80, it will print 'Keep trying!'. This way, we can make our programs smarter by allowing them to make choices based on different situations!"
        },
        {
          "id": "coding-101-l03-c3",
          "title": "Comparison Operators",
          "content": "When working with conditionals, we use special symbols called comparison operators to compare values. These include: == (which checks if two values are equal), != (which checks if they are not equal), > (greater than), < (less than), >= (greater than or equal to), and <= (less than or equal to). It's important to remember that the single equals sign '=' is used to assign a value, while the double equals '==' is used to compare two values. For example, 5 == 5 is true, but 5 == 3 is false. Understanding these operators is key to making effective decisions in your code!"
        }
      ],
      "flashcards": [
        {
          "id": "coding-101-l03-f1",
          "front": "Lets the computer make a decision",
          "back": "If statement"
        },
        {
          "id": "coding-101-l03-f2",
          "front": "Means 'else if' — another condition to check",
          "back": "elif"
        },
        {
          "id": "coding-101-l03-f3",
          "front": "Runs when no other condition is True",
          "back": "else"
        },
        {
          "id": "coding-101-l03-f4",
          "front": "== checks equality, but = does this",
          "back": "Assigns a value"
        }
      ],
      "questions": [
        {
          "id": "coding-101-l03-q1",
          "text": "What does an if statement do?",
          "options": [
            {
              "id": "a",
              "text": "Lets the computer make a decision"
            },
            {
              "id": "b",
              "text": "Stores a value"
            },
            {
              "id": "c",
              "text": "Repeats code"
            },
            {
              "id": "d",
              "text": "Defines a function"
            }
          ],
          "correctOptionId": "a",
          "explanation": "If statements check a condition and decide what to do!"
        },
        {
          "id": "coding-101-l03-q2",
          "text": "If score = 85, which branch runs?\nif score >= 90: print('A')\nelif score >= 80: print('B')\nelse: print('C')",
          "options": [
            {
              "id": "a",
              "text": "B"
            },
            {
              "id": "b",
              "text": "A"
            },
            {
              "id": "c",
              "text": "C"
            },
            {
              "id": "d",
              "text": "Nothing"
            }
          ],
          "correctOptionId": "a",
          "explanation": "85 is not >= 90, but it IS >= 80, so the elif branch runs: B!"
        },
        {
          "id": "coding-101-l03-q3",
          "text": "The operator == checks",
          "options": [
            {
              "id": "a",
              "text": "If two values are equal"
            },
            {
              "id": "b",
              "text": "If a value is greater"
            },
            {
              "id": "c",
              "text": "If a value is less"
            },
            {
              "id": "d",
              "text": "Assigns a value"
            }
          ],
          "correctOptionId": "a",
          "explanation": "== compares, = assigns. Important difference!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "coding-101-l03-act1",
          "type": "project_builder",
          "title": "Weather advisor",
          "description": "Write a program (on paper or in code) that asks for the temperature and gives advice:\nif temp > 85: 'Wear sunscreen!'\nelif temp > 60: 'Nice day!'\nelif temp > 32: 'Grab a jacket!'\nelse: 'Stay warm — it's freezing!'"
        }
      ],
      "learningAids": [
        {
          "id": "coding-101-l03-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "coding-101-l04",
      "title": "Coding Checkpoint",
      "type": "quiz",
      "duration": 8,
      "chunks": [
        {
          "id": "coding-101-l04-c1",
          "title": "Code and Algorithms Review",
          "content": "In coding, we use code to give computers step-by-step instructions on how to perform tasks. Before we start coding, we often create algorithms, which are detailed plans that outline how we will solve a problem. There are many programming languages available, such as Python, JavaScript, and Scratch, each with its own unique features and uses. Understanding these concepts is essential as we continue our journey into the world of programming!\nContext recap: In coding, we use code to give computers step-by-step instructions on how to perform tasks. Before we start coding, we often create algorithms, which are detailed plans that outline how we will solve a problem. There are many programming languages available, such as Python, JavaScript, and Scratch, each with its own unique features and uses. Understanding these concepts is essential as we continue our journey into the world of programming!"
        },
        {
          "id": "coding-101-l04-c2",
          "title": "Variables and Conditionals Review",
          "content": "Variables are an important part of programming because they allow us to store different types of data, such as strings (text), integers (whole numbers), floats (decimal numbers), and booleans (true or false values). Additionally, conditionals, which include if, elif, and else statements, enable the computer to make decisions based on specific conditions. Together, these concepts form the foundation of coding and help us create more complex programs!\nContext recap: Variables are an important part of programming because they allow us to store different types of data, such as strings (text), integers (whole numbers), floats (decimal numbers), and booleans (true or false values). Additionally, conditionals, which include if, elif, and else statements, enable the computer to make decisions based on specific conditions. Together, these concepts form the foundation of coding and help us create more complex programs!"
        },
        {
          "id": "coding-101-l04-c3",
          "title": "Keep Coding!",
          "content": "Congratulations! You have learned the basics of coding, including how to give instructions to computers, how to store data using variables, and how to make decisions with conditionals. As you continue your coding journey, you will soon explore exciting new topics such as loops, functions, and data structures. Keep up the great work, and get ready for more fun challenges ahead!\nContext recap: Congratulations! You have learned the basics of coding, including how to give instructions to computers, how to store data using variables, and how to make decisions with conditionals. As you continue your coding journey, you will soon explore exciting new topics such as loops, functions, and data structures. Keep up the great work, and get ready for more fun challenges ahead!"
        }
      ],
      "flashcards": [
        {
          "id": "coding-101-l04-f1",
          "front": "Text in quotes like 'hello'",
          "back": "String"
        },
        {
          "id": "coding-101-l04-f2",
          "front": "True or False data type",
          "back": "Boolean"
        },
        {
          "id": "coding-101-l04-f3",
          "front": "Keyword for 'else if' in Python",
          "back": "elif"
        },
        {
          "id": "coding-101-l04-f4",
          "front": "Set of instructions for a computer",
          "back": "Code"
        }
      ],
      "questions": [
        {
          "id": "coding-101-l04-q1",
          "text": "Which data type stores whole numbers?",
          "options": [
            {
              "id": "a",
              "text": "Integer"
            },
            {
              "id": "b",
              "text": "String"
            },
            {
              "id": "c",
              "text": "Boolean"
            },
            {
              "id": "d",
              "text": "Float"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Integers are whole numbers like 1, 42, or -7!"
        },
        {
          "id": "coding-101-l04-q2",
          "text": "What runs when no if or elif condition is True?",
          "options": [
            {
              "id": "a",
              "text": "else"
            },
            {
              "id": "b",
              "text": "elif"
            },
            {
              "id": "c",
              "text": "if"
            },
            {
              "id": "d",
              "text": "print"
            }
          ],
          "correctOptionId": "a",
          "explanation": "else is the fallback — it catches everything else!"
        },
        {
          "id": "coding-101-l04-q3",
          "text": "A plan to solve a problem step-by-step is called",
          "options": [
            {
              "id": "a",
              "text": "An algorithm"
            },
            {
              "id": "b",
              "text": "A variable"
            },
            {
              "id": "c",
              "text": "A string"
            },
            {
              "id": "d",
              "text": "A condition"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Algorithms plan out the steps before writing code!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "coding-101-l04-act1",
          "type": "project_builder",
          "title": "Debug challenge",
          "description": "Find the errors in this pseudocode and fix them:\nmy name = 'Alex' (hint: spaces!)\nif age = 10: (hint: = vs ==)\n    print('You are ten')\nelif:\n    print('Not ten') (hint: elif needs a condition!)"
        }
      ],
      "learningAids": [
        {
          "id": "coding-101-l04-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "coding-101-l05",
      "title": "Loops: For and While",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "coding-101-l05-c1",
          "title": "For Loops",
          "content": "A for loop is a powerful and helpful tool in programming that allows us to repeat a set of instructions a specific number of times. Imagine you want to greet someone by saying 'Hello!' five times. Instead of writing 'Hello!' over and over again, we can use a for loop to do it for us! Here’s how it looks in code:\n```python\nfor i in range(5):\n    print('Hello!')\n```\nIn this example, 'range(5)' creates a list of numbers starting from 0 up to 4. This means the loop will run five times in total. Each time the loop runs, it prints 'Hello!'. For loops are especially useful when we know exactly how many times we want to repeat something, which helps make our code cleaner and easier to understand. By using for loops, we can save time and avoid mistakes in our programming, making it a great skill to learn as we become better coders!"
        },
        {
          "id": "coding-101-l05-c2",
          "title": "While Loops",
          "content": "A while loop is a special kind of loop that keeps running a set of instructions as long as a specific condition is true. Let's look at an example where we want to count from 0 to 2. We start by setting our count to 0:\ncount = 0\nNext, we write our while loop like this:\nwhile count < 3:\n    print(count)\n    count = count + 1\nIn this code, the loop will keep printing the current value of 'count'. It starts at 0, then goes to 1, and finally to 2. When 'count' reaches 3, the condition 'count < 3' is no longer true, so the loop stops running. It's very important to remember to update the count inside the loop. If we forget to do that, we might create an infinite loop, which means the loop would keep running forever without stopping! So always make sure to change the count to avoid that situation! Understanding while loops is a key step in learning how to code effectively, as they allow us to repeat actions without writing the same code multiple times."
        },
        {
          "id": "coding-101-l05-c3",
          "title": "When to Use Each",
          "content": "When you're coding, it's important to know which type of loop to use for different situations. A for loop is perfect when you know exactly how many times you want to repeat a task. For example, if you want to count from 1 to 10, a for loop is the best choice because you can specify that you want to repeat the action 10 times. On the other hand, a while loop is useful when you want to keep doing something until a specific condition is met. For instance, if you're creating a program that asks a user to enter a password, you would use a while loop to keep asking them until they provide the correct password. Loops are really helpful because they allow you to write your code more efficiently. Instead of writing the same instructions over and over again, you can use loops to repeat actions, making your code cleaner and easier to understand. This way, you can focus on creating fun and interesting programs without getting bogged down by repetitive tasks!"
        }
      ],
      "flashcards": [
        {
          "id": "coding-101-l05-f1",
          "front": "Repeats code a specific number of times",
          "back": "For loop"
        },
        {
          "id": "coding-101-l05-f2",
          "front": "Repeats as long as a condition is True",
          "back": "While loop"
        },
        {
          "id": "coding-101-l05-f3",
          "front": "range(5) produces these numbers",
          "back": "0, 1, 2, 3, 4"
        },
        {
          "id": "coding-101-l05-f4",
          "front": "A loop that never stops because the condition never becomes False",
          "back": "Infinite loop"
        }
      ],
      "questions": [
        {
          "id": "coding-101-l05-q1",
          "text": "for i in range(3): print(i) will print",
          "options": [
            {
              "id": "a",
              "text": "0, 1, 2"
            },
            {
              "id": "b",
              "text": "1, 2, 3"
            },
            {
              "id": "c",
              "text": "3, 2, 1"
            },
            {
              "id": "d",
              "text": "0, 1, 2, 3"
            }
          ],
          "correctOptionId": "a",
          "explanation": "range(3) starts at 0 and goes up to but not including 3!"
        },
        {
          "id": "coding-101-l05-q2",
          "text": "A while loop stops when",
          "options": [
            {
              "id": "a",
              "text": "Its condition becomes False"
            },
            {
              "id": "b",
              "text": "It runs once"
            },
            {
              "id": "c",
              "text": "The computer gets tired"
            },
            {
              "id": "d",
              "text": "It reaches 100"
            }
          ],
          "correctOptionId": "a",
          "explanation": "While loops check their condition each time — False means stop!"
        },
        {
          "id": "coding-101-l05-q3",
          "text": "Use a for loop when you",
          "options": [
            {
              "id": "a",
              "text": "Know how many times to repeat"
            },
            {
              "id": "b",
              "text": "Don't know when to stop"
            },
            {
              "id": "c",
              "text": "Want to make a decision"
            },
            {
              "id": "d",
              "text": "Store a value"
            }
          ],
          "correctOptionId": "a",
          "explanation": "For loops are ideal when the number of repetitions is known!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "coding-101-l05-act1",
          "type": "project_builder",
          "title": "Countdown timer",
          "description": "Write a program that counts down from 10 to 1 and then prints 'Blast off!'. Try it with both a for loop (for i in range(10, 0, -1)) and a while loop (while count > 0). Which feels easier?"
        }
      ]
    },
    {
      "id": "coding-101-l06",
      "title": "Functions",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "coding-101-l06-c1",
          "title": "What Are Functions?",
          "content": "A function is a special part of our code that has a name and can be used again and again, just like a magic spell! Functions help us keep our code neat and tidy, making it easier for us to understand what we wrote. In Python, we can create a function by using the word 'def', which stands for 'define'. Here’s how we can create a simple greeting function:\ndef greet(name):\n    print('Hello, ' + name + '!')\nWhen we want to use this function, we just call it with a name. For example, if we call greet('Alex'), it will say:\nHello, Alex!\nAnd if we call greet('Sam'), it will say:\nHello, Sam!\nThis means we only need to write the greeting code once, but we can use it many times with different names. Isn’t that cool? Functions make our coding life much easier and more fun!"
        },
        {
          "id": "coding-101-l06-c2",
          "title": "Parameters and Return Values",
          "content": "Functions are special tools in programming that help us organize our code and make it easier to use. They can take inputs, which we call parameters, and they can also give us outputs, known as return values. Let's look at an example of a function that adds two numbers together. We can define this function like this:\ndef add(a, b):\n    return a + b\nIn this example, 'a' and 'b' are the parameters. When we call this function with two numbers, such as 3 and 5, it will add them together and return the result. We can see this in action with the following line of code:\nresult = add(3, 5)  # Here, 'result' will be 8\nThis means that the function takes the two numbers, adds them, and sends back the answer using the 'return' statement. This is super helpful because it allows us to perform calculations without having to write the same code over and over again! Functions make our programming cleaner and more efficient, which is why they are so important in coding."
        },
        {
          "id": "coding-101-l06-c3",
          "title": "Why Functions Matter",
          "content": "Functions are really important in coding because they help us keep our code neat and organized. Imagine if you had to write the same instructions over and over again in different parts of your program; that would be confusing and take a lot of time! Functions allow us to write a set of instructions just once and then use them whenever we need to. This makes it much easier to find and fix mistakes. If something goes wrong in our program, we only need to look in one place—the function—to fix it, instead of searching through all our code.\nPython, the programming language we're learning, has many built-in functions that we can use right away, like print() to show messages, len() to count items, input() to get information from users, and range() to create a list of numbers. These built-in functions help us code more efficiently.\nBut that's not all! We can also create our own functions, which are like our personal toolbox of helpful tools. This means we can make our coding experience even more fun and tailored to what we need! So, functions are not just useful; they make coding easier and more enjoyable!"
        }
      ],
      "flashcards": [
        {
          "id": "coding-101-l06-f1",
          "front": "A reusable block of code with a name",
          "back": "Function"
        },
        {
          "id": "coding-101-l06-f2",
          "front": "Inputs that a function needs to work",
          "back": "Parameters (arguments)"
        },
        {
          "id": "coding-101-l06-f3",
          "front": "Keyword that sends a value back from a function",
          "back": "return"
        },
        {
          "id": "coding-101-l06-f4",
          "front": "Keyword used to create a function in Python",
          "back": "def"
        }
      ],
      "questions": [
        {
          "id": "coding-101-l06-q1",
          "text": "def greet(name): — what is 'name'?",
          "options": [
            {
              "id": "a",
              "text": "A parameter"
            },
            {
              "id": "b",
              "text": "A loop"
            },
            {
              "id": "c",
              "text": "A condition"
            },
            {
              "id": "d",
              "text": "A data type"
            }
          ],
          "correctOptionId": "a",
          "explanation": "name is an input (parameter) the function needs!"
        },
        {
          "id": "coding-101-l06-q2",
          "text": "What does 'return' do in a function?",
          "options": [
            {
              "id": "a",
              "text": "Sends a value back to the caller"
            },
            {
              "id": "b",
              "text": "Prints text on screen"
            },
            {
              "id": "c",
              "text": "Creates a loop"
            },
            {
              "id": "d",
              "text": "Stores a variable"
            }
          ],
          "correctOptionId": "a",
          "explanation": "return sends the result back so you can use it!"
        },
        {
          "id": "coding-101-l06-q3",
          "text": "Functions help you avoid",
          "options": [
            {
              "id": "a",
              "text": "Repeating the same code"
            },
            {
              "id": "b",
              "text": "Using variables"
            },
            {
              "id": "c",
              "text": "Making decisions"
            },
            {
              "id": "d",
              "text": "Using numbers"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Write once, call many times — no repetition!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "coding-101-l06-act1",
          "type": "project_builder",
          "title": "Calculator functions",
          "description": "Write four functions: add(a, b), subtract(a, b), multiply(a, b), and divide(a, b). Each should return the result. Test each one with print(add(10, 5)) and so on."
        }
      ]
    },
    {
      "id": "coding-101-l07",
      "title": "Lists and Basic Data Structures",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "coding-101-l07-c1",
          "title": "What Are Lists?",
          "content": "A list is a special type of variable that allows us to store multiple values together in one place. For example, we can create a list of fruits like this:\nfruits = ['apple', 'banana', 'cherry']\nWe can access each fruit in the list by its position, starting from 0. So, 'fruits[0]' gives us 'apple', and 'fruits[1]' gives us 'banana'. We can also add new items to our list using 'fruits.append('grape')' to add 'grape' at the end. If we want to remove an item, we can use 'fruits.remove('banana')' to take 'banana' out of the list. Lists are super helpful for keeping track of collections of related data!"
        },
        {
          "id": "coding-101-l07-c2",
          "title": "Looping Through Lists",
          "content": "In coding, we often work with lists, which are like containers that hold multiple items. Sometimes, we want to look at each item in a list and do something with it, like printing it out. To do this, we can use a special tool called a 'for loop'. Here’s how it works: if we have a list of fruits, we can write the following code:\nfor fruit in fruits:\n    print(fruit)\nThis code will go through the list of fruits and print each one, one at a time. So if our list has apples, bananas, and cherries, it will print 'apple', then 'banana', and finally 'cherry'.\nWe can also find out how many items are in our list by using the function 'len(fruits)'. This will tell us the total number of fruits in our list. Using loops with lists is a powerful way to manage and work with collections of data, making our coding tasks easier and more organized! Remember, lists help us keep track of many items at once, and loops help us interact with each item individually."
        },
        {
          "id": "coding-101-l07-c3",
          "title": "Dictionaries",
          "content": "A dictionary is a special type of data structure that helps us organize information in pairs, similar to how a real dictionary defines words. In a dictionary, each piece of information has a label, known as a key, and a value that describes it. For instance, we can create a dictionary to store details about a student like this:\nstudent = {'name': 'Alex', 'age': 10, 'grade': 5}\nIn this example, 'name', 'age', and 'grade' are the keys, while 'Alex', 10, and 5 are the values that go with those keys. If we want to find out the student's name, we can use the command 'print(student['name'])', and it will display 'Alex'. This way of organizing information is very helpful because it allows us to look up details using their labels instead of just numbers. Dictionaries are super useful in programming because they make it easy to manage and access data efficiently!"
        }
      ],
      "flashcards": [
        {
          "id": "coding-101-l07-f1",
          "front": "A variable that stores multiple values in order",
          "back": "List"
        },
        {
          "id": "coding-101-l07-f2",
          "front": "Index of the first item in a list",
          "back": "0 (zero)"
        },
        {
          "id": "coding-101-l07-f3",
          "front": "Adds an item to the end of a list",
          "back": ".append()"
        },
        {
          "id": "coding-101-l07-f4",
          "front": "Stores key-value pairs",
          "back": "Dictionary"
        }
      ],
      "questions": [
        {
          "id": "coding-101-l07-q1",
          "text": "fruits = ['apple', 'banana', 'cherry']. What is fruits[0]?",
          "options": [
            {
              "id": "a",
              "text": "'apple'"
            },
            {
              "id": "b",
              "text": "'banana'"
            },
            {
              "id": "c",
              "text": "'cherry'"
            },
            {
              "id": "d",
              "text": "0"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Lists start counting at index 0, so fruits[0] is 'apple'!"
        },
        {
          "id": "coding-101-l07-q2",
          "text": "To add 'grape' to a list called fruits, you write",
          "options": [
            {
              "id": "a",
              "text": "fruits.append('grape')"
            },
            {
              "id": "b",
              "text": "fruits.add('grape')"
            },
            {
              "id": "c",
              "text": "fruits + 'grape'"
            },
            {
              "id": "d",
              "text": "fruits[grape]"
            }
          ],
          "correctOptionId": "a",
          "explanation": ".append() adds an item to the end of a list!"
        },
        {
          "id": "coding-101-l07-q3",
          "text": "A dictionary stores",
          "options": [
            {
              "id": "a",
              "text": "Key-value pairs"
            },
            {
              "id": "b",
              "text": "Only numbers"
            },
            {
              "id": "c",
              "text": "Only strings"
            },
            {
              "id": "d",
              "text": "A single value"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Dictionaries pair keys with values, like 'name': 'Alex'!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "coding-101-l07-act1",
          "type": "project_builder",
          "title": "Favorites list program",
          "description": "Create a list of your 5 favorite movies. Write a for loop that prints each one numbered: '1. Movie Name'. Use a counter variable or enumerate(). Then create a dictionary for your top movie with keys: title, year, genre, rating."
        }
      ]
    },
    {
      "id": "coding-101-l08",
      "title": "Final Coding Assessment",
      "type": "quiz",
      "duration": 10,
      "chunks": [
        {
          "id": "coding-101-l08-c1",
          "title": "Code, Variables, and Conditionals Review",
          "content": "In programming, code is a set of instructions that tells the computer what to do. We use variables to store different types of data, such as strings (text), integers (whole numbers), floats (decimal numbers), and booleans (true or false values). Conditionals, which include 'if', 'elif', and 'else', help our programs make decisions based on certain conditions. Understanding these concepts is essential for writing effective code!\nContext recap: In programming, code is a set of instructions that tells the computer what to do. We use variables to store different types of data, such as strings (text), integers (whole numbers), floats (decimal numbers), and booleans (true or false values). Conditionals, which include 'if', 'elif', and 'else', help our programs make decisions based on certain conditions. Understanding these concepts is essential for writing effective code!"
        },
        {
          "id": "coding-101-l08-c2",
          "title": "Loops and Functions Review",
          "content": "For loops are a special tool in programming that allow us to repeat a specific action a set number of times. Imagine you want to say 'Hello!' five times; a for loop makes this easy! On the other hand, while loops are a bit different. They keep repeating an action as long as a certain condition is true. For example, if you want to keep playing a game until you lose, a while loop would be perfect for that! Functions are another important concept. They are like little machines in your code that can take inputs, called parameters, and give you outputs, known as return values. By using loops and functions wisely, you can write more efficient and organized code, which is a crucial skill for any programmer! Understanding these concepts will help you on your journey to becoming a great coder!"
        },
        {
          "id": "coding-101-l08-c3",
          "title": "Data Structures Review",
          "content": "Lists are used to store ordered collections of items, and we can access each item by its index position. On the other hand, dictionaries store information in key-value pairs, which allows us to look up values using their labels. By combining these powerful tools, we can create real programs that are organized and efficient, making our coding journey exciting and rewarding!\nContext recap: Lists are used to store ordered collections of items, and we can access each item by its index position. On the other hand, dictionaries store information in key-value pairs, which allows us to look up values using their labels. By combining these powerful tools, we can create real programs that are organized and efficient, making our coding journey exciting and rewarding!"
        }
      ],
      "flashcards": [
        {
          "id": "coding-101-l08-f1",
          "front": "def means",
          "back": "Define a function"
        },
        {
          "id": "coding-101-l08-f2",
          "front": "range(3) produces",
          "back": "0, 1, 2"
        },
        {
          "id": "coding-101-l08-f3",
          "front": "List index starts at",
          "back": "0"
        },
        {
          "id": "coding-101-l08-f4",
          "front": "= assigns, == does this",
          "back": "Compares for equality"
        }
      ],
      "questions": [
        {
          "id": "coding-101-l08-q1",
          "text": "What is the output of: add(4, 6) where def add(a, b): return a + b",
          "options": [
            {
              "id": "a",
              "text": "10"
            },
            {
              "id": "b",
              "text": "46"
            },
            {
              "id": "c",
              "text": "4"
            },
            {
              "id": "d",
              "text": "Error"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The function adds 4 + 6 and returns 10!"
        },
        {
          "id": "coding-101-l08-q2",
          "text": "A loop that never stops is called",
          "options": [
            {
              "id": "a",
              "text": "An infinite loop"
            },
            {
              "id": "b",
              "text": "A broken loop"
            },
            {
              "id": "c",
              "text": "A dead loop"
            },
            {
              "id": "d",
              "text": "A final loop"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Infinite loops run forever because the condition never becomes False!"
        },
        {
          "id": "coding-101-l08-q3",
          "text": "student = {'name': 'Sam', 'age': 12}. student['age'] returns",
          "options": [
            {
              "id": "a",
              "text": "12"
            },
            {
              "id": "b",
              "text": "'Sam'"
            },
            {
              "id": "c",
              "text": "'age'"
            },
            {
              "id": "d",
              "text": "{'name': 'Sam'}"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The key 'age' maps to the value 12 in the dictionary!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "coding-101-l08-act1",
          "type": "project_builder",
          "title": "Mini quiz program",
          "description": "Build a quiz program that stores questions in a list, uses a for loop to ask each one, uses an if statement to check the answer, and uses a score variable to track correct answers. Print the final score at the end!"
        }
      ]
    }
  ]
};
