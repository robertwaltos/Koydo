import type { LearningModule } from "@/lib/modules/types";

export const cpu_gpu_memory_design_401_Module: LearningModule = {
  "id": "cpu-gpu-memory-design-401",
  "title": "Computer Architecture IV",
  "description": "Advanced architecture research topics including domain-specific accelerators, chiplet-based designs, High Bandwidth Memory (HBM) systems, and performance modeling.",
  "subject": "Computer Architecture",
  "tags": [
    "curriculum",
    "interactive",
    "advanced",
    "hardware",
    "systems"
  ],
  "minAge": 18,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
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
    "Analyze the architectural benefits and trade-offs of domain-specific accelerators.",
    "Evaluate chiplet architectures and advanced 2.5D/3D packaging techniques.",
    "Understand High Bandwidth Memory (HBM) integration and interconnect standards like UCIe.",
    "Apply performance modeling techniques, including the Roofline model, to identify system bottlenecks."
  ],
  "lessons": [
    {
      "id": "cpu-gpu-memory-design-401-l01",
      "title": "Domain-Specific Accelerators",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "A photorealistic, macro-photography shot of a modern AI accelerator chip glowing with faint blue and purple light, showcasing intricate silicon pathways. Shot on 35mm lens, 8k resolution, highly detailed.",
      "conceptVideoPrompt": "A cinematic 3D animation zooming into a silicon die, revealing a grid of processing elements acting as a systolic array. Glowing data packets flow rhythmically through the grid, demonstrating parallel matrix multiplication.",
      "learningAids": [
        {
          "id": "cpu-gpu-memory-design-401-l01-a1",
          "type": "image",
          "title": "Systolic Array Architecture",
          "content": "Visual diagram showing data flow through a 2D grid of Multiply-Accumulate (MAC) units."
        },
        {
          "id": "cpu-gpu-memory-design-401-l01-a2",
          "type": "animation",
          "title": "Spatial vs. Temporal Architecture",
          "content": "Animated comparison between a traditional von Neumann CPU (temporal) and an AI accelerator (spatial)."
        }
      ],
      "imageUrl": "/generated-images/refinery/cpu-gpu-memory-design-401-l01.png"
    },
    {
      "id": "cpu-gpu-memory-design-401-l02",
      "title": "Designing Accelerator Dataflows",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "A sleek, futuristic digital blueprint of a microchip architecture displayed on a dark glass holographic screen, with nodes and interconnects highlighted in neon green.",
      "conceptVideoPrompt": "A dynamic, interactive-style 3D visualization showing different dataflow strategies (Weight Stationary vs. Output Stationary) in a neural network accelerator, with color-coded data blocks moving through the cache hierarchy.",
      "metadata": {
        "prompts": [
          "Define Weight Stationary dataflow and its primary advantage.",
          "Calculate the theoretical peak throughput of a 256x256 systolic array running at 1 GHz.",
          "Identify the primary memory bottleneck in your proposed dataflow design."
        ]
      },
      "learningAids": [
        {
          "id": "cpu-gpu-memory-design-401-l02-a1",
          "type": "practice",
          "title": "Dataflow Mapping Exercise",
          "content": "Map a standard convolutional layer onto a spatial architecture, minimizing off-chip DRAM accesses."
        }
      ],
      "imageUrl": "/generated-images/refinery/cpu-gpu-memory-design-401-l02.png"
    },
    {
      "id": "cpu-gpu-memory-design-401-l03",
      "title": "Checkpoint 1: Accelerators",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A minimalist, high-tech glowing checkpoint icon hovering over a stylized silicon wafer, rendered in Unreal Engine 5 style with volumetric lighting.",
      "conceptVideoPrompt": "A fast-paced, 10-second motion graphics sequence summarizing the evolution from CPUs to GPUs to specialized TPUs, ending with a glowing question mark.",
      "questions": [
        {
          "id": "cpu-gpu-memory-design-401-l03-q1",
          "text": "What is the primary architectural advantage of a systolic array in a Tensor Processing Unit (TPU)?",
          "skillId": "cpu-gpu-memory-design-401-skill-accelerators",
          "options": [
            {
              "id": "a",
              "text": "It maximizes data reuse by passing intermediate results directly between processing elements."
            },
            {
              "id": "b",
              "text": "It relies on deep out-of-order execution pipelines to hide memory latency."
            },
            {
              "id": "c",
              "text": "It uses a single, massive ALU to process all data sequentially."
            },
            {
              "id": "d",
              "text": "It eliminates the need for any on-chip SRAM."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Systolic arrays pass data directly from one ALU to the next, drastically reducing the need to read/write to registers or SRAM, thereby maximizing energy efficiency and data reuse."
        },
        {
          "id": "cpu-gpu-memory-design-401-l03-q2",
          "text": "In the context of AI accelerators, what does 'Weight Stationary' mean?",
          "skillId": "cpu-gpu-memory-design-401-skill-accelerators",
          "options": [
            {
              "id": "a",
              "text": "The neural network weights are kept in the processing element's local register while different inputs are streamed through."
            },
            {
              "id": "b",
              "text": "The weights are constantly fetched from off-chip DRAM for every computation."
            },
            {
              "id": "c",
              "text": "The output activations remain in the register until fully computed."
            },
            {
              "id": "d",
              "text": "The physical weight of the silicon die remains constant."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Weight Stationary dataflow minimizes the movement of weights by loading them once into the PE's local memory and streaming the input activations across them."
        },
        {
          "id": "cpu-gpu-memory-design-401-l03-q3",
          "text": "According to Amdahl's Law, if an accelerator speeds up 80% of a program by 10x, what is the maximum overall speedup?",
          "skillId": "cpu-gpu-memory-design-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "3.57x"
            },
            {
              "id": "b",
              "text": "5.00x"
            },
            {
              "id": "c",
              "text": "8.00x"
            },
            {
              "id": "d",
              "text": "10.00x"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Speedup = 1 / ((1 - 0.8) + (0.8 / 10)) = 1 / (0.2 + 0.08) = 1 / 0.28 ≈ 3.57x."
        }
      ],
      "learningAids": [
        {
          "id": "cpu-gpu-memory-design-401-l03-a1",
          "type": "mnemonic",
          "title": "Amdahl's Reminder",
          "content": "Remember: The un-accelerated portion (the sequential bottleneck) dictates the hard limit of your overall speedup."
        }
      ],
      "imageUrl": "/generated-images/refinery/cpu-gpu-memory-design-401-l03.png"
    },
    {
      "id": "cpu-gpu-memory-design-401-l04",
      "title": "Chiplet Architectures & Advanced Packaging",
      "type": "video",
      "duration": 14,
      "lessonImagePrompt": "A highly detailed macro render of multiple small silicon chiplets mounted on a single large silicon interposer, connected by microscopic gold microbumps. Studio lighting, 8k.",
      "conceptVideoPrompt": "A 3D exploded-view animation showing a monolithic die breaking apart into smaller functional chiplets (CPU, GPU, I/O), which are then reassembled onto a 2.5D silicon interposer with glowing TSVs (Through-Silicon Vias).",
      "learningAids": [
        {
          "id": "cpu-gpu-memory-design-401-l04-a1",
          "type": "image",
          "title": "Monolithic vs. Chiplet",
          "content": "Diagram comparing a large monolithic die with low yield to a multi-chip module (MCM) with high yield."
        },
        {
          "id": "cpu-gpu-memory-design-401-l04-a2",
          "type": "animation",
          "title": "2.5D vs 3D Stacking",
          "content": "Animation illustrating side-by-side interposer routing (2.5D) versus vertical die-on-die stacking (3D)."
        }
      ],
      "imageUrl": "/generated-images/refinery/cpu-gpu-memory-design-401-l04.png"
    },
    {
      "id": "cpu-gpu-memory-design-401-l05",
      "title": "High Bandwidth Memory (HBM) & Interconnects",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "A futuristic visualization of an HBM stack, showing layers of memory dies stacked vertically with glowing vertical data channels (TSVs) piercing through them.",
      "conceptVideoPrompt": "A high-tech data visualization showing massive streams of light (data) flowing from a 3D HBM stack across a silicon interposer into a central GPU compute die, emphasizing extreme bandwidth.",
      "metadata": {
        "prompts": [
          "Explain why HBM provides higher bandwidth than GDDR6 despite running at a lower clock speed.",
          "Calculate the total bandwidth of an HBM3 stack with a 1024-bit interface running at 6.4 Gbps per pin.",
          "Describe the role of the UCIe standard in modern chiplet ecosystems."
        ]
      },
      "learningAids": [
        {
          "id": "cpu-gpu-memory-design-401-l05-a1",
          "type": "practice",
          "title": "Bandwidth Calculation",
          "content": "Use the formula: Bandwidth = Bus Width × Data Rate. Apply this to compare DDR5, GDDR6, and HBM3."
        }
      ]
    },
    {
      "id": "cpu-gpu-memory-design-401-l06",
      "title": "Checkpoint 2: Chiplets & HBM",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A glowing neon microchip puzzle coming together, symbolizing chiplet integration, set against a dark cybernetic background.",
      "conceptVideoPrompt": "A quick 3D transition showing a traditional motherboard shrinking down into a single advanced package, highlighting the integration of memory and compute.",
      "questions": [
        {
          "id": "cpu-gpu-memory-design-401-l06-q1",
          "text": "What is the primary economic driver for adopting chiplet-based architectures over large monolithic dies?",
          "skillId": "cpu-gpu-memory-design-401-skill-chiplets",
          "options": [
            {
              "id": "a",
              "text": "Smaller dies have significantly higher manufacturing yields, reducing overall silicon cost."
            },
            {
              "id": "b",
              "text": "Chiplets inherently run at higher clock frequencies than monolithic dies."
            },
            {
              "id": "c",
              "text": "Chiplets eliminate the need for advanced packaging techniques."
            },
            {
              "id": "d",
              "text": "Chiplets consume zero power during data transfer."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Defect density on silicon wafers means large monolithic dies have exponentially lower yields. Breaking them into smaller chiplets drastically improves yield and lowers costs."
        },
        {
          "id": "cpu-gpu-memory-design-401-l06-q2",
          "text": "How does High Bandwidth Memory (HBM) physically connect to the processor?",
          "skillId": "cpu-gpu-memory-design-401-skill-memory",
          "options": [
            {
              "id": "a",
              "text": "Via a silicon interposer using Through-Silicon Vias (TSVs) and microbumps."
            },
            {
              "id": "b",
              "text": "Through standard PCIe slots on the motherboard."
            },
            {
              "id": "c",
              "text": "Using long copper traces routed through a standard FR4 PCB."
            },
            {
              "id": "d",
              "text": "Via optical fiber cables directly into the CPU socket."
            }
          ],
          "correctOptionId": "a",
          "explanation": "HBM requires an ultra-wide interface (1024-bit per stack), which is physically impossible to route on standard PCBs. It requires a silicon interposer (2.5D packaging) for the dense microbump connections."
        },
        {
          "id": "cpu-gpu-memory-design-401-l06-q3",
          "text": "What is the main purpose of the Universal Chiplet Interconnect Express (UCIe) standard?",
          "skillId": "cpu-gpu-memory-design-401-skill-chiplets",
          "options": [
            {
              "id": "a",
              "text": "To provide an open, industry-standard die-to-die interconnect for mixing chiplets from different vendors."
            },
            {
              "id": "b",
              "text": "To replace Ethernet for long-distance data center networking."
            },
            {
              "id": "c",
              "text": "To standardize the instruction set architecture (ISA) of all CPUs."
            },
            {
              "id": "d",
              "text": "To serve as a new cooling standard for 3D stacked chips."
            }
          ],
          "correctOptionId": "a",
          "explanation": "UCIe is an open industry standard designed to establish a universal interconnect at the package level, allowing chiplets from different foundries and designers to communicate seamlessly."
        }
      ],
      "learningAids": [
        {
          "id": "cpu-gpu-memory-design-401-l06-a1",
          "type": "mnemonic",
          "title": "Yield vs Area",
          "content": "Remember: As die area increases, the probability of a fatal defect increases exponentially. Chiplets solve the area-yield problem."
        }
      ],
      "imageUrl": "/generated-images/refinery/cpu-gpu-memory-design-401-l06.png"
    },
    {
      "id": "cpu-gpu-memory-design-401-l07",
      "title": "Performance Modeling & Simulation",
      "type": "video",
      "duration": 16,
      "lessonImagePrompt": "A complex, glowing 3D graph representing a Roofline Model, with axes for Operational Intensity and Performance, floating in a dark, high-tech laboratory environment.",
      "conceptVideoPrompt": "A cinematic visualization of a computer simulation running. Code streams down the left side of the screen while a real-time graph on the right dynamically updates, showing CPU bottlenecks shifting between memory and compute.",
      "learningAids": [
        {
          "id": "cpu-gpu-memory-design-401-l07-a1",
          "type": "image",
          "title": "The Roofline Model",
          "content": "A visual guide to reading a Roofline chart, highlighting the memory-bound inclined region and the compute-bound flat region."
        },
        {
          "id": "cpu-gpu-memory-design-401-l07-a2",
          "type": "animation",
          "title": "Trace vs. Execution-Driven",
          "content": "Animation comparing trace-driven simulation (reading pre-recorded instructions) with execution-driven simulation (dynamically executing and reacting to state changes)."
        }
      ],
      "imageUrl": "/generated-images/refinery/cpu-gpu-memory-design-401-l07.png"
    },
    {
      "id": "cpu-gpu-memory-design-401-l08",
      "title": "Roofline Analysis Practice",
      "type": "interactive",
      "duration": 18,
      "lessonImagePrompt": "An interactive dashboard interface with futuristic UI elements, displaying performance metrics, bandwidth gauges, and a central interactive Roofline plot.",
      "conceptVideoPrompt": "A first-person perspective of a user interacting with a holographic performance tuning dashboard, dragging sliders for memory bandwidth and compute power, watching the 'roofline' shift in real-time.",
      "metadata": {
        "prompts": [
          "Calculate the arithmetic intensity of a vector addition kernel.",
          "Plot the kernel on the Roofline model. Is it memory-bound or compute-bound?",
          "Propose one software optimization to shift the kernel towards the compute-bound region."
        ]
      },
      "learningAids": [
        {
          "id": "cpu-gpu-memory-design-401-l08-a1",
          "type": "practice",
          "title": "Bottleneck Identification",
          "content": "Use the provided hardware specs (Peak FLOPS, Peak Memory Bandwidth) to find the ridge point, then evaluate the given algorithms."
        }
      ],
      "imageUrl": "/generated-images/refinery/cpu-gpu-memory-design-401-l08.png"
    },
    {
      "id": "cpu-gpu-memory-design-401-l09",
      "title": "Checkpoint 3: Performance Modeling",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A glowing target reticle locking onto the peak of a data graph, symbolizing precision in performance modeling, rendered in a sleek cyberpunk aesthetic.",
      "conceptVideoPrompt": "A rapid sequence showing a bottleneck in a pipe being cleared, metaphorically representing performance optimization, followed by a surge of glowing data.",
      "questions": [
        {
          "id": "cpu-gpu-memory-design-401-l09-q1",
          "text": "In the Roofline Model, what does the x-axis represent?",
          "skillId": "cpu-gpu-memory-design-401-skill-modeling",
          "options": [
            {
              "id": "a",
              "text": "Operational Intensity (FLOPs per Byte)"
            },
            {
              "id": "b",
              "text": "Performance (GFLOPs per second)"
            },
            {
              "id": "c",
              "text": "Memory Bandwidth (GB/s)"
            },
            {
              "id": "d",
              "text": "Clock Frequency (GHz)"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The x-axis represents Operational (or Arithmetic) Intensity, which is the ratio of floating-point operations performed to bytes of memory accessed."
        },
        {
          "id": "cpu-gpu-memory-design-401-l09-q2",
          "text": "What is a major limitation of trace-driven simulation compared to execution-driven simulation?",
          "skillId": "cpu-gpu-memory-design-401-skill-modeling",
          "options": [
            {
              "id": "a",
              "text": "It cannot accurately model speculative execution and wrong-path instructions."
            },
            {
              "id": "b",
              "text": "It is significantly slower to run than execution-driven simulation."
            },
            {
              "id": "c",
              "text": "It requires the actual physical hardware to be built first."
            },
            {
              "id": "d",
              "text": "It cannot simulate cache hierarchies."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Trace-driven simulators read a static trace of committed instructions. They struggle to accurately model the effects of branch mispredictions and speculative execution (wrong-path instructions) that dynamically alter cache and pipeline states."
        },
        {
          "id": "cpu-gpu-memory-design-401-l09-q3",
          "text": "If an algorithm has an operational intensity of 2 FLOPs/Byte, and the hardware has a peak bandwidth of 100 GB/s and peak compute of 500 GFLOPs, what is the achievable performance?",
          "skillId": "cpu-gpu-memory-design-401-skill-modeling",
          "options": [
            {
              "id": "a",
              "text": "200 GFLOPs"
            },
            {
              "id": "b",
              "text": "500 GFLOPs"
            },
            {
              "id": "c",
              "text": "100 GFLOPs"
            },
            {
              "id": "d",
              "text": "1000 GFLOPs"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Achievable Performance = min(Peak Compute, Operational Intensity × Peak Bandwidth). Here, min(500, 2 × 100) = min(500, 200) = 200 GFLOPs. The algorithm is memory-bound."
        }
      ],
      "learningAids": [
        {
          "id": "cpu-gpu-memory-design-401-l09-a1",
          "type": "mnemonic",
          "title": "Roofline Rule",
          "content": "If Intensity < Ridge Point, you are Memory Bound. If Intensity > Ridge Point, you are Compute Bound."
        }
      ],
      "imageUrl": "/generated-images/refinery/cpu-gpu-memory-design-401-l09.png"
    },
    {
      "id": "cpu-gpu-memory-design-401-l10",
      "title": "Final Assessment: Advanced Architecture",
      "type": "quiz",
      "duration": 15,
      "lessonImagePrompt": "A grand, futuristic server room with towering racks of quantum and classical supercomputers, glowing with intense blue and gold lights, symbolizing ultimate architectural mastery.",
      "conceptVideoPrompt": "A sweeping, cinematic camera fly-through of a massive data center, zooming into a single server blade, then into the processor, summarizing the journey from macro-scale systems to micro-scale chiplets.",
      "questions": [
        {
          "id": "cpu-gpu-memory-design-401-l10-q1",
          "text": "Which of the following best describes the 'Memory Wall' problem in computer architecture?",
          "skillId": "cpu-gpu-memory-design-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The growing disparity between CPU processing speeds and memory access latencies."
            },
            {
              "id": "b",
              "text": "The physical limit of how much RAM can fit on a motherboard."
            },
            {
              "id": "c",
              "text": "The security barrier preventing unauthorized access to kernel memory."
            },
            {
              "id": "d",
              "text": "The inability of GPUs to access system memory."
            }
          ],
          "correctOptionId": "a",
          "explanation": "The Memory Wall refers to the historical trend where processor speeds increased much faster than DRAM access times, causing CPUs to spend a massive amount of time stalling for data."
        },
        {
          "id": "cpu-gpu-memory-design-401-l10-q2",
          "text": "What is 'Dark Silicon'?",
          "skillId": "cpu-gpu-memory-design-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The portion of a microprocessor that must remain powered off at any given time to stay within the Thermal Design Power (TDP) limit."
            },
            {
              "id": "b",
              "text": "Silicon wafers that have been ruined by light exposure during photolithography."
            },
            {
              "id": "c",
              "text": "Unused cache memory that has been disabled due to manufacturing defects."
            },
            {
              "id": "d",
              "text": "A specialized type of silicon used exclusively for cryptographic accelerators."
            }
          ],
          "correctOptionId": "a",
          "explanation": "As transistor density increases (Dennard scaling breakdown), we can fit more transistors on a chip than we can simultaneously power and cool. The transistors that must be turned off to prevent melting are called 'Dark Silicon'."
        },
        {
          "id": "cpu-gpu-memory-design-401-l10-q3",
          "text": "When designing a domain-specific accelerator for a highly parallel, memory-bound workload, which architectural choice is most appropriate?",
          "skillId": "cpu-gpu-memory-design-401-skill-accelerators",
          "options": [
            {
              "id": "a",
              "text": "Implementing massive on-chip SRAM (scratchpads) and utilizing HBM to maximize memory bandwidth."
            },
            {
              "id": "b",
              "text": "Increasing the clock frequency of a single, complex out-of-order core to 6 GHz."
            },
            {
              "id": "c",
              "text": "Using standard DDR4 memory and relying on deep, multi-level hardware prefetchers."
            },
            {
              "id": "d",
              "text": "Removing all caches to save die area for more ALUs."
            }
          ],
          "correctOptionId": "a",
          "explanation": "For memory-bound, highly parallel workloads (like AI or graph processing), the bottleneck is data movement. Maximizing bandwidth via HBM and keeping data close to compute via large on-chip scratchpads is the optimal strategy."
        }
      ],
      "learningAids": [
        {
          "id": "cpu-gpu-memory-design-401-l10-a1",
          "type": "mnemonic",
          "title": "Architecture Trinity",
          "content": "Always balance Compute (ALUs), Memory (Bandwidth/Capacity), and Power (Thermal limits). Optimizing one while ignoring the others leads to bottlenecks."
        }
      ],
      "imageUrl": "/generated-images/refinery/cpu-gpu-memory-design-401-l10.png"
    }
  ]
};
