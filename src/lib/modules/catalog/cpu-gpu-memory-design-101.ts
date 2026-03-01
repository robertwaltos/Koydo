import type { LearningModule } from "@/lib/modules/types";

export const CpuGpuMemoryDesign101Module: LearningModule = {
  "id": "cpu-gpu-memory-design-101",
  "title": "CPU, GPU, and Memory Architecture",
  "description": "Explore the internal architecture of modern processors and memory systems — from CPU instruction pipelines and cache hierarchies to GPU parallel execution models and performance optimization strategies.",
  "subject": "Engineering",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "engineering",
    "computer-architecture"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Describe the CPU instruction cycle (fetch, decode, execute, write-back) and explain the roles of the ALU, control unit, and register file",
    "Analyze instruction pipelining stages, identify data/control/structural hazards, and explain branch prediction techniques",
    "Compare the memory hierarchy from registers through L1/L2/L3 caches to main memory and describe SRAM vs DRAM trade-offs",
    "Evaluate cache mapping strategies (direct-mapped, set-associative, fully-associative) and their impact on hit rates and performance",
    "Explain GPU architecture concepts including SIMD/SIMT execution, streaming multiprocessors, thread warps, and memory types (GDDR vs HBM)",
    "Apply Amdahl's Law to predict parallel speedup and distinguish between instruction-level, thread-level, and data-level parallelism",
    "Synthesize knowledge across CPU, GPU, and memory domains through integrated checkpoint and mastery assessments"
  ],
  "lessons": [
    {
      "id": "cpu-gpu-memory-design-101-l01",
      "title": "CPU Fundamentals",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Trace the fetch-decode-execute-write-back instruction cycle",
        "Identify the functions of the ALU, control unit, and register file",
        "Compare von Neumann and Harvard architectures"
      ],
      "chunks": [
        {
          "id": "cpu-gpu-memory-design-101-l01-c1",
          "title": "The Instruction Cycle",
          "content": "Every CPU operates by repeating a fundamental loop called the instruction cycle: fetch, decode, execute, and write-back. During fetch, the program counter (PC) holds the address of the next instruction, which is loaded from memory into the instruction register (IR). The PC then increments to point at the subsequent instruction. In the decode stage, the control unit interprets the opcode and operand fields of the instruction, determining which functional units to activate and which registers to read. Execute is where the actual computation occurs — the arithmetic logic unit (ALU) performs addition, subtraction, logical AND/OR, shifts, or comparisons on the operand values. Finally, write-back stores the result into the destination register or memory location. Modern CPUs can process billions of these cycles per second, with clock speeds typically ranging from 1 to 6 GHz."
        },
        {
          "id": "cpu-gpu-memory-design-101-l01-c2",
          "title": "ALU, Registers, and Control Unit",
          "content": "The ALU is the computational engine of the CPU, performing both arithmetic operations (add, subtract, multiply, divide) and bitwise logical operations (AND, OR, XOR, NOT, shifts). It receives operands from the register file — a small, ultra-fast storage area containing typically 16 to 32 general-purpose registers in modern architectures. Registers operate at the same speed as the CPU clock, making them the fastest storage in the entire system. The control unit orchestrates all components by generating timing and control signals. In a hardwired control unit, fixed combinational logic maps each opcode to a sequence of micro-operations. In a microprogrammed control unit, a small ROM stores micro-instructions that are sequenced by a microsequencer. The control unit also manages data paths, selecting which registers feed the ALU inputs and where results are routed via internal buses and multiplexers."
        },
        {
          "id": "cpu-gpu-memory-design-101-l01-c3",
          "title": "Von Neumann vs Harvard Architecture",
          "content": "The von Neumann architecture, proposed by John von Neumann in 1945, uses a single unified memory space for both instructions and data, connected to the CPU by one shared bus. This simplicity enables self-modifying code and straightforward memory management, but creates the 'von Neumann bottleneck' — the CPU can either fetch an instruction or access data in any given cycle, not both simultaneously. The Harvard architecture addresses this by providing separate memory spaces and buses for instructions and data, allowing simultaneous instruction fetch and data access. This doubles effective memory bandwidth and is widely used in DSP processors and microcontrollers like the AVR family. Most modern general-purpose CPUs use a modified Harvard architecture: separate L1 instruction and data caches (Harvard-style) backed by a unified L2/L3 cache and main memory (von Neumann-style), combining the bandwidth advantages of Harvard with the flexibility of von Neumann."
        }
      ],
      "flashcards": [
        {
          "id": "cpu-gpu-memory-design-101-l01-f1",
          "front": "What are the four stages of the basic CPU instruction cycle?",
          "back": "Fetch (load instruction from memory), Decode (interpret opcode and operands), Execute (perform the operation in the ALU), and Write-back (store the result to a register or memory)."
        },
        {
          "id": "cpu-gpu-memory-design-101-l01-f2",
          "front": "What is the role of the program counter (PC)?",
          "back": "The PC holds the memory address of the next instruction to be fetched. It increments automatically after each fetch, or is updated by branch/jump instructions to redirect execution flow."
        },
        {
          "id": "cpu-gpu-memory-design-101-l01-f3",
          "front": "What is the von Neumann bottleneck?",
          "back": "In the von Neumann architecture, instructions and data share a single memory bus, so the CPU cannot fetch an instruction and read/write data simultaneously. This limits throughput to one memory access per cycle."
        },
        {
          "id": "cpu-gpu-memory-design-101-l01-f4",
          "front": "How does a modified Harvard architecture work in modern CPUs?",
          "back": "Separate L1 caches for instructions and data provide Harvard-style parallelism, while a unified L2/L3 cache and main memory provide von Neumann-style flexibility and simplicity for the memory subsystem."
        }
      ],
      "learningAids": [
        {
          "id": "cpu-gpu-memory-design-101-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "cpu-gpu-memory-design-101-l02",
      "title": "Pipelining and Superscalar Design",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Explain the five classic pipeline stages and how pipelining increases throughput",
        "Classify pipeline hazards as data, control, or structural and describe mitigation techniques",
        "Distinguish between in-order and out-of-order execution models"
      ],
      "chunks": [
        {
          "id": "cpu-gpu-memory-design-101-l02-c1",
          "title": "The Classic Five-Stage Pipeline",
          "content": "Instruction pipelining overlaps the execution of multiple instructions, much like an assembly line in a factory. The classic RISC five-stage pipeline consists of: Instruction Fetch (IF), Instruction Decode / Register Read (ID), Execute / Address Calculation (EX), Memory Access (MEM), and Write-Back (WB). Without pipelining, each instruction takes five clock cycles to complete before the next can begin. With pipelining, a new instruction enters the pipeline every cycle, so although each individual instruction still takes five cycles (latency), the throughput approaches one instruction per cycle once the pipeline is full. A pipeline with k stages can theoretically achieve a k-times speedup over a non-pipelined design. In practice, the speedup is less due to pipeline hazards, unequal stage delays, and pipeline fill/drain overhead at branches. Modern CPUs use deeper pipelines — Intel's Skylake has approximately 14–19 stages — to enable higher clock frequencies."
        },
        {
          "id": "cpu-gpu-memory-design-101-l02-c2",
          "title": "Pipeline Hazards",
          "content": "Three types of hazards can stall or disrupt the pipeline. Data hazards occur when an instruction depends on the result of a preceding instruction that hasn't finished. A Read-After-Write (RAW) hazard is the most common: for example, ADD R1, R2, R3 followed by SUB R4, R1, R5, where SUB needs R1 before ADD writes it. Forwarding (bypassing) mitigates this by routing the ALU result directly to the next instruction's input without waiting for write-back. Control hazards arise from branch instructions — the pipeline has already fetched subsequent instructions before knowing whether the branch is taken. Branch prediction (static or dynamic) guesses the branch outcome; a misprediction requires flushing the pipeline, wasting several cycles. Structural hazards occur when two instructions need the same hardware resource simultaneously, such as a single-port memory being accessed for both an instruction fetch and a data load. Dual-ported caches or separate instruction/data memories resolve this."
        },
        {
          "id": "cpu-gpu-memory-design-101-l02-c3",
          "title": "Superscalar and Out-of-Order Execution",
          "content": "A superscalar processor issues multiple instructions per clock cycle by having duplicate execution units — for example, two ALUs, a floating-point unit, and a load/store unit operating in parallel. The dispatch logic examines instruction dependencies and sends independent instructions to available units simultaneously. Out-of-order (OoO) execution further improves utilization by allowing instructions to execute as soon as their operands are ready, regardless of program order. The reorder buffer (ROB) tracks instructions and ensures they commit (retire) in original program order, maintaining correct program semantics and supporting precise exceptions. Register renaming eliminates false dependencies (WAR and WAW hazards) by mapping architectural registers to a larger pool of physical registers. Modern CPUs like AMD Zen 5 and Apple M4 can dispatch 6–10 micro-operations per cycle and maintain a reorder buffer of 300+ entries, enabling extraction of significant instruction-level parallelism."
        }
      ],
      "flashcards": [
        {
          "id": "cpu-gpu-memory-design-101-l02-f1",
          "front": "What are the five classic RISC pipeline stages?",
          "back": "IF (Instruction Fetch), ID (Instruction Decode / Register Read), EX (Execute / Address Calculation), MEM (Memory Access), and WB (Write-Back)."
        },
        {
          "id": "cpu-gpu-memory-design-101-l02-f2",
          "front": "What is a RAW (Read-After-Write) data hazard?",
          "back": "A RAW hazard occurs when an instruction tries to read a register before a preceding instruction has finished writing its result to that register. Forwarding/bypassing can resolve it without stalling."
        },
        {
          "id": "cpu-gpu-memory-design-101-l02-f3",
          "front": "How does branch prediction mitigate control hazards?",
          "back": "The processor predicts whether a branch will be taken or not and speculatively fetches instructions along the predicted path. If correct, no penalty occurs; if wrong, the pipeline is flushed and re-filled from the correct path."
        },
        {
          "id": "cpu-gpu-memory-design-101-l02-f4",
          "front": "What is the purpose of the reorder buffer (ROB)?",
          "back": "The ROB tracks out-of-order executed instructions and ensures they retire (commit results) in original program order, preserving correct program behavior and enabling precise exceptions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "cpu-gpu-memory-design-101-l02-a1",
          "type": "sorting_buckets",
          "title": "Classify Pipeline Hazards",
          "description": "Sort each scenario into the correct pipeline hazard category.",
          "buckets": [
            "Data Hazard",
            "Control Hazard",
            "Structural Hazard"
          ],
          "items": [
            {
              "text": "SUB reads R1 before ADD writes to R1",
              "bucket": "Data Hazard"
            },
            {
              "text": "Pipeline fetches wrong path after a branch",
              "bucket": "Control Hazard"
            },
            {
              "text": "Two instructions both need the single ALU at the same time",
              "bucket": "Structural Hazard"
            },
            {
              "text": "MUL writes R3 before DIV finishes reading old R3 value",
              "bucket": "Data Hazard"
            },
            {
              "text": "Conditional jump outcome unknown until EX stage",
              "bucket": "Control Hazard"
            },
            {
              "text": "Instruction fetch and data load both access single-port memory",
              "bucket": "Structural Hazard"
            },
            {
              "text": "LOAD result not ready when next ADD needs it as input",
              "bucket": "Data Hazard"
            }
          ]
        }
      ],
      "learningAids": [
        {
          "id": "cpu-gpu-memory-design-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "cpu-gpu-memory-design-101-l03",
      "title": "CPU Architecture Checkpoint",
      "type": "quiz",
      "duration": 8,
      "questions": [
        {
          "id": "cpu-gpu-memory-design-101-l03-q1",
          "text": "During which stage of the instruction cycle does the ALU perform arithmetic or logical operations on operand values?",
          "skillId": "cpu-gpu-memory-design-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Fetch"
            },
            {
              "id": "b",
              "text": "Decode"
            },
            {
              "id": "c",
              "text": "Execute"
            },
            {
              "id": "d",
              "text": "Write-back"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The Execute stage is where the ALU performs the actual computation. Fetch loads the instruction from memory, Decode interprets the opcode and reads registers, and Write-back stores the result."
        },
        {
          "id": "cpu-gpu-memory-design-101-l03-q2",
          "text": "A five-stage pipeline can theoretically achieve what maximum throughput improvement over a non-pipelined processor?",
          "skillId": "cpu-gpu-memory-design-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "2× speedup"
            },
            {
              "id": "b",
              "text": "5× speedup"
            },
            {
              "id": "c",
              "text": "10× speedup"
            },
            {
              "id": "d",
              "text": "25× speedup"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A k-stage pipeline can ideally achieve k× throughput improvement. With five stages, the theoretical maximum is 5× because once the pipeline is full, one instruction completes every cycle instead of every five cycles."
        },
        {
          "id": "cpu-gpu-memory-design-101-l03-q3",
          "text": "Which technique resolves a Read-After-Write (RAW) data hazard without inserting pipeline stalls?",
          "skillId": "cpu-gpu-memory-design-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Branch prediction"
            },
            {
              "id": "b",
              "text": "Forwarding (bypassing)"
            },
            {
              "id": "c",
              "text": "Register renaming"
            },
            {
              "id": "d",
              "text": "Cache prefetching"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Forwarding (also called bypassing) routes the ALU result directly to the next instruction's input before it is written back to the register file, avoiding the stall. Branch prediction addresses control hazards, and register renaming eliminates false (WAR/WAW) dependencies."
        },
        {
          "id": "cpu-gpu-memory-design-101-l03-q4",
          "text": "What is the primary disadvantage of the von Neumann architecture compared to the Harvard architecture?",
          "skillId": "cpu-gpu-memory-design-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It cannot support self-modifying code"
            },
            {
              "id": "b",
              "text": "It requires two separate memory systems"
            },
            {
              "id": "c",
              "text": "Instructions and data share a single bus, limiting bandwidth"
            },
            {
              "id": "d",
              "text": "It does not support virtual memory"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The von Neumann bottleneck arises because a single bus is shared between instruction fetches and data accesses, preventing simultaneous access. Harvard architecture uses separate buses and memories for instructions and data, doubling effective bandwidth."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 2,
          "apply": 1
        }
      },
      "learningAids": [
        {
          "id": "cpu-gpu-memory-design-101-l03-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "cpu-gpu-memory-design-101-l04",
      "title": "Memory Hierarchy",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Order the memory hierarchy from fastest/smallest to slowest/largest",
        "Compare SRAM and DRAM in terms of structure, speed, density, and cost",
        "Explain virtual memory, page tables, and the role of the TLB"
      ],
      "chunks": [
        {
          "id": "cpu-gpu-memory-design-101-l04-c1",
          "title": "The Memory Hierarchy Pyramid",
          "content": "Computer memory is organized in a hierarchy that trades off speed, size, and cost. At the top sit CPU registers — typically 64 bits each, with access times under 1 nanosecond and total capacity measured in kilobytes. Next comes the L1 cache (32–64 KB per core, ~1 ns access), followed by L2 cache (256 KB–1 MB per core, ~3–10 ns), and L3 cache (shared among cores, 4–64 MB, ~10–30 ns). All caches use SRAM (Static RAM), which stores each bit in a flip-flop circuit of six transistors, retaining data as long as power is supplied without needing refresh. Below the caches sits main memory (DRAM), typically 8–64 GB with access times of 50–100 ns. At the bottom is secondary storage — SSDs (50–200 µs) and HDDs (5–10 ms). Each level is roughly 10–100× larger but also 5–100× slower than the level above it. The hierarchy exploits temporal and spatial locality to keep frequently accessed data close to the CPU."
        },
        {
          "id": "cpu-gpu-memory-design-101-l04-c2",
          "title": "SRAM vs DRAM",
          "content": "SRAM and DRAM are the two fundamental semiconductor memory technologies. SRAM uses a cross-coupled inverter pair (six transistors per cell) to store each bit, providing fast access (~1–10 ns) and no need for refresh. However, six transistors per bit makes SRAM expensive and low-density, limiting its use to caches. DRAM stores each bit as charge on a tiny capacitor accessed through a single transistor (1T1C cell), achieving roughly 6–10× higher density than SRAM. The trade-off is that the capacitor leaks charge and must be refreshed every 64 ms, and access times are slower (~50–100 ns). Modern DRAM standards include DDR5, which operates at data rates up to 8800 MT/s with dual 32-bit channels per module. LPDDR5X, used in mobile devices, pushes rates to 8533 MT/s while reducing voltage to 1.05 V for power efficiency. The bandwidth of a DDR5-6400 dual-channel configuration is approximately 102.4 GB/s."
        },
        {
          "id": "cpu-gpu-memory-design-101-l04-c3",
          "title": "Virtual Memory and Page Tables",
          "content": "Virtual memory gives each process the illusion of a large, contiguous private address space, even when physical RAM is limited. The operating system and hardware divide virtual and physical memory into fixed-size pages — typically 4 KB, with support for huge pages of 2 MB or 1 GB. A page table maps virtual page numbers to physical frame numbers. When the CPU generates a virtual address, the memory management unit (MMU) looks up the corresponding physical address. Because the page table itself resides in main memory, each memory access would require two accesses without optimization. The Translation Lookaside Buffer (TLB) caches recent page table entries, with typical hit rates above 99%. A TLB miss triggers a hardware page table walk. If the requested page is not in physical memory at all (a page fault), the OS loads it from disk — a costly operation taking millions of CPU cycles. Multi-level page tables (2–5 levels on x86-64) reduce the memory overhead of storing mappings for the entire 48-bit or 57-bit virtual address space."
        }
      ],
      "flashcards": [
        {
          "id": "cpu-gpu-memory-design-101-l04-f1",
          "front": "How does SRAM differ from DRAM in cell structure?",
          "back": "SRAM uses six transistors per bit in a cross-coupled inverter arrangement (no refresh needed). DRAM uses one transistor and one capacitor per bit (1T1C), requiring periodic refresh every ~64 ms but achieving much higher density."
        },
        {
          "id": "cpu-gpu-memory-design-101-l04-f2",
          "front": "What is temporal locality?",
          "back": "Temporal locality is the tendency for a processor to access the same memory locations repeatedly within a short time span. Caches exploit this by keeping recently accessed data in fast storage."
        },
        {
          "id": "cpu-gpu-memory-design-101-l04-f3",
          "front": "What happens during a TLB miss?",
          "back": "The MMU must perform a page table walk through multiple levels of the page table in main memory to find the virtual-to-physical address mapping, then load it into the TLB for future accesses."
        },
        {
          "id": "cpu-gpu-memory-design-101-l04-f4",
          "front": "What is a page fault?",
          "back": "A page fault occurs when the requested virtual page is not present in physical RAM. The OS must load the page from secondary storage (disk/SSD) into a free physical frame, an operation costing millions of CPU cycles."
        }
      ],
      "learningAids": [
        {
          "id": "cpu-gpu-memory-design-101-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "cpu-gpu-memory-design-101-l05",
      "title": "Cache Design",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Compare direct-mapped, set-associative, and fully-associative cache organizations",
        "Calculate cache line addressing using tag, index, and offset fields",
        "Contrast write-back and write-through cache policies"
      ],
      "chunks": [
        {
          "id": "cpu-gpu-memory-design-101-l05-c1",
          "title": "Cache Mapping Strategies",
          "content": "A cache is divided into cache lines (blocks), typically 64 bytes each. The mapping strategy determines where a memory block can be placed. In a direct-mapped cache, each memory block maps to exactly one cache line (determined by the block address modulo the number of cache lines). This is simple and fast but vulnerable to conflict misses when multiple frequently-used addresses map to the same line. A fully-associative cache allows a block to reside in any cache line, eliminating conflict misses but requiring expensive parallel comparison of all tags on every access. Set-associative caches strike a balance: the cache is divided into sets, each containing N lines (N-way set-associative). A block maps to a specific set (by index) but can occupy any of the N ways within that set. Most modern L1 caches are 4-way or 8-way set-associative, while L2 and L3 caches may use 8-way to 16-way associativity to reduce miss rates at larger capacities."
        },
        {
          "id": "cpu-gpu-memory-design-101-l05-c2",
          "title": "Address Decomposition and Cache Lookups",
          "content": "Every memory address is decomposed into three fields for a cache lookup: tag, index, and offset. The offset (lowest bits) identifies the byte within a cache line — for a 64-byte line, 6 bits are needed (2⁶ = 64). The index (middle bits) selects which cache set to search — for a cache with 256 sets, 8 bits are needed. The remaining upper bits form the tag, which is stored alongside the cached data and compared during lookup to verify a hit. On a cache access, the index field selects a set, then the tag of each way in that set is compared in parallel with the address tag. A match (and valid bit set) indicates a cache hit; a mismatch across all ways is a cache miss. The miss penalty — the time to fetch data from the next level — ranges from ~10 cycles for an L2 miss served by L3, to ~200 cycles for an L3 miss served by DRAM. Replacement policies like Least Recently Used (LRU) or pseudo-LRU decide which way to evict on a miss."
        },
        {
          "id": "cpu-gpu-memory-design-101-l05-c3",
          "title": "Write Policies and Coherence",
          "content": "When the CPU writes data, the cache must decide how to handle the update. Write-through immediately propagates every write to the next level of the memory hierarchy, keeping caches and memory consistent but generating heavy write traffic. A write buffer can absorb bursts, but sustained writes may stall the CPU. Write-back only updates the cache line and marks it dirty; the modified data is written to the next level only when the line is evicted. This dramatically reduces write traffic — if a cache line is written multiple times before eviction, only one write-back occurs. Most modern caches use write-back. On a write miss, write-allocate fetches the line into cache before writing (common with write-back), while write-no-allocate writes directly to the next level without caching the line (common with write-through). In multi-core systems, cache coherence protocols like MESI (Modified, Exclusive, Shared, Invalid) ensure that all cores see a consistent view of memory by snooping or using a directory to track which caches hold copies of each line."
        }
      ],
      "flashcards": [
        {
          "id": "cpu-gpu-memory-design-101-l05-f1",
          "front": "What is a conflict miss in a direct-mapped cache?",
          "back": "A conflict miss occurs when two or more memory addresses that the program uses frequently map to the same cache line, causing them to repeatedly evict each other even though the cache has unused lines elsewhere."
        },
        {
          "id": "cpu-gpu-memory-design-101-l05-f2",
          "front": "How is an address decomposed for cache lookup?",
          "back": "The address is split into three fields: the offset (selects the byte within a cache line), the index (selects the cache set), and the tag (compared with stored tags to verify a hit)."
        },
        {
          "id": "cpu-gpu-memory-design-101-l05-f3",
          "front": "What is the advantage of write-back over write-through?",
          "back": "Write-back reduces write traffic by only writing modified data to the next memory level when the cache line is evicted, rather than on every write. Multiple writes to the same line generate only one write-back."
        },
        {
          "id": "cpu-gpu-memory-design-101-l05-f4",
          "front": "What does the MESI cache coherence protocol do?",
          "back": "MESI tracks each cache line's state as Modified, Exclusive, Shared, or Invalid across all cores, ensuring that writes by one core are visible to others and preventing stale data from being read."
        }
      ],
      "interactiveActivities": [
        {
          "id": "cpu-gpu-memory-design-101-l05-a1",
          "type": "matching_pairs",
          "title": "Match Cache Concepts to Their Definitions",
          "description": "Pair each cache concept with its correct definition.",
          "pairs": [
            {
              "left": "Direct-mapped cache",
              "right": "Each memory block maps to exactly one cache line"
            },
            {
              "left": "Fully-associative cache",
              "right": "A block can be placed in any cache line"
            },
            {
              "left": "Set-associative cache",
              "right": "A block maps to a set but can occupy any way within it"
            },
            {
              "left": "Write-back policy",
              "right": "Dirty data written to memory only on eviction"
            },
            {
              "left": "Write-through policy",
              "right": "Every write is immediately sent to the next memory level"
            },
            {
              "left": "LRU replacement",
              "right": "Evicts the cache line that was least recently accessed"
            }
          ]
        }
      ],
      "learningAids": [
        {
          "id": "cpu-gpu-memory-design-101-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "cpu-gpu-memory-design-101-l06",
      "title": "Memory Hierarchy Checkpoint",
      "type": "quiz",
      "duration": 8,
      "questions": [
        {
          "id": "cpu-gpu-memory-design-101-l06-q1",
          "text": "Which memory technology uses a single transistor and capacitor per bit and requires periodic refresh?",
          "skillId": "cpu-gpu-memory-design-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "SRAM"
            },
            {
              "id": "b",
              "text": "DRAM"
            },
            {
              "id": "c",
              "text": "Flash NAND"
            },
            {
              "id": "d",
              "text": "Register file"
            }
          ],
          "correctOptionId": "b",
          "explanation": "DRAM (Dynamic RAM) uses a 1T1C (one transistor, one capacitor) cell. The capacitor leaks charge and must be refreshed approximately every 64 ms. SRAM uses six transistors and does not require refresh."
        },
        {
          "id": "cpu-gpu-memory-design-101-l06-q2",
          "text": "In a 4-way set-associative cache, where can a given memory block be placed?",
          "skillId": "cpu-gpu-memory-design-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "In exactly one specific cache line"
            },
            {
              "id": "b",
              "text": "In any of the four lines within one specific set"
            },
            {
              "id": "c",
              "text": "In any cache line in the entire cache"
            },
            {
              "id": "d",
              "text": "Only in the first line of each set"
            }
          ],
          "correctOptionId": "b",
          "explanation": "In an N-way set-associative cache, the index bits select a specific set, and the block can be placed in any of the N ways within that set. A 4-way cache allows four possible positions per set."
        },
        {
          "id": "cpu-gpu-memory-design-101-l06-q3",
          "text": "What does the TLB (Translation Lookaside Buffer) cache?",
          "skillId": "cpu-gpu-memory-design-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Frequently used CPU instructions"
            },
            {
              "id": "b",
              "text": "Branch prediction history"
            },
            {
              "id": "c",
              "text": "Recently used virtual-to-physical page table entries"
            },
            {
              "id": "d",
              "text": "Dirty cache line addresses pending write-back"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The TLB is a small, fast cache that stores recent virtual-to-physical address translations from the page table, avoiding costly page table walks for repeated accesses to the same pages."
        },
        {
          "id": "cpu-gpu-memory-design-101-l06-q4",
          "text": "Which write policy reduces memory traffic by only writing modified data when a cache line is evicted?",
          "skillId": "cpu-gpu-memory-design-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Write-through"
            },
            {
              "id": "b",
              "text": "Write-back"
            },
            {
              "id": "c",
              "text": "Write-no-allocate"
            },
            {
              "id": "d",
              "text": "Write-around"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Write-back marks the cache line as dirty on writes and only sends the data to the next memory level when the line is evicted. This coalesces multiple writes into a single transfer, significantly reducing bandwidth usage."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 1,
          "apply": 1
        }
      }
    },
    {
      "id": "cpu-gpu-memory-design-101-l07",
      "title": "GPU Architecture",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Explain the SIMD and SIMT execution models used by modern GPUs",
        "Describe the streaming multiprocessor architecture and warp-based scheduling",
        "Compare GDDR and HBM memory technologies for GPU applications"
      ],
      "chunks": [
        {
          "id": "cpu-gpu-memory-design-101-l07-c1",
          "title": "SIMD, SIMT, and the GPU Execution Model",
          "content": "GPUs are designed for massive data parallelism. Unlike CPUs, which optimize for single-thread latency with deep pipelines and large caches, GPUs maximize throughput by executing thousands of lightweight threads simultaneously. The execution model is based on SIMD (Single Instruction, Multiple Data), where one instruction operates on many data elements in parallel — for example, applying the same transformation to every pixel in an image. NVIDIA GPUs extend this to SIMT (Single Instruction, Multiple Threads), where groups of 32 threads called warps execute the same instruction in lockstep on different data. Each thread in a warp has its own registers and can follow its own control flow path, but divergent branches cause serialization — threads taking different paths are masked off and executed sequentially, reducing efficiency. AMD's equivalent is the wavefront, typically 32 or 64 threads wide. This architecture excels when all threads in a warp follow the same path, making GPUs ideal for graphics rendering, matrix multiplication, and neural network inference."
        },
        {
          "id": "cpu-gpu-memory-design-101-l07-c2",
          "title": "Streaming Multiprocessors and Thread Scheduling",
          "content": "A modern GPU contains dozens of Streaming Multiprocessors (SMs) — NVIDIA terminology — or Compute Units (CUs) in AMD parlance. Each SM contains multiple groups of CUDA cores (execution units), a warp scheduler, a register file, shared memory (scratchpad), L1 cache, and special function units for transcendental operations (sin, cos, exp). An NVIDIA RTX 4090 contains 128 SMs, each with 128 CUDA cores, totaling 16,384 cores. Threads are organized into a hierarchy: threads group into warps (32 threads), warps form thread blocks (up to 1024 threads), and blocks compose a grid. The warp scheduler can switch between warps with zero overhead when one warp stalls on a memory access, because each warp's register state remains resident — this latency-hiding strategy is key to GPU performance. Shared memory within each SM (typically 48–100 KB) provides low-latency communication between threads in the same block, much faster than going to global DRAM."
        },
        {
          "id": "cpu-gpu-memory-design-101-l07-c3",
          "title": "GPU Memory: GDDR vs HBM",
          "content": "GPU performance depends critically on memory bandwidth. GDDR (Graphics DDR) SDRAM, the most common type, uses a wide bus and high clock rates. GDDR6X, used in NVIDIA's RTX 40-series, achieves up to 1 TB/s bandwidth with a 384-bit bus and PAM4 signaling that encodes two bits per symbol. However, GDDR is power-hungry and limited by pin count and PCB trace routing. HBM (High Bandwidth Memory) takes a radically different approach: memory dies are stacked vertically using through-silicon vias (TSVs) and connected to the GPU via a silicon interposer, providing a very wide bus (1024 bits per stack) at lower clock speeds. HBM3E delivers up to 1.2 TB/s per stack with significantly lower power per bit than GDDR. HBM is preferred for data-center GPUs (like NVIDIA H100 and AMD MI300X) where bandwidth-per-watt is critical for AI training workloads. The trade-off is cost and manufacturing complexity — HBM is 3–5× more expensive per GB than GDDR, so consumer GPUs typically stick with GDDR for cost-effectiveness."
        }
      ],
      "flashcards": [
        {
          "id": "cpu-gpu-memory-design-101-l07-f1",
          "front": "What is a warp in NVIDIA GPU terminology?",
          "back": "A warp is a group of 32 threads that execute the same instruction simultaneously in SIMT fashion. All threads in a warp share one program counter and execute in lockstep on different data elements."
        },
        {
          "id": "cpu-gpu-memory-design-101-l07-f2",
          "front": "What happens when threads in a warp take different branch paths (warp divergence)?",
          "back": "The GPU serializes execution: it first runs threads that take one path (masking off others), then runs threads on the other path. This reduces effective parallelism and throughput until the paths reconverge."
        },
        {
          "id": "cpu-gpu-memory-design-101-l07-f3",
          "front": "How does HBM achieve higher bandwidth than GDDR?",
          "back": "HBM stacks memory dies vertically with through-silicon vias (TSVs) on a silicon interposer, using a very wide bus (1024 bits per stack) at lower clocks, achieving high bandwidth with lower power per bit than GDDR's narrower, higher-clocked approach."
        },
        {
          "id": "cpu-gpu-memory-design-101-l07-f4",
          "front": "How do GPUs hide memory latency?",
          "back": "The warp scheduler switches to a different ready warp when the current warp stalls on a memory access. Since each warp's register state stays resident on the SM, context switching between warps is instantaneous (zero overhead)."
        }
      ]
    },
    {
      "id": "cpu-gpu-memory-design-101-l08",
      "title": "Parallelism and Performance",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Apply Amdahl's Law to calculate maximum theoretical speedup from parallelization",
        "Distinguish between instruction-level, thread-level, and data-level parallelism",
        "Identify memory-bound vs compute-bound bottlenecks and their optimization strategies"
      ],
      "chunks": [
        {
          "id": "cpu-gpu-memory-design-101-l08-c1",
          "title": "Amdahl's Law",
          "content": "Amdahl's Law, formulated by Gene Amdahl in 1967, quantifies the maximum speedup achievable by parallelizing a fraction of a program. If a fraction P of execution time can be parallelized across N processors, and the remaining fraction (1 − P) is inherently serial, the overall speedup is S = 1 / ((1 − P) + P/N). As N approaches infinity, the maximum speedup approaches 1 / (1 − P). For example, if 90% of a program is parallelizable (P = 0.9), the maximum speedup with infinite processors is only 10×, because the serial 10% becomes the bottleneck. With 8 processors, the speedup is 1 / (0.1 + 0.9/8) ≈ 4.7×. This law highlights a critical insight: even small serial portions severely limit scalability. Gustafson's Law offers a complementary perspective — as problem size grows, the parallel portion typically grows proportionally, so larger problems can achieve near-linear speedup even if the serial fraction on a fixed problem seems large."
        },
        {
          "id": "cpu-gpu-memory-design-101-l08-c2",
          "title": "ILP, TLP, and DLP",
          "content": "Parallelism in computing exists at multiple levels. Instruction-Level Parallelism (ILP) exploits independent instructions within a single thread — superscalar CPUs and out-of-order execution extract ILP by issuing multiple instructions per cycle. Typical programs offer 2–4 instructions of ILP. Thread-Level Parallelism (TLP) runs multiple threads concurrently on separate cores or via simultaneous multithreading (SMT/Hyper-Threading) on a single core. TLP requires explicit parallel programming (pthreads, OpenMP, or async tasks) and scales with core count. Data-Level Parallelism (DLP) applies the same operation to many data elements simultaneously — CPU SIMD extensions (SSE, AVX-512) process 4–16 elements per instruction, while GPUs process thousands. DLP is ideal for matrix operations, image processing, and physics simulations. Modern processors exploit all three: a multi-core CPU uses TLP across cores, ILP within each core's pipeline, and DLP via SIMD units. GPUs primarily exploit DLP and TLP through massive thread counts and SIMT execution."
        },
        {
          "id": "cpu-gpu-memory-design-101-l08-c3",
          "title": "Memory-Bound vs Compute-Bound",
          "content": "A program is compute-bound when its execution time is limited by the speed of arithmetic operations — the ALU or floating-point units are fully utilized while waiting for more work. Examples include dense matrix multiplication and cryptographic hashing. A program is memory-bound when it spends more time waiting for data from memory than computing — the processor stalls on cache misses or DRAM accesses. Examples include sparse matrix operations, graph traversal, and many database workloads. The roofline model visualizes this by plotting attainable performance (FLOPS) against arithmetic intensity (FLOPS per byte of memory traffic). If a kernel's arithmetic intensity is below the machine's ridge point, it is memory-bound; above it, compute-bound. Optimizing memory-bound code focuses on improving spatial/temporal locality, prefetching, and data structure layout (e.g., struct-of-arrays instead of array-of-structs). Optimizing compute-bound code focuses on vectorization (SIMD), algorithmic improvements, and leveraging specialized hardware like tensor cores for matrix operations."
        }
      ],
      "flashcards": [
        {
          "id": "cpu-gpu-memory-design-101-l08-f1",
          "front": "If 95% of a program is parallelizable, what is the maximum speedup according to Amdahl's Law?",
          "back": "Maximum speedup = 1 / (1 − 0.95) = 1 / 0.05 = 20×. The remaining 5% serial portion limits the speedup to 20× regardless of how many processors are used."
        },
        {
          "id": "cpu-gpu-memory-design-101-l08-f2",
          "front": "What is the difference between ILP and TLP?",
          "back": "ILP (Instruction-Level Parallelism) executes multiple independent instructions from a single thread simultaneously via superscalar/OoO techniques. TLP (Thread-Level Parallelism) runs multiple threads concurrently across separate cores or via SMT."
        },
        {
          "id": "cpu-gpu-memory-design-101-l08-f3",
          "front": "What does it mean for a program to be memory-bound?",
          "back": "A memory-bound program spends more time waiting for data from memory (stalling on cache misses or DRAM latency) than performing computation. Its performance is limited by memory bandwidth or latency, not ALU throughput."
        },
        {
          "id": "cpu-gpu-memory-design-101-l08-f4",
          "front": "What is the roofline model?",
          "back": "The roofline model plots attainable performance (FLOPS) against arithmetic intensity (FLOPS per byte transferred). It reveals whether a kernel is memory-bound (below the ridge point) or compute-bound (at the roofline), guiding optimization strategy."
        }
      ],
      "interactiveActivities": [
        {
          "id": "cpu-gpu-memory-design-101-l08-a1",
          "type": "sorting_buckets",
          "title": "Classify Parallelism Types",
          "description": "Sort each example into the correct parallelism category.",
          "buckets": [
            "Instruction-Level (ILP)",
            "Thread-Level (TLP)",
            "Data-Level (DLP)"
          ],
          "items": [
            {
              "text": "Superscalar CPU issues ADD and MUL in the same cycle from one thread",
              "bucket": "Instruction-Level (ILP)"
            },
            {
              "text": "Web server handles requests on 16 separate cores simultaneously",
              "bucket": "Thread-Level (TLP)"
            },
            {
              "text": "AVX-512 multiplies 16 floats in a single instruction",
              "bucket": "Data-Level (DLP)"
            },
            {
              "text": "Out-of-order execution reorders independent instructions for earlier execution",
              "bucket": "Instruction-Level (ILP)"
            },
            {
              "text": "GPU warp applies same shader to 32 pixels in parallel",
              "bucket": "Data-Level (DLP)"
            },
            {
              "text": "OpenMP spawns 8 threads to parallelize a for-loop across CPU cores",
              "bucket": "Thread-Level (TLP)"
            },
            {
              "text": "Hyper-Threading runs two threads on one core via SMT",
              "bucket": "Thread-Level (TLP)"
            },
            {
              "text": "SIMD unit processes four 32-bit integers simultaneously",
              "bucket": "Data-Level (DLP)"
            }
          ]
        }
      ]
    },
    {
      "id": "cpu-gpu-memory-design-101-l09",
      "title": "GPU & Parallelism Checkpoint",
      "type": "quiz",
      "duration": 8,
      "questions": [
        {
          "id": "cpu-gpu-memory-design-101-l09-q1",
          "text": "In NVIDIA's SIMT model, how many threads are in a single warp?",
          "skillId": "cpu-gpu-memory-design-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "8"
            },
            {
              "id": "b",
              "text": "16"
            },
            {
              "id": "c",
              "text": "32"
            },
            {
              "id": "d",
              "text": "64"
            }
          ],
          "correctOptionId": "c",
          "explanation": "An NVIDIA warp consists of 32 threads that execute the same instruction simultaneously on different data. AMD GPUs use wavefronts of 32 or 64 threads depending on the architecture generation."
        },
        {
          "id": "cpu-gpu-memory-design-101-l09-q2",
          "text": "According to Amdahl's Law, what is the maximum speedup if 80% of a program can be parallelized?",
          "skillId": "cpu-gpu-memory-design-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "4×"
            },
            {
              "id": "b",
              "text": "5×"
            },
            {
              "id": "c",
              "text": "8×"
            },
            {
              "id": "d",
              "text": "10×"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Amdahl's Law: max speedup = 1 / (1 − P) = 1 / (1 − 0.8) = 1 / 0.2 = 5×. The 20% serial portion limits the theoretical maximum to 5× even with infinite processors."
        },
        {
          "id": "cpu-gpu-memory-design-101-l09-q3",
          "text": "What happens during warp divergence on a GPU?",
          "skillId": "cpu-gpu-memory-design-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The GPU creates a new warp for each branch path"
            },
            {
              "id": "b",
              "text": "Threads on different paths are serialized — one path executes while others are masked"
            },
            {
              "id": "c",
              "text": "The entire warp is terminated and restarted"
            },
            {
              "id": "d",
              "text": "The GPU switches to CPU execution for the divergent section"
            }
          ],
          "correctOptionId": "b",
          "explanation": "During warp divergence, the GPU serializes execution by masking off threads not on the current path and executing each path sequentially. This reduces effective parallelism until the paths reconverge."
        },
        {
          "id": "cpu-gpu-memory-design-101-l09-q4",
          "text": "Which advantage does HBM have over GDDR for data-center GPUs?",
          "skillId": "cpu-gpu-memory-design-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Lower cost per gigabyte"
            },
            {
              "id": "b",
              "text": "Higher bandwidth with lower power consumption per bit"
            },
            {
              "id": "c",
              "text": "Simpler manufacturing process"
            },
            {
              "id": "d",
              "text": "Higher clock frequencies"
            }
          ],
          "correctOptionId": "b",
          "explanation": "HBM uses vertically stacked dies with through-silicon vias and a very wide bus, achieving higher bandwidth at lower power per bit compared to GDDR. GDDR is cheaper per GB but uses more power and narrower buses at higher clocks."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 1,
          "apply": 2
        }
      }
    },
    {
      "id": "cpu-gpu-memory-design-101-l10",
      "title": "Mastery Quiz: Computer Architecture",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "cpu-gpu-memory-design-101-l10-q1",
          "text": "A CPU with a 5-stage pipeline encounters a load-use data hazard. Forwarding cannot fully resolve it because the data is not available until after the MEM stage. What is the minimum number of stall cycles required?",
          "skillId": "cpu-gpu-memory-design-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "0 — forwarding eliminates all stalls"
            },
            {
              "id": "b",
              "text": "1 stall cycle (one bubble inserted)"
            },
            {
              "id": "c",
              "text": "2 stall cycles"
            },
            {
              "id": "d",
              "text": "3 stall cycles"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A load-use hazard requires one stall cycle because the LOAD result is available at the end of the MEM stage, but the dependent instruction needs it at the beginning of EX. Inserting one bubble allows forwarding from MEM/WB to EX, resolving the hazard."
        },
        {
          "id": "cpu-gpu-memory-design-101-l10-q2",
          "text": "A system has a 32 KB, 4-way set-associative L1 cache with 64-byte lines. How many sets does this cache contain?",
          "skillId": "cpu-gpu-memory-design-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "64 sets"
            },
            {
              "id": "b",
              "text": "128 sets"
            },
            {
              "id": "c",
              "text": "256 sets"
            },
            {
              "id": "d",
              "text": "512 sets"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Number of lines = cache size / line size = 32,768 / 64 = 512 lines. Number of sets = lines / associativity = 512 / 4 = 128 sets. Eight index bits (2⁷ = 128) would be used to select the set."
        },
        {
          "id": "cpu-gpu-memory-design-101-l10-q3",
          "text": "A GPU kernel has an arithmetic intensity of 2 FLOPS/byte. The GPU has peak bandwidth of 1 TB/s and peak compute of 30 TFLOPS. What is the attainable performance under the roofline model?",
          "skillId": "cpu-gpu-memory-design-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "2 TFLOPS (memory-bound)"
            },
            {
              "id": "b",
              "text": "15 TFLOPS (compute-bound)"
            },
            {
              "id": "c",
              "text": "30 TFLOPS (compute-bound)"
            },
            {
              "id": "d",
              "text": "60 TFLOPS (beyond the roofline)"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The ridge point is peak compute / peak bandwidth = 30 TFLOPS / 1 TB/s = 30 FLOPS/byte. At arithmetic intensity 2 FLOPS/byte, the kernel is memory-bound: attainable performance = bandwidth × intensity = 1 TB/s × 2 FLOPS/byte = 2 TFLOPS."
        },
        {
          "id": "cpu-gpu-memory-design-101-l10-q4",
          "text": "In a multi-core CPU using the MESI protocol, Core A holds a cache line in Modified state. Core B issues a read for the same line. What sequence of events occurs?",
          "skillId": "cpu-gpu-memory-design-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Core B reads from main memory; Core A's line remains Modified"
            },
            {
              "id": "b",
              "text": "Core A writes the line back to memory and transitions to Shared; Core B receives the data and enters Shared"
            },
            {
              "id": "c",
              "text": "Core A invalidates its line; Core B gets Exclusive state"
            },
            {
              "id": "d",
              "text": "Both cores enter Invalid state and must re-fetch from memory"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Under MESI, when another core requests a read on a Modified line, the owning core writes the dirty data back to memory (or supplies it directly via cache-to-cache transfer) and both cores transition to Shared state, ensuring coherence."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "apply": 2,
          "analyze": 2
        }
      }
    }
  ]
};
