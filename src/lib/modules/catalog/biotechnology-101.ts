import type { LearningModule } from "@/lib/modules/types";

export const biotechnology_101_Module: LearningModule = {
  "id": "biotechnology-101",
  "title": "Biotechnology Foundations",
  "description": "Master the science of biotechnology — from DNA structure and recombinant techniques to CRISPR genome editing, biopharmaceuticals, agricultural biotech, and the ethical frameworks guiding modern innovation.",
  "subject": "Biotechnology",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "stem",
    "life-sciences"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Explain the central dogma of molecular biology and its relevance to biotechnology",
    "Describe recombinant DNA technology including restriction enzymes, plasmid vectors, and transformation",
    "Outline the principles of PCR, gel electrophoresis, and DNA sequencing methods",
    "Analyze the CRISPR-Cas9 mechanism and compare NHEJ and HDR repair pathways",
    "Evaluate the development and function of biopharmaceuticals, mRNA vaccines, and gene therapy",
    "Assess the benefits and risks of agricultural biotechnology, biofuels, and industrial fermentation",
    "Discuss bioethical considerations and regulatory frameworks governing GMOs and genome editing"
  ],
  "lessons": [
    {
      "id": "biotechnology-101-l01",
      "title": "What is Biotechnology? — DNA, Genes & the Central Dogma",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Define biotechnology and trace its historical development from fermentation to genomics",
        "Describe the structure of DNA including nucleotides, base pairing, and the double helix",
        "Explain the central dogma of molecular biology: DNA → RNA → Protein"
      ],
      "chunks": [
        {
          "id": "biotechnology-101-l01-c1",
          "title": "Defining Biotechnology",
          "content": "Biotechnology is the use of living organisms or biological systems to create products and technologies that improve human life. This field has a rich history, dating back thousands of years to ancient civilizations that used yeast fermentation to make bread and beer. [Visual: A timeline showing ancient fermentation (bread/beer), selective breeding, antibiotics (penicillin), and modern genetic engineering.] The modern era of biotechnology began in the 1970s with the ability to cut, splice, and transfer DNA between organisms. Today, biotechnology is vital in many areas. In medicine, it's used to develop biopharmaceuticals and gene therapies. In agriculture, it helps create genetically modified (GM) crops with improved traits. In industry, it's used to produce biofuels and enzymes for manufacturing. To understand these applications, we must first explore the molecular foundation of all life: DNA."
        },
        {
          "id": "biotechnology-101-l01-c2",
          "title": "DNA Structure and Genes",
          "content": "Deoxyribonucleic acid, or DNA, is the blueprint for all living organisms. Imagine a twisted ladder, known as a double helix. The sides are made of sugar and phosphate groups, forming the backbone. The rungs are pairs of nitrogenous bases: adenine (A), thymine (T), guanine (G), and cytosine (C). [Visual: A labeled diagram of the DNA double helix, highlighting the sugar-phosphate backbone and showing A pairing with T (2 hydrogen bonds) and G pairing with C (3 hydrogen bonds).] A always pairs with T, and G always pairs with C. A gene is a specific section of DNA that contains the instructions for building a functional product, usually a protein. In humans, the entire set of DNA, called the genome, contains about 20,000 genes organized into 23 pairs of chromosomes. Changes in the DNA sequence, called mutations, can lead to different traits and are a driving force of evolution, but they can also cause genetic diseases. Understanding DNA's structure is the first step to harnessing its power."
        },
        {
          "id": "biotechnology-101-l01-c3",
          "title": "The Central Dogma",
          "content": "The central dogma of molecular biology, proposed by Francis Crick, describes how genetic information flows within a cell. It follows a simple path: DNA → RNA → Protein. [Visual: An animation showing the entire process. Start with DNA inside a cell nucleus. Show the DNA unwinding for transcription, an RNA polymerase creating an mRNA strand, and the mRNA leaving the nucleus. In the cytoplasm, show a ribosome binding to the mRNA and translating it into a protein with the help of tRNA molecules.] This process has two main stages. First is transcription, where a segment of DNA is copied into messenger RNA (mRNA) by the enzyme RNA polymerase. In RNA, the base uracil (U) replaces thymine (T). The second stage is translation. The mRNA travels to a ribosome in the cytoplasm, which reads the mRNA code in three-letter 'words' called codons. Transfer RNA (tRNA) molecules bring the correct amino acids, which the ribosome links together to build a protein. Biotechnology allows us to manipulate every step of this process, from editing the DNA code to controlling protein production."
        }
      ],
      "flashcards": [
        {
          "id": "biotechnology-101-l01-f1",
          "front": "Biotechnology",
          "back": "The use of living organisms, cells, or biological systems to develop products and technologies — spans medicine, agriculture, industry, and environmental science."
        },
        {
          "id": "biotechnology-101-l01-f2",
          "front": "DNA base-pairing rules",
          "back": "Adenine pairs with Thymine (A–T, two hydrogen bonds); Guanine pairs with Cytosine (G–C, three hydrogen bonds)."
        },
        {
          "id": "biotechnology-101-l01-f3",
          "front": "Central dogma of molecular biology",
          "back": "DNA → (transcription) → mRNA → (translation) → Protein — the primary flow of genetic information in a cell."
        },
        {
          "id": "biotechnology-101-l01-f4",
          "front": "Gene",
          "back": "A specific segment of DNA that provides the instructions for building a functional product, such as a protein or RNA molecule."
        }
      ],
      "learningAids": [
        {
          "id": "biotechnology-101-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "biotechnology-101-l02",
      "title": "Recombinant DNA Technology & Molecular Cloning",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Explain how restriction enzymes recognize and cut DNA at specific palindromic sequences",
        "Describe the role of plasmid vectors, DNA ligase, and selectable markers in molecular cloning",
        "Outline the transformation process and methods for screening recombinant clones"
      ],
      "chunks": [
        {
          "id": "biotechnology-101-l02-c1",
          "title": "Restriction Enzymes: Molecular Scissors",
          "content": "Restriction enzymes are proteins that bacteria produce to defend against viruses. They act like 'molecular scissors,' cutting DNA at specific recognition sites. Each enzyme recognizes a unique DNA sequence, typically a 4- to 8-base-pair palindrome (reading the same forwards and backwards on opposite strands). [Visual: Animation showing the enzyme EcoRI scanning a DNA strand, recognizing the sequence 5'-GAATTC-3', and cutting between the G and A on both strands. Show the resulting 'sticky ends'—single-stranded overhangs.] For example, EcoRI recognizes 5′-GAATTC-3′ and cuts to create 'sticky ends.' These overhangs can easily base-pair with other DNA fragments cut by the same enzyme. Other enzymes, like SmaI, cut straight across to create 'blunt ends.' Hundreds of different restriction enzymes have been discovered, giving scientists a versatile toolkit for precisely cutting and pasting DNA."
        },
        {
          "id": "biotechnology-101-l02-c2",
          "title": "Plasmid Vectors and DNA Ligase",
          "content": "In molecular cloning, a gene of interest is inserted into a carrier DNA molecule called a vector. The most common vectors are plasmids: small, circular DNA molecules found in bacteria. [Visual: A labeled diagram of a cloning plasmid, showing three key features: 1) Origin of Replication (ori), 2) Selectable Marker (e.g., ampR gene), 3) Multiple Cloning Site (MCS) with several unique restriction sites.] A useful plasmid has three essential features: an origin of replication (ori) to allow it to be copied within the host cell, a selectable marker (like an antibiotic resistance gene) to identify cells that have taken it up, and a multiple cloning site (MCS) with many unique restriction sites for inserting foreign DNA. To create a recombinant plasmid, both the plasmid and the target gene are cut with the same restriction enzyme. Then, an enzyme called DNA ligase acts like molecular glue, forming permanent phosphodiester bonds to seal the gene into the plasmid."
        },
        {
          "id": "biotechnology-101-l02-c3",
          "title": "Transformation and Clone Screening",
          "content": "Transformation is the process of introducing a recombinant plasmid into a host cell, usually the bacterium E. coli. To make the bacteria receptive to DNA, they are made 'competent' through treatment with calcium chloride or by using a brief electric shock, a method called electroporation. After transformation, scientists must identify the bacteria that successfully took up the correct plasmid. This is done through screening. First, the bacteria are grown on a selective medium containing an antibiotic. Only bacteria with the plasmid (which carries the resistance gene) will survive. [Visual: A side-by-side comparison of two petri dishes. Left dish: Non-recombinant plasmids result in all blue colonies on X-gal media. Right dish: Recombinant plasmids (with a gene inserted into lacZ) result in a mix of blue and white colonies. Label the white colonies as 'successful clones'.] A common technique is blue-white screening. If the target gene is inserted into the lacZ gene on the plasmid, it disrupts it. On a special medium, colonies with disrupted lacZ appear white, while those with an intact lacZ appear blue. The white colonies contain the recombinant DNA."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biotechnology-101-l02-a1",
          "title": "Match the Cloning Component",
          "type": "matching_pairs",
          "pairs": [
            {
              "left": "EcoRI",
              "right": "Restriction enzyme that cuts at GAATTC"
            },
            {
              "left": "DNA ligase",
              "right": "Enzyme that joins DNA fragments by forming phosphodiester bonds"
            },
            {
              "left": "Plasmid",
              "right": "Circular DNA vector with ori, MCS, and selectable marker"
            },
            {
              "left": "Ampicillin resistance",
              "right": "Selectable marker gene on the cloning vector"
            },
            {
              "left": "Blue-white screening",
              "right": "Method using lacZ/X-gal to identify recombinant clones"
            },
            {
              "left": "Electroporation",
              "right": "Using an electric pulse to make cells competent for transformation"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "biotechnology-101-l02-f1",
          "front": "Restriction enzyme",
          "back": "A bacterial protein that cuts DNA at specific palindromic sequences, often producing 'sticky ends' or 'blunt ends' used in molecular cloning."
        },
        {
          "id": "biotechnology-101-l02-f2",
          "front": "Sticky ends vs. blunt ends",
          "back": "Sticky ends: single-stranded overhangs that base-pair with complementary fragments (more efficient ligation). Blunt ends: flush cuts with no overhang."
        },
        {
          "id": "biotechnology-101-l02-f3",
          "front": "Plasmid vector components",
          "back": "Origin of replication (ori), selectable marker (e.g., antibiotic resistance), and multiple cloning site (MCS) with unique restriction sites."
        },
        {
          "id": "biotechnology-101-l02-f4",
          "front": "Transformation",
          "back": "The process of introducing foreign DNA into a host cell, such as E. coli made competent via CaCl₂ treatment or electroporation."
        }
      ],
      "learningAids": [
        {
          "id": "biotechnology-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "biotechnology-101-l03",
      "title": "Foundations of Biotechnology Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate understanding of DNA structure, the central dogma, restriction enzymes, and molecular cloning"
      ],
      "questions": [
        {
          "id": "biotechnology-101-l03-q1",
          "text": "The central dogma of molecular biology describes the flow of information as:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Protein → RNA → DNA"
            },
            {
              "id": "b",
              "text": "DNA → RNA → Protein"
            },
            {
              "id": "c",
              "text": "RNA → DNA → Protein"
            },
            {
              "id": "d",
              "text": "DNA → Protein → RNA"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The central dogma states that DNA is transcribed into mRNA, which is then translated into protein — the standard unidirectional flow of genetic information."
        },
        {
          "id": "biotechnology-101-l03-q2",
          "text": "Restriction enzymes are valuable in molecular cloning because they:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Replicate DNA during the cell cycle"
            },
            {
              "id": "b",
              "text": "Cut DNA at specific, predictable sequences"
            },
            {
              "id": "c",
              "text": "Translate mRNA into protein"
            },
            {
              "id": "d",
              "text": "Synthesize new DNA strands from scratch"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Restriction enzymes recognize specific palindromic sequences and cut both DNA strands, enabling precise insertion of foreign DNA into vectors."
        },
        {
          "id": "biotechnology-101-l03-q3",
          "text": "During blue-white screening, white colonies indicate:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Bacteria that did not take up any plasmid"
            },
            {
              "id": "b",
              "text": "Bacteria with non-recombinant plasmids (intact lacZ)"
            },
            {
              "id": "c",
              "text": "Bacteria with recombinant plasmids (disrupted lacZ)"
            },
            {
              "id": "d",
              "text": "Dead bacteria that failed to grow"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Inserting foreign DNA into the lacZ gene disrupts β-galactosidase production, so recombinant colonies appear white instead of blue on X-gal plates."
        },
        {
          "id": "biotechnology-101-l03-q4",
          "text": "A plasmid cloning vector must contain all of the following EXCEPT:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Origin of replication (ori)"
            },
            {
              "id": "b",
              "text": "Selectable marker (e.g., antibiotic resistance)"
            },
            {
              "id": "c",
              "text": "Multiple cloning site (MCS)"
            },
            {
              "id": "d",
              "text": "Eukaryotic centromere"
            }
          ],
          "correctOptionId": "d",
          "explanation": "Bacterial plasmids need an ori, selectable marker, and MCS — but not a eukaryotic centromere, which is a chromosome structure found in eukaryotic cells."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 2
        }
      },
      "learningAids": [
        {
          "id": "biotechnology-101-l03-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "biotechnology-101-l04",
      "title": "PCR, Gel Electrophoresis & DNA Sequencing",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Describe the three steps of PCR and the role of Taq polymerase",
        "Explain how agarose gel electrophoresis separates DNA fragments by size",
        "Compare Sanger sequencing with next-generation sequencing (NGS) technologies"
      ],
      "chunks": [
        {
          "id": "biotechnology-101-l04-c1",
          "title": "Polymerase Chain Reaction (PCR)",
          "content": "The Polymerase Chain Reaction (PCR) is a revolutionary technique for making millions of copies of a specific DNA segment from a small sample. The reaction requires a DNA template, short DNA primers that flank the target sequence, DNA building blocks (dNTPs), and a special heat-stable enzyme called Taq polymerase. [Visual: An animation of the three PCR steps inside a thermal cycler. 1) Show a DNA double helix separating at 95°C. 2) Show primers binding to the single strands at 55-65°C. 3) Show Taq polymerase extending from the primers to synthesize new strands at 72°C. Repeat the cycle, showing exponential amplification.] The process involves repeated cycles of three steps: 1) Denaturation (~95°C): The DNA double helix is heated to separate it into two single strands. 2) Annealing (~55–65°C): The temperature is lowered to allow the primers to bind to their complementary sequences. 3) Extension (~72°C): Taq polymerase synthesizes new DNA strands, starting from the primers. By repeating this cycle 30 times, a single DNA molecule can be amplified into over a billion copies (2³⁰). PCR is a cornerstone of medical diagnostics, forensics, and genetic research."
        },
        {
          "id": "biotechnology-101-l04-c2",
          "title": "Gel Electrophoresis",
          "content": "Agarose gel electrophoresis is a technique used to separate DNA fragments by size. An agarose gel, a porous matrix similar to gelatin, is submerged in a buffer solution. DNA samples are loaded into wells at one end of the gel. [Visual: A diagram of a gel electrophoresis setup. Show the gel box, buffer, power supply, and wells. An animation shows negatively charged DNA loaded into the wells and migrating toward the positive electrode (anode). Smaller fragments move faster and farther down the gel.] Since DNA's phosphate backbone is negatively charged, applying an electric current causes the DNA to move toward the positive electrode. Smaller fragments navigate the gel's pores more easily and travel farther than larger fragments. A 'DNA ladder' with fragments of known sizes is run alongside the samples for comparison. After separation, the gel is stained with a dye (like SYBR Safe) and viewed under UV light, revealing distinct bands. This allows scientists to verify the size of PCR products or analyze the results of a restriction digest."
        },
        {
          "id": "biotechnology-101-l04-c3",
          "title": "DNA Sequencing: Sanger and NGS",
          "content": "DNA sequencing determines the precise order of nucleotides (A, T, C, G) in a DNA molecule. The classic method, Sanger sequencing, was developed by Frederick Sanger in 1977. It uses special chain-terminating nucleotides called dideoxynucleotides (ddNTPs) that lack the 3' hydroxyl group needed for chain extension. When a ddNTP is incorporated, DNA synthesis stops. By running the reaction and separating the resulting fragments by size, the sequence can be read one base at a time. [Visual: A simplified diagram comparing Sanger and NGS. Sanger: Shows one long read from a single DNA template. NGS: Shows millions of short reads being generated simultaneously from millions of DNA fragments on a flow cell.] In contrast, next-generation sequencing (NGS) technologies use 'massively parallel sequencing' to read millions of DNA fragments simultaneously. This high-throughput approach has dramatically reduced the cost and time of sequencing, making it possible to sequence an entire human genome in hours for under $1,000. While Sanger sequencing is still used for validating specific sequences, NGS has revolutionized genomics research."
        }
      ],
      "flashcards": [
        {
          "id": "biotechnology-101-l04-f1",
          "front": "Three steps of PCR",
          "back": "1) Denaturation (~95 °C) — strands separate. 2) Annealing (~55–65 °C) — primers bind. 3) Extension (~72 °C) — Taq polymerase synthesizes new DNA."
        },
        {
          "id": "biotechnology-101-l04-f2",
          "front": "Taq polymerase",
          "back": "A heat-stable DNA polymerase from Thermus aquaticus that withstands repeated high-temperature denaturation steps, enabling automated PCR cycling."
        },
        {
          "id": "biotechnology-101-l04-f3",
          "front": "Gel electrophoresis principle",
          "back": "Negatively charged DNA migrates toward the positive electrode (anode) through an agarose matrix. Smaller fragments travel faster and farther, resulting in separation by size."
        },
        {
          "id": "biotechnology-101-l04-f4",
          "front": "Sanger vs. NGS sequencing",
          "back": "Sanger: Chain-termination method, reads ~700–1,000 bp per reaction, used for targeted sequencing. NGS: Massively parallel, millions of short reads, enables whole-genome sequencing."
        }
      ],
      "learningAids": [
        {
          "id": "biotechnology-101-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "biotechnology-101-l05",
      "title": "CRISPR-Cas9 & Genome Editing",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Describe the natural CRISPR adaptive immune system in bacteria and its adaptation as a genome-editing tool",
        "Explain the roles of guide RNA, PAM site, and Cas9 in creating targeted double-strand breaks",
        "Compare the NHEJ and HDR DNA repair pathways and their applications in gene editing"
      ],
      "chunks": [
        {
          "id": "biotechnology-101-l05-c1",
          "title": "CRISPR in Nature and as a Tool",
          "content": "CRISPR (Clustered Regularly Interspaced Short Palindromic Repeats) is a natural adaptive immune system found in bacteria and archaea. When a virus (bacteriophage) infects a bacterium, the bacterium captures a small piece of the viral DNA and stores it in its CRISPR array as a 'spacer.' [Visual: A two-panel diagram. Left panel: 'Nature' - A bacteriophage injects DNA into a bacterium; the bacterium incorporates a piece into its CRISPR locus. Right panel: 'Tool' - A scientist designs a guide RNA, which combines with Cas9 protein to target a specific gene in a human cell.] If the same virus attacks again, the bacterium transcribes the spacer into a CRISPR RNA (crRNA), which guides a Cas (CRISPR-associated) protein to the viral DNA. The Cas protein then cuts and destroys the viral DNA. In 2012, scientists Jennifer Doudna and Emmanuelle Charpentier repurposed this system. They engineered a single guide RNA (sgRNA) that could be programmed to direct the Cas9 protein to cut any desired DNA sequence, turning a bacterial defense mechanism into a powerful genome-editing tool."
        },
        {
          "id": "biotechnology-101-l05-c2",
          "title": "Guide RNA, PAM Site, and Double-Strand Breaks",
          "content": "The engineered CRISPR-Cas9 system has two key components: the Cas9 protein, which acts as the 'scissors,' and the guide RNA (gRNA), which acts as the 'GPS.' The gRNA contains a ~20 nucleotide sequence that is complementary to the target DNA. For Cas9 to cut, it must first recognize a short, specific sequence on the target DNA called the protospacer adjacent motif (PAM). For the common SpCas9 protein, the PAM sequence is 5′-NGG-3′. [Visual: An animation of the Cas9 protein scanning DNA. It locks onto a PAM site (highlighted). The gRNA then unwinds the DNA and binds to its target sequence. Once matched, the Cas9 protein's two nuclease domains (RuvC and HNH) are shown cutting each DNA strand, creating a double-strand break.] Once Cas9 binds the PAM, it unwinds the adjacent DNA and checks for a match with its gRNA. If the sequences match, Cas9's two nuclease domains each cut one strand of the DNA, creating a precise double-strand break (DSB). This break is the starting point for all genome editing."
        },
        {
          "id": "biotechnology-101-l05-c3",
          "title": "DNA Repair: NHEJ vs. HDR",
          "content": "After Cas9 creates a double-strand break, the cell must repair the damage using its natural repair machinery. There are two main pathways. [Visual: A side-by-side animation. Left side (NHEJ): A DNA strand is broken. The ends are trimmed and stuck back together, resulting in a small insertion or deletion (indel) that scrambles the gene's code. Right side (HDR): A DNA strand is broken. A supplied DNA template with the desired sequence aligns with the broken ends and is used to precisely repair the break, inserting the new sequence.] The first pathway is Non-Homologous End Joining (NHEJ). This is a fast but error-prone process that simply sticks the broken ends back together. It often results in small insertions or deletions (indels), which can disrupt the gene's function, effectively creating a 'gene knockout.' The second, more precise pathway is Homology-Directed Repair (HDR). If a DNA template with sequences matching the area around the break is supplied, the cell can use it to repair the break perfectly. This allows scientists to make precise changes, such as correcting a mutation or inserting a new gene. HDR is less efficient than NHEJ and is only active in certain phases of the cell cycle."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biotechnology-101-l05-a1",
          "title": "Sort CRISPR Concepts",
          "type": "sorting_buckets",
          "buckets": [
            "NHEJ Repair",
            "HDR Repair"
          ],
          "items": [
            {
              "text": "Error-prone — introduces insertions or deletions",
              "bucket": "NHEJ Repair"
            },
            {
              "text": "Requires a homologous DNA template",
              "bucket": "HDR Repair"
            },
            {
              "text": "Active throughout the cell cycle",
              "bucket": "NHEJ Repair"
            },
            {
              "text": "Restricted to S and G2 phases",
              "bucket": "HDR Repair"
            },
            {
              "text": "Used for gene knockouts",
              "bucket": "NHEJ Repair"
            },
            {
              "text": "Enables precise point mutations and gene insertions",
              "bucket": "HDR Repair"
            },
            {
              "text": "Directly ligates broken DNA ends",
              "bucket": "NHEJ Repair"
            },
            {
              "text": "Uses single-stranded oligonucleotide donors",
              "bucket": "HDR Repair"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "biotechnology-101-l05-f1",
          "front": "CRISPR-Cas9",
          "back": "A genome-editing system using a guide RNA to direct the Cas9 nuclease to a specific DNA sequence, creating a targeted double-strand break."
        },
        {
          "id": "biotechnology-101-l05-f2",
          "front": "PAM (protospacer adjacent motif)",
          "back": "A short DNA sequence (e.g., 5′-NGG-3′ for SpCas9) required adjacent to the target site for Cas9 to recognize and cut the DNA."
        },
        {
          "id": "biotechnology-101-l05-f3",
          "front": "NHEJ (non-homologous end joining)",
          "back": "An error-prone DNA repair pathway that directly ligates broken ends. It often introduces insertions or deletions (indels), making it useful for gene knockouts."
        },
        {
          "id": "biotechnology-101-l05-f4",
          "front": "HDR (homology-directed repair)",
          "back": "A precise DNA repair pathway that uses a homologous template to fix a break. It enables exact gene corrections, insertions, or modifications."
        }
      ],
      "learningAids": [
        {
          "id": "biotechnology-101-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "biotechnology-101-l06",
      "title": "Molecular Methods & Genome Editing Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate understanding of PCR, sequencing, and CRISPR-Cas9 genome editing"
      ],
      "questions": [
        {
          "id": "biotechnology-101-l06-q1",
          "text": "During PCR, Taq polymerase is essential because it:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Cuts DNA at restriction sites"
            },
            {
              "id": "b",
              "text": "Survives the high-temperature denaturation step (~95 °C)"
            },
            {
              "id": "c",
              "text": "Ligates DNA fragments together"
            },
            {
              "id": "d",
              "text": "Unwinds the double helix using helicase activity"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Taq polymerase is thermostable — isolated from Thermus aquaticus — allowing it to retain activity through repeated 95 °C denaturation cycles."
        },
        {
          "id": "biotechnology-101-l06-q2",
          "text": "Sanger sequencing relies on chain termination caused by:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Restriction enzymes cutting the growing strand"
            },
            {
              "id": "b",
              "text": "dNTPs forming complete strands"
            },
            {
              "id": "c",
              "text": "Dideoxynucleotides (ddNTPs) lacking the 3′ hydroxyl group"
            },
            {
              "id": "d",
              "text": "RNA primers that cannot extend"
            }
          ],
          "correctOptionId": "c",
          "explanation": "ddNTPs lack the 3′-OH required for forming the next phosphodiester bond, so chain elongation stops wherever a ddNTP is incorporated."
        },
        {
          "id": "biotechnology-101-l06-q3",
          "text": "In the CRISPR-Cas9 system, the PAM sequence is necessary for:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Synthesizing the guide RNA"
            },
            {
              "id": "b",
              "text": "Cas9 recognition and binding to the target DNA"
            },
            {
              "id": "c",
              "text": "Replicating the plasmid vector"
            },
            {
              "id": "d",
              "text": "Ligating the double-strand break"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Cas9 first recognizes the PAM (5′-NGG-3′) adjacent to the target site before unwinding the DNA and checking for gRNA complementarity."
        },
        {
          "id": "biotechnology-101-l06-q4",
          "text": "A researcher wants to precisely correct a disease-causing point mutation using CRISPR. Which repair pathway should they favor?",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "NHEJ — because it is fast and efficient"
            },
            {
              "id": "b",
              "text": "HDR — because it uses a template for precise editing"
            },
            {
              "id": "c",
              "text": "Mismatch repair — because it fixes single bases"
            },
            {
              "id": "d",
              "text": "Base excision repair — because it removes damaged bases"
            }
          ],
          "correctOptionId": "b",
          "explanation": "HDR uses a supplied homologous donor template to introduce precise changes at the break site, making it ideal for correcting specific mutations."
        },
        {
          "id": "biotechnology-101-l06-q5",
          "text": "After 30 cycles of PCR, approximately how many copies of the target sequence are produced from one template molecule?",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "30"
            },
            {
              "id": "b",
              "text": "1,000"
            },
            {
              "id": "c",
              "text": "One million"
            },
            {
              "id": "d",
              "text": "One billion (2³⁰ ≈ 10⁹)"
            }
          ],
          "correctOptionId": "d",
          "explanation": "PCR doubles the target DNA each cycle. After 30 cycles: 2³⁰ ≈ 1.07 × 10⁹ (approximately one billion copies)."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 5,
        "bloomProfile": {
          "remember": 2,
          "understand": 2,
          "apply": 1
        }
      }
    },
    {
      "id": "biotechnology-101-l07",
      "title": "Biopharmaceuticals, Vaccines & Gene Therapy",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Explain how monoclonal antibodies are produced and used as targeted therapeutics",
        "Compare traditional vaccine platforms with mRNA vaccine technology",
        "Describe the principles of gene therapy including viral vector delivery using AAV"
      ],
      "chunks": [
        {
          "id": "biotechnology-101-l07-c1",
          "title": "Monoclonal Antibodies",
          "content": "Monoclonal antibodies (mAbs) are lab-engineered proteins that bind to a single, specific target (antigen) with high precision. They are produced using hybridoma technology, where an antibody-producing B cell from an immunized mouse is fused with an immortal myeloma (cancer) cell. The resulting hybridoma cell can be cultured indefinitely to produce a large supply of identical antibodies. [Visual: An animation showing a monoclonal antibody (like trastuzumab) binding specifically to HER2 receptors on a cancer cell, flagging it for destruction by the immune system.] To reduce immune reactions in patients, mouse mAbs are often 'humanized' by replacing parts of the mouse protein with human sequences. Modern methods like phage display or using transgenic mice can produce fully human antibodies. mAbs are used to treat cancers, autoimmune diseases, and infections. They represent the largest class of biopharmaceuticals, with a market value over $200 billion."
        },
        {
          "id": "biotechnology-101-l07-c2",
          "title": "mRNA Vaccines",
          "content": "Traditional vaccines use weakened or inactivated viruses to train the immune system. In contrast, mRNA vaccines provide a genetic instruction manual. They use a synthetic messenger RNA (mRNA) sequence that tells the body's own cells how to make a harmless piece of a pathogen, like the spike protein of the SARS-CoV-2 virus. [Visual: An animation showing a lipid nanoparticle fusing with a human cell membrane, releasing mRNA into the cytoplasm. A ribosome translates the mRNA into spike proteins, which are displayed on the cell surface, triggering an immune response from T cells and B cells.] The fragile mRNA is packaged inside a protective lipid nanoparticle for delivery into muscle cells. Once inside, ribosomes translate the mRNA into protein. The immune system then recognizes this foreign protein and generates a robust response, creating antibodies and memory cells for future protection. The mRNA never enters the cell nucleus and cannot alter a person's DNA. This technology allows for extremely rapid vaccine design and manufacturing."
        },
        {
          "id": "biotechnology-101-l07-c3",
          "title": "Gene Therapy and AAV Vectors",
          "content": "Gene therapy aims to treat or cure genetic diseases by replacing a faulty gene, silencing a harmful gene, or editing the genome directly. A common delivery vehicle is the adeno-associated virus (AAV), a small, non-pathogenic virus that is excellent at entering human cells. AAVs are preferred because they cause a minimal immune response and rarely integrate into the host genome, reducing the risk of cancer. [Visual: A diagram comparing ex vivo and in vivo gene therapy. Ex vivo: Show cells being removed from a patient, modified in a lab, and reinfused. In vivo: Show an AAV vector being directly injected into the patient to target a specific organ like the eye or liver.] Different AAV serotypes can target specific tissues; for example, AAV9 can cross the blood-brain barrier to treat neurological disorders. Gene therapy can be performed ex vivo (cells are modified outside the body and returned) or in vivo (the vector is delivered directly into the body). Approved therapies like Luxturna (for inherited blindness) and Zolgensma (for spinal muscular atrophy) have demonstrated the life-changing potential of this approach, though challenges like delivery efficiency and high cost remain."
        }
      ],
      "flashcards": [
        {
          "id": "biotechnology-101-l07-f1",
          "front": "Monoclonal antibodies (mAbs)",
          "back": "Lab-produced proteins that bind a single specific antigen. Generated via hybridoma technology, they are used to treat cancer, autoimmune disorders, and infectious diseases."
        },
        {
          "id": "biotechnology-101-l07-f2",
          "front": "mRNA vaccine mechanism",
          "back": "Synthetic mRNA in lipid nanoparticles instructs host cells to produce a pathogen protein, triggering an immune response. The mRNA is translated in the cytoplasm and never enters the nucleus."
        },
        {
          "id": "biotechnology-101-l07-f3",
          "front": "AAV (adeno-associated virus)",
          "back": "A small, non-pathogenic viral vector used in gene therapy. It features efficient cell entry, low immunogenicity, and a limited cargo capacity (~4.7 kb)."
        },
        {
          "id": "biotechnology-101-l07-f4",
          "front": "Ex vivo vs. in vivo gene therapy",
          "back": "Ex vivo: Patient's cells are removed, genetically modified in a lab, and then reinfused. In vivo: The gene therapy vector is delivered directly into the patient's body."
        }
      ]
    },
    {
      "id": "biotechnology-101-l08",
      "title": "Agricultural Biotech, Biofuels & Industrial Applications",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Describe the development and function of Bt crops, Golden Rice, and Roundup Ready varieties",
        "Explain cellulosic ethanol production and the role of bioreactors in industrial fermentation",
        "Discuss bioethics considerations and regulatory frameworks governing GMOs and biotechnology"
      ],
      "chunks": [
        {
          "id": "biotechnology-101-l08-c1",
          "title": "Agricultural Biotechnology: GM Crops",
          "content": "Agricultural biotechnology uses genetic engineering to improve crop traits. Notable examples include Bt crops (corn, cotton), which are engineered with a gene from the bacterium Bacillus thuringiensis. This gene produces a Cry protein that is toxic to specific insect pests, like the European corn borer, reducing the need for chemical pesticides. [Visual: A split-screen image. Left: A corn stalk destroyed by corn borers. Right: A healthy Bt corn stalk, with the borers unable to eat it.] Another example is Golden Rice, engineered to produce beta-carotene (a precursor to Vitamin A) in its grains to combat vitamin A deficiency in developing countries. Herbicide-tolerant crops, like Roundup Ready soybeans, are engineered to withstand glyphosate, allowing farmers to control weeds without harming the crop. While these technologies can increase yields and improve nutrition, they also spark debate about herbicide resistance in weeds and long-term ecological impacts."
        },
        {
          "id": "biotechnology-101-l08-c2",
          "title": "Biofuels and Industrial Fermentation",
          "content": "Biofuels are renewable energy sources derived from biological matter. First-generation biofuels, like bioethanol from corn or sugarcane, use yeast to ferment simple sugars. Second-generation biofuels, such as cellulosic ethanol, use non-food sources like switchgrass or wood chips. This process is more complex, requiring pretreatment to break down tough lignin, followed by enzymatic hydrolysis to release sugars for fermentation. [Visual: A flowchart of cellulosic ethanol production. 1) Biomass (switchgrass). 2) Pretreatment. 3) Enzymatic Hydrolysis (cellulase enzymes). 4) Fermentation in a bioreactor. 5) Distillation to pure ethanol.] These processes often occur in large industrial bioreactors—controlled environments that optimize conditions like temperature, pH, and oxygen for microbial growth and product yield. Industrial fermentation is also used to produce enzymes (for detergents), organic acids (citric acid), antibiotics (penicillin), and bioplastics."
        },
        {
          "id": "biotechnology-101-l08-c3",
          "title": "Bioethics, GMO Regulation, and Societal Impact",
          "content": "Biotechnology raises significant ethical questions. The regulation of genetically modified organisms (GMOs) varies globally. The United States uses a product-based system, regulated by the USDA, EPA, and FDA, focusing on the final product's safety regardless of the method used to create it. In contrast, the European Union uses a process-based approach with stricter regulations and mandatory labeling for GMO products. [Visual: A simple graphic comparing the US (product-based) and EU (process-based) regulatory funnels for a GM crop.] Key ethical debates include the distinction between somatic gene editing (affecting only the individual) and germline editing (heritable changes affecting future generations), which raises concerns about 'designer babies' and consent. Other issues include genetic privacy, equitable access to expensive therapies, and the potential for dual-use research (technologies that could be used for harm). Fostering public dialogue and establishing robust ethical frameworks are crucial for the responsible development of biotechnology."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biotechnology-101-l08-a1",
          "title": "Match Application to Biotech Category",
          "type": "matching_pairs",
          "pairs": [
            {
              "left": "Bt Cry protein in corn",
              "right": "Agricultural biotech — insect pest resistance"
            },
            {
              "left": "Golden Rice with beta-carotene",
              "right": "Agricultural biotech — nutritional enhancement"
            },
            {
              "left": "Cellulosic ethanol from switchgrass",
              "right": "Biofuels — second-generation renewable energy"
            },
            {
              "left": "Citric acid from Aspergillus niger",
              "right": "Industrial fermentation — organic acid production"
            },
            {
              "left": "Roundup Ready soybeans",
              "right": "Agricultural biotech — herbicide tolerance"
            },
            {
              "left": "AAV gene therapy for SMA",
              "right": "Medical biotech — therapeutic gene delivery"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "biotechnology-101-l08-f1",
          "front": "Bt crops",
          "back": "Genetically engineered plants carrying a gene from Bacillus thuringiensis that produces a protein toxic to specific insect pests, reducing the need for pesticides."
        },
        {
          "id": "biotechnology-101-l08-f2",
          "front": "Golden Rice",
          "back": "Rice engineered to produce beta-carotene (provitamin A) in its edible grains, developed to combat vitamin A deficiency."
        },
        {
          "id": "biotechnology-101-l08-f3",
          "front": "Cellulosic ethanol",
          "back": "A second-generation biofuel produced from non-food biomass. It requires pretreatment and enzymatic hydrolysis before yeast fermentation."
        },
        {
          "id": "biotechnology-101-l08-f4",
          "front": "Bioreactor",
          "back": "An engineered vessel that maintains optimal conditions (temperature, pH, oxygen) for large-scale microbial fermentation to produce fuels, enzymes, or pharmaceuticals."
        }
      ]
    },
    {
      "id": "biotechnology-101-l09",
      "title": "Applications & Bioethics Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate knowledge of biopharmaceuticals, agricultural biotech, biofuels, and bioethics"
      ],
      "questions": [
        {
          "id": "biotechnology-101-l09-q1",
          "text": "Monoclonal antibodies are produced using hybridoma technology, which involves fusing:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Two different bacterial strains"
            },
            {
              "id": "b",
              "text": "B cells with myeloma cells"
            },
            {
              "id": "c",
              "text": "T cells with dendritic cells"
            },
            {
              "id": "d",
              "text": "Stem cells with fibroblasts"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Hybridoma technology fuses antigen-specific B cells from an immunized animal with immortal myeloma cells to create cells that proliferate and secrete identical antibodies indefinitely."
        },
        {
          "id": "biotechnology-101-l09-q2",
          "text": "mRNA vaccines do NOT alter the recipient's DNA because:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The mRNA is destroyed before entering any cells"
            },
            {
              "id": "b",
              "text": "mRNA is translated in the cytoplasm and never enters the nucleus"
            },
            {
              "id": "c",
              "text": "mRNA integrates into mitochondrial DNA instead"
            },
            {
              "id": "d",
              "text": "The lipid nanoparticle prevents nuclear entry of all molecules"
            }
          ],
          "correctOptionId": "b",
          "explanation": "mRNA is translated by ribosomes in the cytoplasm. It does not enter the nucleus where chromosomal DNA resides, and it is degraded within days by normal cellular enzymes."
        },
        {
          "id": "biotechnology-101-l09-q3",
          "text": "Bt crops reduce pesticide use because they:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Produce their own herbicide"
            },
            {
              "id": "b",
              "text": "Contain Cry proteins toxic to target insect pests"
            },
            {
              "id": "c",
              "text": "Are resistant to all plant diseases"
            },
            {
              "id": "d",
              "text": "Grow faster than pests can consume them"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Bt crops express Cry proteins from Bacillus thuringiensis that create lethal pores in the gut lining of target insect larvae, providing built-in pest protection."
        },
        {
          "id": "biotechnology-101-l09-q4",
          "text": "The main challenge of cellulosic ethanol compared to corn ethanol is:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Cellulose ferments too quickly"
            },
            {
              "id": "b",
              "text": "Lignocellulosic biomass requires pretreatment and enzymatic hydrolysis before fermentation"
            },
            {
              "id": "c",
              "text": "Cellulose cannot be converted to sugar"
            },
            {
              "id": "d",
              "text": "It produces methanol instead of ethanol"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Lignocellulosic biomass contains lignin and crystalline cellulose that must be physically/chemically pretreated, then enzymatically broken down by cellulases before yeast can ferment the released sugars."
        },
        {
          "id": "biotechnology-101-l09-q5",
          "text": "Which bioethical concern distinguishes germline gene editing from somatic gene therapy?",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Germline edits are less precise"
            },
            {
              "id": "b",
              "text": "Germline edits are heritable and affect future generations"
            },
            {
              "id": "c",
              "text": "Somatic therapy cannot use CRISPR"
            },
            {
              "id": "d",
              "text": "Germline editing only works in plants"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Germline edits alter DNA in eggs, sperm, or embryos and are passed to all future generations — raising ethical concerns about consent, equity, and unintended consequences that somatic therapy does not."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 5,
        "bloomProfile": {
          "remember": 1,
          "understand": 2,
          "apply": 1,
          "analyze": 1
        }
      }
    },
    {
      "id": "biotechnology-101-l10",
      "title": "Biotechnology Foundations — Comprehensive Final",
      "type": "quiz",
      "duration": 15,
      "objectives": [
        "Synthesize knowledge across DNA fundamentals, molecular cloning, PCR, sequencing, CRISPR, biopharmaceuticals, agricultural biotech, and bioethics"
      ],
      "questions": [
        {
          "id": "biotechnology-101-l10-q1",
          "text": "Which enzyme joins DNA fragments by forming phosphodiester bonds during molecular cloning?",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Restriction endonuclease"
            },
            {
              "id": "b",
              "text": "DNA polymerase"
            },
            {
              "id": "c",
              "text": "DNA ligase"
            },
            {
              "id": "d",
              "text": "RNA polymerase"
            }
          ],
          "correctOptionId": "c",
          "explanation": "DNA ligase catalyzes the formation of phosphodiester bonds between the 3′-OH and 5′-phosphate of adjacent nucleotides, sealing nicks in the sugar-phosphate backbone."
        },
        {
          "id": "biotechnology-101-l10-q2",
          "text": "A PAM sequence is required in the CRISPR-Cas9 system to:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Translate the guide RNA into protein"
            },
            {
              "id": "b",
              "text": "Allow Cas9 to dock and verify target complementarity"
            },
            {
              "id": "c",
              "text": "Activate DNA ligase for repair"
            },
            {
              "id": "d",
              "text": "Provide primers for PCR amplification"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Cas9 first identifies the PAM (5′-NGG-3′), then unwinds the adjacent DNA to check for gRNA complementarity before cleaving both strands."
        },
        {
          "id": "biotechnology-101-l10-q3",
          "text": "Golden Rice was engineered to address deficiency in:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Iron"
            },
            {
              "id": "b",
              "text": "Vitamin C"
            },
            {
              "id": "c",
              "text": "Vitamin A (beta-carotene)"
            },
            {
              "id": "d",
              "text": "Calcium"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Golden Rice produces beta-carotene (provitamin A) in the grain endosperm to combat vitamin A deficiency, a leading cause of childhood blindness in developing nations."
        },
        {
          "id": "biotechnology-101-l10-q4",
          "text": "In gel electrophoresis, DNA fragments migrate toward the positive electrode because:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "DNA has a net positive charge from histone proteins"
            },
            {
              "id": "b",
              "text": "The agarose gel pushes DNA forward mechanically"
            },
            {
              "id": "c",
              "text": "DNA's phosphate backbone carries a net negative charge"
            },
            {
              "id": "d",
              "text": "The electric field reverses DNA polarity"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Each phosphate group in DNA's backbone carries a negative charge at physiological pH, so DNA molecules migrate through the gel toward the anode (positive electrode)."
        },
        {
          "id": "biotechnology-101-l10-q5",
          "text": "An AAV vector is preferred for gene therapy because it:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Has unlimited cargo capacity"
            },
            {
              "id": "b",
              "text": "Integrates efficiently into the host genome"
            },
            {
              "id": "c",
              "text": "Causes strong immune suppression"
            },
            {
              "id": "d",
              "text": "Infects cells efficiently with minimal immune response and low integration risk"
            }
          ],
          "correctOptionId": "d",
          "explanation": "AAVs are small, non-pathogenic vectors that transduce cells efficiently, provoke minimal immune response, and rarely integrate into host DNA — reducing insertional mutagenesis risk."
        },
        {
          "id": "biotechnology-101-l10-q6",
          "text": "The Roundup Ready trait in soybeans confers tolerance to:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Drought stress"
            },
            {
              "id": "b",
              "text": "Insect herbivory"
            },
            {
              "id": "c",
              "text": "Glyphosate herbicide"
            },
            {
              "id": "d",
              "text": "Fungal infection"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Roundup Ready crops carry the CP4 EPSPS gene from Agrobacterium, which encodes an enzyme resistant to glyphosate (Roundup), allowing the herbicide to kill weeds without harming the crop."
        },
        {
          "id": "biotechnology-101-l10-q7",
          "text": "Which statement best describes the difference between Sanger sequencing and next-generation sequencing (NGS)?",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Sanger uses primers; NGS does not"
            },
            {
              "id": "b",
              "text": "NGS reads millions of fragments in parallel; Sanger reads one fragment at a time"
            },
            {
              "id": "c",
              "text": "Sanger is faster and cheaper than NGS"
            },
            {
              "id": "d",
              "text": "NGS cannot sequence human genomes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "NGS massively parallelizes sequencing — reading millions of short fragments simultaneously — enabling whole-genome sequencing in hours. Sanger reads one ~700–1,000 bp fragment per reaction."
        },
        {
          "id": "biotechnology-101-l10-q8",
          "text": "A bioreactor is best described as:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "A chemical reactor that uses only inorganic catalysts"
            },
            {
              "id": "b",
              "text": "An engineered vessel maintaining optimal conditions for microbial fermentation at scale"
            },
            {
              "id": "c",
              "text": "A device that separates DNA fragments by electrophoresis"
            },
            {
              "id": "d",
              "text": "A centrifuge for isolating cell organelles"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Bioreactors are engineered vessels that control temperature, pH, dissolved oxygen, and agitation to optimize microbial growth and product formation at industrial scale."
        },
        {
          "id": "biotechnology-101-l10-q9",
          "text": "Which repair pathway would a researcher exploit to knock out a gene using CRISPR-Cas9?",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Homology-directed repair (HDR)"
            },
            {
              "id": "b",
              "text": "Non-homologous end joining (NHEJ)"
            },
            {
              "id": "c",
              "text": "Nucleotide excision repair (NER)"
            },
            {
              "id": "d",
              "text": "Base excision repair (BER)"
            }
          ],
          "correctOptionId": "b",
          "explanation": "NHEJ is error-prone — it ligates broken ends directly, often introducing insertions or deletions (indels) that disrupt the reading frame and effectively knock out the gene."
        },
        {
          "id": "biotechnology-101-l10-q10",
          "text": "The primary ethical concern unique to germline genome editing is that:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It only works in bacterial cells"
            },
            {
              "id": "b",
              "text": "Changes are heritable and affect all future generations without their consent"
            },
            {
              "id": "c",
              "text": "It cannot use CRISPR technology"
            },
            {
              "id": "d",
              "text": "It is less expensive than somatic therapy"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Germline edits in eggs, sperm, or embryos are inherited by all descendants — raising unique ethical questions about consent, equity, and unintended multigenerational consequences."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 10,
        "bloomProfile": {
          "remember": 3,
          "understand": 3,
          "apply": 2,
          "analyze": 2
        }
      }
    }
  ]
};
