import type { LearningModule } from "@/lib/modules/types";

export const ElectricalEngineering101Module: LearningModule = {
  id: "electrical-engineering-101",
  title: "Electrical Engineering Foundations",
  description:
    "Build a solid understanding of circuit analysis, analog and digital electronics, and electromagnetism — from Ohm's law through transistors and logic gates.",
  subject: "Engineering",
  tags: ["core", "curriculum", "interactive", "engineering", "electrical"],
  minAge: 16,
  maxAge: 99,
  version: "2.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Apply Ohm's law and Kirchhoff's laws to solve DC circuit problems",
    "Calculate equivalent resistance for series and parallel networks",
    "Describe the energy-storage behavior of capacitors and inductors and their time constants",
    "Analyze AC circuits using RMS values, impedance, and phasor diagrams",
    "Explain p-n junction operation and the role of diodes in rectification",
    "Distinguish between BJT and MOSFET transistors and map them to basic digital logic gates",
    "Evaluate power dissipation and efficiency in resistive and reactive circuits",
  ],
  lessons: [
    /* ────────────────────────────────────────────
       L01 – VIDEO: Voltage, Current, and Resistance
       ──────────────────────────────────────────── */
    {
      id: "electrical-engineering-101-l01",
      title: "Voltage, Current, and Resistance",
      type: "video",
      duration: 12,
      objectives: [
        "Define voltage, current, and resistance using the water-flow analogy",
        "State and apply Ohm's law (V = IR)",
        "Classify materials as conductors, semiconductors, or insulators",
        "Calculate power dissipated in a resistor using P = IV",
      ],
      chunks: [
        {
          id: "electrical-engineering-101-l01-c1",
          title: "Electric Charge and Current",
          kind: "intro",
          content:
            "Electric charge is a fundamental property of matter carried by protons (+) and electrons (−). When electrons flow through a conductor, they create an electric current, measured in amperes (A). One ampere equals one coulomb of charge passing a point per second (1 A = 1 C/s). Conventional current flows from higher to lower potential, opposite to actual electron flow. A useful analogy is water in a pipe: current is the flow rate, voltage is the pressure difference driving the flow, and resistance is the pipe's narrowness restricting it.",
        },
        {
          id: "electrical-engineering-101-l01-c2",
          title: "Ohm's Law and Resistance",
          kind: "concept",
          content:
            "Ohm's law states V = I × R, where V is voltage in volts, I is current in amperes, and R is resistance in ohms (Ω). Resistance depends on the material's resistivity (ρ), length (L), and cross-sectional area (A): R = ρL/A. Conductors like copper have very low resistivity (~1.7 × 10⁻⁸ Ω·m), while insulators like rubber exceed 10¹³ Ω·m. Semiconductors such as silicon fall in between and can be doped to control conductivity — a property that makes modern electronics possible.",
        },
        {
          id: "electrical-engineering-101-l01-c3",
          title: "Electrical Power and Energy",
          kind: "concept",
          content:
            "Power is the rate at which electrical energy is converted to heat, light, or motion. The basic formula is P = IV (watts). Combining with Ohm's law gives P = I²R and P = V²/R. A 100 Ω resistor carrying 0.5 A dissipates P = (0.5)² × 100 = 25 W. Energy consumed over time is E = Pt; a 60 W bulb running for 2 hours uses 120 Wh or 0.12 kWh. Understanding power ratings is essential for selecting components and designing safe circuits.",
        },
      ],
      flashcards: [
        {
          id: "electrical-engineering-101-l01-f1",
          front: "What is Ohm's law?",
          back: "V = I × R. Voltage (V) equals current (I) times resistance (R). It applies to linear (ohmic) resistors at constant temperature.",
        },
        {
          id: "electrical-engineering-101-l01-f2",
          front: "What is the unit of electric current and what does it measure?",
          back: "The ampere (A). It measures the rate of charge flow — one ampere equals one coulomb per second (1 A = 1 C/s).",
        },
        {
          id: "electrical-engineering-101-l01-f3",
          front: "How does resistance depend on a conductor's dimensions?",
          back: "R = ρL/A. Resistance increases with length (L) and resistivity (ρ) but decreases with larger cross-sectional area (A).",
        },
        {
          id: "electrical-engineering-101-l01-f4",
          front: "Give three equivalent formulas for electrical power.",
          back: "P = IV, P = I²R, and P = V²/R. All derive from combining Ohm's law with the basic power relationship.",
        },
      ],
      learningAids: [
        {
          id: "electrical-engineering-101-l01-a1",
          type: "image",
          title: "Water-Flow Analogy Diagram",
          content:
            "Side-by-side comparison showing voltage as water pressure, current as flow rate, and resistance as pipe constriction.",
        },
        {
          id: "electrical-engineering-101-l01-a2",
          type: "animation",
          title: "Ohm's Law Triangle",
          content:
            "Interactive triangle showing V at top, I and R at bottom. Cover the unknown quantity to reveal the formula: V = IR, I = V/R, R = V/I.",
        },
      ],
    },

    /* ────────────────────────────────────────────
       L02 – INTERACTIVE: Series and Parallel Circuits
       ──────────────────────────────────────────── */
    {
      id: "electrical-engineering-101-l02",
      title: "Series and Parallel Circuits",
      type: "interactive",
      duration: 14,
      objectives: [
        "Apply Kirchhoff's Voltage Law (KVL) around a closed loop",
        "Apply Kirchhoff's Current Law (KCL) at a node",
        "Calculate equivalent resistance in series and parallel",
        "Use voltage and current divider formulas",
      ],
      chunks: [
        {
          id: "electrical-engineering-101-l02-c1",
          title: "Kirchhoff's Laws",
          kind: "concept",
          content:
            "Kirchhoff's Voltage Law (KVL) states that the algebraic sum of all voltages around any closed loop is zero — energy supplied by sources equals energy consumed by loads. Kirchhoff's Current Law (KCL) states that the total current entering a node equals the total current leaving it, reflecting conservation of charge. These two laws, combined with Ohm's law, let you solve any linear DC circuit regardless of complexity.",
        },
        {
          id: "electrical-engineering-101-l02-c2",
          title: "Series and Parallel Resistance",
          kind: "concept",
          content:
            "Resistors in series carry the same current and their resistances add: R_eq = R₁ + R₂ + … Rₙ. Resistors in parallel share the same voltage and combine as 1/R_eq = 1/R₁ + 1/R₂ + … 1/Rₙ. For two parallel resistors the shortcut is R_eq = (R₁ × R₂) / (R₁ + R₂). A 6 Ω and 3 Ω resistor in parallel give R_eq = 18/9 = 2 Ω — always less than the smallest individual resistor.",
        },
        {
          id: "electrical-engineering-101-l02-c3",
          title: "Voltage and Current Dividers",
          kind: "example",
          content:
            "In a series circuit, the voltage divider formula gives the drop across one resistor: V_x = V_total × (R_x / R_total). In a parallel circuit, the current divider gives the branch current: I_x = I_total × (R_other / (R_x + R_other)) for two branches. These formulas are fundamental shortcuts. For example, a 12 V source with 4 Ω and 8 Ω in series produces V₁ = 12 × 4/12 = 4 V and V₂ = 12 × 8/12 = 8 V.",
        },
      ],
      flashcards: [
        {
          id: "electrical-engineering-101-l02-f1",
          front: "State Kirchhoff's Voltage Law (KVL).",
          back: "The algebraic sum of all voltages around any closed loop in a circuit equals zero: ΣV = 0.",
        },
        {
          id: "electrical-engineering-101-l02-f2",
          front: "State Kirchhoff's Current Law (KCL).",
          back: "The sum of currents entering a node equals the sum leaving it: ΣI_in = ΣI_out, based on conservation of charge.",
        },
        {
          id: "electrical-engineering-101-l02-f3",
          front: "How do you find equivalent resistance for resistors in parallel?",
          back: "1/R_eq = 1/R₁ + 1/R₂ + … 1/Rₙ. For two resistors: R_eq = (R₁ × R₂)/(R₁ + R₂). The result is always less than the smallest individual resistor.",
        },
        {
          id: "electrical-engineering-101-l02-f4",
          front: "Write the voltage divider formula for a series circuit.",
          back: "V_x = V_total × (R_x / R_total). The voltage across a resistor is proportional to its share of the total resistance.",
        },
      ],
      interactiveActivities: [
        {
          id: "electrical-engineering-101-l02-a1",
          type: "sorting_buckets",
          title: "Series vs Parallel Properties",
          description: "Sort each property to the correct circuit configuration.",
          estimatedMinutes: 6,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "series", label: "Series Circuit" },
              { id: "parallel", label: "Parallel Circuit" },
            ],
            items: [
              { id: "i1", label: "Same current through every component", correctBucketId: "series" },
              { id: "i2", label: "Same voltage across every branch", correctBucketId: "parallel" },
              { id: "i3", label: "R_eq = R₁ + R₂ + … Rₙ", correctBucketId: "series" },
              { id: "i4", label: "1/R_eq = 1/R₁ + 1/R₂ + … 1/Rₙ", correctBucketId: "parallel" },
              { id: "i5", label: "If one component fails open, entire circuit breaks", correctBucketId: "series" },
              { id: "i6", label: "Total current splits among branches", correctBucketId: "parallel" },
              { id: "i7", label: "Voltage divider formula applies directly", correctBucketId: "series" },
              { id: "i8", label: "Equivalent resistance is less than the smallest resistor", correctBucketId: "parallel" },
            ],
          },
        },
      ],
      learningAids: [
        {
          id: "electrical-engineering-101-l02-a2",
          type: "practice",
          title: "Circuit Solver Exercise",
          content:
            "Given a 24 V battery with three resistors (6 Ω, 12 Ω in parallel, then in series with 4 Ω), calculate the total current, voltage across each section, and power dissipated.",
        },
      ],
    },

    /* ────────────────────────────────────────────
       L03 – QUIZ: DC Circuits Checkpoint
       ──────────────────────────────────────────── */
    {
      id: "electrical-engineering-101-l03",
      title: "DC Circuits Checkpoint",
      type: "quiz",
      duration: 10,
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, apply: 2, analyze: 1 },
      },
      questions: [
        {
          id: "electrical-engineering-101-l03-q1",
          text: "A 12 V battery drives 0.5 A through a resistor. What is the resistance?",
          skillId: "electrical-engineering-101-skill-core",
          options: [
            { id: "a", text: "6 Ω" },
            { id: "b", text: "12 Ω" },
            { id: "c", text: "24 Ω" },
            { id: "d", text: "0.042 Ω" },
          ],
          correctOptionId: "c",
          explanation:
            "Ohm's law: R = V/I = 12 V / 0.5 A = 24 Ω.",
        },
        {
          id: "electrical-engineering-101-l03-q2",
          text: "Three resistors of 10 Ω, 20 Ω, and 30 Ω are connected in series. What is the equivalent resistance?",
          skillId: "electrical-engineering-101-skill-core",
          options: [
            { id: "a", text: "5.45 Ω" },
            { id: "b", text: "20 Ω" },
            { id: "c", text: "60 Ω" },
            { id: "d", text: "600 Ω" },
          ],
          correctOptionId: "c",
          explanation:
            "In series, R_eq = R₁ + R₂ + R₃ = 10 + 20 + 30 = 60 Ω.",
        },
        {
          id: "electrical-engineering-101-l03-q3",
          text: "According to Kirchhoff's Current Law, what happens at a circuit node?",
          skillId: "electrical-engineering-101-skill-core",
          options: [
            { id: "a", text: "Current is always equally divided among branches" },
            { id: "b", text: "The total current entering equals the total current leaving" },
            { id: "c", text: "Current increases as it passes through the node" },
            { id: "d", text: "Voltage across the node is always zero" },
          ],
          correctOptionId: "b",
          explanation:
            "KCL is based on conservation of charge — charge cannot accumulate at a node, so ΣI_in = ΣI_out.",
        },
        {
          id: "electrical-engineering-101-l03-q4",
          text: "Two resistors, 6 Ω and 3 Ω, are connected in parallel across a 9 V source. What is the total current drawn from the source?",
          skillId: "electrical-engineering-101-skill-core",
          options: [
            { id: "a", text: "1 A" },
            { id: "b", text: "1.5 A" },
            { id: "c", text: "3 A" },
            { id: "d", text: "4.5 A" },
          ],
          correctOptionId: "d",
          explanation:
            "R_eq = (6 × 3)/(6 + 3) = 2 Ω. I_total = V/R_eq = 9/2 = 4.5 A. Alternatively: I₁ = 9/6 = 1.5 A, I₂ = 9/3 = 3 A, total = 4.5 A.",
        },
      ],
      learningAids: [
        {
          id: "electrical-engineering-101-l03-a1",
          type: "mnemonic",
          title: "VIR Triangle",
          content: "Cover the unknown in the triangle: V on top, I and R on the bottom. V = IR, I = V/R, R = V/I.",
        },
      ],
    },

    /* ────────────────────────────────────────────
       L04 – VIDEO: Capacitors and Inductors
       ──────────────────────────────────────────── */
    {
      id: "electrical-engineering-101-l04",
      title: "Capacitors and Inductors",
      type: "video",
      duration: 12,
      objectives: [
        "Explain how capacitors store energy in an electric field",
        "Explain how inductors store energy in a magnetic field",
        "Calculate RC and RL time constants",
        "Distinguish between transient and steady-state behavior",
      ],
      chunks: [
        {
          id: "electrical-engineering-101-l04-c1",
          title: "Capacitors and Electric Fields",
          kind: "concept",
          content:
            "A capacitor consists of two conductive plates separated by an insulating dielectric. When voltage is applied, charge accumulates on the plates and an electric field stores energy. Capacitance C = Q/V is measured in farads (F). Typical values range from picofarads (pF) in RF circuits to thousands of microfarads (μF) in power supplies. The energy stored is E = ½CV². Capacitors block DC once fully charged but pass AC because the continuously changing voltage causes charge to flow on and off the plates.",
        },
        {
          id: "electrical-engineering-101-l04-c2",
          title: "Inductors and Magnetic Fields",
          kind: "concept",
          content:
            "An inductor is a coil of wire that stores energy in a magnetic field when current flows through it. Inductance L is measured in henrys (H) and depends on the number of turns, core material, and coil geometry. The voltage across an inductor is v = L(di/dt) — it opposes changes in current. Stored energy is E = ½LI². Inductors pass DC freely (they look like a short wire at DC) but impede AC because the changing current constantly induces a back-EMF that resists the change.",
        },
        {
          id: "electrical-engineering-101-l04-c3",
          title: "Time Constants and Transient Response",
          kind: "concept",
          content:
            "When a capacitor charges through a resistor, the voltage rises exponentially: v(t) = V_s(1 − e^(−t/τ)), where τ = RC is the time constant. After 5τ, the capacitor is about 99.3% charged. For an RL circuit, current rises as i(t) = (V_s/R)(1 − e^(−t/τ)) with τ = L/R. The transient period is the interval during which voltages and currents change; steady state is the final, constant condition. Understanding time constants is critical for designing filters, timing circuits, and power supply smoothing.",
        },
      ],
      flashcards: [
        {
          id: "electrical-engineering-101-l04-f1",
          front: "What is the time constant of an RC circuit?",
          back: "τ = RC (seconds). After one time constant, the capacitor reaches ~63.2% of its final voltage. After 5τ it is ~99.3% charged.",
        },
        {
          id: "electrical-engineering-101-l04-f2",
          front: "How does an inductor respond to a sudden change in current?",
          back: "It generates a back-EMF (v = L di/dt) that opposes the change. Current through an inductor cannot change instantaneously.",
        },
        {
          id: "electrical-engineering-101-l04-f3",
          front: "What energy does a capacitor store and in what form?",
          back: "E = ½CV², stored in the electric field between its plates.",
        },
        {
          id: "electrical-engineering-101-l04-f4",
          front: "Why do capacitors block DC but pass AC?",
          back: "Once fully charged, no more current flows (DC blocked). AC continuously changes polarity, so charge flows on and off the plates, effectively passing the signal.",
        },
      ],
      learningAids: [
        {
          id: "electrical-engineering-101-l04-a1",
          type: "animation",
          title: "RC Charging Curve",
          content:
            "Animated exponential curve showing capacitor voltage rising from 0 to V_s, marking 1τ (63.2%), 3τ (95%), and 5τ (99.3%).",
        },
        {
          id: "electrical-engineering-101-l04-a2",
          type: "image",
          title: "Capacitor vs Inductor Comparison",
          content:
            "Two-column chart comparing: stores energy in E-field vs B-field, opposes voltage change vs current change, blocks DC vs passes DC.",
        },
      ],
    },

    /* ────────────────────────────────────────────
       L05 – INTERACTIVE: AC Circuit Fundamentals
       ──────────────────────────────────────────── */
    {
      id: "electrical-engineering-101-l05",
      title: "AC Circuit Fundamentals",
      type: "interactive",
      duration: 14,
      objectives: [
        "Describe sinusoidal voltage in terms of amplitude, frequency, and phase",
        "Calculate RMS values for voltage and current",
        "Define impedance and distinguish it from resistance",
        "Use phasor diagrams to represent AC quantities",
      ],
      chunks: [
        {
          id: "electrical-engineering-101-l05-c1",
          title: "Sinusoidal Signals",
          kind: "concept",
          content:
            "Alternating current (AC) periodically reverses direction. The standard waveform is a sinusoid: v(t) = V_peak × sin(2πft + φ), where V_peak is the maximum amplitude, f is frequency in hertz, and φ is the phase angle. Power grids typically operate at 50 Hz (Europe, Asia) or 60 Hz (Americas). The period T = 1/f is the time for one full cycle. AC is preferred for long-distance power transmission because transformers can easily step voltage up or down, reducing I²R losses in transmission lines.",
        },
        {
          id: "electrical-engineering-101-l05-c2",
          title: "RMS Values and Power",
          kind: "concept",
          content:
            "The root-mean-square (RMS) value of an AC signal is the DC equivalent that delivers the same average power. For a sinusoid, V_rms = V_peak / √2 ≈ 0.707 × V_peak. A '120 V' household outlet has V_peak ≈ 170 V. Average power in a resistive load is P = V_rms × I_rms. In circuits with reactive components, apparent power S = V_rms × I_rms is measured in volt-amperes (VA), and the power factor cos(φ) gives the fraction that is real (useful) power: P = S × cos(φ).",
        },
        {
          id: "electrical-engineering-101-l05-c3",
          title: "Impedance and Phasors",
          kind: "concept",
          content:
            "Impedance (Z) extends resistance to AC circuits and is measured in ohms. For a resistor Z_R = R, for a capacitor Z_C = 1/(jωC), and for an inductor Z_L = jωL, where ω = 2πf and j = √(−1). Impedance has magnitude |Z| and phase angle θ. Phasors are rotating vectors that represent sinusoidal quantities by their magnitude and phase. In a series RLC circuit, V_R is in phase with current, V_L leads by 90°, and V_C lags by 90°. Phasor diagrams make it easy to add these voltages graphically.",
        },
      ],
      flashcards: [
        {
          id: "electrical-engineering-101-l05-f1",
          front: "How do you convert peak voltage to RMS?",
          back: "V_rms = V_peak / √2 ≈ 0.707 × V_peak. This gives the DC-equivalent value for power calculations.",
        },
        {
          id: "electrical-engineering-101-l05-f2",
          front: "What is impedance?",
          back: "The AC equivalent of resistance, combining resistance and reactance: Z = R + jX, measured in ohms. It has both magnitude and phase angle.",
        },
        {
          id: "electrical-engineering-101-l05-f3",
          front: "How does inductor voltage relate to current in phasor form?",
          back: "Voltage across an inductor leads the current by 90°. Remembered by the mnemonic 'ELI the ICE man' (E leads I in L; I leads E in C).",
        },
        {
          id: "electrical-engineering-101-l05-f4",
          front: "What is power factor?",
          back: "cos(φ), where φ is the phase angle between voltage and current. It indicates the fraction of apparent power (VA) that does real work (W). Unity power factor (cos φ = 1) means all power is real.",
        },
      ],
      interactiveActivities: [
        {
          id: "electrical-engineering-101-l05-a1",
          type: "matching_pairs",
          title: "AC Quantities Matching",
          description: "Match each AC concept to its correct definition or formula.",
          estimatedMinutes: 5,
          difficultyLevel: "medium",
          data: {
            left: [
              { id: "p1", text: "Impedance of a capacitor" },
              { id: "p2", text: "Impedance of an inductor" },
              { id: "p3", text: "RMS voltage" },
              { id: "p4", text: "Period" },
              { id: "p5", text: "Power factor" },
              { id: "p6", text: "Angular frequency" },
            ],
            right: [
              { id: "p1", text: "1 / (jωC)" },
              { id: "p2", text: "jωL" },
              { id: "p3", text: "V_peak / √2" },
              { id: "p4", text: "T = 1/f" },
              { id: "p5", text: "cos(φ)" },
              { id: "p6", text: "ω = 2πf" },
            ],
          },
        },
      ],
      learningAids: [
        {
          id: "electrical-engineering-101-l05-a2",
          type: "practice",
          title: "Phasor Diagram Sketch",
          content:
            "Draw the phasor diagram for a series RLC circuit driven at resonance (X_L = X_C). Show where V_R, V_L, and V_C point and explain why total voltage equals V_R at resonance.",
        },
      ],
    },

    /* ────────────────────────────────────────────
       L06 – QUIZ: Energy Storage & AC Checkpoint
       ──────────────────────────────────────────── */
    {
      id: "electrical-engineering-101-l06",
      title: "Energy Storage & AC Checkpoint",
      type: "quiz",
      duration: 10,
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, apply: 2, analyze: 1 },
      },
      questions: [
        {
          id: "electrical-engineering-101-l06-q1",
          text: "An RC circuit has R = 10 kΩ and C = 100 μF. What is the time constant?",
          skillId: "electrical-engineering-101-skill-core",
          options: [
            { id: "a", text: "0.001 s" },
            { id: "b", text: "0.1 s" },
            { id: "c", text: "1 s" },
            { id: "d", text: "10 s" },
          ],
          correctOptionId: "c",
          explanation:
            "τ = RC = 10,000 Ω × 100 × 10⁻⁶ F = 1 s.",
        },
        {
          id: "electrical-engineering-101-l06-q2",
          text: "What is the RMS voltage of a sinusoidal source with a peak voltage of 340 V?",
          skillId: "electrical-engineering-101-skill-core",
          options: [
            { id: "a", text: "170 V" },
            { id: "b", text: "240 V" },
            { id: "c", text: "340 V" },
            { id: "d", text: "480 V" },
          ],
          correctOptionId: "b",
          explanation:
            "V_rms = V_peak / √2 = 340 / 1.414 ≈ 240 V. This is the standard European mains voltage.",
        },
        {
          id: "electrical-engineering-101-l06-q3",
          text: "Which component opposes changes in current and stores energy in a magnetic field?",
          skillId: "electrical-engineering-101-skill-core",
          options: [
            { id: "a", text: "Resistor" },
            { id: "b", text: "Capacitor" },
            { id: "c", text: "Inductor" },
            { id: "d", text: "Diode" },
          ],
          correctOptionId: "c",
          explanation:
            "An inductor stores energy as E = ½LI² in its magnetic field and opposes current changes via v = L(di/dt).",
        },
        {
          id: "electrical-engineering-101-l06-q4",
          text: "In a phasor diagram, the voltage across a capacitor _____ the current by 90°.",
          skillId: "electrical-engineering-101-skill-core",
          options: [
            { id: "a", text: "leads" },
            { id: "b", text: "lags" },
            { id: "c", text: "is in phase with" },
            { id: "d", text: "is 180° out of phase with" },
          ],
          correctOptionId: "b",
          explanation:
            "In a capacitor, current leads voltage (or equivalently, voltage lags current) by 90°. Mnemonic: 'ICE' — I leads E in C.",
        },
      ],
      learningAids: [
        {
          id: "electrical-engineering-101-l06-a1",
          type: "mnemonic",
          title: "ELI the ICE man",
          content:
            "ELI: in an inductor (L), voltage (E) leads current (I). ICE: in a capacitor (C), current (I) leads voltage (E).",
        },
      ],
    },

    /* ────────────────────────────────────────────
       L07 – VIDEO: Semiconductors and Diodes
       ──────────────────────────────────────────── */
    {
      id: "electrical-engineering-101-l07",
      title: "Semiconductors and Diodes",
      type: "video",
      duration: 12,
      objectives: [
        "Describe the crystal structure and doping of silicon",
        "Explain p-n junction formation and the depletion region",
        "Distinguish forward bias from reverse bias in a diode",
        "Identify common diode applications: rectification and LEDs",
      ],
      chunks: [
        {
          id: "electrical-engineering-101-l07-c1",
          title: "Semiconductor Basics",
          kind: "concept",
          content:
            "Silicon has four valence electrons and forms a diamond-cubic crystal lattice by sharing electrons with four neighbors (covalent bonds). Pure silicon is a poor conductor at room temperature. Doping adds impurity atoms to control conductivity: n-type doping uses pentavalent atoms (e.g., phosphorus) that donate extra electrons, while p-type doping uses trivalent atoms (e.g., boron) that create 'holes' — missing electrons that act as positive charge carriers. The ability to engineer conductivity is the foundation of all semiconductor devices.",
        },
        {
          id: "electrical-engineering-101-l07-c2",
          title: "P-N Junctions and Diodes",
          kind: "concept",
          content:
            "When p-type and n-type silicon are joined, electrons from the n-side diffuse into the p-side and recombine with holes, forming a depletion region devoid of free carriers. This region creates a built-in potential barrier (~0.7 V for silicon). Forward bias (positive terminal to p-side) shrinks the depletion region and allows current to flow. Reverse bias widens it and blocks current — only a tiny leakage current flows. This one-way behavior makes diodes essential for converting AC to DC (rectification).",
        },
        {
          id: "electrical-engineering-101-l07-c3",
          title: "Rectification and LEDs",
          kind: "example",
          content:
            "A half-wave rectifier uses one diode to pass only positive half-cycles, producing pulsating DC. A full-wave bridge rectifier uses four diodes to redirect both halves, giving smoother output that can be filtered with a capacitor. Light-emitting diodes (LEDs) are forward-biased p-n junctions made from compound semiconductors (e.g., GaN for blue/white, GaAsP for red). When electrons recombine with holes at the junction, they release energy as photons. The color depends on the semiconductor's bandgap energy.",
        },
      ],
      flashcards: [
        {
          id: "electrical-engineering-101-l07-f1",
          front: "What is n-type doping?",
          back: "Adding pentavalent impurity atoms (e.g., phosphorus) to silicon. Each dopant atom contributes one extra electron, making electrons the majority carriers.",
        },
        {
          id: "electrical-engineering-101-l07-f2",
          front: "What is the forward-bias voltage drop of a silicon diode?",
          back: "Approximately 0.7 V. Once forward voltage exceeds this threshold, the diode conducts freely.",
        },
        {
          id: "electrical-engineering-101-l07-f3",
          front: "How does a full-wave bridge rectifier work?",
          back: "Four diodes arranged so that both halves of the AC input produce current in the same direction through the load, yielding smoother DC than a half-wave rectifier.",
        },
        {
          id: "electrical-engineering-101-l07-f4",
          front: "What determines the color of an LED?",
          back: "The bandgap energy of the semiconductor material. Larger bandgaps (e.g., GaN ≈ 3.4 eV) produce shorter-wavelength blue/violet light; smaller bandgaps produce red/infrared.",
        },
      ],
      learningAids: [
        {
          id: "electrical-engineering-101-l07-a1",
          type: "image",
          title: "P-N Junction Diagram",
          content:
            "Cross-section showing p-type (holes) on the left, n-type (electrons) on the right, and the depletion region in the center with its built-in electric field pointing from n to p.",
        },
        {
          id: "electrical-engineering-101-l07-a2",
          type: "animation",
          title: "Bridge Rectifier Operation",
          content:
            "Step-by-step animation showing how the four diodes steer current through the load in the same direction during both positive and negative AC half-cycles.",
        },
      ],
    },

    /* ────────────────────────────────────────────
       L08 – INTERACTIVE: Transistors and Digital Logic
       ──────────────────────────────────────────── */
    {
      id: "electrical-engineering-101-l08",
      title: "Transistors and Digital Logic",
      type: "interactive",
      duration: 14,
      objectives: [
        "Explain the operation of a BJT as a current-controlled switch",
        "Explain the operation of a MOSFET as a voltage-controlled switch",
        "Construct AND, OR, and NOT gates from transistors",
        "Trace logic levels through a simple combinational circuit",
      ],
      chunks: [
        {
          id: "electrical-engineering-101-l08-c1",
          title: "Bipolar Junction Transistors (BJTs)",
          kind: "concept",
          content:
            "A BJT has three layers of doped silicon forming two p-n junctions: NPN or PNP. In an NPN transistor, a small base current I_B controls a much larger collector current I_C according to I_C = β × I_B, where β (current gain) typically ranges from 50 to 300. In saturation mode both junctions are forward-biased and the transistor acts like a closed switch (V_CE ≈ 0.2 V). In cutoff mode both are reverse-biased and it acts like an open switch. This on/off switching behavior is the basis for digital logic.",
        },
        {
          id: "electrical-engineering-101-l08-c2",
          title: "MOSFETs",
          kind: "concept",
          content:
            "A Metal-Oxide-Semiconductor Field-Effect Transistor (MOSFET) is voltage-controlled: a gate voltage V_GS above the threshold voltage V_th creates a conducting channel between drain and source. Enhancement-mode MOSFETs are normally off and turn on when V_GS > V_th. They draw almost zero gate current, making them ideal for high-density integrated circuits. CMOS technology pairs an n-channel and p-channel MOSFET so that one is always off, minimizing static power consumption — the reason modern processors can contain billions of transistors.",
        },
        {
          id: "electrical-engineering-101-l08-c3",
          title: "Basic Logic Gates",
          kind: "example",
          content:
            "A NOT gate (inverter) uses one transistor: when the input is HIGH, the transistor conducts and pulls the output LOW, and vice versa. A NAND gate uses two transistors in series — the output is LOW only when both inputs are HIGH. A NOR gate uses two transistors in parallel — the output is LOW when either input is HIGH. NAND and NOR are universal gates: any Boolean function can be built from NAND gates alone (or NOR gates alone). Combining these gates creates adders, multiplexers, and entire CPUs.",
        },
      ],
      flashcards: [
        {
          id: "electrical-engineering-101-l08-f1",
          front: "What is the key difference between a BJT and a MOSFET?",
          back: "A BJT is current-controlled (base current sets collector current). A MOSFET is voltage-controlled (gate voltage creates the channel). MOSFETs draw virtually no gate current.",
        },
        {
          id: "electrical-engineering-101-l08-f2",
          front: "What does β (beta) represent in a BJT?",
          back: "Current gain: β = I_C / I_B. A small base current controls a much larger collector current. Typical values are 50–300.",
        },
        {
          id: "electrical-engineering-101-l08-f3",
          front: "Why are NAND and NOR called 'universal' gates?",
          back: "Any Boolean logic function (AND, OR, NOT, XOR, etc.) can be implemented using only NAND gates or only NOR gates.",
        },
        {
          id: "electrical-engineering-101-l08-f4",
          front: "Why does CMOS logic consume very low static power?",
          back: "In CMOS, complementary n-channel and p-channel MOSFETs ensure one transistor is always off in each logic state, so negligible current flows through the circuit at rest.",
        },
      ],
      interactiveActivities: [
        {
          id: "electrical-engineering-101-l08-a1",
          type: "sorting_buckets",
          title: "BJT vs MOSFET Properties",
          description: "Sort each characteristic to the correct transistor type.",
          estimatedMinutes: 6,
          difficultyLevel: "medium",
          data: {
            buckets: [
              { id: "bjt", label: "BJT" },
              { id: "mosfet", label: "MOSFET" },
            ],
            items: [
              { id: "i1", label: "Current-controlled device", correctBucketId: "bjt" },
              { id: "i2", label: "Voltage-controlled device", correctBucketId: "mosfet" },
              { id: "i3", label: "Has base, collector, emitter terminals", correctBucketId: "bjt" },
              { id: "i4", label: "Has gate, drain, source terminals", correctBucketId: "mosfet" },
              { id: "i5", label: "Draws significant input current", correctBucketId: "bjt" },
              { id: "i6", label: "Virtually zero gate current", correctBucketId: "mosfet" },
              { id: "i7", label: "Preferred for high-density ICs (CMOS)", correctBucketId: "mosfet" },
              { id: "i8", label: "Gain described by β = I_C / I_B", correctBucketId: "bjt" },
            ],
          },
        },
      ],
      learningAids: [
        {
          id: "electrical-engineering-101-l08-a2",
          type: "practice",
          title: "Logic Gate Truth Table Exercise",
          content:
            "Complete truth tables for 2-input AND, OR, NAND, and NOR gates. Then show how to build an AND gate using only NAND gates (hint: two NAND gates).",
        },
      ],
    },

    /* ────────────────────────────────────────────
       L09 – QUIZ: Semiconductors & Logic Checkpoint
       ──────────────────────────────────────────── */
    {
      id: "electrical-engineering-101-l09",
      title: "Semiconductors & Logic Checkpoint",
      type: "quiz",
      duration: 10,
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 1, apply: 1 },
      },
      questions: [
        {
          id: "electrical-engineering-101-l09-q1",
          text: "What type of doping creates 'holes' as majority carriers?",
          skillId: "electrical-engineering-101-skill-core",
          options: [
            { id: "a", text: "n-type (pentavalent dopant)" },
            { id: "b", text: "p-type (trivalent dopant)" },
            { id: "c", text: "Intrinsic (no dopant)" },
            { id: "d", text: "Metallic doping" },
          ],
          correctOptionId: "b",
          explanation:
            "P-type doping uses trivalent atoms like boron. Each boron atom has only three valence electrons, creating a 'hole' that acts as a positive charge carrier in the silicon lattice.",
        },
        {
          id: "electrical-engineering-101-l09-q2",
          text: "A silicon diode is forward-biased. What is the approximate voltage drop across it?",
          skillId: "electrical-engineering-101-skill-core",
          options: [
            { id: "a", text: "0 V" },
            { id: "b", text: "0.3 V" },
            { id: "c", text: "0.7 V" },
            { id: "d", text: "5 V" },
          ],
          correctOptionId: "c",
          explanation:
            "The built-in potential of a silicon p-n junction is approximately 0.7 V (germanium is ~0.3 V). This must be exceeded for significant current to flow.",
        },
        {
          id: "electrical-engineering-101-l09-q3",
          text: "Which gate outputs LOW only when BOTH inputs are HIGH?",
          skillId: "electrical-engineering-101-skill-core",
          options: [
            { id: "a", text: "AND" },
            { id: "b", text: "OR" },
            { id: "c", text: "NAND" },
            { id: "d", text: "NOR" },
          ],
          correctOptionId: "c",
          explanation:
            "A NAND gate outputs HIGH for all input combinations except when both inputs are HIGH. It is the complement of AND.",
        },
        {
          id: "electrical-engineering-101-l09-q4",
          text: "Why is CMOS technology preferred for modern processors?",
          skillId: "electrical-engineering-101-skill-core",
          options: [
            { id: "a", text: "It uses only NPN transistors" },
            { id: "b", text: "Its complementary transistor pairs minimize static power dissipation" },
            { id: "c", text: "It requires no voltage supply" },
            { id: "d", text: "It can only build NOT gates" },
          ],
          correctOptionId: "b",
          explanation:
            "CMOS pairs n-channel and p-channel MOSFETs. In any stable logic state one transistor is off, so almost no static current flows, enabling billions of transistors with manageable power.",
        },
      ],
      learningAids: [
        {
          id: "electrical-engineering-101-l09-a1",
          type: "mnemonic",
          title: "NPN vs PNP Quick Check",
          content:
            "NPN: 'Not Pointing iN' — the arrow on the emitter points outward. PNP: 'Pointing iN Proudly' — the arrow points inward toward the base.",
        },
      ],
    },

    /* ────────────────────────────────────────────
       L10 – QUIZ: Mastery Quiz – EE Foundations
       ──────────────────────────────────────────── */
    {
      id: "electrical-engineering-101-l10",
      title: "Mastery Quiz: EE Foundations",
      type: "quiz",
      duration: 12,
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { apply: 2, analyze: 1, evaluate: 1 },
      },
      questions: [
        {
          id: "electrical-engineering-101-l10-q1",
          text: "A 50 Ω resistor and a capacitor with reactance X_C = 50 Ω are in series across a 100 V_rms AC source. What is the magnitude of the impedance?",
          skillId: "electrical-engineering-101-skill-core",
          options: [
            { id: "a", text: "0 Ω" },
            { id: "b", text: "50 Ω" },
            { id: "c", text: "70.7 Ω" },
            { id: "d", text: "100 Ω" },
          ],
          correctOptionId: "c",
          explanation:
            "|Z| = √(R² + X_C²) = √(50² + 50²) = √5000 ≈ 70.7 Ω. Resistance and reactance add as vectors, not arithmetically.",
        },
        {
          id: "electrical-engineering-101-l10-q2",
          text: "In a full-wave bridge rectifier, how many diodes conduct during each half-cycle of the AC input?",
          skillId: "electrical-engineering-101-skill-core",
          options: [
            { id: "a", text: "1" },
            { id: "b", text: "2" },
            { id: "c", text: "3" },
            { id: "d", text: "4" },
          ],
          correctOptionId: "b",
          explanation:
            "In each half-cycle, two diodes are forward-biased and conduct while the other two are reverse-biased. This steers both halves through the load in the same direction.",
        },
        {
          id: "electrical-engineering-101-l10-q3",
          text: "A MOSFET's gate-source voltage is below threshold. What is the state of the device?",
          skillId: "electrical-engineering-101-skill-core",
          options: [
            { id: "a", text: "Saturation — maximum current flows" },
            { id: "b", text: "Ohmic region — behaves as a variable resistor" },
            { id: "c", text: "Cutoff — no channel, no drain current" },
            { id: "d", text: "Breakdown — destructive current flows" },
          ],
          correctOptionId: "c",
          explanation:
            "When V_GS < V_th for an enhancement-mode MOSFET, no inversion layer forms and the transistor is in cutoff — effectively an open switch with zero drain current.",
        },
        {
          id: "electrical-engineering-101-l10-q4",
          text: "An RL circuit has R = 200 Ω and L = 0.4 H. How long does it take to reach approximately 63% of its final current after a step input?",
          skillId: "electrical-engineering-101-skill-core",
          options: [
            { id: "a", text: "0.002 s" },
            { id: "b", text: "0.02 s" },
            { id: "c", text: "0.2 s" },
            { id: "d", text: "80 s" },
          ],
          correctOptionId: "a",
          explanation:
            "τ = L/R = 0.4 H / 200 Ω = 0.002 s (2 ms). After one time constant the current reaches ~63.2% of V_s/R.",
        },
      ],
      learningAids: [
        {
          id: "electrical-engineering-101-l10-a1",
          type: "mnemonic",
          title: "Impedance Magnitude Formula",
          content:
            "|Z| = √(R² + (X_L − X_C)²). Think of R and net reactance as the two sides of a right triangle — impedance is the hypotenuse.",
        },
      ],
    },
  ],
};
