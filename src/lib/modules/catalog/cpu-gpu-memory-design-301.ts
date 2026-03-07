import type { LearningModule } from "@/lib/modules/types";

export const cpu_gpu_memory_design_301_Module: LearningModule = {
  "id": "cpu-gpu-memory-design-301",
  "title": "Computer Architecture III",
  "description": "Advanced microarchitectural optimization, network-on-chip interconnects, instruction scheduling, low-power design, and hardware verification flows.",
  "subject": "Computer Architecture",
  "tags": [
    "curriculum",
    "interactive",
    "microarchitecture",
    "verification",
    "low-power"
  ],
  "minAge": 17,
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
    "Analyze and optimize out-of-order execution and instruction scheduling.",
    "Design scalable Network-on-Chip (NoC) interconnects for multi-core systems.",
    "Apply low-power design techniques like DVFS and power gating to mitigate dark silicon.",
    "Implement hardware verification flows using formal methods and UVM."
  ],
  "lessons": [
    {
      "id": "cpu-gpu-memory-design-301-l01",
      "title": "Advanced Microarchitecture & Scheduling",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "A highly detailed, futuristic 3D render of a modern CPU die glowing with neon blue and orange traces, highlighting the out-of-order execution engine. Photorealistic, macro photography, 8k resolution.",
      "conceptVideoPrompt": "A dynamic 3D animation zooming into a silicon chip, showing data packets flowing through logic gates. The camera pans across the instruction queue, illustrating out-of-order execution with glowing pathways reordering themselves in real-time. Cinematic lighting, high-tech aesthetic.",
      "learningAids": [
        {
          "id": "cpu-gpu-memory-design-301-l01-a1",
          "type": "image",
          "title": "Out-of-Order Pipeline",
          "content": "Visual summary of the Fetch, Decode, Rename, Dispatch, Issue, Execute, and Commit stages."
        },
        {
          "id": "cpu-gpu-memory-design-301-l01-a2",
          "type": "animation",
          "title": "Register Renaming in Action",
          "content": "Step-by-step walkthrough showing how architectural registers are mapped to physical registers to eliminate false dependencies."
        }
      ],
      "imageUrl": "/generated-images/refinery/cpu-gpu-memory-design-301-l01.png"
    },
    {
      "id": "cpu-gpu-memory-design-301-l02",
      "title": "Tomasulo's Algorithm Simulator",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "A sleek, modern UI dashboard displaying CPU instruction scheduling, with colorful blocks representing instructions in reservation stations. Dark mode, glowing accents, high-tech interface design.",
      "conceptVideoPrompt": "A screen recording style animation of an interactive dashboard where instruction blocks are dragged and dropped into reservation stations, showing clock cycles ticking forward and dependencies resolving with green checkmarks.",
      "metadata": {
        "prompts": [
          "Identify the Read-After-Write (RAW) data dependency in the instruction queue.",
          "Allocate the instruction to an available reservation station.",
          "Calculate the total clock cycles saved by executing these instructions out-of-order."
        ]
      },
      "learningAids": [
        {
          "id": "cpu-gpu-memory-design-301-l02-a1",
          "type": "practice",
          "title": "Scheduling Challenge",
          "content": "Follow the simulation flow to resolve structural and data hazards using the Common Data Bus (CDB)."
        }
      ],
      "imageUrl": "/generated-images/refinery/cpu-gpu-memory-design-301-l02.png"
    },
    {
      "id": "cpu-gpu-memory-design-301-l03",
      "title": "Checkpoint 1: Microarchitecture",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A glowing holographic question mark hovering over a silicon wafer, surrounded by floating binary code and microchip schematics. Cyberpunk aesthetic, neon lighting.",
      "conceptVideoPrompt": "A fast-paced montage of CPU components flashing on screen, ending with a glowing checkpoint gate opening. High energy, futuristic tech vibe.",
      "questions": [
        {
          "id": "cpu-gpu-memory-design-301-l03-q1",
          "text": "What is the primary purpose of a Reorder Buffer (ROB) in an out-of-order processor?",
          "skillId": "cpu-gpu-memory-design-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "To ensure instructions commit their results in the original program order."
            },
            {
              "id": "b",
              "text": "To fetch instructions from the L1 cache faster."
            },
            {
              "id": "c",
              "text": "To execute floating-point operations in parallel."
            },
            {
              "id": "d",
              "text": "To predict the outcome of conditional branches."
            }
          ],
          "correctOptionId": "a",
          "explanation": "While instructions execute out-of-order, the ROB ensures they commit in-order to maintain precise exceptions and correct program state."
        },
        {
          "id": "cpu-gpu-memory-design-301-l03-q2",
          "text": "How does register renaming eliminate Write-After-Write (WAW) and Write-After-Read (WAR) hazards?",
          "skillId": "cpu-gpu-memory-design-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "By mapping a small set of architectural registers to a larger pool of physical registers."
            },
            {
              "id": "b",
              "text": "By stalling the pipeline until the previous instruction completes."
            },
            {
              "id": "c",
              "text": "By bypassing the ALU directly to the memory controller."
            },
            {
              "id": "d",
              "text": "By flushing the instruction cache."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Register renaming removes false dependencies (WAW, WAR) by assigning unique physical registers to each new write, allowing independent instructions to proceed."
        },
        {
          "id": "cpu-gpu-memory-design-301-l03-q3",
          "text": "Which component in Tomasulo's algorithm broadcasts results to all waiting instructions?",
          "skillId": "cpu-gpu-memory-design-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The Common Data Bus (CDB)"
            },
            {
              "id": "b",
              "text": "The Instruction Fetch Unit"
            },
            {
              "id": "c",
              "text": "The Translation Lookaside Buffer (TLB)"
            },
            {
              "id": "d",
              "text": "The Branch Predictor"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The Common Data Bus (CDB) allows execution units to broadcast their results directly to reservation stations that are waiting for that data."
        }
      ],
      "learningAids": [
        {
          "id": "cpu-gpu-memory-design-301-l03-a1",
          "type": "mnemonic",
          "title": "Hazard Memory Cue",
          "content": "RAW is Real (True dependency). WAW and WAR are False (Name dependencies fixed by renaming)."
        }
      ],
      "imageUrl": "/generated-images/refinery/cpu-gpu-memory-design-301-l03.png"
    },
    {
      "id": "cpu-gpu-memory-design-301-l04",
      "title": "Network-on-Chip (NoC) Topology Builder",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "A top-down view of a complex Network-on-Chip mesh topology, with glowing nodes and interconnecting links pulsing with data. Isometric 3D, vibrant colors, technical diagram style.",
      "conceptVideoPrompt": "An interactive 3D grid where nodes are connected by glowing lines. Data packets (bright spheres) travel between nodes, dynamically rerouting around a congested link. Smooth, educational animation.",
      "metadata": {
        "prompts": [
          "Design a 4x4 mesh topology for a 16-core processor.",
          "Identify the routing bottleneck in the current XY routing path.",
          "Optimize the interconnect to minimize worst-case latency."
        ]
      },
      "learningAids": [
        {
          "id": "cpu-gpu-memory-design-301-l04-a1",
          "type": "practice",
          "title": "Topology Optimization",
          "content": "Compare the latency and bandwidth of Ring, Mesh, and Torus topologies under heavy traffic."
        }
      ],
      "imageUrl": "/generated-images/refinery/cpu-gpu-memory-design-301-l04.png"
    },
    {
      "id": "cpu-gpu-memory-design-301-l05",
      "title": "Interconnects & Low-Power Design",
      "type": "video",
      "duration": 14,
      "lessonImagePrompt": "A thermal imaging style render of a multi-core processor, with some cores glowing red-hot and others completely dark (representing dark silicon). High contrast, scientific visualization.",
      "conceptVideoPrompt": "A visual transition of a CPU operating at full power, then dynamically scaling down voltage and frequency (DVFS). Sections of the chip power down completely, turning dark, while a battery icon fills up. Clean, modern motion graphics.",
      "learningAids": [
        {
          "id": "cpu-gpu-memory-design-301-l05-a1",
          "type": "image",
          "title": "The Power Wall",
          "content": "Graph illustrating the breakdown of dynamic vs. static (leakage) power in modern CMOS transistors."
        },
        {
          "id": "cpu-gpu-memory-design-301-l05-a2",
          "type": "animation",
          "title": "Power Gating vs. Clock Gating",
          "content": "Animation showing clock gating stopping switching activity, while power gating cuts off the voltage supply entirely."
        }
      ]
    },
    {
      "id": "cpu-gpu-memory-design-301-l06",
      "title": "Checkpoint 2: Interconnects & Power",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A stylized glowing battery icon intertwined with a microchip mesh network, set against a dark, sleek background with subtle grid lines.",
      "conceptVideoPrompt": "A looping animation of a data packet navigating a 3D mesh network, followed by a power meter dropping to a green 'efficient' zone. Seamless loop, tech-focused.",
      "questions": [
        {
          "id": "cpu-gpu-memory-design-301-l06-q1",
          "text": "What is the main advantage of a Network-on-Chip (NoC) over a traditional shared bus architecture?",
          "skillId": "cpu-gpu-memory-design-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Higher scalable bandwidth and support for concurrent communications."
            },
            {
              "id": "b",
              "text": "It requires fewer wires and less silicon area."
            },
            {
              "id": "c",
              "text": "It eliminates the need for cache coherence protocols."
            },
            {
              "id": "d",
              "text": "It operates entirely without a clock signal."
            }
          ],
          "correctOptionId": "a",
          "explanation": "A shared bus becomes a bottleneck as core counts increase. NoCs provide scalable, parallel communication paths."
        },
        {
          "id": "cpu-gpu-memory-design-301-l06-q2",
          "text": "Which technique is most effective at reducing static (leakage) power in an idle CPU core?",
          "skillId": "cpu-gpu-memory-design-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "Power Gating"
            },
            {
              "id": "b",
              "text": "Clock Gating"
            },
            {
              "id": "c",
              "text": "Pipelining"
            },
            {
              "id": "d",
              "text": "Branch Prediction"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Power gating uses sleep transistors to completely cut off the power supply to a block, eliminating leakage current. Clock gating only reduces dynamic power."
        },
        {
          "id": "cpu-gpu-memory-design-301-l06-q3",
          "text": "What does the term 'Dark Silicon' refer to in modern processor design?",
          "skillId": "cpu-gpu-memory-design-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The portion of a chip that must remain powered off to stay within the Thermal Design Power (TDP) limit."
            },
            {
              "id": "b",
              "text": "Silicon that has been damaged during the manufacturing process."
            },
            {
              "id": "c",
              "text": "Memory regions that are inaccessible to the operating system."
            },
            {
              "id": "d",
              "text": "The physical layer of the chip that does not contain any transistors."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Due to power density constraints, we cannot power all transistors on a modern dense chip simultaneously without overheating it, resulting in 'dark' (unpowered) silicon."
        }
      ],
      "learningAids": [
        {
          "id": "cpu-gpu-memory-design-301-l06-a1",
          "type": "mnemonic",
          "title": "Power Equation",
          "content": "Dynamic Power = Capacitance × Voltage² × Frequency. Notice that Voltage is squared, making DVFS highly effective!"
        }
      ],
      "imageUrl": "/generated-images/refinery/cpu-gpu-memory-design-301-l06.png"
    },
    {
      "id": "cpu-gpu-memory-design-301-l07",
      "title": "Hardware Verification Flows",
      "type": "video",
      "duration": 11,
      "lessonImagePrompt": "A futuristic magnifying glass inspecting a complex circuit board, revealing glowing green checkmarks and red error nodes. Conceptual 3D art, depth of field, macro.",
      "conceptVideoPrompt": "An animation showing a stream of test vectors hitting a digital twin of a CPU. A bug is caught, highlighted in red, and a formal mathematical proof equation resolves to 'True' in glowing green text.",
      "learningAids": [
        {
          "id": "cpu-gpu-memory-design-301-l07-a1",
          "type": "image",
          "title": "UVM Testbench Architecture",
          "content": "Diagram showing the Sequencer, Driver, Monitor, and Scoreboard in a Universal Verification Methodology environment."
        },
        {
          "id": "cpu-gpu-memory-design-301-l07-a2",
          "type": "animation",
          "title": "Formal vs. Simulation",
          "content": "Visual comparison of simulation (testing specific paths) versus formal verification (mathematically proving all possible states)."
        }
      ],
      "imageUrl": "/generated-images/refinery/cpu-gpu-memory-design-301-l07.png"
    },
    {
      "id": "cpu-gpu-memory-design-301-l08",
      "title": "Formal Verification Assertion Builder",
      "type": "interactive",
      "duration": 14,
      "lessonImagePrompt": "A split screen showing complex SystemVerilog code on one side and a visual state machine diagram on the other, with glowing transition arrows. Hacker aesthetic, dark theme.",
      "conceptVideoPrompt": "A user interface animation where logic blocks are connected to form an assertion. A timeline scrubs forward, showing a signal violating the assertion, triggering a visual alarm.",
      "metadata": {
        "prompts": [
          "Write a SystemVerilog Assertion (SVA) for the FIFO full flag.",
          "Identify the edge case not covered by the current constrained-random testbench.",
          "Analyze the formal counter-example trace to find the root cause of the bug."
        ]
      },
      "learningAids": [
        {
          "id": "cpu-gpu-memory-design-301-l08-a1",
          "type": "practice",
          "title": "Assertion Challenge",
          "content": "Construct properties to ensure a cache controller never enters an invalid state."
        }
      ],
      "imageUrl": "/generated-images/refinery/cpu-gpu-memory-design-301-l08.png"
    },
    {
      "id": "cpu-gpu-memory-design-301-l09",
      "title": "Checkpoint 3: Verification",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A glowing shield icon protecting a microchip, symbolizing robust hardware verification. Neon blue and purple lighting, sleek metallic textures.",
      "conceptVideoPrompt": "A rapid scan effect passing over a silicon die, highlighting verified blocks in green. A progress bar reaches 100% coverage. Satisfying, crisp animation.",
      "questions": [
        {
          "id": "cpu-gpu-memory-design-301-l09-q1",
          "text": "What is the primary difference between simulation-based verification and formal verification?",
          "skillId": "cpu-gpu-memory-design-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Simulation uses test vectors to check specific scenarios, while formal uses mathematical proofs to explore all possible states."
            },
            {
              "id": "b",
              "text": "Simulation is done on physical silicon, while formal is done on software models."
            },
            {
              "id": "c",
              "text": "Formal verification is faster but less accurate than simulation."
            },
            {
              "id": "d",
              "text": "Simulation requires assertions, while formal verification relies entirely on random testing."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Formal verification exhaustively proves properties mathematically, guaranteeing the absence of bugs for that property, whereas simulation only tests the scenarios generated by test vectors."
        },
        {
          "id": "cpu-gpu-memory-design-301-l09-q2",
          "text": "In the Universal Verification Methodology (UVM), what is the role of the 'Scoreboard'?",
          "skillId": "cpu-gpu-memory-design-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "To compare the actual output of the Design Under Test (DUT) against the expected output from a reference model."
            },
            {
              "id": "b",
              "text": "To generate random stimulus for the DUT."
            },
            {
              "id": "c",
              "text": "To drive signals onto the physical pins of the chip."
            },
            {
              "id": "d",
              "text": "To synthesize the RTL code into a gate-level netlist."
            }
          ],
          "correctOptionId": "a",
          "explanation": "The Scoreboard receives transactions from monitors and checks if the DUT's behavior matches the golden reference model."
        },
        {
          "id": "cpu-gpu-memory-design-301-l09-q3",
          "text": "Why is coverage-driven verification essential in modern CPU design?",
          "skillId": "cpu-gpu-memory-design-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It quantifies which parts of the design space have been tested, guiding further test generation to hit untested areas."
            },
            {
              "id": "b",
              "text": "It automatically fixes bugs found in the RTL code."
            },
            {
              "id": "c",
              "text": "It reduces the power consumption of the final chip."
            },
            {
              "id": "d",
              "text": "It replaces the need for a testbench entirely."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Coverage metrics (code coverage, functional coverage) tell verification engineers when they have tested enough of the design to confidently tape out."
        }
      ],
      "learningAids": [
        {
          "id": "cpu-gpu-memory-design-301-l09-a1",
          "type": "mnemonic",
          "title": "UVM Flow",
          "content": "Sequence -> Driver -> DUT -> Monitor -> Scoreboard."
        }
      ],
      "imageUrl": "/generated-images/refinery/cpu-gpu-memory-design-301-l09.png"
    },
    {
      "id": "cpu-gpu-memory-design-301-l10",
      "title": "Final Mastery Checkpoint",
      "type": "quiz",
      "duration": 15,
      "lessonImagePrompt": "A majestic, glowing golden trophy shaped like a high-end CPU processor, resting on a sleek black pedestal with laser lights. Epic, triumphant lighting, 8k.",
      "conceptVideoPrompt": "A cinematic fly-through of all the concepts covered: out-of-order execution, NoC routing, power gating, and verification, culminating in a bright flash revealing a 'Mastery Achieved' badge.",
      "questions": [
        {
          "id": "cpu-gpu-memory-design-301-l10-q1",
          "text": "Which combination of techniques best addresses the 'Power Wall' in modern microarchitecture?",
          "skillId": "cpu-gpu-memory-design-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Dynamic Voltage and Frequency Scaling (DVFS), Power Gating, and specialized hardware accelerators."
            },
            {
              "id": "b",
              "text": "Increasing clock speed, deepening the pipeline, and removing caches."
            },
            {
              "id": "c",
              "text": "Using a single, massive core instead of multiple smaller cores."
            },
            {
              "id": "d",
              "text": "Disabling branch prediction and out-of-order execution."
            }
          ],
          "correctOptionId": "a",
          "explanation": "DVFS and Power Gating manage active and static power, while accelerators perform specific tasks much more efficiently than general-purpose cores."
        },
        {
          "id": "cpu-gpu-memory-design-301-l10-q2",
          "text": "In a many-core processor, how does a directory-based cache coherence protocol scale better than a snooping protocol?",
          "skillId": "cpu-gpu-memory-design-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It avoids broadcasting requests to all cores by maintaining a centralized or distributed directory of cache states."
            },
            {
              "id": "b",
              "text": "It uses a shared bus which is inherently faster for hundreds of cores."
            },
            {
              "id": "c",
              "text": "It forces all cores to write directly to main memory, bypassing caches."
            },
            {
              "id": "d",
              "text": "It relies on software to manually flush caches."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Snooping requires broadcasting on a shared medium, which doesn't scale. Directories track which caches hold which lines, allowing point-to-point messages."
        },
        {
          "id": "cpu-gpu-memory-design-301-l10-q3",
          "text": "When optimizing a microarchitecture for a highly parallel workload, which interconnect topology offers the best balance of latency, bandwidth, and physical layout scalability?",
          "skillId": "cpu-gpu-memory-design-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "2D Mesh"
            },
            {
              "id": "b",
              "text": "Shared Bus"
            },
            {
              "id": "c",
              "text": "Fully Connected (Crossbar)"
            },
            {
              "id": "d",
              "text": "Unidirectional Ring"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A 2D Mesh maps perfectly to planar silicon layouts, scales well with core count, and provides excellent bisection bandwidth compared to rings or buses."
        }
      ],
      "learningAids": [
        {
          "id": "cpu-gpu-memory-design-301-l10-a1",
          "type": "mnemonic",
          "title": "Architecture Mastery",
          "content": "Performance, Power, Area, and Correctness (PPAC) are the four pillars of modern CPU design."
        }
      ]
    }
  ]
};
