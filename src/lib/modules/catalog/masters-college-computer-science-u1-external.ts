import type { LearningModule } from "@/lib/modules/types";

export const MastersCollegeComputerScienceU1ExternalModule: LearningModule = {
  "id": "masters-college-computer-science-u1-external",
  "title": "College Computer Science (Master's Level)",
  "description": "College Computer Science curriculum from 1 open-source datasets. MMLU (cais/mmlu).",
  "subject": "Science",
  "lessons": [
    {
      "id": "masters-college-computer-science-u1-external-l01",
      "title": "College Computer Science — Quiz 1",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-f722137b46e18ebd",
          "text": "The access matrix approach to protection has the difficulty that",
          "options": [
            {
              "id": "opt-A",
              "text": "the matrix, if stored directly, is large and can be clumsy to manage"
            },
            {
              "id": "opt-B",
              "text": "it is not capable of expressing complex protection requirements"
            },
            {
              "id": "opt-C",
              "text": "deciding whether a process has access to a resource is undecidable"
            },
            {
              "id": "opt-D",
              "text": "there is no way to express who has rights to change the access matrix itself"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-a7ac889324709525",
          "text": "An integer c is a common divisor of two integers x and y if and only if c is a divisor of x and c is a divisor of y. Which of the following sets of integers could possibly be the set of all common divisors of two integers?",
          "options": [
            {
              "id": "opt-A",
              "text": "{-6,-2, -1, 1, 2, 6}"
            },
            {
              "id": "opt-B",
              "text": "{-6, -2, -1, 0, 1, 2, 6}"
            },
            {
              "id": "opt-C",
              "text": "{-6, -3, -2, -1, 1, 2, 3, 6}"
            },
            {
              "id": "opt-D",
              "text": "{-6, -3, -2, -1, 0, 1, 2, 3, 6}"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-1c349b946769acd5",
          "text": "In the NoNicks operating system, the time required by a single file-read operation has four nonoverlapping components:\ndisk seek time-25 msec\ndisk latency time-8 msec\ndisk transfer time- 1 msec per 1,000 bytes\noperating system overhead-1 msec per 1,000 bytes + 10 msec\nIn version 1 of the system, the file read retrieved blocks of 1,000 bytes. In version 2, the file read (along with the underlying layout on disk) was modified to retrieve blocks of 4,000 bytes. The ratio of-the time required to read a large file under version 2 to the time required to read the same large file under version 1 is approximately",
          "options": [
            {
              "id": "opt-A",
              "text": "1:4"
            },
            {
              "id": "opt-B",
              "text": "1:3.5"
            },
            {
              "id": "opt-C",
              "text": "1:1"
            },
            {
              "id": "opt-D",
              "text": "1.1:1"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-2d9134e4a1ea43d8",
          "text": "You want to cluster 7 points into 3 clusters using the k-Means Clustering algorithm. Suppose after the first iteration, clusters C1, C2 and C3 contain the following two-dimensional points: C1 contains the 2 points: {(0,6), (6,0)} C2 contains the 3 points: {(2,2), (4,4), (6,6)} C3 contains the 2 points: {(5,5), (7,7)} What are the cluster centers computed for these 3 clusters?",
          "options": [
            {
              "id": "opt-A",
              "text": "C1: (3,3), C2: (4,4), C3: (6,6)"
            },
            {
              "id": "opt-B",
              "text": "C1: (3,3), C2: (6,6), C3: (12,12)"
            },
            {
              "id": "opt-C",
              "text": "C1: (6,6), C2: (12,12), C3: (12,12)"
            },
            {
              "id": "opt-D",
              "text": "C1: (0,0), C2: (48,48), C3: (35,35)"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-0f48d9ba6896ea56",
          "text": "Any set of Boolean operators that is sufficient to represent all Boolean expressions is said to be complete. Which of the following is NOT complete?",
          "options": [
            {
              "id": "opt-A",
              "text": "{AND, NOT}"
            },
            {
              "id": "opt-B",
              "text": "{NOT, OR}"
            },
            {
              "id": "opt-C",
              "text": "{AND, OR}"
            },
            {
              "id": "opt-D",
              "text": "{NAND}"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-b2f016fc47861015",
          "text": "Consider the collection of all undirected graphs with 10 nodes and 6 edges. Let M and m, respectively, be the maximum and minimum number of connected components in any graph in the collection. If a graph has no selfloops and there is at most one edge between any pair of nodes, which of the following is true?",
          "options": [
            {
              "id": "opt-A",
              "text": "M = 10, m = 10"
            },
            {
              "id": "opt-B",
              "text": "M = 10, m = 1"
            },
            {
              "id": "opt-C",
              "text": "M = 7, m = 4"
            },
            {
              "id": "opt-D",
              "text": "M = 6, m = 4"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-1774a283ecdb8f90",
          "text": "Resolution theorem proving for showing that a formula of propositional logic is not satisfiable has which of the following properties?\nI. It is a sound proof system in the sense that there does not exist a proof of the unsatisfiability of a satisfiable formula of propositional logic.\nII. It is a complete proof system in the sense that there is a proof of unsatisfiability for every unsa tisfiable formula of propositional logic.\nIII. It is a succinct proof system in the sense that whenever an unsatisfiable formula F of propositional logic has a resolution proof, F also has a proof whose length is polynomial in the length of F.",
          "options": [
            {
              "id": "opt-A",
              "text": "I only"
            },
            {
              "id": "opt-B",
              "text": "III only"
            },
            {
              "id": "opt-C",
              "text": "I and II only"
            },
            {
              "id": "opt-D",
              "text": "I and III only"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-95923937e92a8b10",
          "text": "Which of the following statements describe(s) properties of a purely segmented memory system?\nI. It divides memory into units of equal size.\nII. It permits implementation of virtual memory.\nIII. It suffers from internal fragmentation.",
          "options": [
            {
              "id": "opt-A",
              "text": "I only"
            },
            {
              "id": "opt-B",
              "text": "II only"
            },
            {
              "id": "opt-C",
              "text": "III only"
            },
            {
              "id": "opt-D",
              "text": "I and III"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-fac154b592d10b8c",
          "text": "Which of the following statements about floating-point arithmetic is NOT true?",
          "options": [
            {
              "id": "opt-A",
              "text": "It is inherently nonassociative because some numbers have no exact representation."
            },
            {
              "id": "opt-B",
              "text": "It is inherently nonassociative because there have to be upper and lower bounds on the size of numbers."
            },
            {
              "id": "opt-C",
              "text": "Associativity can be achieved with appropriate roundoff conventions."
            },
            {
              "id": "opt-D",
              "text": "Some rational numbers have no exact representation."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-711ce224e2211fed",
          "text": "Suppose sharing of tiles in a multilevel directory structure is achieved with directory entries that are links pointing to a node containing information about a shared file. Information in this node includes (1) the owner of the file, (2) a count of the number of links to the tile, and (3) the disk block numbers of the file. What is a primary drawback to this approach to sharing?",
          "options": [
            {
              "id": "opt-A",
              "text": "If the owner modifies the file, another user who does not share will see the changes."
            },
            {
              "id": "opt-B",
              "text": "If the owner renames the file, other users will not be able to access it."
            },
            {
              "id": "opt-C",
              "text": "If the owner is allowed to delete a file, dangling links may result."
            },
            {
              "id": "opt-D",
              "text": "If any user who shares the file appends to it, others who share it will not be able to access the new disk blocks."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-e43a9fbf44e52b96",
          "text": "Mergesort works by splitting a list of n numbers in half, sorting each half recursively, and merging the two halves. Which of the following data structures will allow mergesort to work in O(n log n) time?\nI. A singly linked list\nII. A doubly linked list\nIII. An array",
          "options": [
            {
              "id": "opt-A",
              "text": "None"
            },
            {
              "id": "opt-B",
              "text": "III only"
            },
            {
              "id": "opt-C",
              "text": "I and II only"
            },
            {
              "id": "opt-D",
              "text": "I, II, and III"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-46e93d2ec3fe374c",
          "text": "If p(x) is the minimal-degree interpolating polynomial for the real-valued function f(x) at the n + 1 distinct real numbers x0, .... xn what is the maximum possible degree of p(x)?",
          "options": [
            {
              "id": "opt-A",
              "text": "n"
            },
            {
              "id": "opt-B",
              "text": "n + 1"
            },
            {
              "id": "opt-C",
              "text": "n + 2"
            },
            {
              "id": "opt-D",
              "text": "2n"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-4e14d91cb2c47807",
          "text": "An internal hash table has 5 buckets, numbered 0, 1, 2, 3, 4. Keys are integers, and the hash function h(i) = i mod 5 is used, with linear resolution of collisions (i.e., if bucket h(i) is filled, the buckets h(i) + 1, h(i) + 2, ... are tried successively with all bucket numbers computed modulo 5). If elements with keys 13, 8, 24, 10, and 3 are inserted, m that order, into an initially blank hash table, then the content of the bucket numbered 2 is",
          "options": [
            {
              "id": "opt-A",
              "text": "3"
            },
            {
              "id": "opt-B",
              "text": "8"
            },
            {
              "id": "opt-C",
              "text": "10"
            },
            {
              "id": "opt-D",
              "text": "13"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-f25fe14aa9755b7c",
          "text": "TCP protocol is responsible (among other things) for",
          "options": [
            {
              "id": "opt-A",
              "text": "Routing packets through the network"
            },
            {
              "id": "opt-B",
              "text": "Reliable delivery of packets between directly connected machines"
            },
            {
              "id": "opt-C",
              "text": "Reliable delivery of large (multi-packet) messages between machines that are not necessarily directly connected"
            },
            {
              "id": "opt-D",
              "text": "Dealing with differences among operating system architectures"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-4915d4be3a7104a9",
          "text": "Let A and B be two sets of words (strings) from Σ*, for some alphabet of symbols Σ. Suppose that B is a subset of A. Which of the following statements must always be true of A and B ?\nI. If A is finite, then B is finite.\nII. If A is regular, then B is regular.\nIII. If A is context-free, then B is context-free.",
          "options": [
            {
              "id": "opt-A",
              "text": "I only"
            },
            {
              "id": "opt-B",
              "text": "II only"
            },
            {
              "id": "opt-C",
              "text": "III only"
            },
            {
              "id": "opt-D",
              "text": "I and II only"
            }
          ],
          "correctOptionId": "opt-A"
        }
      ]
    },
    {
      "id": "masters-college-computer-science-u1-external-l02",
      "title": "College Computer Science — Quiz 2",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-9c75e2959bc6d455",
          "text": "For all strings x, the function x^M is defined recursively as follows.\ne^M= e, and\nif w is a string and a is a string with length 1, then\n(aw)^M = aw^Ma.\nLet a be a string with length 1, and let x and y be arbitrary strings. Which of the following is true?",
          "options": [
            {
              "id": "opt-A",
              "text": "a^M = a"
            },
            {
              "id": "opt-B",
              "text": "(ax)^M = (xa)^M"
            },
            {
              "id": "opt-C",
              "text": "(xy)^M = y^Mx^M"
            },
            {
              "id": "opt-D",
              "text": "None of the above"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-f60e012bdd389bf7",
          "text": "Which of the following is NOT a reasonable justification for choosing to busy-wait on an asynchronous event?",
          "options": [
            {
              "id": "opt-A",
              "text": "The wait is expected to be short."
            },
            {
              "id": "opt-B",
              "text": "A busy-wait loop is easier to code than an interrupt handler."
            },
            {
              "id": "opt-C",
              "text": "There is no other work for the processor to do."
            },
            {
              "id": "opt-D",
              "text": "The program executes on a time-sharing system."
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-cbd27ddfdcaf884b",
          "text": "The language {ww | w in (0 + 1)*} is",
          "options": [
            {
              "id": "opt-A",
              "text": "not accepted by any Turing machine"
            },
            {
              "id": "opt-B",
              "text": "accepted by some Turing machine, but by no pushdown automaton"
            },
            {
              "id": "opt-C",
              "text": "accepted by some pushdown automaton, but not context-free"
            },
            {
              "id": "opt-D",
              "text": "context-free, but not regular"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-abeff97352bb2aea",
          "text": "Which of the following statements about Ethernets is typically FALSE?",
          "options": [
            {
              "id": "opt-A",
              "text": "Ethernets use circuit switching to send messages."
            },
            {
              "id": "opt-B",
              "text": "Ethernets use buses with multiple masters."
            },
            {
              "id": "opt-C",
              "text": "Ethernet protocols use a collision-detection method to ensure that messages are transmitted properly."
            },
            {
              "id": "opt-D",
              "text": "Networks connected by Ethernets are limited in length to a few hundred meters."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-41614fca8b574a71",
          "text": "Let P be a procedure that for some inputs calls itself (i.e., is recursive). If P is guaranteed to terminate, which of the following statements must be true?\nI. P has a local variable.\nII. P has an execution path where it does not call itself.\nIII. P either refers to a global variable or has at least one parameter.",
          "options": [
            {
              "id": "opt-A",
              "text": "I only"
            },
            {
              "id": "opt-B",
              "text": "II only"
            },
            {
              "id": "opt-C",
              "text": "I and II only"
            },
            {
              "id": "opt-D",
              "text": "II and III only"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-58946b4933dd513f",
          "text": "Which of the following comes closest to being a perfectly secure encryption scheme?",
          "options": [
            {
              "id": "opt-A",
              "text": "The Caesar Cipher, a substitution cipher"
            },
            {
              "id": "opt-B",
              "text": "DES (Data Encryption Standard), a symmetric-key algorithm"
            },
            {
              "id": "opt-C",
              "text": "Enigma, a transposition cipher"
            },
            {
              "id": "opt-D",
              "text": "One-time pad"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-fda980201896af01",
          "text": "Of the following problems concerning a given undirected graph G, which is currently known to be solvable in polynomial time?",
          "options": [
            {
              "id": "opt-A",
              "text": "Finding a longest simple cycle in G"
            },
            {
              "id": "opt-B",
              "text": "Finding a shortest cycle in G"
            },
            {
              "id": "opt-C",
              "text": "Finding ALL spanning trees of G"
            },
            {
              "id": "opt-D",
              "text": "Finding a largest clique in G"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-5d4e08986a55a38e",
          "text": "The IP protocol is primarily concerned with",
          "options": [
            {
              "id": "opt-A",
              "text": "Routing packets through the network"
            },
            {
              "id": "opt-B",
              "text": "Reliable delivery of packets between directly connected machines"
            },
            {
              "id": "opt-C",
              "text": "Reliable delivery of large (multi-packet) messages between machines that are not necessarily directly connected"
            },
            {
              "id": "opt-D",
              "text": "Dealing with differences among operating system architectures"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-fd37a25fdee687fd",
          "text": "Of the following, which best approximates the ratio of the number of nonterminal nodes to the total number of nodes in a complete K-ary tree of depth N?",
          "options": [
            {
              "id": "opt-A",
              "text": "1/K"
            },
            {
              "id": "opt-B",
              "text": "K-1/K"
            },
            {
              "id": "opt-C",
              "text": "log_10 (1/N)"
            },
            {
              "id": "opt-D",
              "text": "N-1/m"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-eefea26dc49c8658",
          "text": "Consider a computer system in which processes can request and release one or more resources. Once a process has been granted a resource, the process has exclusive use of that resource until it is released. If a process requests a resource that is already in use, the process enters a queue for that resource, waiting until the resource is available. Which of the following will NOT deal effectively with the problem of deadlock?",
          "options": [
            {
              "id": "opt-A",
              "text": "Giving priorities to processes and ordering the wait queues by priority"
            },
            {
              "id": "opt-B",
              "text": "Having a process request all its required resources when it first begins, and restarting if it cannot obtain them all"
            },
            {
              "id": "opt-C",
              "text": "Numbering the resources and requiring that processes request resources in order of increasing number"
            },
            {
              "id": "opt-D",
              "text": "Having processes time out and restart after a random interval of waiting"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-e783206280a14c11",
          "text": "\"Magic memory\"' has two operations: Read and Clear. Both are indivisible and mutually exclusive. Clear sets the magic memory to zero. Read returns a value that represents the number of Read operations since the last Clear operation. Which of the following is (are) true of \"Magic memory\"?\nI. It can provide the functionality of an atomic Test-and-Set.\nII. It can be used to coordinate processes running on a shared-memory multiprocessor.\nIII. It is only useful on a multiprocessor.",
          "options": [
            {
              "id": "opt-A",
              "text": "I only"
            },
            {
              "id": "opt-B",
              "text": "II only"
            },
            {
              "id": "opt-C",
              "text": "III only"
            },
            {
              "id": "opt-D",
              "text": "I and II"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-30293c5761c82770",
          "text": "Which of the following is the name of the data structure in a compiler that is responsible for managing information about variables and their attributes?",
          "options": [
            {
              "id": "opt-A",
              "text": "Abstract Syntax Tree (AST)"
            },
            {
              "id": "opt-B",
              "text": "Attribute Grammar"
            },
            {
              "id": "opt-C",
              "text": "Symbol Table"
            },
            {
              "id": "opt-D",
              "text": "Semantic Stack"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-de13177f0aed930c",
          "text": "Which of the following algorithms has running time Θ(n^2) in the worst case but Θ(n log n) on average?",
          "options": [
            {
              "id": "opt-A",
              "text": "Bubblesort"
            },
            {
              "id": "opt-B",
              "text": "Mergesort"
            },
            {
              "id": "opt-C",
              "text": "Heapsort"
            },
            {
              "id": "opt-D",
              "text": "Quicksort"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-96dee29da8cdcb12",
          "text": "Languages with a structure that implements abstract data types (e.g., a C++ class) can prevent access to components of this structure by all operations except those that are part of this structure. However, definitions of such a structure often contain declarations of components of the structure (e.g., the header file for a C++ class may contain declarations of its private components). For such a language, an object's name could be bound at run time to stack storage for its component values (direct representation) or to a stack pointer referencing heap storage for its component values (indirect representation). Which of the following statements about comparisons between direct and indirect representations is (are) true?\nI. Indirect representation noticeably increases compilation time.\nII. Direct representation decreases the time needed to access components of a variable.\nIII. When the storage size of some private component of a variable changes, indirect representation minimizes the number of recompilations of source modules that must be performed.",
          "options": [
            {
              "id": "opt-A",
              "text": "I only"
            },
            {
              "id": "opt-B",
              "text": "III only"
            },
            {
              "id": "opt-C",
              "text": "I and II only"
            },
            {
              "id": "opt-D",
              "text": "II and III only"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-ee4ed6ab6047eea2",
          "text": "Which of the following is NOT a property of bitmap graphics?",
          "options": [
            {
              "id": "opt-A",
              "text": "Fast hardware exists to move blocks of pixels efficiently."
            },
            {
              "id": "opt-B",
              "text": "Realistic lighting and shading can be done."
            },
            {
              "id": "opt-C",
              "text": "All line segments can be displayed as straight."
            },
            {
              "id": "opt-D",
              "text": "Polygons can be filled with solid colors and textures."
            }
          ],
          "correctOptionId": "opt-C"
        }
      ]
    },
    {
      "id": "masters-college-computer-science-u1-external-l03",
      "title": "College Computer Science — Quiz 3",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-32809489db887cdd",
          "text": "Which of the following is true of interrupts?",
          "options": [
            {
              "id": "opt-A",
              "text": "They are generated when memory cycles are \"stolen\"."
            },
            {
              "id": "opt-B",
              "text": "They are used in place of data channels."
            },
            {
              "id": "opt-C",
              "text": "They can indicate completion of an I/O operation."
            },
            {
              "id": "opt-D",
              "text": "They cannot be generated by arithmetic operations."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-9c2d4ec72cf5bd2f",
          "text": "In a height-balanced binary search tree, the heights of the left and right descendents of any node differ by at most 1. Which of the following are true of such a tree?\nI. Worst-case search time is logarithmic in the number of nodes.\nII. Average-case search time is logarithmic in the number of nodes.\nIII. Best-case search time is proportional to the height of the tree.\nIV. The height of the tree is logarithmic in the number of nodes.",
          "options": [
            {
              "id": "opt-A",
              "text": "I and III only"
            },
            {
              "id": "opt-B",
              "text": "II and III only"
            },
            {
              "id": "opt-C",
              "text": "II and IV only"
            },
            {
              "id": "opt-D",
              "text": "I, II, and IV"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-69ad86bb604a4b39",
          "text": "Bob writes down a number between 1 and 1,000. Mary must identify that number by asking \"yes/no\" questions of Bob. Mary knows that Bob always tells the truth. If Mary uses an optimal strategy, then she will determine the answer at the end of exactly how many questions in the worst case?",
          "options": [
            {
              "id": "opt-A",
              "text": "1,000"
            },
            {
              "id": "opt-B",
              "text": "999"
            },
            {
              "id": "opt-C",
              "text": "500"
            },
            {
              "id": "opt-D",
              "text": "10"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-8ca275c51add95cb",
          "text": "Which of the following is (are) true about virtual memory systems that use pages?\nI. The virtual address space can be larger than the amount of physical memory.\nII. Programs must be resident in main memory throughout their execution.\nIII. Pages correspond to semantic characteristics of the program.",
          "options": [
            {
              "id": "opt-A",
              "text": "I only"
            },
            {
              "id": "opt-B",
              "text": "II only"
            },
            {
              "id": "opt-C",
              "text": "I and II"
            },
            {
              "id": "opt-D",
              "text": "I and III"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-c678a35d1d418576",
          "text": "Which of the following is usually NOT represented in a subroutine's activation record frame for a stack-based programming language?",
          "options": [
            {
              "id": "opt-A",
              "text": "Values of local variables"
            },
            {
              "id": "opt-B",
              "text": "A heap area"
            },
            {
              "id": "opt-C",
              "text": "The return address"
            },
            {
              "id": "opt-D",
              "text": "Stack pointer for the calling activation record"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-634153891481c4d3",
          "text": "Which of the following statements about a remote procedure call is true?",
          "options": [
            {
              "id": "opt-A",
              "text": "It is used to call procedures with addresses that are farther than 2^16 bytes away."
            },
            {
              "id": "opt-B",
              "text": "It cannot return a value."
            },
            {
              "id": "opt-C",
              "text": "It cannot pass parameters by reference."
            },
            {
              "id": "opt-D",
              "text": "It cannot call procedures implemented in a different language."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-930ff295005b8366",
          "text": "Of the following sorting algorithms, which has a running time that is LEAST dependent on the initial ordering of the input?",
          "options": [
            {
              "id": "opt-A",
              "text": "Insertion sort"
            },
            {
              "id": "opt-B",
              "text": "Quicksort"
            },
            {
              "id": "opt-C",
              "text": "Merge sort"
            },
            {
              "id": "opt-D",
              "text": "Selection sort"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-901444d57f49b3ef",
          "text": "A particular parallel program computation requires 100 seconds when executed on a single processor. If 40 percent of this computation is \"inherently sequential\" (i.e., will not benefit from additional processors), then the theoretically best possible elapsed times for this program running with 2 and 4 processors, respectively, are",
          "options": [
            {
              "id": "opt-A",
              "text": "20 and 10 seconds"
            },
            {
              "id": "opt-B",
              "text": "30 and 15 seconds"
            },
            {
              "id": "opt-C",
              "text": "50 and 25 seconds"
            },
            {
              "id": "opt-D",
              "text": "70 and 55 seconds"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-0d2002481af6cb0b",
          "text": "Consider the representation of six-bit numbers by two's complement, one's complement, or by sign and magnitude. In which representation is there overflow from the addition of the integers 011000 and 011000?",
          "options": [
            {
              "id": "opt-A",
              "text": "Two's complement only"
            },
            {
              "id": "opt-B",
              "text": "Sign and magnitude and one's complement only"
            },
            {
              "id": "opt-C",
              "text": "Two's complement and one's complement only"
            },
            {
              "id": "opt-D",
              "text": "All three representations"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-9f80b8259a6e5fb9",
          "text": "Of the following, which best characterizes computers that use memory-mapped I/O?",
          "options": [
            {
              "id": "opt-A",
              "text": "The computer provides special instructions for manipulating I/O ports."
            },
            {
              "id": "opt-B",
              "text": "I/O ports are placed at addresses on the bus and are accessed just like other memory locations."
            },
            {
              "id": "opt-C",
              "text": "To perform an I/O operation, it is sufficient to place the data in an address register and call the channel to perform the operation."
            },
            {
              "id": "opt-D",
              "text": "Ports are referenced only by memory-mapped instructions of the computer and are located at hardwired memory locations."
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-0249db637421852a",
          "text": "Many cryptographic protocols base their security on assumptions about the computational difficulty of integer factorization. Integer factorization serves this purpose because we believe that",
          "options": [
            {
              "id": "opt-A",
              "text": "integer multiplication is a function whose inverse, factorization, remains difficult for a large class of inputs"
            },
            {
              "id": "opt-B",
              "text": "P = NP"
            },
            {
              "id": "opt-C",
              "text": "even if P = NP, integer factorization is still likely not to be polynomial-time computable"
            },
            {
              "id": "opt-D",
              "text": "testing primality is computationally intractable"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-e02ad9759f63f90b",
          "text": "Which of the following sets of bit strings CANNOT be described with a regular expression?",
          "options": [
            {
              "id": "opt-A",
              "text": "All bit strings whose number of zeros is a multiple of five"
            },
            {
              "id": "opt-B",
              "text": "All bit strings starting with a zero and ending with a one"
            },
            {
              "id": "opt-C",
              "text": "All bit strings with an even number of zeros"
            },
            {
              "id": "opt-D",
              "text": "All bit strings with more ones than zeros"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-f901e339d683e9ef",
          "text": "Which of the following conditions can be expressed by a Boolean formula in the Boolean variables p_1, p_2, p_3, p_4 and the connectives ∧,∨ (without ¬)?\nI. At least three of p_1, p_2, p_3, p_4 are true.\nII. Exactly three of p_1, p_2, p_3, p_4 are true.\nIII. An even number of p_1, p_2, p_3, p_4 are true.",
          "options": [
            {
              "id": "opt-A",
              "text": "I only"
            },
            {
              "id": "opt-B",
              "text": "II only"
            },
            {
              "id": "opt-C",
              "text": "III only"
            },
            {
              "id": "opt-D",
              "text": "I and III"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-e119476f7db68435",
          "text": "Two alternatives for interconnecting a set of processors with bidirectional links are (1) the fully interconnected network, in which each processor is directly connected to every other processor, and (2) the ring network, in which each processor is connected to two other processors. The worst-case path length for a network is the maximum, over all pairs of nodes in the network, of the minimum length paths (measured in number of links) between the nodes. For each type of interconnection of n processors, a figure of merit can be formed as the product of the number of links required for the network times the worst-case path length connecting any two processors. The ratio of this figure of merit for the fully interconnected network compared to that of the ring network, for even n > 2, is",
          "options": [
            {
              "id": "opt-A",
              "text": "1/(n^2)"
            },
            {
              "id": "opt-B",
              "text": "1/(n(n-1))"
            },
            {
              "id": "opt-C",
              "text": "1/n"
            },
            {
              "id": "opt-D",
              "text": "(n-1)/n"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-ea8cba14dc84462f",
          "text": "For a connected, undirected graph G = (V, E), which of the following must be true?\nI. Σ_{v∈V} degree(v) is even.\nII. |E| ≥ |V| − 1\nIII. G has at least one vertex with degree 1.",
          "options": [
            {
              "id": "opt-A",
              "text": "I only"
            },
            {
              "id": "opt-B",
              "text": "II only"
            },
            {
              "id": "opt-C",
              "text": "III only"
            },
            {
              "id": "opt-D",
              "text": "I and II"
            }
          ],
          "correctOptionId": "opt-D"
        }
      ]
    },
    {
      "id": "masters-college-computer-science-u1-external-l04",
      "title": "College Computer Science — Quiz 4",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-e81898642f14680d",
          "text": "In multiprogrammed systems it is advantageous if some programs such as editors and compilers can be shared by several users. Which of the following must be true of multiprogrammed systems in order that a single copy of a program can be shared by several users?\nI. The program is a macro.\nII. The program is recursive.\nIII. The program is reentrant.",
          "options": [
            {
              "id": "opt-A",
              "text": "I only"
            },
            {
              "id": "opt-B",
              "text": "II only"
            },
            {
              "id": "opt-C",
              "text": "III only"
            },
            {
              "id": "opt-D",
              "text": "II and III only"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-c664b60d5e39716d",
          "text": "Which of the following decimal numbers has an exact representation in binary notation?",
          "options": [
            {
              "id": "opt-A",
              "text": "0.1"
            },
            {
              "id": "opt-B",
              "text": "0.2"
            },
            {
              "id": "opt-C",
              "text": "0.3"
            },
            {
              "id": "opt-D",
              "text": "0.5"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-7dc837e64691a60e",
          "text": "Function signatures describe the types of the arguments to a function as well as the return value of the function. For instance, the addition function on reals has a signature of\nadd : real x real -> real\nsince it takes two real numbers and returns a real number. But, for a language that allows functions as return values, addition could be considered to have the signature\nadd : real -> (real -> real)\nwhich means that add takes a single real (the first operand) and returns a new function that itself takes a single real (the second operand) and returns a real (the result). This process of reducing a function with multiple arguments to a function with fewer arguments is called currying. Which of the following is correct?",
          "options": [
            {
              "id": "opt-A",
              "text": "Currying can be applied to any function to the point where it has exactly one input argument."
            },
            {
              "id": "opt-B",
              "text": "Currying cannot be applied to functions of more than two arguments."
            },
            {
              "id": "opt-C",
              "text": "Currying cannot be applied to functions that return functions as arguments."
            },
            {
              "id": "opt-D",
              "text": "Currying cannot be applied w functions that haw arguments that are functions."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-eb62e5d24a7fb9ff",
          "text": "Array A contains 256 elements of 4 bytes each. Its first element is stored at physical address 4,096.\nArray B contains 512 elements of 4 bytes each. Its first element is stored at physical address 8,192.\nAssume that only arrays A and B can be cached in an initially empty, physically addressed, physically tagged, direct-mapped, 2K-byte cache with an 8-byte block size. The following loop is then executed.\nfor (i = 0; i < 256; i++)\n        A[i] = A[i] + B[2*i];\nDuring the execution of the loop, how many bytes will be written to memory if the cache has a write-back policy?",
          "options": [
            {
              "id": "opt-A",
              "text": "0"
            },
            {
              "id": "opt-B",
              "text": "256"
            },
            {
              "id": "opt-C",
              "text": "1024"
            },
            {
              "id": "opt-D",
              "text": "2000"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-5fbacdcf8052abe4",
          "text": "In which of the following representations of numbers by 8-bit words is the addition of the integers 109 and -42 within range?\nI. One's complement\nII. Two's complement\nIII. Sign and magnitude",
          "options": [
            {
              "id": "opt-A",
              "text": "I only"
            },
            {
              "id": "opt-B",
              "text": "II only"
            },
            {
              "id": "opt-C",
              "text": "I and II only"
            },
            {
              "id": "opt-D",
              "text": "I, II, and III"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-ea89ffcf84fd662c",
          "text": "If a malicious process is granted temporary administrator-level access to a system",
          "options": [
            {
              "id": "opt-A",
              "text": "the threat is over as soon as the process is killed"
            },
            {
              "id": "opt-B",
              "text": "the threat is over after the operating system is rebooted"
            },
            {
              "id": "opt-C",
              "text": "the thread is over after rebooting the machine and replacing files that show a virus infection"
            },
            {
              "id": "opt-D",
              "text": "the threat is often permanent until the entire disk is wiped clean"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-2a0d61f454a3b059",
          "text": "Which of the following statements about horizontal versus vertical microarchitecture is (are) true?\nI. Programs for horizontal architectures require more time steps than those for vertical architectures.\nII. Horizontal microinstructions are unencoded.\nIII. Horizontal microinstructions usually have a single opcode and multiple operand specifiers.",
          "options": [
            {
              "id": "opt-A",
              "text": "I only"
            },
            {
              "id": "opt-B",
              "text": "II only"
            },
            {
              "id": "opt-C",
              "text": "III only"
            },
            {
              "id": "opt-D",
              "text": "II and III only"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-04a01a16677b0d9a",
          "text": "A \"strictly binary tree\" is a binary tree in which every node that is not a leaf has two children. Suppose that for a class of strictly binary trees there exists c > 0 such that, for any tree in the class, the ratio of the lengths of any two root-to-leaf paths is bounded above by c. Which of the following best characterizes the height h of any tree in this class, where N is the number of nodes in the tree and N > 1 ?",
          "options": [
            {
              "id": "opt-A",
              "text": "h <= log2(N)"
            },
            {
              "id": "opt-B",
              "text": "h = 1/c * log2(N)"
            },
            {
              "id": "opt-C",
              "text": "h < c log2(N)"
            },
            {
              "id": "opt-D",
              "text": "h > c log2(N)"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-4b6add364bb1613b",
          "text": "Which of the following sorting algorithms has average-case and worst-case running times of O(n log n)?",
          "options": [
            {
              "id": "opt-A",
              "text": "Bubble sort"
            },
            {
              "id": "opt-B",
              "text": "Insertion sort"
            },
            {
              "id": "opt-C",
              "text": "Merge sort"
            },
            {
              "id": "opt-D",
              "text": "Quicksort"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-05094730330ca1fd",
          "text": "Consider the following equations concerning a stack module that has the operations Push, Pop, Top, and IsEmpty. Which of the equations does NOT represent the conventional semantics of a stack?",
          "options": [
            {
              "id": "opt-A",
              "text": "IsEmpty(Push(Stack,Elem)) = true"
            },
            {
              "id": "opt-B",
              "text": "Pop(Push(Stack,Elem)) = Stack"
            },
            {
              "id": "opt-C",
              "text": "Top(Push(Stack,Elem)) = Elem"
            },
            {
              "id": "opt-D",
              "text": "IsEmpty(Push(Push(Stack,Elem1),Elem2)) = false"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-b2cf536934b0975a",
          "text": "Assume that any assignment statement can be executed in unit time. If as many identical processors as needed are used, what is the minimum number of time units needed to execute the assignments\nA := B + C\nB := A - B\nC := A * E\nD := A/F\nE := B - C\nF := A + B\nwith the same result as if the assignments were executed in the order shown?",
          "options": [
            {
              "id": "opt-A",
              "text": "1"
            },
            {
              "id": "opt-B",
              "text": "2"
            },
            {
              "id": "opt-C",
              "text": "3"
            },
            {
              "id": "opt-D",
              "text": "4"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-a7e4fe105d1bbd09",
          "text": "Two expressions E and F are said to be unifiable if there are substitutions for the variables of E and F that make the expressions lexically identical. In the following three expressions, only w, x, y, and z are variables.\nI. f(w,w)\nII. f(x,1)\nIII. f(y,g(z))\nWhich pairs of these expressions is (are) pairs of unifiable expressions?",
          "options": [
            {
              "id": "opt-A",
              "text": "(I, II) only"
            },
            {
              "id": "opt-B",
              "text": "(I, III) only"
            },
            {
              "id": "opt-C",
              "text": "(II, III) only"
            },
            {
              "id": "opt-D",
              "text": "(I, II) and (I, III) only"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-c7dc3d40d4c4ee1d",
          "text": "Which of the following instruction-set features is NOT generally considered an obstacle to aggressive pipelining of an integer unit?",
          "options": [
            {
              "id": "opt-A",
              "text": "Condition codes set by every instruction"
            },
            {
              "id": "opt-B",
              "text": "Variable-length encoding of instructions"
            },
            {
              "id": "opt-C",
              "text": "Instructions requiring widely varying numbers of cycles to execute"
            },
            {
              "id": "opt-D",
              "text": "Several different classes (sets) of registers"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-09b65e375956caef",
          "text": "Let k >= 2. Let L be the set of strings in {0, 1}^* such that x \\in L if and only if the number of 0's in x is divisible by k and the number of 1's in x is odd. The minimum number of states in a deterministic finite automaton (DFA) that recognizes L is",
          "options": [
            {
              "id": "opt-A",
              "text": "k + 2"
            },
            {
              "id": "opt-B",
              "text": "2k"
            },
            {
              "id": "opt-C",
              "text": "k log k"
            },
            {
              "id": "opt-D",
              "text": "k^2"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-2e50434e5ba23c1b",
          "text": "Let G = (V, E) be a finite directed acyclic graph with |E| > 0. Which of the following must be true?\nI. G has a vertex with no incoming edge.\nII. G has a vertex with no outgoing edge.\nIII. G has an isolated vertex, that is, one with neither an incoming edge nor an outgoing edge.",
          "options": [
            {
              "id": "opt-A",
              "text": "I only"
            },
            {
              "id": "opt-B",
              "text": "II only"
            },
            {
              "id": "opt-C",
              "text": "III only"
            },
            {
              "id": "opt-D",
              "text": "I and II only"
            }
          ],
          "correctOptionId": "opt-D"
        }
      ]
    },
    {
      "id": "masters-college-computer-science-u1-external-l05",
      "title": "College Computer Science — Quiz 5",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-ed591a44287030c7",
          "text": "Let T be a depth-first search tree of a connected undirected graph G. For each vertex v of T, let pre(v) be the number of nodes visited up to and including v during a preorder traversal of T, and post(v) be the number of nodes visited up to and including v during a postorder traversal of T. The lowest common ancestor of vertices u and v in T is a vertex w of T such that w is an ancestor of both u and v, and no child of w is an ancestor of both u and v. Let (u, v) be an edge in G that is not in T, such that pre(u) < pre(v). Which of the following statements about u and v must be true?\nI. post(u) < post(v)\nII. u is an ancestor of v in T.\nIII. If w is the lowest common ancestor of u and v in T, then w = u.",
          "options": [
            {
              "id": "opt-A",
              "text": "I only"
            },
            {
              "id": "opt-B",
              "text": "II only"
            },
            {
              "id": "opt-C",
              "text": "III only"
            },
            {
              "id": "opt-D",
              "text": "II and III"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-6688fd90617422bc",
          "text": "In systems with support for automatic memory management, a garbage collector typically has the responsibility for reclaiming allocated memory objects whose contents cannot affect any future legal computation. Such objects are identified by determining that they cannot be reached from a root set. Which of the following is NOT part of the root set in a typical garbage collector?",
          "options": [
            {
              "id": "opt-A",
              "text": "Actual parameters of the active procedures"
            },
            {
              "id": "opt-B",
              "text": "Dynamically allocated objects on the heap"
            },
            {
              "id": "opt-C",
              "text": "Global variables of the program"
            },
            {
              "id": "opt-D",
              "text": "Local variables on the call stack"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-9e145286c5cb995b",
          "text": "In the Internet Protocol (IP) suite of protocols, which of the following best describes the purpose of the Address Resolution Protocol?",
          "options": [
            {
              "id": "opt-A",
              "text": "To translate Web addresses to host names"
            },
            {
              "id": "opt-B",
              "text": "To determine the IP address of a given host name"
            },
            {
              "id": "opt-C",
              "text": "To determine the hardware address of a given host name"
            },
            {
              "id": "opt-D",
              "text": "To determine the hardware address of a given IP address"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-55e409262bb0880f",
          "text": "Which of the following language features requires that stack-based storage allocation be used rather than static allocation?",
          "options": [
            {
              "id": "opt-A",
              "text": "Recursive procedures"
            },
            {
              "id": "opt-B",
              "text": "Arbitrary goto's"
            },
            {
              "id": "opt-C",
              "text": "Two-dimensional arrays"
            },
            {
              "id": "opt-D",
              "text": "Integer-valued functions"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-065b9ee309c1dd0a",
          "text": "Which of the following is not a sentence that is generated by the grammar A -> BC, B -> x|Bx, C -> B|D, D -> y|Ey, E -> z?",
          "options": [
            {
              "id": "opt-A",
              "text": "xyz"
            },
            {
              "id": "opt-B",
              "text": "xy"
            },
            {
              "id": "opt-C",
              "text": "xxzy"
            },
            {
              "id": "opt-D",
              "text": "xxxxy"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-bebc180873d2e77d",
          "text": "Let T (n) be defined by T(1) = 7 and T(n + 1) = 3n + T(n) for all integers n ≥ 1. Which of the following represents the order of growth of T(n) as a function of n?",
          "options": [
            {
              "id": "opt-A",
              "text": "Θ(n)"
            },
            {
              "id": "opt-B",
              "text": "Θ(n log n)"
            },
            {
              "id": "opt-C",
              "text": "Θ(n^2)"
            },
            {
              "id": "opt-D",
              "text": "Θ(n^2 log n)"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-57306558e2cc3528",
          "text": "Which of the following problems is (are) decidable?\nI. Given a (finite) string w, is w a prefix of the decimal expansion of π?\nII. Given a program and an input, is the program’s output the decimal expansion of π?\nIII. Given a program that takes as input a prefix of the decimal expansion of π, is the program’s output always the same for every prefix?",
          "options": [
            {
              "id": "opt-A",
              "text": "I only"
            },
            {
              "id": "opt-B",
              "text": "II only"
            },
            {
              "id": "opt-C",
              "text": "III only"
            },
            {
              "id": "opt-D",
              "text": "I and II only"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-9a3c1d870792ef89",
          "text": "Which of the following statements about circuits is (are) true?\nI. Combinational circuits may have feedback; sequential circuits do not.\nII. Combinational circuits have a \"memoryless\" property; sequential circuits do not.\nIII. Both sequential and combinational circuits must be controlled by an external clock.",
          "options": [
            {
              "id": "opt-A",
              "text": "I only"
            },
            {
              "id": "opt-B",
              "text": "II only"
            },
            {
              "id": "opt-C",
              "text": "I and II only"
            },
            {
              "id": "opt-D",
              "text": "II and III only"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-e83a2ffec99d6d61",
          "text": "Two single-user workstations are attached to the same local area network. On one of these workstations, file pages are accessed over the network from a file server; the average access time per page is 0.1 second. On the other of these workstations, file pages are accessed from a local disk; the average access time per page is 0.05 second. A particular compilation requires 30 seconds of computation and 200 file page accesses. What is the ratio of the total time required by this compilation if run on the diskless (file server) workstation to the total time required if run on the workstation with the local disk, if it is assumed that computation is not overlapped with file access?",
          "options": [
            {
              "id": "opt-A",
              "text": "1/1"
            },
            {
              "id": "opt-B",
              "text": "5/4"
            },
            {
              "id": "opt-C",
              "text": "5/3"
            },
            {
              "id": "opt-D",
              "text": "10/5"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-b3a25ddbfbe23717",
          "text": "Assume that a debugger places a breakpoint at a load instruction at virtual address 0x77E81234 (hexadecimal notation) in a debugged process P. If the text segment of P begins at 0x77E80000 in P’s virtual address space and if the debugger has mapped this same text segment at 0x01000000 in its virtual address space, which of the following is the virtual address used by the debugger in its WRITE operation, along with a description of how the debugger has mapped the virtual memory page containing this address?",
          "options": [
            {
              "id": "opt-A",
              "text": "0x01001234; page mapped with READ/WRITE access"
            },
            {
              "id": "opt-B",
              "text": "0x01001234; page mapped with COPY-ON-WRITE access"
            },
            {
              "id": "opt-C",
              "text": "0x76E81234; page mapped with READ/WRITE access"
            },
            {
              "id": "opt-D",
              "text": "0x76E81234; page mapped with COPY-ON-WRITE access"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-b429ffd9e4fcae26",
          "text": "Which of the following considerations applies (apply) to choosing the page size in a paging system?\nI. An advantage of larger pages is that they lead to smaller page tables.\nII. An advantage of smaller pages is that they lead to less waste due to internal fragmentation.\nIII. Normally, the dominant factor in disk access time is not dependent on page length, so longer pages can be used advantageously.",
          "options": [
            {
              "id": "opt-A",
              "text": "I only"
            },
            {
              "id": "opt-B",
              "text": "II only"
            },
            {
              "id": "opt-C",
              "text": "I and III only"
            },
            {
              "id": "opt-D",
              "text": "I, II, and III"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-47e0a5ae02b37ab5",
          "text": "Two processors, M-5 and M-7, implement the same instruction set. Processor M-5 uses a 5-stage pipeline and a clock cycle of 10 nanoseconds. Processor M-7 uses a 7-stage pipeline and a clock cycle of 7.5 nanoseconds. Which of the following is (are) true?\nI. M-7’s pipeline has better maximum throughput than M-5’s pipeline.\nII. The latency of a single instruction is shorter on M-7’s pipeline than on M-5’s pipeline.\nIII. Programs executing on M-7 will always run faster than programs executing on M-5.",
          "options": [
            {
              "id": "opt-A",
              "text": "I only"
            },
            {
              "id": "opt-B",
              "text": "II only"
            },
            {
              "id": "opt-C",
              "text": "I and III"
            },
            {
              "id": "opt-D",
              "text": "II and III"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-6a763b324c475321",
          "text": "Which of the following pairs of 8-bit, two's-complement numbers will result in overflow when the members of the pairs are added?",
          "options": [
            {
              "id": "opt-A",
              "text": "11111111, 00000001"
            },
            {
              "id": "opt-B",
              "text": "00000001, 10000000"
            },
            {
              "id": "opt-C",
              "text": "11111111, 10000001"
            },
            {
              "id": "opt-D",
              "text": "10000001, 10101010"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-9aed3d3b1b7db272",
          "text": "Two computers communicate with each other by sending data packets across a local area network. The size of these packets is 1,000 bytes. The network has the capacity to carry 1,000 packets per second. The CPU time required to execute the network protocol to send one packet is 10 milliseconds. The maximum rate at which one computer can send data to another is approximately",
          "options": [
            {
              "id": "opt-A",
              "text": "10,000 bytes/second"
            },
            {
              "id": "opt-B",
              "text": "25,000 bytes/ second"
            },
            {
              "id": "opt-C",
              "text": "100,000 bytes/ second"
            },
            {
              "id": "opt-D",
              "text": "500,000 bytes/ second"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-4fc84d8db2039065",
          "text": "Consider the following grammar.\nS → ( S )\nS → x\nWhich of the following statements is (are) true?\nI. The grammar is ambiguous.\nII. The grammar is suitable for top-down parsing.\nIII. The grammar is suitable for bottom-up parsing.",
          "options": [
            {
              "id": "opt-A",
              "text": "I only"
            },
            {
              "id": "opt-B",
              "text": "II only"
            },
            {
              "id": "opt-C",
              "text": "III only"
            },
            {
              "id": "opt-D",
              "text": "II and III only"
            }
          ],
          "correctOptionId": "opt-D"
        }
      ]
    },
    {
      "id": "masters-college-computer-science-u1-external-l06",
      "title": "College Computer Science — Quiz 6",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-f3ef98c29fc7f0da",
          "text": "Hash tables can contribute to an efficient average-case solution for all of the problems described below EXCEPT:",
          "options": [
            {
              "id": "opt-A",
              "text": "Counting distinct values: Given a set of n keys, determine the number of distinct key values."
            },
            {
              "id": "opt-B",
              "text": "Dynamic dictionary: Support the operations of insert, delete, and search in a dictionary."
            },
            {
              "id": "opt-C",
              "text": "Range search: Given values a and b, find all the records whose key value is in the range a, b."
            },
            {
              "id": "opt-D",
              "text": "Symbol table lookup: Given a program identifier, find its type and address."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-180abb6c7f3f71b2",
          "text": "Let A be a finite set with m elements, and let B be a finite set with n elements. The number of distinct functions mapping A into B is",
          "options": [
            {
              "id": "opt-A",
              "text": "n^m"
            },
            {
              "id": "opt-B",
              "text": "n!/(n - m)!"
            },
            {
              "id": "opt-C",
              "text": "n!"
            },
            {
              "id": "opt-D",
              "text": "n!/(m!(n - m)!)"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-1f18dc6dea81ffa3",
          "text": "To compute the matrix product M_1M_2, where M_1 has p rows and q columns and where M_2 has q rows and r columns, takes time proportional to pqr, and the result is a matrix of p rows and r columns. Consider the product of three matrices N_1N_2N_3 that have, respectively, w rows and x columns, x rows and y columns, and y rows and z columns. Under what condition will it take less time to compute the product as (N_1N_2)N_3 (i.e., multiply the first two matrices first) than to compute it as N_1(N_2 N_3)?",
          "options": [
            {
              "id": "opt-A",
              "text": "There is no such condition; i.e., they will always take the same time."
            },
            {
              "id": "opt-B",
              "text": "1/x + 1/z < 1/w + 1/y"
            },
            {
              "id": "opt-C",
              "text": "x > y"
            },
            {
              "id": "opt-D",
              "text": "1/w + 1/x < 1/y + 1/z"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-c72532a21549bef5",
          "text": "The hit ratio of a cache memory is the percentage of accesses (reads and writes) for which data are found in the cache. Write-through is a policy whereby every write operation updates main memory. Write-back is a policy whereby a write operation to a line found in the cache does not affect main memory until the line is evicted from the cache. Write-allocation is a policy whereby a cache line is allocated and loaded on a write-miss. If it is assumed that write-allocation is always used, which of the following is true?",
          "options": [
            {
              "id": "opt-A",
              "text": "Write-back usually results in a better hit ratio than write-through."
            },
            {
              "id": "opt-B",
              "text": "Write-through usually results in a better hit ratio than write-back."
            },
            {
              "id": "opt-C",
              "text": "The percentage of write operations resulting in a main memory operation will never be larger for write-back than for write-through."
            },
            {
              "id": "opt-D",
              "text": "The percentage of write operations resulting in a main memory operation will never be larger for writethrough than for write-back."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-4833e0d33e8d4a4c",
          "text": "A particular disk unit uses a bit string to record the occupancy or vacancy of its tracks, with O denoting vacant and 1 denoting occupied. A 32-bit segment of this string has the hexadecimal value D4FE2003. The percentage of occupied tracks for the corresponding part of the disk, to the nearest percent, is",
          "options": [
            {
              "id": "opt-A",
              "text": "12%"
            },
            {
              "id": "opt-B",
              "text": "25%"
            },
            {
              "id": "opt-C",
              "text": "38%"
            },
            {
              "id": "opt-D",
              "text": "44%"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-d55f1b6557cf62ba",
          "text": "An Euler circuit of an undirected graph is a circuit in which each edge of the graph appears exactly once. Which of the following undirected graphs must have an Euler circuit?\nI. A complete graph with 12 vertices\nII. A complete graph with 13 vertices\nIII. A tree with 13 vertices",
          "options": [
            {
              "id": "opt-A",
              "text": "I only"
            },
            {
              "id": "opt-B",
              "text": "II only"
            },
            {
              "id": "opt-C",
              "text": "III only"
            },
            {
              "id": "opt-D",
              "text": "I and II"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-26e2d4836d61e766",
          "text": "Which of the following characteristics of a programming language is best specified using a context-free grammar?",
          "options": [
            {
              "id": "opt-A",
              "text": "Identifier length"
            },
            {
              "id": "opt-B",
              "text": "Maximum level of nesting"
            },
            {
              "id": "opt-C",
              "text": "Operator precedence"
            },
            {
              "id": "opt-D",
              "text": "Type compatibility"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-e4441db331a72fd7",
          "text": "Which of the following statements about datagrams sent by a node in a network using IPv4 protocol is (are) true?\nI. Datagrams at the source must be the size of the smallest maximum transmission unit (MTU) of all the links on a path to the destination.\nII. Datagrams may be fragmented during routing.\nIII. Datagrams are reassembled only at the destination.",
          "options": [
            {
              "id": "opt-A",
              "text": "I only"
            },
            {
              "id": "opt-B",
              "text": "II only"
            },
            {
              "id": "opt-C",
              "text": "III only"
            },
            {
              "id": "opt-D",
              "text": "II and III"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-be780877153c4860",
          "text": "A starvation-free job-scheduling policy guarantees that no job waits indefinitely for service. Which of the following job-scheduling policies is starvation-free?",
          "options": [
            {
              "id": "opt-A",
              "text": "Round-robin"
            },
            {
              "id": "opt-B",
              "text": "Priority queuing"
            },
            {
              "id": "opt-C",
              "text": "Shortest job first"
            },
            {
              "id": "opt-D",
              "text": "Youngest job first"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-2a0ed49a3ed4064d",
          "text": "Of the following, which gives the best upper bound for the value of f(N) where f is a solution to the recurrence f(2N + 1) = f(2N) = f(N) + log N for N >= 1, with f(1) = 0?",
          "options": [
            {
              "id": "opt-A",
              "text": "O(log N)"
            },
            {
              "id": "opt-B",
              "text": "O(N log N)"
            },
            {
              "id": "opt-C",
              "text": "O(log N) + 0(1)"
            },
            {
              "id": "opt-D",
              "text": "O((log N)^2)"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-c38e61568a7bff0f",
          "text": "Company X shipped 5 computer chips, 1 of which was defective, and Company Y shipped 4 computer chips, 2 of which were defective. One computer chip is to be chosen uniformly at random from the 9 chips shipped by the companies. If the chosen chip is found to be defective, what is the probability that the chip came from Company Y?",
          "options": [
            {
              "id": "opt-A",
              "text": "2 / 9"
            },
            {
              "id": "opt-B",
              "text": "4 / 9"
            },
            {
              "id": "opt-C",
              "text": "1 / 2"
            },
            {
              "id": "opt-D",
              "text": "2 / 3"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-9c6d566403bd272c",
          "text": "Which of the following problems can be solved by a standard greedy algorithm?\nI. Finding a minimum spanning tree in an undirected graph with positive-integer edge weights\nII. Finding a maximum clique in an undirected graph\nIII. Finding a maximum flow from a source node to a sink node in a directed graph with positive-integer edge capacities",
          "options": [
            {
              "id": "opt-A",
              "text": "I only"
            },
            {
              "id": "opt-B",
              "text": "II only"
            },
            {
              "id": "opt-C",
              "text": "III only"
            },
            {
              "id": "opt-D",
              "text": "I and II only"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-2f772a14e25f7e34",
          "text": "A program that checks spelling works in the following way. A hash table has been defined in which each entry is a Boolean variable initialized to false. A hash function has been applied to each word in the dictionary, and the appropriate entry in the hash table has been set to true. To check the spelling in a document, the hash function is applied to every word in the document, and the appropriate entry in the hash table is examined. Which of the following is (are) correct?\nI. true means the word was in the dictionary.\nII. false means the word was not in the dictionary.\nIII. Hash table size should increase with document size.",
          "options": [
            {
              "id": "opt-A",
              "text": "I only"
            },
            {
              "id": "opt-B",
              "text": "II only"
            },
            {
              "id": "opt-C",
              "text": "I and II only"
            },
            {
              "id": "opt-D",
              "text": "II and III only"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-c372377cf0e1fe22",
          "text": "One approach to handling fuzzy logic data might be to design a computer using ternary (base-3) logic so that data could be stored as “true,” “false,” and “unknown.” If each ternary logic element is called a flit, how many flits are required to represent at least 256 different values?",
          "options": [
            {
              "id": "opt-A",
              "text": "4"
            },
            {
              "id": "opt-B",
              "text": "5"
            },
            {
              "id": "opt-C",
              "text": "6"
            },
            {
              "id": "opt-D",
              "text": "7"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-000825ce03ecf675",
          "text": "Local caching of files is common in distributed file systems, but it has the disadvantage that",
          "options": [
            {
              "id": "opt-A",
              "text": "Temporary inconsistencies among views of a file by different machines can result"
            },
            {
              "id": "opt-B",
              "text": "The file system is likely to be corrupted when a computer crashes"
            },
            {
              "id": "opt-C",
              "text": "A much higher amount of network traffic results"
            },
            {
              "id": "opt-D",
              "text": "Caching makes file migration impossible"
            }
          ],
          "correctOptionId": "opt-A"
        }
      ]
    },
    {
      "id": "masters-college-computer-science-u1-external-l07",
      "title": "College Computer Science — Quiz 7",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-1f5542c4d25dd7af",
          "text": "Array A contains 256 elements of 4 bytes each. Its first element is stored at physical address 4,096.\nArray B contains 512 elements of 4 bytes each. Its first element is stored at physical address 8,192.\nAssume that only arrays A and B can be cached in an initially empty, physically addressed, physically tagged, direct-mapped, 2K-byte cache with an 8-byte block size. The following loop is then executed.\nfor (i = 0; i < 256; i++)\n        A[i] = A[i] + B[2*i];\nDuring the execution of the loop, how many bytes will be written to memory if the cache has a write-through policy?",
          "options": [
            {
              "id": "opt-A",
              "text": "0"
            },
            {
              "id": "opt-B",
              "text": "256"
            },
            {
              "id": "opt-C",
              "text": "1024"
            },
            {
              "id": "opt-D",
              "text": "2048"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-b5d0b644e5df8048",
          "text": "At time 0, five jobs are available for execution on a single processor, with service times of 25, 15, 5, 3, and 2 time units. Which of the following is the minimum value of the average completion time of these jobs?",
          "options": [
            {
              "id": "opt-A",
              "text": "50"
            },
            {
              "id": "opt-B",
              "text": "208/5"
            },
            {
              "id": "opt-C",
              "text": "92/5"
            },
            {
              "id": "opt-D",
              "text": "10"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-d9dfb9b98fbdc97d",
          "text": "Let G = (V, E) be a connected, undirected graph, and let a and b be two distinct vertices in V. Let P_1 be the problem of finding a shortest simple path between a and b, and let P_2 be the problem of finding a longest simple path between a and b. Which of the following statements about P_1 and P_2 is true?",
          "options": [
            {
              "id": "opt-A",
              "text": "Both P_1 and P_2 can be solved in polynomial time."
            },
            {
              "id": "opt-B",
              "text": "P_1 can be solved in polynomial time but P_2 is not known to be solvable in polynomial time."
            },
            {
              "id": "opt-C",
              "text": "P_1 is not known to be solvable in polynomial time but P_2 can be solved in polynomial time."
            },
            {
              "id": "opt-D",
              "text": "It is not known whether either P_1 or P_2 can be solved in polynomial time."
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-ef658e7b68a37784",
          "text": "A major advantage of direct mapping of a cache is its simplicity. The main disadvantage of this organization is that",
          "options": [
            {
              "id": "opt-A",
              "text": "it does not allow simultaneous access to the intended data and its tag"
            },
            {
              "id": "opt-B",
              "text": "it is more expensive than other types of cache organizations"
            },
            {
              "id": "opt-C",
              "text": "the cache hit ratio is degraded if two or more blocks used alternately map onto the same block frame in the cache"
            },
            {
              "id": "opt-D",
              "text": "its access time is greater than that of other cache organizations"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-beb3ff93e023399e",
          "text": "Let M be a single-tape, deterministic Turing machine with tape alphabet {blank,0,1}, and let C denote the (possibly infinite) computation of M starting with a blank tape. The input to each problem below is M, together with a positive integer n. Which of the following problems is (are) decidable?\nI. The computation C lasts for at least n steps.\nII. The computation C lasts for at least n steps, and M prints a 1 at some point after the nth step.\nIII. M scans at least n distinct tape squares during the computation C.",
          "options": [
            {
              "id": "opt-A",
              "text": "None"
            },
            {
              "id": "opt-B",
              "text": "III only"
            },
            {
              "id": "opt-C",
              "text": "I and II only"
            },
            {
              "id": "opt-D",
              "text": "I and III only"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-fe6e7ce01f4374fb",
          "text": "A 3-way, set-associative cache is",
          "options": [
            {
              "id": "opt-A",
              "text": "one in which each main memory word can be stored at any of 3 cache locations"
            },
            {
              "id": "opt-B",
              "text": "effective only if 3 or fewer processes are running alternately on the processor"
            },
            {
              "id": "opt-C",
              "text": "possible only with write-back"
            },
            {
              "id": "opt-D",
              "text": "faster to access than a direct-mapped cache"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-424bb0f3dacd2709",
          "text": "Consider an object-oriented language in which all entities are objects. Two relationships arise: (1) the instance relationship, between an object and the class of which that object is a member, and (2) the subclass relationship, between a class and the superclass from which that class inherits properties. In such a language, when a message is sent to an object requesting execution of one of its methods (procedures), the method is located by following",
          "options": [
            {
              "id": "opt-A",
              "text": "one instance link and then zero or more subclass links"
            },
            {
              "id": "opt-B",
              "text": "one or more instance links and then one or more subclass links"
            },
            {
              "id": "opt-C",
              "text": "one or more instance links"
            },
            {
              "id": "opt-D",
              "text": "one subclass link and then one or more instance links"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-cdb8acb910d21b2f",
          "text": "In a pipelined RISC computer where all arithmetic instructions have the same CPI (cycles per instruction), which of the following actions would improve the execution time of a typical program?\nI. Increasing the clock cycle rate\nII. Disallowing any forwarding in the pipeline\nIII. Doubling the sizes of the instruction cache and the data cache without changing the clock cycle time",
          "options": [
            {
              "id": "opt-A",
              "text": "I only"
            },
            {
              "id": "opt-B",
              "text": "II only"
            },
            {
              "id": "opt-C",
              "text": "III only"
            },
            {
              "id": "opt-D",
              "text": "I and III"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-63f240f4b3d32038",
          "text": "A microcomputer used for data acquisition and control is required to digitize and process four analog input signals and to output their average continually; i.e., in real time. The time for an external analog-to-digital converter (which is triggered by a CPU instruction) to digitize one input is 12 microseconds, and only one digitization occurs at a time. Five CPU instructions, including the triggering instruction, must be executed for each signal digitized. Ten CPU instructions are executed in order to average each set of four samples and output this value. The time to convert the output from digital to analog form is to be ignored. If it is assumed that suitable data buffering is employed, then the maximum average instruction execution time that allows the microcomputer to keep up with the input-output data rates, is",
          "options": [
            {
              "id": "opt-A",
              "text": "0.8 microseconds"
            },
            {
              "id": "opt-B",
              "text": "1.2 microseconds"
            },
            {
              "id": "opt-C",
              "text": "1.6 microseconds"
            },
            {
              "id": "opt-D",
              "text": "2.4 microseconds"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-51de251ad281fa0f",
          "text": "Suppose that a certain software product has a mean time between failures of 10,000 hours and has a mean time to repair of 20 hours. If the product is used by 100 customers, what is its availability?",
          "options": [
            {
              "id": "opt-A",
              "text": "80%"
            },
            {
              "id": "opt-B",
              "text": "90%"
            },
            {
              "id": "opt-C",
              "text": "98%"
            },
            {
              "id": "opt-D",
              "text": "99.80%"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-7353f0aa314032a8",
          "text": "Sometimes the object module produced by a compiler includes information (from the symbol table) mapping all source program names to their addresses. The most likely purpose of this information is",
          "options": [
            {
              "id": "opt-A",
              "text": "for use as input to a debugging aid"
            },
            {
              "id": "opt-B",
              "text": "to increase the run-time efficiency of the program"
            },
            {
              "id": "opt-C",
              "text": "for the reduction of the symbol-table space needed by the compiler"
            },
            {
              "id": "opt-D",
              "text": "to tell the loader where each variable belongs"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-b2f6a26acee9e54a",
          "text": "Suppose there is an open (external) hash table with four buckets, numbered 0,1,2,3, and integers are hashed into these buckets using hash function h(x) = x mod 4. If the sequence of perfect squares 1,4,9, ... , i^2, ... is hashed into the table, then, as the total number of entries in the table grows, what will happen?",
          "options": [
            {
              "id": "opt-A",
              "text": "Two of the buckets will each get approximately half the entries, and the other two will remain empty."
            },
            {
              "id": "opt-B",
              "text": "All buckets will receive approximately the same number of entries."
            },
            {
              "id": "opt-C",
              "text": "All entries will go into one particular bucket."
            },
            {
              "id": "opt-D",
              "text": "All buckets will receive entries, but the difference between the buckets with smallest and largest number of entries will grow."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-fa674526de9d866e",
          "text": "Of the following page-replacement policies, which is guaranteed to incur the minimum number of page faults?",
          "options": [
            {
              "id": "opt-A",
              "text": "Replace the page whose next reference will be the longest time in the future."
            },
            {
              "id": "opt-B",
              "text": "Replace the page whose next reference will be the shortest time in the future."
            },
            {
              "id": "opt-C",
              "text": "Replace the page whose most recent reference was the shortest time in the past."
            },
            {
              "id": "opt-D",
              "text": "Replace the page whose most recent reference was the longest time in the past."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-9ef07f4b19e0056b",
          "text": "Let f(X) = if x = 1 then 0 else [x * f(x - 1) + x**2]. The value of f(4) is",
          "options": [
            {
              "id": "opt-A",
              "text": "53"
            },
            {
              "id": "opt-B",
              "text": "29"
            },
            {
              "id": "opt-C",
              "text": "50"
            },
            {
              "id": "opt-D",
              "text": "100"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-e533415eb8419d17",
          "text": "Church's thesis equates the concept of \"computable function\" with those functions computable by, for example, Turing machines. Which of the following is true of Church's thesis?",
          "options": [
            {
              "id": "opt-A",
              "text": "It was first proven by Alan Turing."
            },
            {
              "id": "opt-B",
              "text": "It has not yet been proven, but finding a proof is a subject of active research."
            },
            {
              "id": "opt-C",
              "text": "It can never be proven."
            },
            {
              "id": "opt-D",
              "text": "It is now in doubt because of the advent of parallel computers."
            }
          ],
          "correctOptionId": "opt-C"
        }
      ]
    },
    {
      "id": "masters-college-computer-science-u1-external-l08",
      "title": "College Computer Science — Quiz 8",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "mmlu-30c34cc1b9d817ee",
          "text": "Which of the following statements is FALSE about memory reclamation based on reference counting?",
          "options": [
            {
              "id": "opt-A",
              "text": "Reference counting is well suited for reclaiming cyclic structures."
            },
            {
              "id": "opt-B",
              "text": "Reference counting incurs additional space overhead for each memory cell."
            },
            {
              "id": "opt-C",
              "text": "Reference counting is an alternative to mark-and-sweep garbage collection."
            },
            {
              "id": "opt-D",
              "text": "Reference counting need not keep track of which cells point to other cells."
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-8608cb7fbf3384be",
          "text": "Suppose it takes 1 second to factor a general 100 x 100 matrix using Gaussian elimination. Of the following, which is the best estimate of the number of seconds it will take to factor a 500 x 500 matrix based on the relative dimensions?",
          "options": [
            {
              "id": "opt-A",
              "text": "5"
            },
            {
              "id": "opt-B",
              "text": "10"
            },
            {
              "id": "opt-C",
              "text": "25"
            },
            {
              "id": "opt-D",
              "text": "125"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-0398891904e1c9cb",
          "text": "The main difference between a network operating system and a distributed operating system is that",
          "options": [
            {
              "id": "opt-A",
              "text": "A network operating system hides the existence of many machines from the user, but a distributed operating system makes the existence of many machines visible"
            },
            {
              "id": "opt-B",
              "text": "A distributed operating system hides the existence of many machines from the user, but a network operating system makes the existence of many machines visible"
            },
            {
              "id": "opt-C",
              "text": "A network operating system uses a local-area network, while a distributed operating system uses a wide-area network"
            },
            {
              "id": "opt-D",
              "text": "A distributed operating system uses a local-area network, while a network operating system uses a wide-area network"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-245366fd68d4b34b",
          "text": "If L is a language accepted by some automaton M, which of the following is (are) true?\nI. If M is a nondeterministic finite automaton, then L is accepted by some deterministic finite automaton.\nII. If M is a deterministic pushdown automaton, then L is accepted by some nondeterministic pushdown automaton.\nIII. If M is a nondeterministic pushdown automaton, then L is accepted by some deterministic Turing machine.",
          "options": [
            {
              "id": "opt-A",
              "text": "III only"
            },
            {
              "id": "opt-B",
              "text": "I and II only"
            },
            {
              "id": "opt-C",
              "text": "II and III only"
            },
            {
              "id": "opt-D",
              "text": "I, II, and III"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-e00e46c1326a8208",
          "text": "Consider the following possible data structures for a set of n distinct integers.\nI. A min-heap\nII. An array of length n sorted in increasing order\nIII. A balanced binary search tree\nFor which of these data structures is the number of steps needed to find and remove the 7th largest element O(log n) in the worst case?",
          "options": [
            {
              "id": "opt-A",
              "text": "I only"
            },
            {
              "id": "opt-B",
              "text": "II only"
            },
            {
              "id": "opt-C",
              "text": "I and II"
            },
            {
              "id": "opt-D",
              "text": "II and III"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-9a79e2f687c72a50",
          "text": "Which of the following evaluation strategies must be defined in order to execute a logic program on a sequential machine?\nI. Evaluation order of rules\nII. Evaluation order of clauses\nIII. Evaluation order of arguments in each clause",
          "options": [
            {
              "id": "opt-A",
              "text": "II only"
            },
            {
              "id": "opt-B",
              "text": "I and II only"
            },
            {
              "id": "opt-C",
              "text": "I and III only"
            },
            {
              "id": "opt-D",
              "text": "I, II, and III"
            }
          ],
          "correctOptionId": "opt-D"
        }
      ]
    }
  ],
  "tags": [
    "external-ai",
    "curriculum-import",
    "masters",
    "college-computer-science",
    "mmlu"
  ],
  "minAge": 21,
  "maxAge": 99,
  "version": "external-1.0",
  "difficultyBand": "advanced",
  "gradeBand": "graduate",
  "learningObjectives": [
    "Master key concepts in college computer science",
    "Apply analytical reasoning to college computer science problems",
    "Demonstrate proficiency through assessments and case analysis"
  ],
  "external": {
    "sources": [
      "mmlu"
    ],
    "licenses": [
      "MIT"
    ],
    "attributions": [
      "MMLU (cais/mmlu)"
    ],
    "itemCounts": {
      "questions": 111,
      "flashcards": 0,
      "chunks": 0
    },
    "importedAt": "2026-03-03T05:42:54.859Z",
    "totalLessons": 8,
    "overflow": 0
  },
  "metadata": {
    "generatedBy": "ingest-universal-curriculum.mjs",
    "importDate": "2026-03-03T05:42:54.859Z"
  }
};
