import type { LearningModule } from "@/lib/modules/types";

export const quantum_computing_401_Module: LearningModule = {
  "id": "quantum-computing-401",
  "title": "Quantum Computing Leadership and Capstone",
  "description": "An advanced curriculum in Quantum Computing focused on qubit state modeling, quantum circuit design, noise and error mitigation, and algorithmic advantage evaluation. This module uses case analysis, simulation, and a capstone project to build leadership skills.",
  "subject": "Computer Science",
  "tags": [
    "quantum",
    "computing",
    "advanced",
    "capstone",
    "algorithms"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Model qubit states using Dirac notation and Bloch sphere visualization.",
    "Design and simulate multi-qubit quantum circuits to implement core algorithms.",
    "Analyze the impact of noise on quantum computations and apply error mitigation techniques.",
    "Evaluate the trade-offs between quantum and classical approaches for specific problems.",
    "Assess the ethical and policy implications of emerging quantum technologies.",
    "Develop and defend a capstone project proposal that demonstrates technical and strategic mastery."
  ],
  "lessons": [
    {
      "id": "quantum-computing-401-l01",
      "title": "Advanced Principles of Quantum Systems",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "quantum-computing-401-l01-a1",
          "type": "image",
          "title": "The Bloch Sphere",
          "content": "A 3D visualization of a single qubit's state space, showing the basis states |0⟩ and |1⟩ at the poles and superposition states on the surface."
        }
      ],
      "chunks": [
        {
          "id": "quantum-computing-401-l01-c1",
          "kind": "concept",
          "title": "Mathematical Foundations",
          "content": "This lesson establishes the mathematical language for advanced quantum computing. We will review key concepts such as Hilbert spaces, Dirac notation (bra-ket notation) for representing quantum states, and tensor products for combining multi-qubit systems. Mastery of these concepts is essential for describing and manipulating quantum information."
        },
        {
          "id": "quantum-computing-401-l01-c2",
          "kind": "concept",
          "title": "Modeling Qubit States and Superposition",
          "content": "Explore the fundamental properties of a qubit. We will model qubit states as vectors and visualize them on the Bloch sphere. This section covers the principles of superposition, allowing a qubit to exist in a combination of |0⟩ and |1⟩, and phase, a critical component for quantum interference."
        },
        {
          "id": "quantum-computing-401-l01-c3",
          "kind": "recap",
          "title": "Quantum Gates and Circuit Fundamentals",
          "content": "Recap of the building blocks of quantum algorithms: quantum gates. We will review common single-qubit gates like the Pauli-X (NOT), Hadamard, and phase gates, and the essential two-qubit CNOT gate. Understanding how these gates transform qubit states is the first step toward designing complex quantum circuits."
        }
      ],
      "flashcards": [
        {
          "id": "quantum-computing-401-l01-f1",
          "front": "Dirac Notation",
          "back": "A standard notation for quantum states, using bras (⟨ψ|) and kets (|ψ⟩) to represent vectors in a complex vector space."
        },
        {
          "id": "quantum-computing-401-l01-f2",
          "front": "Bloch Sphere",
          "back": "A geometric representation of the pure state space of a single qubit, useful for visualizing state transformations via quantum gates."
        },
        {
          "id": "quantum-computing-401-l01-f3",
          "front": "CNOT Gate",
          "back": "The Controlled-NOT gate is a two-qubit operation that flips the target qubit if and only if the control qubit is in the state |1⟩. It is crucial for creating entanglement."
        }
      ]
    },
    {
      "id": "quantum-computing-401-l02",
      "title": "Quantum Circuit Design and Simulation",
      "type": "interactive",
      "duration": 20,
      "learningAids": [
        {
          "id": "quantum-computing-401-l02-a1",
          "type": "image",
          "title": "Quantum Circuit Diagram",
          "content": "A visual representation of a quantum algorithm, showing horizontal lines for qubits, boxes for quantum gates, and symbols for measurement operations."
        }
      ],
      "chunks": [
        {
          "id": "quantum-computing-401-l02-c1",
          "kind": "practice",
          "title": "Building an Entangled State",
          "content": "In this interactive lab, you will construct a quantum circuit to create a Bell state, a simple form of quantum entanglement. You will use a Hadamard gate followed by a CNOT gate. You will then run the circuit in a simulator to observe the correlated measurement outcomes, a hallmark of entanglement."
        },
        {
          "id": "quantum-computing-401-l02-c2",
          "kind": "recap",
          "title": "Analyzing Circuit Results",
          "content": "After running a simulation, the results must be interpreted. This recap covers how to analyze measurement outcomes, which are probabilistic. We will discuss how to read histograms of measurement counts and calculate the probabilities of observing each basis state, connecting theoretical predictions to simulated results."
        }
      ],
      "interactiveActivities": [
        {
          "id": "quantum-computing-401-l02-act1",
          "type": "matching_pairs",
          "title": "Gate to Transformation Matching",
          "description": "Match each quantum gate to its effect on a qubit starting in the |0⟩ state.",
          "pairs": [
            {
              "left": "Hadamard (H)",
              "right": "Creates an equal superposition state: |+⟩"
            },
            {
              "left": "Pauli-X (X)",
              "right": "Flips the state to |1⟩ (a bit-flip)"
            },
            {
              "left": "Pauli-Z (Z)",
              "right": "Applies a phase flip, leaving the state as |0⟩"
            },
            {
              "left": "Identity (I)",
              "right": "Leaves the state unchanged as |0⟩"
            }
          ]
        },
        {
          "id": "quantum-computing-401-l02-act2",
          "type": "sorting_buckets",
          "title": "Circuit Building Sequence",
          "description": "Place the steps in the correct order to design and run a quantum circuit simulation.",
          "buckets": [
            "Step 1",
            "Step 2",
            "Step 3",
            "Step 4"
          ],
          "items": [
            {
              "text": "Initialize qubits to the |0⟩ state.",
              "bucket": "Step 1"
            },
            {
              "text": "Apply a sequence of quantum gates.",
              "bucket": "Step 2"
            },
            {
              "text": "Perform a measurement on one or more qubits.",
              "bucket": "Step 3"
            },
            {
              "text": "Execute on a simulator and collect statistics.",
              "bucket": "Step 4"
            }
          ]
        }
      ]
    },
    {
      "id": "quantum-computing-401-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [],
      "questions": [
        {
          "id": "quantum-computing-401-l03-q1",
          "text": "What is the primary function of a Hadamard gate in a quantum circuit?",
          "skillId": "quantum-computing-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "To entangle two qubits together."
            },
            {
              "id": "b",
              "text": "To create a superposition of the |0⟩ and |1⟩ states."
            },
            {
              "id": "c",
              "text": "To measure the final state of a qubit."
            },
            {
              "id": "d",
              "text": "To flip a qubit's state from |0⟩ to |1⟩."
            }
          ],
          "correctOptionId": "b",
          "explanation": "The Hadamard gate is the fundamental tool for creating superposition, transforming a basis state like |0⟩ into an equal superposition state |+⟩."
        },
        {
          "id": "quantum-computing-401-l03-q2",
          "text": "Which tool is used to visualize the state of a single qubit?",
          "skillId": "quantum-computing-401-skill-level",
          "options": [
            {
              "id": "a",
              "text": "A histogram"
            },
            {
              "id": "b",
              "text": "A quantum circuit diagram"
            },
            {
              "id": "c",
              "text": "The Bloch Sphere"
            },
            {
              "id": "d",
              "text": "A truth table"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The Bloch Sphere is a 3D sphere where any point on the surface represents a possible pure state of a single qubit."
        },
        {
          "id": "quantum-computing-401-l03-q3",
          "text": "What is required to create an entangled Bell state from two qubits initialized to |00⟩?",
          "skillId": "quantum-computing-401-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "A Hadamard gate on the first qubit, followed by a CNOT gate targeting the second."
            },
            {
              "id": "b",
              "text": "A Pauli-X gate on both qubits."
            },
            {
              "id": "c",
              "text": "A CNOT gate followed by a Hadamard gate."
            },
            {
              "id": "d",
              "text": "Two Hadamard gates, one on each qubit."
            }
          ],
          "correctOptionId": "a",
          "explanation": "This specific sequence (Hadamard then CNOT) is the standard circuit for generating a Bell state, which is the simplest form of two-qubit entanglement."
        }
      ]
    },
    {
      "id": "quantum-computing-401-l04",
      "title": "Case Study: Noise and Error Mitigation",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "quantum-computing-401-l04-a1",
          "type": "image",
          "title": "Ideal vs. Noisy Simulation",
          "content": "A side-by-side comparison of result histograms. The ideal simulation shows clean 50/50 probabilities, while the noisy simulation shows skewed results with small probabilities for incorrect states."
        }
      ],
      "chunks": [
        {
          "id": "quantum-computing-401-l04-c1",
          "kind": "example",
          "title": "Case Context: VQE for Molecular Simulation",
          "content": "This case study examines a hybrid quantum-classical algorithm: the Variational Quantum Eigensolver (VQE), used to find the ground state energy of a simple molecule like H₂. The challenge is that today's quantum computers are 'noisy,' meaning environmental factors and imperfect gates introduce errors. We will analyze the trade-offs between running on a noisy quantum processor versus using a less precise but stable classical method."
        },
        {
          "id": "quantum-computing-401-l04-c2",
          "kind": "concept",
          "title": "Understanding Quantum Noise",
          "content": "We introduce common types of noise in quantum systems. Decoherence is the loss of quantum information to the environment, while gate errors are imperfections in the physical operations on qubits. We will discuss how these noise sources corrupt the computation and lead to inaccurate results, deviating from ideal simulations."
        },
        {
          "id": "quantum-computing-401-l04-c3",
          "kind": "recap",
          "title": "Introduction to Error Mitigation",
          "content": "While full fault-tolerant quantum computing is years away, we can mitigate some errors. This recap introduces techniques like readout error mitigation, which corrects for errors during the measurement process, and zero-noise extrapolation, which involves running a circuit at different noise levels to estimate the ideal, noise-free result. These methods help us get more accurate answers from today's hardware."
        }
      ],
      "flashcards": [
        {
          "id": "quantum-computing-401-l04-f1",
          "front": "Variational Quantum Eigensolver (VQE)",
          "back": "A hybrid quantum-classical algorithm that uses a quantum computer to prepare a trial state and a classical computer to optimize its parameters."
        },
        {
          "id": "quantum-computing-401-l04-f2",
          "front": "Quantum Noise",
          "back": "Unwanted interactions and imperfections that corrupt quantum states, leading to computational errors. Key types include decoherence and gate errors."
        },
        {
          "id": "quantum-computing-401-l04-f3",
          "front": "Error Mitigation",
          "back": "Techniques used to reduce the impact of noise on calculations performed on near-term quantum devices, without implementing full error correction."
        }
      ]
    },
    {
      "id": "quantum-computing-401-l05",
      "title": "Quantum Algorithm Simulation Studio",
      "type": "interactive",
      "duration": 20,
      "learningAids": [],
      "chunks": [
        {
          "id": "quantum-computing-401-l05-c1",
          "kind": "practice",
          "title": "Simulating Grover's Algorithm",
          "content": "In this simulation, you will explore Grover's search algorithm, a quantum algorithm providing a quadratic speedup for unstructured search problems. You will first run an ideal simulation to find a marked item in a small database. Then, you will introduce a noise model (e.g., depolarizing noise) and observe how the probability of finding the correct item decreases as noise levels increase."
        },
        {
          "id": "quantum-computing-401-l05-c2",
          "kind": "recap",
          "title": "Simulation Debrief: Quantifying Noise Impact",
          "content": "After the simulation, we will analyze the results. We will compare the success probability of Grover's algorithm in the ideal versus the noisy runs. This debrief focuses on how to quantify the performance degradation due to noise and discuss why certain algorithms are more or less resilient to different types of errors, a key consideration for designing algorithms for near-term hardware."
        }
      ],
      "interactiveActivities": [
        {
          "id": "quantum-computing-401-l05-act1",
          "type": "scenario_practice",
          "title": "Noise Model Impact Simulation",
          "description": "Run a simulation of Grover's algorithm for a 3-qubit search space. Adjust the level of depolarizing noise and observe its effect on the final measurement probabilities. Identify the noise threshold where the algorithm no longer provides an advantage.",
          "instructions": [
            "Run the simulation with zero noise to establish a baseline success probability.",
            "Incrementally increase the noise parameter and re-run the simulation.",
            "Record the success probability at each noise level and plot the results."
          ]
        },
        {
          "id": "quantum-computing-401-l05-act2",
          "type": "matching_pairs",
          "title": "Error Source Identification",
          "description": "Match the observed error in a quantum computation to its likely physical cause.",
          "pairs": [
            {
              "left": "A qubit state decays from |1⟩ to |0⟩ over time.",
              "right": "Decoherence (T1 relaxation)"
            },
            {
              "left": "A NOT gate under-rotates the qubit on the Bloch sphere.",
              "right": "Gate Error (Imperfect pulse calibration)"
            },
            {
              "left": "Measuring a |0⟩ state sometimes returns a '1' result.",
              "right": "Readout Error (Measurement infidelity)"
            },
            {
              "left": "Two-qubit gate performance is worse than single-qubit gates.",
              "right": "Crosstalk (Unwanted interaction between qubits)"
            }
          ]
        }
      ]
    },
    {
      "id": "quantum-computing-401-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [],
      "questions": [
        {
          "id": "quantum-computing-401-l06-q1",
          "text": "In the context of VQE, what is the primary role of the classical computer?",
          "skillId": "quantum-computing-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "To prepare the initial quantum state."
            },
            {
              "id": "b",
              "text": "To apply the quantum gates to the qubits."
            },
            {
              "id": "c",
              "text": "To run a classical optimization loop to update the circuit parameters."
            },
            {
              "id": "d",
              "text": "To model the effects of quantum noise."
            }
          ],
          "correctOptionId": "c",
          "explanation": "VQE is a hybrid algorithm where the quantum computer prepares and measures a state, while the classical computer uses those measurements to optimize the parameters for the next quantum run."
        },
        {
          "id": "quantum-computing-401-l06-q2",
          "text": "What is the general goal of quantum error mitigation?",
          "skillId": "quantum-computing-401-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To build perfectly error-free quantum computers."
            },
            {
              "id": "b",
              "text": "To reduce the impact of noise and get a better estimate of the ideal result."
            },
            {
              "id": "c",
              "text": "To replace quantum algorithms with classical ones."
            },
            {
              "id": "d",
              "text": "To increase the number of qubits in a processor."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Error mitigation techniques aim to compensate for the effects of noise in near-term quantum devices, allowing for more accurate computations without requiring full fault tolerance."
        },
        {
          "id": "quantum-computing-401-l06-q3",
          "text": "If a noisy simulation of Grover's algorithm shows a nearly uniform probability distribution over all outcomes, what does this imply?",
          "skillId": "quantum-computing-401-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "The algorithm is working perfectly."
            },
            {
              "id": "b",
              "text": "The noise is so high that the quantum state has decohered into a random classical state."
            },
            {
              "id": "c",
              "text": "The search problem was too easy."
            },
            {
              "id": "d",
              "text": "The simulation needs more qubits."
            }
          ],
          "correctOptionId": "b",
          "explanation": "High levels of noise destroy the delicate superposition and interference needed for the algorithm to work, causing the output to resemble a random guess."
        }
      ]
    },
    {
      "id": "quantum-computing-401-l07",
      "title": "Quantum Computing Policy and Ethics",
      "type": "video",
      "duration": 12,
      "learningAids": [],
      "chunks": [
        {
          "id": "quantum-computing-401-l07-c1",
          "kind": "concept",
          "title": "Societal Impact: Cryptography and Security",
          "content": "We examine the most well-known societal impact of quantum computing: its ability to break current encryption standards using Shor's algorithm. This section discusses the threat to global data security and the simultaneous development of quantum-resistant cryptography. We will analyze the timeline and stakeholders involved, from governments to private industry."
        },
        {
          "id": "quantum-computing-401-l07-c2",
          "kind": "concept",
          "title": "Ethical Considerations in Quantum Advantage",
          "content": "As quantum computers achieve 'quantum advantage' in fields like finance, medicine, and materials science, who will benefit? This section explores ethical questions of equitable access, accountability for quantum AI, and the potential for quantum computing to exacerbate existing societal inequalities. We will discuss frameworks for responsible quantum development."
        },
        {
          "id": "quantum-computing-401-l07-c3",
          "kind": "recap",
          "title": "A Checklist for Responsible Innovation",
          "content": "This recap provides a practical checklist for quantum developers and leaders. It includes questions to consider during a project's lifecycle, such as: 'What are the potential dual uses of this technology?', 'How can we be transparent about the limitations and uncertainties of our results?', and 'Who should be included in the conversation about this technology's deployment?'"
        }
      ],
      "flashcards": [
        {
          "id": "quantum-computing-401-l07-f1",
          "front": "Shor's Algorithm",
          "back": "A quantum algorithm for integer factorization, which poses a significant threat to widely used public-key cryptography systems like RSA."
        },
        {
          "id": "quantum-computing-401-l07-f2",
          "front": "Quantum-Resistant Cryptography (QRC)",
          "back": "Cryptographic algorithms, also known as post-quantum cryptography, that are thought to be secure against attack by both classical and quantum computers."
        },
        {
          "id": "quantum-computing-401-l07-f3",
          "front": "Responsible Quantum Development",
          "back": "An approach to building quantum technology that proactively considers its ethical, societal, and security implications to ensure it benefits humanity."
        }
      ]
    },
    {
      "id": "quantum-computing-401-l08",
      "title": "Capstone Project Planning Lab",
      "type": "interactive",
      "duration": 25,
      "learningAids": [],
      "chunks": [
        {
          "id": "quantum-computing-401-l08-c1",
          "kind": "practice",
          "title": "Developing a Capstone Charter",
          "content": "In this lab, you will define a charter for your capstone project. You will select a problem, such as implementing the Quantum Approximate Optimization Algorithm (QAOA) for a small graph problem. Your charter must define a clear objective, specify the success metrics (e.g., approximation ratio), identify key risks (e.g., noise impact), and outline your analysis plan."
        },
        {
          "id": "quantum-computing-401-l08-c2",
          "kind": "recap",
          "title": "Preparing a Defensible Recommendation",
          "content": "A key leadership skill is defending your technical and strategic choices. This recap focuses on preparing for a project defense. You will learn to anticipate and prepare responses to critical questions from technical, policy, and business perspectives, ensuring your recommendations are robust and well-supported by evidence from your analysis and simulations."
        }
      ],
      "interactiveActivities": [
        {
          "id": "quantum-computing-401-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with objectives, metrics, risks, and an analysis plan for a small quantum algorithm project.",
          "instructions": [
            "Define a specific, measurable objective (e.g., 'Solve the Max-Cut problem for a 4-node weighted graph using QAOA').",
            "List at least two success metrics (e.g., 'Achieve an approximation ratio of 0.8', 'Compare performance on a simulator vs. noisy hardware').",
            "Identify a primary technical risk and a proposed mitigation strategy."
          ]
        },
        {
          "id": "quantum-computing-401-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Panel",
          "description": "Defend your capstone project proposal against critical questions from a simulated review panel.",
          "instructions": [
            "Prepare a 2-minute summary of your project charter.",
            "Respond to a technical objection, such as 'How will your circuit depth scale with larger problems?'",
            "Respond to a strategic objection, such as 'What is the practical value of this result given the limitations of current hardware?'"
          ]
        }
      ]
    }
  ]
};
