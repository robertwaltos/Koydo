import type { LearningModule } from "@/lib/modules/types";

export const MastersComputerSecurityU1ExternalModule: LearningModule = {
  "id": "masters-computer-security-u1-external",
  "title": "Computer Security (Master's Level)",
  "description": "Computer Security curriculum from 1 open-source datasets. MMLU (cais/mmlu).",
  "subject": "Science",
  "lessons": [
    {
      "id": "masters-computer-security-u1-external-l01",
      "title": "Computer Security — Quiz 1",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-ee7d8a573ee48e00",
          "text": "Which of the following styles of fuzzer is more likely to explore paths covering every line of code in the following program?",
          "options": [
            {
              "id": "opt-A",
              "text": "Generational"
            },
            {
              "id": "opt-B",
              "text": "Blackbox"
            },
            {
              "id": "opt-C",
              "text": "Whitebox"
            },
            {
              "id": "opt-D",
              "text": "Mutation-based"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-1226b96ea9cec859",
          "text": "Assume that a TLS connection has been established successfully between a client and a server. Establishing the session included checking the server certificate and executing a DiffieHelmann exchange, but the client did not provide a client certificate. Further, assume that the client and server are honest, that the client and server don’t leak their keys, and that the cryptography is good. Which of the following attacks does TLS protect against?\n1. An attacker replaying bytes that a client sent earlier.\n2. An attacker impersonating the server.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-5d11c8a3cab2a96b",
          "text": "MIT’s Kerberos KDC server has a maximum ticket lifetime of 24 hours (for most user principals). What ensures that an expired Kerberos ticket can no longer be used?",
          "options": [
            {
              "id": "opt-A",
              "text": "The Kerberos server (KDC) refuses to establish new connections between clients and servers for expired tickets."
            },
            {
              "id": "opt-B",
              "text": "When a client connects to a server, the server sets a 24-hour timer to terminate the connection, which ensures a client cannot remain connected past the ticket’s maximum lifetime."
            },
            {
              "id": "opt-C",
              "text": "When a client connects to a server, the server compares the ticket’s expiration time to the server’s current clock, and refuses to authenticate the user if the ticket expiration time is in the past."
            },
            {
              "id": "opt-D",
              "text": "When a client connects to a server, the server sends a query to the KDC to check if the ticket is still valid with respect to the KDC’s clock, and refuses to authenticate the user if the KDC reports that the ticket is expired."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-b809ce2b1fcedc4c",
          "text": "In Message Condentiality, the transmitted message must make sense to only intended",
          "options": [
            {
              "id": "opt-A",
              "text": "Receiver"
            },
            {
              "id": "opt-B",
              "text": "Sender"
            },
            {
              "id": "opt-C",
              "text": "Modulor"
            },
            {
              "id": "opt-D",
              "text": "Translator"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-11be1be2560a9043",
          "text": "Which of the following is a remote Trojan?",
          "options": [
            {
              "id": "opt-A",
              "text": "Troya"
            },
            {
              "id": "opt-B",
              "text": "DaCryptic"
            },
            {
              "id": "opt-C",
              "text": "BankerA"
            },
            {
              "id": "opt-D",
              "text": "Game-Troj"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-ba84305282af41c9",
          "text": "______________ is a widespread app’s coding mistake made by developers which could be exploited by an attacker for gaining access or malfunctioning your system.",
          "options": [
            {
              "id": "opt-A",
              "text": "Memory leakage"
            },
            {
              "id": "opt-B",
              "text": "Buffer-overrun"
            },
            {
              "id": "opt-C",
              "text": "Less processing power"
            },
            {
              "id": "opt-D",
              "text": "Inefficient programming"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-c5ca778c21d038ef",
          "text": "Consider the paper Native Client: A Sandbox for Portable, Untrusted x86 Native Code by Yee et al. Ben Bitdiddle notes that NaCl uses Intel x86 segmentation to ensure that the sandboxed module does not read or write memory outside its own data area, and does not execute instructions outside its own code. Ben thinks that with these restrictions alone, executing the sandboxed module must be safe; that is, he thinks validation is not needed. Ben is wrong. Circle the types of x86 machine instructions that the validator always forbids in sandboxed code. Please ignore trampoline and springboard code.",
          "options": [
            {
              "id": "opt-A",
              "text": "all instructions that modify segment state"
            },
            {
              "id": "opt-B",
              "text": "all loads or stores to addresses that are not 0 mod 32"
            },
            {
              "id": "opt-C",
              "text": "all indirect loads or stores (via an address in a register or variable)"
            },
            {
              "id": "opt-D",
              "text": "all indirect jumps (via an address in a register or variable)"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-7c67c7354eba30f7",
          "text": "____________ is also a part of darknet that is employed for transferring files anonymously.",
          "options": [
            {
              "id": "opt-A",
              "text": "Freenet"
            },
            {
              "id": "opt-B",
              "text": "ARPANET"
            },
            {
              "id": "opt-C",
              "text": "Stuxnet"
            },
            {
              "id": "opt-D",
              "text": "Internet"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-33c0200afd786d1b",
          "text": "Why apps developed in languages like C, C++ is prone to Buffer-overflow?",
          "options": [
            {
              "id": "opt-A",
              "text": "No string boundary checks in predefined functions"
            },
            {
              "id": "opt-B",
              "text": "No storage check in the external memory"
            },
            {
              "id": "opt-C",
              "text": "No processing power check"
            },
            {
              "id": "opt-D",
              "text": "No database check"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-e4e590fdae53ea44",
          "text": "Man in the middle attack can endanger the security of Diffie Hellman method if two parties are not",
          "options": [
            {
              "id": "opt-A",
              "text": "Joined"
            },
            {
              "id": "opt-B",
              "text": "Authenticated"
            },
            {
              "id": "opt-C",
              "text": "Submitted"
            },
            {
              "id": "opt-D",
              "text": "Shared"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-1848778f4c7f20aa",
          "text": "An integer overflow occurs when",
          "options": [
            {
              "id": "opt-A",
              "text": "an integer expression's result \"wraps around\"; instead of creating a very large number, a very small (or negative) number ends up getting created"
            },
            {
              "id": "opt-B",
              "text": "an integer is used as if it was a pointer"
            },
            {
              "id": "opt-C",
              "text": "an integer is used to access a buffer outside of the buffer's bounds"
            },
            {
              "id": "opt-D",
              "text": "there is no more space to hold integers in the program"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-b36d52b38653160b",
          "text": "Let HH be a Merkle-Damgard hash function is H:X^{\\leq L} \\to TH:X^≤L  →T. Construct a MAC from this HH as follows: \\ \\ S(k,m) = H(k \\| m)  S(k,m)=H(k∥m). This mac is insecure because:",
          "options": [
            {
              "id": "opt-A",
              "text": "Given H(k \\| m)H(k∥m) anyone can compute H(w \\| k \\| m \\| \\text{PB})H(w∥k∥m∥PB) for any ww"
            },
            {
              "id": "opt-B",
              "text": "Given H(k \\| m)H(k∥m) anyone can compute H(k \\| m \\| w)H(k∥m∥w) for any ww"
            },
            {
              "id": "opt-C",
              "text": "Given H(k \\| m)H(k∥m) anyone can compute H(k \\| m \\| \\text{PB} \\| w)H(k∥m∥PB∥w) for any ww"
            },
            {
              "id": "opt-D",
              "text": "Anyone can compute H( k \\| m )H(k∥m) for any mm"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-6fd7416405a91aec",
          "text": "Suppose that Alice and Bob sent confidential text messages to one another last month through an encrypted messaging system. Alice and Bob are worried that an adversary might compromise one of their computers today, while they are taking the 6.858 final exam, and would then be able to decrypt those messages. Which of the following security properties can address Alice and Bob’s concern?",
          "options": [
            {
              "id": "opt-A",
              "text": "Authentication."
            },
            {
              "id": "opt-B",
              "text": "Deniability."
            },
            {
              "id": "opt-C",
              "text": "Forward secrecy"
            },
            {
              "id": "opt-D",
              "text": "Backward secrecy."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-19edfe0a9353a29a",
          "text": "The AH Protocol provides source authentication and data integrity, but not",
          "options": [
            {
              "id": "opt-A",
              "text": "Integrity"
            },
            {
              "id": "opt-B",
              "text": "Privacy"
            },
            {
              "id": "opt-C",
              "text": "Nonrepudiation"
            },
            {
              "id": "opt-D",
              "text": "Both A & C"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-5993a3d7f470d9b7",
          "text": "Which of the following is not a security exploit?",
          "options": [
            {
              "id": "opt-A",
              "text": "Eavesdropping"
            },
            {
              "id": "opt-B",
              "text": "Cross-site scripting"
            },
            {
              "id": "opt-C",
              "text": "Authentication"
            },
            {
              "id": "opt-D",
              "text": "SQL Injection"
            }
          ],
          "correctOptionId": "opt-C"
        }
      ]
    },
    {
      "id": "masters-computer-security-u1-external-l02",
      "title": "Computer Security — Quiz 2",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-c3eae40c15d5624a",
          "text": "_______________ is the central node of 802.11 wireless operations.",
          "options": [
            {
              "id": "opt-A",
              "text": "WPA"
            },
            {
              "id": "opt-B",
              "text": "Access Point"
            },
            {
              "id": "opt-C",
              "text": "WAP"
            },
            {
              "id": "opt-D",
              "text": "Access Port"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-428d15c07f5b6ae8",
          "text": "In MD-5 the length of the message digest is",
          "options": [
            {
              "id": "opt-A",
              "text": "160"
            },
            {
              "id": "opt-B",
              "text": "128"
            },
            {
              "id": "opt-C",
              "text": "64"
            },
            {
              "id": "opt-D",
              "text": "54"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-cf95428a6065e9b8",
          "text": "What is Nmap?",
          "options": [
            {
              "id": "opt-A",
              "text": "It is a scanner which works by injecting packets to a range of addresses, and inferring what hosts and services might be at those addresses, based on the responses"
            },
            {
              "id": "opt-B",
              "text": "It is a network fuzz testing tool"
            },
            {
              "id": "opt-C",
              "text": "It is a map of the Internet"
            },
            {
              "id": "opt-D",
              "text": "It is a suite of tools for scripting attacks: probe, construct, encode, inject, wait for response"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-5dc47d2875bb00e6",
          "text": "How do you prevent SQL injection?",
          "options": [
            {
              "id": "opt-A",
              "text": "Escape queries"
            },
            {
              "id": "opt-B",
              "text": "Interrupt requests"
            },
            {
              "id": "opt-C",
              "text": "Merge tables"
            },
            {
              "id": "opt-D",
              "text": "All of the above"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-795c4c93347d9deb",
          "text": "What does it mean to \"be stealthy\" during a penetration test?",
          "options": [
            {
              "id": "opt-A",
              "text": "Performing the tests from an undisclosed location"
            },
            {
              "id": "opt-B",
              "text": "Using encryption during tests to make the source of attacks impossible to determine"
            },
            {
              "id": "opt-C",
              "text": "Performing penetration testing without the target organization knowing"
            },
            {
              "id": "opt-D",
              "text": "Taking care to avoid activities during a penetration test that might attract attention, e.g., by operators or IDS services"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-347fdaeeb76f0e1a",
          "text": "Which of the following is not a transport layer vulnerability?",
          "options": [
            {
              "id": "opt-A",
              "text": "Mishandling of undefined, poorly defined variables"
            },
            {
              "id": "opt-B",
              "text": "The Vulnerability that allows “fingerprinting” & other enumeration of host information"
            },
            {
              "id": "opt-C",
              "text": "Overloading of transport-layer mechanisms"
            },
            {
              "id": "opt-D",
              "text": "Unauthorized network access"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-c76022d4ee47dfc1",
          "text": "In Brumley and Boneh’s paper on side-channel attacks, why does blinding prevent the timing attack from working?",
          "options": [
            {
              "id": "opt-A",
              "text": "Blinding prevents the server from using the CRT optimization, which is essential to the timing attack."
            },
            {
              "id": "opt-B",
              "text": "Blinding changes the p and q primes that are used, so an adversary cannot learn the server’s true p and q values."
            },
            {
              "id": "opt-C",
              "text": "Blinding randomizes the ciphertext being decrypted, thus obscuring the correlation between an adversary’s input and the timing differences."
            },
            {
              "id": "opt-D",
              "text": "Blinding adds a random amount of time to the decryption due to the multiplication and division by the blinding random value r, which obscures the timing differences used in the attack."
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-40f8bc6a70e18392",
          "text": "The openSSL implementation described in “Remote Timing Attacks are Practical” (by Brumley and Boneh) uses the following performance optimizations: Chinese Remainder (CR), Montgomery Representation (MR), Karatsuba Multiplication (KM), and Repeated squaring and Sliding windows (RS). Which of the following options would close the timing channel attack described in the paper if you turned the listed optimizations off?\n1. RS and KM\n2. RS and MR",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-3770c036526e14eb",
          "text": "Public key encryption is advantageous over Symmetric key Cryptography because of",
          "options": [
            {
              "id": "opt-A",
              "text": "Speed"
            },
            {
              "id": "opt-B",
              "text": "Space"
            },
            {
              "id": "opt-C",
              "text": "Key exchange"
            },
            {
              "id": "opt-D",
              "text": "Key length"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-4472fa940ff0825d",
          "text": "The __________ was a huge marketplace of Dark Web specifically famous for selling of illegal drugs & narcotics as well as you can find a wide range of other goods for sale.",
          "options": [
            {
              "id": "opt-A",
              "text": "Silk Road"
            },
            {
              "id": "opt-B",
              "text": "Cotton Road"
            },
            {
              "id": "opt-C",
              "text": "Dark Road"
            },
            {
              "id": "opt-D",
              "text": "Drug Road"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-a143ee31771a56e1",
          "text": "The ______________ is categorized as an unknown segment of the Deep Web which has been purposely kept hidden & is inaccessible using standard web browsers.",
          "options": [
            {
              "id": "opt-A",
              "text": "Haunted web"
            },
            {
              "id": "opt-B",
              "text": "World Wide Web"
            },
            {
              "id": "opt-C",
              "text": "Dark web"
            },
            {
              "id": "opt-D",
              "text": "Surface web"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-70c0a71f569b094a",
          "text": "What does EXE do when the STP solver times out on a constraint query for a particular path?",
          "options": [
            {
              "id": "opt-A",
              "text": "Assume that the query is satisfiable and continue executing the path."
            },
            {
              "id": "opt-B",
              "text": "Assume that the query is not satisfiable and stop executing the path"
            },
            {
              "id": "opt-C",
              "text": "Restart STP and retry the query, up to a limited number of retries."
            },
            {
              "id": "opt-D",
              "text": "Remove a subset of the constraints and retry the query."
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-00d2d6a4200946ea",
          "text": "To verify a digital signature we need the",
          "options": [
            {
              "id": "opt-A",
              "text": "Sender’s Private key"
            },
            {
              "id": "opt-B",
              "text": "Sender’s Public key"
            },
            {
              "id": "opt-C",
              "text": "Receiver’s Private key"
            },
            {
              "id": "opt-D",
              "text": "Receiver’s Public key"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-cc27af9b809c236a",
          "text": "Suppose you want to use fuzzing on a program to try to find memory errors; which of the following statements is true?",
          "options": [
            {
              "id": "opt-A",
              "text": "You should not use a grammar-based fuzzer, because its adherence to the grammar means it will not find memory errors"
            },
            {
              "id": "opt-B",
              "text": "Compiling the program with address sanitizer (ASAN) will make errors harder to reproduce"
            },
            {
              "id": "opt-C",
              "text": "Compiling the program with address sanitizer (ASAN) will make the source of a memory error easier to find"
            },
            {
              "id": "opt-D",
              "text": "Fuzzing doesn't find memory errors, it finds crashes and hangs"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-c35e519482ec84ff",
          "text": "Based on the paper “SoK: SSL and HTTPS: Revisiting past challenges and evaluating certificates trust model enhancements”, which of the following statements are false?",
          "options": [
            {
              "id": "opt-A",
              "text": "Valid DV certificates provide more confidence to a user that she is connecting to the intended party than valid EV certificates."
            },
            {
              "id": "opt-B",
              "text": "OCSP stapling allows a server to prove to a browser that its certificate hasn’t been revoked."
            },
            {
              "id": "opt-C",
              "text": "DANE makes it difficult for an adversary to launch a SSL stripping attack."
            },
            {
              "id": "opt-D",
              "text": "Server key-pinning makes it harder for an adversary to convince a CA to mint a certificate for a site and launch an MITM attack on that site."
            }
          ],
          "correctOptionId": "opt-A"
        }
      ]
    },
    {
      "id": "masters-computer-security-u1-external-l03",
      "title": "Computer Security — Quiz 3",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-27856d7fd2361998",
          "text": "What tool can be used to perform SNMP enumeration?",
          "options": [
            {
              "id": "opt-A",
              "text": "DNSlookup"
            },
            {
              "id": "opt-B",
              "text": "Whois"
            },
            {
              "id": "opt-C",
              "text": "Nslookup"
            },
            {
              "id": "opt-D",
              "text": "IP Network Browser"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-902b9771a0eeb771",
          "text": "Which among them has the strongest wireless security?",
          "options": [
            {
              "id": "opt-A",
              "text": "WEP"
            },
            {
              "id": "opt-B",
              "text": "WPA"
            },
            {
              "id": "opt-C",
              "text": "WPA2"
            },
            {
              "id": "opt-D",
              "text": "WPA3"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-571f857f87fb877f",
          "text": "Suppose Unix did not provide a way of passing file descriptors between processes, but still allowed inheriting file descriptors from a parent on fork and exec. What aspects of the OKWS design would break without file descriptor passing?\n1. It would be impossible for services to get a TCP connection to the client web browser.\n2. It would be impossible for okd to run as a non-root user.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-f25a54d4365fdc1d",
          "text": "Failed sessions allow brute-force attacks on access credentials. This type of attacks are done in which layer of the OSI model?",
          "options": [
            {
              "id": "opt-A",
              "text": "Physical layer"
            },
            {
              "id": "opt-B",
              "text": "Data-link Layer"
            },
            {
              "id": "opt-C",
              "text": "Session layer"
            },
            {
              "id": "opt-D",
              "text": "Presentation layer"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-0a283dde19dd1c22",
          "text": "Which of the following is an authentication method?",
          "options": [
            {
              "id": "opt-A",
              "text": "Secret question"
            },
            {
              "id": "opt-B",
              "text": "Biometric"
            },
            {
              "id": "opt-C",
              "text": "SMS code"
            },
            {
              "id": "opt-D",
              "text": "All of the above"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-a14fba2682fda759",
          "text": "When does a buffer overflow occur, generally speaking?",
          "options": [
            {
              "id": "opt-A",
              "text": "when writing to a pointer that has been freed"
            },
            {
              "id": "opt-B",
              "text": "when copying a buffer from the stack to the heap"
            },
            {
              "id": "opt-C",
              "text": "when a pointer is used to access memory not allocated to it"
            },
            {
              "id": "opt-D",
              "text": "when the program notices a buffer has filled up, and so starts to reject requests"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-70a593e489c7181d",
          "text": "A digital signature needs a",
          "options": [
            {
              "id": "opt-A",
              "text": "Private-key system"
            },
            {
              "id": "opt-B",
              "text": "Shared-key system"
            },
            {
              "id": "opt-C",
              "text": "Public-key system"
            },
            {
              "id": "opt-D",
              "text": "All of them"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-e6c4f08b2ae28125",
          "text": "A packet filter firewall filters at the",
          "options": [
            {
              "id": "opt-A",
              "text": "Application or transport"
            },
            {
              "id": "opt-B",
              "text": "Data link layer"
            },
            {
              "id": "opt-C",
              "text": "Physical Layer"
            },
            {
              "id": "opt-D",
              "text": "Network or transport layer"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-71a6265c1490f759",
          "text": "Let I = (S,V)I=(S,V) be a MAC. Suppose S(k,m)S(k,m) is always 5 bits long. Can this MAC be secure?",
          "options": [
            {
              "id": "opt-A",
              "text": "No, an attacker can simply guess the tag for messages"
            },
            {
              "id": "opt-B",
              "text": "It depends on the details of the MAC"
            },
            {
              "id": "opt-C",
              "text": "Yes, the attacker cannot generate a valid tag for any message"
            },
            {
              "id": "opt-D",
              "text": "Yes, the PRG is pseudorandom"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-0689568d8939c35f",
          "text": "Which of the following deals with network intrusion detection and real-time traffic analysis?",
          "options": [
            {
              "id": "opt-A",
              "text": "John the Ripper"
            },
            {
              "id": "opt-B",
              "text": "L0phtCrack"
            },
            {
              "id": "opt-C",
              "text": "Snort"
            },
            {
              "id": "opt-D",
              "text": "Nessus"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-da4b5ee7156978d7",
          "text": "The Message condentiality or privacy means that the sender and the receiver expect",
          "options": [
            {
              "id": "opt-A",
              "text": "Integrity"
            },
            {
              "id": "opt-B",
              "text": "Condentiality"
            },
            {
              "id": "opt-C",
              "text": "Authentication"
            },
            {
              "id": "opt-D",
              "text": "Nonrepudiation"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-efa204da65a1c253",
          "text": "When a wireless user authenticates to any AP, both of them go in the course of four-step authentication progression which is called _____________",
          "options": [
            {
              "id": "opt-A",
              "text": "AP-handshaking"
            },
            {
              "id": "opt-B",
              "text": "4-way handshake"
            },
            {
              "id": "opt-C",
              "text": "4-way connection"
            },
            {
              "id": "opt-D",
              "text": "wireless handshaking"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-694954537f5b2f1b",
          "text": "Message authentication is a service beyond",
          "options": [
            {
              "id": "opt-A",
              "text": "Message Condentiality"
            },
            {
              "id": "opt-B",
              "text": "Message Integrity"
            },
            {
              "id": "opt-C",
              "text": "Message Splashing"
            },
            {
              "id": "opt-D",
              "text": "Message Sending"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-1862cc07d4fc2acb",
          "text": "Which of the following are most vulnerable to injection attacks?",
          "options": [
            {
              "id": "opt-A",
              "text": "Session IDs"
            },
            {
              "id": "opt-B",
              "text": "Registry keys"
            },
            {
              "id": "opt-C",
              "text": "Network communications"
            },
            {
              "id": "opt-D",
              "text": "SQL queries based on user input"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-ad8e6a19d06169fa",
          "text": "Assume that a TLS connection has been established successfully between a client and a server. Establishing the session included checking the server certificate and executing a DiffieHelmann exchange, but the client did not provide a client certificate. Further, assume that the client and server are honest, that the client and server don’t leak their keys, and that the cryptography is good. Which of the following attacks does TLS protect against?\n1. An attacker replacing bytes sent by a client with bytes of the attacker’s own choosing.\n2. An attacker reading the plaintext bytes sent by a client.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-A"
        }
      ]
    },
    {
      "id": "masters-computer-security-u1-external-l04",
      "title": "Computer Security — Quiz 4",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-89720d45335b3c46",
          "text": "Which of the following is a Wireless traffic Sniffing tool?",
          "options": [
            {
              "id": "opt-A",
              "text": "Maltego"
            },
            {
              "id": "opt-B",
              "text": "BurpSuit"
            },
            {
              "id": "opt-C",
              "text": "Nessus"
            },
            {
              "id": "opt-D",
              "text": "Wireshark"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-36cc1f00972a4ba0",
          "text": "A ___________ is a method in which a computer security mechanism is bypassed untraceable for accessing the computer or its information.",
          "options": [
            {
              "id": "opt-A",
              "text": "front-door"
            },
            {
              "id": "opt-B",
              "text": "backdoor"
            },
            {
              "id": "opt-C",
              "text": "clickjacking"
            },
            {
              "id": "opt-D",
              "text": "key-logging"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-453d09811c89a769",
          "text": "Which of the following is not a block cipher operating mode?",
          "options": [
            {
              "id": "opt-A",
              "text": "ECB"
            },
            {
              "id": "opt-B",
              "text": "CFB"
            },
            {
              "id": "opt-C",
              "text": "CBF"
            },
            {
              "id": "opt-D",
              "text": "CBC"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-eb839afdb50f4b5b",
          "text": "What is a web proxy?",
          "options": [
            {
              "id": "opt-A",
              "text": "A piece of software that intercepts and possibly modifies requests (and responses) between a web browser and web server"
            },
            {
              "id": "opt-B",
              "text": "An agent that makes decisions on the client's behalf when interacting with web applications"
            },
            {
              "id": "opt-C",
              "text": "A piece of software that makes a web application look like a standalone application, making it easier to test"
            },
            {
              "id": "opt-D",
              "text": "A simulator for the web, for use when off-line"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-797e235d74f4a081",
          "text": "Buffer-overflow may remain as a bug in apps if __________ are not done fully.",
          "options": [
            {
              "id": "opt-A",
              "text": "boundary hacks"
            },
            {
              "id": "opt-B",
              "text": "memory checks"
            },
            {
              "id": "opt-C",
              "text": "boundary checks"
            },
            {
              "id": "opt-D",
              "text": "buffer checks"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-5a96238445cf0dc4",
          "text": "Applications developed by programming languages like ____ and ______ have this common buffer-overflow error.",
          "options": [
            {
              "id": "opt-A",
              "text": "C, Ruby"
            },
            {
              "id": "opt-B",
              "text": "Python, Ruby"
            },
            {
              "id": "opt-C",
              "text": "C, C++"
            },
            {
              "id": "opt-D",
              "text": "Tcl, C#"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-ce51b237b2489ec5",
          "text": "Encryption and decryption provide secrecy, or condentiality, but not",
          "options": [
            {
              "id": "opt-A",
              "text": "Authentication"
            },
            {
              "id": "opt-B",
              "text": "Integrity"
            },
            {
              "id": "opt-C",
              "text": "Privacy"
            },
            {
              "id": "opt-D",
              "text": "All of the above"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-dd379ce1a701b653",
          "text": "A/an ___________ is a program that steals your logins & passwords for instant messaging applications.",
          "options": [
            {
              "id": "opt-A",
              "text": "IM – Trojans"
            },
            {
              "id": "opt-B",
              "text": "Backdoor Trojans"
            },
            {
              "id": "opt-C",
              "text": "Trojan-Downloader"
            },
            {
              "id": "opt-D",
              "text": "Ransom Trojan"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-cd035aee87c3ed8b",
          "text": "The sub key length at each round of DES is__________",
          "options": [
            {
              "id": "opt-A",
              "text": "32"
            },
            {
              "id": "opt-B",
              "text": "56"
            },
            {
              "id": "opt-C",
              "text": "48"
            },
            {
              "id": "opt-D",
              "text": "64"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-25f73963c392691f",
          "text": "Which of the following is true of mutation-based fuzzing?",
          "options": [
            {
              "id": "opt-A",
              "text": "It generates each different input by modifying a prior input"
            },
            {
              "id": "opt-B",
              "text": "It works by making small mutations to the target program to induce faults"
            },
            {
              "id": "opt-C",
              "text": "Each input is mutation that follows a given grammar"
            },
            {
              "id": "opt-D",
              "text": "It only makes sense for file-based fuzzing, not network-based fuzzing"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-4a99b5d94a19ddaf",
          "text": "What are the types of scanning?",
          "options": [
            {
              "id": "opt-A",
              "text": "Port, network, and services"
            },
            {
              "id": "opt-B",
              "text": "Network, vulnerability, and port"
            },
            {
              "id": "opt-C",
              "text": "Passive, active, and interactive"
            },
            {
              "id": "opt-D",
              "text": "Server, client, and network"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-39752cc8b1920ebb",
          "text": "A sender must not be able to deny sending a message that was sent, is known as",
          "options": [
            {
              "id": "opt-A",
              "text": "Message Nonrepudiation"
            },
            {
              "id": "opt-B",
              "text": "Message Integrity"
            },
            {
              "id": "opt-C",
              "text": "Message Condentiality"
            },
            {
              "id": "opt-D",
              "text": "Message Sending"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-c8a11c747fe20718",
          "text": "A proxy rewall lters at the",
          "options": [
            {
              "id": "opt-A",
              "text": "Physical layer"
            },
            {
              "id": "opt-B",
              "text": "Application layer"
            },
            {
              "id": "opt-C",
              "text": "Data link layer"
            },
            {
              "id": "opt-D",
              "text": "Network layer"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-3c21a9936c5d73b3",
          "text": "Encapsulating Security Payload (ESP) belongs to which Internet Security Protocol?",
          "options": [
            {
              "id": "opt-A",
              "text": "Secure Socket Layer Protocol"
            },
            {
              "id": "opt-B",
              "text": "Secure IP Protocol"
            },
            {
              "id": "opt-C",
              "text": "Secure Http Protocol"
            },
            {
              "id": "opt-D",
              "text": "Transport Layer Security Protocol"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-20f5e31a6297c243",
          "text": "A special tool is necessary for entering the network which is _______________ that helps the anonymous internet users to access into the Tor’s network and use various Tor services.",
          "options": [
            {
              "id": "opt-A",
              "text": "Opera browser"
            },
            {
              "id": "opt-B",
              "text": "Firefox"
            },
            {
              "id": "opt-C",
              "text": "Chrome"
            },
            {
              "id": "opt-D",
              "text": "Tor browser"
            }
          ],
          "correctOptionId": "opt-D"
        }
      ]
    },
    {
      "id": "masters-computer-security-u1-external-l05",
      "title": "Computer Security — Quiz 5",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-5dc583c3ee1a8808",
          "text": "How does a buffer overflow on the stack facilitate running attacker-injected code?",
          "options": [
            {
              "id": "opt-A",
              "text": "By overwriting the return address to point to the location of that code"
            },
            {
              "id": "opt-B",
              "text": "By writing directly to the instruction pointer register the address of the code"
            },
            {
              "id": "opt-C",
              "text": "By writing directly to %eax the address of the code"
            },
            {
              "id": "opt-D",
              "text": "By changing the name of the running executable, stored on the stack"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-2c77bafed233a15e",
          "text": "The digest created by a hash function is normally called a",
          "options": [
            {
              "id": "opt-A",
              "text": "Modication detection code (MDC)"
            },
            {
              "id": "opt-B",
              "text": "Modify authentication connection"
            },
            {
              "id": "opt-C",
              "text": "Message authentication control"
            },
            {
              "id": "opt-D",
              "text": "Message authentication cipher"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-5e55a3400b03145e",
          "text": "Let F: K \\times R \\to MF:K×R→M be a secure PRF. For m \\in Mm∈M define E(k,m) = \\big[ r \\gets R,\\ \\text{output } \\big(r,\\ F(k,r) \\oplus m\\big)\\ \\big]E(k,m)=[r←R, output (r, F(k,r)⊕m) ] Is EE symantically secure under CPA?",
          "options": [
            {
              "id": "opt-A",
              "text": "Yes, whenever F is a secure PRF"
            },
            {
              "id": "opt-B",
              "text": "No, there is always a CPA attack on this system"
            },
            {
              "id": "opt-C",
              "text": "Yes, but only if R is large enough so r never repeats (w.h.p)"
            },
            {
              "id": "opt-D",
              "text": "It depends on what F is used"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-8063c0ba79202522",
          "text": "Old operating systems like _______ and NT-based systems have buffer-overflow attack a common vulnerability.",
          "options": [
            {
              "id": "opt-A",
              "text": "Windows 7"
            },
            {
              "id": "opt-B",
              "text": "Chrome"
            },
            {
              "id": "opt-C",
              "text": "IOS12"
            },
            {
              "id": "opt-D",
              "text": "UNIX"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-24da92b3d5aba6d5",
          "text": "What is a replay attack?",
          "options": [
            {
              "id": "opt-A",
              "text": "When the attacker replies to a message sent to it by the system"
            },
            {
              "id": "opt-B",
              "text": "An attack that continuously repeats, probing for a weakness"
            },
            {
              "id": "opt-C",
              "text": "An attack that uses the system's own messages and so cannot be defended against"
            },
            {
              "id": "opt-D",
              "text": "The attacker resends a captured message, and the site accept its and responds in the attacker's favor"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-0b896cb9a4918816",
          "text": "Statement 1| A U2F USB dongle prevents malware on the user’s computer from stealing the user’s second factor to authenticate as that user even when the user’s computer is turned off. Statement 2| A server using U2F can reliably determine that the user who is attempting to login is indeed behind the computer that sent the login request.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-fe161c5374c7ace7",
          "text": "____________________ is the anticipation of unauthorized access or break to computers or data by means of wireless networks.",
          "options": [
            {
              "id": "opt-A",
              "text": "Wireless access"
            },
            {
              "id": "opt-B",
              "text": "Wireless security"
            },
            {
              "id": "opt-C",
              "text": "Wired Security"
            },
            {
              "id": "opt-D",
              "text": "Wired device apps"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-06fc03798edc1b3c",
          "text": "Which of the following are benefits of penetration testing?",
          "options": [
            {
              "id": "opt-A",
              "text": "Results are often reproducible"
            },
            {
              "id": "opt-B",
              "text": "Full evidence of security: a clean test means a secure system"
            },
            {
              "id": "opt-C",
              "text": "Compositionality of security properties means tested components are secure even if others change"
            },
            {
              "id": "opt-D",
              "text": "Makes an adversarial neural network converge more quickly"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-660af7f36f8c6935",
          "text": "1. _________ framework made cracking of vulnerabilities easy like point and click.",
          "options": [
            {
              "id": "opt-A",
              "text": ".Net"
            },
            {
              "id": "opt-B",
              "text": "Metasploit"
            },
            {
              "id": "opt-C",
              "text": "Zeus"
            },
            {
              "id": "opt-D",
              "text": "Ettercap"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-39e1c413f5204928",
          "text": "You are given a message (m) and its OTP encryption (c). Can you compute the OTP key from m and c ?",
          "options": [
            {
              "id": "opt-A",
              "text": "No, I cannot compute the key."
            },
            {
              "id": "opt-B",
              "text": "Yes, the key is k = m xor c."
            },
            {
              "id": "opt-C",
              "text": "I can only compute half the bits of the key."
            },
            {
              "id": "opt-D",
              "text": "Yes, the key is k = m xor m."
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-25e3216cd5767802",
          "text": "The openSSL implementation described in “Remote Timing Attacks are Practical” (by Brumley and Boneh) uses the following performance optimizations: Chinese Remainder (CR), Montgomery Representation (MR), Karatsuba Multiplication (KM), and Repeated squaring and Sliding windows (RS). Which of the following options would close the timing channel attack described in the paper if you turned the listed optimizations off?\n1. CR and MR\n2. CR",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-e848ba3531c41086",
          "text": "When the data must arrive at the receiver exactly as they were sent, its called",
          "options": [
            {
              "id": "opt-A",
              "text": "Message Condentiality"
            },
            {
              "id": "opt-B",
              "text": "Message Integrity"
            },
            {
              "id": "opt-C",
              "text": "Message Splashing"
            },
            {
              "id": "opt-D",
              "text": "Message Sending"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-3a4c4e1e7fa3ab69",
          "text": "What is the difference between a direct leak and a side channel?",
          "options": [
            {
              "id": "opt-A",
              "text": "A direct leak creates a denial of service by failing to free memory, while a channel frees memory as a side effect"
            },
            {
              "id": "opt-B",
              "text": "A direct leak is one that is intentional, rather than by unintentional"
            },
            {
              "id": "opt-C",
              "text": "A direct leak comes via the software system's intended interaction mechanism, where as a side channel leak comes from measurements of other system features, like timing, power usage, or space usage"
            },
            {
              "id": "opt-D",
              "text": "There is no difference"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-005cf9c8dc2e5fb0",
          "text": "A session symmetric key between two parties is used",
          "options": [
            {
              "id": "opt-A",
              "text": "Only once"
            },
            {
              "id": "opt-B",
              "text": "Twice"
            },
            {
              "id": "opt-C",
              "text": "Multiple times"
            },
            {
              "id": "opt-D",
              "text": "Conditions dependant"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-dc5024c6e4791c4e",
          "text": "What is a nop sled",
          "options": [
            {
              "id": "opt-A",
              "text": "It is an anonymous version of a mop sled"
            },
            {
              "id": "opt-B",
              "text": "It is a sequence of nops preceding injected shellcode, useful when the return address is unknown"
            },
            {
              "id": "opt-C",
              "text": "It is a method of removing zero bytes from shellcode"
            },
            {
              "id": "opt-D",
              "text": "It is another name for a branch instruction at the end of sequence of nops"
            }
          ],
          "correctOptionId": "opt-B"
        }
      ]
    },
    {
      "id": "masters-computer-security-u1-external-l06",
      "title": "Computer Security — Quiz 6",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-9f18f6fca27b182f",
          "text": "Which Nmap scan is does not completely open a TCP connection?",
          "options": [
            {
              "id": "opt-A",
              "text": "SYN stealth scan"
            },
            {
              "id": "opt-B",
              "text": "TCP connect"
            },
            {
              "id": "opt-C",
              "text": "XMAS tree scan"
            },
            {
              "id": "opt-D",
              "text": "ACK scan"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-134df3fd85eba700",
          "text": "Based on the paper “Click Trajectories: End-to-End Analysis of the Spam Value Chain”, which of the following statements are true? “Spammers” here refer to operators of various parts of the “spam value chain.”",
          "options": [
            {
              "id": "opt-A",
              "text": "Spammers run their spam-advertised web sites on compromised user machines that are part of a botnet."
            },
            {
              "id": "opt-B",
              "text": "Spammers need to register domain names in order for their spam-based advertisements to be effective."
            },
            {
              "id": "opt-C",
              "text": "There is a high cost for spammers to switch acquiring banks."
            },
            {
              "id": "opt-D",
              "text": "B and C"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-df997f0d08845e99",
          "text": "In a _____________ attack, the extra data that holds some specific instructions in the memory for actions is projected by a cyber-criminal or penetration tester to crack the system.",
          "options": [
            {
              "id": "opt-A",
              "text": "Phishing"
            },
            {
              "id": "opt-B",
              "text": "MiTM"
            },
            {
              "id": "opt-C",
              "text": "Buffer-overflow"
            },
            {
              "id": "opt-D",
              "text": "Clickjacking"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-17817d48eda65d16",
          "text": "_______________ is a popular tool used for network analysis in multiprotocol diverse network.",
          "options": [
            {
              "id": "opt-A",
              "text": "Snort"
            },
            {
              "id": "opt-B",
              "text": "SuperScan"
            },
            {
              "id": "opt-C",
              "text": "Burp Suit"
            },
            {
              "id": "opt-D",
              "text": "EtterPeak"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-c8b95e1985a6be73",
          "text": "___________________ is alike as that of Access Point (AP) from 802.11, & the mobile operators uses it for offering signal coverage.",
          "options": [
            {
              "id": "opt-A",
              "text": "Base Signal Station"
            },
            {
              "id": "opt-B",
              "text": "Base Transmitter Station"
            },
            {
              "id": "opt-C",
              "text": "Base Transceiver Station"
            },
            {
              "id": "opt-D",
              "text": "Transceiver Station"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-15b874cd6a530248",
          "text": "A __________ is a sequential segment of the memory location that is allocated for containing some data such as a character string or an array of integers.",
          "options": [
            {
              "id": "opt-A",
              "text": "stack"
            },
            {
              "id": "opt-B",
              "text": "queue"
            },
            {
              "id": "opt-C",
              "text": "external storage"
            },
            {
              "id": "opt-D",
              "text": "buffer"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-a289eb089299cefc",
          "text": "Which form of encryption does WPA use?",
          "options": [
            {
              "id": "opt-A",
              "text": "Shared key"
            },
            {
              "id": "opt-B",
              "text": "LEAP"
            },
            {
              "id": "opt-C",
              "text": "TKIP"
            },
            {
              "id": "opt-D",
              "text": "AES"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-82d6358d2bc2cbdb",
          "text": "Let suppose a search box of an application can take at most 200 words, and you’ve inserted more than that and pressed the search button; the system crashes. Usually this is because of limited __________",
          "options": [
            {
              "id": "opt-A",
              "text": "buffer"
            },
            {
              "id": "opt-B",
              "text": "external storage"
            },
            {
              "id": "opt-C",
              "text": "processing power"
            },
            {
              "id": "opt-D",
              "text": "local storage"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-f6998b4f83eedbcc",
          "text": "___________________ began to show up few years back on wireless access points as a new way of adding or connecting new devices.",
          "options": [
            {
              "id": "opt-A",
              "text": "WPA2"
            },
            {
              "id": "opt-B",
              "text": "WPA"
            },
            {
              "id": "opt-C",
              "text": "WPS"
            },
            {
              "id": "opt-D",
              "text": "WEP"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-f4fefc8fb5b192b8",
          "text": "What are the port states determined by Nmap?",
          "options": [
            {
              "id": "opt-A",
              "text": "Active, inactive, standby"
            },
            {
              "id": "opt-B",
              "text": "Open, half-open, closed"
            },
            {
              "id": "opt-C",
              "text": "Open, filtered, unfiltered"
            },
            {
              "id": "opt-D",
              "text": "Active, closed, unused"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-f5c0cc964b50ee26",
          "text": "Which among the following is the least strong security encryption standard?",
          "options": [
            {
              "id": "opt-A",
              "text": "WEP"
            },
            {
              "id": "opt-B",
              "text": "WPA"
            },
            {
              "id": "opt-C",
              "text": "WPA2"
            },
            {
              "id": "opt-D",
              "text": "WPA3"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-cba1894882c66076",
          "text": "Why is it that the compiler does not know the absolute address of a local variable?",
          "options": [
            {
              "id": "opt-A",
              "text": "Programs are not allowed to reference memory using absolute addresses"
            },
            {
              "id": "opt-B",
              "text": "The size of the address depends on the architecture the program will run on"
            },
            {
              "id": "opt-C",
              "text": "As a stack-allocated variable, it could have different addresses depending on when its containing function is called"
            },
            {
              "id": "opt-D",
              "text": "Compiler writers are not very good at that sort of thing"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-baac8723047b432f",
          "text": "The stack is memory for storing",
          "options": [
            {
              "id": "opt-A",
              "text": "Local variables"
            },
            {
              "id": "opt-B",
              "text": "Program code"
            },
            {
              "id": "opt-C",
              "text": "Dynamically linked libraries"
            },
            {
              "id": "opt-D",
              "text": "Global variables"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-880a8b29b453e2b5",
          "text": "Can a stream cipher have perfect secrecy?",
          "options": [
            {
              "id": "opt-A",
              "text": "Yes, if the PRG is really “secure”"
            },
            {
              "id": "opt-B",
              "text": "No, there are no ciphers with perfect secrecy"
            },
            {
              "id": "opt-C",
              "text": "Yes, every cipher has perfect secrecy"
            },
            {
              "id": "opt-D",
              "text": "No, since the key is shorter than the message"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-99077819de17e173",
          "text": "Which of the following does authorization aim to accomplish?",
          "options": [
            {
              "id": "opt-A",
              "text": "Restrict what operations/data the user can access"
            },
            {
              "id": "opt-B",
              "text": "Determine if the user is an attacker"
            },
            {
              "id": "opt-C",
              "text": "Flag the user if he/she misbehaves"
            },
            {
              "id": "opt-D",
              "text": "Determine who the user is"
            }
          ],
          "correctOptionId": "opt-A"
        }
      ]
    },
    {
      "id": "masters-computer-security-u1-external-l07",
      "title": "Computer Security — Quiz 7",
      "type": "quiz",
      "duration": 30,
      "questions": [
        {
          "id": "mmlu-a2bf1192189fcf3d",
          "text": "The message must be encrypted at the sender site and decrypted at the",
          "options": [
            {
              "id": "opt-A",
              "text": "Sender Site"
            },
            {
              "id": "opt-B",
              "text": "Site"
            },
            {
              "id": "opt-C",
              "text": "Receiver site"
            },
            {
              "id": "opt-D",
              "text": "Conferencing"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-32cd127a25d85ad8",
          "text": "A _________________ may be a hidden part of a program, a separate infected program a Trojan in disguise of an executable or code in the firmware of any system’s hardware.",
          "options": [
            {
              "id": "opt-A",
              "text": "crypter"
            },
            {
              "id": "opt-B",
              "text": "virus"
            },
            {
              "id": "opt-C",
              "text": "backdoor"
            },
            {
              "id": "opt-D",
              "text": "key-logger"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-4421d3e8203842dd",
          "text": "How is IP address spoofing detected?",
          "options": [
            {
              "id": "opt-A",
              "text": "Installing and configuring a IDS that can read the IP header"
            },
            {
              "id": "opt-B",
              "text": "Comparing the TTL values of the actual and spoofed addresses"
            },
            {
              "id": "opt-C",
              "text": "Implementing a firewall to the network"
            },
            {
              "id": "opt-D",
              "text": "Identify all TCP sessions that are initiated but does not complete successfully"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-b7fb13f54780816f",
          "text": "Which of the following is not an example of presentation layer issues?",
          "options": [
            {
              "id": "opt-A",
              "text": "Poor handling of unexpected input can lead to the execution of arbitrary instructions"
            },
            {
              "id": "opt-B",
              "text": "Unintentional or ill-directed use of superficially supplied input"
            },
            {
              "id": "opt-C",
              "text": "Cryptographic flaws in the system may get exploited to evade privacy"
            },
            {
              "id": "opt-D",
              "text": "Weak or non-existent authentication mechanisms"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-64f85408fee0e710",
          "text": "Suppose Unix did not provide a way of passing file descriptors between processes, but still allowed inheriting file descriptors from a parent on fork and exec. What aspects of the OKWS design would break without file descriptor passing?\n1. It would be impossible for services to send messages to oklogd.\n2. It would be impossible for services to get a TCP connection to a database proxy.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-c30603196cccf2ec",
          "text": "Why would a ping sweep be used?",
          "options": [
            {
              "id": "opt-A",
              "text": "To identify live systems"
            },
            {
              "id": "opt-B",
              "text": "To locate live systems"
            },
            {
              "id": "opt-C",
              "text": "To identify open ports"
            },
            {
              "id": "opt-D",
              "text": "To locate firewalls"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-72a57138d58f20fb",
          "text": "The four Primary Security Principles related to messages are",
          "options": [
            {
              "id": "opt-A",
              "text": "Confidentiality, Integrity, Non repudiation and Authentication"
            },
            {
              "id": "opt-B",
              "text": "Confidentiality, Access Control, Integrity, Non repudiation"
            },
            {
              "id": "opt-C",
              "text": "Authentication, Authorization, Availability, Integrity"
            },
            {
              "id": "opt-D",
              "text": "Availability, Authorization, Confidentiality, Integrity"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-95094f938844b112",
          "text": "What was the first buffer overflow attack?",
          "options": [
            {
              "id": "opt-A",
              "text": "Love Bug"
            },
            {
              "id": "opt-B",
              "text": "SQL Slammer"
            },
            {
              "id": "opt-C",
              "text": "Morris Worm"
            },
            {
              "id": "opt-D",
              "text": "Code Red"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-3d42356e638d56b5",
          "text": "The ______________ can cost you money, by sending text messages from your mobile phone numbers.",
          "options": [
            {
              "id": "opt-A",
              "text": "IM – Trojans"
            },
            {
              "id": "opt-B",
              "text": "Backdoor Trojans"
            },
            {
              "id": "opt-C",
              "text": "SMS Trojan"
            },
            {
              "id": "opt-D",
              "text": "Ransom Trojan"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-7f6ed2c297408a2b",
          "text": "Three of the following are classic security properties; which one is not?",
          "options": [
            {
              "id": "opt-A",
              "text": "Confidentiality"
            },
            {
              "id": "opt-B",
              "text": "Availability"
            },
            {
              "id": "opt-C",
              "text": "Correctness"
            },
            {
              "id": "opt-D",
              "text": "Integrity"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-4a91e2a256e7150e",
          "text": "What is penetration testing?",
          "options": [
            {
              "id": "opt-A",
              "text": "A procedure for testing libraries or other program components for vulnerabilities"
            },
            {
              "id": "opt-B",
              "text": "Whole-system testing for security flaws and bugs"
            },
            {
              "id": "opt-C",
              "text": "A security-minded form of unit testing that applies early in the development process"
            },
            {
              "id": "opt-D",
              "text": "All of the above"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-18fca12182a0e7d2",
          "text": "Suppose a user has an iPhone (running iOS) and downloads an app called Innocent from the Apple App Store and installs it. The user unlocks the phone and runs Innocent. Innocent exploits a bug in the iOS kernel which allows Innocent to redirect execution inside the kernel to code that Innocent controls. Now Innocent can execute any instructions it likes inside the iOS kernel. Innocent is not able to exploit any bugs in the phone’s secure enclave. Can Innocent read the user’s private information stored in the phone’s flash (e.g. Contacts and messages), or will the security measures described in the paper keep the data private? If Innocent is only able to see encrypted data, then the phone has successfully kept the data private. Circle the security features of the phone (if any) that will prevent Innocent from reading information from the flash on the phone.",
          "options": [
            {
              "id": "opt-A",
              "text": "Secure boot chain"
            },
            {
              "id": "opt-B",
              "text": "System software authorization"
            },
            {
              "id": "opt-C",
              "text": "The secure enclave’s ephemeral key"
            },
            {
              "id": "opt-D",
              "text": "None of the above"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-16024aecc1795f8e",
          "text": "Why is it that anti-virus scanners would not have found an exploitation of Heartbleed?",
          "options": [
            {
              "id": "opt-A",
              "text": "It's a vacuous question: Heartbleed only reads outside a buffer, so there is no possible exploit"
            },
            {
              "id": "opt-B",
              "text": "Anti-virus scanners tend to look for viruses and other malicious"
            },
            {
              "id": "opt-C",
              "text": "Heartbleed attacks the anti-virus scanner itself"
            },
            {
              "id": "opt-D",
              "text": "Anti-virus scanners tend to look for viruses and other malicious code, but Heartbleed exploits steal secrets without injecting any code"
            }
          ],
          "correctOptionId": "opt-D"
        },
        {
          "id": "mmlu-4931933a1088632d",
          "text": "Suppose we define h(H, m) = E(m, H)h(H,m)=E(m,H). Then the resulting h(\\cdot,\\cdot)h(⋅,⋅) is not collision resistant: to build a collision (H,m)(H,m) and (H’,m’)(H’,m’) choose random (H,m,m’)(H,m,m’) and construct H’H’ as follows:",
          "options": [
            {
              "id": "opt-A",
              "text": "H’=D(m’, E(m,H))"
            },
            {
              "id": "opt-B",
              "text": "H’=E(m’,D(m,H))"
            },
            {
              "id": "opt-C",
              "text": "H’=E(m’,E(m,H))"
            },
            {
              "id": "opt-D",
              "text": "H’=D(m’,D(m,H))"
            }
          ],
          "correctOptionId": "opt-A"
        },
        {
          "id": "mmlu-20bc81e60e02325e",
          "text": "Which of the following does authentication aim to accomplish?",
          "options": [
            {
              "id": "opt-A",
              "text": "Restrict what operations/data the user can access"
            },
            {
              "id": "opt-B",
              "text": "Determine if the user is an attacker"
            },
            {
              "id": "opt-C",
              "text": "Flag the user if he/she misbehaves"
            },
            {
              "id": "opt-D",
              "text": "Determine who the user is"
            }
          ],
          "correctOptionId": "opt-D"
        }
      ]
    },
    {
      "id": "masters-computer-security-u1-external-l08",
      "title": "Computer Security — Quiz 8",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "mmlu-f5d0bc35b2ba0155",
          "text": "Assume that a TLS connection has been established successfully between a client and a server. Establishing the session included checking the server certificate and executing a DiffieHelmann exchange, but the client did not provide a client certificate. Further, assume that the client and server are honest, that the client and server don’t leak their keys, and that the cryptography is good. Which of the following attacks does TLS protect against?\n1. An attacker stealing the server’s private key and reading the plaintext of recorded past connections.\n2. An attacker breaking into a certificate authority and creating a fake certificate for the server.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-c6d7744c99fcadf8",
          "text": "Can we build a secure PRP from a secure PRG?",
          "options": [
            {
              "id": "opt-A",
              "text": "No, it cannot be done"
            },
            {
              "id": "opt-B",
              "text": "Yes, just plug the GGM PRF into the Luby-Rackoff theorem"
            },
            {
              "id": "opt-C",
              "text": "It depends on the underlying PRG"
            },
            {
              "id": "opt-D",
              "text": "Option text"
            }
          ],
          "correctOptionId": "opt-B"
        },
        {
          "id": "mmlu-389fa10fe99d9575",
          "text": "A hash function guarantees the integrity of a message. It guarantees that the message has not be",
          "options": [
            {
              "id": "opt-A",
              "text": "Replaced"
            },
            {
              "id": "opt-B",
              "text": "Overview"
            },
            {
              "id": "opt-C",
              "text": "Changed"
            },
            {
              "id": "opt-D",
              "text": "Violated"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-7ab96cd6e0ef8b32",
          "text": "Statement 1| U2F is a stronger second factor than sending an SMS code to a user’s smartphone. Statement 2| An attacker that knows a user’s password can easily guess the U2F key to access the user’s account.",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-1105a8db8e89b39c",
          "text": "The openSSL implementation described in “Remote Timing Attacks are Practical” (by Brumley and Boneh) uses the following performance optimizations: Chinese Remainder (CR), Montgomery Representation (MR), Karatsuba Multiplication (KM), and Repeated squaring and Sliding windows (RS). Which of the following options would close the timing channel attack described in the paper if you turned the listed optimizations off?\n1. CR, MR, KM, and RS.\n2. RS",
          "options": [
            {
              "id": "opt-A",
              "text": "True, True"
            },
            {
              "id": "opt-B",
              "text": "False, False"
            },
            {
              "id": "opt-C",
              "text": "True, False"
            },
            {
              "id": "opt-D",
              "text": "False, True"
            }
          ],
          "correctOptionId": "opt-C"
        },
        {
          "id": "mmlu-fed876faea6b45ca",
          "text": "___________ is a process of wireless traffic analysis that may be helpful for forensic investigations or during troubleshooting any wireless issue.",
          "options": [
            {
              "id": "opt-A",
              "text": "Wireless Traffic Sniffing"
            },
            {
              "id": "opt-B",
              "text": "WiFi Traffic Sniffing"
            },
            {
              "id": "opt-C",
              "text": "Wireless Traffic Checking"
            },
            {
              "id": "opt-D",
              "text": "Wireless Transmission Sniffing"
            }
          ],
          "correctOptionId": "opt-A"
        }
      ]
    }
  ],
  "tags": [
    "external-ai",
    "curriculum-import",
    "masters",
    "computer-security",
    "mmlu"
  ],
  "minAge": 21,
  "maxAge": 99,
  "version": "external-1.0",
  "difficultyBand": "advanced",
  "gradeBand": "graduate",
  "learningObjectives": [
    "Master key concepts in computer security",
    "Apply analytical reasoning to computer security problems",
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
