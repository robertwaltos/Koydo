import type { LearningModule } from "@/lib/modules/types";

export const Microelectronics101Module: LearningModule = {
  id: "microelectronics-101",
  title: "Microelectronics and IC Design",
  description:
    "Explore the world of integrated circuits — from CMOS transistor physics and digital/analog IC design to wafer fabrication, VLSI layout, and reliability testing.",
  subject: "Engineering",
  tags: ["core", "curriculum", "interactive", "engineering", "microelectronics"],
  minAge: 16,
  maxAge: 99,
  version: "2.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Explain Moore's Law and classify integrated circuits by complexity level (SSI, MSI, LSI, VLSI, ULSI)",
    "Describe CMOS transistor operation including NMOS/PMOS complementary pairing, threshold voltage, and power dissipation mechanisms",
    "Analyze digital IC building blocks including CMOS logic gates, flip-flops, and the distinction between combinational and sequential circuits",
    "Identify analog IC building blocks such as current mirrors, differential pairs, operational amplifier internals, and bandgap voltage references",
    "Outline the complete IC fabrication process from photolithography and ion implantation through metallization and packaging",
    "Evaluate IC testing strategies including design for testability (DFT), built-in self-test (BIST), and reliability failure mechanisms such as electromigration and latch-up",
    "Synthesize knowledge across IC design and fabrication domains through integrated checkpoint and mastery assessments",
  ],
  lessons: [
    /* ──────────────────────────────────────────────
       L01  From Transistors to Chips  (video)
    ────────────────────────────────────────────── */
    {
      id: "microelectronics-101-l01",
      title: "From Transistors to Chips",
      type: "video",
      duration: 10,
      objectives: [
        "State Moore's Law and describe its historical accuracy and modern limitations",
        "Classify ICs as SSI, MSI, LSI, VLSI, or ULSI based on transistor count",
        "Outline the high-level wafer fabrication flow from silicon ingot to packaged die",
      ],
      chunks: [
        {
          id: "microelectronics-101-l01-c1",
          title: "The Integrated Circuit Revolution",
          content:
            "The integrated circuit (IC) was independently invented by Jack Kilby at Texas Instruments and Robert Noyce at Fairchild Semiconductor in 1958–1959. Before ICs, electronic systems relied on discrete transistors, resistors, and capacitors wired together on circuit boards — limiting complexity, reliability, and miniaturization. An IC integrates thousands to billions of transistors onto a single semiconductor die, typically silicon. This monolithic approach dramatically reduces parasitic capacitance between components, improves switching speed, lowers manufacturing cost per function, and increases reliability by eliminating solder joints between components. Modern ICs power everything from simple timer chips (the 555, with about 25 transistors) to smartphone processors containing over 15 billion transistors on a die smaller than a fingernail.",
        },
        {
          id: "microelectronics-101-l01-c2",
          title: "Moore's Law and IC Classification",
          content:
            "In 1965, Gordon Moore observed that the number of transistors on an IC doubled approximately every two years — a trend that held remarkably well for over five decades. This exponential scaling was enabled by shrinking transistor feature sizes from 10 µm in the early 1970s to below 3 nm today. ICs are classified by complexity: Small-Scale Integration (SSI) contains up to 100 transistors (basic logic gates); Medium-Scale Integration (MSI) holds 100–1,000 (counters, multiplexers); Large-Scale Integration (LSI) reaches 1,000–100,000 (early microprocessors like the Intel 8080); Very-Large-Scale Integration (VLSI) spans 100,000 to 1 billion; and Ultra-Large-Scale Integration (ULSI) exceeds 1 billion transistors. Modern CPUs and GPUs fall squarely in the ULSI category. As physical limits approach, Moore's Law has slowed, leading the industry toward 3D stacking, chiplet architectures, and new transistor designs like gate-all-around (GAA) FETs.",
        },
        {
          id: "microelectronics-101-l01-c3",
          title: "Wafer Fabrication Overview",
          content:
            "IC manufacturing begins with ultra-pure silicon refined to 99.999999999% (eleven nines) purity. The Czochralski process grows a single-crystal silicon ingot by slowly pulling a seed crystal from a molten silicon bath. The ingot is sliced into thin wafers — typically 300 mm (12 inches) in diameter and about 775 µm thick — then polished to an atomically flat mirror finish. Each wafer undergoes hundreds of processing steps organized into repeated cycles of deposition (adding thin films), photolithography (patterning with UV light through a mask), etching (removing unwanted material), and doping (introducing impurity atoms to create N-type or P-type regions). After all layers are complete, the wafer is tested electrically, diced into individual dies, and each good die is wire-bonded or flip-chip mounted into a package for protection and electrical connection to the outside world.",
        },
      ],
      flashcards: [
        {
          id: "microelectronics-101-l01-f1",
          front: "What does Moore's Law predict?",
          back: "The number of transistors on an integrated circuit doubles approximately every two years, an observation made by Gordon Moore in 1965.",
        },
        {
          id: "microelectronics-101-l01-f2",
          front: "What is the difference between LSI and VLSI?",
          back: "LSI (Large-Scale Integration) contains 1,000–100,000 transistors; VLSI (Very-Large-Scale Integration) contains 100,000 to 1 billion transistors.",
        },
        {
          id: "microelectronics-101-l01-f3",
          front: "What is the Czochralski process?",
          back: "A method of growing single-crystal silicon ingots by slowly pulling a seed crystal from a bath of molten ultra-pure silicon.",
        },
        {
          id: "microelectronics-101-l01-f4",
          front: "Why are ICs more reliable than circuits built from discrete components?",
          back: "ICs eliminate the solder joints and interconnect wires between individual components, which are common failure points. Monolithic integration also reduces parasitic effects and improves consistent manufacturing.",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L02  CMOS Technology  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "microelectronics-101-l02",
      title: "CMOS Technology",
      type: "interactive",
      duration: 12,
      objectives: [
        "Explain NMOS and PMOS transistor operation and their complementary pairing in CMOS",
        "Analyze the CMOS inverter transfer characteristic and calculate static power dissipation",
        "Describe how Dennard scaling drives transistor size reduction and its modern breakdown",
      ],
      chunks: [
        {
          id: "microelectronics-101-l02-c1",
          title: "NMOS and PMOS Transistors",
          content:
            "CMOS (Complementary Metal-Oxide-Semiconductor) technology uses two types of MOSFETs in tandem. An NMOS transistor has an N-type source and drain in a P-type substrate; it turns ON when the gate-to-source voltage (V_GS) exceeds the threshold voltage (V_th), typically 0.3–0.7 V in modern processes. When ON, it conducts current from drain to source through an N-type inversion channel. A PMOS transistor is the complement — P-type source and drain in an N-well within the substrate — and turns ON when V_GS is more negative than −|V_th|. PMOS devices pull the output toward V_DD (logic high), while NMOS devices pull it toward ground (logic low). This complementary arrangement is the foundation of all CMOS logic: at any given time, either the pull-up network (PMOS) or the pull-down network (NMOS) is active, but never both simultaneously in steady state.",
        },
        {
          id: "microelectronics-101-l02-c2",
          title: "The CMOS Inverter",
          content:
            "The CMOS inverter is the fundamental building block of digital CMOS logic. It consists of one PMOS transistor (pull-up) and one NMOS transistor (pull-down) with their gates connected to the input and drains connected to the output. When the input is logic LOW (0 V), the PMOS turns ON and the NMOS turns OFF, pulling the output to V_DD (logic HIGH). When the input is HIGH (V_DD), the NMOS turns ON and the PMOS turns OFF, pulling the output to ground (logic LOW). The voltage transfer characteristic (VTC) shows a sharp transition region where both transistors are momentarily ON — this is where short-circuit (crowbar) current flows. Ideally, static power dissipation is zero because no DC path exists between V_DD and ground in either stable state. In practice, subthreshold leakage and gate oxide tunneling cause small static currents, which become significant at advanced nodes below 10 nm.",
        },
        {
          id: "microelectronics-101-l02-c3",
          title: "Power Dissipation and Scaling",
          content:
            "CMOS power dissipation has two major components. Dynamic power (P_dyn = α × C_L × V_DD² × f) arises from charging and discharging load capacitances during switching, where α is the activity factor, C_L is load capacitance, V_DD is supply voltage, and f is clock frequency. Static power (P_static = I_leak × V_DD) comes from leakage currents that flow even when transistors are nominally OFF. Dennard scaling — the observation that as transistors shrink, voltage and current scale proportionally, keeping power density constant — enabled decades of performance gains. However, below roughly 90 nm, threshold voltage could no longer scale with V_DD without causing exponentially rising leakage. This breakdown of Dennard scaling around 2006 led to the multi-core era, since simply increasing clock frequency produced unsustainable heat. Modern solutions include high-k metal gate (HKMG) stacks, FinFET three-dimensional transistor structures, and aggressive power gating.",
        },
      ],
      flashcards: [
        {
          id: "microelectronics-101-l02-f1",
          front: "In a CMOS inverter, which transistor pulls the output HIGH?",
          back: "The PMOS transistor. When the input is LOW, PMOS turns ON and connects the output to V_DD.",
        },
        {
          id: "microelectronics-101-l02-f2",
          front: "What is the formula for CMOS dynamic power dissipation?",
          back: "P_dyn = α × C_L × V_DD² × f, where α is switching activity, C_L is load capacitance, V_DD is supply voltage, and f is clock frequency.",
        },
        {
          id: "microelectronics-101-l02-f3",
          front: "Why did Dennard scaling break down below 90 nm?",
          back: "Threshold voltage could no longer be reduced proportionally with V_DD without causing exponentially increasing subthreshold leakage current, making static power unsustainable.",
        },
        {
          id: "microelectronics-101-l02-f4",
          front: "What is a FinFET and why was it introduced?",
          back: "A FinFET is a 3D transistor where the gate wraps around a thin silicon fin on three sides, providing better electrostatic control of the channel and reducing leakage at advanced nodes (22 nm and below).",
        },
      ],
      interactiveActivities: [
        {
          id: "microelectronics-101-l02-a1",
          type: "sorting_buckets",
          title: "NMOS vs. PMOS Characteristics",
          description:
            "Sort each property or behavior into the correct transistor type.",
          instructions: [
            "Drag each characteristic into the bucket for the transistor type it describes.",
          ],
          buckets: ["NMOS Transistor", "PMOS Transistor"],
          items: [
            { text: "Turns ON when V_GS > V_th (positive threshold)", bucket: "NMOS Transistor" },
            { text: "Pulls output toward V_DD (logic HIGH)", bucket: "PMOS Transistor" },
            { text: "Built in a P-type substrate", bucket: "NMOS Transistor" },
            { text: "Built in an N-well region", bucket: "PMOS Transistor" },
            { text: "Conducts through an N-type inversion channel", bucket: "NMOS Transistor" },
            { text: "Turns ON when V_GS < −|V_th| (negative gate drive relative to source)", bucket: "PMOS Transistor" },
            { text: "Pulls output toward ground (logic LOW)", bucket: "NMOS Transistor" },
            { text: "Typically has lower mobility (slower) for same dimensions", bucket: "PMOS Transistor" },
          ],
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L03  IC Basics Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "microelectronics-101-l03",
      title: "IC Basics Checkpoint",
      type: "quiz",
      duration: 8,
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 2, apply: 1 },
      },
      questions: [
        {
          id: "microelectronics-101-l03-q1",
          text: "A VLSI integrated circuit contains how many transistors?",
          skillId: "microelectronics-101-skill-core",
          options: [
            { id: "a", text: "Fewer than 100" },
            { id: "b", text: "100 to 1,000" },
            { id: "c", text: "1,000 to 100,000" },
            { id: "d", text: "100,000 to 1 billion" },
          ],
          correctOptionId: "d",
          explanation:
            "VLSI (Very-Large-Scale Integration) is defined as containing 100,000 to approximately 1 billion transistors. SSI is up to 100, MSI is 100–1,000, and LSI is 1,000–100,000.",
        },
        {
          id: "microelectronics-101-l03-q2",
          text: "In a CMOS inverter with input at logic LOW (0 V), which transistor is ON and what is the output?",
          skillId: "microelectronics-101-skill-core",
          options: [
            { id: "a", text: "NMOS is ON; output is LOW" },
            { id: "b", text: "PMOS is ON; output is HIGH (V_DD)" },
            { id: "c", text: "Both NMOS and PMOS are ON; output is V_DD/2" },
            { id: "d", text: "Neither transistor is ON; output floats" },
          ],
          correctOptionId: "b",
          explanation:
            "When the input is 0 V, the PMOS gate-to-source voltage is −V_DD, which is below its negative threshold, turning it ON and pulling the output to V_DD. The NMOS V_GS is 0 V, below its positive threshold, so it remains OFF.",
        },
        {
          id: "microelectronics-101-l03-q3",
          text: "Which factor does NOT appear in the CMOS dynamic power equation P = α × C_L × V_DD² × f?",
          skillId: "microelectronics-101-skill-core",
          options: [
            { id: "a", text: "Switching activity factor (α)" },
            { id: "b", text: "Threshold voltage (V_th)" },
            { id: "c", text: "Supply voltage (V_DD)" },
            { id: "d", text: "Clock frequency (f)" },
          ],
          correctOptionId: "b",
          explanation:
            "The dynamic power formula is P_dyn = α × C_L × V_DD² × f. Threshold voltage (V_th) affects leakage (static) power but does not directly appear in the dynamic power equation.",
        },
        {
          id: "microelectronics-101-l03-q4",
          text: "The Czochralski process is used to produce:",
          skillId: "microelectronics-101-skill-core",
          options: [
            { id: "a", text: "Photolithography masks" },
            { id: "b", text: "Single-crystal silicon ingots" },
            { id: "c", text: "Copper interconnect layers" },
            { id: "d", text: "IC plastic packages" },
          ],
          correctOptionId: "b",
          explanation:
            "The Czochralski process grows single-crystal silicon ingots by slowly pulling a seed crystal from a crucible of molten ultra-pure silicon. The resulting ingots are then sliced into wafers for IC fabrication.",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L04  Digital IC Design  (video)
    ────────────────────────────────────────────── */
    {
      id: "microelectronics-101-l04",
      title: "Digital IC Design",
      type: "video",
      duration: 10,
      objectives: [
        "Construct CMOS implementations of fundamental logic gates (NAND, NOR, AND, OR)",
        "Distinguish between combinational and sequential logic circuits",
        "Describe the operation of CMOS flip-flops and registers",
      ],
      chunks: [
        {
          id: "microelectronics-101-l04-c1",
          title: "CMOS Logic Gates",
          content:
            "All complex digital ICs are built from a small set of logic gates implemented in CMOS. A CMOS NAND gate uses series NMOS transistors in the pull-down network and parallel PMOS transistors in the pull-up network. For a 2-input NAND, both NMOS transistors must be ON (both inputs HIGH) to pull the output LOW; otherwise, at least one PMOS conducts and holds the output HIGH. The CMOS NOR gate is the dual: parallel NMOS (pull-down) and series PMOS (pull-up). NAND gates are preferred over NOR gates in CMOS because PMOS transistors have lower hole mobility — series PMOS in NOR gates requires wider devices to match speed, increasing area. AND and OR gates are typically implemented as NAND or NOR followed by an inverter. Complex gates like AND-OR-Invert (AOI) and OR-AND-Invert (OAI) combine multiple logic functions in a single CMOS stage, reducing transistor count and delay compared to cascading simple gates.",
        },
        {
          id: "microelectronics-101-l04-c2",
          title: "Combinational vs. Sequential Logic",
          content:
            "Combinational circuits produce outputs that depend solely on the current inputs — there is no memory of past states. Examples include adders, multiplexers, decoders, and arithmetic logic units (ALUs). Their behavior is fully described by a truth table or Boolean expression, and the output changes after a propagation delay whenever inputs change. Sequential circuits, in contrast, contain memory elements — typically latches or flip-flops — and their outputs depend on both current inputs and the stored state. The current state plus the input determines both the output and the next state of the circuit. Sequential logic enables counters, shift registers, state machines, and all forms of data storage. In synchronous designs (the vast majority of digital ICs), flip-flops are clocked by a common clock signal, and all state transitions occur at the clock edge, simplifying timing analysis and making designs more robust against race conditions.",
        },
        {
          id: "microelectronics-101-l04-c3",
          title: "Flip-Flops and Registers",
          content:
            "A flip-flop is a bistable circuit that captures and stores one bit of data on a clock edge. The D flip-flop (data flip-flop) is the most common — it samples its D input at the rising (or falling) clock edge and holds that value at its Q output until the next active edge. Internally, a master-slave D flip-flop uses two back-to-back latches: the master latch captures data when the clock is LOW, and the slave latch transfers it to the output when the clock goes HIGH. Key timing parameters include setup time (t_su), the minimum time data must be stable before the clock edge; hold time (t_h), the minimum time data must remain stable after the clock edge; and clock-to-Q delay (t_cq), the time from clock edge to valid output. A register is a group of flip-flops sharing a common clock, storing a multi-bit word. An 8-bit register uses eight D flip-flops to store one byte, and a 32-bit register file in a CPU may contain 32 such registers.",
        },
      ],
      flashcards: [
        {
          id: "microelectronics-101-l04-f1",
          front: "Why are CMOS NAND gates preferred over NOR gates?",
          back: "NAND gates place the slower PMOS transistors in parallel (faster) and NMOS in series; NOR gates put PMOS in series, requiring wider PMOS devices to match speed, which increases area and capacitance.",
        },
        {
          id: "microelectronics-101-l04-f2",
          front: "What is the key difference between combinational and sequential logic?",
          back: "Combinational logic outputs depend only on current inputs (no memory); sequential logic outputs depend on both current inputs and stored state (has memory via flip-flops or latches).",
        },
        {
          id: "microelectronics-101-l04-f3",
          front: "Define setup time (t_su) for a D flip-flop.",
          back: "Setup time is the minimum duration that the data input (D) must be stable and valid BEFORE the active clock edge arrives, to ensure the flip-flop captures the correct value.",
        },
        {
          id: "microelectronics-101-l04-f4",
          front: "What is a master-slave D flip-flop?",
          back: "It consists of two latches in series — the master latch captures data during one clock phase, and the slave latch transfers it to the output during the opposite phase, making it edge-triggered.",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L05  Analog IC Building Blocks  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "microelectronics-101-l05",
      title: "Analog IC Building Blocks",
      type: "interactive",
      duration: 12,
      objectives: [
        "Explain the operating principle of current mirrors and their role in biasing",
        "Describe differential pair operation and its importance in op-amp input stages",
        "Identify the internal stages of a CMOS operational amplifier and the purpose of a bandgap reference",
      ],
      chunks: [
        {
          id: "microelectronics-101-l05-c1",
          title: "Current Mirrors and Biasing",
          content:
            "A current mirror is a circuit that copies (mirrors) a reference current from one branch to another, providing stable DC bias currents throughout an analog IC. The simplest MOSFET current mirror uses two matched transistors: a diode-connected reference transistor (gate tied to drain) establishes a gate-source voltage corresponding to the desired current, and a second transistor with the same V_GS replicates that current in its branch. For accurate mirroring, both transistors must have identical W/L ratios and operate in saturation (V_DS ≥ V_GS − V_th). The output resistance of a basic mirror is r_o = V_A / I_D, where V_A is the Early voltage. To increase output resistance and accuracy, cascode current mirrors stack an additional transistor, achieving output resistances exceeding 1 MΩ. Wilson and wide-swing cascode mirrors further improve performance. Current mirrors are ubiquitous in analog ICs — virtually every bias network, active load, and signal-processing block relies on them.",
        },
        {
          id: "microelectronics-101-l05-c2",
          title: "Differential Pairs",
          content:
            "The differential pair (also called a long-tailed pair) is the most important analog IC building block. It consists of two matched transistors whose sources share a common tail current source (I_tail). The circuit amplifies the voltage difference between its two inputs (V_in+ − V_in−) while rejecting signals common to both inputs (common-mode rejection). The small-signal differential gain is A_d = g_m × R_D, where g_m is the transconductance of each transistor and R_D is the drain load resistance. The common-mode rejection ratio (CMRR) depends on the output impedance of the tail current source — a higher-impedance tail (cascode mirror) yields better CMRR. The differential pair serves as the input stage of nearly every operational amplifier, comparator, and data converter. When perfectly matched, it draws equal current through both branches at zero differential input; any input imbalance steers current from one branch to the other, producing a proportional output voltage.",
        },
        {
          id: "microelectronics-101-l05-c3",
          title: "Op-Amp Internals and Bandgap References",
          content:
            "A CMOS operational amplifier typically has three stages. The first stage is a differential pair with active current-mirror loads, providing high gain and differential-to-single-ended conversion. The second stage is a common-source amplifier that further boosts voltage gain — a two-stage Miller-compensated op-amp can achieve open-loop gains exceeding 80 dB (10,000×). The third stage is an output buffer (often a class-AB push-pull stage) that drives low-impedance loads. Frequency compensation, usually a Miller capacitor between the first and second stage outputs, ensures stability by splitting the poles and creating a dominant pole that rolls off gain before phase reaches −180°. Bandgap voltage references produce a temperature-independent output voltage of approximately 1.25 V — the silicon bandgap energy at 0 K expressed in electron-volts. They combine two voltages with opposite temperature coefficients: the negative temperature coefficient of a PN junction forward voltage and the positive coefficient of the thermal voltage difference (ΔV_BE) between two junctions operating at different current densities.",
        },
      ],
      flashcards: [
        {
          id: "microelectronics-101-l05-f1",
          front: "What is the purpose of a current mirror in analog IC design?",
          back: "It copies a reference current from one branch to another, providing stable and precise DC bias currents throughout the circuit without requiring individual bias resistors.",
        },
        {
          id: "microelectronics-101-l05-f2",
          front: "What does CMRR measure in a differential pair?",
          back: "Common-Mode Rejection Ratio — the ability of the differential pair to amplify the difference signal while suppressing signals that appear identically on both inputs. Higher CMRR is better.",
        },
        {
          id: "microelectronics-101-l05-f3",
          front: "Why does a Miller-compensated op-amp use a capacitor between stages?",
          back: "The Miller capacitor creates a dominant low-frequency pole that causes the gain to roll off at −20 dB/decade, ensuring the unity-gain crossover occurs before the phase reaches −180°, thus guaranteeing stability.",
        },
        {
          id: "microelectronics-101-l05-f4",
          front: "What output voltage does a bandgap reference produce, and why is it temperature-stable?",
          back: "Approximately 1.25 V. It combines a PN junction voltage (negative temperature coefficient) with a ΔVBE voltage (positive coefficient) so the two effects cancel, producing a nearly constant output across temperature.",
        },
      ],
      interactiveActivities: [
        {
          id: "microelectronics-101-l05-a1",
          type: "matching_pairs",
          title: "Analog IC Block → Function",
          description:
            "Match each analog IC building block with its primary function.",
          instructions: [
            "Drag each building block on the left to its corresponding function on the right.",
          ],
          pairs: [
            { left: "Simple current mirror", right: "Copies a reference current to bias other circuit branches" },
            { left: "Cascode current mirror", right: "Provides high output resistance for more accurate current copying" },
            { left: "Differential pair", right: "Amplifies voltage difference between two inputs while rejecting common-mode signals" },
            { left: "Miller compensation capacitor", right: "Creates a dominant pole for op-amp frequency stability" },
            { left: "Class-AB output stage", right: "Drives low-impedance loads with minimal crossover distortion" },
            { left: "Bandgap voltage reference", right: "Generates a temperature-independent reference voltage of ~1.25 V" },
          ],
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L06  Digital & Analog IC Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "microelectronics-101-l06",
      title: "Digital & Analog IC Checkpoint",
      type: "quiz",
      duration: 8,
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 1, apply: 1, analyze: 1 },
      },
      questions: [
        {
          id: "microelectronics-101-l06-q1",
          text: "In a 2-input CMOS NAND gate, when is the output LOW?",
          skillId: "microelectronics-101-skill-core",
          options: [
            { id: "a", text: "When both inputs are HIGH (both NMOS ON, series pull-down conducts)" },
            { id: "b", text: "When both inputs are LOW" },
            { id: "c", text: "When one input is HIGH and one is LOW" },
            { id: "d", text: "The output is never LOW in a NAND gate" },
          ],
          correctOptionId: "a",
          explanation:
            "In a CMOS NAND, the NMOS pull-down transistors are in series. Both must be ON (both inputs HIGH) to create a path from output to ground, pulling the output LOW. In all other input combinations, at least one parallel PMOS is ON, holding the output HIGH.",
        },
        {
          id: "microelectronics-101-l06-q2",
          text: "A D flip-flop's setup time (t_su) is violated. What is the most likely consequence?",
          skillId: "microelectronics-101-skill-core",
          options: [
            { id: "a", text: "The output always goes HIGH" },
            { id: "b", text: "The flip-flop enters a metastable state where the output is indeterminate" },
            { id: "c", text: "The clock frequency doubles" },
            { id: "d", text: "The flip-flop resets to zero" },
          ],
          correctOptionId: "b",
          explanation:
            "When setup time is violated, the flip-flop's internal latch may settle to an intermediate voltage (metastable state). The output can remain indeterminate for an unpredictable time before eventually resolving to 0 or 1, potentially causing downstream logic errors.",
        },
        {
          id: "microelectronics-101-l06-q3",
          text: "In a differential pair, what determines the common-mode rejection ratio (CMRR)?",
          skillId: "microelectronics-101-skill-core",
          options: [
            { id: "a", text: "The supply voltage V_DD" },
            { id: "b", text: "The output impedance of the tail current source" },
            { id: "c", text: "The number of flip-flops in the design" },
            { id: "d", text: "The clock frequency" },
          ],
          correctOptionId: "b",
          explanation:
            "CMRR is primarily determined by the impedance of the tail current source. An ideal (infinite impedance) current source would give infinite CMRR. Using a cascode current mirror as the tail source increases its output impedance and improves CMRR.",
        },
        {
          id: "microelectronics-101-l06-q4",
          text: "A bandgap voltage reference outputs approximately 1.25 V because:",
          skillId: "microelectronics-101-skill-core",
          options: [
            { id: "a", text: "It equals the supply voltage divided by a fixed resistor ratio" },
            { id: "b", text: "It corresponds to the silicon bandgap energy at 0 K (~1.12 eV) plus a correction from ΔVBE weighting" },
            { id: "c", text: "It is the threshold voltage of a standard NMOS transistor" },
            { id: "d", text: "It is set by an external precision resistor" },
          ],
          correctOptionId: "b",
          explanation:
            "The bandgap reference combines a base-emitter voltage (~0.7 V, negative tempco) with a weighted ΔVBE voltage (positive tempco). At the zero-temperature-coefficient point, the sum equals approximately 1.25 V, close to the extrapolated silicon bandgap energy at 0 K.",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L07  IC Fabrication Process  (video)
    ────────────────────────────────────────────── */
    {
      id: "microelectronics-101-l07",
      title: "IC Fabrication Process",
      type: "video",
      duration: 11,
      objectives: [
        "Describe the photolithography process including resist coating, exposure, and development",
        "Explain doping methods (diffusion and ion implantation) and their role in forming NMOS/PMOS regions",
        "Outline deposition, etching, metallization, and packaging steps in modern IC fabrication",
      ],
      chunks: [
        {
          id: "microelectronics-101-l07-c1",
          title: "Photolithography",
          content:
            "Photolithography is the process of transferring a circuit pattern from a photomask onto the wafer surface. First, a thin layer of photosensitive polymer called photoresist is spin-coated onto the wafer. The wafer is then exposed to ultraviolet (UV) light through a mask (reticle) that contains the desired pattern. In positive resist, exposed areas become soluble and are dissolved away during development; in negative resist, exposed areas cross-link and remain. Modern fabs use deep ultraviolet (DUV) light at 193 nm wavelength with immersion lithography (a water layer between the lens and wafer) to achieve feature sizes below 40 nm. For sub-7 nm nodes, extreme ultraviolet (EUV) lithography at 13.5 nm wavelength is used, requiring complex reflective optics and powerful plasma light sources. Each IC layer requires a separate photolithography step — a modern 5 nm process may involve over 80 mask layers. Overlay accuracy between layers must be within a few nanometers to ensure transistors and interconnects align correctly.",
        },
        {
          id: "microelectronics-101-l07-c2",
          title: "Doping, Deposition, and Etching",
          content:
            "Doping introduces impurity atoms into silicon to create N-type (phosphorus or arsenic donors) or P-type (boron acceptors) regions essential for transistor operation. Ion implantation is the dominant method: ionized dopant atoms are accelerated to high energies (10–400 keV) and shot into the wafer surface. Implant dose (atoms/cm²) and energy control the concentration and depth of the doped region. A subsequent high-temperature anneal (900–1100 °C) repairs crystal damage and activates dopants. Thin-film deposition adds layers of various materials: thermal oxidation grows SiO₂ gate dielectric, chemical vapor deposition (CVD) deposits silicon nitride, polysilicon, and interlayer dielectrics, and physical vapor deposition (PVD/sputtering) deposits metal layers. Etching selectively removes material — wet etching uses liquid chemicals (isotropic, used for cleaning) while dry etching (reactive ion etching, RIE) uses plasma for anisotropic, high-resolution pattern transfer critical for defining transistor gates and metal lines.",
        },
        {
          id: "microelectronics-101-l07-c3",
          title: "Metallization and Packaging",
          content:
            "After transistors are formed in the silicon (front-end-of-line, FEOL), the back-end-of-line (BEOL) builds the interconnect network that wires transistors together. Modern ICs use copper dual-damascene metallization: trenches and vias are etched into a dielectric layer, lined with a barrier metal (tantalum/tantalum nitride), filled with electroplated copper, and planarized by chemical-mechanical polishing (CMP). A high-performance processor may have 12–15 metal layers, with lower layers carrying dense local wiring and upper layers carrying wider global power and signal buses. Low-k dielectric materials (k < 3.0) reduce inter-wire capacitance, improving speed and reducing power. After BEOL, wafers are tested (wafer probe), diced into individual dies, and packaged. Common packages include wire-bonded BGA (ball grid array), flip-chip (solder bumps directly on the die), and advanced fan-out wafer-level packaging (FOWLP). The package provides mechanical protection, heat dissipation, and electrical connections to the circuit board.",
        },
      ],
      flashcards: [
        {
          id: "microelectronics-101-l07-f1",
          front: "What is the difference between positive and negative photoresist?",
          back: "In positive resist, UV-exposed areas become soluble and are removed during development. In negative resist, exposed areas cross-link, become insoluble, and remain — unexposed areas wash away.",
        },
        {
          id: "microelectronics-101-l07-f2",
          front: "Why is ion implantation preferred over diffusion for doping in modern ICs?",
          back: "Ion implantation provides precise control over dopant concentration (dose), depth (energy), and location (photoresist masking), which is essential for reproducible nanoscale transistor fabrication.",
        },
        {
          id: "microelectronics-101-l07-f3",
          front: "What is the dual-damascene process?",
          back: "A copper metallization technique where both trenches (wires) and vias (vertical connections) are etched into dielectric, barrier-lined, filled with electroplated copper, and planarized by CMP in a single process flow.",
        },
        {
          id: "microelectronics-101-l07-f4",
          front: "Why are low-k dielectrics used between metal interconnect layers?",
          back: "Low-k dielectrics (k < 3.0) reduce the capacitance between adjacent metal wires, decreasing RC delay and dynamic power consumption in the interconnect network.",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L08  Testing and Reliability  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "microelectronics-101-l08",
      title: "Testing and Reliability",
      type: "interactive",
      duration: 12,
      objectives: [
        "Calculate IC yield and understand its relationship to defect density and die area",
        "Explain DFT techniques including scan chains and built-in self-test (BIST)",
        "Identify key reliability failure mechanisms: electromigration, latch-up, and ESD damage",
      ],
      chunks: [
        {
          id: "microelectronics-101-l08-c1",
          title: "Yield and Defect Density",
          content:
            "IC yield is the percentage of functional dies on a wafer. It is primarily determined by defect density (D₀, defects per cm²) and die area (A). A commonly used model is Murphy's yield equation: Y ≈ ((1 − e^(−D₀ × A)) / (D₀ × A))². For example, if defect density is 0.5 defects/cm² and die area is 1 cm², yield is approximately 38%. Reducing die area or improving process cleanliness (lowering D₀) directly increases yield. This is why chiplet architectures — where a large monolithic die is split into multiple smaller dies connected by an interposer — achieve higher combined yield than an equivalent single large die. Wafer-level testing (probe testing) identifies bad dies before packaging, avoiding the cost of packaging defective chips. After packaging, final test applies full-speed functional patterns and parametric measurements. The number of test patterns can exceed billions for a modern SoC, requiring expensive automatic test equipment (ATE) costing $5–10 million per system.",
        },
        {
          id: "microelectronics-101-l08-c2",
          title: "Design for Testability (DFT) and BIST",
          content:
            "Design for testability (DFT) modifies the IC design to make it easier to test after manufacturing. The most widespread DFT technique is scan design: all flip-flops in the chip are connected into one or more shift-register chains (scan chains) using multiplexed inputs. In test mode, test vectors are shifted into the scan chain, a single clock cycle captures the circuit response, and the results are shifted out for comparison against expected values. This converts the intractable problem of testing arbitrary sequential logic into a simpler combinational testing problem. Automatic test pattern generation (ATPG) software creates scan patterns that detect stuck-at, transition, and bridging faults. Built-In Self-Test (BIST) embeds test generation and response analysis hardware directly on the chip. Memory BIST (MBIST) tests large SRAM arrays with march algorithms, while logic BIST (LBIST) uses linear-feedback shift registers (LFSRs) to generate pseudo-random patterns and signature analysis to compact results.",
        },
        {
          id: "microelectronics-101-l08-c3",
          title: "Reliability Failure Mechanisms",
          content:
            "Electromigration is the gradual displacement of metal atoms in interconnect wires due to momentum transfer from high-density current flow. Over time, this creates voids (open circuits) and hillocks (short circuits), eventually causing chip failure. Black's equation models the mean time to failure: MTTF ∝ (1/J²) × exp(E_a / kT), where J is current density and E_a is the activation energy. Copper interconnects and barrier metals mitigate but do not eliminate electromigration. Latch-up is a parasitic thyristor effect in CMOS circuits caused by the inherent PNPN structure formed by the NMOS and PMOS wells. An overvoltage or current spike can trigger regenerative feedback, creating a low-resistance path between V_DD and ground that draws destructive current. Prevention techniques include guard rings, increased well spacing, and epitaxial substrates. Electrostatic discharge (ESD) protection prevents voltage spikes from external handling from destroying thin gate oxides. ESD clamp circuits — typically large diodes or grounded-gate NMOS devices — shunt discharge current safely to ground.",
        },
      ],
      flashcards: [
        {
          id: "microelectronics-101-l08-f1",
          front: "How does scan chain testing simplify IC validation?",
          back: "Scan chains connect flip-flops into shift registers, allowing test vectors to be shifted in, one capture clock applied, and results shifted out — converting complex sequential testing into simpler combinational testing.",
        },
        {
          id: "microelectronics-101-l08-f2",
          front: "What is electromigration and what determines its severity?",
          back: "Electromigration is the gradual displacement of metal atoms by high-density electron flow. Severity depends on current density (J) and temperature (T) — per Black's equation: MTTF ∝ (1/J²) × exp(E_a / kT).",
        },
        {
          id: "microelectronics-101-l08-f3",
          front: "What causes latch-up in CMOS circuits?",
          back: "The parasitic PNPN thyristor structure formed between NMOS and PMOS wells can be triggered by overvoltage or current injection, creating a regenerative low-resistance path between V_DD and ground.",
        },
        {
          id: "microelectronics-101-l08-f4",
          front: "What is BIST and why is it used in memory testing?",
          back: "Built-In Self-Test embeds test hardware on-chip. Memory BIST (MBIST) runs march test algorithms on SRAM arrays at full speed, detecting faults without external ATE and reducing test cost for large memory blocks.",
        },
      ],
      interactiveActivities: [
        {
          id: "microelectronics-101-l08-a1",
          type: "sorting_buckets",
          title: "Testing Technique vs. Reliability Threat",
          description:
            "Classify each item as either a testing/DFT technique or a reliability failure mechanism.",
          instructions: [
            "Drag each item into the correct bucket.",
          ],
          buckets: ["Testing / DFT Technique", "Reliability Failure Mechanism"],
          items: [
            { text: "Scan chain insertion", bucket: "Testing / DFT Technique" },
            { text: "Electromigration in copper interconnects", bucket: "Reliability Failure Mechanism" },
            { text: "Memory BIST (MBIST) with march algorithms", bucket: "Testing / DFT Technique" },
            { text: "CMOS latch-up from parasitic thyristor", bucket: "Reliability Failure Mechanism" },
            { text: "ATPG (Automatic Test Pattern Generation)", bucket: "Testing / DFT Technique" },
            { text: "ESD damage to thin gate oxides", bucket: "Reliability Failure Mechanism" },
            { text: "Logic BIST with LFSR pattern generation", bucket: "Testing / DFT Technique" },
            { text: "Hot carrier injection degradation", bucket: "Reliability Failure Mechanism" },
          ],
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L09  Fabrication & Testing Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "microelectronics-101-l09",
      title: "Fabrication & Testing Checkpoint",
      type: "quiz",
      duration: 8,
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 1, apply: 1, analyze: 1 },
      },
      questions: [
        {
          id: "microelectronics-101-l09-q1",
          text: "In photolithography, positive photoresist behaves such that:",
          skillId: "microelectronics-101-skill-core",
          options: [
            { id: "a", text: "Exposed areas become soluble and are removed during development" },
            { id: "b", text: "Exposed areas become insoluble and remain after development" },
            { id: "c", text: "The entire resist layer is removed regardless of exposure" },
            { id: "d", text: "Exposure has no chemical effect on the resist" },
          ],
          correctOptionId: "a",
          explanation:
            "In positive photoresist, UV exposure breaks down the polymer chains (or photoactive compound), making the exposed areas soluble in the developer solution. The unexposed areas remain and serve as an etch mask.",
        },
        {
          id: "microelectronics-101-l09-q2",
          text: "Ion implantation is followed by a high-temperature anneal primarily to:",
          skillId: "microelectronics-101-skill-core",
          options: [
            { id: "a", text: "Melt the silicon wafer for reshaping" },
            { id: "b", text: "Repair crystal lattice damage and electrically activate the implanted dopant atoms" },
            { id: "c", text: "Remove the photoresist layer" },
            { id: "d", text: "Deposit the next metal layer" },
          ],
          correctOptionId: "b",
          explanation:
            "High-energy implanted ions disrupt the silicon crystal lattice. Thermal annealing at 900–1100 °C restores crystallinity and moves dopant atoms onto substitutional lattice sites where they become electrically active donors or acceptors.",
        },
        {
          id: "microelectronics-101-l09-q3",
          text: "What is the primary purpose of scan chains in DFT?",
          skillId: "microelectronics-101-skill-core",
          options: [
            { id: "a", text: "To increase the clock frequency of the chip" },
            { id: "b", text: "To convert sequential logic testing into combinational logic testing" },
            { id: "c", text: "To reduce the number of transistors in the design" },
            { id: "d", text: "To generate the chip's power supply" },
          ],
          correctOptionId: "b",
          explanation:
            "Scan chains connect flip-flops into shift registers, allowing test data to be directly loaded and unloaded. This converts the problem of testing complex sequential circuits into testing combinational logic between scan elements, enabling efficient ATPG.",
        },
        {
          id: "microelectronics-101-l09-q4",
          text: "According to Black's equation, electromigration mean time to failure (MTTF) is MOST strongly reduced by:",
          skillId: "microelectronics-101-skill-core",
          options: [
            { id: "a", text: "Increasing current density (J) — MTTF ∝ 1/J²" },
            { id: "b", text: "Decreasing the number of metal layers" },
            { id: "c", text: "Using positive photoresist instead of negative" },
            { id: "d", text: "Lowering the clock frequency" },
          ],
          correctOptionId: "a",
          explanation:
            "Black's equation states MTTF ∝ (1/J²) × exp(E_a/kT). Current density (J) has a squared inverse relationship, so doubling J reduces MTTF by 4×. Temperature is also important (exponential), but current density is the strongest accelerating factor in the equation.",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L10  Mastery Quiz: Microelectronics  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "microelectronics-101-l10",
      title: "Mastery Quiz: Microelectronics",
      type: "quiz",
      duration: 10,
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { understand: 1, apply: 1, analyze: 1, evaluate: 1 },
      },
      questions: [
        {
          id: "microelectronics-101-l10-q1",
          text: "A design team wants to reduce dynamic power by 50% without changing clock frequency or switching activity. By what factor must they reduce V_DD?",
          skillId: "microelectronics-101-skill-core",
          options: [
            { id: "a", text: "Reduce V_DD by half (×0.5)" },
            { id: "b", text: "Reduce V_DD by a factor of √2 (×0.707)" },
            { id: "c", text: "Reduce V_DD by a factor of 4" },
            { id: "d", text: "V_DD has no effect on dynamic power" },
          ],
          correctOptionId: "b",
          explanation:
            "P_dyn = α × C_L × V_DD² × f. For P to be halved with α, C_L, and f constant, V_DD² must be halved, so V_DD must be multiplied by 1/√2 ≈ 0.707.",
        },
        {
          id: "microelectronics-101-l10-q2",
          text: "Why do chiplet architectures improve effective yield compared to a single monolithic die of the same total area?",
          skillId: "microelectronics-101-skill-core",
          options: [
            { id: "a", text: "Chiplets use a different semiconductor material with zero defects" },
            { id: "b", text: "Smaller individual dies have exponentially higher yield per die; only defective chiplets are discarded, not the entire large die" },
            { id: "c", text: "Chiplets do not require photolithography" },
            { id: "d", text: "Chiplet architectures use analog circuits exclusively, which are defect-immune" },
          ],
          correctOptionId: "b",
          explanation:
            "Yield decreases exponentially with die area (Y ∝ function of D₀ × A). Splitting a large die into smaller chiplets means each chiplet has higher individual yield. Only defective chiplets are discarded, and good chiplets are assembled on an interposer, giving better composite yield than a single large die.",
        },
        {
          id: "microelectronics-101-l10-q3",
          text: "An engineer observes that a CMOS IC fails during high-current events with a low-resistance path appearing between V_DD and ground. The most likely failure mechanism is:",
          skillId: "microelectronics-101-skill-core",
          options: [
            { id: "a", text: "Electromigration" },
            { id: "b", text: "Latch-up" },
            { id: "c", text: "Hot carrier injection" },
            { id: "d", text: "Dielectric breakdown" },
          ],
          correctOptionId: "b",
          explanation:
            "Latch-up creates a low-resistance path between V_DD and ground via the parasitic PNPN thyristor inherent in CMOS well structures. Electromigration causes open circuits over time; hot carrier injection shifts thresholds; dielectric breakdown pierces oxides. The described symptom — a sudden low-resistance V_DD-to-ground path triggered by a current event — is characteristic of latch-up.",
        },
        {
          id: "microelectronics-101-l10-q4",
          text: "In a two-stage Miller-compensated CMOS op-amp, the compensation capacitor is placed between the output of the first stage and the output of the second stage. Its primary purpose is to:",
          skillId: "microelectronics-101-skill-core",
          options: [
            { id: "a", text: "Increase the DC open-loop gain" },
            { id: "b", text: "Create pole splitting — push the dominant pole to a lower frequency and the non-dominant pole to a higher frequency — ensuring stable unity-gain bandwidth" },
            { id: "c", text: "Reduce the input offset voltage" },
            { id: "d", text: "Increase the slew rate of the amplifier" },
          ],
          correctOptionId: "b",
          explanation:
            "Miller compensation uses the Miller effect to multiply the effective capacitance at the first stage output, creating a dominant low-frequency pole. Simultaneously, the interaction pushes the second pole to a higher frequency (pole splitting). This ensures the open-loop gain crosses 0 dB before the phase reaches −180°, providing adequate phase margin for stable operation.",
        },
      ],
    },
  ],
};
