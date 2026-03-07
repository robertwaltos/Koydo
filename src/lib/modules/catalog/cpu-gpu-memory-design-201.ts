import type { LearningModule } from "@/lib/modules/types";

export const cpu_gpu_memory_design_201_Module: LearningModule = {
  "id": "cpu-gpu-memory-design-201",
  "title": "Computer Architecture II",
  "description": "Parallelism, branch prediction, cache coherence, GPU execution models, and memory performance analysis.",
  "subject": "Computer Architecture",
  "tags": [
    "curriculum",
    "interactive",
    "hardware",
    "systems"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en",
    "es",
    "fr",
    "de",
    "ar",
    "hi",
    "zh",
    "ja",
    "ko",
    "ru"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Analyze Instruction-Level Parallelism (ILP) and branch prediction mechanisms.",
    "Understand cache coherence protocols like MESI in multi-core systems.",
    "Evaluate GPU execution models, specifically SIMT architecture.",
    "Calculate and optimize memory performance using bandwidth, latency, and Little's Law."
  ],
  "lessons": [
    {
      "id": "cpu-gpu-memory-design-201-l01",
      "title": "Instruction-Level Parallelism & Branch Prediction",
      "type": "video",
      "duration": 9,
      "lessonImagePrompt": "Imagen 4 prompt: A futuristic, glowing train approaching a fork in the tracks, with a holographic projection predicting which path it will take, rendered in a sleek, high-tech cyberpunk style.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A 3D animation of a computer processor pipeline. Instructions flow like glowing blocks on a conveyor belt. The belt splits into two paths. A mechanical 'switchman' (branch predictor) flips the track just in time to keep the blocks flowing smoothly without stopping.",
      "learningAids": [
        {
          "id": "cpu-gpu-memory-design-201-l01-a1",
          "type": "image",
          "title": "Pipeline Concept Card",
          "content": "Visual summary of a superscalar pipeline showing how branch prediction prevents pipeline stalls."
        },
        {
          "id": "cpu-gpu-memory-design-201-l01-a2",
          "type": "animation",
          "title": "Misprediction Penalty",
          "content": "Animated walkthrough showing a pipeline flush when a branch is mispredicted, highlighting the wasted clock cycles."
        }
      ],
      "imageUrl": "/generated-images/refinery/cpu-gpu-memory-design-201-l01.png"
    },
    {
      "id": "cpu-gpu-memory-design-201-l02",
      "title": "Simulating Branch Prediction",
      "type": "interactive",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A digital dashboard showing a 2-bit state machine diagram with glowing nodes labeled 'Strongly Taken' and 'Strongly Not Taken', set against a dark blueprint background.",
      "conceptVideoPrompt": "Veo 3.1 prompt: An interactive-style animation showing a loop executing multiple times. A counter increments, and a visual gauge shifts from red (unpredictable) to green (predictable) as the branch history table learns the pattern.",
      "metadata": {
        "prompts": [
          "Explain how a 2-bit saturating counter improves upon a 1-bit predictor.",
          "Trace the state changes of a 2-bit predictor for a loop that executes 4 times.",
          "Describe a scenario where a dynamic branch predictor might fail."
        ]
      },
      "learningAids": [
        {
          "id": "cpu-gpu-memory-design-201-l02-a1",
          "type": "practice",
          "title": "Predictor State Machine",
          "content": "Follow the challenge flow to update the state of a 2-bit predictor based on a sequence of Taken (T) and Not Taken (NT) branches."
        }
      ],
      "imageUrl": "/generated-images/refinery/cpu-gpu-memory-design-201-l02.png"
    },
    {
      "id": "cpu-gpu-memory-design-201-l03",
      "title": "Checkpoint 1: ILP & Branch Prediction",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A stylized checkpoint gate in a digital circuit board maze, glowing with neon blue and orange lights.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced montage of CPU pipelines, glowing data paths, and branching logic gates, ending with a glowing question mark.",
      "questions": [
        {
          "id": "cpu-gpu-memory-design-201-l03-q1",
          "text": "What is the primary purpose of branch prediction in modern CPUs?",
          "skillId": "cpu-gpu-memory-design-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "To keep the instruction pipeline full and avoid stalls."
            },
            {
              "id": "b",
              "text": "To increase the clock speed of the processor."
            },
            {
              "id": "c",
              "text": "To reduce the power consumption of the ALU."
            },
            {
              "id": "d",
              "text": "To compress instructions in the L1 cache."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Branch prediction guesses the outcome of a branch so the CPU can continue fetching and executing instructions, preventing the pipeline from stalling."
        },
        {
          "id": "cpu-gpu-memory-design-201-l03-q2",
          "text": "What happens when a CPU mispredicts a branch?",
          "skillId": "cpu-gpu-memory-design-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "The pipeline must be flushed, and the correct instructions fetched."
            },
            {
              "id": "b",
              "text": "The CPU crashes and requires a reboot."
            },
            {
              "id": "c",
              "text": "The CPU executes both paths simultaneously."
            },
            {
              "id": "d",
              "text": "The cache is completely cleared."
            }
          ],
          "correctOptionId": "a",
          "explanation": "A misprediction means the CPU fetched the wrong instructions. It must discard (flush) them and fetch from the correct address, incurring a performance penalty."
        },
        {
          "id": "cpu-gpu-memory-design-201-l03-q3",
          "text": "Which of the following best describes a Branch History Table (BHT)?",
          "skillId": "cpu-gpu-memory-design-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "A small memory array indexed by the lower bits of the PC to track past branch outcomes."
            },
            {
              "id": "b",
              "text": "A static compiler tool that analyzes code before execution."
            },
            {
              "id": "c",
              "text": "A register that stores the final result of an arithmetic operation."
            },
            {
              "id": "d",
              "text": "A protocol used to maintain cache coherence."
            }
          ],
          "correctOptionId": "a",
          "explanation": "A BHT uses the Program Counter (PC) to look up the historical behavior of a specific branch instruction to predict its future outcome."
        }
      ],
      "learningAids": [
        {
          "id": "cpu-gpu-memory-design-201-l03-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "BHT: Branch History Table - Tracks the Past to Predict the Future."
        }
      ],
      "imageUrl": "/generated-images/refinery/cpu-gpu-memory-design-201-l03.png"
    },
    {
      "id": "cpu-gpu-memory-design-201-l04",
      "title": "Cache Coherence & The MESI Protocol",
      "type": "interactive",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: Four interconnected microchips on a motherboard, with glowing data lines pulsing between them, representing shared memory states in vibrant neon colors.",
      "conceptVideoPrompt": "Veo 3.1 prompt: An animation of four workers (cores) sharing a single whiteboard (main memory). They each have a small notepad (cache). When one worker updates their notepad, a signal flashes to the others to cross out their old notes, illustrating cache coherence.",
      "metadata": {
        "prompts": [
          "Define the four states of the MESI protocol.",
          "Trace the state transitions when Core A writes to a cache line currently 'Shared' by Core B.",
          "Explain the concept of 'false sharing' and how it impacts performance."
        ]
      },
      "learningAids": [
        {
          "id": "cpu-gpu-memory-design-201-l04-a1",
          "type": "practice",
          "title": "MESI State Tracker",
          "content": "Follow the interactive scenario to update the cache states (Modified, Exclusive, Shared, Invalid) across two cores as they read and write to the same memory address."
        }
      ],
      "imageUrl": "/generated-images/refinery/cpu-gpu-memory-design-201-l04.png"
    },
    {
      "id": "cpu-gpu-memory-design-201-l05",
      "title": "GPU Execution Models: SIMT",
      "type": "video",
      "duration": 9,
      "lessonImagePrompt": "Imagen 4 prompt: A massive, sprawling grid of thousands of tiny, glowing processor cores working in perfect unison, emitting a cool blue light, macro photography style.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A visual metaphor of a marching band. A single conductor (instruction unit) gives a command, and hundreds of musicians (threads) perform the exact same movement simultaneously, representing Single Instruction, Multiple Threads (SIMT).",
      "learningAids": [
        {
          "id": "cpu-gpu-memory-design-201-l05-a1",
          "type": "image",
          "title": "SIMT Architecture",
          "content": "Diagram showing a single instruction fetch unit broadcasting to multiple ALUs (Arithmetic Logic Units) in a GPU Streaming Multiprocessor."
        },
        {
          "id": "cpu-gpu-memory-design-201-l05-a2",
          "type": "animation",
          "title": "Thread Divergence",
          "content": "Animation showing what happens when threads in a warp take different paths in an if/else statement, causing sequential execution of the branches."
        }
      ]
    },
    {
      "id": "cpu-gpu-memory-design-201-l06",
      "title": "Checkpoint 2: Cache Coherence & GPUs",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing digital lock securing a data packet, surrounded by floating binary code and GPU core structures.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic transition showing a CPU core morphing into a massive grid of GPU cores, with a glowing 'Checkpoint' text overlay.",
      "questions": [
        {
          "id": "cpu-gpu-memory-design-201-l06-q1",
          "text": "In the MESI protocol, what does the 'Exclusive' state indicate?",
          "skillId": "cpu-gpu-memory-design-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The cache line is present only in this cache and matches main memory."
            },
            {
              "id": "b",
              "text": "The cache line has been modified and is different from main memory."
            },
            {
              "id": "c",
              "text": "The cache line is shared among multiple caches."
            },
            {
              "id": "d",
              "text": "The cache line contains invalid data."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Exclusive means the core has the only cached copy of the data, and it is clean (matches main memory). It can be modified without notifying other cores."
        },
        {
          "id": "cpu-gpu-memory-design-201-l06-q2",
          "text": "What is a 'Warp' in GPU architecture?",
          "skillId": "cpu-gpu-memory-design-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "A group of threads that execute the same instruction simultaneously."
            },
            {
              "id": "b",
              "text": "A high-speed interconnect between the CPU and GPU."
            },
            {
              "id": "c",
              "text": "A specific type of L2 cache used only for graphics."
            },
            {
              "id": "d",
              "text": "The process of moving data from host memory to device memory."
            }
          ],
          "correctOptionId": "a",
          "explanation": "In NVIDIA terminology, a warp is a group of 32 threads that are scheduled together and execute the same instruction in lockstep (SIMT)."
        },
        {
          "id": "cpu-gpu-memory-design-201-l06-q3",
          "text": "Why is 'thread divergence' detrimental to GPU performance?",
          "skillId": "cpu-gpu-memory-design-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It forces the GPU to execute different execution paths sequentially, leaving some ALUs idle."
            },
            {
              "id": "b",
              "text": "It causes the GPU to overheat by drawing too much power."
            },
            {
              "id": "c",
              "text": "It corrupts the data in the shared memory."
            },
            {
              "id": "d",
              "text": "It triggers a CPU interrupt, slowing down the entire system."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Because threads in a warp share an instruction fetch unit, if they diverge (e.g., some take 'if', others take 'else'), the GPU must execute the 'if' path while 'else' threads wait, and vice versa, halving efficiency."
        }
      ],
      "learningAids": [
        {
          "id": "cpu-gpu-memory-design-201-l06-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "MESI: Modified (Dirty, Mine), Exclusive (Clean, Mine), Shared (Clean, Ours), Invalid (Trash)."
        }
      ],
      "imageUrl": "/generated-images/refinery/cpu-gpu-memory-design-201-l06.png"
    },
    {
      "id": "cpu-gpu-memory-design-201-l07",
      "title": "Memory Performance Analysis",
      "type": "video",
      "duration": 9,
      "lessonImagePrompt": "Imagen 4 prompt: A wide, multi-lane futuristic highway made of glowing fiber optic cables, with data packets zooming past at light speed, illustrating high bandwidth.",
      "conceptVideoPrompt": "Veo 3.1 prompt: An animation comparing a narrow, fast pipe (low latency, low bandwidth) to a massive, slow-moving river of data (high latency, high bandwidth). The animation overlays mathematical formulas calculating the flow rate.",
      "learningAids": [
        {
          "id": "cpu-gpu-memory-design-201-l07-a1",
          "type": "image",
          "title": "Bandwidth vs. Latency",
          "content": "Infographic comparing memory latency (time to first byte) and memory bandwidth (rate of data transfer)."
        },
        {
          "id": "cpu-gpu-memory-design-201-l07-a2",
          "type": "animation",
          "title": "Little's Law in Action",
          "content": "Animated queue showing how Concurrency = Bandwidth × Latency determines how many memory requests must be in flight to fully utilize a memory bus."
        }
      ],
      "imageUrl": "/generated-images/refinery/cpu-gpu-memory-design-201-l07.png"
    },
    {
      "id": "cpu-gpu-memory-design-201-l08",
      "title": "Calculating Memory Performance",
      "type": "interactive",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A holographic calculator floating over a server rack, displaying complex equations related to data throughput and latency.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A first-person view of adjusting dials on a control panel labeled 'Clock Speed', 'Bus Width', and 'Channels', watching a central 'Bandwidth' meter rise and fall interactively.",
      "metadata": {
        "prompts": [
          "Calculate the peak bandwidth of a memory system with a 64-bit bus running at 2 GHz.",
          "Apply Little's Law to find the required concurrency for a system with 100ns latency and 50 GB/s bandwidth.",
          "Explain the difference between a compute-bound and a memory-bound workload."
        ]
      },
      "learningAids": [
        {
          "id": "cpu-gpu-memory-design-201-l08-a1",
          "type": "practice",
          "title": "Bandwidth Calculator",
          "content": "Use the provided formula (Bandwidth = Bus Width × Clock Rate × Channels) to solve three real-world memory architecture scenarios."
        }
      ],
      "imageUrl": "/generated-images/refinery/cpu-gpu-memory-design-201-l08.png"
    },
    {
      "id": "cpu-gpu-memory-design-201-l09",
      "title": "Checkpoint 3: Memory Performance",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing neon stopwatch intersecting with a data graph, symbolizing the measurement of time and throughput in a digital space.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced visual summary of data flowing through memory channels, ending on a glowing 'Checkpoint 3' badge.",
      "questions": [
        {
          "id": "cpu-gpu-memory-design-201-l09-q1",
          "text": "How is memory bandwidth typically measured?",
          "skillId": "cpu-gpu-memory-design-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Gigabytes per second (GB/s)"
            },
            {
              "id": "b",
              "text": "Nanoseconds (ns)"
            },
            {
              "id": "c",
              "text": "Megahertz (MHz)"
            },
            {
              "id": "d",
              "text": "Instructions per cycle (IPC)"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Bandwidth measures the rate of data transfer over time, typically expressed in Gigabytes per second (GB/s)."
        },
        {
          "id": "cpu-gpu-memory-design-201-l09-q2",
          "text": "What does Little's Law state in the context of memory systems?",
          "skillId": "cpu-gpu-memory-design-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "Concurrency = Latency × Bandwidth"
            },
            {
              "id": "b",
              "text": "Bandwidth = Clock Speed × Bus Width"
            },
            {
              "id": "c",
              "text": "Power = Capacitance × Voltage^2 × Frequency"
            },
            {
              "id": "d",
              "text": "Execution Time = Instruction Count × CPI × Clock Cycle Time"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Little's Law (L = λW) applied to memory states that the number of requests in flight (Concurrency) equals the arrival rate (Bandwidth) multiplied by the time spent in the system (Latency)."
        },
        {
          "id": "cpu-gpu-memory-design-201-l09-q3",
          "text": "How do GPUs primarily hide high memory latency?",
          "skillId": "cpu-gpu-memory-design-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "By using massive thread-level parallelism to switch to other work while waiting for memory."
            },
            {
              "id": "b",
              "text": "By having extremely large L1 caches for every single core."
            },
            {
              "id": "c",
              "text": "By running the memory clock faster than the core clock."
            },
            {
              "id": "d",
              "text": "By predicting all memory addresses in advance."
            }
          ],
          "correctOptionId": "a",
          "explanation": "GPUs hide latency through massive parallelism. When one warp stalls waiting for memory, the GPU instantly switches to executing another warp that is ready to compute."
        }
      ],
      "learningAids": [
        {
          "id": "cpu-gpu-memory-design-201-l09-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Little's Law: C = L × B (Concurrency = Latency × Bandwidth). To fill a long, wide pipe, you need a lot of water in flight!"
        }
      ],
      "imageUrl": "/generated-images/refinery/cpu-gpu-memory-design-201-l09.png"
    },
    {
      "id": "cpu-gpu-memory-design-201-l10",
      "title": "Final Assessment: Computer Architecture II",
      "type": "quiz",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: A grand, futuristic trophy made of silicon wafers and glowing circuits, resting on a pedestal in a high-tech laboratory.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A sweeping camera move over a complete, highly detailed 3D motherboard, highlighting the CPU, GPU, and RAM, culminating in a bright flash of light revealing the 'Final Assessment' title.",
      "questions": [
        {
          "id": "cpu-gpu-memory-design-201-l10-q1",
          "text": "Which architectural design relies most heavily on Instruction-Level Parallelism (ILP)?",
          "skillId": "cpu-gpu-memory-design-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Superscalar CPUs"
            },
            {
              "id": "b",
              "text": "SIMT GPUs"
            },
            {
              "id": "c",
              "text": "Single-cycle processors"
            },
            {
              "id": "d",
              "text": "Microcontrollers"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Superscalar CPUs are designed to extract ILP by issuing multiple instructions per clock cycle from a single sequential thread."
        },
        {
          "id": "cpu-gpu-memory-design-201-l10-q2",
          "text": "How does a directory-based cache coherence protocol differ from a snooping protocol?",
          "skillId": "cpu-gpu-memory-design-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "Directory-based protocols scale better for high core counts by keeping a centralized record of cache states."
            },
            {
              "id": "b",
              "text": "Directory-based protocols broadcast every memory request to all cores."
            },
            {
              "id": "c",
              "text": "Directory-based protocols do not support the 'Modified' state."
            },
            {
              "id": "d",
              "text": "Directory-based protocols are only used in GPUs."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Snooping relies on broadcasting, which clogs the bus as core counts rise. Directory protocols use a central directory to track who has what, sending targeted messages and scaling much better."
        },
        {
          "id": "cpu-gpu-memory-design-201-l10-q3",
          "text": "What is the main bottleneck for a 'memory-bound' GPU application?",
          "skillId": "cpu-gpu-memory-design-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "DRAM Bandwidth"
            },
            {
              "id": "b",
              "text": "ALU Compute Capacity"
            },
            {
              "id": "c",
              "text": "Branch Prediction Accuracy"
            },
            {
              "id": "d",
              "text": "Instruction Fetch Rate"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A memory-bound application spends most of its time waiting for data to be transferred from DRAM, meaning DRAM bandwidth is the limiting factor, not the speed of the compute cores."
        }
      ],
      "learningAids": [
        {
          "id": "cpu-gpu-memory-design-201-l10-a1",
          "type": "mnemonic",
          "title": "Core Philosophy",
          "content": "CPUs optimize for LATENCY (caches, branch prediction). GPUs optimize for THROUGHPUT (massive parallelism, SIMT)."
        }
      ],
      "imageUrl": "/generated-images/refinery/cpu-gpu-memory-design-201-l10.png"
    }
  ]
};
