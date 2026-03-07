import type { LearningModule } from "@/lib/modules/types";

export const quantum_computing_101_Module: LearningModule = {
  "id": "quantum-computing-101",
  "title": "Quantum Computing Foundations",
  "description": "An introductory curriculum in Quantum Computing for beginners. Learn the fundamentals of qubits, superposition, and entanglement. Build and simulate your first quantum circuits, explore famous quantum algorithms, and consider the future impact of this technology.",
  "subject": "Computer Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "quantum",
    "computing"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Describe the concepts of a qubit, superposition, and entanglement.",
    "Represent the state of a qubit using basic notation.",
    "Build and simulate a basic quantum circuit using common gates like Hadamard, Pauli-X, and CNOT.",
    "Explain how quantum measurement collapses a qubit's state.",
    "Compare a simple quantum algorithm to its classical counterpart to understand quantum advantage.",
    "Identify quantum noise as a primary challenge in building quantum computers.",
    "Discuss the potential societal and ethical impacts of quantum computing, such as breaking modern encryption."
  ],
  "lessons": [
    {
      "id": "quantum-computing-101-l01",
      "title": "What is a Quantum Computer?",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "quantum-computing-101-l01-a1",
          "type": "image",
          "title": "The Bloch Sphere",
          "content": "A visual representation of a qubit's state. Unlike a classical bit that is either at the North Pole (1) or South Pole (0), a qubit can be anywhere on the surface of the sphere."
        }
      ],
      "chunks": [
        {
          "id": "quantum-computing-101-l01-c1",
          "kind": "concept",
          "title": "From Bits to Qubits",
          "content": "Welcome to the world of Quantum Computing! We'll start by comparing classical computers with quantum computers. Classical computers use bits, which are either 0 or 1. Quantum computers use qubits, which can be 0, 1, or a combination of both at the same time. This strange property is called superposition."
        },
        {
          "id": "quantum-computing-101-l01-c2",
          "kind": "concept",
          "title": "Superposition and Measurement",
          "content": "Let's dive deeper into superposition. Imagine a spinning coin. While it's spinning, it's neither heads nor tails—it's a mix of both. A qubit is similar. But the moment you measure it (like the coin landing), it collapses to a definite state, either 0 or 1. We'll also introduce entanglement, a spooky connection where two qubits are linked, no matter how far apart they are."
        },
        {
          "id": "quantum-computing-101-l01-c3",
          "kind": "recap",
          "title": "Lesson 1 Recap",
          "content": "In this lesson, we learned the key differences between bits and qubits. We introduced two fundamental quantum concepts: superposition (a qubit being in multiple states at once) and entanglement (a special link between qubits). These ideas are the foundation for the power of quantum computing."
        }
      ],
      "flashcards": [
        {
          "id": "quantum-computing-101-l01-f1",
          "front": "Qubit",
          "back": "The basic unit of quantum information. It can exist in a state of 0, 1, or a superposition of both."
        },
        {
          "id": "quantum-computing-101-l01-f2",
          "front": "Superposition",
          "back": "The ability of a quantum system, like a qubit, to be in multiple states at the same time until it is measured."
        },
        {
          "id": "quantum-computing-101-l01-f3",
          "front": "Entanglement",
          "back": "A quantum phenomenon where two or more qubits become linked in such a way that their fates are intertwined, regardless of the distance separating them."
        }
      ]
    },
    {
      "id": "quantum-computing-101-l02",
      "title": "Building Quantum Circuits",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "quantum-computing-101-l02-a1",
          "type": "image",
          "title": "A Simple Quantum Circuit",
          "content": "Visual of a two-qubit circuit diagram. A line represents each qubit. Boxes on the lines represent quantum gates that perform operations on the qubits."
        }
      ],
      "chunks": [
        {
          "id": "quantum-computing-101-l02-c1",
          "kind": "practice",
          "title": "Introduction to Quantum Gates",
          "content": "A quantum circuit is a sequence of operations, called quantum gates, applied to qubits. In this activity, you'll learn about the most common gates. The Pauli-X gate acts like a classical NOT gate, flipping |0> to |1>. The Hadamard gate puts a qubit into a perfect superposition."
        },
        {
          "id": "quantum-computing-101-l02-c2",
          "kind": "recap",
          "title": "Running Your First Circuit",
          "content": "Now that you know some basic gates, you're ready to build and run a simple circuit in our simulator. We'll see how applying gates changes the state of the qubits and what happens when we measure the final result. Get ready to see quantum mechanics in action!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "quantum-computing-101-l02-act1",
          "type": "matching_pairs",
          "title": "Quantum Gate Matching",
          "description": "Match the quantum gate to its primary function.",
          "pairs": [
            {
              "left": "Pauli-X Gate (X)",
              "right": "Flips the qubit's state (0 to 1, 1 to 0)."
            },
            {
              "left": "Hadamard Gate (H)",
              "right": "Creates an equal superposition of 0 and 1."
            },
            {
              "left": "CNOT Gate",
              "right": "A two-qubit gate that flips the second qubit if the first is 1."
            },
            {
              "left": "Measurement",
              "right": "Collapses the qubit's state to either 0 or 1."
            }
          ]
        },
        {
          "id": "quantum-computing-101-l02-act2",
          "type": "circuit_builder",
          "title": "Create a Bell State",
          "description": "Create an entangled pair of qubits (a Bell state) by applying the correct gates.",
          "instructions": "Drag a Hadamard gate onto the first qubit, then drag a CNOT gate connecting the first qubit (control) to the second qubit (target)."
        }
      ]
    },
    {
      "id": "quantum-computing-101-l03",
      "title": "Checkpoint 1: Concepts and Circuits",
      "type": "quiz",
      "duration": 10,
      "learningAids": [],
      "questions": [
        {
          "id": "quantum-computing-101-l03-q1",
          "text": "What is the defining characteristic of a qubit compared to a classical bit?",
          "skillId": "quantum-computing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It can only be in the state 0."
            },
            {
              "id": "b",
              "text": "It can be in a superposition of states 0 and 1."
            },
            {
              "id": "c",
              "text": "It stores information as magnetic charges."
            },
            {
              "id": "d",
              "text": "It is much larger than a classical bit."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A qubit's ability to be in a superposition of both 0 and 1 simultaneously is its key difference from a classical bit, which can only be 0 or 1."
        },
        {
          "id": "quantum-computing-101-l03-q2",
          "text": "Which quantum gate is used to create superposition from a basic state like |0>?",
          "skillId": "quantum-computing-101-skill-gates",
          "options": [
            {
              "id": "a",
              "text": "Pauli-X Gate"
            },
            {
              "id": "b",
              "text": "CNOT Gate"
            },
            {
              "id": "c",
              "text": "Hadamard Gate"
            },
            {
              "id": "d",
              "text": "Measurement Gate"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The Hadamard gate is the standard gate used to put a qubit into an equal superposition of |0> and |1>."
        },
        {
          "id": "quantum-computing-101-l03-q3",
          "text": "What happens when you measure a qubit that is in a superposition?",
          "skillId": "quantum-computing-101-skill-measurement",
          "options": [
            {
              "id": "a",
              "text": "It stays in superposition."
            },
            {
              "id": "b",
              "text": "It collapses to a definite state of either 0 or 1."
            },
            {
              "id": "c",
              "text": "It splits into two separate qubits."
            },
            {
              "id": "d",
              "text": "The computer crashes."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Measurement forces the qubit to 'choose' a classical state, collapsing its wave function to either 0 or 1."
        }
      ]
    },
    {
      "id": "quantum-computing-101-l04",
      "title": "Quantum Algorithms in Action",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "quantum-computing-101-l04-a1",
          "type": "image",
          "title": "Classical vs. Quantum Search",
          "content": "An animation showing a classical search checking items one-by-one. Then, an animation showing a quantum search checking all items at once, providing a quadratic speedup."
        }
      ],
      "chunks": [
        {
          "id": "quantum-computing-101-l04-c1",
          "kind": "example",
          "title": "Case Study: Searching a Database",
          "content": "Let's look at a practical problem: finding a name in a massive, unsorted phone book. A classical computer must check each entry one by one. A quantum computer can use superposition to look at all the entries at once, leading to a significant speedup. This is the core idea behind Grover's algorithm."
        },
        {
          "id": "quantum-computing-101-l04-c2",
          "kind": "concept",
          "title": "Quantum Advantage and Its Limits",
          "content": "The speedup from algorithms like Grover's is called 'quantum advantage.' But why don't we use quantum computers for everything? The biggest challenge is 'noise' or 'decoherence.' Qubits are extremely fragile. Interactions with their environment can destroy their quantum state, causing errors in the calculation."
        },
        {
          "id": "quantum-computing-101-l04-c3",
          "kind": "recap",
          "title": "Algorithms and Real-World Challenges",
          "content": "In this lesson, we saw how quantum algorithms can solve certain problems much faster than classical ones. We used Grover's search algorithm as an example. We also learned that building fault-tolerant quantum computers is incredibly difficult due to the problem of quantum noise."
        }
      ],
      "flashcards": [
        {
          "id": "quantum-computing-101-l04-f1",
          "front": "Grover's Algorithm",
          "back": "A quantum search algorithm that provides a quadratic speedup over classical search for an unsorted database."
        },
        {
          "id": "quantum-computing-101-l04-f2",
          "front": "Quantum Advantage",
          "back": "The demonstrated ability of a quantum computer to solve a problem significantly faster than the best known classical computer."
        },
        {
          "id": "quantum-computing-101-l04-f3",
          "front": "Decoherence (Noise)",
          "back": "The loss of a qubit's quantum properties due to interaction with its environment. This is a major source of errors in quantum computation."
        }
      ]
    },
    {
      "id": "quantum-computing-101-l05",
      "title": "Quantum Computing Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [],
      "chunks": [
        {
          "id": "quantum-computing-101-l05-c1",
          "kind": "practice",
          "title": "Simulating Grover's Algorithm",
          "content": "In this interactive simulation, you will set up and run Grover's algorithm on a small database. Your goal is to find the marked item. You will build the circuit and see how the probability of measuring the correct answer increases with each step of the algorithm."
        },
        {
          "id": "quantum-computing-101-l05-c2",
          "kind": "recap",
          "title": "Analyzing the Results",
          "content": "After running the simulation, we'll look at the results. You'll see a graph showing the probability of measuring each item. The correct item will have the highest probability. We'll also introduce a 'noise' slider to see how environmental interference can corrupt the results and make the algorithm fail."
        }
      ],
      "interactiveActivities": [
        {
          "id": "quantum-computing-101-l05-act1",
          "type": "scenario_practice",
          "title": "Grover's Algorithm Simulator",
          "description": "Configure and run a simulation of Grover's search algorithm. See how noise affects the outcome.",
          "instructions": [
            "Select the size of the database (e.g., 4, 8, or 16 items).",
            "Run the simulation and observe the probability of finding the correct item.",
            "Adjust the 'noise' slider and run the simulation again to see how errors impact the result."
          ]
        },
        {
          "id": "quantum-computing-101-l05-act2",
          "type": "matching_pairs",
          "title": "Fighting Quantum Noise",
          "description": "Match the source of quantum noise to a potential mitigation strategy.",
          "pairs": [
            {
              "left": "Temperature fluctuations",
              "right": "Cryogenic cooling to near absolute zero"
            },
            {
              "left": "Stray electromagnetic fields",
              "right": "Shielding the quantum processor from the environment"
            },
            {
              "left": "Imperfections in gate operations",
              "right": "Quantum error correction codes"
            },
            {
              "left": "Vibrations",
              "right": "Isolating the computer on a stable platform"
            }
          ]
        }
      ]
    },
    {
      "id": "quantum-computing-101-l06",
      "title": "Checkpoint 2: Algorithms and Challenges",
      "type": "quiz",
      "duration": 10,
      "learningAids": [],
      "questions": [
        {
          "id": "quantum-computing-101-l06-q1",
          "text": "Grover's algorithm is most useful for which type of problem?",
          "skillId": "quantum-computing-101-skill-algorithms",
          "options": [
            {
              "id": "a",
              "text": "Sorting a list of numbers"
            },
            {
              "id": "b",
              "text": "Searching an unsorted database"
            },
            {
              "id": "c",
              "text": "Sending an email"
            },
            {
              "id": "d",
              "text": "Multiplying two large numbers"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Grover's algorithm provides a significant speedup for unstructured search problems."
        },
        {
          "id": "quantum-computing-101-l06-q2",
          "text": "What is the term for when a qubit loses its quantum state due to interacting with the environment?",
          "skillId": "quantum-computing-101-skill-noise",
          "options": [
            {
              "id": "a",
              "text": "Superposition"
            },
            {
              "id": "b",
              "text": "Entanglement"
            },
            {
              "id": "c",
              "text": "Decoherence"
            },
            {
              "id": "d",
              "text": "Computation"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Decoherence, or noise, is the process by which qubits lose their quantum properties, which is a major challenge for building quantum computers."
        },
        {
          "id": "quantum-computing-101-l06-q3",
          "text": "The term 'quantum advantage' means a quantum computer...",
          "skillId": "quantum-computing-101-skill-advantage",
          "options": [
            {
              "id": "a",
              "text": "is always better than a classical computer for all tasks."
            },
            {
              "id": "b",
              "text": "can solve a specific problem faster than the best classical computer."
            },
            {
              "id": "c",
              "text": "uses less electricity than a classical computer."
            },
            {
              "id": "d",
              "text": "is easier to program than a classical computer."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Quantum advantage is specific to certain problems where quantum algorithms provide a proven speedup."
        }
      ]
    },
    {
      "id": "quantum-computing-101-l07",
      "title": "The Future of Quantum: Impact and Ethics",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "quantum-computing-101-l07-a1",
          "type": "image",
          "title": "RSA Encryption Lock",
          "content": "A visual of a padlock with 'RSA' written on it, being shattered by a key labeled 'Shor's Algorithm'."
        }
      ],
      "chunks": [
        {
          "id": "quantum-computing-101-l07-c1",
          "kind": "concept",
          "title": "Quantum's Impact on Society",
          "content": "Quantum computers have the potential to revolutionize fields like medicine, materials science, and artificial intelligence. They could help us design new drugs and create more efficient batteries. But with great power comes great responsibility."
        },
        {
          "id": "quantum-computing-101-l07-c2",
          "kind": "concept",
          "title": "The Threat to Cryptography",
          "content": "One of the most famous quantum algorithms, Shor's Algorithm, is designed to factor large numbers. This is a task that is incredibly hard for classical computers. Unfortunately, most of the world's internet security, from banking to private messages, relies on the difficulty of factoring. A powerful quantum computer could break this encryption."
        },
        {
          "id": "quantum-computing-101-l07-c3",
          "kind": "recap",
          "title": "Building a Quantum-Safe Future",
          "content": "The threat to encryption is a serious ethical and security challenge. In this recap, we'll discuss the global effort to create new 'quantum-resistant' encryption methods that are safe from both classical and quantum computers. This ensures we can enjoy the benefits of quantum computing without compromising our digital security."
        }
      ],
      "flashcards": [
        {
          "id": "quantum-computing-101-l07-f1",
          "front": "Shor's Algorithm",
          "back": "A quantum algorithm for factoring integers, which poses a significant threat to current public-key cryptography systems like RSA."
        },
        {
          "id": "quantum-computing-101-l07-f2",
          "front": "RSA Encryption",
          "back": "A widely used cryptographic system for secure data transmission. Its security relies on the difficulty of factoring large numbers."
        },
        {
          "id": "quantum-computing-101-l07-f3",
          "front": "Quantum-Resistant Cryptography",
          "back": "New cryptographic algorithms that are being developed to be secure against attacks by both classical and quantum computers."
        }
      ]
    },
    {
      "id": "quantum-computing-101-l08",
      "title": "Capstone: Design a Quantum Application",
      "type": "interactive",
      "duration": 15,
      "learningAids": [],
      "chunks": [
        {
          "id": "quantum-computing-101-l08-c1",
          "kind": "practice",
          "title": "Project Brainstorm",
          "content": "For your capstone project, you will design a simple quantum application. Think about the concepts you've learned. Could you design a circuit to solve a simple puzzle? Or simulate a tiny molecule? In this activity, you'll brainstorm an idea and define its main objective."
        },
        {
          "id": "quantum-computing-101-l08-c2",
          "kind": "recap",
          "title": "Outlining Your Approach",
          "content": "Once you have an idea, you need a plan. How many qubits would you need? What sequence of gates would you apply? How would you interpret the results after measurement? This final step helps you think like a quantum programmer, combining all the skills you've learned in this module."
        }
      ],
      "interactiveActivities": [
        {
          "id": "quantum-computing-101-l08-act1",
          "type": "project_builder",
          "title": "Quantum Application Idea Pad",
          "description": "Outline a simple quantum application by defining its objective, required resources, and success criteria.",
          "instructions": [
            "Define your project's goal in one sentence.",
            "Estimate how many qubits you would need.",
            "List the key quantum gates you would use in your circuit.",
            "Describe what a successful outcome would look like after measurement."
          ]
        },
        {
          "id": "quantum-computing-101-l08-act2",
          "type": "debate_simulator",
          "title": "Peer Review Simulation",
          "description": "Present your capstone idea and receive simulated feedback on its feasibility and potential challenges."
        }
      ]
    }
  ]
};
