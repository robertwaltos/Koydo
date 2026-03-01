import type { LearningModule } from "@/lib/modules/types";

export const CivilEngineering101Module: LearningModule = {
  id: "civil-engineering-101",
  title: "Civil Engineering Foundations",
  description:
    "A comprehensive introduction to civil engineering covering structural analysis and statics, construction materials science, geotechnical engineering and soil mechanics, hydraulics and water resources, and transportation infrastructure design. Build the foundational knowledge needed to understand how bridges, buildings, dams, and highways are conceived, analyzed, and constructed.",
  subject: "Engineering",
  tags: ["core", "curriculum", "interactive", "engineering", "civil"],
  minAge: 16,
  maxAge: 99,
  version: "2.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Analyze forces acting on structures using free-body diagrams and equilibrium equations",
    "Identify common structural members—beams, columns, trusses, arches, and cables—and describe their load paths",
    "Compare the mechanical properties of concrete, steel, timber, and composite materials using stress-strain relationships",
    "Classify soils and evaluate bearing capacity for shallow and deep foundation design",
    "Apply Bernoulli's equation and continuity principles to pipe flow and open channel hydraulics",
    "Explain highway geometric design, pavement types, and traffic flow fundamentals",
    "Interpret key civil engineering codes and standards including ACI, AISC, and AASHTO"
  ],
  lessons: [
    // ── L01 ── Forces and Equilibrium (video) ──────────────────────────
    {
      id: "civil-engineering-101-l01",
      title: "Forces and Equilibrium",
      type: "video",
      duration: 12,
      chunks: [
        {
          id: "civil-engineering-101-l01-c1",
          title: "Newton's Laws and Force Vectors",
          content:
            "Civil engineering begins with understanding forces. Newton's First Law tells us a body at rest stays at rest unless acted on by an unbalanced force—this is the basis of static analysis. Forces are vector quantities possessing both magnitude and direction, and we resolve them into horizontal and vertical components using trigonometry. When multiple forces act on a point, we sum components along each axis. The resultant force determines whether the body accelerates or remains in equilibrium. Mastering vector addition is essential before analyzing any real structure."
        },
        {
          id: "civil-engineering-101-l01-c2",
          title: "Free-Body Diagrams and Moments",
          content:
            "A free-body diagram (FBD) isolates a body and shows every external force acting on it, including applied loads, reactions, and self-weight. Drawing accurate FBDs is the single most important skill in statics. Moments (torques) measure a force's tendency to rotate a body about a point and equal the force magnitude times the perpendicular distance to the pivot. The sign convention—typically counterclockwise positive—must remain consistent throughout a problem. Couples, which are equal and opposite parallel forces, produce pure rotation with no net translation."
        },
        {
          id: "civil-engineering-101-l01-c3",
          title: "Equilibrium Conditions",
          content:
            "A structure is in static equilibrium when the sum of all forces and the sum of all moments equal zero: ΣFx = 0, ΣFy = 0, and ΣM = 0. These three equations let us solve for up to three unknown reaction forces in a two-dimensional problem. For a simply supported beam with a point load, we take moments about one support to find the reaction at the other, then use force balance to find the remaining reaction. Statically determinate structures can be fully solved with equilibrium alone; indeterminate structures require additional compatibility equations."
        }
      ],
      flashcards: [
        { id: "civil-engineering-101-l01-f1", front: "What is a free-body diagram?", back: "An isolated sketch of a body showing all external forces—applied loads, reactions, and weight—acting on it, used as the starting point for equilibrium analysis." },
        { id: "civil-engineering-101-l01-f2", front: "State the three 2-D equilibrium equations.", back: "ΣFx = 0 (horizontal forces balance), ΣFy = 0 (vertical forces balance), and ΣM = 0 (moments about any point balance)." },
        { id: "civil-engineering-101-l01-f3", front: "What is a moment (torque)?", back: "The tendency of a force to cause rotation about a point, calculated as M = F × d, where d is the perpendicular distance from the line of action to the pivot." },
        { id: "civil-engineering-101-l01-f4", front: "What distinguishes a statically determinate structure from an indeterminate one?", back: "A determinate structure can be fully solved using equilibrium equations alone, while an indeterminate structure has more unknowns than equilibrium equations and requires compatibility/deformation conditions." }
      ],
      learningAids: [
        { id: "civil-engineering-101-l01-a1", type: "image", title: "Force Vector Resolution", content: "Diagram showing a force vector decomposed into horizontal (Fx = F cos θ) and vertical (Fy = F sin θ) components on a Cartesian plane." },
        { id: "civil-engineering-101-l01-a2", type: "animation", title: "FBD Step-by-Step", content: "Animated walkthrough removing a beam from its supports and replacing connections with reaction forces, then summing forces and moments to solve for unknowns." }
      ]
    },

    // ── L02 ── Structural Members (interactive) ────────────────────────
    {
      id: "civil-engineering-101-l02",
      title: "Structural Members",
      type: "interactive",
      duration: 14,
      chunks: [
        {
          id: "civil-engineering-101-l02-c1",
          title: "Beams and Columns",
          content:
            "Beams are horizontal members that resist loads primarily through bending. When a load is applied perpendicular to a beam's axis, internal shear forces and bending moments develop along its length. Shear and moment diagrams visualize these internal forces and are critical for sizing the member. Columns are vertical members that carry axial compressive loads. Short columns fail by material crushing, while slender columns may buckle—a sudden lateral deflection governed by Euler's critical load formula: Pcr = π²EI / (KL)². Understanding effective length factor K depends on end conditions."
        },
        {
          id: "civil-engineering-101-l02-c2",
          title: "Trusses, Arches, and Cables",
          content:
            "Trusses are assemblies of two-force members connected at joints (nodes) and loaded only at those joints, so every member is in pure tension or compression. The method of joints and the method of sections are the two primary analysis techniques. Arches transfer loads primarily through compression along their curved axis, making them ideal for spanning large openings in bridges and aqueducts. Cables, by contrast, carry loads entirely in tension and assume a shape dictated by the loading—a parabola under uniform load or a catenary under self-weight."
        },
        {
          id: "civil-engineering-101-l02-c3",
          title: "Support Types and Load Paths",
          content:
            "Structures connect to the ground through supports that constrain movement. A pin support prevents translation in two directions but allows rotation, providing two reaction components. A roller prevents translation in one direction only, providing one reaction. A fixed support prevents both translation and rotation, providing two force reactions plus a moment reaction. The load path describes how applied forces travel through structural members to the supports and ultimately into the foundation and ground. Tracing load paths helps engineers verify that every force has a continuous route to the earth."
        }
      ],
      flashcards: [
        { id: "civil-engineering-101-l02-f1", front: "What internal forces develop in a beam under transverse loading?", back: "Shear forces (V) and bending moments (M), which vary along the beam's length and are visualized with shear and moment diagrams." },
        { id: "civil-engineering-101-l02-f2", front: "State Euler's critical buckling load formula.", back: "Pcr = π²EI / (KL)², where E is the modulus of elasticity, I is the moment of inertia, K is the effective length factor, and L is the column length." },
        { id: "civil-engineering-101-l02-f3", front: "Why are all truss members two-force members?", back: "Because loads are applied only at the joints, so each member experiences force only at its two endpoints, resulting in pure axial tension or compression with no bending." },
        { id: "civil-engineering-101-l02-f4", front: "How many reaction components does each support type provide?", back: "Roller: 1 (perpendicular force). Pin: 2 (horizontal + vertical forces). Fixed: 3 (horizontal force + vertical force + moment)." }
      ],
      metadata: {
        prompts: [
          "Given a simply supported beam with a single point load at midspan, draw the shear and bending moment diagrams.",
          "Identify whether each member of a given Pratt truss is in tension or compression under a uniform roof load.",
          "Trace the load path from a floor slab through beams, columns, and footings to the ground."
        ]
      },
      interactiveActivities: [
        {
          id: "civil-engineering-101-l02-act1",
          type: "sorting",
          title: "Match the Structural Member",
          instructions: ["Drag each structural member to its primary internal force category: Bending, Axial Compression, Axial Tension, or Combined."],
          description: "Members: simply supported beam, column, truss top chord, truss bottom chord, suspension cable, arch rib. Categories: Bending → beam; Axial Compression → column, truss top chord, arch rib; Axial Tension → truss bottom chord, suspension cable."
        }
      ],
      learningAids: [
        { id: "civil-engineering-101-l02-a1", type: "practice", title: "Truss Analysis Workshop", content: "Use the method of joints to solve for all member forces in a 5-member planar truss. Record tension (+) and compression (−) for each member." }
      ]
    },

    // ── L03 ── Statics & Structures Checkpoint (quiz) ──────────────────
    {
      id: "civil-engineering-101-l03",
      title: "Statics & Structures Checkpoint",
      type: "quiz",
      duration: 10,
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 2 }
      },
      questions: [
        {
          id: "civil-engineering-101-l03-q1",
          text: "A 10 kN force acts at 30° above the horizontal. What is the magnitude of its vertical component?",
          skillId: "civil-engineering-101-skill-core",
          options: [
            { id: "a", text: "5.0 kN" },
            { id: "b", text: "8.66 kN" },
            { id: "c", text: "10.0 kN" },
            { id: "d", text: "7.07 kN" }
          ],
          correctOptionId: "a",
          explanation: "The vertical component is F sin θ = 10 × sin 30° = 10 × 0.5 = 5.0 kN."
        },
        {
          id: "civil-engineering-101-l03-q2",
          text: "How many independent equilibrium equations are available for a 2-D rigid body?",
          skillId: "civil-engineering-101-skill-core",
          options: [
            { id: "a", text: "2" },
            { id: "b", text: "3" },
            { id: "c", text: "4" },
            { id: "d", text: "6" }
          ],
          correctOptionId: "b",
          explanation: "In two dimensions, static equilibrium provides three independent equations: ΣFx = 0, ΣFy = 0, and ΣM = 0."
        },
        {
          id: "civil-engineering-101-l03-q3",
          text: "Which support type provides exactly one reaction component?",
          skillId: "civil-engineering-101-skill-core",
          options: [
            { id: "a", text: "Fixed support" },
            { id: "b", text: "Pin support" },
            { id: "c", text: "Roller support" },
            { id: "d", text: "Moment connection" }
          ],
          correctOptionId: "c",
          explanation: "A roller allows rotation and translation along one axis, constraining motion in only one direction and thus providing a single reaction force perpendicular to the rolling surface."
        },
        {
          id: "civil-engineering-101-l03-q4",
          text: "In a planar truss loaded only at its joints, every member experiences which type of internal force?",
          skillId: "civil-engineering-101-skill-core",
          options: [
            { id: "a", text: "Shear only" },
            { id: "b", text: "Bending only" },
            { id: "c", text: "Pure axial force (tension or compression)" },
            { id: "d", text: "Torsion" }
          ],
          correctOptionId: "c",
          explanation: "Because loads act only at the joints and members are pin-connected, each member is a two-force member carrying pure axial tension or compression with no bending or shear."
        }
      ],
      learningAids: [
        { id: "civil-engineering-101-l03-a1", type: "mnemonic", title: "Equilibrium Checklist", content: "Remember: FBD first, then ΣFx = 0, ΣFy = 0, ΣM = 0. Always check your reaction count against available equations before solving." }
      ]
    },

    // ── L04 ── Materials Science for Civil Engineers (video) ────────────
    {
      id: "civil-engineering-101-l04",
      title: "Materials Science for Civil Engineers",
      type: "video",
      duration: 12,
      chunks: [
        {
          id: "civil-engineering-101-l04-c1",
          title: "Concrete: Mix Design and Compressive Strength",
          content:
            "Concrete is the most widely used construction material on Earth. It is a composite of cement, water, fine aggregate (sand), and coarse aggregate (gravel). The water-to-cement ratio (w/c) is the single most important factor controlling strength and durability: a lower w/c ratio yields higher compressive strength but reduced workability. Typical structural concrete achieves compressive strengths of 20–40 MPa at 28 days. Concrete is strong in compression but weak in tension—roughly one-tenth its compressive strength—which is why steel reinforcement is embedded in tension zones to create reinforced concrete."
        },
        {
          id: "civil-engineering-101-l04-c2",
          title: "Steel: Yield Strength, Ductility, and Stress-Strain Behavior",
          content:
            "Structural steel is prized for its high strength-to-weight ratio, ductility, and predictable behavior. A typical stress-strain curve for mild steel shows a linear elastic region (slope = Young's modulus E ≈ 200 GPa), a yield plateau at around 250–350 MPa, strain hardening, and finally ultimate tensile strength before necking and fracture. Ductility—the ability to undergo significant plastic deformation before failure—provides warning before collapse and allows force redistribution in indeterminate structures. High-strength steels trade some ductility for yield strengths exceeding 690 MPa."
        },
        {
          id: "civil-engineering-101-l04-c3",
          title: "Timber, Composites, and Material Selection",
          content:
            "Timber is a renewable, lightweight structural material with favorable strength-to-weight properties along the grain. Its anisotropic nature means engineers must account for different strengths parallel and perpendicular to the grain. Engineered wood products like glulam and cross-laminated timber (CLT) overcome natural size limitations. Fiber-reinforced polymers (FRPs)—glass, carbon, or aramid fibers in a resin matrix—offer exceptional corrosion resistance and high tensile strength, making them valuable for rehabilitation and harsh environments. Material selection balances strength, stiffness, cost, durability, sustainability, and constructability."
        }
      ],
      flashcards: [
        { id: "civil-engineering-101-l04-f1", front: "Why is the water-to-cement ratio critical in concrete mix design?", back: "It is the primary factor controlling compressive strength and durability: a lower w/c ratio increases strength but decreases workability, requiring admixtures or better compaction." },
        { id: "civil-engineering-101-l04-f2", front: "What is the approximate Young's modulus of structural steel?", back: "Approximately 200 GPa (29,000 ksi), which defines the slope of the linear elastic region on the stress-strain curve." },
        { id: "civil-engineering-101-l04-f3", front: "Why is concrete reinforced with steel?", back: "Concrete is strong in compression (20–40 MPa) but very weak in tension (~2–4 MPa). Steel bars placed in tension zones resist tensile forces the concrete cannot carry." },
        { id: "civil-engineering-101-l04-f4", front: "What advantage do fiber-reinforced polymers (FRPs) offer?", back: "FRPs provide high tensile strength, low weight, and excellent corrosion resistance, making them ideal for structural rehabilitation and environments where steel would corrode." }
      ],
      learningAids: [
        { id: "civil-engineering-101-l04-a1", type: "image", title: "Stress-Strain Comparison", content: "Side-by-side stress-strain curves for mild steel (showing elastic region, yield plateau, strain hardening, ultimate strength) and concrete (showing parabolic compression curve, brittle tensile failure)." },
        { id: "civil-engineering-101-l04-a2", type: "animation", title: "Concrete Curing Timeline", content: "Animation showing concrete strength gain over 28 days, illustrating how hydration of cement paste produces calcium silicate hydrate crystals that bind aggregates together." }
      ]
    },

    // ── L05 ── Soil Mechanics and Foundations (interactive) ─────────────
    {
      id: "civil-engineering-101-l05",
      title: "Soil Mechanics and Foundations",
      type: "interactive",
      duration: 14,
      chunks: [
        {
          id: "civil-engineering-101-l05-c1",
          title: "Soil Classification and Index Properties",
          content:
            "Soil is a three-phase system of solid particles, water, and air. Engineers classify soils using grain-size distribution (sieve analysis for coarse soils, hydrometer for fines) and plasticity characteristics. The Unified Soil Classification System (USCS) groups soils by particle size—gravel (G), sand (S), silt (M), clay (C)—and further by grading (well-graded W or poorly-graded P) or plasticity (low L or high H). Atterberg limits define the moisture contents at which fine-grained soil transitions between solid, semi-solid, plastic, and liquid states; the liquid limit (LL), plastic limit (PL), and plasticity index (PI = LL − PL) are essential for predicting soil behavior."
        },
        {
          id: "civil-engineering-101-l05-c2",
          title: "Bearing Capacity and Settlement",
          content:
            "Bearing capacity is the maximum contact pressure a soil can sustain without shear failure. Terzaghi's bearing capacity equation for a strip footing is qult = cNc + γDfNq + 0.5γBNγ, where c is cohesion, γ is unit weight, Df is footing depth, B is footing width, and Nc, Nq, Nγ are bearing capacity factors dependent on the soil's friction angle φ. Settlement occurs in two stages: immediate (elastic) settlement upon load application, and consolidation settlement as excess pore water pressure dissipates over time in clay soils. Differential settlement—uneven settling between footings—is often more damaging than uniform settlement."
        },
        {
          id: "civil-engineering-101-l05-c3",
          title: "Foundation Types: Shallow and Deep",
          content:
            "Shallow foundations—spread footings, combined footings, mat (raft) foundations—transfer structural loads to competent soil near the surface, typically at depths less than the footing width. They are economical when adequate bearing capacity exists at shallow depth. When surface soils are weak or compressible, deep foundations carry loads to stronger strata below. Driven piles (steel H-piles, precast concrete) and drilled shafts (cast-in-place concrete) are the most common types. Pile capacity comes from end bearing on a hard stratum and/or skin friction along the shaft. Pile group effects and negative skin friction (downdrag) must also be evaluated."
        }
      ],
      flashcards: [
        { id: "civil-engineering-101-l05-f1", front: "What are the Atterberg limits?", back: "The liquid limit (LL), plastic limit (PL), and shrinkage limit—moisture contents at which fine-grained soil transitions between liquid, plastic, semi-solid, and solid states. The plasticity index PI = LL − PL." },
        { id: "civil-engineering-101-l05-f2", front: "State Terzaghi's bearing capacity equation for a strip footing.", back: "qult = cNc + γDfNq + 0.5γBNγ, where c = cohesion, γ = soil unit weight, Df = depth of footing, B = width, and Nc, Nq, Nγ are bearing capacity factors." },
        { id: "civil-engineering-101-l05-f3", front: "What two mechanisms provide load capacity in a pile?", back: "End bearing (resistance at the pile tip resting on a hard stratum) and skin friction (shear resistance along the pile shaft from surrounding soil)." },
        { id: "civil-engineering-101-l05-f4", front: "Why is differential settlement more problematic than uniform settlement?", back: "Differential settlement causes angular distortion between footings leading to cracking, structural distress, and potential failure, while uniform settlement generally causes only serviceability issues." }
      ],
      metadata: {
        prompts: [
          "Given soil test data (grain-size distribution and Atterberg limits), classify the soil using the USCS and predict its engineering behavior.",
          "Calculate the ultimate bearing capacity of a 2 m wide strip footing on a cohesive soil with c = 50 kPa and φ = 0°.",
          "Compare shallow vs. deep foundation options for a 10-story building on a site with 5 m of soft clay overlying dense sand."
        ]
      },
      interactiveActivities: [
        {
          id: "civil-engineering-101-l05-act1",
          type: "simulation",
          title: "Foundation Selection Simulator",
          instructions: ["You are given a building load, site borehole log, and water table depth. Evaluate bearing capacity for shallow and deep options, estimate settlement, and recommend the most appropriate foundation type with justification."],
          description: "Scenario: 8-story office building, column load 3000 kN, site has 3 m of fill over 6 m of soft clay (cu = 30 kPa) over dense gravel. Water table at 2 m. Evaluate spread footing vs. driven piles to gravel layer. Consider bearing capacity, settlement, and construction feasibility."
        }
      ],
      learningAids: [
        { id: "civil-engineering-101-l05-a1", type: "practice", title: "Soil Classification Exercise", content: "Given sieve analysis results and Atterberg limit data for three soil samples, classify each using the USCS chart and estimate permeability and compressibility behavior." }
      ]
    },

    // ── L06 ── Materials & Geotechnics Checkpoint (quiz) ───────────────
    {
      id: "civil-engineering-101-l06",
      title: "Materials & Geotechnics Checkpoint",
      type: "quiz",
      duration: 10,
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 2 }
      },
      questions: [
        {
          id: "civil-engineering-101-l06-q1",
          text: "Which single factor most influences the compressive strength of concrete?",
          skillId: "civil-engineering-101-skill-core",
          options: [
            { id: "a", text: "Aggregate color" },
            { id: "b", text: "Water-to-cement ratio" },
            { id: "c", text: "Formwork material" },
            { id: "d", text: "Ambient humidity during testing" }
          ],
          correctOptionId: "b",
          explanation: "The water-to-cement (w/c) ratio is the primary determinant of concrete strength. A lower w/c ratio means less capillary porosity in the hardened paste, yielding higher compressive strength."
        },
        {
          id: "civil-engineering-101-l06-q2",
          text: "On a stress-strain curve for mild steel, what does the yield plateau represent?",
          skillId: "civil-engineering-101-skill-core",
          options: [
            { id: "a", text: "Elastic deformation that fully recovers" },
            { id: "b", text: "Brittle fracture at ultimate strength" },
            { id: "c", text: "The region where strain increases at nearly constant stress as dislocations move" },
            { id: "d", text: "Thermal expansion under loading" }
          ],
          correctOptionId: "c",
          explanation: "The yield plateau is the flat region on the curve where the steel undergoes significant plastic strain at approximately constant stress, caused by the propagation of dislocation bands (Lüders bands) through the material."
        },
        {
          id: "civil-engineering-101-l06-q3",
          text: "The plasticity index (PI) of a soil is defined as:",
          skillId: "civil-engineering-101-skill-core",
          options: [
            { id: "a", text: "Liquid limit minus plastic limit (LL − PL)" },
            { id: "b", text: "Plastic limit minus shrinkage limit" },
            { id: "c", text: "Natural moisture content divided by liquid limit" },
            { id: "d", text: "Void ratio times specific gravity" }
          ],
          correctOptionId: "a",
          explanation: "PI = LL − PL. It represents the range of moisture content over which the soil behaves plastically. A higher PI indicates more clay-like, compressible behavior."
        },
        {
          id: "civil-engineering-101-l06-q4",
          text: "What are the two main sources of load-carrying capacity in a driven pile?",
          skillId: "civil-engineering-101-skill-core",
          options: [
            { id: "a", text: "Lateral earth pressure and seepage force" },
            { id: "b", text: "End bearing and skin friction" },
            { id: "c", text: "Consolidation settlement and elastic rebound" },
            { id: "d", text: "Capillary suction and buoyancy" }
          ],
          correctOptionId: "b",
          explanation: "Pile capacity derives from end bearing (resistance at the tip resting on a firm stratum) and skin friction (shear resistance along the pile shaft from contact with surrounding soil)."
        }
      ],
      learningAids: [
        { id: "civil-engineering-101-l06-a1", type: "mnemonic", title: "Materials Memory Aid", content: "Concrete = Compression champion. Steel = Ductile and strong in tension. Timber = Strong along the grain. FRP = Corrosion-free and light." }
      ]
    },

    // ── L07 ── Hydraulics and Water Resources (video) ──────────────────
    {
      id: "civil-engineering-101-l07",
      title: "Hydraulics and Water Resources",
      type: "video",
      duration: 12,
      chunks: [
        {
          id: "civil-engineering-101-l07-c1",
          title: "Fluid Statics and Pressure",
          content:
            "Fluid statics studies fluids at rest. Pressure in a static fluid increases linearly with depth: P = ρgh, where ρ is fluid density, g is gravitational acceleration, and h is depth below the free surface. This hydrostatic pressure acts equally in all directions at a point (Pascal's law) and creates forces on submerged surfaces that engineers must calculate for dam design, retaining wall analysis, and tank construction. The resultant hydrostatic force on a vertical rectangular surface equals γh̄A, acting at a center of pressure located below the centroid by an amount that depends on the surface's second moment of area."
        },
        {
          id: "civil-engineering-101-l07-c2",
          title: "Bernoulli's Equation and Pipe Flow",
          content:
            "For steady, incompressible, frictionless flow along a streamline, Bernoulli's equation states: P/ρg + v²/2g + z = constant, balancing pressure head, velocity head, and elevation head. This energy conservation principle explains why fluid speeds up through a constriction (venturi effect) and why airplane wings generate lift. In real pipe systems, friction and minor losses consume energy; the Darcy-Weisbach equation hf = fLv²/(2gD) quantifies friction head loss, where f is the friction factor from the Moody diagram, L is pipe length, and D is diameter. Engineers size pipes to deliver required flow rates within acceptable pressure drops."
        },
        {
          id: "civil-engineering-101-l07-c3",
          title: "Open Channel Flow and Stormwater Management",
          content:
            "Open channel flow—flow with a free surface exposed to the atmosphere—is governed by Manning's equation: Q = (1/n)AR^(2/3)S^(1/2), where n is the roughness coefficient, A is the cross-sectional area, R is the hydraulic radius (A/wetted perimeter), and S is the channel slope. Civil engineers design drainage channels, culverts, and stormwater detention basins using this equation. Dam types include gravity dams (resist overturning by mass), arch dams (transfer loads to abutments via arch action), buttress dams, and earthfill embankment dams. Spillway design ensures safe passage of flood flows without overtopping the dam crest."
        }
      ],
      flashcards: [
        { id: "civil-engineering-101-l07-f1", front: "State Bernoulli's equation and identify its three terms.", back: "P/ρg + v²/2g + z = constant. The three terms are pressure head (P/ρg), velocity head (v²/2g), and elevation head (z). It represents conservation of energy along a streamline for steady, incompressible, frictionless flow." },
        { id: "civil-engineering-101-l07-f2", front: "What is Manning's equation used for?", back: "Calculating flow rate Q in open channels: Q = (1/n)AR^(2/3)S^(1/2), where n = roughness, A = flow area, R = hydraulic radius, S = slope. It is the standard formula for designing drainage channels and culverts." },
        { id: "civil-engineering-101-l07-f3", front: "How does hydrostatic pressure vary with depth?", back: "Linearly: P = ρgh. Pressure increases proportionally with depth below the free surface, independent of container shape (Pascal's paradox)." },
        { id: "civil-engineering-101-l07-f4", front: "Name four types of dams.", back: "Gravity dams (rely on mass), arch dams (transfer load to abutments), buttress dams (use reinforcing walls), and earthfill embankment dams (compacted soil/rock)." }
      ],
      learningAids: [
        { id: "civil-engineering-101-l07-a1", type: "image", title: "Bernoulli's Energy Line", content: "Diagram of a pipe system showing total energy line (TEL) and hydraulic grade line (HGL), with pressure head, velocity head, and elevation head labeled at multiple cross-sections." },
        { id: "civil-engineering-101-l07-a2", type: "animation", title: "Dam Types Comparison", content: "Animated cross-sections of gravity, arch, buttress, and embankment dams showing how each type transfers hydrostatic forces to the foundation and abutments." }
      ]
    },

    // ── L08 ── Transportation and Infrastructure (interactive) ─────────
    {
      id: "civil-engineering-101-l08",
      title: "Transportation and Infrastructure",
      type: "interactive",
      duration: 14,
      chunks: [
        {
          id: "civil-engineering-101-l08-c1",
          title: "Highway Geometric Design",
          content:
            "Highway design integrates horizontal alignment (tangents and curves), vertical alignment (grades and vertical curves), and cross-section elements (lanes, shoulders, medians, drainage). Horizontal curves are designed with a specific radius to limit centripetal acceleration; the design speed determines minimum radius, superelevation (banking), and sight distance requirements. Vertical curves—crest and sag parabolas—ensure adequate stopping sight distance for drivers. The AASHTO Green Book (A Policy on Geometric Design of Highways and Streets) is the primary reference for design criteria including lane widths, clear zones, and interchange spacing."
        },
        {
          id: "civil-engineering-101-l08-c2",
          title: "Traffic Flow and Pavement Types",
          content:
            "Traffic flow theory relates three fundamental variables: flow (q, vehicles/hour), density (k, vehicles/km), and speed (v, km/h) through q = kv. As density increases from zero, flow increases until capacity is reached, then drops as congestion forms. Level of service (LOS) grades A through F describe operating conditions from free flow to severe congestion. Pavements are flexible (asphalt layers over granular base) or rigid (Portland cement concrete slabs, often with dowel bars at joints). Flexible pavements distribute loads through multiple layers; rigid pavements rely on slab stiffness to spread loads over a larger subgrade area."
        },
        {
          id: "civil-engineering-101-l08-c3",
          title: "Bridges and Design Codes",
          content:
            "Bridge engineering synthesizes every civil engineering discipline. Common bridge types include beam/girder (short to medium spans), arch (medium spans where terrain supports thrust), cable-stayed (medium to long spans with towers and stay cables), and suspension (the longest spans, with main cables draped between towers carrying the deck via hangers). Design codes standardize safety: ACI 318 governs reinforced concrete design, AISC 360 covers structural steel, and AASHTO LRFD Bridge Design Specifications prescribe load combinations, live load models (HL-93 truck and lane loads), and resistance factors for bridge elements."
        }
      ],
      flashcards: [
        { id: "civil-engineering-101-l08-f1", front: "What is the fundamental equation of traffic flow?", back: "q = kv, where q = flow (vehicles/hour), k = density (vehicles/km), and v = space mean speed (km/h). At capacity, increasing density causes speed and flow to drop." },
        { id: "civil-engineering-101-l08-f2", front: "What is the difference between flexible and rigid pavements?", back: "Flexible pavements (asphalt) distribute loads through multiple granular layers; rigid pavements (concrete slabs) use the slab's bending stiffness to spread loads over a wide subgrade area. Rigid pavements have joints; flexible pavements are continuous." },
        { id: "civil-engineering-101-l08-f3", front: "What does AASHTO LRFD stand for and what does it govern?", back: "American Association of State Highway and Transportation Officials, Load and Resistance Factor Design. It provides bridge design specifications including load combinations, live load models, and resistance factors." },
        { id: "civil-engineering-101-l08-f4", front: "Name four common bridge types ordered by typical span length.", back: "Beam/girder (short–medium), arch (medium), cable-stayed (medium–long), suspension (longest spans, e.g., > 1000 m)." }
      ],
      metadata: {
        prompts: [
          "For a highway curve with design speed 100 km/h, calculate the minimum curve radius given a maximum superelevation of 8% and side friction factor of 0.12.",
          "Sketch a typical flexible pavement cross-section labeling each layer from subgrade to wearing surface.",
          "Identify which design code (ACI, AISC, or AASHTO) applies to each of the following: a highway bridge pier, a steel office building frame, a concrete parking garage."
        ]
      },
      interactiveActivities: [
        {
          id: "civil-engineering-101-l08-act1",
          type: "matching",
          title: "Code & Standard Matcher",
          instructions: ["Match each design code to its primary scope. Drag each code to the correct description."],
          description: "Codes: ACI 318, AISC 360, AASHTO LRFD, IBC. Descriptions: ACI 318 → Structural concrete buildings; AISC 360 → Structural steel buildings; AASHTO LRFD → Highway bridges; IBC → General building code (references ACI & AISC)."
        }
      ],
      learningAids: [
        { id: "civil-engineering-101-l08-a1", type: "practice", title: "Pavement Layer Design", content: "Given traffic volume (ESALs), subgrade CBR, and climate data, select appropriate asphalt and base layer thicknesses using a simplified design chart approach." }
      ]
    },

    // ── L09 ── Hydraulics & Transportation Checkpoint (quiz) ───────────
    {
      id: "civil-engineering-101-l09",
      title: "Hydraulics & Transportation Checkpoint",
      type: "quiz",
      duration: 10,
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 2 }
      },
      questions: [
        {
          id: "civil-engineering-101-l09-q1",
          text: "In Bernoulli's equation, what does the term v²/2g represent?",
          skillId: "civil-engineering-101-skill-core",
          options: [
            { id: "a", text: "Pressure head" },
            { id: "b", text: "Velocity head" },
            { id: "c", text: "Elevation head" },
            { id: "d", text: "Friction loss" }
          ],
          correctOptionId: "b",
          explanation: "The term v²/2g is the velocity head, representing kinetic energy per unit weight of fluid. Together with pressure head (P/ρg) and elevation head (z), it constitutes the total energy along a streamline."
        },
        {
          id: "civil-engineering-101-l09-q2",
          text: "Manning's equation is primarily used to calculate flow in:",
          skillId: "civil-engineering-101-skill-core",
          options: [
            { id: "a", text: "Pressurized closed pipes" },
            { id: "b", text: "Open channels with a free surface" },
            { id: "c", text: "Compressible gas pipelines" },
            { id: "d", text: "Groundwater aquifers" }
          ],
          correctOptionId: "b",
          explanation: "Manning's equation Q = (1/n)AR^(2/3)S^(1/2) applies to open channel flow where the fluid has a free surface exposed to the atmosphere, such as rivers, drainage ditches, and culverts."
        },
        {
          id: "civil-engineering-101-l09-q3",
          text: "The fundamental traffic flow equation q = kv relates which three variables?",
          skillId: "civil-engineering-101-skill-core",
          options: [
            { id: "a", text: "Flow, density, and speed" },
            { id: "b", text: "Volume, capacity, and delay" },
            { id: "c", text: "Headway, spacing, and acceleration" },
            { id: "d", text: "Lane width, shoulder width, and grade" }
          ],
          correctOptionId: "a",
          explanation: "q (flow in vehicles/hour) = k (density in vehicles/km) × v (space mean speed in km/h). This macroscopic relationship is the foundation of traffic flow theory."
        },
        {
          id: "civil-engineering-101-l09-q4",
          text: "Which bridge type is used for the longest spans, such as spans exceeding 1000 meters?",
          skillId: "civil-engineering-101-skill-core",
          options: [
            { id: "a", text: "Beam/girder bridge" },
            { id: "b", text: "Arch bridge" },
            { id: "c", text: "Cable-stayed bridge" },
            { id: "d", text: "Suspension bridge" }
          ],
          correctOptionId: "d",
          explanation: "Suspension bridges achieve the longest spans—the Akashi Kaikyo Bridge spans 1991 m. Main cables draped between towers carry the deck via vertical hangers, efficiently transferring loads in tension to the anchorages."
        }
      ],
      learningAids: [
        { id: "civil-engineering-101-l09-a1", type: "mnemonic", title: "Bernoulli's Three Heads", content: "PVE: Pressure head (P/ρg) + Velocity head (v²/2g) + Elevation head (z) = constant along a streamline." }
      ]
    },

    // ── L10 ── Mastery Quiz: Civil Engineering (quiz) ──────────────────
    {
      id: "civil-engineering-101-l10",
      title: "Mastery Quiz: Civil Engineering",
      type: "quiz",
      duration: 12,
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 2 }
      },
      questions: [
        {
          id: "civil-engineering-101-l10-q1",
          text: "A simply supported beam of span L carries a uniformly distributed load w (kN/m). The maximum bending moment occurs at midspan and equals:",
          skillId: "civil-engineering-101-skill-core",
          options: [
            { id: "a", text: "wL/8" },
            { id: "b", text: "wL²/8" },
            { id: "c", text: "wL²/2" },
            { id: "d", text: "wL/4" }
          ],
          correctOptionId: "b",
          explanation: "For a simply supported beam with UDL, each reaction is wL/2. The maximum moment at midspan is Mmax = wL²/8, derived by taking moments about the midpoint using the reaction and the distributed load on half the span."
        },
        {
          id: "civil-engineering-101-l10-q2",
          text: "Reducing the water-to-cement ratio in a concrete mix primarily results in:",
          skillId: "civil-engineering-101-skill-core",
          options: [
            { id: "a", text: "Lower compressive strength and higher workability" },
            { id: "b", text: "Higher compressive strength and lower workability" },
            { id: "c", text: "No change in strength but faster setting" },
            { id: "d", text: "Increased porosity and permeability" }
          ],
          correctOptionId: "b",
          explanation: "A lower w/c ratio reduces capillary porosity in the hardened cement paste, increasing compressive strength. However, less water means a stiffer, less workable mix that is harder to place and compact without admixtures."
        },
        {
          id: "civil-engineering-101-l10-q3",
          text: "A soil with a liquid limit of 45% and a plastic limit of 22% has a plasticity index of:",
          skillId: "civil-engineering-101-skill-core",
          options: [
            { id: "a", text: "67%" },
            { id: "b", text: "23%" },
            { id: "c", text: "2.05" },
            { id: "d", text: "45%" }
          ],
          correctOptionId: "b",
          explanation: "PI = LL − PL = 45% − 22% = 23%. This indicates a soil with moderate plasticity, likely an intermediate clay (CI) on the plasticity chart, with moderate compressibility and swelling potential."
        },
        {
          id: "civil-engineering-101-l10-q4",
          text: "Which design code specifically governs the design of highway bridges in the United States?",
          skillId: "civil-engineering-101-skill-core",
          options: [
            { id: "a", text: "ACI 318" },
            { id: "b", text: "AISC 360" },
            { id: "c", text: "AASHTO LRFD Bridge Design Specifications" },
            { id: "d", text: "International Building Code (IBC)" }
          ],
          correctOptionId: "c",
          explanation: "AASHTO LRFD Bridge Design Specifications provide load combinations, live load models (HL-93), resistance factors, and detailed requirements for highway bridge design. ACI 318 covers concrete buildings; AISC 360 covers steel buildings; IBC is a general building code."
        }
      ],
      learningAids: [
        { id: "civil-engineering-101-l10-a1", type: "mnemonic", title: "Civil Engineering Domains", content: "Five pillars of civil engineering: Structures, Materials, Geotechnics, Hydraulics, Transportation. Remember SMGHT—Strong Materials Go Hydro-Transport." }
      ]
    }
  ],
};
