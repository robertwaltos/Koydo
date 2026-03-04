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
          "content": "Every CPU, which acts like the brain of a computer, operates by continuously repeating a fundamental process known as the instruction cycle. This cycle consists of four essential steps: fetch, decode, execute, and write-back. Let's break down each of these steps to understand how they work together to perform tasks.\nIn the first step, called fetch, the program counter (PC) plays a crucial role. It keeps track of the address of the next instruction that the CPU needs to execute. This instruction is then retrieved from the computer's memory and loaded into a special storage area known as the instruction register (IR). Once the instruction is fetched, the PC updates itself to point to the next instruction in line, ensuring that the CPU knows what to do next.\nNext comes the decode step. During this phase, the control unit of the CPU interprets the instruction that has been fetched. It examines two key components of the instruction: the opcode and the operand. The opcode is a code that specifies what operation the CPU needs to perform, while the operand provides the data that will be used in that operation. This decoding process is essential because it helps the CPU understand exactly what needs to be done.\nThe third step is the execute phase, where the actual calculations and operations take place. Here, the arithmetic logic unit (ALU) comes into action. The ALU is responsible for performing various mathematical operations, such as addition and subtraction, as well as logical operations like AND and OR. It can also compare values to determine their relationships. This is where the CPU does the heavy lifting, processing the data according to the instructions it has received.\nFinally, we reach the write-back step. In this last phase, the results of the computations performed by the ALU are saved back into memory or a register. This ensures that the outcomes of the operations are stored and can be used for future instructions or processes.\nModern CPUs are incredibly powerful and efficient, capable of completing billions of these instruction cycles every second. Their clock speeds typically range from 1 to 6 GHz, allowing them to perform complex tasks at remarkable speeds. Understanding the instruction cycle is fundamental to grasping how computers operate and execute programs effectively.\nContext recap: Every CPU, which acts like the brain of a computer, operates by continuously repeating a fundamental process known as the instruction cycle. This cycle consists of four essential steps: fetch, decode, execute, and write-back. Let's break down each of these steps to understand how they work together to perform tasks. In the first step, called fetch, the program counter (PC) plays a crucial role.\nWhy this matters: The Instruction Cycle helps learners in Engineering connect ideas from CPU, GPU, and Memory Architecture to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints.\nGuided check: Ask yourself, \"What is the claim?\", \"Which evidence is strongest?\", and \"What would change my conclusion?\" Use the terms instruction, cycle, execute, step, operations, perform, needs, phase while answering to reinforce vocabulary and precision."
        },
        {
          "id": "cpu-gpu-memory-design-101-l01-c2",
          "title": "ALU, Registers, and Control Unit",
          "content": "The arithmetic logic unit, commonly known as the ALU, is a vital component of the central processing unit (CPU) that handles all the mathematical and logical calculations. Think of the ALU as the brain of the CPU when it comes to performing operations. It can carry out basic arithmetic tasks such as addition, subtraction, multiplication, and division. Additionally, it performs logical operations, which are essential for decision-making processes in computing, such as AND, OR, XOR, and NOT.\nThe ALU gets its data from a special storage area called the register file. This register file consists of very fast storage locations known as registers. In modern CPUs, you typically find between 16 to 32 of these registers. They are incredibly quick, operating at the same speed as the CPU clock, which makes them the fastest type of memory available in the entire system. This speed is crucial because it allows the CPU to access and process data without delay, ensuring efficient performance.\nThe control unit acts like the conductor of an orchestra, coordinating all the different parts of the CPU to work together harmoniously. It sends out timing signals that ensure each component knows when to perform its task. There are two main types of control units: hardwired and microprogrammed. A hardwired control unit uses fixed logic circuits to connect specific instructions to corresponding actions, making it very efficient but less flexible. On the other hand, a microprogrammed control unit uses a small memory area to store a set of instructions that guide the control unit's operations. This allows for more complex instructions and greater flexibility in processing.\nMoreover, the control unit is responsible for managing how data moves around inside the CPU. It decides which registers will be used for calculations and determines where the results of those calculations will be sent. This internal management is crucial for the overall performance of the CPU, as it ensures that data flows smoothly and efficiently throughout the system. Understanding these components and their functions is essential for anyone interested in computer engineering and architecture, as they form the foundation of how computers operate.\nContext recap: The arithmetic logic unit, commonly known as the ALU, is a vital component of the central processing unit (CPU) that handles all the mathematical and logical calculations. Think of the ALU as the brain of the CPU when it comes to performing operations. It can carry out basic arithmetic tasks such as addition, subtraction, multiplication, and division. Additionally, it performs logical operations, which are essential for decision-making processes in computing, such as AND, OR, XOR, and NOT.\nWhy this matters: ALU, Registers, and Control Unit helps learners in Engineering connect ideas from CPU, GPU, and Memory Architecture to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "cpu-gpu-memory-design-101-l01-c3",
          "title": "Von Neumann vs Harvard Architecture",
          "content": "The von Neumann architecture is a foundational concept in computer design, introduced by the mathematician John von Neumann in 1945. This architecture organizes computer systems in a way that uses a single memory space to store both instructions (the commands that tell the computer what to do) and data (the information that the computer processes). This design simplifies programming because the CPU, or central processing unit, can access both instructions and data through one shared pathway, known as a bus.\nHowever, this simplicity comes with a challenge known as the 'von Neumann bottleneck.' This bottleneck occurs because the CPU can only fetch either an instruction or data at any given moment, not both at the same time. This limitation can slow down processing speed, especially in complex tasks where both instructions and data are needed quickly.\nTo address this limitation, the Harvard architecture was developed. Unlike the von Neumann architecture, the Harvard architecture features separate memory spaces for instructions and data. This means that the CPU can access instructions and data simultaneously, which significantly improves processing speed. This design is particularly useful in specialized applications like digital signal processors (DSPs) and microcontrollers, which are often used in devices like smartphones and embedded systems.\nInterestingly, most modern general-purpose CPUs actually use a combination of both architectures. They implement a modified Harvard architecture by having separate caches for instructions and data, which allows for faster access, while still sharing a larger unified memory space for overall flexibility. This hybrid approach helps modern CPUs achieve a balance between speed and versatility, making them capable of handling a wide range of tasks efficiently. Understanding these architectures is crucial for anyone interested in computer engineering, as they form the basis for how computers operate today.\nContext recap: The von Neumann architecture is a foundational concept in computer design, introduced by the mathematician John von Neumann in 1945. This architecture organizes computer systems in a way that uses a single memory space to store both instructions (the commands that tell the computer what to do) and data (the information that the computer processes). This design simplifies programming because the CPU, or central processing unit, can access both instructions and data through one shared pathway, known as a bus. However, this simplicity comes with a challenge known as the 'von Neumann bottleneck.' This bottleneck occurs because the CPU can only fetch either an instruction or data at any given moment, not both at the same time."
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
          "content": "Instruction pipelining is an important technique used in computer architecture that allows multiple instructions to be processed simultaneously, much like how an assembly line operates in a factory. Imagine a factory where different workers are responsible for different tasks on a product. In the same way, pipelining breaks down the processing of instructions into several stages, allowing each stage to work on a different instruction at the same time.\nThe classic five-stage pipeline used in Reduced Instruction Set Computers (RISC) consists of five key steps: 1) Instruction Fetch (IF), where the instruction is retrieved from memory; 2) Instruction Decode/Register Read (ID), where the instruction is interpreted and the necessary data is read from registers; 3) Execute/Address Calculation (EX), where the actual operation is performed; 4) Memory Access (MEM), where data is read from or written to memory; and 5) Write-Back (WB), where the results are written back to the registers.\nIn a non-pipelined design, each instruction would take five clock cycles to complete before the next one could begin. This means that if you have a series of instructions, they would be processed one after the other, leading to slower overall performance. However, with pipelining, a new instruction can enter the pipeline with each clock cycle. This allows for a continuous flow of instructions, so while each individual instruction still takes five cycles to finish, the overall throughput can approach one instruction per cycle once the pipeline is fully utilized.\nTheoretically, a pipeline with k stages can achieve a speedup of k times compared to a non-pipelined design. However, in practice, the actual speedup is often less than this ideal due to various challenges known as pipeline hazards, which can occur when instructions depend on each other. Additionally, unequal stage delays and the overhead of filling and draining the pipeline during branches can also affect performance.\nModern CPUs have taken this concept further by implementing deeper pipelines. For example, Intel's Skylake architecture features approximately 14 to 19 stages in its pipeline, which allows for even higher clock frequencies and improved processing speeds. This advancement in technology enables computers to perform more tasks efficiently and quickly, making them more powerful and capable of handling complex operations.\nContext recap: Instruction pipelining is an important technique used in computer architecture that allows multiple instructions to be processed simultaneously, much like how an assembly line operates in a factory. Imagine a factory where different workers are responsible for different tasks on a product. In the same way, pipelining breaks down the processing of instructions into several stages, allowing each stage to work on a different instruction at the same time. The classic five-stage pipeline used in Reduced Instruction Set Computers (RISC) consists of five key steps: 1) Instruction Fetch (IF), where the instruction is retrieved from memory; 2) Instruction Decode/Register Read (ID), where the instruction is interpreted and the necessary data is read from registers; 3) Execute/Address Calculation (EX), where the actual operation is performed; 4) Memory Access (MEM), where data is read from or written to memory; and 5) Write-Back (WB), where the results are written back to the registers."
        },
        {
          "id": "cpu-gpu-memory-design-101-l02-c2",
          "title": "Pipeline Hazards",
          "content": "In a CPU pipeline, there are three main types of hazards that can cause delays or problems in processing instructions. Understanding these hazards is crucial for optimizing the performance of a CPU.\nThe first type is called data hazards. These occur when one instruction depends on the result of a previous instruction that hasn't completed yet. For example, imagine you have an instruction that adds two numbers together, and right after that, you have another instruction that subtracts a number from the result of that addition. The second instruction must wait until the first one finishes its task. This waiting can slow down the entire process. To address this issue, a technique known as forwarding can be employed. Forwarding allows the result of the first instruction to be sent directly to the second instruction without having to wait for the first instruction to finish writing its result back to memory. This helps keep the pipeline moving smoothly and efficiently.\nThe second type of hazard is called control hazards. These arise when the CPU encounters a branch instruction, which can change the flow of the program. For instance, if the CPU needs to decide whether to execute a certain set of instructions based on a condition, it may have already fetched instructions that it might not need if the branch is taken. This can lead to wasted processing time. To manage control hazards, CPUs use branch prediction techniques. These techniques make educated guesses about the outcome of the branch instruction. If the prediction is correct, the CPU continues executing smoothly. However, if the guess is wrong, the pipeline has to be cleared, which can waste several cycles of processing time.\nThe third type of hazard is known as structural hazards. These occur when two instructions try to use the same hardware resource at the same time. For example, if both an instruction fetch and a data load try to access the same memory resource simultaneously, it can create a conflict. To resolve structural hazards, engineers often implement solutions such as dual-ported caches, which allow multiple accesses to memory at the same time, or they may use separate memory systems for instructions and data. These solutions help ensure that the CPU can operate efficiently without unnecessary delays.\nBy understanding and addressing these hazards, engineers can design more effective and faster CPUs, leading to better overall performance in computers and other devices.\nContext recap: In a CPU pipeline, there are three main types of hazards that can cause delays or problems in processing instructions. Understanding these hazards is crucial for optimizing the performance of a CPU. The first type is called data hazards. These occur when one instruction depends on the result of a previous instruction that hasn't completed yet.\nWhy this matters: Pipeline Hazards helps learners in Engineering connect ideas from CPU, GPU, and Memory Architecture to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "cpu-gpu-memory-design-101-l02-c3",
          "title": "Superscalar and Out-of-Order Execution",
          "content": "A superscalar processor is a special type of computer chip that can work on multiple instructions at the same time during each clock cycle. Imagine it like a busy restaurant kitchen where several chefs are preparing different dishes simultaneously. This is made possible because the processor has several execution units, which are like the chefs in the kitchen. These units include multiple arithmetic logic units (ALUs) and other specialized components that can perform different tasks in parallel, allowing the processor to be more efficient and faster.\nThe dispatch logic in the CPU acts like a manager in the kitchen. It looks at all the instructions that need to be executed and sends those that can be done independently to the available execution units at the same time. This means that if one instruction is waiting for data, another instruction that doesn't depend on it can still be processed, which helps keep everything running smoothly.\nOut-of-order (OoO) execution is another clever technique used by superscalar processors. It allows instructions to be executed as soon as their required data is ready, rather than strictly following the order they appear in the program. Think of it as a chef who starts preparing a dish as soon as they have all the ingredients, even if another dish is still being cooked. This flexibility helps improve the overall efficiency of the processor.\nTo keep everything organized and ensure that the program runs correctly, a reorder buffer (ROB) is used. This buffer tracks the instructions and ensures they finish in the correct order, which is crucial for the program to work as intended. It’s like a checklist that the manager uses to make sure every dish is served in the right sequence.\nAdditionally, register renaming is a technique that helps eliminate unnecessary dependencies between instructions. It does this by mapping the registers used in the program to a larger set of physical registers. This way, the processor can avoid conflicts that might slow it down.\nModern CPUs, such as the AMD Zen 5 and Apple M4, are incredibly powerful and can handle many operations at once. They can dispatch between 6 to 10 micro-operations per cycle and maintain a reorder buffer with over 300 entries. This capability allows them to extract significant instruction-level parallelism, which means they can perform many tasks simultaneously, greatly enhancing their performance and efficiency in executing complex programs.\nContext recap: A superscalar processor is a special type of computer chip that can work on multiple instructions at the same time during each clock cycle. Imagine it like a busy restaurant kitchen where several chefs are preparing different dishes simultaneously. This is made possible because the processor has several execution units, which are like the chefs in the kitchen. These units include multiple arithmetic logic units (ALUs) and other specialized components that can perform different tasks in parallel, allowing the processor to be more efficient and faster.\nWhy this matters: Superscalar and Out-of-Order Execution helps learners in Engineering connect ideas from CPU, GPU, and Memory Architecture to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
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
          "content": "Computer memory is organized in a special way called a hierarchy, which helps balance three important factors: speed, size, and cost. At the very top of this hierarchy are CPU registers. These are tiny storage areas that hold 64 bits of data each and can be accessed in less than 1 nanosecond, making them incredibly fast. Imagine being able to grab information almost instantly!\nNext in line is the L1 cache. This cache is a bit larger than the CPU registers, typically ranging from 32 to 64 kilobytes for each core of the CPU, and it also has very quick access times of around 1 nanosecond. Think of the L1 cache as a super-fast drawer where the CPU can quickly find the most frequently used information.\nBelow the L1 cache is the L2 cache. This cache can hold between 256 kilobytes to 1 megabyte of data per core and has slightly slower access times, ranging from 3 to 10 nanoseconds. It serves as a secondary storage area that is still quite fast, allowing the CPU to retrieve data quickly when it’s not found in the L1 cache.\nThen we have the L3 cache, which is shared among multiple cores of the CPU. This cache can hold between 4 to 64 megabytes of data and has access times of 10 to 30 nanoseconds. The L3 cache acts like a communal storage area where different cores can access shared information, helping them work together efficiently.\nAll of these caches use a type of memory called SRAM (Static RAM). SRAM is special because it is very fast and does not need to be refreshed like other types of memory. This means it can hold onto data as long as the power is on, making it ideal for quick access.\nBelow the caches, we find the main memory, known as DRAM (Dynamic RAM). This memory is much larger, typically ranging from 8 to 64 gigabytes, but it is slower than the caches, with access times of 50 to 100 nanoseconds. Think of DRAM as a larger storage room where more data can be kept, but it takes a little longer to get to it compared to the smaller, faster caches.\nAt the bottom of the memory hierarchy is secondary storage, which includes devices like SSDs (Solid State Drives) and HDDs (Hard Disk Drives). These are even slower, with access times ranging from 50 to 200 microseconds for SSDs and 5 to 10 milliseconds for HDDs.\nIn summary, each level of this memory hierarchy is larger but also slower than the one above it. This organization is very important because it helps keep frequently used data close to the CPU, allowing for quick access and efficient processing. By understanding this hierarchy, we can appreciate how computers manage and retrieve data effectively, making them powerful tools for various tasks.\nContext recap: Computer memory is organized in a special way called a hierarchy, which helps balance three important factors: speed, size, and cost. At the very top of this hierarchy are CPU registers. These are tiny storage areas that hold 64 bits of data each and can be accessed in less than 1 nanosecond, making them incredibly fast. Imagine being able to grab information almost instantly!\nWhy this matters: The Memory Hierarchy Pyramid helps learners in Engineering connect ideas from CPU, GPU, and Memory Architecture to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "cpu-gpu-memory-design-101-l04-c2",
          "title": "SRAM vs DRAM",
          "content": "In the world of computer memory, there are two primary types of semiconductor memory technologies that play crucial roles: SRAM and DRAM. Let's break these down to understand their differences and uses better.\nSRAM, which stands for Static Random Access Memory, is a type of memory that uses a unique arrangement of transistors to store each bit of data. This arrangement consists of a pair of cross-coupled inverters, which means that each bit requires six transistors. Because of this design, SRAM can access data incredibly quickly, usually within a range of 1 to 10 nanoseconds. This speed is one of the reasons why SRAM is favored for cache memory, which is a small amount of very fast memory located close to the CPU. Another advantage of SRAM is that it does not need to be refreshed like other types of memory, making it very efficient for quick data retrieval. However, the downside is that using six transistors for each bit makes SRAM more expensive and less dense compared to other memory types. This is why you will typically find SRAM used in smaller quantities, primarily in cache memory where speed is critical.\nOn the other hand, we have DRAM, which stands for Dynamic Random Access Memory. DRAM takes a different approach to storing data. Instead of using multiple transistors, DRAM stores each bit as an electrical charge in a tiny capacitor, and this charge is accessed through a single transistor. This design allows DRAM to achieve a much higher density, meaning it can store significantly more data in the same physical space compared to SRAM—about 6 to 10 times more! However, there is a trade-off. The capacitor that holds the charge can leak over time, which means that DRAM must be refreshed regularly, typically every 64 milliseconds, to maintain the data it holds. Additionally, access times for DRAM are slower, usually around 50 to 100 nanoseconds.\nModern DRAM technologies have advanced significantly. For example, DDR5 is a current standard that operates at incredibly high speeds, reaching data rates of up to 8800 MT/s (million transfers per second) with dual 32-bit channels per module. This makes it suitable for high-performance computing tasks. Another type, LPDDR5X, is designed for mobile devices. It not only achieves impressive speeds of up to 8533 MT/s but also reduces the voltage to 1.05 volts, which helps save battery power while still providing fast performance. In a typical DDR5-6400 dual-channel configuration, the bandwidth can reach around 102.4 GB/s, allowing for rapid data transfer and processing.\nIn summary, while both SRAM and DRAM are essential for computer memory, they serve different purposes and have distinct characteristics that make them suitable for various applications. Understanding these differences helps us appreciate how computers manage and access data efficiently.\nContext recap: In the world of computer memory, there are two primary types of semiconductor memory technologies that play crucial roles: SRAM and DRAM. Let's break these down to understand their differences and uses better. SRAM, which stands for Static Random Access Memory, is a type of memory that uses a unique arrangement of transistors to store each bit of data. This arrangement consists of a pair of cross-coupled inverters, which means that each bit requires six transistors.\nWhy this matters: SRAM vs DRAM helps learners in Engineering connect ideas from CPU, GPU, and Memory Architecture to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "cpu-gpu-memory-design-101-l04-c3",
          "title": "Virtual Memory and Page Tables",
          "content": "Virtual memory is an innovative technique that allows computers to manage their memory more efficiently, creating the impression that they have a larger amount of memory available than they actually do. This system provides each program with the illusion that it has its own expansive and continuous block of memory, even when the physical RAM (Random Access Memory) is limited. To achieve this, the operating system and hardware work together to divide the virtual memory into fixed-size blocks known as pages. These pages are typically 4 KB in size, but there are also larger options available, such as 2 MB or even 1 GB pages, which can be used for specific applications that require more memory.\nTo keep track of where these virtual pages are located in the physical memory, a structure called a page table is used. This page table acts like a map, linking virtual page numbers to their corresponding physical frame numbers in the RAM. When the CPU (Central Processing Unit) needs to access a specific virtual address, it relies on a special component called the memory management unit (MMU) to look up the physical address associated with that virtual address.\nHowever, since the page table itself is stored in the main memory, accessing it can take additional time. To speed up this process, a mechanism known as the Translation Lookaside Buffer (TLB) is employed. The TLB is a small, fast cache that stores recent page table entries, allowing the CPU to quickly retrieve the physical address without having to access the page table in main memory each time. This optimization is crucial, as TLB hit rates are typically above 99%, meaning that most of the time, the CPU can find the information it needs very quickly.\nIn cases where the CPU tries to access a page that is not currently loaded into physical memory, this situation is referred to as a page fault. When a page fault occurs, the operating system must step in to load the required page from the disk into RAM. This process can be quite slow and costly in terms of CPU cycles, taking millions of cycles to complete. To further enhance efficiency, multi-level page tables are utilized. These structures help reduce the memory overhead associated with storing mappings for the entire virtual address space, which can be quite large, especially in modern systems that support 48-bit or 57-bit virtual addresses. By organizing the page tables into multiple levels, the system can manage memory more effectively, ensuring that programs run smoothly and efficiently, even when physical memory is limited.\nContext recap: Virtual memory is an innovative technique that allows computers to manage their memory more efficiently, creating the impression that they have a larger amount of memory available than they actually do. This system provides each program with the illusion that it has its own expansive and continuous block of memory, even when the physical RAM (Random Access Memory) is limited. To achieve this, the operating system and hardware work together to divide the virtual memory into fixed-size blocks known as pages. These pages are typically 4 KB in size, but there are also larger options available, such as 2 MB or even 1 GB pages, which can be used for specific applications that require more memory."
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
          "content": "A cache is a special type of memory that plays a crucial role in helping computers run faster by storing small blocks of data. These blocks are usually 64 bytes each, which is a manageable size for quick access. The way data is organized in the cache is known as the mapping strategy, and it significantly affects how efficiently the cache operates.\nIn a direct-mapped cache, each block of memory is assigned to one specific cache line. This assignment is determined by a straightforward calculation, which involves taking the block address and using a modulo operation with the total number of cache lines. This method is fast and easy to implement, making it a popular choice. However, it has a downside: if multiple pieces of data frequently need to be accessed and they map to the same cache line, this can lead to what we call 'conflict misses.' This means that one piece of data can push another out of the cache, causing delays when the system has to retrieve the data again from slower memory.\nOn the other hand, a fully-associative cache offers more flexibility. In this type of cache, any block of data can be stored in any cache line. This eliminates the possibility of conflict misses because there are no restrictions on where data can go. However, this flexibility comes at a cost: the system must check all cache lines to find a match whenever it needs to access data. This requires more complex hardware and can slow down the process, especially as the number of cache lines increases.\nTo find a middle ground between these two approaches, we have set-associative caches. In a set-associative cache, the cache is divided into groups called sets. Each block of data is assigned to a specific set based on its address, but within that set, it can occupy any of the available lines. This means that while there are still some restrictions, there is more room for data to be stored without conflicts. Most modern Level 1 (L1) caches use 4-way or 8-way set-associative designs, which means that each set contains 4 or 8 lines, respectively. Larger caches, like Level 2 (L2) and Level 3 (L3) caches, may use even more ways, such as 8-way to 16-way associativity, to further reduce the chances of missing data and to improve overall performance. By understanding these different cache mapping strategies, we can appreciate how they contribute to the efficiency of computer systems and help them run smoothly and quickly.\nContext recap: A cache is a special type of memory that plays a crucial role in helping computers run faster by storing small blocks of data. These blocks are usually 64 bytes each, which is a manageable size for quick access. The way data is organized in the cache is known as the mapping strategy, and it significantly affects how efficiently the cache operates. In a direct-mapped cache, each block of memory is assigned to one specific cache line.\nWhy this matters: Cache Mapping Strategies helps learners in Engineering connect ideas from CPU, GPU, and Memory Architecture to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "cpu-gpu-memory-design-101-l05-c2",
          "title": "Address Decomposition and Cache Lookups",
          "content": "When a CPU needs to access data from memory, it uses a special method to break down the memory address into three important parts: the tag, the index, and the offset. Each of these parts plays a crucial role in helping the CPU quickly find the information it needs. Let's explore each of these components in detail.\nFirst, the offset is the smallest part of the address. It tells the cache exactly which byte of data to look for within a cache line. Imagine a cache line as a row of boxes, each holding a piece of data. If a cache line is 64 bytes long, we need 6 bits to identify each box because 2 raised to the power of 6 equals 64. This means that with 6 bits, we can label each byte from 0 to 63, making it easy to find the exact piece of data we want.\nNext, we have the index. This part of the address helps the CPU determine which set of cache lines to search through. If our cache has 256 sets, we need 8 bits for the index. This is because 2 raised to the power of 8 equals 256, allowing us to label each set from 0 to 255. By using the index, the CPU can quickly narrow down its search to a specific group of cache lines, making the process much faster.\nThe last part is the tag. The tag is made up of the remaining bits of the address after the index and offset have been accounted for. It serves as a label that helps the CPU verify whether the data stored in the cache is the correct one. When the CPU accesses the cache, it first uses the index to find the right set of cache lines. Then, it checks the tags of each line in that set to see if any of them match the tag from the original memory address.\nIf the CPU finds a match, this is called a cache hit, and it can use the data right away, which is very fast. However, if there is no match, this is known as a cache miss. In this case, the CPU has to go to a slower level of memory to fetch the data it needs. The time it takes to retrieve data after a cache miss can vary significantly. For example, fetching data from the next level of cache (like L2) might take around 10 cycles, while fetching from the main memory (like DRAM) could take up to 200 cycles.\nTo manage the cache effectively, computers use different strategies to decide which data to keep and which to remove when the cache is full. One common strategy is called Least Recently Used (LRU), which keeps track of which pieces of data have been used most recently and evicts the least recently used data when necessary. Another strategy is called pseudo-LRU, which is a simpler version of LRU. These strategies help ensure that the cache remains efficient and can provide the CPU with the data it needs as quickly as possible.\nContext recap: When a CPU needs to access data from memory, it uses a special method to break down the memory address into three important parts: the tag, the index, and the offset. Each of these parts plays a crucial role in helping the CPU quickly find the information it needs. Let's explore each of these components in detail. First, the offset is the smallest part of the address.\nWhy this matters: Address Decomposition and Cache Lookups helps learners in Engineering connect ideas from CPU, GPU, and Memory Architecture to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "cpu-gpu-memory-design-101-l05-c3",
          "title": "Write Policies and Coherence",
          "content": "When the CPU, which is the brain of the computer, needs to write or update data, it relies on a special storage area called the cache. The cache is much faster than the main memory, so it plays a crucial role in speeding up data access. However, the cache must decide how to handle these updates carefully. One common method is known as 'write-through.' In this approach, every time the CPU writes new data, it immediately updates both the cache and the next level of memory. This ensures that everything stays consistent, meaning that both the cache and the main memory have the same information. However, this method can create a lot of write traffic, which is like a traffic jam for data, slowing things down.\nAnother method is called 'write-back.' With write-back, when the CPU updates data, it only changes the cache and marks that data as 'dirty,' indicating that it has been modified. The actual writing to the next level of memory happens later, usually when the cache line is replaced or evicted. This method is more efficient because if the CPU makes several updates to the same piece of data before it needs to write it back, only one write operation is needed instead of multiple ones. This significantly reduces the amount of writing that has to happen, making the system faster overall.\nIn systems with multiple CPUs, known as multi-core systems, it becomes even more important to ensure that all cores have a consistent view of the memory. This means that if one core updates data, the other cores should see the same updated information. To manage this, we use something called cache coherence protocols. One popular protocol is called MESI, which stands for Modified, Exclusive, Shared, and Invalid. This protocol helps keep track of which caches have copies of each piece of data and ensures that they stay synchronized. By using these methods and protocols, we can make sure that our computer systems run smoothly and efficiently, even when multiple processors are working at the same time.\nContext recap: When the CPU, which is the brain of the computer, needs to write or update data, it relies on a special storage area called the cache. The cache is much faster than the main memory, so it plays a crucial role in speeding up data access. However, the cache must decide how to handle these updates carefully. One common method is known as 'write-through.' In this approach, every time the CPU writes new data, it immediately updates both the cache and the next level of memory.\nWhy this matters: Write Policies and Coherence helps learners in Engineering connect ideas from CPU, GPU, and Memory Architecture to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
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
          "content": "Graphics Processing Units, commonly known as GPUs, are powerful tools designed to process a vast amount of data simultaneously. This capability is referred to as massive data parallelism. Unlike Central Processing Units (CPUs), which are optimized to perform single tasks quickly using intricate pipelines and large memory caches, GPUs are engineered to execute thousands of simpler tasks at the same time. This is made possible through a model called SIMD, which stands for Single Instruction, Multiple Data. In the SIMD model, a single instruction can be applied to multiple pieces of data all at once. For instance, if you want to change the color of every pixel in an image, a GPU can accomplish this task in one go rather than processing each pixel individually, which would take much longer.\nNVIDIA, a leading company in GPU technology, has developed an advanced model called SIMT, which stands for Single Instruction, Multiple Threads. In this model, groups of 32 threads, referred to as warps, execute the same instruction simultaneously but can operate on different pieces of data. Each thread within a warp has its own set of registers, which are small storage locations for data, and can follow its own path of execution. However, if some threads in a warp need to take different paths, it can lead to a slowdown in processing. This is because those threads must be executed one after the other instead of all at once, which reduces efficiency.\nAMD, another prominent GPU manufacturer, employs a similar concept known as wavefronts, which typically consist of 32 or 64 threads. This architecture is particularly effective when all threads in a warp are executing the same instructions. This characteristic makes GPUs especially well-suited for tasks such as rendering graphics, performing complex matrix calculations, and running neural networks, which are essential for various applications in artificial intelligence and machine learning. By understanding how GPUs operate and their unique execution models, we can appreciate their role in modern computing and their ability to handle demanding tasks efficiently.\nContext recap: Graphics Processing Units, commonly known as GPUs, are powerful tools designed to process a vast amount of data simultaneously. This capability is referred to as massive data parallelism. Unlike Central Processing Units (CPUs), which are optimized to perform single tasks quickly using intricate pipelines and large memory caches, GPUs are engineered to execute thousands of simpler tasks at the same time. This is made possible through a model called SIMD, which stands for Single Instruction, Multiple Data.\nWhy this matters: SIMD, SIMT, and the GPU Execution Model helps learners in Engineering connect ideas from CPU, GPU, and Memory Architecture to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "cpu-gpu-memory-design-101-l07-c2",
          "title": "Streaming Multiprocessors and Thread Scheduling",
          "content": "Modern Graphics Processing Units (GPUs) are fascinating pieces of technology that play a crucial role in rendering images and performing complex calculations. At the heart of a GPU are many small processing units known as Streaming Multiprocessors (SMs) in NVIDIA's terminology, or Compute Units (CUs) in AMD's terminology. Each of these SMs is like a mini-computer that contains several groups of CUDA cores, which are the execution units responsible for carrying out calculations. Think of CUDA cores as the workers in a factory, each handling a specific task to produce a final product efficiently.\nIn addition to CUDA cores, each SM is equipped with a warp scheduler. This scheduler is essential because it organizes how threads, which are sequences of instructions, are executed. Each SM also has a register file that temporarily stores data needed for calculations, shared memory that allows for quick communication between threads, and special function units that can perform complex mathematical operations such as sine and cosine.\nFor example, the powerful NVIDIA RTX 4090 GPU features 128 SMs, and each of these SMs contains 128 CUDA cores. This impressive setup results in a total of 16,384 cores working together to process information.\nThreads in a GPU are organized in a hierarchical structure to maximize efficiency. They group into warps, with each warp consisting of 32 threads. These warps then form thread blocks, which can contain up to 1024 threads, and finally, these blocks come together to create a grid. This organization allows the GPU to manage and execute many tasks simultaneously, which is crucial for high-performance computing.\nOne of the standout features of the warp scheduler is its ability to switch between different warps without any delay. When one warp is waiting for data from memory, the scheduler can quickly switch to another warp that is ready to execute, ensuring that the GPU remains productive. This efficiency is possible because the state of each warp is kept in memory, allowing for seamless transitions between tasks.\nMoreover, each SM has shared memory, typically ranging from 48 to 100 KB. This shared memory enables threads within the same block to communicate with each other quickly, which is much faster than accessing the main memory of the GPU. This feature is vital for optimizing performance and ensuring that calculations are completed as swiftly as possible. Understanding these components and their interactions is key to grasping how modern GPUs achieve their remarkable performance in graphics rendering and computational tasks.\nContext recap: Modern Graphics Processing Units (GPUs) are fascinating pieces of technology that play a crucial role in rendering images and performing complex calculations. At the heart of a GPU are many small processing units known as Streaming Multiprocessors (SMs) in NVIDIA's terminology, or Compute Units (CUs) in AMD's terminology. Each of these SMs is like a mini-computer that contains several groups of CUDA cores, which are the execution units responsible for carrying out calculations. Think of CUDA cores as the workers in a factory, each handling a specific task to produce a final product efficiently.\nWhy this matters: Streaming Multiprocessors and Thread Scheduling helps learners in Engineering connect ideas from CPU, GPU, and Memory Architecture to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "cpu-gpu-memory-design-101-l07-c3",
          "title": "GPU Memory: GDDR vs HBM",
          "content": "The performance of a Graphics Processing Unit (GPU) is significantly affected by its memory bandwidth, which refers to how quickly data can be read from or written to the memory. One of the most widely used types of memory in GPUs is called GDDR, which stands for Graphics Double Data Rate Synchronous Dynamic Random Access Memory. GDDR memory is designed to operate with a wide data bus and high clock speeds, allowing it to achieve very fast data transfer rates. For instance, the GDDR6X memory, which is found in NVIDIA's RTX 40-series GPUs, can reach an astonishing bandwidth of up to 1 terabyte per second (TB/s). This impressive speed is made possible by using a 384-bit bus and a special encoding technique that enables it to transmit two bits of data simultaneously.\nHowever, while GDDR memory offers high performance, it also has some drawbacks. It tends to consume a lot of power, which can be a concern for energy efficiency. Additionally, GDDR is limited by the number of pins it can use and the design of the printed circuit board (PCB) that connects everything together.\nIn contrast, High Bandwidth Memory (HBM) adopts a different design philosophy. Instead of laying memory chips out flat, HBM stacks them vertically, which allows for a more compact design. These stacked memory chips are connected to the GPU using tiny vertical connections known as through-silicon vias (TSVs). This innovative approach enables HBM to have a very wide data bus, typically 1024 bits per stack, while operating at lower clock speeds compared to GDDR. For example, HBM3E can deliver up to 1.2 TB/s per stack and does so with significantly lower power consumption than GDDR memory.\nHBM is particularly favored in data center GPUs, such as NVIDIA's H100 and AMD's MI300X, where the efficiency of bandwidth relative to power usage is crucial for demanding tasks like training artificial intelligence models. However, there is a trade-off to consider: HBM is much more expensive to produce, costing between three to five times more per gigabyte than GDDR. This higher cost is a significant reason why most consumer GPUs continue to use GDDR memory, as it helps keep the overall price of the graphics cards more affordable for users. Understanding these differences between GDDR and HBM is essential for anyone interested in the technology behind GPUs and their applications in various fields, including gaming, AI, and data processing.\nContext recap: The performance of a Graphics Processing Unit (GPU) is significantly affected by its memory bandwidth, which refers to how quickly data can be read from or written to the memory. One of the most widely used types of memory in GPUs is called GDDR, which stands for Graphics Double Data Rate Synchronous Dynamic Random Access Memory. GDDR memory is designed to operate with a wide data bus and high clock speeds, allowing it to achieve very fast data transfer rates. For instance, the GDDR6X memory, which is found in NVIDIA's RTX 40-series GPUs, can reach an astonishing bandwidth of up to 1 terabyte per second (TB/s)."
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
          "content": "Amdahl's Law is an important concept in computer science that was developed by Gene Amdahl in 1967. It helps us understand how much faster a program can run when we split its tasks among multiple processors. Imagine you have a program that can be divided into two parts: one part that can be executed simultaneously by several processors, and another part that must be executed one step at a time. We represent the portion of the program that can be run in parallel as P, and the portion that must run sequentially as (1 - P). To find out how much faster the program can run when using N processors, we can use the formula S = 1 / ((1 - P) + P/N). This formula tells us the overall speedup we can achieve.\nAs we increase the number of processors (N), we can see that the maximum speedup approaches 1 / (1 - P). For example, if 90% of a program can be run in parallel (which means P = 0.9), the best speedup we can achieve with an infinite number of processors is only 10 times faster. This is because the remaining 10% of the program that must run sequentially becomes the limiting factor. If we only use 8 processors, the speedup would be approximately 4.7 times faster than running it on a single processor.\nThis law teaches us a crucial lesson: even a small part of a program that cannot be parallelized can significantly limit how much we can speed up the entire program. This means that when designing programs, we should aim to minimize the serial portions to maximize performance.\nAdditionally, there is another concept called Gustafson's Law, which offers a different perspective. It suggests that as the size of the problem increases, the portion of the program that can be run in parallel usually increases as well. This means that larger problems can achieve nearly linear speedup, even if the serial part seems large when looking at smaller problems. Understanding both Amdahl's Law and Gustafson's Law is essential for optimizing program performance and effectively utilizing the power of parallel processing.\nContext recap: Amdahl's Law is an important concept in computer science that was developed by Gene Amdahl in 1967. It helps us understand how much faster a program can run when we split its tasks among multiple processors. Imagine you have a program that can be divided into two parts: one part that can be executed simultaneously by several processors, and another part that must be executed one step at a time. We represent the portion of the program that can be run in parallel as P, and the portion that must run sequentially as (1 - P).\nWhy this matters: Amdahl's Law helps learners in Engineering connect ideas from CPU, GPU, and Memory Architecture to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "cpu-gpu-memory-design-101-l08-c2",
          "title": "ILP, TLP, and DLP",
          "content": "In the world of computing, parallelism is a powerful concept that can be found at various levels, helping to improve performance and efficiency. One important type of parallelism is called Instruction-Level Parallelism (ILP). This technique makes use of independent instructions that can be executed within a single thread of execution. Modern CPUs are designed to take advantage of this by being able to issue multiple instructions at the same time, a process known as superscalar execution. Additionally, these CPUs can rearrange instructions to optimize their performance, which is referred to as out-of-order execution. Typically, most programs can utilize around 2 to 4 instructions of ILP, allowing them to run more efficiently.\nAnother significant form of parallelism is Thread-Level Parallelism (TLP). This allows multiple threads to run simultaneously, either on separate cores or by using techniques like simultaneous multithreading (SMT) or Hyper-Threading on a single core. For TLP to work effectively, programmers need to write code that explicitly supports parallel execution. This can be done using various programming tools and libraries such as pthreads, OpenMP, or asynchronous tasks. The beauty of TLP is that it scales with the number of available cores in a processor, meaning that as more cores are added, the potential for parallel execution increases.\nData-Level Parallelism (DLP) is another crucial aspect of parallel computing. It involves performing the same operation on many data elements at the same time. For example, CPU SIMD (Single Instruction, Multiple Data) extensions like SSE and AVX-512 can process between 4 to 16 elements simultaneously. In contrast, GPUs (Graphics Processing Units) are designed to handle thousands of elements at once, making them exceptionally powerful for tasks that require processing large amounts of data. DLP is particularly beneficial for applications such as matrix operations, image processing, and physics simulations, where the same calculations need to be applied to many data points.\nModern processors are designed to exploit all three types of parallelism: a multi-core CPU utilizes TLP across its cores, ILP within each core's pipeline, and DLP through SIMD units. On the other hand, GPUs primarily focus on DLP and TLP by managing a vast number of threads and employing SIMT (Single Instruction, Multiple Threads) execution. This combination of parallelism techniques allows for significant improvements in computational speed and efficiency, making modern computing systems incredibly powerful.\nContext recap: In the world of computing, parallelism is a powerful concept that can be found at various levels, helping to improve performance and efficiency. One important type of parallelism is called Instruction-Level Parallelism (ILP). This technique makes use of independent instructions that can be executed within a single thread of execution. Modern CPUs are designed to take advantage of this by being able to issue multiple instructions at the same time, a process known as superscalar execution.\nWhy this matters: ILP, TLP, and DLP helps learners in Engineering connect ideas from CPU, GPU, and Memory Architecture to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "cpu-gpu-memory-design-101-l08-c3",
          "title": "Memory-Bound vs Compute-Bound",
          "content": "When we discuss whether a program is compute-bound or memory-bound, we are exploring what factors limit its performance. A program is labeled as compute-bound when its speed is mainly restricted by how quickly it can carry out arithmetic operations. In this scenario, the arithmetic logic unit (ALU) or floating-point units are working at full capacity, but the program is still waiting for additional tasks to process. For instance, tasks such as dense matrix multiplication, which involves multiplying large sets of numbers, and cryptographic hashing, which is used to secure data, are examples of compute-bound operations.\nConversely, a program is considered memory-bound when it spends more time waiting for data to be fetched from memory than it does performing actual calculations. This situation can arise when the processor experiences delays due to cache misses—when the data it needs is not found in the faster cache memory—or when it has to wait for access to dynamic random-access memory (DRAM), which is slower. Common examples of memory-bound tasks include operations on sparse matrices, which are matrices filled mostly with zeros, traversing graphs, which involves exploring connections between data points, and various operations in databases, which manage large amounts of information.\nTo help visualize these concepts, we can use the roofline model. This model plots the maximum performance of a system, measured in floating-point operations per second (FLOPS), against the arithmetic intensity, which is the number of FLOPS per byte of memory traffic. If a kernel's arithmetic intensity falls below a specific threshold, it is classified as memory-bound; if it exceeds that threshold, it is deemed compute-bound.\nWhen it comes to optimizing memory-bound code, programmers focus on enhancing how data is accessed and organized. This can involve strategies like improving spatial and temporal locality, which means arranging data in a way that makes it quicker to access, and using techniques such as prefetching, where data is loaded into memory before it is actually needed. On the other hand, optimizing compute-bound code typically involves methods like vectorization, which uses Single Instruction, Multiple Data (SIMD) techniques to perform the same operation on multiple data points simultaneously. Additionally, programmers may improve algorithms or take advantage of specialized hardware, such as tensor cores, which are designed specifically for efficient matrix operations. By understanding the differences between compute-bound and memory-bound programs, developers can make informed decisions to enhance performance and efficiency in their applications.\nContext recap: When we discuss whether a program is compute-bound or memory-bound, we are exploring what factors limit its performance. A program is labeled as compute-bound when its speed is mainly restricted by how quickly it can carry out arithmetic operations. In this scenario, the arithmetic logic unit (ALU) or floating-point units are working at full capacity, but the program is still waiting for additional tasks to process. For instance, tasks such as dense matrix multiplication, which involves multiplying large sets of numbers, and cryptographic hashing, which is used to secure data, are examples of compute-bound operations.\nWhy this matters: Memory-Bound vs Compute-Bound helps learners in Engineering connect ideas from CPU, GPU, and Memory Architecture to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
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
